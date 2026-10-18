// Tự học MBA Marketing trong 30 ngày – Chương 7.
BOOK_DATA.mba30.chapters.push({
  n: 7,
  title: 'Định giá',
  intro: 'Định giá nối kinh tế học (cầu), kế toán (chi phí) và chiến lược marketing. Chương này dạy độ co giãn của cầu, cấu trúc thị trường, chi phí cố định/biến đổi, điểm hoà vốn và các chiến lược định giá.',
  sections: [
    { icon: '🎓', title: 'Định giá nhìn từ trường kinh doanh', blocks: [
      { t: 'p', x: 'Tại Wharton, Giáo sư Jagmohan Raju dạy 4 ngày liền về chiến lược định giá (sản phẩm mới, vòng đời ngắn, định giá động, gói sản phẩm). Cách tiếp cận <b>hệ thống</b> giảm đáng kể khoản lỗ so với cách “thử và sai” mà đa số doanh nghiệp vẫn dùng.' },
      { t: 'table', head: ['Môn học', 'Đóng góp cho định giá'], rows: [
        ['Kinh tế học', 'Bức tranh lớn: yếu tố ảnh hưởng nhu cầu, cấu trúc thị trường, cạnh tranh'],
        ['Kế toán', 'Cơ cấu chi phí và sự thay đổi theo khối lượng → định giá mục tiêu để đạt lợi nhuận mong muốn'],
        ['Chiến lược marketing', 'Khuôn khổ cho chính sách và thủ tục định giá'],
        ['Kết hợp cả ba', 'Loại bỏ sản phẩm/dịch vụ không thể đạt mức giá đáp ứng mục tiêu lợi nhuận']
      ] }
    ] },
    { icon: '📉', title: 'Độ co giãn của cầu theo giá', blocks: [
      { t: 'key', x: 'Khái niệm cốt lõi: giá càng cao thì bán càng ít. <b>Độ co giãn của cầu = % thay đổi lượng cầu ÷ % thay đổi giá</b>.' },
      { t: 'list', items: [
        'Giá giảm 50% (100 → 50 bảng), cầu tăng 100% (1.000 → 2.000) → hệ số <b>2</b> (100/50): cầu <b>co giãn</b>.',
        'Nếu cầu chỉ tăng 25% → hệ số <b>0,25</b>: cầu <b>không co giãn</b>.',
        'Không có phương pháp khoa học hoàn hảo, phải dùng “cảm giác”. Độ co giãn còn <b>thay đổi theo mức giá</b>: giảm giá vodka xuống một nửa tăng gấp đôi doanh số, giảm thêm lần nữa có thể không hiệu quả (và người mua quà còn thấy “xúc phạm” khi tặng đồ quá rẻ).'
      ] },
      { t: 'widget', name: 'elasticity', title: 'Máy tính độ co giãn của cầu' }
    ] },
    { icon: '🏛️', title: 'Bốn cấu trúc thị trường', blocks: [
      { t: 'p', x: 'Cạnh tranh hoàn hảo chỉ là một trong bốn cấu trúc; cấu trúc thống trị ngành của bạn quyết định mức tự do định giá.' },
      { t: 'tabs', items: [
        ['Độc quyền', '<p>Một nhà cung cấp thống lĩnh, lực lượng cạnh tranh không còn cần thiết → giá, chất lượng, đổi mới bị đe doạ. Ví dụ: Microsoft (HĐH PC), Pfizer (Viagra, bằng sáng chế), BAA (sân bay London). Có cơ quan điều tiết: Ủy ban Cạnh tranh (Anh), FTC (Mỹ), Ủy ban châu Âu. <b>Hai công ty độc quyền</b> (duopoly) là trường hợp chỉ có hai công ty.</p>'],
        ['Độc quyền nhóm', '<p>3–20 doanh nghiệp lớn thống lĩnh, hoặc 4–5 công ty chia &gt; 40% thị phần: siêu thị Anh, hàng không, dầu khí. Nguy cơ <b>thông đồng ấn định giá</b>: OFT phát hiện British Airways và Virgin Atlantic thông đồng phụ phí nhiên liệu (tăng 5–60 bảng/vé) → BA nộp 350 triệu bảng tiền phạt/dàn xếp ở Anh và Mỹ.</p>'],
        ['Cạnh tranh hoàn hảo', '<p>Môi trường không tưởng: rất nhiều nhà cung cấp cùng loại, tiếp cận bình đẳng nguồn lực, không có rào cản gia nhập/rút lui, người tiêu dùng có thông tin hoàn hảo.</p>'],
        ['Cạnh tranh độc quyền (thị trường cạnh tranh)', '<p>Nằm giữa độc quyền nhóm và cạnh tranh hoàn hảo nhưng nghiêng về hoàn hảo: nhiều đối thủ nhỏ, mỗi bên thị phần nhỏ, cạnh tranh bằng <b>sản phẩm khác biệt</b>.</p>']
      ] }
    ] },
    { icon: '🧱', title: 'Chi phí cố định, biến đổi và bán biến đổi', blocks: [
      { t: 'p', x: 'Ví dụ cửa hàng: thuê 2.500 (không đổi) + 1.000 sản phẩm 1.000 = 3.500 → 3,50/đơn vị nếu bán đủ 1.000. Bán với giá 4,50: bán hết 1.000 lời 1.000; nhưng chỉ bán 500 thì doanh thu 2.250 và <b>lỗ 1.250</b>. Chi phí, sản lượng, giá và lợi nhuận <b>liên quan chặt với nhau</b>.' },
      { t: 'table', head: ['Loại', 'Định nghĩa', 'Ví dụ'], rows: [
        ['<b>Chi phí cố định</b> (định phí)', 'Không phụ thuộc mức hoạt động (trong phạm vi nhất định)', 'Thuê nhà, bảo hiểm, nhà máy, máy tính; <b>lao động</b> có thể là chi phí cố định trong ngắn hạn. Có thể “nhảy bậc” khi mở thêm cửa hàng'],
        ['<b>Chi phí khả biến</b> (biến phí)', 'Tăng/giảm tỷ lệ thuận với sản lượng', 'Nguyên liệu, bao bì, tiền công theo sản phẩm, hoa hồng, bưu phí'],
        ['<b>Chi phí bán khả biến</b>', 'Có cả phần cố định và phần khả biến → phải tách ra', 'Điện thoại di động (thuê bao + cuộc gọi), máy photocopy thuê, điện, khí đốt']
      ] },
      { t: 'warn', x: 'Đừng nhầm: “cố định = dự đoán được, khả biến = thay đổi bất kỳ lúc nào” — không phải. Với định giá, chỉ dùng hai định nghĩa trên (theo sản lượng).' }
    ] },
    { icon: '⚖️', title: 'Phân tích điểm hoà vốn (BEP)', blocks: [
      { t: 'key', x: '<b>Điểm hoà vốn</b> là nơi đường <b>doanh thu</b> cắt đường <b>tổng chi phí</b>; vượt qua mới có lợi nhuận.<br><b>BEP (đơn vị) = Chi phí cố định ÷ (Giá bán − Biến phí đơn vị)</b>. Hiệu <b>(P − V)</b> gọi là <b>số dư đảm phí</b> (đóng góp) mỗi đơn vị — dùng trả định phí rồi mới thành lợi nhuận.' },
      { t: 'p', x: 'Ví dụ: F = 10.000, P = 5, V = 3 → BEP = 10.000 ÷ 2 = <b>5.000</b> đơn vị. Nếu tối đa bán 7.000 thì chỉ 2.000 đơn vị sinh lời.' },
      { t: 'widget', name: 'bep', title: 'Biểu đồ & máy tính hoà vốn' },
      { t: 'h3', x: 'Biên an toàn & góc sinh lời' },
      { t: 'list', items: [
        '<b>Biên an toàn</b> = (sản lượng/doanh thu dự kiến − BEP) ÷ sản lượng/doanh thu dự kiến. Thấp → cần xem lại chi phí cố định, giá bán hoặc công suất.',
        '<b>Góc sinh lời</b> (giữa đường doanh thu và tổng chi phí tại BEP): góc càng lớn, mỗi đơn vị bán thêm sau BEP càng sinh lời cao.'
      ] },
      { t: 'h3', x: 'Đạt mục tiêu lợi nhuận' },
      { t: 'key', x: '<b>Sản lượng cần = (Chi phí cố định + Mục tiêu lợi nhuận) ÷ (P − V)</b>' },
      { t: 'p', x: 'Ví dụ mục tiêu lời 10.000: (10.000 + 10.000) ÷ 2 = 10.000 đơn vị — nhưng công suất tối đa chỉ 7.000. Giải ngược tìm <b>giá bán</b>: 7.000 = 20.000 ÷ (P − 3) → P = 3 + 20.000/7.000 = <b>5,86 bảng</b>. Nếu thị trường không chấp nhận, thử giảm chi phí cố định, giảm biến phí hoặc tăng công suất.' },
      { t: 'h3', x: 'Nhiều sản phẩm: dùng tỷ lệ lợi nhuận gộp' },
      { t: 'p', x: 'Doanh thu hoà vốn = (Chi phí cố định + Mục tiêu lợi nhuận) ÷ Tỷ lệ lợi nhuận gộp. Ví dụ gộp 40% (0,4), cố định 10.000, mục tiêu 4.000 → 14.000 ÷ 0,4 = <b>35.000</b>.' }
    ] },
    { icon: '📦', title: 'Đàm phán đơn hàng đặc biệt', blocks: [
      { t: 'p', x: 'Công ty sản xuất tối đa 10.000 đv; 7.000 đv bán giá 5,86 đã đủ trả chi phí cố định và mục tiêu lợi nhuận. Một khách hỏi 3.000 đv còn lại nhưng đòi chiết khấu 33%. Nên làm gì?' },
      { t: 'steps', items: [
        'Biến phí đơn vị = 3,00. Phần 7.000 đv đầu đã trả hết chi phí cố định và lợi nhuận.',
        'Với 3.000 đv còn lại chỉ cần bù biến phí + lợi nhuận mong muốn: 3,00 + 1,43 (= 10.000 ÷ 7.000) = <b>4,43</b> → chỉ giảm <b>25%</b> so với 5,86 mà vẫn giữ nguyên mức lợi nhuận mục tiêu.',
        'Bán trên 3,00 (cao hơn biến phí) vẫn có lời thêm nhưng giảm tỷ suất lợi nhuận — <b>nguy hiểm</b> nếu đàm phán theo “chi phí cận biên” mà chưa chắc đã hoà vốn tổng thể.'
      ] }
    ] },
    { icon: '🎯', title: 'Các chiến lược định giá', blocks: [
      { t: 'p', x: 'Giá quá cao thì chẳng ai mua; quá thấp thì bán nhiều nhưng lời ít. Kế toán/sản xuất lo hoà vốn; nhà chiến lược lo giá nói gì về <b>vị thế</b> công ty (iPod đắt hơn Walkman: khách cách tân sẵn sàng trả để được dùng đầu tiên).' },
      { t: 'tabs', items: [
        ['Hớt váng vs Thâm nhập', '<p><b>Hớt váng</b> (skimming): đặt giá cao mà thị trường chịu được. Hợp khi số lượng hạn chế, nhắm người đổi mới; cần chắc đối thủ không vào ngay.</p><p><b>Thâm nhập</b> (penetration): giá thấp nhưng cao hơn chi phí, giành thị phần nhanh (“giá thấp mỗi ngày”). Rủi ro: cần bán rất nhiều/lâu mới có lời, dòng tiền chậm hoà vốn.</p><p>Ví dụ Dragon Lock: sản phẩm dễ sao chép và không có bằng sáng chế → chọn giá thấp để chặn đối thủ và chiếm thị trường nhanh.</p>'],
        ['Nguy cơ giá thấp', '<p>Chậm hoà vốn, vấn đề chất lượng/hình ảnh, và quy luật: <b>tăng giá khó hơn hạ giá</b> nhiều.</p>'],
        ['Định giá theo giá trị', '<p>Nhiều khách coi giá là chỉ dẫn về giá trị (trả nhiều = giá trị cao). Ví dụ Dyson: máy hút bụi cách mạng nhưng giá gấp nhiều lần có thể khiến khách nghi ngờ lời tuyên bố hiệu suất.</p>'],
        ['Định giá theo thời gian thực', '<p>Internet cho biết cầu theo thời điểm → đổi giá hàng trăm lần/ngày (Easy Jet: 30–200 bảng cho cùng hành trình; Ryanair, Eurotunnel: giảm giá người đặt sớm, tính đủ người đặt muộn).</p>'],
        ['Đấu giá', '<p>Nhiều người quan tâm + thời hạn → người trả giá cao nhất thắng. eBay (160.000 PowerSellers ở Anh), uBid (&gt; 200.000 mục/ngày, phí 12,5% dưới 1.000 USD, 2,5% trên), Auction Atrium (có showroom để khách xem hàng).</p>'],
        ['Trả bao nhiêu cũng được', '<p>Người mua tự đặt giá, nguồn cung vô hạn. Radiohead (<i>In Rainbows</i>, 2007): 1,2 triệu lượt truy cập, 3/5 không trả tiền, còn lại trung bình 3 bảng → ~1,11 bảng/album; sau đó CD vẫn đứng số 1 ở Mỹ và Anh.</p>']
      ] }
    ] },
    { icon: '✂️', title: 'Loại bỏ sản phẩm không sinh lời', blocks: [
      { t: 'p', x: 'Bán sản phẩm không hợp, cho người không đúng, giá không đúng là con đường chắc chắn đẩy chi phí lên. Đôi khi <b>làm ít hơn là cách tốt hơn</b>:' },
      { t: 'list', items: [
        '<b>Unilever</b> (1999): giảm nhãn hiệu từ 1.600 xuống 400, tập trung vài thương hiệu mạnh.',
        '<b>Ryanair</b>: vài ngày cắt lịch bay mùa đông, rút 16 máy bay khỏi Stansted (giảm 40% công suất) 4 tháng trước khi thuế mới có hiệu lực.',
        '<b>Royal Bank of Scotland</b>: tách 1/5 tài sản thành doanh nghiệp riêng sẵn sàng bán.'
      ] },
      { t: 'warn', x: '<b>Bẫy phân bổ chi phí cố định</b>: ví dụ ba sản phẩm A, B, C; phân bổ chi phí cố định (25.000) đều thì C “lỗ” → loại bỏ. Nhưng chi phí cố định <b>không mất đi</b>, nó dồn sang A và B; lợi nhuận tổng giảm từ 15.000 xuống 5.000 vì mất <b>số dư đảm phí</b> của C. Tính lại theo <b>số dư đảm phí (doanh thu − biến phí)</b> thì C có thể là sản phẩm sinh lời nhất.' },
      { t: 'key', x: 'Quy tắc: quyết định giữ/bỏ sản phẩm nên dựa vào <b>số dư đảm phí</b>, không phải chi phí cố định phân bổ.' },
      { t: 'tip', x: 'Cắt chi phí không cần thiết: hiểu khách thật sự đánh giá cao gì. <b>IKEA</b> bán đồ để khách tự lắp: không sản xuất toàn bộ, tiết kiệm kho, vận chuyển — rồi chia sẻ một phần tiết kiệm bằng giá thấp hơn.' }
    ] }
  ],
  summary: [
    'Độ co giãn của cầu = %Δ cầu ÷ %Δ giá; >1 co giãn, <1 không co giãn.',
    'Bốn cấu trúc thị trường: độc quyền, độc quyền nhóm, cạnh tranh hoàn hảo, cạnh tranh độc quyền.',
    'Chi phí cố định (không đổi theo sản lượng), khả biến (tỷ lệ thuận), bán khả biến (tách đôi).',
    'BEP = F ÷ (P − V); sản lượng mục tiêu = (F + lợi nhuận mục tiêu) ÷ (P − V); biên an toàn đo khoảng cách tới hoà vốn.',
    'Chiến lược: hớt váng, thâm nhập, theo giá trị, thời gian thực, đấu giá, tự đặt giá.',
    'Ra quyết định loại bỏ sản phẩm dựa trên số dư đảm phí, không phải chi phí cố định phân bổ.'
  ],
  cards: [
    ['Công thức độ co giãn của cầu?', '% thay đổi lượng cầu ÷ % thay đổi giá.'],
    ['Hệ số co giãn 2 nghĩa là gì?', 'Cầu co giãn: lượng cầu thay đổi mạnh gấp đôi mức thay đổi giá.'],
    ['Cầu không co giãn?', 'Hệ số < 1: % đổi của cầu nhỏ hơn % đổi của giá.'],
    ['Bốn cấu trúc thị trường?', 'Độc quyền, độc quyền nhóm, cạnh tranh hoàn hảo, cạnh tranh độc quyền.'],
    ['Độc quyền nhóm gồm bao nhiêu doanh nghiệp?', '3–20 doanh nghiệp lớn thống lĩnh, hoặc 4–5 công ty chia > 40% thị phần.'],
    ['Vụ BA – Virgin Atlantic minh hoạ gì?', 'Thông đồng ấn định giá trong độc quyền nhóm; BA nộp 350 triệu bảng.'],
    ['Chi phí cố định là gì?', 'Chi phí không phụ thuộc mức hoạt động (thuê nhà, bảo hiểm, máy móc).'],
    ['Chi phí khả biến?', 'Tỷ lệ thuận với sản lượng (nguyên liệu, bao bì, hoa hồng).'],
    ['Ví dụ chi phí bán khả biến?', 'Điện thoại di động: thuê bao cố định + cước theo cuộc gọi.'],
    ['Công thức điểm hoà vốn?', 'BEP = Chi phí cố định ÷ (Giá bán − Biến phí đơn vị).'],
    ['Số dư đảm phí đơn vị là gì?', 'Giá bán − biến phí đơn vị: phần dùng trả định phí rồi thành lợi nhuận.'],
    ['Sản lượng cần để đạt mục tiêu lợi nhuận?', '(Chi phí cố định + Mục tiêu lợi nhuận) ÷ (P − V).'],
    ['Biên an toàn?', '(Doanh số dự kiến − BEP) ÷ doanh số dự kiến.'],
    ['Định giá hớt váng vs thâm nhập?', 'Hớt váng: giá cao nhắm người đổi mới. Thâm nhập: giá thấp (nhưng > chi phí) để giành thị phần nhanh.'],
    ['Quy luật nguy hiểm của giá thấp?', 'Tăng giá khó hơn hạ giá nhiều.'],
    ['Easy Jet là ví dụ định giá nào?', 'Định giá theo thời gian thực (30–200 bảng cho cùng chuyến).'],
    ['Radiohead In Rainbows minh hoạ gì?', 'Chiến lược “trả bao nhiêu cũng được” – ~1,11 bảng/album và vẫn bán CD số 1.'],
    ['Vì sao đừng loại sản phẩm chỉ vì “lỗ” theo phân bổ chi phí cố định?', 'Chi phí cố định không biến mất; mất số dư đảm phí của sản phẩm đó làm tổng lợi nhuận giảm.']
  ],
  quiz: [
    { q: 'Giá giảm 50%, cầu tăng 100%. Độ co giãn là:', o: ['0,5', '1', '2', '4'], a: 2, e: '100 ÷ 50 = 2 → cầu co giãn.' },
    { q: 'Giá giảm 50%, cầu chỉ tăng 25%. Cầu là:', o: ['Co giãn', 'Không co giãn', 'Co giãn đơn vị', 'Không xác định'], a: 1, e: '25 ÷ 100 = 0,25 < 1.' },
    { q: 'Cấu trúc thị trường có 3–20 doanh nghiệp lớn thống lĩnh là:', o: ['Độc quyền', 'Độc quyền nhóm', 'Cạnh tranh hoàn hảo', 'Cạnh tranh độc quyền'], a: 1, e: 'Dễ có thông đồng ấn định giá.' },
    { q: 'Chi phí nào là chi phí cố định?', o: ['Nguyên liệu', 'Hoa hồng', 'Tiền thuê nhà', 'Bao bì'], a: 2, e: 'Không đổi theo sản lượng.' },
    { q: 'Cước điện thoại gồm thuê bao + cuộc gọi là chi phí:', o: ['Cố định', 'Khả biến', 'Bán khả biến', 'Cận biên'], a: 2, e: 'Có cả hai phần.' },
    { q: 'F = 10.000, P = 5, V = 3. BEP là:', o: ['2.000', '5.000', '10.000', '20.000'], a: 1, e: '10.000 ÷ (5−3) = 5.000.' },
    { q: 'Mục tiêu lợi nhuận 10.000 (F = 10.000, P = 5, V = 3) cần bán:', o: ['5.000', '7.000', '10.000', '20.000'], a: 2, e: '(10.000+10.000) ÷ 2 = 10.000.' },
    { q: 'Công suất tối đa 7.000, F = 10.000, V = 3, mục tiêu 10.000. Giá bán tối thiểu?', o: ['5,00', '5,86', '6,50', '7,00'], a: 1, e: '3 + 20.000/7.000 = 5,86.' },
    { q: 'Đơn hàng đặc biệt 3.000 đv: giá để giữ lợi nhuận mục tiêu (ví dụ chương) là:', o: ['3,00', '4,43', '5,00', '5,86'], a: 1, e: '3,00 + 10.000/7.000 ≈ 4,43 (giảm 25%).' },
    { q: 'Rủi ro chính khi đàm phán đơn hàng theo chi phí cận biên là:', o: ['Khách bỏ đi', 'Có thể không hoà vốn tổng thể và luôn lỗ', 'Không có rủi ro', 'Tăng thuế'], a: 1, e: 'Tỷ suất lợi nhuận giảm; cần làm phép tính trước.' },
    { q: 'Định giá hớt váng phù hợp khi:', o: ['Muốn thị phần nhanh', 'Số lượng hạn chế, nhắm khách đổi mới', 'Đối thủ vào ngay', 'Sản phẩm dễ sao chép'], a: 1, e: 'Cần chắc đối thủ không thể vào ngay làm loãng cầu.' },
    { q: 'Quy luật bất biến của giá thấp ban đầu?', o: ['Tăng giá dễ hơn hạ giá', 'Tăng giá khó hơn hạ giá', 'Giá không bao giờ đổi', 'Thị phần luôn giảm'], a: 1, e: 'Đặt giá quá thấp ngay từ đầu rất khó điều chỉnh lên.' },
    { q: 'Easy Jet đổi giá theo cầu từng thời điểm là:', o: ['Định giá thâm nhập', 'Định giá theo thời gian thực', 'Định giá cạnh tranh', 'Định giá hớt váng'], a: 1, e: 'Đặt giá để bán hết chỗ, giá 30–200 bảng.' },
    { q: 'Sai lầm khi loại bỏ “sản phẩm lỗ” theo phân bổ chi phí cố định là:', o: ['Chi phí cố định giảm theo', 'Mất số dư đảm phí của sản phẩm đó', 'Doanh thu tăng', 'Không có sai lầm'], a: 1, e: 'Chi phí cố định không đổi; lợi nhuận tổng giảm.' },
    { q: 'Số dư đảm phí đơn vị =', o: ['Giá bán − chi phí cố định', 'Giá bán − biến phí đơn vị', 'Biến phí − giá bán', 'Doanh thu − lợi nhuận'], a: 1, e: 'Dùng để bù định phí rồi thành lợi nhuận.' }
  ],
  match: [
    ['Độ co giãn', '%Δ cầu ÷ %Δ giá'],
    ['Độc quyền nhóm', '3–20 doanh nghiệp lớn, dễ thông đồng giá'],
    ['Chi phí cố định', 'Không đổi theo sản lượng'],
    ['Chi phí khả biến', 'Tỷ lệ thuận với sản lượng'],
    ['BEP', 'F ÷ (P − V)'],
    ['Số dư đảm phí', 'P − V'],
    ['Hớt váng', 'Giá cao nhắm người đổi mới'],
    ['Thâm nhập', 'Giá thấp giành thị phần'],
    ['Radiohead', 'Trả bao nhiêu cũng được'],
    ['Unilever', 'Cắt nhãn hiệu từ 1.600 xuống 400']
  ]
});
