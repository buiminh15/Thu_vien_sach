// Streetsmart Guide to Valuing a Stock – Chương 1–2.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.streetsmart = BOOK_DATA.streetsmart || { chapters: [] };
BOOK_DATA.streetsmart.chapters.push({
  n: 1,
  title: 'Giới thiệu và tổng quan',
  intro: 'Bong bóng công nghệ và sự sụp đổ của LTCM cho thấy ngay cả người rất thông minh cũng thất bại khi bỏ qua nguyên tắc tài chính. Cuốn sách dạy bạn tự định giá cổ phiếu bằng chiết khấu dòng tiền (DCF) để mua rẻ, bán đắt.',
  sections: [
    { icon: '💥', title: 'Bài học từ sụp đổ: LTCM và bong bóng công nghệ', blocks: [
      { t: 'key', x: '<b>Long Term Capital Management (LTCM)</b> — quỹ phòng hộ có hai người đoạt Nobel (Merton, Scholes) — sụp đổ năm 1998 vì không tuân theo chính nguyên tắc quản trị rủi ro của họ. Khủng hoảng nợ Nga khiến người ta bán tài sản rủi ro, mua trái phiếu chính phủ Mỹ: lãi suất giảm mạnh, giá trái phiếu tăng, <b>nghĩa vụ phòng hộ của LTCM tăng nhanh hơn tài sản</b> ⇒ mất vốn, vi phạm hợp đồng vay. Tài sản đa dạng nhưng các hàng rào phòng hộ lại tập trung (phụ thuộc thị trường trái phiếu Mỹ) — mất cân xứng nguy hiểm.' },
      { t: 'list', items: [
        'Thập niên 1990 làm nhà đầu tư tự tin thái quá. “Những cổ phiếu nóng”: Internet Capital Group (ICGE) từ $200,94 xuống $0,36; Corning $75 → $3,31; JDS Uniphase $140,50 → $2,47. Năm 2000 ICGE vốn hoá > $50 tỷ dù giá trị sổ sách âm; JDSU vốn hoá > $200 tỷ, gấp > 200 lần doanh thu.',
        '“Jack the Promoter” được trả tiền để tô hồng: bạn phải tự quyết định cổ phiếu nào bị định giá thấp hay cao. Nếu không muốn dành công sức, hãy gửi tiết kiệm hoặc quỹ chỉ số no-load.'
      ] }
    ] },
    { icon: '🧭', title: 'Quyết định đầu tư và tỷ lệ định giá', blocks: [
      { t: 'key', x: 'Đầu tư = dùng đô la hôm nay mua tài sản sinh dòng tiền tương lai (cổ tức, lãi, tiền thuê, tăng giá). Quyết định mua/bán dựa trên ba tiêu chí về dòng tiền: <b>số lượng</b> (tỷ suất), <b>thời điểm</b>, và <b>xác suất/rủi ro</b> nhận được. Cổ phiếu cùng loại là giống hệt nhau và rất thanh khoản (khác bất động sản).' },
      { t: 'p', x: '<b>Tỷ lệ định giá = Giá trị cổ phiếu ÷ Giá thị trường</b>. &gt; 1,0: giá trị lớn hơn giá — cân nhắc mua (giá trị $20, giá $10 ⇒ 2,0 — “serious buy”). &lt; 1,0: nên bán hoặc chờ giá giảm (giá trị $5, giá $10 ⇒ 0,5).' },
      { t: 'tip', x: 'Ba khối xây dựng: <b>định giá tài sản</b> (lợi suất), <b>giá trị thời gian của tiền</b> (thời điểm), <b>quản trị rủi ro</b> (xác suất). Nhà đầu tư hay quên mối quan hệ này. Các cơn sốt: hoa tulip Hà Lan 1634–37 (giá tăng gấp 20 lần tháng 1/1637 rồi sập); thập niên 1920 (cổ phiếu blue-chip giảm > 90% đến 1932); bong bóng công nghệ 2000 (NASDAQ giảm > 75%).' }
    ] },
    { icon: '🔟', title: '10 nguyên tắc và lộ trình DCF', blocks: [
      { t: 'warn', x: 'Khi ai đó biện minh giá phi lý bằng “lần này khác”, hãy nghi ngờ: <b>không bao giờ khác</b>. Nguyên tắc định giá luôn như nhau.' },
      { t: 'table', head: ['#', 'Nguyên tắc'], rows: [
        ['1', 'Lợi suất cao đòi rủi ro cao'], ['2', 'Thị trường vốn hiệu quả rất khó thắng'], ['3', 'Nhà đầu tư lý trí ngại rủi ro'], ['4', 'Cung cầu chi phối giá ngắn hạn'], ['5', 'Khi phân tích lợi suất, trung bình đơn không bao giờ “đơn giản”'], ['6', 'Chi phí giao dịch, thuế và lạm phát là kẻ thù'], ['7', 'Thời gian và giá trị tiền tệ liên quan chặt chẽ'], ['8', 'Phân bổ tài sản là quyết định rất quan trọng'], ['9', 'Đa dạng hoá làm giảm rủi ro'], ['10', 'Nên dùng mô hình định giá tài sản để định giá đầu tư']
      ] },
      { t: 'h3', x: 'Bốn bước DCF' },
      { t: 'steps', items: [
        'Dự báo <b>dòng tiền tương lai</b> dựa trên tăng trưởng, biên lợi nhuận hoạt động ròng, thuế và nhu cầu vốn cố định/vốn lưu động.',
        'Ước tính <b>tỷ lệ chiết khấu</b> phản ánh thời điểm và rủi ro.',
        '<b>Chiết khấu và cộng</b> ⇒ giá trị doanh nghiệp (enterprise value).',
        'Trừ nợ, cổ phiếu ưu đãi và các yêu sách khác, chia cho số cổ phiếu ⇒ <b>giá trị nội tại mỗi cổ phiếu</b>; so với giá để quyết định mua/bán/giữ.'
      ] },
      { t: 'p', x: 'Lộ trình sách: Chương 2 (10 nguyên tắc) → 3 (sơ bộ DCF) → 4 (Microsoft) → 5 (dòng tiền, ví dụ Cisco) → 6 (chi phí vốn, ConEd và Cisco) → 7 (tìm dữ liệu) → 8 (Citigroup, Merrill Lynch, Berkshire Hathaway, Washington REIT). DCF được Phố Wall dùng để định giá trái phiếu, M&amp;A, LBO, IPO; công ty dùng để ra quyết định ngân sách vốn.' }
    ] }
  ],
  summary: [
    'LTCM và bong bóng công nghệ: bỏ qua nguyên tắc tài chính là thất bại, dù thông minh đến đâu.',
    'Giá trị = hiện giá dòng tiền tương lai; quyết định dựa trên số lượng, thời điểm, rủi ro.',
    'Tỷ lệ định giá = giá trị ÷ giá: > 1 mua, < 1 bán/chờ.',
    '“Lần này khác” là câu nói của mọi cơn sốt; nguyên tắc không đổi.',
    'DCF bốn bước: dòng tiền → tỷ lệ chiết khấu → giá trị doanh nghiệp → giá trị mỗi cổ phiếu.'
  ],
  cards: [
    ['LTCM?', 'Quỹ phòng hộ Long Term Capital Management sụp đổ 1998 dù có hai người đoạt Nobel.'],
    ['Nguyên nhân LTCM sụp đổ?', 'Đòn bẩy cao và hàng rào phòng hộ tập trung vào thị trường trái phiếu Mỹ; lãi suất giảm làm nghĩa vụ tăng nhanh hơn tài sản.'],
    ['Quỹ phòng hộ?', 'Hợp danh đầu tư vay tiền mua tài sản đồng thời bán các nghĩa vụ để phòng hộ rủi ro.'],
    ['ICGE minh hoạ gì?', 'Cổ phiếu $200,94 xuống $0,36; giá không đi với giá trị.'],
    ['Ba tiêu chí dòng tiền khi mua/bán?', 'Số lượng (tỷ suất), thời điểm, rủi ro/xác suất.'],
    ['Tỷ lệ định giá?', 'Giá trị cổ phiếu ÷ giá thị trường.'],
    ['Tỷ lệ định giá > 1?', 'Giá trị lớn hơn giá — cân nhắc mua.'],
    ['Ba khối xây dựng của sách?', 'Định giá tài sản, giá trị thời gian của tiền, quản trị rủi ro.'],
    ['“Lần này khác”?', 'Luận điểm biện minh cho giá phi lý — không bao giờ khác.'],
    ['Bốn bước DCF?', 'Dòng tiền → tỷ lệ chiết khấu → chiết khấu cộng thành giá trị DN → trừ nợ, chia số cổ phiếu.'],
    ['Enterprise value?', 'Giá trị toàn doanh nghiệp từ chiết khấu dòng tiền.'],
    ['Ai dùng DCF?', 'Phố Wall (M&A, LBO, IPO), công ty (ngân sách vốn), nhà đầu tư.']
  ],
  quiz: [
    { q: 'Cổ phiếu giá trị $20, giá $10 ⇒ tỷ lệ định giá:', o: ['0,5', '1,0', '2,0', '10'], a: 2, e: '20/10.' },
    { q: 'Tỷ lệ định giá 0,5 nghĩa là:', o: ['Nên mua', 'Giá gấp đôi giá trị — bán/chờ', 'Hợp lý', 'Không đo được'], a: 1, e: 'Giá trị $5, giá $10.' },
    { q: 'Điều gì làm LTCM sụp đổ?', o: ['Thiếu vốn mới', 'Hàng rào phòng hộ tập trung, đòn bẩy cao', 'Lạm phát', 'Thuế'], a: 1, e: 'Trái phiếu Mỹ tăng giá.' },
    { q: 'DCF bước đầu tiên:', o: ['Chia số cổ phiếu', 'Dự báo dòng tiền tương lai', 'Trừ nợ', 'Chọn sàn'], a: 1, e: 'Rồi ước tính tỷ lệ chiết khấu.' },
    { q: 'Ba khối xây dựng KHÔNG gồm:', o: ['Định giá tài sản', 'Giá trị thời gian của tiền', 'Quản trị rủi ro', 'Dự đoán tin tức'], a: 3, e: 'Sách không dựa vào dự đoán.' },
    { q: 'NASDAQ giảm bao nhiêu sau đỉnh bong bóng công nghệ?', o: ['25%', '50%', '> 75%', '10%'], a: 2, e: 'Theo sách.' },
    { q: 'Câu “lần này khác” sách nói:', o: ['Đúng khi có công nghệ mới', 'Không bao giờ khác', 'Đôi khi đúng', 'Chỉ ở Mỹ'], a: 1, e: 'Nguyên tắc định giá luôn giống nhau.' },
    { q: 'Cổ phiếu cùng loại của một công ty có đặc điểm:', o: ['Độc nhất như bất động sản', 'Giống hệt nhau và thanh khoản', 'Không bán được', 'Khác nhau theo người bán'], a: 1, e: 'Cisco có > 7 tỷ cổ phiếu.' }
  ],
  match: [
    ['LTCM', 'Quỹ phòng hộ có Nobel sụp đổ 1998'],
    ['Tỷ lệ định giá', 'Giá trị ÷ giá'],
    ['DCF', 'Chiết khấu dòng tiền'],
    ['ICGE', 'Cổ phiếu bong bóng $200 → $0,36'],
    ['Jack the Promoter', 'Người tô hồng cổ phiếu'],
    ['Enterprise value', 'Giá trị toàn doanh nghiệp'],
    ['Tulip', 'Bong bóng Hà Lan 1637']
  ]
});

