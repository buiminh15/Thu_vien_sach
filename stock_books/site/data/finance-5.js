// "Phân tích tài chính" – Bài 12–13.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 12 ======================= */
{
  n: 12,
  title: 'Đòn bẩy hoạt động và đòn bẩy tài chính',
  intro: 'Chi phí cố định khuếch đại sự thay đổi lợi nhuận — như chiếc đòn bẩy trong cơ học. Đòn bẩy hoạt động (chi phí hoạt động cố định) và đòn bẩy tài chính (nguồn tài trợ chi phí cố định): phân tích hòa vốn, DOL, điểm bàng quan EBIT–EPS, DFL và đòn bẩy tổng hợp.',
  sections: [
    { icon: '⚙️', title: 'Đòn bẩy hoạt động', blocks: [
      { t: 'p', x: '<b>Đòn bẩy hoạt động</b> là mức độ sử dụng <b>chi phí hoạt động cố định</b> (khấu hao, bảo hiểm, một phần điện nước, quản lý) so với chi phí biến đổi (nguyên vật liệu, lao động trực tiếp, hoa hồng). Sự hiện diện của chi phí cố định khiến một thay đổi sản lượng khuếch đại thành thay đổi <b>lớn hơn</b> của lợi nhuận hoạt động (EBIT). Phân tích ngắn hạn, vì dài hạn mọi chi phí đều thay đổi.' },
      { t: 'table', head: ['', 'Công ty F', 'Công ty V', 'Công ty 2F'], rows: [
        ['Doanh thu', '10.000', '11.000', '19.500'], ['Chi phí cố định', '7.000', '2.000', '14.000'], ['Chi phí biến đổi', '2.000', '7.000', '3.000'], ['EBIT', '1.000', '2.000', '2.500'],
        ['Chi phí cố định/doanh thu', '0,70', '0,18', '0,72'], ['<b>Sau khi doanh thu +50%: EBIT</b>', '5.000', '4.000', '10.750'], ['<b>% thay đổi EBIT</b>', '<b>400%</b>', '<b>100%</b>', '<b>330%</b>']
      ] },
      { t: 'tip', x: 'Doanh thu chỉ tăng 50% nhưng EBIT tăng 400%, 100%, 330% — công ty có tỷ lệ chi phí cố định cao hơn (F, 2F) bị khuếch đại mạnh hơn (V có chi phí cố định thấp).' }
    ] },
    { icon: '⚖️', title: 'Phân tích hòa vốn', blocks: [
      { t: 'p', x: 'Công ty xe đạp: giá bán P = $50, biến phí V = $25/đơn vị, định phí F = $100.000/năm. <b>Điểm hòa vốn</b>: doanh thu = chi phí → EBIT = 0.' },
      { t: 'key', x: '<b>Q_BE = F / (P − V)</b> = 100.000/25 = <b>4.000 đơn vị</b>; doanh thu hòa vốn = 4.000 × 50 = <b>$200.000</b>. (P − V) là <b>lãi gộp đơn vị</b>. Bán trên Q_BE có lãi, dưới là lỗ. Chỉ xét chi phí hoạt động nên lãi vay và cổ tức ưu đãi chưa liên quan.' }
    ] },
    { icon: '📐', title: 'Độ bẩy hoạt động (DOL)', blocks: [
      { t: 'key', x: '<b>DOL</b> = % thay đổi EBIT / % thay đổi sản lượng. Công thức tính: <b>DOL tại Q = Q(P − V) / [Q(P − V) − F]</b> (theo doanh thu: DOL = (S − V_tổng)/(S − V_tổng − F)).' },
      { t: 'table', head: ['Sản lượng Q', 'EBIT', 'DOL'], rows: [
        ['0', '−100.000', '0'], ['1.000', '−75.000', '−0,33'], ['2.000', '−50.000', '−1,00'], ['3.000', '−25.000', '−3,00'], ['<b>4.000 (hòa vốn)</b>', '0', 'không xác định'],
        ['5.000', '25.000', '<b>5,00</b>'], ['6.000', '50.000', '3,00'], ['7.000', '75.000', '2,33'], ['8.000', '100.000', '2,00']
      ] },
      { t: 'list', items: [
        'DOL → <b>vô cực</b> khi sản lượng tiến đến điểm hòa vốn.',
        'Sản lượng càng vượt xa điểm hòa vốn, DOL tiến dần về <b>1</b>.',
        'DOL = 5 tại Q = 5.000: mỗi 1% thay đổi sản lượng làm EBIT thay đổi 5%. Khi nói về độ bẩy phải chỉ rõ mức sản lượng.'
      ] },
      { t: 'widget', name: 'leverage', title: 'Hòa vốn, DOL, DFL và DTL' },
      { t: 'warn', x: '<b>Rủi ro doanh nghiệp</b> (do bất ổn doanh thu và chi phí). Độ bẩy hoạt động <b>không phải nguồn gốc</b> của rủi ro, nó chỉ <b>khuếch đại</b> bất ổn doanh thu và chi phí — là rủi ro “tiềm ẩn”. Ngành hàng không (chi phí cố định lớn) có đòn bẩy hoạt động rất cao: sau 11/9 American Airlines thua lỗ nặng vì doanh thu giảm mạnh. Công ty thường không thích hoạt động ở DOL cao.' }
    ] },
    { icon: '🏦', title: 'Đòn bẩy tài chính và điểm bàng quan EBIT–EPS', blocks: [
      { t: 'p', x: '<b>Đòn bẩy tài chính</b> là mức độ dùng nguồn tài trợ <b>chi phí cố định</b> (nợ, cổ phiếu ưu đãi) trong cơ cấu vốn. Khác đòn bẩy hoạt động (do đặc thù ngành quyết định: hàng không, luyện thép cao; tư vấn, du lịch thấp), công ty <b>có thể chọn</b> đòn bẩy tài chính. Mục đích: tăng lợi nhuận cho cổ đông thường nếu lợi nhuận tạo ra lớn hơn chi phí vốn cố định.' },
      { t: 'key', x: '<b>EPS = [(EBIT − I)(1 − t) − PD] / NS</b> (I: lãi; PD: cổ tức ưu đãi; t: thuế suất; NS: số cổ phần thường).' },
      { t: 'p', x: 'Công ty CTC: vốn dài hạn $10 triệu toàn cổ phần thường (200.000 cổ phần); cần thêm $5 triệu: (1) phát hành 100.000 cổ phiếu thường giá $50; (2) trái phiếu 12% (lãi 600.000); (3) cổ phiếu ưu đãi 11% (cổ tức 550.000). EBIT mới 2,7 triệu, thuế 40%.' },
      { t: 'table', head: ['', 'Cổ phiếu thường', 'Nợ', 'Cổ phiếu ưu đãi'], rows: [
        ['EBIT', '2.700.000', '2.700.000', '2.700.000'], ['Lãi', '—', '600.000', '—'], ['EBT', '2.700.000', '2.100.000', '2.700.000'], ['Thuế 40%', '1.080.000', '840.000', '1.080.000'],
        ['EAT', '1.620.000', '1.260.000', '1.620.000'], ['Cổ tức ưu đãi', '—', '—', '550.000'], ['Lợi nhuận cổ đông thường', '1.620.000', '1.260.000', '1.070.000'], ['Số cổ phần', '300.000', '200.000', '200.000'], ['<b>EPS</b>', '<b>5,40</b>', '<b>6,30</b>', '<b>5,35</b>']
      ] },
      { t: 'steps', items: [
        '<b>Điểm bàng quan (indifferent point)</b>: EBIT mà các phương án cho cùng EPS. Nợ so với cổ phiếu thường: (EBIT)(0,6)/300.000 = (EBIT − 600.000)(0,6)/200.000 → <b>EBIT = 1,8 triệu</b>.',
        'Cổ phiếu ưu đãi so với cổ phiếu thường: <b>EBIT = 2,75 triệu</b>.',
        'EBIT dưới 1,8 triệu: tài trợ bằng cổ phiếu thường cho EPS cao hơn; trên 1,8 triệu: <b>nợ</b> cho EPS cao hơn.',
        'Đồ thị EPS theo EBIT: mỗi phương án là đường thẳng; cắt trục hoành tại EBIT làm EPS = 0: cổ phiếu thường 0; nợ 600.000; ưu đãi 916.667.'
      ] },
      { t: 'widget', name: 'ebit-eps', title: 'EPS theo ba phương án tài trợ và điểm bàng quan' }
    ] },
    { icon: '📏', title: 'Độ bẩy tài chính (DFL), rủi ro tài chính, đòn bẩy tổng hợp', blocks: [
      { t: 'key', x: '<b>DFL = % thay đổi EPS / % thay đổi EBIT = EBIT / [EBIT − I − PD/(1 − t)]</b>. Ví dụ CTC: nợ → 2,7/(2,7 − 0,6) = <b>1,29</b>; ưu đãi → 2,7/(2,7 − 0,55/0,6) = <b>1,51</b>. DFL(ưu đãi) &gt; DFL(nợ) khi cổ tức PD lớn hơn phần tiết kiệm thuế do nợ (1 − t)I — vì cổ tức ưu đãi không được khấu trừ thuế.' },
      { t: 'tabs', items: [
        ['Rủi ro tài chính', 'Là rủi ro biến động EPS cộng với rủi ro <b>mất khả năng chi trả</b>. Ví dụ A (không nợ) và B (trái phiếu vĩnh cửu $200.000 lãi 15% = $30.000/năm) cùng EBIT $80.000: nếu EBIT giảm còn $20.000, <b>B không đủ trả lãi</b>, A thì không. E(EPS): A 12; B 15 (nhờ đòn bẩy). Nhưng σ(EPS): A 6; B 12; DFL: A 1,00; B 1,60; hệ số biến đổi EPS: A 0,50; B 0,80 → B <b>rủi ro hơn</b>.'],
        ['Đòn bẩy tổng hợp', '<b>DTL = DOL × DFL</b> = % thay đổi EPS / % thay đổi sản lượng. Hai bước: sản lượng đổi → EBIT đổi (DOL) → EPS đổi (DFL). Ví dụ xe đạp P=50, V=25, F=100.000, nợ $200.000 lãi 8% (I = 16.000), thuế 40%, Q = 8.000: DOL = 2,00; EBIT = 100.000 → DFL = 100/(100−16) = 1,19 → <b>DTL ≈ 2,38</b>.']
      ] }
    ] }
  ],
  summary: [
    'Đòn bẩy hoạt động = chi phí cố định; khuếch đại thay đổi sản lượng thành thay đổi EBIT.',
    'Hòa vốn Q = F/(P − V); DOL = Q(P−V)/[Q(P−V) − F], cao nhất gần điểm hòa vốn.',
    'Đòn bẩy tài chính = nguồn vốn chi phí cố định; điểm bàng quan EBIT–EPS cho biết khi nào nợ tốt hơn cổ phiếu thường.',
    'DFL = EBIT/[EBIT − I − PD/(1−t)]; DTL = DOL × DFL; đòn bẩy cao khuếch đại cả lãi lẫn rủi ro.'
  ],
  cards: [
    ['Đòn bẩy hoạt động là gì?', 'Mức độ sử dụng chi phí hoạt động cố định.'],
    ['Điểm hòa vốn?', 'Sản lượng/doanh thu làm EBIT = 0: Q_BE = F/(P−V).'],
    ['Ví dụ xe đạp: sản lượng hòa vốn?', '100.000 ÷ (50 − 25) = 4.000 đơn vị; doanh thu hòa vốn $200.000.'],
    ['DOL là gì?', '% thay đổi EBIT ÷ % thay đổi sản lượng.'],
    ['Khi nào DOL lớn nhất?', 'Gần điểm hòa vốn (→ vô cực); xa điểm hòa vốn tiến về 1.'],
    ['Đòn bẩy hoạt động có phải là rủi ro?', 'Không; nó khuếch đại rủi ro từ bất ổn doanh thu và chi phí.'],
    ['Đòn bẩy tài chính?', 'Mức độ dùng nguồn tài trợ chi phí cố định (nợ, cổ phiếu ưu đãi).'],
    ['Khác biệt giữa hai đòn bẩy?', 'Đòn bẩy hoạt động do đặc thù ngành quyết định; đòn bẩy tài chính do công ty chọn.'],
    ['Điểm bàng quan EBIT–EPS?', 'EBIT mà hai phương án tài trợ cho cùng EPS.'],
    ['Ví dụ CTC: bàng quan nợ vs cổ phiếu thường?', 'EBIT = 1,8 triệu USD.'],
    ['DFL?', '% thay đổi EPS ÷ % thay đổi EBIT = EBIT/[EBIT − I − PD/(1−t)].'],
    ['DTL?', 'DOL × DFL: % thay đổi EPS ÷ % thay đổi sản lượng.'],
    ['Rủi ro tài chính?', 'Biến động EPS cộng rủi ro mất khả năng chi trả do dùng đòn bẩy tài chính.']
  ],
  quiz: [
    { q: 'Hòa vốn khi P = 50, V = 25, F = 100.000:', o: ['2.000', '4.000', '8.000', '100.000'], a: 1, e: 'F/(P−V).' },
    { q: 'DOL tại Q = 5.000 (ví dụ xe đạp):', o: ['2', '3', '5', '25'], a: 2, e: '5000·25/(125000 − 100000).' },
    { q: 'Càng xa điểm hòa vốn, DOL:', o: ['Tăng', 'Giảm dần về 1', 'Bằng 0', 'Không đổi'], a: 1, e: 'Phần cố định ít ảnh hưởng hơn.' },
    { q: 'Đòn bẩy hoạt động cao điển hình ở ngành:', o: ['Tư vấn', 'Hàng không, luyện thép', 'Du lịch', 'Dịch vụ'], a: 1, e: 'Chi phí cố định lớn.' },
    { q: 'EBIT dưới điểm bàng quan (1,8 triệu), phương án cho EPS cao hơn là:', o: ['Nợ', 'Cổ phiếu thường', 'Cổ phiếu ưu đãi', 'Như nhau'], a: 1, e: 'Nợ chỉ tốt hơn khi EBIT vượt điểm này.' },
    { q: 'DFL của phương án nợ trong ví dụ CTC:', o: ['1,00', '1,29', '1,51', '2,00'], a: 1, e: '2,7/(2,7 − 0,6).' },
    { q: 'DTL bằng:', o: ['DOL + DFL', 'DOL × DFL', 'DOL − DFL', 'DOL/DFL'], a: 1, e: 'Hai bước khuếch đại.' },
    { q: 'Công ty có nợ khi EBIT giảm mạnh có thể:', o: ['Luôn an toàn', 'Mất khả năng trả lãi', 'Tăng EPS', 'Giảm thuế'], a: 1, e: 'Công ty B trong ví dụ.' },
    { q: 'Vì sao DFL ưu đãi > DFL nợ khi PD > (1−t)I?', o: ['Cổ tức ưu đãi không được khấu trừ thuế', 'Nợ rủi ro hơn', 'Ưu đãi rẻ hơn', 'Không lý do'], a: 0, e: 'Nợ có lá chắn thuế.' }
  ],
  match: [
    ['Q_BE', 'F/(P−V)'],
    ['DOL', '% ΔEBIT ÷ % ΔQ'],
    ['DFL', '% ΔEPS ÷ % ΔEBIT'],
    ['DTL', 'DOL × DFL'],
    ['Điểm bàng quan', 'Hai phương án cho cùng EPS'],
    ['Rủi ro tài chính', 'Biến động EPS + rủi ro mất khả năng chi trả']
  ]
},

