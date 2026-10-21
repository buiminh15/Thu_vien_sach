// Designing Data-Intensive Applications – Chương 4: Mã hoá và tiến hoá.
BOOK_DATA.ddia.chapters.push({
  n: 4,
  title: 'Mã hoá (encoding) và tiến hoá lược đồ',
  intro: 'Ứng dụng thay đổi theo thời gian, nên dữ liệu và mã nguồn cũ–mới phải cùng tồn tại. Chương này nói về các định dạng mã hoá (JSON, XML, Protocol Buffers, Thrift, Avro), cách chúng xử lý <b>tương thích xuôi/ngược</b>, và ba chế độ luồng dữ liệu: qua database, qua dịch vụ (REST/RPC) và qua thông điệp bất đồng bộ.',
  sections: [
    { icon: '🔄', title: 'Vì sao cần tương thích', blocks: [
      { t: 'p', x: 'Đổi tính năng thường kéo theo đổi dữ liệu. Nhưng mã không thể đổi tức thời: máy chủ làm <b>rolling upgrade</b> (triển khai dần từng vài node, kiểm tra rồi mở rộng; không downtime, khuyến khích phát hành thường xuyên) còn ứng dụng client thì phụ thuộc người dùng. Vì thế mã cũ/mới và định dạng dữ liệu cũ/mới cùng tồn tại.' },
      { t: 'table', head: ['Loại', 'Ý nghĩa', 'Độ khó'], rows: [
        ['<b>Backward compatibility</b>', 'Mã mới đọc được dữ liệu do mã cũ ghi', 'Thường dễ — bạn biết định dạng cũ'],
        ['<b>Forward compatibility</b>', 'Mã cũ đọc được dữ liệu do mã mới ghi', 'Khó hơn — mã cũ phải bỏ qua phần mới thêm']
      ] },
      { t: 'p', x: 'Chương này dùng từ “encoding” (còn gọi serialization / marshalling; ngược lại là decoding / parsing / deserialization) để tránh nhầm với “serializability” trong giao dịch, và không liên quan tới mã hoá bảo mật (encryption).' }
    ] },
    { icon: '📦', title: 'Định dạng: ngôn ngữ cụ thể, JSON/XML', blocks: [
      { t: 'warn', x: '<b>Định dạng gắn với ngôn ngữ</b> (Java Serializable, Ruby Marshal, Python pickle, Kryo): tiện nhưng bị khoá vào một ngôn ngữ; giải mã phải khởi tạo lớp tuỳ ý ⇒ lỗ hổng bảo mật (thực thi mã từ xa); phiên bản và hiệu quả thường là ý tưởng sau cùng (Java serialization nổi tiếng chậm và cồng kềnh). Chỉ dùng cho mục đích rất tạm thời.' },
      { t: 'list', items: [
        '<b>JSON, XML, CSV</b>: ngôn ngữ trung lập, đọc được bằng mắt; phổ biến cho trao đổi giữa các tổ chức vì khó để các tổ chức đồng ý hơn bất kỳ vấn đề kỹ thuật nào.',
        '<b>Mơ hồ về số</b>: XML/CSV không phân biệt số và chuỗi chữ số; JSON không phân biệt số nguyên/thực và không đặt độ chính xác. Số nguyên &gt; 2<sup>53</sup> mất chính xác khi parse thành double (JavaScript) — ID tweet 64-bit nên Twitter API trả cả dạng số lẫn chuỗi thập phân.',
        '<b>Không có chuỗi nhị phân</b>: phải Base64 (tăng 33% kích thước). Schema XML/JSON có nhưng phức tạp, nhiều công cụ bỏ qua; CSV không có lược đồ và mơ hồ (dấu phẩy, xuống dòng).',
        '<b>Binary JSON</b> (MessagePack, BSON, BJSON, UBJSON, BISON, Smile): vẫn phải chứa tên trường nên ví dụ chỉ nhỏ từ 81 xuống 66 byte — có đáng mất khả năng đọc?'
      ] }
    ] },
    { icon: '🧬', title: 'Thrift, Protocol Buffers, Avro', blocks: [
      { t: 'p', x: 'Cả ba cần <b>lược đồ</b> cho dữ liệu cần mã hoá. Thrift (Facebook) và Protocol Buffers (Google) có công cụ <b>sinh mã</b> cho nhiều ngôn ngữ; Avro (Hadoop, 2009) khác biệt. Cùng bản ghi mẫu <code>{userName:"Martin", favoriteNumber:1337, interests:["daydreaming","hacking"]}</code>:' },
      { t: 'table', head: ['Định dạng', 'Kích thước', 'Cách hoạt động'], rows: [
        ['JSON (không khoảng trắng)', '81 byte', 'Văn bản, có tên trường'],
        ['MessagePack', '66 byte', 'Vẫn chứa tên trường'],
        ['Thrift BinaryProtocol', '59 byte', 'Kiểu + <b>field tag</b> (số) thay tên trường, độ dài'],
        ['Thrift CompactProtocol', '34 byte', 'Gói kiểu + tag vào một byte; số nguyên độ dài biến đổi (varint; 1337 chỉ 2 byte)'],
        ['Protocol Buffers', '33 byte', 'Tương tự Compact; dùng <code>repeated</code> thay kiểu list'],
        ['<b>Avro</b>', '<b>32 byte</b>', 'Chỉ nối giá trị: không tag, không tên trường, không kiểu — cần đúng lược đồ để giải mã']
      ] },
      { t: 'widget', name: 'varint-calc', title: 'Varint: số nguyên cần bao nhiêu byte?' },
      { t: 'key', x: '<b>Thrift/Protobuf – tiến hoá bằng field tag</b>: có thể đổi tên trường (dữ liệu không chứa tên) nhưng <b>không bao giờ đổi tag</b>. Thêm trường mới phải dùng tag mới; mã cũ gặp tag lạ sẽ bỏ qua (nhờ chú thích kiểu biết số byte cần nhảy) ⇒ forward compatible. Trường thêm sau khi triển khai phải <b>optional hoặc có giá trị mặc định</b> (không thể required) để mã mới đọc được dữ liệu cũ. Xoá trường: chỉ khi optional, và <b>không dùng lại tag đó</b>. Đổi kiểu (32→64 bit) có nguy cơ cắt cụt khi mã cũ đọc. Protobuf cho phép đổi optional thành repeated (mã mới thấy list 0–1 phần tử; mã cũ chỉ thấy phần tử cuối).' },
      { t: 'p', x: '<b>Avro – writer’s schema và reader’s schema</b>: không có tag. Người ghi mã hoá bằng lược đồ người ghi; người đọc dùng lược đồ người đọc; thư viện Avro <b>giải quyết khác biệt</b> bằng cách so hai lược đồ theo <i>tên trường</i> (thứ tự khác nhau cũng được; trường chỉ có ở writer thì bỏ qua; trường chỉ có ở reader thì điền giá trị mặc định). Hai lược đồ chỉ cần <i>tương thích</i>, không cần giống hệt.' },
      { t: 'list', items: [
        'Quy tắc: chỉ thêm/xoá trường <b>có giá trị mặc định</b>. null chỉ làm mặc định nếu là nhánh của <b>union</b> (<code>union {null, long}</code>) — rõ ràng hơn “mọi thứ nullable”. Đổi tên trường dùng <b>alias</b> (tương thích ngược, không xuôi); thêm nhánh union cũng chỉ tương thích ngược.',
        '<b>Reader biết writer’s schema bằng cách nào?</b> File lớn: nhúng lược đồ một lần ở đầu file (object container file). Database: thêm số phiên bản đầu mỗi bản ghi và lưu danh sách lược đồ (Espresso). Kết nối mạng: thương lượng phiên bản khi thiết lập kết nối (Avro RPC). Một “kho lược đồ” còn là tài liệu và cho phép kiểm tra tương thích trước khi triển khai.',
        '<b>Lược đồ sinh động</b>: Avro thân thiện hơn vì không có số tag cần gán tay — có thể tự sinh lược đồ từ bảng quan hệ (mỗi cột = một trường) và xuất mỗi lần chạy kể cả khi bảng đổi. Với Thrift/Protobuf thì tag phải gán tay và không được dùng lại.',
        '<b>Sinh mã</b>: hữu ích với ngôn ngữ kiểu tĩnh (Java, C++, C#); ít ý nghĩa trong ngôn ngữ động (JS, Ruby, Python). Avro có sinh mã tuỳ chọn; file tự mô tả nên mở như JSON, dùng tốt với Pig.'
      ] },
      { t: 'tip', x: '<b>Giá trị của lược đồ</b>: gọn hơn binary JSON (bỏ tên trường); là tài liệu luôn cập nhật vì cần để giải mã; kiểm tra tương thích trước khi triển khai; sinh mã giúp kiểm tra kiểu lúc biên dịch. Ý tưởng không mới: ASN.1 (1984, dùng cho chứng chỉ SSL X.509) nhưng quá phức tạp. Tiến hoá lược đồ cho tính linh hoạt như schema-on-read mà vẫn có đảm bảo và công cụ tốt hơn.' }
    ] },
    { icon: '🗄️', title: 'Luồng dữ liệu qua database', blocks: [
      { t: 'list', items: [
        'Ghi vào DB giống gửi thông điệp cho “chính mình trong tương lai” ⇒ cần tương thích ngược. Nhiều tiến trình (kể cả bản cũ/mới trong rolling upgrade) cùng truy cập ⇒ cũng cần tương thích xuôi.',
        '<b>Bẫy mất trường lạ</b>: mã cũ đọc bản ghi có trường mới, giải mã thành đối tượng mô hình rồi ghi lại ⇒ trường mới mất. Các định dạng bảo toàn trường lạ nhưng mã ứng dụng cần để ý.',
        '<b>Data outlives code</b>: mã thay trong vài phút, nhưng dữ liệu 5 năm tuổi vẫn nằm trong mã hoá gốc nếu không viết lại. Di chuyển dữ liệu sang lược đồ mới đắt; hầu hết DB tránh (ví dụ thêm cột NULL mặc định không cần viết lại, đọc hàng cũ thì điền NULL).',
        'Lưu trữ lưu trữ/sao lưu (archival): thường mã hoá lại nhất quán bằng lược đồ mới nhất; hợp với Avro object container hoặc định dạng cột Parquet.'
      ] }
    ] },
    { icon: '🌐', title: 'Luồng dữ liệu qua dịch vụ: REST và RPC', blocks: [
      { t: 'p', x: 'Client–server: server mở API (service). Web: HTTP, URL, TLS, HTML. Client có thể là trình duyệt, app native, hoặc JS dùng Ajax. Server có thể là client của dịch vụ khác ⇒ <b>service-oriented architecture (SOA)</b> / <b>microservices</b>. Mục tiêu: các dịch vụ triển khai và tiến hoá độc lập (mỗi dịch vụ một đội) ⇒ bản cũ/mới của client và server cùng chạy ⇒ mã hoá phải tương thích. Khác DB ở chỗ dịch vụ chỉ cho phép đầu vào/đầu ra định trước bởi logic nghiệp vụ (đóng gói).' },
      { t: 'table', head: ['', 'REST', 'SOAP'], rows: [
        ['Bản chất', 'Triết lý thiết kế dựa trên HTTP: URL định danh tài nguyên, dùng cache, xác thực, content negotiation; định dạng đơn giản', 'Giao thức XML độc lập HTTP, kèm bộ chuẩn WS-* phức tạp'],
        ['Mô tả API', 'OpenAPI / Swagger', 'WSDL (không dành cho người đọc ⇒ phụ thuộc công cụ, sinh mã, IDE)'],
        ['Hiện nay', 'Ưa chuộng, nhất là với microservices và tích hợp giữa tổ chức', 'Còn ở doanh nghiệp lớn nhưng giảm; khó tương tác giữa nhà cung cấp']
      ] },
      { t: 'key', x: '<b>Vấn đề của RPC</b> (cố làm lời gọi mạng giống lời gọi hàm cục bộ — location transparency): lời gọi mạng không đoán trước (mất request/response, máy chậm/ngưng); có thêm kết quả “timeout” ⇒ không biết yêu cầu đã tới chưa; retry có thể thực hiện hành động nhiều lần ⇒ cần <b>idempotence</b> để khử trùng lặp; độ trễ biến thiên rất rộng; phải mã hoá tham số thành byte (không truyền con trỏ); khác ngôn ngữ ⇒ khác kiểu (số &gt; 2<sup>53</sup>). Lịch sử: EJB, RMI (Java), DCOM (Microsoft), CORBA (quá phức tạp, không tương thích xuôi/ngược).' },
      { t: 'list', items: [
        'RPC không biến mất: gRPC (Protobuf), Finagle (Thrift), Rest.li (JSON qua HTTP), Avro RPC. Thế hệ mới rõ ràng hơn về bản chất từ xa: dùng <b>future/promise</b>, <b>stream</b> (gRPC), <b>service discovery</b>.',
        'RPC nhị phân nhanh hơn JSON/REST, nhưng REST tiện thử nghiệm (curl, trình duyệt) và hệ sinh thái công cụ khổng lồ. REST chủ yếu cho API công khai; RPC cho dịch vụ nội bộ cùng trung tâm dữ liệu.',
        '<b>Tiến hoá API</b>: thường giả định server cập nhật trước, client sau ⇒ chỉ cần tương thích ngược cho request và tương thích xuôi cho response. REST: thêm tham số tuỳ chọn và trường mới vào response được coi là tương thích. Vì nhà cung cấp không kiểm soát client nên phải duy trì tương thích rất lâu, thường chạy song song nhiều phiên bản API (số phiên bản trong URL hoặc header Accept, hoặc lưu phiên bản theo API key).'
      ] }
    ] },
    { icon: '✉️', title: 'Luồng dữ liệu qua thông điệp bất đồng bộ', blocks: [
      { t: 'p', x: '<b>Message broker</b> (message queue, message-oriented middleware: RabbitMQ, ActiveMQ, HornetQ, NATS, Kafka; trước đây TIBCO, IBM WebSphere) nằm giữa RPC và database: thông điệp có độ trễ thấp như RPC, nhưng đi qua trung gian lưu tạm như database. Thông điệp được gửi tới <b>queue/topic</b> có tên; broker chuyển tới một hoặc nhiều consumer/subscriber.' },
      { t: 'list', items: [
        'Ưu điểm so với RPC trực tiếp: đệm khi bên nhận không sẵn sàng/quá tải; tự gửi lại khi tiến trình crash; người gửi không cần biết IP/port của bên nhận; gửi cho nhiều bên nhận; tách rời logic giữa người gửi và nhận.',
        'Khác RPC: thường một chiều và <b>bất đồng bộ</b> (gửi rồi quên). Broker không ép mô hình dữ liệu — dùng bất kỳ định dạng nào; nếu tương thích xuôi/ngược thì publisher và consumer có thể đổi độc lập; nhớ <b>bảo toàn trường lạ</b> khi consumer xuất bản lại.',
        '<b>Distributed actor framework</b>: actor đóng gói logic và trạng thái cục bộ, giao tiếp bằng thông điệp bất đồng bộ (có thể mất); mỗi actor xử lý một thông điệp một lúc ⇒ không lo luồng. Phân tán: cùng cơ chế dù cùng node hay khác node; location transparency hợp lý hơn RPC vì mô hình vốn giả định thông điệp có thể mất. Vẫn phải lo tương thích khi rolling upgrade.',
        'Ví dụ: <b>Akka</b> mặc định dùng serialization Java (không tương thích) nhưng thay bằng Protobuf được; <b>Orleans</b> không hỗ trợ rolling upgrade mặc định (phải dựng cụm mới, chuyển traffic); <b>Erlang OTP</b> khó đổi lược đồ record, cần lên kế hoạch.'
      ] }
    ] }
  ],
  summary: [
    'Dữ liệu và mã cũ–mới cùng tồn tại ⇒ cần tương thích ngược và xuôi.',
    'Định dạng theo ngôn ngữ: tránh. JSON/XML/CSV: tiện nhưng mơ hồ; tốt cho trao đổi giữa tổ chức.',
    'Protobuf/Thrift dùng field tag; Avro không tag, dùng writer/reader schema giải quyết theo tên trường — gọn nhất (32 byte).',
    'Dữ liệu sống lâu hơn mã (data outlives code); bảo toàn trường lạ.',
    'REST vs SOAP vs RPC; RPC không nên giả vờ là hàm cục bộ; message broker tách rời và đệm; actor là thông điệp phân tán.'
  ],
  cards: [
    ['Backward compatibility?', 'Mã mới đọc dữ liệu do mã cũ ghi.'],
    ['Forward compatibility?', 'Mã cũ đọc dữ liệu do mã mới ghi (bỏ qua phần lạ).'],
    ['Vì sao tránh serialization của ngôn ngữ?', 'Khoá ngôn ngữ, rủi ro bảo mật, hiệu năng/phiên bản kém.'],
    ['Vấn đề số lớn trong JSON?', 'Số > 2^53 mất chính xác khi parse thành double.'],
    ['Base64 tốn thêm bao nhiêu?', '≈ 33%.'],
    ['Field tag là gì?', 'Số định danh trường trong Thrift/Protobuf, thay tên trường trong dữ liệu.'],
    ['Không được làm gì với field tag?', 'Đổi tag hoặc dùng lại tag đã xoá.'],
    ['Thêm trường vào Protobuf cần gì?', 'Tag mới, và là optional/có mặc định.'],
    ['Avro khác Protobuf thế nào?', 'Không tag; giải quyết writer/reader schema theo tên trường.'],
    ['Avro: cách null?', 'Dùng union {null, X} và default null.'],
    ['Reader biết writer’s schema bằng cách nào?', 'Nhúng ở đầu file, số phiên bản trong bản ghi, hoặc thương lượng khi kết nối.'],
    ['Vì sao Avro hợp lược đồ sinh động?', 'Không có số tag để gán tay.'],
    ['Data outlives code?', 'Mã thay nhanh nhưng dữ liệu cũ vẫn ở mã hoá gốc.'],
    ['REST là gì?', 'Triết lý thiết kế API trên nền HTTP, dùng URL tài nguyên và đặc tính HTTP.'],
    ['Vì sao RPC giả làm hàm cục bộ là sai?', 'Mạng không đoán trước, timeout mơ hồ, retry cần idempotence, độ trễ biến thiên.'],
    ['Idempotence?', 'Thực hiện nhiều lần cho kết quả như một lần — để retry an toàn.'],
    ['Ưu điểm message broker?', 'Đệm, gửi lại, che địa chỉ, nhiều bên nhận, tách rời.'],
    ['Actor model?', 'Logic đóng gói trong actor, giao tiếp bằng thông điệp bất đồng bộ.'],
    ['Rolling upgrade?', 'Triển khai phiên bản mới dần từng vài node.'],
    ['Thrift CompactProtocol vs Binary?', '34 byte vs 59 byte nhờ varint và gói kiểu+tag.']
  ],
  quiz: [
    { q: 'Forward compatibility khó hơn vì:', o: ['Mã mới thiếu tính năng', 'Mã cũ phải bỏ qua thêm của mã mới', 'Dữ liệu bị mã hoá', 'Mạng chậm'], a: 1, e: 'Cần bỏ qua trường lạ.' },
    { q: 'Vấn đề bảo mật của serialization theo ngôn ngữ:', o: ['Chậm', 'Phải khởi tạo lớp tuỳ ý — có thể thực thi mã từ xa', 'Không nén', 'Khoá bí mật'], a: 1, e: 'Giải mã dữ liệu độc hại.' },
    { q: 'JSON số 64-bit lớn gây:', o: ['Lỗi cú pháp', 'Mất chính xác khi parse thành double', 'Không hỗ trợ', 'Tăng kích thước'], a: 1, e: 'Twitter trả cả chuỗi.' },
    { q: 'Bản ghi mẫu nhỏ nhất:', o: ['JSON 81', 'MessagePack 66', 'Protobuf 33', 'Avro 32'], a: 3, e: 'Chỉ nối giá trị.' },
    { q: 'Điều không được làm với field tag của Protobuf:', o: ['Đổi tên trường', 'Đổi số tag', 'Thêm trường mới', 'Bỏ trường optional'], a: 1, e: 'Dữ liệu cũ sẽ vô nghĩa.' },
    { q: 'Thêm trường vào Protobuf sau khi đã triển khai phải:', o: ['Required', 'Optional hoặc có mặc định', 'Là chuỗi', 'Dùng tag cũ'], a: 1, e: 'Để mã mới đọc dữ liệu cũ.' },
    { q: 'Avro xử lý khác biệt writer/reader schema bằng:', o: ['Tag', 'So khớp theo tên trường, điền mặc định', 'Bỏ lỗi', 'Chuyển sang JSON'], a: 1, e: 'Schema resolution.' },
    { q: 'Chỉ thêm/xoá trường Avro nếu:', o: ['Có tag', 'Có giá trị mặc định', 'Là chuỗi', 'Là số'], a: 1, e: 'Để giữ tương thích.' },
    { q: 'Câu “data outlives code” nghĩa là:', o: ['Dữ liệu hỏng sớm', 'Dữ liệu cũ tồn tại lâu hơn phiên bản mã ghi nó', 'Mã sống lâu', 'Không cần sao lưu'], a: 1, e: 'Dữ liệu 5 năm tuổi vẫn ở mã hoá cũ.' },
    { q: 'Điểm giống nhau của REST khác SOAP:', o: ['Dùng WSDL', 'REST dựa vào HTTP và đơn giản hơn; SOAP là XML phức tạp (WS-*)', 'Cả hai dùng CORBA', 'Cả hai là RPC'], a: 1, e: 'REST ưa chuộng hơn.' },
    { q: 'Vấn đề khi retry request mạng:', o: ['Luôn thất bại', 'Có thể thực hiện hành động hai lần nếu chỉ mất response', 'Nhanh hơn', 'Mất DNS'], a: 1, e: 'Cần idempotence.' },
    { q: 'Message broker mang lại:', o: ['Đồng bộ chặt', 'Đệm, gửi lại, tách rời người gửi–nhận', 'Giao dịch ACID', 'Mô hình dữ liệu cứng'], a: 1, e: 'Cũng gửi tới nhiều consumer.' },
    { q: 'gRPC dựa trên:', o: ['Thrift', 'Protocol Buffers', 'Avro', 'XML'], a: 1, e: 'Hỗ trợ stream.' },
    { q: 'Actor model: mỗi actor xử lý:', o: ['Nhiều thông điệp song song', 'Một thông điệp tại một thời điểm', 'Không thông điệp', 'Chỉ đọc'], a: 1, e: 'Không lo luồng.' },
    { q: 'Rolling upgrade khuyến khích:', o: ['Phát hành hiếm, lớn', 'Phát hành thường xuyên, nhỏ', 'Downtime', 'Cấm đổi lược đồ'], a: 1, e: 'Và giảm rủi ro.' }
  ],
  match: [
    ['Protocol Buffers', 'Field tag, sinh mã (Google)'],
    ['Avro', 'Writer/reader schema, không tag'],
    ['Thrift', 'Field tag, hai giao thức nhị phân'],
    ['Varint', 'Số nguyên độ dài biến đổi'],
    ['Idempotence', 'Retry an toàn'],
    ['Message broker', 'Trung gian lưu tạm thông điệp'],
    ['Rolling upgrade', 'Triển khai dần, không downtime']
  ]
});
