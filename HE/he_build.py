#!/usr/bin/env python3
"""
Dựng dữ liệu cho trình xem Hot English (PDF + MP3) trong thư viện.

Cách dùng:
    pip install pymupdf
    python HE/he_build.py HE/108            # một số báo
    python HE/he_build.py HE/108 HE/109     # nhiều số báo
    python HE/he_build.py --all             # mọi thư mục con của HE/ có PDF

Mỗi thư mục số báo cần: một file *.pdf và thư mục chứa các file *.mp3 (tên có "trk 05" hoặc "track 5").
Kết quả ghi vào stock_books/site/he/<số>/ : pages/*.jpg, audio/*.mp3, issue.js
và stock_books/site/he/index.js (danh sách số báo).
Muốn sửa tay track↔trang: tạo HE/<số>/tracks_override.json, ví dụ {"18": {"pages": [44]}, "1": {"pages": [4]}}


"""
import sys, re, json, shutil
from pathlib import Path
import pymupdf

try:
    sys.stdout.reconfigure(encoding='utf-8')
except Exception:
    pass

ROOT = Path(__file__).resolve().parent.parent
SITE = ROOT / 'stock_books' / 'site'
OUT = SITE / 'he'
DPI = 120
QUALITY = 72


def parse_cd_index(doc):
    """Đọc 'CD index' ở trang mục lục -> {số track: tên}."""
    for pno in range(min(8, len(doc))):
        t = doc[pno].get_text()
        if 'CD index' not in t:
            continue
        seg = t.split('CD index', 1)[1]
        tracks, cur = {}, None
        for line in seg.split('\n'):
            m = re.match(r'^\s*(\d{1,2})\.\s*(.*)$', line)
            if m and (cur is None or int(m.group(1)) == cur + 1):
                cur = int(m.group(1)); tracks[cur] = m.group(2).strip()
                if cur == 29:
                    break
            elif cur is not None and line.strip() and not line.strip().isdigit():
                tracks[cur] = (tracks[cur] + ' ' + line.strip()).strip()
        if tracks:
            return {k: re.sub(r'\s+', ' ', v).replace('\t', ' ').strip() for k, v in tracks.items()}
    return {}


def find_badges(doc):
    """Tìm nhãn 'track N' (chữ thật trong PDF) -> {n: [(trang, x, y, w, h) theo tỉ lệ]}"""
    res = {}
    for pno, p in enumerate(doc, 1):
        W = p.get_text('words')
        pw, ph = p.rect.width, p.rect.height
        for w in W:
            if w[4].lower() != 'track' or (w[2] - w[0]) < 8:
                continue
            best = None
            for v in W:
                if re.fullmatch(r'\d{1,2}', v[4]) and (v[2] - v[0]) >= 4:
                    dx = v[0] - w[0]; dy = abs((v[1] + v[3]) / 2 - (w[1] + w[3]) / 2)
                    if -5 < dx < 80 and dy < 40:
                        d = abs(dx) + dy * 2
                        if best is None or d < best[0]:
                            best = (d, v)
            if best:
                n = int(best[1][4]); v = best[1]
                x0, y0 = min(w[0], v[0]), min(w[1], v[1]); x1, y1 = max(w[2], v[2]), max(w[3], v[3])
                res.setdefault(n, []).append({'page': pno, 'x': round(x0 / pw, 4), 'y': round(y0 / ph, 4), 'w': round((x1 - x0) / pw, 4), 'h': round((y1 - y0) / ph, 4)})
    return res


