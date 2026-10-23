window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 14,
  title: 'Các thao tác cơ bản của thợ lạnh',
  intro: 'Bộ nạp 3 dây, van dịch vụ dàn nóng, thử kín bằng khí và bằng ga, đèn halide, máy dò ga điện tử, sửa vị trí rò rỉ, nạp ga tủ lạnh, van trích, ampe kìm và vạn năng kế.',
  sections: [
    { icon: '🧰', title: 'Bộ nạp 3 dây (manifold)', blocks: [
      { t: 'p', x: 'Dụng cụ không thể thiếu của thợ lạnh: kiểm tra áp suất đầu hút – đầu đẩy, thử kín, hút chân không, nạp ga, nạp dầu. Bộ gồm một thân van có hai van L (phía hạ áp) và H (phía cao áp), hai đồng hồ LO và HI, ba dây: (1) nối đầu hút máy nén; (2) nối bơm chân không và chai ga (đầu giữa C); (3) nối đầu đẩy. Khi không nối đầu đẩy, dây này có thể nối bơm chân không.' },
      { t: 'list', items: [
        'Đồng hồ hạ áp LO là loại áp–chân không kế: thang SI chân không −1 bar, áp dư tới +15 bar; thang Anh–Mỹ chân không 30 inHg, áp dư 120 psi.',
        'Đồng hồ cao áp HI: 0–30 bar hoặc 0–400 psi.',
        'Mở van L thông đường hút với bơm chân không và chai ga; mở van H thông đường đẩy.',
        'Khi chỉ nối với đường hút, dây đường đẩy nối bơm chân không, chai ga nối thẳng vào C — không cần bộ nạp 4 dây (bộ ga để chuyển 3 dây thành 4 dây).'
      ] },
      { t: 'widget', name: 'dl-manifold', title: 'Bộ nạp 3 dây: mở/đóng van, xem dòng ga đi đâu' },
      { t: 'h3', x: 'Bốn dịch vụ cơ bản' },
      { t: 'table', head: ['Dịch vụ', 'Cách làm'], rows: [
        ['a) Đo áp suất đầu hút, đầu đẩy', 'Nối dây hút – phía hút; đầu đẩy – phía đẩy; bơm chân không với đầu C. Mở van L, H và van 5 cho bơm chạy; đóng van 5, L, H. Mở nhích van dịch vụ 1 (1/8–1/4 vòng) đọc áp hút trên LO; mở nhích van dịch vụ 2 đọc áp đẩy trên HI. Xong siết lại như cũ, tháo dây mềm, vặn lại mũ van dịch vụ'],
        ['b) Nạp ga, dầu đường hút', 'Nối đầu hút với phía hút, đầu C với chai ga hoặc bình dầu; nối bơm chân không vào đường đẩy, hút chân không rồi đóng van H; mở van L và mở từ từ van chai ga để nạp. Nếu không có bơm chân không cao phải dùng cách đuổi khí bằng ga'],
        ['c) Nạp ga đầu đẩy', 'Nối đầu đẩy với phía đẩy, C với chai ga, đầu hút với bơm chân không; hút chân không toàn hệ thống; đóng van L; quay ngược chai ga để nạp lỏng (hoặc xi lanh thì mở van lỏng); mở van H để nạp vào hệ thống. Khi đã nạp đủ có thể dùng cách chườm nước đá cho dàn ngưng hoặc cho máy chạy hút nốt phần ga còn lại'],
        ['d) Hút chân không', 'Nối đầu hút với đường hút, đầu đẩy với đường đẩy, đầu C với bơm chân không; mở tất cả van L, H và các van trên hệ thống; hút chân không hệ khoảng 1 giờ và tráng ga 2 lần trước khi nạp']
      ] },
      { t: 'p', x: 'Nối bộ nạp vào hệ thống theo 4 kiểu blốc (xem chương 8): van dịch vụ đầu hút/đẩy; đầu ga lắp van dịch vụ đầu hút; ống công nghệ (van trích hoặc hàn nối ống công nghệ với đầu đực nối dây ga); không có ống công nghệ (tự tạo ống công nghệ đầu hút).' }
    ] },
    { icon: '🚪', title: 'Van dịch vụ dàn nóng', blocks: [
      { t: 'p', x: 'Máy điều hòa 2 cụm có hai van dịch vụ ở cụm ngoài nhà: đường hơi và đường lỏng (van đường lỏng đôi khi không có cửa dịch vụ). Nhiệm vụ: khóa chặn ga lạnh vì ga đã nạp sẵn theo hệ thống; thuận tiện nối ống cho dàn lạnh trong nhà; thực hiện dịch vụ khi cần (bổ sung dầu, ga, kiểm tra áp suất, hút chân không).' },
      { t: 'list', items: [
        'Kim van <b>vặn xuống</b> (ngả vào hết): van khóa đường thông với máy nén hoặc dàn ngưng (nhốt ga khi xuất xưởng).',
        'Kim van <b>nâng lên hết</b>: van khóa cửa dịch vụ, thông dàn ngưng và dàn bay hơi (khi đã lắp đặt xong đi vào sử dụng).',
        'Kim van <b>ở lưng chừng</b>: van thông cả 3 ngả (khi kiểm tra áp suất hút, đẩy, hút chân không).',
        'Ở một số van đường lỏng không có cửa dịch vụ vì ống mao chuyển ra phía dàn nóng nên vị trí này vẫn là phía áp thấp: nối áp kế vào chỉ đo được áp suất đầu hút.'
      ] },
      { t: 'widget', name: 'dl-service-valve', title: 'Van dịch vụ dàn nóng: ba vị trí của kim van' }
    ] },
    { icon: '🔎', title: 'Thử kín', blocks: [
      { t: 'h3', x: 'Thử kín bằng khí trơ (nitơ, CO₂, argon)' },
      { t: 'warn', x: 'KHÔNG BAO GIỜ dùng chai oxi để thử kín — có thể gây nổ rất nguy hiểm. Không dùng bộ nạp 3 dây để thử kín bằng nitơ vì nếu sơ ý áp suất sẽ làm hỏng áp kế; phải có bộ điều chỉnh áp suất thử (van an toàn) trên chai nitơ.' },
      { t: 'p', x: 'Sau khi lắp đặt xong đường ống nối tất cả chi tiết, hệ thống cần được thử kín. Với máy 2 cụm mới đã thử kín tại nhà máy thì chỉ cần thử đoạn ống nối nếu chưa chắc chắn; với hệ thống lạnh lắp từ chi tiết riêng lẻ (máy nén, dàn ngưng, dàn bay hơi, ống mao, phin sấy lọc) nhất thiết phải thử kín. Chỉ thử các chi tiết và đường ống lắp đặt tại hiện trường.' },
      { t: 'steps', items: [
        'Nối ống dẫn khí từ chai khí trơ vào hệ thống (nối thẳng vào van dịch vụ) qua bộ điều chỉnh áp suất thử.',
        'Tăng áp suất hệ thống lên khoảng 7 bar.',
        'Theo dõi trong khoảng 1 giờ hoặc hơn.',
        'Nếu áp suất giảm: tìm chỗ rò bằng nước xà phòng.',
        'Nếu áp suất không giảm: tăng áp lên 12 bar và theo dõi 24 giờ. Không tụt thì coi hệ kín. Nếu tụt, tiếp tục tìm chỗ rò bằng nước xà phòng.',
        'Nếu ngày hôm sau nhiệt độ thấp hơn thì áp suất tụt mà hệ thống vẫn kín. Kiểm tra bằng công thức: p<sub>d2</sub> = (T₂/T₁)·(p<sub>d1</sub> + p<sub>b1</sub>) − p<sub>b2</sub> (T tuyệt đối = °C + 273; p<sub>b</sub> áp suất khí quyển hai ngày).',
        'Hệ kín thì hút chân không ba bước có tráng ga, rồi nạp ga, chạy thử, vận hành.'
      ] },
      { t: 'widget', name: 'dl-leak-test', title: 'Thử kín bằng nitơ: áp suất dự kiến sau 24 giờ khi nhiệt độ đổi' },
      { t: 'h3', x: 'Thử kín bằng ga' },
      { t: 'p', x: 'Dùng chính ga lạnh sẽ nạp: chỉ thực hiện được khi áp suất bão hòa của ga đủ lớn (ví dụ R22 ở 33 °C có khoảng 12 bar). Dùng bộ nạp 3 dây nối chai ga với hệ thống, đồng hồ cao áp, nối vào van dịch vụ hoặc ống công nghệ. Ngoài nước xà phòng còn dùng đèn halide, máy dò ga điện tử, dò vết dầu loang.' },
      { t: 'steps', items: [
        'Nối chai ga qua bộ nạp 3 dây (phía áp cao) vào hệ thống.',
        'Đóng van L, mở van H, mở van dịch vụ và mở hoàn toàn van chai ga để nâng áp suất hệ thống bằng áp suất chai ga.',
        'Khóa van H, theo dõi 1 giờ.',
        'Áp tụt: dùng các biện pháp trên để tìm chỗ rò.',
        'Không tụt: theo dõi tiếp 24 giờ như bước 4 nếu tụt.',
        'Hệ kín thì thu hồi ga, hút chân không, nạp ga, chạy thử đưa vào vận hành.'
      ] },
      { t: 'tip', x: 'Sau khi thử kín bằng khí, vẫn có thể thử kín bằng ga: xả hết khí trơ bằng bơm chân không, nạp ga lên 3–5 bar, cho máy chạy đảo ga 10–15 phút rồi dùng đèn halide hoặc máy dò điện tử. Để tiết kiệm ga: hút chân không trước bước 1 để nếu hệ kín có thể nạp luôn mà không cần hút lại.' },
      { t: 'h3', x: 'Đèn dò ga halide (halogen)' },
      { t: 'p', x: 'Khi propan (butan, cồn, axetylen...) cháy cho ngọn lửa không màu; đặt tấm đồng nhỏ vào ngọn lửa thì vẫn không màu. Nhưng nếu có mặt một lượng dù rất nhỏ chất chứa halogen (R11, R12, R22, R502...) ngọn lửa biến thành màu xanh lục vì tiếp xúc với tấm đồng nung nóng. Rò ít ngọn lửa xanh lục, rò nhiều ngọn lửa xanh da trời sáng. Phát hiện vết rò nhỏ đến khoảng 5 g/tháng.' },
      { t: 'list', items: [
        'Giữ bình ga propan ở tư thế thẳng đứng; nghiêng thì đèn không cháy hoặc cháy đuối.',
        'Đưa vòi hút vào những vị trí nghi ngờ rò; nên đặt vòi hút phía dưới vì ga lạnh nặng hơn không khí, có xu hướng đi xuống.',
        'Thường xuyên lau chùi, vệ sinh phin lọc đầu vòi hút; kiểm tra tấm đồng và ngọn lửa ra đúng lỗ tấm đồng.',
        'Các bước: mở hé van (mở to quá sẽ khó thắp); thắp đèn bằng bật lửa hoặc diêm; điều chỉnh ngọn lửa; đưa vòi hút vào chỗ nghi rò.'
      ] },
      { t: 'widget', name: 'dl-halide', title: 'Đèn halide: ngọn lửa đổi màu khi gặp ga lạnh' },
      { t: 'p', x: '<b>Máy dò ga điện tử</b> nhạy nhất hiện nay, có 3 loại: nguồn ion, thermistor (đổi nhiệt độ), điện môi (dielectric — thường gặp nhất, ví dụ Robinair 14950 chạy pin: đầu dò dài 35 cm, phần dây xoắn dẫn tới 1 m, phát hiện rò đến 14 g/năm, tự bù cân bằng trong không khí ô nhiễm, báo âm thanh và ánh sáng). Dùng khi hạn chế gió thổi do quạt (che chắn gió trước khi dò); di chuyển đầu dò khoảng 2 cm/s; đặt đầu dò phía dưới vị trí nghi rò; vệ sinh đầu dò sau mỗi lần dùng.' }
    ] },
    { icon: '🔧', title: 'Sửa vị trí rò rỉ', blocks: [
      { t: 'list', items: [
        'Phải hút sạch ga ra khỏi vị trí đó; với tủ lạnh và điều hòa cửa sổ phải hút sạch ga ra khỏi hệ thống, nạp khí trơ (nitơ) để áp suất trong hệ bằng áp suất khí quyển bên ngoài.',
        'Phân biệt vật liệu: cạo lớp phủ bề mặt; thép màu xám trắng và bị nam châm hút; đồng màu sáng đỏ không bị nam châm hút; nhôm màu sáng bạc, mềm, không bị nam châm hút. Thép và đồng hàn bạc hoặc hàn đồng. Nhôm có thể hàn điện trở với thép và đồng, hoặc sửa chữa bằng epoxy.',
        'Rò ở mối nối loe: mối nối chưa chuẩn, mũ ren chưa siết đủ, đường ren lệch hỏng, miệng loe nứt vỡ → tốt nhất cắt bỏ đầu loe, thay mũ loe và loe lại, siết đúng yêu cầu.',
        'Mối hàn nối ống rò: làm sạch rồi hàn đắp lên một lớp nước hàn mới.',
        'Ống thép thường có vết hàn theo chiều dọc: làm sạch hoặc dùng dũa tay sạch trước khi hàn lại bằng hàn bạc/hàn đồng.',
        'Tách xa chỗ rò khỏi hệ thống càng xa càng tốt; dùng tấm kim loại che ngọn lửa hàn để không ảnh hưởng chi tiết khác, tận dụng phản xạ nhiệt.'
      ] },
      { t: 'warn', x: 'Không được nung nóng phin sấy lọc vì ẩm sẽ tràn vào hệ thống. Không cắt ống bằng cưa (mạt cắt vào hệ thống); chỉ cắt bằng dao cắt ống hoặc kìm. Dàn bay hơi bằng nhôm có thể dùng epoxy.' }
    ] },
    { icon: '⛽', title: 'Nạp ga cho tủ lạnh', blocks: [
      { t: 'p', x: 'Tủ lạnh thiếu ga thì phải xác định nguyên nhân: thiếu ga do rò rỉ → tìm chỗ rò, rút ga ra khỏi tủ, hút chân không, nạp nitơ, hàn lại. Thiếu ga do nạp chưa đủ → nạp bổ sung. Biểu hiện thiếu ga: dàn bay hơi chỉ bám tuyết một phần; áp suất đẩy thấp hơn bình thường; áp suất hút thấp hơn bình thường; tủ chạy hầu như liên tục.' },
      { t: 'steps', items: [
        'Hút chân không hệ thống.',
        'Nối chai ga với hệ thống qua bộ nạp 3 dây. Nếu blốc có ống nạp ga thì dùng van trích trích đầu ống nạp ga nối với bộ nạp; nếu không có ống nạp ga phải tạo một ống công nghệ từ đường hút, có đầu đực tương ứng với đầu cái của dây nối mềm bộ loe.',
        'Để tạo áp suất cho chai ga có thể dùng nước nóng làm nóng chai nhưng nhiệt độ không quá 49 °C. Không dùng đèn khò hoặc ngọn lửa hở để làm nóng chai ga.',
        'Dây nối phải sạch ẩm và không khí trước khi nạp. Ngày nay để bảo vệ môi trường không dùng cách đuổi khí bằng ga mà dùng bơm chân không trước khi nạp.',
        'Khi nạp, cho máy nén hoạt động và cho từng lượng nhỏ hơi ga vào hệ thống, tránh quá tải máy nén và dễ theo dõi dàn nóng, dàn lạnh. Dấu hiệu đủ ga: toàn bộ dàn lạnh bám tuyết đều; tuyết không được bám trên đường hút về máy nén. Thấy tuyết bám trên đường hút phải rút bớt ga.'
      ] },
      { t: 'key', x: 'Luôn nạp ga ở dạng HƠI vào đường hút (trừ tủ lạnh thương nghiệp có bộ hóa hơi). Nạp lỏng vào đầu hút tủ lạnh dễ làm hỏng máy nén (sủi dầu, bốc dầu, đập thủy lực). Hệ thống lạnh tự nhiên thiếu ga thì chắc chắn bị rò rỉ: phải tìm ra chỗ rò, sửa rồi mới nạp lại.' },
      { t: 'p', x: 'Tủ lạnh dùng ga không đồng sôi như R404A, R407C (nạp lỏng) phải nạp qua đoạn ống gia nhiệt để đảm bảo ga lỏng đã bay hơi hoàn toàn khi vào đường hút. Hơi ga có nhiệt độ quá cao vào máy nén gây nóng máy và có thể cháy máy nén. Bầu tích lỏng cuối dàn bay hơi giúp giảm nguy cơ lỏng lọt về máy nén; tuy vậy lượng ga nạp vẫn phải rất chính xác.' },
      { t: 'p', x: '<b>Nạp theo kinh nghiệm:</b> nạp từ từ, quan sát dàn bay hơi cho đến khi bám tuyết đều; sau đó nếu đường hút chớm chảy mồ hôi hoặc bám tuyết thì dừng lại và xả ra một chút ga để ống hút không chảy mồ hôi hoặc hết bám tuyết. Đối với tủ lạnh không nên cho đường hút chảy mồ hôi. <b>Nạp bằng xi lanh nạp ga:</b> xả toàn bộ ga khỏi hệ thống, dùng xi lanh nạp đúng lượng ga nhà chế tạo quy định.' },
      { t: 'widget', name: 'dl-fridge-charge', title: 'Nạp ga tủ lạnh: quan sát tuyết bám và áp suất hút' },
      { t: 'h3', x: 'Nạp bằng xi lanh nạp ga' },
      { t: 'p', x: 'Xi lanh nạp ga là bình trụ trong suốt có khắc thang chia lượng nạp cho nhiều loại ga (R12, R22, R502...), tính theo OZ (28,3 g), pound (0,454 kg) hoặc kg. Nạp chính xác lượng ga vào hệ thống mà không cần quan sát tuyết bám — vì dàn bay hơi tủ lạnh nhiều khi khó nhận biết đủ chưa.' },
      { t: 'steps', items: [
        'Cân đong đủ ga lạnh lỏng vào xi lanh nạp ga.',
        'Nối xi lanh nạp ga và bơm chân không vào bộ nạp 3 dây.',
        'Nối bộ nạp 3 dây vào ống công nghệ (qua van trích lắp trên ống công nghệ).',
        'Mở van trích và mở tất cả các van trừ van cao áp H trên bộ nạp.',
        'Thực hiện quy trình hút chân không cho tủ lạnh.',
        'Sau hút chân không, đóng van phía bơm chân không.',
        'Mở van xi lanh nạp ga, quan sát lượng nạp; một số xi lanh có dây nung điện trở để tăng nhiệt độ ga, đẩy nhanh quá trình nạp nếu cần.',
        'Đã nạp đủ: đóng van xi lanh nạp ga, đóng van trích.',
        'Kẹp ống, tháo van trích, cắt đầu ống, bóp ống và hàn kín đầu ống.',
        'Thử kín mối hàn; chạy thử, đưa tủ vào vận hành, bàn giao.'
      ] },
      { t: 'warn', x: 'Kiểu nạp lỏng: phải bảo đảm ga vào đến blốc đã hóa hơi hết; có thể cho tủ chạy khi nạp, hạn chế áp suất trên áp kế LO không quá cao. Sau khi đã tháo bơm chân không và nối vào xi lanh nạp ga (không có bộ 4 dây), phải dùng ga xi lanh để đuổi khí trong đoạn ống nối giữa xi lanh và bộ nạp — vẫn còn một lượng không khí rất nhỏ nằm trong thân bộ nạp không đuổi được: đây là nhược điểm của bộ nạp 3 dây trong tình huống này.' },
      { t: 'h3', x: 'Van trích' },
      { t: 'p', x: 'Dùng cho hệ thống kín không có van dịch vụ.' },
      { t: 'steps', items: [
        'Chọn vị trí cần trích ga, vệ sinh sạch sẽ.',
        'Tháo đai ốc 3, lắp van trích lên ống đồng, lắp đai ốc 3 và siết đai ốc 3 để vặn kín khít lên ống đồng.',
        'Bắt đầu dây mềm bộ nạp vào đầu nối 2, vặn chặt.',
        'Vặn tay vặn theo chiều kim đồng hồ, kim van sẽ xuyên qua vỏ ống đồng, tạo một lỗ nối thông với bộ nạp.',
        'Khi muốn thông với bộ nạp, vặn tay vặn ngược chiều kim đồng hồ (theo hướng dẫn) để mở.'
      ] },
      { t: 'p', x: 'Có loại đầu ga có lõi giống van xăm xe máy, bắt bằng ren hoặc hàn trực tiếp lên đường ống hút và đẩy; đầu loe có mũ bịt kín, khi cần chỉ cần mở nắp nối dây vào là làm dịch vụ cho hệ lạnh. Van trích có lõi cũng có nhiều dạng.' }
    ] },
    { icon: '🧲', title: 'Ampe kìm', blocks: [
      { t: 'h3', x: 'Những điều cần lưu ý' },
      { t: 'list', items: [
        'Luôn chọn nấc thang đo trước khi tiến hành đo. Nếu chưa biết giá trị dòng điện hoặc điện áp cần đo, luôn chọn nấc thang cao nhất; khi tìm ra nấc phù hợp thì chỉnh xuống nấc thang đo.',
        'Không đo dòng điện trên 100 A quá thời gian quy định vì nhiệt sinh ra trong ampe kìm làm mất chính xác. Đo 2–3 lần với thời gian thật nhanh.',
        'Điện áp cao nhất ampe kìm đo được là 600 V; để an toàn không bao giờ đo điện áp cao hơn.',
        'Khi đo dòng điện trong trường điện từ mạnh, kim đo có thể bị lệch ngay cả khi kim không ngoặm vào dây dẫn: tránh đo trong trường hợp này.',
        'Không cất giữ ampe kìm ở nơi nhiệt độ cao và độ ẩm cao.'
      ] },
      { t: 'steps', items: [
        'Mở khóa kim đo. Kim đo thường được bảo vệ bằng nút gạt; khi cần đo phải mở khóa. Nếu không nhìn trực tiếp được, khóa kim ở vị trí đó rồi mang ampe kìm ra ngoài xem giá trị đo.',
        'Kiểm tra xem kim có chỉ vào 0 hay không. Nếu không, hiệu chỉnh cho kim chỉ vào điểm 0.',
        'Chọn nấc thang đo phù hợp, nếu không biết dòng điện thì chọn nấc thang cao nhất.',
        'Mở gọng kìm và ngoặm vào <b>một dây dẫn</b>, đặt dây vào giữa hai gọng kìm.',
        'Nếu kim đo ở vị trí thấp, chọn nấc thang phù hợp hơn.',
        'Nếu đo ở vị trí mà không đọc được ngay kết quả, đẩy nút khóa kim đo lại, rồi mang ampe kìm ra ngoài để đọc.'
      ] },
      { t: 'widget', name: 'dl-clamp', title: 'Ampe kìm: chọn nấc, ngoặm một dây, đọc dòng điện' }
    ] },
    { icon: '📟', title: 'Vạn năng kế', blocks: [
      { t: 'warn', x: 'Trước khi tiến hành bất kỳ phép đo nào, hãy 2 lần kiểm tra núm xoay có ở vị trí nấc thang đo hay không. Nếu núm xoay không ở vị trí nấc thang đo, có thể xảy ra hồ quang và phát nổ.' },
      { t: 'list', items: [
        'Mỗi lần đo, kiểm tra kim đo có chỉ vào số 0 hay không; không thì phải hiệu chỉnh lại.',
        'Kiểm tra cầu chì có bị đứt không khi cho chập mạch que thử với nấc thang đo Ω. Nếu vạn năng kế không hoạt động, trước hết nên kiểm tra cầu chì.',
        'Phải chắc chắn rằng dòng điện và điện áp cần đo có trị số nhỏ hơn nấc thang đo đã chọn. Khi thay đổi nấc thang đo luôn phải ngắt tiếp điểm với mạch đo bằng cách ngắt một que đo khỏi mạch điện.',
        'Không dùng vạn năng kế để đo điện áp cao trong các thiết bị vận hành với tần số cao (ví dụ lò vi sóng): tần số cao làm giảm độ bền điện môi; có thể gây điện giật nghiêm trọng.',
        'Không cất giữ vạn năng kế ở nơi nhiệt độ cao và độ ẩm cao.',
        'Thử pin: điện áp của pin đo bằng tải 10 Ω; so sánh số liệu với nấc DC 3 V; thang đo chia từ 0,9 đến 1,8 V.'
      ] },
      { t: 'table', head: ['Chức năng', 'Cách đo'], rows: [
        ['DCV (điện áp một chiều)', 'Núm xoay vào nấc DCV phù hợp; que đen cắm ổ ⊖, que đỏ ổ ⊕. Mắc vạn năng kế song song với tải; que đen cực âm, que đỏ cực dương'],
        ['DCmA (dòng một chiều)', 'Núm xoay nấc phù hợp. Ngắt hộ tiêu thụ ra khỏi mạch và mắc nối tiếp vạn năng kế: que đen cực âm, que đỏ cực dương. Giá trị đọc có thể tới 50 µA từ thang 10 và nhân với hệ số 5'],
        ['ACV (điện áp xoay chiều)', 'Núm xoay nấc ACV phù hợp; đo như DCV'],
        ['Ω (điện trở)', 'Núm xoay vào nấc Ω phù hợp. Nối chập hai que đo và hiệu chỉnh kim về số 0 bằng núm OΩ ADJ; nếu bằng mọi cách kim không lệch ra khỏi 0 thì phải thay pin mới. Luôn cắt nguồn điện trước khi đo điện trở']
      ] },
      { t: 'tip', x: 'Ứng dụng thường gặp: đo điện trở ba cọc blốc để xác định C–S–R; kiểm tra thông mạch cuộn dây; đo điện áp nguồn khi tủ chạy; đo cách điện cần mêgaôm (megohmmeter), vạn năng kế không thay được.' },
      { t: 'widget', name: 'dl-multimeter', title: 'Vạn năng kế: chọn nấc thang và cách mắc que đo' }
    ] }
  ],
  summary: [
    'Bộ nạp 3 dây: van L (hạ áp, LO, đường hút), van H (cao áp, HI), đầu C giữa nối chai ga/bơm chân không.',
    'Hút chân không khoảng 1 giờ, tráng ga 2 lần trước khi nạp.',
    'Van dịch vụ dàn nóng: vặn xuống = khóa; nâng lên = khóa cửa dịch vụ, thông hệ; lưng chừng = thông cả ba ngả.',
    'Thử kín bằng nitơ: 7 bar trong 1 giờ, 12 bar trong 24 giờ; hiệu chỉnh theo nhiệt độ T₂/T₁; không dùng oxi.',
    'Đèn halide: ngọn lửa xanh lục/xanh da trời khi gặp halogen; đặt vòi hút phía dưới vì ga nặng hơn không khí.',
    'Sửa rò: xả sạch ga, không nung phin lọc, không cưa ống; hàn bạc cho thép/đồng, epoxy cho nhôm.',
    'Nạp ga tủ lạnh ở dạng hơi vào đường hút, nạp từ từ; dùng xi lanh nạp ga để nạp chính xác.',
    'Ampe kìm ngoặm một dây; vạn năng kế phải đúng nấc, nối tiếp khi đo dòng, song song khi đo áp.'
  ],
  cards: [
    ['Van L và H của bộ nạp?', 'L: hạ áp (đường hút, đồng hồ LO); H: cao áp (đường đẩy, đồng hồ HI)'],
    ['Đầu C nối với?', 'Chai ga, bình dầu hoặc bơm chân không'],
    ['Hút chân không bao lâu?', 'Khoảng 1 giờ và tráng ga 2 lần'],
    ['Nitơ thử kín bước 1?', '7 bar, theo dõi 1 giờ'],
    ['Nitơ thử kín bước 2?', '12 bar, theo dõi 24 giờ'],
    ['Công thức hiệu chỉnh thử kín?', 'p<sub>d2</sub> = (T₂/T₁)(p<sub>d1</sub>+p<sub>b1</sub>) − p<sub>b2</sub>'],
    ['Chai nào tuyệt đối không dùng thử kín?', 'Chai oxi'],
    ['Đèn halide ngọn lửa xanh lục báo?', 'Có rò ga halogen (freon)'],
    ['Đèn halide rò ít/rò nhiều?', 'Xanh lục / xanh da trời sáng'],
    ['Đặt đầu dò ga ở?', 'Phía dưới vị trí nghi rò (ga nặng hơn không khí)'],
    ['Có được nung phin sấy lọc khi hàn không?', 'Không, ẩm sẽ tràn vào hệ thống'],
    ['Nạp ga tủ lạnh hơi hay lỏng?', 'Hơi vào đường hút'],
    ['Nước nóng làm nóng chai ga tối đa?', '49 °C'],
    ['Dấu hiệu đủ ga tủ lạnh?', 'Dàn lạnh bám tuyết đều, không bám trên đường hút'],
    ['Điện áp lớn nhất ampe kìm đo?', '600 V'],
    ['Ampe kìm ngoặm bao nhiêu dây?', 'Một dây dẫn']
  ],
  quiz: [
    { q: 'Van L trên bộ nạp 3 dây nối với:', o: ['Đường đẩy', 'Đường hút (hạ áp)', 'Bình dầu', 'Quạt'], a: 1, e: 'L = Low, hạ áp.' },
    { q: 'Thử kín bằng khí, chai nào KHÔNG được dùng?', o: ['Nitơ', 'CO₂', 'Argon', 'Oxi'], a: 3, e: 'Oxi gây nổ.' },
    { q: 'Thử kín nitơ ở 12 bar; sáng hôm sau áp tụt nhẹ, trời lạnh hơn. Kết luận:', o: ['Chắc chắn rò', 'Có thể vẫn kín, cần hiệu chỉnh theo nhiệt độ', 'Hết nitơ', 'Hỏng đồng hồ'], a: 1, e: 'Áp suất giảm theo nhiệt độ tuyệt đối.' },
    { q: 'Ngọn lửa đèn halide chuyển xanh lục khi:', o: ['Hết gas', 'Gặp halogen (ga freon)', 'Gió mạnh', 'Có nước'], a: 1, e: 'Halogen + tấm đồng nung nóng.' },
    { q: 'Nạp ga tủ lạnh nên nạp:', o: ['Lỏng vào đường hút', 'Hơi vào đường hút', 'Lỏng vào dàn nóng', 'Bằng oxi'], a: 1, e: 'Tránh lỏng lọt về máy nén.' },
    { q: 'Ampe kìm đo dòng nên ngoặm:', o: ['Cả dây pha và trung tính', 'Một dây', 'Hai dây cùng chiều', 'Chỉ dây đất'], a: 1, e: 'Ngoặm cả hai dây thì từ trường triệt tiêu.' },
    { q: 'Khi chưa biết giá trị cần đo, chọn nấc thang:', o: ['Thấp nhất', 'Cao nhất', 'Giữa', 'Ω'], a: 1, e: 'Bảo vệ đồng hồ.' },
    { q: 'Kim van dịch vụ dàn nóng nâng lên hết nghĩa là:', o: ['Khóa đường ống với máy nén', 'Khóa cửa dịch vụ, thông dàn ngưng và dàn bay hơi', 'Thông cả ba ngả', 'Mở van xả'], a: 1, e: 'Chế độ vận hành bình thường.' }
  ],
  match: [
    ['Bộ nạp 3 dây', 'Đo áp, hút chân không, nạp ga'],
    ['Đèn halide', 'Ngọn lửa xanh khi rò'],
    ['Van trích', 'Dịch vụ hệ kín không có van'],
    ['Nitơ', 'Khí thử kín'],
    ['Ampe kìm', 'Đo dòng ngoặm một dây'],
    ['Xi lanh nạp ga', 'Nạp đúng lượng']
  ]
});
