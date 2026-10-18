// Phần 3: Tài chính và thuế khóa – Chương 17–20 (bài 66–79).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.kinhte = BOOK_DATA.kinhte || { chapters: [] };
BOOK_DATA.kinhte.chapters.push(

/* ======================= CHƯƠNG 17 ======================= */
{
  n: 17,
  title: 'Thuế cơ bản: nêm thuế, thuế trực thu – gián thu, thu nhập',
  intro: 'Bài 66–68: thuế làm lệch thị trường ra sao (nêm thuế và tổn thất vô ích), cấu trúc thuế thay đổi khi nước phát triển, và vì sao thu nhập kinh tế khác thu nhập kế toán.',
  sections: [
    { icon: '⛽', title: 'Thuế làm lệch thị trường (bài 66)', blocks: [
      { t: 'p', x: 'Giá và sản lượng cân bằng do cung và cầu quyết định, nhưng thị trường thường bị bóp méo, một nguyên nhân là <b>thuế</b>. Ví dụ thuế xăng 200 đ/lít: người đi xe máy trả 3.500 đ/lít thì trạm xăng chỉ nhận 3.500 − 200 = <b>3.300 đ</b>.' },
      { t: 'key', x: 'Thuế tạo ra một <b>“nêm” (wedge)</b> giữa giá người mua trả và giá người bán nhận. Đường cung cộng thuế nằm cao hơn đường cung không thuế, sản lượng giảm từ Q* xuống Q′; <b>người mua và người bán cùng chia gánh nặng thuế</b>.' },
      { t: 'table', head: ['Vùng', 'Ý nghĩa'], rows: [
        ['a + d', 'Thặng dư người tiêu dùng bị mất (giá cao hơn)'],
        ['b + c', 'Thặng dư nhà sản xuất bị mất (giá nhận thấp hơn)'],
        ['a + b', 'Nhà nước thu được từ thuế'],
        ['<b>c + d</b>', '<b>Chi phí xã hội ròng = tổn thất vô ích (deadweight loss)</b> của thuế']
      ] },
      { t: 'tip', x: 'Thuế không phải lúc nào cũng xấu: khi hoạt động sản xuất/tiêu dùng chưa phản ánh <b>chi phí xã hội thật</b> (ngoại tác), như xăng gây ô nhiễm, thuế xăng giảm tiêu dùng và giúp giảm ô nhiễm.' },
      { t: 'widget', name: 'tax-wedge', title: 'Tăng thuế xăng: thu được bao nhiêu và mất bao nhiêu?' }
    ] },
    { icon: '🧾', title: 'Thuế trực thu và gián thu (bài 67)', blocks: [
      { t: 'p', x: 'Giai đoạn đầu phát triển, các nước dựa nhiều vào <b>thuế gián thu</b> (thuế bán lẻ, thuế tiêu thụ đặc biệt, thuế thương mại…) vì dễ thu qua cửa hàng và biên giới. Thu nhập bình quân thấp nên <b>thuế trực thu</b> (thuế thu nhập cá nhân, doanh nghiệp) chưa nhiều; doanh nghiệp là nguồn chính của thuế thu nhập.' },
      { t: 'p', x: 'Việt Nam năm 2000: thuế gián thu gần <b>60%</b> tổng thu thuế; thuế thu nhập doanh nghiệp gấp <b>11 lần</b> thuế thu nhập cá nhân.' },
      { t: 'warn', x: 'Vấn đề của thuế gián thu: về bản chất nó <b>lũy thoái</b>. Người kiếm 50 USD/tuần, tiêu 45, thuế bán lẻ 10% → nộp 4,5 USD = <b>9% thu nhập</b>. Người kiếm 200, tiêu 150 → nộp 15 USD = <b>7,5% thu nhập</b>. Thuế trực thu dễ thiết kế lũy tiến bằng cách đổi thuế suất theo thu nhập.' },
      { t: 'mnemo', x: 'Qua thời gian tỷ trọng gián thu giảm (thuế thương mại mất dần vai trò do mở cửa và hiệp định) và tỷ trọng trực thu tăng: ở Việt Nam từ <b>31% (1996) lên 40% (2000)</b>.' }
    ] },
    { icon: '🏠', title: 'Thu nhập kinh tế và thu nhập kế toán (bài 68)', blocks: [
      { t: 'p', x: 'Một người lương 15.000 USD/năm, đồng thời ngôi nhà của họ tăng giá năm nay. Thu nhập của họ là bao nhiêu?' },
      { t: 'table', head: ['', 'Thu nhập kế toán', 'Thu nhập kinh tế'], rows: [
        ['Có tính thay đổi giá trị nhà?', 'Không', 'Có'],
        ['Về lý thuyết', 'Hạn chế', 'Đầy đủ hơn, <b>chính xác hơn</b>: chi tiêu phụ thuộc thu nhập kinh tế (nhà tăng giá → giàu hơn → chi nhiều hơn)'],
        ['Về thực tế', '<b>Phổ biến hơn</b> vì dễ đo', 'Khó đo thường xuyên']
      ] }
    ] }
  ],
  summary: [
    'Thuế tạo nêm giữa giá mua và giá bán, giảm sản lượng, cả hai bên chia gánh; c + d là tổn thất vô ích.',
    'Thuế có thể tốt khi nội hóa ngoại tác (xăng gây ô nhiễm).',
    'Nước đang phát triển dựa vào gián thu (dễ thu nhưng lũy thoái); phát triển rồi tỷ trọng trực thu tăng.',
    'Thu nhập kinh tế tính cả thay đổi giá tài sản; kế toán thì không, nhưng dễ đo hơn.'
  ],
  cards: [
    ['“Nêm thuế” (tax wedge) là gì?', 'Chênh lệch giữa giá người mua trả và giá người bán nhận do thuế.'],
    ['Thuế đơn vị 200 đ/lít, người mua trả 3.500: người bán nhận?', '3.300 đ.'],
    ['Thuế làm sản lượng thay đổi thế nào?', 'Đường cung dịch lên, sản lượng giảm từ Q* xuống Q′.'],
    ['Vùng a + d?', 'Thặng dư người tiêu dùng bị mất.'],
    ['Vùng b + c?', 'Thặng dư nhà sản xuất bị mất.'],
    ['Vùng a + b?', 'Thu ngân sách từ thuế.'],
    ['Vùng c + d?', 'Tổn thất vô ích (chi phí xã hội ròng).'],
    ['Khi nào thuế là tốt?', 'Khi hoạt động chưa phản ánh chi phí xã hội (ngoại tác), vd thuế xăng giảm ô nhiễm.'],
    ['Thuế gián thu / trực thu?', 'Gián thu: thuế tiêu dùng (bán lẻ, tiêu thụ đặc biệt, thương mại). Trực thu: thuế thu nhập (cá nhân, doanh nghiệp).'],
    ['Vì sao nước nghèo dựa nhiều vào gián thu?', 'Dễ thu qua cửa hàng và biên giới; thu nhập thấp nên khó thu thuế thu nhập.'],
    ['Vì sao gián thu lũy thoái?', 'Người thu nhập thấp dành tỷ lệ thu nhập lớn hơn cho tiêu dùng (9% so với 7,5% trong ví dụ).'],
    ['Cơ cấu thuế VN?', 'Gián thu gần 60% (2000); trực thu từ 31% (1996) lên 40% (2000).'],
    ['Thu nhập kinh tế vs kế toán?', 'Kinh tế tính cả thay đổi giá trị tài sản; kế toán thì không.']
  ],
  quiz: [
    { q: 'Nêm thuế là:', o: ['Thuế chung cho mọi hàng', 'Chênh lệch giữa giá người mua trả và giá người bán nhận', 'Thuế thu nhập', 'Lãi suất'], a: 1, e: 'Thuế đơn vị tạo ra chênh lệch đó.' },
    { q: 'Thuế đơn vị tác động tới sản lượng thị trường:', o: ['Tăng', 'Giảm', 'Không đổi', 'Về bằng 0 luôn'], a: 1, e: 'Từ Q* xuống Q′.' },
    { q: 'Tổn thất vô ích là vùng nào?', o: ['a + b', 'b + c', 'c + d', 'a + d'], a: 2, e: 'Phần mất mà không ai nhận.' },
    { q: 'Ngân sách thu được từ thuế ứng với vùng:', o: ['a + b', 'c + d', 'a + d', 'b + c'], a: 0, e: 'Thuế × sản lượng mới.' },
    { q: 'Thuế xăng có thể có lợi vì:', o: ['Xăng đắt', 'Giảm ô nhiễm khi chi phí xã hội chưa tính vào giá', 'Tăng sản lượng', 'Không có tác động'], a: 1, e: 'Nội hóa ngoại tác.' },
    { q: 'Thuế gián thu về bản chất là:', o: ['Lũy tiến', 'Lũy thoái', 'Tỷ lệ tuyệt đối', 'Không đánh vào tiêu dùng'], a: 1, e: 'Người nghèo chịu tỷ lệ thu nhập lớn hơn.' },
    { q: 'Người kiếm 50, tiêu 45, thuế 10% tiêu dùng nộp bao nhiêu % thu nhập?', o: ['10%', '9%', '7,5%', '4,5%'], a: 1, e: '4,5 ÷ 50 = 9%.' },
    { q: 'Theo thời gian khi nước phát triển, tỷ trọng gián thu thường:', o: ['Tăng', 'Giảm', 'Không đổi', 'Bằng không'], a: 1, e: 'Thuế thương mại mất dần vai trò.' },
    { q: 'Thu nhập kinh tế khác kế toán ở chỗ:', o: ['Tính cả thay đổi giá trị tài sản', 'Bỏ lương', 'Chỉ tính tiền mặt', 'Không có khác biệt'], a: 0, e: 'Nhà tăng giá làm người sở hữu giàu thêm.' },
    { q: 'Vì sao dùng thu nhập kế toán nhiều hơn dù kém chính xác?', o: ['Dễ đo', 'Luật cấm', 'Quá đắt', 'Không ai biết'], a: 0, e: 'Thu nhập kinh tế khó đo thường xuyên.' }
  ],
  match: [
    ['Tax wedge', 'Chênh lệch giá mua và giá bán do thuế'],
    ['c + d', 'Tổn thất vô ích'],
    ['Gián thu', 'Dễ thu nhưng lũy thoái'],
    ['Trực thu', 'Thu nhập, dễ thiết kế lũy tiến'],
    ['Thu nhập kinh tế', 'Tính cả thay đổi giá trị tài sản'],
    ['Thu nhập kế toán', 'Dễ đo, phổ biến']
  ]
},

/* ======================= CHƯƠNG 18 ======================= */
{
  n: 18,
  title: 'Công bằng và hiệu quả trong hệ thống thuế',
  intro: 'Bài 69–70: thuế lũy thoái, tỷ lệ và lũy tiến khác nhau thế nào, vì sao thuế quá lũy tiến làm giảm động lực, và sự đánh đổi giữa công bằng với hiệu quả.',
  sections: [
    { icon: '📐', title: 'Lũy thoái, tỷ lệ, lũy tiến (bài 69)', blocks: [
      { t: 'table', head: ['Loại thuế', 'Nghĩa', 'Ví dụ'], rows: [
        ['<b>Lũy thoái</b> (regressive)', 'Thuế suất bình quân của người thu nhập cao <b>thấp hơn</b> người thu nhập thấp', 'Người kiếm 4 triệu nộp 2 triệu (50%); người kiếm 20 triệu nộp 4 triệu (20%). Cực đoan nhất: thuế khoán, ai cũng nộp bằng nhau'],
        ['<b>Tỷ lệ</b> (proportional)', 'Một thuế suất cho mọi mức thu nhập', 'Thuế 25%: nộp 1 và 5 triệu; tỷ lệ thu nhập hai người không đổi'],
        ['<b>Lũy tiến</b> (progressive)', '<b>Thuế suất biên</b> tăng theo thu nhập → người giàu chịu thuế suất bình quân cao hơn', 'Việt Nam: 5 mức thuế suất từ 10% đến 50% trên phần thu nhập vượt 3 triệu đồng']
      ] },
      { t: 'p', x: 'Thuế lũy thoái và tỷ lệ bị coi là không công bằng, nên thuế thu nhập cá nhân thường thiết kế lũy tiến theo bậc thuế.' },
      { t: 'warn', x: 'Thuế <b>quá lũy tiến</b> có thể làm cân bằng thu nhập sau thuế: ví dụ người nghèo nộp 1 triệu thì người giàu phải nộp 17 triệu để cả hai còn 3 triệu. Hệ thống này <b>làm người có kỹ năng mất động lực</b> tiếp tục làm việc hiệu quả.' },
      { t: 'widget', name: 'tax-types', title: 'So sánh ba kiểu thuế' }
    ] },
    { icon: '⚖️', title: 'Công bằng và hiệu quả (bài 70)', blocks: [
      { t: 'p', x: 'Một mục tiêu của thuế là tạo bình đẳng xã hội hơn thông qua tái phân phối. Nhưng để ít bóp méo hành vi kinh tế, thuế phải <b>hiệu quả</b>.' },
      { t: 'table', head: ['Loại công bằng', 'Nghĩa'], rows: [
        ['<b>Chiều ngang</b> (horizontal equity)', 'Người có thu nhập giống nhau thì bị đánh thuế như nhau'],
        ['<b>Chiều dọc</b> (vertical equity)', 'Người có thu nhập khác nhau thì bị đánh thuế khác nhau']
      ] },
      { t: 'h3', x: 'Ví dụ tổn thất hiệu quả' },
      { t: 'steps', items: [
        'Kỹ sư kiếm 100.000 đ cho mỗi giờ làm thêm; thời gian nghỉ đối với cô đáng 60.000 đ/giờ → cô chọn làm thêm.',
        'Đánh thuế biên 50%: chỉ còn 50.000 đ/giờ → cô chọn nghỉ ngơi.',
        'Chênh lệch giá trị giữa hai lựa chọn là <b>tổn thất hiệu quả 40.000 đ</b> (làm thêm đáng ra tạo lợi ích xã hội mà không xảy ra).'
      ] },
      { t: 'key', x: '<b>Thuế khoán (lump-sum)</b> là cách duy nhất loại bỏ tổn thất hiệu quả, vì sau khi nộp, dù làm nhiều hay ít cô cũng không bị đánh thêm. Nhưng thuế khoán lại <b>lũy thoái</b>, mất công bằng.' },
      { t: 'tip', x: 'Nhà kinh tế nhìn xa hơn tác động trực tiếp: người nộp thuế mất thỏa dụng khi nộp, nhưng lại được hưởng thỏa dụng từ dịch vụ công do thuế tài trợ. Tranh luận về giảm thuế lũy tiến (như ở Mỹ) là ví dụ điển hình của đánh đổi công bằng – hiệu quả.' }
    ] }
  ],
  summary: [
    'Lũy thoái: người giàu thuế suất bình quân thấp hơn; tỷ lệ: bằng nhau; lũy tiến: thuế suất biên tăng theo thu nhập.',
    'Quá lũy tiến làm cào bằng thu nhập sau thuế và triệt tiêu động lực.',
    'Công bằng chiều ngang (cùng thu nhập – cùng thuế) và chiều dọc (khác thu nhập – khác thuế).',
    'Thuế biên cao có thể làm người lao động chọn nghỉ → tổn thất hiệu quả; thuế khoán hiệu quả nhưng không công bằng.'
  ],
  cards: [
    ['Thuế lũy thoái là gì?', 'Thuế suất bình quân của người thu nhập cao thấp hơn người thu nhập thấp.'],
    ['Thuế khoán (lump-sum)?', 'Ai cũng nộp một số tiền như nhau; dạng lũy thoái cực đoan.'],
    ['Thuế tỷ lệ?', 'Một thuế suất duy nhất cho mọi mức thu nhập.'],
    ['Thuế lũy tiến?', 'Thuế suất biên tăng theo thu nhập để người giàu chịu thuế suất bình quân cao hơn.'],
    ['Thuế thu nhập cá nhân VN (theo bài)?', '5 mức thuế suất từ 10% đến 50% áp dụng trên phần thu nhập vượt 3 triệu đồng.'],
    ['Rủi ro của thuế quá lũy tiến?', 'Làm cân bằng thu nhập sau thuế, người có kỹ năng mất động lực làm việc.'],
    ['Công bằng chiều ngang?', 'Thu nhập như nhau thì thuế như nhau.'],
    ['Công bằng chiều dọc?', 'Thu nhập khác nhau thì thuế khác nhau.'],
    ['Ví dụ kỹ sư làm thêm giờ?', 'Thuế biên 50% làm 100.000 thành 50.000 < giá trị nghỉ 60.000 → chọn nghỉ; tổn thất hiệu quả 40.000.'],
    ['Cách duy nhất loại tổn thất hiệu quả?', 'Thuế khoán (lump-sum).'],
    ['Vì sao nhà kinh tế xét cả dịch vụ công?', 'Người nộp thuế mất thỏa dụng nhưng cũng được thỏa dụng từ dịch vụ công do thuế tài trợ.']
  ],
  quiz: [
    { q: 'Người kiếm 4 triệu nộp 2 triệu, người kiếm 20 triệu nộp 4 triệu là thuế:', o: ['Lũy tiến', 'Lũy thoái', 'Tỷ lệ', 'Không có thuế'], a: 1, e: '50% so với 20%.' },
    { q: 'Thuế 25% cho hai người này sẽ thu:', o: ['1 và 5 triệu', '2 và 4 triệu', '1 và 4 triệu', '5 và 1 triệu'], a: 0, e: '25% × 4 = 1; 25% × 20 = 5.' },
    { q: 'Thuế lũy tiến có đặc điểm:', o: ['Thuế suất biên tăng theo thu nhập', 'Một thuế suất', 'Mọi người nộp bằng nhau', 'Thuế bằng 0'], a: 0, e: 'Người giàu thuế suất bình quân cao hơn.' },
    { q: 'Thuế khoán là loại:', o: ['Lũy tiến', 'Lũy thoái cực đoan', 'Tỷ lệ', 'Thuế thu nhập'], a: 1, e: 'Ai cũng nộp bằng nhau.' },
    { q: 'Thuế quá lũy tiến gây ra:', o: ['Tăng động lực', 'Người có kỹ năng mất động lực làm việc', 'Giảm thuế', 'Tăng cung'], a: 1, e: 'Cào bằng thu nhập sau thuế.' },
    { q: 'Công bằng chiều ngang nghĩa là:', o: ['Cùng thu nhập, cùng thuế', 'Khác thu nhập, khác thuế', 'Mọi người giống nhau', 'Không thuế'], a: 0, e: 'Chiều dọc là khác thu nhập, khác thuế.' },
    { q: 'Kỹ sư làm thêm 100.000, giá trị nghỉ 60.000, thuế biên 50%: cô chọn:', o: ['Làm thêm', 'Nghỉ', 'Bỏ việc', 'Tăng giá'], a: 1, e: '50.000 < 60.000.' },
    { q: 'Tổn thất hiệu quả trong ví dụ là:', o: ['10.000', '40.000', '60.000', '100.000'], a: 1, e: '100.000 − 60.000.' },
    { q: 'Cách duy nhất loại tổn thất hiệu quả của thuế:', o: ['Thuế lũy tiến', 'Thuế khoán', 'Thuế tỷ lệ', 'Thuế gián thu'], a: 1, e: 'Không phụ thuộc hành vi.' }
  ],
  match: [
    ['Lũy thoái', 'Người giàu thuế suất bình quân thấp hơn'],
    ['Tỷ lệ', 'Một thuế suất cho tất cả'],
    ['Lũy tiến', 'Thuế suất biên tăng theo thu nhập'],
    ['Công bằng chiều ngang', 'Thu nhập bằng nhau → thuế bằng nhau'],
    ['Công bằng chiều dọc', 'Thu nhập khác nhau → thuế khác nhau'],
    ['Thuế khoán', 'Không gây tổn thất hiệu quả']
  ]
},

/* ======================= CHƯƠNG 19 ======================= */
{
  n: 19,
  title: 'Ưu đãi thuế, DNNN và cạnh tranh thuế',
  intro: 'Bài 71–74: ưu đãi thuế có thật sự thu hút đầu tư, cách đánh thuế doanh nghiệp nhà nước, cạnh tranh thuế giữa các nước và dịch chuyển thuế.',
  sections: [
    { icon: '🎁', title: 'Ưu đãi thuế (bài 71)', blocks: [
      { t: 'p', x: 'Nhiều nước dùng ưu đãi thuế để thu hút đầu tư trong và ngoài nước: miễn giảm thuế có thời hạn, thuế suất thấp hơn cho ngành/vùng chọn lọc, khấu hao nhanh máy móc, thuế nhập khẩu bằng không cho thiết bị và đầu vào.' },
      { t: 'warn', x: 'Nhiều nghiên cứu kết luận: ưu đãi thuế <b>không quan trọng hoặc vai trò rất hạn chế</b> trong thu hút đầu tư; thường chỉ làm <b>chính phủ mất thu</b>.' },
      { t: 'key', x: 'Điều thật sự quan trọng: (1) <b>chế độ thuế ổn định</b>, mức vừa phải, tương đương chuẩn quốc tế; (2) <b>hạ tầng cứng và mềm</b> đầy đủ: giao thông, thông tin, điện ổn định, xã hội ổn định, hệ thống tư pháp dự đoán được, ít thủ tục rườm rà.' },
      { t: 'p', x: 'Nước A có chế độ thuế và hạ tầng tốt hơn nước B dù B có ưu đãi thuế thì A vẫn thu hút nhiều đầu tư hơn. Vì vậy các nước đang phát triển nên dồn nguồn lực cho hạ tầng.' },
      { t: 'tip', x: 'Khó bỏ hết ưu đãi ngay vì cạnh tranh thuế. Nhưng cần xét: ngành được ưu đãi có <b>có lợi cho nền kinh tế</b> không? Ưu đãi giảm chi phí đầu tư và có thể làm một dự án xấu trở nên khả thi. Ví dụ sản xuất xi măng không hợp lý kinh tế mà còn ưu đãi thuế thì <b>hại gấp đôi</b>: mất thu và thúc đẩy ngành sản xuất thêm gây hại.' }
    ] },
    { icon: '🏭', title: 'Đánh thuế doanh nghiệp nhà nước (bài 72)', blocks: [
      { t: 'p', x: '<b>DNNN</b> là công ty được giao nhiệm vụ cụ thể mà khu vực tư nhân không thể hoặc không muốn làm. DNNN có lợi thế như bảo lãnh tín dụng ngầm hoặc rõ ràng của nhà nước, và quy mô lớn → nguồn lực được giao cho DNNN phải mang lại tỷ suất sinh lời <b>không thấp hơn khu vực tư</b>.' },
      { t: 'list', items: [
        'Vì nhà nước là cổ đông duy nhất, DNNN có xu hướng <b>không tạo lợi nhuận chịu thuế hay chia cổ tức</b>; nhà nước còn phải bù khoản thiếu hụt.',
        'Nhà nước khuyến khích DNNN <b>vay thị trường vốn</b> để giảm gánh nặng ngân sách và buộc họ cải thiện hiệu quả để trả lãi.',
        'Nhưng vay nhiều → lãi nhiều → thu nhập chịu thuế giảm. Giải pháp: <b>quy tắc vốn mỏng (thin capitalization)</b>: không cấm vay, nhưng giới hạn hoặc gắn việc khấu trừ lãi với hiệu quả — DNNN lãi cao được khấu trừ nhiều (thuế thấp), lãi thấp bị khấu trừ ít (thuế cao).',
        'DNNN và doanh nghiệp tư phải chịu <b>cùng một chế độ quản lý và thuế</b>; ưu đãi riêng làm sân chơi lệch và tư nhân có thể hợp tác với DNNN để hưởng trợ cấp.'
      ] }
    ] },
    { icon: '🏁', title: 'Cạnh tranh thuế (bài 73)', blocks: [
      { t: 'p', x: 'Hạ thuế, nhất là thuế thu nhập, là cách dễ để thu hút kinh doanh. Cạnh tranh thuế quốc tế ngày càng nhiều do vốn và lao động di chuyển dễ hơn.' },
      { t: 'tabs', items: [
        ['Ủng hộ', 'Ireland: 3,8 triệu dân, thuế thu nhập doanh nghiệp chỉ <b>10%</b>, nhận FDI nhiều hơn Nhật hay Ý; thu nhập bình quân đuổi kịp Tây Âu. Ba lập luận: (1) thuế thấp hấp dẫn doanh nghiệp, (2) giảm tổn thất hiệu quả của thuế, (3) cạnh tranh buộc chính phủ bớt độc quyền, hiệu quả hơn.'],
        ['Phản đối', '(1) <b>Bóp méo quyết định đầu tư</b>: vốn, lao động chạy về nơi thuế thấp nhưng chưa chắc năng suất cao nhất; (2) không áp dụng thuế lũy tiến cao được nữa vì doanh nghiệp, người thu nhập cao chuyển đi → <b>giảm tác dụng phân phối lại</b>; (3) thu thuế giảm không đảm bảo chi tiêu hiệu quả hơn, nước nghèo cần đầu tư hạ tầng → phải vay nhiều, nợ công cao làm nhà đầu tư e ngại và đè gánh nặng lên thế hệ sau.']
      ] },
      { t: 'key', x: 'Kết luận: các nước nên cạnh tranh bằng cách tạo <b>môi trường kinh doanh thuận lợi</b>, trong đó thuế chỉ là một yếu tố, để thu hút người giỏi và vốn có giá trị — tránh “cuộc đua xuống đáy” cắt thu và chạy theo nợ.' }
    ] },
    { icon: '↔️', title: 'Dịch chuyển thuế (bài 74)', blocks: [
      { t: 'p', x: 'Khi đánh thuế doanh nghiệp một ngành, cần xét <b>tác động thực tế của thuế</b>: ai cuối cùng chịu thuế. <b>Dịch chuyển thuế (tax shifting)</b>: đối tượng bị đánh thuế cố chuyển gánh nặng sang nhóm khác.' },
      { t: 'table', head: ['Hình thức', 'Cách thực hiện', 'Ví dụ'], rows: [
        ['<b>Dịch chuyển xuôi</b> (forward)', 'Tăng giá bán, chuyển thuế sang người tiêu dùng', '—'],
        ['<b>Dịch chuyển ngược</b> (backward)', 'Khi không tăng được giá (có hàng thay thế), ép giá đầu vào', 'Nhà chế biến nông sản ép giá mua của nông dân → nông dân thành người chịu thuế cuối cùng']
      ] },
      { t: 'tip', x: 'Khó xác định chính xác ai chịu thuế trong ngành, nhưng phân tích này giúp nhà hoạch định dự đoán <b>tác động của thuế lên các nhóm</b>. Xem lại chương 7 về gánh nặng thuế.' }
    ] }
  ],
  summary: [
    'Ưu đãi thuế ít hiệu quả trong thu hút đầu tư; chế độ thuế ổn định và hạ tầng tốt mới là yếu tố chính. Ưu đãi cho ngành xấu hại gấp đôi.',
    'DNNN: yêu cầu hiệu quả ít nhất bằng tư nhân; quy tắc vốn mỏng; cùng một chế độ thuế và quản lý.',
    'Cạnh tranh thuế (Ireland 10%) có lợi và hại; nên tạo môi trường kinh doanh tốt chứ không chạy đua hạ thuế.',
    'Dịch chuyển thuế xuôi (sang người mua) và ngược (ép nhà cung cấp, nông dân).'
  ],
  cards: [
    ['Các hình thức ưu đãi thuế?', 'Miễn giảm có thời hạn, thuế suất thấp theo ngành/vùng, khấu hao nhanh, thuế nhập khẩu bằng 0 cho thiết bị.'],
    ['Nghiên cứu nói gì về ưu đãi thuế?', 'Vai trò rất hạn chế trong thu hút đầu tư, thường chỉ làm mất thu.'],
    ['Hai yếu tố thật sự thu hút đầu tư?', 'Chế độ thuế ổn định mức vừa phải; hạ tầng cứng và mềm tốt.'],
    ['Vì sao ưu đãi cho xi măng (không hợp lý kinh tế) hại gấp đôi?', 'Mất thu thuế và thúc đẩy ngành mà sản xuất thêm gây hại.'],
    ['DNNN là gì?', 'Công ty được giao nhiệm vụ cụ thể mà khu vực tư nhân không thể hoặc không muốn làm.'],
    ['Lợi thế của DNNN?', 'Bảo lãnh tín dụng của nhà nước và quy mô.'],
    ['Vấn đề thu từ DNNN?', 'Nhà nước là cổ đông duy nhất, DNNN có xu hướng không tạo lợi nhuận chịu thuế hay chia cổ tức.'],
    ['Quy tắc vốn mỏng (thin capitalization)?', 'Không cấm vay nhưng giới hạn hoặc gắn việc khấu trừ lãi với hiệu quả.'],
    ['Lập luận ủng hộ cạnh tranh thuế?', 'Hấp dẫn doanh nghiệp, giảm tổn thất hiệu quả, buộc chính phủ hiệu quả hơn (vd Ireland 10%).'],
    ['Lập luận phản đối cạnh tranh thuế?', 'Bóp méo đầu tư, giảm phân phối lại, thu thấp dẫn đến nợ công cao.'],
    ['Dịch chuyển thuế xuôi và ngược?', 'Xuôi: tăng giá chuyển sang người mua; ngược: ép giá đầu vào (vd nông dân).']
  ],
  quiz: [
    { q: 'Điều nào KHÔNG phải ưu đãi thuế?', o: ['Miễn thuế có thời hạn', 'Khấu hao nhanh', 'Thuế nhập khẩu bằng 0 cho thiết bị', 'Tăng thuế mọi ngành'], a: 3, e: 'Đó là ngược lại.' },
    { q: 'Ưu đãi thuế thường:', o: ['Rất hiệu quả thu hút đầu tư', 'Vai trò hạn chế, gây mất thu', 'Luôn tăng ngân sách', 'Không có tác động'], a: 1, e: 'Kết luận của các nghiên cứu.' },
    { q: 'Yếu tố quan trọng cho nhà đầu tư:', o: ['Chế độ thuế ổn định và hạ tầng tốt', 'Chỉ lao động rẻ', 'Chỉ thuế bằng 0', 'Không gì cả'], a: 0, e: 'Nước A tốt hơn vẫn thu hút hơn B có ưu đãi.' },
    { q: 'Ưu đãi thuế cho ngành không hợp lý (xi măng) hại vì:', o: ['Chỉ mất thu', 'Mất thu và thúc đẩy ngành gây hại', 'Làm tăng giá', 'Không hại'], a: 1, e: 'Hại gấp đôi.' },
    { q: 'Vấn đề chính trong đánh thuế DNNN:', o: ['Chia cổ tức quá nhiều', 'Có xu hướng không tạo lợi nhuận chịu thuế hay chia cổ tức', 'Quá nhỏ', 'Không có vốn'], a: 1, e: 'Nhà nước là cổ đông duy nhất.' },
    { q: 'Quy tắc vốn mỏng:', o: ['Cấm vay', 'Giới hạn khấu trừ lãi hoặc gắn với hiệu quả', 'Bắt buộc vay', 'Miễn thuế'], a: 1, e: 'DNNN lãi cao được khấu trừ nhiều.' },
    { q: 'Ireland được dùng làm ví dụ cho:', o: ['Thuế cao', 'Cạnh tranh thuế bằng thuế doanh nghiệp thấp (10%)', 'Thuế khoán', 'Độc quyền'], a: 1, e: 'Nhận nhiều FDI.' },
    { q: 'Một phản đối cạnh tranh thuế:', o: ['Giảm phân phối lại do thuế lũy tiến cao khó áp dụng', 'Quá nhiều hạ tầng', 'Tăng ngân sách', 'Giảm cạnh tranh'], a: 0, e: 'Doanh nghiệp, người thu nhập cao chuyển đi.' },
    { q: 'Dịch chuyển thuế ngược xảy ra khi:', o: ['Tăng giá bán được', 'Ép giá đầu vào (nông dân) vì không tăng giá được', 'Thuế bằng 0', 'Không có thuế'], a: 1, e: 'Nông dân thành người chịu thuế cuối cùng.' }
  ],
  match: [
    ['Ưu đãi thuế', 'Hạn chế, thường chỉ mất thu'],
    ['Thin capitalization', 'Giới hạn khấu trừ lãi vay'],
    ['Ireland 10%', 'Ví dụ cạnh tranh thuế thành công'],
    ['Race to the bottom', 'Cuộc đua giảm thu và chạy theo nợ'],
    ['Forward shifting', 'Chuyển thuế sang người mua'],
    ['Backward shifting', 'Ép giá đầu vào']
  ]
},

/* ======================= CHƯƠNG 20 ======================= */
{
  n: 20,
  title: 'Hàng hóa công, trách nhiệm người nộp thuế và hệ thống tài chính',
  intro: 'Bài 75–79: vì sao có thuế (hàng hóa công), quyền giám sát chi tiêu ngân sách, hệ thống tài chính vận hành ra sao, từ kìm hãm đến tự do hóa tài chính, và xếp hạng tín nhiệm.',
  sections: [
    { icon: '🌳', title: 'Thuế và hàng hóa công (bài 75–76)', blocks: [
      { t: 'p', x: 'Có hai điều không tránh được: cái chết và thuế. Một chánh án Tối cao Mỹ nói: <i>“Thuế là cái giá chúng ta trả cho một xã hội văn minh.”</i>' },
      { t: 'key', x: '<b>Hàng hóa công</b> (quốc phòng, cầu, công viên) có nhiều người dùng cùng lúc: tôi đi dạo không ngăn bạn “tiêu dùng” công viên. Trái cái táo (hàng hóa tư): tôi ăn thì bạn không thể ăn.' },
      { t: 'p', x: 'Thị trường tư thường không sản xuất hàng hóa công vì khó buộc mọi người dùng phải trả tiền; không ai muốn sản xuất cái mình không thể ngăn người khác dùng không phải trả. Vì thế nhà nước dùng <b>thuế</b> tài trợ. Giáo dục phổ thông, y tế cơ bản cũng mang lợi ích cho cả xã hội chứ không chỉ người sử dụng.' },
      { t: 'h3', x: 'Trách nhiệm của người nộp thuế (bài 76)' },
      { t: 'list', items: [
        'Nộp thuế là nghĩa vụ tài trợ những hoạt động xã hội cho rằng chính phủ nên đầu tư; đi kèm trách nhiệm <b>biết và giám sát</b> chi tiêu.',
        'Chính phủ VN công khai ngân sách nhà nước trên website Bộ Tài chính. Năm 2000: <b>57%</b> chi ngân sách là dịch vụ xã hội và kinh tế, trong đó 21% giáo dục – đào tạo, 17,4% lương hưu và cứu trợ xã hội. Dự toán 2002: 53%, giáo dục chiếm 25%.',
        'Ví dụ Bộ GTVT nhận 4,3% chi ngân sách 2000: 82% chi đầu tư, 15% dịch vụ xã hội/kinh tế, 0,5% chương trình quốc gia. Nhưng chưa có giải thích chi tiết các nhóm chi.'
      ] },
      { t: 'tip', x: 'Cần vừa nộp thuế vừa buộc quan chức chịu trách nhiệm về cách tiêu tiền. Công khai ngân sách là một bước tiến.' }
    ] },
    { icon: '🏦', title: 'Hệ thống tài chính (bài 77)', blocks: [
      { t: 'key', x: 'Chức năng chính: dẫn vốn từ người <b>chi ít hơn thu nhập</b> (thừa vốn) tới người <b>chi nhiều hơn thu nhập</b> (thiếu vốn). Có thể dẫn <b>trực tiếp</b> qua thị trường và công cụ tài chính, hoặc <b>gián tiếp</b> qua trung gian tài chính.' },
      { t: 'table', head: ['Khái niệm', 'Nội dung'], rows: [
        ['<b>Công cụ tài chính</b>', 'Quyền đòi một khoản thu nhập hoặc tài sản trong tương lai'],
        ['<b>Thị trường tiền tệ</b>', 'Công cụ ngắn hạn (dưới 1 năm): tín phiếu kho bạc, chứng chỉ tiền gửi chuyển nhượng, thương phiếu'],
        ['<b>Thị trường vốn</b>', 'Công cụ dài hạn: cổ phiếu, trái phiếu doanh nghiệp và chính phủ'],
        ['<b>Trung gian tài chính</b>', 'Đứng giữa: vay từ người cho vay rồi cho người vay (ngân hàng thương mại, công ty bảo hiểm, quỹ tương hỗ…)']
      ] },
      { t: 'p', x: 'Hệ thống tài chính còn <b>chuyển rủi ro</b> giữa nhà đầu tư và <b>giám sát việc sử dụng vốn</b>. Hệ thống hoạt động tốt thúc đẩy tăng trưởng không chỉ vì có nhiều vốn hơn, mà quan trọng hơn là <b>phân bổ vốn hiệu quả</b> → nâng năng suất.' }
    ] },
    { icon: '🔓', title: 'Từ kìm hãm tới tự do hóa tài chính (bài 78)', blocks: [
      { t: 'p', x: '<b>Kìm hãm tài chính (financial repression)</b>: nhà nước can thiệp bằng hạn chế định lượng/định tính như khống chế lãi suất, tín dụng chỉ định.' },
      { t: 'steps', items: [
        'Khống chế lãi suất kèm lạm phát → <b>lãi tiền gửi âm</b> → vốn cho vay ít đi.',
        'Vốn khó vay từ hệ thống chính thức nên nhà đầu tư phải <b>tự tài trợ</b>.',
        'Tín dụng chỉ định, lãi suất ưu đãi gây <b>phân bổ sai</b> và vốn năng suất thấp.',
        'Giải pháp thường đề xuất: <b>tự do hóa tài chính</b> — bỏ trần lãi suất → tiết kiệm tăng, phân bổ hiệu quả hơn.'
      ] },
      { t: 'warn', x: 'Nhưng thị trường tài chính có thể thất bại. Lãi suất thực cao hơn gây <b>lựa chọn đối nghịch</b> (tỷ lệ người vay rủi ro nộp đơn tăng) và <b>rủi ro đạo đức</b> (người vay đổi dự án sang rủi ro hơn). Nhiều chính phủ tự do hóa vội vàng, toàn diện đã gặp các đợt khủng hoảng tài chính nặng.' },
      { t: 'key', x: 'Hiện nay cho rằng tự do hóa phải theo <b>trình tự</b>, song hành cải cách khác, và <b>hạ tầng mềm</b> như thể chế quản lý phải có sẵn trước khi để thị trường vận hành.' }
    ] },
    { icon: '⭐', title: 'Xếp hạng tín nhiệm (bài 79)', blocks: [
      { t: 'p', x: '<b>Xếp hạng tín nhiệm</b> là đánh giá khả năng một thực thể (doanh nghiệp, quốc gia) thực hiện đầy đủ, đúng hạn nghĩa vụ nợ, dựa trên mọi yếu tố bên trong và bên ngoài.' },
      { t: 'list', items: [
        '2002: Bộ Tài chính VN chính thức mời 3 hãng lớn (Fitch, Standard & Poor’s, Moody’s) đánh giá tín nhiệm nợ quốc gia.',
        'S&P lần đầu xếp Việt Nam ở mức <b>BB</b>; trước đó Moody’s xếp <b>B1</b>.',
        'Thang: A là tín nhiệm nhất, C là kém nhất (nói chung).',
        'Có ý nghĩa đặc biệt với <b>nhà đầu tư nhỏ</b> thiếu thời gian và kỹ năng đánh giá tổ chức phát hành chứng khoán.'
      ] }
    ] }
  ],
  summary: [
    'Hàng hóa công nhiều người dùng cùng lúc, khó thu phí → nhà nước tài trợ bằng thuế; người nộp thuế phải giám sát chi tiêu.',
    'Hệ thống tài chính dẫn vốn trực tiếp (thị trường tiền tệ, vốn) hoặc gián tiếp (trung gian), chuyển rủi ro, giám sát sử dụng vốn.',
    'Kìm hãm tài chính gây lãi âm, phân bổ sai; tự do hóa vội vàng có thể gây khủng hoảng — cần trình tự và thể chế.',
    'Xếp hạng tín nhiệm đánh giá khả năng trả nợ đúng hạn; VN: BB (S&P), B1 (Moody’s).'
  ],
  cards: [
    ['Hàng hóa công là gì?', 'Hàng hóa nhiều người dùng cùng lúc, vd quốc phòng, cầu, công viên.'],
    ['Vì sao thị trường tư không sản xuất hàng hóa công?', 'Khó buộc mọi người dùng phải trả tiền.'],
    ['“Thuế là cái giá của xã hội văn minh” nghĩa là?', 'Công dân có nghĩa vụ tài trợ những hoạt động xã hội cho rằng chính phủ nên đầu tư.'],
    ['Chi ngân sách VN 2000 cho dịch vụ xã hội & kinh tế?', '57%; trong đó 21% giáo dục – đào tạo, 17,4% lương hưu và cứu trợ.'],
    ['Chức năng chính của hệ thống tài chính?', 'Dẫn vốn từ người thừa vốn tới người thiếu vốn.'],
    ['Thị trường tiền tệ và thị trường vốn?', 'Tiền tệ: công cụ dưới 1 năm; vốn: dài hạn như cổ phiếu, trái phiếu.'],
    ['Trung gian tài chính?', 'Vay từ người cho vay rồi cho người vay: ngân hàng, bảo hiểm, quỹ tương hỗ.'],
    ['Kìm hãm tài chính?', 'Can thiệp bằng khống chế lãi suất, tín dụng chỉ định.'],
    ['Hậu quả kìm hãm?', 'Lãi tiền gửi âm, vốn khan, phân bổ sai, năng suất vốn thấp.'],
    ['Rủi ro của tự do hóa vội vàng?', 'Lựa chọn đối nghịch, rủi ro đạo đức → khủng hoảng.'],
    ['Cách tự do hóa đúng?', 'Theo trình tự, song hành cải cách khác, có sẵn hạ tầng mềm như thể chế quản lý.'],
    ['Xếp hạng tín nhiệm là gì?', 'Đánh giá khả năng thực hiện đầy đủ, đúng hạn nghĩa vụ nợ.'],
    ['VN được xếp hạng gì?', 'S&P: BB; Moody’s trước đó: B1.']
  ],
  quiz: [
    { q: 'Hàng hóa công là:', o: ['Táo', 'Hàng nhiều người dùng cùng lúc như công viên', 'Mọi hàng nhà nước bán', 'Hàng xa xỉ'], a: 1, e: 'Dùng không ngăn người khác dùng.' },
    { q: 'Vì sao thị trường tư thường không sản xuất hàng hóa công?', o: ['Quá rẻ', 'Khó buộc người dùng trả tiền', 'Nhà nước cấm', 'Không ai cần'], a: 1, e: 'Không ngăn được người không trả.' },
    { q: 'Hệ thống tài chính chuyển vốn từ:', o: ['Người thiếu sang người thừa', 'Người chi ít hơn thu nhập sang người chi nhiều hơn', 'Nhà nước sang tư nhân', 'Nước ngoài sang trong nước'], a: 1, e: 'Thừa vốn → thiếu vốn.' },
    { q: 'Công cụ nào thuộc thị trường tiền tệ?', o: ['Cổ phiếu', 'Trái phiếu 10 năm', 'Tín phiếu kho bạc', 'Bất động sản'], a: 2, e: 'Kỳ hạn dưới 1 năm.' },
    { q: 'Ngân hàng thương mại là:', o: ['Thị trường tài chính', 'Trung gian tài chính', 'Công cụ tài chính', 'Chính phủ'], a: 1, e: 'Vay từ người gửi, cho người vay.' },
    { q: 'Kìm hãm tài chính dẫn đến:', o: ['Phân bổ vốn hiệu quả', 'Lãi tiền gửi âm, phân bổ sai', 'Tăng tiết kiệm', 'Tăng vốn'], a: 1, e: 'Lãi suất bị khống chế + lạm phát.' },
    { q: 'Tự do hóa tài chính vội vàng có thể gây:', o: ['An toàn tuyệt đối', 'Khủng hoảng tài chính', 'Giảm lãi suất', 'Giảm lạm phát'], a: 1, e: 'Lựa chọn đối nghịch và rủi ro đạo đức.' },
    { q: 'Xếp hạng tín nhiệm đánh giá:', o: ['Khả năng trả nợ đúng hạn', 'Doanh thu', 'Lãi suất', 'Thuế'], a: 0, e: 'Của doanh nghiệp hoặc quốc gia.' },
    { q: 'S&P lần đầu xếp VN ở mức:', o: ['AAA', 'BB', 'C', 'D'], a: 1, e: 'Moody’s trước đó xếp B1.' }
  ],
  match: [
    ['Hàng hóa công', 'Nhiều người dùng cùng lúc'],
    ['Thị trường vốn', 'Cổ phiếu, trái phiếu'],
    ['Thị trường tiền tệ', 'Công cụ dưới 1 năm'],
    ['Financial repression', 'Khống chế lãi suất, tín dụng chỉ định'],
    ['Tự do hóa tài chính', 'Cần trình tự và thể chế'],
    ['Credit rating', 'Khả năng trả nợ đúng hạn']
  ]
}

);
