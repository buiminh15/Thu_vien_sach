window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 5,
  title: 'Red Hat Code: tái cấu trúc thành hệ thống module',
  intro: 'Mùa thu 2014, redhat.com ra mắt sau dự án nhiều năm. Giao diện đẹp nhưng không module: dựa nặng vào Bootstrap và style gắn với từng trang. Khi được hỏi chia sẻ style cho các bộ phận khác, đội nhận ra cần một cuộc tái cấu trúc.',
  sections: [
    { icon: '🧶', title: 'Vấn đề: phụ thuộc phình to và style gắn vị trí', blocks: [
      { t: 'list', items: [
        'Phụ thuộc nặng vào <b>Bootstrap CSS</b> và style rải rác → file lớn, selector phức tạp.',
        'Style bị giới hạn theo class của từng trang (<b>location-dependent</b>) nên muốn đổi phải viết selector rất đặc hiệu → làm yếu tính module.',
        'Thiết kế ban đầu không hướng tới chia sẻ giữa các phòng ban.'
      ] },
      { t: 'warn', x: 'Khi style phụ thuộc “nó nằm ở đâu” thay vì “nó là gì”, bạn không thể dùng lại nó ở nơi khác.' }
    ] },
    { icon: '🔨', title: 'Cách làm lại', blocks: [
      { t: 'steps', items: [
        '<b>Cơ hội:</b> trong lúc đóng băng code, đội lập một đội giỏi để xây hệ thống thiết kế bền vững từ đầu.',
        '<b>Bóc tách thiết kế</b> thành các component và mẫu bố cục (layout pattern) nhỏ, tái dùng; tìm các mẫu chung giữa các “band” như cột (column) và gallery để ghép linh hoạt mà vẫn giữ ngôn ngữ hình ảnh.',
        '<b>Lập danh mục component</b> cốt lõi, linh hoạt và không giả định về nội dung hay style bao quanh.',
        '<b>Đúc kết thành quy tắc “Road Runner Rules”</b> để giữ sự rõ ràng và nhất quán.'
      ] },
      { t: 'key', x: 'Component tốt không biết nó nằm ở đâu và không áp đặt giả định về nội dung chứa trong nó.' }
    ] }
  ],
  summary: [
    'Bản redhat.com 2014 không module: nặng Bootstrap, style gắn vị trí.',
    'Cách sửa: bóc tách thành component và layout pattern, lập danh mục, đặt quy tắc (Road Runner Rules).',
    'Component phải độc lập ngữ cảnh.'
  ],
  cards: [
    ['redhat.com ra mắt khi nào?', 'Mùa thu 2014.'],
    ['Hai vấn đề chính của thiết kế ban đầu?', 'Phụ thuộc Bootstrap phình to và style gắn với vị trí trang.'],
    ['Điều gì khơi mào tái cấu trúc?', 'Câu hỏi chia sẻ style cho các bộ phận khác.'],
    ['Bước đầu tái cấu trúc?', 'Bóc tách thiết kế thành component và mẫu bố cục.'],
    ['Ví dụ mẫu bố cục chung?', 'Cột (column) và gallery.'],
    ['“Road Runner Rules” là gì?', 'Bộ quy tắc đúc kết từ danh mục component để giữ nhất quán.'],
    ['Đặc điểm component tốt?', 'Linh hoạt, không giả định về nội dung hay style xung quanh.']
  ],
  quiz: [
    { q: 'Vì sao style gắn vị trí là vấn đề?', o: ['Quá nhỏ', 'Phải dùng selector đặc hiệu, khó tái dùng', 'Không chạy trên Chrome', 'Tốn RAM'], a: 1, e: 'Phá tính module.' },
    { q: 'Thư viện CSS gây phình to ở bản 2014:', o: ['Foundation', 'Bootstrap', 'Bulma', 'Tailwind'], a: 1, e: 'Phụ thuộc nặng.' },
    { q: 'Tên bộ quy tắc của đội:', o: ['Road Runner Rules', 'BEM Rules', 'Atomic Law', 'Pattern Rules'], a: 0, e: 'Đúc kết từ danh mục component.' },
    { q: 'Điều kiện thuận lợi cho việc làm lại:', o: ['Đóng băng code', 'Thêm deadline', 'Bỏ test', 'Giảm đội'], a: 0, e: 'Có không gian thử nghiệm.' },
    { q: 'Bước đầu tiên trong cách làm lại:', o: ['Viết tài liệu', 'Bóc tách thiết kế thành phần nhỏ', 'Đổi server', 'Tắt CSS'], a: 1, e: 'Rồi lập danh mục.' }
  ],
  match: [
    ['Bootstrap', 'Phụ thuộc gây phình to'],
    ['Location-dependent styles', 'Style gắn với trang cụ thể'],
    ['Band', 'Khối nội dung của trang Red Hat'],
    ['Road Runner Rules', 'Quy tắc component'],
    ['Feature moratorium', 'Cơ hội làm lại']
  ]
});
