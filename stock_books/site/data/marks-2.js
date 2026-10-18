// Điều quan trọng nhất (Howard Marks) – Chương 3–4.
BOOK_DATA.marks.chapters.push({
  n: 3,
  title: 'Giá trị',
  intro: 'Điểm khởi đầu của đầu tư thành công là ước tính chính xác giá trị nội tại. “Mua thấp, bán cao” chỉ có nghĩa khi bạn biết thế nào là thấp và cao — và đó là so với giá trị nội tại.',
  sections: [
    { icon: '🧭', title: 'Hai trường phái: kỹ thuật và cơ bản', blocks: [
      { t: 'key', x: 'Có hai cách: (1) <b>đánh giá giá trị nội tại</b> rồi mua/bán khi giá lệch; (2) dự đoán <b>biến động giá tương lai</b> từ chính giá. Marks <b>không tin</b> cách thứ hai.' },
      { t: 'list', items: [
        '<b>Đi bộ ngẫu nhiên (Fama)</b>: biến động giá quá khứ không dự báo tương lai — như tung đồng xu: mười lần sấp xong lần sau vẫn 50–50.',
        '<b>Đầu tư theo đà</b>: giả định cái đang tăng sẽ tiếp tục tăng. Herb Stein: “nếu một điều không thể kéo dài mãi, nó sẽ dừng lại” — bán lúc nào? và trong thị trường giảm làm gì?',
        '<b>Giao dịch trong ngày</b> (1998–99) giống đoán người đi quanh góc là nam hay nữ: lãi $3 từ một cổ phiếu tăng $30.'
      ] }
    ] },
    { icon: '💎', title: 'Đầu tư giá trị vs đầu tư tăng trưởng', blocks: [
      { t: 'table', head: ['', 'Đầu tư giá trị', 'Đầu tư tăng trưởng'], rows: [
        ['Cốt lõi', 'Xác định giá trị <b>hiện tại</b>, mua khi rẻ', 'Tìm công ty có <b>tương lai</b> tươi sáng'],
        ['Chú trọng', 'Tài sản hữu hình, lợi nhuận, dòng tiền, cổ tức', 'Tiềm năng tăng trưởng'],
        ['Tỷ lệ thành công / phần thưởng', 'Nhất quán hơn', 'Phần thưởng lớn hơn nhưng khó đoán hơn'],
        ['Marks', '“Sự nhất quán vượt trội sự kịch tính.”', 'Cược vào kết quả có thể không xảy ra']
      ] },
      { t: 'tip', x: '<b>Net-net</b>: mua khi vốn hoá thị trường thấp hơn (tài sản ngắn hạn − tổng nợ): về lý thuyết mua cả công ty, thanh lý, trả nợ và còn dư tiền. Marks: thực ra sự lựa chọn là giữa <b>giá trị hôm nay và giá trị ngày mai</b>; ranh giới mờ (Buffett mở rộng giá trị ra “doanh nghiệp tốt giá hấp dẫn”; có trường phái “tăng trưởng với giá hợp lý”).' },
      { t: 'h3', x: 'Bài học Nifty Fifty (1968–74)' },
      { t: 'list', items: [
        'First National City (nay Citibank) mua 50 công ty chất lượng, tăng trưởng nhanh (IBM, Xerox, Kodak, Polaroid, Coca-Cola…) vì “giá không quan trọng”.',
        'P/E lên 80–90 (trung bình thị trường ~10); đầu thập niên 1970 giảm còn 8–9 ⇒ nhà đầu tư mất ~<b>90%</b>: công ty tuyệt vời, giá sai.',
        'Kodak, Polaroid bị công nghệ phá huỷ; IBM, Xerox thành “con mồi”. (Davis: cổ phiếu có đời sống vô hạn, đúng về doanh nghiệp thì thời gian có thể bù trả giá quá cao — như Philip Morris — nhưng hiếm.)'
      ] }
    ] },
    { icon: '⏳', title: 'Giữ vững niềm tin khi giá chưa đồng ý', blocks: [
      { t: 'key', x: 'Đúng về giá trị <b>không</b> có nghĩa được chứng minh ngay. Nhà đầu tư giá trị chỉ hy vọng đúng về giá trị và mua <b>dưới</b> giá trị — Klarman: chiết khấu càng lớn, <b>biên an toàn</b> càng rộng. Graham: thị trường là “máy cân” về dài hạn; Greenblatt: thường 2–3 năm.' },
      { t: 'widget', name: 'margin-safety', title: 'Giá trị vs giá: biên an toàn' },
      { t: 'p', x: 'Ví dụ: tài sản giá trị 80 mua ở 60 (“mua đô la giá năm mươi xu”) rồi giảm xuống 50. Bạn sẽ làm gì? Nếu thích ở 60 thì phải thích hơn ở 50, 40, 30 (<b>trung bình giảm</b>) — trái với bản năng: giá tăng thì thích hơn, giá giảm thì nghi ngờ (đường cầu đầu tư không dốc xuống như Kinh tế vi mô 101).' },
      { t: 'warn', x: '“Ý kiến đúng về định giá nhưng giữ lỏng lẻo thì ít giá trị; ý kiến sai mà giữ chặt thì tệ hơn nhiều.” Điều kiện: <b>(1)</b> có quan điểm về giá trị nội tại, <b>(2)</b> đủ vững để mua khi giá giảm, <b>(3)</b> bạn phải đúng. Không ai thoải mái với lỗ; “thoát trước khi về không” chính là suy nghĩ tạo ra đáy.' },
      { t: 'tip', x: 'Bốn chủ đề xuyên suốt sách (Marks): <b>nỗi sợ bị sai</b>, <b>những điều rủi ro nhất</b>, <b>kiểm soát cảm xúc/cái tôi</b>, và <b>giá cả so với giá trị</b>. Tỷ lệ thành công của nhà đầu tư giỏi luôn dưới 1.000.' }
    ] }
  ],
  summary: [
    'Giá trị nội tại là điểm khởi đầu bắt buộc: không có nó, thành công chỉ là hy vọng.',
    'Phân tích kỹ thuật/đà không có nền tảng; hai phương pháp cơ bản là giá trị và tăng trưởng.',
    'Giá trị nhất quán hơn, tăng trưởng kịch tính hơn nhưng khó dự đoán (Nifty Fifty).',
    'Biên an toàn: mua thấp hơn giá trị; phải kiên trì dù giá tiếp tục giảm.',
    'Đúng chưa chắc được chứng minh ngay; cần niềm tin dựa trên phân tích.'
  ],
  cards: [
    ['Hai nhóm phương pháp đầu tư chứng khoán?', 'Dựa trên yếu tố cơ bản (giá trị nội tại) và dựa trên hành vi giá.'],
    ['Giả thuyết đi bộ ngẫu nhiên?', 'Biến động giá quá khứ không giúp dự đoán biến động tương lai (Fama).'],
    ['Điểm yếu của đầu tư theo đà?', 'Không biết khi nào dừng; chiếm lợi từ giả định cái tăng sẽ còn tăng.'],
    ['Đầu tư giá trị là gì?', 'Xác định giá trị hiện tại của tài sản và mua khi giá thấp hơn.'],
    ['Đầu tư tăng trưởng là gì?', 'Tìm công ty có tương lai tươi sáng; chú trọng tiềm năng hơn thuộc tính hiện tại.'],
    ['Đầu tư net-net?', 'Mua khi vốn hoá nhỏ hơn tài sản ngắn hạn trừ tổng nợ.'],
    ['Nifty Fifty là gì và kết cục?', '50 công ty tăng trưởng chất lượng cao mua bất chấp giá; P/E 80–90 rơi còn 8–9, mất ~90%.'],
    ['Biên an toàn là gì?', 'Chênh lệch giữa giá trị nội tại và giá mua; càng lớn càng được bảo vệ khi sai.'],
    ['“Mua đô la với năm mươi xu”?', 'Mua tài sản có giá trị thật lớn hơn giá rất nhiều (Buffett).'],
    ['Vì sao trung bình giảm khó?', 'Giá giảm khiến ta nghi ngờ; bản năng yêu thích thứ giá tăng.'],
    ['Ba điều kiện để lãi trong thị trường giảm?', 'Có quan điểm về giá trị, giữ đủ vững để mua khi giá giảm, và bạn phải đúng.'],
    ['Bốn chủ đề xuyên suốt của Marks?', 'Nỗi sợ bị sai; những điều rủi ro nhất; kiểm soát cảm xúc/cái tôi; giá so với giá trị.']
  ],
  quiz: [
    { q: 'Điểm khởi đầu không thể thiếu của đầu tư thành công là:', o: ['Dự báo kinh tế', 'Ước tính chính xác giá trị nội tại', 'Đòn bẩy', 'Biểu đồ giá'], a: 1, e: 'Không có nó chỉ là hy vọng.' },
    { q: 'Giả thuyết đi bộ ngẫu nhiên nói:', o: ['Giá quá khứ giúp dự báo', 'Biến động quá khứ không dự đoán tương lai', 'Giá luôn tăng', 'Giá không đổi'], a: 1, e: 'Như tung đồng xu.' },
    { q: 'Điểm yếu của đầu tư theo đà:', o: ['Chi phí thấp', 'Không biết khi nào dừng/thoát', 'Quá phức tạp', 'Không tăng'], a: 1, e: 'Herb Stein.' },
    { q: 'Đầu tư giá trị chú trọng:', o: ['Tiềm năng tăng trưởng xa', 'Thuộc tính hiện tại và mua rẻ', 'Đà giá', 'Tin đồn'], a: 1, e: 'Giá trị hôm nay.' },
    { q: 'Marks nghĩ về sự lựa chọn giá trị vs tăng trưởng là:', o: ['Đúng sai', 'Giá trị hôm nay vs giá trị ngày mai', 'Cổ phiếu vs trái phiếu', 'Rủi ro cao vs thấp'], a: 1, e: 'Chỉ khác mức độ.' },
    { q: 'Nifty Fifty bài học chính:', o: ['Công ty tốt luôn đáng mua', 'Công ty tuyệt vời vẫn là đầu tư tồi nếu trả giá sai', 'Tăng trưởng vô hạn', 'P/E không quan trọng'], a: 1, e: 'P/E 80–90 rơi còn 8–9.' },
    { q: 'Mua giá trị 80 ở 60 rồi giá về 50. Hành động nhất quán:', o: ['Bán ngay', 'Thích hơn và cân nhắc mua thêm nếu tin giá trị', 'Mua đòn bẩy', 'Chờ nó tăng rồi mua'], a: 1, e: 'Trung bình giảm khi quan điểm giá trị còn đứng.' },
    { q: 'Biên an toàn lý tưởng:', o: ['Nhỏ', 'Lớn', 'Bằng 0', 'Không quan trọng'], a: 1, e: 'Klarman.' },
    { q: 'Thị trường là “máy cân” về dài hạn là của:', o: ['Fama', 'Graham', 'Keynes', 'Stein'], a: 1, e: 'Ngắn hạn là cuộc bỏ phiếu.' },
    { q: 'Thành công của nhà đầu tư xuất sắc thường:', o: ['100%', 'Dưới 1.000 (có sai lầm)', 'Bằng quỹ chỉ số', 'Không đo được'], a: 1, e: 'Phải chấp nhận nỗi sợ bị sai.' }
  ],
  match: [
    ['Fama', 'Đi bộ ngẫu nhiên'],
    ['Net-net', 'Vốn hoá < tài sản ngắn hạn trừ nợ'],
    ['Nifty Fifty', 'Tăng trưởng chất lượng mua bất chấp giá'],
    ['Biên an toàn', 'Chiết khấu so với giá trị nội tại'],
    ['Trung bình giảm', 'Mua thêm khi giá giảm mà giá trị không đổi'],
    ['Graham', 'Thị trường là máy cân dài hạn'],
    ['Đầu tư theo đà', 'Giả định cái tăng sẽ còn tăng']
  ]
});

