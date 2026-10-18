// Phần 2: Kinh tế vĩ mô & quốc tế – Chương 13–16 (bài 48–65).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.kinhte = BOOK_DATA.kinhte || { chapters: [] };
BOOK_DATA.kinhte.chapters.push(

/* ======================= CHƯƠNG 13 ======================= */
{
  n: 13,
  title: 'Công nghiệp hóa, công nghệ và năng lực cạnh tranh',
  intro: 'Bài 48–52: công nghiệp hóa bằng bảo hộ hay bằng xuất khẩu, chính sách công nghệ, hạ tầng mềm và vì sao “năng lực cạnh tranh quốc gia” không giống cạnh tranh của doanh nghiệp.',
  sections: [
    { icon: '🛡️', title: 'Hai chiến lược công nghiệp hóa (bài 48–49)', blocks: [
      { t: 'p', x: 'Khi phát triển, tỷ trọng công nghiệp tăng còn nông nghiệp giảm. Câu hỏi: làm sao xây dựng khu vực công nghiệp có thể tự duy trì tăng trưởng? Có hai chiến lược.' },
      { t: 'table', head: ['', 'Bảo hộ (thay thế nhập khẩu)', 'Hướng về xuất khẩu'], rows: [
        ['Ý tưởng', 'Thuế quan, hạn ngạch, cấm nhập → nâng giá để doanh nghiệp nội học cách hiệu quả', 'Doanh nghiệp trong và ngoài nước đều có thể cạnh tranh, mở rộng nhờ thị trường toàn cầu'],
        ['Vấn đề / ưu điểm', 'Khi đã quen được bảo hộ thì <b>rất khó sống thiếu nó</b>; doanh nghiệp bỏ sức vận động xin thêm bảo hộ thay vì giảm chi phí. Công nghiệp hóa chi phí cao thường tiếp tục như vậy.', 'Học cách phản ứng với cầu, công nghệ, chất lượng; áp lực đổi mới liên tục; <b>quy mô lớn</b> ngay cả khi thị trường nội địa nhỏ'],
        ['Hệ quả', 'Không đạt quy mô kinh tế như nhà xuất khẩu; người dùng đầu vào đắt cũng khó xuất khẩu; xuất khẩu chậm, nhập tư liệu hiện đại phải vay → nợ lại vào ngành chi phí cao, ít việc làm, ít xuất khẩu → <b>đình trệ</b> (Ấn Độ, Brazil)', 'Các cụm doanh nghiệp nhỏ cung ứng đầu vào mọc lên; dịch vụ tiếp thị, sửa chữa, thiết kế phát triển → nền công nghiệp rộng và sâu']
      ] },
      { t: 'tip', x: 'Công nghiệp hóa hướng xuất khẩu vẫn có nhiều sản xuất cho thị trường trong nước, nhưng là sản xuất <b>cạnh tranh với hàng nhập, chỉ bảo hộ vừa phải</b> — đúng điều AFTA, BTA và WTO đòi hỏi. Việt Nam sẽ phải bỏ những ngành cần bảo hộ cao.' }
    ] },
    { icon: '🔧', title: 'Chính sách công nghệ cho tăng trưởng (bài 50)', blocks: [
      { t: 'key', x: '<b>Công nghệ</b> là cách làm việc. Có thể nằm trong máy móc (<b>“cứng”</b>) hoặc tinh tế hơn như quản lý hàng tồn kho “đúng lúc” và cách tổ chức tốt hơn (<b>“mềm”</b>). Công nghệ giúp mỗi đơn vị vốn và lao động năng suất hơn nên đóng góp nhiều cho tăng trưởng.' },
      { t: 'p', x: 'Công nghệ không miễn phí: ngay việc chọn loại tốt nhất cũng tốn kém. Chính phủ tạo điều kiện để doanh nghiệp muốn và có thể chọn, thích ứng, thậm chí tạo công nghệ năng suất bằng cách:' },
      { t: 'steps', items: [
        '<b>Phát triển hệ thống giáo dục chất lượng</b> cung cấp lao động có học vấn.',
        '<b>Cho phép doanh nghiệp cạnh tranh bằng công nghệ.</b>',
        '<b>Hoàn thiện luật pháp và thực thi</b> (bảo vệ quyền sở hữu trí tuệ).'
      ] },
      { t: 'warn', x: 'Chỉ doanh nghiệp <b>cạnh tranh</b> mới có xu hướng nâng cấp công nghệ. Độc quyền có thể mua thiết bị “tốt nhất” nhưng ít động cơ theo kịp cải tiến. Chìa khóa: gắn doanh nghiệp Việt vào nền kinh tế toàn cầu.' }
    ] },
    { icon: '🛣️', title: 'Hạ tầng mềm (bài 51)', blocks: [
      { t: 'p', x: '<b>Hạ tầng cứng</b> là đường, cảng, nước, viễn thông, điện — giúp sản xuất khác dễ dàng. Đầu tư vào đó là thiết yếu, nhưng cần đi kèm <b>hạ tầng mềm</b> (thể chế, quản lý, chính sách) mới phát huy hết tiềm năng.' },
      { t: 'table', head: ['Ví dụ', 'Hạ tầng cứng tốt nhưng mềm kém sẽ…'], rows: [
        ['Cảng', 'Có luồng sâu, cầu tàu, cần cẩu tốt nhưng phí bốc dỡ cao hoặc thủ tục thông quan chậm → chi phí tăng. Tàu lớn thuê hàng chục nghìn USD/ngày nên chờ thêm 1 ngày rất tốn.'],
        ['Điện', 'Nếu nhiều điện bị trộm hoặc không thu được tiền, công ty không đủ khả năng mở rộng hay duy trì đường dây → lãng phí đầu tư'],
        ['Nước', 'Rò rỉ nước sạch từ ống vỡ, nước bẩn thấm vào, vấn đề sức khỏe cộng đồng'],
        ['Dịch vụ độc quyền', 'Cước điện thoại quốc tế VN từng thuộc loại cao nhất thế giới, không phải vì chi phí cao mà vì công ty dùng nó làm nguồn tiền cho mục đích khác']
      ] },
      { t: 'key', x: 'Hạ tầng cứng + hạ tầng mềm tốt ⇒ tăng trưởng nhanh hơn và dùng vốn đầu tư hiệu quả hơn.' }
    ] },
    { icon: '🏆', title: 'Năng lực cạnh tranh: quốc gia và doanh nghiệp (bài 52)', blocks: [
      { t: 'p', x: 'Theo quan niệm truyền thống, một <b>doanh nghiệp</b> cạnh tranh khi sản xuất sản phẩm tương tự với giá thấp hơn hoặc chất lượng/dịch vụ vượt trội để giữ chỗ đứng trên thị trường; không cạnh tranh nổi sẽ bị đào thải. Đó là <b>trò chơi có tổng bằng không</b> trong ngành.' },
      { t: 'warn', x: 'Gần đây khái niệm này được áp dụng cho <b>quốc gia</b>, nhưng chưa có đồng thuận: cạnh tranh quốc tế <b>không thể đào thải một quốc gia</b> như đào thải doanh nghiệp. Trên thực tế ngày càng nhiều tổ chức xếp hạng nền kinh tế, và các hãng lớn dựa vào các bảng xếp hạng này để ra quyết định.' },
      { t: 'tip', x: 'Hướng thực tế: cải thiện liên tục môi trường kinh doanh để doanh nghiệp trong nước nâng cấp công nghệ và tăng trưởng cao.' }
    ] }
  ],
  summary: [
    'Bảo hộ dễ thành thói quen, đẩy công nghiệp hóa vào chi phí cao và đình trệ (Ấn Độ, Brazil).',
    'Công nghiệp hóa bằng xuất khẩu: cạnh tranh, đổi mới, quy mô, cụm cung ứng; hiệp định AFTA, BTA, WTO đòi bảo hộ vừa phải.',
    'Công nghệ cứng và mềm; chính phủ thúc đẩy bằng giáo dục, cạnh tranh, luật pháp; độc quyền ít nâng cấp.',
    'Hạ tầng mềm quyết định hiệu quả của hạ tầng cứng.',
    'Cạnh tranh của quốc gia khác doanh nghiệp: không bị “đào thải” như doanh nghiệp.'
  ],
  cards: [
    ['Hai chiến lược công nghiệp hóa?', 'Bảo hộ (thuế quan, hạn ngạch, cấm nhập) và hướng về xuất khẩu.'],
    ['Vấn đề của bảo hộ lâu dài?', 'Doanh nghiệp quen được bảo hộ, dành sức vận động xin thêm bảo hộ thay vì giảm chi phí.'],
    ['Vì sao công nghiệp hóa chi phí cao dẫn tới đình trệ?', 'Không có quy mô như xuất khẩu, xuất khẩu chậm, nhập tư liệu phải vay, lại đổ vào ngành chi phí cao ít việc làm, ít xuất khẩu.'],
    ['Nước nào rơi vào bẫy này?', 'Ấn Độ, Brazil (dù thị trường nội địa lớn hơn Việt Nam).'],
    ['Ưu điểm công nghiệp hóa hướng xuất khẩu?', 'Học phản ứng cầu, công nghệ, chất lượng; áp lực đổi mới; quy mô lớn; cụm doanh nghiệp cung ứng và dịch vụ.'],
    ['Công nghệ “cứng” và “mềm”?', 'Cứng: trong máy móc; mềm: quản lý, hệ thống (vd quản lý tồn kho đúng lúc).'],
    ['Ba việc chính phủ nên làm cho công nghệ?', 'Giáo dục chất lượng; cho phép cạnh tranh bằng công nghệ; luật pháp và thực thi tốt hơn.'],
    ['Vì sao độc quyền ít nâng cấp công nghệ?', 'Ít động cơ theo kịp cải tiến dù có thể mua thiết bị “tốt nhất”.'],
    ['Hạ tầng cứng và mềm?', 'Cứng: đường, cảng, điện, nước, viễn thông. Mềm: thể chế, quản lý, chính sách, thủ tục.'],
    ['Ví dụ hạ tầng mềm kém phá hạ tầng cứng?', 'Cảng tốt nhưng phí cao, thủ tục chậm; điện bị trộm; ống nước rò rỉ.'],
    ['Tính “tổng bằng không” của cạnh tranh doanh nghiệp?', 'Doanh nghiệp không cạnh tranh nổi bị đào thải khỏi thị trường.'],
    ['Vì sao cạnh tranh quốc gia không giống doanh nghiệp?', 'Cạnh tranh quốc tế không thể đào thải một quốc gia như một doanh nghiệp.']
  ],
  quiz: [
    { q: 'Hạn chế chính của công nghiệp hóa bằng bảo hộ:', o: ['Quá nhiều xuất khẩu', 'Doanh nghiệp quen bảo hộ, khó giảm chi phí', 'Giá thấp', 'Quá nhiều việc làm'], a: 1, e: 'Vận động xin bảo hộ thay vì cải tiến.' },
    { q: 'Ấn Độ, Brazil là ví dụ của:', o: ['Công nghiệp hóa bằng xuất khẩu thành công', 'Công nghiệp hóa chi phí cao đình trệ', 'Thiên đường thuế', 'Độc quyền tự nhiên'], a: 1, e: 'Dù thị trường nội địa lớn.' },
    { q: 'Ưu điểm của hướng xuất khẩu:', o: ['Không cần cạnh tranh', 'Hưởng lợi quy mô nhờ thị trường toàn cầu lớn', 'Giá cao', 'Bảo hộ tối đa'], a: 1, e: 'Dù thị trường nội địa nhỏ.' },
    { q: 'Hiệp định AFTA, BTA, WTO đòi hỏi:', o: ['Bảo hộ cao', 'Bảo hộ vừa phải với sản xuất cạnh tranh hàng nhập', 'Cấm xuất khẩu', 'Không có'], a: 1, e: 'Việt Nam phải bỏ ngành cần bảo hộ cao.' },
    { q: 'Công nghệ “mềm” là:', o: ['Máy móc đắt tiền', 'Quản lý và hệ thống tốt hơn', 'Phần mềm', 'Nhà máy mới'], a: 1, e: 'Ví dụ quản lý tồn kho đúng lúc.' },
    { q: 'Điều nào KHÔNG phải việc chính phủ nên làm để thúc đẩy công nghệ?', o: ['Giáo dục chất lượng', 'Cho phép cạnh tranh', 'Cải thiện luật pháp', 'Bảo hộ độc quyền'], a: 3, e: 'Độc quyền ít động cơ nâng cấp.' },
    { q: 'Hạ tầng mềm bao gồm:', o: ['Cầu cảng', 'Thể chế, thủ tục, quản lý', 'Đường cao tốc', 'Đường dây điện'], a: 1, e: 'Cứng là vật chất.' },
    { q: 'Cước điện thoại quốc tế VN từng cao vì:', o: ['Chi phí thực sự cao', 'Công ty độc quyền dùng nó làm nguồn tiền cho mục đích khác', 'Không có cạnh tranh nhưng giá thấp', 'Thuế thấp'], a: 1, e: 'Một ví dụ giá cao của độc quyền.' },
    { q: 'Khác biệt chính giữa cạnh tranh của doanh nghiệp và quốc gia:', o: ['Không khác', 'Cạnh tranh quốc tế không thể “đào thải” một quốc gia như doanh nghiệp', 'Quốc gia luôn thắng', 'Doanh nghiệp không bị đào thải'], a: 1, e: 'Chưa có định nghĩa thống nhất cho cạnh tranh quốc gia.' }
  ],
  match: [
    ['Bảo hộ', 'Thuế quan, hạn ngạch, cấm nhập'],
    ['Hướng xuất khẩu', 'Quy mô nhờ thị trường toàn cầu'],
    ['Công nghệ cứng', 'Nằm trong máy móc'],
    ['Công nghệ mềm', 'Quản lý và hệ thống tốt hơn'],
    ['Hạ tầng mềm', 'Thể chế, thủ tục, quản lý'],
    ['Trò chơi tổng bằng không', 'Cạnh tranh giữa doanh nghiệp trong ngành']
  ]
},

/* ======================= CHƯƠNG 14 ======================= */
{
  n: 14,
  title: 'Viện trợ, FDI và đo lường hiệu quả công',
  intro: 'Bài 53–55 và 64: tiền viện trợ có tính “thay thế được”, viện trợ không miễn phí, vì sao FDI dồn về vài tỉnh (khối lượng tới hạn), và so sánh hiệu quả chính quyền địa phương.',
  sections: [
    { icon: '🔀', title: 'Tính thay thế được của tiền viện trợ (bài 53)', blocks: [
      { t: 'key', x: '<b>Tính thay thế được (fungibility)</b>: khi tiền đã đến tay người nhận thì không còn phân biệt được với số tiền họ đã có. Mọi đồng tiền đều thay thế được dù nguồn gốc.' },
      { t: 'list', items: [
        '<b>Họ hàng nghèo:</b> bạn cho tiền để đóng học phí cho con anh ta; tiền tiết kiệm của anh ta vốn dành cho học phí nay được rảnh để chi cho rượu → tiền của bạn gián tiếp tài trợ rượu.',
        '<b>Viện trợ bệnh viện:</b> nếu nước nhận đằng nào cũng xây bệnh viện đó, viện trợ chỉ giải phóng nguồn lực của họ sang việc khác; nhà tài trợ chỉ thấy bệnh viện được xây, không biết viện trợ thực sự tài trợ cho việc gì.'
      ] },
      { t: 'tip', x: 'Phía ủng hộ viện trợ nói nó hiệu quả hơn vì đi kèm hỗ trợ kỹ thuật và giám sát quản lý. Nhưng đôi khi các yêu cầu này làm tăng tổng chi phí dự án.' }
    ] },
    { icon: '💰', title: 'Viện trợ nước ngoài: những điều cần biết (bài 64)', blocks: [
      { t: 'p', x: 'Tại hội nghị các nhà tài trợ tháng 12/2003, ODA cam kết cho Việt Nam năm 2004 đạt kỷ lục. Ba lưu ý:' },
      { t: 'steps', items: [
        '<b>Giải ngân thấp hơn cam kết</b>: phụ thuộc năng lực tạo dự án và đáp ứng điều kiện của nhà tài trợ. Trong thập kỷ qua chỉ <b>47%</b> cam kết cho VN được giải ngân.',
        '<b>Không phải mọi viện trợ là cho không</b>: vay ưu đãi có <b>yếu tố cho không từ 25% trở lên</b> cũng tính là ODA. Yếu tố cho không = chênh lệch giữa số tiền giải ngân và hiện giá các khoản phải trả tương lai. Thế hệ sau sẽ phải trả.',
        '<b>Viện trợ ràng buộc (tied aid)</b>: hai phần ba viện trợ cho VN là song phương và thường kèm yêu cầu mua hàng, dịch vụ của nước tài trợ; Ngân hàng Thế giới ước tính làm giảm giá trị viện trợ <b>25%</b>.'
      ] },
      { t: 'mnemo', x: 'Viện trợ còn gắn với lòng tự trọng quốc gia: chỉ nước nghèo nhất mới nhận. Thái Lan tuyên bố không cần viện trợ nữa. Câu hỏi: khi nào Việt Nam từ nước nhận thành nước tài trợ?' }
    ] },
    { icon: '🧲', title: 'FDI và khối lượng tới hạn (bài 54)', blocks: [
      { t: 'p', x: 'Giai đoạn 1988–2003, bốn tỉnh Đông Nam Bộ chỉ có 6,4% dân số VN nhưng nhận <b>31,5% FDI</b> cả nước; riêng 2001–2003 là <b>52,5%</b>. Một phần giải thích: <b>khối lượng tới hạn (critical mass)</b>.' },
      { t: 'steps', items: [
        'Khi khu vực đã có nhiều nhà sản xuất, các dịch vụ cho công nghiệp (ngân hàng, viễn thông, xử lý chất thải, vận chuyển…) <b>sẵn có và cạnh tranh</b>.',
        'Hàng trăm nghìn lao động tụ về → cầu lớn về giáo dục, đào tạo nghề, nhà ở, trung tâm mua sắm, giải trí.',
        'Các tiện ích cùng nguồn nhân lực đa dạng tạo <b>“chất lượng nơi ở”</b> hấp dẫn công nhân, kỹ sư, chuyên gia, quản lý → thu hút thêm đầu tư.'
      ] },
      { t: 'p', x: 'Chi phí sinh hoạt đắt đỏ, hạ tầng quá tải có làm giảm sức hấp dẫn? Câu trả lời là sản xuất công nghiệp tăng và ngân sách tỉnh tăng. Quảng Đông (Trung Quốc) nhận 150 tỷ USD FDI thực hiện và mỗi năm vẫn thêm trên 15 tỷ USD.' },
      { t: 'warn', x: 'Với các tỉnh khác: lợi thế <b>tĩnh</b> (vị trí đẹp, hạ tầng tốt, lao động rẻ, ưu đãi thuế) phải cạnh tranh với lợi thế <b>động</b> của khối lượng tới hạn. Họ cần tự tạo lợi thế động — trong đó cải thiện hạ tầng mềm là quan trọng.' }
    ] },
    { icon: '📏', title: 'Đo lường hiệu quả so sánh (bài 55)', blocks: [
      { t: 'p', x: 'Chính phủ luôn bị giới hạn nguồn lực; cầu về hàng hóa, dịch vụ công luôn vượt khả năng tài trợ. Cách phổ biến lấp khoảng trống tài khóa là tăng thu (tăng thuế, phí; hoặc vay rồi tăng thuế trả nợ). Cách khác: <b>tăng hiệu quả chi tiêu</b> — giảm chi phí (hiệu quả) và tăng chất lượng (hiệu lực) để cùng nguồn lực cung cấp nhiều hơn hoặc tốt hơn. Về chính trị thường tốt hơn tăng thuế.' },
      { t: 'key', x: '<b>Đo lường hiệu quả so sánh (CPM)</b>: so sánh chi tiêu và kết quả giữa các năm hoặc nhiều địa phương để đánh giá hiệu quả. Ở Mỹ, chính quyền địa phương công bố định kỳ chuẩn chi tiêu và kết quả để so với địa phương có đặc điểm nhân khẩu, địa lý, kinh tế tương đồng.' },
      { t: 'tip', x: 'Ngay cùng môi trường pháp lý, hiệu quả các tỉnh, địa phương rất khác nhau. CPM giúp họ <b>học lẫn nhau</b>, minh bạch và trách nhiệm giải trình hơn với dân.' }
    ] }
  ],
  summary: [
    'Tiền viện trợ có tính thay thế được: nguồn lực của nước nhận được giải phóng sang việc khác.',
    'ODA: giải ngân thấp hơn cam kết (VN 47%), gồm cả vay ưu đãi (yếu tố cho không ≥25%), viện trợ ràng buộc giảm giá trị 25%.',
    'Khối lượng tới hạn: cụm công nghiệp, dịch vụ, lao động, tiện ích tự củng cố thu hút FDI; các tỉnh khác phải tạo lợi thế động.',
    'CPM giúp chính quyền so sánh, học hỏi, minh bạch; tăng hiệu quả chi tiêu thay vì tăng thuế.'
  ],
  cards: [
    ['Fungibility là gì?', 'Tính thay thế được của tiền: tiền viện trợ không phân biệt được với tiền sẵn có.'],
    ['Ví dụ họ hàng nghèo?', 'Cho tiền học phí → tiền tiết kiệm của anh ta thoát ra chi cho rượu.'],
    ['Viện trợ bệnh viện có thể thay đổi gì?', 'Nếu nước đó đằng nào cũng xây, viện trợ giải phóng nguồn lực cho việc khác.'],
    ['ODA là gì?', 'Hỗ trợ phát triển chính thức (thường gọi viện trợ), gồm viện trợ không hoàn lại và vay ưu đãi.'],
    ['Tỷ lệ giải ngân ODA cho VN thập kỷ qua?', '47% cam kết.'],
    ['Vay ưu đãi tính ODA khi nào?', 'Có yếu tố cho không từ 25% trở lên.'],
    ['Viện trợ ràng buộc (tied aid)?', 'Phải mua hàng hóa, dịch vụ của nước tài trợ; WB ước tính giảm giá trị viện trợ 25%.'],
    ['4 tỉnh Đông Nam Bộ chiếm bao nhiêu FDI?', '31,5% FDI (1988–2003), 52,5% giai đoạn 2001–2003, với 6,4% dân số.'],
    ['Khối lượng tới hạn (critical mass)?', 'Khi đủ nhà máy, dịch vụ, lao động, tiện ích tạo vòng củng cố thu hút thêm đầu tư.'],
    ['Lợi thế tĩnh và động?', 'Tĩnh: vị trí, hạ tầng, lao động rẻ, thuế. Động: khối lượng tới hạn tự tăng.'],
    ['CPM là gì?', 'Đo lường hiệu quả so sánh chi tiêu và kết quả giữa các năm hoặc địa phương.'],
    ['Vì sao tăng hiệu quả chi tiêu hơn tăng thuế?', 'Dùng cùng nguồn lực cung cấp được nhiều hơn/tốt hơn; về chính trị dễ chấp nhận hơn.']
  ],
  quiz: [
    { q: 'Tính thay thế được của tiền (fungibility) nghĩa là:', o: ['Tiền luôn bị truy vết', 'Tiền viện trợ không phân biệt được với tiền sẵn có', 'Tiền không đổi', 'Tiền có màu'], a: 1, e: 'Người nhận có thể chi tiền sẵn có cho việc khác.' },
    { q: 'Viện trợ bệnh viện nhưng nước đó vốn đã định xây thì:', o: ['Nguồn lực của họ được giải phóng cho việc khác', 'Bệnh viện đắt hơn', 'Không có gì xảy ra', 'Viện trợ tăng gấp đôi'], a: 0, e: 'Nhà tài trợ không biết viện trợ thật sự tài trợ gì.' },
    { q: 'Tỷ lệ giải ngân ODA cho VN thập kỷ qua:', o: ['100%', '47%', '10%', '90%'], a: 1, e: 'Phụ thuộc năng lực tạo dự án và điều kiện.' },
    { q: 'Vay ưu đãi được xem là ODA khi yếu tố cho không từ:', o: ['5%', '10%', '25% trở lên', '90%'], a: 2, e: 'Ngưỡng nêu trong bài.' },
    { q: 'Viện trợ ràng buộc làm giảm giá trị viện trợ khoảng:', o: ['2%', '25%', '50%', '75%'], a: 1, e: 'Theo ước tính của WB.' },
    { q: 'Khối lượng tới hạn giải thích vì sao:', o: ['FDI dồn về vài tỉnh', 'Thuế giảm', 'Giá dầu tăng', 'Thất nghiệp tăng'], a: 0, e: 'Cụm sản xuất–dịch vụ–lao động tự củng cố.' },
    { q: 'Lợi thế “động” của vùng là:', o: ['Vị trí đẹp', 'Thuế thấp', 'Khối lượng tới hạn', 'Lao động rẻ'], a: 2, e: 'Các cái kia là lợi thế tĩnh.' },
    { q: 'Quảng Đông nhận khoảng bao nhiêu FDI thực hiện?', o: ['15 tỷ USD', '150 tỷ USD', '1,5 tỷ USD', '1.500 tỷ USD'], a: 1, e: 'Và mỗi năm thêm trên 15 tỷ.' },
    { q: 'Cách khác ngoài tăng thuế để lấp khoảng trống tài khóa:', o: ['Giảm chất lượng', 'Tăng hiệu quả chi tiêu', 'Đóng cửa trường', 'In tiền'], a: 1, e: 'Cùng nguồn lực nhưng cung cấp tốt hơn.' },
    { q: 'CPM giúp chính quyền:', o: ['Học lẫn nhau và minh bạch hơn', 'Tăng thuế', 'Đóng cửa', 'Thuê thêm người'], a: 0, e: 'So sánh với địa phương tương đồng.' }
  ],
  match: [
    ['Fungibility', 'Tiền viện trợ lẫn với tiền sẵn có'],
    ['Tied aid', 'Phải mua hàng của nước tài trợ'],
    ['Yếu tố cho không', 'Khác biệt giữa vốn giải ngân và hiện giá khoản trả'],
    ['Critical mass', 'Vòng củng cố thu hút FDI'],
    ['Lợi thế động', 'Khối lượng tới hạn'],
    ['CPM', 'So sánh chi tiêu và kết quả giữa các địa phương']
  ]
},

/* ======================= CHƯƠNG 15 ======================= */
{
  n: 15,
  title: 'Bán phá giá và thương mại công bằng',
  intro: 'Bài 56–59: bán phá giá là gì, vì sao nhiều nhà kinh tế nghi ngờ phá giá triệt hạ, phân biệt giá quốc tế và cách xác định “giá trị công bằng” với nền kinh tế phi thị trường.',
  sections: [
    { icon: '🏷️', title: 'Bán phá giá là gì? (bài 56)', blocks: [
      { t: 'p', x: 'Các nhà sản xuất VN đang vướng tranh chấp thương mại về giày chống thấm ở Canada, bật lửa gas ở EU, cá basa ở Mỹ — tất cả xoay quanh <b>bán phá giá</b>.' },
      { t: 'key', x: '<b>Bán phá giá (dumping)</b>: một hãng bán hàng ở thị trường nước ngoài <b>dưới giá trị công bằng</b> (giá bán ở thị trường nội địa hoặc chi phí sản xuất).' },
      { t: 'p', x: 'Lập luận chống: nhà xuất khẩu có thị trường nội địa được bảo hộ, dùng lợi nhuận ở đó trợ cấp bán ở nước nhập khẩu, nên các hãng cạnh tranh ở nước nhập khẩu gặp cạnh tranh không lành mạnh và có thể mất thị phần. Khi có đơn kiện, cơ quan quản lý thương mại của nước nhập khẩu thường mở điều tra.' }
    ] },
    { icon: '🦈', title: 'Phá giá triệt hạ (bài 57)', blocks: [
      { t: 'p', x: 'Luật chống bán phá giá ở Mỹ, EU… được ban hành vì lo ngại nhà sản xuất nước ngoài thực hiện <b>phá giá triệt hạ (predatory dumping)</b>:' },
      { t: 'steps', items: [
        'Bán với giá thấp giả tạo, thường dưới chi phí, để đuổi đối thủ khỏi thị trường và <b>giành vị thế độc quyền</b>.',
        'Hết cạnh tranh, tăng giá để bù lỗ và hưởng siêu lợi nhuận.',
        'Ngắn hạn người tiêu dùng có lợi, dài hạn xã hội mất phúc lợi vì độc quyền.'
      ] },
      { t: 'warn', x: '<b>Nhưng lý thuyết và thực tiễn</b> cho thấy định giá dưới chi phí có hệ thống vừa không hợp lý vừa không khả thi: nếu hãng đuổi được đối thủ rồi tăng giá, các hãng khác lại vào thị trường với giá thấp hơn kẻ phá giá. Hãng nước ngoài không chắc thu hồi được chi phí hạ giá nặng nề nên thường <b>không theo đuổi</b> chiến lược này.' }
    ] },
    { icon: '🌍', title: 'Phân biệt giá quốc tế và phá giá (bài 58)', blocks: [
      { t: 'key', x: '<b>Phân biệt giá quốc tế</b>: bán cùng một hàng với giá khác nhau ở thị trường trong nước và quốc tế. Một số hệ thống như Mỹ, Canada có thể điều tra như bán phá giá. Nhưng có thật là phá giá?' },
      { t: 'list', items: [
        'Muốn phân biệt giá, hãng phải có <b>sức mạnh độc quyền trong nước</b> để giảm sản lượng trong nước và đẩy giá lên — hành động đó gây tổn thất phúc lợi.',
        'Lập luận đó có thể làm cơ sở cho luật chống độc quyền trong nước, nhưng <b>ít ý nghĩa với phá giá ở nước nhập khẩu</b>: hàng vẫn có thể được bán trên chi phí ở cả hai nơi.',
        'Tổn thất phúc lợi đó rơi vào người tiêu dùng <b>trong nước của hãng</b>, không phải nước nhập khẩu; còn người tiêu dùng nước nhập khẩu được hưởng nguồn cung lớn hơn, giá thấp hơn (miễn là hãng chưa thành độc quyền ở đó).'
      ] },
      { t: 'tip', x: 'Ví dụ vận tải biển: ở thị trường nội địa được bảo hộ, hãng thu cước cao; sang nước khác thu cước thấp hơn, nhưng chưa chắc thấp hơn chi phí. Đánh thuế chống phá giá chỉ <b>tước lợi ích của người tiêu dùng</b> ở thị trường đó.' }
    ] },
    { icon: '⚖️', title: 'Giá trị công bằng: kinh tế thị trường và phi thị trường (bài 59)', blocks: [
      { t: 'p', x: 'Cuối cùng cái quan trọng là <b>quy tắc</b>: hãng bán phá giá khi bán hàng ở nước ngoài dưới <b>giá trị công bằng</b>, thường là giá của sản phẩm khi tiêu thụ tại thị trường nội địa.' },
      { t: 'table', head: ['', 'Nền kinh tế thị trường', 'Nền kinh tế “phi thị trường” (cựu kế hoạch hóa)'], rows: [
        ['Cách xác định giá trị công bằng', 'Giá trong nước hoặc chi phí', 'Dùng giá yếu tố sản xuất của một nước thứ ba “tương đương” (vd. Mỹ dùng Ấn Độ cho thép Trung Quốc, vì thu nhập bình quân tương đồng)'],
        ['Lý do', '—', 'Bên kiện cho rằng giá ở đó không phản ánh cung–cầu']
      ] },
      { t: 'p', x: 'Dùng dữ liệu nước thứ ba có thể không hợp lý với người ủng hộ thương mại tự do nhưng <b>hợp pháp</b>. Đường thoát duy nhất của nhà xuất khẩu phi thị trường: <b>chứng minh quy trình sản xuất thực sự hiệu quả</b>. Trong vụ thép, nhà sản xuất Trung Quốc cho thấy lượng quặng sắt, than, lao động cho một tấn thép thực sự thấp; kể cả dùng giá yếu tố sản xuất của Ấn Độ cao hơn, giá trị công bằng dựng lên vẫn thấp hơn giá xuất khẩu → <b>không bị đánh thuế chống bán phá giá</b>.' }
    ] }
  ],
  summary: [
    'Bán phá giá: bán ở nước ngoài dưới giá trị công bằng (giá nội địa hoặc chi phí sản xuất).',
    'Phá giá triệt hạ nhằm đuổi đối thủ để độc quyền; nhưng thực tế hiếm khả thi vì đối thủ mới sẽ vào lại.',
    'Phân biệt giá quốc tế đòi hỏi sức mạnh độc quyền trong nước; tổn thất rơi vào người tiêu dùng trong nước, nước nhập khẩu được lợi giá thấp.',
    'Nền kinh tế phi thị trường bị dùng giá nước thứ ba; cách chống đỡ là chứng minh hiệu quả sản xuất.'
  ],
  cards: [
    ['Bán phá giá là gì?', 'Bán hàng ở thị trường nước ngoài dưới giá trị công bằng (giá trong nước hoặc chi phí).'],
    ['Lập luận chống bán phá giá?', 'Nhà xuất khẩu dùng lợi nhuận ở thị trường nội địa được bảo hộ để trợ cấp bán ở nước ngoài → cạnh tranh không lành mạnh.'],
    ['Phá giá triệt hạ là gì?', 'Bán dưới chi phí để đuổi đối thủ và giành độc quyền, sau đó tăng giá.'],
    ['Vì sao phá giá triệt hạ khó thành công?', 'Nếu tăng giá, hãng khác sẽ vào thị trường với giá thấp hơn; kẻ phá giá không chắc thu hồi chi phí.'],
    ['Phân biệt giá quốc tế là gì?', 'Bán cùng hàng với giá khác nhau ở trong nước và quốc tế.'],
    ['Điều kiện cần để phân biệt giá?', 'Có sức mạnh độc quyền ở thị trường trong nước.'],
    ['Ai chịu tổn thất khi hãng độc quyền trong nước giảm sản lượng?', 'Người tiêu dùng ở thị trường nội địa của hãng, không phải nước nhập khẩu.'],
    ['Người tiêu dùng nước nhập khẩu được gì?', 'Nguồn cung lớn hơn và giá thấp hơn (nếu hãng chưa độc quyền ở đó).'],
    ['Giá trị công bằng là gì?', 'Thông thường là giá sản phẩm khi tiêu thụ ở thị trường nội địa.'],
    ['Với nền kinh tế phi thị trường dùng gì?', 'Giá yếu tố sản xuất của một nước thứ ba tương đương (vd Ấn Độ cho thép Trung Quốc).'],
    ['Cách nhà xuất khẩu phi thị trường tự bảo vệ?', 'Chứng minh quy trình sản xuất thực sự hiệu quả (ít nguyên liệu, lao động).']
  ],
  quiz: [
    { q: 'Bán phá giá là bán:', o: ['Trong nước dưới giá', 'Ở nước ngoài dưới giá trị công bằng', 'Bất kỳ giá nào', 'Trên chi phí'], a: 1, e: 'Giá trị công bằng dựa trên giá nội địa hoặc chi phí.' },
    { q: 'Phá giá triệt hạ nhằm:', o: ['Tăng chất lượng', 'Loại đối thủ để giành độc quyền', 'Giảm thuế', 'Tăng thuế'], a: 1, e: 'Sau đó tăng giá để bù lỗ.' },
    { q: 'Vì sao phá giá triệt hạ khó thực hiện?', o: ['Luật cấm tuyệt đối', 'Hãng khác dễ vào lại thị trường khi giá cao', 'Giá luôn thấp', 'Người mua không thích'], a: 1, e: 'Kẻ phá giá không chắc thu hồi chi phí.' },
    { q: 'Phân biệt giá quốc tế đòi hỏi hãng phải có:', o: ['Sức mạnh độc quyền trong nước', 'Nhiều đối thủ', 'Thuế thấp', 'Lao động rẻ'], a: 0, e: 'Để giảm sản lượng nội địa và đẩy giá.' },
    { q: 'Tổn thất phúc lợi từ độc quyền trong nước rơi vào:', o: ['Người tiêu dùng nước nhập khẩu', 'Người tiêu dùng trong nước của hãng', 'Chính phủ nước nhập khẩu', 'Không ai'], a: 1, e: 'Nước nhập khẩu còn được giá thấp.' },
    { q: 'Đánh thuế chống bán phá giá lên hãng vận tải biển trong ví dụ sẽ:', o: ['Tăng lợi ích người tiêu dùng', 'Tước lợi ích của người tiêu dùng ở thị trường đó', 'Làm hãng phá sản', 'Giảm cước'], a: 1, e: 'Cước có thể vẫn cao hơn chi phí.' },
    { q: 'Mỹ dùng Ấn Độ để tính giá trị công bằng thép Trung Quốc vì:', o: ['Ấn Độ ở gần', 'Trung Quốc bị coi là kinh tế phi thị trường và Ấn Độ có thu nhập bình quân tương tự', 'Ấn Độ xuất thép nhiều nhất', 'Luật cấm Trung Quốc'], a: 1, e: 'Dùng giá yếu tố sản xuất nước thứ ba.' },
    { q: 'Đường thoát của nhà xuất khẩu phi thị trường:', o: ['Nộp thuế', 'Chứng minh quy trình sản xuất hiệu quả', 'Tăng giá', 'Ngừng xuất'], a: 1, e: 'Vụ thép Trung Quốc: không bị đánh thuế.' }
  ],
  match: [
    ['Dumping', 'Bán ở nước ngoài dưới giá trị công bằng'],
    ['Predatory dumping', 'Bán dưới chi phí để giành độc quyền'],
    ['Price discrimination', 'Giá khác nhau ở thị trường trong nước và quốc tế'],
    ['Non-market economy', 'Dùng giá yếu tố nước thứ ba'],
    ['Chống phá giá', 'Điều tra, đánh thuế'],
    ['Giá trị công bằng', 'Giá nội địa hoặc chi phí sản xuất']
  ]
},

/* ======================= CHƯƠNG 16 ======================= */
{
  n: 16,
  title: 'Toàn cầu hóa, tài nguyên, vàng và quy tắc 72',
  intro: 'Bài 60–63 và 65: toàn cầu hóa là gì và ai thắng ai thua, tài nguyên thiên nhiên với phát triển, vì sao giá vàng tăng, và mẹo quy tắc 72 để tính nhanh thời gian gấp đôi.',
  sections: [
    { icon: '🌐', title: 'Toàn cầu hóa (bài 60–61)', blocks: [
      { t: 'key', x: '<b>Toàn cầu hóa</b> là sự hội nhập sâu hơn và nhanh hơn của các nền kinh tế thế giới thông qua dòng chảy <b>hàng hóa, vốn, thông tin và con người</b>.' },
      { t: 'p', x: 'Thế giới từng có các làn sóng hội nhập: từ giữa thế kỷ 19 đến khoảng 1930, và làn sóng mới bắt đầu từ 1950 với các nước giàu (sau đó đến các nước đang phát triển). Công nghệ thường thúc đẩy — thế kỷ 19 là tàu hơi nước, đường sắt, điện tín, điện thoại, điện; nay là Internet, du lịch đại chúng; chính sách có thể làm chậm hoặc nhanh.' },
      { t: 'list', items: [
        'Phần dễ thấy nhất là <b>thương mại</b> tăng. Nước biết xuất khẩu hàng chế tạo tăng trưởng nhanh hơn nhiều so với nước chỉ xuất sản phẩm thô hoặc công nghiệp hóa chủ yếu để phục vụ thị trường nội địa.',
        'Dòng vốn, công nghệ, di chuyển của con người (lao động, sinh viên, khách du lịch) cũng làm tăng tiếp xúc và lan truyền ý tưởng.',
        'Thương mại, dòng vốn, cuộc gọi quốc tế, Internet và du lịch đều tăng nhanh hơn sản lượng toàn cầu.'
      ] },
      { t: 'h3', x: 'Người thắng và kẻ thua' },
      { t: 'p', x: 'Những thay đổi này (do công nghệ và chính sách) tạo cơ hội mới cho doanh nghiệp và vùng <b>nhanh nhạy, linh hoạt, học nhanh</b>; ai kém linh hoạt thì thất bại. Có người hỏi vì sao không sản xuất cho thị trường nội địa và mặc kệ thế giới? Thử nghiệm toàn cầu sau Thế chiến II cho thấy nước tập trung xuất khẩu hàng chế tạo phát triển tốt, nước hướng nội cuối cùng đình trệ, và những nước cố ý cô lập nay thuộc nhóm nghèo nhất. <b>Toàn cầu hóa là trò chơi khó, nhưng không chơi còn tệ hơn.</b>' },
      { t: 'tip', x: 'Điều kiện thành công: cạnh tranh để doanh nghiệp có dịch vụ tài chính, viễn thông tốt, đầu vào rẻ; lạm phát thấp, tiền tệ ổn định, thuế hợp lý, luật rõ ràng, ít tham nhũng.' }
    ] },
    { icon: '🌳', title: 'Tài nguyên thiên nhiên và phát triển (bài 62)', blocks: [
      { t: 'p', x: 'Tài nguyên thiên nhiên là một phần quan trọng của <b>tổng vốn</b> quốc gia: đất, rừng, nước là yếu tố sản xuất; như máy móc, tài nguyên cũng <b>hao mòn</b> khi dùng và có thể mất hẳn nếu không được tái tạo. Chúng còn bảo vệ con người và vốn vật chất khỏi chất ô nhiễm, độc hại sinh ra trong sản xuất.' },
      { t: 'warn', x: 'Chú trọng quá mức vào tăng trưởng nhanh dẫn tới khai thác quá mức rừng, thủy sản, đất và sản xuất quá nhiều chất ô nhiễm làm hại không khí, nước, đất. Dần dần mất năng suất và bệnh tật lan rộng. Ở Ấn Độ, Trung Quốc, thiệt hại này có thể lên tới <b>8–10% GDP</b>.' },
      { t: 'key', x: 'Giải pháp: áp dụng nguyên tắc <b>“Người gây ô nhiễm phải trả”</b> (Polluter Pays) bằng thuế và đặt tiêu chuẩn. Nhà máy điện phải chịu chi phí giảm ô nhiễm không khí, nhà máy phân bón phải xử lý nước thải… Đây chính là việc <b>nội hóa ngoại tác</b> đã học ở chương 4.' }
    ] },
    { icon: '🥇', title: 'Xu hướng giá vàng (bài 63)', blocks: [
      { t: 'p', x: 'Bảy năm trước giá vàng thế giới đạt đỉnh 850 USD/ounce, rồi dưới 260 USD năm 1998, tuần trước chạm 400 USD. Giá ở VN 7,7 triệu đồng/lượng (1 lượng = 1,32 ounce). Vì sao tăng?' },
      { t: 'tabs', items: [
        ['Lạm phát?', 'Không đúng: thế giới gần đây trải qua giảm phát, không phải lạm phát.'],
        ['Lãi suất USD giảm?', 'Khi lãi suất USD giảm, nhà sản xuất vàng ít động cơ giữ tiền và mua lại vàng đã bán trước → đẩy giá lên. Đúng gần đây nhưng không giải thích được giai đoạn 1995–1998 khi lãi suất và giá vàng cùng giảm.'],
        ['Ngân hàng trung ương?', 'Họ giữ hơn 30.000 tấn vàng nhưng không bán để kìm giá vì chức năng chính không phải kinh doanh hay ổn định giá vàng; lịch sử cho thấy họ không giỏi mua thấp bán cao.'],
        ['Có thể là…', 'USD yếu và Mỹ ít động cơ làm mạnh lên vì thâm hụt thương mại khổng lồ; yên không an toàn khi nợ chính phủ Nhật 135% GDP; euro cũng không hơn vì thâm hụt ngân sách các nền kinh tế lớn. Vàng thành lựa chọn <b>cất giữ của cải</b> ngày càng nhiều → cầu tăng → giá tăng.']
      ] },
      { t: 'mnemo', x: 'Đừng hỏi nhà kinh tế về giá vàng tương lai: họ giỏi giải thích giá <b>quá khứ</b> hơn dự báo tương lai.' }
    ] },
    { icon: '⏱️', title: 'Quy tắc 72 (bài 65)', blocks: [
      { t: 'key', x: '<b>Quy tắc 72</b>: lấy 72 chia cho tốc độ tăng trưởng (%), được xấp xỉ số năm để khoản gốc <b>gấp đôi</b>.' },
      { t: 'list', items: [
        'Việt Nam: GDP tăng ~7%, dân số tăng 1,5% → thu nhập/người tăng ~5,5% → 72 ÷ 5,5 ≈ <b>13 năm</b> gấp đôi: từ 470 USD lên 940 USD vào khoảng 2017.',
        'Gửi 1.000 USD lãi kép 4%/năm: 72 ÷ 4 = 18 năm (thực tế 17,7 năm).',
        'Trái phiếu đô thị VN lãi 9% dài hạn: 72 ÷ 9 = 8 năm → mua trái phiếu 8 năm sẽ gấp đôi khi đáo hạn.',
        'Tiền gửi ở Nhật lãi 0,10%: 72 ÷ 0,1 = 720 năm!'
      ] },
      { t: 'widget', name: 'rule72', title: 'Nhập tốc độ tăng trưởng, xem thời gian gấp đôi' }
    ] }
  ],
  summary: [
    'Toàn cầu hóa là sự hội nhập của hàng hóa, vốn, thông tin, con người; có người thắng kẻ thua nhưng không tham gia còn tệ hơn.',
    'Tài nguyên thiên nhiên là vốn; khai thác quá mức gây thiệt hại 8–10% GDP (Ấn Độ, Trung Quốc); giải pháp “người gây ô nhiễm phải trả”.',
    'Giá vàng tăng vì thiếu lựa chọn lưu giữ của cải an toàn khi USD, yên, euro đều có điểm yếu.',
    'Quy tắc 72: số năm gấp đôi ≈ 72 ÷ tốc độ tăng trưởng (%).'
  ],
  cards: [
    ['Toàn cầu hóa là gì?', 'Hội nhập sâu và nhanh hơn thông qua dòng hàng hóa, vốn, thông tin, con người.'],
    ['Điều gì thúc đẩy các làn sóng hội nhập?', 'Công nghệ (tàu hơi nước, đường sắt, điện tín; nay là Internet), cùng chính sách.'],
    ['Nước xuất khẩu hàng chế tạo khác nước xuất thô thế nào?', 'Tăng trưởng nhanh hơn nhiều.'],
    ['Ai thắng trong toàn cầu hóa?', 'Doanh nghiệp, vùng nhanh nhạy, linh hoạt, học nhanh.'],
    ['Nước hướng nội sau Thế chiến II ra sao?', 'Cuối cùng đình trệ; nước cố ý cô lập thuộc nhóm nghèo nhất.'],
    ['Vì sao tài nguyên thiên nhiên là vốn?', 'Là yếu tố sản xuất, hao mòn khi dùng, và bảo vệ con người, vốn khỏi ô nhiễm.'],
    ['Thiệt hại do hủy hoại môi trường ở Ấn Độ, Trung Quốc?', '8–10% GDP.'],
    ['Nguyên tắc “người gây ô nhiễm phải trả”?', 'Dùng thuế và tiêu chuẩn để buộc người gây ô nhiễm chịu chi phí xử lý.'],
    ['Giá vàng: lạm phát có phải nguyên nhân?', 'Không, vì thế giới đang giảm phát.'],
    ['Vì sao ngân hàng trung ương không bán vàng kìm giá?', 'Chức năng chính không phải kinh doanh vàng hay ổn định giá vàng; kém mua thấp bán cao.'],
    ['Vì sao vàng được ưa chuộng?', 'USD yếu, yên không an toàn (nợ Nhật 135% GDP), euro có thâm hụt ngân sách → vàng thành nơi cất giữ của cải.'],
    ['Quy tắc 72?', '72 ÷ tốc độ tăng (%) ≈ số năm gấp đôi.'],
    ['GDP/người VN gấp đôi sau bao lâu (5,5%/năm)?', 'Khoảng 13 năm (470 → 940 USD).']
  ],
  quiz: [
    { q: 'Toàn cầu hóa gồm dòng chảy của:', o: ['Chỉ hàng hóa', 'Hàng hóa, vốn, thông tin, con người', 'Chỉ vốn', 'Chỉ lao động'], a: 1, e: 'Hội nhập sâu và nhanh hơn.' },
    { q: 'Sau Thế chiến II, nước hướng nội và cố ý cô lập kết quả là:', o: ['Giàu nhất', 'Cuối cùng đình trệ, thuộc nhóm nghèo nhất', 'Tăng trưởng nhanh', 'Xuất khẩu nhiều'], a: 1, e: 'Không chơi còn tệ hơn.' },
    { q: 'Kẻ thắng của toàn cầu hóa thường là:', o: ['Doanh nghiệp, vùng nhanh nhạy, linh hoạt', 'Doanh nghiệp được bảo hộ', 'Nước cô lập', 'Độc quyền'], a: 0, e: 'Học nhanh.' },
    { q: 'Thiệt hại môi trường ở Ấn Độ, Trung Quốc có thể lên tới:', o: ['0,8% GDP', '8–10% GDP', '50% GDP', '1% dân số'], a: 1, e: 'Mất năng suất và bệnh tật.' },
    { q: '“Polluter Pays” nghĩa là:', o: ['Người nghèo trả', 'Người gây ô nhiễm chịu chi phí', 'Nhà nước trả', 'Không ai trả'], a: 1, e: 'Dùng thuế và tiêu chuẩn.' },
    { q: 'Vì sao lạm phát không giải thích được giá vàng tăng lúc đó?', o: ['Vì thế giới đang giảm phát', 'Vì vàng không bao giờ tăng', 'Vì lạm phát thấp', 'Vì tiền ngừng lưu thông'], a: 0, e: 'Giá chung không tăng.' },
    { q: 'Ngân hàng trung ương không bán vàng kìm giá vì:', o: ['Chức năng chính không phải kinh doanh hay ổn định giá vàng', 'Luật cấm', 'Họ không có vàng', 'Vàng rẻ'], a: 0, e: 'Và lịch sử cho thấy không giỏi mua thấp bán cao.' },
    { q: 'Theo bài, một lý do cầu vàng tăng là:', o: ['Đồng tiền lớn đều có điểm yếu', 'Vàng sắp hết', 'Thuế vàng giảm', 'Lãi suất tăng'], a: 0, e: 'USD yếu, yên nợ lớn, euro thâm hụt.' },
    { q: 'Theo quy tắc 72, tăng 4%/năm gấp đôi sau khoảng:', o: ['8 năm', '18 năm', '72 năm', '4 năm'], a: 1, e: '72 ÷ 4 = 18.' },
    { q: 'Theo quy tắc 72, tăng 9%/năm gấp đôi sau:', o: ['4 năm', '8 năm', '12 năm', '72 năm'], a: 1, e: '72 ÷ 9 = 8.' },
    { q: 'Thu nhập/người VN tăng 5,5%/năm sẽ gấp đôi sau khoảng:', o: ['5 năm', '13 năm', '30 năm', '72 năm'], a: 1, e: '72 ÷ 5,5 ≈ 13.' }
  ],
  match: [
    ['Toàn cầu hóa', 'Hội nhập hàng hóa, vốn, thông tin, con người'],
    ['Polluter Pays', 'Người gây ô nhiễm chịu chi phí'],
    ['Giá vàng tăng', 'Cất giữ của cải khi các đồng tiền lớn đều yếu'],
    ['Quy tắc 72', '72 chia tốc độ tăng = số năm gấp đôi'],
    ['Tài nguyên thiên nhiên', 'Một phần vốn quốc gia'],
    ['Làn sóng hội nhập', 'Công nghệ và chính sách thúc đẩy']
  ]
}

);
