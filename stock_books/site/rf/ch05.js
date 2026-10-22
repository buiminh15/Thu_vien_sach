// Chương 5 – Lắp ráp hệ thống lạnh. Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 55–76 (PDF 63–84).
// Đã lược tên hãng thiết bị (phần quảng cáo); giữ thông số kỹ thuật.
window.RF_CH = window.RF_CH || {};
RF_CH[5] = { n: 5, title: 'Lắp ráp hệ thống lạnh', en: 'Assembling a Refrigeration System', part: 'II', dir: 'ch05', pdf: [63, 84],
  intro: 'Chương này đi từ ống đồng, kích cỡ ống và các linh kiện chính, qua từng bước lắp một hệ thống lạnh mẫu (máy nén kín + dàn bay hơi quạt gió, môi chất R134a), đến chạy thử: thử áp lực rò rỉ bằng nitơ, hút chân không, nạp môi chất, kiểm tra cuối và ghi phiếu số liệu khởi động.',
  terms: [['Condensing unit', 'Cụm máy nén–dàn ngưng'], ['Evaporator', 'Dàn bay hơi'], ['Thermostatic expansion valve (TXV)', 'Van tiết lưu nhiệt'], ['Solenoid valve', 'Van điện từ'], ['Filter-drier', 'Phin lọc ẩm'], ['Sight glass', 'Kính soi (kính xem gas)'], ['Dual pressure switch', 'Công tắc áp suất kép (cao/thấp)'], ['Service port', 'Cổng dịch vụ'], ['Manifold gauge set', 'Bộ đồng hồ đo áp (cụm đồng hồ)'], ['Evacuation', 'Hút chân không'], ['Micron', 'Micron (đơn vị chân không: 1 micron = 0,001 mmHg)'], ['Non-condensable gas', 'Khí không ngưng (như không khí, nitơ)'], ['Liquid hammer', 'Va đập thủy lực (lỏng vào máy nén)'], ['Suction / liquid line', 'Đường hút / đường lỏng'], ['Leak test', 'Thử rò rỉ'], ['Commissioning', 'Chạy thử, đưa vào vận hành'], ['Annealed / hard copper', 'Đồng mềm (ủ) / đồng cứng'], ['SAE flare nut', 'Đai ốc loe SAE']],
  sections: [
    { title: 'Ống đồng cho hệ thống lạnh', en: 'Preface – copper pipe work', pg: [63], blocks: [
      { t: 'p', x: 'Bên cạnh việc lắp các thiết bị chính của hệ thống lạnh, <b>đường ống môi chất phải được thi công hoàn toàn sạch sẽ và đúng cách</b>.' },
      { t: 'p', x: 'Đường ống thường gặp nhất trong hệ thống lạnh làm bằng <b>đồng</b>, được chọn theo <b>đường kính ngoài thực tế</b>; có dạng <b>thanh 5–6 m</b> (đồng cứng) và <b>cuộn 15–50 m</b> (đồng mềm).' },
      { t: 'list', items: ['<b>Đồng cứng</b> (hard, rigid copper)', '<b>Đồng mềm</b> (soft, annealed copper)'] },
      { t: 'p', x: 'Ống đồng chuyên dụng cho ngành lạnh được thiết kế và xử lý đặc biệt để <b>chịu áp suất cao hơn</b>. Nhà sản xuất giao hàng với <b>hai đầu bịt kín</b> để ngăn ẩm, bụi… xâm nhập.' },
      { t: 'step', figs: ['63_1', '63_2'], cap: 'Hình 1: So sánh ống đồng mềm và đồng cứng', title: 'Đồng mềm và đồng cứng', en: 'Soft Copper vs Hard Copper', x: '<p><b>Đồng mềm</b> (trái) – linh hoạt, thực sự <b>đa năng</b> hơn ống cứng. Có cuộn <b>dài hơn nhiều</b> nên <b>cần ít mối nối hơn</b> (giảm nguy cơ rò rỉ). Dễ uốn, định hình nên <b>tiết kiệm thời gian</b>.</p><p><b>Đồng cứng</b> (phải) – cứng, gọi và nhận biết theo cỡ và tên. Lắp đặt <b>gọn gàng hơn</b> nhưng <b>mất thời gian và khó hơn</b> ống mềm. Cần <b>rất ít giá đỡ cơ khí</b> để giữ vị trí so với đồng mềm.</p>' }
    ] },
    { title: 'Bảng kích cỡ ống thông dụng', en: 'Common pipe sizes', pg: [64, 65], blocks: [
      { t: 'p', x: 'Các bảng dưới đây liệt kê <b>kích cỡ ống thông dụng</b> (đường kính danh định, chiều dài và chiều dày thành ống).' },
      { t: 'h', x: 'Bảng 1: Ống đồng mềm (ủ) theo chuẩn Châu Âu' },
      { t: 'table', head: ['Đường kính (inch)', 'Dài (m)', 'Thành (mm)', 'Đường kính (mét)', 'Dài (m)', 'Thành (mm)'], rows: [
        ['3/16″', '50', '1', '4 mm', '25', '1'], ['1/4″', '30', '1', '6 mm', '25', '1'], ['5/16″', '50', '1', '8 mm', '25', '1'], ['3/8″', '30', '1', '10 mm', '25', '1'], ['1/2″', '30', '1', '12 mm', '25', '1'], ['5/8″', '30', '1', '15 mm', '25', '1'], ['3/4″', '15', '1', '16 mm', '25', '1'], ['7/8″', '15', '1', '18 mm', '25', '1'], ['—', '—', '—', '22 mm', '25', '1']] },
      { t: 'h', x: 'Bảng 2: Ống đồng mềm (ủ) theo chuẩn Mỹ' },
      { t: 'table', head: ['Đường kính (inch)', 'Dài (ft)', 'Thành (mm)'], rows: [['1/8″', '50', '0,76'], ['3/16″', '50', '0,76'], ['1/4″', '50', '0,76'], ['5/16″', '50', '0,81'], ['3/8″', '50', '0,81'], ['1/2″', '50', '0,81'], ['5/8″', '50', '0,89'], ['3/4″', '50', '0,89'], ['7/8″', '50', '1,14'], ['1 1/8″', '50', '1,21'], ['1 3/8″', '50', '1,40'], ['1 5/8″', '50', '1,52']] },
      { t: 'h', x: 'Bảng 3: Ống đồng cứng (thanh thẳng) theo chuẩn Châu Âu – inch/mét' },
      { t: 'table', head: ['Inch', 'Dài (m)', 'Thành (mm)', 'Mét', 'Dài (m)', 'Thành (mm)'], rows: [
        ['1/4″', '4 hoặc 5', '1', '6 mm', '5', '1'], ['3/8″', '4 hoặc 5', '1', '8 mm', '5', '1'], ['1/2″', '4 hoặc 5', '1', '10 mm', '5', '1'], ['5/8″', '4 hoặc 5', '1', '12 mm', '5', '1'], ['3/4″', '4 hoặc 5', '1', '15 mm', '5', '1'], ['7/8″', '4 hoặc 5', '1', '16 mm', '5', '1'], ['1″', '4 hoặc 5', '1', '18 mm', '5', '1'], ['1 1/8″', '4 hoặc 5', '1', '22 mm', '5', '1'], ['1 3/8″', '4 hoặc 5', '1,24', '28 mm', '5', '1,5'], ['1 5/8″', '4 hoặc 5', '1,24', '35 mm', '5', '1,5'], ['2 1/8″', '4 hoặc 5', '1,65', '42 mm', '5', '1,5'], ['2 5/8″', '4 hoặc 5', '2,10', '54 mm', '5', '2'], ['3 1/8″', '4 hoặc 5', '2,50', '64 mm', '5', '2'], ['3 5/8″', '4', '2,50', '76 mm', '5', '2'], ['4 1/8″', '4 hoặc 5', '2,50', '89 mm', '5', '2'], ['—', '—', '—', '108 mm', '5', '2,5']] },
      { t: 'h', x: 'Bảng 4: Ống đồng cứng (thanh thẳng) theo chuẩn Mỹ' },
      { t: 'table', head: ['Đường kính (inch)', 'Dài (ft)', 'Thành (mm)', 'Đường kính (inch)', 'Dài (ft)', 'Thành (mm)'], rows: [
        ['3/8″', '16,4', '0,76', '1 5/8″', '16,4', '1,53'], ['1/2″', '16,4', '0,89', '2 1/8″', '16,4', '1,78'], ['5/8″', '16,4', '1,02', '2 5/8″', '16,4', '2,03'], ['3/4″', '16,4', '1,07', '3 1/8″', '16,4', '2,29'], ['7/8″', '16,4', '1,14', '3 5/8″', '16,4', '2,54'], ['1 1/8″', '16,4', '1,21', '4 1/8″', '16,4', '2,79'], ['1 3/8″', '16,4', '1,40', '—', '—', '—']] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> ống đồng lạnh được gọi theo <b>đường kính ngoài</b> (OD), nên ống “1/4″” (6,35 mm) khác ống nước cùng tên. Khi mua/đặt ống, ghi rõ <b>OD và chiều dày thành</b>.' }
    ] },
    { title: 'Chọn kích thước đường ống và thiết kế hệ thống mẫu', en: 'System Design and Selection Criteria', pg: [66, 67], blocks: [
      { t: 'key', x: '<b>Công suất lạnh của hệ thống chịu ảnh hưởng của tổn thất áp suất trong đường ống.</b> Tổn thất áp suất không chỉ làm <b>giảm công suất lạnh</b> mà còn làm <b>tăng điện năng tiêu thụ của máy nén</b>.' },
      { t: 'p', x: 'Việc chọn kích thước hệ thống ống được quyết định bởi các yếu tố:' },
      { t: 'list', items: ['<b>Tổn thất áp suất</b>', '<b>Tốc độ dòng chảy</b>', '<b>Hồi dầu</b> (dầu phải theo môi chất trở về máy nén)'] },
      { t: 'p', x: 'Để lắp hệ thống lạnh đã chọn (bộ mô hình thực hành), chọn đường kính ống: <b>ống hút 10 mm</b>, <b>ống lỏng 6 mm</b>.' },
      { t: 'table', head: ['STT', 'Hạng mục', 'SL', 'Thông số chính'], rows: [
        ['1', 'Cụm máy nén–dàn ngưng kín', '1', 'Môi chất HFC-R134a; công suất lạnh 830 W tại –5 °C; công suất điện 600 W; 230 V/1 pha/50 Hz; 21,6 kg'],
        ['2', 'Dàn bay hơi (quạt gió)', '1', 'R134a; 900 W tại –5 °C; diện tích 4,9 m²; quạt 230 V/29 W; 10 kg'],
        ['3', 'Van tiết lưu nhiệt', '1', 'Đầu vào 3/8″, đầu ra 1/2″ (có đầu nối)'],
        ['4', 'Van tiết lưu nhiệt (dự phòng/kèm lọc)', '1', 'Có lưới lọc đầu vào'],
        ['5', 'Phin lọc ẩm', '1', '6 mm/1/4″ loe đực'],
        ['6', 'Kính soi', '1', '6 mm/1/4″'],
        ['7', 'Van điện từ', '1', '6 mm/1/4″ loe đực'],
        ['8', 'Thermostat (có ống mao)', '1', 'Dải nhiệt độ –40 °C đến +65 °C'],
        ['9', 'Công tắc áp suất kép', '1', 'Thấp áp –0,7 đến 4 bar; cao áp 8 đến 32 bar'],
        ['10–11', 'Ống đồng mềm', '5 m + 5 m', 'Ống lỏng 6×1 mm (1/4″); ống hút 10×1 mm (3/8″)'],
        ['12–15', 'Khớp nối đồng thau, đai ốc loe SAE', '—', 'Khớp 10 mm/3/8″ (ren 5/8″ UNF); đai ốc cho các đầu ra/vào van tiết lưu'],
        ['16–18', 'Van chặn, cổng dịch vụ…', '—', 'Phụ kiện đo và nạp'],
        ['19–23', 'Công tắc tổng có vỏ, đèn báo xanh/đỏ, hộp nối dây, dây điện mềm 3×1,5 mm² (6 m)', '—', 'Phần điện'],
        ['24–33', 'Kẹp dây, kẹp ống đồng 6 & 10 mm, tấm đục lỗ 500×800 mm, vít tôn, khung thép định hình, chân đế, ke 45°/90°, bộ vít M8×40', '—', 'Phần khung giá và cố định']
      ] },
      { t: 'tip', x: '💡 Danh mục trên là <b>bản rút gọn, đã bỏ tên hãng</b>. Sách lưu ý rằng các linh kiện “chọn như hoặc tương tự”; bạn có thể dùng linh kiện tương đương miễn thông số phù hợp (môi chất, điện áp, công suất).' }
    ] },
    { title: 'Sơ đồ hệ thống và sơ đồ điện', en: 'Layout and wiring diagram', pg: [68, 69], blocks: [
      { t: 'step', figs: ['68_1'], cap: 'Hình 2: Sơ đồ hệ thống lạnh (sơ đồ dòng môi chất)', title: 'Sơ đồ dòng môi chất', en: 'Refrigeration system layout', x: '<ol><li>Máy nén kín</li><li>Ống đẩy</li><li>Dàn ngưng</li><li>Bình chứa môi chất</li><li>Cổng dịch vụ</li><li>Van chặn</li><li>Ống lỏng</li><li>Phin lọc ẩm</li><li>Kính soi</li><li>Van điện từ</li><li>Van tiết lưu nhiệt</li><li>Ống mao có bầu cảm biến</li><li>Dàn bay hơi</li><li>Cổng dịch vụ</li><li>Ống hút</li><li>Van chặn</li><li>Cổng dịch vụ</li></ol>' },
      { t: 'tip', x: '💡 <b>Đọc sơ đồ:</b> đường <b>đỏ</b> = hơi nóng áp suất cao (ống đẩy), đường <b>xanh lá</b> = lỏng (ống lỏng), đường <b>xanh dương</b> = hơi áp suất thấp (ống hút). Dòng đi: máy nén → dàn ngưng → bình chứa → phin lọc → kính soi → van điện từ → van tiết lưu → dàn bay hơi → ống hút → về máy nén.' },
      { t: 'step', figs: ['69_1'], cap: 'Hình 3: Sơ đồ nối điện (chế độ thu gom/pump-down)', title: 'Sơ đồ điện', en: 'Electrical wiring diagram (pump-out / pump-down)', x: '<table class="rf-tbl"><thead><tr><th>Ký hiệu</th><th>Ý nghĩa</th><th>Ký hiệu</th><th>Ý nghĩa</th></tr></thead><tbody><tr><td>L</td><td>Dây pha</td><td>RW</td><td>Cuộn chạy (máy nén)</td></tr><tr><td>N</td><td>Dây trung tính</td><td>SW</td><td>Cuộn khởi động (máy nén)</td></tr><tr><td>S1</td><td>Công tắc chính (bật–tắt)</td><td>M3</td><td>Máy nén môi chất</td></tr><tr><td>TC</td><td>Thermostat</td><td>SR</td><td>Rơ-le khởi động</td></tr><tr><td>Y1</td><td>Van điện từ</td><td>UR</td><td>Điện trở xả (của C1)</td></tr><tr><td>LP</td><td>Công tắc áp suất thấp</td><td>C1</td><td>Tụ khởi động</td></tr><tr><td>HP</td><td>Ngắt áp suất cao</td><td>C2</td><td>Tụ chạy</td></tr><tr><td>M1</td><td>Motor quạt dàn ngưng</td><td>H1</td><td>Đèn báo “vận hành” (xanh)</td></tr><tr><td>M2</td><td>Motor quạt dàn bay hơi</td><td>H2</td><td>Đèn báo “áp suất cao” (đỏ)</td></tr><tr><td>OP</td><td>Bảo vệ quá tải (máy nén)</td><td colspan="2"></td></tr></tbody></table>' }
    ] },
    { title: 'Các linh kiện chính để lắp', en: 'Main Components for System Assembling', pg: [70, 71, 72, 73], blocks: [
      { t: 'step', figs: ['70_1'], cap: 'Hình 4: Cụm máy nén–dàn ngưng', title: 'Cụm máy nén–dàn ngưng kín', en: 'Condensing unit, hermetic', x: '<ul><li>Môi chất <b>HFC-R134a</b>, điện <b>230 V/1 pha/50 Hz</b></li><li>Công suất lạnh <b>875 W</b> tại –5 °C / nhiệt độ môi trường 32 °C</li><li>Nhiệt độ môi trường tối đa <b>43 °C</b></li></ul>' },
      { t: 'step', figs: ['70_2'], cap: 'Hình 5: Dàn bay hơi', title: 'Dàn bay hơi (quạt gió)', en: 'Evaporator, air forced', x: '<ul><li>Môi chất <b>HFC-R134a</b>, 230 V/1 pha/50 Hz</li><li>Công suất lạnh <b>950 W</b> tại –5 °C; 1 quạt/29 W; diện tích trao đổi nhiệt 4,9 m²</li><li><b>Khoảng cách cánh tản nhiệt 4,2 mm</b></li></ul>' },
      { t: 'step', figs: ['70_3'], cap: 'Hình 6: Luồng không khí qua dàn bay hơi (sơ đồ)', title: 'Tuần hoàn không khí qua dàn bay hơi', en: 'Evaporator air circulation (schematic)', x: 'Sơ đồ dòng không khí được quạt đưa qua dàn bay hơi.' },
      { t: 'step', figs: ['71_1'], cap: 'Hình 7: Van tiết lưu nhiệt', title: 'Van tiết lưu nhiệt (TXV)', en: 'Thermostatic expansion valve', x: 'Loại <b>cân bằng áp trong</b>, môi chất HFC-R134a, đầu nối <b>loe/loe</b>: đầu vào 1/4″ (6 mm), đầu ra 1/2″ (12 mm).' },
      { t: 'step', figs: ['71_2'], cap: 'Hình 8: Van điện từ', title: 'Van điện từ', en: 'Solenoid valve', x: '<p><b>Thường đóng (NC)</b> – không có điện thì đóng.</p><p>Dùng cho môi chất CFC, HCFC, HFC; đầu vào/ra 1/4″ (6 mm); <b>chênh áp mở tối thiểu 0,0 bar</b>; nối bằng <b>hàn đồng hoặc loe</b>.</p>' },
      { t: 'step', figs: ['71_3'], cap: 'Hình 9: Phin lọc ẩm', title: 'Phin lọc ẩm', en: 'Filter-drier', x: 'Tối ưu cho môi chất HFC; nối bằng hàn đồng hoặc loe; đầu vào/ra 1/4″ (6 mm) SAE.' },
      { t: 'step', figs: ['72_1'], cap: 'Hình 10: Kính soi', title: 'Kính soi', en: 'Sight glass', x: 'Có <b>chỉ thị màu báo độ ẩm</b> trong môi chất. Nhiệt độ môi trường –50 °C đến +80 °C; <b>áp suất làm việc tối đa 35 bar</b>; đầu vào/ra 1/4″ (6 mm) SAE.' },
      { t: 'step', figs: ['72_2'], cap: 'Hình 11: Thermostat', title: 'Thermostat', en: 'Thermostat', x: 'Có ống mao; dải nhiệt độ –40 đến +65 °C.' },
      { t: 'step', figs: ['72_3'], cap: 'Hình 12: Công tắc áp suất kép', title: 'Công tắc áp suất kép', en: 'Dual pressure switch', x: 'Thấp áp (LP): <b>–0,7 đến 4 bar</b>; cao áp (HP): <b>8 đến 32 bar</b>.' },
      { t: 'step', figs: ['73_1'], cap: 'Hình 13: Công tắc tổng', title: 'Công tắc tổng', en: 'Master switch', x: 'Có vỏ bảo vệ; 230 V/1 pha/50 Hz.' }
    ] },
    { title: 'Các bước lắp hệ thống', en: 'Assembly steps', pg: [73, 74, 75, 76], blocks: [
      { t: 'order', title: '🎯 Sắp xếp đúng thứ tự lắp hệ thống mẫu', items: ['Cắt thép hộp và lắp khung', 'Lắp chân đế và ke góc', 'Đặt dàn bay hơi', 'Đặt cụm máy nén–dàn ngưng', 'Lắp tấm kim loại đục lỗ (mặt sau)', 'Lắp van tiết lưu và bầu cảm biến, công tắc áp suất kép', 'Lắp các linh kiện mạch môi chất và ống', 'Lắp linh kiện điện và đi dây', 'Thi công các đoạn ống còn lại'] },
      { t: 'step', figs: ['73_2'], cap: 'Hình 14: Hệ thống lạnh (nhìn từ phía trước)', title: 'Nhìn từ phía trước', en: 'Front view of the refrigeration system', x: '<ul><li>Cắt thép hộp rỗng và <b>lắp khung</b></li><li>Lắp <b>chân đế và ke góc</b></li><li>Đặt <b>dàn bay hơi</b></li><li>Đặt <b>cụm máy nén–dàn ngưng</b></li></ul>' },
      { t: 'step', figs: ['74_1'], cap: 'Hình 15: Hệ thống lạnh (nhìn từ phía sau)', title: 'Nhìn từ phía sau', en: 'Rear view of the refrigeration system', x: '<ul><li>Phần <b>dàn bay hơi</b></li><li>Lắp <b>tấm kim loại đục lỗ</b></li></ul>' },
      { t: 'step', figs: ['74_2'], cap: 'Hình 16: Chi tiết dàn bay hơi', title: 'Chi tiết dàn bay hơi', en: 'Detail evaporator', x: '<ul><li><b>Van tiết lưu</b> với lắp đầu phun (nozzle)</li><li>Đưa đầu phun vào và <b>siết đai ốc loe</b></li><li><b>Cảm biến nhiệt độ</b> (bầu cảm biến) với ống mao</li><li>Tê đồng thau có <b>đầu van lõi</b> ở đường hút (đầu ra dàn bay hơi)</li></ul>' },
      { t: 'step', figs: ['75_1'], cap: 'Hình 17: Chi tiết công tắc áp suất kép', title: 'Lắp công tắc áp suất kép', en: 'Install dual pressure switch for high and low pressure control', x: 'Lắp <b>công tắc áp suất kép</b> để kiểm soát <b>áp suất cao và thấp</b>.' },
      { t: 'step', figs: ['75_2'], cap: 'Hình 18: Các linh kiện mạch môi chất', title: 'Lắp linh kiện mạch môi chất và đường ống', en: 'Install refrigerant circuit components including piping', x: '<ul><li><b>Van điện từ</b></li><li><b>Đai ốc loe</b> (ví dụ)</li><li><b>Kính soi</b></li><li><b>Phin lọc ẩm</b></li></ul><p>Các công việc kèm theo: <b>uốn ống đồng</b>, <b>hàn đồng</b>, <b>loe ống</b> (xem chương 6, 7, 8).</p>' },
      { t: 'step', figs: ['76_1'], cap: 'Hình 19: Các linh kiện điện', title: 'Lắp linh kiện điện', en: 'Install electrical components', x: '<ul><li><b>Thermostat</b></li><li><b>Công tắc tổng</b></li><li><b>Hộp nối dây</b></li><li>Lắp và <b>cố định dây điện</b></li></ul>' },
      { t: 'step', figs: ['76_2'], cap: 'Hình 20: Thi công đường ống', title: 'Hoàn thiện phần ống còn lại', en: 'Install remaining pipe work', x: '<ul><li><b>Ống hút</b></li><li><b>Ống lỏng</b></li><li><b>Ống xử lý</b> cho công tắc áp suất kép</li></ul><p>Kèm <b>uốn ống, hàn đồng, loe ống</b> (chương 6–8).</p>' }
    ] },
    { title: 'Chạy thử: các cổng dịch vụ', en: 'Commissioning', pg: [77], blocks: [
      { t: 'key', x: '<b>Độ tin cậy vận hành và tuổi thọ</b> của hệ thống lạnh phụ thuộc chủ yếu vào <b>mức độ nhiễm bẩn, độ ẩm, khí không ngưng</b> (như không khí) trong chu trình lạnh và vào <b>thiết kế, thi công kín</b> (độ kín khít).' },
      { t: 'p', x: 'Chu trình lạnh được <b>kín hóa tốt hơn</b> thì giảm được lượng chất xâm nhập vào và thoát ra khỏi hệ thống khi vận hành. Nhờ vậy vận hành <b>bảo vệ môi trường</b> và <b>tiết kiệm năng lượng</b>.' },
      { t: 'p', x: 'Hệ thống đã lắp có nhiều <b>cổng dịch vụ</b> phục vụ chạy thử, nằm ở các vị trí sau:' },
      { t: 'step', figs: ['77_1'], cap: 'Hình 21: Tổng quan các cổng dịch vụ', title: 'Vị trí cổng dịch vụ', en: 'Service connections overview', x: '<ol><li>Cổng dịch vụ ở <b>ống lỏng</b> (đầu ra bình chứa)</li><li>Cổng dịch vụ ở <b>ống hút</b> (đầu vào máy nén)</li><li>Cổng dịch vụ ở <b>dàn bay hơi</b></li></ol>', ref: 'Dụng cụ môi chất (RHC), tr. 23, hình 6+7' },
      { t: 'step', figs: ['77_2'], cap: 'Hình 22: Chi tiết các cổng dịch vụ', title: 'Chi tiết cổng dịch vụ', en: 'Service connections in detail', x: '<p><b>A:</b> cổng dịch vụ <b>đường hút</b>.</p><p><b>B:</b> cổng dịch vụ <b>đường lỏng</b>.</p>' }
    ] },
    { title: 'Thử áp lực rò rỉ (bằng nitơ)', en: 'Pressure Leak Test', pg: [78, 79], blocks: [
      { t: 'p', x: 'Phép thử này cho biết <b>độ kín tổng thể</b> của hệ thống lạnh.' },
      { t: 'warn', x: 'Chỉ được nạp <b>nitơ khô</b> vào hệ thống lạnh. Nạp nitơ từ <b>cả phía cao áp và phía thấp áp</b> đến áp suất hệ thống <b>tối đa 10 bar</b>.' },
      { t: 'warn', x: '<b>TUYỆT ĐỐI KHÔNG DÙNG OXY (ví dụ khí nén xưởng) ĐỂ NÉN ÁP HỆ THỐNG LẠNH!</b> Oxy gặp dầu máy nén dưới áp suất có thể gây cháy nổ.' },
      { t: 'step', figs: ['78_c'], cap: 'Hình 23: Thử áp lực rò rỉ', title: 'Đấu nối để thử áp', en: 'Pressure leak test', x: '<ol><li>Nối <b>bộ giảm áp của bình nitơ</b> vào <b>cổng giữa</b> của bộ đồng hồ đo áp (manifold).</li><li>Nối <b>đồng hồ cao áp</b> vào cổng dịch vụ <b>phía cao áp</b> của hệ thống.</li><li>Nối <b>đồng hồ thấp áp</b> vào cổng dịch vụ <b>phía thấp áp</b>.</li></ol>', ref: 'RHC tr. 18–22; TT tr. 15 hình 19; Dụng cụ đo (MI) tr. 43 hình 5' },
      { t: 'list', items: ['Nén hệ thống bằng nitơ khô tới <b>tối đa 10 bar</b>.', '<b>Đóng bộ giảm áp</b> và giữ áp suất trong hệ thống.', 'Quan sát áp suất trên đồng hồ: nếu có rò thì <b>áp suất giảm</b>. Một số chỗ rò có thể nghe thấy tiếng khí thoát.', 'Kiểm tra mọi <b>mối nối, mối loe, mối hàn</b> bằng <b>dung dịch xà phòng</b>: chỗ rò sẽ nổi <b>bọt khí</b> do nitơ thoát ra.', '<b>Sửa chỗ rò.</b>', 'Nếu cần, <b>thử lại</b>.'] },
      { t: 'step', figs: ['79_1'], cap: 'Hình 23a: Ví dụ mối nối rò (thấy bọt)', title: 'Mối nối rò: nổi bọt xà phòng', en: 'Example of a leaky connection', x: 'Bọt khí xuất hiện tại điểm rò khi bôi xà phòng.' }
    ] },
    { title: 'Hút chân không', en: 'Evacuation', pg: [79, 80], blocks: [
      { t: 'p', x: 'Hút chân không chủ yếu là <b>giảm lượng khí không ngưng</b> (như không khí và nitơ) trong hệ thống. Ngoài ra còn phải <b>loại bỏ độ ẩm</b> lọt vào trong quá trình lắp ráp trước khi vận hành.' },
      { t: 'key', x: 'Áp suất cuối cùng đo được khi hút chân không nên khoảng <b>0,5 mbar (50 Pa, 375 micron) hoặc thấp hơn</b>.' },
      { t: 'p', x: 'Nếu có thể, nên hút chân không <b>cả hai phía cao và thấp áp</b>. Để bảo đảm đạt chân không yêu cầu, (nếu có thể) hãy <b>đo áp suất bằng đồng hồ chân không ngay trên hệ thống</b>, chứ không đo trực tiếp ở bơm chân không.' },
      { t: 'p', x: '<b>Ống mềm ngắn, đường kính lớn</b> (ví dụ 3/8″) là tốt nhất để hút chân không và <b>rút ngắn đáng kể thời gian</b>. Đa số nhà sản xuất khuyến cáo hút xuống <b>ít nhất 250 micron</b>; đôi khi yêu cầu <b>50 micron</b>. Để đạt chân không sâu như vậy phải dùng đường nối <b>lớn và rất ngắn</b> giữa bơm và hệ thống. Ống mềm tiêu chuẩn (1/4″) <b>không kín đủ</b> và <b>cản dòng quá nhiều</b> để đạt mức chân không đó.' },
      { t: 'step', figs: ['80_c'], cap: 'Hình 24: Hút chân không hệ thống lạnh', title: 'Đấu nối khi hút chân không', en: 'Evacuation of a refrigeration system', x: '<ol><li>Nối <b>bơm chân không</b> vào <b>cổng giữa</b> của bộ đồng hồ đo áp.</li><li>Nối <b>đồng hồ chân không</b> vào cổng dịch vụ <b>ở đầu ra dàn bay hơi</b>.</li><li><b>Chạy bơm chân không</b> và đọc giá trị chân không trên đồng hồ chân không.</li></ol>', ref: 'Thiết bị thu hồi (RRRE) tr. 37 hình 7; MI tr. 45 hình 8' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> vì sao phải đo chân không <b>trên hệ thống</b>? Bơm có thể chạy tốt nhưng ống nối bị nghẹt/rò khiến áp suất thật trong hệ thống vẫn cao. Ẩm sôi ở nhiệt độ rất thấp khi chân không sâu, nên chân không sâu mới “hút” sạch ẩm.' }
    ] },
    { title: 'Nạp môi chất', en: 'Charging', pg: [80, 81], blocks: [
      { t: 'warn', x: '<b>Không bao giờ chạy máy nén khi không có môi chất hoặc đang ở chân không</b> — máy nén sẽ bị hỏng.' },
      { t: 'p', x: 'Nếu biết <b>dung lượng nạp</b> của hệ thống, có thể nạp <b>môi chất lỏng vào phía cao áp</b> lúc <b>máy đang dừng</b>, vào lúc đang có chân không, bằng <b>bình nạp</b> hoặc <b>cân</b>.' },
      { t: 'warn', x: 'Hết sức cẩn thận khi nạp môi chất <b>lỏng vào phía thấp áp</b>. <b>Lỏng (nhiều) tuyệt đối không được vào máy nén</b>: tránh <b>va đập thủy lực (liquid hammer)</b> khi nạp. R134a là môi chất <b>đơn chất</b> nên có thể nạp từ bình ở dạng <b>hơi hoặc lỏng</b>.' },
      { t: 'p', x: 'Nếu chưa biết lượng nạp, trước hết nạp môi chất <b>đến khi công tắc áp suất thấp tác động và có thể khởi động máy nén</b>. Nói chung chỉ cần nạp <b>khoảng một nửa lượng định mức</b> là đủ để chạy máy nén trong lúc nạp mà không gây hỏng. <b>Đo lượng môi chất đã nạp.</b>' },
      { t: 'step', figs: ['81_c'], cap: 'Hình 25: Nạp môi chất cho hệ thống', title: 'Đấu nối khi nạp', en: 'Charging of a refrigerant system', x: 'Nối <b>bình môi chất đặt trên cân</b> vào <b>cổng giữa</b> của bộ đồng hồ đo áp. <b>Xả sạch không khí</b> trong ống nạp.', ref: 'MI tr. 46 hình 9' }
    ] },
    { title: 'Kiểm tra hệ thống và thử rò lần cuối', en: 'System Check and Final Leak Test', pg: [82, 83], blocks: [
      { t: 'p', x: 'Sau khi nạp xong, phải kiểm tra <b>cài đặt và chức năng của các thiết bị an toàn và điều khiển</b>. Hệ thống phải chạy cho đến khi đạt điều kiện làm việc ổn định. Trong thời gian đó <b>ghi lại nhiệt độ và áp suất</b>, đồng thời <b>dán nhãn</b> ghi số liệu thực tế (loại và lượng môi chất đã nạp). Sau khi <b>tháo đồng hồ và ống</b> phải <b>thử rò lần cuối</b>.' },
      { t: 'step', figs: ['82_c'], cap: 'Hình 26: Tổng quan hệ thống lạnh', title: 'Tổng quan hệ thống', en: 'Overview of a refrigerant system', x: 'Các đồng hồ và thiết bị đo kiểm cần chuẩn bị.', ref: 'MI tr. 41 hình 1; tr. 42 hình 2' },
      { t: 'p', x: 'Một lần nữa dùng <b>nước xà phòng</b> và/hoặc <b>máy dò rò điện tử</b>; bạn sẽ thấy có những vị trí thường rò. Các vị trí rò phổ biến:' },
      { t: 'list', items: ['<b>Đai ốc loe</b>', '<b>Van dịch vụ</b>: bộ làm kín (packing), đầu nối truy cập, chỗ lắp', '<b>Mối hàn đồng bị nứt</b> trên ống', 'Các <b>khúc cong đầu dàn bay hơi bị mục</b>', '<b>Ống cọ xát vào nhau</b>', '<b>Mối hàn sắt trong phụ kiện bị nứt</b>'] },
      { t: 'step', figs: ['83_1'], cap: 'Hình 27: Các điểm đo nhiệt độ và áp suất', title: 'Điểm đo nhiệt độ (T) và áp suất (P)', en: 'Measuring spots for temperature and pressure', x: 'Các điểm <b>T1–T11</b> (nhiệt độ) và <b>P1–P3</b> (áp suất) tương ứng với các dòng trong <b>phiếu số liệu khởi động</b> ở phần sau. Ví dụ: T1 nhiệt độ xả, T10 nhiệt độ hơi ra dàn bay hơi, P1 áp suất hút, P2 áp suất ngưng, P3 áp suất hút ở dàn bay hơi.', ref: 'MI tr. 47 hình 11; tr. 48 hình 12; tr. 50 hình 17' }
    ] },
    { title: 'Phiếu số liệu khởi động', en: 'Start-Up Data Sheet', pg: [84], blocks: [
      { t: 'p', x: 'Sau khi chạy thử, hãy điền phiếu này để lưu hồ sơ. Đây là mẫu phiếu của sách (Bảng 6):' },
      { t: 'table', head: ['Nhóm', 'Các mục cần ghi'], rows: [
        ['<b>Thông tin kỹ thuật viên</b>', 'Họ tên; địa chỉ; điện thoại/fax; số đăng ký hành nghề'],
        ['<b>Thông tin lắp đặt/thiết bị</b>', 'Loại hệ thống; model và số; ngày bắt đầu; ngày hoàn thành'],
        ['<b>Số liệu vận hành</b>', 'Loại môi chất; lượng nạp môi chất; loại dầu; lượng dầu; áp suất hút P1; áp suất ngưng P2; áp suất hút ở dàn bay hơi P3; nhiệt độ xả T1; nhiệt độ hơi nóng T2; nhiệt độ không khí vào dàn ngưng T3; không khí ra dàn ngưng T4; nhiệt độ môi chất ra dàn ngưng T5; nhiệt độ lỏng vào phin lọc T6; nhiệt độ môi chất ra phin lọc T7; không khí vào dàn bay hơi T8; không khí ra dàn bay hơi T9; hơi ra dàn bay hơi T10; hơi vào máy nén T11; điểm ngắt công tắc LP; điểm ngắt công tắc HP'],
        ['<b>Số liệu điện</b>', 'Điện áp nguồn (L1, L2, L3); tổng dòng điện (L1, L2, L3); dòng máy nén (L1, L2, L3); dòng quạt dàn bay hơi; dòng quạt dàn ngưng'],
        ['<b>Số liệu lắp đặt khác</b>', 'Đường kính và chiều dài ống đẩy; ống lỏng; ống hút; bảo ôn ống hút; chênh lệch độ cao máy nén/dàn bay hơi; loại dàn ngưng; loại dàn bay hơi; loại phin lọc ẩm; loại và cỡ bình chứa'],
        ['<b>Ghi chú và ký tên</b>', 'Ghi chú; chữ ký kỹ thuật viên; ngày']
      ] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> phiếu này là “bệnh án khởi đầu” của máy. Khi máy có sự cố sau này, so sánh số liệu hiện tại với số liệu lúc khởi động (áp suất, nhiệt độ, dòng điện) là cách chẩn đoán nhanh nhất.' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Vì sao đồng mềm cần ít mối nối hơn?', o: ['Vì dày hơn', 'Vì được cuộn dài hơn nhiều so với thanh đồng cứng', 'Vì không bao giờ rò', 'Vì rẻ hơn'], a: 1, e: 'Ít mối nối → giảm nguy cơ rò rỉ.' },
        { q: 'Tổn thất áp suất trong đường ống gây hậu quả gì?', o: ['Chỉ làm ồn', 'Giảm công suất lạnh và tăng điện năng máy nén', 'Tăng công suất lạnh', 'Không ảnh hưởng'], a: 1, e: 'Vì vậy phải chọn đúng cỡ ống.' },
        { q: 'Khí nào được dùng để thử áp lực rò rỉ và áp suất tối đa?', o: ['Oxy – 30 bar', 'Nitơ khô – 10 bar', 'Khí nén xưởng – 10 bar', 'Môi chất – 20 bar'], a: 1, e: 'Tuyệt đối không dùng oxy hay khí nén xưởng.' },
        { q: 'Áp suất chân không cuối cùng nên khoảng bao nhiêu?', o: ['0,5 mbar (375 micron) hoặc thấp hơn', '100 mbar', 'Áp suất khí quyển', '10 bar'], a: 0, e: 'Nhiều hãng khuyến cáo ít nhất 250 micron.' },
        { q: 'Vì sao dùng ống mềm 3/8″ ngắn để hút chân không?', o: ['Rẻ hơn', 'Giảm đáng kể thời gian hút vì ít cản dòng', 'Để chống rò', 'Để giảm tiếng ồn'], a: 1, e: 'Ống 1/4″ cản dòng và kín kém hơn.' },
        { q: 'Nguy cơ chính khi nạp môi chất lỏng vào phía thấp áp?', o: ['Va đập thủy lực làm hỏng máy nén', 'Môi chất bay hơi nhanh', 'Giảm áp', 'Không có'], a: 0, e: 'Lỏng không được vào máy nén.' }
      ] }
    ] }
  ] };
