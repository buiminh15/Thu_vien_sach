// Tủ lạnh nén (EPI) – Chương 6: An toàn điện và mạch điện.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.refrig = BOOK_DATA.refrig || { chapters: [] };
BOOK_DATA.refrig.chapters.push({
  n: 6,
  title: 'An toàn điện và mạch điện của tủ lạnh nén',
  intro: 'Phần lớn tủ lạnh nén có mạch điện gồm <b>cuộn chạy (run winding)</b> và <b>cuộn khởi động (start winding)</b> của động cơ máy nén, <b>rơ-le khởi động</b> (hoặc <b>PTC</b>), <b>thermostat</b>, <b>bảo vệ động cơ (motor protector)</b>, đôi khi có <b>tụ điện</b> và <b>đèn trong tủ</b>. Chương này học cách mỗi mạch hoạt động qua sơ đồ tương tác, sau 6 quy tắc an toàn điện.',
  sections: [
    { icon: '⚡', title: 'Quy tắc an toàn điện', blocks: [
      { t: 'steps', items: [
        '<b>Rút phích cắm</b> ra khỏi ổ trước khi sửa bất cứ phần điện nào.',
        'Nếu có dây nối đất, nối chặt vào: chân đất của phích cắm và một bộ phận kim loại của máy nén hoặc tủ.',
        '<b>Xả điện tụ</b> trước khi cầm (xem chương đo kiểm điện).',
        'Dây điện cũ giòn, hỏng, sờn: xử lý cẩn thận và <b>thay sớm</b> nhất có thể.',
        'Luôn lắp lại nắp hộp đấu dây thật chặt để không lỏng.',
        'Dùng cầu chì đúng dung lượng.'
      ] },
      { t: 'warn', x: 'Khi buộc phải làm việc lúc tủ <b>đang cắm điện</b>: không đứng trên nền ẩm — đứng trên tấm gỗ hoặc thảm cao su; dùng dụng cụ cách điện (tua-vít có cán cách điện) và giày đế cao su.' },
      { t: 'widget', name: 'rf-elec-safety', title: 'Việc nào an toàn?' }
    ] },
    { icon: '🧲', title: 'Động cơ máy nén: cuộn chạy và cuộn khởi động', blocks: [
      { t: 'list', items: [
        'Điện cấp cho động cơ nối như sau: phích cắm → (cáp cấp điện) → <b>khối đấu dây (terminal block)</b> → <b>cuộn dây</b> trong động cơ. Không phải tủ nào cũng có khối đấu dây; dây từ phích thường nối vào các bộ phận khác trong hộp đấu dây. Nguyên lý “cuộn chạy và cuộn khởi động” vẫn như nhau.',
        '<b>Cuộn chạy (run winding)</b> kéo động cơ: dòng điện luôn chạy qua khi máy nén chạy.',
        '<b>Cuộn khởi động (start winding)</b> giúp máy nén khởi động: dòng chỉ chạy <b>vài giây</b> lúc mới khởi động.'
      ] }
    ] },
    { icon: '🔌', title: 'Sơ đồ mạch điện tương tác', blocks: [
      { t: 'p', x: 'Sơ đồ bên dưới là mạch đầy đủ của một tủ có: rơ-le khởi động kiểu từ (solenoid), khối đấu dây, thermostat, bảo vệ động cơ, tụ khởi động và đèn trong tủ (như hình trong sổ tay). Bạn có thể <b>mở/đóng cửa, đổi nhiệt độ trong tủ, bật/tắt tụ</b>, chọn <b>kiểu khởi động (rơ-le từ hoặc PTC)</b> và <b>giả lập quá tải</b> để xem dòng điện (đường màu) đi đâu.' },
      { t: 'widget', name: 'rf-circuit', title: 'Mạch điện đầy đủ: thermostat, rơ-le/PTC, bảo vệ, tụ, đèn' }
    ] },
    { icon: '🚦', title: 'Mạch khởi động', blocks: [
      { t: 'h3', x: 'Rơ-le từ (solenoid)' },
      { t: 'steps', items: [
        'Điện cấp cho cuộn chạy đi qua một <b>cuộn nhỏ (cuộn rơ-le)</b>.',
        'Lúc khởi động, dòng lớn qua cuộn rơ-le; <b>từ trường nâng pit-tông tiếp điểm</b> lên.',
        'Tiếp điểm đóng → dòng chạy tới <b>cuộn khởi động</b>.',
        'Động cơ khởi động với dòng ở cả cuộn khởi động và cuộn chạy.',
        'Ngay khi máy nén đạt tốc độ chạy, dòng giảm, <b>tiếp điểm mở</b> và ngắt cuộn khởi động; động cơ chạy chỉ với cuộn chạy.'
      ] },
      { t: 'h3', x: 'Thiết bị khởi động PTC' },
      { t: 'steps', items: [
        'PTC khi <b>nguội có điện trở thấp</b> nên dòng chạy qua; khi <b>nóng điện trở rất cao</b> nên dòng không qua được.',
        'Khi bật máy nén, dòng tới cuộn chạy và cuộn khởi động (qua PTC nguội) → động cơ khởi động.',
        'PTC nóng lên rất nhanh, điện trở tăng vọt → ngắt cuộn khởi động.',
        'Động cơ chạy với cuộn chạy; một dòng rất nhỏ qua PTC giữ nó đủ ấm để cuộn khởi động luôn bị ngắt.',
        '<b>Sau khi máy nén dừng, PTC cần vài phút để nguội</b> thì mới khởi động lại được.'
      ] },
      { t: 'tip', x: 'Máy nén dùng PTC không thể lắp tụ khởi động; bảo vệ động cơ thường nằm trong vỏ máy nén.' },
      { t: 'widget', name: 'rf-start-device', title: 'Rơ-le từ hay PTC?' }
    ] },
    { icon: '🌡️', title: 'Mạch điều khiển, bảo vệ, tụ và đèn', blocks: [
      { t: 'h3', x: 'Thermostat (mạch điều khiển)' },
      { t: 'list', items: [
        'Nhiệt độ trong tủ do <b>thermostat</b> (công tắc) điều khiển, nối ở khối đấu dây giữa nguồn và cuộn máy nén.',
        'Khi bên trong đủ lạnh (<b>+4 °C đến +8 °C cho vắc-xin</b>), tiếp điểm thermostat <b>mở</b> → không cấp điện cho động cơ, máy nén không chạy.',
        'Khi nhiệt độ tăng: tiếp điểm thermostat <b>đóng</b> → dòng tới cuộn chạy qua cuộn rơ-le → pit-tông nâng → tiếp điểm rơ-le đóng → dòng tới cuộn khởi động → máy nén khởi động.',
        'Máy nén chạy làm lạnh tới khi đủ thấp thì thermostat mở và máy dừng. Nhiệt độ bật/tắt đặt bằng núm thermostat.'
      ] },
      { t: 'h3', x: 'Bảo vệ động cơ (motor protector)' },
      { t: 'list', items: [
        'Lắp trong mạch sao cho <b>toàn bộ dòng (cuộn khởi động + cuộn chạy)</b> đi qua nó. Giảm khả năng hỏng động cơ.',
        'Chạy bình thường: tiếp điểm đóng. Nếu <b>dòng quá lớn qua cuộn</b> hoặc <b>máy nén quá nóng</b>, nhiệt làm tiếp điểm <b>mở</b> → ngắt mạch, máy nén dừng.',
        'Sau khi bảo vệ nguội (<b>5 đến 10 phút</b>) tiếp điểm đóng lại và máy nén khởi động lại.'
      ] },
      { t: 'h3', x: 'Tụ điện' },
      { t: 'list', items: [
        'Tụ điện “chứa” năng lượng điện; đôi khi lắp khi cần công suất khởi động cao hơn hoặc nhu cầu làm lạnh rất lớn (tủ lớn, không khí nóng).',
        '<b>Tụ khởi động</b>: lắp ở đường nối tới cuộn khởi động; giúp máy nén dễ khởi động và giảm khả năng hỏng cuộn khởi động.',
        '<b>Tụ chạy</b>: lắp nối tiếp với cuộn khởi động; cho cuộn khởi động gánh bớt tải của cuộn chạy, giảm khả năng hỏng cuộn chạy.'
      ] },
      { t: 'h3', x: 'Đèn trong tủ' },
      { t: 'list', items: [
        'Đèn nhỏ trong tủ sinh nhiệt nên phải tắt trừ khi người dùng cần nhìn.',
        '<b>Công tắc cửa</b> (đóng/mở theo cửa): cửa đóng → tiếp điểm mở → đèn tắt; cửa mở → tiếp điểm đóng → đèn sáng.',
        'Mạch đèn <b>tách biệt</b> với mạch động cơ: đèn bật/tắt không phụ thuộc máy nén có chạy hay không.'
      ] }
    ] }
  ],
  summary: [
    'An toàn điện: rút phích, nối đất, xả tụ, thay dây cũ, đậy nắp, cầu chì đúng; làm việc khi cắm điện cần gỗ/thảm cao su và dụng cụ cách điện.',
    'Cuộn chạy luôn có dòng khi máy chạy; cuộn khởi động chỉ vài giây đầu.',
    'Rơ-le từ: dòng lớn qua cuộn rơ-le nâng pit-tông, đóng tiếp điểm cho cuộn khởi động, rồi mở khi đạt tốc độ. PTC: nguội điện trở thấp, nóng điện trở cao.',
    'Thermostat (+4 đến +8 °C vắc-xin) đóng/mở; bảo vệ động cơ nghỉ 5–10 phút; tụ khởi động/tụ chạy; mạch đèn tách biệt.'
  ],
  cards: [
    ['Việc đầu tiên trước khi sửa điện?', 'Rút phích cắm.'],
    ['Làm việc khi tủ đang cắm điện?', 'Đứng gỗ/thảm cao su; dụng cụ cách điện; giày đế cao su; không đứng nền ẩm.'],
    ['Dây nối đất nối vào đâu?', 'Chân đất phích cắm và bộ phận kim loại của máy nén/tủ.'],
    ['Cuộn chạy là gì?', 'Cuộn kéo động cơ, luôn có dòng khi máy nén chạy.'],
    ['Cuộn khởi động là gì?', 'Cuộn giúp khởi động, chỉ có dòng vài giây đầu.'],
    ['Rơ-le từ hoạt động?', 'Dòng qua cuộn rơ-le nâng pit-tông, đóng tiếp điểm cho cuộn khởi động; đạt tốc độ thì tiếp điểm mở.'],
    ['PTC là gì?', 'Điện trở nguội thấp, nóng cao; ngắt cuộn khởi động khi nóng.'],
    ['PTC cần gì trước khi khởi động lại?', 'Vài phút để nguội.'],
    ['Thermostat đóng/mở khi?', 'Đóng khi nóng (cần làm lạnh), mở khi đủ lạnh.'],
    ['Nhiệt độ vắc-xin?', '+4 °C đến +8 °C.'],
    ['Bảo vệ động cơ mở khi?', 'Dòng quá lớn hoặc máy nén quá nóng.'],
    ['Bảo vệ nguội lại sau?', '5 đến 10 phút.'],
    ['Tụ khởi động ở đâu?', 'Nối tiếp đường tới cuộn khởi động.'],
    ['Đèn trong tủ điều khiển bằng?', 'Công tắc cửa; mạch tách biệt với động cơ.'],
    ['Tủ PTC có tụ khởi động không?', 'Không thể lắp.']
  ],
  quiz: [
    { q: 'Cuộn nào có dòng chỉ vài giây đầu?', o: ['Cuộn chạy', 'Cuộn khởi động', 'Cả hai', 'Không cuộn nào'], a: 1, e: 'Sau đó bị ngắt.' },
    { q: 'Rơ-le từ đóng tiếp điểm nhờ:', o: ['Nhiệt', 'Từ trường nâng pit-tông', 'Áp suất', 'Tay'], a: 1, e: 'Dòng lớn qua cuộn rơ-le.' },
    { q: 'PTC nóng thì điện trở:', o: ['Thấp', 'Rất cao', 'Bằng 0', 'Không đổi'], a: 1, e: 'Ngắt cuộn khởi động.' },
    { q: 'Thermostat mở khi:', o: ['Tủ đủ lạnh', 'Tủ nóng', 'Cửa mở', 'Mất điện'], a: 0, e: 'Máy nén không chạy.' },
    { q: 'Đèn trong tủ sáng khi:', o: ['Máy nén chạy', 'Cửa mở', 'Thermostat đóng', 'Bảo vệ mở'], a: 1, e: 'Công tắc cửa.' },
    { q: 'Bảo vệ động cơ nguội lại cần:', o: ['1 phút', '5 đến 10 phút', '1 giờ', '1 ngày'], a: 1, e: 'Rồi máy tự khởi động lại.' },
    { q: 'Tụ chạy nối:', o: ['Song song cuộn chạy', 'Nối tiếp cuộn khởi động', 'Với thermostat', 'Với đèn'], a: 1, e: 'Giúp cuộn khởi động gánh tải.' },
    { q: 'Trước khi chạm tụ phải:', o: ['Xả tụ', 'Cắm điện', 'Nung nóng', 'Không cần'], a: 0, e: 'Tụ tích điện dù đã rút phích.' },
    { q: 'Làm việc khi cắm điện cần:', o: ['Đứng nền ẩm', 'Đứng gỗ/thảm cao su', 'Chân đất', 'Tay ướt'], a: 1, e: 'Cùng dụng cụ cách điện.' },
    { q: 'Mạch đèn so với mạch máy nén:', o: ['Cùng mạch', 'Tách biệt', 'Phụ thuộc thermostat', 'Phụ thuộc rơ-le'], a: 1, e: 'Đèn không phụ thuộc máy chạy hay không.' }
  ],
  match: [
    ['Run winding', 'Cuộn chạy'],
    ['Start winding', 'Cuộn khởi động'],
    ['Solenoid relay', 'Rơ-le từ'],
    ['PTC', 'Điện trở nhiệt dương'],
    ['Thermostat', 'Công tắc nhiệt độ'],
    ['Motor protector', 'Bảo vệ quá dòng/quá nhiệt'],
    ['Door switch', 'Công tắc cửa']
  ]
});
