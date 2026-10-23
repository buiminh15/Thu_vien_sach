window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 9,
  title: 'Cấu tạo máy điều hòa phòng',
  intro: 'Máy điều hòa cửa sổ (1 cụm), máy 2 cụm, máy 2 chiều nóng–lạnh với van đảo chiều, máy hút ẩm, và các thiết bị chính: máy nén rôto/xoắn ốc, phin sấy lọc, hồi nhiệt, ống mao, van điện từ, van một chiều.',
  sections: [
    { icon: '❄️', title: 'Đặc điểm chung', blocks: [
      { t: 'p', x: 'Máy điều hòa không khí (ĐHKK) dân dụng là máy nguyên cụm (cửa sổ) hoặc 2 cụm, dàn ngưng làm mát bằng không khí và dàn bay hơi làm lạnh trực tiếp không khí trong phòng.' },
      { t: 'table', head: ['Năng suất lạnh', 'Btu/h'], rows: [
        ['1,75 kW', '6 000'], ['2,6 kW', '9 000'], ['3,5 kW', '12 000'], ['5,2 kW', '18 000'], ['7,0 kW', '24 000'], ['10,5 kW', '36 000'], ['14 kW', '48 000']
      ] },
      { t: 'list', items: [
        'Chủ yếu từ 1,75 kW đến 7 kW.',
        'Máy nén thường là rôto và ngày nay là xoắn ốc; một số ít còn dùng pittông.',
        'Ga R22 truyền thống; nay có thêm R407C, R410A.',
        '<b>Máy 1 chiều</b> (chỉ làm lạnh) cho xứ nóng không có mùa đông; <b>máy 2 chiều</b> (bơm nhiệt, heat pump) nóng–lạnh cho nơi có cả mùa hè và mùa đông.',
        'Ưu điểm: thuận tiện, gọn nhẹ, dễ sử dụng, không đòi hỏi kỹ thuật lắp đặt, vận hành bảo dưỡng phức tạp nên rất thông dụng.'
      ] },
      { t: 'p', x: 'Nguyên lý: R22 sôi ở dàn bay hơi, máy nén hút về qua tiêu âm đường hút rồi nén lên áp cao đẩy vào dàn ngưng; ở dàn ngưng hơi nóng thải nhiệt cho không khí làm mát và ngưng thành lỏng; lỏng đi qua phin lọc, ống mao phun trở lại dàn bay hơi. Máy nén tuần hoàn ga; ống mao giữ chênh áp giữa dàn ngưng và dàn bay hơi.' },
      { t: 'widget', name: 'dl-ac-cycle', title: 'Chu trình lạnh máy điều hòa: bấm từng bước' }
    ] },
    { icon: '🪟', title: 'Máy điều hòa cửa sổ (1 cụm)', blocks: [
      { t: 'p', x: 'Mặt trước của máy hướng vào phòng, thường chia làm hai phần: phần lớn lắp ghi hút gió; phần nhỏ (ở trên hoặc bên phải) có cửa thổi với cánh hướng gió và đảo gió. Các núm điều khiển bố trí ở góc dưới. Muốn nhìn thấy dàn bay hơi phải tháo mặt nạ.' },
      { t: 'p', x: 'Mặt sau nhìn thấy dàn ngưng; gió làm mát được lấy từ chớp gió hai bên sườn và phía trên, toàn bộ mặt sau là cửa thổi gió nóng ra. Phần nóng (ngoài nhà) và phần lạnh (trong nhà) ngăn cách nhau bằng vách có lớp cách nhiệt dày khoảng 5 mm.' },
      { t: 'key', x: 'Ưu điểm so với máy 2 cụm: có cửa lấy gió tươi (đóng/mở); nhược điểm: khó lắp đặt cho phân phối gió đều và khá ồn vì máy nén đặt ngay trong vỏ, không cách âm với phòng.' },
      { t: 'p', x: 'Dàn bay hơi luôn ướt vì nước ngưng nên dễ dính bụi bẩn; vì thế phải có phin lọc bụi ở cửa hút gió, vệ sinh 2 tuần hoặc 1 tháng một lần.' },
      { t: 'h3', x: 'Núm điều khiển' },
      { t: 'table', head: ['Núm', 'Chức năng'], rows: [
        ['Núm chính (7 nấc)', '1: quạt yếu; 2: quạt trung bình; 3: quạt mạnh; 4: điều hòa yếu; 5: điều hòa trung bình; 6: điều hòa mạnh; 7: tắt'],
        ['Rơle nhiệt độ', 'Chỉnh nhiệt độ phòng; đủ lạnh thì máy dừng, thiếu lạnh thì làm việc'],
        ['Cửa gió tươi', 'Hai vị trí đóng (không lấy gió tươi) / mở (lấy gió tươi)'],
        ['Cánh vẩy gió', 'Chỉnh tốc độ và góc vẩy gió']
      ] },
      { t: 'widget', name: 'dl-ac-window', title: 'Máy điều hòa cửa sổ: luồng gió trong phòng và ngoài trời, núm 7 nấc' }
    ] },
    { icon: '🏠', title: 'Máy điều hòa 2 cụm (split)', blocks: [
      { t: 'p', x: 'Chia hệ thống làm hai cụm để khắc phục nhược điểm máy cửa sổ:' },
      { t: 'list', items: [
        '<b>Cụm ngưng tụ</b> (dàn nóng): máy nén, dàn ngưng, quạt dàn ngưng, hai van dịch vụ đường hút và đường đẩy để nối ống ga; đặt ngoài nhà.',
        '<b>Cụm bay hơi</b> (dàn lạnh): dàn bay hơi, quạt lồng sóc (ly tâm kiểu ngang dòng), phin lọc không khí, bộ tự động điều khiển điện; ống mao thường trong dàn lạnh nhưng vì gây ồn nên chuyển ra phía dàn nóng.'
      ] },
      { t: 'h3', x: 'Nhược điểm của máy 2 cụm' },
      { t: 'list', items: [
        'Không lấy được gió tươi (trừ vài kiểu đặc biệt).',
        'Phải đi đường ống ga, đường điện — chỉ thợ lạnh nghề mới làm được.',
        'Máy vẫn ồn ở phía ngoài nhà; cần chú ý vị trí để không ảnh hưởng hàng xóm.',
        'Độ phức tạp cao nên giá thành đắt hơn đáng kể.'
      ] },
      { t: 'warn', x: 'Chênh cao giữa dàn nóng và dàn lạnh không nên quá 3 m; chiều dài ống ga không nên quá 5 m (máy gia dụng nhỏ). Vượt quá thì năng suất lạnh giảm, hiệu suất giảm, tiêu tốn điện tăng.' },
      { t: 'p', x: 'Máy điều hòa đa hệ (multi): một dàn nóng phục vụ 3–5 dàn lạnh cho cả gia đình. Bộ điều khiển trung tâm đặt ở phòng máy chủ; các phòng khác vẫn có điều khiển riêng nhiệt độ nhưng chế độ làm việc (MODE) phải theo phòng chủ: chủ ở lạnh thì mọi phòng chỉ lạnh; chủ ở sưởi thì chỉ sưởi.' },
      { t: 'p', x: 'Điều khiển từ xa (Daikin): nút ON/OFF dự phòng khi mất remote (nhiệt độ mặc định mùa hè 22 °C), đèn báo hoạt động và hẹn giờ, nút MODE (Tự động → Làm lạnh → Hút ẩm → Quạt → Sưởi), nút vẩy gió, nút hẹn giờ ON/OFF, hủy hẹn giờ, chế độ ban đêm (êm), chế độ chạy mạnh mẽ (powerful, ≈130% công suất định mức).' }
    ] },
    { icon: '🔁', title: 'Máy điều hòa 2 chiều (bơm nhiệt)', blocks: [
      { t: 'p', x: 'Khác máy 1 chiều ở chỗ có thêm van đảo chiều (4 ngả) cho hơi ga từ máy nén. Khi van đảo chiều tác động, dàn lạnh trong nhà trở thành dàn nóng và dàn nóng ngoài nhà trở thành dàn lạnh.' },
      { t: 'p', x: 'Van đảo chiều (Ranco): thân hình trụ, bốn cửa; cửa trên luôn nối đầu đẩy máy nén; cửa giữa phía dưới luôn nối đầu hút máy nén; cửa trái nối dàn lạnh, cửa phải nối dàn nóng. Bên trong có pittông mang nắp đẩy; điều khiển bằng van điện từ 3 ngả dùng chính áp suất đường hút.' },
      { t: 'list', items: [
        '<b>Làm lạnh</b>: không có dòng qua cuộn dây điện từ, kim van đóng sang phải, thông ống 14 và 11; đầu trái van có áp suất hút. Nhờ lỗ nhỏ cân bằng, đầu phải dần dần có áp suất đẩy; pittông dịch sang trái, nối dàn lạnh với ống hút máy nén và dàn nóng với ống đẩy.',
        '<b>Sưởi ấm</b>: có dòng qua cuộn dây điện từ, kim van đóng sang trái, thông đầu trái van với đường hút nên áp đầu trái giảm dần xuống áp hút; đầu phải áp đẩy, pittông dịch sang phải, sưởi trong phòng.'
      ] },
      { t: 'widget', name: 'dl-reversing-valve', title: 'Van đảo chiều: làm lạnh ⇄ sưởi ấm, đường đi của ga' },
      { t: 'warn', x: 'Quá trình đảo chiều kéo dài khoảng 10 giây; trong lúc đó hơi nóng áp cao tràn vào đường hút, áp đẩy tụt xuống một chút rồi trở về giá trị cũ; áp hút tăng lên rồi giảm dần; công suất điện tiêu thụ tăng chút ít rồi về bình thường. Để van làm việc bình thường, hiệu áp suất tối thiểu phải đạt 3,5 bar.' },
      { t: 'p', x: 'Chế độ sưởi và lạnh không giống nhau (ví dụ lạnh: ngoài 35 °C, trong 27 °C, chênh 8 K; sưởi: trong 20 °C, ngoài 7 °C, chênh 13 K), nên ống mao ở chế độ sưởi phải dài hơn hoặc nối thêm <b>ống mao phụ</b> (qua van một chiều) cho chế độ sưởi. Hoặc dùng hai van tiết lưu với van một chiều và bình chứa cao áp: chế độ lạnh MN-2-6-7-3-1-MN; chế độ sưởi MN-1-5-7-4-2-MN.' },
      { t: 'tip', x: 'Máy 1 chiều lạnh có nhiệt độ sôi ~5 °C, ít nguy cơ tắc ẩm nên chỉ cần phin lọc cặn bẩn. Máy 2 chiều mùa đông nhiệt độ sôi dàn ngoài nhà có thể < 0 °C, có nguy cơ tắc ẩm nên dùng phin sấy lọc có cả chất hút ẩm.' }
    ] },
    { icon: '💧', title: 'Máy hút ẩm', blocks: [
      { t: 'p', x: 'Có đủ các chi tiết như máy điều hòa nhưng bố trí đặc biệt để khử ẩm cho không khí. Gió trong phòng được quạt hút qua máy: đầu tiên đi qua dàn lạnh có nhiệt độ sôi khoảng 5 °C, gặp lạnh một phần ẩm ngưng thành nước chảy xuống thùng hứng nước; sau đó gió đi qua dàn ngưng (~45 °C) được sưởi ấm lên rồi thổi ra phòng.' },
      { t: 'list', items: [
        'Gió qua máy hút ẩm có nhiệt độ tăng lên chút ít còn độ ẩm tương đối giảm đáng kể.',
        'Rơle độ ẩm: máy chạy khi độ ẩm chưa đạt và tự dừng khi đạt yêu cầu; máy thông dụng đưa độ ẩm phòng xuống 55–60%; đặt thấp hơn mức này máy chạy gần như liên tục.',
        'Phao để ngắt máy khi đầy thùng nước.',
        'Dàn ngưng và dàn bay hơi đều làm bằng ống cánh; dàn bay hơi đôi khi bằng ống trơn để tăng cường khử ẩm.',
        'Dùng thích hợp vào mùa nồm, mùa mưa; giảm độ ẩm nhưng không làm giảm nhiệt độ.'
      ] },
      { t: 'widget', name: 'dl-dehumidifier', title: 'Máy hút ẩm: không khí đi qua dàn lạnh rồi dàn nóng' }
    ] },
    { icon: '🔧', title: 'Các thiết bị của máy điều hòa', blocks: [
      { t: 'h3', x: 'Máy nén' },
      { t: 'p', x: 'Tương tự tủ lạnh nhưng động cơ lớn hơn (0,56–2,5 kW ≈ 3/4–3,5 HP) và không chỉ pittông mà còn rôto lăn, rôto tấm trượt, và máy nén xoắn ốc.' },
      { t: 'list', items: [
        '<b>Rôto lăn</b>: xilanh hình trụ; pittông lăn theo bánh lệch tâm tạo khoang hút và đẩy giữa xilanh, pittông và tấm chắn; cửa hút không có clape, chỉ cửa đẩy có clape.',
        '<b>Xoắn ốc</b>: hai vòng xoắn ốc đặc biệt, vòng tĩnh gắn nắp trên, vòng động gắn trục động cơ; khi vòng động quay theo quỹ đạo, tạo khoang hút, khoang nén và khoang đẩy giữa hai vòng; hơi hút vào từ thành bên, đẩy ra ở tâm vòng xoắn.'
      ] },
      { t: 'widget', name: 'dl-scroll', title: 'Máy nén xoắn ốc: hơi bị dồn từ ngoài vào tâm' },
      { t: 'h3', x: 'Dàn ngưng và dàn bay hơi' },
      { t: 'p', x: 'Phần lớn là dàn ống xoắn có cánh (ống đồng, cánh nhôm). Một số máy có dàn ngưng giải nhiệt nước (ống lồng ống: ga trong ống trong, nước ngược chiều ở giữa; nước ra đưa lên tháp giải nhiệt).' },
      { t: 'h3', x: 'Phin sấy lọc, hồi nhiệt' },
      { t: 'p', x: 'Phin lọc đặt trước ống mao bảo vệ ống mao khỏi tắc và cặn bẩn lọt vào máy nén. Thiết bị hồi nhiệt là thiết bị trao đổi nhiệt giữa lỏng nóng trước khi vào ống mao và hơi lạnh vừa ra khỏi dàn bay hơi. Tác dụng: tăng năng suất lạnh riêng khối lượng, tăng hiệu suất lạnh; ống mao hoặc van tiết lưu làm việc ổn định hơn; giảm nguy cơ máy nén hút phải lỏng.' },
      { t: 'h3', x: 'Ống mao, van tiết lưu' },
      { t: 'p', x: 'Năng suất lạnh điều hòa lớn hơn tủ lạnh hàng chục, hàng trăm lần nên ống mao có đường kính lớn hơn, chiều dài ngắn hơn, đôi khi dùng ống mao kép hoặc 3 ống mắc song song. Hệ thống lớn có thể dùng van tiết lưu thay cho ống mao nhờ khả năng điều chỉnh tự động lưu lượng: van tiết lưu nhiệt cân bằng trong, cân bằng ngoài, và van tiết lưu điện tử (dùng cho máy biến tần, điều chỉnh rất chính xác).' },
      { t: 'h3', x: 'Vòng ống xoắn làm mát dầu và ống tiêu âm' },
      { t: 'p', x: 'Hơi ga sau khi nén được đẩy ra vòng ống xoắn làm mát dầu (loại có cánh tản nhiệt hoặc dùng một vài vòng ống dàn ngưng), làm mát sơ bộ rồi quay lại máy nén đi trong ống ngâm ở đáy máy nén làm mát dầu, lại quay ra đi vào dàn ngưng. Ống tiêu âm trên đường đẩy giữa máy nén và dàn ngưng (ga đi từ trên xuống) cân bằng xung động, giảm tiếng ồn và thuận lợi cho việc tuần hoàn dầu.' },
      { t: 'h3', x: 'Van điện từ và van một chiều' },
      { t: 'list', items: [
        '<b>Van điện từ</b>: xả băng bằng hơi nóng; đóng ngắt ga lỏng cấp cho một dàn lạnh trong hệ nhiều dàn lạnh. Thường dùng van thường đóng (không có điện van đóng, có điện van mở).',
        '<b>Van một chiều</b>: chỉ cho ga đi một chiều; lắp ở đầu ra máy nén, đường lỏng, ví dụ trong máy điều hòa 2 chiều. Kiểu Emerson dùng nam châm, hầu như không rò rỉ bên trong, lắp ở tư thế bất kỳ.'
      ] },
      { t: 'p', x: 'Bình tích lỏng và tiêu âm đường hút đặt trước máy nén ngăn lỏng về máy nén, đảm bảo máy nén chỉ hút hơi.' }
    ] }
  ],
  summary: [
    'ĐHKK dân dụng có hai kiểu: cửa sổ (1 cụm) và 2 cụm (cụm nóng, cụm lạnh); chủ yếu 1,75–7 kW.',
    'Máy cửa sổ lấy được gió tươi nhưng ồn; máy 2 cụm êm, lắp đặt phức tạp hơn, chênh cao ≤ 3 m, ống ≤ 5 m.',
    'Máy 2 chiều có van đảo chiều 4 ngả; đảo chiều mất khoảng 10 giây; hiệu áp tối thiểu 3,5 bar.',
    'Ống mao cho chế độ sưởi dài hơn hoặc cần ống mao phụ qua van một chiều.',
    'Máy hút ẩm: gió qua dàn lạnh (ngưng ẩm) rồi qua dàn nóng (sưởi ấm).',
    'Máy nén ĐHKK: pittông, rôto lăn, xoắn ốc; động cơ 0,56–2,5 kW.',
    'Hồi nhiệt, ống tiêu âm, phin sấy lọc, van điện từ, van một chiều là các thiết bị phụ quan trọng.'
  ],
  cards: [
    ['Dải năng suất lạnh ĐHKK dân dụng?', '1,75–14 kW (6 000–48 000 Btu/h), chủ yếu 1,75–7 kW'],
    ['Máy 1 chiều và 2 chiều khác nhau?', 'Máy 2 chiều có van đảo chiều, vừa làm lạnh vừa sưởi'],
    ['Máy cửa sổ có ưu điểm gì?', 'Lấy được gió tươi, lắp đặt gọn'],
    ['Nhược điểm máy cửa sổ?', 'Ồn (máy nén đặt trong vỏ), khó bố trí phân phối gió'],
    ['Cụm ngưng tụ gồm?', 'Máy nén, dàn ngưng, quạt, hai van dịch vụ'],
    ['Cụm bay hơi gồm?', 'Dàn bay hơi, quạt lồng sóc, phin lọc không khí, bộ điều khiển'],
    ['Giới hạn chênh cao và chiều dài ống?', 'Chênh cao ≤ 3 m, ống ga ≤ 5 m'],
    ['Van đảo chiều đảo trong bao lâu?', 'Khoảng 10 giây'],
    ['Hiệu áp tối thiểu để van đảo chiều hoạt động?', '3,5 bar'],
    ['Vì sao cần ống mao phụ khi sưởi?', 'Chênh nhiệt độ lớn hơn nên cần ống mao dài hơn'],
    ['Độ ẩm phòng máy hút ẩm đạt?', '55–60%'],
    ['Máy nén xoắn ốc gồm?', 'Vòng xoắn tĩnh và vòng xoắn động'],
    ['Thiết bị hồi nhiệt làm gì?', 'Trao đổi nhiệt giữa lỏng nóng trước tiết lưu và hơi lạnh ra dàn bay hơi'],
    ['Van điện từ thường đóng?', 'Không điện thì đóng, có điện thì mở'],
    ['Ống tiêu âm đặt ở đâu?', 'Đường đẩy giữa máy nén và dàn ngưng']
  ],
  quiz: [
    { q: 'Năng suất lạnh 12 000 Btu/h bằng khoảng:', o: ['1,75 kW', '3,5 kW', '7 kW', '14 kW'], a: 1, e: '12 000 Btu/h ≈ 3,5 kW.' },
    { q: 'Ưu điểm của máy cửa sổ so với máy 2 cụm:', o: ['Êm hơn', 'Lấy được gió tươi', 'Chênh cao lớn', 'Điều khiển từ xa'], a: 1, e: 'Máy 2 cụm không lấy được gió tươi.' },
    { q: 'Chênh cao tối đa giữa dàn nóng và dàn lạnh (máy gia dụng):', o: ['1 m', '3 m', '10 m', '20 m'], a: 1, e: 'Không nên quá 3 m.' },
    { q: 'Ở chế độ sưởi, dàn trong nhà là:', o: ['Dàn lạnh', 'Dàn nóng (ngưng tụ)', 'Van tiết lưu', 'Bình tích lỏng'], a: 1, e: 'Van đảo chiều đổi vai trò hai dàn.' },
    { q: 'Hiệu áp tối thiểu cho van đảo chiều:', o: ['0,5 bar', '1 bar', '3,5 bar', '10 bar'], a: 2, e: 'Cần 3,5 bar để van hoạt động tốt.' },
    { q: 'Vì sao máy 1 chiều chỉ cần phin lọc (không sấy)?', o: ['Không có ẩm', 'Nhiệt độ sôi ~5 °C không đóng băng', 'Dùng R410A', 'Có bình tích'], a: 1, e: 'Không có nguy cơ tắc ẩm do đóng băng.' },
    { q: 'Trong máy hút ẩm, nước ngưng ở:', o: ['Dàn nóng', 'Dàn lạnh', 'Máy nén', 'Phin sấy'], a: 1, e: 'Dàn lạnh ~5 °C.' },
    { q: 'Máy nén xoắn ốc đẩy hơi ra ở:', o: ['Bên ngoài vòng xoắn', 'Tâm vòng xoắn', 'Đáy', 'Nắp sau'], a: 1, e: 'Hơi bị dồn vào tâm.' }
  ],
  match: [
    ['Van đảo chiều', 'Chuyển lạnh ⇄ sưởi'],
    ['Hồi nhiệt', 'Tăng năng suất lạnh riêng'],
    ['Máy hút ẩm', 'Rơle độ ẩm'],
    ['Máy cửa sổ', 'Có cửa gió tươi'],
    ['Ống tiêu âm', 'Giảm xung động và ồn'],
    ['Van một chiều', 'Chỉ cho ga đi một chiều']
  ]
});
