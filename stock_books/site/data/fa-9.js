window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fearch = BOOK_DATA.fearch || { chapters: [] };
BOOK_DATA.fearch.chapters.push({
  n: 9,
  title: 'Trụ cột Testing (2): kiểm thử hiệu năng',
  intro: 'Mục tiêu của kiểm thử hiệu năng: người dùng không gặp trải nghiệm chậm hoặc hỏng. Công cụ trung tâm là “ngân sách hiệu năng” (performance budget) — các chỉ số mục tiêu được kiểm tra trước khi merge hay deploy.',
  sections: [
    { icon: '💰', title: 'Ngân sách hiệu năng', blocks: [
      { t: 'p', x: 'Đặt giá trị mục tiêu cho các chỉ số then chốt và kiểm thử trước mỗi lần merge/deploy. Nếu test thất bại, phải điều chỉnh tính năng mới hoặc bỏ bớt thứ đang có. Ngân sách tuy gò bó nhưng giúp “chi tiêu” tài nguyên web có trách nhiệm mà không làm hỏng trải nghiệm.' },
      { t: 'table', head: ['Loại baseline', 'Ý nghĩa'], rows: [
        ['<b>Competitive</b> (đối thủ)', 'Đo vài site đối thủ; site của bạn nên tốt hơn ít nhất <b>20%</b>'],
        ['<b>Averaged</b> (trung bình)', 'Dùng dịch vụ như <b>HTTP Archive</b> để lấy số liệu trung bình (page weight, số request…) làm mục tiêu']
      ] }
    ] },
    { icon: '📏', title: 'Các chỉ số cần đo', blocks: [
      { t: 'list', items: [
        '<b>Page weight</b>: tổng dung lượng tài nguyên; trung bình toàn web tăng qua các năm, ảnh hưởng nhất tới người dùng mobile.',
        '<b>Số HTTP request</b>: gộp file để giảm số vòng đi–về tới server.',
        '<b>TTFB</b> (Time To First Byte): độ trễ trước byte đầu tiên.',
        '<b>Time to Start Render</b>: bao lâu nội dung bắt đầu hiện cho người dùng.',
        '<b>Time to Document Complete</b>: khi trang tải xong hoàn toàn.'
      ] },
      { t: 'h3', x: 'Chỉ số tổng hợp' },
      { t: 'table', head: ['Chỉ số', 'Mô tả'], rows: [
        ['<b>PageSpeed score</b>', 'Điểm của Google kèm gợi ý cải thiện'],
        ['<b>Speed Index</b>', 'Thời gian trung bình để các phần nhìn thấy được hiển thị – gần với cảm nhận của người dùng']
      ] }
    ] },
    { icon: '🤖', title: 'Tự động hóa', blocks: [
      { t: 'p', x: 'Dùng Grunt với <b>grunt-pagespeed</b> và <b>grunt-perfbudget</b> để tự động kiểm thử hiệu năng trước merge, giữ site trong ngân sách.' },
      { t: 'key', x: 'Ngân sách hiệu năng + kiểm thử tự động cho phép phát triển tính năng liên tục mà vẫn giữ hiệu năng chấp nhận được.' },
      { t: 'tip', x: 'Cùng chủ đề với sách <i>High Performance Web Sites</i>: giảm request, nén, cache… chính là cách “tiết kiệm ngân sách”.' }
    ] }
  ],
  summary: [
    'Performance budget: mục tiêu số liệu, test trước merge; vượt thì bỏ/sửa tính năng.',
    'Baseline đối thủ (tốt hơn ≥20%) hoặc trung bình (HTTP Archive).',
    'Đo page weight, số request, TTFB, start render, document complete; PageSpeed và Speed Index là chỉ số tổng hợp.',
    'Tự động hóa bằng grunt-pagespeed và grunt-perfbudget.'
  ],
  cards: [
    ['Performance budget là gì?', 'Tập giá trị mục tiêu cho các chỉ số hiệu năng, kiểm tra trước khi merge/deploy.'],
    ['Competitive baseline yêu cầu gì?', 'Tốt hơn đối thủ ít nhất 20%.'],
    ['Averaged baseline dùng gì?', 'Dịch vụ như HTTP Archive.'],
    ['TTFB là gì?', 'Time To First Byte – độ trễ trước byte đầu tiên.'],
    ['Speed Index đo gì?', 'Thời gian trung bình các phần nhìn thấy hiển thị.'],
    ['PageSpeed là gì?', 'Điểm hiệu năng của Google kèm khuyến nghị.'],
    ['Plugin Grunt tự động hóa hiệu năng?', 'grunt-pagespeed, grunt-perfbudget.'],
    ['Nếu test hiệu năng thất bại?', 'Điều chỉnh tính năng mới hoặc gỡ bớt thứ khác.']
  ],
  quiz: [
    { q: 'Competitive baseline nên tốt hơn đối thủ:', o: ['5%', '20%', '50%', '100%'], a: 1, e: 'Ít nhất 20%.' },
    { q: 'Chỉ số đo độ trễ byte đầu:', o: ['TTFB', 'Speed Index', 'PageSpeed', 'DOM'], a: 0, e: 'Time To First Byte.' },
    { q: 'Nguồn số liệu trung bình:', o: ['HTTP Archive', 'Wikipedia', 'GitHub', 'Stack Overflow'], a: 0, e: 'Averaged baseline.' },
    { q: 'Tự động hóa test hiệu năng bằng:', o: ['Grunt plugin', 'FTP', 'Excel', 'Photoshop'], a: 0, e: 'grunt-perfbudget.' },
    { q: 'Page weight ảnh hưởng nhiều nhất tới:', o: ['Người dùng mobile', 'Server', 'DNS', 'CDN'], a: 0, e: 'Băng thông hạn chế.' }
  ],
  match: [
    ['TTFB', 'Độ trễ byte đầu tiên'],
    ['Speed Index', 'Tốc độ hiển thị phần nhìn thấy'],
    ['HTTP Archive', 'Số liệu trung bình web'],
    ['grunt-perfbudget', 'Test ngân sách hiệu năng'],
    ['20%', 'Mức vượt đối thủ tối thiểu']
  ]
});
