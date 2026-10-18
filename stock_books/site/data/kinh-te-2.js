// Phần 1: Kinh tế vi mô – Chương 5–8 (bài 16–33 của sách "Các khái niệm cơ bản về kinh tế").
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.kinhte = BOOK_DATA.kinhte || { chapters: [] };
BOOK_DATA.kinhte.chapters.push(

/* ======================= CHƯƠNG 5 ======================= */
{
  n: 5,
  title: 'Phân tích cận biên và độc quyền',
  intro: 'Bài 16–19: ra quyết định kinh doanh bằng “biên” (thêm một đơn vị nữa thì sao?), quy tắc chọn sản lượng tối đa hóa lợi nhuận MC = MR, và vì sao độc quyền gây tổn thất cho xã hội cùng các cách kiểm soát.',
  sections: [
    { icon: '🌾', title: 'Phân tích cận biên: năng suất biên giảm dần (bài 16)', blocks: [
      { t: 'p', x: '<b>Phân tích cận biên (marginal analysis)</b> là cách tiếp cận cơ bản khi ra quyết định kinh doanh: thay vì hỏi “tổng cộng bao nhiêu?”, ta hỏi <i>“làm thêm một đơn vị nữa thì được/mất gì?”</i>' },
      { t: 'h3', x: 'Ví dụ trồng lúa' },
      { t: 'table', head: ['Bao phân urê', 'Sản lượng lúa/ha', 'Năng suất biên (phần tăng thêm)'], rows: [
        ['6 bao', '5,0 tấn', '—'], ['7 bao', '5,5 tấn', '+500 kg'], ['8 bao', '5,8 tấn', '+300 kg (tăng chậm lại)'], ['9 bao', 'giảm', '<b>âm</b>: quá nhiều ure làm “ngộ độc” cây lúa']
      ] },
      { t: 'key', x: '<b>Năng suất biên (marginal product)</b> = sản lượng tăng thêm khi dùng thêm <b>một đơn vị đầu vào</b> (giữ nguyên các đầu vào khác). <b>Quy luật năng suất biên giảm dần</b>: dùng ngày càng nhiều một đầu vào thì mức tăng sản lượng tăng thêm ngày càng nhỏ, cuối cùng có thể âm.' },
      { t: 'tip', x: 'Quy luật đúng với phân bón và cả nhiều đầu vào, ngành khác. Khái niệm “biên” còn áp dụng cho <b>doanh thu, lợi nhuận, chi phí, thuế suất</b>… (mỗi cái có quy luật riêng).' }
    ] },
    { icon: '📈', title: 'Chọn sản lượng tối đa hóa lợi nhuận: MC = MR (bài 17)', blocks: [
      { t: 'p', x: 'Doanh nghiệp cần sản xuất bao nhiêu đơn vị để lợi nhuận lớn nhất? Câu trả lời dựa vào hai chỉ số: <b>chi phí biên (MC)</b> và <b>doanh thu biên (MR)</b>.' },
      { t: 'table', head: ['Khái niệm', 'Nghĩa', 'Trong ví dụ'], rows: [
        ['<b>Chi phí biên MC</b>', 'Chi phí tăng thêm khi sản xuất thêm 1 đơn vị', 'Tạ lúa thứ 56: 140.000 đ; thứ 57: 200.000 đ; thứ 58: 220.000 đ'],
        ['<b>Doanh thu biên MR</b>', 'Doanh thu tăng thêm khi bán thêm 1 đơn vị. Với người bán chấp nhận giá thị trường: MR = giá', 'Giá thị trường 200.000 đ/tạ nên MR = 200.000']
      ] },
      { t: 'p', x: 'MC tăng vì <b>năng suất biên của đầu vào giảm dần</b>. Cân đối chi phí và doanh thu:' },
      { t: 'table', head: ['Tạ lúa', 'MR', 'MC', 'Lợi nhuận tăng thêm'], rows: [
        ['56', '200.000', '140.000', '<b>+60.000</b> → nên làm'], ['57', '200.000', '200.000', '<b>0</b> → điểm tối ưu'], ['58', '200.000', '220.000', '<b>−20.000</b> → không nên']
      ] },
      { t: 'key', x: '<b>Quy tắc vàng: lợi nhuận tối đa khi MC = MR.</b> Còn MR &gt; MC thì nên sản xuất thêm; MR &lt; MC thì nên giảm. Ở ví dụ: sản lượng tối ưu là <b>57 tạ</b>.' },
      { t: 'widget', name: 'marginal', title: 'Đổi giá lúa và xem sản lượng tối ưu thay đổi' }
    ] },
    { icon: '👑', title: 'Độc quyền: vì sao tồn tại và cách kiểm soát (bài 18–19)', blocks: [
      { t: 'p', x: '<b>Độc quyền (monopoly)</b>: thị trường chỉ có <b>một người bán</b> nhưng nhiều người mua, hàng hóa <b>không có sản phẩm thay thế gần</b>. (Gần gũi: <i>độc quyền nhóm – oligopoly</i> là thị trường chỉ vài hãng chiếm hầu hết sản lượng.)' },
      { t: 'tabs', items: [
        ['Vì sao có độc quyền?', '<b>1) Bằng sáng chế hoặc tiếp cận nguồn lực chiến lược</b> (Microsoft, một số công ty dầu).<br><b>2) Chính phủ trao quyền</b> bằng cách không cấp phép cho người khác (VNPT từng là công ty duy nhất được quản lý viễn thông đường dài và quốc tế).<br><b>3) Độc quyền tự nhiên</b>: một hãng đầu tư vốn lớn, sản xuất toàn bộ sản lượng thị trường với chi phí thấp hơn so với nhiều hãng cùng làm – thường ở <b>đường sắt, điện, khí đốt</b>.'],
        ['Họ làm gì?', 'Độc quyền có thể <b>thao túng giá bằng cách hạn chế sản lượng</b>: giá luôn <b>cao hơn chi phí biên</b> nên có lợi nhuận phụ trội. Ở thị trường cạnh tranh, hãng khác sẽ gia nhập và kéo giá về chi phí biên; nhưng ở thị trường độc quyền có <b>rào cản gia nhập</b> (bằng sáng chế, giấy phép) nên tình trạng kéo dài. Kết quả: giá cao hơn, sản lượng thấp hơn, lợi nhuận lớn hơn so với cạnh tranh.']
      ] },
      { t: 'warn', x: 'Với độc quyền: sản lượng thấp hơn và giá cao hơn mức cân bằng cạnh tranh ⇒ <b>xã hội bị tổn thất</b> (tổn thất vô ích). Vì vậy chính phủ thường điều tiết.' },
      { t: 'h3', x: 'Các biện pháp kiểm soát độc quyền (bài 19)' },
      { t: 'table', head: ['Biện pháp', 'Ví dụ trong sách'], rows: [
        ['<b>Tạo cạnh tranh</b> (cho phép nhiều thương hiệu, hàng nhập khẩu)', 'Honda từng gần như độc quyền xe máy ở VN, giá ~2.500 USD/chiếc; khi nhà nước cho phép nhiều nhãn hiệu, hàng nhập khẩu và lắp ráp trong nước, Honda phải <b>giảm giá ~50%</b>'],
        ['<b>Đánh thuế</b> để giảm lợi nhuận phụ trội (nguồn lực chiến lược)', 'Thuế thu nhập DN của các công ty dầu ở VN 50%, trong khi mức thông thường 32%'],
        ['<b>Kiểm soát giá</b> với độc quyền tự nhiên (đường sắt, điện, nước)', 'Cho phép giá tối đa dựa trên tỷ suất sinh lời hợp lý trên vốn đầu tư và rủi ro']
      ] },
      { t: 'tip', x: 'Phá độc quyền <b>không phải lúc nào cũng tốt</b>: nếu nhà nước không có biện pháp ngăn ngoại tác tiêu cực, xóa độc quyền có thể gây hại. Ví dụ: xe máy tăng nhanh sau khi cạnh tranh làm tăng ô nhiễm và tắc đường. Vì vậy việc có nên điều tiết và bằng cách nào vẫn là chủ đề <b>còn tranh luận</b>.' }
    ] }
  ],
  summary: [
    'Phân tích cận biên: xét tác động của việc làm thêm một đơn vị. Năng suất biên giảm dần là quy luật phổ biến.',
    'Chi phí biên MC thường tăng vì năng suất biên giảm; với người bán chấp nhận giá, MR = giá.',
    'Lợi nhuận tối đa khi MC = MR (ví dụ 57 tạ lúa).',
    'Độc quyền do bằng sáng chế/nguồn lực chiến lược, giấy phép nhà nước, hoặc độc quyền tự nhiên; đặt giá cao hơn MC và hạn chế sản lượng.',
    'Kiểm soát: tăng cạnh tranh, đánh thuế lợi nhuận phụ trội, kiểm soát giá; nhưng cần tính ngoại tác tiêu cực.'
  ],
  cards: [
    ['Phân tích cận biên là gì?', 'Cách xét quyết định bằng việc “làm thêm một đơn vị nữa” thì chi phí/doanh thu/lợi nhuận thay đổi thế nào.'],
    ['Năng suất biên là gì?', 'Sản lượng tăng thêm khi dùng thêm một đơn vị đầu vào, giữ nguyên các đầu vào khác.'],
    ['Quy luật năng suất biên giảm dần?', 'Dùng ngày càng nhiều một đầu vào thì phần sản lượng tăng thêm giảm dần, cuối cùng có thể âm (quá nhiều ure làm hại lúa).'],
    ['Chi phí biên (MC) là gì?', 'Chi phí tăng thêm khi sản xuất thêm 1 đơn vị sản lượng.'],
    ['Doanh thu biên (MR) của nông dân bán lúa?', 'Bằng giá thị trường (người bán chấp nhận giá): vd 200.000 đ/tạ.'],
    ['Điều kiện tối đa hóa lợi nhuận?', 'MC = MR. MR &gt; MC: tăng sản lượng; MR &lt; MC: giảm.'],
    ['Ví dụ lúa: sản lượng tối ưu?', '57 tạ (MC tạ 57 = 200.000 = MR; tạ 56 lời +60.000; tạ 58 lỗ −20.000).'],
    ['Độc quyền là gì?', 'Một người bán, nhiều người mua, hàng hóa không có sản phẩm thay thế gần.'],
    ['Ba nguyên nhân hình thành độc quyền?', 'Bằng sáng chế/nguồn lực chiến lược; chính phủ không cấp phép cho người khác; độc quyền tự nhiên (đường sắt, điện, khí đốt).'],
    ['Độc quyền định giá thế nào?', 'Hạn chế sản lượng, đặt giá cao hơn chi phí biên để có lợi nhuận phụ trội nhờ rào cản gia nhập.'],
    ['Ba cách kiểm soát độc quyền?', 'Tạo cạnh tranh; đánh thuế lợi nhuận phụ trội; kiểm soát giá tối đa với độc quyền tự nhiên.'],
    ['Vì sao phá độc quyền không phải lúc nào cũng tốt?', 'Nếu không kiểm soát được ngoại tác tiêu cực (vd xe máy tăng nhanh gây ô nhiễm, tắc đường) thì phúc lợi xã hội vẫn có thể giảm.']
  ],
  quiz: [
    { q: 'Năng suất biên của một đầu vào là:', o: ['Tổng sản lượng', 'Sản lượng tăng thêm khi dùng thêm một đơn vị đầu vào', 'Chi phí cố định', 'Doanh thu'], a: 1, e: 'Giữ nguyên các đầu vào khác.' },
    { q: 'Quy luật năng suất biên giảm dần nói rằng:', o: ['Dùng nhiều đầu vào luôn tăng đều sản lượng', 'Mức tăng sản lượng tăng thêm giảm dần khi tăng liên tục một đầu vào', 'Sản lượng luôn giảm', 'Chi phí cố định'], a: 1, e: 'Có thể thành âm khi lạm dụng.' },
    { q: 'Nông dân bón bao urê thứ 7 lúa tăng 500 kg, bao thứ 8 tăng 300 kg. Điều này minh họa:', o: ['Lợi suất tăng dần', 'Năng suất biên giảm dần', 'Cân bằng thị trường', 'Độc quyền'], a: 1, e: '500 → 300: mức tăng thêm giảm.' },
    { q: 'Điều kiện để tối đa hóa lợi nhuận là:', o: ['MC = MR', 'MC > MR', 'MR = 0', 'MC = 0'], a: 0, e: 'Tại đó không còn lợi nhuận tăng thêm khi làm thêm.' },
    { q: 'Với giá 200.000 và MC tạ 56/57/58 lần lượt 140.000/200.000/220.000, sản lượng tối ưu là:', o: ['55 tạ', '56 tạ', '57 tạ', '58 tạ'], a: 2, e: 'Tạ 57 có MC = MR, tạ 58 làm lỗ.' },
    { q: 'MC tăng khi sản lượng tăng chủ yếu vì:', o: ['Giá tăng', 'Năng suất biên của đầu vào giảm dần', 'Thuế tăng', 'Cầu tăng'], a: 1, e: 'Cần nhiều đầu vào hơn cho mỗi đơn vị tăng thêm.' },
    { q: 'Doanh nghiệp độc quyền có đặc điểm:', o: ['Nhiều người bán', 'Một người bán, nhiều người mua, không có sản phẩm thay thế gần', 'Giá bằng chi phí biên', 'Không có rào cản gia nhập'], a: 1, e: 'Rào cản gia nhập giữ cho độc quyền tồn tại.' },
    { q: 'Độc quyền tự nhiên thường thấy ở:', o: ['Nhà hàng', 'Đường sắt, điện, khí đốt', 'Cửa hàng quần áo', 'Quán cà phê'], a: 1, e: 'Một hãng sản xuất toàn bộ với chi phí thấp hơn nhiều hãng.' },
    { q: 'So với cạnh tranh, độc quyền thường có:', o: ['Giá thấp, sản lượng cao', 'Giá cao hơn, sản lượng thấp hơn', 'Giá bằng nhau', 'Không có lợi nhuận'], a: 1, e: 'Dẫn tới tổn thất cho xã hội.' },
    { q: 'Honda giảm giá ~50% sau khi nhà nước cho phép nhiều nhãn xe vào thị trường vì:', o: ['Áp lực cạnh tranh', 'Chi phí giảm 50%', 'Cầu giảm', 'Thuế tăng'], a: 0, e: 'Tăng cạnh tranh là một biện pháp kiểm soát độc quyền.' },
    { q: 'Kiểm soát giá độc quyền tự nhiên thường dựa vào:', o: ['Giá tùy ý', 'Tỷ suất sinh lời hợp lý trên vốn đầu tư và rủi ro', 'Giá bằng 0', 'Giá nhập khẩu'], a: 1, e: 'Cho phép giá tối đa tương ứng.' }
  ],
  match: [
    ['Năng suất biên', 'Sản lượng tăng thêm khi dùng thêm một đơn vị đầu vào'],
    ['Chi phí biên MC', 'Chi phí tăng thêm khi sản xuất thêm một đơn vị'],
    ['MC = MR', 'Điều kiện tối đa hóa lợi nhuận'],
    ['Độc quyền tự nhiên', 'Đường sắt, điện, khí đốt'],
    ['Rào cản gia nhập', 'Bằng sáng chế, giấy phép'],
    ['Kiểm soát giá', 'Giá tối đa theo tỷ suất sinh lời hợp lý'],
    ['Oligopoly', 'Vài hãng chiếm hầu hết sản lượng']
  ]
},

/* ======================= CHƯƠNG 6 ======================= */
{
  n: 6,
  title: 'Rủi ro, bất định và thông tin bất cân xứng',
  intro: 'Bài 20–25: phân biệt rủi ro và bất định, định giá rủi ro (phi công), và khi một bên biết nhiều hơn bên kia thì thị trường trục trặc thế nào: lựa chọn đối nghịch, phát tín hiệu, sàng lọc, vấn đề người ủy nhiệm – người thừa hành.',
  sections: [
    { icon: '🎲', title: 'Bất định và rủi ro (bài 20)', blocks: [
      { t: 'key', x: '<b>Bất định (uncertainty)</b>: có thể xảy ra nhiều hơn một kết quả. <b>Rủi ro có thể đo lường (measurable risk)</b>: có thể gán xác suất cho các kết quả. Còn nếu không có thông tin để ước lượng xác suất thì gọi là <b>bất định không thể đo lường</b>.' },
      { t: 'table', head: ['Tình huống', 'Loại', 'Vì sao'], rows: [
        ['Tung đồng xu <b>công bằng</b>', 'Rủi ro đo được', 'Biết 50% sấp, 50% ngửa'],
        ['Tung đồng xu <b>không biết tính chất</b>', 'Bất định không đo được', 'Không ước lượng được xác suất trước (ex-ante)'],
        ['Dịch cúm gia cầm ở châu Á', 'Bất định thuần túy', 'Không có dữ liệu lịch sử để ước lượng xác suất ⇒ rất khó bảo hiểm và quản lý']
      ] },
      { t: 'p', x: 'Ta ưu tiên tình huống có thể ước lượng xác suất từ dữ liệu lịch sử để <b>định lượng và quản lý rủi ro</b>. Công nghệ thông tin và thị trường tinh vi giúp việc này dễ hơn.' },
      { t: 'warn', x: 'Nhưng <b>đánh giá sai rủi ro là bản tính con người</b>. <b>Lạc quan quá mức</b> là nguyên nhân phổ biến: trong bong bóng bất động sản, nhà đầu tư bỏ qua rủi ro sụp đổ và tin giá luôn tăng; khi khủng hoảng, hoảng loạn khiến họ bán tháo bất hợp lý.' }
    ] },
    { icon: '✈️', title: 'Định giá rủi ro: nghề phi công (bài 21)', blocks: [
      { t: 'p', x: 'Các yếu tố khác như nhau, người làm môi trường nguy hiểm được trả cao hơn. Nhà kinh tế xem đây là <b>phần bù rủi ro</b> để bù cho rủi ro họ chấp nhận. Thị trường hiệu quả khi mức lương đủ để người lao động sẵn lòng đánh đổi sự an toàn.' },
      { t: 'steps', items: [
        '<b>Đo rủi ro:</b> tính theo giờ bay “quy đổi”: mỗi chuyến cộng thêm 3,7 giờ bay để bù rủi ro cất/hạ cánh. Chuyến Hà Nội – TP.HCM 1,75 giờ = <b>5,45 giờ quy đổi</b>. Thống kê: trung bình 1 máy bay mất sau mỗi <b>1.566.000 giờ quy đổi</b>.',
        'Phi công Boeing 777 của Vietnam Airlines bay ~<b>227 giờ quy đổi/tháng</b> → xác suất tử nạn trong tháng = 227 ÷ 1.566.000 ≈ <b>0,0145%</b>.',
        '<b>Phần bù rủi ro:</b> thu nhập ~40 triệu đồng/tháng; nếu làm việc an toàn có yêu cầu kỹ thuật và áp lực tương đương chỉ ~20 triệu ⇒ phần bù rủi ro = <b>20 triệu</b>.',
        '<b>Giá trị mạng sống ngầm:</b> 20 triệu ÷ 0,0145% ≈ <b>138.000 triệu đồng ≈ 8,8 triệu USD</b>.'
      ] },
      { t: 'table', head: ['Nước/khu vực', 'Giá trị mạng sống ước tính (triệu USD)'], rows: [['Hàn Quốc', '~0,8'], ['Tây Âu', '~4'], ['Mỹ', '~7'], ['Nhật (ngại rủi ro)', '~10']] },
      { t: 'widget', name: 'risk-premium', title: 'Tính phần bù rủi ro và giá trị mạng sống' }
    ] },
    { icon: '🍋', title: 'Thông tin bất cân xứng và lựa chọn đối nghịch (bài 22)', blocks: [
      { t: 'key', x: '<b>Thông tin bất cân xứng (asymmetric information)</b>: một bên giao dịch biết nhiều hơn bên kia. Ví dụ: người bán biết chất lượng hàng; nhà tuyển dụng khó nhận ra ứng viên giỏi nhất; người vay biết khả năng trả nợ tốt hơn chủ nợ. Đây là <b>một nguyên nhân thất bại thị trường</b>.' },
      { t: 'h3', x: 'Câu chuyện xe máy Trung Quốc' },
      { t: 'list', items: [
        'Giả sử chỉ có hai loại xe: <b>tốt</b> (giá vốn 700 USD) và <b>kém – gọi là “lemon”</b> (giá vốn 300 USD).',
        'Nếu người mua phân biệt được, họ sẵn lòng trả 800 cho xe tốt và 400 cho xe kém.',
        'Thực tế người bán biết chất lượng, người mua chỉ biết sau khi dùng ⇒ người bán xe kém có động cơ nói dối.',
        'Biết vậy, người mua chỉ trả giá <b>trung bình</b> (khoảng 550). Mức này thấp hơn giá vốn xe tốt ⇒ <b>xe tốt bị đẩy ra khỏi thị trường</b>, chỉ còn xe kém.'
      ] },
      { t: 'key', x: 'Đó là <b>lựa chọn đối nghịch (adverse selection)</b> do thông tin ẩn: hàng xấu “đuổi” hàng tốt khỏi thị trường.' },
      { t: 'widget', name: 'lemons', title: 'Bao nhiêu xe tốt thì thị trường tự cứu được?' }
    ] },
    { icon: '📡', title: 'Phát tín hiệu và sàng lọc (bài 23–24)', blocks: [
      { t: 'p', x: 'Câu chuyện không dừng ở đó: hai kỹ thuật giúp giải quyết thông tin bất cân xứng – <b>phát tín hiệu</b> (bên biết nhiều thông tin chủ động chứng minh) và <b>sàng lọc</b> (bên biết ít thiết kế lựa chọn để lộ thông tin).' },
      { t: 'table', head: ['', 'Phát tín hiệu (signaling)', 'Sàng lọc (screening)'], rows: [
        ['Ai chủ động?', 'Bên <b>biết</b> thông tin (người bán, ứng viên)', 'Bên <b>chưa biết</b> thông tin (người mua, bảo hiểm)'],
        ['Cách làm', 'Đưa ra tín hiệu để phân biệt mình với người khác', 'Đưa ra <b>nhiều phương án</b>; sự lựa chọn của khách hàng để lộ mức rủi ro'],
        ['Ví dụ', '<b>Bảo hành</b>: người bán hàng kém không dám bảo hành vì chi phí quá cao. Thị trường lao động: <b>bằng cấp, chứng chỉ</b> là tín hiệu để nhà tuyển dụng nhận biết.', 'Công ty bảo hiểm độc quyền bán bảo hiểm xe máy mất trộm: <b>Gói A</b> bồi thường toàn bộ giá trị, phí cao; <b>Gói B</b> bồi thường một phần, phí thấp.'],
        ['Kết quả', 'Người giỏi đầu tư học tập để chứng tỏ mình', 'Người ít rủi ro chọn gói B; người rủi ro cao chọn gói A ⇒ công ty “đọc” được mức rủi ro'],
        ['Hạn chế', 'Tốn kém (có thể đáng kể); chỉ hiệu quả khi tín hiệu <b>đáng tin và không thể bị bắt chước</b> bởi người kém', 'Chỉ hiệu quả khi công ty có <b>sức mạnh thị trường</b>; nếu khách mua phần này ở hãng này, phần kia ở hãng khác thì thất bại']
      ] },
      { t: 'tip', x: 'Đặt giá “trung bình” cho mọi người sẽ không đủ chi trả cho nhóm rủi ro cao và quá đắt với nhóm cẩn thận – nên công ty phải <b>sàng lọc</b> thay vì tính một giá chung.' }
    ] },
    { icon: '🤝', title: 'Người ủy nhiệm – người thừa hành (bài 25)', blocks: [
      { t: 'p', x: 'Chủ sở hữu (<b>người ủy nhiệm – principal</b>) thuê nhà quản lý (<b>người thừa hành – agent</b>) và ủy quyền điều hành. Vì chủ không trực tiếp điều hành nên biết ít hơn quản lý ⇒ quản lý có thể hành động <b>không vì lợi ích của chủ</b>.' },
      { t: 'table', head: ['Vấn đề', 'Mô tả'], rows: [
        ['<b>Rủi ro đạo đức (moral hazard)</b>', 'Lương quản lý không phụ thuộc nỗ lực phục vụ lợi ích chủ (tối đa hóa giá trị khoản đầu tư), nên không có động cơ cố gắng hết sức. Cổ phiếu lên hay xuống cũng không ảnh hưởng thu nhập của họ.'],
        ['<b>Xung đột lợi ích</b> (nghiêm trọng hơn)', 'Quản lý theo đuổi mục tiêu riêng: xây cơ sở xa xỉ, chi tiêu quá mức, tìm tiền thưởng bán hàng thay vì giá bán tối ưu, ôm các dự án lớn để mở rộng quyền lực dù không sinh lời hoặc quá rủi ro.']
      ] },
      { t: 'p', x: 'Cách hạn chế rõ nhất: chủ <b>trực tiếp giám sát</b> quản lý. Nhưng giám sát tốn kém và có khi bất khả thi. Cách gián tiếp – dùng quyền chọn cổ phiếu để gắn lợi ích hai bên – sẽ thấy ở phần sau.' },
      { t: 'mnemo', x: '<b>Principal</b> = chủ (giao việc), <b>Agent</b> = người làm thuê (thực hiện). Chủ biết ít hơn → agent “lơ là” hoặc “làm theo ý mình”.' }
    ] }
  ],
  summary: [
    'Bất định: có nhiều kết quả; rủi ro đo được khi có thể gán xác suất. Con người thường đánh giá sai rủi ro (lạc quan quá mức, hoảng loạn).',
    'Phần bù rủi ro (lương cao hơn cho nghề nguy hiểm) cho phép suy ra giá trị ngầm của mạng sống (ví dụ phi công ≈ 8,8 triệu USD).',
    'Thông tin bất cân xứng gây lựa chọn đối nghịch: hàng kém đẩy hàng tốt ra khỏi thị trường (bài toán xe “lemon”).',
    'Phát tín hiệu (bảo hành, bằng cấp) do bên biết thông tin thực hiện; sàng lọc (các gói bảo hiểm) do bên chưa biết thiết kế.',
    'Vấn đề người ủy nhiệm – người thừa hành: rủi ro đạo đức và xung đột lợi ích; giám sát trực tiếp tốn kém.'
  ],
  cards: [
    ['Bất định khác rủi ro đo được thế nào?', 'Bất định: nhiều kết quả có thể xảy ra. Rủi ro đo được: có thể gán xác suất cho các kết quả (vd tung đồng xu công bằng 50/50).'],
    ['Cho ví dụ bất định thuần túy.', 'Dịch cúm gia cầm ở châu Á: không có dữ liệu lịch sử để ước lượng xác suất nên rất khó bảo hiểm.'],
    ['Nguyên nhân phổ biến khiến đánh giá sai rủi ro?', 'Lạc quan quá mức (bong bóng bất động sản), hoặc hoảng loạn khi khủng hoảng.'],
    ['Phần bù rủi ro là gì?', 'Khoản thu nhập cao hơn trả cho người chấp nhận môi trường nguy hiểm so với công việc an toàn tương đương.'],
    ['Cách tính xác suất tử nạn của phi công?', 'Giờ quy đổi bay trong tháng ÷ số giờ quy đổi trung bình giữa hai vụ mất máy bay (227 ÷ 1.566.000 ≈ 0,0145%).'],
    ['Giá trị mạng sống ngầm của phi công?', 'Phần bù rủi ro ÷ xác suất tử nạn = 20 triệu ÷ 0,0145% ≈ 138.000 triệu đồng ≈ 8,8 triệu USD.'],
    ['Thông tin bất cân xứng là gì?', 'Một bên giao dịch biết nhiều hơn bên kia (chất lượng hàng, khả năng trả nợ, năng lực ứng viên).'],
    ['Lựa chọn đối nghịch (adverse selection)?', 'Hàng chất lượng thấp đẩy hàng tốt ra khỏi thị trường do người mua không phân biệt được (thông tin ẩn).'],
    ['“Lemon” là gì?', 'Hàng chất lượng kém được bán như hàng tốt (xe kém trong ví dụ).'],
    ['Phát tín hiệu là gì? Ví dụ?', 'Bên biết thông tin đưa ra dấu hiệu đáng tin để phân biệt mình: bảo hành, bằng cấp, chứng chỉ.'],
    ['Điều kiện để tín hiệu hiệu quả?', 'Phải đáng tin và không thể bị bắt chước bởi người cung cấp hàng/lao động kém; đồng thời chi phí phát tín hiệu có thể lớn.'],
    ['Sàng lọc là gì? Ví dụ?', 'Bên chưa biết thông tin đưa ra nhiều phương án để khách hàng tự lộ mức rủi ro: Gói A bồi thường đủ, phí cao; Gói B bồi thường một phần, phí thấp.'],
    ['Khi nào sàng lọc không hiệu quả?', 'Khi khách hàng có thể lách bằng cách mua một phần ở hãng này, phần khác ở hãng kia – tức công ty không có sức mạnh thị trường.'],
    ['Người ủy nhiệm và người thừa hành?', 'Principal: chủ sở hữu thuê, ủy quyền; Agent: nhà quản lý thực hiện. Chủ biết ít hơn.'],
    ['Rủi ro đạo đức (moral hazard)?', 'Lương người thừa hành không gắn với kết quả, nên không có động cơ nỗ lực tối đa vì chủ.'],
    ['Xung đột lợi ích giữa chủ và quản lý?', 'Quản lý theo đuổi mục tiêu riêng: xa xỉ, chi tiêu quá mức, dự án lớn không sinh lời để mở rộng quyền lực.']
  ],
  quiz: [
    { q: 'Tung đồng xu công bằng là ví dụ của:', o: ['Bất định không đo được', 'Rủi ro đo được', 'Độc quyền', 'Lựa chọn đối nghịch'], a: 1, e: 'Biết xác suất 50%.' },
    { q: 'Vì sao dịch cúm gia cầm là “bất định thuần túy”?', o: ['Quá nhiều dữ liệu', 'Không có dữ liệu lịch sử để ước lượng xác suất xảy ra', 'Vì chính phủ cấm', 'Vì giá giảm'], a: 1, e: 'Khó bảo hiểm và quản lý.' },
    { q: 'Lạc quan quá mức dẫn đến:', o: ['Đánh giá đúng rủi ro', 'Nhà đầu tư bỏ qua rủi ro sụp đổ trong bong bóng', 'Giảm đầu tư', 'Tăng bảo hiểm'], a: 1, e: 'Tin giá luôn tăng.' },
    { q: 'Phần bù rủi ro là:', o: ['Thuế', 'Thu nhập thêm bù cho việc chấp nhận rủi ro', 'Lãi suất', 'Tiền thưởng'], a: 1, e: 'Phi công được trả cao hơn việc an toàn tương đương.' },
    { q: 'Chuyến bay 1,75 giờ tương đương bao nhiêu giờ quy đổi?', o: ['1,75', '3,7', '5,45', '7,2'], a: 2, e: '1,75 + 3,7 = 5,45 (bù rủi ro cất/hạ cánh).' },
    { q: 'Với 227 giờ quy đổi/tháng và 1 vụ mất máy bay/1.566.000 giờ, xác suất tử nạn xấp xỉ:', o: ['1,45%', '0,145%', '0,0145%', '0,00145%'], a: 2, e: '227/1.566.000 ≈ 0,0145%.' },
    { q: 'Giá trị mạng sống ngầm của phi công trong bài khoảng:', o: ['0,8 triệu USD', '8,8 triệu USD', '88 triệu USD', '880.000 USD'], a: 1, e: '20 triệu ÷ 0,0145% ≈ 138.000 triệu đồng.' },
    { q: 'Thông tin bất cân xứng nghĩa là:', o: ['Thông tin quá nhiều', 'Một bên giao dịch biết nhiều hơn bên kia', 'Hai bên biết như nhau', 'Không có thông tin'], a: 1, e: 'Nguyên nhân thất bại thị trường.' },
    { q: 'Trong bài toán xe “lemon”, vì sao xe tốt bị đẩy ra khỏi thị trường?', o: ['Người mua ghét xe tốt', 'Giá trung bình người mua chịu trả thấp hơn giá vốn xe tốt', 'Chính phủ cấm', 'Xe tốt quá nhiều'], a: 1, e: 'Người bán xe tốt thua lỗ nên rút lui.' },
    { q: 'Bảo hành là ví dụ của:', o: ['Sàng lọc', 'Phát tín hiệu', 'Rủi ro đạo đức', 'Độc quyền'], a: 1, e: 'Người bán hàng kém không đủ khả năng bảo hành.' },
    { q: 'Bằng cấp trên thị trường lao động đóng vai trò:', o: ['Tín hiệu cho nhà tuyển dụng', 'Thuế', 'Lương tối thiểu', 'Rủi ro'], a: 0, e: 'Khuyến khích đầu tư vào giáo dục.' },
    { q: 'Công ty bảo hiểm đưa gói A (đền đủ, phí cao) và gói B (đền một phần, phí thấp) để:', o: ['Phát tín hiệu', 'Sàng lọc mức rủi ro của khách hàng', 'Đánh thuế', 'Tăng cung'], a: 1, e: 'Mỗi nhóm rủi ro sẽ chọn gói khác nhau.' },
    { q: 'Người ủy nhiệm trong quan hệ chủ – quản lý là:', o: ['Nhà quản lý', 'Chủ sở hữu', 'Nhà nước', 'Khách hàng'], a: 1, e: 'Chủ thuê quản lý (người thừa hành).' },
    { q: 'Rủi ro đạo đức xảy ra khi:', o: ['Lương quản lý không phụ thuộc kết quả phục vụ lợi ích chủ', 'Chủ giám sát sát sao', 'Giá giảm', 'Cung tăng'], a: 0, e: 'Không có động cơ nỗ lực hết mình.' },
    { q: 'Hạn chế chính của giám sát trực tiếp người thừa hành là:', o: ['Quá rẻ', 'Tốn kém và đôi khi không khả thi', 'Làm tăng cầu', 'Gây ngoại tác'], a: 1, e: 'Vì vậy cần cơ chế gián tiếp như quyền chọn cổ phiếu.' }
  ],
  match: [
    ['Rủi ro đo được', 'Có thể gán xác suất cho các kết quả'],
    ['Lựa chọn đối nghịch', 'Hàng kém đẩy hàng tốt ra khỏi thị trường'],
    ['Phát tín hiệu', 'Bảo hành, bằng cấp'],
    ['Sàng lọc', 'Các gói bảo hiểm khác nhau để lộ mức rủi ro'],
    ['Rủi ro đạo đức', 'Quản lý không có động cơ nỗ lực vì chủ'],
    ['Phần bù rủi ro', 'Lương cao hơn cho nghề nguy hiểm'],
    ['Người thừa hành', 'Nhà quản lý được chủ thuê']
  ]
},

/* ======================= CHƯƠNG 7 ======================= */
{
  n: 7,
  title: 'Giá chuyển giao nội bộ và gánh nặng thuế',
  intro: 'Bài 26–28: khi các công ty con của một tập đoàn “bán” hàng cho nhau, giá chuyển giao ảnh hưởng thuế thế nào; vì sao nước đang phát triển thường là bên thua; và ai thật sự gánh nặng khi nhà nước tăng thuế.',
  sections: [
    { icon: '🏭', title: 'Định giá chuyển giao nội bộ (bài 26)', blocks: [
      { t: 'p', x: 'Chuỗi cung ứng toàn cầu: một điện thoại lắp ráp ở nước này chứa linh kiện từ nhiều nước khác. Khi chuỗi đó thuộc <b>một tập đoàn</b>, nảy ra vấn đề <b>giá chuyển giao (transfer pricing)</b>.' },
      { t: 'key', x: '<b>Giá chuyển giao nội bộ</b> là giá mà các công ty con của cùng một công ty “bán” hàng hóa/dịch vụ cho nhau. Nó ảnh hưởng không chỉ kết quả của từng công ty con mà cả <b>nguồn thu thuế quốc gia</b>.' },
      { t: 'p', x: 'Giá có thể dựa vào giá thị trường, chi phí, hoặc thương lượng. Nhưng thường <b>giảm thiểu nghĩa vụ thuế</b> là yếu tố trung tâm.' },
      { t: 'h3', x: 'Ví dụ: Đài Loan (thuế 20%) và Malaysia (thuế 40%)' },
      { t: 'steps', items: [
        'Công ty con ở Đài Loan <b>tính giá cao hơn thực</b> khi bán hàng cho công ty con ở Malaysia, chênh <b>100.000 USD</b>.',
        'Lợi nhuận khai ở Đài Loan tăng 100.000 ⇒ thuế nộp ở Đài Loan tăng <b>20.000</b>.',
        'Lợi nhuận khai ở Malaysia giảm 100.000 ⇒ thuế nộp ở Malaysia giảm <b>40.000</b>.',
        'Toàn công ty <b>tiết kiệm được 20.000 USD thuế</b>.'
      ] },
      { t: 'widget', name: 'transfer-price', title: 'Đổi thuế suất và mức định giá để xem tiết kiệm thuế' },
      { t: 'warn', x: 'Chính phủ rất khó kiểm soát. Năm 1993 Mỹ phạt Nissan <b>170 triệu USD</b> vì giá chuyển giao ô tô nhập từ Nhật bị “thổi phồng bất hợp lý”; Nhật trả đũa bằng cách phạt Coca-Cola <b>150 triệu USD</b> vì “tính giá quá cao” đầu vào nhập từ Mỹ cho công ty con tại Nhật.' }
    ] },
    { icon: '🔄', title: 'Mặt trái của chuyển giá (bài 27)', blocks: [
      { t: 'p', x: 'Có nhà kinh tế cho rằng nước đang phát triển nên đánh thuế thấp: các tập đoàn đa quốc gia (MNE) sẽ đặt chi nhánh và dùng chuyển giá để <b>dồn lợi nhuận toàn cầu</b> về đây ⇒ thu thuế tăng. Cộng hòa Dominica, Panama, Bahamas đã trở thành “thiên đường thuế”, thậm chí khiến MNE chuyển cả trụ sở về.' },
      { t: 'p', x: 'Nhưng các nước đang phát triển khác lại là <b>nạn nhân</b> khi MNE <b>thổi phồng giá đầu vào</b> và <b>hạ giá sản phẩm đầu ra</b> của công ty con ở đó – lợi nhuận bị chuyển ra ngoài.' },
      { t: 'h3', x: 'Biện pháp: nguyên tắc “giá độc lập” (arm’s length)' },
      { t: 'list', items: [
        '<b>Giá độc lập</b> = giá thương lượng giữa các bên <b>không liên kết</b> trong điều kiện tương tự; xác định theo giá thị trường hoặc chi phí sản xuất.',
        'Khó khăn: cơ quan thuế các nước đang phát triển thường <b>thiếu thông tin và chuyên môn</b> để tính giá độc lập.',
        'Nhiều giao dịch dưới dạng <b>phí bản quyền, phí tư vấn, quản lý</b> – rất khó xác định giá hợp lý; lạm phát giá nổi bật nhất ở khu vực dịch vụ.',
        '<b>Khai thấp giá hàng nhập khẩu</b> ở nơi thuế quan cao là một cách trốn thuế khác; MNE cũng có thể thao túng giá chuyển giao để <b>né hạn chế ngoại hối hoặc chuyển vốn về nước</b>.'
      ] },
      { t: 'tip', x: 'Kết luận: thao túng giá chuyển giao có thể làm <b>xói mòn cơ sở thuế của các nước nghèo</b>; thuế thấp chưa chắc làm tăng thu ngân sách.' }
    ] },
    { icon: '🚗', title: 'Ai chịu thuế? Ví dụ giá ô tô (bài 28)', blocks: [
      { t: 'p', x: 'Các nhà sản xuất ô tô đẩy mạnh chiến dịch kêu gọi mua xe trước <b>1/1/2004</b>, khi <b>thuế tiêu thụ đặc biệt</b> mới đối với xe có hiệu lực: thuế thực tế tăng từ <b>5% lên 24%</b> (cùng thay đổi thuế VAT). Họ nói giá xe có thể tăng thêm 24%. Ví dụ Ford Ghia giá 28.000 USD có thể thành khoảng 35.000 USD (tăng 7.000 chuyển hết cho người mua).' },
      { t: 'key', x: 'Lập luận “giá tự động tăng đúng bằng thuế” là <b>sai</b>. Người tiêu dùng chỉ gánh toàn bộ thuế khi: (1) <b>cầu không nhạy với giá</b> (như cầu quan tài – giá tăng cũng không làm giảm cầu); hoặc (2) <b>chi phí cung không đổi theo lượng</b> (nước nhỏ nhập hàng theo giá thế giới).' },
      { t: 'p', x: 'Xe hơi ở Việt Nam không rơi vào hai trường hợp này ⇒ giá tăng nhưng <b>gánh nặng thuế được chia</b> giữa nhà sản xuất và người mua. Ví dụ: Ford Ghia bán 31.000 USD ⇒ người mua trả thêm 3.000; nhà sản xuất thu nhập giảm 3.000; 6.000 vào ngân sách nhà nước.' },
      { t: 'widget', name: 'tax-incidence', title: 'Ai gánh thuế? Thử đổi độ nhạy của cầu và cung' },
      { t: 'mnemo', x: '<b>Bên nào “ít nhạy” (khó bỏ đi) thì gánh nhiều thuế hơn.</b> Cầu ít co giãn → người mua gánh; cung ít co giãn → người bán gánh.' }
    ] }
  ],
  summary: [
    'Giá chuyển giao là giá “mua bán” nội bộ giữa các công ty con của một tập đoàn; thường dùng để giảm thuế bằng cách chuyển lợi nhuận về nước thuế thấp (ví dụ tiết kiệm 20.000 USD).',
    'Chính phủ khó kiểm soát; ví dụ Nissan bị Mỹ phạt 170 triệu USD, Coca-Cola bị Nhật phạt 150 triệu USD.',
    'Nước đang phát triển thường thua: bị thổi phồng giá đầu vào/hạ giá đầu ra; thiếu năng lực tính giá độc lập, khó kiểm dịch vụ/bản quyền.',
    'Nguyên tắc giá độc lập (arm’s length) là biện pháp chính nhưng cần thông tin và chuyên môn.',
    'Gánh nặng thuế được chia theo độ nhạy của cầu và cung; chỉ khi cầu không nhạy (hoặc cung hoàn toàn co giãn) thì người mua gánh toàn bộ.'
  ],
  cards: [
    ['Giá chuyển giao nội bộ là gì?', 'Giá mà các công ty con thuộc cùng một công ty “bán” hàng hóa/dịch vụ cho nhau.'],
    ['Vì sao giá chuyển giao quan trọng với chính phủ?', 'Ảnh hưởng thu thuế quốc gia vì lợi nhuận khai báo ở mỗi nước thay đổi.'],
    ['Mục tiêu thường gặp của doanh nghiệp khi định giá chuyển giao?', 'Giảm thiểu nghĩa vụ thuế bằng cách chuyển lợi nhuận về nước có thuế thấp hơn.'],
    ['Ví dụ Đài Loan – Malaysia?', 'Thuế 20% và 40%; bán đắt hơn 100.000 USD: Đài Loan +20.000 thuế, Malaysia −40.000 thuế ⇒ tập đoàn tiết kiệm 20.000 USD.'],
    ['Hai vụ phạt nổi tiếng về chuyển giá năm 1993?', 'Mỹ phạt Nissan 170 triệu USD; Nhật phạt Coca-Cola 150 triệu USD.'],
    ['Nước nhận thuế thấp có lợi gì và rủi ro gì?', 'Có thể thu hút MNE (Dominica, Panama, Bahamas – “thiên đường thuế”), nhưng các nước khác bị MNE thổi phồng giá đầu vào, hạ giá đầu ra nên mất thuế.'],
    ['Nguyên tắc giá độc lập (arm’s length)?', 'Giá thương lượng giữa các bên không liên kết trong điều kiện tương tự, xác định theo giá thị trường hoặc chi phí sản xuất.'],
    ['Khó khăn khi áp giá độc lập?', 'Thiếu thông tin, chuyên môn; nhiều giao dịch là bản quyền, tư vấn, quản lý khó định giá.'],
    ['Còn cách nào MNE dùng chuyển giá?', 'Khai thấp giá nhập khẩu để trốn thuế quan; né hạn chế ngoại hối/chuyển vốn.'],
    ['Thuế tiêu thụ đặc biệt xe hơi VN năm 2004?', 'Thuế thực tế tăng từ 5% lên 24%.'],
    ['Khi nào người tiêu dùng gánh toàn bộ thuế?', 'Khi cầu không nhạy với giá (quan tài) hoặc chi phí cung không đổi theo lượng (nước nhỏ nhập theo giá thế giới).'],
    ['Ford Ghia ví dụ gánh nặng thuế?', '28.000 → 31.000 USD: người mua +3.000; nhà sản xuất thu −3.000; chính phủ thu 6.000.']
  ],
  quiz: [
    { q: 'Giá chuyển giao nội bộ là giá:', o: ['Giữa tập đoàn và người tiêu dùng', 'Mà các công ty con của một tập đoàn “bán” cho nhau', 'Do nhà nước định', 'Trên thị trường chứng khoán'], a: 1, e: 'Nó ảnh hưởng cả lợi nhuận từng công ty con và thu thuế quốc gia.' },
    { q: 'Công ty con ở nước thuế 20% bán đắt hơn 100.000 USD cho công ty con ở nước thuế 40%. Toàn tập đoàn:', o: ['Nộp thêm 20.000', 'Tiết kiệm 20.000', 'Không đổi', 'Tiết kiệm 60.000'], a: 1, e: '−40.000 + 20.000 = −20.000 thuế.' },
    { q: 'Nissan bị Mỹ phạt 170 triệu USD vì:', o: ['Bán xe chậm', 'Giá chuyển giao ô tô nhập từ Nhật bị thổi phồng bất hợp lý', 'Chất lượng', 'Quảng cáo'], a: 1, e: 'Nhật trả đũa bằng cách phạt Coca-Cola 150 triệu USD.' },
    { q: 'Nguyên tắc giá độc lập (arm’s length) là:', o: ['Giá do nhà nước đặt', 'Giá thương lượng giữa các bên không liên kết trong điều kiện tương tự', 'Giá cao nhất', 'Giá nội bộ'], a: 1, e: 'Dùng để kiểm soát chuyển giá.' },
    { q: 'Điều nào KHÔNG phải khó khăn của nước đang phát triển trong kiểm soát chuyển giá?', o: ['Thiếu thông tin', 'Thiếu chuyên môn tính giá độc lập', 'Giao dịch phí bản quyền/dịch vụ khó định giá', 'Có quá nhiều thông tin dư thừa'], a: 3, e: 'Vấn đề là thiếu chứ không phải thừa thông tin.' },
    { q: 'Khai thấp giá hàng nhập khẩu giúp MNE:', o: ['Tăng thuế', 'Trốn thuế quan ở nơi thuế nhập khẩu cao', 'Giảm lợi nhuận', 'Tăng chi phí'], a: 1, e: 'Một dạng thao túng giá chuyển giao.' },
    { q: 'Thuế tiêu thụ đặc biệt xe hơi tăng từ 5% lên 24%. Lập luận “giá xe tự động tăng 24%” là:', o: ['Đúng hoàn toàn', 'Sai: gánh nặng thuế thường được chia giữa người mua và nhà sản xuất', 'Đúng vì cầu không nhạy', 'Đúng vì cung cố định'], a: 1, e: 'Cầu và cung xe ở Việt Nam đều nhạy với giá.' },
    { q: 'Cầu quan tài là ví dụ của cầu:', o: ['Rất nhạy với giá', 'Không nhạy với giá', 'Tăng theo giá', 'Bằng không'], a: 1, e: 'Người mua gánh toàn bộ thuế.' },
    { q: 'Ford Ghia: giá tăng từ 28.000 lên 31.000 và thuế thu 6.000 nghĩa là nhà sản xuất:', o: ['Không mất gì', 'Giảm thu nhập 3.000', 'Tăng 3.000', 'Chịu hết 6.000'], a: 1, e: 'Người mua trả thêm 3.000; nhà sản xuất chịu 3.000.' },
    { q: 'Cầu càng ít nhạy với giá thì người tiêu dùng:', o: ['Gánh ít thuế hơn', 'Gánh nhiều thuế hơn', 'Không gánh', 'Được hoàn thuế'], a: 1, e: 'Họ khó từ bỏ hàng nên không thể chuyển gánh nặng đi.' }
  ],
  match: [
    ['Giá chuyển giao', 'Giá “mua bán” nội bộ giữa các công ty con'],
    ['Thiên đường thuế', 'Dominica, Panama, Bahamas'],
    ['Giá độc lập', 'Giá giữa các bên không liên kết'],
    ['Nissan', 'Bị Mỹ phạt 170 triệu USD (1993)'],
    ['Coca-Cola', 'Bị Nhật phạt 150 triệu USD'],
    ['Thuế xe hơi 2004', 'Tăng từ 5% lên 24%'],
    ['Gánh nặng thuế', 'Chia theo độ nhạy của cầu và cung']
  ]
},

/* ======================= CHƯƠNG 8 ======================= */
{
  n: 8,
  title: 'Kinh tế học trong đời sống và các cú sốc',
  intro: 'Bài 29–33: đem công cụ kinh tế vào những chuyện đời thường (quà tặng, quan hệ “guanxi”, vé tàu Tết), một cú sốc bất ngờ (đại dịch SARS) và câu hỏi “giá trị kinh tế” khác “giá trị tài chính” ở chỗ nào.',
  sections: [
    { icon: '🎁', title: 'Kinh tế học quà biếu (bài 29)', blocks: [
      { t: 'p', x: 'Bạn từng nhận món quà mà tự bỏ tiền ra chẳng bao giờ mua? Hoặc món quà bạn thích nhưng đã có vài cái rồi nên thêm cái nữa chẳng tăng được mấy sự thỏa mãn? Rất phổ biến vào dịp Giáng sinh và Tết.' },
      { t: 'list', items: [
        'Người ta tặng quà vì nhiều lý do: tình bạn, tình yêu, quan hệ gia đình, địa vị, đáp lễ. Cha mẹ coi niềm vui của con khi nhận quà ông già Noel còn quý hơn giá tiền; sếp lì xì cấp dưới để nâng địa vị, cấp dưới vui vẻ phục vụ.',
        'Những trường hợp này làm cả người cho lẫn người nhận có lợi – theo ngôn ngữ kinh tế: <b>độ thỏa dụng (utility) tăng cho cả hai bên</b>.'
      ] },
      { t: 'warn', x: 'Nhưng quà thường <b>không đúng ý hoặc thừa</b>: người cho đoán sai sở thích, hoặc mua quà phổ biến (bánh khúc cây, hộp lạp xưởng). Người nhận thường định giá món quà <b>thấp hơn số tiền người cho đã trả</b> ⇒ xã hội chịu <b>tổn thất vô ích (deadweight loss)</b>. Ước tính khoảng <b>10%</b> tiền chi cho quà là lãng phí; cộng cả sinh nhật, đám cưới, thăng chức… là con số rất lớn. Quà còn “đổi chủ” liên tục dịp lễ.' },
      { t: 'tip', x: 'Nhà kinh tế sẽ <b>chọn quà cho người thân, bạn thân (biết sở thích)</b>, còn với những người khác thì <b>tặng tiền mặt hoặc phiếu quà tặng</b> hiệu quả hơn. Dù sao điều quan trọng vẫn là tấm lòng.' }
    ] },
    { icon: '🧵', title: 'Guanxi: sợi dây ràng buộc (bài 30)', blocks: [
      { t: 'p', x: '<b>Guanxi</b> (quan hệ) là thuật ngữ Trung Quốc chỉ “mối liên hệ”, thường dùng để mô tả vai trò của quan hệ cá nhân trong kinh doanh, nhất là ở châu Á. Ý kiến chia rẽ: guanxi tốt hay xấu cho phát triển kinh tế?' },
      { t: 'tabs', items: [
        ['Mặt tích cực', 'Guanxi hoạt động như <b>vốn xã hội (social capital)</b>. Quan hệ đúng người có thể quyết định giao dịch thành công: doanh nhân nhờ bạn làm ở cơ quan nhà nước để rút ngắn thủ tục. Guanxi còn là <b>công cụ sàng lọc</b> khi thông tin không hoàn hảo: nhà tuyển dụng thấy tuyển người nhà, người cùng quê/cùng trường an toàn hơn. Nói chung quan hệ có thể <b>tạo điều kiện cho hoạt động kinh tế và thúc đẩy tăng trưởng</b>.'],
        ['Mặt tiêu cực', 'Nhiều khi guanxi đồng nghĩa với <b>tham nhũng</b>. Khi luật mơ hồ và không được thực thi, người ta tìm đến guanxi khi tranh chấp; người có quyền thực thi hay diễn giải luật trở thành mục tiêu: quà cáp, tiếp khách. Khi thầu kém thắng, ứng viên giỏi bị loại, guanxi giống như “tiền bảo kê”. Kinh tế dựa quá nhiều vào guanxi dễ sinh <b>chủ nghĩa thân hữu (cronyism)</b> – luật của quan hệ thay thế quan hệ của luật.']
      ] },
      { t: 'key', x: 'Thách thức của nhiều nước đang phát triển muốn mở cửa và thịnh vượng: <b>chuyển từ guanxi sang một khung pháp lý vững chắc và có thể thực thi</b>.' }
    ] },
    { icon: '🚆', title: 'Vé về quê – định giá giờ cao điểm (bài 31)', blocks: [
      { t: 'p', x: 'Dịp Tết, hàng nghìn người xếp hàng cả ngày ở ga Sài Gòn mua vé tàu; chuyến bay kín chỗ; xe đường dài chật cứng. Có cách nào làm dịu tình trạng này?' },
      { t: 'tabs', items: [
        ['Cách “hiển nhiên”', 'Nhà nước mua thêm toa, đầu máy, xe, máy bay. Nhưng công ty đường sắt có nên mua thêm tàu chỉ để dùng dịp Tết rồi để không cả năm?'],
        ['Cách của nhà kinh tế', 'Tác động vào <b>phía cầu</b>: <b>định giá giờ cao điểm (peak-time pricing)</b> – giá tăng vào lúc cao điểm để <b>giảm cầu hoặc chuyển một phần cầu sang thời gian thấp điểm</b>. Người thấy vé Tết đắt có thể sắp xếp nghỉ vào lúc khác dù anh trai làm ở ngành đường sắt xin được vé.'],
        ['Tác động lên cung', 'Giá cao cũng <b>làm tăng cung</b>: hãng bay thuê thêm máy bay cho dịp Tết (giá vé cao bù tiền thuê ngắn hạn); một số công ty đưa xe đang đỗ nhà xe vào chạy đường dài.']
      ] },
      { t: 'tip', x: 'Chính sách này đã dùng ở khách sạn, điện, điện thoại, thường được <b>“ngụy trang” bằng mẹo marketing</b>: thay vì tăng giá lúc cao điểm, nhà cung cấp đặt “giá thường” cao rồi giảm giá lúc thấp điểm.' },
      { t: 'warn', x: 'Vé Tết đắt dễ khiến hành khách tức giận. Về mặt đạo đức có thể nhìn thế này: đảm bảo vé cho những người <b>thật sự cần đoàn tụ gia đình</b> sau một năm làm việc vất vả, còn ai không có nhu cầu đó được hưởng giá thấp lúc thấp điểm.' }
    ] },
    { icon: '😷', title: 'Nhìn lại đại dịch SARS (bài 32)', blocks: [
      { t: 'p', x: 'Nền kinh tế luôn đối mặt các thay đổi bất ngờ: bất ổn địa chính trị, cú sốc giá, dịch bệnh. Đợt bùng phát <b>SARS</b> (Hội chứng hô hấp cấp tính nặng) là điều không ai lường trước. Dù chỉ khoảng <b>6.500 ca xác nhận</b> và gần <b>500 người chết</b> trên toàn cầu – không đáng kể so với các dịch khác – SARS tác động rất lớn đến kinh tế trong nước và thương mại toàn cầu.' },
      { t: 'list', items: [
        'Một số nền kinh tế bị <b>hạ dự báo tăng trưởng</b> (ví dụ từ 8% xuống 6%) và một số ngành chịu giảm cầu.',
        '<b>Du lịch và đi lại công tác</b> bị đình trệ ở các nước bị ảnh hưởng một thời gian.',
        'Việt Nam: ước tính dịch làm ngành du lịch mất <b>61.600 việc làm</b> và <b>120 triệu USD</b>; vì du lịch và đi lại công tác ảnh hưởng mọi ngành nên tác động thật còn lớn hơn: <b>120.000 việc làm và 220 triệu USD GDP</b>.',
        'Hậu quả với kinh tế trong nước và toàn cầu <b>lớn hơn mọi sự kiện phi kinh tế</b> kể từ lệnh cấm vận dầu mỏ OPEC năm 1973.'
      ] },
      { t: 'mnemo', x: 'Sự kiện nhỏ về số ca bệnh vẫn có thể gây <b>cú sốc cầu lớn</b> qua kênh du lịch – vận tải – thương mại: kinh tế gắn kết chặt chẽ.' }
    ] },
    { icon: '💡', title: 'Giá trị kinh tế nghĩa là gì? (bài 33)', blocks: [
      { t: 'p', x: 'Hầu hết mọi người quen với <b>giá trị tài chính</b> vì thường xuyên giao dịch. Nhưng <b>giá trị kinh tế</b> là gì? Xét một dự án mới sản xuất đầu ra X, giả định thị trường cạnh tranh hoàn hảo, không có méo mó như thuế và trợ cấp; đường cung dốc lên, đường cầu dốc xuống.' },
      { t: 'steps', items: [
        'Dự án mới làm <b>giá thị trường giảm</b>. Người tiêu dùng hoan nghênh, còn các nhà sản xuất hiện có không vui.',
        'Giá giảm ⇒ <b>thặng dư người tiêu dùng tăng</b> (lượng cầu tăng); đồng thời <b>thặng dư nhà sản xuất giảm</b> (lượng cung của họ giảm).',
        'Đo tác động: dùng <b>đường cầu</b> để đo lợi ích của người tiêu dùng và <b>đường cung</b> để đo giá trị các nguồn lực mà nhà sản xuất sử dụng. Tổng lợi ích của dự án = tổng các vùng diện tích thích hợp dưới đường cầu và đường cung.',
        'Vùng dưới đường cung là “lợi ích” vì lượng cung của các nhà sản xuất hiện có giảm nghĩa là những nguồn lực lẽ ra dùng sản xuất X được <b>giải phóng cho người khác dùng</b>.',
        'Vùng liên quan nằm <b>giữa lượng cầu mới (hoặc lượng cung mới) và cân bằng thị trường ban đầu</b>.',
        'Chia tổng diện tích cho sản lượng của dự án ⇒ <b>giá trị kinh tế trên một đơn vị đầu ra</b>.'
      ] },
      { t: 'key', x: '<b>Giá trị kinh tế</b> đo bằng <b>lợi ích ròng cho xã hội</b> (người tiêu dùng được + nguồn lực được giải phóng), không đơn thuần là số tiền giao dịch như giá trị tài chính.' }
    ] }
  ],
  summary: [
    'Quà biếu làm tăng độ thỏa dụng cho cả hai bên nhưng thường gây tổn thất vô ích (~10% chi tiêu quà); quà cho người thân, tiền/phiếu cho người khác hiệu quả hơn.',
    'Guanxi vừa có thể là vốn xã hội và công cụ sàng lọc, vừa dễ thành tham nhũng và chủ nghĩa thân hữu; cần khung pháp lý vững.',
    'Định giá giờ cao điểm giảm và dời cầu, đồng thời kích thích tăng cung (vé Tết).',
    'SARS: dù số ca nhỏ vẫn gây thiệt hại lớn (VN: 120.000 việc làm, 220 triệu USD GDP) qua du lịch – thương mại.',
    'Giá trị kinh tế của dự án = diện tích dưới đường cầu và cung giữa lượng mới và cân bằng cũ, chia cho sản lượng; phản ánh lợi ích ròng xã hội.'
  ],
  cards: [
    ['Vì sao quà biếu gây “tổn thất vô ích”?', 'Người nhận thường định giá món quà thấp hơn số tiền người cho đã bỏ ra (không hợp hoặc thừa) – ước tính khoảng 10% chi tiêu quà là lãng phí.'],
    ['Cách tặng quà hiệu quả theo nhà kinh tế?', 'Chọn quà cho người thân, bạn thân (biết sở thích); tặng tiền mặt hoặc phiếu quà cho người khác.'],
    ['Guanxi là gì?', 'Thuật ngữ Trung Quốc chỉ “quan hệ/mối liên hệ”, vai trò của quan hệ cá nhân trong kinh doanh, đặc biệt ở châu Á.'],
    ['Mặt tích cực của guanxi?', 'Là vốn xã hội, công cụ sàng lọc khi thông tin không hoàn hảo, giúp rút ngắn thủ tục và tạo điều kiện cho kinh tế.'],
    ['Mặt tiêu cực của guanxi?', 'Đồng nghĩa với tham nhũng khi luật mơ hồ, dẫn đến chủ nghĩa thân hữu (quy luật quan hệ thay quan hệ luật).'],
    ['Thách thức với nước đang phát triển liên quan guanxi?', 'Chuyển từ dựa vào quan hệ sang khung pháp lý vững chắc, có thể thực thi.'],
    ['Định giá giờ cao điểm (peak-time pricing)?', 'Tăng giá lúc cao điểm để giảm cầu hoặc dồn một phần cầu sang lúc thấp điểm (và kích thích tăng cung).'],
    ['Vì sao không nên mua thêm tàu chỉ cho dịp Tết?', 'Chi phí đầu tư lớn mà phương tiện nằm không phần còn lại của năm.'],
    ['Cách “ngụy trang” định giá cao điểm?', 'Đặt “giá thường” cao rồi giảm giá lúc thấp điểm thay vì tăng giá lúc cao điểm.'],
    ['Tác động của SARS tới kinh tế?', 'Du lịch và công tác đình trệ, hạ dự báo tăng trưởng, giảm cầu nhiều ngành, ảnh hưởng thương mại toàn cầu.'],
    ['Thiệt hại của SARS với Việt Nam?', 'Du lịch mất 61.600 việc làm và 120 triệu USD; toàn kinh tế mất ~120.000 việc làm và 220 triệu USD GDP.'],
    ['SARS lớn hơn sự kiện phi kinh tế nào?', 'Mọi sự kiện phi kinh tế kể từ lệnh cấm vận dầu mỏ OPEC năm 1973.'],
    ['Giá trị kinh tế đo bằng gì?', 'Tổng diện tích thích hợp dưới đường cầu (lợi ích người tiêu dùng) và đường cung (nguồn lực được giải phóng), chia cho sản lượng dự án.'],
    ['Dự án mới ảnh hưởng thặng dư thế nào?', 'Giá giảm: thặng dư người tiêu dùng tăng, thặng dư nhà sản xuất hiện có giảm.']
  ],
  quiz: [
    { q: 'Quà biếu thường gây tổn thất vô ích vì:', o: ['Quá đắt', 'Người nhận thường định giá món quà thấp hơn tiền người cho bỏ ra', 'Quà bị đánh thuế', 'Quà quá nhiều'], a: 1, e: 'Không hợp sở thích hoặc đã thừa.' },
    { q: 'Theo bài, khoảng bao nhiêu phần trăm tiền chi cho quà là lãng phí?', o: ['1%', '10%', '50%', '90%'], a: 1, e: 'Một ước tính cho thấy ~10%.' },
    { q: 'Cách tặng quà hiệu quả hơn với người mình không biết rõ sở thích:', o: ['Đoán và mua', 'Tặng tiền mặt/phiếu quà', 'Không tặng', 'Mua đồ phổ biến'], a: 1, e: 'Người nhận tự chọn thứ họ cần.' },
    { q: 'Guanxi có nghĩa là:', o: ['Thuế', 'Quan hệ/mối liên hệ cá nhân', 'Lợi nhuận', 'Hợp đồng'], a: 1, e: 'Thuật ngữ Trung Quốc.' },
    { q: 'Guanxi có thể là “công cụ sàng lọc” vì:', o: ['Nó miễn phí', 'Thay thế thông tin không hoàn hảo: tuyển người quen an toàn hơn', 'Nó là luật', 'Nó giảm thuế'], a: 1, e: 'Giúp giải quyết thông tin bất cân xứng.' },
    { q: 'Rủi ro của kinh tế phụ thuộc guanxi quá mức là:', o: ['Tăng trưởng nhanh', 'Chủ nghĩa thân hữu, tham nhũng', 'Thuế thấp', 'Giá giảm'], a: 1, e: 'Luật quan hệ thay thế quan hệ của luật.' },
    { q: 'Định giá giờ cao điểm nhằm:', o: ['Giảm giá vé', 'Tăng giá lúc cao điểm để giảm hoặc dời một phần cầu sang lúc thấp điểm', 'Cố định giá', 'Giảm cung'], a: 1, e: 'Đồng thời kích thích tăng cung.' },
    { q: 'Vì sao giá vé Tết cao cũng làm tăng cung?', o: ['Nhà nước ép', 'Hãng bay thuê thêm máy bay, nhà xe đưa xe vào chạy đường dài vì có lời', 'Cầu giảm', 'Không tăng cung'], a: 1, e: 'Giá cao bù chi phí thuê ngắn hạn.' },
    { q: 'SARS gây tổn thất lớn dù số ca ít vì:', o: ['Chết nhiều', 'Gây cú sốc cầu lớn qua du lịch, công tác, thương mại', 'Giá dầu giảm', 'Chính phủ tăng thuế'], a: 1, e: 'Du lịch/đi lại ảnh hưởng mọi ngành.' },
    { q: 'Việt Nam ước tính mất bao nhiêu việc làm và GDP do SARS (toàn nền kinh tế)?', o: ['6.500 việc làm và 1 triệu USD', '61.600 việc làm và 120 triệu USD', '120.000 việc làm và 220 triệu USD', '500 việc làm'], a: 2, e: '61.600/120 triệu USD chỉ riêng du lịch.' },
    { q: 'Khi dự án mới làm giá giảm, thặng dư người tiêu dùng:', o: ['Giảm', 'Tăng', 'Không đổi', 'Bằng 0'], a: 1, e: 'Người tiêu dùng hoan nghênh dự án.' },
    { q: 'Giá trị kinh tế khác giá trị tài chính ở chỗ:', o: ['Chỉ tính tiền mặt', 'Đo lợi ích ròng cho xã hội (người tiêu dùng + nguồn lực được giải phóng)', 'Luôn bằng giá thị trường', 'Không liên quan đến cung cầu'], a: 1, e: 'Dựa trên diện tích dưới đường cầu và cung.' }
  ],
  match: [
    ['Deadweight loss của quà biếu', 'Người nhận định giá thấp hơn tiền người cho bỏ ra'],
    ['Guanxi tích cực', 'Vốn xã hội, sàng lọc khi thiếu thông tin'],
    ['Guanxi tiêu cực', 'Tham nhũng, chủ nghĩa thân hữu'],
    ['Peak-time pricing', 'Tăng giá lúc cao điểm giảm cầu'],
    ['SARS (Việt Nam)', '120.000 việc làm, 220 triệu USD GDP'],
    ['Giá trị kinh tế', 'Lợi ích ròng xã hội của dự án'],
    ['OPEC 1973', 'Mốc so sánh cú sốc kinh tế lớn']
  ]
}

);
