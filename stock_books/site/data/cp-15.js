window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 15,
  title: 'Sự sụp đổ của các blue-chip',
  intro: 'Làn sóng giảm thứ hai không đến từ tin xấu hằng ngày mà từ việc tháp nợ tan rã. Dulles chỉ ra mức định giá vô lý, lỗ hổng quỹ hưu trí; rồi UCBS (công ty hư cấu) vỡ nợ, kéo theo thị trường thương phiếu, ngân hàng đầu tư, kiện tụng và "cơn bội thực hàng tồn kho".',
  sections: [
    { icon: '📏', title: 'Chữ viết đã hiện trên tường', blocks: [
      { t: 'p', x: 'Dulles nói với Johnston: dấu hiệu nằm ngay trong những thước đo quen thuộc. Cổ phiếu trong S&P 500 lịch sử bán ở khoảng <b>16,5 lần</b> lợi nhuận; lúc đó là khoảng <b>45 lần</b> lợi nhuận 12 tháng gần nhất. Muốn về giá trị hợp lý chỉ có hai đường: lợi nhuận tăng rất nhanh, hoặc chỉ số giảm.' },
      { t: 'widget', name: 'cp-pe-gap', title: 'P/E 45 so với 16,5: chỉ số phải giảm bao nhiêu nếu lợi nhuận không đổi?' },
      { t: 'warn', x: 'Phố Wall chuyển sang dùng lợi nhuận <i>dự phóng</i> (P/E 16,4) thay vì lợi nhuận đã thực hiện, dù dự phóng liên tục sai. Dulles gọi đó là "chơi bài solitaire gian lận". Hãy nhớ: P/E dự phóng chỉ tốt khi dự phóng đáng tin.' },
      { t: 'h3', x: 'Quỹ hưu trí doanh nghiệp: khoản thiếu hụt' },
      { t: 'table', head: ['Quỹ hưu trí của các công ty S&P 500 giảm thêm...', 'Thiếu hụt ước tính (đầu 2002)'], rows: [['5%', 'ít nhất 109 tỷ USD'], ['10%', 'khoảng 144 tỷ USD'], ['20% trở lên', 'có thể trên 200 tỷ USD']] },
      { t: 'list', items: ['Tài sản và lợi nhuận từng bị thổi phồng bởi thao túng kế toán, nay bị điều chỉnh theo chuẩn GAAP chặt hơn.', 'Lợi nhuận thực còn dựa vào mức vay tiêu dùng không thể tiếp tục.', 'Thị trường giảm làm giá trị cổ phần ở công ty con, liên doanh và quỹ hưu trí của nhân viên cũng giảm.'] }
    ] },
    { icon: '🏦', title: 'Ngân hàng thực sự khỏe đến đâu?', blocks: [
      { t: 'p', x: 'Dulles thấy ngân hàng khu vực và công ty bảo hiểm nhân thọ nhìn chung khá hơn vì đã trải qua khủng hoảng thập niên 1980–90 và tích lũy vốn. Nhưng ông cũng phát hiện bốn điểm yếu:' },
      { t: 'steps', items: ['Bảng cân đối mạnh vẫn không bảo vệ khỏi lỗ trong báo cáo kết quả kinh doanh.', 'Con số trung bình đánh lừa: nhiều ngân hàng, công ty bảo hiểm thiếu vốn.', 'Ngay cả nhóm mạnh hơn cũng có thể không chịu nổi một cuộc sụt giảm lớn (theo báo cáo của Tamara).', 'Các ngân hàng trung tâm tiền tệ (Morgan Chase, Citigroup) ở gần "tâm chấn": chịu tác động đầu tiên của bong bóng công nghệ, gian lận kế toán, vỡ nợ nước ngoài, phái sinh và phá sản.'] }
    ] },
    { icon: '🎲', title: 'Quân domino kế tiếp: UCBS', blocks: [
      { t: 'p', x: 'Một buổi sáng lạnh ở New York, tin đồn về một vụ phá sản lớn khiến Dow rơi 350 điểm, hồi còn âm 150 rồi đóng cửa giảm 427. Một nhà đầu tư ở Munich so sánh với "Thứ hai đen" 1987. Tác giả chỉ ra hai điểm khác: chưa có đợt bán tháo cực điểm ("capitulation"), và trái phiếu doanh nghiệp đang <i>giảm</i> chứ không tăng như 1987.' },
      { t: 'p', x: 'Nạn nhân là UCBS (United Communications and Business Systems, công ty hư cấu ở Nasdaq): nợ đến hạn quá nhiều, bán công ty con chậm lại, khách hàng cắt đơn hàng thiết bị; CFO hủy đợt phát hành trái phiếu/cổ phiếu khẩn cấp với lý do "điều kiện thị trường tạm thời không thuận lợi". Cổ phiếu đã giảm 75%, trái phiếu hạ xuống B.' },
      { t: 'tip', x: 'Cảnh mỉa mai: bộ phận cho vay của MetroBank cho UCBS vay 30 triệu USD "để cầm cự vài ngày", trong khi sáng đó bộ phận giao dịch của chính ngân hàng vừa bán 20 triệu trái phiếu dài hạn và 30 triệu thương phiếu 90 ngày của UCBS. Tay phải không biết tay trái làm gì.' },
      { t: 'h3', x: 'Mối nguy ẩn: công ty tài chính con' },
      { t: 'p', x: 'Năm 1970, Chrysler rơi vào khủng hoảng mà giới phân tích bất ngờ vì quên tính nợ của Chrysler Financial (hãng làm xe, còn công ty con cho vay mua xe). Lần này họ lặp lại sai lầm. Công ty tài chính của UCBS vay ngắn hạn, mỗi ngày phải vay <b>18 triệu USD (gần 1 triệu USD mỗi giờ)</b> chỉ để tồn tại.' },
      { t: 'widget', name: 'cp-rollover', title: 'Nợ ngắn hạn quay vòng mỗi ngày: nếu thị trường đóng cửa vài ngày thì thiếu bao nhiêu?' },
      { t: 'steps', items: ['Doanh thu giảm + tin đồn vỡ nợ → bị chặn khỏi thị trường tiền tệ ngắn hạn.', 'Chủ sở hữu thương phiếu (chính là các doanh nghiệp thiếu tiền) không tái tục.', 'Hạn mức tín dụng dự phòng của ngân hàng không kích hoạt được.', 'Công đoàn chặn cắt lương; cắt giảm nhân sự không tiết kiệm ngay vì tiền thôi việc trong hợp đồng mới.', 'CFO bay Concorde sang châu Âu, nhưng tin đồn qua email tới trước.', 'Cuộc họp ngân hàng–Quốc hội mong một vụ cứu trợ kiểu Chrysler chỉ kết thúc bằng cái nhún vai tập thể; UCBS nộp đơn phá sản.'] },
      { t: 'key', x: 'Hiệu ứng lan truyền: thị trường thương phiếu "chết" vì nếu UCBS vỡ nợ thì GMAC, Sears Acceptance, Ford Credit, Citigroup thì sao? Người mua nghi ngờ tất cả, kể cả người còn khỏe. Dow và Nasdaq đang hồi lại bị đánh thêm; blue-chip hay công nghệ đều bị bán.' }
    ] },
    { icon: '⚖️', title: 'Làn sóng kiện tụng', blocks: [
      { t: 'p', x: 'Harris & Jones (ngân hàng đầu tư hư cấu) cạn nghiệp vụ bảo lãnh, thua lỗ danh mục riêng và ngập trong kiện. Giám đốc nghiên cứu Walker giải thích: hãng giữ khuyến nghị "mua" UCBS đến tận ngày nộp đơn Chương 11, chưa hạ xuống ngoài vài cuộc trao đổi riêng với khách VIP.' },
      { t: 'list', items: ['Số khiếu nại trọng tài chống công ty môi giới tăng 113% từ 1990 đến 2002 (dữ liệu NASD trong sách).', 'Các quỹ hưu trí nhà nước, đặc biệt ở California, lỗ lớn vì Enron, Global Crossing, WorldCom, UCBS và đã mua cả trái phiếu do Harris tham gia.', 'Kiện công ty phá sản vô ích (quản lý tài sản bảo "đi chỗ khác"); kiện Arthur Andersen cũng vô ích; vậy là nhắm vào ngân hàng và môi giới — những người có "túi sâu".', 'Chi phí kiện tụng ăn vào lợi nhuận; cổ phiếu ngân hàng, môi giới giảm; nhà đầu tư lại bán tiếp.'] },
      { t: 'warn', x: 'Đây là câu chuyện hư cấu minh họa các rủi ro, không phải sự kiện có thật; hãy tách "nhân vật" khỏi "dữ liệu" như con số 113% ở trên.' }
    ] },
    { icon: '📦', title: 'Cơn bội thực hàng tồn kho', blocks: [
      { t: 'p', x: 'Walker từng tin vào "hạ cánh mềm" vì lãi suất thấp và hệ thống tồn kho vừa đủ (just-in-time). Ông mắc bốn sai lầm:' },
      { t: 'steps', items: ['Đánh giá thấp mức doanh số được thẻ tín dụng thổi phồng, và tốc độ xẹp khi tín dụng khan (ngành ô tô là ví dụ; các hãng Detroit từng nói "bình tĩnh" rồi sớm xin cứu trợ).', 'Đánh giá thấp độ mong manh của nguồn tài trợ tồn kho; khi khó vay, doanh nghiệp bán tháo tài sản và đẩy giá xuống.', 'Quên "tồn kho nôn ra": người tiêu dùng kẹt tiền bán lại ô tô, đồ gia dụng, nội thất, qua mạng lưới đồ cũ, chợ trời, garage sale và đấu giá trực tuyến.', 'Đánh giá thấp hàng tồn kho bị đổ từ nước ngoài.'] },
      { t: 'key', x: '<b>Nhu cầu tiền mặt phi thanh khoản (illiquid demand for money)</b>: hàng tồn tăng, doanh thu giảm dưới mức cần để trả nợ đến hạn. Nhu cầu này xuất hiện khi nền kinh tế co lại; không đáp ứng được thì chỉ còn phá sản hoặc chờ chính phủ cứu. Danh sách thương vong lan từ công nghệ, viễn thông sang nhà sản xuất khổng lồ, bán lẻ, môi giới, ngân hàng, bảo hiểm và cả HMO.' },
      { t: 'widget', name: 'cp-inventory', title: 'Doanh thu giảm, tồn kho tăng: dòng tiền còn lại bao nhiêu?' }
    ] }
  ],
  summary: ['P/E thực tế 45 lần so với mức lịch sử 16,5: chỉ số giảm hoặc lợi nhuận tăng.', 'Quỹ hưu trí doanh nghiệp có thể thiếu hụt 109–200+ tỷ USD khi cổ phiếu giảm tiếp.', 'Ngân hàng "khỏe trung bình" nhưng trung bình đánh lừa, các ngân hàng lớn gần tâm chấn.', 'UCBS: nợ ngắn hạn quay vòng hằng ngày; tin đồn đóng cửa nguồn vốn → vỡ nợ → thương phiếu chết.', 'Kiện tụng và tồn kho "nôn ra" làm khủng hoảng tiền mặt lan rộng.'],
  cards: [['P/E lịch sử trung bình của S&P 500?', '16,5 lần (lúc đó khoảng 45 lần)'], ['Vì sao P/E dự phóng gây nhầm lẫn?', 'Dự phóng liên tục sai'], ['Thiếu hụt quỹ hưu trí nếu giảm 10%?', '~144 tỷ USD'], ['Finance subsidiary là gì?', 'Công ty con cho vay hỗ trợ bán hàng (ví dụ Chrysler Financial)'], ['Mỗi ngày công ty tài chính UCBS cần vay?', '18 triệu USD'], ['Thương phiếu (commercial paper)?', 'Nợ ngắn hạn không bảo đảm doanh nghiệp phát hành'], ['"Tồn kho nôn ra"?', 'Hàng đã bán được người tiêu dùng bán lại'], ['Illiquid demand for money?', 'Thiếu tiền mặt trả nợ khi doanh thu giảm, tồn kho tăng'], ['Số khiếu nại trọng tài tăng 1990–2002?', '113%']],
  quiz: [
    { q: 'P/E 45 xuống 16,5 (lợi nhuận không đổi), chỉ số còn khoảng:', o: ['37%', '63%', '16%', '80%'], a: 0, e: '16,5/45 ≈ 0,367.' },
    { q: 'Công ty tài chính con cần vay 18 triệu USD mỗi ngày, 5 ngày liên tiếp là:', o: ['18 triệu', '54 triệu', '90 triệu', '180 triệu'], a: 2, e: '18 × 5.' },
    { q: 'Điều làm thị trường thương phiếu "chết" là:', o: ['Lãi suất bằng 0', 'Nghi ngờ lan sang mọi người phát hành', 'Thuế tăng', 'Dòng vốn đổ vào'], a: 1, e: 'Nếu UCBS vỡ nợ thì ai nữa?' },
    { q: 'Quỹ hưu trí giảm 20%+ có thể gây thiếu hụt:', o: ['Dưới 50 tỷ', 'Khoảng 109 tỷ', 'Khoảng 144 tỷ', 'Trên 200 tỷ'], a: 3, e: 'Theo ước tính của Dulles.' },
    { q: 'Sai lầm nào không thuộc bốn sai lầm về tồn kho của Walker?', o: ['Quên hàng tái bán', 'Đánh giá thấp hàng nhập từ nước ngoài', 'Cho rằng tồn kho luôn được tinh giản', 'Cho rằng lãi suất cao'], a: 3, e: 'Lãi suất thấp nhưng tiền vẫn chặt.' }
  ],
  match: [['UCBS', 'Công ty hư cấu vỡ nợ'], ['Chrysler Financial', 'Công ty con cho vay mua xe'], ['Thương phiếu', 'Nợ ngắn hạn không bảo đảm'], ['113%', 'Tăng khiếu nại trọng tài 1990–2002'], ['Hạ cánh mềm', 'Giả định lạc quan của Walker']]
});
