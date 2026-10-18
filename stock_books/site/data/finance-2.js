// "Phân tích tài chính" – Bài 4–6.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 4 ======================= */
{
  n: 4,
  title: 'Định giá chứng khoán (trái phiếu)',
  intro: 'Vận dụng thời giá tiền tệ để định giá: giá trị của một tài sản chính là hiện giá của toàn bộ thu nhập nó mang lại. Bài này định giá trái phiếu vĩnh cửu, có kỳ hạn hưởng lãi, không hưởng lãi và trả lãi bán niên, sau khi phân biệt các cặp khái niệm giá trị.',
  sections: [
    { icon: '⚖️', title: 'Các cặp khái niệm về giá trị', blocks: [
      { t: 'table', head: ['Cặp khái niệm', 'Định nghĩa'], rows: [
        ['<b>Giá trị thanh lý</b> vs <b>giá trị hoạt động</b>', 'Thanh lý: số tiền thu được khi bán doanh nghiệp/tài sản <b>không còn hoạt động</b>. Hoạt động (going-concern): khi bán doanh nghiệp <b>vẫn tiếp tục hoạt động</b>. Hai giá trị ít khi bằng nhau, đôi khi thanh lý còn cao hơn.'],
        ['<b>Giá trị sổ sách</b> vs <b>giá trị thị trường</b>', 'Sổ sách của tài sản = chi phí mua sắm − khấu hao tích lũy. Sổ sách của doanh nghiệp = tổng tài sản − nợ phải trả − cổ phiếu ưu đãi. Thị trường: giá được giao dịch trên thị trường (thường cao hơn thanh lý và hoạt động).'],
        ['<b>Giá trị thị trường</b> vs <b>giá trị lý thuyết (intrinsic)</b>', 'Với chứng khoán: lý thuyết là giá trị kinh tế nên có theo các yếu tố liên quan. Khi thị trường hiệu quả, giá thị trường phản ánh gần đúng giá trị lý thuyết.']
      ] }
    ] },
    { icon: '📜', title: 'Trái phiếu và nguyên tắc định giá', blocks: [
      { t: 'p', x: '<b>Trái phiếu (bond)</b> là công cụ nợ dài hạn do chính phủ (trái phiếu chính phủ/kho bạc) hoặc công ty (trái phiếu công ty) phát hành. Ghi <b>mệnh giá</b> (thường $1.000) và <b>lãi suất danh nghĩa (coupon rate)</b> = lãi được hưởng ÷ mệnh giá.' },
      { t: 'key', x: '<b>Giá trị trái phiếu = hiện giá của toàn bộ thu nhập nhận được</b> trong thời hạn hiệu lực, chiết khấu theo <b>lãi suất yêu cầu k_d</b> của nhà đầu tư.' },
      { t: 'table', head: ['Loại', 'Công thức', 'Ví dụ'], rows: [
        ['<b>Vĩnh cửu</b> (consol, chính phủ Anh sau Napoleon)', 'V = I / k_d', 'Lãi $50/năm mãi mãi, k_d = 12%: V = 50/0,12 = <b>$416,67</b>'],
        ['<b>Có kỳ hạn hưởng lãi</b>', 'V = I · PVIFA(k_d, n) + MV · PVIF(k_d, n)', 'MV $1.000, lãi 10% ($100), 9 năm, k_d = 12%: V = 100(5,328) + 1.000(0,361) = <b>$893,80</b>'],
        ['<b>Không hưởng lãi</b> (zero-coupon)', 'V = MV / (1+k_d)ⁿ', 'MV $1.000, 10 năm, k_d = 12%: V = <b>$322</b>. Lợi tức = chênh lệch giá mua và mệnh giá'],
        ['<b>Trả lãi bán niên</b>', 'V = (I/2)·PVIFA(k_d/2, 2n) + MV·PVIF(k_d/2, 2n)', 'MV $1.000, 12 năm, lãi 10%, k_d = 14%: V = 50·PVIFA(7%,24) + 1.000·PVIF(7%,24) ≈ <b>$770,6</b>']
      ] },
      { t: 'widget', name: 'bond', title: 'Máy tính giá trái phiếu' },
      { t: 'warn', x: 'Khi <b>lãi suất yêu cầu cao hơn lãi suất danh nghĩa</b> (12% &gt; 10%) → giá <b>thấp hơn mệnh giá</b> (trái phiếu chiết khấu: $893,80). Khi lãi suất yêu cầu <b>thấp hơn</b> → giá <b>cao hơn mệnh giá</b>. Lãi suất thị trường tăng thì giá trái phiếu giảm.' }
    ] }
  ],
  summary: [
    'Giá trị thanh lý ≠ giá trị hoạt động; sổ sách ≠ thị trường; thị trường ≠ lý thuyết.',
    'Giá trái phiếu = hiện giá dòng lãi + hiện giá mệnh giá chiết khấu ở lãi suất yêu cầu.',
    'Vĩnh cửu: I/k; zero-coupon: MV/(1+k)ⁿ; bán niên: nửa lãi, gấp đôi kỳ, nửa lãi suất.',
    'k_d > coupon → giá < mệnh giá; k_d < coupon → giá > mệnh giá.'
  ],
  cards: [
    ['Giá trị thanh lý và giá trị hoạt động?', 'Thanh lý: bán khi ngừng hoạt động; hoạt động (going-concern): bán khi vẫn tiếp tục hoạt động.'],
    ['Giá trị sổ sách của tài sản?', 'Chi phí mua sắm trừ khấu hao tích lũy.'],
    ['Giá trị sổ sách của doanh nghiệp?', 'Tổng tài sản trừ nợ phải trả và cổ phiếu ưu đãi.'],
    ['Giá trị lý thuyết (intrinsic value)?', 'Giá trị kinh tế mà chứng khoán nên có; thị trường hiệu quả → thị giá gần với nó.'],
    ['Mệnh giá và lãi suất danh nghĩa (coupon rate)?', 'Mệnh giá thường $1.000; coupon rate = lãi hưởng ÷ mệnh giá.'],
    ['Nguyên tắc định giá trái phiếu?', 'Hiện giá toàn bộ thu nhập (lãi + mệnh giá) chiết khấu theo lãi suất yêu cầu.'],
    ['Trái phiếu vĩnh cửu?', 'Không đáo hạn, trả lãi cố định mãi mãi: V = I/k.'],
    ['Công thức trái phiếu có kỳ hạn?', 'V = I·PVIFA + MV·PVIF.'],
    ['Trái phiếu zero-coupon?', 'Không trả lãi, bán chiết khấu; giá = hiện giá mệnh giá.'],
    ['Trái phiếu trả lãi bán niên: điều chỉnh?', 'Lãi mỗi kỳ = I/2, số kỳ = 2n, lãi suất mỗi kỳ = k/2.'],
    ['Khi nào giá < mệnh giá?', 'Khi lãi suất yêu cầu cao hơn lãi suất danh nghĩa.']
  ],
  quiz: [
    { q: 'Giá trị sổ sách của tài sản bằng:', o: ['Giá thị trường', 'Chi phí mua sắm trừ khấu hao tích lũy', 'Giá thanh lý', 'Doanh thu'], a: 1, e: 'Giá trị kế toán.' },
    { q: 'Giá trị hoạt động là giá trị khi:', o: ['Ngừng hoạt động', 'Doanh nghiệp vẫn tiếp tục hoạt động', 'Phá sản', 'Giải thể'], a: 1, e: 'Going-concern.' },
    { q: 'Trái phiếu vĩnh cửu lãi $50/năm, k = 12%: giá là:', o: ['$416,67', '$600', '$500', '$1.000'], a: 0, e: '50/0,12.' },
    { q: 'Trái phiếu MV 1.000, lãi 10%, 9 năm, k = 12%: giá khoảng:', o: ['$1.000', '$893,80', '$1.100', '$500'], a: 1, e: '100·5,328 + 1000·0,361.' },
    { q: 'Zero-coupon MV 1.000, 10 năm, k = 12%: giá khoảng:', o: ['$322', '$1.000', '$120', '$700'], a: 0, e: '1.000/1,12¹⁰.' },
    { q: 'Lãi suất thị trường tăng thì giá trái phiếu:', o: ['Tăng', 'Giảm', 'Không đổi', 'Bằng mệnh giá'], a: 1, e: 'Hiện giá dòng tiền giảm.' },
    { q: 'Trái phiếu bán niên dùng số kỳ và lãi suất mỗi kỳ là:', o: ['n và k', '2n và k/2', 'n/2 và 2k', '2n và 2k'], a: 1, e: 'Chia đôi lãi suất, gấp đôi số kỳ.' },
    { q: 'Khi lãi suất yêu cầu thấp hơn coupon rate, trái phiếu bán:', o: ['Dưới mệnh giá', 'Trên mệnh giá', 'Bằng 0', 'Không bán được'], a: 1, e: 'Lãi cao hơn mức thị trường đòi hỏi.' }
  ],
  match: [
    ['Giá trị lý thuyết', 'Giá trị kinh tế nên có của chứng khoán'],
    ['Zero-coupon', 'Giá = MV/(1+k)ⁿ'],
    ['Consol', 'Trái phiếu vĩnh cửu: V = I/k'],
    ['Mệnh giá', 'Giá trị công bố, thường $1.000'],
    ['Coupon rate', 'Lãi hưởng ÷ mệnh giá'],
    ['k_d', 'Lãi suất yêu cầu của nhà đầu tư']
  ]
},

