window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 11,
  title: 'Đặc tính vận hành, tính toán, lựa chọn máy',
  intro: 'Bảng thông số kỹ thuật, năng suất lạnh theo Btu/h, ảnh hưởng của nhiệt độ ngoài trời, chiều dài ống, chênh cao; ước tính công suất theo diện tích và 7 nguyên tắc chọn máy.',
  sections: [
    { icon: '📋', title: 'Các thông số kỹ thuật chính', blocks: [
      { t: 'list', items: [
        'Dạng máy (cửa sổ, 2 cụm, nhiều cụm); kiểu (1 chiều lạnh, 2 chiều bơm nhiệt); cách điều chỉnh năng suất (ON–OFF hoặc biến tần).',
        'Năng suất lạnh (12 000 Btu/h = 3,51 kW), năng suất nhiệt (13 000 Btu/h ≈ 3,8 kW).',
        'Nguồn điện (1 pha, 220 V, 50 Hz); dòng làm việc đầy tải FLA; dòng khởi động LRA; hệ số COP.',
        'Kích thước, khối lượng; kiểu máy nén (rôto, xoắn ốc, pittông); công suất động cơ; phương pháp khởi động.',
        'Đặc điểm dàn bay hơi, dàn ngưng (số ống, hàng ống, cánh); quạt dàn nóng, dàn lạnh.',
        'Thiết bị tiết lưu (ống mao hay van); ga và lượng nạp; dầu và lượng dầu.',
        'Kiểu phin lọc gió, điều khiển (trực tiếp, từ xa có dây/không dây), kiểu rơle nhiệt độ; kiểu lấy gió tươi; kiểu dàn lạnh (gắn tường, đặt sàn, giấu trần, treo trần); kiểu xả nước ngưng; bảo vệ máy nén.',
        'Phạm vi làm việc: chế độ lạnh và chế độ sưởi; phạm vi điều chỉnh nhiệt độ trong nhà và nhiệt độ ngoài trời cho phép max–min.'
      ] }
    ] },
    { icon: '⚡', title: 'Công suất động cơ và năng suất lạnh', blocks: [
      { t: 'p', x: 'Máy điều hòa phòng truyền thống có năng suất lạnh theo hệ Anh–Mỹ từ 6 000 đến 24 000 Btu/h theo bậc 3 000 Btu/h: 6 000, 9 000, 12 000, 15 000, 18 000, 21 000, 24 000 (7 loại). Thêm 36 000 và 48 000 Btu/h là ranh giới giữa điều hòa phòng và điều hòa thương nghiệp.' },
      { t: 'table', head: ['Btu/h', 'Năng suất lạnh (kW)', 'Công suất động cơ (kW)', 'Dòng FLA (A)'], rows: [
        ['9 000', '2,64', '0,75', '≈ 5'],
        ['12 000', '3,51', '1,1–1,3', '≈ 6,4–7,2'],
        ['18 000', '5,37', '1,5–1,9', '≈ 7,4–9,7'],
        ['24 000', '7,03', '2,5', '≈ 11–14'],
        ['36 000 (3 pha 380 V)', '10,5', '2,8–3,0', '≈ 6–8'],
        ['48 000 (3 pha 380 V)', '14,1', '4,5', '≈ 8']
      ] },
      { t: 'tip', x: 'Cùng công suất động cơ, máy hiệu suất cao cho năng suất lạnh lớn hơn máy hiệu suất thấp (số liệu Mitsubishi và Daikin trong sách).' },
      { t: 'widget', name: 'dl-ac-size', title: 'Đổi Btu/h ⇄ kW ⇄ HP và dòng làm việc' }
    ] },
    { icon: '🌡️', title: 'Khi nhiệt độ trong nhà và ngoài trời thay đổi', blocks: [
      { t: 'list', items: [
        'Nhiệt độ ngoài trời tăng → năng suất lạnh giảm, áp suất đầu đẩy tăng, dòng làm việc tăng. Ở 30 °C năng suất lạnh tăng ~5% (so với tiêu chuẩn), còn ở 50 °C giảm khoảng 15%.',
        'Máy hư hỏng, thấy áp suất đẩy cao: dùng nhiệt độ ngoài nhà và nhiệt độ ngưng tụ (đồ thị Mollier) để tính áp suất đầu đẩy và so với áp đo; nếu phù hợp thì không có khí không ngưng.',
        'Vì các thông số này thay đổi nên không được căn cứ vào áp suất hay dòng điện để nạp ga mà phải nạp ga định lượng theo hướng dẫn nhà chế tạo.'
      ] },
      { t: 'widget', name: 'dl-ac-ambient', title: 'Năng suất lạnh, áp suất đẩy và dòng điện theo nhiệt độ ngoài trời' },
      { t: 'h3', x: 'Các yếu tố khác ảnh hưởng đến năng suất lạnh' },
      { t: 'table', head: ['Yếu tố', 'Ảnh hưởng'], rows: [
        ['Nhiệt độ bay hơi', 'Tăng 1 °C → năng suất lạnh có thể tăng đến khoảng 3% (và ngược lại); máy nén xoắn ốc và rôto hiệu quả hơn pittông'],
        ['Lưu lượng gió qua dàn lạnh', 'Gió tăng (mạnh/vừa/yếu) → năng suất lạnh tăng. Không cản đường gió vào, ra; vệ sinh phin lọc không khí; phin bẩn làm gió yếu, hiệu suất kém'],
        ['Chiều dài ống ga và chênh cao hai dàn', 'Ống càng ngắn, độ cao càng nhỏ → năng suất lạnh càng lớn (khoảng 100% → 95% → 85% khi ống dài từ 5 m đến 15 m và chênh cao tăng)']
      ] },
      { t: 'widget', name: 'dl-ac-factors', title: 'Hệ số hiệu chỉnh năng suất lạnh: gió, chiều dài ống, chênh cao' }
    ] },
    { icon: '📐', title: 'Ước tính năng suất lạnh cần thiết', blocks: [
      { t: 'p', x: 'Tính chính xác phụ thuộc kiểu kiến trúc, chiều dày vách, vật liệu, cửa ra vào, cửa sổ, hướng nhà, số người, thiết bị phát nhiệt... Trong trường hợp không cần chính xác có thể tham khảo giá trị định hướng sau, tính cho 1 m² sàn:' },
      { t: 'table', head: ['Loại phòng', 'Btu/h/m²', 'W/m²'], rows: [
        ['Phòng ở bình thường', '400–500', '115–145'],
        ['Phòng khách, phòng ăn', '500–600', '145–175'],
        ['Phòng làm việc, thư viện, bảo tàng', '500–600', '145–175'],
        ['Tòa nhà văn phòng', '700–800', '200–235'],
        ['Khách sạn', '800–900', '235–265'],
        ['Cửa hàng bán quần áo', '600–700', '175–200'],
        ['Cửa hàng bách hóa; ngân hàng, quầy tiết kiệm', '600–760', '175–220'],
        ['Hội trường', '1000–1200', '295–350'],
        ['Vũ trường', '1500–1800', '440–525']
      ] },
      { t: 'p', x: 'Điều kiện tính: thời tiết Hà Nội, nhiệt độ ngoài trời 33 °C (điều hòa cấp 3), trong nhà 27 °C; nhà sàn bê tông, tường gạch 200 có vữa trát; cửa sổ khung gỗ hoặc nhôm diện tích vừa phải (20–25% diện tích mặt tiền), hướng đông tây phải có rèm che bên trong, ô văng che bên ngoài; cửa kín khí; không có phát nhiệt đặc biệt; gió làm mát dàn nóng không trở ngại; gió lạnh trong nhà không bị vướng.' },
      { t: 'warn', x: 'Phải tăng năng suất lạnh nếu: nhà toàn kính; có thiết bị phát nhiệt; khó khăn trong làm mát dàn ngưng.' },
      { t: 'widget', name: 'dl-ac-load', title: 'Tính nhanh công suất máy điều hòa cho phòng của bạn' }
    ] },
    { icon: '🛒', title: 'Nguyên tắc chọn máy điều hòa', blocks: [
      { t: 'steps', items: [
        '<b>1 cụm hay 2 cụm?</b> 1 cụm đơn giản, lắp dễ, rẻ nhưng ồn trong nhà, khó tìm vị trí, kém sang. 2 cụm lắp phức tạp hơn nhưng dễ tìm vị trí phù hợp, hợp mốt, giá cao hơn.',
        '<b>1 chiều hay 2 chiều?</b> Miền Nam chỉ cần 1 chiều. Miền Bắc, đặc biệt từ Vinh trở ra nên dùng 2 chiều: mùa đông tuy ngắn nhưng khá dài và khắc nghiệt. Năng suất sưởi của máy thường gấp đôi nhu cầu cân bằng nhiệt tính toán.',
        '<b>Ga lạnh?</b> R22 vẫn phổ biến; có R407C, R410A không phá ozon. Vẫn nên chọn R22 vì công nghệ đã quen thuộc và còn được phép đến 2040; máy đã nạp R22 dùng đến hết tuổi thọ.',
        '<b>Thông thường hay biến tần (inverter)?</b> Biến tần điều chỉnh năng suất lạnh theo tốc độ quay qua biến đổi tần số dòng điện; đắt hơn nhưng tiết kiệm năng lượng 30–50%. Tính cả giá máy cộng tiền điện vận hành suốt đời máy thì nên mua biến tần.',
        '<b>Năng suất lạnh yêu cầu?</b> Chọn máy có năng suất bằng hoặc cao hơn giá trị tính toán; càng sát chế độ tính toán càng tốt vì hiệu suất càng cao.',
        '<b>Hãng, nước, năm sản xuất?</b> Hãng nổi tiếng (Daikin, Mitsubishi, Hitachi, Toshiba, National...) thường tốt hơn về hiệu suất, tiếng ồn, tiết kiệm năng lượng, ít phải bảo dưỡng. Máy sản xuất năm 1995 tiêu thụ điện gần gấp 2 lần máy năm 2005.',
        '<b>Thẩm mỹ</b> phù hợp nội thất.'
      ] }
    ] }
  ],
  summary: [
    'Năng suất lạnh: 6 000–24 000 Btu/h theo bậc 3 000; 36 000 và 48 000 là ranh giới với thương nghiệp.',
    'Nhiệt độ ngoài trời tăng → năng suất lạnh giảm, áp đẩy và dòng làm việc tăng.',
    'Nhiệt độ bay hơi tăng 1 °C → năng suất lạnh tăng ~3%.',
    'Phin lọc bẩn → gió yếu → năng suất lạnh giảm; ống ga dài và chênh cao lớn cũng làm giảm năng suất.',
    'Ước tính nhanh: phòng ở 400–500 Btu/h/m²; phòng khách 500–600; văn phòng 700–800.',
    'Biến tần tiết kiệm 30–50% điện; chọn máy năng suất bằng hoặc cao hơn tính toán.'
  ],
  cards: [
    ['12 000 Btu/h bằng bao nhiêu kW?', '3,51 kW'],
    ['Bậc năng suất lạnh phòng?', '3 000 Btu/h'],
    ['Nhiệt độ ngoài trời tăng, năng suất lạnh?', 'Giảm (50 °C giảm khoảng 15%)'],
    ['Nhiệt độ bay hơi tăng 1 °C?', 'Năng suất lạnh tăng ~3%'],
    ['Lưu lượng gió tăng thì?', 'Năng suất lạnh tăng'],
    ['Phòng ở bình thường cần?', '400–500 Btu/h/m²'],
    ['Phòng khách cần?', '500–600 Btu/h/m²'],
    ['Biến tần tiết kiệm?', '30–50% điện'],
    ['Miền nào nên dùng 2 chiều?', 'Miền Bắc, nhất là từ Vinh trở ra'],
    ['Có nạp ga theo áp suất không?', 'Không, nạp định lượng theo nhà chế tạo'],
    ['Nhà toàn kính thì sao?', 'Phải tăng năng suất lạnh']
  ],
  quiz: [
    { q: 'Phòng khách 20 m² cần khoảng (500–600 Btu/h/m²):', o: ['5 000', '10 000–12 000', '30 000', '1 000'], a: 1, e: '20 × 500–600 = 10 000–12 000 Btu/h.' },
    { q: 'Nhiệt độ ngoài trời tăng, hiện tượng nào đúng?', o: ['Năng suất tăng', 'Áp suất đẩy tăng', 'Dòng giảm', 'Ống mao dài hơn'], a: 1, e: 'Áp đẩy và dòng tăng, năng suất giảm.' },
    { q: 'Vì sao không nạp ga theo áp suất/dòng điện?', o: ['Quá khó', 'Các thông số thay đổi theo điều kiện', 'Luật cấm', 'Thiếu đồng hồ'], a: 1, e: 'Phải nạp định lượng.' },
    { q: 'Nhà toàn kính cần:', o: ['Giảm công suất', 'Tăng năng suất lạnh', 'Không đổi', 'Dùng quạt'], a: 1, e: 'Nhiệt bức xạ lớn.' },
    { q: 'Điều hòa biến tần so với thông thường:', o: ['Rẻ hơn', 'Tiết kiệm 30–50% điện', 'Ồn hơn', 'Lạnh kém hơn'], a: 1, e: 'Điều chỉnh năng suất theo tốc độ.' },
    { q: '36 000 Btu/h bằng:', o: ['3,5 kW', '7 kW', '10,5 kW', '14 kW'], a: 2, e: '36 000 Btu/h = 10,5 kW.' }
  ],
  match: [
    ['9 000 Btu/h', '2,64 kW'],
    ['24 000 Btu/h', '7,03 kW'],
    ['Biến tần', 'Tiết kiệm 30–50%'],
    ['Phòng ở', '400–500 Btu/h/m²'],
    ['Văn phòng', '700–800 Btu/h/m²'],
    ['Nhiệt bay hơi +1 °C', '+3% năng suất lạnh']
  ]
});
