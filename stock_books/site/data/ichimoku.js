// Nội dung sách "Giao dịch với Ichimoku" – Karen Péloille. Chương 1 & 2 (bản tóm lược học tập bằng tiếng Việt).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.ichimoku = { chapters: [

/* ======================= CHƯƠNG 1 ======================= */
{
  n: 1,
  title: 'Lý thuyết – Cấu tạo của Ichimoku',
  intro: 'Ichimoku Kinko Hyo nghĩa là “cân bằng nhìn trong một cái liếc mắt”. Chương này giải thích 5 đường được tính thế nào và mỗi đường nói lên điều gì.',
  sections: [
    { icon: '🌅', title: 'Ichimoku là gì?', blocks: [
      { t: 'p', x: 'Ichimoku Kinko Hyo là hệ thống đọc biểu đồ của Nhật Bản. Điều cần nhớ nhất: nó mô tả <b>sự cân bằng của thị trường</b>. Năm đường động đánh dấu các điểm cân bằng của giá; khi cân bằng bị phá vỡ, bên mua hoặc bên bán chiếm ưu thế và giá chạy thành xu hướng.' },
      { t: 'p', x: 'Chu trình của thị trường theo Ichimoku: <b>cân bằng → phá vỡ cân bằng → xu hướng → kiệt sức → cân bằng mới</b>. Vì vậy Ichimoku về bản chất là một <b>chỉ báo xu hướng</b>.' },
      { t: 'h3', x: 'Giải nghĩa tên gọi' },
      { t: 'table', head: ['Từ', 'Nghĩa', 'Ý nghĩa triết lý'], rows: [
        ['<b>Ichimoku</b>', '“Nhìn một lượt”', 'Rõ ràng, nhanh: một cái liếc mắt là hiểu thị trường'],
        ['<b>Kinko</b>', '“Cân bằng”', 'Khái niệm nền tảng của cả hệ thống'],
        ['<b>Hyo</b>', '“Biểu đồ”', 'Phân tích dựa trên đồ thị']
      ] },
      { t: 'h3', x: 'Lịch sử ra đời' },
      { t: 'timeline', items: [
        ['1930s', 'Goichi Hosoda (1898–1982), nhà báo tài chính của <i>Capital Newspaper</i>, cho nhóm sinh viên toán tính tay hàng nghìn dữ liệu giá (chưa có máy tính).'],
        ['1935', 'Công bố bản nháp đầu tiên với đường Tenkan Sen, tên “Ichimoku Sanji”.'],
        ['1968', 'Sau ~20 năm thử nghiệm, xuất bản trọn bộ <i>Ichimoku Kinko Hyo</i> (7 tập).'],
        ['1982', 'Hosoda mất, phương pháp dần bị lãng quên.'],
        ['1996', 'Hidenobu Sasaki (Nikko Citigroup) xuất bản <i>Ichimoku Kinko Studies</i> – được báo Nikkei bình chọn sách phân tích kỹ thuật hay nhất 9 năm liên tiếp. Ichimoku lan ra các sàn giao dịch Nhật rồi sang Mỹ.'],
        ['2010', 'David Linton xuất bản <i>Cloud Charts</i>, giúp phương Tây tiếp cận.']
      ] },
      { t: 'key', x: 'Vì sao dùng phân tích kỹ thuật? Cá nhân khó đọc tin tức nhanh bằng giới chuyên nghiệp (giá đã phản ánh tin trước khi bạn kịp phản ứng). Còn quá nhiều chỉ báo gây “nhiễu”. Ichimoku gom thông tin vào <b>chỉ 5 đường</b> nhưng khá đầy đủ.' }
    ] },
    { icon: '⚙️', title: 'Thông số 9 – 26 – 52', blocks: [
      { t: 'p', x: 'Tác giả dùng đúng thông số gốc của Hosoda: <b>9, 26, 52</b>. Dù xuất phát từ biểu đồ ngày, bộ số này chạy tốt ở mọi khung thời gian.' },
      { t: 'table', head: ['Số', 'Nguồn gốc'], rows: [
        ['<b>9</b>', 'Khoảng một tuần rưỡi giao dịch của Nhật (6 + 3 phiên)'],
        ['<b>26</b>', 'Số phiên giao dịch trong một tháng ở Nhật'],
        ['<b>52</b>', '2 × 26']
      ] },
      { t: 'warn', x: 'Nhiều người đề xuất đổi sang 7-21-42 cho hợp “tuần 5 phiên, tháng 20 phiên” hay Forex 24h. Tác giả khẳng định đổi như vậy <b>không chính xác hơn</b>, còn làm hỗ trợ/kháng cự kém tin cậy và tín hiệu giả nhiều hơn. Thêm nữa, mọi sàn chuyên nghiệp (nhất là Nhật) đều dùng 9-26-52 – nên bạn đang nhìn cùng thông tin với họ.' },
      { t: 'mnemo', x: '<b>9 – 26 – 52</b>: “tuần rưỡi – tháng – hai tháng”. Giữ nguyên, đừng chỉnh!' }
    ] },
    { icon: '🧮', title: 'Cách tính: quy tắc “trung điểm”', blocks: [
      { t: 'p', x: 'Cả Tenkan, Kijun và Senkou Span B đều dùng chung một công thức: lấy <b>đỉnh cao nhất</b> và <b>đáy thấp nhất</b> trong n nến, cộng lại rồi chia đôi.' },
      { t: 'key', x: '<b>Trung điểm = (Cao nhất n nến + Thấp nhất n nến) ÷ 2</b>' },
      { t: 'widget', name: 'mid-calc', title: 'Tự tính trung điểm: kéo thanh trượt, đổi chu kỳ 9 / 26 / 52' },
      { t: 'tip', x: 'Hãy thử kéo thanh trượt khi giá đi ngang: đường trung điểm <b>nằm ngang thành “bậc thang”</b>. Vì chỉ khi có đỉnh mới/đáy mới thì đường mới đổi. Đây là điểm khác với đường trung bình động.' }
    ] },
    { icon: '🔴', title: 'Tenkan Sen – Đường chuyển đổi (9)', blocks: [
      { t: 'p', x: 'Trung điểm của 9 nến gần nhất. Vì ngắn nên nó <b>bám sát giá</b> và giá thường xuyên cắt qua nó mà xu hướng vẫn tiếp tục.' },
      { t: 'list', items: [
        '<b>Đoạn phẳng (plateau)</b> = thiếu xu hướng, hoặc xu hướng đang tạm nghỉ.',
        '<b>Độ dốc</b> = sức mạnh/động lượng. Dốc đứng nghĩa là lực mạnh; đường bẻ cong báo hiệu xu hướng yếu đi.',
        'Là <b>đường yếu nhất</b>: chủ yếu dùng để “cảnh báo” hành động giá.'
      ] },
      { t: 'h3', x: 'Khác gì đường SMA 9?' },
      { t: 'table', head: ['', 'Tenkan Sen', 'SMA 9'], rows: [
        ['Cách tính', '(Cao nhất + Thấp nhất) ÷ 2 trong 9 nến', 'Trung bình 9 giá đóng cửa'],
        ['Hình dạng', 'Có đoạn phẳng, đổi hướng gấp', 'Luôn mượt, đổi theo từng nến'],
        ['Đoạn phẳng', 'Có (khi không có đỉnh/đáy mới)', 'Không bao giờ']
      ] }
    ] },
    { icon: '🔵', title: 'Kijun Sen – Đường chuẩn (26)', blocks: [
      { t: 'p', x: 'Trung điểm của 26 nến gần nhất. Vì dài hơn nên đoạn phẳng <b>dài và rõ</b> hơn: đó chính là các mức hỗ trợ/kháng cự đáng tin cậy khi thị trường cân bằng.' },
      { t: 'list', items: [
        '<b>Điểm tham chiếu chính</b> của Ichimoku: nhìn thoáng qua là biết giá đang ở đâu so với hỗ trợ/kháng cự quan trọng.',
        'Tương ứng mức <b>Fibonacci thoái lui 50%</b>.',
        'Hoạt động như <b>nam châm</b>: giá đi quá xa sẽ có xu hướng quay lại trung điểm (hồi quy về trung bình).',
        '<b>Đường phát tín hiệu</b> vào/ra lệnh (sẽ học ở chương Giao dịch).'
      ] },
      { t: 'warn', x: 'Giao cắt Tenkan – Kijun <b>không quan trọng</b> trong Ichimoku của tác giả: tín hiệu đến quá muộn so với chuyển động giá và khi biến động mạnh có thể đi ngược xu hướng.' },
      { t: 'key', x: 'Tenkan + Kijun = <b>“nhịp tim” của thị trường</b>. Tenkan cho biết biến động và sức mạnh (qua độ dốc); Kijun đặt ra mức cân bằng để kéo giá trở lại khi mất cân bằng không thể tiếp tục.' }
    ] },
    { icon: '☁️', title: 'Mây Kumo – Senkou Span A & B', blocks: [
      { t: 'p', x: 'Đám mây gồm hai đường và được <b>vẽ lệch về tương lai 26 nến</b>. Việc chiếu về phía trước này là nét độc đáo đầu tiên của Ichimoku – hầu hết phương pháp khác chỉ nhìn hiện tại.' },
      { t: 'table', head: ['Đường', 'Tính thế nào', 'Ý nghĩa'], rows: [
        ['<b>Senkou Span A (SSA)</b>', '(Tenkan + Kijun) ÷ 2, đẩy tới trước 26 nến', 'Cân bằng giữa ngắn hạn (9) và trung hạn (26). Cạnh <b>nhanh</b> của mây. Phản ánh biến động quá khứ gần.'],
        ['<b>Senkou Span B (SSB)</b>', 'Trung điểm 52 nến, đẩy tới trước 26 nến', 'Cân bằng dài hạn. Cạnh <b>chậm</b>, thường đi ngang → hỗ trợ/kháng cự rất mạnh.']
      ] },
      { t: 'tip', x: 'Hiểu SSB trên biểu đồ tuần: trung điểm của 52 tuần (1 năm) được chiếu tới trước 26 tuần (6 tháng). Muốn bẻ cong SSB, giá phải tạo đỉnh mới hoặc đáy mới của cả năm.' },
      { t: 'widget', name: 'ichi-cloud', title: 'Quan sát đám mây: màu xanh/đỏ, độ dày, điểm twist' },
      { t: 'h3', x: 'Màu & độ dày của mây' },
      { t: 'list', items: [
        '<b>SSA nằm trên SSB</b> → mây <b>tăng</b> (bullish). <b>SSB nằm trên SSA</b> → mây <b>giảm</b> (bearish). (Giống đường MA ngắn trên/dưới MA dài.)',
        '<b>Mây dày</b>: khi giá chạy mạnh, SSA đi theo Tenkan/Kijun còn SSB vẫn phẳng nên khoảng cách giãn ra. Mây dày = biến động trước đó lớn, vùng cản mạnh.',
        '<b>Mây mỏng / twist</b>: khi giá chậm lại, SSA quay về phía SSB. Hai đường cắt nhau gọi là <b>twist</b> → dấu hiệu có thể đảo chiều xu hướng.'
      ] },
      { t: 'key', x: '<b>Mây là trái tim của Ichimoku.</b> Giá <b>trong mây</b> = thị trường không có hướng, độ bất định cao. Cách giá thoát khỏi mây cho biết thị trường chọn hướng nào. Mây càng dày càng khó xuyên, xuyên qua chỗ twist dễ hơn nhiều.' }
    ] },
    { icon: '🟣', title: 'Lagging Span (Chikou Span) – “Bộ nhớ” thị trường', blocks: [
      { t: 'p', x: 'Là <b>giá đóng cửa hiện tại được vẽ lùi về quá khứ 26 nến</b>. Không cần tính toán gì. Đây là nét độc đáo thứ hai của Ichimoku.' },
      { t: 'list', items: [
        'Chỉ dùng <b>giá đóng cửa</b> nên “lọc” bớt bóng nến (nhiễu).',
        'Nó phản ứng với các vật cản <b>quá khứ</b> y như giá phản ứng: va vào Kijun, vào mây, vào thân/bóng nến cũ…',
        'Giải thích vì sao giá hiện tại đôi khi “dừng giữa chừng không lý do”: thực ra Lagging Span đang chạm vật cản ở 26 nến trước.',
        'Khi Lagging Span <b>cắt qua Kijun hoặc SSB</b>, nó xác nhận điểm khởi đầu đảo chiều và tiềm năng đi tiếp – tiềm năng đó phụ thuộc vào việc nó <b>có tự do di chuyển (không vật cản)</b> hay không.'
      ] },
      { t: 'widget', name: 'ichi-lag', title: 'Lagging Span: so với giá cách đây 26 nến' },
      { t: 'mnemo', x: 'Tenkan/Kijun = <b>nhịp tim</b> · Mây = <b>bản đồ tương lai</b> · Lagging Span = <b>bộ nhớ quá khứ</b>.' },
      { t: 'p', x: 'Tác giả dùng tên “Lagging Span” thay vì “Chikou Span” để tránh nhầm với “Senkou Span” (hai chữ rất giống nhau!).' }
    ] },
    { icon: '🕰️', title: 'Không gian thời gian & tổng kết', blocks: [
      { t: 'p', x: 'Sức mạnh của Ichimoku không chỉ nằm ở phép tính trung điểm, mà ở việc <b>các đường chồng lấn nhau trên một dải thời gian rộng</b>. Từ vạch “hiện tại”, thông tin kéo dài khoảng <b>104 nến</b> về trước (2 × 52 – tức 2 năm trên biểu đồ tuần).' },
      { t: 'list', items: [
        'Khi Lagging Span gặp SSB ngay lúc này, nghĩa là giá hiện tại đang đối diện với trung điểm của <b>52 + 26 = 78 nến</b> trước (~1,5 năm trên biểu đồ tuần).',
        'Và 26 nến nữa, thị trường sẽ đối diện với trung điểm mà hôm nay ta tính từ cả năm trước.'
      ] },
      { t: 'widget', name: 'ichi-full', title: 'Biểu đồ Ichimoku đầy đủ (dữ liệu minh hoạ) – bật/tắt từng đường' },
      { t: 'h3', x: 'Bảng tổng kết 5 đường' },
      { t: 'table', head: ['Đường', 'Chu kỳ', 'Vai trò', 'Từ khoá'], rows: [
        ['Tenkan Sen', '9', 'Sức mạnh ngắn hạn, cảnh báo', 'Độ dốc'],
        ['Kijun Sen', '26', 'Hỗ trợ/kháng cự, đường tín hiệu', 'Nam châm · Fib 50%'],
        ['Senkou Span A', '(T+K)/2, +26', 'Cạnh nhanh của mây', 'Biến động'],
        ['Senkou Span B', '52, +26', 'Cạnh chậm của mây', 'Cản dài hạn'],
        ['Lagging Span', 'Đóng cửa, −26', 'Xác nhận, đánh giá tiềm năng', 'Bộ nhớ']
      ] },
      { t: 'key', x: 'Tương tác giữa các đường và giá thể hiện trạng thái <b>cân bằng / mất cân bằng</b>. Ichimoku = giá hiện tại <i>so với quá khứ</i> (Lagging Span) + hiện tại &amp; quá khứ <i>chiếu vào tương lai</i> (mây).' }
    ] }
  ],
  summary: [
    'Ichimoku Kinko Hyo = “cân bằng nhìn trong một cái liếc mắt”, do Goichi Hosoda sáng tạo, là chỉ báo <b>xu hướng</b>.',
    'Dùng thông số gốc <b>9-26-52</b>; đổi thông số làm hệ thống kém chính xác.',
    'Tenkan, Kijun, SSB đều là trung điểm (cao nhất + thấp nhất)/2 của 9, 26, 52 nến; SSA = (Tenkan + Kijun)/2.',
    'Mây (SSA–SSB) được chiếu tới trước 26 nến; xanh khi SSA &gt; SSB, đỏ khi SSB &gt; SSA; twist = hai đường cắt nhau.',
    'Lagging Span = giá đóng cửa dịch lùi 26 nến, là “bộ nhớ” để xác nhận và đánh giá tiềm năng.',
    'Các đường phải được đọc <b>cùng nhau</b> chứ không tách rời.'
  ],
  cards: [
    ['Ichimoku Kinko Hyo nghĩa là gì?', '“Cân bằng nhìn trong một cái liếc mắt” (Ichimoku = nhìn một lượt; Kinko = cân bằng; Hyo = biểu đồ).'],
    ['Ai sáng tạo ra Ichimoku? Công bố đầy đủ năm nào?', 'Goichi Hosoda (1898–1982), nhà báo của Capital Newspaper. Xuất bản trọn bộ vào năm 1968.'],
    ['Thông số gốc của Ichimoku?', '9 – 26 – 52.'],
    ['Vì sao không nên đổi sang 7-21-42?', 'Không chính xác hơn, làm hỗ trợ/kháng cự kém tin cậy, tín hiệu giả nhiều; và các sàn chuyên nghiệp đều dùng 9-26-52.'],
    ['Công thức Tenkan Sen?', '(Cao nhất + Thấp nhất) ÷ 2 trong 9 nến gần nhất.'],
    ['Công thức Kijun Sen?', '(Cao nhất + Thấp nhất) ÷ 2 trong 26 nến gần nhất. Tương ứng Fibonacci 50%.'],
    ['Tenkan Sen khác SMA 9 ở điểm nào?', 'Tenkan có đoạn phẳng (plateau) vì chỉ đổi khi có đỉnh/đáy mới; SMA luôn thay đổi mượt theo từng nến.'],
    ['Đường nào là “đường yếu nhất” của Ichimoku?', 'Tenkan Sen – chủ yếu để cảnh báo và đo độ dốc (động lượng) ngắn hạn.'],
    ['Vai trò chính của Kijun Sen?', 'Điểm tham chiếu chính: hỗ trợ/kháng cự mạnh, “nam châm” kéo giá về cân bằng và là đường phát tín hiệu vào/ra lệnh.'],
    ['Senkou Span A tính thế nào?', '(Tenkan + Kijun) ÷ 2, đẩy tới trước 26 nến.'],
    ['Senkou Span B tính thế nào?', 'Trung điểm của 52 nến, đẩy tới trước 26 nến.'],
    ['Khi nào mây là mây tăng / mây giảm?', 'SSA nằm trên SSB → mây tăng. SSB nằm trên SSA → mây giảm.'],
    ['Twist (xoắn mây) là gì?', 'Điểm SSA và SSB cắt nhau – tín hiệu có thể đảo chiều xu hướng; chỗ mây rất mỏng nên giá dễ xuyên qua.'],
    ['Giá nằm trong mây nghĩa là gì?', 'Thị trường không có hướng rõ, độ bất định cao.'],
    ['Lagging Span là gì?', 'Giá đóng cửa hiện tại vẽ lùi về quá khứ 26 nến – “bộ nhớ” của thị trường.'],
    ['Vì sao tác giả gọi “Lagging Span” thay vì “Chikou Span”?', 'Để tránh nhầm với “Senkou Span” (hai đường của mây) và nhấn mạnh việc nó “tụt lại” phía sau giá.'],
    ['Hai điểm độc đáo nhất của Ichimoku là gì?', 'Mây chiếu về tương lai (26 nến) và Lagging Span (giá chiếu về quá khứ).'],
    ['Giao cắt Tenkan–Kijun quan trọng không?', 'Không đáng kể: tín hiệu quá trễ và có thể đi ngược xu hướng khi biến động mạnh.']
  ],
  quiz: [
    { q: 'Từ “Kinko” trong Ichimoku Kinko Hyo có nghĩa là gì?', o: ['Biểu đồ', 'Cân bằng', 'Một cái nhìn', 'Đám mây'], a: 1, e: 'Kinko = cân bằng, khái niệm nền tảng của hệ thống. Ichimoku = nhìn một lượt, Hyo = biểu đồ.' },
    { q: 'Bộ thông số gốc của Ichimoku là gì?', o: ['7 – 21 – 42', '5 – 20 – 50', '9 – 26 – 52', '12 – 26 – 9'], a: 2, e: '9-26-52 do Hosoda thiết lập; tác giả khuyên giữ nguyên.' },
    { q: 'Tenkan Sen được tính như thế nào?', o: ['Trung bình 9 giá đóng cửa', 'Trung điểm giữa cao nhất và thấp nhất của 9 nến', 'Giá đóng cửa dịch 9 nến', 'Trung điểm 26 nến'], a: 1, e: 'Tenkan = (cao nhất 9 nến + thấp nhất 9 nến)/2. Trung bình đóng cửa là SMA, không phải Tenkan.' },
    { q: 'Điều gì khiến Tenkan/Kijun khác với đường trung bình động (SMA)?', o: ['Chúng luôn mượt hơn', 'Chúng có đoạn phẳng khi giá không tạo đỉnh/đáy mới', 'Chúng chỉ dùng giá mở cửa', 'Chúng không phụ thuộc thời gian'], a: 1, e: 'Vì dựa vào đỉnh/đáy, đường chỉ đổi khi có đỉnh/đáy mới nên tạo “bậc thang” – SMA thì đổi liên tục.' },
    { q: 'Đoạn phẳng dài của Kijun Sen cho biết điều gì?', o: ['Dữ liệu bị lỗi', 'Một mức hỗ trợ/kháng cự đáng tin cậy khi thị trường cân bằng', 'Xu hướng rất mạnh', 'Sắp có twist'], a: 1, e: 'Chu kỳ dài nên plateau của Kijun rõ và cho hỗ trợ/kháng cự mạnh.' },
    { q: 'Kijun Sen tương ứng mức Fibonacci thoái lui nào?', o: ['23,6%', '38,2%', '50%', '61,8%'], a: 2, e: 'Kijun là trung điểm của dải 26 nến nên trùng với 50%.' },
    { q: 'Senkou Span A được tính từ đâu?', o: ['Trung điểm 52 nến', '(Tenkan + Kijun)/2 đẩy tới trước 26 nến', 'Giá đóng cửa lùi 26 nến', '(Tenkan + Kijun)/2 đẩy lùi 26 nến'], a: 1, e: 'SSA = trung bình Tenkan và Kijun, chiếu về tương lai 26 nến.' },
    { q: 'Cạnh nào của mây thường đi phẳng và tạo hỗ trợ/kháng cự dài hạn rất mạnh?', o: ['Senkou Span A', 'Senkou Span B', 'Tenkan Sen', 'Lagging Span'], a: 1, e: 'SSB dùng 52 nến nên rất chậm; giá phải tạo đỉnh/đáy mới mới bẻ cong được.' },
    { q: 'Mây được coi là “mây tăng” khi nào?', o: ['SSB nằm trên SSA', 'SSA nằm trên SSB', 'Giá nằm dưới mây', 'Mây rất dày'], a: 1, e: 'SSA trên SSB → tăng; ngược lại là mây giảm.' },
    { q: 'Mây dày thường hình thành khi nào?', o: ['Khi giá đi ngang lâu', 'Khi giá chạy xu hướng mạnh, SSA đi xa SSB phẳng', 'Khi Lagging Span cắt Kijun', 'Khi dùng khung thời gian tháng'], a: 1, e: 'Giá chạy mạnh: SSA theo Tenkan/Kijun, còn SSB chậm nên khoảng cách giãn ra.' },
    { q: 'Hiện tượng “twist” là gì?', o: ['Giá cắt Kijun', 'Tenkan cắt Kijun', 'SSA cắt SSB', 'Lagging Span chạm mây'], a: 2, e: 'Twist là chỗ hai đường tạo nên mây (SSA, SSB) cắt nhau, cảnh báo khả năng đảo chiều.' },
    { q: 'Lagging Span thực chất là gì?', o: ['Trung điểm 26 nến', 'Giá đóng cửa hiện tại vẽ lùi 26 nến', 'Giá cao nhất vẽ lùi 26 nến', 'Giá đóng cửa vẽ tới trước 26 nến'], a: 1, e: 'Lagging Span = giá đóng cửa hiện tại dịch về quá khứ 26 nến.' },
    { q: 'Vì sao Lagging Span được gọi là “bộ nhớ thị trường”?', o: ['Nó lưu khối lượng giao dịch', 'Nó so sánh giá hiện tại với các mức từng quan trọng trong quá khứ', 'Nó tính trung bình năm', 'Nó dự đoán giá tương lai'], a: 1, e: 'Nó nhắc lại các vật cản/mức giá cũ mà trader có thể đã quên.' },
    { q: 'Quan điểm của tác giả về giao cắt Tenkan–Kijun?', o: ['Là tín hiệu mua/bán chính', 'Không quan trọng, tín hiệu quá trễ', 'Chỉ dùng cho Forex', 'Chỉ đáng tin trong mây'], a: 1, e: 'Giao cắt T–K đến muộn và có thể ngược xu hướng khi biến động.' },
    { q: 'Giá đang nằm TRONG mây có nghĩa là gì?', o: ['Xu hướng tăng rất mạnh', 'Thị trường không có hướng rõ, bất định cao', 'Xu hướng giảm rất mạnh', 'Nên mua ngay'], a: 1, e: 'Trong mây là vùng cân bằng/bất định; chưa xác nhận xu hướng nào.' },
    { q: 'Hai nét độc đáo nhất của Ichimoku so với các chỉ báo khác là:', o: ['Dùng khối lượng và RSI', 'Mây chiếu về tương lai và Lagging Span', 'Dùng Fibonacci và Bollinger', 'Dùng MACD và Stochastic'], a: 1, e: 'Mây (chiếu trước 26) và Lagging Span (chiếu lùi 26) tạo cách nhìn đa thời gian.' }
  ],
  match: [
    ['Tenkan Sen', 'Trung điểm 9 nến – đo sức mạnh ngắn hạn'],
    ['Kijun Sen', 'Trung điểm 26 nến – nam châm & đường tín hiệu'],
    ['Senkou Span A', '(Tenkan + Kijun)/2 đẩy tới trước 26 nến'],
    ['Senkou Span B', 'Trung điểm 52 nến đẩy tới trước 26 nến'],
    ['Lagging Span', 'Giá đóng cửa vẽ lùi 26 nến'],
    ['Twist', 'SSA và SSB cắt nhau'],
    ['Kumo', 'Đám mây giữa SSA và SSB'],
    ['Kinko', 'Cân bằng'],
    ['Goichi Hosoda', 'Người sáng tạo Ichimoku'],
    ['9 – 26 – 52', 'Thông số gốc']
  ]
},

