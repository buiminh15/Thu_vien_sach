// Tủ lạnh nén (EPI) – Chương 4: Chu trình làm lạnh và đồng hồ phân tích.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.refrig = BOOK_DATA.refrig || { chapters: [] };
BOOK_DATA.refrig.chapters.push({
  n: 4,
  title: 'Chu trình làm lạnh và đồng hồ phân tích (system analyser)',
  intro: 'Hệ thống làm lạnh là một <b>mạch ống kín</b> chứa môi chất được bơm tuần hoàn để <b>chuyển nhiệt từ bên trong tủ ra ngoài</b>. Chương này theo dõi môi chất qua từng bộ phận — máy nén, dàn ngưng, bộ lọc hút ẩm, ống mao dẫn, dàn bay hơi, ống hút — rồi học cách dùng <b>đồng hồ phân tích (system analyser)</b> để đo áp suất ở hai phía.',
  sections: [
    { icon: '♻️', title: 'Hệ thống làm lạnh hoạt động thế nào', blocks: [
      { t: 'p', x: 'Tủ lạnh và tủ đông dùng môi chất thường gọi là R12. Hãy theo dõi môi chất đi hết vòng trên sơ đồ bên dưới (bấm “Bước tiếp” hoặc bật “Chạy tự động”). Bộ phận trong sơ đồ: <b>thermostat</b>, <b>evaporator</b> (dàn bay hơi), <b>capillary</b> (ống mao dẫn), <b>condenser</b> (dàn ngưng), <b>drier/filter</b> (bộ lọc hút ẩm), <b>suction pipe</b> (ống hút), <b>delivery pipe</b> (ống đẩy), <b>starting relay</b>, <b>compressor</b>.' },
      { t: 'widget', name: 'rf-cycle', title: 'Chu trình làm lạnh (sơ đồ chi tiết, có hoạt hình)' },
      { t: 'steps', items: [
        '<b>Máy nén (compressor)</b> bơm khí môi chất qua <b>ống đẩy</b> lên phía trên tủ vào dàn ngưng. Ống đẩy nóng khi tủ chạy — như bơm xe đạp nóng ở đầu khi bơm lốp vì không khí bị nén.',
        '<b>Dàn ngưng (condenser)</b> làm nguội khí nóng: ở cuối dàn khí nóng đã <b>ngưng tụ thành chất lỏng mát</b>. Khi tủ chạy đúng, dàn ngưng <b>nóng ở trên, mát hơn ở dưới</b>.',
        'Chất lỏng được lọc qua <b>bộ lọc hút ẩm (filter drier)</b> rồi vào <b>ống mao dẫn</b>.',
        '<b>Ống mao dẫn dài và mảnh</b>, nên chất lỏng <b>phun</b> vào dàn bay hơi. Chất lỏng phun ra làm dàn bay hơi <b>lạnh</b> — giống như xả nhanh không khí ở van lốp xe đạp thấy lạnh vì không khí giãn nở nhanh.',
        'Môi chất giờ đã <b>bay hơi trở lại thành khí</b> và được hút về máy nén qua <b>ống hút</b>.',
        'Ở một số tủ ống mao dẫn <b>chạy bên trong ống hút</b>; ở loại khác <b>quấn ngoài ống hút</b> — để khí lạnh ra khỏi dàn bay hơi làm mát chất lỏng đang vào dàn bay hơi.',
        'Chu trình bắt đầu lại. Nhiệt lấy khỏi bên trong tủ được thải ra không khí qua dàn ngưng.'
      ] },
      { t: 'key', x: 'Môi chất đổi trạng thái theo vòng: <b>khí áp cao, nóng</b> (máy nén → ống đẩy) → <b>lỏng áp cao</b> (dàn ngưng → lọc) → <b>phun, áp thấp, lạnh</b> (ống mao dẫn → dàn bay hơi) → <b>khí áp thấp</b> (ống hút → máy nén). Phía áp cao đo bằng đồng hồ đỏ, phía áp thấp bằng đồng hồ xanh (xem mục sau).' },
      { t: 'h3', x: 'Làm mát dầu máy nén (oil cooling)' },
      { t: 'p', x: 'Một số tủ có <b>hai dàn ngưng</b>: dàn thứ nhất (first condenser) làm nguội môi chất như trên; chất lỏng đã nguội đi <b>trở vào máy nén để làm mát dầu</b> (như két nước ô tô); sau khi nhận nhiệt từ dầu phải làm mát lần nữa nên qua <b>dàn ngưng thứ hai (second condenser)</b>, rồi tới bộ lọc hút ẩm. Phần còn lại của mạch giống mô tả ở trên.' },
      { t: 'widget', name: 'rf-cycle-quiz', title: 'Trạng thái môi chất tại mỗi điểm' }
    ] },
    { icon: '🧰', title: 'Đồng hồ phân tích (system analyser)', blocks: [
      { t: 'p', x: 'Gồm: <b>manifold</b> (thân có hai van tay hai đầu), <b>móc treo</b> để xem đồng hồ khi làm việc, <b>đồng hồ áp thấp màu xanh (blue)</b> — dải từ chân không −1 đến 9 bar — và <b>đồng hồ áp cao màu đỏ (red)</b>, <b>ba ống mềm</b>: xanh (áp thấp), đỏ (áp cao), vàng hoặc trắng (nạp/giữa), cùng giá đỡ ống.' },
      { t: 'steps', items: [
        'Vặn giá đỡ ống và móc treo vào mặt sau manifold; móc phải xoay được; siết đai ốc hai đầu manifold.',
        'Vặn chặt đồng hồ xanh vào cổng bên trái, đồng hồ đỏ vào cổng bên phải, hướng mặt cùng chiều. Không dùng dụng cụ siết ống mềm — “vặn tay” là kín.',
        'Vặn ống xanh vào ren bên trái, ống vàng/trắng vào giữa, ống đỏ vào ren bên phải. Luôn bịt đầu ống khi không dùng.',
        'Thử rò dưới mỗi đồng hồ: đóng hết hai van; nạp chút khí; thử rò dưới đồng hồ xanh rồi đồng hồ đỏ; nếu rò thì bịt bằng băng keo ren rồi thử lại.',
        'Mở nắp mặt đồng hồ, kiểm tra kim chỉ đúng số 0 (chỉnh bằng vít điều chỉnh).'
      ] },
      { t: 'h3', x: 'Cài đặt các van trên manifold' },
      { t: 'table', head: ['Tình huống', 'Vị trí van', 'Dòng môi chất'], rows: [
        ['<b>Chỉ đo áp suất</b>', 'Cả hai van <b>đóng hết</b> (vặn cùng chiều kim đồng hồ)', 'Chỉ tới đồng hồ, không ra cổng giữa. Ống hút → đồng hồ xanh; ống đẩy → đồng hồ đỏ'],
        ['<b>Nạp gas</b>', 'Van xanh <b>mở</b>, van đỏ <b>đóng</b>', 'R12 từ bình qua cổng giữa vào ống hút. Vẫn đo được áp hút và áp đẩy khi nạp'],
        ['<b>Hút chân không</b>', 'Cả hai van <b>mở hết</b> (ngược chiều kim đồng hồ)', 'Cổng giữa nối bơm chân không; hai cổng còn lại nối hệ thống']
      ] },
      { t: 'widget', name: 'rf-manifold', title: 'Mô phỏng manifold: chỉnh van, xem dòng chảy' }
    ] },
    { icon: '📏', title: 'Nối đồng hồ để đo áp suất', blocks: [
      { t: 'steps', items: [
        'Gắn van chọc (line tap valve) vào ống đẩy máy nén; ống xử lý nối bằng khớp nối nhanh hoặc van chọc. <b>Chưa mở</b> van nào.',
        'Nối ống mềm: ống xử lý → cổng xanh; ống đẩy → cổng đỏ. Vặn tay là đủ.',
        '<b>Đuổi không khí khỏi ống mềm</b>: nối bình dịch vụ R12 vào cổng giữa, mở hết van trên manifold, nới (không tháo) mối nối ống ở van chọc/ống xử lý, mở nhẹ van bình để R12 thoát đẩy không khí ra, đóng van bình, siết lại, đóng hết van manifold, tháo bình.',
        'Mở hết van điều khiển trên van chọc và đầu khớp nối nhanh (nếu dùng). Đọc <b>áp thấp</b> trên đồng hồ xanh, <b>áp cao</b> trên đồng hồ đỏ. Thử rò ở đồng hồ và mối nối ống.',
        'Xong việc: đóng van điều khiển, lắp nắp bịt; nếu dùng khớp nối nhanh thì để nguyên trên ống xử lý với van đóng hết. Tháo đồng hồ và ống, <b>bịt đầu ống</b> để bụi và ẩm không vào.'
      ] },
      { t: 'tip', x: 'Phụ lục 1 của sổ tay nói về việc dùng ống chữ T (TEE) trong hệ thống làm lạnh khi nối đồng hồ.' }
    ] }
  ],
  summary: [
    'Vòng môi chất: máy nén → ống đẩy → dàn ngưng → lọc hút ẩm → mao dẫn (phun) → dàn bay hơi (lạnh) → ống hút → máy nén.',
    'Phía áp cao (đỏ): máy nén → mao dẫn; phía áp thấp (xanh): mao dẫn → dàn bay hơi → ống hút.',
    'Mao dẫn có thể chạy trong hoặc quấn ngoài ống hút để trao đổi nhiệt; một số tủ có hai dàn ngưng làm mát dầu.',
    'Manifold: đo = đóng hai van; nạp = mở van xanh; hút chân không = mở cả hai.'
  ],
  cards: [
    ['Mục đích của môi chất?', 'Chuyển nhiệt từ bên trong tủ ra bên ngoài.'],
    ['Máy nén làm gì?', 'Bơm khí môi chất qua ống đẩy lên dàn ngưng.'],
    ['Dàn ngưng làm gì?', 'Làm nguội khí nóng, ngưng tụ thành lỏng; nóng ở trên, mát hơn ở dưới khi chạy đúng.'],
    ['Bộ lọc hút ẩm (drier)?', 'Lọc chất lỏng (và hút ẩm) trước khi vào mao dẫn.'],
    ['Vì sao ống mao dẫn dài và mảnh?', 'Để chất lỏng phun ra dàn bay hơi, giãn nở làm lạnh.'],
    ['Dàn bay hơi?', 'Nơi chất lỏng bay hơi thành khí và lấy nhiệt từ bên trong tủ.'],
    ['Ống hút (suction)?', 'Đưa khí áp thấp từ dàn bay hơi về máy nén.'],
    ['Vì sao mao dẫn tiếp xúc ống hút?', 'Khí lạnh làm mát chất lỏng đang vào dàn bay hơi.'],
    ['Hai dàn ngưng để?', 'Một làm mát môi chất, một làm mát lại sau khi làm mát dầu máy nén.'],
    ['Màu đồng hồ áp thấp / áp cao?', 'Xanh / đỏ.'],
    ['Ống mềm màu?', 'Xanh (thấp), đỏ (cao), vàng/trắng (giữa — nạp).'],
    ['Manifold khi đo áp?', 'Đóng hết hai van.'],
    ['Manifold khi nạp?', 'Van xanh mở, van đỏ đóng.'],
    ['Manifold khi hút chân không?', 'Mở hết hai van.'],
    ['Trước khi dùng đồng hồ phải kiểm?', 'Kim chỉ đúng 0; không rò dưới mỗi đồng hồ.']
  ],
  quiz: [
    { q: 'Sau máy nén, môi chất là:', o: ['Lỏng lạnh', 'Khí áp cao, nóng', 'Khí lạnh', 'Lỏng nóng'], a: 1, e: 'Đi qua ống đẩy.' },
    { q: 'Cuối dàn ngưng, môi chất là:', o: ['Khí nóng', 'Lỏng mát', 'Khí lạnh', 'Hơi'], a: 1, e: 'Đã ngưng tụ.' },
    { q: 'Dàn bay hơi lạnh vì:', o: ['Chất lỏng phun giãn nở và bay hơi', 'Quạt thổi', 'Có đá', 'Dầu'], a: 0, e: 'Như xả khí lốp xe.' },
    { q: 'Dàn ngưng khi chạy đúng:', o: ['Nguội hoàn toàn', 'Nóng ở trên, mát hơn ở dưới', 'Lạnh ở trên', 'Đều nóng'], a: 1, e: 'Theo sổ tay.' },
    { q: 'Đồng hồ áp thấp có màu:', o: ['Đỏ', 'Xanh', 'Vàng', 'Trắng'], a: 1, e: 'Đồng hồ đỏ là áp cao.' },
    { q: 'Ống mềm giữa (nạp) màu:', o: ['Xanh', 'Đỏ', 'Vàng hoặc trắng', 'Đen'], a: 2, e: 'Nối bình/bơm.' },
    { q: 'Để chỉ đo áp suất:', o: ['Mở hết hai van', 'Đóng hết hai van', 'Mở van đỏ', 'Mở van xanh'], a: 1, e: 'Môi chất chỉ tới đồng hồ.' },
    { q: 'Khi hút chân không:', o: ['Đóng hết van', 'Mở hết hai van', 'Mở van đỏ', 'Chỉ van xanh'], a: 1, e: 'Cổng giữa nối bơm.' },
    { q: 'Siết ống mềm vào đồng hồ bằng:', o: ['Cờ-lê', 'Kìm', 'Tay', 'Mỏ lết'], a: 2, e: 'Vặn tay là kín.' },
    { q: 'Đuổi không khí khỏi ống mềm bằng:', o: ['Thổi', 'Cho R12 thoát nhẹ qua mối nới lỏng', 'Hút bằng miệng', 'Đổ nước'], a: 1, e: 'Rồi siết lại.' }
  ],
  match: [
    ['Compressor', 'Bơm môi chất'],
    ['Condenser', 'Ngưng tụ khí thành lỏng'],
    ['Capillary', 'Ống mảnh phun vào dàn bay hơi'],
    ['Evaporator', 'Dàn lạnh'],
    ['Drier/filter', 'Lọc và hút ẩm'],
    ['Suction pipe', 'Ống hút về máy nén'],
    ['Manifold', 'Thân phân phối của đồng hồ phân tích']
  ]
});
