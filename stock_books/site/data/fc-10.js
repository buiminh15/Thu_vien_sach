window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 10,
  title: 'Định giá cổ phiếu',
  intro: 'Cổ phiếu không hứa trả cố định như trái phiếu, nên rủi ro hơn. Giá trị của nó là giá trị hiện tại của cổ tức kỳ vọng cộng giá bán tương lai. Chương này rút ra mô hình chiết khấu cổ tức, mô hình tăng trưởng không đổi và cách đọc tỷ số P/E.',
  sections: [
    { icon: '🏛️', title: 'Cổ phiếu và các loại giá trị', blocks: [
      { t: 'table', head: ['Loại giá trị', 'Ý nghĩa'], rows: [['Giá trị sổ sách', 'Vốn chủ trên bảng cân đối chia số cổ phiếu'], ['Giá trị thanh lý', 'Số tiền thu được nếu bán tài sản và trả nợ'], ['Giá trị thị trường', 'Giá nhà đầu tư thực sự trả — phụ thuộc kỳ vọng dòng tiền tương lai']] },
      { t: 'p', x: 'Cổ đông kỳ vọng nhận cổ tức và lãi vốn. Tỷ suất sinh lời kỳ vọng một năm: <b>r = (DIV₁ + P₁ − P₀) / P₀ = tỷ suất cổ tức + tỷ lệ tăng giá</b>. Đây cũng là lợi suất đòi hỏi trên các cổ phiếu cùng mức rủi ro.' }
    ] },
    { icon: '🧮', title: 'Mô hình chiết khấu cổ tức', blocks: [
      { t: 'key', x: '<b>P₀ = DIV₁/(1+r) + DIV₂/(1+r)² + … + (DIV_H + P_H)/(1+r)^H</b>. Nếu chân trời xa vô tận, giá cổ phiếu bằng PV của mọi cổ tức tương lai.' },
      { t: 'p', x: 'Nếu cổ tức tăng đều g mãi mãi (Gordon): <b>P₀ = DIV₁/(r − g)</b>, hay <b>r = DIV₁/P₀ + g</b>. Điều kiện: r > g.' },
      { t: 'widget', name: 'fc-gordon', title: 'Mô hình Gordon: giá cổ phiếu và lợi suất đòi hỏi' },
      { t: 'p', x: 'Ước lượng tăng trưởng: <b>g = ROE × tỷ lệ giữ lại lợi nhuận</b> (b). Công ty giữ lại nhiều, đầu tư ROE cao thì cổ tức tăng nhanh nhưng cổ tức hiện tại thấp.' },
      { t: 'warn', x: 'Mô hình rất nhạy với r − g: sai 1 điểm phần trăm có thể làm giá lệch hàng chục phần trăm. Đừng áp dụng cho công ty đang tăng trưởng quá nhanh (g ≥ r).' }
    ] },
    { icon: '🌱', title: 'Cổ phiếu tăng trưởng, cổ phiếu thu nhập và P/E', blocks: [
      { t: 'key', x: 'Giá cổ phiếu = <b>EPS₁/r</b> (giá trị tài sản hiện có, nếu công ty trả hết lợi nhuận) + <b>PVGO</b> (giá trị hiện tại của các cơ hội tăng trưởng). P/E cao phản ánh kỳ vọng PVGO lớn.' },
      { t: 'widget', name: 'fc-pvgo', title: 'Tách giá cổ phiếu: tài sản hiện có và cơ hội tăng trưởng (PVGO)' },
      { t: 'tip', x: 'Đầu tư tạo giá trị chỉ khi tỷ suất sinh lời của dự án mới cao hơn chi phí vốn. Một công ty giữ lại lợi nhuận để đầu tư vào dự án có ROE thấp hơn r sẽ làm giảm PVGO — giá trị âm.' }
    ] }
  ],
  summary: ['Giá cổ phiếu = PV cổ tức + PV giá bán tương lai.', 'Gordon: P₀ = DIV₁/(r − g).', 'r = tỷ suất cổ tức + g.', 'P/E phản ánh cơ hội tăng trưởng (PVGO).'],
  cards: [['Dividend discount model?', 'Giá = PV của mọi cổ tức'], ['Mô hình Gordon?', 'P₀ = DIV₁/(r − g)'], ['Lợi suất cổ phiếu?', 'DIV₁/P₀ + g'], ['g ước lượng?', 'ROE × b'], ['PVGO?', 'Giá trị hiện tại của cơ hội tăng trưởng'], ['Book value khác market value?', 'Chi phí lịch sử so với kỳ vọng'], ['Điều kiện Gordon?', 'r > g'], ['P/E cao nghĩa là?', 'Thị trường kỳ vọng tăng trưởng cao']],
  quiz: [
    { q: 'DIV₁ = 2, r = 10%, g = 4%. Giá:', o: ['20', '33,3', '50', '66,7'], a: 1, e: '2/0,06.' },
    { q: 'Giá 50, DIV₁ = 2, g = 5%. r:', o: ['4%', '5%', '9%', '10%'], a: 2, e: '2/50 + 5%.' },
    { q: 'ROE 15%, giữ lại 40%. g:', o: ['6%', '9%', '15%', '40%'], a: 0, e: '15%×40%.' },
    { q: 'EPS₁ = 5, r = 10%. Giá trị tài sản hiện có:', o: ['10', '25', '50', '500'], a: 2, e: '5/0,10.' },
    { q: 'Giá trị cổ phiếu phụ thuộc chủ yếu vào:', o: ['Giá trị sổ sách', 'Dòng tiền kỳ vọng', 'Số cổ đông', 'Tên công ty'], a: 1, e: 'Kỳ vọng tương lai.' }
  ],
  match: [['DDM', 'Chiết khấu cổ tức'], ['Gordon', 'Cổ tức tăng không đổi'], ['PVGO', 'Giá trị cơ hội tăng trưởng'], ['b', 'Tỷ lệ giữ lại lợi nhuận'], ['P/E', 'Giá trên EPS']]
});
