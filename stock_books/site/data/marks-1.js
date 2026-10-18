// Điều quan trọng nhất (Howard Marks) – Chương 1–2.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.marks = BOOK_DATA.marks || { chapters: [] };
BOOK_DATA.marks.chapters.push({
  n: 1,
  title: 'Suy nghĩ cấp thứ hai',
  intro: 'Đầu tư là nghệ thuật nhiều hơn khoa học. Ai cũng có thể đạt lợi nhuận trung bình bằng quỹ chỉ số; muốn vượt trội thì phải nghĩ khác và nghĩ đúng hơn đám đông — đó là tư duy cấp hai.',
  sections: [
    { icon: '🎨', title: 'Đầu tư là nghệ thuật, không phải thuật toán', blocks: [
      { t: 'key', x: 'Không có quy tắc nào luôn hiệu quả: môi trường không kiểm soát được, hoàn cảnh hiếm khi lặp lại, <b>tâm lý</b> chi phối thị trường nên quan hệ nhân–quả không đáng tin. Một phương pháp có hiệu quả sẽ bị bắt chước và <b>tự làm mất tác dụng</b>.' },
      { t: 'list', items: [
        'Phương pháp đầu tư phải <b>trực giác và thích ứng</b> hơn là cố định, cơ học.',
        'Ai cũng đạt lợi nhuận thị trường bằng quỹ chỉ số; nhà đầu tư thành công muốn <b>vượt thị trường</b> (Klarman: hạn chế rủi ro quan trọng không kém — mất 45% khi thị trường mất 50% là “thắng kiểu Pyrrhus”).',
        'Vì mọi người đều muốn kiếm tiền, các thị trường rất cạnh tranh; lợi thế đến từ <b>tư duy nhạy bén hơn</b>, không phải thể lực hay thiết bị.'
      ] }
    ] },
    { icon: '🧠', title: 'Cấp thứ nhất và cấp thứ hai', blocks: [
      { t: 'table', head: ['Tình huống', 'Cấp thứ nhất (nông)', 'Cấp thứ hai (sâu)'], rows: [
        ['Công ty tốt', '“Công ty tốt, hãy mua.”', '“Tốt, nhưng ai cũng nghĩ là <b>tuyệt vời</b> ⇒ giá quá đắt, bán.”'],
        ['Kinh tế xấu', '“Tăng trưởng thấp, lạm phát tăng, bán cổ phiếu.”', '“Triển vọng xấu nhưng mọi người đang bán tháo ⇒ <b>mua</b>.”'],
        ['Lợi nhuận', '“Lợi nhuận sẽ giảm, bán.”', '“Giảm <b>ít hơn kỳ vọng</b> ⇒ bất ngờ dễ chịu, mua.”']
      ] },
      { t: 'key', x: 'Cấp một: đơn giản, nông, <b>ai cũng làm được</b>, chỉ cần một ý kiến về tương lai. Cấp hai: sâu, phức tạp, rắc rối — và vì tư duy cấp một cho ra cùng kết luận với số đông, <b>nó không thể đưa đến kết quả vượt trội</b> (tập thể các nhà đầu tư chính là thị trường).' },
      { t: 'h3', x: 'Câu hỏi của người nghĩ cấp hai' },
      { t: 'steps', items: [
        'Phạm vi kết quả tương lai là gì? Kết quả nào tôi nghĩ sẽ xảy ra? Xác suất tôi đúng bao nhiêu?',
        '<b>Sự đồng thuận</b> nghĩ gì? Kỳ vọng của tôi khác sự đồng thuận ở đâu?',
        'Giá hiện tại phù hợp thế nào với quan điểm đồng thuận và với quan điểm của tôi?',
        'Tâm lý trong giá có quá lạc quan hay bi quan không?',
        'Giá sẽ ra sao nếu đồng thuận đúng, và nếu tôi đúng?'
      ] },
      { t: 'tip', x: 'Phép thử của con trai Marks, Andrew: <b>“Và ai mà không biết điều đó?”</b> Nếu ý tưởng ai cũng biết thì nó đã nằm trong giá.' },
      { t: 'warn', x: 'Cẩn thận những người “đơn giản hoá”: công ty môi giới (“ai cũng đầu tư được, 10 đô/giao dịch”), quỹ tương hỗ (“cứ để chúng tôi làm”), học giả, và những người không đo thành tích của mình hoặc đổ lỗi tổn thất cho xui xẻo.' }
    ] },
    { icon: '🔲', title: 'Ma trận 2×2: khác biệt và đúng hơn', blocks: [
      { t: 'table', head: ['', 'Hành vi thông thường', 'Hành vi khác thường'], rows: [
        ['<b>Phán đoán tốt hơn</b>', 'Hiệu suất bình thường — tốt', 'Hiệu suất <b>vượt trội</b>'],
        ['<b>Phán đoán kém hơn</b>', 'Hiệu suất bình thường — xấu', 'Hiệu suất <b>kém</b> (tệ hơn thị trường)']
      ] },
      { t: 'key', x: 'Muốn vượt trội cần <b>(1) quan điểm không đồng thuận</b> về giá trị và <b>(2) quan điểm đó chính xác</b>. Khác biệt <i>và</i> tốt hơn — đó là tư duy cấp hai. Không theo quy chuẩn không phải mục tiêu tự thân mà là một cách nghĩ.' },
      { t: 'p', x: 'Tin tốt: số đông tư duy cấp một làm tăng lợi nhuận dành cho người tư duy cấp hai. Tin xấu: không phải ai cũng làm được — Davis: “bạn không thể huấn luyện chiều cao”, hiểu biết sâu về đầu tư khó dạy.' },
      { t: 'tip', x: 'Tự hỏi trước khi chơi trò tổng bằng không: <b>tại sao tôi nằm ở nửa trên?</b> Và ngược lại, tại sao người khác thất bại (khung thời gian? hệ thống khuyến khích sai?).' }
    ] }
  ],
  summary: [
    'Đầu tư là nghệ thuật; phương pháp cố định sẽ bị bắt chước và mất tác dụng.',
    'Lợi nhuận trung bình thì dễ (quỹ chỉ số), vượt trội thì cần nghĩ khác và đúng hơn số đông.',
    'Cấp một: kết luận giống mọi người. Cấp hai: xét đồng thuận, xác suất, giá đã phản ánh gì.',
    'Phép thử: “Và ai mà không biết điều đó?”',
    'Vượt trội = quan điểm không đồng thuận + chính xác.'
  ],
  cards: [
    ['Vì sao không có quy tắc đầu tư nào luôn hiệu quả?', 'Môi trường không kiểm soát được, tâm lý thay đổi, và phương pháp bị bắt chước sẽ mất tác dụng.'],
    ['Đầu tư là nghệ thuật hay khoa học theo Marks?', 'Nghệ thuật nhiều hơn khoa học; phải trực giác và thích ứng.'],
    ['Suy nghĩ cấp thứ nhất là gì?', 'Đơn giản, nông; chỉ cần một ý kiến về tương lai, giống đa số.'],
    ['Suy nghĩ cấp thứ hai là gì?', 'Sâu, phức tạp: xét phạm vi kết quả, xác suất, sự đồng thuận và giá đã phản ánh gì.'],
    ['Vì sao tư duy cấp một không đem lại kết quả vượt trội?', 'Nó cho cùng kết luận như số đông; tập thể nhà đầu tư chính là thị trường.'],
    ['Ví dụ cấp hai về công ty tốt?', 'Công ty tốt nhưng ai cũng nghĩ tuyệt vời ⇒ cổ phiếu quá đắt ⇒ bán.'],
    ['Phép thử “Andrew”?', '“Và ai mà không biết điều đó?”'],
    ['Điều kiện để vượt trội?', 'Quan điểm không đồng thuận về giá trị VÀ quan điểm đó phải chính xác.'],
    ['Hai nhóm “đơn giản hoá” đầu tư?', 'Lính đánh thuê (môi giới, quỹ) và người truyền bá (học giả, người đánh giá quá cao kiểm soát).'],
    ['Câu hỏi cần tự hỏi trước khi cạnh tranh?', 'Tại sao tôi có lý do mong đợi nằm trong nửa trên?']
  ],
  quiz: [
    { q: 'Vì sao phương pháp đầu tư hiệu quả thường mất tác dụng?', o: ['Luật thay đổi', 'Bị bắt chước và hành động của nó làm đổi môi trường', 'Nhà đầu tư lười', 'Thiếu dữ liệu'], a: 1, e: 'Thị trường thích nghi.' },
    { q: '“Công ty tốt nhưng ai cũng nghĩ tuyệt vời, cổ phiếu quá đắt, hãy bán” là:', o: ['Cấp một', 'Cấp hai', 'Ngẫu nhiên', 'Đầu cơ'], a: 1, e: 'Xét kỳ vọng đồng thuận.' },
    { q: 'Cách nghĩ nào KHÔNG thuộc cấp hai?', o: ['Xác suất tôi đúng là bao nhiêu?', 'Sự đồng thuận nghĩ gì?', 'Tin tốt thì mua', 'Giá đã phản ánh gì?'], a: 2, e: 'Đó là cấp một.' },
    { q: 'Vì sao tư duy cấp một không thể vượt trội?', o: ['Quá phức tạp', 'Cho cùng kết luận như số đông', 'Chi phí cao', 'Luật cấm'], a: 1, e: 'Kết quả sẽ là trung bình.' },
    { q: 'Điều kiện để hiệu suất vượt trội:', o: ['Khác biệt', 'Đúng', 'Khác biệt và đúng', 'May mắn'], a: 2, e: 'Cả hai.' },
    { q: 'Ma trận 2×2: hành vi thông thường + phán đoán tốt hơn ⇒', o: ['Vượt trội', 'Bình thường', 'Tệ', 'Thua lỗ'], a: 1, e: 'Cần khác thường mới có kết quả khác thường.' },
    { q: 'Câu hỏi thử ý tưởng của Andrew Marks:', o: ['Giá bao nhiêu?', 'Và ai mà không biết điều đó?', 'Ai đang bán?', 'Có nên vay?'], a: 1, e: 'Thông tin phổ biến đã nằm trong giá.' },
    { q: 'Mất 45% khi thị trường mất 50% theo Klarman là:', o: ['Thành công lớn', 'Chiến thắng kiểu Pyrrhus', 'Kết quả tối ưu', 'Không có ý nghĩa'], a: 1, e: 'Rủi ro tuyệt đối quan trọng.' },
    { q: 'Quỹ chỉ số cho bạn:', o: ['Lợi nhuận vượt trội', 'Lợi nhuận thị trường', 'Lỗ', 'Lợi nhuận đảm bảo'], a: 1, e: 'Mua một chút của mọi thứ.' },
    { q: 'Điều gì làm tăng lợi nhuận có sẵn cho người cấp hai?', o: ['Nhiều người cấp một', 'Ít người đầu tư', 'Lãi suất thấp', 'Thuế thấp'], a: 0, e: 'Họ tạo ra định giá sai.' }
  ],
  match: [
    ['Cấp thứ nhất', '“Công ty tốt, mua”'],
    ['Cấp thứ hai', 'Xét đồng thuận và xác suất'],
    ['Đồng thuận', 'Quan điểm số đông đã nằm trong giá'],
    ['Quỹ chỉ số', 'Lợi nhuận thị trường'],
    ['“Ai mà không biết?”', 'Phép thử ý tưởng'],
    ['Khác biệt + đúng', 'Điều kiện vượt trội'],
    ['Nghệ thuật hơn khoa học', 'Bản chất của đầu tư']
  ]
});

