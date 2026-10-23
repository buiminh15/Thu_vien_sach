window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 16,
  title: 'Hãy chuyển tài khoản của bạn!',
  intro: 'Nhân vật môi giới James Dubois tự trấn an "lỗi tại hệ thống", rồi bị CECAR giao nhiệm vụ tra cứu hồ sơ môi giới trên website NASD. Chương này đưa ra quy trình năm bước để kiểm tra môi giới, độ an toàn tài chính của công ty chứng khoán và chất lượng lời khuyên của họ.',
  sections: [
    { icon: '😓', title: '"Lỗi tại hệ thống"', blocks: [
      { t: 'p', x: 'Sau cuộc gọi với Linda ("bản cáo trạng lạm dụng" với kịch bản bán hàng, tiền thưởng, kỳ nghỉ Club Med), Dubois nhớ lại thời mới vào nghề: nhân viên phải cởi giày khi đến sở làm, giám đốc giấu giày cho đến khi đạt chỉ tiêu bán; bán cổ phiếu penny và quỹ tương hỗ thu phí trả trước cao. Bài học duy nhất: "bán hoặc chết".' },
      { t: 'tip', x: 'Cơ chế tâm lý: Dubois tự nhủ "It\'s the system" để xoa dịu cảm giác tội lỗi, rồi quay lại bán hàng như cũ cho đến khi Harris & Jones sa thải 10.000 người (doanh thu IPO giảm 81%). Điều này cho thấy hệ thống khuyến khích bán hàng tạo xung đột lợi ích có thật, nhưng nó không xóa trách nhiệm cá nhân.' },
      { t: 'p', x: 'Để tìm việc, ông lén đưa bài phát biểu "We Lied" của Tamara cho Dulles. Đổi lại Dulles giao một dự án tự do: kiểm tra ba vấn đề — hành động pháp lý chống môi giới, lịch sử lời khuyên, và độ an toàn tài chính của hãng — và cách nhà đầu tư tự tra cứu.' }
    ] },
    { icon: '🔎', title: 'Tra cứu hồ sơ môi giới', blocks: [
      { t: 'p', x: 'Dubois thử gõ chính tên mình vào cổng "Check Broker/Adviser Info" của NASD và nhận thư điện tử liệt kê một phần những vụ ông từng churn tài khoản, khuyên đầu tư không phù hợp. Ông an tâm vì ít nhà đầu tư biết đến trang này; một nghiên cứu GAO thập niên 1990 cho thấy ít nhất 10.000 môi giới có nhiều vi phạm.' },
      { t: 'warn', x: 'Dubois kết luận dữ liệu NASD "vô dụng" vì không có thang so sánh. Dulles giao cho nhóm CECAR xây thang so sánh: số vụ kiện/xử lý trên một triệu tài khoản. Hãy nhớ đây là tình huống hư cấu; thực tế bây giờ NASD đã trở thành FINRA và công cụ tra cứu là <b>BrokerCheck</b>.' },
      { t: 'steps', items: ['Bước 1: Xem công ty của bạn có thuộc 18 công ty bán lẻ lớn trong bảng không. Mức trung bình là <b>29,28 vụ trên một triệu tài khoản</b>; cao hơn nhiều là dấu hiệu xấu.', 'Bước 2: Nếu không có trong bảng, tra hồ sơ công ty trên trang NASD (chọn Firm, giao "Deliver Report" qua email hoặc thư).', 'Bước 3: Tra hồ sơ cá nhân môi giới (chọn Broker; "Disclosure Events: No/Maybe").', 'Bước 4: Nếu hồ sơ không tốt, cân nhắc chuyển tài khoản (sang môi giới khác trong cùng công ty hoặc công ty khác).', 'Bước 5: Dù làm việc với ai, <b>đừng giao toàn quyền quyết định</b> (discretion) cho môi giới; chỉ dùng họ để thực hiện lệnh theo chỉ thị rõ ràng và lấy lời khuyên từ nguồn độc lập.'] },
      { t: 'table', head: ['Công ty (1997–2001, theo bảng 16.1)', 'Vụ kiện/xử lý trên 1 triệu tài khoản'], rows: [['Prudential Securities', '69,50'], ['Ameritrade', '67,11'], ['U.S. Bancorp Piper Jaffray', '64,46'], ['E*Trade', '36,92'], ['Salomon Smith Barney', '30,71'], ['Charles Schwab', '16,53'], ['Merrill Lynch', '16,09'], ['Edward D. Jones', '8,09'], ['Credit Suisse First Boston', '4,96'], ['Fidelity Brokerage Services', '3,74'], ['Trung bình 18 công ty', '29,28']] },
      { t: 'widget', name: 'cp-broker-rate', title: 'Tính tỷ lệ vụ việc trên một triệu tài khoản của một công ty' },
      { t: 'warn', x: 'Số liệu là của 1997–2001 và thuộc về một thời điểm; nhiều công ty trong bảng đã sáp nhập, đổi tên hoặc không còn tồn tại. Dùng nó để hiểu <i>phương pháp</i> (chuẩn hóa theo số tài khoản), không phải để xếp hạng công ty ngày nay.' }
    ] },
    { icon: '🏛️', title: 'Công ty môi giới cũng có thể phá sản', blocks: [
      { t: 'p', x: 'Khi thị trường giảm, doanh thu hoa hồng giảm, phí bảo lãnh (đặc biệt IPO) cạn, danh mục tự doanh lỗ và bị kiện. Miễn là công ty còn đủ vốn thì tài khoản của bạn không ảnh hưởng; nhưng nếu vốn cạn, tài khoản có thể bị đóng băng đúng lúc thị trường đang giảm.' },
      { t: 'steps', items: ['Xem công ty trong danh sách 20 công ty môi giới lớn nhất theo tài sản (bảng 16.2), kèm xếp hạng an toàn Weiss.', 'Xếp hạng <b>C−, C, C+</b> là "cờ vàng": đang ổn nhưng dễ tổn thương nếu số vụ kiện tăng và thị trường giảm sâu hơn.', 'Xếp hạng <b>D+ trở xuống</b>: cân nhắc nghiêm túc chuyển sang công ty an toàn hơn.', 'Công ty không có trong danh sách: tra xếp hạng Weiss qua thư viện hoặc website.', 'Nếu chuyển, sách nêu các công ty có điểm cao nhất: A.G. Edwards (A−), Edward Jones (B+), Fidelity (B+).'] },
      { t: 'table', head: ['Thang Weiss', 'Ý nghĩa'], rows: [['A', 'Xuất sắc'], ['B', 'Tốt'], ['C', 'Khá (cờ vàng)'], ['D', 'Yếu'], ['E', 'Rất yếu']] },
      { t: 'widget', name: 'cp-weiss-grade', title: 'Xếp hạng an toàn công ty môi giới: hành động nên làm?' },
      { t: 'key', x: 'Lưu ý: ở Mỹ, SIPC bảo vệ tài sản của khách hàng trong trường hợp công ty môi giới phá sản (có giới hạn), nhưng sách nhấn mạnh rủi ro bị đóng băng tài khoản. Hãy kiểm tra bảo vệ ở nơi bạn đang sinh sống.' }
    ] },
    { icon: '🧯', title: 'Bảo vệ mình khỏi lời khuyên tồi', blocks: [
      { t: 'p', x: 'Tác giả nêu: năm 2002 có 50 công ty Phố Wall xếp hạng các cổ phiếu sau đó phá sản; <b>47 công ty</b> vẫn khuyến nghị mua hoặc nắm giữ đến ngày công ty nộp đơn Chương 11. Ngày nộp đơn, các nguồn công khai (Bloomberg, Yahoo!, Zacks, First Call) còn hiển thị: 6 khuyến nghị mua của Lehman, 8 khuyến nghị nắm giữ của Salomon Smith Barney, ít nhất 1 khuyến nghị mua từ nhiều hãng khác.' },
      { t: 'list', items: ['Kiểm tra xem công ty của bạn có từng khuyến nghị cổ phiếu phá sản.', 'Ưu tiên công ty không có quan hệ kinh doanh (bảo lãnh, tư vấn) với các công ty họ phân tích.', 'Theo sách, Salomon Smith Barney có hồ sơ lời khuyên tệ nhất (không cảnh báo bán 8 công ty phá sản 2002); Edward D. Jones là một trong số ít không khuyến nghị công ty sắp hỏng và chủ động cảnh báo khách; Fidelity và Edward Jones có điểm tổng hợp tốt nhất.'] },
      { t: 'tip', x: 'Điểm có thể mang theo ngày nay: (1) tra hồ sơ trước khi giao tiền; (2) chuẩn hóa số vụ theo quy mô; (3) kiểm tra sức khỏe tài chính của đơn vị giữ tài sản; (4) không giao toàn quyền; (5) hỏi xem lời khuyên có xung đột lợi ích không.' },
      { t: 'warn', x: 'Đây là đánh giá của tác giả dựa trên dữ liệu 2002; không dùng làm căn cứ chọn môi giới hiện nay.' }
    ] }
  ],
  summary: ['"Lỗi tại hệ thống" là cách môi giới tự trấn an, nhưng hệ thống bán hàng gây xung đột là thật.', 'Nhà đầu tư có thể tra hồ sơ môi giới/công ty; cần thang so sánh (số vụ/triệu tài khoản).', 'Đừng giao toàn quyền quản lý tài khoản cho môi giới.', 'Công ty môi giới cũng có thể suy yếu; kiểm tra xếp hạng an toàn.', 'Đa số công ty phân tích vẫn khuyến nghị mua/giữ cổ phiếu đến ngày phá sản.'],
  cards: [['Trung bình vụ việc trên 1 triệu tài khoản (18 công ty)?', '29,28'], ['Quyền "discretion" là gì?', 'Môi giới được tự quyết định mua bán trên tài khoản bạn'], ['Xếp hạng Weiss C−/C/C+ nghĩa là?', 'Cờ vàng: ổn nhưng dễ tổn thương'], ['D+ trở xuống?', 'Cân nhắc chuyển tài khoản'], ['Bao nhiêu công ty vẫn khuyến nghị mua/giữ đến ngày phá sản?', '47 trong 50'], ['"We Lied" là gì?', 'Bài phát biểu của Tamara tại Columbia'], ['Công cụ tra cứu ngày nay?', 'BrokerCheck (FINRA)'], ['Churn là gì?', 'Môi giới giao dịch quá mức để thu hoa hồng']],
  quiz: [
    { q: 'Công ty có 120 vụ trên 2 triệu tài khoản. Tỷ lệ trên 1 triệu tài khoản:', o: ['30', '60', '120', '240'], a: 1, e: '120/2.' },
    { q: 'Tỷ lệ trên cao hơn trung bình 29,28 nghĩa là:', o: ['Công ty tốt hơn trung bình', 'Dấu hiệu tiêu cực cần xem xét', 'Chắc chắn gian lận', 'Không có ý nghĩa'], a: 1, e: 'Theo sách.' },
    { q: 'Xếp hạng an toàn nào đáng chuyển tài khoản?', o: ['B+', 'C', 'D+ trở xuống', 'A−'], a: 2, e: 'C là cờ vàng; D+ trở xuống nên chuyển.' },
    { q: 'Lời khuyên về "discretion":', o: ['Giao toàn quyền cho môi giới', 'Không giao, chỉ dùng để thực hiện lệnh', 'Giao một phần', 'Giao nếu phí thấp'], a: 1, e: 'Giữ quyền quyết định.' },
    { q: '47 trong 50 công ty đã làm gì?', o: ['Cảnh báo bán', 'Hạ hạng sớm', 'Khuyến nghị mua/giữ đến ngày phá sản', 'Từ chối xếp hạng'], a: 2, e: 'Theo số liệu trong sách.' }
  ],
  match: [['NASD', 'Cơ quan tự quản ngành môi giới (nay là FINRA)'], ['Weiss rating', 'Xếp hạng an toàn A–E'], ['Discretion', 'Quyền tự quyết trên tài khoản'], ['Churning', 'Giao dịch quá mức để thu phí'], ['Cờ vàng', 'C−, C, C+']]
});
