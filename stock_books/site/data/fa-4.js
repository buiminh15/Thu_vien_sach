window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 4,
  title: 'Trụ cột Code (2): CSS và JavaScript',
  intro: 'Kiến trúc sư không cần biết mọi mẹo CSS, nhưng phải nắm xu hướng để dẫn dắt đội. Với JavaScript, điều quan trọng là lập kế hoạch dự án và giữ chất lượng code hơn là chạy theo framework mới.',
  sections: [
    { icon: '🎨', title: 'CSS: cộng đồng và xu hướng', blocks: [
      { t: 'p', x: 'Ngành web có văn hóa <b>chia sẻ kiến thức</b> cởi mở (blog, video, repo mã nguồn, gặp gỡ đời thường) khác với các ngành giữ bí mật cạnh tranh. Tác giả cũng nhắc lại việc cách viết CSS của mình thay đổi nhiều qua năm tháng nhờ trao đổi với đồng nghiệp: preprocessor, hệ thống thiết kế dựa trên component…' },
      { t: 'tip', x: 'Nếu thấy lạc hậu với thực hành hiện tại, hãy tham gia meetup/hội nghị nhiều hơn và tìm hiểu CSS đã đi từ đâu tới đâu.' },
      { t: 'h3', x: 'Chiến tranh specificity và kế thừa' },
      { t: 'p', x: 'Trước đây CSS chịu ảnh hưởng của cấu trúc markup (động hay tĩnh). Dev thường đặt style toàn cục trước rồi đi dần xuống các style cụ thể hơn theo cây tài liệu. Cách này sinh ra các vấn đề về <b>độ đặc hiệu (specificity)</b> và <b>kế thừa</b>, làm CSS khó thích ứng và bảo trì.' }
    ] },
    { icon: '⚙️', title: 'JavaScript: chọn công cụ theo nhu cầu', blocks: [
      { t: 'list', items: [
        '<b>Không có framework “một cỡ cho tất cả”.</b> Hãy xác định công cụ cần dựa trên yêu cầu dự án, đừng bắt đầu bằng bộ framework định sẵn.',
        'Nhiều site tốt chỉ cần công cụ đơn giản như static site generator và style viết tay.',
        '<b>Giữ JavaScript sạch:</b> đặt chuẩn code và dùng công cụ <b>linting</b> (như JSHint) để phát hiện lỗi và áp dụng quy ước.',
        '<b>Hàm nhỏ, tái dùng:</b> thay vì script nguyên khối, chia thành hàm nhỏ. Ví dụ thay vì lặp code cho từng màu cảnh báo, viết hàm tổng quát để bớt trùng lặp.'
      ] },
      { t: 'key', x: 'Chuẩn code nhất quán giúp rõ ràng, đảm bảo chất lượng và code review công bằng.' }
    ] }
  ],
  summary: [
    'Kiến trúc sư cần nắm xu hướng CSS; học từ cộng đồng.',
    'CSS truyền thống gặp vấn đề specificity và kế thừa.',
    'JS: chọn công cụ theo nhu cầu, dùng linter, viết hàm nhỏ tái dùng.'
  ],
  cards: [
    ['Điều đặc biệt của ngành web về kiến thức?', 'Chia sẻ cởi mở qua blog, video, repo, gặp gỡ.'],
    ['Specificity war là gì?', 'Cuộc “chiến” giữa các selector có độ đặc hiệu khác nhau, do cách viết CSS từ toàn cục đến cụ thể.'],
    ['Có framework JS vạn năng không?', 'Không – chọn theo nhu cầu dự án.'],
    ['Công cụ lint JS được nhắc?', 'JSHint.'],
    ['Nên viết JS thế nào?', 'Hàm nhỏ, tái dùng, tránh script nguyên khối.'],
    ['Lợi ích của chuẩn code?', 'Rõ ràng, chất lượng, code review công bằng.'],
    ['Kiến trúc sư có cần biết mọi mẹo CSS?', 'Không, nhưng cần nắm các xu hướng chính.']
  ],
  quiz: [
    { q: 'Lint JS dùng để:', o: ['Build ảnh', 'Phát hiện lỗi và ép quy ước', 'Nén gzip', 'Triển khai'], a: 1, e: 'Ví dụ JSHint.' },
    { q: 'Cách chọn framework JS đúng:', o: ['Chọn mới nhất', 'Theo nhu cầu dự án', 'Luôn Angular', 'Không dùng gì'], a: 1, e: 'Không có giải pháp chung.' },
    { q: 'Vấn đề lịch sử của CSS:', o: ['Specificity và kế thừa', 'Không có màu', 'Không có font', 'Không có class'], a: 0, e: 'Do style từ toàn cục tới cụ thể.' },
    { q: 'Cách tránh lặp code cảnh báo nhiều màu:', o: ['Copy dán', 'Hàm tổng quát', 'Thêm iframe', 'Dùng Flash'], a: 1, e: 'Hàm nhỏ tái dùng.' },
    { q: 'Cộng đồng web nổi bật vì:', o: ['Bí mật cạnh tranh', 'Chia sẻ cởi mở', 'Không gặp mặt', 'Chỉ dùng sách'], a: 1, e: 'Học hỏi chung.' }
  ],
  match: [
    ['JSHint', 'Công cụ lint JavaScript'],
    ['Specificity', 'Độ đặc hiệu của selector'],
    ['Hàm nhỏ', 'Dễ tái dùng và kiểm thử'],
    ['Static site generator', 'Công cụ đơn giản đủ cho nhiều site'],
    ['Meetup', 'Cách cập nhật xu hướng']
  ]
});
