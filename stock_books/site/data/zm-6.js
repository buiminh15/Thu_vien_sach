window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 6,
  title: 'Bất ngờ về lợi nhuận (earnings surprise)',
  intro: 'Bất ngờ lợi nhuận đo mức công ty đạt so với kỳ vọng của Phố Wall. Chương này giải thích khái niệm, vì sao cùng một mức bất ngờ có thể làm giá tăng hoặc giảm, và năm "trò chơi" mà công ty dùng để quản lý con số lợi nhuận.',
  sections: [
    { icon: '📣', title: 'Bất ngờ lợi nhuận là gì?', blocks: [
      { t: 'p', x: '"Earnings surprise" là thuật ngữ do Zacks đặt năm 1982: chênh lệch giữa lợi nhuận công bố thực tế và đồng thuận ước tính của quý đó. Hơn kỳ vọng là <b>bất ngờ dương</b> và thường được thị trường "chúc phúc"; kém kỳ vọng là <b>bất ngờ âm</b> và bị "đem ra xử".' },
      { t: 'key', x: '<b>Bất ngờ (%) = (EPS thực tế − đồng thuận) / |đồng thuận| × 100.</b> Công ty thường công bố con số qua thông cáo báo chí trước khi nộp báo cáo quý (10-Q, có độ chính xác bắt buộc theo luật).' },
      { t: 'widget', name: 'zm-surprise', title: 'Tính % bất ngờ lợi nhuận' },
      { t: 'p', x: 'Vì sao thông tin lợi nhuận làm thị trường chao đảo? Vì giá phản ánh kỳ vọng. Nếu báo cáo cho thấy công ty sẽ kiếm nhiều hơn mức nhà đầu tư dự tính thì giá tăng và ngược lại. Vấn đề: không ai biết kỳ vọng thật của các tổ chức, nên đồng thuận của nhà phân tích là đại diện tốt nhất.' }
    ] },
    { icon: '🎚️', title: 'Vì sao cùng một bất ngờ, phản ứng khác nhau?', blocks: [
      { t: 'p', x: 'Công ty A báo bất ngờ +10% và giá tăng 20%; công ty B báo cùng mức mà giá lại giảm. Ba câu hỏi cần đặt ra khi công ty công bố:' },
      { t: 'list', items: ['<b>Chất lượng lợi nhuận:</b> do doanh thu hay do thủ thuật kế toán, khoản bất thường?', '<b>Triển vọng:</b> công ty có cảnh báo cho các quý tới không?', '<b>Kỳ vọng thực của thị trường:</b> cổ phiếu có tăng mạnh trước ngày báo cáo (thị trường đã "định giá" tin tốt) không?'] },
      { t: 'tip', x: 'Nếu các công ty cùng ngành đã báo tốt trước, hoặc tin đã rò rỉ, hoặc công ty có thói quen luôn vượt kỳ vọng, thì tác động của bất ngờ dương sẽ yếu hơn.' }
    ] },
    { icon: '🎲', title: 'Năm trò chơi của công ty với báo cáo lợi nhuận', blocks: [
      { t: 'steps', items: ['<b>Quản lý kỳ vọng:</b> công ty gợi ý cho nhà phân tích để hạ ước tính, rồi "vượt" dễ dàng.', '<b>Dùng khoản mục bất thường/một lần</b> để làm đẹp con số.', '<b>Thay đổi thời điểm ghi nhận</b> doanh thu và chi phí.', '<b>Vượt kỳ vọng đúng 1 xu:</b> dấu hiệu CFO biết "quản trị" Phố Wall; ngược lại, trượt 1 xu có thể cho thấy lợi nhuận ít bị thao túng nhưng ban quản lý chưa khéo léo.', '<b>Mua lại nối tiếp (serial acquisition):</b> mua công ty có P/E thấp hơn bằng cổ phiếu của mình để EPS tăng ("accretive").'] },
      { t: 'widget', name: 'zm-accretion', title: 'Mua lại có "cộng" vào EPS: chênh lệch P/E' },
      { t: 'warn', x: 'Công ty tăng trưởng chủ yếu bằng mua lại liên tiếp thường sụp đổ khi mua phải công ty xấu hoặc hết mục tiêu. Câu hỏi đúng không phải "EPS có tăng không" mà là "có trả giá quá cao không" — phần lớn bên mua trả quá cao.' },
      { t: 'key', x: 'Hãy kiểm tra chất lượng lợi nhuận: lợi nhuận tăng nhờ <b>doanh thu</b> (top-line) có giá trị hơn nhờ thủ thuật.' }
    ] }
  ],
  summary: ['Bất ngờ = EPS thực tế so với đồng thuận.', 'Cùng mức bất ngờ có thể cho phản ứng khác nhau tùy chất lượng và kỳ vọng.', 'Công ty có thể "chơi" con số bằng nhiều cách.', 'Cẩn thận với tăng trưởng bằng mua lại liên tiếp.'],
  cards: [['Earnings surprise?', 'EPS thực tế so với đồng thuận'], ['Positive surprise?', 'EPS cao hơn đồng thuận'], ['10-Q?', 'Báo cáo quý bắt buộc'], ['Accretive acquisition?', 'Mua lại làm EPS bên mua tăng'], ['Serial acquirer?', 'Công ty tăng trưởng bằng mua lại liên tiếp'], ['Beat by one penny?', 'Có thể là dấu hiệu quản trị con số'], ['Quality of earnings?', 'Lợi nhuận đến từ doanh thu hay thủ thuật'], ['Vì sao khó đoán phản ứng?', 'Kỳ vọng thực của thị trường không quan sát được']],
  quiz: [
    { q: 'EPS thực 0,55; đồng thuận 0,50. Bất ngờ:', o: ['+5%', '+10%', '+55%', '−10%'], a: 1, e: '0,05/0,50.' },
    { q: 'Ai nên cảnh giác nhất?', o: ['Công ty tăng nhờ doanh thu', 'Công ty tăng nhờ mua lại liên tiếp', 'Công ty mới niêm yết', 'Công ty trả cổ tức'], a: 1, e: 'Serial acquisition.' },
    { q: 'Một bất ngờ dương có thể làm giá giảm vì:', o: ['Thị trường đã kỳ vọng cao hơn hoặc chất lượng lợi nhuận thấp', 'Luật cấm', 'Lãi suất', 'Không thể'], a: 0, e: 'Kỳ vọng và chất lượng.' },
    { q: 'Tài liệu quý nào có độ chính xác bắt buộc?', o: ['Lời đồn', '10-Q', 'Quảng cáo', 'Bài đăng diễn đàn'], a: 1, e: 'SEC.' }
  ],
  match: [['Positive surprise', 'EPS vượt đồng thuận'], ['10-Q', 'Báo cáo quý'], ['Accretive', 'Làm tăng EPS'], ['Guidance', 'Hướng dẫn kết quả tương lai'], ['Serial acquirer', 'Mua lại liên tiếp']]
});
