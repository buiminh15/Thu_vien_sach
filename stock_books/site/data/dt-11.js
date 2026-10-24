window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 11,
  title: 'Những trở ngại và lợi nhuận tiềm năng',
  intro: 'Wyckoff giải thích vì sao lợi nhuận nhỏ mỗi giao dịch có thể cộng lại thành khá lớn nếu tái đầu tư vào quy mô lô, kèm bảng tính 250 ngày. Ông cũng nhấn mạnh rằng thứ cần luyện là chính bản thân: bình tĩnh, chính xác, nhanh nhạy, không nhìn vào lãi/lỗ của ngày hôm nay khi băng giá nói "thoát ra".',
  sections: [
    { icon: '📈', title: 'Lợi nhuận tiềm năng: bảng tính tăng quy mô', blocks: [
      { t: 'p', x: 'Giả sử người đọc băng giỏi đến mức trung bình một giao dịch/ngày và lãi <b>12,50 USD/giao dịch</b> (1/8 điểm cho 100 cổ phiếu). Mỗi khi có thêm 1.000 USD, họ nâng quy mô thêm 100 cổ phiếu. Không phải kim tự tháp theo nghĩa thường — chỉ là tăng khối lượng khi vốn mở rộng, như mọi doanh nhân tiến bộ.' },
      { t: 'table', head: ['Quy mô', 'Lãi/ngày', 'Số ngày để thêm ~1.000 USD'], rows: [['100 cp', '12,50', '80'], ['200 cp', '25,00', '40'], ['300 cp', '37,50', '27'], ['500 cp', '62,50', '16'], ['1.000 cp', '125,00', '8'], ['1.200 cp', '150,00', '7']] },
      { t: 'p', x: 'Cộng lại, sau 250 ngày tổng lãi gộp khoảng 12.137,50 USD; trừ thuế và hoa hồng khoảng 1.942 USD còn <b>10.195,50 USD</b> (theo bảng tính của tác giả), rồi ở mức 1.200 cp có thể lãi ~900 USD/tuần.' },
      { t: 'widget', name: 'dt-compound', title: 'Bảng tính 250 ngày: lãi nhỏ mỗi ngày và quy mô lô tăng dần' },
      { t: 'warn', x: 'Đây là tính toán giả định, giả sử lãi đều 1/8 điểm/giao dịch trong mọi hoàn cảnh, không có chuỗi lỗ hay trượt giá. Thực tế hiếm ai duy trì được; đừng coi là kỳ vọng.' }
    ] },
    { icon: '🧗', title: 'Trở ngại: khớp lệnh, chi phí và bản thân', blocks: [
      { t: 'p', x: 'Một nhà giao dịch quen lướt sóng nhiều năm nhưng chưa bao giờ có lãi báo cáo rằng khi bắt đầu áp dụng các quy tắc này, ban đầu lỗ khoảng 20 USD/giao dịch; dần giảm còn 12 USD, rồi 8 USD, cuối cùng chuyển sang lãi 12–30 USD/100 cổ phiếu mỗi ngày. Mục tiêu cho nhà giao dịch cỡ trung: 150–350 USD cho mỗi 1.000 cổ phiếu mỗi ngày.' },
      { t: 'key', x: 'Wyckoff không tính trước mỗi giao dịch sẽ lãi hay lỗ. Ông vào lệnh ở điểm mà có thể đặt dừng cách ¼–½ điểm, rủi ro giới hạn trong phân số đó cộng hoa hồng và thuế. Khi giá đi đúng hướng, nâng dừng càng sớm càng tốt tới mức không thể lỗ; ông không để lãi chạy một cách mù quáng mà chỉ khi còn chưa thấy tín hiệu đóng.' },
      { t: 'widget', name: 'dt-risk-1', title: 'Rủi ro mỗi giao dịch và số lần lỗ liên tiếp chịu được' }
    ] },
    { icon: '🧘', title: 'Luyện bản thân', blocks: [
      { t: 'p', x: 'Khi băng giá nói "thoát ra", ông không tính đã lãi hay lỗ bao nhiêu hoặc ngày hôm nay đang hơn hay kém. Ông tập trung vào <b>chính mình</b>: bình tĩnh dứt khoát, chính xác, nghĩ nhanh, phán đoán chuẩn, lên kế hoạch và thực hiện kịp thời, nhìn xa, trực giác, can đảm, chủ động. Kiểm soát bản thân ở các mặt đó sẽ tạo ra tỷ lệ thắng; "chỉ là chuyện luyện tập".' },
      { t: 'p', x: 'Ví dụ một ngày: ba giao dịch, sáu lệnh. Mua Kansas City Southern ở 46¾ sau khi nó bùng từ trạng thái rất lặng và bán ở 48½; mua Reading ở 157⅝ khi nhịp chỉnh tới và bán ở 158¾ khi thấy dấu hiệu bán (sau đó giá lên 159⅜); mua Southern Pacific 135 và bán 135½ khi thị trường có vẻ "quá bò". Năm trong sáu lệnh, giá đi đúng hướng gần như ngay lập tức. Tác giả nói đó chỉ là ví dụ thỉnh thoảng đạt được.' },
      { t: 'tip', x: 'Nếu bạn lãi 2⅜ điểm hôm nay và lỗ 2 điểm hai ngày sau, thì cộng lại còn dương ⅜, trung bình ⅛ mỗi ngày. Sẽ có chuỗi thắng–thua, nản chí; ai đủ chất sẽ vượt qua theo thời gian.' }
    ] }
  ],
  summary: ['Lãi nhỏ đều + tăng quy mô theo vốn tạo ra tổng lớn (trên giấy).', 'Giới hạn rủi ro mỗi giao dịch trong phân số điểm.', 'Nâng lệnh dừng để loại trừ khả năng lỗ.', 'Tập trung vào kiểm soát bản thân hơn lãi/lỗ trong ngày.'],
  cards: [['Mục tiêu lãi/giao dịch trong ví dụ?', '1/8 điểm (12,50 USD cho 100 cp)'], ['Khi nào tăng lô?', 'Mỗi khi vốn thêm ~1.000 USD'], ['Rủi ro mỗi giao dịch?', '¼–½ điểm + phí'], ['Khi nào nâng dừng?', 'Ngay khi giá đi đúng, tới mức không lỗ'], ['Khi băng nói "thoát"?', 'Thoát, không tính lãi lỗ ngày'], ['Mục tiêu nhà giao dịch trung bình?', '150–350 USD/1.000 cp/ngày'], ['Điều cần luyện?', 'Bình tĩnh, chính xác, nhanh, can đảm'], ['Cảnh báo bảng 250 ngày?', 'Giả định lãi đều, không thực tế']],
  quiz: [
    { q: 'Lãi 1/8 điểm cho 100 cp là:', o: ['1,25 USD', '12,50 USD', '125 USD', '0,125 USD'], a: 1, e: '0,125×100.' },
    { q: 'Mục tiêu thực sự của Wyckoff là:', o: ['Một giao dịch lãi lớn', 'Lãi nhỏ trung bình đều đặn', 'Giữ lâu dài', 'Bán khống mọi lúc'], a: 1, e: 'Average small net profit.' },
    { q: 'Khi băng nói thoát, ông:', o: ['Tính xem lãi hay lỗ rồi quyết', 'Thoát ngay', 'Chờ thêm', 'Hỏi môi giới'], a: 1, e: 'No calculation.' },
    { q: 'Rủi ro mỗi giao dịch giới hạn ở:', o: ['5 điểm', '¼–½ điểm + phí', '10%', '100%'], a: 1, e: 'Close stops.' }
  ],
  match: [['Unit', 'Quy mô lô'], ['Compounding unit size', 'Tăng lô theo vốn'], ['Stop', 'Lệnh dừng'], ['Self-mastery', 'Kiểm soát bản thân'], ['Daily average', 'Lãi trung bình mỗi ngày']]
});
