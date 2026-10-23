window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 7,
  title: 'Task runner: Sass, Compass, Grunt và Gulp',
  intro: 'Với nhiều dev frontend, Sass là bước đầu tiên bước vào hệ thống build. Từ đó dẫn tới Compass rồi các task runner chạy trên Node.js như Grunt và Gulp — những công cụ tự động hóa mọi việc lặp lại trong quy trình.',
  sections: [
    { icon: '🪜', title: 'Hành trình từ Sass đến task runner', blocks: [
      { t: 'timeline', items: [['Thủ công', 'Lưu CSS rồi tự refresh trình duyệt'], ['Sass', 'Cần tự động biên dịch → bước đầu vào build system'], ['Compass', 'Có file cấu hình, dễ quản lý dự án và onboarding'], ['Grunt / Gulp', 'Task runner Node.js, làm được nhiều hơn cả biên dịch Sass']] },
      { t: 'p', x: '<b>Compass</b> đưa vào file cấu hình giúp đơn giản hóa quản lý dự án và onboarding. Cộng đồng Sass lớn mạnh nhanh với nhiều plug-in Compass: tạo <b>sprite map</b>, phép toán nâng cao nhờ Ruby…' },
      { t: 'p', x: 'Ban đầu dev ngại chuyển từ Compass sang task runner Node (Grunt, Gulp). Nhưng sau khi thử, họ nhận ra khả năng vượt xa việc biên dịch Sass.' }
    ] },
    { icon: '🛠️', title: 'Task runner làm được gì?', blocks: [
      { t: 'list', items: [
        'Biên dịch Sass và JS.',
        'Xử lý ảnh.',
        'Chạy kiểm thử.',
        'Tự động hóa và ép tuân thủ chuẩn code.',
        'Hàng loạt module sẵn có để dùng cho nhiều khía cạnh phát triển frontend.'
      ] },
      { t: 'key', x: 'Task runner là “cỗ máy” đứng sau quy trình: giảm lỗi người, tăng năng suất và là nơi tích hợp các bài kiểm thử (unit, hiệu năng, visual regression) trước khi merge.' },
      { t: 'warn', x: 'Hạn chế của hướng Compass/Ruby: thiếu tài nguyên Ruby trong đội, nên việc đào sâu kiến trúc frontend khó tiếp tục — một lý do chuyển sang hệ sinh thái Node.' }
    ] }
  ],
  summary: [
    'Sass → Compass → Grunt/Gulp là hành trình quen thuộc.',
    'Task runner tự động hóa biên dịch, ảnh, kiểm thử, ép chuẩn code.',
    'Chuyển sang Node.js giúp mở rộng khả năng và giải quyết hạn chế Ruby.'
  ],
  cards: [
    ['Bước đầu vào build system của nhiều dev?', 'Sass.'],
    ['Compass mang lại gì?', 'File cấu hình, dễ quản lý và onboarding; nhiều plug-in.'],
    ['Hai task runner Node nêu trong sách?', 'Grunt và Gulp.'],
    ['Tính năng nổi bật của plug-in Compass?', 'Tạo sprite map, phép toán nâng cao.'],
    ['Task runner làm gì ngoài biên dịch Sass?', 'Xử lý ảnh, chạy test, ép chuẩn code.'],
    ['Vì sao ban đầu dev ngại Grunt/Gulp?', 'Quen với Compass.'],
    ['Task runner liên quan thế nào tới testing?', 'Chạy các test tự động trước khi merge.']
  ],
  quiz: [
    { q: 'Task runner Node nào được nêu?', o: ['Make', 'Grunt', 'Maven', 'Ant'], a: 1, e: 'Cùng Gulp.' },
    { q: 'Compass dựa trên:', o: ['Ruby', 'Python', 'Go', 'PHP'], a: 0, e: 'Cộng đồng Sass.' },
    { q: 'Lợi ích task runner:', o: ['Tự động hóa việc lặp lại', 'Tắt linting', 'Chỉ nén ảnh', 'Thay Git'], a: 0, e: 'Giảm lỗi người.' },
    { q: 'Sprite map đến từ:', o: ['Plug-in Compass', 'Gulp-only', 'CSS thuần', 'HTML5'], a: 0, e: 'Ví dụ tính năng.' },
    { q: 'Kết quả sau khi thử Grunt/Gulp:', o: ['Họ thấy khả năng vượt xa Sass', 'Bỏ cuộc', 'Dùng FTP', 'Giảm test'], a: 0, e: 'Mở rộng lợi ích.' }
  ],
  match: [
    ['Sass', 'Điểm vào build system'],
    ['Compass', 'Framework Sass có file cấu hình'],
    ['Grunt', 'Task runner Node.js'],
    ['Gulp', 'Task runner Node.js'],
    ['Sprite map', 'Tính năng plug-in Compass']
  ]
});
