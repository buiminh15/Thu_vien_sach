// Tủ lạnh nén (EPI) – Chương 5: Xả, hút chân không, nạp và tìm rò rỉ.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.refrig = BOOK_DATA.refrig || { chapters: [] };
BOOK_DATA.refrig.chapters.push({
  n: 5,
  title: 'Xả môi chất, hút chân không, nạp gas và tìm rò rỉ',
  intro: 'Khi sửa phần kín của hệ thống, trình tự là: <b>xả môi chất → sửa → hút chân không → nạp → tìm rò rỉ</b>. Đây là kỹ thuật theo chuẩn năm 1985 với R12; xem lại ghi chú hiện đại ở chương 3 (ngày nay phải thu hồi môi chất chứ không xả ra khí quyển).',
  sections: [
    { icon: '⚠️', title: 'Xả môi chất khỏi hệ thống (theo sổ tay 1985)', blocks: [
      { t: 'warn', x: '<b>Lưu ý hiện đại:</b> thực hành “xả R12 ra phòng” dưới đây là của năm 1985. Ngày nay hãy thu hồi môi chất bằng thiết bị chuyên dụng theo quy định địa phương. Phần bên dưới dùng để hiểu quy trình và các điều kiện an toàn gốc của tài liệu.' },
      { t: 'steps', items: [
        '<b>Thông gió</b> phòng sẽ xả (mở cửa/cửa sổ), không có ngọn lửa, không ai hút thuốc.',
        'Dùng dũa cắt một rãnh ở một bên <b>ống mao dẫn, gần bộ lọc hút ẩm</b> (sâu khoảng 1/4 độ dày ống).',
        'Uốn nhẹ ống mao dẫn ở rãnh cho tới khi gãy; <b>cẩn thận không làm hỏng ống</b>.',
        'Khi ống gãy, khí R12 áp cao (và chút chất lỏng) thoát ra — <b>uốn ống ra xa mặt</b>.',
        '<b>Không bắt đầu làm việc trên hệ thống</b> cho tới khi R12 thoát hết.'
      ] }
    ] },
    { icon: '🌬️', title: 'Hút chân không (evacuate)', blocks: [
      { t: 'p', x: 'Sau khi sửa phải loại hết không khí và mạt bụi nhỏ bằng <b>bơm chân không</b>. Không có bơm chuyên dụng thì có thể <b>biến một máy nén dự phòng thành bơm chân không</b>.' },
      { t: 'h3', x: 'Biến máy nén thành bơm chân không' },
      { t: 'steps', items: [
        'Bắt chặt máy nén lên tấm gỗ cứng bằng bu-lông và cao su giảm chấn của máy; lắp van (line valve) lên gỗ.',
        'Nối khoảng <b>2 m</b> dây điện vào chân cấp điện trong hộp đấu dây theo hướng dẫn nhà sản xuất; nối <b>công tắc</b> vào chân thường dành cho thermostat.',
        'Lắp phích; nếu ổ cắm có 3 lỗ thì dùng dây 3 ruột và nối dây <b>nối đất</b> chắc vào bộ phận kim loại của máy nén hoặc hộp đấu dây.',
        'Nhận biết các ống máy nén; tháo nắp ống hút và ống đẩy; <b>để ống xử lý đóng</b>.',
        '<b>Tháo rơ-le khởi động và mọi đấu nối điện trước khi hàn</b> để nhiệt không làm hỏng. Hàn nối thêm 10 cm ống đồng 1/4 inch (6 mm) vào ống hút bằng mối hàn chắc.',
        'Lắp khớp ren vào đầu ống hút bằng cách loe hoặc hàn; lắp lại các đấu nối điện.',
        'Cắm điện, <b>chỉ chạy đủ lâu</b> để chắc rằng không khí đang được hút vào qua ống hút — hút quá nhiều không khí có thể làm hỏng máy nén.'
      ] },
      { t: 'h3', x: 'Hút chân không hệ thống' },
      { t: 'steps', items: [
        'Nếu đã có kết nối đo áp bằng đồng hồ phân tích thì dùng lại; nếu không, dùng khớp nối nhanh trên ống xử lý và van trên đường nối bơm.',
        'Nối ống hút của máy nén (đã thành bơm) vào van; nối thêm một ống nạp từ van tới khớp nối nhanh trên ống xử lý máy nén của hệ thống. Các mối nối ống phải chặt cả hai đầu.',
        'Mở hết van điều khiển trên khớp nối nhanh (ngược chiều kim đồng hồ) và mở hết van đường nối.',
        'Cắm bơm chân không vào ổ điện — <b>không cắm máy nén của hệ thống</b>. Hơ nhẹ dàn ngưng bằng đèn khò để đuổi hơi ẩm.',
        'Giữ bơm mát; nếu bơm dừng là động cơ quá nóng → đóng van khớp nối nhanh, tắt bơm, nghỉ <b>15 phút</b> rồi chạy lại.',
        'Sau khi bơm chạy <b>5 phút</b>, không khí đã được hút hết: đóng hẳn van khớp nối nhanh để giữ chân không, rút điện và tháo bơm. Để khớp nối nhanh và ống nạp tại chỗ.'
      ] },
      { t: 'h3', x: 'Hút chân không bằng đồng hồ phân tích' },
      { t: 'steps', items: [
        'Dùng lại kết nối đo áp nếu đã làm; nối các ống như hình (ống xanh tới ống xử lý, ống đỏ tới van chọc ống đẩy).',
        'Mở hết van điều khiển trên van chọc ống đẩy và khớp nối nhanh/van chọc ống xử lý; mở hết van trên đồng hồ phân tích (hình 4) và van đường nối bơm.',
        'Chạy bơm; theo dõi đồng hồ xanh để đạt chân không tốt nhất: ít nhất <b>28 inch Hg (710 mm Hg, tức −0,9 bar)</b>.',
        'Đóng hết van đồng hồ phân tích, tắt bơm và theo dõi đồng hồ xanh: chân không phải <b>được giữ</b>. Áp tăng lên nghĩa là có <b>rò không khí</b> vào hệ thống → siết lại mọi mối nối ống rồi làm lại.',
        'Tháo ống nối bơm khỏi cổng giữa, bịt cổng bằng đai ốc nắp và bịt ống; tháo bơm.',
        'Để hệ thống <b>“dưới chân không”</b>: sẵn sàng để nạp R12.'
      ] },
      { t: 'widget', name: 'rf-vacuum', title: 'Kiểm tra giữ chân không' }
    ] },
    { icon: '🛢️', title: 'Chuyển R12 lỏng sang bình dịch vụ', blocks: [
      { t: 'p', x: 'R12 cung cấp trong bình lớn; phải chuyển ở dạng <b>lỏng</b> sang bình dịch vụ nhỏ hơn. Đọc lại quy tắc an toàn ở chương 3 trước.' },
      { t: 'steps', items: [
        'Nối bình dịch vụ với bơm chân không bằng ống nạp; mối nối chặt. Mở hết van đường nối ở bơm và van điều khiển của bình dịch vụ.',
        'Bật bơm <b>5 phút</b> hút chân không bình dịch vụ; đóng van bình, tắt và tháo bơm.',
        '<b>Làm lạnh bình nạp</b> (bằng đá hoặc cho vào tủ lạnh dự phòng) trước khi nạp — bình lạnh chứa được nhiều R12 hơn.',
        'Bình cung cấp <b>hai cửa</b>: nối ống nạp và bình dịch vụ vào cửa ghi “liquid”, giữ bình thẳng đứng. Bình <b>một cửa</b>: nối rồi <b>dốc ngược</b> bình cung cấp.',
        'Đuổi không khí khỏi ống nạp: nới mối nối ở bình dịch vụ, mở van bình cung cấp thật nhẹ, để R12 thoát đẩy không khí ra, siết lại.',
        'Mở hết van bình cung cấp rồi van bình dịch vụ; giữ <b>bình dịch vụ thấp hơn</b> bình cung cấp; chất lỏng chảy sang (sờ ống nạp thấy dòng).',
        'Khi dòng ngừng: đóng hẳn van bình cung cấp; đóng hẳn van bình dịch vụ; tháo ống nạp cẩn thận (bên trong có R12 lỏng áp cao).',
        'Nạp lượng đo trước: cân bình rỗng và cân khi nạp; <b>không vượt khối lượng ghi trên bình</b>; chắc chắn không nạp quá đầy.'
      ] },
      { t: 'widget', name: 'rf-cylinder', title: 'Kiểm tra mức nạp bình R12' }
    ] },
    { icon: '⛽', title: 'Nạp gas vào hệ thống', blocks: [
      { t: 'h3', x: 'Nạp không dùng đồng hồ phân tích' },
      { t: 'steps', items: [
        'Hệ thống đã được hút chân không và các kết nối nạp còn giữ lại.',
        'Tìm loại R12 trên nhãn nhà sản xuất; chuyển vào bình dịch vụ.',
        'Nối ống nạp vào van bình dịch vụ; giữ bình <b>thẳng đứng</b> để vào hệ thống là <b>khí</b> chứ không phải chất lỏng.',
        'Đuổi không khí ở ống: nới mối ở khớp nối nhanh, mở nhẹ van bình, để R12 đẩy khí, siết lại.',
        'Mở hết van khớp nối nhanh; mở nhẹ van bình, điều chỉnh dòng cẩn thận. Hệ thống đang chân không thì phải cho một ít R12 vào <b>trước khi khởi động máy nén</b>.',
        'Khởi động máy nén để hút R12 vào hệ thống; <b>dừng máy khi bắt đầu đóng băng/sương muối trên ống hút</b> chỗ ra khỏi dàn bay hơi.',
        'Đóng hẳn van khớp nối nhanh và van bình; kiểm tra mọi triệu chứng ở mức nạp đúng và tìm rò.',
        '<b>Bóp ống xử lý hai lần</b>, tháo khớp nối nhanh, hàn bít đầu ống xử lý, kiểm tra rò lại.'
      ] },
      { t: 'h3', x: 'Nạp dùng đồng hồ phân tích' },
      { t: 'p', x: 'Dùng khi áp suất hệ thống được đo để tìm mức nạp đúng (xem Phần B). Cũng chuyển R12 vào bình dịch vụ rồi nối như hình: ống xanh có thể nối ống xử lý bằng khớp nối nhanh hoặc van chọc.' },
      { t: 'steps', items: [
        'Đuổi không khí khỏi các ống ở những điểm trên hình.',
        'Mở hết: van điều khiển trên van chọc; khớp nối nhanh (hoặc van chọc).',
        'Đặt van đồng hồ phân tích ở vị trí nạp: <b>van xanh mở, van đỏ đóng</b>.',
        'Mở nhẹ van bình dịch vụ, điều chỉnh dòng; phải cho R12 vào trước khi khởi động máy nén.',
        'Khởi động máy nén; <b>dừng khi có sương/đá trên ống hút ra khỏi dàn bay hơi</b>, hoặc khi đồng hồ cho áp suất chạy bình thường. Muốn đọc đúng đồng hồ xanh: đóng van xanh 5 phút rồi đọc.',
        'Đóng hết: van bình dịch vụ; van chọc; khớp nối nhanh (hoặc van chọc); tháo bình, đồng hồ và ống nạp.'
      ] },
      { t: 'widget', name: 'rf-charge-seq', title: 'Sắp xếp đúng thứ tự khi nạp' }
    ] },
    { icon: '🔎', title: 'Tìm rò rỉ R12', blocks: [
      { t: 'p', x: 'Dùng <b>đèn dò rò kiểu propan</b> hoặc kiểu cồn. Nếu không có đèn dò, kiểm tra các vị trí có thể rò bằng <b>nước xà phòng</b> — rò sẽ nổi bọt.' },
      { t: 'steps', items: [
        'Với đèn propan: vặn chặt đèn vào ống mềm, xoay để thấy ống lửa; kiểm tra mọi mối nối rò khí bằng nước xà phòng trước khi châm.',
        'Mở van điều chỉnh vừa đủ ra ít khí; châm lửa; chỉnh cỡ ngọn lửa bằng van.',
        'Lửa phải đủ lớn lấp đầy lỗ ống lửa (để dễ thấy) nhưng <b>không lớn đến mức làm đèn nóng</b>.',
        'Đèn cháy với ngọn <b>xanh nhạt</b>. Nếu lửa <b>xanh lục</b> nghĩa là có nhiều R12 trong không khí → <b>không thể tìm rò</b>: tắt đèn, thông gió kỹ (mở hết cửa), khi tin rằng khí đã hết thì làm lại.',
        'Khi lửa xanh nhạt, đưa đầu hở của <b>ống dò</b> dưới các mối nối nghi rò.',
        'Ngọn lửa <b>chuyển xanh lục</b> nghĩa là R12 đang bị hút lên ống dò → đó là chỗ rò.'
      ] },
      { t: 'warn', x: 'Đèn dò chỉ tìm được rò khi trong hệ thống còn một ít khí R12.' },
      { t: 'widget', name: 'rf-leak-flame', title: 'Màu ngọn lửa đèn dò nói lên điều gì?' }
    ] }
  ],
  summary: [
    'Trình tự: xả (nay thu hồi) → sửa → hút chân không ≥ 28 inchHg (−0,9 bar), giữ được → nạp khí (bình thẳng đứng) → tìm rò.',
    'Hút chân không: bơm chạy ~5 phút; bơm nóng thì nghỉ 15 phút; chân không phải được giữ khi tắt bơm.',
    'Nạp: phải cho chút R12 vào trước khi chạy máy nén; dừng khi có sương muối trên ống hút; bóp ống xử lý 2 lần rồi hàn bít.',
    'Đèn dò propan: lửa xanh nhạt bình thường, chuyển xanh lục là có R12; nhiều khí trong phòng thì phải thông gió.'
  ],
  cards: [
    ['Trình tự sửa phần kín hệ thống?', 'Xả → sửa → hút chân không → nạp → tìm rò.'],
    ['Xả ở đâu (1985)?', 'Cắt rãnh và bẻ gãy ống mao dẫn gần bộ lọc hút ẩm; uốn ra xa mặt.'],
    ['Vì sao không được bắt đầu sửa ngay?', 'Phải chờ R12 thoát hết.'],
    ['Biến máy nén thành bơm chân không: tháo gì trước khi hàn?', 'Rơ-le khởi động và mọi đấu nối điện.'],
    ['Ống xử lý của máy nén làm bơm?', 'Để đóng.'],
    ['Chân không tối thiểu cần đạt?', '28 inch Hg (710 mm Hg ≈ −0,9 bar).'],
    ['Cách kiểm chân không giữ được?', 'Đóng van, tắt bơm, theo dõi đồng hồ xanh; áp tăng = rò không khí.'],
    ['Bơm chân không bị dừng do nóng?', 'Đóng van, tắt, nghỉ 15 phút rồi chạy lại.'],
    ['Thời gian hút khi chạy ổn?', 'Khoảng 5 phút.'],
    ['Vì sao làm lạnh bình dịch vụ?', 'Bình lạnh chứa được nhiều R12 hơn.'],
    ['Bình hai cửa nạp lỏng ở cửa nào?', 'Cửa ghi “liquid”, bình đứng.'],
    ['Bình một cửa muốn lấy lỏng?', 'Dốc ngược bình cung cấp.'],
    ['Khi nạp khí vào hệ thống bình dịch vụ để?', 'Thẳng đứng (để vào hệ thống là khí).'],
    ['Khi nào dừng nạp?', 'Khi sương/đá hình thành trên ống hút ra khỏi dàn bay hơi.'],
    ['Lửa đèn dò xanh lục nghĩa là?', 'Có R12 (nhiều trong phòng hoặc tại chỗ rò).']
  ],
  quiz: [
    { q: 'Chân không cần đạt tối thiểu:', o: ['10 inch Hg', '20 inch Hg', '28 inch Hg', '30 bar'], a: 2, e: '710 mm Hg ≈ −0,9 bar.' },
    { q: 'Tắt bơm mà áp trên đồng hồ xanh tăng nghĩa là:', o: ['Tốt', 'Có rò không khí vào', 'Hết gas', 'Bơm hỏng'], a: 1, e: 'Siết lại các mối nối.' },
    { q: 'Bơm chân không (máy nén) bị dừng vì nóng:', o: ['Chạy tiếp', 'Nghỉ 15 phút', 'Tưới nước', 'Thay dầu'], a: 1, e: 'Đóng van trước.' },
    { q: 'Khi nạp, trước khi khởi động máy nén phải:', o: ['Cho một ít R12 vào hệ thống', 'Xả hết', 'Mở van đỏ', 'Hàn ống'], a: 0, e: 'Hệ thống đang chân không.' },
    { q: 'Dừng nạp khi:', o: ['Có sương/đá trên ống hút ra khỏi dàn bay hơi', 'Máy nén nóng', 'Hết 1 phút', 'Đèn sáng'], a: 0, e: 'Hoặc áp chạy bình thường.' },
    { q: 'Sau khi nạp xong ống xử lý:', o: ['Bóp 2 lần, tháo kết nối, hàn bít', 'Để hở', 'Dán băng', 'Cắt bỏ'], a: 0, e: 'Rồi kiểm tra rò lại.' },
    { q: 'Lửa đèn dò propan bình thường là:', o: ['Xanh lục', 'Xanh nhạt', 'Vàng', 'Đỏ'], a: 1, e: 'Xanh lục = có R12.' },
    { q: 'Nhiều R12 trong phòng thì:', o: ['Tìm rò vẫn được', 'Không tìm được rò; thông gió rồi làm lại', 'Tăng lửa', 'Tắt đèn'], a: 1, e: 'Lửa xanh lục liên tục.' },
    { q: 'Không có đèn dò thì dùng:', o: ['Nước xà phòng', 'Nến', 'Đèn pin', 'Giấy'], a: 0, e: 'Có bọt là có rò.' },
    { q: 'Vị trí van khi nạp bằng đồng hồ phân tích:', o: ['Xanh mở, đỏ đóng', 'Cả hai đóng', 'Cả hai mở', 'Đỏ mở, xanh đóng'], a: 0, e: 'Vẫn đo được cả hai áp.' }
  ],
  match: [
    ['28 inch Hg', 'Chân không tối thiểu'],
    ['Bình dịch vụ', 'Chứa R12 lỏng đã chuyển'],
    ['Liquid port', 'Cửa lấy lỏng của bình hai cửa'],
    ['Sương muối ống hút', 'Dấu hiệu dừng nạp'],
    ['Đèn dò propan', 'Tìm rò bằng ngọn lửa'],
    ['Nước xà phòng', 'Phương án tìm rò khi không có đèn'],
    ['Bóp ống xử lý', 'Bịt trước khi hàn bít']
  ]
});
