window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 4,
  title: 'Tháo, lắp, kiểm tra và bảo dưỡng động cơ không đồng bộ ba pha',
  intro: 'Động cơ không đồng bộ ba pha rôto lồng sóc là "con ngựa thồ" của công nghiệp (máy tiện, cầu trục, bơm...). Bài này đi từ cấu tạo, nguyên lý, độ trượt, các cách mở máy và điều chỉnh tốc độ đến quy trình tháo–lắp và xác định cực tính sáu đầu dây.',
  sections: [
    { icon: '🏗️', title: 'Cấu tạo và nguyên lý', blocks: [
      { t: 'list', items: ['<b>Stator:</b> lõi thép từ các lá tôn silic có sơn cách điện, rãnh đặt ba cuộn dây AX, BY, CZ lệch nhau 120° trong không gian, đấu sao hoặc tam giác.', '<b>Rôto lồng sóc:</b> lõi thép có thanh dẫn đồng hoặc nhôm nối hai vòng ngắn mạch. <b>Rôto dây quấn:</b> dây quấn ba pha đấu sao, ba đầu ra vành trượt nối biến trở ngoài để khởi động hoặc điều chỉnh tốc độ.'] },
      { t: 'p', x: 'Dòng ba pha vào stator tạo từ trường quay tốc độ n₁ = 60f/p. Từ trường quét qua thanh dẫn rôto sinh sức điện động và dòng cảm ứng; tương tác với từ trường quay tạo lực điện từ và mômen quay, rôto quay cùng chiều với n₂ < n₁.' },
      { t: 'key', x: 'Nếu n₂ = n₁ thì thanh dẫn không cắt đường sức → E = 0, F = 0, mômen = 0: động cơ không làm việc. Vì thế phải có n₂ < n₁ — đó là lý do gọi là "không đồng bộ". Mômen cản tăng → n₂ giảm → dòng cảm ứng và mômen quay tăng để cân bằng; nhưng quá tải quá mức thì dòng tăng mạnh, động cơ phát nóng.' },
      { t: 'p', x: '<b>Độ trượt S% = (n₁ − n₂)/n₁ × 100.</b> Lúc mở máy n₂ = 0 → S = 1; không tải n₂ ≈ n₁ → S ≈ 0; làm việc bình thường S khoảng 1–6%.' },
      { t: 'widget', name: 'de-slip', title: 'Độ trượt của động cơ không đồng bộ' }
    ] },
    { icon: '🚀', title: 'Mở máy động cơ lồng sóc', blocks: [
      { t: 'p', x: 'Dòng mở máy rất lớn: Imm = (5–7)·Iđm khi đóng điện trực tiếp, gây sụt áp lưới. Điều kiện thuận lợi: mômen mở máy lớn, mômen cản nhỏ.' },
      { t: 'table', head: ['Phương pháp', 'Cách làm', 'Đặc điểm'], rows: [
        ['Trực tiếp', 'Đóng điện lưới vào động cơ', 'Đơn giản; chỉ cho động cơ công suất nhỏ, mở máy không tải'],
        ['Sao – tam giác', 'Mở máy đấu sao (áp mỗi cuộn giảm √3 lần, Imm giảm 3 lần), xong chuyển sang tam giác', 'Đơn giản, dễ vận hành; mômen mở máy cũng giảm 3 lần'],
        ['Biến áp tự ngẫu', 'Tăng dần điện áp rồi nối trực tiếp lưới', 'Phức tạp, hiệu quả; dùng cho công suất lớn, mở máy có tải'],
        ['Cuộn kháng', 'Nối tiếp cuộn kháng khi mở máy, xong loại ra', 'Đơn giản; Imm nhỏ nhưng mômen giảm; mở máy không tải'],
        ['Rôto dây quấn', 'Nối biến trở ba pha vào rôto, giảm dần', 'Imm nhỏ, mômen lớn; dùng cho cầu trục, máy xúc...']
      ] },
      { t: 'widget', name: 'de-starting', title: 'Dòng mở máy theo từng phương pháp' }
    ] },
    { icon: '🎛️', title: 'Điều chỉnh tốc độ', blocks: [
      { t: 'list', items: ['<b>Đổi số đôi cực</b> (p): tốc độ tỷ lệ nghịch với p; điều chỉnh theo cấp (hai, ba, bốn tốc độ); chủ yếu cho rôto lồng sóc.', '<b>Đổi điện áp stator:</b> mômen tỷ lệ với bình phương điện áp, nên giảm điện áp thì độ trượt tăng, tốc độ giảm.', '<b>Đổi điện trở mạch rôto</b> (rôto dây quấn): thêm điện trở thì đặc tính nghiêng sang trái, cùng mômen tải độ trượt lớn hơn, tốc độ giảm.'] },
      { t: 'widget', name: 'de-torque-v', title: 'Mômen và điện áp: giảm áp 20% thì mômen còn bao nhiêu?' },
      { t: 'warn', x: 'Mất một pha: từ trường chỉ còn là đập mạch, động cơ không tự khởi động được và nếu đang chạy sẽ quá dòng, nóng nhanh — cần rơ le bảo vệ mất pha (bài 9).' }
    ] },
    { icon: '🔧', title: 'Thực hành: tháo – lắp và xác định cực tính', blocks: [
      { t: 'warn', x: 'Cắt điện tuyệt đối, treo biển "Cấm đóng điện có người đang làm việc"; với động cơ công suất lớn phải thử điện tích dư. Đánh dấu bộ phận, tránh làm biến dạng chi tiết.' },
      { t: 'steps', items: ['Kiểm tra trước tháo: chạy thử không tải, đo điện trở cuộn dây, đo cách điện (Rcđ > 0,5 MΩ tốt; 0 < Rcđ < 0,5 MΩ ẩm; Rcđ = 0 hỏng cách điện).', 'Tháo: đánh dấu và tháo đầu dây ở hộp đấu; tháo bu lông bệ; tháo puly, nắp bảo vệ, cánh quạt; tháo nắp mỡ và nắp trước bằng búa + đệm gỗ; tháo nắp sau, rút rôto; dùng vam tháo vòng bi.', 'Kiểm tra – bảo dưỡng: rôto (thanh dẫn đứt?), stator (cuộn dây đứt, xây xát, đổi màu); cuộn ẩm thì tẩm sơn và sấy; vòng bi hỏng thì thay, bôi mỡ 2/3 (có nắp mỡ) hoặc 1/3 (không nắp) thể tích.', 'Lắp ngược trình tự tháo.'] },
      { t: 'h3', x: 'Xác định cực tính sáu đầu dây' },
      { t: 'steps', items: ['Tách riêng 6 đầu dây; dùng vạn năng thang điện trở: hai đầu cho một giá trị điện trở xác định là hai đầu của một pha; đánh dấu 1–1′, 2–2′, 3–3′ (cầm vào phần cách điện của que đo).', 'Nối tiếp hai cuộn bất kỳ rồi cấp 220 V; cuộn còn lại nối bóng đèn. <b>Đèn sáng → hai đầu nối với nhau là khác cực tính</b>; đèn không sáng → cùng cực tính.', 'Đánh dấu A, B, C (đầu) và X, Y, Z (cuối). Ví dụ đèn sáng: 1 = A, 1′ = X thì 2′ = B, 2 = Y; đèn không sáng: 1 = A, 1′ = X thì 2′ = Y, 2 = B.', 'Làm tương tự để xác định cuộn thứ ba. Mỗi lần đóng điện thử không quá 60 giây và bọc cách điện các chỗ nối.'] },
      { t: 'widget', name: 'de-polarity', title: 'Xác định cực tính: đèn sáng hay không sáng?' }
    ] }
  ],
  summary: ['Ba cuộn stator lệch 120°; từ trường quay n₁ = 60f/p; rôto quay chậm hơn.', 'Độ trượt S = (n₁ − n₂)/n₁, S = 1 lúc mở máy.', 'Mở máy trực tiếp, sao–tam giác, tự ngẫu, cuộn kháng, biến trở rôto.', 'Đổi p, điện áp, hoặc điện trở rôto để điều chỉnh tốc độ.', 'Cực tính: đo điện trở tìm pha; nối tiếp hai cuộn + đèn.'],
  cards: [['Tại sao gọi không đồng bộ?', 'n₂ < n₁'], ['Độ trượt lúc mở máy?', 'S = 1'], ['Imm trực tiếp?', '5–7 Iđm'], ['Sao – tam giác giảm Imm?', '3 lần'], ['Mômen tỷ lệ với?', 'Bình phương điện áp'], ['Rcđ ẩm?', '0 < Rcđ < 0,5 MΩ'], ['Đèn sáng khi xác định cực tính?', 'Khác cực tính'], ['Thời gian đóng điện thử?', 'Không quá 60 giây'], ['Rôto dây quấn mở máy bằng?', 'Biến trở ba pha'], ['Mất pha gây?', 'Từ trường đập mạch, quá dòng']],
  quiz: [
    { q: 'n₁ = 1500, n₂ = 1440. Độ trượt:', o: ['2%', '4%', '6%', '40%'], a: 1, e: '60/1500.' },
    { q: 'Động cơ Iđm = 20 A, mở máy trực tiếp Kmm = 6. Imm:', o: ['26 A', '60 A', '120 A', '200 A'], a: 2, e: '6×20.' },
    { q: 'Mở máy sao – tam giác làm dòng mở máy:', o: ['Giảm 3 lần', 'Giảm 2 lần', 'Tăng 3 lần', 'Không đổi'], a: 0, e: 'Giảm 3.' },
    { q: 'Hai cuộn nối tiếp, đèn không sáng cho thấy:', o: ['Khác cực tính', 'Cùng cực tính', 'Cuộn đứt', 'Mất pha'], a: 1, e: 'Cùng cực tính.' }
  ],
  match: [['Stator', 'Phần tĩnh có ba cuộn dây'], ['Độ trượt', '(n₁ − n₂)/n₁'], ['Sao – tam giác', 'Giảm dòng mở máy 3 lần'], ['Rôto dây quấn', 'Vành trượt + biến trở'], ['Vam ba chân', 'Tháo vòng bi']]
});