BOOK_DATA.streetsmart.chapters.push({
  n: 2,
  title: '10 nguyên tắc tài chính và cách dùng',
  intro: 'Mười nguyên tắc nền tảng: rủi ro–lợi suất, thị trường hiệu quả, ngại rủi ro, cung cầu, trung bình kép, chi phí/thuế/lạm phát, giá trị thời gian, phân bổ tài sản, đa dạng hoá và mô hình định giá tài sản (CAPM).',
  sections: [
    { icon: '⚖️', title: 'Nguyên tắc 1: lợi suất cao đòi rủi ro cao', blocks: [
      { t: 'table', head: ['Khái niệm', 'Ý nghĩa'], rows: [
        ['Lợi suất kỳ vọng E(Ri)', 'Lợi suất nhà đầu tư kỳ vọng từ tài sản rủi ro (cổ tức/lãi ± thay đổi giá)'],
        ['Rf', 'Lợi suất tài sản phi rủi ro; sách dùng lãi suất trái phiếu kho bạc 10 năm'],
        ['Rủi ro', 'Phần biến động giá do bất ngờ; đo bằng độ lệch chuẩn'],
        ['Rủi ro phi hệ thống', 'Chỉ ảnh hưởng một công ty/ngành (gian lận kế toán, thuốc mới); đa dạng hoá giảm được; thị trường không thưởng'],
        ['Rủi ro hệ thống', 'Ảnh hưởng toàn nền kinh tế (lãi suất, khủng bố, chiến tranh); không giảm bằng đa dạng hoá'],
        ['Beta (β)', 'Đo rủi ro hệ thống; thị trường = 1,0; công nghệ > 1; tiện ích < 1'],
        ['Phần bù rủi ro thị trường', 'E(Rm) − Rf; McDonald’s β 1,0 kỳ vọng 8%, Rf 5% ⇒ 3%']
      ] },
      { t: 'p', x: '<b>Độ lệch chuẩn</b>: lấy mỗi lợi suất trừ trung bình, bình phương, cộng, chia (n−1) ⇒ phương sai, rồi lấy căn. Ví dụ ABC: 9%, 15%, −3%, 21% ⇒ trung bình 10,5%, độ lệch chuẩn 10,25%. Phân phối chuẩn: ~2/3 quan sát trong ±1σ (0,25% đến 20,75%); 95% trong ±2σ (−10% đến 31%).' },
      { t: 'table', head: ['Lớp tài sản (Ibbotson & Sinquefield 1925–2001)', 'Lợi suất kép', 'Lợi suất đơn', 'Độ lệch chuẩn'], rows: [
        ['Tín phiếu kho bạc', '3,8%', '3,9%', '3,2%'], ['Trái phiếu chính phủ', '5,3%', '5,7%', '9,4%'], ['Trái phiếu doanh nghiệp', '5,8%', '6,1%', '8,6%'], ['Cổ phiếu lớn', '10,7%', '12,7%', '20,2%'], ['Cổ phiếu nhỏ', '12,5%', '17,3%', '33,2%']
      ] },
      { t: 'tip', x: '<b>Khuyến nghị</b>: <b>hồi quy về trung bình</b> — S&amp;P 500 1995–99 trung bình 28,7%/năm (tốt nhất lịch sử) trong khi dài hạn ~12% ⇒ không thể bền. Khi P/S, P/B, P/E ở mức thấp ⇒ mua; khi “hưng phấn phi lý” ⇒ bán, sang trái phiếu/tiền mặt.' }
    ] },
    { icon: '🏁', title: 'Nguyên tắc 2: thị trường vốn hiệu quả khó thắng', blocks: [
      { t: 'key', x: 'Thị trường hiệu quả (ECM): giá phản ánh toàn bộ thông tin công khai, phản ứng gần như tức thì. Nếu thật thì phân tích kỹ thuật và cơ bản đều vô ích. <b>Random walk</b>: biến động giá kế tiếp độc lập; ước tính tốt nhất cho giá mai là giá hôm nay. ECM + random walk + CAPM là nền tảng <b>lý thuyết danh mục hiện đại (MPT)</b>, gắn với Eugene Fama (Chicago).' },
      { t: 'list', items: [
        'Các “bất thường” (hiệu ứng tháng Giêng, cổ phiếu nhỏ, Dogs of the Dow) có thể sinh lợi một thời gian rồi biến mất khi nhiều người biết; phần lớn nghiên cứu cho thấy thông tin được phản ánh nhanh.',
        '<b>Tài chính hành vi</b>: Nobel 2002 cho Kahneman và Vernon Smith; Thaler, Shiller, Haugen: nhà đầu tư ghét lỗ (giữ cổ phiếu lỗ quá lâu), phản ứng thái quá/thiếu, thích tìm mẫu hình, tự tin thái quá.',
        '<b>Nghiên cứu Fama–French (1992)</b>: chia cổ phiếu thành 10 danh mục theo BE/ME: nhóm BE/ME cao nhất cho ~23% so với trung bình 14,99% (hơn ~7%/năm) và nhóm thấp nhất chỉ 3,6% (chênh gần 20%/năm); tương tự E/P cao (P/E thấp) thắng, và vốn hoá nhỏ thắng. Haugen: cổ phiếu BE/ME cao = cổ phiếu giá trị bị bi quan quá mức; cổ phiếu tăng trưởng bị lạc quan quá mức.'
      ] },
      { t: 'tip', x: '<b>Khuyến nghị</b>: thị trường Mỹ khá hiệu quả nhưng vẫn có cơ hội (P/E thấp, BV/MV cao). Dùng nghiên cứu cơ bản làm tín hiệu, rồi chạy mô hình định giá: nếu giá trị/giá > 1,0 ⇒ có thể mua. Hỏi nguyên nhân: nếu do khủng hoảng tài chính nghiêm trọng (Enron, WorldCom, Adelphia) thì không mua; nếu vấn đề tạm thời thì có thể là cơ hội.' }
    ] },
    { icon: '😨', title: 'Nguyên tắc 3–4: ngại rủi ro, cung cầu', blocks: [
      { t: 'key', x: '<b>Ngại rủi ro</b>: nhà đầu tư lý trí thích ít rủi ro hơn; nỗi đau mất $1 lớn hơn niềm vui được $1. Cùng kỳ vọng 10%, ABC (σ 10%) luôn được ưa hơn XYZ (σ 20%). Sách luôn đòi <b>biên an toàn kỳ vọng</b> trước khi mua; thận trọng, hỏi nhiều “what if”, nếu tỷ lệ không có lợi thì bỏ qua.' },
      { t: 'p', x: '<b>Cung cầu</b>: giá hiện tại là điểm giao cung cầu của <b>nhà đầu tư cận biên</b>. Chi phí giao dịch giảm (1980s hoa hồng vài trăm đô cho 100 cổ phiếu Microsoft; nay 1.000 cổ phiếu chỉ $8) thúc đẩy bò 1990s. Internet IPO: VA Linux +733% ngày đầu; ICGE $200,94 × 287,7 triệu cổ phiếu = $57 tỷ cho cái “lồng ấp” có tài sản chưa tới 1/10. EntreMed (ENMD): bài báo NYT 3/5/1998 không có thông tin mới ⇒ 4/5 mở cửa $84,87 (từ $12-1/16), đóng $51,87; cuối 2002 $0,86.' },
      { t: 'warn', x: '<b>Khuyến nghị</b>: không mua theo đà chỉ vì giá tăng; mua vì định giá thấp. Với tin xấu hãy làm “smell test” — từ chức mơ hồ của CFO/CEO, SEC điều tra ngắn gọn… thì bán ngay tin xấu đầu tiên; bộ phận quan hệ nhà đầu tư tung tin tốt chi tiết và để tin xấu nhỏ giọt.' }
    ] },
    { icon: '🧮', title: 'Nguyên tắc 5–7: trung bình kép, chi phí/thuế/lạm phát, giá trị thời gian', blocks: [
      { t: 'key', x: '<b>Trung bình đơn</b> luôn thiên cao khi có số âm. Martha: +100% rồi −80% ⇒ “trung bình 10%/năm” nhưng $10 → $20 → $4 = <b>−60% tổng, −36,75%/năm kép</b>. Công thức kép: (A/B)^(1/T) − 1. Phần trăm cần để hoà vốn sau khi giảm x%: <b>1/(1−x) − 1</b>; ví dụ ProFunds Ultra OTC giảm 94,71% cần tăng 1.890%. Yêu cầu quỹ công bố lợi suất kép.' },
      { t: 'widget', name: 'avg-returns', title: 'Trung bình đơn vs trung bình kép' },
      { t: 'list', items: [
        '<b>Chi phí giao dịch</b>: hoa hồng, phí bán, 12b-1, phí quản lý. Trả hoa hồng 5,25% cho quỹ so với no-load là phí “nắm tay” quá đắt. Giảm tối đa.',
        '<b>Thuế và lạm phát</b> (1926–1999): cổ phiếu 5,0%/năm sau thuế và lạm phát; trái phiếu chính phủ và tín phiếu bị xoá sạch; trái phiếu địa phương (muni) +2,5% thực. Dùng IRA, Roth IRA, 401(k); giữ tài sản miễn thuế trong tài khoản chịu thuế và tài sản nhiều cổ tức/lãi trong tài khoản ưu đãi thuế. Chống lạm phát: TIPS; chấp nhận thêm tài sản rủi ro.'
      ] },
      { t: 'widget', name: 'fv-pv', title: 'Giá trị tương lai & hiện tại' },
      { t: 'p', x: '<b>Giá trị thời gian của tiền</b>: FV = PV × (1+r)<sup>n</sup>. Ví dụ GHI: $10, 8%/năm, 5 năm ⇒ $14,69. Hệ số chiết khấu = 1/(1+r)<sup>n</sup>; 8%, 3 năm = 0,7938; 10%, 5 năm = 0,6209 ⇒ lời hứa $100 của chú Larry chỉ đáng ~$62. Thời gian dài hơn hoặc rủi ro cao hơn ⇒ hiện giá thấp hơn.' }
    ] },
    { icon: '🧺', title: 'Nguyên tắc 8–9: phân bổ tài sản và đa dạng hoá', blocks: [
      { t: 'list', items: [
        '<b>Phân bổ tài sản</b>: tiền mặt, trái phiếu, cổ phiếu (rồi tiểu lớp: large/mid/small cap — &gt;$5 tỷ / $1–5 tỷ / &lt;$1 tỷ; giá trị vs tăng trưởng). Chuẩn Phố Wall: 10% tiền mặt, 35% trái phiếu, 55% cổ phiếu. Phải hợp hoàn cảnh: giáo sư có biên chế 100% quỹ chỉ số vì thu nhập ổn định như trái phiếu; nhà văn bán nghỉ hưu 20% cổ phiếu, 20% trái phiếu, 60% tiền mặt.',
        'Brinson et al.: hơn <b>90%</b> biến thiên hiệu suất quỹ do phân bổ tài sản, không phải chọn cổ phiếu cụ thể.',
        'Phân bổ của tác giả (12/2002): large cap value 35%, small cap value 25%, large cap growth 20%, REIT 10%, quốc tế 10%; ưa cổ phiếu giá trị.',
        '<b>Đa dạng hoá</b>: coi sự nghiệp, nhà, tài sản tài chính là một danh mục — tách nguồn thu nhập khỏi tài sản đầu tư; tránh mua cổ phiếu chủ lao động (Enron, Adelphia ở Coudersport). Cổ phiếu tương quan cao (Coke–Pepsi) giảm ít rủi ro; tương quan âm (dầu–hàng không) giảm nhiều.',
        'Rủi ro tổng = hệ thống + phi hệ thống. Nghiên cứu Statman (1987): 1 cổ phiếu σ 49,24%; 10 cổ phiếu 23,93%; 50 → 20,20%; 100 → 19,69%; 1.000 → 19,21%. Chỉ cần <b>20–25 cổ phiếu</b> ở nhiều ngành.',
        'Tác giả chia danh mục cổ phiếu thành 20 phần 5%: tối đa ~20 mã, mỗi mã tối đa 10% (rebalance hằng năm); nếu không tìm được mã thì dùng quỹ no-load.'
      ] }
    ] },
    { icon: '📐', title: 'Nguyên tắc 10: mô hình định giá tài sản – CAPM', blocks: [
      { t: 'key', x: '<b>E(Ri) = Rf + βi × [E(Rm) − Rf]</b>. Rf là lãi suất kho bạc 10 năm; nhà đầu tư đã đa dạng hoá nên chỉ rủi ro hệ thống (beta) được tính. Mục đích trong định giá: xác định <b>tỷ lệ chiết khấu (chi phí vốn chủ)</b>. Ví dụ Microsoft: Rf 4%, E(Rm) 7%, β 1,4 ⇒ 4% + 1,4 × 3% = <b>8,2%</b>.' },
      { t: 'widget', name: 'capm', title: 'CAPM – thử với Microsoft: Rf 4, phần bù 3, β 1,4' },
      { t: 'tip', x: 'CAPM có từ giữa thập niên 1960, được kiểm định hàng trăm lần và hoạt động khá tốt; mô hình khác (APT, đa nhân tố) không đáng độ phức tạp thêm. Beta xem trên Yahoo Finance.' }
    ] }
  ],
  summary: [
    'Lợi suất cao ⇒ rủi ro cao; chỉ rủi ro hệ thống (beta) được thưởng.',
    'Thị trường khá hiệu quả nhưng Fama–French cho thấy BE/ME cao và P/E thấp có lợi; luôn có biên an toàn.',
    'Cung cầu chi phối giá ngắn hạn; thận trọng với tin xấu mơ hồ.',
    'Dùng lợi suất kép, giảm chi phí giao dịch, tận dụng tài khoản ưu đãi thuế.',
    'Phân bổ tài sản quyết định > 90% biến thiên; 20–25 cổ phiếu là đủ đa dạng.',
    'CAPM cho chi phí vốn chủ = Rf + β × phần bù thị trường.'
  ],
  cards: [
    ['Rủi ro hệ thống vs phi hệ thống?', 'Hệ thống: toàn thị trường, không đa dạng hoá bỏ được. Phi hệ thống: riêng công ty/ngành, đa dạng hoá giảm.'],
    ['Beta?', 'Đo rủi ro hệ thống; thị trường = 1,0.'],
    ['Phần bù rủi ro thị trường?', 'E(Rm) − Rf.'],
    ['Độ lệch chuẩn đo gì?', 'Mức dao động lợi suất quanh trung bình (rủi ro).'],
    ['Phân phối chuẩn ±1σ và ±2σ?', '~2/3 và ~95% quan sát.'],
    ['Reversion to the mean?', 'Lợi suất và rủi ro có xu hướng quay về mức trung bình dài hạn.'],
    ['Thị trường vốn hiệu quả?', 'Giá phản ánh toàn bộ thông tin công khai gần như tức thời.'],
    ['Random walk?', 'Biến động giá kế tiếp độc lập; không dự đoán được từ quá khứ.'],
    ['Nghiên cứu Fama–French 1992?', 'BE/ME cao, E/P cao và vốn hoá nhỏ cho lợi suất cao hơn trung bình.'],
    ['Tài chính hành vi?', 'Nghiên cứu sai lệch tâm lý của nhà đầu tư (ghét lỗ, tự tin thái quá…).'],
    ['Ngại rủi ro?', 'Nỗi đau mất $1 lớn hơn niềm vui được $1; thích ít rủi ro với cùng lợi suất.'],
    ['Smell test với tin xấu?', 'Nếu tin xấu mơ hồ (từ chức CFO, SEC điều tra) thì bán ngay tin xấu đầu tiên.'],
    ['Trung bình kép?', '(A/B)^(1/T) − 1: lợi suất thực sự của khoản đầu tư.'],
    ['Phần trăm tăng để hoà vốn?', '1/(1 − % giảm) − 1.'],
    ['FV và hệ số chiết khấu?', 'FV = PV(1+r)^n; hệ số = 1/(1+r)^n.'],
    ['Phân bổ tài sản chuẩn Phố Wall?', '10% tiền mặt, 35% trái phiếu, 55% cổ phiếu.'],
    ['Bao nhiêu cổ phiếu để đa dạng hoá?', '20–25 cổ phiếu ở nhiều ngành.'],
    ['CAPM?', 'E(R) = Rf + β × [E(Rm) − Rf].']
  ],
  quiz: [
    { q: 'Lợi suất +100% rồi −80%: lợi suất kép hằng năm ≈', o: ['+10%', '−36,75%', '−60%', '0%'], a: 1, e: '(4/10)^(1/2) − 1.' },
    { q: 'Cổ phiếu giảm 50% cần tăng bao nhiêu để hoà vốn?', o: ['50%', '75%', '100%', '200%'], a: 2, e: '1/0,5 − 1.' },
    { q: 'Rủi ro nào được thị trường thưởng?', o: ['Phi hệ thống', 'Hệ thống', 'Cả hai', 'Không rủi ro nào'], a: 1, e: 'Đa dạng hoá loại bỏ phi hệ thống.' },
    { q: 'CAPM Rf 4%, β 1,4, phần bù 3% ⇒', o: ['4,2%', '8,2%', '5,6%', '12%'], a: 1, e: '4 + 1,4 × 3.' },
    { q: 'FV của $10, 8%, 5 năm:', o: ['$14,00', '$14,69', '$18,00', '$10,80'], a: 1, e: '10 × 1,08^5.' },
    { q: 'Hệ số chiết khấu 10%, 5 năm:', o: ['0,5000', '0,6209', '0,7473', '0,9091'], a: 1, e: '1/1,1^5.' },
    { q: 'Số cổ phiếu cần cho đa dạng hoá đủ tốt:', o: ['2–3', '20–25', '500', '1.000'], a: 1, e: 'Thêm nữa hầu như không giảm.' },
    { q: 'Nghiên cứu Brinson cho thấy hiệu suất quỹ chủ yếu do:', o: ['Chọn cổ phiếu', 'Phân bổ tài sản (> 90%)', 'Thời điểm', 'Phí'], a: 1, e: 'Quyết định lớp tài sản quan trọng hơn.' },
    { q: 'Fama–French: danh mục BE/ME cao nhất cho lợi suất:', o: ['Thấp hơn trung bình', 'Cao hơn khoảng 7%/năm', 'Bằng trung bình', 'Âm'], a: 1, e: 'Mâu thuẫn ECM.' },
    { q: 'Nên làm gì khi CFO từ chức với lý do mơ hồ?', o: ['Mua thêm', 'Bán ngay tin xấu đầu tiên', 'Bỏ qua', 'Vay'], a: 1, e: 'Smell test.' },
    { q: 'Mỗi cổ phiếu không nên vượt quá ... danh mục cổ phiếu (theo tác giả):', o: ['5%', '10%', '25%', '50%'], a: 1, e: 'Khởi điểm 5%, tối đa 10%.' },
    { q: 'Cách phòng lạm phát duy nhất được nêu:', o: ['Vàng', 'TIPS', 'Margin', 'Bán khống'], a: 1, e: 'Cộng thêm tài sản rủi ro hơn.' }
  ],
  match: [
    ['Beta', 'Rủi ro hệ thống'],
    ['Độ lệch chuẩn', 'Đo biến động lợi suất'],
    ['Fama–French', 'BE/ME cao thắng'],
    ['Trung bình kép', 'Lợi suất thật'],
    ['FV', 'PV × (1+r)^n'],
    ['Hệ số chiết khấu', '1/(1+r)^n'],
    ['Brinson', 'Phân bổ tài sản > 90%'],
    ['CAPM', 'Chi phí vốn chủ']
  ]
});
