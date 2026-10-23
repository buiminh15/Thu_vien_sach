window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 8,
  title: 'Trụ cột Testing (1): vì sao test và unit testing',
  intro: 'Kiến trúc sư không thể tự mắt kiểm tra từng dòng code của cả đội. Giải pháp là xây dựng hệ thống đảm bảo chất lượng với độ phủ test đầy đủ. Chương này mở đầu trụ cột Testing và bàn về unit testing.',
  sections: [
    { icon: '🧪', title: 'Vai trò của test', blocks: [
      { t: 'p', x: 'Code mới có thể gây lỗi hoặc <b>regression</b>: ảnh hưởng tính toán, trải nghiệm người dùng, hiệu năng và làm mất doanh thu. Kiến trúc sư không giám sát từng dòng được, nhưng thiết lập được giao thức test.' },
      { t: 'list', items: [
        'Viết test <b>cùng lúc</b> với phát triển (hoặc trước khi viết code).',
        'Test là một phần của code sống, lưu trong repository.',
        '<b>Mọi test phải qua</b> trước khi merge vào master.'
      ] }
    ] },
    { icon: '🔬', title: 'Unit testing', blocks: [
      { t: 'p', x: 'Chia ứng dụng thành các hàm nhỏ nhất và tạo test tự động kiểm tra chúng một cách nhất quán, để phát hiện sớm hàm hỏng trước khi merge hay deploy. Áp dụng ở cả frontend và backend; các bộ test như PHPUnit, NodeUnit, QUnit.' },
      { t: 'key', x: '<b>Single Responsibility</b>: “làm một việc và làm tốt”. Hàm đa nhiệm khó test, khó tái dùng. Ví dụ tách thành: tìm trung tâm phân phối, tính khoảng cách, xác định phí vận chuyển.' },
      { t: 'h3', x: 'Test-Driven Development (TDD)' },
      { t: 'p', x: 'Viết test <b>trước</b>, rồi mới viết code. Ban đầu test thất bại; viết hàm cho đến khi qua. Cách này giúp hiểu rõ hệ thống cần cư xử thế nào.' },
      { t: 'tip', x: 'Test hàm tính phí vận chuyển rất đơn giản: dùng assertion so sánh kết quả mong đợi với kết quả thực.' }
    ] }
  ],
  summary: [
    'Test tạo hệ thống bảo đảm chất lượng thay cho việc giám sát từng dòng.',
    'Test viết cùng/ trước code, nằm trong repo, phải qua hết mới merge.',
    'Unit test + Single Responsibility + TDD làm code dễ test và tái dùng.'
  ],
  cards: [
    ['Regression là gì?', 'Thay đổi mới làm hỏng thứ đã chạy đúng.'],
    ['Ba nguyên tắc triển khai test?', 'Viết sớm, lưu trong repo, phải qua trước khi merge.'],
    ['Unit test kiểm tra gì?', 'Từng hàm nhỏ nhất của ứng dụng.'],
    ['Nguyên tắc Single Responsibility?', 'Mỗi hàm làm một việc và làm tốt.'],
    ['TDD là gì?', 'Viết test trước, sau đó viết code cho test qua.'],
    ['Công cụ test nêu trong sách?', 'PHPUnit, NodeUnit, QUnit.'],
    ['Vai trò của kiến trúc sư với test?', 'Xây hệ thống QA thay vì đọc từng dòng code.']
  ],
  quiz: [
    { q: 'TDD có nghĩa:', o: ['Viết code rồi test', 'Viết test trước', 'Không test', 'Test thủ công'], a: 1, e: 'Test ban đầu sẽ fail.' },
    { q: 'Điều kiện trước khi merge:', o: ['Một test qua', 'Mọi test qua', 'Không cần test', 'Chỉ lint'], a: 1, e: 'Giữ toàn vẹn hệ thống.' },
    { q: 'Hàm đa nhiệm gây vấn đề:', o: ['Khó test và tái dùng', 'Quá nhanh', 'Quá ngắn', 'Không có'], a: 0, e: 'Nên tách nhỏ.' },
    { q: 'QUnit dùng cho:', o: ['JavaScript', 'PHP', 'Java', 'Ruby'], a: 0, e: 'Bộ test JS.' },
    { q: 'Test nên nằm ở đâu?', o: ['Máy cá nhân', 'Repository hệ thống', 'Email', 'Không đâu'], a: 1, e: 'Là phần của code sống.' }
  ],
  match: [
    ['Unit test', 'Kiểm tra từng hàm'],
    ['TDD', 'Test trước, code sau'],
    ['Single Responsibility', 'Một hàm một việc'],
    ['QUnit', 'Bộ test JS'],
    ['Regression', 'Lỗi do thay đổi mới']
  ]
});
