window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 11,
  title: 'Cổ phiếu bị bỏ rơi và ước tính tăng trưởng dài hạn',
  intro: 'Hai kỹ thuật bổ sung: ưu tiên cổ phiếu đang được ngày càng nhiều nhà phân tích theo dõi (bị bỏ rơi trước đó), và tránh cổ phiếu mà nhà phân tích dự báo tăng trưởng quá cao (trên 30%/năm). Tác giả ví đây là "món tráng miệng"; món chính vẫn là điều chỉnh ước tính và Zacks Rank.',
  sections: [
    { icon: '🙈', title: 'Cổ phiếu bị bỏ rơi', blocks: [
      { t: 'p', x: 'Cổ phiếu bị bỏ rơi (neglected) là cổ phiếu mà đa số nhà quản lý quỹ chưa từng nghe tới. Số nhà phân tích theo dõi là chỉ báo tốt: càng ít người theo dõi, càng ít được giới thiệu đến tổ chức.' },
      { t: 'key', x: 'Độ bao phủ phụ thuộc phần lớn vào tiềm năng phí ngân hàng đầu tư. Tháng 2/2000, ở đỉnh bong bóng công nghệ, Yahoo có 30 nhà phân tích, Amazon 29, trong khi IBM 26, Citigroup 23, GE 19 — vì nhà phân tích Internet giúp tạo nhiều phí bảo lãnh, còn công ty lâu đời thì không.' },
      { t: 'list', items: ['Bị bỏ rơi thường là công ty "ngoại cuộc": không niêm yết qua ngân hàng đầu tư tên tuổi, ban quản lý thiếu quan hệ với Phố Wall.', 'Một số quỹ hoạt động tích cực (activist) mua cổ phiếu bị bỏ rơi rồi thúc ép mua lại cổ phiếu hoặc tăng độ phủ nhà phân tích để giá phản ánh đúng giá trị.', 'Nhà phân tích đôi khi ngầm báo "bán" bằng cách <b>ngừng theo dõi</b> để tránh làm mất lòng quan hệ ngân hàng đầu tư.'] },
      { t: 'tip', x: 'Cổ phiếu có số nhà phân tích theo dõi tăng gần đây có lợi suất vượt trội nhẹ; hiệu quả lớn hơn nếu bạn chủ động thúc đẩy độ phủ cho cổ phiếu mình giữ (thường chỉ khả thi với quỹ lớn).' },
      { t: 'widget', name: 'zm-neglect', title: 'Độ bao phủ nhà phân tích: bị bỏ rơi hay được quan tâm?' }
    ] },
    { icon: '🚀', title: 'Ước tính tăng trưởng dài hạn (LTG)', blocks: [
      { t: 'p', x: 'LTG là ước tính tăng trưởng lợi nhuận hằng năm trong 3–5 năm tới. Phát hiện chính:' },
      { t: 'list', items: ['Cổ phiếu có LTG đồng thuận trên 30%/năm thường <b>không</b> sinh lời tốt: dự báo quá lạc quan, thị trường trả giá quá cao, và tăng trưởng hiếm khi thành hiện thực. Để so sánh, các công ty S&P 500 nói chung được dự báo tăng 8–12%/năm.', 'Cổ phiếu có LTG rất thấp cũng không có lợi thế rõ rệt.', 'LTG hay bị "cũ" vì nhà phân tích ít cập nhật dù ước tính EPS đã bị hạ.'] },
      { t: 'table', head: ['Thay đổi LTG trong tháng (Oct 1987 – Sep 2002)', 'Lợi suất bình quân năm'], rows: [['Bị hạ', '5,9%'], ['Không đổi', '9,4%'], ['Được nâng', '12,9%'], ['S&P 500', '9,0%']] },
      { t: 'widget', name: 'zm-ltg', title: 'Lọc theo tăng trưởng dài hạn: tránh >30%, ưu tiên LTG đang tăng' },
      { t: 'key', x: 'Cách dùng LTG tốt nhất: (1) tránh LTG cực cao; (2) ưu tiên cổ phiếu có LTG vừa được nâng; (3) dùng trong tỷ lệ PEG (chương sau). Luôn ưu tiên điều chỉnh ước tính EPS và bất ngờ hơn LTG.' }
    ] }
  ],
  summary: ['Cổ phiếu bị bỏ rơi có thể đang bị định giá thấp.', 'Độ bao phủ phụ thuộc phí ngân hàng đầu tư và sự chú ý của nhà đầu tư.', 'Tránh LTG > 30%; ưu tiên LTG vừa được nâng.', 'Điều chỉnh ước tính EPS vẫn là tín hiệu chính.'],
  cards: [['Neglected stock?', 'Cổ phiếu ít nhà phân tích, ít người biết'], ['Chỉ báo bỏ rơi?', 'Số nhà phân tích theo dõi'], ['LTG?', 'Tăng trưởng lợi nhuận dự báo 3–5 năm'], ['LTG nên tránh?', 'Trên 30%/năm'], ['Tăng trưởng S&P 500 dự báo?', '8–12%/năm'], ['LTG được nâng trong tháng?', 'Lợi suất 12,9%/năm'], ['Ngừng theo dõi nghĩa là?', 'Có thể là cách ngầm báo "bán"'], ['Activist manager?', 'Quỹ thúc ép thay đổi ở công ty mình mua']],
  quiz: [
    { q: 'LTG đồng thuận 40%/năm:', o: ['Nên mua mạnh', 'Nên tránh', 'Bình thường', 'Không ảnh hưởng'], a: 1, e: 'Quá lạc quan.' },
    { q: 'Độ phủ cao của Yahoo năm 2000 chủ yếu do:', o: ['Tiềm năng phí ngân hàng đầu tư', 'Sản phẩm', 'Cổ tức', 'Thuế'], a: 0, e: 'Banking fees.' },
    { q: 'Thay đổi LTG tốt nhất cho cổ phiếu là:', o: ['Bị hạ', 'Không đổi', 'Được nâng', 'Bị xóa'], a: 2, e: '12,9%.' },
    { q: 'Cổ phiếu bị bỏ rơi thường là:', o: ['Rất nổi tiếng', 'Ít người biết', 'Luôn tốt', 'Luôn xấu'], a: 1, e: 'Neglect.' }
  ],
  match: [['Neglect', 'Ít người biết đến'], ['LTG', 'Tăng trưởng dài hạn dự báo'], ['Activist', 'Quỹ thúc ép thay đổi'], ['Coverage', 'Số nhà phân tích theo dõi'], ['PEG', 'P/E chia tăng trưởng']]
});
