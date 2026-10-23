window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 6,
  title: 'Đo lường và cải tiến hiệu năng',
  intro: 'Benchmark định kỳ cho thấy hiện trạng và nguyên nhân thay đổi theo thời gian. Chương này giới thiệu công cụ trình duyệt (YSlow, Chrome DevTools), kiểm thử tổng hợp (WebPagetest), giám sát người dùng thật (RUM) và cách theo dõi thay đổi theo thời gian.',
  sections: [
    { icon: '🗓️', title: 'Tổng quan công cụ', blocks: [
      { t: 'table', head: ['Công cụ', 'Loại', 'Chỉ số', 'Khi nào'], rows: [['YSlow', 'Plug-in trình duyệt', 'Điểm tổng, khuyến nghị', 'Khi phát triển, rồi mỗi quý'], ['Chrome DevTools', 'Plug-in trình duyệt', 'Khuyến nghị, waterfall, fps', 'Khi phát triển, rồi mỗi quý'], ['WebPagetest', 'Kiểm thử tổng hợp', 'Điểm, khuyến nghị, waterfall, Speed Index', 'Mỗi thay đổi lớn hoặc thí nghiệm'], ['Catchpoint, Gomez, wpt-script', 'Kiểm thử tổng hợp (xu hướng)', 'Xu hướng theo thời gian', 'Hằng tháng'], ['Google Analytics, mPulse, Glimpse', 'Giám sát người dùng thật (RUM)', 'Thời gian tải trung vị theo nhóm khán giả', 'Hằng tuần']] },
      { t: 'widget', name: 'dp-tools', title: 'Nên dùng công cụ nào cho mục tiêu của bạn?' }
    ] },
    { icon: '🧰', title: 'Công cụ trình duyệt', blocks: [
      { t: 'h3', x: 'YSlow' },
      { t: 'p', x: 'Plug-in cho Firefox, Opera, Chrome, Safari, dòng lệnh và bookmarklet: xem kích thước từng loại tài nguyên và nhận khuyến nghị (ví dụ thêm header Expires — có thể bỏ qua với script bên thứ ba như Google Analytics vì không kiểm soát được cache). Cho điểm hiệu năng tổng thể; so sánh với PageSpeed Insights của Google. Chạy khi phát triển trang mới, khi thay đổi, hoặc mỗi 3 tháng.' },
      { t: 'tip', x: 'Khuyến nghị tự động không phải lúc nào cũng hợp: bạn hiểu site mình nhất. Hãy đọc hết nhưng đừng lo nếu có gợi ý không áp dụng được — hiệu năng web hiếm khi "một cỡ cho tất cả".' },
      { t: 'h3', x: 'Chrome DevTools' },
      { t: 'list', items: ['Web Page Performance Audit: gợi ý cơ bản (có chồng lấn với plug-in khác).', 'Tab <b>Network</b>: dòng thời gian request khi DevTools mở; xem đường tới hạn, tài nguyên chậm, độ trễ từng request, cookie; sắp xếp theo thời lượng/độ trễ, lọc theo loại.', 'Bật <b>FPS meter</b> (Rendering) để tìm vùng làm tụt khung hình khi cuộn (jank). Etsy tìm ra box-shadow quá nhiều gây jank khi cuộn; sửa xong tác động tích cực có ý nghĩa thống kê lên chỉ số tương tác.'] }
    ] },
    { icon: '🧪', title: 'Kiểm thử tổng hợp: WebPagetest', blocks: [
      { t: 'p', x: 'Giúp xem trang chạy thế nào ngoài trình duyệt và vị trí địa lý của bạn (chưa phản ánh trải nghiệm người dùng thật nhưng gần hơn). WebPagetest miễn phí, đa dạng trình duyệt và địa điểm.' },
      { t: 'list', items: ['Mặc định chạy một lượt "first view" và một lượt "repeat view" (có cache), kết nối cáp. Nên chọn <b>5 lần chạy</b>: WebPagetest lấy trung vị.', 'Kết quả lưu tới một năm; có thể tạo tài khoản; có thể tự dựng <b>private instance</b> để kiểm thử site dev và tự động hóa (wpt-script của Etsy).', 'Performance Review: điểm cho First Byte Time, Compress Images... kèm khuyến nghị và thời gian tiết kiệm.', 'Waterfall: tìm request lâu bất thường (có thể là lỗi tình cờ — nên xem trung vị — hoặc dấu hiệu file lớn/nội dung chặn). Mục tiêu: waterfall ngắn gọn.', 'Speed Index: càng nhỏ càng tốt (ví dụ Google 1228, Bing 1393). Khi so sánh hai lượt chạy có biểu đồ visual progress. Đo thêm TTFB, thời điểm visually complete, thời gian tải đầy đủ; so sánh nhiều trình duyệt/địa điểm; dùng filmstrip và video khi so sánh trước–sau.'] },
      { t: 'widget', name: 'dp-speedindex', title: 'Speed Index: hai trang cùng thời gian tải nhưng cảm nhận khác nhau' }
    ] },
    { icon: '👥', title: 'Giám sát người dùng thật (RUM)', blocks: [
      { t: 'p', x: 'RUM ghi lại lưu lượng thật để biết trang tải bao lâu với khách truy cập; khác với kiểm thử tổng hợp (các điểm dữ liệu đơn lẻ). Ví dụ công cụ: Google Analytics, mPulse, Glimpse. Chọn các trang chính (trang chủ, trang đích hàng đầu, luồng thanh toán...) rồi <b>phân đoạn</b> dữ liệu:' },
      { t: 'list', items: ['Vị trí địa lý (gần/xa datacenter, nơi khán giả chính sống).', 'Loại mạng (di động, WiFi...).', 'Thời gian tải trung vị <b>và phân vị thứ 95</b>.'] },
      { t: 'key', x: 'Phân vị 95 là 5% lượt xem chậm nhất — vẫn là phần đáng kể của người dùng; trong RUM nó phản ánh mạng chậm. Trung vị cho thấy mức chung; p95 bảo đảm đa số có trải nghiệm tốt. Google Analytics cho trung bình chứ không phải phân vị.' },
      { t: 'widget', name: 'dp-percentile', title: 'Trung vị và phân vị 95: tính từ dữ liệu của bạn' },
      { t: 'p', x: 'Phân tích khác biệt giữa các nhóm: trung vị và p95 chênh bao nhiêu? người dùng nước khác, trên di động ra sao? năm trang hàng đầu khác nhau thế nào? Tìm nguyên nhân và ưu tiên sửa.' }
    ] },
    { icon: '📈', title: 'Theo dõi thay đổi theo thời gian', blocks: [
      { t: 'p', x: 'Site già đi, nội dung thêm, thiết kế đổi; nhiều người cùng chạm vào site (thiết kế, dev, người đăng bài): trang chủ bỗng gấp đôi thời gian tải vì carousel mới? script marketing mới thêm vào mọi trang? bài blog tải ảnh to gấp 5 lần? Cũng có suy giảm từ từ (TTFB tăng, p95 chậm dần) khó phát hiện — nên so sánh quý với quý, tuần với tuần.' },
      { t: 'list', items: ['Kiểm tra định kỳ ảnh (sprite, định dạng, nén, kích thước đúng) và trọng lượng của 5 trang hàng đầu; nếu tăng nhiều thì tìm nguyên nhân hoặc bù ở chỗ khác trong ngân sách.', 'Ghi lại cả chỉ số lẫn <b>lý do</b> thay đổi (wiki nội bộ, dashboard/cảnh báo từ công cụ giám sát hoặc WebPagetest tự host). Ví dụ báo cáo quý 1/2014 của Etsy: trung vị và p95 tăng nhẹ, trang chủ tăng nhiều do một biến thể thí nghiệm chậm.', 'Theo dõi cả đối thủ để hiểu mức ưu tiên hiệu năng của họ và bảo vệ tầm quan trọng của hiệu năng trước lãnh đạo.', 'Tự động hóa thu thập; dựng dashboard có đường ngân sách/SLA; <b>cảnh báo tự động</b> khi hồi quy (kèm ngữ cảnh: trước và sau, thời điểm thay đổi, báo người phụ trách) và cả khi cải thiện — hãy ăn mừng và cảm ơn người làm.', 'Dùng A/B test để đo tác động của thay đổi (thẩm mỹ hay hiệu năng) lên chỉ số kinh doanh.'] }
    ] }
  ],
  summary: ['Benchmark định kỳ: plug-in (mỗi quý), WebPagetest (mỗi thay đổi lớn), xu hướng (hằng tháng), RUM (hằng tuần).', 'YSlow/DevTools cho khuyến nghị; DevTools Network và FPS meter tìm tắc nghẽn và jank.', 'WebPagetest: 5 lần chạy lấy trung vị, waterfall, Speed Index (nhỏ hơn là tốt).', 'RUM: phân đoạn theo địa lý, mạng; xem trung vị và p95.', 'Ghi lại lý do thay đổi, dùng dashboard + cảnh báo, theo dõi đối thủ, A/B test.'],
  cards: [['YSlow chạy khi nào?', 'Khi phát triển rồi mỗi quý'], ['WebPagetest nên chạy bao nhiêu lần?', '5 lần; lấy trung vị'], ['First view vs repeat view?', 'Lần đầu (chưa cache) vs lần lặp (có cache)'], ['Speed Index nhỏ hơn nghĩa là?', 'Nội dung nhìn thấy hiển thị nhanh hơn (tốt hơn)'], ['RUM là gì?', 'Giám sát người dùng thật (Google Analytics, mPulse, Glimpse)'], ['Vì sao xem p95?', 'Thể hiện 5% trải nghiệm chậm nhất, thường do mạng chậm'], ['Google Analytics cung cấp?', 'Trung bình, không phải phân vị'], ['Phân đoạn RUM theo?', 'Địa lý, loại mạng, trung vị và p95'], ['Private instance WebPagetest cho phép?', 'Kiểm thử site dev, tự động hóa'], ['Cảnh báo hồi quy nên có gì?', 'So sánh trước/sau, thời điểm thay đổi, báo người phụ trách']],
  quiz: [
    { q: 'Công cụ nào thuộc nhóm RUM?', o: ['YSlow', 'WebPagetest', 'Google Analytics', 'Chrome DevTools'], a: 2, e: 'Giám sát người dùng thật.' },
    { q: 'Speed Index 1228 so với 1393: trang nào cảm nhận nhanh hơn?', o: ['1393', '1228', 'Như nhau', 'Không so sánh được'], a: 1, e: 'Nhỏ hơn là tốt hơn.' },
    { q: 'Phân vị 95 là:', o: ['Trung bình', '5% lượt xem chậm nhất trở lên', 'Lượt nhanh nhất', 'Trung vị'], a: 1, e: 'Ranh giới của 5% chậm nhất.' },
    { q: 'Công cụ tìm vùng gây jank khi cuộn:', o: ['FPS meter của DevTools', 'Smush.it', 'ImageOptim', 'CSSMinifier'], a: 0, e: 'FPS meter.' },
    { q: 'Số lần chạy WebPagetest khuyến nghị:', o: ['1', '3', '5', '50'], a: 2, e: 'Lấy trung vị của 5 lần.' }
  ],
  match: [['YSlow', 'Điểm + khuyến nghị'], ['WebPagetest', 'Waterfall, Speed Index'], ['RUM', 'Người dùng thật'], ['p95', '5% chậm nhất'], ['FPS meter', 'Phát hiện jank']]
});