/* ======================= CHƯƠNG 2 ======================= */
{
  n: 2,
  title: 'Đọc biểu đồ Ichimoku',
  intro: 'Biết cách tính chưa đủ – bạn cần đọc cả 5 đường cùng lúc. Chương này dạy cách diễn giải mây, Tenkan, Kijun và Lagging Span trong thực tế.',
  sections: [
    { icon: '👁️', title: 'Nguyên tắc: đọc cùng lúc, không đọc rời', blocks: [
      { t: 'p', x: 'Mỗi đường dựa trên khung thời gian khác nhau, nên thông tin của chúng phải được hiểu <b>như một tổng thể</b>. Ichimoku tự đủ: đã có mọi yếu tố để lập chiến lược đầu tư.' },
      { t: 'key', x: 'Thứ tự ưu tiên khi nhìn một biểu đồ: <b>1) Mây → 2) Kijun → 3) Tenkan → 4) Lagging Span</b>. Mây là thứ phải chú ý đầu tiên.' },
      { t: 'widget', name: 'ichi-full', title: 'Thực hành: bật hết 5 đường, rồi tắt dần từng đường để thấy vai trò của nó' }
    ] },
    { icon: '☁️', title: 'Đọc mây: giá ở đâu so với mây?', blocks: [
      { t: 'p', x: 'Mây giống một <b>tấm bản đồ</b>: cho biết xu hướng, sức mạnh xu hướng và các vùng hỗ trợ/kháng cự mà giá có thể gặp – cả bây giờ lẫn 26 nến tới.' },
      { t: 'tabs', items: [
        ['Giá TRÊN mây', '<p><b>Xu hướng tăng.</b> Mây phía dưới đóng vai trò hỗ trợ (đặc biệt cạnh trên của mây). Giá chạm cạnh trên mây rồi bật lên = nhịp điều chỉnh lành mạnh.</p>'],
        ['Giá TRONG mây', '<p><b>Cân bằng, bất định, không có xu hướng.</b> Giá đang cố đổi hướng nhưng chưa xác nhận. Cách giá thoát ra khỏi mây cho biết hướng mới được chọn (cũ hay mới).</p>'],
        ['Giá DƯỚI mây', '<p><b>Xu hướng giảm.</b> Mây phía trên là kháng cự. Mỗi lần giá hồi lên chạm cạnh dưới mây mà bị đẩy xuống là xác nhận xu hướng giảm vẫn tiếp diễn.</p>']
      ] },
      { t: 'h3', x: 'Giá cố gắng xuyên mây' },
      { t: 'list', items: [
        'Giá thử xuyên mây nhưng <b>rơi lại vào trong mây</b> → chưa xác nhận đổi xu hướng (xu hướng cũ chưa bị phá).',
        'Giá phá <b>cạnh dưới</b> mây rồi mây trở thành kháng cự → <b>xác nhận xu hướng giảm</b>.',
        'Giá bị chặn bởi SSA khi cố đảo chiều; sau đó mới vượt lên đỉnh mây, rồi quay xuống thử đáy mây. Nếu <b>đáy mây giữ được</b> như hỗ trợ thì thị trường không rơi lại vào xu hướng giảm.',
        'Giá có thể <b>chạy dọc theo mép mây</b>. Nếu phía trước có twist thì mép mây đó là hỗ trợ yếu và dễ bị phá.'
      ] },
      { t: 'tip', x: 'Trong xu hướng giảm rõ ràng, mây giảm (màu hồng/đỏ) <b>bám theo giá đi xuống</b> và là kháng cự cuối cùng mỗi khi giá hồi lên phá Tenkan và Kijun. Chỉ khi giá xuyên được qua một đoạn mây <b>phẳng, yếu</b> từ dưới lên thì xu hướng giảm mới kết thúc.' }
    ] },
    { icon: '🔮', title: 'Mây tương lai & Twist', blocks: [
      { t: 'p', x: 'Phần mây nằm bên phải giá là <b>chiếu cân bằng quá khứ về 26 nến sau</b>. Vì SSA nhanh còn SSB chậm, khi xu hướng đổi hướng thì hai đường sẽ cắt nhau (twist) – đó chỉ là hiệu ứng toán học của sự đổi chiều giá.' },
      { t: 'list', items: [
        'Ví dụ: giá đang đi ngang dưới Kijun rồi phá lên qua Kijun; đồng thời ở tương lai xuất hiện twist tăng (SSA cắt lên SSB), mây chuyển xanh. Thông tin chỉ nằm ở tương lai, còn hiện tại giá vẫn đang trong mây (cân bằng, bất định).',
        'Mây tự nó <b>không có giá trị dự đoán</b>: nó chỉ là kết quả của chuyển động giá hiện tại. Bạn không cần đợi nhìn thấy twist để biết hướng; việc phá Kijun đã hàm ý giá tăng.',
        'Khi giá tiến tới vị trí twist, đó là <b>vùng nguy hiểm tiềm tàng</b>, có thể xuyên qua và cắt đứt xu hướng trước đó → cần theo dõi sát.',
        '<b>Twist là “sự thiếu vắng của mây”</b>: chỗ mỏng nhất nên lần thử thứ hai thường thành công. Giá có thể thất bại lần đầu (bị mây chặn) rồi mới xuyên qua twist ở lần sau – đôi khi cần kiên nhẫn.'
      ] },
      { t: 'warn', x: 'Đừng coi twist là tín hiệu mua/bán độc lập. Nó là <b>cảnh báo</b> kèm cho các thông tin khác (phá Kijun, vị trí giá…).' },
      { t: 'mnemo', x: 'Twist = “chỗ mây thủng”. Giá thích đi theo <b>đường ít cản nhất</b>.' }
    ] },
    { icon: '🔴', title: 'Đọc Tenkan Sen', blocks: [
      { t: 'p', x: 'Tenkan chủ yếu cho biết <b>sức mạnh xu hướng ngắn hạn qua độ dốc</b>. Khi giá bám sát Tenkan dốc, xu hướng mạnh. Nó cũng là hỗ trợ/kháng cự tức thời; nếu bị phá, đó là <b>cảnh báo</b> về tuổi thọ của xu hướng hiện tại.' },
      { t: 'steps', items: [
        'Giá bám theo Tenkan khi xu hướng rõ ràng.',
        'Giá phá Tenkan theo hướng ngược lại → <b>cảnh báo</b> xu hướng cũ có thể kết thúc.',
        'Vài nến sau, giá thử lại Tenkan và xác nhận (hoặc không) sự đổi hướng.',
        'Giá đi ngang quanh Tenkan = thị trường lưỡng lự. Nhưng nếu Tenkan vẫn dốc mạnh, có thể kỳ vọng lực mua quay lại.'
      ] }
    ] },
    { icon: '🔵', title: 'Đọc Kijun Sen', blocks: [
      { t: 'p', x: 'Kijun là <b>một trong những đường quan trọng nhất</b>. Sau khi phá Tenkan, Kijun là vật cản thứ hai mà giá gặp.' },
      { t: 'tabs', items: [
        ['Giá bật khỏi Kijun', '<p>Nhịp điều chỉnh (pullback) chỉ là <b>nghỉ ngắn</b>; xu hướng hiện tại tiếp tục.</p>'],
        ['Giá phá qua Kijun', '<p>Hướng của chuyển động trước đó <b>trở nên lỗi thời</b>. Một xu hướng mới hình thành, miễn là sự phá vỡ không bị vô hiệu hoá bằng việc giá quay lại phía bên kia Kijun.</p>'],
        ['Giá cách xa Kijun', '<p>Kijun là điểm cân bằng nên giá đi quá xa thường <b>quay về</b> (hồi quy trung bình). Trên Fibonacci, Kijun trùng 50% của nhịp đã thoái lui.</p>']
      ] },
      { t: 'key', x: 'Mỗi khi giá gặp Kijun, hãy coi đó là <b>vật cản mạnh</b> cần xử lý – đây là vùng thị trường thường “làm việc” một lúc vì Kijun là điểm cân bằng của giá. Luôn xác định giá ở đâu so với Kijun để đánh giá chướng ngại trong vòng đời của xu hướng.' }
    ] },
    { icon: '🟣', title: 'Đọc Lagging Span', blocks: [
      { t: 'p', x: 'Lagging Span cư xử như giá khi đối mặt các vật cản – nhưng nó đối mặt với <b>các mức cản của quá khứ</b>. Vì chỉ dùng giá đóng cửa nên bạn cần tưởng tượng thêm bóng nến cũ bị “ẩn”.' },
      { t: 'h3', x: 'Ví dụ: chỉ số DAX (Đức), biểu đồ tháng' },
      { t: 'list', items: [
        '<b>Điểm A – đáy 3/2009</b>: Lagging Span bị chặn bởi đáy mây. Người đọc đúng khi đó hiểu được đợt giảm đã kết thúc và có thể mua lại cổ phiếu. Đáng chú ý là chỉ số duy nhất cho tín hiệu này.',
        '<b>Điểm B</b>: Lagging Span dừng ở đỉnh thân nến, dù giá giảm sâu hơn (bóng nến đỏ). Hai lớp hỗ trợ cùng lúc: của Lagging Span và của giá.',
        '<b>Điểm C</b>: Lagging Span gặp kháng cự ở SSA khiến giá hiện tại rơi dù trông như “giữa khoảng không”; giá quay về Kijun – trùng lúc Lagging Span chạm bóng một nến.',
        'Lagging Span cũng có thể <b>xuyên qua twist</b> của mây giống như giá.'
      ] },
      { t: 'h3', x: 'Khi giá và Lagging Span “mâu thuẫn”' },
      { t: 'p', x: 'Giá có thể đang giảm dưới mây, nhưng Lagging Span đã xuyên twist và đi vào vùng tăng. Hai hình ảnh trái nhau gây giai đoạn <b>lưỡng lự</b>: Lagging Span bật nhiều lần ở SSA (hỗ trợ) còn giá chạm Tenkan (kháng cự). Giá chỉ thực sự tăng và lên trên mây khi <b>Kijun nhường bước trước lực mua</b>.' },
      { t: 'widget', name: 'ichi-lag', title: 'Thử: bật thêm mây & Kijun để thấy Lagging Span va chạm gì' },
      { t: 'key', x: 'Luôn phân tích <b>cả hai hình ảnh của giá</b> (giá hiện tại và Lagging Span) cùng nhau. Lagging Span giúp giải thích hành động giá, đánh giá <b>tiềm năng của một chuyển động</b>, và là yếu tố bắt buộc khi vào lệnh, ra lệnh hay theo dõi vị thế đang mở.' }
    ] },
    { icon: '✅', title: 'Quy trình đọc một biểu đồ', blocks: [
      { t: 'steps', items: [
        '<b>Mây</b>: giá ở trên, trong hay dưới mây? Mây xanh hay đỏ, dày hay mỏng? Phía trước có twist không?',
        '<b>Kijun</b>: giá cách Kijun xa hay gần? Kijun phẳng hay dốc? Giá bật hay phá?',
        '<b>Tenkan</b>: độ dốc thế nào (mạnh/yếu)? Giá bám theo hay đã phá?',
        '<b>Lagging Span</b>: nó đang ở trên hay dưới giá/mây của 26 nến trước? Phía trước có vật cản không?',
        '<b>Tổng hợp</b>: các thông tin có đồng thuận không? Nếu mâu thuẫn → đứng ngoài hoặc chờ thêm xác nhận.'
      ] },
      { t: 'mnemo', x: 'Nhớ thứ tự <b>M – K – T – L</b>: <b>M</b>ây → <b>K</b>ijun → <b>T</b>enkan → <b>L</b>agging Span.' }
    ] }
  ],
  summary: [
    'Đọc 5 đường <b>đồng thời</b>, ưu tiên mây trước tiên.',
    'Giá trên mây = tăng, dưới mây = giảm, trong mây = cân bằng/bất định.',
    'Mây tương lai chỉ là kết quả của giá hiện tại; twist là chỗ mây mỏng, giá dễ xuyên và là vùng cần theo dõi.',
    'Tenkan: độ dốc = sức mạnh; bị phá = cảnh báo.',
    'Kijun: bật = chỉ nghỉ ngắn; phá = xu hướng mới (nếu không bị vô hiệu hoá); giá xa Kijun sẽ có xu hướng quay lại.',
    'Lagging Span đối mặt vật cản quá khứ; phải phân tích cùng giá để đánh giá tiềm năng và xác nhận tín hiệu.'
  ],
  cards: [
    ['Thứ tự ưu tiên khi đọc biểu đồ Ichimoku?', 'Mây → Kijun → Tenkan → Lagging Span (M-K-T-L).'],
    ['Giá nằm trên mây nghĩa là gì?', 'Xu hướng tăng; mây bên dưới đóng vai trò hỗ trợ.'],
    ['Giá nằm dưới mây nghĩa là gì?', 'Xu hướng giảm; mây bên trên là kháng cự.'],
    ['Giá nằm trong mây nghĩa là gì?', 'Cân bằng, bất định, chưa có xu hướng rõ.'],
    ['Giá thử xuyên mây nhưng rơi lại vào trong mây thì sao?', 'Chưa xác nhận đảo chiều; xu hướng cũ chưa bị phá.'],
    ['Vì sao giá dễ xuyên qua chỗ twist?', 'Twist là chỗ mây mỏng nhất – “sự thiếu vắng của mây”, nên ít cản.'],
    ['Mây tương lai có giá trị dự đoán không?', 'Không – nó chỉ là kết quả của chuyển động giá hiện tại (phép toán trên quá khứ).'],
    ['Độ dốc của Tenkan cho biết điều gì?', 'Sức mạnh/động lượng của xu hướng ngắn hạn.'],
    ['Giá phá Tenkan theo hướng ngược lại báo hiệu gì?', 'Một cảnh báo rằng xu hướng hiện tại có thể sắp kết thúc.'],
    ['Giá bật khỏi Kijun nghĩa là gì?', 'Chỉ là nhịp nghỉ (pullback) ngắn; xu hướng tiếp tục.'],
    ['Giá phá qua Kijun nghĩa là gì?', 'Hướng cũ trở nên lỗi thời, xu hướng mới hình thành (nếu không bị vô hiệu bởi việc giá quay lại bên kia Kijun).'],
    ['Vì sao giá cách xa Kijun thường quay về?', 'Kijun là điểm cân bằng (50% Fibonacci) – hiệu ứng hồi quy về trung bình, như nam châm.'],
    ['Vì sao Lagging Span lọc được nhiễu?', 'Vì chỉ dùng giá đóng cửa nên không bị bóng nến làm nhiễu.'],
    ['Lagging Span đối mặt với điều gì?', 'Các mức hỗ trợ/kháng cự của quá khứ (cách 26 nến trước).'],
    ['Khi giá và Lagging Span cho tín hiệu trái ngược thì sao?', 'Xuất hiện giai đoạn lưỡng lự; cần phân tích cả hai và chờ xác nhận (ví dụ Kijun bị phá).'],
    ['Ví dụ DAX tháng 3/2009 minh hoạ điều gì?', 'Lagging Span bị chặn ở đáy mây báo hiệu đợt giảm kết thúc – người đọc đúng có thể mua lại.'],
    ['Khi giá đi vào vùng twist cần làm gì?', 'Theo dõi sát: có thể xuyên qua và phá xu hướng trước đó, nhưng đừng coi là tín hiệu độc lập.']
  ],
  quiz: [
    { q: 'Khi mở một biểu đồ Ichimoku, bạn nên chú ý yếu tố nào ĐẦU TIÊN?', o: ['Tenkan Sen', 'Đám mây', 'Lagging Span', 'Khối lượng'], a: 1, e: 'Mây là trung tâm của hệ thống – cho xu hướng, sức mạnh và hỗ trợ/kháng cự cả hiện tại lẫn tương lai.' },
    { q: 'Giá nằm dưới mây thường có nghĩa là:', o: ['Xu hướng tăng', 'Xu hướng giảm', 'Thị trường cân bằng', 'Sắp có twist'], a: 1, e: 'Dưới mây = xu hướng giảm, mây là kháng cự.' },
    { q: 'Giá nằm trong mây được coi là:', o: ['Xu hướng tăng mạnh', 'Vùng không xu hướng, bất định cao', 'Tín hiệu mua', 'Tín hiệu bán'], a: 1, e: 'Mây là vùng cân bằng; cần chờ giá thoát ra để biết hướng.' },
    { q: 'Giá thử xuyên mây nhưng quay lại vào trong mây. Điều này:', o: ['Xác nhận xu hướng đảo chiều', 'Chưa xác nhận đảo chiều', 'Là tín hiệu mua mạnh', 'Là lỗi dữ liệu'], a: 1, e: 'Đảo chiều chỉ hiệu lực khi giá xuyên hẳn qua mây.' },
    { q: 'Vì sao giá dễ xuyên qua chỗ twist hơn chỗ mây dày?', o: ['Vì twist có khối lượng lớn', 'Vì twist là chỗ mây mỏng nhất', 'Vì twist nằm gần Kijun', 'Vì twist luôn màu xanh'], a: 1, e: 'Tại twist, SSA và SSB gặp nhau nên gần như không có mây để cản.' },
    { q: 'Phát biểu nào đúng về mây tương lai?', o: ['Nó dự đoán chính xác giá', 'Nó chỉ là kết quả của chuyển động giá hiện tại', 'Nó chỉ có giá trị ở khung ngày', 'Nó thay thế Lagging Span'], a: 1, e: 'Mây không có giá trị dự đoán tự thân; đó là phép chiếu cân bằng quá khứ/hiện tại.' },
    { q: 'Độ dốc của Tenkan Sen chủ yếu cho biết điều gì?', o: ['Khối lượng giao dịch', 'Sức mạnh xu hướng ngắn hạn', 'Mức Fibonacci', 'Độ dày của mây'], a: 1, e: 'Tenkan dốc = động lượng mạnh; bẻ cong/đi ngang = yếu đi.' },
    { q: 'Giá bật khỏi Kijun Sen trong một xu hướng. Cách hiểu hợp lý nhất?', o: ['Xu hướng đã đảo chiều', 'Một nhịp nghỉ ngắn, xu hướng tiếp tục', 'Mây sắp biến mất', 'Cần đổi thông số'], a: 1, e: 'Bật khỏi Kijun = pullback; phá qua Kijun mới là dấu hiệu đổi hướng.' },
    { q: 'Tại sao giá đi quá xa Kijun thường quay lại?', o: ['Vì Kijun là điểm cân bằng, có tính hồi quy về trung bình', 'Vì Kijun cố định', 'Vì Kijun là giá đóng cửa', 'Vì Kijun luôn dốc'], a: 0, e: 'Kijun là 50% của nhịp, đóng vai trò nam châm kéo giá về cân bằng.' },
    { q: 'Lagging Span lọc nhiễu của bóng nến vì:', o: ['Nó dùng giá cao nhất', 'Nó chỉ dựa trên giá đóng cửa', 'Nó dùng giá mở cửa', 'Nó trung bình 26 nến'], a: 1, e: 'Giá đóng cửa bỏ qua bóng nến, nên Lagging Span “sạch” hơn.' },
    { q: 'Ví dụ DAX tháng 3/2009 cho thấy Lagging Span giúp:', o: ['Dự báo lợi nhuận công ty', 'Nhận ra đợt giảm đã kết thúc khi bị chặn ở đáy mây', 'Xác định kháng cự tuần', 'Đo khối lượng'], a: 1, e: 'Lagging Span bị chặn ở đáy mây báo hiệu đáy của đợt sụt giảm.' },
    { q: 'Giá đang giảm nhưng Lagging Span lại đi vào vùng tăng. Trader nên:', o: ['Mua ngay', 'Bán ngay', 'Hiểu đó là giai đoạn lưỡng lự và chờ xác nhận', 'Bỏ qua Lagging Span'], a: 2, e: 'Hai hình ảnh trái ngược → lưỡng lự; giá chỉ tăng thật khi Kijun bị phá.' },
    { q: 'Khi giá tiến tới vị trí twist của mây, trader nên:', o: ['Bỏ qua', 'Coi là vùng cần theo dõi sát', 'Đóng mọi vị thế', 'Đổi thông số'], a: 1, e: 'Twist là vùng có thể xuyên qua và phá xu hướng trước, nhưng chỉ là cảnh báo.' },
    { q: 'Trong xu hướng giảm, mây giảm có vai trò gì khi giá hồi lên?', o: ['Hỗ trợ', 'Kháng cự cuối cùng', 'Không ảnh hưởng', 'Tín hiệu mua'], a: 1, e: 'Mây bám theo giá đi xuống và chặn các nhịp hồi.' },
    { q: 'Chữ viết tắt M-K-T-L trong quy trình đọc biểu đồ là:', o: ['Mua-Kiểm-Tính-Lỗ', 'Mây-Kijun-Tenkan-Lagging Span', 'Mức-Khoảng-Thời gian-Lệnh', 'Mây-Khối lượng-Trung bình-Lãi'], a: 1, e: 'Đọc theo thứ tự: Mây → Kijun → Tenkan → Lagging Span.' }
  ],
  match: [
    ['Giá trên mây', 'Xu hướng tăng'],
    ['Giá dưới mây', 'Xu hướng giảm'],
    ['Giá trong mây', 'Cân bằng, bất định'],
    ['Twist', 'Chỗ mây mỏng, dễ bị giá xuyên qua'],
    ['Độ dốc Tenkan', 'Sức mạnh xu hướng ngắn hạn'],
    ['Giá bật khỏi Kijun', 'Pullback ngắn, xu hướng tiếp tục'],
    ['Giá phá Kijun', 'Hướng cũ lỗi thời, xu hướng mới hình thành'],
    ['Lagging Span', 'Đối mặt vật cản của quá khứ'],
    ['Mây tương lai', 'Kết quả của giá hiện tại, không tự dự đoán'],
    ['M-K-T-L', 'Thứ tự đọc: Mây, Kijun, Tenkan, Lagging']
  ]
}

] };
