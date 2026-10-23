window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 1,
  title: 'Hiệu năng chính là trải nghiệm người dùng',
  intro: 'Tốc độ trang không phải chuyện kỹ thuật phụ: nó quyết định người dùng có tin, quay lại và nhớ thương hiệu của bạn hay không. Chương này cho thấy số liệu, đặc thù di động và vì sao nhà thiết kế là người tác động lớn nhất.',
  sections: [
    { icon: '⏱️', title: 'Chuẩn mực tốc độ', blocks: [
      { t: 'key', x: 'Người dùng mong trang tải trong <b>2 giây</b>; sau <b>3 giây</b> có tới 40% bỏ đi. 85% người dùng di động mong site chạy nhanh bằng hoặc hơn trên máy tính.' },
      { t: 'p', x: 'Hiệu năng web <b>là</b> trải nghiệm người dùng, cần được cân nhắc ngang với thẩm mỹ (bố cục, thứ bậc, dễ dùng). Người dùng càng ít thời gian thì kỳ vọng tốc độ càng cao.' },
      { t: 'table', head: ['Độ trễ phản hồi', 'Cảm nhận của người dùng'], rows: [['< 100 ms', 'Tức thì'], ['100–300 ms', 'Nhận thấy được'], ['300–1000 ms', 'Cảm giác "máy đang làm việc"'], ['> 1000 ms', 'Bắt đầu chuyển sự chú ý sang việc khác']] },
      { t: 'widget', name: 'dp-latency', title: 'Độ trễ bao nhiêu thì người dùng cảm nhận thế nào?' }
    ] },
    { icon: '🏷️', title: 'Ảnh hưởng tới thương hiệu', blocks: [
      { t: 'list', items: [
        'Akamai: 75% người mua online gặp sự cố (treo, tải lâu, thanh toán rối) sẽ không mua ở site đó.',
        'Gomez: 88% người dùng ít quay lại sau trải nghiệm tồi; giờ cao điểm hơn 75% bỏ sang đối thủ thay vì chờ.',
        'Google: chậm thêm 400 ms làm số lượt tìm kiếm giảm 0,44% (3 tuần đầu) rồi 0,76% (3 tuần sau) — và hậu quả kéo dài cả khi site đã nhanh lại.',
        'Tốc độ là một yếu tố xếp hạng của Google (dù nội dung liên quan quan trọng hơn). Microsoft: thứ hạng là yếu tố chính giúp người dùng nhớ một kết quả tìm kiếm.'
      ] },
      { t: 'tip', x: 'Naomi Atkinson: các agency nên đưa "sẽ làm site nhanh thế nào" vào bài chào hàng cùng ý tưởng hình ảnh và marketing.' }
    ] },
    { icon: '📱', title: 'Người dùng di động', blocks: [
      { t: 'p', x: 'Lưu lượng di động tăng đều: Groupon 45% giao dịch từ di động (đầu 2013, từ dưới 15% hai năm trước); Etsy 50% (đầu 2014). Khoảng 50% người dùng Internet ở châu Phi và châu Á chỉ dùng di động (Mỹ: 25%).' },
      { t: 'h3', x: 'Mạng di động' },
      { t: 'list', items: [
        'Trước khi gửi/nhận dữ liệu, thiết bị phải thiết lập <b>kênh vô tuyến</b> với mạng: có thể mất vài giây trên 3G (1000–2000 ms); kênh nhàn rỗi quá lâu bị đóng và phải làm lại.',
        'Chu kỳ đi–về (RTT): máy tính Mỹ dùng WiFi trung bình <b>50 ms</b>; mạng di động có thể <b>trên 300 ms</b> — chậm như quay số điện thoại.',
        'Ilya Grigorik: ngày nay <b>độ trễ (latency)</b>, chứ không phải băng thông, mới là yếu tố nghẽn.'
      ] },
      { t: 'table', head: ['Khái niệm', 'Nghĩa', 'Ví dụ'], rows: [['Latency (độ trễ)', 'Thời gian một gói dữ liệu đi từ điểm này tới điểm kia (ms); bị giới hạn bởi vật lý (tốc độ ánh sáng)', 'Taxi và xe buýt cùng tuyến có cùng độ trễ'], ['Bandwidth (băng thông)', 'Thông lượng tối đa của đường truyền', 'Xe buýt chở được nhiều người hơn taxi']] },
      { t: 'widget', name: 'dp-rtt', title: 'Tính thời gian tải theo số request và loại mạng' },
      { t: 'p', x: 'Ví dụ thực tế: Etsy thêm 160 KB ảnh ẩn → tỉ lệ thoát trên di động tăng 12%. DoubleClick bỏ một redirect phía client → CTR di động tăng 12%.' },
      { t: 'h3', x: 'Thói quen dùng và phần cứng' },
      { t: 'list', items: [
        'Điện thoại: dùng khi đang di chuyển và ở nhà, theo từng đợt ngắn, khi cần thông tin ngay; thường là điểm bắt đầu để tìm kiếm, duyệt, mua sắm, mạng xã hội. Máy tính để bàn: tác vụ nghiêm túc/nghiên cứu.',
        'WiFi trên điện thoại chậm hơn: ăng-ten ngắn, công suất thấp để tiết kiệm pin, nhiều máy dùng chuẩn cũ (không phải 802.11ac).',
        'Tối ưu tốc độ cũng tiết kiệm pin: đổi toàn bộ ảnh sang JPEG chất lượng 92% có thể giảm 20% năng lượng tải trang chủ Amazon, 30% với Facebook (trên Android). Tới 35% thời gian trên đường tới hạn dành cho tính toán (phân tích HTML, chạy JavaScript).'
      ] }
    ] },
    { icon: '🎨', title: 'Tác động của nhà thiết kế', blocks: [
      { t: 'p', x: 'Quyết định thiết kế ở giai đoạn đầu là thứ dẫn dắt phần còn lại của site, nên ảnh hưởng lớn tới thời gian tải:' },
      { t: 'table', head: ['Quyết định thiết kế', 'Ảnh hưởng hiệu năng'], rows: [['Màu và gradient', 'Định dạng ảnh, nhu cầu trong suốt, số sprite, mức dùng CSS3'], ['Bố cục', 'Cấu trúc HTML, tên class/ID, khả năng tái sử dụng mẫu thiết kế, tổ chức CSS'], ['Kiểu chữ', 'Số lượng và độ nặng của file font'], ['Mẫu thiết kế (pattern)', 'Cái gì tái dùng và cache được, khi nào tải tài nguyên, dễ chỉnh sửa về sau']] },
      { t: 'p', x: 'Ví dụ logo nền trong suốt đặt trên div xanh nhạt: các lựa chọn xuất file cho kích thước rất khác nhau:' },
      { t: 'table', head: ['Cách xuất', 'Dung lượng'], rows: [['PNG-24 trong suốt (gốc)', '7,6 KB'], ['PNG-8 nền đặc', '5,0 KB'], ['PNG-8 với matte xanh nhạt', '2,7 KB'], ['JPEG 75% nền đặc', '20,2 KB']] },
      { t: 'widget', name: 'dp-logo', title: 'Chọn định dạng cho logo: so sánh dung lượng' },
      { t: 'tip', x: 'Tác giả từng giảm một nửa thời gian tải chỉ bằng cách dọn CSS, tối ưu ảnh, chuẩn hóa màu và sắp xếp lại tài sản trong template — không cần thiết kế lại. Hiệu năng là trách nhiệm chung của mọi người quyết định diện mạo site.' }
    ] }
  ],
  summary: ['Chuẩn mực: tải trong 2 giây; sau 3 giây tới 40% người dùng rời đi.', 'Chậm làm hỏng niềm tin, giảm quay lại và tụt thứ hạng tìm kiếm.', 'Trên di động độ trễ (RTT trên 300 ms, kênh vô tuyến 1–2 s) là điểm nghẽn, không phải băng thông.', 'Tối ưu tốc độ cũng tiết kiệm pin.', 'Quyết định của nhà thiết kế (màu, bố cục, font, pattern) định hình hiệu năng ngay từ đầu.'],
  cards: [['Chuẩn mong đợi về thời gian tải?', '2 giây; sau 3 giây tới 40% rời đi'], ['Độ trễ dưới ngưỡng nào thấy "tức thì"?', 'Dưới 100 ms'], ['Trên 1000 ms thì?', 'Người dùng bắt đầu chuyển sự chú ý sang việc khác'], ['Latency vs bandwidth?', 'Độ trễ (thời gian đi–về) vs thông lượng tối đa'], ['RTT WiFi máy tính vs di động?', '~50 ms vs trên 300 ms'], ['Thiết lập kênh vô tuyến 3G tốn?', '1–2 giây (có thể vài giây)'], ['Etsy thêm 160 KB ảnh ẩn thì sao?', 'Tỉ lệ thoát di động +12%'], ['Google làm chậm 400 ms thì?', 'Giảm 0,44% rồi 0,76% lượt tìm kiếm'], ['Ảnh JPEG 92% tiết kiệm?', '20% (Amazon) – 30% (Facebook) năng lượng tải trang'], ['Quyết định thiết kế nào tác động font?', 'Kiểu chữ → số lượng và độ nặng file font']],
  quiz: [
    { q: 'Sau bao lâu thì tới 40% người dùng bỏ đi?', o: ['1 giây', '3 giây', '10 giây', '30 giây'], a: 1, e: 'Mong đợi 2 giây; sau 3 giây bỏ đi tới 40%.' },
    { q: 'Yếu tố nghẽn chính trên mạng di động là:', o: ['Băng thông', 'Độ trễ', 'Màu sắc', 'Số font'], a: 1, e: 'Latency, không phải bandwidth.' },
    { q: 'Độ trễ nào bắt đầu làm người dùng chuyển sự chú ý sang việc khác?', o: ['50 ms', '200 ms', '500 ms', 'Trên 1000 ms'], a: 3, e: 'Trên 1 giây.' },
    { q: 'Logo trong suốt xuất cách nào nhỏ nhất (ví dụ sách)?', o: ['PNG-24', 'PNG-8 nền đặc', 'PNG-8 với matte', 'JPEG 75%'], a: 2, e: '2,7 KB.' },
    { q: 'Quyết định nào của nhà thiết kế ảnh hưởng trực tiếp tới số file font?', o: ['Màu', 'Bố cục', 'Kiểu chữ', 'Mẫu thiết kế'], a: 2, e: 'Typography.' }
  ],
  match: [['Latency', 'Thời gian một gói đi từ A tới B'], ['Bandwidth', 'Thông lượng tối đa'], ['Dưới 100 ms', 'Cảm giác tức thì'], ['RTT di động', 'Trên 300 ms'], ['Màu và gradient', 'Định dạng ảnh, sprite, CSS3']]
});
