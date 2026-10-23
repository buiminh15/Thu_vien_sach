window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 6,
  title: 'Trụ cột Process: quy trình làm việc (workflow)',
  intro: 'Trụ cột Process vạch ra hành trình của code từ ý tưởng đến triển khai: xác thực ý tưởng, chấp nhận thiết kế, deploy. Workflow là khung biến ý tưởng thành hiện thực, cho cả tính năng mới lẫn sửa lỗi.',
  sections: [
    { icon: '📜', title: 'Từ email và FTP đến quy trình hiện đại', blocks: [
      { t: 'p', x: 'Ngày xưa: hướng dẫn qua email, sửa trực tiếp site đang chạy bằng FTP — dễ gây lỗi nghiêm trọng, thiếu sao lưu. Thực hành hiện nay:' },
      { t: 'list', items: [
        'Theo dõi issue và <b>user story</b> để quản lý công việc.',
        'Có môi trường phát triển để thử thay đổi.',
        'Quy trình build để kiểm tra/xác thực code.',
        'Lấy phản hồi của các bên liên quan trước khi chấp nhận.',
        'Commit vào kho mã trung tâm.',
        'Hệ thống build để triển khai production, có khả năng rollback.'
      ] },
      { t: 'tip', x: 'Thiếu sót ở bất kỳ bước nào cũng gây bực bội cho dev hoặc kết quả không như kỳ vọng. Trách nhiệm của kiến trúc sư là xây dựng hoặc cổ vũ các bước này.' }
    ] },
    { icon: '🔄', title: 'Workflow cũ và mới', blocks: [
      { t: 'table', head: ['', 'Cũ', 'Mới'], rows: [
        ['Hình dạng', 'Tuyến tính, chuyền tay giữa product owner → UX → dev frontend', 'Cộng tác đồng thời giữa UX, thiết kế, phát triển và frontend'],
        ['Cách làm', 'Chuyển giao “sản phẩm trung gian”', 'Làm <b>prototype</b> nhanh, rẻ, ngay trong trình duyệt'],
        ['Yêu cầu', 'Một bên viết', 'Thu thập từ nhiều chuyên môn để phát hiện mâu thuẫn sớm']
      ] },
      { t: 'key', x: 'Prototype cho phép tranh luận về trải nghiệm, hình ảnh và giải pháp frontend <b>trước</b> khi vào giai đoạn phát triển tốn kém. Khi vào phát triển, ý tưởng đã rõ ràng, đã được kiểm chứng, ít phải sửa.' }
    ] },
    { icon: '🧑‍💻', title: 'Workflow của dev frontend', blocks: [
      { t: 'steps', items: [
        '<b>Onboarding:</b> cài phần mềm, thiết lập môi trường, quyền truy cập version control.',
        '<b>Viết story:</b> story rõ và hành động được; chuyển từ “cập nhật cả trang” sang “thay đổi một component” để theo tinh thần <i>design-system-first</i>, bền vững hơn và ít xung đột.',
        '<b>Feature branch:</b> làm riêng không ảnh hưởng nhánh chính; hỗ trợ code review có cấu trúc.',
        '<b>Phân phối code:</b> khi merge cần tính cách phân phối. Commit asset đã biên dịch làm repo phình và xung đột — nên dùng máy chủ <b>CI</b> để deploy và hạn chế regression.',
        '<b>Kênh phân phối:</b> dùng package manager (NPM, Bower…) để quản lý phiên bản, phát hành file chọn lọc và giữ code bí mật khi cần.'
      ] }
    ] }
  ],
  summary: [
    'Quy trình hiện đại: issue/story, môi trường dev, build, phản hồi, repo trung tâm, deploy có rollback.',
    'Workflow mới là cộng tác và dựa trên prototype thay vì chuyền tay tuyến tính.',
    'Dev frontend: onboarding → story theo component → feature branch → CI → package manager.'
  ],
  cards: [
    ['Rủi ro của việc sửa site bằng FTP?', 'Lỗi nghiêm trọng, thiếu sao lưu.'],
    ['Workflow cũ khác mới thế nào?', 'Cũ tuyến tính, chuyền tay; mới cộng tác và làm prototype.'],
    ['Lợi ích của prototype?', 'Tranh luận ý tưởng rẻ và nhanh trước khi phát triển.'],
    ['Story theo kiểu design-system-first?', 'Tập trung thay đổi từng component thay vì cả trang.'],
    ['Feature branch để làm gì?', 'Làm độc lập và hỗ trợ code review.'],
    ['Vì sao không commit asset đã biên dịch?', 'Phình repo và gây xung đột; dùng CI để deploy.'],
    ['Package manager nêu trong sách?', 'NPM, Bower.'],
    ['CI viết tắt?', 'Continuous Integration.']
  ],
  quiz: [
    { q: 'Prototype giúp:', o: ['Tăng chi phí', 'Tranh luận ý tưởng rẻ trước khi phát triển', 'Bỏ test', 'Tránh Git'], a: 1, e: 'Làm trong trình duyệt.' },
    { q: 'Nên dùng gì để tránh commit asset biên dịch?', o: ['FTP', 'Máy chủ CI', 'Email', 'USB'], a: 1, e: 'Deploy tự động.' },
    { q: 'Story tốt nên:', o: ['Mơ hồ', 'Rõ ràng, hành động được', 'Rất dài', 'Chỉ cho backend'], a: 1, e: 'Tập trung vào component.' },
    { q: 'Feature branch cho phép:', o: ['Sửa trực tiếp master', 'Làm độc lập, review có cấu trúc', 'Bỏ test', 'Tắt CI'], a: 1, e: 'Không ảnh hưởng nhánh chính.' },
    { q: 'Hệ thống build cần khả năng:', o: ['Rollback', 'Xóa lịch sử', 'Tắt cache', 'Ẩn lỗi'], a: 0, e: 'Triển khai an toàn.' }
  ],
  match: [
    ['User story', 'Mô tả công việc rõ ràng'],
    ['Feature branch', 'Nhánh làm việc riêng'],
    ['CI', 'Tự động build/deploy'],
    ['NPM / Bower', 'Package manager'],
    ['Prototype', 'Thử ý tưởng rẻ và nhanh']
  ]
});
