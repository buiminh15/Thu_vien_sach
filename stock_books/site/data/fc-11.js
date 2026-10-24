window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 11,
  title: 'Rủi ro, lợi suất và chi phí cơ hội của vốn',
  intro: 'Muốn chiết khấu dòng tiền dự án, ta cần chi phí cơ hội của vốn: lợi suất nhà đầu tư có thể kiếm ở thị trường với cùng mức rủi ro. Chương này nhìn lại lịch sử thị trường vốn, đo rủi ro bằng độ lệch chuẩn và giải thích vì sao đa dạng hóa giảm rủi ro riêng nhưng không xóa được rủi ro thị trường.',
  sections: [
    { icon: '📚', title: 'Lịch sử thị trường vốn', blocks: [
      { t: 'p', x: 'Trong hơn 70 năm (đến thời điểm sách viết), cổ phiếu Mỹ (S&P Composite) sinh lời cao hơn tín phiếu Kho bạc khoảng <b>9,4%/năm</b> — đó là <b>phần bù rủi ro thị trường</b>. Trái phiếu dài hạn sinh lời cao hơn tín phiếu nhưng thấp hơn cổ phiếu. Độ lệch chuẩn của thị trường cổ phiếu khoảng 20%/năm.' },
      { t: 'key', x: 'Chi phí cơ hội của vốn cho dự án rủi ro trung bình ≈ <b>lãi suất phi rủi ro hiện tại + phần bù rủi ro thị trường</b>.' },
      { t: 'widget', name: 'fc-capm-simple', title: 'Lợi suất đòi hỏi = lãi phi rủi ro + phần bù rủi ro' },
      { t: 'warn', x: 'Con số 9,4% là kết quả lịch sử của một giai đoạn cụ thể (Mỹ, đến cuối thập niên 1990). Phần bù rủi ro tương lai có thể khác; các ước lượng hiện đại thường thấp hơn.' }
    ] },
    { icon: '📏', title: 'Đo rủi ro', blocks: [
      { t: 'p', x: '<b>Phương sai</b> = trung bình bình phương độ lệch so với trung bình; <b>độ lệch chuẩn</b> = căn bậc hai của phương sai. Độ lệch chuẩn càng lớn, kết quả càng phân tán, càng rủi ro.' },
      { t: 'widget', name: 'fc-stdev', title: 'Độ lệch chuẩn của một chuỗi lợi suất' }
    ] },
    { icon: '🧺', title: 'Đa dạng hóa', blocks: [
      { t: 'p', x: 'Các cổ phiếu không cùng chiều hoàn toàn nên khi gộp lại, các biến động riêng bù trừ nhau. Phần rủi ro loại bỏ được là <b>rủi ro riêng (unique risk)</b>. Phần còn lại là <b>rủi ro thị trường</b> do các yếu tố vĩ mô tác động lên hầu hết cổ phiếu.' },
      { t: 'widget', name: 'fc-diversify', title: 'Rủi ro danh mục giảm thế nào khi thêm cổ phiếu?' },
      { t: 'key', x: 'Cổ phiếu "rủi ro cao" không phải cổ phiếu biến động mạnh khi đứng riêng, mà là cổ phiếu <b>đóng góp lớn vào rủi ro của danh mục đa dạng hóa</b> — tức nhạy cảm với kinh tế vĩ mô. Nhà đầu tư chỉ được bù cho rủi ro thị trường.' }
    ] }
  ],
  summary: ['Phần bù rủi ro lịch sử khoảng 9,4%; độ lệch chuẩn thị trường ~20%.', 'Chi phí cơ hội ≈ lãi phi rủi ro + phần bù rủi ro.', 'Đa dạng hóa loại bỏ rủi ro riêng.', 'Rủi ro thị trường không thể loại bỏ và mới được bù đắp.'],
  cards: [['Risk premium?', 'Lợi suất cổ phiếu vượt tín phiếu Kho bạc'], ['Standard deviation?', 'Căn bậc hai của phương sai'], ['Unique risk?', 'Rủi ro riêng, đa dạng hóa được'], ['Market risk?', 'Rủi ro vĩ mô, không đa dạng hóa được'], ['Opportunity cost of capital?', 'Lợi suất kỳ vọng ở thị trường cùng rủi ro'], ['Lịch sử phần bù?', 'Khoảng 9,4% (giai đoạn trong sách)'], ['Đa dạng hóa giảm gì?', 'Rủi ro riêng'], ['Cổ phiếu rủi ro cao thực sự?', 'Đóng góp lớn vào rủi ro danh mục']],
  quiz: [
    { q: 'Lãi tín phiếu 4%, phần bù 6%. Lợi suất thị trường kỳ vọng:', o: ['4%', '6%', '10%', '24%'], a: 2, e: 'Cộng.' },
    { q: 'Rủi ro nào đa dạng hóa được?', o: ['Rủi ro thị trường', 'Rủi ro riêng', 'Cả hai', 'Không'], a: 1, e: 'Unique risk.' },
    { q: 'Độ lệch chuẩn lớn nghĩa là:', o: ['Ít biến động', 'Nhiều biến động', 'Luôn lỗ', 'Luôn lãi'], a: 1, e: 'Phân tán rộng.' },
    { q: 'Nhà đầu tư được bù cho loại rủi ro nào?', o: ['Rủi ro thị trường', 'Rủi ro riêng', 'Mọi rủi ro', 'Không rủi ro nào'], a: 0, e: 'Chỉ rủi ro không đa dạng hóa được.' }
  ],
  match: [['Variance', 'Trung bình bình phương độ lệch'], ['Diversification', 'Giảm rủi ro riêng'], ['Risk premium', 'Phần bù cổ phiếu so với tín phiếu'], ['Market risk', 'Rủi ro vĩ mô'], ['Unique risk', 'Rủi ro riêng công ty']]
});
