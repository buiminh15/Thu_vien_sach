window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 5,
  title: 'Phân tích báo cáo tài chính',
  intro: 'Dữ liệu trong ba báo cáo rất nhiều. Các tỷ số tài chính nén chúng thành vài con số về đòn bẩy, thanh khoản, hiệu quả và khả năng sinh lời. Hệ thống Du Pont phân rã ROE để thấy nguồn gốc của hiệu quả.',
  sections: [
    { icon: '🔢', title: 'Bốn nhóm tỷ số', blocks: [
      { t: 'table', head: ['Nhóm', 'Tỷ số', 'Công thức'], rows: [
        ['Đòn bẩy', 'Tổng nợ / Tổng tài sản; Nợ / Vốn chủ; Khả năng thanh toán lãi (Times interest earned)', 'Nợ ÷ Tài sản; Nợ ÷ Vốn; (EBIT) ÷ Lãi vay'],
        ['Thanh khoản', 'Tỷ số thanh toán hiện hành; nhanh', 'Tài sản lưu động ÷ Nợ ngắn hạn; (TSLĐ − Tồn kho) ÷ Nợ ngắn hạn'],
        ['Hiệu quả', 'Vòng quay tài sản; vòng quay tồn kho; kỳ thu tiền', 'Doanh thu ÷ Tài sản; Giá vốn ÷ Tồn kho; Phải thu ÷ (Doanh thu/365)'],
        ['Sinh lời', 'Biên lợi nhuận; ROA; ROE', 'LN ròng ÷ Doanh thu; (LN ròng+lãi sau thuế) ÷ Tài sản; LN ròng ÷ Vốn chủ'],
        ['Định giá thị trường', 'P/E; Market-to-book', 'Giá cổ phiếu ÷ EPS; Giá ÷ Giá trị sổ sách/cp']
      ] },
      { t: 'widget', name: 'fc-ratios', title: 'Tính nhanh các tỷ số từ số liệu của một công ty' },
      { t: 'tip', x: 'Đừng dùng hết mọi tỷ số: nhiều tỷ số cho thông tin giống nhau. Hãy chọn vài tỷ số đại diện mỗi nhóm và so sánh với lịch sử công ty và với đối thủ cùng ngành.' }
    ] },
    { icon: '🧬', title: 'Hệ thống Du Pont', blocks: [
      { t: 'key', x: '<b>ROE = Gánh nặng thuế × Gánh nặng lãi × Biên lợi nhuận hoạt động × Vòng quay tài sản × Đòn bẩy tài chính</b>. Còn <b>ROA = Biên lợi nhuận × Vòng quay tài sản</b>. Công thức giúp trả lời: ROE cao nhờ biên cao, nhờ dùng tài sản hiệu quả, hay chỉ nhờ vay nhiều?' },
      { t: 'widget', name: 'fc-dupont', title: 'Phân rã ROE theo Du Pont' },
      { t: 'p', x: 'Hai công ty cùng ROE 15% có thể rất khác nhau: một công ty siêu thị biên mỏng, vòng quay cao; một công ty xa xỉ biên dày, vòng quay thấp.' }
    ] },
    { icon: '🚧', title: 'Cạm bẫy khi dùng tỷ số', blocks: [
      { t: 'list', items: ['Tỷ số hiếm khi cho câu trả lời, chủ yếu giúp đặt đúng câu hỏi.', 'Dữ liệu kế toán không phản ánh giá thị trường; cùng một tỷ số có thể được định nghĩa khác nhau giữa các nhà phân tích.', 'Cần "mốc chuẩn": so với các năm trước và với công ty cùng ngành.', 'Ngân hàng và chủ nợ thường đặt giới hạn trên tỷ số đòn bẩy; các tổ chức xếp hạng tín nhiệm cũng xét các tỷ số này.'] },
      { t: 'widget', name: 'fc-benchmark', title: 'So với trung bình ngành: tỷ số của bạn tốt hay xấu?' }
    ] }
  ],
  summary: ['Bốn nhóm: đòn bẩy, thanh khoản, hiệu quả, sinh lời (cộng định giá thị trường).', 'Du Pont phân rã ROE thành các nhân tố.', 'Cần mốc so sánh và phán đoán, không dùng máy móc.', 'Tỷ số giúp đặt câu hỏi hơn là đưa đáp án.'],
  cards: [['Current ratio?', 'Tài sản lưu động ÷ Nợ ngắn hạn'], ['Quick ratio?', '(TSLĐ − Tồn kho) ÷ Nợ ngắn hạn'], ['ROA?', 'Lợi nhuận ÷ Tổng tài sản'], ['ROE?', 'Lợi nhuận ròng ÷ Vốn chủ'], ['Biên lợi nhuận?', 'Lợi nhuận ÷ Doanh thu'], ['Vòng quay tài sản?', 'Doanh thu ÷ Tài sản'], ['P/E?', 'Giá cổ phiếu ÷ EPS'], ['Du Pont: ROA = ?', 'Biên lợi nhuận × Vòng quay tài sản'], ['Times interest earned?', 'EBIT ÷ Lãi vay']],
  quiz: [
    { q: 'Doanh thu 1.000, lợi nhuận ròng 50, tài sản 500. ROA:', o: ['5%', '10%', '50%', '20%'], a: 1, e: '50/500.' },
    { q: 'Biên 5%, vòng quay tài sản 2 lần. ROA:', o: ['2,5%', '7%', '10%', '25%'], a: 2, e: '5%×2.' },
    { q: 'TSLĐ 300, tồn kho 120, nợ ngắn hạn 150. Tỷ số nhanh:', o: ['1,2', '2,0', '0,8', '1,5'], a: 0, e: '(300−120)/150.' },
    { q: 'Ngoài so sánh theo năm, cần so sánh với:', o: ['Công ty khác ngành', 'Công ty cùng ngành', 'GDP', 'Giá vàng'], a: 1, e: 'Mốc chuẩn ngành.' }
  ],
  match: [['Leverage ratio', 'Mức nợ'], ['Liquidity ratio', 'Khả năng có tiền nhanh'], ['Turnover', 'Hiệu quả dùng tài sản'], ['Du Pont', 'Phân rã ROE'], ['P/E', 'Giá chia lợi nhuận mỗi cổ phiếu']]
});
