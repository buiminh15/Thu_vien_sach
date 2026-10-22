// Chương 7 – Hàn đồng (Brazing). Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 81–89 (PDF 89–97).
window.RF_CH = window.RF_CH || {};
RF_CH[7] = { n: 7, title: 'Hàn đồng (Brazing)', en: 'Brazing, the Process', part: 'II', dir: 'ch07', pdf: [89, 97],
  intro: 'Mối hàn đồng tốt thì bền, kín và chịu được rung động, nhiệt độ thay đổi. Chương này dạy 8 bước hàn ống đồng và phụ kiện, vì sao phải thổi khí nitơ và cách kiểm tra chất lượng mối hàn.',
  terms: [['Brazing', 'Hàn đồng (hàn cứng, > 450 °C)'], ['Soldering', 'Hàn thiếc (hàn mềm, < 450 °C)'], ['Filler metal / rod', 'Kim loại hàn / que hàn'], ['Flux', 'Chất trợ dung (thuốc hàn)'], ['Swarf', 'Phoi, mạt kim loại'], ['Burr', 'Ba via'], ['Deburrer / reamer', 'Dụng cụ cạo ba via / doa ống'], ['Wheel cutter', 'Dao cắt ống (cutter)'], ['Oxide scale', 'Vảy oxit'], ['Sludge', 'Cặn bùn'], ['Purge', 'Thổi sạch (xả khí)'], ['Torch', 'Mỏ hàn'], ['Capillary', 'Mao dẫn (khe hẹp hút kim loại hàn)'], ['CP filler (Cu-P)', 'Que hàn đồng–phốt pho']],
  sections: [
    { title: 'Lời mở đầu', en: 'Preface', pg: [89], blocks: [
      { t: 'p', x: 'Hàn đồng (brazing) và hàn thiếc (soldering) là hai phương pháp nối ống đồng và phụ kiện phổ biến nhất.' },
      { t: 'p', x: 'Khi các công nghệ và thực hành tốt hiện đại cùng các quy định được áp dụng cho ngành lạnh và điều hòa không khí, <b>tiêu chuẩn kỹ thuật duy nhất</b> trong lĩnh vực này là <b>HÀN ĐỒNG (BRAZING)</b>.' },
      { t: 'key', x: 'Mối hàn đồng tốt thì <b>chắc, bền và kín</b>. Cần hàn đồng để có mối nối chịu được rung động, nhiệt độ và ứng suất do chu kỳ nóng–lạnh.' },
      { t: 'p', x: 'Lý thuyết và kỹ thuật cơ bản của hàn thiếc và hàn đồng là như nhau cho mọi đường kính ống đồng. Chỉ khác ở <b>kim loại hàn</b> và <b>lượng nhiệt, thời gian</b> cần để hoàn thành một mối nối.' },
      { t: 'table', head: ['Phương pháp', 'Nhiệt độ', 'Ghi chú'], rows: [
        ['<b>Hàn thiếc</b> (soldering)', 'dưới 450 °C (840 °F)', ''],
        ['<b>Hàn đồng</b> (brazing)', 'trên 450 °C (840 °F) nhưng dưới điểm nóng chảy của kim loại nền', 'Phần lớn thực hiện ở 600–815 °C (1100–1500 °F)']
      ] },
      { t: 'p', x: 'Hàn đồng bằng <b>que hàn đồng–phốt pho (CP)</b> là phương pháp ưu tiên cho các mối nối không tháo rời. <b>Không cần thuốc hàn (flux)</b> vì phốt pho bay hơi sẽ loại bỏ lớp oxit đồng. Thuốc hàn có thể làm bẩn môi trường bên trong ống và phải được làm sạch sau khi hàn.' },
      { t: 'key', x: '<b>Thổi khí nitơ làm khí bảo vệ</b> (lưu lượng rất thấp trong ống khi hàn) là cách phổ biến để chống oxy hóa.' },
      { t: 'h', x: 'Thổi sạch đường ống môi chất bằng nitơ khô khi hàn', en: 'Purging refrigerant pipelines whilst brazing with dry Nitrogen' },
      { t: 'p', x: 'Khi nung đồng trong không khí (có oxy), <b>oxit hình thành trên bề mặt ống</b>. Điều này rất có hại cho hoạt động lâu dài của hệ thống lạnh, nhất là <b>hệ thống bôi trơn của máy nén</b>. Vảy oxit bên trong ống dẫn môi chất gây vấn đề khi môi chất và dầu bắt đầu tuần hoàn: môi chất có tác dụng “cọ rửa” làm bong vảy khỏi thành ống, vảy bị cuốn đi khắp hệ thống và tạo thành <b>cặn bùn (sludge)</b>.' },
      { t: 'p', x: 'Có thể dễ dàng ngăn oxit hình thành khi hàn: cho <b>nitơ chảy chậm qua đường ống</b> trong lúc đang gia nhiệt.' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> hãy hình dung nitơ như một “tấm chăn khí trơ” phủ bên trong ống: không có oxy thì đồng nóng không thể bị gỉ đen. Đó là lý do mối hàn có nitơ nhìn bên trong vẫn sáng bóng (hình 17).' }
    ] },
    { title: '8 bước hàn ống đồng và phụ kiện', en: 'Basic steps for brazing', pg: [90], blocks: [
      { t: 'p', x: 'Các kỹ thuật hàn đồng nói trên là tiêu chuẩn được chấp nhận trong ngành lạnh và điều hòa không khí. Các bước cơ bản:' },
      { t: 'warn', x: 'Luôn tuân thủ các quy định an toàn riêng! (xem thêm chương An toàn)' },
      { t: 'order', title: '🎯 Sắp xếp đúng thứ tự 8 bước hàn', items: ['Đo và cắt ống', 'Cạo ba via (doa ống)', 'Làm sạch', 'Lắp ráp và cố định', 'Thổi khí nitơ', 'Gia nhiệt', 'Đưa que hàn', 'Làm nguội và làm sạch'] }
    ] },
    { title: 'Bước 1–3: cắt, cạo ba via, làm sạch', en: 'Measuring, cutting, reaming', pg: [91, 92], blocks: [
      { t: 'step', figs: ['91_1'], cap: 'Hình 1: Cắt ống', title: 'Cắt ống', en: 'Cutting tube', x: 'Dùng <b>dao cắt ống (wheel cutter)</b> thay vì cưa sắt để tránh phoi lọt vào trong ống.', ref: 'Dụng cụ ống (TT), tr. 5, hình 1' },
      { t: 'step', figs: ['91_2'], cap: 'Hình 2: Cạo ba via', title: 'Cạo ba via bên trong', en: 'Removing internal burrs', x: 'Có thể dùng <b>dụng cụ cạo ba via, dao doa hoặc giũa tròn</b> để loại bỏ ba via bên trong ống.', ref: 'TT, tr. 6, hình 3' },
      { t: 'step', figs: ['91_3'], cap: 'Hình 3: Xử lý tiếp bằng giũa', title: 'Giũa hoàn thiện', en: 'Further processing with file', x: 'Ngăn không cho <b>phoi</b> lọt vào ống và vào bộ phận lắp ghép.' },
      { t: 'step', figs: ['92_1'], cap: 'Hình 4: Làm sạch bề mặt', title: 'Làm sạch bề mặt', en: 'Cleaning the surfaces', x: 'Làm sạch bề mặt bằng <b>miếng chà nhám nhựa</b>. Tránh để hạt bụi hoặc phoi rơi vào trong ống.', ref: 'TT, tr. 6, hình 4' },
      { t: 'step', figs: ['92_2'], cap: 'Hình 5: Làm sạch phụ kiện bằng chổi', title: 'Làm sạch phụ kiện', en: 'Cleaning the fitting', x: 'Làm sạch bên trong phụ kiện bằng <b>chổi đúng cỡ</b>.', ref: 'TT, tr. 6, hình 4' },
      { t: 'step', figs: ['92_3'], cap: 'Hình 6: Lắp ống vào phụ kiện', title: 'Lắp ráp', en: 'Assembly', x: 'Lắp ống và phụ kiện (hoặc ống đã nong) vào nhau và bảo đảm <b>độ sâu lồng khớp đúng</b>.' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> kim loại hàn nóng chảy được <b>hút vào khe hở rất nhỏ</b> giữa ống và phụ kiện nhờ hiện tượng mao dẫn (capillary). Vì vậy bề mặt phải sạch và độ lồng khớp đủ sâu — nếu bẩn hoặc lồng quá nông, kim loại hàn sẽ không ngấm đều (xem hình 16).' }
    ] },
    { title: 'Bước 4–5: thổi nitơ và chỉnh mỏ hàn', en: 'Purge, nitrogen flow, torch adjustment', pg: [93], blocks: [
      { t: 'h', x: 'Thổi sạch ống', en: 'Purge tubes' },
      { t: 'p', x: 'Thổi sạch cặn ra khỏi ống trước khi hàn. Dùng <b>nitơ khô</b> để thổi.' },
      { t: 'step', figs: ['93_1'], cap: 'Hình 7: Cho nitơ chảy qua ống', title: 'Cho nitơ chảy qua ống', en: 'Apply Nitrogen flow', x: '<p>Ngăn oxit hình thành trên mặt trong ống. Khi môi chất đã tuần hoàn trong hệ thống, <b>vảy oxit bên trong ống</b> có thể gây ra sự cố nghiêm trọng.</p><p>Cho nitơ chảy <b>chậm</b> qua đường ống, <b>đầu kia của ống để hở ra khí quyển</b> để không tạo áp suất.</p><p>Lưu lượng khoảng <b>1–2 lít/phút</b>. Có thể cảm nhận dễ dàng lưu lượng này trên <b>mu bàn tay làm ẩm</b>.</p>', callouts: ['Ống dẫn nitơ'], ref: 'TT, tr. 15, hình 19' },
      { t: 'step', figs: ['93_2'], cap: 'Hình 8: Chỉnh mỏ hàn', title: 'Chỉnh ngọn lửa mỏ hàn', en: 'Torch (flame) adjustment', x: 'Chỉnh mỏ hàn cho ngọn lửa <b>hơi thiếu oxy (lửa “khử” nhẹ)</b>.', callouts: ['Ngọn lửa xanh', 'Phần “lông vũ” xanh lá'], ref: 'TT, tr. 13 hình 15; tr. 14 hình 16' },
      { t: 'warn', x: 'Chỉ châm lửa mỏ hàn bằng <b>bật lửa an toàn</b>!' }
    ] },
    { title: 'Bước 6–8: gia nhiệt, đưa que hàn, làm nguội', en: 'Heating, filler, cooling', pg: [94, 95, 96], blocks: [
      { t: 'step', figs: ['94_1'], cap: 'Hình 9: Gia nhiệt', title: 'Gia nhiệt', en: 'Apply heat', x: 'Gia nhiệt <b>đều cả ống lẫn phụ kiện</b> bằng cách di chuyển mỏ hàn quanh mối nối, để nung đều trước khi đưa kim loại hàn (que hàn).' },
      { t: 'step', figs: ['94_2'], cap: 'Hình 10: Đưa que hàn', title: 'Đưa kim loại hàn', en: 'Apply filler', x: 'Khi vùng nung dần chuyển sang màu <b>đỏ anh đào (không phải đỏ sáng)</b>, đưa que hàn vào bằng cách <b>chạm nhẹ đầu que vào vai của phụ kiện</b>. Cẩn thận <b>không làm ống quá nóng</b>!', ref: 'TT, tr. 15, hình 18' },
      { t: 'step', figs: ['94_3'], cap: 'Hình 11: Chi tiết que hàn', title: 'Hoàn thành mối hàn', en: 'Complete joint', x: 'Để hoàn thành mối hàn, quanh vai phụ kiện phải thấy <b>một vòng kim loại hàn đều</b>.', callouts: ['Que hàn'] },
      { t: 'step', figs: ['95_1'], cap: 'Hình 12: Ngừng gia nhiệt', title: 'Ngừng gia nhiệt', en: 'Remove the heat', x: 'Ngừng nung cho đến khi hợp kim hàn nóng chảy đông đặc lại có màu <b>nâu đen nhạt (khoảng 10–15 giây)</b>.' },
      { t: 'h', x: 'Hoàn tất hàn', en: 'Finish brazing' },
      { t: 'list', items: ['Sau khi hàn xong, mối nối thường được <b>để nguội trong không khí</b>.', '<b>Tắt dòng nitơ.</b>', 'Nếu cần có thể làm nguội mối nối bằng <b>giẻ ướt</b>.'] },
      { t: 'step', figs: ['95_2'], cap: 'Hình 13: Bôi thuốc hàn', title: 'Hàn đồng thau với ống đồng', en: 'Brass to copper tube brazing', x: 'Tổ hợp vật liệu này cần dùng <b>thuốc hàn (flux)</b>, ví dụ loại <b>tan trong nước</b>. Bôi một lượng nhỏ thuốc hàn lên đầu ống và mặt trong phụ kiện. Tránh để thuốc hàn tràn vào trong ống và phụ kiện vì cặn thuốc phải được làm sạch sau khi hoàn thành.' },
      { t: 'step', figs: ['96_1', '96_2'], cap: 'Hình 14–15: Đầu nối đồng thau và hàn đầu nối đồng thau', title: 'Hàn đầu nối đồng thau', en: 'Brass adapter', x: '<p>Quy trình về cơ bản giống hàn đồng–đồng, chỉ khác là lúc đầu <b>tập trung nhiều nhiệt hơn vào phụ kiện đồng thau</b> để đưa nó lên nhiệt độ hàn.</p><p>Cẩn thận <b>không nung quá nóng</b> phụ kiện: chỉ cần màu <b>đỏ xỉn</b>.</p><p>Dùng <b>que hàn có hàm lượng bạc (Ag) cao hơn</b>.</p>', ref: 'TT, tr. 15, hình 18' }
    ] },
    { title: 'Nâng cao kỹ năng: cắt mối hàn để kiểm tra', en: 'Improve your Skills', pg: [97], blocks: [
      { t: 'p', x: 'Hãy <b>cắt dọc một mối hàn</b> có phụ kiện để xem kim loại hàn ngấm vào khe mao dẫn của phụ kiện như thế nào.' },
      { t: 'step', figs: ['97_1'], cap: 'Hình 16: Mối hàn chữ T đồng bị cắt để xem bên trong', title: 'Mức ngấm của kim loại hàn', en: 'Penetration of solder', x: '<p>Hai vùng được chỉ ra trên hình: kim loại hàn <b>ngấm tốt (hoàn hảo)</b> và kim loại hàn <b>ngấm chưa đủ</b>.</p>', callouts: ['Kim loại hàn ngấm tốt (hoàn hảo)', 'Kim loại hàn ngấm chưa đủ'] },
      { t: 'step', figs: ['97_2'], cap: 'Hình 17: Ví dụ hàn có khí nitơ bảo vệ', title: 'Hàn có khí nitơ bảo vệ', en: 'Example of Nitrogen protective brazing', x: '<p>Mối hàn thẳng đồng–đồng <b>có nitơ</b> (phía trên): bên trong sạch, sáng.</p><p>Mối hàn thẳng đồng–đồng <b>không có nitơ</b> (phía dưới): bên trong bị <b>oxy hóa đen</b>.</p>', callouts: ['Hình thành oxit (OXIDE FORMATION)'] }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Hàn đồng (brazing) khác hàn thiếc (soldering) ở nhiệt độ nào?', o: ['Dưới 450 °C', 'Trên 450 °C nhưng dưới điểm nóng chảy kim loại nền', 'Dưới 100 °C', 'Bằng điểm nóng chảy của đồng'], a: 1, e: 'Hàn đồng ở khoảng 600–815 °C.' },
        { q: 'Vì sao phải thổi nitơ qua ống khi hàn?', o: ['Để ống nguội nhanh', 'Để chống hình thành oxit bên trong ống', 'Để tăng áp suất', 'Để thay thuốc hàn'], a: 1, e: 'Vảy oxit sẽ bong ra, tạo cặn bùn và hại hệ thống bôi trơn máy nén.' },
        { q: 'Lưu lượng nitơ khi hàn khoảng bao nhiêu?', o: ['10–20 lít/phút', '1–2 lít/phút', '100 lít/phút', 'Không cần chảy'], a: 1, e: 'Rất thấp, đầu kia của ống để hở để không tăng áp.' },
        { q: 'Que hàn nên được đưa vào khi vùng nung có màu gì?', o: ['Đỏ sáng chói', 'Đỏ anh đào (không phải đỏ sáng)', 'Vẫn còn màu đồng', 'Trắng'], a: 1, e: 'Đỏ sáng nghĩa là đã quá nóng.' },
        { q: 'Hàn đồng thau với ống đồng cần gì thêm?', o: ['Chỉ cần nhiều nhiệt hơn', 'Thuốc hàn (flux) tan trong nước và que hàn nhiều bạc hơn', 'Không cần nitơ', 'Nung phụ kiện đồng trước'], a: 1, e: 'Và tập trung nhiệt ban đầu vào phụ kiện đồng thau.' }
      ] }
    ] }
  ] };
