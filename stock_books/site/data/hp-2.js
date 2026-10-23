window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 2,
  title: 'Tổng quan về HTTP',
  intro: 'Trước khi vào 14 quy tắc, cần nắm những phần của HTTP ảnh hưởng đến hiệu năng: nén, conditional GET, Expires, Keep-Alive và pipelining. Đây là “bảng chữ cái” cho mọi chương sau.',
  sections: [
    { icon: '📨', title: 'Request, response và header', blocks: [
      { t: 'p', x: 'HTTP là giao thức client/server dạng văn bản thuần: trình duyệt gửi <b>request</b> cho một URL, server trả <b>response</b>. Chuẩn là RFC 2616 (HTTP/1.1, phổ biến nhất; một số nơi vẫn dùng HTTP/1.0). Các phương thức: GET, POST, HEAD, PUT, DELETE, OPTIONS, TRACE – sách tập trung vào <b>GET</b>.' },
      { t: 'list', items: [
        '<b>Request</b> = dòng GET + URL + các header (Host, User-Agent, Accept-Encoding…).',
        '<b>Response</b> = mã trạng thái (200, 304…) + header (Content-Type, Last-Modified, Content-Length…) + thân (body).'
      ] }
    ] },
    { icon: '🗜️', title: 'Nén, conditional GET và Expires', blocks: [
      { t: 'table', head: ['Cơ chế', 'Header liên quan', 'Tác dụng'], rows: [
        ['<b>Nén</b>', '<code>Accept-Encoding: gzip,deflate</code> (request) / <code>Content-Encoding: gzip</code> (response)', 'Giảm kích thước thân response nếu cả hai bên hỗ trợ (Rule 4)'],
        ['<b>Conditional GET</b>', '<code>Last-Modified</code> → <code>If-Modified-Since</code>; hoặc <code>ETag</code> → <code>If-None-Match</code>', 'Hỏi server “bản của tôi còn dùng được không?”. Nếu chưa đổi, server trả <b>304 Not Modified</b> không kèm body'],
        ['<b>Expires</b>', '<code>Expires: …</code> (hoặc <code>Cache-Control: max-age</code>)', 'Cho biết đến khi nào bản cache còn mới → trình duyệt dùng luôn, <b>không gửi request nào</b> (Rule 3)']
      ] },
      { t: 'key', x: 'Conditional GET và 304 giúp nhẹ hơn, nhưng <b>vẫn tốn một vòng đi–về</b> để kiểm tra. Expires xóa luôn vòng đi–về đó.' }
    ] },
    { icon: '🔌', title: 'Keep-Alive và pipelining', blocks: [
      { t: 'p', x: 'HTTP chạy trên TCP. Thuở đầu mỗi request mở một socket mới – lãng phí vì nhiều request tới cùng một server (ví dụ server ảnh). <b>Persistent connection</b> (Keep-Alive ở HTTP/1.0, mặc định ở HTTP/1.1) cho phép nhiều request trên một kết nối, điều khiển bằng header <code>Connection</code>; một bên có thể đóng bằng <code>Connection: close</code>.' },
      { t: 'p', x: '<b>Pipelining</b> (HTTP/1.1) cho gửi nhiều request liên tiếp mà không đợi response – tốt hơn Keep-Alive, nhưng lúc sách viết IE (đến bản 7) không hỗ trợ và Firefox (đến bản 2) tắt mặc định. Vì vậy Keep-Alive vẫn là cách thực dụng, đặc biệt với HTTPS vì bắt tay kết nối bảo mật tốn thời gian hơn.' },
      { t: 'tip', x: 'Hình dung: Keep-Alive là “giữ nguyên đường ống đã mở”, pipelining là “xếp hàng nhiều yêu cầu liên tiếp trong cùng đường ống”.' }
    ] }
  ],
  summary: [
    'HTTP là request/response dạng văn bản; sách tập trung vào GET.',
    'Nén: Accept-Encoding (client) ↔ Content-Encoding (server).',
    'Conditional GET dùng Last-Modified/If-Modified-Since hoặc ETag/If-None-Match → 304 nếu chưa đổi.',
    'Expires (hoặc Cache-Control max-age) giúp bỏ hẳn request cho thành phần còn “tươi”.',
    'Keep-Alive tái dùng socket; pipelining chưa được IE/Firefox lúc đó hỗ trợ tốt.'
  ],
  cards: [
    ['RFC của HTTP/1.1?', 'RFC 2616.'],
    ['Header nào trình duyệt dùng báo hỗ trợ nén?', 'Accept-Encoding.'],
    ['Header nào server dùng báo nội dung đã nén?', 'Content-Encoding.'],
    ['Conditional GET dùng header nào (theo ngày)?', 'If-Modified-Since, so với Last-Modified.'],
    ['Conditional GET dùng header nào (theo ETag)?', 'If-None-Match, so với ETag.'],
    ['Mã trạng thái khi bản cache còn dùng được?', '304 Not Modified (không kèm body).'],
    ['Expires có tác dụng gì?', 'Trình duyệt dùng bản cache mà không gửi request, cho đến khi hết hạn.'],
    ['Keep-Alive để làm gì?', 'Tái dùng một kết nối TCP cho nhiều request.'],
    ['Header điều khiển persistent connection?', 'Connection (keep-alive / close).'],
    ['Pipelining là gì?', 'Gửi nhiều request liên tiếp trên một socket mà không đợi response.'],
    ['Vì sao Keep-Alive càng quan trọng với HTTPS?', 'Vì việc thiết lập kết nối bảo mật mới tốn kém hơn.'],
    ['Conditional GET vẫn tốn gì?', 'Một vòng đi–về giữa client và server.']
  ],
  quiz: [
    { q: 'Server trả mã nào khi bản cache của trình duyệt vẫn còn dùng được?', o: ['200', '301', '304', '404'], a: 2, e: '304 Not Modified, không có body.' },
    { q: 'Header nào trình duyệt gửi để gửi lại ngày sửa đổi cuối?', o: ['Last-Modified', 'If-Modified-Since', 'Expires', 'Connection'], a: 1, e: 'Last-Modified do server trả về.' },
    { q: 'Khác biệt chính giữa Expires và conditional GET:', o: ['Expires không cần gửi request nào khi còn hạn', 'Conditional GET không tốn thời gian', 'Expires luôn tốn một vòng đi–về', 'Không khác nhau'], a: 0, e: 'Conditional GET vẫn phải hỏi server.' },
    { q: 'Keep-Alive giúp:', o: ['Mã hóa dữ liệu', 'Tái dùng kết nối TCP', 'Nén ảnh', 'Cache DNS'], a: 1, e: 'Tránh mở/đóng socket nhiều lần.' },
    { q: 'Pipelining ở thời điểm sách viết:', o: ['IE 7 hỗ trợ', 'Firefox 2 bật mặc định', 'IE ≤ 7 không hỗ trợ, Firefox ≤ 2 tắt mặc định', 'Mọi trình duyệt hỗ trợ'], a: 2, e: 'Nên Keep-Alive vẫn là lựa chọn thực tế.' },
    { q: 'Header giúp server biết client chấp nhận nén là:', o: ['Content-Type', 'Accept-Encoding', 'User-Agent', 'Host'], a: 1, e: 'Ví dụ gzip,deflate.' }
  ],
  match: [
    ['Accept-Encoding', 'Client báo hỗ trợ nén'],
    ['Content-Encoding', 'Server báo nội dung đã nén'],
    ['If-None-Match', 'Gửi lại ETag để hỏi bản cache còn dùng được không'],
    ['304', 'Chưa thay đổi, không có body'],
    ['Connection: close', 'Đóng kết nối persistent'],
    ['Expires', 'Hạn dùng bản cache']
  ]
});
