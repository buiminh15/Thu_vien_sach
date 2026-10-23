window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 4,
  title: 'Tối ưu markup và style',
  intro: 'HTML/CSS sạch, ngữ nghĩa và tái sử dụng được giúp site nhanh và dễ bảo trì. Chương này bàn về dọn HTML (divitis), dọn CSS, tối ưu web font, mẫu thiết kế tái sử dụng, style guide, thứ tự tải CSS/JS, minify + gzip và cache.',
  sections: [
    { icon: '🧹', title: 'Dọn HTML', blocks: [
      { t: 'p', x: 'HTML sạch là nền của site nhanh. Hãy tìm: style nhúng/inline cần chuyển sang stylesheet; phần tử không cần thiết ("divitis"); code cũ đã comment. Hãy mạnh tay xóa — nếu cần vẫn có version control. Tác giả từng giảm một nửa thời gian tải của một site nhờ dọn markup và style.' },
      { t: 'h3', x: 'Divitis' },
      { t: 'p', x: 'Divitis là lạm dụng phần tử (nhất là div) chỉ để tạo style, thường do người viết bị cuốn vào tính tầng (cascade) của CSS nên thêm phần tử cha để ghi đè. Nó làm phình cả HTML và CSS. Hãy gộp style và gắn lên đúng phần tử ngữ nghĩa, ưu tiên phần tử HTML5 (header, article...).' },
      { t: 'tip', x: 'Từ 4 lớp div + header + span + h1 chỉ còn: &lt;header&gt;&lt;h1&gt;Site Name&lt;/h1&gt;&lt;/header&gt; — hoặc đơn giản chỉ &lt;h1&gt;.' },
      { t: 'h3', x: 'Ngữ nghĩa (semantics)' },
      { t: 'p', x: 'Đặt tên theo <b>ý nghĩa nội dung</b> (header, nav, login, breadcrumbs, sidebar), không theo hình thức (left, blue, right). Ví dụ biểu mẫu đăng nhập: "div.right > div#form > p.heading" được viết lại thành "div.sidebar > form#login > h2 + ul > li..." — tên rõ ràng, khó bị ghi đè nhầm, các kiểu như form ul và h2 tái dùng được ở nơi khác.' },
      { t: 'widget', name: 'dp-semantic', title: 'Tên nào có ngữ nghĩa? Phân loại tên class/ID' },
      { t: 'p', x: 'Lợi ích: dễ đọc/kiểm thử/sửa, file nhỏ hơn, giảm nguy cơ phình trọng lượng, dễ tạo pattern. Còn giúp <b>truy cập</b> (accessibility): trình đọc màn hình và bot tìm kiếm chủ yếu đọc HTML, không phải kết quả CSS/JS; tham khảo WCAG 2.0 của W3C.' },
      { t: 'h3', x: 'Framework và lưới' },
      { t: 'p', x: 'Bootstrap, HTML5 Boilerplate, 960 Grid giúp khởi đầu nhưng chứa nhiều thứ bạn không dùng (ví dụ style cho dfn, hr, mark). Nếu dùng: tận dụng tùy chọn build tùy biến (Initializr), xóa phần thừa, dọn lại tên và cấu trúc cho có ngữ nghĩa — không có lý do bắt người dùng tải style/markup/script không cần.' }
    ] },
    { icon: '🎨', title: 'Dọn CSS', blocks: [
      { t: 'p', x: 'Dấu hiệu CSS cần dọn: tên không ngữ nghĩa, !important, hack riêng trình duyệt, selector quá đặc hiệu. Độ gọn của CSS và khả năng bảo trì đi đôi với nhau.' },
      { t: 'h3', x: '1. Style không dùng' },
      { t: 'p', x: 'Xóa selector còn sót lại từ phần tử/trang đã bỏ, class đổi tên, hoặc widget bên thứ ba không dùng nữa. Công cụ: Dust-Me Selectors (Firefox, Opera), tab Audits trong Chrome DevTools. Cẩn thận kết quả: Dust-Me có thể chưa quét hết trang; DevTools chỉ xét trang hiện tại — chỉ dùng để lập danh sách rồi thử xóa.' },
      { t: 'h3', x: '2. Gộp và rút gọn style' },
      { t: 'p', x: 'Hai phần tử giống nhau gần hết (ví dụ .recipe và .comment chỉ lệch font-size 14/13 và margin 10/9): gộp thành khối chung, chỉ viết riêng chỗ khác — hoặc tốt hơn, hỏi vì sao chúng khác nhau và chuẩn hóa thành một pattern thật sự. Các lệch nhỏ thường do dựng theo PSD từng pixel hay cập nhật sót.' },
      { t: 'tip', x: 'Dựa vào cỡ chữ gốc để quyết định các số khác: nội dung 14 px, line-height 1.4em → tiêu đề là bội của 14 px; margin/padding là bội của 1.4em; lưới tùy chỉnh theo nhịp 14 px hoặc 1.4em.' },
      { t: 'p', x: 'Dùng thuộc tính viết tắt (shorthand) như background (clip, color, image, origin, position, repeat, size, attachment) cho phần chung, rồi dùng thuộc tính chi tiết (longhand) để chỉ ra phần khác: ví dụ .comment { border-color: #fff; padding-bottom: 0 } và aside { border-width: 2px }. Đổi tên phần tử thành cùng cấp tiêu đề ngữ nghĩa (h3) cũng tự gộp style: #subtitle, .note, h3 → đều là h3; chỉ cần "article h3 {color: red}", "aside h3 {color: #333}".' },
      { t: 'warn', x: 'Với bộ tiền xử lý LESS/SASS vẫn có thể ra CSS phình: giữ mixin gọn và thường xuyên kiểm tra đầu ra.' },
      { t: 'widget', name: 'dp-css-merge', title: 'Gộp style: tiết kiệm bao nhiêu dòng?' },
      { t: 'h3', x: '3. Ảnh trong stylesheet' },
      { t: 'list', items: ['Gộp icon nhỏ thành sprite; dọn sprite cũ (xóa phần không dùng, xuất lại đúng định dạng và nén cao hơn).', 'Thay ảnh bằng gradient CSS3, data URI, SVG (một SVG thay cả bản retina và thường).', 'Mỗi icon mới phải có mục đích; ghi vào style guide để tránh tạo nhiều kiểu cảnh báo khác nhau.'] },
      { t: 'h3', x: '4. Giảm độ đặc hiệu (specificity)' },
      { t: 'p', x: 'Selector như div#header #main ul li a.toggle thường là dấu hiệu ghi đè chồng chéo; có thể chỉ cần .toggle. Selector kém hiệu quả trước kia bị coi là hại hiệu năng, nay trình duyệt đã nhanh nhưng vẫn nên dọn để giữ kiến trúc frontend. Luôn bắt đầu bằng selector nhẹ nhất rồi mới tăng đặc hiệu; tránh !important.' }
    ] },
    { icon: '🔤', title: 'Tối ưu web font', blocks: [
      { t: 'key', x: 'Font là ví dụ kinh điển của cân nhắc thẩm mỹ – tốc độ: thêm request và dung lượng. Dùng có chủ đích và đo ảnh hưởng tới hiệu năng lẫn chỉ số tương tác.' },
      { t: 'tip', x: '@font-face { font-family: "FontName"; src: url("fontname.eot"); src: url("fontname.eot?#iefix") format("embedded-opentype"), url("fontname.woff") format("woff"), url("fontname.ttf") format("truetype"); }<br>Rút gọn nếu chỉ cần trình duyệt hiện đại (Chrome 6+, Firefox 3.6+, IE9+, Safari 5.1+): chỉ dòng src woff.' },
      { t: 'p', x: 'Dùng font-family với <b>font dự phòng</b>: một font giống font chính, ít nhất một font có trên mọi nền tảng (Georgia, Arial) và một họ chung (serif, sans-serif) — vì có người chặn web font hoặc font bị hỏng.' },
      { t: 'list', items: ['File font từ vài KB đến hơn 200 KB: chỉ cần ít ký tự (ví dụ chỉ cho logo)? chỉ một ngôn ngữ (tập Latin)? bỏ ký tự thừa?', '<b>Subsetting</b>: với Google Fonts thêm &amp;subset=cyrillic hoặc &amp;text=Howdy để chỉ tải vài ký tự. Font Squirrel Webfont Generator cho phép chọn tập ký tự cho font tự host (ví dụ Basic Latin + vài ký tự).', 'Font host ngoài (Google) có khả năng đã được cache nhưng tốn thêm DNS + kết nối; font tự host tiết kiệm DNS nhưng lần đầu chưa được cache và tùy chỉnh được.', 'Chỉ tải ít độ đậm (font weight) nhất có thể: mỗi file thêm một request và trọng lượng.', 'Chỉ tải font trên màn hình lớn: @media (min-width: 1000px) { body { font-family: "FontName", Fallback, sans-serif; } } — di động tránh được request thừa.', 'Ghi rõ vào style guide khi nào dùng độ đậm nào.'] },
      { t: 'widget', name: 'dp-font', title: 'Ước tính chi phí web font theo số độ đậm và subset' }
    ] },
    { icon: '📚', title: 'Markup tái sử dụng và style guide', blocks: [
      { t: 'p', x: 'Mẫu thiết kế (pattern) tái sử dụng là chìa khóa giữ hiệu năng khi site phát triển: tạo cơ hội cache tài sản, tránh làm lại, tránh request thừa khi thêm nội dung, giúp xác định style/tài sản không còn dùng.' },
      { t: 'tip', x: 'Chuẩn hóa màu: gom mọi giá trị màu trong CSS (có bao nhiêu sắc xám? bao nhiêu đỏ cảnh báo?). Một dự án của tác giả: ghi lại mã hex cho vàng đậm, vàng nhạt, đỏ cảnh báo, xanh lá "đã đổi"; xám #aaa cho chữ/viền vô hiệu, #eee cho nền... rồi thay thế → gộp được nhiều style, file CSS chính nhỏ đi 6%.' },
      { t: 'p', x: 'Style guide là tài liệu giúp mọi người cùng làm đúng. Nên có: giá trị hex và khi nào dùng; class nút và cách dùng (Yelp có cả mục nút lỗi thời nên bỏ); sprite và class của từng icon; typography (cách tạo tiêu đề, import và áp font); ví dụ HTML/CSS dễ copy–paste (Starbucks hướng dẫn icon font kèm ví dụ); quy tắc dùng độ đậm font (Etsy). Càng tái dùng pattern thì khả năng đã cache càng cao, CSS càng ngắn, site càng nhanh.' }
    ] },
    { icon: '📦', title: 'Thứ tự tải, minify, gzip, cache', blocks: [
      { t: 'key', x: 'Hai quy tắc: tải <b>CSS ở head</b>, tải <b>JavaScript ở cuối trang</b> (bất đồng bộ nếu được).' },
      { t: 'list', items: ['CSS chặn render: để cuối trang sẽ ngăn hiển thị sớm; để ở head giúp hiển thị dần.', 'Giảm số file CSS; tránh @import. Mục tiêu CSS ≤ 30 KB và một stylesheet; site lớn: một stylesheet toàn trang (được cache) cộng stylesheet riêng từng trang.', 'JavaScript chặn dựng DOM: gặp thẻ script, trình duyệt dừng đến khi script xong. Gọi file ngoài còn tốn thêm hàng chục đến hàng nghìn ms. Dùng thuộc tính <b>async</b>: &lt;script src="main.js" async&gt;.', 'Lưu ý async: nội dung nạp muộn làm bố cục dịch chuyển (dùng placeholder/chỉ báo tải); thứ tự tải không đảm bảo (lỗi phụ thuộc); có thể không hợp với bookmark, nút Back, công cụ tìm kiếm.', 'Script bên thứ ba (quảng cáo, nút chia sẻ): luôn bất đồng bộ, không để thành điểm lỗi duy nhất; thêm DNS lookup + kết nối và không kiểm soát cache. Giảm tối đa, thay nút chia sẻ bằng liên kết đơn giản, cân nhắc tự host bản tối ưu, đánh giá định kỳ giá trị so với chi phí.'] },
      { t: 'widget', name: 'dp-load-order', title: 'Thứ tự tải: đặt CSS/JS ở đâu thì render sớm?' },
      { t: 'h3', x: 'Minify và gzip' },
      { t: 'p', x: '<b>Minify</b>: bỏ khoảng trắng, dấu chấm phẩy thừa, số 0 đầu... (CSSMinifier.com, JSCompress.com — ví dụ CSS nhỏ đi 15%). Giữ bản gốc để sửa; trên site chỉ dùng bản đã minify. <b>gzip</b>: nén tìm chuỗi giống nhau và thay thế; trình duyệt tự giải nén. Bật trên máy chủ: Apache mod_deflate, NGINX ngx_http_gzip_module, IIS HTTP compression. Áp dụng cho CSS, HTML, JS, font — ngoại trừ WOFF (đã nén sẵn).' },
      { t: 'widget', name: 'dp-minify', title: 'Minify + gzip: ước tính dung lượng truyền đi' },
      { t: 'h3', x: 'Cache' },
      { t: 'p', x: 'Tài sản đã cache không cần request lại. Máy chủ nói qua HTTP header:' },
      { t: 'table', head: ['Loại', 'Header', 'Ghi chú'], rows: [['Khoảng thời gian dùng bản cache', 'Expires hoặc Cache-Control: max-age (chỉ đặt một)', 'Expires hỗ trợ rộng hơn; tối đa 1 năm; tối thiểu nên 1 tháng'], ['Phiên bản tài sản', 'Last-Modified hoặc ETag (chỉ đặt một)', 'Last-Modified luôn là ngày; ETag là giá trị định danh phiên bản']] },
      { t: 'tip', x: 'Mọi tài sản tĩnh (CSS, JS, ảnh, PDF, font) đều nên cache. Muốn buộc tải bản mới thì đổi URL của tài sản để phá cache.' }
    ] }
  ],
  summary: ['HTML sạch, ngữ nghĩa: xóa divitis, inline style, code chết.', 'Dọn CSS: bỏ style không dùng, gộp/chuẩn hóa pattern, dùng shorthand, giảm độ đặc hiệu.', 'Tối ưu font: subset, ít độ đậm, font dự phòng, chỉ tải ở màn hình lớn.', 'Chuẩn hóa màu và pattern, ghi vào style guide.', 'CSS ở head, JS cuối trang và async; ít file; tránh @import.', 'Minify + gzip (trừ WOFF); cache tài sản tĩnh với Expires/max-age + Last-Modified/ETag.'],
  cards: [['Divitis là gì?', 'Quá nhiều phần tử (nhất là div) chỉ để tạo style'], ['Tên có ngữ nghĩa là gì?', 'Mô tả ý nghĩa nội dung (login, sidebar), không phải hình thức (left, blue)'], ['Công cụ tìm CSS không dùng?', 'Dust-Me Selectors, Chrome DevTools Audits'], ['Longhand dùng để làm gì sau shorthand?', 'Chỉ rõ phần khác biệt (border-color...)'], ['!important và selector dài là dấu hiệu gì?', 'Ghi đè chồng chéo; cần dọn độ đặc hiệu'], ['Font dự phòng gồm gì?', 'Font giống, font có sẵn mọi nền tảng, họ chung serif/sans-serif'], ['Subsetting font?', 'Chỉ tải tập ký tự cần dùng'], ['Tải font ở màn hình lớn?', '@media (min-width: 1000px) áp font-family'], ['Hai quy tắc CSS/JS?', 'CSS ở head, JS ở cuối trang (async)'], ['Mục tiêu dung lượng CSS?', '≤ 30 KB, một stylesheet'], ['Minify là gì?', 'Bỏ ký tự không cần thiết khỏi code'], ['gzip không áp cho?', 'WOFF (đã nén sẵn)'], ['Expires tối đa?', '1 năm'], ['Cặp header cache?', 'Expires/max-age + Last-Modified/ETag'], ['Chuẩn hóa màu giảm CSS bao nhiêu (ví dụ)?', '6%']],
  quiz: [
    { q: 'Tên class nào có ngữ nghĩa?', o: ['left', 'blue', 'breadcrumbs', 'big'], a: 2, e: 'Mô tả ý nghĩa nội dung.' },
    { q: 'Nên đặt thẻ link CSS ở đâu?', o: ['Cuối body', 'Trong head', 'Sau script', 'Trong footer'], a: 1, e: 'Để hiển thị dần.' },
    { q: 'Thuộc tính giúp script không chặn DOM:', o: ['defer-all', 'async', 'lazy', 'block'], a: 1, e: 'async cho phép tiếp tục dựng DOM.' },
    { q: 'File nào KHÔNG cần gzip thêm?', o: ['CSS', 'HTML', 'JavaScript', 'WOFF'], a: 3, e: 'WOFF đã nén sẵn.' },
    { q: 'Header nào không nên đặt cùng nhau?', o: ['Expires + Last-Modified', 'Expires + max-age', 'ETag + Expires', 'max-age + ETag'], a: 1, e: 'Chỉ đặt một trong Expires hoặc max-age.' },
    { q: 'Để giảm dung lượng font logo chỉ có vài chữ cái:', o: ['Tăng độ đậm', 'Subsetting ký tự', 'Thêm font dự phòng', 'Dùng @import'], a: 1, e: 'Chỉ tải các ký tự cần.' },
    { q: 'Tránh gì khi tải CSS?', o: ['link', '@import', 'media query', 'minify'], a: 1, e: '@import làm tăng thời gian tải.' }
  ],
  match: [['Divitis', 'Quá nhiều div thừa'], ['Subsetting', 'Chọn tập ký tự font'], ['Minify', 'Bỏ ký tự thừa'], ['gzip', 'Nén chuỗi lặp'], ['Expires', 'Thời hạn cache'], ['ETag', 'Định danh phiên bản']]
});
