window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 8,
  title: 'Quản lý tín dụng và thu nợ',
  intro: 'Bán chịu là một khoản đầu tư vào khách hàng. Chương này đi qua năm bước: điều khoản bán hàng, hình thức hợp đồng, đánh giá khách hàng, quyết định cấp tín dụng và chính sách thu nợ, cuối cùng là phá sản.',
  sections: [
    { icon: '🧾', title: 'Điều khoản bán và lãi suất ẩn', blocks: [
      { t: 'p', x: 'Điều khoản như "2/10, net 30" nghĩa là giảm 2% nếu trả trong 10 ngày, còn lại phải trả đủ trong 30 ngày. Không lấy chiết khấu thực chất là vay của người bán với lãi suất rất cao.' },
      { t: 'key', x: 'Lãi suất hiệu dụng của việc bỏ chiết khấu = <b>(1 + chiết khấu/giá đã chiết khấu)^(365/số ngày trả thêm) − 1</b>. Với 2/10 net 30: (1 + 2/98)^(365/20) − 1 ≈ 44,6% — rất đắt.' },
      { t: 'widget', name: 'fc-discount', title: 'Lãi suất ngầm khi bỏ qua chiết khấu thanh toán sớm' }
    ] },
    { icon: '🔎', title: 'Phân tích tín dụng', blocks: [
      { t: 'list', items: ['Kinh nghiệm của chính bạn với khách hàng.', 'Kinh nghiệm của chủ nợ khác, đánh giá của tổ chức xếp hạng tín dụng.', 'Hỏi ngân hàng của khách hàng.', 'Giá trị thị trường chứng khoán của khách (nếu niêm yết).', 'Phân tích báo cáo tài chính.', 'Công ty nhiều hồ sơ thường dùng <b>điểm tín dụng</b> kết hợp các nguồn trên.'] },
      { t: 'p', x: 'Hợp đồng phổ biến là bán trên tài khoản mở (open account); với đơn hàng lớn cần chứng từ chính thức như thương phiếu (promissory note) để tránh tranh chấp.' }
    ] },
    { icon: '⚖️', title: 'Quyết định cấp tín dụng', blocks: [
      { t: 'steps', items: ['Ước lượng xác suất khách trả (p) và không trả (1 − p).', 'Nếu cấp: kỳ vọng thu = p × doanh thu − chi phí hàng; nếu từ chối: 0.', 'Chọn cấp tín dụng khi giá trị kỳ vọng dương (tính cả giá trị hiện tại).', 'Xét cả khả năng bán lặp lại: khách trả tốt có thể mua tiếp, làm tăng giá trị cấp tín dụng lần đầu.'] },
      { t: 'widget', name: 'fc-credit', title: 'Có nên cấp tín dụng? Xác suất hòa vốn' },
      { t: 'tip', x: 'Giá trị của tín dụng ban đầu cao hơn bạn nghĩ nếu khách mới có khả năng mua lặp lại; ngược lại, khách đã chậm trả nên được xử lý chặt hơn.' }
    ] },
    { icon: '📞', title: 'Chính sách thu nợ và phá sản', blocks: [
      { t: 'p', x: 'Chính sách thu nợ xác định ai theo dõi khoản trễ hạn, khi nào gửi nhắc, khi nào ngừng giao hàng, khi nào giao cho đơn vị thu hồi nợ. Một công cụ quản trị là bảng tuổi nợ (aging schedule). Nếu khách phá sản, chủ nợ có thể chỉ thu được một phần; hiểu quy trình phá sản (tái cơ cấu hay thanh lý) giúp đánh giá rủi ro.' },
      { t: 'widget', name: 'fc-aging', title: 'Bảng tuổi nợ: khoản phải thu của bạn khỏe đến đâu?' }
    ] }
  ],
  summary: ['Năm bước: điều khoản, hợp đồng, phân tích, chính sách tín dụng, thu nợ.', 'Bỏ qua chiết khấu thanh toán sớm là khoản vay rất đắt.', 'Cấp tín dụng đáng làm nếu giá trị kỳ vọng dương, tính cả khả năng mua lặp lại.', 'Bảng tuổi nợ theo dõi nợ quá hạn.'],
  cards: [['"2/10, net 30"?', 'Giảm 2% nếu trả trong 10 ngày, hạn cuối 30 ngày'], ['Open account?', 'Bán chịu chỉ dựa trên sổ sách'], ['Promissory note?', 'Giấy cam kết trả nợ'], ['Credit scoring?', 'Điểm tín dụng tổng hợp nhiều nguồn'], ['Aging schedule?', 'Bảng nợ phải thu theo tuổi nợ'], ['Chi phí bỏ chiết khấu 2/10 net 30?', '~44,6%/năm'], ['Hòa vốn tín dụng?', 'p × giá bán = chi phí'], ['Nợ xấu?', 'Khoản phải thu không thu được']],
  quiz: [
    { q: 'Tín dụng đáng cấp khi:', o: ['Xác suất trả ≥ chi phí/giá bán', 'Khách quen', 'Giá bán thấp', 'Luôn luôn'], a: 0, e: 'p×giá ≥ chi phí.' },
    { q: 'Chi phí 60, giá bán 100. Xác suất trả tối thiểu để hòa vốn:', o: ['40%', '60%', '80%', '100%'], a: 1, e: '60/100.' },
    { q: 'Bỏ qua chiết khấu 2/10 net 30 tương đương vay lãi:', o: ['2%', '~10%', '~44%', '0%'], a: 2, e: 'Công thức hiệu dụng.' },
    { q: 'Công cụ theo dõi nợ phải thu quá hạn:', o: ['Aging schedule', 'Bảng cân đối', 'Du Pont', 'EOQ'], a: 0, e: 'Bảng tuổi nợ.' }
  ],
  match: [['Open account', 'Bán chịu không chứng từ'], ['Credit score', 'Điểm tổng hợp'], ['Aging schedule', 'Theo dõi nợ quá hạn'], ['Terms of sale', 'Điều khoản thanh toán'], ['Bad debt', 'Nợ không thu được']]
});
