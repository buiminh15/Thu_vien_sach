// Designing Data-Intensive Applications – Chương 3: Lưu trữ và truy xuất.
BOOK_DATA.ddia.chapters.push({
  n: 3,
  title: 'Lưu trữ và truy xuất (storage engine)',
  intro: 'Cách database lưu dữ liệu và tìm lại nó. Chương này đi từ “CSDL đơn giản nhất” (append-only log) đến chỉ mục băm, <b>SSTable/LSM-tree</b>, <b>B-tree</b>, các loại chỉ mục khác, CSDL in-memory, rồi phân biệt <b>OLTP</b> và <b>OLAP</b> (data warehouse, lưu trữ theo cột).',
  sections: [
    { icon: '📜', title: 'CSDL đơn giản nhất: append-only log', blocks: [
      { t: 'p', x: 'Hai hàm Bash: <code>db_set</code> thêm “key,value” vào cuối file, <code>db_get</code> dùng grep rồi lấy dòng cuối. Ghi nhanh (append là thao tác ghi đơn giản nhất) nhưng đọc là <b>O(n)</b> vì phải quét cả file. Rất nhiều CSDL thật dùng <b>log</b> (chuỗi bản ghi chỉ-thêm) ở bên trong.' },
      { t: 'key', x: '<b>Chỉ mục (index)</b> là cấu trúc phụ sinh ra từ dữ liệu gốc, làm tăng tốc đọc nhưng <b>làm chậm ghi</b> (phải cập nhật chỉ mục). Vì vậy CSDL thường không index mọi thứ mặc định; bạn chọn dựa trên mẫu truy vấn.' }
    ] },
    { icon: '#️⃣', title: 'Chỉ mục băm (Hash index) – Bitcask', blocks: [
      { t: 'p', x: 'Giữ trong RAM một hash map: key → byte offset trong file dữ liệu. Ghi: append rồi cập nhật offset. Đọc: tra offset, seek, đọc. Đây là Bitcask (engine mặc định của Riak): đọc/ghi nhanh nhưng <b>mọi key phải vừa RAM</b> (value thì không cần). Phù hợp khi mỗi key được cập nhật thường xuyên nhưng không có quá nhiều key khác nhau (ví dụ đếm lượt xem video).' },
      { t: 'list', items: [
        '<b>Phân đoạn (segment) + nén gọn (compaction)</b>: đóng segment khi đủ lớn, ghi tiếp vào segment mới; compaction bỏ khoá trùng, giữ giá trị mới nhất; có thể hợp nhất nhiều segment; làm ở luồng nền, đọc/ghi vẫn dùng segment cũ rồi chuyển sang segment mới.',
        'Chi tiết thực tế: định dạng nhị phân (độ dài + dữ liệu), <b>tombstone</b> để xoá, phục hồi sau crash (lưu snapshot hash map), bản ghi ghi dở (checksum), điều khiển đồng thời (một luồng ghi, nhiều luồng đọc).',
        '<b>Vì sao append-only tốt?</b> Ghi tuần tự nhanh hơn ngẫu nhiên (nhất là HDD); đồng thời và phục hồi crash đơn giản (không bị file ghi đè nửa chừng); compaction chống phân mảnh.',
        'Hạn chế: bảng băm phải vừa RAM (bảng băm trên đĩa khó); <b>truy vấn khoảng</b> (range) không hiệu quả.'
      ] }
    ] },
    { icon: '🧱', title: 'SSTable và LSM-tree', blocks: [
      { t: 'key', x: '<b>SSTable</b> (Sorted String Table): segment được sắp xếp theo key, mỗi key chỉ xuất hiện một lần trong segment đã hợp nhất. Ưu điểm: (1) hợp nhất đơn giản, hiệu quả như mergesort kể cả file lớn hơn RAM (giữ giá trị của segment mới nhất khi trùng khoá); (2) chỉ cần chỉ mục <b>thưa</b> trong RAM (một key mỗi vài KB) vì có thể quét từ offset gần nhất; (3) gom các bản ghi thành khối và nén, tiết kiệm đĩa và băng thông I/O.' },
      { t: 'steps', items: [
        'Ghi mới đi vào cây cân bằng trong RAM (red-black/AVL) gọi là <b>memtable</b>.',
        'Khi memtable quá ngưỡng (vài MB), ghi ra đĩa thành một SSTable mới (đã sắp xếp sẵn nhờ cây); trong lúc đó ghi tiếp vào memtable mới.',
        'Đọc: tìm trong memtable, rồi segment mới nhất, rồi cũ hơn…',
        'Nền: hợp nhất và compaction segment, loại bỏ giá trị bị ghi đè/xoá.',
        'Để chống mất memtable khi crash, ghi thêm một <b>log không sắp xếp</b> trên đĩa (dùng để khôi phục memtable); bỏ log khi memtable đã xuống SSTable.'
      ] },
      { t: 'p', x: 'Thuật toán này là <b>LSM-tree</b> (Log-Structured Merge-Tree, O’Neil et al.) — dùng trong LevelDB, RocksDB, Cassandra, HBase (cảm hứng từ Bigtable, nơi có thuật ngữ SSTable/memtable). Lucene (Elasticsearch, Solr) lưu từ điển thuật ngữ → <b>postings list</b> theo cách tương tự.' },
      { t: 'list', items: [
        '<b>Bloom filter</b>: cấu trúc xác suất tiết kiệm bộ nhớ cho biết một key <i>chắc chắn không có</i>, tránh đọc đĩa vô ích khi tra key không tồn tại.',
        '<b>Size-tiered</b> (HBase; SSTable nhỏ mới hợp vào lớn cũ) và <b>leveled compaction</b> (LevelDB/RocksDB; chia khoảng key thành SSTable nhỏ theo “tầng”, dùng ít đĩa hơn); Cassandra hỗ trợ cả hai.',
        'LSM-tree chạy tốt dù dữ liệu lớn hơn RAM; truy vấn khoảng hiệu quả (dữ liệu đã sắp xếp); throughput ghi cao nhờ ghi tuần tự.'
      ] }
    ] },
    { icon: '🌳', title: 'B-tree', blocks: [
      { t: 'p', x: 'B-tree (1970) là cấu trúc chỉ mục phổ biến nhất, chuẩn trong gần như mọi CSDL quan hệ. Cũng sắp xếp theo key, nhưng chia CSDL thành <b>trang cố định</b> (thường 4 KB), đọc/ghi từng trang — gần với phần cứng hơn. Mỗi trang chứa key và tham chiếu tới trang con; trang gốc là điểm bắt đầu; <b>branching factor</b> (số tham chiếu con mỗi trang) thường vài trăm.' },
      { t: 'list', items: [
        '<b>Cập nhật</b>: tìm trang lá, sửa, ghi lại trang. <b>Thêm key</b> mà trang đầy ⇒ tách thành hai trang nửa đầy và cập nhật trang cha ⇒ cây luôn cân bằng, độ sâu O(log n). Cây sâu 3–4 tầng đủ cho hầu hết CSDL (4 tầng, trang 4 KB, branching 500 ⇒ tới <b>256 TB</b>).',
        '<b>Độ tin cậy</b>: ghi đè trang tại chỗ; thao tác tách trang ghi nhiều trang ⇒ crash giữa chừng sinh trang mồ côi ⇒ dùng <b>write-ahead log (WAL / redo log)</b>: ghi mọi thay đổi vào log chỉ-thêm trước khi áp dụng vào cây. Điều khiển đồng thời bằng <b>latch</b> (khoá nhẹ).',
        '<b>Tối ưu</b>: copy-on-write (LMDB) thay WAL; viết tắt key ở trang trong để tăng branching (B+ tree); bố trí lá liên tiếp trên đĩa; con trỏ anh em giữa các trang lá; fractal tree mượn ý tưởng log-structured.'
      ] },
      { t: 'table', head: ['', 'LSM-tree', 'B-tree'], rows: [
        ['Điểm mạnh', 'Throughput ghi cao (ghi tuần tự, write amplification thường thấp hơn); nén tốt hơn, ít phân mảnh', 'Đọc thường nhanh; mỗi key ở đúng một nơi ⇒ hợp khoá phạm vi cho giao dịch; hiệu năng dễ đoán'],
        ['Điểm yếu', 'Compaction có thể cản trở đọc/ghi và gây độ trễ percentile cao; có thể không theo kịp tốc độ ghi ⇒ cần giám sát; mỗi key có thể có nhiều bản sao', 'Mỗi dữ liệu ghi ít nhất hai lần (WAL + trang); ghi cả trang dù chỉ đổi vài byte; phân mảnh, lãng phí không gian'],
        ['Write amplification', 'Một lần ghi gây nhiều lần ghi đĩa qua compaction — quan trọng với SSD (mòn)', 'WAL + trang + tách trang']
      ] },
      { t: 'widget', name: 'btree-capacity', title: 'Sức chứa B-tree: trang, branching factor, độ sâu' },
      { t: 'tip', x: 'Quy tắc ngón tay cái: LSM thường nhanh ghi hơn, B-tree nhanh đọc hơn — nhưng benchmark nhạy với khối lượng công việc, nên phải thử với workload thật.' }
    ] },
    { icon: '🔖', title: 'Các cấu trúc chỉ mục khác', blocks: [
      { t: 'list', items: [
        '<b>Chỉ mục thứ cấp (secondary index)</b>: key không duy nhất ⇒ mỗi giá trị là danh sách ID hàng, hoặc làm key duy nhất bằng cách nối ID hàng. Quan trọng để JOIN hiệu quả.',
        '<b>Heap file</b>: lưu hàng không thứ tự, chỉ mục trỏ vào; tránh nhân bản dữ liệu. <b>Clustered index</b> lưu hàng ngay trong chỉ mục (InnoDB: khoá chính; SQL Server: một clustered/bảng). <b>Covering index</b> (index with included columns): lưu một số cột trong chỉ mục để có thể trả lời truy vấn chỉ bằng chỉ mục.',
        '<b>Chỉ mục nhiều cột</b>: <b>concatenated index</b> (nối cột; như danh bạ (họ, tên) — vô dụng nếu tìm theo tên); <b>chỉ mục nhiều chiều</b> (R-tree trong PostGIS; hoặc đường cong lấp đầy không gian) cho truy vấn khoảng đồng thời nhiều cột (vĩ độ + kinh độ, hoặc (ngày, nhiệt độ), (R,G,B)).',
        '<b>Full-text và fuzzy index</b>: Lucene tìm từ trong khoảng cách chỉnh sửa (edit distance) bằng automaton hữu hạn (kiểu trie) chuyển thành Levenshtein automaton; mở rộng từ đồng nghĩa, biến thể ngữ pháp.',
        '<b>CSDL in-memory</b>: RAM rẻ dần. Memcached chỉ làm cache; VoltDB, MemSQL, Oracle TimesTen, RAMCloud, Redis, Couchbase đảm bảo bền qua log/snapshot/replica. Điểm nhanh không phải do không đọc đĩa (OS cũng cache) mà do <b>tránh chi phí mã hoá cấu trúc dữ liệu cho đĩa</b>. Redis cung cấp cấu trúc như priority queue, set. Anti-caching đẩy dữ liệu ít dùng ra đĩa theo từng bản ghi.'
      ] }
    ] },
    { icon: '📊', title: 'OLTP vs OLAP, data warehouse', blocks: [
      { t: 'table', head: ['Tiêu chí', 'OLTP', 'OLAP'], rows: [
        ['Mẫu đọc chính', 'Ít bản ghi mỗi truy vấn, tra theo key', 'Tổng hợp trên rất nhiều bản ghi'],
        ['Mẫu ghi chính', 'Ngẫu nhiên, độ trễ thấp, theo thao tác người dùng', 'Nhập hàng loạt (ETL) hoặc dòng sự kiện'],
        ['Người dùng', 'Khách hàng/người dùng cuối qua ứng dụng web', 'Nhà phân tích nội bộ để hỗ trợ quyết định'],
        ['Dữ liệu biểu diễn', 'Trạng thái mới nhất', 'Lịch sử sự kiện theo thời gian'],
        ['Kích thước', 'GB – TB', 'TB – PB']
      ] },
      { t: 'p', x: '“Transaction” ở đây là một nhóm đọc/ghi tạo thành đơn vị logic; không nhất thiết có ACID. Từ cuối thập niên 1980, doanh nghiệp tách phân tích sang <b>data warehouse</b>: bản sao chỉ-đọc của dữ liệu từ nhiều hệ OLTP, nạp bằng <b>ETL</b> (Extract–Transform–Load), để phân tích viên truy vấn thoải mái mà không làm hại hiệu năng OLTP. Mô hình thường là quan hệ (SQL); sản phẩm: Teradata, Vertica, SAP HANA, ParAccel/Redshift; SQL-on-Hadoop: Hive, Spark SQL, Impala, Presto, Drill (ý tưởng Dremel).' },
      { t: 'p', x: '<b>Star schema</b> (dimensional modeling): ở giữa là <b>bảng fact</b> (mỗi hàng là một sự kiện, ví dụ lần mua hàng; có thể hàng chục PB), xung quanh là <b>bảng dimension</b> (ai, cái gì, ở đâu, khi nào, cách nào, vì sao: sản phẩm, cửa hàng, ngày, khuyến mại, khách hàng) tham chiếu bằng khoá ngoại. <b>Snowflake schema</b>: chia dimension thành sub-dimension (chuẩn hoá hơn) nhưng star thường được ưa chuộng vì đơn giản. Bảng rất rộng: fact thường &gt;100 cột.' }
    ] },
    { icon: '🏛️', title: 'Lưu trữ theo cột (column-oriented)', blocks: [
      { t: 'key', x: 'Truy vấn phân tích thường chỉ dùng 4–5 trong hơn 100 cột. Lưu theo <b>hàng</b> buộc đọc và phân tích cả hàng; lưu theo <b>cột</b> lưu mọi giá trị của một cột cùng nhau (mỗi cột một file, cùng thứ tự hàng ⇒ hàng thứ k là phần tử thứ k của mỗi file). Truy vấn chỉ đọc những cột cần dùng. Parquet là định dạng cột (dựa Dremel) hỗ trợ mô hình tài liệu.' },
      { t: 'list', items: [
        '<b>Nén cột</b>: cột lặp lại nhiều ⇒ nén tốt. <b>Bitmap encoding</b>: với cột có n giá trị khác nhau, tạo n bitmap (một bit mỗi hàng); nếu thưa thì thêm <b>run-length encoding</b>. Truy vấn <code>IN (30, 68, 69)</code> = OR bitmap; <code>product_sk = 31 AND store_sk = 3</code> = AND bitmap.',
        'Column family của Cassandra/HBase gọi sai là “cột”: chúng vẫn lưu cả hàng cùng nhau, không nén cột.',
        '<b>Băng thông bộ nhớ &amp; vectorized processing</b>: khối dữ liệu cột nén vừa L1 cache, lặp vòng chặt (không gọi hàm), dùng lệnh SIMD.',
        '<b>Thứ tự sắp xếp</b>: sắp theo cả hàng (không sắp từng cột độc lập); chọn khoá sắp xếp theo truy vấn phổ biến (ví dụ ngày trước); cột sắp xếp đầu nén rất tốt bằng run-length. C-Store/Vertica lưu <b>nhiều thứ tự sắp xếp</b> khác nhau trên các bản sao.',
        '<b>Ghi vào cột</b>: không thể cập nhật tại chỗ cột nén ⇒ dùng ý tưởng LSM-tree (ghi vào bộ nhớ trước, trộn dần ra file cột); truy vấn kết hợp dữ liệu đĩa và bộ nhớ.',
        '<b>Materialized view</b>: bản sao thật của kết quả truy vấn (khác view ảo), cập nhật khi dữ liệu gốc đổi ⇒ ghi đắt, hợp data warehouse hơn OLTP. <b>Data cube / OLAP cube</b>: lưới các tổng hợp theo nhiều dimension (ngày × sản phẩm…); truy vấn rất nhanh vì tính sẵn, nhưng mất linh hoạt (không tính được tỷ lệ doanh thu của hàng giá &gt; $100 nếu giá không là dimension) ⇒ vẫn giữ dữ liệu thô.'
      ] }
    ] }
  ],
  summary: [
    'Chỉ mục tăng tốc đọc, làm chậm ghi; chọn chỉ mục theo mẫu truy vấn.',
    'Hai họ storage engine: log-structured (SSTable/LSM-tree: ghi tuần tự, compaction) và page-oriented (B-tree: ghi đè trang + WAL).',
    'LSM thường nhanh ghi, nén tốt; B-tree thường nhanh đọc, dễ đoán; phải benchmark.',
    'OLTP (truy vấn theo key, ghi nhỏ) khác OLAP (quét tổng hợp lớn) ⇒ data warehouse, ETL, star schema.',
    'Lưu theo cột + nén bitmap + vectorized + sắp xếp + materialized view/cube giúp phân tích nhanh.'
  ],
  cards: [
    ['Log trong sách nghĩa là gì?', 'Chuỗi bản ghi chỉ-thêm (append-only), không nhất thiết đọc được.'],
    ['Vì sao đọc “db_get” là O(n)?', 'Phải quét cả file để tìm key.'],
    ['Đánh đổi của chỉ mục?', 'Tăng tốc đọc, làm chậm ghi.'],
    ['Hash index kiểu Bitcask cần gì?', 'Mọi key vừa RAM; value có thể lớn hơn RAM.'],
    ['Compaction?', 'Loại khoá trùng, giữ giá trị mới nhất, hợp nhất segment.'],
    ['Tombstone?', 'Bản ghi đặc biệt đánh dấu xoá, bị loại khi hợp nhất.'],
    ['Vì sao append-only tốt?', 'Ghi tuần tự nhanh, đồng thời/crash đơn giản, chống phân mảnh.'],
    ['SSTable?', 'Segment sắp xếp theo key, mỗi key một lần.'],
    ['Memtable?', 'Cây cân bằng trong RAM nhận ghi mới trước khi ra SSTable.'],
    ['Vì sao cần log phụ cho memtable?', 'Khôi phục memtable khi crash.'],
    ['Bloom filter?', 'Cho biết key chắc chắn không tồn tại để tránh đọc đĩa.'],
    ['B-tree khác SSTable?', 'Trang cố định ghi đè tại chỗ + WAL, thay vì segment tuần tự.'],
    ['Write-ahead log?', 'Log chỉ-thêm ghi mọi thay đổi trước khi áp dụng vào cây.'],
    ['Write amplification?', 'Một lần ghi logic gây nhiều lần ghi đĩa.'],
    ['Covering index?', 'Chứa một số cột để trả lời truy vấn chỉ bằng chỉ mục.'],
    ['OLTP vs OLAP?', 'OLTP: truy vấn nhỏ theo key; OLAP: tổng hợp trên rất nhiều bản ghi.'],
    ['ETL?', 'Extract–Transform–Load: đưa dữ liệu từ OLTP vào data warehouse.'],
    ['Star schema?', 'Bảng fact ở giữa, các bảng dimension xung quanh.'],
    ['Lưu theo cột để làm gì?', 'Chỉ đọc cột cần dùng; nén tốt; dùng vectorized processing.'],
    ['Data cube?', 'Lưới tổng hợp theo nhiều dimension tính sẵn.']
  ],
  quiz: [
    { q: 'Hạn chế của hash index kiểu Bitcask:', o: ['Ghi chậm', 'Mọi key phải vừa RAM và khó truy vấn khoảng', 'Không bền', 'Không có segment'], a: 1, e: 'Giá trị có thể lớn hơn RAM.' },
    { q: 'SSTable khác segment thường ở điểm:', o: ['Sắp xếp theo key', 'Có nhiều key trùng', 'Không nén', 'Chỉ trong RAM'], a: 0, e: 'Cho phép hợp nhất như mergesort và chỉ mục thưa.' },
    { q: 'Memtable là:', o: ['Bảng quan hệ', 'Cây cân bằng trong RAM', 'File log', 'Bloom filter'], a: 1, e: 'Rồi ghi ra SSTable.' },
    { q: 'Bloom filter giúp:', o: ['Nén', 'Biết key chắc chắn không tồn tại', 'Sắp xếp', 'Sao lưu'], a: 1, e: 'Tránh đọc nhiều SSTable cho key vắng mặt.' },
    { q: 'B-tree chia dữ liệu thành:', o: ['Segment biến thiên', 'Trang cố định (thường 4 KB)', 'Hàng', 'Cột'], a: 1, e: 'Gần với khối đĩa.' },
    { q: 'WAL trong B-tree dùng để:', o: ['Tăng tốc đọc', 'Phục hồi cây về trạng thái nhất quán sau crash', 'Nén', 'Sắp xếp'], a: 1, e: 'Ghi trước khi áp dụng thay đổi.' },
    { q: 'Cây 4 tầng, trang 4 KB, branching 500 chứa tới:', o: ['256 GB', '256 TB', '256 PB', '1 MB'], a: 1, e: 'Ví dụ trong sách.' },
    { q: 'Write amplification đặc biệt đáng lo với:', o: ['RAM', 'SSD', 'CPU', 'Mạng'], a: 1, e: 'SSD mòn sau số lần ghi đè hữu hạn.' },
    { q: 'Điểm yếu của LSM-tree:', o: ['Không truy vấn khoảng', 'Compaction gây độ trễ percentile cao', 'Ghi chậm', 'Không nén'], a: 1, e: 'Và có thể không theo kịp tốc độ ghi.' },
    { q: 'Chỉ mục (họ, tên) vô dụng khi:', o: ['Tìm theo họ', 'Tìm chỉ theo tên', 'Tìm họ + tên', 'Truy vấn khoảng họ'], a: 1, e: 'Concatenated index.' },
    { q: 'Điểm khác chính giữa OLTP và OLAP:', o: ['OLTP quét lớn', 'OLAP quét tổng hợp lớn, OLTP tra theo key', 'Giống nhau', 'OLAP độ trễ thấp'], a: 1, e: 'Bảng 3-1.' },
    { q: 'Bảng fact trong star schema chứa:', o: ['Mô tả sản phẩm', 'Sự kiện và khoá ngoại tới dimension', 'Chỉ mục', 'Lược đồ'], a: 1, e: 'Mỗi hàng một sự kiện.' },
    { q: 'Vì sao lưu cột tốt cho phân tích?', o: ['Dễ ghi', 'Chỉ đọc cột cần dùng; nén và vectorize', 'Không cần sắp xếp', 'Không có index'], a: 1, e: 'Truy vấn chỉ dùng 4–5 trên 100 cột.' },
    { q: 'Cách ghi vào cột nén:', o: ['Cập nhật tại chỗ', 'Giống LSM: ghi vào bộ nhớ rồi trộn dần', 'Xoá cả bảng', 'Không thể'], a: 1, e: 'Vertica làm vậy.' },
    { q: 'Hạn chế của data cube:', o: ['Chậm', 'Mất linh hoạt so với dữ liệu thô', 'Tốn RAM', 'Không SUM'], a: 1, e: 'Phải giữ dữ liệu thô.' }
  ],
  match: [
    ['Bitcask', 'Hash index trong RAM + log'],
    ['LevelDB / RocksDB', 'LSM-tree, leveled compaction'],
    ['B-tree', 'Trang cố định + WAL'],
    ['Bloom filter', 'Tránh đọc đĩa cho key vắng'],
    ['Star schema', 'Fact table + dimension tables'],
    ['Parquet', 'Định dạng cột'],
    ['Materialized view', 'Kết quả truy vấn được lưu thật']
  ]
});
