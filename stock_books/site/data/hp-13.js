(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 13,
  title: 'Rule 11: Tránh redirect',
  intro: 'Redirect (chuyển hướng) là cách dễ để giải nhiều vấn đề, nhưng nó làm trang chậm: không gì được hiển thị và không thành phần nào tải được cho đến khi tài liệu HTML cuối cùng về. Chương này nêu các tình huống hay dùng redirect và các lựa chọn thay thế.',
  sections: [
    { icon: '↪️', title: 'Redirect là gì và vì sao chậm?', blocks: [
      { t: 'p', x: 'Server trả mã trạng thái <b>3xx</b> và header <code>Location</code>, thân thường rỗng. Phổ biến nhất là <b>301</b> (Moved Permanently) và <b>302</b> (Found). 303 và 307 thêm vào HTTP/1.1 để làm rõ việc dùng sai 302 nhưng hầu như không ai dùng. <b>304 không thật sự là redirect</b>: dùng cho conditional GET.' },
      { t: 'warn', x: 'Dù tên gọi thế nào, 301 và 302 <b>không được cache</b> trên thực tế trừ khi có Expires hoặc Cache-Control đi kèm.' },
      { t: 'list', items: [
        'Các cách chuyển hướng khác: thẻ <code>meta refresh</code> và JavaScript <code>document.location</code>. Nếu bắt buộc, chọn mã 3xx chuẩn để nút Back hoạt động đúng.',
        'Redirect chặn mọi thứ hơn cả script/CSS: nó trì hoãn việc giao <b>toàn bộ tài liệu HTML</b>.',
        'Ví dụ trang Google Toolbar: chuỗi redirect (gồm một cái bằng JavaScript và hai cái 302) chiếm hơn một nửa thời gian trước khi tới được tài liệu đích; còn có redirect cả cho ảnh.'
      ] },
      { t: 'p', x: 'Khảo sát: 7/10 site lớn dùng redirect (2 site ngay trang đầu, 5 site khi vào trang phụ).' }
    ] },
    { icon: '➗', title: 'Thiếu dấu gạch chéo cuối URL', blocks: [
      { t: 'p', x: 'Một redirect lãng phí mà dev thường không biết: <code>http://astrology.yahoo.com/astrology</code> trả <b>301</b> sang <code>…/astrology/</code> (thêm “/”). Mặc định nhiều server (kể cả Apache) làm vậy để hỗ trợ autoindex và URL tương đối thư mục. Nhưng thiếu “/” ngay sau hostname thì không redirect (trình duyệt tự thêm “/”).' },
      { t: 'p', x: 'Cách xử lý (Apache): chỉ thị <code>Alias</code>, <code>mod_rewrite</code> hoặc (Apache 2.0, dùng handler) <code>DirectorySlash</code>.' },
      { t: 'p', x: C(`Alias /astrology /usr/local/apache/htdocs/astrology/index.html`) },
      { t: 'tip', x: 'Đặt URL thành phần trong trang theo gốc (root-relative) thay vì tương đối thư mục. Kiểm tra log để đếm số mã 301 và xem có đáng sửa không; chú ý thứ tự chạy của mod_dir và mod_autoindex.' }
    ] },
    { icon: '🔌', title: 'Kết nối site cũ/mới và các backend', blocks: [
      { t: 'p', x: 'Khi viết lại backend, URL mới có thể khác; redirect là cách dễ để chuyển người dùng. Cũng dùng để nối các phần của site, hoặc điều hướng theo điều kiện (loại trình duyệt, loại tài khoản). Dễ cho lập trình viên nhưng làm xấu trải nghiệm.' },
      { t: 'list', items: [
        '<b>Alias, mod_rewrite, DirectorySlash</b>: cần cam kết giao diện (handler hoặc đường dẫn file).',
        'Hai backend cùng server: cho code cũ gọi thẳng code mới.',
        'Đổi domain: dùng <b>CNAME</b> để hai hostname trỏ cùng server(s), rồi dùng các kỹ thuật trên.'
      ] }
    ] },
    { icon: '📡', title: 'Theo dõi lưu lượng', blocks: [
      { t: 'p', x: 'Redirect thường dùng để đếm click. Trang chủ Yahoo! bọc nhiều link bằng redirect (ví dụ <code>/r/26</code> → 301 sang sports.yahoo.com) và đếm bằng log.' },
      { t: 'table', head: ['Tình huống', 'Thay thế redirect'], rows: [
        ['Lưu lượng nội bộ (cùng công ty)', '<b>Referer logging</b>: phân tích log của site đích, header Referer cho biết trang gốc (“referer” viết sai chính tả nhưng đã thành chuẩn)'],
        ['Link đi ra ngoài site', '<b>Beacon</b>: một HTTP request mang thông tin theo dõi trên URL; trả ảnh 1×1 trong suốt hoặc tốt hơn <b>204</b> (nhỏ hơn, không cache, không đổi trạng thái)'],
        ['Click gây rời trang', 'Race condition giữa gửi beacon và unload: dùng onload của ảnh beacon (chậm tương đương redirect) hoặc <b>XMLHttpRequest</b> chỉ chờ tới readyState 2 (đã gửi) rồi mới rời trang'],
        ['Click không unload (vd quảng cáo pop-up)', 'Image beacon đơn giản là đủ']
      ] },
      { t: 'p', x: 'Yahoo! Search bọc kết quả bằng redirect qua rds.yahoo.com (302) để biết người dùng đi đâu — tiện nhưng làm chậm trang đích.' }
    ] },
    { icon: '✨', title: 'URL đẹp, dễ nhớ', blocks: [
      { t: 'p', x: 'Redirect cũng dùng để có URL ngắn gọn: <code>astrology.yahoo.com</code> → <code>…/astrology/</code>, hoặc đường dẫn Google Toolbar rất dài thay vì URL ngắn dễ nhớ.' },
      { t: 'key', x: 'Mục tiêu: có URL đơn giản <b>mà không cần redirect</b> — dùng Alias, mod_rewrite, DirectorySlash hoặc liên kết trực tiếp code, thay vì buộc người dùng chịu thêm một HTTP request.' }
    ] }
  ],
  summary: [
    'Redirect (3xx) làm trễ toàn bộ tài liệu HTML nên rất tốn kém; 301/302 không cache được nếu thiếu header.',
    'Tránh redirect do thiếu dấu “/” cuối URL; dùng Alias/mod_rewrite/DirectorySlash.',
    'Nối backend bằng Alias, liên kết code trực tiếp, hoặc CNAME thay vì redirect.',
    'Theo dõi lưu lượng bằng Referer logging hoặc beacon (204), không bằng redirect.',
    'URL đẹp nên đạt được bằng rewrite/alias, không bằng redirect.'
  ],
  cards: [
    ['Mã redirect phổ biến nhất?', '301 (vĩnh viễn) và 302 (tạm thời).'],
    ['304 có phải redirect không?', 'Không – dùng cho conditional GET.'],
    ['301/302 có được cache?', 'Chỉ khi có Expires hoặc Cache-Control đi kèm.'],
    ['Header chứa đích chuyển hướng?', 'Location.'],
    ['Vì sao redirect nặng hơn script/CSS chặn?', 'Nó trì hoãn việc giao cả tài liệu HTML.'],
    ['Redirect “ẩn” hay gặp nhất?', 'Thiếu dấu “/” cuối URL thư mục (301).'],
    ['Cách tránh redirect dấu “/” trên Apache?', 'Alias, mod_rewrite, hoặc DirectorySlash.'],
    ['Referer logging dùng khi nào?', 'Theo dõi lưu lượng nội bộ giữa các site cùng công ty.'],
    ['Beacon là gì?', 'HTTP request mang thông tin theo dõi, thường trả ảnh 1×1 hoặc 204.'],
    ['Vì sao 204 tốt hơn ảnh 1×1?', 'Nhỏ hơn, không cache, không đổi trạng thái.'],
    ['Cách gửi beacon nhanh hơn chờ response redirect?', 'Dùng XMLHttpRequest và chỉ chờ tới readyState 2 (đã gửi) trước khi rời trang.'],
    ['Cách tránh redirect khi đổi domain?', 'Dùng CNAME để hai hostname trỏ cùng server.']
  ],
  quiz: [
    { q: 'Redirect đặc biệt chậm vì:', o: ['Nặng byte', 'Trì hoãn giao toàn bộ HTML', 'Làm máy chủ quá tải', 'Phải nén lại'], a: 1, e: 'Chưa có HTML thì chưa tải được gì.' },
    { q: '301 thiếu dấu “/” cuối URL xảy ra ở URL nào?', o: ['http://host', 'http://host/dir', 'http://host/', 'file.html'], a: 1, e: 'Thiếu sau hostname thì không redirect.' },
    { q: 'Cách nào theo dõi click ra ngoài mà không redirect?', o: ['meta refresh', 'Beacon', 'iframe ẩn', '302'], a: 1, e: 'Gửi request đếm click.' },
    { q: 'Response “beacon” tinh gọn nhất là:', o: ['Ảnh GIF 1×1', 'HTTP 204', 'HTML rỗng', 'JSON'], a: 1, e: 'Không có body, không cache.' },
    { q: 'Nếu bắt buộc chuyển hướng, nên dùng:', o: ['meta refresh', 'JavaScript', 'Mã 3xx chuẩn', 'Flash'], a: 2, e: 'Để Back hoạt động đúng.' },
    { q: 'Theo dõi lưu lượng nội bộ trong công ty nên dùng:', o: ['Redirect', 'Referer logging', 'Cookie', 'gzip'], a: 1, e: 'Phân tích log site đích.' },
    { q: 'Điểm yếu của beacon khi click gây rời trang là:', o: ['Cache', 'Race condition với việc unload', 'Mã hóa', 'DNS'], a: 1, e: 'Cần chờ gửi xong.' }
  ],
  match: [
    ['301', 'Moved Permanently'],
    ['302', 'Found (tạm thời)'],
    ['Location', 'Header chứa URL đích'],
    ['DirectorySlash', 'Chỉ thị Apache 2 xử lý dấu “/”'],
    ['Referer logging', 'Thay redirect cho lưu lượng nội bộ'],
    ['Beacon 204', 'Gửi tracking không body']
  ]
});
})();
