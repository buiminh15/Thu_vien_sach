window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 9,
  title: 'Giao dịch trong ngày và giao dịch dài hạn',
  intro: 'Wyckoff ví thị trường như tờ giấy thấm: lúc hấp thụ, lúc bão hòa, lúc nhỏ giọt. Chương này kể một ngày bị sai hướng hai lần mà vẫn có lãi, bàn việc giữ vị thế dài hạn lẫn vị thế trong ngày, và cho thấy mục tiêu thật là tích lũy lợi nhuận nhỏ đều đặn.',
  sections: [
    { icon: '🧻', title: 'Ẩn dụ tờ giấy thấm', blocks: [
      { t: 'steps', items: ['Giọt mực chạm giấy thấm: bị hút ngay, mặt giấy gần như khô → <b>hấp thụ</b>: cầu mạnh hơn cung, giá nhảy lên.', 'Hút vài giọt rồi bão hòa: giá dừng ở đỉnh, cung cầu cân bằng.', 'Tiếp tục nhỏ mực: giọt rơi xuống giấy → <b>phân phối</b>, cung vượt cầu.', 'Càng nhỏ nhiều, giọt rơi càng nhanh → <b>thanh lý</b>, thị trường tìm mức giá thấp hơn.'] },
      { t: 'key', x: 'Các lực đối lập thường trực: hấp thụ và phân phối, cầu và cung, hỗ trợ và áp lực. Người đọc băng càng giỏi cân đo chúng càng thành công — nhưng phán đoán chính xác vẫn thường bị sự kiện mới phá vỡ.' },
      { t: 'widget', name: 'dt-absorb', title: 'Cầu hấp thụ hay cung áp đảo? Mô phỏng nhỏ giọt' }
    ] },
    { icon: '🔄', title: 'Ví dụ ngày 21/12/1908: sai hai lần vẫn lãi', blocks: [
      { t: 'p', x: 'Union Pacific mở dưới giá đóng cửa hôm trước (500 @ 179, 6.000 @ 178¾) và ban đầu có vẻ có hỗ trợ nội bộ.' },
      { t: 'steps', items: ['<b>Mua 100 ở 178⅞</b> khi thấy hỗ trợ.', 'Xuất hiện lệnh bán mới đủ lớn → <b>bán 200 ở 178¼</b> (đóng mua và bán khống 100).', 'Đến 176½ có tín hiệu áp lực tạm nghỉ, cổ phiếu khác cứng lại, thấy lệnh đóng bán khống → <b>mua 200 ở 176⅞</b> (đóng bán khống, sang mua).', 'Hồi không giữ tốt, lô nhỏ; giá xuyên xuống 176 kèm yếu ở cổ phiếu khác → <b>bán 200 ở 176</b>.'] },
      { t: 'tip', x: 'Bài học: người đọc băng phải nhanh chóng nhận ra thay đổi, <b>đổi vị thế và đi theo xu hướng mới hình thành</b> thay vì cố bảo vệ ý kiến cũ.' },
      { t: 'widget', name: 'dt-flip', title: 'Đổi vị thế nhiều lần: tổng lãi/lỗ của một ngày' }
    ] },
    { icon: '⚖️', title: 'Vừa giữ dài hạn vừa giao dịch ngày?', blocks: [
      { t: 'p', x: 'Nếu bạn giữ 100 cổ phiếu Steel ở 43 cho dài hạn và giao dịch thêm 200 cổ phiếu trong ngày, sẽ bị cám dỗ đóng cả 300 khi thấy dấu hiệu giảm. Bạn phải tự hỏi: có lý do tin giảm 5 điểm trước khi tăng 5 điểm không? Đây là nhịp chỉnh nhỏ hay một cú rũ lớn? Thị trường vẫn đang trong nhịp tăng? Có bị thiên lệch khi vừa mua vừa bán cùng lúc?' },
      { t: 'key', x: 'Người giao dịch thuần túy trong ngày thường thích "sạch sổ" khi đóng cửa: sáng hôm sau ngồi xuống với ý nghĩ "tôi không có cam kết nào và không có ý kiến nào; tôi sẽ theo tín hiệu mạnh đầu tiên". Nếu không thể chơi ở cả hai phía thì chỉ nên chơi một phía.' }
    ] },
    { icon: '🧱', title: 'Mục tiêu: lãi nhỏ đều đặn và tăng quy mô dần', blocks: [
      { t: 'p', x: 'Ông thà bình quân 100 USD/ngày trong mười ngày hơn là 1.000 USD trong một giao dịch. Rủi ro thường giới hạn trong một phân số điểm; vốn cho mỗi 100 cổ phiếu chỉ cần 1.500–2.000 USD. Nếu trong 60 ngày bình quân lãi 1/4 điểm (25 USD/ngày) với lô 100, vốn tăng 1.500 USD → nâng lên lô 200, và cứ thế.' },
      { t: 'widget', name: 'dt-scale-up', title: 'Tăng dần quy mô lô theo vốn tích lũy' },
      { t: 'p', x: 'Câu chuyện người đàn ông từ Bờ Tây mang 1.000 USD để thử: ông thực hiện 42 giao dịch 10 cổ phiếu trong hai tháng, không quá 20 cổ phiếu cùng lúc, lỗ lớn nhất 1,5 điểm, lãi lớn nhất 3 điểm, và vẫn có lãi nhỏ sau chi phí — dù trộn lẫn đoán mò và tin đồn, trong môi trường văn phòng nhiều tiếng ồn. Wyckoff kết luận: "Đầu cơ là một nghề, phải học."' },
      { t: 'warn', x: 'Con số vốn và hoa hồng là của 1919. Giao dịch trong ngày ngày nay có tỷ lệ thất bại cao; ví dụ này chỉ minh họa triết lý lợi nhuận nhỏ đều và quản lý rủi ro.' }
    ] }
  ],
  summary: ['Hấp thụ, bão hòa, phân phối, thanh lý — các lực đối lập của thị trường.', 'Sẵn sàng đổi vị thế khi tín hiệu đổi.', 'Chơi một phía hoặc sạch sổ cuối ngày.', 'Mục tiêu: lợi nhuận nhỏ đều đặn, tăng lô theo vốn.'],
  cards: [['Hấp thụ?', 'Cầu nuốt cung, giá nhảy lên'], ['Phân phối?', 'Cung vượt cầu, giá chững rồi giảm'], ['Thanh lý?', 'Bán tháo để tìm giá thấp hơn'], ['Điều quan trọng nhất của người đọc?', 'Đổi vị thế nhanh khi tín hiệu đổi'], ['"Sạch sổ" nghĩa là?', 'Không giữ vị thế qua đêm'], ['Mục tiêu thật?', 'Lãi nhỏ trung bình mỗi ngày'], ['Vốn mỗi 100 cổ phiếu (1919)?', '1.500–2.000 USD'], ['Đầu cơ là gì?', 'Một nghề phải học']],
  quiz: [
    { q: 'Bình quân lãi 25 USD/ngày trong 60 ngày:', o: ['600', '1.500', '2.500', '5.000'], a: 1, e: '25×60.' },
    { q: 'Ví dụ 21/12/1908 cho thấy:', o: ['Không bao giờ sai', 'Sai nhưng đổi vị thế nhanh vẫn có thể lãi', 'Không nên đổi vị thế', 'Luôn phải giữ'], a: 1, e: 'Quick switch.' },
    { q: 'Người giao dịch ngày thuần túy thường:', o: ['Giữ qua đêm', 'Sạch sổ cuối ngày', 'Chỉ mua', 'Chỉ bán'], a: 1, e: 'Clean slate.' },
    { q: 'Tờ giấy thấm bão hòa ví với:', o: ['Cung cầu cân bằng ở đỉnh', 'Thị trường đảo chiều xuống', 'Tăng mạnh', 'Thanh lý'], a: 0, e: 'Standstill.' }
  ],
  match: [['Absorption', 'Cầu hấp thụ cung'], ['Distribution', 'Cung vượt cầu'], ['Liquidation', 'Bán tháo'], ['Clean slate', 'Không vị thế qua đêm'], ['Pyramid unit', 'Tăng lô theo vốn']]
});
