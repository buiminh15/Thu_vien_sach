window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 15,
  title: 'Một số công việc sửa chữa',
  intro: 'Xác định hỏng blốc, sửa và thay ống mao, thử hệ thống bị tắc, thay phin, sửa xả băng hơi nóng, thu hồi ga, tháo – thay blốc, nguyên nhân cháy động cơ, vệ sinh sau cháy, sửa dàn ngưng/dàn bay hơi, đại tu; cuối cùng là danh mục dụng cụ sửa chữa lạnh.',
  sections: [
    { icon: '🔍', title: 'Xác định hư hỏng của blốc', blocks: [
      { t: 'p', x: 'Thay blốc vừa tốn kém vừa mất công, nên phải chắc chắn blốc thật sự hỏng. Hư hỏng phần điện thường là nguyên nhân chính dẫn tới thay blốc trong khi phần cơ còn tốt; nhưng khi blốc còn nằm trong hệ thống điện chung thì hỏng hóc ở phần điện khác có thể khiến thợ nhận định nhầm là hỏng động cơ máy nén. Vì vậy để kiểm tra mô tơ máy nén, tháo bỏ toàn bộ thiết bị điện khác, dùng một phích cắm điện riêng đấu thẳng vào các cọc điện của blốc.' },
      { t: 'steps', items: [
        'Vệ sinh sạch sẽ bên ngoài blốc.',
        'Mở nắp bảo vệ cọc tiếp điện.',
        'Tháo rơle khởi động, rơle bảo vệ, tụ khởi động.',
        'Kiểm tra thông mạch cuộn dây, điện trở cách điện giữa cuộn dây và vỏ.',
        'Kiểm tra điện trở các cuộn dây (kiểm tra chập mạch).',
        'Nếu toàn bộ thông số bảo đảm thì chọn tụ khởi động phù hợp, rơle bảo vệ phù hợp, nối mạch khởi động thử.',
        'Blốc khởi động tốt: hỏng ở mạch điện ngoài. Blốc không khởi động được: phải bổ máy quấn lại động cơ hoặc thay blốc mới.',
        'Nếu mạch điện ngoài cũng không hỏng thì máy nén bị hỏng cơ khí, ví dụ gãy ống dây, gãy clape đẩy, clape hút...',
        'Kiểm tra máy nén bằng đồng hồ công tơ mét: nếu trị số tiêu thụ điện thấp hơn định mức khi áp suất đầu hút và đầu đẩy không bình thường thì máy nén đã quá mòn.'
      ] },
      { t: 'h3', x: 'Thử khả năng nén bằng van trích' },
      { t: 'p', x: 'Lắp một van trích vào đường hút, nối van trích với bộ nạp 3 dây, kẹp ống hút trước van trích. Cho máy nén chạy 5–10 phút, ghi lại độ chân không đạt được, dừng máy. Nếu độ chân không giảm dần về 680 mbar (510 mmHg) rồi 330 mbar (250 mmHg) thì van xả của máy nén bị rò: blốc cần thay hoặc đại tu. Không chạy quá lâu vì máy sẽ quá nóng.' },
      { t: 'p', x: 'Phương pháp khác: lắp van trích vào ống công nghệ, đuổi sạch khí khỏi ống công nghệ, kẹp ống hút, đo áp suất hút. Cho máy nén chạy 5–10 phút, ghi lại độ chân không đạt được (không chạy lâu hơn vì không có ga lạnh về làm mát máy nén sẽ quá nóng). Dừng máy quan sát: nếu áp suất đầu hút tăng thì van xả và van hút bị hở. Khả năng hút chân không cao của máy nén (trong 2 phút) và độ kín của van hút, van đẩy kém nếu kim áp kế quay dần về 0.' },
      { t: 'widget', name: 'dl-compressor-diag', title: 'Chẩn đoán blốc: thông mạch – cách điện – khởi động thử – nén' }
    ] },
    { icon: '🧵', title: 'Sửa chữa và thay ống mao', blocks: [
      { t: 'h3', x: 'Cắt ống mao' },
      { t: 'list', items: [
        'Không cắt ống mao bằng dao cắt ống vì làm tiết diện ống thắt lại rất nhiều.',
        'Không dùng cưa vì mạt đồng có thể lọt vào hệ thống gây tắc hoặc hại máy nén.',
        'Dùng dũa 3 cạnh, dũa xung quanh ống, sau đó bẻ đi bẻ lại để tách ống mao ra.'
      ] },
      { t: 'h3', x: 'Ảnh hưởng của việc chọn ống mao' },
      { t: 'table', head: ['Ống mao', 'Hiện tượng'], rows: [
        ['Chọn vừa đúng + lượng nạp đúng', 'Dàn ngưng hầu như không có lỏng, chỉ có lỏng ở đoạn cuối gần phin sấy lọc; dàn bay hơi đủ lỏng nhưng ống hút không đổ mồ hôi hoặc bám tuyết'],
        ['Chọn quá nhỏ (Ø trong quá nhỏ / ống quá dài, trở lực quá lớn)', 'Dàn ngưng gần như ngập lỏng, dàn bay hơi thiếu lỏng, chỉ một phần dàn bám tuyết (giống hiện tượng thiếu ga nhưng không phải do nạp thiếu). Áp suất ngưng quá cao trong khi áp suất bay hơi quá thấp'],
        ['Nạp thừa ga', 'Áp suất ngưng, bay hơi và áp suất cân bằng đều cao hơn bình thường; ống hút thường đổ mồ hôi hoặc bám tuyết'],
        ['Nạp thiếu ga', 'Cả 3 loại áp suất đều nhỏ hơn bình thường']
      ] },
      { t: 'key', x: 'Khi nạp đủ ga: áp suất ngưng tương đương nhiệt độ bão hòa t<sub>k</sub> ≈ t<sub>mt</sub> + 17 °C.' },
      { t: 'widget', name: 'dl-pressure-charge', title: 'Ba đường đặc tính áp suất: nạp đủ – thừa – thiếu ga' },
      { t: 'h3', x: 'Thay ống mao' },
      { t: 'p', x: 'Tắc ống mao và phin lọc hoặc tắc ống mao thì nên thay ống mao mới đồng thời với phin sấy lọc mới. Ống mao mới phải bảo đảm đúng trở lực như ống mao cũ: cùng đường kính trong thì cùng chiều dài. Có bộ đường đo đường kính trong ống mao. Nếu không có sẵn ống mao cùng loại đường kính thì chọn chiều dài phù hợp để có trở lực giống ống cũ, bằng hai cách: dùng toán đồ hình 4.14 (từ chiều dài và đường kính ống cũ xác định một điểm, kẻ ngang gặp đường kính ống định sử dụng, dóng xuống được chiều dài cần tìm) hoặc phương pháp cân cáp (mục 4.6.2).' },
      { t: 'h3', x: 'Sửa ống mao: thông tắc' },
      { t: 'p', x: 'Việc khó khăn nhất là tháo ống mao ra khỏi phin sấy lọc cũng như từ phía dàn bay hơi bằng đèn khò nhả mối hàn bạc. Trong một số trường hợp chỉ cần làm vệ sinh sạch bên trong ống mao:' },
      { t: 'steps', items: [
        'Tháo ống mao ra khỏi hệ thống lạnh bằng đèn khò nhả mối hàn.',
        'Lắp dụng cụ thông ống mao (xi lanh, pittông và trục vít, tay quay tạo áp suất thủy lực bằng dầu; tay cầm; áp kế).',
        'Tăng áp suất dầu hoặc R141b trong xi lanh bằng cách xoay tay quay để đẩy chất bẩn, sáp tích tụ trên thành ống ra ngoài. Dụng cụ này có khả năng tăng áp suất tới 1400 bar.',
        'Sau khi thông xong có thể dùng R141b hoặc chính ga lạnh dùng cho tủ để phun thông thêm 1 lần nữa.',
        'Lắp ống mao vào hệ thống với 1 phin sấy lọc mới.'
      ] },
      { t: 'tip', x: 'Nếu phát hiện ống mao bị tắc do sáp tích tụ trên thành ống thì sau khi sửa ống mao cần thay cả dầu mới, loại dầu không có sáp (parafin). Hãng Watsco (Mỹ) có ống mao cố định đường kính và chiều dài hàn sẵn vào phin sấy lọc, trở lực điều chỉnh nhờ các dây kim loại kích cỡ khác nhau luồn bên trong; Standard Refrigeration có loại ống mao có kim van điều chỉnh trở lực; còn có bộ gá đặc biệt bóp hẹp ống mao tạo trở lực cao hơn.' }
    ] },
    { icon: '🚫', title: 'Xác định hệ thống bị tắc', blocks: [
      { t: 'p', x: 'Hệ thống bị tắc có thể do: tắc bẩn phin sấy lọc, tắc ống mao do sáp tích tụ hoặc dập, bẹp ống mao.' },
      { t: 'list', items: [
        'Cho máy nén chạy 3–5 phút, tắt máy và lắng nghe đoạn ống mao phun vào dàn bay hơi: không nghe tiếng ga rít khi phun vào dàn thì ống mao hoặc phin lọc bị tắc.',
        '<b>Tắc ẩm</b>: dàn lạnh bám tuyết rồi lại tan tuyết, lạnh lúc có lúc không; máy nén làm việc gần như liên tục mà vẫn kém lạnh; dòng máy nén lúc cao lúc thấp; dàn ngưng lúc nóng nhiều lúc nóng ít.',
        '<b>Tắc bẩn</b> ở phin lọc hoặc ống mao: dàn lạnh kém lạnh hoặc mất lạnh hoàn toàn; máy nén ăn dòng nhỏ; dàn ngưng không nóng vì không có ga ngưng tụ; dàn bay hơi có áp suất gần như chân không.'
      ] },
      { t: 'h3', x: 'Thử xem hệ thống còn ga hay không' },
      { t: 'steps', items: [
        'Cho tủ chạy khoảng 3–5 phút.',
        'Lấy que diêm hoặc bật lửa ga hơ khoảng 5–10 giây (tùy ống lớn hay nhỏ) lên đoạn ống dàn ngưng trước phin sấy lọc khoảng 10 cm, sau đó dùng tay sờ thử lên đoạn ống.',
        'Thấy rất nóng → thiếu ga, vì bên trong chỉ có hơi ga truyền nhiệt kém. Thấy ít nóng → đủ ga vì bên trong có ga lỏng, ga lỏng bay hơi nên ít nóng.',
        'Chính xác hơn: dùng van trích trích vào ống dàn ngưng ngay trước phin sấy lọc; cho máy chạy 3–5 phút rồi mở van trích: chỉ có hơi ga xì ra → thiếu ga; có ga lỏng xì ra → đủ ga.'
      ] },
      { t: 'widget', name: 'dl-block-test', title: 'Thử tắc ống mao/phin: cắt ống mao sát phin và quan sát hơi ga' },
      { t: 'h3', x: 'Thử tắc ống mao và phin lọc' },
      { t: 'steps', items: [
        'Làm sạch vị trí phin sấy lọc và ống mao.',
        'Lắp van trích vào ống hút; nối van trích với bình ga qua bộ nạp 3 dây.',
        'Cắt ống mao sát đầu phin sấy lọc.',
        'Mở van trích, cho ga từ chai ga vào hệ thống, quan sát.',
        'Có hơi ga xì ra ở phin sấy lọc → phin không tắc; không thấy ga ra → phin bị tắc.',
        'Không thấy hơi ra từ phía ống mao → ống mao đã bị tắc.',
        'Phin sấy lọc tắc phải thay mới. Ống mao có thể dùng bơm áp lực cao để thông; không thông được cũng phải thay mới.'
      ] }
    ] },
    { icon: '🧂', title: 'Phin sấy lọc: khi nào thay, chọn cỡ nào', blocks: [
      { t: 'p', x: 'Phin sấy lọc phải được thay khi: thay blốc mới; phin bị tắc bẩn hay hệ thống bị tắc ẩm. Một biện pháp hữu hiệu để giữ hệ thống sạch sẽ, khô ráo bên trong là lắp phin sấy lọc mới sau khi sửa chữa, nạp lại ga.' },
      { t: 'table', head: ['Công suất động cơ tủ (HP)', '1/8', '1/6–1/4', '1/4–1/2', '1/2–3/4'], rows: [
        ['Thể tích phin (cm³, silicagel)', '80', '125', '250', '375']
      ] },
      { t: 'list', items: [
        'Tất cả phin sấy lọc khi sản xuất ở xưởng đều được nạp kín. Không được bỏ nắp khi chưa sử dụng; chỉ bỏ nắp khi sẵn sàng lắp ngay vào hệ thống, nếu không phin sẽ mất tác dụng do hút ẩm từ không khí.',
        'Phin lọc nên lắp đặt trước thiết bị tiết lưu; trên thân phin thường có mũi tên chỉ hướng dòng chảy của ga. Có loại có gắn sẵn đầu ga để lắp van dịch vụ.',
        'Nhiều thợ lạnh dùng 2 phin sấy lọc: một phin lắp ngay trước ống mao, một phin lắp sau dàn bay hơi trước máy nén. Điều này rất có lợi để loại bỏ được hầu hết tạp chất, bụi bẩn cũng như ẩm lọt vào hệ thống sau bảo dưỡng sửa chữa.',
        'Phin sấy lọc không tái sinh được: phải thay phin mới (đã nói ở chương 4).'
      ] }
    ] },
    { icon: '❄️', title: 'Sửa bộ phận xả băng bằng hơi nóng', blocks: [
      { t: 'p', x: 'Van chặn trên đường bypass hơi nóng từ đầu máy nén sang dàn bay hơi thường là van điện từ. Khi xả băng, van điện từ mở, hơi nóng từ đầu máy nén đi thẳng vào dàn bay hơi để xả băng. Khi dàn lạnh đóng băng tuyết quá dày, hư hỏng có thể nằm ở van điện từ và đồng hồ xả băng: cuộn dây hỏng không có từ lực đóng mở van; kim van bị dính, kẹt không mở được; đồng hồ xả băng không hoạt động.' },
      { t: 'steps', items: [
        'Điều chỉnh cho đồng hồ xả băng nối mạch xả băng.',
        'Kiểm tra cuộn dây điện từ xem có làm việc không (đồng hồ điện, bóng đèn thử).',
        'Lắp cuộn dây điện từ lên van, dùng búa gõ nhẹ vào thân van (kim van kẹt có thể hết kẹt).',
        'Nếu van làm việc thì van mở và thấy ống bypass nóng lên, dàn bay hơi tan băng. Sau chu kỳ xả băng tủ phải làm việc lại bình thường.',
        'Nếu van không làm việc phải thay van mới. Đồng hồ xả băng hỏng cũng phải thay đồng hồ xả băng mới.'
      ] }
    ] },
    { icon: '♻️', title: 'Tháo dỡ hệ thống, thu hồi ga', blocks: [
      { t: 'p', x: 'Khi hệ lạnh hỏng cần thay các bộ phận như blốc, dàn ngưng, dàn bay hơi, ống mao, phin lọc, van điện từ thì nhất thiết phải tháo dỡ hệ thống ra khỏi tủ cách nhiệt và thu hồi ga.' },
      { t: 'steps', items: [
        'Tháo gỡ toàn bộ hệ thống điện ra khỏi hệ thống lạnh.',
        'Vệ sinh sạch sẽ toàn bộ hệ thống lạnh cũng như vỏ tủ cách nhiệt (giảm nguy cơ bẩn lọt vào hệ khi thay thế).',
        'Nếu tủ có đầu ga van thì lắp van lên đầu ga, sau đó lắp bộ nạp 3 dây vào van.',
        'Thu hồi ga lạnh. Trước đây ga bên trong hệ thường được xả ra ngoài; ngày nay phải thu hồi ga để hoàn nguyên tái chế và bảo vệ môi trường, đặc biệt với CFC (R12, R11) và HCFC (R22). Lắp một blốc khác hoặc bơm chân không vào bộ nạp, hút ga trong hệ ra và nén vào bình chứa ga thu hồi; trong khi thu hồi nên làm lạnh bình chứa ga thu hồi trong chậu nước đá.',
        'Nếu tủ không có đầu ga van thì phải dùng van trích.'
      ] },
      { t: 'warn', x: 'Nên đeo kính bảo hộ khi thu hồi ga. Bơm chân không thế hệ mới có bộ phận tách dầu riêng để không lẫn dầu khi sửa các hệ lạnh khác nhau. Nếu dùng một blốc khác để thu hồi ga, nên làm bẫy dầu phía hút để dầu ở hệ đang sửa không lẫn vào dầu trong blốc hút. Dầu trong hệ xả ra thường có tính axit cao, cẩn thận không để dính vào da và mắt; cho dầu cũ vào bình chứa thu hồi riêng nếu thay dầu mới.' }
    ] },
    { icon: '🔌', title: 'Tháo blốc khỏi hệ thống', blocks: [
      { t: 'steps', items: [
        'Tháo toàn bộ phần điện.',
        'Lắp van dịch vụ hoặc van trích nếu cần.',
        'Thu hồi ga lạnh.',
        'Cắt ống: dùng kìm cắt (cắt thành vết, quấn giẻ quanh ống và bẻ đi bẻ lại để ống rời ra) — không dùng cưa vì mạt đồng có thể lọt vào hệ thống; hoặc vệ sinh sạch sẽ đoạn ống thẳng dự định cắt trên ống hút và ống đẩy, dùng dao cắt ống để cắt, nút ngay các đầu ống lại (nhớ đeo kính bảo hộ); hoặc làm sạch các đầu nối hàn, cho thuốc hàn lên các mối hàn, dùng đèn khò nung chảy mối hàn rồi tháo ống ra; cho nguội và bịt kín các đầu ống.',
        'Lấy blốc ra. Các đường ống được bảo vệ bằng kẹp ống hoặc bằng nút bịt, tránh dầu chảy tràn ra ngoài và tránh oxi hóa, hàn gỉ bên trong.',
        'Nếu blốc có ống làm mát dầu cũng phải cắt các ống này. Tất cả các đường ống phải được bảo vệ bằng cách kẹp và hàn kín hoặc bằng nút bịt kín.'
      ] }
    ] },
    { icon: '🔥', title: 'Nguyên nhân cháy động cơ blốc', blocks: [
      { t: 'p', x: 'Nếu động cơ blốc bị cháy, chỉ cần mở van trích một chút là đã có mùi khét. Có nhiều nghiên cứu về nguyên nhân gây cháy động cơ. Các nguyên nhân chính:' },
      { t: 'list', items: [
        'Có ẩm, chất bẩn và không khí trong hệ thống.',
        'Cắm nhầm điện: máy 110/115 V cắm vào 220 V.',
        'Dòng quá tải: tuy rơle bảo vệ đã ngắt nhiều lần nhưng để quá lâu, rơle quá tải bị hỏng.',
        'Máy nén bị kẹt; điện áp quá thấp không khởi động được nhiều lần.',
        'Lượng ga nạp thiếu: môtơ thiếu ga lạnh về làm mát.',
        'Áp suất đầu đẩy quá lớn → nhiệt độ cuối tầm nén quá lớn: do nhiệt độ bên ngoài quá lớn, có khí không ngưng. Nhiệt cao làm dầu biến chất, bôi trơn máy nén kém, dầu có khả năng hàn gỉ các chi tiết cao, bẩn và bùn hình thành nhiều. Khi nhiệt độ đầu đẩy đạt 170 °C, dầu không còn khả năng bôi trơn; bạc biên, bạc chốt pittông, sécmăng sẽ cháy, gây bó máy nén và dẫn đến cháy động cơ.'
      ] },
      { t: 'tip', x: 'Một điều kiện quan trọng để hạn chế nhiệt độ đầu đẩy là dàn ngưng làm việc tốt: không bẩn, không thiếu không khí lưu thông qua dàn hoặc gió quẩn. Thợ lạnh cần kiểm tra nhiệt độ ngưng tụ và áp suất ngưng tụ và tìm mọi biện pháp hữu hiệu để hạ chúng xuống càng thấp càng tốt. Dàn ngưng cần được tháo ra và thổi sạch bằng khí nén, khí nitơ hoặc CO₂; dùng bàn chải lông cứng và máy hút bụi để vệ sinh; quạt, đường gió phải thông thoáng và ở trong tình trạng tốt.' },
      { t: 'widget', name: 'dl-burnout', title: 'Chuỗi nguyên nhân dẫn đến cháy blốc' }
    ] },
    { icon: '🧹', title: 'Vệ sinh hệ thống sau khi cháy blốc và thay blốc mới', blocks: [
      { t: 'p', x: 'Môtơ bị cháy nghĩa là nhiệt độ cuộn dây đã rất cao, làm cháy lớp sơn emay cách điện của dây điện, làm chập các cuộn dây. Nếu có hơi nước bên trong hệ thống, hơi nước kết hợp với ga freon tạo axit clohydric và flohydric. Dầu bôi trơn cũng mang tính axit cao nên không để dầu nhớt tiếp xúc với da.' },
      { t: 'list', items: [
        'Khi môtơ bị cháy thì một loạt thiết bị phải thay thế: ống mao (hoặc van tiết lưu), van điện từ, van đổi dòng. Hệ thống lạnh sẽ phải phun rửa làm sạch triệt để: trước đây dùng R11, nay có thể dùng R141b hoặc chính ga lạnh đang dùng để súc rửa.',
        'Ống làm mát dầu bị cắt ra càng phải cẩn thận hơn nữa. Không để dầu đầy ra nền nhà. Blốc cháy có mùi rất cay và khó nguội, dầu lạnh cũng biến màu cháy đen. Nếu chỉ phần vỏ máy nén bị hỏng, môtơ chưa bị cháy thì dầu vẫn trong và có thể tái sử dụng.',
        'Sau khi đã tẩy rửa và làm khô hệ thống, có thể lắp blốc mới. Khi lắp blốc mới nên dùng 2 phin sấy lọc, 1 phin ở vị trí thông thường sau dàn ngưng trước ống mao, 1 phin lắp thêm ở ống hút giữa dàn bay hơi và máy nén.'
      ] },
      { t: 'h3', x: 'Lắp blốc mới' },
      { t: 'p', x: 'Máy nén, động cơ mới phải có tất cả đặc tính kỹ thuật tương đương máy nén và động cơ cũ: công suất động cơ, loại ga lạnh, thể tích xilanh, vòng quay, điện áp, loại áp suất sôi thấp (trung bình, cao). Các bước:' },
      { t: 'steps', items: [
        'Vệ sinh sạch đầu ống nối dàn ngưng, dàn bay hơi và ống làm mát dầu phía hệ thống lạnh.',
        'Vệ sinh sạch đầu ống nối dàn ngưng, dàn bay hơi, ống làm mát dầu phía máy nén.',
        'Lắp van trích, đầu ga van dịch vụ hoặc ống công nghệ có đầu nối ống mềm cho bộ nạp 3 dây.',
        'Đặt blốc vào vị trí, xếp các đường ống cho khớp, nếu cần phải thêm các đoạn ống để nối dài phù hợp. Khi hàn bạc các ống nối sử dụng càng ít thuốc hàn càng tốt. Dùng ngọn lửa tập trung, ít ảnh hưởng nhiệt đến các mối hàn khác; nếu cần dùng khăn, giẻ ướt quấn quanh các mối hàn khác; tấm kim loại che chắn bảo vệ vỏ cách nhiệt và chi tiết khác của tủ (tránh chảy xém hoặc tróc sơn). Thường các đường ống đẩy, hút của hệ lạnh cần xứng (đúng bằng) đường ống đẩy hút của blốc thay mới; nếu hai bên không xứng, ví dụ blốc mới nhỏ hơn, phải kiểm tra lại: có thể blốc mới nhỏ hơn yêu cầu.',
        'Làm vệ sinh sạch sẽ đoạn ống nối phin sấy lọc, cắt phin sấy lọc cũ ra và thay phin mới cùng kích thước vào.',
        'Sau khi hoàn thành, cho ga lạnh vào (khoảng 2 bar) để thử kín hệ thống.',
        'Nối hệ thống với bơm chân không và hút chân không sâu, càng sâu càng tốt, ít nhất 1 giờ để loại trừ hoàn toàn ẩm, sau đó dùng phương pháp hút chân không 3 bước (chương 14) trước khi nạp. Khi hút chân không có thể kiểm tra độ kín: sau khi hút chân không cao, khóa van nối với bơm chân không và theo dõi áp suất chân không; nếu không tăng thì hệ thống kín.',
        'Nạp một ít ga lạnh cho hệ thống để áp suất ngang bằng áp suất khí quyển hoặc cao hơn một chút.',
        'Lắp lại các thiết bị điện và mạch điện.',
        'Nạp hệ thống đủ lượng ga yêu cầu. Tốt nhất nên nạp hơi dư sau đó xả bớt ra đến đúng lượng yêu cầu nhờ bộ nạp 3 dây.',
        'Khóa van nạp, cho blốc chạy và quan sát qua nhiều chu kỳ làm việc; điều chỉnh lượng ga nạp trong hệ cho phù hợp.',
        'Tháo bộ nạp 3 dây và bịt kín các cửa dịch vụ của hệ thống.',
        'Nếu có thể, đặt bộ tự ghi nhiệt độ trong ngăn đông, ngăn lạnh để ghi lại biến thiên nhiệt độ trong vòng 24 giờ.',
        'Kiểm tra nhiệt độ đầu blốc, nhiệt độ đầu đẩy, nhiệt độ dàn ngưng, nhiệt độ ống hút xem có phù hợp hay không.'
      ] },
      { t: 'warn', x: 'Rất nhiều trường hợp, sau khi thay mới, một thời gian ngắn sau blốc lại bị cháy lại. Nguyên nhân chủ yếu: hệ thống không được vệ sinh sạch sẽ, còn sót lại ẩm, bụi bẩn và không khí trong hệ thống. Để tránh blốc cháy đi cháy lại nhiều lần, cần làm sạch bên trong hệ thống: bơm cao áp bơm lỏng R11/R141b qua hệ nhiều lần, rửa hết cặn bẩn trong đường ống; ngoài phin sấy lọc trên đường đẩy, lắp thêm 1 phin trên đường hút ngay trước máy nén.' },
      { t: 'widget', name: 'dl-replace-steps', title: 'Quy trình thay blốc: kiểm tra từng bước và ghi chú lỗi thường gặp' }
    ] },
    { icon: '🔧', title: 'Sửa dàn ngưng và dàn bay hơi', blocks: [
      { t: 'p', x: '<b>Dàn ngưng</b>: trục trặc chủ yếu do bám bẩn phía ngoài dàn, lưu thông không khí kém, trao đổi nhiệt kém → vệ sinh dàn, tổ chức lưu thông không khí tốt. Hư hỏng chủ yếu là thủng dàn, thường thủng ở các vị trí đáy tủ vì ở đó ẩm dễ bị gỉ. Tìm chỗ rò qua vết dầu loang, bọt nước xà phòng hoặc đèn halide; hàn bạc để khắc phục. Nếu vị trí rò không thể với tới được bằng mỏ hàn thì phải thay dàn ngưng mới.' },
      { t: 'p', x: '<b>Dàn bay hơi</b> thường làm bằng nhôm hoặc thép không gỉ; mỗi vật liệu yêu cầu một cách sửa riêng.' },
      { t: 'table', head: ['Vật liệu', 'Cách sửa'], rows: [
        ['Thép không gỉ', 'Hàn bạc hoặc hàn điện có bảo vệ bằng khí argon: (1) xác định vị trí rò rỉ; (2) xả hết ga; (3) vệ sinh sạch vị trí sẽ hàn; (4) cho khí nitơ bảo vệ (áp suất thấp) và hàn bạc hoặc hàn hồ quang vết rò; (5) đánh bóng lại mối hàn; (6) thử kín mối hàn'],
        ['Nhôm', 'Hàn nhôm, hàn bạc, hàn hồ quang hoặc đơn giản nhất là dùng hỗn hợp epoxy: (1) xác định vị trí rò rỉ; (2) xả hết ga; (3) vệ sinh vị trí rò (lớp oxit bề mặt hình thành rất nhanh — dùng giấy nhám, dũa; nếu chỗ thủng lớn chuẩn bị 1 mảnh kim loại bịt kín toàn bộ lỗ thủng); (4) hòa trộn epoxy và chất phụ gia làm cứng; (5) phủ epoxy thành một lớp đủ dày lên chỗ rò; áp suất trong và ngoài hệ thống phải cân bằng; (6) để khô lớp epoxy trong 1 giờ; (7) dùng giấy nhám đánh bóng lớp epoxy; (8) thử kín. Có thể dùng các lá nhôm mỏng dán cùng với epoxy lên chỗ hàn để tăng cứng mối hàn epoxy']
      ] },
      { t: 'warn', x: 'Hàn đồng hoặc hàn hồ quang dàn nhôm là công việc phức tạp vì nhôm rất dễ nóng chảy và khi nóng chảy hầu như không thay đổi màu nên rất khó nhận biết. Nên nhờ thợ chuyên hàn nhôm thực hiện công việc này nếu cần.' }
    ] },
    { icon: '🏭', title: 'Đại tu hệ thống lạnh', blocks: [
      { t: 'p', x: 'Chỉ làm tại xưởng sửa chữa có đầy đủ máy móc và dụng cụ: máy mở blốc; hệ thống máy hàn hồ quang vonfram, hàn xì, hàn điện; buồng vệ sinh hệ thống; buồng phun sơn; bàn gia công nguội, êtô; buồng vật tư, kho; máy tiện; máy mài; bàn thử máy nén; hệ thống bơm chân không cao; máy nén khí để làm sạch và thổi khô. Xưởng sửa chữa phải thông gió tốt; độ ẩm tương đối trong xưởng tốt nhất dưới 45% để đề phòng ẩm lọt vào hệ thống.' },
      { t: 'list', items: [
        '<b>Tháo dầu ra khỏi blốc</b> trước khi dùng máy mài/máy tiện cắt vỏ; đo cẩn thận khối lượng hoặc thể tích để nạp lại đủ lượng dầu sau khi sửa. Dầu cũ phải loại bỏ; nạp dầu mới có độ nhớt yêu cầu. Dầu cũ kiểm tra kỹ: thường có độ axit cao và màu tối; dầu mang tính axit hay ăn mòn sơn emay cách điện của động cơ, làm chập cuộn dây. Có thể dùng mêgaôm đo độ cách điện của dầu, của động cơ và vỏ. Thu hồi dầu cũ cẩn thận, dùng găng tay và kính bảo hộ.',
        '<b>Bổ blốc</b>: vỏ thép gồm 2 nửa gia công dập, sau khi lắp động cơ và máy nén bên trong thì được hàn kín. Các ống công nghệ (nạp ga), ống hút, ống đẩy, ống làm mát dầu hàn bạc lên vỏ. Bổ bằng 2 cách: mài toàn bộ mối hàn nối 2 vỏ; hoặc nếu vỏ hình trụ có thể lắp lên máy tiện để tiện. Sau khi bổ, tháo nắp trên và vệ sinh sạch bên trong trước khi làm công việc khác.',
        '<b>Làm sạch</b> bên ngoài máy nén động cơ thật kỹ bằng dung dịch tẩy rửa công nghiệp (xăng công nghiệp). Cho vào phòng chuyên dụng, dùng mũi phun để làm sạch động cơ và máy nén. Không sử dụng carbon tetrachloride.',
        '<b>Sửa chữa môtơ</b>: hư hỏng nặng nhất là cháy; còn chập vòng dây, đứt dây, chạm điện ra vỏ... Quan sát kỹ cuộn dây để phát hiện: vị trí chập vòng thường có màu nâu tối; cuộn dây cháy thì toàn bộ có màu tối. Blốc có cuộn dây cháy cần bổ ngay để sửa chữa càng sớm càng tốt (1–3 ngày), vì để lâu các hóa chất độc hại ăn mòn thêm. Cuộn dây cũ tháo ra và động cơ được quấn lại bởi thợ chuyên môn; cỡ dây và cách điện emay phải giống như động cơ cũ.',
        '<b>Phục hồi máy nén pittông</b>: kiểm tra tình trạng các chi tiết; tháo dỡ từng bộ phận xếp theo trình tự; vệ sinh bằng dung dịch tẩy rửa (có thể dùng dầu hỏa); kiểm tra lá van (cong, vênh, xém, rỗ → sửa hoặc thay), đế van; kiểm tra khe hở pittông, sécmăng, doa lại xilanh, bạc biên, tay biên, bạc chốt pittông, trục khuỷu, gối đỡ; thay mới khi cần. Thân máy nén thường là gang đúc, đế van sau thời gian dài thường bị mòn phải mài phẳng; dùng bột rà mịn và sau khi rà phải vệ sinh sạch, nếu không chính bột rà sẽ phá hoại máy nén sau này. Cần kiểm tra kỹ độ kín, độ nâng van; các chi tiết phải đảm bảo dung sai lắp ghép yêu cầu.',
        '<b>Tẩy rửa hệ thống sau khi cháy blốc</b>: dùng bơm cao áp bơm dung dịch tẩy rửa (trước đây R11, nay R141b thay thế) qua toàn bộ hệ thống (trừ blốc) cho đến khi dung dịch chảy ra không còn chất bẩn. Khi thay blốc mới nhất thiết phải thay phin sấy lọc: có thể tháo ống mao và phin sấy lọc ra, nối tắt dàn ngưng và ống mao bằng một đoạn ống khác; ống mao thông tắc theo phương pháp đã nêu.'
      ] },
      { t: 'tip', x: 'Phần phục hồi máy nén chuyên sâu còn lại (sửa chữa tinh, mài, doa) vượt khuôn khổ cuốn sách nên sách không giới thiệu.' }
    ] },
    { icon: '🧰', title: 'Phụ lục: dụng cụ và khí cụ sửa chữa lạnh', blocks: [
      { t: 'h3', x: 'Phụ lục 1: dụng cụ sửa chữa lạnh' },
      { t: 'list', items: [
        'Tuốcnơvít (các cỡ), cờ lê (10, 14, 17, 19, 21, 23, 27, 30 mm), mỏ lết, kìm cắt, kìm bấm (150, 200, 300 mm), thước dây.',
        'Chìa ổ cánh chim (một bộ) và chìa mở van, kìm cắt.',
        'Bộ loe ống, dao cắt ống, nạo bavia, bộ uốn ống (lò xo uốn ống), đèn dò ga.'
      ] },
      { t: 'h3', x: 'Phụ lục 2: khí cụ và dụng cụ để sửa chữa lạnh' },
      { t: 'list', items: [
        'Ampe kìm, đồng hồ vạn năng, mêgaôm mét 500 V, nhiệt kế thủy ngân.',
        'Bộ nạp (3 dây), xi lanh nạp ga (2–4 kg), cân (50 kg).',
        'Bơm chân không, nhiệt kế bề mặt, phong tốc kế.'
      ] },
      { t: 'widget', name: 'dl-toolbox', title: 'Hộp dụng cụ thợ lạnh: bấm từng dụng cụ xem công dụng (hình đơn giản)' },
      { t: 'h3', x: 'Tài liệu tham khảo của sách' },
      { t: 'p', x: 'Nguyễn Đức Lợi và cộng sự: Tủ lạnh, máy kem, máy đá, máy điều hòa nhiệt độ (KHKT 2002); Sửa chữa máy lạnh và ĐHKK (KHKT 2003); Kỹ thuật lạnh cơ sở, Kỹ thuật lạnh ứng dụng, Máy và thiết bị lạnh (Giáo dục 2003); Tự động hóa hệ thống lạnh; Hướng dẫn thiết kế hệ thống lạnh và điều hòa không khí; Ga, dầu và chất tải lạnh (Giáo dục 2006); A.D. Althouse, Modern Refrigeration and Air Conditioning (1988).' }
    ] }
  ],
  summary: [
    'Trước khi thay blốc phải xác định chính xác hỏng điện hay cơ: dùng phích riêng, tháo rơle, đo thông mạch – cách điện.',
    'Thử nén bằng van trích: chân không giảm nhanh về 680 → 330 mbar thì van xả rò.',
    'Ống mao: không cắt bằng dao cắt ống hay cưa; dùng dũa tam giác rồi bẻ; thay ống mao đúng trở lực.',
    'Nạp đủ ga: t<sub>k</sub> ≈ t<sub>mt</sub> + 17 °C; thừa ga: cả ba áp suất cao; thiếu ga: cả ba thấp.',
    'Thử còn ga bằng hơ nóng ống trước phin; chính xác hơn dùng van trích: lỏng xì ra là đủ ga.',
    'Thu hồi ga trước khi tháo; không cưa ống; bịt kín đầu ống; đeo kính.',
    'Nguyên nhân cháy blốc: ẩm, bẩn, khí, quá tải, thiếu ga, áp đẩy cao (đầu đẩy ≥ 170 °C dầu mất khả năng bôi trơn).',
    'Thay blốc mới: vệ sinh kỹ, hai phin sấy lọc, hút chân không ≥ 1 giờ + 3 bước, nạp đúng lượng, kiểm tra nhiều chu kỳ.'
  ],
  cards: [
    ['Dụng cụ cắt ống mao đúng?', 'Dũa tam giác quanh ống rồi bẻ đi bẻ lại'],
    ['Vì sao không dùng cưa cắt ống?', 'Mạt đồng lọt vào hệ thống gây tắc, hại máy nén'],
    ['Ống mao quá nhỏ, ngưng tụ?', 'Dàn ngưng gần ngập lỏng, áp ngưng cao, áp bay hơi thấp, bay hơi thiếu lỏng'],
    ['Thừa ga thì?', 'Ba áp suất cao, ống hút đổ mồ hôi/bám tuyết'],
    ['Thiếu ga thì?', 'Cả 3 áp suất nhỏ hơn bình thường'],
    ['Phin lọc kích thước theo?', 'Công suất động cơ: 1/8 HP: 80 cm³; 1/6–1/4: 125; 1/4–1/2: 250; 1/2–3/4: 375'],
    ['Có tái sinh phin lọc được không?', 'Không, phải thay mới'],
    ['Thử còn ga bằng van trích?', 'Hơi xì ra: thiếu ga; lỏng xì ra: đủ ga'],
    ['Thu hồi ga để?', 'Tái chế và bảo vệ môi trường (CFC, HCFC)'],
    ['Nhiệt độ đầu đẩy mà dầu mất khả năng bôi trơn?', '170 °C'],
    ['Vì sao blốc mới lại cháy lại?', 'Hệ thống chưa sạch: còn ẩm, bụi bẩn, không khí'],
    ['Phin lắp thêm khi thay blốc?', 'Phin thứ hai ở ống hút trước máy nén'],
    ['Hút chân không sau thay blốc?', 'Ít nhất 1 giờ rồi hút chân không 3 bước'],
    ['Dàn thủng chỗ nào nhiều?', 'Đáy tủ vì ẩm dễ gỉ'],
    ['Epoxy cho dàn nhôm cần?', 'Cân bằng áp trong–ngoài, để khô 1 giờ, đánh bóng, thử kín'],
    ['Độ ẩm xưởng sửa tốt nhất?', 'Dưới 45%']
  ],
  quiz: [
    { q: 'Cách đúng để cắt ống mao:', o: ['Dao cắt ống', 'Cưa sắt', 'Dũa tam giác rồi bẻ', 'Kéo cắt'], a: 2, e: 'Dao cắt ống thắt tiết diện; cưa để lại mạt đồng.' },
    { q: 'Áp suất ngưng, bay hơi và cân bằng đều cao hơn bình thường: có thể do', o: ['Thiếu ga', 'Thừa ga', 'Hỏng thermostat', 'Mất điện'], a: 1, e: 'Thừa ga.' },
    { q: 'Thử ga bằng van trích trước phin: chỉ hơi ga xì ra nghĩa là:', o: ['Đủ ga', 'Thiếu ga', 'Thừa ga', 'Hết dầu'], a: 1, e: 'Chưa có lỏng.' },
    { q: 'Chân không giảm dần về 680 rồi 330 mbar khi dừng máy nghĩa là:', o: ['Van xả rò', 'Ống mao tắc', 'Dàn bẩn', 'Máy tốt'], a: 0, e: 'Van xả của máy nén bị rò.' },
    { q: 'Khi nhiệt độ đầu đẩy đạt 170 °C:', o: ['Dầu tốt hơn', 'Dầu không còn khả năng bôi trơn', 'Máy mát hơn', 'Áp giảm'], a: 1, e: 'Bạc biên, sécmăng cháy.' },
    { q: 'Sau cháy blốc, súc rửa hệ thống thường dùng:', o: ['Nước', 'R141b hoặc chính ga lạnh', 'Axit', 'Cồn'], a: 1, e: 'Trước đây R11.' },
    { q: 'Khi thay blốc mới nên dùng bao nhiêu phin sấy lọc?', o: ['0', '1', '2', '3'], a: 2, e: 'Một ở đường lỏng, một ở ống hút.' },
    { q: 'Vì sao không nung phin khi sửa chữa?', o: ['Không có gì', 'Ẩm trong phin tràn vào hệ thống', 'Phin nổ', 'Mất ga'], a: 1, e: 'Cũng không thể tái sinh.' },
    { q: 'Epoxy sửa dàn nhôm cần để khô khoảng:', o: ['1 phút', '10 phút', '1 giờ', '1 ngày'], a: 2, e: 'Rồi đánh bóng và thử kín.' }
  ],
  match: [
    ['Ống mao quá nhỏ', 'Áp ngưng cao, bay hơi thiếu lỏng'],
    ['Thiếu ga', 'Ba áp suất thấp'],
    ['Thừa ga', 'Ba áp suất cao'],
    ['170 °C đầu đẩy', 'Dầu mất bôi trơn'],
    ['R141b', 'Súc rửa hệ thống'],
    ['Phin thứ hai', 'Ống hút trước máy nén']
  ]
});
