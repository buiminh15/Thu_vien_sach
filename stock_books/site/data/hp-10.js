window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 10,
  title: 'Rule 8: Tách JavaScript và CSS ra file ngoài',
  intro: 'Trước khi bàn CDN, Expires hay gzip cho file ngoài, phải hỏi câu cơ bản hơn: nên đặt JavaScript/CSS inline trong HTML hay trong file ngoài? Câu trả lời tuỳ vào tần suất file ngoài được cache so với số lần tài liệu HTML được yêu cầu. Thường file ngoài thắng — trừ trang chủ.',
  sections: [
    { icon: '⚖️', title: 'Inline nhanh hơn, nhưng chỉ trong thí nghiệm', blocks: [
      { t: 'p', x: 'Hai ví dụ cùng tổng 87K: <b>inline</b> (một HTML 87K) và <b>file ngoài</b> (HTML 7K + CSS 59K + 3 script 1K, 11K, 9K). Inline nhanh hơn <b>30–50%</b>, vì chỉ có 1 request thay vì 5 (dù file ngoài được lợi nhờ tải song song).' },
      { t: 'key', x: 'Nhưng ngoài đời, file ngoài thường nhanh hơn vì chúng được <b>cache</b>. HTML động thường không cache, nên JS/CSS inline phải tải lại mỗi lần HTML được yêu cầu. File ngoài (Expires xa) làm HTML nhỏ đi mà không thêm request ở các lần sau.' },
      { t: 'p', x: 'Yếu tố then chốt: <b>tần suất JS/CSS ngoài được cache so với số tài liệu HTML được yêu cầu</b>. Ba số đo giúp ước lượng: số page view mỗi người dùng, tỷ lệ cache rỗng/đã có, và mức tái sử dụng thành phần giữa các trang.' }
    ] },
    { icon: '📊', title: 'Ba số đo để quyết định', blocks: [
      { t: 'table', head: ['Số đo', 'Nghiêng về inline khi…', 'Nghiêng về file ngoài khi…'], rows: [
        ['Page view mỗi người dùng', 'Ít (ví dụ 1 lần/tháng — cache đã bị đẩy khỏi trình duyệt)', 'Nhiều page view mỗi phiên/tháng'],
        ['Cache rỗng vs đã có', 'Tỷ lệ cache đã có thấp', 'Cao (Yahoo!: 40–60% người dùng/ngày, 75–85% page view có cache)'],
        ['Tái sử dụng thành phần', 'Mỗi trang dùng JS/CSS khác nhau', 'Mọi trang dùng chung JS/CSS']
      ] },
      { t: 'h3', x: 'Ranh giới đóng gói file ngoài' },
      { t: 'list', items: [
        '<b>Mỗi trang một bộ file</b>: nhiều request hơn; hợp site mà người dùng thường chỉ xem một trang mỗi phiên.',
        '<b>Một file gộp cho tất cả</b>: chỉ 1 request nhưng tải thừa ở lần đầu và cập nhật một chỗ làm hỏng cache của mọi người; hợp site có nhiều phiên/người dùng/tháng.',
        '<b>Thỏa hiệp</b>: phân vài loại trang rồi tạo một script + một stylesheet cho mỗi loại — khó bảo trì hơn 1 file nhưng dễ hơn mỗi trang một bộ và ít tải thừa.'
      ] },
      { t: 'tip', x: 'Nhiều site nằm ở giữa: 5–15 page view/người dùng/tháng, 2–5 page view/phiên, tái sử dụng khá nhiều. Với các site này, giải pháp thường là <b>file ngoài + Expires xa</b> — nhanh nhất.' }
    ] },
    { icon: '🏠', title: 'Ngoại lệ: trang chủ', blocks: [
      { t: 'p', x: 'Trang chủ (trang mặc định của trình duyệt, như Yahoo!, My Yahoo!) thường nên <b>inline</b>:' },
      { t: 'list', items: [
        'Nhiều lượt xem mỗi tháng, nhưng thường chỉ <b>1 page view mỗi phiên</b>.',
        'Tỷ lệ cache đã có có thể thấp: nhiều người xóa cache khi đóng trình duyệt vì lý do bảo mật.',
        'Tái sử dụng thấp: nhiều người chỉ xem đúng trang chủ.',
        'Yêu cầu phản hồi rất nhanh, kể cả cache rỗng — nhất là khi chiến dịch kêu gọi đặt làm trang chủ.'
      ] },
      { t: 'warn', x: 'Không có một đáp án chung cho mọi trang chủ — phải đánh giá các yếu tố trên cho trang cụ thể.' }
    ] },
    { icon: '🪄', title: 'Hưởng lợi cả hai: post-onload download và inline động', blocks: [
      { t: 'h3', x: 'Post-onload download' },
      { t: 'p', x: 'Với trang chủ dẫn tới nhiều trang sau (như Yahoo! Mail): inline JS/CSS của trang chủ nhưng, sau sự kiện <code>onload</code> (chờ khoảng 1 giây để trang đã render xong), tạo động các phần tử <code>script</code> và <code>link</code> để tải file ngoài vào cache cho các trang tiếp theo.' },
      { t: 'warn', x: 'JS/CSS bị nạp hai lần (inline rồi ngoài), nên code phải chịu được “định nghĩa kép”: script có thể định nghĩa nhưng không được thực thi gì người dùng thấy; CSS dùng đơn vị tương đối (%, em) có thể sai khi áp hai lần. IFrame ẩn là cách nâng cao hơn.' },
      { t: 'h3', x: 'Inline động (dynamic inlining)' },
      { t: 'p', x: 'Server không biết trình duyệt có component trong cache hay không, nhưng có thể dùng <b>cookie</b> làm chỉ báo: khi trả component, đặt kèm cookie phiên. Lần sau, nếu <b>không có cookie</b> → inline và kích hoạt post-onload download (đặt cookie); <b>có cookie</b> → nhiều khả năng đã cache → dùng file ngoài.' },
      { t: 'tip', x: 'Cách này “dễ tính”: nếu cookie và cache lệch nhau, trang vẫn chạy, chỉ kém tối ưu. Cookie phiên nghiêng về inline (đóng mở lại trình duyệt mất cookie dù file còn cache); cookie sống vài giờ/ngày thì nghiêng về dùng file ngoài.' }
    ] }
  ],
  summary: [
    'Inline nhanh hơn 30–50% trong thí nghiệm do ít request, nhưng file ngoài được cache nên thường thắng ngoài đời.',
    'Quyết định theo: page view/người dùng, tỷ lệ cache đã có, mức tái sử dụng thành phần.',
    'Đa số site: file ngoài + Expires xa; chia vài nhóm trang thay vì mỗi trang một file hoặc một file khổng lồ.',
    'Trang chủ thường nên inline; có thể kết hợp post-onload download.',
    'Inline động dùng cookie để đoán tình trạng cache.'
  ],
  cards: [
    ['Rule 8 nói gì?', 'Thường nên đặt JS và CSS vào file ngoài thay vì inline.'],
    ['Vì sao inline nhanh hơn trong thí nghiệm?', 'Chỉ 1 request thay vì 5 (cùng 87K).'],
    ['Vì sao file ngoài thường thắng ngoài đời?', 'Được cache, nên HTML nhỏ đi và không tốn request ở lần sau.'],
    ['Yếu tố then chốt để chọn?', 'Tần suất JS/CSS ngoài được cache so với số lần HTML được yêu cầu.'],
    ['Ba số đo hỗ trợ quyết định?', 'Page view/người dùng, cache rỗng vs đã có, tái sử dụng thành phần.'],
    ['Khi nào chọn inline?', 'Ít page view/người dùng, cache đã có thấp, ít tái sử dụng — như nhiều trang chủ.'],
    ['Cách thỏa hiệp khi đóng gói file?', 'Phân vài loại trang, mỗi loại một script + một stylesheet.'],
    ['Post-onload download là gì?', 'Inline cho trang chủ, rồi sau onload tải động file ngoài để lấp cache cho trang sau.'],
    ['Rủi ro của post-onload download?', 'JS/CSS nạp hai lần nên phải chịu được định nghĩa kép.'],
    ['Inline động dùng gì làm chỉ báo cache?', 'Cookie.'],
    ['Cookie vắng mặt thì server làm gì?', 'Inline và kích hoạt post-onload download (đặt cookie).'],
    ['Vì sao nhiều trang chủ có cache đã có thấp?', 'Nhiều người xóa cache khi đóng trình duyệt.']
  ],
  quiz: [
    { q: 'Ngoài đời, JS/CSS ngoài nhanh hơn inline chủ yếu nhờ:', o: ['Nén tốt hơn', 'Được cache bởi trình duyệt', 'Ít byte hơn', 'Dùng CDN'], a: 1, e: 'Thí nghiệm không phản ánh lợi ích cache.' },
    { q: 'Site nào hợp với inline hơn?', o: ['Nhiều page view mỗi phiên', 'Trang chủ chỉ có 1 page view mỗi phiên', 'Mọi trang dùng chung JS/CSS', 'Nhiều lượt vào lại hằng ngày'], a: 1, e: 'Tái sử dụng thấp, cache đã có thấp.' },
    { q: 'Một file gộp mọi thứ có nhược điểm gì?', o: ['Nhiều request', 'Tải thừa lần đầu; sửa đâu cũng hỏng cache toàn bộ', 'Không nén được', 'Không minify được'], a: 1, e: 'Cần cân bằng.' },
    { q: 'Post-onload download tải file ngoài vào lúc nào?', o: ['Trước khi render', 'Sau sự kiện onload (khoảng 1 giây)', 'Khi bấm link', 'Không bao giờ'], a: 1, e: 'Để không làm chậm trang chủ.' },
    { q: 'Inline động dựa vào gì để đoán cache?', o: ['User-Agent', 'Cookie', 'IP', 'ETag'], a: 1, e: 'Server không nhìn được cache trực tiếp.' },
    { q: 'Ở Yahoo!, % lượt xem trang có cache đã có là:', o: ['5–10%', '40–60%', '75–85%', '100%'], a: 2, e: '40–60% là tỷ lệ người dùng duy nhất.' }
  ],
  match: [
    ['Inline', 'Ít request nhưng không cache riêng'],
    ['File ngoài + Expires xa', 'Thường nhanh nhất cho site trung bình'],
    ['Post-onload download', 'Tải trước file ngoài sau khi trang chủ xong'],
    ['Dynamic inlining', 'Dùng cookie để chọn inline hay ngoài'],
    ['Trang chủ', 'Ngoại lệ hay nên inline'],
    ['30–50%', 'Mức inline nhanh hơn trong thí nghiệm']
  ]
});
