window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 4,
  title: 'Cấu tạo của tủ lạnh',
  intro: 'Tủ lạnh gồm ba phần: tủ cách nhiệt, hệ thống lạnh và hệ thống điện tự động. Chương này đi qua từng thiết bị của hệ thống lạnh: blốc, dàn ngưng, dàn bay hơi, ống mao, phin sấy lọc, bầu gom lỏng.',
  sections: [
    { icon: '🧊', title: 'Tổng quan và nguyên lý làm việc', blocks: [
      { t: 'list', items: [
        '<b>Tủ cách nhiệt</b>: giữ lạnh, hạn chế nhiệt thấm từ ngoài, có cửa, giá đỡ, chỗ bố trí thiết bị.',
        '<b>Hệ thống lạnh</b>: blốc, dàn ngưng, dàn bay hơi, ống mao, phin sấy lọc, bầu tích lỏng và các ống nối.',
        '<b>Hệ thống điện tự động</b>: thermostat (rơle nhiệt độ), rơle khởi động kiểu dòng điện, rơle bảo vệ, bộ xả băng tự động hoặc bán tự động.'
      ] },
      { t: 'p', x: 'Ga trước đây là R12, nay là R134a hoặc hỗn hợp isobutan. Máy nén hút hơi từ dàn bay hơi, nén lên áp suất cao, đẩy vào dàn ngưng; hơi ngưng thành lỏng, qua phin sấy lọc rồi ống mao giảm áp suất xuống áp bay hơi; lỏng sôi ở nhiệt độ thấp trong dàn bay hơi để thu nhiệt (thường từ −29 °C đến −13 °C). Bầu tích lỏng ở cuối dàn bay hơi ngăn lỏng về máy nén khi xả băng hoặc tải lạnh quá lớn.' },
      { t: 'tip', x: 'Tủ 2 buồng (kiểu Mỹ) có van điện từ xả băng: hơi nóng từ máy nén đi thẳng vào hai dàn bay hơi để làm tan băng rồi quay về máy nén.' },
      { t: 'widget', name: 'dl-fridge-parts', title: 'Các bộ phận của hệ thống lạnh tủ lạnh: bấm để xem nhiệm vụ' }
    ] },
    { icon: '⚙️', title: 'Máy nén (blốc) tủ lạnh', blocks: [
      { t: 'p', x: 'Máy nén là "trái tim" hệ thống: hút hơi từ dàn bay hơi, nén lên áp suất cao, bảo đảm áp suất bay hơi, ngưng tụ và lưu lượng yêu cầu. Cần làm việc ổn định, tin cậy, bền, không ồn, không rung. Máy nén tủ lạnh là loại pittông kín (blốc): máy nén và động cơ cùng nằm trong một vỏ hàn kín, treo trên bốn lò xo.' },
      { t: 'h3', x: 'Quá trình hút – nén của máy nén pittông' },
      { t: 'steps', items: [
        'Pittông đi xuống: clape hút mở, clape đẩy đóng → hút hơi vào xilanh.',
        'Đến điểm chết dưới: quá trình hút kết thúc, pittông đổi chiều đi lên → bắt đầu nén.',
        'Khi áp suất trong xilanh lớn hơn áp suất khoang đẩy, clape đẩy tự mở, hơi nén đi vào khoang đẩy, qua ống chống xung động ra dàn ngưng.',
        'Đến điểm chết trên: kết thúc đẩy, pittông đi xuống bắt đầu chu kỳ mới.'
      ] },
      { t: 'h3', x: 'Các thông số quan trọng' },
      { t: 'table', head: ['Đại lượng', 'Công thức'], rows: [
        ['Thể tích xilanh', 'V<sub>x</sub> = (π·d²/4)·s·z (d: đường kính pittông, s: hành trình, z: số xilanh)'],
        ['Thể tích hút lý thuyết', 'V<sub>lt</sub> = V<sub>x</sub>·n (n: vòng quay, 1/s)'],
        ['Hiệu suất thể tích', 'λ = V<sub>tt</sub>/V<sub>lt</sub> (< 1, giảm khi tỉ số nén tăng)'],
        ['Lưu lượng ga', 'm = V<sub>tt</sub>/v (kg/s), v: thể tích riêng hơi hút'],
        ['Năng suất lạnh', 'Q₀ = m·(h₁ − h₄)'],
        ['Công nén lý thuyết', 'N = m·(h₂ − h₁)'],
        ['Nhiệt thải ở dàn ngưng', 'Q<sub>k</sub> = m·(h₂ − h₃) = Q₀ + N']
      ] },
      { t: 'warn', x: 'Tỉ số nén của freon thường 9–10 và không vượt quá 13; vượt 13 phải dùng máy nén hai cấp.' },
      { t: 'key', x: 'Nhiệt độ bay hơi giảm 1 °C → năng suất lạnh giảm ≈ 4%, điện tiêu thụ tăng ≈ 1,5%. Nhiệt độ ngưng tụ tăng 1 °C → năng suất lạnh giảm ≈ 1,5%, điện tiêu thụ tăng ≈ 1,5%.' },
      { t: 'widget', name: 'dl-compressor', title: 'Máy nén pittông: chu kỳ hút – nén – đẩy' },
      { t: 'h3', x: 'Bôi trơn và các loại blốc' },
      { t: 'p', x: 'Blốc kiểu AE (Tecumseh): trục khuỷu có rãnh xoắn hút dầu từ đáy lên bôi trơn ổ đỡ, tay biên, ắc pittông, rồi chảy về; pittông nhỏ nên không có sécmăng mà chỉ khía rãnh dầu. Công suất lạnh 120–250 W (sôi thấp) đến 450–900 W (sôi cao); xilanh Ø20,8–25,4 mm, hành trình 9,2–14,9 mm, 3500 vòng/phút (60 Hz).' },
      { t: 'p', x: 'Blốc kiểu PW (Danfoss): không dùng trục khuỷu mà trục lệch tâm; xilanh và rôto lắp lên thân bằng bulông; ống chống xung động dạng xoắn giảm ồn. Dùng cho nhiệt độ sôi −5…−25 °C, ngưng tụ định mức 55 °C.' },
      { t: 'table', head: ['Ký hiệu', 'Công suất động cơ (máy nén 5,5 cm³)', 'Nhiệt độ sôi'], rows: [
        ['HBP (áp hút cao)', '150 W', '−5…+10 °C'],
        ['MBP (trung bình)', '120 W', '−25…−5 °C'],
        ['LBP (áp hút thấp)', '92 W', '−40…−25 °C']
      ] },
      { t: 'warn', x: 'Chỉ được thay blốc có động cơ lớn cho hệ dùng blốc động cơ nhỏ, không làm ngược lại. Ví dụ dùng máy nén điều hòa thay cho tủ kem được; lấy máy nén tủ kem thay cho điều hòa sẽ thiếu công suất và cháy động cơ.' }
    ] },
    { icon: '🔬', title: 'Thử nghiệm và sửa chữa blốc', blocks: [
      { t: 'p', x: 'Blốc mới còn nút cao su và hộp xốp thì tin được thông số trên nhãn. Với blốc cũ phải thử cả phần cơ và phần điện.' },
      { t: 'h3', x: 'Yêu cầu phần cơ' },
      { t: 'list', items: [
        'Chạy êm, không rung, không tiếng động lạ; khả năng hút chân không cao, nén lên áp suất cao.',
        'Clape hút và đẩy kín, không đóng muội; trục động cơ không cong vênh; khởi động dễ.'
      ] },
      { t: 'h3', x: 'Yêu cầu phần điện' },
      { t: 'list', items: [
        'Cuộn dây thông mạch, điện trở đúng (đo bằng vạn năng kế hoặc ampe kìm).',
        'Cách điện giữa vỏ và cuộn dây, giữa các cuộn: đo bằng mêgaôm 500 V hoặc 250 V, phải đạt ≥ 5 MΩ.'
      ] },
      { t: 'h3', x: 'Thử khả năng nén bằng áp kế 40 bar' },
      { t: 'steps', items: [
        'Lắp áp kế vào đầu đẩy, khóa các chỗ xì hở; cho blốc chạy, kim đi từ 0, nhanh rồi chậm dần và dừng ở giá trị A.',
        'A > 32 bar (≈ 450 psi): rất tốt. A = 21–32 bar: còn tốt. A < 17 bar (250 psi): máy quá yếu.',
        'Kim đứng im tại A: clape đẩy kín. Kim tụt từ từ về 0: clape đẩy đóng muội. Kim tụt về B rồi quay nhanh về 0: clape cong vênh. Tụt nhanh về 0: clape vênh, hở, rò.',
        'Thử hút: lắp chân không kế vào đường hút, đường đẩy để thông khí; chân không càng sâu máy càng tốt; kim về 0 càng nhanh, clape hút càng hở.',
        'Thử khởi động lại: chạy nóng ~30 phút, tăng áp đẩy lên 14 bar (200 psi), dừng và khởi động lại ngay — phải khởi động được.'
      ] },
      { t: 'widget', name: 'dl-compressor-test', title: 'Thử khả năng nén của blốc: đọc kim áp kế' },
      { t: 'tip', x: 'Máy chỉ yếu: có thể thay dầu đặc hơn nhưng bắt buộc cùng loại, rồi thử lại. Hỏng điện (cháy cuộn, đứt dây, chạm vỏ) hoặc cơ (kẹt, clape kênh) phải bổ blốc ra xác định chính xác.' },
      { t: 'h3', x: 'Nạp dầu cho blốc' },
      { t: 'list', items: [
        'Đúng loại dầu, độ nhớt phù hợp, tinh khiết (không ẩm, không bẩn).',
        'Lượng vừa đủ: thiếu thì kém bôi trơn, thừa thì sủi bọt, bị hút vào xilanh, ngập dàn.',
        'Không pha trộn dầu khác loại.',
        'Blốc mới bổ lần đầu: nạp lại lượng đã đổ ra cộng thêm 1/5; chạy thử, bịt chặt đầu xả bằng tay, thỉnh thoảng xì hơi lên tấm kính — thấy bụi dầu nhỏ là đủ, thấy hạt dầu lớn là thừa.'
      ] }
    ] },
    { icon: '♨️', title: 'Dàn ngưng tụ', blocks: [
      { t: 'p', x: 'Dàn ngưng là thiết bị trao đổi nhiệt cho hơi áp cao, nhiệt độ cao ngưng tụ và thải nhiệt ra môi trường. Nhiệt thải Q<sub>k</sub> = Q₀ + N (nhiệt dàn bay hơi nhận + điện năng của máy nén).' },
      { t: 'list', items: [
        'Cấu tạo cũ: ống thép Ø5, cánh tản nhiệt bằng dây thép Ø1,2–2 mm hàn lên ống; ống xoắn nằm ngang (khí đi từ dưới lên, ga từ trên xuống – trao đổi ngược chiều) hoặc đứng.',
        'Dàn ngưng sơ bộ đặt dưới khay hứng nước ngưng xả để bay hơi làm mát sơ bộ hơi nóng, rồi vào dàn ngưng chính.',
        'Tủ lạnh đời mới: ống xoắn gắn ngay mặt trong vỏ tủ phía sau và hai bên sườn — vỏ tủ chính là cánh tản nhiệt, cần ép tiếp xúc tốt.'
      ] },
      { t: 'widget', name: 'dl-fridge-path', title: 'Đường đi của ga qua tủ lạnh (hoạt hình)' },
      { t: 'h3', x: 'Hư hỏng thường gặp' },
      { t: 'table', head: ['Triệu chứng', 'Nguyên nhân', 'Khắc phục'], rows: [
        ['Dàn rò rỉ, mất ga rất nhanh', 'Áp cao nên mất ga nhanh; ít bị gỉ vì nhiệt độ cao hơn môi trường (trừ đoạn dưới đáy tủ có xả đá)', 'Tìm vết dầu loang, bọt xà phòng, đèn halogen, máy dò điện tử (tốt nhất khi blốc đang chạy); hàn bạc hoặc hàn hơi'],
        ['Dàn nóng bất thường', 'Đặt sát tường, bị chắn bằng túi nilông, bụi bám, nạp quá nhiều ga, dàn nhỏ thiếu diện tích', 'Sửa vị trí, vệ sinh, nạp đúng lượng; dễ quá tải máy nén, cháy blốc'],
        ['Dàn mát hơn bình thường', 'Mát tốt hơn nhờ quạt; hoặc thiếu ga, ống mao/phin tắc một phần, blốc yếu', 'Kiểm tra từng nguyên nhân'],
        ['Dàn lúc nóng, lúc mát', 'Tắc ẩm: tắc thì dàn lạnh mất lạnh, dàn ngưng không nóng; hết tắc lại lạnh', 'Thay phin, hút chân không, nạp lại ga']
      ] }
    ] },
    { icon: '❄️', title: 'Dàn bay hơi', blocks: [
      { t: 'p', x: 'Dàn bay hơi là thiết bị trao đổi nhiệt giữa ga lạnh sôi ở áp suất, nhiệt độ thấp và môi trường cần làm lạnh (không khí trong tủ hoặc thực phẩm). Nằm sau ống mao và trước máy nén; trong tủ thường là ngăn đông, ở phía trên.' },
      { t: 'list', items: [
        '<b>Đối lưu tự nhiên</b>: dàn tấm có các rãnh ga bên trong (nhôm hoặc thép không gỉ; nhôm thường phủ lớp bảo vệ), có kiểu 3, 4, 5 mặt lạnh.',
        '<b>Đối lưu cưỡng bức</b> (tủ quạt gió lạnh): dàn đặt phía sau tủ, có quạt thổi.',
        'Dàn tấm nhôm (cán ép, thổi phồng rãnh) được dùng nhiều nhất: dễ chế tạo, dễ tự động hóa, rẻ, hệ số truyền nhiệt lớn, gọn nhẹ.'
      ] },
      { t: 'warn', x: 'Nhôm dễ gỉ: phải chống ăn mòn điện phân ở mối nối đồng–nhôm giữa dàn với ống mao và ống hút (bọc nilông hoặc nhựa quanh đầu nối cho khỏi ẩm). Hàn nhôm khó hơn hàn đồng; không dùng metanol để chống ẩm vì ăn mòn nhôm.' },
      { t: 'h3', x: 'Hư hỏng' },
      { t: 'list', items: [
        '<b>Thủng dàn</b> (dùng dao, tua vít nạy đá hoặc dụng cụ sắc, hoặc gỉ từ ngoài/trong): tìm vết dầu loang, bơm khí nén 10–12 at nhúng vào bể nước. Khắc phục bằng keo epoxy hai thành phần (lau sạch, trộn kỹ, phủ, thử lại bằng khí nén) hoặc hàn hơi; hàn làm cháy lớp bảo vệ nên dễ thủng tiếp.',
        '<b>Dàn mục</b>: thủng trên 5–6 chỗ coi như mục, phải thay dàn mới; không có thì dùng ống đồng tự chế một dàn phù hợp.',
        'Dàn kém lạnh, bám tuyết không đều, đóng băng quá dày, lúc lạnh lúc mất lạnh: xem chương sửa chữa tủ lạnh.'
      ] },
      { t: 'h3', x: 'Bầu gom lỏng (bầu tích lỏng)' },
      { t: 'p', x: 'Là ống trụ hoặc đoạn ống hút uốn gấp nối liền sau dàn bay hơi; chỉ cho hơi đi qua máy nén, lỏng được giữ lại ở đáy để tránh va đập thủy lực. Thường tràn lỏng khi xả băng bằng hơi nóng hoặc khi bỏ nhiều thực phẩm nóng vào tủ.' }
    ] },
    { icon: '🧵', title: 'Ống mao', blocks: [
      { t: 'p', x: 'Ống mao (ống Capillary) là thiết bị tiết lưu đơn giản nhất: đoạn ống đồng đường kính 0,6–2 mm, dài 0,5–5 m. Nối giữa phin sấy lọc (sau dàn ngưng) và đầu vào dàn bay hơi. Nhiệm vụ: cấp đủ lỏng cho dàn bay hơi và duy trì chênh áp giữa phía cao áp và thấp áp.' },
      { t: 'table', head: ['', 'Ống mao'], rows: [
        ['Ưu điểm', 'Rất đơn giản, không chi tiết chuyển động, không cần bình chứa; sau khi máy dừng vài phút áp suất cân bằng nên khởi động lại rất dễ'],
        ['Nhược điểm', 'Dễ tắc bẩn, tắc ẩm; khó xác định chiều dài; không tự điều chỉnh lưu lượng khi chế độ thay đổi → chỉ dùng cho công suất nhỏ']
      ] },
      { t: 'p', x: 'Ống đồng thau theo tiêu chuẩn Nga ГОСТ 2624-67: Ø trong 0,8; 0,82; 0,85 mm, Ø ngoài 2,1 ± 0,1 mm, chịu 50 at. Ống nhập từ Mỹ: Ø trong 0,66; 0,79...' },
      { t: 'key', x: 'Lưu lượng qua ống mao phụ thuộc áp suất ngưng p<sub>k</sub>, áp suất hút p₀, độ quá lạnh của lỏng, đường kính, chiều dài, độ nhám và cách bố trí ống. Bất lợi: khi nhiệt độ ngưng tăng, năng suất lạnh của máy nén giảm nhưng lưu lượng qua ống mao lại tăng.' },
      { t: 'h3', x: 'Cân cáp (chọn chiều dài ống mao cho đúng)' },
      { t: 'p', x: 'Cân cáp là việc của thợ sửa chữa: chỉnh lại ống mao cho phù hợp khi sửa hoặc thay blốc. Hai phương pháp thực tế dựa trên trở lực của ống mao đối với dòng khí nén do chính blốc tạo ra:' },
      { t: 'list', items: [
        '<b>Phương pháp 1</b>: nối ống mao vào phin và đầu đẩy blốc, lắp áp kế trước phin; đầu hút blốc và đầu kia ống mao để hở. Cho chạy, kim tăng dần rồi dừng ở p<sub>t</sub> = trở lực thủy lực của ống. So với số liệu kinh nghiệm: nhỏ quá phải nối thêm ống, lớn quá phải cắt bớt. Tủ 1 sao (−6 °C): 130–150 psi; 2 sao (−12 °C): 150–160 psi; 3 sao, tủ kem, bảo quản đông: 160–180 psi. Blốc khỏe lấy trị số cao, blốc yếu lấy trị số thấp (tủ đối lưu tự nhiên).',
        '<b>Phương pháp 2</b>: đo ngay trên hệ thống hoàn chỉnh, ống mao đã lắp, đường nạp để hở; kim ổn định ở trị số cao nhất là p<sub>t</sub>. Tủ đối lưu tự nhiên: 150–210 psi (nhiệt độ bay hơi cao lấy số thấp). Tủ kem, tủ đá giải nhiệt quạt: 75–140 psi.'
      ] },
      { t: 'tip', x: 'Nguyên tắc: chọn ống mao đường kính lớn và dài (tránh tắc ẩm, tắc bẩn). Trở lực ống mao càng lớn, độ lạnh càng sâu nhưng năng suất lạnh càng nhỏ — chỉ cân vừa đủ độ lạnh cần đạt. Nạp ga phải vừa đủ: quá nhiều hoặc quá ít đều làm giảm năng suất lạnh và tăng tiêu thụ điện.' },
      { t: 'widget', name: 'dl-capillary', title: 'Ống mao: chọn chiều dài theo áp suất khí nén (cân cáp)' },
      { t: 'h3', x: 'Hư hỏng' },
      { t: 'list', items: [
        'Tắc hoàn toàn: mất lạnh, máy nén chạy không tải, dòng điện thấp nhất. Tắc một phần: tủ kém lạnh, gần như không nghe tiếng "xì xì" ga phun vào dàn, dòng nhỏ hơn bình thường. Chỗ tắc đóng sương.',
        'Dùng đèn khò hơ nóng chỗ tắc khi máy chạy, gõ nhẹ bằng cán tua vít; không hết thì tháo ra thông hoặc cắt bỏ đoạn tắc.',
        'Ống mỏng dễ móp méo, gây xì; kiểm tra khi tủ kém lạnh.',
        'Van tiết lưu nhiệt có nhiều chi tiết chuyển động nên dễ mòn, kẹt, tắc lưới lọc; giao thợ chuyên môn.'
      ] }
    ] },
    { icon: '🧂', title: 'Phin sấy lọc', blocks: [
      { t: 'p', x: 'Freon không hòa tan nước nên rất dễ tắc ẩm ống mao: với R12 chỉ cần khoảng 15 mg nước sót lại trong tủ là đủ gây tắc ẩm. Ẩm còn kết hợp với dầu, ga, cặn bẩn tạo axit (nhất là HCl) và bùn gây gỉ, ăn mòn. Phin sấy lọc giữ ẩm và cặn bẩn lại.' },
      { t: 'warn', x: 'Nhiều thợ tiêm metanol vào hệ thống để xử lý tắc ẩm. Metanol ăn mòn nhôm rất mạnh (dàn tủ lạnh làm bằng nhôm), chỉ vài tháng dàn bị mục; ẩm vẫn còn trong hệ thống. Chỉ dùng tạm thời khi dàn nóng và lạnh đều bằng đồng.' },
      { t: 'table', head: ['Chất hút ẩm', 'Đặc điểm'], rows: [
        ['Silicagel (SiO₂)', 'Kém hút ẩm từ 50 °C; chỉ hiệu quả dưới 33 °C → đặt ở phía hạ áp (hoặc phía cao áp nhưng xa đầu đẩy, xa dàn ngưng); tái sinh 180–200 °C'],
        ['Đất sét hoạt tính (Al₂O₃)', 'Hút ẩm kém hơn zeolit'],
        ['Zeolit 4A (rây phân tử)', 'Hút ẩm hơn silicagel 4–5 lần, ít phụ thuộc nhiệt độ, đặt ở đâu cũng được; tái sinh 550–600 °C']
      ] },
      { t: 'list', items: [
        'Hạt kích thước 0,5–3 mm, hình dạng cố định, không tan rã, không phản ứng với ga, dầu.',
        'Thể tích phin theo công suất tủ: đến 1/8 mã lực: 33 cm³; đến 1/4: 49 cm³; đến 1/2: 96 cm³.',
        'Phin là ống đồng bóp hai đầu, có lớp lưới lọc ở đầu ra (hoặc cả đầu vào).'
      ] },
      { t: 'key', x: 'Vị trí tốt nhất: ngay trước ống mao (trước cả van điện từ, mắt ga nếu có). Lắp thẳng đứng hoặc nghiêng sao cho lỏng chảy từ trên xuống, bảo đảm ga phun vào dàn là lỏng và ống mao làm việc ổn định.' },
      { t: 'warn', x: 'Khi bảo dưỡng, sửa chữa tủ lạnh luôn thay phin mới. Đừng hơ nóng phin cũ để tái sinh — không tái sinh được mà còn tạo hạt chống ẩm gây tắc bẩn. Phin tắc bẩn: hơ nóng gõ nhẹ thông, không được thì cắt thay.' }
    ] }
  ],
  summary: [
    'Tủ lạnh = tủ cách nhiệt + hệ thống lạnh + hệ thống điện tự động.',
    'Blốc: máy nén kín pittông; Q₀ = m(h₁−h₄), N = m(h₂−h₁), Q<sub>k</sub> = Q₀ + N.',
    'Tỉ số nén freon 9–10, tối đa 13; t bay hơi −1 °C → Q₀ −4%; t ngưng +1 °C → Q₀ −1,5%.',
    'Thử blốc bằng áp kế: >32 bar rất tốt, <17 bar quá yếu; kim tụt chậm/nhanh cho biết clape đẩy đóng muội/vênh.',
    'Chỉ thay blốc nhỏ bằng blốc lớn, không làm ngược lại.',
    'Dàn ngưng: ống thép + cánh/vỏ tủ; dàn bay hơi: tấm nhôm cán ép là phổ biến nhất, dễ gỉ ở mối nối đồng–nhôm.',
    'Ống mao Ø0,6–2 mm, dài 0,5–5 m; cân cáp theo áp suất khí nén (150–210 psi cho tủ đối lưu tự nhiên).',
    'Phin sấy lọc: zeolit 4A tốt nhất, đặt trước ống mao, luôn thay mới khi sửa chữa; không dùng metanol.'
  ],
  cards: [
    ['Ba phần chính của tủ lạnh?', 'Tủ cách nhiệt, hệ thống lạnh, hệ thống điện tự động'],
    ['Nhiệm vụ máy nén?', 'Hút hơi từ dàn bay hơi, nén lên áp cao, đẩy vào dàn ngưng'],
    ['Công thức năng suất lạnh Q₀?', 'm·(h₁ − h₄)'],
    ['Công nén lý thuyết?', 'N = m·(h₂ − h₁)'],
    ['Nhiệt thải dàn ngưng?', 'Q<sub>k</sub> = Q₀ + N'],
    ['Tỉ số nén tối đa của freon một cấp?', '13 (bình thường 9–10)'],
    ['t bay hơi giảm 1 °C thì Q₀?', 'Giảm khoảng 4%, điện tăng ~1,5%'],
    ['t ngưng tăng 1 °C thì Q₀?', 'Giảm ~1,5%, điện tăng ~1,5%'],
    ['HBP, MBP, LBP là gì?', 'Áp hút cao (−5…+10 °C), trung bình (−25…−5 °C), thấp (−40…−25 °C)'],
    ['Áp kế thử blốc đạt A > 32 bar nghĩa là?', 'Phần cơ blốc còn rất tốt'],
    ['Kim áp kế tụt từ từ về 0 khi dừng máy?', 'Clape đẩy đóng muội'],
    ['Cách đo cách điện blốc?', 'Mêgaôm 500/250 V, đạt ≥ 5 MΩ'],
    ['Dàn bay hơi phổ biến nhất ở tủ lạnh?', 'Tấm nhôm cán ép có rãnh ga'],
    ['Mối nối đồng–nhôm cần chú ý gì?', 'Chống ẩm (bọc nilông/nhựa) để tránh ăn mòn điện phân'],
    ['Ống mao dài, đường kính?', 'Dài 0,5–5 m, Ø trong 0,6–2 mm'],
    ['Ưu điểm lớn của ống mao?', 'Đơn giản; áp suất tự cân bằng khi dừng nên khởi động lại dễ'],
    ['Triệu chứng ống mao tắc hoàn toàn?', 'Mất lạnh, blốc chạy không tải, dòng thấp nhất'],
    ['Vì sao không dùng metanol xử lý ẩm tủ lạnh?', 'Ăn mòn nhôm của dàn bay hơi'],
    ['Chất hút ẩm tốt nhất?', 'Zeolit 4A (hơn silicagel 4–5 lần)'],
    ['Vị trí lắp phin sấy lọc?', 'Trước ống mao, lắp đứng để lỏng chảy xuống']
  ],
  quiz: [
    { q: 'Tỉ số nén tối đa cho máy nén freon một cấp là:', o: ['5', '9', '13', '20'], a: 2, e: 'Quá 13 phải dùng máy nén hai cấp.' },
    { q: 'Áp kế thử blốc chỉ 15 bar (đứng yên). Đánh giá:', o: ['Rất tốt', 'Còn tốt', 'Quá yếu', 'Cháy motor'], a: 2, e: 'A < 17 bar là quá yếu.' },
    { q: 'Sau khi dừng máy kim áp kế tụt nhanh về 0. Nguyên nhân:', o: ['Clape đẩy kín', 'Clape đẩy vênh, hở', 'Dầu thừa', 'Ống mao tắc'], a: 1, e: 'Rò ở clape đẩy.' },
    { q: 'Máy nén HBP thường lắp động cơ:', o: ['Công suất lớn nhất', 'Công suất nhỏ nhất', 'Không có động cơ', 'Hai chiều'], a: 0, e: 'Nhiệt độ sôi cao cần công suất lớn.' },
    { q: 'Thay blốc tủ kem bằng blốc điều hòa:', o: ['Không được', 'Được vì công suất động cơ lớn hơn', 'Bắt buộc', 'Tùy dầu'], a: 1, e: 'Chỉ được dùng motor lớn thay motor nhỏ.' },
    { q: 'Kết quả đo cách điện blốc đạt tối thiểu:', o: ['0,5 MΩ', '1 MΩ', '5 MΩ', '1 kΩ'], a: 2, e: 'Đo mêgaôm ≥ 5 MΩ.' },
    { q: 'Ống mao bị tắc hoàn toàn, dòng điện máy nén:', o: ['Cao nhất', 'Thấp nhất (chạy không tải)', 'Bằng định mức', 'Dao động'], a: 1, e: 'Máy nén chạy không tải.' },
    { q: 'Chất hút ẩm hiệu quả nhất trong phin sấy lọc là:', o: ['Silicagel', 'Đất sét', 'Zeolit 4A', 'Cát'], a: 2, e: 'Hút ẩm hơn silicagel 4–5 lần.' },
    { q: 'Vì sao không dùng metanol xử lý ẩm?', o: ['Đắt', 'Ăn mòn nhôm dàn bay hơi', 'Không tan', 'Khó mua'], a: 1, e: 'Nhôm mục sau vài tháng.' },
    { q: 'Phin sấy lọc nên lắp:', o: ['Sau máy nén', 'Trước ống mao', 'Sau dàn bay hơi', 'Giữa dàn lạnh'], a: 1, e: 'Bảo vệ ống mao khỏi ẩm và cặn.' }
  ],
  match: [
    ['Blốc', 'Máy nén kín + động cơ trong vỏ hàn'],
    ['Ống mao', 'Tiết lưu đơn giản'],
    ['Bầu gom lỏng', 'Chống va đập thủy lực'],
    ['Zeolit 4A', 'Chất hút ẩm tốt nhất'],
    ['Dàn ngưng', 'Q₀ + N'],
    ['Mêgaôm', 'Đo cách điện blốc'],
    ['LBP', 'Sôi −40…−25 °C']
  ]
});