/* ======================= BÀI 5 ======================= */
{
  n: 5,
  title: 'Lợi nhuận và rủi ro',
  intro: 'Lợi nhuận kỳ vọng, độ lệch chuẩn, hệ số biến đổi, thái độ đối với rủi ro, danh mục đầu tư và vì sao đa dạng hóa cắt giảm được rủi ro.',
  sections: [
    { icon: '📈', title: 'Lợi nhuận và rủi ro', blocks: [
      { t: 'p', x: '<b>Lợi nhuận</b> = thu nhập ÷ vốn bỏ ra. Ví dụ mua cổ phiếu $100, cổ tức $7, sau 1 năm giá $106: R = (7 + 6)/100 = <b>13%</b>. Hai nguồn: <b>cổ tức</b> và <b>lợi vốn</b> (tăng giá). Tổng quát: R = (D_t + P_t − P_{t−1}) / P_{t−1}.' },
      { t: 'key', x: '<b>Rủi ro</b> là sự sai biệt của lợi nhuận <b>thực tế</b> so với <b>kỳ vọng</b>. Trái phiếu kho bạc 8% giữ đến đáo hạn coi như không rủi ro; cổ phiếu có thể không có cổ tức, giá lên hoặc xuống → lợi nhuận thực có thể khác xa kỳ vọng.' }
    ] },
    { icon: '📐', title: 'Đo lường rủi ro', blocks: [
      { t: 'p', x: 'Dùng phân phối xác suất với hai tham số: <b>kỳ vọng</b> E(R) = Σ Rᵢ·Pᵢ và <b>độ lệch chuẩn</b> σ = √[Σ (Rᵢ − E(R))²·Pᵢ].' },
      { t: 'table', head: ['Rᵢ', 'Pᵢ', 'Rᵢ·Pᵢ', '(Rᵢ − 0,09)²·Pᵢ'], rows: [
        ['−0,10', '0,05', '−0,0050', '0,001805'], ['−0,02', '0,10', '−0,0020', '0,00121'], ['0,04', '0,20', '0,0080', '0,000500'], ['0,09', '0,30', '0,0270', '0'],
        ['0,14', '0,20', '0,0280', '0,000500'], ['0,20', '0,10', '0,0200', '0,001210'], ['0,28', '0,05', '0,0140', '0,001805'], ['<b>Tổng</b>', '1,00', '<b>E(R) = 9%</b>', '<b>σ² = 0,00703 → σ = 8,38%</b>']
      ] },
      { t: 'h3', x: 'Hệ số biến đổi (CV) = σ / E(R)' },
      { t: 'p', x: 'Độ lệch chuẩn gây hiểu nhầm khi quy mô lợi nhuận khác nhau. Dự án A: E(R) = 8%, σ = 6% → <b>CV = 0,75</b>; dự án B: E(R) = 24%, σ = 8% → <b>CV = 0,33</b>. Dù σ của B lớn hơn, <b>A rủi ro hơn B</b> (rủi ro trên một đơn vị lợi nhuận).' },
      { t: 'widget', name: 'riskcalc', title: 'Tính lợi nhuận kỳ vọng, độ lệch chuẩn và CV' }
    ] },
    { icon: '🎲', title: 'Thái độ đối với rủi ro', blocks: [
      { t: 'p', x: 'Trò chơi “Let’s Make a Deal”: mở một trong hai cửa — một cửa $10.000, cửa kia là đống vỏ xe (0$). Giá trị kỳ vọng = 0,5·10.000 + 0,5·0 = <b>$5.000</b>. Nếu Monty Hall trả bạn $3.000 để bỏ quyền mở cửa mà bạn <b>bàng quang</b>, thì $3.000 là <b>số tiền chắc chắn tương đương (CE)</b>.' },
      { t: 'table', head: ['So sánh', 'Thái độ'], rows: [
        ['CE &lt; giá trị kỳ vọng', '<b>Ngại rủi ro</b> (risk aversion)'],
        ['CE = giá trị kỳ vọng', 'Bàng quang với rủi ro'],
        ['CE &gt; giá trị kỳ vọng', 'Thích rủi ro']
      ] },
      { t: 'tip', x: 'Với người ngại rủi ro, chênh lệch giữa giá trị kỳ vọng và CE (5.000 − 3.000 = 2.000) là <b>phần bù rủi ro (risk premium)</b>. Môn học coi nhà đầu tư là người ngại rủi ro: dự án rủi ro hơn phải có lợi nhuận kỳ vọng cao hơn.' }
    ] },
    { icon: '🧺', title: 'Danh mục đầu tư và đa dạng hóa', blocks: [
      { t: 'p', x: '<b>Danh mục đầu tư</b> = kết hợp 2 hay nhiều chứng khoán. <b>Lợi nhuận kỳ vọng danh mục</b> = trung bình trọng số: E_p = Σ w_j·E_j. Ví dụ A (14%) và B (11,5%) tỷ trọng bằng nhau → 12,75%.' },
      { t: 'key', x: '<b>Độ lệch chuẩn danh mục</b> phức tạp hơn vì <b>đồng phương sai</b>: σ_p = √[Σ_j Σ_k w_j w_k ρ_jk σ_j σ_k]. Cổ phiếu 1 (16%, σ 15%), cổ phiếu 2 (14%, σ 12%), tương quan 0,4, tỷ trọng 50/50: E_p = <b>15%</b>, σ_p ≈ <b>11,3%</b> — thấp hơn trung bình σ (13,5%).' },
      { t: 'widget', name: 'portfolio', title: 'Danh mục hai cổ phiếu: đổi tương quan và tỷ trọng' },
      { t: 'h3', x: 'Hai loại rủi ro' },
      { t: 'tabs', items: [
        ['Rủi ro toàn hệ thống', '(Systematic / market risk) do thay đổi chung của thị trường: nền kinh tế, thuế, năng lượng thế giới… <b>Không thể tránh</b> bằng đa dạng hóa; đo bằng <b>hệ số beta (β)</b>.'],
        ['Rủi ro không toàn hệ thống', '(Unsystematic) xảy ra với một công ty/ngành: đình công, đối thủ ra sản phẩm mới, phát minh… <b>Có thể cắt giảm</b> bằng đa dạng hóa.']
      ] },
      { t: 'mnemo', x: '“Đừng bỏ tất cả trứng vào một giỏ.” Kết hợp chứng khoán <b>không tương quan cùng chiều hoàn hảo</b> → biến động giảm của cái này được bù bởi biến động tăng của cái khác. Còn có thể đa dạng hóa quốc tế. <b>Tổng rủi ro = rủi ro hệ thống + rủi ro không hệ thống</b>.' }
    ] }
  ],
  summary: [
    'Lợi nhuận = (cổ tức + lợi vốn)/giá mua; rủi ro = sai biệt giữa lợi nhuận thực và kỳ vọng.',
    'Đo rủi ro bằng độ lệch chuẩn; so sánh khác quy mô dùng hệ số biến đổi CV = σ/E(R).',
    'Ngại rủi ro: CE < giá trị kỳ vọng; phần chênh là phần bù rủi ro.',
    'Danh mục: lợi nhuận trung bình trọng số; rủi ro phụ thuộc tương quan; đa dạng hóa loại bỏ rủi ro không hệ thống, còn lại rủi ro hệ thống (beta).'
  ],
  cards: [
    ['Hai nguồn lợi nhuận cổ phiếu?', 'Cổ tức và lợi vốn (tăng giá).'],
    ['Rủi ro là gì?', 'Sai biệt giữa lợi nhuận thực tế và kỳ vọng.'],
    ['Công thức lợi nhuận kỳ vọng?', 'E(R) = Σ Rᵢ·Pᵢ.'],
    ['Độ lệch chuẩn đo gì?', 'Mức phân tán của lợi nhuận quanh giá trị kỳ vọng.'],
    ['Vì sao dùng hệ số biến đổi?', 'So sánh rủi ro khi quy mô lợi nhuận khác nhau: CV = σ/E(R).'],
    ['Certainty equivalent (CE)?', 'Số tiền chắc chắn làm nhà đầu tư bàng quang với khoản rủi ro.'],
    ['Ngại rủi ro khi nào?', 'CE < giá trị kỳ vọng; chênh lệch là phần bù rủi ro.'],
    ['Lợi nhuận kỳ vọng danh mục?', 'Trung bình trọng số lợi nhuận từng chứng khoán.'],
    ['Đồng phương sai?', 'Mức quan hệ tuyến tính giữa lợi nhuận hai chứng khoán: σ_jk = ρ_jk σ_j σ_k.'],
    ['Rủi ro hệ thống?', 'Rủi ro thị trường chung, không tránh được bằng đa dạng hóa; đo bằng beta.'],
    ['Rủi ro không hệ thống?', 'Rủi ro riêng công ty/ngành, tránh được bằng đa dạng hóa.'],
    ['Điều kiện để đa dạng hóa hiệu quả?', 'Các chứng khoán không tương quan cùng chiều hoàn hảo.']
  ],
  quiz: [
    { q: 'Mua $100, cổ tức $7, giá cuối năm $106: lợi nhuận là:', o: ['6%', '7%', '13%', '19%'], a: 2, e: '(7+6)/100.' },
    { q: 'Rủi ro được định nghĩa là:', o: ['Khả năng lỗ', 'Sai biệt lợi nhuận thực so với kỳ vọng', 'Lạm phát', 'Biến động lãi suất'], a: 1, e: 'Phân tán quanh kỳ vọng.' },
    { q: 'Hệ số biến đổi CV bằng:', o: ['σ × E(R)', 'σ / E(R)', 'E(R)/σ', 'σ²'], a: 1, e: 'Rủi ro trên một đơn vị lợi nhuận.' },
    { q: 'A: E=8%, σ=6%; B: E=24%, σ=8%. Dự án rủi ro hơn theo CV là:', o: ['A', 'B', 'Bằng nhau', 'Không xác định'], a: 0, e: 'CV: 0,75 so với 0,33.' },
    { q: 'CE < giá trị kỳ vọng nghĩa là nhà đầu tư:', o: ['Thích rủi ro', 'Bàng quang', 'Ngại rủi ro', 'Không đầu tư'], a: 2, e: 'Họ đòi phần bù rủi ro.' },
    { q: 'Rủi ro có thể giảm bằng đa dạng hóa là:', o: ['Rủi ro hệ thống', 'Rủi ro không hệ thống', 'Cả hai', 'Không rủi ro nào'], a: 1, e: 'Rủi ro riêng công ty/ngành.' },
    { q: 'Hệ số nào đo rủi ro hệ thống?', o: ['Beta', 'CV', 'σ', 'EPS'], a: 0, e: 'Rủi ro thị trường.' },
    { q: 'Danh mục A 14%, B 11,5% tỷ trọng bằng nhau có lợi nhuận kỳ vọng:', o: ['11,5%', '12,75%', '14%', '25,5%'], a: 1, e: 'Trung bình trọng số.' },
    { q: 'Đa dạng hóa hiệu quả nhất khi tương quan giữa hai chứng khoán:', o: ['+1', '0 hoặc âm', 'Rất dương', 'Không quan trọng'], a: 1, e: 'Biến động bù trừ nhau.' }
  ],
  match: [
    ['σ', 'Độ lệch chuẩn của lợi nhuận'],
    ['CV', 'σ / E(R)'],
    ['CE', 'Số tiền chắc chắn tương đương'],
    ['Beta', 'Đo rủi ro hệ thống'],
    ['Đa dạng hóa', 'Giảm rủi ro không hệ thống'],
    ['Phần bù rủi ro', 'E(R) − CE (với người ngại rủi ro)']
  ]
},

