window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 17,
  title: 'Phân tích 10 website hàng đầu',
  intro: 'Chương cuối áp dụng các quy tắc vào trang chủ của 10 site Mỹ hàng đầu (đầu năm 2007): Amazon, AOL, CNN, eBay, Google, MSN, MySpace, Wikipedia, Yahoo!, YouTube. Mục tiêu là rèn “con mắt của người làm hiệu năng”: nhìn một trang và chỉ ra ngay chỗ có thể cải thiện.',
  sections: [
    { icon: '📊', title: 'Số liệu tổng quan và YSlow', blocks: [
      { t: 'list', items: [
        '<b>YSlow</b>: công cụ do Yahoo! tạo ra, chấm điểm một trang theo các quy tắc trong sách (A tốt nhất – F kém nhất; phía sau là điểm 0–100). Điểm tổng là trung bình có trọng số của điểm từng quy tắc.',
        '<b>Khối lượng trang và thời gian phản hồi</b> tương quan mạnh (hệ số tương quan <b>0,94</b>): thêm nhiều/lớn thành phần thì chậm hơn.',
        '<b>Điểm YSlow nghịch với thời gian phản hồi</b> (hệ số <b>0,76</b>): làm theo quy tắc → nhanh hơn.',
        'Ngoại lệ: Yahoo! có YSlow A (95; Google đạt 100) và thời gian phản hồi tốt dù trang nặng thứ tư, vì đội trang chủ theo sát các thực hành này nhiều năm. Amazon điểm YSlow ổn nhưng chạy chậm do <b>khoảng 74 ảnh</b> (YSlow không trừ điểm số ảnh).'
      ] },
      { t: 'h3', x: 'Công cụ đã dùng' },
      { t: 'table', head: ['Công cụ', 'Vai trò'], rows: [
        ['IBM Page Detailer', 'Packet sniffer vẽ biểu đồ thác nước các HTTP request'],
        ['Gomez', 'Đo thời gian phản hồi (từ lúc khởi tạo request tới sự kiện onload), hàng nghìn lần trên mạng băng thông thấp 56K–512K'],
        ['Firebug', 'Phân tích JS/CSS, debug, duyệt DOM (của Joe Hewitt)'],
        ['YSlow', 'Chạy trong Firebug: duyệt DOM, dùng XMLHttpRequest lấy kích thước/thời gian/header từng thành phần để chấm điểm']
      ] },
      { t: 'warn', x: 'Các site thay đổi liên tục (trong lúc phân tích, một site đổi từ IIS sang Apache) nên trang bạn thấy hôm nay có thể khác — lý tưởng là đã làm theo các gợi ý.' }
    ] },
    { icon: '🛒', title: 'Amazon', blocks: [
      { t: 'p', x: 'Nặng 405K, 84 request. Cải thiện lớn nhất là <b>Expires xa</b> (Rule 3): chỉ 3/84 thành phần có Expires.' },
      { t: 'list', items: [
        'Chỉ có 1 stylesheet và 3 script, tải nối tiếp nhau → gộp thành 1 request (Rule 1); nên gzip và bỏ nốt khoảng trắng/chú thích.',
        '74 ảnh, 19 ảnh là nền CSS → CSS sprite.',
        'Tất cả ảnh từ một hostname nên chỉ 2 tải song song → chia ra 2 hostname để gấp đôi song song (Rule 6).'
      ] }
    ] },
    { icon: '📰', title: 'CNN – trang nặng nhất', blocks: [
      { t: 'p', x: 'Nặng nhất: 502K và <b>198 HTTP request</b>. Nguyên nhân chính là <b>dùng ảnh để hiển thị chữ</b> (ví dụ ảnh “Top Stories”): hơn 70 ảnh chỉ chứa chữ. Đổi sang text là tối ưu lớn nhất; còn khó dịch (i18n) vì mỗi ngôn ngữ cần bộ ảnh riêng.' },
      { t: 'list', items: [
        '16 ảnh nền CSS → gộp sprite, bớt ≥10 request; 10 file JS → gộp, bớt 9 request.',
        'Hơn 140 thành phần không có Expires (Rule 3); stylesheet (87K) và script (114K) không gzip (Rule 4), đa số script chưa minify (Rule 10).',
        'Hơn 180 thành phần dùng ETag mặc định của Apache → khó nhận 304 (Rule 13).'
      ] }
    ] },
    { icon: '🏪', title: 'eBay', blocks: [
      { t: 'p', x: 'YSlow gần B; các vấn đề chính ở Rule 1, 3, 9, 13.' },
      { t: 'list', items: [
        '<b>Rule 1:</b> 10 script + 3 stylesheet → gộp script đầu trang và script cuối trang (10 → 5) và gộp 3 stylesheet.',
        '<b>Rule 3:</b> một script và một stylesheet chỉ có Expires 9 giờ, dù ít sửa (3 ngày, 24 ngày); cần Expires xa. Còn 5 IFrame (chèn quảng cáo) thiếu Expires.',
        '<b>Rule 9:</b> dùng tới 9 domain khác nhau → nhiều DNS lookup.'
      ] }
    ] },
    { icon: '🔎', title: 'Google, Yahoo! và những điều nhận ra ở site khác', blocks: [
      { t: 'table', head: ['Site', 'Điểm đáng nhớ'], rows: [
        ['<b>Google</b>', 'Trang tối giản: chỉ một DNS lookup, rất ít thành phần, YSlow 100. Hiện thực hoá Rule 9 tốt nhất.'],
        ['<b>Yahoo!</b>', 'Nặng thứ 4 nhưng nhanh thứ 2. Dùng 4 CSS sprite từ lâu, chia thành phần ra nhiều hostname (yimg.com) và cố tình dùng domain khác yahoo.com để request không mang cookie. Lỗi nhỏ: sprite icons_1.5.gif bị tải hai lần vì hai URL khác hostname (có khả năng nhầm biến template).'],
        ['<b>AOL</b>', 'Nửa đầu tải song song cao, nửa sau tải tuần tự; chuyển xuống HTTP/1.0 → thời gian tải tăng.'],
        ['<b>MSN</b>', 'Có người lo hiệu năng (dùng deflate); nhưng ETag của IIS khác nhau giữa các server (ví dụ blu.css).'],
        ['<b>MySpace</b>', 'Chỉ một co-location nên chọn TTL DNS dài để giảm lookup.'],
        ['<b>YouTube</b>', 'Có script trùng (Rule 12) nhưng đã sửa cú pháp ETag để khỏi gây vấn đề giữa các server.'],
        ['<b>Wikipedia</b>', 'Cũng được phân tích trong sách theo các quy tắc; có thể xem chi tiết ở sách gốc.']
      ] },
      { t: 'tip', x: 'Cách học tốt nhất: mở Firebug + YSlow, phân tích trang bạn yêu thích, đối chiếu với từng quy tắc theo thứ tự ưu tiên.' }
    ] }
  ],
  summary: [
    'Khối lượng trang tương quan 0,94 với thời gian phản hồi; điểm YSlow tương quan 0,76 (nghịch).',
    'Các lỗi phổ biến: thiếu Expires, nhiều request nhỏ, không gzip, ETag mặc định, quá nhiều domain, ảnh chứa chữ.',
    'Công cụ: IBM Page Detailer, Gomez, Firebug, YSlow.',
    'Google (YSlow 100) và Yahoo! (95) là hình mẫu; CNN nặng nhất (502K, 198 request).'
  ],
  cards: [
    ['YSlow là gì?', 'Công cụ của Yahoo! chấm điểm trang theo các quy tắc hiệu năng (A–F, 0–100).'],
    ['Tương quan giữa page weight và response time?', '0,94.'],
    ['Tương quan giữa inverse YSlow và response time?', '0,76.'],
    ['Điểm YSlow của Google và Yahoo!?', 'Google 100 (A), Yahoo! 95 (A).'],
    ['Vì sao Amazon điểm YSlow tốt mà chậm?', 'Có khoảng 74 ảnh – YSlow không trừ điểm số ảnh.'],
    ['Amazon: bao nhiêu thành phần có Expires?', '3 trên 84.'],
    ['CNN nặng bao nhiêu và bao nhiêu request?', '502K và 198 request.'],
    ['Vấn đề lớn nhất của CNN?', 'Hơn 70 ảnh chỉ chứa chữ.'],
    ['eBay dùng bao nhiêu domain?', '9 domain khác nhau.'],
    ['Điểm hay của Yahoo! về cookie?', 'Dùng yimg.com khác yahoo.com nên request thành phần không mang cookie.'],
    ['Ai bị lỗi script trùng?', 'CNN và YouTube (khảo sát Rule 12).'],
    ['Công cụ vẽ biểu đồ thác nước trong sách?', 'IBM Page Detailer.']
  ],
  quiz: [
    { q: 'Điểm YSlow dựa trên:', o: ['Số người dùng', 'Mức tuân theo các quy tắc hiệu năng', 'Doanh thu', 'Số server'], a: 1, e: 'Trung bình có trọng số của từng quy tắc.' },
    { q: 'Trang nặng nhất trong 10 site là:', o: ['Amazon', 'CNN', 'Google', 'Yahoo!'], a: 1, e: '502K và 198 request.' },
    { q: 'Cải thiện lớn nhất cho CNN là:', o: ['Thay ảnh chứa chữ bằng text', 'Thêm quảng cáo', 'Dùng Flash', 'Tắt cache'], a: 0, e: 'Giảm hàng chục request.' },
    { q: 'Vì sao dùng domain riêng (yimg.com) cho tài nguyên?', o: ['Đẹp hơn', 'Tránh gửi cookie của yahoo.com', 'Tăng bảo mật', 'Bắt buộc'], a: 1, e: 'Giảm kích thước request.' },
    { q: 'Điểm yếu của eBay về DNS là:', o: ['Chỉ 1 domain', '9 domain khác nhau', 'Không có DNS', 'TTL quá dài'], a: 1, e: 'Rule 9.' },
    { q: 'Công cụ đo thời gian phản hồi dùng trong sách:', o: ['Gomez', 'Photoshop', 'Wireshark', 'Excel'], a: 0, e: 'Đo hàng nghìn lần ở mạng 56K–512K.' }
  ],
  match: [
    ['YSlow', 'Chấm điểm theo các quy tắc'],
    ['Firebug', 'Công cụ debug/phân tích của Joe Hewitt'],
    ['Gomez', 'Dịch vụ đo thời gian phản hồi'],
    ['CNN', '502K, 198 request, ảnh chứa chữ'],
    ['Amazon', '74 ảnh, 3/84 có Expires'],
    ['Google', 'YSlow 100, ít thành phần']
  ]
});
