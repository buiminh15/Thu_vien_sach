window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 7,
  title: 'Sử dụng và bảo quản tủ lạnh',
  intro: 'Vận chuyển, đặt tủ, kiểm tra nguồn điện, chỉnh nhiệt độ, bảo quản thực phẩm, xả băng, vệ sinh và an toàn — những điều người dùng và thợ lắp đặt phải biết để tủ bền 15–25 năm.',
  sections: [
    { icon: '🚚', title: 'Vận chuyển tủ lạnh', blocks: [
      { t: 'list', items: [
        'Cố định blốc vào khung tủ (nhất là blốc nằm ngang) để khỏi gãy ống đẩy, ống hút nối vào máy nén. Một số loại có bulông cố định — siết khi vận chuyển, tháo ra khi lắp đặt; loại không có thì buộc chặt bằng dây.',
        'Dàn ngưng, dàn bay hơi dễ móp, gãy, hư hỏng nếu va quẹt → cần tấm chắn bảo vệ.',
        'Vận chuyển ở tư thế đúng (tủ đứng thì để đứng; tủ nằm thì cửa mở lên trên).'
      ] },
      { t: 'warn', x: 'Nếu tủ đứng mà để ngang khi vận chuyển, dầu ở máy nén có thể tràn vào ống. Tại nơi lắp phải để khoảng 1 ngày cho dầu chảy về máy nén rồi mới cho tủ khởi động.' }
    ] },
    { icon: '📍', title: 'Chọn vị trí đặt tủ', blocks: [
      { t: 'p', x: 'Tủ thu nhiệt ở buồng lạnh qua dàn bay hơi và tỏa nhiệt qua dàn ngưng ra môi trường, nên chỗ đặt phải thoáng mát, lưu thông không khí, tránh nắng, lò sưởi, bếp.' },
      { t: 'list', items: [
        'Dàn ngưng cách tường ít nhất <b>10 cm</b> (tủ có dàn ngưng gắn lên vỏ thì vỏ chung quanh cách tường mọi phía ≥ 10 cm) — không khí đối lưu theo hiệu ứng ống khói, từ đáy lên sau sườn và nóc tủ.',
        'Không đặt tủ ngay trên sàn nhà sàn bếp ẩm (gỉ vỏ, chập dây, chuột bọ cắn dây); nên kê lên giá kim loại.',
        'Quanh tủ không đặt đồ vật cản trở đối lưu của dàn ngưng.',
        'Kê tủ không nghiêng: nếu không có nivô, dùng đĩa nước đặt lên nóc tủ, theo mép nước điều chỉnh bằng cách xoay núm chân tủ.'
      ] },
      { t: 'widget', name: 'dl-placement', title: 'Vị trí đặt tủ: khoảng hở và nhiệt độ ngưng tụ' }
    ] },
    { icon: '⚡', title: 'Kiểm tra nguồn điện', blocks: [
      { t: 'list', items: [
        'Điện áp có thể lệch ±10% so với danh định; lệch hơn có thể hỏng blốc hoặc cháy động cơ vì không khởi động được hoặc quá tải.',
        'Nếu điện áp lên xuống thất thường, dùng ổn áp có công suất lớn hơn công suất tủ khoảng 1,5 lần (động cơ 120 W → ổn áp 200 W).',
        'Điện áp khác loại (tủ 100 V mà lưới 200 V): bắt buộc dùng biến thế hạ áp.',
        'Tủ mới đã có bảo vệ điện áp và bảo vệ trễ tiếp điện 3–5 phút sau khi dừng; tủ cũ nên lắp bộ bảo vệ để bảo vệ cả hai đại lượng.',
        'Ổ cắm, tiếp điểm phải chắc chắn, không chập chờn. Cắm điện xong mới bật núm thermostat; trước khi cắm có thể xoay núm về 0.',
        'Bật núm khoảng 3 phút tủ khởi động nhẹ nhàng, chỉ nghe một tiếng "cạch" nhỏ của rơle. Nếu máy rung lắc mạnh hoặc kêu "ò ò" liên tục kéo dài, phải tắt ngay để tìm nguyên nhân.',
        'Khi chạy ổn định, kiểm tra dòng điện (ampe kìm) và hệ số b trong một giờ. Mùa hè đóng ngắt ít, mùa đông đóng ngắt nhiều; ngoài trời >33 °C có thể chạy liên tục. Khi làm đá cũng chạy liên tục.'
      ] }
    ] },
    { icon: '🎛️', title: 'Điều chỉnh nhiệt độ', blocks: [
      { t: 'p', x: 'Tùy yêu cầu bảo quản, đặt núm thermostat; nhiệt độ buồng phụ thuộc vị trí núm và nhiệt độ ngoài trời (hình 6.1). Núm càng về MAX, buồng càng lạnh; ngoài trời càng lạnh buồng càng lạnh. Dàn có quạt gió: vị trí càng gần cửa gió thì càng lạnh.' },
      { t: 'tip', x: 'Ngăn lạnh thường 2–5 °C; ngăn rau quả 7–10 °C khi núm ở vị trí trung bình và ngoài trời khoảng 28 °C.' }
    ] },
    { icon: '🥩', title: 'Bảo quản thực phẩm', blocks: [
      { t: 'h3', x: 'Thực phẩm đông lạnh (ngăn đông)' },
      { t: 'list', items: [
        'Bảo quản 2–3 tháng ở −12 °C; 5–6 tháng ở −18 °C; đến 1 năm ở −29 °C. Thịt bò, thịt trâu bền hơn thịt lợn, cá, gia cầm.',
        'Độ ẩm ngăn đông rất thấp (hơi ẩm bám dàn thành tuyết): phải bọc kỹ bằng nilông để khỏi khô hao, "cháy lạnh" (thực phẩm chuyển màu sẫm, khô, giảm chất lượng).',
        'Rã đông từ từ ở ngăn dưới để giữ chất lượng và dinh dưỡng.',
        'Không cho gà, vịt, thịt tươi vào kết đông ở ngăn đông: kết đông chậm tạo tinh thể đá lớn xé rách màng tế bào, khi rã đông nước dịch chảy mất, thịt mất ngon. Chỉ nên đông thịt trâu, bò, gà già: tinh thể đá lớn làm thịt mềm và ngon hơn.',
        'Không thể làm kem trong ngăn đông vì không kết đông nhanh được — que kem thành cục đá tinh thể lớn, ăn không ngon. Làm đá giải khát hằng ngày thì bình thường; không nên làm đá bán vì mùa hè máy chạy liên tục, giảm tuổi thọ.'
      ] },
      { t: 'h3', x: 'Thực phẩm tươi (ngăn lạnh)' },
      { t: 'list', items: [
        '2–4 °C cho thực phẩm tươi; 7–10 °C cho rau quả. Không nhồi quá nhiều, bịt kín các khoảng đối lưu; giá bằng nan để đối lưu, không lót nilông.',
        'Bọc kín thực phẩm, tránh nhiễm chéo vi khuẩn (đồ sống lẫn đồ chín; dịch nhầy thức ăn sống lây sang thức ăn chín).',
        'Không bảo quản thức ăn chín quá 1–2 ngày, thực phẩm sống quá 1 tuần.',
        'Không cho thức ăn nóng vào tủ khi nóng; khi lấy ra phải nấu sôi lại.',
        'Không cho đồ nặng mùi (cá mực, sầu riêng, mắm tôm...) vào tủ; nếu bắt buộc, bọc nhiều lớp nilông hoặc cho vào chai lọ kín.',
        'Mở cửa nhiều lần: khí lạnh trong tủ tràn ra, thay bằng không khí nóng ẩm.',
        'Tuyệt đối không dùng dao, tuốc nơ vít hoặc vật cứng nạy tuyết ở dàn nhôm: dễ thủng, sửa rất khó.'
      ] }
    ] },
    { icon: '❄️', title: 'Xả băng và vệ sinh bảo quản', blocks: [
      { t: 'p', x: 'Tủ cũ thường xả băng bán tự động hoặc bằng tay. Nếu dàn phủ lớp tuyết dày 10–15 mm thì phải xả băng. Với tủ bán tự động chỉ cần bấm nút xả băng. Với xả băng bằng tay: mở cửa, lấy hết thực phẩm, chờ băng tan hết và kết hợp lau vệ sinh.' },
      { t: 'list', items: [
        'Mỗi tháng một lần dọn hết thực phẩm để vệ sinh tủ; hầu hết vi khuẩn bị kìm hãm ở nhiệt độ bảo quản nhưng vẫn có loài ưa lạnh phát triển.',
        'Lau bằng khăn và nước ấm pha xà phòng loãng trong và ngoài tủ, sau đó lau nước sạch rồi lau khô.',
        'Đệm cửa cao su: lau bằng dung dịch Na₂CO₃ pha loãng 4%, giúp tuổi thọ lâu và đàn hồi tốt.',
        'Dàn ngưng, blốc cũng cần lau chùi, nhưng nước không được lọt vào hộp đấu dây điện.',
        'Khi nghỉ dài ngày: xoay núm về 0, để tủ trống, không dùng tủ làm kho chứa thực phẩm, chất lỏng dễ bay hơi, lên men, dễ cháy. Không đóng kín cửa mà dùng miếng đệm để hé cửa cho thông hơi; đề phòng trẻ con chui vào tủ.'
      ] }
    ] },
    { icon: '🦺', title: 'Yêu cầu về an toàn', blocks: [
      { t: 'h3', x: 'An toàn điện' },
      { t: 'list', items: [
        'Do nhiều nguyên nhân, điện có thể rò ra vỏ tủ (nhất là các chi tiết kim loại như tay nắm): gây giật cho người dùng và thợ. Khi lắp, dùng bút thử điện kiểm tra; đôi khi chỉ cần đổi đầu phích cắm là hết rò.',
        'Sau khi tắm xong, tay ướt hoặc đổ mồ hôi, chân đất đừng sờ vào tủ để lấy đồ.',
        'Phát hiện rò điện phải tìm nguyên nhân: chuột cắn dây, chập dây, hỏng thiết bị điện, trầy xước mất cách điện.',
        'Nối đất toàn bộ thiết bị của hệ thống như động cơ, rơle nhiệt, quạt, đồng hồ xả băng; ngắt điện khi bảo dưỡng sửa chữa; nên có hai thợ để cấp cứu kịp thời.'
      ] },
      { t: 'h3', x: 'An toàn độc hại, cháy nổ' },
      { t: 'list', items: [
        'Ga freon (R12...) gặp ngọn lửa trần sinh ra khí phosgen rất độc → không hút thuốc khi sửa tủ, cẩn thận khi hàn.',
        'Đề phòng bỏng lạnh do ga lỏng phun vào người.',
        'Ga cháy như propan, butan (tủ dùng isobutan): tuyệt đối đề phòng ngọn lửa trần. Nếu cần hàn, phải xả hết ga ra ngoài và có quạt thông gió mạnh; không để chất cháy nổ gần nơi sửa chữa.'
      ] }
    ] }
  ],
  summary: [
    'Vận chuyển đúng tư thế; tủ đứng bị để ngang phải chờ ~1 ngày trước khi chạy.',
    'Đặt tủ cách tường ≥ 10 cm, thoáng, tránh nhiệt, kê thăng bằng.',
    'Điện áp lệch ≤ ±10%; ổn áp ≥ 1,5 lần công suất; khởi động chỉ một tiếng "cạch".',
    'Thực phẩm đông bọc kín; không kết đông gà vịt, thịt tươi trong ngăn đông thường.',
    'Không dùng vật cứng nạy băng, không làm kem trong ngăn đông.',
    'Đệm cửa lau bằng Na₂CO₃ 4%; vệ sinh mỗi tháng.',
    'Tránh lửa trần khi sửa tủ (phosgen); nối đất và ngắt điện khi sửa.'
  ],
  cards: [
    ['Khoảng cách tối thiểu dàn ngưng – tường?', '10 cm'],
    ['Tủ đứng bị vận chuyển nằm, bao lâu mới bật?', 'Để khoảng 1 ngày cho dầu về máy nén'],
    ['Điện áp cho phép lệch?', '±10%'],
    ['Công suất ổn áp?', '≥ 1,5 lần công suất tủ'],
    ['Tiếng khởi động bình thường?', 'Một tiếng "cạch" nhẹ của rơle'],
    ['Bảo quản đông −18 °C được bao lâu?', '5–6 tháng'],
    ['Ngăn lạnh bảo quản thức ăn chín tối đa?', '1–2 ngày'],
    ['Lau đệm cửa bằng?', 'Dung dịch Na₂CO₃ loãng 4%'],
    ['"Cháy lạnh" là gì?', 'Thực phẩm không bọc bị khô, sẫm màu trong ngăn đông'],
    ['Vì sao không kết đông gà trong ngăn đông?', 'Kết đông chậm → tinh thể đá lớn xé rách tế bào'],
    ['Dày tuyết bao nhiêu thì phải xả băng?', '10–15 mm'],
    ['Khí độc sinh ra khi freon gặp lửa?', 'Phosgen']
  ],
  quiz: [
    { q: 'Dàn ngưng nên cách tường ít nhất:', o: ['2 cm', '5 cm', '10 cm', '50 cm'], a: 2, e: '≥ 10 cm.' },
    { q: 'Độ lệch điện áp tối đa cho phép:', o: ['±1%', '±5%', '±10%', '±30%'], a: 2, e: 'Quá ±10% có thể hỏng blốc.' },
    { q: 'Tại sao không nên làm kem trong ngăn đông tủ lạnh thường?', o: ['Kem tan', 'Kết đông chậm, tinh thể đá lớn', 'Không có khay', 'Sợ nổ'], a: 1, e: 'Kết đông chậm → cục đá thô.' },
    { q: 'Hút thuốc khi sửa tủ lạnh nguy hiểm vì:', o: ['Hôi', 'Freon gặp lửa sinh phosgen độc', 'Gây nổ pittông', 'Hỏng thermostat'], a: 1, e: 'Phosgen.' },
    { q: 'Thức ăn chín trong ngăn lạnh không nên quá:', o: ['1–2 ngày', '1 tuần', '1 tháng', '6 tháng'], a: 0, e: 'Quá thời gian có nguy cơ nhiễm khuẩn.' },
    { q: 'Cách vệ sinh đệm cửa cao su tốt:', o: ['Axit', 'Na₂CO₃ 4%', 'Xăng', 'Cồn đặc'], a: 1, e: 'Giữ độ đàn hồi.' },
    { q: 'Khi tủ vừa kê xong, chạy rung lắc mạnh, kêu "ò ò" kéo dài. Việc cần làm:', o: ['Để chạy tiếp', 'Tắt ngay để tìm nguyên nhân', 'Tăng núm', 'Mở cửa'], a: 1, e: 'Có thể cháy blốc.' }
  ],
  match: [
    ['Cách tường 10 cm', 'Đối lưu dàn ngưng'],
    ['Ổn áp ≥ 1,5 lần', 'Điện áp thất thường'],
    ['Phosgen', 'Freon gặp lửa'],
    ['Ngăn rau quả', '7–10 °C'],
    ['Na₂CO₃ 4%', 'Lau đệm cao su'],
    ['Xả băng', 'Tuyết dày 10–15 mm']
  ]
});
