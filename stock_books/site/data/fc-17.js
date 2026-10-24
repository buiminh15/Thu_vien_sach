window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 17,
  title: 'Tổng quan về tài trợ doanh nghiệp',
  intro: 'Công ty huy động vốn bằng cổ phiếu thường, cổ phiếu ưu đãi, nợ hoặc chứng khoán chuyển đổi, và còn có nguồn nội bộ là lợi nhuận giữ lại. Chương này mô tả đặc điểm từng loại và mô hình tài trợ thực tế của các công ty.',
  sections: [
    { icon: '📈', title: 'Cổ phiếu thường và cổ phiếu ưu đãi', blocks: [
      { t: 'table', head: ['', 'Cổ phiếu thường', 'Cổ phiếu ưu đãi'], rows: [
        ['Cổ tức', 'Không bắt buộc, thay đổi theo kết quả', 'Cố định nhưng công ty có thể hoãn'],
        ['Quyền biểu quyết', 'Có', 'Thường không'],
        ['Thứ tự khi thanh lý', 'Sau cùng', 'Sau nợ, trước cổ phiếu thường'],
        ['Thuế', 'Cổ tức không trừ thuế', 'Cổ tức không trừ thuế']
      ] },
      { t: 'p', x: 'Công ty không thể trả cổ tức thường nếu chưa trả đủ cổ tức ưu đãi. Dù mang tên "ưu đãi", đây không phải nguồn vốn phổ biến vì cổ tức không được trừ thuế như lãi vay; thường dùng trong tình huống đặc thù. Giữ lại lợi nhuận cũng là một cách tài trợ bằng vốn chủ.' }
    ] },
    { icon: '💳', title: 'Nợ doanh nghiệp', blocks: [
      { t: 'p', x: 'Công ty hứa trả lãi và gốc nhưng trách nhiệm hữu hạn: cổ đông có thể giao tài sản cho chủ nợ rồi bỏ đi. Khác cổ tức, lãi vay được <b>trừ vào thu nhập trước thuế</b>.' },
      { t: 'list', items: ['Lãi cố định hay thả nổi.', 'Nợ dài hạn (funded) hay ngắn hạn (unfunded).', 'Có điều khoản mua lại sớm (callable) hay quỹ trả nợ dần (sinking fund).', 'Nợ cấp cao (senior) hay cấp dưới (subordinated).', 'Có bảo đảm (secured) hay không bảo đảm.', 'Hạng đầu tư hay hạng rác (junk).', 'Nợ trong nước hay quốc tế.'] },
      { t: 'widget', name: 'fc-debt-shield', title: 'Nợ và cổ phiếu ưu đãi: lợi ích thuế của lãi vay' }
    ] },
    { icon: '🔀', title: 'Chứng khoán chuyển đổi và mô hình tài trợ', blocks: [
      { t: 'p', x: '<b>Trái phiếu chuyển đổi</b> cho người nắm quyền đổi sang cổ phiếu theo tỷ lệ định sẵn: hưởng lãi cố định khi cổ phiếu yếu và chia lợi khi cổ phiếu tăng. <b>Giá trị chuyển đổi = số cổ phiếu nhận được × giá cổ phiếu.</b>' },
      { t: 'widget', name: 'fc-convertible', title: 'Trái phiếu chuyển đổi: giữ trái phiếu hay đổi sang cổ phiếu?' },
      { t: 'key', x: 'Thực tế tài trợ: các công ty chủ yếu dùng <b>lợi nhuận giữ lại</b> và nợ; phát hành cổ phiếu mới chỉ chiếm tỷ trọng nhỏ. Điều đó phù hợp với lý thuyết thứ tự ưu tiên (pecking order): dùng nội bộ trước, rồi nợ, cuối cùng cổ phiếu mới.' }
    ] }
  ],
  summary: ['Cổ phiếu thường: biến động, quyền biểu quyết; ưu đãi: cổ tức cố định.', 'Lãi vay trừ thuế, cổ tức thì không.', 'Nợ có nhiều dạng: lãi cố định/thả nổi, ngắn/dài hạn, có/không bảo đảm...', 'Trái phiếu chuyển đổi có quyền đổi sang cổ phiếu.', 'Thực tế: lợi nhuận giữ lại + nợ là nguồn chính.'],
  cards: [['Preferred stock?', 'Cổ tức cố định, ưu tiên trước cổ phiếu thường'], ['Senior debt?', 'Được trả trước nợ cấp dưới'], ['Callable bond?', 'Công ty có quyền mua lại sớm'], ['Sinking fund?', 'Quỹ để trả nợ dần'], ['Convertible bond?', 'Trái phiếu đổi được sang cổ phiếu'], ['Junk bond?', 'Trái phiếu hạng thấp, lãi cao'], ['Pecking order?', 'Nội bộ → nợ → cổ phiếu mới'], ['Funded debt?', 'Nợ dài hạn']],
  quiz: [
    { q: 'Điều nào được trừ thuế?', o: ['Cổ tức thường', 'Cổ tức ưu đãi', 'Lãi vay', 'Không cái nào'], a: 2, e: 'Chỉ lãi vay.' },
    { q: 'Mỗi trái phiếu đổi được 20 cổ phiếu, giá cổ phiếu 60. Giá trị chuyển đổi:', o: ['80', '600', '1.200', '2.000'], a: 2, e: '20×60.' },
    { q: 'Theo pecking order, nguồn ưu tiên đầu tiên:', o: ['Phát hành cổ phiếu', 'Lợi nhuận giữ lại', 'Trái phiếu rác', 'Bán công ty'], a: 1, e: 'Nội bộ trước.' },
    { q: 'Cổ phiếu ưu đãi khác thường ở:', o: ['Cổ tức cố định, thường không biểu quyết', 'Luôn có biểu quyết', 'Được trừ thuế', 'Không rủi ro'], a: 0, e: 'Đặc điểm cổ tức.' }
  ],
  match: [['Callable', 'Công ty mua lại sớm'], ['Senior', 'Trả trước'], ['Convertible', 'Đổi sang cổ phiếu'], ['Secured', 'Có tài sản bảo đảm'], ['Retained earnings', 'Nguồn nội bộ']]
});
