// "Phân tích tài chính" – Chương trình Giảng dạy Kinh tế Fulbright (FETP). Bài 1–3.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 1 ======================= */
{
  n: 1,
  title: 'Vai trò của quản trị tài chính',
  intro: 'Quản trị tài chính làm ba việc: quyết định đầu tư, quyết định tài trợ, quản lý tài sản — nhằm một mục tiêu: tối đa hóa giá trị tài sản của chủ sở hữu (thể hiện qua thị giá cổ phiếu).',
  sections: [
    { icon: '🧭', title: 'Quản trị tài chính là gì?', blocks: [
      { t: 'p', x: 'Tài chính có ba lĩnh vực: (1) thị trường và thể chế tài chính, (2) đầu tư tài chính, (3) <b>quản trị tài chính</b>. Môn học này tập trung vào lĩnh vực thứ ba: việc <b>đầu tư, mua sắm, tài trợ và quản lý tài sản</b> của doanh nghiệp nhằm đạt mục tiêu đề ra.' },
      { t: 'table', head: ['Quyết định', 'Gắn với', 'Câu hỏi chính'], rows: [
        ['<b>Đầu tư</b> (quan trọng nhất — tạo ra giá trị)', 'Bên <b>trái</b> bảng cân đối (tài sản)', 'Cần loại tài sản nào? Bao nhiêu tài sản lưu động / cố định? Bao nhiêu hàng tồn kho, tiền mặt?'],
        ['<b>Tài trợ</b>', 'Bên <b>phải</b> bảng cân đối (nguồn vốn)', 'Vốn chủ sở hữu hay vốn vay? Ngắn hạn hay dài hạn? Lợi nhuận giữ lại hay chia cổ tức? Vay ngân hàng hay phát hành trái phiếu, cổ phiếu?'],
        ['<b>Quản lý tài sản</b>', 'Sau khi đã mua sắm và có nguồn tài trợ', 'Dùng tài sản hiệu quả; đặc biệt tài sản lưu động dễ thất thoát, lãng phí']
      ] }
    ] },
    { icon: '🎯', title: 'Mục tiêu của công ty', blocks: [
      { t: 'p', x: 'Chuẩn mực đánh giá quản trị tài chính là mục tiêu <b>tối đa hóa giá trị tài sản của chủ sở hữu</b>. Có ba cách lượng hóa — mỗi cách khắc phục hạn chế của cách trước:' },
      { t: 'tabs', items: [
        ['EAT – lợi nhuận sau thuế', 'Chỉ tối đa hóa EAT chưa chắc tăng giá trị cổ đông. Ví dụ: phát hành cổ phiếu rồi dùng tiền mua trái phiếu kho bạc → lợi nhuận tăng nhưng <b>lợi nhuận trên cổ phần giảm</b> vì số cổ phần tăng.'],
        ['EPS – lợi nhuận trên cổ phần', 'Khắc phục hạn chế EAT nhưng vẫn: (1) <b>không xét thời giá tiền tệ</b> và độ dài của lợi nhuận kỳ vọng; (2) <b>không xét rủi ro</b>; (3) không cho phép dùng chính sách cổ tức tác động giá — chỉ vì EPS có lẽ công ty sẽ không bao giờ trả cổ tức!'],
        ['Thị giá cổ phiếu ✅', 'Mục tiêu thích hợp nhất: kết hợp <b>thời gian, rủi ro, chính sách cổ tức</b> và các yếu tố khác. Nếu cổ đông không hài lòng họ bán cổ phiếu và rút vốn → giám đốc phải tập trung tạo giá trị cho cổ đông.']
      ] },
      { t: 'key', x: '<b>Vấn đề đại diện</b>: công ty cổ phần tách rời <b>chủ sở hữu</b> và <b>người điều hành</b>, nên giám đốc có thể hành xử vì lợi riêng. Giải pháp: coi giám đốc là người đại diện của cổ đông; có cơ chế giám sát, kiểm soát và <b>chế độ khuyến khích</b> (lương thưởng thoả đáng, quyền chọn mua cổ phiếu…) để lợi ích giám đốc cũng là lợi ích cổ đông.' },
      { t: 'tip', x: '<b>Trách nhiệm xã hội</b>: tối đa hóa giá trị cổ đông không có nghĩa lờ đi bảo vệ người tiêu dùng, trả lương công bằng, an toàn lao động, đào tạo, bảo vệ môi trường. Ban quản lý chú ý lợi ích của cả <b>cổ đông (shareholders)</b> và <b>các bên liên quan (stakeholders)</b>.' }
    ] },
    { icon: '🏢', title: 'Tổ chức công ty và chức năng tài chính', blocks: [
      { t: 'p', x: 'Môn học tập trung vào <b>công ty cổ phần</b>. Trong sơ đồ tổ chức, chức năng quản trị tài chính do <b>giám đốc tài chính (CFO)</b> phụ trách, thường gồm hai mảng: <b>thủ quỹ</b> (quản lý tiền mặt, huy động vốn, quan hệ với ngân hàng và thị trường tài chính) và <b>kế toán trưởng</b> (hạch toán, báo cáo, kiểm soát). Điều này phản ánh sự khác nhau giữa <i>quản trị tài chính</i> (ra quyết định) và <i>kế toán</i> (ghi nhận, báo cáo).' }
    ] }
  ],
  summary: [
    'Quản trị tài chính gồm quyết định đầu tư, tài trợ, quản lý tài sản.',
    'Mục tiêu: tối đa hóa giá trị tài sản chủ sở hữu → tối đa hóa thị giá cổ phiếu, vì nó tính đến thời gian, rủi ro, cổ tức.',
    'EAT và EPS đều có hạn chế (bỏ qua thời giá tiền, rủi ro, cổ tức).',
    'Vấn đề đại diện giữa cổ đông và giám đốc cần giám sát và khuyến khích; trách nhiệm xã hội và các bên liên quan.'
  ],
  cards: [
    ['Ba loại quyết định của quản trị tài chính?', 'Đầu tư, tài trợ, quản lý tài sản.'],
    ['Quyết định đầu tư liên quan phía nào của bảng cân đối?', 'Bên trái (tài sản); là quyết định quan trọng nhất vì tạo ra giá trị.'],
    ['Quyết định tài trợ liên quan gì?', 'Nguồn vốn: vốn chủ sở hữu hay vay, ngắn hay dài hạn, giữ lại lợi nhuận hay chia cổ tức.'],
    ['Mục tiêu của công ty ở góc độ quản trị tài chính?', 'Tối đa hóa giá trị tài sản của chủ sở hữu.'],
    ['Hạn chế của EAT?', 'Tăng EAT bằng phát hành cổ phiếu có thể làm lợi nhuận trên cổ phần giảm.'],
    ['Hạn chế của EPS?', 'Không xét thời giá tiền tệ, rủi ro; không cho dùng chính sách cổ tức.'],
    ['Vì sao thị giá cổ phiếu là mục tiêu thích hợp nhất?', 'Kết hợp thời gian, rủi ro, chính sách cổ tức và các yếu tố khác.'],
    ['Vấn đề đại diện?', 'Tách rời sở hữu và điều hành khiến giám đốc vì lợi riêng; cần giám sát và khuyến khích.'],
    ['Shareholders và stakeholders?', 'Cổ đông và các bên liên quan (người tiêu dùng, nhân viên, xã hội, môi trường).']
  ],
  quiz: [
    { q: 'Quyết định quan trọng nhất của quản trị tài chính vì tạo ra giá trị:', o: ['Tài trợ', 'Đầu tư', 'Cổ tức', 'Kế toán'], a: 1, e: 'Đầu tư gắn với phía tài sản.' },
    { q: 'Quyết định “nên vay ngân hàng hay phát hành cổ phiếu” thuộc loại:', o: ['Đầu tư', 'Tài trợ', 'Quản lý tài sản', 'Thuế'], a: 1, e: 'Liên quan nguồn vốn.' },
    { q: 'Mục tiêu thích hợp nhất của công ty cổ phần:', o: ['Tối đa EAT', 'Tối đa EPS', 'Tối đa thị giá cổ phiếu', 'Tối thiểu chi phí'], a: 2, e: 'Kết hợp thời gian, rủi ro, cổ tức.' },
    { q: 'Hạn chế của EPS KHÔNG gồm:', o: ['Bỏ qua thời giá tiền tệ', 'Bỏ qua rủi ro', 'Không xét chính sách cổ tức', 'Không tính lợi nhuận'], a: 3, e: 'EPS vẫn dựa trên lợi nhuận.' },
    { q: 'Vấn đề đại diện xuất phát từ:', o: ['Thuế', 'Tách rời sở hữu và điều hành', 'Lạm phát', 'Tỷ giá'], a: 1, e: 'Giám đốc có thể hành xử vì lợi riêng.' },
    { q: 'Cách giải quyết vấn đề đại diện:', o: ['Bỏ giám đốc', 'Giám sát và khuyến khích (quyền chọn cổ phiếu…)', 'Chia cổ tức tối đa', 'Giảm vốn'], a: 1, e: 'Gắn lợi ích hai bên.' },
    { q: 'Stakeholders là:', o: ['Chỉ cổ đông', 'Các bên liên quan', 'Chủ nợ', 'Nhà cung cấp'], a: 1, e: 'Gồm cả người tiêu dùng, nhân viên, xã hội.' }
  ],
  match: [
    ['Quyết định đầu tư', 'Bên tài sản của bảng cân đối'],
    ['Quyết định tài trợ', 'Bên nguồn vốn của bảng cân đối'],
    ['EPS', 'Lợi nhuận trên cổ phần'],
    ['Vấn đề đại diện', 'Mâu thuẫn lợi ích cổ đông – giám đốc'],
    ['Thị giá cổ phiếu', 'Mục tiêu thích hợp nhất'],
    ['Stakeholders', 'Các bên liên quan']
  ]
},