def region_text(doc, page_no, y_from, y_to):
    p = doc[page_no - 1]
    H = p.rect.height
    blocks = [b for b in p.get_text('blocks') if b[6] == 0 and y_from * H <= b[1] < y_to * H]
    # sắp theo cột (x) rồi dòng (y) – gần đúng cho bố cục 2–3 cột
    colw = p.rect.width / 3
    blocks.sort(key=lambda b: (int(b[0] // colw), b[1]))
    txt = '\n'.join(re.sub(r'\s+', ' ', b[4]).strip() for b in blocks if len(b[4].strip()) > 2)
    return txt.strip()


def build_issue(folder: Path):
    num = folder.name
    pdfs = sorted(folder.glob('*.pdf')) + sorted(folder.glob('*.PDF'))
    if not pdfs:
        print('Bỏ qua (không có PDF):', folder); return None
    doc = pymupdf.open(pdfs[0])
    out = OUT / num
    (out / 'pages').mkdir(parents=True, exist_ok=True)
    (out / 'audio').mkdir(parents=True, exist_ok=True)
    print(f'[{num}] {pdfs[0].name}: {len(doc)} trang – render ảnh…')
    for i, p in enumerate(doc, 1):
        f = out / 'pages' / f'p{i:02d}.jpg'
        if not f.exists():
            p.get_pixmap(dpi=DPI).save(f, jpg_quality=QUALITY)

    idx = parse_cd_index(doc)
    badges = find_badges(doc)
    # MP3
    mp3 = {}
    for f in folder.rglob('*.mp3'):
        m = re.search(r'(?:trk|track)\s*0*(\d+)', f.name, re.I)
        if m:
            n = int(m.group(1)); mp3[n] = f
            dst = out / 'audio' / f'trk{n:02d}.mp3'
            if not dst.exists() or dst.stat().st_size != f.stat().st_size:
                shutil.copy2(f, dst)
    # trang tapescript
    script_start = next((i for i, p in enumerate(doc, 1) if re.search(r'tapescripts?\s*&', p.get_text(), re.I)), None)
    script_pages = {}
    if script_start:
        for i in range(script_start, len(doc) + 1):
            for m in re.finditer(r'\(track\s*(\d+)\)', doc[i - 1].get_text(), re.I):
                script_pages.setdefault(int(m.group(1)), set()).add(i)
    override = {}
    of = folder / 'tracks_override.json'
    if of.exists():
        override = json.loads(of.read_text(encoding='utf8'))

    nums = sorted(set(idx) | set(badges) | set(mp3))
    tracks = []
    for n in nums:
        title = idx.get(n, f'Track {n}')
        marks = badges.get(n, [])
        pages = sorted({m['page'] for m in marks})
        if not pages:  # dò theo tên
            key = ' '.join(re.sub(r'[^\w\s-]', ' ', title.split(':')[-1]).split()[-2:])
            if key and not re.match(r'(?i)(radio ad|hello|goodbye)', title):
                hits = [i for i, p in enumerate(doc, 1) if i > 3 and (not script_start or i < script_start) and re.search(re.escape(key), p.get_text(), re.I)]
                if len(hits) == 1:
                    pages = hits
        if not pages and script_pages.get(n):
            pages = [min(script_pages[n])]
        ov = override.get(str(n), {})
        if 'pages' in ov:
            pages = ov['pages']
        t = {'n': n, 'title': title, 'pages': pages, 'marks': marks,
             'file': f'he/{num}/audio/trk{n:02d}.mp3' if n in mp3 else None,
             'scriptPages': sorted(script_pages.get(n, []))}
        tracks.append(t)
    # văn bản theo vùng cho track có nhãn
    by_page = {}
    for t in tracks:
        for m in t['marks']:
            by_page.setdefault(m['page'], []).append((m['y'], t))
    for pg, lst in by_page.items():
        lst.sort(key=lambda x: x[0])
        for k, (y, t) in enumerate(lst):
            y0 = 0 if k == 0 else max(0, lst[k][0] - 0.10)
            y1 = 1 if k == len(lst) - 1 else max(y0, lst[k + 1][0] - 0.10)
            txt = region_text(doc, pg, y0, y1)
            t['text'] = (t.get('text', '') + ('\n' if t.get('text') else '') + txt).strip()

    issue = {'id': num, 'title': f'Hot English – số {num}', 'pageCount': len(doc), 'pageDir': f'he/{num}/pages/',
             'ratio': round(doc[0].rect.height / doc[0].rect.width, 4), 'tracks': tracks}
    (out / 'issue.js').write_text('window.HE_ISSUES = window.HE_ISSUES || {};\nHE_ISSUES[' + json.dumps(num) + '] = ' + json.dumps(issue, ensure_ascii=False) + ';\n', encoding='utf8')
    print(f'[{num}] {len(tracks)} track ({len(mp3)} có file mp3), {sum(1 for t in tracks if t["pages"])} track gắn được trang.')
    return num


def write_index():
    ids = sorted([p.name for p in OUT.iterdir() if (p / 'issue.js').exists()], key=lambda s: (len(s), s))
    (OUT / 'index.js').write_text('window.HE_LIST = ' + json.dumps(ids) + ';\n', encoding='utf8')


def main(argv):
    folders = []
    if '--all' in argv or not argv:
        folders = [p for p in (ROOT / 'HE').iterdir() if p.is_dir()]
    else:
        folders = [Path(a) if Path(a).is_absolute() else ROOT / a for a in argv]
    OUT.mkdir(parents=True, exist_ok=True)
    for f in folders:
        build_issue(f)
    write_index()


if __name__ == '__main__':
    main(sys.argv[1:])
