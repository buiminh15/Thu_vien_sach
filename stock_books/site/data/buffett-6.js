// "Phong cách đầu tư Warren Buffett" – Chương 11–12.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.buffett = BOOK_DATA.buffett || { chapters: [] };
BOOK_DATA.buffett.chapters.push(

/* ======================= CHƯƠNG 11 ======================= */
{
  n: 11,
  title: 'Tâm lý tiền bạc',
  intro: 'Thành công đầu tư không phụ thuộc IQ (nếu trên 125) mà vào khả năng kiểm soát cảm xúc. Chương này giới thiệu Ngài Thị Trường của Graham, tâm lý phán đoán sai lầm của Munger và tài chính hành vi: quá tự tin, phản ứng thái quá, ác cảm với thua lỗ, tính toán trí tuệ.',
  sections: [
    { icon: '🧠', title: 'Tính cách nhà đầu tư thực sự', blocks: [
      { t: 'mnemo', x: '“Thành công trong đầu tư không tương quan với chỉ số IQ nếu chỉ số của bạn trên 125. Nếu bạn khá thông minh, thì cái bạn cần là khả năng <b>kiểm soát những ham muốn</b> khiến người ta gặp khó khăn trong đầu tư.” — Buffett, 1999' },
      { t: 'p', x: 'Thị trường là tập hợp quyết định của những người mua cổ phiếu, nên cảm xúc tác động tích cực và tiêu cực lên toàn thị trường. Bài toán hai mặt: <b>kiểm soát cảm xúc của mình</b> và <b>nhạy bén với những thời điểm</b> quyết định của người khác bị tình cảm chi phối — cơ hội quý giá.' },
      { t: 'table', head: ['Nhà đầu tư thực sự', 'Nhà đầu cơ'], rows: [
        ['Bình tĩnh, kiên nhẫn, sáng suốt', 'Nôn nóng, thiếu kiên nhẫn, thiếu lý trí'],
        ['Chỉ tìm mua cổ phiếu công ty với giá hợp lý', 'Cố đoán trước và kiếm lời từ thay đổi giá'],
        ['Kẻ thù lớn nhất không phải thị trường mà là <b>chính bản thân</b>', 'Có thể giỏi toán, tài chính, kế toán nhưng không kiểm soát được cảm xúc']
      ] },
      { t: 'tabs', items: [
        ['😌 Bình tĩnh', 'Giá chứng khoán lên xuống vì tác động hợp lý và không hợp lý; chừng nào công ty còn những phẩm chất từng thu hút, giá sẽ khôi phục. Buffett: nếu bạn quá hoảng sợ khi thấy chứng khoán giảm 50% thì <b>đừng đầu tư vào thị trường chứng khoán</b>; nếu thấy việc kinh doanh hiệu quả, hãy đón nhận giá thấp để tăng lợi nhuận. Cũng bình tĩnh trước <b>tâm lý đám đông</b>: khi mọi người cùng làm một việc vì “ai cũng biết”, không ai thu lợi cả. Nhà đầu tư thực sự không lo bỏ lỡ xu hướng chung; họ lo tiếp cận xu hướng mới mà họ chưa sẵn sàng.'],
        ['⏳ Kiên nhẫn', 'Nói “không” nhiều hơn “có”. Khi Buffett làm cho Graham-Newman, Graham từ chối hầu hết gợi ý của ông — không mua nếu không hài lòng tất cả. Buffett dùng hình ảnh <b>“phiếu đục lỗ”</b>: nhà đầu tư như có phiếu quyết định cả đời với <b>20 lỗ</b>; mỗi quyết định đục một lỗ — càng về sau càng ít chỗ, nên phải kiên nhẫn đợi cơ hội lớn. “Chúng ta không cần phải thông minh hơn người khác, chúng ta chỉ cần <b>tự chủ hơn</b> họ.” (2002)'],
        ['🧐 Sáng suốt', 'Nhiều người lạc quan khi giá tăng, bi quan khi giá giảm — rồi bán giá thấp, mua giá cao. <b>Lạc quan thái quá</b> khiến nhà đầu tư tưởng mình sẽ là một trong số ít người thoát kịp. <b>Bi quan là nguyên nhân phổ biến khiến giá giảm</b>: “Chúng ta muốn kinh doanh trong môi trường như thế không phải vì thích sự bi quan mà vì thích mức giá nó đem lại. Chính sự lạc quan là kẻ thù của các nhà đầu tư sáng suốt.” Buffett: “Chúng ta chỉ đơn thuần nỗ lực <b>sợ hãi khi những người khác tham lam</b> và <b>tham lam khi những người khác sợ hãi</b>.”']
      ] }
    ] },
    { icon: '🎭', title: 'Ngài Thị Trường (Mr. Market)', blocks: [
      { t: 'p', x: 'Graham tạo ra nhân vật “Ngài Thị Trường” để dạy sinh viên: tưởng tượng bạn và Ngài Thị Trường là <b>đối tác trong một doanh nghiệp tư nhân</b>. Mỗi ngày ông báo mức giá ông sẵn sàng <b>mua cổ phần của bạn</b> hoặc <b>bán cổ phần của ông cho bạn</b>. Doanh nghiệp có tình hình kinh tế ổn định, nhưng báo giá thay đổi liên tục: lúc vui vẻ lạc quan (giá cao), lúc chán nản bi quan (giá thấp).' },
      { t: 'key', x: 'Đặc tính dễ mến của ông: <b>không để ý việc bị lờ đi</b>. Nếu bạn từ chối báo giá, ngày mai ông quay lại với báo giá mới. Graham: chính <b>sổ tay chú ý</b> chứ không phải sự sáng suốt của ông mới hữu ích. Bạn có thể thoải mái tận dụng khi ông ngốc nghếch, nhưng sẽ tồi tệ nếu để ông ảnh hưởng đến mình. Nhà đầu tư cho phép cảm xúc của Ngài Thị Trường tác động tài sản mình là chuyển <b>lợi thế cơ bản</b> sang <b>bất lợi cơ bản</b>.' },
      { t: 'widget', name: 'mr-market', title: 'Ngài Thị Trường báo giá hôm nay: bạn làm gì?' },
      { t: 'tip', x: '60 năm sau khi Graham giới thiệu nhân vật này, sợ hãi và tham lam vẫn tràn ngập thị trường — cho nên cơ hội vẫn còn.' }
    ] },
    { icon: '🧩', title: 'Tài chính hành vi: Munger và Thaler', blocks: [
      { t: 'p', x: 'Munger là người tiên phong: ông gọi là <b>tâm lý học của sự phán đoán sai lầm</b>: nguyên nhân chủ yếu là chúng ta phân tích không đầy đủ, quyết định quá nhanh và dễ bị lầm đường, lôi kéo. Ông dùng phép phân tích hai hướng: (1) nhân tố nào thực sự ảnh hưởng lợi ích; (2) tiềm thức ảnh hưởng thế nào khi não bộ không kiểm soát những hành động tuy hữu ích nhưng không đúng chức năng. Nay <b>tài chính hành vi</b> là ngành học chính thức (Richard Thaler, Đại học Chicago).' },
      { t: 'table', head: ['Thiên kiến', 'Mô tả', 'Ví dụ / nghiên cứu'], rows: [
        ['<b>Quá tự tin</b>', 'Tin vào thông tin và phán đoán của mình quá mức; quyết định sai lầm và gây hại cho thị trường', 'Hầu hết người nói mình lái xe giỏi; 90% bác sĩ tin mình chẩn đoán viêm phổi chính xác, thực tế chỉ ~50% đúng'],
        ['<b>Phản ứng thái quá</b>', 'Coi sự kiện ngẫu nhiên là xu hướng; phản ứng quá mạnh với tin xấu, chậm với tin tốt; chỉ chú ý tin gần nhất', 'Báo cáo thu nhập gần nhất bị coi là dấu hiệu cho tương lai'],
        ['<b>Cận thị</b> (myopia)', 'Quá chú ý ngắn hạn', 'Nghiên cứu của Thaler: nhóm nhận báo cáo liên tục chỉ phân bổ ~40% cho cổ phiếu, nhóm chỉ xem báo cáo định kỳ phân bổ ~70%. Lời khuyên: “Hãy đầu tư cổ phiếu và sau đó, đừng mở thư báo.”'],
        ['<b>Ác cảm với thua lỗ</b>', 'Đau vì thua lỗ lớn hơn nhiều vui vì lãi; người ta cần lãi ~gấp đôi để chịu thua lỗ cùng mức', 'Giữ lại các lựa chọn sai quá lâu vì không muốn thừa nhận sai lầm; không bán mã đang xuống'],
        ['<b>Tính toán trí tuệ</b> (mental accounting)', 'Chia tiền vào các “tài khoản tâm lý” khác nhau', 'Mất 20 đô la, rút tiếp 20 đô la; hôm sau tìm lại 20 đô la trong túi áo → tiêu thoải mái. Thí nghiệm 30 đô la tiền mặt: nhóm “đã có” chọn giữ; nhóm “được tiền chắc” 57% chọn lấy tiền chắc chắn dù lợi thế như nhau']
      ] },
      { t: 'widget', name: 'loss-aversion', title: 'Bạn cần thắng bao nhiêu để dám đặt cược 50/50?' },
      { t: 'warn', x: 'Tính toán trí tuệ cho thấy điểm yếu của giả thuyết thị trường hiệu quả: giá không chỉ phản ánh thông tin mà còn <b>cách con người xử lý thông tin</b>. Chấp nhận rủi ro cũng thay đổi theo hoàn cảnh: thị trường giảm mạnh thì nhà đầu tư mạo hiểm cũng thận trọng; thị trường bùng nổ thì nhà đầu tư thận trọng cũng mua nhanh như người mạo hiểm. Nữ giới thường thận trọng hơn nam giới, và người cao tuổi ít chấp nhận rủi ro hơn người trẻ.' }
    ] },
    { icon: '🧘', title: 'Tâm lý nhà đầu tư tập trung', blocks: [
      { t: 'p', x: 'Buffett tin vào nghiên cứu của mình, chứ không phải may mắn. Hành động xuất phát từ mục tiêu suy tính cẩn thận; không bao giờ bị chệch hướng bởi sự kiện ngắn hạn; hiểu nhân tố đích thực của rủi ro và tự tin chấp nhận hậu quả. Munger nói khi hai ông tốt nghiệp họ “bước vào thế giới kinh doanh để tìm kiếm những <b>ví dụ lớn, dễ dự đoán về sự bất hợp lý</b>” — không dự đoán đúng thời điểm, mà là khi bất hợp lý diễn ra, nó kéo theo những kiểu hành vi có thể dự đoán.' },
      { t: 'steps', items: [
        'Nhận thức động lực con người giúp <b>tránh những lỗi thường gặp nhất</b>.',
        'Nhận ra sai lầm của người khác <b>đúng lúc để kiếm lời</b>.',
        'Hàng nghìn người phán đoán sai đẩy thị trường vào chiều hướng tiêu cực; cám dỗ chạy theo đám đông rất lớn. Trong cơn hỗn loạn, <b>người hành động sáng suốt có thể là những người tồn tại duy nhất</b>.',
        'Con đường luôn gập ghềnh, và đường đi đúng đắn thường <b>đi ngược trực giác</b>; hãy chuẩn bị hành động nhạy bén ngay cả khi bản năng mách bảo làm ngược lại.'
      ] }
    ] }
  ],
  summary: [
    'Thành công đầu tư cần kiểm soát cảm xúc hơn là IQ cao: bình tĩnh, kiên nhẫn, sáng suốt.',
    'Ngài Thị Trường: báo giá thất thường, bạn không bị buộc phải theo; tận dụng khi ông cực đoan, đừng để ông chi phối.',
    'Tài chính hành vi: quá tự tin, phản ứng thái quá, cận thị, ác cảm thua lỗ, tính toán trí tuệ.',
    'Sợ hãi khi người khác tham lam, tham lam khi người khác sợ hãi; bi quan tạo cơ hội mua giá tốt.',
    'Phiếu đục lỗ 20 lỗ: kiên nhẫn chờ cơ hội lớn.'
  ],
  cards: [
    ['IQ nào đủ cho đầu tư theo Buffett?', 'Trên 125 là đủ; điều quan trọng là kiểm soát cảm xúc.'],
    ['Ba đặc điểm nhà đầu tư thực sự (Graham)?', 'Bình tĩnh, kiên nhẫn, sáng suốt.'],
    ['Kẻ thù lớn nhất của nhà đầu tư?', 'Chính bản thân mình, không phải thị trường.'],
    ['Buffett nói gì nếu bạn hoảng sợ khi chứng khoán giảm 50%?', 'Đừng đầu tư vào thị trường chứng khoán.'],
    ['“Phiếu đục lỗ” của Buffett?', 'Mỗi nhà đầu tư chỉ có 20 lỗ trong cả đời; mỗi quyết định đục một lỗ → nên kiên nhẫn.'],
    ['Câu nói kinh điển về sợ hãi và tham lam?', 'Sợ hãi khi người khác tham lam; tham lam khi người khác sợ hãi.'],
    ['Ngài Thị Trường là ai?', 'Nhân vật của Graham: đối tác mỗi ngày báo giá mua/bán cổ phần của bạn, tâm trạng thất thường.'],
    ['Bài học Ngài Thị Trường?', 'Bạn không buộc phải chấp nhận báo giá; tận dụng khi giá cực đoan, đừng để ông chi phối.'],
    ['Tâm lý học của sự phán đoán sai lầm?', 'Khái niệm của Munger về những sai lầm tâm lý khiến phán đoán sai.'],
    ['Quá tự tin: ví dụ?', '90% bác sĩ tin mình chẩn đoán viêm phổi chính xác, thực tế ~50%.'],
    ['Cận thị (myopia) trong đầu tư?', 'Quá chú ý kết quả ngắn hạn; nhóm nhận báo cáo thường xuyên dè dặt hơn (40% vào cổ phiếu so với 70%).'],
    ['Ác cảm với thua lỗ?', 'Nỗi đau thua lỗ lớn gấp ~2 lần niềm vui lãi; giữ lại cổ phiếu xấu quá lâu.'],
    ['Tính toán trí tuệ?', 'Chia tiền vào các “tài khoản tâm lý” khác nhau và quyết định khác nhau dù cùng giá trị.']
  ],
  quiz: [
    { q: 'Theo Buffett (1999), thành công đầu tư không tương quan với IQ nếu IQ trên:', o: ['100', '125', '150', '175'], a: 1, e: 'Điều cần là khả năng kiểm soát ham muốn.' },
    { q: 'Kẻ thù lớn nhất của nhà đầu tư:', o: ['Thị trường', 'Chính bản thân họ', 'Thuế', 'Lạm phát'], a: 1, e: 'Theo Graham.' },
    { q: 'Hình ảnh “phiếu đục lỗ” nhắc nhà đầu tư:', o: ['Giao dịch nhiều', 'Kiên nhẫn: chỉ có 20 quyết định đầu tư lớn trong đời', 'Mua nhiều hơn', 'Bán sớm'], a: 1, e: 'Mỗi quyết định đục một lỗ.' },
    { q: 'Buffett: “Chúng ta muốn kinh doanh trong môi trường bi quan vì:”', o: ['Thích bi quan', 'Thích mức giá nó đem lại', 'Ghét lạc quan', 'Chính phủ yêu cầu'], a: 1, e: 'Bi quan khiến giá giảm.' },
    { q: 'Ngài Thị Trường là ai?', o: ['Chính khách', 'Đối tác thất thường báo giá mua/bán cổ phần', 'Nhà môi giới', 'Giám đốc'], a: 1, e: 'Nhân vật của Graham.' },
    { q: 'Bạn nên làm gì khi Ngài Thị Trường báo giá phi lý?', o: ['Luôn theo ông', 'Thoải mái tận dụng nhưng đừng để ông ảnh hưởng', 'Cầu xin ông', 'Bán hết'], a: 1, e: 'Ông không buồn nếu bị từ chối.' },
    { q: '“Cận thị” trong tài chính hành vi là:', o: ['Nhìn xa trông rộng', 'Quá chú ý ngắn hạn', 'Thích rủi ro', 'Chỉ dùng kính'], a: 1, e: 'Thaler: nhóm xem báo cáo liên tục đầu tư ít vào cổ phiếu.' },
    { q: 'Ác cảm với thua lỗ khiến nhà đầu tư:', o: ['Bán nhanh mã lỗ', 'Giữ lại lựa chọn sai quá lâu', 'Mua thêm', 'Tăng cược'], a: 1, e: 'Không muốn thừa nhận sai lầm.' },
    { q: 'Trong ví dụ 20 đô la bị mất rồi tìm thấy trong túi áo, hiện tượng là:', o: ['Quá tự tin', 'Tính toán trí tuệ', 'Cận thị', 'Phản ứng thái quá'], a: 1, e: 'Tiền “tìm được” dễ tiêu hơn.' },
    { q: 'Buffett khuyên làm gì khi người khác tham lam?', o: ['Tham lam theo', 'Sợ hãi', 'Bán cổ phiếu', 'Không làm gì'], a: 1, e: 'Ngược lại, tham lam khi người khác sợ hãi.' }
  ],
  match: [
    ['Ngài Thị Trường', 'Báo giá thất thường mỗi ngày'],
    ['Phiếu đục lỗ', 'Kiên nhẫn chọn ít cơ hội'],
    ['Quá tự tin', 'Bác sĩ 90% tin mình chẩn đoán đúng'],
    ['Ác cảm thua lỗ', 'Đau gấp ~2 lần niềm vui lãi'],
    ['Tính toán trí tuệ', 'Chia tiền vào các “tài khoản tâm lý”'],
    ['Munger', 'Tâm lý học của sự phán đoán sai lầm']
  ]
},

/* ======================= CHƯƠNG 12 ======================= */
{
  n: 12,
  title: 'Nhân vật “không duy lý”',
  intro: 'Theo Shaw, người duy lý thích nghi với thế giới, người không duy lý kiên trì thay đổi thế giới — nên mọi tiến bộ phụ thuộc vào người không duy lý. Chương kết: vì sao Buffett khác mọi người, và bốn bước để đầu tư theo phong cách Buffett.',
  sections: [
    { icon: '🌍', title: 'Vì sao Buffett khác biệt?', blocks: [
      { t: 'p', x: 'Thập niên 1980 là thập kỷ “cú sốc tương lai” của quản lý tài chính: máy tính, mua lại công ty, trái phiếu đầu cơ, chứng khoán phái sinh; nghiên cứu cơ bản bị thay bằng “hộp đen”, tự động thay trực giác. Cuối thập niên 1990 còn tệ hơn: bong bóng dot-com — Buffett gọi là “<b>Bong bóng lớn</b>”. Qua nhiều thập kỷ, các phương pháp (cổ phần nhỏ/lớn, tăng trưởng, giá trị, đà) luân phiên; Buffett là ngoại lệ vì <b>kinh doanh luôn là công cụ lý tưởng</b> của ông.' },
      { t: 'key', x: 'Buffett nghiên cứu rất kỹ <b>doanh nghiệp</b>; hầu hết nhà đầu tư chỉ xem <b>giá chứng khoán</b>: họ tiêu tốn thời gian dự đoán biến động giá, quá ít thời gian hiểu doanh nghiệp. “Chứng khoán thật đơn giản. Tất cả những việc bạn phải làm là mua cổ phiếu của những công ty lớn với bộ máy quản lý hoàn thiện và có năng lực nhất ở mức giá thấp hơn giá trị nội tại. Sau đó, bạn sở hữu những cổ phiếu đó vĩnh viễn.” — Buffett, 1990' },
      { t: 'list', items: [
        'Khi nhiều chuyên gia bận mô hình định giá tài sản vốn và lý thuyết danh mục hiện đại, Buffett đọc báo cáo thu nhập, điều kiện tái đầu tư vốn, năng lực dòng tiền; kinh nghiệm điều hành giúp ông khác biệt: “Bạn có thể thực sự giải thích cho một con cá xem nó giống như cái gì nếu đi trên mặt đất?”',
        'Nhà đầu tư và chủ doanh nghiệp nên có cách nhìn chung về công ty: một bên mua toàn bộ, bên kia mua phần.',
        'Thước đo truyền thống là thay đổi giá — nhưng ngắn hạn giá có thể lệch xa giá trị vì lý do vô lý. Yêu cầu của khách hàng với chuyên gia công bố kết quả mỗi quý làm vấn đề tệ hơn. “Thị trường chỉ là nơi chúng ta tham khảo xem có ai đang làm việc ngược nghịch không.” (1988)',
        'Mỗi năm một lần Buffett kiểm tra: lợi nhuận trên cổ phiếu; thay đổi lãi gộp, mức nợ, nhu cầu chi phí vốn; khả năng tăng tiền mặt. Nếu các thước đo kinh tế đó đang hoàn thiện, giá cổ phiếu sẽ phản ánh trong dài hạn.'
      ] },
      { t: 'tip', x: 'Ẩn sau thành công của Buffett một phần là thất bại của người khác: “Tôi thấy rất có ích khi có hàng chục nghìn sinh viên tốt nghiệp các trường kinh tế với suy nghĩ này.” Khoảng cách tăng lên khi người khác sẵn lòng đóng vai người thua cuộc còn Buffett chọn <b>không chơi</b>.' }
    ] },
    { icon: '🪜', title: 'Bốn bước đầu tư theo phong cách Buffett', blocks: [
      { t: 'steps', items: [
        '<b>Bước 1 — Tách khỏi thị trường chứng khoán.</b> Thị trường không phải thầy giáo, chỉ tồn tại để hỗ trợ bạn mua và bán. Nếu bạn tin thị trường thông minh hơn mình thì đầu tư vào quỹ chỉ số; nếu có kiến thức và tin hiểu biết hơn thị trường về doanh nghiệp, hãy tách khỏi nó. Buffett không có hệ thống báo giá chứng khoán ở văn phòng: “Nếu chúng ta nắm giữ 100% cổ phần See’s hay H.H. Brown, chúng ta không cần báo giá hàng ngày… Tại sao lại cần báo giá cho 7% cổ phần của Coke?” Câu hỏi duy nhất: “Liệu gần đây có ai làm điều gì ngược nghịch cho tôi cơ hội mua cổ phiếu công ty tốt với giá hấp dẫn không?”',
        '<b>Bước 2 — Đừng lo lắng về nền kinh tế.</b> Không ai dự đoán kinh tế giỏi hơn dự đoán thị trường. Nếu chọn chứng khoán dựa trên giả định kinh tế, bạn đang chạy theo lợi nhuận và đầu cơ. Hãy mua doanh nghiệp có khả năng mang lại lợi nhuận trong <b>mọi</b> nền kinh tế. Khi bạn tranh cãi lãi suất tăng hay giảm, lạm phát hay giảm phát, HÃY DỪNG LẠI.',
        '<b>Bước 3 — Mua doanh nghiệp, không mua cổ phiếu.</b> Hãy giả định rằng sau khi quyết định bạn không thể rút lại và không được đổi trong <b>10 năm</b>; số của cải đó sẽ nuôi bạn khi nghỉ hưu. Lần lượt đánh giá theo nguyên lý: đơn giản dễ hiểu, lịch sử ổn định, triển vọng sáng sủa? quản lý chân thật, phân bổ vốn hợp lý, nói thẳng với cổ đông? tài chính tốt (biên, lợi nhuận chủ sở hữu, giá trị thị trường tăng phù hợp lãi không chia)? <b>cuối cùng</b> có chiết khấu so với giá trị nội tại không? Chỉ ở bước cuối cùng mới tính đến giá thị trường. Hai cách giải quyết bất định: chọn doanh nghiệp đơn giản, ổn định; yêu cầu biên độ an toàn.',
        '<b>Bước 4 — Quản lý danh mục.</b> Bạn là chủ sở hữu doanh nghiệp chứ không phải người mua chứng khoán; không đánh giá thành công theo chuẩn so với chỉ số hàng năm nên được tự do chọn doanh nghiệp tốt nhất. Không có luật nào buộc bạn có 30–50 cổ phiếu hay tham gia mọi ngành. Hãy hỏi: nếu doanh nghiệp tốt nhất của bạn ít rủi ro nhất và triển vọng sáng nhất, sao không đầu tư vào đó thay vì công ty thứ 20? Kiên nhẫn chờ doanh nghiệp đáng mua; Buffett nói thật khó để đưa ra hàng trăm quyết định thông minh trong cả cuộc đời nên ông chỉ lập danh mục nhỏ để chỉ cần ra một số quyết định hợp lý.'
      ] },
      { t: 'widget', name: 'buffett-checklist', title: 'Áp dụng bốn bước: chấm điểm công ty bằng bảng kiểm 12 nguyên lý' }
    ] },
    { icon: '💎', title: 'Điều cốt lõi', blocks: [
      { t: 'key', x: 'Động lực chiến lược của Buffett là <b>phân bổ vốn hợp lý</b> — quyết định quan trọng nhất của nhà quản lý, và là phẩm chất ông khâm phục nhất. Dù thị trường nhiều bất ổn, vẫn có một đường hợp lý xuyên qua thị trường tài chính. Thành công của ông là định vị được đường đó và không đi chệch quỹ đạo.' },
      { t: 'list', items: [
        'Buffett từng thất bại và còn thất bại nữa; thành công không có nghĩa không mắc sai lầm. Thành công phụ thuộc rút ra bài học từ nhiều sai lầm phức tạp (dự đoán thị trường, kinh tế, giá chứng khoán) và vài việc đơn giản làm đúng (xác định giá trị doanh nghiệp).',
        'Khi mua, ông chú trọng hai biến số: <b>giá</b> (xác định từ báo giá) và <b>giá trị</b> (cần tính toán, không quá khó với người sẵn sàng).',
        'Buffett: “Đầu tư không hề phức tạp. Bạn cần biết kế toán, ngôn ngữ của kinh doanh. Bạn nên đọc cuốn <i>Nhà đầu tư thông minh</i>. Bạn cần có đầu óc tinh táo, tính cách phù hợp. Hãy học hỏi Ben Graham và Phil Fisher, đọc các báo cáo thường niên và báo cáo tài chính, nhưng đừng xem chúng chỉ đơn thuần như tập hợp những chữ cái mà.” (1993)'
      ] },
      { t: 'tip', x: 'Không cần bằng MBA; bạn chỉ cần kiên trì làm theo suy nghĩ của chính bạn: <b>suy nghĩ độc lập, áp dụng phương pháp đơn giản, và đủ can đảm theo đuổi niềm tin của mình</b>. Nếu bạn liên tục cần người xác nhận quyết định của mình, lợi nhuận sẽ giảm. Bước đầu tiên luôn là bước thử thách nhất.' },
      { t: 'mnemo', x: '“Những gì chúng ta phải làm không nằm ngoài khả năng của bất kỳ ai. Bạn không cần phải làm những việc khác thường mới có được những kết quả khác thường.” — Warren Buffett' }
    ] }
  ],
  summary: [
    'Buffett khác vì nghiên cứu doanh nghiệp, không chạy theo giá; người khác dự đoán thay đổi giá ngắn hạn.',
    'Bốn bước: tách khỏi thị trường chứng khoán; không lo nền kinh tế; mua doanh nghiệp, không mua cổ phiếu; quản lý danh mục nhỏ tập trung.',
    'Đánh giá doanh nghiệp theo 12 nguyên lý; chỉ ở bước cuối mới xét giá thị trường (biên độ an toàn).',
    'Điểm cốt lõi là phân bổ vốn hợp lý; thành công cần suy nghĩ độc lập và can đảm theo đuổi niềm tin.'
  ],
  cards: [
    ['Câu của Shaw về người duy lý?', 'Người duy lý thích nghi với thế giới; người không duy lý kiên trì thay đổi thế giới → tiến bộ phụ thuộc vào người không duy lý.'],
    ['Điều khác biệt cơ bản của Buffett?', 'Nghiên cứu kỹ doanh nghiệp, trong khi hầu hết chỉ xem giá và dự đoán biến động giá.'],
    ['Cách Buffett kiểm tra công ty mỗi năm?', 'Lợi nhuận/cổ phiếu; lãi gộp, mức nợ, chi phí vốn; khả năng tăng tiền mặt.'],
    ['Vì sao thay đổi giá ngắn hạn là thước đo kém?', 'Ngắn hạn giá lệch xa giá trị vì lý do vô lý; chủ yếu dự đoán hành vi nhà đầu tư khác.'],
    ['Bước 1 của phong cách Buffett?', 'Tách khỏi thị trường chứng khoán; thị trường không phải thầy giáo.'],
    ['Câu hỏi duy nhất khi nhìn thị trường?', 'Gần đây có ai làm điều gì ngược nghịch cho tôi cơ hội mua cổ phiếu công ty tốt với giá hấp dẫn không?'],
    ['Bước 2?', 'Đừng lo lắng về nền kinh tế; mua doanh nghiệp có lợi nhuận trong mọi nền kinh tế.'],
    ['Bước 3?', 'Mua doanh nghiệp, không mua cổ phiếu: giả định giữ 10 năm; xét từng nguyên lý, cuối cùng mới xét giá.'],
    ['Hai cách Buffett giải quyết bất định khi dự đoán dòng tiền?', 'Chọn doanh nghiệp đơn giản, ổn định; yêu cầu biên độ an toàn.'],
    ['Bước 4?', 'Quản lý danh mục: ít doanh nghiệp tốt nhất, kiên nhẫn chờ cơ hội, không cần 30–50 cổ phiếu.'],
    ['Điều cốt lõi của chiến lược Buffett?', 'Phân bổ vốn hợp lý.'],
    ['Phẩm chất cần có theo Buffett?', 'Suy nghĩ độc lập, phương pháp đơn giản, can đảm theo đuổi niềm tin.']
  ],
  quiz: [
    { q: 'Theo Shaw, tiến bộ phụ thuộc vào:', o: ['Người duy lý', 'Người không duy lý', 'Chính phủ', 'Số đông'], a: 1, e: 'Họ kiên trì thay đổi thế giới.' },
    { q: 'Buffett khác hầu hết nhà đầu tư vì:', o: ['Có nhiều tiền hơn', 'Nghiên cứu kỹ doanh nghiệp thay vì dự đoán giá', 'May mắn', 'Dùng máy tính nhanh hơn'], a: 1, e: 'Họ tiêu quá nhiều thời gian cho dự đoán giá.' },
    { q: 'Bước 1 của phong cách Buffett:', o: ['Mua quỹ chỉ số', 'Tách khỏi thị trường chứng khoán', 'Đa dạng hóa', 'Vay tiền'], a: 1, e: 'Thị trường không phải thầy giáo.' },
    { q: 'Buffett không cần báo giá hàng ngày vì:', o: ['Không biết dùng', 'Nếu sở hữu 100% doanh nghiệp, ta cũng không cần báo giá hàng ngày', 'Luật cấm', 'Quá đắt'], a: 1, e: 'Ví dụ See’s, H.H. Brown, 7% cổ phần Coke.' },
    { q: 'Bước 2: về nền kinh tế, nên:', o: ['Dự đoán thật chính xác', 'Đừng lo lắng, chọn doanh nghiệp có lợi nhuận trong mọi nền kinh tế', 'Chờ suy thoái', 'Mua khi lạm phát'], a: 1, e: 'Không ai dự đoán kinh tế giỏi hơn dự đoán thị trường.' },
    { q: 'Bước 3: giả định giữ doanh nghiệp bao lâu?', o: ['1 tháng', '1 năm', '10 năm', 'Cả đời'], a: 2, e: 'Không rút lại, không đổi.' },
    { q: 'Trong bước 3, giá thị trường được tính đến khi nào?', o: ['Bước đầu', 'Chỉ ở bước cuối cùng', 'Không bao giờ', 'Mỗi ngày'], a: 1, e: 'Sau khi xét kinh doanh, quản lý, tài chính.' },
    { q: 'Hai cách Buffett đối phó bất định dòng tiền:', o: ['Doanh nghiệp đơn giản, ổn định + biên độ an toàn', 'Mua nhiều + vay nhiều', 'Dự báo chính xác', 'Dùng chỉ số'], a: 0, e: 'Tăng cơ hội dự đoán chính xác.' },
    { q: 'Bước 4: danh mục nên:', o: ['30–50 cổ phiếu', 'Ít doanh nghiệp tốt nhất, tập trung', 'Mọi ngành', 'Thay đổi hằng tuần'], a: 1, e: 'Chỉ cần vài quyết định hợp lý.' },
    { q: 'Điểm cốt lõi chiến lược của Buffett:', o: ['Dự đoán thị trường', 'Phân bổ vốn hợp lý', 'Vay nhiều', 'Giao dịch nhanh'], a: 1, e: 'Phẩm chất ông khâm phục nhất ở nhà quản lý.' }
  ],
  match: [
    ['Bước 1', 'Tách khỏi thị trường'],
    ['Bước 2', 'Không lo nền kinh tế'],
    ['Bước 3', 'Mua doanh nghiệp, giữ 10 năm'],
    ['Bước 4', 'Danh mục nhỏ, tập trung'],
    ['Bong bóng lớn', 'Cuộc bùng nổ dot-com'],
    ['Điều cốt lõi', 'Phân bổ vốn hợp lý']
  ]
}

);
