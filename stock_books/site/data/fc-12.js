window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 12,
  title: 'Giá trị hiện tại ròng và các tiêu chí đầu tư khác',
  intro: 'Công ty nên nhận dự án nào? NPV cho câu trả lời đúng: nhận mọi dự án có NPV dương. Chương này so sánh NPV với IRR, thời gian hoàn vốn, tỷ suất lợi nhuận kế toán và xử lý các dự án loại trừ nhau, khác thời gian, thay thế thiết bị và hạn chế vốn.',
  sections: [
    { icon: '➕', title: 'Giá trị hiện tại ròng (NPV)', blocks: [
      { t: 'key', x: '<b>NPV = −Vốn đầu tư ban đầu + Σ Dòng tiền_t / (1 + r)^t</b>. NPV là phần giá trị mà dự án cộng thêm vào tài sản cổ đông. <b>Quy tắc: nhận dự án khi NPV > 0.</b>' },
      { t: 'widget', name: 'fc-npv', title: 'Máy tính NPV: nhập vốn, dòng tiền và chi phí vốn' },
      { t: 'tip', x: 'Vì sao NPV tốt: (1) đo giá trị theo tiền hôm nay; (2) cộng được (NPV của gói dự án = tổng NPV); (3) dùng đúng chi phí cơ hội của vốn.' }
    ] },
    { icon: '📐', title: 'IRR, hoàn vốn, lợi nhuận kế toán', blocks: [
      { t: 'table', head: ['Tiêu chí', 'Cách làm', 'Vấn đề'], rows: [
        ['IRR (tỷ suất hoàn vốn nội bộ)', 'Lãi suất làm NPV = 0; nhận nếu IRR > chi phí vốn', 'Sai khi dòng tiền đầu dương, đổi dấu nhiều lần (nhiều IRR), hoặc chọn giữa dự án loại trừ nhau'],
        ['Thời gian hoàn vốn', 'Nhận nếu thu hồi vốn trong thời hạn đặt ra', 'Bỏ qua dòng tiền sau hạn và không chiết khấu'],
        ['Tỷ suất lợi nhuận kế toán', 'Lợi nhuận kế toán ÷ giá trị sổ sách', 'Phụ thuộc cách kế toán phân loại chi phí, không phải dòng tiền']
      ] },
      { t: 'widget', name: 'fc-irr', title: 'IRR và NPV: dự án nào hợp lý ở chi phí vốn của bạn?' },
      { t: 'warn', x: 'Khi hai dự án loại trừ nhau, hãy so sánh NPV (không so IRR). Dự án IRR cao nhưng quy mô nhỏ có thể cộng ít giá trị hơn dự án IRR thấp nhưng quy mô lớn.' }
    ] },
    { icon: '🧩', title: 'Dự án tác động lẫn nhau', blocks: [
      { t: 'list', items: ['<b>Hoãn đầu tư:</b> so NPV hôm nay của các phương án thời điểm khác nhau.', '<b>Dự án khác vòng đời:</b> dùng chi phí tương đương hằng năm (equivalent annual cost) để so sánh.', '<b>Thay thế thiết bị:</b> thay khi chi phí tương đương hằng năm của máy cũ lớn hơn của máy mới.', '<b>Hạn chế vốn (capital rationing):</b> xếp theo chỉ số khả năng sinh lời (PI = NPV ÷ vốn đầu tư) để chọn gói NPV lớn nhất, nhưng có thể cần quy hoạch tuyến tính nếu nhiều nguồn lực bị giới hạn.'] },
      { t: 'widget', name: 'fc-eac', title: 'Chi phí tương đương hằng năm (EAC): so sánh hai máy khác tuổi thọ' }
    ] }
  ],
  summary: ['NPV dương → tăng giá trị cổ đông.', 'IRR có thể gây hiểu nhầm với dự án loại trừ nhau hoặc dòng tiền đổi dấu nhiều lần.', 'Hoàn vốn và lợi nhuận kế toán chỉ là quy tắc thô.', 'EAC và PI giúp so sánh dự án đặc biệt.'],
  cards: [['NPV?', 'PV dòng tiền − vốn đầu tư'], ['IRR?', 'Lãi suất làm NPV = 0'], ['Payback rule?', 'Hoàn vốn trong thời hạn đặt ra'], ['Book rate of return?', 'Lợi nhuận kế toán ÷ giá trị sổ sách'], ['Profitability index?', 'NPV ÷ vốn đầu tư'], ['EAC?', 'Chi phí tương đương hằng năm'], ['Capital rationing?', 'Giới hạn vốn đầu tư'], ['Mutually exclusive?', 'Chỉ chọn một trong các dự án']],
  quiz: [
    { q: 'Đầu tư 100, nhận 120 sau 1 năm, chi phí vốn 10%. NPV:', o: ['−100', '9,1', '20', '120'], a: 1, e: '120/1,1 − 100.' },
    { q: 'Điều nào đúng về NPV và IRR?', o: ['IRR luôn tốt hơn NPV', 'NPV cộng được, IRR thì không', 'Hai tiêu chí luôn giống nhau', 'NPV bỏ qua giá trị thời gian'], a: 1, e: 'Tính cộng của NPV.' },
    { q: 'Hạn chế của quy tắc hoàn vốn:', o: ['Không chiết khấu và bỏ qua dòng tiền sau hạn', 'Quá phức tạp', 'Dùng chi phí vốn', 'Không có hạn chế'], a: 0, e: 'Cả hai.' },
    { q: 'Với dự án loại trừ nhau, nên chọn:', o: ['IRR cao nhất', 'NPV cao nhất', 'Hoàn vốn nhanh nhất', 'Rẻ nhất'], a: 1, e: 'NPV.' }
  ],
  match: [['NPV', 'Giá trị cộng thêm cho cổ đông'], ['IRR', 'Lãi suất làm NPV = 0'], ['Payback', 'Thời gian thu hồi vốn'], ['PI', 'NPV chia vốn đầu tư'], ['EAC', 'Chi phí quy theo năm']]
});
