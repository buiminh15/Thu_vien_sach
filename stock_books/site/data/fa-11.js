window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 11,
  title: 'Trụ cột Documentation: style guide và pattern library',
  intro: 'Code frontend ngày càng phức tạp: CSS không còn là một file, JS không chỉ là jQuery. Tài liệu là bản thiết kế của hệ thống, tránh giải pháp trùng lặp và giúp người mới vào nhanh; không viết tài liệu cũng là nợ kỹ thuật.',
  sections: [
    { icon: '📚', title: 'Tại sao cần tài liệu?', blocks: [
      { t: 'p', x: 'Tài liệu hiệu quả không chỉ mô tả code, mà có nhiều định dạng và cần được cân nhắc về kiến trúc để luôn còn giá trị.' },
      { t: 'table', head: ['Nhóm', 'Công cụ', 'Đặc điểm'], rows: [
        ['Tài liệu tĩnh', '<b>Hologram</b> (Ruby)', 'Ghi chú inline trong code, gom thành một website tĩnh'],
        ['', '<b>SassDoc</b> (Node)', 'Dùng chú thích inline để sinh tài liệu cho biến, hàm, mixin Sass'],
        ['Tài liệu theo code', '<b>Pattern Lab</b>', 'Thư viện mẫu duyệt được, từ template và CSS'],
        ['', '<b>JSON Schema</b>', 'Mô tả và kiểm tra định dạng dữ liệu cho template/pattern']
      ] }
    ] },
    { icon: '📘', title: 'Style guide: Hologram và SassDoc', blocks: [
      { t: 'p', x: '<b>Hologram</b> cài bằng gem Ruby (<code>gem install hologram</code>), cấu hình bằng file YAML: <code>destination</code> (thư mục xuất), <code>documentation_assets</code>, <code>code_example_templates</code>, <code>dependencies</code>, <code>source</code>. Ghi chú viết trong comment CSS với title, category và Markdown; Hologram quét nguồn và dựng site HTML theo danh mục.' },
      { t: 'table', head: ['', 'Hologram', 'SassDoc'], rows: [
        ['Phong cách', 'Tự do, không phụ thuộc ngôn ngữ', 'Có cấu trúc, “có chính kiến”, riêng cho Sass'],
        ['Ghi chú', 'Block comment CSS', 'Chú thích ba gạch chéo <code>///</code> + annotation như <code>@type</code>, <code>@access</code>'],
        ['Cài đặt', 'Ruby gem', 'NPM'],
        ['Tự động', '–', 'Tự lập bản đồ quan hệ giữa các thành phần Sass']
      ] },
      { t: 'tip', x: 'Cả hai cân bằng giữa công sức người viết và tự động hóa; cần chỉnh tài liệu khi code tiến hóa.' }
    ] },
    { icon: '⚛️', title: 'Atomic Design và Pattern Lab', blocks: [
      { t: 'p', x: '<b>Atomic Design</b> (Brad Frost) xây hệ thống thiết kế bằng cách chia giao diện thành các mẫu có kích thước khác nhau:' },
      { t: 'timeline', items: [['Atoms', 'Khối cơ bản: tiêu đề, phần tử form'], ['Molecules', 'Tổ hợp atoms: ví dụ form tìm kiếm'], ['Organisms', 'Tổ hợp molecules: một phần giao diện như bài blog'], ['Templates', 'Bố cục ghép các thành phần thành trang hoàn chỉnh']] },
      { t: 'p', x: '<b>Pattern Lab</b> là trình sinh site tĩnh tài liệu hóa các khối xây dựng, biến atoms/molecules/organisms/layout thành giao diện duyệt được để làm prototype. Thường đặt trong thư mục theme để chia sẻ file; cài bằng clone repository hoặc Yeoman, chạy <code>grunt server</code> để bắt đầu.' }
    ] }
  ],
  summary: [
    'Không có tài liệu = nợ kỹ thuật; tài liệu là bản thiết kế hệ thống.',
    'Hologram (tự do) và SassDoc (có cấu trúc, riêng Sass) cho style guide.',
    'Atomic Design: atoms → molecules → organisms → templates; Pattern Lab hiện thực thư viện mẫu.'
  ],
  cards: [
    ['Tài liệu giúp gì?', 'Tránh giải pháp trùng lặp, hỗ trợ onboarding.'],
    ['Hologram viết bằng gì?', 'Ruby (gem).'],
    ['SassDoc dùng comment gì?', 'Ba gạch chéo ///.'],
    ['Hologram khác SassDoc?', 'Hologram tự do; SassDoc có cấu trúc, riêng Sass.'],
    ['Bốn mức Atomic Design?', 'Atoms, molecules, organisms, templates.'],
    ['Ai tạo Atomic Design?', 'Brad Frost.'],
    ['Pattern Lab là gì?', 'Trình sinh site tĩnh tài liệu hóa các pattern.'],
    ['JSON Schema dùng làm gì?', 'Mô tả và kiểm tra cấu trúc dữ liệu cho template/pattern.']
  ],
  quiz: [
    { q: 'Search form là ví dụ của:', o: ['Atom', 'Molecule', 'Organism', 'Template'], a: 1, e: 'Tổ hợp các atoms.' },
    { q: 'SassDoc cài bằng:', o: ['gem', 'NPM', 'pip', 'apt'], a: 1, e: 'Công cụ Node.' },
    { q: 'Hologram cấu hình bằng:', o: ['JSON', 'YAML', 'XML', 'INI'], a: 1, e: 'File YAML.' },
    { q: 'Atomic Design thuộc về:', o: ['Brad Frost', 'Micah Godbolt', 'Marcotte', 'Crockford'], a: 0, e: 'Đặt nền cho Pattern Lab.' },
    { q: 'Điều gì xảy ra nếu bỏ tài liệu?', o: ['Nợ kỹ thuật', 'Nhanh hơn', 'An toàn hơn', 'Không gì'], a: 0, e: 'Giống code không refactor.' }
  ],
  match: [
    ['Hologram', 'Style guide từ comment CSS'],
    ['SassDoc', 'Tài liệu cho biến/hàm/mixin Sass'],
    ['Pattern Lab', 'Thư viện mẫu duyệt được'],
    ['Atoms', 'Khối cơ bản'],
    ['JSON Schema', 'Mô tả định dạng dữ liệu']
  ]
});