BOOK_DATA.marks.chapters.push({
  n: 2,
  title: 'Hiểu biên độ thị trường (hiệu quả thị trường) và hạn chế',
  intro: 'Giả thuyết thị trường hiệu quả (EMH) rất ảnh hưởng nhưng không hoàn toàn đúng. Marks dùng nó để chọn nơi cạnh tranh: tránh các thị trường quá hiệu quả, tìm những chỗ định giá sai còn tồn tại.',
  sections: [
    { icon: '🏛️', title: 'Giả thuyết thị trường hiệu quả', blocks: [
      { t: 'p', x: 'Trường phái Chicago (thập niên 1960) đem lại các khái niệm: ngại rủi ro, biến động là rủi ro, lợi nhuận điều chỉnh rủi ro, rủi ro hệ thống/phi hệ thống, alpha/beta, đi bộ ngẫu nhiên và EMH.' },
      { t: 'list', items: [
        'Nhiều người tham gia thông minh, khách quan, chăm chỉ, tiếp cận thông tin gần như ngang nhau.',
        'Thông tin được phản ánh <b>đầy đủ và ngay lập tức</b> vào giá ⇒ giá = ước tính chính xác giá trị nội tại.',
        'Tài sản định giá để cho lợi suất điều chỉnh rủi ro “công bằng”; <b>không có bữa trưa miễn phí</b>.',
        'Hệ quả: “không thể đánh bại thị trường” ⇒ sự ra đời của <b>quỹ chỉ số</b> (phí thấp, chỉ theo thị trường).'
      ] },
      { t: 'tip', x: 'Marks hiểu “hiệu quả” là <b>nhanh chóng tiếp thu thông tin</b>, không phải “đúng”. Yahoo $237 (1/2000) → $11 (4/2001): thị trường không thể đúng cả hai lần.' },
      { t: 'warn', x: 'Vì sao khó chứng minh người giỏi tồn tại: 1–2 năm tốt có thể là may; thống kê cần ~64 năm dữ liệu; sự nổi tiếng của Buffett cho thấy người vượt trội đều là ngoại lệ. Quỹ “năm sao” chỉ xếp hạng tương đối giữa các quỹ, không so với chỉ số.' },
      { t: 'p', x: 'Hoài nghi lớn nhất của Marks nằm ở liên hệ <b>rủi ro – lợi nhuận</b>: nếu mua tài sản rủi ro hơn luôn cho lợi nhuận cao hơn thì chúng đã không còn rủi ro. Khi thời gian yên bình, người ta tin chỉ cần chịu rủi ro nhiều hơn là có lợi nhuận cao hơn — rồi bị nhắc nhở.' }
    ] },
    { icon: '🔍', title: 'Khi nào thị trường hiệu quả, khi nào không?', blocks: [
      { t: 'table', head: ['Hiệu quả hơn khi…', 'Kém hiệu quả hơn khi…'], rows: [
        ['Loại tài sản được biết rộng rãi, nhiều người theo dõi', 'Ít được biết đến, ít người theo dõi'],
        ['Được xã hội chấp nhận, không gây tranh cãi/cấm kỵ', 'Gây tranh cãi, cấm kỵ, bị xã hội ghét bỏ'],
        ['Ưu điểm rõ ràng, dễ hiểu trên bề mặt', 'Phức tạp, khó hiểu'],
        ['Thông tin phân phối rộng và đồng đều', 'Thông tin khó tiếp cận, phân bố không đều']
      ] },
      { t: 'tip', x: 'Ví dụ rất hiệu quả: ngoại hối (giá phụ thuộc tăng trưởng và lạm phát tương lai — ai biết nhiều hơn tất cả mọi người?). Ví dụ kém hiệu quả: cổ phiếu vốn hoá nhỏ, công ty có sự kiện đặc biệt, nợ châu Âu (Klarman: một lớp tài sản có thể đổi từ hiệu quả sang kém hiệu quả).' },
      { t: 'h3', x: 'Vì sao có sai lầm giá' },
      { t: 'list', items: [
        '<b>Tính khách quan mong manh</b>: con người bị lòng tham, sợ hãi, ghen tị chi phối.',
        'Phần lớn chuyên gia bị gắn vào “<b>silo</b>” (bộ phận cổ phiếu, trái phiếu…) ⇒ định giá sai ngoài ranh giới đó (Klarman: dao hai lưỡi).',
        'Rất ít nhà đầu tư thực sự bán khống ⇒ định giá cao không bị sửa nhanh.'
      ] }
    ] },
    { icon: '⚖️', title: 'Kết luận thực tế của Marks', blocks: [
      { t: 'key', x: 'Thị trường không hiệu quả: (1) giá thường sai, (2) lợi suất điều chỉnh rủi ro giữa các loại tài sản chênh lệch lớn, (3) một số nhà đầu tư <b>liên tục</b> vượt trội. Nó chỉ cung cấp “<b>nguyên liệu thô</b>” (sai lệch giá) — không đảm bảo ai cũng thắng: “trong mỗi ván poker đều có một con cá; nếu sau 45 phút bạn chưa biết ai là cá thì bạn là cá.”' },
      { t: 'steps', items: [
        '<b>Không có thị trường nào hoàn toàn hiệu quả hay hoàn toàn không</b> — chỉ là mức độ.',
        'Hiệu quả là “<b>giả định có thể bác bỏ</b>”: coi là đúng cho đến khi có lý do tin rằng ở trường hợp này nó không đúng.',
        'Bất hiệu quả là <b>điều kiện cần</b> nhưng chưa đủ: vẫn phải có cái nhìn sâu hơn người khác.',
        '<b>Giới hạn nỗ lực vào những thị trường tương đối kém hiệu quả</b>, nơi chăm chỉ và kỹ năng đem lại kết quả.'
      ] },
      { t: 'h3', x: 'Năm câu hỏi trước khi hành động' },
      { t: 'list', items: [
        'Tại sao món hời tồn tại dù hàng nghìn người sẵn sàng đẩy giá lên?',
        'Lợi suất có vẻ hào phóng — có rủi ro tiềm ẩn nào bị bỏ qua không?',
        'Tại sao người bán sẵn lòng bán ở mức giá để bạn lãi vượt mức?',
        'Bạn có thực sự biết nhiều hơn người bán không?',
        'Nếu đề xuất này tuyệt vời, sao chưa ai chớp lấy?'
      ] },
      { t: 'tip', x: 'Nhiều món hời tốt nhất nằm ở chỗ <b>người khác không thể hoặc không muốn làm</b> (Greenblatt: khoản đầu tư kém hấp dẫn ngắn hạn thường bị chuyên gia tránh vì áp lực hiệu suất). Chuyện ngụ ngôn: giáo sư không nhặt tờ 10 đô vì “nếu thật thì đã có người nhặt rồi” — sinh viên nhặt và đi uống bia.' },
      { t: 'p', x: 'Lý thuyết nên <b>cho ta thông tin chứ không chi phối</b>: bỏ qua nó dễ mua 50 chứng khoán tương quan mà tưởng mình đa dạng hoá; nhưng tin mù quáng thì bỏ tìm kiếm món hời và giao hết cho máy tính.' }
    ] }
  ],
  summary: [
    'EMH: giá phản ánh nhanh và hợp lý mọi thông tin ⇒ khó đánh bại thị trường ⇒ quỹ chỉ số.',
    'Marks: “hiệu quả” = tiếp thu nhanh, không phải luôn đúng; tâm lý và silo tạo định giá sai.',
    'Thị trường hiệu quả hơn khi tài sản phổ biến, được chấp nhận, dễ hiểu, thông tin đều.',
    'Bất hiệu quả là điều kiện cần cho vượt trội, không phải đủ; cần kỹ năng hơn người khác.',
    'Chọn thị trường kém hiệu quả để tập trung nỗ lực; coi hiệu quả là giả định có thể bác bỏ.'
  ],
  cards: [
    ['EMH là gì?', 'Thông tin được phản ánh đầy đủ, nhanh vào giá; giá = giá trị nội tại; không có bữa trưa miễn phí.'],
    ['Marks hiểu “hiệu quả” thế nào?', 'Nhanh chóng tiếp thu thông tin, không phải luôn đúng.'],
    ['Hệ quả thực tiễn lớn của EMH?', 'Sự phát triển của quỹ chỉ số (đầu tư thụ động).'],
    ['Vì sao một hai năm tốt không chứng minh được gì?', 'May mắn có thể tạo ra kết quả; thống kê cần rất nhiều năm (~64).'],
    ['Điều kiện khiến thị trường hiệu quả hơn?', 'Tài sản phổ biến, xã hội chấp nhận, ưu điểm rõ ràng, thông tin phân bố đều.'],
    ['Điều kiện khiến thị trường kém hiệu quả?', 'Ít người biết, gây tranh cãi/cấm kỵ, phức tạp, thông tin khó tiếp cận.'],
    ['Giả định EMH mong manh nhất?', 'Tính khách quan của nhà đầu tư (lòng tham, sợ hãi, ghen tị).'],
    ['Bất hiệu quả cho nhà đầu tư điều gì?', '“Nguyên liệu thô” (định giá sai); không đảm bảo lợi nhuận hào phóng.'],
    ['Điều kiện cần và đủ để vượt trội?', 'Cần: thị trường kém hiệu quả. Đủ: có cái nhìn sâu hơn người khác.'],
    ['“Giả định có thể bác bỏ” nghĩa là?', 'Coi thị trường hiệu quả cho đến khi có lý do chính đáng tin điều ngược lại.'],
    ['Câu hỏi “Nếu tuyệt vời sao chưa ai chớp?” nhằm gì?', 'Kiểm tra vì sao món hời còn tồn tại / rủi ro bị bỏ qua.'],
    ['Lời khuyên cuối về lý thuyết?', 'Cho lý thuyết thông tin cho quyết định chứ không chi phối.']
  ],
  quiz: [
    { q: 'Hệ quả nào là từ EMH?', o: ['Quỹ chỉ số phát triển', 'Thị trường luôn tăng', 'Cấm bán khống', 'Giá luôn đúng'], a: 0, e: 'Vì khó đánh bại thị trường.' },
    { q: 'Marks hiểu “hiệu quả” là:', o: ['Luôn đúng', 'Nhanh chóng tiếp thu thông tin', 'Không có biến động', 'Có chi phí thấp'], a: 1, e: 'Không đồng nghĩa với đúng.' },
    { q: 'Ví dụ Yahoo $237 → $11 cho thấy:', o: ['Thị trường luôn đúng', 'Thị trường sai ít nhất một lần', 'Cổ phiếu công nghệ an toàn', 'Phí thấp'], a: 1, e: 'Giá không thể đúng cả hai lần.' },
    { q: 'Tài sản nào có khả năng kém hiệu quả hơn?', o: ['Cổ phiếu blue-chip được phân tích rộng rãi', 'Tài sản gây tranh cãi, ít người theo dõi', 'Ngoại hối', 'Chỉ số S&P'], a: 1, e: 'Đảo ngược các điều kiện hiệu quả.' },
    { q: 'Giả định nào của EMH mong manh nhất theo Marks?', o: ['Nhiều nhà đầu tư', 'Tính khách quan', 'Thông tin có sẵn', 'Giao dịch được'], a: 1, e: 'Con người bị cảm xúc chi phối.' },
    { q: 'Bất hiệu quả đối với nhà đầu tư là:', o: ['Đảm bảo lợi nhuận', 'Điều kiện cần cho vượt trội', 'Bất lợi', 'Điều kiện đủ'], a: 1, e: 'Nhưng chưa đủ.' },
    { q: 'Hiệu quả là “giả định có thể bác bỏ” nghĩa là:', o: ['Luôn sai', 'Coi đúng đến khi có lý do chính đáng nghĩ khác', 'Không cần xét', 'Luôn đúng tuyệt đối'], a: 1, e: 'Tôn trọng hiệu quả nhưng không tuyệt đối hoá.' },
    { q: 'Ví dụ thị trường rất hiệu quả theo Marks:', o: ['Cổ phiếu nhỏ', 'Ngoại hối', 'Nợ khó khăn', 'Tài sản cấm kỵ'], a: 1, e: 'Ít ai biết nhiều hơn về tăng trưởng và lạm phát.' },
    { q: 'Câu “trong mỗi ván poker đều có một con cá” nhắc điều gì?', o: ['Đầu tư là cờ bạc', 'Nếu bạn không biết ai là con cá thì có thể chính bạn', 'Cần may mắn', 'Cần vay'], a: 1, e: 'Trong thị trường kém hiệu quả vẫn có người thua.' },
    { q: 'Marks khuyên giới hạn nỗ lực ở đâu?', o: ['Thị trường hiệu quả nhất', 'Thị trường tương đối kém hiệu quả', 'Chỉ trái phiếu', 'Chỉ ngoại hối'], a: 1, e: 'Chăm chỉ và kỹ năng có tác dụng ở đó.' }
  ],
  match: [
    ['EMH', 'Giá phản ánh đầy đủ thông tin'],
    ['Quỹ chỉ số', 'Hệ quả thực tiễn của EMH'],
    ['Silo', 'Chuyên gia bị gắn vào một ngách thị trường'],
    ['Alpha', 'Kỹ năng đầu tư vượt thị trường'],
    ['Bữa trưa miễn phí', 'Lợi suất cao không đi kèm rủi ro'],
    ['Giả định có thể bác bỏ', 'Hiệu quả đúng cho đến khi chứng minh ngược lại'],
    ['Nguyên liệu thô', 'Định giá sai mà thị trường kém hiệu quả cung cấp']
  ]
});
