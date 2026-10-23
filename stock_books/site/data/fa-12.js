window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 12,
  title: 'Red Hat Documentation và lời kết',
  intro: 'Hệ thống thiết kế của Red Hat bắt đầu từ nhu cầu tài liệu hiệu quả, qua nhiều giai đoạn tiến hóa từ style guide tĩnh đến thư viện pattern riêng. Lời kết nhấn mạnh việc lặp lại, học hỏi liên tục và hợp tác.',
  sections: [
    { icon: '🪜', title: 'Các giai đoạn của tài liệu Red Hat', blocks: [
      { t: 'table', head: ['Giai đoạn', 'Việc làm', 'Vấn đề / kết quả'], rows: [
        ['1. Style guide tĩnh', 'Dùng Hologram biên dịch tài liệu từ comment; mỗi component có ý định, khả năng, giới hạn và bản xem trước HTML', 'Thư mục “Patterns” liên kết component và layout; copy-paste markup không bền vững'],
        ['2. Twig', 'Template engine Twig để có một nguồn markup duy nhất, include component với tham số khác nhau', 'Giảm lỗi do copy-paste'],
        ['3. Tự dựng kiểu Pattern Lab', 'Hệ thống tương tự Pattern Lab nhưng phù hợp nhu cầu riêng, không hardcode import; layout tái dùng với template dựa trên dữ liệu', 'Linh hoạt với nhiều tổ hợp nội dung'],
        ['4. Tách repository', 'Tách Pattern Library và style guide thành hai repo', 'Đổi style guide không ảnh hưởng thư viện; mọi template phải chạy với hệ thống mới']
      ] },
      { t: 'tip', x: 'Giai đoạn 5 trong sách mô tả tiếp việc hoàn thiện nhưng bản tóm tắt bị cắt, nên chương này không nêu chi tiết.' }
    ] },
    { icon: '🏁', title: 'Lời kết của tác giả', blocks: [
      { t: 'list', items: [
        '<b>Lặp (iterate):</b> phạm vi ban đầu khiêm tốn, mở rộng dần khi hiểu thêm → hệ thống toàn diện hơn.',
        '<b>Thích nghi:</b> nhu cầu dự án đổi theo thời gian; không dựa mãi vào một giải pháp hay framework.',
        '<b>Tiếp tục học và thử:</b> kiểm thử, khám phá phương pháp mới.',
        '<b>Hợp tác:</b> tìm giúp đỡ, chia sẻ kiến thức, đóng góp cộng đồng frontend — hành trình không đơn độc.'
      ] },
      { t: 'key', x: 'Kỷ luật kiến trúc frontend nhằm tạo đường ống hiệu quả để render nội dung và giúp dev xây hệ thống thiết kế có cấu trúc tốt.' },
      { t: 'p', x: 'Tác giả Micah Godbolt tham gia nhiều dự án mã nguồn mở và giảng dạy về frontend architecture, visual regression testing, design systems.' }
    ] }
  ],
  summary: [
    'Tài liệu Red Hat tiến hóa: Hologram → Twig → Pattern Lab tự dựng → tách repo.',
    'Bài học: lặp lại, thích nghi, học liên tục, hợp tác.',
    'Mục tiêu: đường ống hiệu quả để dev xây hệ thống thiết kế bền vững.'
  ],
  cards: [
    ['Giai đoạn 1 của tài liệu Red Hat?', 'Style guide tĩnh bằng Hologram.'],
    ['Vì sao copy-paste markup không bền vững?', 'Dễ sai lệch và khó đồng bộ.'],
    ['Twig dùng để làm gì?', 'Một nguồn markup, include component với tham số.'],
    ['Giai đoạn 3 là gì?', 'Hệ thống tự dựng giống Pattern Lab, template dựa trên dữ liệu.'],
    ['Giai đoạn 4 là gì?', 'Tách Pattern Library và style guide thành hai repository.'],
    ['Thông điệp cuối của tác giả?', 'Lặp lại, thích nghi, học liên tục và hợp tác.'],
    ['Có nên dựa mãi vào một framework?', 'Không – luôn đánh giá lại theo nhu cầu.']
  ],
  quiz: [
    { q: 'Công cụ template giải quyết copy-paste markup:', o: ['Twig', 'Grunt', 'QUnit', 'Wraith'], a: 0, e: 'Một nguồn markup.' },
    { q: 'Vì sao tách repo?', o: ['Đổi style guide không ảnh hưởng thư viện', 'Giảm test', 'Bỏ Git', 'Tăng dung lượng'], a: 0, e: 'Quy trình mượt hơn.' },
    { q: 'Giai đoạn đầu dùng:', o: ['Hologram', 'SassDoc', 'JSON Schema', 'Gulp'], a: 0, e: 'Style guide từ comment.' },
    { q: 'Lời khuyên của tác giả cho kiến trúc sư:', o: ['Làm một mình', 'Lặp lại và học liên tục', 'Dùng một framework mãi', 'Bỏ test'], a: 1, e: 'Và hợp tác.' },
    { q: 'Giai đoạn 3 có đặc điểm:', o: ['Tự dựng giống Pattern Lab', 'Chỉ HTML', 'Không template', 'Hardcode import'], a: 0, e: 'Linh hoạt với nhiều tổ hợp.' }
  ],
  match: [
    ['Hologram', 'Giai đoạn 1 style guide'],
    ['Twig', 'Giai đoạn 2 template'],
    ['Pattern Lab tự dựng', 'Giai đoạn 3'],
    ['Tách repo', 'Giai đoạn 4'],
    ['Hợp tác', 'Thông điệp kết sách']
  ]
});
