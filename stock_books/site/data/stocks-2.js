// Understanding Stocks – Chương 4–6.
BOOK_DATA.stocks.chapters.push({
  n: 4,
  title: 'Những điều thú vị bạn có thể làm với cổ phiếu',
  intro: 'Đa dạng hoá, phân bổ tài sản, lãi kép, chia tách cổ phiếu, bán khống, rồi các cách phân loại khác: cổ phiếu lưu hành, float, vốn hoá và IPO.',
  sections: [
    { icon: '🧺', title: 'Đa dạng hoá và phân bổ tài sản', blocks: [
      { t: 'key', x: '<b>Đa dạng hoá</b>: đừng bỏ trứng vào một giỏ — rải rủi ro qua nhiều chứng khoán (danh mục = cổ phiếu, quỹ, trái phiếu, tiền mặt). Nhân viên Enron chỉ giữ cổ phiếu Enron mất cả việc lẫn khoản đầu tư. Muốn đa dạng hoá tốt cần khoảng <b>25–50 cổ phiếu</b> ở nhiều ngành (vì thế quỹ tương hỗ là ý hay), kết hợp tăng trưởng, giá trị, thu nhập, cả quốc tế, cả công ty lớn và nhỏ.' },
      { t: 'warn', x: 'Đổ 100% vào cổ phiếu Internet không phải đa dạng hoá: khi bong bóng vỡ tất cả cùng giảm. Đừng “quá an toàn” (đa dạng quá mức) cũng đừng chịu quá nhiều rủi ro; phụ thuộc <b>khả năng chịu rủi ro</b>, tuổi và mục tiêu.' },
      { t: 'p', x: '<b>Phân bổ tài sản</b>: quyết định tỷ lệ cho từng loại. Ví dụ còn 30 năm đến hưu: 65% cổ phiếu và quỹ cổ phiếu, 25% trái phiếu, 10% tiền mặt. Quy tắc cũ “100 trừ tuổi” là cổ phiếu quá đơn giản. Ví dụ: ông 80 tuổi dồn 90% vào Lucent và Cisco rồi mất sạch; cô 21 tuổi bỏ nhiều vào cổ phiếu vì thời gian dài hơn.' }
    ] },
    { icon: '❄️', title: 'Lãi kép', blocks: [
      { t: 'key', x: '<b>Lãi kép</b> = tái đầu tư lãi/cổ tức/lãi vốn để “có lãi trên lãi”: $100 tăng 10% ⇒ $110, năm sau $121 (thêm $11 là lãi kép). Bogle: “phát minh toán học vĩ đại nhất cho nhà đầu tư tìm phần thưởng tối đa.” Hãy đầu tư sớm.' },
      { t: 'widget', name: 'compound-simple', title: 'Lãi kép vs lãi đơn' },
      { t: 'warn', x: 'Lãi kép chỉ hiệu quả khi giá cổ phiếu tăng; không có bảo đảm đạt 8%+ mỗi năm.' }
    ] },
    { icon: '✂️', title: 'Chia tách cổ phiếu (split)', blocks: [
      { t: 'key', x: 'Chia 2-cho-1: giá giảm một nửa, số cổ phiếu gấp đôi; 100 cổ phiếu IBM $80 ⇒ 200 cổ phiếu $40; <b>giá trị đầu tư không đổi</b>, tình hình tài chính công ty không đổi. Mục đích chủ yếu tâm lý/marketing: giá thấp trông “rẻ”, hút thêm nhà đầu tư (Berkshire Hathaway ~$70.000/cổ phiếu không chia).' },
      { t: 'tip', x: '<b>Reverse split</b> (gộp): 1-cho-5 làm $1 thành $5 và 100 cổ phiếu thành 20; thường để tránh bị hủy niêm yết, giá cao thường không bền.' }
    ] },
    { icon: '🐻', title: 'Bán khống (short selling)', blocks: [
      { t: 'steps', items: [
        '“Long” = mua hy vọng giá tăng. “Short” = <b>bán trước (vay cổ phiếu) rồi mua lại giá thấp hơn</b>; lãi = giá bán − giá mua lại.',
        'Ví dụ: bán khống 100 cổ phiếu Bright Light giá $20 (thu $2.000); giá xuống $18, mua lại ⇒ lãi 2 điểm = $200.',
        'Quy tắc: chỉ bán khống khi <b>uptick</b> (giá tạm tăng); không bán khống cổ phiếu dưới $5.'
      ] },
      { t: 'warn', x: 'Mua dài thì lỗ tối đa là toàn bộ vốn; <b>bán khống có thể lỗ vô hạn</b> (mỗi điểm giá tăng = lỗ $100 cho 100 cổ phiếu). Nhóm bán khống Yahoo! ở $90 (1997) bị buộc đóng khi lên $400, lỗ hơn 100 điểm — dù sau này Yahoo! còn dưới $20. Hãy nghe cả phía bán khống để tỉnh táo khỏi lạc quan thái quá.' }
    ] },
    { icon: '🔢', title: 'Cổ phiếu lưu hành, float, vốn hoá, IPO', blocks: [
      { t: 'table', head: ['Khái niệm', 'Ý nghĩa'], rows: [
        ['Outstanding shares', 'Tổng số cổ phiếu công ty đã phát hành'],
        ['Float', 'Phần do nhà đầu tư bên ngoài nắm giữ và giao dịch (5 triệu lưu hành, nội bộ giữ 3 triệu ⇒ float 2 triệu)'],
        ['Market cap', 'Số cổ phiếu lưu hành × giá; ví dụ 10 tỷ × $50 = $500 tỷ'],
        ['Large-cap / mid-cap / small-cap', '> $5 tỷ / $1–5 tỷ / $250 triệu–$1 tỷ (micro-cap nhỏ hơn)']
      ] },
      { t: 'list', items: [
        'Cung–cầu: biết lưu hành và float giúp ước lượng thừa/thiếu cung.',
        'Cổ phiếu large-cap rất khó tăng gấp đôi (từ $500 tỷ lên $1.000 tỷ); small-cap dễ tăng gấp 2–3 hơn nhưng rủi ro cao hơn. Enron — công ty lớn thứ năm nước Mỹ — vẫn phá sản 2002.'
      ] },
      { t: 'h3', x: 'IPO' },
      { t: 'p', x: 'IPO là lần đầu bán cho công chúng (“going public”) để huy động vốn mở rộng, trả nợ, R&amp;D, và làm nội bộ giàu lên. Công ty thuê <b>lead underwriter</b> (công ty môi giới lớn) định số lượng và giá; người trong cuộc mua giá rất thấp. Netscape 4/1995 định $28, mở cửa nhảy $75; TheGlobe.com $9 → $87 trong một ngày (1998); VA Linux +700% ngày đầu (1999) rồi sau vài năm dưới $5.' },
      { t: 'warn', x: 'Nhà đầu tư cá nhân không có quan hệ nội bộ nên <b>tránh mua IPO</b>: dễ mua ở đỉnh rồi lỗ. Nếu mua, hãy đọc <b>prospectus</b> (bản cáo bạch nộp SEC) — thường có cảnh báo rủi ro bằng chữ nhỏ.' }
    ] }
  ],
  summary: [
    'Đa dạng hoá và phân bổ tài sản theo khả năng chịu rủi ro, tuổi, mục tiêu.',
    'Lãi kép: lãi trên lãi, đầu tư sớm; không bảo đảm.',
    'Chia tách cổ phiếu không thay đổi giá trị; reverse split thường là dấu hiệu yếu.',
    'Bán khống lãi khi giá giảm nhưng lỗ không giới hạn.',
    'Vốn hoá, float, IPO: IPO nhiều rủi ro cho nhà đầu tư cá nhân.'
  ],
  cards: [
    ['Đa dạng hoá là gì?', 'Rải rủi ro qua nhiều chứng khoán thay vì dồn vào một hai mã.'],
    ['Bao nhiêu cổ phiếu để đa dạng hoá tốt?', 'Ít nhất 25–50 cổ phiếu ở nhiều ngành.'],
    ['Phân bổ tài sản?', 'Quyết định tỷ lệ tiền cho cổ phiếu, trái phiếu, tiền mặt…'],
    ['Lãi kép?', 'Tái đầu tư lãi để lãi sinh ra lãi.'],
    ['Stock split 2-for-1?', 'Giá giảm nửa, số cổ phiếu gấp đôi, giá trị không đổi.'],
    ['Reverse split?', 'Gộp cổ phiếu để nâng giá (vd 1-cho-5), thường để tránh hủy niêm yết.'],
    ['Long vs short?', 'Long: mua chờ tăng. Short: bán trước, mua lại khi giá giảm.'],
    ['Uptick rule?', 'Chỉ được bán khống khi giá đang tạm tăng.'],
    ['Rủi ro bán khống?', 'Giá tăng không giới hạn ⇒ lỗ có thể vượt vốn.'],
    ['Outstanding shares?', 'Tổng số cổ phiếu công ty đã phát hành.'],
    ['Float?', 'Số cổ phiếu do nhà đầu tư bên ngoài nắm giữ và giao dịch.'],
    ['Market cap?', 'Số cổ phiếu lưu hành × giá cổ phiếu.'],
    ['Large-cap là gì?', 'Công ty vốn hoá trên $5 tỷ.'],
    ['IPO?', 'Lần đầu bán cổ phiếu ra công chúng.'],
    ['Prospectus?', 'Bản cáo bạch nộp SEC, nêu kế hoạch, tình hình tài chính và rủi ro.']
  ],
  quiz: [
    { q: '$100, lãi 10%/năm tái đầu tư, sau 2 năm:', o: ['$120', '$121', '$110', '$200'], a: 1, e: '100×1,1×1,1.' },
    { q: 'Split 2-1 cổ phiếu $80, 100 cổ phiếu ⇒', o: ['100 cổ phiếu $40', '200 cổ phiếu $40', '200 cổ phiếu $80', '50 cổ phiếu $160'], a: 1, e: 'Giá trị không đổi.' },
    { q: 'Bán khống 100 cổ phiếu $20, mua lại $18 ⇒ lãi:', o: ['$18', '$200', '$2', '$2.000'], a: 1, e: '2 điểm × 100.' },
    { q: 'Rủi ro lớn nhất của bán khống:', o: ['Lỗ tối đa bằng vốn', 'Lỗ không giới hạn', 'Phí cao', 'Không có'], a: 1, e: 'Giá có thể tăng vô hạn.' },
    { q: 'Market cap = ?', o: ['Giá × cổ phiếu lưu hành', 'Giá × float', 'Doanh thu', 'Lợi nhuận'], a: 0, e: 'Cổ phiếu lưu hành × giá.' },
    { q: 'Float 2 triệu khi lưu hành 5 triệu, nội bộ giữ:', o: ['2 triệu', '3 triệu', '5 triệu', '7 triệu'], a: 1, e: '5 − 2 = 3 triệu.' },
    { q: 'Large-cap có vốn hoá trên:', o: ['$250 triệu', '$1 tỷ', '$5 tỷ', '$50 tỷ'], a: 2, e: 'Mid-cap $1–5 tỷ.' },
    { q: 'Vì sao nhà đầu tư cá nhân nên tránh IPO?', o: ['Không hợp pháp', 'Dễ mua ở đỉnh sau khi nội bộ mua rẻ', 'Phí cao', 'Không có cổ tức'], a: 1, e: 'Ví dụ VA Linux.' },
    { q: 'Prospectus là:', o: ['Báo cáo thuế', 'Tài liệu nộp SEC mô tả kế hoạch và rủi ro công ty', 'Lệnh mua', 'Quỹ tương hỗ'], a: 1, e: 'Cần đọc trước khi mua IPO.' },
    { q: 'Mục đích chính của stock split:', o: ['Tăng lợi nhuận', 'Hút nhà đầu tư nhờ giá thấp hơn', 'Giảm nợ', 'Tăng cổ tức'], a: 1, e: 'Tâm lý/marketing.' }
  ],
  match: [
    ['Long', 'Mua chờ giá tăng'],
    ['Short', 'Bán trước, mua lại giá thấp'],
    ['Float', 'Cổ phiếu do nhà đầu tư ngoài nắm'],
    ['Market cap', 'Quy mô công ty'],
    ['Reverse split', 'Gộp cổ phiếu để nâng giá'],
    ['Lãi kép', 'Lãi trên lãi'],
    ['Lead underwriter', 'Công ty môi giới quản lý IPO']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 5,
  title: 'Hiểu giá cổ phiếu',
  intro: 'Giá cổ phiếu chỉ là một mảnh của câu đố. Chương này giải thích cách đọc báo giá, bid/ask/spread, các chỉ số trong báo giá chi tiết và vì sao giá không nói hết “rẻ hay đắt”.',
  sections: [
    { icon: '🔤', title: 'Báo giá cơ bản và mã giao dịch', blocks: [
      { t: 'key', x: '<b>Stock quote</b> = giá hiện tại. Ví dụ Cisco (CSCO) $15,04 nghĩa là mua một cổ phiếu ngay lúc đó tốn $15,04. Ngày nay báo giá thời gian thực miễn phí trên TV tài chính (CNBC, Bloomberg), môi giới và Internet (trước đây miễn phí thường bị trễ 20 phút).' },
      { t: 'list', items: [
        '<b>Ticker symbol</b>: IBM = IBM, Microsoft = MSFT, AT&amp;T = T, GE = GE, Cisco = CSCO.',
        'Đếm chữ cái đoán sàn: <b>1–3 chữ = NYSE</b>, <b>4–5 chữ = Nasdaq</b>.'
      ] }
    ] },
    { icon: '📋', title: 'Báo giá chi tiết: bid, ask, spread', blocks: [
      { t: 'table', head: ['Thuật ngữ', 'Ý nghĩa (ví dụ Cisco)'], rows: [
        ['<b>Bid</b>', 'Giá bạn nhận nếu <b>bán</b> (thấp hơn): $15,05'],
        ['<b>Ask</b>', 'Giá bạn phải trả nếu <b>mua</b> (cao hơn): $15,07'],
        ['<b>Spread</b>', 'Chênh lệch ask − bid: $0,02'],
        ['Previous close', 'Giá đóng cửa hôm trước'],
        ['Day’s range / 52-week range', 'Biên giá trong ngày / 52 tuần'],
        ['Volume', 'Khối lượng giao dịch'],
        ['P/E, Mkt Cap, Div/Shr, Yield', 'Hệ số giá/lợi nhuận, vốn hoá, cổ tức mỗi cổ phiếu, tỷ suất cổ tức']
      ] },
      { t: 'tip', x: 'Khi giá niêm yết bằng phân số, spread có thể tới $1, mua rồi bán ngay là lỗ ngay. Nhờ <b>decimalization</b> (giá thập phân) spread thường chỉ vài xu ⇒ công bằng hơn cho nhà đầu tư.' }
    ] },
    { icon: '⚖️', title: 'Giá có phải tất cả?', blocks: [
      { t: 'key', x: 'Giá chỉ là “ảnh chụp nhanh”, có người nói là mẩu thông tin ít quan trọng nhất. Cổ phiếu $50 có thể tốt hơn cổ phiếu $10 nếu $10 gần như không có lợi nhuận và nợ nhiều. Buffett: “<b>Thà mua một công ty tuyệt vời giá hợp lý còn hơn một công ty tầm thường giá tuyệt vời.</b>” Đó là lý do nhà đầu tư dùng <b>P/E</b> = giá ÷ lợi nhuận mỗi cổ phiếu. Đừng là người “biết giá của mọi thứ mà không biết giá trị của cái nào” (Oscar Wilde).' }
    ] },
    { icon: '🌙', title: 'Giao dịch ngoài giờ', blocks: [
      { t: 'p', x: 'Sàn mở giao dịch điện tử ngoài giờ (qua ECN), gồm cả phiên trước giờ (từ ~8:00 sáng giờ miền Đông). Khối lượng chỉ vài triệu cổ phiếu so với hàng tỷ trong phiên thường nên giá có thể méo mó.' },
      { t: 'warn', x: 'Sau khi bò kết thúc, quan tâm đến giao dịch đêm sụt giảm; chỉ chuyên gia còn dùng. Nhà đầu tư thường nên <b>tránh</b> và giao dịch trong giờ chính.' }
    ] }
  ],
  summary: [
    'Báo giá cho biết giá hiện tại; mỗi cổ phiếu có mã (1–3 chữ NYSE, 4–5 chữ Nasdaq).',
    'Bid là giá bán nhận được, ask là giá mua phải trả; spread là chênh lệch, càng nhỏ càng tốt.',
    'Báo giá chi tiết: biên giá, khối lượng, P/E, vốn hoá, cổ tức.',
    'Giá cao hay thấp không quyết định cổ phiếu rẻ hay đắt; cần P/E và giá trị công ty.',
    'Giao dịch ngoài giờ khối lượng thấp, nhiều rủi ro cho người mới.'
  ],
  cards: [
    ['Stock quote?', 'Giá hiện tại của cổ phiếu.'],
    ['Ticker symbol?', 'Mã viết tắt của cổ phiếu (CSCO, MSFT…).'],
    ['Cách đoán sàn qua mã?', '1–3 chữ = NYSE; 4–5 chữ = Nasdaq.'],
    ['Bid?', 'Giá bạn nhận nếu bán.'],
    ['Ask?', 'Giá bạn trả nếu mua.'],
    ['Spread?', 'Chênh lệch giữa ask và bid.'],
    ['Decimalization?', 'Chuyển giá từ phân số sang thập phân, làm spread nhỏ hơn.'],
    ['52-week range?', 'Giá cao nhất/thấp nhất trong 52 tuần.'],
    ['P/E?', 'Giá cổ phiếu ÷ lợi nhuận mỗi cổ phiếu.'],
    ['Câu của Buffett về giá?', 'Thà mua công ty tuyệt vời giá hợp lý hơn công ty tầm thường giá tuyệt vời.'],
    ['Vì sao giá cổ phiếu $10 chưa chắc rẻ?', 'Có thể không có lợi nhuận, nhiều nợ.'],
    ['After-hours trading?', 'Giao dịch ngoài giờ qua ECN, khối lượng thấp, nhiều rủi ro.']
  ],
  quiz: [
    { q: 'Bid là giá:', o: ['Bạn trả khi mua', 'Bạn nhận khi bán', 'Đóng cửa hôm trước', 'Cao nhất 52 tuần'], a: 1, e: 'Thấp hơn ask.' },
    { q: 'Bid $15,05, ask $15,07 ⇒ spread:', o: ['$15,06', '$0,02', '$30,12', '$0,2'], a: 1, e: 'Ask − bid.' },
    { q: 'Mã 4–5 chữ cái thường là:', o: ['NYSE', 'Nasdaq', 'AMEX', 'Trái phiếu'], a: 1, e: 'NYSE chỉ 1–3 chữ.' },
    { q: 'Decimalization làm:', o: ['Tăng spread', 'Giảm spread', 'Tăng phí', 'Không đổi'], a: 1, e: 'Công bằng hơn cho nhà đầu tư.' },
    { q: 'Cổ phiếu $50 có thể tốt hơn $10 khi:', o: ['$10 có lợi nhuận mạnh', '$10 gần như không lợi nhuận và nhiều nợ', 'Luôn đúng', 'Luôn sai'], a: 1, e: 'Giá không nói hết.' },
    { q: 'P/E = ?', o: ['Giá ÷ EPS', 'EPS ÷ giá', 'Giá × EPS', 'Giá − EPS'], a: 0, e: 'Hệ số giá/lợi nhuận.' },
    { q: 'Giao dịch ngoài giờ có đặc điểm:', o: ['Khối lượng lớn', 'Khối lượng thấp, giá méo mó', 'Phí bằng 0', 'Ai cũng tham gia'], a: 1, e: 'Nên tránh với người mới.' },
    { q: 'Báo giá thời gian thực ngày nay:', o: ['Rất đắt', 'Phổ biến, miễn phí', 'Trễ 20 phút bắt buộc', 'Chỉ cho chuyên gia'], a: 1, e: 'TV, Internet, môi giới.' }
  ],
  match: [
    ['Bid', 'Giá nhận khi bán'],
    ['Ask', 'Giá trả khi mua'],
    ['Spread', 'Ask − bid'],
    ['Ticker', 'Mã cổ phiếu'],
    ['P/E', 'Giá ÷ lợi nhuận mỗi cổ phiếu'],
    ['ECN', 'Mạng điện tử khớp lệnh'],
    ['Volume', 'Khối lượng giao dịch']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 6,
  title: 'Mua cổ phiếu ở đâu',
  intro: 'Mua bán cổ phiếu thì dễ, kiếm tiền mới khó. Chương này nói về các loại công ty môi giới, các loại lệnh, margin, ECN và bài học từ hai cuộc sụp đổ 1929 và 1987.',
  sections: [
    { icon: '🏢', title: 'Chọn công ty môi giới', blocks: [
      { t: 'tabs', items: [
        ['Full-service', '<p>Dịch vụ đầy đủ: tư vấn, nghiên cứu, ngân hàng, mua bán cổ phiếu/trái phiếu/quỹ/CD. Có người phụ trách tài khoản (nay gọi “cố vấn tài chính”…). <b>Hoa hồng</b> mỗi lệnh có thể vài trăm đô. Xung đột lợi ích: môi giới hưởng hoa hồng nên muốn bạn giao dịch nhiều (<b>churning</b> — bất hợp pháp) hoặc bán sản phẩm hoa hồng cao. Một số tính phí 1–2%/năm thay vì theo lệnh.</p>'],
        ['Discount / Online', '<p>Dành cho người tự làm, hoa hồng thấp (dưới $10/lệnh), ít tư vấn; báo giá tức thời, biểu đồ, nghiên cứu tương tác. Mở tài khoản với vài trăm đô. Hạn chế: không có tư vấn.</p>']
      ] },
      { t: 'tip', x: 'Khởi đầu với $5.000 hoặc ít hơn là được, nhưng khó đa dạng hoá; từ $5.000 có thể lập danh mục khá đa dạng. Sau khi mở tài khoản (khoảng 10 ngày), tiền thường nằm trong quỹ thị trường tiền tệ.' },
      { t: 'h3', x: 'Lịch sử: từ phone đến online' },
      { t: 'p', x: 'Trước 1987 chỉ giao dịch qua điện thoại với môi giới. Sụp đổ tháng 10/1987 (giảm hơn 20% trong ngày) làm đường dây nghẽn, môi giới không trả lời, lệnh của tổ chức được ưu tiên hơn cá nhân. Nasdaq lập <b>SOES</b> (đặt lệnh nhỏ điện tử) — day trader hưởng lợi trước; 10 năm sau nhà đầu tư cá nhân mới được giao dịch online.' }
    ] },
    { icon: '📝', title: 'Các loại lệnh', blocks: [
      { t: 'table', head: ['Lệnh', 'Cách hoạt động', 'Ưu / nhược'], rows: [
        ['<b>Market order</b>', 'Mua/bán ngay giá thị trường (Bright Light $20/$20,25 ⇒ trả $20,25)', 'Khớp nhanh, giá không tốt nhất'],
        ['<b>Limit order</b>', 'Đặt giá bạn muốn (mua ở $19 khi giá $20). Day order hoặc GTC (good-till-canceled)', 'Giá tốt hơn, có thể không bao giờ khớp'],
        ['<b>Stop-loss</b>', 'Tự bán khi giá chạm mức (mua $20, stop $18 ⇒ lỗ ≈ 10%)', 'Chặn thảm họa; có thể bị kích hoạt rồi giá hồi lên $22; trailing stop tăng theo giá'],
        ['<b>Stop limit</b>', 'Khi chạm stop thì chuyển thành lệnh limit', 'Hai mức giá: stop và limit']
      ] },
      { t: 'warn', x: 'Nhiều người không tin stop-loss (“chết bởi ngàn vết cắt”). Bài học: trước khi mua, nghĩ sẵn <b>khi nào bán nếu sai</b>; stop-loss như bảo hiểm. Người thiếu kỷ luật sẽ “đóng băng” khi cổ phiếu yêu thích giảm hàng chục điểm hoặc “quá rẻ để bán”.' },
      { t: 'p', x: 'Ví dụ lệnh đầu tiên: $2.500 trong tài khoản, mua 100 BRLT bằng market order; giá nhảy $21 ⇒ trừ $2.100 + hoa hồng $9,99. Tăng 1 điểm = <b>lãi trên giấy</b> $100. Lệnh được chuyển đến specialist/market maker hoặc <b>ECN</b>; phần mềm Level II cho thấy tất cả market maker. Thời điểm tốt: sau 10:00 sáng giờ miền Đông; tránh nửa tiếng đầu/cuối và nửa đêm.' }
    ] },
    { icon: '💳', title: 'Margin (vay môi giới)', blocks: [
      { t: 'key', x: '<b>Margin</b> = vay môi giới để mua thêm (thường 2-1: nộp $2.000 vay thêm $2.000 ⇒ mua $4.000, trả lãi vay). Đòn bẩy làm lãi lớn khi giá tăng; khi giá giảm bạn mất vốn <b>và vẫn nợ tiền vay</b>. Cổ phiếu giảm nhanh hơn tăng.' },
      { t: 'list', items: [
        '1920s margin có thể 10-1 ($1.000 vay thêm $9.000); một nguyên nhân sụp đổ 1929. SEC (1934) nâng yêu cầu ký quỹ.',
        '<b>Margin call</b>: môi giới đòi thêm tiền; nếu không kịp, họ bán cổ phiếu của bạn (duy trì thường ≥ 30%). Hàng nghìn người bị buộc thanh lý trong thị trường gấu.',
        'Tác giả khuyên tránh margin: nếu chỉ đầu tư được nhờ margin, bạn đang <b>đánh bạc</b>.'
      ] },
      { t: 'p', x: '<b>ECN</b>: mạng máy tính khớp lệnh mua bán tự động, nhanh, rẻ (vài xu mỗi cổ phiếu), tránh được “trò chơi” của market maker và specialist.' }
    ] },
    { icon: '📉', title: 'Sụp đổ 1929', blocks: [
      { t: 'steps', items: [
        'Thập niên 1920: điện khí hoá thu hút công chúng; margin 9-1; giá tăng nuôi giá tăng giống kế hoạch Ponzi.',
        'Chính quyền Coolidge “laissez-faire”; Hoover định nâng margin nhưng thị trường hoảng loạn.',
        '24/10/1929: mất hơn $10 tỷ trước buổi trưa; 29/10 xoá hết lãi cả năm; chỉ số rơi 89% từ đỉnh 381 xuống 41 năm 1932.',
        'Dấu hiệu bị bỏ lỡ: P/E vượt “vùng an toàn” 15; Fed tăng lãi suất; Quốc hội tăng thuế và thuế quan biến suy thoái thành đại suy thoái; ngân hàng cho vay ít hạn chế rồi đóng cửa; gian lận nội gián.',
        'FDR lập SEC và nhiều biện pháp; Dow mất 25 năm mới quay lại 381.'
      ] },
      { t: 'tip', x: 'Santayana: “Ai không nhớ quá khứ bị kết án lặp lại nó.” Chu kỳ bùng nổ–sụp đổ từ 3/2000 giống 1920s (Internet thay cho điện khí).' }
    ] }
  ],
  summary: [
    'Chọn full-service (tư vấn, hoa hồng cao, xung đột lợi ích) hay online/discount (rẻ, tự quyết).',
    'Lệnh thị trường nhanh nhưng giá kém; limit giá tốt nhưng có thể không khớp; stop-loss cắt lỗ.',
    'Margin khuếch đại lãi lỗ, có margin call; tác giả khuyên tránh.',
    'ECN khớp lệnh điện tử rẻ và nhanh; thời điểm đặt lệnh tốt sau 10:00 sáng.',
    'Bài học 1929 và 1987: margin, định giá quá cao và hoảng loạn.'
  ],
  cards: [
    ['Full-service broker?', 'Môi giới dịch vụ đầy đủ: tư vấn, nghiên cứu, hoa hồng cao.'],
    ['Churning?', 'Môi giới thúc giao dịch liên tục để ăn hoa hồng; bất hợp pháp.'],
    ['Online broker?', 'Môi giới giao dịch qua mạng, hoa hồng thấp, không tư vấn.'],
    ['SOES?', 'Hệ thống đặt lệnh nhỏ điện tử Nasdaq lập sau sụp đổ 1987.'],
    ['Market order?', 'Lệnh mua/bán ngay ở giá thị trường: nhanh, giá không tốt nhất.'],
    ['Limit order?', 'Lệnh với giá bạn chọn: giá tốt, có thể không khớp.'],
    ['Day order vs GTC?', 'Hiệu lực trong ngày vs đến khi huỷ.'],
    ['Stop-loss order?', 'Lệnh tự bán khi giá chạm mức để cắt lỗ/bảo vệ lãi.'],
    ['Trailing stop?', 'Stop tăng theo giá khi cổ phiếu tăng.'],
    ['Stop limit?', 'Stop sau khi chạm thì thành lệnh limit.'],
    ['Margin?', 'Vay môi giới để mua thêm cổ phiếu.'],
    ['Margin call?', 'Yêu cầu nộp thêm tiền; nếu không môi giới bán cổ phiếu của bạn.'],
    ['ECN?', 'Mạng khớp lệnh mua bán điện tử.'],
    ['Đỉnh/đáy sụp đổ 1929?', 'Dow giảm 89% từ 381 xuống 41; 25 năm mới về 381.'],
    ['Giờ đặt lệnh nên tránh?', 'Nửa tiếng đầu, nửa tiếng cuối, nửa đêm.']
  ],
  quiz: [
    { q: 'Lệnh nào khớp nhanh nhất?', o: ['Limit', 'Market', 'Stop limit', 'GTC'], a: 1, e: 'Mua ở giá ask hiện tại.' },
    { q: 'Limit order mua $19 khi giá $20:', o: ['Khớp ngay', 'Chỉ khớp nếu giá chạm $19', 'Luôn bị huỷ', 'Bán ngay'], a: 1, e: 'Có thể không bao giờ khớp.' },
    { q: 'Mua $20, stop-loss $18 ⇒ lỗ tối đa xấp xỉ:', o: ['2%', '10%', '20%', '50%'], a: 1, e: '2/20.' },
    { q: 'Margin 2-1, nộp $2.000:', o: ['Mua $2.000', 'Mua tối đa $4.000, trả lãi vay', 'Mua $20.000', 'Không vay'], a: 1, e: 'Vay thêm $2.000.' },
    { q: 'Margin call xảy ra khi:', o: ['Giá tăng', 'Giá giảm nhiều và vốn dưới mức yêu cầu', 'Mở tài khoản', 'Đáo hạn'], a: 1, e: 'Môi giới đòi thêm tiền hoặc bán.' },
    { q: 'Sụp đổ tháng 10/1987 dẫn đến:', o: ['SEC', 'Nasdaq lập SOES', 'Chia tách cổ phiếu', 'Quỹ chỉ số'], a: 1, e: 'Đặt lệnh điện tử trực tiếp.' },
    { q: 'Churning là:', o: ['Gộp cổ phiếu', 'Môi giới thúc giao dịch quá nhiều để ăn hoa hồng', 'Bán khống', 'Margin'], a: 1, e: 'Bất hợp pháp.' },
    { q: 'Nguyên nhân góp phần sụp đổ 1929:', o: ['Margin cao (9-1) và định giá quá cao', 'Lãi suất âm', 'Quá nhiều quỹ chỉ số', 'ECN'], a: 0, e: 'Cùng nhiều yếu tố khác.' },
    { q: 'Thời điểm đặt lệnh tốt theo tác giả:', o: ['Phút đầu mở cửa', 'Sau 10:00 sáng giờ miền Đông', 'Nửa đêm', 'Phút cuối'], a: 1, e: 'Tránh biến động đầu/cuối phiên.' },
    { q: 'Tác giả nhìn margin thế nào?', o: ['Nên dùng tối đa', 'Nguy hiểm, nên tránh', 'Bắt buộc', 'An toàn'], a: 1, e: 'Dùng margin để đầu tư được là cờ bạc.' }
  ],
  match: [
    ['Market order', 'Nhanh, giá không tốt nhất'],
    ['Limit order', 'Giá tốt, có thể không khớp'],
    ['Stop-loss', 'Cắt lỗ tự động'],
    ['Margin call', 'Đòi nộp thêm tiền khi vay'],
    ['ECN', 'Khớp lệnh điện tử'],
    ['SOES', 'Đặt lệnh nhỏ điện tử Nasdaq'],
    ['1929', 'Dow giảm 89%']
  ]
});