/* ======================= BÀI 6 ======================= */
{
  n: 6,
  title: 'Mô hình định giá tài sản vốn (CAPM)',
  intro: 'CAPM của William Sharpe: lợi nhuận kỳ vọng = lãi suất không rủi ro + beta × phần bù rủi ro thị trường. Cùng với đường SML, ước lượng beta, hạn chế của mô hình, phát hiện Fama–French và lý thuyết định giá kinh doanh chênh lệch (APT).',
  sections: [
    { icon: '📈', title: 'Giới thiệu và giả định', blocks: [
      { t: 'p', x: '<b>CAPM (Capital Asset Pricing Model)</b> mô tả quan hệ rủi ro – lợi nhuận kỳ vọng: <b>lợi nhuận kỳ vọng = lợi nhuận không rủi ro + phần bù rủi ro dựa trên rủi ro toàn hệ thống</b>. Do William Sharpe phát triển từ thập niên 1960; đơn giản về khái niệm, ứng dụng được dù chỉ là một sự đơn giản hóa hiện thực.' },
      { t: 'list', items: [
        'Thị trường vốn hữu hiệu: thông tin đầy đủ, chi phí giao dịch không đáng kể, không hạn chế đầu tư, không nhà đầu tư nào đủ lớn để ảnh hưởng giá.',
        'Nhà đầu tư nắm giữ trong 1 năm, có hai cơ hội: chứng khoán không rủi ro và danh mục cổ phiếu thường của thị trường.'
      ] }
    ] },
    { icon: '📉', title: 'Đường đặc thù chứng khoán và beta', blocks: [
      { t: 'p', x: '<b>Đường đặc thù chứng khoán</b>: đường thẳng mô tả quan hệ giữa lợi nhuận một chứng khoán và lợi nhuận danh mục thị trường (S&P 500, TSE 300…). Ví dụ Remico vs thị trường:' },
      { t: 'table', head: ['Tình trạng', 'Nền kinh tế', 'Lợi nhuận thị trường', 'Lợi nhuận Remico'], rows: [['I', 'Tăng trưởng', '15%', '25%'], ['II', 'Tăng trưởng', '15%', '15%'], ['III', 'Suy thoái', '−5%', '−5%'], ['IV', 'Suy thoái', '−5%', '−15%']] },
      { t: 'p', x: 'Lợi nhuận kỳ vọng của Remico: tăng trưởng (25+15)/2 = <b>20%</b>; suy thoái (−5−15)/2 = <b>−10%</b>. <b>β = hệ số góc = (20 − (−10)) / (15 − (−5)) = 30/20 = 1,5</b>: lợi nhuận Remico biến động gấp 1,5 lần thị trường — tăng nhanh hơn khi kinh tế tốt, giảm nhanh hơn khi xấu. β dùng làm <b>hệ số đo rủi ro</b> của chứng khoán.' },
      { t: 'tip', x: 'Trên thực tế β được ước lượng bằng <b>hồi quy</b> trên số liệu lịch sử; có công ty chuyên cung cấp (Value Line, Market Guide, S&P). Ví dụ 1999: Amazon 3,31; Yahoo 3,32; Microsoft 1,33; Coca-Cola 0,96; Apple 0,72. Beta &gt; 1: biến động mạnh hơn thị trường; &lt; 1: phòng thủ hơn.' }
    ] },
    { icon: '🧮', title: 'Mô hình CAPM và đường SML', blocks: [
      { t: 'key', x: '<b>E(Rⱼ) = R_f + βⱼ · [E(R_m) − R_f]</b> (6.1). Đồ thị là đường thẳng <b>SML (security market line)</b> với hệ số góc là phần bù rủi ro thị trường E(R_m) − R_f.' },
      { t: 'list', items: [
        '<b>β = 0</b> → E(R) = R_f (lợi nhuận không rủi ro).',
        '<b>β = 1</b> → E(R) = E(R_m) (lợi nhuận thị trường).',
        'Quan hệ <b>tuyến tính</b> giữa lợi nhuận và beta.',
        'Áp dụng cho cả <b>danh mục</b>: β_p = Σ wᵢβᵢ.'
      ] },
      { t: 'table', head: ['Ví dụ: R_f = 7%, R_m = 13,4%', 'Tính'], rows: [
        ['Cổ phiếu A, β = 1,5', '7 + 1,5(6,4) = <b>16,6%</b>'],
        ['Cổ phiếu Z, β = 0,7', '7 + 0,7(6,4) = <b>11,48%</b>'],
        ['Danh mục 50/50', 'Cách 1: 0,5·16,6 + 0,5·11,48 = <b>14,04%</b>. Cách 2: β_p = 0,5·1,5 + 0,5·0,7 = 1,1 → 7 + 1,1·6,4 = <b>14,04%</b> (giống nhau)']
      ] },
      { t: 'widget', name: 'capm', title: 'CAPM: nhập R_f, R_m và beta' }
    ] },
    { icon: '🔬', title: 'Ưu nhược điểm và phê phán', blocks: [
      { t: 'tabs', items: [
        ['Điểm bất thường', '<b>Hiệu ứng quy mô</b>: công ty vốn hóa nhỏ lợi nhuận cao hơn nếu yếu tố khác như nhau. <b>PE và MB thấp</b> → lợi nhuận cao hơn. <b>Hiệu ứng tháng Giêng</b>: nắm giữ từ tháng 12 sang tháng 1 thường có lợi nhuận cao hơn (nhưng không phải năm nào cũng xảy ra).'],
        ['Fama – French', 'Số liệu 1963–1990: quy mô và tỷ số MB ảnh hưởng mạnh lợi nhuận hơn beta → Fama kết luận <b>beta không phải biến duy nhất</b>. Phản biện: hai biến đều dựa trên giá trị thị trường nên tương quan cao; họ tập trung vào lợi nhuận thay vì rủi ro, thiếu nền tảng lý thuyết. Beta vẫn phù hợp để đo rủi ro và <b>hướng dẫn công ty phân bổ vốn</b>.'],
        ['Mô hình đa yếu tố', 'Lợi nhuận cổ phiếu phụ thuộc <b>nhiều yếu tố</b> chứ không chỉ thị trường; CAPM hữu ích cho tài chính công ty nhưng không đo chính xác lợi nhuận kỳ vọng của từng cổ phiếu.']
      ] }
    ] },
    { icon: '🔀', title: 'Lý thuyết định giá kinh doanh chênh lệch (APT)', blocks: [
      { t: 'p', x: '<b>APT</b> (Stephen Ross) dựa trên ý tưởng: trong thị trường cạnh tranh, <b>kinh doanh chênh lệch giá (arbitrage)</b> — mua rẻ, bán đắt hai thứ giống nhau — đảm bảo định giá cân bằng giữa lợi nhuận và rủi ro.' },
      { t: 'key', x: '<b>Mô hình hai yếu tố</b>: R_j = a + b₁ⱼF₁ + b₂ⱼF₂ + eⱼ; kỳ vọng: E(Rⱼ) = λ₀ + b₁ⱼλ₁ + b₂ⱼλ₂. λ₀ là lợi nhuận không rủi ro; λ dương = thị trường ngại rủi ro yếu tố đó (đòi thêm lợi nhuận); λ âm = đòi hỏi ít hơn. Ví dụ: b₁ = 1,4, b₂ = 0,8; R_f = 8%, λ₁ = 6%, λ₂ = −2% → E(R) = 8 + 1,4·6 + 0,8·(−2) = <b>14,8%</b>.' },
      { t: 'list', items: [
        '<b>Mô hình đa yếu tố</b> thêm nhiều yếu tố; cô lập bằng <b>phân tích yếu tố (factor analysis)</b>.',
        'Roll & Ross đề xuất 5 yếu tố: thay đổi lạm phát kỳ vọng; lạm phát bất ngờ; sản xuất công nghiệp bất ngờ; chênh lệch lợi tức trái phiếu xếp hạng thấp–cao; chênh lệch trái phiếu ngắn hạn–dài hạn. Ba yếu tố đầu ảnh hưởng dòng tiền (cổ tức), hai yếu tố sau ảnh hưởng thị giá/tỷ suất chiết khấu.'
      ] }
    ] }
  ],
  summary: [
    'CAPM: E(R) = R_f + β[E(R_m) − R_f]; SML là đường thẳng; β = 0 → R_f; β = 1 → thị trường.',
    'β đo rủi ro hệ thống, ước lượng bằng hồi quy; β_p = trung bình trọng số.',
    'Hạn chế: hiệu ứng quy mô, PE/MB, tháng Giêng, Fama–French; beta vẫn hữu ích cho tài chính công ty.',
    'APT/đa yếu tố: lợi nhuận phụ thuộc nhiều yếu tố rủi ro, mỗi yếu tố có giá λ.'
  ],
  cards: [
    ['CAPM là gì?', 'Mô hình quan hệ rủi ro – lợi nhuận kỳ vọng của Sharpe.'],
    ['Công thức CAPM?', 'E(Rⱼ) = R_f + βⱼ[E(R_m) − R_f].'],
    ['SML?', 'Đường thị trường chứng khoán: quan hệ tuyến tính giữa lợi nhuận kỳ vọng và beta.'],
    ['Beta = 1 nghĩa là?', 'Lợi nhuận kỳ vọng bằng lợi nhuận thị trường.'],
    ['Beta = 1,5 nghĩa là?', 'Lợi nhuận biến động gấp 1,5 lần thị trường.'],
    ['Beta của danh mục?', 'Trung bình trọng số beta các cổ phiếu.'],
    ['Đường đặc thù chứng khoán?', 'Đường thẳng quan hệ giữa lợi nhuận một chứng khoán và thị trường; hệ số góc = beta.'],
    ['Hiệu ứng quy mô?', 'Công ty vốn hóa nhỏ lợi nhuận cao hơn nếu yếu tố khác như nhau.'],
    ['Phát hiện Fama–French?', 'Quy mô và tỷ số MB giải thích lợi nhuận tốt hơn beta (1963–1990).'],
    ['APT?', 'Giả thuyết kinh doanh chênh lệch đảm bảo định giá cân bằng; mô hình đa yếu tố.'],
    ['Ví dụ APT hai yếu tố?', 'E(R) = λ₀ + b₁λ₁ + b₂λ₂ = 8 + 1,4·6 + 0,8·(−2) = 14,8%.']
  ],
  quiz: [
    { q: 'CAPM do ai phát triển?', o: ['Fama', 'Sharpe', 'Ross', 'Keynes'], a: 1, e: 'William Sharpe.' },
    { q: 'Remico: β =', o: ['0,5', '1', '1,5', '2'], a: 2, e: '(20 − (−10))/(15 − (−5)).' },
    { q: 'R_f = 7%, R_m = 13,4%, β = 1,5 → E(R):', o: ['9,6%', '13,4%', '16,6%', '20%'], a: 2, e: '7 + 1,5·6,4.' },
    { q: 'Beta của danh mục 50/50 (1,5 và 0,7):', o: ['0,8', '1,1', '2,2', '1,5'], a: 1, e: 'Trung bình trọng số.' },
    { q: 'β = 0 thì lợi nhuận kỳ vọng bằng:', o: ['Thị trường', 'Lợi nhuận không rủi ro', 'Không', 'Âm'], a: 1, e: 'R_f.' },
    { q: 'CAPM đo rủi ro bằng:', o: ['Tổng rủi ro', 'Rủi ro hệ thống (beta)', 'Rủi ro không hệ thống', 'Độ lệch chuẩn'], a: 1, e: 'Rủi ro không hệ thống đã được đa dạng hóa.' },
    { q: 'Hiệu ứng tháng Giêng là:', o: ['Lợi nhuận cao hơn khi nắm giữ từ tháng 12 sang 1', 'Lợi nhuận thấp', 'Thuế', 'Không có'], a: 0, e: 'Không phải năm nào cũng xảy ra.' },
    { q: 'APT khác CAPM ở chỗ:', o: ['Dùng nhiều yếu tố rủi ro', 'Không có rủi ro', 'Không có lợi nhuận', 'Chỉ dùng thuế'], a: 0, e: 'CAPM chỉ có yếu tố thị trường.' },
    { q: 'λ dương trong APT thể hiện:', o: ['Thị trường ngại rủi ro yếu tố đó', 'Không rủi ro', 'Giảm lợi nhuận', 'Lạm phát'], a: 0, e: 'Đòi hỏi thêm lợi nhuận.' }
  ],
  match: [
    ['SML', 'Đường beta – lợi nhuận kỳ vọng'],
    ['Beta', 'Hệ số góc đường đặc thù'],
    ['Fama–French', 'Quy mô và MB vượt beta'],
    ['APT', 'Mô hình đa yếu tố của Ross'],
    ['λ', 'Giá của rủi ro mỗi yếu tố'],
    ['R_f', 'Lợi nhuận không rủi ro']
  ]
}

);
