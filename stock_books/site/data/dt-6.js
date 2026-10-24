window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 6,
  title: 'Kỹ thuật thị trường',
  intro: 'Chương này dùng ví dụ đầu 1909 để dạy cách đánh giá sức mạnh kỹ thuật của thị trường: cổ phiếu nào chịu được cú sốc, cổ phiếu nào nằm trong tay "tay yếu", vì sao biến động mạnh đột ngột thường báo hiệu điểm kết thúc, và những nhịp hồi/điều chỉnh bình thường.',
  sections: [
    { icon: '🔬', title: 'Khoan thử thị trường để biết ai đang nắm cổ phiếu', blocks: [
      { t: 'p', x: 'Ngày 27/2/1909, Reading bị đánh rớt ba điểm mạnh. Union Pacific chỉ giảm ¾, Southern Pacific ⅝, Steel ⅝. Điều đó chứng tỏ các cổ phiếu này <b>mạnh về kỹ thuật</b>: chúng đang nằm trong tay những người bình thản trước cú rơi ba điểm của cổ phiếu dẫn đầu khác.' },
      { t: 'p', x: 'Như thợ mỏ dùng mũi khoan kim cương để biết cấu trúc quặng, ta "khoan" thị trường để hỏi: ai đang nắm nguồn cung nổi? Nếu là nhóm giao dịch lớn trong thời bùng nổ với ký quỹ nhỏ, họ rất dễ tổn thương nên cổ phiếu đó rơi nặng nhất khi thị trường bị lắc.' },
      { t: 'table', head: ['Cổ phiếu', 'Tăng 1907–09 (điểm)', 'Giảm tháng 2/1909 (điểm)', 'Giảm so với tăng'], rows: [['Union Pacific', '84¼', '12⅜', '14,7%'], ['Reading', '73¼', '26⅜', '33,6%'], ['Steel', '36¼', '16½', '44,6%']] },
      { t: 'widget', name: 'dt-retrace', title: 'Mức hoàn nhịp: cổ phiếu giảm bao nhiêu % so với đợt tăng?' },
      { t: 'key', x: 'Thị trường và từng cổ phiếu được đánh giá bởi cả điều chúng <b>làm</b> lẫn điều chúng <b>không làm</b> ở điểm then chốt. Union chỉ chỉnh rất nhỏ so với đợt tăng, nên người đọc băng suy ra nó còn tiềm năng tăng cao hơn.' }
    ] },
    { icon: '🧨', title: 'Mức cực đoan thường báo hiệu kết thúc', blocks: [
      { t: 'list', items: ['Một đợt tăng/giảm kéo dài thường kết thúc bằng một động thái rộng, nhanh ở các cổ phiếu dẫn đầu (ví dụ 23/2/1909: Reading rớt từ 128¾ xuống 118, Steel từ 46 xuống 41¼ trong một ngày; Southern Pacific nhảy 7 điểm trong một phiên sau khi lê từ 97 lên 112).', 'Tương tự với cả thị trường: một chuyển động dữ dội bất thường sau thời gian trượt hoặc tăng kéo dài thường là dấu hiệu cuối cùng.', 'Cổ phiếu "tự cho thấy" ý định qua phản ứng khi bị ép hoặc kích thích. Ví dụ: tin tốt công khai mà cổ phiếu không tăng, thì tin đó đã nằm trong giá.'] },
      { t: 'p', x: 'Các <b>floor trader</b> luôn thăm dò điểm yếu: phát hiện thiếu hỗ trợ thì tấn công bán; thấy vị thế bán khống dễ tổn thương thì đẩy giá để ép đóng lệnh. Người đọc băng chịu ảnh hưởng của những hành động này và dùng chúng như tín hiệu.' }
    ] },
    { icon: '📏', title: 'Nhịp điều chỉnh bình thường', blocks: [
      { t: 'p', x: 'Người giao dịch trong ngày vẫn phải biết bức tranh lớn. Trong thị trường tăng, điều chỉnh 2–5 điểm là bình thường; cổ phiếu dẫn đầu thỉnh thoảng giảm 10–15 điểm, và ít nhất một lần/năm giảm 25 điểm. Sau một đợt giảm 10 điểm kỳ vọng hồi khoảng <b>một nửa</b>; nếu xu hướng tăng tiếp thì hồi toàn bộ và hơn nữa. Nếu không hồi tự nhiên, vấn đề chưa được giải quyết và có thể còn giảm tiếp.' },
      { t: 'p', x: 'Ví dụ American Smelters: đỉnh 99⅝, giảm xuống 78 (−21⅝) rồi dấu hiệu mua xuất hiện quanh 79½; kỳ vọng hồi nửa mức giảm (~10¾) lên ~89 — thực tế lên 89⅜.' },
      { t: 'widget', name: 'dt-rebound', title: 'Hồi nửa nhịp: ước tính mục tiêu hồi từ mức giảm' },
      { t: 'warn', x: 'Đây là hướng dẫn kinh nghiệm, không phải quy luật. Tác giả nhắc: đừng bán khống sau một cú giảm 15 điểm dù tín hiệu rõ; mỗi điểm giảm thêm đưa bạn gần điểm đảo chiều. Thị trường hiếm khi chạy hơn ba, bốn ngày liên tục cùng một hướng mà không chỉnh.' },
      { t: 'tip', x: '"Ít ai sẵn lòng đi đến tận gốc mọi việc. Vậy có lạ gì khi thành công chỉ dành cho một số ít?"' }
    ] }
  ],
  summary: ['Sức mạnh kỹ thuật: cổ phiếu chống chịu cú sốc nằm trong tay vững.', 'Đợt dao động cực mạnh thường báo hiệu điểm kết thúc xu hướng.', 'Điều chỉnh bình thường và hồi khoảng nửa mức giảm là các điểm tham chiếu.', 'Không dùng tham chiếu như quy luật.'],
  cards: [['Mạnh kỹ thuật là gì?', 'Chịu cú sốc mà ít giảm'], ['Tay yếu?', 'Người ký quỹ nhỏ mua ở đỉnh'], ['Dao động mạnh đột ngột sau xu hướng dài?', 'Thường là điểm cuối'], ['Floor trader làm gì?', 'Thăm dò điểm yếu để tấn công'], ['Hồi sau giảm?', 'Khoảng một nửa'], ['Điều chỉnh bình thường trong tăng?', '2–5 điểm'], ['Khi nào ít an toàn bán khống?', 'Sau một cú giảm rất dài'], ['Thị trường chạy cùng chiều liên tục?', 'Hiếm quá 3–4 ngày']],
  quiz: [
    { q: 'Cổ phiếu giảm 12 điểm sau khi tăng 84; tỷ lệ:', o: ['6%', '14,3%', '25%', '50%'], a: 1, e: '12/84.' },
    { q: 'Giảm 20 điểm, kỳ vọng hồi nửa nhịp khoảng:', o: ['5', '10', '20', '40'], a: 1, e: 'Một nửa.' },
    { q: 'Cổ phiếu chịu cú sốc mà ít giảm cho thấy:', o: ['Nằm trong tay yếu', 'Mạnh về kỹ thuật', 'Sắp phá sản', 'Không liên quan'], a: 1, e: 'Technical strength.' },
    { q: 'Động thái mạnh bất thường cuối xu hướng thường là:', o: ['Điểm khởi đầu', 'Dấu hiệu kết thúc', 'Nhiễu', 'Tin xấu'], a: 1, e: 'Climax.' }
  ],
  match: [['Technical strength', 'Chống chịu cú sốc'], ['Climax', 'Động thái cực đoan cuối xu hướng'], ['Floor trader', 'Nhà giao dịch trên sàn'], ['Reaction', 'Nhịp điều chỉnh'], ['Rally', 'Nhịp hồi']]
});
