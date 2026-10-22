// Chương 10 – Tủ lạnh gia dụng dùng môi chất HC. Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 104–120 (PDF 112–128).
// Đã lược tên hãng thiết bị; các đoạn lặp lại chương 9 được rút gọn.
window.RF_CH = window.RF_CH || {};
RF_CH[10] = { n: 10, title: 'Tủ lạnh gia dụng dùng môi chất HC', en: 'Domestic Refrigeration HC', part: 'II', dir: 'ch10', pdf: [112, 128],
  intro: 'Hydrocacbon (HC) như R-600a, R-290 được dùng rộng rãi trong tủ lạnh hiện đại nhưng <b>dễ cháy khi trộn với không khí</b>. Chương này nêu quy tắc an toàn và quy trình sửa chữa riêng cho HC: không lửa trần, thông gió, xả môi chất qua ống thoát ra ngoài, thổi nitơ, hút chân không, nạp theo khối lượng và bịt kín ống xử lý bằng bấm ép.',
  terms: [['HC (hydrocarbon)', 'Môi chất hydrocacbon (R-600a, R-290…)'], ['Flammable', 'Dễ cháy'], ['Vent line', 'Ống xả (ống thoát môi chất ra ngoài an toàn)'], ['Piercing plier', 'Kẹp chọc thủng'], ['4-valve manifold', 'Bộ đồng hồ đo áp 4 van'], ['Charging cylinder', 'Bình nạp môi chất'], ['Pinch-off plier', 'Kìm bóp (kẹp bẹp) ống'], ['Stopper device', 'Cơ cấu bịt (nút bịt) đầu ống'], ['Electronic leak detector', 'Máy dò rò điện tử'], ['Blowing process', 'Quá trình thổi (bằng nitơ)'], ['Rating plate', 'Nhãn thông số kỹ thuật'], ['Hermetic compressor', 'Máy nén kín']],
  sections: [
    { title: 'Lời mở đầu: vì sao HC và cần chú ý gì', en: 'Preface', pg: [112], blocks: [
      { t: 'p', x: 'Hydrocacbon (HC) được dùng rộng rãi trong các thiết bị lạnh hiện đại (hệ <b>gia dụng và thương mại nhỏ dùng ống mao</b>). Trong tương lai gần, CFC — nhất là để <b>bảo dưỡng</b> — sẽ không còn mua được. Trong sản xuất mới, <b>CFC-R12 phần lớn được thay bằng HFC-R134a và HC-R600a</b>. HC sẽ ngày càng quan trọng vì phần lớn khí chứa flo có tác động lớn đến nóng lên toàn cầu.' },
      { t: 'warn', x: '<b>Môi chất HC dễ cháy khi trộn với không khí và gặp lửa</b>, do đó chỉ nên dùng trong thiết bị đáp ứng các yêu cầu an toàn theo quy định.' },
      { t: 'p', x: 'Muốn bảo dưỡng và sửa chữa hệ thống HC, nhân viên dịch vụ <b>phải được đào tạo đầy đủ</b> để xử lý môi chất dễ cháy: hiểu về dụng cụ, linh kiện chu trình lạnh, môi chất, các quy định liên quan và biện pháp an toàn khi sửa chữa.' },
      { t: 'p', x: 'Môi chất phải được <b>cất giữ và vận chuyển trong bình đã được phê duyệt</b>, tốt nhất là <b>bình nhôm 450 g</b> (tối đa hai bình trên xe dịch vụ). Nói chung, máy nén thay ra còn dư môi chất (không chỉ máy nén dùng HC) phải <b>bịt kín trước khi vận chuyển</b>.' },
      { t: 'step', figs: ['112_1'], cap: 'Hình 1: Bộ nạp môi chất HC', title: 'Bộ nạp môi chất HC', en: 'HC Refrigerant charging set', x: 'Bộ nạp gồm: <b>bộ giảm áp</b>, <b>bình nạp HC-R600a</b> và <b>cân điện tử</b> (để nạp theo khối lượng).', callouts: ['Bộ giảm áp', 'Bình nạp HC-R600a', 'Cân điện tử'] }
    ] },
    { title: 'Lưu ý quan trọng về an toàn khi dùng HC', en: 'Important Note', pg: [113], blocks: [
      { t: 'warn', x: 'Vì lý do an toàn, <b>giới hạn thực tế 8 g/m³ môi chất hydrocacbon</b> không được vượt quá trong không gian kín hoặc phòng.' },
      { t: 'key', x: '<b>HC nặng hơn không khí.</b> Nồng độ (khi môi chất thoát ra) luôn <b>cao nhất ở sát sàn</b>. Không xả môi chất gần <b>tầng hầm, cống rãnh</b>… Khu vực làm việc phải luôn <b>thông gió đủ</b>.' },
      { t: 'p', x: 'Để tránh mọi tình huống nguy hiểm, phải <b>tránh lửa trần</b>. Cách tốt nhất khi sửa chữa thiết bị gia dụng là dùng <b>mối nối bấm ép</b> (xem chương 11) thay vì hàn.' },
      { t: 'p', x: '<b>Nitơ khô</b> đóng vai trò quan trọng trong bảo dưỡng và sửa chữa hệ thống:' },
      { t: 'list', items: ['Thổi (làm sạch) hệ thống lạnh', 'Thử rò rỉ', 'Loại bỏ chỗ tắc cục bộ (bụi bẩn hoặc cặn)'] },
      { t: 'h', x: 'Tóm tắt – kỹ thuật viên cần', en: 'Abstract' },
      { t: 'list', items: ['Hiểu rõ các nguy hiểm liên quan đến môi chất HC dễ cháy.', '<b>Không có nguy cơ tia lửa</b> gần khu vực làm việc.', '<b>Không hút thuốc, không lửa trần</b> hay nguồn nhiệt khác. Vì vậy <b>ưu tiên không hàn</b> trên hệ thống.', 'Thiết bị điện dùng khi sửa <b>không được phát tia lửa</b>.', 'Bố trí <b>thông gió tốt</b> nơi làm việc.', 'Không để môi chất chảy vào cửa hầm, phòng thấp, cống thoát nước… vì HC nặng hơn không khí.', 'Tuân thủ quy định an toàn về <b>xử lý, cất giữ và vận chuyển</b> môi chất cháy được áp dụng ở từng nước.'] }
    ] },
    { title: 'Các bước đầu tiên (tương tự chương 9)', en: 'First Steps', pg: [114, 115], blocks: [
      { t: 'step', figs: ['114_1'], cap: 'Hình 2: Quan sát một mạch môi chất', title: 'Đánh giá chu trình lần đầu', en: 'First system cycle evaluation', x: '<p>Trước khi mở chu trình kín, hãy quan sát bằng mắt, tay, tai để xác định lỗi.</p><ol><li>Sự truyền nhiệt ở <b>dàn ngưng</b></li><li>Nhiệt độ <b>phin lọc</b></li><li>Mức ồn <b>máy nén</b></li><li>Nhiệt tỏa ra từ <b>máy nén</b></li><li><b>Băng giá</b> ở dàn bay hơi</li><li><b>Năng suất</b> máy nén</li></ol><p><b>Gợi ý:</b> thiếu môi chất → đầu vào dàn ngưng nóng, đầu ra lạnh; dàn bay hơi đóng băng hoặc máy nén yếu → truyền nhiệt rất thấp.</p>' },
      { t: 'step', figs: ['114_2'], cap: 'Hình 3: Tuần hoàn không khí quanh tủ đông', title: 'Đặt tủ lạnh/tủ đông', en: 'Placing a fridge/freezer', x: 'Đặt tủ với <b>khoảng trống đủ</b> để lưu thông không khí; dàn ngưng <b>sạch bụi</b>, không bị che; <b>tránh nguồn nhiệt</b>; vệ sinh dàn ngưng định kỳ.' },
      { t: 'step', figs: ['115_1'], cap: 'Hình 4: Đo nhiệt độ tủ đông', title: 'Đo nhiệt độ bên trong', en: 'Freezer temperature measuring', x: 'Dùng nhiệt kế thường và cốc nước. Dàn bay hơi <b>không được đóng băng dày</b>. Kiểm tra <b>băng giá vừa đủ</b> và <b>gioăng cửa khít</b> (hơ bằng máy sấy tóc những chỗ chưa khít).', ref: 'MI, tr. 47, hình 11 (4)' },
      { t: 'step', figs: ['115_2'], cap: 'Hình 5: Đặt cảm biến', title: 'Đo nhiệt độ đóng/ngắt', en: 'Sensor positioning', x: 'Gắn cảm biến nhiệt kế điện tử vào kẹp giữ bầu cảm biến thermostat để đo nhiệt độ đóng/ngắt. Kiểm tra <b>đèn tắt khi đóng cửa</b>.', ref: 'MI, tr. 47, hình 11 (1–2)' },
      { t: 'step', figs: ['115_3'], cap: 'Hình 6: Dải điều chỉnh nhiệt độ', title: 'Chỉnh thermostat', en: 'Temperature adjustment range', x: 'Chỉnh thermostat <b>cao hơn một chút so với vị trí giữa</b> (ví dụ vị trí 4 trên thang 7; 2,5 trên thang 4). Thermostat có ngắt không? So sánh nhiệt độ ngắt/đóng với số liệu nhà sản xuất.' }
    ] },
    { title: 'Mở chu trình và xả môi chất HC ra ngoài', en: 'Refrigerant Cycle Opening', pg: [116, 117, 118], blocks: [
      { t: 'key', x: 'Muốn hệ thống kín chạy đúng và bền, <b>lượng tạp chất (ẩm, khí lạ, bụi bẩn) phải giữ ở mức tối thiểu</b>. Trước khi sửa cần mở chu trình, hãy <b>chẩn đoán chính xác và loại trừ các lỗi khác</b>.' },
      { t: 'order', title: '🎯 Sắp xếp đúng thứ tự thu hồi/xả môi chất HC', items: ['Mở cửa sổ/cửa và kéo ống xả ra ngoài', 'Đặt kẹp chọc thủng vào ống xử lý để nối đồng hồ', 'Kẹp thêm kẹp chọc thủng lên phin lọc', 'Nối ống hút bơm chân không với kẹp, ống xả với cửa xả bơm', 'Hút chân không lần 1 (khoảng 5 mbar)', 'Thổi nitơ áp thấp (< 1 bar) qua toàn bộ hệ thống'] },
      { t: 'step', figs: ['116_1'], cap: 'Hình 7: Đặt kẹp chọc thủng', title: 'Nối đồng hồ vào ống xử lý', en: 'Placement of piercing plier', x: 'Để <b>nối đồng hồ và đọc áp suất/nhiệt độ</b>, đặt <b>kẹp chọc thủng nối ống môi chất</b> lên ống xử lý (ống nạp) ở máy nén. Tiếp tục phân tích khi <b>máy nén đang chạy</b>.', ref: 'RHC, tr. 24, hình 9' },
      { t: 'step', figs: ['117_1'], cap: 'Hình 8: Đặt thêm kẹp chọc thủng', title: 'Kẹp thêm trên phin lọc, kéo ống xả ra ngoài', en: 'Placement of additional piercing plier', x: '<p>Để <b>xả môi chất</b>, đặt thêm một kẹp chọc thủng trực tiếp trên bề mặt phin lọc (phía cao áp).</p><p><b>Ống xả (vent line)</b> được đưa ra ngoài và nối với <b>“không khí tự do”</b>, ví dụ qua cửa sổ mở.</p><p>Ống xả phải có <b>đường kính trong tối thiểu 10 mm (3/8″)</b>.</p>', ref: 'RHC, tr. 24, hình 9' },
      { t: 'step', figs: ['117_2'], cap: 'Hình 9: Cửa sổ mở làm đường xả', title: 'Đưa đầu ống xả ra ngoài an toàn', en: 'Open window as vent line', x: '<p>Đầu ống được luồn qua <b>cửa sổ mở</b>, thành một “vent line” để đưa môi chất cháy được ra <b>khu vực an toàn bên ngoài</b>.</p><ul><li>Mở cửa sổ hoặc cửa</li><li>Ống xả</li></ul>', ref: 'RHC, tr. 22' },
      { t: 'warn', x: 'Nếu <b>không phải thay máy nén</b>, hãy khử khí dầu trong máy nén bằng cách cho máy chạy khoảng <b>một phút</b>. <b>Không bao giờ khởi động máy nén khi đang ở chân không</b> — có nguy cơ hỏng động cơ.' },
      { t: 'step', figs: ['118_1', '118_2'], cap: 'Hình 10: Thổi nitơ', title: 'Thổi nitơ qua hệ thống', en: 'Nitrogen flush', x: '<p>Sau đó có thể <b>thổi nitơ</b> qua hệ thống. Nitơ cuốn đi phần môi chất còn sót và xả ra khí quyển (qua ống xả).</p><p>Sau khi thổi xong, <b>đóng bộ giảm áp bình nitơ</b> và tháo ống xả ở phin lọc. Rồi:</p><ul><li>Nối <b>ống xả</b> với <b>cửa xả của bơm chân không</b>.</li><li>Nối ống hút của bơm với van trên phin lọc.</li></ul>', ref: 'RHC, tr. 24, hình 9; TT, tr. 15, hình 19' }
    ] },
    { title: 'Thu hồi HC bằng bơm chân không và ống xả', en: 'HC refrigerant recovery with vacuum pump and vent line', pg: [119, 120], blocks: [
      { t: 'step', figs: ['119_c'], cap: 'Hình 11: Thu hồi môi chất HC bằng bơm chân không và ống xả', title: 'Thu hồi/xả HC an toàn', en: 'Recovery with vacuum pump and vent line', x: '<ul><li><b>Ống hút</b> nối với kẹp chọc thủng trên phin lọc</li><li><b>Ống hút</b> nối với cửa hút của bơm chân không</li><li><b>Ống xả</b> nối với cửa xả của bơm chân không</li><li>Ống xả đưa ra <b>khu vực bên ngoài</b></li></ul>', ref: 'RHC tr. 24 hình 9; RRRE tr. 37 hình 7; RHC tr. 22' },
      { t: 'warn', x: 'Hệ thống lúc này sẵn sàng <b>hút chân không lần đầu</b>: hút đến áp suất <b>khoảng 5 mbar</b>. Ống xả phải có <b>đường kính trong tối thiểu 10 mm (3/8″)</b>! Ở cửa xả bơm <b>không được có áp suất dư đáng kể</b> vì có thể làm hỏng bơm. Kết thúc lần hút đầu bằng cách <b>tắt bơm</b>.' },
      { t: 'h', x: 'Quá trình thổi', en: 'The Blowing Process' },
      { t: 'p', x: 'Mở van bộ giảm áp bình nitơ và <b>thổi toàn bộ cụm</b> gồm hệ thống lạnh, kẹp chọc thủng, bơm chân không và ống xả bằng <b>áp suất thấp, dưới 1 bar</b>. Điều chỉnh áp suất làm việc bằng van giảm áp và cân bằng áp vào hệ thống.' }
    ] },
    { title: 'Thổi nitơ áp thấp', en: 'Nitrogen blowing process', pg: [121], blocks: [
      { t: 'step', figs: ['121_c'], cap: 'Hình 12: Quá trình thổi nitơ', title: 'Thổi nitơ áp thấp', en: 'Nitrogen blowing process', x: 'Sơ đồ dòng nitơ (các mũi tên vàng) đi qua hệ thống lạnh, bơm chân không và <b>ống xả ra khu vực bên ngoài</b>. Thực hiện ở <b>áp suất thấp (< 1 bar)</b>.', callouts: ['Thổi nitơ bằng áp suất thấp', 'Ống xả ra bên ngoài'] }
    ] },
    { title: 'Tháo phin lọc và thử công suất máy nén', en: 'Removing Filter-Drier / Compressor Capacity Test', pg: [122], blocks: [
      { t: 'p', x: 'Sau khi <b>thổi xong toàn bộ</b> chu trình môi chất, tháo bơm chân không và ống xả.' },
      { t: 'step', figs: ['122_1'], cap: 'Hình 13: Cắt ống mao', title: 'Cắt ống mao', en: 'Cutting of the capillary tube', x: 'Cắt ống mao ở đầu ra phin lọc (cách phin lọc khoảng <b>3 cm</b>). Tránh <b>ba via và biến dạng</b> ống mao.', ref: 'TT, tr. 5, hình 2' },
      { t: 'step', figs: ['122_2'], cap: 'Hình 14: Cắt phin lọc', title: 'Cắt phin lọc', en: 'Cutting of the filter-drier', x: 'Cắt phin lọc bằng dao cắt ống nếu <b>đủ chiều dài ống thép dàn ngưng</b>: lấy đi cả <b>hơi ẩm và cặn</b> cùng phin lọc.', ref: 'TT, tr. 5, hình 1' },
      { t: 'step', figs: ['122_3'], cap: 'Hình 15: Bố trí để thử công suất', title: 'Thử công suất máy nén', en: 'Adjustment for a capacity test', x: 'Nếu nghi <b>công suất máy nén kín giảm</b>, hãy làm <b>thử công suất</b>.', ref: 'MI, tr. 51, hình 18' }
    ] },
    { title: 'Kiểm tra dàn bay hơi và dàn ngưng', en: 'Evaporator and Condenser Check', pg: [123], blocks: [
      { t: 'step', figs: ['123_1', '123_2'], cap: 'Hình 16: Điều chỉnh dòng nitơ', title: 'Thổi nitơ qua dàn bay hơi và dàn ngưng', en: 'Nitrogen flow adjustment', x: '<p>Nối <b>nitơ khô</b> vào van trên ống xử lý. Chỉnh bộ giảm áp <b>tối đa 10 bar</b>. Nitơ đi qua ống xử lý, máy nén, dàn bay hơi (cùng ống mao) và dàn ngưng.</p>', ref: 'RHC, tr. 24, hình 9; TT, tr. 15, hình 19' },
      { t: 'p', x: 'Nitơ thoát ở <b>đầu hở của dàn ngưng</b> và <b>đầu hở của ống mao</b>. <b>Giữ giẻ ở hai đầu hở</b> vì dầu máy nén còn sót có thể văng ra. Việc thổi cũng giúp <b>định vị chỗ tắc</b>.' },
      { t: 'warn', x: 'Lên kế hoạch sửa chữa để hệ thống và các bộ phận mới <b>không phải mở quá 10–15 phút</b>.' },
      { t: 'list', items: ['Chuẩn bị sẵn thiết bị chuyên dụng cần cho việc sửa.', 'Chuẩn bị phụ tùng thay thế cần thiết.', 'Lắp <b>phin lọc dịch vụ lớn hơn</b> phin lọc ban đầu (nếu được, có thêm cổng ống xử lý). Phin lọc phải được <b>giữ kín hoàn toàn cho đến lúc lắp</b>.'] },
      { t: 'p', x: 'Hệ thống lạnh bây giờ được chuẩn bị để lắp bằng <b>hệ nối ống bấm ép</b> (chương 11).' }
    ] },
    { title: 'Thử rò rỉ', en: 'Leak Test', pg: [124, 125], blocks: [
      { t: 'step', figs: ['124_1'], cap: 'Hình 17 (1): Nối đầu nối nhanh', title: 'Nối đầu nối nhanh', en: 'Quick coupler', x: 'Nối <b>đầu nối nhanh</b> vào chu trình môi chất đã chuẩn bị ở <b>cả phía thấp và cao áp</b> bằng khớp nối dịch vụ.', ref: 'TT, tr. 9, hình 8' },
      { t: 'step', figs: ['124_2'], cap: 'Hình 17 (2): Bộ đồng hồ 4 van', title: 'Nối bộ đồng hồ 4 van', en: '4-valve manifold gauge set', x: 'Nối <b>bộ đồng hồ đo áp 4 van</b> vào hệ thống: ① phía thấp áp, ② phía cao áp, ③ nguồn nitơ.', ref: 'RHC, tr. 19, hình 2' },
      { t: 'step', figs: ['124_3'], cap: 'Hình 17: Hệ thống nối để thử rò rỉ', title: 'Nối bình nitơ và nén áp', en: 'Connection system for a leak test', x: '<p>Nối <b>bình nitơ</b> vào cổng giữa của bộ đồng hồ.</p><p>Nén hệ thống bằng <b>nitơ khô</b> từ cả phía cao và thấp áp, tới áp suất hệ thống <b>tối đa 10 bar</b>.</p>', ref: 'TT, tr. 15, hình 19' },
      { t: 'h', x: 'Thử rò rỉ bằng hai cách', en: 'Carry out a leak-test' },
      { t: 'step', figs: ['125_1'], cap: 'Hình 18: Bọt báo chỗ rò', title: 'Cách 1 và cách 2', en: 'Bubble indicating a leak', x: '<ol><li><b>Giữ áp:</b> đóng van, quan sát đồng hồ. Với chỗ rò rất nhỏ, phép thử áp có thể <b>kéo dài đến 24 giờ</b>. <b>Áp suất giảm</b> = có rò.</li><li><b>Nước xà phòng + cọ:</b> bôi lên mọi mối nối, quan sát <b>bọt khí</b>. Có bọt = có rò.</li></ol>', ref: 'MI, tr. 43, hình 5' },
      { t: 'p', x: 'Đưa mọi đường ống vào đúng vị trí một cách cẩn thận (ví dụ các ống nhô ra). Nếu <b>xác định hệ thống không rò</b>, xả nitơ ra khí quyển.' }
    ] },
    { title: 'Hút chân không và nạp môi chất HC', en: 'Evacuation and Charging the System', pg: [125, 126, 127], blocks: [
      { t: 'p', x: 'Hệ thống sẵn sàng cho <b>hút chân không và nạp cuối cùng</b>. Để giữ khí không ngưng và ẩm ở mức tối thiểu, phải hút tới <b>chân không sâu nhất có thể</b> trước khi nạp: <b>0,5 mbar (50 Pa, 375 micron)</b>. Phải kiểm tra bằng <b>đồng hồ chân không</b>.' },
      { t: 'h', x: 'Quy tắc về thời gian hút chân không', en: 'General rule for evacuation time' },
      { t: 'table', head: ['Cách hút', 'Thời gian tối thiểu'], rows: [['<b>Một phía</b>: chỉ ở ống xử lý máy nén', '30 phút'], ['<b>Hai phía</b>: ở ống xử lý máy nén và ống xử lý phin lọc', '15 phút']] },
      { t: 'p', x: 'Kiểm tra độ ổn định của chân không bằng cách <b>đóng van bơm chân không</b>. Nếu kim đồng hồ chân không <b>tụt đáng kể</b>: có thể hệ thống còn rò, hoặc <b>ống nối của thiết bị dịch vụ với tủ chưa khít</b>.' },
      { t: 'step', figs: ['126_1'], cap: 'Hình 19 (1): Nối đầu nối nhanh', title: 'Nối đầu nối nhanh', en: 'Quick coupler', x: 'Nối đầu nối nhanh vào chu trình môi chất ở cả phía thấp và cao áp.', ref: 'TT, tr. 9, hình 8' },
      { t: 'step', figs: ['126_2', '126_4', '126_3'], cap: 'Hình 19: Hút chân không và nạp hai phía', title: 'Thiết bị dùng khi hút chân không và nạp hai phía', en: 'Two side system evacuation and charging', x: '<ul><li><b>Bộ đồng hồ 4 van</b></li><li><b>Bơm chân không</b> có đồng hồ chân không</li><li><b>Bình nạp môi chất HC</b> đặt trên cân</li></ul>', ref: 'RHC, tr. 19, hình 2' },
      { t: 'h', x: 'Quy trình nạp', en: 'Charging process' },
      { t: 'p', x: 'Khi <b>chân không đã ổn định</b>, đóng van đồng hồ chân không và bắt đầu nạp. <b>Lượng môi chất cần nạp</b> ghi bằng <b>gam hoặc oz</b> trên nhãn thông số.' },
      { t: 'steps', items: ['Nạp <b>1/3 tổng lượng</b> môi chất ở <b>dạng hơi</b> vào hệ thống.', '<b>Bật máy nén.</b>', 'Nạp <b>từ từ</b> phần còn lại vào hệ thống.', '<b>Quan sát đồng hồ</b> và kiểm tra tình trạng vận hành của hệ thống.'] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> lượng nạp HC của tủ lạnh gia dụng rất nhỏ (vài chục gam), nên nạp bằng <b>cân điện tử</b> và đúng khối lượng trên nhãn; sai số vài gam đã ảnh hưởng hiệu suất, và nạp quá nhiều HC làm tăng nguy hiểm.' }
    ] },
    { title: 'Bịt kín hệ thống', en: 'Seal the System', pg: [127], blocks: [
      { t: 'step', figs: ['127_1', '127_2', '127_3'], cap: 'Hình 20: Thiết bị bấm ép để bịt kín hệ thống', title: 'Bịt kín ống xử lý', en: 'Pressing equipment for system sealing', x: '<ol><li><b>Bóp ống xử lý hai lần</b> bằng kìm: một lần <b>vuông góc 90°</b> và một lần <b>45°</b> so với ống xử lý.</li><li><b>Tháo kìm bóp</b>.</li><li><b>Bịt ống xử lý bằng cơ cấu bịt (stopper device)</b>.</li></ol><p>Làm tương tự với <b>ống xử lý của phin lọc</b> (nếu có).</p>', ref: 'TT, tr. 7, hình 6' }
    ] },
    { title: 'Kiểm tra hệ thống và thử rò lần cuối', en: 'System check and final leak test', pg: [128], blocks: [
      { t: 'step', figs: ['128_1'], cap: 'Hình 21: Thử rò lần cuối bằng máy dò rò điện tử', title: 'Thử rò lần cuối', en: 'Final leak test with electronic leak detector', x: 'Sau khi nạp xong, kiểm tra <b>cài đặt và chức năng các thiết bị điều khiển</b>. Chạy hệ thống đến khi đạt điều kiện làm việc ổn định. Trong lúc đó <b>ghi lại nhiệt độ và áp suất</b>. Sau khi <b>tháo đồng hồ và ống</b>, phải <b>thử rò lần cuối</b>.', ref: 'MI, tr. 42, hình 2' },
      { t: 'p', x: 'Dùng lại <b>nước xà phòng</b> và/hoặc <b>máy dò rò điện tử</b> (loại dùng được cho HC). Các vị trí thường rò:' },
      { t: 'list', items: ['<b>Đai ốc loe</b>', '<b>Van dịch vụ</b>: bộ làm kín, đầu nối truy cập, chỗ lắp', '<b>Mối hàn đồng bị nứt</b>', '<b>Khúc cong đầu dàn bay hơi bị mục</b>', '<b>Ống cọ xát vào nhau</b>', '<b>Mối hàn sắt trong phụ kiện bị nứt</b>'] },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> với HC, hãy dùng máy dò rò <b>phù hợp môi chất dễ cháy</b> và không phát tia lửa; tuyệt đối không dùng lửa để dò rò.' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Vì sao nồng độ HC nguy hiểm nhất ở sát sàn?', o: ['HC nhẹ hơn không khí', 'HC nặng hơn không khí nên tụ ở sát sàn', 'HC không có mùi', 'HC có màu'], a: 1, e: 'Không xả gần tầng hầm, cống rãnh.' },
        { q: 'Giới hạn thực tế nồng độ HC trong không gian kín?', o: ['1 g/m³', '8 g/m³', '80 g/m³', 'Không giới hạn'], a: 1, e: 'Không được vượt quá 8 g/m³.' },
        { q: 'Ống xả (vent line) cần có đường kính trong tối thiểu?', o: ['2 mm', '10 mm (3/8″)', '30 mm', '1 mm'], a: 1, e: 'Để xả môi chất cháy được ra khu vực an toàn bên ngoài.' },
        { q: 'Thời gian hút chân không tối thiểu khi hút hai phía?', o: ['5 phút', '15 phút', '30 phút', '2 giờ'], a: 1, e: 'Hút một phía cần tối thiểu 30 phút.' },
        { q: 'Quy trình nạp HC đúng là:', o: ['Nạp hết rồi bật máy', 'Nạp 1/3 ở dạng hơi, bật máy nén, nạp phần còn lại từ từ', 'Nạp 100% lỏng khi máy chạy', 'Nạp bằng mắt'], a: 1, e: 'Theo khối lượng ghi trên nhãn thông số.' },
        { q: 'Bịt kín ống xử lý bằng cách nào?', o: ['Chỉ bóp ống một lần', 'Bóp hai lần (90° và 45°) rồi bịt bằng cơ cấu bịt', 'Dán keo', 'Để hở'], a: 1, e: 'Làm tương tự với ống xử lý của phin lọc.' }
      ] }
    ] }
  ] };
