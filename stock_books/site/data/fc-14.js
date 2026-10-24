window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 14,
  title: 'Rủi ro, lợi suất và ngân sách vốn',
  intro: 'Rủi ro của một cổ phiếu hay dự án đo bằng mức nhạy cảm với thị trường, gọi là beta. Chương này đưa ra mô hình định giá tài sản vốn (CAPM) và cách dùng nó để chọn chi phí vốn cho dự án có rủi ro khác nhau.',
  sections: [
    { icon: '📊', title: 'Beta: đo rủi ro thị trường', blocks: [
      { t: 'key', x: '<b>Beta (β)</b> đo mức độ một cổ phiếu biến động theo thị trường: β = 1 là rủi ro trung bình; β > 1 là cổ phiếu "tấn công" (khuếch đại biến động thị trường); β < 1 là "phòng thủ". Beta danh mục là trung bình có trọng số của beta các cổ phiếu.' },
      { t: 'widget', name: 'fc-beta', title: 'Beta danh mục từ trọng số và beta từng cổ phiếu' },
      { t: 'p', x: 'Beta tính bằng độ dốc đường hồi quy giữa lợi suất cổ phiếu và lợi suất thị trường, hoặc <b>β = Cov(r_i, r_m) / Var(r_m)</b>.' }
    ] },
    { icon: '📈', title: 'CAPM và đường thị trường chứng khoán (SML)', blocks: [
      { t: 'key', x: '<b>Lợi suất kỳ vọng = r_f + β × (r_m − r_f)</b>. Mối quan hệ tuyến tính giữa beta và lợi suất kỳ vọng là SML. Cổ phiếu nằm trên SML có giá "công bằng"; nằm trên SML là hời, dưới SML là đắt (theo mô hình).' },
      { t: 'widget', name: 'fc-capm', title: 'CAPM: lợi suất đòi hỏi theo beta' },
      { t: 'tip', x: 'Trực giác: nhà đầu tư chỉ đòi bù cho rủi ro không đa dạng hóa được. Beta đo đúng phần đó, nên nó là cầu nối giữa rủi ro và lợi suất.' },
      { t: 'warn', x: 'CAPM là mô hình đơn giản hóa. Bằng chứng thực nghiệm cho thấy beta chỉ giải thích một phần chênh lệch lợi suất, và beta ước lượng từ lịch sử có sai số. Hãy dùng như điểm xuất phát, không phải chân lý.' }
    ] },
    { icon: '🏗️', title: 'Rủi ro dự án và chi phí vốn', blocks: [
      { t: 'list', items: ['Chi phí vốn của dự án phải phản ánh <b>rủi ro dự án</b>, không phải rủi ro công ty đang đi vay hay phát hành chứng khoán.', 'Dự án cùng loại hình kinh doanh hiện tại thì dùng chi phí vốn công ty; dự án khác ngành thì dùng beta của ngành đó.', 'Rủi ro kinh doanh phụ thuộc độ nhạy với chu kỳ kinh tế và đòn bẩy hoạt động (chi phí cố định cao → beta cao).', 'Nếu cộng "bù thêm" mơ hồ vào chi phí vốn cho mọi dự án, sẽ ưu ái dự án ngắn hạn và phạt dự án dài hạn.'] },
      { t: 'widget', name: 'fc-project-rate', title: 'Chọn chi phí vốn cho dự án từ beta' }
    ] }
  ],
  summary: ['Beta đo rủi ro thị trường của chứng khoán.', 'CAPM: r = r_f + β(r_m − r_f).', 'Chi phí vốn phải gắn với rủi ro của dự án.', 'Beta danh mục là trung bình trọng số.'],
  cards: [['Beta = 1?', 'Rủi ro bằng thị trường'], ['CAPM?', 'r = r_f + β(r_m − r_f)'], ['SML?', 'Đường quan hệ beta – lợi suất'], ['Market risk premium?', 'r_m − r_f'], ['Beta danh mục?', 'Trung bình trọng số beta'], ['Beta cao nghĩa là?', 'Biến động mạnh hơn thị trường'], ['Cost of capital phụ thuộc vào?', 'Rủi ro của dự án'], ['Operating leverage?', 'Chi phí cố định cao → beta cao']],
  quiz: [
    { q: 'r_f = 4%, r_m = 10%, β = 1,5. Lợi suất đòi hỏi:', o: ['6%', '10%', '13%', '15%'], a: 2, e: '4+1,5×6.' },
    { q: 'Danh mục: 60% beta 1,2; 40% beta 0,8. Beta danh mục:', o: ['0,8', '1,0', '1,04', '1,2'], a: 2, e: '0,72+0,32.' },
    { q: 'Cổ phiếu beta 0,5 là:', o: ['Tấn công', 'Phòng thủ', 'Phi rủi ro', 'Bằng thị trường'], a: 1, e: 'Dao động ít hơn thị trường.' },
    { q: 'Chi phí vốn dự án nên dựa trên:', o: ['Rủi ro dự án', 'Lãi suất vay công ty', 'Lợi nhuận quá khứ', 'Số cổ đông'], a: 0, e: 'Rủi ro của chính dòng tiền dự án.' }
  ],
  match: [['Beta', 'Nhạy với thị trường'], ['SML', 'Đường beta – lợi suất'], ['r_f', 'Lãi phi rủi ro'], ['Market premium', 'r_m − r_f'], ['Aggressive stock', 'Beta > 1']]
});
