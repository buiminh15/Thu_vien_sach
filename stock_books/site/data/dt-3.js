window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 3,
  title: 'Phân tích danh sách cổ phiếu và các nhóm',
  intro: 'Dù chỉ giao dịch một cổ phiếu, người đọc băng phải quan sát cả thị trường. Chương này giải thích vai trò của cổ phiếu dẫn đầu, cổ phiếu thứ cấp, các nhóm cổ phiếu liên quan, và cách đọc điểm đảo chiều từ sự khác biệt giữa chúng.',
  sections: [
    { icon: '🦴', title: 'Cổ phiếu dẫn đầu là "xương sống"', blocks: [
      { t: 'p', x: 'Một người bạn của tác giả lập đồ thị tổng hợp các cổ phiếu hoạt động mạnh để xem cổ phiếu nào đi sát thị trường chung nhất. Kết quả: Union Pacific là "xương sống/dẫn đầu", còn các cổ phiếu khác (như Reading Railroad) thường đi ngược xu hướng chung. Dù vậy người đọc băng không thể bỏ qua các cổ phiếu khác.' },
      { t: 'key', x: 'Ví dụ mùa thu 1907: Union Pacific tăng từ dưới 150 lên 167⅝ và dẫn cả thị trường. Trong 3–4 ngày trước khi đỉnh hình thành, các cổ phiếu khác (Reading, St. Paul, Copper, Steel, Smelters) bị bán mạnh <b>dưới sự che chở của sức mạnh Union Pacific</b> — đó là phân phối. Khi hoàn tất, Union ngừng tăng và cả thị trường sụp hơn 20 điểm ở Union. Người chỉ nhìn Union sẽ bất ngờ; người nhìn cả thị trường thấy điểm đảo chiều rõ như ban ngày.' },
      { t: 'widget', name: 'dt-leader', title: 'Cổ phiếu dẫn đầu mạnh nhưng phần còn lại yếu: dấu hiệu gì?' }
    ] },
    { icon: '🧍', title: 'Thị trường như một cơ thể', blocks: [
      { t: 'p', x: 'Nếu ngón tay bị đau, cả cơ thể có thể ngất dù các bộ phận khác không bị ảnh hưởng. Tương tự, một vụ sụt giảm ở Brooklyn Rapid Transit vì chuyện chính trị địa phương vẫn có thể kéo St. Paul, Union, Reading xuống theo. Tác giả không dùng hình ảnh "sợi xích đứt thành hai", vì thị trường không vỡ làm đôi; ngay cả trong hoảng loạn vẫn có mức giá lực mua xuất hiện.' }
    ] },
    { icon: '🧱', title: 'Các nhóm cổ phiếu', blocks: [
      { t: 'list', items: ['Cổ phiếu cùng nhóm tác động lẫn nhau: Consolidated Gas tăng mạnh thường ảnh hưởng Brooklyn Union Gas, nhưng không có lý do để cả thị trường tăng theo.', 'Nếu toàn bộ nhóm Standard Oil tăng đều và bền, đó là một chiến dịch tăng giá do các nhà tư bản lớn; họ không vào cuộc vì vài điểm, nên có thể đi cùng cho đến khi thấy phân phối.', 'Cơn bột phát ở một cổ phiếu nhỏ như Colorado Fuel không nhất thiết là tín hiệu tăng cho cả nhóm thép; nếu có điều kiện kinh doanh thật, U.S. Steel sẽ phản ứng trước rồi lan sang.', 'Khi cổ phiếu thứ cấp (secondary leader) bắt đầu tăng, thường là lúc các cổ phiếu dẫn đầu sắp hết đà và đang phân phối dưới sự che chở của nó. Giới chuyên nghiệp gọi chúng là "chỉ báo" (indicators).', 'U.S. Steel là "chỉ số" thật của tâm lý công chúng và vị thế kỹ thuật của thị trường vì ai cũng theo dõi nó. Steel mạnh bất chấp tin xấu = công chúng đang nắm giữ vững; Steel yếu bất thường = vị thế của công chúng đang không giữ được.'] },
      { t: 'widget', name: 'dt-groups', title: 'Đọc nhóm: tín hiệu nào cho biết điều gì?' },
      { t: 'tip', x: 'Cổ phiếu thiết bị (xe lửa, đầu máy) thường chỉ đi theo xu hướng thịnh vượng hay suy thoái chung của kinh tế, vì đơn hàng phụ thuộc vào ngành đường sắt.' },
      { t: 'warn', x: 'Các tên cổ phiếu (Union Pacific, Reading...) và cấu trúc "nhóm Standard Oil, Kuhn-Loeb" là của thị trường 1907–1919. Hãy rút ra phương pháp (quan sát cổ phiếu dẫn đầu, nhóm, ngành) chứ không áp dụng nguyên bảng danh sách.' }
    ] }
  ],
  summary: ['Cổ phiếu dẫn đầu cho biết hướng thị trường; nhưng phải xem cả thị trường.', 'Phân phối thường xảy ra dưới sự che chở của sức mạnh của cổ phiếu dẫn đầu.', 'Các cổ phiếu cùng nhóm ảnh hưởng nhau nhưng không tự kéo cả thị trường.', 'Cổ phiếu thứ cấp bắt đầu tăng thường khi dẫn đầu sắp hết đà.'],
  cards: [['Leader?', 'Cổ phiếu dẫn dắt thị trường'], ['Distribution?', 'Tay to bán dần cổ phiếu cho công chúng'], ['Accumulation?', 'Tay to mua gom dần'], ['Indicator?', 'Cổ phiếu thứ cấp báo hiệu giai đoạn của thị trường'], ['Tác giả ví thị trường với?', 'Cơ thể con người, không phải sợi xích'], ['Steel mạnh trước tin xấu?', 'Công chúng giữ vững'], ['Group move?', 'Cả nhóm cùng đi cho thấy chiến dịch thật'], ['Vì sao theo dõi nhiều cổ phiếu?', 'Cơ hội và tín hiệu xuất hiện ở nơi khác']],
  quiz: [
    { q: 'Dẫn đầu mạnh nhưng các cổ phiếu khác bị bán mạnh gợi ý:', o: ['Phân phối', 'Tích lũy', 'Không có gì', 'Cổ tức'], a: 0, e: 'Distribution under cover of strength.' },
    { q: 'Cổ phiếu thứ cấp bắt đầu tăng thường là lúc:', o: ['Dẫn đầu sắp hết đà', 'Dẫn đầu bắt đầu tăng', 'Thị trường đóng cửa', 'Lãi suất giảm'], a: 0, e: 'Theo kinh nghiệm.' },
    { q: 'Một cổ phiếu nhỏ bùng nổ có nghĩa cả nhóm tăng?', o: ['Luôn đúng', 'Không nhất thiết', 'Luôn sai', 'Chỉ khi Steel yếu'], a: 1, e: 'Cần tín hiệu từ dẫn đầu.' },
    { q: 'Vì sao ví thị trường với cơ thể?', o: ['Vì cú sốc ở một bộ phận ảnh hưởng toàn bộ', 'Vì đẹp', 'Vì chuỗi đứt', 'Vì có tim'], a: 0, e: 'Finger injury analogy.' }
  ],
  match: [['Leader', 'Dẫn đầu'], ['Secondary leader', 'Chỉ báo thứ cấp'], ['Distribution', 'Phân phối'], ['Group', 'Nhóm cổ phiếu liên quan'], ['Steel', 'Chỉ số tâm lý công chúng']]
});
