// Designing Data-Intensive Applications – Chương 12: Tương lai của hệ thống dữ liệu.
BOOK_DATA.ddia.chapters.push({
  n: 12,
  title: 'Tương lai của hệ thống dữ liệu',
  intro: 'Chương cuối gom mọi chủ đề (đáng tin cậy, mở rộng được, dễ bảo trì) và đề xuất hướng thiết kế: <b>tích hợp dữ liệu</b> bằng log và dữ liệu dẫn xuất, <b>tháo rời (unbundle) CSDL</b>, thiết kế ứng dụng quanh dataflow, đạt <b>đúng đắn đầu-cuối (end-to-end)</b> mà không cần giao dịch phân tán, và cuối cùng là đạo đức: dự đoán, thiên lệch, giám sát, quyền riêng tư. Phần lớn là quan điểm cá nhân của tác giả.',
  sections: [
    { icon: '🧩', title: 'Tích hợp dữ liệu', blocks: [
      { t: 'p', x: 'Không có công cụ nào phù hợp mọi cách dùng dữ liệu: cùng dữ liệu thường cần nằm ở OLTP DB, search index, cache, data warehouse, hệ ML, thông báo… ⇒ phải ghép nhiều phần mềm chuyên biệt. Câu hỏi then chốt: <b>dữ liệu được ghi vào đâu trước, và biểu diễn nào dẫn xuất từ nguồn nào?</b>' },
      { t: 'key', x: 'Nếu mọi đầu vào đi qua <b>một hệ thống quyết định thứ tự toàn phần</b> các ghi (system of record + CDC hoặc event log), rồi các hệ khác xử lý cùng thứ tự, thì chúng nhất quán với nguồn (state machine replication). CDC hay event sourcing không quan trọng bằng nguyên tắc đặt thứ tự toàn phần. Cập nhật dẫn xuất dựa trên log có thể xác định (deterministic) và idempotent ⇒ dễ phục hồi lỗi.' },
      { t: 'table', head: ['', 'Giao dịch phân tán (2PC/XA)', 'Dữ liệu dẫn xuất dựa trên log'], rows: [
        ['Sắp thứ tự ghi', 'Khoá (loại trừ lẫn nhau)', 'Log'],
        ['Hiệu lực đúng một lần', 'Atomic commit', 'Retry xác định + idempotence'],
        ['Đảm bảo thời gian', 'Thường linearizable (read-your-writes)', 'Bất đồng bộ — không mặc định có timeliness'],
        ['Khi một thành phần lỗi', 'Abort, <b>khuếch đại lỗi</b> ra cả hệ thống', 'Lỗi được cô lập cục bộ; log đệm, consumer bắt kịp sau']
      ] },
      { t: 'list', items: [
        '<b>Giới hạn của thứ tự toàn phần</b>: phải đi qua một leader (vượt thông lượng một máy thì phải phân vùng ⇒ thứ tự giữa partition mơ hồ); nhiều datacenter ⇒ nhiều leader; microservice mỗi cái có trạng thái riêng; client offline cập nhật cục bộ. Total order broadcast ≡ consensus; consensus mở rộng vượt một node và đa vùng địa lý vẫn là vấn đề nghiên cứu mở.',
        '<b>Bắt quan hệ nhân quả</b>: ví dụ unfriend rồi nhắn tin chê bạn cũ, nhưng thông báo xử lý sự kiện nhắn trước sự kiện unfriend. Hướng tiếp cận: logical timestamp; ghi lại sự kiện trạng thái người dùng đã thấy (có ID) để các sự kiện sau tham chiếu; thuật toán giải quyết xung đột (nhưng không giúp được side effect ngoài như gửi thông báo).'
      ] },
      { t: 'h3', x: 'Batch và stream: thống nhất' },
      { t: 'list', items: [
        'Mục tiêu tích hợp: dữ liệu đến đúng dạng ở đúng nơi. Batch và stream chia sẻ nhiều nguyên lý (phong cách hàm: hàm thuần xác định, đầu vào bất biến, đầu ra chỉ-thêm; stream thêm trạng thái chịu lỗi). Ranh giới mờ dần: Spark làm stream trên batch (microbatch), Flink làm batch trên stream.',
        'Duy trì trạng thái dẫn xuất bất đồng bộ là điều làm hệ dựa trên event log bền vững (index thứ cấp liên partition cũng đáng tin cậy và mở rộng hơn khi bất đồng bộ).',
        '<b>Xử lý lại dữ liệu (reprocessing) để tiến hoá ứng dụng</b>: không có reprocessing, tiến hoá lược đồ bị giới hạn ở thay đổi đơn giản (thêm trường tuỳ chọn). Với view dẫn xuất, giữ lược đồ cũ và mới song song, chuyển dần người dùng — mọi bước đều đảo ngược được ⇒ giảm rủi ro, tiến nhanh hơn (như chuyển khổ ray: thêm ray thứ ba để chạy hai khổ).'
      ] },
      { t: 'table', head: ['Kiến trúc', 'Ý tưởng', 'Vấn đề'], rows: [
        ['<b>Lambda</b>', 'Ghi sự kiện bất biến; stream layer (Storm) cập nhật xấp xỉ nhanh, batch layer (Hadoop) sau đó sinh bản chính xác thay thế', 'Duy trì cùng logic ở hai framework; phải <b>gộp</b> đầu ra hai pipeline (khó với join, sessionization); reprocess toàn bộ đắt ⇒ chạy batch tăng dần (lại gặp straggler, cửa sổ vắt qua ranh giới)'],
        ['<b>Hợp nhất batch+stream</b>', 'Một hệ thống làm cả hai', 'Cần: phát lại sự kiện lịch sử qua cùng engine (log broker/HDFS), exactly-once, cửa sổ theo <b>event time</b> (Apache Beam chạy trên Flink/Dataflow)']
      ] }
    ] },
    { icon: '🧱', title: 'Tháo rời cơ sở dữ liệu (Unbundling)', blocks: [
      { t: 'p', x: 'CSDL, Hadoop và hệ điều hành đều lưu và xử lý dữ liệu. Unix: trừu tượng phần cứng mức thấp (pipe, file byte); CSDL quan hệ: trừu tượng cao (SQL, giao dịch). NoSQL là cách áp dụng tinh thần Unix cho OLTP phân tán. Tác giả muốn hoà giải cả hai.' },
      { t: 'key', x: '<b>CREATE INDEX</b> chính là: quét snapshot nhất quán, trích giá trị, sắp xếp, ghi index, xử lý backlog ghi từ lúc snapshot, rồi duy trì liên tục — giống thêm follower mới hay khởi tạo CDC. Cả luồng dữ liệu trong tổ chức giống <b>một CSDL khổng lồ</b>: batch/stream/ETL là trigger, stored procedure và bảo trì materialized view; hệ dẫn xuất là các loại index khác nhau.' },
      { t: 'table', head: ['Hướng', 'Hợp nhất', 'Truyền thống'], rows: [
        ['<b>Federated database / polystore</b>', '<b>Đọc</b>: một giao diện truy vấn trên nhiều engine (PostgreSQL foreign data wrapper)', 'Quan hệ: một hệ tích hợp, ngôn ngữ cấp cao, triển khai phức tạp'],
        ['<b>Unbundled database</b>', '<b>Ghi</b>: đồng bộ thay đổi qua CDC/event log giữa các hệ lưu trữ', 'Unix: công cụ nhỏ làm tốt một việc, giao tiếp qua API thấp (pipe), ghép bằng ngôn ngữ cấp cao (shell)']
      ] },
      { t: 'list', items: [
        'Giữa các công nghệ khác nhau, <b>event log bất đồng bộ + ghi idempotent</b> thực tế hơn giao dịch phân tán (không có giao thức giao dịch chuẩn). Lợi ích: <b>ghép lỏng</b> — mức hệ thống (consumer chậm/hỏng không ảnh hưởng ai) và mức con người (nhiều đội phát triển độc lập, giao diện = event log).',
        'Unbundling không thay thế CSDL: vẫn cần cho trạng thái stream processor và phục vụ truy vấn; engine chuyên dụng (MPP) vẫn quan trọng. Nếu một sản phẩm đáp ứng đủ thì dùng nó — ghép nhiều phần là tối ưu hoá sớm/độ phức tạp vận hành. Mục tiêu là <b>bề rộng</b>, không phải đua hiệu năng sâu.',
        '<b>Còn thiếu</b>: “shell” cho CSDL tháo rời — ví dụ khai báo <code>mysql | elasticsearch</code> thành tương đương CREATE INDEX có CDC liên tục; khai báo materialized view/cache kể cả đệ quy (differential dataflow).'
      ] }
    ] },
    { icon: '🌊', title: 'Thiết kế ứng dụng quanh dataflow', blocks: [
      { t: 'p', x: '“Database inside-out”: giống bảng tính — đổi ô đầu vào thì công thức tự tính lại. Hệ dữ liệu cũng nên tự cập nhật index, cache, tổng hợp khi bản ghi đổi, nhưng phải chịu lỗi, mở rộng, bền, và tích hợp công nghệ do nhiều nhóm viết.' },
      { t: 'list', items: [
        '<b>Mã ứng dụng là hàm dẫn xuất</b>: index thứ cấp (đơn giản, có sẵn CREATE INDEX), full-text (NLP: stemming, đồng nghĩa), mô hình ML (feature extraction), cache (hình dạng theo UI). Hàm tuỳ biến là chỗ CSDL yếu (trigger/UDF luôn là “nghĩ sau”).',
        '<b>Tách mã và trạng thái</b>: CSDL kém làm môi trường triển khai (phụ thuộc, version, rolling upgrade, giám sát); Kubernetes/Mesos/YARN lo việc chạy mã. Web hiện tại: dịch vụ không trạng thái + CSDL như biến chia sẻ khả biến, chỉ polling chứ không subscribe được thay đổi (“separation of Church and state”).',
        '<b>Dataflow</b>: mã phản ứng với thay đổi trạng thái ở nơi này bằng cách thay đổi trạng thái nơi khác. Việc duy trì dữ liệu dẫn xuất khác job bất đồng bộ: cần <b>thứ tự thay đổi ổn định</b> (broker redelivery đảo thứ tự không dùng được, dual writes bị loại) và <b>chịu lỗi</b> (mất một thông điệp làm view lệch vĩnh viễn; actor mặc định giữ trong RAM thì mất khi crash).',
        '<b>Stream processor vs microservice</b>: dataflow dùng luồng một chiều bất đồng bộ thay RPC. Ví dụ quy đổi tiền tệ: microservice gọi dịch vụ tỷ giá mỗi lần; dataflow đăng ký luồng cập nhật tỷ giá trước và lưu vào DB cục bộ ⇒ <b>nhanh và bền hơn: yêu cầu mạng nhanh nhất là không có yêu cầu nào</b>. Vẫn là join phụ thuộc thời gian (cần tỷ giá lịch sử khi xử lý lại).'
      ] },
      { t: 'h3', x: 'Quan sát trạng thái dẫn xuất: write path và read path' },
      { t: 'key', x: '<b>Write path</b> = phần tính trước (eager) ngay khi dữ liệu vào; <b>read path</b> = phần chỉ làm khi có người hỏi (lazy). Tập dữ liệu dẫn xuất (index, cache, materialized view) là chỗ hai đường gặp nhau: <b>dịch chuyển ranh giới</b> giữa việc làm lúc ghi và lúc đọc. Ví dụ tìm kiếm: không index = ghi rẻ, đọc đắt (grep); tính trước mọi truy vấn = đọc rẻ, ghi vô hạn; cache truy vấn phổ biến = giữa hai thái cực. Ví dụ Twitter ở chương 1 là cùng vấn đề.' },
      { t: 'list', items: [
        '<b>Client có trạng thái, hoạt động offline</b> (offline-first): trạng thái trên thiết bị là cache của trạng thái server; pixel trên màn hình là materialized view của model object. Cho phép server <b>đẩy</b> thay đổi (WebSocket, server-sent events) = kéo dài write path đến tận người dùng; thiết bị offline bắt kịp bằng offset như consumer log (React/Redux/Elm đã quản lý trạng thái kiểu event sourcing). Khó vì hầu hết CSDL/framework giả định request/response — cần hỗ trợ subscribe.',
        '<b>Đọc cũng là sự kiện</b>: gửi cả sự kiện đọc và ghi qua cùng stream operator ⇒ đọc = stream–table join; subscribe = join bền với sự kiện quá khứ và tương lai. Lợi ích: ghi lại người dùng đã thấy gì trước khi quyết định (ví dụ ngày giao hàng dự kiến) cho nhân quả và provenance, nhưng tốn lưu trữ/I-O.',
        '<b>Xử lý đa partition</b>: truy vấn kết hợp nhiều partition tận dụng hạ tầng routing/partition/join của stream processor (Storm distributed RPC: đếm số người đã thấy một URL = hợp tập follower của mọi người đăng; chống gian lận: nối điểm uy tín của IP, email, địa chỉ…). Nếu có sẵn MPP DB làm được thì dùng DB.'
      ] },
      { t: 'widget', name: 'write-read-path', title: 'Dịch chuyển ranh giới write path / read path' }
    ] },
    { icon: '✅', title: 'Hướng tới sự đúng đắn (Correctness)', blocks: [
      { t: 'warn', x: 'Dùng hệ dữ liệu có bảo đảm mạnh (serializable) <b>không</b> có nghĩa ứng dụng không mất/hỏng dữ liệu: bug ứng dụng ghi sai/xoá, cấu hình isolation sai, Jepsen cho thấy khác biệt giữa quảng cáo và thực tế. Bất biến/append-only giúp phục hồi nhưng không phải thuốc chữa bách bệnh.' },
      { t: 'h3', x: 'Lập luận đầu-cuối (end-to-end argument)' },
      { t: 'list', items: [
        '<b>Xử lý hai lần</b> = hỏng dữ liệu (tính tiền hai lần). TCP khử trùng lặp gói chỉ trong một kết nối. Client gửi COMMIT, mất kết nối trước khi nhận trả lời ⇒ không biết commit hay abort ⇒ retry giao dịch chuyển tiền không idempotent có thể chuyển $22 thay vì $11. 2PC cũng chưa đủ: người dùng có thể gửi lại POST từ trình duyệt (“Are you sure you want to submit this form again?”).',
        '<b>Operation ID</b>: sinh UUID (hoặc hash các trường form) ở client, truyền suốt đến DB, và <b>ràng buộc UNIQUE</b> trên <code>request_id</code> trong bảng requests (INSERT trùng ⇒ abort cả giao dịch). Bảng requests còn là event log (hướng event sourcing); cập nhật số dư có thể được dẫn xuất sau, miễn là sự kiện xử lý đúng một lần.',
        '<b>Nguyên lý đầu-cuối</b> (Saltzer, Reed, Clark 1984): một chức năng chỉ có thể được cài đặt đầy đủ và đúng với hiểu biết/giúp đỡ của ứng dụng ở hai đầu; cung cấp nó ở tầng truyền thông là không thể (bản không đầy đủ chỉ là tối ưu hiệu năng). Áp dụng cho khử trùng lặp, checksum toàn vẹn dữ liệu (Ethernet/TCP/TLS không bắt được bug phần mềm hay hỏng đĩa) và mã hoá (WiFi/TLS không chống được server bị xâm nhập — cần mã hoá đầu-cuối).',
        'Cơ chế tầng thấp vẫn hữu ích vì giảm xác suất lỗi tầng cao. Giao dịch gom lỗi thành commit/abort — nhưng chưa đủ; cần trừu tượng chịu lỗi cho đúng đắn đầu-cuối riêng ứng dụng mà vẫn hiệu năng cao.'
      ] },
      { t: 'h3', x: 'Thực thi ràng buộc mà không cần giao dịch phân tán' },
      { t: 'list', items: [
        '<b>Ràng buộc duy nhất cần consensus</b>: một leader quyết định; mở rộng bằng cách <b>phân vùng theo giá trị cần duy nhất</b> (hash username). Multi-master bất đồng bộ bị loại; từ chối ngay lập tức vi phạm thì tránh sao được phối hợp đồng bộ. Cùng kỹ thuật cho số dư không âm, không bán quá tồn kho, đặt phòng không chồng.',
        '<b>Uniqueness qua log</b>: (1) yêu cầu username gửi vào partition theo hash username; (2) stream processor đọc tuần tự đơn luồng, DB cục bộ ghi tên đã lấy ⇒ phát thông điệp thành công hoặc từ chối; (3) client theo dõi luồng đầu ra. Nguyên tắc: các ghi có thể xung đột đi vào cùng partition và xử lý tuần tự (tương tự Bayou).',
        '<b>Yêu cầu đa partition</b> (chuyển tiền: partition của request ID, của người trả, của người nhận): (1) client gán request ID, ghi <b>một thông điệp</b> vào log (ghi đơn đối tượng là nguyên tử); (2) stream processor xác định phát hai thông điệp: ghi nợ A (phân vùng theo A) và ghi có B (theo B), kèm request ID; (3) processor tiếp theo <b>khử trùng lặp theo request ID</b> và cập nhật số dư. Crash ở bước 2 ⇒ chạy lại sinh cùng chỉ thị (xác định) ⇒ bước 3 dedupe. Cùng độ đúng đắn <b>không cần atomic commit</b>; kiểm tra thấu chi bằng processor phân vùng theo tài khoản người trả trước khi vào log.'
      ] },
      { t: 'h3', x: 'Timeliness và Integrity' },
      { t: 'table', head: ['', 'Timeliness (đúng lúc)', 'Integrity (toàn vẹn)'], rows: [
        ['Ý nghĩa', 'Người dùng thấy trạng thái mới nhất', 'Không mất dữ liệu, không mâu thuẫn/sai (dẫn xuất đúng)'],
        ['Khi vi phạm', '“Eventual consistency” — tạm thời, chờ và thử lại', '“Perpetual inconsistency” — vĩnh viễn, cần kiểm tra và sửa tường minh'],
        ['Cách đạt', 'Linearizability, read-after-write', 'Atomicity, durability, exactly-once, idempotence'],
        ['Ví dụ', 'Giao dịch thẻ 24h trước chưa hiện (bình thường)', 'Số dư không bằng tổng giao dịch; tiền tính cho khách nhưng không tới người bán (thảm hoạ)']
      ] },
      { t: 'key', x: 'Với hầu hết ứng dụng, <b>integrity quan trọng hơn timeliness</b>. ACID gói cả hai; dataflow <b>tách</b> chúng: không đảm bảo timeliness (trừ khi chờ tường minh trên luồng đầu ra) nhưng giữ integrity bằng: (1) nội dung ghi là một thông điệp nguyên tử (event sourcing); (2) mọi cập nhật dẫn xuất từ nó bằng hàm xác định; (3) request ID truyền suốt cho dedupe/idempotence đầu-cuối; (4) thông điệp bất biến, xử lý lại được khi có bug.' },
      { t: 'list', items: [
        '<b>Ràng buộc lỏng (loosely interpreted)</b>: nhiều nghiệp vụ chấp nhận vi phạm tạm thời rồi <b>bù (compensating transaction)</b>/xin lỗi: trùng username/chỗ ngồi ⇒ yêu cầu chọn lại; bán quá tồn kho ⇒ đặt thêm hàng, xin lỗi, giảm giá (như khi xe nâng làm hỏng hàng); hãng bay/khách sạn overbook; ngân hàng thu phí thấu chi và giới hạn rút trong ngày. Chi phí xin lỗi là quyết định kinh doanh; có thể ghi lạc quan rồi kiểm tra sau, nhưng chặn trước các việc khó đảo ngược. Vẫn cần integrity (không mất đặt chỗ, tiền không biến mất).',
        '<b>Hệ tránh phối hợp (coordination-avoiding)</b>: integrity mạnh mà không cần atomic commit, linearizability hay phối hợp đồng bộ giữa partition ⇒ chạy đa-datacenter multi-leader, mỗi vùng hoạt động độc lập, timeliness yếu nhưng integrity mạnh. Serializable transaction vẫn dùng ở phạm vi nhỏ; phối hợp đồng bộ chỉ nơi thực sự cần. Đánh đổi: phối hợp giảm số lần xin lỗi do bất nhất nhưng tăng số lần xin lỗi do sập/chậm — tìm điểm cân bằng.'
      ] },
      { t: 'widget', name: 'idempotent-retry', title: 'Retry chuyển tiền: có và không có request ID' },
      { t: 'h3', x: 'Tin nhưng phải kiểm chứng (Trust, but verify)' },
      { t: 'list', items: [
        'Mô hình hệ thống thường nhị phân (cái này có thể xảy ra, cái kia không) nhưng thực tế là xác suất: dữ liệu hỏng âm thầm trên đĩa, bit-flip bộ nhớ (báo cáo crash chỉ giải thích được bằng bit-flip; rowhammer), checksum TCP lọt lỗi. Phần mềm có bug: MySQL từng không duy trì đúng uniqueness, PostgreSQL serializable từng có write skew; mã ứng dụng ít được kiểm thử hơn nhiều và thường dùng sai ràng buộc.',
        '<b>Auditing</b>: HDFS, S3 chạy tiến trình nền đọc lại file, so với bản sao, di chuyển giữa đĩa. Muốn biết dữ liệu còn đó thì phải đọc và kiểm tra; thử khôi phục backup định kỳ. Văn hoá ACID đã khiến ta tin mù quáng vào công nghệ và bỏ qua auditability, trong khi NoSQL/kho chưa trưởng thành khiến việc này nguy hiểm hơn.',
        '<b>Thiết kế để kiểm toán được</b>: event sourcing — đầu vào là một sự kiện bất biến, trạng thái dẫn xuất tái lập được (cùng log + cùng mã = cùng kết quả); hash để kiểm tra log; chạy lại hoặc chạy song song dẫn xuất dự phòng để so sánh; “time-travel debugging”. Kiểm tra đầu-cuối càng bao phủ nhiều hệ thì càng ít lỗi lọt; kiểm toán liên tục giúp <b>thay đổi nhanh mà không sợ</b> (như test tự động).',
        '<b>Công cụ mật mã</b>: blockchain/distributed ledger (replica của tổ chức không tin nhau kiểm tra chéo và dùng consensus) có ý tưởng hay về toàn vẹn; tác giả hoài nghi phần Byzantine fault tolerance và thấy proof-of-work lãng phí. <b>Cây Merkle</b> (cây hash chứng minh một bản ghi thuộc tập dữ liệu) dùng trong certificate transparency; có thể phổ biến hơn trong hệ dữ liệu nếu đủ mở rộng.'
      ] }
    ] },
    { icon: '⚖️', title: 'Làm điều đúng đắn (đạo đức)', blocks: [
      { t: 'p', x: 'Mọi hệ thống có mục đích và hệ quả ngoài ý muốn; kỹ sư có trách nhiệm cân nhắc hệ quả. Dữ liệu nói về con người ⇒ cần đối xử với nhân phẩm và sự tôn trọng (ACM Code of Ethics). Công nghệ không tốt hay xấu tự nó — quan trọng là cách dùng và ảnh hưởng.' },
      { t: 'table', head: ['Chủ đề', 'Vấn đề'], rows: [
        ['<b>Predictive analytics</b>', 'Dự đoán thời tiết/dịch bệnh khác dự đoán tái phạm, vỡ nợ, yêu cầu bồi thường — ảnh hưởng trực tiếp đời sống. Bị gắn nhãn rủi ro (đúng hoặc sai) ⇒ nhiều lần bị từ chối: <b>“nhà tù thuật toán”</b>; không có suy đoán vô tội, ít cơ hội kháng cáo'],
        ['<b>Thiên lệch và phân biệt</b>', 'Quy tắc được suy ra từ dữ liệu, mờ đục; biến liên quan đặc điểm được bảo vệ (mã bưu điện, IP ~ chủng tộc). Dữ liệu thiên lệch vào ⇒ thiên lệch khuếch đại ra (“học máy như rửa tiền cho thiên lệch”). Mô hình chỉ ngoại suy quá khứ; cần trí tưởng tượng đạo đức của con người: dữ liệu và mô hình là công cụ, không phải chủ'],
        ['<b>Trách nhiệm giải trình</b>', 'Ai chịu trách nhiệm khi thuật toán sai? Có giải thích được trước toà? Điểm tín dụng dựa trên lịch sử vay thực tế; ML hỏi “ai giống bạn và họ hành xử thế nào” ⇒ khuôn mẫu hoá. Kết quả thống kê có thể đúng tổng thể mà sai ở cá nhân'],
        ['<b>Vòng phản hồi</b>', 'Echo chamber ở recommendation; vòng xoáy điểm tín dụng ⇒ mất việc ⇒ nghèo ⇒ điểm tệ hơn. Dùng <b>tư duy hệ thống</b> (cả người lẫn máy), hỏi hệ có khuếch đại bất bình đẳng không'],
        ['<b>Theo dõi và giám sát</b>', 'Khi hoạt động bị ghi như hệ quả phụ, người dùng không còn là khách hàng thực sự nếu quảng cáo trả tiền (nhà quảng cáo là khách). Thử thay “data” bằng “surveillance”: “kho giám sát”, “nhà khoa học giám sát”. Micro trong mọi phòng (điện thoại, TV, loa, đồ chơi trẻ em), bảo hiểm gắn thiết bị theo dõi; cảm biến smartwatch suy ra mật khẩu gõ'],
        ['<b>Đồng thuận và tự do lựa chọn</b>', 'Chính sách riêng tư làm mờ hơn làm rõ; dữ liệu một người nói về người khác chưa đồng ý; quan hệ bất đối xứng, điều khoản do dịch vụ đặt; hiệu ứng mạng khiến từ chối là chi phí xã hội — chỉ người có đặc quyền mới rời bỏ được'],
        ['<b>Quyền riêng tư</b>', 'Không phải giữ bí mật mọi thứ, mà là <b>quyền quyết định</b> tiết lộ gì cho ai. Thu thập dữ liệu = chuyển quyền quyết định từ cá nhân sang công ty; hệ quả lớn chưa từng có tiền lệ (giám sát trước đây đắt và thủ công; quan hệ tin cậy như bác sĩ–bệnh nhân có ràng buộc pháp lý)'],
        ['<b>Dữ liệu là tài sản và quyền lực</b>', '“Data exhaust” thực ra là tài sản cốt lõi; data broker mua bán; phá sản thì dữ liệu bị bán; rò rỉ thường xuyên ⇒ dữ liệu là <b>tài sản độc hại / vật liệu nguy hiểm</b>. Phải cân nhắc mọi chính phủ tương lai, không chỉ hiện tại: “kém vệ sinh công dân khi cài công nghệ có thể hỗ trợ nhà nước cảnh sát”']
      ] },
      { t: 'key', x: 'So sánh Cách mạng Công nghiệp: tăng trưởng lớn nhưng ô nhiễm, điều kiện lao động tồi tệ; phải rất lâu mới có quy định môi trường, an toàn, cấm lao động trẻ em — chi phí kinh doanh tăng nhưng xã hội hưởng lợi. Theo Bruce Schneier: <b>dữ liệu là vấn đề ô nhiễm của thời đại thông tin, bảo vệ quyền riêng tư là thách thức môi trường</b>. Hướng đi: tự điều chỉnh của ngành, <b>thu thập ít dữ liệu hơn, xoá khi không cần</b>, cho người dùng quyền kiểm soát, minh bạch và giải trình thuật toán.' }
    ] }
  ],
  summary: [
    'Tích hợp dữ liệu: một nguồn quyết định thứ tự, các hệ dẫn xuất qua log/CDC; log bất đồng bộ + idempotence thay giao dịch phân tán; cẩn thận giới hạn của thứ tự toàn phần và nhân quả.',
    'Lambda → hợp nhất batch + stream (replay, exactly-once, event time); reprocessing để tiến hoá ứng dụng bằng view song song.',
    'Tháo rời CSDL: federation cho đọc, unbundling cho ghi; ứng dụng dataflow như bảng tính; ranh giới write path/read path; client có trạng thái nhận thay đổi đẩy.',
    'Đúng đắn đầu-cuối: request ID + ràng buộc UNIQUE; ràng buộc qua partition log; chuyển tiền không cần 2PC; integrity quan trọng hơn timeliness; ràng buộc lỏng + bù trừ; hệ tránh phối hợp.',
    'Trust but verify: audit liên tục, thiết kế khả kiểm toán, Merkle tree.',
    'Đạo đức: thiên lệch, trách nhiệm giải trình, vòng phản hồi, giám sát, quyền riêng tư; dữ liệu là tài sản độc hại — kỹ sư có trách nhiệm.'
  ],
  cards: [
    ['Nguyên tắc cốt lõi của tích hợp dữ liệu?', 'Một hệ quyết định thứ tự toàn phần các ghi; các hệ khác dẫn xuất theo cùng thứ tự (CDC / event sourcing).'],
    ['Dữ liệu dẫn xuất qua log vs 2PC?', 'Log: bất đồng bộ, cô lập lỗi, retry + idempotence. 2PC: linearizable nhưng khuếch đại lỗi.'],
    ['Vì sao thứ tự toàn phần khó mở rộng?', 'Phải qua một leader; phân vùng, đa datacenter, microservice, client offline làm thứ tự mơ hồ.'],
    ['Cách bắt quan hệ nhân quả không cần total order?', 'Logical timestamp; ghi sự kiện trạng thái đã thấy có ID để tham chiếu; thuật toán xung đột.'],
    ['Nhược điểm kiến trúc Lambda?', 'Hai codebase, phải gộp đầu ra, batch tăng dần phức tạp.'],
    ['Điều kiện hợp nhất batch và stream?', 'Replay lịch sử, exactly-once, cửa sổ theo event time.'],
    ['Lợi ích của reprocessing?', 'Tiến hoá lược đồ tuỳ ý, chạy view cũ/mới song song và chuyển dần, đảo ngược được.'],
    ['CREATE INDEX giống gì?', 'Thiết lập follower mới / khởi tạo CDC: snapshot + backlog + duy trì liên tục.'],
    ['Federated vs unbundled?', 'Federated hợp nhất đọc; unbundled hợp nhất ghi (đồng bộ qua log).'],
    ['“mysql | elasticsearch”?', 'Giấc mơ về “shell” cho CSDL tháo rời: khai báo index dẫn xuất kèm CDC liên tục.'],
    ['Write path vs read path?', 'Phần tính trước lúc ghi (eager) vs phần tính lúc có truy vấn (lazy); index/cache/view dịch chuyển ranh giới.'],
    ['Vì sao stream join thay RPC tỷ giá?', 'Lưu tỷ giá cục bộ qua luồng cập nhật ⇒ nhanh, bền; không cần gọi mạng.'],
    ['Reads are events too?', 'Đưa đọc vào luồng ⇒ đọc là stream–table join; ghi lại cái người dùng thấy để theo dõi nhân quả.'],
    ['Nguyên lý đầu-cuối?', 'Chức năng chỉ đúng đầy đủ khi ứng dụng ở hai đầu cài đặt; tầng thấp chỉ là tối ưu.'],
    ['Cách retry an toàn cho chuyển tiền?', 'Request ID từ client xuyên suốt + ràng buộc UNIQUE trên bảng requests.'],
    ['Uniqueness cần gì?', 'Consensus; mở rộng bằng phân vùng theo giá trị cần duy nhất.'],
    ['Chuyển tiền không 2PC?', 'Log một request → stream processor sinh nợ/có theo từng partition → dedupe theo request ID.'],
    ['Timeliness vs integrity?', 'Timeliness vi phạm = eventual consistency (tạm); integrity vi phạm = perpetual inconsistency.'],
    ['Compensating transaction?', 'Sửa sai bằng giao dịch bù/xin lỗi sau khi ràng buộc bị vi phạm tạm thời.'],
    ['Coordination-avoiding?', 'Integrity mạnh không cần phối hợp đồng bộ; timeliness yếu.'],
    ['Trust but verify?', 'Audit liên tục dữ liệu (đọc lại, so replica, thử restore) vì phần cứng/phần mềm không hoàn hảo.'],
    ['Merkle tree?', 'Cây hash chứng minh hiệu quả một bản ghi thuộc tập dữ liệu (certificate transparency).'],
    ['“Algorithmic prison”?', 'Bị thuật toán gắn nhãn rủi ro và liên tục bị từ chối mà không có suy đoán vô tội / kháng cáo.'],
    ['Quyền riêng tư là gì?', 'Quyền quyết định tiết lộ gì cho ai — không phải giữ bí mật mọi thứ.'],
    ['“Data is the pollution problem of the information age”?', 'Schneier: dữ liệu tích tụ gây hại như ô nhiễm; bảo vệ quyền riêng tư là thách thức môi trường.']
  ],
  quiz: [
    { q: 'Cách tránh lệch giữa DB và search index:', o: ['Dual writes', 'Mọi thay đổi vào DB rồi CDC sang index theo cùng thứ tự', 'Cache dài', 'Ghi ngẫu nhiên'], a: 1, e: 'Chỉ một hệ quyết định thứ tự.' },
    { q: 'Điểm yếu của dữ liệu dẫn xuất qua log so với giao dịch là:', o: ['Không bền', 'Mặc định không có timeliness (bất đồng bộ)', 'Không dedupe được', 'Không mở rộng'], a: 1, e: 'Cần thiết kế thêm nếu cần read-your-writes.' },
    { q: 'Kiến trúc lambda:', o: ['Chỉ batch', 'Stream xấp xỉ nhanh + batch sửa chính xác', 'Chỉ SQL', 'Không dùng log'], a: 1, e: 'Nhưng phải duy trì hai hệ thống.' },
    { q: 'Điều kiện hợp nhất batch+stream KHÔNG gồm:', o: ['Replay sự kiện lịch sử', 'Exactly-once', 'Cửa sổ theo event time', 'Giao dịch XA'], a: 3, e: 'XA không cần thiết.' },
    { q: 'CREATE INDEX tương tự:', o: ['Xoá bảng', 'Khởi tạo follower/CDC (snapshot + backlog)', 'Dịch ngược', 'Backup'], a: 1, e: 'Dẫn xuất view từ dữ liệu có sẵn.' },
    { q: 'Federated database hợp nhất:', o: ['Ghi', 'Đọc', 'Cả hai', 'Không gì'], a: 1, e: 'Unbundling hợp nhất ghi.' },
    { q: 'Write path là phần:', o: ['Chỉ xảy ra khi có truy vấn', 'Tính trước ngay khi dữ liệu vào', 'Của trình duyệt', 'Của DNS'], a: 1, e: 'Giống eager evaluation.' },
    { q: 'Index/cache/materialized view có vai trò:', o: ['Xoá dữ liệu', 'Dịch chuyển ranh giới giữa write path và read path', 'Thay đổi CAP', 'Không có'], a: 1, e: 'Làm nhiều hơn lúc ghi để đọc nhanh.' },
    { q: 'Duplicate suppression của TCP không đủ vì:', o: ['TCP chậm', 'Chỉ trong một kết nối, không bao phủ retry của người dùng', 'TCP không có sequence number', 'TCP mã hoá'], a: 1, e: 'Cần operation ID đầu-cuối.' },
    { q: 'Cách chặn xử lý trùng lặp request chuyển tiền:', o: ['Tăng timeout', 'request_id từ client + UNIQUE constraint', 'Tắt retry', 'Dùng UDP'], a: 1, e: 'INSERT trùng sẽ abort giao dịch.' },
    { q: 'Ràng buộc duy nhất ở quy mô lớn đạt được bằng:', o: ['Multi-master async', 'Phân vùng theo giá trị cần duy nhất, xử lý tuần tự mỗi partition', 'Không thể', 'Last-write-wins'], a: 1, e: 'Cần consensus/leader theo partition.' },
    { q: 'Chuyển tiền không dùng atomic commit bằng cách:', o: ['Gửi thẳng nợ và có từ client', 'Log một request → sinh nợ/có → dedupe theo request ID', 'Khoá toàn bảng', 'Gửi qua email'], a: 1, e: 'Ghi một thông điệp là nguyên tử.' },
    { q: 'Vi phạm integrity được gọi là:', o: ['Eventual consistency', 'Perpetual inconsistency', 'Latency', 'Cache miss'], a: 1, e: 'Cần kiểm tra và sửa tường minh.' },
    { q: 'Hầu hết ứng dụng:', o: ['Timeliness quan trọng hơn integrity', 'Integrity quan trọng hơn timeliness', 'Hai cái như nhau', 'Không cái nào'], a: 1, e: 'Giao dịch thẻ trễ 24h chấp nhận được, tiền biến mất thì không.' },
    { q: 'Overbooking của hãng bay minh hoạ:', o: ['Bug', 'Ràng buộc lỏng + quy trình bù trừ', 'Consensus', 'Cache'], a: 1, e: 'Xin lỗi/bù là một phần kinh doanh.' },
    { q: '“Trust, but verify” gợi ý:', o: ['Tin tuyệt đối vào ACID', 'Audit liên tục, thử khôi phục backup', 'Tắt checksum', 'Chỉ dựa vào TLS'], a: 1, e: 'HDFS/S3 đọc lại và so replica.' },
    { q: 'Cây Merkle dùng để:', o: ['Nén dữ liệu', 'Chứng minh hiệu quả một bản ghi thuộc tập dữ liệu', 'Sắp xếp', 'Mã hoá đối xứng'], a: 1, e: 'Dùng trong certificate transparency.' },
    { q: 'Quyền riêng tư theo tác giả là:', o: ['Giữ mọi thứ bí mật', 'Quyền quyết định tiết lộ gì cho ai', 'Mã hoá đĩa', 'Xoá cookie'], a: 1, e: 'Thu thập dữ liệu chuyển quyền quyết định cho công ty.' },
    { q: 'Rủi ro của predictive analytics trên dữ liệu thiên lệch:', o: ['Không có', 'Học và khuếch đại thiên lệch', 'Tự sửa', 'Luôn công bằng'], a: 1, e: '“Rửa tiền cho thiên lệch”.' },
    { q: 'Schneier ví dữ liệu với:', o: ['Vàng', 'Ô nhiễm của thời đại thông tin', 'Nước', 'Điện'], a: 1, e: 'Cần quy định như bảo vệ môi trường.' }
  ],
  match: [
    ['Lambda', 'Stream xấp xỉ + batch chính xác'],
    ['Unbundling', 'Đồng bộ ghi giữa các hệ qua log'],
    ['Federated DB', 'Giao diện đọc hợp nhất'],
    ['End-to-end argument', 'Request ID xuyên suốt'],
    ['Timeliness', 'Thấy trạng thái mới nhất'],
    ['Integrity', 'Không mất, không sai dữ liệu'],
    ['Merkle tree', 'Cây hash để kiểm toán']
  ]
});
