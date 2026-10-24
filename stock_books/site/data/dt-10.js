window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 10,
  title: 'Các ví dụ và gợi ý khác',
  intro: 'Wyckoff nhận ra không thể đo quy mô một nhịp từ những dao động đầu tiên. Chương này nói về khối lượng bất thường trong biên độ nhỏ (dấu hiệu thao túng), thị trường có hay không có công chúng, và ví dụ Reading tháng 6/1909.',
  sections: [
    { icon: '🚦', title: 'Đừng đo nhịp lớn từ những dao động đầu', blocks: [
      { t: 'p', x: 'Nhiều nhịp quan trọng bắt đầu rất khiêm tốn: đỉnh của một đợt giảm lớn có thể chỉ là khối lượng nhẹ và giá trôi xuống, rồi biến thành trượt mạnh và kết thúc bằng cú lao dốc. Khi một cổ phiếu đang dao động trong biên độ 3 điểm và đột nhiên bùng lên vượt biên cũ, hãy đi theo. Nhưng đừng cố bắt từng cái lắc: nếu tăng 3 điểm rồi đảo 1–1,5 điểm với khối lượng nhẹ thì đó là nhịp chỉnh tự nhiên, không phải đổi xu hướng.' },
      { t: 'tip', x: 'Người giao dịch lão luyện dần nâng lệnh dừng phía sau, để nhịp chỉnh đầu tiên đưa họ ra ở gần đỉnh. Sau khi mua ở đó, họ bán khi giá tiến gần đỉnh cũ, trừ khi có dấu hiệu vượt lên đỉnh mới.' },
      { t: 'key', x: 'Khi cổ phiếu im lìm nhiều ngày trong biên độ 3 điểm rồi bỗng giao dịch hàng nghìn thay vì hàng trăm cổ phiếu, đó là bằng chứng một chuyển động mới bắt đầu, <b>nhưng chưa chắc theo chiều dự kiến</b>. Cần thận trọng cho đến khi giá phá biên cũ với khối lượng lớn và tăng dần.' }
    ] },
    { icon: '🧪', title: 'Khối lượng khổng lồ trong biên độ nhỏ: thao túng', blocks: [
      { t: 'p', x: 'Nếu cổ phiếu bị đẩy lên đột ngột, đó có thể là để tạo điều kiện bán cho một nhà đầu cơ lớn. Cách phân biệt chuyển động thật và giả: chú ý khối lượng <b>bất thường lớn trong biên độ nhỏ</b> — thường là thao túng: khối lượng lớn chỉ để thu hút người mua và che bàn tay người chơi lớn.' },
      { t: 'p', x: 'Ví dụ: khi Reading chạm 159¾ tháng 6/1909, Wyckoff đếm khoảng 80.000 cổ phiếu trong khoảng nửa điểm quanh 159 — "dấu hiệu rõ ràng về một đợt giảm sắp tới". Cổ phiếu bị đẩy lên trước khi bị đạp xuống; ai đọc đúng sẽ lãi lớn.' },
      { t: 'widget', name: 'dt-churn', title: 'Khối lượng bất thường trong biên độ nhỏ: dấu hiệu gì?' }
    ] },
    { icon: '👥', title: 'Thị trường có công chúng và không có công chúng', blocks: [
      { t: 'p', x: '"Công chúng không có trong thị trường này" là câu hay nghe — thường từ chính những người thuộc "công chúng". Theo Wyckoff, thị trường không có đám đông thì chuyển động trật tự hơn và phản ứng chính xác hơn với điều kiện thực. Thị trường đầy công chúng là một "cơn say đầu cơ" của những người hiểu biết tương đương 1/8.' },
      { t: 'table', head: ['', 'Lợi', 'Hại'], rows: [['Thị trường đông công chúng', 'Dao động rộng (10 điểm thay vì 3) — lợi cho người đọc băng', 'Băng giá chậm, khó khớp lệnh ở giá mong muốn; mọi người tranh vào trả cao hơn dự tính'], ['Thị trường ít công chúng', 'Chuyển động trật tự', 'Dao động hẹp, ít cơ hội']] },
      { t: 'widget', name: 'dt-crowd', title: 'Có công chúng hay không? Tín hiệu về dao động và trượt giá' }
    ] }
  ],
  summary: ['Đừng đoán quy mô nhịp từ dao động đầu.', 'Khối lượng lớn trong biên độ nhỏ thường là thao túng.', 'Cần xác nhận phá biên bằng khối lượng tăng dần.', 'Thị trường đông công chúng: dao động lớn nhưng khớp lệnh tệ.'],
  cards: [['Dấu hiệu nhịp mới?', 'Khối lượng bùng từ trăm lên nghìn'], ['Nhưng chưa chắc?', 'Hướng chưa xác định'], ['Khối lượng lớn trong biên độ nhỏ?', 'Dấu hiệu thao túng'], ['Ví dụ Reading 1909?', '~80.000 cp quanh 159 → giảm sau đó'], ['Nhịp chỉnh tự nhiên?', 'Đảo 1–1,5 điểm khi khối lượng nhẹ'], ['Lệnh dừng khi có lãi?', 'Nâng dần phía sau'], ['Mặt lợi thị trường đông công chúng?', 'Dao động rộng'], ['Mặt hại?', 'Băng giá chậm, khó khớp']],
  quiz: [
    { q: 'Khối lượng khổng lồ trong biên độ rất nhỏ thường là dấu hiệu:', o: ['Thao túng', 'Sắp chia cổ tức', 'Thị trường chết', 'Lãi suất giảm'], a: 0, e: 'Disguise the operator.' },
    { q: 'Cổ phiếu tăng 3 điểm rồi đảo 1 điểm với khối lượng nhẹ:', o: ['Đổi xu hướng', 'Nhịp chỉnh tự nhiên', 'Phá sản', 'Tín hiệu bán mạnh'], a: 1, e: 'Natural reaction.' },
    { q: 'Cần chờ gì trước khi tin một cú bùng nổ khối lượng?', o: ['Phá biên cũ với khối lượng lớn tăng dần', 'Tin tức', 'Khuyến nghị', 'Hết ngày'], a: 0, e: 'Caution.' },
    { q: 'Mặt hại của thị trường đông công chúng:', o: ['Băng chậm, khó khớp lệnh', 'Dao động hẹp', 'Không có khối lượng', 'Không có tin'], a: 0, e: 'Tape behind.' }
  ],
  match: [['Manipulation', 'Thao túng'], ['Breakout', 'Phá biên'], ['Reaction', 'Nhịp chỉnh'], ['Public', 'Công chúng'], ['Trailing stop', 'Nâng dừng theo giá']]
});
