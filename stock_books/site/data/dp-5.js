window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 5,
  title: 'Responsive web design và hiệu năng',
  intro: 'Responsive không mặc định chậm — nhưng rất dễ gửi thừa byte cho màn hình nhỏ. Chương này dạy phục vụ đúng kích thước ảnh (RESS, media query, picture/srcset/sizes), tải font có chọn lọc, đặt ngân sách hiệu năng theo breakpoint, mobile-first và cách đo.',
  sections: [
    { icon: '📐', title: 'Vấn đề của responsive', blocks: [
      { t: 'p', x: 'Thêm media query và markup cho màn hình nhỏ rất dễ khiến thiết bị di động nhận cùng (hoặc nhiều hơn) trọng lượng trang như máy tính. Guy Podjarny: đa số site responsive gửi khoảng cùng dung lượng cho màn hình nhỏ và lớn (72% site). Cần thêm một bước vào quy trình: chỉ gửi nội dung cần thiết về dung lượng và số request, không chỉ về kiến trúc thông tin.' }
    ] },
    { icon: '🖼️', title: 'Ảnh: phục vụ đúng kích thước', blocks: [
      { t: 'p', x: 'Ảnh nên được phục vụ ở kích thước đúng như lúc hiển thị. Dùng Chrome DevTools để so kích thước hiển thị với kích thước "natural" (ví dụ logo Google lớn hơn kích thước hiển thị — có thể là bản retina gấp đôi pixel, khiến người dùng màn hình thường tải byte thừa).' },
      { t: 'h3', x: 'RESS (responsive + thành phần phía server)' },
      { t: 'p', x: 'Server chọn tài sản dựa trên chuỗi user agent (ước đoán kích thước màn hình, cảm ứng...). Công cụ như Adaptive Images tự tạo, cache và gửi ảnh đúng kích thước theo breakpoint. Nhược điểm: không phản ứng với thay đổi phía client (xoay thiết bị từ dọc sang ngang) — nên media query và picture thường tốt hơn.' },
      { t: 'h3', x: 'Media query: cẩn thận những gì trình duyệt tải' },
      { t: 'warn', x: 'display:none KHÔNG ngăn tải ảnh: cả &lt;img&gt; trong phần tử bị ẩn lẫn phần tử có background-image bị ẩn vẫn bị tải.' },
      { t: 'list', items: ['Ẩn phần tử <b>cha</b> của phần tử có background-image: trình duyệt không tải ảnh.', 'Dùng media query khác nhau cho từng nền: min-width 601px dùng big.jpg, max-width 600px dùng small.jpg — trình duyệt chỉ tải ảnh khớp (nếu media query chồng lấn, trình duyệt cũ tải cả hai).', 'Retina bằng CSS: mặc định nền regular.png; media query device-pixel-ratio 1.5 (kèm tiền tố -webkit-min-, -moz-, -o- 3/2) đổi sang retina.png. Android 2.x có ratio ≥ 1.5 sẽ tải cả hai, nhưng hiếm gặp.'] },
      { t: 'widget', name: 'dp-bgimg', title: 'Thí nghiệm: cách ẩn ảnh nào làm trình duyệt vẫn tải?' },
      { t: 'h3', x: 'Phần tử picture, srcset, sizes' },
      { t: 'p', x: 'Lựa chọn tốt nhất cho trình duyệt hiện đại (Chrome 38, Firefox 33, Opera 25; polyfill: Picturefill). Nguồn khớp đầu tiên (từ trên xuống) được chọn; thẻ img là phương án dự phòng. Các ảnh trong cùng một picture nên mô tả được bằng cùng thuộc tính alt.' },
      { t: 'tip', x: '&lt;picture&gt;<br>&nbsp;&lt;source media="(min-width: 800px)" srcset="big.png 1x, big-hd.png 2x"&gt;<br>&nbsp;&lt;source media="(min-width: 600px)" srcset="medium.png 1x, medium-hd.png 2x"&gt;<br>&nbsp;&lt;img src="small.png" srcset="small-hd.png 2x" alt="Description"&gt;<br>&lt;/picture&gt;' },
      { t: 'list', items: ['<b>srcset</b> với 1x/2x: chọn theo mật độ điểm ảnh.', '<b>type</b>: &lt;source type="image/svg+xml" srcset="pic.svg"&gt; — trình duyệt hiểu SVG tải SVG, còn lại tải PNG dự phòng.', '<b>sizes</b> cho thiết kế linh hoạt: sizes="(min-width: 1000px) 33.3vw, 100vw" cho biết ảnh chiếm bao nhiêu % viewport; kết hợp srcset "small.jpg 400w, medium.jpg 800w, big.jpg 1600w" để trình duyệt tự chọn ảnh phù hợp — dùng được ngay cả không có phần tử picture. Thuận tiện với CMS: người dùng chỉ upload một bản, CMS sinh các nguồn.', 'Cho phép cắt ảnh khác nhau ở từng kích thước, ảnh tối ưu retina, để trình duyệt chọn.'] },
      { t: 'widget', name: 'dp-srcset', title: 'Trình duyệt chọn ảnh nào từ srcset + sizes?' }
    ] },
    { icon: '🔤', title: 'Font trong responsive', blocks: [
      { t: 'p', x: 'Font thêm request và trọng lượng. Etsy chỉ tải font tùy chỉnh trên màn hình lớn: đặt font dự phòng cho nội dung (Georgia, serif), rồi trong @media (min-width: 1000px) mới áp font-family "FontName", Georgia, serif. Mọi trình duyệt (trừ IE8 trở xuống) chỉ tải file font nếu nó được áp dụng; IE8 trở xuống tải mọi @font-face được tham chiếu trong CSS.' }
    ] },
    { icon: '🗂️', title: 'Cách tiếp cận', blocks: [
      { t: 'h3', x: 'Đưa hiệu năng vào tài liệu dự án' },
      { t: 'p', x: 'Benchmark và theo dõi các chỉ số chuẩn: tổng thời gian tải, tổng trọng lượng, Speed Index — và đặt mục tiêu theo thiết bị/media query, không chỉ trung bình toàn trang. Dùng <b>performance budget</b> để cân nhắc đánh đổi (ví dụ dùng ảnh lớn ở breakpoint nào đó thì bỏ bớt độ đậm font để bù).' },
      { t: 'table', head: ['Chỉ số', 'Mục tiêu', 'Ghi chú'], rows: [['Tổng thời gian tải', '2 giây', 'Mọi breakpoint'], ['Tổng trọng lượng trang', '500 KB', 'min-width: 900 px'], ['Tổng trọng lượng trang', '300 KB', 'max-width: 640 px'], ['Speed Index', '1.000', 'Mọi breakpoint']] },
      { t: 'widget', name: 'dp-budget', title: 'Ngân sách hiệu năng theo breakpoint: kiểm tra trang của bạn' },
      { t: 'h3', x: 'Mobile first' },
      { t: 'list', items: ['Buộc đặt câu hỏi sớm ("mục đích cốt lõi của trang là gì?"), xác định chức năng/nội dung quan trọng nhất, thiết lập pattern và cách chúng thay đổi theo màn hình, nghĩ về khả năng truy cập (kết nối chậm, máy yếu).', 'Tránh tâm lý "ép ván vuông vào lỗ tròn" khi thu nhỏ trải nghiệm desktop; nâng cấp dần (progressive enhancement) khi màn hình lớn lên và đo ảnh hưởng hiệu năng.', 'Trải nghiệm di động không phải bản "thiếu thốn" mà là trải nghiệm có chủ đích; content parity không có nghĩa trải nghiệm giống hệt nhau.', 'Sắp CSS cho màn hình nhỏ trước, gửi tài sản đúng kích thước, không jank khi cuộn, tương tác sớm nhất có thể.'] },
      { t: 'h3', x: 'Đo mọi thứ' },
      { t: 'p', x: 'Bảo đảm chỉ nội dung phù hợp được tải ở mỗi breakpoint. Tự động hóa: test đo tổng trọng lượng từng breakpoint (Tom Barker, "High Performance Responsive Design", dùng Phantom JS đo YSlow score và trọng lượng). Thủ công: giả lập thiết bị trong Chrome DevTools (tắt cache), xem tab Network — ví dụ Nexus 10 chỉ tải big.png (7,3 KB), Nexus 4 chỉ tải small.png (2,9 KB). Đo thời gian tải và Speed Index từng breakpoint bằng WebPagetest (chọn trình duyệt di động như iPhone 4, Nexus 5 ở địa điểm Dulles, và tốc độ kết nối giả lập qua traffic shaping).' }
    ] }
  ],
  summary: ['Responsive dễ gửi thừa byte: 72% site gửi cùng dung lượng cho mọi màn hình.', 'Phục vụ ảnh đúng kích thước hiển thị; RESS không phản ứng với xoay màn hình.', 'display:none không ngăn tải ảnh; ẩn phần tử cha hoặc dùng media query cho nền.', 'picture + srcset + sizes cho trình duyệt tự chọn ảnh tốt nhất.', 'Chỉ tải font ở màn hình lớn.', 'Đặt ngân sách hiệu năng theo breakpoint, mobile-first, đo từng breakpoint.'],
  cards: [['RESS là gì?', 'Responsive web design kèm thành phần phía server (chọn ảnh theo user agent)'], ['Nhược điểm của RESS?', 'Không biết khi client đổi (xoay thiết bị)'], ['display:none có ngăn tải ảnh không?', 'Không; ẩn phần tử cha hoặc dùng media query'], ['Phần tử cho phép chọn ảnh theo media?', 'picture (source media, srcset, img dự phòng)'], ['srcset 1x, 2x dùng để?', 'Chọn ảnh theo mật độ điểm ảnh'], ['sizes dùng để?', 'Cho trình duyệt biết ảnh chiếm bao nhiêu viewport'], ['Polyfill picture?', 'Picturefill'], ['Cách Etsy xử lý font?', 'Chỉ áp web font ở min-width 1000px'], ['Performance budget là gì?', 'Mục tiêu đo được cho phép đánh đổi giữa các tài sản'], ['Mobile first giúp gì?', 'Ưu tiên nội dung cốt lõi, tránh ép desktop vào di động'], ['Đo ảnh tải theo breakpoint thế nào?', 'Giả lập thiết bị trong Chrome DevTools, tắt cache, xem tab Network']],
  quiz: [
    { q: 'Cách nào ngăn trình duyệt tải ảnh nền?', o: ['display:none trên chính phần tử', 'Ẩn phần tử cha', 'visibility:hidden', 'opacity:0'], a: 1, e: 'Ẩn phần tử cha hoặc dùng media query cho nền.' },
    { q: 'sizes="(min-width:1000px) 33.3vw, 100vw" nghĩa là:', o: ['Ảnh rộng 1000px', 'Từ 1000px ảnh chiếm 33,3% viewport, mặc định 100%', 'Ảnh luôn 33%', 'Ảnh 100px'], a: 1, e: 'Khai báo độ rộng hiển thị.' },
    { q: 'Nhược điểm lớn của RESS:', o: ['Chậm server', 'Không phản ứng khi xoay thiết bị', 'Không dùng được ảnh', 'Cần JavaScript'], a: 1, e: 'Server không biết bố cục đổi.' },
    { q: 'Trình duyệt nào tải mọi @font-face dù không dùng?', o: ['Chrome', 'IE8 trở xuống', 'Firefox', 'Safari'], a: 1, e: 'IE8-.' },
    { q: 'Tại sao đặt ngân sách theo breakpoint?', o: ['Cho đẹp', 'Mục tiêu cho từng thiết bị thay vì trung bình toàn trang', 'Không cần', 'Chỉ cho desktop'], a: 1, e: 'Mỗi breakpoint có mục tiêu riêng.' }
  ],
  match: [['picture', 'Chọn ảnh theo media/type'], ['srcset', 'Danh sách ảnh và độ rộng/mật độ'], ['sizes', 'Độ rộng hiển thị'], ['RESS', 'Chọn tài sản phía server'], ['Mobile first', 'Bắt đầu từ màn hình nhỏ']]
});
