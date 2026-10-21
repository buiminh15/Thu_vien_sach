// Designing Data-Intensive Applications – Chương 1: Ứng dụng đáng tin cậy, mở rộng được, dễ bảo trì.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.ddia = BOOK_DATA.ddia || { chapters: [] };
BOOK_DATA.ddia.chapters.push({
  n: 1,
  title: 'Ứng dụng đáng tin cậy, mở rộng được, dễ bảo trì',
  intro: 'Nền tảng của cả cuốn sách: ứng dụng “data-intensive” (nặng về dữ liệu) cần ba thứ — <b>độ tin cậy</b> (reliability), <b>khả năng mở rộng</b> (scalability) và <b>khả năng bảo trì</b> (maintainability). Chương này định nghĩa chúng bằng ví dụ cụ thể (timeline Twitter, percentile của thời gian phản hồi).',
  sections: [
    { icon: '🧱', title: 'Hệ thống dữ liệu và ba mối quan tâm', blocks: [
      { t: 'p', x: 'Nhiều ứng dụng ngày nay <b>nặng dữ liệu</b> chứ không nặng tính toán: vấn đề là lượng dữ liệu, độ phức tạp và tốc độ thay đổi. Chúng được xây từ các khối chuẩn: <b>database</b> (lưu), <b>cache</b> (nhớ kết quả đắt), <b>search index</b> (tìm theo từ khoá), <b>stream processing</b> (gửi thông điệp bất đồng bộ), <b>batch processing</b> (xử lý định kỳ lượng dữ liệu lớn).' },
      { t: 'list', items: [
        'Ranh giới giữa các loại công cụ ngày càng mờ: Redis vừa là datastore vừa là message queue; Kafka là queue có độ bền như database.',
        'Khi một công cụ không đủ, bạn ghép nhiều công cụ bằng mã ứng dụng (cache + Elasticsearch + DB chính). Khi đó mã của bạn phải giữ chúng đồng bộ — bạn không chỉ là dev ứng dụng mà còn là <b>nhà thiết kế hệ thống dữ liệu</b>.'
      ] },
      { t: 'table', head: ['Mối quan tâm', 'Ý nghĩa'], rows: [
        ['<b>Reliability</b>', 'Hoạt động đúng (đúng chức năng, đủ hiệu năng, an toàn) ngay cả khi có sự cố (lỗi phần cứng, phần mềm, con người)'],
        ['<b>Scalability</b>', 'Có cách hợp lý để đối phó khi tải tăng (dữ liệu, lưu lượng, độ phức tạp)'],
        ['<b>Maintainability</b>', 'Nhiều người sẽ làm việc trên hệ thống theo thời gian (vận hành + phát triển) và đều phải làm việc hiệu quả']
      ] }
    ] },
    { icon: '🛡️', title: 'Độ tin cậy (Reliability)', blocks: [
      { t: 'key', x: '<b>Fault</b> (lỗi thành phần: một bộ phận lệch khỏi đặc tả) khác <b>failure</b> (cả hệ thống ngừng phục vụ). Không thể đưa xác suất fault về 0, nên thiết kế <b>fault-tolerance</b> để fault không thành failure. Chỉ nói được về chịu một số loại fault nhất định.' },
      { t: 'list', items: [
        '<b>Lỗi phần cứng</b>: ổ cứng có MTTF ~10–50 năm ⇒ cụm 10.000 ổ sẽ hỏng khoảng <b>1 ổ/ngày</b>. Giải pháp truyền thống: RAID, nguồn kép, máy phát điện. Xu hướng mới: chịu mất cả máy bằng phần mềm (rolling upgrade — vá từng node mà không ngừng cả hệ thống).',
        '<b>Lỗi phần mềm</b>: có tính hệ thống, tương quan giữa các node nên gây nhiều failure hơn lỗi phần cứng độc lập. Ví dụ: bug nhận input xấu làm mọi server crash; leap second 30/6/2012 làm nhiều ứng dụng treo cùng lúc; tiến trình “runaway” ăn hết tài nguyên; dịch vụ phụ thuộc chậm hoặc trả dữ liệu hỏng; <b>cascading failure</b>. Không có giải pháp nhanh: nghĩ kỹ về giả định, kiểm thử, cô lập tiến trình, cho phép crash &amp; restart, giám sát, tự kiểm tra bất biến và báo động.',
        '<b>Lỗi con người</b>: một nghiên cứu cho thấy lỗi cấu hình của người vận hành là nguyên nhân hàng đầu gây gián đoạn; phần cứng chỉ 10–25%.'
      ] },
      { t: 'steps', items: [
        'Thiết kế giảm cơ hội mắc lỗi (abstraction, API tốt — nhưng đừng hạn chế đến mức người dùng lách).',
        'Tách nơi người hay sai khỏi nơi gây hậu quả: môi trường sandbox đầy đủ, dữ liệu thật nhưng không ảnh hưởng người dùng.',
        'Kiểm thử ở mọi tầng, kể cả corner case.',
        'Khôi phục nhanh: rollback cấu hình nhanh, rollout dần dần, công cụ tính lại dữ liệu.',
        'Giám sát chi tiết (telemetry): chỉ số hiệu năng, tỷ lệ lỗi.',
        'Quản lý và đào tạo tốt.'
      ] },
      { t: 'tip', x: 'Chaos Monkey của Netflix cố ý giết ngẫu nhiên tiến trình để luôn kiểm thử cơ chế chịu lỗi: cố tình tăng tần suất fault vì nhiều bug nghiêm trọng đến từ xử lý lỗi kém.' }
    ] },
    { icon: '📈', title: 'Khả năng mở rộng: mô tả tải', blocks: [
      { t: 'p', x: '“X có scale không?” là câu hỏi vô nghĩa. Câu đúng: “nếu hệ thống tăng theo cách này, ta có phương án gì? thêm tài nguyên thế nào?” Đầu tiên phải mô tả tải bằng <b>load parameters</b> (request/giây, tỷ lệ đọc/ghi, số người hoạt động đồng thời, hit rate của cache…).' },
      { t: 'key', x: '<b>Ví dụ Twitter (11/2012)</b>: đăng tweet trung bình 4,6k req/s (đỉnh &gt;12k); đọc home timeline 300k req/s. Thách thức không phải khối lượng tweet mà là <b>fan-out</b> (mỗi người theo dõi nhiều người, được nhiều người theo dõi).' },
      { t: 'table', head: ['Cách', 'Đăng', 'Đọc'], rows: [
        ['1. Chèn tweet vào bảng chung, truy vấn JOIN khi đọc', 'Rẻ', 'Đắt (tìm mọi người đang theo dõi, gộp, sắp xếp)'],
        ['2. Giữ “hộp thư” (cache) timeline cho mỗi người; khi đăng thì ghi vào cache của mọi follower', 'Đắt: 4,6k tweet/s thành ~345k lượt ghi/s (trung bình 75 follower; có người &gt;30 triệu follower)', 'Rẻ (đã tính sẵn)']
      ] },
      { t: 'p', x: 'Twitter bắt đầu với cách 1, không chịu nổi tải đọc nên chuyển sang cách 2 (đọc nhiều hơn đăng gần 2 bậc). Sau đó dùng <b>lai</b>: fan-out khi đăng cho đa số, trừ người nổi tiếng (tweet của họ được lấy riêng và gộp lúc đọc). Bài học: <b>phân bố số follower</b> là load parameter then chốt.' }
    ] },
    { icon: '⏱️', title: 'Mô tả hiệu năng: percentile', blocks: [
      { t: 'p', x: 'Hệ thống batch quan tâm <b>throughput</b>; hệ thống online quan tâm <b>response time</b> = service time + độ trễ mạng + <b>queueing delay</b>. <b>Latency</b> là thời gian yêu cầu <i>chờ</i> được phục vụ.' },
      { t: 'list', items: [
        'Đừng dùng trung bình; dùng <b>percentile</b>: trung vị p50 (nửa nhanh hơn, nửa chậm hơn), và p95, p99, p999 (<b>tail latency</b>).',
        'Amazon đặt yêu cầu ở p99.9 vì khách chậm nhất thường là khách hàng giá trị nhất; thêm 100 ms thời gian phản hồi giảm 1% doanh số. Tối ưu p99.99 thì quá đắt, lợi ích giảm dần.',
        '<b>SLO/SLA</b>: ví dụ trung vị &lt; 200 ms, p99 &lt; 1 s, uptime ≥ 99,9%.',
        '<b>Head-of-line blocking</b>: vài request chậm chặn các request sau ⇒ phải đo phía client. Khi kiểm thử tải, client phải gửi request độc lập, không chờ request trước.',
        '<b>Tail latency amplification</b>: một request người dùng gọi nhiều backend; chỉ cần một call chậm là cả request chậm.',
        'Tính percentile liên tục dùng cửa sổ trượt; xấp xỉ bằng forward decay, t-digest, HdrHistogram. <b>Trung bình các percentile là vô nghĩa</b> — hãy cộng histogram.'
      ] },
      { t: 'widget', name: 'tail-latency', title: 'Khuếch đại độ trễ đuôi: bao nhiêu request người dùng bị chậm?' }
    ] },
    { icon: '↔️', title: 'Đối phó với tải tăng', blocks: [
      { t: 'list', items: [
        '<b>Scale up</b> (dọc: máy mạnh hơn) và <b>scale out</b> (ngang: nhiều máy nhỏ, kiến trúc shared-nothing). Thực tế là pha trộn; vài máy khá mạnh có thể đơn giản và rẻ hơn rất nhiều VM nhỏ.',
        '<b>Elastic</b> (tự thêm tài nguyên) hữu ích khi tải khó đoán; hệ thống chỉnh tay đơn giản hơn, ít bất ngờ vận hành.',
        'Dịch vụ stateless dễ phân tán; hệ thống stateful từ một node sang phân tán rất phức tạp ⇒ “khôn ngoan truyền thống”: giữ DB trên một node đến khi bắt buộc.',
        'Không có “magic scaling sauce”: 100.000 req/s × 1 kB khác hẳn 3 req/phút × 2 GB dù cùng throughput. Kiến trúc dựa trên giả định thao tác nào phổ biến/hiếm; sai giả định thì phí công hoặc phản tác dụng. Startup chưa kiểm chứng nên ưu tiên lặp nhanh hơn là scale cho tải tưởng tượng.'
      ] }
    ] },
    { icon: '🔧', title: 'Khả năng bảo trì', blocks: [
      { t: 'p', x: 'Phần lớn chi phí phần mềm nằm ở bảo trì, không phải phát triển ban đầu. Để tránh tạo ra phần mềm legacy, chú ý ba nguyên tắc:' },
      { t: 'table', head: ['Nguyên tắc', 'Ý nghĩa', 'Làm thế nào'], rows: [
        ['<b>Operability</b>', 'Giúp đội vận hành giữ hệ thống chạy trơn tru', 'Giám sát, tự động hoá, không phụ thuộc máy riêng lẻ, tài liệu và mô hình vận hành dễ hiểu (“nếu tôi làm X thì Y xảy ra”), mặc định tốt, tự chữa nhưng cho phép điều khiển tay, hành vi dự đoán được'],
        ['<b>Simplicity</b>', 'Giúp kỹ sư mới hiểu hệ thống bằng cách loại bỏ độ phức tạp', 'Loại bỏ <b>accidental complexity</b> (không vốn có trong bài toán mà do cách cài đặt) bằng <b>abstraction</b> tốt (ví dụ SQL che giấu cấu trúc đĩa, đồng thời, crash). Triệu chứng: bùng nổ không gian trạng thái, ghép nối chặt, phụ thuộc rối, đặt tên không nhất quán, hack hiệu năng, special case'],
        ['<b>Evolvability</b>', 'Dễ thay đổi cho yêu cầu mới', 'Tương tự Agile (TDD, refactoring) nhưng ở quy mô hệ thống dữ liệu. Liên quan chặt tới sự đơn giản và abstraction']
      ] },
      { t: 'key', x: '“Vận hành tốt có thể bù cho phần mềm kém, nhưng phần mềm tốt không thể chạy tin cậy với vận hành kém.” Big ball of mud là dự án sa lầy trong độ phức tạp.' }
    ] }
  ],
  summary: [
    'Ứng dụng nặng dữ liệu = ghép database, cache, search index, stream, batch; bạn trở thành nhà thiết kế hệ thống dữ liệu.',
    'Reliability: chịu fault (phần cứng ngẫu nhiên, phần mềm có tương quan, lỗi con người) để không thành failure.',
    'Scalability: mô tả tải bằng load parameters (fan-out Twitter), đo hiệu năng bằng percentile, không dùng trung bình.',
    'Không có kiến trúc scale “thần kỳ”; tùy giả định về thao tác phổ biến.',
    'Maintainability: operability, simplicity (loại accidental complexity), evolvability.'
  ],
  cards: [
    ['Ứng dụng data-intensive là gì?', 'Vấn đề chính là lượng dữ liệu, độ phức tạp, tốc độ thay đổi — không phải CPU.'],
    ['Ba mối quan tâm chính?', 'Reliability, Scalability, Maintainability.'],
    ['Fault vs failure?', 'Fault: một thành phần lệch đặc tả; failure: cả hệ thống ngừng phục vụ.'],
    ['Vì sao Chaos Monkey cố tình giết tiến trình?', 'Để luôn kiểm thử cơ chế chịu lỗi.'],
    ['MTTF ổ cứng 10–50 năm, cụm 10.000 ổ?', '≈ 1 ổ hỏng mỗi ngày.'],
    ['Vì sao lỗi phần mềm nguy hiểm hơn phần cứng?', 'Có tương quan giữa các node ⇒ gây failure đồng loạt.'],
    ['Nguyên nhân hàng đầu gây gián đoạn?', 'Lỗi cấu hình của con người.'],
    ['Load parameter là gì?', 'Số mô tả tải: req/s, tỷ lệ đọc/ghi, user đồng thời, hit rate…'],
    ['Fan-out?', 'Số yêu cầu/ghi phát sinh cho mỗi yêu cầu đầu vào (Twitter: followers).'],
    ['Hai cách làm timeline Twitter?', 'JOIN khi đọc; hoặc ghi vào cache mỗi follower khi đăng (rồi lai).'],
    ['Latency vs response time?', 'Latency: thời gian chờ được phục vụ; response time: toàn bộ thời gian client thấy.'],
    ['Vì sao dùng percentile?', 'Trung bình không cho biết bao nhiêu người chịu độ trễ đó.'],
    ['Tail latency amplification?', 'Một request gọi nhiều backend, chỉ cần một call chậm là cả request chậm.'],
    ['Có nên lấy trung bình các percentile?', 'Không — cộng histogram.'],
    ['Accidental complexity?', 'Độ phức tạp không vốn có trong bài toán, chỉ sinh ra từ cài đặt; giảm bằng abstraction.']
  ],
  quiz: [
    { q: 'Sự khác nhau giữa fault và failure:', o: ['Giống nhau', 'Fault là thành phần lệch spec, failure là cả hệ thống ngừng phục vụ', 'Failure nhỏ hơn fault', 'Fault chỉ phần mềm'], a: 1, e: 'Chịu fault để không thành failure.' },
    { q: 'Cụm 10.000 ổ với MTTF 10–50 năm sẽ hỏng khoảng:', o: ['1 ổ/năm', '1 ổ/tháng', '1 ổ/ngày', '100 ổ/ngày'], a: 2, e: 'Phần cứng hỏng liên tục ở quy mô lớn.' },
    { q: 'Vì sao bug phần mềm gây nhiều failure hơn phần cứng?', o: ['Phần cứng quá tốt', 'Lỗi tương quan giữa các node', 'Phần mềm chậm', 'Do mạng'], a: 1, e: 'Ví dụ leap second.' },
    { q: 'Nguyên nhân hàng đầu của gián đoạn trong nghiên cứu được trích:', o: ['Phần cứng', 'Cấu hình sai của người vận hành', 'Cháy datacenter', 'Hacker'], a: 1, e: 'Phần cứng chỉ 10–25%.' },
    { q: 'Cách 2 của Twitter làm tăng việc gì?', o: ['Đọc', 'Ghi khi đăng (fan-out)', 'Xoá', 'Sắp xếp'], a: 1, e: '4,6k → ~345k ghi/s.' },
    { q: 'Vì sao Twitter chuyển sang cách lai?', o: ['Chi phí', 'Người nổi tiếng có hàng chục triệu follower làm fan-out quá lớn', 'Luật', 'Lỗi'], a: 1, e: 'Celebrity tweet lấy khi đọc.' },
    { q: 'Metric tốt nhất để biết thời gian chờ “điển hình”:', o: ['Trung bình', 'Trung vị (p50)', 'Tối đa', 'Tổng'], a: 1, e: 'Mean không cho biết bao nhiêu người chịu.' },
    { q: 'p99 = 1,5 s nghĩa là:', o: ['99% request mất 1,5 s', '99% request nhanh hơn 1,5 s', '1% nhanh hơn 1,5 s', 'Trung bình 1,5 s'], a: 1, e: 'Ngưỡng của phân vị.' },
    { q: 'Head-of-line blocking:', o: ['Request đầu hàng chặn các request sau', 'Mất gói tin', 'Lỗi DNS', 'Tràn bộ nhớ'], a: 0, e: 'Đo phía client.' },
    { q: 'Cách tổng hợp đúng response time từ nhiều máy:', o: ['Trung bình các p99', 'Cộng histogram', 'Lấy max', 'Lấy min'], a: 1, e: 'Trung bình percentile vô nghĩa.' },
    { q: 'Accidental complexity giảm bằng:', o: ['Thêm tính năng', 'Abstraction tốt', 'Thêm người', 'Viết tài liệu dài'], a: 1, e: 'Ví dụ SQL.' },
    { q: 'Ba nguyên tắc maintainability:', o: ['Speed, Cost, Quality', 'Operability, Simplicity, Evolvability', 'CAP', 'ACID'], a: 1, e: 'Từ sách.' }
  ],
  match: [
    ['Fault tolerance', 'Chịu một số loại lỗi để tránh failure'],
    ['p99', 'Ngưỡng mà 99% request nhanh hơn'],
    ['Fan-out', 'Số thao tác phát sinh cho mỗi request'],
    ['Scale out', 'Phân tán tải lên nhiều máy'],
    ['Chaos Monkey', 'Cố ý giết tiến trình để kiểm thử'],
    ['Accidental complexity', 'Phức tạp do cài đặt'],
    ['SLA', 'Hợp đồng về hiệu năng và uptime']
  ]
});
