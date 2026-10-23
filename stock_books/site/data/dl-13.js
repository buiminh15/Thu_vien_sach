window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 13,
  title: 'Đường ống và kỹ thuật gia công đường ống',
  intro: 'Ống đồng mềm/cứng, cắt – uốn – loe – ram ống, phụ kiện nối loe, hàn thiếc – hàn bạc, nong ống tạo măng sông, thắt ống, kẹp ống, nhựa epoxy, siết mũ ren đầu loe. (Một số kỹ thuật trùng với sách WHO/EPI đã có; đây là cách trình bày theo giáo trình Việt Nam.)',
  sections: [
    { icon: '🔶', title: 'Ống đồng mềm và ống đồng cứng', blocks: [
      { t: 'p', x: 'Phần lớn đường ống tủ lạnh và điều hòa là ống đồng; còn có ống nhôm, thép, thép không gỉ, ống nhựa. Ống đồng lạnh được chế tạo và làm sạch kỹ bên trong khỏi bụi bẩn và hơi nước, bịt kín hai đầu, bên trong có khí nitơ bảo vệ. Cắt ống rồi phải bịt lại hai đầu đoạn còn lại; khi hàn cũng phải thổi khí nitơ vào trong để không tạo lớp oxit gây cặn bẩn.' },
      { t: 'table', head: ['', 'Ống đồng mềm', 'Ống đồng cứng'], rows: [
        ['Đặc điểm', 'Mềm dẻo, dễ uốn; lắp cần có giá đỡ', 'Độ cứng cao, ít cần giá đỡ; không uốn được, chỉ dùng đoạn thẳng + phụ kiện (tê, cút...)'],
        ['Cung cấp', 'Cuộn 7,6 m (25 ft) hoặc 15 m (50 ft)', 'Ống thẳng dài 6,1 m (20 ft)'],
        ['Nối ống', 'Đầu loe hoặc hàn bạc', 'Chỉ hàn (hàn mềm chỉ cho đường nước)']
      ] },
      { t: 'p', x: 'Hai loại chiều dày: K (dày) và L (trung bình); ống lạnh phần lớn là loại L. Đường kính ngoài hệ Anh–Mỹ: 1/4" (6,35), 3/8" (9,53), 1/2" (12,7), 5/8" (15,87), 3/4" (19,05), 7/8" (22,22), 1 1/8" (28,57), 1 3/8" (34,9) mm; chiều dày thành ống 0,76–1,40 mm. Hệ mét: Ø6, 8, 10, 12, 14, 15 mm.' },
      { t: 'tip', x: 'Ống đồng mềm có thể hóa cứng khi uốn đi uốn lại nhiều lần hoặc dùng búa gõ. Muốn làm mềm lại thì <b>ram ống</b>: nung nóng đỏ rồi để nguội từ từ. Cần gia công và cố định ống với giá đỡ để khỏi biến dạng; tạo các vòng cân bằng rung động để ống không bị tinh thể hóa, nứt, vỡ.' }
    ] },
    { icon: '✂️', title: 'Cắt ống', blocks: [
      { t: 'p', x: 'Dùng dao cắt ống (ống nhỏ và mềm) hoặc cưa (ống to và cứng). Phía sau dao cắt có mũi nạo bavia.' },
      { t: 'steps', items: [
        'Kẹp ống vào dao cắt, xoay dao theo chiều ngược kim đồng hồ; khi thấy lỏng tay thì vặn dần núm vặn để dao ăn sâu vào ống.',
        'Sau khi cắt, mặt cắt có bavia cần được nạo nhẵn; khi nạo quay mặt cắt xuống phía dưới để mạt đồng rơi ra ngoài chứ không rơi vào trong ống.',
        'Nạo bavia bằng mũi dao hình tam giác phía sau dao cắt, chú ý không làm hỏng bề mặt trong của ống; sau đó mài nhẵn mặt cắt bằng dao hoặc dũa, ống vẫn giữ ở tư thế quay xuống dưới.',
        'Làm sạch hoàn toàn bề mặt trong của ống khỏi bụi bẩn và mạt đồng vì có thể làm tắc phin và làm máy nén cùng các chi tiết bị mài mòn nhanh chóng.'
      ] },
      { t: 'warn', x: 'Khi cắt ống mao: cắt cả các phía xung quanh bằng dũa tam giác rồi bẻ ống uốn đi uốn lại quanh vết cắt, đường kính trong sẽ không bị móp. Cắt bằng dao cắt ống thì đường kính trong luôn bị thu hẹp. Không cần làm sạch đầu ống mao vì nước hàn có thể chảy vào bịt một phần lỗ thoát.' }
    ] },
    { icon: '↩️', title: 'Uốn ống', blocks: [
      { t: 'key', x: 'Bán kính uốn tối thiểu an toàn: R<sub>min</sub> ≥ 5d (5 lần đường kính ống).' },
      { t: 'p', x: 'Uốn phải thận trọng và từ từ để khỏi gãy hoặc cong vênh; tiết diện không bị thắt lại, bẹp. Dụng cụ rẻ tiền hiệu quả là <b>lò xo uốn ống</b>: gọn nhẹ, nhiều cỡ; dùng cho đoạn đầu cuối ngay cả với ống đã loe. Lò xo đặt trong ống sẽ uốn theo ống; lấy ra bằng cách xoay dọc theo ống. Lò xo ngoài thì phải uốn trước khi loe nếu sát đầu loe; lò xo trong thì uốn trước hay sau đều được.' },
      { t: 'p', x: 'Dụng cụ uốn ống bánh xoay hoặc cần xoay (chính xác dưới 1 mm). Cách dùng cần xoay: đặt ống vào rãnh bánh xe định hình, lật móc ngoặm giữ ống; lấy đầu ống đặt đúng vào cữ (vị trí 0°); uốn theo góc yêu cầu, ví dụ 90° thì uốn đến vạch 90° trên bánh định hình. Với ống thép luôn phải dùng dụng cụ uốn ống. Giữ sạch sẽ, khô ráo rãnh định hình để ống khỏi trượt.' },
      { t: 'widget', name: 'dl-tube-bend', title: 'Bán kính uốn tối thiểu: ống bị gập hay uốn tốt' }
    ] },
    { icon: '🔔', title: 'Loe ống', blocks: [
      { t: 'p', x: 'Thành ống mỏng nên không nối bằng ren được; nối bằng loe (flare) hoặc hàn bạc/đồng. Trước khi đưa ống vào bàn loe phải kiểm tra ống đã sạch chưa; kẹp đầu ống nhô lên khỏi mặt bàn loe đúng cỡ.' },
      { t: 'table', head: ['Cỡ ống', 'Ø6,35 (1/4")', 'Ø9,5 (3/8")', 'Ø12,7 (1/2")', 'Ø15,9 (5/8")', 'Ø19,1 (3/4")'], rows: [
        ['Kích thước A – ống nhô lên (mm)', '≈ 1', '≈ 1', '≈ 1', '≈ 1', '≈ 1'],
        ['Đường kính miệng loe (mm)', '8,3–8,7', '12,0–12,4', '15,4–15,8', '18,6–19,0', '22,9–23,3']
      ] },
      { t: 'warn', x: 'Nhô lên quá thấp: đầu loe quá nhỏ, khả năng rò ga lớn. Nhô lên quá cao: đầu loe quá to không lọt vào mũ ren hoặc miệng loe bị rách, nhăn cũng rất dễ rò.' },
      { t: 'steps', items: [
        'Chuẩn bị kỹ đầu ống: ống thẳng, vết cắt vuông góc với ống; tẩy bavia trong và ngoài. Sau khi cắt dùng dũa mài bằng đầu, rồi doa tay nạo bavia phía trong.',
        'Dùng dũa mài bằng và mài vuông góc đầu cắt; cẩn thận không để mạt đồng rơi vào trong ống; dùng mũi doa bavia làm sạch phía trong.',
        'Dùng bàn loe đơn để loe ống (có loại cho ống tiêu chuẩn Anh–Mỹ, có loại cho hệ mét).',
        'Luồn ống vào bàn loe theo kích thước A; siết chặt tai hồng bàn loe.',
        'Nhỏ vài giọt dầu vào nón loe và mép ống; vặn tay vặn để loe từ từ: cứ tiến nửa vòng xoay thì lùi 1/4 vòng (hoặc tiến 3/4 vòng lùi 1/4 vòng). Xoay tiến liên tục không lùi dễ làm ống hóa cứng và nứt vỡ.',
        'Loe đủ 90° (đừng loe 7–8 phân), đừng siết quá mạnh nón loe làm đầu loe quá mỏng dễ gãy.'
      ] },
      { t: 'p', x: 'Tiêu chí kiểm tra đầu loe: bề mặt loe có đồng tâm không? Miệng loe có nứt không? Bề mặt có nhẵn, không bị xây xát trầy sẹo? Mép loe có bavia, gờ sắc không?' },
      { t: 'widget', name: 'dl-flare', title: 'Dụng cụ loe ống (hình đơn giản) và các lỗi đầu loe' },
      { t: 'p', x: '<b>Đầu loe đúp</b> dùng cho điều hòa ô tô, một số máy lạnh thực phẩm cần an toàn rò ga tốt khi có rung động; ống lớn đôi khi cũng dùng. Tủ lạnh gia đình và điều hòa dân dụng thường không dùng đầu loe đúp; một số điều hòa biến tần dùng ga R410A, R407C cần đầu loe đúp vì áp suất ngưng rất cao.' },
      { t: 'p', x: 'Nếu miệng loe nứt vì ống đã hóa cứng, ram ống: nung đầu ống đến khi thấy màu đỏ thẫm hoặc đỏ xanh rồi để nguội tự nhiên trong không khí. Gõ, đập, xử lý thô hay uốn ống đều làm ống hóa cứng.' }
    ] },
    { icon: '🔗', title: 'Phụ kiện nối loe', blocks: [
      { t: 'p', x: 'Là phụ kiện tiêu chuẩn bằng đồng cứng có ren độ chính xác cao: tê, cút, nối thẳng, mũ ren... Có hai hệ: Anh–Mỹ và hệ mét — <b>không lắp lẫn được</b> với nhau.' }
    ] },
    { icon: '🔥', title: 'Hàn ống: hàn thiếc và hàn bạc', blocks: [
      { t: 'table', head: ['', 'Hàn thiếc (mềm)', 'Hàn bạc / hàn đồng (cứng)'], rows: [
        ['Dùng cho', 'Đường ống nước, thoát nước ngưng', 'Đường ống ga lạnh'],
        ['Que hàn', '50/50 thiếc–chì: chảy 182 °C, lưu động 213 °C; 95/5 thiếc–antimon: chảy 232 °C, lưu động 241 °C (bền hơn)', 'Hợp kim bạc 30–60% Ag hoặc đồng–phốt pho; chảy 540–820 °C; que bạc 35–45% Ag chảy 604 °C, lưu động 618 °C'],
        ['Mối hàn', 'Độ bền thấp', 'Kín và rất bền, chịu áp và nhiệt']
      ] },
      { t: 'key', x: 'Độ bền cơ học của mối hàn không do hợp kim hàn quyết định mà do khe hở hợp lý của măng sông giữa hai ống quyết định. Hàn chảy dựa vào hiện tượng mao dẫn: nước hàn điền đầy khoảng không gian mỏng giữa hai ống.' },
      { t: 'h3', x: 'Các bước hàn bạc' },
      { t: 'steps', items: [
        'Làm sạch cơ khí (bông thép không gỉ bên ngoài; bàn chải thép không gỉ mịn cho bề mặt trong măng sông).',
        'Lắp khít hai chi tiết và có gá đỡ để không xê dịch.',
        'Cho chất trợ dung (thuốc hàn) sạch vào khe hàn, tuân theo hướng dẫn của nhà sản xuất que hàn.',
        'Nung nóng đều mối hàn đến nhiệt độ thích hợp, liên tục quét ngọn lửa theo hình số 8 để nhiệt đồng đều. Ngọn lửa bao trùm toàn bộ mối hàn tránh không khí tiếp xúc.',
        'Quét que hàn lên mép mối hàn để que tự chảy thành lỏng và thấm vào khe giữa hai ống. Không dùng ngọn lửa trực tiếp đốt chảy que hàn.',
        'Giữ cố định chi tiết, để mối hàn tự nguội trong không khí; làm sạch mối hàn bằng bàn chải và nước ấm. Kiểm tra mối hàn nhẵn, phẳng, đầy, không rỗ.'
      ] },
      { t: 'p', x: 'Màu sắc trợ dung báo nhiệt độ: ~100 °C ẩm bốc hơi; sau đó trợ dung chuyển trắng sữa; ~316 °C bắt đầu sủi bọt; ~427 °C nằm trên bề mặt có màu trắng sữa; ~593 °C thành chất lỏng trong, gần nhiệt độ hàn. Khi đạt nhiệt độ hàn ngọn lửa thường có màu xanh lục.' },
      { t: 'widget', name: 'dl-braze-flux', title: 'Hàn bạc: nhiệt độ và màu trợ dung (chỉ báo khi hàn)' },
      { t: 'warn', x: 'Nước hàn không được chảy vào trong ống. Thổi hết không khí trong ống bằng khí CO₂ hoặc nitơ để bảo vệ — nếu trong ống có dính dầu mỡ, nhiệt ở mỏ hàn làm chúng bay hơi, trộn với không khí có thể gây nổ. Khí bảo vệ còn ngăn lớp oxy hóa mặt trong mối hàn (nguy cơ tắc phin lọc và các van sau này). KHÔNG dùng ga lạnh, oxy hoặc khí nén làm khí bảo vệ.' },
      { t: 'warn', x: 'Kiểm tra thành phần que hàn có cadmium (cadimi) không; nếu có phải thông gió tốt và tránh khói hàn bay vào mắt vì khói cadmium rất độc hại.' },
      { t: 'list', items: [
        'Mỏ hàn tốt nhất oxy–axetylen; nếu không có thì dùng mỏ propan, propan/butan hoặc đèn khò.',
        'Ống sơn: dùng ngọn lửa đốt hết lớp sơn rồi đánh sạch bằng bàn chải kim loại hoặc giấy nhám.',
        'Mối hàn đồng/thép: nung ống đồng trước vì hệ số dẫn nhiệt của đồng lớn, tổn thất nhiệt nhiều. Hơ nóng que hàn, chấm vào trợ dung để que dễ chảy hơn.',
        'Sau hàn phải làm sạch kỹ — trợ dung còn trên kim loại làm hàn gỉ hoặc tạm thời bịt kín chỗ rò mà chỉ một thời gian sau ga lại rò qua đấy. Mối hàn nguội nhanh hay chậm đều được; có thể làm nguội bằng nước.',
        'Phát hiện lỗi hàn (rỗ, nứt, chỗ nước hàn không thấm) phải hàn lại.'
      ] }
    ] },
    { icon: '🧩', title: 'Nong ống, thắt ống, kẹp ống', blocks: [
      { t: 'p', x: '<b>Nong ống tạo măng sông</b>: ống đồng ngoài phải nong ra để ống đối diện lọt vào tạo đoạn măng sông ống lồng trong ống; chiều dài măng sông thường bằng đường kính ống. Hai loại dụng cụ: chày nong ống và kim nong ống (ống hệ Anh–Mỹ và hệ mét). Dùng chày nong: kẹp ống vào khuôn (không phải hình nón 90° để loe mà là khuôn hình trụ), dùng chày và búa nong đến khi đạt chiều dài yêu cầu. Dùng kim nong: chọn mũi phù hợp, lắp vào đầu ống và nong bằng tay.' },
      { t: 'p', x: '<b>Thắt ống</b>: khi hai ống hàn với nhau có kích cỡ khác nhau quá nhiều (ống mao và ống dàn bay hơi; ống mao với ống từ phin lọc) thì bóp thắt ống lớn lại để đường kính trong bằng đường kính ngoài ống nhỏ — vừa tạo khoảng không gian điền đầy nước hàn vừa ngăn nước hàn chảy vào trong gây tắc hoặc thu hẹp ống nhỏ. Dụng cụ thắt ống giống dao cắt ống nhưng lưỡi dao thay bằng bánh xe bóp thắt dần ống.' },
      { t: 'p', x: '<b>Kẹp ống</b>: khi sửa tủ lạnh cần kẹp ống công nghệ (ống nạp ga) để hàn bịt đầu ống. Có ống công nghệ không phải Ø3 mà Ø6 rất khó kẹp kín nên phải dùng dụng cụ kẹp ống (ví dụ ROBINAIR, cho ống đồng mềm tối đa Ø9,5 mm).' },
      { t: 'widget', name: 'dl-tube-pinch', title: 'Thắt ống và kẹp ống công nghệ (hình đơn giản)' }
    ] },
    { icon: '🧪', title: 'Nhựa epoxy', blocks: [
      { t: 'p', x: 'Dùng để hàn kín các vết nứt, rò rỉ ở dàn bay hơi hoặc các mối nối; gắn kết với độ bền cao với thép, đồng, gỗ, nhiều loại nhựa. Thích hợp nhất cho kỹ thuật lạnh là loại hai thành phần (nhựa + chất làm cứng); trộn lẫn ở nhiệt độ phòng thì hỗn hợp cứng lại. Các lỗ thủng nhỏ đường kính đến 1,5 mm có thể hàn kín thành công; lỗ to phải dùng tấm kim loại cứng cùng đường ống đặt lên lỗ thủng rồi mới phủ epoxy.' },
      { t: 'steps', items: [
        'Làm sạch bề mặt cần hàn bằng giấy nhám, bông thép hoặc bàn chải dây thép.',
        'Rửa sạch bằng dung dịch toluen, axeton hoặc dung dịch công nghiệp tương tự.',
        'Hòa trộn đều hai thành phần epoxy trên bề mặt sạch (ví dụ miếng bìa cứng) đến khi không còn vết màu, màu sắc hỗn hợp hoàn toàn đồng đều.',
        'Phủ hỗn hợp lên bề mặt đã chuẩn bị (lỗ nhỏ), hoặc phủ lên cả tấm phủ nếu lỗ lớn. Hỗn hợp sau khi hòa trộn phải sử dụng ngay vì cứng lại rất nhanh.'
      ] },
      { t: 'tip', x: 'Thợ lạnh nên mua epoxy ở cửa hàng điện lạnh vì mới chắc chắn chịu được R12, R22 và các freon khác. Thời hạn bảo quản phần lớn epoxy chỉ khoảng 6 tháng. Epoxy có chất không tốt cho sức khỏe; không tiếp xúc lâu, nếu dính rửa bằng xà phòng.' }
    ] },
    { icon: '🔩', title: 'Siết chặt mũ ren đầu loe', blocks: [
      { t: 'p', x: 'Mối nối ống loe dùng trong hầu hết điều hòa và là mối ghép tạm thời nhất. Rò ga luôn là hư hỏng hay gặp nhất, nhất là ở điều hòa hai và nhiều cụm. Dù đầu loe hoàn hảo, siết không đúng vẫn rò.' },
      { t: 'steps', items: [
        'Tháo mũ ren bịt kín đầu ống: cụm ngoài nhà tháo mũ ren và nắp bịt trên đầu van chặn ống ga lỏng và hơi; dàn trong nhà tháo mũ ren và ống mũ ra khỏi cả hai ống lỏng và hơi (dùng hai cờ lê).',
        'Nhỏ dầu nhớt cho đầu ống loe.',
        'Chỉnh ống loe thẳng lên đầu côn, dùng tay vặn mũ ren chặt vào đầu côn 4–5 lần. Nếu vặn 2–3 lần đã thấy chặt thì vặn cũ nên vặn chặt thêm 1 lần nữa.',
        'Siết chặt bằng cờ lê lực (hai cờ lê: một giữ, một siết) theo mômen tiêu chuẩn.',
        'Nếu đuổi không khí khỏi dàn máy điều hòa bằng hơi môi chất lạnh, phải siết chặt mũ ren trên van chặn đường hơi sau khi đã đuổi khí.'
      ] },
      { t: 'table', head: ['Cỡ ống (mm)', 'Mômen xoắn (kG·cm)', 'Mômen xoắn (N·m)'], rows: [
        ['Ø9,5', '330–400', '33–40'], ['Ø12,7', '500–620', '50–62'], ['Ø15,9', '630–770', '63–77'], ['Ø19,1', '1000–1200', '100–120']
      ] },
      { t: 'warn', x: 'Vặn nhẹ quá có nguy cơ hở; vặn mạnh quá có nguy cơ đứt, vỡ côn loe.' },
      { t: 'widget', name: 'dl-torque', title: 'Mômen siết mũ ren đầu loe: chọn cỡ ống' }
    ] }
  ],
  summary: [
    'Ống đồng lạnh làm sạch bên trong, bịt hai đầu; ống mềm cuộn 7,6/15 m, ống cứng thẳng 6,1 m.',
    'Bán kính uốn tối thiểu R ≥ 5d; dùng lò xo uốn ống hoặc dụng cụ cần xoay.',
    'Cắt ống: quay mặt cắt xuống khi nạo bavia; làm sạch mạt đồng.',
    'Loe: ống nhô A đúng cỡ (≈1 mm); tiến nửa vòng lùi 1/4 vòng; loe đủ 90°; ram ống nếu nứt.',
    'Hàn thiếc cho đường nước; hàn bạc cho đường ga; độ bền do khe hở măng sông.',
    'Khi hàn thổi nitơ/CO₂ bảo vệ — không dùng ga lạnh, oxy, khí nén.',
    'Thắt ống chống nước hàn chảy vào trong; kẹp ống công nghệ trước khi hàn bịt.',
    'Siết mũ ren theo mômen: Ø9,5: 33–40 N·m; Ø12,7: 50–62; Ø15,9: 63–77; Ø19,1: 100–120.'
  ],
  cards: [
    ['Hai độ dày ống đồng K và L?', 'K dày; L trung bình (phần lớn ống lạnh là L)'],
    ['Ống đồng mềm cuộn dài?', '7,6 m (25 ft) và 15 m (50 ft)'],
    ['Ống đồng cứng thẳng dài?', '6,1 m (20 ft)'],
    ['Bán kính uốn tối thiểu?', 'R ≥ 5d'],
    ['Ram ống là gì?', 'Nung đỏ rồi để nguội từ từ để ống hóa mềm lại'],
    ['Khi nạo bavia quay mặt cắt hướng nào?', 'Xuống dưới, để mạt đồng không rơi vào ống'],
    ['Quy tắc xoay khi loe?', 'Tiến nửa vòng, lùi 1/4 vòng'],
    ['Loe đủ bao nhiêu độ?', '90°'],
    ['Loe quá thấp / quá cao?', 'Đầu loe quá nhỏ rò ga / quá to không lọt mũ ren, dễ rách'],
    ['Hàn thiếc dùng cho?', 'Đường nước, thoát nước ngưng'],
    ['Hàn bạc dùng cho?', 'Đường ga lạnh'],
    ['Khe hở măng sông quyết định gì?', 'Độ bền cơ học mối hàn'],
    ['Khí bảo vệ khi hàn?', 'CO₂ hoặc nitơ'],
    ['Que hàn có cadimi nguy hiểm vì?', 'Khói cadmium rất độc'],
    ['Thắt ống để làm gì?', 'Tạo chỗ điền nước hàn và ngăn nước hàn chảy vào làm tắc ống nhỏ'],
    ['Thời hạn bảo quản epoxy?', 'Khoảng 6 tháng'],
    ['Mômen siết Ø12,7?', '50–62 N·m']
  ],
  quiz: [
    { q: 'Bán kính uốn tối thiểu ống Ø12,7 mm:', o: ['≈ 13 mm', '≈ 64 mm', '≈ 200 mm', '≈ 25 mm'], a: 1, e: 'R ≥ 5d = 5 × 12,7 ≈ 64 mm.' },
    { q: 'Khi hàn ống ga, khí bảo vệ phù hợp là:', o: ['Oxi', 'Nitơ', 'Ga lạnh', 'Khí nén'], a: 1, e: 'CO₂ hoặc nitơ.' },
    { q: 'Ống cứng nối bằng:', o: ['Hàn', 'Uốn', 'Loe', 'Hàn thiếc cho ga'], a: 0, e: 'Chỉ hàn (cứng) cho đường ga.' },
    { q: 'Loe ống tránh hóa cứng bằng cách:', o: ['Xoay tiến liên tục', 'Tiến nửa vòng, lùi 1/4 vòng', 'Bôi nước', 'Gõ búa'], a: 1, e: 'Cứ tiến nửa vòng thì lùi 1/4 vòng.' },
    { q: 'Mômen siết mũ ren ống Ø15,9 khoảng:', o: ['10 N·m', '35 N·m', '70 N·m', '200 N·m'], a: 2, e: '63–77 N·m.' },
    { q: 'Hàn thiếc dùng cho:', o: ['Ống ga', 'Ống nước, thoát nước ngưng', 'Dàn bay hơi', 'Máy nén'], a: 1, e: 'Mối hàn thiếc yếu.' },
    { q: 'Khe hở măng sông quyết định:', o: ['Màu mối hàn', 'Độ bền cơ học mối hàn', 'Giá', 'Tốc độ'], a: 1, e: 'Mao dẫn điền đầy khe hẹp.' },
    { q: 'Nước hàn chảy vào trong ống sẽ:', o: ['Vô hại', 'Gây tắc, khó loại bỏ', 'Làm sạch ống', 'Tăng áp'], a: 1, e: 'Nhiều trường hợp không loại ra được.' }
  ],
  match: [
    ['Hàn bạc', 'Đường ga lạnh'],
    ['Hàn thiếc', 'Đường nước'],
    ['Lò xo uốn ống', 'Chống bẹp ống'],
    ['Ram ống', 'Làm mềm lại'],
    ['Thắt ống', 'Ống mao với ống lớn'],
    ['Epoxy', 'Lỗ thủng ≤ 1,5 mm']
  ]
});
