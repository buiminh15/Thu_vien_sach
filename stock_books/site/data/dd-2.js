// Designing Data-Intensive Applications – Chương 2: Mô hình dữ liệu và ngôn ngữ truy vấn.
BOOK_DATA.ddia.chapters.push({
  n: 2,
  title: 'Mô hình dữ liệu và ngôn ngữ truy vấn',
  intro: 'Mô hình dữ liệu ảnh hưởng sâu sắc đến cách ta viết phần mềm và cách ta nghĩ về bài toán. Chương này so sánh mô hình <b>quan hệ</b>, <b>tài liệu (document)</b> và <b>đồ thị (graph)</b>, cùng các ngôn ngữ truy vấn: SQL, MapReduce, aggregation pipeline, Cypher, SPARQL, Datalog.',
  sections: [
    { icon: '🧅', title: 'Các lớp mô hình dữ liệu', blocks: [
      { t: 'steps', items: [
        'Nhà phát triển mô hình thế giới thực thành đối tượng/cấu trúc dữ liệu và API.',
        'Khi lưu, biểu diễn chúng bằng mô hình đa dụng: JSON/XML, bảng quan hệ, hoặc đồ thị.',
        'Kỹ sư database quyết định cách biểu diễn đó thành byte trong bộ nhớ/đĩa/mạng.',
        'Kỹ sư phần cứng biểu diễn byte bằng dòng điện, ánh sáng, từ trường…'
      ] },
      { t: 'key', x: 'Mỗi lớp che giấu độ phức tạp của lớp dưới bằng một mô hình sạch. Mỗi mô hình dữ liệu mang theo giả định về cách dùng: có thao tác dễ, có thao tác khó. Chọn mô hình phù hợp rất quan trọng.' }
    ] },
    { icon: '🗃️', title: 'Quan hệ vs tài liệu', blocks: [
      { t: 'p', x: '<b>Mô hình quan hệ</b> (Codd, 1970): dữ liệu là các <i>relation</i> (bảng) gồm các <i>tuple</i> (hàng) không thứ tự. Thống trị 25–30 năm (từ giữa thập niên 1980) vì tổng quát hoá tốt từ xử lý giao dịch/batch kinh doanh sang web, mạng xã hội, thương mại điện tử. Đối thủ trước đó: mô hình mạng, phân cấp, object DB, XML DB — đều từng được thổi phồng rồi phai.' },
      { t: 'p', x: '<b>NoSQL</b> (hashtag năm 2009, sau diễn giải “Not Only SQL”) thúc đẩy bởi: cần scale lớn hơn (dữ liệu rất lớn, ghi cao); ưa chuộng phần mềm tự do; thao tác truy vấn chuyên biệt; bực vì lược đồ quan hệ cứng nhắc. Hướng tới <b>polyglot persistence</b>: dùng song song nhiều loại datastore.' },
      { t: 'list', items: [
        '<b>Object-relational mismatch (impedance mismatch)</b>: lệch giữa đối tượng trong code và bảng/hàng/cột; ORM (ActiveRecord, Hibernate) giảm nhưng không xoá hẳn.',
        'Hồ sơ LinkedIn: người dùng có nhiều vị trí, học vấn, liên hệ ⇒ quan hệ một-nhiều. Quan hệ thường tách bảng với khoá ngoại; SQL:1999+ có kiểu có cấu trúc/XML/JSON; hoặc lưu JSON trong cột văn bản. Document DB (MongoDB, RethinkDB, CouchDB, Espresso) lưu cả hồ sơ thành một JSON — <b>tính cục bộ (locality)</b> tốt: một truy vấn đủ, không cần JOIN nhiều bảng; cấu trúc cây hiển hiện.'
      ] },
      { t: 'key', x: '<b>Many-to-one và many-to-many</b>: lưu <code>region_id</code> thay vì chuỗi “Greater Seattle Area” để thống nhất chính tả, tránh nhập nhằng, cập nhật một nơi, bản địa hoá, tìm kiếm tốt hơn. ID không có nghĩa với con người nên không bao giờ cần đổi — đó là ý tưởng của <b>chuẩn hoá (normalization)</b>: trùng lặp thông tin có nghĩa với con người tốn ghi và dễ không nhất quán. Nhưng many-to-one không khớp tốt với document model (JOIN yếu); dữ liệu có xu hướng ngày càng liên kết (tổ chức/trường thành thực thể, recommendation) ⇒ cần many-to-many.' },
      { t: 'table', head: ['Mô hình', 'Quan hệ giữa các bản ghi', 'Truy cập'], rows: [
        ['Phân cấp (IMS, 1968)', 'Cây: mỗi bản ghi một cha; tốt cho một-nhiều, kém many-to-many, không JOIN', 'Phải duyệt đường dẫn; phải nhân bản hoặc tự giải tham chiếu'],
        ['Mạng (CODASYL)', 'Tổng quát hoá cây: nhiều cha, liên kết như con trỏ', '<b>Access path</b> phải theo dõi bằng tay; truy vấn bằng con trỏ/duyệt danh sách, khó thay đổi mô hình'],
        ['Quan hệ', 'Dữ liệu “trải ra”: bảng chứa tuple, tham chiếu qua khoá ngoại', '<b>Query optimizer</b> tự chọn thứ tự và chỉ mục; thêm chỉ mục không cần sửa truy vấn']
      ] },
      { t: 'tip', x: 'Ý tưởng cốt lõi của mô hình quan hệ: chỉ cần xây một query optimizer rồi mọi ứng dụng đều hưởng lợi. Giải pháp tổng quát thắng về lâu dài so với lối tự viết access path.' },
      { t: 'p', x: 'Document DB quay lại mô hình phân cấp ở chỗ lồng bản ghi con vào cha, nhưng với many-to-one/many-to-many thì giống quan hệ: tham chiếu bằng ID (khoá ngoại / document reference), phân giải lúc đọc bằng JOIN hoặc truy vấn tiếp theo.' }
    ] },
    { icon: '⚖️', title: 'So sánh hôm nay', blocks: [
      { t: 'table', head: ['Document model', 'Relational model'], rows: [
        ['Linh hoạt lược đồ (schema-on-read)', 'Schema-on-write: lược đồ tường minh, DB bảo đảm dữ liệu tuân thủ'],
        ['Hiệu năng tốt nhờ locality khi cần cả tài liệu', 'Hỗ trợ JOIN, many-to-one, many-to-many tốt hơn'],
        ['Gần cấu trúc dữ liệu ứng dụng (cây một-nhiều)', 'Kỹ thuật “shredding” tách tài liệu thành nhiều bảng làm lược đồ và code cồng kềnh']
      ] },
      { t: 'list', items: [
        'Dữ liệu dạng tài liệu (cây một-nhiều, thường tải cả cây) ⇒ document model hợp lý. Hạn chế: không tham chiếu trực tiếp phần tử lồng (“mục thứ hai trong positions của user 251”).',
        'Nếu có nhiều many-to-many: document kém hấp dẫn; chuẩn hoá ngược (denormalize) làm code ứng dụng phải giữ nhất quán; JOIN trong code thì phức tạp và chậm. Dữ liệu liên kết cao: document khó chịu, quan hệ chấp nhận được, <b>graph</b> tự nhiên nhất.',
        '<b>“Schemaless” thật ra là schema-on-read</b>: cấu trúc ngầm định và chỉ diễn giải khi đọc (như kiểm tra kiểu động); schema-on-write như kiểu tĩnh. Đổi định dạng: document DB chỉ cần mã xử lý tài liệu cũ khi đọc; quan hệ dùng <code>ALTER TABLE ADD COLUMN</code> + <code>UPDATE</code> (thường mất mili-giây, trừ MySQL từng sao chép cả bảng; UPDATE lớn chậm nên có thể để NULL và điền lúc đọc).',
        'Schema-on-read hợp khi dữ liệu không đồng nhất (nhiều kiểu đối tượng, hoặc cấu trúc do hệ thống ngoài quyết định); còn dữ liệu cùng cấu trúc thì schema là tài liệu và ràng buộc có ích.',
        '<b>Data locality</b>: tài liệu thường lưu thành một chuỗi liên tục (JSON/BSON) ⇒ lợi khi cần phần lớn tài liệu; nhưng phải tải cả tài liệu và ghi lại cả tài liệu khi cập nhật ⇒ nên giữ tài liệu nhỏ, tránh ghi làm tăng kích thước. Ý tưởng locality không riêng document: Spanner interleave bảng con trong bảng cha; Oracle multi-table index cluster; Bigtable column-family (Cassandra, HBase).',
        '<b>Hội tụ</b>: PostgreSQL (từ 9.3), MySQL (5.7), DB2 (10.5) hỗ trợ JSON; RethinkDB hỗ trợ JOIN; MongoDB driver có thể tự phân giải tham chiếu. Lai quan hệ + tài liệu là hướng tương lai tốt.'
      ] },
      { t: 'widget', name: 'datamodel-picker', title: 'Chọn mô hình dữ liệu: trả lời vài câu hỏi' }
    ] },
    { icon: '📝', title: 'Ngôn ngữ truy vấn: khai báo vs mệnh lệnh', blocks: [
      { t: 'p', x: '<b>Mệnh lệnh (imperative)</b>: bảo máy tính làm các bước theo thứ tự (vòng lặp for lọc cá mập). <b>Khai báo (declarative)</b>: chỉ mô tả mẫu kết quả muốn — như đại số quan hệ <code>σ family="Sharks" (animals)</code> hay <code>SELECT * FROM animals WHERE family = \'Sharks\'</code> — còn <i>cách</i> làm do <b>query optimizer</b> quyết định.' },
      { t: 'key', x: 'Ưu điểm khai báo: ngắn gọn; <b>che giấu chi tiết cài đặt</b> nên DB có thể cải thiện hiệu năng (ví dụ dọn đĩa, đổi thứ tự bản ghi) mà không sửa truy vấn; và <b>dễ chạy song song</b> (CPU tăng nhân chứ không tăng xung nhịp). Mã mệnh lệnh khó song song hoá vì chỉ định thứ tự.' },
      { t: 'p', x: 'Ví dụ ngoài DB: <code>li.selected &gt; p { background-color: blue }</code> (CSS) hoặc XPath/XSL là khai báo; JavaScript DOM mệnh lệnh dài, dễ lỗi (màu xanh không biến mất khi bỏ class “selected”) và phải viết lại khi dùng API mới. CSS tự gỡ nền xanh ngay khi class đổi, và trình duyệt tối ưu CSS mà không phá tương thích.' },
      { t: 'p', x: '<b>MapReduce</b> (Google; MongoDB, CouchDB hỗ trợ dạng giới hạn cho truy vấn chỉ-đọc) nằm giữa khai báo và mệnh lệnh: logic viết bằng hai hàm <b>map</b> (phát ra cặp key-value cho mỗi tài liệu) và <b>reduce</b> (gộp các giá trị cùng key), phải là <b>pure function</b> (không truy vấn thêm, không tác dụng phụ) để DB chạy ở đâu cũng được, chạy lại được khi lỗi. Ví dụ đếm cá mập theo tháng: map phát <code>emit("1995-12", numAnimals)</code>, reduce cộng lại (3 + 4 = 7). Nhược điểm: phải viết hai hàm phối hợp, ít cơ hội cho optimizer ⇒ MongoDB 2.2 thêm <b>aggregation pipeline</b> (khai báo, cú pháp JSON, tương đương một phần SQL). Bài học: NoSQL có thể vô tình phát minh lại SQL, dưới lốt khác.' }
    ] },
    { icon: '🕸️', title: 'Mô hình đồ thị', blocks: [
      { t: 'p', x: 'Khi many-to-many rất phổ biến, hãy mô hình hoá bằng <b>đồ thị</b>: <b>đỉnh (vertex)</b> và <b>cạnh (edge)</b>. Ví dụ: mạng xã hội (người – quen nhau), web graph (trang – liên kết, PageRank), mạng đường (ngã tư – đoạn đường, tìm đường ngắn nhất). Đồ thị cũng lưu được nhiều loại đối tượng khác nhau (Facebook: người, địa điểm, sự kiện, check-in, bình luận).' },
      { t: 'table', head: ['Mô hình', 'Cấu trúc', 'Ngôn ngữ / hệ thống'], rows: [
        ['<b>Property graph</b>', 'Đỉnh có ID, cạnh vào/ra, thuộc tính (cặp key-value). Cạnh có ID, đỉnh đuôi và đỉnh đầu, nhãn, thuộc tính. Cài được bằng hai bảng quan hệ (vertices, edges) với chỉ mục trên tail_vertex và head_vertex', 'Neo4j, Titan, InfiniteGraph; Cypher (khai báo, ký hiệu mũi tên)'],
        ['<b>Triple-store</b>', 'Mọi thông tin là bộ ba (subject, predicate, object): object là giá trị nguyên thuỷ (= thuộc tính) hoặc đỉnh khác (= cạnh). Biểu diễn Turtle/N3; RDF dùng URI làm không gian tên', 'Datomic, AllegroGraph; SPARQL'],
        ['<b>Datalog</b>', 'Mô hình giống triple-store, viết <code>predicate(subject, object)</code>; xây truy vấn từng bước bằng <b>luật (rule)</b> có thể đệ quy; tập con của Prolog', 'Datomic, Cascalog (Hadoop)']
      ] },
      { t: 'list', items: [
        'Ba tính chất của property graph: (1) bất kỳ đỉnh nào cũng nối được với đỉnh khác, không có lược đồ hạn chế; (2) từ một đỉnh tìm hiệu quả cả cạnh vào và ra ⇒ duyệt tiến lẫn lùi; (3) dùng nhãn khác nhau cho nhiều loại quan hệ trong một đồ thị. Tốt cho <b>evolvability</b>, ví dụ cấu trúc vùng khác nhau ở các nước (Pháp có département/région, Mỹ có county/state), độ chi tiết khác nhau (nơi sinh chỉ đến cấp bang).',
        '<b>Cypher</b>: <code>MATCH (person) -[:BORN_IN]-&gt; () -[:WITHIN*0..]-&gt; (us:Location {name:\'United States\'}), (person) -[:LIVES_IN]-&gt; () -[:WITHIN*0..]-&gt; (eu:Location {name:\'Europe\'}) RETURN person.name</code> — tìm những người sinh ở Mỹ, sống ở châu Âu. <code>:WITHIN*0..</code> nghĩa “đi theo cạnh WITHIN không hoặc nhiều lần” (như dấu * trong regex). Optimizer chọn chiến lược: quét từng người hoặc bắt đầu từ hai đỉnh Location rồi đi ngược.',
        '<b>SQL cho truy vấn đồ thị</b>: số lần JOIN không biết trước ⇒ phải dùng <b>recursive common table expression</b> (<code>WITH RECURSIVE</code>, từ SQL:1999) — cùng truy vấn cần 29 dòng SQL so với 4 dòng Cypher. Bài học: mô hình khác nhau phục vụ use case khác nhau.',
        '<b>SPARQL</b>: ngắn hơn Cypher: <code>?person :bornIn / :within* / :name "United States".</code> RDF không phân biệt thuộc tính và cạnh nên dùng cùng cú pháp. “Semantic web” chưa thành hiện thực nhưng triple/SPARQL vẫn hữu ích làm mô hình nội bộ.'
      ] },
      { t: 'warn', x: 'Đồ thị không phải CODASYL trá hình: (1) không có lược đồ ràng buộc loại bản ghi nào lồng loại nào; (2) có thể tham chiếu trực tiếp mọi đỉnh bằng ID hoặc chỉ mục (không bắt buộc theo access path); (3) đỉnh/cạnh không có thứ tự; (4) có ngôn ngữ khai báo cấp cao.' },
      { t: 'p', x: '<b>Datalog</b> (nghiên cứu mạnh thập niên 1980) là nền tảng cho các ngôn ngữ sau. Dữ kiện: <code>born_in(lucy, idaho).</code> Luật: <code>within_recursive(Location, Name) :- name(Location, Name).</code> và <code>within_recursive(Location, Name) :- within(Location, Via), within_recursive(Via, Name).</code> Biến viết hoa; luật áp dụng khi tìm được khớp cho mọi vị từ vế phải <code>:-</code>. Có thể hợp và tái sử dụng luật, hợp với dữ liệu phức tạp dù kém tiện cho truy vấn một lần.' }
    ] }
  ],
  summary: [
    'Dữ liệu bắt đầu là một cây (phân cấp), rồi quan hệ ra đời để giải many-to-many; NoSQL tách làm tài liệu (self-contained) và đồ thị (mọi thứ liên quan đến mọi thứ).',
    'Document: schema-on-read, locality, gần cấu trúc ứng dụng; Relational: JOIN, many-to-many, schema-on-write. Hai mô hình đang hội tụ.',
    'Khai báo (SQL, CSS) ẩn chi tiết cài đặt, dễ tối ưu và song song hơn mệnh lệnh.',
    'MapReduce là giữa khai báo và mệnh lệnh; aggregation pipeline là cách MongoDB “tái phát minh” SQL.',
    'Đồ thị: property graph (Cypher), triple-store (SPARQL), Datalog (luật đệ quy).'
  ],
  cards: [
    ['Impedance mismatch?', 'Sự lệch giữa đối tượng trong code và mô hình bảng/hàng/cột.'],
    ['Vì sao lưu ID thay vì chuỗi tên?', 'Một nơi, đổi dễ, bản địa hoá, tránh nhập nhằng, tìm kiếm tốt hơn — chuẩn hoá.'],
    ['Many-to-one khó với document model vì?', 'JOIN yếu; phải tham chiếu bằng ID và tự phân giải.'],
    ['Polyglot persistence?', 'Dùng nhiều loại datastore song song, mỗi loại cho một nhu cầu.'],
    ['Access path trong CODASYL?', 'Đường dẫn con trỏ từ bản ghi gốc; lập trình viên phải tự theo dõi.'],
    ['Điểm mạnh then chốt của mô hình quan hệ?', 'Query optimizer tự chọn access path; thêm chỉ mục không cần sửa truy vấn.'],
    ['Schema-on-read vs schema-on-write?', 'Đọc: cấu trúc ngầm, diễn giải khi đọc (kiểu động). Ghi: lược đồ tường minh được DB bảo đảm (kiểu tĩnh).'],
    ['Data locality?', 'Dữ liệu liên quan được lưu liền nhau ⇒ ít seek khi cần cả tài liệu.'],
    ['Khai báo vs mệnh lệnh?', 'Khai báo mô tả kết quả; mệnh lệnh chỉ rõ các bước.'],
    ['Vì sao khai báo dễ song song?', 'Chỉ mô tả mẫu kết quả, không ràng buộc thứ tự thực thi.'],
    ['Hai hàm của MapReduce?', 'map (phát key-value) và reduce (gộp theo key); phải là pure function.'],
    ['Property graph gồm gì?', 'Đỉnh và cạnh có ID, nhãn, thuộc tính; cạnh có đỉnh đuôi và đỉnh đầu.'],
    ['Triple là gì?', '(subject, predicate, object).'],
    ['Cypher `:WITHIN*0..`?', 'Đi theo cạnh WITHIN không hoặc nhiều lần.'],
    ['Datalog khác gì SPARQL/Cypher?', 'Xây truy vấn từng bước bằng các luật (có thể đệ quy).']
  ],
  quiz: [
    { q: 'Mô hình nào cho phép bản ghi có nhiều cha và dùng con trỏ?', o: ['Quan hệ', 'Phân cấp', 'Mạng (CODASYL)', 'Document'], a: 2, e: 'Access path phải theo dõi bằng tay.' },
    { q: 'Điểm chính mà mô hình quan hệ vượt trội CODASYL?', o: ['Con trỏ', 'Query optimizer tự chọn đường truy cập', 'Cấu trúc cây', 'Không có chỉ mục'], a: 1, e: 'Xây một lần, dùng cho mọi ứng dụng.' },
    { q: 'Điểm mạnh của document model:', o: ['JOIN mạnh', 'Locality & linh hoạt lược đồ', 'many-to-many tốt', 'Ràng buộc chặt'], a: 1, e: 'Phù hợp cấu trúc cây một-nhiều.' },
    { q: '“Schemaless” chính xác hơn là:', o: ['Không có cấu trúc', 'Schema-on-read', 'Schema-on-write', 'Không có kiểu'], a: 1, e: 'Cấu trúc ngầm định do code đọc giả định.' },
    { q: 'Vì sao nên giữ tài liệu nhỏ?', o: ['Tiết kiệm RAM', 'DB tải/ghi lại cả tài liệu', 'Không có JOIN', 'Giới hạn JSON'], a: 1, e: 'Locality chỉ có lợi khi cần phần lớn tài liệu.' },
    { q: 'Ưu điểm khai báo so với mệnh lệnh:', o: ['Luôn nhanh hơn', 'Ẩn chi tiết cài đặt, dễ tối ưu và song song', 'Dài hơn', 'Dễ gỡ lỗi từng bước'], a: 1, e: 'DB có thể cải thiện mà không sửa truy vấn.' },
    { q: 'Hàm map và reduce trong MapReduce phải là:', o: ['Có tác dụng phụ', 'Pure function', 'Truy vấn thêm DB', 'Đệ quy'], a: 1, e: 'Cho phép chạy ở bất cứ đâu và chạy lại.' },
    { q: 'Trong property graph, cạnh có:', o: ['Chỉ ID', 'ID, đỉnh đuôi, đỉnh đầu, nhãn, thuộc tính', 'Chỉ nhãn', 'Thứ tự'], a: 1, e: 'Cài được bằng hai bảng.' },
    { q: 'Vì sao truy vấn đồ thị bằng SQL rườm rà?', o: ['Không có JOIN', 'Số JOIN không biết trước ⇒ cần recursive CTE', 'Thiếu chỉ mục', 'Không có kiểu JSON'], a: 1, e: '29 dòng so với 4 dòng Cypher.' },
    { q: 'Triple (lucy, marriedTo, alain) là:', o: ['Thuộc tính', 'Cạnh giữa hai đỉnh', 'Luật', 'Chỉ mục'], a: 1, e: 'Object là đỉnh khác.' },
    { q: 'Datalog định nghĩa truy vấn bằng:', o: ['Vòng lặp', 'Các luật có thể đệ quy', 'Hàm map', 'Bảng'], a: 1, e: 'Subset của Prolog.' },
    { q: 'Xu hướng quan hệ – document:', o: ['Ngày càng khác', 'Hội tụ (JSON trong SQL, JOIN trong document DB)', 'Document thắng', 'Quan hệ biến mất'], a: 1, e: 'Mô hình lai là hướng tốt.' }
  ],
  match: [
    ['Normalization', 'Loại trùng lặp thông tin bằng ID'],
    ['CODASYL', 'Mô hình mạng với access path'],
    ['Declarative', 'Mô tả kết quả, không phải cách làm'],
    ['MapReduce', 'Hai hàm map & reduce thuần'],
    ['Cypher', 'Truy vấn property graph'],
    ['SPARQL', 'Truy vấn triple-store'],
    ['Datalog', 'Luật đệ quy kiểu Prolog']
  ]
});
