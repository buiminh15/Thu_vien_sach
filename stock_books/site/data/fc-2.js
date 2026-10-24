window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 2,
  title: 'Giá trị thời gian của tiền',
  intro: 'Một đồng hôm nay đáng giá hơn một đồng ngày mai. Chương này dạy công cụ nền tảng của cả môn tài chính: giá trị tương lai, giá trị hiện tại, dòng tiền nhiều kỳ, niên kim, lạm phát và lãi suất hiệu dụng.',
  sections: [
    { icon: '📈', title: 'Giá trị tương lai và giá trị hiện tại', blocks: [
      { t: 'key', x: 'Giá trị tương lai: <b>FV = PV × (1 + r)^t</b>. Giá trị hiện tại: <b>PV = FV / (1 + r)^t</b>. Thừa số chiết khấu <b>DF = 1/(1 + r)^t</b> cho biết hôm nay 1 USD nhận ở kỳ t đáng giá bao nhiêu.' },
      { t: 'widget', name: 'fc-fvpv', title: 'Máy tính FV/PV: lãi kép khác lãi đơn thế nào?' },
      { t: 'tip', x: 'Quy tắc 72: với lãi r% một năm, tiền gấp đôi sau khoảng 72/r năm (r = 8% → ~9 năm). Dòng tiền ở xa chiết khấu rất mạnh: 100 USD sau 30 năm ở lãi 10% chỉ đáng khoảng 5,73 USD hôm nay.' },
      { t: 'p', x: 'Tìm lãi suất hoặc số kỳ: từ <b>FV = PV(1+r)^t</b> suy ra <b>r = (FV/PV)^(1/t) − 1</b> và <b>t = ln(FV/PV)/ln(1+r)</b>.' }
    ] },
    { icon: '🧮', title: 'Nhiều dòng tiền, niên kim và vĩnh viễn', blocks: [
      { t: 'p', x: 'Giá trị hiện tại của nhiều dòng tiền bằng tổng giá trị hiện tại từng dòng (tính cộng được). Với dòng tiền đều có công thức tắt:' },
      { t: 'table', head: ['Loại', 'Công thức PV'], rows: [['Vĩnh viễn (perpetuity) C mỗi kỳ', 'PV = C / r'], ['Niên kim (annuity) C trong t kỳ', 'PV = C × [1/r − 1/(r(1+r)^t)]'], ['Vĩnh viễn tăng trưởng g', 'PV = C₁ / (r − g)'], ['FV của niên kim', 'FV = C × [((1+r)^t − 1)/r]'], ['Niên kim đầu kỳ (annuity due)', 'Nhân thêm (1 + r)']] },
      { t: 'widget', name: 'fc-annuity', title: 'Niên kim: trả góp, tiết kiệm hưu trí, khoản vay mua nhà' },
      { t: 'widget', name: 'fc-perpetuity', title: 'Vĩnh viễn và vĩnh viễn tăng trưởng' },
      { t: 'warn', x: 'Công thức niên kim giả định dòng tiền đầu tiên <b>sau một kỳ</b> (cuối kỳ). Nếu dòng tiền bắt đầu ngay (đầu kỳ) phải nhân thêm (1 + r).' }
    ] },
    { icon: '🎈', title: 'Lạm phát và lãi suất hiệu dụng', blocks: [
      { t: 'key', x: 'Lãi suất thực: <b>(1 + r thực) = (1 + r danh nghĩa)/(1 + lạm phát)</b>, xấp xỉ r thực ≈ r danh nghĩa − lạm phát. <b>Chiết khấu dòng tiền danh nghĩa bằng lãi danh nghĩa; chiết khấu dòng tiền thực bằng lãi thực. Không bao giờ trộn lẫn.</b>' },
      { t: 'widget', name: 'fc-real', title: 'Từ lãi danh nghĩa sang lãi thực' },
      { t: 'p', x: 'Lãi suất công bố theo năm (APR) thường nhân lãi theo kỳ với số kỳ trong năm mà không tính lãi kép. <b>Lãi suất hiệu dụng năm (EAR) = (1 + APR/m)^m − 1</b> với m kỳ ghép lãi mỗi năm.' },
      { t: 'widget', name: 'fc-ear', title: 'APR và EAR: ghép lãi càng thường xuyên thì sao?' }
    ] }
  ],
  summary: ['FV = PV(1+r)^t; PV = FV/(1+r)^t.', 'PV của nhiều dòng tiền là tổng PV từng dòng.', 'Vĩnh viễn: C/r; niên kim có công thức tắt; có biến thể tăng trưởng.', 'Phân biệt lãi danh nghĩa và lãi thực, không trộn lẫn.', 'EAR phản ánh lãi kép; APR thì không.'],
  cards: [['Công thức FV?', 'PV × (1+r)^t'], ['Công thức PV?', 'FV / (1+r)^t'], ['Perpetuity PV?', 'C / r'], ['Tăng trưởng vĩnh viễn PV?', 'C₁ / (r − g)'], ['Lãi thực xấp xỉ?', 'Lãi danh nghĩa − lạm phát'], ['EAR?', '(1 + APR/m)^m − 1'], ['Quy tắc 72?', 'Thời gian gấp đôi ≈ 72/r'], ['Discount factor?', '1/(1+r)^t'], ['Annuity due?', 'Dòng tiền đầu kỳ, nhân thêm (1+r)']],
  quiz: [
    { q: 'PV của 1.000 USD nhận sau 3 năm, lãi 10%:', o: ['700', '751', '909', '1.331'], a: 1, e: '1.000/1,1³ ≈ 751.' },
    { q: 'PV của vĩnh viễn 50 USD/năm với lãi 5%:', o: ['250', '1.000', '2.500', '10.000'], a: 1, e: '50/0,05.' },
    { q: 'Lãi danh nghĩa 8%, lạm phát 3%. Lãi thực chính xác ≈', o: ['5,0%', '4,85%', '11%', '3%'], a: 1, e: '1,08/1,03 − 1.' },
    { q: 'APR 12% ghép lãi hằng tháng, EAR xấp xỉ:', o: ['12,00%', '12,68%', '13,50%', '11,00%'], a: 1, e: '(1,01)^12 − 1.' },
    { q: 'Điều nào đúng?', o: ['Chiết khấu dòng tiền thực bằng lãi danh nghĩa', 'Chiết khấu dòng tiền danh nghĩa bằng lãi danh nghĩa', 'Có thể trộn tùy ý', 'Lạm phát không ảnh hưởng'], a: 1, e: 'Nhất quán danh nghĩa/thực.' }
  ],
  match: [['Perpetuity', 'Dòng tiền đều vô hạn'], ['Annuity', 'Dòng tiền đều có hạn'], ['EAR', 'Lãi hiệu dụng có lãi kép'], ['Real rate', 'Lãi đã loại trừ lạm phát'], ['Discount factor', 'Giá trị hôm nay của 1 USD tương lai']]
});