BOOK_DATA.marks.chapters.push({
  n: 4,
  title: 'Mối quan hệ giữa giá cả và giá trị',
  intro: 'Biết giá trị chưa đủ: thành công đến từ “mua một cách khôn ngoan” chứ không phải “mua thứ tốt”. Giá cả so với giá trị là điều quyết định, và giá bị ảnh hưởng bởi tâm lý và yếu tố kỹ thuật.',
  sections: [
    { icon: '🏷️', title: 'Giá là điểm xuất phát', blocks: [
      { t: 'key', x: 'Không tài sản nào tốt đến mức không thể thành khoản đầu tư tồi nếu mua quá đắt; và ít tài sản tệ đến mức không thể thành khoản đầu tư tốt nếu đủ rẻ. <b>Không khái niệm nào là hay hoặc dở bất kể giá.</b> (Davis: coi chừng bẫy giá trị do lỗi thời.)' },
      { t: 'list', items: [
        '“Chúng tôi chỉ mua A” = mua A bằng mọi giá — chắc chắn sai (cổ phiếu công nghệ cuối 1990; trái phiếu rác 1970–80 bị từ chối).',
        'Nếu mua đúng <b>giá trị hợp lý</b> thì được lợi nhuận hợp lý — nhà đầu tư chủ động muốn nhiều hơn; trả quá giá trị là sai lầm cần rất nhiều công hoặc may.',
        'Oaktree: “<b>Mua tốt là bán được một nửa</b>” — nếu mua rẻ, câu hỏi bán sẽ tự trả lời.',
        'Nếu ước tính giá trị đúng, theo thời gian giá sẽ <b>hội tụ</b> về giá trị.'
      ] }
    ] },
    { icon: '🧲', title: 'Điều gì quyết định giá: giá trị, kỹ thuật, tâm lý', blocks: [
      { t: 'tabs', items: [
        ['Giá trị cơ bản', '<p>Nền tảng, nhưng thường ảnh hưởng ít hơn hai yếu tố còn lại trong ngắn hạn.</p>'],
        ['Yếu tố kỹ thuật', '<p>Cung cầu không liên quan giá trị: <b>bán cưỡng bức</b> (gọi ký quỹ), <b>dòng tiền vào quỹ</b> buộc mua. Không gì tốt hơn mua từ người bán bị ép — nhưng không xây sự nghiệp được trên đó (họ chỉ xuất hiện ở cực điểm khủng hoảng/bong bóng) và <b>đừng trở thành người bán bị ép</b>: cần vốn dài hạn và sức bền tâm lý.</p>'],
        ['Tâm lý', '<p>Quan trọng đến mức nhiều chương sau dành cho nó. “Khoa học quan trọng nhất không phải kế toán hay kinh tế mà là <b>tâm lý học</b>.” Đầu tư là <b>cuộc thi nổi tiếng</b>: nguy hiểm nhất là mua ở đỉnh phổ biến (mọi tin tốt đã vào giá, không còn người mua mới).</p>']
      ] },
      { t: 'tip', x: 'Điều an toàn và sinh lời nhất là mua khi <b>không ai thích</b> nó: sự phổ biến, và do đó giá, chỉ có thể đi một hướng — lên.' },
      { t: 'warn', x: 'Người thua lỗ lớn nhất (Nifty Fifty 1969, Internet 1999, MBS 2006) đều “định giá cho sự hoàn hảo”, “trên bệ đỡ phổ biến”, “không gì có thể sai”. Trả tiền cho sự hoàn hảo là một trong những điều rủi ro nhất.' }
    ] },
    { icon: '🫧', title: 'Bong bóng và bốn đường đến lợi nhuận', blocks: [
      { t: 'p', x: 'Mọi bong bóng bắt đầu từ một phần sự thật (hoa tulip đẹp và hiếm; Internet thay đổi thế giới; giá nhà chỉ tăng). Người thông minh vào trước; kẻ khác thấy người ta kiếm tiền mà vào theo, đẩy giá; người ta càng ít nghĩ đến giá hợp lý. Trong bong bóng “hấp dẫn” thành “hấp dẫn bằng mọi giá”; <b>lý thuyết kẻ ngốc lớn hơn</b> chỉ đúng đến khi hết kẻ ngốc.' },
      { t: 'list', items: [
        'Đỉnh xảy ra khi người giữ lại cuối cùng thành người mua; thường không liên quan tới yếu tố cơ bản.',
        '“Giá quá cao” không có nghĩa bước tiếp theo là giảm — có thể kéo dài hoặc cao hơn nữa. Nhưng <b>cuối cùng định giá phải có ý nghĩa</b>.',
        'Người ta bị hút bởi khoản đầu tư (và nhà quản lý) mới hoạt động tốt dù ít liên quan hiệu suất tương lai.'
      ] },
      { t: 'h3', x: 'Bốn con đường đến lợi nhuận đầu tư' },
      { t: 'table', head: ['Con đường', 'Đánh giá của Marks'], rows: [
        ['Giá trị nội tại tăng', 'Khó dự báo; kỳ vọng phổ biến đã nằm trong giá. Nhà đầu tư kiểm soát (PE, BĐS) có thể tạo giá trị nhưng tốn thời gian.'],
        ['Dùng đòn bẩy', 'Không làm khoản đầu tư tốt hơn, chỉ <b>khuếch đại</b> lãi/lỗ và thêm rủi ro phá sản (bị đòi nợ khi giá và thanh khoản xấu).'],
        ['Bán cao hơn giá trị', 'Dựa vào người mua phi lý — không đáng tin.'],
        ['<b>Mua dưới giá trị</b>', '<b>Đáng tin nhất</b>: giá trị như nam châm hút giá; chỉ cần thị trường nhận ra sự thật.']
      ] },
      { t: 'warn', x: 'Ngay cả mua rẻ cũng không chắc: bạn có thể sai giá trị, sự kiện làm giá trị giảm, hoặc hội tụ lâu hơn khả năng chịu đựng — Keynes: “<b>Thị trường có thể phi lý lâu hơn bạn có thể giữ được khả năng thanh toán.</b>” Quan điểm vững về giá trị nội tại cho bạn niềm tin kiên trì.' }
    ] }
  ],
  summary: [
    'Thành công đến từ mua khôn ngoan, không phải mua “thứ tốt”: giá phải là điểm khởi đầu.',
    'Giá chịu ảnh hưởng của giá trị cơ bản, yếu tố kỹ thuật (cung cầu phi giá trị) và tâm lý.',
    'Tâm lý là khoa học quan trọng nhất; mua khi không ai thích, tránh mua ở đỉnh phổ biến.',
    'Bong bóng: phần sự thật + tham lam + bỏ qua định giá; cuối cùng định giá phải có ý nghĩa.',
    'Đáng tin nhất để kiếm tiền: mua dưới giá trị; tránh đòn bẩy làm khoản đầu tư xấu thành tai họa.'
  ],
  cards: [
    ['Điều quan trọng nhất của chương 4?', 'Mối quan hệ giữa giá và giá trị: không có ý tưởng nào tốt hay xấu bất kể giá.'],
    ['“Mua tốt là bán được một nửa”?', 'Nếu mua rẻ, câu hỏi bán, khi nào, giá nào sẽ tự được giải quyết.'],
    ['Ba nhân tố quyết định giá ngắn hạn?', 'Giá trị cơ bản, yếu tố kỹ thuật, tâm lý.'],
    ['Yếu tố kỹ thuật là gì?', 'Cung cầu không liên quan giá trị: bán cưỡng bức, dòng tiền vào/ra quỹ.'],
    ['Vì sao phải tránh làm người bán bị ép?', 'Bạn bán ở đáy bất chấp giá; cần vốn dài hạn và sức bền tâm lý.'],
    ['Đầu tư là cuộc thi gì?', 'Cuộc thi sự phổ biến; mua ở đỉnh phổ biến là nguy hiểm nhất.'],
    ['Điều an toàn nhất để mua?', 'Thứ không ai thích — sự phổ biến chỉ có thể tăng.'],
    ['“Định giá cho sự hoàn hảo” nghĩa gì?', 'Giá giả định không thể có sai sót ⇒ rủi ro lớn.'],
    ['Lý thuyết kẻ ngốc lớn hơn?', 'Mua đắt vì tin sẽ có người trả cao hơn; chỉ đúng đến khi hết người mua.'],
    ['Bốn con đường lợi nhuận?', 'Giá trị tăng; đòn bẩy; bán cao hơn giá trị; mua dưới giá trị.'],
    ['Vì sao đòn bẩy không làm khoản đầu tư tốt hơn?', 'Chỉ khuếch đại lãi/lỗ và thêm rủi ro phá sản.'],
    ['Câu nói của Keynes?', 'Thị trường có thể phi lý lâu hơn bạn có thể giữ được khả năng thanh toán.']
  ],
  quiz: [
    { q: 'Điểm khởi đầu của nhà đầu tư giá trị là:', o: ['Câu chuyện hay', 'Giá cả', 'Quy mô công ty', 'Xu hướng'], a: 1, e: 'Giá so với giá trị.' },
    { q: 'Cổ phiếu công nghệ cuối 1990 cho thấy:', o: ['Công ty tốt luôn tốt', 'Mua bất kể giá là sai lầm', 'Công nghệ luôn thua', 'P/E vô nghĩa'], a: 1, e: 'Không có ý tưởng nào tốt bất kể giá.' },
    { q: 'Câu nói “Mua tốt là bán được một nửa” ám chỉ:', o: ['Phải bán nhanh', 'Mua rẻ làm câu hỏi bán dễ hơn', 'Chỉ mua một nửa', 'Không cần bán'], a: 1, e: 'Oaktree.' },
    { q: 'Yếu tố KHÔNG phải kỹ thuật:', o: ['Bán cưỡng bức do ký quỹ', 'Dòng tiền vào quỹ', 'Tăng trưởng lợi nhuận', 'Mua bắt buộc'], a: 2, e: 'Đó là yếu tố cơ bản.' },
    { q: 'Khoa học quan trọng nhất trong đầu tư theo trích dẫn:', o: ['Kế toán', 'Kinh tế', 'Tâm lý học', 'Toán'], a: 2, e: 'Ai thích nó bây giờ và sau này.' },
    { q: 'Điều nguy hiểm nhất trong cuộc thi phổ biến:', o: ['Mua khi không ai thích', 'Mua ở đỉnh phổ biến', 'Giữ tiền mặt', 'Mua rẻ'], a: 1, e: 'Không còn người mua mới.' },
    { q: 'Đòn bẩy làm gì?', o: ['Làm khoản đầu tư tốt hơn', 'Khuếch đại lãi/lỗ, thêm rủi ro phá sản', 'Giảm rủi ro', 'Tăng giá trị'], a: 1, e: 'Không đổi chất lượng khoản đầu tư.' },
    { q: 'Con đường đáng tin nhất đến lợi nhuận:', o: ['Dự báo tăng trưởng', 'Bán cho kẻ ngốc lớn hơn', 'Mua dưới giá trị', 'Dùng đòn bẩy'], a: 2, e: 'Giá trị như nam châm hút giá.' },
    { q: 'Câu của Keynes nhắc điều gì?', o: ['Thị trường luôn đúng', 'Hội tụ giá trị có thể lâu hơn khả năng chịu đựng của bạn', 'Nên dùng đòn bẩy', 'Cổ phiếu tăng mãi'], a: 1, e: 'Rủi ro thanh toán.' },
    { q: 'Trong bong bóng “hấp dẫn” biến thành:', o: ['Hấp dẫn nếu giá hợp lý', 'Hấp dẫn bất kể giá', 'Không hấp dẫn', 'Phi rủi ro'], a: 1, e: 'Mất khái niệm giá hợp lý.' }
  ],
  match: [
    ['Tâm lý', 'Yếu tố tác động mạnh đến giá ngắn hạn'],
    ['Người bán bị ép', 'Nguồn món hời tốt nhất'],
    ['Kẻ ngốc lớn hơn', 'Lý thuyết bong bóng: sẽ có người trả cao hơn'],
    ['Đòn bẩy', 'Khuếch đại lãi lỗ'],
    ['Mua dưới giá trị', 'Con đường đáng tin nhất'],
    ['Định giá cho sự hoàn hảo', 'Dấu hiệu rủi ro lớn'],
    ['Cuộc thi phổ biến', 'Hình ảnh cho tâm lý thị trường']
  ]
});
