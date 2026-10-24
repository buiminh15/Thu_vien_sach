window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 24,
  title: 'Ngày đen tối nhất',
  intro: 'Biểu tình đòi "moratorium" lan khắp nước, ngân hàng hạn chế rút tiền, công chức bãi công vì chậm lương. Chủ tịch Fed mới đề xuất một "kỳ nghỉ chung" (general holiday): đóng băng ngắn hạn mọi thị trường, trong khi đảm bảo chính phủ vẫn trả nợ Kho bạc đúng hạn. Tổng thống chấp nhận rủi ro lớn nhất thời bình.',
  sections: [
    { icon: '🔥', title: 'Đường phố sôi sục', blocks: [
      { t: 'p', x: 'Từ mọi thị trấn nổi lên tiếng phản đối, lại là từ "moratorium" mà đa số không hiểu hết. Chủ tịch Fed cũ nghỉ hưu, người kế nhiệm cũng không dập được hỗn loạn. Nhân viên chính quyền liên bang và địa phương bãi công mỗi khi lương trễ ("No pay, no work"). Ở một số bang, ngân hàng bị rút tiền ồ ạt được FDIC cho phép chỉ trả mỗi người 100 USD/ngày; đám đông xếp hàng tràn ra phố hô khẩu hiệu giống thập niên 1930: "Đây không phải hàng chờ bánh mì. Không còn vụn bánh nữa!"' },
      { t: 'p', x: 'Tổng thống, sau khi bỏ kế hoạch cứu trợ, nhiều lần đập bàn: "Tôi muốn một kế hoạch thay thế, mang tính xây dựng và hợp lý!" Cuối cùng, khi khủng hoảng tràn xuống đường, ông bổ nhiệm Chủ tịch Fed mới và đưa Johnston, Tamara và các chuyên gia độc lập vào các vị trí chủ chốt, họp cuối tuần tại Camp David.' }
    ] },
    { icon: '⏸️', title: 'Moratorium hay kỳ nghỉ chung?', blocks: [
      { t: 'table', head: ['', 'Moratorium (đóng băng nợ)', 'General holiday (kỳ nghỉ chung)'], rows: [
        ['Ý nghĩa', 'Tạm ngừng thanh toán nợ', 'Đóng băng ngắn mọi thị trường, ngân hàng, nhà máy để chặn hoảng loạn; nghĩa vụ nợ không bị xóa'],
        ['Hệ quả cho chủ nợ', 'Chủ nợ (gồm người gửi tiền, người giữ quỹ tiền tệ) không được trả — mọi người đều vừa là con nợ vừa là chủ nợ', 'Mọi nghĩa vụ vẫn phải thực hiện, nhưng sau khi ổn định'],
        ['Thời gian', 'Không rõ', 'Vài ngày, tối đa khoảng một tuần'],
        ['Kết luận của Fed', 'Tuyệt đối không được', 'Lựa chọn duy nhất còn lại, giống FDR đầu thập niên 1930']
      ] },
      { t: 'key', x: 'Lập luận của Chủ tịch Fed mới: "bạn đã ở trong đường hầm rồi" — đã có kỳ nghỉ ngân hàng, sản xuất, thị trường "de facto"; thừa nông sản ở nông thôn, thiếu ở thành phố vì tắc vận tải, mất liên lạc, ngắt Internet, cắt dịch vụ thiết yếu ở các thành phố hết tiền. Cần hành động mạnh để làm chậm nhịp hoảng loạn, kiểm soát và khôi phục niềm tin.' },
      { t: 'widget', name: 'cp-creditor-debtor', title: 'Ai cũng vừa là con nợ vừa là chủ nợ: đóng băng nợ ảnh hưởng ai?' },
      { t: 'tip', x: 'Điều không thể làm: phẩy tay xóa hoặc đình chỉ các quan hệ hợp đồng thực giữa các tổ chức thực. Dọn nợ đòi hỏi doanh nhân, nhân viên ngân hàng, quan chức gặp nhau mặt đối mặt để tái cấu trúc và chấp nhận hy sinh — một quá trình dài và gian nan.' }
    ] },
    { icon: '🏛️', title: 'Nguyên tắc: Kho bạc phải đứng đầu', blocks: [
      { t: 'steps', items: ['Bằng mọi giá <b>tôn trọng nghĩa vụ của chính phủ với công chúng</b>: ai mua chứng khoán Kho bạc (qua quỹ tiền tệ, môi giới, ngân hàng hay trực tiếp) đều nhận lại tiền đầy đủ, đúng hạn, được đối xử ngang nhau.', 'Nếu không đủ tiền: vay thêm; nếu không vay được thêm: tăng lãi suất.', 'Ưu tiên truyền thông và vận tải: điện thoại, bản tin TV, Internet, nhà in, vận tải đường bộ/biển/hàng không tối thiểu phải tiếp tục dù tài chính khó khăn. Mạng quan hệ bạn bè, họ hàng, hàng xóm là "tuyến phòng thủ thứ hai" của xã hội.', 'Các cuộc tranh luận ở Quốc hội phải công khai.', 'Dùng hết các kênh giữa các nước để phối hợp kỳ nghỉ quốc tế, bất chấp tranh chấp thương mại.'] },
      { t: 'p', x: 'Đây là điều đã được rút ra từ năm 1980 (Carter), từ trận chiến ngân sách suýt đóng cửa chính phủ cuối thập niên 1990, và từ kế hoạch cứu trợ Harris–MetroBank bị hủy: thị trường trái phiếu chính phủ là thị trường không bao giờ được phép đóng cửa.' },
      { t: 'warn', x: 'Johnston không chắc nên đóng thứ gì: "Một thị trường hỗn loạn tốt hơn gấp nghìn lần không có thị trường." Nếu đóng, phải có cơ chế mở lại và thu hút người mua có tiền mặt đang đứng ngoài quay lại. Cả phòng nghi ngờ: "Người mua ở đâu? Thanh khoản đâu? Ai có tiền?"' },
      { t: 'p', x: 'Tổng thống lo ngại đó là "đường hầm tối với ánh đèn tàu chạy tới ở cuối". Nhưng không còn lựa chọn khác; ông quyết định thực hiện một <b>kỳ nghỉ quốc gia</b> — đóng gần như mọi thị trường tài chính và sản xuất không thiết yếu. Đó là canh bạc lớn nhất thời bình của bất kỳ tổng thống nào.' }
    ] }
  ],
  summary: ['Khủng hoảng lan ra đường phố: biểu tình, bãi công, hạn chế rút tiền.', 'Moratorium bị bác vì mọi người đều vừa là con nợ vừa là chủ nợ; kỳ nghỉ chung là giải pháp tạm thời.', 'Nghĩa vụ với chủ nợ Kho bạc phải được giữ bằng mọi giá.', 'Giữ truyền thông và vận tải; công khai tranh luận.', 'Tổng thống thực hiện kỳ nghỉ quốc gia, canh bạc lớn nhất thời bình.'],
  cards: [['Moratorium?', 'Tạm ngừng trả nợ'], ['General holiday?', 'Đóng băng ngắn mọi thị trường và hoạt động, nghĩa vụ vẫn còn'], ['Vì sao Fed phản đối moratorium?', 'Mọi người đều vừa là con nợ vừa là chủ nợ'], ['Thị trường không bao giờ được đóng?', 'Thị trường nợ chính phủ'], ['Nếu không đủ tiền trả Kho bạc?', 'Vay thêm, rồi tăng lãi suất'], ['FDIC hạn mức rút trong truyện?', '100 USD/ngày'], ['Tuyến phòng thủ thứ hai của xã hội?', 'Mạng quan hệ bạn bè, họ hàng, hàng xóm'], ['Rủi ro Johnston nhấn mạnh?', 'Phải có cơ chế mở lại thị trường']],
  quiz: [
    { q: 'Điều gì xảy ra với chủ nợ trong một moratorium?', o: ['Được trả gấp đôi', 'Không được trả', 'Không ảnh hưởng', 'Được bảo hiểm'], a: 1, e: 'Họ cũng là người gửi tiền, giữ quỹ.' },
    { q: 'Thời gian kỳ nghỉ chung dự kiến:', o: ['Vài giờ', 'Vài ngày, tối đa khoảng một tuần', '6 tháng', '1 năm'], a: 1, e: 'Ngắn.' },
    { q: 'Ưu tiên số một của chính phủ:', o: ['Cứu cổ phiếu', 'Tôn trọng nghĩa vụ Kho bạc', 'Giảm thuế', 'Đóng biên giới'], a: 1, e: 'Treasury first.' },
    { q: 'Johnston nhấn mạnh trước khi đóng thị trường:', o: ['Có sẵn cơ chế mở lại', 'In thêm tiền', 'Cấm bán khống', 'Tăng thuế'], a: 0, e: 'Phải có đường mở lại.' }
  ],
  match: [['Moratorium', 'Đình chỉ trả nợ'], ['General holiday', 'Đóng băng toàn diện ngắn hạn'], ['FDIC', 'Bảo hiểm tiền gửi'], ['Camp David', 'Nơi họp cuối tuần'], ['No pay, no work', 'Khẩu hiệu công chức']]
});
