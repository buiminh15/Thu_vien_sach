window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 3,
  title: 'Ga lạnh (môi chất lạnh)',
  intro: 'Ga lạnh là "máu" của máy lạnh. Chương này giúp bạn nhận biết, đọc áp suất – nhiệt độ bão hòa, xử lý bình ga, dầu, ẩm và đọc được đồ thị Mollier (p–h) để chẩn đoán máy.',
  sections: [
    { icon: '✅', title: 'Yêu cầu đối với ga lạnh', blocks: [
      { t: 'p', x: 'Ga lạnh tuần hoàn trong hệ thống: hút nhiệt của buồng lạnh nhờ bốc hơi ở áp suất và nhiệt độ thấp, rồi thải nhiệt ra môi trường ở áp suất và nhiệt độ cao. Ga lý tưởng cần:' },
      { t: 'list', items: [
        'Không độc hại với cơ thể sống; không cháy, không nổ; không ăn mòn vật liệu máy.',
        'Dễ phát hiện rò rỉ và vị trí rò rỉ.',
        'Nhiệt độ đông đặc thấp, thấp hơn nhiều nhiệt độ sôi yêu cầu.',
        'Bền vững hóa học, không dễ phân hủy; hợp với dầu bôi trơn.',
        'Tỉ số nén π = p<sub>ngưng</sub>/p<sub>bay hơi</sub> càng thấp càng tốt.',
        'Thân thiện môi trường, không phá hủy tầng ozon.'
      ] },
      { t: 'warn', x: 'Không có ga lý tưởng; ta chỉ chọn ga có ưu điểm phù hợp và hạn chế nhược điểm của nó.' }
    ] },
    { icon: '🧪', title: 'Các ga lạnh thường dùng', blocks: [
      { t: 'table', head: ['Ga', 'Sôi ở 1,013 bar', 'Đặc điểm chính'], rows: [
        ['R11 (CCl₃F)', '23,8 °C', 'Máy nén tuabin; phá tầng ozon, cấm từ 1/1/1996'],
        ['R12 (CCl₂F₂)', '−29,8 °C', 'Tủ lạnh, điều hòa ô tô; không hòa tan nước → dễ tắc ẩm tiết lưu; cấm từ 1/1/1996'],
        ['R13 (CClF₃)', '−81,4 °C', 'Nhiệt độ rất thấp (−70…−100 °C); cấm; thay bằng R23'],
        ['R22 (CHClF₂)', '−40,8 °C', 'Áp suất cao hơn R12, năng suất lạnh thể tích gấp ~1,6 lần; ODP chỉ ~2,5% R12; Việt Nam loại bỏ 1/1/2040; thay bằng R407C, R410A'],
        ['R134a (CH₂F–CF₃)', '−26,5 °C', 'Thay R12 dài hạn; dùng dầu polyester (PO) hút ẩm mạnh; không phá ozon'],
        ['R502 (48,8% R22 + 51,2% R115)', '−45,4 °C', 'Hỗn hợp đồng sôi, kết đông thực phẩm đến −50 °C; năng suất lạnh hơn R22 ~20%; cấm; thay R408A, R404A, R507']
      ] },
      { t: 'tip', x: 'Nạp R22 vào máy R12 làm năng suất lạnh tăng ~1,6 lần nhưng công suất động cơ cũng phải tăng tương ứng — tức là không được tự ý đổi ga.' }
    ] },
    { icon: '🌍', title: 'CFC – HCFC – HFC: thân thiện môi trường', blocks: [
      { t: 'table', head: ['Nhóm', 'Thành phần', 'Ví dụ', 'Tình trạng'], rows: [
        ['CFC', 'Carbon – Flo – Clo', 'R11, R12, R13, R115 (trong R502)', 'Phá ozon mạnh nhất; cấm từ 1/1/1996'],
        ['HCFC', 'Có thêm Hydro, tồn tại ngắn', 'R22', 'Ga quá độ; cấm từ 1/1/2040 (Việt Nam)'],
        ['HFC', 'Hydro – Flo – Carbon, không clo', 'R134a, R404A, R407C, R410A', 'Không phá ozon, nhưng gây hiệu ứng nhà kính']
      ] },
      { t: 'key', x: 'Clo là thủ phạm phá tầng ozon. Ga không có clo (HFC) thân thiện hơn; máy đã nạp R22 vẫn dùng đến hết tuổi thọ.' }
    ] },
    { icon: '📊', title: 'Áp suất – nhiệt độ bão hòa', blocks: [
      { t: 'p', x: 'Ở trạng thái bão hòa, mỗi nhiệt độ sôi ứng với đúng một áp suất. Đo áp suất thực tế rồi so với bảng lý thuyết là cách chẩn đoán máy: chênh bất thường nghĩa là máy đang có vấn đề.' },
      { t: 'table', head: ['t (°C)', 'R12', 'R22', 'R134a', 'R410A', 'NH₃'], rows: [
        ['−20', '1,51', '2,46', '1,33', '4,01', '1,90'],
        ['0', '3,09', '4,98', '2,93', '7,99', '4,29'],
        ['10', '4,24', '6,80', '4,15', '10,85', '6,15'],
        ['20', '5,68', '9,08', '5,72', '14,44', '8,57'],
        ['30', '7,46', '11,88', '7,71', '18,84', '11,67'],
        ['40', '9,63', '15,27', '10,18', '24,19', '15,55'],
        ['50', '12,24', '19,31', '13,19', '30,61', '20,33']
      ] },
      { t: 'tip', x: 'Đơn vị bar tuyệt đối. Đồng hồ áp kế chỉ áp suất dư nên phải cộng 1,013 bar trước khi tra bảng. Ví dụ: tủ lạnh gia đình, dàn ngưng 45 °C → R12 10,88 bar tuyệt đối (đồng hồ ≈ 9,87 bar); buồng lạnh −23 °C → bay hơi ~−30 °C, đồng hồ chỉ vào khoảng 0,5 bar dư dưới khí quyển.' },
      { t: 'h3', x: 'Quy tắc ngón tay cái' },
      { t: 'list', items: [
        'Nhiệt độ ngưng tụ lớn hơn nhiệt độ không khí vào dàn ngưng khoảng 15 ± 2 °C (giải nhiệt gió); lớn hơn nhiệt độ nước ra 7…10 °C (giải nhiệt nước).',
        'Nhiệt độ bay hơi thấp hơn nhiệt độ buồng lạnh khoảng 10 ± 2 °C.'
      ] },
      { t: 'widget', name: 'dl-sat', title: 'Tra áp suất bão hòa và nhận biết ga lạnh' }
    ] },
    { icon: '🛢️', title: 'Bình chứa ga và quy tắc an toàn', blocks: [
      { t: 'table', head: ['Loại', 'Đặc điểm'], rows: [
        ['Bình bảo quản', '45–68 kg, đóng dấu ngày, quay vòng ≤ 6 tháng, kiểm tra định kỳ 5 năm (ga gây hàn rỉ) / 10 năm'],
        ['Chai ga dịch vụ', '2–12 kg, van 1/4" (6,4 mm), mang đi nạp tại hiện trường'],
        ['Bình tái sử dụng', 'Đổi bình cũ lấy bình đầy; có hai tay van (hơi ở trên, lỏng ở dưới)'],
        ['Bình dùng một lần', 'Đến 25 kg, có van an toàn; KHÔNG được nạp lại (ở Mỹ vi phạm có thể bị tù đến 10 năm)']
      ] },
      { t: 'warn', x: 'Không bao giờ nạp đầy bình bằng ga lỏng: phải chừa ≥ 20% (tối đa 80% thể tích). Chai 2 lít chỉ chứa tối đa 1,6 lít lỏng; nạp đầy, nhiệt độ tăng là bình nổ. Luôn cân bình trước và sau khi nạp.' },
      { t: 'table', head: ['Ga', 'Màu sơn bình'], rows: [
        ['R11', 'Cam'], ['R12', 'Trắng'], ['R13', 'Xanh nước biển sáng'], ['R22', 'Xanh lá cây'], ['R502', 'Hoàng lan (tím nhạt)'], ['R500', 'Vàng'], ['R717 (NH₃)', 'Màu bạc']
      ] },
      { t: 'tip', x: 'Nhiều nhà sản xuất chỉ ghi ký hiệu mà không theo màu quy ước nên luôn kiểm tra nhãn kỹ, nếu cần phải thử để xác định.' },
      { t: 'h3', x: 'Quy định an toàn khi làm việc với ga' },
      { t: 'list', items: [
        'Phát hiện rò rỉ: mở cửa thông gió trước khi làm bất cứ việc gì. Freon nặng hơn không khí, tích tụ ở sàn và làm giảm oxy (cần ≥ 19,1%; bình thường 21%).',
        'Không để ngọn lửa trần: gặp lửa freon phân hủy thành khí phosgen rất độc.',
        'Đeo kính bảo hộ và găng tay; ga lỏng bắn vào da gây bỏng lạnh — rửa ngay bằng nước và đến bác sĩ.',
        'Không nạp lỏng vào đầu hút máy nén: gây va đập thủy lực phá hỏng máy.',
        'Không dùng bình ga để chứa khí nén; mỗi bình chỉ đựng một loại ga có nhãn rõ.',
        'NH₃ (R717) và SO₂ (R764) rất độc với mắt và phổi.',
        'Dầu lạnh của blốc cháy rất axit, có thể làm cháy da.'
      ] }
    ] },
    { icon: '⛽', title: 'Áp suất đầu đẩy', blocks: [
      { t: 'p', x: 'Áp suất đầu đẩy gần bằng áp suất ngưng tụ nếu bỏ qua tổn thất đường ống: tk = tkk + (15…18 °C) với dàn gió; tk = tw2 + (7…10 °C) với dàn nước.' },
      { t: 'key', x: 'Chênh lệch giữa nhiệt độ ngưng tụ và môi trường càng nhỏ, máy nén càng nhẹ. Ngưng tụ quá cao làm máy nặng nề, năng suất lạnh giảm, điện năng tăng, dầu dễ bị biến chất.' },
      { t: 'tip', x: 'Ví dụ: đồng hồ chỉ 20,7 bar dư → 21,7 bar tuyệt đối → ngưng tụ 55 °C: quá cao so với công thức. Nguyên nhân có thể: có khí không ngưng trong hệ; nạp quá nhiều ga (lỏng ngập dàn ngưng); dàn bẩn trong/ngoài; đường gió nghẹt, quạt quay ngược hoặc yếu; (dàn nước) đường nước nghẹt, bơm yếu.' }
    ] },
    { icon: '🛢️', title: 'Dầu nhớt lạnh và ẩm trong ga', blocks: [
      { t: 'p', x: 'Dầu bôi trơn chi tiết máy nén và làm mát bề mặt ma sát; trong máy freon dầu tuần hoàn cùng ga qua mọi thiết bị rồi về máy nén, nên đường ống phải bố trí sao cho dầu hồi tốt.' },
      { t: 'list', items: [
        'Hàm lượng sáp thấp (sáp tách ra làm tắc tiết lưu); ổn định nhiệt cao; bền hóa học; nhiệt độ lưu động thấp.',
        'Dầu xả ra phải sạch và trong. Dầu đổi màu hoặc có mùi axit là dầu bẩn → thay phin sấy lọc và dầu mới.',
        'Chỉ dùng dầu theo chỉ dẫn nhà chế tạo máy nén; R134a dùng dầu polyester (PO) rất dễ nhiễm ẩm.'
      ] },
      { t: 'h3', x: 'Ẩm – kẻ thù số một' },
      { t: 'list', items: [
        'Đóng băng ở cửa van tiết lưu / ống mao → tắc một phần hoặc hoàn toàn: dàn kém lạnh, máy nén chạy gần như không tải; khi dàn nóng lên băng tan, máy lại chạy, lặp đi lặp lại. Máy điều hòa có nhiệt độ sôi ~5 °C cao hơn điểm đóng băng nên không tắc ẩm.',
        'Ở nhiệt độ cao trong máy nén, ẩm + ga + dầu tạo axit và bùn, ăn mòn, hỏng cách điện, chạm điện, cháy động cơ.'
      ] },
      { t: 'key', x: 'Trước khi nạp ga: sấy khô và hút chân không kỹ; kiểm tra dầu; thay phin sấy lọc khi nghi có ẩm.' },
      { t: 'p', x: 'Mắt ga có núm chỉ báo ẩm đổi màu: xanh lá = khô (dry), vàng = cẩn thận (caution), nâu = ướt (wet). Mức an toàn của mọi ga là 5 ppm. R12 khắt khe nhất vì hòa tan ẩm kém (tủ lạnh ~15 ppm; −7 °C: 17 ppm; −18 °C: 8,3 ppm; −29 °C: 3,8 ppm; −40 °C: 1,7 ppm).' },
      { t: 'table', head: ['', 'R12', 'R22', 'R502'], rows: [
        ['An toàn (khô) ở 24 °C', '< 5 ppm', '< 30 ppm', '< 15 ppm'],
        ['Không an toàn (ướt)', '> 15 ppm', '> 100 ppm', '> 50 ppm']
      ] },
      { t: 'warn', x: 'Khi thay phin và linh kiện, tránh để ẩm ngưng đọng lên bề mặt lạnh: hơ nóng chi tiết lên cao hơn nhiệt độ không khí trước khi tháo.' }
    ] },
    { icon: '🔎', title: 'Nhận biết, thay đổi ga và lượng ga nạp', blocks: [
      { t: 'p', x: 'Hầu hết freon đều thơm nhẹ, chỉ amoniac mới hắc. Cách duy nhất để nhận biết ga là dựa vào áp suất và nhiệt độ bão hòa:' },
      { t: 'steps', items: [
        'Đo áp suất bình, ví dụ 10,8 bar (dư).',
        'Cộng 1,013 bar để ra áp suất tuyệt đối: 11,81 bar.',
        'Đo nhiệt độ bình: 30 °C.',
        'Tra bảng bão hòa: ứng với R22 (11,88 bar ở 30 °C).'
      ] },
      { t: 'warn', x: 'Chỉ đúng khi trong bình/thiết bị có đủ cả hai pha lỏng và hơi (ví dụ dàn ngưng, bình chứa cao áp), vì áp suất – nhiệt độ cân bằng chỉ tồn tại khi có lỏng.' },
      { t: 'p', x: 'Không nên đổi ga của hệ thống: thiết kế đã tối ưu theo ga cũ. Nếu bắt buộc phải đổi, phải tính lại năng suất lạnh và chọn lại van tiết lưu, súc rửa toàn bộ hệ thống thật kỹ (nhất là khi đổi loại dầu) và thay phin sấy lọc mới.' },
      { t: 'p', x: 'Lượng nạp: hệ có van phao hạ áp, van tiết lưu tự động hoặc nhiệt không nhạy với lượng nạp; hệ van phao cao áp và ống mao (tủ lạnh, điều hòa nhỏ) rất nhạy nên phải nạp đúng định lượng. Nếu không cân được, quan sát mắt ga: còn bọt hơi nghĩa là ga thiếu; nạp bổ sung đến khi hết bọt.' }
    ] },
    { icon: '📈', title: 'Đồ thị Mollier (lg p – h)', blocks: [
      { t: 'p', x: 'Đồ thị Mollier (Richard Mollier, 1912) biểu diễn năm thông số trạng thái: áp suất p (trục tung, thang logarit), entanpy h (trục hoành, tuyến tính), nhiệt độ t, entropy s, thể tích riêng v; ngoài ra còn đường độ khô x. Biết hai thông số bất kỳ sẽ xác định duy nhất một điểm (trong vùng hơi ẩm p và t trùng nhau nên chỉ tính một thông số).' },
      { t: 'h3', x: 'Các đường trên đồ thị' },
      { t: 'list', items: [
        '<b>Đường lỏng bão hòa</b> (trái) và <b>hơi bão hòa</b> (phải) gặp nhau tại <b>điểm tới hạn</b>. Bên trái đường lỏng: lỏng quá lạnh; giữa hai đường: hơi ẩm; bên phải đường hơi: hơi quá nhiệt.',
        '<b>Đường nhiệt độ</b> t = const: gần thẳng đứng ở vùng lỏng, nằm ngang trong vùng hơi ẩm (sôi đẳng áp = đẳng nhiệt), dốc xuống ở vùng hơi.',
        '<b>Đường thể tích riêng</b> v = const và <b>entropy</b> s = const: cong lồi đi lên về phía phải (s dốc hơn v); chỉ vẽ ở vùng quá nhiệt.',
        '<b>Đường độ khô</b> x = const: xuất phát từ điểm tới hạn tỏa xuống trong vùng hơi ẩm.'
      ] },
      { t: 'table', head: ['Chất', 'p tới hạn (bar)', 't tới hạn (°C)'], rows: [
        ['Nước', '221,2', '374,0'], ['CO₂', '73,8', '31,0'], ['NH₃', '113,0', '132,4'], ['R22', '49,9', '96,2'], ['Không khí', '37,7', '−140,7']
      ] },
      { t: 'tip', x: 'Muốn hóa lỏng CO₂ phải làm nguội xuống dưới 31 °C; muốn hóa lỏng không khí phải dưới −140,7 °C.' },
      { t: 'h3', x: 'Chu trình lạnh trên đồ thị p–h' },
      { t: 'list', items: [
        '<b>4 → 1 (bay hơi)</b>: đẳng áp (và đẳng nhiệt trong vùng hơi ẩm) – ga lạnh thu nhiệt, thành hơi bão hòa rồi quá nhiệt nhẹ.',
        '<b>1 → 2 (nén)</b>: đẳng entropy – công cơ học làm tăng áp suất và nhiệt độ; h tăng.',
        '<b>2 → 3 (ngưng tụ)</b>: đẳng áp – làm mát hơi quá nhiệt, ngưng thành lỏng (2 → 2′ đẳng áp, 2′ → 3′ đẳng nhiệt), rồi quá lạnh (3′ → 3).',
        '<b>3 → 4 (tiết lưu)</b>: đẳng entanpy – đường thẳng đứng, áp suất và nhiệt độ rơi đột ngột.'
      ] },
      { t: 'key', x: 'Năng suất lạnh riêng q₀ = h₁ − h₄; công nén riêng l = h₂ − h₁; nhiệt thải q<sub>k</sub> = h₂ − h₃ = q₀ + l; hệ số lạnh COP = q₀ / l.' },
      { t: 'widget', name: 'dl-mollier', title: 'Chu trình lạnh trên đồ thị p–h: kéo nhiệt độ bay hơi / ngưng tụ' },
      { t: 'p', x: 'Ví dụ tủ lạnh 2 buồng R12: nhiệt độ ngăn đông −18 °C, môi trường 32 °C, bay hơi −23 °C (≈ 1,0 bar), ngưng tụ 49–50 °C (19,4 bar, đồng hồ 12,2 bar dư). Điểm đầu đẩy 95 °C – hơi quá nhiệt; ra khỏi dàn ngưng 50 °C – lỏng bão hòa; sau tiết lưu còn hơi ẩm.' },
      { t: 'tip', x: 'Đối chiếu thông số thực với thông số lý thuyết trên đồ thị cho phép chẩn đoán "bệnh" của máy: ví dụ áp suất đầu đẩy cao bất thường, nhiệt độ hút quá cao...' }
    ] }
  ],
  summary: [
    'Ga lạnh hấp thụ nhiệt khi bay hơi ở áp thấp và thải nhiệt khi ngưng ở áp cao; không có ga lý tưởng.',
    'CFC (R11, R12, R13, R502) đã cấm; HCFC (R22) cấm 2040; HFC (R134a, R410A, R404A, R407C) không phá ozon.',
    'Nhận biết ga: đo áp suất (cộng 1,013 bar) và nhiệt độ lúc có đủ lỏng – hơi rồi tra bảng bão hòa.',
    'Ngưng tụ ≈ môi trường + 15…18 °C; bay hơi ≈ buồng lạnh − 10 °C.',
    'Ẩm gây tắc tiết lưu và sinh axit; dùng phin sấy, hút chân không, mắt ga (xanh=khô, vàng=cẩn thận, nâu=ướt).',
    'Không nạp đầy bình quá 80% bằng lỏng; tránh lửa trần (phosgen); chú ý thông gió.',
    'Mollier: nén đẳng entropy, ngưng đẳng áp, tiết lưu đẳng entanpy, bay hơi đẳng áp; q₀ = h₁ − h₄, l = h₂ − h₁.'
  ],
  cards: [
    ['R12 sôi ở bao nhiêu độ, công thức?', '−29,8 °C, CCl₂F₂ (CFC, đã cấm)'],
    ['R22 sôi ở bao nhiêu độ?', '−40,8 °C, CHClF₂ (HCFC, cấm 2040 ở Việt Nam)'],
    ['R134a thay thế cho ga nào, đi với dầu gì?', 'Thay R12; dầu polyester (PO) rất hút ẩm'],
    ['R502 gồm gì?', '48,8% R22 + 51,2% R115, sôi −45,4 °C'],
    ['CFC, HCFC, HFC khác nhau?', 'CFC: có Clo (phá ozon mạnh); HCFC: thêm H, ít hại hơn; HFC: không Clo'],
    ['Cách nhận biết ga trong bình không nhãn?', 'Đo p (cộng 1,013) và t khi có cả lỏng + hơi, tra bảng bão hòa'],
    ['Nhiệt độ ngưng tụ thường cao hơn không khí?', '15…18 °C (giải nhiệt gió)'],
    ['Nhiệt độ bay hơi thường thấp hơn buồng lạnh?', 'Khoảng 10 ± 2 °C'],
    ['Màu bình R22 và R12?', 'R22: xanh lá cây; R12: trắng'],
    ['Quy tắc nạp bình ga?', 'Tối đa 80% thể tích bằng lỏng, chừa ≥ 20%'],
    ['Màu núm mắt ga: xanh, vàng, nâu?', 'Khô, cẩn thận, ướt'],
    ['Độ ẩm an toàn chung?', '5 ppm'],
    ['Vì sao freon gặp lửa nguy hiểm?', 'Phân hủy thành phosgen rất độc'],
    ['Quá trình tiết lưu trên Mollier?', 'Đẳng entanpy, đường thẳng đứng 3 → 4'],
    ['Quá trình nén trên Mollier?', 'Đẳng entropy 1 → 2'],
    ['Điểm tới hạn là gì?', 'Điểm lỏng và hơi bão hòa trùng nhau; không phân biệt được hai pha'],
    ['Tìm q₀ trên Mollier?', 'q₀ = h₁ − h₄ (hiệu entanpy ra – vào dàn bay hơi)'],
    ['Vì sao không nên đổi loại ga?', 'Hệ thống đã tối ưu theo ga cũ; phải tính lại, súc rửa, thay dầu và phin']
  ],
  quiz: [
    { q: 'Ga nào đã bị cấm dùng từ 1/1/1996 vì phá tầng ozon?', o: ['R134a', 'R12', 'R410A', 'R407C'], a: 1, e: 'R12 là CFC.' },
    { q: 'Ga nào dùng dầu polyester và rất hút ẩm?', o: ['R12', 'R22', 'R134a', 'R502'], a: 2, e: 'R134a đi với dầu PO.' },
    { q: 'Bình ga đo được 10,8 bar (đồng hồ) ở 30 °C có cả lỏng. Tuyệt đối là:', o: ['10,8 bar', '9,8 bar', '11,8 bar', '12,8 bar'], a: 2, e: '10,8 + 1,013 ≈ 11,8 bar → R22 ở 30 °C.' },
    { q: 'Nhiệt độ ngưng tụ dàn giải nhiệt gió so với môi trường:', o: ['Bằng', 'Cao hơn 15–18 °C', 'Thấp hơn 5 °C', 'Cao hơn 40 °C'], a: 1, e: 'tk = tkk + 15…18 °C.' },
    { q: 'Núm mắt ga chuyển nâu nghĩa là:', o: ['Ga khô', 'Ga ẩm/ướt', 'Thừa ga', 'Thiếu ga'], a: 1, e: 'Nâu = wet.' },
    { q: 'Chai ga nạp lỏng tối đa:', o: ['100%', '90%', '80%', '50%'], a: 2, e: 'Chừa ≥ 20% không gian giãn nở.' },
    { q: 'Trên đồ thị p–h, quá trình tiết lưu là:', o: ['Đẳng áp', 'Đẳng entropy', 'Đẳng entanpy', 'Đẳng tích'], a: 2, e: 'h₃ = h₄: đường thẳng đứng.' },
    { q: 'Quá trình nén lý thuyết là đẳng:', o: ['Entanpy', 'Entropy', 'Áp', 'Nhiệt'], a: 1, e: 'Nén đoạn nhiệt: s = const.' },
    { q: 'Nguyên nhân áp suất đầu đẩy cao bất thường, KHÔNG phải là:', o: ['Dàn ngưng bẩn', 'Có khí không ngưng', 'Nạp quá nhiều ga', 'Dàn bay hơi sạch'], a: 3, e: 'Dàn bay hơi sạch không làm tăng áp đầu đẩy.' },
    { q: 'Điều hòa có nhiệt độ sôi 5 °C hầu như không bị tắc ẩm vì:', o: ['Ga khô', '5 °C cao hơn điểm đóng băng', 'Không có phin', 'Dùng R22'], a: 1, e: 'Nước không đóng băng ở cửa tiết lưu.' }
  ],
  match: [
    ['R22', 'HCFC, cấm 2040'],
    ['R12', 'CFC, sôi −29,8 °C'],
    ['R134a', 'Dầu PO, thay R12'],
    ['Tiết lưu', 'Đẳng entanpy'],
    ['Mắt ga vàng', 'Cẩn thận ẩm'],
    ['q₀', 'h₁ − h₄'],
    ['Điểm tới hạn', 'Lỏng và hơi hòa làm một']
  ]
});
