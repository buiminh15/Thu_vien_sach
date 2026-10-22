// Chương 11 – Bấm ép ống (Pressing). Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 121–128 (PDF 129–136).
window.RF_CH = window.RF_CH || {};
RF_CH[11] = { n: 11, title: 'Bấm ép ống (Pressing)', en: 'Pressing, the Process', part: 'II', dir: 'ch11', pdf: [129, 136],
  intro: 'Nối ống bằng bấm ép (đầu nối kim loại–kim loại) là giải pháp thay cho hàn đồng, đặc biệt hợp với tủ lạnh gia dụng, hệ thống dùng môi chất HC dễ cháy và điều hòa nhỏ/vừa. Không cần lửa, nhanh và kín. Chương này mô tả cấu tạo đầu nối, cách lắp từng bước và các lỗi lắp ráp hay gặp.',
  terms: [['Pressed tube connection', 'Mối nối ống bằng bấm ép'], ['Hermetically sealed', 'Kín hoàn toàn (kín khí)'], ['Locking ring', 'Vòng khóa'], ['Joint (fitting)', 'Thân nối'], ['Anaerobic liquid', 'Keo kỵ khí (đông cứng khi thiếu không khí)'], ['Hand assembling tool', 'Dụng cụ bấm ép cầm tay'], ['Working pressure', 'Áp suất làm việc'], ['Tee connector', 'Đầu nối chữ T'], ['Reducer', 'Đầu nối giảm cỡ'], ['Capillary tube', 'Ống mao'], ['Filter-drier', 'Phin lọc ẩm (lọc/hút ẩm)'], ['Leak check', 'Thử rò rỉ'], ['HC (hydrocarbon)', 'Môi chất hydrocacbon (R-600a, R-290…)']],
  sections: [
    { title: 'Lời mở đầu: khi nào dùng mối nối bấm ép', en: 'Preface', pg: [129], blocks: [
      { t: 'p', x: 'Thay cho mối hàn đồng, <b>đặc biệt trong tủ lạnh gia dụng</b> và <b>hệ thống chạy môi chất hydrocacbon</b> (môi chất dễ cháy như <b>R-600a, R-290</b>), cũng như dùng cho <b>điều hòa cỡ nhỏ và vừa</b> và <b>điều hòa ô tô (MAC)</b>, mối nối ống bằng bấm ép là giải pháp <b>an toàn và tin cậy</b>.' },
      { t: 'p', x: 'Công nghệ nối ống bằng bấm ép là phương pháp đã được kiểm chứng để tạo mối nối ống <b>kim loại–kim loại kín hoàn toàn</b> (hermetic).' },
      { t: 'key', x: '<b>Đặc điểm của công nghệ:</b> mối nối kín kim loại–kim loại vĩnh cửu; nối được ống làm từ <b>vật liệu khác nhau</b> không rắc rối; <b>không cần chuẩn bị đặc biệt</b> cho ống; lắp <b>dễ và nhanh</b>.' },
      { t: 'table', head: ['Nội dung', 'Thông số'], rows: [
        ['<b>Áp suất làm việc</b>', '<b>50 bar</b> (tùy vật liệu ống), hệ số an toàn gấp 4'],
        ['<b>Dải nhiệt độ</b>', 'từ <b>–50 °C đến +150 °C</b> (–58 °F đến 302 °F)'],
        ['<b>Vật liệu đầu nối</b>', 'Nhôm và đồng thau'],
        ['Đầu nối đồng thau dòng “00” cho ống từ 3/8″ (9,53 mm) trở lên và mọi cỡ dòng “50”', 'Thường đi kèm khớp nối (adaptor) bằng <b>thép mạ kẽm màu vàng</b>']
      ] },
      { t: 'p', x: 'Việc chọn vật liệu đầu nối <b>phụ thuộc vào vật liệu hai ống cần nối</b>, như bảng dưới.' },
      { t: 'table', head: ['Vật liệu hai ống cần nối', 'Vật liệu đầu nối'], rows: [
        ['Nhôm – Nhôm', 'Nhôm'], ['Nhôm – Đồng', 'Nhôm'], ['Nhôm – Thép', 'Nhôm'],
        ['Đồng – Đồng', 'Đồng thau'], ['Đồng – Thép', 'Đồng thau'], ['Thép – Thép', 'Đồng thau']
      ] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> vì sao nên bấm ép với môi chất HC dễ cháy? Vì <b>không có lửa trần</b> — hàn đồng gần môi chất cháy được rất nguy hiểm. Các hãng sản xuất đầu nối kiểu này có thương hiệu riêng (sách dùng ví dụ của một hãng); kỹ thuật bấm ép thì tương tự.' }
    ] },
    { title: 'Cấu tạo và nguyên lý của đầu nối', en: 'Tube connection coupling', pg: [130, 131], blocks: [
      { t: 'step', figs: ['130_2', '130_3'], cap: 'Hình 2: Đầu nối ống – trái: loại hai phía (dòng 00); phải: loại một phía (dòng 50)', title: 'Hai loại đầu nối', en: 'Series 00 and 50', x: '<p><b>Dòng 00:</b> đầu nối để lắp ráp <b>hai phía</b> (double sided assembly) – nối hai ống với nhau.</p><p><b>Dòng 50:</b> đầu nối để lắp ráp <b>một phía</b> (single sided assembly) – bấm ép ở một đầu, đầu kia là phụ kiện/ren có sẵn.</p>' },
      { t: 'h', x: 'Ví dụ về một đầu nối ống', en: 'Example of a tube connection coupling' },
      { t: 'p', x: 'Một đầu nối ống gồm <b>hai đầu bấm ép</b> và <b>một thân nối hình ống</b> để nhận hai đầu ống. Khi giao hàng, các đầu bấm ép đã được <b>lắp sẵn lên thân nối</b>: đầu lớn của lỗ côn được ép lên phần ngoài của thân nối.' },
      { t: 'step', figs: ['131_1'], cap: 'Hình 3: Đầu nối ống', title: 'Cấu tạo đầu nối', en: 'Tube connection coupling', x: 'Bố trí từ trái sang phải: <b>ống – vòng khóa – thân nối – vòng khóa – ống</b>.', callouts: ['Ống', 'Vòng khóa', 'Thân nối', 'Vòng khóa', 'Ống'] },
      { t: 'p', x: 'Khi lắp, các ống cần nối được <b>đẩy vào đầu thân nối</b>. Dùng <b>dụng cụ bấm ép cầm tay</b> để đẩy các <b>vòng khóa</b> trượt lên thân nối.' },
      { t: 'p', x: 'Nhờ <b>profile côn đặc biệt bên trong</b>, đường kính đầu nối bị thu nhỏ cho tới khi <b>tiếp xúc sát hoàn toàn với mặt ngoài của ống</b> và siết chặt ống lại.' },
      { t: 'step', figs: ['131_2'], cap: 'Hình 4: Đầu nối trước và sau khi bấm ép', title: 'Trước và sau khi lắp', en: 'Before / After Assembly', x: 'Hình trên: <b>trước khi lắp</b> (vòng khóa chưa đẩy). Hình dưới: <b>sau khi lắp</b> (vòng khóa đã đẩy hết vào thân nối, siết ống).', callouts: ['Ống', 'Vòng khóa', 'Thân nối'] }
    ] },
    { title: 'Khuyến nghị an toàn và các loại đầu nối', en: 'Safety recommendations, connection examples', pg: [132, 133, 134], blocks: [
      { t: 'warn', x: 'Dù áp lực kim loại–kim loại rất cao, <b>không phải lúc nào cũng bít kín được các lỗ rỗ sâu và rãnh dọc</b> trên bề mặt, làm giảm độ kín của mối nối.' },
      { t: 'key', x: 'Để an toàn hơn, <b>bề mặt đầu ống phải được thấm ướt bằng keo kỵ khí (anaerobic liquid)</b>. Keo len vào các chỗ gồ ghề và <b>đông cứng</b> ở đó. Thời gian đông phụ thuộc nhiều yếu tố. Chỉ sau khi keo cứng mới được <b>cho chịu áp suất hoặc chân không</b>.' },
      { t: 'step', figs: ['132_1'], cap: 'Hình 5: Keo kỵ khí', title: 'Keo kỵ khí (ví dụ Lokprep 65G)', en: 'Lokprep, anaerobic liquid', x: 'Môi chất <b>điền đầy và làm kín kỵ khí</b>, thành phần chứa methacrylic ester. Đóng chai <b>15 ml hoặc 50 ml</b>.' },
      { t: 'step', figs: ['132_3'], cap: 'Hình 6: Dụng cụ bấm ép cầm tay', title: 'Dụng cụ bấm ép cầm tay', en: 'Hand assembling tool', x: 'Dùng để đẩy các vòng khóa lên thân nối.' },
      { t: 'step', figs: ['132_2'], cap: 'Hình 7: Hộp bộ đầu nối cho ngành lạnh', title: 'Hộp bộ đầu nối', en: 'Assortment box for refrigeration', x: 'Bộ các cỡ đầu nối thường dùng, đựng trong hộp để mang đi hiện trường.' },
      { t: 'h', x: 'Các ví dụ đầu nối', en: 'Connection Examples' },
      { t: 'step', figs: ['133_1'], cap: 'Hình 8: Đầu nối đồng thau', title: 'Đầu nối đồng thau (hai phía)', en: 'Brass connector', x: 'Dùng nối ống từ <b>1,6 đến 11 mm</b>. Vật liệu ống: <b>Cu/Cu; Cu/thép; thép/thép</b>.' },
      { t: 'step', figs: ['133_2'], cap: 'Hình 9: Đầu nối nhôm', title: 'Đầu nối nhôm (hai phía)', en: 'Aluminium connector', x: 'Dùng nối ống từ <b>2 đến 11 mm</b>. Vật liệu ống: <b>Al/Al; Al/Cu; Al/thép</b>.' },
      { t: 'step', figs: ['133_3'], cap: 'Hình 10: Đầu nối giảm cỡ bằng nhôm', title: 'Đầu nối giảm cỡ (nhôm)', en: 'Reducer aluminium', x: 'Đầu nối giảm cỡ hai phía bằng nhôm, vật liệu ống: <b>Al/Al; Al/Cu; Al/thép</b>.' },
      { t: 'step', figs: ['134_1'], cap: 'Hình 11: Đầu nối chữ T', title: 'Đầu nối chữ T (một phía)', en: 'Tee connector', x: 'Bằng đồng thau, nối ống <b>6 đến 28,6 mm</b>. Vật liệu ống: <b>Cu/Cu; Cu/thép; thép/thép</b>.' },
      { t: 'step', figs: ['134_2'], cap: 'Hình 12: Đầu nối chữ T giảm cỡ có luồn ống mao', title: 'Đầu nối chữ T giảm cỡ (luồn ống mao)', en: 'Tee reducer with capillary tube insertion', x: 'Đầu nối chữ T giảm cỡ hai phía bằng đồng thau, ví dụ ống ø 6 mm và ø 2 mm cho nhánh ø 6 mm (<b>luồn ống mao</b>). Dùng cho <b>thiết bị gia dụng</b>: Cu/Cu; Cu/thép; thép/thép.' },
      { t: 'step', figs: ['134_3'], cap: 'Hình 13: Phin lọc ẩm với đầu ống', title: 'Phin lọc ẩm có đầu ống', en: 'Filter-drier with tube ends', x: 'Ví dụ phin lọc ẩm đã có sẵn đầu ống để lắp bằng bấm ép.' }
    ] },
    { title: 'Các bước lắp ống bằng bấm ép', en: 'Assembly of the Tubes', pg: [135], blocks: [
      { t: 'order', title: '🎯 Sắp xếp đúng thứ tự lắp mối nối bấm ép', items: ['Làm sạch bề mặt đầu ống (xoay tròn)', 'Bôi keo kỵ khí lên đầu ống', 'Đẩy ống vào đầu nối đến điểm dừng và xoay 360°', 'Bấm ép vòng khóa bằng dụng cụ cầm tay', 'Thử rò rỉ bằng nitơ khô'] },
      { t: 'step', figs: ['135_1'], cap: 'Hình 14: Làm sạch ống bằng chuyển động xoay', title: 'Làm sạch bề mặt', en: 'Surface cleaning', x: '<p>Trước khi lắp, làm sạch đầu ống bằng <b>miếng chà nhám</b>.</p><p>Để tránh tạo <b>rãnh dọc</b>, hãy chà bằng <b>chuyển động xoay tròn</b> (không chà theo chiều dọc ống).</p>' },
      { t: 'step', figs: ['135_2'], cap: 'Hình 15: Bôi keo kỵ khí', title: 'Bôi keo kỵ khí', en: 'Apply anaerobic liquid', x: 'Đầu các ống phải được <b>phủ một lớp keo kỵ khí</b>.' },
      { t: 'step', figs: ['135_3'], cap: 'Hình 16: Xoay cụm đầu nối', title: 'Xoay cụm nối', en: 'Rotate connection assembly', x: 'Đẩy đầu ống vào đầu nối <b>đến điểm dừng</b>. Để keo phân bố đều, <b>xoay đầu nối 360°</b>.' },
      { t: 'step', figs: ['135_4'], cap: 'Hình 17: Bấm ép mối nối', title: 'Bấm ép vòng khóa', en: 'Press locking rings', x: 'Lắp đầu nối ống bằng <b>dụng cụ bấm ép cầm tay</b>.' }
    ] },
    { title: 'Ví dụ lắp, lỗi lắp ráp và thử rò rỉ', en: 'Examples, assembly faults, leak check', pg: [136], blocks: [
      { t: 'step', figs: ['136_1'], cap: 'Hình 18: Ví dụ đầu nối chữ T', title: 'Ví dụ: đầu nối chữ T', en: 'Example tee connector', x: '<p>Lắp đầu nối chữ T và đầu nối dịch vụ nhanh:</p><ul><li>Đầu nối chữ T</li><li>Đầu nối dịch vụ nhanh (quick service connector)</li></ul>' },
      { t: 'step', figs: ['136_2'], cap: 'Hình 19: Ví dụ lắp máy nén', title: 'Ví dụ: lắp máy nén', en: 'Compressor assembly', x: 'Lắp máy nén bằng các đầu nối bấm ép.' },
      { t: 'step', figs: ['136_3', '136_4', '136_5'], cap: 'Hình 20: Các lỗi lắp ráp', title: 'Lỗi lắp ráp thường gặp', en: 'Assembly faults', x: '<ul><li><b>Vòng khóa chưa được đẩy hết</b> tới cuối.</li><li><b>Ống chưa được đẩy hết</b> vào đầu nối.</li><li><b>Điểm uốn ống quá gần</b> đầu mối nối.</li></ul>' },
      { t: 'h', x: 'Thử rò rỉ lần cuối', en: 'Final Leak Check' },
      { t: 'warn', x: 'Sau khi đã lắp xong mọi đầu nối, hãy <b>thử rò rỉ toàn hệ thống</b>: dùng <b>nitơ khô</b> nén hệ thống đến áp suất tối đa <b>10 bar</b>.' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Vì sao bấm ép phù hợp với hệ thống dùng môi chất HC dễ cháy?', o: ['Rẻ hơn', 'Không cần lửa trần', 'Chịu được nhiệt độ cao hơn hàn', 'Không cần kiểm tra rò rỉ'], a: 1, e: 'Hàn đồng gần môi chất dễ cháy rất nguy hiểm.' },
        { q: 'Mục đích của keo kỵ khí trên đầu ống?', o: ['Bôi trơn ống', 'Lấp các lỗ rỗ và rãnh bề mặt, đông cứng để tăng độ kín', 'Làm mát', 'Chống gỉ bên ngoài'], a: 1, e: 'Chỉ cho chịu áp/chân không sau khi keo đã đông.' },
        { q: 'Cách làm sạch đầu ống đúng:', o: ['Chà dọc theo ống', 'Chà theo chuyển động xoay tròn', 'Dùng dao cạo', 'Không cần làm sạch'], a: 1, e: 'Tránh tạo rãnh dọc làm rò rỉ.' },
        { q: 'Lỗi nào sau đây là lỗi lắp ráp?', o: ['Đẩy ống hết điểm dừng', 'Điểm uốn ống quá gần đầu mối nối', 'Xoay 360° để trải keo', 'Dùng dụng cụ cầm tay'], a: 1, e: 'Cùng với vòng khóa chưa đẩy hết và ống chưa vào hết.' },
        { q: 'Thử rò rỉ sau khi lắp xong bằng khí nào và áp suất tối đa?', o: ['Oxy – 30 bar', 'Nitơ khô – 10 bar', 'Không khí ẩm – 50 bar', 'Môi chất – 20 bar'], a: 1, e: 'Dùng nitơ khô và không vượt quá 10 bar.' }
      ] }
    ] }
  ] };
