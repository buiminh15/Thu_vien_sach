window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 5,
  title: 'Động cơ, thiết bị điện và tự động của tủ lạnh',
  intro: 'Động cơ một pha của blốc, rơle khởi động kiểu dòng điện, rơle bảo vệ, thermostat, hệ thống xả băng; cách xác định đầu dây C–S–R và đọc sơ đồ điện của tủ lạnh.',
  sections: [
    { icon: '🔌', title: 'Đại cương về hệ thống điện tủ lạnh', blocks: [
      { t: 'p', x: 'Tủ lạnh dùng điện 220 V (Mỹ 110 V, Nhật 100 V). Mạch điện chia hai phần: phần đi nổi bên ngoài (động cơ máy nén, rơle khởi động, rơle bảo vệ) và phần đi ngầm bên trong tủ (rơle nhiệt độ, đèn chiếu sáng, hệ thống xả băng). Sơ đồ điện thường in dán ở nắp sau của tủ — giữ gìn cẩn thận khi sửa.' },
      { t: 'key', x: 'Sơ đồ đơn giản nhất: phích cắm → rơle nhiệt độ (thermostat) → rơle bảo vệ → cuộn làm việc R của động cơ; cuộn khởi động S được cấp điện qua tiếp điểm K của rơle khởi động (nối tiếp với cuộn R). Đèn tủ + công tắc cửa mắc song song với động cơ.' }
    ] },
    { icon: '🔧', title: 'Động cơ tủ lạnh', blocks: [
      { t: 'p', x: 'Động cơ một pha có cuộn khởi động, dùng rơle khởi động kiểu dòng điện. Công suất 1/20, 1/12, 1/10, 1/8, 1/6, 1/5, 1/4, 1/3 mã lực tương ứng 40, 60, 75, 92, 120, 150, 190, 250 và 440 W. Ba cọc tiếp điện: <b>C</b> (Common – chung), <b>R</b> (Run – cuộn chạy), <b>S</b> (Start – cuộn khởi động).' },
      { t: 'widget', name: 'dl-csr', title: 'Xác định đầu dây C – S – R bằng ôm kế' },
      { t: 'h3', x: 'Ba phương pháp xác định C, S, R' },
      { t: 'table', head: ['Phương pháp', 'Cách làm', 'Độ chính xác'], rows: [
        ['Đo điện trở (tốt nhất)', 'R<sub>R</sub> < R<sub>S</sub>. Đo ba cặp: C–R nhỏ nhất, C–S trung bình, S–R lớn nhất (= R<sub>R</sub> + R<sub>S</sub>). Tìm cặp lớn nhất, cọc còn lại là C; từ C, cọc điện trở nhỏ nhất là R; cọc còn lại là S', 'Chính xác, an toàn'],
        ['Đo cường độ dòng điện', 'Dùng nguồn 220/110 V xoay chiều hoặc 12/6 V một chiều với ampe kế. Dòng tỉ lệ nghịch với điện trở: C–R lớn nhất, C–S trung bình, R–S nhỏ nhất. Tìm hai cọc dòng nhỏ nhất → cọc còn lại là C', 'Kém chính xác hơn (dòng còn phụ thuộc điện cảm)'],
        ['Dùng đèn thử', 'Giống đo dòng nhưng mắc bóng đèn thay ampe kế, xem độ sáng: hai cọc sáng yếu nhất → cọc còn lại là C; từ C, cọc cho đèn sáng hơn là R, tối hơn là S', 'Gần đúng, dễ làm']
      ] },
      { t: 'tip', x: 'Luôn đánh dấu lại ba cọc sau khi xác định.' }
    ] },
    { icon: '🧲', title: 'Rơle khởi động kiểu dòng điện', blocks: [
      { t: 'p', x: 'Rơle có một cuộn dây nối tiếp với cuộn làm việc của động cơ (cỡ dây bằng cỡ dây cuộn làm việc), trong có lõi thép lên xuống mang tiếp điểm động. Khi có dòng đủ lớn, lõi thép bị hút lên, đóng tiếp điểm K cho cuộn khởi động S; khi dòng giảm, lực điện từ không giữ nổi lõi thép, lõi rơi xuống, ngắt tiếp điểm K — lúc này rôto đạt khoảng <b>75% tốc độ định mức</b>.' },
      { t: 'warn', x: 'Chỉ dùng cho tủ lạnh có động cơ dưới 3/4 mã lực; không dùng cho máy điều hòa không khí. Hai loại rơle không được dùng lẫn.' },
      { t: 'h3', x: 'Đặc tính dòng khởi động (ví dụ động cơ 150 W, 220 V, 50 Hz)' },
      { t: 'table', head: ['Điểm', 'Dòng', 'Ý nghĩa'], rows: [
        ['A', '5 A', 'Dòng ngắn mạch cuộn làm việc; lõi bị hút, tiếp điểm K đóng; cuộn khởi động có điện'],
        ['B', '9,2 A', 'Dòng ngắn mạch cả hai cuộn (LRA – locked rotor amperes); rôto bắt đầu quay'],
        ['C', '2,5 A', 'Rôto đạt 75% tốc độ; tiếp điểm K ngắt'],
        ['D', '1,3 A', 'Dòng làm việc đầy tải (FLA – full load amperes)']
      ] },
      { t: 'widget', name: 'dl-relay', title: 'Khởi động động cơ tủ lạnh: dòng điện – rơle – tốc độ' },
      { t: 'p', x: 'Thời gian khởi động khoảng 1 giây. Rơle thường kết hợp với rơle bảo vệ trong cùng một vỏ gọi là <b>rơle khởi động bảo vệ</b>, cắm trực tiếp vào ba cọc tiếp điện của blốc (kiểu hộp dài Kelvinator, Copeland...).' },
      { t: 'h3', x: 'Hư hỏng của rơle khởi động' },
      { t: 'list', items: [
        'Tuổi thọ thiết kế ≥ 600 000 lần đóng ngắt, nhưng ở Việt Nam (nóng ẩm, điện áp bất ổn) đây là bộ phận dễ hỏng nhất, thường dẫn tới cháy blốc.',
        'Tiếp điểm bị méo, cháy sém, rỗ; lõi thép kẹt: rơle không đóng được cuộn khởi động → động cơ không khởi động, rơle bảo vệ tác động liên tục.',
        'Lắp sai tư thế (loại dùng trọng lực của lõi sắt) cũng không đóng được tiếp điểm.',
        'Cuộn dây đứt hoặc cháy: động cơ không làm việc.'
      ] },
      { t: 'warn', x: 'Phải thay rơle đúng đặc tính dòng của blốc. Rơle có dòng đóng quá lớn không đóng được tiếp điểm khởi động; rơle có dòng đóng quá nhỏ thì đóng được nhưng không ngắt được tiếp điểm (dòng vẫn còn quá lớn).' },
      { t: 'tip', x: 'Cách xác định hỏng: thay rơle tốt khác rồi khởi động thử. Không có rơle khác thì khởi động blốc bằng tay, dùng ampe kìm đo dòng; nếu động cơ chạy bình thường thì rơle hỏng.' }
    ] },
    { icon: '🛡️', title: 'Rơle bảo vệ quá tải', blocks: [
      { t: 'p', x: 'Còn gọi là rơle nhiệt hay thecmic: tự động ngắt mạch bảo vệ động cơ khi quá tải. Nhiệt độ cuộn dây không được vượt khoảng <b>120 °C</b>, vượt quá thì lớp sơn cách điện (sơn emay) cháy, các vòng dây chập và động cơ cháy.' },
      { t: 'table', head: ['Phương pháp bảo vệ', 'Đặc điểm'], rows: [
        ['1. Tiếp điểm thanh lưỡng kim hoặc thermistor gắn trực tiếp lên cuộn dây', 'Tốt nhất nhưng đặt trong blốc nên khó bảo dưỡng sửa chữa'],
        ['2. Tín hiệu dòng quá tải kết hợp nhiệt độ vỏ blốc', 'Dùng cho tủ lạnh và điều hòa; nằm ngoài blốc, dễ tháo bảo dưỡng'],
        ['3. Chỉ dùng dòng điện quá tải', 'Kém hiệu quả hơn']
      ] },
      { t: 'p', x: 'Cấu tạo: dây điện trở nối tiếp mạch động cơ, bên cạnh có thanh lưỡng kim mang tiếp điểm. Bình thường nhiệt ở dây điện trở không đủ làm cong thanh lưỡng kim nên tiếp điểm đóng. Khi quá tải hoặc không khởi động được, dòng lớn làm thanh lưỡng kim nóng cong, mở tiếp điểm, ngắt điện cho động cơ. Sau vài phút thanh nguội, đóng mạch trở lại.' },
      { t: 'widget', name: 'dl-overload', title: 'Rơle bảo vệ: dòng quá tải làm thanh lưỡng kim cong' },
      { t: 'h3', x: 'Chẩn đoán khi rơle bảo vệ tác động liên tục' },
      { t: 'p', x: 'Triệu chứng: nghe tiếng "tách", máy ngừng; vài phút sau rơle nguội, máy chạy lại rồi lại ngắt. Phải ngắt điện khi kiểm tra. Đo dòng khởi động và dòng làm việc: nếu bình thường thì rơle hỏng (cháy tiếp điểm, thanh lưỡng kim già hoặc nhũn → thay mới cùng đặc tính). Nếu dòng lớn hơn bình thường thì rơle làm việc đúng, hãy tìm nguyên nhân:' },
      { t: 'list', items: [
        'Lốc và dàn ngưng quá nóng; điện áp quá thấp hoặc quá cao.',
        'Rơle khởi động đóng rồi không mở (cả hai cuộn có điện).',
        'Cuộn dây khởi động hoặc làm việc bị chập vòng.',
        'Động cơ bị sát cốt, máy nén thiếu dầu bôi trơn.',
        'Nạp quá nhiều ga; cân cáp ống mao sai.'
      ] }
    ] },
    { icon: '🌡️', title: 'Rơle nhiệt độ (thermostat)', blocks: [
      { t: 'p', x: 'Điều chỉnh và khống chế nhiệt độ trong buồng lạnh: đủ lạnh thì ngắt máy nén, thiếu lạnh thì đóng lại. Ví dụ nhiệt độ cài đặt −10 °C, vi sai ±3 °C: ngắt ở −13 °C (đủ lạnh), đóng ở −7 °C (thiếu lạnh) — vi sai 6 K, máy chỉ đóng ngắt 1 lần trong chu kỳ này. Nếu yêu cầu vi sai nhỏ (±1 °C) thì số lần đóng ngắt tăng 4 lần, tuổi thọ rơle, động cơ và máy nén giảm tương ứng.' },
      { t: 'widget', name: 'dl-thermo', title: 'Thermostat: nhiệt độ buồng lạnh dao động theo vi sai' },
      { t: 'p', x: 'Cấu tạo: bầu cảm nhiệt chứa chất lỏng bay hơi nối với hộp xếp (ống thổi). Nhiệt độ đổi → áp suất trong bầu đổi → hộp xếp co giãn → qua cơ cấu đòn bẩy và khớp lật (hoặc nam châm vĩnh cửu) đóng ngắt dứt khoát, không gây tia lửa. Núm vặn chỉnh lò xo để đổi nhiệt độ đặt.' },
      { t: 'list', items: [
        'Đầu cảm nhiệt gắn lên thành dàn bay hơi nên tác động theo nhiệt độ dàn chứ không phải nhiệt độ buồng; khoảng chỉnh MIN (ít lạnh) – MAX (lạnh nhất), ví dụ APT-2: −7 đến −18 °C, vi sai 6–7 °C (vị trí 5: ngắt −12 °C, đóng −5 °C).',
        'Rơle nhiệt độ hai chức năng (RANKO, Mỹ) có hai đầu cảm: một điều chỉnh nhiệt độ buồng lạnh, một khống chế kết thúc xả băng khi dàn đạt 7–10 °C.',
        'Để giảm chu kỳ làm việc: lót tấm nhựa giữa đầu cảm và thanh dàn, hoặc luồn đầu cảm trong ống nhựa dày 1–2 mm.'
      ] },
      { t: 'h3', x: 'Hư hỏng của thermostat' },
      { t: 'list', items: [
        'Ống mao dẫn và đầu cảm bị xì → mất môi chất cảm nhiệt, hộp xếp xẹp, tiếp điểm luôn đóng (máy chạy mãi).',
        'Đầu cảm gắn sai vị trí, lỏng lẻo → độ lạnh trong tủ lệch (có thể xuống quá lạnh).',
        'Vít điều chỉnh hỏng: chuyển xưởng chuyên môn.',
        'Mất tiếp điểm: dính (luôn đóng), cháy rỗ (luôn mở hoặc chập chờn). Chạm vỏ do ẩm, gỉ: tháo, lau sạch (nhất là phía trong tiếp điểm), không được thì thay mới.'
      ] }
    ] },
    { icon: '🧊', title: 'Hệ thống xả băng', blocks: [
      { t: 'p', x: 'Lớp băng tuyết bám dàn bay hơi là lớp trở nhiệt: làm tăng thời gian làm lạnh và điện năng tiêu thụ. Xả băng cưỡng bức tránh phải dùng dao cạy (gây thủng dàn nhôm).' },
      { t: 'table', head: ['Kiểu', 'Cách làm', 'Máy nén'], rows: [
        ['Thủ công', 'Dọn thực phẩm, ngắt điện, mở cửa chờ băng tan', '—'],
        ['Đồng hồ ngắt điện (Mỹ)', 'Ngắt điện khoảng 2 giờ mỗi ngày, thường 0–2 h sáng', 'Ngừng'],
        ['Bán tự động – điện trở', 'Bấm nút xả băng; điện trở xả băng gắn dàn nóng lên; đạt ~8 °C thì rơle nhiệt độ xả băng ngắt điện trở, tủ chạy lại', 'Ngừng'],
        ['Bán tự động – hơi nóng', 'Bấm nút; van điện từ mở, hơi nóng từ đầu đẩy blốc đi thẳng vào dàn bay hơi; đạt 7–10 °C thì van đóng', 'Vẫn chạy'],
        ['Tự động', 'Đồng hồ xả băng (động cơ nhỏ quay 1 vòng/24 h, có vấu bấm) tự bấm nút 1, 2 hoặc 3 lần/ngày', 'Tùy loại']
      ] },
      { t: 'key', x: 'Xả băng bằng điện trở: máy nén ngừng. Xả băng bằng hơi nóng: máy nén vẫn chạy, hơi nóng không qua dàn ngưng và ống mao mà vào thẳng dàn bay hơi.' },
      { t: 'p', x: 'Nước xả băng chảy vào khay chứa phía trên blốc và bốc hơi nhờ sức nóng của blốc (có tủ thêm đoạn dàn ngưng sơ bộ ở đáy khay). Điện trở xả băng công suất vài trăm W, uốn theo rãnh dàn để làm tan đều, không gây ứng suất. Tủ nhiệt độ thấp còn có điện trở nằm trong khay nước để phá băng.' },
      { t: 'warn', x: 'Đừng nhầm hệ thống xả băng với tủ lạnh hai nhiệt độ: ở tủ hai nhiệt độ, van điện từ dùng để khống chế nhiệt độ hộp lạnh (khi van đóng, môi chất đi qua thêm đoạn ống tiết lưu phụ nên dàn ngăn đông lạnh sâu hơn).' },
      { t: 'p', x: 'Van điện từ: cuộn dây trên thân van, lõi sắt gắn kim van; không có dòng thì nhờ trọng lượng và lò xo kim van ép chặt đế van; có dòng thì lõi sắt bị hút lên, van mở. Tủ No-Frost còn có điện trở sưởi cửa gió, quạt dàn lạnh (tắt khi mở cửa), điện trở xả đá dàn và khay.' },
      { t: 'widget', name: 'dl-defrost', title: 'Xả băng bằng điện trở và bằng hơi nóng: so sánh đường đi của ga' }
    ] },
    { icon: '📈', title: 'Chạy thử động cơ blốc và dòng làm việc', blocks: [
      { t: 'p', x: 'Sau khi xác định động cơ tốt (thông mạch, cách điện tốt, không chập vòng) và đã lắp rơle khởi động đúng, chạy thử để: đo dòng khởi động LRA và dòng làm việc FLA so với định mức; theo dõi chạy ổn định ít nhất 30 phút.' },
      { t: 'key', x: 'I ≈ N / (U·cosφ), cosφ = 0,70–0,80. Ví dụ: 120 W, 220 V, cosφ ≈ 0,75 → I ≈ 0,78 A.' },
      { t: 'p', x: 'Dòng làm việc không cố định mà tăng khi nhiệt độ bay hơi cao và nhiệt độ ngưng tụ cao. Ví dụ bảng dòng của một blốc 220 V, 50 Hz: nhiệt độ ngưng 30 °C và bay hơi −25 °C → 0,52 A; ngưng 40 °C, bay hơi −10 °C → 0,71 A; ngưng 50 °C, bay hơi 0 °C → khoảng 0,96 A; ngưng 63 °C, bay hơi 10 °C → 1,11 A.' },
      { t: 'warn', x: 'Bỏ nhiều thực phẩm nóng vào tủ làm nhiệt độ bay hơi tăng cao → quá tải → rơle bảo vệ tác động. Nếu tác động nhiều lần mà tủ chưa trở về chế độ thiết kế có thể dẫn đến cháy blốc.' },
      { t: 'widget', name: 'dl-fla', title: 'Tính dòng làm việc của blốc theo công suất và nhiệt độ' }
    ] },
    { icon: '🗺️', title: 'Sơ đồ điện tủ lạnh', blocks: [
      { t: 'p', x: 'Mọi sơ đồ đều gồm các thành phần cơ bản (động cơ, rơle khởi động, bảo vệ, thermostat, đèn–công tắc cửa) cộng thêm các mạch phụ: xả băng, điện trở chống đọng sương, quạt dàn ngưng/dàn lạnh, đèn báo.' },
      { t: 'list', items: [
        '<b>Xả băng thủ công (tủ 2 buồng)</b>: phích cắm có dây tiếp đất; đèn + công tắc cửa; thermostat nối tiếp rơle khởi động và máy nén. Thêm điện trở đốt nóng (15–20 W) chạy mép ngăn đông để chống đọng sương/dính cửa, chỉ làm việc khi máy nén ngừng — có thể vô hiệu hóa ở nơi nóng ẩm như Việt Nam.',
        '<b>Bán tự động bằng điện trở</b>: thêm nút bấm xả băng: bấm thì ngắt cấp điện máy nén, đóng mạch điện trở; rơle nhiệt độ xả băng (~8 °C) kết thúc chu kỳ. Franklin (Mỹ): rơle khởi động–bảo vệ, thermostat, điện trở xả băng và đèn đấu chung.',
        '<b>Bán tự động bằng hơi nóng</b>: bấm nút, van điện từ mở nối tắt hơi nóng vào dàn, máy nén vẫn chạy.',
        '<b>Tự động bằng điện trở (tủ No-Frost)</b>: đồng hồ xả băng thay cho nút bấm; quạt dàn lạnh gắn công tắc cửa (mở cửa quạt tắt, đèn sáng); điện trở sưởi cửa gió, điện trở xả đá dàn bay hơi (236 W) và khay (236 W).',
        '<b>Tự động bằng hơi nóng</b>: tiếp điểm XB của đồng hồ đóng thì van điện từ mở và đèn báo xả băng sáng; máy nén vẫn chạy.'
      ] },
      { t: 'widget', name: 'dl-fridge-circuit', title: 'Mạch điện tủ lạnh tương tác: chọn kiểu xả băng, đóng cửa, khởi động' },
      { t: 'tip', x: 'Màu dây thường gặp ở sơ đồ nước ngoài: white (trắng), black (đen), blue (xanh lơ), brown (nâu), green (xanh lục), red (đỏ), tan (da bò), yellow (vàng), violet (tím), orange (cam).' }
    ] }
  ],
  summary: [
    'Động cơ tủ lạnh một pha có 3 cọc C (chung), R (chạy), S (khởi động); R<sub>R</sub> < R<sub>S</sub>.',
    'Xác định C–S–R: đo điện trở — S–R lớn nhất, C–R nhỏ nhất.',
    'Rơle khởi động kiểu dòng: cuộn nối tiếp với cuộn R; đóng K khi dòng lớn, ngắt khi rôto đạt ~75% tốc độ.',
    'Rơle bảo vệ: thanh lưỡng kim + dây điện trở, chống quá tải khi cuộn dây > 120 °C.',
    'Thermostat: bầu cảm nhiệt + hộp xếp; vi sai càng nhỏ, máy đóng ngắt càng nhiều, tuổi thọ càng giảm.',
    'Xả băng điện trở: máy nén ngừng; xả băng hơi nóng: máy nén vẫn chạy, van điện từ mở.',
    'Dòng làm việc I ≈ N/(U·cosφ) và tăng theo nhiệt độ bay hơi/ngưng tụ.'
  ],
  cards: [
    ['C, S, R viết tắt gì?', 'Common (chung), Start (khởi động), Run (làm việc)'],
    ['Điện trở nào lớn nhất khi đo ba cọc?', 'Giữa S và R (R<sub>R</sub> + R<sub>S</sub>)'],
    ['Đo điện trở: nhỏ nhất nằm giữa?', 'C và R'],
    ['Rơle khởi động kiểu dòng ngắt khi?', 'Rôto đạt ~75% tốc độ định mức'],
    ['LRA và FLA?', 'LRA: dòng khởi động (rôto bị khóa); FLA: dòng làm việc đầy tải'],
    ['Rơle dòng chỉ dùng cho động cơ dưới?', '3/4 mã lực; không dùng cho điều hòa'],
    ['Nhiệt độ cuộn dây tối đa?', 'Khoảng 120 °C'],
    ['Rơle bảo vệ gồm gì?', 'Dây điện trở nối tiếp mạch + thanh lưỡng kim mang tiếp điểm'],
    ['Triệu chứng rơle bảo vệ tác động liên tục?', 'Tiếng "tách", máy ngừng, vài phút sau chạy lại rồi lại ngắt'],
    ['Thermostat vi sai ±3 °C ở −10 °C?', 'Ngắt −13 °C, đóng −7 °C (vi sai 6 K)'],
    ['Thermostat vi sai nhỏ thì sao?', 'Số lần đóng ngắt tăng, tuổi thọ rơle/động cơ giảm'],
    ['Xả băng kết thúc khi nhiệt độ dàn?', '7–10 °C (rơle nhiệt độ xả băng)'],
    ['Xả băng bằng điện trở: máy nén?', 'Ngừng'],
    ['Xả băng hơi nóng: máy nén?', 'Vẫn chạy; van điện từ nối hơi nóng vào dàn'],
    ['Đồng hồ xả băng quay?', '1 vòng/24 giờ, vấu bấm đặt số lần xả'],
    ['Công thức dòng làm việc gần đúng?', 'I = N/(U·cosφ), cosφ = 0,7–0,8'],
    ['Điện trở chống đọng sương ở mép ngăn đông?', '15–20 W, chỉ chạy khi máy nén ngừng']
  ],
  quiz: [
    { q: 'Đo ba cặp cọc được 8 Ω, 12 Ω, 20 Ω. Cặp 20 Ω là:', o: ['C–R', 'C–S', 'S–R', 'Không xác định'], a: 2, e: 'S–R có tổng điện trở lớn nhất.' },
    { q: 'Cọc C là cọc:', o: ['Trong cặp có điện trở lớn nhất', 'Nằm ngoài cặp có điện trở lớn nhất', 'Cọc nối đất', 'Cọc đo được 0 Ω'], a: 1, e: 'Cọc còn lại sau khi chọn cặp S–R.' },
    { q: 'Rơle khởi động kiểu dòng ngắt cuộn S khi:', o: ['Điện áp thấp', 'Rôto đạt ~75% tốc độ định mức', 'Nhiệt độ tăng', 'Hết 5 giây'], a: 1, e: 'Dòng giảm, lõi rơi.' },
    { q: 'Rơle khởi động dòng lớn quá cho blốc nhỏ sẽ:', o: ['Đóng ngắt bình thường', 'Không đóng được tiếp điểm khởi động', 'Không ngắt được', 'Cháy tức thì'], a: 1, e: 'Dòng ngắn mạch cuộn R không đủ hút lõi.' },
    { q: 'Rơle bảo vệ tác động liên tục, dòng đo bình thường. Nguyên nhân:', o: ['Dàn bẩn', 'Rơle bảo vệ hỏng', 'Thiếu ga', 'Điện áp cao'], a: 1, e: 'Dòng bình thường mà rơle vẫn ngắt thì rơle hỏng.' },
    { q: 'Thermostat cài −10 °C, vi sai ±3 °C. Máy nén đóng lại khi:', o: ['−13 °C', '−10 °C', '−7 °C', '0 °C'], a: 2, e: 'Thiếu lạnh khi lên −7 °C.' },
    { q: 'Vì sao đèn tủ sáng khi mở cửa?', o: ['Công tắc cửa đóng mạch đèn', 'Thermostat', 'Rơle bảo vệ', 'Tụ'], a: 0, e: 'Công tắc cửa đóng khi mở cửa.' },
    { q: 'Xả băng bằng hơi nóng khác điện trở ở chỗ:', o: ['Máy nén vẫn chạy', 'Máy nén ngừng', 'Không cần van', 'Không có nút bấm'], a: 0, e: 'Hơi nóng từ đầu đẩy đi thẳng vào dàn.' },
    { q: 'Dòng làm việc của blốc 120 W, 220 V, cosφ 0,75 xấp xỉ:', o: ['0,3 A', '0,73 A', '2 A', '5 A'], a: 1, e: '120 / (220 × 0,75) ≈ 0,73 A.' },
    { q: 'Bỏ nhiều thực phẩm nóng vào tủ có thể làm:', o: ['Giảm dòng', 'Tăng dòng, rơle bảo vệ tác động', 'Hết ga', 'Hỏng thermostat'], a: 1, e: 'Nhiệt độ bay hơi cao → dòng tăng.' }
  ],
  match: [
    ['Rơle khởi động', 'Đóng K khi dòng lớn'],
    ['Rơle bảo vệ', 'Thanh lưỡng kim'],
    ['Thermostat', 'Bầu cảm nhiệt + hộp xếp'],
    ['LRA', 'Dòng rôto bị khóa'],
    ['FLA', 'Dòng đầy tải'],
    ['Xả băng hơi nóng', 'Van điện từ'],
    ['Đồng hồ xả băng', '1 vòng/24 giờ']
  ]
});
