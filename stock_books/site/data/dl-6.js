window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 6,
  title: 'Đặc tính vận hành của tủ lạnh',
  intro: 'Thông số kỹ thuật, nhiệt độ các loại tủ, áp suất trong chu kỳ chạy – nghỉ, hệ số thời gian làm việc và điện năng tiêu thụ: những chỉ số để biết tủ khỏe hay bệnh.',
  sections: [
    { icon: '📋', title: 'Thông số kỹ thuật chính', blocks: [
      { t: 'list', items: [
        'Dung tích hữu ích (75, 100, 150 lít...) — quan trọng nhất, từ đó suy ra nhiều thông số khác. Tủ gia đình 40–800 lít; tủ thương nghiệp tới vài mét khối.',
        'Số buồng, độ lạnh ngăn đông 1, 2, 3 (hoặc 4) sao tương ứng −6, −12, −18 (−24) °C.',
        'Điện áp (100/110/127/220/240 V; 50 hoặc 60 Hz); dòng làm việc đầy tải và công suất động cơ.',
        'Kiểu blốc (đứng hay nằm ngang), kiểu tủ (đứng, nằm, treo), dàn lạnh tĩnh hay quạt gió / No-Frost, dàn ngưng tĩnh – trong vỏ – quạt.'
      ] },
      { t: 'tip', x: 'Dung tích thực chỉ chiếm 0,8–0,93 dung tích thô; ngăn đông chiếm 5–25%; khối lượng tủ khoảng 0,24–0,5 kg/lít.' },
      { t: 'p', x: 'Blốc tủ lạnh có công suất động cơ từ 1/20 mã lực (37 W) đến 3/4 mã lực (560 W), phần lớn từ 1/12 đến 1/6 mã lực. Công suất còn phụ thuộc nhiều vào nhiệt độ trong tủ (nhiệt độ bay hơi), nhiệt độ ngoài trời (nhiệt độ ngưng tụ), ngăn đông, chức năng làm nước mát, làm đá lạp phương.' }
    ] },
    { icon: '🏷️', title: 'Nhiệt độ các loại tủ', blocks: [
      { t: 'table', head: ['Loại tủ', 'Nhiệt độ', 'Công dụng'], rows: [
        ['Tủ mát', '+7…+10 °C', 'Rau quả tươi, nước uống'],
        ['Tủ lạnh', '2…4 °C (quanh 0 °C)', 'Bảo quản ngắn hạn thực phẩm sống và chín'],
        ['Tủ đông', '−18…−35 °C', 'Bảo quản dài hạn thực phẩm lạnh đông'],
        ['Tủ kết đông', '−25…−35 °C', 'Kết đông thực phẩm từ 4 °C xuống −18 °C']
      ] },
      { t: 'table', head: ['Blốc', 'Nhiệt độ sôi', 'Ứng dụng'], rows: [
        ['HBP (áp hút cao)', '+10…−10 °C', 'Điều hòa, làm lạnh nước, tủ bảo quản rau quả, nước uống'],
        ['MBP (trung bình)', '0…−25 °C', 'Tủ lạnh gia đình'],
        ['LBP (áp hút thấp)', '−15…−40 °C', 'Tủ kết đông, tủ bảo quản đông, tủ đông gia đình']
      ] },
      { t: 'table', head: ['Sản phẩm bảo quản', 'Nhiệt độ (°C)'], rows: [
        ['Thịt nói chung / thịt tươi sống', '−1…1 / −2…0'],
        ['Gia cầm', '−1…1'],
        ['Rau quả tươi', '2…6'],
        ['Rau, hoa, quả', '3…10'],
        ['Buồng kết đông', '−25…−26'],
        ['Làm cứng kem / bảo quản kem', '−32…−33 / −29…−23']
      ] },
      { t: 'p', x: 'Tủ gia đình kết hợp ba chế độ: ngăn đông (−18 °C), ngăn giữa (0…5 °C, ngăn lạnh), ngăn dưới cùng (7…10 °C, rau quả). Chia bằng vách ngăn hoặc cửa gió. Số sao cũ: 1 sao −6 °C; 2 sao −12 °C; 3 sao −18 °C; 4 sao −24 °C.' },
      { t: 'key', x: 'Thermostat gắn trên dàn bay hơi nên nhiệt độ ngăn đông hầu như chỉ phụ thuộc vị trí núm vặn, ít phụ thuộc nhiệt độ môi trường; ngược lại nhiệt độ ngăn lạnh chịu ảnh hưởng rất lớn của nhiệt độ môi trường, vì chỉ được khống chế gián tiếp qua bề mặt dàn bay hơi.' },
      { t: 'tip', x: 'Ví dụ tủ ZIL KX-240: khi nhiệt độ ngoài đổi từ 20 sang 35 °C, ngăn lạnh có thể tăng từ ~4,5 lên ~10,5 °C trong khi núm đặt không đổi. Muốn khống chế từng buồng hoàn toàn theo ý muốn thì mỗi buồng phải có thermostat riêng (hoặc chu trình riêng).' }
    ] },
    { icon: '⏱️', title: 'Áp suất trong chu kỳ chạy – nghỉ', blocks: [
      { t: 'p', x: 'Tủ lạnh làm việc kiểu đóng ngắt ON–OFF. Ví dụ R12, môi trường 23 °C, ngưng tụ ~31 °C (7,7 bar tuyệt đối, đọc trên áp kế 6,7 bar), bay hơi ~−22 °C (1,4 bar tuyệt đối, áp kế 0,4 bar), ngăn đông ~−12 °C.' },
      { t: 'steps', items: [
        'Thiếu lạnh: thermostat đóng (ON) → máy nén chạy; áp suất ngưng tụ tăng lên, áp suất bay hơi giảm xuống rất nhanh.',
        'Sau khoảng 4 phút: buồng lạnh đạt yêu cầu, thermostat ngắt (OFF) → máy dừng.',
        'Máy dừng: áp suất ngưng giảm, áp suất bay hơi tăng dần đến áp suất cân bằng sau 3–5 phút. Không được cho máy khởi động lại trong thời gian này vì khởi động nặng dễ cháy blốc.',
        'Sau khoảng 12 phút nghỉ, nhiệt độ buồng lại tăng quá mức → thermostat đóng, chu kỳ mới.'
      ] },
      { t: 'widget', name: 'dl-onoff', title: 'Chu kỳ chạy – nghỉ: áp suất ngưng tụ và bay hơi' },
      { t: 'warn', x: 'Vì áp suất cân bằng khá nhỏ nên khởi động sau khi cân bằng dễ dàng. Tủ thường có thiết bị trễ chỉ cho máy làm việc sau khi dừng ít nhất 4–5 phút; nếu vừa mất điện lại có ngay, máy không khởi động được, rơle bảo vệ nhảy và có thể cháy động cơ.' }
    ] },
    { icon: '📐', title: 'Hệ số thời gian làm việc b', blocks: [
      { t: 'key', x: 'b = T<sub>l</sub> / T<sub>ck</sub> (thời gian làm việc / thời gian cả chu kỳ).' },
      { t: 'tip', x: 'Ví dụ: chạy 4 phút, nghỉ 8 phút → b = 4/12 = 0,33 (33%). Một giờ tủ chỉ chạy khoảng 20 phút, nghỉ 40 phút.' },
      { t: 'list', items: [
        'b phụ thuộc chủ yếu vào vị trí núm thermostat và nhiệt độ môi trường: núm càng về phía lạnh, nhiệt độ môi trường càng lớn thì b càng lớn.',
        'Môi trường từ khoảng +33 °C trở lên, tủ chạy hầu như không nghỉ. Tủ kém lạnh thì chạy liên tục. Khi làm đá, tủ chạy liên tục cho đến khi đá đông hết.'
      ] },
      { t: 'widget', name: 'dl-duty', title: 'Hệ số thời gian làm việc, điện năng và chi phí' }
    ] },
    { icon: '💡', title: 'Điện năng tiêu thụ', blocks: [
      { t: 'key', x: 'Nhiệt độ ngưng tụ tăng 1 °C → điện năng tăng thêm khoảng 1,5%. Nhiệt độ bay hơi giảm 1 °C → điện năng cũng tăng khoảng 1,5%. Hệ số thời gian làm việc càng lớn càng tốn điện.' },
      { t: 'table', head: ['Nhiệt độ ngưng tụ tăng khi', 'Nhiệt độ bay hơi giảm khi', 'Hệ số b tăng khi'], rows: [
        ['Môi trường nóng; đặt tủ sát tường; dàn ngưng bị giấy, nilông che; gần bếp, lò sưởi, nắng chiếu; blốc làm mát kém; có khí không ngưng', 'Đặt núm lạnh hơn; dàn đóng tuyết quá dày; nạp thiếu ga; thực phẩm che kín dàn; thermostat trục trặc', 'Môi trường >33 °C; nạp thiếu ga; cửa hở; đèn trong tủ vẫn sáng khi đóng cửa; cách nhiệt hỏng (đổ mồ hôi ngoài tủ); phin lọc/phin sấy tắc một phần; blốc yếu ("đảo")']
      ] },
      { t: 'list', items: [
        'Số chu kỳ: thường 3–4 lần khởi động mỗi giờ; chu kỳ quá ngắn tốn thêm điện vì đầu chu kỳ điện tiêu thụ nhiều hơn cuối chu kỳ.',
        'Tủ chạy qua biến thế, ổn áp còn tốn điện cho thiết bị đó; nên ngắt cùng khi tủ ngắt.'
      ] },
      { t: 'tip', x: 'ZIL KX-240 (240 lít): giữ trong tủ 4 °C, môi trường 20 °C núm số 2 → ~0,8 kWh/24 h; môi trường 30 °C phải chỉnh lên số 6 → ~1,7 kWh/24 h. Núm số 1: ở 20 °C tủ đạt 5 °C, 0,77 kWh/24 h; ở 35 °C tủ lên 10,5 °C, 1,75 kWh/24 h.' },
      { t: 'p', x: 'Điện năng tiêu thụ thực tế vượt mức cho phép là dấu hiệu cần kiểm tra, nhất là sau khi sửa chữa: nạp ga nhiều/ít, lẫn không khí (áp đầu đẩy tăng vọt), tắc bẩn, tắc ẩm. Nếu hệ lạnh hoàn hảo thì nguyên nhân có thể là cách nhiệt ẩm hỏng, cửa không kín, đèn sáng khi đóng cửa. Khi kiểm tra phải giữ điều kiện vận hành không đổi: nhiệt độ môi trường, núm thermostat, tủ chạy không tải (không thực phẩm, không làm đá).' }
    ] }
  ],
  summary: [
    'Dung tích hữu ích là thông số quan trọng nhất; công suất động cơ tăng theo dung tích.',
    'HBP, MBP, LBP là ba loại blốc cho nhiệt độ sôi cao, trung bình, thấp.',
    'Ngăn đông phụ thuộc vị trí núm; ngăn lạnh phụ thuộc nhiệt độ môi trường.',
    'Sau khi dừng phải chờ 3–5 phút áp suất cân bằng rồi mới khởi động lại.',
    'b = T<sub>l</sub>/T<sub>ck</sub>; môi trường >33 °C tủ chạy liên tục.',
    'Ngưng tụ +1 °C hoặc bay hơi −1 °C đều làm điện tăng ~1,5%.',
    'Điện năng đo ở chế độ chuẩn (không tải) so với chỉ tiêu để chẩn đoán hư hỏng.'
  ],
  cards: [
    ['Dung tích thực so với dung tích thô?', '0,8–0,93'],
    ['Ngăn đông 3 sao?', '−18 °C'],
    ['Tủ mát nhiệt độ?', '+7…+10 °C'],
    ['Tủ đông / kết đông?', '−18…−35 / −25…−35 °C'],
    ['HBP dùng cho?', 'Sôi +10…−10 °C: điều hòa, tủ mát'],
    ['MBP dùng cho?', 'Sôi 0…−25 °C: tủ lạnh gia đình'],
    ['LBP dùng cho?', 'Sôi −15…−40 °C: tủ đông, kết đông'],
    ['Máy nén HBP và LBP cùng thể tích xilanh, loại nào động cơ lớn hơn?', 'HBP, vì hút nhiều hơi (áp cao) hơn'],
    ['Thời gian cân bằng áp suất?', '3–5 phút sau khi dừng'],
    ['Hệ số b là gì?', 'Thời gian chạy / thời gian cả chu kỳ'],
    ['Chạy 4 phút nghỉ 8 phút thì b?', '0,33'],
    ['Ngưng +1 °C điện tăng?', '~1,5%'],
    ['Bay hơi −1 °C điện tăng?', '~1,5%'],
    ['Môi trường trên bao nhiêu độ tủ chạy liên tục?', '~33 °C'],
    ['Khi nào nên so điện năng với chỉ tiêu?', 'Khi chạy không tải, núm và nhiệt độ môi trường xác định'],
    ['Nhiệt độ ngăn lạnh phụ thuộc gì?', 'Nhiệt độ môi trường và núm thermostat (gián tiếp)']
  ],
  quiz: [
    { q: 'Tủ lạnh gia đình thông thường dùng blốc:', o: ['HBP', 'MBP', 'LBP', 'Không có'], a: 1, e: 'Sôi 0…−25 °C.' },
    { q: 'Chạy 3 phút, nghỉ 9 phút. b bằng:', o: ['0,25', '0,33', '0,5', '0,75'], a: 0, e: '3/12 = 0,25.' },
    { q: 'Sau khi dừng máy, phải chờ bao lâu trước khi khởi động lại?', o: ['Ngay lập tức', '3–5 phút', '1 giờ', '1 ngày'], a: 1, e: 'Chờ áp suất cân bằng.' },
    { q: 'Ngưng tụ tăng 3 °C thì điện tăng khoảng:', o: ['1,5%', '4,5%', '15%', '45%'], a: 1, e: '3 × 1,5%.' },
    { q: 'Ngăn đông ít phụ thuộc nhiệt độ môi trường vì:', o: ['Dày cách nhiệt', 'Thermostat gắn trên dàn bay hơi', 'Dùng quạt', 'Không có ga'], a: 1, e: 'Thermostat cảm biến dàn.' },
    { q: 'Tủ nóng do nhiều nguyên nhân. Nguyên nhân KHÔNG làm tăng điện năng:', o: ['Dàn ngưng bụi bẩn', 'Cách nhiệt ẩm', 'Cửa kín, đèn tắt đúng', 'Nạp thiếu ga'], a: 2, e: 'Cửa kín và đèn tắt đúng là bình thường.' },
    { q: 'Ngăn rau quả thường để ở khoảng:', o: ['−18 °C', '0 °C', '7–10 °C', '25 °C'], a: 2, e: 'Rau quả 7–10 °C.' },
    { q: 'Điều kiện chuẩn đo điện năng tủ là:', o: ['Đầy hàng', 'Chạy không tải', 'Đang làm đá', 'Mở cửa liên tục'], a: 1, e: 'Không thực phẩm, không làm đá.' }
  ],
  match: [
    ['HBP', 'Sôi +10…−10 °C'],
    ['LBP', 'Sôi −15…−40 °C'],
    ['b', 'T<sub>l</sub>/T<sub>ck</sub>'],
    ['Cân bằng áp suất', '3–5 phút'],
    ['3 sao', '−18 °C'],
    ['+1 °C ngưng tụ', '+1,5% điện']
  ]
});
