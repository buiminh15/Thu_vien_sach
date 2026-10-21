// Designing Data-Intensive Applications – Chương 9: Nhất quán và đồng thuận.
BOOK_DATA.ddia.chapters.push({
  n: 9,
  title: 'Nhất quán (Consistency) và đồng thuận (Consensus)',
  intro: 'Cách xây hệ thống chịu lỗi từ các trừu tượng hữu ích. Chương này bàn <b>linearizability</b> (ảo giác một bản sao), <b>CAP</b>, thứ tự và nhân quả (Lamport timestamp), <b>total order broadcast</b>, rồi giao dịch phân tán (<b>2PC</b>, XA) và <b>đồng thuận chịu lỗi</b> (Paxos, Raft, Zab; ZooKeeper/etcd).',
  sections: [
    { icon: '🎯', title: 'Linearizability', blocks: [
      { t: 'p', x: 'Eventual consistency là bảo đảm rất yếu (“hội tụ” nhưng không nói bao giờ; đọc có thể trả về bất cứ thứ gì). <b>Linearizability</b> (atomic consistency, strong/immediate/external consistency): hệ thống ra vẻ chỉ có <b>một bản sao dữ liệu</b> và mọi thao tác trên đó là nguyên tử. Ngay khi một client ghi xong, mọi client đọc phải thấy giá trị đó — đây là bảo đảm về <b>tính mới (recency)</b>.' },
      { t: 'list', items: [
        'Ví dụ không linearizable: Alice thấy tỷ số chung kết World Cup 2014 và nói cho Bob; Bob tải lại nhưng request đến replica chậm nên vẫn thấy “đang đá”. Bob bắt đầu truy vấn sau Alice nên phải thấy kết quả ít nhất cũng mới như Alice.',
        'Với một thanh ghi x: đọc hoàn tất trước khi ghi bắt đầu ⇒ giá trị cũ; đọc bắt đầu sau khi ghi kết thúc ⇒ giá trị mới; đọc chồng thời gian với ghi ⇒ có thể cũ hoặc mới — nhưng <b>khi một lần đọc đã trả giá trị mới, mọi lần đọc sau đó (của mọi client) cũng phải trả giá trị mới</b> (giá trị “lật” nguyên tử tại một điểm). Thêm thao tác cas (compare-and-set). Các điểm thực thi nối với nhau phải luôn đi tiến theo thời gian, không lùi.',
        'Kiểm thử tính linearizable khả thi nhưng tốn kém (ghi lại thời điểm mọi request/response và kiểm tra xem có sắp xếp tuần tự hợp lệ không).'
      ] },
      { t: 'warn', x: '<b>Linearizability ≠ Serializability</b>. Serializability là tính chất cô lập của giao dịch (nhiều đối tượng) — như thể chạy tuần tự theo một thứ tự nào đó. Linearizability là bảo đảm tính mới trên đọc/ghi một thanh ghi; không ngăn write skew. Cả hai cùng có gọi là <b>strict serializability</b> (strong-1SR). 2PL và thực thi tuần tự thường linearizable; SSI thì không (đọc từ snapshot nên không gồm ghi mới hơn).' },
      { t: 'table', head: ['Cần linearizability để...', 'Lý do'], rows: [
        ['<b>Khoá và bầu leader</b>', 'Mọi node phải đồng ý ai giữ khoá; ZooKeeper/etcd dùng đồng thuận để cung cấp thao tác linearizable (đọc mặc định có thể cũ; cần sync()/quorum read)'],
        ['<b>Ràng buộc và tính duy nhất</b>', 'Username/email duy nhất, số dư không âm, không bán quá tồn kho, không đặt trùng ghế ⇒ cần một giá trị cập nhật duy nhất (như compare-and-set). Ràng buộc mềm (overbooking có bồi thường) thì không cần'],
        ['<b>Phụ thuộc thời gian giữa các kênh</b>', 'Web server ghi ảnh vào file storage rồi gửi message cho image resizer; nếu storage không linearizable, resizer có thể thấy ảnh cũ hoặc không thấy gì ⇒ full-size và thumbnail lệch vĩnh viễn']
      ] },
      { t: 'p', x: '<b>Cài đặt linearizable:</b> single-leader (có tiềm năng — đọc từ leader/follower đồng bộ; nhưng leader “ảo tưởng” hay failover mất ghi phá vỡ); <b>thuật toán đồng thuận</b> (linearizable an toàn — ZooKeeper, etcd); multi-leader (không); leaderless (có lẽ không: LWW dựa đồng hồ, sloppy quorum phá vỡ; ngay cả quorum chặt cũng không đảm bảo vì race condition với độ trễ biến thiên — hình 9-6: ghi tới n=3, A đọc r=2 thấy giá trị mới, B đọc sau lại nhận giá trị cũ). Có thể làm Dynamo-style linearizable nhưng đắt (read repair đồng bộ, writer đọc trạng thái trước); cas linearizable thì cần đồng thuận.' }
    ] },
    { icon: '⚖️', title: 'Cái giá và CAP', blocks: [
      { t: 'p', x: 'Hai datacenter bị đứt liên kết. Multi-leader: mỗi DC tiếp tục, đồng bộ sau. Single-leader linearizable: client ở DC follower không liên lạc được leader ⇒ không ghi và không đọc linearizable được ⇒ <b>không sẵn sàng</b>. Với bất kỳ cơ sở dữ liệu linearizable nào: nếu một số replica bị cắt khỏi các replica khác, chúng phải chờ hoặc trả lỗi (mất tính sẵn sàng); nếu không đòi linearizability thì mỗi replica xử lý độc lập (sẵn sàng nhưng không linearizable).' },
      { t: 'key', x: '<b>CAP</b> (Brewer, 2000): đúng hơn là “hoặc Consistent hoặc Available khi bị Partitioned”. Network partition là một loại lỗi nên bạn không được chọn có/không. Khi mạng ổn bạn có cả hai. CAP phạm vi hẹp (một mô hình nhất quán, một loại lỗi), định nghĩa “availability” khác nghĩa thường, nên ít giá trị thực tế và đã bị các kết quả chính xác hơn thay thế — đáng ghi công vì khuyến khích khám phá hệ thống shared-nothing (NoSQL).' },
      { t: 'tip', x: 'Thực tế ít hệ thống linearizable vì <b>hiệu năng</b> chứ không phải chịu lỗi: RAM đa nhân cũng không linearizable (mỗi lõi có cache/store buffer riêng; cần memory barrier). Attiya–Welch: thời gian phản hồi của đọc/ghi linearizable ít nhất tỷ lệ với độ bất định của trễ mạng ⇒ luôn chậm khi trễ biến thiên. Không có thuật toán nhanh hơn; mô hình yếu hơn có thể nhanh hơn nhiều.' }
    ] },
    { icon: '🔗', title: 'Thứ tự, nhân quả và Lamport timestamp', blocks: [
      { t: 'p', x: 'Thứ tự xuất hiện lặp lại: leader quyết định thứ tự ghi; serializability = thứ tự giao dịch; timestamp cố sắp thứ tự. <b>Nhân quả</b> (causality): câu hỏi trước câu trả lời, insert trước update, A xảy ra trước B nếu B biết A. Snapshot “nhất quán” = nhất quán với nhân quả; write skew cũng là phụ thuộc nhân quả (quyết định đi nghỉ phụ thuộc quan sát ai đang trực).' },
      { t: 'table', head: ['', 'Thứ tự toàn phần (total order)', 'Thứ tự bán phần (partial order)'], rows: [
        ['Ví dụ', 'Số tự nhiên; <b>linearizability</b> (một dòng thời gian, mọi cặp thao tác so sánh được)', 'Tập hợp ({a,b} và {b,c} không so sánh được); <b>causality</b> (thao tác đồng thời là không so sánh được; lịch sử Git có nhánh và merge)'],
        ['Quan hệ', 'Linearizability ⇒ nhân quả (mạnh hơn)', 'Causal consistency là mô hình mạnh nhất không bị chậm vì trễ mạng và vẫn sẵn sàng khi lỗi mạng — nhiều hệ thống chỉ cần causal consistency chứ không cần linearizability']
      ] },
      { t: 'key', x: 'Theo dõi mọi phụ thuộc nhân quả thì quá tốn; thay vào đó dùng <b>số thứ tự (sequence number)</b>/<b>logical clock</b> tạo thứ tự toàn phần nhất quán với nhân quả: nếu A xảy ra trước B thì số của A nhỏ hơn. Single-leader: leader tăng bộ đếm cho mỗi ghi trong replication log. Khi không có leader, các cách như số chẵn/lẻ theo node, timestamp đồng hồ vật lý, cấp phát block số đều <b>không nhất quán với nhân quả</b>.' },
      { t: 'steps', items: [
        'Mỗi node có ID duy nhất và bộ đếm số thao tác đã xử lý; <b>Lamport timestamp</b> = (counter, node ID).',
        'So sánh: counter lớn hơn thì lớn hơn; bằng nhau thì node ID lớn hơn thắng.',
        'Mỗi node và client luôn theo dõi counter lớn nhất đã thấy và gửi kèm mọi request; khi nhận counter lớn hơn của mình thì nâng ngay counter lên mức đó.',
        'Nhờ vậy mọi phụ thuộc nhân quả làm timestamp tăng. Khác version vector: Lamport luôn cho thứ tự toàn phần nhưng không phân biệt đồng thời với phụ thuộc; bù lại gọn.'
      ] },
      { t: 'widget', name: 'lamport-sim', title: 'Mô phỏng Lamport timestamp giữa hai node' },
      { t: 'warn', x: 'Thứ tự timestamp chưa đủ: để quyết định ngay lúc này một username có được tạo không, node phải biết thứ tự toàn phần đã “chốt” — nghĩa là không có node nào khác chèn yêu cầu cùng username trước nó. Cần hỏi mọi node ⇒ một node hỏng làm dừng hệ thống. Đó là lý do cần <b>total order broadcast</b>.' }
    ] },
    { icon: '📢', title: 'Total order broadcast', blocks: [
      { t: 'p', x: '(Còn gọi atomic broadcast/total order multicast.) Hai tính chất an toàn: <b>reliable delivery</b> (thông điệp giao cho một node thì giao cho mọi node) và <b>totally ordered delivery</b> (mọi node nhận cùng thứ tự). Thứ tự được cố định lúc giao: không được chèn ngược vào vị trí trước. Mạnh hơn thứ tự timestamp. ZooKeeper và etcd thực chất triển khai total order broadcast.' },
      { t: 'list', items: [
        'Dùng cho: <b>nhân bản cơ sở dữ liệu (state machine replication)</b> — mọi replica xử lý cùng chuỗi ghi theo cùng thứ tự; giao dịch serializable (mỗi thông điệp là một stored procedure xác định); nó chính là một <b>log</b> (giao thông điệp = append log); dịch vụ khoá có <b>fencing token</b> (số thứ tự log, ZooKeeper gọi là zxid).',
        '<b>Linearizable storage từ total order broadcast</b>: để chiếm username, (1) append thông điệp “tôi muốn username X” vào log, (2) đọc log chờ thông điệp quay lại, (3) nếu thông điệp đầu tiên về X là của bạn thì thành công, nếu là của người khác thì abort. Đảm bảo ghi linearizable; đọc cần thêm: ghi một thông điệp vào log để định thời điểm đọc (etcd quorum read), hoặc lấy vị trí log mới nhất linearizable rồi chờ (ZooKeeper sync()), hoặc đọc từ replica đồng bộ (chain replication).',
        '<b>Total order broadcast từ linearizable storage</b>: dùng một thanh ghi số nguyên có <b>increment-and-get</b> nguyên tử; mỗi thông điệp lấy một số tuần tự không có khe hở — khác Lamport timestamp nên người nhận biết phải chờ thông điệp số 5 trước khi giao số 6.',
        'Cả hai (cas/increment-and-get linearizable và total order broadcast) đều <b>tương đương với đồng thuận</b>.'
      ] }
    ] },
    { icon: '🤝', title: 'Giao dịch phân tán và Two-Phase Commit', blocks: [
      { t: 'p', x: 'Đồng thuận: bầu leader (tránh split brain), <b>atomic commit</b> (tất cả node cùng commit hoặc cùng abort). Kết quả FLP nói đồng thuận không thể trong mô hình bất đồng bộ không có timeout; nhưng với timeout hoặc số ngẫu nhiên thì giải được.' },
      { t: 'p', x: 'Trên một nút, commit nguyên tử dựa vào thứ tự ghi đĩa: dữ liệu rồi bản ghi commit. Trên nhiều nút, gửi commit độc lập không đủ (có nút vi phạm ràng buộc, có request mất, có nút crash trước khi ghi commit record). Commit phải <b>không thể rút lại</b>.' },
      { t: 'steps', items: [
        'Ứng dụng xin <b>transaction ID</b> toàn cục từ coordinator (transaction manager).',
        'Ứng dụng bắt đầu giao dịch đơn nút trên mỗi participant, gắn transaction ID.',
        '<b>Pha 1 – prepare</b>: coordinator hỏi mọi participant có commit được không. Participant trả “yes” nghĩa là đã ghi mọi dữ liệu xuống đĩa, kiểm tra xung đột, và <b>hứa chắc chắn commit</b> nếu được yêu cầu (từ bỏ quyền abort).',
        'Khi nhận đủ phản hồi, coordinator quyết định (commit chỉ nếu tất cả “yes”) và ghi quyết định vào log trên đĩa — đây là <b>commit point</b>.',
        '<b>Pha 2</b>: gửi commit/abort tới mọi participant; nếu lỗi thì thử lại mãi — không có đường lui.'
      ] },
      { t: 'key', x: 'Hai “điểm không quay lại”: lúc participant bỏ phiếu yes (hứa) và lúc coordinator quyết định. Nếu coordinator chết sau khi participant đã bỏ phiếu yes, participant ở trạng thái <b>in doubt</b>: không thể tự commit hay abort (có thể lệch với participant khác) ⇒ phải chờ coordinator hồi phục và đọc log. Do đó 2PC là <b>blocking atomic commit protocol</b>. 3PC không blocking nhưng giả định mạng và pause bị chặn nên không dùng được trong thực tế; hoàn toàn không blocking cần failure detector hoàn hảo.' },
      { t: 'warn', x: '2PC khác 2PL! 2PC = atomic commit phân tán; 2PL = cô lập serializable.' },
      { t: 'list', items: [
        '<b>Trong thực tế</b>: tiếng xấu vì vấn đề vận hành và hiệu năng (MySQL phân tán chậm hơn >10 lần do fsync và vòng mạng thêm). Hai loại: <b>database-internal</b> (cùng phần mềm: VoltDB, MySQL Cluster NDB — hoạt động tốt) và <b>heterogeneous</b> (nhiều công nghệ khác nhau, ví dụ DB + message broker).',
        '<b>Exactly-once message processing</b>: ack message và ghi DB trong cùng giao dịch phân tán; abort thì cả hai cùng huỷ nên broker có thể gửi lại. Cần mọi hệ thống bị ảnh hưởng dùng cùng giao thức (email thì không).',
        '<b>XA</b> (X/Open eXtended Architecture, 1991): API C để nối với coordinator, không phải giao thức mạng; coordinator thường là thư viện nằm trong tiến trình ứng dụng. Nếu ứng dụng sập, các giao dịch đã prepare bị kẹt “in doubt” cho đến khi khởi động lại và đọc log.',
        '<b>Giữ khoá khi in doubt</b>: khoá hàng không thể nhả cho đến khi biết kết quả ⇒ các giao dịch khác bị chặn; coordinator hỏng 20 phút thì khoá bị giữ 20 phút; mất log thì mãi mãi. Có “giao dịch mồ côi” phải do quản trị viên quyết định thủ công; XA có <b>heuristic decisions</b> (uyển ngữ cho “có thể phá atomicity”).',
        'Hạn chế: coordinator là điểm lỗi đơn nếu không nhân bản; ứng dụng mất tính stateless; XA là mẫu số chung nhỏ nhất (không phát hiện deadlock xuyên hệ, không dùng được SSI); 2PC cần mọi participant phản hồi nên <b>khuếch đại lỗi</b>. Có phương án thay thế ở chương 11–12.'
      ] }
    ] },
    { icon: '🏛️', title: 'Đồng thuận chịu lỗi', blocks: [
      { t: 'table', head: ['Thuộc tính của đồng thuận', 'Ý nghĩa', 'Loại'], rows: [
        ['<b>Uniform agreement</b>', 'Không hai node quyết định khác nhau', 'Safety'],
        ['<b>Integrity</b>', 'Không node nào quyết định hai lần', 'Safety'],
        ['<b>Validity</b>', 'Giá trị được quyết định phải do một node đề xuất (loại giải pháp tầm thường “luôn null”)', 'Safety'],
        ['<b>Termination</b>', 'Mọi node không crash cuối cùng đều quyết định — nghĩa là có tiến triển, chịu lỗi', 'Liveness']
      ] },
      { t: 'list', items: [
        '2PC không thoả termination (chờ coordinator hồi phục). Mọi thuật toán đồng thuận cần <b>đa số node</b> hoạt động đúng để bảo đảm termination (3 node chịu 1 lỗi, 5 node chịu 2). Safety luôn đúng ngay cả khi mất đa số: sập lớn có thể ngừng phục vụ nhưng không gây quyết định sai. Hầu hết giả định không có lỗi Byzantine (BFT cần < 1/3 node lỗi).',
        'Thuật toán nổi tiếng: <b>Viewstamped Replication, Paxos (Multi-Paxos), Raft, Zab</b> (ZooKeeper). Thực chất cài total order broadcast — tương đương nhiều vòng đồng thuận liên tiếp (mỗi vòng quyết định thông điệp tiếp theo): agreement ⇒ cùng thứ tự; integrity ⇒ không trùng; validity ⇒ không bịa; termination ⇒ không mất.',
        '<b>Single-leader và đồng thuận</b>: chọn leader thủ công là “đồng thuận độc tài” không thoả termination (cần người can thiệp). Tự động bầu leader cần đồng thuận — nghịch lý “muốn bầu leader phải có leader”. Giải pháp: <b>epoch number</b> (ballot number ở Paxos, view number ở VSR, term number ở Raft) — trong mỗi epoch leader là duy nhất; xung đột thì epoch cao thắng. Leader phải thu thập phiếu từ <b>quorum</b> cho từng quyết định (hai vòng bầu: chọn leader; bỏ phiếu cho đề xuất — hai quorum phải giao nhau). Khác 2PC: coordinator được bầu và chỉ cần đa số, không cần mọi participant.',
        '<b>Giới hạn</b>: bỏ phiếu = nhân bản đồng bộ (đánh đổi hiệu năng); cần đa số nghiêm ngặt (nhóm thiểu số bị chặn khi mạng chia); thành viên cố định (thay đổi thành viên động kém hiểu hơn); dựa vào timeout nên mạng dao động gây bầu cử liên tục ⇒ hiệu năng tệ; nhạy với lỗi mạng (Raft có trường hợp một liên kết không ổn định làm leadership nhảy giữa hai node).'
      ] },
      { t: 'p', x: '<b>Dịch vụ điều phối và thành viên</b> (ZooKeeper — mô phỏng Chubby của Google —, etcd, Consul): lưu lượng nhỏ dữ liệu vừa RAM nhưng có sao chép bằng total order broadcast chịu lỗi. Tính năng: <b>thao tác nguyên tử linearizable</b> (cas ⇒ khoá/lease), <b>thứ tự toàn phần</b> (zxid, cversion làm fencing token), <b>phát hiện lỗi</b> (phiên + heartbeat; ephemeral nodes tự nhả khi phiên hết hạn), <b>thông báo thay đổi</b> (watch). Chỉ thao tác linearizable thật sự cần đồng thuận. Dùng cho: chọn leader/primary, phân chia partition cho node và cân bằng lại khi node vào/ra, <b>service discovery</b> (nhưng DNS không linearizable vẫn thường đủ), <b>membership service</b> (đồng ý node nào đang sống). Dữ liệu chậm thay đổi (“node 10.1.1.23 là leader của partition 7”), không dùng cho trạng thái chạy thay đổi hàng triệu lần/giây (dùng BookKeeper…).' }
    ] }
  ],
  summary: [
    'Linearizability: một bản sao, mọi thao tác nguyên tử — dễ hiểu nhưng chậm và mất sẵn sàng khi mạng chia.',
    'CAP hẹp, ít hữu ích; nhân quả (partial order) thường là đủ; Lamport timestamp cho thứ tự toàn phần nhất quán với nhân quả.',
    'Total order broadcast ⇔ linearizable cas ⇔ đồng thuận; là nền tảng của state machine replication.',
    '2PC đảm bảo atomic commit nhưng blocking; XA gây vấn đề vận hành; giao dịch phân tán khuếch đại lỗi.',
    'Đồng thuận chịu lỗi (Paxos/Raft/Zab) cần đa số; ZooKeeper/etcd cung cấp khoá, fencing token, phát hiện lỗi, watch, membership.'
  ],
  cards: [
    ['Linearizability?', 'Ảo giác chỉ một bản sao dữ liệu với thao tác nguyên tử; bảo đảm tính mới.'],
    ['Linearizability vs serializability?', 'Một thanh ghi/recency vs giao dịch nhiều đối tượng/cô lập.'],
    ['Strict serializability?', 'Vừa serializable vừa linearizable.'],
    ['SSI có linearizable không?', 'Không — đọc từ snapshot không gồm ghi mới hơn.'],
    ['Khi nào cần linearizability?', 'Khoá/bầu leader, ràng buộc duy nhất, phụ thuộc thời gian giữa các kênh.'],
    ['Dynamo-style có linearizable không?', 'Thường không, kể cả quorum chặt.'],
    ['CAP chính xác nói gì?', 'Hoặc nhất quán (linearizable) hoặc sẵn sàng khi có network partition.'],
    ['Vì sao nhiều hệ thống bỏ linearizability?', 'Vì hiệu năng (độ trễ), không chỉ chịu lỗi.'],
    ['Total order vs partial order?', 'Mọi cặp so sánh được vs có cặp không so sánh được.'],
    ['Nhân quả định nghĩa thứ tự gì?', 'Bán phần; thao tác đồng thời không so sánh được.'],
    ['Causal consistency mạnh cỡ nào?', 'Mô hình mạnh nhất không chậm vì mạng và vẫn sẵn sàng khi lỗi mạng.'],
    ['Lamport timestamp?', '(counter, node ID); nâng counter lên mức lớn nhất đã thấy.'],
    ['Vì sao timestamp chưa đủ?', 'Chưa biết thứ tự toàn phần đã “chốt” chưa.'],
    ['Total order broadcast?', 'Giao thông điệp đáng tin cậy, cùng thứ tự tới mọi node.'],
    ['State machine replication?', 'Mọi replica xử lý cùng chuỗi ghi theo cùng thứ tự.'],
    ['2PC bước chính?', 'Prepare (hứa) rồi commit/abort theo quyết định đã ghi log của coordinator.'],
    ['“In doubt”?', 'Participant đã bỏ phiếu yes nhưng chưa biết kết quả; giữ khoá chờ coordinator.'],
    ['XA?', 'Chuẩn API C để triển khai 2PC xuyên công nghệ.'],
    ['Bốn tính chất của đồng thuận?', 'Uniform agreement, integrity, validity, termination.'],
    ['Epoch number?', 'Số thứ tự nhiệm kỳ leader (ballot/view/term), epoch cao thắng.'],
    ['ZooKeeper cung cấp gì?', 'Thao tác linearizable, thứ tự toàn phần (zxid), phát hiện lỗi, watch.']
  ],
  quiz: [
    { q: 'Linearizability bảo đảm:', o: ['Giao dịch tuần tự', 'Tính mới (recency) của đọc/ghi một thanh ghi', 'Không mất dữ liệu', 'Nhanh hơn'], a: 1, e: 'Khác serializability.' },
    { q: 'Hệ thống nào thường không linearizable?', o: ['Consensus (ZooKeeper)', 'Multi-leader', 'Single-leader đọc từ leader', 'etcd'], a: 1, e: 'Ghi đồng thời nhiều nơi.' },
    { q: 'Khoá phân tán/bầu leader cần:', o: ['Eventual consistency', 'Linearizability', 'Không gì', 'LWW'], a: 1, e: 'Mọi node phải đồng ý ai giữ khoá.' },
    { q: 'Trong CAP đúng hơn là:', o: ['Chọn 2 trong 3 tự do', 'Khi bị partition phải chọn Consistent hoặc Available', 'P là tuỳ chọn', 'Luôn chọn A'], a: 1, e: 'Partition là lỗi không chọn được.' },
    { q: 'RAM đa nhân không linearizable do:', o: ['Lỗi', 'Cache và store buffer từng lõi (đổi lấy hiệu năng)', 'Mạng', 'Đĩa'], a: 1, e: 'Không phải vì chịu lỗi.' },
    { q: 'Quan hệ nhân quả tạo ra thứ tự:', o: ['Toàn phần', 'Bán phần', 'Ngẫu nhiên', 'Không có'], a: 1, e: 'Đồng thời thì không so sánh được.' },
    { q: 'Lamport timestamp là:', o: ['Giờ hệ thống', '(counter, node ID), nâng counter theo max đã thấy', 'UUID ngẫu nhiên', 'Hash'], a: 1, e: 'Nhất quán với nhân quả.' },
    { q: 'Lamport timestamp không làm được gì?', o: ['Thứ tự toàn phần', 'Phân biệt đồng thời với phụ thuộc nhân quả', 'Gọn', 'So sánh'], a: 1, e: 'Version vector làm được.' },
    { q: 'Total order broadcast bảo đảm:', o: ['Chỉ không mất', 'Giao tin cậy và cùng thứ tự cho mọi node', 'Đồng bộ đồng hồ', 'Không lỗi'], a: 1, e: 'Thứ tự cố định lúc giao.' },
    { q: 'Linearizable cas có thể xây từ:', o: ['Total order broadcast', 'Timestamp', 'DNS', 'CSV'], a: 0, e: 'Cả hai tương đương đồng thuận.' },
    { q: 'Trong 2PC, “điểm không quay lại” của participant là khi:', o: ['Nhận request', 'Bỏ phiếu yes', 'Ghi log', 'Nhận abort'], a: 1, e: 'Đã hứa chắc commit.' },
    { q: 'Vì sao 2PC là blocking?', o: ['Chạy đơn luồng', 'Participant in doubt phải chờ coordinator hồi phục', 'Quá chậm', 'Cần GPU'], a: 1, e: 'Giữ khoá trong lúc chờ.' },
    { q: 'Thuộc tính nào của đồng thuận là liveness?', o: ['Agreement', 'Integrity', 'Validity', 'Termination'], a: 3, e: 'Cuối cùng quyết định.' },
    { q: 'Để chịu 2 lỗi, đồng thuận cần tối thiểu:', o: ['3 node', '4 node', '5 node', '2 node'], a: 2, e: 'Cần đa số.' },
    { q: 'Raft gọi nhiệm kỳ leader là:', o: ['Ballot', 'View', 'Term', 'Epoch bằng tay'], a: 2, e: 'Paxos: ballot; VSR: view.' }
  ],
  match: [
    ['Linearizability', 'Ảo giác một bản sao'],
    ['Lamport timestamp', '(counter, node ID)'],
    ['2PC', 'Prepare rồi commit'],
    ['Raft', 'Đồng thuận với term'],
    ['ZooKeeper', 'Dịch vụ điều phối dựa trên Zab'],
    ['In doubt', 'Chờ quyết định của coordinator'],
    ['FLP', 'Bất khả thi trong mô hình bất đồng bộ thuần']
  ]
});
