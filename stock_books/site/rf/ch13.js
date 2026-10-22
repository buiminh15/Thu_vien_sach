// Chương 13 – Retrofit (chuyển đổi môi chất). Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 148–163 (PDF 156–171). Đã lược tên hãng.
window.RF_CH = window.RF_CH || {};
RF_CH[13] = { n: 13, title: 'Retrofit (chuyển đổi môi chất)', en: 'Retrofit', part: 'II', dir: 'ch13', pdf: [156, 171],
  intro: 'Khi CFC và HCFC bị loại bỏ, thiết bị lạnh/điều hòa đang dùng chúng phải được thay mới hoặc “retrofit” sang môi chất thay thế. Chương này nói về retrofit nói chung, vấn đề dầu bôi trơn (POE), các loại retrofit, quy trình thực tế, thay dầu từng bước, phiếu dữ liệu, nhãn thiết bị và bảng dữ liệu các môi chất.',
  terms: [['Retrofit', 'Chuyển đổi môi chất (cải tạo thiết bị để dùng môi chất khác)'], ['Drop-in', 'Thay thẳng (đổi môi chất, không sửa hệ thống)'], ['ODS', 'Chất làm suy giảm tầng ozone'], ['Mineral oil', 'Dầu khoáng'], ['POE (polyol ester)', 'Dầu tổng hợp POE'], ['PAG (polyalkylene glycol)', 'Dầu tổng hợp PAG'], ['Flushing', 'Súc rửa (xả sạch)'], ['Desiccant filter (drier)', 'Phin lọc ẩm / chất hút ẩm'], ['Elastomer', 'Vật liệu đàn hồi (gioăng, o-ring)'], ['Miscibility', 'Khả năng hòa tan lẫn nhau (của dầu và môi chất)'], ['Crankcase', 'Cacte máy nén'], ['Oil sight glass', 'Kính soi dầu'], ['Safety group', 'Nhóm an toàn môi chất'], ['GWP / ODP', 'Tiềm năng nóng lên toàn cầu / suy giảm ozone']],
  sections: [
    { title: 'Lời mở đầu: retrofit là gì', en: 'Preface', pg: [156], blocks: [
      { t: 'p', x: 'Cùng với việc loại bỏ CFC và HCFC, thiết bị lạnh và điều hòa đang chạy bằng CFC/HCFC cuối cùng sẽ phải được <b>thay thế bằng thiết bị mới</b> hoặc được <b>retrofit</b> sang môi chất thay thế.' },
      { t: 'key', x: '<b>Retrofit</b> là quá trình làm cho thiết bị đang dùng môi chất ODS <b>chạy được bằng môi chất không phải ODS</b>, mà <b>không ảnh hưởng lớn tới hiệu suất</b> và <b>không phải sửa đổi đáng kể</b> thiết bị, bảo đảm thiết bị hiện có chạy được đến hết vòng đời kinh tế. Khác với thay thế, <b>chỉ một số bộ phận</b> của hệ thống có thể phải thay.' },
      { t: 'p', x: 'Xem các bảng “dữ liệu môi chất” ở cuối chương.' }
    ] },
    { title: 'Retrofit nói chung: thay đổi và vấn đề', en: 'Retrofit in General', pg: [156], blocks: [
      { t: 'h', x: 'Các thay đổi liên quan', en: 'Involved changes' },
      { t: 'p', x: 'Một retrofit điển hình có thể gồm một hoặc nhiều thay đổi sau:' },
      { t: 'list', items: ['<b>Môi chất</b>', '<b>Dầu bôi trơn</b>', '<b>Phin lọc ẩm</b> (chất hút ẩm)', '<b>Van tiết lưu</b>', '<b>Máy nén</b> (hộp số, tốc độ, motor)', '<b>Vật liệu cách nhiệt và làm kín, vật liệu đàn hồi</b> (elastomer)', 'Với <b>máy làm lạnh nước ly tâm</b>: hệ thống xả khí (purge), cánh quạt/hộp số'] },
      { t: 'warn', x: '<b>Các vấn đề của retrofit CFC → HFC:</b>' },
      { t: 'list', items: ['Nghiên cứu cho thấy tiêu thụ năng lượng từ <b>giảm 1% đến tăng 7%</b> so với CFC-12.', '<b>Khó tìm dầu bôi trơn phù hợp:</b> HFC-134a có độ hòa tan rất thấp, và <b>dầu khoáng không hòa tan tốt trong HFC-134a</b>.', '<b>Dầu hồi về máy nén kém</b> → có thể hỏng máy nén.', '<b>Bám bẩn van tiết lưu và bề mặt dàn trao đổi nhiệt</b> → giảm hiệu suất hệ thống.'] }
    ] },
    { title: 'Dầu bôi trơn cho môi chất thay thế', en: 'Lubricants for alternative refrigerants', pg: [157], blocks: [
      { t: 'list', items: ['<b>Dầu polyol ester (POE) phải dùng với môi chất HFC.</b>', 'Hệ thống có sẵn cần <b>quy trình súc rửa dầu</b> vì không tương thích hóa học giữa môi chất và dầu.', 'Hệ thống nạp môi chất retrofit có thể <b>hỏng sớm</b> do phản ứng hóa học giữa <b>clo từ CFC</b> và dầu bôi trơn.'] },
      { t: 'p', x: 'Dầu tổng hợp POE <b>tương thích ngược</b>: có thể dùng với CFC-12, HCFC-22 và CFC-502.' },
      { t: 'h', x: 'Lưu ý quan trọng về dầu', en: 'Important notes for the use of lubricants' },
      { t: 'list', items: ['<b>POE hút ẩm nhiều hơn dầu khoáng.</b>', 'Vì vậy phải <b>xử lý cẩn thận</b> trước khi dùng do trong hệ thống có thể có thêm nước.', '<b>Hút chân không đúng cách là bắt buộc!</b>', 'Có thể cần <b>phin lọc ẩm lớn hơn</b> ở hệ thống đã retrofit sang POE để hút hết nước thừa.', 'POE <b>hòa tan vật liệu mà CFC hoặc dầu khoáng không hòa tan</b>, nên phải <b>kiểm tra phin lọc thường xuyên</b>.'] },
      { t: 'key', x: 'Rất khuyến cáo dùng <b>loại dầu do nhà sản xuất chỉ định</b> để bảo đảm tương thích với mọi bộ phận tiếp xúc.' },
      { t: 'h', x: 'Dầu khoáng còn sót lại', en: 'Residual mineral oil' },
      { t: 'p', x: 'Hàm lượng dầu khoáng còn lại có thể chấp nhận trong hệ thống đã retrofit:' },
      { t: 'table', head: ['Nhiệt độ bay hơi', 'Dầu khoáng còn lại trong hệ thống'], rows: [['Thấp hơn –15 °C', '1 đến 3%'], ['–15 °C đến –5 °C', 'Khoảng 5%'], ['Trên 0 °C', '5 đến 10%']] }
    ] },
    { title: 'Các loại retrofit và kết luận', en: 'Retrofit categories', pg: [158, 159], blocks: [
      { t: 'table', head: ['Loại retrofit', 'Nội dung'], rows: [
        ['<b>Drop-in</b> (thay thẳng)', 'Đổi sang môi chất thay thế <b>không thay đổi gì</b> trong hệ thống. Có thể phải thay dầu khoáng bằng <b>POE/PAG</b> sau khi súc rửa kỹ bằng nitơ khô rồi nạp đúng lượng môi chất drop-in.'],
        ['<b>Retrofit đơn giản/kinh tế</b>', 'Đổi sang môi chất thay thế chỉ cần <b>thay vài bộ phận không tương thích</b> như gioăng, o-ring, phin lọc ẩm. Có thể làm <b>giảm nhẹ hiệu suất hoặc công suất</b> (hoặc cả hai).'],
        ['<b>Tối ưu hệ thống / retrofit kỹ thuật</b>', 'Chuyển sang môi chất thay thế kèm <b>thay các bộ phận chính</b> (máy nén, dàn trao đổi nhiệt, van tiết lưu…) bằng loại mới <b>thiết kế riêng</b> cho môi chất đó.']
      ] },
      { t: 'h', x: 'Kết luận và nhận định', en: 'Conclusions and statements' },
      { t: 'list', items: ['Thiết bị <b>đang hoạt động tốt</b> không nên retrofit cho đến khi <b>phải mở hệ thống để sửa chữa</b>.', 'Hệ thống đang chạy tốt có thể <b>vẫn tiếp tục chạy mà không hại tầng ozone</b>.', 'Với hệ thống RAC <b>cũ</b>, <b>thay mới có thể kinh tế hơn</b> retrofit; thiết bị mới còn <b>tiết kiệm năng lượng hơn</b>.', 'Retrofit có <b>hai loại chi phí</b>: <b>nhân công</b> và <b>linh kiện cần thay</b>.', 'Khi tính chi phí, <b>việc thay dầu</b> theo lựa chọn môi chất có thể rất quan trọng. Hệ thống có đường ống dài, nhiều dàn bay hơi và phụ kiện (bình tách dầu, bình tích lỏng) phải được <b>súc rửa bằng dầu dự định dùng</b> cho đến khi đạt hàm lượng dầu khoáng còn lại cho phép.', '<b>Cơ hội tốt để retrofit</b> là kết hợp với <b>bảo dưỡng định kỳ</b>.', 'Cân nhắc retrofit khi <b>nguồn CFC khan hiếm</b> do nước đó cấm nhập khẩu CFC và không còn CFC.'] }
    ] },
    { title: 'Quy trình retrofit thực tế', en: 'The Practical Retrofit Process', pg: [159, 160, 161], blocks: [
      { t: 'h', x: 'Thu thập thông tin cần thiết', en: 'Required data information collection' },
      { t: 'list', items: ['Loại môi chất hiện có.', 'Loại và tên hãng của mọi bộ phận hệ thống: máy nén (cụm máy nén–dàn ngưng), dàn bay hơi, dàn ngưng…', 'Cỡ bình chứa lỏng.', 'Loại và tên hãng các thiết bị điều khiển chính.', 'Loại và tên hãng các thiết bị điều khiển phụ.', 'Kích thước và chiều dài đường ống.', 'Chênh lệch độ cao giữa máy nén, dàn bay hơi và dàn ngưng.', 'Đặc điểm riêng của thiết bị hiện có.', 'Số liệu hệ thống đã đo khi đang chạy: nhiệt độ bay hơi và ngưng tụ, số liệu điện, nhiệt độ phòng/môi trường cần làm lạnh.', 'Lịch sử sự cố của hệ thống (đặc biệt là <b>cháy máy nén</b>).'] },
      { t: 'flow', title: 'Sơ đồ quy trình retrofit hệ thống CFC hiện có', en: 'Retrofit process flow', items: ['Retrofit hệ thống CFC hiện có', 'Cô lập máy nén', 'Xả dầu khoáng', 'Nạp lại bằng dầu thay thế', 'Chạy hệ thống', 'Xả dầu', 'Kiểm tra nhiễm dầu (khoáng)'], branch: ['Nếu > 5%: quay lại “Cô lập máy nén” và lặp lại súc rửa/thay dầu', 'Nếu < 5%: nạp lại bằng dầu thay thế → thu hồi môi chất CFC → nạp môi chất thay thế'] },
      { t: 'h', x: 'Nạp môi chất', en: 'Refrigerant charging' },
      { t: 'p', x: 'Với <b>hỗn hợp HFC</b>, chỉ rút <b>pha lỏng</b> từ bình nạp. Khi đã rút lỏng khỏi bình, có thể nạp vào hệ thống ở dạng <b>lỏng hoặc hơi</b> tùy ý. Dùng bộ đồng hồ hoặc van tiết lưu để làm lỏng bay hơi thành hơi nếu cần.' },
      { t: 'warn', x: '<b>Bình chứa môi chất phải được kiểm tra rò rỉ</b>, nếu không thành phần môi chất có thể bị thay đổi. Hệ thống lạnh và điều hòa <b>phải dán nhãn rõ ràng sau chuyển đổi</b> để tránh trộn lẫn môi chất về sau.' },
      { t: 'list', items: ['Nạp môi chất thay thế vào hệ thống. <b>Cẩn thận không nạp quá đầy!</b>', '<b>75% lượng nạp CFC</b> là điểm khởi đầu.'] },
      { t: 'p', x: 'Lượng nạp tối ưu thay đổi theo thiết kế và điều kiện vận hành, nhưng với đa số hệ thống, lượng nạp tốt nhất là <b>75–90% khối lượng nạp ban đầu</b>.' },
      { t: 'p', x: 'Khởi động hệ thống và <b>chờ điều kiện ổn định</b>. Nếu thiếu môi chất, thêm từng lượng nhỏ (vẫn rút lỏng từ bình) cho đến khi hệ thống đạt điều kiện mong muốn.' },
      { t: 'warn', x: 'Cố nạp <b>đến khi kính soi trong</b> có thể gây <b>nạp quá đầy</b>.' },
      { t: 'p', x: 'Có thể phải <b>điều chỉnh các công tắc áp suất</b> để duy trì điều kiện vận hành đúng, ví dụ:' },
      { t: 'list', items: ['Bộ điều chỉnh áp suất dàn bay hơi', 'Công tắc áp suất đóng/ngắt (cut-in/cut-out)', 'Công tắc áp suất điều khiển quạt dàn ngưng', 'Điều khiển áp suất đầu đẩy (head pressure)', 'Bộ điều chỉnh áp suất cacte', 'Các loại khác'] },
      { t: 'p', x: 'Do HFC và POE <b>hòa tan dầu tốt hơn</b>, hãy <b>kiểm tra mức dầu trong cacte máy nén</b> và hỏi nhà sản xuất máy nén về dòng điện định mức phù hợp. Dùng <b>phiếu số liệu retrofit</b> ở cuối chương để ghi dữ liệu.' },
      { t: 'h', x: 'Lưu ý quan trọng', en: 'Important notes' },
      { t: 'warn', x: 'Vì <b>mọi hỗn hợp đều chứa ít nhất một thành phần dễ cháy</b>, phải có biện pháp thích hợp để <b>tránh không khí lọt vào hệ thống</b>. Điểm bắt lửa có thể bị dịch chuyển nguy hiểm khi áp suất cao và có nhiều không khí. Ngoài ra, <b>không được thử áp bằng hỗn hợp không khí/môi chất</b>.' },
      { t: 'warn', x: '<b>Không dùng “khí nén xưởng” để thử áp!</b> Dùng <b>nitơ khô, không có oxy</b>.' }
    ] },
    { title: 'Thay dầu: xả dầu', en: 'Practical Issues – oil change (drainage)', pg: [162, 163, 164], blocks: [
      { t: 'p', x: '<b>Thay dầu (xả dầu):</b>' },
      { t: 'steps', items: ['Kiểm tra hệ thống có rò rỉ không và sửa nếu cần.', 'Cô lập máy nén bằng chức năng <b>pump down</b> hoặc đóng các van chặn của máy nén.', 'Nếu cần, thu hồi lượng môi chất còn lại bằng kỹ thuật thu hồi phù hợp.', 'Mở cổng nối dầu ở cacte máy nén.', 'Luồn một ống đồng mềm <b>6 mm</b> xuống tận đáy cacte.', 'Bịt lỗ mở bằng băng keo hoặc gioăng cao su và giữ ống đồng.', 'Cho <b>một lượng nhỏ nitơ áp suất thấp</b> vào cacte.', 'Dầu sẽ bị <b>đẩy</b> vào bình chứa riêng.', '<b>Xử lý dầu</b> (là chất thải nhiễm bẩn) theo cách thân thiện với môi trường.'] },
      { t: 'step', figs: ['162_1', '162_2'], cap: 'Hình 2: Thay dầu bằng nitơ khô', title: 'Thay dầu bằng nitơ khô', en: 'Oil change with dry Nitrogen', x: 'Nitơ khô nén vào cacte đẩy dầu ra qua ống đồng 6 mm.', callouts: ['Nitơ khô', 'Máy nén', 'Ống đồng 6 mm'] },
      { t: 'step', figs: ['163_1', '163_2'], cap: 'Hình 3: Quy trình thay dầu; Hình 4: Cổng nối dầu', title: 'Quy trình xả dầu và cổng nối dầu', en: 'Oil changing procedure', x: '<ul><li>Cấp nitơ và xả dầu</li><li>Dầu bị nhiễm bẩn</li><li>Ví dụ về cổng nối dầu (oil support connection)</li></ul>' },
      { t: 'h', x: 'Xả dầu từ máy nén kín', en: 'Oil draining from a hermetic compressor' },
      { t: 'step', figs: ['164_1'], cap: 'Hình 5: Xả dầu khỏi máy nén kín', title: 'Xả dầu máy nén kín', en: 'Oil drainage from hermetic compressor', x: '<ul><li><b>Tháo máy nén</b></li><li><b>Lật ngược</b> máy nén</li><li>Xả dầu qua <b>ống hút hoặc ống xử lý</b></li><li>Nạp lại <b>một lượng nhỏ dầu POE (150 ml)</b> rồi <b>lắc máy nén</b></li><li>Xả nốt phần dầu còn lại</li></ul>' }
    ] },
    { title: 'Thay dầu: nạp dầu mới', en: 'Oil change (refill)', pg: [164, 165], blocks: [
      { t: 'p', x: '<b>Thay dầu (nạp lại):</b>' },
      { t: 'steps', items: ['Nối <b>bơm chân không</b> vào van chặn đường hút.', 'Luồn đầu tự do của cụm ống đồng 6 mm/ống mềm xuống <b>đáy lon dầu POE</b>.', 'Bật bơm chân không.', 'Dầu được <b>hút vào máy nén</b> do áp suất thấp trong cacte.', 'Quan sát mức dầu qua kính soi dầu của máy nén, nhưng <b>nạp cùng thể tích với lượng đã xả</b>.', 'Dừng dầu chảy.', '<b>Đo lượng dầu đã nạp.</b>', '<b>Hút chân không</b> máy nén.', 'Mở các van chặn của máy nén.', '<b>Chạy máy nén.</b>', 'Kiểm tra rò rỉ hệ thống.'] },
      { t: 'step', figs: ['164_2', '164_3'], cap: 'Hình 6: Thay dầu bằng bơm chân không', title: 'Nạp dầu bằng bơm chân không', en: 'Oil change with vacuum pump', x: 'Bơm chân không nối vào van chặn đường hút; dầu từ lon được hút vào cacte qua ống đồng 6 mm.', callouts: ['Máy nén', 'Ống đồng 6 mm', 'Kính soi dầu'] },
      { t: 'warn', x: 'Vì <b>dầu POE mới rất dễ hút ẩm</b>, chỉ dùng <b>lon dầu nhỏ</b>. <b>Không cất giữ lon POE đã mở</b> để dùng lần sau.' },
      { t: 'step', figs: ['165_1'], cap: 'Hình 7: Quy trình nạp dầu (chi tiết)', title: 'Nạp dầu – ví dụ 1', en: 'Oil filling process (example 1)', x: '<ul><li>Nối bơm chân không vào <b>cổng dịch vụ của van chặn đường hút máy nén</b></li><li>Cụm ống mềm nạp dầu POE</li></ul>' },
      { t: 'step', figs: ['165_2'], cap: 'Hình 8: Quy trình nạp dầu', title: 'Nạp dầu – ví dụ 2', en: 'Oil filling process (example 2)', x: '<ul><li>Bơm chân không</li><li>Cụm ống mềm vào cacte</li><li>Lon dầu POE</li><li>Cân</li><li>Máy thu hồi</li></ul>' }
    ] },
    { title: 'Phiếu số liệu retrofit và nhãn thiết bị', en: 'Retrofit Data Sheet, Equipment Label', pg: [166, 167], blocks: [
      { t: 'p', x: 'Dùng <b>phiếu số liệu retrofit</b> (Bảng 2 của sách) để ghi lại dữ liệu <b>trước (cũ) và sau (mới)</b> retrofit:' },
      { t: 'table', head: ['Nhóm', 'Các mục (ghi cả cột “cũ” và “mới”)'], rows: [
        ['<b>Công ty dịch vụ & khách hàng</b>', 'Tên, địa chỉ, điện thoại/fax, số đăng ký; tên khách hàng, địa chỉ, người liên hệ'],
        ['<b>Thiết bị / máy nén</b>', 'Loại hệ thống, hãng, model, số seri; loại máy nén, hãng, model, số seri'],
        ['<b>Số liệu vận hành (cũ / mới)</b>', 'Loại môi chất; lượng nạp môi chất; loại dầu; lượng dầu; áp suất hút; áp suất đẩy; nhiệt độ đường hút; nhiệt độ đường đẩy; nhiệt độ môi trường; nhiệt độ phòng/môi trường làm lạnh; điểm ngắt LP; điểm ngắt HP'],
        ['<b>Số liệu điện</b>', 'Điện áp nguồn; dòng điện máy nén'],
        ['<b>Số liệu khác</b>', 'Đường kính và chiều dài ống đẩy, ống lỏng, ống hút…'],
        ['<b>Ký tên</b>', 'Kỹ thuật viên, khách hàng, ngày']
      ] },
      { t: 'h', x: 'Nhãn thiết bị sau retrofit', en: 'Retrofit equipment label' },
      { t: 'p', x: 'Sau retrofit phải <b>dán nhãn</b> lên thiết bị (Bảng 3), ví dụ:' },
      { t: 'key', x: '<b>Đã chuyển đổi sang môi chất HFC-R134a.</b> Hệ thống này <b>chỉ dùng với HFC-R134a và dầu tổng hợp</b>.' },
      { t: 'p', x: 'Cùng các mục: công ty, tên kỹ thuật viên, địa chỉ/điện thoại, số đăng ký; <b>lượng nạp môi chất</b>; <b>lượng dầu (cũ)</b> và <b>lượng dầu (mới)</b>; người thực hiện retrofit, ngày retrofit, chữ ký.' }
    ] },
    { title: 'Bảng dữ liệu môi chất', en: 'Refrigerant Data', pg: [168, 169, 170, 171], blocks: [
      { t: 'p', x: 'Các bảng dưới đây (nguyên bản của sách) liệt kê môi chất theo nhóm. <b>Giải nghĩa cột:</b>' },
      { t: 'table', head: ['Tiêu đề cột trong bảng', 'Ý nghĩa'], rows: [['Type', 'Loại (CFC, HCFC, HFC, HC…)'], ['R-Number', 'Ký hiệu môi chất (R-12, R-134a…)'], ['Chemical formula / common name', 'Công thức hóa học / tên thông dụng'], ['ODP', 'Tiềm năng suy giảm tầng ozone (CFC-11 = 1)'], ['GWP 100yr', 'Tiềm năng nóng lên toàn cầu trong 100 năm (CO₂ = 1)'], ['Safety group', 'Nhóm an toàn (độc tính / khả năng cháy)']] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> “Safety group” theo phân loại kiểu ASHRAE/ISO: chữ <b>A</b> = độc tính thấp, <b>B</b> = độc tính cao hơn; số <b>1</b> = không cháy, <b>2</b> = cháy yếu, <b>3</b> = cháy mạnh. Ví dụ A1: không cháy, độc tính thấp (R-134a); A3: rất dễ cháy (propan R-290).' },
      { t: 'step', figs: ['168_c'], cap: 'Bảng: CFC (đã loại bỏ – Nghị định thư Montreal); HCFC đơn chất (đang loại bỏ – Montreal); HFC đơn chất (chịu kiểm soát của Nghị định thư Kyoto)', title: 'CFC, HCFC đơn chất và HFC đơn chất', en: 'CFCs, pure HCFC, pure HFC', x: 'Ba nhóm: <b>CFC</b> (R-11, R-12, R-13, R-113… đã loại bỏ theo Montreal); <b>HCFC đơn chất</b> (R-22, R-123, R-124, R-142b… đang loại bỏ); <b>HFC đơn chất</b> (R-134a, R-125, R-32, R-143a… chịu kiểm soát theo Nghị định thư Kyoto vì GWP cao).' },
      { t: 'step', figs: ['169_c'], cap: 'Bảng: Hỗn hợp HCFC (đang loại bỏ – Montreal)', title: 'Hỗn hợp HCFC', en: 'HCFC blends', x: 'Các hỗn hợp chứa HCFC, đang được loại bỏ theo Montreal.' },
      { t: 'step', figs: ['170_c'], cap: 'Bảng: Hỗn hợp HFC (chịu kiểm soát của Nghị định thư Kyoto)', title: 'Hỗn hợp HFC', en: 'HFC blends', x: 'Các hỗn hợp HFC (R-404A, R-407C, R-410A, R-507…), chịu kiểm soát theo Nghị định thư Kyoto.' },
      { t: 'step', figs: ['171_c'], cap: 'Bảng: Hydrocacbon, hỗn hợp hydrocacbon và môi chất tự nhiên (áp dụng quy định an toàn của từng địa phương)', title: 'Hydrocacbon và môi chất tự nhiên', en: 'Hydrocarbons, HC blends, natural refrigerants', x: 'Hydrocacbon (propan R-290, iso-butan R-600a…), hỗn hợp hydrocacbon và môi chất tự nhiên (CO₂ R-744, amoniac R-717…). <b>Áp dụng quy định an toàn của từng địa phương</b> vì dễ cháy/độc.' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Retrofit khác thay thế thiết bị ở điểm nào?', o: ['Retrofit thay toàn bộ hệ thống', 'Chỉ một số bộ phận có thể cần thay', 'Retrofit không cần đổi môi chất', 'Không khác gì'], a: 1, e: 'Mục tiêu: dùng thiết bị đến hết vòng đời kinh tế.' },
        { q: 'Dầu nào phải dùng với môi chất HFC?', o: ['Dầu khoáng', 'Dầu POE', 'Dầu thực vật', 'Không cần dầu'], a: 1, e: 'POE hút ẩm mạnh nên phải hút chân không kỹ, dùng lon nhỏ.' },
        { q: 'Điểm bắt đầu khi nạp môi chất retrofit là bao nhiêu % lượng CFC?', o: ['25%', '75%', '110%', '150%'], a: 1, e: 'Thường tối ưu 75–90% khối lượng nạp ban đầu.' },
        { q: 'Khi retrofit hàm lượng dầu khoáng còn lại > 5% thì làm gì?', o: ['Bỏ qua', 'Quay lại xả dầu và súc rửa thay dầu', 'Nạp thêm môi chất', 'Tắt máy mãi mãi'], a: 1, e: 'Theo sơ đồ quy trình retrofit.' },
        { q: 'Không được dùng khí nào để thử áp lực hệ thống?', o: ['Nitơ khô', '“Khí nén xưởng” (shop-air, có oxy)', 'Cả hai đều được', 'Heli'], a: 1, e: 'Hỗn hợp không khí/môi chất dễ cháy; chỉ dùng nitơ khô không oxy.' },
        { q: 'Vì sao nên dùng lon dầu POE nhỏ và không cất lon đã mở?', o: ['Rẻ hơn', 'POE rất dễ hút ẩm', 'POE bay hơi', 'POE đông đặc'], a: 1, e: 'Ẩm trong hệ thống gây hỏng.' }
      ] }
    ] }
  ] };
