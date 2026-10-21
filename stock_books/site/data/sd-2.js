// SDIR – Chương 4–6: ước lượng, mở rộng & cân bằng tải, mạng & thời gian thực.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.sysdesign = BOOK_DATA.sysdesign || { chapters: [] };
BOOK_DATA.sysdesign.chapters.push(

{
  n: 4,
  title: 'Ước lượng nhanh (back-of-the-envelope)',
  intro: 'Ước lượng “trên mặt sau phong bì” là tính nhẩm nhanh để biết một thiết kế có khả thi không, cần bao nhiêu máy/ổ đĩa/băng thông — trước khi đi vào chi tiết. Không cần chính xác, chỉ cần đúng bậc độ lớn.',
  sections: [
    { icon: '🎯', title: 'Vì sao và cách làm', blocks: [
      { t: 'list', items: [
        'Đánh giá khả thi, lập kế hoạch tài nguyên, phát hiện nút thắt, ước chi phí, hoạch định dung lượng.',
        'Quy trình 7 bước: xác định bài toán → làm rõ ràng buộc → <b>đặt giả định rõ ràng</b> → chia nhỏ → làm tròn lũy thừa 10 → kiểm tra “có hợp lý không” → tìm nút thắt.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> giống tính “đi dã ngoại 30 người cần mua bao nhiêu nước?” — mỗi người ~2 chai → 60 chai. Chẳng ai tính đến từng ml. Cái quan trọng là biết 60 chứ không phải 6 hay 600.' },
      { t: 'widget', name: 'sd-pow2', title: 'Bảng nhẩm: 10³, 10⁶, 10⁹… ứng với KB, MB, GB, TB, PB' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – số cần thuộc:</b> 1 ngày ≈ <b>86.400</b> giây (≈ 10⁵ để nhẩm); 1 tháng ≈ 2,5 triệu giây; 1 năm ≈ 31,5 triệu giây (≈ 3×10⁷). Mẹo QPS: <i>x triệu yêu cầu/ngày ≈ x × 12 QPS</i>. (Bảng số trong PDF là hình ảnh nên không trích được; đây là con số chuẩn thường dùng.)' }
    ] },
    { icon: '🔗', title: 'Ví dụ 1: URL shortener', blocks: [
      { t: 'steps', items: [
        '<b>Giả định:</b> 100 triệu URL mới/tháng; đọc:ghi = 10:1; URL gốc 100 byte, mã ngắn 7 byte, metadata 50 byte.',
        '<b>QPS ghi:</b> 100 triệu ÷ 30 ngày ≈ 3,33 triệu/ngày ÷ 86.400 ≈ <b>39 URL/giây</b>.',
        '<b>QPS đọc:</b> 39 × 10 = <b>390/giây</b> → tổng ≈ <b>429 QPS</b>; đỉnh (×2) ≈ <b>858 QPS</b>.',
        '<b>Dung lượng:</b> 157 byte × 100 triệu = 15,7 GB/tháng → 5 năm ≈ <b>942 GB (~1 TB)</b>.',
        '<b>Kết luận:</b> 858 QPS một app server gánh được; 1 TB một DB server chứa được. Chưa cần sharding ngay.'
      ] },
      { t: 'widget', name: 'sd-estimator', title: 'Máy tính ước lượng: đổi giả định, xem QPS và dung lượng thay đổi' }
    ] },
    { icon: '🎬', title: 'Ví dụ 2: nền tảng video kiểu YouTube', blocks: [
      { t: 'table', head: ['Mục', 'Phép tính', 'Kết quả'], rows: [
        ['Video upload/ngày', '100 triệu DAU × 5%', '5 triệu video'],
        ['Kích thước một video', '5 phút × 50 MB/phút × 3 độ phân giải', '750 MB'],
        ['Lưu trữ/ngày', '5 triệu × 750 MB', '≈ 3,75 PB/ngày (≈ 1,37 EB/năm)'],
        ['Lượt xem/ngày', '100 triệu × 10 video', '1 tỷ'],
        ['Dữ liệu mỗi lượt xem', '5 phút × 70% × 3 MB/phút', '10,5 MB'],
        ['Băng thông/ngày', '1 tỷ × 10,5 MB', '≈ 10,5 PB/ngày']
      ] },
      { t: 'warn', x: 'Chú ý: sách dùng <b>50 MB/phút</b> khi tính lưu trữ (tổng nhiều độ phân giải) nhưng <b>3 MB/phút</b> khi tính băng thông xem (chỉ một chất lượng), nên hai con số không cùng “thước”. Khi ước lượng, luôn ghi rõ giả định từng phần — đây chính là cái người phỏng vấn muốn thấy.' },
      { t: 'p', x: '<b>Ý nghĩa thiết kế:</b> lưu trữ khổng lồ → cần lưu trữ phân tán; băng thông cực lớn → cần CDN toàn cầu; chi phí cao → cần nén video và tối ưu lưu trữ.' }
    ] }
  ],
  summary: [
    'Ước lượng để biết bậc độ lớn và nút thắt, không cần chính xác tuyệt đối.',
    '1 ngày ≈ 86.400 s; QPS = số yêu cầu/ngày ÷ 86.400; nhân hệ số đỉnh (thường 2×).',
    'URL shortener: ~429 QPS, ~1 TB/5 năm → một máy là đủ ban đầu.',
    'Video: PB/ngày lưu trữ, PB/ngày băng thông → bắt buộc phân tán + CDN.',
    'Luôn nêu giả định rõ ràng và kiểm tra tính hợp lý của kết quả.'
  ],
  cards: [
    ['Back-of-the-envelope là gì?', 'Tính nhẩm nhanh để ước lượng bậc độ lớn tài nguyên/hiệu năng.'],
    ['Một ngày bao nhiêu giây (để nhẩm)?', '86.400 ≈ 10⁵.'],
    ['QPS là gì?', 'Queries per second — số yêu cầu mỗi giây.'],
    ['Hệ số đỉnh thường dùng?', '2× so với trung bình (có thể cao hơn tùy hệ thống).'],
    ['URL shortener: tổng QPS?', '≈ 429 (39 ghi + 390 đọc); đỉnh ≈ 858.'],
    ['URL shortener: dung lượng 5 năm?', '≈ 942 GB (~1 TB).'],
    ['Video: lưu trữ mỗi ngày?', '≈ 3,75 PB (5 triệu video × 750 MB).'],
    ['Vì sao làm tròn lũy thừa 10?', 'Đơn giản phép tính, chỉ cần đúng bậc độ lớn.'],
    ['Sanity check là gì?', 'So kết quả với con số thực tế đã biết để xem có hợp lý không.']
  ],
  quiz: [
    { q: '100 triệu yêu cầu/ngày ≈ bao nhiêu QPS trung bình?', o: ['~12', '~1.160', '~100', '~11.600'], a: 1, e: '100.000.000 ÷ 86.400 ≈ 1.157.' },
    { q: 'Vì sao nên ghi rõ giả định?', o: ['Cho đẹp', 'Để người khác kiểm tra/điều chỉnh được', 'Không cần', 'Để tăng độ chính xác tuyệt đối'], a: 1, e: 'Giả định sai thì kết quả sai.' },
    { q: 'URL shortener ~858 QPS đỉnh cần:', o: ['Hàng trăm máy', 'Một server hiện đại gánh được', 'Siêu máy tính', 'Không thể thực hiện'], a: 1, e: 'Rất nhỏ.' },
    { q: 'Băng thông video ở PB/ngày cho thấy cần:', o: ['Một server', 'CDN toàn cầu', 'Chỉ cache RAM', 'Giảm người dùng'], a: 1, e: 'Phải đưa nội dung đến gần người xem.' },
    { q: 'Tỷ lệ đọc:ghi 10:1 nghĩa là:', o: ['Ghi nhiều hơn', 'Đọc nhiều gấp 10 lần ghi', 'Bằng nhau', 'Không đọc'], a: 1, e: 'Cache rất hiệu quả.' }
  ],
  match: [
    ['86.400', 'Số giây một ngày'],
    ['QPS', 'Yêu cầu mỗi giây'],
    ['PB', 'Peta byte (10¹⁵)'],
    ['DAU', 'Người dùng hoạt động hằng ngày'],
    ['Peak factor', 'Hệ số đỉnh so với trung bình']
  ]
},

{
  n: 5,
  title: 'Mở rộng dọc/ngang và cân bằng tải',
  intro: 'Khi người dùng tăng, một máy sẽ quá tải. Có hai hướng: làm máy mạnh hơn (dọc) hoặc thêm nhiều máy (ngang). Khi có nhiều máy, cần “người điều phối” chia việc — đó là load balancer.',
  sections: [
    { icon: '↕️', title: 'Dọc hay ngang?', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> quán phở đông khách. <b>Dọc</b> = mua bếp to hơn, thuê đầu bếp giỏi hơn (nhưng bếp nào cũng có giới hạn, và bếp hỏng là đóng cửa). <b>Ngang</b> = mở thêm chi nhánh, cần người đứng cửa hướng dẫn khách sang quán còn chỗ (load balancer).' },
      { t: 'table', head: ['Tiêu chí', 'Mở rộng dọc (scale up)', 'Mở rộng ngang (scale out)'], rows: [
        ['Độ phức tạp', 'Thấp–vừa, ít đổi kiến trúc', 'Vừa–cao: cần load balancer, quản lý phiên, cache phân tán'],
        ['Chi phí', 'Đắt, tăng phi tuyến, phần cứng cao cấp', 'Rẻ hơn mỗi đơn vị, tăng gần tuyến tính'],
        ['Giới hạn', 'Có trần phần cứng', 'Về lý thuyết không giới hạn'],
        ['Chịu lỗi', 'Một điểm hỏng duy nhất', 'Dư thừa sẵn; hỗ trợ cập nhật cuốn chiếu không ngừng dịch vụ'],
        ['Hiệu năng', 'Tính toán nặng; không tốn mạng nội bộ; nhất quán đơn giản', 'I/O hoặc việc song song; có thể thêm độ trễ mạng']
      ] },
      { t: 'tabs', items: [
        ['↕️ Nên chọn dọc khi', 'Giai đoạn đầu, ứng dụng nguyên khối, cần giải pháp nhanh, tính toán nặng, tăng trưởng dự đoán được, hệ thống khó phân tán (một số database), ngân sách ngắn hạn. Ví dụ giao dịch tần suất cao: mạng giữa nhiều máy là quá chậm.'],
        ['↔️ Nên chọn ngang khi', 'Tăng trưởng lớn/đột biến, cần sẵn sàng cao, ứng dụng stateless, việc chia song song được, tối ưu chi phí quy mô lớn, cần phân bố địa lý. Ví dụ mạng xã hội với hàng triệu người dùng.'],
        ['🔀 Lai (hybrid)', 'Dọc trước – ngang sau. Mỗi tầng một kiểu: database thường dọc (nhất quán), app tier ngang (chịu lỗi), cache tier ngang.']
      ] },
      { t: 'widget', name: 'sd-scale-pick', title: 'Chọn hướng mở rộng cho tình huống của bạn' }
    ] },
    { icon: '⚖️', title: 'Load balancer chia việc như thế nào?', blocks: [
      { t: 'p', x: 'Load balancer (LB) đứng giữa người dùng và các server; nó chuyển từng yêu cầu đến một server phù hợp, loại server hỏng ra khỏi vòng (health check), giúp mở rộng, sẵn sàng cao, tin cậy và dùng tài nguyên hiệu quả.' },
      { t: 'table', head: ['Thuật toán', 'Cách chọn server', 'Hợp khi'], rows: [
        ['Round Robin', 'Lần lượt 1→2→3→1…', 'Server đồng đều, yêu cầu tương tự'],
        ['Least Connections', 'Server đang có ít kết nối nhất', 'Thời gian xử lý mỗi yêu cầu khác nhau'],
        ['Least Response Time', 'Server trả lời nhanh nhất', 'Muốn ưu tiên server nhanh/khỏe'],
        ['IP Hash', 'Băm IP khách → luôn một server', 'Cần giữ phiên (session) cố định'],
        ['Weighted RR / LC', 'Như trên nhưng có trọng số', 'Server mạnh yếu khác nhau (5:3:2 → 10 yêu cầu chia 5/3/2)'],
        ['Random 2 choices', 'Bốc 2 server, chọn cái ít kết nối hơn', 'Nhanh mà vẫn cân tải tương đối']
      ] },
      { t: 'widget', name: 'sd-lb', title: 'Mô phỏng cân bằng tải: chọn thuật toán, gửi yêu cầu, xem server nào nhận' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – consistent hashing:</b> với IP hash thường, đổi số server (thêm/bớt) làm hầu hết khách bị chuyển sang server khác. <i>Consistent hashing</i> xếp server và khách lên một “vòng tròn” để khi thêm/bớt một server chỉ ~1/N khách bị ảnh hưởng — đó là lý do sách khuyên dùng nó cho sticky session.' }
    ] },
    { icon: '🔧', title: 'Loại LB, tính năng, mẫu triển khai', blocks: [
      { t: 'list', items: [
        '<b>Phần cứng</b> (F5, Citrix ADC): nhanh, bền nhưng đắt, kém linh hoạt. <b>Phần mềm</b> (NGINX, HAProxy, AWS ELB): rẻ, dễ mở rộng, cấu hình linh hoạt.',
        '<b>Layer 4</b> (TCP/UDP): chọn theo IP + cổng, không đọc nội dung → nhanh, đơn giản. <b>Layer 7</b> (HTTP): đọc URL/header/cookie → định tuyến theo nội dung, kết thúc SSL, tốn CPU hơn.',
        'Tính năng: health check, sticky session, SSL termination, content-based routing, tích hợp auto-scaling.',
        'Mẫu: <b>GSLB</b> (chia theo trung tâm dữ liệu, thường qua DNS), <b>Blue-Green</b> (hai môi trường, chuyển cả lưu lượng), <b>Canary</b> (cho một phần nhỏ người dùng thử bản mới).'
      ] },
      { t: 'warn', x: '<b>Thực hành tốt:</b> health check phải kiểm tra chức năng thật (không chỉ “server còn thở”); thiết kế cho server hỏng; đặt timeout hợp lý; dùng consistent hashing cho sticky session; SSL offload; rate limit; và <b>cho chính LB dư thừa</b> kẻo nó thành điểm hỏng duy nhất.' },
      { t: 'tabs', items: [
        ['🍪 Giữ phiên', 'Sticky session, hoặc lưu phiên chung (Redis/Memcached/DB) để mọi server đều đọc được.'],
        ['🔐 Chứng chỉ SSL', 'Tập trung kết thúc SSL tại LB, tự động gia hạn.'],
        ['📉 Tải lệch', 'Dùng least connections/response time và trọng số.'],
        ['🚧 LB nghẽn', 'Xếp LB phân cấp hoặc chia tải trước bằng DNS.']
      ] }
    ] }
  ],
  summary: [
    'Dọc = máy mạnh hơn (đơn giản, có trần, một điểm hỏng); ngang = thêm máy (cần LB, linh hoạt, chịu lỗi).',
    'Thực tế dùng lai: DB dọc, app/cache ngang.',
    'LB: Round Robin, Least Connections, IP Hash, Weighted, Least Response Time, Random-2.',
    'L4 nhanh theo IP/port; L7 đọc nội dung HTTP.',
    'Làm LB dư thừa; health check phải kiểm chức năng thật.'
  ],
  cards: [
    ['Scale up là gì?', 'Tăng CPU/RAM/ổ cho một máy (dọc).'],
    ['Scale out là gì?', 'Thêm nhiều máy chia tải (ngang).'],
    ['Nhược điểm mở rộng dọc?', 'Có trần, đắt dần, một điểm hỏng duy nhất.'],
    ['Khi nào chọn dọc?', 'Giai đoạn đầu, hệ thống khó phân tán, tính toán nặng, trễ cực thấp.'],
    ['Round Robin?', 'Chia lần lượt từng server.'],
    ['Least Connections?', 'Chọn server có ít kết nối đang mở nhất.'],
    ['IP Hash?', 'Băm IP khách để luôn đến cùng một server.'],
    ['Layer 4 vs Layer 7?', 'L4 theo IP/cổng (nhanh); L7 theo nội dung HTTP (thông minh hơn).'],
    ['Blue-Green?', 'Hai môi trường giống nhau, LB chuyển lưu lượng từ xanh sang lục khi triển khai.'],
    ['Canary?', 'Cho một phần nhỏ lưu lượng dùng bản mới để thử.'],
    ['LB là điểm hỏng duy nhất?', 'Có thể — vì thế phải làm LB dư thừa.']
  ],
  quiz: [
    { q: 'Hệ thống giao dịch tần suất cao, trễ micro-giây nên:', o: ['Mở rộng ngang nhiều máy', 'Mở rộng dọc máy mạnh', 'Dùng CDN', 'Dùng long polling'], a: 1, e: 'Độ trễ mạng giữa nhiều máy không chấp nhận được.' },
    { q: 'Mạng xã hội triệu người dùng, tải đột biến nên:', o: ['Dọc', 'Ngang', 'Không mở rộng', 'Chỉ cache'], a: 1, e: 'Ngang linh hoạt và chịu lỗi.' },
    { q: 'Ba server trọng số 5:3:2, 10 yêu cầu chia:', o: ['4/3/3', '5/3/2', '3/3/4', '10/0/0'], a: 1, e: 'Weighted Round Robin.' },
    { q: 'Muốn khách luôn về cùng server:', o: ['Round Robin', 'IP Hash/sticky session', 'Random', 'Least connections'], a: 1, e: 'Giữ phiên.' },
    { q: 'LB L7 khác L4 ở chỗ:', o: ['Đọc được nội dung HTTP', 'Chậm hơn luôn vô ích', 'Không dùng được SSL', 'Chỉ cho UDP'], a: 0, e: 'Định tuyến theo URL, header…' },
    { q: 'Cách tránh LB thành điểm hỏng duy nhất:', o: ['Bỏ LB', 'Làm dư thừa LB', 'Tắt health check', 'Dùng một server'], a: 1, e: 'Redundancy.' }
  ],
  match: [
    ['Scale up', 'Dọc'],
    ['Scale out', 'Ngang'],
    ['Canary', 'Thử bản mới với ít lưu lượng'],
    ['GSLB', 'Chia tải giữa các trung tâm dữ liệu'],
    ['Health check', 'Loại server hỏng khỏi vòng']
  ]
},

{
  n: 6,
  title: 'Mạng và giao thức: TCP, UDP, HTTP và giao tiếp thời gian thực',
  intro: 'Mọi hệ thống phân tán đều “nói chuyện” qua mạng. Cần biết hai kiểu vận chuyển chính (TCP chắc chắn, UDP nhanh) và các cách để máy chủ “đẩy” dữ liệu cho client (WebSocket, SSE, long polling).',
  sections: [
    { icon: '📦', title: 'TCP/IP: chắc chắn nhưng có thủ tục', blocks: [
      { t: 'p', x: 'TCP/IP gồm 4 lớp: <b>Link</b> (Ethernet, Wi-Fi) → <b>Internet</b> (IP: địa chỉ, định tuyến) → <b>Transport</b> (TCP/UDP) → <b>Application</b> (HTTP, FTP…). IP lo “gửi đến đúng địa chỉ”, TCP lo “đến đủ, đúng thứ tự”.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> TCP như gọi điện thoại — alo, “nghe rõ không?”, “rõ”, rồi mới nói; mất tiếng thì hỏi lại. UDP như gửi bưu thiếp — ném vào thùng thư, đến hay không, đúng thứ tự không thì… tùy may.' },
      { t: 'widget', name: 'sd-handshake', title: 'Bắt tay ba bước TCP: bấm từng bước' },
      { t: 'table', head: ['', 'TCP', 'UDP'], rows: [
        ['Kết nối', 'Có (bắt tay 3 bước)', 'Không'],
        ['Đảm bảo tới nơi, đúng thứ tự', 'Có (ACK, gửi lại)', 'Không (có thể mất, trùng, sai thứ tự)'],
        ['Kiểm soát luồng/tắc nghẽn', 'Có', 'Không'],
        ['Header', 'Lớn (cổng, seq, ack, cờ, window, checksum…)', 'Nhỏ (4 trường: cổng nguồn/đích, độ dài, checksum)'],
        ['Tốc độ', 'Chậm hơn, an toàn', 'Nhanh, nhẹ'],
        ['Dùng cho', 'Web, email, truyền file, API', 'Game, gọi video/thoại, DNS, streaming trực tiếp']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – HTTP chạy trên gì?</b> HTTP/1.1 và HTTP/2 chạy trên TCP. HTTP/3 (QUIC) chạy trên <b>UDP</b> nhưng tự thêm độ tin cậy ở tầng trên, nhằm tránh chờ bắt tay lâu và nghẽn “đầu hàng”. Nghĩa là UDP không còn chỉ dành cho game: nó là nền cho web hiện đại.' }
    ] },
    { icon: '📡', title: 'Ba cách “đẩy” dữ liệu thời gian thực', blocks: [
      { t: 'p', x: 'HTTP vốn là “hỏi–đáp”: client hỏi, server trả lời rồi đóng. Server <b>không tự nói trước</b>. Ba cách xoay xở:' },
      { t: 'tabs', items: [
        ['🔁 Long Polling', 'Client hỏi; server <b>cố tình chưa trả lời</b> cho đến khi có tin mới; trả lời xong client lập tức hỏi lại. Chạy ở mọi nơi nhưng kém hiệu quả. 💡 Như gọi hỏi “có thư chưa?” rồi bưu tá đứng chờ đến khi có thư mới đưa.'],
        ['📻 Server-Sent Events (SSE)', 'Một kết nối HTTP mở lâu, <b>server → client một chiều</b>, trình duyệt tự kết nối lại. 💡 Như đài phát thanh: đài nói, bạn chỉ nghe. Hợp với feed, bảng giá, trạng thái build.'],
        ['📞 WebSocket', 'Kết nối hai chiều lâu dài: bắt đầu bằng HTTP rồi “nâng cấp” (mã 101 Switching Protocols), sau đó cả hai bên gửi bất cứ lúc nào, ít overhead. 💡 Như cuộc gọi điện thoại. Hợp với chat, soạn thảo cộng tác, game.']
      ] },
      { t: 'widget', name: 'sd-realtime', title: 'Chọn cách giao tiếp thời gian thực cho ứng dụng của bạn' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách:</b> khi có hàng trăm nghìn kết nối mở lâu (WebSocket/SSE), server phải giữ trạng thái từng kết nối → mở rộng khó hơn REST stateless; cần LB hỗ trợ kết nối dài và cơ chế phát tin (pub/sub qua Redis/Kafka) giữa các server.' }
    ] }
  ],
  summary: [
    'TCP: kết nối, đáng tin, đúng thứ tự, có kiểm soát tắc nghẽn; UDP: nhanh, nhẹ, không đảm bảo.',
    'Bắt tay 3 bước: SYN → SYN-ACK → ACK.',
    'Long polling (cũ, chạy khắp nơi), SSE (một chiều, đơn giản), WebSocket (hai chiều, mạnh nhất).',
    'HTTP/3 chạy trên UDP (QUIC) — UDP không chỉ dành cho game.'
  ],
  cards: [
    ['TCP và IP khác nhau thế nào?', 'IP lo địa chỉ và định tuyến; TCP lo giao nhận đáng tin, đúng thứ tự.'],
    ['Bắt tay 3 bước?', 'SYN → SYN-ACK → ACK.'],
    ['TCP đảm bảo gì?', 'Dữ liệu đến đủ, đúng thứ tự; có kiểm soát luồng và tắc nghẽn; gửi lại gói mất.'],
    ['UDP phù hợp khi?', 'Cần tốc độ, chấp nhận mất gói: game, gọi video, DNS.'],
    ['Header UDP có gì?', 'Cổng nguồn, cổng đích, độ dài, checksum.'],
    ['Long polling hoạt động ra sao?', 'Server giữ yêu cầu mở đến khi có dữ liệu rồi trả lời; client hỏi lại ngay.'],
    ['SSE là gì?', 'Kết nối HTTP dài, server đẩy một chiều, trình duyệt tự kết nối lại.'],
    ['WebSocket là gì?', 'Kênh hai chiều lâu dài, nâng cấp từ HTTP (mã 101).'],
    ['Khi nào dùng WebSocket?', 'Chat, soạn thảo cộng tác, game — cần hai chiều tức thời.'],
    ['Khi nào dùng SSE?', 'Feed, bảng giá, trạng thái — chỉ cần server → client.']
  ],
  quiz: [
    { q: 'Gọi video trực tiếp thường chọn:', o: ['TCP', 'UDP', 'FTP', 'SMTP'], a: 1, e: 'Mất vài gói chấp nhận được, trễ thì không.' },
    { q: 'Thứ tự bắt tay TCP:', o: ['ACK, SYN, SYN-ACK', 'SYN, SYN-ACK, ACK', 'SYN, ACK, FIN', 'FIN, ACK, SYN'], a: 1, e: 'Ba bước.' },
    { q: 'Bảng giá chứng khoán chỉ server → client, đơn giản nhất:', o: ['WebSocket', 'SSE', 'Long polling', 'FTP'], a: 1, e: 'Một chiều, tự reconnect.' },
    { q: 'Chat nhiều người, cần hai chiều tức thời:', o: ['SSE', 'Long polling', 'WebSocket', 'UDP thô'], a: 2, e: 'Full-duplex.' },
    { q: 'Mã HTTP khi nâng cấp lên WebSocket:', o: ['200', '101', '301', '404'], a: 1, e: 'Switching Protocols.' },
    { q: 'Điểm khác biệt chính HTTP truyền thống:', o: ['Server tự gửi trước', 'Client hỏi, server đáp', 'Hai chiều liên tục', 'Không dùng TCP'], a: 1, e: 'Request–response.' }
  ],
  match: [
    ['TCP', 'Đáng tin, có kết nối'],
    ['UDP', 'Nhanh, không đảm bảo'],
    ['SSE', 'Một chiều server → client'],
    ['WebSocket', 'Hai chiều lâu dài'],
    ['SYN-ACK', 'Bước 2 của bắt tay']
  ]
}
);
