window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 2,
  title: 'Những kiến thức nhiệt lạnh cơ sở',
  intro: 'Áp suất, nhiệt độ, trạng thái, nhiệt hiện – nhiệt ẩn, entanpy, năng suất lạnh và các cách truyền nhiệt: bộ "từ vựng" bắt buộc trước khi đọc đồng hồ và sơ đồ máy lạnh.',
  sections: [
    { icon: '📏', title: 'Áp suất và các loại áp suất', blocks: [
      { t: 'p', x: 'Áp suất là lực tác dụng vuông góc lên một đơn vị diện tích. Đơn vị hợp pháp theo hệ SI là Pa (N/m²); trong kỹ thuật lạnh hay dùng kPa, MPa và bar (1 bar = 10⁵ Pa = 0,1 MPa).' },
      { t: 'table', head: ['Đơn vị', 'Tương đương'], rows: [
        ['1 at (kG/cm²)', '0,981 bar ≈ 735,6 mmHg ≈ 14,22 psi'],
        ['1 atm', '1,013 bar = 760 mmHg = 14,70 psi'],
        ['1 bar', '1,02 at = 750 mmHg = 14,5 psi'],
        ['1 psi', '0,0689 bar = 51,7 mmHg']
      ] },
      { t: 'h3', x: 'Bốn loại áp suất' },
      { t: 'list', items: [
        '<b>Áp suất khí quyển</b> (pk): đo bằng baromet; chuẩn 760 mmHg = 1,013 bar (mực nước biển, 0 °C).',
        '<b>Áp suất dư</b> (pd): số chỉ trên áp kế khi áp suất trong bình lớn hơn khí quyển.',
        '<b>Áp suất chân không</b> (pck): số chỉ trên chân không kế khi áp suất trong bình nhỏ hơn khí quyển.',
        '<b>Áp suất tuyệt đối</b> (p): áp suất thực tính từ điểm 0 tuyệt đối; chỉ loại này dùng trong bảng và đồ thị.'
      ] },
      { t: 'key', x: 'Trên bình áp suất cao: p = pk + pd.  Trên bình chân không: p = pk − pck.' },
      { t: 'tip', x: 'Ví dụ: áp kế chỉ 0,533 bar → p = 1,013 + 0,533 = 1,546 bar. Chân không kế chỉ 400 mmHg → p = 760 − 400 = 360 mmHg (≈ 0,48 bar).' },
      { t: 'widget', name: 'dl-press', title: 'Đổi đơn vị áp suất và tính áp suất tuyệt đối' }
    ] },
    { icon: '🌡️', title: 'Nhiệt độ và các thang nhiệt độ', blocks: [
      { t: 'p', x: 'Nhiệt độ biểu thị mức độ rung động của phân tử. Điểm không tuyệt đối là −273,15 °C = 0 K. Thang Celsius lấy nước đóng băng 0 °C và sôi 100 °C (100 vạch); thang Fahrenheit lấy 32 °F và 212 °F (180 vạch), nên 1 °F = 5/9 độ C.' },
      { t: 'table', head: ['Chuyển đổi', 'Công thức'], rows: [
        ['°F → °C', '°C = (°F − 32) × 5/9'],
        ['°C → °F', '°F = 32 + 9/5 × °C'],
        ['°C → K', 'K = °C + 273']
      ] },
      { t: 'tip', x: '65 °F = 18,3 °C; 25 °C = 77 °F. Nước đông ở 273 K và sôi ở 373 K. Ngày nay viết "K" (Kelvin), không còn viết "°K".' },
      { t: 'p', x: 'Mật độ ρ = m/V (kg/m³); thể tích riêng v = 1/ρ (m³/kg). Áp suất, nhiệt độ và thể tích riêng là ba thông số trạng thái cơ bản.' }
    ] },
    { icon: '💧', title: 'Trạng thái của vật chất', blocks: [
      { t: 'p', x: 'Vật chất có ba pha: rắn, lỏng, hơi. Máy lạnh tận dụng chuyển pha, nhất là hóa hơi và ngưng tụ của môi chất lạnh.' },
      { t: 'table', head: ['Quá trình', 'Chuyển từ → sang'], rows: [
        ['Hóa hơi (bay hơi, sôi)', 'lỏng → hơi'],
        ['Ngưng tụ', 'hơi → lỏng'],
        ['Chảy lỏng', 'rắn → lỏng'],
        ['Kết đông', 'lỏng → rắn'],
        ['Thăng hoa', 'rắn → hơi (không qua lỏng)'],
        ['Ngưng kết', 'hơi → rắn']
      ] },
      { t: 'key', x: 'Nhiệt độ và áp suất quyết định trạng thái của vật chất.' },
      { t: 'h3', x: 'Các khái niệm quanh đường bão hòa' },
      { t: 'list', items: [
        '<b>Lỏng quá lạnh</b>: lỏng có nhiệt độ thấp hơn nhiệt độ sôi ở áp suất đó.',
        '<b>Lỏng bão hòa</b>: lỏng đúng ở nhiệt độ sôi, chưa hóa hơi (hơi x = 0%).',
        '<b>Hơi ẩm</b>: hỗn hợp lỏng + hơi, 0 < x < 100%.',
        '<b>Hơi bão hòa</b>: toàn bộ đã hóa hơi nhưng nhiệt độ vẫn bằng nhiệt độ sôi (x = 100%).',
        '<b>Hơi quá nhiệt</b>: hơi có nhiệt độ cao hơn nhiệt độ bão hòa.'
      ] },
      { t: 'p', x: 'Nhiệt độ bão hòa và áp suất bão hòa ứng với nhau từng đôi một. Ở áp suất khí quyển: nước 100 °C, rượu 78 °C, R22 −40,8 °C. Nước ở 150 °C có áp suất bão hòa 4,76 bar; R22 là 1,013 bar ở −40,8 °C và 19,33 bar ở 50 °C.' }
    ] },
    { icon: '🔥', title: 'Nhiệt hiện, nhiệt ẩn và cách tính', blocks: [
      { t: 'p', x: 'Cấp nhiệt cho 1 kg nước đá từ −50 °C: nhiệt độ tăng (nhiệt hiện) → đứng yên ở 0 °C trong lúc tan (nhiệt ẩn) → tăng đến 100 °C → đứng yên khi sôi (nhiệt ẩn) → hơi quá nhiệt tăng tiếp.' },
      { t: 'key', x: 'Nhiệt hiện làm đổi nhiệt độ: Q = m·C·(t₂ − t₁).  Nhiệt ẩn làm đổi trạng thái: Q = m·r.' },
      { t: 'table', head: ['Chất', 'Nhiệt dung riêng (kJ/kg·K)'], rows: [
        ['Nước', '4,186'], ['Thịt', '3,14'], ['Nước đá (0 °C)', '2,12'], ['Nhôm', '0,909'], ['Sắt thép', '0,477'], ['Đồng', '0,389']
      ] },
      { t: 'table', head: ['Nhiệt ẩn', 'kJ/kg'], rows: [
        ['Nước đá tan (rn)', '333'], ['Nước hóa hơi / hơi ngưng (rh)', '2256'], ['Đá khô thăng hoa (−78 °C)', '≈ 576']
      ] },
      { t: 'tip', x: 'Ví dụ 2.5: 1 kg nước đá −50 °C → hơi 150 °C: 106 + 333 + 418 + 2256 + 93 = 3206 kJ. Riêng nhiệt ẩn hóa hơi chiếm gần 70% — vì thế bay hơi môi chất hút được rất nhiều nhiệt.' },
      { t: 'widget', name: 'dl-heat', title: 'Đường cong cấp nhiệt 1 kg nước đá' },
      { t: 'p', x: 'Nhiệt hiện làm giảm nhiệt độ sản phẩm bảo quản hoặc phòng điều hòa; nhiệt ẩn của ga lạnh ở dàn bay hơi và dàn ngưng chính là nhiệt được chuyển đi trong máy lạnh.' }
    ] },
    { icon: '🧂', title: 'Nước đá, đá muối, đá khô', blocks: [
      { t: 'list', items: [
        '<b>Nước đá</b> rẻ, dễ kiếm, ướp lạnh thực phẩm ở 0 °C.',
        '<b>Nước đá muối</b>: NaCl đạt −21 °C; CaCl₂ đạt −55 °C.',
        '<b>Đá khô</b> (CO₂ rắn) thăng hoa ở −78 °C, hấp thụ khoảng 640 kJ/kg (gần gấp đôi nước đá), không chảy nước, khí CO₂ kìm hãm vi khuẩn.'
      ] }
    ] },
    { icon: '⚡', title: 'Entanpy, entropy, công suất lạnh', blocks: [
      { t: 'p', x: '<b>Entanpy</b> (h, kJ/kg) là tổng các dạng nhiệt của chất; trong kỹ thuật chỉ quan tâm đến hiệu Δh nên chọn mốc h = 0 tùy ý (bảng ga lạnh thường lấy lỏng bão hòa 0 °C bằng 200, 400 hoặc 500 kJ/kg). <b>Entropy</b> (s) là ds = dq/T, cũng là thông số không thể thiếu trong bảng và đồ thị.' },
      { t: 'key', x: 'Năm thông số trạng thái: áp suất tuyệt đối, nhiệt độ, thể tích riêng, entanpy, entropy. Biết hai thông số bất kỳ có thể tra ra ba thông số còn lại.' },
      { t: 'p', x: 'Năng suất nhiệt, năng suất lạnh, dòng nhiệt và công suất cùng đơn vị kJ/s = kW.' },
      { t: 'tip', x: 'VD 2.6: nước 26 L/s lạnh từ 12 xuống 7 °C → Q₀ = 26 × 4,186 × 5 = 544,3 kW.  VD 2.9: lưu lượng ga 0,125 kg/s, Δh nén 235 kJ/kg → công nén lý thuyết N = 0,125 × 235 = 29,4 kW.' },
      { t: 'h3', x: 'Các đơn vị năng suất lạnh' },
      { t: 'table', head: ['Đơn vị', 'Giá trị'], rows: [
        ['1 kcal', '4,186 kJ'], ['1 Btu', '1,055 kJ = 0,252 kcal'], ['1 tấn lạnh Mỹ (TR)', '12 000 Btu/h = 3024 kcal/h = 3516 W'], ['1 HP lạnh (xấp xỉ)', '≈ 9000 Btu/h ≈ 2,6 kW']
      ] },
      { t: 'widget', name: 'dl-capacity', title: 'Đổi đơn vị năng suất lạnh và tính Q = m·C·Δt' }
    ] },
    { icon: '♨️', title: 'Truyền nhiệt – truyền lạnh', blocks: [
      { t: 'list', items: [
        '<b>Dẫn nhiệt</b>: truyền qua tiếp xúc giữa các phân tử, chủ yếu ở vật rắn (vách dàn).',
        '<b>Đối lưu</b>: nhờ chuyển động của chất khí/lỏng; tự nhiên (không khí nóng nhẹ bay lên) hoặc cưỡng bức (quạt, bơm).',
        '<b>Bức xạ</b>: nhờ sóng điện từ (mặt trời); ít dùng trong kỹ thuật lạnh.'
      ] },
      { t: 'p', x: 'Ở dàn bay hơi: nhiệt từ không khí → bề mặt dàn (đối lưu) → xuyên vách ống (dẫn nhiệt) → ga sôi (đối lưu). Ở dàn ngưng đi theo chiều ngược lại. "Truyền lạnh" chỉ là cách nói đảo chiều của truyền nhiệt: dàn bay hơi thu nhiệt của phòng ⇔ dàn truyền lạnh cho phòng.' },
      { t: 'warn', x: 'Nhiệt luôn đi từ nơi nóng sang nơi lạnh; máy lạnh phải tốn công (máy nén) mới bơm nhiệt ngược chiều đó.' }
    ] }
  ],
  summary: [
    'p tuyệt đối = pk + pd (trên khí quyển) hoặc pk − pck (dưới khí quyển).',
    '1 atm = 1,013 bar = 760 mmHg; 1 bar = 10⁵ Pa.',
    '°C = (°F − 32)·5/9; K = °C + 273.',
    'Nhiệt hiện Q = m·C·Δt; nhiệt ẩn Q = m·r; nhiệt độ đứng yên suốt lúc chuyển pha.',
    'Ở cùng áp suất, nhiệt độ ngưng tụ = nhiệt độ sôi = nhiệt độ bão hòa.',
    'Entanpy: chỉ quan tâm Δh; năm thông số trạng thái p, t, v, h, s.',
    '1 TR = 3516 W = 12 000 Btu/h; 1 kW = 1 kJ/s.',
    'Ba cách truyền nhiệt: dẫn nhiệt, đối lưu, bức xạ; dàn trao đổi nhiệt chủ yếu dẫn nhiệt + đối lưu.'
  ],
  cards: [
    ['Áp suất tuyệt đối khi biết áp kế (áp suất dư)?', 'p = pk + pd'],
    ['Áp suất tuyệt đối khi biết chân không kế?', 'p = pk − pck'],
    ['1 atm bằng bao nhiêu bar, mmHg?', '1,013 bar = 760 mmHg'],
    ['Điểm không tuyệt đối?', '−273,15 °C = 0 K'],
    ['Công thức đổi °F sang °C?', '°C = (°F − 32)·5/9'],
    ['Thăng hoa là gì?', 'Chuyển thẳng từ rắn sang hơi, không qua lỏng (đá khô)'],
    ['Nhiệt hiện là gì?', 'Nhiệt làm đổi nhiệt độ, không đổi trạng thái; Q = m·C·Δt'],
    ['Nhiệt ẩn là gì?', 'Nhiệt làm đổi trạng thái ở nhiệt độ không đổi; Q = m·r'],
    ['Nhiệt ẩn hóa hơi của nước?', '2256 kJ/kg'],
    ['Nhiệt ẩn tan của nước đá?', '333 kJ/kg'],
    ['Nhiệt dung riêng của nước?', '4,186 kJ/kg·K'],
    ['Hơi quá nhiệt là gì?', 'Hơi có nhiệt độ cao hơn nhiệt độ bão hòa ở cùng áp suất'],
    ['Lỏng quá lạnh là gì?', 'Lỏng có nhiệt độ thấp hơn nhiệt độ sôi ở áp suất đó'],
    ['1 tấn lạnh Mỹ (TR)?', '3516 W = 12 000 Btu/h = 3024 kcal/h'],
    ['Entanpy dùng để làm gì?', 'Tính nhiệt trao đổi và công nén qua hiệu Δh trong chu trình'],
    ['Ba cách truyền nhiệt?', 'Dẫn nhiệt, đối lưu, bức xạ'],
    ['NaCl và CaCl₂ tạo nước đá muối đến nhiệt độ?', 'NaCl −21 °C; CaCl₂ −55 °C']
  ],
  quiz: [
    { q: 'Áp kế chỉ 2 bar (áp suất dư), khí quyển 1,013 bar. Áp suất tuyệt đối là:', o: ['0,987 bar', '2 bar', '3,013 bar', '1,013 bar'], a: 2, e: 'p = pk + pd = 1,013 + 2 = 3,013 bar.' },
    { q: 'Chân không kế chỉ 400 mmHg, áp suất tuyệt đối là:', o: ['1160 mmHg', '360 mmHg', '400 mmHg', '760 mmHg'], a: 1, e: 'p = 760 − 400 = 360 mmHg.' },
    { q: '77 °F bằng bao nhiêu °C?', o: ['25 °C', '45 °C', '18 °C', '30 °C'], a: 0, e: '(77 − 32)·5/9 = 25 °C.' },
    { q: 'Trong lúc nước đang sôi ở áp suất không đổi, nhiệt độ:', o: ['Tăng đều', 'Giảm', 'Không đổi', 'Dao động'], a: 2, e: 'Nhiệt ẩn làm đổi pha, không đổi nhiệt độ.' },
    { q: 'Nhiệt cần để làm nóng 50 kg thịt từ 0 lên 35 °C (C = 3,14) là:', o: ['5495 kJ', '1570 kJ', '549 kJ', '10 000 kJ'], a: 0, e: '50 × 3,14 × 35 = 5495 kJ.' },
    { q: 'Nhiệt ngưng tụ của 10 kg hơi nước (r = 2256 kJ/kg):', o: ['2256 kJ', '22 560 kJ', '225,6 kJ', '4186 kJ'], a: 1, e: 'Q = m·r = 10 × 2256.' },
    { q: 'Một tấn lạnh Mỹ xấp xỉ:', o: ['1 kW', '3,5 kW', '12 kW', '100 W'], a: 1, e: '1 TR = 3516 W.' },
    { q: 'Đá khô là:', o: ['Nước đá đã sấy', 'CO₂ rắn', 'Muối đông', 'NH₃ rắn'], a: 1, e: 'Thăng hoa ở −78 °C, không chảy nước.' },
    { q: 'Hơi nằm đúng trên đường bão hòa (x = 100%) gọi là:', o: ['Hơi quá nhiệt', 'Hơi ẩm', 'Hơi bão hòa', 'Lỏng bão hòa'], a: 2, e: 'Toàn bộ đã hóa hơi nhưng chưa quá nhiệt.' },
    { q: 'Nhiệt đi từ dàn bay hơi sang ga lạnh sôi chủ yếu bằng:', o: ['Bức xạ', 'Đối lưu', 'Thăng hoa', 'Nhiệt điện'], a: 1, e: 'Đối lưu từ vách vào ga lạnh sôi (sau khi dẫn nhiệt qua vách).' }
  ],
  match: [
    ['Nhiệt hiện', 'Q = m·C·Δt'],
    ['Nhiệt ẩn', 'Q = m·r'],
    ['1 atm', '1,013 bar'],
    ['0 K', '−273,15 °C'],
    ['Thăng hoa', 'Rắn → hơi'],
    ['1 TR', '3516 W'],
    ['Áp suất khí quyển', 'Đo bằng baromet']
  ]
});
