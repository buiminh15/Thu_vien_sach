window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 10,
  title: 'Động cơ, thiết bị điện và tự động của máy điều hòa',
  intro: 'Blốc điều hòa lớn hơn tủ lạnh hàng chục lần nên dùng rơle khởi động kiểu điện áp, tụ khởi động, tụ làm việc; rơle bảo vệ dạng đĩa; thermostat điện tử; xả băng; và các sơ đồ điện từ đơn giản đến máy 2 cụm 2 chiều.',
  sections: [
    { icon: '⚙️', title: 'Động cơ một pha có tụ khởi động và tụ làm việc', blocks: [
      { t: 'p', x: 'Công suất blốc điều hòa lớn hơn tủ lạnh hàng chục lần, dòng khởi động và dòng làm việc cũng lớn hơn hàng chục lần. Vì vậy:' },
      { t: 'list', items: [
        'Không dùng rơle khởi động kiểu dòng điện mà dùng <b>rơle khởi động kiểu điện áp</b>.',
        'Dùng thêm <b>tụ khởi động</b> và <b>tụ làm việc</b> (tụ ngậm) để tăng mômen khởi động và hiệu suất làm việc của động cơ.',
        'Một số blốc lớn chuyển sang dùng điện 3 pha.'
      ] },
      { t: 'table', head: ['Sơ đồ đấu dây', 'Ghi chú'], rows: [
        ['Chỉ có tụ làm việc nối hai đầu R và S', 'Kiểu khởi động đơn giản nhất, dùng cho quạt dàn ngưng, dàn bay hơi, quạt trần; mômen khởi động không lớn'],
        ['Rơle điện áp + tụ khởi động + tụ làm việc', 'Dạng đầy đủ cho blốc điều hòa'],
        ['3 pha có bộ sưởi dầu (L1, L2, L3, N)', 'Không có rơle khởi động và tụ; phải có bộ bảo vệ thứ tự pha để tránh quay ngược, vì chỉ quay thuận chiều dầu mới lên bôi trơn được cho máy nén']
      ] },
      { t: 'p', x: 'Rơle bảo vệ quá tải nên lắp ngay cạnh các cọc tiếp điện, trong vành bảo vệ cọc: ngoài tín hiệu nhiệt của điện trở trong rơle còn nhận tín hiệu nhiệt trực tiếp từ vỏ máy nén. Blốc có điện trở sưởi dầu trong cácte (tránh ga lỏng hòa vào dầu khi máy nghỉ lâu).' },
      { t: 'widget', name: 'dl-ac-motor', title: 'Động cơ máy nén điều hòa: rơle điện áp + tụ khởi động + tụ làm việc' }
    ] },
    { icon: '🧲', title: 'Rơle khởi động kiểu điện áp', blocks: [
      { t: 'p', x: 'Dùng cho blốc điều hòa không khí và một số loại tủ lạnh (NEC, SANYO, SHARP). Ưu điểm: không gây tia lửa điện; không cần đặc tính dòng nên lắp lẫn được cho nhiều blốc có công suất khác nhau.' },
      { t: 'key', x: 'Rơle điện áp hoạt động dựa vào điện áp giữa cọc C và S: khi tốc độ rôto đạt ~75% định mức, điện áp trên cuộn S đủ lớn để hút tấm sắt, mở tiếp điểm — ngắt tụ khởi động.' },
      { t: 'list', items: [
        'Phân biệt với rơle dòng: dây cuộn rơle dòng rất to (bằng dây cuộn làm việc); dây cuộn rơle điện áp rất mảnh như sợi tóc, nhiều vòng.',
        'Tiếp điểm khởi động của rơle điện áp là <b>thường đóng</b> (có điện là đóng ngay), nên khi cấp điện dòng đạt ngay điểm B (dòng ngắn mạch của cả cuộn làm việc và khởi động), không có điểm A như rơle dòng.',
        'Cấu tạo: cuộn dây, tấm sắt hình chữ L ngược xoay quanh trục; nhờ lò xo kéo tấm sắt nên tiếp điểm luôn đóng; tiếp điểm động là thép đàn hồi. Khi cuộn dây có điện áp đủ lớn, tấm sắt bị hút xuống, chốt đẩy mở tiếp điểm, ngắt dòng vào cuộn khởi động.'
      ] },
      { t: 'table', head: ['Điểm', 'Ý nghĩa (blốc 9000 Btu/h, 0,75 kW)'], rows: [
        ['B', 'Dòng ngắn mạch cuộn làm việc + khởi động (LRA)'],
        ['C', 'Tốc độ rôto đạt 75% định mức, rơle điện áp ngắt tiếp điểm'],
        ['D', 'Tốc độ 100% định mức, dòng làm việc đầy tải (FLA)']
      ] },
      { t: 'widget', name: 'dl-voltage-relay', title: 'Rơle điện áp: điện áp cuộn C–S tăng, tiếp điểm mở' }
    ] },
    { icon: '🛡️', title: 'Rơle bảo vệ quá tải', blocks: [
      { t: 'p', x: 'Bảo vệ máy điều hòa vẫn dùng nguyên lý thanh lưỡng kim như ở tủ lạnh (mục 5.4) nhưng có hình đĩa tròn; có thể lắp ngay trên vỏ máy nén, trong vành bảo vệ cọc tiếp điện, hoặc bên ngoài. Một số máy nén lớn còn có thêm rơle lưỡng kim gắn trực tiếp lên cuộn dây động cơ bên trong blốc.' },
      { t: 'p', x: 'Khi dòng làm việc bình thường, nhiệt từ dây điện trở không đủ làm đĩa lưỡng kim mở tiếp điểm. Khi dòng tăng, nhiệt từ điện trở (loại kiểu tròn) hoặc từ cuộn dây động cơ (loại gắn trực tiếp) đủ làm đĩa biến dạng và mở tiếp điểm bảo vệ. Khi rơle nguội đĩa lại đóng tiếp điểm cho máy nén hoạt động trở lại.' },
      { t: 'tip', x: 'Ưu điểm lắp rơle quá tải ngay trên vỏ: nhận được cả tín hiệu nhiệt độ vỏ máy nén (gián tiếp là nhiệt độ cuộn dây) lẫn tín hiệu dòng quá tải. Nhược điểm của rơle gắn trong cuộn dây: sửa chữa khó, phải mổ blốc.' }
    ] },
    { icon: '🌡️', title: 'Rơle nhiệt độ và xả băng', blocks: [
      { t: 'p', x: 'Điều hòa vẫn dùng thermostat hộp xếp như tủ lạnh, nhưng ngày nay còn dùng <b>rơle nhiệt độ điện trở</b> (thermistor): điện trở thay đổi theo nhiệt độ được chuyển thành tín hiệu đóng ngắt; độ chính xác cao và khống chế nhiệt độ phòng tốt hơn.' },
      { t: 'p', x: 'Máy 2 chiều dùng ở xứ lạnh: khi nhiệt độ ngoài trời xuống dưới 0 °C, dàn ngoài nhà đóng băng làm cản trở trao đổi nhiệt nên phải trang bị hệ thống xả băng tự động. Nhưng ở khí hậu Việt Nam, nhiệt độ ngoài trời hầu như không xuống dưới 10 °C, nên máy 2 chiều không cần trang bị xả băng tự động.' }
    ] },
    { icon: '🗺️', title: 'Sơ đồ điện máy điều hòa phòng', blocks: [
      { t: 'p', x: 'Chức năng, kết cấu, máy nén, quạt khác nhau thì sơ đồ điện khác nhau. Hãy bắt đầu từ mạch đơn giản nhất.' },
      { t: 'list', items: [
        '<b>Cửa sổ 1 chiều đơn giản</b>: nguồn 220 V → công tắc chính (nấc quạt chậm/nhanh, nấc làm lạnh) → rơle nhiệt độ + rơle bảo vệ nối tiếp → máy nén (chỉ có tụ làm việc, không rơle/tụ khởi động); quạt có 2 tốc độ.',
        '<b>Máy BK (Nga) 1 chiều</b>: thêm tụ khởi động C2 (75 μF), rơle điện áp K (khởi động máy nén), điện trở 100 kΩ, tụ ngậm C1 cho quạt và máy nén, thermostat E (20 V, 12 A), rơle bảo vệ F, bộ núm chọn chế độ S (Tắt / Quạt yếu–mạnh / Điều hòa yếu–mạnh). Nguồn 220 V, 50 Hz: một đầu nối vào cuộn làm việc động cơ quạt và máy nén (dây đỏ), đầu kia qua núm S, qua các đầu dây tới tốc độ chậm và nhanh của quạt và vào động cơ máy nén; rơle bảo vệ và rơle nhiệt độ mắc nối tiếp trong mạch này.',
        '<b>Máy cửa sổ 2 chiều (bơm nhiệt)</b>: thêm van điện từ Y1 điều khiển van đảo chiều 4 ngả. Khi làm lạnh, rơle nhiệt độ khống chế máy nén và quạt gió. Khi sưởi, rơle nhiệt độ khống chế cả máy nén, quạt và van điện từ Y1.',
        '<b>Feeder (Mỹ) quạt 3 tốc độ</b>: núm 4 vị trí OFF / FAN LOW–HIGH / COOL LOW–HIGH, rơle quá tải trong, thermostat.',
        '<b>Daikin 2 cụm 1 chiều (FTY35CVMA / RY35CVMA, 12 000 Btu/h)</b>: dàn lạnh có bảng mạch PCB1/PCB2, đầu thu tín hiệu điều khiển từ xa, môtơ quạt; dàn nóng có môtơ quạt M1F, máy nén M1C, tụ C11R/C12R, rơle K1M, bảo vệ nhiệt Q1L, cầu chì 3,15 A. Hai cụm nối bằng đầu nối X1M.',
        '<b>Daikin 2 cụm 2 chiều (9 000 và 12 000 Btu/h)</b>: thêm van đảo chiều, cảm biến nhiệt độ dàn (R2T, R4T), mạch truyền tín hiệu điều khiển giữa hai cụm.'
      ] },
      { t: 'widget', name: 'dl-ac-circuit', title: 'Mạch điện máy điều hòa tương tác: chọn nấc, đóng nhiệt, xem dòng điện' },
      { t: 'tip', x: 'Cách đọc nhanh sơ đồ: (1) tìm nguồn L–N–E; (2) tìm nhánh động cơ máy nén (C, R, S) và các thiết bị khởi động (rơle điện áp, tụ khởi động, tụ làm việc); (3) tìm thiết bị bảo vệ nối tiếp (rơle quá tải, thermostat); (4) tìm các động cơ quạt và núm chọn tốc độ; (5) tìm van đảo chiều nếu máy 2 chiều.' }
    ] }
  ],
  summary: [
    'Blốc điều hòa dùng rơle điện áp + tụ khởi động + tụ làm việc; blốc 3 pha cần bảo vệ thứ tự pha.',
    'Rơle điện áp: tiếp điểm thường đóng, ngắt khi điện áp cuộn đủ lớn lúc rôto ~75% tốc độ; dây rất mảnh.',
    'Rơle dòng chỉ dùng cho tủ lạnh nhỏ; rơle điện áp dùng được cho nhiều công suất khác nhau và không gây tia lửa.',
    'Rơle quá tải đĩa lưỡng kim lắp ngay trên vỏ nhận cả tín hiệu dòng và nhiệt độ vỏ.',
    'Thermostat điện trở (thermistor) chính xác hơn hộp xếp.',
    'Ở Việt Nam máy 2 chiều không cần xả băng tự động.',
    'Sơ đồ điều hòa 2 chiều có thêm van điện từ Y1 điều khiển van đảo chiều.'
  ],
  cards: [
    ['Vì sao điều hòa không dùng rơle dòng?', 'Công suất và dòng khởi động quá lớn; dùng rơle điện áp + tụ'],
    ['Rơle điện áp tác động theo?', 'Điện áp giữa cọc C và S (khi rôto ~75% tốc độ)'],
    ['Tiếp điểm rơle điện áp?', 'Thường đóng; mở khi điện áp đủ lớn'],
    ['Dây cuộn rơle điện áp?', 'Rất mảnh như sợi tóc'],
    ['Tụ khởi động dùng để?', 'Tăng mômen khởi động'],
    ['Tụ làm việc (tụ ngậm) dùng để?', 'Nâng hiệu suất làm việc của động cơ'],
    ['Blốc 3 pha cần thiết bị bảo vệ nào?', 'Bảo vệ thứ tự pha (tránh quay ngược)'],
    ['Rơle quá tải đĩa tròn lắp ở đâu?', 'Trên vỏ máy nén trong vành bảo vệ cọc tiếp điện'],
    ['Thermistor là gì?', 'Điện trở nhiệt: điện trở thay đổi theo nhiệt độ làm tín hiệu thermostat'],
    ['Điều khiển van đảo chiều trong sơ đồ?', 'Van điện từ Y1'],
    ['Máy 2 chiều ở Việt Nam có cần xả băng?', 'Không (nhiệt độ ngoài hiếm khi dưới 10 °C)']
  ],
  quiz: [
    { q: 'Rơle khởi động điều hòa thường dùng là:', o: ['Rơle dòng', 'Rơle điện áp', 'Rơle thời gian', 'Rơle nhiệt'], a: 1, e: 'Rơle điện áp.' },
    { q: 'Dây cuộn rơle điện áp so với rơle dòng:', o: ['To hơn', 'Rất mảnh', 'Bằng nhau', 'Không có dây'], a: 1, e: 'Mảnh như sợi tóc.' },
    { q: 'Blốc 3 pha phải có bảo vệ thứ tự pha vì:', o: ['Tránh sét', 'Quay ngược thì dầu không lên bôi trơn', 'Tiết kiệm điện', 'Giảm ồn'], a: 1, e: 'Chỉ quay thuận dầu mới lên bôi trơn.' },
    { q: 'Rơle điện áp đóng/ngắt:', o: ['Ngắt tụ khởi động khi rôto ~75% tốc độ', 'Ngắt máy nén', 'Đóng quạt', 'Đảo chiều'], a: 0, e: 'Cắt mạch khởi động.' },
    { q: 'Điều hòa 2 chiều ở Việt Nam thường không có:', o: ['Van đảo chiều', 'Xả băng tự động', 'Thermostat', 'Quạt'], a: 1, e: 'Nhiệt độ ngoài trời hiếm khi dưới 10 °C.' },
    { q: 'Kiểu khởi động đơn giản nhất (chỉ tụ làm việc nối R–S) thường dùng cho:', o: ['Blốc 5 HP', 'Quạt dàn ngưng, dàn bay hơi', 'Máy nén xoắn ốc', 'Máy hút ẩm'], a: 1, e: 'Mômen khởi động không lớn.' }
  ],
  match: [
    ['Rơle điện áp', 'Tiếp điểm thường đóng'],
    ['Tụ khởi động', 'Tăng mômen'],
    ['Tụ làm việc', 'Tăng hiệu suất'],
    ['Thermistor', 'Cảm biến điện trở'],
    ['Y1', 'Van điện từ đảo chiều'],
    ['Bảo vệ thứ tự pha', 'Blốc 3 pha']
  ]
});
