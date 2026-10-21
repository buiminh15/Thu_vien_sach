// Designing Data-Intensive Applications – Chương 5: Nhân bản (Replication).
BOOK_DATA.ddia.chapters.push({
  n: 5,
  title: 'Nhân bản dữ liệu (Replication)',
  intro: 'Giữ bản sao cùng một dữ liệu trên nhiều máy để gần người dùng (độ trễ), chịu lỗi (sẵn sàng) và mở rộng đọc. Khó khăn nằm ở xử lý <b>thay đổi</b>. Ba thuật toán chính: <b>single-leader</b>, <b>multi-leader</b>, <b>leaderless</b> — cùng các hệ quả như replication lag, xung đột ghi và quorum.',
  sections: [
    { icon: '👑', title: 'Single-leader: leader và follower', blocks: [
      { t: 'steps', items: [
        'Một replica là <b>leader</b> (master/primary): mọi ghi của client đi qua leader, được ghi vào bộ nhớ cục bộ.',
        'Các replica còn lại là <b>follower</b> (read replica, secondary, hot standby): nhận <b>replication log / change stream</b> từ leader và áp dụng theo <b>cùng thứ tự</b>.',
        'Đọc có thể từ leader hoặc bất kỳ follower; ghi chỉ ở leader.'
      ] },
      { t: 'p', x: 'Dùng trong PostgreSQL (từ 9.0), MySQL, Oracle Data Guard, SQL Server AlwaysOn, MongoDB, RethinkDB, Espresso, và cả message broker (Kafka, RabbitMQ). Quyết định quan trọng: nhân bản <b>đồng bộ</b> hay <b>bất đồng bộ</b>.' },
      { t: 'table', head: ['', 'Đồng bộ', 'Bất đồng bộ'], rows: [
        ['Ưu', 'Follower chắc chắn có bản sao mới nhất; leader hỏng thì dữ liệu còn', 'Leader tiếp tục xử lý ghi dù mọi follower tụt hậu; hợp khi nhiều follower/địa lý xa'],
        ['Nhược', 'Follower không phản hồi ⇒ ghi bị chặn; không thực tế khi tất cả follower đồng bộ', 'Leader hỏng không phục hồi được ⇒ ghi chưa kịp nhân bản bị mất dù đã báo thành công (không bền)']
      ] },
      { t: 'tip', x: 'Thực tế thường dùng <b>semi-synchronous</b>: một follower đồng bộ, các follower còn lại bất đồng bộ; nếu follower đồng bộ chậm/hỏng thì một follower bất đồng bộ được nâng lên. Luôn có dữ liệu mới nhất ở ít nhất hai node. Chain replication là biến thể đồng bộ (Azure Storage).' },
      { t: 'list', items: [
        '<b>Thiết lập follower mới</b> không cần downtime: chụp snapshot nhất quán (không khoá toàn bộ), copy sang node mới, follower xin mọi thay đổi từ vị trí snapshot trong log (PostgreSQL: log sequence number; MySQL: binlog coordinates), xử lý xong thì “bắt kịp”.',
        '<b>Follower lỗi</b>: catch-up recovery — biết giao dịch cuối cùng từ log cục bộ, xin phần thay đổi bị lỡ.',
        '<b>Leader lỗi: failover</b> — (1) phát hiện leader hỏng (thường bằng timeout, ví dụ 30 giây); (2) chọn leader mới (bầu cử hoặc controller chỉ định; tốt nhất là replica có dữ liệu mới nhất — bài toán đồng thuận); (3) cấu hình lại hệ thống, leader cũ quay lại phải thành follower.'
      ] },
      { t: 'warn', x: 'Failover đầy rủi ro: ghi chưa nhân bản của leader cũ thường bị bỏ ⇒ vi phạm kỳ vọng bền; vụ GitHub: follower lỗi thời lên làm leader, bộ đếm tự tăng bị dùng lại khoá chính vốn đã gán, đồng thời Redis dùng cùng khoá ⇒ lộ dữ liệu riêng tư cho nhầm người; <b>split brain</b> (hai node cùng tin mình là leader) gây mất/hỏng dữ liệu, cơ chế <b>fencing/STONITH</b> thiết kế sai có thể tắt cả hai; timeout quá dài thì phục hồi chậm, quá ngắn thì failover không cần thiết lúc quá tải. Nhiều đội vận hành thích failover thủ công.' }
    ] },
    { icon: '📓', title: 'Cài đặt log nhân bản', blocks: [
      { t: 'table', head: ['Phương pháp', 'Cách làm', 'Vấn đề'], rows: [
        ['<b>Statement-based</b>', 'Gửi nguyên câu lệnh INSERT/UPDATE/DELETE', 'Hàm không xác định (NOW(), RAND()), thứ tự phụ thuộc (auto-increment, UPDATE…WHERE), tác dụng phụ (trigger, stored procedure). MySQL < 5.1; VoltDB (bắt buộc giao dịch xác định)'],
        ['<b>WAL shipping</b>', 'Gửi chính write-ahead log của storage engine (PostgreSQL, Oracle)', 'Mô tả ở mức byte/khối đĩa ⇒ gắn chặt với storage engine, thường không thể chạy phiên bản khác nhau trên leader và follower ⇒ nâng cấp cần downtime'],
        ['<b>Logical (row-based) log</b>', 'Bản ghi theo hàng: giá trị mới (insert), định danh hàng (delete), định danh + giá trị mới (update); kèm bản ghi commit (MySQL binlog)', 'Tách khỏi storage engine ⇒ dễ tương thích ngược; dễ cho hệ thống ngoài phân tích ⇒ <b>change data capture</b>'],
        ['<b>Trigger-based</b>', 'Trigger/stored procedure ghi thay đổi vào bảng riêng để tiến trình ngoài đọc (Databus, Bucardo; GoldenGate đọc log)', 'Overhead cao, dễ lỗi nhưng linh hoạt: nhân bản tập con, giữa các loại DB, logic xung đột']
      ] }
    ] },
    { icon: '⏳', title: 'Vấn đề của replication lag', blocks: [
      { t: 'p', x: 'Đọc từ follower bất đồng bộ có thể thấy dữ liệu cũ. Đây là <b>eventual consistency</b> (nhất quán sau cùng): ngừng ghi và chờ thì các follower sẽ bắt kịp. “Eventually” cố ý mơ hồ — không có giới hạn tụt hậu; lag thường dưới một giây nhưng có thể lên vài giây hay vài phút khi quá tải hay mạng lỗi. Ba anomaly và cách chặn:' },
      { t: 'table', head: ['Bảo đảm', 'Anomaly', 'Cách làm'], rows: [
        ['<b>Read-after-write</b> (read-your-writes)', 'Người dùng ghi rồi tải lại trang, đọc từ follower cũ ⇒ tưởng dữ liệu mất', 'Đọc từ leader dữ liệu mà người dùng có thể đã sửa (ví dụ hồ sơ của chính họ); sau lần ghi cuối 1 phút thì đọc từ leader; theo dõi lag; client nhớ timestamp ghi cuối (logical timestamp/log sequence number); phức tạp hơn khi nhiều thiết bị và nhiều datacenter (cross-device)'],
        ['<b>Monotonic reads</b>', 'Hai lần đọc từ hai replica khác nhau: thấy dữ liệu rồi lại mất ⇒ “thời gian đi lùi”', 'Mỗi người dùng luôn đọc từ cùng một replica (chọn theo hash user ID); nếu replica hỏng thì định tuyến lại'],
        ['<b>Consistent prefix reads</b>', 'Thấy câu trả lời trước câu hỏi (ví dụ Mrs. Cake trả lời Mr. Poons trước khi ông hỏi) — vi phạm nhân quả, đặc biệt khi các partition nhân bản với tốc độ khác nhau', 'Ghi các sự kiện có quan hệ nhân quả vào cùng partition; hoặc thuật toán theo dõi quan hệ nhân quả']
      ] },
      { t: 'key', x: 'Đừng giả vờ nhân bản là đồng bộ khi thực tế bất đồng bộ. Nếu lag tăng lên hàng phút/giờ mà trải nghiệm xấu thì phải thiết kế bảo đảm mạnh hơn. Xử lý ở code ứng dụng phức tạp và dễ sai — đó là lý do <b>giao dịch</b> tồn tại, dù nhiều hệ thống phân tán đã bỏ giao dịch với lý do “không scale” (quan điểm quá đơn giản sẽ được tinh chỉnh ở chương sau).' }
    ] },
    { icon: '🔀', title: 'Multi-leader replication', blocks: [
      { t: 'p', x: 'Cho phép <b>nhiều node nhận ghi</b> (master–master, active/active); mỗi leader đồng thời là follower của các leader còn lại. Hiếm khi đáng dùng trong một datacenter vì độ phức tạp. Use case:' },
      { t: 'list', items: [
        '<b>Nhiều datacenter</b>: leader ở mỗi DC ⇒ ghi xử lý cục bộ, độ trễ liên DC bị ẩn; mỗi DC hoạt động độc lập khi DC khác sập; chịu lỗi liên kết giữa DC tốt hơn. Nhược: cùng dữ liệu có thể bị sửa đồng thời ở hai DC ⇒ phải giải xung đột. Công cụ: Tungsten Replicator (MySQL), BDR (PostgreSQL), GoldenGate (Oracle). Thường bị coi là “vùng nguy hiểm” (auto-increment, trigger, ràng buộc toàn vẹn).',
        '<b>Client offline</b> (lịch trên điện thoại/laptop): mỗi thiết bị có DB cục bộ như một leader, đồng bộ bất đồng bộ — multi-leader cực đoan, lag có thể hàng giờ/ngày. CouchDB thiết kế cho kiểu này.',
        '<b>Soạn thảo cộng tác</b> (Etherpad, Google Docs): thay đổi áp dụng ngay vào bản cục bộ, nhân bản bất đồng bộ. Muốn không xung đột thì khoá tài liệu (≈ single-leader); muốn nhanh thì đơn vị thay đổi nhỏ (một phím) ⇒ cần giải xung đột.'
      ] },
      { t: 'p', x: '<b>Xung đột ghi</b>: người 1 đổi tiêu đề A→B, người 2 đổi A→C đồng thời; cả hai thành công cục bộ, xung đột chỉ được phát hiện bất đồng bộ sau đó (khi quá muộn để hỏi người dùng). Phát hiện đồng bộ làm mất lợi thế multi-leader.' },
      { t: 'steps', items: [
        '<b>Tránh xung đột</b>: mọi ghi của cùng một bản ghi đi qua cùng một leader (định tuyến người dùng về “nhà” DC của họ). Vỡ khi đổi leader chỉ định (DC sập, người dùng di chuyển).',
        '<b>Hội tụ về trạng thái nhất quán</b>: giữ giá trị có ID cao nhất (last write wins khi dùng timestamp — dễ mất dữ liệu); replica ID cao thắng (mất dữ liệu); <b>gộp</b> giá trị (ví dụ “B/C”); ghi xung đột vào cấu trúc tường minh để mã ứng dụng hoặc người dùng giải sau.',
        '<b>Logic tuỳ chỉnh</b>: chạy khi ghi (handler xung đột nền, ví dụ Bucardo/Perl) hoặc khi đọc (lưu mọi phiên bản; lần đọc sau trả cả nhiều phiên bản cho ứng dụng giải, ví dụ CouchDB). Áp dụng ở mức hàng/tài liệu, không phải cả giao dịch.',
        '<b>Tự động</b>: <b>CRDT</b> (conflict-free replicated datatype: set, map, list, counter, trong Riak 2.0), mergeable persistent data structures (3-way merge, như Git), <b>operational transformation</b> (Etherpad, Google Docs).'
      ] },
      { t: 'warn', x: 'Ví dụ cảnh báo: giỏ hàng Amazon từng giữ món được thêm nhưng không giữ món bị xoá ⇒ món đã xoá hiện lại. Xung đột tinh vi: đặt cùng một phòng họp ở hai leader (ràng buộc “không chồng lấn” khó kiểm tra).' },
      { t: 'table', head: ['Topology', 'Đặc điểm'], rows: [
        ['Vòng (circular)', 'Mỗi node nhận từ một node và chuyển tiếp (MySQL mặc định); một node hỏng làm gián đoạn dòng nhân bản'],
        ['Sao (star) / cây', 'Một node gốc chuyển tới tất cả; cũng có điểm lỗi đơn'],
        ['Tất cả–với–tất cả (all-to-all)', 'Chịu lỗi tốt hơn (nhiều đường) nhưng thông điệp có thể “vượt mặt” nhau: update đến trước insert tương ứng ⇒ vấn đề nhân quả; timestamp không đủ vì đồng hồ không tin cậy ⇒ cần <b>version vector</b>']
      ] },
      { t: 'tip', x: 'Để tránh vòng lặp vô hạn, mỗi node có ID và mỗi ghi được gắn ID của mọi node nó đã đi qua; node thấy ID của mình thì bỏ qua.' }
    ] },
    { icon: '🕸️', title: 'Leaderless (kiểu Dynamo) và quorum', blocks: [
      { t: 'p', x: 'Bỏ khái niệm leader: bất kỳ replica nào cũng nhận ghi trực tiếp từ client (hoặc qua coordinator không ép thứ tự). Phổ biến trở lại sau Dynamo của Amazon; Riak, Cassandra, Voldemort là “Dynamo-style” (DynamoDB hosted của AWS lại là single-leader!). Không có failover: client gửi ghi tới <b>cả n replica song song</b>; chỉ cần <b>w</b> nút xác nhận; đọc từ <b>r</b> nút; dùng số phiên bản để biết giá trị nào mới hơn.' },
      { t: 'key', x: '<b>Quorum</b>: n replica, ghi cần w xác nhận, đọc hỏi r nút. Nếu <b>w + r &gt; n</b> thì tập nút ghi và tập nút đọc giao nhau ⇒ kỳ vọng đọc được giá trị mới nhất. Thường n lẻ (3 hoặc 5), w = r = ⌈(n+1)/2⌉. n=3,w=2,r=2 chịu 1 nút hỏng; n=5,w=3,r=3 chịu 2. Nhiều đọc, ít ghi: w=n, r=1 (đọc nhanh nhưng một nút hỏng làm mọi ghi thất bại). w + r ≤ n ⇒ đọc có thể cũ nhưng độ trễ thấp hơn và sẵn sàng hơn.' },
      { t: 'widget', name: 'quorum-calc', title: 'Quorum: n, w, r có đảm bảo đọc được giá trị mới nhất?' },
      { t: 'list', items: [
        '<b>Read repair</b>: client đọc song song, thấy replica cũ (phiên bản 6 so với 7) thì ghi giá trị mới lại vào replica đó — tốt cho dữ liệu hay được đọc. <b>Anti-entropy</b>: tiến trình nền so sánh và chép dữ liệu thiếu giữa replica (không theo thứ tự). Không có anti-entropy thì giá trị ít được đọc có thể thiếu ở vài replica ⇒ giảm độ bền.',
        '<b>Hạn chế của quorum</b>: sloppy quorum làm tập nút ghi/đọc không còn giao nhau; ghi đồng thời không rõ thứ tự (LWW mất dữ liệu do lệch đồng hồ); ghi diễn ra đồng thời với đọc; ghi thành công ở vài replica nhưng thất bại tổng thể (< w) không bị rollback; nút mang giá trị mới hỏng rồi phục hồi từ replica cũ; trục trặc về thời điểm (xem linearizability ở chương 9). Đừng coi w, r là đảm bảo tuyệt đối; thường không có read-your-writes, monotonic reads hay consistent prefix.',
        '<b>Giám sát độ cũ</b>: leader-based dễ đo lag (hiệu hai vị trí log); leaderless khó hơn vì không có thứ tự cố định, và chỉ với read repair thì giá trị hiếm đọc có thể cổ lỗ.',
        '<b>Sloppy quorum &amp; hinted handoff</b>: khi mạng cắt khỏi các nút “nhà”, vẫn nhận ghi vào bất kỳ nút nào với đủ w xác nhận; khi mạng hồi phục, các nút tạm giữ chuyển lại cho nút nhà (như xin ngủ nhờ nhà hàng xóm khi mất chìa khoá). Tăng khả năng ghi nhưng không còn là quorum thật — chỉ đảm bảo bền. Riak mặc định bật; Cassandra và Voldemort mặc định tắt.',
        '<b>Nhiều datacenter</b>: Cassandra/Voldemort tính n gồm nút ở mọi DC, client chỉ chờ quorum trong DC cục bộ; Riak giữ giao tiếp client–DB cục bộ, nhân bản liên DC bất đồng bộ.'
      ] }
    ] },
    { icon: '⏱️', title: 'Phát hiện ghi đồng thời', blocks: [
      { t: 'p', x: '<b>Last write wins (LWW)</b>: gắn timestamp, giữ cái lớn nhất, bỏ phần còn lại. Hội tụ nhưng đánh đổi độ bền: nhiều ghi đồng thời cùng báo thành công mà chỉ một cái sống, thậm chí mất cả ghi không đồng thời. Chấp nhận được với cache; cách an toàn duy nhất là khoá chỉ ghi một lần (Cassandra khuyên dùng UUID làm khoá).' },
      { t: 'key', x: '<b>“Happens-before”</b>: thao tác A xảy ra trước B nếu B biết về A, phụ thuộc hoặc xây dựng lên A. Hai thao tác <b>đồng thời</b> nếu không cái nào xảy ra trước cái kia (không biết nhau) — không liên quan đến thời gian vật lý (liên hệ với thuyết tương đối: thông tin không đi nhanh hơn ánh sáng; trong hệ thống mạng chậm/đứt, hai thao tác cách xa nhau vẫn có thể đồng thời).' },
      { t: 'steps', items: [
        'Giả sử một replica, giỏ hàng: client 1 thêm sữa ⇒ phiên bản 1 [milk].',
        'Client 2 thêm trứng không biết sữa ⇒ phiên bản 2 [eggs]; server lưu cả hai (đồng thời) và trả cả hai.',
        'Client 1 thêm bột mì dựa trên phiên bản 1 ⇒ phiên bản 3 [milk, flour] ghi đè [milk] nhưng giữ [eggs].',
        'Client 2 gộp [milk] và [eggs], thêm giăm bông, gửi kèm phiên bản 2 ⇒ phiên bản 4.',
        'Client 1 gộp và thêm thịt xông khói… Không dữ liệu nào bị mất thầm lặng.'
      ] },
      { t: 'list', items: [
        'Thuật toán: server giữ số phiên bản mỗi khoá, tăng khi ghi; client đọc trước ghi, ghi kèm số phiên bản từ lần đọc và phải <b>gộp</b> mọi giá trị đã nhận; server ghi đè mọi giá trị có phiên bản ≤ phiên bản gửi lên, giữ các giá trị có phiên bản cao hơn (đồng thời). Ghi không kèm phiên bản là đồng thời với mọi ghi khác.',
        'Giá trị đồng thời gọi là <b>siblings</b> (Riak): cần gộp. Gộp bằng hợp (union) hợp với giỏ chỉ thêm; nếu có xoá, món bị xoá hiện lại ⇒ cần <b>tombstone</b> (dấu xoá có phiên bản). CRDT tự gộp, kể cả giữ xoá.',
        '<b>Version vector</b>: với nhiều replica cần số phiên bản <i>mỗi replica và mỗi khoá</i>; tập các số đó là version vector (dotted version vector trong Riak 2.0, mã hoá thành “causal context”). An toàn khi đọc từ một replica và ghi sang replica khác. Version vector khác vector clock tinh tế; khi so sánh trạng thái replica, dùng version vector.'
      ] }
    ] }
  ],
  summary: [
    'Nhân bản phục vụ sẵn sàng cao, hoạt động offline, độ trễ thấp và mở rộng đọc.',
    'Single-leader: đơn giản, không xung đột nhưng đọc từ follower có thể cũ; failover rủi ro (split brain, mất ghi).',
    'Multi-leader và leaderless: bền với lỗi nhưng có xung đột ghi — cần LWW (mất dữ liệu), gộp, CRDT hoặc version vector.',
    'Replication lag gây ba anomaly: đọc lại không thấy ghi của mình, thời gian đi lùi, vi phạm nhân quả ⇒ read-after-write, monotonic reads, consistent prefix.',
    'Quorum w + r > n là kỳ vọng, không phải đảm bảo tuyệt đối.'
  ],
  cards: [
    ['Ba lý do nhân bản?', 'Gần người dùng (độ trễ), chịu lỗi (sẵn sàng), mở rộng đọc.'],
    ['Leader-based replication?', 'Một leader nhận ghi, follower áp dụng log theo cùng thứ tự.'],
    ['Đồng bộ vs bất đồng bộ?', 'Đồng bộ: follower chắc chắn có bản mới nhưng ghi bị chặn nếu follower lỗi; bất đồng bộ: nhanh nhưng có thể mất ghi khi leader hỏng.'],
    ['Semi-synchronous?', 'Một follower đồng bộ, còn lại bất đồng bộ.'],
    ['Failover gồm bước nào?', 'Phát hiện leader hỏng, chọn leader mới, cấu hình lại hệ thống.'],
    ['Split brain?', 'Hai node cùng tin mình là leader.'],
    ['Vì sao khó chọn timeout failover?', 'Dài thì phục hồi chậm; ngắn thì failover không cần thiết lúc quá tải.'],
    ['Statement-based vs logical log?', 'Gửi câu lệnh vs gửi thay đổi theo hàng, tách khỏi storage engine.'],
    ['Nhược điểm WAL shipping?', 'Gắn chặt storage engine; khó nâng cấp không downtime.'],
    ['Change data capture?', 'Trích thay đổi từ log logic để đẩy sang hệ thống khác.'],
    ['Eventual consistency?', 'Ngừng ghi và chờ thì các replica sẽ hội tụ — không có giới hạn thời gian.'],
    ['Read-after-write?', 'Người dùng luôn thấy dữ liệu chính họ đã gửi.'],
    ['Monotonic reads?', 'Không thấy dữ liệu cũ hơn sau khi đã thấy dữ liệu mới hơn.'],
    ['Consistent prefix reads?', 'Thấy các ghi theo thứ tự có ý nghĩa nhân quả.'],
    ['Khi nào dùng multi-leader?', 'Nhiều datacenter, ứng dụng offline, soạn thảo cộng tác.'],
    ['Last write wins?', 'Giữ ghi có timestamp lớn nhất; hội tụ nhưng mất dữ liệu.'],
    ['CRDT?', 'Cấu trúc dữ liệu tự gộp các thay đổi đồng thời.'],
    ['Quorum condition?', 'w + r > n.'],
    ['Read repair vs anti-entropy?', 'Read repair: sửa khi đọc; anti-entropy: tiến trình nền so sánh và chép.'],
    ['Sloppy quorum và hinted handoff?', 'Nhận ghi ở nút khác khi mạng cắt, trả lại nút nhà khi hồi phục.'],
    ['Hai thao tác đồng thời nghĩa là gì?', 'Không cái nào biết về cái kia (không phải trùng thời gian vật lý).'],
    ['Version vector?', 'Tập số phiên bản của từng replica để phân biệt ghi đè và ghi đồng thời.']
  ],
  quiz: [
    { q: 'Nhân bản đồng bộ hoàn toàn mọi follower là:', o: ['Thực tế và phổ biến', 'Không thực tế — một node lỗi chặn mọi ghi', 'Luôn nhanh nhất', 'Bắt buộc'], a: 1, e: 'Thường dùng semi-synchronous.' },
    { q: 'Failover trong replication nghĩa là:', o: ['Sao lưu', 'Nâng một follower lên làm leader mới', 'Xoá node', 'Chia partition'], a: 1, e: 'Kèm cấu hình lại client và follower.' },
    { q: 'Rủi ro nào của failover bất đồng bộ?', o: ['Dữ liệu thừa', 'Ghi chưa nhân bản có thể bị mất', 'Quá nhiều node', 'Lỗi cú pháp'], a: 1, e: 'Vi phạm kỳ vọng bền.' },
    { q: 'Vụ GitHub trong sách do:', o: ['Split brain', 'Follower cũ lên leader, tái dùng khoá chính, không khớp với Redis', 'Mất mạng', 'Hết đĩa'], a: 1, e: 'Dữ liệu riêng tư lộ cho nhầm người.' },
    { q: 'Cách nhân bản tách khỏi storage engine:', o: ['WAL shipping', 'Logical (row-based) log', 'Statement-based', 'Chép file'], a: 1, e: 'Dễ tương thích phiên bản.' },
    { q: 'Anomaly “thời gian đi lùi” được chặn bởi:', o: ['Read-after-write', 'Monotonic reads', 'Consistent prefix', 'Quorum'], a: 1, e: 'Mỗi user đọc từ cùng một replica.' },
    { q: 'Câu trả lời xuất hiện trước câu hỏi là vi phạm:', o: ['Monotonic reads', 'Consistent prefix reads', 'Read-after-write', 'Durability'], a: 1, e: 'Quan hệ nhân quả.' },
    { q: 'Multi-leader hợp lý nhất trong trường hợp:', o: ['Một datacenter', 'Nhiều datacenter / ứng dụng offline / soạn thảo cộng tác', 'Giao dịch ngân hàng', 'Cache'], a: 1, e: 'Nhưng phải giải xung đột.' },
    { q: 'Xung đột multi-leader được phát hiện:', o: ['Lúc ghi (đồng bộ)', 'Bất đồng bộ về sau', 'Không bao giờ', 'Chỉ khi đọc'], a: 1, e: 'Có thể quá muộn để hỏi người dùng.' },
    { q: 'Vấn đề của LWW:', o: ['Không hội tụ', 'Thầm lặng bỏ ghi đồng thời, mất dữ liệu', 'Quá chậm', 'Cần leader'], a: 1, e: 'Chấp nhận được với cache.' },
    { q: 'Điều kiện quorum:', o: ['w + r < n', 'w + r > n', 'w = 1', 'r = 0'], a: 1, e: 'Tập đọc và ghi giao nhau.' },
    { q: 'n=5, w=3, r=3 chịu được bao nhiêu nút hỏng?', o: ['0', '1', '2', '5'], a: 2, e: 'Vẫn đủ 3 nút.' },
    { q: 'Hinted handoff là:', o: ['Gửi lại nút nhà các ghi tạm giữ hộ', 'Xoá dữ liệu', 'Sao lưu', 'Bầu leader'], a: 0, e: 'Sau khi mạng hồi phục.' },
    { q: 'Hai thao tác “đồng thời” khi:', o: ['Cùng timestamp', 'Không thao tác nào biết về cái kia', 'Cùng client', 'Cùng node'], a: 1, e: 'Không phải về thời gian vật lý.' },
    { q: 'Giỏ hàng gộp bằng union gặp vấn đề gì khi có xoá?', o: ['Quá chậm', 'Món đã xoá hiện lại — cần tombstone', 'Không gộp được', 'Mất tất cả'], a: 1, e: 'Hoặc dùng CRDT.' }
  ],
  match: [
    ['Failover', 'Nâng follower lên leader'],
    ['Eventual consistency', 'Hội tụ khi ngừng ghi'],
    ['Quorum', 'w + r > n'],
    ['CRDT', 'Tự gộp thay đổi đồng thời'],
    ['Read repair', 'Sửa replica cũ khi đọc'],
    ['Tombstone', 'Dấu xoá có phiên bản'],
    ['Version vector', 'Phiên bản theo replica']
  ]
});
