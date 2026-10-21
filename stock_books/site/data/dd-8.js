// Designing Data-Intensive Applications – Chương 8: Rắc rối của hệ thống phân tán.
BOOK_DATA.ddia.chapters.push({
  n: 8,
  title: 'Rắc rối của hệ thống phân tán',
  intro: 'Chương “bi quan” nhất: giả định mọi thứ có thể sai sẽ sai. Máy đơn hoặc chạy hoặc hỏng, còn hệ phân tán có <b>lỗi một phần (partial failure)</b> không xác định. Chương nói về mạng không tin cậy, đồng hồ không tin cậy, tạm dừng tiến trình, và cách suy luận về “sự thật” và tri thức: đa số định nghĩa sự thật, <b>fencing token</b>, lỗi Byzantine, mô hình hệ thống, safety và liveness.',
  sections: [
    { icon: '💥', title: 'Lỗi và lỗi một phần', blocks: [
      { t: 'p', x: 'Một máy tính tốt thường “hoặc chạy hoàn toàn hoặc hỏng hoàn toàn” — chủ ý thiết kế: thà crash còn hơn trả kết quả sai. Hệ phân tán nối nhiều máy qua mạng nên phải đối diện thực tế vật lý lộn xộn (chuyện Coda Hale: phân vùng mạng lâu dài, PDU hỏng, cả rack bị ngắt điện, tài xế đâm xe tải vào hệ thống HVAC…). <b>Partial failure</b> là không xác định (nondeterministic): có lúc chạy có lúc hỏng, thậm chí không biết đã thành công chưa.' },
      { t: 'table', head: ['', 'Siêu máy tính (HPC)', 'Điện toán đám mây / dịch vụ internet'], rows: [
        ['Xử lý lỗi', 'Checkpoint định kỳ; một node hỏng ⇒ dừng cả cụm, khởi động lại từ checkpoint (lỗi một phần leo thành lỗi toàn phần, như kernel panic)', 'Online, phục vụ độ trễ thấp mọi lúc ⇒ không được dừng để sửa; phải chịu lỗi từng phần'],
        ['Phần cứng', 'Chuyên dụng, mỗi node rất tin cậy, bộ nhớ chia sẻ/RDMA, topology mesh/torus', 'Máy thương phẩm, tỷ lệ hỏng cao hơn, IP/Ethernet kiểu Clos, thường trải rộng địa lý qua internet']
      ] },
      { t: 'key', x: 'Hệ thống lớn: hầu như luôn có thứ gì đó hỏng. Chịu được node hỏng là lợi thế vận hành (rolling upgrade). Phải xây hệ thống tin cậy từ các thành phần không tin cậy (như TCP trên IP không tin cậy, mã sửa lỗi) — nhưng luôn có giới hạn (TCP không xoá được độ trễ). “Nghi ngờ, bi quan và hoang tưởng có ích.” Hãy cố ý tạo lỗi mạng khi kiểm thử.' }
    ] },
    { icon: '📡', title: 'Mạng không tin cậy', blocks: [
      { t: 'p', x: 'Hệ thống shared-nothing giao tiếp qua mạng gói bất đồng bộ (Ethernet/IP): không đảm bảo thời gian đến hay có đến hay không. Gửi request mà không nhận phản hồi, bạn không phân biệt được: (1) request mất, (2) request đang xếp hàng, (3) node đích chết, (4) node tạm dừng (GC), (5) request đã xử lý nhưng response mất, (6) response đang bị trễ. Cách thường dùng: <b>timeout</b> — nhưng khi timeout vẫn không biết bên kia đã nhận hay chưa.' },
      { t: 'list', items: [
        '<b>Lỗi mạng trong thực tế</b>: ~12 lỗi mạng/tháng trong một DC cỡ vừa (nửa ngắt một máy, nửa ngắt cả rack); thiết bị dự phòng không giảm lỗi nhiều vì lỗi cấu hình của con người; EC2 nhiều sự cố thoáng qua; nâng cấp switch gây reconfigure làm gói trễ >1 phút; cá mập cắn cáp ngầm; card mạng chỉ nhận mà không gửi được. Network partition (netsplit) ở đây gọi là “network fault” để khỏi nhầm với partition (shard).',
        '<b>Phát hiện lỗi</b>: TCP RST/FIN nếu không có tiến trình lắng nghe; script báo node khác khi tiến trình chết (HBase); hỏi giao diện quản trị switch; ICMP Destination Unreachable. Không thể trông cậy; TCP ack không chứng minh ứng dụng đã xử lý. Phải có phản hồi tích cực từ ứng dụng.',
        '<b>Timeout bao lâu?</b> Dài ⇒ phát hiện chậm; ngắn ⇒ tuyên bố chết nhầm (hành động bị làm hai lần, tăng tải lên node khác, cascading failure — cực đoan: mọi node tuyên bố nhau chết). Nếu mạng đảm bảo trễ tối đa d và node xử lý trong r thì timeout hợp lý là 2d + r, nhưng thực tế mạng bất đồng bộ có trễ không giới hạn.',
        '<b>Nguyên nhân dao động độ trễ</b>: xếp hàng ở switch (nhiều máy gửi cùng một đích, đầy hàng đợi thì rớt gói); hệ điều hành xếp hàng khi mọi lõi bận; VM bị tạm dừng hàng chục ms (steal time); TCP flow control + retransmission; hàng xóm ồn ào (noisy neighbor) trong đám mây. UDP (VoIP) đánh đổi: không retransmit nên ít dao động hơn vì dữ liệu trễ vô giá trị.',
        '<b>Mạng đồng bộ vs bất đồng bộ</b>: điện thoại cố định dùng <b>circuit</b> (dành băng thông cố định trên toàn tuyến, ví dụ ISDN 16 bit mỗi 250 μs) ⇒ không xếp hàng, trễ bị chặn (bounded delay). Internet dùng <b>packet switching</b> tối ưu cho lưu lượng bùng phát: tận dụng băng thông cao hơn nên rẻ hơn, đổi lại có xếp hàng. Độ trễ biến thiên “không phải định luật vật lý mà là kết quả cân nhắc lợi ích chi phí” (latency vs resource utilization). Vì vậy không có timeout “đúng”: đo thực nghiệm hoặc dùng <b>Phi Accrual failure detector</b> (Akka, Cassandra) tự điều chỉnh theo phân phối thời gian phản hồi.'
      ] }
    ] },
    { icon: '🕰️', title: 'Đồng hồ không tin cậy', blocks: [
      { t: 'table', head: ['Loại đồng hồ', 'Dùng để', 'Cảnh báo'], rows: [
        ['<b>Time-of-day</b> (wall-clock: CLOCK_REALTIME, System.currentTimeMillis)', 'Biết ngày giờ hiện tại (giây từ epoch 1970, UTC); đồng bộ qua NTP', 'Có thể nhảy lùi khi bị reset, bỏ qua giây nhuận ⇒ không dùng đo khoảng thời gian'],
        ['<b>Monotonic</b> (CLOCK_MONOTONIC, System.nanoTime)', 'Đo khoảng thời gian (timeout, thời gian phản hồi); luôn tiến lên', 'Giá trị tuyệt đối vô nghĩa; không so sánh giữa các máy; NTP có thể chỉnh tốc độ (slew) tối đa 0,05%']
      ] },
      { t: 'list', items: [
        '<b>Độ chính xác</b>: tinh thể thạch anh bị drift (Google giả định 200 ppm ⇒ 6 ms mỗi 30 giây, 17 giây mỗi ngày); NTP kém khi mạng nghẽn (tối thiểu ~35 ms qua internet, đột biến ~1 giây); máy tường lửa chặn NTP lâu không ai biết; server NTP sai hàng giờ (client hỏi nhiều server và loại outlier); <b>leap second</b> gây sập nhiều hệ thống (giải pháp “smearing”); VM làm đồng hồ nhảy; thiết bị người dùng có thể bị chỉnh sai tuỳ ý. MiFID II yêu cầu giao dịch tần suất cao đồng bộ trong 100 μs bằng GPS/PTP.',
        'Đồng hồ sai dễ không bị phát hiện (khác CPU hỏng): kết quả thường là mất dữ liệu thầm lặng. Phải giám sát lệch giờ và loại node lệch quá mức.',
        '<b>Dùng timestamp để sắp thứ tự sự kiện là nguy hiểm</b> (LWW): ghi x=1 có timestamp 42,004 s trong khi ghi x=2 (xảy ra sau về nhân quả) là 42,003 s ⇒ x=2 bị bỏ. LWW: ghi biến mất bí ẩn, không phân biệt tuần tự và đồng thời, hai node có thể cùng timestamp. An toàn hơn: <b>logical clock</b> (bộ đếm tăng) chỉ ghi thứ tự tương đối.',
        '<b>Khoảng tin cậy (confidence interval)</b>: một lần đọc đồng hồ nên là một khoảng chứ không phải điểm; chữ số micro-giây thường vô nghĩa. Hầu hết API không nói lỗi; ngoại lệ là <b>TrueTime của Spanner</b> trả [earliest, latest]. Spanner dùng nó cho snapshot isolation toàn cầu: nếu hai khoảng không chồng lấn thì biết chắc thứ tự; nên <b>chờ đúng bằng độ rộng khoảng tin cậy</b> trước khi commit giao dịch ghi (Google đặt GPS/đồng hồ nguyên tử mỗi DC ⇒ ~7 ms).'
      ] },
      { t: 'p', x: '<b>Process pauses</b>: leader dùng <b>lease</b> (khoá có timeout) để biết mình còn là leader, nhưng đoạn code <code>if (lease.isValid()) process(request)</code> giả định gần như không có thời gian trôi giữa kiểm tra và xử lý. Tiến trình có thể bị tạm dừng bất kỳ lúc nào, hàng giây đến hàng phút, mà không biết: GC “stop-the-world”, VM bị suspend/live migration, đóng nắp laptop, context switch / steal time, I/O đồng bộ chậm (kể cả class loader hay EBS), swap / thrashing, SIGSTOP (Ctrl-Z). Trong lúc đó thế giới vẫn chạy và có thể coi node là đã chết.' },
      { t: 'list', items: [
        '<b>Hard real-time</b> (airbag, tên lửa): cần RTOS, WCET của mọi hàm, giới hạn cấp phát bộ nhớ… rất đắt, không phải “high-performance” (thông lượng thấp hơn). Hầu hết hệ thống phía server không kinh tế để làm vậy.',
        '<b>Hạn chế ảnh hưởng của GC</b>: coi GC như ngừng kế hoạch ngắn; runtime cảnh báo trước ⇒ ngừng gửi request mới, chờ xử lý xong, GC rồi tiếp tục (giao dịch tài chính); hoặc chỉ dùng GC cho đối tượng ngắn hạn rồi khởi động lại tiến trình định kỳ như rolling upgrade.'
      ] }
    ] },
    { icon: '🗳️', title: 'Tri thức, sự thật và dối trá', blocks: [
      { t: 'key', x: 'Một node không biết gì chắc chắn — chỉ đoán từ thông điệp nhận (không nhận) qua mạng. <b>Sự thật do đa số (quorum) định nghĩa</b>: một node không thể tin phán đoán của chính mình (bị tuyên bố chết dù vẫn sống, như node chỉ phát mà không nhận được, hay node bị GC dừng một phút rồi tỉnh dậy). Nếu quorum tuyên bố một node chết thì nó phải được coi là chết và phải lùi xuống. Đa số tuyệt đối (> n/2): 3 node chịu 1 lỗi, 5 node chịu 2; chỉ có một đa số nên không có hai quyết định mâu thuẫn.' },
      { t: 'p', x: '<b>Leader và lock</b>: nhiều thứ cần “chỉ một”: leader của partition, người giữ khoá, người đăng ký username. Node tưởng mình là “người được chọn” chưa chắc quorum đồng ý. Bug thật (HBase từng có): client 1 giữ lease, bị tạm dừng lâu, lease hết hạn, client 2 lấy lease và ghi file; client 1 tỉnh dậy vẫn tin mình giữ lease và cũng ghi ⇒ file hỏng.' },
      { t: 'steps', items: [
        'Mỗi lần lock service cấp khoá/lease, nó trả kèm một <b>fencing token</b> — số luôn tăng (ZooKeeper: zxid hoặc cversion).',
        'Client gửi token cùng mọi yêu cầu ghi tới storage.',
        'Storage nhớ token cao nhất đã xử lý và <b>từ chối</b> ghi mang token cũ hơn (client 1 token 33 bị từ chối sau khi client 2 token 34 đã ghi).',
        'Tài nguyên phải chủ động kiểm tra token; không thể chỉ trông cậy client tự kiểm tra trạng thái khoá.'
      ] },
      { t: 'widget', name: 'fencing-sim', title: 'Mô phỏng fencing token: khoá hết hạn, client cũ tỉnh dậy' },
      { t: 'p', x: '<b>Lỗi Byzantine</b>: node có thể “nói dối” (gửi phản hồi sai/độc hại). Sách giả định node không tin cậy nhưng trung thực. Bài toán Byzantine Generals (tổng quát hoá Two Generals). Cần BFT trong hàng không vũ trụ (bức xạ làm hỏng bộ nhớ) và hệ thống nhiều tổ chức không tin nhau (Bitcoin/blockchain). Trong trung tâm dữ liệu của bạn, thường coi như không có Byzantine fault; thuật toán BFT cần >2/3 node đúng và vô dụng với bug chung hay tấn công khi mọi node chạy cùng phần mềm. Ứng dụng web vẫn phải coi client là độc hại (xác thực đầu vào, SQL injection, XSS) — server là thẩm quyền.' },
      { t: 'list', items: [
        'Dạng nói dối yếu đáng phòng: gói mạng hỏng lọt qua checksum TCP/UDP ⇒ thêm checksum tầng ứng dụng; kiểm tra tính hợp lệ của input; NTP hỏi nhiều server và lấy đa số.'
      ] }
    ] },
    { icon: '📐', title: 'Mô hình hệ thống, safety và liveness', blocks: [
      { t: 'table', head: ['Mô hình thời gian', 'Giả định'], rows: [
        ['<b>Synchronous</b>', 'Trễ mạng, tạm dừng tiến trình và sai số đồng hồ đều bị chặn trên (không thực tế)'],
        ['<b>Partially synchronous</b>', 'Thường như đồng bộ nhưng đôi khi vượt giới hạn — <b>thực tế nhất</b>'],
        ['<b>Asynchronous</b>', 'Không giả định thời gian (thậm chí không có đồng hồ/timeout); rất hạn chế']
      ] },
      { t: 'table', head: ['Mô hình lỗi node', 'Giả định'], rows: [
        ['<b>Crash-stop</b>', 'Chỉ lỗi bằng cách crash, và vĩnh viễn'],
        ['<b>Crash-recovery</b>', 'Có thể crash rồi hồi phục; ổ đĩa ổn định giữ nguyên, bộ nhớ mất — <b>hữu ích nhất</b> (kết hợp partially synchronous)'],
        ['<b>Byzantine</b>', 'Làm gì cũng được, kể cả lừa dối']
      ] },
      { t: 'key', x: 'Tính đúng đắn của thuật toán mô tả bằng các <b>thuộc tính</b> (ví dụ fencing token: uniqueness, monotonic sequence, availability). <b>Safety</b> (“không có gì xấu xảy ra”): nếu vi phạm có thể chỉ ra thời điểm cụ thể và không hoàn tác được (uniqueness, monotonic sequence); luôn phải đúng trong mọi tình huống của mô hình. <b>Liveness</b> (“điều tốt cuối cùng xảy ra”): có chữ “eventually”, có thể chưa đúng lúc này nhưng vẫn còn hy vọng (availability; eventual consistency cũng là liveness). Liveness được phép có điều kiện (ví dụ chỉ khi đa số node còn sống và mạng cuối cùng phục hồi).' },
      { t: 'tip', x: 'Mô hình hệ thống là một trừu tượng đơn giản hoá; triển khai thực tế vẫn phải xử lý “điều tưởng không xảy ra” (ổ đĩa hỏng dữ liệu, node bị “mất trí nhớ” phá quorum…) dù chỉ bằng cách báo người vận hành. Chứng minh lý thuyết và kiểm thử thực nghiệm đều quan trọng. Nếu giữ được mọi thứ trên một máy, hãy cân nhắc làm vậy; nhưng chịu lỗi và độ trễ thấp cần hệ phân tán.' }
    ] }
  ],
  summary: [
    'Lỗi một phần không xác định là đặc trưng của hệ phân tán; xây hệ tin cậy từ thành phần không tin cậy.',
    'Mạng gói có trễ không giới hạn; timeout là cách duy nhất phát hiện lỗi nhưng không phân biệt mạng với node.',
    'Đồng hồ thời gian thực có thể nhảy/trôi: dùng monotonic để đo khoảng thời gian, logical clock để sắp thứ tự; LWW nguy hiểm; Spanner TrueTime dùng khoảng tin cậy.',
    'Tiến trình có thể bị dừng bất kỳ lúc nào (GC, VM) mà không biết: lease cần fencing token.',
    'Sự thật do quorum định nghĩa; giả định node trung thực (không Byzantine); mô hình thực tế: partially synchronous + crash-recovery; phân biệt safety và liveness.'
  ],
  cards: [
    ['Partial failure?', 'Một phần hệ thống hỏng không xác định trong khi phần khác vẫn chạy.'],
    ['Vì sao HPC khác cloud khi xử lý lỗi?', 'HPC dừng cả cụm và khởi động từ checkpoint; cloud phải phục vụ liên tục nên chịu lỗi từng phần.'],
    ['Sáu khả năng khi không nhận phản hồi?', 'Request mất/chờ, node chết/tạm dừng, response mất/trễ — không phân biệt được.'],
    ['Network fault vs partition?', 'Sách dùng “network fault” để tránh nhầm với shard.'],
    ['Timeout lý tưởng?', '2d + r nếu có trễ tối đa d và xử lý r — thực tế không có.'],
    ['Nguyên nhân chính của dao động độ trễ?', 'Xếp hàng ở switch, OS, VM, TCP retransmit, noisy neighbor.'],
    ['Circuit vs packet switching?', 'Circuit dành băng thông cố định (trễ bị chặn); packet tận dụng tốt hơn nhưng có xếp hàng.'],
    ['Phi Accrual?', 'Bộ phát hiện lỗi tự điều chỉnh timeout theo phân phối thời gian phản hồi.'],
    ['Time-of-day vs monotonic clock?', 'Ngày giờ (có thể nhảy) vs đo khoảng thời gian (luôn tiến).'],
    ['Drift 200 ppm?', 'Khoảng 6 ms mỗi 30 giây hoặc 17 giây mỗi ngày.'],
    ['Vì sao LWW nguy hiểm?', 'Dựa vào đồng hồ lệch ⇒ ghi biến mất, không phân biệt tuần tự và đồng thời.'],
    ['Logical clock?', 'Bộ đếm chỉ thứ tự tương đối, không đo thời gian thật.'],
    ['TrueTime?', 'API Spanner trả [earliest, latest]; chờ bằng độ rộng khoảng trước khi commit.'],
    ['Process pause nguyên nhân?', 'GC, VM suspend, context switch, I/O chậm, swap, SIGSTOP.'],
    ['Lease?', 'Khoá có hạn; node phải gia hạn định kỳ để giữ vai trò leader.'],
    ['Fencing token?', 'Số tăng dần gắn với mỗi lần cấp khoá; storage từ chối token cũ hơn.'],
    ['Quorum trong chương 8?', 'Quyết định (kể cả tuyên bố node chết) cần đa số node.'],
    ['Byzantine fault?', 'Node nói dối/gửi dữ liệu tuỳ ý.'],
    ['Safety vs liveness?', 'Safety: không có gì xấu xảy ra; liveness: điều tốt cuối cùng xảy ra.'],
    ['Mô hình hữu ích nhất?', 'Partially synchronous + crash-recovery.']
  ],
  quiz: [
    { q: 'Điều làm hệ phân tán khó hơn máy đơn:', o: ['Tốc độ CPU', 'Lỗi một phần không xác định', 'Màn hình', 'Ngôn ngữ'], a: 1, e: 'Cùng thao tác có thể lúc được lúc không.' },
    { q: 'Không nhận phản hồi, bạn có biết request đã đến chưa?', o: ['Có', 'Không — không phân biệt được các nguyên nhân', 'Chỉ khi dùng TCP', 'Chỉ khi dùng UDP'], a: 1, e: 'Timeout không giải quyết.' },
    { q: 'Nguyên nhân chính của dao động trễ mạng:', o: ['Cáp dài', 'Xếp hàng (queueing)', 'Màu cáp', 'DNS'], a: 1, e: 'Switch, OS, VM, TCP.' },
    { q: 'Mạng điện thoại cố định đạt độ trễ bị chặn nhờ:', o: ['Packet switching', 'Circuit switching đặt trước băng thông', 'TCP', 'NTP'], a: 1, e: 'Nhưng lãng phí băng thông.' },
    { q: 'Để đo timeout nên dùng:', o: ['Time-of-day clock', 'Monotonic clock', 'Đồng hồ NTP', 'Ngày'], a: 1, e: 'Time-of-day có thể nhảy lùi.' },
    { q: 'LWW nguy hiểm vì:', o: ['Chậm', 'Dựa trên đồng hồ lệch, có thể loại bỏ ghi mới hơn về nhân quả', 'Cần leader', 'Tốn RAM'], a: 1, e: 'Cassandra và Riak dùng.' },
    { q: 'TrueTime của Spanner trả về:', o: ['Một timestamp', 'Khoảng [earliest, latest]', 'Số lần', 'Múi giờ'], a: 1, e: 'Chờ bằng độ rộng khoảng.' },
    { q: 'GC stop-the-world có thể kéo dài:', o: ['Vài micro-giây', 'Đến vài phút', 'Không bao giờ', 'Chính xác 1 giây'], a: 1, e: 'Dẫn đến lease hết hạn mà không hay.' },
    { q: 'Fencing token ngăn:', o: ['Mạng lỗi', 'Node cũ tưởng mình còn giữ khoá ghi đè', 'GC', 'Mất dữ liệu đĩa'], a: 1, e: 'Storage từ chối token cũ.' },
    { q: 'Ai kiểm tra fencing token?', o: ['Client', 'Tài nguyên (storage)', 'DNS', 'Không ai'], a: 1, e: 'Không thể tin client tự kiểm tra.' },
    { q: 'Hệ thống cần bao nhiêu node để chịu 2 lỗi theo đa số?', o: ['3', '4', '5', '2'], a: 2, e: '5 node chịu 2.' },
    { q: 'Lỗi Byzantine là:', o: ['Node crash', 'Node gửi thông tin sai/độc hại', 'Mạng chậm', 'Disk đầy'], a: 1, e: 'Thường không giả định trong data center.' },
    { q: 'Mô hình hệ thống thực tế nhất:', o: ['Synchronous + crash-stop', 'Partially synchronous + crash-recovery', 'Asynchronous + Byzantine', 'Synchronous + Byzantine'], a: 1, e: 'Mô hình thường dùng.' },
    { q: 'Eventual consistency thuộc loại thuộc tính nào?', o: ['Safety', 'Liveness', 'Cả hai', 'Không'], a: 1, e: 'Có chữ “eventually”.' },
    { q: 'Thuộc tính safety bị vi phạm thì:', o: ['Còn hy vọng', 'Có thể chỉ ra thời điểm và không hoàn tác', 'Tự phục hồi', 'Bỏ qua'], a: 1, e: 'Ví dụ trùng fencing token.' }
  ],
  match: [
    ['Monotonic clock', 'Đo khoảng thời gian'],
    ['Logical clock', 'Chỉ thứ tự tương đối'],
    ['TrueTime', 'Khoảng tin cậy của Spanner'],
    ['Lease', 'Khoá có hạn'],
    ['Fencing token', 'Số tăng dần chặn node cũ'],
    ['Byzantine', 'Node nói dối'],
    ['Safety', 'Không có gì xấu xảy ra']
  ]
});
