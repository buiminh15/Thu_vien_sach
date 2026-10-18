// "Phong cách đầu tư Warren Buffett" – Chương 5–6.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.buffett = BOOK_DATA.buffett || { chapters: [] };
BOOK_DATA.buffett.chapters.push(

/* ======================= CHƯƠNG 5 ======================= */
{
  n: 5,
  title: 'Hướng dẫn đầu tư: Nguyên lý kinh doanh',
  intro: 'Nhóm nguyên lý đầu tiên của Buffett: nhìn một doanh nghiệp. Ba câu hỏi — đơn giản và dễ hiểu? lịch sử hoạt động ổn định? triển vọng dài hạn (có “quyền kinh doanh”)? — cùng các ví dụ Coca-Cola, Gillette, Benjamin Moore, Justin Industries…',
  sections: [
    { icon: '🧭', title: 'Chúng ta là nhà phân tích kinh doanh', blocks: [
      { t: 'p', x: 'Buffett nói: “Khi đầu tư, chúng tôi coi mình là các nhà phân tích kinh doanh, không phải nhà phân tích thị trường, vĩ mô, hay thậm chí chứng khoán.” Với ông, chứng khoán là thứ rất <b>trừu tượng</b>; ông quyết định chỉ dựa vào việc <b>doanh nghiệp hoạt động như thế nào</b>, không dựa vào lý thuyết thị trường, khái niệm vĩ mô hay xu hướng ngành.' },
      { t: 'mnemo', x: '“Tôi muốn có những thương vụ tốt đến mức thậm chí một kẻ ngốc cũng có thể kiếm được tiền.” — Buffett, 1998' },
      { t: 'table', head: ['Nhóm nguyên lý', 'Câu hỏi'], rows: [
        ['<b>Kinh doanh</b> (chương này)', '1) Đơn giản, dễ hiểu? 2) Lịch sử hoạt động ổn định? 3) Triển vọng dài hạn?'],
        ['Quản lý (chương 6)', '4–6) Hợp lý? Trung thực? Chống tính cưỡng chế tổ chức?'],
        ['Tài chính (chương 7)', '7–10) ROE, lợi nhuận chủ sở hữu, biên, 1 đô la giữ lại → ≥ 1 đô la giá trị'],
        ['Giá trị (chương 8)', '11–12) Giá trị là gì? Có chiết khấu?']
      ] }
    ] },
    { icon: '1️⃣', title: 'Nguyên lý 1: Doanh nghiệp đơn giản, dễ hiểu', blocks: [
      { t: 'p', x: 'Thành công của nhà đầu tư gắn chặt với <b>trình độ hiểu biết</b> công việc kinh doanh. Sự hiểu biết phân biệt nhà đầu tư định hướng kinh doanh với kiểu “kinh doanh chụp giật”. Nhà đầu tư phải tin vào <b>khả năng dự đoán lợi nhuận tương lai</b> của chính mình; dự đoán đã khó, nên càng khó nếu bạn không hiểu ngành.' },
      { t: 'key', x: '<b>Vòng tròn khả năng</b>: chỉ chọn công ty trong phạm vi hiểu biết tài chính và trí tuệ của bạn. Buffett: “Vấn đề không phải vòng tròn khả năng lớn thế nào, mà là bạn <b>xác định giới hạn đó chuẩn xác thế nào</b>.” Đầu tư thành công không phải bạn biết nhiều đến đâu, mà là bạn xác định điều bạn <b>không biết</b> thực tế thế nào; nhà đầu tư chỉ cần làm ít việc miễn là <b>tránh sai lầm lớn</b>.' },
      { t: 'tabs', items: [
        ['🥤 Coca-Cola', 'Mua nguyên liệu → pha dung dịch → bán cho nhà đóng chai; nhà đóng chai trộn nguyên liệu và bán thành phẩm ra bán lẻ. Công ty còn sở hữu 45% Coca-Cola Enterprises (đóng chai lớn nhất Mỹ) và 35% Coca-Cola Amatil. Sản phẩm quốc tế: 69% doanh thu và 80% lợi nhuận.'],
        ['📰 Washington Post', 'Ông nội Buffett từng sở hữu và biên tập tờ tuần báo Cuming County Democrat; cha biên tập Daily Nebraskan; Buffett từng quản lý phát hành tờ Lincoln Journal, và 1969 mua Omaha Sun — ông có bốn năm kinh nghiệm điều hành tờ báo trước khi mua cổ phiếu Washington Post.'],
        ['🏦 Wells Fargo', '1969 Berkshire mua 98% Illinois National Bank & Trust (giữ đến 1979 do luật ngân hàng). Gene Abegg dạy ông: ngân hàng có lãi nếu <b>cho vay có trách nhiệm</b> và <b>chi phí được giảm thiểu</b>. Quản lý tốt (Carl Reichardt) = lợi nhuận và ROE trên trung bình, hiệu quả hoạt động cao nhất nước.'],
        ['🎨 Benjamin Moore (2000)', '“Mercedes” của ngành sơn; mua 1 tỷ đô la (trả 25% trên thị giá). Hệ thống pha màu vi tính hóa ~3.200 màu, chuẩn của ngành; lợi nhuận ~80 triệu/900 triệu doanh thu. Ngành sơn đơn giản, dễ hiểu và có <b>nhượng quyền kinh doanh</b>.']
      ] }
    ] },
    { icon: '2️⃣', title: 'Nguyên lý 2: Lịch sử hoạt động ổn định', blocks: [
      { t: 'p', x: 'Buffett ít quan tâm chứng khoán đang “nóng”. Ông quan tâm công ty sẽ thành công và có lợi nhuận <b>dài hạn</b>. Không thể dự đoán tương lai, nên <b>thành tích ổn định trong quá khứ</b> là kim chỉ nam đáng tin — miễn là không có thay đổi lớn.' },
      { t: 'warn', x: 'Ông <b>tránh công ty thay đổi căn bản đường lối</b>, vì kế hoạch cũ thất bại. Kinh nghiệm: “Thay đổi khắc liệt và mức lợi nhuận bất thường không bao giờ đi kèm với nhau.” Nhà đầu tư thường chạy theo công ty đang tái cấu trúc; Buffett thu lợi từ <b>sự ổn định</b>. Ông cũng tránh công ty đang cố giải quyết khó khăn rắc rối: “Charlie và tôi không học cách giải quyết các vấn đề kinh doanh rắc rối; điều chúng tôi học được là <b>né tránh</b> chúng.” Thà mua doanh nghiệp tốt giá hợp lý hơn công ty khó khăn giá rẻ.' },
      { t: 'table', head: ['Công ty', 'Sự ổn định'], rows: [
        ['<b>Coca-Cola</b>', 'Sản phẩm giải khát từ thập niên 1880, 120 năm vẫn bán thứ cơ bản đó; 2003 bán hơn 19 tỷ thùng ở hơn 200 nước, doanh thu 22 tỷ đô la/năm. Tạp chí Fortune 1938: khó kể tên công ty nào bán cùng loại sản phẩm với thành tích 10 năm như Coca-Cola.'],
        ['<b>Gillette</b>', 'Dẫn đầu lưỡi dao cạo từ 1923 đến 2003; liên tục sáng chế: Trac II (1972), Atra (1977), Sensor (1989) và bảo vệ bằng sáng chế.'],
        ['<b>Washington Post</b>', 'Báo, truyền hình, Newsweek: bộ phận truyền hình luôn xuất sắc; Buffett từng giao báo Washington Post từ năm 13 tuổi.'],
        ['<b>Clayton Homes</b>', 'Năm tài chính 2002 lợi nhuận 126 triệu đô la (+16%), doanh thu 1,2 tỷ dù cuối thập niên 1990 hơn 80 nhà máy và 4.000 cửa hàng bán lẻ ngành phá sản.']
      ] }
    ] },
    { icon: '3️⃣', title: 'Nguyên lý 3: Triển vọng dài hạn và “quyền kinh doanh”', blocks: [
      { t: 'mnemo', x: 'Buffett: “Hãy nói bạn sắp đi xa 10 năm, muốn có một khoản đầu tư và không thể thay đổi nó khi vắng mặt. Bạn nghĩ về doanh nghiệp nào? … Tôi không biết bất cứ cái gì như Coke.”' },
      { t: 'key', x: '<b>Quyền kinh doanh (franchise)</b>: công ty có sản phẩm/dịch vụ mà (1) khách hàng <b>mong muốn hoặc cần</b>; (2) <b>không có sản phẩm thay thế gần giống</b>; (3) <b>không bị điều chỉnh/kiểm soát giá</b>. Nhờ đó công ty có thể <b>tăng giá định kỳ</b> mà không mất thị phần hay sản lượng → ROE cao, chống lạm phát tốt, vượt qua bất ổn kinh tế.' },
      { t: 'table', head: ['', 'Quyền kinh doanh (franchise)', 'Hàng hóa (commodity)'], rows: [
        ['Sản phẩm', 'Khác biệt, khách hàng mong muốn, không thay thế gần', 'Khó phân biệt với đối thủ (dầu, gas, hóa chất, đồng, gỗ xẻ, nước cam; nay cả máy tính, hàng không, ngân hàng, bảo hiểm)'],
        ['Cạnh tranh', 'Bằng thương hiệu, chất lượng, dịch vụ', 'Chủ yếu bằng <b>giá</b> → biên lợi nhuận thu hẹp'],
        ['Cách có lãi', 'Tăng giá, ROE cao', 'Phải là <b>nhà cung cấp chi phí thấp nhất</b>; chỉ có lãi khi cung bị thắt chặt (“ít năm cung thắt chặt”)']
      ] },
      { t: 'tip', x: 'Lợi thế cạnh tranh và <b>hào ngăn cản cạnh tranh (moat)</b>: Buffett: “Chìa khóa cho đầu tư là xác định lợi thế cạnh tranh của công ty và quan trọng hơn là khả năng <b>tồn tại lâu dài</b> của lợi thế đó.” Ông thích “lâu đài lớn có tường rào và hào sâu với cá piranha và cá sấu”. Một công ty vĩ đại sẽ làm ăn phát đạt trong 25 đến 30 năm.' },
      { t: 'h3', x: 'Các ví dụ' },
      { t: 'list', items: [
        '<b>Báo chí</b> (khi chỉ có một tờ báo trong vùng): nhượng quyền cổ điển; “ngay cả tờ báo hạng bét cũng có thể có lợi nhuận”; cần vốn thấp; có thể <b>tăng gấp đôi giá mà vẫn giữ 90% độc giả</b>. (Cạnh tranh từ truyền hình cáp, thư trực tiếp, tờ rơi chèn trong báo đã làm giảm sức mạnh định giá.)',
        '<b>Gillette</b>: thị phần toàn cầu 72,5% (gấp ~6 đối thủ gần nhất); nếu bán 1 lưỡi dao ở Mỹ thì bán 5 ở ngoài; lưỡi dao chiếm 1/3 doanh thu, 2/3 lợi nhuận.',
        '<b>Coca-Cola</b>: Goizueta (CEO) xoay chuyển công ty trở lại ngành nước giải khát cơ bản (xem chương 6).',
        '<b>McLane</b>: thị trường phân phối tiện lợi rộng, hiệu quả nhờ phần mềm và quy trình; Pampered Chef: tăng trưởng 22%/năm 1995–2001, ngành bán hàng trực tiếp/tiệc đã đạt hơn 7 tỷ đô la (2000), cơ cấu cần ít vốn, ít cạnh tranh.'
      ] }
    ] },
    { icon: '🥾', title: 'Ví dụ điển hình: Justin Industries (2000)', blocks: [
      { t: 'p', x: 'Tháng 7/2000, Berkshire mua 100% Justin Industries (Texas) với <b>600 triệu đô la</b>. Justin Brands (ủng phương Tây: Justin, Tony Lama, Nocona, Chippewa) và <b>Acme Building Brands</b> (gạch lớn nhất, lợi nhuận lớn nhất nước Mỹ; hơn 1 tỷ viên gạch/năm, bảo hành 100 năm).' },
      { t: 'steps', items: [
        '<b>Đơn giản, dễ hiểu</b>: ủng và gạch là sản phẩm không có gì phức tạp.',
        '<b>Lịch sử ổn định</b>: hầu hết đã tồn tại ít nhất một thế kỷ (Justin từ 1879, Acme từ 1891).',
        '<b>Triển vọng dài hạn</b>: sản phẩm “hàng hóa thiết yếu” đạt trạng thái nhượng quyền: khảo sát người dân Texas, 75% chọn Acme là thương hiệu gạch ưa thích (nhờ quảng cáo với Troy Aikman và logo dập trên từng viên gạch); khách hàng đòi “Tony Lamas” theo tên.',
        'Ngành bị Phố Wall bỏ qua (“khó xử” vì hai ngành), giá cổ phiếu giảm 37% trong 5 năm; Buffett đề nghị 22 đô la/cổ phiếu tiền mặt (premium 23% so với giá đóng cửa), cho biết không thay đổi gì: “Chúng tôi mua ngành kinh doanh đang hoạt động tốt để bắt đầu.” Một ngày sau, giá tăng 22%.'
      ] },
      { t: 'tip', x: 'Nhà đầu tư cá nhân: chọn công ty <b>trong vòng tròn khả năng</b> của mình — đồ uống, dao cạo, ngân hàng quen thuộc — “không có gì bí mật, không có gì công nghệ cao”.' }
    ] }
  ],
  summary: [
    'Buffett phân tích doanh nghiệp chứ không phải thị trường: ba câu hỏi nhóm nguyên lý kinh doanh.',
    'Đơn giản, dễ hiểu và trong vòng tròn khả năng; xác định giới hạn hiểu biết chuẩn xác quan trọng hơn vòng tròn lớn.',
    'Lịch sử ổn định, tránh công ty đang thay đổi căn bản hoặc cứu vãn khó khăn.',
    'Triển vọng dài hạn = “quyền kinh doanh”: sản phẩm không thay thế, không bị điều chỉnh giá, có hào ngăn cản cạnh tranh bền.',
    'Hàng hóa thiết yếu chỉ có lãi khi là nhà cung cấp chi phí thấp; Justin cho thấy hàng hóa thiết yếu có thể thành nhượng quyền nhờ thương hiệu.'
  ],
  cards: [
    ['Buffett tự coi mình là nhà phân tích nào?', 'Nhà phân tích kinh doanh, không phải nhà phân tích thị trường, vĩ mô hay chứng khoán.'],
    ['Ba câu hỏi nhóm nguyên lý kinh doanh?', 'Đơn giản, dễ hiểu? Lịch sử hoạt động ổn định? Triển vọng dài hạn?'],
    ['“Vòng tròn khả năng” và điều quan trọng nhất?', 'Chỉ đầu tư trong phạm vi hiểu biết; quan trọng là xác định giới hạn chuẩn xác, không phải vòng tròn lớn.'],
    ['Vì sao Buffett không mua công nghệ?', 'Nằm ngoài vòng tròn khả năng: khó dự đoán; ông chỉ cần tránh sai lầm lớn.'],
    ['Tại sao Buffett tránh công ty thay đổi căn bản?', 'Kế hoạch cũ đã thất bại; thay đổi lớn làm tăng khả năng sai lầm nguy hiểm; “thay đổi khắc liệt và lợi nhuận bất thường không đi cùng nhau”.'],
    ['Quan điểm về công ty khó khăn?', 'Thà mua doanh nghiệp tốt giá hợp lý hơn công ty rắc rối giá rẻ; “chúng tôi học cách né tránh”.'],
    ['Quyền kinh doanh (franchise) là gì?', 'Sản phẩm khách muốn/cần, không có thay thế gần, không bị điều chỉnh → có thể tăng giá định kỳ.'],
    ['Lợi thế cạnh tranh và hào ngăn cản?', 'Bảo vệ công ty khỏi đối thủ; quan trọng là sự tồn tại lâu dài của lợi thế.'],
    ['Đặc điểm công ty hàng hóa?', 'Sản phẩm khó phân biệt, cạnh tranh bằng giá, biên mỏng; chỉ lãi khi là nhà cung cấp chi phí thấp.'],
    ['Báo chí khi một tờ duy nhất?', 'Nhượng quyền cổ điển: tăng giá, vốn thấp, chuyển doanh thu thành lợi nhuận dễ.'],
    ['Thị phần Gillette và cơ cấu lợi nhuận?', 'Thị phần toàn cầu 72,5%; lưỡi dao 1/3 doanh thu, 2/3 lợi nhuận.'],
    ['Justin Industries: giá mua và cách Buffett định giá?', '600 triệu đô la (22 đô la/cổ phiếu tiền mặt), đơn giản, lịch sử >100 năm, thương hiệu mạnh.'],
    ['Acme Bricks: dấu hiệu nhượng quyền?', '75% người Texas chọn Acme là thương hiệu gạch ưa thích; logo dập lên từng viên gạch.']
  ],
  quiz: [
    { q: 'Buffett nói “chúng tôi là nhà phân tích”:', o: ['Vĩ mô', 'Thị trường', 'Kinh doanh', 'Chứng khoán'], a: 2, e: 'Ông quyết định dựa trên việc doanh nghiệp hoạt động ra sao.' },
    { q: 'Điều quan trọng về vòng tròn khả năng là:', o: ['Phải lớn nhất có thể', 'Xác định giới hạn đó chuẩn xác', 'Chỉ đầu tư nước ngoài', 'Có thể thay đổi hằng ngày'], a: 1, e: 'Đầu tư thành công là xác định điều bạn không biết.' },
    { q: 'Buffett tránh công ty:', o: ['Có lịch sử ổn định', 'Đang thay đổi căn bản hoạt động', 'Có thương hiệu mạnh', 'Nợ thấp'], a: 1, e: 'Thay đổi lớn làm tăng khả năng sai lầm.' },
    { q: 'Quyền kinh doanh KHÔNG đòi hỏi:', o: ['Khách hàng cần', 'Không có sản phẩm thay thế gần', 'Bị chính phủ kiểm soát giá', 'Khả năng tăng giá'], a: 2, e: 'Một điều kiện là không bị điều chỉnh.' },
    { q: 'Công ty hàng hóa thiết yếu muốn có lãi nên:', o: ['Chạy quảng cáo', 'Là nhà cung cấp chi phí thấp', 'Tăng nợ', 'Bán rẻ hơn mọi đối thủ'], a: 1, e: 'Họ cạnh tranh chủ yếu bằng giá.' },
    { q: 'Thị phần toàn cầu của Gillette:', o: ['32%', '52,5%', '72,5%', '92%'], a: 2, e: 'Gấp gần 6 lần đối thủ gần nhất.' },
    { q: 'Gillette: lưỡi dao chiếm 1/3 doanh thu nhưng bao nhiêu lợi nhuận?', o: ['1/3', '1/2', '2/3', '90%'], a: 2, e: 'Đặc trưng hàng tiêu dùng có nhượng quyền.' },
    { q: 'Tờ báo duy nhất trong vùng có thể:', o: ['Không tăng giá', 'Tăng gấp đôi giá mà vẫn giữ ~90% độc giả', 'Mất hết độc giả', 'Chỉ lỗ'], a: 1, e: 'Theo Buffett, đó là nhượng quyền cổ điển.' },
    { q: 'Justin Industries được Berkshire mua với:', o: ['60 triệu đô la', '600 triệu đô la', '6 tỷ đô la', '2 tỷ đô la'], a: 1, e: '22 đô la/cổ phiếu tiền mặt.' },
    { q: 'Dấu hiệu Acme Bricks là sản phẩm nhượng quyền:', o: ['Khách hàng nói tên thương hiệu và 75% chọn Acme', 'Giá thấp nhất', 'Không có logo', 'Bán trên Internet'], a: 0, e: 'Cho dù gạch là hàng hóa thiết yếu.' },
    { q: 'Buffett muốn công ty mà ông có thể giữ “10 năm không thay đổi”, ví dụ:', o: ['Công nghệ mới', 'Coca-Cola', 'Công ty khởi nghiệp', 'Công ty khai khoáng'], a: 1, e: '“Tôi không biết bất cứ cái gì như Coke.”' }
  ],
  match: [
    ['Vòng tròn khả năng', 'Chỉ đầu tư vào lĩnh vực mình hiểu'],
    ['Quyền kinh doanh', 'Sản phẩm không thay thế gần và không bị kiểm soát'],
    ['Hàng hóa thiết yếu', 'Cạnh tranh bằng giá, biên mỏng'],
    ['Lịch sử ổn định', 'Kim chỉ nam đáng tin hơn dự đoán'],
    ['Hào ngăn cản cạnh tranh', 'Bảo vệ lợi thế lâu dài'],
    ['Justin/Acme', 'Hàng hóa thiết yếu thành nhượng quyền nhờ thương hiệu']
  ]
},

/* ======================= CHƯƠNG 6 ======================= */
{
  n: 6,
  title: 'Hướng dẫn đầu tư: Nguyên lý quản lý',
  intro: 'Buffett chỉ làm ăn với nhà quản lý ông khâm phục. Ba phẩm chất: hợp lý (phân bổ vốn), trung thực với cổ đông, và dám chống lại “tính cưỡng chế tổ chức”. Kèm quan điểm của ông về lương CEO, quyền chọn cổ phiếu và gian lận kế toán.',
  sections: [
    { icon: '🧑‍💼', title: 'Ba phẩm chất của ban quản lý', blocks: [
      { t: 'p', x: 'Buffett: công ty hoặc cổ phiếu Berkshire mua phải do những nhà quản lý <b>đủ tài năng và chân thật</b>, mà ông khâm phục và tin tưởng. “Chúng tôi chưa bao giờ làm ăn suôn sẻ với một nhà quản lý tồi.” Lời khen cao nhất: người đó luôn <b>hành động và suy nghĩ như một người chủ</b>.' },
      { t: 'table', head: ['Phẩm chất', 'Câu hỏi'], rows: [
        ['<b>Hợp lý</b> (rationality)', 'Quản lý có phân bổ vốn hợp lý?'],
        ['<b>Trung thực</b> (candor)', 'Ban quản lý có công bằng, thẳng thắn với cổ đông?'],
        ['<b>Chống cưỡng chế tổ chức</b>', 'Có dám chống lại sự bắt chước mù quáng các công ty cùng ngành?']
      ] },
      { t: 'mnemo', x: 'Đánh giá con người dựa trên ba phẩm chất: <b>liêm chính, thông minh và nghị lực</b>. “Nếu bạn không có phẩm chất thứ nhất, hai phẩm chất còn lại sẽ đẩy bạn xuống vực sâu.” — Buffett, 1993' }
    ] },
    { icon: '🧮', title: 'Sự hợp lý: phân bổ vốn', blocks: [
      { t: 'key', x: 'Hành vi quản lý quan trọng nhất: <b>phân bổ hợp lý nguồn vốn</b> công ty, vì theo thời gian nó quyết định giá trị cổ phiếu. Khi công ty trưởng thành, tăng trưởng chậm lại và tạo ra nhiều tiền mặt hơn nhu cầu — câu hỏi: dùng tiền thế nào?' },
      { t: 'steps', items: [
        'Nếu tiền dư tái đầu tư được với <b>lợi nhuận cao hơn chi phí vốn</b> → <b>giữ lại và tái đầu tư</b>. Đó là đường lối hợp lý duy nhất.',
        'Nếu lợi nhuận trên vốn đầu tư ở mức <b>trung bình hoặc thấp</b> mà vẫn tạo tiền mặt vượt nhu cầu, có 3 lựa chọn: (1) phớt lờ và tiếp tục tái đầu tư ở tỷ lệ dưới trung bình; (2) <b>mua sự tăng trưởng</b> (mua lại công ty khác); (3) <b>trả lại tiền mặt cho cổ đông</b>.',
        'Buffett hoài nghi lựa chọn (2): công ty thường bị <b>định giá quá cao</b>, hợp nhất và quản lý ngành mới dễ mắc sai lầm tai hại.'
      ] },
      { t: 'widget', name: 'retain-or-return', title: 'Giữ lại hay trả lại cổ đông? Thử với ROE và chi phí vốn' },
      { t: 'h3', x: 'Cổ tức hay mua lại cổ phiếu?' },
      { t: 'list', items: [
        '<b>Tăng cổ tức</b>: cổ đông có tiền để tìm cơ hội mới; nhưng chỉ đúng nếu công ty không thể tạo lợi nhuận cao hơn khi giữ lại. <b>Berkshire không trả cổ tức</b> và điều đó tốt vì lợi nhuận trên vốn rất cao.',
        '<b>Mua lại cổ phiếu</b>: khi giá cổ phiếu dưới giá trị thực, mỗi đô la ban quản lý bỏ ra mua lại tạo ra giá trị thực lớn hơn. Ví dụ giá 50 đô la, giá trị 100 đô la: mỗi 1 đô la bỏ ra mua 2 đô la giá trị cho cổ đông còn lại. Đây là tín hiệu tốt: quản lý quan tâm cổ đông chứ không chỉ mở rộng cơ cấu công ty.'
      ] },
      { t: 'tabs', items: [
        ['Shaw Industries', 'Bob Shaw: “Bạn phải trưởng thành từ số tiền kiếm được [thay vì đi vay] … bạn sẽ không bao giờ gặp vấn đề nghiêm trọng.” Từ 1960–1980, ROI bình quân 27%; Bob dự báo doanh thu gấp 4 lần 214 triệu trong 10 năm, và đạt được trong 8 năm. Shaw giữ lại và tái đầu tư tiền lãi vì lợi nhuận cao hơn chi phí vốn. 2003 doanh thu 4,6 tỷ đô la.'],
        ['Coca-Cola', 'Mua lại cổ phiếu lần đầu 1984 (6 triệu cổ phiếu), từ đó hơn 1 tỷ cổ phiếu (giá bình quân 12,46 đô la; bỏ ~12,4 tỷ để mua cổ phiếu mà 10 năm sau trị giá ~60 tỷ đô la). 1992 công bố mua lại 100 triệu cổ phiếu (7,6%).'],
        ['Washington Post', 'Công ty báo chí đầu tiên mua lại cổ phiếu lớn: 1975–1991 mua lại 43% cổ phiếu với giá bình quân 60 đô la; 1990 tăng cổ tức từ 1,84 lên 4 đô la (+117%). Don Graham tìm doanh nghiệp “có lợi thế cạnh tranh, không đòi vốn lớn”; công ty gần như không nợ.'],
        ['American Express', 'Những năm 1990 ban quản lý dùng tiền dư mua Shearson Lehman — thất bại; Buffett từng mua cổ phiếu ưu đãi 300 triệu khi công ty cần vốn. Harvey Golub (từ 1992) thanh lý tài sản hỏng, mục tiêu tăng lợi nhuận cổ phiếu 12–15%/năm, ROE 18–20%, mua lại 20 triệu cổ phiếu. Đến 2003 Berkshire sở hữu 151 triệu cổ phiếu (12%), giá trị gấp bảy lần vốn bỏ ra.'],
        ['Pampered Chef', 'Doris Christopher tài trợ toàn bộ mở rộng bằng doanh thu nội bộ; tăng trưởng 232% (1995–2001), biên trước thuế trên 25%, không nợ ngoài 3.000 đô la ban đầu.']
      ] }
    ] },
    { icon: '🗣️', title: 'Sự trung thực (candor)', blocks: [
      { t: 'p', x: 'Buffett đánh giá cao nhà quản lý báo cáo <b>đầy đủ và chính xác</b>, <b>biết thừa nhận sai lầm</b> cũng như chia sẻ thành công, và <b>ngay thẳng với cổ đông</b>. Không giấu mình sau GAAP.' },
      { t: 'mnemo', x: '“Cái cần phải được báo cáo là dữ liệu — cho dù là GAAP, không GAAP hay vượt cả GAAP — vì nó giúp người đọc trả lời ba câu hỏi: (1) giá trị công ty khoảng bao nhiêu? (2) công ty có khả năng đáp ứng nghĩa vụ tương lai không? (3) các nhà quản lý làm tốt công việc như thế nào, căn cứ vào quyền kiểm soát trong tay họ?”' },
      { t: 'list', items: [
        'Một số nhà quản lý gộp mọi ngành vào một “phân đoạn” (yêu cầu tối thiểu của chuẩn mực kế toán) để cổ đông khó đánh giá.',
        'Báo cáo thường niên Berkshire vượt GAAP: có phần lợi nhuận riêng từng công ty con và mọi thông tin phụ cần thiết.',
        'Buffett thẳng thắn về sai lầm: dệt may, bảo hiểm, General Re (“tôi có thể tiết kiệm cho các bạn khoảng 100 triệu đô la nếu hành động nhanh hơn để đóng cửa Công ty chứng khoán GenRe”). Ông học từ <b>sai lầm của người khác</b> (Munger).',
        '“Một CEO lừa dối công chúng thì cuối cùng cũng có thể lừa dối chính bản thân anh ta trong chuyện riêng tư.”'
      ] }
    ] },
    { icon: '🐑', title: 'Tính cưỡng chế tổ chức (institutional imperative)', blocks: [
      { t: 'key', x: 'Một <b>lực lượng vô hình</b> khiến các nhà quản lý <b>bắt chước hành vi của nhà quản lý khác</b> mà không cần biết hành vi đó ngu ngốc hay bất hợp lý đến đâu. Buffett phát hiện ngoài đời kinh doanh: “Tính cưỡng chế tổ chức phát huy tác dụng.”' },
      { t: 'table', head: ['Biểu hiện', 'Mô tả'], rows: [
        ['<b>Chống lại sự thay đổi</b>', 'Tổ chức chống lại bất kỳ thay đổi nào về định hướng'],
        ['<b>Dự án mở rộng ngốn hết tiền</b>', 'Công việc dự án luôn mở rộng để hấp thụ hết nguồn vốn sẵn có'],
        ['<b>Thèm khát hành động</b>', 'Nhà quản lý không kiểm soát được “thèm khát hành động” (mua lại công ty khác)'],
        ['<b>Báo cáo hỗ trợ</b>', 'Nhân viên cung cấp phân tích chứng minh chiến lược của CEO (CEO đòi 15% thì “khám phá” ra 15,1%)'],
        ['<b>Bắt chước đồng nghiệp</b>', 'Thấy công ty A, B, C làm thì công ty D cũng làm; so sánh lương thưởng, doanh thu với nhau']
      ] },
      { t: 'tabs', items: [
        ['Goizueta (Coca-Cola)', 'Loại bỏ các ngành không liên quan (rượu, phim…) và đưa công ty trở lại ngành nước ngọt cơ bản — ngược xu hướng: Anheuser-Busch đầu tư công viên giải trí, Brown-Forman mua đồ sứ pha lê, Seagram mua Universal Studios, Pepsi mua Frito-Lay và các nhà hàng. Ngành rượu của Coca-Cola được bán cho Seagram (1983); ROE tăng từ 20% (1970s) lên 31,8% (1998); giá trị thị trường từ 4,1 tỷ (1980) lên 14,1 tỷ (1987).'],
        ['Jack Ringwalt (National Indemnity)', 'Trong khi hầu hết công ty bảo hiểm cứ ký hợp đồng khi giá thấp, Ringwalt <b>bước ra khỏi thị trường</b> khi giá không hợp lý — Berkshire tiếp tục nguyên tắc này.'],
        ['Clayton Homes', 'Ngành nhà di động rơi vào khủng hoảng: mở rộng quá nhanh, bán nhà cho người yếu thế tài chính, hoa hồng tính theo số lượng bán. Clayton trả hoa hồng theo <b>chất lượng khoản vay</b> (người quản lý chịu một nửa lỗ nếu khoản vay hỏng). 2002 chỉ 2,3% chủ nhà chậm trả 30 ngày — một nửa tỷ lệ ngành. Khi hơn 80 nhà máy và 4.000 cửa hàng phá sản, Clayton chỉ đóng 31 cửa hàng.'],
        ['Washington Post', 'Katherine Graham chủ động mua cổ phiếu giá thấp, dám đương đầu công đoàn và cắt giảm chi phí — chất lượng quản lý khiến lợi nhuận vượt các công ty truyền thông khác (Buffett nói “bản chất vượt trội của các quyết định quản lý”).']
      ] }
    ] },
    { icon: '⚠️', title: 'Lương CEO, quyền chọn cổ phiếu, kế toán', blocks: [
      { t: 'list', items: [
        '<b>CEO hám lợi:</b> cổ đông mất hàng tỷ đô la trong khi các CEO — “cha đẻ của những thảm họa” — hối thúc nhà đầu tư mua cổ phiếu, đồng thời bán tháo cổ phiếu của chính họ. Lương thưởng không lồ, máy bay riêng, tiệc linh đình… là điểm tiêu cực nhất của tính cưỡng chế tổ chức.',
        '<b>Quyền chọn cổ phiếu:</b> giá cố định, ràng buộc với doanh thu công ty hơn là hiệu quả thực của quản lý → nhà quản lý kém cũng được “hào phóng” như nhà quản lý xuất sắc. Berkshire trả thưởng theo <b>kết quả công việc trong phạm vi trách nhiệm</b> (doanh thu, cắt giảm chi phí…), bằng <b>séc</b> chứ không bằng quyền chọn. Buffett cho rằng quyền chọn <b>phải tính là chi phí</b>. Khi Amazon (4/2003) công bố bắt đầu tính chi phí quyền chọn, Buffett viết thư khen và một tuần sau mua 98,3 triệu đô la trái phiếu lợi suất cao của Amazon.',
        '<b>Ban Giám đốc thiếu độc lập:</b> nhiều thành viên chỉ biết ký tên đóng dấu; Buffett: dám thách thức CEO có quyền lực khi họ sai trái là nét có giá trị của một giám đốc. Ở Berkshire ông tìm thành viên “rất ngay thẳng, có hiểu biết kinh doanh, hướng tới cổ đông, và quan tâm thực sự tới công ty”.',
        '<b>Bê bối kế toán:</b> khi giá chứng khoán tăng, quy tắc hành động của nhà quản lý đi xuống; cuối thập niên 1990 nhiều CEO “đi trên đường cao tốc không bị tắc đường”.'
      ] },
      { t: 'h3', x: 'Làm sao đánh giá ban quản lý?' },
      { t: 'steps', items: [
        'Đọc báo cáo thường niên <b>nhiều năm trước</b>: ban quản lý đã nói gì về chiến lược tương lai? Kế hoạch đó thực hiện ra sao? Suy nghĩ thay đổi thế nào?',
        'So sánh với báo cáo của <b>các công ty cùng ngành</b>. Buffett: “Tôi đọc báo cáo thường niên của công ty tôi quan tâm và của các đối thủ cạnh tranh.”',
        'Đọc báo chí tài chính, bài phát biểu của chủ tịch, trang web công ty; tăng khả năng quan sát.'
      ] },
      { t: 'warn', x: '<b>Cờ đỏ</b> theo Buffett: (1) công ty <b>không tính quyền chọn cổ phiếu là chi phí</b> hoặc kế toán yếu kém; (2) <b>chú thích khó hiểu</b> — đừng cho là lỗi của bạn, đó là công cụ để che giấu; (3) công ty <b>công bố dự báo</b> lợi nhuận và tăng trưởng (“không ai biết trước tương lai”). Cẩn trọng: ngay cả vậy, các thủ đoạn lừa đảo tinh vi có thể khó phát hiện kịp thời.' }
    ] }
  ],
  summary: [
    'Buffett chỉ đầu tư vào công ty có quản lý ông khâm phục: hợp lý, trung thực, dám chống cưỡng chế tổ chức.',
    'Phân bổ vốn hợp lý: giữ lại nếu lợi nhuận tái đầu tư > chi phí vốn; nếu không thì trả lại cổ đông (cổ tức hoặc mua lại cổ phiếu khi giá thấp hơn giá trị).',
    'Trung thực: báo cáo đầy đủ, thừa nhận sai lầm, không giấu sau GAAP.',
    'Tính cưỡng chế tổ chức: sự bắt chước mù quáng; Goizueta, Ringwalt, Clayton chống lại nó.',
    'Lương CEO quá lớn, quyền chọn không tính chi phí, Ban Giám đốc không độc lập, kế toán mờ ám là cờ đỏ.'
  ],
  cards: [
    ['Ba phẩm chất quản lý Buffett tìm?', 'Hợp lý (phân bổ vốn), trung thực với cổ đông, chống lại tính cưỡng chế tổ chức.'],
    ['Lời khen cao nhất của Buffett?', 'Nhà quản lý luôn hành động và suy nghĩ như một người chủ.'],
    ['Ba phẩm chất con người theo Buffett?', 'Liêm chính, thông minh, nghị lực — thiếu liêm chính thì hai cái kia đẩy bạn xuống vực.'],
    ['Hành vi quản lý quan trọng nhất?', 'Phân bổ hợp lý nguồn vốn công ty.'],
    ['Khi nào nên giữ lại lợi nhuận?', 'Khi tái đầu tư tạo lợi nhuận cao hơn chi phí vốn.'],
    ['Ba lựa chọn khi lợi nhuận tái đầu tư dưới trung bình mà tiền mặt dư?', 'Tiếp tục tái đầu tư kém; mua sự tăng trưởng; trả lại tiền cho cổ đông.'],
    ['Vì sao Buffett hoài nghi “mua sự tăng trưởng”?', 'Công ty thường bị định giá quá cao; hợp nhất ngành mới dễ sai lầm.'],
    ['Mua lại cổ phiếu có lợi khi nào?', 'Khi giá thấp hơn giá trị thực: 1 đô la mua 2 đô la giá trị (giá 50, giá trị 100).'],
    ['Vì sao Berkshire không trả cổ tức?', 'Lợi nhuận trên vốn rất cao nên giữ lại tái đầu tư tốt hơn; cổ đông tin Buffett.'],
    ['Ba câu hỏi báo cáo cần trả lời?', 'Giá trị công ty? Khả năng đáp ứng nghĩa vụ? Quản lý làm tốt thế nào?'],
    ['Tính cưỡng chế tổ chức?', 'Lực vô hình khiến nhà quản lý bắt chước nhau, bất kể bất hợp lý thế nào.'],
    ['Goizueta chống cưỡng chế tổ chức ra sao?', 'Bán các ngành không liên quan, đưa Coca-Cola về ngành nước ngọt cơ bản khi đối thủ đa dạng hóa.'],
    ['Cách Clayton trả hoa hồng khác ngành?', 'Theo chất lượng khoản vay; quản lý chịu nửa khoản lỗ nếu khoản vay hỏng.'],
    ['Quan điểm về quyền chọn cổ phiếu?', 'Phải tính là chi phí; Berkshire thưởng bằng séc theo kết quả công việc.'],
    ['Ba cờ đỏ về báo cáo?', 'Không tính quyền chọn là chi phí/kế toán yếu; chú thích khó hiểu; công bố dự báo lợi nhuận.']
  ],
  quiz: [
    { q: 'Hành vi quản lý quan trọng nhất theo Buffett:', o: ['Marketing', 'Phân bổ hợp lý nguồn vốn', 'Tăng lương', 'Mua lại đối thủ'], a: 1, e: 'Nó quyết định giá trị cổ phiếu theo thời gian.' },
    { q: 'Nếu lợi nhuận tái đầu tư cao hơn chi phí vốn, công ty nên:', o: ['Trả hết cổ tức', 'Giữ lại và tái đầu tư', 'Mua lại cổ phiếu', 'Vay thêm'], a: 1, e: 'Đó là đường lối hợp lý duy nhất.' },
    { q: 'Mua lại cổ phiếu hợp lý khi:', o: ['Giá cao hơn giá trị', 'Giá thấp hơn giá trị thực', 'Luôn luôn', 'Không bao giờ'], a: 1, e: 'Mỗi đô la mang lại hơn một đô la giá trị.' },
    { q: 'Berkshire không trả cổ tức vì:', o: ['Không có lợi nhuận', 'Lợi nhuận trên vốn cao, cổ đông tin Buffett', 'Luật cấm', 'Muốn tránh thuế'], a: 1, e: 'Giữ lại tạo giá trị hơn.' },
    { q: 'Tính cưỡng chế tổ chức là:', o: ['Quy định của chính phủ', 'Xu hướng nhà quản lý bắt chước nhau một cách mù quáng', 'Quyền cổ đông', 'Thuế'], a: 1, e: 'Dẫn đến những quyết định ngu ngốc hàng loạt.' },
    { q: 'Goizueta chống cưỡng chế tổ chức bằng cách:', o: ['Đa dạng hóa sang rượu và phim', 'Tập trung lại ngành nước ngọt cơ bản', 'Phát hành thêm cổ phiếu', 'Đóng cửa công ty'], a: 1, e: 'Trong khi đối thủ mua nhà hàng, công viên giải trí.' },
    { q: 'Cách trả hoa hồng của Clayton:', o: ['Theo số nhà bán', 'Theo chất lượng khoản vay', 'Cố định', 'Theo doanh thu'], a: 1, e: 'Quản lý chịu nửa khoản lỗ nếu khoản vay hỏng.' },
    { q: 'Buffett thưởng nhà quản lý Berkshire bằng:', o: ['Quyền chọn cổ phiếu', 'Séc theo kết quả công việc', 'Cổ phiếu miễn phí', 'Không thưởng'], a: 1, e: 'Không phụ thuộc vào giá cổ phiếu Berkshire.' },
    { q: 'Cờ đỏ nào Buffett nêu?', o: ['Chú thích dễ hiểu', 'Chú thích khó hiểu', 'Báo cáo ngắn', 'Công ty không dự báo'], a: 1, e: 'Che giấu điều ban quản lý không muốn bạn biết.' },
    { q: 'Để đánh giá ban quản lý nên:', o: ['Chỉ đọc quý gần nhất', 'So sánh báo cáo thường niên nhiều năm và với đối thủ', 'Nghe tin đồn', 'Chỉ xem giá cổ phiếu'], a: 1, e: 'Xem kế hoạch quá khứ thực hiện ra sao.' },
    { q: 'Phẩm chất quan trọng nhất, theo Buffett 1993:', o: ['Thông minh', 'Liêm chính', 'Nghị lực', 'Hào nhoáng'], a: 1, e: 'Thiếu nó thì hai phẩm chất kia gây hại.' }
  ],
  match: [
    ['Phân bổ vốn', 'Hành vi quản lý quan trọng nhất'],
    ['Cưỡng chế tổ chức', 'Bắt chước mù quáng'],
    ['Goizueta', 'Đưa Coca-Cola về ngành nước ngọt'],
    ['Ringwalt', 'Bước ra khỏi thị trường khi giá thấp'],
    ['Quyền chọn cổ phiếu', 'Buffett: phải tính là chi phí'],
    ['Cờ đỏ', 'Chú thích khó hiểu, dự báo lợi nhuận']
  ]
}

);
