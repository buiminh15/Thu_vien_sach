// SDIR – Chương 10–12: cache & CDN, hàng đợi & rate limiting, thiết kế chịu lỗi.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.sysdesign = BOOK_DATA.sysdesign || { chapters: [] };
BOOK_DATA.sysdesign.chapters.push(

{
  n: 10,
  title: 'Tăng tốc: Caching và CDN',
  intro: 'Cache = cuốn sổ ghi sẵn đáp án những câu hay hỏi để khỏi tính lại. CDN = đặt bản sao nội dung ở nhiều nơi gần người dùng. Cả hai cùng nguyên lý: đưa dữ liệu lại gần nơi cần dùng.',
  sections: [
    { icon: '📓', title: 'Cache là gì và vì sao cần', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> làm bài toán 7 × 8, bạn nhớ luôn ra 56 thay vì cộng 8 bảy lần. Đồ dùng học tập: bút để trong hộp bút (cache), sách hay dùng để trên bàn (RAM), sách ít dùng trong cặp (ổ đĩa), phần còn lại ở nhà (kho xa). Lấy bút từ nhà mỗi lần viết thì bài tập làm không bao giờ xong.' },
      { t: 'widget', name: 'sd-latency', title: 'Thang độ trễ: vì sao cache RAM nhanh hơn đĩa/mạng hàng nghìn lần' },
      { t: 'steps', items: [
        'Cần dữ liệu → hỏi cache trước.',
        '<b>Cache hit</b>: có sẵn → trả ngay (rất nhanh).',
        '<b>Cache miss</b>: không có → đọc nguồn chính (chậm hơn) → lưu vào cache cho lần sau.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách:</b> chỉ số quan trọng nhất là <b>hit ratio</b> (tỷ lệ trúng). Thời gian trung bình = hit × (thời gian cache) + miss × (thời gian nguồn). Với cache 1ms, DB 100ms: hit 90% → ~11ms; hit 99% → ~2ms. Từ 90% lên 99% giảm gần 5 lần!' }
    ] },
    { icon: '🗑', title: 'Khi cache đầy thì bỏ cái nào?', blocks: [
      { t: 'table', head: ['Chính sách', 'Quy tắc', 'Hình ảnh'], rows: [
        ['LRU', 'Bỏ cái <b>lâu rồi chưa dùng</b> nhất', 'Cuốn sổ 5 dòng: xóa dòng bao lâu không động tới'],
        ['LFU', 'Bỏ cái <b>dùng ít lần</b> nhất', 'Xóa dòng mới dùng 2 lần, giữ dòng dùng 20 lần'],
        ['FIFO', 'Bỏ cái <b>vào đầu tiên</b>', 'Xếp hàng uống nước: ai đến trước rời đi trước, bất kể dùng nhiều hay ít'],
        ['TTL (hết hạn theo thời gian)', 'Mỗi mục có hạn sử dụng', 'Dự báo thời tiết: hết hạn sau 3 giờ']
      ] },
      { t: 'widget', name: 'sd-cache', title: 'Mô phỏng cache dung lượng 3: nhập chuỗi truy cập, so LRU / LFU / FIFO' }
    ] },
    { icon: '🏗', title: 'Các tầng cache và chuyện “làm mới”', blocks: [
      { t: 'tabs', items: [
        ['🌐 Trình duyệt', 'Lưu ảnh/file đã tải; lần sau mở trang nhanh hơn (logo YouTube không tải lại).'],
        ['🌍 CDN', 'Bản sao nội dung ở nhiều quốc gia (Netflix đặt phim hot gần bạn).'],
        ['🧠 Ứng dụng', 'Lưu danh sách bạn bè trong Redis/Memcached để khỏi truy vấn DB mỗi lần.'],
        ['🗄 Database', 'Giữ kết quả/trang hay dùng (top 20 sản phẩm bán chạy trang chủ).']
      ] },
      { t: 'key', x: '<b>Cache invalidation – bài toán khó nhất:</b> khi dữ liệu gốc đổi, cache cũ phải được làm mới. Bạn bè đổi số điện thoại mà bạn cứ dùng số cũ trong trí nhớ thì không bao giờ gọi được!' },
      { t: 'table', head: ['Cách ghi', 'Làm gì', 'Hình ảnh'], rows: [
        ['<b>Write-through</b>', 'Ghi cache <b>và</b> kho chính cùng lúc', 'Cập nhật cả sổ cá nhân và danh bạ lớp ngay khi bạn chuyển nhà'],
        ['<b>Write-back</b>', 'Ghi cache trước, <b>ghi kho chính sau</b>', 'Ghi tạm số mới lên giấy nhớ, khi rảnh mới cập nhật danh bạ (nhanh nhưng rủi ro mất nếu cache hỏng)'],
        ['<b>Write-around</b>', 'Chỉ ghi kho chính, bỏ qua cache', 'Chỉ sửa danh bạ lớp; lần sau tra danh bạ rồi mới có trong sổ cá nhân']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – cache stampede:</b> khi một mục cache nóng hết hạn, hàng nghìn yêu cầu cùng lúc “miss” và đổ dồn xuống database (như cả sảnh đông ào vào quầy khi cô thu ngân vừa đi). Cách chữa: khóa “chỉ một người đi lấy”, làm mới sớm, hoặc đặt TTL ngẫu nhiên lệch nhau.' }
    ] },
    { icon: '🎬', title: 'CDN: ca Netflix Open Connect', blocks: [
      { t: 'p', x: 'CDN là mạng máy chủ phân tán giao nội dung theo vị trí địa lý. Netflix từng dùng CDN thuê ngoài (Akamai…), nhưng trả tiền theo GB không bền vững khi lưu lượng khổng lồ nên tự xây <b>Open Connect</b> từ ~2011. (Các con số như “220 triệu giờ/ngày”, “15% lưu lượng internet” là số liệu của thời điểm bài viết gốc, đã cũ.)' },
      { t: 'steps', items: [
        '<b>Chuẩn bị nội dung:</b> nhận bản gốc → mã hóa nhiều chất lượng (per-title encoding) → cắt đoạn 2–5 giây → đóng gói streaming thích ứng (ABR).',
        '<b>Máy chủ OCA</b> đặt trong mạng nhà cung cấp internet (ISP) hoặc tại điểm trao đổi internet (IXP); mỗi OCA chỉ chứa nội dung hợp với khu vực.',
        '<b>Đẩy trước (proactive fill)</b> vào giờ thấp điểm, dựa trên mô hình dự đoán độ hot theo vùng.',
        '<b>Định tuyến:</b> DNS động chọn OCA tối ưu theo tải, đường mạng, nội dung sẵn có, khoảng cách, kiểm tra sức khỏe liên tục.',
        '<b>Client thông minh:</b> đo mạng và đổi chất lượng giữa chừng (adaptive bitrate), điều chỉnh bộ đệm, tải trước tập kế tiếp.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> thay vì mọi người đặt sách từ một kho ở xa, hãng đặt sẵn các cuốn sắp hot vào tủ sách ngay trong từng khu phố (ISP) vào ban đêm. Người đọc tải từ tủ gần nhà, kho chính gần như không bị gọi. Khi mạng yếu, người xem tự đổi sang bản ảnh mờ hơn thay vì bị đứng hình.' },
      { t: 'list', items: [
        'Bài học: giải pháp chuyên biệt cho tải đặc thù; đẩy nội dung ra rìa trước khi có nhu cầu; nhiều tầng cache; đẩy bớt quyết định cho client; hợp tác với ISP.',
        'Mẫu CDN dùng ngoài video: cập nhật phần mềm/game, firmware IoT, phân phối dữ liệu khoa học lớn.',
        'Xu hướng: tính toán ở rìa, tối ưu cache bằng AI, tích hợp 5G, HTTP/3 + QUIC, dùng nhiều CDN.'
      ] }
    ] }
  ],
  summary: [
    'Cache lưu bản sao nhanh gần nơi dùng: hit trả ngay, miss đọc nguồn rồi lưu lại.',
    'Chính sách đẩy ra: LRU, LFU, FIFO, TTL.',
    'Ghi: write-through (an toàn), write-back (nhanh, rủi ro), write-around.',
    'Invalidation là phần khó nhất; cẩn thận cache stampede.',
    'CDN đặt nội dung gần người dùng; Netflix đẩy trước nội dung hot vào OCA trong ISP.'
  ],
  cards: [
    ['Cache hit / miss?', 'Hit: có sẵn trong cache. Miss: phải lấy từ nguồn rồi lưu lại.'],
    ['LRU?', 'Loại mục lâu chưa dùng nhất.'],
    ['LFU?', 'Loại mục ít được dùng nhất.'],
    ['FIFO?', 'Loại mục vào cache đầu tiên.'],
    ['TTL?', 'Mỗi mục có thời gian sống rồi tự hết hạn.'],
    ['Write-through?', 'Ghi đồng thời cache và kho chính.'],
    ['Write-back?', 'Ghi cache trước, kho chính sau (nhanh, rủi ro mất dữ liệu).'],
    ['Write-around?', 'Chỉ ghi kho chính, không qua cache.'],
    ['Cache invalidation?', 'Làm mới/bỏ dữ liệu cache khi dữ liệu gốc đổi.'],
    ['CDN?', 'Mạng máy chủ biên đặt bản sao nội dung gần người dùng.'],
    ['Open Connect?', 'CDN riêng của Netflix, máy chủ OCA đặt trong ISP/IXP.'],
    ['Adaptive bitrate?', 'Client tự đổi chất lượng video theo tốc độ mạng.']
  ],
  quiz: [
    { q: 'Hit ratio cao nghĩa là:', o: ['Cache hỏng', 'Phần lớn yêu cầu được trả từ cache', 'DB quá tải', 'Mạng chậm'], a: 1, e: 'Càng cao càng nhanh.' },
    { q: 'Cache đầy, loại mục lâu chưa dùng nhất:', o: ['LFU', 'LRU', 'FIFO', 'TTL'], a: 1, e: 'Least Recently Used.' },
    { q: 'Dữ liệu cần an toàn ngay (ghi cả hai nơi):', o: ['Write-back', 'Write-through', 'Write-around', 'Không ghi'], a: 1, e: 'Đồng bộ.' },
    { q: 'Điều khó nhất của caching:', o: ['Lưu dữ liệu', 'Biết khi nào cache đã cũ (invalidation)', 'Đặt tên', 'Dung lượng RAM'], a: 1, e: 'Dữ liệu cũ gây sai.' },
    { q: 'Netflix đẩy nội dung hot vào OCA:', o: ['Giờ cao điểm', 'Giờ thấp điểm, trước khi có nhu cầu', 'Chỉ khi người xem yêu cầu', 'Không đẩy'], a: 1, e: 'Proactive fill.' },
    { q: 'Cache stampede là:', o: ['Cache mất điện', 'Nhiều yêu cầu cùng miss một mục nóng và đổ xuống DB', 'Cache đầy', 'Lỗi mạng'], a: 1, e: 'Cần khóa/TTL lệch.' }
  ],
  match: [
    ['LRU', 'Lâu chưa dùng nhất'],
    ['LFU', 'Dùng ít nhất'],
    ['TTL', 'Hết hạn theo thời gian'],
    ['CDN', 'Bản sao gần người dùng'],
    ['Write-back', 'Ghi cache trước, kho sau']
  ]
},

{
  n: 11,
  title: 'Hàng đợi tin nhắn và giới hạn tốc độ (rate limiting)',
  intro: 'Hai công cụ giúp hệ thống không “vỡ” khi tải tăng đột biến: hàng đợi biến việc “làm ngay” thành “xếp hàng làm dần”, còn rate limiting đóng vai người gác cổng không cho quá nhiều yêu cầu ập vào.',
  sections: [
    { icon: '☕', title: 'Message queue: quầy gọi nước ở quán cà phê', blocks: [
      { t: 'p', x: 'Hàng đợi tin nhắn cho các phần của hệ thống trao đổi thông tin <b>bất đồng bộ</b>: bên <b>producer</b> bỏ tin vào, bên <b>consumer</b> lấy ra xử lý khi rảnh.' },
      { t: 'tip', x: '💡 <b>Quán cà phê:</b> khách (producer) gọi món bất kể quầy pha chế (consumer) bận hay không; phiếu gọi món (message) xếp theo thứ tự ở quầy (queue); thợ pha chế làm theo tốc độ riêng. Giờ cao điểm phiếu dồn lại nhưng không ai bị bỏ quên.' },
      { t: 'table', head: ['Lợi ích', 'Nghĩa là', 'Ví dụ quán'], rows: [
        ['Tách rời (decoupling)', 'Producer không cần biết consumer có rảnh', 'Khách đặt mà không chờ thợ rảnh'],
        ['San tải (load leveling)', 'Hấp thụ đỉnh lưu lượng', 'Quầy chứa phiếu giờ cao điểm'],
        ['Tin cậy', 'Consumer chết thì tin vẫn nằm trong hàng', 'Thợ nghỉ giải lao, phiếu vẫn chờ'],
        ['Mở rộng', 'Thêm consumer xử lý chung hàng', 'Thêm thợ pha chế giờ cao điểm']
      ] },
      { t: 'widget', name: 'sd-queue', title: 'Mô phỏng hàng đợi: chỉnh số đơn đến và số thợ, xem hàng chờ phình hay xẹp' },
      { t: 'tabs', items: [
        ['📢 Pub/Sub', 'Một tin đến nhiều bên nhận (như loa “Order up!”): thông báo, đồng bộ dữ liệu.'],
        ['🛠 Work queue', 'Chia việc cho nhóm worker (có thể chuyên môn hóa): xử lý ảnh, gửi email.']
      ] },
      { t: 'list', items: [
        'Ứng dụng: xử lý đơn hàng (bấm “mua” là vào hàng, trang web không treo khi thanh toán chậm), thu thập dữ liệu IoT, kết nối microservices tốc độ khác nhau.',
        'Công nghệ: <b>RabbitMQ</b> (đa dụng), <b>Kafka</b> (luồng sự kiện thông lượng lớn), <b>Amazon SQS</b> (dịch vụ quản lý), <b>Redis Streams</b>.',
        'Triển khai: thiết kế định dạng tin; độ bền (khởi động lại có mất tin không?); chính sách retry; xử lý <b>poison message</b> (tin “độc” làm lỗi mãi).'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – “at-least-once” và idempotent:</b> hàng đợi thường hứa giao tin <i>ít nhất một lần</i> → đôi khi tin được giao <b>hai lần</b>. Vì vậy consumer nên <b>idempotent</b> (xử lý lặp lại cho cùng kết quả — ví dụ dùng mã đơn hàng để bỏ qua bản trùng). Tin lỗi nhiều lần được chuyển sang <b>dead-letter queue</b> để xem sau.' }
    ] },
    { icon: '🚦', title: 'Rate limiting: người gác cổng cho API', blocks: [
      { t: 'p', x: 'Giới hạn tốc độ quyết định <b>ai vào và nhanh đến đâu</b>. Không có nó: dễ bị DoS/DDoS, tải đột biến vượt sức, một khách chiếm hết tài nguyên, lỗi lan chuyền, hóa đơn API tăng vọt. Nó vừa bảo vệ hệ thống, vừa công bằng giữa người dùng.' },
      { t: 'table', head: ['Thuật toán', 'Cách hoạt động', 'Đặc điểm'], rows: [
        ['<b>Token bucket</b>', 'Xô chứa token, mỗi request tốn 1 token, token nạp đều; xô rỗng → từ chối', 'Cho phép <b>bùng nổ</b> (tới sức chứa xô), đơn giản, tiết kiệm bộ nhớ'],
        ['<b>Leaky bucket</b>', 'Xô thủng: xử lý với tốc độ cố định, dư thì xếp hàng, đầy thì từ chối', 'Làm mượt lưu lượng, tải backend đều; có thể thêm trễ'],
        ['<b>Fixed window</b>', 'Đếm trong mỗi khung giờ cố định (vd 60 giây)', 'Đơn giản; lỗi “biên cửa sổ” (có thể gấp đôi ở ranh giới)'],
        ['<b>Sliding window log</b>', 'Lưu mốc thời gian mọi request trong cửa sổ trượt', 'Chính xác nhất, tốn bộ nhớ'],
        ['<b>Sliding window counter</b>', 'Ước lượng từ cửa sổ hiện tại + trước đó theo tỷ lệ', 'Cân bằng chính xác/bộ nhớ; thường dùng thực tế']
      ] },
      { t: 'widget', name: 'sd-ratelimit', title: 'Token bucket: xô chứa N token, nạp r token/giây — bấm “gửi request” và xem' },
      { t: 'tip', x: '💡 <b>Token bucket nói dễ hiểu:</b> thẻ đi xe buýt có 10 lượt, mỗi giờ được nạp thêm 1 lượt. Bạn có thể đi liền 10 chuyến (bùng nổ) nhưng sau đó chỉ đi được 1 chuyến mỗi giờ. Rất hợp với người dùng thật hay dồn việc một lúc rồi nghỉ.' },
      { t: 'list', items: [
        '<b>Cục bộ</b> (mỗi instance tự đếm) đơn giản nhưng sai khi có nhiều instance; <b>phân tán</b> cần trạng thái chung (Redis: thao tác nguyên tử + hết hạn theo thời gian; script Lua chạy token bucket).',
        '<b>Phản hồi khi vượt:</b> từ chối <b>HTTP 429</b>; trì hoãn xử lý; làm chậm; giảm chất lượng. Nên trả header: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, <code>X-RateLimit-Reset</code>, <code>Retry-After</code>.',
        '<b>Nhiều chiều:</b> theo user, theo IP, theo endpoint, toàn cục; <b>thích ứng</b> theo tải/giờ/hành vi; trong microservices đặt ở API gateway (thô), dịch vụ (tinh), database (bảo vệ cuối).',
        'Ví dụ: GitHub 60 req/giờ (chưa đăng nhập) vs 5.000 req/giờ (đã đăng nhập); Cloudflare đặt luật theo số request, mã phản hồi, đường dẫn, đặc điểm client.'
      ] }
    ] }
  ],
  summary: [
    'Message queue: tách rời, san tải, tin cậy, mở rộng; chú ý idempotent và poison message.',
    'Pub/Sub (một→nhiều) và work queue (chia việc).',
    'Rate limiting bảo vệ và công bằng: token bucket (cho bùng nổ), leaky bucket (làm mượt), cửa sổ cố định/trượt.',
    'Vượt ngưỡng → HTTP 429 kèm header hướng dẫn; phân tán dùng Redis.'
  ],
  cards: [
    ['Message queue là gì?', 'Bộ đệm để các thành phần trao đổi tin bất đồng bộ.'],
    ['Producer / consumer?', 'Bên gửi tin / bên xử lý tin.'],
    ['Bốn lợi ích hàng đợi?', 'Tách rời, san tải, tin cậy, mở rộng.'],
    ['Pub/Sub?', 'Một tin được nhiều bên đăng ký nhận.'],
    ['Poison message?', 'Tin gây lỗi lặp đi lặp lại, cần cách xử lý riêng.'],
    ['Kafka hợp việc gì?', 'Luồng sự kiện thông lượng cao.'],
    ['Token bucket?', 'Xô token nạp đều; cho phép bùng nổ đến sức chứa xô.'],
    ['Leaky bucket?', 'Xử lý tốc độ cố định, làm mượt lưu lượng.'],
    ['Lỗi biên của fixed window?', 'Lưu lượng có thể gấp đôi ở ranh giới hai cửa sổ.'],
    ['Mã HTTP khi vượt giới hạn?', '429 Too Many Requests.'],
    ['Header Retry-After?', 'Cho client biết bao lâu nữa được thử lại.'],
    ['Vì sao dùng Redis?', 'Trạng thái chung, thao tác nguyên tử, hết hạn theo thời gian.']
  ],
  quiz: [
    { q: 'Cửa hàng nhận 10.000 đơn trong 1 phút nhưng xử lý được 1.000/phút. Giải pháp tự nhiên:', o: ['Từ chối hết', 'Đưa vào hàng đợi xử lý dần', 'Tắt server', 'Xóa đơn'], a: 1, e: 'San tải.' },
    { q: 'Thuật toán cho phép “bùng nổ” ngắn:', o: ['Leaky bucket', 'Token bucket', 'Fixed window', 'Không có'], a: 1, e: 'Dùng token tích lũy.' },
    { q: 'Làm mượt lưu lượng ra backend, tốc độ đều:', o: ['Token bucket', 'Leaky bucket', 'Sliding log', 'Round robin'], a: 1, e: 'Rò đều.' },
    { q: 'Nhiều instance cùng giới hạn cần:', o: ['Đếm cục bộ', 'Trạng thái chung (Redis)', 'Không giới hạn', 'Tắt giới hạn'], a: 1, e: 'Phân tán.' },
    { q: 'Mã trả khi bị giới hạn:', o: ['200', '404', '429', '500'], a: 2, e: 'Too Many Requests.' },
    { q: 'Vì sao consumer nên idempotent?', o: ['Cho nhanh', 'Vì tin có thể giao nhiều hơn một lần', 'Để tăng RAM', 'Vì Kafka bắt buộc'], a: 1, e: 'At-least-once.' }
  ],
  match: [
    ['RabbitMQ', 'Message broker đa dụng'],
    ['Kafka', 'Luồng sự kiện thông lượng cao'],
    ['429', 'Quá nhiều yêu cầu'],
    ['Token bucket', 'Cho bùng nổ'],
    ['Dead-letter queue', 'Nơi chứa tin xử lý lỗi nhiều lần']
  ]
},

{
  n: 12,
  title: 'Thiết kế cho sự cố: timeout, retry và circuit breaker',
  intro: 'Trong hệ phân tán, câu hỏi không phải “có hỏng không” mà là “hỏng thì sao”. Ba mẫu thiết kế cốt lõi — timeout, retry, circuit breaker — biến một lỗi nhỏ thành điều có kiểm soát, thay vì sụp đổ dây chuyền.',
  sections: [
    { icon: '⏱', title: 'Timeout: “tôi không chờ mãi”', blocks: [
      { t: 'p', x: 'Timeout là giới hạn thời gian một thao tác được phép chạy. Không có nó, luồng/kết nối chờ phản hồi không bao giờ đến sẽ tích tụ âm thầm cho đến khi dịch vụ chết — thường không có thông báo lỗi rõ ràng. <b>Mọi cuộc gọi từ xa đều phải có timeout, không ngoại lệ.</b>' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> gọi cứu hộ xe, tổng đài bảo “giữ máy”. Bạn đặt hạn 5 phút; quá hạn thì cúp máy gọi hãng khác. Nếu giữ máy vô hạn bạn kẹt giữa đường cả ngày.' },
      { t: 'list', items: [
        'Chọn bao lâu? Dựa trên SLO: nếu cam kết 99,9% xong trong 300ms, timeout nên lớn hơn chút (vd 500ms) nhưng chừa chỗ cho retry. Quá ngắn → retry thừa; quá dài → cạn tài nguyên.',
        '<b>“Phễu hạn chót” (deadline funnel):</b> timeout càng gần người dùng càng lớn, càng vào sâu càng chặt (vd frontend 1s, dịch vụ nội bộ 200–300ms) để khỏi lãng phí tài nguyên cho yêu cầu chắc chắn quá hạn.'
      ] }
    ] },
    { icon: '🔁', title: 'Retry: thử lại có suy nghĩ', blocks: [
      { t: 'p', x: 'Nhiều lỗi chỉ là thoáng qua (mạng nấc, server đang triển khai) nên thử lại thường thành công. Nhưng thử lại bừa bãi có thể làm hệ thống đang yếu chết nhanh hơn.' },
      { t: 'table', head: ['Kỹ thuật', 'Giải quyết gì', 'Hình ảnh'], rows: [
        ['<b>Backoff (lùi theo cấp số nhân)</b>', 'Tăng dần thời gian chờ giữa các lần thử (1s, 2s, 4s…) để tránh “bão retry”', 'Gọi cửa không ai mở: chờ lâu dần giữa các lần gõ thay vì đập liên tục'],
        ['<b>Jitter (nhiễu ngẫu nhiên)</b>', 'Làm lệch thời điểm thử của nhiều client để không đồng loạt', '1.000 người cùng đếm “1, 2, 3 vào!” sẽ chen cửa cùng giây; thêm ngẫu nhiên thì rải đều'],
        ['<b>Idempotency</b>', 'Thử lại nhiều lần mà không gây tác dụng phụ lặp', 'Bấm “thanh toán” hai lần chỉ trừ tiền một lần']
      ] },
      { t: 'widget', name: 'sd-backoff', title: 'Bảng thời gian chờ retry: không backoff vs backoff vs backoff + jitter' },
      { t: 'key', x: 'Retry hợp với thao tác <b>idempotent</b> (GET, PUT) và lỗi thoáng qua. Thao tác không idempotent (POST) cần <b>idempotency token</b>. <b>Không phải lỗi nào cũng nên retry:</b> sai xác thực, sai dữ liệu, “không tìm thấy” thử lại vô ích. Stripe phân loại lỗi thành “có thể thử lại / không thể” và theo dõi riêng.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – retry budget:</b> giới hạn tổng số retry (vd tối đa 10% lưu lượng). Nếu mỗi tầng trong chuỗi 3 dịch vụ retry 3 lần, một yêu cầu có thể gây 3×3×3 = 27 lần gọi cho dịch vụ cuối — đúng lúc nó đang yếu. Nên retry ở một tầng thôi.' }
    ] },
    { icon: '🔌', title: 'Circuit breaker: cầu dao tự ngắt', blocks: [
      { t: 'p', x: 'Timeout và retry xử lý từng yêu cầu; circuit breaker xử lý <b>toàn hệ thống</b> khi bị áp lực: theo dõi tỷ lệ lỗi, vượt ngưỡng thì tạm chặn yêu cầu, như cầu dao điện ngắt khi quá tải.' },
      { t: 'tabs', items: [
        ['🟢 Closed (đóng)', 'Yêu cầu chạy bình thường, đếm lỗi.'],
        ['🔴 Open (mở)', 'Lỗi vượt ngưỡng → từ chối ngay, không gọi dịch vụ đang hỏng (giúp nó hồi phục, giúp bạn nhanh trả lỗi).'],
        ['🟡 Half-open (nửa mở)', 'Sau thời gian chờ, cho một ít yêu cầu thử; thành công → đóng lại, thất bại → mở lại.']
      ] },
      { t: 'widget', name: 'sd-breaker', title: 'Mô phỏng circuit breaker: bấm gửi yêu cầu khi dịch vụ phụ thuộc khỏe/hỏng' },
      { t: 'list', items: [
        'Đặt trước mọi phụ thuộc có thể chậm/hỏng.',
        'Điều chỉnh theo độ quan trọng: đường không quan trọng (gợi ý phim) → ngưỡng nhạy, trip sớm; đường quan trọng (xác thực) → ngưỡng thận trọng, ưu tiên giảm cấp hơn là từ chối hẳn.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – fallback và bulkhead:</b> khi cầu dao mở, đừng chỉ báo lỗi: trả <b>giá trị dự phòng</b> (danh sách gợi ý chung, dữ liệu cache cũ). <b>Bulkhead</b> (vách ngăn như khoang tàu) giới hạn tài nguyên riêng cho từng phụ thuộc để một nơi chậm không nuốt hết luồng của cả hệ thống.' }
    ] },
    { icon: '⛓', title: 'Chuỗi chống chịu và bài học', blocks: [
      { t: 'steps', items: [
        'Mỗi cuộc gọi có <b>timeout</b>.',
        'Lỗi thoáng qua → <b>retry</b> có backoff + jitter, chỉ cho thao tác idempotent.',
        'Lỗi kéo dài → <b>circuit breaker</b> mở, trả lỗi nhanh hoặc dự phòng.',
        'Giám sát tỷ lệ lỗi, retry, trạng thái cầu dao để chỉnh ngưỡng.'
      ] },
      { t: 'key', x: 'Câu chuyện trong sách: một bộ xử lý thanh toán ngừng 4 giờ, mất 2,3 triệu USD vì <b>một dịch vụ quá tải không có timeout</b> gây lỗi dây chuyền. Lời khuyên (theo Amazon): thiết kế cách xử lý lỗi <b>trước</b>, rồi xây dịch vụ quanh nó — bạn của 3 giờ sáng sẽ cảm ơn.' },
      { t: 'widget', name: 'sd-failure-quiz', title: 'Tình huống: lỗi này nên dùng timeout, retry hay circuit breaker?' }
    ] }
  ],
  summary: [
    'Timeout: không chờ vô hạn; chặt dần về phía sâu (deadline funnel).',
    'Retry: backoff + jitter + idempotency; không retry lỗi vĩnh viễn.',
    'Circuit breaker: closed → open → half-open; ngăn lỗi lan truyền.',
    'Kết hợp cả ba; thiết kế xử lý lỗi trước khi xây tính năng.'
  ],
  cards: [
    ['Timeout để làm gì?', 'Không chờ phản hồi vô hạn, tránh cạn luồng/kết nối.'],
    ['Deadline funnel?', 'Timeout càng vào sâu càng ngắn để khỏi lãng phí cho yêu cầu chắc chắn quá hạn.'],
    ['Exponential backoff?', 'Tăng gấp đôi thời gian chờ giữa các lần retry.'],
    ['Jitter?', 'Thêm ngẫu nhiên vào thời gian chờ để các client không retry đồng loạt.'],
    ['Idempotent?', 'Thực hiện nhiều lần cho kết quả như một lần.'],
    ['Lỗi nào không nên retry?', 'Sai xác thực, sai dữ liệu đầu vào, không tìm thấy.'],
    ['Ba trạng thái circuit breaker?', 'Closed, Open, Half-open.'],
    ['Half-open làm gì?', 'Cho ít yêu cầu thử để xem phụ thuộc đã hồi phục chưa.'],
    ['Retry storm?', 'Rất nhiều retry cùng lúc làm dịch vụ đang yếu chết hẳn.'],
    ['Bulkhead?', 'Cô lập tài nguyên theo phụ thuộc để lỗi không lan.'],
    ['Fallback?', 'Giá trị dự phòng trả về khi dịch vụ chính lỗi.']
  ],
  quiz: [
    { q: 'Chuỗi 3 dịch vụ, mỗi tầng retry 3 lần. Dịch vụ cuối có thể nhận tối đa:', o: ['3 lần', '9 lần', '27 lần', '1 lần'], a: 2, e: '3×3×3 — khuếch đại retry.' },
    { q: 'POST thanh toán cần retry an toàn → dùng:', o: ['Idempotency token', 'Tắt timeout', 'Thêm RAM', 'Round Robin'], a: 0, e: 'Tránh trừ tiền hai lần.' },
    { q: 'Cầu dao đang Open. Sau thời gian chờ sẽ sang:', o: ['Closed', 'Half-open', 'Vĩnh viễn Open', 'Tắt'], a: 1, e: 'Thử vài yêu cầu.' },
    { q: 'Mục đích của jitter:', o: ['Tăng tốc', 'Tránh các client retry đồng bộ', 'Mã hóa', 'Nén'], a: 1, e: 'Rải đều thời điểm.' },
    { q: 'Lỗi “401 Unauthorized” nên:', o: ['Retry nhiều lần', 'Không retry (lỗi vĩnh viễn)', 'Tăng timeout', 'Mở cầu dao'], a: 1, e: 'Thử lại không đổi được.' },
    { q: 'Dịch vụ gợi ý phim (không quan trọng) nên có ngưỡng cầu dao:', o: ['Rất thận trọng', 'Nhạy, trip sớm', 'Không có', 'Tắt'], a: 1, e: 'Hy sinh chức năng phụ để bảo vệ phần chính.' }
  ],
  match: [
    ['Timeout', 'Không chờ vô hạn'],
    ['Backoff', 'Chờ lâu dần giữa các lần thử'],
    ['Jitter', 'Ngẫu nhiên hóa thời điểm retry'],
    ['Open', 'Từ chối ngay không gọi phụ thuộc'],
    ['Idempotency token', 'Retry POST an toàn']
  ]
}
);
