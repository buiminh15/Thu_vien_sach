window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 3,
  title: 'Mổ xẻ báo cáo của nhà phân tích',
  intro: 'Báo cáo nghiên cứu cổ phiếu không phải khoa học tên lửa. Chương này tách báo cáo thành năm phần (khuyến nghị, ước tính lợi nhuận, ước tính tăng trưởng dài hạn, giá mục tiêu, văn bản), giải thích Regulation FD và vì sao nhà phân tích vẫn có thể làm giá cổ phiếu chuyển động.',
  sections: [
    { icon: '🔎', title: 'Điều gì làm nghiên cứu của họ đặc biệt?', blocks: [
      { t: 'p', x: 'Mô hình kế toán của nhà phân tích không phức tạp hơn nhiều so với những gì sinh viên MBA học. Khó nhất là có dữ liệu đầu vào đúng. Khác biệt cốt lõi so với nghiên cứu của quỹ là báo cáo của nhà phân tích Phố Wall <b>vừa công khai, vừa làm giá chuyển động</b> vì các tổ chức lớn hành động theo nó.' },
      { t: 'key', x: 'Một khuyến nghị hay của blogger hay nhà báo gần như không ảnh hưởng giá; cùng khuyến nghị đó từ nhà phân tích ngân hàng lớn thì thị trường phản ứng ngay.' }
    ] },
    { icon: '⚖️', title: 'Regulation FD', blocks: [
      { t: 'p', x: 'Cuối năm 2000, SEC ban hành Regulation Fair Disclosure: công ty không được tiết lộ thông tin trọng yếu chưa công khai cho một số người (nhà phân tích, nhà đầu tư lớn) mà không công bố đồng thời cho tất cả. Trước đó, nhà phân tích có lợi thế vì được ban lãnh đạo "mách" trước.' },
      { t: 'list', items: ['Ưu điểm: cá nhân và tổ chức tiếp cận thông tin cùng lúc.', 'Tác dụng phụ: công ty tiết lộ ít thông tin hơn để tránh vi phạm; nhà đầu tư tổ chức bị kéo xuống ngang mức cá nhân thay vì ngược lại.'] },
      { t: 'tip', x: 'Hệ quả cho bạn: thông tin ngày nay đến qua thông cáo báo chí chính thức, nên theo dõi các thông báo công bố của công ty và phản ứng của nhà phân tích sau đó.' }
    ] },
    { icon: '🧩', title: 'Năm phần của một báo cáo', blocks: [
      { t: 'table', head: ['Phần', 'Đánh giá của tác giả'], rows: [
        ['Khuyến nghị (mua/giữ/bán)', 'Ít hữu ích nhất vì thiên lệch'],
        ['Ước tính lợi nhuận (EPS)', 'Quan trọng nhất — đặc biệt là sự thay đổi'],
        ['Ước tính tăng trưởng dài hạn', 'Có thể hữu ích nhưng hay gây hiểu nhầm'],
        ['Giá mục tiêu', 'Ít hữu ích'],
        ['Văn bản', 'Dùng để hiểu lý do điều chỉnh ước tính']
      ] },
      { t: 'widget', name: 'zm-text-decoder', title: 'Giải mã văn bản báo cáo: lời lẽ nào là tín hiệu xấu?' },
      { t: 'h3', x: 'Quy tắc đọc phần văn bản' },
      { t: 'list', items: ['<b>Câu trung tính hãy hiểu là tiêu cực.</b> Bất kỳ câu nào không rõ ràng tích cực nên được coi là lời chê.', 'Đừng để lời bình luận làm bạn rời mắt khỏi việc điều chỉnh ước tính.', 'Dùng văn bản để tìm lý do điều chỉnh: <b>tăng nhờ doanh thu</b> là tốt nhất; <b>nhờ cắt giảm chi phí</b> tạm được; <b>nhờ mua lại công ty</b> cần chiết khấu mạnh; <b>nhờ thay đổi kế toán</b> thì bỏ qua.'] },
      { t: 'widget', name: 'zm-revision-quality', title: 'Chất lượng của một lần nâng ước tính: nguyên nhân là gì?' }
    ] },
    { icon: '🌀', title: 'Ba đường để nhà phân tích làm giá chuyển động', blocks: [
      { t: 'steps', items: ['Nhà quản lý quỹ lớn đọc báo cáo và hành động theo hướng dẫn.', 'Lực lượng bán hàng tổ chức của công ty môi giới gọi cho các quỹ để chào ý tưởng.', 'Lực lượng môi giới bán lẻ chào bán cho nhà đầu tư cá nhân.'] },
      { t: 'p', x: 'Tác giả thừa nhận có tính vòng tròn: nhà đầu tư nghe nhà phân tích vì biết người khác cũng nghe, nên giá phản ứng. Ông đồng ý khuyến nghị thiên lệch và việc tự nghiên cứu hay đi ngược đám đông vẫn có giá trị, nhưng không đồng ý rằng "mọi thứ do nhà phân tích tạo ra đều vô giá trị" — có cách dùng đúng, đó là nội dung các chương sau.' }
    ] }
  ],
  summary: ['Báo cáo của nhà phân tích làm giá chuyển động vì công khai và có tổ chức hành động theo.', 'Reg FD làm tăng tính công bằng nhưng giảm lượng thông tin.', 'Báo cáo có năm phần; ước tính lợi nhuận là quan trọng nhất.', 'Câu trung tính ≈ tiêu cực; xem lý do điều chỉnh để đánh giá chất lượng.'],
  cards: [['Reg FD?', 'Công ty không được tiết lộ thông tin trọng yếu có chọn lọc'], ['Năm phần của báo cáo?', 'Khuyến nghị, EPS, tăng trưởng dài hạn, giá mục tiêu, văn bản'], ['Phần ít hữu ích nhất?', 'Khuyến nghị và giá mục tiêu'], ['Nâng ước tính nhờ doanh thu?', 'Tốt nhất'], ['Nâng ước tính nhờ mua lại?', 'Cần chiết khấu mạnh'], ['Nâng ước tính nhờ đổi kế toán?', 'Bỏ qua'], ['Câu trung tính nghĩa là?', 'Thường là tiêu cực'], ['Ba đường nhà phân tích ảnh hưởng giá?', 'Quỹ lớn, đội bán hàng tổ chức, môi giới bán lẻ']],
  quiz: [
    { q: 'Lý do tăng ước tính tốt nhất là:', o: ['Thay đổi kế toán', 'Tăng doanh thu', 'Mua lại công ty', 'Lời hứa của CEO'], a: 1, e: 'Top-line growth.' },
    { q: 'Câu "kết quả quý này nằm trong dự kiến" nên hiểu:', o: ['Rất tích cực', 'Trung tính, thiên về tiêu cực', 'Chắc chắn mua', 'Không liên quan'], a: 1, e: 'Neutral = negative.' },
    { q: 'Tác dụng phụ của Reg FD:', o: ['Công ty tiết lộ ít thông tin hơn', 'Công ty tiết lộ nhiều hơn', 'Giá luôn tăng', 'Hết nhà phân tích'], a: 0, e: 'Thông tin bị hạn chế.' },
    { q: 'Phần nào quan trọng nhất trong báo cáo?', o: ['Giá mục tiêu', 'Khuyến nghị', 'Thay đổi ước tính EPS', 'Ảnh bìa'], a: 2, e: 'Theo tác giả.' }
  ],
  match: [['Reg FD', 'Công bố công bằng'], ['EPS estimate', 'Ước tính lợi nhuận/cp'], ['Price target', 'Giá mục tiêu'], ['LTG', 'Tăng trưởng dài hạn'], ['Top-line', 'Doanh thu']]
});
