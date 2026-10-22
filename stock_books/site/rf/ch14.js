// Chương 14 – An toàn (Safety). Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 164–169 (PDF 172–177).
window.RF_CH = window.RF_CH || {};
RF_CH[14] = { n: 14, title: 'An toàn lao động (Safety)', en: 'Safety', part: 'II', dir: 'ch14', pdf: [172, 177],
  intro: 'Làm việc với thiết bị lạnh/điều hòa luôn có nguy cơ cho sức khỏe. Chương này giới thiệu các biển báo an toàn quan trọng và trang bị bảo hộ lao động. Nên học thuộc chương này trước khi làm các chương thực hành khác.',
  terms: [['Danger', 'Nguy hiểm'], ['Warning sign', 'Biển cảnh báo'], ['Ban sign', 'Biển cấm'], ['Rescue sign', 'Biển cứu hộ / thoát nạn'], ['Commandment sign', 'Biển bắt buộc'], ['Flammable', 'Dễ cháy'], ['Compressed gas', 'Khí nén'], ['Hot surface', 'Bề mặt nóng'], ['Eye shower', 'Vòi rửa mắt khẩn cấp'], ['First aid', 'Sơ cứu'], ['Work gloves', 'Găng tay bảo hộ'], ['Safety glasses', 'Kính bảo hộ'], ['Ear defender', 'Chụp chống ồn'], ['Respirator', 'Mặt nạ lọc bụi'], ['Safety helmet', 'Mũ bảo hộ'], ['Safety shoes', 'Giày bảo hộ'], ['Overalls', 'Quần áo bảo hộ liền thân']],
  sections: [
    { title: 'Lời mở đầu', en: 'Preface', pg: [172], blocks: [
      { t: 'p', x: 'Làm việc với hoặc trên thiết bị lạnh và điều hòa không khí (RAC), máy móc, vật liệu và hóa chất luôn <b>gắn với nhiều rủi ro cho sức khỏe</b> theo nhiều cách khác nhau.' },
      { t: 'p', x: 'Chương này tổng quan về các <b>biển báo</b> và <b>trang phục bảo hộ</b> quan trọng cho người làm trong lĩnh vực này.' },
      { t: 'key', x: 'Công việc chỉ được thực hiện bởi <b>người đã qua đào tạo</b>, được trang bị đầy đủ phương tiện an toàn, và máy móc, dụng cụ phải <b>ở tình trạng tốt, chất lượng tốt</b>.' }
    ] },
    { title: 'Biển cảnh báo (Warnings)', en: 'Warning signs', pg: [172], blocks: [
      { t: 'grid', cols: 3, cap: 'Hình 1: Biển cảnh báo', items: [
        { fig: '172_1', label: 'Nguy hiểm! Môi chất và dầu có thể gây hại khi tiếp xúc da/mắt', en: 'Harmful skin/eye contact with refrigerant and oil' },
        { fig: '172_2', label: 'Nguy hiểm! Môi chất dễ cháy', en: 'Flammable refrigerant' },
        { fig: '172_3', label: 'Nguy hiểm! Điện', en: 'Electricity' },
        { fig: '172_4', label: 'Nguy hiểm! Hít phải khí độc hại', en: 'Inhalation of harmful gases' },
        { fig: '172_5', label: 'Nguy hiểm! Khu vực nguy hiểm', en: 'Hazard area' },
        { fig: '172_6', label: 'Nguy hiểm! Khí nén và bình chịu áp', en: 'Compressed gas and vessel' },
        { fig: '172_7', label: 'Nguy hiểm! Vật nặng treo lơ lửng', en: 'Suspended heavy objects' },
        { fig: '172_8', label: 'Nguy hiểm! Bề mặt nóng', en: 'Hot surfaces' }
      ] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> biển <b>cảnh báo</b> thường là hình <b>tam giác viền vàng/đen</b> – “coi chừng nguy hiểm”. Biển <b>cấm</b> là hình tròn viền đỏ gạch chéo. Biển <b>bắt buộc</b> là hình tròn nền xanh. Biển <b>cứu hộ</b> là hình chữ nhật nền xanh lá.' }
    ] },
    { title: 'Biển cấm và biển cứu hộ', en: 'Bans & Rescue', pg: [173], blocks: [
      { t: 'grid', cols: 2, cap: 'Hình 2: Biển cấm (Bans)', items: [
        { fig: '173_1', label: 'Cấm hút thuốc', en: 'Smoking ban' },
        { fig: '173_2', label: 'Cấm lửa trần', en: 'No open fire' },
        { fig: '173_3', label: 'Chỉ người có thẩm quyền được vào / Không có người ngoài cuộc', en: 'Only authorized persons, no bystanders' },
        { fig: '173_4', label: 'Không sử dụng máy móc ở khu vực ẩm ướt', en: 'Use of machineries not in wet areas' }
      ] },
      { t: 'grid', cols: 2, cap: 'Hình 3: Biển cứu hộ (Rescue)', items: [
        { fig: '173_6', label: 'Chú ý lối thoát hiểm', en: 'Notice escape way' },
        { fig: '173_5', label: 'Chuẩn bị đồ sơ cứu', en: 'Provide First Aid material' },
        { fig: '173_7', label: 'Chuẩn bị dung dịch/vòi rửa mắt', en: 'Provide eye shower fluid' },
        { fig: '173_8', label: 'Ghi nhớ thông tin liên hệ cơ sở y tế gần nhất', en: 'Notice nearest Medical Help contact information' }
      ] },
      { t: 'warn', x: 'Tại nơi làm việc, hãy biết <b>lối thoát hiểm, hộp sơ cứu, vòi rửa mắt và số điện thoại cấp cứu</b> <i>trước</i> khi bắt đầu công việc.' }
    ] },
    { title: 'Biển bắt buộc (Commandments)', en: 'Commandment signs', pg: [174], blocks: [
      { t: 'grid', cols: 2, cap: 'Hình 4: Biển bắt buộc', items: [
        { fig: '174_1', label: 'Mặc quần áo bảo hộ phù hợp', en: 'Wear suitable work clothes' },
        { fig: '174_2', label: 'Đeo găng tay bảo hộ', en: 'Wear protective gloves' },
        { fig: '174_3', label: 'Đeo chụp tai chống ồn', en: 'Wear ear defender' },
        { fig: '174_4', label: 'Đeo kính bảo hộ', en: 'Wear safety glasses' },
        { fig: '174_5', label: 'Đội mũ bảo hộ', en: 'Wear safety helmet' },
        { fig: '174_6', label: 'Mang giày bảo hộ', en: 'Wear safety shoes' },
        { fig: '174_7', label: 'Rút phích điện thiết bị trước khi sửa chữa', en: 'Plug out equipment for service' },
        { fig: '174_8', label: 'Ngắt kết nối máy móc trước khi sửa chữa', en: 'Disconnect machineries for service' }
      ] },
      { t: 'figquiz', title: '🎯 Biển này có nghĩa là gì?', items: [
        { fig: '172_2', a: 'Môi chất dễ cháy' }, { fig: '173_2', a: 'Cấm lửa trần' }, { fig: '174_7', a: 'Rút phích điện thiết bị trước khi sửa chữa' },
        { fig: '173_7', a: 'Vòi rửa mắt khẩn cấp' }, { fig: '172_8', a: 'Bề mặt nóng' }, { fig: '174_4', a: 'Đeo kính bảo hộ' }
      ], opts: ['Môi chất dễ cháy', 'Cấm lửa trần', 'Rút phích điện thiết bị trước khi sửa chữa', 'Vòi rửa mắt khẩn cấp', 'Bề mặt nóng', 'Đeo kính bảo hộ'] }
    ] },
    { title: 'Trang phục bảo hộ: găng tay', en: 'Work gloves', pg: [175], blocks: [
      { t: 'p', x: '<b>Mức bảo vệ tùy thuộc vào công việc cụ thể.</b> Chọn găng theo việc đang làm.' },
      { t: 'grid', cols: 2, cap: 'Hình 5–6: Găng tay bảo hộ', items: [
        { fig: '175_2', label: 'Găng tay lao động thông thường, có hạt cao su chống trượt', en: 'Normal work gloves with rubber knobs' },
        { fig: '175_1', label: 'Găng tay lao động thông thường, lòng bàn tay phủ cao su', en: 'Normal work gloves, inside palm rubber covered' },
        { fig: '175_3', label: 'Găng tay chuyên dùng khi thao tác với môi chất và dầu', en: 'Work gloves for refrigerant and oil handling' },
        { fig: '175_4', label: 'Găng tay dày dùng khi hàn (welding) và hàn đồng (brazing)', en: 'Thick work gloves for welding and brazing' }
      ] }
    ] },
    { title: 'Kính, thiết bị bảo hộ, giày và quần áo', en: 'Safety glasses, devices, shoes, clothes', pg: [176, 177], blocks: [
      { t: 'p', x: '<b>Mức bảo vệ tùy thuộc vào công việc cụ thể.</b>' },
      { t: 'grid', cols: 2, cap: 'Hình 7: Kính bảo hộ', items: [
        { fig: '176_1', label: 'Kính bảo hộ thông thường có che bên hông', en: 'Normal safety glasses with side protection' },
        { fig: '176_2', label: 'Kính bảo hộ che kín toàn bộ vùng mắt', en: 'Normal safety glasses with full cover protection' }
      ] },
      { t: 'grid', cols: 3, cap: 'Hình 8: Thiết bị bảo hộ khác', items: [
        { fig: '176_3', label: 'Chụp tai chống ồn', en: 'Ear defender' },
        { fig: '176_4', label: 'Mặt nạ lọc bụi và bẩn', en: 'Respirator (dust and dirt)' },
        { fig: '176_5', label: 'Mũ bảo hộ', en: 'Safety helmet' }
      ] },
      { t: 'grid', cols: 2, cap: 'Hình 9: Giày bảo hộ', items: [
        { fig: '177_1', label: 'Bảo vệ mũi và gót chân (bằng thép)', en: 'Toe and heel protection (steel)' },
        { fig: '177_2', label: 'Giày bảo hộ (cổ cao và cổ thấp)', en: 'Safety shoes (high and low shaft)' }
      ] },
      { t: 'grid', cols: 3, cap: 'Hình 10: Quần áo bảo hộ', items: [
        { fig: '177_3', label: 'Quần áo liền thân', en: 'Overalls' },
        { fig: '177_4', label: 'Quần lao động thông thường', en: 'Normal work trousers' },
        { fig: '177_5', label: 'Áo khoác lao động', en: 'Work jacket' }
      ] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> chọn trang bị theo việc: <b>hàn đồng</b> → găng dày chịu nhiệt + kính; <b>xả/thu hồi môi chất</b> → găng chống hóa chất lạnh + kính che kín (môi chất lỏng gây bỏng lạnh); <b>môi chất dễ cháy (HC)</b> → tuyệt đối không lửa trần, không hút thuốc.' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Ai được phép thực hiện công việc trên thiết bị lạnh?', o: ['Bất kỳ ai', 'Người đã qua đào tạo, có đủ phương tiện an toàn và dụng cụ tốt', 'Chỉ người lớn tuổi', 'Người có nhiều thời gian'], a: 1, e: 'Đây là nguyên tắc mở đầu chương.' },
        { q: 'Trước khi sửa chữa thiết bị điện cần làm gì?', o: ['Chỉ cần tắt công tắc', 'Rút phích điện / ngắt kết nối máy', 'Đeo găng mỏng', 'Không cần'], a: 1, e: 'Biển bắt buộc: “Plug out equipment for service”.' },
        { q: 'Biển tròn viền đỏ gạch chéo là loại biển nào?', o: ['Cảnh báo', 'Cấm', 'Cứu hộ', 'Bắt buộc'], a: 1, e: 'Ví dụ: cấm hút thuốc, cấm lửa trần.' },
        { q: 'Khi hàn đồng nên dùng loại găng nào?', o: ['Găng vải mỏng', 'Găng dày dùng cho hàn (welding/brazing)', 'Không cần găng', 'Găng cao su y tế'], a: 1, e: 'Mức bảo vệ tùy công việc.' }
      ] }
    ] }
  ] };
