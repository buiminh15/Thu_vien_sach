(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 5,
  title: 'Rule 3: Thêm header Expires',
  intro: 'Rule 1 giúp lần xem đầu; Rule 3 giúp các lần xem sau. Một header Expires “tương lai xa” khiến trình duyệt dùng bản cache thay vì gửi request – cắt thời gian phản hồi tới hơn một nửa. Chi phí: cần cơ chế đổi tên file khi nội dung thay đổi.',
  sections: [
    { icon: '📅', title: 'Expires và Cache-Control', blocks: [
      { t: 'p', x: 'Server dùng <code>Expires</code> báo cho client “được dùng bản này cho đến thời điểm… (sau đó coi là cũ/stale)”. Header này nên có trên <b>mọi thành phần</b> ít đổi – ảnh, script, CSS, Flash – chứ không chỉ ảnh. HTML động thường không có.' },
      { t: 'p', x: C(`Expires: Thu, 15 Apr 2010 20:00:00 GMT
Cache-Control: max-age=315360000`) },
      { t: 'table', head: ['Header', 'Cách khai báo', 'Vấn đề'], rows: [
        ['<code>Expires</code>', 'Ngày tuyệt đối', 'Cần đồng bộ đồng hồ server–client; phải cập nhật ngày khi đến hạn'],
        ['<code>Cache-Control: max-age</code> (HTTP/1.1)', 'Số giây còn “tươi” tính từ lúc request', 'Không phụ thuộc đồng hồ; HTTP/1.0 không hiểu']
      ] },
      { t: 'p', x: 'Nếu có cả hai, <code>max-age</code> thắng. Cách tốt nhất trên Apache: <code>mod_expires</code> với <code>ExpiresDefault</code>, đặt thời gian tương đối (ví dụ 10 năm); module sẽ gửi cả Expires lẫn Cache-Control max-age.' },
      { t: 'p', x: C(`<FilesMatch "\\.(gif|jpg|js|css)$">
  ExpiresDefault "access plus 10 years"
</FilesMatch>`) },
      { t: 'p', x: 'Khảo sát 10 site lớn: 7 site dùng các header này (5 dùng cả hai, 1 chỉ Expires, 1 chỉ max-age); 3 site không dùng cái nào.' }
    ] },
    { icon: '🧑‍💻', title: 'Cache rỗng và cache đã có', blocks: [
      { t: 'p', x: 'Header Expires chỉ có tác dụng với người đã từng vào site (cache đã “primed”); lần đầu vẫn phải tải hết. Vậy bao nhiêu lượt xem là cache đã có? Tuỳ loại site: “từ vựng mỗi ngày” chỉ ~1 trang/phiên nên ít, còn email/du lịch nhiều trang/phiên thì cao.' },
      { t: 'key', x: 'Đo ở Yahoo!: <b>40–60%</b> số người dùng duy nhất vào ít nhất một lần/ngày với cache đã có; <b>75–85%</b> số lượt xem trang diễn ra với cache đã có. Vì thế tối ưu trải nghiệm cache đã có rất đáng.' },
      { t: 'p', x: 'Khảo sát 10 site về thành phần cacheable ≥ 30 ngày: tổng thể <b>74,7%</b> thành phần không cache được hoặc cache dưới 30 ngày. Ví dụ amazon.com 0/62 ảnh; cnn.com 0/138 ảnh, dù <i>median Last-Modified delta</i> của chúng là 227 ngày – tức một nửa chưa đổi hơn 227 ngày, nên “vì hay đổi” không phải lý do hợp lý.' },
      { t: 'tip', x: 'Yahoo! từng không cache script/CSS vì tưởng đổi thường xuyên. Khi thấy thực tế ít đổi, họ chấp nhận chi phí phát triển thêm để cache chúng.' }
    ] },
    { icon: '🔄', title: 'Làm sao cập nhật khi file đổi?', blocks: [
      { t: 'p', x: 'Khi còn Expires, trình duyệt không kiểm tra thay đổi cho đến khi hết hạn nên người dùng cũ có thể không nhận bản mới. Giải pháp: <b>đổi tên file</b> (và đổi link trong mọi HTML) – như lời khuyên của Mark Nottingham trong “Caching Tutorial”: đổi link thì tài nguyên hoàn toàn mới được tải từ origin.' },
      { t: 'list', items: [
        'Trang sinh động (PHP, Perl…): dùng biến cho tên file → đổi một chỗ.',
        'Ở Yahoo!, đặt số phiên bản trong tên file (vd <code>yahoo_2.0.6.js</code>) và để bước build tự cập nhật bảng ánh xạ chung. Số phiên bản còn giúp truy lại đúng mã nguồn khi gỡ lỗi.'
      ] }
    ] },
    { icon: '📈', title: 'Hiệu quả đo được', blocks: [
      { t: 'p', x: 'Ví dụ 6 ảnh + 3 script + 1 stylesheet (DSL 900 Kbps): lần xem lại giảm từ ~600 ms xuống ~260 ms, tức <b>giảm 57%</b>. Trang nhiều thành phần hơn sẽ còn tốt hơn.' },
      { t: 'key', x: 'Không có Expires, thành phần vẫn được lưu nhưng bị coi là <b>stale</b> → trình duyệt gửi <b>conditional GET</b> cho từng thành phần (thường nhận 304). Những vòng đi–về đó cộng lại thành phần lớn khoản tiết kiệm. Có thể cắt thời gian một nửa chỉ bằng cách tránh chúng.' }
    ] }
  ],
  summary: [
    'Thêm Expires tương lai xa (hoặc Cache-Control max-age) cho mọi thành phần ít đổi.',
    'Dùng mod_expires/ExpiresDefault để có cả hai header, thời gian tương đối.',
    '75–85% lượt xem trang ở Yahoo! có cache đã có → rất đáng tối ưu.',
    'Khi file đổi, đổi tên file (version trong tên) và cập nhật tham chiếu trong HTML qua build.',
    'Ví dụ: lần xem lại từ ~600 ms xuống ~260 ms (−57%).'
  ],
  cards: [
    ['Expires làm gì?', 'Báo trình duyệt dùng bản cache cho đến thời điểm hết hạn, không cần gửi request.'],
    ['Cache-Control: max-age khác Expires thế nào?', 'Dùng số giây tương đối; không phụ thuộc đồng hồ; từ HTTP/1.1.'],
    ['Nếu có cả hai?', 'max-age ghi đè Expires.'],
    ['Module Apache để đặt hạn tương đối?', 'mod_expires, directive ExpiresDefault.'],
    ['Header Expires chỉ giúp ai?', 'Người dùng đã vào site (cache đã có); lần đầu không giúp.'],
    ['Tỷ lệ người dùng vào hằng ngày với cache đã có ở Yahoo!?', '40–60%.'],
    ['Tỷ lệ lượt xem trang có cache đã có ở Yahoo!?', '75–85%.'],
    ['Tổng thành phần top site không cache ≥30 ngày?', '74,7%.'],
    ['Cách cập nhật thành phần đã cache?', 'Đổi tên file (versioning) và đổi tham chiếu trong HTML.'],
    ['Lợi ích đo được trong ví dụ?', 'Lần xem lại giảm ~600 ms → ~260 ms (−57%).'],
    ['Nếu hết hạn, trình duyệt gửi gì?', 'Conditional GET; thường nhận 304.'],
    ['HTML động có nên có Expires xa không?', 'Thường không, vì nội dung đổi mỗi lần.']
  ],
  quiz: [
    { q: 'Header nào ưu tiên khi cả Expires và max-age cùng có?', o: ['Expires', 'max-age', 'Last-Modified', 'ETag'], a: 1, e: 'Theo đặc tả HTTP.' },
    { q: 'Vì sao max-age tốt hơn Expires về đồng hồ?', o: ['Dùng giây tương đối nên không cần đồng bộ đồng hồ', 'Nhanh hơn', 'Nén dữ liệu', 'Tăng bảo mật'], a: 0, e: 'Expires là ngày tuyệt đối.' },
    { q: 'Header Expires xa ảnh hưởng đến:', o: ['Lần xem đầu tiên', 'Các lần xem sau', 'Cả hai như nhau', 'Không ảnh hưởng'], a: 1, e: 'Giảm request khi cache đã có.' },
    { q: 'Để cập nhật file đã cache hạn xa, ta:', o: ['Chờ hết hạn', 'Đổi tên file và link', 'Tăng max-age', 'Xóa cache người dùng'], a: 1, e: 'Versioning tên file.' },
    { q: 'Tại sao Yahoo! trước đây không cache script/CSS?', o: ['Chúng thật sự đổi hàng ngày', 'Nghĩ rằng chúng đổi thường xuyên', 'Bảo mật', 'Do CDN'], a: 1, e: 'Thực tế ít đổi hơn tưởng.' },
    { q: 'Không có Expires thì khi dùng lại thành phần, trình duyệt:', o: ['Dùng thẳng cache', 'Gửi conditional GET', 'Xóa bản cache', 'Tải lại toàn bộ luôn'], a: 1, e: 'Thường trả 304.' },
    { q: 'Ví dụ trong sách giảm lần xem lại bao nhiêu?', o: ['10%', '25%', '57%', '90%'], a: 2, e: '~600 ms → ~260 ms.' }
  ],
  match: [
    ['Expires', 'Ngày hết hạn tuyệt đối'],
    ['Cache-Control: max-age', 'Hạn tính bằng giây tương đối'],
    ['mod_expires', 'Module Apache đặt hạn tương đối'],
    ['yahoo_2.0.6.js', 'Version trong tên file để làm mới cache'],
    ['75–85%', 'Lượt xem trang có cache đã có ở Yahoo!'],
    ['Conditional GET', 'Request kiểm tra khi bản cache đã stale']
  ]
});
})();
