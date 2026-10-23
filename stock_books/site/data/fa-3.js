window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 3,
  title: 'Trụ cột Code (1): HTML và phương pháp CSS',
  intro: 'Code tốt không tự nhiên mà có. Phần đầu của trụ cột Code bàn về markup HTML — nền tảng để CSS/JS đáng tin — và các phương pháp CSS (OOCSS, SMACSS, BEM) quyết định HTML và CSS tương tác ra sao.',
  sections: [
    { icon: '🧱', title: 'Nguyên tắc code tốt', blocks: [
      { t: 'p', x: 'Mỗi dev có góc nhìn riêng nên cùng một vấn đề có nhiều lời giải; sự đa dạng này làm đội mạnh hơn, nhưng khi đóng góp vào hệ thống thiết kế thì phải <b>giảm tối đa sự bất nhất</b>. Trụ cột Code đặt khung để nói về chất lượng HTML/CSS/JS, quy tắc đặt class, xây hàm, đánh dấu giao diện, đồng thời liên tục đánh giá kỹ thuật mới cho từng dự án.' },
      { t: 'tip', x: 'Không có cách tiếp cận “vạn năng”: kiến trúc tốt là thích nghi với từng hoàn cảnh.' }
    ] },
    { icon: '🏷️', title: 'HTML: markup thủ tục và markup tĩnh', blocks: [
      { t: 'table', head: ['Loại', 'Đặc điểm', 'Vấn đề'], rows: [
        ['<b>Procedural</b> (thủ tục)', 'Tự động hóa cao nhưng kiểm soát thấp; markup sinh từ backend/CMS có sẵn', '“div soup” — lồng nhau quá sâu, phức tạp'],
        ['<b>Static</b> (tĩnh)', 'Kiểm soát cao, ổn với dự án nhỏ', 'Phải sửa tay trên nhiều trang; selector con cháu dài gây vấn đề specificity']
      ] },
      { t: 'p', x: 'Kiến trúc sư phải cân bằng mức kiểm soát: thứ tự nội dung, chọn phần tử, class CSS, và xem template có dễ tiếp cận để thay đổi không.' },
      { t: 'key', x: '<b>Modular markup</b> (đích đến): 100% tự động hóa nhưng 100% kiểm soát — dev tạo component tái dùng trong mọi ngữ cảnh mà <b>không phụ thuộc CMS</b> quyết định markup.' }
    ] },
    { icon: '🧩', title: 'Từ trang sang hệ thống thiết kế', blocks: [
      { t: 'p', x: 'Đừng coi website là các trang tĩnh. Hãy xem là <b>hệ thống thiết kế</b>: ngôn ngữ hình ảnh được tách thành component tái dùng, giúp codebase mở rộng và bảo trì được.' },
      { t: 'h3', x: 'Ba phương pháp CSS tiêu biểu' },
      { t: 'table', head: ['Phương pháp', 'Ý chính'], rows: [
        ['<b>OOCSS</b> (Object-Oriented CSS)', 'Tách <i>structure</i> khỏi <i>skin</i>; tái dùng và module'],
        ['<b>SMACSS</b>', 'Chia style thành 5 nhóm để code có tổ chức'],
        ['<b>BEM</b> (Block Element Modifier)', 'Quy ước đặt tên mô tả component và trạng thái; class có ý nghĩa']
      ] },
      { t: 'tip', x: 'Chọn phương pháp theo nhu cầu dự án; có thể pha trộn hoặc tự tạo, miễn cả nhóm đồng thuận.' }
    ] }
  ],
  summary: [
    'Code tốt cần cách tiếp cận có cấu trúc; giảm bất nhất khi đóng góp vào hệ thống thiết kế.',
    'Markup thủ tục → div soup; markup tĩnh → khó bảo trì; đích đến là markup module.',
    'OOCSS, SMACSS, BEM là các phương pháp CSS chính; chọn/pha trộn theo dự án.'
  ],
  cards: [
    ['“Div soup” là gì?', 'Markup lồng nhau quá nhiều tầng do cách sinh tự động.'],
    ['Nhược điểm của markup tĩnh?', 'Phải sửa tay nhiều trang; selector dài gây vấn đề specificity.'],
    ['Modular markup là gì?', '100% tự động nhưng 100% kiểm soát; component tái dùng không phụ thuộc CMS.'],
    ['OOCSS tách gì khỏi gì?', 'Structure khỏi skin.'],
    ['SMACSS chia style thành mấy nhóm?', 'Năm nhóm.'],
    ['BEM viết tắt?', 'Block Element Modifier.'],
    ['Hệ thống thiết kế khác trang tĩnh thế nào?', 'Chia ngôn ngữ thiết kế thành component tái dùng.'],
    ['Chọn phương pháp CSS dựa vào đâu?', 'Nhu cầu dự án và sự đồng thuận của đội.']
  ],
  quiz: [
    { q: 'Điểm yếu markup thủ tục:', o: ['Quá tùy biến', 'Kiểm soát thấp, div soup', 'Không có HTML', 'Chậm'], a: 1, e: 'Sinh sẵn từ backend/CMS.' },
    { q: 'BEM là:', o: ['Công cụ build', 'Quy ước đặt tên class', 'Trình duyệt', 'Framework JS'], a: 1, e: 'Block, Element, Modifier.' },
    { q: 'OOCSS đề cao:', o: ['Tách structure và skin', 'Dùng !important', 'ID selector', 'Inline style'], a: 0, e: 'Tái dùng, module.' },
    { q: 'Đích đến của markup:', o: ['Procedural', 'Static', 'Modular', 'Inline'], a: 2, e: 'Tự động và kiểm soát đầy đủ.' },
    { q: 'Cách nhìn website của hệ thống thiết kế:', o: ['Tập trang tĩnh', 'Tập component tái dùng', 'Một file CSS', 'Một ảnh'], a: 1, e: 'Dễ mở rộng và bảo trì.' }
  ],
  match: [
    ['Div soup', 'Hậu quả markup thủ tục'],
    ['Markup tĩnh', 'Kiểm soát cao nhưng sửa tay nhiều'],
    ['OOCSS', 'Structure vs skin'],
    ['SMACSS', '5 nhóm style'],
    ['BEM', 'Block Element Modifier']
  ]
});
