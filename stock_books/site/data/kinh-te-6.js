// Phần 3: Tài chính và thuế khóa – Chương 21–24 (bài 80–98).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.kinhte = BOOK_DATA.kinhte || { chapters: [] };
BOOK_DATA.kinhte.chapters.push(

/* ======================= CHƯƠNG 21 ======================= */
{
  n: 21,
  title: 'Thông tin, thị trường hiệu quả và cơ cấu vốn',
  intro: 'Bài 80–83: thông tin chính thức và không chính thức làm rung chuyển ngân hàng, giả thuyết thị trường hiệu quả (yếu, bán mạnh, mạnh), và vì sao vay nợ không tạo ra giá trị trong thế giới hoàn hảo.',
  sections: [
    { icon: '📣', title: 'Thông tin từ các định chế tài chính (bài 80)', blocks: [
      { t: 'p', x: 'Thông tin về các định chế tài chính đóng vai trò quan trọng trong việc huy động tiền gửi của công chúng. Người gửi tiền nhận hai loại thông tin:' },
      { t: 'table', head: ['', 'Chính thức', 'Không chính thức'], rows: [
        ['Nguồn', 'Hội nghị, báo cáo tài chính, ấn phẩm công khai', 'Tin đồn, người trong cuộc'],
        ['Rủi ro', 'Ít sai lệch hơn', 'Có thể cố tình gây hiểu lầm, bịa đặt bởi người có ý đồ xấu']
      ] },
      { t: 'warn', x: 'Tin xấu không chính thức có thể khiến một số người gửi rút tiền, rồi nhiều người khác bắt chước (<b>hiệu ứng bầy đàn – herding effect</b>), tạo <b>cơn sốt rút tiền (bank run)</b> làm ngân hàng thiếu thanh khoản và có thể kéo sụp cả hệ thống.' },
      { t: 'tip', x: 'Hệ thống tài chính cần điều tiết thông tin chính thức: nếu chỉ vài ngân hàng công bố, những ngân hàng đó có thể bị thiệt hại vì thông tin lan sang toàn hệ thống. Ngân hàng Nhà nước can thiệp kịp thời để ngăn thông tin không chính thức gây bất ổn — như trong vụ ACB.' }
    ] },
    { icon: '📈', title: 'Giả thuyết thị trường hiệu quả (bài 81–82)', blocks: [
      { t: 'key', x: 'Thị trường tài chính <b>hiệu quả</b> khi giá hiện tại của chứng khoán <b>phản ánh đầy đủ mọi thông tin</b> về kinh tế và hoạt động các công ty. Thông tin đổi → giá trị nội tại đổi; biến động giá phụ thuộc thị trường phản ứng nhanh thế nào với thông tin mới.' },
      { t: 'table', head: ['Dạng (Eugene Fama)', 'Giá phản ánh…', 'Ví dụ cổ phiếu Bibica (BBC) báo lỗ', 'Hệ quả cho nhà đầu tư'], rows: [
        ['<b>Yếu</b> (weak)', 'Toàn bộ chuỗi giá lịch sử', 'Giá chưa giảm ngay khi công bố lỗ', '<b>Phân tích kỹ thuật</b> (dựa vào lịch sử giá) không thắng thị trường'],
        ['<b>Bán mạnh</b> (semi-strong)', 'Mọi thông tin công khai (báo cáo tài chính, báo chí)', 'Giá giảm khi tin xấu được công bố', '<b>Phân tích cơ bản</b> cũng không đạt lợi nhuận vượt trội; chỉ thông tin nội bộ mới có'],
        ['<b>Mạnh</b> (strong)', 'Mọi thông tin, kể cả nội bộ', 'Giá đã giảm khi công ty lỗ, dù thông tin có công khai hay không', 'Không ai thắng thị trường kể cả có thông tin nội bộ']
      ] },
      { t: 'tip', x: 'Thị trường hiệu quả (dạng nào) rất quan trọng để tạo <b>công bằng và niềm tin</b>. Nhưng thị trường nhỏ, mỏng như Việt Nam khó hiệu quả; <b>minh bạch hơn và các nhà phân tích chuyên nghiệp</b> mới phá được vòng luẩn quẩn thiếu hiệu quả.' }
    ] },
    { icon: '🍰', title: 'Vay nợ có tạo giá trị không? (bài 83)', blocks: [
      { t: 'p', x: 'Trong thế giới thị trường vốn hoàn hảo và <b>không có thuế</b>, tài trợ bằng nợ <b>không tạo giá trị</b> — một hiểu biết nền tảng của tài chính doanh nghiệp hiện đại.' },
      { t: 'steps', items: [
        '<b>Công ty A</b> chỉ có một chủ sở hữu vốn cổ phần; giá trị hiện tại của dòng tiền là một “chiếc bánh”, chủ sở hữu hưởng cả bánh.',
        '<b>Công ty B</b> giống hệt A nhưng có cả vốn cổ phần và nợ. Dòng tiền như nhau → bánh B bằng bánh A.',
        'Cách tài trợ chỉ là <b>cách chia bánh</b> giữa chủ sở hữu và chủ nợ; hai phần cộng lại bằng cả bánh.'
      ] },
      { t: 'key', x: 'Giá trị công ty phụ thuộc vào <b>hoạt động kinh doanh tạo dòng tiền</b>, không phải cách tài trợ. Chỉ có một lưu ý: phải dùng “con dao Teflon không dính” để chia — nếu không một phần bánh rơi mất khi cắt (ví dụ chi phí giao dịch, thuế).' }
    ] }
  ],
  summary: [
    'Thông tin không chính thức có thể gây hiệu ứng bầy đàn và bank run; ngân hàng trung ương cần can thiệp kịp thời, điều tiết thông tin chính thức.',
    'Ba dạng hiệu quả: yếu (lịch sử giá), bán mạnh (thông tin công khai), mạnh (cả nội bộ) — mỗi dạng loại bỏ một cách kiếm lợi nhuận vượt trội.',
    'Thị trường nhỏ như VN khó hiệu quả; cần minh bạch và nhà phân tích chuyên nghiệp.',
    'Không thuế, thị trường hoàn hảo: cách tài trợ chỉ chia bánh, không làm bánh to hơn.'
  ],
  cards: [
    ['Hai loại thông tin về ngân hàng?', 'Chính thức (báo cáo, hội nghị) và không chính thức (tin đồn, nội bộ).'],
    ['Hiệu ứng bầy đàn (herding)?', 'Đa số người gửi bắt chước hành vi rút tiền của một số người khác.'],
    ['Bank run là gì?', 'Cơn sốt rút tiền hàng loạt làm ngân hàng thiếu thanh khoản, có thể sụp cả hệ thống.'],
    ['Thị trường hiệu quả?', 'Giá chứng khoán phản ánh đầy đủ mọi thông tin.'],
    ['Hiệu quả dạng yếu?', 'Giá hiện tại phản ánh toàn bộ chuỗi giá lịch sử.'],
    ['Hiệu quả dạng bán mạnh?', 'Giá phản ánh mọi thông tin công khai.'],
    ['Hiệu quả dạng mạnh?', 'Giá phản ánh mọi thông tin kể cả nội bộ.'],
    ['Phân tích kỹ thuật là gì và vì sao thất bại ở dạng yếu?', 'Dùng lịch sử giá dự đoán giá tương lai; giá đã phản ánh lịch sử nên không thắng thị trường.'],
    ['Phân tích cơ bản và dạng bán mạnh?', 'Phân tích mọi thông tin công khai; giá đã phản ánh nên không có lợi nhuận vượt trội.'],
    ['Khi nào kiếm lợi nhuận vượt trội nhờ nội bộ?', 'Chỉ khi thị trường chưa hiệu quả dạng mạnh.'],
    ['Vì sao thị trường VN khó hiệu quả?', 'Nhỏ, mỏng; cần minh bạch và nhà phân tích chuyên nghiệp.'],
    ['Nợ có tạo giá trị trong thế giới hoàn hảo, không thuế?', 'Không; giá trị phụ thuộc dòng tiền từ kinh doanh, nợ chỉ là cách chia bánh.']
  ],
  quiz: [
    { q: 'Hiệu ứng bầy đàn nghĩa là:', o: ['Mọi người mua cổ phiếu', 'Đa số người gửi bắt chước hành vi rút tiền', 'Ngân hàng sáp nhập', 'Lãi suất tăng'], a: 1, e: 'Dẫn đến bank run.' },
    { q: 'Thông tin không chính thức nguy hiểm vì:', o: ['Luôn đúng', 'Có thể cố tình sai lệch gây rút tiền hàng loạt', 'Quá chậm', 'Không ai đọc'], a: 1, e: 'Có thể bị bịa đặt.' },
    { q: 'Thị trường hiệu quả dạng yếu: giá phản ánh:', o: ['Mọi thông tin', 'Chuỗi giá lịch sử', 'Thông tin nội bộ', 'Không gì'], a: 1, e: 'Phân tích kỹ thuật vô hiệu.' },
    { q: 'Phân tích kỹ thuật dựa trên:', o: ['Báo cáo tài chính', 'Lịch sử giá', 'Tin nội bộ', 'Tin đồn'], a: 1, e: 'Vẽ biểu đồ giá quá khứ.' },
    { q: 'Ở dạng bán mạnh, ai có thể kiếm lợi vượt trội?', o: ['Người phân tích cơ bản', 'Người có thông tin nội bộ', 'Người phân tích kỹ thuật', 'Không ai'], a: 1, e: 'Giá đã phản ánh mọi thông tin công khai.' },
    { q: 'Ở dạng mạnh:', o: ['Người có tin nội bộ vẫn thắng thị trường', 'Không ai thắng thị trường kể cả có tin nội bộ', 'Giá không phản ánh gì', 'Chỉ lịch sử giá'], a: 1, e: 'Giá phản ánh cả thông tin nội bộ.' },
    { q: 'Người đề xuất ba dạng hiệu quả thị trường:', o: ['Eugene Fama', 'John Keynes', 'Adam Smith', 'Milton Friedman'], a: 0, e: 'Tiên phong về thị trường hiệu quả.' },
    { q: 'Thị trường như Việt Nam khó hiệu quả vì:', o: ['Quá lớn', 'Nhỏ, mỏng, thiếu minh bạch', 'Có quá nhiều nhà phân tích', 'Thuế thấp'], a: 1, e: 'Cần minh bạch và phân tích chuyên nghiệp.' },
    { q: 'Trong thế giới hoàn hảo, không thuế, vay nợ:', o: ['Tạo thêm giá trị', 'Không tạo giá trị, chỉ chia dòng tiền', 'Hủy giá trị', 'Giảm thuế'], a: 1, e: 'Phép ẩn dụ chiếc bánh.' },
    { q: '“Dao Teflon” trong ví dụ chiếc bánh nghĩa là:', o: ['Không có chi phí giao dịch/thuế khi chia', 'Dao đắt', 'Chia không đều', 'Cần nhiều dao'], a: 0, e: 'Nếu không một phần bánh bị mất.' }
  ],
  match: [
    ['Herding effect', 'Bắt chước hành vi rút tiền'],
    ['Weak form', 'Giá phản ánh lịch sử giá'],
    ['Semi-strong form', 'Giá phản ánh thông tin công khai'],
    ['Strong form', 'Giá phản ánh cả thông tin nội bộ'],
    ['Phân tích kỹ thuật', 'Dùng lịch sử giá dự đoán'],
    ['Cách tài trợ', 'Chỉ chia bánh, không làm bánh to hơn']
  ]
},

/* ======================= CHƯƠNG 22 ======================= */
{
  n: 22,
  title: 'Chủ sở hữu – nhà quản lý và quyền chọn cổ phiếu',
  intro: 'Bài 84–87: dùng quyền chọn cổ phiếu để gắn lợi ích nhà quản lý với cổ đông, những kẽ hở thực tế, cách sửa, và vấn đề đo lường hiệu quả điều hành.',
  sections: [
    { icon: '🔗', title: 'Quyền chọn cổ phiếu: ý tưởng (bài 84)', blocks: [
      { t: 'p', x: 'Nhà quản lý có thể bị cám dỗ hành động vì lợi ích riêng, chi cho đặc quyền hoặc mở rộng hoạt động kém hiệu quả — hại chủ sở hữu (vấn đề người ủy nhiệm – người thừa hành ở chương 6). <b>Quyền chọn cổ phiếu (stock option)</b> là phương cách phổ biến để đồng bộ lợi ích hai bên.' },
      { t: 'key', x: 'Chủ sở hữu trao cho quản lý <b>quyền (không phải nghĩa vụ)</b> mua một số cổ phiếu ở <b>giá thực hiện (strike price)</b> cố định, vào cuối một thời hạn.' },
      { t: 'p', x: 'Ví dụ Gidomex (hư cấu): giá 25.000 đ/cổ phiếu; quản lý có quyền mua 10.000 cổ phiếu sau 2 năm. Giá lên 26.000 → quản lý mua 25.000, bán 26.000, lời 1.000 đ/cổ phiếu; cổ đông cũng hài lòng vì giá trị tăng. Nếu giá không tăng hoặc giảm, quyền chọn <b>vô giá trị</b> → quản lý có động cơ làm giá tăng bằng cách tăng lợi nhuận, thị phần, ra sản phẩm mới.' },
      { t: 'widget', name: 'stock-option', title: 'Kéo giá cổ phiếu, xem lợi ích của quản lý' }
    ] },
    { icon: '🕳️', title: 'Kẽ hở trong thực tế (bài 85)', blocks: [
      { t: 'p', x: 'Những sự kiện gần đây cho thấy cái hiệu quả trong lý thuyết không phải lúc nào cũng thành công trong thực tế:' },
      { t: 'list', items: [
        '<b>Thao túng thông tin:</b> đẩy nhanh tin tốt (lợi nhuận cao, ra mắt sản phẩm) và hoãn tin xấu; chỉ cần giá nhảy ngắn hạn là quản lý có thể mua giá thực hiện và bán ngay.',
        '<b>“Công” không đúng người:</b> giá cổ phiếu phụ thuộc yếu tố ngoài tầm kiểm soát; kinh tế tốt giá lên dù quản lý làm chưa tối ưu, và ngược lại.',
        '<b>Lợi cho quản lý, hại cổ đông:</b> quản lý có thể cho công ty vay nợ để mua lại cổ phiếu → tạo cầu giả, giá tăng, quyền chọn đáng giá hơn trong khi cổ đông gánh thêm nợ.',
        '<b>Kế toán gây tranh cãi:</b> quyền chọn thực chất là một dạng lương nhưng thường không được ghi là chi phí → cổ đông bị đánh lừa về lợi nhuận và sức khỏe tài chính.'
      ] },
      { t: 'warn', x: 'Kết luận: thành công của quyền chọn như công cụ giảm rủi ro người ủy nhiệm vẫn còn là câu hỏi mở.' }
    ] },
    { icon: '🛠️', title: 'Sửa lỗi quyền chọn (bài 86)', blocks: [
      { t: 'p', x: 'Năm 2002, người đứng đầu CBS nhận 200 triệu USD thu nhập, chỉ 9,8 triệu là lương thưởng, còn lại là lãi từ quyền chọn. Người đứng đầu Walt Disney nhận 576 triệu USD, chủ yếu từ quyền chọn. Bao nhiêu phần là trả công cho giá trị thực và bao nhiêu là quà tặng?' },
      { t: 'table', head: ['Vấn đề', 'Đề xuất'], rows: [
        ['Lãi quá lớn', 'Khi giá trị quyền chọn vượt ngưỡng thì áp giá thực hiện cao hơn (giống thuế lũy tiến)'],
        ['Quản lý làm giá giảm nặng, quyền chọn vô giá trị → mất động lực', 'Điều chỉnh lại giá thực hiện trong điều kiện nhất định'],
        ['Làm giá tăng ảo để bán', 'Bắt giữ cổ phiếu vài năm; luật yêu cầu công ty mua cổ phiếu quỹ khi phát hành quyền chọn để tránh làm sốc cầu và giá'],
        ['Kế toán', 'Ghi chi phí quyền chọn khi phát hành (giá trị có thể bằng 0) hay khi đến hạn (rất muộn)? Đề xuất: ghi nhận cuối mỗi kỳ kế toán theo chênh lệch giữa giá thực hiện và giá thị trường']
      ] },
      { t: 'tip', x: 'Tất cả đang được xem xét. Tác động lớn đến mức không nên thực hiện giải pháp nào mà không cân nhắc kỹ các hệ quả.' }
    ] },
    { icon: '📏', title: 'Đo lường hiệu quả điều hành (bài 87)', blocks: [
      { t: 'p', x: 'Giá cổ phiếu niêm yết là một thước đo hiệu quả quản lý, nhưng không áp dụng cho DNNN và công ty tư nhân không niêm yết. Vậy dùng thước đo nào?' },
      { t: 'steps', items: [
        '<b>Sản lượng</b> (hành khách, tấn hàng): từng dùng để thưởng DNNN.',
        '<b>Doanh thu</b> (không xét chi phí): thước đo thay thế.',
        'Cả hai đều <b>không đủ</b> phản ánh hiệu quả.',
        '<b>Lợi nhuận ròng</b> hấp dẫn nhưng <b>gây hiểu lầm</b>: nhiều công ty công nghệ luôn lỗ vẫn có định giá rất cao.'
      ] },
      { t: 'h3', x: 'Ba vấn đề của lợi nhuận ròng' },
      { t: 'list', items: [
        '<b>Bỏ qua tiền mặt:</b> quản lý bán chịu rộng rãi để bán nhiều, giá cao; thu nhập cao nhưng thiếu tiền có thể phá sản.',
        '<b>Cắt giảm chi phí quá mức</b> để lợi nhuận ngắn hạn cao: cắt R&D, marketing, đào tạo dù có lợi dài hạn.',
        '<b>Thao túng kế toán:</b> hoãn trả lãi vay, khấu hao chậm → chi phí thấp, thu nhập cao giả tạo, nhưng nghĩa vụ thuế tăng.'
      ] },
      { t: 'key', x: 'Lợi nhuận ròng không phải thước đo lý tưởng → đo lường hiệu quả điều hành vẫn là <b>vấn đề mở</b>.' }
    ] }
  ],
  summary: [
    'Quyền chọn cổ phiếu cho quản lý quyền mua ở giá thực hiện cố định để gắn lợi ích với cổ đông.',
    'Kẽ hở: thao túng thông tin, thưởng cho yếu tố ngoài tầm kiểm soát, mua lại cổ phiếu bằng nợ, không ghi chi phí.',
    'Giải pháp: giá thực hiện lũy tiến, điều chỉnh giá, giữ cổ phiếu, mua cổ phiếu quỹ, ghi chi phí cuối mỗi kỳ.',
    'Sản lượng, doanh thu, lợi nhuận ròng đều có hạn chế; đo hiệu quả điều hành là vấn đề mở.'
  ],
  cards: [
    ['Stock option là gì?', 'Quyền (không bắt buộc) mua một số cổ phiếu ở giá thực hiện cố định vào cuối thời hạn.'],
    ['Strike price?', 'Giá thực hiện định trước.'],
    ['Khi nào quyền chọn vô giá trị?', 'Khi giá thị trường ≤ giá thực hiện.'],
    ['Vì sao quyền chọn đồng bộ lợi ích?', 'Quản lý chỉ có lãi nếu giá cổ phiếu tăng, cũng là lợi ích cổ đông.'],
    ['Thao túng thông tin?', 'Đẩy nhanh tin tốt, hoãn tin xấu để giá nhảy ngắn hạn.'],
    ['“Công không đúng người”?', 'Giá cổ phiếu chịu tác động ngoài tầm kiểm soát (kinh tế chung).'],
    ['Cách quản lý lợi dụng vay nợ?', 'Vay để mua lại cổ phiếu, tạo cầu giả đẩy giá, cổ đông gánh nợ.'],
    ['Vấn đề kế toán của quyền chọn?', 'Là dạng lương nhưng thường không ghi chi phí → đánh lừa cổ đông về lợi nhuận.'],
    ['Thu nhập của đứng đầu CBS 2002?', '200 triệu USD, chỉ 9,8 triệu là lương thưởng.'],
    ['Đề xuất “như thuế lũy tiến” cho quyền chọn?', 'Giá thực hiện cao hơn khi giá trị quyền chọn vượt ngưỡng.'],
    ['Tại sao yêu cầu giữ cổ phiếu vài năm?', 'Chống làm giá ảo để bán nhanh.'],
    ['Tại sao thu nhập ròng gây hiểu lầm?', 'Bỏ qua tiền mặt, khuyến khích cắt chi phí R&D/đào tạo, bị thao túng bằng hoãn lãi và khấu hao chậm.']
  ],
  quiz: [
    { q: 'Stock option là:', o: ['Nghĩa vụ mua cổ phiếu', 'Quyền (không phải nghĩa vụ) mua cổ phiếu ở giá thực hiện', 'Trái phiếu', 'Thuế'], a: 1, e: 'Giá thực hiện định trước.' },
    { q: 'Gidomex giá 25.000; sau 2 năm 26.000. Lãi của quản lý mỗi cổ phiếu:', o: ['0', '1.000', '25.000', '26.000'], a: 1, e: '26.000 − 25.000.' },
    { q: 'Nếu giá vẫn 25.000 hoặc giảm thì quyền chọn:', o: ['Rất giá trị', 'Vô giá trị', 'Tăng gấp đôi', 'Được hoàn tiền'], a: 1, e: 'Quản lý không có lãi.' },
    { q: 'Quản lý hoãn tin xấu và đẩy nhanh tin tốt là:', o: ['Thao túng thông tin', 'Minh bạch', 'Kiểm toán', 'Thuế'], a: 0, e: 'Để giá nhảy ngắn hạn.' },
    { q: 'Quản lý cho công ty vay nợ mua lại cổ phiếu sẽ:', o: ['Giảm giá', 'Tăng giá giả tạo, cổ đông gánh nợ', 'Giảm lương', 'Không có gì'], a: 1, e: 'Tạo cầu giả.' },
    { q: 'Vấn đề kế toán của quyền chọn:', o: ['Ghi quá nhiều chi phí', 'Thường không ghi nhận là chi phí', 'Ghi hai lần', 'Không có vấn đề'], a: 1, e: 'Có thể đánh lừa cổ đông.' },
    { q: 'Đề xuất giữ cổ phiếu mua từ quyền chọn nhiều năm nhằm:', o: ['Tăng thuế', 'Chống làm giá ảo để bán nhanh', 'Giảm lương', 'Tăng cổ tức'], a: 1, e: 'Gắn lợi ích dài hạn.' },
    { q: 'Doanh thu độc lập chi phí là thước đo:', o: ['Hoàn hảo', 'Chưa đủ phản ánh hiệu quả', 'Luôn đúng', 'Chỉ dùng cho công ty niêm yết'], a: 1, e: 'Cũng như sản lượng.' },
    { q: 'Điểm yếu của lợi nhuận ròng là:', o: ['Bỏ qua tiền mặt, khuyến khích cắt R&D', 'Quá phức tạp', 'Không ai dùng', 'Luôn âm'], a: 0, e: 'Và có thể bị thao túng bằng kế toán.' }
  ],
  match: [
    ['Strike price', 'Giá thực hiện định trước'],
    ['Thao túng thông tin', 'Đẩy tin tốt, hoãn tin xấu'],
    ['Mua lại cổ phiếu bằng nợ', 'Tạo cầu giả đẩy giá'],
    ['Ghi chi phí quyền chọn', 'Vấn đề kế toán tranh cãi'],
    ['Lợi nhuận ròng', 'Hấp dẫn nhưng dễ gây hiểu lầm'],
    ['Sản lượng/doanh thu', 'Thước đo thưởng cũ của DNNN']
  ]
},

/* ======================= CHƯƠNG 23 ======================= */
{
  n: 23,
  title: 'Tiết kiệm, tín dụng vi mô và vốn mạo hiểm',
  intro: 'Bài 88–92: niềm tin để gửi tiết kiệm, nhóm người tiết kiệm nhỏ và đầu cơ, tiết kiệm chính thức và không chính thức, tín dụng vi mô và vốn đầu tư mạo hiểm.',
  sections: [
    { icon: '🤝', title: 'Niềm tin để tiết kiệm (bài 88)', blocks: [
      { t: 'key', x: '<b>“Belief to save”</b> là niềm tin của công chúng vào hệ thống tài chính — yếu tố then chốt để huy động vốn nhàn rỗi. Nó quyết định công chúng gửi tiền vào kênh <b>chính thức</b> hay <b>không chính thức</b>. Không tin ngân hàng thương mại → tiết kiệm phi chính thức.' },
      { t: 'p', x: 'Ở VN niềm tin đang phục hồi sau sự sụp đổ của một số tổ chức tín dụng tư nhân thập niên 1980. Ngân hàng cổ phần có sự bảo lãnh của Ngân hàng Nhà nước dần lấy lại lòng tin, nhưng công chúng vẫn tin ngân hàng quốc doanh hơn dù có ngân hàng cổ phần quản lý tốt, dịch vụ linh hoạt.' },
      { t: 'warn', x: 'Mất niềm tin có thể làm sụp cả hệ thống. Nhà nước cần can thiệp và có chính sách <b>bảo hiểm tiền gửi</b>. Việc can thiệp vụ “bank run” ACB đã nhanh chóng khôi phục niềm tin — nên duy trì và áp dụng như nhau cho mọi ngân hàng thương mại.' }
    ] },
    { icon: '🐷', title: 'Người tiết kiệm nhỏ và đầu cơ (bài 89)', blocks: [
      { t: 'p', x: 'Người tiết kiệm chia làm hai nhóm theo kỳ vọng về rủi ro và lợi suất, và khả năng chấp nhận rủi ro phụ thuộc năng lực tiết kiệm, thái độ.' },
      { t: 'table', head: ['', 'Người tiết kiệm nhỏ', 'Người tiết kiệm đầu cơ'], rows: [
        ['Ai?', 'Hộ thu nhập thấp', 'Người thu nhập cao, nhà doanh nghiệp khu vực công nghiệp hiện đại'],
        ['Thái độ rủi ro', 'Ngại rủi ro (thu nhập, chi tiêu biến động, chu kỳ đời sống)', 'Chấp nhận một mức rủi ro nhất định để có lợi suất cao'],
        ['Mục đích', 'Cân bằng, ổn định thu chi', 'Tối đa hóa lợi nhuận']
      ] },
      { t: 'p', x: 'Cơ hội tiết kiệm ở VN cải thiện chậm. Người tiết kiệm nhỏ khó tiếp cận ngân hàng vì thủ tục phức tạp, dịch vụ yếu; hộ nông thôn, chủ yếu thuộc nhóm này, giữ khoảng <b>90%</b> tiết kiệm “dưới nệm” ở dạng phi chính thức. Nhóm đầu cơ bị kìm hãm vì thị trường chứng khoán phát triển chậm, lúc đó mới có <b>21</b> công ty cổ phần niêm yết.' }
    ] },
    { icon: '🏺', title: 'Tiết kiệm chính thức và phi chính thức (bài 90)', blocks: [
      { t: 'p', x: 'Tiết kiệm chính thức là gửi vào định chế tài chính như ngân hàng thương mại. Phi chính thức gồm tài sản thực, tiền mặt, ngoại tệ, vàng, trang sức, hụi, thóc gạo… Bốn lý do chính người tiết kiệm nhỏ giữ phi chính thức:' },
      { t: 'list', items: ['Thói quen tiết kiệm truyền thống của hộ nông thôn.', 'Thiếu tiếp cận định chế tài chính chính thức.', 'Lạm phát kéo dài.', 'Lợi suất ngân hàng thấp.'] },
      { t: 'p', x: 'Năm 1998, hộ gia đình VN giữ phần lớn tài sản dưới dạng phi chính thức (vàng, ngoại tệ, tiền mặt). Tỷ trọng tiền tiết kiệm trong định chế chính thức tăng từ <b>8,3% (1993)</b> lên <b>18,5% (1998)</b>; tức vẫn khoảng <b>80%</b> tiết kiệm hộ nằm ngoài ngân hàng.' },
      { t: 'tip', x: 'Dù thu nhập thấp, tổng giá trị tiết kiệm của hộ có thể rất lớn → có thể khai thác làm nguồn vốn bổ sung. Huy động tiết kiệm trong nước là trung tâm phát triển thị trường tài chính.' }
    ] },
    { icon: '🎣', title: 'Tín dụng vi mô (bài 91)', blocks: [
      { t: 'mnemo', x: '“Cho người một con cá, họ ăn một ngày. Dạy họ câu cá, họ ăn cả đời.”' },
      { t: 'p', x: 'Ý tưởng: cấp một khoản vay rất nhỏ cho tự kinh doanh giúp người nghèo thoát nghèo, cải thiện đời sống gia đình, củng cố cộng đồng.' },
      { t: 'p', x: '<b>Ví dụ:</b> người bán gạo vỉa hè Hà Nội mất ít nhất 2 trong 10 giờ làm việc mỗi ngày đi mua gạo ngoài thành phố (không tạo thu nhập vì thiếu vốn). Nếu có vốn mua gạo đủ ba ngày, mỗi 6 ngày làm việc tiết kiệm 8 giờ → tăng thời gian bán <b>17% (8/48)</b>.' },
      { t: 'steps', items: [
        'Các tổ chức tài chính vi mô (MFI) lựa chọn khách hàng thành ba nhóm: (1) sử dụng vốn hiệu quả có lãi, (2) sử dụng kém hiệu quả, (3) có khả năng dùng sai (như nhậu nhẹt).',
        'MFI <b>nhắm tới nhóm 1</b> và thu lãi để quỹ tăng trưởng, tài trợ thêm dự án.',
        'Nếu vay giúp tăng gấp đôi doanh số và lãi gộp 25% doanh số, chị có thể trả lãi <b>15%/tháng</b> mà vẫn có lời.'
      ] }
    ] },
    { icon: '🚀', title: 'Vốn đầu tư mạo hiểm (bài 92)', blocks: [
      { t: 'p', x: 'Chủ tịch kiêm người sáng lập IDG (công ty truyền thông hàng đầu) công bố kế hoạch đầu tư <b>80 triệu USD</b> vào ngành CNTT Việt Nam dưới dạng vốn mạo hiểm — khái niệm khá mới ở VN.' },
      { t: 'key', x: '<b>Vốn đầu tư mạo hiểm (venture capital)</b>: đầu tư cổ phần vào công ty tư nhân non trẻ bởi định chế, quỹ hoặc cá nhân giàu. Đổi lại họ nhận cổ phần. Rủi ro cao: chấp nhận khả năng mất toàn bộ để đổi lấy cơ hội công ty trở thành “Intel hay Microsoft” tiếp theo.' },
      { t: 'list', items: [
        'Nhà khởi nghiệp trình bày tầm nhìn bằng <b>kế hoạch kinh doanh</b> (sản phẩm, thị trường, nguồn lực cần có).',
        'Nhà đầu tư đánh giá ban quản lý và có thể đòi thay đổi, nhất là công ty do người trẻ điều hành; họ tham gia quản lý, tư vấn chiến lược.',
        'Luôn có <b>chiến lược thoát vốn (exit)</b>; phổ biến nhất là <b>IPO</b> trên sàn chứng khoán; họ nhanh chóng rút nếu thấy cơ hội thành công giảm.'
      ] },
      { t: 'tip', x: 'Vai trò: đưa vốn đến người có ý tưởng sáng tạo nhưng không huy động được từ các định chế ngại rủi ro như ngân hàng.' }
    ] }
  ],
  summary: [
    'Niềm tin để tiết kiệm quyết định kênh chính thức hay phi chính thức; bảo hiểm tiền gửi và can thiệp kịp thời giữ niềm tin.',
    'Người tiết kiệm nhỏ ngại rủi ro, còn người đầu cơ chấp nhận rủi ro để có lợi suất cao.',
    'Khoảng 80% tiết kiệm hộ VN nằm ngoài ngân hàng do thói quen, thiếu tiếp cận, lạm phát và lợi suất thấp.',
    'Tín dụng vi mô nhắm tới nhóm sử dụng vốn hiệu quả; vốn mạo hiểm đầu tư cổ phần vào công ty non trẻ rủi ro cao.'
  ],
  cards: [
    ['“Belief to save”?', 'Niềm tin của công chúng vào hệ thống tài chính để gửi tiền.'],
    ['Điều gì xảy ra khi mất niềm tin?', 'Công chúng tiết kiệm phi chính thức; có thể kéo sập cả hệ thống.'],
    ['Biện pháp giữ niềm tin?', 'Bảo hiểm tiền gửi, nhà nước can thiệp kịp thời (vụ ACB).'],
    ['Người tiết kiệm nhỏ?', 'Hộ thu nhập thấp, ngại rủi ro, tiết kiệm để ổn định thu chi.'],
    ['Người tiết kiệm đầu cơ?', 'Thu nhập cao, chấp nhận rủi ro để lợi suất cao, tối đa hóa lợi nhuận.'],
    ['Hộ nông thôn VN giữ bao nhiêu % tiết kiệm phi chính thức?', 'Khoảng 90%.'],
    ['Các hình thức tiết kiệm phi chính thức?', 'Tài sản thực, tiền mặt, ngoại tệ, vàng, trang sức, hụi, thóc gạo.'],
    ['Bốn lý do giữ tiết kiệm phi chính thức?', 'Thói quen truyền thống; thiếu tiếp cận; lạm phát kéo dài; lợi suất ngân hàng thấp.'],
    ['Tỷ trọng tiết kiệm trong định chế chính thức?', '8,3% (1993) → 18,5% (1998); khoảng 80% còn ngoài ngân hàng.'],
    ['Tín dụng vi mô là gì?', 'Khoản vay rất nhỏ cho người nghèo tự kinh doanh.'],
    ['Ba nhóm khách hàng MFI?', 'Dùng hiệu quả; dùng kém hiệu quả; có khả năng dùng sai. MFI nhắm nhóm 1.'],
    ['Vốn đầu tư mạo hiểm?', 'Đầu tư cổ phần vào công ty non trẻ, rủi ro cao, hy vọng thành công lớn.'],
    ['Chiến lược thoát vốn phổ biến?', 'IPO trên sàn chứng khoán.'],
    ['Vai trò vốn mạo hiểm?', 'Cấp vốn cho ý tưởng sáng tạo mà ngân hàng ngại rủi ro không cho vay.']
  ],
  quiz: [
    { q: 'Belief to save là:', o: ['Lãi suất tiết kiệm', 'Niềm tin của công chúng vào hệ thống tài chính', 'Luật tiết kiệm', 'Số tiền gửi'], a: 1, e: 'Quyết định chọn kênh chính thức hay không.' },
    { q: 'Mất niềm tin vào ngân hàng dẫn tới:', o: ['Tiết kiệm phi chính thức', 'Lãi suất tăng', 'Dư thừa vốn', 'Tăng cho vay'], a: 0, e: 'Cất “dưới nệm”.' },
    { q: 'Hộ nông thôn VN chủ yếu thuộc nhóm:', o: ['Đầu cơ', 'Tiết kiệm nhỏ', 'Doanh nghiệp', 'Quỹ đầu tư'], a: 1, e: 'Giữ khoảng 90% tiết kiệm phi chính thức.' },
    { q: 'Nhóm đầu cơ bị hạn chế vì:', o: ['Thiếu tiền', 'Thị trường chứng khoán phát triển chậm', 'Ngân hàng quá nhiều', 'Thuế cao'], a: 1, e: 'Chỉ có 21 công ty cổ phần niêm yết.' },
    { q: 'KHÔNG phải lý do tiết kiệm phi chính thức:', o: ['Thói quen truyền thống', 'Thiếu tiếp cận', 'Lạm phát kéo dài', 'Lợi suất ngân hàng quá cao'], a: 3, e: 'Là lợi suất thấp.' },
    { q: 'Tiết kiệm hộ trong định chế chính thức năm 1998:', o: ['8,3%', '18,5%', '50%', '90%'], a: 1, e: 'Từ 8,3% năm 1993.' },
    { q: 'MFI nhắm tới nhóm khách hàng:', o: ['Dùng vốn dùng sai', 'Dùng vốn hiệu quả có lãi', 'Giàu nhất', 'Không cần vốn'], a: 1, e: 'Để quỹ tăng trưởng.' },
    { q: 'Người bán gạo tăng thời gian bán bao nhiêu nếu có đủ vốn mua gạo 3 ngày?', o: ['5%', '17%', '50%', '100%'], a: 1, e: '8/48.' },
    { q: 'Venture capital đầu tư vào:', o: ['Trái phiếu chính phủ', 'Cổ phần công ty non trẻ rủi ro cao', 'Vàng', 'Ngoại tệ'], a: 1, e: 'Đổi lấy cổ phần.' },
    { q: 'Chiến lược thoát vốn phổ biến của VC:', o: ['Bán nhà', 'IPO trên sàn chứng khoán', 'Gửi ngân hàng', 'Phá sản'], a: 1, e: 'Để thu hồi lợi nhuận.' }
  ],
  match: [
    ['Belief to save', 'Niềm tin để gửi tiết kiệm'],
    ['Tiết kiệm nhỏ', 'Ngại rủi ro, hộ thu nhập thấp'],
    ['Tiết kiệm đầu cơ', 'Chấp nhận rủi ro để lợi suất cao'],
    ['Tiết kiệm phi chính thức', 'Vàng, ngoại tệ, hụi, thóc gạo'],
    ['Micro-credit', 'Vay nhỏ cho người nghèo tự kinh doanh'],
    ['Venture capital', 'Vốn cổ phần cho công ty non trẻ rủi ro cao']
  ]
},

/* ======================= CHƯƠNG 24 ======================= */
{
  n: 24,
  title: 'Công cụ phân tích và hệ quả của chính sách công',
  intro: 'Bài 93–98: kinh tế lượng dễ hiểu, hồi quy và khác biệt giới trong lương, ma trận 2×2 chọn dự án, vốn xã hội, 6P marketing địa phương và hệ quả ngoài dự tính của chính sách.',
  sections: [
    { icon: '🍜', title: 'Kinh tế lượng dễ hiểu (bài 93)', blocks: [
      { t: 'p', x: 'Chủ quán Phở Quick tăng giá bát phở từ 10.000 lên 15.000 sau khi quán nổi tiếng nhờ vị khách nước ngoài, rồi 20.000 kèm cải thiện dịch vụ, và nay 24.000 sau khi sửa quán, lắp điều hòa, mở cửa 24 giờ — mà vẫn không mất khách.' },
      { t: 'steps', items: [
        'Ông biết nếu tăng giá tùy tiện thì mất khách, nhưng <b>cải thiện dịch vụ</b> thì giữ và thu hút khách.',
        'Khi đếm số bát bán mỗi ngày, ông đang <b>thu thập dữ liệu</b>.',
        'Khi tính doanh số không giảm, ông đang <b>ước lượng thay đổi cầu</b>.',
        'Khi quyết định mức giá 24.000, ông đang <b>dự báo</b>.'
      ] },
      { t: 'key', x: '<b>Kinh tế lượng (econometrics)</b> là phương pháp phân tích định lượng: ông nhận ra quan hệ nghịch giữa giá và cầu, và quan hệ thuận giữa cầu và dịch vụ tốt — bằng cách ước lượng và dự báo như nhà kinh tế.' }
    ] },
    { icon: '👩‍🔧', title: 'Hồi quy và vấn đề giới (bài 94)', blocks: [
      { t: 'p', x: 'Tiền lương phụ thuộc giáo dục, kỹ năng, kinh nghiệm. Nhiều người nói giới tính cũng ảnh hưởng. Để xác định, phải <b>kiểm soát</b> tác động của các yếu tố khác.' },
      { t: 'steps', items: [
        'Thu thập dữ liệu từ nhiều công nhân tại các công ty mục tiêu.',
        'Đặt tiền lương là <b>biến phụ thuộc</b>; kinh nghiệm, học vấn, giới tính là <b>biến giải thích</b>.',
        '<b>Hồi quy</b> (công cụ thống kê ước lượng quan hệ giữa các biến) cho biết tác động của từng biến.',
        'Chênh lệch trong ví dụ: nữ 12 năm học, 5 năm kinh nghiệm nhận 5,5 USD/giờ; nam cùng hồ sơ nhận 7,2 USD/giờ. Chỉ chênh lệch này <b>chưa đủ</b> kết luận phân biệt đối xử.',
        'Tính trung bình lương nếu <b>mọi người đều là nữ</b>, rồi nếu <b>mọi người đều là nam</b>, và so sánh. Khác biệt có ý nghĩa thống kê → bằng chứng mạnh đối xử không công bằng.'
      ] }
    ] },
    { icon: '🔲', title: 'Ma trận 2×2 chọn dự án (bài 95)', blocks: [
      { t: 'p', x: 'Mục tiêu thẩm định dự án: chọn dự án tốt, loại dự án xấu — theo quan điểm <b>kinh tế</b> (xã hội): dự án tốt làm tăng của cải quốc gia. Khi nền kinh tế có méo mó, dòng tiền kinh tế và tài chính có thể khác xa. Dự án tốt về kinh tế khi dòng tiền kinh tế ròng chiết khấu theo suất chiết khấu kinh tế là dương.' },
      { t: 'table', head: ['', 'Tốt về kinh tế', 'Xấu về kinh tế'], rows: [
        ['<b>Tốt về tài chính</b>', '✅ <b>Phê duyệt</b> (đơn giản)', '⚠️ <b>Bác bỏ</b>, nhưng các bên có lợi ích tài chính sẽ gây áp lực mạnh để duyệt'],
        ['<b>Xấu về tài chính</b>', '⚠️ <b>Thực hiện</b>, nhưng khó tài trợ nếu ngân sách không đủ', '❌ <b>Bác bỏ</b> (đơn giản)']
      ] }
    ] },
    { icon: '🕸️', title: 'Vốn xã hội (bài 96)', blocks: [
      { t: 'p', x: '“Vốn xã hội” xuất hiện thường xuyên trong báo cáo về phát triển thế giới, giảm nghèo và phân tích kinh tế – xã hội như một mối quan tâm mới nổi.' },
      { t: 'key', x: '<b>Vốn xã hội</b> là chất keo kết nối các cá nhân bằng <b>niềm tin, hiểu biết lẫn nhau, giá trị và hành vi chung</b>. Cụ thể: mạng lưới quan hệ, nghĩa vụ có đi có lại và ảnh hưởng chính trị có thể huy động khi cần. Chúng tác động đến chi phí giao dịch và khắc phục thất bại thị trường.' },
      { t: 'list', items: [
        'Ví dụ: chaebol và keiretsu ở Hàn Quốc, Nhật Bản; huyết thống; <b>“guanxi”</b> ở Trung Quốc mở rộng cơ hội kinh tế nhưng thu hẹp cơ hội của người ngoài.',
        'Ở Trung Đông, sự gắn kết này là tôn giáo; ở Mỹ là chủ nghĩa cá nhân.',
        'Đây chắc chắn là khái niệm hữu ích, nhưng cách đo lường còn thiếu nhất quán.'
      ] }
    ] },
    { icon: '📣', title: '6P marketing địa phương (bài 97)', blocks: [
      { t: 'p', x: '4P truyền thống: <b>Product</b> (sản phẩm), <b>Price</b> (giá), <b>Promotion</b> (xúc tiến), <b>Place</b> (địa điểm). Với marketing địa phương có bốn mục tiêu: thu hút nhân tài, thu hút đầu tư, thu hút du khách, bán sản phẩm ra ngoài. Hai mục tiêu đầu cần thêm 2P:' },
      { t: 'table', head: ['P', 'Nội dung'], rows: [
        ['<b>People</b> (con người)', 'Nhà đầu tư đánh giá kỹ người dân địa phương: đủ công nhân lành nghề, quản lý, kỹ sư? Quan chức có giúp đỡ? Người tài muốn biết sẽ sống và làm việc với những người họ thích không?'],
        ['<b>Profitability</b> (khả năng sinh lời)', 'Tỉnh có hạ tầng tốt, vị trí lý tưởng, giảm thuế/tiền thuê, lao động rẻ, chính quyền thân thiện — nhưng nếu ít doanh nghiệp làm ăn có lãi thì người tài và nhà đầu tư sẽ đi chỗ khác']
      ] },
      { t: 'tip', x: 'Đồng Nai, Bình Dương đã đạt hai P này; nhiều tỉnh khác chưa. Ban đầu, lãnh đạo tỉnh nên coi <b>khả năng sinh lời của doanh nghiệp</b> là mục tiêu hàng đầu.' }
    ] },
    { icon: '🎯', title: 'Hệ quả ngoài dự tính của chính sách công (bài 98)', blocks: [
      { t: 'p', x: 'Chính sách do người giỏi nghĩ ra với ý định tốt nhất vẫn có thể thất bại vì người dân phản ứng ngoài dự tính, thậm chí ngược với mục tiêu — gọi là <b>hệ quả ngoài dự tính</b>.' },
      { t: 'tabs', items: [
        ['Trợ cấp tiền mặt', 'Mục tiêu cao đẹp: cứu trợ tạm thời cho người nghèo nhất để thoát nghèo. Nhưng nếu thiết kế không tốt, giảm động lực tự thân và tạo <b>phụ thuộc dài hạn</b> vào trợ cấp.'],
        ['Tín dụng ưu đãi', 'Cung cấp vốn cho nông dân nhỏ và vi doanh nghiệp phi chính thức. Nhưng nguồn lực khan hiếm nên số vốn ưu đãi luôn ít; người có quan hệ thu được và cho vay lại theo lãi suất thị trường. Người nghèo gọi là <b>“tín dụng rẻ nhưng không tiếp cận được”</b>.']
      ] },
      { t: 'key', x: 'Nhà hoạch định cần dự đoán phản ứng của cá nhân, hộ, doanh nghiệp dựa trên các khuyến khích dương và âm, nhớ rằng hầu hết mọi người hành động hợp lý vì lợi ích của mình. Hãy tự hỏi: <b>“Nếu tôi ở vị trí đó, tôi phản ứng thế nào? Đó có phải phản ứng mong muốn?”</b> Nếu không, chính sách cần thiết kế lại.' }
    ] }
  ],
  summary: [
    'Kinh tế lượng: thu thập dữ liệu → ước lượng → dự báo; hồi quy kiểm soát các yếu tố khác để xem tác động riêng của giới tính.',
    'Ma trận 2×2: tốt cả hai → duyệt; xấu cả hai → bác; tốt kinh tế/xấu tài chính → thực hiện nhưng khó tài trợ; xấu kinh tế/tốt tài chính → bác dù bị áp lực.',
    'Vốn xã hội: niềm tin, mạng lưới, giá trị chung; hữu ích nhưng khó đo.',
    '6P: thêm People và Profitability cho marketing địa phương.',
    'Chính sách công có thể có hệ quả ngoài dự tính vì người dân phản ứng theo khuyến khích; nên tự đặt mình vào vị trí đó.'
  ],
  cards: [
    ['Kinh tế lượng là gì?', 'Phương pháp phân tích định lượng: thu thập dữ liệu, ước lượng và dự báo quan hệ kinh tế.'],
    ['Ví dụ quán Phở Quick?', 'Tăng giá chỉ khi cải thiện dịch vụ; đếm số bát = dữ liệu; tính doanh số = ước lượng; chọn giá 24.000 = dự báo.'],
    ['Biến phụ thuộc và biến giải thích?', 'Phụ thuộc: tiền lương; giải thích: học vấn, kinh nghiệm, giới tính.'],
    ['Hồi quy?', 'Công cụ thống kê ước lượng quan hệ giữa các biến.'],
    ['Cách kiểm tra phân biệt đối xử giới?', 'Giữ các biến khác cố định, đổi giới tính, so sánh lương trung bình nếu tất cả nữ và tất cả nam; khác biệt có ý nghĩa thống kê là bằng chứng.'],
    ['Quan điểm kinh tế khi thẩm định dự án?', 'Dự án tốt khi dòng tiền kinh tế ròng chiết khấu theo suất chiết khấu kinh tế dương (xã hội được lợi).'],
    ['Tốt tài chính nhưng xấu kinh tế?', 'Bác bỏ, dù bên có lợi ích sẽ gây áp lực.'],
    ['Tốt kinh tế nhưng xấu tài chính?', 'Nên thực hiện, nhưng khó tài trợ nếu ngân sách không đủ.'],
    ['Vốn xã hội là gì?', 'Chất keo niềm tin, hiểu biết, giá trị và hành vi chung; mạng lưới và nghĩa vụ có đi có lại.'],
    ['Vốn xã hội tác động tới?', 'Chi phí giao dịch và khắc phục thất bại thị trường.'],
    ['4P truyền thống?', 'Product, Price, Promotion, Place.'],
    ['Hai P thêm cho marketing địa phương?', 'People và Profitability.'],
    ['Hệ quả ngoài dự tính?', 'Chính sách gây phản ứng không lường trước, có khi ngược mục tiêu.'],
    ['Ví dụ trợ cấp tiền mặt?', 'Giảm động lực tự thân, tạo phụ thuộc dài hạn.'],
    ['“Tín dụng rẻ nhưng không tiếp cận được”?', 'Vốn ưu đãi khan hiếm, người có quan hệ chiếm lấy rồi cho vay lại giá thị trường.']
  ],
  quiz: [
    { q: 'Chủ quán phở khi đếm số bát bán mỗi ngày là đang:', o: ['Thu thập dữ liệu', 'Dự báo', 'Quảng cáo', 'Khấu hao'], a: 0, e: 'Bước đầu của kinh tế lượng.' },
    { q: 'Hồi quy là:', o: ['Tên một loại thuế', 'Công cụ thống kê ước lượng quan hệ giữa các biến', 'Chu kỳ kinh tế', 'Lãi suất'], a: 1, e: 'Dùng để tách tác động từng yếu tố.' },
    { q: 'Để kết luận có phân biệt giới, cần:', o: ['Chỉ so lương hai người', 'Kiểm soát các yếu tố khác và kiểm định khác biệt có ý nghĩa thống kê', 'Hỏi ý kiến', 'Không cần gì'], a: 1, e: 'Chênh lệch riêng lẻ chưa đủ.' },
    { q: 'Dự án tốt kinh tế nhưng xấu tài chính nên:', o: ['Bác bỏ', 'Thực hiện nhưng khó tài trợ', 'Chờ', 'Chuyển nhượng'], a: 1, e: 'Cần nguồn tài chính khác.' },
    { q: 'Dự án xấu kinh tế nhưng tốt tài chính nên:', o: ['Duyệt ngay', 'Bác bỏ dù chịu áp lực', 'Giảm thuế', 'Đấu thầu'], a: 1, e: 'Có hại cho của cải quốc gia.' },
    { q: 'Vốn xã hội là:', o: ['Tiền mặt', 'Niềm tin, mạng lưới, giá trị chung', 'Máy móc', 'Đất đai'], a: 1, e: 'Chất keo kết nối.' },
    { q: 'Guanxi là ví dụ của:', o: ['Vốn xã hội', 'Lãi suất', 'Thuế', 'Tỷ giá'], a: 0, e: 'Mở rộng cơ hội cho người trong, thu hẹp người ngoài.' },
    { q: 'Hai P thêm trong 6P marketing địa phương:', o: ['Product & Price', 'People & Profitability', 'Place & Promotion', 'Plan & Profit'], a: 1, e: 'Cho hai mục tiêu thu hút nhân tài và đầu tư.' },
    { q: 'Tỉnh nên ưu tiên gì ban đầu?', o: ['Quảng cáo', 'Khả năng sinh lời của doanh nghiệp', 'Hạ thuế bằng 0', 'Xây khách sạn'], a: 1, e: 'Không có doanh nghiệp lãi thì nhà đầu tư và nhân tài đi nơi khác.' },
    { q: 'Hệ quả ngoài dự tính của tín dụng ưu đãi:', o: ['Người nghèo vay nhiều', 'Người có quan hệ chiếm vốn', 'Lãi suất giảm', 'Ngân hàng phá sản'], a: 1, e: '“Rẻ nhưng không tiếp cận được”.' },
    { q: 'Câu hỏi nhà hoạch định nên tự hỏi:', o: ['Ai trả tiền?', 'Nếu tôi ở vị trí đó thì phản ứng thế nào, có phải phản ứng mong muốn?', 'Có đẹp không?', 'Có kịp không?'], a: 1, e: 'Dự đoán phản ứng theo khuyến khích.' }
  ],
  match: [
    ['Biến phụ thuộc', 'Thứ cần giải thích (tiền lương)'],
    ['Ma trận 2×2', 'Tốt/xấu về kinh tế và tài chính'],
    ['Vốn xã hội', 'Niềm tin và mạng lưới quan hệ'],
    ['People & Profitability', 'Hai P thêm của marketing địa phương'],
    ['Hệ quả ngoài dự tính', 'Phản ứng của người dân ngược mục tiêu'],
    ['Trợ cấp tiền mặt', 'Có thể tạo phụ thuộc dài hạn']
  ]
}

);
