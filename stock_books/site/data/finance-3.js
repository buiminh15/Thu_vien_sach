// "Phân tích tài chính" – Bài 7–8.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 7 ======================= */
{
  n: 7,
  title: 'Phân tích báo cáo tài chính',
  intro: 'Ba báo cáo chính nói gì về sức khỏe công ty? Bài này dạy tính và đọc các tỷ số sinh lời (ROA, ROE, EPS, P/E) và rủi ro thanh toán (hệ số thanh toán hiện hành, nhanh, vòng quay, nợ, bảo đảm lãi vay) và phân tích DuPont.',
  sections: [
    { icon: '📑', title: 'Mục đích và nội dung phân tích', blocks: [
      { t: 'p', x: '<b>Báo cáo tài chính</b> tổng hợp số liệu kế toán theo mẫu quy định, phản ánh tình hình sử dụng vốn, nguồn vốn và kết quả kinh doanh. Ba báo cáo chính: <b>bảng cân đối kế toán</b>, <b>báo cáo kết quả kinh doanh</b>, <b>báo cáo lưu chuyển tiền tệ</b>. Mục đích: đánh giá <b>mức rủi ro</b> và <b>kết quả tài chính</b> thông qua các hệ số và tỷ suất sinh lời.' },
      { t: 'list', items: [
        '<b>Người phân tích</b>: chính công ty, ngân hàng, công ty tài chính, chứng khoán, nhà cung cấp, những ai cân nhắc cho vay hoặc mua cổ phiếu.',
        '<b>Chủ nợ ngắn hạn</b> quan tâm khả năng thanh toán ngắn hạn (tài sản lưu động, ngân lưu ròng); <b>chủ nợ dài hạn và nhà đầu tư</b> quan tâm khả năng sinh lời dài hạn và rủi ro hoạt động, cơ cấu tài chính.',
        'So sánh các chỉ tiêu với: <b>kế hoạch</b>, <b>kỳ trước</b>, <b>công ty cùng ngành</b>, <b>bình quân ngành</b>.'
      ] },
      { t: 'table', head: ['Nhóm chỉ tiêu', 'Gồm'], rows: [
        ['<b>Khả năng sinh lời</b>', 'ROA, ROE, ROCE (vốn cổ phần thường), EPS, P/E'],
        ['<b>Rủi ro ngắn hạn</b>', 'Hệ số thanh toán hiện hành, thanh toán nhanh, vòng quay phải thu / tồn kho / phải trả và số ngày tương ứng'],
        ['<b>Rủi ro thanh khoản dài hạn</b>', 'Tỷ lệ nợ trên vốn, ngân lưu từ hoạt động trên tổng nợ, tỷ lệ bảo đảm lãi vay']
      ] }
    ] },
    { icon: '💹', title: 'Phân tích khả năng sinh lời', blocks: [
      { t: 'tabs', items: [
        ['ROA', '<b>Tỷ suất sinh lời trên tài sản</b> = lợi nhuận (trước lãi vay, sau thuế) ÷ tổng tài sản bình quân. Đo hiệu quả dùng tài sản, <b>không phân biệt</b> tài sản hình thành bởi vốn vay hay vốn chủ sở hữu. Tách thành: <b>ROA = tỷ suất lợi nhuận biên × vòng quay tổng tài sản</b>. Lợi nhuận biên cao có thể do chính sách không tốt (giảm khấu hao do bớt đầu tư, giảm chi phí quảng cáo → ảnh hưởng doanh thu tương lai).'],
        ['ROE', '<b>Tỷ suất sinh lời trên vốn chủ sở hữu</b> = lợi nhuận sau thuế ÷ vốn chủ sở hữu bình quân. <b>ROE = lợi nhuận biên ròng × vòng quay tài sản × hệ số đòn bẩy tài chính</b> (phân tích DuPont). ROCE: dành cho cổ đông thường khi có cổ phiếu ưu đãi.'],
        ['Đòn bẩy tài chính', 'Nếu <b>ROA &gt; chi phí nợ (và cổ tức ưu đãi)</b> → phần chênh còn lại cho cổ đông thường → <b>ROE &gt; ROA</b>. Ngược lại ROA &lt; chi phí nợ → <b>ROE &lt; ROA</b>. Đòn bẩy <b>khuếch đại</b> cả lãi lẫn lỗ; nợ nhiều thì rủi ro phá sản tăng, chủ nợ đòi lãi cao hơn → tác dụng giảm hoặc tiêu cực.'],
        ['EPS và P/E', '<b>EPS</b> = lợi nhuận cho cổ đông thường ÷ số cổ phiếu thường lưu hành; bị tác động bởi ROA, đòn bẩy, lợi nhuận giữ lại, số cổ phiếu. <b>Suy vi (dilution)</b>: chuyển đổi trái phiếu/cổ phiếu ưu đãi hoặc cổ phiếu cho người lao động làm EPS giảm → tính cả EPS và EPS suy vi. <b>P/E = thị giá ÷ EPS</b>: P/E = 10 nghĩa là giá gấp 10 lần lợi nhuận; P/E ngành thường dùng để định giá cổ phiếu.']
      ] },
      { t: 'widget', name: 'dupont', title: 'Phân tích DuPont: ROE từ lợi nhuận biên, vòng quay và đòn bẩy' },
      { t: 'warn', x: '<b>Vòng quay</b>: vòng quay phải thu giảm → bán chịu nhiều hoặc thu nợ kém; vòng quay tồn kho giảm → hàng ứ đọng (hoặc đang mở rộng); vòng quay tài sản cố định tăng có thể vì không đầu tư thêm (giá trị còn lại giảm).' }
    ] },
    { icon: '🛟', title: 'Rủi ro thanh toán ngắn hạn', blocks: [
      { t: 'table', head: ['Chỉ tiêu', 'Công thức', 'Ý nghĩa'], rows: [
        ['<b>Hệ số thanh toán hiện hành</b> (current ratio)', 'Tài sản lưu động ÷ nợ ngắn hạn', 'Phải <b>&gt; 1</b>. Hình thức, vì tài sản lưu động có thể luân chuyển chậm (tồn kho ứ đọng, phải thu tồn đọng) → cần xem thêm chất lượng. Cải thiện bằng tăng nguồn vốn ổn định (vốn chủ, nợ dài hạn) thay nợ ngắn hạn.'],
        ['<b>Hệ số thanh toán nhanh</b> (acid-test)', '(Tài sản lưu động − tồn kho) ÷ nợ ngắn hạn', 'Khả năng thanh toán ngay; không cần &gt; 1 vì chưa phải nợ nào cũng đến hạn'],
        ['<b>Số ngày thu tiền bình quân</b>', '365 ÷ vòng quay phải thu', 'Càng nhỏ càng tốt: bị ảnh hưởng bởi thời gian bán chịu, thu hồi nợ, chọn khách hàng'],
        ['<b>Số ngày tồn kho</b>', '365 ÷ vòng quay tồn kho', 'Tồn kho giải phóng nhanh rút ngắn chu kỳ vốn'],
        ['<b>Số ngày phải trả</b>', '365 ÷ vòng quay phải trả', 'Kéo dài thời gian trả giảm nhu cầu vốn lưu động'],
        ['<b>Chu kỳ chuyển đổi tiền</b>', 'Ngày tồn kho + ngày thu − ngày phải trả', 'Số ngày luân chuyển vốn lưu động']
      ] }
    ] },
    { icon: '⛓️', title: 'Rủi ro thanh toán dài hạn', blocks: [
      { t: 'p', x: 'Tỷ lệ nợ cao → rủi ro cao: phải trả <b>lãi cố định thường xuyên</b> và <b>nợ gốc đáo hạn</b>; cần ngân lưu từ hoạt động kinh doanh <b>cao và ổn định</b> (ứng với ROA cao và vốn lưu động ổn định).' },
      { t: 'list', items: [
        '<b>Tỷ lệ ngân lưu ròng từ hoạt động kinh doanh / tổng nợ</b>: càng cao và ổn định càng đảm bảo trả nợ.',
        '<b>Tỷ lệ bảo đảm lãi vay</b> = EBIT ÷ lãi vay (vì lãi vay được trả từ lợi nhuận trước thuế và lãi vay): càng nhiều lần càng an toàn.',
        '<b>Tỷ lệ nợ trên vốn</b> (debt-equity): cần hiểu rõ chỉ tiêu đòn cân nợ cụ thể mà người nói muốn nhắc tới (nợ/tổng tài sản, nợ/vốn chủ, nợ dài hạn/vốn dài hạn…).'
      ] },
      { t: 'tip', x: 'Kết quả phân tích cho biết <b>xu hướng quá khứ</b> để dự báo tương lai; cần kết hợp thông tin thị trường, đối thủ, giá cổ phiếu, triển vọng sản phẩm để ra quyết định đầu tư và tài trợ.' }
    ] }
  ],
  summary: [
    'Ba báo cáo: cân đối kế toán, kết quả kinh doanh, lưu chuyển tiền tệ.',
    'ROA = biên lợi nhuận × vòng quay tài sản; ROE = biên ròng × vòng quay × đòn bẩy (DuPont).',
    'ROE > ROA khi ROA > chi phí nợ; đòn bẩy khuếch đại cả lãi lẫn lỗ.',
    'Thanh toán ngắn hạn: hiện hành (>1), nhanh, vòng quay phải thu/tồn kho/phải trả.',
    'Thanh toán dài hạn: nợ/vốn, ngân lưu/nợ, bảo đảm lãi vay = EBIT/lãi vay.'
  ],
  cards: [
    ['Ba báo cáo tài chính chính?', 'Bảng cân đối kế toán, báo cáo kết quả kinh doanh, báo cáo lưu chuyển tiền tệ.'],
    ['ROA đo gì?', 'Hiệu quả dùng tài sản tạo lợi nhuận, không phân biệt nguồn vốn.'],
    ['Phân tích ROA thành?', 'Lợi nhuận biên × vòng quay tổng tài sản.'],
    ['Phân tích DuPont của ROE?', 'Biên lợi nhuận ròng × vòng quay tài sản × đòn bẩy tài chính.'],
    ['Khi nào ROE > ROA?', 'Khi ROA lớn hơn chi phí sử dụng nợ (và cổ tức ưu đãi).'],
    ['Đòn bẩy tài chính khuếch đại gì?', 'Cả lãi lẫn lỗ trên vốn cổ phần.'],
    ['EPS suy vi (dilution)?', 'EPS giảm khi chuyển đổi trái phiếu/cổ phiếu ưu đãi hoặc cấp cổ phiếu cho nhân viên làm tăng số cổ phiếu.'],
    ['P/E = ?', 'Thị giá ÷ EPS; số đồng nhà đầu tư trả cho một đồng lợi nhuận.'],
    ['Hệ số thanh toán hiện hành?', 'Tài sản lưu động ÷ nợ ngắn hạn, nên > 1.'],
    ['Hệ số thanh toán nhanh?', '(Tài sản lưu động − tồn kho) ÷ nợ ngắn hạn.'],
    ['Số ngày thu tiền bình quân?', '365 ÷ vòng quay khoản phải thu.'],
    ['Bảo đảm lãi vay?', 'EBIT ÷ lãi vay: bao nhiêu lần lợi nhuận trước thuế và lãi vay đủ trả lãi.']
  ],
  quiz: [
    { q: 'ROA = ?', o: ['Biên lợi nhuận × vòng quay tài sản', 'Nợ/vốn', 'EPS × P/E', 'Doanh thu/vốn chủ'], a: 0, e: 'Hai thành phần của ROA.' },
    { q: 'DuPont: ROE gồm thêm yếu tố nào ngoài biên ròng và vòng quay?', o: ['Đòn bẩy tài chính', 'Thuế', 'Cổ tức', 'Khấu hao'], a: 0, e: 'Hệ số đòn bẩy.' },
    { q: 'ROE > ROA khi:', o: ['ROA < chi phí nợ', 'ROA > chi phí nợ', 'Không nợ', 'Thuế = 0'], a: 1, e: 'Cổ đông hưởng phần chênh.' },
    { q: 'Hệ số thanh toán hiện hành nên:', o: ['< 1', '> 1', '= 0', 'Không quan trọng'], a: 1, e: 'Để đảm bảo thanh toán ngắn hạn.' },
    { q: 'Hệ số thanh toán nhanh loại trừ:', o: ['Tiền mặt', 'Tồn kho', 'Phải thu', 'Nợ ngắn hạn'], a: 1, e: 'Tồn kho chuyển hóa thành tiền chậm.' },
    { q: 'Số ngày thu tiền bình quân nhỏ nghĩa là:', o: ['Thu nợ nhanh', 'Thu nợ chậm', 'Nhiều nợ', 'Ít doanh thu'], a: 0, e: 'Khả năng chuyển hóa thành tiền tốt.' },
    { q: 'Bảo đảm lãi vay = ', o: ['EBIT/lãi vay', 'Lãi vay/EBIT', 'Nợ/vốn', 'ROA/ROE'], a: 0, e: 'Càng cao càng an toàn.' },
    { q: 'P/E = 10 có nghĩa:', o: ['Giá gấp 10 lần lợi nhuận mỗi cổ phiếu', 'Lợi nhuận gấp 10 giá', 'Nợ gấp 10 vốn', 'Vòng quay 10'], a: 0, e: 'Để có một đồng lợi nhuận cổ đông trả 10 đồng.' },
    { q: 'Nhóm quan tâm nhất tới khả năng thanh toán ngắn hạn:', o: ['Chủ nợ ngắn hạn', 'Cổ đông', 'Chủ nợ dài hạn', 'Chính phủ'], a: 0, e: 'Họ nhìn tài sản lưu động và ngân lưu.' }
  ],
  match: [
    ['ROA', 'Hiệu quả dùng tài sản'],
    ['ROE', 'Sinh lời trên vốn chủ sở hữu'],
    ['Current ratio', 'TSLĐ / Nợ ngắn hạn'],
    ['Acid-test', '(TSLĐ − tồn kho) / nợ ngắn hạn'],
    ['Dilution', 'EPS giảm do tăng số cổ phiếu'],
    ['Interest coverage', 'EBIT / lãi vay']
  ]
},

