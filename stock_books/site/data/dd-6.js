// Designing Data-Intensive Applications – Chương 6: Phân vùng (Partitioning).
BOOK_DATA.ddia.chapters.push({
  n: 6,
  title: 'Phân vùng dữ liệu (Partitioning / Sharding)',
  intro: 'Khi dữ liệu hoặc tải truy vấn vượt khả năng một máy, ta chia thành các <b>partition</b>. Mục tiêu: dàn đều dữ liệu và tải, tránh <b>hot spot</b>. Chương này đề cập phân vùng theo khoảng khoá và theo hash, chỉ mục thứ cấp, tái cân bằng (rebalancing), định tuyến yêu cầu và truy vấn song song.',
  sections: [
    { icon: '🧩', title: 'Phân vùng và nhân bản', blocks: [
      { t: 'p', x: 'Mỗi bản ghi thuộc <b>đúng một</b> partition; mỗi partition là một “database nhỏ”. Lý do chính: <b>khả năng mở rộng</b> — các partition đặt trên các node khác nhau (shared-nothing), truy vấn một partition chạy độc lập nên throughput tăng khi thêm node. Phân vùng được tiên phong ở thập niên 1980 (Teradata, Tandem NonStop SQL), rồi NoSQL và data warehouse Hadoop khám phá lại.' },
      { t: 'list', items: [
        'Thuật ngữ: shard (MongoDB, Elasticsearch, SolrCloud), region (HBase), tablet (Bigtable), vnode (Cassandra, Riak), vBucket (Couchbase).',
        'Thường kết hợp với nhân bản: mỗi partition có bản sao trên nhiều node; một node có thể là leader của vài partition và follower của partition khác. Cách chọn phân vùng gần như độc lập với cách nhân bản.',
        'Phân vùng ở đây <b>không</b> liên quan đến network partition (netsplit).'
      ] }
    ] },
    { icon: '🔑', title: 'Phân vùng dữ liệu key-value', blocks: [
      { t: 'key', x: 'Mục tiêu: dàn đều dữ liệu và tải. Phân vùng không công bằng gọi là <b>skewed</b>; partition có tải quá lớn là <b>hot spot</b>. Gán ngẫu nhiên thì đều nhưng muốn đọc một bản ghi phải hỏi mọi node.' },
      { t: 'table', head: ['', 'Theo khoảng khoá (key range)', 'Theo hash của khoá'], rows: [
        ['Cách làm', 'Mỗi partition giữ một khoảng khoá liên tục (như tập bách khoa toàn thư theo vần chữ cái); ranh giới thích ứng với dữ liệu (không đều). Bigtable, HBase, RethinkDB, MongoDB trước 2.4', 'Hàm hash biến khoá lệch thành phân bố đều; mỗi partition giữ một khoảng giá trị hash (Cassandra, MongoDB dùng MD5; Voldemort dùng Fowler–Noll–Vo). Hàm hash của ngôn ngữ (Java hashCode, Ruby hash) có thể khác nhau giữa các tiến trình nên không phù hợp'],
        ['Ưu', 'Truy vấn khoảng (range scan) dễ, có thể coi khoá như chỉ mục nối', 'Phân bố đều, giảm hot spot'],
        ['Nhược', 'Hot spot với mẫu truy cập tập trung: khoá là timestamp ⇒ mọi ghi vào partition của hôm nay. Khắc phục: tiền tố bằng tên cảm biến rồi mới đến thời gian (nhưng truy vấn nhiều cảm biến phải làm riêng cho từng cảm biến)', 'Mất truy vấn khoảng hiệu quả: khoá liền kề bị rải ra mọi partition (MongoDB hash mode gửi query khoảng tới mọi partition; Riak, Couchbase, Voldemort không hỗ trợ range trên khoá chính)']
      ] },
      { t: 'tip', x: '<b>Thoả hiệp của Cassandra</b>: khoá chính phức hợp — chỉ phần đầu được hash để chọn partition, các cột còn lại làm chỉ mục nối để sắp xếp trong SSTable. Không tìm được khoảng trên cột đầu, nhưng khi cố định cột đầu thì quét khoảng hiệu quả trên các cột sau. Ví dụ khoá (user_id, update_timestamp): lấy mọi cập nhật của một user trong khoảng thời gian, đã sắp xếp theo thời gian, cùng một partition.' },
      { t: 'p', x: '<b>Consistent hashing</b> (Karger et al.) dùng ranh giới chọn ngẫu nhiên để phân tải qua hệ thống cache toàn Internet (CDN) mà không cần điều khiển trung tâm hay đồng thuận. Thuật ngữ gây nhầm (không liên quan nhất quán replica hay ACID) và không hợp với database — nên gọi đơn giản là <b>hash partitioning</b>.' },
      { t: 'warn', x: '<b>Workload lệch nặng</b>: hash không cứu được khi mọi đọc/ghi nhắm cùng một khoá (người nổi tiếng với hàng triệu follower tạo bão hoạt động). Hầu hết hệ thống chưa tự bù được; ứng dụng phải giảm lệch, ví dụ <b>thêm số ngẫu nhiên vào đầu/cuối khoá nóng</b> (2 chữ số thập phân ⇒ chia ghi ra 100 khoá), nhưng khi đọc phải đọc cả 100 khoá và gộp, và phải theo dõi khoá nào đã bị chia.' }
    ] },
    { icon: '🗂️', title: 'Phân vùng và chỉ mục thứ cấp', blocks: [
      { t: 'p', x: 'Chỉ mục thứ cấp không định danh duy nhất một bản ghi mà để tìm các lần xuất hiện của một giá trị (mọi xe màu đỏ, bài chứa từ “hogwash”). Chúng không ánh xạ gọn vào partition — có hai cách (ví dụ website bán xe cũ: phân vùng theo ID tài liệu; chỉ mục thứ cấp theo màu và hãng).' },
      { t: 'table', head: ['', 'Document-partitioned (local index)', 'Term-partitioned (global index)'], rows: [
        ['Cách làm', 'Mỗi partition có chỉ mục riêng chỉ bao phủ tài liệu của partition đó', 'Một chỉ mục toàn cục bao phủ mọi partition, tự nó được phân vùng theo <b>term</b> (ví dụ color:red) hoặc hash của term'],
        ['Ghi', '<b>Dễ, nhanh</b>: chỉ động đến partition chứa tài liệu', 'Chậm và phức tạp: một ghi có thể ảnh hưởng nhiều partition của chỉ mục; cập nhật thường <b>bất đồng bộ</b> (DynamoDB GSI)'],
        ['Đọc', '<b>Scatter/gather</b>: gửi truy vấn tới mọi partition rồi gộp — tốn, dễ bị tail latency amplification', '<b>Hiệu quả hơn</b>: chỉ hỏi partition chứa term cần tìm'],
        ['Dùng trong', 'MongoDB, Riak, Cassandra, Elasticsearch, SolrCloud, VoltDB', 'Riak search, Oracle data warehouse (cho chọn local/global)']
      ] },
      { t: 'tip', x: 'Phân vùng theo chính term hợp cho truy vấn khoảng (ví dụ giá xe); theo hash của term thì tải đều hơn. Hầu hết hãng khuyên thiết kế để truy vấn chỉ mục thứ cấp phục vụ từ một partition, nhưng khó khi dùng nhiều chỉ mục cùng lúc.' }
    ] },
    { icon: '⚖️', title: 'Tái cân bằng partition (rebalancing)', blocks: [
      { t: 'p', x: 'Thay đổi theo thời gian: tăng throughput (thêm CPU), tăng dữ liệu (thêm đĩa, RAM), máy hỏng ⇒ cần chuyển tải giữa các node. Yêu cầu: tải sau khi cân bằng công bằng; DB vẫn nhận đọc/ghi trong lúc chuyển; chỉ chuyển lượng dữ liệu tối thiểu.' },
      { t: 'warn', x: '<b>Cách không nên: hash mod N</b> — khi N đổi, hầu hết khoá phải chuyển node. Ví dụ hash = 123456: N=10 ⇒ node 6; N=11 ⇒ node 3; N=12 ⇒ node 0.' },
      { t: 'widget', name: 'rebalance-mod', title: 'Bao nhiêu khoá phải di chuyển khi thêm node?' },
      { t: 'table', head: ['Chiến lược', 'Cách làm', 'Ghi chú'], rows: [
        ['<b>Số partition cố định</b>', 'Tạo sẵn nhiều partition hơn node (ví dụ 1.000 partition cho 10 node); node mới “ăn trộm” vài partition từ mỗi node cũ; chỉ đổi gán partition → node, không đổi gán khoá → partition. Máy mạnh hơn nhận nhiều partition hơn. Riak, Elasticsearch, Couchbase, Voldemort', 'Số partition = số node tối đa nên phải chọn đủ lớn; mỗi partition có chi phí quản lý; khó chọn nếu kích thước dữ liệu biến động mạnh (partition quá to thì rebalance/phục hồi đắt, quá nhỏ thì overhead)'],
        ['<b>Dynamic partitioning</b>', 'Partition tự tách đôi khi vượt ngưỡng (HBase mặc định 10 GB) và gộp khi co lại — giống tầng trên cùng của B-tree; một nửa có thể chuyển sang node khác. HBase, RethinkDB, MongoDB 2.4+ (cả key-range lẫn hash)', 'Số partition thích ứng với khối lượng dữ liệu; DB rỗng chỉ có một partition ⇒ mọi ghi dồn vào một node ⇒ dùng <b>pre-splitting</b>'],
        ['<b>Tỷ lệ với số node</b>', 'Cố định số partition mỗi node (Cassandra mặc định 256, Ketama); node mới chọn ngẫu nhiên các partition để tách và nhận một nửa', 'Kích thước partition ổn định; cần hash partitioning (ranh giới ngẫu nhiên) ≈ định nghĩa gốc của consistent hashing']
      ] },
      { t: 'tip', x: '<b>Tự động hay thủ công?</b> Rebalancing tốn kém (định tuyến lại + chuyển nhiều dữ liệu); tự động kết hợp với phát hiện lỗi tự động có thể gây <b>cascading failure</b> (node quá tải chậm bị coi là chết ⇒ rebalance ⇒ thêm tải). Couchbase, Riak, Voldemort tạo đề xuất nhưng chờ quản trị viên xác nhận — “có người trong vòng lặp” an toàn hơn.' }
    ] },
    { icon: '🧭', title: 'Định tuyến yêu cầu và truy vấn song song', blocks: [
      { t: 'p', x: '<b>Service discovery</b>: client muốn đọc/ghi khoá “foo” phải biết kết nối IP/port nào. Ba cách:' },
      { t: 'steps', items: [
        'Client liên hệ <b>bất kỳ node</b> (qua load balancer round-robin); node đó chuyển tiếp nếu không sở hữu partition (Cassandra, Riak dùng <b>gossip protocol</b> truyền thay đổi trạng thái cụm).',
        'Một <b>tầng định tuyến (routing tier)</b> nhận mọi yêu cầu rồi chuyển tới node đúng (partition-aware load balancer): Espresso dùng Helix; MongoDB có config server + mongos; Couchbase dùng moxi.',
        'Client <b>tự biết</b> phân vùng và gán partition → node, kết nối trực tiếp.'
      ] },
      { t: 'p', x: 'Vấn đề then chốt: thành phần quyết định định tuyến học được thay đổi ở gán partition như thế nào, vì mọi bên phải đồng thuận. Nhiều hệ thống dùng dịch vụ điều phối riêng như <b>ZooKeeper</b> giữ ánh xạ chuẩn (node đăng ký; tầng định tuyến và client đăng ký nhận thay đổi) — HBase, SolrCloud, Kafka, Espresso. Địa chỉ IP đổi chậm hơn nên DNS thường đủ.' },
      { t: 'p', x: '<b>Truy vấn song song</b>: hầu hết NoSQL chỉ hỗ trợ đọc/ghi một khoá (cộng scatter/gather). Cơ sở dữ liệu quan hệ <b>MPP (massively parallel processing)</b> cho analytics hỗ trợ truy vấn phức tạp (join, lọc, nhóm, tổng hợp): optimizer chia thành nhiều giai đoạn và partition, nhiều giai đoạn chạy song song trên các node — lợi nhất cho quét lớn.' }
    ] }
  ],
  summary: [
    'Phân vùng để mở rộng dữ liệu và tải; mục tiêu tránh skew và hot spot.',
    'Key range: truy vấn khoảng dễ nhưng dễ hot spot; Hash: đều nhưng mất truy vấn khoảng; Cassandra thoả hiệp bằng khoá phức hợp.',
    'Chỉ mục thứ cấp: local (ghi dễ, đọc scatter/gather) vs global term-partitioned (đọc hiệu quả, ghi phức tạp, thường bất đồng bộ).',
    'Rebalancing: tránh hash mod N; dùng số partition cố định, dynamic, hay tỷ lệ theo node; cân nhắc có người duyệt.',
    'Định tuyến: node bất kỳ, tầng định tuyến, hoặc client biết phân vùng; ZooKeeper/gossip cho cluster metadata.'
  ],
  cards: [
    ['Vì sao phân vùng?', 'Mở rộng dữ liệu và throughput trên nhiều node (shared-nothing).'],
    ['Skew và hot spot?', 'Skew: phân vùng không đều; hot spot: partition tải quá cao.'],
    ['Phân vùng theo key range hay bị vấn đề gì?', 'Hot spot với khoá thời gian: mọi ghi dồn vào partition hiện tại.'],
    ['Cách giảm hot spot với khoá timestamp?', 'Tiền tố bằng tên cảm biến/thực thể trước thời gian.'],
    ['Nhược điểm hash partitioning?', 'Mất truy vấn khoảng hiệu quả.'],
    ['Khoá phức hợp Cassandra?', 'Hash cột đầu để chọn partition; cột sau sắp xếp để quét khoảng.'],
    ['Consistent hashing?', 'Chọn ranh giới ngẫu nhiên (Karger) cho CDN; sách khuyên gọi là hash partitioning.'],
    ['Xử lý khoá cực nóng?', 'Thêm số ngẫu nhiên vào khoá để chia tải; đọc phải gộp lại.'],
    ['Local index (document-partitioned)?', 'Mỗi partition có chỉ mục riêng; đọc scatter/gather.'],
    ['Global index (term-partitioned)?', 'Chỉ mục toàn cục được phân vùng theo term; đọc hiệu quả, ghi phức tạp.'],
    ['Scatter/gather?', 'Gửi truy vấn tới mọi partition rồi gộp kết quả.'],
    ['Vì sao không dùng hash mod N?', 'Thêm/bớt node làm hầu hết khoá phải di chuyển.'],
    ['Fixed number of partitions?', 'Nhiều partition hơn node; đổi gán partition → node, không đổi gán khoá.'],
    ['Dynamic partitioning?', 'Partition tự tách/gộp theo kích thước.'],
    ['Pre-splitting?', 'Cấu hình sẵn các partition ban đầu cho DB rỗng.'],
    ['Vì sao tránh rebalancing hoàn toàn tự động?', 'Kết hợp với phát hiện lỗi có thể gây cascading failure.'],
    ['Service discovery?', 'Tìm IP/port của node phục vụ một yêu cầu.'],
    ['Vai trò ZooKeeper?', 'Giữ ánh xạ chuẩn partition → node và thông báo thay đổi.'],
    ['Gossip protocol?', 'Truyền thay đổi trạng thái cụm giữa các node (Cassandra, Riak).'],
    ['MPP database?', 'Quan hệ phân tán chạy truy vấn phức tạp song song trên nhiều node.']
  ],
  quiz: [
    { q: 'Partitioning khác network partition ở chỗ:', o: ['Giống nhau', 'Partitioning là cố ý chia dữ liệu; network partition là lỗi mạng', 'Ngược lại', 'Chỉ có trong SQL'], a: 1, e: 'Netsplit sẽ nói ở chương 8.' },
    { q: 'Key range partition với khoá timestamp dẫn đến:', o: ['Phân bố đều', 'Hot spot ở partition hiện tại', 'Mất dữ liệu', 'Không truy vấn khoảng'], a: 1, e: 'Mọi ghi mới vào cùng partition.' },
    { q: 'Hash partitioning mất khả năng nào?', o: ['Phân bố đều', 'Truy vấn khoảng hiệu quả', 'Ghi nhanh', 'Nhân bản'], a: 1, e: 'Khoá kề nhau bị rải ra.' },
    { q: 'Cassandra thoả hiệp bằng:', o: ['Chỉ key range', 'Khoá phức hợp: hash cột đầu, sắp xếp cột sau', 'Chỉ hash', 'Không phân vùng'], a: 1, e: 'Ví dụ (user_id, timestamp).' },
    { q: 'Với khoá nóng, kỹ thuật phổ biến là:', o: ['Xoá khoá', 'Thêm số ngẫu nhiên vào khoá để chia ghi', 'Tăng RAM', 'Tắt nhân bản'], a: 1, e: 'Đổi lại đọc phải gộp.' },
    { q: 'Chỉ mục local (document-partitioned) ghi dễ nhưng đọc cần:', o: ['Khoá toàn bộ', 'Scatter/gather', 'Đồng thuận', 'Sao lưu'], a: 1, e: 'Tail latency amplification.' },
    { q: 'Chỉ mục global thường cập nhật:', o: ['Đồng bộ qua giao dịch phân tán', 'Bất đồng bộ', 'Không bao giờ', 'Bằng tay'], a: 1, e: 'DynamoDB GSI.' },
    { q: 'hash(key) mod N khi N tăng làm:', o: ['Ít khoá di chuyển', 'Hầu hết khoá di chuyển', 'Không đổi', 'Mất khoá'], a: 1, e: 'Rebalancing quá tốn.' },
    { q: 'Với số partition cố định, thêm node:', o: ['Đổi gán khoá → partition', 'Node mới nhận vài partition từ mỗi node cũ', 'Tạo partition mới', 'Gộp mọi partition'], a: 1, e: 'Chỉ đổi gán partition → node.' },
    { q: 'Dynamic partitioning của HBase tách khi partition đạt:', o: ['1 GB', '10 GB', '1 TB', '100 MB'], a: 1, e: 'Mặc định.' },
    { q: 'Cassandra mặc định có bao nhiêu partition mỗi node?', o: ['1', '16', '256', '4096'], a: 2, e: 'Tỷ lệ với số node.' },
    { q: 'Vì sao nên có người duyệt rebalancing?', o: ['Tiết kiệm tiền', 'Tự động + phát hiện lỗi có thể gây cascading failure', 'Luật pháp', 'Không cần'], a: 1, e: 'Operational surprise.' },
    { q: 'Cách định tuyến nào dùng gossip?', o: ['Tầng định tuyến riêng', 'Client biết phân vùng', 'Liên hệ bất kỳ node (Cassandra, Riak)', 'ZooKeeper'], a: 2, e: 'Không phụ thuộc dịch vụ điều phối ngoài.' }
  ],
  match: [
    ['Hot spot', 'Partition tải cao bất thường'],
    ['Scatter/gather', 'Hỏi mọi partition rồi gộp'],
    ['Pre-splitting', 'Tạo sẵn partition cho DB rỗng'],
    ['ZooKeeper', 'Giữ metadata cụm'],
    ['Gossip', 'Truyền trạng thái cụm giữa node'],
    ['MPP', 'Truy vấn song song trên nhiều node'],
    ['Local index', 'Chỉ mục theo từng partition']
  ]
});
