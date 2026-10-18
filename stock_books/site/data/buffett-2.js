// "Phong cách đầu tư Warren Buffett" – Chương 3–4.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.buffett = BOOK_DATA.buffett || { chapters: [] };
BOOK_DATA.buffett.chapters.push(

/* ======================= CHƯƠNG 3 ======================= */
{
  n: 3,
  title: '“Ngành kinh doanh chính của chúng tôi là bảo hiểm”',
  intro: 'Từ nhà máy dệt thua lỗ đến cỗ máy bảo hiểm: Buffett dùng “dòng tiền nổi” (float) của bảo hiểm làm nhiên liệu đầu tư cho Berkshire. Chương này kể về GEICO, General Re và vì sao bảo hiểm là ngành hàng hóa tiện nghi.',
  sections: [
    { icon: '🧵', title: 'Thuở ban đầu: dệt may và bài học', blocks: [
      { t: 'p', x: 'Khi Buffett kiểm soát Berkshire Hathaway (1965), cổ phiếu rớt xuống một nửa và kinh doanh thua lỗ. Điểm sáng duy nhất là danh mục cổ phiếu do Buffett quản lý: năm 1967, lãi từ đầu tư gấp ba tiền lãi của toàn bộ bộ phận dệt may.' },
      { t: 'list', items: [
        'Bản chất ngành dệt khiến lợi nhuận kém chắc chắn: <b>cạnh tranh từ nhân công rẻ</b> thu hẹp biên, và nhà máy cần cải thiện vốn liên tục trong môi trường lạm phát.',
        'Buffett nói sẽ không đóng cửa một công ty có tiềm năng lợi nhuận dưới mức bình thường — nhưng cũng không dồn thêm vốn. Tháng 7/1985 ông <b>chấm dứt</b> hoạt động dệt may.',
        '<b>Bài học</b>: (1) công ty hiếm khi thay đổi thành công; (2) tiền lãi từ dệt may đã tạo vốn đầu tiên để mua công ty bảo hiểm — câu chuyện tươi sáng hơn nhiều.'
      ] }
    ] },
    { icon: '💧', title: 'Bảo hiểm: float và chi phí thả nổi', blocks: [
      { t: 'p', x: 'Tháng 3/1967 Berkshire mua <b>National Indemnity</b> và <b>National Fire & Marine</b> (Omaha) với giá 8,6 triệu đô la.' },
      { t: 'key', x: 'Người giữ hợp đồng nộp <b>phí bảo hiểm</b> trước, công ty chỉ bồi thường sau — tạo ra dòng tiền mặt gọi là <b>“float” (dòng tiền nổi)</b>. Công ty giữ một phần làm dự trữ chi trả, và <b>đầu tư phần còn lại</b> (cổ phiếu, trái phiếu). Vì khó dự đoán chính xác khi nào phải bồi thường, các công ty thường đầu tư vào chứng khoán thanh khoản.' },
      { t: 'table', head: ['Khái niệm', 'Nghĩa'], rows: [
        ['<b>Chi phí thả nổi</b> (cost of float)', 'Tỷ lệ thua lỗ bảo hiểm so với phí thu được trong năm'],
        ['Chi phí = 0', 'Phí bằng bồi thường: <b>float miễn phí</b>'],
        ['Chi phí &lt; 0 (âm)', 'Có <b>lợi nhuận bảo hiểm</b> (underwriting profit): được trả tiền để giữ vốn'],
        ['Chi phí cao', 'Phí thu quá thấp hoặc bồi thường bất thường → float thành một khoản chi phí đắt']
      ] },
      { t: 'widget', name: 'insurance-float', title: 'Tính lợi nhuận bảo hiểm và chi phí float' },
      { t: 'tip', x: 'Chỉ trong hai năm sau 1967, danh mục chứng khoán của hai công ty tăng từ 31,9 lên ~42 triệu đô la. Thành công đó mở đường cho Buffett mở rộng: đến 2004 Berkshire có <b>38 công ty bảo hiểm</b>, gồm GEICO và General Re.' }
    ] },
    { icon: '🚗', title: 'GEICO', blocks: [
      { t: 'p', x: 'Buffett biết GEICO từ khi còn là sinh viên Columbia (thầy Graham là Tổng Giám đốc). Một sáng thứ Bảy ông gõ cửa văn phòng công ty đến khi bảo vệ cho vào, và được <b>Lorimer Davidson</b> dạy cả buổi về ngành bảo hiểm.' },
      { t: 'table', head: ['Thời điểm', 'Sự kiện'], rows: [
        ['Ý tưởng GEICO', '(1) Chỉ bảo hiểm người có hồ sơ tốt → ít bồi thường; (2) <b>bán trực tiếp</b>, không qua đại lý → giảm chi phí'],
        ['1951', 'Buffett viết bài về GEICO, đầu tư 10.282 đô la, bán sau một năm lãi 50%'],
        ['Giữa thập niên 1970', 'Công ty gần phá sản (mở rộng, bán hạ giá, tính sai dự trữ)'],
        ['<b>1976</b>', 'Cổ phiếu từ 61 xuống <b>2 đô la</b>; Buffett bắt đầu mua; qua 5 năm đầu tư <b>45,7 triệu đô la</b>'],
        ['1977 trở đi', 'Công ty có lãi; hai thập kỷ có tỷ lệ bảo hiểm dương (phí &gt; bồi thường)'],
        ['<b>1996</b>', 'Berkshire nắm 51%, mua nốt phần còn lại với <b>2,3 tỷ đô la</b> (khoảng 70 đô la/cổ phiếu so với 2 đô la ban đầu)'],
        ['1996–2003', 'Thị phần 2,7% → 5%; phí bảo hiểm 2,9 → 6,9 tỷ (2002); hợp đồng thứ 5 triệu (4/2003)']
      ] },
      { t: 'warn', x: 'Năm 2000 là thời gian khó: nhiều khách hàng chuyển sang nhà cung cấp khác và chiến dịch quảng cáo rầm rộ (~260 triệu đô la) thất bại. Nhưng niềm tin của Buffett vào nền tảng cơ bản được đền đáp.' },
      { t: 'mnemo', x: 'Bài học Munger: nếu muốn sở hữu những công ty có triển vọng nhất, <b>hãy sẵn sàng trả hết khi người ta sẵn sàng bán</b>. GEICO còn thể hiện sức mạnh của khách hàng trung thành và chi phí thấp: hệ thống thưởng của Buffett gắn một nửa tiền thưởng với những hợp đồng có từ một năm tuổi trở lên.' }
    ] },
    { icon: '🛡️', title: 'General Re và tập đoàn tái bảo hiểm', blocks: [
      { t: 'p', x: '<b>Tái bảo hiểm</b> là bảo hiểm cho các công ty bảo hiểm khác: công ty tái bảo hiểm chịu một tỷ lệ phần trăm rủi ro, nhận một phần phí. Năm 1998 Buffett mua <b>General Re</b> bằng khoảng <b>16 tỷ đô la cổ phiếu Berkshire</b> — thương vụ lớn nhất lịch sử Berkshire lúc đó; General Re chủ yếu đầu tư vào trái phiếu (19 tỷ trái phiếu, 5 tỷ cổ phiếu, 15 tỷ float).' },
      { t: 'steps', items: [
        '<b>Sai lầm:</b> General Re <b>bán hợp đồng dưới giá</b> (phí quá thấp so với rủi ro) dù ai cũng thấy lúc đầu không bất thường.',
        '1999: bồi thường từ thảm họa thiên nhiên (mưa đá Úc, động đất Thổ Nhĩ Kỳ, bão châu Âu), vụ cháy nhà lớn, vụ phá sản một công ty chiếu phim, vụ bồi thường công nhân… ~275 triệu đô la trong hai năm 1998–1999.',
        '2000: lỗ bảo hiểm 1,6 tỷ đô la, chi phí float lên 6%.',
        '<b>11/9/2001</b>: Berkshire ước tính bồi thường 2,275 tỷ đô la, trong đó 1,7 tỷ của General Re.',
        'Sau đó GenRe định giá chặt hơn, giữ dự trữ đủ. <b>2002</b> báo lợi nhuận bảo hiểm đầu tiên sau 5 năm lỗ; Buffett: “Chúng ta đã trở lại.”'
      ] },
      { t: 'key', x: 'Buffett thừa nhận lỗi định giá thấp, nhưng giữ kết luận cơ bản: một công ty tái bảo hiểm quản lý tốt tạo ra <b>giá trị khổng lồ</b>. Bản năng của ông là khắc phục vấn đề chứ không bỏ công ty đi.' },
      { t: 'h3', x: 'Tập đoàn tái bảo hiểm Berkshire (Ajit Jain)' },
      { t: 'list', items: [
        'Dẫn đầu bởi <b>Ajit Jain</b> (sinh ở Ấn Độ, học IIT và Harvard; gia nhập 1982 mà “không biết tái bảo hiểm là gì”).',
        'Nhờ sức mạnh tài chính Berkshire, họ nhận các hợp đồng đặc biệt mà các hãng khác không dám đụng: ví dụ bảo hiểm cho siêu sao bóng chày Alex Rodriguez hay một khoản thanh toán 1 tỷ đô la cho tấm vé số trên Internet.',
        '<b>2003</b>: phí bảo hiểm thu 4,43 tỷ đô la; float khoảng 14 tỷ; chi phí float <b>−3%</b> (lợi nhuận bảo hiểm hơn 1 tỷ đô la; so với GEICO 452 triệu, General Re 145 triệu).'
      ] }
    ] },
    { icon: '📦', title: 'Bảo hiểm là hàng hóa tiện nghi', blocks: [
      { t: 'p', x: 'Các công ty bảo hiểm bán sản phẩm <b>không phân biệt được với đối thủ</b>: hợp đồng chuẩn hóa, không thương hiệu, bằng sáng chế hay lợi thế đặc thù; xin giấy phép dễ, tỷ lệ bảo hiểm là “cuốn sách công cộng”. Đó là <b>hàng hóa tiện nghi (commodity)</b>.' },
      { t: 'key', x: 'Với hàng hóa tiện nghi, cách giành thị phần thường là <b>giảm giá</b>. Buffett không cạnh tranh về giá. Thay vào đó ông tạo khác biệt bằng: (1) <b>sức mạnh tài chính</b> (Berkshire xếp thứ hai sau AIG trong tái bảo hiểm tổn thất bất động sản; danh mục đầu tư 35,2 tỷ so với phí 8,1 tỷ cao hơn mức trung bình ngành) và (2) <b>triết lý định giá</b>: luôn sẵn sàng nhận khối lượng lớn nhưng <b>chỉ ở mức giá chấp nhận được</b>; nếu giá thấp thì chấp nhận hạn chế kinh doanh.' },
      { t: 'warn', x: 'Buffett: bạn luôn có thể nhận bán hợp đồng bảo hiểm với giá thấp, nhưng ngày đầu tiên thu phí cũng là lần cuối bạn thấy khoản tiền mới — sau đó mọi thứ chỉ chảy ra. Ngoại lệ duy nhất vi phạm triết lý (General Re) từng ảnh hưởng nặng kết quả vài năm.' },
      { t: 'tip', x: 'Float từ tập đoàn bảo hiểm sinh dòng tiền mặt khoảng <b>44,2 tỷ đô la (2003)</b>. Buffett làm gì với số tiền ấy — mua cả doanh nghiệp — là chủ đề chương 4.' }
    ] }
  ],
  summary: [
    'Dệt may thất bại, nhưng tiền lãi mua được công ty bảo hiểm — nền móng của Berkshire.',
    'Float: phí bảo hiểm thu trước, đầu tư trong thời gian chờ bồi thường. Chi phí float âm = lợi nhuận bảo hiểm.',
    'GEICO: hồ sơ tốt + bán trực tiếp; Buffett mua khi giá rớt còn 2 đô la, sau đó mua trọn 2,3 tỷ đô la (1996).',
    'General Re: mua ~16 tỷ đô la cổ phiếu; sai lầm định giá thấp hợp đồng gây thua lỗ 5 năm, phục hồi 2002.',
    'Bảo hiểm là hàng hóa tiện nghi: Buffett không cạnh tranh giá mà dùng sức mạnh tài chính và kỷ luật định giá.'
  ],
  cards: [
    ['Dệt may Berkshire: vì sao Buffett bỏ?', 'Cạnh tranh nhân công rẻ thu hẹp biên lợi nhuận, cần nhiều vốn cải thiện nhà máy trong môi trường lạm phát.'],
    ['Bảo hiểm Buffett mua đầu tiên (1967)?', 'National Indemnity và National Fire & Marine (Omaha), giá 8,6 triệu đô la.'],
    ['Float là gì?', 'Dòng tiền mặt phí bảo hiểm nhận trước khi bồi thường; công ty giữ dự trữ và đầu tư phần còn lại.'],
    ['Chi phí float?', 'Tỷ lệ bồi thường/phí; bằng 0: float miễn phí; âm: có lợi nhuận bảo hiểm.'],
    ['Vì sao GEICO có chi phí thấp?', 'Chỉ bảo hiểm người có hồ sơ tốt và bán trực tiếp, không qua đại lý.'],
    ['Buffett bắt đầu mua GEICO khi nào và giá?', '1976, khi giá rớt từ 61 xuống 2 đô la/cổ phiếu.'],
    ['Berkshire mua nốt GEICO năm 1996 với giá?', '2,3 tỷ đô la (khoảng 70 đô la/cổ phiếu).'],
    ['Hệ thống thưởng GEICO của Buffett?', 'Một nửa thưởng dựa trên hợp đồng có từ một năm tuổi, nửa còn lại dựa trên sự gia tăng người tham gia.'],
    ['Tái bảo hiểm là gì?', 'Bảo hiểm cho các công ty bảo hiểm khác, chịu một tỷ lệ rủi ro và nhận phần phí.'],
    ['Sai lầm của General Re?', 'Bán hợp đồng dưới giá (phí quá thấp so với rủi ro) → thua lỗ nhiều năm.'],
    ['Thiệt hại 11/9 với Berkshire?', 'Ước tính 2,275 tỷ đô la bồi thường, trong đó 1,7 tỷ của General Re.'],
    ['Ajit Jain là ai?', 'Người đứng đầu tập đoàn tái bảo hiểm Berkshire, nhận các hợp đồng đặc biệt mà hãng khác ngại.'],
    ['Vì sao bảo hiểm là hàng hóa tiện nghi?', 'Hợp đồng chuẩn hóa, không thương hiệu hay bằng sáng chế, dễ xin giấy phép.'],
    ['Buffett tạo khác biệt cho bảo hiểm bằng gì?', 'Sức mạnh tài chính và kỷ luật định giá: chỉ nhận hợp đồng ở mức giá chấp nhận được.']
  ],
  quiz: [
    { q: 'Float trong bảo hiểm là:', o: ['Lợi nhuận ròng', 'Dòng tiền phí bảo hiểm thu trước khi phải bồi thường, có thể đầu tư', 'Cổ tức', 'Nợ ngân hàng'], a: 1, e: 'Công ty giữ dự trữ và đầu tư phần còn lại.' },
    { q: 'Chi phí float âm nghĩa là:', o: ['Công ty lỗ bảo hiểm', 'Có lợi nhuận bảo hiểm', 'Không có float', 'Phí quá thấp'], a: 1, e: 'Phí thu vượt xa bồi thường.' },
    { q: 'Vì sao Buffett bỏ ngành dệt may?', o: ['Quá lãi', 'Cạnh tranh nhân công rẻ, cần nhiều vốn, biên thu hẹp', 'Không ai mua', 'Luật cấm'], a: 1, e: 'Ông chấm dứt năm 1985.' },
    { q: 'Hai ý tưởng cơ bản của GEICO:', o: ['Bảo hiểm mọi người, qua đại lý', 'Chỉ bảo hiểm người hồ sơ tốt và bán trực tiếp', 'Chỉ bảo hiểm xe sang', 'Không có dự trữ'], a: 1, e: 'Giảm bồi thường và chi phí.' },
    { q: 'Buffett mua GEICO năm 1976 khi giá cổ phiếu:', o: ['61 đô la', '2 đô la', '25 đô la', '100 đô la'], a: 1, e: 'Giảm từ 61 xuống 2 đô la.' },
    { q: 'Berkshire mua trọn GEICO năm 1996 với:', o: ['230 triệu đô la', '2,3 tỷ đô la', '16 tỷ đô la', '45 triệu đô la'], a: 1, e: 'Sau khi đã nắm 51%.' },
    { q: 'Sai lầm lớn của General Re là:', o: ['Đầu tư công nghệ', 'Bán hợp đồng bảo hiểm dưới giá', 'Mua nhiều bất động sản', 'Quá thận trọng'], a: 1, e: 'Dẫn đến lỗ bảo hiểm nhiều năm.' },
    { q: 'General Re báo lợi nhuận bảo hiểm đầu tiên sau 5 năm lỗ vào:', o: ['1999', '2000', '2002', '1996'], a: 2, e: 'Buffett: “Chúng ta đã trở lại.”' },
    { q: 'Tái bảo hiểm nghĩa là:', o: ['Bảo hiểm nhân thọ', 'Bảo hiểm cho các công ty bảo hiểm khác', 'Bảo hiểm xe', 'Gửi tiết kiệm'], a: 1, e: 'Chịu một tỷ lệ rủi ro.' },
    { q: 'Vì sao bảo hiểm là hàng hóa tiện nghi?', o: ['Có bằng sáng chế mạnh', 'Sản phẩm chuẩn hóa, khó phân biệt, dễ sao chép', 'Giá luôn cao', 'Có ít đối thủ'], a: 1, e: 'Không có thương hiệu hay lợi thế đặc thù.' },
    { q: 'Cách Buffett tạo khác biệt trong bảo hiểm:', o: ['Giảm giá mạnh', 'Sức mạnh tài chính và kỷ luật định giá', 'Quảng cáo nhiều', 'Bán sản phẩm khác'], a: 1, e: 'Chấp nhận hạn chế kinh doanh nếu giá thấp.' }
  ],
  match: [
    ['Float', 'Phí bảo hiểm thu trước, đầu tư trong lúc chờ bồi thường'],
    ['GEICO', 'Bảo hiểm xe bán trực tiếp, hồ sơ tốt'],
    ['General Re', 'Mua ~16 tỷ đô la cổ phiếu; sai lầm định giá thấp'],
    ['Ajit Jain', 'Đứng đầu tập đoàn tái bảo hiểm Berkshire'],
    ['Hàng hóa tiện nghi', 'Sản phẩm khó phân biệt; cạnh tranh bằng giá'],
    ['11/9', 'Bồi thường 2,275 tỷ đô la cho Berkshire']
  ]
},

/* ======================= CHƯƠNG 4 ======================= */
{
  n: 4,
  title: 'Mua một doanh nghiệp',
  intro: 'Buffett nhìn cổ phiếu và công ty như nhau: mua cổ phiếu là mua một doanh nghiệp. Chương này đi qua những thương vụ mua lại (See’s, Nebraska Furniture Mart, Clayton Homes…) và cổ phiếu (Coca-Cola, Gillette, Washington Post, Wells Fargo), rồi giới thiệu 12 nguyên lý của “Phong cách đầu tư Warren Buffett”.',
  sections: [
    { icon: '🏢', title: 'Tư duy chủ sở hữu', blocks: [
      { t: 'key', x: 'Buffett tin <b>không có khác biệt cơ bản</b> giữa mua lại toàn bộ công ty và mua cổ phiếu: cả hai đều khiến ông trở thành <b>chủ sở hữu</b>, nên cả hai quyết định đều xuất phát từ quan điểm người chủ. <b>Mua cổ phiếu có nghĩa là mua một doanh nghiệp.</b>' },
      { t: 'p', x: 'Ông ưu tiên sở hữu trực tiếp vì có thể tác động vấn đề then chốt: <b>phân bổ nguồn vốn</b>. Nhưng khi cổ phiếu thể hiện giá trị tốt hơn, ông chọn sở hữu một phần công ty qua cổ phiếu thường.' },
      { t: 'mnemo', x: '“Tất cả những gì chúng tôi muốn là đầu tư vào những công ty chúng tôi <b>hiểu biết</b>, do những người chúng tôi <b>yêu quý</b> điều hành, và chào giá <b>hấp dẫn</b>, cân xứng với triển vọng tương lai.” — Warren Buffett' },
      { t: 'list', items: [
        'Tìm công ty ông biết rõ: <b>lịch sử lợi nhuận ổn định</b>, triển vọng dài hạn, lợi nhuận trên vốn tốt với <b>nợ thấp</b>, <b>ban quản lý có năng lực và trung thực</b>, và luôn <b>giá hấp dẫn</b>.',
        'Ông đăng “quảng cáo cần mua” ngay trong báo cáo thường niên: doanh nghiệp đơn giản, dễ hiểu; doanh lợi ổn định; lợi nhuận trên vốn tốt; nợ ít; ban quản lý tốt; quy mô 5–20 tỷ đô la; không quan tâm thương vụ thù địch hay giá chưa xác định; hứa bảo mật và phản hồi nhanh.'
      ] }
    ] },
    { icon: '🍫', title: 'Những thương vụ mua lại công ty', blocks: [
      { t: 'table', head: ['Công ty', 'Chi tiết đáng nhớ'], rows: [
        ['<b>See’s Candy</b> (1972)', '30 triệu đô la, gấp <b>3 lần giá trị sổ sách</b> — lần đầu Buffett rời bỏ châm ngôn “chỉ mua công ty bị định giá thấp” của Graham. Năm 2003 lợi nhuận trước thuế 59 triệu đô la (~2 lần giá mua). Munger: “Đó là lần đầu tiên chúng tôi chi tiền cho chất lượng.” Buffett: “Nếu không mua See’s, chúng ta cũng sẽ không mua Coke.”'],
        ['<b>Nebraska Furniture Mart</b> (1983)', '55 triệu đô la mua 80% từ bà Rose Blumkin (người Nga nhập cư, bán đồ ở tầng hầm). Bà dạy: nếu bán giá thấp, khách hàng sẽ tìm đến bạn bằng mọi cách.'],
        ['<b>Scott & Fetzer</b> (1986)', '315 triệu đô la tiền mặt; tập đoàn 21 công ty nhỏ (hút bụi Kirby, bách khoa World Book). Mô hình điển hình Buffett thích: lợi nhuận trên vốn cổ phần cao mà nợ không đáng kể (ông tính ROE có thể vào top 1% bảng Fortune 500).'],
        ['<b>Các thương vụ 2000–2003</b>', 'Fruit of the Loom (835 tr), Garan (270 tr), Mitek (400 tr; 55 nhà quản lý giữ 10%), Larson-Juhl (225 tr), CORT (467 tr), Ben Bridge Jeweler, Justin Industries (600 tr), Benjamin Moore (1 tỷ), Shaw Industries (2 tỷ; công ty lớn nhất ngoài bảo hiểm của Berkshire, lợi nhuận 2003 là 436 triệu đô la)']
      ] },
      { t: 'h3', x: 'Clayton Homes (2003): 1,7 tỷ đô la' },
      { t: 'p', x: 'James Clayton khởi nghiệp nhà di động từ 25 triệu đô la đi vay; công ty phát triển thành một trong những nhà sản xuất lớn nhất nước Mỹ (~1,2 tỷ đô la doanh thu 2003). Buffett từng mua cổ phiếu Oakwood Homes nên có kinh nghiệm ngành. Sau khi đọc tự truyện của Clayton do nhóm sinh viên MBA Tennessee tặng, ông gọi cho con trai Kevin (CEO), và hai tuần sau thông báo mua lại. Ông nói về Jim Clayton: “vừa có năng lực vừa là thợ săn thẳng thắn”.' },
      { t: 'h3', x: 'McLane (2003)' },
      { t: 'p', x: 'Nhà phân phối lớn nhất Mỹ cho cửa hàng tiện lợi (hệ thống phần mềm giá, cước, vận chuyển hiệu quả). Mua với <b>1,45 tỷ đô la tiền mặt cộng 1,2 tỷ đô la nợ</b>; sau mua còn thắng thêm hợp đồng với các đối thủ của Wal-Mart (Target, Dollar General). Ông thích công ty điều hành tốt dựa trên nguyên lý bền vững.' },
      { t: 'h3', x: 'The Pampered Chef (2002)' },
      { t: 'p', x: 'Doris Christopher khởi nghiệp 1980 từ tầng hầm với 3.000 đô la vay; bán đồ dùng nấu bếp qua các buổi tiệc ở nhà. Đến 2002: 71.000 “nhà tư vấn bếp núc”, hơn 1 triệu chương trình biểu diễn, doanh thu 730 triệu đô la; món nợ duy nhất là 3.000 đô la ban đầu. Buffett mất khoảng <b>10 giây</b> để quyết định hai nhà quản lý này đáng hợp tác, mua với khoảng 900 triệu đô la.' },
      { t: 'tip', x: 'Ba tiêu chuẩn khi mua công ty: <b>loại công ty ông hiểu</b>, <b>hoạt động kinh doanh tốt</b>, và <b>nhà quản lý đáng tin cậy</b>. Cũng là tiêu chuẩn khi mua cổ phiếu.' }
    ] },
    { icon: '🥤', title: 'Những cổ phiếu tiêu biểu', blocks: [
      { t: 'p', x: 'Cuối 2003, danh mục cổ phiếu thường của Berkshire hơn 35 tỷ đô la (lãi ~27 tỷ): 200 triệu cổ phiếu Coca-Cola, 96 triệu Gillette, 56 triệu Wells Fargo. “Không có gì bí mật, không có gì công nghệ cao.” Niềm tin của Buffett: <b>sẽ vô ích nếu đầu tư vào thứ không hiểu</b>, vì bạn không thể biết nó đáng giá bao nhiêu hay theo dõi nó hoạt động ra sao.' },
      { t: 'tabs', items: [
        ['🥤 Coca-Cola (1988)', 'Buffett uống lon Coke đầu tiên lúc 5 tuổi, mua 6 lon giá 25 xu bán lại 5 xu/lon. Quan sát tăng trưởng của Coke suốt 50 năm nhưng chỉ <b>mua cổ phiếu lần đầu mùa hè 1988</b> (kể cả khi 1986 đã công bố Cherry Coke là đồ uống chính thức tại đại hội). Sức mạnh: nhãn hiệu + <b>hệ thống phân phối vô địch</b>; 2003 bán 19 tỷ thùng; doanh thu quốc tế chiếm 69%, lợi nhuận 80%. Buffett: công ty tốt nhất để sở hữu là công ty có thể dùng lượng vốn lớn với tỷ lệ lợi tức rất cao.'],
        ['🪒 Gillette (1989)', 'Từ nhà sản xuất tiêu dùng “chín muồi” (biên 9–11%) → sau vụ chống mua lại của Coniston (1988) vốn ròng âm. Buffett gọi bạn cũ trong Hội đồng và mua <b>600 triệu đô la cổ phiếu ưu đãi chuyển đổi 8,75%</b>, đổi sang cổ phiếu thường giá 50 đô la. Sản phẩm <b>Sensor</b> thành công → biên trước thuế 12% → 15%, ROE đạt ~40%; Berkshire thu 12 triệu cổ phiếu thường (11%); chỉ hơn hai năm 600 triệu thành 875 triệu. Lưỡi dao chỉ chiếm 1/3 doanh thu nhưng 2/3 lợi nhuận; thị phần toàn cầu 72,5%. Buffett: “Chúng ta có thể vui vẻ đi ngủ mỗi tối khi biết có 2,5 tỷ người đàn ông sẽ phải cạo râu vào sáng hôm sau.”'],
        ['📰 Washington Post (1973)', 'Công ty báo chí/truyền hình/cáp/tạp chí (Newsweek) và Kaplan (luyện thi). Giai đoạn thị trường ảm đạm 1973 (Dow giảm), Buffett <b>âm thầm mua 467.150 cổ phiếu giá bình quân 22,75 đô la</b> (10,6 triệu đô la). Ông trao quyền biểu quyết của Berkshire cho gia đình Graham để Katherine yên tâm, vào Hội đồng Quản trị (1974), dạy Katherine và con trai Don điều hành. Berkshire chưa từng bán cổ phiếu nào; cổ phiếu hạng B năm 2004 hơn 900 đô la — khoản đầu tư tăng hơn <b>15 lần</b> (hơn 1 tỷ đô la).'],
        ['🏦 Wells Fargo (1990)', 'Mua 5 triệu cổ phiếu bình quân 57,88 đô la (289 triệu đô la), thành cổ đông lớn nhất (10%). Lúc đó cổ phiếu rớt từ 86 do nỗi lo cho vay bất động sản California — nhiều “con gấu” cược sẽ giảm 49% nữa. Buffett mua thêm; cuối 2003 sở hữu hơn 56 triệu cổ phiếu, thị giá 4,6 tỷ (vốn 2,8 tỷ); Moody’s xếp hạng AAA.']
      ] },
      { t: 'key', x: 'Điều tiêu biểu nhất: <b>khi sở hữu cổ phiếu, bạn sở hữu công ty chứ không phải một mẩu giấy</b>. Hiểu chức năng hoạt động, quan hệ lao động, chi phí nguyên liệu, nhà máy, yêu cầu tái đầu tư vốn, hàng tồn kho, vốn lưu động… Graham: “Công việc đầu tư thông minh nhất khi nó thực dụng nhất.” Buffett: “Tôi là nhà đầu tư giỏi hơn vì tôi là doanh nhân, và tôi là doanh nhân giỏi hơn vì tôi là nhà đầu tư.”' }
    ] },
    { icon: '📋', title: '12 nguyên lý Phong cách đầu tư Warren Buffett', blocks: [
      { t: 'p', x: 'Buffett nói: “Khi đầu tư, chúng tôi coi mình là các nhà phân tích kinh doanh, không phải nhà phân tích thị trường, vĩ mô hay chứng khoán.” Các nguyên lý chia thành bốn nhóm (Chương 5–8):' },
      { t: 'table', head: ['Nhóm', 'Câu hỏi then chốt'], rows: [
        ['<b>Kinh doanh</b>', '1. Mô hình kinh doanh có đơn giản, dễ hiểu? 2. Có lịch sử hoạt động hợp lý? 3. Có triển vọng dài hạn?'],
        ['<b>Quản lý</b>', '4. Quản lý có hợp lý (lý trí)? 5. Ban quản lý có công bằng với cổ đông? 6. Có chống lại được “tính cưỡng chế tổ chức” (institutional imperative)?'],
        ['<b>Tài chính</b>', '7. Lợi nhuận trên vốn cổ phần (ROE)? 8. “Lợi nhuận chủ sở hữu” (owner earnings)? 9. Lợi nhuận biên? 10. Mỗi đô la giữ lại có tạo ít nhất một đô la giá trị thị trường?'],
        ['<b>Giá trị</b>', '11. Giá trị của công ty là gì? 12. Có được bán với giá chiết khấu đáng kể so với giá trị?']
      ] },
      { t: 'widget', name: 'buffett-checklist', title: 'Bảng kiểm 12 nguyên lý: chấm điểm một công ty bạn đang xem xét' }
    ] }
  ],
  summary: [
    'Mua cổ phiếu = mua doanh nghiệp; áp dụng tư duy chủ sở hữu cho cả hai.',
    'Tiêu chuẩn: doanh nghiệp đơn giản, lợi nhuận ổn định, ROE tốt, nợ thấp, ban quản lý tốt, giá hấp dẫn.',
    'See’s Candy là bước ngoặt: trả giá cao cho chất lượng. Các thương vụ Clayton, McLane, Pampered Chef cho thấy con người quản lý là then chốt.',
    'Cổ phiếu tiêu biểu: Coca-Cola, Gillette, Washington Post, Wells Fargo — đều đơn giản, dễ hiểu, thương hiệu/mạnh, mua khi thị trường sợ hãi.',
    '12 nguyên lý chia 4 nhóm: kinh doanh, quản lý, tài chính, giá trị.'
  ],
  cards: [
    ['Khác biệt giữa mua công ty và mua cổ phiếu theo Buffett?', 'Không có khác biệt cơ bản: cả hai đều là trở thành chủ sở hữu.'],
    ['Vì sao Buffett ưu tiên sở hữu trực tiếp?', 'Có thể tác động phân bổ nguồn vốn, vấn đề then chốt của một công ty.'],
    ['Ba chữ “hiểu – yêu – hấp dẫn” của Buffett?', 'Đầu tư vào công ty hiểu biết, do người yêu quý điều hành, với giá hấp dẫn cân xứng triển vọng.'],
    ['See’s Candy ý nghĩa gì?', 'Lần đầu Buffett trả giá gấp 3 lần giá trị sổ sách cho chất lượng (30 triệu đô la), rời châm ngôn của Graham.'],
    ['Bài học của Bà B (Rose Blumkin)?', 'Nếu bán giá thấp, khách hàng sẽ tìm đến bạn.'],
    ['Scott & Fetzer mua bao nhiêu, gồm gì?', '315 triệu đô la tiền mặt (1986); 21 công ty nhỏ, gồm hút bụi Kirby và bách khoa World Book.'],
    ['Clayton Homes: vì sao mua nhanh?', 'Buffett có kinh nghiệm ngành (Oakwood), tin vào Jim/Kevin Clayton qua tự truyện và báo cáo công khai.'],
    ['Pampered Chef: Buffett quyết định trong bao lâu?', 'Khoảng 10 giây để thấy hai nhà quản lý đáng hợp tác.'],
    ['Buffett mua Coca-Cola khi nào?', 'Mùa hè 1988, dù đã quan sát công ty hơn 50 năm.'],
    ['Sức mạnh của Gillette?', 'Thị phần toàn cầu 72,5%; lưỡi dao 1/3 doanh thu nhưng 2/3 lợi nhuận; sản phẩm Sensor đẩy ROE ~40%.'],
    ['Buffett đầu tư vào Gillette bằng gì?', '600 triệu đô la cổ phiếu ưu đãi chuyển đổi 8,75%, đổi thành cổ phiếu thường giá 50 đô la.'],
    ['Washington Post: giá mua và kết quả?', '467.150 cổ phiếu giá bình quân 22,75 đô la (1973); tăng hơn 15 lần, chưa bán cổ phiếu nào.'],
    ['Wells Fargo: Buffett mua khi nào, vì sao dám?', '1990, khi cổ phiếu rớt từ 86 do lo ngại bất động sản California; ngân hàng có hoạt động bất động sản có lãi nhất.'],
    ['“Chủ sở hữu cổ phiếu” khác “giữ mẩu giấy” thế nào?', 'Chủ sở hữu hiểu hoạt động doanh nghiệp, không cư xử như thể giá thị trường phản ánh chính xác giá trị.'],
    ['Bốn nhóm 12 nguyên lý?', 'Kinh doanh, quản lý, tài chính, giá trị.']
  ],
  quiz: [
    { q: 'Theo Buffett, mua cổ phiếu có nghĩa là:', o: ['Mua một mẩu giấy', 'Mua một doanh nghiệp', 'Đánh cược giá', 'Giao dịch ngắn hạn'], a: 1, e: 'Phải áp dụng tư duy chủ sở hữu.' },
    { q: 'See’s Candy khác thường vì Buffett:', o: ['Mua dưới giá trị sổ sách', 'Trả giá gấp 3 giá trị sổ sách cho chất lượng', 'Bán lại ngay', 'Mua bằng cổ phiếu'], a: 1, e: 'Munger: lần đầu chi tiền cho chất lượng.' },
    { q: 'Bà Rose Blumkin dạy Buffett:', o: ['Bán giá cao', 'Nếu bạn bán giá thấp, khách hàng sẽ tìm bạn', 'Không dùng quảng cáo', 'Mua nhiều cổ phiếu'], a: 1, e: 'Nebraska Furniture Mart.' },
    { q: 'Scott & Fetzer được mua với giá:', o: ['31,5 triệu', '315 triệu đô la', '3,15 tỷ', '50 triệu'], a: 1, e: 'Năm 1986, tiền mặt.' },
    { q: 'Buffett mua Coca-Cola lần đầu vào:', o: ['1962', '1973', '1988', '2003'], a: 2, e: 'Dù đã quan sát từ nhỏ.' },
    { q: 'Gillette: sản phẩm giúp công ty bứt phá là:', o: ['Sensor', 'Kirby', 'Cherry Coke', 'Geico'], a: 0, e: 'ROE ~40%.' },
    { q: 'Buffett đầu tư vào Gillette bằng:', o: ['Cổ phiếu thường', 'Cổ phiếu ưu đãi chuyển đổi 8,75%', 'Trái phiếu chính phủ', 'Tiền gửi'], a: 1, e: '600 triệu đô la, 1989.' },
    { q: 'Washington Post (1973): Buffett đã:', o: ['Bán sớm', 'Mua âm thầm khi thị trường ảm đạm và chưa từng bán', 'Chỉ mua cổ phiếu hạng A', 'Mua thù địch'], a: 1, e: 'Khoản đầu tư tăng hơn 15 lần.' },
    { q: 'Wells Fargo bị nhiều người “bán khống” vì lo về:', o: ['Công nghệ', 'Cho vay bất động sản California', 'Lạm phát', 'Thuế'], a: 1, e: 'Buffett vẫn mua và giữ.' },
    { q: 'Buffett nói “công ty tốt nhất để sở hữu” là:', o: ['Công ty không cần vốn', 'Công ty có thể tận dụng lượng vốn lớn với lợi tức rất cao', 'Công ty công nghệ', 'Công ty đầu cơ'], a: 1, e: 'Coca-Cola là ví dụ.' },
    { q: 'Nhóm nguyên lý nào gồm “giá trị của công ty là gì?”', o: ['Kinh doanh', 'Quản lý', 'Tài chính', 'Giá trị'], a: 3, e: 'Cùng với câu hỏi chiết khấu so với giá trị.' }
  ],
  match: [
    ['See’s Candy', 'Trả gấp 3 giá trị sổ sách cho chất lượng'],
    ['Coca-Cola', 'Mua 1988, hệ thống phân phối vô địch'],
    ['Gillette', 'Cổ phiếu ưu đãi chuyển đổi 8,75%, Sensor'],
    ['Washington Post', 'Mua 1973 giá 22,75 đô la'],
    ['Wells Fargo', 'Mua 1990 khi rớt từ 86 đô la'],
    ['Pampered Chef', 'Buffett quyết định trong ~10 giây']
  ]
}

);
