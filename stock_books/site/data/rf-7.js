// Tủ lạnh nén (EPI) – Chương 7: Đo kiểm điện và phụ lục.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.refrig = BOOK_DATA.refrig || { chapters: [] };
BOOK_DATA.refrig.chapters.push({
  n: 7,
  title: 'Đo kiểm điện, ống chữ T và bảng đổi áp suất',
  intro: 'Mục 14 hướng dẫn thử từng linh kiện bằng <b>đèn thử (test lamp)</b> và đồng hồ <b>ohm</b>: <b>rơ-le từ</b>, <b>thiết bị khởi động PTC</b>, <b>bảo vệ động cơ</b>, <b>tụ điện</b>, và nhận biết ba chân <b>C – R – S</b> của động cơ máy nén. Cuối chương là Phụ lục 1 (ống chữ T) và bảng đổi đơn vị áp suất.',
  sections: [
    { icon: '🧰', title: 'Chuẩn bị đo kiểm', blocks: [
      { t: 'steps', items: [
        'Trước khi thử hoặc sửa, <b>xác định các linh kiện nào đang lắp</b> trên tủ.',
        '<b>Rút phích cắm</b>.',
        'Tháo nắp hộp đấu dây (thường giữ bằng vít hoặc kẹp; nếu kẹp chặt và phải dùng tua-vít thì cẩn thận không hỏng nắp).',
        'Xem các bộ phận bên trong; so với hình: có khối đấu dây hay không; rơ-le từ, PTC hay tụ.',
        'Biết chắc những gì đang lắp trước khi tháo.'
      ] },
      { t: 'p', x: 'Đèn thử có nguồn (powered test lamp) làm ở chương 2. <b>Luôn thử đèn trước khi dùng</b>: cắm vào ổ điện, chạm hai đầu dây trần vào nhau — đèn phải sáng; nếu không thì sửa đèn.' }
    ] },
    { icon: '🧲', title: 'Thử rơ-le từ (magnetic relay)', blocks: [
      { t: 'p', x: 'Tháo rơ-le: nếu có hộp đấu dây thì các kết nối có sơ đồ thông thường; nếu không, <b>vẽ lại vị trí từng dây</b> trên giấy trước khi tháo để chắc chắn lắp lại đúng. Giữ chặt rơ-le và kéo nó khỏi các chân của động cơ máy nén.' },
      { t: 'table', head: ['Phép thử', 'Tư thế rơ-le', 'Kết quả đúng', 'Nếu sai'], rows: [
        ['Đèn nối vào hai đầu <b>cuộn rơ-le</b>', 'Dựng đứng', '<b>Đèn sáng</b> (cuộn liền mạch)', 'Rơ-le hỏng'],
        ['Đèn nối vào hai đầu <b>tiếp điểm</b>', 'Dựng đứng', '<b>Đèn không sáng</b> (tiếp điểm mở)', 'Đèn sáng → rơ-le hỏng'],
        ['Đèn nối vào hai đầu tiếp điểm', '<b>Lật ngược</b>; lắc tới khi nghe pit-tông chuyển động', '<b>Đèn sáng</b> (tiếp điểm đóng)', 'Không sáng → rơ-le hỏng']
      ] },
      { t: 'tip', x: 'Cách sửa rơ-le hỏng nằm ở Phần C của bộ sổ tay.' },
      { t: 'widget', name: 'rf-relay-test', title: 'Thử rơ-le bằng đèn thử' }
    ] },
    { icon: '🔥', title: 'Thử thiết bị khởi động PTC', blocks: [
      { t: 'p', x: 'Nếu bộ phận gắn ngoài máy nén giống hình thì đó là PTC; bảo vệ động cơ đi kèm thường nằm trong vỏ máy nén. Tháo giống như rơ-le (vẽ lại kết nối, kéo ra khỏi chân động cơ). Máy nén có PTC không lắp được tụ khởi động.' },
      { t: 'steps', items: [
        'Tháo thiết bị khỏi máy nén.',
        'Nối các chân (như hình) vào phích cắm.',
        'Xoay thiết bị về vị trí trong hình rồi cắm vào ổ — <b>cẩn thận</b>.',
        'Lắp đèn thử vào ổ chân của máy nén như hình.',
        '<b>Thử đường tới cuộn chạy</b>: đèn phải <b>sáng ngay và giữ sáng</b>; không sáng → PTC hỏng.',
        '<b>Thử đường tới cuộn khởi động</b>: đèn phải sáng ngay nhưng <b>sau vài phút tự tắt</b> (đèn 100 W, nguồn 240 V: khoảng <b>3 phút</b>) — cho thấy PTC ngắt điện cuộn khởi động khi nóng. Không sáng, hoặc sáng mà không tắt → PTC hỏng.'
      ] },
      { t: 'widget', name: 'rf-ptc-test', title: 'Mô phỏng thử PTC' }
    ] },
    { icon: '🛡️', title: 'Thử bảo vệ động cơ', blocks: [
      { t: 'table', head: ['Loại', 'Cách thử', 'Kết quả'], rows: [
        ['<b>Bảo vệ ngoài</b> (lắp ngoài máy nén)', 'Tháo bảo vệ (nếu gắn với cụm rơ-le thì rút ra khỏi phía bên kia của rơ-le). Nối đèn thử vào hai đầu bảo vệ', '<b>Đèn sáng</b>; không sáng → hỏng. Nếu bảo vệ tốt thì lắp lại vào cụm rơ-le cẩn thận'],
        ['<b>Bảo vệ trong</b> (trong máy nén)', 'Nhận biết chân động cơ (C, R, S); bảo vệ nối bên trong ở chân <b>common (C)</b>. Thử lần lượt từng cặp chân bằng đèn thử', '<b>Đèn phải sáng cả ba lần</b>. Nếu chỉ sáng ở “run–start” mà không sáng ở “common–start” và “common–run” → bảo vệ trong hỏng']
      ] }
    ] },
    { icon: '🔋', title: 'Thử tụ điện', blocks: [
      { t: 'warn', x: '<b>Cẩn thận tối đa:</b> tụ “chứa” điện. Dù tủ đã rút phích, chạm vào tiếp điểm tụ vẫn có thể bị điện giật nặng.' },
      { t: 'steps', items: [
        'Trước khi tháo tụ: (a) rút phích tủ; (b) <b>đoản mạch</b> các tiếp điểm bằng một đèn thử đơn giản để xả điện cho an toàn; (c) xem bên ngoài — nếu <b>rò rỉ hoặc phồng</b> thì xử lý rất cẩn thận (đeo kính, che chắn xung quanh) vì có thể nổ.',
        '<b>Thử lần 1 (nhìn)</b>: tháo tụ và quan sát; nếu có triệu chứng hỏng như rò rỉ, phồng, méo (áp suất bên trong) thì thay tụ mới. Nếu trông tốt thì thử tiếp.',
        '<b>Thử lần 2 (ohm kế)</b>: chọn thang đo cao nhất và nối vào hai cực tụ. Kim lên trở kháng thấp rồi <b>trở về</b> trở kháng cao → tụ tốt. Nếu kim xuống thấp rồi <b>ở lại</b> đó, hoặc kim không nhúc nhích → tụ hỏng.'
      ] },
      { t: 'widget', name: 'rf-capacitor', title: 'Kim ohm kế khi thử tụ' }
    ] },
    { icon: '🔌', title: 'Nhận biết chân C – R – S của động cơ', blocks: [
      { t: 'list', items: [
        'Động cơ máy nén có ba chân: một nối <b>cuộn chạy (R)</b>, một nối <b>cuộn khởi động (S)</b>, một nối <b>cả hai cuộn — chung (common, C)</b>.',
        'Vị trí chân có thể khác nhau; nếu không ghi R, S, C thì xác định bằng ohm kế để thang thấp nhất (R × 1), đo điện trở từng cặp chân.'
      ] },
      { t: 'table', head: ['Cặp chân', 'Điện trở'], rows: [
        ['Common – Run', '<b>Thấp nhất</b>'],
        ['Common – Start', '<b>Trung bình</b>'],
        ['Start – Run', '<b>Cao nhất</b> (= tổng hai giá trị trên)']
      ] },
      { t: 'widget', name: 'rf-terminals', title: 'Nhận biết chân C – R – S từ ba phép đo' }
    ] },
    { icon: '🔀', title: 'Phụ lục 1: ống chữ T và bảng đổi đơn vị', blocks: [
      { t: 'p', x: '<b>Ống chữ T (TEE)</b> trên ống hút và ống đẩy cho phép kỹ thuật viên <b>tháo và dùng lại van chọc</b> thay vì để lại. Dùng ống chữ T đồng 1/4 inch OD chuẩn hoặc tự làm: khoảng 10 cm ống 1/4 inch hàn vào ống 3/8 inch dài ~12 cm; lắp van chọc lên ống đó và bịt đầu còn lại.' },
      { t: 'table', head: ['Bar', 'PSI', 'kg/cm²'], rows: [
        ['−1', '30 inch Hg', '−1'], ['−0,5', '15 inch Hg', '−0,5'], ['0', '0', '0'], ['0,5', '7', '0,5'], ['1', '14', '1'],
        ['1,5', '21 (áp thấp bình thường)', '1,5'], ['2', '28', '2'], ['2,5', '35', '2,5'], ['3', '43', '3'], ['3,5', '50', '3,5'], ['4', '58', '4'],
        ['5', '72', '5'], ['6', '87', '6'], ['7', '102', '7'], ['8', '116', '8'], ['9', '131', '9'], ['10', '140', '10'], ['15', '220', '15'], ['20', '292', '20'], ['25', '362', '25']
      ] },
      { t: 'tip', x: 'Bảng của sổ tay là “bảng đổi xấp xỉ”. Giá trị thực: 1 bar ≈ 14,5 PSI ≈ 1,02 kg/cm².' },
      { t: 'widget', name: 'rf-pressure-conv', title: 'Đổi đơn vị áp suất' }
    ] }
  ],
  summary: [
    'Trước hết rút phích, xác định linh kiện, tháo nắp hộp đấu dây; thử đèn trước khi dùng.',
    'Rơ-le từ: cuộn sáng, tiếp điểm mở không sáng (dựng đứng), tiếp điểm đóng sáng (lật ngược). PTC: đường chạy sáng liên tục, đường khởi động sáng rồi tắt sau ~3 phút.',
    'Bảo vệ ngoài: đèn sáng; bảo vệ trong: sáng cả ba cặp chân. Tụ: xả trước, nhìn rồi đo ohm — kim lên rồi trở về là tốt.',
    'C–R thấp nhất, C–S trung bình, S–R cao nhất (= tổng).'
  ],
  cards: [
    ['Thử đèn thử trước khi dùng thế nào?', 'Cắm điện, chạm hai đầu dây trần vào nhau — đèn phải sáng.'],
    ['Thử cuộn rơ-le: đèn?', 'Phải sáng.'],
    ['Thử tiếp điểm rơ-le dựng đứng?', 'Đèn không sáng (tiếp điểm mở).'],
    ['Thử tiếp điểm rơ-le lật ngược?', 'Đèn sáng sau khi lắc cho pit-tông chuyển động.'],
    ['Rơ-le hỏng khi?', 'Cuộn không sáng, hoặc tiếp điểm mở mà đèn sáng, hoặc tiếp điểm đóng mà đèn không sáng.'],
    ['Thử PTC đường chạy?', 'Đèn sáng ngay và sáng liên tục.'],
    ['Thử PTC đường khởi động?', 'Sáng ngay rồi tắt sau vài phút (~3 phút với đèn 100 W/240 V).'],
    ['Máy nén có PTC lắp được tụ khởi động?', 'Không.'],
    ['Thử bảo vệ ngoài?', 'Đèn thử hai đầu — phải sáng.'],
    ['Bảo vệ trong nối ở chân nào?', 'Common (C).'],
    ['Bảo vệ trong tốt khi?', 'Đèn sáng cho cả ba cặp chân.'],
    ['Trước khi chạm tụ?', 'Rút phích, đoản mạch cực bằng đèn thử để xả.'],
    ['Tụ tốt khi?', 'Kim ohm kế lên thấp rồi trở về cao.'],
    ['Điện trở cao nhất giữa cặp?', 'Start – Run (tổng hai còn lại).'],
    ['Điện trở thấp nhất giữa cặp?', 'Common – Run.']
  ],
  quiz: [
    { q: 'Thử cuộn rơ-le đèn phải:', o: ['Sáng', 'Không sáng', 'Nhấp nháy', 'Tắt dần'], a: 0, e: 'Cuộn phải liền mạch.' },
    { q: 'Rơ-le dựng đứng, đèn nối tiếp điểm sáng nghĩa là:', o: ['Rơ-le tốt', 'Rơ-le hỏng', 'Cuộn tốt', 'Cần lật'], a: 1, e: 'Tiếp điểm phải mở.' },
    { q: 'PTC tốt ở đường khởi động:', o: ['Sáng mãi', 'Sáng rồi tắt sau vài phút', 'Không sáng', 'Nhấp nháy'], a: 1, e: 'Khoảng 3 phút.' },
    { q: 'Tụ điện trước khi tháo cần:', o: ['Rút phích và xả bằng đèn thử', 'Chỉ rút phích', 'Cắm điện', 'Nung nóng'], a: 0, e: 'Tụ tích điện.' },
    { q: 'Ohm kế thử tụ, tụ tốt khi kim:', o: ['Lên thấp rồi trở về cao', 'Ở lại thấp', 'Không động', 'Lên cao mãi'], a: 0, e: 'Hai trường hợp kia là hỏng.' },
    { q: 'Tụ phồng hoặc rò cần:', o: ['Xử lý cẩn thận, đeo kính, che chắn', 'Bỏ qua', 'Đo luôn', 'Cắm điện'], a: 0, e: 'Có thể nổ.' },
    { q: 'Cặp chân điện trở thấp nhất:', o: ['C–R', 'C–S', 'S–R', 'Cả ba bằng nhau'], a: 0, e: 'Common–Run.' },
    { q: 'Cặp chân cao nhất:', o: ['C–R', 'C–S', 'S–R', 'Không xác định'], a: 2, e: 'Bằng tổng hai cặp còn lại.' },
    { q: 'Bảo vệ trong tốt khi:', o: ['Đèn sáng cả ba cặp', 'Chỉ sáng ở R–S', 'Không sáng', 'Chỉ sáng C–S'], a: 0, e: 'Nối ở common.' },
    { q: '1 bar xấp xỉ:', o: ['10 PSI', '14,5 PSI', '30 PSI', '100 PSI'], a: 1, e: 'Bảng sổ tay làm tròn 14.' }
  ],
  match: [
    ['Test lamp', 'Thử thông mạch'],
    ['Ohmmeter', 'Đo điện trở'],
    ['Common (C)', 'Chân nối cả hai cuộn'],
    ['Capacitor shorting', 'Xả tụ trước khi chạm'],
    ['TEE tube', 'Cho phép dùng lại van chọc'],
    ['Bar → PSI', '1 bar ≈ 14,5 PSI'],
    ['PTC test', 'Sáng rồi tắt trên đường khởi động']
  ]
});
