window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 20,
  title: 'Đòn bẩy và cơ cấu vốn (Phụ lục B)',
  intro: 'Công ty nên vay bao nhiêu? Chương này trình bày câu hỏi cơ cấu vốn, tác động của đòn bẩy tài chính lên EPS và ROE, và vì sao đòn bẩy làm lợi nhuận trên vốn chủ khuếch đại cả hai chiều.',
  sections: [
    { icon: '❓', title: 'Câu hỏi cơ cấu vốn', blocks: [
      { t: 'p', x: 'Cơ cấu vốn là tỷ lệ phối hợp nợ và vốn chủ để tài trợ tài sản. Câu hỏi là liệu có cơ cấu làm tối đa giá trị công ty hay không. Lập luận Modigliani–Miller (trong thế giới không thuế, không chi phí kiệt quệ): giá trị công ty do tài sản quyết định, không do cách chia thành nợ và vốn chủ; nhưng thực tế có thuế (lãi vay trừ thuế) và chi phí kiệt quệ tài chính nên có đánh đổi.' },
      { t: 'tip', x: 'Hình dung: tổng "cái bánh" (giá trị công ty) do hoạt động kinh doanh tạo ra; nợ chỉ là cách cắt bánh. Thuế và chi phí phá sản làm thay đổi kích thước cái bánh.' }
    ] },
    { icon: '🔌', title: 'Tác động của đòn bẩy tài chính', blocks: [
      { t: 'key', x: 'Khi vay nợ, lãi phải trả cố định, nên lợi nhuận hoạt động tăng 1% làm EPS và ROE tăng nhiều hơn 1%. Ngược lại khi lợi nhuận giảm, EPS giảm mạnh hơn. <b>ROE = ROA + (ROA − lãi suất nợ sau thuế) × D/E</b> (với ROA sau thuế đơn giản hóa).' },
      { t: 'widget', name: 'fc-leverage', title: 'Đòn bẩy tài chính: EPS và ROE theo mức nợ và lợi nhuận hoạt động' },
      { t: 'widget', name: 'fc-indifference', title: 'EBIT hòa vốn giữa hai phương án tài trợ (nợ so với cổ phiếu)' },
      { t: 'warn', x: 'Đòn bẩy không "tạo ra" giá trị cho cổ đông khi rủi ro tăng tương ứng: cổ đông yêu cầu lợi suất cao hơn vì vốn chủ có rủi ro hơn (beta vốn chủ tăng theo D/E).' }
    ] }
  ],
  summary: ['Cơ cấu vốn là cách chia tài trợ giữa nợ và vốn chủ.', 'Đòn bẩy khuếch đại EPS và ROE cả hai chiều.', 'Thực tế có thuế và chi phí kiệt quệ nên có đánh đổi.'],
  cards: [['Capital structure?', 'Tỷ lệ nợ và vốn chủ'], ['Financial leverage?', 'Dùng nợ để khuếch đại lợi suất vốn chủ'], ['MM thế giới không thuế?', 'Cơ cấu vốn không đổi giá trị công ty'], ['Financial distress?', 'Tình trạng khó khăn tài chính'], ['Break-even EBIT?', 'EBIT làm EPS hai phương án bằng nhau'], ['ROE khi vay?', 'Cao hơn nếu ROA > lãi vay'], ['Rủi ro vốn chủ khi nợ tăng?', 'Tăng'], ['Tax shield của nợ?', 'Lãi vay trừ thuế']],
  quiz: [
    { q: 'ROA 12%, lãi vay sau thuế 6%, D/E = 1. ROE xấp xỉ:', o: ['6%', '12%', '18%', '24%'], a: 2, e: '12 + (12−6)×1.' },
    { q: 'Đòn bẩy làm gì khi lợi nhuận hoạt động giảm?', o: ['Giảm EPS mạnh hơn', 'Tăng EPS', 'Không đổi', 'Xóa nợ'], a: 0, e: 'Khuếch đại hai chiều.' },
    { q: 'Điều làm cơ cấu vốn có ý nghĩa trong thực tế:', o: ['Thuế và chi phí kiệt quệ', 'Màu logo', 'Số nhân viên', 'Tên công ty'], a: 0, e: 'Sai khác MM.' },
    { q: 'Vốn chủ rủi ro hơn khi:', o: ['Nợ giảm', 'Nợ tăng', 'Không liên quan', 'Giá vàng tăng'], a: 1, e: 'Beta vốn chủ tăng.' }
  ],
  match: [['Leverage', 'Khuếch đại lợi suất vốn chủ'], ['MM', 'Cơ cấu vốn không đổi giá trị (không thuế)'], ['Distress', 'Chi phí khi khó khăn tài chính'], ['EBIT', 'Lợi nhuận trước lãi và thuế'], ['D/E', 'Nợ trên vốn chủ']]
});
