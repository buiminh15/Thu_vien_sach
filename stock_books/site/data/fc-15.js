window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 15,
  title: 'Chi phí vốn',
  intro: 'Công ty cần một tỷ lệ chiết khấu chuẩn cho dự án rủi ro trung bình. Đó là chi phí vốn bình quân gia quyền (WACC): trung bình có trọng số của chi phí nợ sau thuế và chi phí vốn chủ sở hữu.',
  sections: [
    { icon: '⚖️', title: 'Công thức WACC', blocks: [
      { t: 'key', x: '<b>WACC = r_nợ × (1 − T) × D/V + r_vốn chủ × E/V</b>, với V = D + E (có thể thêm cổ phiếu ưu đãi P/V). Trọng số dùng <b>giá trị thị trường</b>, không phải sổ sách. Lãi vay được trừ thuế nên chi phí nợ tính sau thuế.' },
      { t: 'widget', name: 'fc-wacc', title: 'Tính WACC từ cơ cấu vốn và chi phí từng nguồn' },
      { t: 'p', x: 'WACC là lợi suất kỳ vọng trên danh mục toàn bộ chứng khoán công ty phát hành. Nó đúng làm tỷ lệ chiết khấu cho dự án có rủi ro <i>bằng rủi ro tài sản hiện có</i>.' }
    ] },
    { icon: '🧩', title: 'Ước lượng từng thành phần', blocks: [
      { t: 'table', head: ['Thành phần', 'Cách ước lượng'], rows: [
        ['Chi phí nợ', 'Lãi suất thị trường công ty phải trả cho nợ mới (YTM nợ hiện có là một thước đo), sau đó nhân (1 − T)'],
        ['Cổ phiếu ưu đãi', 'Cổ tức ưu đãi ÷ giá thị trường'],
        ['Vốn chủ sở hữu', 'CAPM: r_f + β × phần bù rủi ro; hoặc DDM: DIV₁/P₀ + g'],
        ['Cơ cấu vốn', 'Giá trị thị trường nợ và vốn chủ (số cổ phiếu × giá)']
      ] },
      { t: 'widget', name: 'fc-equity-cost', title: 'Chi phí vốn chủ: CAPM so với mô hình cổ tức' },
      { t: 'tip', x: 'Công ty đòn bẩy cao có beta vốn chủ cao hơn công ty cùng ngành ít nợ. Beta ngành chỉ dùng được sau khi điều chỉnh cho khác biệt đòn bẩy.' }
    ] },
    { icon: '🧭', title: 'Cách dùng và giới hạn của WACC', blocks: [
      { t: 'list', items: ['Là chuẩn cho dự án rủi ro trung bình; điều chỉnh <b>lên</b> cho dự án rủi ro hơn và <b>xuống</b> cho dự án an toàn hơn.', 'Chi phí phát hành (flotation costs) nên xử lý như dòng tiền ra tăng thêm của dự án, không cộng vào lãi suất đòi hỏi.', 'Công ty đa ngành có thể cần chi phí vốn riêng cho từng bộ phận.', 'WACC chỉ phụ thuộc lãi suất, thuế và rủi ro của dự án, không phụ thuộc nguồn nào dự định dùng để tài trợ chính dự án đó.'] },
      { t: 'widget', name: 'fc-hurdle', title: 'Dự án có vượt "hàng rào" WACC (đã điều chỉnh rủi ro) không?' },
      { t: 'warn', x: 'Đừng dùng lãi suất vay của dự án làm tỷ lệ chiết khấu: dự án rủi ro vẫn có thể được vay rẻ nhờ tài sản khác của công ty.' }
    ] }
  ],
  summary: ['WACC = trung bình có trọng số của chi phí nợ sau thuế và chi phí vốn chủ.', 'Trọng số theo giá trị thị trường.', 'Chi phí vốn chủ qua CAPM hoặc DDM.', 'Điều chỉnh WACC theo rủi ro dự án.'],
  cards: [['WACC?', 'Chi phí vốn bình quân gia quyền'], ['Trọng số dùng?', 'Giá trị thị trường'], ['Chi phí nợ sau thuế?', 'r_nợ × (1 − T)'], ['Cost of preferred?', 'Cổ tức ưu đãi ÷ giá'], ['Cost of equity?', 'CAPM hoặc DDM'], ['Flotation costs?', 'Chi phí phát hành chứng khoán'], ['WACC cho dự án?', 'Rủi ro bằng tài sản hiện có'], ['Dự án rủi ro hơn?', 'Chiết khấu cao hơn WACC']],
  quiz: [
    { q: 'D/V = 40%, r_nợ = 6%, T = 30%, E/V = 60%, r_vốn chủ = 12%. WACC:', o: ['8,88%', '9,0%', '10,0%', '12,0%'], a: 0, e: '0,4×4,2%+0,6×12% = 8,88%.' },
    { q: 'Trọng số WACC nên dùng:', o: ['Giá trị sổ sách', 'Giá trị thị trường', 'Doanh thu', 'Tùy ý'], a: 1, e: 'Thị trường.' },
    { q: 'Chi phí nợ được tính sau thuế vì:', o: ['Lãi vay được trừ thuế', 'Nợ không có rủi ro', 'Luật quy định', 'Lãi nợ thấp'], a: 0, e: 'Lá chắn thuế.' },
    { q: 'Dự án rủi ro hơn trung bình nên dùng tỷ lệ chiết khấu:', o: ['Thấp hơn WACC', 'Bằng WACC', 'Cao hơn WACC', 'Bằng 0'], a: 2, e: 'Điều chỉnh lên.' }
  ],
  match: [['WACC', 'Chi phí vốn bình quân gia quyền'], ['CAPM', 'Ước lượng chi phí vốn chủ'], ['Flotation cost', 'Chi phí phát hành'], ['Tax shield', 'Lãi vay trừ thuế'], ['D/V', 'Tỷ trọng nợ']]
});
