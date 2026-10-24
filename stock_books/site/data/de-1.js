window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 1,
  title: 'Sử dụng một số thiết bị đo điện',
  intro: 'Bài mở đầu dạy dùng đồng hồ vạn năng (đo điện áp, dòng điện, điện trở) và mêgôm mét (đo điện trở cách điện). Mọi công việc điện sau này đều bắt đầu bằng việc đo đúng, đọc đúng và giữ an toàn.',
  sections: [
    { icon: '🔌', title: 'Đồng hồ vạn năng: tính năng và nguyên tắc dùng', blocks: [
      { t: 'p', x: 'Đồng hồ vạn năng đo được dòng điện và điện áp một chiều/xoay chiều, cùng điện trở; dùng khóa chuyển mạch (hoặc nút ấn) để đổi chức năng. Có loại kim (cơ) và loại hiện số (điện tử). Giáo trình thao tác trên điện áp hạ áp xoay chiều tới 1000 V và một chiều dưới 1000 V.' },
      { t: 'steps', items: ['Kiểm tra kim ở vị trí 0 (loại kim) hoặc pin còn tốt (loại số).', 'Đưa khóa chuyển mạch về đúng đại lượng cần đo.', 'Chọn giới hạn đo phù hợp; khi chưa biết trị số, đặt giới hạn <b>lớn nhất</b> rồi giảm dần.', 'Đấu dây đúng cực tính với đại lượng một chiều; cắm một que vào cực COM, que kia vào cực P (hoặc V).', 'Khi đo điện trở phải chập hai que và chỉnh kim về "0" bằng núm 0Ω Adj trước.'] },
      { t: 'key', x: '<b>Đo điện áp: mắc song song</b> với đối tượng. <b>Đo dòng điện: mắc nối tiếp</b> vào mạch. <b>Đo điện trở: chỉ đo khi mạch đã mất điện.</b>' },
      { t: 'widget', name: 'de-meter-read', title: 'Đọc đồng hồ kim: quy đổi số chỉ về giá trị thật' }
    ] },
    { icon: '🧮', title: 'Công thức đọc kết quả', blocks: [
      { t: 'p', x: 'Nếu giới hạn đo bằng vạch chia lớn nhất trên thang thì số chỉ chính là kết quả. Nếu khác, tính: <b>U = Ugh × αđo / αmax</b> (tương tự cho dòng điện), trong đó Ugh là giới hạn đo đã chọn, αđo là số chỉ, αmax là vạch chia lớn nhất.' },
      { t: 'widget', name: 'de-range', title: 'Chọn giới hạn đo hợp lý cho điện áp cần đo' },
      { t: 'warn', x: 'Không chạm tay vào phần kim loại của que đo và đối tượng đo; không đo điện trở khi mạch còn điện; không để dụng cụ va đập, ẩm ướt.' },
      { t: 'h3', x: 'Sai phạm thường gặp' },
      { t: 'table', head: ['Hiện tượng', 'Nguyên nhân', 'Khắc phục'], rows: [['Số dao động nhiều', 'Pin yếu, tiếp xúc kém', 'Thay pin, kiểm tra lại tiếp xúc'], ['Đọc không chính xác', 'Điện trở tiếp xúc lớn; đọc khi số chưa ổn định', 'Làm sạch đầu que, chờ số ổn định']] }
    ] },
    { icon: '🛡️', title: 'Mêgôm mét: đo điện trở cách điện', blocks: [
      { t: 'p', x: 'Mêgôm mét đo điện trở cách điện của thiết bị hạ áp (động cơ ba pha, một pha...). Dây đỏ nối cực LINE, dây đen nối cực EARTH.' },
      { t: 'steps', items: ['Chỉnh kim về vô cùng (∞) bằng vít chỉnh kim.', 'Bật nguồn: đèn Battery check và Power on sáng là pin tốt.', 'Thử hở mạch (tách hai que: kim ở ∞) và thử ngắn mạch (chập hai que: kim ở 0).', 'Đo: dây đen vào vỏ thiết bị, dây đỏ vào phần dẫn điện; xoay/ấn nút cấp nguồn; đọc khi giá trị ổn định.', 'So với tiêu chuẩn của nhà chế tạo; đo xong phải ngắt nguồn đo và tách dây đo.'] },
      { t: 'widget', name: 'de-insulation', title: 'Đánh giá điện trở cách điện: tốt, ẩm hay chạm vỏ?' },
      { t: 'tip', x: 'Bài thực hành 5S: dọn dụng cụ, vật tư về đúng chỗ; vệ sinh, lau chùi thiết bị và phòng học sau khi làm.' }
    ] }
  ],
  summary: ['Vạn năng: đo U song song, đo I nối tiếp, đo R khi mất điện.', 'Chưa biết trị số thì đặt giới hạn lớn nhất rồi giảm.', 'Số chỉ quy đổi: U = Ugh × αđo / αmax.', 'Mêgôm mét: đo điện trở cách điện; Rcđ > 0,5 MΩ là tốt.'],
  cards: [['Đo điện áp mắc thế nào?', 'Song song'], ['Đo dòng điện mắc thế nào?', 'Nối tiếp'], ['Trước khi đo điện trở?', 'Chập que, chỉnh kim về 0'], ['Chưa biết trị số cần đo?', 'Đặt giới hạn lớn nhất rồi giảm dần'], ['Cực COM?', 'Cực chung của que đo'], ['Mêgôm mét dùng để?', 'Đo điện trở cách điện'], ['Que đen mêgôm mét nối?', 'Vỏ thiết bị (EARTH)'], ['Số dao động nhiều do?', 'Pin yếu hoặc tiếp xúc kém']],
  quiz: [
    { q: 'Giới hạn đo 250 V, vạch lớn nhất 50, kim chỉ 30. Điện áp:', o: ['30 V', '100 V', '150 V', '250 V'], a: 2, e: '250×30/50.' },
    { q: 'Đo dòng điện bằng đồng hồ vạn năng thì mắc:', o: ['Song song', 'Nối tiếp', 'Không cần mắc', 'Chập hai đầu'], a: 1, e: 'Series.' },
    { q: 'Điện trở cách điện của động cơ 0,2 MΩ cho thấy:', o: ['Tốt', 'Cuộn dây ẩm', 'Chạm vỏ', 'Cháy'], a: 1, e: '0 < R < 0,5 MΩ: ẩm.' },
    { q: 'Điều cấm khi đo:', o: ['Chạm tay vào phần kim loại của que đo', 'Chọn giới hạn lớn trước', 'Chờ số ổn định', 'Kiểm tra pin'], a: 0, e: 'An toàn.' }
  ],
  match: [['Vạn năng', 'Đo U, I, R'], ['Mêgôm mét', 'Đo điện trở cách điện'], ['COM', 'Cực chung'], ['Giới hạn đo', 'Thang chọn trên khóa'], ['5S', 'Dọn dẹp sau thực hành']]
});
