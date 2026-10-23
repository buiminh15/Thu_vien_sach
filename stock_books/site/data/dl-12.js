window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 12,
  title: 'Lắp đặt, sử dụng, bảo dưỡng và sửa chữa máy điều hòa',
  intro: 'Chọn vị trí dàn nóng – dàn lạnh, đường ống ga và thoát nước ngưng, nạp bổ sung ga, điện và tiếp đất; dùng điều khiển từ xa và chế độ AUTO; bảo dưỡng định kỳ; chẩn đoán hư hỏng.',
  sections: [
    { icon: '🏗️', title: 'Nguyên tắc chung khi lắp đặt', blocks: [
      { t: 'list', items: [
        'Mỗi máy có cuốn hướng dẫn lắp đặt và cuốn hướng dẫn vận hành — phải lưu giữ. Lắp đúng chỉ dẫn để máy vận hành an toàn.',
        'Dùng ống đồng, cách nhiệt, dây điện nối giữa hai cụm đúng chủng loại, tiêu chuẩn; không dùng hàng rẻ rởm.',
        'Công việc lắp đặt do thợ lạnh có nghề thực hiện. Máy 2 cụm: khách hàng không được tự lắp.',
        'Nếu có rò rỉ ga, phải thông gió tốt vì gặp lửa hàn sinh phosgen rất độc.',
        'Không tiếp điện khi chưa hoàn thành lắp đặt; khi vận chuyển không làm xước máy; sau lắp đặt phải hướng dẫn khách cách sử dụng.',
        'Không đi ống ga dài hơn quy định của từng loại máy.'
      ] }
    ] },
    { icon: '🪟', title: 'Vị trí lắp máy cửa sổ', blocks: [
      { t: 'list', items: [
        'Thường lắp phía dưới cửa sổ, cao khoảng 0,8–1 m; phía ngoài gió làm mát dàn ngưng không bị cản, không bị quẩn.',
        'Đặt ở nơi chắc chắn, có giá đỡ, giảm rung, giảm ồn.',
        'Tránh chỗ nắng chiếu trực tiếp (máy nặng nề, tốn điện, mau hỏng, rơle bảo vệ ngắt đúng lúc cần lạnh nhất). Nếu không còn cách khác, làm che nắng nhưng không cản đường lưu thông gió làm mát.',
        'Hướng: tốt nhất hướng bắc của tòa nhà; sau đó hướng nam có mái che; hướng đông có mái che; kém nhất là hướng tây có mái che.',
        'Không dùng tôn hoặc mái che bịt chớp lấy gió phía trên và hai bên thành máy. Thiếu gió máy rất dễ cháy, tốn điện, tuổi thọ giảm.',
        'Tường quá dày: bổ tường hình chữ V để tạo đường lấy gió.',
        'Không bố trí ngược hướng gió (quạt gió bị vô hiệu hóa); không thổi gió nóng sang nhà láng giềng; tránh gió quẩn bằng ống gió nóng đưa ra xa.',
        'Khi lắp, để máy hơi nghiêng vào trong nhà đảm bảo có lớp nước ngưng dưới đáy máy — nước này bay hơi làm mát dàn ngưng tốt hơn.'
      ] },
      { t: 'widget', name: 'dl-ac-install-check', title: 'Kiểm tra vị trí lắp đặt: chọn phương án và xem rủi ro' }
    ] },
    { icon: '🏠', title: 'Lắp máy 2 cụm', blocks: [
      { t: 'h3', x: 'Dàn lạnh (trong nhà)' },
      { t: 'list', items: [
        'Chọn vị trí đủ cứng vững, chịu được trọng lượng và rung động.',
        'Đầu hút và đầu thổi thông thoáng, không bị cản bởi tủ, đồ vật trang trí.',
        'Phân phối đều gió lạnh cho cả phòng: gió lạnh đi xuống, gió nóng tích tụ phía trên. Dàn treo tường không nên treo quá cao — từ 2,0–2,5 m là đủ; mùa hè thổi ngang, mùa đông thổi thẳng xuống sàn.',
        'Dễ vệ sinh, bảo dưỡng, sửa chữa; vị trí vững chãi để không khuếch đại tiếng ồn; có chỗ thoát nước ngưng.',
        'Xa máy thu hình, radio, video, thiết bị vô tuyến ít nhất 1 m; xa đèn ống, quạt trần để không cản tia hồng ngoại điều khiển từ xa.',
        'Không chọn hướng đối diện cửa ra vào (mở cửa gió lạnh bay ra ngoài). Nên thổi vuông góc với cửa ra vào.'
      ] },
      { t: 'h3', x: 'Dàn nóng (ngoài nhà)' },
      { t: 'list', items: [
        'Đường gió vào và ra thông thoáng, không bị gió quẩn. Cách tường phía sau ≥ 300 mm; tường bên phải ≥ 100 mm; tường phía trước mặt ≥ 600 mm.',
        'Nếu có thể, tránh nắng chiếu trực tiếp (mái che nắng không được cản gió).',
        'Không đặt gần nguồn nhiệt (bếp lò, hơi nước, khí đốt), nguồn khí thải, hóa chất ăn mòn, nơi nhiều khói, bồ hóng, bụi bẩn.',
        'Kiểu bơm nhiệt mùa đông dàn ngoài nhà có nước ngưng nên cần ống thoát nước ngưng hoặc lắp ở nơi xả không bị cản trở.',
        'Không lắp ngược hướng gió mạnh; không để gió thổi vào cửa hút của dàn. Không đặt nơi người đi lại đông đúc.',
        'Chọn vị trí sao cho đường ống ga ngắn nhất.',
        'Lắp trên bệ chắc chắn tránh ồn, rung, cộng hưởng rung động; độ nghiêng cho phép không quá 5°. Ít ảnh hưởng nhà láng giềng; nhiều dàn nóng thì không để dàn này thổi vào dàn khác.'
      ] },
      { t: 'h3', x: 'Chiều dài và độ cao cho phép' },
      { t: 'p', x: 'Điều hòa phòng (6 000–24 000 Btu/h) thông thường chênh cao không nên quá 3 m và chiều dài ống ga không nên quá 5 m. Một số hãng cho phép tới 15 m dài và 10 m cao. Dàn lạnh đặt cao, dàn nóng đặt thấp thuận lợi hơn cho dầu hồi về máy nén; nếu bắt buộc đặt dàn nóng cao hơn dàn lạnh phải làm <b>bẫy dầu</b> để dầu hồi tốt. Ống ga càng ngắn, càng thẳng, càng ít cút gấp khúc càng tốt vì tổn thất áp suất nhỏ.' },
      { t: 'widget', name: 'dl-ac-piping', title: 'Ống ga: độ dài, độ cao và lượng ga nạp bổ sung' }
    ] },
    { icon: '🔨', title: 'Thi công: treo dàn, đi ống, thoát nước, nạp ga', blocks: [
      { t: 'steps', items: [
        'Cố định chắc tấm gá vào tường bằng 6–8 vít nở tiêu chuẩn; chú ý độ thăng bằng để nước ngưng thoát ra ngoài mà không chảy vào phòng; treo dàn lạnh phải chắc chắn đã móc hết cữ.',
        'Khoét lỗ đi ống qua tường đường kính khoảng 70–80 mm, đặt ống nhựa bảo vệ; khoét lỗ hơi nghiêng từ trong ra ngoài để nước thoát dễ.',
        'Chọn ống đồng đường kính, chiều dày phù hợp cho đường lỏng và đường hơi, bọc cách nhiệt riêng từng ống bằng ống mềm polyurethane (hệ số dẫn nhiệt 0,041–0,052 W/m·K, chịu 110 °C).',
        'Ống hơi, ống lỏng, ống nước ngưng và dây điện được bó lại: dây điện nằm phía trên, ống thoát nước ngưng ở phía dưới, quấn băng nilông ngoài cùng từ dưới lên.',
        'Dàn lạnh phía sau có 2 lỗ thoát nước ngưng ở hai phía: dùng một lỗ phù hợp, lỗ còn lại phải dùng nút cứng bịt chặt (không dùng dầu nhớt bịt vì dầu làm lão hóa nút nhựa gây rò nước).',
        'Khi đưa ống qua tường dễ có bụi cát, ẩm, nước mưa lọt vào ống: bịt kín đầu ống bằng băng dính hoặc nắp nhựa vặn chặt vào đai ốc loe.',
        'Ống thoát nước ngưng đặt nghiêng dần từ trong ra ngoài; không tạo bẫy nước; không cắm đầu ống vào chậu nước hoặc nhúng xuống rãnh thoát; nếu phải kéo dài phải bọc cách nhiệt cho đến khi ra khỏi phòng.',
        'Thử thoát nước ngưng: nhấc phin lọc, rót nước vào máng nước; nước chảy ra ngoài thông suốt là được.',
        'Dàn nóng (bơm nhiệt) cần ống thoát nước ngưng ở đáy; nếu không có chỗ phải kê cao dàn bằng chân bê tông và chừa chỗ lắp ống phía van nối.',
        'Hút chân không dàn lạnh và đoạn ống nối bằng bơm chân không trước khi mở van dàn nóng (để bảo vệ môi trường, không xả ga thừa của dàn nóng ra ngoài).'
      ] },
      { t: 'table', head: ['Đường kính ống ga lỏng', 'Lượng ga bổ sung cho mỗi mét'], rows: [
        ['Φ 1/4" (6,4 mm)', '20 g'], ['Φ 3/8" (9,5 mm)', '50 g'], ['Φ 1/2" (12,7 mm)', '90 g'], ['Φ 5/8" (15,9 mm)', '150 g'], ['Φ 7/8" (22,2 mm)', '300 g']
      ] },
      { t: 'tip', x: 'Ví dụ: chiều dài ống nối cho phép 15 m, ga nạp sẵn trong dàn nóng đủ cho 5 m, lắp hiện trường 10 m → phải nạp bổ sung cho 5 m còn thiếu: 5 × 20 g = 100 g (ống lỏng Φ 1/4").' },
      { t: 'h3', x: 'Điện và tiếp đất' },
      { t: 'list', items: [
        'Chọn tiết diện dây phù hợp, không dùng dây đơn thiếu tiết diện; không dùng dây nhỏ hơn 1,6 mm trong mọi trường hợp (dễ đứt do rung).',
        'Độ sụt áp trên dây (trường hợp kéo dài) không quá 2 V.',
        'Phải tiếp đất để bảo vệ chống giật khi rò điện ra ngoài; các dây đấu nối đúng thứ tự, đúng màu từ vị trí 1, 2, 3, 4 đến nối đất.'
      ] }
    ] },
    { icon: '📱', title: 'Sử dụng điều khiển từ xa và các chế độ', blocks: [
      { t: 'list', items: [
        'Điều khiển dùng 2 pin tiểu 1,5 V (thay cả hai, cùng loại, khoảng 1 năm một lần; không nạp lại pin hết; tháo pin khi lâu không dùng). Khoảng cách xa nhất còn tác dụng 7 m; vật cản như rèm che làm mất tác dụng; đèn ống đứng tắc te trong phòng có thể gây nhiễu.',
        'Mỗi lần thay pin phải cài đặt giờ lại: nhấn SET, dùng nút + / − chọn giờ hiện hành, nhấn SET lần nữa.',
        'Khi bật aptomat, dù máy không hoạt động vẫn tiêu thụ khoảng 15 W; không dùng lâu nên ngắt aptomat hoặc rút phích.',
        'Khi có điện trở lại, máy có thể tự làm việc lại: dàn lạnh làm việc ngay còn dàn nóng sau 3 phút.'
      ] },
      { t: 'table', head: ['Chế độ', 'Nhiệt độ ngoài trời', 'Nhiệt độ trong nhà', 'Ghi chú'], rows: [
        ['COOL (làm lạnh)', '20–43 °C', '18–32 °C, ẩm tối đa 80%', 'Vượt ra ngoài thì thiết bị bảo vệ ngắt máy; có thể ngưng nước trên dàn lạnh và nhỏ giọt vào nhà'],
        ['HEAT (sưởi ấm)', '−10…21 °C', 'tối đa 28 °C', 'Vượt thì bảo vệ ngắt'],
        ['DRY (hút ẩm)', '18–43 °C', '18–32 °C, ẩm tối đa 80%', 'Nước có thể ngưng trên dàn lạnh và nhỏ giọt vào nhà']
      ] },
      { t: 'tip', x: 'Bí quyết tiết kiệm điện: không làm lạnh phòng quá mức (hè 27–28 °C, đông 20–22 °C); giữ kín cửa, che nắng cho cửa sổ; vệ sinh phin lọc khí 2 tuần một lần (phin tắc làm hiệu suất giảm đáng kể).' },
      { t: 'h3', x: 'Chế độ AUTO' },
      { t: 'p', x: 'Nhấn MODE chọn AUTO (thứ tự: sưởi ấm – hút ẩm – quạt – làm lạnh – AUTO), nhấn nút bật; đèn xanh lục trên dàn lạnh sáng. Khi vừa chạy AUTO quạt chạy rất nhẹ khoảng 1 phút để máy cảm nhận nhiệt độ phòng rồi quyết định chế độ:' },
      { t: 'table', head: ['Nhiệt độ phòng hiện tại', 'Chế độ tự chọn', 'Nhiệt độ tự cài đặt'], rows: [
        ['≥ 30 °C', 'COOL', '27 °C'], ['27–30 °C', 'COOL', '26 °C'], ['24–27 °C', 'DRY (hút ẩm)', '24 °C'], ['22–24 °C', 'MONITOR (giám sát)', '23 °C'], ['< 22 °C', 'HEAT (sưởi)', '—']
      ] },
      { t: 'widget', name: 'dl-ac-auto', title: 'Chế độ AUTO: nhiệt độ phòng quyết định chế độ' },
      { t: 'list', items: [
        'Chọn xong thì chế độ không đổi khi nhiệt độ thay đổi; tuy nhiên đang lạnh mà nhiệt độ phòng tụt dưới 22 °C thì chuyển sang sưởi; từ sưởi, nếu nhiệt độ phòng tăng trên 24 °C thì tự chuyển sang hút ẩm.',
        'Khi chạy MONITOR quạt chạy rất chậm. Trong vòng 2 giờ sau khi tắt mà mở lại máy vẫn làm việc ở chế độ trước khi tắt.',
        '<b>Sưởi ấm</b>: quạt trong nhà không chạy ngay vì cần thời gian làm nóng dàn lạnh; khí nóng có xu hướng bốc lên nên chỉnh hướng gió thẳng xuống sàn. Xứ lạnh dưới 0 °C: dàn ngoài đóng tuyết nên định kỳ tự động xả băng — máy dừng và có hơi nước bốc lên ở dàn ngoài.',
        '<b>Hút ẩm</b>: quạt chạy rất nhẹ; độ ẩm phòng giảm nhưng nhiệt độ cũng giảm chút ít. Những ngày nồm ở miền Bắc, nếu rất lạnh thì dùng máy hút ẩm sẽ tốt hơn vì độ ẩm giảm mà nhiệt độ phòng tăng.',
        '<b>Hướng gió</b>: cánh ngang chỉnh gió lên xuống bằng điều khiển từ xa; cánh đứng chỉnh trái phải bằng tay (cho máy chạy, dùng điều khiển đặt cánh ngang ở một góc nào đó, rồi dùng tay chỉnh cánh đứng). Thổi trực tiếp vào người hơn 30 phút có thể gây cảm lạnh, hắt hơi.',
        '<b>Hẹn giờ</b>: TIMER ON (nhấn TIMER ON, chọn giờ bằng + / −, nhấn TIMER ON lần nữa); TIMER OFF tương tự; có máy cho hẹn giờ bật rồi tắt; xóa bằng CANCEL.',
        '<b>Chạy mạnh mẽ (POWERFUL)</b>: năng suất tối đa (có hãng tới 130%), sau 20 phút tự trở về chế độ bình thường.',
        '<b>Ban đêm (NIGHT)</b>: làm lạnh mùa hè thì nhiệt độ phòng tăng thêm 1 °C sau mỗi giờ rồi giữ nguyên (đặt 27 °C → sau 1 giờ 28 °C, sau 2 giờ 29 °C); sưởi mùa đông thì giảm dần: sau 30 phút giảm 1 °C, sau 2 giờ giảm 4 °C rồi giữ ở 18 °C.'
      ] }
    ] },
    { icon: '🧼', title: 'Bảo dưỡng máy điều hòa', blocks: [
      { t: 'warn', x: 'Trước bất kỳ công việc vệ sinh nào đều phải ngắt aptomat, cầu dao hoặc rút phích điện.' },
      { t: 'list', items: [
        '<b>Phin lọc khí trong nhà</b>: vệ sinh 2 tuần một lần. Mở mặt nạ dàn lạnh (nút bấm hoặc lẫy), kéo phin trượt xuống dưới; tốt nhất dùng máy hút bụi; nếu rửa nước phải phơi bóng râm cho khô. Phin bẩn làm giảm năng suất lạnh, tăng điện năng, tiếng ồn lớn.',
        '<b>Phin tinh lọc khí</b> (lọc khói thuốc lá, mùi hôi, nấm mốc; than hoạt tính hoặc hợp chất hóa học) chỉ thay một lần, không tái sinh hay rửa dùng lại.',
        '<b>Mặt nạ</b>: có thể tháo ra lau rửa (cẩn thận té ngã khi đứng ghế); không dùng nước nóng quá 40 °C hoặc xăng, dầu, chất đánh bóng, bàn chải thô; chỉ dùng nước và khăn vải mềm, phơi khô trong bóng râm; khi lắp gài đúng các lẫy.',
        '<b>Vệ sinh định kỳ dàn nóng và dàn lạnh</b> do thợ chuyên môn thực hiện; dàn lạnh luôn ướt nên dễ bám bẩn, nấm mốc, cản lưu thông không khí → năng suất giảm, điện tăng, ồn. Nơi bụi bẩn vệ sinh thường xuyên hơn; ít nhất mỗi năm một lần.',
        '<b>Trước khi cho máy nghỉ dài hạn</b>: cho chạy quạt (FAN) vài giờ cho dàn lạnh khô hoàn toàn; vệ sinh phin lọc gió và lắp lại; tháo pin điều khiển; ngắt aptomat hoặc rút phích (vì máy vẫn tiêu thụ ~15 W).',
        '<b>Sau khi nghỉ dài hạn</b>: kiểm tra dàn nóng, giá đỡ, đường gió vào ra; kiểm tra nối đất; kiểm tra nước ngưng thoát thông suốt (đôi khi chuột, gián bịt kín lỗ thoát).'
      ] }
    ] },
    { icon: '🛠️', title: 'Sửa chữa máy điều hòa', blocks: [
      { t: 'h3', x: 'Những dấu hiệu máy vẫn bình thường' },
      { t: 'table', head: ['Hiện tượng', 'Giải thích'], rows: [
        ['Máy không vận hành ngay', 'Máy vừa dừng lại bật lại ngay hoặc vừa mất điện có lại: mạch bảo vệ chỉ cho máy nén khởi động lại sau 3 phút để bảo vệ cầu chì khỏi nổ'],
        ['Nghe tiếng nước chảy / lạch cạch', 'Tiếng ga chảy trong ống (2–3 phút đầu); tiếng co dãn chi tiết ở chế độ sưởi; tiếng "plop plop" là quạt làm việc trong không gian quá hẹp (tắt, kiểm tra vật cản); thỉnh thoảng nghe tiếng rít khi xả băng (hiếm ở Việt Nam)'],
        ['Mùi khó chịu', 'Máy hút mùi đồ da, đồ gỗ, thuốc lá rồi phát ra; cần vệ sinh dàn lạnh'],
        ['Sương mù hoặc hơi nước phát ra', 'Lạnh/hút ẩm khi độ ẩm cao: không khí bị làm lạnh đột ngột. Sưởi: hơi nước bốc ở dàn ngoài do xả băng (hiếm ở Việt Nam)'],
        ['Quạt chạy yếu hoặc dừng', 'Chế độ sưởi vừa bật chờ chi tiết nóng; khi nhiệt độ vượt giá trị cài đặt quạt dàn ngoài dừng; xả băng 7–15 phút; hút ẩm, siêu êm, MONITOR quạt chạy rất chậm'],
        ['Nước chảy ra từ dàn ngoài nhà', 'Chế độ sưởi: nước ngưng chảy ra; khi xả băng'],
        ['Thỉnh thoảng bám băng tuyết', 'Hiện tượng bình thường'],
        ['Đang chạy đột ngột dừng, đèn nhấp nháy', 'Bảo vệ khi điện áp vượt phạm vi (cao quá hoặc thấp quá, dao động bất thường); máy làm việc lại sau 3 phút']
      ] },
      { t: 'h3', x: 'Máy có thể chưa hỏng: kiểm tra trước' },
      { t: 'list', items: [
        '<b>Không hoạt động, đèn không sáng</b>: đã bật aptomat/cầu dao chưa? Cầu chì nổ? Mất điện? Pin điều khiển còn tốt? Hướng điều khiển vào mắt nhận? Chế độ hẹn giờ đúng?',
        '<b>Kém lạnh</b>: phin lọc sạch? Vật cản đường gió dàn nóng/lạnh? Nhiệt độ cài đặt đúng? Cửa ra vào và cửa sổ đóng kín? Lưu lượng gió và hướng gió đúng? Quạt có làm việc?',
        '<b>Máy dừng đột ngột (đèn nhấp nháy)</b>: có vật cản đường gió? Phin tắc? Vệ sinh phin, ngắt aptomat, bật lại, thử điều khiển; vẫn không chạy thì phải sửa chữa.',
        '<b>Chạy không đúng khi đang vận hành</b>: nhiễu từ đèn ống tắc te, radio, tivi; ngắt aptomat rồi bật lại.'
      ] },
      { t: 'widget', name: 'dl-ac-diag', title: 'Chẩn đoán hư hỏng máy điều hòa theo triệu chứng' },
      { t: 'table', head: ['Triệu chứng', 'Nguyên nhân', 'Cách khắc phục'], rows: [
        ['Máy không làm việc, đèn báo không sáng', 'Tiếp điểm công tắc hỏng; tiếp điểm rơle nhiệt độ hỏng; ống mao rò; tụ khởi động hỏng; rơle khởi động hỏng; dây nối hỏng; cuộn dây động cơ chạm chập, cháy', 'Sửa hoặc thay tiếp điểm; thay tụ; thay rơle; kiểm tra sửa dây; quấn lại hoặc thay blốc'],
        ['Quạt gió không quay', 'Mất điện, đứt cầu chì, tiếp điểm không tiếp xúc, tuột dây; công tắc chính tiếp xúc kém; cuộn dây động cơ hỏng; rơle bảo vệ động cơ hỏng; tụ của quạt hỏng; cánh quạt không bắt chặt vào động cơ', 'Dùng vạn năng kế kiểm tra; đo thông mạch; quấn lại động cơ hoặc thay mới; sửa, thay rơle; kiểm tra thay tụ; siết lại vít'],
        ['Máy nén khởi động và dừng liên tục', 'Nhiệt độ cài đặt sai; môi trường quá cao, dàn ngưng bẩn, gió bị quẩn, quạt lắp ngược nên rơle bảo vệ quá tải ngắt máy liên tục', 'Kiểm tra chế độ cài đặt; cải thiện môi trường dàn ngưng, loại bỏ vật cản đường gió, vệ sinh dàn nóng, tránh gió quẩn, kiểm tra cánh quạt'],
        ['Máy 2 chiều nhưng không điều chỉnh nóng/lạnh được', 'Cuộn dây điện từ của van đổi dòng hỏng, bị đứt hoặc cháy; bản thân van đổi dòng hỏng, pittông bị kẹt; rơle nhiệt độ hỏng, không tiếp xúc', 'Thay cuộn dây; kiểm tra, lấy búa gỗ gõ nhẹ lên thân van để giải phóng pittông khỏi chỗ kẹt, nếu không phải thay mới; thay mới hoặc sửa rơle'],
        ['Máy rung và ồn', 'Ốc vít, bulông lỏng lẻo, đường ống chạm nhau hoặc chạm vỏ; bản thân máy nén hỏng; quạt hỏng', 'Bắt lại ốc vít, lót đệm cao su, bọt xốp cách ly đường ống; thay máy nén mới; thay quạt mới'],
        ['Rò rỉ nước ra nhà', 'Không thông thoát nước ngưng', 'Kiểm tra khắc phục (độ dốc ống, bẫy nước, nút bịt lỗ thoát)']
      ] }
    ] }
  ],
  summary: [
    'Lắp máy cửa sổ: hướng bắc, không che chớp gió, dàn ngưng thông thoáng; máy hơi nghiêng vào trong để có lớp nước ngưng.',
    'Dàn nóng cách tường: sau ≥ 300 mm, bên ≥ 100 mm, trước ≥ 600 mm; nghiêng không quá 5°.',
    'Máy gia dụng: chênh cao ≤ 3 m, ống ga ≤ 5 m (một số hãng 15 m / 10 m); bổ sung ga theo mét ống lỏng (Φ1/4": 20 g/m).',
    'Hút chân không dàn lạnh và ống nối trước khi mở van; không dùng dầu bịt lỗ thoát nước.',
    'Dây nối giữa hai cụm không nhỏ hơn 1,6 mm, sụt áp ≤ 2 V, phải tiếp đất.',
    'AUTO: ≥30 °C lạnh 27 °C; 27–30 lạnh 26; 24–27 hút ẩm 24; 22–24 giám sát 23; <22 sưởi.',
    'Phin lọc khí vệ sinh 2 tuần/lần; vệ sinh dàn nóng/lạnh ít nhất mỗi năm.',
    'Nhiều "hư hỏng" thực ra là hiện tượng bình thường (chờ 3 phút, tiếng ga chảy, sương, xả băng).'
  ],
  cards: [
    ['Hướng đặt máy cửa sổ tốt nhất?', 'Hướng bắc; kế đến nam (có mái che), đông, tây'],
    ['Dàn nóng cách tường phía sau tối thiểu?', '300 mm (bên 100 mm, trước 600 mm)'],
    ['Độ nghiêng cho phép của dàn nóng?', 'Không quá 5°'],
    ['Chênh cao / chiều dài ống máy gia dụng?', '≤ 3 m / ≤ 5 m'],
    ['Lượng ga bổ sung ống lỏng Φ 3/8"?', '50 g/m'],
    ['Dây nối nhỏ nhất, sụt áp tối đa?', '1,6 mm, 2 V'],
    ['Đường kính lỗ xuyên tường?', '70–80 mm, hơi nghiêng ra ngoài'],
    ['Vì sao không bịt lỗ thoát nước bằng dầu nhớt?', 'Dầu làm lão hóa nút nhựa, gây rò nước'],
    ['Thử thoát nước ngưng?', 'Rót nước vào máng nước khi nhấc phin lọc'],
    ['Máy không chạy ngay sau khi bật lại vì?', 'Mạch bảo vệ chờ 3 phút'],
    ['Tiêu thụ chờ khi chỉ bật aptomat?', 'Khoảng 15 W'],
    ['Khoảng cách xa nhất của điều khiển?', '7 m'],
    ['Phin tinh lọc khí có tái sinh được không?', 'Không, chỉ thay mới'],
    ['Chế độ POWERFUL?', 'Năng suất tối đa (~130%), 20 phút tự trở về'],
    ['Trước khi nghỉ dài hạn?', 'Chạy FAN cho dàn khô, vệ sinh phin, tháo pin, ngắt điện'],
    ['Van đổi dòng kẹt thì xử lý?', 'Gõ nhẹ búa gỗ lên thân van, không được thì thay']
  ],
  quiz: [
    { q: 'Dàn nóng cách tường phía sau tối thiểu:', o: ['30 mm', '100 mm', '300 mm', '600 mm'], a: 2, e: '300 mm.' },
    { q: 'Hướng tốt nhất lắp máy cửa sổ ở Việt Nam:', o: ['Tây', 'Bắc', 'Đông', 'Nam không mái'], a: 1, e: 'Hướng bắc ít nắng nhất.' },
    { q: 'Bổ sung ga cho 6 m ống lỏng Φ 1/4" (20 g/m):', o: ['60 g', '120 g', '300 g', '20 g'], a: 1, e: '6 × 20 = 120 g.' },
    { q: 'Vì sao bật lại máy ngay thì không chạy?', o: ['Hỏng', 'Bảo vệ chờ 3 phút', 'Pin yếu', 'Thiếu ga'], a: 1, e: 'Bảo vệ khởi động lại máy nén.' },
    { q: 'Phòng 25 °C, chế độ AUTO sẽ chọn:', o: ['COOL 27', 'DRY 24', 'MONITOR 23', 'HEAT'], a: 1, e: '24–27 °C → DRY, 24 °C.' },
    { q: 'Phin lọc khí trong nhà nên vệ sinh:', o: ['Mỗi ngày', '2 tuần/lần', '6 tháng/lần', 'Không cần'], a: 1, e: 'Phin bẩn giảm năng suất lạnh.' },
    { q: 'Tiếng ga chảy trong ống 2–3 phút đầu là:', o: ['Hỏng', 'Bình thường', 'Thiếu dầu', 'Hết ga'], a: 1, e: 'Hiện tượng bình thường.' },
    { q: 'Hai lỗ thoát nước ngưng ở dàn lạnh, lỗ không dùng phải:', o: ['Bỏ ngỏ', 'Bịt nút cứng', 'Bôi dầu', 'Cắm ống nhỏ'], a: 1, e: 'Dùng nút cứng cung cấp sẵn.' }
  ],
  match: [
    ['Dàn nóng phía trước', '≥ 600 mm'],
    ['AUTO < 22 °C', 'HEAT'],
    ['Ống Φ 1/2"', '90 g/m'],
    ['Phin tinh lọc', 'Thay một lần'],
    ['NIGHT (lạnh)', '+1 °C mỗi giờ'],
    ['Ống thoát nước ngưng', 'Nghiêng dần ra ngoài']
  ]
});
