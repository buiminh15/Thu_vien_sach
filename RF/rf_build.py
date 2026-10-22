#!/usr/bin/env python3
"""
Dựng dữ liệu hình cho trình xem "Good Practices in Refrigeration" (RF).

Cách dùng:
    pip install pymupdf
    python RF/rf_build.py 8 7 14          # các chương theo số chương của sách
    python RF/rf_build.py 8 --dump        # in văn bản tiếng Anh theo thứ tự đọc (để dịch)

Kết quả: stock_books/site/rf/ch<NN>/fig_<trang pdf>_<k>.jpg  (hình cắt từ trang, giữ chấm/số chú thích)
          stock_books/site/rf/ch<NN>/page_<trang pdf>.jpg    (ảnh cả trang để đối chiếu bản gốc)
Trang PDF = trang in + 8.
"""
import sys, re, json
from pathlib import Path
import pymupdf

try: sys.stdout.reconfigure(encoding='utf-8')
except Exception: pass

ROOT = Path(__file__).resolve().parent.parent
PDF = ROOT / 'giz2010-en-good-practices-in-refrigeration.pdf'
OUT = ROOT / 'stock_books' / 'site' / 'rf'
OFFSET = 8
# chương: (trang in đầu, trang in cuối)
CH = {1: (5, 17), 2: (18, 31), 3: (32, 40), 4: (41, 52), 5: (55, 76), 6: (77, 80), 7: (81, 89), 8: (90, 94), 9: (95, 103),
      10: (104, 120), 11: (121, 128), 12: (129, 147), 13: (148, 163), 14: (164, 169), 15: (170, 175)}
FIG_DPI, PAGE_DPI, PAD = 200, 95, 2
OVR = json.loads((Path(__file__).with_name('fig_overrides.json')).read_text(encoding='utf8')) if (Path(__file__).with_name('fig_overrides.json')).exists() else {}
# fig_overrides.json: {"<trang>_<k>": [x0,y0,x1,y1] | null, "<trang>_c": [clip]} – cắt tay hình có chấm/số chú thích hoặc ghép nhiều ảnh


def clean(t):
    t = t.replace('�', '•').replace('­', '')
    return re.sub(r'\s+', ' ', t).strip()


def page_items(p):
    """Trả về (figures, blocks) đã loại header/footer/sidebar."""
    W, H = p.rect.width, p.rect.height
    figs = []
    for im in p.get_images(full=True):
        for r in p.get_image_rects(im[0]):
            if r.width > 25 and r.height > 25:
                figs.append(pymupdf.Rect(r))
    figs.sort(key=lambda r: (round(r.y0 / 8), r.x0))
    blocks = []
    for b in p.get_text('blocks'):
        if b[6] != 0: continue
        x0, y0, x1, y1, t = b[:5]; t = clean(t)
        if not t: continue
        if y0 < 32 or y0 > 560 and len(t) < 5: continue          # đầu/cuối trang
        if (x1 - x0) < 16 or (y1 - y0) > 70 and (x1 - x0) < 18: continue  # chữ dọc sidebar
        if t in ('Part II', 'Part I', 'SKILLS AND OPERATION', 'TOOLS AND EQUIPMENT'): continue
        if re.fullmatch(r'\d{1,3}', t) and y0 > 540: continue
        blocks.append((round(x0), round(y0), round(x1), round(y1), t))
    blocks.sort(key=lambda b: (b[1], b[0]))
    return figs, blocks


def build_chapter(doc, n, dump):
    a, b = CH[n]; out = OUT / f'ch{n:02d}'; out.mkdir(parents=True, exist_ok=True)
    for pn in range(a + OFFSET - 1, b + OFFSET):
        p = doc[pn]; figs, blocks = page_items(p)
        pg = pn + 1
        pf = out / f'page_{pg}.jpg'
        if not pf.exists(): p.get_pixmap(dpi=PAGE_DPI).save(pf, jpg_quality=70)
        ids = []
        for k, r in enumerate(figs, 1):
            key = f'{pg}_{k}'
            if key in OVR and OVR[key] is None:
                continue                                    # hình đã gộp vào hình ghép (composite)
            o = OVR.get(key)
            if isinstance(o, dict):
                for m in o.get('mask', []): p.draw_rect(pymupdf.Rect(*m), color=None, fill=(1, 1, 1))   # xóa chữ tràn vào khung
                o = o['clip']
            c = pymupdf.Rect(*o) if o else pymupdf.Rect(r.x0 - PAD, r.y0 - PAD, r.x1 + PAD, r.y1 + PAD)
            c &= p.rect
            f = out / f'fig_{key}.jpg'
            p.get_pixmap(dpi=FIG_DPI, clip=c).save(f, jpg_quality=80)
            ids.append((k, [round(x) for x in r]))
        for key, clip in OVR.items():                         # hình ghép: khóa dạng '<trang>_c'
            if key.startswith(f'{pg}_c') and clip:
                if isinstance(clip, dict):
                    for m in clip.get('mask', []): p.draw_rect(pymupdf.Rect(*m), color=None, fill=(1, 1, 1))
                    clip = clip['clip']
                p.get_pixmap(dpi=FIG_DPI, clip=pymupdf.Rect(*clip) & p.rect).save(out / f'fig_{key}.jpg', jpg_quality=80)
                ids.append((key, clip))
        if dump:
            print(f'\n##### PDF {pg} (in {pg - OFFSET})')
            for k, r in ids: print(f'  [FIG {pg}_{k}] at {r}')
            for x0, y0, x1, y1, t in blocks: print(f'  ({x0},{y0}) {t}')


def main(a):
    dump = '--dump' in a; nums = [int(x) for x in a if x.isdigit()]
    doc = pymupdf.open(PDF); OUT.mkdir(parents=True, exist_ok=True)
    for n in nums: build_chapter(doc, n, dump)


if __name__ == '__main__': main(sys.argv[1:])
