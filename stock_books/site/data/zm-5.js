window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 5,
  title: 'Dùng ước tính lợi nhuận để chọn cổ phiếu',
  intro: 'Chương này biến lý thuyết thành quy trình: tìm đúng dữ liệu (đồng thuận ước tính năm tài chính hiện tại), chỉ mua công ty được dự báo có lãi, đo mức thay đổi trong 30 ngày, đọc biểu đồ phân bố ước tính, và dùng ước tính để quản lý danh mục.',
  sections: [
    { icon: '🗂️', title: 'Bước 1: Tìm đúng dữ liệu', blocks: [
      { t: 'p', x: 'Các trang miễn phí hiển thị đồng thuận cho quý này, quý sau, năm này, năm sau, kèm giá trị 7, 30, 60, 90 ngày trước. Ví dụ Blockbuster: năm này 1,30 USD hiện tại so với 1,27 cách 30 ngày và 1,16 cách 60 ngày — đang được nâng.' },
      { t: 'key', x: 'Nghiên cứu của tác giả cho thấy <b>thay đổi của đồng thuận cho năm tài chính hiện tại</b> có giá trị nhất, vì lợi nhuận của năm hiện tại dễ dự đoán hơn năm sau và ảnh hưởng giá nhiều hơn; ước tính quý có thể bị nhiễu do mùa vụ.' },
      { t: 'widget', name: 'zm-trend', title: 'Bảng xu hướng ước tính: 7, 30, 60, 90 ngày' }
    ] },
    { icon: '💰', title: 'Bước 2–4: Lọc và đo', blocks: [
      { t: 'steps', items: ['<b>Chỉ mua công ty được dự báo có lãi</b> cho cả năm hiện tại và năm sau. Đừng tin câu chuyện lợi nhuận 3 năm nữa. Danh mục "không lãi" trong mẫu 1987–2002 kém hơn rõ rệt nhất là giai đoạn 2000–2002.', '<b>Đo mức nâng ước tính 30 ngày:</b> tìm cổ phiếu có đồng thuận năm hiện tại tăng hơn khoảng <b>3%</b> trong 30 ngày; mức tăng càng lớn, tín hiệu mua càng mạnh.', '<b>Xem biểu đồ phân bố ước tính (histogram):</b> ước tính gần đây nhất của từng nhà phân tích (dấu O) nằm bên phải đồng thuận (dấu X) → các nhà phân tích đang nâng, tín hiệu mạnh.', '<b>Xem nguyên nhân nâng:</b> ưu tiên tăng trưởng doanh thu hữu cơ, tránh nâng do thay đổi kế toán.'] },
      { t: 'widget', name: 'zm-signal', title: 'Tín hiệu mua: % thay đổi đồng thuận 30 ngày' },
      { t: 'widget', name: 'zm-histogram', title: 'Phân bố ước tính: ước tính mới nằm trên hay dưới đồng thuận?' },
      { t: 'tip', x: 'Công thức: % thay đổi = (đồng thuận hiện tại − đồng thuận 30 ngày trước) / |đồng thuận 30 ngày trước|. Nếu mẫu số âm, dùng giá trị tuyệt đối.' }
    ] },
    { icon: '🧰', title: 'Quản lý danh mục bằng điều chỉnh ước tính', blocks: [
      { t: 'p', x: 'Có thể dùng điều chỉnh ước tính chỉ để chọn cổ phiếu mua, hoặc để quản lý toàn bộ danh mục. Khi tập trung vào ước tính, danh mục sẽ tự động nghiêng về ngành và phong cách (giá trị/tăng trưởng) nào đang có nhiều lần nâng nhất.' },
      { t: 'list', items: ['Nếu cổ phiếu bạn đang giữ bị hạ đồng thuận → bán.', 'Danh mục nhóm 3 (đồng thuận tăng trong tháng) vượt S&P 500 trong 13 trên 15 năm (1988–2002 theo bảng của tác giả).', 'Không phải tháng nào cũng thắng: cần kỷ luật, không bỏ cuộc vì một tháng kém.'] },
      { t: 'warn', x: 'Điểm yếu: trong các đợt bán tháo hoảng loạn (như 1987, 1998), cổ phiếu được nâng ước tính thường giảm nặng hơn thị trường vì nhà đầu tư tổ chức bán theo tâm lý, không theo ước tính. Trong 10 tháng tệ nhất của S&P 500, danh mục này trung bình −12,5% so với −10,4%.' },
      { t: 'widget', name: 'zm-checklist5', title: 'Danh sách kiểm tra trước khi mua theo ước tính' }
    ] }
  ],
  summary: ['Theo dõi đồng thuận năm tài chính hiện tại.', 'Chỉ mua công ty được dự báo có lãi.', 'Tín hiệu mua: tăng hơn ~3% trong 30 ngày; xem phân bố ước tính.', 'Ưu tiên nâng do doanh thu, tránh nâng do kế toán.', 'Chiến lược có thể kém hơn trong đợt bán tháo hoảng loạn.'],
  cards: [['Dữ liệu quan trọng nhất?', 'Đồng thuận năm tài chính hiện tại'], ['Ngưỡng mua?', 'Tăng hơn ~3% trong 30 ngày'], ['Quy tắc lợi nhuận?', 'Chỉ mua nếu EPS dự báo dương năm này và năm sau'], ['Histogram O và X?', 'O ở bên phải X = ước tính mới cao hơn đồng thuận'], ['Nguyên nhân nâng tốt nhất?', 'Doanh thu hữu cơ'], ['Nguyên nhân nâng bỏ qua?', 'Thay đổi kế toán'], ['Nhược điểm?', 'Giảm mạnh hơn trong hoảng loạn'], ['Khi đồng thuận giảm?', 'Bán']],
  quiz: [
    { q: 'Đồng thuận 30 ngày trước 2,00; nay 2,10. % thay đổi:', o: ['0,1%', '5%', '10%', '2,1%'], a: 1, e: '0,10/2,00.' },
    { q: 'Công ty dự báo lỗ năm nay nên:', o: ['Mua mạnh', 'Tránh', 'Mua gấp đôi', 'Không ảnh hưởng'], a: 1, e: 'Chỉ mua công ty có lãi.' },
    { q: 'Ước tính mới (O) nằm bên phải đồng thuận (X) nghĩa là:', o: ['Nhà phân tích đang hạ', 'Nhà phân tích đang nâng', 'Không đổi', 'Hết dữ liệu'], a: 1, e: 'Cao hơn đồng thuận.' },
    { q: 'Điểm yếu của chiến lược:', o: ['Kém hơn trong hoảng loạn', 'Không có dữ liệu', 'Cần hầm vàng', 'Phí thấp'], a: 0, e: 'Sell-off.' }
  ],
  match: [['Current fiscal year', 'Dữ liệu quan trọng nhất'], ['30-day change', 'Thước đo tín hiệu'], ['Histogram', 'Phân bố ước tính'], ['Organic growth', 'Tăng trưởng doanh thu thực'], ['Accounting change', 'Nguyên nhân cần bỏ qua']]
});
