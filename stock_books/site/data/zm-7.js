window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 7,
  title: 'Dùng bất ngờ lợi nhuận trong quy trình đầu tư',
  intro: 'Có hai cách khai thác bất ngờ lợi nhuận: phản ứng sau khi công bố hoặc dự đoán trước. Chương này đưa ra danh sách kiểm tra ba bước cho cách thứ nhất, và bốn phương pháp cùng "hiệu ứng con gián" cho cách thứ hai.',
  sections: [
    { icon: '✅', title: 'Phản ứng với bất ngờ: bước 1 – xác định đúng mức bất ngờ', blocks: [
      { t: 'p', x: 'Đối chiếu EPS công bố với biểu đồ phân bố ước tính (Chương 5). Một bất ngờ dương "thật" cần vượt cả <b>đồng thuận</b> lẫn <b>các ước tính gần đây nhất</b> (dấu O). Ví dụ Goodyear: đồng thuận 0,12 USD, các ước tính mới nhất quanh 0,06. Nếu công bố 0,08 USD thì âm so với đồng thuận nhưng dương so với ước tính mới nhất — cổ phiếu ít bị bán tháo.' },
      { t: 'steps', items: ['EPS có tốt hơn đồng thuận quý?', 'EPS có tốt hơn các ước tính gần nhất?', 'Có khoản bất thường làm đẹp lợi nhuận không? (phải trả lời KHÔNG)', 'Công ty có cảnh báo cho các quý tới không? (KHÔNG)', 'Công ty có cảnh báo trước khi công bố không? (KHÔNG)', 'Thị trường đã kỳ vọng bất ngờ này chưa? (KHÔNG)'] },
      { t: 'widget', name: 'zm-surprise-check', title: 'Danh sách 6 câu hỏi: đây có phải bất ngờ "sạch"?' },
      { t: 'tip', x: 'Câu 6 khó xác định; dùng phản ứng ngay của thị trường làm lối tắt. Nếu câu 1–2 là có, 3–5 là không mà giá vẫn giảm, có thể tin xấu đã được định giá trước. Thường nên mua <b>khi giá yếu đi một chút</b> sau đợt tăng ban đầu, đừng cố là người đầu tiên.' }
    ] },
    { icon: '🔬', title: 'Bước 2–3: chất lượng và doanh thu', blocks: [
      { t: 'p', x: 'Hãy xem bất ngờ về <b>doanh thu</b> (Sales Surprise) cùng bất ngờ lợi nhuận. Lợi nhuận vượt nhờ doanh thu cao hơn dự kiến đáng tin hơn lợi nhuận vượt nhờ cắt chi phí hoặc khoản một lần. Ưu tiên công ty có cả hai.' },
      { t: 'key', x: 'Sau khi công bố bất ngờ dương, giá thường tiếp tục tăng trong khoảng ba tháng — hiện tượng <b>post-earnings announcement drift</b>. Mạnh nhất ở công ty vượt cả các ước tính gần nhất, có bất ngờ doanh thu dương, không có khoản bất thường, không cảnh báo giảm.' },
      { t: 'widget', name: 'zm-drift', title: 'Post-earnings drift: ví dụ giá sau công bố' }
    ] },
    { icon: '🪳', title: 'Dự đoán bất ngờ: hiệu ứng con gián', blocks: [
      { t: 'p', x: 'Công ty đã báo bất ngờ dương trước đó có xu hướng tiếp tục báo bất ngờ dương ("khi thấy một con gián, còn nhiều con khác"); tương tự cho bất ngờ âm. Bốn phương pháp dự đoán:' },
      { t: 'steps', items: ['Xem các ước tính của <b>nhà phân tích chính xác nhất</b> so với đồng thuận.', 'Xem ước tính <b>gần nhất</b> so với đồng thuận.', 'Xem biến động giá trước ngày công bố (tác giả không khuyên vì quá nhiều nhiễu).', '<b>Đồng thuận trong điều chỉnh:</b> nếu hầu hết nhà phân tích cùng nâng ước tính trước ngày công bố, dù chỉ 1 xu, đó là dấu hiệu mạnh nhất cho bất ngờ dương (và ngược lại).'] },
      { t: 'tip', x: 'Thời điểm áp dụng: trong tháng sau khi kết thúc quý tài chính (với công ty năm tài chính theo năm dương lịch là tháng 1, 4, 7, 10) vì đa số công ty công bố vào lúc này.' },
      { t: 'warn', x: 'Dự đoán bất ngờ rủi ro hơn phản ứng sau công bố. Nếu bạn ngại rủi ro, hãy chỉ phản ứng; nếu chấp nhận rủi ro cao hơn để đổi lấy lợi suất, hãy thử dự đoán. Nếu thấy nhiều nhà phân tích cắt ước tính ngay trước ngày công bố cổ phiếu bạn đang giữ, hãy cảnh giác.' }
    ] }
  ],
  summary: ['Bất ngờ "sạch" vượt đồng thuận và ước tính gần nhất, không có khoản bất thường hay cảnh báo.', 'Ưu tiên bất ngờ cả lợi nhuận và doanh thu.', 'Post-earnings drift kéo dài khoảng ba tháng.', 'Hiệu ứng con gián giúp dự đoán bất ngờ.', 'Đồng thuận điều chỉnh trước công bố là tín hiệu dự đoán mạnh nhất.'],
  cards: [['Post-earnings drift?', 'Giá tiếp tục đi theo hướng bất ngờ trong vài tháng'], ['Cockroach effect?', 'Bất ngờ có xu hướng lặp lại'], ['Sales surprise?', 'Bất ngờ về doanh thu'], ['Bất ngờ sạch cần gì?', 'Vượt đồng thuận và ước tính mới nhất; không bất thường/cảnh báo'], ['Tín hiệu dự đoán mạnh nhất?', 'Nhiều nhà phân tích cùng điều chỉnh trước công bố'], ['Khi nào áp dụng dự đoán?', 'Tháng sau khi kết thúc quý'], ['Nên mua khi nào sau công bố?', 'Khi giá yếu đi một chút'], ['Phương pháp tác giả không khuyên?', 'Dựa vào biến động giá trước công bố']],
  quiz: [
    { q: 'Đồng thuận 0,12; ước tính mới nhất 0,06; EPS thực 0,08. Đây là:', o: ['Âm so với đồng thuận, dương so với ước tính mới', 'Âm hoàn toàn', 'Dương hoàn toàn', 'Hòa'], a: 0, e: 'Như ví dụ Goodyear.' },
    { q: 'Cockroach effect nghĩa là:', o: ['Bất ngờ có xu hướng lặp lại', 'Giá luôn giảm', 'Lợi nhuận bằng không', 'Sản phẩm có sâu bọ'], a: 0, e: 'Persistence.' },
    { q: 'Tín hiệu mạnh nhất để dự đoán bất ngờ:', o: ['Giá tăng trước ngày công bố', 'Đồng loạt nâng ước tính trước công bố', 'Tin đồn', 'Khối lượng giao dịch'], a: 1, e: 'Agreement.' },
    { q: 'Nên tránh nếu công ty:', o: ['Cảnh báo giảm triển vọng cùng lúc công bố', 'Có bất ngờ doanh thu', 'Có lợi nhuận tăng', 'Mua lại cổ phiếu'], a: 0, e: 'Guidance cut.' }
  ],
  match: [['Drift', 'Giá tiếp tục sau công bố'], ['Cockroach', 'Bất ngờ lặp lại'], ['Sales surprise', 'Bất ngờ doanh thu'], ['Agreement', 'Cùng chiều điều chỉnh'], ['Clean surprise', 'Bất ngờ chất lượng']]
});
