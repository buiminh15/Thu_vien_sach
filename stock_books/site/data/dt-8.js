window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 8,
  title: 'Dùng biểu đồ làm kim chỉ nam',
  intro: 'Một độc giả hỏi: nếu băng giá kể chuyện và biểu đồ là bản sao của băng giá, sao không chỉ theo biểu đồ? Wyckoff phân biệt người chơi biểu đồ và người đọc băng, rồi giới thiệu biểu đồ hình số (figure chart) để phát hiện tích lũy/phân phối.',
  sections: [
    { icon: '⚔️', title: 'Người chơi biểu đồ và người đọc băng', blocks: [
      { t: 'table', head: ['', 'Chart player', 'Tape reader'], rows: [['Cơ sở', 'Lịch sử giá của một cổ phiếu', 'Điều băng giá cho thấy ngay lúc này'], ['Phạm vi', 'Thường một cổ phiếu', 'Cả thị trường, không gắn với một mã'], ['Quy tắc', 'Tương đối cố định', 'Dần thành trực giác'], ['Cách nhìn thị trường', 'Như cỗ máy, ít xét cổ phiếu khác', 'Như hệ thống liên đới']] },
      { t: 'tip', x: 'Wyckoff so sánh: khi băng qua đường đông, bạn không tra bảng quy tắc xem lúc nào chạy trước xe điện; bạn nhìn hai bên và bước đúng lúc. Người đọc băng thành thạo cũng thế.' }
    ] },
    { icon: '🔢', title: 'Biểu đồ hình số (figure chart)', blocks: [
      { t: 'p', x: 'Đây là thứ duy nhất Wyckoff khuyên cho người đọc băng. Nó <b>không</b> lập từ giá mở, cao, thấp, đóng của báo chí mà từ chuỗi giá giao dịch: ghi số vào ô theo các bước di chuyển một điểm, chỉ chuyển cột khi giá đổi hướng đủ bước. Nó giúp thấy vùng giá đi ngang kéo dài — tích lũy hoặc phân phối — và các điểm kháng cự lớn.' },
      { t: 'p', x: 'Ví dụ Amalgamated Copper (1903–1904): đầu năm 75⅝, thấp nhất 33⅝. Chuỗi bước giảm liên tục, rồi ở 36 hình thái đổi: các điểm hỗ trợ nâng dần, hồi 7 điểm, quay lại gần đáy, rồi hồi 16 điểm — dấu hiệu tích lũy.' },
      { t: 'key', x: 'Biểu đồ cho biết <b>hướng</b> của nhịp sắp tới; băng giá cho biết <b>khi nào</b>. Xu hướng lên là các đỉnh và đáy liên tiếp cao dần như cầu thang; xu hướng xuống ngược lại; các đỉnh/đáy bằng nhau là kháng cự. Đi ngang với khối lượng rất nhỏ là chết lặng; với khối lượng bình thường hay lớn là tích lũy/phân phối.' },
      { t: 'widget', name: 'dt-trend-read', title: 'Đọc xu hướng từ chuỗi đỉnh–đáy' }
    ] },
    { icon: '⚠️', title: 'Giới hạn của biểu đồ', blocks: [
      { t: 'list', items: ['Biểu đồ đường đơn của một mã chỉ hữu ích như bản tóm lược lịch sử; mỗi cổ phiếu bị tác động bởi các cổ phiếu khác.', 'Một cổ phiếu "đòn bẩy" có thể bị dùng để giữ cả thị trường hoặc đập cả danh sách; người theo biểu đồ máy móc sẽ mua đúng lúc phân phối kín hoàn tất và bị thiệt.', 'Tác giả thách: "Tôi chưa gặp ai kiếm tiền trên bất kỳ loại biểu đồ nào trong thời gian dài."', 'Nếu muốn chỉ báo xu hướng cơ học: lập biểu đồ trung bình đỉnh/đáy hằng ngày của 10 cổ phiếu dẫn đầu trong nhóm (đáng tin hơn chỉ số Dow Jones), dùng cho những ai bắt các nhịp 5–10 điểm chứ không scalp.'] },
      { t: 'widget', name: 'dt-chart-vs-tape', title: 'Chart hay tape? Tình huống nào dùng cái nào' },
      { t: 'p', x: 'Biểu đồ khối lượng theo mức giá cho một ngày (số lô 100 cổ phiếu tại từng phân số) giúp thấy lượng cổ phiếu đã giao dịch ở các mức giá khác nhau.' },
      { t: 'warn', x: 'Đây là kỹ thuật và dụng cụ của 1919. Các phần mềm biểu đồ hiện đại (point & figure, volume profile) có nguyên lý tương tự; hãy đọc như tài liệu lịch sử về cách nhìn tích lũy–phân phối.' }
    ] }
  ],
  summary: ['Chart player dựa vào lịch sử, tape reader dựa vào hiện tại.', 'Biểu đồ hình số giúp phát hiện tích lũy/phân phối.', 'Biểu đồ cho hướng, băng giá cho thời điểm.', 'Biểu đồ đơn một mã có thể đánh lừa vì mọi cổ phiếu tác động lẫn nhau.'],
  cards: [['Figure chart?', 'Biểu đồ hình số theo bước di chuyển giá'], ['Chart cho biết gì? Tape cho biết gì?', 'Hướng; thời điểm'], ['Xu hướng lên?', 'Đỉnh và đáy cao dần'], ['Các đỉnh bằng nhau?', 'Kháng cự'], ['Đi ngang + khối lượng nhỏ?', 'Chết lặng'], ['Đi ngang + khối lượng lớn?', 'Tích lũy hoặc phân phối'], ['Vì sao biểu đồ một mã dễ sai?', 'Bị các cổ phiếu khác tác động'], ['Chỉ báo cơ học gợi ý?', 'Trung bình đỉnh/đáy 10 cổ phiếu dẫn đầu']],
  quiz: [
    { q: 'Biểu đồ cho biết hướng, băng giá cho biết:', o: ['Khi nào', 'Tại sao', 'Bao nhiêu', 'Ai'], a: 0, e: 'Timing.' },
    { q: 'Các đỉnh và đáy liên tiếp cao dần là:', o: ['Xu hướng giảm', 'Xu hướng tăng', 'Đi ngang', 'Hỗn loạn'], a: 1, e: 'Stairs up.' },
    { q: 'Đi ngang dài với khối lượng lớn cho thấy:', o: ['Chết lặng', 'Tích lũy/phân phối', 'Phá sản', 'Cổ tức'], a: 1, e: 'Normal/large volume.' },
    { q: 'Wyckoff khuyên chủ yếu loại biểu đồ nào cho người đọc băng?', o: ['Biểu đồ nến', 'Biểu đồ hình số đầy đủ', 'Biểu đồ tròn', 'Không loại nào'], a: 1, e: 'Full figure chart.' }
  ],
  match: [['Figure chart', 'Biểu đồ hình số'], ['Uptrend', 'Đỉnh đáy cao dần'], ['Resistance', 'Các đỉnh cùng mức'], ['Chart player', 'Dựa vào lịch sử một mã'], ['Tape reader', 'Dựa vào hiện tại']]
});
