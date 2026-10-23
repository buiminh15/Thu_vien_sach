(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 15,
  title: 'Rule 13: Cấu hình ETag',
  intro: 'Giảm số request nhờ cache là cách tăng tốc tốt nhất — nhưng header ETag có thể phá cache khi site chạy trên nhiều server. Chương này giải thích ETag là gì, vì sao cấu hình mặc định của Apache và IIS hại hiệu năng, và khuyên bỏ nó đi.',
  sections: [
    { icon: '🏷️', title: 'ETag là gì?', blocks: [
      { t: 'p', x: 'Khi thành phần hết hạn (hoặc người dùng bấm Reload), trình duyệt phải kiểm tra lại bằng <b>conditional GET</b> — vẫn hiệu quả hơn tải lại toàn bộ. Có hai cách server xác định bản cache còn hợp lệ:' },
      { t: 'table', head: ['Cách', 'Header gửi đi', 'Header trả về'], rows: [
        ['Ngày sửa đổi cuối', '<code>If-Modified-Since</code>', '<code>Last-Modified</code> → khớp thì <b>304</b>'],
        ['<b>ETag</b> (HTTP/1.1)', '<code>If-None-Match</code>', '<code>ETag: "…"</code> → khớp thì <b>304</b>']
      ] },
      { t: 'p', x: '<b>ETag (entity tag)</b> là chuỗi (phải đặt trong dấu ngoặc kép) định danh duy nhất một phiên bản của thành phần. Mục đích: linh hoạt hơn ngày sửa đổi — ví dụ nội dung đổi theo User-Agent hay Accept-Language thì ETag có thể phản ánh điều đó.' },
      { t: 'tip', x: 'Theo đặc tả HTTP, không nên đặt Expires xa hơn một năm, nhưng đó chỉ là hướng dẫn; trình duyệt chấp nhận xa hơn. Chọn “xa” tuỳ thành phần: ảnh quảng cáo có thể hết hạn hằng ngày, logo công ty 10 năm.' }
    ] },
    { icon: '💥', title: 'Vấn đề: ETag mặc định gắn với từng server', blocks: [
      { t: 'p', x: 'ETag thường được dựng từ thuộc tính riêng của một server nên <b>không khớp</b> khi request sau rơi vào server khác trong cụm (rất phổ biến).' },
      { t: 'table', head: ['Server', 'Định dạng ETag', 'Phần gây lệch'], rows: [
        ['Apache 1.3 và 2.x', '<code>inode-size-timestamp</code>', '<b>inode</b> — mỗi server có inode khác cho cùng file'],
        ['IIS 5.0 / 6.0', '<code>Filetimestamp:ChangeNumber</code>', '<b>ChangeNumber</b> — bộ đếm thay đổi cấu hình, khác giữa các server']
      ] },
      { t: 'key', x: 'ETag lệch → server không trả 304 nhỏ nhanh mà trả <b>200 kèm toàn bộ dữ liệu</b>. Với <i>n</i> server round-robin, xác suất ETag khớp là <b>1/n</b>: có 10 server thì chỉ 10% nhận 304, 90% nhận 200 lãng phí. Server tải nặng hơn, băng thông tăng; và proxy cache kém hiệu quả (thay vì một 304, có hai response 200: origin→proxy và proxy→người dùng). Ngoài ra định dạng mặc định bị nêu là có thể gây lỗ hổng rò inode.' },
      { t: 'warn', x: 'Dù đã dùng Expires xa (Rule 3), conditional GET vẫn xảy ra khi người dùng bấm Reload/Refresh. Và <code>If-None-Match</code> được ưu tiên hơn <code>If-Modified-Since</code>: theo HTTP/1.1, khi có cả hai, server chỉ được trả 304 nếu nhất quán với mọi điều kiện — nên ETag lệch thì ngày khớp cũng vô ích.' }
    ] },
    { icon: '🧹', title: 'Giải pháp', blocks: [
      { t: 'list', items: [
        '<b>Tùy biến ETag</b> nếu có nhu cầu thật (vd script thay đổi tuỳ có phải IE hay không) — ETag phản ánh trạng thái cần kiểm tra.',
        '<b>Bỏ phần riêng của server</b>: Apache ≥ 1.3.23 có chỉ thị <code>FileETag</code> để loại inode (còn size + timestamp); IIS đặt ChangeNumber giống nhau trên mọi server.',
        '<b>Tốt nhất: bỏ hẳn ETag</b> nếu không cần tuỳ biến — Last-Modified đã đủ thông tin tương đương, và bỏ ETag còn làm header response và request lần sau nhỏ hơn.'
      ] },
      { t: 'p', x: C(`# Apache
FileETag none`) },
      { t: 'p', x: 'Khảo sát: 6/10 site lớn dùng ETag cho đa số thành phần; 3 trong số đó đã bỏ inode/ChangeNumber, còn ≥4 site để nguyên mặc định gây vấn đề.' },
      { t: 'h3', x: 'Ví dụ thực tế: msn.com (IIS)' },
      { t: 'p', x: 'File blu.css: lần đầu ETag <code>80b31d5a4776c71:6e0</code>; reload lần 1 khớp → 304 (không có Content-Length). Reload lần 2 ETag thành <code>80b31d5a4776c71:47b</code> → server trả 200 kèm toàn bộ dù file giống hệt (647 byte, cùng Last-Modified 03/04/2007). Phần <code>Filetimestamp</code> giống nhau; chỉ <b>ChangeNumber</b> khác — đúng nguyên nhân đã nói.' }
    ] }
  ],
  summary: [
    'ETag dùng với If-None-Match để xác thực cache (HTTP/1.1).',
    'Mặc định Apache (inode-size-timestamp) và IIS (timestamp:ChangeNumber) khác nhau giữa các server → ETag lệch.',
    'n server round-robin: chỉ 1/n cơ hội nhận 304; còn lại 200 tốn kém.',
    'Giải pháp: bỏ phần riêng server, tốt nhất bỏ hẳn ETag (FileETag none), dùng Last-Modified.'
  ],
  cards: [
    ['ETag là gì?', 'Chuỗi định danh một phiên bản thành phần, dùng để xác thực cache.'],
    ['Header trình duyệt gửi lại ETag?', 'If-None-Match.'],
    ['Định dạng ETag Apache mặc định?', 'inode-size-timestamp.'],
    ['Định dạng ETag IIS mặc định?', 'Filetimestamp:ChangeNumber.'],
    ['Vì sao ETag mặc định hại khi có nhiều server?', 'Phần inode/ChangeNumber khác nhau nên không khớp.'],
    ['Xác suất nhận 304 với n server round-robin?', '1/n.'],
    ['Header nào được ưu tiên khi có cả hai?', 'If-None-Match thắng If-Modified-Since.'],
    ['Chỉ thị Apache bỏ ETag?', 'FileETag none.'],
    ['Vì sao bỏ ETag không mất thông tin?', 'Last-Modified cung cấp thông tin tương đương.'],
    ['Lợi ích phụ khi bỏ ETag?', 'Header response và request nhỏ hơn.'],
    ['Ví dụ msn.com cho thấy gì?', 'ChangeNumber đổi giữa các server → 200 thay vì 304.'],
    ['Ảnh hưởng đến proxy cache?', 'ETag lệch dẫn tới hai response 200 thay vì một 304.']
  ],
  quiz: [
    { q: 'Với 10 server round-robin, xác suất nhận 304 đúng là:', o: ['100%', '50%', '10%', '1%'], a: 2, e: '1/n.' },
    { q: 'Phần nào trong ETag Apache gây lệch giữa các server?', o: ['size', 'timestamp', 'inode', 'host'], a: 2, e: 'Inode khác nhau mỗi server.' },
    { q: 'Giải pháp tốt nhất cho đa số site:', o: ['Tăng ETag', 'Bỏ hẳn ETag', 'Thêm Vary', 'Dùng POST'], a: 1, e: 'Last-Modified là đủ.' },
    { q: 'Khi ETag không khớp, server trả:', o: ['304', '200 kèm dữ liệu', '404', '301'], a: 1, e: 'Mất lợi ích của conditional GET.' },
    { q: 'Reload trang với Expires xa vẫn gây:', o: ['Không request', 'Conditional GET', 'Redirect', 'Lỗi'], a: 1, e: 'Không thể tránh.' },
    { q: 'IIS ETag có thể sửa bằng cách:', o: ['Đặt ChangeNumber giống nhau trên mọi server', 'Tắt gzip', 'Đổi cổng', 'Dùng CDN'], a: 0, e: 'Hoặc bỏ ETag.' }
  ],
  match: [
    ['If-None-Match', 'Gửi lại ETag'],
    ['inode', 'Phần ETag Apache khác nhau theo server'],
    ['ChangeNumber', 'Phần ETag IIS khác nhau theo server'],
    ['FileETag none', 'Tắt ETag trong Apache'],
    ['1/n', 'Xác suất 304 với n server'],
    ['Last-Modified', 'Thay thế đủ dùng cho ETag']
  ]
});
})();
