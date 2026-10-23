(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 11,
  title: 'Rule 9: Giảm số lần tra cứu DNS',
  intro: 'DNS biến hostname thành địa chỉ IP, giống danh bạ điện thoại. Mỗi lần tra cứu mất khoảng 20–120 ms và trình duyệt không tải được gì từ hostname đó cho đến khi xong. Chương này giải thích DNS được cache thế nào và cân bằng giữa giảm tra cứu với tải song song.',
  sections: [
    { icon: '📖', title: 'DNS và cái giá của nó', blocks: [
      { t: 'p', x: 'Người dùng gõ <code>www.yahoo.com</code>, trình duyệt hỏi DNS resolver (thường của ISP) để lấy IP. DNS còn cho phép thay server mà vẫn giữ hostname, hoặc gán nhiều IP cho một hostname để dự phòng.' },
      { t: 'key', x: 'Mỗi lần tra cứu DNS thường tốn <b>20–120 ms</b>; trình duyệt <b>không thể tải gì</b> từ hostname đó đến khi tra cứu xong. Thời gian phụ thuộc resolver, tải của nó, khoảng cách và băng thông.' }
    ] },
    { icon: '🗃️', title: 'DNS được cache ở đâu và bao lâu?', blocks: [
      { t: 'list', items: [
        '<b>Resolver của ISP/LAN</b> có cache riêng.',
        '<b>Hệ điều hành</b> (dịch vụ “DNS Client” trên Windows) cache và tôn trọng TTL.',
        '<b>Trình duyệt</b> có cache riêng, thường bỏ qua TTL và tự đặt giới hạn thời gian và số lượng; chỉ khi bỏ bản ghi mới hỏi hệ điều hành.',
        '<b>Keep-Alive</b> có thể ghi đè cả hai: miễn là kết nối TCP còn mở, không cần tra cứu lại.'
      ] },
      { t: 'p', x: 'Giá trị TTL tối đa của 10 site lớn khác nhau rất nhiều (Yahoo! đặt ngắn để failover nhanh; MySpace đặt dài vì chỉ ở một co-location). RFC 1537 khuyên tránh TTL quá ngắn, gợi ý một ngày. TTL trung bình client nhận được bằng <b>nửa</b> TTL tối đa, vì resolver trả phần TTL còn lại.' },
      { t: 'table', head: ['Trình duyệt', 'Thiết lập', 'Giá trị mặc định'], rows: [
        ['<b>IE</b> (registry)', '<code>DnsCacheTimeout</code>', '30 phút — TTL dưới 30 phút ít ảnh hưởng số lần tra cứu'],
        ['', '<code>KeepAliveTimeout</code>', '1 phút không hoạt động thì đóng kết nối'],
        ['', '<code>ServerInfoTimeOut</code>', '2 phút — dùng lại hostname mỗi ≤2 phút thì không phải tra cứu lại, kể cả quá 30 phút'],
        ['<b>Firefox</b>', '<code>network.dnsCacheExpiration</code>', '1 phút (sau TTL)'],
        ['', '<code>network.dnsCacheEntries</code>', 'Chỉ <b>20</b> bản ghi'],
        ['', '<code>network.http.keep-alive.timeout</code>', '5 phút']
      ] },
      { t: 'tip', x: 'Hệ quả vận hành: nếu chuyển lưu lượng sang IP khác bằng DNS, người dùng IE cần ≥30 phút mới nhận bản ghi mới; người dùng thường xuyên (≥1 lần/2 phút) có thể bám IP cũ mãi, nên đừng tắt máy chủ cũ vội.' },
      { t: 'p', x: 'Xóa cache DNS Windows bằng <code>ipconfig /flushdns</code> (xem bằng <code>/displaydns</code>); khởi động lại trình duyệt xóa cache của trình duyệt nhưng không xóa cache của DNS Client.' }
    ] },
    { icon: '🎚️', title: 'Giảm bao nhiêu hostname là vừa?', blocks: [
      { t: 'p', x: 'Khi cache DNS rỗng, số lần tra cứu = số <b>hostname khác nhau</b> trong trang (URL trang, ảnh, script, CSS, Flash…). Google chỉ cần một lần.' },
      { t: 'warn', x: 'Giảm hostname có thể giảm tải song song (xem Rule 6: 2 kết nối/hostname). Phải cân bằng: Google chỉ có 2 thành phần nên 1 hostname là tối ưu. Trang trung bình có hơn một chục thành phần.' },
      { t: 'key', x: '<b>Hướng dẫn của tác giả:</b> chia thành phần ra <b>ít nhất 2 và nhiều nhất 4 hostname</b> — cân bằng giữa giảm tra cứu DNS và duy trì tải song song.' },
      { t: 'p', x: 'Lợi ích thêm của Keep-Alive (Chương 2): tái dùng kết nối không chỉ tránh overhead TCP/IP mà còn tránh tra cứu DNS lặp. Đảm bảo server hỗ trợ Keep-Alive.' }
    ] }
  ],
  summary: [
    'Mỗi tra cứu DNS tốn 20–120 ms và chặn tải từ hostname đó.',
    'DNS được cache ở ISP, hệ điều hành, trình duyệt; Keep-Alive có thể tránh tra cứu.',
    'IE giữ bản ghi 30 phút; Firefox chỉ 1 phút và chỉ 20 bản ghi.',
    'Tra cứu lúc cache rỗng = số hostname trong trang.',
    'Dùng 2–4 hostname để cân bằng DNS và tải song song; bật Keep-Alive.'
  ],
  cards: [
    ['DNS là gì?', 'Hệ thống ánh xạ hostname → địa chỉ IP (như danh bạ điện thoại).'],
    ['Một lần tra cứu DNS tốn bao lâu?', 'Khoảng 20–120 ms.'],
    ['Trình duyệt tải được gì khi chưa xong DNS?', 'Không tải được gì từ hostname đó.'],
    ['TTL là gì?', 'Time-to-live: thời gian client được cache bản ghi DNS.'],
    ['TTL trung bình client nhận được so với TTL tối đa?', 'Khoảng một nửa.'],
    ['DnsCacheTimeout mặc định của IE?', '30 phút.'],
    ['ServerInfoTimeOut của IE?', '2 phút.'],
    ['Firefox cache bao nhiêu bản ghi DNS mặc định?', '20.'],
    ['Lệnh xóa cache DNS Windows?', 'ipconfig /flushdns.'],
    ['Keep-Alive giúp DNS thế nào?', 'Kết nối còn mở thì không cần tra cứu lại.'],
    ['Số hostname khuyến nghị?', 'Từ 2 đến 4.'],
    ['Vì sao không nên chỉ dùng 1 hostname cho trang lớn?', 'Giảm tải song song (chỉ 2 kết nối mỗi hostname).']
  ],
  quiz: [
    { q: 'Với cache DNS rỗng, số lần tra cứu bằng:', o: ['Số script', 'Số hostname khác nhau', 'Số ảnh', 'Luôn 1'], a: 1, e: 'Mỗi hostname cần một lần.' },
    { q: 'TTL ngắn hơn 30 phút ảnh hưởng thế nào tới IE?', o: ['Tăng mạnh số lần tra cứu', 'Ít ảnh hưởng', 'Tắt cache', 'Không thể đặt'], a: 1, e: 'IE giữ bản ghi 30 phút.' },
    { q: 'Firefox mặc định cache bao nhiêu bản ghi DNS?', o: ['20', '200', '2000', '20 000'], a: 0, e: 'Nên truy cập nhiều domain sẽ bị tra cứu lại.' },
    { q: 'Hướng dẫn số hostname của tác giả:', o: ['1', '2–4', '10', 'Càng nhiều càng tốt'], a: 1, e: 'Cân bằng DNS và song song.' },
    { q: 'Vì sao đổi DNS để chuyển lưu lượng có thể chậm với IE?', o: ['IE giữ bản ghi ≥30 phút và người dùng hoạt động thường xuyên bám IP cũ', 'IE không dùng DNS', 'Do gzip', 'Do ETag'], a: 0, e: 'Cần chờ lâu hoặc để IP cũ chạy.' },
    { q: 'Keep-Alive liên quan DNS ở chỗ:', o: ['Nén DNS', 'Tránh tra cứu lại khi kết nối còn mở', 'Mã hóa DNS', 'Không liên quan'], a: 1, e: 'Kết nối tái dùng không cần DNS.' }
  ],
  match: [
    ['20–120 ms', 'Chi phí một lần tra cứu DNS'],
    ['TTL', 'Thời gian bản ghi DNS được cache'],
    ['DnsCacheTimeout', 'Cài đặt registry của IE (30 phút)'],
    ['network.dnsCacheEntries', 'Firefox: 20 bản ghi'],
    ['ipconfig /flushdns', 'Xóa cache DNS Windows'],
    ['2–4 hostname', 'Khuyến nghị của tác giả']
  ]
});
})();
