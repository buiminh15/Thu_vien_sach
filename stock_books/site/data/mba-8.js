// Tự học MBA Marketing trong 30 ngày – Chương 8.
BOOK_DATA.mba30.chapters.push({
  n: 8,
  title: 'Toán học dành cho marketing',
  intro: 'Công cụ định lượng của người làm marketing: cây quyết định, thống kê mô tả, dự báo, hồi quy, cỡ mẫu khảo sát, lập kế hoạch hoạt động (Gantt, CPM), lập trình tuyến tính, lý thuyết xếp hàng và thẩm định đầu tư (hoàn vốn, NPV, IRR).',
  sections: [
    { icon: '🔢', title: 'Vì sao cần toán trong marketing?', blocks: [
      { t: 'p', x: 'Phòng IT xử lý dữ liệu, nhưng <b>người làm marketing (thường có MBA)</b> mới là người dùng kỹ thuật phân tích để giải thích dữ liệu và tầm quan trọng của nó. Một con số rời rạc (nhiều nhân viên bán hàng nghỉ, khách phàn nàn tăng) chưa nói lên gì: nó có gần giá trị trung bình, hay nằm ngoài phạm vi dự kiến?' },
      { t: 'list', items: [
        'Các trường: Rotterdam (Nền tảng định lượng), EMLYON (Thống kê trong kinh doanh), MIT Sloan (Dữ liệu, mô hình và quyết định) đều dạy ngay học kỳ đầu.',
        '<b>GMAT</b> (~1.800 trường dùng, 250 USD, 2,5 giờ, điểm TB 500; 550 vào trường kém uy tín hơn, 660 vào phần lớn trường): gồm viết phân tích, số lượng, ngôn ngữ. Nhiều người rớt phần toán; Tuck (Dartmouth) có “trại toán học”.',
        'Mục tiêu của phân tích định lượng: công cụ để quyết định tốt hơn. Xác suất, dự báo và thống kê là những khái niệm “cực kỳ cần thiết”.'
      ] }
    ] },
    { icon: '🌳', title: 'Lý thuyết ra quyết định & Cây quyết định', blocks: [
      { t: 'p', x: '<b>Blaise Pascal</b> (1623–1662) cùng những người khác đặt nền móng xác suất và được coi là cha đẻ lý thuyết ra quyết định dưới điều kiện không chắc chắn – trước đó kết quả được coi là “trong tay thần linh”.' },
      { t: 'steps', items: [
        'Xác định tất cả lựa chọn thay thế.',
        'Đánh giá hậu quả tài chính của từng phương án.',
        'Gán xác suất (mức không chắc chắn) cho từng kết quả.',
        'Tính <b>giá trị kỳ vọng</b> = Σ (lợi nhuận × xác suất) cho mỗi phương án; chọn phương án cao hơn.'
      ] },
      { t: 'mnemo', x: 'Ký hiệu: <b>hình vuông = quyết định</b>, <b>hình tròn = kết quả không chắc chắn</b>.' },
      { t: 'p', x: 'Ví dụ sách: tung sản phẩm mới (10% thành công lời 10 triệu; 40% khá lời 5 triệu; 50% kém lời 1 triệu) → EV = 1 + 2 + 0,5 = <b>3,5 triệu</b>; kết quả trong sách là <b>tân trang sản phẩm cũ</b> cho giá trị kỳ vọng cao hơn.' },
      { t: 'widget', name: 'ev', title: 'Giá trị kỳ vọng của hai phương án' },
      { t: 'tip', x: 'Thực tế phức tạp hơn: có quyết định trung gian (đầu tư mạnh ngay hay marketing thử trước) → thêm “nút” và nhánh cho cây.' }
    ] },
    { icon: '📊', title: 'Thống kê mô tả', blocks: [
      { t: 'p', x: 'Thống kê giúp đánh giá điều ta quan sát là thật hay chỉ nằm trong phạm vi xác suất, và khi chỉ kiểm tra được <b>mẫu</b>, mẫu phải đại diện và đủ lớn. Ví dụ: con số “4,2 triệu camera, cứ 14 người một cái” hoá ra được ngoại suy từ khảo sát một con đường trong một thị trấn.' },
      { t: 'p', x: 'Dữ liệu ví dụ (giá 5 sản phẩm): 30, 40, 10, 15, 10.' },
      { t: 'table', head: ['Thước đo', 'Cách tính', 'Kết quả', 'Khi nào dùng'], rows: [
        ['<b>Trung bình</b>', 'Tổng ÷ số lượng = 105 ÷ 5', '21', 'Kiểm tra nhanh; tập hợp đối xứng'],
        ['<b>Trung vị</b>', 'Giá trị ở giữa khi sắp xếp (10, 10, 15, 30, 40)', '15', 'Phân phối <b>bất đối xứng</b>/có giá trị cực đoan'],
        ['<b>Mode</b>', 'Giá trị xuất hiện nhiều nhất', '10', 'Giá phổ biến nhất khách phải trả'],
        ['<b>Phạm vi</b>', 'Max − Min = 40 − 10', '30', 'Mức phân tán thô'],
        ['<b>Độ lệch chuẩn</b>', 'Căn bậc hai của phương sai', '—', 'Mức biến thiên quanh trung bình']
      ] },
      { t: 'widget', name: 'stats', title: 'Máy tính thống kê mô tả' },
      { t: 'key', x: '<b>Phân phối chuẩn</b> (hình chuông, Gauss): <b>68,2%</b> quan sát nằm trong ±1 độ lệch chuẩn; <b>95,5%</b> trong ±2; <b>99,7%</b> trong ±3. Định lý giới hạn trung tâm: trung bình mẫu tiến về phân phối chuẩn khi mẫu lớn dần. Thăm dò 1.000 người thường có sai số ~4% (“19 lần đúng trong 20”).' }
    ] },
    { icon: '🔮', title: 'Dự báo doanh số', blocks: [
      { t: 'warn', x: '<b>Dự báo ≠ mục tiêu bán hàng</b>. Mục tiêu là điều bạn muốn đạt và định hình chiến lược; dự báo là kết quả có nhiều khả năng xảy ra dựa trên quá khứ — và là động lực cho doanh nghiệp (dòng tiền, giá cổ phiếu, năng lực sản xuất).' },
      { t: 'tabs', items: [
        ['3 thành phần', '<ul><li><b>Xu hướng chính</b>: hướng dài hạn (lên, ngang, xuống).</li><li><b>Yếu tố chu kỳ/mùa vụ</b>: ngắn hạn chồng lên xu hướng (đồ bơi, kem chống nắng tăng mùa hè; thiết bị trượt tuyết ngược lại).</li><li><b>Chuyển động ngẫu nhiên</b>: biến động bất thường không giải thích được.</li></ul>'],
        ['Dùng trung bình', '<p><b>Trung bình động</b>: cộng doanh thu 6 tháng gần nhất, chia 6 → dự báo tháng 7. Hợp thị trường tĩnh, đã trưởng thành.</p><p><b>Trung bình động có trọng số</b>: nhân số liệu gần đây với hệ số lớn hơn vì phản ánh điều kiện hiện tại tốt hơn.</p>'],
        ['Làm mịn & nâng cao', '<p><b>Làm mịn theo cấp số nhân</b>: trọng số giảm theo luỹ thừa với dữ liệu cũ. Còn có Holt, Brown, Box-Jenkins (tự hồi quy trung bình động). Nhà quản lý chỉ cần biết các phương pháp tồn tại và <b>thử – sai</b>: chạy phần mềm với dữ liệu quá khứ, so với thực tế, chọn mô hình sát nhất.</p>']
      ] }
    ] },
    { icon: '📈', title: 'Quan hệ nhân quả: hồi quy tuyến tính', blocks: [
      { t: 'p', x: 'Ví dụ doanh số thịt nướng và nhiệt độ trung bình theo tháng: vẽ <b>đường thẳng vừa khít nhất</b> để ước lượng doanh số tháng sau nếu biết nhiệt độ. “Biến độc lập” (nhiệt độ) và “biến phụ thuộc” (doanh số).' },
      { t: 'list', items: [
        '<b>Hồi quy tuyến tính</b> tính đường thẳng vừa khít nhất.',
        'Kiểm tra mối quan hệ có mạnh/đáng kể: <b>hệ số tương quan</b> (dương hoặc âm đều hữu ích để dự đoán), <b>R bình phương</b>, kiểm định <b>t</b>. Nhà quản lý chỉ cần biết các phương pháp có tồn tại và dùng phần mềm.'
      ] },
      { t: 'warn', x: 'Tương quan không tự động có nghĩa là nhân quả — cần kiểm tra độ mạnh và ý nghĩa thống kê.' }
    ] },
    { icon: '📋', title: 'Khảo sát và cỡ mẫu', blocks: [
      { t: 'p', x: 'Khảo sát là phương pháp nghiên cứu phổ biến nhất (tinh thần lực lượng bán hàng, hài lòng của khách…). Độ chính xác tăng rõ rệt khi mẫu lớn: ví dụ mẫu <b>600</b> cho thấy 40% phụ nữ lái xe thì tỷ lệ thật nằm trong khoảng <b>36–44%</b>. Mẫu <b>250</b> câu trả lời hoàn chỉnh là tối thiểu gần như cần để có thông tin đáng tin cậy. Thăm dò chính trị thường dùng 1.500–2.000 cử tri.' }
    ] },
    { icon: '🗓️', title: 'Quản lý hoạt động marketing', blocks: [
      { t: 'key', x: '<b>Hoạt động (operations) marketing</b> = quá trình đạt kết quả tối ưu với chi phí thấp nhất: giữ lời hứa giao hàng, đạt mục tiêu lợi nhuận, xác định xung đột nguồn lực, hướng nguồn lực đúng lúc, giảm tồn kho và công việc dở dang.' },
      { t: 'tabs', items: [
        ['Biểu đồ Gantt', '<p><b>Henry Gantt</b> (1861–1919, cộng tác với Taylor), khoảng 1919. Nhiệm vụ trên một trục, thời gian trên trục kia → thấy toàn bộ kế hoạch và <b>điểm thắt cổ chai</b>. Dùng cho mọi nhiệm vụ (vd. lập kế hoạch thiết kế web).</p>'],
        ['CPM – Đường tới hạn', '<p>Cuối thập niên 1950, DuPont (đóng cửa nhà máy để bảo trì), sau đó Hải quân Mỹ cải tiến (dự án Polaris).</p><ol><li>Xác định các sự kiện.</li><li>Quyết định trình tự.</li><li>Xây mạng lưới.</li><li>Tính thời gian hoàn thành mỗi sự kiện.</li><li><b>Xác định con đường dài nhất = đường tới hạn</b>.</li><li>Cập nhật khi sự kiện diễn ra.</li></ol><p>Chậm trễ trên đường tới hạn làm chậm cả dự án; nhiệm vụ ngoài đường này có <b>dự trữ (float)</b>. Ví dụ trong sách: đường dài nhất 10 tuần. <b>PERT</b> và mạng lưới hoạt động cho phép yếu tố ngẫu nhiên về thời gian.</p>'],
        ['Lập trình tuyến tính', '<p><b>George Dantzig</b> (1947): tìm tỷ lệ sản phẩm tối ưu để <b>tối đa lợi nhuận</b> khi vật liệu, nhân công, công suất máy bị giới hạn. Gồm mục tiêu, biến và các ràng buộc. Có thể giải bằng <b>Excel Solver</b>.</p>'],
        ['Lý thuyết xếp hàng', '<p><b>A. K. Erlang</b> (1909, Công ty điện thoại Copenhagen): thêm 1 mạch có thể giảm thời gian chờ &gt; 90% (không phải một nửa). Dùng cho nhà hàng, ngân hàng, tổng đài: khách chờ bao lâu, dịch vụ kéo dài bao lâu, phòng chờ rộng bao nhiêu, xác suất chờ quá lâu, số người xếp hàng TB, lúc nào hết công suất / rảnh rỗi → tính <b>số kênh tối ưu</b>.</p>']
      ] }
    ] },
    { icon: '💰', title: 'Quyết định đầu tư marketing', blocks: [
      { t: 'p', x: 'Nếu <b>chi phí vốn</b> (lãi vay, cổ tức…) là 15% thì hoạt động mới có lợi suất thấp hơn sẽ làm giảm hiệu suất đầu tư. Các loại quyết định: <b>đầu tư thêm</b> (hỗ trợ hoạt động hiện có), <b>dự án độc lập</b> (chấp nhận/từ chối), <b>dự án cạnh tranh nhau</b> (chọn một). Có thể có lý do chiến lược quan trọng hơn tài chính, nhưng luôn phải <b>đánh giá tài chính</b> để thấy cái giá của việc chấp nhận lợi nhuận thấp hơn yêu cầu. Thẩm định dùng <b>tiền mặt</b> chứ không phải lợi nhuận kế toán.' },
      { t: 'h3', x: 'Thời gian hoàn vốn (payback)' },
      { t: 'p', x: 'Mất mấy năm để thu hồi vốn đầu tư. Đơn giản nhất và hay dùng nhất, nhưng <b>bỏ qua giá trị thời gian của tiền</b> và dòng tiền sau thời điểm hoàn vốn: ví dụ hai dự án (20.000 và 40.000) đều hoàn vốn cuối năm 4, nhưng dự án B thu về nửa vốn chỉ trong 2 năm trong khi A mới được 1/4.' },
      { t: 'h3', x: 'Dòng tiền chiết khấu (DCF) & NPV' },
      { t: 'key', x: 'Tiền nhận sớm có giá trị hơn nhận muộn. <b>PV = số tiền ÷ (1 + r)ⁿ</b> (r: tỷ lệ chiết khấu dạng thập phân; n: năm nhận). Với r = 15%: 1 bảng sau 1 năm ≈ <b>0,87</b>; 1.000 bảng năm 1 = 870; 4.000 bảng năm 2 = 3.024. <b>NPV (giá trị hiện tại ròng) = Σ PV − vốn đầu tư</b>; NPV &lt; 0 thì không đạt yêu cầu lợi suất.' },
      { t: 'widget', name: 'npv', title: 'Máy tính hoàn vốn & NPV' },
      { t: 'tip', x: '<b>IRR</b> (hệ số hoàn vốn nội bộ) = tỷ lệ chiết khấu làm NPV bằng 0 → lãi suất thực của dự án. Dự án trong sách: sau 5 năm thặng dư 5.000 bảng nhưng NPV tại 15% = −4.358 và <b>IRR dưới 7%</b> (không hơn lãi ngân hàng) → không nên đầu tư dù theo tiêu chí hoàn vốn vẫn có vẻ chấp nhận được.' }
    ] }
  ],
  summary: [
    'Người làm marketing phải biết diễn giải dữ liệu: cây quyết định, giá trị kỳ vọng (xác suất × lợi nhuận).',
    'Thống kê: trung bình, trung vị, mode, phạm vi, độ lệch chuẩn; phân phối chuẩn 68,2 – 95,5 – 99,7%.',
    'Dự báo = xu hướng + chu kỳ + ngẫu nhiên; trung bình động (có trọng số), làm mịn mũ; chọn mô hình bằng thử–sai.',
    'Hồi quy tuyến tính, hệ số tương quan, R² để kiểm tra quan hệ; cỡ mẫu càng lớn càng chính xác (≥ 250).',
    'Gantt, CPM (đường tới hạn), PERT, lập trình tuyến tính, lý thuyết xếp hàng hỗ trợ quản lý hoạt động.',
    'Thẩm định đầu tư: hoàn vốn (đơn giản nhưng thiếu), DCF/NPV (giá trị thời gian của tiền), IRR.'
  ],
  cards: [
    ['Ai là cha đẻ lý thuyết ra quyết định?', 'Blaise Pascal (cùng những người khác) – nền móng xác suất.'],
    ['Cây quyết định: hình vuông và hình tròn nghĩa là gì?', 'Hình vuông: quyết định. Hình tròn: kết quả không chắc chắn.'],
    ['Giá trị kỳ vọng tính thế nào?', 'Σ (lợi nhuận dự kiến × xác suất xảy ra) của mọi kết quả.'],
    ['Trung vị dùng khi nào?', 'Khi phân phối bất đối xứng hoặc có giá trị cực đoan.'],
    ['Mode là gì?', 'Giá trị xuất hiện nhiều nhất trong tập dữ liệu.'],
    ['Phạm vi (range)?', 'Giá trị lớn nhất trừ giá trị nhỏ nhất.'],
    ['Quy tắc 68-95-99,7?', '68,2% trong ±1 độ lệch chuẩn; 95,5% trong ±2; 99,7% trong ±3.'],
    ['Dự báo khác mục tiêu bán hàng thế nào?', 'Mục tiêu là điều muốn đạt; dự báo là kết quả có nhiều khả năng xảy ra dựa trên quá khứ.'],
    ['Ba thành phần của dự báo?', 'Xu hướng chính, yếu tố chu kỳ/mùa vụ, chuyển động ngẫu nhiên.'],
    ['Trung bình động có trọng số?', 'Nhân dữ liệu gần đây với hệ số lớn hơn trước khi lấy trung bình.'],
    ['Hồi quy tuyến tính dùng để làm gì?', 'Tìm đường thẳng vừa khít nhất giữa biến độc lập và biến phụ thuộc.'],
    ['Cỡ mẫu tối thiểu để có thông tin đáng tin cậy?', 'Khoảng 250 câu trả lời hoàn chỉnh; mẫu 600 cho sai số ±4% (36–44% khi quan sát 40%).'],
    ['Biểu đồ Gantt dùng để làm gì?', 'Trình bày nhiệm vụ theo thời gian, làm nổi bật điểm thắt cổ chai.'],
    ['Đường tới hạn (CPM) là gì?', 'Con đường dài nhất về thời gian qua mạng lưới; chậm trễ trên đó làm chậm cả dự án.'],
    ['Lập trình tuyến tính giải bài toán gì?', 'Tối ưu (vd. lợi nhuận) khi nguồn lực hạn chế; do Dantzig phát triển năm 1947.'],
    ['Lý thuyết xếp hàng của Erlang?', 'Tính số kênh tối ưu và thời gian chờ cho nhà hàng, ngân hàng, tổng đài.'],
    ['Hạn chế của phương pháp hoàn vốn?', 'Bỏ qua giá trị thời gian của tiền và dòng tiền sau khi hoàn vốn.'],
    ['Công thức giá trị hiện tại?', 'PV = tiền ÷ (1 + r)ⁿ.'],
    ['NPV âm nghĩa là gì?', 'Dự án không đạt lợi suất yêu cầu → từ chối.'],
    ['IRR là gì?', 'Tỷ lệ chiết khấu làm NPV bằng 0 – lãi suất thực của dự án.']
  ],
  quiz: [
    { q: 'Hình tròn trong cây quyết định biểu thị:', o: ['Quyết định', 'Kết quả không chắc chắn', 'Chi phí', 'Thời gian'], a: 1, e: 'Hình vuông là quyết định.' },
    { q: 'EV của phương án: 10% lời 10, 40% lời 5, 50% lời 1 (triệu) là:', o: ['3,5', '5,33', '8', '16'], a: 0, e: '1 + 2 + 0,5 = 3,5.' },
    { q: 'Với dữ liệu 30, 40, 10, 15, 10, giá trị trung bình là:', o: ['10', '15', '21', '30'], a: 2, e: '105 ÷ 5 = 21.' },
    { q: 'Cùng dữ liệu trên, trung vị là:', o: ['10', '15', '21', '40'], a: 1, e: 'Sắp xếp: 10, 10, 15, 30, 40 → 15.' },
    { q: 'Cùng dữ liệu trên, mode là:', o: ['10', '15', '21', '30'], a: 0, e: '10 xuất hiện hai lần.' },
    { q: 'Cùng dữ liệu trên, phạm vi là:', o: ['10', '21', '30', '40'], a: 2, e: '40 − 10.' },
    { q: 'Trong phân phối chuẩn, khoảng ±2 độ lệch chuẩn chứa khoảng:', o: ['68,2%', '95,5%', '99,7%', '50%'], a: 1, e: '68,2% – 95,5% – 99,7%.' },
    { q: 'Nên dùng trung vị thay vì trung bình khi:', o: ['Phân phối đối xứng', 'Phân phối bất đối xứng có giá trị cực đoan', 'Chỉ có hai số', 'Không có dữ liệu'], a: 1, e: 'Trung bình bị kéo bởi giá trị cực đoan.' },
    { q: 'Ba thành phần của dự báo KHÔNG gồm:', o: ['Xu hướng chính', 'Yếu tố chu kỳ', 'Chuyển động ngẫu nhiên', 'Chi phí vốn'], a: 3, e: 'Chi phí vốn thuộc thẩm định đầu tư.' },
    { q: 'Trung bình động có trọng số:', o: ['Coi mọi số liệu như nhau', 'Cho số liệu gần đây trọng số lớn hơn', 'Chỉ dùng số liệu cũ', 'Loại bỏ số liệu gần đây'], a: 1, e: 'Phản ánh điều kiện kinh doanh hiện tại tốt hơn.' },
    { q: 'Mẫu khảo sát tối thiểu để có thông tin có ý nghĩa, đáng tin?', o: ['25', '100', '250', '10.000'], a: 2, e: 'Khoảng 250 câu trả lời hoàn chỉnh.' },
    { q: 'Đường tới hạn là:', o: ['Đường ngắn nhất', 'Đường dài nhất về thời gian qua mạng lưới nhiệm vụ', 'Đường rẻ nhất', 'Đường nhiều nhiệm vụ nhất'], a: 1, e: 'Chậm trễ trên đó làm chậm cả dự án.' },
    { q: 'Ai phát triển thuật toán lập trình tuyến tính?', o: ['Gantt', 'Erlang', 'Dantzig', 'Pascal'], a: 2, e: 'George Dantzig, 1947.' },
    { q: 'Lý thuyết xếp hàng giúp trả lời câu hỏi nào?', o: ['Giá vốn là bao nhiêu', 'Khách phải chờ bao lâu và cần bao nhiêu kênh phục vụ', 'Nên quảng cáo ở đâu', 'Thương hiệu nào mạnh'], a: 1, e: 'Dùng cho nhà hàng, ngân hàng, tổng đài.' },
    { q: 'Hạn chế chính của phương pháp hoàn vốn là:', o: ['Quá phức tạp', 'Bỏ qua giá trị thời gian của tiền', 'Cần máy tính', 'Chỉ dùng cho dự án nhỏ'], a: 1, e: 'Cũng bỏ qua dòng tiền sau khi hoàn vốn.' },
    { q: 'Với r = 15%, giá trị hiện tại của 1 bảng nhận sau 1 năm xấp xỉ:', o: ['0,15', '0,85', '0,87', '1,15'], a: 2, e: '1 ÷ 1,15 ≈ 0,87.' },
    { q: 'IRR là:', o: ['Chi phí vốn', 'Tỷ lệ chiết khấu làm NPV = 0', 'Thời gian hoàn vốn', 'Lợi nhuận kế toán'], a: 1, e: 'Cho biết lãi suất thực tế của dự án.' }
  ],
  match: [
    ['Hình vuông (cây quyết định)', 'Điểm ra quyết định'],
    ['Trung vị', 'Giá trị ở giữa khi sắp xếp'],
    ['Độ lệch chuẩn', 'Mức biến thiên quanh trung bình'],
    ['Hồi quy tuyến tính', 'Đường thẳng vừa khít nhất'],
    ['Biểu đồ Gantt', 'Nhiệm vụ trên thời gian, thấy thắt cổ chai'],
    ['CPM', 'Đường tới hạn của dự án'],
    ['Dantzig', 'Lập trình tuyến tính'],
    ['Erlang', 'Lý thuyết xếp hàng'],
    ['NPV', 'Giá trị hiện tại ròng'],
    ['IRR', 'Lãi suất thực của dự án']
  ]
});
