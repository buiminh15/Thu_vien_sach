// Understanding Stocks – Chương 9–10.
BOOK_DATA.stocks.chapters.push({
  n: 9,
  title: 'Phân tích cơ bản: nhập môn',
  intro: 'Hai cách chọn cổ phiếu: phân tích cơ bản (nghiên cứu doanh nghiệp) và phân tích kỹ thuật (nghiên cứu giá). Phân tích cơ bản giúp Buffett giàu có: bạn mua một phần doanh nghiệp, không phải mảnh giấy.',
  sections: [
    { icon: '🔍', title: 'Tổng quan', blocks: [
      { t: 'key', x: '<b>Phân tích cơ bản</b> nghiên cứu dữ liệu nền tảng của công ty: tài sản–nợ, lợi nhuận, ban quản lý, đối thủ, loại hình kinh doanh, nợ vay. Mục tiêu: mua cổ phiếu có <b>giá hợp lý so với lợi nhuận</b> (“fair value”). Là một trong những phương pháp phổ biến nhất; tác giả nhắc đây là nghệ thuật nhiều hơn khoa học và không bảo đảm lãi lớn. (Phân tích kỹ thuật thì nghiên cứu giá — ở chương 11–12.)' },
      { t: 'tip', x: 'Các quản lý thành công dùng phương pháp này: Peter Lynch, Robert Rodriguez, William Miller và Warren Buffett.' }
    ] },
    { icon: '🧱', title: 'Các bước trong phân tích cơ bản', blocks: [
      { t: 'steps', items: [
        '<b>Học mọi thứ về ngành</b>: suy thoái thì xem ngành chống suy thoái (thực phẩm, dầu, bán lẻ); khi kinh tế tốt xem công nghệ. Peter Lynch lấy ý tưởng từ nơi con ông mua sắm (The Gap, Starbucks…) — nhưng đó chỉ là manh mối, sau đó phải đọc báo cáo thường niên, gọi quan hệ nhà đầu tư, vào website công ty. Kinh doanh nên đơn giản, dễ hiểu, triển vọng dài hạn tốt.',
        '<b>Xác định công ty dẫn đầu</b>: mạnh và có lãi hơn đối thủ, thương hiệu nhận diện, quảng cáo nhiều, doanh thu–lợi nhuận vượt trội, ít hoặc không nợ. <i>Investor’s Business Daily</i> chấm relative strength 1–99 (> 90 là xuất sắc); <i>Value Line Investment Survey</i> ở thư viện có cả trang thông tin cô đọng.',
        '<b>Nói chuyện với ban quản lý</b>: cách nhiều quỹ làm; tìm quản lý kinh nghiệm, có tầm nhìn; tránh nợ nhiều, mất thị phần, kiện tụng. Nhà đầu tư cá nhân hiếm khi gặp CEO và CEO cũng không nói tiêu cực nên gây tranh cãi — một số chuyên gia ưa đọc bảng cân đối hơn.',
        '<b>Theo dõi người trong cuộc (insiders)</b>: theo SEC, cán bộ/giám đốc có thông tin độc quyền và người sở hữu > 10% là insider. Xem họ mua hay bán tại Yahoo! Finance, MarketWatch, Bloomberg, và cơ sở dữ liệu <b>EDGAR</b> của SEC. Hạn chế: có thể bán vì lý do cá nhân; báo cáo chậm tới 3 tháng (CEO Enron, WorldCom bán hàng triệu cổ phiếu mà công bố khi giá chỉ còn vài xu).'
      ] }
    ] },
    { icon: '📑', title: 'Bảng cân đối kế toán', blocks: [
      { t: 'key', x: '<b>Bảng cân đối</b> là danh sách mọi thứ công ty sở hữu và mọi thứ công ty nợ, ảnh chụp tình hình tài chính. Phương trình: <b>Vốn chủ sở hữu = Tài sản − Nợ phải trả</b>.' },
      { t: 'table', head: ['Nhóm', 'Ví dụ'], rows: [
        ['<b>Tài sản (Assets)</b>', 'Tiền mặt, khoản phải thu, hàng tồn kho, thuế hoãn lại, nhà xưởng–thiết bị, tài sản khác'],
        ['<b>Nợ phải trả (Liabilities)</b>', 'Khoản phải trả, chi phí tích luỹ, thuế phải nộp, phần nợ dài hạn đến hạn'],
        ['<b>Vốn chủ (Equity)</b>', 'Cổ phiếu phổ thông, lợi nhuận giữ lại']
      ] },
      { t: 'p', x: 'Ví dụ Bright Light 2002 (nghìn $): tổng tài sản 4.822; tổng nợ ngắn hạn 1.741; vốn chủ 3.081 (4.822 − 1.741). Cách đọc tốt: so với các công ty cùng ngành và với các năm trước. Tìm bảng cân đối ở cuối báo cáo thường niên, qua businessweek.com (SEC filings), EDGAR Online: báo cáo 10-Q (quý) và 10-K (năm).' },
      { t: 'warn', x: 'Đọc bảng cân đối cần kỹ năng vì công ty có thể giấu chi phí và nợ, thổi phồng lợi nhuận. Enron, WorldCom làm méo hình ảnh tài chính; Buffett nhắc: không đầu tư vào công ty nếu không hiểu họ kiếm tiền thế nào. <b>Nếu đọc xong vẫn rối, hãy đầu tư tiền ở nơi khác.</b>' }
    ] },
    { icon: '📘', title: 'Báo cáo thường niên', blocks: [
      { t: 'list', items: [
        'Báo cáo dài (≥ 30 trang) chứa bảng cân đối, báo cáo kết quả kinh doanh, thư của CEO về chiến lược; nhiều “PR fluff”. Chuyên gia chỉ đọc phần quan trọng.',
        'Công ty liệt kê rủi ro để tự bảo vệ; nhấn mạnh điều tích cực và giảm nhẹ tiêu cực. <b>Phần chú thích (footnotes)</b> thường chứa điều thú vị: rủi ro, kiện tụng, vấn đề bất ngờ.',
        'Nhà đầu tư dài hạn cần biết: công ty có đang kiếm tiền không, nợ đang tăng hay giảm, ban quản lý có kế hoạch kinh doanh thành công không.'
      ] }
    ] }
  ],
  summary: [
    'Phân tích cơ bản nghiên cứu công ty để tìm cổ phiếu giá hợp lý so với lợi nhuận.',
    'Các bước: ngành, công ty dẫn đầu, ban quản lý, insiders.',
    'Bảng cân đối: Tài sản = Nợ + Vốn chủ; so sánh với ngành và các năm trước.',
    'Báo cáo thường niên: chú ý chú thích và rủi ro; cẩn thận PR.',
    'Nếu không hiểu công ty kiếm tiền thế nào, đừng đầu tư.'
  ],
  cards: [
    ['Phân tích cơ bản là gì?', 'Nghiên cứu dữ liệu nền tảng của công ty để đánh giá cổ phiếu có đáng mua không.'],
    ['Phân tích kỹ thuật là gì?', 'Nghiên cứu giá và khối lượng cổ phiếu.'],
    ['Fair value?', 'Giá hợp lý so với lợi nhuận của công ty.'],
    ['Peter Lynch lấy ý tưởng ở đâu?', 'Nơi con ông mua sắm; sau đó vẫn phải phân tích cơ bản.'],
    ['Công ty dẫn đầu ngành có đặc điểm?', 'Doanh thu–lợi nhuận vượt trội, thương hiệu mạnh, ít nợ.'],
    ['Relative strength của IBD?', 'Điểm 1–99, > 90 là xuất sắc.'],
    ['Insider theo SEC?', 'Cán bộ, giám đốc và người sở hữu > 10% cổ phiếu.'],
    ['Hạn chế của theo dõi insider?', 'Lý do bán có thể cá nhân; báo cáo chậm tới 3 tháng.'],
    ['EDGAR?', 'Cơ sở dữ liệu hồ sơ SEC (Electronic Data Gathering Analysis and Retrieval).'],
    ['Bảng cân đối?', 'Danh sách tài sản, nợ và vốn chủ của công ty tại một thời điểm.'],
    ['Vốn chủ sở hữu?', 'Tài sản trừ nợ phải trả (net worth).'],
    ['10-Q và 10-K?', 'Báo cáo quý và báo cáo năm gửi SEC.'],
    ['Điều quan trọng trong báo cáo thường niên?', 'Phần chú thích: rủi ro, kiện tụng, vấn đề ẩn.'],
    ['Lời khuyên của Buffett về công ty?', 'Không đầu tư vào công ty mà bạn không hiểu họ kiếm tiền thế nào.']
  ],
  quiz: [
    { q: 'Phân tích cơ bản nghiên cứu:', o: ['Biểu đồ giá', 'Công ty (tài sản, lợi nhuận, quản lý…)', 'Tin đồn', 'Khối lượng'], a: 1, e: 'Kỹ thuật mới nghiên cứu giá.' },
    { q: 'Vốn chủ = ?', o: ['Tài sản + nợ', 'Tài sản − nợ', 'Doanh thu − chi phí', 'Cổ tức'], a: 1, e: 'Net worth.' },
    { q: 'Tài sản 4.822, nợ 1.741 ⇒ vốn chủ:', o: ['3.081', '6.563', '1.741', '4.822'], a: 0, e: '4.822 − 1.741.' },
    { q: 'Insider là người sở hữu hơn:', o: ['1%', '5%', '10%', '50%'], a: 2, e: 'Theo SEC, cùng cán bộ, giám đốc.' },
    { q: 'Hạn chế của theo dõi insider:', o: ['Không có dữ liệu', 'Báo cáo chậm tới 3 tháng và lý do bán không rõ', 'Bất hợp pháp', 'Luôn sai'], a: 1, e: 'Enron, WorldCom.' },
    { q: 'Ví dụ công ty dẫn đầu cần:', o: ['Nhiều nợ', 'Doanh thu, lợi nhuận vượt trội, ít nợ', 'Giá rẻ nhất', 'Không quảng cáo'], a: 1, e: 'Industry leader.' },
    { q: 'Phần nào của báo cáo thường niên thường thú vị?', o: ['Thư CEO', 'Chú thích (footnotes)', 'Trang bìa', 'Ảnh'], a: 1, e: 'Rủi ro, kiện tụng.' },
    { q: 'Nếu đọc bảng cân đối vẫn rối:', o: ['Mua ngay', 'Đầu tư vào nơi khác', 'Vay thêm', 'Gọi môi giới'], a: 1, e: 'Lời khuyên của tác giả/Buffett.' },
    { q: 'Báo cáo năm gửi SEC là:', o: ['10-Q', '10-K', '8-K', '1040'], a: 1, e: '10-Q là quý.' },
    { q: 'Tác giả nhận xét phân tích cơ bản:', o: ['Là khoa học chính xác', 'Nghệ thuật nhiều hơn khoa học', 'Vô dụng', 'Luôn kiếm tiền'], a: 1, e: 'Không bảo đảm.' }
  ],
  match: [
    ['EDGAR', 'Cơ sở dữ liệu hồ sơ SEC'],
    ['Insider', 'Cán bộ/giám đốc hoặc sở hữu > 10%'],
    ['Balance sheet', 'Tài sản, nợ và vốn chủ'],
    ['10-K', 'Báo cáo năm'],
    ['Value Line', 'Tổng hợp thông tin cổ phiếu ở thư viện'],
    ['Industry leader', 'Công ty mạnh nhất ngành'],
    ['Fair value', 'Giá hợp lý so với lợi nhuận']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 10,
  title: 'Phân tích cơ bản: công cụ và chiến thuật',
  intro: 'Báo cáo kết quả kinh doanh, EPS và trò chơi dự báo lợi nhuận, các hệ số P/E, PEG, P/S, ROE, hạn chế của phân tích cơ bản và chân dung Warren Buffett.',
  sections: [
    { icon: '🧾', title: 'Báo cáo kết quả kinh doanh và EPS', blocks: [
      { t: 'steps', items: [
        '<b>Doanh thu (top line)</b>: xem tăng so với năm trước không; nhà đầu tư tăng trưởng muốn tăng ≥ 15%/năm.',
        '<b>Chi phí hoạt động</b>: lương, quảng cáo, đào tạo, R&amp;D…',
        '<b>Lợi nhuận ròng (bottom line)</b> = sau trừ mọi chi phí và thuế. Ví dụ Florida Star 2002: doanh thu 7.147, chi phí 3.493, lợi nhuận trước thuế 3.654, ròng 3.576 (nghìn $).',
        '<b>EPS</b> = lợi nhuận sau thuế ÷ số cổ phiếu lưu hành; so sánh với quý/năm trước (công ty theo mùa nên so sánh năm cùng năm hữu ích hơn).'
      ] },
      { t: 'warn', x: 'Khó biết công ty thực kiếm bao nhiêu: một số CEO “nấu sổ sách”; khi bị buộc điều chỉnh lại lợi nhuận (WorldCom hàng tỷ đô) cổ phiếu sụp đổ. Cần biết <b>cách</b> công ty tạo ra tăng trưởng, đôi khi phải làm “thám tử cổ phiếu”.' },
      { t: 'p', x: '<b>Trò chơi dự báo lợi nhuận</b>: các nhà phân tích dự báo lợi nhuận tương lai; công ty vượt dự báo thường tăng giá, hụt dù một xu thường giảm; có khi vượt dự báo công khai nhưng không vượt “con số thì thầm” (whisper number). CEO chịu áp lực khủng khiếp phải vượt dự báo.' }
    ] },
    { icon: '📐', title: 'Các hệ số định giá', blocks: [
      { t: 'table', head: ['Hệ số', 'Công thức', 'Cách dùng / mốc'], rows: [
        ['<b>P/E</b>', 'Giá ÷ EPS', 'Trailing (lợi nhuận 12 tháng qua) vs forward (dự báo). Nhà đầu tư giá trị ưa P/E < 15 (Buffett: trailing ≤ 10); nhà đầu tư tăng trưởng chấp nhận P/E cao. P/E của S&amp;P 500 quanh 30+ là dấu hiệu quá đắt; trung bình lịch sử ~15'],
        ['<b>PEG</b>', 'P/E ÷ tăng trưởng lợi nhuận', '< 0,5 rẻ; 0,5–1 hợp lý; > 1 không khuyến nghị, > 2 đắt. Dựa trên dự báo nên không đáng tin tuyệt đối'],
        ['<b>P/S</b>', 'Vốn hoá ÷ doanh thu năm trước', 'Dùng khi không có lợi nhuận (“doanh thu khó giả hơn lợi nhuận”); > 5 là cao; giá trị ưa < 1. Enron P/S > 200 là cảnh báo'],
        ['<b>ROE</b>', 'Lợi nhuận ròng ÷ vốn chủ', 'Đo hiệu quả quản lý; tìm ROE > 15% và tăng']
      ] },
      { t: 'widget', name: 'stock-ratios', title: 'Tính P/E, PEG, P/S và ROE' },
      { t: 'tip', x: 'Ví dụ: cổ phiếu $20, EPS năm qua $2 ⇒ trailing P/E = 10; nếu dự báo EPS $4 ⇒ forward P/E = 5. P/E 20 và tăng trưởng 10% ⇒ PEG = 2. P/E 50 nhưng tăng 60%/năm có thể vẫn rẻ.' },
      { t: 'warn', x: 'Bài học Priceline: nhà phân tích Mary Meeker khuyên mua dù không có lợi nhuận, nói “các thước đo truyền thống không còn quan trọng”; vài tháng sau giá rơi từ hàng trăm đô xuống vài đô. <b>P/E có quan trọng.</b> Nhưng P/E thấp chưa chắc nên mua, cao chưa chắc nên tránh. Còn có ROI, nợ/vốn, P/B, ROA.' }
    ] },
    { icon: '⚠️', title: 'Hạn chế của phân tích cơ bản', blocks: [
      { t: 'list', items: [
        'Phụ thuộc thông tin công ty cung cấp: bị bóp méo (chi phí khai thành thu nhập, cho vay giám đốc ghi là thu nhập, CEO nói dối) thì vô dụng; cần kỹ năng kế toán.',
        'Dự đoán tương lai công ty khó chứng minh; không tính tâm lý đẩy giá (thập niên 1990 cơ bản cho thấy đắt nhưng giá vẫn lên mức vô lý).',
        'Rất tốn thời gian; quỹ chuyên nghiệp có đội ngũ phân tích, nhà đầu tư cá nhân phải dựa vào nghiên cứu thiên lệch từ Phố Wall hoặc tin truyền miệng trên Internet.'
      ] }
    ] },
    { icon: '🧓', title: 'Chân dung Warren Buffett', blocks: [
      { t: 'list', items: [
        'CEO Berkshire Hathaway ($70.000/cổ phiếu): bảo hiểm, xuất bản, sản xuất. Chịu ảnh hưởng của <b>Benjamin Graham</b> (<i>Security Analysis</i> 1934, <i>The Intelligent Investor</i>) và từng làm cho ông.',
        'Dùng giá trị sổ sách, P/E, tỷ suất cổ tức… để tính <b>giá trị hợp lý</b>; mua công ty giá thấp hơn giá trị và giữ cả đời.',
        'Tránh Internet vì không xác định được giá trị; chỉ mua công ty đơn giản, dễ hiểu để ước lượng lợi nhuận tương lai. Bị chê nhưng hậu quả cho thấy ông đúng. Cảnh báo sớm về kế toán quyền chọn cổ phiếu cho nhân viên.',
        'Phần khó nhất với nhà đầu tư là học cách <b>định giá doanh nghiệp</b>.'
      ] }
    ] }
  ],
  summary: [
    'Báo cáo kết quả kinh doanh cho doanh thu, chi phí, lợi nhuận ròng; EPS = lợi nhuận ÷ cổ phiếu.',
    'Dự báo lợi nhuận ảnh hưởng mạnh tới giá; coi chừng “nấu sổ sách” và whisper number.',
    'P/E, PEG, P/S, ROE là các công cụ định giá chính — không dùng đơn lẻ.',
    'Phân tích cơ bản phụ thuộc thông tin công ty, tốn thời gian, không bắt được tâm lý.',
    'Buffett: mua công ty đơn giản, hiểu được, dưới giá trị và giữ lâu.'
  ],
  cards: [
    ['EPS tính thế nào?', 'Lợi nhuận sau thuế ÷ số cổ phiếu lưu hành.'],
    ['Top line và bottom line?', 'Doanh thu và lợi nhuận ròng.'],
    ['Whisper number?', 'Dự báo lợi nhuận không chính thức, thường không công khai.'],
    ['P/E trailing vs forward?', 'Dùng lợi nhuận năm qua vs lợi nhuận dự báo.'],
    ['Mốc P/E của nhà đầu tư giá trị?', 'Dưới 15 (Buffett: trailing ≤ 10).'],
    ['PEG tính thế nào và mốc?', 'P/E ÷ tăng trưởng; < 0,5 rẻ, 0,5–1 hợp lý, > 1 đắt.'],
    ['P/S dùng khi nào?', 'Khi công ty chưa có lợi nhuận; > 5 cao, < 1 rẻ.'],
    ['ROE?', 'Lợi nhuận ròng ÷ vốn chủ; > 15% và tăng là tốt.'],
    ['Bài học Priceline?', 'P/E vẫn quan trọng; lập luận “không còn quan trọng” là cảnh báo.'],
    ['P/E trung bình lịch sử của S&P 500?', 'Khoảng 15; trên 30 là quá đắt.'],
    ['Hạn chế của phân tích cơ bản?', 'Phụ thuộc số liệu công ty, dự đoán khó, bỏ qua tâm lý, tốn thời gian.'],
    ['Graham là ai?', 'Tác giả Security Analysis và The Intelligent Investor; thầy của Buffett.'],
    ['Vì sao Buffett tránh cổ phiếu Internet?', 'Không xác định được giá trị; công ty ít/không lợi nhuận, P/E cực cao.']
  ],
  quiz: [
    { q: 'Cổ phiếu $20, EPS $2 ⇒ P/E:', o: ['5', '10', '20', '40'], a: 1, e: '20/2.' },
    { q: 'P/E 20, tăng trưởng 10% ⇒ PEG:', o: ['0,5', '1', '2', '10'], a: 2, e: '20/10.' },
    { q: 'PEG < 0,5 nghĩa là:', o: ['Đắt', 'Rẻ/undervalued', 'Không có lãi', 'Công ty phá sản'], a: 1, e: 'Mốc của sách.' },
    { q: 'P/S hữu ích khi:', o: ['Công ty có lãi cao', 'Công ty chưa có lợi nhuận', 'Cổ tức cao', 'Chia tách cổ phiếu'], a: 1, e: 'Doanh thu khó giả hơn lợi nhuận.' },
    { q: 'ROE tốt thường lớn hơn:', o: ['5%', '10%', '15%', '50%'], a: 2, e: 'Và tăng.' },
    { q: 'Công ty hụt dự báo dù một xu thường:', o: ['Tăng giá', 'Giảm giá', 'Không đổi', 'Chia cổ tức'], a: 1, e: 'Áp lực lên CEO.' },
    { q: 'Priceline cho thấy:', o: ['P/E không quan trọng', 'P/E có quan trọng', 'Nên mua cổ phiếu Internet', 'Dự báo luôn đúng'], a: 1, e: 'Giá rơi từ hàng trăm đô.' },
    { q: 'Hạn chế của phân tích cơ bản:', o: ['Quá đơn giản', 'Phụ thuộc số liệu công ty cung cấp', 'Không cần thời gian', 'Luôn đúng'], a: 1, e: 'Enron, WorldCom.' },
    { q: 'Buffett mua công ty:', o: ['Phức tạp công nghệ', 'Đơn giản, dễ hiểu, giá dưới giá trị', 'Penny stock', 'IPO'], a: 1, e: 'Giữ cả đời.' },
    { q: 'Enron P/S > 200 là:', o: ['Dấu hiệu rẻ', 'Cảnh báo cực đắt', 'Bình thường', 'Chưa biết'], a: 1, e: 'Mốc cao là > 5.' }
  ],
  match: [
    ['P/E', 'Giá ÷ EPS'],
    ['PEG', 'P/E ÷ tăng trưởng'],
    ['P/S', 'Vốn hoá ÷ doanh thu'],
    ['ROE', 'Lợi nhuận ròng ÷ vốn chủ'],
    ['Whisper number', 'Dự báo lợi nhuận không chính thức'],
    ['Graham', 'Thầy của Buffett'],
    ['Bottom line', 'Lợi nhuận ròng']
  ]
});