/* ======================= BÀI 2 ======================= */
{
  n: 2,
  title: 'Môi trường kinh doanh và tài chính',
  intro: 'Quản trị tài chính không diễn ra trong chân không: loại hình doanh nghiệp, thuế và khấu hao đều ảnh hưởng đến quyết định.',
  sections: [
    { icon: '🏛️', title: 'Các loại hình doanh nghiệp', blocks: [
      { t: 'table', head: ['Loại hình (Mỹ)', 'Đặc điểm'], rows: [
        ['<b>Doanh nghiệp tư nhân</b> (sole proprietorship)', 'Một chủ, chịu trách nhiệm <b>vô hạn</b>'],
        ['<b>Công ty hợp doanh</b> (partnership)', '2 chủ trở lên; có thể vô hạn hoặc hữu hạn'],
        ['<b>Công ty cổ phần</b> (corporation)', 'Thành lập theo luật; nhiều cổ đông; <b>trách nhiệm hữu hạn</b> trong phạm vi vốn góp'],
        ['<b>Công ty TNHH</b> (LLC)', 'Kết hợp đặc tính công ty cổ phần và hợp doanh']
      ] },
      { t: 'p', x: 'Ở Việt Nam: <b>TNHH nhiều thành viên</b> (không quá 50 thành viên, chịu trách nhiệm trong phạm vi vốn cam kết); <b>TNHH một thành viên</b> (chủ sở hữu là một tổ chức); <b>công ty cổ phần</b> (vốn chia thành cổ phần bằng nhau, cổ đông chịu trách nhiệm trong vốn góp, tự do chuyển nhượng, trừ cổ đông ưu đãi và sáng lập trong 3 năm đầu); <b>công ty hợp doanh</b> (ít nhất 2 thành viên hợp doanh chịu trách nhiệm vô hạn, có thể có thành viên góp vốn); <b>doanh nghiệp tư nhân</b>.' },
      { t: 'table', head: ['Loại', 'Ưu điểm', 'Nhược điểm'], rows: [
        ['Tư nhân', 'Thủ tục đơn giản, ít vốn, chủ hưởng toàn bộ lợi nhuận và toàn quyền quyết định', 'Trách nhiệm vô hạn; hạn chế kỹ năng và huy động vốn; không liên tục khi chủ qua đời'],
        ['Hợp doanh', 'Dễ thành lập; huy động vốn và kỹ năng của các thành viên; không bị đánh thuế 2 lần', 'Trách nhiệm vô hạn; khó tích lũy vốn; dễ mâu thuẫn giữa thành viên'],
        ['<b>Cổ phần</b>', 'Trách nhiệm hữu hạn; dễ thu hút vốn; sống mãi (không giới hạn tuổi chủ); chuyển nhượng quyền sở hữu; quy mô; huy động kỹ năng nhiều người', 'Tốn chi phí và thời gian thành lập; <b>bị đánh thuế 2 lần</b>; nguy cơ thiếu nhiệt tình của ban quản lý; chịu quy định pháp lý nghiêm ngặt; có thể mất quyền kiểm soát của người sáng lập']
      ] }
    ] },
    { icon: '💸', title: 'Môi trường thuế', blocks: [
      { t: 'p', x: 'Hầu hết quyết định tài chính đều trực tiếp hoặc gián tiếp ảnh hưởng <b>thuế thu nhập công ty</b>. <b>Thu nhập chịu thuế = doanh thu − mọi chi phí hợp lý</b> (gồm khấu hao và lãi vay). Công ty muốn đưa nhiều khấu hao và lãi vay vào chi phí để tiết kiệm thuế; cơ quan thuế chỉ chấp nhận chi phí hợp lý nên có quy định cụ thể về cách tính khấu hao.' },
      { t: 'key', x: '<b>Khấu hao</b> là phân bổ có hệ thống chi phí mua sắm tài sản cố định vào giá thành theo từng thời kỳ (cho báo cáo tài chính hoặc tính thuế). Vì được trừ khỏi thu nhập chịu thuế nên nó là <b>yếu tố giúp công ty tiết kiệm thuế</b> (lá chắn thuế). Có nhiều cách tính, dẫn đến thu nhập chịu thuế khác nhau.' },
      { t: 'tip', x: '<b>Khấu hao đường thẳng</b>: chi phí khấu hao = giá trị tài sản ÷ thời gian sử dụng, cố định theo thời gian. Ví dụ tài sản $10.000, tuổi thọ 5 năm → khấu hao mỗi năm <b>$2.000</b>.' }
    ] }
  ],
  summary: [
    'Loại hình doanh nghiệp quyết định trách nhiệm pháp lý, khả năng huy động vốn, thuế.',
    'Công ty cổ phần: trách nhiệm hữu hạn, dễ huy động vốn, sống mãi, nhưng bị đánh thuế 2 lần.',
    'Thu nhập chịu thuế = doanh thu − chi phí hợp lý (khấu hao, lãi vay).',
    'Khấu hao là chi phí được trừ thuế → lá chắn thuế; đường thẳng: giá trị ÷ số năm.'
  ],
  cards: [
    ['Công ty cổ phần có trách nhiệm gì?', 'Hữu hạn trong phạm vi vốn góp.'],
    ['Nhược điểm của công ty cổ phần?', 'Chi phí và thời gian thành lập, đánh thuế 2 lần, quy định nghiêm ngặt, có thể mất quyền kiểm soát.'],
    ['Ưu điểm của công ty hợp doanh?', 'Dễ thành lập, huy động vốn và kỹ năng thành viên, không đánh thuế 2 lần.'],
    ['Doanh nghiệp tư nhân chịu trách nhiệm thế nào?', 'Vô hạn bằng toàn bộ tài sản.'],
    ['TNHH nhiều thành viên ở VN tối đa mấy thành viên?', 'Không quá 50.'],
    ['Thu nhập chịu thuế tính thế nào?', 'Doanh thu trừ mọi chi phí hợp lý, gồm khấu hao và lãi vay.'],
    ['Khấu hao là gì?', 'Phân bổ có hệ thống chi phí mua sắm tài sản cố định vào giá thành theo từng thời kỳ.'],
    ['Vì sao khấu hao giúp tiết kiệm thuế?', 'Là chi phí được khấu trừ khỏi thu nhập chịu thuế.'],
    ['Khấu hao đường thẳng của tài sản $10.000, 5 năm?', '$2.000 mỗi năm.']
  ],
  quiz: [
    { q: 'Loại hình nào bị đánh thuế hai lần?', o: ['Tư nhân', 'Hợp doanh', 'Công ty cổ phần', 'Tất cả'], a: 2, e: 'Thuế công ty và thuế cổ tức.' },
    { q: 'Doanh nghiệp tư nhân:', o: ['Trách nhiệm hữu hạn', 'Trách nhiệm vô hạn', 'Nhiều chủ', 'Phát hành cổ phiếu'], a: 1, e: 'Một chủ chịu bằng toàn bộ tài sản.' },
    { q: 'Thu nhập chịu thuế bằng:', o: ['Doanh thu', 'Doanh thu trừ chi phí hợp lý', 'Lợi nhuận trước khấu hao', 'Vốn'], a: 1, e: 'Chi phí gồm khấu hao và lãi vay.' },
    { q: 'Khấu hao đường thẳng $10.000 trong 5 năm là:', o: ['$1.000', '$2.000', '$5.000', '$10.000'], a: 1, e: '10.000 ÷ 5.' },
    { q: 'Vì sao nhà nước có quy định về khấu hao?', o: ['Để công ty khỏi trốn thuế bằng chi phí không hợp lý', 'Để tăng giá', 'Để giảm vốn', 'Không có lý do'], a: 0, e: 'Cơ quan thuế chỉ chấp nhận chi phí hợp lý.' },
    { q: 'Ưu điểm của công ty cổ phần:', o: ['Chịu trách nhiệm vô hạn', 'Dễ thu hút vốn và hoạt động mãi mãi', 'Không thuế', 'Không quy định'], a: 1, e: 'Nhờ tách quyền sở hữu.' }
  ],
  match: [
    ['Công ty cổ phần', 'Hữu hạn, dễ huy động vốn, thuế 2 lần'],
    ['Hợp doanh', 'Không bị đánh thuế 2 lần'],
    ['Tư nhân', 'Trách nhiệm vô hạn'],
    ['Khấu hao', 'Chi phí giúp tiết kiệm thuế'],
    ['Thu nhập chịu thuế', 'Doanh thu − chi phí hợp lý'],
    ['Đường thẳng', 'Khấu hao đều mỗi năm']
  ]
},

