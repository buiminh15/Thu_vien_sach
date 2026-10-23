window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 8,
  title: 'Hư hỏng và sửa chữa tủ lạnh',
  intro: 'Dấu hiệu tủ chạy bình thường, bảng chẩn đoán triệu chứng – nguyên nhân – cách sửa, hư hỏng bên ngoài (rơle, quạt, điện trở, cách nhiệt) và bên trong hệ thống lạnh, cách lắp bộ nạp 3 dây và van trích.',
  sections: [
    { icon: '✅', title: 'Dấu hiệu tủ hoạt động bình thường', blocks: [
      { t: 'p', x: 'Sau khi kiểm tra nguồn, vị trí kê và các điều kiện làm việc, cắm điện, bật núm thermostat, đèn trong tủ sáng. Chờ 3–5 phút nghe tiếng "tách" nhẹ của rơle khởi động đóng mạch, tủ bắt đầu chạy êm; sờ dàn lạnh thấy lạnh dần, một lúc sau có tuyết bám; bên ngoài dàn ngưng nóng đều, đầu blốc nóng đều. Sau 30–40 phút (tùy nhiệt độ ngoài trời) tủ bắt đầu chạy theo chu kỳ.' },
      { t: 'table', head: ['Thông số tủ R12 bảo quản thực phẩm tươi', 'Môi trường 21 °C', 'Môi trường 32 °C'], rows: [
        ['Nhiệt độ dàn bay hơi: đầu / giữa / cuối chu kỳ', '−9,5 / −15 / −18 °C', '−9,5 / −15 / −18 °C'],
        ['Áp suất dàn bay hơi (đầu / giữa / cuối)', '0,83 / 0,55 / 0,34 bar', '0,83 / 0,55 / 0,34 bar'],
        ['Nhiệt độ ngưng tụ', '38 °C', '49 °C'],
        ['Áp suất ngưng tụ (đầu / giữa–cuối)', '4,8 / 8,3 bar', '5,9 / 10,9 bar']
      ] },
      { t: 'key', x: 'Quy tắc nhanh: nhiệt độ ngưng tụ ≈ nhiệt độ môi trường + 17 K. Môi trường 21 °C → ngưng 38 °C. Nếu ngưng tới 49 °C chẳng hạn thì dàn ngưng làm việc kém (bẩn, bị bịt đường thông gió) hoặc có khí không ngưng trong hệ thống.' },
      { t: 'tip', x: 'Tủ 2 buồng 500 lít, R12, động cơ 1/3 HP (250 W), FLA 5,6 A: ở 21 °C hệ số b ≈ 62%, điện ≈ 3,8 kWh/24 h; ở 32 °C b ≈ 100% với điện ≈ 6,0 kWh/24 h; ngưng tụ 38 / 49 / 53 °C theo môi trường 21 / 32 / 38 °C. Mỗi loại tủ (R134a, R404A...) có thông số riêng; không có catalog thì xây dựng từ đồ thị p–h.' },
      { t: 'h3', x: '11 biểu hiện tủ lạnh bất thường' },
      { t: 'list', items: [
        'Tủ không chạy.', 'Tủ chạy liên tục, buồng quá lạnh.', 'Tủ chạy liên tục nhưng buồng vẫn quá nóng.', 'Tủ chạy liên tục, nhiệt độ buồng đạt yêu cầu.',
        'Chạy theo chu kỳ nhưng ngăn lạnh quá nóng, ngăn đông đạt.', 'Chạy theo chu kỳ nhưng ngăn đông quá lạnh.', 'Rơle bảo vệ quá tải ngắt mạch.', 'Chạy chu kỳ bình thường nhưng ngăn lạnh không đạt yêu cầu.',
        'Chạy theo chu kỳ nhưng không làm đá được.', 'Dàn lạnh bám tuyết dày, không đều.', 'Tủ chạy rất ồn.'
      ] },
      { t: 'p', x: 'Công việc sửa chữa chia làm 3 loại: (1) sửa thiết bị bên ngoài (dây điện, rơle, điện trở...); (2) sửa bên trong (máy nén, dàn nóng, dàn lạnh, ống mao, phin sấy lọc); (3) đại tu hệ thống lạnh.' }
    ] },
    { icon: '🩺', title: 'Bảng chẩn đoán triệu chứng – nguyên nhân – sửa chữa', blocks: [
      { t: 'p', x: 'Bảng dưới đây gom các triệu chứng của tủ lạnh. Hãy chọn một triệu chứng để xem nguyên nhân thường gặp và cách khắc phục.' },
      { t: 'widget', name: 'dl-fridge-diag', title: 'Chẩn đoán hư hỏng tủ lạnh theo triệu chứng' },
      { t: 'table', head: ['Triệu chứng', 'Nguyên nhân chính', 'Cách xử lý'], rows: [
        ['Tủ không chạy', 'Nổ cầu chì; điện áp thấp (±10%); rơle bảo vệ / nhiệt độ / khởi động hỏng; máy nén hỏng; dây đứt; tuột dây vào máy nén hoặc đồng hồ xả băng', 'Thay cầu chì; kiểm tra điện áp, dùng ổn áp; kiểm tra thay rơle; đo thông mạch bằng đèn thử'],
        ['Buồng lạnh quá nóng, chạy liên tục', 'Mở cửa nhiều; nhồi thực phẩm bịt kín đối lưu; thực phẩm nóng; đệm cửa không kín; đèn sáng khi đóng cửa; núm đặt quá nóng; ghi gió ngăn đông sai; quạt hỏng; clape hút máy nén hở; thiếu ga; dàn ngưng bị cản trở hoặc bẩn; môi trường ≥ 33 °C; thermostat hỏng', 'Nhắc người dùng; kê lại tủ theo nivô, chỉnh đệm cửa; kiểm tra công tắc cửa; chuyển vị trí / vệ sinh dàn ngưng; hút chân không nạp lại ga; thay blốc hoặc thermostat'],
        ['Ngăn lạnh quá lạnh', 'Cửa gió ngăn lạnh đặt tối lạnh nhất; cửa gió không đóng mở; điện trở sưởi cửa gió hỏng', 'Chỉnh cửa gió về vị trí ít lạnh; loại bỏ trở ngại; thay bộ chỉnh / điện trở'],
        ['Ngăn đông quá lạnh', 'Núm đặt quá lạnh; đầu cảm nhiệt thermostat gắn sai vị trí; thermostat hỏng hoặc gãy ống mao', 'Xoay núm về ít lạnh; cố định đầu cảm vào đúng vị trí; thay thermostat'],
        ['Chạy rất ồn', 'Tủ kê không vững; ống chạm vào tủ và rung động; khay hứng nước ngưng lỏng; cánh quạt chạm vỏ; máy nén không có chống rung tốt', 'Kê lại bằng nivô; uốn ống, dùng xốp ép sát; bắt lại khay; kiểm tra quạt; kiểm tra thay bệ đỡ / chống rung'],
        ['Ngắt chu kỳ do rơle quá tải', 'Rơle hỏng hoặc yếu; điện áp thấp; máy nén hư hỏng', 'Thay rơle quá tải; đo điện áp; kiểm tra máy nén'],
        ['Mô tơ máy nén bị bó (kẹt)', 'Gãy lá van; thiếu dầu; máy nén quá nóng', 'Thay blốc mới; bổ sung dầu; nếu vẫn không chạy thì thay blốc'],
        ['Băng tuyết đóng dày trên cánh tản nhiệt dàn lạnh', 'Đồng hồ xả băng hỏng; điện trở xả băng hỏng; thermostat hỏng', 'Thử bằng đèn; thay mới'],
        ['Có băng trong khay hứng nước xả băng', 'Điện trở khay hứng nước xả băng hỏng', 'Thay mới'],
        ['Tủ chạy liên tục, nhiệt độ tủ bình thường', 'Băng tuyết tích tụ dày trên dàn bay hơi; đầu cảm thermostat không tiếp xúc với dàn', 'Kiểm tra đệm cửa; cố định lại đầu cảm để tiếp xúc tốt'],
        ['Ngăn đông chạy liên tục, quá nóng', 'Cách nhiệt tủ bị ẩm: băng tuyết tích tụ phía ngoài ống cách nhiệt', 'Ngắt điện, để tan đá, sấy khô cách nhiệt, làm kín những lỗ rò rỉ bằng silicon rồi lắp lại'],
        ['Tuyết bám tích tụ lên dàn lạnh rất nhanh', 'Cửa ngăn đông hở; đệm cửa hỏng, xoắn hoặc teo', 'Hiệu chỉnh bản lề, thay đệm cửa'],
        ['Cửa ngăn đông bị dính không mở được', 'Điện trở sưởi mép cửa hỏng; đệm cửa rách, xoắn, hóa cứng', 'Dùng điện trở dự trữ hoặc lắp mới; thay đệm'],
        ['Tủ lạnh làm việc, ngăn đông lạnh xuống rồi lại ấm lên', 'Có ẩm trong hệ thống (tắc ẩm)', 'Nạp lại ga, đặt phin sấy lọc trên đường lỏng để loại hết ẩm'],
        ['Năng suất lạnh giảm dần', 'Cặn bẩn tích tụ trong ống mao', 'Dùng dụng cụ vệ sinh ống mao hoặc thay ống mao mới'],
        ['Chạy liên tục, không lạnh, dàn ngưng không nóng', 'Mất ga hoàn toàn; tắc bẩn hoàn toàn phin sấy lọc', 'Tìm rò rỉ, hút chân không, nạp ga mới; hơ nóng phin gõ nhẹ để thông, không được phải thay']
      ] }
    ] },
    { icon: '🧰', title: 'Hư hỏng bên ngoài hệ thống lạnh', blocks: [
      { t: 'h3', x: 'Băng tuyết đóng dày trên dàn lạnh' },
      { t: 'p', x: 'Lớp tuyết dày làm giảm hiệu suất trao đổi nhiệt. Nguyên nhân chính: đệm cửa không kín hoặc xả băng tự động không làm việc. Ngăn đông có cửa riêng thường có điện trở sưởi ở mép để tuyết không bám dính; nếu điện trở hỏng, tuyết bám dày làm cửa hở, ẩm lọt vào và đóng băng lên dàn. Sơ đồ điện dán phía sau tủ cho biết có điện trở sưởi cửa hay không.' },
      { t: 'tip', x: 'Thử độ kín đệm cửa: kẹp các dải giấy nhỏ vào đệm, đóng cửa rồi kéo dải giấy ra. Kéo ra dễ dàng nghĩa là đệm không đủ khít; phải chỉnh bản lề hoặc thay đệm.' },
      { t: 'h3', x: 'Cách nhiệt tủ bị ướt hoặc đóng băng' },
      { t: 'p', x: 'Nếu cách nhiệt có ẩm đọng thành nước và tuyết bên trong là hư hỏng rất nghiêm trọng: vỏ tủ bên ngoài có chỗ hở không kín hơi, hơi nước bên ngoài dần dần tích tụ lại thành nước và băng, cách nhiệt ẩm ướt, mất tác dụng. Hai dấu hiệu: tủ chạy liên tục; vỏ tủ lạnh hơn bình thường, đôi khi đổ mồ hôi. Ở phần vỏ ngăn đông, ẩm đóng băng lớn thể tích nên làm cong vênh vỏ tủ.' },
      { t: 'p', x: 'Xử lý: xác định chỗ hở và bịt kín bằng silicon hoặc keo không thấm ẩm. Do nhiệt độ dàn rất thấp và phần lớn ngăn đông có lỗ thông hơi vào cách nhiệt nên ẩm sẽ dần dần tích tụ vào dàn bay hơi và cách nhiệt được làm khô trở lại.' },
      { t: 'h3', x: 'Chẩn đoán hư hỏng bên ngoài' },
      { t: 'p', x: 'Nhiều tủ bị hỏng, thợ nghĩ phải sửa các chi tiết bên trong như máy nén, dàn nóng, dàn lạnh, ống mao, phin sấy lọc, nhưng thực chất hư hỏng nằm ở thiết bị ngoài: rơle nhiệt độ, rơle khởi động, giắc tiếp điện kém, dây đấu lỏng lẻo, tụ khởi động (nếu có), hoặc nguồn điện cấp. Khi máy nén không khởi động được, kêu "gừ gừ", hoặc chạy chu kỳ quá ngắn thì phải kiểm tra từng thiết bị độc lập trước khi kết luận blốc hỏng.' },
      { t: 'steps', items: [
        'Kiểm tra từng thiết bị độc lập (tháo khỏi mạch điện).',
        'Có thể thay thiết bị khác phù hợp còn tốt vào xem blốc có chạy không.',
        'Các đầu nối điện phải sạch, chặt, tiếp xúc tốt. Nếu lỏng hoặc bẩn sinh nhiệt làm dây đổi màu: tiếp xúc kém thường chuyển nâu sẫm do oxy hóa; cách điện co lại, đổi màu đen, dây chuyển màu xanh cho thấy vị trí đó sinh nhiệt vì tiếp xúc không tốt.',
        'Kiểm tra nguồn điện: đo vôn kế điện áp cấp khi chưa chạy, rồi cắm tủ chạy và đo lại khi tủ đang chạy. Thông thường cho phép sụt nhẹ (không quá 5 V). Nếu thấp quá 10 V là phần điện của hệ lạnh hỏng, cần kiểm tra: rơle bảo vệ; cuộn dây động cơ; đường dây điện nối tới tủ.'
      ] },
      { t: 'h3', x: 'Khi máy nén không khởi động' },
      { t: 'steps', items: [
        'Kiểm tra điện có vào tới động cơ không.',
        'Nếu có, kiểm tra rơle khởi động và rơle bảo vệ.',
        'Tháo bỏ toàn bộ dây điện khởi động rơle.',
        'Thử động cơ bằng dây thử (kẹp mỏ cá sấu hoặc giắc cắm): tất cả phải được bọc cách điện bằng nhựa hoặc ống cao su để phòng điện giật cho người thợ.'
      ] },
      { t: 'widget', name: 'dl-test-wire', title: 'Dây thử khởi động blốc: sơ đồ nút bấm đóng đồng thời R + S' },
      { t: 'p', x: 'Khi thử, nối đất cho động cơ. Với động cơ có tụ khởi động cần nhớ nối tắt qua điện trở 20 kΩ để phóng điện tránh bị giật vì tụ tích điện (không có điện trở thì dùng bút thử điện nối tắt hai đầu tụ). Sau khi cắm phích điện, nhấn nút 5 để cấp điện đồng thời cho cả cuộn khởi động và cuộn làm việc. Thông thường động cơ khởi động xong trong nửa giây; giữ nút không quá 2 giây — giữ lâu mà động cơ không khởi động thì cả hai cuộn có thể cháy.' },
      { t: 'p', x: 'Quạt dàn lạnh hỏng: sửa hoặc thay mới; đánh dấu vị trí cánh quạt cắm vào trục trước khi tháo để lắp đúng vị trí cũ. Điện trở sưởi cửa hỏng có thể làm cánh cửa ngăn đông bị dính do tuyết: đo bằng ôm kế hoặc bóng đèn thử; rút ra khỏi ổ đấu nối; nếu hỏng, tìm dây điện trở sưởi dự trữ (nhiều tủ có sẵn) nối vào ổ điện, hoặc lắp điện trở mới cùng loại (dùng sợi dây thép kéo dây qua phần cách nhiệt; nếu cần khoan lỗ Ø10 ở phía sau tủ).' },
      { t: 'p', x: 'Nhiệt độ trong tủ không đáp ứng yêu cầu: thermostat có thể hỏng hoặc đặt sai. Để đánh giá, đo nhiệt độ trong tủ và ghi lại biến thiên trong 24 giờ; từ biểu đồ có thể đánh giá tình trạng rơle nhiệt độ.' }
    ] },
    { icon: '🔄', title: 'Khởi động một động cơ bị "bó"', blocks: [
      { t: 'p', x: 'Blốc để lâu không chạy có thể bị đóng cặn dầu nhớt hoặc bụi bẩn nên kẹt, không khởi động được bình thường. Có 3 cách (nhấn nút không quá 1–2 giây, nếu không cuộn dây có thể cháy):' },
      { t: 'steps', items: [
        '<b>Dùng thêm tụ điện</b> để tăng mômen khởi động cho động cơ: cắm phích vào ổ rồi nhấn nút khởi động 1–2 giây. Nếu khởi động được, tháo tụ ra và khởi động bình thường; nếu chạy bình thường thì coi như động cơ đã vượt qua điểm chết (điểm bó).',
        '<b>Dùng điện áp cao hơn bình thường</b>: ví dụ blốc 110 V thì dùng 220 V; phải rất thận trọng, nhấn nút khởi động không quá 1 giây, nếu không cuộn dây sẽ cháy.',
        '<b>Kết hợp điện áp cao và tụ 100 μF</b> rồi khởi động thử. Nếu động cơ vượt điểm chết thì khởi động bình thường. Nếu khởi động bình thường 3–4 lần mà không khởi động lại được thì phải thay mới.'
      ] },
      { t: 'warn', x: 'Nếu động cơ không khởi động, tiếp tục kiểm tra động cơ theo mục 4.3.6 (Thử nghiệm và sửa chữa blốc).' },
      { t: 'p', x: 'Chu kỳ làm việc quá ngắn (đóng ngắt liên tục): do rơle nhiệt độ lắp sai hoặc rơle khởi động lỏng lẻo, tiếp xúc kém. Kiểm tra rơle nhiệt độ và tiếp xúc của rơle khởi động, thay mới nếu cần.' }
    ] },
    { icon: '🔩', title: 'Hư hỏng bên trong và bộ nạp 3 dây', blocks: [
      { t: 'list', items: [
        'Dàn bay hơi chỉ bám tuyết một phần → có thể thiếu ga.',
        'Tuyết bám đều trên dàn, rồi lan sang đường hút: có thể hỏng rơle nhiệt độ hoặc nạp quá nhiều ga.',
        'Hư hỏng về điện trong blốc ở tủ mới rất hiếm (chỉ vài phần nghìn); chủ yếu xảy ra với blốc đã được sửa: hút chân không, nạp lại ga khiến ẩm lọt vào làm hỏng cách điện động cơ → cháy cuộn dây.',
        'Ga lỏng tràn về máy nén làm sủi dầu trong các-te; dầu và ga lỏng vào xilanh gây gãy van hút, van đẩy.',
        'Phin sấy lọc hoặc ống mao tắc một phần → tủ chạy liên tục không nghỉ, dàn lạnh ít lạnh và dàn nóng ít nóng.'
      ] },
      { t: 'p', x: 'Hư hỏng bên trong hệ thống gồm: thay thế bất kỳ bộ phận nào của hệ thống kín; có khí không ngưng; rò rỉ ga lạnh; phin lọc, phin sấy lọc, ống mao tắc. Vì phải phá vỡ hệ thống kín, trích ống, đo áp suất đầu hút – đầu đẩy, hút chân không, nạp ga, chạy thử... rất phức tạp nên trước đó phải kiểm tra lần cuối, rồi lau chùi vệ sinh sạch sẽ toàn bộ hệ thống, lắp van trích và bộ nạp 3 dây để kiểm tra áp suất.' },
      { t: 'list', items: [
        'Xác định vị trí rò rỉ và sửa; xả ga, nạp ga, xả khí không ngưng.',
        'Vệ sinh hoặc thay ống mao; thay blốc; thay phin sấy lọc đường cao áp (và hạ áp nếu có); lắp thêm phin sấy lọc đường hạ áp nếu cần.',
        'Hút chân không (dùng bơm chân không cao); bổ sung dầu; thay mới dàn lạnh hoặc dàn ngưng.'
      ] },
      { t: 'h3', x: 'Bốn kiểu lắp bộ nạp 3 dây vào đầu blốc' },
      { t: 'table', head: ['Kiểu', 'Đặc điểm blốc', 'Cách làm'], rows: [
        ['1', 'Có van dịch vụ trên đường hút và đường đẩy (blốc lớn, điều hòa, lạnh thương nghiệp)', 'Lắp bộ nạp rất dễ; chỉ cần khóa cửa dịch vụ để ga không rò rỉ khi tháo/lắp ống; mở cửa dịch vụ là đo được áp suất hút, đẩy'],
        ['2', 'Đầu blốc có sẵn đầu ga để lắp van (nắp bịt)', 'Tháo nắp, lắp van phù hợp để kiểm tra áp suất hút; muốn kiểm tra áp suất đẩy phải dùng van trích như kiểu 4'],
        ['3', 'Đầu blốc có sẵn ống công nghệ (ống nạp ga)', 'Dùng van trích gắn lên ống công nghệ để thực hiện hút chân không, nạp ga, nạp bổ sung ga, dầu; sau đó kẹp ống, ngắt van trích và hàn lại ống công nghệ'],
        ['4', 'Không có ống công nghệ', 'Phải dùng van trích mới đo được áp suất hút, rồi hàn một ống công nghệ vào đường hút (cả đường đẩy nếu cần). Sửa chữa xong kẹp ống, ngắt bỏ đầu thừa và hàn kín']
      ] },
      { t: 'warn', x: 'Khi lắp bộ nạp 3 dây phải vệ sinh sạch sẽ bộ nạp và hệ thống để bụi bẩn, tạp chất, ẩm không lọt vào; đuổi hết không khí trong dây nạp trước khi trích ga. Tủ gia đình phần lớn đường đẩy là ống thép nên thường không trích đường đẩy, chỉ dùng phía hạ áp của van nạp để hút chân không, nạp ga...' },
      { t: 'steps', items: [
        'Trước khi nạp thử: đuổi khí ở bộ nạp và cả 3 dây nối từ bình ga đến van trích bằng cách mở van ở chai ga cho ga xì ra ở van trích.',
        'Vặn chặt dây nối vào van trích; vặn van trích để thông áp suất hai phía; khóa chặt 2 van của bộ nạp trước khi vặn van trích.',
        'Khi thông van trích và cho máy nén làm việc, đo được áp suất đầu hút và đầu đẩy. Nếu cần có thể nạp thêm ga.',
        'Sau khi xác định được áp suất đầu đẩy, đầu hút yêu cầu để hệ thống làm việc hiệu quả: rút ga khỏi hệ thống, tháo van trích, hàn đắp lại ống đẩy, hàn một ống công nghệ vào đường ống hút để hút chân không, nạp ga lại. Nạp ga xong dùng bộ kẹp kẹp ống công nghệ, cắt đầu nạp và hàn kín.'
      ] },
      { t: 'widget', name: 'dl-manifold', title: 'Bộ nạp 3 dây và van trích: thao tác theo trình tự' }
    ] }
  ],
  summary: [
    'Tủ bình thường: êm, dàn lạnh dần, dàn ngưng nóng đều, sau 30–40 phút chạy theo chu kỳ.',
    'Ngưng tụ ≈ môi trường + 17 K; vượt nhiều → dàn ngưng bẩn/bị bịt hoặc có khí không ngưng.',
    'Nhiều "hỏng blốc" thực ra là hỏng thiết bị ngoài: rơle, thermostat, dây nối lỏng, nguồn điện.',
    'Thử đệm cửa bằng dải giấy; cách nhiệt ướt gây chạy liên tục và vỏ lạnh/đổ mồ hôi.',
    'Dây thử khởi động: giữ nút không quá 2 giây; tụ phải phóng qua điện trở 20 kΩ.',
    'Khởi động blốc bó: thêm tụ, tăng áp, hoặc cả hai; nhấn ≤ 1–2 giây.',
    'Bộ nạp 3 dây có 4 kiểu lắp tùy blốc; tủ gia đình thường chỉ dùng phía hạ áp.'
  ],
  cards: [
    ['Dấu hiệu tủ bình thường sau khi cắm điện?', 'Tiếng "tách" nhẹ của rơle, chạy êm, dàn lạnh dần, dàn ngưng nóng đều'],
    ['Ngưng tụ so với môi trường?', 'Cao hơn khoảng 17 K'],
    ['Mất lạnh, dàn ngưng không nóng, chạy liên tục?', 'Mất ga hoàn toàn hoặc tắc hoàn toàn phin sấy lọc'],
    ['Đệm cửa kín hay không, kiểm tra thế nào?', 'Kẹp dải giấy, đóng cửa, kéo giấy ra; ra dễ = không kín'],
    ['Cách nhiệt ẩm ướt có dấu hiệu?', 'Tủ chạy liên tục; vỏ lạnh hơn bình thường, đôi khi đổ mồ hôi'],
    ['Bao lâu giữ nút thử động cơ?', 'Không quá 2 giây'],
    ['Phóng điện tụ khởi động qua?', 'Điện trở 20 kΩ'],
    ['Khởi động blốc bị bó bằng cách nào?', 'Thêm tụ; điện áp cao hơn; hoặc cả hai (tụ 100 μF)'],
    ['Chu kỳ làm việc quá ngắn do?', 'Thermostat lắp sai hoặc rơle khởi động tiếp xúc kém'],
    ['Ẩm trong hệ thống biểu hiện?', 'Ngăn đông lạnh xuống rồi ấm lên lặp đi lặp lại'],
    ['Cách khắc phục tắc ẩm đúng?', 'Hút chân không, nạp lại ga, thay phin sấy lọc (không dùng metanol)'],
    ['Kiểu lắp bộ nạp 3 dây thường gặp ở tủ gia đình?', 'Kiểu 3/4: ống công nghệ hoặc van trích gắn đường hút'],
    ['Vì sao ít trích đường đẩy tủ gia đình?', 'Đường đẩy phần lớn là ống thép'],
    ['Trước khi nạp thử phải làm gì?', 'Đuổi hết không khí trong bộ nạp và dây nối'],
    ['Độ sụt áp nguồn cho phép khi tủ chạy?', 'Không quá 5 V; thấp hơn 10 V là có hư hỏng phần điện']
  ],
  quiz: [
    { q: 'Môi trường 21 °C. Nhiệt độ ngưng tụ bình thường khoảng:', o: ['21 °C', '38 °C', '60 °C', '10 °C'], a: 1, e: '21 + 17 = 38 °C.' },
    { q: 'Ngưng tụ đo được 49 °C ở môi trường 21 °C cho thấy:', o: ['Bình thường', 'Dàn ngưng kém hoặc có khí không ngưng', 'Thiếu ga', 'Hỏng thermostat'], a: 1, e: 'Chênh lệch lớn hơn 17 K.' },
    { q: 'Tủ chạy liên tục, vỏ tủ đổ mồ hôi/lạnh hơn bình thường. Nguyên nhân:', o: ['Cách nhiệt bị ẩm', 'Hết ga', 'Hỏng rơle', 'Điện áp cao'], a: 0, e: 'Cách nhiệt ướt mất tác dụng.' },
    { q: 'Giữ nút thử khởi động động cơ tối đa:', o: ['0,1 s', '2 s', '10 s', '1 phút'], a: 1, e: 'Giữ lâu có thể cháy cả hai cuộn.' },
    { q: 'Tụ khởi động phải được:', o: ['Nối thẳng đất', 'Phóng điện qua điện trở 20 kΩ', 'Bọc nilông', 'Thay bằng điện trở'], a: 1, e: 'Phòng điện giật do tụ tích điện.' },
    { q: 'Dấu hiệu cho biết cửa ngăn đông bị dính do tuyết:', o: ['Điện trở sưởi mép cửa hỏng', 'Đèn hỏng', 'Dàn ngưng bẩn', 'Mất ga'], a: 0, e: 'Điện trở sưởi giữ không cho tuyết bám.' },
    { q: 'Triệu chứng tắc ẩm ống mao:', o: ['Dàn nóng đều', 'Ngăn đông lạnh rồi ấm lên lặp lại', 'Tủ không chạy', 'Chạy rất ồn'], a: 1, e: 'Băng tan ra rồi lại tắc.' },
    { q: 'Điện áp khi chạy thấp hơn điện áp khi chưa chạy hơn 10 V. Nên kiểm tra:', o: ['Rơle bảo vệ, cuộn dây, dây dẫn', 'Dàn bay hơi', 'Khay nước', 'Quạt dàn'], a: 0, e: 'Phần điện bị hỏng.' }
  ],
  match: [
    ['Dây thử', 'Cấp đồng thời R + S, ≤ 2 s'],
    ['Điện trở 20 kΩ', 'Phóng điện tụ'],
    ['Van trích', 'Đo áp suất khi blốc không có van dịch vụ'],
    ['Cách nhiệt ẩm', 'Chạy liên tục + vỏ đổ mồ hôi'],
    ['Đệm cửa', 'Thử bằng dải giấy'],
    ['Ngưng tụ', 'Môi trường + 17 K']
  ]
});
