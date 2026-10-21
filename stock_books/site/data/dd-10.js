// Designing Data-Intensive Applications – Chương 10: Xử lý theo lô (Batch Processing).
BOOK_DATA.ddia.chapters.push({
  n: 10,
  title: 'Xử lý theo lô (Batch Processing)',
  intro: 'Ba loại hệ thống: dịch vụ online, xử lý theo lô (offline), xử lý luồng (near-real-time). Chương này đi từ công cụ Unix (awk, sort, uniq) đến <b>MapReduce</b> và HDFS, các thuật toán join (sort-merge, broadcast hash, partitioned hash), đầu ra của batch, so sánh Hadoop với CSDL phân tán, rồi <b>dataflow engine</b> (Spark, Tez, Flink), xử lý đồ thị (Pregel) và API cấp cao.',
  sections: [
    { icon: '🧰', title: 'Xử lý theo lô với công cụ Unix', blocks: [
      { t: 'table', head: ['Loại hệ thống', 'Đặc điểm', 'Thước đo'], rows: [
        ['<b>Service</b> (online)', 'Chờ request, xử lý nhanh nhất có thể, trả response', 'Thời gian phản hồi, tính sẵn sàng'],
        ['<b>Batch</b> (offline)', 'Đầu vào lớn → chạy job → đầu ra; thường chạy định kỳ (phút đến nhiều ngày)', 'Throughput'],
        ['<b>Stream</b> (near-real-time)', 'Xử lý sự kiện ngay sau khi xảy ra, độ trễ thấp hơn batch (chương 11)', 'Độ trễ']
      ] },
      { t: 'p', x: 'Phân tích log nginx: <code>cat access.log | awk \'{print $7}\' | sort | uniq -c | sort -r -n | head -n 5</code> cho 5 trang phổ biến nhất — xử lý hàng GB trong vài giây. So với chương trình Ruby giữ <b>hash table trong bộ nhớ</b> (đủ nếu số URL khác nhau nhỏ), pipeline Unix dựa trên <b>sắp xếp</b>: nếu working set lớn hơn RAM, sort tràn ra đĩa (mergesort tuần tự — giống SSTable/LSM) và tự song song nhiều lõi.' },
      { t: 'key', x: '<b>Triết lý Unix</b> (McIlroy, 1964/1978): (1) mỗi chương trình làm tốt một việc; (2) đầu ra của chương trình này là đầu vào của chương trình chưa biết khác; (3) thiết kế để thử sớm, vứt bỏ phần vụng về; (4) dùng công cụ thay vì sức người. Nghe giống Agile/DevOps.' },
      { t: 'list', items: [
        '<b>Giao diện thống nhất</b>: file (chuỗi byte có thứ tự) = file thật, ống, socket, thiết bị. Quy ước text với \\n phân cách bản ghi. (Tương tự URL và HTTP của web; tránh “Balkan hoá” dữ liệu.)',
        '<b>Tách logic khỏi nối dây</b> (stdin/stdout): chương trình không quan tâm đầu vào/ra đi đâu — nối lỏng, ràng buộc muộn, đảo ngược điều khiển.',
        '<b>Minh bạch và thử nghiệm</b>: đầu vào bất biến, chạy lại bao nhiêu lần cũng được; dừng pipeline tại bất kỳ chỗ nào xem bằng less; ghi đầu ra tạm để chạy lại giai đoạn sau.',
        'Hạn chế lớn: chỉ chạy trên <b>một máy</b> — chỗ Hadoop xuất hiện.'
      ] }
    ] },
    { icon: '🗂️', title: 'MapReduce và hệ thống file phân tán', blocks: [
      { t: 'p', x: 'MapReduce ≈ công cụ Unix phân tán trên hàng nghìn máy: tiến trình không sửa đầu vào, không tác dụng phụ ngoài đầu ra, tệp đầu ra ghi một lần tuần tự. Thay stdin/stdout bằng file trên hệ thống file phân tán. <b>HDFS</b> (tái hiện Google File System): shared-nothing (khác NAS/SAN shared-disk), daemon trên mỗi máy, <b>NameNode</b> theo dõi khối nằm ở máy nào, nhân bản khối hoặc <b>erasure coding</b> (Reed–Solomon) như RAID nhưng qua mạng thường; mở rộng đến hàng chục nghìn máy, hàng trăm PB. Các hệ khác: GlusterFS, QFS; object store S3, Azure Blob, Swift tương tự.' },
      { t: 'steps', items: [
        'Đọc file đầu vào, tách thành bản ghi (input format parser).',
        '<b>Mapper</b>: gọi cho mỗi bản ghi, trích key–value, có thể phát nhiều cặp hoặc không; không giữ trạng thái giữa các bản ghi.',
        '<b>Shuffle</b>: phân vùng đầu ra mapper theo hash của key theo reducer, sắp xếp mỗi phân vùng vào file trên đĩa cục bộ của mapper (kỹ thuật như SSTable); reducer tải về các file của mình từ các mapper và hợp nhất giữ thứ tự (từ “shuffle” gây hiểu lầm — không ngẫu nhiên).',
        '<b>Reducer</b>: gọi với một key và iterator qua mọi giá trị của key đó (đã kề nhau nhờ sắp xếp); phát bản ghi đầu ra, ghi vào HDFS (kèm bản sao).'
      ] },
      { t: 'widget', name: 'mapreduce-wc', title: 'Mô phỏng MapReduce: đếm từ (map → shuffle → reduce)' },
      { t: 'list', items: [
        'Số mapper = số khối của file đầu vào; scheduler chạy mapper trên máy lưu bản sao (<b>đưa tính toán gần dữ liệu</b>); số reducer do người viết job cấu hình. Framework copy mã (JAR) tới các máy.',
        '<b>Workflow</b>: một job thường không đủ (ví dụ top URL cần job thứ hai để xếp hạng); chuỗi job qua tên thư mục HDFS; chỉ job sau khi job trước thành công. Công cụ lập lịch: Oozie, Azkaban, Luigi, Airflow, Pinball; công cụ cấp cao Pig, Hive, Cascading, Crunch, FlumeJava tự nối các giai đoạn. Workflow 50–100 job phổ biến trong hệ gợi ý.'
      ] }
    ] },
    { icon: '🔗', title: 'Reduce-side join và GROUP BY', blocks: [
      { t: 'p', x: 'MapReduce không có chỉ mục — mỗi job đọc cả đầu vào (full table scan), hợp lý cho phân tích tổng hợp trên nhiều bản ghi. Ví dụ: join log sự kiện hoạt động (fact table) với CSDL người dùng (dimension) để biết trang nào được nhóm tuổi nào xem. Truy vấn từng user từ xa cho mỗi sự kiện sẽ rất chậm (giới hạn bởi RTT), nhạy phân phối cache, có thể làm quá tải DB và không xác định — nên <b>sao chép CSDL người dùng vào cùng HDFS</b> bằng ETL.' },
      { t: 'key', x: '<b>Sort-merge join</b>: một nhóm mapper đọc log (key = user ID, value = sự kiện), nhóm khác đọc bảng người dùng (key = user ID, value = ngày sinh). Sau phân vùng + sắp xếp, mọi bản ghi cùng user ID kề nhau trong đầu vào reducer; với <b>secondary sort</b> bản ghi người dùng đến trước, rồi sự kiện theo thời gian. Reducer chỉ giữ một bản ghi người dùng trong bộ nhớ và không truy vấn mạng. Mapper “gửi thông điệp” cho reducer: key như địa chỉ đích.' },
      { t: 'list', items: [
        '<b>GROUP BY</b> tương tự: đặt khoá nhóm làm key của mapper; reducer thực hiện COUNT, SUM, top-k. <b>Sessionization</b>: gom mọi sự kiện của một user (session cookie/ID) từ nhiều server để theo dõi chuỗi hành động (A/B testing).',
        '<b>Xử lý skew</b> (hot key / linchpin object — người nổi tiếng hàng triệu follower làm một reducer chậm nhất kéo cả job): <b>skewed join</b> của Pig lấy mẫu để tìm hot key rồi rải bản ghi hot key lên nhiều reducer ngẫu nhiên và nhân bản đầu vào còn lại cho mọi reducer đó; <b>sharded join</b> (Crunch) chỉ định hot key tường minh; Hive lưu hot key riêng và dùng map-side join; gom nhóm trên hot key làm hai giai đoạn (giai đoạn đầu gửi ngẫu nhiên và tổng hợp từng phần, giai đoạn sau gộp).'
      ] }
    ] },
    { icon: '🗺️', title: 'Map-side join', blocks: [
      { t: 'p', x: 'Reduce-side join không giả định gì về đầu vào nhưng tốn: sắp xếp, copy, hợp nhất, có thể ghi đĩa nhiều lần. Nếu biết thêm về dữ liệu thì dùng <b>map-side join</b>: job cắt gọn không reducer, không sắp xếp; mỗi mapper đọc một khối đầu vào và ghi một file đầu ra.' },
      { t: 'table', head: ['Kiểu', 'Điều kiện', 'Cách làm'], rows: [
        ['<b>Broadcast hash join</b>', 'Một đầu vào đủ nhỏ để vào bộ nhớ mỗi mapper', 'Mapper nạp đầu vào nhỏ vào hash table rồi quét đầu vào lớn tra bảng (Pig “replicated join”, Hive MapJoin, Cascading, Crunch, Impala); hoặc lưu vào chỉ mục chỉ-đọc trên đĩa nhờ page cache'],
        ['<b>Partitioned hash join</b> (bucketed map join trong Hive)', 'Hai đầu vào phân vùng giống nhau (cùng khoá, cùng hàm hash, cùng số phân vùng)', 'Mỗi mapper chỉ nạp phân vùng tương ứng của đầu vào nhỏ'],
        ['<b>Map-side merge join</b>', 'Cả hai đầu vào phân vùng và sắp xếp theo cùng khoá', 'Mapper hợp nhất tuần tự như reducer, không cần vừa RAM']
      ] },
      { t: 'tip', x: 'Đầu ra reduce-side join phân vùng và sắp xếp theo khoá join; đầu ra map-side join phân vùng/sắp xếp như đầu vào lớn. Cần biết bố cục vật lý của dataset (số phân vùng, khoá) — metadata này lưu trong HCatalog và Hive metastore.' }
    ] },
    { icon: '📤', title: 'Đầu ra của workflow batch', blocks: [
      { t: 'list', items: [
        'Không phải OLTP cũng không hẳn analytics (đầu ra thường không phải báo cáo). Ví dụ: <b>xây search index</b> (Google dùng 5–10 job MapReduce; mapper chia tài liệu, mỗi reducer xây chỉ mục phân vùng theo tài liệu; file chỉ mục bất biến; chạy lại toàn bộ rồi thay thế, hoặc xây tăng dần như Lucene); <b>hệ thống học máy / gợi ý</b> (người có thể quen, sản phẩm liên quan).',
        '<b>Đưa kết quả vào CSDL sản xuất</b>: ghi từng bản ghi từ mapper/reducer là ý tồi (RTT từng bản ghi, nhiều task song song làm quá tải DB, tác dụng phụ nhìn thấy được từ job chạy dở và task speculative). Cách tốt: <b>xây CSDL mới ngay trong job</b>, ghi thành file bất biến trong thư mục đầu ra rồi nạp hàng loạt vào máy chủ chỉ-đọc (Voldemort, Terrapin, ElephantDB, HBase bulk load); máy chủ vẫn phục vụ file cũ và chuyển nguyên tử sang file mới, dễ chuyển ngược nếu sai.',
        '<b>Triết lý đầu ra</b> (như Unix): đầu vào bất biến, đầu ra thay thế hoàn toàn, không tác dụng phụ ⇒ chạy lại thoải mái, rollback code là xong (khác DB đọc-ghi: sửa code không sửa được dữ liệu xấu); gọi là <b>human fault tolerance</b>; phát triển nhanh vì sai lầm không gây hư hại không thể đảo ngược; retry task tự động an toàn; cùng file làm đầu vào cho nhiều job (cả job giám sát so sánh đầu ra); tách logic khỏi wiring.',
        'Khác Unix: thay vì text không kiểu, Hadoop dùng định dạng có cấu trúc như Avro và Parquet với tiến hoá lược đồ.'
      ] }
    ] },
    { icon: '⚖️', title: 'Hadoop vs cơ sở dữ liệu phân tán (MPP)', blocks: [
      { t: 'p', x: 'MapReduce không mới: MPP database (Gamma, Teradata, Tandem NonStop SQL) đã có các thuật toán join song song hơn một thập kỷ trước. Khác biệt: MPP tập trung chạy truy vấn SQL phân tích song song; MapReduce + DFS giống một hệ điều hành đa dụng chạy chương trình tuỳ ý.' },
      { t: 'table', head: ['', 'MPP database', 'Hadoop (HDFS + MapReduce)'], rows: [
        ['Lưu trữ', 'Mô hình hoá dữ liệu tỉ mỉ trước khi nạp (định dạng riêng)', '<b>Đa dạng</b>: file là chuỗi byte, bất kỳ mô hình/mã hoá; “data lake”, <b>sushi principle: raw data is better</b> — schema-on-read, gánh nặng diễn giải chuyển sang người dùng'],
        ['Xử lý', 'Nguyên khối: bố cục đĩa, lập kế hoạch, thực thi tối ưu cho SQL', '<b>Đa mô hình</b>: SQL (Hive), học máy, chỉ mục tìm kiếm, phân tích ảnh… cùng chạy trên một cụm, cùng dữ liệu'],
        ['Chịu lỗi', 'Node chết ⇒ huỷ cả truy vấn rồi chạy lại (truy vấn vài giây–phút); giữ nhiều dữ liệu trong bộ nhớ', 'Thử lại ở mức từng task; ghi đĩa thường xuyên (đề phòng dữ liệu lớn hơn RAM)']
      ] },
      { t: 'key', x: 'Vì sao MapReduce chịu lỗi cực đoan? Không phải vì phần cứng kém tin cậy mà do <b>preemption</b> ở Google: job batch ưu tiên thấp có ~5% rủi ro bị giết trong một giờ để nhường tài nguyên cho tác vụ ưu tiên cao (gấp hơn 10 lần tỉ lệ lỗi phần cứng) — job 100 task × 10 phút có >50% khả năng một task bị kết thúc sớm. Tự do giết tiến trình cho phép tận dụng cụm tốt hơn. YARN, Mesos, Kubernetes ít dùng preemption nên thiết kế này kém ý nghĩa hơn.' }
    ] },
    { icon: '🚀', title: 'Vượt ra ngoài MapReduce: dataflow engine', blocks: [
      { t: 'p', x: 'Vấn đề của MapReduce: <b>materialization</b> mọi trạng thái trung gian ra HDFS (nhân bản dư thừa cho dữ liệu tạm); job sau chỉ chạy khi mọi task job trước xong (straggler); mapper thừa chỉ đọc lại file reducer vừa ghi. Unix pipe thì stream đầu ra sang đầu vào, chạy đồng thời với bộ đệm nhỏ.' },
      { t: 'key', x: '<b>Dataflow engine</b> (Spark, Tez, Flink; gốc từ Dryad, Nephele) xử lý cả workflow như <b>một job</b>, các hàm là <b>operators</b> được nối linh hoạt: phân vùng lại + sắp xếp (như shuffle), phân vùng cùng cách nhưng bỏ sắp xếp (partitioned hash join), hoặc gửi cùng đầu ra cho mọi phân vùng (broadcast). Ưu điểm: chỉ sắp xếp khi cần; không có mapper thừa; scheduler biết mọi phụ thuộc nên tối ưu vị trí (trao đổi qua bộ nhớ chia sẻ); trạng thái trung gian giữ trong RAM hoặc đĩa cục bộ; operator chạy ngay khi đầu vào sẵn sàng; tái dùng JVM. Pig/Hive/Cascading chuyển từ MapReduce sang Tez/Spark chỉ bằng cấu hình.' },
      { t: 'list', items: [
        '<b>Chịu lỗi</b>: không ghi trung gian ra HDFS nên <b>tính lại</b> từ dữ liệu còn lại: Spark dùng <b>RDD</b> theo dõi nguồn gốc; Flink checkpoint trạng thái operator. Cần operator <b>xác định</b> (deterministic) — nếu không phải giết cả các operator hạ nguồn; cẩn thận thứ tự hash table, số ngẫu nhiên (đặt seed), đồng hồ hệ thống. Nếu dữ liệu trung gian nhỏ hoặc phép tính nặng CPU thì materialize còn rẻ hơn tính lại.',
        'Flink xây quanh <b>pipelined execution</b>; sắp xếp luôn phải tiêu thụ hết đầu vào. Đầu vào/đầu ra cuối vẫn thường là HDFS.',
        '<b>Xử lý đồ thị lặp</b>: PageRank, transitive closure; “lặp đến khi xong” không biểu diễn được trong MapReduce một lượt (lập lịch ngoài chạy nhiều vòng, mỗi vòng đọc lại và ghi toàn bộ dữ liệu). <b>Mô hình Pregel / BSP</b> (Giraph, GraphX, Gelly): mỗi lần lặp gọi một hàm cho mỗi đỉnh với các thông điệp gửi tới nó; đỉnh nhớ trạng thái trong RAM giữa các vòng; thông điệp theo cạnh được giao đúng một lần ở vòng sau; chịu lỗi nhờ checkpoint cuối mỗi vòng. Chi phí thông điệp giữa các máy lớn; nếu đồ thị vừa một máy thì thuật toán một máy (GraphChi) có thể nhanh hơn.',
        '<b>API cấp cao</b> (join, group, filter, aggregate) cho phép dùng tương tác và <b>tối ưu hoá theo chi phí</b> (Hive, Spark, Flink chọn thuật toán join và thứ tự join); giữ khả năng chạy mã tuỳ ý (ưu thế so với UDF của DB). Thêm yếu tố khai báo: đọc cột (Parquet), vectorized execution, Spark sinh bytecode JVM, Impala dùng LLVM ⇒ batch và MPP ngày càng giống nhau. Chuyên biệt: Mahout, MADlib (học máy), k-nearest neighbors, tìm kiếm tương tự bộ gen.'
      ] }
    ] }
  ],
  summary: [
    'Batch đọc dữ liệu có hạn (bounded), tạo đầu ra dẫn xuất, không sửa đầu vào; hiệu quả đo bằng throughput.',
    'MapReduce = mapper + shuffle (phân vùng, sắp xếp) + reducer trên HDFS; kế thừa triết lý Unix.',
    'Join: sort-merge (reduce-side), broadcast hash, partitioned hash, map-side merge; xử lý skew cho hot key.',
    'Đầu ra tốt nhất là file bất biến nạp hàng loạt; human fault tolerance.',
    'Dataflow engine (Spark, Tez, Flink) tránh materialize trung gian, tính lại để chịu lỗi (cần deterministic); Pregel cho đồ thị; ngày càng khai báo và giống MPP.'
  ],
  cards: [
    ['Batch vs online vs stream?', 'Batch: input hữu hạn, offline, throughput; online: request/response; stream: xử lý sự kiện gần real-time.'],
    ['Triết lý Unix?', 'Mỗi chương trình làm tốt một việc; đầu ra thành đầu vào chương trình khác; thử sớm, vứt phần vụng.'],
    ['Giao diện thống nhất của Unix?', 'File (chuỗi byte) và ống.'],
    ['Sorting vs hash table cho đếm URL?', 'Hash table nhanh nếu working set nhỏ; sort tràn ra đĩa tốt khi lớn.'],
    ['HDFS?', 'Hệ file phân tán shared-nothing, NameNode theo dõi khối, nhân bản hoặc erasure coding.'],
    ['Mapper làm gì?', 'Trích key–value từ mỗi bản ghi, không giữ trạng thái.'],
    ['Shuffle?', 'Phân vùng theo key, sắp xếp, copy từ mapper đến reducer.'],
    ['Reducer làm gì?', 'Nhận key và iterator qua các giá trị cùng key rồi phát đầu ra.'],
    ['Đưa tính toán gần dữ liệu?', 'Chạy mapper trên máy lưu bản sao khối đầu vào.'],
    ['Sort-merge join?', 'Mapper phát key=join key; sắp xếp đưa bản ghi hai phía kề nhau cho reducer.'],
    ['Secondary sort?', 'Sắp xếp để bản ghi người dùng đến reducer trước sự kiện.'],
    ['Sessionization?', 'Gom sự kiện của một user/session bằng group by.'],
    ['Hot key giải quyết thế nào?', 'Rải hot key lên nhiều reducer (skewed join), gom nhóm hai giai đoạn.'],
    ['Broadcast hash join?', 'Nạp đầu vào nhỏ vào hash table ở mọi mapper, quét đầu vào lớn.'],
    ['Partitioned hash join?', 'Hai đầu vào phân vùng giống nhau, mỗi mapper chỉ nạp phân vùng tương ứng.'],
    ['Map-side merge join?', 'Hai đầu vào phân vùng và sắp xếp giống nhau, hợp nhất tuần tự.'],
    ['Vì sao không ghi thẳng từng bản ghi vào DB từ job?', 'Chậm, quá tải DB, tác dụng phụ từ job dở dang.'],
    ['Human fault tolerance?', 'Sửa code và chạy lại để sửa dữ liệu sai, vì đầu vào bất biến.'],
    ['Sushi principle?', 'Dữ liệu thô tốt hơn — mô hình hoá sau.'],
    ['Vì sao MapReduce chịu lỗi nhiều?', 'Preemption ở Google: ~5% rủi ro bị giết mỗi giờ.'],
    ['Materialization?', 'Ghi trạng thái trung gian ra file (HDFS).'],
    ['RDD của Spark?', 'Theo dõi nguồn gốc dữ liệu để tính lại khi mất.'],
    ['Mô hình Pregel?', 'Mỗi vòng gọi hàm cho mỗi đỉnh với thông điệp; đỉnh nhớ trạng thái; checkpoint cuối vòng.']
  ],
  quiz: [
    { q: 'Thước đo hiệu năng chính của batch job:', o: ['Response time', 'Throughput', 'Availability', 'Latency p99'], a: 1, e: 'Thời gian xử lý tập dữ liệu có kích thước nhất định.' },
    { q: 'Pipeline Unix thực hiện “reduce” bằng:', o: ['sort', 'uniq -c sau khi sort', 'head', 'cat'], a: 1, e: 'Sort đưa key kề nhau.' },
    { q: 'Mapper trong MapReduce:', o: ['Giữ trạng thái giữa bản ghi', 'Xử lý từng bản ghi độc lập', 'Ghi vào DB', 'Sắp xếp'], a: 1, e: 'Không giữ trạng thái.' },
    { q: 'Shuffle phân vùng theo:', o: ['Ngẫu nhiên', 'Hash của key', 'Kích thước', 'Giờ'], a: 1, e: 'Cùng key về cùng reducer.' },
    { q: 'Vì sao MapReduce sắp xếp?', o: ['Đẹp', 'Đưa cùng key kề nhau cho reducer', 'Giảm RAM mapper', 'Nén'], a: 1, e: 'Cũng cho secondary sort.' },
    { q: 'Join nào phù hợp khi một đầu vào nhỏ?', o: ['Sort-merge', 'Broadcast hash', 'Nested loop', 'Cartesian'], a: 1, e: 'Mapper nạp vào hash table.' },
    { q: 'Điều kiện của map-side merge join:', o: ['Đầu vào nhỏ', 'Hai đầu vào phân vùng và sắp xếp giống nhau', 'Không cần', 'Cùng kích thước'], a: 1, e: 'Không cần vừa RAM.' },
    { q: 'Hot key khiến:', o: ['Mapper chậm', 'Một reducer xử lý quá nhiều (skew)', 'HDFS đầy', 'Mất dữ liệu'], a: 1, e: 'Job chờ reducer chậm nhất.' },
    { q: 'Cách tốt đưa đầu ra batch vào DB phục vụ:', o: ['Ghi từng bản ghi từ reducer', 'Xây file DB trong job rồi nạp hàng loạt, đổi nguyên tử', 'Dùng email', 'Ghi cron'], a: 1, e: 'Voldemort, HBase bulk load.' },
    { q: 'Human fault tolerance nghĩa là:', o: ['Người không mắc lỗi', 'Sửa code và chạy lại để khôi phục dữ liệu', 'Có quản trị viên', 'Backup'], a: 1, e: 'Nhờ đầu vào bất biến và đầu ra thay thế.' },
    { q: 'Sushi principle:', o: ['Thích cá', 'Dữ liệu thô tốt hơn', 'Nén tốt', 'Schema trước'], a: 1, e: 'Schema-on-read.' },
    { q: 'MapReduce chịu lỗi nhiều vì:', o: ['Phần cứng tệ', 'Preemption tài nguyên', 'Mạng chậm', 'Java'], a: 1, e: '5% mỗi giờ.' },
    { q: 'Điểm yếu materialization của MapReduce:', o: ['Không bền', 'Job sau phải chờ mọi task trước xong', 'Quá ít I/O', 'Không nhân bản'], a: 1, e: 'Straggler và mapper thừa.' },
    { q: 'Spark chịu lỗi bằng cách:', o: ['Nhân bản trung gian', 'Tính lại theo RDD', 'Bỏ qua', 'Ghi HDFS'], a: 1, e: 'Cần operator xác định.' },
    { q: 'Pregel khác MapReduce ở chỗ:', o: ['Không có thông điệp', 'Đỉnh nhớ trạng thái giữa các vòng', 'Chỉ một vòng', 'Không chịu lỗi'], a: 1, e: 'Và chỉ xử lý thông điệp mới.' }
  ],
  match: [
    ['HDFS', 'Hệ file phân tán shared-nothing'],
    ['Sort-merge join', 'Reduce-side join theo key'],
    ['Broadcast hash join', 'Đầu vào nhỏ nạp vào mọi mapper'],
    ['RDD', 'Theo dõi nguồn gốc để tính lại'],
    ['Pregel', 'Xử lý đồ thị BSP'],
    ['Materialization', 'Ghi trạng thái trung gian ra file'],
    ['Data lake', 'Dữ liệu thô, mô hình hoá sau']
  ]
});
