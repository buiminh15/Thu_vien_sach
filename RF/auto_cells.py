#!/usr/bin/env python3
"""Tự sinh 'ô hình' (cell) cho các trang catalogue (Phần I): gom ảnh theo hàng, cắt từ đáy mục trước tới thanh chú thích 'Figure N'.
Dùng: python RF/auto_cells.py 1 2 3   -> ghi thêm vào RF/fig_overrides.json (hình gốc = null, ô = '<trang>_c<i>')."""
import sys, json, re
from pathlib import Path
import pymupdf
sys.path.insert(0, str(Path(__file__).parent))
from rf_build import CH, OFFSET, PDF, clean
ovp = Path(__file__).with_name('fig_overrides.json')
ov = json.loads(ovp.read_text(encoding='utf8')) if ovp.exists() else {}
doc = pymupdf.open(PDF)
for n in map(int, sys.argv[1:]):
    a, b = CH[n]
    for pn in range(a + OFFSET - 1, b + OFFSET):
        p = doc[pn]; pg = pn + 1
        rs = []
        for k, im in enumerate(p.get_images(full=True), 1):
            for r in p.get_image_rects(im[0]):
                if r.width > 25 and r.height > 25: rs.append(pymupdf.Rect(r))
        # khóa raster theo thứ tự rf_build (sort như page_items)
        rs.sort(key=lambda r: (round(r.y0 / 8), r.x0))
        keyed = [(f'{pg}_{i}', r) for i, r in enumerate(rs, 1)]
        if not keyed: continue
        blocks = []
        for bk in p.get_text('blocks'):
            if bk[6] != 0: continue
            t = clean(bk[4])
            if len(t) <= 2 or bk[1] < 40 or bk[0] < 40 and bk[2] - bk[0] < 20: continue
            if t in ('Part I', 'Part II', 'TOOLS AND EQUIPMENT', 'SKILLS AND OPERATION') or re.fullmatch(r'\d{1,3}', t): continue
            blocks.append((bk[0], bk[1], bk[2], bk[3], t))
        caps = sorted([x for x in blocks if x[4].startswith('Figure')], key=lambda x: x[1])
        # gom theo thanh chú thích bên dưới (mỗi hình 'Figure N' = một ô)
        groups = {}
        for k, r in sorted(keyed, key=lambda kr: kr[1].y0):
            cap = next((c for c in caps if c[1] >= r.y1 - 6), None)
            gk = cap[1] if cap else 9999 + r.y0
            g = groups.setdefault(gk, {'y0': r.y0, 'y1': r.y1, 'keys': []})
            g['y0'] = min(g['y0'], r.y0); g['y1'] = max(g['y1'], r.y1); g['keys'].append(k)
        rows = [groups[g] for g in sorted(groups)]
        prev_bottom = 46
        for i, row in enumerate(rows, 1):
            cap = next((c for c in caps if c[1] >= row['y1'] - 6), None)
            y1 = (cap[1] - 6) if cap else min(row['y1'] + 30, 545)
            # văn bản nằm giữa prev_bottom và đầu hàng ảnh
            above = [x for x in blocks if x[3] <= row['y0'] + 3 and x[1] >= prev_bottom - 1 and x[1] > 40]
            lb = max([x[3] for x in above] + [prev_bottom]) + 2
            y0 = max(lb, row['y0'] - 34)
            clip = [48, round(y0), 372, round(y1)]
            for k in row['keys']: ov[k] = None
            ov[f'{pg}_c{i}'] = clip
            # đáy "legend" của ô này: các block sau caption đến hết trước hàng kế
            nxt = rows[i]['y0'] if i < len(rows) else 560
            leg = [x for x in blocks if cap and x[1] >= cap[1] - 1 and x[1] < nxt - 4]
            prev_bottom = max([x[3] for x in leg] + [y1])
ovp.write_text(json.dumps(ov, indent=1), encoding='utf8')
print('ok', len(ov))