/* ======================= BÀI 3 ======================= */
{
  n: 3,
  title: 'Thời giá tiền tệ',
  intro: 'Một đồng hôm nay đáng giá hơn một đồng ngày mai. Lãi đơn, lãi kép, giá trị tương lai và hiện tại, dòng niên kim, ghép lãi nhiều lần, lãi suất hiệu dụng và bảng trả nợ góp — nền tảng của mọi mô hình định giá.',
  sections: [
    { icon: '🪙', title: 'Lãi đơn, lãi kép, FV và PV của một số tiền', blocks: [
      { t: 'table', head: ['Khái niệm', 'Công thức', 'Ví dụ'], rows: [
        ['<b>Lãi đơn</b> (chỉ tính trên gốc)', 'SI = P₀ · i · n', '$1.000, 8%/năm, 10 năm: 1.000 + 1.000·0,08·10 = <b>$1.800</b>'],
        ['<b>Lãi kép</b> (lãi tính trên lãi)', 'FVₙ = P₀(1+i)ⁿ', '$1.000, 8%, 10 năm: <b>$2.159</b>'],
        ['<b>Hiện giá</b> (PV)', 'PV = FVₙ / (1+i)ⁿ', 'Muốn có $1.000 sau 3 năm, i = 8%: gửi <b>$794</b>'],
        ['<b>Tìm lãi suất</b>', 'i = (FV/PV)^(1/n) − 1', '$1.000 → $3.000 sau 8 năm: (3)^(1/8) − 1 = <b>14,72%</b>'],
        ['<b>Tìm số kỳ</b>', 'n = ln(FV/PV) / ln(1+i)', '$1.000 → $5.000 với 10%: ln5/ln1,1 = <b>16,89 năm</b>']
      ] },
      { t: 'widget', name: 'tvm', title: 'Máy tính FV, PV, lãi suất và số kỳ' }
    ] },
    { icon: '🔁', title: 'Dòng tiền: niên kim, vĩnh cửu và hỗn tạp', blocks: [
      { t: 'p', x: '<b>Dòng niên kim (annuity)</b>: các khoản bằng nhau qua nhiều kỳ. Có 3 loại: <b>thông thường</b> (cuối kỳ), <b>đầu kỳ</b> (annuity due) và <b>vĩnh cửu</b> (không bao giờ chấm dứt). <b>Dòng tiền hỗn tạp</b>: các khoản không bằng nhau.' },
      { t: 'table', head: ['Loại', 'Công thức', 'Ví dụ'], rows: [
        ['FV niên kim thường', 'FVA = R · [ (1+i)ⁿ − 1 ] / i', 'R = $6.000, 6%, 5 năm: <b>$33.822</b>'],
        ['FV niên kim đầu kỳ', 'FVAD = FVA · (1+i)', '33.822 × 1,06 = <b>$35.851</b>'],
        ['PV niên kim thường', 'PVA = R · [ 1 − (1+i)⁻ⁿ ] / i', 'R = $6.000, 6%, 5 năm: <b>$25.272</b>'],
        ['PV niên kim đầu kỳ', 'PVAD = PVA · (1+i)', '—'],
        ['<b>PV vĩnh cửu</b>', 'PV = R / i', 'Cổ tức ưu đãi cố định $2.000/năm, i = 10% → $20.000'],
        ['PV hỗn tạp', 'Σ Rₜ / (1+i)ᵗ', 'Cộng hiện giá từng khoản (dùng Excel khi n lớn)']
      ] },
      { t: 'tip', x: 'Tìm lãi suất của niên kim: ông A gửi 5 triệu/năm để có 32 triệu sau 5 năm: FVIFA = 32/5 = 6,4 → i ≈ <b>12,37%</b>. Tìm số kỳ với i = 12%: n ≈ <b>5,03 năm</b>.' }
    ] },
    { icon: '🔄', title: 'Ghép lãi nhiều lần trong năm; lãi suất danh nghĩa và hiệu dụng', blocks: [
      { t: 'key', x: 'Nếu ghép lãi <b>m lần/năm</b> với lãi suất danh nghĩa i: <b>FVₙ = P₀ [1 + i/m]^(mn)</b>. Khi m → ∞ (lãi liên tục): <b>FVₙ = P₀ · e^(i·n)</b>.' },
      { t: 'table', head: ['Cách ghép lãi ($1.000, 6%, 3 năm)', 'Kết quả'], rows: [
        ['Hằng năm', '$1.191,02'],
        ['Bán niên (m = 2)', '$1.194,05'],
        ['Theo quý (m = 4)', '$1.195,62'],
        ['Theo tháng (m = 12)', '$1.196,68'],
        ['Liên tục', '$1.197,22']
      ] },
      { t: 'warn', x: 'Sách ghi lại ví dụ này (quý: 1.126,49; tháng: 1.127,16) là <b>số liệu chép nhầm</b> — kết quả đúng như bảng trên (cùng lãi suất công bố, ghép càng nhiều thì lãi càng cao). Nhận xét chính vẫn đúng: <b>ghép lãi càng nhanh, lãi thực càng cao</b> → lãi suất thực khác lãi suất công bố.' },
      { t: 'key', x: '<b>Lãi suất hiệu dụng</b> = (1 + i/m)^m − 1 = lãi suất thực tế sau khi điều chỉnh theo số lần ghép lãi. Lãi suất danh nghĩa là lãi suất niêm yết (thường %/năm).' }
    ] },
    { icon: '🏠', title: 'Vay trả góp', blocks: [
      { t: 'p', x: 'Vay <b>$22.000</b>, lãi 12%/năm, trả đều trong <b>6 năm</b>: 22.000 = R · PVIFA(12%, 6) = R · 4,111 → <b>R = $5.351/năm</b>.' },
      { t: 'table', head: ['Năm', 'Tiền góp', 'Tiền lãi', 'Tiền gốc', 'Dư nợ còn lại'], rows: [
        ['0', '—', '—', '—', '22.000'], ['1', '5.351', '2.640', '2.711', '19.289'], ['2', '5.351', '2.351', '3.036', '16.253'], ['3', '5.351', '1.951', '3.400', '12.853'],
        ['4', '5.351', '1.542', '3.809', '9.044'], ['5', '5.351', '1.085', '4.266', '4.778'], ['6', '5.351', '573', '4.778', '0'], ['Cộng', '32.106', '10.106', '22.000', '']
      ] },
      { t: 'widget', name: 'loan', title: 'Bảng trả nợ vay trả góp' }
    ] }
  ],
  summary: [
    'Lãi đơn chỉ tính trên gốc; lãi kép tính cả lãi trên lãi: FV = P(1+i)ⁿ; PV = FV/(1+i)ⁿ.',
    'Niên kim: FVA = R·[(1+i)ⁿ−1]/i; PVA = R·[1−(1+i)⁻ⁿ]/i; vĩnh cửu: R/i; đầu kỳ nhân thêm (1+i).',
    'Ghép lãi nhiều lần: (1+i/m)^(mn); liên tục: e^(in); lãi suất hiệu dụng ≥ danh nghĩa.',
    'Vay trả góp: khoản trả đều R = Vay / PVIFA; lãi giảm dần, gốc tăng dần.'
  ],
  cards: [
    ['Lãi đơn vs lãi kép?', 'Lãi đơn chỉ tính trên gốc; lãi kép tính cả trên lãi sinh ra.'],
    ['Công thức giá trị tương lai?', 'FVₙ = P₀(1+i)ⁿ.'],
    ['Công thức hiện giá?', 'PV = FVₙ/(1+i)ⁿ.'],
    ['Dòng niên kim là gì?', 'Dòng tiền gồm các khoản bằng nhau qua nhiều kỳ.'],
    ['Ba loại dòng niên kim?', 'Thông thường (cuối kỳ), đầu kỳ, vĩnh cửu.'],
    ['Hiện giá niên kim vĩnh cửu?', 'PV = R / i.'],
    ['Niên kim đầu kỳ khác thường thế nào?', 'Nhân thêm (1+i) vì mỗi khoản sớm hơn một kỳ.'],
    ['Dòng tiền hỗn tạp?', 'Các khoản không bằng nhau; cộng hiện giá từng khoản.'],
    ['Công thức khi ghép lãi m lần/năm?', 'FV = P₀[1 + i/m]^(mn).'],
    ['Lãi kép liên tục?', 'FV = P₀·e^(i·n), e ≈ 2,7182.'],
    ['Lãi suất hiệu dụng?', 'Lãi suất thực sau khi điều chỉnh theo số lần ghép lãi: (1+i/m)^m − 1.'],
    ['Vay trả góp: khoản trả đều tính thế nào?', 'R = Vay ÷ PVIFA(i, n).'],
    ['Trong bảng trả nợ, lãi và gốc thay đổi ra sao?', 'Lãi giảm dần (tính trên dư nợ giảm), gốc tăng dần.']
  ],
  quiz: [
    { q: '$1.000 gửi 10 năm lãi đơn 8%/năm thu về:', o: ['$1.800', '$2.159', '$1.080', '$2.000'], a: 0, e: '1.000 + 1.000·0,08·10.' },
    { q: '$1.000 gửi 10 năm lãi kép 8%/năm thu về:', o: ['$1.800', '$2.159', '$2.500', '$1.600'], a: 1, e: '1.000·1,08¹⁰.' },
    { q: 'Hiện giá của $1.000 sau 3 năm với 8%:', o: ['$794', '$1.080', '$920', '$600'], a: 0, e: '1.000/1,08³.' },
    { q: '$1.000 thành $3.000 sau 8 năm: lãi suất khoảng:', o: ['8%', '10%', '14,72%', '25%'], a: 2, e: '3^(1/8) − 1.' },
    { q: 'Hiện giá niên kim vĩnh cửu R = 2.000, i = 10%:', o: ['$2.000', '$10.000', '$20.000', '$200.000'], a: 2, e: 'R/i.' },
    { q: 'Niên kim đầu kỳ so với thông thường (cùng R, i, n) có giá trị:', o: ['Thấp hơn', 'Bằng', 'Cao hơn (1+i) lần', 'Bằng không'], a: 2, e: 'Mỗi khoản sớm hơn một kỳ.' },
    { q: 'Cùng lãi suất danh nghĩa, ghép lãi nhiều lần hơn thì:', o: ['Lãi thực ít hơn', 'Lãi thực nhiều hơn', 'Như nhau', 'Không xác định'], a: 1, e: 'Lãi hiệu dụng cao hơn.' },
    { q: 'Lãi suất hiệu dụng của 12% ghép theo quý (m = 4) khoảng:', o: ['12%', '12,55%', '13,5%', '16%'], a: 1, e: '(1,03)⁴ − 1.' },
    { q: 'Vay $22.000, 12%, 6 năm: khoản trả đều hằng năm khoảng:', o: ['$3.667', '$5.351', '$7.000', '$22.000'], a: 1, e: '22.000/4,111.' },
    { q: 'Trong khoản vay trả góp đều, theo thời gian tiền lãi mỗi kỳ:', o: ['Tăng', 'Giảm', 'Không đổi', 'Bằng gốc'], a: 1, e: 'Lãi tính trên dư nợ giảm dần.' }
  ],
  match: [
    ['FV', 'P(1+i)ⁿ'],
    ['PV', 'FV/(1+i)ⁿ'],
    ['Vĩnh cửu', 'R / i'],
    ['Lãi suất hiệu dụng', 'Lãi thực sau khi ghép lãi'],
    ['Lãi liên tục', 'e^(i·n)'],
    ['Vay trả góp', 'R = vay / PVIFA']
  ]
}

);
