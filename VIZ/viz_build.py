#!/usr/bin/env python3
"""
Dựng dữ liệu cho trình xem tạp chí Viz (ảnh trang + khối chữ có tọa độ) trong thư viện.

Cách dùng (cần: pip install pymupdf rapidocr opencv-python-headless pillow):
    python VIZ/viz_build.py 360 --letters 7-11 --comic 30,31 --ocr 45 --text 40
    python VIZ/viz_build.py 360 --letters 7-11 --comic 30,31 --ocr 45 --text 40 --dump   # in chữ Anh để dịch

Loại trang:
  --letters  thư bạn đọc/Top Tips: gom các khối theo cột rồi tách từng "thư" bằng ký hiệu đầu dòng (ngôi sao)
  --comic    truyện tranh có lớp chữ (text layer): mỗi khối chữ = một bong bóng, có tọa độ để chèn dịch
  --ocr      trang chỉ có ảnh: dùng RapidOCR rồi gom các dòng thành bong bóng
  --text     bài chữ/từ điển: mỗi khối = một mục
Kết quả: stock_books/site/viz/<số>/pNN.jpg và blocks.js (window.VIZ_BL[<số>]). Bản dịch viết tay ở viz/<số>/tr.js.
"""
import sys, re, json, argparse
from pathlib import Path
import pymupdf

try: sys.stdout.reconfigure(encoding='utf-8')
except Exception: pass

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / 'Viz_-_November_2026.pdf'
OUT = ROOT / 'stock_books' / 'site' / 'viz'
DPI = 120


def parse_pages(s):
    out = []
    for part in (s or '').split(','):
        part = part.strip()
        if not part: continue
        if '-' in part:
            a, b = part.split('-'); out += list(range(int(a), int(b) + 1))
        else: out.append(int(part))
    return out


def clean(t):
    t = t.replace('�', "'").replace('­', '')
    t = re.sub(r'(\w)-\s*\n\s*(\w)', r'\1\2', t)           # nối từ bị ngắt dòng bằng gạch nối
    return re.sub(r'\s+', ' ', t).strip()


