window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 5,
  title: 'Khối lượng và ý nghĩa của chúng',
  intro: 'Giá cuối cùng chỉ là lịch sử. Thị trường thật là cặp giá mua–giá bán. Chương này dạy cách đọc khối lượng để biết bên mua hay bên bán đang mạnh hơn, cách tay to che giấu việc gom hàng, ba giai đoạn thao túng (tích lũy, đẩy giá, phân phối) và những giới hạn của phương pháp.',
  sections: [
    { icon: '⚖️', title: 'Thị trường là cán cân giữa mua và bán', blocks: [
      { t: 'p', x: '"Giá giao dịch gần nhất" khác "giá thị trường": giá thị trường là cặp giá mua (bid) và giá chào bán (ask), như hai đĩa cân. Khối lượng ném ra bởi người bán và bị người mua giành lấy cho biết bên nào đang nặng hơn.' },
      { t: 'p', x: 'Ví dụ: bốn giao dịch cho thấy 700 cổ phiếu bán ở 50 và 2.500 mua ở 50⅛. Mua đang hiệu quả hơn nên giá nhiều khả năng lên 50¼ trước khi xuống 49⅞ — nhưng không chắc chắn vì cung cầu thay đổi từng giây.' },
      { t: 'widget', name: 'dt-volume-scale', title: 'Cán cân khối lượng: mua hay bán đang chiếm ưu thế?' },
      { t: 'key', x: 'Lợi thế của việc chỉ giao dịch cổ phiếu dẫn đầu: áp lực cung–cầu thể hiện ở đó trước, vì tay to không thể nâng hay hạ giá mà không giao dịch khối lượng lớn.' },
      { t: 'tip', x: 'Con số "lớn" là tương đối: 1.900 cổ phiếu là nhiều với cổ phiếu này nhưng nhỏ với cổ phiếu khác. Cần so với mức hoạt động chung và mức hoạt động riêng của cổ phiếu đó.' }
    ] },
    { icon: '🕵️', title: 'Người ta gom hàng kín đáo như thế nào?', blocks: [
      { t: 'p', x: 'Tác giả kể về việc mua quyền kiểm soát một công ty đường sắt: một nhà môi giới nhận lệnh "lấy mọi thứ được chào bán đến 38" nhưng được dặn chỉ <b>nhận hàng người khác chào, không trả giá cao, và hạ giá bất cứ khi nào có thể</b>. Anh ta thỉnh thoảng còn chào bán vài lô nhỏ để kéo giá xuống, nhằm gom được nhiều hơn.' },
      { t: 'p', x: 'Trên băng giá, người đọc băng thấy: một lô lớn (2.000 cổ phiếu) bị lấy ở giá cao nhất, theo sau là các lô nhỏ ở giá thấp hơn, cho thấy có một bên mua thực sự muốn gom hàng và che giấu ý định.' },
      { t: 'list', items: ['Hoạt động của băng giá lúc đỉnh và đáy là kim chỉ nam trạng thái kỹ thuật: khi giảm mà băng chạy rất nhanh, khối lượng lớn → thanh lý tự nguyện hoặc bắt buộc; nếu hồi sau đó mà băng chậm, lô nhỏ → thiếu sức mua.', 'Thị trường tăng sôi động: băng "nghẹt" khi tăng và "cạn như thủy triều" khi điều chỉnh.', 'Khoảng trống giá lớn giữa các giao dịch (ví dụ 180⅛ → 180⅜) cho thấy bên mua "với tới" mà không chịu chờ, tức áp lực mua kiên trì.'] },
      { t: 'widget', name: 'dt-gap', title: 'Khoảng trống giữa các giao dịch liên tiếp: bên mua hay bán chủ động?' },
      { t: 'p', x: 'Khi giá phá một mức kháng cự, như dòng nước phá đập, sẽ đi vào vùng mới: càng mạnh khi nó kéo cả thị trường cùng đi. "Đập không thường xây nối tiếp nhau", nên sau khi phá vỡ thường đi tiếp.' }
    ] },
    { icon: '🧱', title: 'Thao túng ba giai đoạn và giới hạn của phương pháp', blocks: [
      { t: 'steps', items: ['<b>Tích lũy (accumulation):</b> tay to mua gom lượng lớn kín đáo.', '<b>Đẩy giá (marking up):</b> nâng giá để thu hút công chúng.', '<b>Phân phối (distribution):</b> bán dần cho công chúng ở giá cao. (Với bán khống thì thứ tự là phân phối, hạ giá, rồi tích lũy.)'] },
      { t: 'p', x: 'Người đọc băng không vội mua: có thể phải chờ vài tuần đến vài tháng cho tay to hoàn tất gom, và có thể mua rẻ hơn. Bằng cách chờ khoảnh khắc đúng, anh để người khác ôm hàng thay mình. Khi bắt đầu đẩy giá, anh vào ngay từ đầu và đi cùng cho tới khi có dấu hiệu dừng hay phân phối. Biểu đồ điểm-và-hình (figure chart) giúp quan sát toàn cảnh.' },
      { t: 'warn', x: 'Tác giả tự cảnh báo: nhiều độc giả hiểu lầm rằng chỉ cần ngồi cạnh máy ticker và nhìn bên khối lượng lớn là đủ. Sau khi sàn đổi luật (người đặt lệnh phải nhận cả phần nhỏ của một lô lớn, cấm lệnh khớp giả...) thủ thuật đặt/chào lô lớn để tạo ấn tượng giảm đi, nên khối lượng bớt giá trị chỉ dẫn. Dù nguyên tắc vẫn đúng, đừng dựa hoàn toàn vào đó.' },
      { t: 'widget', name: 'dt-wyckoff-phase', title: 'Nhận diện giai đoạn: tích lũy, đẩy giá, phân phối, hạ giá' }
    ] }
  ],
  summary: ['Thị trường = cặp giá mua–bán; khối lượng cho biết bên nào mạnh hơn.', 'Tay to che giấu việc gom hàng bằng lô nhỏ và hạ giá.', 'Ba giai đoạn thao túng: tích lũy, đẩy giá, phân phối.', 'Khối lượng không phải công thức chắc chắn.'],
  cards: [['Last sale vs market price?', 'Lịch sử so với cặp bid–ask'], ['Tích lũy?', 'Mua gom kín đáo'], ['Mark-up?', 'Đẩy giá lên'], ['Phân phối?', 'Bán dần cho công chúng'], ['Phá kháng cự có ý nghĩa?', 'Đi vào vùng giá mới'], ['Băng chạy nhanh khi giảm?', 'Thanh lý/áp lực bán lớn'], ['Hồi mà băng chậm?', 'Thiếu sức mua'], ['Giới hạn?', 'Luật đổi, không dựa hoàn toàn vào khối lượng']],
  quiz: [
    { q: '800 cổ phiếu bán ở 50; 2.400 mua ở 50⅛. Mua/bán:', o: ['1:3', '3:1', '1:1', '2:1'], a: 1, e: '2400/800.' },
    { q: 'Thứ tự thao túng phía mua:', o: ['Phân phối, hạ giá, tích lũy', 'Tích lũy, đẩy giá, phân phối', 'Đẩy giá, tích lũy, phân phối', 'Không có thứ tự'], a: 1, e: 'Accumulation, mark-up, distribution.' },
    { q: 'Băng giá nghẹt khi tăng và cạn khi điều chỉnh cho thấy:', o: ['Thị trường tăng mạnh', 'Thị trường chết', 'Phá sản', 'Lãi suất tăng'], a: 0, e: 'Strong bull.' },
    { q: 'Vì sao khối lượng kém hữu ích hơn sau thay đổi luật sàn?', o: ['Giảm các giao dịch lô lớn tạo ấn tượng giả', 'Tăng phí', 'Cấm ticker', 'Hết cổ phiếu'], a: 0, e: 'Rule revision.' }
  ],
  match: [['Bid', 'Giá mua'], ['Ask', 'Giá chào bán'], ['Accumulation', 'Gom hàng'], ['Distribution', 'Phân phối'], ['Mark-up', 'Đẩy giá']]
});
