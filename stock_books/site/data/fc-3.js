window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 3,
  title: 'Hoạch định tài chính',
  intro: 'Kế hoạch tài chính mô tả chiến lược và dự phóng hệ quả của nó lên các báo cáo tài chính. Chương này giải thích kế hoạch dùng để làm gì, mô hình phần trăm doanh thu, và tốc độ tăng trưởng mà công ty có thể đạt mà không cần vay thêm hoặc phát hành cổ phiếu.',
  sections: [
    { icon: '🗺️', title: 'Hoạch định tài chính là gì?', blocks: [
      { t: 'p', x: 'Kế hoạch tài chính đặt mục tiêu, dự phóng bảng cân đối, báo cáo kết quả kinh doanh và nguồn–sử dụng vốn trong nhiều năm, đồng thời là chuẩn để so sánh kết quả thực tế sau này.' },
      { t: 'list', items: ['Hoạch định chiến lược thường nhìn 5 năm trở lên, tập trung vào quyết định tổng thể (đầu tư, vay nợ, tỷ lệ chia cổ tức) chứ không sa vào chi tiết từng máy móc.', 'Hoạch định không chỉ là dự báo: dự báo nói về kết cục <i>có khả năng nhất</i>, còn hoạch định phải nghĩ cả những biến cố ít xảy ra và chuẩn bị phương án phản ứng.', 'Quá trình lập kế hoạch buộc nhà quản lý xem xét tác động tổng hợp của các quyết định đầu tư và tài trợ vì chúng ảnh hưởng lẫn nhau.'] },
      { t: 'tip', x: 'Hoạch định tài chính là thử – sai: không có công thức cho "chiến lược tối ưu". Mô hình chỉ vạch ra hệ quả của chiến lược mà người dùng đặt ra, nó không tự tìm chiến lược tốt nhất.' }
    ] },
    { icon: '🧩', title: 'Mô hình phần trăm doanh thu', blocks: [
      { t: 'p', x: 'Cách đơn giản nhất: giả định nhiều khoản mục (chi phí, tài sản lưu động, tài sản cố định, nợ phải trả thương mại) tỷ lệ thuận với doanh thu. Khi dự phóng doanh thu tăng, mỗi khoản mục tăng cùng tỷ lệ; lợi nhuận giữ lại cộng vào vốn chủ sở hữu. Phần chênh lệch giữa tài sản và nguồn vốn đã có là <b>nhu cầu tài trợ bên ngoài (EFN)</b>, hay "khoản cân đối".' },
      { t: 'steps', items: ['Dự phóng doanh thu năm tới.', 'Tính các khoản mục theo % doanh thu.', 'Tính lợi nhuận ròng; trừ cổ tức để ra lợi nhuận giữ lại.', 'Cộng vốn chủ sở hữu mới; so tổng tài sản với tổng nguồn vốn.', 'Phần thiếu hụt là nhu cầu vay nợ hoặc phát hành cổ phiếu.'] },
      { t: 'widget', name: 'fc-efn', title: 'Nhu cầu tài trợ bên ngoài (EFN) theo mô hình phần trăm doanh thu' },
      { t: 'warn', x: 'Người lập kế hoạch cần cảnh giác: các tỷ lệ cố định chỉ đúng gần mức doanh thu hiện tại. Chi phí cố định, công suất dư và đơn hàng lớn làm các tỷ lệ này lệch. Mô hình cũng dễ tạo ảo giác chính xác trong khi giả định bên dưới rất yếu.' }
    ] },
    { icon: '🚀', title: 'Tăng trưởng và tài trợ bên ngoài', blocks: [
      { t: 'key', x: '<b>Tốc độ tăng trưởng nội bộ</b> = ROA × b / (1 − ROA × b): mức tăng trưởng tối đa nếu chỉ dùng lợi nhuận giữ lại (không vay hay phát hành thêm). <b>Tốc độ tăng trưởng bền vững</b> = ROE × b / (1 − ROE × b): tốc độ tối đa khi giữ nguyên tỷ lệ nợ trên vốn. b là tỷ lệ lợi nhuận giữ lại (plowback).' },
      { t: 'widget', name: 'fc-growth', title: 'Tăng trưởng nội bộ và bền vững' },
      { t: 'p', x: 'Càng tăng trưởng nhanh càng cần nhiều tài sản mới và vốn lưu động, nên nhu cầu tài trợ bên ngoài tăng theo. Công ty có thể tăng tốc bằng cách giữ lại nhiều lợi nhuận hơn, vay nhiều hơn, tăng hiệu quả sử dụng tài sản hoặc nâng biên lợi nhuận.' }
    ] }
  ],
  summary: ['Kế hoạch tài chính nêu chiến lược và dự phóng báo cáo tài chính; quá trình lập cũng quan trọng như kết quả.', 'Hoạch định rộng hơn dự báo: phải nghĩ đến biến cố bất lợi.', 'Mô hình phần trăm doanh thu cho ra EFN.', 'Tăng trưởng nội bộ không cần tài trợ ngoài; bền vững giữ nguyên đòn bẩy.', 'Tăng trưởng nhanh đòi hỏi nhiều vốn hơn.'],
  cards: [['Pro forma?', 'Báo cáo tài chính dự phóng'], ['EFN?', 'Nhu cầu tài trợ bên ngoài'], ['Internal growth rate?', 'ROA×b / (1 − ROA×b)'], ['Sustainable growth rate?', 'ROE×b / (1 − ROE×b)'], ['b là gì?', 'Tỷ lệ lợi nhuận giữ lại'], ['Hoạch định khác dự báo?', 'Bao gồm cả biến cố ít xảy ra'], ['Planning horizon chiến lược?', 'Thường 5 năm trở lên'], ['Mô hình % doanh thu giả định gì?', 'Nhiều khoản mục tỷ lệ thuận với doanh thu']],
  quiz: [
    { q: 'ROE 15%, giữ lại 60% lợi nhuận. Tăng trưởng bền vững:', o: ['9%', '9,9%', '10%', '15%'], a: 1, e: '0,09/(1−0,09) = 9,89%.' },
    { q: 'Tài sản dự phóng 600, nợ+vốn sẵn có 540. EFN:', o: ['0', '60', '540', '600'], a: 1, e: 'Chênh lệch.' },
    { q: 'Kế hoạch tài chính tốt thì:', o: ['Chỉ dự báo kịch bản có khả năng nhất', 'Chuẩn bị cho cả biến cố bất lợi', 'Bỏ qua cổ tức', 'Không cần cập nhật'], a: 1, e: 'Hoạch định ≠ dự báo.' },
    { q: 'Tăng trưởng nội bộ là mức tối đa khi:', o: ['Vay thêm nợ', 'Phát hành cổ phiếu', 'Chỉ dùng lợi nhuận giữ lại', 'Cắt thuế'], a: 2, e: 'Không cần tài trợ ngoài.' }
  ],
  match: [['Pro forma', 'Báo cáo dự phóng'], ['EFN', 'Thiếu hụt cần tài trợ'], ['Plowback', 'Tỷ lệ giữ lại lợi nhuận'], ['Sustainable growth', 'Giữ nguyên đòn bẩy'], ['Strategic planning', 'Tầm nhìn 5 năm trở lên']]
});
