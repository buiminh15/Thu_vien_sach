window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 2,
  title: 'Kỷ luật kiến trúc frontend và dự án Alpha',
  intro: 'Kiến trúc sư frontend không chỉ viết code mà thiết kế, lập kế hoạch và giám sát: xây công cụ và quy trình để cả nhóm làm tốt. Tác giả minh họa bằng dự án Alpha: xây hệ thống thiết kế dùng chung cho nhiều website của Red Hat.',
  sections: [
    { icon: '📐', title: 'Kiến trúc frontend là gì?', blocks: [
      { t: 'p', x: 'Mục tiêu: nâng chất lượng code frontend và làm quy trình mượt hơn. Giống kiến trúc sư xây dựng, họ <b>thiết kế, lập kế hoạch và giám sát</b> việc xây website — tập trung vào công cụ và quy trình hơn là chỉ viết code.' },
      { t: 'table', head: ['Phần việc', 'Nội dung'], rows: [
        ['<b>Thiết kế</b>', 'Một tầm nhìn rõ cho codebase; làm thước đo chất lượng/giá trị của code đóng góp; tránh phình to'],
        ['<b>Lập kế hoạch</b>', 'Quy trình đưa code từ lúc viết đến production; giảm lỗi người, dùng version control và tự động hóa'],
        ['<b>Giám sát</b>', 'Dự án thay đổi nên phải điều chỉnh thiết kế và quy trình liên tục']
      ] },
      { t: 'key', x: 'Quyết định kiến trúc phải được đưa ra <b>ngay từ đầu dự án</b> để tránh chi phí thay đổi muộn và để dev không phải làm việc trong quy trình rời rạc.' },
      { t: 'warn', x: 'Thách thức: kiến trúc có chi phí và rủi ro thật; các bên ngại ưu tiên nếu chưa có câu chuyện thành công — nghịch lý “catch-22”: cần kinh nghiệm để chứng minh nhưng không có cơ hội để lấy kinh nghiệm.' }
    ] },
    { icon: '🚀', title: 'Dự án Alpha (Red Hat)', blocks: [
      { t: 'p', x: 'Sau khi ra mắt redhat.com, đội đã có <b>niềm tin</b> và cơ hội xây hệ thống thiết kế quy mô lớn, chia sẻ component giữa nhiều thuộc tính web. Có thời gian “đóng băng tính năng” (feature moratorium) nên đội tập trung thiết kế mà không bị code cũ ràng buộc. Khái niệm các “band” của trang cho khung linh hoạt để dần bỏ hệ theme cũ.' },
      { t: 'list', items: [
        '<b>Nội dung dạng module</b> theo Atomic Design để tái dùng component.',
        '<b>Kiểm thử toàn diện</b> để phát hiện sự cố trước khi hợp nhất.',
        'Thêm các mục tiêu về quy trình và tài liệu (nội dung tóm tắt không liệt kê hết).'
      ] }
    ] },
    { icon: '🏛️', title: 'Bốn trụ cột', blocks: [
      { t: 'p', x: 'Sách tổ chức kiến trúc frontend thành bốn trụ cột:' },
      { t: 'table', head: ['Trụ cột', 'Nội dung'], rows: [
        ['<b>Code</b>', 'Chất lượng HTML, CSS, JavaScript; quy ước viết class, hàm, markup'],
        ['<b>Process</b>', 'Từ ý tưởng đến triển khai: workflow, task runner'],
        ['<b>Testing</b>', 'Unit, hiệu năng, visual regression'],
        ['<b>Documentation</b>', 'Style guide và pattern library']
      ] }
    ] }
  ],
  summary: [
    'Kiến trúc sư frontend thiết kế, lập kế hoạch, giám sát; xây công cụ và quy trình.',
    'Nên quyết định kiến trúc sớm; khó bán vì thiếu bằng chứng (catch-22).',
    'Dự án Alpha của Red Hat: hệ thống thiết kế dùng chung, module, kiểm thử.',
    'Bốn trụ cột: Code, Process, Testing, Documentation.'
  ],
  cards: [
    ['Ba phần việc của kiến trúc sư frontend?', 'Thiết kế, lập kế hoạch, giám sát.'],
    ['Thiết kế kiến trúc giúp gì?', 'Tầm nhìn chung và thước đo chất lượng code; tránh phình to.'],
    ['Khi nào nên ra quyết định kiến trúc?', 'Ngay từ đầu dự án.'],
    ['Nghịch lý catch-22 là gì?', 'Cần kinh nghiệm để chứng minh giá trị nhưng không có cơ hội nếu chưa chứng minh.'],
    ['Dự án Alpha là gì?', 'Hệ thống thiết kế dùng chung nhiều website của Red Hat.'],
    ['Feature moratorium để làm gì?', 'Tập trung thiết kế mới mà không bị code cũ ràng buộc.'],
    ['Bốn trụ cột?', 'Code, Process, Testing, Documentation.'],
    ['Phương pháp tái dùng component?', 'Atomic Design.']
  ],
  quiz: [
    { q: 'Kiến trúc sư frontend tập trung chủ yếu vào:', o: ['Chỉ viết code', 'Công cụ và quy trình', 'Đồ họa', 'Marketing'], a: 1, e: 'Chứ không chỉ code.' },
    { q: 'Trụ cột nào gồm unit testing?', o: ['Code', 'Process', 'Testing', 'Documentation'], a: 2, e: 'Cùng hiệu năng, visual regression.' },
    { q: 'Điều gì tạo điều kiện cho dự án Alpha?', o: ['Đóng băng tính năng', 'Cắt ngân sách', 'Bỏ thiết kế', 'Chuyển sang native'], a: 0, e: 'Được tự do thiết kế.' },
    { q: 'Thách thức khi áp dụng kiến trúc:', o: ['Quá rẻ', 'Chi phí/rủi ro và thiếu bằng chứng', 'Không có công cụ', 'Không cần'], a: 1, e: 'Catch-22.' },
    { q: 'Giám sát cần vì:', o: ['Dự án luôn thay đổi', 'Để phạt dev', 'Không cần Git', 'Giảm số trang'], a: 0, e: 'Điều chỉnh liên tục.' }
  ],
  match: [
    ['Thiết kế', 'Tầm nhìn chung cho codebase'],
    ['Lập kế hoạch', 'Quy trình từ code đến production'],
    ['Giám sát', 'Điều chỉnh khi dự án thay đổi'],
    ['Alpha', 'Dự án hệ thống thiết kế Red Hat'],
    ['4 trụ cột', 'Code, Process, Testing, Documentation']
  ]
});
