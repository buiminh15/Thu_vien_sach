window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 3,
  title: 'Tháo, lắp, kiểm tra và bảo dưỡng động cơ không đồng bộ một pha',
  intro: 'Một pha không tạo được từ trường quay, nên động cơ một pha cần hai cuộn dây lệch pha nhờ tụ điện. Bài này giải thích nguyên lý, thông số, tổn hao – hiệu suất, rồi hướng dẫn quy trình tháo–lắp–bảo dưỡng quạt trần như ví dụ thực hành.',
  sections: [
    { icon: '🌀', title: 'Từ trường quay từ hai dòng điện lệch pha', blocks: [
      { t: 'key', x: 'Dòng xoay chiều một pha trong một cuộn dây chỉ tạo <b>từ trường đập mạch</b>, không quay. Nhưng nếu hai dòng điện lệch pha <b>90° về thời gian</b> chạy trong hai cuộn dây đặt lệch <b>90° trong không gian</b> thì từ trường tổng hợp là <b>từ trường quay</b>: mỗi chu kỳ dòng điện, vectơ từ trường quay một vòng.' },
      { t: 'p', x: 'Tốc độ từ trường quay: <b>n₁ = 60f / p</b> (vòng/phút), f là tần số, p là số đôi cực.' },
      { t: 'widget', name: 'de-sync', title: 'Tốc độ đồng bộ, độ trượt và tốc độ rôto' }
    ] },
    { icon: '⚙️', title: 'Động cơ một pha có tụ điện', blocks: [
      { t: 'p', x: 'Stator có hai cuộn A (làm việc) và B (mở máy) đặt lệch 90°. Cuộn B mắc nối tiếp với tụ điện rồi song song với cuộn A, nhờ vậy IA và IB lệch pha nhau 90°. Rôto lồng sóc. Từ trường quay quét qua các thanh dẫn rôto sinh sức điện động và dòng cảm ứng; tác dụng tương hỗ tạo mômen quay, rôto quay cùng chiều với tốc độ n₂ < n₁.' },
      { t: 'tip', x: 'Khi rôto đạt tốc độ ổn định, có thể cắt công tắc để loại cuộn B và tụ ra mà động cơ vẫn chạy: vì thế B gọi là cuộn mở máy, A là cuộn làm việc.' },
      { t: 'list', items: ['Ứng dụng: máy bơm nước, quạt điện trong sinh hoạt, thiết bị điều khiển tự động.', 'Thông số: Pđm, Iđm, Uđm, cosφ, tần số, số vòng/phút (ví dụ 1400 hoặc 2800 v/p), hiệu suất.'] }
    ] },
    { icon: '📉', title: 'Tổn hao và hiệu suất', blocks: [
      { t: 'table', head: ['Tổn hao', 'Nguyên nhân'], rows: [['Tổn hao sắt (Pt)', 'Phát nóng mạch từ'], ['Tổn hao đồng (Pđ)', 'Dòng điện chạy trong cuộn dây stator, rôto'], ['Tổn hao ma sát (Pms)', 'Ma sát cơ và không khí']] },
      { t: 'key', x: '<b>ΔP = Pđ + Pt + Pms</b>; <b>P₂ = P₁ − ΔP</b>; <b>η = P₂ / P₁ × 100%</b>. Với ba pha: P₁ = 3·U·I·cosφ (pha); một pha: P₁ = U·I·cosφ.' },
      { t: 'widget', name: 'de-motor-eff', title: 'Hiệu suất động cơ từ công suất điện và tổn hao' }
    ] },
    { icon: '🔧', title: 'Thực hành: tháo – kiểm tra – lắp quạt trần', blocks: [
      { t: 'warn', x: 'An toàn bắt buộc: cắt điện và treo biển "Cấm đóng điện có người đang làm việc"; đánh dấu từng bộ phận để khỏi nhầm; sắp xếp dụng cụ gọn; tuân thủ nội quy xưởng.' },
      { t: 'steps', items: ['<b>Kiểm tra trước khi tháo:</b> cho chạy thử từ số lớn đến nhỏ để xác định hỏng phần cơ hay phần điện; đo điện trở cuộn dây và điện trở cách điện.', '<b>Tháo:</b> tháo phễu trên và đầu dây nguồn (đánh dấu), chốt chẻ, rút chốt treo; đánh dấu và tháo cánh; đánh dấu đầu dây ở hộp đấu, tháo tụ; tháo phễu dưới, rút ty quạt; đánh dấu bu lông bầu trên/bầu dưới, dùng búa kết hợp đệm gỗ đóng bầu ra; dùng vam ba chân tháo vòng bi.', '<b>Kiểm tra – bảo dưỡng:</b> quan sát rôto (thanh dẫn đứt?), stator (cuộn dây đứt, xây xát, đổi màu?); đo điện dung tụ, sai lệch không quá ±5% so với nhà chế tạo là tốt; đo điện trở các cuộn trong hộp số (tăng hoặc giảm dần là tốt) và cách điện; kiểm tra vòng bi, bôi mỡ khoảng 2/3 (vòng bi có nắp mỡ) hoặc 1/3 (không nắp) thể tích.', '<b>Lắp:</b> ngược lại trình tự tháo.'] },
      { t: 'widget', name: 'de-fan-check', title: 'Kiểm tra quạt trần: đánh giá điện trở cách điện và tụ' },
      { t: 'table', head: ['Sai hỏng', 'Nguyên nhân', 'Khắc phục'], rows: [['Cuộn dây xây xát, hỏng cách điện', 'Va chạm khi tháo lắp', 'Bọc giấy cách điện, tẩm sơn, sấy khô'], ['Cuộn dây đứt', 'Va chạm khi tháo lắp', 'Nối lại, bọc cách điện, tẩm sơn, sấy khô'], ['Dầu mỡ dính cuộn dây', 'Bảo dưỡng không cẩn thận', 'Lau sạch và sấy khô']] }
    ] }
  ],
  summary: ['Hai dòng lệch pha 90° trong hai cuộn lệch 90° tạo từ trường quay.', 'Tụ điện giúp cuộn mở máy lệch pha; sau đó có thể ngắt.', 'η = P₂/P₁, tổn hao gồm sắt, đồng, ma sát.', 'Tháo lắp quạt: cắt điện, đánh dấu, đo cách điện và tụ.'],
  cards: [['Từ trường một cuộn dây xoay chiều?', 'Đập mạch, không quay'], ['Điều kiện có từ trường quay?', '2 dòng lệch 90° + 2 cuộn lệch 90°'], ['n₁ = ?', '60f/p'], ['Cuộn mở máy?', 'Cuộn B nối tiếp tụ'], ['Cuộn làm việc?', 'Cuộn A'], ['Ba loại tổn hao?', 'Sắt, đồng, ma sát'], ['Rcđ > 0,5 MΩ nghĩa là?', 'Cách điện tốt'], ['Sai số tụ cho phép?', '±5%']],
  quiz: [
    { q: 'f = 50 Hz, p = 2. n₁ =', o: ['750', '1500', '3000', '1000'], a: 1, e: '60×50/2.' },
    { q: 'P₁ = 100 W, tổn hao 20 W. Hiệu suất:', o: ['20%', '60%', '80%', '120%'], a: 2, e: '80/100.' },
    { q: 'Rcđ = 0 nghĩa là:', o: ['Cách điện tốt', 'Cuộn dây ẩm', 'Cuộn dây chạm vỏ', 'Pin yếu'], a: 2, e: 'Chạm vỏ.' },
    { q: 'Tụ 2 µF đo được 1,85 µF. Sai lệch:', o: ['2,5%', '7,5%', '15%', '5%'], a: 1, e: '0,15/2.' }
  ],
  match: [['Từ trường quay', 'Hai pha lệch 90°'], ['Cuộn B', 'Mở máy qua tụ'], ['Tổn hao đồng', 'Dòng trong cuộn dây'], ['Mêgôm mét', 'Đo cách điện'], ['Vam ba chân', 'Tháo vòng bi']]
});
