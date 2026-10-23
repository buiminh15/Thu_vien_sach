window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 16,
  title: 'Rule 14: Làm cho Ajax cacheable',
  intro: 'Các quy tắc có áp dụng cho ứng dụng Web 2.0 không? Có — và Rule 14 là quy tắc đầu tiên sinh ra từ việc làm việc với Web 2.0 ở Yahoo!. Nội dung: “asynchronous” không có nghĩa “tức thì”; hãy áp dụng các quy tắc, nhất là Rule 3 (cache), cho các request Ajax.',
  sections: [
    { icon: '🌐', title: 'Web 2.0, DHTML, Ajax', blocks: [
      { t: 'list', items: [
        '<b>Web 2.0</b> (O’Reilly dùng lần đầu 2004): thiên về khía cạnh xã hội/kinh doanh — wiki, blog, podcast; giao diện giàu như ứng dụng; tổng hợp thông tin từ nhiều web service.',
        '<b>DHTML</b>: trang đổi hiển thị sau khi tải bằng JavaScript + CSS tác động vào DOM (menu thả, cây mở/đóng…).',
        '<b>Ajax</b> (Jesse James Garrett, 2005): Asynchronous JavaScript and XML (nay còn JSON); không phải một công nghệ duy nhất mà là bộ gồm JavaScript, CSS, DOM và lấy dữ liệu bất đồng bộ. Mục tiêu: phá cách tương tác “dừng–chạy”, chỉ cập nhật phần cần thiết.'
      ] },
      { t: 'timeline', items: [['1996', 'IFrame có trong IE 3 – tải nội dung bất đồng bộ'], ['1999', 'XMLHTTP trong IE 5 (lõi của Ajax)'], ['2002', 'XMLHttpRequest trong Mozilla'], ['4/2006', 'W3C công bố bản đề xuất đặc tả XMLHttpRequest đầu tiên']] },
      { t: 'tip', x: 'Tác giả khuyên dùng YUI Connection Manager để xử lý khác biệt trình duyệt của XMLHttpRequest.' }
    ] },
    { icon: '⏳', title: 'Bất đồng bộ ≠ tức thì', blocks: [
      { t: 'warn', x: 'Dùng Ajax không đảm bảo người dùng khỏi phải chờ. Hãy hình dung Google Maps/Yahoo Maps trên dial-up. UI vẫn phản hồi và không phải tải lại cả trang, nhưng với request chủ động người dùng vẫn ngồi chờ kết quả.' },
      { t: 'table', head: ['Loại', 'Ý nghĩa', 'Ví dụ'], rows: [
        ['<b>Passive</b> (bị động)', 'Gửi trước vì dự đoán sẽ cần', 'Tải trước sổ địa chỉ trong web mail'],
        ['<b>Active</b> (chủ động)', 'Gửi theo hành động hiện tại của người dùng', 'Tìm thư theo tiêu chí tìm kiếm; xem thư thứ tư']
      ] },
      { t: 'p', x: 'Cách tìm các request Ajax chủ động cần tối ưu: bật <b>packet sniffer</b> (tác giả thích IBM Page Detailer), dùng ứng dụng và quan sát. Các kỹ thuật tối ưu cho request chủ động cũng áp dụng cho request bị động.' }
    ] },
    { icon: '📬', title: 'Ví dụ: Yahoo! Mail Ajax', blocks: [
      { t: 'p', x: 'Khi khởi động, Yahoo! Mail Ajax tải nội dung <b>3 thư đầu</b> — một request bị động thông minh vì rất có thể người dùng sẽ mở. Muốn xem thư thứ 4 thì có request chủ động và người dùng phải chờ.' },
      { t: 'warn', x: 'Nếu rời đi rồi quay lại, bấm thư thứ 4 lần nữa, <b>request y hệt</b> lại được gửi, vì phản hồi không được cache: nó có <code>Cache-Control: no-store</code> và <code>Expires</code> trong quá khứ — dù nội dung hộp thư không đổi.' },
      { t: 'key', x: 'Thay các header đó bằng <b>Expires xa</b> thì phản hồi được cache và đọc từ đĩa — nhanh hơn. Có vẻ lạ vì đó là dữ liệu riêng của một người, nhưng người này có thể lặp lại đúng request nhiều lần trong ngày/tuần.' },
      { t: 'p', x: 'Để làm được, phải phản ánh tính cá nhân và động của dữ liệu trong <b>URL (query string)</b>: thêm user id và ID thư duy nhất toàn cục. Không dùng chỉ số tương đối (“thứ 4”) vì thứ tự hộp thư luôn đổi.' },
      { t: 'p', x: '<code>/ws/mail/v1/formrpc?m=GetMessage&amp;yid=steve_souders&amp;msgid=001234</code>' },
      { t: 'warn', x: 'Về riêng tư: <code>Cache-Control: no-store</code> thường dùng cho dữ liệu nhạy cảm (response không ghi ra đĩa), nhưng đặc tả HTTP cảnh báo không nên dựa hẳn vào cơ chế này để bảo mật. Hãy cân nhắc dữ liệu nào thực sự nhạy cảm.' }
    ] },
    { icon: '🧭', title: 'Các quy tắc khác cũng áp dụng cho Ajax', blocks: [
      { t: 'list', items: [
        'Rule 3 (Expires) là quan trọng nhất — nên tác giả tách thành quy tắc riêng cho Ajax vì Ajax mới và khác.',
        'Rule 4: gzip phản hồi Ajax (XML/JSON là văn bản).',
        'Rule 9: giảm DNS lookup; Rule 10: minify JS; Rule 11: tránh redirect; Rule 13: cấu hình ETag.',
        'Ví dụ khác: GET thay vì POST khi có thể (request GET có thể cache).'
      ] }
    ] }
  ],
  summary: [
    'Các quy tắc hiệu năng áp dụng cho Web 2.0; Rule 14 đặc biệt cho Ajax.',
    'Bất đồng bộ không có nghĩa tức thì: request chủ động vẫn khiến người dùng chờ.',
    'Làm phản hồi Ajax cacheable bằng Expires xa và URL phản ánh người dùng + ID duy nhất.',
    'Dùng packet sniffer để tìm request Ajax chủ động; áp dụng gzip, minify, tránh redirect, bỏ ETag.'
  ],
  cards: [
    ['Ajax viết tắt?', 'Asynchronous JavaScript and XML.'],
    ['Ai đặt tên Ajax và năm nào?', 'Jesse James Garrett, 2005.'],
    ['Trái tim của Ajax?', 'XMLHttpRequest.'],
    ['Request Ajax passive là gì?', 'Gửi trước để chuẩn bị cho nhu cầu sau.'],
    ['Request Ajax active là gì?', 'Gửi theo hành động hiện tại của người dùng; người dùng thường phải chờ.'],
    ['Công cụ tìm request Ajax?', 'Packet sniffer (IBM Page Detailer).'],
    ['Rule 14 chủ yếu là áp dụng rule nào?', 'Rule 3 – Expires xa cho phản hồi Ajax.'],
    ['Vì sao phản hồi Yahoo! Mail không cache?', 'Có Cache-Control: no-store và Expires trong quá khứ.'],
    ['Làm sao cache được dữ liệu cá nhân?', 'Đưa user id và ID thư duy nhất vào query string.'],
    ['Vì sao không dùng “msg=4”?', 'Vị trí thư trong hộp thay đổi liên tục.'],
    ['Cảnh báo về no-store?', 'Đặc tả cảnh báo không nên tin hoàn toàn vào nó để bảo mật.'],
    ['Thư viện được khuyên dùng cho Ajax?', 'YUI Connection Manager.']
  ],
  quiz: [
    { q: 'Điều đúng về Ajax:', o: ['Luôn tức thì', 'Bất đồng bộ nhưng người dùng vẫn có thể chờ', 'Chỉ cho Firefox', 'Không cần HTTP'], a: 1, e: 'Asynchronous ≠ instantaneous.' },
    { q: 'Request nào là passive?', o: ['Tìm kiếm thư', 'Tải trước sổ địa chỉ', 'Bấm vào thư thứ 4', 'Gửi form'], a: 1, e: 'Dự đoán nhu cầu.' },
    { q: 'Cách làm Ajax response cacheable:', o: ['Cache-Control: no-store', 'Expires xa + URL duy nhất', 'POST luôn', 'Redirect'], a: 1, e: 'Query string phản ánh người dùng/ID thư.' },
    { q: 'Vì sao dùng msgid thay vì chỉ số thứ tự?', o: ['Dễ đọc', 'Thứ tự thay đổi liên tục', 'Nhỏ hơn', 'Bảo mật hơn'], a: 1, e: 'ID bất biến mới cache đúng.' },
    { q: 'Ai đưa ra tên “Ajax”?', o: ['Steve Souders', 'Tim O’Reilly', 'Jesse James Garrett', 'Crockford'], a: 2, e: 'Năm 2005.' },
    { q: 'Công cụ để thấy request Ajax:', o: ['Packet sniffer', 'Photoshop', 'Compiler', 'DNS'], a: 0, e: 'IBM Page Detailer.' }
  ],
  match: [
    ['Passive Ajax', 'Tải trước vì dự đoán nhu cầu'],
    ['Active Ajax', 'Phản hồi cho hành động của người dùng'],
    ['XMLHttpRequest', 'Lõi của Ajax'],
    ['no-store', 'Header khiến phản hồi không cache'],
    ['msgid=…', 'ID duy nhất để cache đúng thư'],
    ['IBM Page Detailer', 'Packet sniffer tác giả ưa dùng']
  ]
});