/* ======================= BÀI 13 ======================= */
{
  n: 13,
  title: 'Quyết định cơ cấu vốn của công ty',
  intro: 'Công ty có thể làm tăng giá trị bằng cách đổi tỷ lệ nợ/vốn cổ phần không? Ba trường phái: cơ cấu vốn tối ưu (truyền thống), lý thuyết lợi nhuận hoạt động ròng (NOI) và M&M — cùng các yếu tố thực tế khi hoạch định cơ cấu vốn mục tiêu.',
  sections: [
    { icon: '🍰', title: 'Đặt vấn đề', blocks: [
      { t: 'p', x: '<b>Cơ cấu vốn</b> là quan hệ tỷ trọng các loại vốn dài hạn (nợ, cổ phiếu ưu đãi, cổ phiếu thường). Bài này chỉ xét nợ và vốn cổ phần thường, với giả định: lợi nhuận không tăng trưởng và chi toàn bộ làm cổ tức; không có thuế (ở các mô hình đầu); thị trường hoàn hảo. Thay đổi cơ cấu vốn bằng cách <b>phát hành nợ để mua lại cổ phiếu</b> hoặc ngược lại.' },
      { t: 'table', head: ['Ký hiệu', 'Ý nghĩa'], rows: [
        ['k_d', 'Suất sinh lợi / chi phí nợ (giả định nợ vĩnh cửu: k_d = I/B)'],
        ['k_e', 'Suất sinh lợi vốn cổ phần thường = E/S'],
        ['k_o', 'Suất sinh lợi / chi phí vốn chung = O/V, trong đó V = B + S, O = I + E']
      ] }
    ] },
    { icon: '🎯', title: 'Lý thuyết cơ cấu vốn tối ưu (truyền thống)', blocks: [
      { t: 'p', x: 'Có một <b>cơ cấu vốn tối ưu</b> làm tăng giá trị công ty: lúc đầu dùng nợ giảm chi phí vốn vì nợ rẻ hơn (do tiết kiệm thuế) dù k_e tăng một ít; đến một điểm X, rủi ro tăng khiến k_d và k_e tăng mạnh → k_o đi lên. Hàm ý: chi phí vốn phụ thuộc cơ cấu vốn, và có một cơ cấu tối ưu.' },
      { t: 'table', head: ['Yếu tố ảnh hưởng cơ cấu vốn mục tiêu', 'Tác động'], rows: [
        ['<b>Rủi ro doanh nghiệp</b>', 'Càng lớn → tỷ lệ nợ tối ưu càng thấp'],
        ['<b>Thuế thu nhập</b>', 'Lãi vay là chi phí trước thuế → tiết kiệm thuế (mất ý nghĩa nếu thuế suất thấp/ưu đãi)'],
        ['<b>Sự chủ động tài chính</b>', 'Nợ nhiều làm giảm khả năng huy động, “xấu” bảng cân đối khiến người cho vay ngần ngại'],
        ['<b>Thái độ ban quản lý</b>', 'Người thận trọng dùng ít nợ hơn']
      ] },
      { t: 'p', x: '<b>Ví dụ BCL</b>: tài sản $200.000 (100.000 TSLĐ + 100.000 TSCĐ), không nợ, 10.000 cổ phần; doanh thu 200.000; định phí 40.000; biến phí 60% doanh thu; EBIT 40.000; thuế 40% → lợi nhuận ròng 24.000 → EPS = <b>$2,4</b>; giá $20; P/E 8,33. Lãi suất tăng theo tỷ lệ nợ: 10%→8%; 20%→8,3%; 30%→9%; 40%→10%; 50%→12%; 60%→15%.' },
      { t: 'table', head: ['Kịch bản doanh thu (xác suất)', '100 (0,2)', '200 (0,6)', '300 (0,2)'], rows: [
        ['EBIT (nghìn $)', '0', '40', '80'],
        ['<b>Không nợ</b>: EPS', '0', '2,40', '4,80'],
        ['<b>Nợ 50%</b> (lãi 12% × 100.000 = 12): EPS', '−1,44', '3,36', '8,16']
      ] },
      { t: 'tip', x: 'E(EPS): không nợ = 2,40 (giá ≈ 2,4 × 8,33 = <b>$20</b>); nợ 50% = <b>3,36</b> (giá ≈ <b>$28</b>) — đòn bẩy tăng EPS kỳ vọng (sách ghi nhầm 3,6). Cần tìm tỷ lệ nợ cân bằng giữa lợi nhuận và rủi ro để <b>tối đa hóa giá cổ phiếu</b>.' }
    ] },
    { icon: '🧱', title: 'Lý thuyết lợi nhuận hoạt động ròng (NOI)', blocks: [
      { t: 'key', x: 'NOI cho rằng <b>chi phí vốn trung bình k_o và giá trị công ty không đổi</b> khi đổi tỷ số đòn bẩy, vì k_o cố định và V = O/k_o.' },
      { t: 'p', x: 'Công ty có EBIT O = 1.500 triệu, k_o = 15% → V = O/k_o = <b>10.000 triệu</b>.' },
      { t: 'table', head: ['', 'Nợ B = 1.000', 'Nợ B = 3.000'], rows: [
        ['Giá trị vốn cổ phần S = V − B', '9.000', '7.000'], ['Lãi I = 10% × B', '100', '300'], ['Lợi nhuận cổ đông E = O − I', '1.400', '1.200'], ['<b>k_e = E/S</b>', '<b>15,56%</b>', '<b>17,14%</b>']
      ] },
      { t: 'p', x: 'Nợ tăng → k_e <b>tăng</b> bù đúng lợi ích của nợ rẻ hơn, k_o và k_d không đổi → giá trị công ty không đổi. Giá cổ phiếu cũng không đổi: 1 triệu cổ phần, S = 9.000 → 9.000 đ/cp. Phát hành thêm nợ 2.000 mua lại 2.000/9.000 = 222.222 cp, còn 777.778 cp; S = 7.000 → 7.000/777.778 = <b>9.000 đ/cp</b> như cũ.' }
    ] },
    { icon: '🧩', title: 'Lý thuyết M&M (Modigliani – Miller, 1958)', blocks: [
      { t: 'key', x: 'Tổng rủi ro cho nhà đầu tư không đổi khi thay đổi cơ cấu vốn → <b>giá trị công ty không phụ thuộc cơ cấu vốn</b>. Giống “hai chiếc bánh có tổng diện tích như nhau dù cắt thế nào”. Được bảo đảm bởi <b>kinh doanh chênh lệch giá (arbitrage)</b>.' },
      { t: 'p', x: 'Hai công ty giống hệt: NL không nợ; L vay $30.000 (trái phiếu 12%, k_e = 16%), cùng thu nhập ròng $10.000.' },
      { t: 'table', head: ['', 'NL', 'L'], rows: [
        ['Lãi', '0', '3.600'], ['E = O − I', '10.000', '6.400'], ['k_e', '15%', '16%'], ['S = E/k_e', '66.667', '40.000'], ['B', '0', '30.000'], ['<b>V = S + B</b>', '<b>66.667</b>', '<b>70.000</b>'], ['k_o', '15%', '14,3%']
      ] },
      { t: 'steps', items: [
        'Theo lý thuyết truyền thống L có giá trị cao hơn (70.000 &gt; 66.667) và chi phí thấp hơn. Nhưng nhà đầu tư A nắm 1% L (giá 400$):',
        'Bán 1% L được $400; <b>vay</b> $300 lãi 12% (bằng 1% nợ của L) → có $700.',
        'Mua 1% NL giá 666,67$ → còn dư 33,33$.',
        'Lợi nhuận: trước: 400 × 16% = $64. Sau: 666,67 × 15% = 100 − lãi 36 = <b>$64</b> — nhưng vốn bỏ ra chỉ 366,67$ (ít hơn 33,33$).',
        'Nhiều người làm theo: giá NL tăng, giá L giảm cho đến khi V hai công ty bằng nhau → <b>công ty không thể thay đổi giá trị hay chi phí vốn bằng đòn bẩy tài chính</b> (khi không thuế, thị trường hoàn hảo).'
      ] },
      { t: 'tip', x: 'Phần tài liệu cũng chèn nhầm một đoạn dài về “kinh tế học chi phí giao dịch” (quyền sở hữu, Coase, Williamson…) không liên quan nội dung cơ cấu vốn; chương này bỏ qua phần đó.' },
      { t: 'widget', name: 'mm', title: 'M&M và NOI: đổi nợ, xem k_e thay đổi thế nào' }
    ] }
  ],
  summary: [
    'Cơ cấu vốn tối ưu (truyền thống): có điểm nợ tối ưu cân đối rủi ro và lợi nhuận; thuế, rủi ro kinh doanh, chủ động tài chính, thái độ quản lý ảnh hưởng.',
    'NOI: k_o và V không đổi; nợ tăng làm k_e tăng; giá cổ phiếu không đổi.',
    'M&M: không thuế, thị trường hoàn hảo → giá trị công ty độc lập với cơ cấu vốn; arbitrage đảm bảo.',
    'Ví dụ BCL: nợ 50% nâng E(EPS) từ 2,40 lên 3,36 nhưng tăng rủi ro (EPS âm khi doanh thu thấp).'
  ],
  cards: [
    ['Cơ cấu vốn là gì?', 'Tỷ trọng nợ, cổ phiếu ưu đãi, cổ phiếu thường trong tổng nguồn vốn dài hạn.'],
    ['k_o là gì?', 'Suất sinh lợi/chi phí vốn chung = O/V.'],
    ['Quan điểm truyền thống?', 'Có cơ cấu vốn tối ưu: dùng nợ lúc đầu giảm chi phí vốn, sau đó tăng.'],
    ['Bốn yếu tố ảnh hưởng cơ cấu vốn?', 'Rủi ro doanh nghiệp, thuế, sự chủ động tài chính, thái độ ban quản lý.'],
    ['Ví dụ BCL: EPS không nợ vs nợ 50%?', '2,40 so với 3,36; giá ~$20 so với ~$28.'],
    ['Lý thuyết NOI?', 'k_o và giá trị công ty không đổi khi thay đổi đòn bẩy; k_e tăng bù.'],
    ['M&M kết luận gì?', 'Giá trị công ty không phụ thuộc cơ cấu vốn (không thuế, thị trường hoàn hảo).'],
    ['Arbitrage trong M&M?', 'Nhà đầu tư bán L, vay cá nhân mua NL → giá hai công ty hội tụ.'],
    ['NOI: vì sao giá cổ phiếu không đổi?', 'Phát hành nợ mua lại cổ phiếu, S giảm tương ứng số cp giảm: 7.000/777.778 = 9.000.'],
    ['Điều kiện quan trọng của M&M ban đầu?', 'Không có thuế, thị trường vốn hoàn hảo.']
  ],
  quiz: [
    { q: 'Theo lý thuyết truyền thống, chi phí vốn trung bình khi tăng nợ:', o: ['Luôn giảm', 'Giảm rồi tăng', 'Luôn tăng', 'Không đổi'], a: 1, e: 'Có điểm tối ưu.' },
    { q: 'Yếu tố KHÔNG ảnh hưởng cơ cấu vốn mục tiêu:', o: ['Rủi ro doanh nghiệp', 'Thuế', 'Màu logo công ty', 'Thái độ ban quản lý'], a: 2, e: 'Chỉ ba yếu tố tài chính và tâm lý quản lý.' },
    { q: 'Ví dụ BCL: E(EPS) nợ 50% bằng:', o: ['2,40', '3,36', '4,80', '8,16'], a: 1, e: '0,2·(−1,44) + 0,6·3,36 + 0,2·8,16.' },
    { q: 'Lý thuyết NOI cho rằng khi nợ tăng:', o: ['V tăng', 'k_o và V không đổi, k_e tăng', 'V giảm', 'k_e giảm'], a: 1, e: 'Cổ đông đòi lãi cao hơn.' },
    { q: 'NOI: O = 1.500, k_o = 15% → V =', o: ['1.500', '10.000', '15.000', '225'], a: 1, e: '1.500/0,15.' },
    { q: 'Với B = 3.000, E = 1.200, S = 7.000: k_e ≈', o: ['15,56%', '17,14%', '20%', '10%'], a: 1, e: '1.200/7.000.' },
    { q: 'M&M cho rằng giá trị công ty phụ thuộc vào:', o: ['Cơ cấu vốn', 'Hoạt động kinh doanh tạo thu nhập', 'Tỷ lệ cổ tức', 'Vị trí đặt trụ sở'], a: 1, e: 'Không phụ thuộc cách chia nguồn vốn.' },
    { q: 'Cơ chế bảo đảm M&M là:', o: ['Arbitrage', 'Thuế', 'Chính phủ', 'Lạm phát'], a: 0, e: 'Nhà đầu tư kinh doanh chênh lệch giá.' },
    { q: 'Trong ví dụ NL và L: nhà đầu tư A sau arbitrage bỏ vốn:', o: ['400$', '366,67$', '666,67$', '700$'], a: 1, e: '666,67 − 300.' }
  ],
  match: [
    ['Truyền thống', 'Có cơ cấu vốn tối ưu'],
    ['NOI', 'k_o không đổi, k_e tăng'],
    ['M&M', 'Giá trị độc lập cơ cấu vốn'],
    ['Arbitrage', 'Khiến giá hai công ty hội tụ'],
    ['Rủi ro doanh nghiệp', 'Cao → ít nợ hơn'],
    ['Lá chắn thuế', 'Lãi vay trừ thuế']
  ]
}

);
