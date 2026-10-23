window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 10,
  title: 'Trụ cột Testing (3): visual regression testing',
  intro: 'Sau khi thiết kế được duyệt và code xong, giao diện vẫn có thể lệch đi mà không ai biết đến khi người dùng phàn nàn. Visual regression testing chụp ảnh chuẩn (baseline) của thiết kế đã duyệt rồi so sánh với bản hiện tại để bắt thay đổi bất ngờ trước khi triển khai.',
  sections: [
    { icon: '🕵️', title: 'Những “thủ phạm” quen thuộc', blocks: [
      { t: 'table', head: ['Thủ phạm', 'Mô tả'], rows: [
        ['<b>Dev vô tình</b> (Unknowing developers)', 'Dev khác đổi style dùng chung làm hỏng component đã xong; QA khó bắt'],
        ['<b>Thiết kế không nhất quán</b>', 'Designer sửa style trong từng file riêng, không có nơi tập trung theo dõi → lệch giữa mockup và bản chạy'],
        ['<b>Người ra quyết định hay đổi ý</b> (waffling)', 'Thay đổi liên tục làm mờ ranh giới giữa lỗi thật và thay đổi mong muốn']
      ] }
    ] },
    { icon: '📸', title: 'Giải pháp: baseline và so sánh', blocks: [
      { t: 'steps', items: [
        '<b>Chụp baseline</b> trạng thái thiết kế đã duyệt.',
        '<b>So sánh</b> bản hiện tại với baseline (từng pixel) để phát hiện khác biệt trước khi merge.',
        'Tích hợp vào chu trình phát triển để xác nhận cả code lẫn thiết kế.'
      ] }
    ] },
    { icon: '🧰', title: 'Các loại công cụ', blocks: [
      { t: 'table', head: ['Loại', 'Ví dụ', 'Ghi chú'], rows: [
        ['Page-based diffing', 'Wraith', 'So cả trang, ví dụ staging với live'],
        ['Component-based diffing', 'BackstopJS', 'Chụp và so từng component để khoanh vùng'],
        ['CSS unit testing', 'Quixote', 'Kiểm thuộc tính CSS cụ thể'],
        ['Headless/desktop browser', 'Gemini (PhantomJS)', 'So nhanh bằng headless; hỗ trợ cả trình duyệt thật'],
        ['Thư viện script', 'CasperJS', 'Mô phỏng thao tác người dùng rồi chụp'],
        ['GUI duyệt thay đổi', 'Diffux', 'Giao diện cho các bên duyệt'],
        ['Dòng lệnh', 'PhantomCSS', 'Phù hợp CI']
      ] },
      { t: 'key', x: 'Visual regression là xương sống giữ giao diện nhất quán: có thể đổi mà tự tin vì sai khác sẽ bị bắt sớm, ít phải sửa lại.' },
      { t: 'warn', x: 'Đừng ỷ lại: test hình ảnh không bắt được lỗi chức năng hay UX sâu hơn; nên kết hợp nhiều phương pháp.' }
    ] }
  ],
  summary: [
    'Nguyên nhân lệch giao diện: dev khác sửa style chung, thiết kế phân tán, quyết định thay đổi liên tục.',
    'Visual regression: chụp baseline đã duyệt và so sánh trước khi merge.',
    'Bảy nhóm công cụ: Wraith, BackstopJS, Quixote, Gemini, CasperJS, Diffux, PhantomCSS.'
  ],
  cards: [
    ['Visual regression testing làm gì?', 'So ảnh chụp giao diện hiện tại với baseline đã duyệt.'],
    ['Ba thủ phạm gây lệch giao diện?', 'Dev vô tình, thiết kế không nhất quán, người ra quyết định hay đổi ý.'],
    ['Wraith thuộc loại nào?', 'Page-based diffing.'],
    ['BackstopJS thuộc loại nào?', 'Component-based diffing.'],
    ['Quixote làm gì?', 'CSS unit testing – kiểm thuộc tính CSS.'],
    ['Gemini dựa trên gì?', 'Headless browser (PhantomJS) và trình duyệt thật.'],
    ['Diffux có đặc điểm gì?', 'Giao diện web để lưu và duyệt test hình ảnh.'],
    ['PhantomCSS phù hợp cho?', 'Môi trường dòng lệnh/CI.']
  ],
  quiz: [
    { q: 'Baseline là:', o: ['Ảnh chuẩn của thiết kế đã duyệt', 'Lỗi', 'Bản nháp', 'Log'], a: 0, e: 'Dùng làm mốc so sánh.' },
    { q: 'Công cụ component-based:', o: ['Wraith', 'BackstopJS', 'Diffux', 'PhantomCSS'], a: 1, e: 'Khoanh vùng thay đổi.' },
    { q: 'Điểm yếu của visual test:', o: ['Bắt được mọi lỗi', 'Không bắt lỗi chức năng/UX sâu', 'Quá nhanh', 'Không cần baseline'], a: 1, e: 'Nên kết hợp nhiều phương pháp.' },
    { q: 'Công cụ có GUI duyệt:', o: ['Diffux', 'Quixote', 'CasperJS', 'Gemini'], a: 0, e: 'Cho stakeholders.' },
    { q: '“Waffling decision makers” gây ra:', o: ['Ranh giới lỗi và thay đổi mờ đi', 'Tăng tốc', 'Giảm test', 'Dễ merge'], a: 0, e: 'Thay đổi liên tục.' }
  ],
  match: [
    ['Wraith', 'So cả trang'],
    ['BackstopJS', 'So từng component'],
    ['Quixote', 'CSS unit test'],
    ['Diffux', 'GUI duyệt'],
    ['PhantomCSS', 'Dòng lệnh / CI']
  ]
});