def bg_color(img, x0, y0, x1, y1):
    """Màu nền ước lượng (trung vị viền ngoài ô chữ) + màu chữ tương phản."""
    from PIL import Image
    W, H = img.size
    x0, y0, x1, y1 = max(0, int(x0)), max(0, int(y0)), min(W - 1, int(x1)), min(H - 1, int(y1))
    px = []
    for x in range(x0, x1, 2):
        px += [img.getpixel((x, y0)), img.getpixel((x, y1))]
    for y in range(y0, y1, 2):
        px += [img.getpixel((x0, y)), img.getpixel((x1, y))]
    if not px: return '#ffffff', '#000000'
    r = sorted(p[0] for p in px)[len(px) // 2]; g = sorted(p[1] for p in px)[len(px) // 2]; b = sorted(p[2] for p in px)[len(px) // 2]
    lum = 0.299 * r + 0.587 * g + 0.114 * b
    return '#%02x%02x%02x' % (r, g, b), ('#111111' if lum > 128 else '#f5f5f5')


def render(doc, pn, outdir):
    p = doc[pn - 1]
    f = outdir / f'p{pn:02d}.jpg'
    pm = p.get_pixmap(dpi=DPI)
    pm.save(f, jpg_quality=72)
    from PIL import Image
    return Image.open(f).convert('RGB'), p.rect.width, p.rect.height


def text_blocks(p):
    out = []
    for b in p.get_text('blocks'):
        if b[6] != 0: continue
        t = clean(b[4])
        if len(t) < 2 or re.fullmatch(r'\d{1,3}', t): continue
        out.append((b[0], b[1], b[2], b[3], t, b[4]))
    return out


def letters_units(p):
    """Tách các 'thư' theo ký hiệu đầu dòng (dòng chỉ gồm '5'); duyệt theo cột rồi theo y."""
    bl = [b for b in p.get_text('blocks') if b[6] == 0]
    bl.sort(key=lambda b: (round(b[0] / 60), b[1]))
    stream = []
    for b in bl:
        for line in b[4].split('\n'):
            stream.append(line)
    units, cur = [], []
    for line in stream:
        if line.strip() == '5':
            if cur: units.append(cur)
            cur = []
        else:
            cur.append(line)
    if cur: units.append(cur)
    res = []
    for u in units:
        t = clean('\n'.join(u))
        if len(t) > 6 and not t.startswith('letters@'): res.append(t)
    return res


def ocr_blocks(img):
    import numpy as np
    from rapidocr import RapidOCR
    arr = np.array(img)
    r = RapidOCR()(arr)
    lines = []
    boxes = [] if r.boxes is None else list(r.boxes)
    for b, t, s in zip(boxes, list(r.txts or []), list(r.scores or [])):
        xs = [q[0] for q in b]; ys = [q[1] for q in b]
        if s < 0.5 or len(t.strip()) < 2: continue
        lines.append([float(min(xs)), float(min(ys)), float(max(xs)), float(max(ys)), t.strip()])
    lines.sort(key=lambda l: (l[1], l[0]))
    groups = []
    for l in lines:
        hh = l[3] - l[1]
        placed = False
        for g in groups:
            gx0, gy0, gx1, gy1 = g['box']
            ov = min(gx1, l[2]) - max(gx0, l[0])
            if ov > 0.4 * min(gx1 - gx0, l[2] - l[0]) and -4 <= l[1] - gy1 <= 0.9 * hh + 4:
                g['lines'].append(l)
                g['box'] = [min(gx0, l[0]), min(gy0, l[1]), max(gx1, l[2]), max(gy1, l[3])]
                placed = True; break
        if not placed: groups.append({'box': l[:4], 'lines': [l]})
    return [(g['box'], ' '.join(x[4] for x in sorted(g['lines'], key=lambda x: (x[1], x[0])))) for g in groups]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('issue'); ap.add_argument('--letters'); ap.add_argument('--comic'); ap.add_argument('--ocr'); ap.add_argument('--text'); ap.add_argument('--dump', action='store_true')
    a = ap.parse_args()
    doc = pymupdf.open(PDF)
    outdir = OUT / a.issue; outdir.mkdir(parents=True, exist_ok=True)
    pages = {}
    todo = [(n, 'letters') for n in parse_pages(a.letters)] + [(n, 'comic') for n in parse_pages(a.comic)] + [(n, 'ocr') for n in parse_pages(a.ocr)] + [(n, 'text') for n in parse_pages(a.text)]
    for pn, kind in sorted(todo):
        img, W, H = render(doc, pn, outdir)
        p = doc[pn - 1]; iw, ih = img.size
        blocks = []
        if kind == 'letters':
            for k, t in enumerate(letters_units(p), 1):
                blocks.append({'id': f'{pn:02d}_{k}', 'en': t})
        elif kind in ('comic', 'text'):
            for k, (x0, y0, x1, y1, t, raw) in enumerate(text_blocks(p), 1):
                bgc, fg = bg_color(img, x0 * iw / W - 3, y0 * ih / H - 3, x1 * iw / W + 3, y1 * ih / H + 3)
                blocks.append({'id': f'{pn:02d}_{k}', 'x': round(x0 / W * 100, 2), 'y': round(y0 / H * 100, 2), 'w': round((x1 - x0) / W * 100, 2), 'h': round((y1 - y0) / H * 100, 2), 'en': t, 'bg': bgc, 'fg': fg})
        else:
            for k, (box, t) in enumerate(ocr_blocks(img), 1):
                x0, y0, x1, y1 = box
                bgc, fg = bg_color(img, x0 - 3, y0 - 3, x1 + 3, y1 + 3)
                blocks.append({'id': f'{pn:02d}_{k}', 'x': round(x0 / iw * 100, 2), 'y': round(y0 / ih * 100, 2), 'w': round((x1 - x0) / iw * 100, 2), 'h': round((y1 - y0) / ih * 100, 2), 'en': t, 'bg': bgc, 'fg': fg})
        pages[pn] = {'kind': kind, 'img': f'p{pn:02d}.jpg', 'ratio': round(H / W, 4), 'blocks': blocks}
        if a.dump:
            print(f'\n##### PAGE {pn} ({kind})')
            for b in blocks: print(f"  [{b['id']}] {b['en']}")
    (outdir / 'blocks.js').write_text('window.VIZ_BL = window.VIZ_BL || {};\nVIZ_BL[' + json.dumps(a.issue) + '] = ' + json.dumps(pages, ensure_ascii=False) + ';\n', encoding='utf8')
    print(f'ghi {len(pages)} trang, {sum(len(p["blocks"]) for p in pages.values())} khối')


if __name__ == '__main__':
    main()
