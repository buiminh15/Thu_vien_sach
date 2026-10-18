// Streetsmart Guide to Valuing a Stock – Chương 6.
BOOK_DATA.streetsmart.chapters.push({
  n: 6,
  title: 'Ước tính chi phí vốn',
  intro: 'WACC là tỷ lệ chiết khấu của FCFF — trung bình có trọng số chi phí nợ (sau thuế), cổ phiếu ưu đãi và vốn cổ phần. Chương này dùng ConEd (nhiều nợ, WACC 4,84%) và Cisco (không nợ, WACC 10,04%) để cho thấy CAPM đưa rủi ro vào định giá qua tỷ lệ chiết khấu.',
  sections: [
    { icon: '⚖️', title: 'WACC như lợi suất danh mục', blocks: [
      { t: 'p', x: 'Hãy coi WACC giống lợi suất kỳ vọng bình quân của danh mục cá nhân: $10.000 trái phiếu 6% + $10.000 cổ phiếu ưu đãi 8% + $80.000 cổ phiếu 10% ⇒ ($600 + $800 + $8.000) ÷ $100.000 = <b>9,4%</b>.' },
      { t: 'key', x: 'Dự án có lợi suất kỳ vọng <b>&gt; WACC</b> tạo NPV dương và tăng giá cổ phiếu; dự án &lt; WACC làm giảm giá trị — ban quản lý nên “nói không”.' },
      { t: 'list', items: [
        'Lãi suất/cổ tức quá khứ của các đợt phát hành không quan trọng; quan trọng là <b>lợi suất thị trường hiện tại</b> (đại diện kỳ vọng) và cơ cấu vốn dự kiến (thường lấy cơ cấu hiện tại).',
        'Nợ được xử lý đặc biệt: dùng <b>chi phí nợ sau thuế</b> vì lãi vay được khấu trừ thuế.'
      ] },
      { t: 'widget', name: 'wacc-calc', title: 'Tính WACC: thử cơ cấu ConEd (nợ 37,1% × 3,41%, ưu đãi 1,7% × 6,56%, cổ phiếu 61,2% × 5,67%)' }
    ] },
    { icon: '📉', title: 'Lãi suất, WACC và giá cổ phiếu', blocks: [
      { t: 'p', x: 'Giả sử lãi suất không đổi dòng tiền; nó chỉ đổi <b>hiện giá</b>. Trái phiếu zero-coupon $10.000 kỳ hạn 10 năm: ở 6% ⇒ hệ số 0,5584 ⇒ $5.584; ở 5% ⇒ 0,6139 ⇒ $6.139 (+10%); ở 4% ⇒ 0,6756 ⇒ $6.756 (+10%).' },
      { t: 'warn', x: 'Cổ phiếu (nhất là tăng trưởng, ít cổ tức) có “kỳ hạn” rất dài ⇒ lãi suất giảm 1% có thể làm giá trị tăng <b>10% trở lên</b> (cuối thập niên 1990); lãi suất tăng làm giá giảm nhanh tương tự. Quy tắc 1-5-7-10 rút ngắn kỳ hạn hiệu dụng nên giảm bớt độ nhạy.' },
      { t: 'widget', name: 'fv-pv', title: 'Hiện giá thay đổi thế nào khi lãi suất đổi 1%' }
    ] },
    { icon: '📚', title: 'Giá trị thị trường vs sổ sách', blocks: [
      { t: 'p', x: 'Về lý thuyết, vốn hoá = giá trị <b>thị trường</b> của (cổ phiếu + ưu đãi + nợ). Thực tế: nợ và ưu đãi hiếm khi giao dịch/hiếm có báo giá và ít lệch sổ sách (nếu không có rủi ro vỡ nợ), nên người trong nghề dùng <b>sổ sách cho nợ và ưu đãi</b>, nhưng <b>luôn dùng thị giá cho cổ phiếu thường</b> (kỳ vọng 10% trên thị giá $42,53 là $4,25, không phải trên sổ sách $26,61 là $2,66).' },
      { t: 'table', head: ['ConEd (12/2001, triệu $)', 'Sổ sách', '%', 'Thị trường', '%'], rows: [
        ['Nợ', '5.501,2', '48,6%', '5.501,2', '37,1%'],
        ['Cổ phiếu ưu đãi', '249,6', '2,2%', '249,6', '1,7%'],
        ['Cổ phiếu thường', '5.566,2', '49,2%', '9.054,6', '61,2%'],
        ['Tổng', '11.317,0', '100%', '14.805,4', '100%']
      ] },
      { t: 'list', items: [
        'Cổ phiếu ConEd: 212,9 triệu cổ phiếu <b>pha loãng</b> × $42,53 = $9.054 triệu; sổ sách/thị trường = 62,6% (công ty tiện ích “không ai nhầm với cổ phiếu tăng trưởng”).',
        'Cisco: sổ sách $28.656 triệu; 7.447 triệu cổ phiếu pha loãng × $14,45 = $107.609 triệu ⇒ BE/ME = <b>26,6%</b>; không nợ, không ưu đãi nên cổ phiếu chiếm 100% cơ cấu vốn.',
        'Dùng <b>số cổ phiếu pha loãng</b> (tính quyền chọn, nợ/ưu đãi chuyển đổi) để thận trọng hơn.'
      ] }
    ] },
    { icon: '📐', title: 'Chi phí vốn cổ phần: CAPM', blocks: [
      { t: 'key', x: '<b>Rs = Rf + β × ERP</b>. Rf = lợi suất trái phiếu kho bạc 10 năm (4,25%, 14/8/2002); ERP (phần bù rủi ro cổ phiếu) = Rm − Rf; β đo rủi ro riêng của công ty so với thị trường (kinh doanh + đòn bẩy tài chính).' },
      { t: 'table', head: ['Công ty', 'Beta', 'Tính toán', 'Chi phí vốn cổ phần'], rows: [
        ['ConEd (tiện ích, bị điều tiết)', '0,4725', '4,25% + 0,4725 × 3%', '5,67%'],
        ['Microsoft', '1,72', '—', '—'],
        ['Cisco (công nghệ)', '1,93', '4,25% + 1,93 × 3%', '10,04%']
      ] },
      { t: 'widget', name: 'capm', title: 'CAPM: thay beta và ERP của ConEd/Cisco' },
      { t: 'list', items: [
        'Nói vui trong sách: “megabytes biến động hơn megawatts”. CAPM đưa khác biệt rủi ro vào định giá <b>qua tỷ lệ chiết khấu</b>.',
        'ERP: Damodaran dùng 5,5% (trung bình 75 năm) dù chênh lệch cổ phiếu–trái phiếu giảm (5,5% 1926–1990; 3,25% 1962–1990; 0,19% 1981–1990). Tác giả dùng <b>3%</b> (Goldman Sachs/Dudley: ~3% là “giá trị hợp lý”). Sau 11/9 họ tạm nâng lên 5% khiến giá trị nội tại giảm 15–35%, rồi hạ lại 3%.',
        '<b>Khuyến nghị về beta</b>: lần đầu lấy từ Yahoo Finance; nếu nghiêm túc thì đối chiếu AOL/S&amp;P ComStock, MSN Investor, rồi dùng <b>trung bình hoặc beta cao nhất</b> cho ước tính thận trọng.'
      ] },
      { t: 'warn', x: 'Quyền chọn cổ phiếu cho nhân viên (ESO): Black-Scholes khó áp dụng vì phải qua vesting, không chuyển nhượng, nhân viên nghỉ việc ⇒ giá trị thực thấp hơn mô hình. Nhưng pha loãng là rủi ro thật (Cisco tăng trưởng bằng thâu tóm bằng cổ phiếu + quyền chọn). Lần đầu dùng số cổ phiếu hiện có; nếu cổ phiếu hấp dẫn thì chuyển sang số pha loãng.' }
    ] },
    { icon: '🏦', title: 'Chi phí nợ và cổ phiếu ưu đãi', blocks: [
      { t: 'key', x: '<b>Chi phí nợ sau thuế = chi phí trước thuế × (1 − thuế suất)</b>; chi phí trước thuế = lợi suất Kho bạc + <b>spread</b> (thước đo rủi ro vỡ nợ). ConEd: (4,25% + 1,0%) × (1 − 0,35) = 5,25% × 0,65 = <b>3,41%</b>.' },
      { t: 'list', items: [
        'Spread: công ty lớn, ít rủi ro, ít nợ ≈ 0,75–1,0%; rủi ro kinh doanh/đòn bẩy cao ≈ 5–9%.',
        'Cách xác định: giá trái phiếu niêm yết (Yahoo, WSJ, IBD); xếp hạng tín nhiệm của S&amp;P, Moody’s, Fitch (AAA/Aaa cao nhất); hoặc dùng lợi suất nợ của công ty tương tự làm proxy.',
        'Nợ ConEd $5.501,2 triệu (25 đợt trái phiếu chịu thuế $4,105 tỷ đáo hạn 2002–2041, lãi 6,375–8,125%, và $1,191 tỷ nợ miễn thuế) — dùng sổ sách.',
        '<b>Cổ phiếu ưu đãi</b>: cổ tức không được khấu trừ thuế; hưởng quyền trên cổ phiếu thường nhưng sau nợ. Nếu không có báo giá, ước lượng lợi suất ≈ <b>trung điểm giữa chi phí nợ trước thuế và chi phí vốn cổ phần</b>; dùng sổ sách cho lượng ưu đãi. ConEd: cổ tức $5/năm ÷ giá $76,20 = <b>6,56%</b>; mệnh giá $249,6 triệu.'
      ] }
    ] },
    { icon: '🧾', title: 'Bảng cân đối và ví dụ Cisco', blocks: [
      { t: 'key', x: 'Công ty ABC hơn XYZ $1 triệu tài sản ngắn hạn thì giá trị doanh nghiệp cao hơn $1 triệu (luật một giá/kinh doanh chênh lệch). Tài sản dài hạn đã nằm trong NOPM, đầu tư, khấu hao; nên bảng cân đối đi vào định giá qua <b>+ tài sản ngắn hạn và − nợ ngắn hạn</b> (cùng nợ dài hạn, ưu đãi).' },
      { t: 'steps', items: [
        'Cisco: tài sản ngắn hạn $17.433 triệu (tiền $9.494, đầu tư ngắn hạn $3,2 tỷ…), nợ ngắn hạn $8.375 triệu (doanh thu hoãn lại $3,1 tỷ…); tỷ lệ thanh khoản &gt; 2.',
        'WACC Cisco = chi phí vốn cổ phần = <b>10,04%</b>; hệ số chiết khấu năm 1 = 0,9088, năm 10 = 0,3841.',
        'Giá trị còn lại $48.268 triệu; giá trị doanh nghiệp $89.314 triệu = dòng tiền hoạt động + giá trị còn lại + tài sản ngắn hạn.',
        'Giá trị vốn chủ = giá trị doanh nghiệp − nợ − ưu đãi − nợ ngắn hạn = $80.939 triệu ⇒ <b>$10,87/cổ phiếu</b>.'
      ] },
      { t: 'tip', x: 'Hàng ngày tại ConEd và Cisco, chỉ có <i>cách chiết khấu</i> khác nhau (4,84% vs 10,04%) đã phản ánh chênh lệch rủi ro giữa tiện ích điều tiết và công nghệ biến động nhanh.' }
    ] }
  ],
  summary: [
    'WACC = trung bình có trọng số chi phí nợ sau thuế, ưu đãi và vốn cổ phần.',
    'Dùng thị giá cho cổ phiếu thường, sổ sách cho nợ và ưu đãi (thực tế phổ biến).',
    'CAPM: Rs = Rf + β × ERP; sách dùng ERP 3%, Rf 4,25%.',
    'Chi phí nợ sau thuế = (Rf + spread) × (1 − t); lãi suất giảm 1% có thể tăng giá cổ phiếu ≥10%.',
    'ConEd WACC 4,84%; Cisco WACC 10,04% ⇒ giá trị nội tại $10,87.'
  ],
  cards: [
    ['WACC là gì?', 'Trung bình có trọng số chi phí nợ (sau thuế), cổ phiếu ưu đãi và vốn cổ phần.'],
    ['Dự án có lợi suất > WACC thì sao?', 'NPV dương, tăng giá cổ phiếu.'],
    ['Vì sao dùng chi phí nợ sau thuế?', 'Lãi vay được khấu trừ thuế.'],
    ['Lãi suất giảm 1% ảnh hưởng gì?', 'Giá trị cổ phiếu (nhất là tăng trưởng) có thể tăng ≥10%.'],
    ['Thị giá hay sổ sách?', 'Thị giá cho cổ phiếu thường; sổ sách cho nợ và ưu đãi (thực tế).'],
    ['Vì sao dùng số cổ phiếu pha loãng?', 'Tính quyền chọn, nợ/ưu đãi chuyển đổi ⇒ thận trọng hơn.'],
    ['Công thức CAPM?', 'Rs = Rf + β × ERP.'],
    ['ERP sách dùng?', '3% (Damodaran dùng 5,5%).'],
    ['Beta ConEd và Cisco?', '0,4725 và 1,93.'],
    ['Chi phí vốn cổ phần ConEd?', '4,25% + 0,4725 × 3% = 5,67%.'],
    ['Chi phí vốn cổ phần Cisco?', '4,25% + 1,93 × 3% = 10,04%.'],
    ['Chi phí nợ sau thuế của ConEd?', '5,25% × (1 − 0,35) = 3,41%.'],
    ['Spread đo gì?', 'Rủi ro vỡ nợ so với trái phiếu Kho bạc cùng kỳ hạn.'],
    ['Ước tính lợi suất cổ phiếu ưu đãi khi không có giá?', 'Trung điểm giữa chi phí nợ trước thuế và chi phí vốn cổ phần.'],
    ['Bảng cân đối vào định giá ra sao?', 'Cộng tài sản ngắn hạn, trừ nợ ngắn hạn, nợ dài hạn và ưu đãi.']
  ],
  quiz: [
    { q: 'Danh mục $10k@6% + $10k@8% + $80k@10% có lợi suất:', o: ['8%', '9,4%', '10%', '9%'], a: 1, e: '9.400 ÷ 100.000.' },
    { q: 'Chi phí nợ sau thuế = ', o: ['Rf × (1 − t)', 'Chi phí trước thuế × (1 − t)', 'Chi phí trước thuế + t', 'Rf + β'], a: 1, e: 'Lãi vay khấu trừ thuế.' },
    { q: 'ConEd chi phí nợ sau thuế:', o: ['5,25%', '3,41%', '4,84%', '6,56%'], a: 1, e: '5,25% × 0,65.' },
    { q: 'CAPM cho Cisco:', o: ['5,67%', '10,04%', '7,5%', '12%'], a: 1, e: '4,25% + 1,93 × 3%.' },
    { q: 'Trọng số vốn cổ phần ConEd (thị trường):', o: ['49,2%', '37,1%', '61,2%', '100%'], a: 2, e: 'Bảng 6-1.' },
    { q: 'Sách dùng cho nợ:', o: ['Giá trị thị trường bắt buộc', 'Giá trị sổ sách', 'Mệnh giá cổ phiếu', 'Không tính'], a: 1, e: 'Ít lệch nếu không có rủi ro vỡ nợ.' },
    { q: 'Rủi ro vỡ nợ phản ánh qua:', o: ['Beta', 'Spread so với Kho bạc', 'ERP', 'Thuế'], a: 1, e: 'Spread to Treasuries.' },
    { q: 'Lãi suất giảm thì giá trị cổ phiếu tăng trưởng:', o: ['Giảm', 'Không đổi', 'Tăng mạnh', 'Biến mất'], a: 2, e: 'Hiện giá dòng tiền xa tăng.' },
    { q: 'Cổ phiếu ưu đãi ConEd có lợi suất:', o: ['5%', '6,56%', '4,84%', '10%'], a: 1, e: '$5 ÷ $76,20.' },
    { q: 'BE/ME của Cisco:', o: ['62,6%', '26,6%', '100%', '5%'], a: 1, e: '28.656/107.609.' },
    { q: 'Đóng góp bảng cân đối vào định giá:', o: ['Cộng nợ dài hạn', 'Cộng tài sản ngắn hạn, trừ nợ ngắn hạn', 'Không dùng', 'Dùng sổ sách vốn chủ'], a: 1, e: 'Tài sản dài hạn đã nằm trong NOPM, đầu tư.' }
  ],
  match: [
    ['WACC', 'Chi phí vốn bình quân có trọng số'],
    ['CAPM', 'Rf + β × ERP'],
    ['ERP', 'Phần bù rủi ro cổ phiếu (3%)'],
    ['Spread', 'Phần chênh trên lợi suất Kho bạc'],
    ['Beta', 'Rủi ro so với thị trường'],
    ['Chi phí nợ sau thuế', 'Chi phí × (1 − t)'],
    ['Pha loãng', 'Quyền chọn tăng số cổ phiếu']
  ]
});
