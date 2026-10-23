window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 6,
  title: 'Bán ngay những cổ phiếu này!',
  intro: 'Linda sa thải người môi giới, tìm một cố vấn tài chính thu phí theo giờ và học cách rời thị trường có kỷ luật: bán cổ phiếu yếu, dùng đường trung bình động để nhận ra thị trường gấu, bán dần thay vì hoảng loạn.',
  sections: [
    { icon: '🧑‍💼', title: 'Người bán hàng hay cố vấn?', blocks: [
      { t: 'p', x: 'Môi giới cũ gọi điện đề nghị vay thế chấp lại căn nhà để lấy tiền "quay lại thị trường". Linda sa thải ông ta và gặp một cố vấn thu phí cố định (75 USD/giờ, buổi đầu miễn phí). Cố vấn nói trong bang Maryland có 40.000 người hành nghề lập kế hoạch tài chính nhưng chỉ vài trăm người là fee-only (chỉ thu phí tư vấn).' },
      { t: 'key', x: 'Trong ngành tài chính bạn đang nói chuyện với <b>người bán hàng</b> hoặc <b>cố vấn</b> — không thể là cả hai. Người bán hàng bảo lời khuyên "đi kèm dịch vụ" hoặc đã nằm trong hoa hồng. Cố vấn nói rõ phí là bao nhiêu, thu phí và báo lại.' },
      { t: 'list', items: ['Hãng của người môi giới cũ là đơn vị bảo lãnh chính cho phần lớn các cổ phiếu đó; khoảng 90% doanh thu năm ngoái đến từ loại giao dịch này.', 'Môi giới được thưởng sáu chữ số, thi đua và đi nghỉ nếu bán được nhiều cổ phiếu cho hãng.', 'Mô hình "đấu vật": đầu tiên bị đánh bằng hoa hồng, rồi bị dồn vào khoản đầu tư xấu, cuối cùng bị khóa không cho thoát. Đừng hành động theo lời khuyên "miễn phí".'] },
      { t: 'widget', name: 'cp-advisor', title: 'Người đang tư vấn cho bạn là người bán hàng hay cố vấn?' }
    ] },
    { icon: '⏳', title: '"Đầu tư dài hạn luôn thắng"?', blocks: [
      { t: 'p', x: 'Cố vấn lấy năm 1929: nếu mua cổ phiếu S&P 500 trung bình ở đỉnh, phải chờ ít nhất 25 năm mới hòa vốn. Ông chỉ ra các giả định ngầm của luận điểm "dài hạn":' },
      { t: 'steps', items: ['Bạn mua ở <b>đầu</b> thị trường tăng, thực tế đa số tiền đổ vào gần đỉnh.', 'Bạn không bao giờ mua ở đỉnh, nhưng trên thực tế phần lớn người mua ở đỉnh.', 'Bạn mua <b>cả thị trường</b>, trong khi Linda mua UCBS, Global Crossing, WorldCom — những công ty có thể không bao giờ hồi phục hoặc biến mất.'] },
      { t: 'widget', name: 'cp-breakeven', title: 'Cần bao nhiêu năm để hòa vốn nếu lỗ X% và thị trường sinh lời Y%/năm?' },
      { t: 'tip', x: 'Gợi ý của sách: một khoản đầu tư <i>tăng khi thị trường giảm</i> rồi mua lại gần đáy có thể vượt xa người chỉ "ôm" cổ phiếu — vì thời gian hòa vốn của người ôm thường rất dài.' },
      { t: 'warn', x: 'Đây là lập luận của tác giả. Chỉ số rộng như S&P 500 trong thực tế đã vượt đỉnh 2000 vào khoảng 2013 và nhiều lần sau đó; quan trọng là bạn cần nhìn đúng độ dài và rủi ro thời gian phục hồi chứ không thể suy ra kết quả cho từng cổ phiếu.' }
    ] },
    { icon: '🏠', title: 'Trả nợ nhà thay vì vay thêm', blocks: [
      { t: 'p', x: 'Nhà của Linda vay thế chấp lãi khoảng 9%/năm. Cố vấn hỏi: có khoản đầu tư nào đảm bảo 9% không? Không có. Trả bớt nợ là cách "kiếm" đúng 9% không rủi ro. Những người đẩy bạn tái cấp vốn để rút tiền ra thường là những người hưởng phí (môi giới thế chấp, môi giới chứng khoán). Sau điểm, chi phí và phí đóng hồ sơ có thể ăn hết khoản tiết kiệm.' },
      { t: 'widget', name: 'cp-payoff', title: 'Trả nợ nhà hay đầu tư? So sánh lãi suất nợ và lợi suất kỳ vọng' }
    ] },
    { icon: '📉', title: 'Bán một cách thông minh', blocks: [
      { t: 'steps', items: ['<b>Bước 1:</b> Bán các cổ phiếu mong manh nhất theo xếp hạng độc lập (trong sách là danh sách của hãng Weiss với điểm D− và E+; chủ yếu là công nghệ, viễn thông, dược sinh học nợ nhiều, chưa có lãi).', '<b>Bước 2:</b> Với các cổ phiếu khác, kiểm tra xếp hạng của các nguồn độc lập (Morningstar, S&P, Value Line, Weiss) — xếp hạng thấp thì bán.', '<b>Bước 3–4:</b> Tự hỏi "chúng ta còn trong thị trường gấu không?". Nếu có thì bắt đầu bán, ngay cả khi cổ phiếu đã giảm sâu — vì chẳng gì chặn được việc giảm tiếp trừ khi mất sạch.', '<b>Bước 5:</b> Đừng "bán vào cái hố": bán khoảng một nửa ngay, nửa còn lại chờ nhịp hồi ngắn hạn tốt.'] },
      { t: 'h3', x: 'Hai công cụ kỹ thuật đơn giản (theo sách)' },
      { t: 'table', head: ['Câu hỏi', 'Cách nhìn đồ thị S&P 500', 'Kết luận'], rows: [
        ['Còn trong thị trường gấu không?', 'So chỉ số với đường trung bình động 200 ngày', 'Đường 200 ngày nằm trên chỉ số → xu hướng dài hạn có thể vẫn giảm → "đang trong thị trường gấu"'],
        ['Thị trường có đang hồi ngắn hạn không?', 'So chỉ số với đường trung bình động 20 ngày', 'Đường 20 ngày nằm dưới chỉ số → đang "hồi" → bán hết; nằm trên → bán nửa, chờ tiếp']
      ] },
      { t: 'widget', name: 'cp-ma', title: 'Bán thế nào? Nhập giá chỉ số và các đường trung bình động' },
      { t: 'warn', x: 'Tác giả nói rõ các quy tắc này là tùy ý, không đảm bảo. Với cổ phiếu ít giao dịch, đặt giá sàn bán (lệnh giới hạn) và nhờ môi giới thực sự hỗ trợ, nhưng đừng để họ thuyết phục bạn giữ hoặc đặt giá cao đến mức không bao giờ bán được. Trong sách, hướng dẫn nhấp vào các trang web (Yahoo Finance...) nay đã lỗi thời.' },
      { t: 'tip', x: 'Gợi ý hành vi: nếu hôm nay có tiền mới, bạn có mua cổ phiếu này không? Nếu "không đời nào" thì nên cân nhắc bán — khoản lỗ đã xảy ra, đừng để nó quyết định tương lai.' }
    ] }
  ],
  summary: ['Chọn cố vấn thu phí rõ ràng thay vì người hưởng hoa hồng.', '"Dài hạn luôn thắng" dựa trên giả định về thời điểm mua và việc bạn mua cả thị trường.', 'Trả nợ lãi cao là khoản "đầu tư" không rủi ro.', 'Bán có kỷ luật: dựa trên xếp hạng độc lập, trạng thái thị trường, bán dần.', 'Các quy tắc đường trung bình động chỉ là trợ giúp tùy ý, không đảm bảo.'],
  cards: [['Fee-only là gì?', 'Cố vấn chỉ thu phí tư vấn, không hưởng hoa hồng bán sản phẩm'], ['Dấu hiệu của người bán hàng?', 'Nói lời khuyên "miễn phí" đã nằm trong dịch vụ/hoa hồng'], ['Ba giả định ngầm của luận điểm đầu tư dài hạn?', 'Mua đầu thị trường tăng; không mua ở đỉnh; mua cả thị trường'], ['Hòa vốn bao lâu sau đỉnh 1929?', 'Ít nhất 25 năm (theo sách)'], ['Vì sao trả nợ nhà lãi 9% hấp dẫn?', 'Là khoản lợi suất 9% không rủi ro'], ['"Bán vào cái hố" là gì?', 'Bán đúng lúc thị trường lao dốc và ai cũng bán'], ['Bán nửa trước, nửa sau khi nào?', 'Khi thị trường chưa trong nhịp hồi ngắn hạn'], ['Đường 200 ngày nằm trên chỉ số nghĩa là gì (theo sách)?', 'Xu hướng dài hạn có thể vẫn giảm'], ['Lệnh giới hạn bán là gì?', 'Mức giá tối thiểu bạn chấp nhận bán']],
  quiz: [
    { q: 'Người bán hàng hay cố vấn khác nhau cơ bản ở:', o: ['Màu áo', 'Cách được trả tiền', 'Bằng cấp', 'Tuổi'], a: 1, e: 'Hoa hồng so với phí rõ ràng.' },
    { q: 'Vay nhà lãi 9%, trả bớt nợ tương đương lợi suất không rủi ro:', o: ['0%', '3%', '9%', '20%'], a: 2, e: 'Tiết kiệm đúng 9%/năm.' },
    { q: 'Theo sách, khi nào bán hết ngay?', o: ['Luôn luôn', 'Khi thị trường đang trong nhịp hồi ngắn hạn', 'Khi giá giảm sâu', 'Không bao giờ'], a: 1, e: 'Chỉ số trên đường 20 ngày → rally mode.' },
    { q: 'Điều KHÔNG phải giả định của lập luận "dài hạn luôn thắng"?', o: ['Mua đầu thị trường tăng', 'Mua cả thị trường', 'Không mua ở đỉnh', 'Thị trường luôn giảm'], a: 3, e: 'Ba giả định còn lại.' },
    { q: 'Lệnh giới hạn bán dùng khi:', o: ['Cổ phiếu ít giao dịch/biến động mạnh', 'Muốn mua thêm', 'Rút tiền', 'Cổ tức'], a: 0, e: 'Đặt giá sàn.' }
  ],
  match: [['Fee-only', 'Chỉ thu phí tư vấn'], ['200-day MA', 'Xu hướng dài hạn'], ['20-day MA', 'Nhịp hồi ngắn hạn'], ['Lệnh giới hạn', 'Giá sàn bán'], ['Trả nợ 9%', 'Lợi suất không rủi ro 9%']]
});
