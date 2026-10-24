window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 4,
  title: 'Tầm quan trọng của lợi nhuận và điều chỉnh ước tính',
  intro: 'Vì sao lợi nhuận là thứ quyết định giá cổ phiếu, và vì sao thay đổi ước tính lợi nhuận lại báo trước giá? Chương này giải thích "hiện tượng bò chậm" (analyst creep), độ trễ của nhà đầu tư tổ chức và lý do điều chỉnh ước tính mạnh hơn khuyến nghị.',
  sections: [
    { icon: '🍽️', title: 'Lợi nhuận là thứ bạn "ăn được"', blocks: [
      { t: 'p', x: 'Tác giả dùng cửa hàng tiện lợi Qwik-E-Mart: nếu mua 20% cửa hàng, thông tin quan trọng nhất không phải số khách, số nhân viên hay website mới, mà là <b>phần của bạn trong lợi nhuận tương lai</b>. Lợi nhuận có thể chia thành tiền mặt hoặc được giữ lại đầu tư (như máy làm nước Slurpee), nhưng cuối cùng đó là thứ cho cổ phiếu giá trị.' },
      { t: 'key', x: 'Chủ cổ phiếu chỉ "ăn" được lợi nhuận. Công ty bán hàng thấp hơn giá thành thì vô giá trị dù sản phẩm hay đến đâu.' },
      { t: 'widget', name: 'zm-stake', title: 'Phần lợi nhuận của bạn khi sở hữu một tỷ lệ công ty' },
      { t: 'tip', x: 'Bài học bong bóng Internet: từ tháng 3/2000 đến tháng 8/2002, chỉ số Internet của Sàn Philadelphia giảm 94%; 1.000 USD còn khoảng 60 USD. Khi nhà đầu tư lại nhìn vào lợi nhuận, các công ty không có lợi nhuận bị trừng phạt nặng.' },
      { t: 'p', x: 'Quan trọng không phải lợi nhuận lịch sử mà là <b>lợi nhuận tương lai</b>; vì thế kỳ vọng lợi nhuận của nhà phân tích rất quan trọng. Cổ tức không phải thước đo chính vì nhiều công ty giữ lại lợi nhuận để tái đầu tư.' }
    ] },
    { icon: '🏦', title: 'Nhà đầu tư tổ chức và độ trễ phản ứng', blocks: [
      { t: 'p', x: 'Nhà đầu tư tổ chức nắm khối lượng lớn cổ phiếu và không thể mua hết ngay mà phải mua dần vài ngày đến vài tuần để không đẩy giá. Vì vậy khi ước tính tăng, giá phản ứng dần, tạo cơ hội cho nhà đầu tư nhanh nhạy.' },
      { t: 'steps', items: ['Nhà phân tích nâng ước tính (thời điểm T) → giá phản ứng ban đầu nhưng bị trễ (A).', 'Việc nâng ước tính đầu tiên là dấu hiệu sẽ còn nâng tiếp (B).', 'Các lần nâng tiếp theo → giá tiếp tục tăng (C).', 'Mua ngay khi thấy lần nâng đầu tiên là đón đầu cả đợt nâng sau và đợt tăng giá sau (D).'] },
      { t: 'widget', name: 'zm-creep', title: 'Hiện tượng "bò chậm" (analyst creep): chuỗi nâng ước tính liên tiếp' }
    ] },
    { icon: '🐢', title: 'Vì sao có analyst creep?', blocks: [
      { t: 'p', x: 'Nhà phân tích hiếm khi nhảy một bước lớn mà điều chỉnh <b>từng chút</b>: họ ngại sai lệch lớn so với đồng nghiệp và đánh mất sự tin cậy; họ nhận thông tin dần qua các quý; và ước tính liên quan với nhau (một người nâng thì người khác dần nâng theo). Do đó một lần nâng ước tính tháng này làm tăng khả năng lần nâng khác tháng sau.' },
      { t: 'key', x: 'Cổ phiếu vừa được nâng ước tính tháng trước thường tiếp tục được nâng tháng này; cổ phiếu vừa bị hạ thường tiếp tục bị hạ. Mua sớm khi nâng, bán sớm khi hạ.' }
    ] },
    { icon: '⚖️', title: 'Khuyến nghị so với điều chỉnh ước tính', blocks: [
      { t: 'p', x: 'Khi một nhà phân tích nâng lên "strong buy", giá thường nhảy mạnh tức thì — phản ứng tức thời mạnh hơn phản ứng với điều chỉnh ước tính. Nhưng <b>khuyến nghị không tương quan theo thời gian</b>: nếu Andrew nâng Dell lên strong buy thì Bob không chắc nâng theo trong tháng tới. Ước tính lợi nhuận thì có tương quan, nên có thể dự đoán.' },
      { t: 'table', head: ['', 'Thay đổi khuyến nghị', 'Điều chỉnh ước tính lợi nhuận'], rows: [['Phản ứng giá tức thì', 'Mạnh', 'Nhẹ hơn'], ['Độ trễ của nhà đầu tư tổ chức', 'Có', 'Có'], ['Tương quan theo thời gian (creep)', 'Yếu', 'Mạnh'], ['Mục đích', 'Thường phục vụ môi giới bán lẻ', 'Phản ánh mô hình tài chính'], ['Được tổ chức coi trọng', 'Ít', 'Nhiều']] },
      { t: 'warn', x: 'Tác giả cho rằng nhiều nhà quản lý quỹ chuyên nghiệp thậm chí bỏ qua khuyến nghị của môi giới và chỉ dùng ước tính lợi nhuận.' }
    ] }
  ],
  summary: ['Lợi nhuận là thứ quyết định giá trị cổ phiếu; kỳ vọng tương lai quan trọng hơn quá khứ.', 'Nhà đầu tư tổ chức phản ứng chậm, tạo độ trễ giá.', 'Analyst creep: nâng hôm nay → dễ nâng tiếp.', 'Điều chỉnh ước tính có tương quan theo thời gian, khuyến nghị thì không.'],
  cards: [['Vì sao lợi nhuận quan trọng?', 'Là phần chủ sở hữu thực sự nhận'], ['Analyst creep?', 'Nhà phân tích điều chỉnh từng chút, theo cùng hướng'], ['Vì sao giá phản ứng chậm?', 'Nhà đầu tư tổ chức mua/bán dần'], ['Khuyến nghị khác ước tính ở đâu?', 'Ít tương quan theo thời gian'], ['Ví dụ mất giá Internet?', '−94% (Mar 2000–Aug 2002)'], ['Mua khi nào?', 'Ngay khi thấy nâng ước tính đầu tiên'], ['Quỹ chuyên nghiệp dùng gì?', 'Ước tính lợi nhuận hơn khuyến nghị'], ['Tương lai quan trọng hơn?', 'Lợi nhuận kỳ vọng hơn lịch sử']],
  quiz: [
    { q: 'Mua 20% công ty có lợi nhuận 100 triệu. Phần của bạn:', o: ['10 triệu', '20 triệu', '50 triệu', '100 triệu'], a: 1, e: '20%×100.' },
    { q: 'Analyst creep nghĩa là:', o: ['Điều chỉnh nhỏ nhiều lần theo cùng hướng', 'Một lần nhảy lớn', 'Hủy ước tính', 'Chỉ nâng 1 lần'], a: 0, e: 'Incremental.' },
    { q: 'Khuyến nghị khác ước tính ở chỗ:', o: ['Ít tương quan theo thời gian', 'Tương quan mạnh', 'Do SEC phát hành', 'Không có giá'], a: 0, e: 'Khó dự đoán.' },
    { q: 'Nhà đầu tư tổ chức phản ứng chậm vì:', o: ['Họ lười', 'Mua dần để không đẩy giá', 'Không đọc báo cáo', 'Luật cấm'], a: 1, e: 'Khối lượng lớn.' }
  ],
  match: [['Analyst creep', 'Điều chỉnh dần dần'], ['Institutional delay', 'Độ trễ phản ứng của tổ chức'], ['Qwik-E-Mart', 'Ví dụ cửa hàng tiện lợi'], ['Upgrade', 'Nâng khuyến nghị'], ['Revision', 'Điều chỉnh ước tính']]
});
