window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 13,
  title: 'Phân tích dòng tiền chiết khấu để ra quyết định đầu tư',
  intro: 'NPV chỉ đúng khi dòng tiền đầu vào đúng. Chương này là danh sách kiểm tra khi dự báo dòng tiền của dự án: chiết khấu dòng tiền chứ không phải lợi nhuận, chỉ tính dòng tiền tăng thêm, bỏ chi phí chìm, tính chi phí cơ hội và vốn lưu động.',
  sections: [
    { icon: '✅', title: 'Danh sách kiểm tra dòng tiền dự án', blocks: [
      { t: 'steps', items: ['<b>Chiết khấu dòng tiền, không phải lợi nhuận kế toán</b> (khấu hao là chi phí phi tiền mặt).', '<b>Chỉ tính dòng tiền tăng thêm:</b> khác biệt giữa có dự án và không có dự án.', '<b>Tính tác động gián tiếp:</b> dự án có thể ăn doanh số các sản phẩm khác của công ty (cannibalization) hoặc hỗ trợ chúng.', '<b>Bỏ chi phí chìm</b> (sunk cost): đã chi, không phục hồi, không ảnh hưởng quyết định hôm nay.', '<b>Tính chi phí cơ hội:</b> ví dụ miếng đất công ty sẵn có vẫn có giá trị nếu bán.', '<b>Cẩn trọng với chi phí chung phân bổ:</b> chỉ tính nếu dự án thực sự làm chi phí tăng.', '<b>Tính vốn lưu động:</b> doanh thu tăng cần thêm hàng tồn kho và phải thu; khi dự án kết thúc thì thu hồi lại.'] },
      { t: 'widget', name: 'fc-incremental', title: 'Dòng tiền tăng thêm: chi phí nào nên tính?' },
      { t: 'tip', x: 'Một cách nhớ: hỏi "nếu không làm dự án này thì dòng tiền của công ty khác gì?". Chỉ phần chênh lệch mới liên quan.' }
    ] },
    { icon: '🧱', title: 'Các nguyên tắc nhất quán', blocks: [
      { t: 'list', items: ['<b>Chiết khấu dòng tiền danh nghĩa bằng chi phí vốn danh nghĩa</b> (nhất quán với lạm phát).', '<b>Tách quyết định đầu tư khỏi quyết định tài trợ:</b> không trừ lãi vay khỏi dòng tiền dự án; chi phí tài trợ nằm trong chi phí vốn.', 'Thuế: dùng khấu hao thuế (ví dụ MACRS) cho dòng tiền, không phải khấu hao báo cáo cho cổ đông.'] },
      { t: 'widget', name: 'fc-project-cf', title: 'Dòng tiền dự án: lợi nhuận hoạt động → dòng tiền sau thuế' },
      { t: 'p', x: '<b>Dòng tiền hoạt động ≈ (Doanh thu − Chi phí) × (1 − Thuế) + Khấu hao × Thuế</b> — còn gọi là "lá chắn thuế khấu hao". Khấu hao không phải tiền chi nhưng giúp giảm thuế phải nộp.' }
    ] },
    { icon: '⛏️', title: 'Ví dụ tổng hợp: Blooper Industries', blocks: [
      { t: 'p', x: 'Sách minh họa bằng dự án khai thác đầu tư máy móc 10 triệu USD. Các bước: ước lượng doanh thu và chi phí, tính khấu hao thuế, dòng tiền vốn lưu động, giá trị thu hồi cuối kỳ, rồi chiết khấu tất cả để ra NPV. Điểm cần nhớ là ráp từng dòng một cách có hệ thống và đặt câu hỏi "có phải tăng thêm không?" cho mỗi dòng.' },
      { t: 'widget', name: 'fc-project-npv', title: 'Ráp dự án: đầu tư, dòng tiền vận hành, vốn lưu động → NPV' }
    ] }
  ],
  summary: ['Chiết khấu dòng tiền tăng thêm, không phải lợi nhuận.', 'Bỏ chi phí chìm; tính chi phí cơ hội và vốn lưu động.', 'Nhất quán danh nghĩa/thực; tách đầu tư với tài trợ.', 'Khấu hao tạo lá chắn thuế.'],
  cards: [['Incremental cash flow?', 'Chênh lệch có dự án và không có dự án'], ['Sunk cost?', 'Chi phí đã bỏ, không ảnh hưởng quyết định'], ['Opportunity cost?', 'Giá trị tài sản nếu dùng việc khác'], ['Cannibalization?', 'Dự án ăn doanh số sản phẩm khác'], ['Depreciation tax shield?', 'Khấu hao × thuế suất'], ['Working capital trong dự án?', 'Phải đầu tư thêm, rồi thu hồi cuối dự án'], ['Tách đầu tư và tài trợ nghĩa là?', 'Không trừ lãi vay trong dòng tiền dự án'], ['Overhead phân bổ?', 'Chỉ tính phần thực sự tăng']],
  quiz: [
    { q: 'Công ty đã chi 2 triệu nghiên cứu thị trường (không hoàn lại). Khi xét dự án:', o: ['Tính vào chi phí', 'Bỏ qua: chi phí chìm', 'Trừ vào NPV', 'Gấp đôi'], a: 1, e: 'Sunk cost.' },
    { q: 'Doanh thu 500, chi phí 300, khấu hao 100, thuế 40%. Dòng tiền hoạt động:', o: ['120', '160', '200', '260'], a: 1, e: '(500−300)×0,6 + 100×0,4 = 160.' },
    { q: 'Dự án làm giảm doanh số sản phẩm cũ 50/năm. Nên:', o: ['Bỏ qua', 'Trừ 50 khỏi dòng tiền tăng thêm', 'Cộng 50', 'Nhân đôi'], a: 1, e: 'Cannibalization.' },
    { q: 'Lãi vay nên được:', o: ['Trừ khỏi dòng tiền dự án', 'Tính trong chi phí vốn, không trừ vào dòng tiền', 'Bỏ hẳn', 'Cộng vào'], a: 1, e: 'Tách đầu tư–tài trợ.' }
  ],
  match: [['Sunk cost', 'Quá khứ, không đổi quyết định'], ['Incremental', 'Chênh lệch có/không dự án'], ['Tax shield', 'Giảm thuế nhờ khấu hao'], ['Working capital', 'Vốn gắn với doanh thu'], ['Opportunity cost', 'Giá trị dùng việc khác']]
});
