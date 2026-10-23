// Dạy nghề sửa chữa tủ lạnh và máy điều hòa dân dụng – Chương 1: Nhập môn kỹ thuật lạnh.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dlanh = BOOK_DATA.dlanh || { chapters: [] };
BOOK_DATA.dlanh.chapters.push({
  n: 1,
  title: 'Nhập môn kỹ thuật lạnh',
  intro: 'Sách của <b>Nguyễn Đức Lợi</b> (NXB Giáo dục, 2007) gồm bốn phần: kiến thức cơ sở, tủ lạnh có máy nén hơi, máy điều hòa không khí gia dụng và gia công sửa chữa. Chương 1 kể ngắn lịch sử, ứng dụng của lạnh, rồi đi từ những cách làm lạnh đơn giản (nước đá, bay hơi chất lỏng) đến <b>vòng tuần hoàn kín của ga lạnh</b> với bốn thiết bị chính, cùng hai kiểu máy lạnh khác: hấp thụ và nhiệt điện.',
  sections: [
    { icon: '📜', title: 'Lịch sử và ứng dụng', blocks: [
      { t: 'list', items: [
        'Người cổ đại Ai Cập làm bay hơi nước để điều hòa không khí; cách đây khoảng 2000 năm người Trung Quốc đã biết trộn nước đá với muối để đạt tới <b>−42 °C</b>.',
        '<b>Jacob Perkins</b> đăng ký bằng phát minh máy lạnh nén hơi đầu tiên năm <b>1834</b> (Anh), đủ 4 bộ phận chính: <b>máy nén, dàn ngưng tụ, van tiết lưu, dàn bay hơi</b>. Tủ lạnh gia đình và thương nghiệp mãi đầu thế kỷ XX mới xuất hiện.',
        'Tủ lạnh có máy nén kín đầu tiên do General Electric chế tạo năm <b>1928</b>; ở châu Âu, Electrolux chế tạo tủ lạnh hấp thụ đầu tiên. Từ khoảng 1940 mọi tủ lạnh dùng máy nén kín và <b>ga lạnh freon R12</b>. Nếu không tính tác động phá hủy tầng ozone thì R12 là ga lạnh an toàn.',
        'Điều hòa không khí gia dụng phát triển nhanh nhờ ga <b>R12 và R22</b> (phát minh 1930).',
        '<b>Ứng dụng:</b> quan trọng nhất là <b>bảo quản thực phẩm</b> — khi chưa có máy lạnh cơ khí, thực phẩm hư hỏng tới 30–40%; vi khuẩn kém hoặc ngừng hoạt động ở nhiệt độ lạnh. Ngoài ra: bia rượu, nước giải khát, sản xuất agar, bảo quản máu và nội tạng thay thế, chăn nuôi (tinh bò đông lạnh), và điều hòa không khí cho bưu chính viễn thông, điện tử, máy tính, cơ khí chính xác, quang học, sợi dệt, dược phẩm…'
      ] }
    ] },
    { icon: '🧊', title: 'Những cách làm lạnh đơn giản', blocks: [
      { t: 'table', head: ['Cách', 'Nhiệt độ đạt được', 'Ghi chú'], rows: [
        ['<b>Tủ lạnh nước đá</b> (hình 1.1)', '0 °C với nước đá; −21 °C với nước đá muối NaCl (eutectic); −55 °C với CaCl₂; −78 °C với đá khô (CO₂ rắn)', 'Tủ cách nhiệt chứa ngăn đựng đá cục, cần ống thoát nước vì đá tan; đá tan ở 0 °C nên tủ không xuống dưới 0 °C nếu chỉ dùng nước đá thường'],
        ['<b>Thùng lạnh vùi nước đá</b> (hình 1.2)', 'Như trên', 'Thực phẩm để trong hộp/túi kín, vùi đá bào hoặc đá cục trong thùng xốp cách nhiệt; tránh đá tiếp xúc trực tiếp vì cạnh sắc có thể làm biến dạng thực phẩm'],
        ['<b>Bay hơi chất lỏng</b>', 'Tùy chất (xem dưới)', 'Khi sôi/bay hơi, chất lỏng luôn thu nhiệt. Muốn bay hơi hết 1 kg nước phải cấp 2256 kJ']
      ] },
      { t: 'p', x: 'Ví dụ đời thường: tắm xong đứng trước quạt thấy mát vì nước trên người bay hơi thu nhiệt; bôi cồn lên da thấy lạnh không phải vì cồn để trong tủ lạnh mà vì cồn bay hơi; butan (ga bật lửa) bôi lên da thấy lạnh hơn vì dễ bay hơi hơn. Với ga lạnh như NH₃, R12, R22 — nhiệt độ sôi rất thấp — nếu lỏng dính vào da có thể gây bỏng lạnh, phá hủy tế bào như bị bỏng nóng.' }
    ] },
    { icon: '🌡️', title: 'Nhiệt độ sôi và áp suất sôi', blocks: [
      { t: 'key', x: 'Với mỗi chất lỏng, <b>mỗi áp suất sôi có một nhiệt độ sôi tương ứng</b>. Áp suất sôi càng giảm thì nhiệt độ sôi càng giảm. Ví dụ nước sôi 100 °C ở 1,013 bar (áp suất khí quyển); ở độ cao 5000 m (≈ 0,6 bar) nước sôi khoảng 80 °C — nên luộc trứng không chín.' },
      { t: 'table', head: ['Ga lạnh / chất', 'Nhiệt độ sôi ở áp suất khí quyển (1,013 bar)'], rows: [
        ['Amoniac (NH₃)', '−33 °C'], ['R22', '−41 °C'], ['R13', '−81 °C'], ['Nitơ lỏng', '−196 °C'], ['R12', '−29 °C']
      ] },
      { t: 'list', items: [
        'R12 ở áp suất 3,1 bar sôi ở <b>0 °C</b>; ở 0,6 bar sôi ở <b>−41 °C</b> (hình 1.5). Ở 12,2 bar R12 ngưng tụ ở <b>50 °C</b>.',
        '<b>Tủ lạnh R12 sôi tự nhiên</b> ở áp suất khí quyển đạt được −29 °C (hình 1.4), nhưng tốn ga (ga R12 đắt, lại phá tầng ozone nên không thể xả ra không khí).',
        '<b>Khống chế áp suất sôi:</b> nối ống thoát hơi vào máy nén và điều chỉnh vòng quay máy nén ta điều chỉnh được áp suất sôi, qua đó chọn nhiệt độ buồng lạnh: máy nén quay chậm → 3,1 bar → 0 °C; quay nhanh → 0,6 bar → −41 °C.',
        'Bằng cách <b>tiết lưu</b> (điều tiết lưu lượng) lượng lỏng phun vào dàn bay hơi cũng điều chỉnh được áp suất sôi và nhiệt độ buồng lạnh.'
      ] },
      { t: 'widget', name: 'dl-boil', title: 'Nhiệt độ sôi của nước và R12 theo áp suất' }
    ] },
    { icon: '🔁', title: 'Vòng tuần hoàn kín của ga lạnh', blocks: [
      { t: 'p', x: 'Ga freon đắt và gây hại môi trường nên không thể xả vào không khí. Ga sôi khi ta cấp nhiệt và <b>ngưng tụ khi ta thải nhiệt</b>. Hút hơi sinh ra từ dàn bay hơi, nén lên áp cao rồi thải nhiệt cho ngưng tụ, rồi phun lỏng lại vào dàn bay hơi — được một hệ thống lạnh kín (hình 1.6).' },
      { t: 'steps', items: [
        '<b>Dàn bay hơi</b> (có cánh tản nhiệt, đôi khi có quạt): ga lỏng thu nhiệt của sản phẩm/không khí và bốc thành hơi.',
        '<b>Ống hút</b> nối với máy nén; hơi hình thành được hút về ngay.',
        '<b>Máy nén</b> nén hơi từ áp suất thấp (ví dụ 1 bar, −29 °C) lên áp suất cao (12,2 bar, 50 °C), đẩy vào dàn ngưng.',
        '<b>Ống đẩy</b> nối máy nén với dàn ngưng.',
        '<b>Dàn ngưng tụ</b> thải nhiệt của hơi áp suất và nhiệt độ cao ra môi trường (không khí hoặc nước), biến thành lỏng.',
        '<b>Bình chứa cao áp</b> (nếu có) chứa lỏng ngưng tụ, rồi ống dẫn lỏng đến <b>van tiết lưu</b>.',
        '<b>Van tiết lưu</b> (van dãn nở) điều tiết lưu lượng ga lỏng phun vào dàn bay hơi phù hợp với nhiệt độ sôi và nhiệt độ buồng lạnh.'
      ] },
      { t: 'widget', name: 'dl-cycle1', title: 'Vòng tuần hoàn kín: bấm từng thiết bị xem nhiệm vụ' }
    ] },
    { icon: '🔧', title: 'Thiết bị chính, thiết bị phụ và đường ống', blocks: [
      { t: 'table', head: ['Thiết bị chính', 'Nhiệm vụ'], rows: [
        ['<b>Máy nén</b>', 'Nén hơi áp thấp từ dàn bay hơi lên áp cao đẩy vào dàn ngưng; quyết định năng suất, hiệu quả và tuổi thọ — ví như “trái tim”. Loại: pittông, rôto, xoắn ốc, trục vít, tuabin; điện lạnh dân dụng thường dùng pittông, rôto, xoắn ốc kiểu kín và nửa kín'],
        ['<b>Dàn ngưng tụ</b>', 'Thải nhiệt ngưng tụ của ga lạnh ra môi trường. Môi trường nước: bình ngưng giải nhiệt nước; không khí: dàn ngưng giải nhiệt gió (có cánh tản nhiệt và quạt cưỡng bức)'],
        ['<b>Thiết bị tiết lưu</b>', 'Còn gọi thiết bị dãn nở: giảm áp suất ga lỏng từ áp ngưng tụ xuống áp bốc hơi. Cố định: <b>ống mao, ống tiết lưu</b>. Tự động: van tiết lưu nhiệt, tự động, điện tử, van phao cao/hạ áp'],
        ['<b>Thiết bị bay hơi</b>', 'Thu nhiệt của môi trường hoặc sản phẩm nhờ ga lỏng bay hơi. Bình bốc hơi (làm lạnh chất lỏng) hoặc dàn bay hơi (làm lạnh trực tiếp không khí)']
      ] },
      { t: 'h3', x: 'Thiết bị phụ (có thể có hoặc không)' },
      { t: 'list', items: [
        '<b>Bình chứa cao áp</b>: gom lỏng từ dàn ngưng, giải phóng bề mặt trao đổi nhiệt, dự trữ lỏng cấp cho dàn bay hơi. <b>Bình chứa tuần hoàn</b> (hạ áp, chứa lỏng thấp áp).',
        '<b>Bình tách dầu</b> (sau máy nén, tách dầu khỏi dòng hơi); <b>bình tách lỏng</b> (giữa dàn bay hơi và máy nén, đề phòng máy nén hút lỏng — “va đập thủy lực”).',
        '<b>Hồi nhiệt</b>: trao đổi nhiệt giữa lỏng nóng trước van tiết lưu và hơi lạnh trước khi về máy nén (hệ freon).',
        '<b>Phin sấy lọc</b>: giữ cặn bẩn, tạp chất và hơi nước lẫn trong môi chất, tránh tắc van và đường ống.',
        '<b>Mắt ga</b>: quan sát dòng ga lỏng — biết ga thừa, thiếu, ẩm hay phin sấy bị tắc. <b>Đầu chia lỏng</b>: chia đều ga cho các lối của dàn bay hơi lớn.',
        '<b>Ống mềm</b> trên đầu hút và đẩy máy nén: hấp thụ rung động. <b>Van chặn / van khóa</b> trước và sau thiết bị cần tháo vệ sinh, thay thế.',
        '<b>Thiết bị đo lường, tự động</b>: rơle khởi động, rơle bảo vệ, rơle nhiệt độ phòng, rơle áp suất cao/thấp, rơle hiệu áp dầu, áp kế, nhiệt kế…'
      ] },
      { t: 'p', x: '<b>Đường ống</b> nối các thiết bị thành vòng tuần hoàn kín: <b>đường ống đẩy</b> (máy nén → dàn ngưng), <b>đường ống lỏng</b> (dàn ngưng/bình chứa → van tiết lưu) và <b>đường ống hơi</b> (dàn bay hơi → máy nén). Vật liệu: <b>đồng</b> (freon), <b>thép</b> (freon, NH₃), <b>nhôm</b> (freon).' }
    ] },
    { icon: '🔥', title: 'Máy lạnh hấp thụ và nhiệt điện', blocks: [
      { t: 'p', x: '<b>Máy lạnh hấp thụ</b>: thay “máy nén cơ” bằng “máy nén nhiệt” gồm bình sinh hơi, bình hấp thụ, bơm dung dịch và van tiết lưu dung dịch. Hơi sinh ra ở dàn bay hơi được bình hấp thụ “hút” về nhờ hấp thụ vào dung dịch loãng; dung dịch đậm đặc được bơm lên bình sinh hơi, đun nóng 120–130 °C, hơi đi vào thiết bị ngưng tụ, dung dịch loãng tiết lưu trở lại bình hấp thụ.' },
      { t: 'table', head: ['', 'Máy lạnh hấp thụ', 'Máy lạnh nhiệt điện'], rows: [
        ['Nguyên lý', 'Cặp môi chất/chất hấp thụ: NH₃/H₂O hoặc H₂O/LiBr. Tủ hấp thụ khuếch tán gia đình thêm khí trơ hydro cân bằng áp suất', 'Hiệu ứng Peltier (ngược Seebeck 1821): dòng một chiều qua vòng dây hai kim loại/bán dẫn khác nhau làm một đầu nóng lên, đầu kia lạnh; hợp kim bismut, antimon, selen; chênh nhiệt tới ~60 °C'],
        ['Ưu điểm', 'Không cần điện (chạy bằng đèn dầu, ga, hơi thải, than, củi); đơn giản; không ồn; không có chi tiết chuyển động (tủ hấp thụ khuếch tán) — gần như vĩnh cửu', 'Không ồn, gọn nhẹ, đổi nóng/lạnh bằng đảo cực, dùng ắc quy khi du lịch'],
        ['Nhược điểm', 'Hệ số lạnh thấp: cùng đơn vị lạnh có thể tốn điện gấp khoảng 10 lần máy nén hơi (nếu dùng điện); ít dùng', 'Hệ số lạnh thấp, tốn điện, giá cao, không tích lạnh được; công suất lạnh nhỏ (30–100 W), rất hiếm trong gia đình']
      ] },
      { t: 'tip', x: 'Tủ lạnh hấp thụ khuếch tán gồm: bình sinh hơi, ngưng tụ hồi lưu, dàn ngưng, dàn bay hơi, hồi nhiệt, bình chứa, dàn hấp thụ, bơm xiphông, bình chứa H₂, bộ đốt. Hơi NH₃ khuếch tán vào hydro ở dàn bay hơi nên gọi là “khuếch tán”.' }
    ] }
  ],
  summary: [
    'Lạnh nhân tạo: Perkins 1834 (4 bộ phận chính), tủ lạnh kín GE 1928, R12/R22 từ 1930; ứng dụng lớn nhất là bảo quản thực phẩm.',
    'Bay hơi chất lỏng thu nhiệt; áp suất sôi càng thấp nhiệt độ sôi càng thấp (R12: 0 °C ở 3,1 bar, −41 °C ở 0,6 bar).',
    'Vòng kín ga lạnh: dàn bay hơi → ống hút → máy nén → ống đẩy → dàn ngưng → (bình chứa) → van tiết lưu.',
    '4 thiết bị chính: máy nén, dàn ngưng, tiết lưu, bay hơi; thiết bị phụ: bình chứa, tách dầu, tách lỏng, hồi nhiệt, phin sấy lọc, mắt ga…'
  ],
  cards: [
    ['Ai phát minh máy lạnh nén hơi đầu tiên?', 'Jacob Perkins, năm 1834 tại Anh.'],
    ['Bốn bộ phận chính của máy lạnh nén hơi?', 'Máy nén, dàn ngưng tụ, van tiết lưu, dàn bay hơi.'],
    ['Tủ lạnh máy nén kín đầu tiên?', 'General Electric, 1928.'],
    ['Ứng dụng lớn nhất của lạnh?', 'Bảo quản thực phẩm.'],
    ['Nước đá muối NaCl đạt?', 'Khoảng −21 °C; CaCl₂ −55 °C; đá khô −78 °C.'],
    ['Cần bao nhiêu nhiệt để bay hơi 1 kg nước?', '2256 kJ.'],
    ['Vì sao nước sôi thấp hơn 100 °C trên núi cao?', 'Áp suất thấp hơn nên nhiệt độ sôi thấp hơn.'],
    ['R12 sôi ở áp suất khí quyển?', 'Khoảng −29 °C.'],
    ['R12 ở 3,1 bar sôi ở?', '0 °C.'],
    ['R12 ngưng tụ ở 12,2 bar?', '50 °C.'],
    ['Cách điều chỉnh nhiệt độ buồng lạnh?', 'Khống chế áp suất sôi (máy nén, tiết lưu).'],
    ['Máy nén ví như?', '“Trái tim” của hệ thống lạnh.'],
    ['Thiết bị tiết lưu cố định?', 'Ống mao, ống tiết lưu.'],
    ['Phin sấy lọc dùng để?', 'Giữ cặn bẩn và hơi nước, tránh tắc.'],
    ['Bình tách lỏng đặt giữa?', 'Dàn bay hơi và máy nén, tránh máy nén hút lỏng.'],
    ['Hai cặp môi chất của máy lạnh hấp thụ?', 'NH₃/H₂O và H₂O/LiBr.'],
    ['Máy lạnh nhiệt điện dựa trên hiệu ứng?', 'Peltier (ngược của Seebeck).']
  ],
  quiz: [
    { q: 'Perkins đăng ký bằng phát minh máy lạnh nén hơi năm:', o: ['1834', '1918', '1928', '1940'], a: 0, e: 'Tại Anh.' },
    { q: 'Từ khoảng 1940 tủ lạnh dùng:', o: ['NH₃', 'Freon R12', 'Nước', 'CO₂'], a: 1, e: 'Máy nén kín + R12.' },
    { q: 'Nước đá thường làm tủ lạnh nước đá xuống tối đa:', o: ['−21 °C', '0 °C', '−55 °C', '−78 °C'], a: 1, e: 'Đá tan ở 0 °C.' },
    { q: 'Áp suất sôi càng thấp thì nhiệt độ sôi:', o: ['Càng cao', 'Càng thấp', 'Không đổi', 'Bằng 100 °C'], a: 1, e: 'Mỗi áp suất có một nhiệt độ sôi.' },
    { q: 'R12 sôi ở 0,6 bar tại khoảng:', o: ['0 °C', '−29 °C', '−41 °C', '50 °C'], a: 2, e: 'Hình 1.5b.' },
    { q: 'Thiết bị nào hạ áp suất ga lỏng từ áp ngưng tụ xuống áp bốc hơi?', o: ['Máy nén', 'Thiết bị tiết lưu', 'Dàn ngưng', 'Bình tách dầu'], a: 1, e: 'Còn gọi thiết bị dãn nở.' },
    { q: 'Máy nén dân dụng thường dùng loại:', o: ['Tuabin', 'Pittông, rôto, xoắn ốc kiểu kín và nửa kín', 'Trục vít', 'Ly tâm'], a: 1, e: 'Theo sách.' },
    { q: 'Bình tách lỏng đặt ở đâu?', o: ['Sau dàn ngưng', 'Giữa dàn bay hơi và máy nén', 'Trước van tiết lưu', 'Sau máy nén'], a: 1, e: 'Phòng máy nén hút lỏng.' },
    { q: 'Ưu điểm lớn của máy lạnh hấp thụ:', o: ['Hệ số lạnh cao', 'Không cần điện, có thể dùng nhiệt thải', 'Công suất rất lớn', 'Rẻ nhất'], a: 1, e: 'Nhược điểm: hệ số lạnh thấp.' },
    { q: 'Hiệu nhiệt độ tối đa của cặp nhiệt điện:', o: ['~10 °C', '~60 °C', '~200 °C', '~500 °C'], a: 1, e: 'Dùng hợp kim bismut, antimon, selen.' }
  ],
  match: [
    ['Máy nén', 'Trái tim hệ thống lạnh'],
    ['Dàn ngưng tụ', 'Thải nhiệt ra môi trường'],
    ['Ống mao', 'Tiết lưu cố định'],
    ['Dàn bay hơi', 'Thu nhiệt của buồng lạnh'],
    ['Phin sấy lọc', 'Giữ cặn bẩn và hơi nước'],
    ['Hiệu ứng Peltier', 'Máy lạnh nhiệt điện'],
    ['NH₃/H₂O', 'Cặp môi chất máy hấp thụ']
  ]
});
