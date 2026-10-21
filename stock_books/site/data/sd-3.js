// SDIR – Chương 7–9: API & định dạng dữ liệu, kiến trúc, dữ liệu phân tán.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.sysdesign = BOOK_DATA.sysdesign || { chapters: [] };
BOOK_DATA.sysdesign.chapters.push(

{
  n: 7,
  title: 'API và định dạng dữ liệu: REST, GraphQL, gRPC; JSON, Protobuf, Avro',
  intro: 'API là “thực đơn” để các hệ thống gọi nhau. Có ba phong cách phổ biến. Dữ liệu đi qua API cũng phải được “đóng gói” (serialize) theo một định dạng — chọn sai sẽ tốn băng thông và CPU.',
  sections: [
    { icon: '🍽', title: 'Ba phong cách API', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (nhà hàng):</b> <b>REST</b> = gọi từng món trong thực đơn cố định (GET /products). <b>GraphQL</b> = đưa phiếu ghi đúng những gì muốn: “cho tôi tên khách + 3 bài đăng + bình luận”, bếp làm một lần. <b>gRPC</b> = bếp trưởng nội bộ gọi nhau bằng mật hiệu nhị phân cực nhanh, chỉ dùng trong hậu trường.' },
      { t: 'table', head: ['', 'REST', 'GraphQL', 'gRPC'], rows: [
        ['Ý tưởng', 'Tài nguyên + HTTP (GET/POST/PUT/DELETE), stateless', 'Ngôn ngữ truy vấn, một endpoint, client chọn trường cần', 'Gọi hàm từ xa (RPC) qua HTTP/2 + Protobuf'],
        ['Ưu', 'Đơn giản, trình duyệt hỗ trợ khắp nơi, dễ scale', 'Không lấy thừa/thiếu, một request, schema có kiểu', 'Nhanh, trễ thấp, nhị phân gọn, streaming hai chiều'],
        ['Nhược', 'Over/under-fetching, khó quản lý phiên bản', 'Cache khó, truy vấn phức tạp khó tối ưu', 'Khó học hơn, trình duyệt cần proxy'],
        ['Ví dụ', 'API công khai GitHub', 'Facebook, GitHub (dữ liệu lồng nhau)', 'Google nội bộ, microservices']
      ] },
      { t: 'tabs', items: [
        ['REST', 'Ví dụ: <code>GET /products</code> (danh sách), <code>POST /orders</code> (tạo đơn), <code>PUT /users/{id}</code> (sửa). Stateless: mỗi request mang đủ thông tin, server không nhớ client.'],
        ['GraphQL', 'Ví dụ: <code>{ user(id:"123"){ name posts{ title comments{ text } } } }</code> — một lần lấy hồ sơ + bài đăng + bình luận, tránh nhiều vòng gọi.'],
        ['gRPC', 'Khai báo trong file .proto: <code>service DataService { rpc GetData (DataRequest) returns (DataResponse); }</code> — client gọi như hàm cục bộ, qua một kết nối HTTP/2.']
      ] },
      { t: 'widget', name: 'sd-api-pick', title: 'Chọn REST / GraphQL / gRPC theo tình huống' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – over/under-fetching là gì?</b> Over-fetching: API trả cả 30 trường trong khi bạn chỉ cần 2 (phí băng thông). Under-fetching: một API chưa đủ, phải gọi thêm 3–4 API nữa mới ráp được màn hình (nhiều vòng mạng). GraphQL ra đời để sửa hai bệnh này.' },
      { t: 'list', items: ['Thực hành tốt: đặt tên nhất quán; tài liệu (Swagger/GraphiQL); thông báo lỗi rõ + mã lỗi chuẩn; xác thực/phân quyền, HTTPS, rate limit; cache, giảm kích thước payload.'] }
    ] },
    { icon: '🧳', title: 'Định dạng dữ liệu (serialization)', blocks: [
      { t: 'p', x: 'Serialization = biến đối tượng trong bộ nhớ thành chuỗi byte để gửi qua mạng/lưu đĩa, rồi dịch ngược ở đầu kia. Chọn định dạng ảnh hưởng băng thông, CPU, dung lượng lưu, năng suất và tương thích ngôn ngữ.' },
      { t: 'table', head: ['', 'JSON', 'Protobuf', 'Avro'], rows: [
        ['Dạng', 'Văn bản dễ đọc', 'Nhị phân + schema (.proto), sinh code', 'Nhị phân, schema (JSON) nằm cùng dữ liệu'],
        ['Ưu', 'Đơn giản, phổ biến, linh hoạt', 'Nhỏ, nhanh, kiểu chặt, tương thích ngược tốt', 'Tiến hóa schema xuất sắc, tự mô tả, không cần sinh code, chia nhỏ được'],
        ['Nhược', 'Dài dòng (lặp tên trường), parse chậm, ít kiểu', 'Cần biên dịch schema, khó đọc bằng mắt', 'Cần schema registry, cộng đồng nhỏ hơn'],
        ['Dùng ở', 'API công khai, cấu hình, MongoDB', 'gRPC, hệ thống nội bộ Google, Kubernetes, etcd', 'Kafka, Hadoop, pipeline dữ liệu LinkedIn']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> JSON như thư tay viết đầy đủ “họ_tên: Nguyễn Văn A, tuổi: 30” cho từng người (dễ đọc, tốn giấy). Protobuf như mẫu phiếu in sẵn: chỉ điền số vào ô, ai cũng biết ô nào là gì nhờ bản mẫu đã chia sẻ trước — gọn hơn rất nhiều nhưng phải có bản mẫu mới đọc được.' },
      { t: 'widget', name: 'sd-serialize', title: 'So sánh kích thước và băng thông JSON vs nhị phân ở quy mô lớn' },
      { t: 'warn', x: 'Sách ghi “Protobuf nhỏ hơn 3–10 lần, parse nhanh tới 100 lần” và ca Netflix giảm 80% băng thông — đây là số liệu minh họa/tiếp thị, thay đổi nhiều theo dữ liệu. Hãy tự benchmark trên dữ liệu của bạn.' },
      { t: 'key', x: '<b>Cách dùng lai thường gặp:</b> API công khai → JSON (dễ cho lập trình viên); dịch vụ nội bộ → Protobuf (hiệu năng); pipeline dữ liệu → Avro (tiến hóa schema + lưu trữ).' }
    ] }
  ],
  summary: [
    'REST đơn giản/phổ biến; GraphQL linh hoạt lấy đúng dữ liệu; gRPC nhanh cho nội bộ.',
    'GraphQL giải over/under-fetching nhưng cache khó; gRPC khó dùng trực tiếp từ trình duyệt.',
    'JSON dễ đọc, Protobuf gọn + nhanh, Avro mạnh về tiến hóa schema và big data.',
    'Hệ thống lớn thường dùng lai: JSON ngoài, Protobuf trong, Avro cho dữ liệu.'
  ],
  cards: [
    ['REST là gì?', 'Phong cách API dựa trên tài nguyên + phương thức HTTP, stateless.'],
    ['GraphQL là gì?', 'Ngôn ngữ truy vấn API cho client chọn đúng trường cần, một endpoint.'],
    ['gRPC là gì?', 'Framework RPC hiệu năng cao qua HTTP/2 + Protobuf.'],
    ['Over-fetching?', 'Nhận nhiều dữ liệu hơn cần.'],
    ['Under-fetching?', 'Một API chưa đủ, phải gọi thêm nhiều lần.'],
    ['Nhược điểm GraphQL?', 'Cache khó, tối ưu truy vấn phức tạp khó.'],
    ['Nhược điểm gRPC?', 'Đường cong học, hạn chế trình duyệt.'],
    ['JSON ưu/nhược?', 'Dễ đọc, phổ biến / dài dòng, parse chậm.'],
    ['Protobuf cần gì?', 'Schema .proto, biên dịch sinh code; nhị phân.'],
    ['Avro mạnh ở đâu?', 'Tiến hóa schema, tự mô tả, dùng trong Kafka/Hadoop.'],
    ['Mô hình lai phổ biến?', 'JSON ở API công khai, Protobuf nội bộ, Avro cho pipeline.']
  ],
  quiz: [
    { q: 'API công khai cho nhà phát triển bên ngoài, đơn giản nhất:', o: ['gRPC', 'REST/JSON', 'Avro', 'UDP'], a: 1, e: 'Phổ biến và dễ tiếp cận.' },
    { q: 'App di động cần lấy hồ sơ + bài đăng + bình luận trong một lần gọi:', o: ['REST thuần', 'GraphQL', 'FTP', 'SOAP'], a: 1, e: 'Giảm vòng mạng.' },
    { q: 'Giao tiếp giữa microservices cần trễ thấp:', o: ['gRPC', 'GraphQL', 'XML', 'Email'], a: 0, e: 'HTTP/2 + Protobuf.' },
    { q: 'Kafka pipeline thường dùng định dạng:', o: ['Avro', 'CSV thuần', 'HTML', 'YAML'], a: 0, e: 'Tiến hóa schema.' },
    { q: 'Điều nào đúng về Protobuf?', o: ['Dễ đọc bằng mắt', 'Nhị phân, nhỏ gọn, cần schema', 'Không có kiểu', 'Chỉ cho JavaScript'], a: 1, e: 'Cần công cụ để xem.' },
    { q: 'REST “stateless” nghĩa là:', o: ['Không có trạng thái HTTP', 'Server không nhớ client giữa các request', 'Không dùng database', 'Không có lỗi'], a: 1, e: 'Mỗi request đủ thông tin.' }
  ],
  match: [
    ['REST', 'Tài nguyên + HTTP'],
    ['GraphQL', 'Client chọn trường cần'],
    ['gRPC', 'RPC qua HTTP/2'],
    ['Protobuf', 'Nhị phân có schema .proto'],
    ['Avro', 'Schema đi kèm dữ liệu']
  ]
},

{
  n: 8,
  title: 'Kiến trúc: monolith hay microservices; proxy hay API gateway',
  intro: 'Hai quyết định kiến trúc lớn: ứng dụng là một khối hay chia nhỏ thành nhiều dịch vụ; và “cổng” phía trước hệ thống nên là proxy hay API gateway.',
  sections: [
    { icon: '🏢', title: 'Monolith và Microservices', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <b>Monolith</b> = một tòa nhà lớn: mọi phòng ban chung một cửa, dễ đi lại, nhưng sửa một phòng phải đóng cả tòa. <b>Microservices</b> = một khu phố nhiều nhà nhỏ, mỗi nhà một phòng ban, sửa nhà nào chỉ nhà đó đóng cửa — nhưng bạn phải lo đường xá, biển chỉ dẫn, điện nước giữa các nhà (vận hành phức tạp).' },
      { t: 'table', head: ['', 'Monolith', 'Microservices'], rows: [
        ['Mã nguồn / triển khai', 'Một codebase, triển khai nguyên khối', 'Nhiều dịch vụ độc lập, triển khai riêng'],
        ['Dữ liệu', 'Thường một database chung', 'Mỗi dịch vụ một database'],
        ['Ưu', 'Đơn giản, phát triển nhanh lúc đầu, dễ debug, chia sẻ bộ nhớ, nhất quán tốt', 'Triển khai độc lập, tự do công nghệ, chịu lỗi cô lập, scale từng phần, nhóm tự chủ'],
        ['Nhược', 'Khó scale từng phần, khóa công nghệ, nhóm cản trở nhau', 'Vận hành phức tạp, nhất quán dữ liệu khó, phụ thuộc giữa dịch vụ'],
        ['Ví dụ', 'Hệ thống ngân hàng truyền thống', 'Netflix (hàng trăm dịch vụ)']
      ] },
      { t: 'widget', name: 'sd-arch-pick', title: 'Nên monolith, modular monolith hay microservices?' },
      { t: 'key', x: '<b>Modular monolith</b> (monolith chia mô-đun rõ ràng): một đơn vị triển khai nhưng ranh giới mô-đun chặt, schema DB tách rạch ròi → sau này dễ tách thành microservice. Shopify khởi đầu như vậy và chỉ tách những phần cần scale riêng. Nhiều hệ thống thành công khởi đầu bằng monolith.' },
      { t: 'tabs', items: [
        ['🌿 Strangler Fig', 'Đặt lớp facade/API trước monolith → tách dần từng chức năng thành dịch vụ mới → chuyển hướng lưu lượng qua facade → khi không còn dùng thì bỏ phần cũ. (Như dây leo “đa” dần bao phủ rồi thay cây chủ.)'],
        ['🧱 Domain-Driven Design', 'Xác định bounded context, bám theo năng lực kinh doanh, xác định aggregate (thực thể phải ở cùng nhau), thiết kế cách các dịch vụ tích hợp.'],
        ['🛠 Giải quyết khó khăn', 'Vận hành phức tạp → giám sát, chuẩn hóa triển khai, service mesh. Nhất quán dữ liệu → saga, eventual consistency, domain events. Giao tiếp → circuit breaker, retry, bulkhead, API gateway.']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Saga là gì?</b> Giao dịch trải qua nhiều dịch vụ không thể “một phát rollback” như trong một database. Saga chia thành chuỗi bước cục bộ (đặt hàng → trừ kho → thanh toán); nếu bước sau lỗi thì chạy các bước <b>bù trừ</b> (hoàn kho, hủy đơn) để quay về trạng thái hợp lý.' }
    ] },
    { icon: '🚪', title: 'Proxy và API Gateway', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <b>Proxy</b> như bảo vệ tòa nhà: nhìn mặt (địa chỉ/giao thức), mở cửa, chặn người lạ, chỉ đường chung chung. <b>API Gateway</b> như lễ tân thông minh: hiểu bạn cần gì (đặt phòng? khiếu nại?), kiểm tra thẻ, đếm số lần bạn hỏi, dịch yêu cầu và đưa đến đúng phòng ban.' },
      { t: 'table', head: ['', 'Proxy', 'API Gateway'], rows: [
        ['Tầng hoạt động', 'Mạng/giao thức (L7 proxy hiểu HTTP)', 'Tầng ứng dụng, hiểu ngữ nghĩa API'],
        ['Chức năng', 'Load balancing, cache, SSL termination, lọc cơ bản, connection pooling', 'Biến đổi request/response, định tuyến theo nội dung, versioning, A/B/canary, tài liệu/portal, phân tích sử dụng, hạn mức, rate limit theo luật kinh doanh, phân quyền chi tiết'],
        ['Forward proxy', 'Đứng phía client, giấu client, lọc truy cập (proxy công ty)', '—'],
        ['Reverse proxy', 'Đứng phía server, giấu server, chia tải, SSL (NGINX trước app server)', '—'],
        ['Ví dụ', 'NGINX, HAProxy, Envoy', 'Kong, Amazon API Gateway, Apigee']
      ] },
      { t: 'steps', items: [
        '<b>Edge (CDN/edge proxy):</b> phân phối toàn cầu, chống DDoS, cache tĩnh.',
        '<b>Hạ tầng (reverse proxy):</b> chia tải giữa trung tâm dữ liệu, SSL.',
        '<b>Ứng dụng (API gateway):</b> xác thực, định tuyến đến microservice, biến đổi.',
        '<b>Dịch vụ (microservices):</b> logic nghiệp vụ.'
      ] },
      { t: 'p', x: 'Chọn: lưu lượng HTTP phẳng, cần thông lượng tối đa → proxy; hệ API phức tạp, nhiều client, cần quản lý trải nghiệm nhà phát triển → API gateway. Lộ trình: bắt đầu bằng proxy, thêm gateway khi nhu cầu quản lý API lớn dần; thực tế thường dùng <b>cả hai</b> theo lớp.' }
    ] }
  ],
  summary: [
    'Monolith: đơn giản lúc đầu; microservices: linh hoạt nhưng vận hành phức tạp; modular monolith là điểm giữa.',
    'Chọn theo quy mô nhóm, độ phức tạp miền, nhu cầu scale riêng — không có đáp án tuyệt đối.',
    'Strangler Fig để di cư từ monolith; DDD để tìm ranh giới dịch vụ.',
    'Proxy lo mạng/giao thức; API gateway lo ngữ nghĩa API. Hệ lớn dùng cả hai theo lớp.'
  ],
  cards: [
    ['Monolith là gì?', 'Ứng dụng một khối: một codebase, triển khai chung, thường một DB.'],
    ['Microservices là gì?', 'Nhiều dịch vụ nhỏ độc lập, mỗi dịch vụ chủ một nghiệp vụ và DB riêng.'],
    ['Khi nào chọn monolith?', 'Startup/MVP, nhóm nhỏ, miền đơn giản, cần nhất quán mạnh.'],
    ['Khi nào chọn microservices?', 'Ứng dụng lớn, nhiều nhóm, scale từng phần, triển khai thường xuyên.'],
    ['Modular monolith?', 'Một khối nhưng chia mô-đun ranh giới rõ, dễ tách sau.'],
    ['Strangler Fig?', 'Thay thế monolith dần qua facade, tách từng chức năng.'],
    ['Saga?', 'Chuỗi giao dịch cục bộ + bước bù trừ cho giao dịch xuyên dịch vụ.'],
    ['Forward vs reverse proxy?', 'Forward đại diện client; reverse đại diện server.'],
    ['API gateway làm gì thêm proxy?', 'Hiểu API: biến đổi, versioning, hạn mức, phân quyền, portal, phân tích.'],
    ['Kong, Apigee là gì?', 'Sản phẩm API gateway.'],
    ['NGINX, HAProxy, Envoy?', 'Proxy/load balancer.']
  ],
  quiz: [
    { q: 'Startup có 4 kỹ sư, cần ra sản phẩm nhanh nên:', o: ['Microservices ngay', 'Monolith (hoặc modular monolith)', 'Gateway trước', 'Chia 50 dịch vụ'], a: 1, e: 'Đơn giản, nhanh.' },
    { q: 'Mỗi microservice thường có:', o: ['Database chung', 'Database riêng', 'Không dữ liệu', 'Chỉ cache'], a: 1, e: 'Dữ liệu phân quyền theo dịch vụ.' },
    { q: 'Strangler Fig dùng để:', o: ['Tối ưu SQL', 'Chuyển dần từ monolith sang dịch vụ', 'Chống DDoS', 'Mã hóa'], a: 1, e: 'Thay thế dần.' },
    { q: 'Thành phần nào hiểu ngữ nghĩa API (method, path, tham số)?', o: ['Proxy L4', 'API gateway', 'Switch', 'DNS'], a: 1, e: 'Hoạt động ở tầng ứng dụng.' },
    { q: 'NGINX đặt trước app server là:', o: ['Forward proxy', 'Reverse proxy', 'Database', 'CDN'], a: 1, e: 'Đại diện server.' },
    { q: 'Vấn đề lớn của microservices:', o: ['Không thể scale', 'Vận hành và nhất quán dữ liệu phức tạp', 'Không có API', 'Không dùng được cloud'], a: 1, e: 'Chi phí vận hành tăng.' }
  ],
  match: [
    ['Modular monolith', 'Một khối, mô-đun rõ ràng'],
    ['Saga', 'Giao dịch phân tán có bước bù trừ'],
    ['Reverse proxy', 'Đại diện cho server'],
    ['API gateway', 'Hiểu ngữ nghĩa API'],
    ['DDD', 'Tìm ranh giới dịch vụ']
  ]
},

{
  n: 9,
  title: 'Dữ liệu phân tán: SQL/NoSQL, định lý CAP và mô hình nhất quán',
  intro: 'Khi dữ liệu nằm trên nhiều máy, bạn phải chọn kiểu lưu trữ và chấp nhận đánh đổi giữa “mọi nơi thấy y hệt nhau” và “luôn trả lời được”. Đây là phần khó nhất của thiết kế hệ thống — nên chương này giải thích thật chậm bằng ví dụ đời thường.',
  sections: [
    { icon: '🗄', title: 'SQL hay NoSQL?', blocks: [
      { t: 'table', head: ['', 'SQL (quan hệ)', 'NoSQL'], rows: [
        ['Cấu trúc', 'Bảng + schema cố định, khóa ngoại', 'Schema linh hoạt, nhiều mô hình'],
        ['Tính chất', 'ACID, giao dịch, truy vấn JOIN mạnh', 'Dễ mở rộng ngang, truy vấn đơn giản hơn, thường ưu tiên sẵn sàng'],
        ['Mở rộng', 'Chủ yếu dọc', 'Ngang'],
        ['Ví dụ', 'PostgreSQL, MySQL, Oracle, SQL Server', 'MongoDB, Redis, DynamoDB, Cassandra, Neo4j']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – ACID nói đơn giản:</b> <b>A</b>tomicity (nguyên tử): chuyển tiền thì “trừ bên này + cộng bên kia” hoặc cùng xảy ra hoặc không gì xảy ra. <b>C</b>onsistency: luôn tuân quy tắc (số dư không âm). <b>I</b>solation: hai giao dịch đồng thời không dẫm chân nhau. <b>D</b>urability: đã xác nhận thì mất điện cũng không mất.' },
      { t: 'tabs', items: [
        ['📄 Document', 'MongoDB, CouchDB. Dữ liệu lồng nhau, thuộc tính mỗi mục khác nhau: danh mục sản phẩm, CMS.'],
        ['🔑 Key-value', 'Redis, DynamoDB. Tra theo khóa cực nhanh: cache, phiên đăng nhập, thời gian thực.'],
        ['🏛 Column-family', 'Cassandra, HBase. Khối lượng khổng lồ trên nhiều máy, ghi nhanh: chuỗi thời gian, IoT.'],
        ['🕸 Graph', 'Neo4j. Quan hệ chằng chịt: mạng xã hội, gợi ý, phát hiện gian lận.']
      ] },
      { t: 'widget', name: 'sd-db-pick', title: 'Chọn loại database theo nhu cầu' },
      { t: 'key', x: '<b>Polyglot persistence</b> (nhiều loại DB trong một hệ thống): ví dụ thương mại điện tử — PostgreSQL cho đơn hàng/kho (ACID), MongoDB cho danh mục sản phẩm; mạng xã hội — Neo4j cho đồ thị bạn bè, MongoDB cho bài đăng, PostgreSQL cho tài khoản. Đổi database sau này rất tốn kém nên phân tích kỹ trước.' }
    ] },
    { icon: '🍕', title: 'Định lý CAP bằng chuyện giao pizza', blocks: [
      { t: 'p', x: 'Eric Brewer (2000): một kho dữ liệu phân tán không thể đồng thời đảm bảo cả 3: <b>C</b>onsistency (mọi nơi cùng một dữ liệu), <b>A</b>vailability (luôn trả lời), <b>P</b>artition tolerance (chịu được đứt liên lạc giữa các nút).' },
      { t: 'tip', x: '💡 <b>Chuỗi pizza nhiều chi nhánh:</b> C = mọi chi nhánh cùng một thực đơn ngay khi cập nhật. A = chuỗi luôn nhận đơn. P = bão làm đứt điện thoại giữa vài chi nhánh nhưng chuỗi vẫn hoạt động.' },
      { t: 'widget', name: 'sd-cap', title: 'Bão đến, chi nhánh mất liên lạc: chọn CP hoặc AP và xem điều gì xảy ra' },
      { t: 'table', head: ['Chọn', 'Khi đứt liên lạc', 'Ví dụ thực tế'], rows: [
        ['<b>CP</b>', 'Chi nhánh mất liên lạc từ chối nhận đơn để khỏi bán sai', 'Ngân hàng, ATM: thà báo “tạm ngưng” còn hơn sai số dư; thanh toán/giữ kho'],
        ['<b>AP</b>', 'Vẫn nhận đơn, có thể bán món đã bỏ khỏi thực đơn (tạm lệch)', 'Mạng xã hội, duyệt hàng (hiển thị tồn kho hơi cũ vẫn tốt hơn báo lỗi)']
      ] },
      { t: 'warn', x: '<b>Hiểu đúng:</b> sách nói “CA” là có thể nếu không có đứt liên lạc — nhưng ở hệ phân tán thật, <b>đứt mạng sẽ xảy ra</b>, nên P không phải thứ để “bỏ”. Lựa chọn thực chất là <b>C hay A khi có partition</b>. Lúc mạng bình thường bạn vẫn có thể có cả C lẫn A. Ngay cả trong một hệ thống, mỗi loại dữ liệu có thể chọn khác nhau (thanh toán CP, duyệt sản phẩm AP).' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – PACELC:</b> mở rộng CAP — nếu có Partition thì chọn A hay C; <i>Else</i> (khi mạng bình thường) vẫn phải đánh đổi giữa <b>L</b>atency (trễ) và <b>C</b>onsistency, vì đồng bộ mọi bản sao tốn thời gian.' }
    ] },
    { icon: '🔄', title: 'Các mô hình nhất quán (từ chặt đến lỏng)', blocks: [
      { t: 'p', x: 'Nhất quán trả lời câu hỏi: <b>“Tôi ghi dữ liệu ở đây — khi nào và ở đâu người khác đọc được?”</b> Càng chặt thì càng chính xác nhưng càng chậm và dễ ngừng khi mạng lỗi.' },
      { t: 'tabs', items: [
        ['🥇 Nhất quán mạnh (Linearizability)', 'Đọc luôn thấy lần ghi mới nhất, từ bất kỳ nút nào, như thể chỉ có một máy. Giá: đồng bộ chậm, mất sẵn sàng khi partition. Dùng cho tài chính. Google Spanner dùng TrueTime. Cần Paxos/Raft, two-phase commit.'],
        ['🔢 Sequential', 'Mọi thao tác như xảy ra theo một thứ tự chung và thao tác của từng nút giữ đúng thứ tự gửi; nhưng không ràng buộc “thời gian thực” giữa các nút.'],
        ['🔗 Causal (nhân quả)', 'Các thao tác có quan hệ nhân quả được thấy cùng thứ tự ở mọi nơi; thao tác độc lập có thể thấy khác thứ tự. Ví dụ: A ghi X=1 → B đọc X=1 rồi ghi Y=2 → C thấy Y=2 thì chắc chắn phải thấy X=1. Hợp với bình luận “trả lời” phải đứng sau bài gốc.'],
        ['🕰 Eventual (cuối cùng)', 'Nếu không còn ghi mới, cuối cùng mọi nơi sẽ thấy giá trị mới nhất — không hứa khi nào. DynamoDB, Cassandra. Hợp với danh mục sản phẩm, số follower, CDN. Dùng vector clock, Last-Writer-Wins, CRDT để xử lý xung đột.']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> bạn sửa số điện thoại bạn bè trong danh bạ điện thoại, nhưng danh bạ trên máy tính bảng vài phút sau mới đồng bộ. Trong lúc đó mở máy tính bảng sẽ thấy số cũ — đó là <b>eventual consistency</b>. Nếu bắt mọi máy phải cập nhật xong mới cho dùng thì là <b>nhất quán mạnh</b> (an toàn nhưng chờ lâu).' },
      { t: 'widget', name: 'sd-consistency', title: 'Ghi ở bản sao A, đọc ở bản sao B: nhất quán mạnh vs cuối cùng' },
      { t: 'list', items: [
        'Stale read (đọc dữ liệu cũ) ở mô hình lỏng → dùng <b>read-your-writes</b>: sau khi bạn ghi, đọc của chính bạn được chuyển đến nút đã nhận ghi.',
        'Xung đột dữ liệu khi eventual → CRDT hoặc cơ chế giải quyết xung đột tự viết.',
        'Chọn mô hình khác nhau cho từng loại dữ liệu: tài chính mạnh; mạng xã hội/cộng tác causal; ít quan trọng eventual.'
      ] }
    ] }
  ],
  summary: [
    'SQL: cấu trúc rõ, ACID, JOIN; NoSQL: linh hoạt, scale ngang; thực tế dùng nhiều loại (polyglot).',
    'CAP: khi có partition phải chọn nhất quán (CP) hay sẵn sàng (AP).',
    'Nhất quán mạnh → causal → eventual: càng lỏng càng nhanh/sẵn sàng nhưng có thể đọc dữ liệu cũ.',
    'Chọn mô hình theo từng loại dữ liệu và yêu cầu kinh doanh.'
  ],
  cards: [
    ['ACID?', 'Atomicity, Consistency, Isolation, Durability.'],
    ['Khi nào chọn SQL?', 'Dữ liệu có cấu trúc, quan hệ rõ, giao dịch, nhất quán mạnh, truy vấn phức tạp.'],
    ['Khi nào chọn NoSQL?', 'Schema linh hoạt, quy mô lớn, mở rộng ngang, truy vấn đơn giản.'],
    ['4 loại NoSQL?', 'Document, key-value, column-family, graph.'],
    ['Polyglot persistence?', 'Dùng nhiều loại database cho các phần khác nhau của hệ thống.'],
    ['CAP?', 'Không thể có đồng thời Consistency, Availability, Partition tolerance.'],
    ['CP ví dụ?', 'Ngân hàng, ATM.'],
    ['AP ví dụ?', 'Mạng xã hội, duyệt sản phẩm.'],
    ['Vì sao P gần như bắt buộc?', 'Mạng đứt là không thể tránh trong hệ phân tán.'],
    ['Eventual consistency?', 'Cuối cùng mọi bản sao thấy cùng giá trị, không hứa khi nào.'],
    ['Causal consistency?', 'Thao tác nhân quả được thấy cùng thứ tự mọi nơi.'],
    ['CRDT?', 'Cấu trúc dữ liệu tự hợp nhất xung đột không cần phối hợp.'],
    ['Raft/Paxos?', 'Thuật toán đồng thuận để đạt nhất quán mạnh.']
  ],
  quiz: [
    { q: 'Đơn hàng, thanh toán, tồn kho cần:', o: ['SQL/ACID', 'Cache thuần', 'Graph', 'File text'], a: 0, e: 'Cần giao dịch chính xác.' },
    { q: 'Mạng xã hội chấp nhận dữ liệu hơi cũ để luôn trả lời — kiểu:', o: ['CP', 'AP', 'CA', 'Không CAP'], a: 1, e: 'Ưu tiên sẵn sàng.' },
    { q: 'Ngân hàng khi mất liên lạc giữa nút nên:', o: ['Vẫn nhận mọi giao dịch', 'Từ chối để giữ đúng dữ liệu (CP)', 'Tắt tất cả vĩnh viễn', 'Xóa dữ liệu'], a: 1, e: 'Thà ngưng còn hơn sai.' },
    { q: 'Đồ thị quan hệ bạn bè hợp với:', o: ['Key-value', 'Graph DB', 'Column-family', 'File'], a: 1, e: 'Neo4j.' },
    { q: 'Số follower hơi trễ vài giây là chấp nhận được → mô hình:', o: ['Linearizability', 'Eventual', 'Strict', 'Sequential'], a: 1, e: 'Đánh đổi để nhanh/sẵn sàng.' },
    { q: 'Bình luận trả lời phải hiển thị sau bài gốc ở mọi nơi → cần ít nhất:', o: ['Eventual', 'Causal', 'Không gì', 'Chỉ cache'], a: 1, e: 'Giữ thứ tự nhân quả.' }
  ],
  match: [
    ['Document', 'MongoDB'],
    ['Key-value', 'Redis / DynamoDB'],
    ['Column-family', 'Cassandra'],
    ['Graph', 'Neo4j'],
    ['Linearizability', 'Đọc luôn thấy ghi mới nhất']
  ]
}
);
