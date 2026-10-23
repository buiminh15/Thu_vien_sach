window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 3,
  title: 'Cơn sốt quảng bá của Phố Wall',
  intro: 'Số liệu "đẹp" của UCBS đến tai công chúng qua các phân tích viên. Chương này mô tả vì sao lời khuyên của họ lệch lạc: tiền thật nằm ở phí ngân hàng đầu tư chứ không nằm ở việc giúp bạn chọn cổ phiếu tốt.',
  sections: [
    { icon: '📢', title: 'Cách tin đẹp đến tay nhà đầu tư', blocks: [
      { t: 'p', x: 'CEO công bố số liệu mới trong một cuộc gọi kín với khoảng hai chục phân tích viên. Các báo cáo "mua mạnh" lập tức tràn ra, cổ phiếu UCBS nhảy từ 11 lên 30 USD. Công ty Harris & Jones (hư cấu) làm đơn vị bảo lãnh chính, dùng cả phòng thu truyền hình riêng để phối hợp với kênh tài chính lớn; đợt bán hơn 3,5 triệu cổ phiếu ở giá trung bình 36 USD. Giá tiếp tục vọt lên hơn 50 rồi gần 64 USD, CEO lên bìa tạp chí.' },
      { t: 'list', items: ['Không phân tích viên nào đọc kỹ báo cáo 10-K hay phần chú thích có thể giấu "bom hẹn giờ".', 'Gần như tất cả các tổ chức (quỹ tương hỗ, quỹ hưu trí, nhà thờ, quỹ đại học) đều mua; quỹ nào không mua bị chê là "lỡ chuyến tàu".'] }
    ] },
    { icon: '🤫', title: 'Phân tích viên biết nhưng không nói', blocks: [
      { t: 'p', x: 'Tamara Belmont, trợ lý phân tích viên, thấy UCBS có nợ quá nhiều, tiêu tiền nhanh hơn huy động, ít tài sản thực để bán khi cần, giá quá cao so với lợi nhuận và kế toán rối. Nhưng sếp từ chối hạ xuống "bán" vì sợ làm hỏng quan hệ với công ty và cả hãng. Kế hoạch ngầm của hãng:' },
      { t: 'steps', items: ['Âm thầm cảnh báo vài khách hàng VIP lớn (nhiều người là CEO của công ty khác đang là khách của ngân hàng đầu tư).', 'Công khai vẫn giữ "mua", rồi hạ dần: "tích lũy" → "nắm giữ" → ngừng theo dõi mà không báo.', 'Nhà đầu tư nhỏ không nhận được tín hiệu "bán" nào.'] },
      { t: 'key', x: 'Khách VIP mua ở giá IPO 3 USD, được gọi điện cảnh báo và bán ở hơn 30 USD (lãi 10 lần). Nhà đầu tư nhỏ nghe truyền hình, mua ở 40–60 USD và giữ đến khi cổ phiếu chỉ còn dưới 6 USD.' },
      { t: 'widget', name: 'cp-vip', title: 'VIP và nhà đầu tư nhỏ: ai thắng, ai thua?' }
    ] },
    { icon: '🧾', title: 'Những ví dụ có thật được nêu trong sách', blocks: [
      { t: 'table', head: ['Phân tích viên / hãng', 'Cổ phiếu', 'Kết quả cho người nghe lời'], rows: [
        ['Mary Meeker (Morgan Stanley)', 'Priceline (khuyến nghị mua ở 104 USD)', 'Giảm còn 1,50 USD sau 21 tháng (mất khoảng 98%)'],
        ['Mary Meeker', 'Yahoo, Amazon, Drugstore.com, Homestore.com', 'Giảm lần lượt 97%, 95%, 99%, 95,5% trong giai đoạn nêu trong sách'],
        ['Jack Grubman (Salomon Smith Barney)', 'AT&T Wireless', 'Đổi sang "mua" khi hãng cần hợp đồng IPO; cổ phiếu mất khoảng một nửa'],
        ['Henry Blodget (Merrill Lynch)', 'Amazon, Pets.com, eToys, InfoSpace...', 'Dự báo Amazon 400 USD nhưng giảm dưới 11 USD; nhiều công ty giảm 84–100%'],
        ['Analyst của Goldman Sachs (năm 2000)', '11 cổ phiếu "tích cực"', 'Mất từ 71% đến 99,8%']
      ] },
      { t: 'warn', x: 'Đây là các số liệu và nhận định do tác giả nêu từ cuối 2002; hãy xem như bối cảnh lịch sử của vụ bê bối phân tích viên, không phải đánh giá về từng cá nhân hiện nay.' },
      { t: 'widget', name: 'cp-loss', title: 'Mất 98% thì cần tăng bao nhiêu % để hòa vốn?' }
    ] },
    { icon: '💰', title: 'Vì sao mọi thứ lệch về một phía', blocks: [
      { t: 'table', head: ['', 'Trước đây', 'Thập niên 1990'], rows: [
        ['Nguồn thu chính của hãng', 'Hoa hồng môi giới (làm việc cho nhà đầu tư)', 'Phí ngân hàng đầu tư (làm việc cho công ty muốn bán cổ phiếu)'],
        ['Lương phân tích viên', 'Lương cố định', 'Thưởng gắn với việc giúp bán cổ phiếu'],
        ['Đánh giá phân tích viên', 'Có chỗ cho ý kiến phản biện', 'Gần như không có tiếng nói trái chiều'],
      ] },
      { t: 'list', items: ['Chung Wu (UBS PaineWebber) cảnh báo nhân viên Enron năm 2001 là giữ cổ phiếu có thể rất tốn kém; Enron phản ứng, ông bị sa thải và hãng hạ thấp cảnh báo. Ba tháng sau cổ phiếu còn dưới 0,25 USD.', 'Không hãng nào gắn thu nhập phân tích viên với thành tích dự báo thực tế.', 'Email nội bộ Merrill Lynch (do tổng chưởng lý New York Eliot Spitzer công bố) cho thấy phân tích viên gọi riêng một số cổ phiếu bằng lời lẽ rất thấp trong khi công khai xếp hạng mua/tích lũy.', 'Merrill thu hơn 115 triệu USD phí từ 52 thương vụ với chính các công ty được khuyến nghị; Salomon thu gần 1 tỷ USD phí từ viễn thông trong 1997–2002.'] },
      { t: 'tip', x: 'Câu nhắc của Tamara: <b>Không có tình nghĩa ở Phố Wall. Các hãng lớn không kinh doanh để làm bạn giàu — họ làm cho chính họ giàu.</b> Hãy hỏi mỗi lời khuyên: người này kiếm tiền từ đâu?' },
      { t: 'widget', name: 'cp-conflict', title: 'Kiểm tra xung đột lợi ích của một khuyến nghị' }
    ] },
    { icon: '🔎', title: 'Điều gì đã xảy ra sau đó (ghi chú ngoài sách)', blocks: [
      { t: 'list', items: ['Năm 2003 các ngân hàng lớn ký thỏa thuận dàn xếp với cơ quan quản lý Mỹ: tách bạch bộ phận nghiên cứu khỏi ngân hàng đầu tư, nộp phạt hàng trăm triệu USD.', 'Lời khuyên "độc lập" vẫn quan trọng: hãy đọc phần công bố xung đột lợi ích trong mọi báo cáo.'] }
    ] }
  ],
  summary: ['Phân tích viên bị chi phối bởi thu nhập ngân hàng đầu tư, không phải bởi thành tích dự báo.', 'Khách VIP được cảnh báo riêng, nhà đầu tư nhỏ thì không.', 'Hạ xếp hạng từ từ hoặc ngừng theo dõi là cách tránh gây sốc nhưng làm hại người tin vào xếp hạng cũ.', 'Mất càng sâu thì càng khó gỡ: lỗ 98% cần tăng 4.900% để hòa vốn.', 'Luôn hỏi: người đưa lời khuyên được trả tiền từ đâu?'],
  cards: [['Nguồn thu chính của Phố Wall thập niên 1990?', 'Phí ngân hàng đầu tư (bảo lãnh phát hành, M&A)'], ['Phân tích viên được thưởng theo gì?', 'Khả năng giúp bán cổ phiếu, không phải độ chính xác'], ['Vì sao hãng không hạ xếp hạng sớm?', 'Sợ mất khách hàng doanh nghiệp và doanh thu ngân hàng đầu tư'], ['Khách VIP khác nhà đầu tư nhỏ thế nào?', 'Được gọi cảnh báo riêng và bán sớm'], ['Chung Wu bị gì?', 'Bị sa thải sau khi cảnh báo nhân viên Enron'], ['Ai công bố email Merrill Lynch?', 'Tổng chưởng lý New York Eliot Spitzer'], ['Tỷ lệ phục hồi cần khi lỗ 50%?', 'Phải tăng 100%'], ['Hạ xếp hạng "theo kiểu nhẹ nhàng" nghĩa là?', 'Mua → tích lũy → nắm giữ → ngừng theo dõi'], ['Điều nên làm khi đọc báo cáo phân tích?', 'Xem phần công bố xung đột lợi ích']],
  quiz: [
    { q: 'Hãng chứng khoán thập niên 1990 làm chủ yếu cho ai?', o: ['Nhà đầu tư mua', 'Công ty muốn bán cổ phiếu', 'Chính phủ', 'Nhân viên'], a: 1, e: 'Phí ngân hàng đầu tư là nguồn thu chính.' },
    { q: 'Cổ phiếu mất 98%, để hòa vốn cần tăng khoảng:', o: ['98%', '200%', '1.000%', '4.900%'], a: 3, e: '1/0,02 − 1 = 49 lần = 4.900%.' },
    { q: 'Vì sao nhà đầu tư nhỏ không nghe chữ "bán"?', o: ['Không có rủi ro', 'Hãng ngại làm mất khách hàng và doanh thu', 'Luật cấm', 'Tin vào CEO'], a: 1, e: 'Xung đột lợi ích.' },
    { q: 'Khách VIP của hãng thường làm gì?', o: ['Giữ đến cùng', 'Bán sau khi được cảnh báo riêng', 'Mua thêm', 'Không đầu tư'], a: 1, e: 'Họ bán ở hơn 30 USD.' },
    { q: 'Câu rút ra đáng nhớ nhất của chương:', o: ['Phân tích viên luôn sai', 'Hãy xem lời khuyên đến từ ai và họ được lợi gì', 'Không nên đầu tư', 'Chỉ mua blue-chip'], a: 1, e: 'Xung đột lợi ích.' }
  ],
  match: [['IPO', 'Phát hành lần đầu ra công chúng'], ['Ngân hàng đầu tư', 'Hưởng phí bảo lãnh'], ['Analyst bonus', 'Gắn với việc bán cổ phiếu'], ['Spitzer', 'Công bố email nội bộ'], ['Hạ xếp hạng chậm', 'Làm hại người tin xếp hạng']]
});
