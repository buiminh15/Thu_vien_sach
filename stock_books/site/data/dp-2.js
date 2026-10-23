window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 2,
  title: 'Kiến thức cơ bản về tốc độ trang',
  intro: 'Trình duyệt tải và hiển thị nội dung thế nào, request – kết nối – dung lượng trang ảnh hưởng ra sao, đường tới hạn (critical rendering path), jank và các yếu tố môi trường.',
  sections: [
    { icon: '🌐', title: 'Trình duyệt hiển thị nội dung thế nào', blocks: [
      { t: 'p', x: 'Tối ưu ba thứ: <b>số lượng tài nguyên</b> (ảnh, font, HTML, CSS), <b>dung lượng</b> của chúng và <b>hiệu năng cảm nhận</b>. Steve Souders: 80–90% thời gian phản hồi người dùng nằm ở frontend.' },
      { t: 'steps', items: ['Trình duyệt gửi request. Lần đầu tới một tên miền mới phải <b>tra DNS</b> để tìm máy chủ (kết quả được nhớ một thời gian).', 'Máy chủ nhận request, tìm nội dung rồi gửi về (HTML, CSS, ảnh...).', 'Byte đầu tiên nhận về gọi là <b>TTFB</b> (time to first byte) — chỉ báo tốc độ xử lý backend.', 'Trình duyệt tải và dựng trang, cố song song hóa request; một số tài nguyên (JavaScript chặn) phải xử lý xong mới dựng tiếp.'] },
      { t: 'widget', name: 'dp-pipeline', title: 'Chu trình từ nhập URL đến hiển thị' }
    ] },
    { icon: '📶', title: 'Request, kết nối, dung lượng trang', blocks: [
      { t: 'p', x: 'Biểu đồ thác nước (waterfall) của WebPagetest: mỗi hàng là một request; request đầu (HTML) gồm DNS lookup; các request sau có thời gian kết nối, chờ byte đầu rồi tải. Càng nhiều và càng lớn thì càng lâu: giảm cả <b>số lượng</b> lẫn <b>kích thước</b> file ảnh, CSS, JS.' },
      { t: 'list', items: ['Gộp ảnh thành sprite để giảm số request; nén mọi ảnh; giảm số file CSS/JS và tải đúng thứ tự.', '<b>Kết nối khác request</b>: mỗi kết nối gồm DNS, kết nối ban đầu, có thể thêm đàm phán SSL với HTTPS — SSL tốn thêm thời gian vì trao đổi khóa và chứng chỉ.', 'Kết nối bền vững (persistent): giữ mở và tái dùng cho nhiều request. Trình duyệt hiện đại mở tối đa 6 kết nối song song (Chrome, Firefox, Opera 12) hoặc 8 (IE10).', 'Nhiều kết nối = nội dung rải trên quá nhiều miền (ví dụ nhiều script bên thứ ba) làm trình duyệt không tối ưu được.'] },
      { t: 'widget', name: 'dp-waterfall', title: 'Mô phỏng thác nước: số request × kết nối song song × RTT' },
      { t: 'h3', x: 'Dung lượng trang' },
      { t: 'p', x: 'Dùng YSlow (tab Components) để xem từng loại nội dung. Ví dụ trong sách: chỉ 6 ảnh nhưng nặng tới 722,6 KB; bật gzip làm HTML/JS/CSS nhỏ hơn. So với trung bình trên httparchive.org (HTTP Archive thu thập WebPagetest cho top 250.000 site Alexa). Không có quy tắc cứng, nhưng phải theo dõi theo thời gian để phát hiện thay đổi bất ngờ.' }
    ] },
    { icon: '🎞️', title: 'Hiệu năng cảm nhận và đường tới hạn', blocks: [
      { t: 'key', x: 'Cảm nhận tốc độ quan trọng hơn thời gian tải thực. Trang trống là trải nghiệm tệ: hãy tối ưu <b>critical rendering path</b>.' },
      { t: 'steps', items: ['HTML → ký tự → token (như body) → đối tượng → cây <b>DOM</b>.', 'Gặp stylesheet: trình duyệt dừng, tải file, dựng <b>CSSOM</b> tương tự.', 'Kết hợp DOM + CSSOM thành <b>render tree</b> (chỉ gồm thứ cần hiển thị; display:none bị loại) để tính kích thước và vị trí.', 'Vẽ render tree lên màn hình.'] },
      { t: 'p', x: 'CSS mặc định chặn render. Dùng media type/query để đánh dấu phần không chặn:' },
      { t: 'tip', x: 'link main.css — chặn render.<br>link print.css với media="print" — chỉ áp dụng khi in, không chặn render ban đầu.<br>link big-screens.css với media="(min-width: 61.5em)" — chỉ chặn khi màn hình rộng từ 61,5em trở lên.' },
      { t: 'list', items: ['JavaScript chặn dựng DOM trừ khi khai báo bất đồng bộ (async).', 'Chỉ số WebPagetest: <b>Start Render</b> (khi bắt đầu hiển thị) và <b>Speed Index</b> (thời điểm trung bình các phần nhìn thấy được hiển thị, tính bằng ms, phụ thuộc kích thước viewport) — nên chú ý nội dung "above the fold" hơn là thời điểm tải xong hoàn toàn.', '<b>Time to interactivity</b>: từ lúc vào trang tới khi nhấp link, tìm kiếm, phát video được. Cải thiện: tải bất đồng bộ, ưu tiên nội dung above the fold, tuân thủ cách tải CSS/JS, cache cho người dùng quay lại, bảo đảm hành động chính sẵn sàng sớm.'] },
      { t: 'widget', name: 'dp-crp', title: 'Đường tới hạn: chặn render hay không?' },
      { t: 'h3', x: 'Jank' },
      { t: 'p', x: 'Jank là hiện tượng giật khi cuộn khi tốc độ dựng tụt dưới <b>60 khung hình/giây</b>. Nguyên nhân: trình duyệt phải "paint" lại khi đổi thuộc tính hình ảnh (nền, màu, bo góc, đổ bóng) hoặc khi hiện/ẩn nội dung, carousel. Animation vị trí, tỉ lệ, xoay, độ mờ thường xử lý được trong 60 fps; số khác gây jank. Dùng Timeline của Chrome DevTools để ghi và tìm đoạn tụt khung hình rồi thử ẩn từng phần tử/màu/bóng/animation để tìm thủ phạm.' },
      { t: 'tip', x: 'Hãy kiểm thử trên nhiều địa điểm, thiết bị; xem trang có hoàn thành tác vụ chính nhanh không. Nếu người dùng nhìn trang trống lâu hoặc chờ vùng bấm được, hãy tối ưu thứ tự tải và kích thước request.' }
    ] },
    { icon: '🌍', title: 'Các yếu tố môi trường', blocks: [
      { t: 'list', items: ['<b>Địa lý</b>: ở xa máy chủ thì chậm hơn (người dùng ở Úc, máy chủ ở Mỹ). Dùng <b>CDN</b>: các bản sao dữ liệu đặt khắp thế giới.', '<b>Mạng</b>: người dùng có thể bị giới hạn băng thông/dung lượng; thiết bị và đường truyền của bạn thường tốt hơn thực tế. Mạng chậm nhân thêm thời gian cho mỗi request.', '<b>Trình duyệt</b>: mỗi trình duyệt xử lý khác nhau — trình duyệt không hỗ trợ JPEG progressive phải đợi tải xong mới hiện; số kết nối song song ít thì chậm hơn.'] },
      { t: 'widget', name: 'dp-env', title: 'Ảnh hưởng của địa lý và mạng lên thời gian tải' }
    ] }
  ],
  summary: ['Ba mục tiêu: ít tài nguyên, nhẹ, hiệu năng cảm nhận tốt.', 'TTFB đo tốc độ backend; waterfall cho thấy từng request.', 'Tối đa 6 (8 với IE10) kết nối song song; nhiều tên miền làm giảm tối ưu.', 'DOM + CSSOM → render tree → vẽ; CSS chặn render, JS chặn DOM (trừ async).', 'Theo dõi Start Render, Speed Index, time to interactivity.', 'Jank: tụt dưới 60 fps do paint tốn kém.', 'CDN giảm ảnh hưởng của khoảng cách địa lý.'],
  cards: [['TTFB là gì?', 'Thời gian tới byte đầu tiên nhận được; chỉ báo tốc độ backend'], ['DNS lookup làm gì?', 'Tìm máy chủ ứng với tên miền'], ['Kết nối song song tối đa?', '6 (Chrome, Firefox, Opera 12), 8 (IE10)'], ['Persistent connection?', 'Giữ kết nối mở và dùng lại cho nhiều request'], ['Critical rendering path?', 'HTML→DOM, CSS→CSSOM, hợp thành render tree, rồi vẽ'], ['Cách khiến CSS không chặn render?', 'Dùng media type/query (print, min-width...)'], ['Speed Index là gì?', 'Thời điểm trung bình các phần nhìn thấy được hiển thị (ms)'], ['Jank là gì?', 'Giật khi dựng dưới 60 khung hình/giây'], ['Animation nào thường mượt 60 fps?', 'Vị trí, tỉ lệ, xoay, độ mờ'], ['CDN để làm gì?', 'Phục vụ nội dung từ máy chủ gần người dùng'], ['Souders: bao nhiêu % thời gian ở frontend?', '80–90%']],
  quiz: [
    { q: 'Tài nguyên nào mặc định chặn render?', o: ['Ảnh', 'CSS', 'Font', 'Video'], a: 1, e: 'CSS là render-blocking.' },
    { q: 'media="print" làm CSS đó:', o: ['Chặn render', 'Không chặn render ban đầu', 'Bị bỏ qua mãi mãi', 'Tải sau cùng'], a: 1, e: 'Chỉ áp dụng khi in.' },
    { q: 'Ngưỡng khung hình để tránh jank:', o: ['15 fps', '30 fps', '60 fps', '120 fps'], a: 2, e: 'Dưới 60 fps gây giật.' },
    { q: 'Render tree KHÔNG chứa:', o: ['Phần tử hiện', 'Phần tử display:none', 'Văn bản', 'Ảnh'], a: 1, e: 'Chỉ chứa thứ cần hiển thị.' },
    { q: 'SSL negotiation làm:', o: ['Giảm thời gian tải', 'Thêm thời gian cho kết nối HTTPS', 'Nén ảnh', 'Cache file'], a: 1, e: 'Trao đổi khóa/chứng chỉ.' }
  ],
  match: [['TTFB', 'Byte đầu tiên nhận được'], ['DOM', 'Cây từ HTML'], ['CSSOM', 'Cây từ CSS'], ['Speed Index', 'Thời điểm trung bình hiển thị'], ['CDN', 'Máy chủ gần người dùng']]
});
