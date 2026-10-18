// Nội dung sách "Các khái niệm cơ bản về kinh tế" (song ngữ Anh–Việt, nhiều tác giả, Chương trình Giảng dạy Kinh tế Fulbright).
// Phần 1: Kinh tế vi mô – bản học tập bằng tiếng Việt. Chương 1–4 (bài 1–15 của sách).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.kinhte = BOOK_DATA.kinhte || { chapters: [] };
BOOK_DATA.kinhte.chapters.push(

/* ======================= CHƯƠNG 1 ======================= */
{
  n: 1,
  title: 'Nhập môn: kinh tế học nghiên cứu điều gì?',
  intro: 'Bốn bài đầu giải thích kinh tế học là gì, chia thành những ngành nào, vì sao thị trường vận hành được như có “bàn tay vô hình”, và khái niệm trung tâm nhất: chi phí cơ hội. (Bài 1–4 của sách)',
  sections: [
    { icon: '📖', title: 'Định nghĩa kinh tế học (bài 1)', blocks: [
      { t: 'key', x: 'Kinh tế học là môn nghiên cứu <b>cách phân bổ hiệu quả nhất những nguồn lực khan hiếm cho các mục tiêu thay thế nhau</b>. Có ba cụm từ cần hiểu: <i>nguồn lực khan hiếm</i>, <i>phân bổ hiệu quả</i>, <i>mục tiêu thay thế</i>.' },
      { t: 'table', head: ['Cụm từ', 'Nghĩa trong kinh tế học', 'Ví dụ'], rows: [
        ['<b>Nguồn lực khan hiếm</b>', 'Không phải “hiếm như kim cương”, mà là thứ <b>không có sẵn vô hạn với chi phí bằng 0</b>. Gồm mọi thứ dùng để làm ra hàng hóa/dịch vụ. Thường chia 3 loại: <b>vốn, lao động, đất đai</b>.', 'Nhà xưởng, máy móc (vốn); công nhân, kỹ sư (lao động); mặt bằng (đất đai)'],
        ['<b>Phân bổ hiệu quả</b>', 'Để làm ra một lượng hàng/dịch vụ nhất định, chọn <b>tổ hợp đầu vào có chi phí thấp nhất</b>.', 'Chọn loại bếp tốn chi phí thấp nhất cho cùng lượng nhiệt (xem bài 3)'],
        ['<b>Mục tiêu thay thế</b>', 'Con người không thể có hàng hóa vô hạn nên <b>phải chọn</b> thứ này thay vì thứ kia.', 'Có 6.000 đồng: ăn phở hay giữ trong túi?']
      ] },
      { t: 'p', x: 'Vì phải chọn lựa, kinh tế học đôi khi được gọi ngắn gọn là <b>“môn nghiên cứu về sự lựa chọn”</b>.' },
      { t: 'h3', x: 'Kinh tế học là “một cách tư duy”' },
      { t: 'p', x: 'Nhà kinh tế người Anh John Maynard Keynes nói: kinh tế học là <i>một cách tư duy</i>. Thế giới thực cực kỳ phức tạp, không ai xét được mọi tương tác cùng lúc. Nhà kinh tế dùng <b>mô hình</b> – những <b>sự đơn giản hóa hợp lý</b> – để tập trung vào các yếu tố quan trọng nhất của từng vấn đề.' },
      { t: 'tip', x: 'Mô hình giống <b>bản đồ</b>: bản đồ không vẽ từng cọng cỏ, nhưng đủ để bạn tìm đường. Mô hình tốt bỏ chi tiết thừa, giữ lại cái quyết định kết quả.' }
    ] },
    { icon: '🧭', title: 'Các chuyên ngành kinh tế (bài 2)', blocks: [
      { t: 'p', x: 'Hầu như mọi hoạt động của con người đều chứa quyết định kinh tế: chọn quán ăn trưa, bố tiết kiệm cho con học đại học, công ty thuê thêm công nhân, người lao động rời quê ra thành phố, chính phủ để đồng nội tệ giảm giá…' },
      { t: 'tabs', items: [
        ['Kinh tế vi mô', '<b>Microeconomics</b> nghiên cứu <b>lựa chọn của từng tác nhân kinh tế</b> (người tiêu dùng, người lao động, doanh nghiệp) và <b>hành vi giá cả – số lượng ở từng thị trường cụ thể</b>.<br>Ví dụ: thị trường xoài, thị trường lao động. Ngoại thương thường được xếp vào vi mô vì dùng công cụ vi mô để phân tích lựa chọn của từng quốc gia trên thị trường thế giới.'],
        ['Kinh tế vĩ mô', '<b>Macroeconomics</b> nghiên cứu <b>hành vi của toàn bộ nền kinh tế ở mức tổng hợp</b>: tăng trưởng kinh tế, tỷ lệ lạm phát, thất nghiệp quốc gia, tỷ giá hối đoái.'],
        ['Chuyên ngành hẹp', 'Phát triển kinh tế · Ngoại thương · Tài chính quốc tế · Kinh tế lao động · Tài chính công · Ngân hàng & khu vực tài chính · Kinh tế giáo dục · Kinh tế môi trường · Kinh tế y tế.<br>Môn liên quan: kế toán & phân tích tài chính, marketing, thẩm định dự án.']
      ] },
      { t: 'mnemo', x: '<b>Vi mô = “từng cây”, vĩ mô = “cả rừng”.</b> Sinh viên luôn học nguyên lý vi mô và vĩ mô trước, làm nền cho các chuyên ngành.' }
    ] },
    { icon: '✋', title: 'Bàn tay vô hình (bài 3)', blocks: [
      { t: 'p', x: 'Nhà kinh tế định nghĩa “hiệu quả” khác kỹ sư. Kỹ sư: bếp A tiêu thụ ít năng lượng hơn bếp B cho cùng nhiệt lượng ⇒ A hiệu quả hơn. Nhà kinh tế: bếp hiệu quả là bếp cho cùng lượng nhiệt với <b>chi phí thấp hơn</b>.' },
      { t: 'p', x: 'Nguồn lực nên chảy tới nơi <b>xã hội đánh giá cao nhất</b>. Ví dụ: nhiều người ở TP.HCM ăn sáng ở quán vì thay vì mất thời gian đi chợ, nấu, rửa, họ đi làm sớm hơn. Xã hội đánh giá cao đồ ăn nhanh – ngon – rẻ ⇒ nguồn lực chảy vào ngành này ⇒ vỉa hè đầy hàng quán.' },
      { t: 'key', x: 'Ai điều phối? Không ai lên kế hoạch. Theo <b>Adam Smith</b>, thị trường được dẫn dắt bởi một <b>“bàn tay vô hình”</b>: người ta bán hàng ăn không phải vì lòng tốt mà vì <b>tư lợi</b> – muốn có hàng hóa và cơ hội cho bản thân, gia đình. Chính động cơ đó đưa nguồn lực tới nơi có giá trị cao nhất, làm tăng “sự giàu có của quốc gia”.' },
      { t: 'warn', x: 'Bàn tay vô hình <b>không phải lúc nào cũng hoàn hảo</b> – các chương sau (ngoại tác, độc quyền, thông tin bất cân xứng) cho thấy khi nào thị trường thất bại.' }
    ] },
    { icon: '⚖️', title: 'Chi phí cơ hội (bài 4)', blocks: [
      { t: 'key', x: '<b>Chi phí cơ hội</b> của một lựa chọn = <b>giá trị của phương án thay thế tốt nhất bị bỏ qua</b>.' },
      { t: 'h3', x: 'Ví dụ: tự kinh doanh phần mềm' },
      { t: 'table', head: ['Khoản mục', 'Số tiền (USD/năm)'], rows: [
        ['Thuê văn phòng', '12.000'], ['Lương', '24.000'], ['Chi phí tiện ích', '10.000'],
        ['<b>Tổng chi phí trực tiếp</b>', '<b>46.000</b>'], ['Doanh thu bán phần mềm', '48.000'],
        ['<b>Lợi nhuận kế toán</b>', '<b>+2.000</b>'], ['Chi phí cơ hội: đi làm ngân hàng quốc tế', '8.000'],
        ['<b>Lợi nhuận kinh tế</b> = 2.000 − 8.000', '<b>−6.000 (lỗ kinh tế)</b>']
      ] },
      { t: 'p', x: 'Lợi nhuận kế toán chỉ trừ chi phí “thấy được”. Lợi nhuận <b>kinh tế</b> còn trừ chi phí cơ hội – nên bạn có thể “có lãi” trên sổ sách mà thực chất lỗ.' },
      { t: 'h3', x: 'Mảnh đất “miễn phí” của trường đại học' },
      { t: 'p', x: 'Một cán bộ nói đất đã sở hữu nên “không tốn chi phí”. Sai: đất có thể dùng cách khác – ví dụ bán đi để xây trường trên mảnh đất rẻ hơn. <b>Không có thứ gì “miễn phí”</b> theo nghĩa kinh tế.' },
      { t: 'tip', x: 'Với chính phủ: khi trợ giá cho một ngành, chi phí cơ hội là giá trị sử dụng khoản tiền đó vào mục đích thay thế tốt nhất, như giáo dục hay y tế.' }
    ] }
  ],
  summary: [
    'Kinh tế học = nghiên cứu phân bổ hiệu quả nguồn lực khan hiếm cho các mục tiêu thay thế nhau → còn gọi là “nghiên cứu về sự lựa chọn”.',
    'Nguồn lực khan hiếm: vốn, lao động, đất đai (đôi khi thêm tinh thần khởi nghiệp). Phân bổ hiệu quả = chi phí thấp nhất cho cùng sản lượng.',
    'Vi mô: từng tác nhân & từng thị trường. Vĩ mô: tăng trưởng, lạm phát, thất nghiệp, tỷ giá của cả nền kinh tế.',
    'Bàn tay vô hình (Adam Smith): tư lợi cá nhân + giá cả dẫn nguồn lực tới nơi giá trị cao nhất.',
    'Chi phí cơ hội = giá trị phương án thay thế tốt nhất bị bỏ qua; lợi nhuận kinh tế = lợi nhuận kế toán − chi phí cơ hội.'
  ],
  cards: [
    ['Định nghĩa truyền thống của kinh tế học?', 'Môn nghiên cứu cách phân bổ <b>hiệu quả nhất</b> những <b>nguồn lực khan hiếm</b> cho các <b>mục tiêu thay thế nhau</b>.'],
    ['“Nguồn lực khan hiếm” nghĩa là gì?', 'Nguồn lực không có sẵn với số lượng vô hạn và chi phí bằng 0 (không nhất thiết là hiếm như kim cương). Chia 3 loại: vốn, lao động, đất đai.'],
    ['“Phân bổ hiệu quả” theo nhà kinh tế?', 'Tổ hợp đầu vào được chọn để sản xuất một lượng hàng/dịch vụ nhất định có <b>chi phí thấp nhất</b>.'],
    ['Vì sao kinh tế học gọi là “nghiên cứu về sự lựa chọn”?', 'Vì con người không thể có hàng hóa vô hạn nên phải chọn giữa các mục tiêu thay thế nhau.'],
    ['Keynes định nghĩa kinh tế học là gì?', '“Một cách tư duy” – dùng các mô hình đơn giản hóa hợp lý để tập trung vào yếu tố quan trọng nhất.'],
    ['Phân biệt kinh tế vi mô và vĩ mô.', 'Vi mô: lựa chọn của từng tác nhân + giá/lượng ở từng thị trường. Vĩ mô: nền kinh tế ở mức tổng hợp (tăng trưởng, lạm phát, thất nghiệp, tỷ giá).'],
    ['“Hiệu quả” của kỹ sư khác nhà kinh tế thế nào?', 'Kỹ sư: tốn ít năng lượng hơn. Nhà kinh tế: tốn <b>chi phí</b> thấp hơn cho cùng kết quả.'],
    ['“Bàn tay vô hình” là gì?', 'Ý của Adam Smith: thị trường được dẫn dắt bởi tư lợi cá nhân và giá cả, đưa nguồn lực tới nơi giá trị cao nhất, làm tăng của cải quốc gia.'],
    ['Chi phí cơ hội là gì?', 'Giá trị của phương án thay thế <b>tốt nhất</b> bị bỏ qua khi đưa ra một lựa chọn.'],
    ['Lợi nhuận kinh tế tính thế nào?', 'Lợi nhuận kế toán trừ chi phí cơ hội (vd 2.000 − 8.000 = −6.000 USD).'],
    ['Vì sao đất trường đã sở hữu vẫn có chi phí?', 'Có thể dùng vào việc khác (bán, xây trên đất rẻ hơn) → chi phí cơ hội chứ không “miễn phí”.']
  ],
  quiz: [
    { q: 'Theo định nghĩa truyền thống, kinh tế học nghiên cứu điều gì?', o: ['Cách kiếm tiền nhanh nhất', 'Cách phân bổ hiệu quả nguồn lực khan hiếm cho các mục tiêu thay thế nhau', 'Cách in tiền', 'Cách tính thuế'], a: 1, e: 'Ba từ khóa: nguồn lực khan hiếm – phân bổ hiệu quả – mục tiêu thay thế nhau.' },
    { q: '“Nguồn lực khan hiếm” có nghĩa là:', o: ['Chỉ những thứ rất hiếm như kim cương', 'Nguồn lực không có sẵn vô hạn với chi phí bằng 0', 'Tài nguyên thiên nhiên', 'Tiền mặt'], a: 1, e: 'Mọi thứ dùng để sản xuất hàng/dịch vụ đều là nguồn lực khan hiếm.' },
    { q: 'Ba loại nguồn lực thường được nhắc đến là:', o: ['Vốn, lao động, đất đai', 'Tiền, vàng, dầu', 'Cung, cầu, giá', 'Thuế, lãi suất, tỷ giá'], a: 0, e: 'Đôi khi thêm “tinh thần khởi nghiệp” là loại thứ tư.' },
    { q: 'Nhà kinh tế coi bếp A “hiệu quả hơn” bếp B khi:', o: ['A tiêu thụ ít năng lượng hơn', 'A cho cùng lượng nhiệt với chi phí thấp hơn', 'A rẻ hơn khi mua', 'A đẹp hơn'], a: 1, e: 'Hiệu quả kinh tế tính theo chi phí, không chỉ theo năng lượng.' },
    { q: 'Kinh tế vĩ mô KHÔNG nghiên cứu vấn đề nào dưới đây?', o: ['Tỷ lệ lạm phát', 'Thất nghiệp quốc gia', 'Thị trường xoài', 'Tăng trưởng kinh tế'], a: 2, e: 'Thị trường một mặt hàng cụ thể (xoài, lao động) là đối tượng của vi mô.' },
    { q: 'Quán ăn sáng đông khách ở TP.HCM minh họa điều gì?', o: ['Chính phủ lên kế hoạch phân bổ nguồn lực', 'Nguồn lực chảy tới nơi xã hội đánh giá cao nhờ giá cả và tư lợi – “bàn tay vô hình”', 'Thất bại thị trường', 'Độc quyền'], a: 1, e: 'Không ai điều phối, nhưng giá cả và động cơ tư lợi dẫn nguồn lực.' },
    { q: 'Theo Adam Smith, người bán hàng ăn trên phố chủ yếu vì:', o: ['Lòng tốt', 'Lợi ích của bản thân và gia đình', 'Mệnh lệnh nhà nước', 'Truyền thống'], a: 1, e: 'Chính tư lợi tạo ra “bàn tay vô hình”.' },
    { q: 'Chi phí cơ hội của một lựa chọn là:', o: ['Tổng tiền đã chi', 'Giá trị của phương án thay thế tốt nhất bị bỏ qua', 'Chi phí kế toán', 'Chi phí cố định'], a: 1, e: 'Luôn nhìn vào cái bị bỏ lỡ.' },
    { q: 'Doanh thu 48.000, chi phí trực tiếp 46.000, lẽ ra đi làm ngân hàng được 8.000. Lợi nhuận kinh tế là:', o: ['+2.000', '−6.000', '+8.000', '−8.000'], a: 1, e: '2.000 − 8.000 = −6.000: lỗ về mặt kinh tế dù có lãi kế toán.' },
    { q: 'Mảnh đất đã sở hữu của trường đại học:', o: ['Hoàn toàn miễn phí', 'Vẫn có chi phí cơ hội vì có thể dùng/bán cho việc khác', 'Không thể bán', 'Chỉ tính chi phí xây dựng'], a: 1, e: 'Không có “miễn phí” theo nghĩa kinh tế.' }
  ],
  match: [
    ['Nguồn lực khan hiếm', 'Không có sẵn vô hạn với chi phí bằng 0'],
    ['Phân bổ hiệu quả', 'Tổ hợp đầu vào chi phí thấp nhất cho cùng sản lượng'],
    ['Kinh tế vi mô', 'Lựa chọn của từng tác nhân và thị trường cụ thể'],
    ['Kinh tế vĩ mô', 'Tăng trưởng, lạm phát, thất nghiệp, tỷ giá'],
    ['Bàn tay vô hình', 'Tư lợi + giá cả dẫn nguồn lực tới nơi giá trị cao nhất'],
    ['Chi phí cơ hội', 'Giá trị phương án thay thế tốt nhất bị bỏ qua'],
    ['Mô hình kinh tế', 'Sự đơn giản hóa hợp lý của thế giới thực']
  ]
},

/* ======================= CHƯƠNG 2 ======================= */
{
  n: 2,
  title: 'Cung, cầu và cân bằng thị trường',
  intro: 'Bài 5–8: thị trường thực chất là gì, cầu và cung là mối quan hệ nào, giá cân bằng hình thành ra sao, và điều gì làm cân bằng dịch chuyển. Có đồ thị tương tác để bạn tự thử.',
  sections: [
    { icon: '🛒', title: 'Thị trường, cầu và cung (bài 5)', blocks: [
      { t: 'p', x: 'Kinh tế vi mô còn gọi là <b>lý thuyết về giá</b> vì tập trung vào cách thị trường quyết định giá hàng hóa/dịch vụ. Trong vi mô, <b>thị trường không phải một địa điểm</b>; nó là <b>sự tương tác giữa cầu và cung</b>.' },
      { t: 'table', head: ['', 'Cầu (Demand)', 'Cung (Supply)'], rows: [
        ['Là gì?', 'Quan hệ giữa <b>giá</b> và <b>lượng cầu</b> của một mặt hàng (các yếu tố khác không đổi)', 'Quan hệ giữa <b>giá</b> và <b>lượng cung</b> (các yếu tố khác không đổi)'],
        ['Đo bằng', 'Số đơn vị người tiêu dùng <b>sẵn lòng và có thể mua</b> trong một thời kỳ', 'Số đơn vị nhà sản xuất <b>sẵn lòng và có thể bán</b> trong một thời kỳ'],
        ['Quy luật', '<b>Luật cầu</b>: giá tăng → lượng cầu <b>giảm</b> (quan hệ nghịch)', '<b>Luật cung</b>: giá tăng → lượng cung <b>tăng</b> (quan hệ thuận)'],
        ['Đường trên đồ thị', 'Dốc xuống', 'Dốc lên']
      ] },
      { t: 'key', x: '<b>Cân bằng thị trường</b> xảy ra ở mức giá mà <b>lượng cầu = lượng cung</b>. Giá thấp hơn cân bằng → lượng cầu vượt lượng cung; giá cao hơn → lượng cầu thấp hơn lượng cung.' },
      { t: 'mnemo', x: 'Cầu: giá ↑ → mua ↓ (người mua “chê đắt”). Cung: giá ↑ → bán ↑ (người bán “thấy lời”). Điểm hai đường cắt nhau là cân bằng.' }
    ] },
    { icon: '🔄', title: 'Thị trường tự điều chỉnh về cân bằng (bài 6)', blocks: [
      { t: 'tabs', items: [
        ['Giá thấp hơn cân bằng', '<b>Dư cầu (thiếu hụt)</b>: lượng cầu &gt; lượng cung.<br>Người đánh giá hàng cao nhất sẽ trả giá cao hơn → giá tăng → nhà sản xuất tăng lượng cung, người mua giảm lượng cầu → cho tới khi hai bên bằng nhau thì không còn áp lực tăng giá.'],
        ['Giá cao hơn cân bằng', '<b>Dư cung (dư thừa)</b>: lượng cung &gt; lượng cầu.<br>Nhà sản xuất cạnh tranh bằng cách chào giá thấp hơn → giá giảm → người mua tăng lượng cầu, nhà sản xuất giảm lượng cung → cân bằng được thiết lập.']
      ] },
      { t: 'warn', x: 'Phân tích này giả định cầu và cung <b>cố định</b> còn các biến khác (thu nhập, giá hàng khác, giá đầu vào) <b>không đổi</b> – gọi là giả định <b>“ceteris paribus”</b>. Khi các biến đó đổi, đường cầu/cung dịch chuyển (xem phần sau).' }
    ] },
    { icon: '↔️', title: 'Cầu dịch chuyển và cung dịch chuyển (bài 7–8)', blocks: [
      { t: 'h3', x: 'Khi cầu thay đổi (bài 7)' },
      { t: 'list', items: [
        '<b>Thu nhập tăng</b> → ở mọi mức giá người ta mua nhiều hơn → <b>cầu tăng</b> → giá cân bằng <b>cao hơn</b>, lượng cân bằng <b>cao hơn</b>.',
        '<b>Giá hàng thay thế tăng</b>: giá hải sản tăng → người ta tìm thịt heo (hàng thay thế) → cầu thịt heo tăng → giá và lượng thịt heo đều tăng.',
        '<b>Giá hàng bổ sung tăng</b>: xăng và lốp xe dùng cùng nhau. Xăng tăng giá → đi xe ít → ít phải thay lốp → cầu lốp giảm → giá và lượng lốp đều giảm.'
      ] },
      { t: 'h3', x: 'Khi cung thay đổi (bài 8)' },
      { t: 'table', head: ['Thay đổi', 'Cân bằng mới', 'Ai chịu thiệt/được lợi?'], rows: [
        ['<b>Giá đầu vào tăng</b> (cầu nguyên liệu tăng, thuế nhập khẩu…)', 'Giá <b>cao hơn</b>, lượng <b>thấp hơn</b>', 'Cả người mua và người bán đều <b>thiệt</b>'],
        ['<b>Giá đầu vào giảm</b>', 'Giá <b>thấp hơn</b>, lượng <b>cao hơn</b>', 'Cả hai bên đều <b>được lợi</b>'],
        ['<b>Công nghệ tốt hơn</b>', 'Giá giảm, người mua mua nhiều hơn', 'Cả hai bên được lợi; DN kém hiệu quả thất bại, năng suất ngành tăng']
      ] },
      { t: 'tip', x: '<b>Mẹo làm bài:</b> 1) xác định yếu tố nào đổi; 2) nó dịch chuyển đường <b>cầu</b> hay <b>cung</b>; 3) dịch sang phải (tăng) hay trái (giảm); 4) đọc giá và lượng mới. Hãy thử ngay bên dưới.' },
      { t: 'widget', name: 'sd-market', title: 'Thử dịch chuyển đường cầu và đường cung' }
    ] }
  ],
  summary: [
    'Thị trường = tương tác giữa cầu và cung (không nhất thiết là một địa điểm). Luật cầu: giá ↑ lượng cầu ↓; luật cung: giá ↑ lượng cung ↑.',
    'Cân bằng: lượng cầu = lượng cung. Giá thấp hơn → thiếu hụt → giá tăng; giá cao hơn → dư thừa → giá giảm.',
    'Cầu tăng (thu nhập ↑, hàng thay thế đắt lên) → giá ↑ và lượng ↑. Hàng bổ sung đắt lên → cầu giảm.',
    'Giá đầu vào ↑ → cung giảm → giá ↑, lượng ↓. Công nghệ tốt/đầu vào rẻ → cung tăng → giá ↓, lượng ↑.',
    'Giả định ceteris paribus: chỉ đổi một biến, giữ nguyên các biến còn lại.'
  ],
  cards: [
    ['Vì sao vi mô còn gọi là “lý thuyết về giá”?', 'Vì tập trung vào cách thị trường vận hành để xác định giá hàng hóa và dịch vụ.'],
    ['Thị trường theo kinh tế vi mô là gì?', 'Không phải địa điểm trao đổi, mà là sự tương tác giữa quan hệ cầu và quan hệ cung.'],
    ['Cầu là gì? Luật cầu?', 'Quan hệ giữa giá và lượng cầu (các yếu tố khác không đổi). Luật cầu: giá tăng → lượng cầu giảm (nghịch biến).'],
    ['Cung là gì? Luật cung?', 'Quan hệ giữa giá và lượng cung. Luật cung: giá tăng → lượng cung tăng (đồng biến).'],
    ['Cân bằng thị trường?', 'Mức giá mà lượng cầu bằng lượng cung.'],
    ['Dư cầu (thiếu hụt) là gì? Điều gì xảy ra?', 'Lượng cầu &gt; lượng cung (giá thấp hơn cân bằng) → người mua trả giá cao hơn → giá tăng đến khi cân bằng.'],
    ['Dư cung (dư thừa) là gì? Điều gì xảy ra?', 'Lượng cung &gt; lượng cầu (giá cao hơn cân bằng) → người bán hạ giá → giá giảm đến khi cân bằng.'],
    ['Ceteris paribus nghĩa là gì?', 'Giả định các biến khác (thu nhập, giá hàng khác, giá đầu vào…) không đổi khi phân tích một mối quan hệ.'],
    ['Thu nhập tăng ảnh hưởng thế nào tới cân bằng?', 'Cầu tăng → giá cân bằng và lượng cân bằng đều tăng.'],
    ['Hàng thay thế và hàng bổ sung khác nhau thế nào?', 'Thay thế: dùng thay nhau (hải sản ↔ thịt heo). Bổ sung: dùng cùng nhau (xăng – lốp xe).'],
    ['Giá đầu vào tăng làm cân bằng thay đổi ra sao?', 'Cung giảm → giá cân bằng cao hơn, lượng thấp hơn; cả người mua lẫn người bán đều thiệt.'],
    ['Công nghệ tốt hơn tác động thế nào?', 'Chi phí đơn vị giảm → giá giảm, lượng tăng; DN kém hiệu quả thất bại, năng suất ngành tăng.']
  ],
  quiz: [
    { q: 'Trong kinh tế vi mô, “thị trường” là:', o: ['Một chợ vật lý', 'Sự tương tác giữa cầu và cung', 'Một cửa hàng', 'Một loại thuế'], a: 1, e: 'Thị trường không nhất thiết là một địa điểm.' },
    { q: 'Luật cầu phát biểu:', o: ['Giá tăng thì lượng cầu tăng', 'Giá tăng thì lượng cầu giảm', 'Lượng cầu không phụ thuộc giá', 'Thu nhập tăng thì giá giảm'], a: 1, e: 'Quan hệ nghịch giữa giá và lượng cầu.' },
    { q: 'Luật cung phát biểu:', o: ['Giá tăng thì lượng cung giảm', 'Giá tăng thì lượng cung tăng', 'Cung không phụ thuộc giá', 'Giá giảm thì cung tăng'], a: 1, e: 'Quan hệ thuận giữa giá và lượng cung.' },
    { q: 'Ở giá thấp hơn giá cân bằng sẽ xảy ra:', o: ['Dư cung', 'Dư cầu (thiếu hụt) → giá có xu hướng tăng', 'Không có gì', 'Cung tăng ngay'], a: 1, e: 'Người mua cạnh tranh nhau, đẩy giá lên.' },
    { q: 'Ở giá cao hơn giá cân bằng sẽ xảy ra:', o: ['Dư cầu', 'Dư cung (dư thừa) → người bán hạ giá', 'Cầu tăng', 'Thiếu hụt'], a: 1, e: 'Người bán cạnh tranh nhau bằng giá thấp hơn.' },
    { q: 'Thu nhập người tiêu dùng tăng sẽ làm:', o: ['Cầu tăng, giá và lượng cân bằng tăng', 'Cầu giảm', 'Cung giảm', 'Giá giảm, lượng tăng'], a: 0, e: 'Ở mọi mức giá người ta mua nhiều hơn.' },
    { q: 'Giá hải sản tăng sẽ làm:', o: ['Cầu thịt heo (hàng thay thế) tăng', 'Cầu thịt heo giảm', 'Cung hải sản tăng', 'Không ảnh hưởng thịt heo'], a: 0, e: 'Người tiêu dùng chuyển sang hàng thay thế.' },
    { q: 'Xăng tăng giá thường làm cầu lốp xe:', o: ['Tăng', 'Giảm vì hai hàng bổ sung cho nhau', 'Không đổi', 'Tăng gấp đôi'], a: 1, e: 'Đi xe ít hơn → thay lốp ít hơn.' },
    { q: 'Giá nguyên liệu đầu vào tăng làm cân bằng mới có:', o: ['Giá cao hơn và lượng thấp hơn', 'Giá thấp hơn và lượng cao hơn', 'Giá và lượng đều cao hơn', 'Không đổi'], a: 0, e: 'Đường cung dịch sang trái.' },
    { q: 'Cải tiến công nghệ giúp:', o: ['Giảm chi phí đơn vị, giá giảm, lượng tăng; cả hai bên có lợi', 'Tăng giá', 'Giảm lượng', 'Chỉ lợi cho người bán'], a: 0, e: 'Đường cung dịch sang phải.' },
    { q: 'Giả định “ceteris paribus” dùng để:', o: ['Bỏ qua mọi biến số', 'Giữ nguyên các biến khác để phân tích tác động của một biến', 'Cố định giá', 'Tăng thu nhập'], a: 1, e: 'Mỗi lần chỉ đổi một biến.' }
  ],
  match: [
    ['Luật cầu', 'Giá ↑ thì lượng cầu ↓'],
    ['Luật cung', 'Giá ↑ thì lượng cung ↑'],
    ['Cân bằng thị trường', 'Lượng cầu = lượng cung'],
    ['Dư cầu', 'Giá thấp hơn cân bằng, thiếu hụt hàng'],
    ['Dư cung', 'Giá cao hơn cân bằng, hàng dư thừa'],
    ['Hàng bổ sung', 'Xăng và lốp xe'],
    ['Công nghệ tốt hơn', 'Cung tăng, giá giảm, lượng tăng']
  ]
},

/* ======================= CHƯƠNG 3 ======================= */
{
  n: 3,
  title: 'Thị trường phân bổ nguồn lực và phúc lợi',
  intro: 'Bài 9–13: dùng thị trường xe máy làm ví dụ sống động, rồi xem giá cả phân bổ nguồn lực thế nào, và vì sao tại điểm cân bằng thị trường đạt phúc lợi xã hội lớn nhất (thặng dư người tiêu dùng + thặng dư nhà sản xuất).',
  sections: [
    { icon: '🏍️', title: 'Các nhà kinh tế học yêu thích xe máy (bài 9)', blocks: [
      { t: 'p', x: 'Thị trường xe máy cho thấy cùng lúc nhiều tác động lên cân bằng. Để rõ ràng, ta tách từng cái:' },
      { t: 'steps', items: [
        '<b>Thu nhập tăng → cầu xe máy tăng.</b> Một thời gian, cầu mạnh cho phép người bán nâng giá.',
        '<b>Xe Trung Quốc tràn vào.</b> Cầu mạnh khiến nhà sản xuất Trung Quốc nhắm vào thị trường Việt Nam: cung xe giá rẻ (chất lượng thấp) tăng nhanh, nhiều người mua xe này thay vì xe lắp ráp trong nước → <b>cầu xe lắp ráp trong nước giảm</b>, giá và lượng cân bằng của nó giảm. Honda phản ứng bằng mẫu <b>Wave Alpha</b> giá cạnh tranh, chất lượng tốt hơn. Người tiêu dùng được lợi: nhiều lựa chọn hơn, giá thấp hơn.',
        '<b>Chính sách thương mại.</b> Thuế nhập khẩu linh kiện tăng nếu hàm lượng nội địa thấp → chi phí lắp ráp tăng → giá cân bằng xe lắp ráp tăng, lượng giảm. Nhà lắp ráp và người tiêu dùng trong nước chịu chi phí cao hơn; <b>nhà sản xuất linh kiện trong nước</b> được lợi.'
      ] },
      { t: 'key', x: 'Một cú sốc thị trường thường là <b>tổng hợp</b> nhiều thay đổi cầu và cung; muốn hiểu phải tách từng tác động rồi cộng lại.' }
    ] },
    { icon: '🎯', title: 'Thị trường và sự phân bổ nguồn lực (bài 10)', blocks: [
      { t: 'p', x: 'Giá thay đổi kéo theo thay đổi phân bổ nguồn lực. Nguồn lực gồm <b>lao động</b> (cả lao động chân tay lẫn trí óc như quản lý), <b>vốn</b> (trong vi mô là vốn vật chất: nhà xưởng, máy móc), <b>đất đai</b> (mặt bằng và tài nguyên trên/dưới đất), đôi khi thêm <b>tinh thần khởi nghiệp</b>.' },
      { t: 'steps', items: [
        'Cầu tiêu dùng một hàng tăng → <b>giá tăng</b>.',
        'Giá cao thúc đẩy doanh nhân <b>huy động nguồn lực sản xuất nhiều hơn</b> mặt hàng đang hút khách; nhà sản xuất mới có thể gia nhập.',
        'Trong môi trường cạnh tranh, doanh nghiệp có động lực mạnh chọn công nghệ và nguồn lực <b>chi phí thấp nhất</b>.',
        'Ngược lại: cầu giảm → giá giảm → nguồn lực được <b>giải phóng</b> và chuyển sang phương án thay thế tốt nhất.'
      ] },
      { t: 'key', x: 'Trong nền kinh tế thị trường, <b>cơ chế giá</b> hướng nguồn lực vào những hàng hóa, dịch vụ mà người tiêu dùng muốn. Mỗi người thường vừa là người tiêu dùng vừa là chủ sở hữu nguồn lực (lao động của chính mình).' }
    ] },
    { icon: '💰', title: 'Thặng dư và phúc lợi (bài 11–13)', blocks: [
      { t: 'p', x: 'Giao dịch thị trường làm <b>cả người mua và người bán đều có lợi</b>. Ví dụ: ăn một tô phở 6.000 đồng, người mua thích no bụng hơn giữ 6.000 trong túi; quán phở thích có tiền hơn giữ tô phở. Cả hai đều được lợi.' },
      { t: 'table', head: ['Khái niệm', 'Định nghĩa', 'Trên đồ thị'], rows: [
        ['<b>Thặng dư người tiêu dùng (CS)</b>', 'Chênh lệch giữa <b>giá trị người mua cảm nhận</b> và <b>giá cân bằng</b> họ thực trả', 'Diện tích <b>dưới đường cầu, trên giá P*</b>'],
        ['<b>Thặng dư nhà sản xuất (PS)</b>', 'Chênh lệch giữa <b>giá thực nhận</b> và <b>giá tối thiểu họ sẵn lòng bán</b> (chi phí biên)', 'Diện tích <b>trên đường cung, dưới giá P*</b>'],
        ['<b>Lợi ích xã hội (SB)</b> hay phúc lợi kinh tế', 'SB = CS + PS', 'Tổng hai vùng diện tích']
      ] },
      { t: 'key', x: '<b>Lợi ích xã hội đạt lớn nhất tại cân bằng thị trường.</b> Nếu sản lượng chỉ là Q₁ &lt; Q*: một phần CS chuyển sang PS nhưng hai tam giác nhỏ giữa Q₁ và Q* <b>biến mất</b>. Nếu sản lượng Q₂ &gt; Q*: đường cung nằm trên đường cầu, tức chi phí nguồn lực để tăng thêm sản lượng <b>lớn hơn giá trị người tiêu dùng đặt cho phần tăng thêm</b> → SB giảm đúng bằng diện tích tam giác ABC.' },
      { t: 'tip', x: 'Hãy tick “Ép sản lượng giao dịch khác mức cân bằng” trong đồ thị dưới đây và kéo Q: tam giác đỏ chính là <b>tổn thất vô ích</b> (deadweight loss).' },
      { t: 'widget', name: 'sd-market', title: 'Thặng dư và tổn thất khi sản lượng lệch khỏi cân bằng' },
      { t: 'warn', x: 'Kết luận “thị trường tối đa hóa phúc lợi” chỉ đúng khi thị trường <b>cạnh tranh hoàn hảo và không có méo mó</b>. Những chương sau xem xét ngoại tác, độc quyền, thông tin bất cân xứng… làm lệch kết quả này.' }
    ] }
  ],
  summary: [
    'Một cú sốc thực tế (xe máy) là tổng của nhiều dịch chuyển cầu/cung: thu nhập tăng, hàng nhập khẩu giá rẻ, thuế linh kiện.',
    'Giá hướng nguồn lực (lao động, vốn, đất đai) tới hàng hóa người tiêu dùng muốn; cầu giảm thì nguồn lực được giải phóng sang việc khác.',
    'CS = vùng dưới đường cầu, trên giá cân bằng; PS = vùng trên đường cung, dưới giá cân bằng; SB = CS + PS.',
    'SB đạt tối đa tại cân bằng thị trường; sản lượng thấp hơn hay cao hơn đều gây tổn thất vô ích.',
    'Kết quả này dựa trên giả định thị trường cạnh tranh, không méo mó.'
  ],
  cards: [
    ['Hai tác động đầu tiên lên thị trường xe máy Việt Nam?', '1) Thu nhập tăng → cầu tăng, giá tăng. 2) Xe Trung Quốc giá rẻ tràn vào → cầu xe lắp ráp trong nước giảm; Honda ra Wave Alpha giá cạnh tranh.'],
    ['Thuế nhập khẩu linh kiện theo hàm lượng nội địa ảnh hưởng ai?', 'Chi phí lắp ráp tăng → giá cân bằng tăng, lượng giảm: nhà lắp ráp và người mua chịu thiệt; nhà sản xuất linh kiện trong nước được lợi.'],
    ['Các loại nguồn lực (vi mô)?', 'Lao động, vốn (vật chất: nhà xưởng, máy móc), đất đai (mặt bằng + tài nguyên); đôi khi thêm tinh thần khởi nghiệp.'],
    ['Cơ chế giá phân bổ nguồn lực thế nào?', 'Cầu tăng → giá tăng → doanh nghiệp huy động nguồn lực sản xuất nhiều hơn; cầu giảm → nguồn lực chuyển sang việc khác.'],
    ['Vì sao giao dịch thị trường làm cả hai bên có lợi?', 'Mỗi bên thích thứ nhận được hơn thứ trao đi (người mua thích tô phở hơn 6.000 đồng; quán thích tiền hơn tô phở).'],
    ['Thặng dư người tiêu dùng (CS) là gì?', 'Chênh lệch giữa giá trị người mua cảm nhận và giá cân bằng thực trả; diện tích dưới đường cầu, trên P*.'],
    ['Thặng dư nhà sản xuất (PS) là gì?', 'Chênh lệch giữa giá bán thực nhận và giá tối thiểu sẵn lòng bán; diện tích trên đường cung, dưới P*.'],
    ['Lợi ích xã hội (SB) tính thế nào?', 'SB = CS + PS (còn gọi phúc lợi kinh tế).'],
    ['Khi sản lượng thấp hơn Q* thì sao?', 'Một phần CS chuyển sang PS nhưng hai tam giác nhỏ giữa Q₁ và Q* mất đi → SB thấp hơn.'],
    ['Khi sản lượng cao hơn Q* thì sao?', 'Chi phí nguồn lực của phần tăng thêm lớn hơn giá trị người mua đặt cho nó → SB giảm bằng diện tích tam giác ABC.'],
    ['Tại sao nói thị trường cân bằng tối đa hóa phúc lợi xã hội?', 'Vì tại Q* tổng CS + PS lớn nhất; lệch sang hai phía đều tạo tổn thất vô ích (với giả định cạnh tranh, không méo mó).']
  ],
  quiz: [
    { q: 'Khi xe Trung Quốc giá rẻ tràn vào, cầu xe lắp ráp trong nước:', o: ['Tăng', 'Giảm', 'Không đổi', 'Tăng gấp đôi'], a: 1, e: 'Nhiều người chuyển sang mua xe rẻ hơn.' },
    { q: 'Thuế nhập khẩu linh kiện cao hơn với xe có hàm lượng nội địa thấp làm:', o: ['Giá xe lắp ráp giảm', 'Giá xe lắp ráp tăng, lượng giảm', 'Không đổi', 'Tăng cung xe'], a: 1, e: 'Chi phí đầu vào tăng → cung dịch trái.' },
    { q: 'Khi cầu một mặt hàng giảm, nguồn lực dùng để sản xuất nó sẽ:', o: ['Bị phá hủy', 'Được giải phóng và chuyển sang phương án thay thế tốt nhất', 'Tăng lên', 'Đứng yên'], a: 1, e: 'Giá giảm khiến nguồn lực rời ngành.' },
    { q: 'Thặng dư người tiêu dùng nằm ở đâu?', o: ['Trên đường cung dưới giá', 'Dưới đường cầu, trên giá cân bằng', 'Dưới đường cung', 'Trên đường cầu'], a: 1, e: 'Là phần lợi người mua nhận thêm so với giá phải trả.' },
    { q: 'Thặng dư nhà sản xuất nằm ở đâu?', o: ['Dưới đường cầu', 'Trên đường cung, dưới giá cân bằng', 'Dưới đường cung', 'Trên giá cân bằng'], a: 1, e: 'Chênh lệch giữa giá thực nhận và giá tối thiểu muốn bán.' },
    { q: 'Lợi ích xã hội (SB) bằng:', o: ['CS − PS', 'CS + PS', 'CS × PS', 'PS'], a: 1, e: 'Tổng thặng dư người tiêu dùng và nhà sản xuất.' },
    { q: 'SB đạt giá trị lớn nhất khi:', o: ['Sản lượng ít hơn cân bằng', 'Sản lượng bằng mức cân bằng thị trường', 'Sản lượng nhiều hơn cân bằng', 'Giá bằng 0'], a: 1, e: 'Lệch khỏi Q* đều gây tổn thất.' },
    { q: 'Nếu sản lượng lớn hơn Q* thì:', o: ['Đường cung nằm trên đường cầu, chi phí vượt giá trị → SB giảm', 'SB tăng', 'CS tăng', 'PS tăng vô hạn'], a: 0, e: 'Sản xuất thêm tốn nhiều nguồn lực hơn giá trị nhận được.' },
    { q: 'Một tô phở 6.000 đồng cho thấy:', o: ['Người mua thiệt', 'Cả người mua và người bán đều có lợi', 'Chỉ người bán lợi', 'Không ai lợi'], a: 1, e: 'Giao dịch tự nguyện luôn đôi bên cùng có lợi.' },
    { q: 'Cơ chế nào hướng nguồn lực vào hàng hóa người tiêu dùng muốn?', o: ['Mệnh lệnh', 'Cơ chế giá', 'Lòng tốt', 'Ngẫu nhiên'], a: 1, e: 'Giá tín hiệu cho doanh nghiệp biết nên sản xuất gì.' }
  ],
  match: [
    ['Thặng dư người tiêu dùng', 'Dưới đường cầu, trên giá cân bằng'],
    ['Thặng dư nhà sản xuất', 'Trên đường cung, dưới giá cân bằng'],
    ['Lợi ích xã hội', 'CS + PS'],
    ['Tổn thất vô ích', 'Phần SB mất đi khi sản lượng lệch khỏi cân bằng'],
    ['Wave Alpha', 'Honda đáp trả xe Trung Quốc giá rẻ'],
    ['Cơ chế giá', 'Dẫn nguồn lực tới hàng hóa người tiêu dùng muốn']
  ]
},

/* ======================= CHƯƠNG 4 ======================= */
{
  n: 4,
  title: 'Ngoại tác và chi phí toàn bộ',
  intro: 'Bài 14–15: vì sao thị trường đôi khi phân bổ nguồn lực quá mức (ô nhiễm, tiếng ồn xe máy), khái niệm chi phí toàn bộ, và cách “nội hóa ngoại tác” bằng thuế.',
  sections: [
    { icon: '🌫️', title: 'Ngoại tác và chi phí toàn bộ (bài 14)', blocks: [
      { t: 'p', x: 'Hội nghị về Phát triển Bền vững ở Nam Phi nhắc lại một thực tế: theo đuổi tăng trưởng cao, nhiều nước phải trả giá bằng thiệt hại môi trường. Câu hỏi: <i>vì sao thị trường không tự phân bổ nguồn lực hiệu quả trong trường hợp này?</i>' },
      { t: 'key', x: '<b>Ngoại tác (externality)</b>: một phần <b>chi phí</b> (ngoại tác tiêu cực) hoặc <b>lợi ích</b> (ngoại tác tích cực) của việc sử dụng nguồn lực <b>rơi vào những người ngoài giao dịch thị trường</b>.' },
      { t: 'table', head: ['Loại', 'Ý nghĩa', 'Ví dụ'], rows: [
        ['Ngoại tác <b>tiêu cực</b>', 'Chi phí rơi vào người không tham gia giao dịch', 'Ô nhiễm và tiếng ồn do xe máy tăng nhanh – ai cũng chịu, kể cả người không có xe'],
        ['Ngoại tác <b>tích cực</b>', 'Lợi ích rơi vào người không tham gia giao dịch', 'Hàng xóm hưởng lợi khi bạn trồng cây xanh trước nhà']
      ] },
      { t: 'h3', x: 'Chi phí tư nhân, chi phí xã hội, chi phí toàn bộ' },
      { t: 'list', items: [
        'Người tiêu dùng quyết định dựa trên <b>giá thị trường</b> = <b>chi phí tư nhân</b>.',
        'Nguồn lực chỉ được phân bổ hiệu quả khi tính <b>chi phí toàn bộ = chi phí tư nhân + chi phí xã hội</b>.',
        'Vì chi phí toàn bộ <b>lớn hơn</b> giá phản ánh trên thị trường, nguồn lực có xu hướng bị <b>phân bổ quá mức</b>: mua quá nhiều xe máy, xã hội gánh hậu quả môi trường.'
      ] },
      { t: 'mnemo', x: 'Giá thị trường “quên” tính một phần chi phí → giá <b>quá rẻ</b> so với thực tế → mua <b>quá nhiều</b>.' }
    ] },
    { icon: '🧾', title: '“Nội hóa” ngoại tác (bài 15)', blocks: [
      { t: 'p', x: 'Khi có ngoại tác tiêu cực, chi phí toàn bộ không được phản ánh trên thị trường, tạo ra <b>chênh lệch giữa chi phí tư nhân và chi phí xã hội</b>, kết quả là ngành liên quan bị phân bổ nguồn lực quá mức.' },
      { t: 'key', x: 'Một giải pháp phổ biến: <b>làm tăng chi phí sản xuất</b> sao cho chi phí toàn bộ (chi phí tư nhân + chi phí xã hội do ngoại tác) được phản ánh trên thị trường – gọi là <b>“nội hóa” ngoại tác</b>. Có thể bằng <b>đánh thuế</b> hoặc <b>hạn chế sử dụng</b>.' },
      { t: 'p', x: 'Ví dụ minh họa: đề xuất tăng gấp đôi thuế tiêu thụ xe gắn máy và lập khu vực cấm xe máy ở một số tuyến phố trung tâm TP.HCM.' },
      { t: 'h3', x: 'Đọc đồ thị thuế' },
      { t: 'steps', items: [
        'Đường cung S<sub>P</sub> thể hiện <b>chi phí sản xuất tư nhân</b>, chưa gồm ngoại tác tiêu cực; D<sub>P</sub> là cầu xe gắn máy. Theo giải pháp thị trường: bán Q<sub>M</sub> xe ở giá P<sub>M</sub>.',
        'Khi áp thuế để nội hóa ngoại tác, <b>đường cung dịch sang trái</b> thành S<sub>T</sub> (chi phí cao hơn).',
        'Kết quả: <b>lượng tiêu thụ ít hơn (Q<sub>T</sub>)</b> → ô nhiễm không khí và tiếng ồn giảm.',
        'Tiền thuế thu được có thể dùng cải thiện chất lượng không khí hoặc chi trả các chi phí y tế liên quan.'
      ] },
      { t: 'widget', name: 'sd-tax', title: 'Thử đánh thuế để nội hóa ngoại tác' },
      { t: 'tip', x: 'Thuế tối ưu đúng bằng <b>chi phí ngoại tác biên</b>. Thuế thấp hơn → vẫn dùng quá mức; thuế cao hơn → hạn chế quá mức, cũng làm mất phúc lợi.' }
    ] }
  ],
  summary: [
    'Ngoại tác = chi phí/lợi ích rơi vào bên thứ ba ngoài giao dịch; tiêu cực (ô nhiễm) hoặc tích cực.',
    'Người tiêu dùng chỉ thấy chi phí tư nhân; hiệu quả cần xét chi phí toàn bộ = chi phí tư nhân + chi phí xã hội.',
    'Ngoại tác tiêu cực khiến nguồn lực bị phân bổ quá mức cho ngành (vd quá nhiều xe máy).',
    '“Nội hóa” ngoại tác bằng thuế/hạn chế làm cung dịch trái, giảm sản lượng, giảm ô nhiễm; tiền thuế có thể dùng khắc phục hậu quả.',
    'Thuế lý tưởng bằng đúng chi phí ngoại tác biên.'
  ],
  cards: [
    ['Ngoại tác là gì?', 'Một phần chi phí (tiêu cực) hoặc lợi ích (tích cực) của việc dùng nguồn lực rơi vào người/nhóm bên ngoài giao dịch thị trường.'],
    ['Cho ví dụ ngoại tác tiêu cực.', 'Ô nhiễm không khí và tiếng ồn do số lượng xe máy tăng – ai cũng chịu, kể cả người không có xe.'],
    ['Chi phí toàn bộ gồm gì?', 'Chi phí tư nhân + chi phí xã hội (do ngoại tác).'],
    ['Vì sao ngoại tác tiêu cực làm nguồn lực bị phân bổ quá mức?', 'Giá thị trường chỉ phản ánh chi phí tư nhân, thấp hơn chi phí toàn bộ → bị mua/sản xuất nhiều hơn mức tối ưu xã hội.'],
    ['“Nội hóa” ngoại tác là gì?', 'Làm cho chi phí toàn bộ được phản ánh trên thị trường, ví dụ bằng thuế hoặc hạn chế sử dụng.'],
    ['Thuế nội hóa ngoại tác dịch đường cung thế nào?', 'Dịch sang trái (S<sub>P</sub> → S<sub>T</sub>), làm sản lượng giảm từ Q<sub>M</sub> xuống Q<sub>T</sub>.'],
    ['Tiền thuế thu được dùng vào đâu?', 'Cải thiện chất lượng không khí hoặc chi trả các chi phí y tế liên quan đến việc sử dụng xe máy.'],
    ['Đề xuất chính sách xe máy ở TP.HCM trong bài?', 'Tăng gấp đôi thuế tiêu thụ xe gắn máy và lập khu vực cấm xe máy ở một số tuyến phố trung tâm.'],
    ['Khi nào thuế đạt phúc lợi cao nhất?', 'Khi mức thuế bằng chi phí ngoại tác biên – chi phí toàn bộ được phản ánh đúng.']
  ],
  quiz: [
    { q: 'Ngoại tác là:', o: ['Chi phí/lợi ích rơi vào người ngoài giao dịch', 'Thuế nhập khẩu', 'Giá cân bằng', 'Lợi nhuận kế toán'], a: 0, e: 'Phần không được phản ánh trong giá giao dịch.' },
    { q: 'Ô nhiễm và tiếng ồn từ xe máy là ví dụ của:', o: ['Ngoại tác tích cực', 'Ngoại tác tiêu cực', 'Độc quyền', 'Hàng bổ sung'], a: 1, e: 'Người không có xe vẫn phải chịu.' },
    { q: 'Chi phí toàn bộ bằng:', o: ['Chi phí tư nhân', 'Chi phí tư nhân + chi phí xã hội', 'Chi phí xã hội', 'Giá thị trường'], a: 1, e: 'Cần cộng cả khoản “bên ngoài”.' },
    { q: 'Với ngoại tác tiêu cực, thị trường tự do thường:', o: ['Sản xuất quá ít', 'Sản xuất/tiêu dùng quá mức', 'Cân bằng hoàn hảo', 'Không sản xuất'], a: 1, e: 'Vì giá không phản ánh chi phí xã hội.' },
    { q: 'Thuế nhằm “nội hóa” ngoại tác làm đường cung:', o: ['Dịch sang phải', 'Dịch sang trái', 'Không đổi', 'Thẳng đứng'], a: 1, e: 'Chi phí sản xuất hiệu dụng tăng.' },
    { q: 'Kết quả của thuế nội hóa ngoại tác là:', o: ['Lượng tiêu thụ giảm, ô nhiễm giảm', 'Lượng tăng', 'Ô nhiễm tăng', 'Giá giảm'], a: 0, e: 'Q giảm từ Q_M xuống Q_T.' },
    { q: 'Biện pháp nào KHÔNG phải cách giảm tiêu dùng hàng gây ngoại tác tiêu cực?', o: ['Đánh thuế', 'Hạn chế sử dụng (khu vực cấm)', 'Trợ giá để mua nhiều hơn', 'Tăng thuế tiêu thụ'], a: 2, e: 'Trợ giá làm tăng chứ không giảm tiêu dùng.' },
    { q: 'Tiền thuế thu từ xe máy có thể dùng để:', o: ['Cải thiện chất lượng không khí', 'Bỏ đi', 'Giảm lương', 'Tăng ô nhiễm'], a: 0, e: 'Giúp bù đắp chi phí xã hội của ngoại tác.' }
  ],
  match: [
    ['Ngoại tác tiêu cực', 'Chi phí rơi vào người ngoài giao dịch (ô nhiễm)'],
    ['Ngoại tác tích cực', 'Lợi ích rơi vào người ngoài giao dịch'],
    ['Chi phí toàn bộ', 'Chi phí tư nhân + chi phí xã hội'],
    ['Nội hóa ngoại tác', 'Đưa chi phí xã hội vào giá bằng thuế/hạn chế'],
    ['Phân bổ quá mức', 'Tiêu dùng nhiều hơn mức tối ưu xã hội']
  ]
}

);
