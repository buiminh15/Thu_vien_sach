window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 7,
  title: 'Quản lý tiền mặt và hàng tồn kho',
  intro: 'Tiền mặt và hàng tồn kho đều là "nguyên liệu" của kinh doanh: giữ ít thì thiếu, giữ nhiều thì tốn vốn. Chương này giới thiệu độ trễ thanh toán (float), các kỹ thuật thu tiền nhanh, và mô hình đặt hàng kinh tế (EOQ).',
  sections: [
    { icon: '⏳', title: 'Float: khoảng chênh giữa sổ sách và tài khoản', blocks: [
      { t: 'p', x: 'Khi bạn ký séc, tiền chưa rời tài khoản ngay: số dư khả dụng lớn hơn số dư sổ sách (<b>payment float</b>). Khi bạn gửi séc nhận được, tiền chưa vào tài khoản: số dư khả dụng nhỏ hơn số dư sổ (<b>availability float</b>). <b>Float ròng = payment float − availability float.</b>' },
      { t: 'widget', name: 'fc-float', title: 'Giá trị của float ròng: lãi kiếm được từ độ trễ' },
      { t: 'list', items: ['<b>Lockbox:</b> khách gửi thanh toán tới hộp thư địa phương; ngân hàng mở hộp và xử lý séc định kỳ → giảm thời gian gửi thư và thanh toán.', '<b>Ngân hàng tập trung (concentration banking):</b> thu tiền ở nhiều chi nhánh rồi chuyển về ngân hàng trung tâm.', '<b>Tài khoản số dư bằng 0:</b> chỉ chuyển vào đủ tiền để chi trả trong ngày.', 'Nguyên tắc chung: thu nhanh, chi chậm (trong khuôn khổ đạo đức và hợp đồng).'] }
    ] },
    { icon: '📦', title: 'Hàng tồn kho và mô hình EOQ', blocks: [
      { t: 'p', x: 'Giữ tồn kho cao giảm số lần đặt hàng và nguy cơ hết hàng; nhưng tăng chi phí giữ hàng (kho bãi, bảo hiểm, hư hỏng, chi phí vốn). <b>Lượng đặt hàng kinh tế (EOQ)</b> là cỡ đơn hàng làm tổng chi phí đặt hàng và chi phí giữ hàng nhỏ nhất.' },
      { t: 'key', x: '<b>EOQ = √(2 × Q × F / C)</b>, trong đó Q = nhu cầu cả năm, F = chi phí cố định mỗi lần đặt hàng, C = chi phí giữ một đơn vị trong năm. Chi phí đặt hàng giảm khi cỡ đơn tăng, chi phí giữ hàng tăng theo cỡ đơn; EOQ là điểm hai đường cắt nhau.' },
      { t: 'widget', name: 'fc-eoq', title: 'Mô hình EOQ: cỡ đơn tối ưu và tổng chi phí' },
      { t: 'tip', x: 'Cách làm hiện đại (just-in-time) giảm F rất mạnh nên EOQ nhỏ lại, tồn kho thấp. Quản lý tiền mặt cũng tương tự: tiền mặt là "hàng tồn kho" của tiền.' }
    ] },
    { icon: '💰', title: 'Giữ bao nhiêu tiền mặt?', blocks: [
      { t: 'p', x: 'Tiền mặt tạo thanh khoản nhưng không sinh lãi; chứng khoán sinh lãi nhưng không dùng trả hóa đơn trực tiếp. Công ty nên giữ tiền đến điểm mà <b>lợi ích biên của thanh khoản = lãi suất bỏ lỡ</b> khi không đầu tư chứng khoán. Mô hình Baumol (giống EOQ) cho số tiền tối ưu cần bán chứng khoán mỗi lần.' },
      { t: 'widget', name: 'fc-baumol', title: 'Mô hình Baumol: bao nhiêu mỗi lần rút tiền từ chứng khoán?' }
    ] }
  ],
  summary: ['Float giúp "chơi" độ trễ séc nhưng cần dự báo chính xác.', 'Lockbox và ngân hàng tập trung rút ngắn thời gian thu tiền.', 'EOQ cân bằng chi phí đặt hàng và giữ hàng.', 'Tiền mặt cũng như tồn kho: có chi phí cơ hội.'],
  cards: [['Payment float?', 'Số dư khả dụng lớn hơn sổ sách do séc chưa trừ'], ['Availability float?', 'Séc nhận chưa được ghi có'], ['Net float?', 'Payment float − availability float'], ['Lockbox?', 'Hộp thư địa phương mở bởi ngân hàng để thu séc'], ['EOQ?', '√(2QF/C)'], ['Carrying cost gồm?', 'Kho bãi, bảo hiểm, hư hỏng, chi phí vốn'], ['Zero-balance account?', 'Tài khoản chỉ chuyển đủ tiền chi trong ngày'], ['Baumol model?', 'EOQ áp dụng cho tiền mặt']],
  quiz: [
    { q: 'Nhu cầu 10.000 đơn vị/năm, F = 50, C = 2/đơn vị/năm. EOQ:', o: ['500', '707', '1.000', '5.000'], a: 2, e: '√(2×10000×50/2)=1000.' },
    { q: 'Float ròng dương nghĩa là:', o: ['Số dư khả dụng thường lớn hơn sổ sách', 'Lỗ', 'Tiền mặt bằng 0', 'Nợ tăng'], a: 0, e: 'Payment float > availability float.' },
    { q: 'Lockbox giúp:', o: ['Chậm trả nợ', 'Thu séc nhanh hơn', 'Giảm thuế', 'Tăng tồn kho'], a: 1, e: 'Rút ngắn thời gian thu.' },
    { q: 'Tăng chi phí đặt hàng F (giữ nguyên các biến khác) thì EOQ:', o: ['Giảm', 'Tăng', 'Không đổi', 'Bằng 0'], a: 1, e: 'Đặt ít lần hơn, mỗi lần nhiều hơn.' }
  ],
  match: [['Float', 'Độ trễ giữa sổ sách và ngân hàng'], ['Lockbox', 'Thu séc nhanh'], ['EOQ', 'Cỡ đơn tối ưu'], ['Carrying cost', 'Chi phí giữ hàng'], ['Order cost', 'Chi phí mỗi lần đặt']]
});
