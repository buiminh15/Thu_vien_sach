(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 6,
  title: 'Rule 4: Nén thành phần bằng gzip',
  intro: 'Rule 1 và 3 loại bỏ request, Rule 2 đưa response lại gần; Rule 4 làm response nhỏ đi. Nén gzip giảm khoảng 70% kích thước, là kỹ thuật dễ nhất và hiệu quả nhất để giảm “độ nặng” trang – nhưng cần để ý proxy cache và vài trình duyệt lỗi thời.',
  sections: [
    { icon: '🗜️', title: 'Cách nén hoạt động', blocks: [
      { t: 'p', x: 'Từ HTTP/1.1, client báo hỗ trợ nén bằng header <code>Accept-Encoding: gzip, deflate</code>. Nếu chọn nén, server trả <code>Content-Encoding: gzip</code>.' },
      { t: 'list', items: [
        '<b>Gzip</b> là định dạng tự do (dự án GNU, RFC 1952), phổ biến và hiệu quả nhất. <b>Deflate</b> hơi kém hiệu quả và ít dùng (tác giả chỉ thấy msn.com). Trình duyệt hỗ trợ deflate đều hỗ trợ gzip nhưng ngược lại không đúng → chọn gzip.',
        '<b>Nén gì?</b> Mọi phản hồi dạng văn bản: HTML, script, stylesheet, XML, JSON. <b>Không nén ảnh và PDF</b> vì đã nén sẵn – phí CPU và có thể làm file lớn hơn.',
        '<b>Đánh đổi:</b> tốn CPU ở server (nén) và client (giải nén). Quy tắc thực dụng: nên nén file lớn hơn khoảng <b>1–2K</b> (directive <code>mod_gzip_minimum_file_size</code>, mặc định 500 byte).'
      ] },
      { t: 'p', x: 'Khảo sát 10 site lớn: 9 site gzip HTML, 7 site gzip phần lớn script/CSS, chỉ 5 site gzip <i>tất cả</i> script/CSS.' }
    ] },
    { icon: '📉', title: 'Tiết kiệm bao nhiêu?', blocks: [
      { t: 'table', head: ['Loại file', 'Gốc', 'Gzip', 'Tiết kiệm', 'Deflate', 'Tiết kiệm'], rows: [
        ['Script', '39 713 B', '14 488 B', '64%', '16 583 B', '58%'],
        ['Stylesheet', '14 122 B', '3 748 B', '73%', '4 665 B', '67%']
      ] },
      { t: 'p', x: 'Gzip giảm ~66% tổng; hơn deflate khoảng 6%. Ví dụ trang gồm HTML 48,6K + CSS 59,9K + script 68,0K:' },
      { t: 'table', head: ['Ví dụ', 'Tổng kích thước', 'Giảm', 'Thời gian', 'Giảm thời gian'], rows: [
        ['Không nén', '177,6K', '–', '1562 ms', '–'],
        ['Chỉ nén HTML', '141,9K', '19,7%', '1411 ms', '9,7% (151 ms)'],
        ['Nén tất cả', '46,4K', '<b>73,8%</b>', '731 ms', '<b>53,2%</b> (nhanh hơn 831 ms)']
      ] },
      { t: 'tip', x: 'Đo qua DSL 900 Kbps (mốc 1562 ms suy ra từ 1411 + 151 ms); số tuyệt đối thay đổi theo kết nối, CPU, trình duyệt, vị trí nhưng tỷ lệ tương đối tương tự. Chỉ cần đổi cấu hình server là đã nhanh hơn rất nhiều.' }
    ] },
    { icon: '⚙️', title: 'Cấu hình Apache', blocks: [
      { t: 'table', head: ['Apache', 'Module', 'Ghi chú'], rows: [
        ['1.3', '<code>mod_gzip</code>', 'Nhiều directive; host thường bật cho text/html — cần bật thêm cho script/CSS. Có thể lưu bản đã nén trên đĩa để đỡ tốn CPU (mod_gzip_can_negotiate…)'],
        ['2.x', '<code>mod_deflate</code>', 'Dù tên là deflate, thực chất nén bằng gzip. Có <code>DeflateCompressionLevel</code> để chỉnh mức nén']
      ] },
      { t: 'p', x: C(`# Apache 1.3
mod_gzip_item_include mime ^application/x-javascript$
mod_gzip_item_include mime ^text/css$

# Apache 2.x
AddOutputFilterByType DEFLATE text/html text/css application/x-javascript`) }
    ] },
    { icon: '🧱', title: 'Proxy cache, Vary và ca “biên”', blocks: [
      { t: 'p', x: 'Vấn đề với proxy: nếu bản đầu tiên proxy cache là bản <i>không nén</i> (từ trình duyệt không hỗ trợ gzip), các client hỗ trợ gzip sẽ không được nén; ngược lại, nếu proxy giữ bản <i>đã nén</i> thì trình duyệt không hiểu gzip cũng nhận bản nén → hỏng trang.' },
      { t: 'key', x: 'Giải pháp: thêm <code>Vary: Accept-Encoding</code> để proxy lưu <b>nhiều phiên bản</b> theo giá trị Accept-Encoding. mod_gzip tự thêm header này.' },
      { t: 'p', x: 'Ca biên: khoảng 90% lưu lượng đến từ trình duyệt báo hỗ trợ gzip và thường đáng tin. Một số bản cũ (IE 5.5, IE 6.0 SP1 chưa vá) có lỗi. Hướng an toàn là <b>whitelist trình duyệt</b> (chỉ nén cho IE 6+ và Mozilla 5+): ' },
      { t: 'p', x: C(`mod_gzip_item_include reqheader "User-Agent: MSIE [6-9]"
mod_gzip_item_include reqheader "User-Agent: Mozilla/[5-9]"`) },
      { t: 'warn', x: 'Whitelist buộc thêm <code>User-Agent</code> vào Vary — có hàng nghìn giá trị User-Agent nên proxy gần như không cache được. Tài liệu mod_gzip nói rõ: lọc theo User-Agent “sẽ vô hiệu hoá hoàn toàn caching”. Khi đó dùng <code>Cache-Control: private</code> (Google và Yahoo! làm vậy) thay vì <code>Vary: *</code> (vì Vary: * cản cả trình duyệt cache).' },
      { t: 'table', head: ['Hoàn cảnh', 'Khuyến nghị'], rows: [
        ['Ít người dùng, tập trung (intranet, toàn Firefox 1.5)', 'Nén + <code>Vary: Accept-Encoding</code>'],
        ['Quan tâm chi phí băng thông', 'Nén + <code>Vary: Accept-Encoding</code> (giảm băng thông, tận dụng proxy)'],
        ['Khán giả đông, đa dạng, chấp nhận tốn băng thông, cần chất lượng cao', 'Nén + <code>Cache-Control: private</code> (tắt proxy, tránh lỗi biên)']
      ] },
      { t: 'p', x: 'Thêm một ca biên: ETag mặc định không phản ánh việc nội dung đã nén hay chưa nên proxy có thể trả sai phiên bản. Cách xử lý tốt nhất là tắt ETag (xem Rule 13).' }
    ] }
  ],
  summary: [
    'Gzip giảm ~70% kích thước văn bản; ví dụ nén tất cả: 177,6K → 46,4K, nhanh hơn 53,2%.',
    'Nén HTML, script, CSS, XML, JSON; không nén ảnh/PDF; nén file > 1–2K.',
    'Apache 1.3: mod_gzip; Apache 2: mod_deflate (nén bằng gzip).',
    'Dùng Vary: Accept-Encoding để proxy lưu cả bản nén và không nén.',
    'Lo trình duyệt cũ: whitelist + Cache-Control: private (mất proxy cache); cân nhắc theo đối tượng người dùng.'
  ],
  cards: [
    ['Header client báo hỗ trợ nén?', 'Accept-Encoding.'],
    ['Header server báo nội dung đã nén?', 'Content-Encoding: gzip.'],
    ['Vì sao chọn gzip thay vì deflate?', 'Hiệu quả hơn (~6%), phổ biến hơn và trình duyệt hỗ trợ rộng hơn.'],
    ['Có nên nén ảnh và PDF?', 'Không – đã nén sẵn, tốn CPU, có thể to hơn.'],
    ['Ngưỡng kích thước nên nén?', 'Khoảng 1–2K trở lên.'],
    ['Gzip tiết kiệm trung bình?', 'Khoảng 70% (script 64%, CSS 73% trong ví dụ).'],
    ['Module nén của Apache 2.x?', 'mod_deflate (dùng gzip).'],
    ['Header giải quyết vấn đề proxy cache bản nén?', 'Vary: Accept-Encoding.'],
    ['Whitelist trình duyệt là gì?', 'Chỉ nén cho trình duyệt đã biết hỗ trợ tốt (IE 6+, Mozilla 5+).'],
    ['Vì sao Vary: User-Agent gần như tắt proxy cache?', 'Có hàng nghìn giá trị User-Agent nên proxy không cache hết tổ hợp.'],
    ['Header Google/Yahoo! dùng khi muốn tắt proxy cache?', 'Cache-Control: private.'],
    ['Nén tất cả trong ví dụ giảm thời gian bao nhiêu?', '53,2% (nhanh hơn 831 ms).']
  ],
  quiz: [
    { q: 'Mọi thứ NÊN nén ngoại trừ:', o: ['HTML', 'CSS', 'JSON', 'Ảnh JPEG'], a: 3, e: 'Ảnh/PDF đã nén sẵn.' },
    { q: 'mod_deflate của Apache 2 thực tế dùng:', o: ['Deflate thuần', 'Gzip', 'Brotli', 'LZMA'], a: 1, e: 'Tên dễ gây nhầm lẫn.' },
    { q: 'Vary: Accept-Encoding có tác dụng gì?', o: ['Tắt cache', 'Proxy lưu nhiều phiên bản theo Accept-Encoding', 'Tăng mức nén', 'Mã hóa'], a: 1, e: 'Tránh phục vụ nhầm bản nén/không nén.' },
    { q: 'Whitelist User-Agent dẫn tới điều gì với proxy?', o: ['Proxy cache tốt hơn', 'Gần như vô hiệu hoá proxy cache', 'Không ảnh hưởng', 'Tăng nén'], a: 1, e: 'Quá nhiều giá trị User-Agent.' },
    { q: 'Với khán giả đông, đa dạng, sách khuyên:', o: ['Không nén', 'Nén + Vary: Accept-Encoding', 'Nén + Cache-Control: private', 'Nén + Vary: *'], a: 2, e: 'Vary: * ngăn cả trình duyệt cache.' },
    { q: 'Nén tất cả (HTML+CSS+JS) trong ví dụ đạt giảm kích thước:', o: ['19,7%', '40%', '73,8%', '99%'], a: 2, e: '177,6K → 46,4K.' },
    { q: 'Vấn đề ETag liên quan nén ở chỗ:', o: ['ETag không phản ánh nội dung đã nén hay chưa', 'ETag làm file to hơn', 'ETag cấm gzip', 'Không có vấn đề'], a: 0, e: 'Giải pháp: tắt ETag (Rule 13).' }
  ],
  match: [
    ['Accept-Encoding', 'Client báo hỗ trợ nén'],
    ['mod_gzip', 'Nén cho Apache 1.3'],
    ['mod_deflate', 'Nén cho Apache 2.x'],
    ['Vary: Accept-Encoding', 'Proxy lưu bản nén và không nén'],
    ['Cache-Control: private', 'Tắt proxy cache, tránh lỗi biên'],
    ['1–2K', 'Ngưỡng nên bắt đầu nén']
  ]
});
})();
