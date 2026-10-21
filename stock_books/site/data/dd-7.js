// Designing Data-Intensive Applications – Chương 7: Giao dịch (Transactions).
BOOK_DATA.ddia.chapters.push({
  n: 7,
  title: 'Giao dịch (Transactions) và mức cô lập',
  intro: 'Giao dịch gom nhiều đọc/ghi thành một đơn vị logic: hoặc commit toàn bộ, hoặc abort/rollback để retry an toàn. Chương này mổ xẻ ACID, các mức cô lập yếu (read committed, snapshot isolation), các race condition (dirty write, lost update, write skew, phantom) và ba cách đạt <b>serializability</b>: thực thi tuần tự, <b>2PL</b>, <b>SSI</b>.',
  sections: [
    { icon: '🧾', title: 'Giao dịch và ACID', blocks: [
      { t: 'p', x: 'Những thứ có thể sai: DB hay phần cứng lỗi giữa chừng khi ghi; ứng dụng crash giữa một chuỗi thao tác; mạng đứt; nhiều client ghi đè nhau; đọc dữ liệu cập nhật dở; race condition. Giao dịch (style System R, 1975) cho ứng dụng “giả vờ” một số lỗi và vấn đề đồng thời không tồn tại — <i>safety guarantees</i>. Phong trào NoSQL cuối thập niên 2000 bỏ giao dịch hoặc định nghĩa lại yếu hơn, với niềm tin rằng giao dịch đối nghịch scalability — cả quan điểm đó lẫn quan điểm “ứng dụng nghiêm túc cần giao dịch” đều là cường điệu.' },
      { t: 'table', head: ['Chữ cái', 'Nghĩa trong ACID', 'Lưu ý'], rows: [
        ['<b>A – Atomicity</b>', 'Nếu lỗi giữa chừng khi nhiều ghi thì abort và huỷ mọi ghi đã làm: <b>all-or-nothing</b>, an toàn để retry', 'Khác “atomic” trong lập trình đa luồng; “abortability” có lẽ là tên tốt hơn'],
        ['<b>C – Consistency</b>', 'Bất biến (invariant) của ứng dụng luôn đúng (ví dụ ghi nợ/ghi có cân bằng)', 'Là tính chất của <b>ứng dụng</b> chứ không phải DB; chữ C “bị nhét vào cho vừa tên ACID”. Còn ít nhất 4 nghĩa: nhất quán bản sao, consistent hashing, CAP (linearizability), ACID'],
        ['<b>I – Isolation</b>', 'Các giao dịch đồng thời không ảnh hưởng nhau; chuẩn lý thuyết là <b>serializability</b> — như thể chạy tuần tự', 'Thực tế ít dùng vì tốn hiệu năng; Oracle “serializable” thực ra là snapshot isolation'],
        ['<b>D – Durability</b>', 'Đã commit thì không bị quên kể cả khi phần cứng hỏng / DB crash', 'Đơn nút: ghi ra đĩa + WAL; có nhân bản: đã sao tới một số node. Không có độ bền tuyệt đối — dùng ghi đĩa, nhân bản, sao lưu cùng nhau']
      ] },
      { t: 'tip', x: '“ACID compliant” gần như là thuật ngữ marketing. BASE (Basically Available, Soft state, Eventual consistency) còn mơ hồ hơn: chỉ có nghĩa “không ACID”.' },
      { t: 'list', items: [
        '<b>Đơn đối tượng vs đa đối tượng</b>: nhiều thao tác cần giữ đồng bộ nhiều dữ liệu (ví dụ email: chèn thư + tăng bộ đếm chưa đọc; khoá ngoại; chỉ mục thứ cấp; tài liệu phi chuẩn hoá). Không có giao dịch, người dùng 2 có thể thấy thư mới nhưng bộ đếm bằng 0 (<b>dirty read</b>), và lỗi giữa chừng làm mất đồng bộ.',
        'Hầu hết storage engine bảo đảm atomicity và isolation ở mức <b>một đối tượng</b> (log để phục hồi; khoá mỗi đối tượng); thêm <b>atomic increment</b> và <b>compare-and-set</b> — không phải giao dịch đúng nghĩa dù đôi khi được gọi “lightweight transactions”.',
        '<b>Xử lý lỗi và abort</b>: abort rồi retry là cơ chế đơn giản và hiệu quả nhưng ORM (Rails ActiveRecord, Django) thường không retry. Retry có nhược điểm: giao dịch thật ra đã thành công nhưng ack bị mất ⇒ thực hiện hai lần (cần khử trùng lặp); lỗi do quá tải thì retry làm tệ hơn (giới hạn số lần, exponential backoff); chỉ retry lỗi tạm thời (deadlock, vi phạm cô lập, đứt mạng, failover), không retry lỗi vĩnh viễn (vi phạm ràng buộc); tác dụng phụ bên ngoài DB (gửi email) vẫn xảy ra — cần two-phase commit; client chết trong lúc retry thì mất dữ liệu.'
      ] }
    ] },
    { icon: '🧱', title: 'Mức cô lập yếu: Read Committed', blocks: [
      { t: 'p', x: 'Hai bảo đảm: (1) chỉ đọc dữ liệu đã commit — <b>không dirty read</b>; (2) chỉ ghi đè dữ liệu đã commit — <b>không dirty write</b>. Là mặc định của Oracle 11g, PostgreSQL, SQL Server 2012, MemSQL.' },
      { t: 'list', items: [
        '<b>Dirty read</b>: thấy ghi chưa commit của giao dịch khác — gây thấy trạng thái cập nhật dở, hoặc thấy dữ liệu về sau bị rollback.',
        '<b>Dirty write</b>: ghi đè giá trị chưa commit. Ví dụ mua xe: Alice và Bob cùng mua; danh sách xe ghi tên Bob nhưng hoá đơn gửi Alice.',
        '<b>Cài đặt</b>: chặn dirty write bằng <b>khoá cấp hàng</b> giữ đến hết giao dịch. Chặn dirty read bằng cách giữ giá trị cũ đã commit và giá trị mới của giao dịch đang giữ khoá; người khác đọc giá trị cũ cho đến khi commit (không dùng khoá đọc vì giao dịch ghi dài sẽ chặn nhiều giao dịch đọc).',
        '<b>Không</b> ngăn lost update của hai lần tăng bộ đếm (lần ghi thứ hai xảy ra sau khi giao dịch đầu đã commit).'
      ] }
    ] },
    { icon: '📸', title: 'Snapshot isolation và repeatable read', blocks: [
      { t: 'p', x: '<b>Read skew / nonrepeatable read</b>: Alice có hai tài khoản $500 mỗi cái; đang chuyển $100 giữa hai tài khoản thì cô đọc: một số dư trước khi nhận, một sau khi trừ ⇒ tổng $900. Chấp nhận được ở read committed nhưng không chấp nhận với: <b>sao lưu</b> (phần cũ/phần mới lẫn lộn — sai lệch trở thành vĩnh viễn khi khôi phục), <b>truy vấn phân tích / kiểm tra toàn vẹn</b>.' },
      { t: 'key', x: '<b>Snapshot isolation</b>: mỗi giao dịch đọc từ một <b>snapshot nhất quán</b> — thấy mọi dữ liệu đã commit tại thời điểm bắt đầu, dù sau đó bị đổi. Nguyên lý: <b>readers never block writers, writers never block readers</b> (ghi vẫn dùng khoá để chặn dirty write, đọc không cần khoá). Cài bằng <b>MVCC</b> (multi-version concurrency control): giữ nhiều phiên bản của đối tượng.' },
      { t: 'steps', items: [
        'Mỗi giao dịch có <b>txid</b> luôn tăng; dữ liệu ghi gắn txid của người ghi.',
        'Mỗi hàng có <code>created_by</code> và <code>deleted_by</code> (ban đầu rỗng); xoá chỉ đánh dấu; cập nhật = xoá + tạo; thu gom rác sau cùng.',
        '<b>Quy tắc hiển thị</b>: bỏ qua ghi của giao dịch đang chạy tại lúc bắt đầu; bỏ qua ghi của giao dịch bị abort; bỏ qua ghi của giao dịch có txid lớn hơn (bắt đầu sau); còn lại thấy được. Tức đối tượng thấy được nếu người tạo đã commit trước khi snapshot, và chưa bị đánh dấu xoá (hoặc người xoá chưa commit).',
        'Chỉ mục trong MVCC: trỏ tới mọi phiên bản rồi lọc; hoặc B-tree <b>append-only / copy-on-write</b> (CouchDB, Datomic, LMDB): mỗi giao dịch tạo gốc cây mới = một snapshot nhất quán, cần nền để nén và thu gom rác.'
      ] },
      { t: 'warn', x: 'Đặt tên rối: Oracle gọi snapshot isolation là “serializable”; PostgreSQL, MySQL gọi là “repeatable read” (chuẩn SQL không có khái niệm snapshot isolation vì dựa vào định nghĩa System R 1975); IBM DB2 dùng “repeatable read” cho serializability. “Không ai thật sự biết repeatable read nghĩa là gì.”' }
    ] },
    { icon: '💥', title: 'Lost update, write skew và phantom', blocks: [
      { t: 'p', x: '<b>Lost update</b>: chu trình read-modify-write bị hai giao dịch đồng thời, ghi sau đè ghi trước (tăng bộ đếm, sửa JSON, hai người sửa wiki). Giải pháp:' },
      { t: 'table', head: ['Kỹ thuật', 'Mô tả'], rows: [
        ['<b>Thao tác ghi nguyên tử</b>', '<code>UPDATE counters SET value = value + 1</code>; MongoDB/Redis có thao tác nguyên tử; thường cài bằng khoá độc quyền (cursor stability) hoặc đơn luồng. Cẩn thận ORM tạo chu trình read-modify-write không an toàn'],
        ['<b>Khoá tường minh</b>', '<code>SELECT … FOR UPDATE</code> (ví dụ di chuyển quân cờ trong game); dễ quên khoá ở đâu đó'],
        ['<b>Phát hiện tự động</b>', 'Kiểm tra song song với snapshot isolation, abort giao dịch vi phạm: PostgreSQL repeatable read, Oracle serializable, SQL Server snapshot — nhưng MySQL/InnoDB repeatable read <b>không</b> phát hiện'],
        ['<b>Compare-and-set</b>', '<code>UPDATE … WHERE id=1234 AND content=\'old\'</code>; không an toàn nếu WHERE đọc từ snapshot cũ'],
        ['<b>Trong nhân bản</b>', 'Khoá và CAS giả định một bản duy nhất — không áp dụng cho multi-leader/leaderless; dùng siblings + merge, hoặc thao tác giao hoán (CRDT, counter/set của Riak 2.0). LWW dễ mất cập nhật và là mặc định của nhiều DB nhân bản']
      ] },
      { t: 'key', x: '<b>Write skew</b>: hai giao dịch đọc cùng dữ liệu rồi ghi vào các đối tượng <i>khác nhau</i>; mỗi kiểm tra xong tưởng an toàn. Ví dụ bác sĩ trực: ít nhất một bác sĩ phải trực; Alice và Bob cùng xin nghỉ, cả hai thấy “2 người” ⇒ cả hai cập nhật ⇒ không ai trực. Không phải dirty write cũng không phải lost update; là tổng quát hoá của lost update.' },
      { t: 'list', items: [
        'Ví dụ khác: đặt phòng họp trùng giờ; hai người chơi di chuyển hai quân đến cùng ô; chiếm tên người dùng (dùng ràng buộc unique); tiêu điểm hai lần (double-spending).',
        'Khoá nguyên tử một đối tượng không đủ; phát hiện lost update tự động không cứu (PostgreSQL/InnoDB RR, Oracle serializable, SQL Server snapshot không phát hiện write skew); ràng buộc đa đối tượng ít được DB hỗ trợ (có thể dùng trigger/materialized view). Cách tốt nhất: <b>serializable isolation</b>; nếu không thì <code>SELECT … FOR UPDATE</code> trên các hàng giao dịch phụ thuộc.',
        '<b>Phantom</b>: một ghi đổi kết quả truy vấn tìm kiếm của giao dịch khác (kiểm tra <i>sự vắng mặt</i> của hàng khớp điều kiện rồi chèn hàng khớp điều kiện đó). <code>FOR UPDATE</code> không khoá được vì không có hàng nào. Snapshot isolation tránh phantom với truy vấn chỉ-đọc nhưng không với giao dịch đọc–ghi.',
        '<b>Materializing conflicts</b>: tạo trước bảng ô thời gian–phòng chỉ để làm đối tượng khoá — xấu, dễ sai, rò rỉ cơ chế đồng thời vào mô hình dữ liệu; phương án cuối cùng.'
      ] },
      { t: 'widget', name: 'write-skew-sim', title: 'Mô phỏng write skew: bác sĩ trực — snapshot isolation vs serializable' }
    ] },
    { icon: '🔒', title: 'Serializability: ba cách', blocks: [
      { t: 'p', x: 'Mức cô lập khó hiểu, cài đặt không nhất quán, khó biết code có an toàn ở mức nào, và hầu như không có công cụ phát hiện race condition (kiểm thử khó vì phụ thuộc thời điểm). Câu trả lời của giới nghiên cứu từ thập niên 1970: dùng serializable. Ba kỹ thuật:' },
      { t: 'table', head: ['', 'Thực thi tuần tự', 'Two-phase locking (2PL)', 'Serializable Snapshot Isolation (SSI)'], rows: [
        ['Ý tưởng', 'Bỏ đồng thời: một luồng, từng giao dịch một. Khả thi từ ~2007: RAM đủ rẻ để giữ dữ liệu nóng trong bộ nhớ; giao dịch OLTP ngắn; truy vấn dài chỉ đọc chạy trên snapshot. VoltDB/H-Store, Redis, Datomic', 'Nhiều giao dịch có thể cùng đọc một đối tượng, nhưng ghi cần độc quyền; <b>ghi chặn đọc và đọc chặn ghi</b>. Khoá shared / exclusive giữ đến cuối giao dịch (pha 1 lấy khoá, pha 2 nhả). MySQL InnoDB / SQL Server serializable, DB2 repeatable read', 'Lạc quan: cứ chạy trên snapshot, kiểm tra lúc commit rồi abort nếu vi phạm. PostgreSQL serializable (từ 9.1), FoundationDB'],
        ['Yêu cầu / chi phí', 'Giao dịch ngắn, <b>stored procedure</b> (không tương tác nhiều bước vì chờ mạng làm throughput thảm hại); dữ liệu vừa RAM; throughput ghi ≤ 1 lõi CPU hoặc phân vùng (giao dịch nhiều partition rất chậm, VoltDB ~1.000 ghi liên partition/giây)', 'Hiệu năng kém, độ trễ không ổn định (chỉ một giao dịch chậm kéo tụt cả hệ thống); deadlock thường xuyên (DB tự phát hiện và abort một cái)', 'Tỷ lệ abort ảnh hưởng hiệu năng; giao dịch đọc–ghi nên ngắn; kém khi tranh chấp cao; theo dõi đọc/ghi gây overhead'],
        ['Ưu', 'Đơn giản nhất, tránh overhead khoá', 'Bảo vệ khỏi mọi race condition', 'Writers không chặn readers; độ trễ dễ dự đoán; đọc không cần khoá; không giới hạn một CPU (FoundationDB phân tán phát hiện xung đột)']
      ] },
      { t: 'list', items: [
        '<b>Stored procedure</b>: bị tiếng xấu (ngôn ngữ riêng PL/SQL, T-SQL; khó debug, version control, test, giám sát; DB nhạy cảm hơn app server) nhưng bản hiện đại dùng ngôn ngữ phổ thông: VoltDB (Java, Groovy), Datomic (Java, Clojure), Redis (Lua). VoltDB nhân bản bằng cách chạy lại cùng thủ tục trên mỗi replica ⇒ thủ tục phải <b>xác định</b>.',
        '<b>2PL — predicate lock</b>: khoá thuộc về mọi đối tượng thoả điều kiện tìm kiếm, kể cả chưa tồn tại (phantom). Nhưng kiểm tra rất tốn ⇒ thực tế dùng <b>index-range lock / next-key lock</b>: xấp xỉ rộng hơn (khoá mọi booking của phòng 123, hoặc mọi phòng trong khoảng giờ); nếu không có chỉ mục thì quay về khoá cả bảng. Không chính xác bằng nhưng ít overhead.',
        '<b>SSI — quyết định dựa trên tiền đề cũ</b>: giao dịch đọc, quyết định, rồi ghi; nhưng tiền đề (“có 2 bác sĩ trực”) có thể đã đổi trước khi commit. Phát hiện hai trường hợp: (1) <b>đọc phiên bản MVCC cũ</b> — theo dõi ghi bị bỏ qua do quy tắc hiển thị, kiểm tra khi commit xem chúng đã commit chưa; (2) <b>ghi ảnh hưởng đến dữ liệu vừa bị đọc</b> — dùng chỉ mục ghi nhận ai đã đọc; khi ghi thì “tripwire” thông báo giao dịch đọc rằng dữ liệu của họ có thể lỗi thời (không chặn). Giao dịch đầu commit thành công, giao dịch sau thấy xung đột đã commit nên phải abort. Chờ đến commit để không abort oan giao dịch chỉ-đọc.',
        '<b>Bi quan vs lạc quan</b>: 2PL bi quan (chờ khi có thể nguy hiểm); thực thi tuần tự là bi quan cực đoan (khoá cả DB, bù bằng giao dịch rất nhanh); SSI lạc quan (tiếp tục, kiểm tra sau). Lạc quan kém khi tranh chấp cao (nhiều abort); giảm tranh chấp bằng thao tác giao hoán.'
      ] }
    ] }
  ],
  summary: [
    'ACID: A = abortability (all-or-nothing), C là tính chất của ứng dụng, I = cô lập, D = bền (không tuyệt đối).',
    'Read committed chặn dirty read/write; snapshot isolation (MVCC) chặn read skew; vẫn còn lost update, write skew, phantom.',
    'Lost update: atomic op, FOR UPDATE, phát hiện tự động, compare-and-set; write skew/phantom cần serializable hoặc khoá hàng phụ thuộc.',
    'Serializable bằng: thực thi tuần tự (stored procedure + RAM), 2PL (index-range lock), SSI (lạc quan, phát hiện tiền đề cũ).',
    'Retry giao dịch bị abort chỉ với lỗi tạm thời; cần idempotence/khử trùng lặp.'
  ],
  cards: [
    ['Giao dịch là gì?', 'Nhóm nhiều đọc/ghi thành một đơn vị: commit hết hoặc abort hết.'],
    ['Atomicity trong ACID?', 'All-or-nothing: lỗi giữa chừng thì huỷ mọi ghi, retry an toàn.'],
    ['Consistency trong ACID?', 'Bất biến ứng dụng; trách nhiệm của ứng dụng, không phải DB.'],
    ['Isolation lý tưởng?', 'Serializability — như chạy tuần tự.'],
    ['Durability thực tế?', 'Kết hợp ghi đĩa, nhân bản, sao lưu — không có độ bền tuyệt đối.'],
    ['BASE?', 'Basically Available, Soft state, Eventual consistency — chủ yếu nghĩa “không ACID”.'],
    ['Dirty read?', 'Đọc dữ liệu chưa commit của giao dịch khác.'],
    ['Dirty write?', 'Ghi đè dữ liệu chưa commit.'],
    ['Read skew?', 'Thấy trạng thái không nhất quán vì đọc ở các thời điểm khác nhau (tổng $900).'],
    ['Snapshot isolation?', 'Mỗi giao dịch đọc snapshot nhất quán tại thời điểm bắt đầu.'],
    ['MVCC?', 'Giữ nhiều phiên bản đối tượng để người đọc không chặn người ghi.'],
    ['Quy tắc hiển thị MVCC?', 'Bỏ ghi của giao dịch đang chạy lúc bắt đầu, bị abort, hoặc txid lớn hơn.'],
    ['Lost update?', 'Hai read-modify-write đồng thời, ghi sau đè ghi trước.'],
    ['Cách phòng lost update?', 'Atomic op, FOR UPDATE, phát hiện tự động, compare-and-set.'],
    ['Write skew?', 'Hai giao dịch đọc cùng dữ liệu, ghi vào đối tượng khác nhau, vi phạm bất biến.'],
    ['Phantom?', 'Ghi làm thay đổi kết quả tìm kiếm của giao dịch khác (thường kiểm tra sự vắng mặt).'],
    ['Materializing conflicts?', 'Tạo hàng khoá nhân tạo cho phantom — phương án cuối cùng.'],
    ['Thực thi tuần tự cần gì?', 'Giao dịch ngắn dưới dạng stored procedure, dữ liệu vừa RAM, ghi ≤ 1 lõi.'],
    ['2PL?', 'Khoá shared/exclusive giữ đến hết giao dịch; ghi chặn đọc và ngược lại.'],
    ['2PL khác 2PC?', 'Hoàn toàn khác — 2PL là cô lập; 2PC là commit nguyên tử phân tán.'],
    ['Index-range lock?', 'Xấp xỉ predicate lock bằng khoá trên khoảng chỉ mục.'],
    ['SSI?', 'Snapshot isolation + phát hiện xung đột tuần tự khi commit; lạc quan.']
  ],
  quiz: [
    { q: 'Atomicity trong ACID nghĩa là:', o: ['Không bị đọc dở bởi luồng khác', 'Abort thì huỷ hết ghi, all-or-nothing', 'Ghi vào đĩa', 'Khoá bảng'], a: 1, e: 'Khác atomic trong đa luồng.' },
    { q: 'Chữ C trong ACID thực chất là tính chất của:', o: ['Database', 'Ứng dụng', 'Mạng', 'Đĩa'], a: 1, e: 'DB không biết bất biến của bạn.' },
    { q: 'Dirty write xảy ra khi:', o: ['Đọc dữ liệu cũ', 'Ghi đè giá trị chưa commit', 'Mất điện', 'Hai lần đọc khác nhau'], a: 1, e: 'Ví dụ: tên người mua và hoá đơn không khớp.' },
    { q: 'Read committed cài đặt chặn dirty read bằng:', o: ['Khoá đọc', 'Trả giá trị cũ đã commit cho đến khi giao dịch ghi commit', 'Chờ đồng hồ', 'Sao lưu'], a: 1, e: 'Khoá đọc làm giao dịch đọc chờ giao dịch ghi dài.' },
    { q: 'Snapshot isolation có nguyên tắc:', o: ['Readers block writers', 'Readers never block writers, writers never block readers', 'Chỉ một người dùng', 'Khoá bảng'], a: 1, e: 'Nhờ MVCC.' },
    { q: 'Oracle “serializable” thực ra là:', o: ['Serializable thật', 'Snapshot isolation', 'Read uncommitted', '2PL'], a: 1, e: 'Mức yếu hơn serializability.' },
    { q: 'Tăng bộ đếm an toàn nhất:', o: ['SELECT rồi UPDATE', 'UPDATE counters SET value = value + 1', 'Hai lần đọc', 'Ghi file'], a: 1, e: 'Thao tác ghi nguyên tử.' },
    { q: 'MySQL InnoDB repeatable read:', o: ['Phát hiện lost update', 'Không tự phát hiện lost update', 'Là serializable', 'Không có snapshot'], a: 1, e: 'Khác PostgreSQL.' },
    { q: 'Write skew ví dụ điển hình:', o: ['Đếm sai', 'Hai bác sĩ cùng xin nghỉ, không còn ai trực', 'Mất kết nối', 'Đĩa đầy'], a: 1, e: 'Mỗi người sửa bản ghi của mình.' },
    { q: 'Phantom là:', o: ['Ghi mồ côi', 'Ghi đổi kết quả truy vấn của giao dịch khác (kiểm tra vắng mặt)', 'Lỗi mạng', 'Hàng bị xoá'], a: 1, e: 'FOR UPDATE không có hàng để khoá.' },
    { q: 'Vì sao thực thi tuần tự cần stored procedure?', o: ['Để chạy nhanh hơn trên GPU', 'Tránh chờ mạng giữa các câu lệnh trong giao dịch tương tác', 'Để nhân bản', 'Để dùng SQL'], a: 1, e: 'Throughput sẽ thảm hại nếu chờ.' },
    { q: 'Hai pha của 2PL là:', o: ['Prepare và commit', 'Lấy khoá khi chạy, nhả hết khi kết thúc', 'Đọc rồi ghi', 'Snapshot và merge'], a: 1, e: 'Không nhầm với 2PC.' },
    { q: 'Index-range lock:', o: ['Chính xác hơn predicate lock', 'Xấp xỉ rộng hơn predicate lock nhưng rẻ', 'Không dùng được', 'Chỉ cho đọc'], a: 1, e: 'Khoá cả bảng nếu không có chỉ mục.' },
    { q: 'SSI là:', o: ['Bi quan', 'Lạc quan: chạy rồi kiểm tra khi commit', 'Chỉ đơn luồng', 'Không dùng snapshot'], a: 1, e: 'PostgreSQL 9.1+ và FoundationDB.' },
    { q: 'Nên retry giao dịch bị abort khi:', o: ['Vi phạm ràng buộc', 'Lỗi tạm thời như deadlock', 'Mọi lỗi', 'Không bao giờ'], a: 1, e: 'Lỗi vĩnh viễn thì retry vô nghĩa.' }
  ],
  match: [
    ['MVCC', 'Nhiều phiên bản để đọc không chặn ghi'],
    ['Dirty read', 'Đọc dữ liệu chưa commit'],
    ['Write skew', 'Ghi khác đối tượng, cùng tiền đề cũ'],
    ['Phantom', 'Ghi đổi kết quả tìm kiếm'],
    ['2PL', 'Khoá shared/exclusive đến cuối giao dịch'],
    ['SSI', 'Serializable lạc quan trên snapshot'],
    ['Compare-and-set', 'Ghi chỉ khi giá trị chưa đổi']
  ]
});
