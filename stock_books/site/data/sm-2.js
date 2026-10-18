// Streetsmart Guide to Valuing a Stock – Chương 3.
BOOK_DATA.streetsmart.chapters.push({
  n: 3,
  title: 'Định giá cổ phiếu: những điều sơ bộ',
  intro: 'Giá trị của một cổ phiếu bằng hiện giá dòng tiền kỳ vọng, chiết khấu theo thời điểm và rủi ro. Chương này dùng ví dụ vay thế chấp và công ty điện ABC để hiểu DCF, giải thích bong bóng công nghệ, vai trò kỳ vọng tăng trưởng, và so sánh ba trường phái: cơ bản, kỹ thuật, MPT.',
  sections: [
    { icon: '📐', title: 'Giá trị = hiện giá dòng tiền kỳ vọng', blocks: [
      { t: 'key', x: 'Quyết định đầu tư chỉ nên dựa vào <b>giá so với giá trị</b>; cổ phiếu của công ty quản lý tốt nhất vẫn là khoản đầu tư tồi nếu giá quá cao. <b>Giá trị = Σ dòng tiền kỳ vọng × hệ số chiết khấu</b>. Tỷ lệ chiết khấu = f(thời gian, rủi ro): tăng khi rủi ro vỡ nợ cao (trái phiếu WorldCom) và giảm khi thấp (kho bạc Mỹ). Hệ số chiết khấu 6%: năm 1 = 1/1,06 = 0,9434; năm 2 = 0,8900. Ví dụ: $100 năm 1 + $100 năm 2 ⇒ 94,34 + 89,00 = <b>$183,34</b>.' },
      { t: 'p', x: '<b>Khoản thế chấp của Mary</b>: vay $100.000, 8%, 30 năm ⇒ $734/tháng × 360 = $264.240 ($100.000 gốc + $164.240 lãi). Hiện giá 360 khoản chiết khấu ở 8% = $100.000. Nếu lãi suất thị trường lên 9% ⇒ hiện giá còn $91.223 (khoản vay mới sẽ trả $805/tháng); xuống 7% ⇒ $110.326 ($665/tháng). Cùng cơ chế với cổ phiếu, chỉ khác: dòng tiền thế chấp biết chắc, dòng tiền cổ phiếu thì rất bất định.' },
      { t: 'widget', name: 'mortgage-pv', title: 'Giá trị khoản vay theo lãi suất thị trường' }
    ] },
    { icon: '💡', title: 'Cổ phiếu đơn giản: công ty điện ABC', blocks: [
      { t: 'p', x: 'ABC Utility: doanh thu $1 tỷ/năm, lợi nhuận và dòng tiền sau thuế $200 triệu/năm (không tăng trưởng), trả hết thành cổ tức, chỉ có vốn cổ phần, lợi suất yêu cầu 10%. <b>Vốn hoá thị trường = $200 triệu ÷ 0,10 = $2 tỷ</b> (chia thành 2 tỷ cổ phiếu $1, hay 200 triệu cổ phiếu $10…; chia tách chỉ đổi giá/cổ phiếu, tổng không đổi).' },
      { t: 'table', head: ['Kịch bản', 'Lợi nhuận', 'Vốn hoá', 'Thay đổi'], rows: [
        ['Không tăng trưởng', '$200 triệu', '$2 tỷ', '—'], ['Tăng 50%', '$300 triệu', '$3 tỷ', '+50%'], ['Giảm 90%', '$20 triệu', '$200 triệu', '−90%'], ['Không lợi nhuận', '0', '0', '−100%'], ['Lãi suất yêu cầu 12%', '$200 triệu', '$1,667 tỷ', '−16,7%'], ['Lãi suất yêu cầu 8%', '$200 triệu', '$2,5 tỷ', '+25%']
      ] },
      { t: 'widget', name: 'capitalize', title: 'Vốn hoá lợi nhuận: thay lợi nhuận và lãi suất' },
      { t: 'key', x: 'Hai biến quyết định giá trị: <b>lợi nhuận tương lai</b> (đồng biến) và <b>lãi suất/lợi suất yêu cầu</b> (nghịch biến). Siegel: lãi suất ngắn–trung hạn là ảnh hưởng quan trọng nhất; sau khi Fed hạ Fed Funds (85 lần, 1955–96) lợi suất cổ phiếu 3 tháng trung bình 5,6%, sau khi tăng (92 lần) chỉ 0,85% (chuẩn 2,97%).' }
    ] },
    { icon: '🫧', title: 'Chúng ta đã gây ra bong bóng công nghệ', blocks: [
      { t: 'list', items: [
        'JDS Uniphase tháng 7/2000: $140,50 × 1,52 tỷ cổ phiếu = hơn $200 tỷ vốn hoá, > 200 lần doanh thu (< $1 tỷ), lỗ hàng trăm triệu, P/E vô hạn; cuối 2002 còn $2,47.',
        'ICGE: $200,94, giá trị sổ sách âm, doanh thu $131 triệu, vốn hoá > $50 tỷ; nay $0,36 (≈ $100 triệu, −99,9%).',
        'Lucent: lên $75 (vốn hoá > $200 tỷ); tác giả đã thấy DCF cho thấy giá trị < $10, bán ở $64, nhưng vẫn hối tiếc khi giá lên $75; cuối 2002 còn $1,26.',
        'Mọi nhà đầu tư — cá nhân, tổ chức, trong và ngoài nước — đều đẩy giá lên mức phi thực tế; nhà phân tích như Henry Blodget, Jack Grubman, Mary Meeker (nhiều xung đột lợi ích) nói “không có giá nào là quá cao cho công ty tuyệt vời”. Hãy tự kiểm tra bằng DCF.'
      ] }
    ] },
    { icon: '📊', title: 'Lợi suất cổ đông và kỳ vọng thị trường', blocks: [
      { t: 'key', x: '<b>Lợi suất cổ đông = (cổ tức + thay đổi giá) ÷ giá đầu kỳ</b>. Ví dụ: $100, cổ tức $1, cuối năm $109 ⇒ (1+9)/100 = 10%. Có thể âm dù công ty tốt (thị trường chung giảm) hoặc dương dù công ty tệ (bị thâu tóm).' },
      { t: 'table', head: ['Năm', 'S&P 500', 'Thay đổi', 'Lợi nhuận S&P', 'Thay đổi'], rows: [
        ['1996', '740,74', '—', '40,63', '—'], ['1997', '970,43', '+31,01%', '43,73', '+7,63%'], ['1998', '1.229,23', '+26,67%', '44,27', '+1,23%'], ['1999', '1.469,25', '+19,53%', '51,68', '+16,74%'], ['2000', '1.320,28', '−10,14%', '56,13', '+8,61%'], ['2001', '1.148,08', '−13,04%', '38,85', '−30,79%'], ['2002', '879,82', '−23,37%', '46,04', '+18,51%'], ['TB đơn / kép', '5,11% / 2,91%', '', '3,66% / 2,11%', '']
      ] },
      { t: 'p', x: 'Dài hạn: lợi suất thực 7,13%/năm (1946–96, Siegel) gần bằng lợi suất lợi nhuận trung vị 6,96%; lợi suất thực theo sát tăng trưởng thực của lợi nhuận doanh nghiệp.' },
      { t: 'h3', x: 'Lợi suất kỳ vọng theo CAPM' },
      { t: 'p', x: 'Rf 7%, phần bù 3%: β 1,0 ⇒ 10% ($100 → $110 → $121); β 2,0 ⇒ 7% + 2×3% = 13% ($113 → $127,69). Giá tăng 10–13% là đã đúng kỳ vọng, không phải 30% theo tăng trưởng lợi nhuận của công ty.' }
    ] },
    { icon: '🎯', title: 'Giá cao hay thấp? Kỳ vọng tăng trưởng đã nằm trong giá', blocks: [
      { t: 'tabs', items: [
        ['Đúng kỳ vọng', '<p>Microsoft 16/7/1998: lợi nhuận quý tăng 28% đúng dự báo ⇒ cổ phiếu đứng yên ($117-3/8), ngoài giờ giảm nhẹ.</p>'],
        ['Vượt kỳ vọng', '<p>Lowe’s 19/8/2002: lợi nhuận +42% so với dự báo +29% ⇒ cổ phiếu +11% ($41) trong khi S&amp;P +2,36%.</p>'],
        ['Hụt kỳ vọng', '<p>Electronic Data Systems 18/9/2002 hạ dự báo (quý 4: 57–59 xu thay vì 88 xu) ⇒ 19/9 giảm 53% ($36,46 → $17,20) khi S&amp;P giảm 3%; IBM giảm 7% theo.</p>'],
        ['Cổ phiếu tăng trưởng DEF', '<p>Lợi nhuận quý tăng 10% nhưng giá giảm 25% vì thị trường kỳ vọng 30%.</p>']
      ] },
      { t: 'warn', x: '<b>Quản lý lợi nhuận và gian lận</b>: Regulation FD (SEC, 2000) cấm tiết lộ chọn lọc. Trước đó công ty “quản lý” cho lợi nhuận vượt dự báo đúng một xu; lập dự phòng doanh thu hoãn lại (Microsoft bị cáo buộc). WorldCom chuyển > $9 tỷ chi phí hoạt động thành chi đầu tư; Enron giấu lỗ và nợ ở đối tác ngoài bảng; Global Crossing, Qwest hoán đổi công suất cáp quang làm doanh thu; Xerox điều chỉnh giảm $6,4 tỷ doanh thu; Adelphia giấu > $3 tỷ khoản vay cho gia đình Rigas; Tyco bị cáo buộc biển thủ > $170 triệu; Computer Associates thưởng 20,25 triệu cổ phiếu (> $1,1 tỷ) nếu giá > $53,33 trong 60 ngày. <b>Sarbanes-Oxley (30/7/2002)</b>: CEO và CFO phải xác nhận báo cáo, vi phạm bị tù.' },
      { t: 'tip', x: 'Quy tắc đầu tư thông minh: nếu bạn tin công ty sẽ <b>vượt</b> kỳ vọng ⇒ mua; <b>dưới</b> kỳ vọng ⇒ bán. Sách dùng hai tốc độ tăng trưởng trong định giá: theo ước tính của nhà phân tích (thường quá cao dài hạn) và theo tăng trưởng nền kinh tế (3–5%).' }
    ] },
    { icon: '🧭', title: 'Nghệ thuật, khoa học hay phép màu? Ba trường phái', blocks: [
      { t: 'table', head: ['Trường phái', 'Niềm tin', 'Quy tắc'], rows: [
        ['<b>Phân tích cơ bản</b>', 'Mỗi cổ phiếu có giá trị nội tại; giá sẽ hội tụ về giá trị (Graham, Buffett, Lynch; > 80% nhà phân tích Phố Wall)', 'Giá thấp hơn nhiều giá trị ⇒ mua; cao hơn nhiều ⇒ bán'],
        ['<b>Phân tích kỹ thuật</b>', 'Giá ngắn hạn do tâm lý–cung cầu (sợ/tham); không cần quan hệ với giá trị (O’Neil, Acampora)', 'Chỉ báo tăng ⇒ mua; giảm ⇒ bán; giữ ngắn hạn, giao dịch nhiều'],
        ['<b>MPT</b>', 'Thị trường hiệu quả; giá luôn phản ánh giá trị; khó có cổ phiếu bị định giá sai (Chicago)', 'Chọn mức rủi ro chịu được và đa dạng hoá']
      ] },
      { t: 'list', items: [
        '<b>Ba phương pháp cơ bản</b>: <b>giá mục tiêu</b> (EPS dự báo × P/E dự phóng, vd McDonald’s 1,63 × 18 ≈ $30 so với $16,08); <b>giá trị tương đối</b> (P/E, P/BV, P/S, PEG so với đối thủ); <b>DCF</b> — gồm mô hình chiết khấu cổ tức (DDM), dòng tiền tự do vốn chủ (FCFE) và dòng tiền tự do doanh nghiệp (<b>FCFF</b>, dùng trong sách).',
        'Bằng chứng ủng hộ phân tích chuyên nghiệp: Wall Street Journal “Investment Dartboard” 1990–2002: trong 147 cuộc, chuyên gia thắng phi tiêu 90 lần; trung bình 6 tháng chuyên gia +9,6%, DJIA +5,1%, phi tiêu +2,9%; từ 1999 (35 cuộc) chuyên gia +4,7%, nghiệp dư −5,4%.'
      ] }
    ] },
    { icon: '🧠', title: 'Cảm xúc, nhà phân tích và khi nào mua/bán', blocks: [
      { t: 'list', items: [
        '<b>Giá trị ≠ giá</b>: “giá trị là cái gì bạn bán được” bị phản bác — công bằng là giá trị nội tại có cơ sở, không phải thuyết kẻ ngốc lớn hơn. Cảm xúc làm giá lệch giá trị trong thời gian dài (EntreMed, bong bóng); thông tin có thể ảnh hưởng một công ty (Dell hạ dự báo kéo IBM, HP, Intel, Microsoft), cả ngành hay cả thị trường. Phần bù rủi ro vốn tăng mạnh quanh 11/9 và bê bối Enron/WorldCom.',
        '<b>Nhà phân tích có xung đột lợi ích</b>: ngại khuyến nghị bán vì ngân hàng đầu tư, gọi cổ phiếu quá đắt là “fully valued/long-term hold” (hãy cảnh giác). Blodget (Merrill) bị cấm ngành và Merrill dàn xếp $100 triệu; Grubman (Salomon Smith Barney) phạt $15 triệu. SEC đề xuất <b>Regulation AC</b>: cấm gắn lương nhà phân tích với thương vụ, cấm nghiên cứu thuận lợi để lấy việc, hạn chế giao dịch cá nhân, bắt công bố xung đột. Nhà phân tích là người biện hộ, không phải quan sát viên trung lập (James English).',
        '<b>Khuyến nghị</b>: cổ phiếu quá đắt hơn X% (vd 15%) so với giá trị ⇒ bán và thay bằng cổ phiếu rẻ hơn X%; vẫn đa dạng hoá theo MPT. Nếu giá giảm ≥ 20% dưới giá mua ⇒ <b>cắt lỗ</b>; định kỳ cập nhật định giá; nếu cơ bản đổi theo hướng xấu thì bán khi giá thấp hơn giá trị mới X%. Thị trường có thể biết điều bạn chưa biết.'
      ] }
    ] }
  ],
  summary: [
    'Giá trị = hiện giá dòng tiền kỳ vọng; thay đổi lợi nhuận và lãi suất thay đổi giá trị (ABC Utility).',
    'Bong bóng công nghệ: vốn hoá JDSU, ICGE, Lucent không thể được lợi nhuận hỗ trợ; ai cũng góp phần.',
    'Giá đã chứa kỳ vọng tăng trưởng: vượt kỳ vọng thì tăng, hụt thì sập.',
    'Ba trường phái: cơ bản, kỹ thuật, MPT; sách chọn DCF (FCFF) kết hợp đa dạng hoá.',
    'Cẩn thận nhà phân tích xung đột lợi ích và quản lý lợi nhuận; cắt lỗ khi giảm ≥ 20%.'
  ],
  cards: [
    ['Giá trị của tài sản tài chính?', 'Hiện giá dòng tiền kỳ vọng, chiết khấu theo rủi ro và thời gian.'],
    ['Tỷ lệ chiết khấu phụ thuộc?', 'Thời gian và rủi ro.'],
    ['Hệ số chiết khấu 6%: năm 1 và 2?', '0,9434 và 0,8900.'],
    ['Vì sao giá trị khoản thế chấp đổi khi lãi suất đổi?', 'Dòng tiền cố định được chiết khấu ở lãi suất khác: lãi lên ⇒ giá trị giảm.'],
    ['Vốn hoá không tăng trưởng?', 'Lợi nhuận ÷ lợi suất yêu cầu ($200 triệu/10% = $2 tỷ).'],
    ['Chia tách cổ phiếu có đổi giá trị công ty không?', 'Không; chỉ đổi số cổ phiếu và giá mỗi cổ phiếu.'],
    ['Hai biến quyết định giá cổ phiếu?', 'Lợi nhuận tương lai và lãi suất/lợi suất yêu cầu.'],
    ['Lợi suất cổ đông?', '(Cổ tức + thay đổi giá) ÷ giá đầu kỳ.'],
    ['Lợi suất thực dài hạn của cổ phiếu (Siegel)?', 'Khoảng 7,13%/năm, bám theo tăng trưởng lợi nhuận thực.'],
    ['Tin cũ đã “nằm trong giá”?', 'Kỳ vọng tăng trưởng đã được phản ánh; chỉ bất ngờ mới làm giá đổi.'],
    ['Regulation FD?', 'SEC cấm công ty tiết lộ chọn lọc thông tin trọng yếu chưa công khai.'],
    ['Sarbanes-Oxley?', 'Luật 2002: CEO/CFO xác nhận báo cáo, phạt tù nếu vi phạm.'],
    ['Ba phương pháp cơ bản định giá?', 'Giá mục tiêu, giá trị tương đối, DCF.'],
    ['Ba mô hình DCF?', 'DDM (cổ tức), FCFE, FCFF.'],
    ['Regulation AC?', 'Đề xuất 2002 chống xung đột lợi ích của nhà phân tích.'],
    ['Khi nào cắt lỗ theo sách?', 'Khi giá giảm ≥ 20% dưới giá mua.']
  ],
  quiz: [
    { q: 'ABC: lợi nhuận $200 triệu, lợi suất yêu cầu 10%, không tăng trưởng ⇒ vốn hoá:', o: ['$200 triệu', '$2 tỷ', '$20 tỷ', '$1 tỷ'], a: 1, e: '200/0,10.' },
    { q: 'Lợi suất yêu cầu tăng lên 12% ⇒ vốn hoá ABC:', o: ['$2,5 tỷ', '$1,667 tỷ', '$2 tỷ', '$1 tỷ'], a: 1, e: '200/0,12.' },
    { q: 'Khoản vay 8% bị chiết khấu ở 9% thì giá trị:', o: ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'], a: 1, e: '$91.223.' },
    { q: 'Hiện giá $100 năm 1 và $100 năm 2 ở 6%:', o: ['$200', '$183,34', '$150', '$94,34'], a: 1, e: '94,34 + 89,00.' },
    { q: 'DEF tăng lợi nhuận 10% nhưng giá giảm 25% vì:', o: ['Thị trường kỳ vọng 30%', 'Lợi nhuận âm', 'Cổ tức giảm', 'Luật'], a: 0, e: 'Kỳ vọng đã nằm trong giá.' },
    { q: 'EDS giảm 53% sau khi:', o: ['Tăng cổ tức', 'Hạ dự báo lợi nhuận quý 3–4', 'Chia tách', 'Mua lại'], a: 1, e: 'Dự báo 88 xu → 57–59 xu.' },
    { q: 'Beta 2, Rf 7%, phần bù 3% ⇒ lợi suất kỳ vọng:', o: ['10%', '13%', '16%', '7%'], a: 1, e: '7 + 2×3.' },
    { q: 'Phương pháp DCF dùng trong sách:', o: ['DDM', 'FCFE', 'FCFF', 'Giá mục tiêu'], a: 2, e: 'Dòng tiền tự do doanh nghiệp.' },
    { q: 'Trường phái tin giá luôn phản ánh giá trị:', o: ['Cơ bản', 'Kỹ thuật', 'MPT', 'Hành vi'], a: 2, e: 'Thị trường hiệu quả.' },
    { q: 'Trong Investment Dartboard 1990–2002 chuyên gia:', o: ['Thua phi tiêu', 'Thắng phi tiêu 90/147 lần', 'Hoà', 'Không tham gia'], a: 1, e: 'Ủng hộ phân tích cơ bản.' },
    { q: 'Theo sách nên cắt lỗ khi giảm:', o: ['5%', '10%', '20% trở lên', '50%'], a: 2, e: 'Cập nhật định giá định kỳ.' },
    { q: 'Sarbanes-Oxley yêu cầu:', o: ['CEO/CFO xác nhận báo cáo', 'Cấm cổ tức', 'Hạ lãi suất', 'Đóng cửa sàn'], a: 0, e: 'Vi phạm bị tù.' }
  ],
  match: [
    ['Vốn hoá', 'Lợi nhuận ÷ lợi suất yêu cầu'],
    ['Regulation FD', 'Cấm tiết lộ chọn lọc'],
    ['Regulation AC', 'Chống xung đột lợi ích nhà phân tích'],
    ['Sarbanes-Oxley', 'Xác nhận báo cáo, phạt tù'],
    ['JDSU', 'Vốn hoá $200 tỷ, lỗ'],
    ['MPT', 'Thị trường hiệu quả'],
    ['FCFF', 'Dòng tiền tự do doanh nghiệp'],
    ['Siegel', 'Stocks for the Long Run']
  ]
});
