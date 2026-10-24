window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 8,
  title: 'Tất cả hội tụ: Zacks Rank',
  intro: 'Nếu không muốn tự theo dõi điều chỉnh ước tính và bất ngờ lợi nhuận, Zacks Rank gói gọn chúng thành một con số từ 1 đến 5. Chương này giải thích bốn yếu tố cấu thành, kết quả mà tác giả công bố và hai ví dụ: WorldCom và Ryland Homes.',
  sections: [
    { icon: '🏷️', title: 'Zacks Rank là gì?', blocks: [
      { t: 'p', x: 'Đây là mô hình định lượng độc quyền, cập nhật hằng đêm cho khoảng 4.300 cổ phiếu, tổng hợp từ hàng chục nghìn báo cáo của hàng nghìn nhà phân tích. Tác giả không công bố công thức chính xác nhưng nêu bốn yếu tố:' },
      { t: 'table', head: ['Yếu tố', 'Ý nghĩa'], rows: [['Agreement (đồng thuận hướng)', 'Bao nhiêu nhà phân tích cùng điều chỉnh ước tính theo một hướng'], ['Magnitude (độ lớn)', 'Mức thay đổi của đồng thuận cho năm hiện tại và năm sau (nâng 6% mạnh hơn nâng 2%)'], ['Upside (tiềm năng vượt)', 'Chênh lệch giữa ước tính của nhà phân tích chính xác nhất và đồng thuận'], ['Surprise (bất ngờ)', 'Công ty gần đây có hay vượt kỳ vọng không']] },
      { t: 'widget', name: 'zm-rank-lab', title: 'Phòng thí nghiệm Zacks Rank đơn giản: bốn yếu tố → điểm tổng hợp' },
      { t: 'key', x: 'Thang điểm: <b>#1 Strong Buy, #2 Buy, #3 Hold, #4 Sell, #5 Strong Sell</b>. Khác khuyến nghị Phố Wall, mỗi hạng có số lượng cổ phiếu cân đối: số cổ phiếu #1 bằng số cổ phiếu #5, nên mô hình không thiên lệch tích cực.' }
    ] },
    { icon: '📈', title: 'Kết quả theo công bố của tác giả', blocks: [
      { t: 'list', items: ['Danh mục cân bằng gồm cổ phiếu #1, tái cân bằng hàng tháng: khoảng 32%/năm trước phí giao dịch trong 20 năm.', 'Cổ phiếu #1 tạo bất ngờ dương nhiều hơn trung bình; cổ phiếu #5 tạo bất ngờ âm nhiều hơn.', 'Hạng #1 có xu hướng vượt trội trong 1–3 tháng; #5 kém hơn.'] },
      { t: 'warn', x: 'Đây là số liệu quá khứ do chính nhà phát triển mô hình công bố, chưa tính phí giao dịch (rất đáng kể với tái cân bằng hàng tháng). Kết quả thực tế sẽ thấp hơn và có thể khác.' },
      { t: 'widget', name: 'zm-compound', title: 'Lợi suất gộp: tác động của phí giao dịch lên chiến lược vòng quay cao' }
    ] },
    { icon: '🔍', title: 'Hai ví dụ trong sách', blocks: [
      { t: 'h3', x: 'WorldCom (WCOM): tránh được tổn thất' },
      { t: 'p', x: 'Tháng 6/2000, mọi nhà phân tích tại 23 công ty môi giới đều khuyến nghị WorldCom là "mua" hoặc "mua mạnh", trong khi Zacks Rank đã ở mức bán (giá 45,88 USD). Khuyến nghị bán đầu tiên của một công ty môi giới chỉ xuất hiện tuần kết thúc 12/4/2002, khi giá chỉ còn 5,01 USD.' },
      { t: 'h3', x: 'Ryland Homes (RYL): chọn được người thắng' },
      { t: 'p', x: 'Đầu tháng 9/2000, Ryland giao dịch ở 12,06 USD (điều chỉnh chia tách). Zacks Rank là "Strong Buy" nhưng chưa nhà phân tích nào trong bốn người khuyến nghị "strong buy". Hai năm sau cổ phiếu lên khoảng 44 USD (+265%).' },
      { t: 'widget', name: 'zm-wcom', title: 'WorldCom: giá và khuyến nghị — mua theo Wall Street hay Zacks Rank?' },
      { t: 'tip', x: 'Hai ví dụ được chọn để minh họa; tác giả thừa nhận không phải cổ phiếu nào cũng làm được như vậy.' }
    ] }
  ],
  summary: ['Zacks Rank gói gọn điều chỉnh ước tính và bất ngờ thành một hạng 1–5.', 'Bốn yếu tố: Agreement, Magnitude, Upside, Surprise.', 'Không thiên lệch: số cổ phiếu hạng 1 bằng hạng 5.', 'Kết quả công bố rất cao nhưng chưa tính phí giao dịch.'],
  cards: [['Bốn yếu tố của Zacks Rank?', 'Agreement, Magnitude, Upside, Surprise'], ['#1?', 'Strong Buy'], ['#5?', 'Strong Sell'], ['Hạng cân bằng nghĩa là?', 'Số cổ phiếu hạng 1 = hạng 5'], ['Cập nhật?', 'Hằng đêm cho ~4.300 cổ phiếu'], ['Vì sao hữu ích?', 'Dự đoán điều chỉnh ước tính và bất ngờ'], ['WorldCom 2000?', 'Zacks Rank bán khi mọi analyst khuyến nghị mua'], ['Ryland 2000–2002?', '+265% với Zacks Rank Strong Buy']],
  quiz: [
    { q: 'Zacks Rank hạng nào là bán mạnh?', o: ['#1', '#3', '#5', 'Không có'], a: 2, e: 'Strong Sell.' },
    { q: 'Yếu tố nào KHÔNG thuộc bốn yếu tố?', o: ['Agreement', 'Magnitude', 'Dividend yield', 'Surprise'], a: 2, e: 'Cổ tức không có trong bốn.' },
    { q: 'Điểm đáng ngờ khi đọc kết quả 32%/năm:', o: ['Chưa tính phí giao dịch', 'Quá thấp', 'Dữ liệu tương lai', 'Do nhà đầu tư cá nhân tạo'], a: 0, e: 'Gross of costs.' },
    { q: 'Với WorldCom, khuyến nghị bán đầu tiên của môi giới xuất hiện khi giá còn:', o: ['45,88', '5,01', '12,06', '100'], a: 1, e: 'Rất muộn.' }
  ],
  match: [['Agreement', 'Cùng hướng điều chỉnh'], ['Magnitude', 'Độ lớn thay đổi'], ['Upside', 'Ước tính chính xác nhất so với đồng thuận'], ['Surprise', 'Lịch sử vượt kỳ vọng'], ['Zacks #1', 'Strong Buy']]
});