/* ======================= BÀI 8 ======================= */
{
  n: 8,
  title: 'Quản trị tiền mặt và chứng khoán đầu tư',
  intro: 'Giữ bao nhiêu tiền mặt là hợp lý? Ba động cơ giữ tiền của Keynes, đánh đổi giữa chi phí cơ hội và chi phí giao dịch, mô hình Baumol, Miller–Orr, tiền đang chuyển và đầu tư tiền tạm thời nhàn rỗi.',
  sections: [
    { icon: '💼', title: 'Vì sao giữ tiền mặt', blocks: [
      { t: 'p', x: 'Keynes nêu ba động cơ giữ tiền mặt:' },
      { t: 'table', head: ['Động cơ', 'Mục đích'], rows: [
        ['<b>Giao dịch</b>', 'Chi trả mua hàng, lương, thuế, cổ tức trong hoạt động bình thường'],
        ['<b>Đầu cơ</b>', 'Sẵn sàng nắm cơ hội thuận lợi (mua nguyên liệu khi giá giảm, tỷ giá thuận lợi)'],
        ['<b>Dự phòng</b>', 'Đáp ứng chi tiêu khi có biến cố bất ngờ (thời vụ: mua hàng dự trữ nhưng chưa thu được tiền bán hàng)']
      ] },
      { t: 'tip', x: '“Tiền mặt” theo nghĩa rộng gồm tiền tại quỹ, tiền gửi ngân hàng; chứng khoán đầu tư ngắn hạn xem như <b>tài sản tương đương tiền</b>. Quản trị tiền mặt = thu, chi và đầu tư tạm thời hiệu quả.' }
    ] },
    { icon: '⚖️', title: 'Số dư tiền mặt mục tiêu và mô hình Baumol', blocks: [
      { t: 'key', x: 'Đánh đổi: <b>chi phí cơ hội</b> (giữ quá nhiều tiền, mất lãi) = (C/2)·K và <b>chi phí giao dịch</b> (giữ quá ít, phải bán chứng khoán nhiều lần) = (T/C)·F. Tổng chi phí TC = (C/2)K + (T/C)F nhỏ nhất tại <b>C* = √(2FT/K)</b>.' },
      { t: 'p', x: 'Ví dụ công ty K: chi vượt thu 600 triệu/tuần → T = 31,2 tỷ/năm; F = 1 triệu/lần bán chứng khoán; K = 10%.' },
      { t: 'table', head: ['Số dư tiền mặt C', 'Chi phí cơ hội', 'Chi phí giao dịch', 'Tổng chi phí'], rows: [
        ['4,8 tỷ', '240 triệu', '6,5 triệu', '246,5 triệu'], ['2,4 tỷ', '120 triệu', '13 triệu', '133 triệu'], ['1,2 tỷ', '60 triệu', '26 triệu', '86 triệu'],
        ['<b>600 triệu</b>', '30 triệu', '52 triệu', '<b>82 triệu</b>'], ['300 triệu', '15 triệu', '104 triệu', '119 triệu']
      ] },
      { t: 'p', x: 'Công thức cho C* = √(2 × 1 triệu × 31,2 tỷ / 0,10) ≈ <b>790 triệu đồng</b> (tổng chi phí ≈ 79 triệu, thấp hơn mọi dòng trong bảng).' },
      { t: 'widget', name: 'baumol', title: 'Tìm số dư tiền mặt tối ưu (Baumol)' },
      { t: 'warn', x: '<b>Giả định hạn chế của Baumol</b>: tỷ lệ bù đắp tiền mặt không đổi; không có thu tiền trong kỳ; không dự trữ an toàn; dòng tiền rời rạc.' }
    ] },
    { icon: '🎢', title: 'Mô hình Miller–Orr', blocks: [
      { t: 'p', x: '<b>Miller–Orr</b> cho phép <b>thu và chi biến động ngẫu nhiên hàng ngày</b>, luồng tiền ròng có phân phối chuẩn. Có ba mức: <b>thấp L</b> (đặt trước), <b>mục tiêu Z</b>, <b>cao H</b>.' },
      { t: 'steps', items: [
        'Khi số dư chạm <b>H</b>: dùng tiền mua chứng khoán để đưa số dư về <b>Z</b>.',
        'Khi chạm <b>L</b>: bán chứng khoán (hoặc vay) để đưa số dư về <b>Z</b>.',
        'Trong khoảng L–H: không giao dịch.'
      ] },
      { t: 'key', x: 'Công thức thường dùng: <b>Z = L + (3Fσ² / 4K)^(1/3)</b>; <b>H = 3Z − 2L</b>; số dư trung bình ≈ (4Z − L)/3. Biến động (σ²) và chi phí giao dịch (F) lớn → khoảng L–H rộng; lãi suất (K) cao → khoảng hẹp.' }
    ] },
    { icon: '🚚', title: 'Tiền đang chuyển (float) và đầu tư tiền nhàn rỗi', blocks: [
      { t: 'p', x: '<b>Tiền đang chuyển</b> (float): tiền chậm qua các khâu (nhận séc, nộp ngân hàng, được ghi có) khiến công ty chịu <b>chi phí cơ hội</b>. Ví dụ ABC nhận 2 khoản/tháng: 500 triệu (chậm 3 ngày) + 300 triệu (chậm 5 ngày).' },
      { t: 'steps', items: [
        'Số thu bình quân/ngày = 800 triệu ÷ 30 = <b>26,67 triệu</b>.',
        'Số ngày chậm trễ bình quân (trọng số) = (5/8)·3 + (3/8)·5 = <b>3,75 ngày</b>.',
        'Lãi suất kỳ 3,75 ngày (10%/năm) = 0,1 × 3,75/365 = 0,00103.',
        'Hiện giá số thu/ngày = 26.666.667 / 1,00103 = 26.639.229 → <b>tổn thất 27.438 đồng/ngày ≈ 10 triệu đồng/năm</b>.'
      ] },
      { t: 'tip', x: '<b>Đầu tư tiền nhàn rỗi tạm thời</b> (nhất là công ty thời vụ): mua chứng khoán ngắn hạn. Công ty lớn ở nước phát triển đầu tư qua ngân hàng/nhà môi giới; công ty nhỏ qua quỹ thị trường tiền tệ. Ở Việt Nam (thời điểm viết tài liệu) thị trường tiền tệ chưa phát triển, thiếu thị trường thứ cấp nên thanh khoản kém — nhưng hội nhập sẽ mở cơ hội, nên chuẩn bị sớm.' }
    ] }
  ],
  summary: [
    'Ba động cơ giữ tiền: giao dịch, đầu cơ, dự phòng.',
    'Số dư tối ưu cân bằng chi phí cơ hội (giữ nhiều) và chi phí giao dịch (giữ ít).',
    'Baumol: C* = √(2FT/K) với giả định đơn giản; Miller–Orr xử lý thu chi ngẫu nhiên với ngưỡng L, Z, H.',
    'Tiền đang chuyển gây tổn thất chi phí cơ hội; đầu tư tiền nhàn rỗi vào chứng khoán ngắn hạn.'
  ],
  cards: [
    ['Ba động cơ của Keynes?', 'Giao dịch, đầu cơ, dự phòng.'],
    ['Tài sản tương đương tiền?', 'Chứng khoán đầu tư ngắn hạn.'],
    ['Chi phí cơ hội của tiền mặt?', '(C/2)·K: lãi mất đi vì tiền không đầu tư sinh lợi.'],
    ['Chi phí giao dịch?', '(T/C)·F: phí mỗi lần chuyển chứng khoán thành tiền, nhân số lần.'],
    ['Công thức số dư tối ưu Baumol?', 'C* = √(2FT/K).'],
    ['Giả định hạn chế của Baumol?', 'Bù đắp đều, không có thu trong kỳ, không dự trữ an toàn, dòng tiền rời rạc.'],
    ['Miller–Orr khác Baumol?', 'Thu chi biến động ngẫu nhiên hàng ngày; có ngưỡng thấp L, mục tiêu Z, cao H.'],
    ['Khi chạm H thì làm gì?', 'Mua chứng khoán để đưa số dư về Z.'],
    ['Khi chạm L thì làm gì?', 'Bán chứng khoán/vay để đưa về Z.'],
    ['Tiền đang chuyển (float)?', 'Tiền chậm qua các khâu thu nên gây chi phí cơ hội.']
  ],
  quiz: [
    { q: 'Động cơ giữ tiền để chi lương, thuế, mua hàng là:', o: ['Giao dịch', 'Đầu cơ', 'Dự phòng', 'Tín dụng'], a: 0, e: 'Hoạt động bình thường.' },
    { q: 'Giữ quá nhiều tiền mặt làm tăng:', o: ['Chi phí giao dịch', 'Chi phí cơ hội', 'Thuế', 'Doanh thu'], a: 1, e: 'Tiền không sinh lãi.' },
    { q: 'Giữ quá ít tiền mặt làm tăng:', o: ['Chi phí giao dịch', 'Chi phí cơ hội', 'Lãi', 'Nợ'], a: 0, e: 'Phải bán chứng khoán nhiều lần.' },
    { q: 'Công thức Baumol:', o: ['√(2FT/K)', '2FT/K', 'FT/2K', '√(FT)'], a: 0, e: 'Tổng chi phí nhỏ nhất.' },
    { q: 'Với F = 1 triệu, T = 31,2 tỷ, K = 10%: C* khoảng:', o: ['300 triệu', '790 triệu', '1,5 tỷ', '3 tỷ'], a: 1, e: '√(6,24×10¹⁷).' },
    { q: 'Miller–Orr dùng thêm giả định:', o: ['Luồng tiền ròng biến động ngẫu nhiên', 'Không có biến động', 'Không có chi phí', 'Không có lãi'], a: 0, e: 'Phân phối chuẩn.' },
    { q: 'Tiền đang chuyển bình quân tính trọng số ngày chậm ABC là:', o: ['3 ngày', '3,75 ngày', '4 ngày', '5 ngày'], a: 1, e: '(5/8)·3 + (3/8)·5.' },
    { q: 'Vì sao thị trường tiền tệ chưa phát triển khó đầu tư tiền nhàn rỗi?', o: ['Thiếu thị trường thứ cấp để thanh khoản', 'Quá nhiều lãi', 'Luật cấm', 'Không có tiền'], a: 0, e: 'Khó rút tiền nhàn rỗi trở lại kinh doanh.' }
  ],
  match: [
    ['Động cơ dự phòng', 'Biến cố bất ngờ'],
    ['Baumol', 'C* = √(2FT/K)'],
    ['Miller–Orr', 'Ngưỡng L, Z, H'],
    ['Chi phí cơ hội', '(C/2)K'],
    ['Chi phí giao dịch', '(T/C)F'],
    ['Float', 'Tiền đang chuyển']
  ]
}

);
