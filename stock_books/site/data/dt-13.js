window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 13,
  title: 'Hai ngày giao dịch: ví dụ áp dụng phương pháp',
  intro: 'Chương ngắn: Wyckoff đưa bản ghi 15 giao dịch trong hai phiên của một cổ phiếu để minh họa khả năng của phương pháp và khích lệ người học. Điểm đáng nhớ không phải con số thắng mà là cách ông tổ chức rủi ro.',
  sections: [
    { icon: '📒', title: 'Bản ghi hai ngày', blocks: [
      { t: 'list', items: ['15 giao dịch tính theo giá mua và giá bán: <b>13 thắng, 1 thua, 1 hòa</b>.', '7 giao dịch mua, 8 giao dịch bán khống.', 'Cổ phiếu dao động giữa 166¾ và 170⅜ (3⅝ điểm) trong hai phiên nhưng vẫn cho nhiều cơ hội.', 'Mọi giao dịch đều được bảo vệ bằng lệnh dừng sát — có lúc chỉ ⅛ hoặc ¼ điểm so với giá vào.', 'Không phải lúc nào lệnh dừng cũng được gửi lên sàn: trong giao dịch dồn dập, ông giữ dừng trong đầu vì dễ đổi/hủy hơn, và đóng "theo thị trường" khi giá chạm mức đó.'] },
      { t: 'widget', name: 'dt-winrate', title: 'Tỷ lệ thắng, lãi trung bình và kỳ vọng mỗi giao dịch' },
      { t: 'warn', x: 'Đây là kết quả do chính tác giả tự công bố (không được kiểm chứng độc lập), tính theo giá mua/bán chưa kể chi phí. Hãy đọc như minh họa thao tác, không phải bằng chứng hiệu quả.' },
      { t: 'tip', x: 'Thay vì dựa vào tỷ lệ thắng, hãy nhìn <b>kỳ vọng = tỷ lệ thắng × lãi trung bình − tỷ lệ thua × lỗ trung bình − chi phí</b>. Dừng sát làm lỗ nhỏ nhưng dễ bị quét nhiều lần.' }
    ] }
  ],
  summary: ['Hai phiên, 15 giao dịch, rủi ro mỗi giao dịch rất nhỏ.', 'Lệnh dừng sát bảo vệ nhưng có thể bị quét.', 'Kết quả tự công bố, chưa tính chi phí.'],
  cards: [['Bao nhiêu giao dịch thắng?', '13/15 (theo tác giả)'], ['Biên độ giá hai phiên?', '3⅝ điểm'], ['Dừng sát nhất?', '⅛–¼ điểm'], ['Dừng giữ trong đầu vì?', 'Dễ đổi/hủy hơn'], ['Hạn chế?', 'Kết quả tự công bố, chưa tính phí'], ['Mua hay bán nhiều hơn?', '7 mua, 8 bán khống']],
  quiz: [
    { q: 'Thắng 13, thua 1, hòa 1: tỷ lệ thắng:', o: ['13%', '67%', '87%', '100%'], a: 2, e: '13/15.' },
    { q: 'Điều cần xét ngoài tỷ lệ thắng:', o: ['Kỳ vọng mỗi giao dịch', 'Tên cổ phiếu', 'Màu biểu đồ', 'Thứ trong tuần'], a: 0, e: 'Expectancy.' },
    { q: 'Lệnh dừng sát có nhược điểm:', o: ['Dễ bị quét nhiều lần', 'Không bảo vệ', 'Phải trả phí cao', 'Chỉ dùng cho mua'], a: 0, e: 'Whipsaw.' }
  ],
  match: [['Win rate', 'Tỷ lệ thắng'], ['Expectancy', 'Kỳ vọng mỗi giao dịch'], ['Tight stop', 'Dừng sát'], ['Mental stop', 'Dừng giữ trong đầu'], ['Self-reported', 'Tự công bố']]
});
