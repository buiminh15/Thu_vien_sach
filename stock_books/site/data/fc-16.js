window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 16,
  title: 'Phân tích dự án',
  intro: 'Dự báo dòng tiền luôn sai ở mức nào đó. Chương này dạy cách thử "nếu... thì sao?": phân tích độ nhạy, kịch bản, mô phỏng, phân tích hòa vốn, và nhìn vào tính linh hoạt (quyền chọn) trong dự án.',
  sections: [
    { icon: '🏗️', title: 'Quy trình đầu tư trong công ty lớn', blocks: [
      { t: 'p', x: 'Công ty lớn có hai bước: lập <b>ngân sách vốn</b> (danh sách đầu tư dự kiến) và <b>phê duyệt từng dự án</b>. Quá trình mang tính hợp tác giữa nhiều cấp, và không nên máy móc.' },
      { t: 'key', x: 'Luôn hỏi: <b>vì sao dự án này có NPV dương?</b> NPV dương bền chỉ khi công ty có lợi thế cạnh tranh ngăn đối thủ chiếm phần lãi. Nếu không giải thích được nguồn lợi thế, hãy nghi ngờ dự báo.' }
    ] },
    { icon: '🎛️', title: 'Công cụ "nếu... thì sao?"', blocks: [
      { t: 'table', head: ['Công cụ', 'Cách làm'], rows: [
        ['Phân tích độ nhạy', 'Đổi từng biến (giá, sản lượng, chi phí) một lần, xem NPV thay đổi thế nào'],
        ['Phân tích kịch bản', 'Đổi cùng lúc nhiều biến theo bối cảnh (xấu, trung bình, tốt)'],
        ['Mô phỏng Monte Carlo', 'Máy tính sinh hàng nghìn tổ hợp biến ngẫu nhiên'],
        ['Phân tích hòa vốn', 'Tìm mức doanh thu/sản lượng để dự án vừa đủ không lỗ']
      ] },
      { t: 'widget', name: 'fc-sensitivity', title: 'Độ nhạy NPV: biến nào quan trọng nhất?' },
      { t: 'tip', x: 'Độ nhạy cho thấy biến nào đáng bỏ công nghiên cứu thêm: nếu NPV rất nhạy với giá bán nhưng ít nhạy với chi phí nhân công, hãy tập trung dự báo giá.' }
    ] },
    { icon: '⚖️', title: 'Hòa vốn và đòn bẩy hoạt động', blocks: [
      { t: 'key', x: 'Hòa vốn kế toán: <b>Q = Chi phí cố định ÷ (Giá − Biến phí/đơn vị)</b>. Tốt hơn là hòa vốn NPV: mức doanh số để dự án vừa đủ bù chi phí cơ hội của vốn (NPV = 0). <b>Đòn bẩy hoạt động</b> (chi phí cố định cao) khiến lợi nhuận nhạy hơn với doanh thu — ước tính doanh thu quá cao nguy hiểm hơn.' },
      { t: 'widget', name: 'fc-breakeven', title: 'Hòa vốn kế toán và độ lớn đòn bẩy hoạt động' },
      { t: 'p', x: 'Tính linh hoạt có giá trị: dự án cho phép mở rộng, hoãn, hoặc bỏ giữa chừng khi tình hình xấu có giá trị cao hơn NPV tĩnh. Đó là <b>quyền chọn thực</b> (real options).' }
    ] }
  ],
  summary: ['Luôn hỏi vì sao dự án có NPV dương.', 'Độ nhạy, kịch bản, mô phỏng, hòa vốn: các cách thử dự báo.', 'Đòn bẩy hoạt động làm lợi nhuận nhạy với doanh thu.', 'Tính linh hoạt có giá trị (quyền chọn thực).'],
  cards: [['Sensitivity analysis?', 'Đổi từng biến một'], ['Scenario analysis?', 'Đổi nhiều biến theo kịch bản'], ['Simulation?', 'Sinh nhiều tổ hợp ngẫu nhiên'], ['Break-even?', 'Điểm doanh số không lỗ'], ['NPV break-even?', 'Doanh số để NPV = 0'], ['Operating leverage?', 'Chi phí cố định cao'], ['Real option?', 'Quyền mở rộng, hoãn, hủy dự án'], ['Capital budget?', 'Danh sách đầu tư dự kiến']],
  quiz: [
    { q: 'Chi phí cố định 100.000, giá 50, biến phí 30. Hòa vốn:', o: ['2.000', '5.000', '3.333', '10.000'], a: 1, e: '100.000/20.' },
    { q: 'Đòn bẩy hoạt động cao thì ước tính doanh thu quá lạc quan:', o: ['Ít nguy hiểm', 'Nguy hiểm hơn', 'Không liên quan', 'Giúp hòa vốn'], a: 1, e: 'Lợi nhuận nhạy hơn.' },
    { q: 'Công cụ đổi nhiều biến cùng lúc theo bối cảnh:', o: ['Độ nhạy', 'Kịch bản', 'Hoàn vốn', 'EOQ'], a: 1, e: 'Scenario.' },
    { q: 'Câu hỏi quan trọng nhất khi duyệt dự án:', o: ['Vì sao dự án có NPV dương?', 'Dự án đẹp không?', 'Ai đề xuất?', 'Màu logo?'], a: 0, e: 'Lợi thế cạnh tranh.' }
  ],
  match: [['Sensitivity', 'Đổi một biến'], ['Scenario', 'Đổi nhiều biến'], ['Simulation', 'Nhiều tổ hợp ngẫu nhiên'], ['Break-even', 'Điểm không lỗ'], ['Real option', 'Linh hoạt trong dự án']]
});
