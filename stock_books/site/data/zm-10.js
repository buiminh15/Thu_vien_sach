window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 10,
  title: 'Dùng khuyến nghị của nhà phân tích đúng cách',
  intro: 'Khuyến nghị mua/bán không vô dụng nếu bạn đọc nó "ngược cách". Chương này giới thiệu điểm khuyến nghị đồng thuận (giống điểm trung bình học bạ), chỉ ra vì sao mua cổ phiếu được khuyến nghị nhiều nhất trong thị trường gấu là thảm họa, và chiến lược "ăn theo" (piggybacking) dựa trên thay đổi khuyến nghị.',
  sections: [
    { icon: '🎓', title: 'Điểm khuyến nghị đồng thuận', blocks: [
      { t: 'p', x: 'Hãy tưởng tượng một trường đại học lạm phát điểm, ai cũng B+. Để chọn sinh viên chăm chỉ, bạn nhìn <b>điểm trung bình (GPA)</b>: cao thấp tương đối vẫn có nghĩa dù cả trường bị lạm phát. Zacks làm tương tự: quy đổi khuyến nghị của mọi công ty môi giới về thang 1–5 rồi lấy trung bình.' },
      { t: 'key', x: 'Điểm khuyến nghị đồng thuận = Σ (số khuyến nghị × điểm) / tổng số nhà phân tích. Ví dụ: 6 strong buy (1), 3 buy (2), 10 hold (3) → (6×1 + 3×2 + 10×3)/19 = 42/19 ≈ <b>2,21</b>. Điểm càng thấp càng tích cực.' },
      { t: 'widget', name: 'zm-consensus-score', title: 'Tính điểm khuyến nghị đồng thuận' }
    ] },
    { icon: '📉', title: 'Vì sao cổ phiếu được khuyến nghị nhiều nhất làm tệ?', blocks: [
      { t: 'list', items: ['Mua cổ phiếu có điểm đồng thuận tốt nhất có hiệu quả khi thị trường tăng.', 'Khi thị trường giảm, nhóm này lại giảm rất nặng: trong thị trường gấu vừa qua, nhóm được khuyến nghị cao nhất giảm khoảng <b>47%</b>.', 'Lý do: các cổ phiếu được yêu thích đã bị định giá cao, nhà phân tích thường bám vào khuyến nghị cũ, không hạ kịp.'] },
      { t: 'warn', x: 'Dùng khuyến nghị theo cách thông thường (mua cái được khuyến nghị nhiều nhất) có thể chỉ giúp các tổ chức lớn bán cổ phiếu cho bạn.' }
    ] },
    { icon: '🐷', title: 'Piggybacking: bám theo thay đổi', blocks: [
      { t: 'p', x: 'Thay vì xem <i>mức</i> khuyến nghị, hãy xem <b>thay đổi</b> của điểm đồng thuận trong tháng. Mua cổ phiếu mà các nhà phân tích vừa nâng khuyến nghị; bán cổ phiếu vừa bị hạ.' },
      { t: 'table', head: ['Giai đoạn', 'Nhóm bị hạ nhiều nhất', 'Toàn bộ mẫu', 'Nhóm được nâng nhiều nhất'], rows: [['Apr 1992 – Mar 2000 (tăng)', '7,0%', '17,2%', '24,9%'], ['Apr–Sep 2002 (gấu)', '−24,5%', '−15,5%', '−8,0%']] },
      { t: 'p', x: 'Cả giai đoạn 10,5 năm (Apr 1992 – Sep 2002): nhóm được nâng nhiều nhất +16,1%/năm, nhóm bị hạ nhiều nhất −1,5%/năm.' },
      { t: 'widget', name: 'zm-piggyback', title: 'Chênh lệch lợi suất nhóm được nâng so với bị hạ' },
      { t: 'key', x: 'Ba điều cần nhớ: (1) vòng quay cực cao — gần 9 lần/năm nếu tái cân bằng toàn bộ; (2) cổ phiếu được nâng nhiều thường ban đầu ít được yêu thích, cổ phiếu bị hạ thường được yêu thích; (3) kết quả chưa tính phí và tác động thị trường.' },
      { t: 'tip', x: 'Vì vòng quay cao, chỉ dùng piggybacking để chọn vài cổ phiếu trong ngắn hạn, không dùng làm chiến lược toàn bộ danh mục.' }
    ] }
  ],
  summary: ['Điểm khuyến nghị đồng thuận điều chỉnh thiên lệch như điểm trung bình.', 'Cổ phiếu được khuyến nghị nhiều nhất thất bại nặng trong thị trường gấu.', 'Thay đổi khuyến nghị có thông tin hơn mức khuyến nghị.', 'Piggybacking có vòng quay rất cao, chỉ dùng cho vài cổ phiếu.'],
  cards: [['Consensus recommendation score?', 'Điểm trung bình các khuyến nghị quy về thang 1–5'], ['Điểm thấp nghĩa là?', 'Khuyến nghị tích cực hơn'], ['Piggybacking?', 'Mua cổ phiếu vừa được nâng khuyến nghị'], ['Cổ phiếu được khuyến nghị cao nhất trong gấu?', 'Giảm ~47%'], ['Nhóm được nâng nhiều nhất 1992–2002?', '+16,1%/năm'], ['Nhóm bị hạ nhiều nhất?', '−1,5%/năm'], ['Rủi ro piggybacking?', 'Vòng quay rất cao'], ['GPA ví von gì?', 'Điểm đồng thuận khử lạm phát khuyến nghị']],
  quiz: [
    { q: 'Có 4 strong buy (1) và 6 hold (3). Điểm đồng thuận:', o: ['1,8', '2,2', '2,6', '3,0'], a: 1, e: '(4+18)/10 = 2,2.' },
    { q: 'Điểm đồng thuận thấp (gần 1) là:', o: ['Rất tiêu cực', 'Rất tích cực', 'Trung tính', 'Không có nghĩa'], a: 1, e: 'Thang 1 = strong buy.' },
    { q: 'Vì sao piggybacking cần cẩn trọng?', o: ['Vòng quay cực cao', 'Không có dữ liệu', 'Luôn thua', 'Cấm'], a: 0, e: 'Phí.' },
    { q: 'Trong thị trường gấu, cổ phiếu được khuyến nghị nhiều nhất:', o: ['Giảm rất nặng', 'Tăng', 'Đứng yên', 'Không ai biết'], a: 0, e: 'Khoảng −47%.' }
  ],
  match: [['Consensus score', 'Điểm trung bình khuyến nghị'], ['Upgrade', 'Nâng khuyến nghị'], ['Downgrade', 'Hạ khuyến nghị'], ['Piggyback', 'Ăn theo thay đổi'], ['Hold', 'Thường nghĩa là bán']]
});
