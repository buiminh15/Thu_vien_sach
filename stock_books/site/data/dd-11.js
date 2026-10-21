// Designing Data-Intensive Applications – Chương 11: Xử lý luồng (Stream Processing).
BOOK_DATA.ddia.chapters.push({
  n: 11,
  title: 'Xử lý luồng (Stream Processing)',
  intro: 'Dữ liệu thực tế là vô hạn (unbounded): sự kiện đến liên tục. Xử lý luồng xử lý từng sự kiện ngay khi nó xảy ra. Chương này nói về cách truyền luồng (message broker kiểu AMQP/JMS vs <b>log phân vùng</b> như Kafka), mối quan hệ giữa CSDL và luồng (<b>CDC</b>, <b>event sourcing</b>, CQRS), các cách xử lý luồng (CEP, analytics, join), lập luận về thời gian và chịu lỗi (exactly-once, idempotence).',
  sections: [
    { icon: '📨', title: 'Truyền luồng sự kiện', blocks: [
      { t: 'p', x: 'Một <b>sự kiện (event)</b> là đối tượng nhỏ, tự đủ, bất biến mô tả điều xảy ra tại một thời điểm (kèm timestamp). Producer (publisher) tạo một lần; nhiều consumer (subscriber) xử lý; các sự kiện liên quan gom thành <b>topic/stream</b>. Poll DB sẽ tốn khi muốn độ trễ thấp ⇒ cần cơ chế thông báo; trigger CSDL quá hạn chế. Hai câu hỏi phân loại hệ thống nhắn tin:' },
      { t: 'steps', items: [
        'Producer nhanh hơn consumer thì sao? <b>Bỏ thông điệp</b>, <b>đệm vào hàng đợi</b> (hàng đợi lớn tràn bộ nhớ thì sao? ghi ra đĩa ảnh hưởng hiệu năng?), hoặc <b>backpressure</b> (flow control — chặn producer; Unix pipe và TCP làm vậy).',
        'Node crash hoặc offline thì có mất thông điệp? Độ bền cần ghi đĩa và/hoặc nhân bản — có chi phí; chấp nhận mất thì thông lượng cao hơn. Đo cảm biến định kỳ có thể bỏ sót, nhưng đếm sự kiện thì mất tin = đếm sai.'
      ] },
      { t: 'table', head: ['Cách', 'Ví dụ', 'Ghi chú'], rows: [
        ['<b>Nhắn tin trực tiếp</b>', 'UDP multicast (dữ liệu chứng khoán), ZeroMQ/nanomsg, StatsD/Brubeck (UDP, số đo chỉ xấp xỉ), webhooks (callback URL)', 'Ứng dụng phải biết tin có thể mất; giả định producer và consumer luôn online; producer sập mất bộ đệm thử lại'],
        ['<b>Message broker</b> (message queue) kiểu AMQP/JMS', 'RabbitMQ, ActiveMQ, HornetQ, Qpid, IBM MQ, Azure Service Bus, Google Cloud Pub/Sub', 'Máy chủ như DB tối ưu cho luồng thông điệp: chịu client đến–đi, độ bền do broker lo, hàng đợi không giới hạn, consumer bất đồng bộ. Có thể tham gia 2PC (XA/JMS)'],
        ['<b>Log-based broker</b>', 'Apache Kafka, Amazon Kinesis, Twitter DistributedLog', 'Ghi mọi thứ ra đĩa; log phân vùng; consumer theo offset']
      ] },
      { t: 'list', items: [
        '<b>Broker vs DB</b>: DB giữ dữ liệu đến khi xoá tường minh, broker xoá ngay khi giao thành công và giả định hàng đợi ngắn; DB có chỉ mục/truy vấn tuỳ ý (dựa trên snapshot), broker thì đăng ký theo topic/pattern và <i>thông báo</i> khi dữ liệu mới đến.',
        '<b>Nhiều consumer</b>: <b>load balancing</b> (mỗi thông điệp tới một consumer — chia việc; JMS shared subscription) và <b>fan-out</b> (mỗi thông điệp tới mọi consumer — như nhiều job batch đọc cùng file); kết hợp hai kiểu: nhóm consumer.',
        '<b>Ack và redelivery</b>: consumer phải xác nhận; mất kết nối/timeout không ack thì giao lại cho consumer khác (có thể đã xử lý rồi nhưng ack mất — cần atomic commit). Kết hợp load balancing + redelivery làm <b>đảo thứ tự</b> (consumer 2 crash khi xử lý m3 ⇒ m3 giao lại cho consumer 1 sau m4); tránh bằng một hàng đợi riêng cho mỗi consumer.'
      ] }
    ] },
    { icon: '📜', title: 'Log phân vùng (Kafka)', blocks: [
      { t: 'key', x: 'Kết hợp độ bền của CSDL với thông báo độ trễ thấp của nhắn tin: broker là một <b>log chỉ-thêm</b>. Producer thêm vào cuối; consumer đọc tuần tự và chờ khi tới cuối (như <code>tail -f</code>). Để mở rộng, <b>phân vùng</b> log: mỗi partition là một log độc lập; <b>topic = nhóm partition</b>; trong partition, mỗi thông điệp có <b>offset</b> tăng đơn điệu ⇒ thứ tự toàn phần chỉ trong partition, không có thứ tự giữa các partition. Kafka đạt hàng triệu thông điệp/giây nhờ phân vùng + nhân bản dù ghi mọi thứ ra đĩa.' },
      { t: 'table', head: ['', 'Broker AMQP/JMS', 'Log-based broker'], rows: [
        ['Phù hợp', 'Công việc đắt, cần song song hoá theo từng thông điệp, thứ tự không quan trọng (task queue — RPC bất đồng bộ)', 'Thông lượng cao, mỗi thông điệp xử lý nhanh, thứ tự quan trọng'],
        ['Load balancing', 'Gán từng thông điệp', 'Gán cả partition cho node trong nhóm consumer ⇒ số consumer tối đa = số partition; một thông điệp chậm chặn cả partition (head-of-line blocking)'],
        ['Theo dõi tiến độ', 'Ack từng thông điệp', 'Chỉ lưu <b>consumer offset</b> định kỳ (giống log sequence number của replication); xử lý lại phần sau offset cuối nếu consumer chết'],
        ['Xoá / phát lại', 'Xử lý = huỷ thông điệp; consumer mới chỉ thấy thông điệp từ lúc đăng ký', 'Đọc không phá huỷ; thêm consumer mới bất cứ lúc nào, <b>phát lại</b> thông điệp cũ bằng cách đặt lại offset (giống job batch có thể chạy lại)'],
        ['Khi consumer chậm', 'Hàng đợi phình, tốn bộ nhớ nếu quên xoá queue', 'Log là bộ đệm vòng cố định trên đĩa (ổ 6 TB ghi 150 MB/s mất ~11 giờ để đầy; thực tế nhiều ngày–tuần); consumer quá chậm sẽ mất thông điệp cũ nhưng không ảnh hưởng consumer khác; có thể giám sát độ trễ so với đầu log']
      ] },
      { t: 'widget', name: 'log-offsets', title: 'Mô phỏng log phân vùng: offset của hai consumer' }
    ] },
    { icon: '🔄', title: 'CSDL và luồng: CDC và event sourcing', blocks: [
      { t: 'p', x: 'Replication log chính là luồng sự kiện ghi của leader; state machine replication: replica xử lý cùng sự kiện cùng thứ tự thì cùng trạng thái. Hệ thống thực tế dùng nhiều công nghệ cho cùng dữ liệu (DB OLTP, cache, search index, data warehouse) và phải giữ đồng bộ.' },
      { t: 'warn', x: '<b>Dual writes</b> (ứng dụng ghi tường minh vào từng hệ thống) có vấn đề: race condition (client 1 đặt X=A, client 2 đặt X=B; DB thấy A rồi B còn search index thấy B rồi A ⇒ lệch vĩnh viễn mà không báo lỗi) và một ghi thành công, một thất bại (vấn đề atomic commit đắt). Giải pháp: chỉ có một leader (DB), các hệ khác là follower.' },
      { t: 'list', items: [
        '<b>Change Data Capture (CDC)</b>: quan sát mọi thay đổi ghi vào DB và trích thành luồng; áp dụng cùng thứ tự vào search index/cache/warehouse. Log dịch vụ của DB trước đây bị coi là chi tiết nội bộ. Cài đặt: trigger (dễ vỡ, overhead), parse replication log (Databus của LinkedIn, Wormhole của Facebook, Sherpa của Yahoo, Bottled Water cho PostgreSQL, Maxwell/Debezium cho MySQL binlog, Mongoriver, GoldenGate). Thường bất đồng bộ ⇒ có replication lag.',
        '<b>Snapshot ban đầu</b> tương ứng một offset đã biết (để xây index mới cần bản sao đầy đủ). <b>Log compaction</b>: chỉ giữ giá trị mới nhất của mỗi khoá (tombstone để xoá) ⇒ dung lượng chỉ phụ thuộc nội dung hiện tại của DB; consumer mới đọc từ offset 0 của topic nén để có bản sao đầy đủ — Kafka hỗ trợ ⇒ dùng được làm lưu trữ bền, không chỉ nhắn tin tạm.',
        'API luồng thay đổi hạng nhất: RethinkDB changefeed, Firebase, CouchDB, Meteor (MongoDB oplog), VoltDB export stream, Kafka Connect.'
      ] },
      { t: 'table', head: ['', 'CDC', 'Event sourcing (cộng đồng DDD)'], rows: [
        ['Mức trừu tượng', 'Thấp: ứng dụng dùng DB khả biến, log trích từ replication log', 'Cao: logic ứng dụng xây trên <b>sự kiện bất biến</b> ghi vào event log (ý định người dùng: “sinh viên huỷ đăng ký khoá học”)'],
        ['Cập nhật/xoá', 'Có; sự kiện chứa toàn bộ bản ghi mới ⇒ log compaction được', 'Bị cấm/khuyến cáo; sự kiện sau thường không ghi đè sự kiện trước ⇒ cần toàn bộ lịch sử (dùng snapshot chỉ để tăng tốc)']
      ] },
      { t: 'key', x: '<b>Command vs event</b>: yêu cầu người dùng ban đầu là command, có thể thất bại; sau khi xác thực thành công nó trở thành event — <b>một sự thật bất biến</b> (huỷ đặt chỗ là sự kiện mới, không xoá sự kiện cũ). Consumer không được từ chối event; xác thực phải đồng bộ trước đó (giao dịch serializable) hoặc tách thành sự kiện đặt chỗ tạm + xác nhận.' },
      { t: 'list', items: [
        '<b>Trạng thái, luồng, bất biến</b>: trạng thái = tích phân của luồng sự kiện theo thời gian; luồng thay đổi = đạo hàm trạng thái. “Sự thật là log. CSDL là cache của tập con log” (Pat Helland). Kế toán dùng sổ cái chỉ-thêm hàng thế kỷ; sai sót thì thêm bút toán bù. Sự kiện bất biến giữ nhiều thông tin hơn trạng thái (khách thêm rồi bỏ món hàng khỏi giỏ), dễ chẩn đoán và khôi phục sau lỗi mã.',
        '<b>CQRS</b> (command query responsibility segregation): tách dạng ghi (event log) khỏi dạng đọc (nhiều view dẫn xuất tối ưu cho truy vấn, chấp nhận phi chuẩn hoá). Ví dụ timeline Twitter là view đọc phi chuẩn hoá được cập nhật bởi dịch vụ fan-out. Thêm tính năng mới bằng cách xây view mới chạy song song rồi tắt cái cũ. Tranh luận chuẩn hoá/phi chuẩn hoá trở nên ít quan trọng.',
        'Nhược điểm: consumer bất đồng bộ ⇒ có thể đọc view chưa phản ánh ghi của mình (read-your-writes — cập nhật view đồng bộ cần giao dịch hoặc total order broadcast). Ưu điểm: sự kiện tự đủ ⇒ chỉ cần một ghi, dễ nguyên tử; consumer đơn luồng theo partition không cần kiểm soát đồng thời.',
        '<b>Giới hạn của bất biến</b>: dữ liệu nhiều cập nhật/xoá trên tập nhỏ làm lịch sử phình, phân mảnh, GC/compaction quan trọng; yêu cầu pháp lý (xoá dữ liệu cá nhân) đòi <i>viết lại lịch sử</i> — Datomic “excision”, Fossil “shunning”; xoá thật sự rất khó (bản sao, SSD, backup).'
      ] }
    ] },
    { icon: '⚙️', title: 'Xử lý luồng: ứng dụng', blocks: [
      { t: 'p', x: 'Ba lựa chọn với luồng: (1) ghi vào CSDL/cache/index; (2) đẩy tới người dùng (cảnh báo, dashboard); (3) xử lý một hay nhiều luồng thành luồng dẫn xuất (operator/job — gần với Unix process và MapReduce job, nhưng luồng không bao giờ kết thúc: sắp xếp và sort-merge join không dùng được, cơ chế chịu lỗi phải khác).' },
      { t: 'table', head: ['Ứng dụng', 'Mô tả'], rows: [
        ['<b>Complex event processing (CEP)</b>', 'Tìm mẫu sự kiện trong luồng (như regex trên chuỗi); truy vấn lưu lâu dài, sự kiện “chảy qua” truy vấn — ngược với DB. Esper, IBM InfoSphere Streams, Apama, StreamBase, SQLstream. Dùng cho phát hiện gian lận, giao dịch, giám sát nhà máy'],
        ['<b>Stream analytics</b>', 'Tổng hợp/chỉ số trên cửa sổ: tần suất, trung bình trượt, so với kỳ trước. Có thể dùng thuật toán xác suất (Bloom filter, HyperLogLog, xấp xỉ percentile) — xấp xỉ chỉ là tối ưu hoá, không phải bản chất. Storm, Spark Streaming, Flink, Concord, Samza, Kafka Streams; Google Cloud Dataflow, Azure Stream Analytics'],
        ['<b>Duy trì materialized view</b>', 'Cache, search index, warehouse là view dẫn xuất; event sourcing cần “cửa sổ” từ đầu thời gian (Samza, Kafka Streams dựa trên log compaction)'],
        ['<b>Tìm kiếm trên luồng</b>', 'Truy vấn lưu trước, tài liệu chạy qua (giám sát truyền thông, thông báo bất động sản); Elasticsearch percolator; tối ưu bằng cách lập chỉ mục cả truy vấn'],
        ['<b>Message passing / RPC</b>', 'Actor chủ yếu để quản lý đồng thời, giao tiếp tạm thời một–một, có thể vòng; luồng là kỹ thuật quản lý dữ liệu, bền, nhiều subscriber, pipeline không vòng']
      ] }
    ] },
    { icon: '⏰', title: 'Lập luận về thời gian', blocks: [
      { t: 'key', x: '<b>Event time vs processing time</b>: batch dùng timestamp trong sự kiện (xử lý một năm lịch sử trong vài phút; xác định). Nhiều framework luồng dùng đồng hồ máy xử lý để chia cửa sổ — đơn giản nhưng sai nếu có độ trễ (xếp hàng, lỗi mạng, khởi động lại consumer, phát lại). Ví dụ: khởi động lại 1 phút rồi xử lý backlog tạo ra “đột biến” giả của tốc độ request. Giống thứ tự phát hành Star Wars (số tập = event time; ngày xem = processing time). Thông điệp có thể đến sai thứ tự (server A và B).' },
      { t: 'list', items: [
        '<b>Biết khi nào cửa sổ sẵn sàng</b>: không bao giờ chắc đã nhận hết sự kiện của một cửa sổ. Sự kiện đến muộn (straggler): (1) bỏ qua, đo số lượng bị bỏ; (2) <b>phát hiệu chỉnh</b> (giá trị cập nhật, có thể rút lại đầu ra cũ). Có thể dùng thông điệp đặc biệt “từ giờ không còn tin nào trước t” nhưng phải theo dõi từng producer.',
        '<b>Đồng hồ của ai?</b> Ứng dụng di động offline đệm sự kiện hàng giờ/ngày; đồng hồ thiết bị không tin được. Ghi ba timestamp: lúc xảy ra (đồng hồ thiết bị), lúc gửi (đồng hồ thiết bị), lúc server nhận (đồng hồ server); hiệu hai cái sau cho độ lệch, rồi hiệu chỉnh timestamp sự kiện.'
      ] },
      { t: 'table', head: ['Loại cửa sổ', 'Mô tả', 'Ví dụ'], rows: [
        ['<b>Tumbling</b>', 'Độ dài cố định, mỗi sự kiện thuộc đúng một cửa sổ', '1 phút: 10:03:00–10:03:59 (làm tròn xuống phút)'],
        ['<b>Hopping</b>', 'Độ dài cố định, chồng lấn để làm mịn', '5 phút, bước nhảy 1 phút: 10:03–10:07, 10:04–10:08…'],
        ['<b>Sliding</b>', 'Mọi sự kiện cách nhau không quá khoảng cho trước', 'Sự kiện 10:03:39 và 10:08:12 cách <5 phút ⇒ cùng cửa sổ trượt 5 phút'],
        ['<b>Session</b>', 'Không có độ dài cố định; nhóm sự kiện của một user gần nhau, kết thúc sau khoảng không hoạt động', 'Không sự kiện 30 phút ⇒ đóng session']
      ] },
      { t: 'widget', name: 'window-sim', title: 'Phân sự kiện vào cửa sổ tumbling và hopping' }
    ] },
    { icon: '🔗', title: 'Stream join', blocks: [
      { t: 'table', head: ['Loại', 'Ví dụ', 'Cách làm'], rows: [
        ['<b>Stream–stream (window join)</b>', 'Ghép sự kiện tìm kiếm với sự kiện click cùng session ID để tính click-through rate (click có thể đến trước search, hoặc không bao giờ đến)', 'Giữ trạng thái trong cửa sổ (ví dụ 1 giờ) theo session ID; nếu search hết hạn mà không có click thì phát “không được click”'],
        ['<b>Stream–table (làm giàu / enrichment)</b>', 'Gắn hồ sơ người dùng vào sự kiện hoạt động', 'Nạp bản sao DB cục bộ (hash table hoặc chỉ mục đĩa) để tránh truy vấn từ xa; giữ cập nhật bằng CDC ⇒ thực chất join hai luồng với cửa sổ “từ đầu thời gian” cho bảng'],
        ['<b>Table–table (duy trì materialized view)</b>', 'Timeline Twitter = join tweets với follows; cập nhật khi đăng/xoá tweet, follow/unfollow', 'Luồng thay đổi của join theo quy tắc tích: Δ(u⋈v) = Δu⋈v + u⋈Δv']
      ] },
      { t: 'warn', x: '<b>Tính phụ thuộc thời gian</b>: thứ tự sự kiện giữa các luồng/partition không xác định ⇒ join không xác định (cập nhật hồ sơ ngay trước/sau sự kiện nào?). Ví dụ thuế suất thay đổi theo ngày bán. Ở data warehouse gọi là <b>slowly changing dimension (SCD)</b>: đặt định danh cho mỗi phiên bản bản ghi (hoá đơn kèm ID thuế suất lúc bán) ⇒ xác định nhưng không thể log-compact.' }
    ] },
    { icon: '🛡️', title: 'Chịu lỗi trong xử lý luồng', blocks: [
      { t: 'p', x: 'Batch: task lỗi chạy lại, đầu ra lỗi bị huỷ, kết quả như mỗi bản ghi được xử lý <b>đúng một lần</b> (exactly-once; “effectively-once” là tên chính xác hơn). Luồng không kết thúc nên không thể đợi task hoàn tất mới công bố đầu ra.' },
      { t: 'list', items: [
        '<b>Microbatching</b> (Spark Streaming): chia luồng thành khối nhỏ (~1 giây) và coi như batch mini; thành cửa sổ tumbling theo processing time; khối nhỏ ⇒ overhead lập lịch, khối lớn ⇒ trễ. <b>Checkpointing</b> (Flink): định kỳ ghi checkpoint trạng thái nhờ <i>barrier</i> trong luồng; crash thì khởi động từ checkpoint gần nhất và bỏ đầu ra sau checkpoint.',
        'Trong framework thì exactly-once; nhưng đầu ra rời framework (ghi DB, gửi email, gửi tin broker khác) thì không huỷ được ⇒ side effect xảy ra hai lần.',
        '<b>Atomic commit lại</b>: mọi đầu ra, thay đổi trạng thái và ack (di chuyển offset) phải cùng xảy ra hoặc cùng không. Triển khai hiệu quả trong môi trường hẹp, nội bộ framework (Google Cloud Dataflow, VoltDB, dự kiến Kafka), không xuyên công nghệ như XA; xử lý nhiều thông điệp mỗi giao dịch để giảm overhead.',
        '<b>Idempotence</b>: thao tác thực hiện nhiều lần cho cùng kết quả như một lần (đặt khoá = giá trị cố định: idempotent; tăng bộ đếm: không). Biến thành idempotent bằng metadata: ghi kèm <b>offset</b> của thông điệp gây ghi gần nhất để biết cập nhật đã áp dụng chưa (Storm Trident tương tự). Giả định: phát lại cùng thông điệp cùng thứ tự (log broker làm được), xử lý xác định, không node nào khác ghi đồng thời; có thể cần fencing khi failover.',
        '<b>Dựng lại trạng thái sau lỗi</b>: lưu trạng thái ở kho từ xa có nhân bản (chậm), hoặc cục bộ rồi sao chép định kỳ (Flink snapshot lên HDFS; Samza/Kafka Streams ghi thay đổi vào topic Kafka nén log; VoltDB xử lý trùng lặp trên nhiều node), hoặc dựng lại từ luồng đầu vào (cửa sổ ngắn; bảng cục bộ từ CDC + log compaction). Đánh đổi phụ thuộc vào hạ tầng.'
      ] }
    ] }
  ],
  summary: [
    'Luồng = dữ liệu vô hạn; broker AMQP/JMS phù hợp task queue, log-based broker (Kafka) phù hợp thông lượng cao, thứ tự, phát lại.',
    'Log phân vùng: thứ tự trong partition, offset của consumer, log compaction để lưu trữ lâu dài.',
    'Tránh dual writes; dùng CDC hoặc event sourcing; CQRS tách ghi và đọc; sự kiện bất biến + view dẫn xuất.',
    'Lập luận về thời gian: event time vs processing time, straggler, bốn loại cửa sổ; ba loại join và time-dependence (SCD).',
    'Exactly-once nhờ microbatching/checkpoint, atomic commit nội bộ, idempotence (offset), dựng lại trạng thái.'
  ],
  cards: [
    ['Event là gì?', 'Đối tượng nhỏ, tự đủ, bất biến mô tả điều xảy ra tại một thời điểm.'],
    ['Ba lựa chọn khi producer nhanh hơn consumer?', 'Bỏ thông điệp, đệm hàng đợi, backpressure.'],
    ['Backpressure?', 'Chặn producer gửi thêm khi consumer chưa kịp (Unix pipe, TCP).'],
    ['Broker AMQP/JMS?', 'Broker gán từng thông điệp cho consumer, ack từng cái, xoá sau khi ack.'],
    ['Load balancing vs fan-out?', 'Mỗi thông điệp tới một consumer vs tới mọi consumer.'],
    ['Vì sao redelivery gây đảo thứ tự?', 'Thông điệp chưa ack được giao lại cho consumer khác sau khi các thông điệp sau đã xử lý.'],
    ['Log-based broker?', 'Log chỉ-thêm phân vùng với offset; consumer đọc tuần tự.'],
    ['Consumer offset?', 'Vị trí đã xử lý trong partition; chỉ cần ghi định kỳ.'],
    ['Giới hạn song song của log-based?', 'Số consumer ≤ số partition; thông điệp chậm chặn cả partition.'],
    ['Phát lại thông điệp?', 'Đặt lại offset để xử lý lại — không phá huỷ như AMQP.'],
    ['Dual write nguy hiểm vì?', 'Race condition và một ghi thành công, một thất bại ⇒ lệch vĩnh viễn.'],
    ['CDC?', 'Trích mọi thay đổi ghi vào DB thành luồng cho các hệ khác.'],
    ['Log compaction?', 'Chỉ giữ giá trị mới nhất mỗi khoá; consumer mới đọc từ offset 0 có bản sao đầy đủ.'],
    ['Event sourcing vs CDC?', 'ES: sự kiện bất biến ở mức ứng dụng; CDC: trích thay đổi mức thấp từ DB khả biến.'],
    ['Command vs event?', 'Command có thể thất bại; event đã xác thực là sự thật bất biến.'],
    ['CQRS?', 'Tách mô hình ghi (event log) khỏi các view đọc dẫn xuất.'],
    ['“Sự thật là log”?', 'DB chỉ là cache của tập con log (Pat Helland).'],
    ['CEP?', 'Tìm mẫu sự kiện; truy vấn lưu lâu, sự kiện chảy qua.'],
    ['Event time vs processing time?', 'Lúc sự kiện xảy ra vs lúc xử lý — nhầm lẫn gây dữ liệu sai.'],
    ['Bốn loại cửa sổ?', 'Tumbling, hopping, sliding, session.'],
    ['Straggler?', 'Sự kiện đến muộn sau khi cửa sổ đã coi là xong.'],
    ['Stream–table join?', 'Làm giàu sự kiện bằng bản sao cục bộ của bảng (cập nhật bằng CDC).'],
    ['SCD?', 'Slowly changing dimension — gắn định danh phiên bản để join xác định.'],
    ['Idempotence?', 'Thực hiện nhiều lần có kết quả như một lần.'],
    ['Microbatching vs checkpointing?', 'Spark Streaming chia khối nhỏ; Flink checkpoint trạng thái bằng barrier.']
  ],
  quiz: [
    { q: 'Log-based broker khác AMQP ở chỗ:', o: ['Xoá khi giao xong', 'Giữ log trên đĩa, consumer đọc không phá huỷ', 'Chỉ trong RAM', 'Không có thứ tự'], a: 1, e: 'Có thể phát lại.' },
    { q: 'Thứ tự đảm bảo trong Kafka là:', o: ['Toàn topic', 'Trong từng partition', 'Không có', 'Theo giờ'], a: 1, e: 'Không có thứ tự giữa partition.' },
    { q: 'Số consumer tối đa chia việc trong nhóm là:', o: ['Vô hạn', 'Số partition', '1', 'Số broker'], a: 1, e: 'Mỗi partition thuộc một node.' },
    { q: 'Consumer chết, thông điệp xử lý rồi nhưng chưa ghi offset sẽ:', o: ['Mất', 'Xử lý lại', 'Bị xoá', 'Giữ nguyên'], a: 1, e: 'Cần idempotence.' },
    { q: 'Vấn đề của dual writes:', o: ['Chậm', 'Race condition làm hai hệ lệch nhau', 'Cần nhiều RAM', 'Không dùng được SQL'], a: 1, e: 'Thứ tự khác nhau ở mỗi hệ.' },
    { q: 'Log compaction giữ:', o: ['Mọi sự kiện', 'Bản ghi mới nhất theo khoá', 'Bản ghi cũ nhất', 'Không gì'], a: 1, e: 'Dung lượng phụ thuộc nội dung hiện tại.' },
    { q: 'Event sourcing khác CDC:', o: ['Dùng DB khả biến', 'Sự kiện bất biến ở mức ứng dụng', 'Không dùng log', 'Không có consumer'], a: 1, e: 'Thường không compaction được.' },
    { q: 'CQRS nghĩa là:', o: ['Query chậm', 'Tách mô hình ghi và các view đọc', 'Không dùng SQL', 'Chỉ đọc'], a: 1, e: 'View dẫn xuất.' },
    { q: 'Cửa sổ có độ dài cố định, chồng lấn:', o: ['Tumbling', 'Hopping', 'Session', 'Không có'], a: 1, e: 'Làm mịn.' },
    { q: 'Cửa sổ không có độ dài cố định, kết thúc sau khoảng không hoạt động:', o: ['Sliding', 'Session', 'Tumbling', 'Hopping'], a: 1, e: 'Dùng cho phân tích website.' },
    { q: 'Ba timestamp để hiệu chỉnh đồng hồ thiết bị:', o: ['Xảy ra, gửi (thiết bị), nhận (server)', 'Chỉ giờ server', 'Giờ NTP', 'Không cần'], a: 0, e: 'Hiệu hai cái sau cho độ lệch.' },
    { q: 'Stream–table join thường làm bằng:', o: ['Truy vấn từ xa mỗi sự kiện', 'Bản sao cục bộ cập nhật bằng CDC', 'Sắp xếp toàn bộ', 'Cache ngẫu nhiên'], a: 1, e: 'Tránh quá tải DB.' },
    { q: 'Exactly-once trong luồng đạt được bằng:', o: ['Cầu may', 'Microbatch/checkpoint, atomic commit nội bộ, idempotence', 'Tắt retry', 'Chỉ UDP'], a: 1, e: 'Side effect ngoài framework cần xử lý riêng.' },
    { q: 'Thao tác idempotent là:', o: ['Tăng bộ đếm', 'Đặt khoá = giá trị cố định', 'Gửi email', 'Cộng dồn'], a: 1, e: 'Bộ đếm có thể thành idempotent nhờ lưu offset.' },
    { q: 'Flink thực hiện checkpoint dựa vào:', o: ['Barrier trong luồng thông điệp', 'Khoá bảng', 'Cron', 'ZooKeeper'], a: 0, e: 'Giống ranh giới microbatch nhưng không ép kích thước cửa sổ.' }
  ],
  match: [
    ['Kafka', 'Log-based message broker'],
    ['Backpressure', 'Chặn producer'],
    ['CDC', 'Trích thay đổi từ DB'],
    ['Event sourcing', 'Log sự kiện bất biến là nguồn sự thật'],
    ['Session window', 'Kết thúc sau khoảng không hoạt động'],
    ['Straggler', 'Sự kiện đến muộn'],
    ['Idempotence', 'Làm nhiều lần như một lần']
  ]
});
