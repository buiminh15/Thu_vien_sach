// Tự học MBA Marketing trong 30 ngày – Colin Barrow. Chương 1.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.mba30 = BOOK_DATA.mba30 || { chapters: [] };
BOOK_DATA.mba30.chapters.push({
  n: 1,
  title: 'Nhập môn Marketing',
  intro: 'Marketing là gì, thị trường tiêu dùng khác thị trường B2B ra sao, “marketing hỗn hợp” 4P/5P và Internet đã thay đổi cuộc chơi như thế nào.',
  sections: [
    { icon: '🎯', title: 'Marketing là gì?', blocks: [
      { t: 'key', x: 'Marketing là quy trình đảm bảo đưa <b>đúng hàng hoá, đúng dịch vụ, đến đúng thị trường, đúng thời điểm và đúng giá</b>. Từ khoá là chữ “<b>đúng</b>”.' },
      { t: 'list', items: [
        'Phải nhắm vào đúng khách hàng: nếu họ không muốn món hàng bạn đưa ra thì “trò chơi kết thúc trước khi bắt đầu”.',
        'Phải đưa ra món hàng có giá trị và làm khách hàng hài lòng; nếu không họ sẽ chọn đối thủ, không mua lại, thậm chí <b>nói xấu</b> bạn.',
        'Người làm marketing “đúng nghĩa” khiến ngày càng <b>nhiều</b> người muốn sản phẩm, đủ để kinh doanh có lời.'
      ] },
      { t: 'p', x: 'Marketing là hành trình khám phá của cả nhà cung cấp lẫn người tiêu dùng. Phạm vi của nó trải từ <b>bên trong tâm trí khách hàng</b> (những cảm xúc họ chưa nhận ra) đến <b>hệ thống hậu cần</b> đưa hàng tới tay khách. Mỗi mắt xích trong chuỗi giá trị đều có thể <b>tăng thêm giá trị hoặc giết chết giao dịch</b>.' },
      { t: 'tip', x: 'Ví dụ Amazon: cốt lõi của đề xuất kinh doanh là nhà kho + hệ thống phân phối hiệu suất cao và việc đổi trả không mất gì. Những yếu tố này quan trọng ngang phạm vi sản phẩm, cấu trúc website hay giá cạnh tranh.' },
      { t: 'p', x: 'Về học thuật: các trường kinh doanh không “phát minh” marketing nhưng đã chuẩn hoá nó. Hai giáo trình kinh điển là <i>Nguyên lý marketing</i> và <i>Quản trị Marketing</i> của <b>Philip Kotler</b> (Kellogg School of Management).' }
    ] },
    { icon: '🏪', title: 'Hiểu thị trường: hai loại thị trường', blocks: [
      { t: 'table', head: ['', 'Thị trường hàng tiêu dùng (B2C)', 'Thị trường doanh nghiệp (B2B)'], rows: [
        ['Người mua', 'Cá nhân, hoặc người thân/bạn bè', 'Doanh nghiệp'],
        ['Mục đích mua', 'Đáp ứng nhu cầu cá nhân, không phải kiếm lời', 'Kỳ vọng <b>kiếm tiền</b>; có thể chỉ là mắt xích dẫn tới người tiêu dùng'],
        ['Quy mô', 'Nhỏ hơn', '<b>Lớn hơn, đa dạng, phức tạp và nhiều lợi nhuận hơn</b> (người tiêu dùng thường không biết)']
      ] },
      { t: 'p', x: 'Ví dụ bánh pizza: lớp phô mai chỉ là một thành phần; để có sữa phải qua nông dân nuôi bò, nhà sản xuất phân bón, thiết bị xử lý sữa, công ty xây dựng, vận tải, chế biến phô mai… Tất cả đều là giao dịch <b>B2B</b> trước khi pizza đến siêu thị rồi đến người ăn.' },
      { t: 'p', x: 'Người làm marketing phải hiểu <b>mọi lực lượng</b> trên con đường từ nguyên liệu đến người dùng cuối. Thị trường luôn thay đổi: con đường sinh lợi nhất có thể chuyển từ B2B sang bán cho người tiêu dùng khi thị trường trưởng thành.' },
      { t: 'h3', x: 'Hiểu người tiêu dùng' },
      { t: 'p', x: 'Cùng một sản phẩm có thể được dùng cho mục đích khác nhau, thoả mãn nhu cầu khác nhau. Cần biết nhu cầu, ước muốn, sở thích, nguyện vọng, nơi mua (trực tuyến hay ngoài chợ), mức giá sẵn sàng trả, nền tảng giáo dục và kinh tế – xã hội (sẽ học kỹ ở chương 2).' }
    ] },
    { icon: '🧪', title: 'Marketing hỗn hợp (4P + 1)', blocks: [
      { t: 'p', x: 'Thuật ngữ xuất hiện cuối thập niên 1940; năm 1960 <b>Jerome McCarthy</b> (Michigan State University) chính thức hoá. Các thành tố bạn <b>kiểm soát</b> được gồm:' },
      { t: 'table', head: ['P', 'Tiếng Anh', 'Ý nghĩa'], rows: [
        ['<b>Giá cả</b>', 'Price', 'Mức giá và chính sách giá'],
        ['<b>Sản phẩm / dịch vụ</b>', 'Product', 'Cái bạn bán'],
        ['<b>Xúc tiến</b>', 'Promotion', 'Quảng cáo, PR, khuyến mại…'],
        ['<b>Điểm bán hàng</b>', 'Place', 'Kênh phân phối, nơi khách mua'],
        ['<b>Con người</b> (P thứ 5)', 'People', 'Thường được thêm vào']
      ] },
      { t: 'mnemo', x: 'Như <b>nấu ăn</b>: cùng nguyên liệu nhưng tỷ lệ khác nhau ra “món” khác nhau. Đổi cách trộn 4P để tạo đề xuất phù hợp từng <b>phân khúc thị trường</b>.' },
      { t: 'p', x: 'Ví dụ sách: chi phí bìa cứng gần bằng bìa mềm, nhưng phát hành bìa cứng vài tuần trước với giá cao và quảng cáo khéo tạo “độc quyền” làm hài lòng một nhóm khách. Hoặc với doanh nghiệp bán cổ phiếu trực tuyến: giữ “sản phẩm cốt lõi” là thông tin đầu tư, nhưng đổi hội thảo/sách/diễn đàn/tư vấn cá nhân và giá cho nhóm nhà đầu tư mới, nhà buôn trong ngày hay nhà đầu tư lõi đời.' },
      { t: 'warn', x: '<b>Yếu tố không kiểm soát được</b>: tình hình kinh tế, thay đổi pháp luật, đối thủ mới mạnh, thay đổi công nghệ nhanh. (Sẽ bàn ở chương Chiến lược.)' }
    ] },
    { icon: '🌐', title: 'Marketing trong thời đại Internet', blocks: [
      { t: 'p', x: 'Tăng trưởng Internet cực nhanh: năm 1995 chỉ ~16 triệu người (0,4% dân số thế giới) với kết nối chậm; đến 2010 hơn <b>2 tỷ người</b> (hơn 1/4 dân số). Dữ liệu truyền qua mạng năm 2005 ~150 exabyte, đến 2010 ~1.200 exabyte (tăng 700%). Người có công lớn: Tim Berners-Lee (CERN).' },
      { t: 'key', x: 'Nhu cầu của người tiêu dùng là <b>vĩnh cửu</b> (xem Maslow, chương 2); chỉ có <b>phương tiện đáp ứng</b> thay đổi. Internet làm thay đổi sự đánh đổi truyền thống giữa việc “cung cấp thứ khách muốn” và “thứ có lợi về kinh tế”.' },
      { t: 'p', x: 'Thập kỷ đầu, nhiều công ty chỉ có “được nối mạng” làm điểm bán — không độc đáo nên cuối cùng <b>cạnh tranh bằng giá</b>, và các doanh nghiệp nhỏ mới khó thắng đối thủ lớn. Giai đoạn 2002–2003 các nhà đầu tư internet mất hàng trăm tỷ USD.' },
      { t: 'h3', x: 'Chiều sâu (Richness) & Độ lan tỏa (Reach) của thông tin' },
      { t: 'tabs', items: [
        ['Chiều sâu (Richness)', '<ul><li><b>Băng thông</b>: lượng dữ liệu truyền được</li><li><b>Tuỳ biến</b> theo khách hàng</li><li><b>Tương tác</b> người mua – người bán</li><li><b>Độ tin cậy</b> của dịch vụ</li><li><b>Bảo mật</b> dữ liệu và thanh toán</li><li><b>Cập nhật</b> (mức cấp thời)</li><li>Hoạt động <b>24/7</b>, dễ thêm ngôn ngữ</li></ul>'],
        ['Độ lan tỏa (Reach)', '<ul><li>Số người/khách hàng có thể tiếp cận</li><li>Lan truyền theo địa lý</li><li>Xuất hiện <b>những trung gian mới</b> trong kênh phân phối</li></ul>'],
        ['Đánh đổi', '<p>Trước đây: tiếp cận nhiều người thì nội dung nghèo (quảng cáo TV), nội dung phong phú thì chỉ cho ít người (lời rao cá nhân). Internet <b>phá vỡ đánh đổi đó</b>, cho phép cả hai.</p>']
      ] },
      { t: 'tip', x: 'Ngành sách: sản phẩm (cuốn sách) gần như không đổi qua nhiều thế kỷ; thứ thay đổi là <b>con đường đưa sách tới thị trường</b>, phạm vi lan truyền và các đối tác mới.' }
    ] },
    { icon: '📚', title: 'Tình huống: Alibris, Harold và Boo.com', blocks: [
      { t: 'tabs', items: [
        ['Alibris.com', '<p>Thị trường trực tuyến cho sách mới/cũ/hiếm, băng đĩa, phim, nối hàng chục nghìn người bán độc lập (45 nước) với người mua; &gt;100 triệu đầu sách. Chỉ sống được trong thời đại internet. Xây <b>mạng lưới hậu cần chuyên biệt chi phí thấp</b>, thu thập dữ liệu mua/bán để cung cấp thông tin giá cả, nhu cầu cho cả hai phía; năm 2009 thêm 8 đối tác (tổng 16).</p>'],
        ['Harold – cứu hộ ô tô', '<p>Chuyển bán xe hỏng sang <b>đấu giá trực tuyến</b>: dùng phần mềm sẵn có, quảng cáo báo chí + email truyền miệng. Kết quả: &gt;100 người mua tham gia đấu giá (so với ~50 ở đấu giá trực tiếp), xe bán và thu tiền trong vài ngày (đối thủ cũ mất ~3 tháng), không cần vị trí đắt đỏ.</p>'],
        ['Boo.com', '<p>Nhà bán lẻ thời trang trực tuyến toàn cầu với website tinh vi; nhưng <b>đốt 89 triệu bảng trong chưa đầy 18 tháng</b> rồi sụp đổ. Dan Wagner mua lại nền tảng công nghệ với 250.000 bảng. Bài học: công nghệ hay chưa đủ nếu mô hình kinh doanh không bền.</p>']
      ] }
    ] },
    { icon: '🧱', title: 'Thương mại điện tử, marketing lan truyền & mối đe doạ mới', blocks: [
      { t: 'h3', x: 'Clicks and Bricks' },
      { t: 'p', x: 'Thế giới online và offline chồng lấn nhau. Nhiều công ty giữ “bricks” (cửa hàng thật) và thêm “clicks” (thương mại điện tử): niềm tin của khách hàng với cửa hàng thật là lợi thế cạnh tranh; cửa hàng có thể dùng làm nơi “bốc dỡ, đóng gói” để giao hàng.' },
      { t: 'h3', x: 'Marketing lan truyền (Viral marketing)' },
      { t: 'table', head: ['Mạng', 'Giá trị tăng theo', 'Định luật'], rows: [
        ['Phát sóng một–nối–một (TV, radio)', 'N (số người xem)', 'Định luật Sarnoff'],
        ['Điện thoại (nhiều–nối–nhiều)', 'N(N−1) ≈ N² − N', 'Định luật Metcalfe'],
        ['Internet có nhóm/cộng đồng', '2<sup>N</sup> − N − 1 nhóm', 'Định luật Reed']
      ] },
      { t: 'p', x: 'Ví dụ <b>Hotmail</b>: mọi email gửi đi kèm dòng “Hãy gửi email miễn phí qua Hotmail” — người dùng hiện tại vô tình đi bán hàng cho khách tương lai, và vì đến từ người quen nên có độ tin cậy cao.' },
      { t: 'warn', x: 'Cái đẹp và giới hạn của marketing lan truyền: <b>chỉ hiệu quả khi sản phẩm thật sự tốt</b>. Không ai giới thiệu thứ mình không thích.' },
      { t: 'h3', x: 'Dữ liệu thời gian thực' },
      { t: 'list', items: [
        '<b>Amazon</b>: theo dõi hành vi duyệt web để đề xuất đúng thứ khách có thể cần.',
        '<b>Best Buy</b> (chương trình Zone Rewards): <10% khách mua &gt;40% doanh số → tổ chức lại cửa hàng tập trung vào “người mua nặng ký”.',
        '<b>Cablecom</b> (Thuỵ Sĩ): dùng dữ liệu giảm hỏng hóc từ 20% xuống 5%/năm.',
        '<b>Royal Shakespeare Company</b>: phân tích đặt vé online gần một thập kỷ, tăng khách thường xuyên lên hơn 2/3.',
        '<b>eBay</b>: dùng mật độ quan tâm để định giá lại theo thời gian thực. Quảng cáo internet chiếm thị phần tăng nhanh nhất (~40%) vì đo lường dễ, sửa thông điệp nhanh.'
      ] },
      { t: 'h3', x: 'Mối đe doạ mới và cơ hội cũ' },
      { t: 'list', items: [
        'Đối thủ mới từ khắp nơi, kể cả công ty nhỏ ở nước ngoài tấn công qua internet.',
        'Hiện diện trên internet gần như <b>bắt buộc</b>; không có website bị coi là lỗi thời và bỏ lỡ cơ hội (nhất là thị trường nông thôn).',
        'Nhân viên có thể bỏ đi tìm nơi “cập nhật” hơn; bỏ lỡ khoản tiết kiệm chi phí của thương mại điện tử.',
        'Internet <b>không thay thế</b> cơ hội cũ — nó chỉ thêm một tầng giá trị ẩn mới (như phục hồi các “dự án nhỏ”). Sân chơi trở nên bình đẳng hơn: Lloyd’s of London 300 năm tuổi bị bán bảo hiểm trực tiếp qua internet/điện thoại thách thức.'
      ] },
      { t: 'key', x: 'Một điều kiện thành công của chiến lược marketing là <b>rào cản thâm nhập</b> đối với người mới. Internet đã hạ thấp rào cản đó, vì vậy lợi thế phải đến từ sự khác biệt thực sự, không phải “được nối mạng”.' }
    ] }
  ],
  summary: [
    'Marketing = đưa đúng sản phẩm, đúng dịch vụ, đúng thị trường, đúng thời điểm, đúng giá.',
    'Hai loại thị trường: hàng tiêu dùng (B2C) và doanh nghiệp (B2B); B2B lớn và nhiều lợi nhuận hơn.',
    'Marketing hỗn hợp: 4P (giá, sản phẩm, xúc tiến, điểm bán) + People; là các yếu tố công ty kiểm soát được.',
    'Yếu tố không kiểm soát: kinh tế, pháp luật, đối thủ mới, công nghệ.',
    'Internet thay đổi chiều sâu (richness) và độ lan tỏa (reach) của thông tin, mở ra dữ liệu thời gian thực và marketing lan truyền.',
    'Internet hạ rào cản thâm nhập; công nghệ không thay thế được giá trị khác biệt và mô hình kinh doanh bền (bài học Boo.com).'
  ],
  cards: [
    ['Định nghĩa marketing của chương 1?', 'Quy trình đưa đúng hàng hoá/dịch vụ đến đúng thị trường, đúng thời điểm, đúng giá. Từ khoá: “đúng”.'],
    ['Philip Kotler nổi tiếng với gì?', 'Hai giáo trình kinh điển: Nguyên lý marketing và Quản trị Marketing (Kellogg School).'],
    ['B2C khác B2B thế nào?', 'B2C: mua cho nhu cầu cá nhân. B2B: mua với kỳ vọng kiếm tiền, thường là mắt xích trong chuỗi; lớn và nhiều lợi nhuận hơn.'],
    ['4P của marketing hỗn hợp là gì?', 'Price (giá), Product (sản phẩm/dịch vụ), Promotion (xúc tiến), Place (điểm bán).'],
    ['“P” thứ năm thường được thêm?', 'People – con người.'],
    ['Ai chính thức hoá khái niệm marketing hỗn hợp, năm nào?', 'Jerome McCarthy (Michigan State University), năm 1960.'],
    ['Yếu tố nào KHÔNG kiểm soát được trong marketing?', 'Tình hình kinh tế, thay đổi pháp luật, đối thủ mới mạnh, thay đổi công nghệ nhanh.'],
    ['Richness (chiều sâu) và Reach (độ lan tỏa) nghĩa là gì?', 'Richness: chất lượng/mức phong phú thông tin (băng thông, tuỳ biến, tương tác, tin cậy, bảo mật, cập nhật). Reach: số người tiếp cận được.'],
    ['Internet thay đổi điều gì về nhu cầu của người tiêu dùng?', 'Không đổi nhu cầu (vĩnh cửu), chỉ đổi phương tiện đáp ứng.'],
    ['Vì sao nhiều công ty internet đầu tiên thất bại?', 'Không có điểm độc đáo ngoài việc “được nối mạng” nên phải cạnh tranh bằng giá với đối thủ lớn.'],
    ['Clicks and Bricks là gì?', 'Mô hình kết hợp cửa hàng thật (bricks) và thương mại điện tử (clicks).'],
    ['Marketing lan truyền (viral) là gì?', 'Thông tin sản phẩm lan nhanh kiểu truyền miệng trên internet; ví dụ Hotmail.'],
    ['Định luật Metcalfe?', 'Giá trị mạng điện thoại tăng theo số kết nối N(N−1) ≈ N² − N.'],
    ['Định luật Reed?', 'Với N người có thể lập 2^N − N − 1 nhóm khác nhau.'],
    ['Giới hạn của marketing lan truyền?', 'Chỉ hiệu quả khi sản phẩm tốt – không ai giới thiệu thứ họ không thích.'],
    ['Bài học từ Boo.com?', 'Đốt 89 triệu bảng trong <18 tháng; công nghệ hay không đủ nếu mô hình kinh doanh không bền.'],
    ['Lợi ích của đấu giá trực tuyến trong ví dụ Harold?', '>100 người tham gia (so ~50), bán và thu tiền trong vài ngày, không cần vị trí đắt đỏ.']
  ],
  quiz: [
    { q: 'Từ khoá trong định nghĩa marketing là:', o: ['Rẻ', 'Đúng', 'Nhanh', 'Nhiều'], a: 1, e: 'Đúng hàng, đúng dịch vụ, đúng thị trường, đúng thời điểm, đúng giá.' },
    { q: 'Thị trường B2B khác thị trường tiêu dùng ở chỗ:', o: ['Người mua kỳ vọng kiếm tiền', 'Nhỏ hơn', 'Đơn giản hơn', 'Không có lợi nhuận'], a: 0, e: 'B2B: cả hai bên kỳ vọng kiếm tiền và thường là mắt xích trong chuỗi.' },
    { q: '4P gồm:', o: ['Price, Product, Promotion, Place', 'People, Profit, Place, Plan', 'Product, Profit, Public, Price', 'Plan, Place, Price, People'], a: 0, e: 'Giá, sản phẩm, xúc tiến, điểm bán; People là P thứ năm.' },
    { q: 'Ai chính thức hoá khái niệm marketing hỗn hợp vào năm 1960?', o: ['Philip Kotler', 'Jerome McCarthy', 'Bob Metcalfe', 'Tim Berners-Lee'], a: 1, e: 'McCarthy, giáo sư Michigan State University.' },
    { q: 'Yếu tố nào KHÔNG thuộc marketing hỗn hợp mà công ty kiểm soát được?', o: ['Giá', 'Thay đổi pháp luật', 'Xúc tiến', 'Điểm bán'], a: 1, e: 'Pháp luật, kinh tế, đối thủ mới, công nghệ là yếu tố không kiểm soát.' },
    { q: 'Theo tác giả, internet đã thay đổi điều gì?', o: ['Nhu cầu cơ bản của con người', 'Phương tiện đáp ứng nhu cầu', 'Cả hai', 'Không gì cả'], a: 1, e: 'Nhu cầu là vĩnh cửu; chỉ phương tiện đáp ứng thay đổi.' },
    { q: 'Vì sao nhiều doanh nghiệp internet đầu tiên phải cạnh tranh bằng giá?', o: ['Họ có chi phí rất thấp', 'Không có gì độc đáo ngoài “được nối mạng”', 'Do chính phủ quy định', 'Do khách hàng nông thôn'], a: 1, e: 'Không khác biệt thì chỉ còn giá, mà doanh nghiệp nhỏ khó thắng cuộc chiến giá.' },
    { q: 'Hotmail là ví dụ cho:', o: ['Định giá hớt váng', 'Marketing lan truyền', 'Phân phối trực tiếp', 'Marketing B2B'], a: 1, e: 'Dòng quảng cáo ở cuối email của người dùng khiến khách hàng thay công ty bán hàng.' },
    { q: 'Điều kiện để marketing lan truyền hiệu quả là:', o: ['Ngân sách quảng cáo lớn', 'Sản phẩm thật sự tốt', 'Có nhiều đại lý', 'Giá thấp nhất'], a: 1, e: 'Không ai đề nghị người khác mua món họ không thích.' },
    { q: 'Mô hình “clicks and bricks” là:', o: ['Chỉ bán online', 'Chỉ có cửa hàng thật', 'Kết hợp cửa hàng thật và thương mại điện tử', 'Phân phối qua đại lý'], a: 2, e: 'Tận dụng niềm tin của cửa hàng thật cùng kênh online.' },
    { q: 'Bài học chính từ sự sụp đổ của Boo.com?', o: ['Internet không có tương lai', 'Công nghệ hay chưa đủ nếu mô hình kinh doanh không bền', 'Thời trang không bán online được', 'Nên bán rẻ hơn'], a: 1, e: 'Boo đốt 89 triệu bảng trong dưới 18 tháng.' },
    { q: 'Ví dụ Best Buy cho thấy dữ liệu khách hàng giúp:', o: ['Giảm giá toàn bộ', 'Phát hiện nhóm nhỏ khách mua phần lớn doanh số để tập trung phục vụ', 'Đóng cửa hàng', 'Tăng quảng cáo TV'], a: 1, e: '<10% khách tạo >40% doanh số.' },
    { q: 'Định luật nào nói giá trị mạng điện thoại tăng theo N(N−1)?', o: ['Sarnoff', 'Metcalfe', 'Reed', 'Pareto'], a: 1, e: 'Metcalfe cho mạng nhiều-nối-nhiều.' }
  ],
  match: [
    ['B2B', 'Doanh nghiệp bán cho doanh nghiệp'],
    ['4P', 'Giá, sản phẩm, xúc tiến, điểm bán'],
    ['Jerome McCarthy', 'Chính thức hoá marketing hỗn hợp (1960)'],
    ['Richness', 'Chiều sâu/độ phong phú của thông tin'],
    ['Reach', 'Số người tiếp cận được'],
    ['Viral marketing', 'Lan truyền như virus – ví dụ Hotmail'],
    ['Định luật Metcalfe', 'Giá trị mạng ~ N(N−1)'],
    ['Clicks and Bricks', 'Kết hợp online và cửa hàng thật'],
    ['Boo.com', 'Đốt 89 triệu bảng rồi sụp đổ'],
    ['Philip Kotler', 'Tác giả giáo trình marketing kinh điển']
  ]
});
