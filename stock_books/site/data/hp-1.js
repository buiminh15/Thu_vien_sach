// "High Performance Web Sites" (Steve Souders, O'Reilly 2007) – bản tiếng Việt dễ hiểu.
// Chương 1 = Chương A của sách; Chương 2 = Chương B; Chương 3–16 = Rule 1–14; Chương 17 = Chương 15.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 1,
  title: 'Tầm quan trọng của hiệu năng frontend',
  intro: 'Phần lớn dân lập trình web quen tối ưu backend (CSDL, bộ nhớ, trình biên dịch). Nhưng đo thực tế thì chỉ 10–20% thời gian chờ của người dùng là để tải file HTML; 80–90% còn lại nằm ở việc tải ảnh, script, CSS… Chương này đặt ra “Quy tắc vàng về hiệu năng” và lý do vì sao nên nhắm vào frontend trước.',
  sections: [
    { icon: '⏱️', title: 'Thời gian của người dùng đi đâu?', blocks: [
      { t: 'p', x: 'Tác giả mở trang chủ Yahoo! bằng Internet Explorer và vẽ biểu đồ “thác nước” (mỗi thanh ngang là một HTTP request). Kết quả:' },
      { t: 'table', head: ['Tình huống', 'Phần của file HTML', 'Phần còn lại'], rows: [
        ['<b>Cache rỗng</b> (lần đầu vào)', '~5% tổng thời gian', '~95% chờ tải ảnh, script, CSS và phân tích chúng'],
        ['<b>Cache đã có</b> (vào lại)', '~12% tổng thời gian', 'Phần lớn thành phần lấy từ cache; còn vài request chưa cache được (redirect, ảnh tin tức, quảng cáo…)']
      ] },
      { t: 'p', x: 'Ở lần vào lại có 5 request: 1 <b>redirect</b> (302 không có thông tin cache nên trình duyệt phải hỏi lại mỗi lần), 3 ảnh mới (ảnh tin/quảng cáo hay đổi) và 1 <b>conditional GET</b> cho ảnh đã cache nhưng header buộc phải kiểm tra lại.' },
      { t: 'h3', x: 'Ba quan sát từ biểu đồ thác nước' },
      { t: 'list', items: [
        'Lần vào lại có <b>khoảng trống</b> ngay sau request HTML: trình duyệt đang phân tích HTML/JS/CSS và lấy thành phần từ cache.',
        'Số request chạy <b>song song</b> khác nhau (3 so với 6–7) vì phụ thuộc số hostname và việc dùng HTTP/1.0 hay 1.1 (xem Rule 6).',
        'Trong lúc <b>tải script</b> thì không có request song song, vì trình duyệt thường chặn các request khác (xem Rule 6).'
      ] },
      { t: 'key', x: 'Dễ thấy thời gian <b>không</b> nằm ở đâu: không nằm ở việc tải HTML (kể cả xử lý backend). Vì vậy tối ưu frontend mới là chỗ cần tập trung.' }
    ] },
    { icon: '🏆', title: 'Quy tắc vàng về hiệu năng', blocks: [
      { t: 'key', x: '<b>Performance Golden Rule:</b> chỉ 10–20% thời gian phản hồi (cảm nhận bởi người dùng) dùng để tải tài liệu HTML. 80–90% còn lại dùng để tải <i>tất cả thành phần</i> trong trang.' },
      { t: 'p', x: 'Tác giả đo 10 website lớn của Mỹ (Alexa). Tỷ lệ thời gian dành cho HTML đa số dưới 20%:' },
      { t: 'table', head: ['Site', 'Cache rỗng', 'Cache đã có'], rows: [
        ['Amazon', '6%', '14%'], ['CNN', '18%', '14%'], ['eBay', '19%', '8%'], ['Google', '2%', '8%'],
        ['MSN', '14%', '36%'], ['MySpace', '3%', '5%'], ['Wikipedia', '4%', '14%'], ['Yahoo!', '20%', '12%'], ['YouTube', '5%', '12%']
      ] },
      { t: 'tip', x: 'Ngoại lệ đáng chú ý là MSN lần vào lại (36%). Google khi cache đã có chỉ cần 1 request HTML + 1 ảnh beacon vì chỉ có 6 thành phần và gần như tất cả được cache.' }
    ] },
    { icon: '🎯', title: 'Vì sao nên tối ưu frontend trước?', blocks: [
      { t: 'steps', items: [
        '<b>Còn nhiều chỗ để cải thiện:</b> giảm thời gian backend đi một nửa chỉ giảm tổng thời gian khoảng 5–10%; giảm thời gian frontend đi một nửa giảm được khoảng 40–45%.',
        '<b>Ít tốn công hơn:</b> backend cần thiết kế lại kiến trúc, tối ưu code, đổi phần cứng, phân tán CSDL – mất vài tuần đến vài tháng. Frontend chủ yếu là đổi cấu hình server, sắp xếp lại chỗ đặt script/CSS, gộp file – chỉ mất vài giờ đến vài ngày.',
        '<b>Đã được chứng minh:</b> hơn 50 nhóm ở Yahoo! giảm thời gian phản hồi bằng các quy tắc này, nhiều nhóm giảm từ 25% trở lên.'
      ] },
      { t: 'warn', x: 'Nếu làm đủ các quy tắc áp dụng được cho site của bạn, trang thường nhanh hơn 25–50%. Không phải quy tắc nào cũng hợp với mọi site (ví dụ Rule 2 – CDN – phù hợp site thương mại hơn trang cá nhân).' },
      { t: 'p', x: 'Các quy tắc được xếp theo thứ tự ưu tiên chung: Rule 1 (giảm số request) là quan trọng nhất vì giúp cả lần vào đầu tiên và các lần sau.' }
    ] }
  ],
  summary: [
    'Chỉ 10–20% thời gian chờ là tải HTML; 80–90% là tải các thành phần (ảnh, script, CSS, Flash…).',
    'Giảm frontend một nửa → giảm ~40–45% tổng thời gian; giảm backend một nửa → chỉ ~5–10%.',
    'Tối ưu frontend nhanh (giờ/ngày), rẻ và đã được chứng minh (hơn 50 nhóm Yahoo!, thường giảm ≥25%).',
    'Có 14 quy tắc, xếp theo mức ưu tiên chung; làm đủ có thể nhanh hơn 25–50%.'
  ],
  cards: [
    ['Phát biểu Quy tắc vàng về hiệu năng?', 'Chỉ 10–20% thời gian phản hồi là tải HTML; 80–90% là tải mọi thành phần trong trang.'],
    ['Trang chủ Yahoo! lần đầu (cache rỗng): HTML chiếm bao nhiêu?', 'Khoảng 5% tổng thời gian.'],
    ['Cache đã có: HTML chiếm khoảng?', 'Khoảng 12%.'],
    ['Giảm backend một nửa thì tổng thời gian giảm?', 'Chỉ khoảng 5–10%.'],
    ['Giảm frontend một nửa thì tổng thời gian giảm?', 'Khoảng 40–45%.'],
    ['Vì sao frontend nhanh làm hơn backend?', 'Chủ yếu là chỉnh cấu hình server, vị trí script/CSS, gộp file – giờ hoặc ngày thay vì tuần/tháng.'],
    ['Bao nhiêu nhóm Yahoo! đã áp dụng thành công?', 'Hơn 50 nhóm, nhiều nhóm giảm ≥25% thời gian phản hồi.'],
    ['Làm theo mọi quy tắc phù hợp thì kỳ vọng?', 'Trang nhanh hơn 25–50%.'],
    ['Tại sao lần vào lại Google có HTML chiếm tỉ lệ cao?', 'Google chỉ có 6 thành phần và gần như tất cả đã cache; còn lại HTML và 1 ảnh beacon.'],
    ['Vì sao request script thường làm mất song song?', 'Trình duyệt chặn các request khác trong lúc tải script.'],
    ['Quy tắc nào là quan trọng nhất?', 'Rule 1: giảm số HTTP request.'],
    ['Redirect 302 không có header cache sẽ?', 'Bị tải lại ở mỗi lần xem trang vì trình duyệt không cache được.']
  ],
  quiz: [
    { q: 'Theo Quy tắc vàng, phần thời gian tải tài liệu HTML là:', o: ['50–60%', '30–40%', '10–20%', '< 1%'], a: 2, e: 'Còn 80–90% là các thành phần.' },
    { q: 'Giảm một nửa thời gian frontend sẽ giảm tổng thời gian khoảng:', o: ['5–10%', '40–45%', '90%', '0%'], a: 1, e: 'Vì frontend chiếm phần lớn.' },
    { q: 'Điều nào KHÔNG phải lý do nên ưu tiên frontend?', o: ['Có nhiều tiềm năng cải thiện', 'Tốn ít thời gian hơn', 'Đã được chứng minh', 'Không cần đo đạc gì cả'], a: 3, e: 'Luôn cần đo (profile) trước khi tối ưu.' },
    { q: 'Request nào của Yahoo! lần vào lại là “conditional GET”?', o: ['Ảnh đã cache nhưng phải kiểm tra lại', 'Redirect', 'Ảnh quảng cáo mới', 'Script'], a: 0, e: 'Header buộc trình duyệt xác nhận bản cache.' },
    { q: 'Trong lúc tải script, trình duyệt thường:', o: ['Tải song song mọi thứ', 'Chặn các request khác', 'Bỏ qua script', 'Chuyển sang HTTP/2'], a: 1, e: 'Xem chi tiết ở Rule 6.' },
    { q: 'Rule 2 (CDN) phù hợp nhất với:', o: ['Site thương mại có người dùng khắp nơi', 'Trang cá nhân nhỏ', 'Site không có ảnh', 'Chỉ intranet'], a: 0, e: 'Site nhỏ khó chi trả CDN.' },
    { q: 'Tác giả kỳ vọng làm đủ quy tắc áp dụng được sẽ nhanh hơn:', o: ['1–5%', '25–50%', '80–90%', '200%'], a: 1, e: 'Trong phạm vi sách này.' }
  ],
  match: [
    ['10–20%', 'Phần thời gian dành cho HTML'],
    ['80–90%', 'Phần thời gian dành cho các thành phần'],
    ['Biểu đồ thác nước', 'Mỗi thanh là một HTTP request'],
    ['Cache rỗng', 'Chưa có thành phần nào của trang trong cache'],
    ['Cache đã có (primed)', 'Mọi thành phần của trang đã được lưu'],
    ['Rule 1', 'Quy tắc ưu tiên cao nhất: giảm số request']
  ]
});
