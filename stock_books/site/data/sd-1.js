// "System Design Interview Roadmap" (SDIR) – bản tiếng Việt dễ hiểu – Chương 1–3.
// Quy ước: khối "💡 Nói dễ hiểu" = giải thích đời thường; khối "📚 Bổ sung ngoài sách" = kiến thức chung bổ sung (không có trong PDF).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.sysdesign = BOOK_DATA.sysdesign || { chapters: [] };
BOOK_DATA.sysdesign.chapters.push(

{
  n: 1,
  title: 'Phỏng vấn thiết kế hệ thống: lộ trình 5 bước',
  intro: 'Thiết kế hệ thống là vẽ “bản thiết kế tòa nhà” cho một ứng dụng lớn: cần những thành phần nào, nối với nhau ra sao, chịu được bao nhiêu người dùng. Khác với bài code (kiểm tra thuật toán), phỏng vấn kiểu này kiểm tra tư duy kiến trúc và khả năng đánh đổi.',
  sections: [
    { icon: '🧭', title: 'Vì sao có vòng phỏng vấn này?', blocks: [
      { t: 'p', x: 'Nhà tuyển dụng dùng nó để xem bạn: ra quyết định kỹ thuật có tác động kinh doanh, xử lý yêu cầu mơ hồ, giao tiếp ý tưởng phức tạp, và có kinh nghiệm với hệ thống lớn, phân tán.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> đề bài như “thiết kế Instagram” cố tình mơ hồ — giống khách hàng bảo “xây giúp tôi cái nhà”. Việc đầu tiên của kiến trúc sư là <b>hỏi lại</b> (mấy người ở? ngân sách? mấy tầng?), không phải lao vào vẽ cửa sổ.' }
    ] },
    { icon: '5️⃣', title: 'Khung 5 bước (≈ 45 phút)', blocks: [
      { t: 'steps', items: [
        '<b>Làm rõ yêu cầu (2–3 phút)</b>: ai dùng, dùng để làm gì, quy mô (người dùng, lưu lượng, dữ liệu), yêu cầu chức năng và phi chức năng.',
        '<b>Thiết kế tổng thể (5–10 phút)</b>: vẽ các khối chính (client, server, database, cache), định nghĩa API giữa chúng, mô hình dữ liệu, luồng chạy cơ bản.',
        '<b>Đào sâu thành phần (10–15 phút)</b>: chọn phần quan trọng, tìm nút thắt cổ chai, giải thích lựa chọn công nghệ và đánh đổi.',
        '<b>Mở rộng & tối ưu (5–10 phút)</b>: sharding, replication, caching; ca biên và sự cố; tối ưu hiệu năng.',
        '<b>Tổng kết (2–3 phút)</b>: tóm tắt, nêu hạn chế, đề xuất cải tiến sau này.'
      ] },
      { t: 'mnemo', x: 'Nhớ nhanh: <b>H</b>ỏi → <b>V</b>ẽ → <b>Đ</b>ào → <b>M</b>ở rộng → <b>T</b>ổng kết (“Hãy Vẽ Để Mọi Thứ rõ”).' },
      { t: 'warn', x: '<b>Bẫy hay gặp:</b> sa vào chi tiết quá sớm; nhảy vào giải pháp khi chưa hiểu yêu cầu; chỉ nói về một mảng (vd chỉ database); quên quy mô ngay từ đầu; nghĩ thầm không nói ra — người phỏng vấn không đọc được suy nghĩ của bạn.' }
    ] },
    { icon: '🔗', title: 'Ví dụ xuyên suốt: bộ rút gọn URL (như bit.ly)', blocks: [
      { t: 'table', head: ['Bước', 'Áp dụng cho URL shortener'], rows: [
        ['1. Yêu cầu', 'Tạo link ngắn từ link dài; bấm link ngắn thì chuyển hướng; hàng triệu URL; phản hồi nhanh'],
        ['2. Tổng thể', 'Web server (tạo + chuyển hướng), database lưu ánh xạ, dịch vụ sinh mã ngắn'],
        ['3. Đào sâu', 'Cách mã hóa (Base62 hay MD5+Base62), schema/chỉ mục, cache link nóng'],
        ['4. Mở rộng', 'Đọc nhiều hơn ghi → cache + read replica; sharding theo mã ngắn; CDN'],
        ['5. Tổng kết', 'Hàng triệu URL, &lt;100ms; sau này thêm thống kê, link tùy chỉnh, hết hạn']
      ] },
      { t: 'widget', name: 'sd-base62', title: 'Thử sinh mã ngắn kiểu Base62 từ một con số (ID tăng dần)' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Base62 là gì?</b> Hệ đếm dùng 62 ký tự (0–9, a–z, A–Z). 7 ký tự Base62 cho 62⁷ ≈ <b>3,5 nghìn tỷ</b> mã — dư sức cho hàng tỷ URL, mà link vẫn ngắn. Mẹo: lấy <i>ID tự tăng</i> của bản ghi rồi đổi sang Base62 thì không bao giờ trùng mã (khác với băm MD5 có thể đụng độ).' }
    ] }
  ],
  summary: [
    'Phỏng vấn thiết kế hệ thống kiểm tra tư duy kiến trúc, không phải thuật toán.',
    'Khung 5 bước: Làm rõ → Tổng thể → Đào sâu → Mở rộng → Tổng kết.',
    'Luôn bắt đầu từ yêu cầu và quy mô; nói to quá trình suy nghĩ.',
    'URL shortener: đọc nhiều hơn ghi → cache, read replica, sharding, CDN.'
  ],
  cards: [
    ['Phỏng vấn thiết kế hệ thống kiểm tra gì?', 'Tư duy kiến trúc, khả năng ra quyết định và đánh đổi, giao tiếp — không phải thuật toán.'],
    ['5 bước của khung phỏng vấn?', 'Làm rõ yêu cầu → thiết kế tổng thể → đào sâu thành phần → mở rộng & tối ưu → tổng kết.'],
    ['Bước 1 nên hỏi gì?', 'Người dùng & trường hợp sử dụng, quy mô, yêu cầu chức năng và phi chức năng.'],
    ['Bẫy “quá chi tiết sớm” là gì?', 'Sa vào chi tiết trước khi có bức tranh tổng thể; nên đi từ rộng đến hẹp.'],
    ['URL shortener: tải đọc hay ghi nhiều?', 'Đọc nhiều (redirect) → cache và read replica.'],
    ['Hai cách sinh mã ngắn?', 'Base62 từ ID tự tăng, hoặc MD5 rồi cắt + Base62.'],
    ['Sharding theo gì trong URL shortener?', 'Theo mã ngắn (short code).'],
    ['Bước 5 làm gì?', 'Tóm tắt thiết kế, thừa nhận hạn chế, nêu hướng cải tiến.']
  ],
  quiz: [
    { q: 'Việc đầu tiên khi nhận đề “thiết kế hệ thống X”:', o: ['Vẽ database', 'Hỏi để làm rõ yêu cầu và quy mô', 'Chọn công nghệ', 'Viết code'], a: 1, e: 'Đề cố tình mơ hồ; hỏi rồi mới thiết kế.' },
    { q: 'Thời gian dành nhiều nhất trong khung 5 bước thường ở:', o: ['Làm rõ yêu cầu', 'Đào sâu thành phần', 'Tổng kết', 'Chào hỏi'], a: 1, e: '10–15 phút.' },
    { q: 'URL shortener có tải chủ yếu là:', o: ['Ghi', 'Đọc', 'Tính toán GPU', 'Truyền video'], a: 1, e: 'Mỗi link tạo một lần nhưng được bấm nhiều lần.' },
    { q: 'Điều nào là bẫy khi phỏng vấn?', o: ['Nói to suy nghĩ', 'Nghĩ thầm không giao tiếp', 'Hỏi yêu cầu', 'Nêu đánh đổi'], a: 1, e: 'Người phỏng vấn cần thấy quá trình tư duy.' },
    { q: 'Ưu điểm của Base62 từ ID tự tăng so với băm MD5 cắt ngắn:', o: ['Nhanh hơn băm', 'Không bị trùng mã', 'Bảo mật hơn', 'Dài hơn'], a: 1, e: 'ID là duy nhất nên mã cũng duy nhất.' }
  ],
  match: [
    ['Làm rõ yêu cầu', 'Bước 1'],
    ['Sharding, replication, caching', 'Bước mở rộng'],
    ['Base62', 'Mã hóa link ngắn'],
    ['Read replica', 'Giảm tải đọc'],
    ['Tổng kết', 'Nêu hạn chế và hướng cải tiến']
  ]
},

{
  n: 2,
  title: 'Hiệu năng: độ trễ, thông lượng và định luật Little',
  intro: 'Hai thước đo hiệu năng hay bị nhầm: độ trễ (một việc mất bao lâu) và thông lượng (làm được bao nhiêu việc mỗi giây). Hiểu rõ khác biệt giúp bạn tối ưu đúng chỗ.',
  sections: [
    { icon: '🛣', title: 'Hai khái niệm, một con đường cao tốc', blocks: [
      { t: 'table', head: ['', 'Độ trễ (Latency)', 'Thông lượng (Throughput)'], rows: [
        ['Định nghĩa', 'Thời gian từ lúc bắt đầu đến lúc thấy kết quả (một yêu cầu)', 'Số việc xử lý được trong một đơn vị thời gian'],
        ['Đơn vị', 'ms, giây', 'req/giây, query/giây, MB/giây'],
        ['Ví dụ xa lộ', 'Một chiếc xe đi hết đường mất bao lâu', 'Một giờ có bao nhiêu xe đi qua một điểm'],
        ['Web server', '200 ms mở một trang', '5.000 req/giây'],
        ['Database', '10 ms lấy một bản ghi', '1.000 query/giây']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> thông lượng cao ≠ nhanh. Xe buýt chở 50 người chậm hơn xe máy (độ trễ cao) nhưng đưa được nhiều người hơn mỗi giờ (thông lượng cao). Cửa hàng có 1 người phục vụ rất nhanh vẫn không bằng 5 người phục vụ vừa phải khi đông khách.' },
      { t: 'widget', name: 'sd-latency', title: 'Thang độ trễ “quy ra thời gian con người”: RAM so với đĩa so với mạng' }
    ] },
    { icon: '⚖️', title: 'Vì sao phải đánh đổi?', blocks: [
      { t: 'list', items: [
        '<b>Tài nguyên hữu hạn</b> (CPU, RAM, băng thông).',
        '<b>Gom lô (batching)</b>: tăng thông lượng nhưng mỗi yêu cầu phải chờ lô đầy → trễ hơn (như xe buýt chờ đủ khách mới chạy).',
        '<b>Hàng đợi</b>: nhận nhiều việc thì phải xếp hàng → thời gian chờ tăng.',
        '<b>Song song hóa</b>: chia việc ra làm cùng lúc tăng thông lượng nhưng cần phối hợp (tốn thêm).',
        '<b>Phần cứng</b>: chip nhanh hơn thì tốn điện/nóng, khó nhồi dày đặc.'
      ] },
      { t: 'table', head: ['Ưu tiên độ trễ khi…', 'Ưu tiên thông lượng khi…'], rows: [
        ['Ứng dụng người dùng cuối, game, giao dịch chứng khoán, họp video', 'Xử lý lô, phân tích dữ liệu lớn, thanh toán khối lượng cao'],
        ['Cách làm: SSD, ít bước mạng, cache, đặt gần người dùng', 'Cách làm: gom lô, thao tác hàng loạt, thêm node, xử lý bất đồng bộ']
      ] },
      { t: 'tabs', items: [
        ['⚡ Hệ thống ưu tiên trễ', 'Sàn chứng khoán (dưới mili-giây), game online (&lt;100ms), xe tự lái.'],
        ['🚚 Hệ thống ưu tiên thông lượng', 'Xử lý dữ liệu lớn, streaming video (hàng PB), cổng thanh toán giờ cao điểm.'],
        ['⚖️ Cân bằng', 'Thương mại điện tử, mạng xã hội: trang tải nhanh nhưng phải phục vụ rất đông.']
      ] }
    ] },
    { icon: '📐', title: 'Định luật Little: L = λ × W', blocks: [
      { t: 'key', x: 'Trong hệ thống ổn định: <b>L</b> (số việc đang nằm trong hệ thống) = <b>λ</b> (tốc độ đến, tức thông lượng) × <b>W</b> (thời gian một việc ở trong hệ thống, tức độ trễ). (Bản PDF làm mất ký tự λ nên in “L = W”.)' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> quán cà phê có 20 khách/giờ đến, mỗi người ở lại trung bình 30 phút (0,5 giờ) → quán luôn có khoảng 20 × 0,5 = <b>10 người</b> bên trong. Quán chỉ có 10 ghế? Muốn phục vụ nhiều khách hơn mà ghế không đổi thì phải rút ngắn thời gian mỗi khách ở lại.' },
      { t: 'widget', name: 'sd-littles', title: 'Máy tính định luật Little: server có N luồng, mỗi yêu cầu W ms → tối đa bao nhiêu req/giây?' },
      { t: 'p', x: 'Quy trình tối ưu hợp lý: ① đo đường cơ sở (baseline) ② tìm nút thắt bằng profiler ③ đặt mục tiêu theo percentile (vd 99% yêu cầu &lt; 200ms) ④ đổi từng thứ một rồi đo lại ⑤ giám sát ở môi trường thật, vì thực tế khác thử nghiệm.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – vì sao nói “percentile” (p50/p95/p99)?</b> Trung bình che giấu những lần chậm. Nếu 1 trong 100 yêu cầu mất 5 giây thì trung bình vẫn đẹp, nhưng người dùng bị chậm vẫn bực. p99 = “99% yêu cầu nhanh hơn mức này”; các hệ thống lớn cam kết theo p99 chứ không phải trung bình.' }
    ] }
  ],
  summary: [
    'Độ trễ = một việc mất bao lâu; thông lượng = làm được bao nhiêu việc mỗi giây.',
    'Gom lô, hàng đợi, song song hóa tăng thông lượng nhưng có thể tăng độ trễ.',
    'Little: L = λ × W — cố định sức chứa thì tăng thông lượng buộc phải giảm độ trễ.',
    'Tối ưu theo quy trình đo → tìm nút thắt → đổi một thứ → đo lại; mục tiêu theo percentile.'
  ],
  cards: [
    ['Độ trễ là gì?', 'Thời gian một yêu cầu đi từ bắt đầu đến khi có kết quả (ms).'],
    ['Thông lượng là gì?', 'Lượng công việc xử lý được mỗi đơn vị thời gian (req/s, MB/s).'],
    ['Ví dụ xa lộ?', 'Độ trễ = một xe đi hết đường; thông lượng = số xe qua một điểm mỗi giờ.'],
    ['Vì sao gom lô tăng trễ?', 'Mỗi yêu cầu phải chờ lô đầy mới được xử lý.'],
    ['Định luật Little?', 'L = λ × W (số việc trong hệ thống = tốc độ đến × thời gian lưu lại).'],
    ['Hệ thống ưu tiên độ trễ?', 'Sàn chứng khoán, game, xe tự lái.'],
    ['Hệ thống ưu tiên thông lượng?', 'Big data, streaming video, thanh toán khối lượng lớn.'],
    ['Vì sao dùng p99?', 'Trung bình che mất những lần chậm; p99 phản ánh trải nghiệm tệ nhất của đa số.'],
    ['Cách đo hiệu năng đúng?', 'Baseline → nút thắt → mục tiêu → đổi từng thứ → giám sát thực tế.']
  ],
  quiz: [
    { q: 'Server xử lý 5.000 req/s. Đó là:', o: ['Độ trễ', 'Thông lượng', 'Băng thông bộ nhớ', 'Độ sẵn sàng'], a: 1, e: 'Số việc mỗi giây.' },
    { q: 'Gom lô request làm:', o: ['Giảm trễ, giảm thông lượng', 'Tăng thông lượng, tăng trễ', 'Không đổi', 'Giảm cả hai'], a: 1, e: 'Đánh đổi kinh điển.' },
    { q: 'Quán 20 khách/giờ, mỗi người ở 30 phút. Số khách trung bình trong quán:', o: ['5', '10', '20', '40'], a: 1, e: 'L = 20 × 0,5.' },
    { q: 'Game online nên ưu tiên:', o: ['Thông lượng', 'Độ trễ thấp', 'Lưu trữ', 'Bảo trì'], a: 1, e: 'Trễ cao gây giật lag.' },
    { q: 'Tối ưu hiệu năng nên:', o: ['Đổi nhiều thứ cùng lúc', 'Đo, đổi từng thứ, đo lại', 'Đoán', 'Chỉ thêm server'], a: 1, e: 'Mỗi lần một thay đổi.' },
    { q: 'Cam kết “99% request dưới 200ms” là chỉ số:', o: ['Trung bình', 'Percentile p99', 'Thông lượng', 'Băng thông'], a: 1, e: 'Percentile.' }
  ],
  match: [
    ['Latency', 'Bao lâu cho một việc'],
    ['Throughput', 'Bao nhiêu việc mỗi giây'],
    ['L = λ × W', 'Định luật Little'],
    ['Batching', 'Tăng thông lượng, tăng trễ'],
    ['p99', 'Mức mà 99% yêu cầu nhanh hơn']
  ]
},

{
  n: 3,
  title: 'Năm yêu cầu phi chức năng và “độ chín” sẵn sàng',
  intro: 'Yêu cầu chức năng nói hệ thống LÀM GÌ; yêu cầu phi chức năng (NFR) nói nó làm TỐT đến đâu. Giống xe hơi: tay lái, phanh là chức năng; tiết kiệm xăng, an toàn, êm ái là phi chức năng.',
  sections: [
    { icon: '🧩', title: 'Năm NFR cốt lõi', blocks: [
      { t: 'tabs', items: [
        ['📈 Khả năng mở rộng', 'Xử lý lượng việc tăng bằng cách thêm tài nguyên. Dọc (thêm CPU/RAM cho máy cũ) hoặc ngang (thêm máy). Ví dụ Netflix auto-scaling khi ra phim hot. Cần: dịch vụ stateless, sharding, microservices, cache.'],
        ['🚀 Hiệu năng', 'Độ trễ, thông lượng, thời gian phản hồi, mức dùng tài nguyên. Ví dụ Google trả kết quả trong mili-giây nhờ xử lý phân tán và cache. Cần: cache nhiều tầng, xử lý bất đồng bộ, tối ưu truy vấn, CDN.'],
        ['🛡 Độ tin cậy', 'Chạy đúng và ổn định theo thời gian: chịu lỗi, sẵn sàng cao (“các số 9”), phục hồi thảm họa. Ví dụ Amazon Prime Day: dư thừa, nhiều vùng, giảm cấp chức năng có kiểm soát. Cần: dư thừa, circuit breaker, chaos engineering, giám sát.'],
        ['🔐 Bảo mật', 'Chống truy cập trái phép và tấn công: xác thực/phân quyền, mã hóa, kiểm tra đầu vào, giám sát. Nguyên tắc: phòng thủ nhiều lớp, quyền tối thiểu, kiểm toán định kỳ, tuân thủ (GDPR, PCI-DSS).'],
        ['🔧 Khả năng bảo trì', 'Dễ sửa, nâng cấp, mở rộng: code sạch, tài liệu, dễ kiểm thử, mô-đun hóa, CI/CD. Ví dụ Spotify: microservices + test tự động + triển khai liên tục.']
      ] },
      { t: 'mnemo', x: 'Nhớ <b>5 chữ</b>: <b>M</b>ở rộng – <b>H</b>iệu năng – <b>T</b>in cậy – <b>B</b>ảo mật – <b>B</b>ảo trì (“Mỗi Hệ Thống Bền Bỉ”).' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> NFR là “độ ngon” chứ không phải “món gì”. Quán nào cũng có phở (chức năng); NFR là phở ra nhanh không, ngày đông có hết bàn không, vệ sinh ổn không, đầu bếp nghỉ thì sao.' }
    ] },
    { icon: '9️⃣', title: '“Các số 9” của độ sẵn sàng', blocks: [
      { t: 'p', x: 'Sách nhắc “99,99% uptime” nhưng không giải thích. Đây là phần bổ sung quan trọng để biết con số ấy lớn cỡ nào.' },
      { t: 'widget', name: 'sd-nines', title: 'Độ sẵn sàng → thời gian ngừng hoạt động cho phép mỗi năm/tháng' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách:</b> mỗi thêm một số 9 thường đắt hơn rất nhiều lần (cần dư thừa nhiều vùng, tự động chuyển đổi dự phòng, kiểm thử sự cố…). Vì vậy đừng cam kết 99,999% cho chức năng ít quan trọng — hãy chọn mức sẵn sàng theo giá trị kinh doanh.' }
    ] },
    { icon: '⚖️', title: 'Cân bằng và đo lường NFR', blocks: [
      { t: 'list', items: [
        'NFR thường <b>xung đột</b> nhau: bảo mật chặt làm chậm hơn; sẵn sàng cao tốn tiền; tối ưu hiệu năng làm code khó bảo trì.',
        'Ưu tiên theo: mục tiêu kinh doanh, kỳ vọng người dùng, tiêu chuẩn ngành, rủi ro, chi phí–lợi ích.',
        'Mỗi NFR cần: <b>chỉ số đo được</b>, cách kiểm thử, kế hoạch giám sát, quy trình cải thiện.'
      ] },
      { t: 'table', head: ['NFR (ví dụ thương mại điện tử)', 'Chỉ số', 'Cách thực hiện / kiểm thử'], rows: [
        ['Mở rộng', 'Chịu gấp 10 lưu lượng ngày khuyến mãi', 'Auto-scaling, CDN, read replica / load test tăng dần'],
        ['Hiệu năng', 'Trang &lt; 2 giây, API &lt; 200ms', 'Tối ưu ảnh, cache, truy vấn / giám sát tổng hợp nhiều vùng'],
        ['Tin cậy', 'Thanh toán 99,99% uptime', 'Nhiều vùng, circuit breaker / chaos engineering'],
        ['Bảo mật', 'Tuân thủ PCI-DSS', 'Mã hóa, kiểm tra đầu vào / pentest'],
        ['Bảo trì', 'Tính năng mới lên trong 2 tuần', 'CI/CD, microservices / review code, độ phủ test']
      ] },
      { t: 'widget', name: 'sd-nfr-pick', title: 'Gắn yêu cầu với đúng nhóm NFR' }
    ] }
  ],
  summary: [
    'NFR = chất lượng hệ thống: mở rộng, hiệu năng, tin cậy, bảo mật, bảo trì.',
    'NFR phải đo được; chúng xung đột nhau nên cần ưu tiên theo kinh doanh.',
    '99,9% ≈ 8,8 giờ ngừng/năm; 99,99% ≈ 53 phút/năm — mỗi số 9 thêm đều rất đắt.'
  ],
  cards: [
    ['Yêu cầu chức năng vs phi chức năng?', 'Chức năng: hệ thống làm gì. Phi chức năng: làm tốt đến đâu.'],
    ['Năm NFR?', 'Mở rộng, hiệu năng, tin cậy, bảo mật, bảo trì.'],
    ['Mở rộng dọc?', 'Thêm CPU/RAM/ổ đĩa cho máy hiện có.'],
    ['Mở rộng ngang?', 'Thêm nhiều máy và chia tải.'],
    ['Chịu lỗi (fault tolerance)?', 'Vẫn chạy khi một thành phần hỏng.'],
    ['Phòng thủ nhiều lớp?', 'Nhiều tầng bảo mật chồng nhau; một lớp thủng vẫn còn lớp khác.'],
    ['Quyền tối thiểu?', 'Chỉ cấp quyền vừa đủ để làm việc.'],
    ['99,99% uptime ≈ ?', 'Khoảng 52,6 phút ngừng hoạt động mỗi năm.'],
    ['Chaos engineering?', 'Chủ động gây lỗi để kiểm tra khả năng chịu đựng.']
  ],
  quiz: [
    { q: '“Trang tải dưới 2 giây” là NFR nhóm:', o: ['Bảo mật', 'Hiệu năng', 'Bảo trì', 'Chức năng'], a: 1, e: 'Về tốc độ.' },
    { q: 'PCI-DSS thuộc nhóm:', o: ['Mở rộng', 'Bảo mật/tuân thủ', 'Hiệu năng', 'Bảo trì'], a: 1, e: 'Chuẩn bảo mật thanh toán.' },
    { q: '99,9% sẵn sàng cho phép ngừng khoảng:', o: ['8,8 giờ/năm', '52 phút/năm', '3,65 ngày/năm', '5 phút/năm'], a: 0, e: '0,1% của 8.760 giờ.' },
    { q: 'Circuit breaker giúp nhóm NFR nào?', o: ['Tin cậy', 'Bảo trì', 'Chức năng', 'Giao diện'], a: 0, e: 'Ngăn lỗi lan truyền.' },
    { q: 'NFR cần:', o: ['Mơ hồ', 'Cụ thể, đo được', 'Không đổi', 'Chỉ viết tài liệu'], a: 1, e: 'Specific & measurable.' },
    { q: 'Tăng bảo mật thường làm:', o: ['Nhanh hơn', 'Chậm hơn đôi chút / phức tạp hơn', 'Rẻ hơn', 'Không ảnh hưởng'], a: 1, e: 'Các NFR đánh đổi nhau.' }
  ],
  match: [
    ['Auto-scaling', 'Mở rộng'],
    ['Chaos engineering', 'Tin cậy'],
    ['Mã hóa + kiểm tra đầu vào', 'Bảo mật'],
    ['CI/CD + test tự động', 'Bảo trì'],
    ['CDN + cache', 'Hiệu năng']
  ]
}
);
