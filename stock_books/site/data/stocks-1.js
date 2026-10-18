// Understanding Stocks (Michael Sincere) – Chương 1–3.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.stocks = BOOK_DATA.stocks || { chapters: [] };
BOOK_DATA.stocks.chapters.push({
  n: 1,
  title: 'Chào mừng đến thị trường chứng khoán',
  intro: 'Thị trường chứng khoán như một phiên đấu giá khổng lồ: doanh nghiệp bán “mảnh giấy” sở hữu để huy động vốn, nhà đầu tư mua để hy vọng bán giá cao hơn. Chương này cho bạn bức tranh toàn cảnh, từ sàn giao dịch đến cách tính lãi lỗ.',
  sections: [
    { icon: '🏛️', title: 'Cổ phiếu là gì?', blocks: [
      { t: 'key', x: 'Cổ phiếu (stock/share/equity) là <b>mảnh quyền sở hữu</b> trong một công ty cổ phần. Mua cổ phiếu = trở thành <b>cổ đông</b>: bạn chia sẻ thành công của doanh nghiệp, mỗi cổ phiếu có <b>một phiếu bầu</b>. Hầu hết cổ đông chỉ sở hữu một phần rất nhỏ, gần như không có quyền chi phối.' },
      { t: 'list', items: [
        'Công ty phát hành cổ phiếu để huy động tiền (thuê nhân sự, xây nhà máy, nâng cấp thiết bị).',
        'Công ty làm ăn tốt ⇒ giá cổ phiếu thường tăng; làm ăn tệ ⇒ thường giảm (chỉ thành lỗ thật khi bạn bán).',
        'Chứng chỉ cổ phiếu là bằng chứng bằng văn bản; thường để công ty môi giới giữ hộ. Bạn đầu tư vào <b>công ty</b>, không phải vào “mã”. Có cổ phiếu phổ thông và ưu đãi (sách chỉ bàn cổ phiếu phổ thông).',
        '<b>Lý do duy nhất mua cổ phiếu: kiếm tiền.</b> Lãi từ chênh lệch giá bán − giá mua gọi là <b>capital gain</b>; lỗ là <b>capital loss</b>. Không có bảo đảm.'
      ] }
    ] },
    { icon: '🏦', title: 'Sàn giao dịch và chủ thể thị trường', blocks: [
      { t: 'tabs', items: [
        ['NYSE', '<p>Bắt nguồn từ thoả thuận Buttonwood (1792) của 24 nhà môi giới dưới gốc cây ở phố Wall; tiền hoa hồng 1/4 đô mỗi cổ phiếu. Niêm yết các <b>blue-chip</b> lớn (Wal-Mart, P&amp;G, J&amp;J, Coca-Cola).</p>'],
        ['AMEX', '<p>Xuất phát từ các “curbside traders” giao dịch ngoài lề đường vì không đủ chuẩn vào NYSE.</p>'],
        ['Nasdaq', '<p>Sàn điện tử đầu tiên (1971), nối mạng máy tính. Nhiều công ty công nghệ (Cisco, Intel, Sun). Cổ phiếu OTC giao dịch trên Nasdaq. Có hơn 5.000 cổ phiếu trên ba sàn chính và 5.000 công ty nhỏ OTC.</p>']
      ] },
      { t: 'p', x: 'Sàn giao dịch chỉ là nơi tổ chức thị trường (như siêu thị cho thực phẩm). “Wall Street” là cách gọi chung cho các sàn và tổ chức tài chính. Công ty rất khó được niêm yết vì có nhiều quy định, có khi mất nhiều năm.' },
      { t: 'h3', x: 'Ba loại người tham gia' },
      { t: 'table', head: ['Loại', 'Mục tiêu', 'Ghi chú'], rows: [
        ['Nhà đầu tư cá nhân', 'Mua công ty mình tin, giữ dài hạn (≥ 1 năm)', 'Buffett: “mua doanh nghiệp, không phải cổ phiếu”; khi nào bán? “Không bao giờ”'],
        ['Nhà giao dịch ngắn hạn', 'Khai thác biến động giá ngắn hạn (phút → tuần)', 'Day trader mua sáng bán chiều, rất khó kiếm sống ổn định'],
        ['Chuyên gia/tổ chức', 'Giao dịch bằng tiền của người khác (quỹ hưu trí, ngân hàng, quỹ tương hỗ)', 'Ảnh hưởng cả thị trường; có chương trình tự mua/bán theo giá']
      ] }
    ] },
    { icon: '📊', title: 'Chỉ số và cách “ghi điểm”', blocks: [
      { t: 'list', items: [
        '<b>Dow Jones (DJIA)</b>: Charles Dow tính trung bình giá đóng cửa 12 cổ phiếu đường sắt (1884); từ 1928 gồm 30 cổ phiếu (Dow 30); nay có trọng số — cổ phiếu trọng số lớn tác động mạnh hơn. General Electric là mã còn lại từ nhóm gốc.',
        '<b>Nasdaq Composite</b> (hơn 5.000 mã) và <b>S&amp;P 500</b> (500 cổ phiếu lớn do S&amp;P chọn). Còn có Russell 2000, Wilshire 5000.',
        'Chuyên gia luôn cố <b>đánh bại chỉ số</b> — rất khó: 2001 khoảng 50% nhà quản lý không thắng chỉ số; 2002 chỉ 37% thắng.',
        '<b>Điểm (point)</b> tương ứng đô la: cổ phiếu từ $5 lên $10 = tăng 5 điểm. Nói điểm hoặc phần trăm, tránh khoe số tiền chính xác.'
      ] },
      { t: 'widget', name: 'stock-calc', title: 'Tính chi phí mua và lãi/lỗ' },
      { t: 'tip', x: 'Ví dụ sách: 100 cổ phiếu × $20 = $2.000 (chưa tính hoa hồng). Mua 1.000 cổ phiếu giá $15 = $15.000; tăng 1 điểm = lãi $1.000.' }
    ] },
    { icon: '🤝', title: 'Ai mua khi không ai muốn mua? Vì sao nên mua cổ phiếu? Rủi ro', blocks: [
      { t: 'p', x: 'Sàn luôn có người ở phía bên kia giao dịch: ở NYSE là <b>specialist</b> (tạo thị trường cho mỗi cổ phiếu, kể cả dùng tiền riêng); ở Nasdaq là nhiều <b>market maker</b> (Microsoft có thể có ~30). Họ kiếm lời từ chênh lệch mua–bán và phí mỗi giao dịch.' },
      { t: 'key', x: 'Vì sao nên mua cổ phiếu? Theo nghiên cứu, 75 năm qua cổ phiếu thắng mọi loại đầu tư khác trong mọi khoảng 10 năm; trung bình ~11%/năm; Jeremy Siegel (<i>Stocks for the Long Run</i>): lợi suất thực ~8%/năm dài hạn. Ngắn hạn rủi ro hơn tài sản thu nhập cố định.' },
      { t: 'warn', x: '<b>Rủi ro</b>: có thể mất một phần hoặc toàn bộ tiền (thậm chí nhiều hơn số tiền bỏ vào khi dùng đòn bẩy). Các loại: cả thị trường giảm (chiến tranh, suy thoái, khủng bố); cổ phiếu của bạn giảm dù thị trường tăng; lạm phát làm tiền mất giá nếu gửi tiết kiệm; rủi ro bỏ lỡ cơ hội. Không loại bỏ được rủi ro, chỉ <b>quản lý</b> được.' }
    ] }
  ],
  summary: [
    'Cổ phiếu là quyền sở hữu một phần công ty; mua để kiếm tiền, không có bảo đảm.',
    'Ba sàn chính: NYSE, AMEX, Nasdaq; specialist/market maker bảo đảm luôn có người đối ứng.',
    'Ba loại người chơi: nhà đầu tư, nhà giao dịch ngắn hạn, tổ chức chuyên nghiệp.',
    'Chỉ số Dow 30, Nasdaq Composite, S&P 500 đo thị trường; đánh bại chỉ số rất khó.',
    'Cổ phiếu có lợi suất dài hạn tốt nhất nhưng rủi ro ngắn hạn; rủi ro luôn tồn tại.'
  ],
  cards: [
    ['Cổ phiếu là gì?', 'Mảnh quyền sở hữu một phần công ty cổ phần; mỗi cổ phiếu một phiếu bầu.'],
    ['Mục đích duy nhất khi mua cổ phiếu?', 'Kiếm tiền (capital gain).'],
    ['Capital gain / capital loss?', 'Lãi / lỗ từ chênh lệch giữa giá bán và giá mua.'],
    ['Thoả thuận Buttonwood?', '1792, 24 nhà môi giới tổ chức giao dịch, khởi đầu NYSE.'],
    ['Ba sàn chính của Mỹ?', 'NYSE, AMEX, Nasdaq.'],
    ['Nasdaq có gì đặc biệt?', 'Sàn điện tử đầu tiên (1971), nhiều công ty công nghệ.'],
    ['Nhà đầu tư vs nhà giao dịch ngắn hạn?', 'Nhà đầu tư giữ dài hạn vào công ty; nhà giao dịch khai thác biến động giá ngắn hạn.'],
    ['Day trader là gì?', 'Nhà giao dịch rất ngắn hạn, mua bán trong ngày; rất khó duy trì lợi nhuận.'],
    ['Dow 30 là gì?', 'Chỉ số 30 cổ phiếu công nghiệp lớn, có trọng số.'],
    ['S&P 500?', '500 cổ phiếu lớn do S&P chọn đại diện thị trường.'],
    ['1 điểm của cổ phiếu là gì?', '1 đô la thay đổi giá mỗi cổ phiếu; 1.000 cổ phiếu × 1 điểm = $1.000.'],
    ['Specialist?', 'Người tạo thị trường cho một cổ phiếu ở NYSE, luôn khớp lệnh.'],
    ['Market maker?', 'Trung gian ở Nasdaq, một cổ phiếu có thể có nhiều market maker.'],
    ['Lợi suất cổ phiếu trung bình theo sách?', 'Khoảng 11%/năm trong 75 năm; Siegel: ~8% thực dài hạn.'],
    ['Các loại rủi ro cổ phiếu?', 'Thị trường giảm, cổ phiếu riêng giảm, lạm phát, bỏ lỡ cơ hội.']
  ],
  quiz: [
    { q: 'Mua 100 cổ phiếu giá $20 tốn:', o: ['$200', '$2.000', '$20.000', '$120'], a: 1, e: '100 × 20.' },
    { q: 'Cổ phiếu từ $10 lên $11, bạn có 1.000 cổ phiếu ⇒ lãi:', o: ['$1', '$100', '$1.000', '$10.000'], a: 2, e: '1 điểm × 1.000.' },
    { q: 'Sàn điện tử đầu tiên:', o: ['NYSE', 'AMEX', 'Nasdaq', 'Dow'], a: 2, e: 'Thành lập 1971.' },
    { q: 'Specialist làm gì?', o: ['Phát hành cổ phiếu', 'Tạo thị trường, luôn khớp lệnh cho một cổ phiếu ở NYSE', 'Kiểm toán', 'Thu thuế'], a: 1, e: 'Đảm bảo luôn có người đối ứng.' },
    { q: 'Nhà đầu tư kiểu Buffett:', o: ['Day trade', 'Mua doanh nghiệp, giữ lâu dài', 'Bán khống', 'Chỉ mua penny stock'], a: 1, e: '“Không bao giờ” bán.' },
    { q: 'Chỉ số có trọng số nghĩa là:', o: ['Mọi cổ phiếu tác động bằng nhau', 'Cổ phiếu trọng số lớn tác động mạnh hơn', 'Chỉ giá thấp quan trọng', 'Không đổi'], a: 1, e: 'Dow hiện nay.' },
    { q: 'Phần lớn nhà quản lý chuyên nghiệp:', o: ['Đều thắng chỉ số', 'Khó thắng chỉ số mỗi năm', 'Luôn thua', 'Không so sánh'], a: 1, e: '2002 chỉ 37% thắng.' },
    { q: 'Rủi ro nào KHÔNG được sách nhắc?', o: ['Thị trường giảm', 'Lạm phát', 'Bỏ lỡ cơ hội', 'Rủi ro bằng không nếu đa dạng'], a: 3, e: 'Không loại bỏ được rủi ro.' },
    { q: 'Wall Street là gì?', o: ['Chỉ một con phố', 'Cách gọi chung cho thị trường tài chính Mỹ', 'Một sàn', 'Một chỉ số'], a: 1, e: 'Biểu tượng của sàn và tổ chức tài chính.' },
    { q: 'Cổ phiếu OTC giao dịch ở:', o: ['NYSE', 'Nasdaq (over the counter)', 'AMEX', 'Ngân hàng'], a: 1, e: 'Công ty nhỏ hơn.' }
  ],
  match: [
    ['Capital gain', 'Lãi từ chênh lệch giá bán – mua'],
    ['Blue-chip', 'Công ty lớn, nổi tiếng, vững'],
    ['Dow 30', 'Chỉ số 30 cổ phiếu công nghiệp'],
    ['S&P 500', '500 cổ phiếu lớn đại diện thị trường'],
    ['Market maker', 'Trung gian ở Nasdaq'],
    ['Day trader', 'Mua bán trong ngày'],
    ['Buttonwood', 'Khởi đầu NYSE 1792']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 2,
  title: 'Cổ phiếu không phải khoản đầu tư duy nhất',
  intro: 'Trái phiếu, quỹ tương hỗ, quỹ chỉ số, tiền mặt và bất động sản là những lựa chọn bên cạnh cổ phiếu. Biết chúng giúp bạn đa dạng hoá và hiểu thị trường bò, gấu, đi ngang.',
  sections: [
    { icon: '📜', title: 'Trái phiếu', blocks: [
      { t: 'key', x: 'Trái phiếu là <b>giấy nợ</b>: bạn cho công ty/chính phủ vay và nhận <b>coupon</b> (lãi cố định) đến <b>ngày đáo hạn</b>, khi nhận lại gốc. Ví dụ: cho vay $5.000, 10 năm, coupon 10% ⇒ $500/năm.' },
      { t: 'table', head: ['Phân loại', 'Nội dung'], rows: [
        ['Theo người phát hành', '<b>Treasuries</b> (chính phủ Mỹ, an toàn nhất); <b>munis</b> (chính quyền địa phương, thường miễn thuế); <b>corporate</b> (rủi ro cao nhất nhưng lãi cao nhất)'],
        ['Theo kỳ hạn', '<b>Bills</b> 1–12 tháng; <b>notes</b> 1–10 năm; <b>bonds</b> ≥ 10 năm (đến 30 năm); kỳ hạn dài thường lãi cao hơn'],
        ['Xếp hạng', 'AAA an toàn nhất; hạng thấp ⇒ lãi cao hơn; hạng quá thấp là <b>trái phiếu rác</b>']
      ] },
      { t: 'widget', name: 'bond-rate', title: 'Lãi suất tăng ⇒ giá trái phiếu giảm' },
      { t: 'warn', x: 'Rủi ro: công ty phá sản (Enron, WorldCom, Global Crossing). <b>Giá trái phiếu và lãi suất nghịch chiều</b>: mua $1.000 coupon 8%; lãi suất xuống dưới 8% ⇒ giá lên trên $1.000; lãi suất tăng ⇒ giá dưới $1.000. Sau khi thị trường đỉnh 2000, Fed hạ lãi suất hơn 12 lần.' }
    ] },
    { icon: '🧺', title: 'Quỹ tương hỗ và quỹ chỉ số', blocks: [
      { t: 'key', x: 'Quỹ tương hỗ gom tiền nhà đầu tư để mua rổ cổ phiếu/trái phiếu/tiền mặt, do nhà quản lý quyết định. Ưu điểm: <b>đa dạng hoá tức thì</b>, phí thấp so với hoa hồng cổ phiếu, vài nghìn đô là vào được; có hơn 7.000 quỹ (stock fund, sector fund, bond fund, international fund).' },
      { t: 'list', items: [
        '<b>Đa dạng hoá</b>: WorldCom khai khống $3,8 tỷ làm cổ phiếu mất > 90% trong một ngày; quỹ chứa nó có thể chỉ mất ≤ 3%. Nhưng ngược lại, cổ phiếu tăng 10–20% một ngày chỉ làm quỹ tăng 1–2%.',
        '<b>NAV</b> (net asset value) = giá trị một đơn vị quỹ, tương tự giá cổ phiếu; phí quản lý trừ vào NAV.',
        '<b>No-load</b> (không phí bán) rẻ hơn <b>load</b>; không có bằng chứng load tốt hơn.',
        'Quỹ có thể mất rất nhiều trong thị trường gấu (một số mất tới 70%). Qua <b>401(k)</b>: hoãn thuế đến 59½ tuổi, có thể chuyển sang IRA.',
        '<b>Quỹ chỉ số</b> (index fund): không có nhà quản lý chủ động, chỉ chứa các cổ phiếu của chỉ số (DIA – Dow, SPY – S&amp;P 500, QQQ – Nasdaq 100). Rẻ hơn; hơn 50% nhà quản lý không thắng được quỹ chỉ số. Nhưng thị trường gấu kéo dài thì cũng tệ.'
      ] }
    ] },
    { icon: '💵', title: 'Tiền mặt và bất động sản', blocks: [
      { t: 'list', items: [
        '<b>Tiền mặt/CD/quỹ thị trường tiền tệ/tín phiếu</b>: năm 1990 CD 5% bị coi là trò đùa, đến 2001 lại là ý hay. Quỹ thị trường tiền tệ không được bảo hiểm; tín phiếu có chính phủ bảo đảm. Giữ tiền mặt để bảo vệ trong thị trường gấu và đủ cho khẩn cấp.',
        '<b>Mua nhà</b>: giảm thuế, giá tăng, thường rẻ hơn thuê, xây tài sản dài hạn. Nhược: <b>kém thanh khoản</b>, trả thế chấp hàng tháng, thuế bất động sản, bảo hiểm. Đầu tư BĐS cần nghiên cứu kỹ.',
        '<b>REIT</b>: công ty niêm yết mua và quản lý bất động sản; ưu điểm <b>thanh khoản</b> và hưởng lợi BĐS mà không phải làm việc; rủi ro quản lý kém.'
      ] }
    ] },
    { icon: '🐂', title: 'Thị trường bò, gấu và đi ngang', blocks: [
      { t: 'tabs', items: [
        ['Bear (gấu)', '<p>Chỉ số chính giảm kéo dài, người ta bán bằng mọi giá, kinh tế yếu, lợi nhuận doanh nghiệp giảm; tiền chuyển sang tiền mặt, vàng, trái phiếu; Phố Wall sa thải. Thị trường thường dự báo suy thoái. Không ai biết kéo dài bao lâu.</p>'],
        ['Bull (bò)', '<p>Chỉ số tăng, nhiều việc làm ở Phố Wall, nhà đầu tư lạc quan và mua mạnh. Thập niên 1920: ô tô và điện; thập niên 1990: Internet.</p>'],
        ['Sideways (đi ngang)', '<p>Phố Wall sợ nhất vì khó kiếm tiền. Sau 1929, đáy 3 năm sau rồi đi ngang 10 năm, thêm 12 năm mới về đỉnh. Bắt đầu 1966 (Dow 983,51) phải đợi 16 năm đến 1982 mới vượt 1.000 ổn định.</p>']
      ] }
    ] }
  ],
  summary: [
    'Trái phiếu = cho vay lấy lãi cố định; giá trái phiếu nghịch chiều với lãi suất.',
    'Quỹ tương hỗ cho đa dạng hoá và thuận tiện; quỹ chỉ số rẻ và khó bị nhà quản lý chủ động đánh bại.',
    'Tiền mặt bảo vệ khi gấu và là vốn mua cơ hội; BĐS ít thanh khoản, REIT thanh khoản hơn.',
    'Ba trạng thái thị trường: bò, gấu, đi ngang.',
    'Không có quy tắc nào bảo bạn phải đầu tư mọi đồng vào cổ phiếu.'
  ],
  cards: [
    ['Trái phiếu là gì?', 'Giấy nợ: cho vay để nhận lãi cố định và hoàn gốc khi đáo hạn.'],
    ['Coupon?', 'Lãi suất cố định của trái phiếu.'],
    ['Treasuries, munis, corporate?', 'Chính phủ Mỹ (an toàn nhất); chính quyền địa phương (thường miễn thuế); công ty (rủi ro cao nhất, lãi cao).'],
    ['Bills / notes / bonds?', 'Kỳ hạn 1–12 tháng / 1–10 năm / ≥ 10 năm.'],
    ['Trái phiếu rác?', 'Trái phiếu hạng rất thấp, rủi ro cao, lãi cao.'],
    ['Quan hệ giá trái phiếu và lãi suất?', 'Nghịch chiều: lãi suất giảm ⇒ giá tăng.'],
    ['Quỹ tương hỗ là gì?', 'Gom tiền nhà đầu tư mua rổ chứng khoán do nhà quản lý quyết định.'],
    ['Lợi ích chính của quỹ tương hỗ?', 'Đa dạng hoá tức thì, phí thấp, tiện lợi.'],
    ['NAV?', 'Giá trị tài sản ròng của một đơn vị quỹ.'],
    ['No-load vs load?', 'No-load không tính phí bán; không có bằng chứng load tốt hơn.'],
    ['Quỹ chỉ số?', 'Quỹ chứa các cổ phiếu của một chỉ số, không có nhà quản lý chủ động, phí thấp.'],
    ['401(k)?', 'Kế hoạch tiết kiệm hoãn thuế qua công ty.'],
    ['REIT?', 'Công ty niêm yết mua và quản lý bất động sản, thanh khoản cao hơn BĐS trực tiếp.'],
    ['Bear / bull / sideways?', 'Thị trường giảm / tăng / đi ngang.']
  ],
  quiz: [
    { q: 'Trái phiếu 10 năm, $5.000, coupon 10% trả mỗi năm:', o: ['$50', '$500', '$5.000', '$5'], a: 1, e: '10% × 5.000.' },
    { q: 'Lãi suất thị trường giảm thì trái phiếu đang nắm giữ:', o: ['Giảm giá', 'Tăng giá', 'Không đổi', 'Hết hạn'], a: 1, e: 'Nghịch chiều.' },
    { q: 'Loại trái phiếu an toàn nhất:', o: ['Corporate', 'Munis', 'Treasuries', 'Junk'], a: 2, e: 'Chính phủ Mỹ bảo đảm.' },
    { q: 'Lý do chính chọn quỹ tương hỗ:', o: ['Lãi cao hơn chắc chắn', 'Đa dạng hoá', 'Miễn thuế', 'Không rủi ro'], a: 1, e: 'Rổ nhiều chứng khoán.' },
    { q: 'Quỹ chỉ số khác quỹ chủ động ở chỗ:', o: ['Có nhà quản lý tích cực', 'Chỉ theo chỉ số, phí thấp', 'Chỉ trái phiếu', 'Không niêm yết'], a: 1, e: 'Không trả phí cho nhà quản lý.' },
    { q: 'Điều nào đúng với REIT so với mua BĐS?', o: ['Kém thanh khoản hơn', 'Thanh khoản hơn', 'Luôn có lãi', 'Không rủi ro'], a: 1, e: 'Niêm yết, mua bán như cổ phiếu.' },
    { q: 'Thị trường đi ngang là:', o: ['Chỉ số tăng liên tục', 'Chỉ số quay về điểm ban đầu, khó kiếm tiền', 'Chỉ số giảm', 'Không giao dịch'], a: 1, e: 'Phố Wall sợ nhất.' },
    { q: 'WorldCom khai khống làm cổ phiếu mất > 90%; quỹ tương hỗ chứa nó mất khoảng:', o: ['90%', 'Không quá 3%', '50%', '0%'], a: 1, e: 'Nhờ đa dạng hoá.' },
    { q: 'Quỹ thị trường tiền tệ có bảo hiểm không?', o: ['Có', 'Không', 'Luôn', 'Tuỳ năm'], a: 1, e: 'Khác tín phiếu có chính phủ bảo đảm.' },
    { q: '401(k) cho phép:', o: ['Miễn thuế mãi mãi', 'Hoãn thuế đến 59½ tuổi', 'Rút bất cứ lúc nào', 'Chỉ mua trái phiếu'], a: 1, e: 'Có thể chuyển sang IRA.' }
  ],
  match: [
    ['Coupon', 'Lãi cố định của trái phiếu'],
    ['NAV', 'Giá trị một đơn vị quỹ'],
    ['Quỹ chỉ số', 'Theo sát một chỉ số, phí thấp'],
    ['REIT', 'Bất động sản niêm yết'],
    ['Bear market', 'Chỉ số giảm kéo dài'],
    ['Bull market', 'Chỉ số tăng, nhà đầu tư lạc quan'],
    ['Sideways market', 'Không có xu hướng, khó kiếm tiền']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 3,
  title: 'Cách phân loại cổ phiếu',
  intro: 'Phân loại theo ngành (sector) và theo tính chất — thu nhập, giá trị, tăng trưởng, penny — giúp bạn hiểu mình đang mua gì. Chương cũng giới thiệu cơ quan SEC bảo vệ nhà đầu tư.',
  sections: [
    { icon: '🏭', title: 'Ngành (sector)', blocks: [
      { t: 'key', x: 'Sector là nhóm công ty cùng ngành (hàng không, phần mềm, dầu khí, bán lẻ, dược…). Dù thị trường thế nào luôn có ngành mạnh và yếu: trong thị trường gấu gần đây, bán dẫn–Internet–máy tính giảm đều, còn bán lẻ và nhà ở tăng mạnh 2001–2002 (Wal-Mart rất mạnh).' },
      { t: 'tip', x: 'Một số nhà giao dịch chuyên nghiệp dịch chuyển tiền giữa các ngành mỗi ngày. Nhưng “dễ khi nhìn gương chiếu hậu”: nói nên rời công nghệ vào 3/2000 thì dễ, còn bây giờ tin vào ngành nào? Dù khó, theo dõi ngành mạnh/yếu cho manh mối về hướng đi của nền kinh tế.' }
    ] },
    { icon: '🧩', title: 'Cổ phiếu thu nhập, giá trị, tăng trưởng', blocks: [
      { t: 'table', head: ['Loại', 'Đặc điểm', 'Ưu', 'Nhược'], rows: [
        ['<b>Thu nhập (income)</b>', 'Trả cổ tức đều', 'Ít biến động, cổ tức bù phần giảm giá; hợp người gần hưu', 'Cổ tức bị tính thuế; không tăng cổ tức thì lạm phát bào mòn; vẫn giảm khi thị trường giảm'],
        ['<b>Giá trị (value)</b>', 'Công ty có lãi, giá thấp so với giá trị nội tại (ngân hàng, bảo hiểm…)', 'Tiềm năng tăng ổn', 'Cần nhiều nghiên cứu; giá rẻ có khi vì lý do chính đáng'],
        ['<b>Tăng trưởng (growth)</b>', 'Lợi nhuận tăng nhanh (thường ≥ 15%/năm), hay thuộc công nghệ; ít trả cổ tức', 'Tiềm năng lớn (Cisco, Sun, Dell những năm 1990)', 'Biến động mạnh, giá có thể rất cao so với lợi nhuận']
      ] },
      { t: 'h3', x: 'Cổ tức' },
      { t: 'list', items: [
        'Cổ tức do hội đồng quản trị quyết định, thường trả theo quý bằng tiền (hoặc dùng mua thêm cổ phiếu). Ví dụ: 5.000 cổ phiếu × $0,25/quý = $1.250/quý = $5.000/năm.',
        'Truyền thống do blue-chip (Dow) trả; trong thập niên 1990 nhiều công ty giảm hoặc bỏ cổ tức để tái đầu tư; công nghệ ít trả.'
      ] }
    ] },
    { icon: '🪙', title: 'Penny stock và cảnh báo lừa đảo', blocks: [
      { t: 'key', x: 'Penny stock: giá thường &lt; $1 (có nơi định nghĩa &lt; $5), không đạt chuẩn niêm yết nên giao dịch OTC, còn gọi “pink sheet”. Ưu: giá thấp ai cũng mua được ($1.000 mua 2.000 cổ phiếu giá $0,50; lên $1 là lãi 100%). Nhược: rẻ vì lý do (quản lý kém, không có lãi, nợ nhiều), <b>khối lượng rất thấp</b> nên dễ <b>thao túng giá</b>.' },
      { t: 'warn', x: '<b>Boiler room</b>: nhóm gọi điện mời chào người lạ mua cổ phiếu gần như vô giá trị; giá lên vì nạn nhân mua, rồi nội bộ bán chốt; khi bạn muốn bán thì đã muộn. Lời khuyên: nếu người lạ gọi điện thúc mua penny stock, <b>cúp máy</b>. Có ngoại lệ (công ty từng lớn bán dưới $1), nhưng phải làm bài tập về nhà.' }
    ] },
    { icon: '👮', title: 'SEC – cảnh sát của ngành đầu tư', blocks: [
      { t: 'list', items: [
        'Quốc hội lập SEC năm 1934 sau vụ sụp đổ 1929 để điều tiết ngành chứng khoán, đặt quy tắc và chuẩn mực.',
        'Mục đích: bảo vệ nhà đầu tư cá nhân khỏi gian lận, bảo đảm thị trường công bằng, trung thực. Website www.sec.gov có tài liệu về từng công ty.',
        'Tác giả cảnh báo: một số nhóm lợi ích muốn SEC yếu (thiếu quỹ, nguồn lực); SEC yếu mời gọi kẻ gian. Hãy biết quyền của mình và coi kiến thức là vũ khí tốt nhất chống gian lận.'
      ] }
    ] }
  ],
  summary: [
    'Cổ phiếu phân loại theo ngành và theo tính chất: thu nhập, giá trị, tăng trưởng, penny.',
    'Cổ phiếu thu nhập trả cổ tức nhưng vẫn rủi ro; tăng trưởng biến động; giá trị cần định giá cẩn thận.',
    'Penny stock rẻ vì lý do, dễ bị thao túng; coi chừng boiler room.',
    'SEC bảo vệ nhà đầu tư; kiến thức là phòng vệ tốt nhất.',
    'Theo dõi ngành mạnh/yếu cho manh mối về kinh tế.'
  ],
  cards: [
    ['Sector là gì?', 'Nhóm công ty cùng ngành cung cấp sản phẩm/dịch vụ giống nhau.'],
    ['Vì sao quan trọng biết sector?', 'Dù thị trường thế nào luôn có ngành mạnh và yếu.'],
    ['Cổ phiếu thu nhập (income)?', 'Trả cổ tức đều; ít biến động; hợp người gần hưu.'],
    ['Nhược của cổ phiếu thu nhập?', 'Cổ tức bị đánh thuế; lạm phát; vẫn giảm khi thị trường giảm.'],
    ['Cổ phiếu giá trị?', 'Công ty có lãi, giá thấp hơn giá trị nội tại.'],
    ['Cổ phiếu tăng trưởng?', 'Lợi nhuận tăng nhanh (thường ≥ 15%/năm), ít trả cổ tức, biến động mạnh.'],
    ['Cổ tức là gì?', 'Phần lợi nhuận chia cho cổ đông, thường theo quý, do hội đồng quản trị quyết định.'],
    ['Penny stock?', 'Cổ phiếu giá thường dưới $1 (hoặc $5), giao dịch OTC, khối lượng thấp.'],
    ['Pink sheet?', 'Tên gọi cũ của cổ phiếu OTC (in trên giấy hồng).'],
    ['Boiler room?', 'Nhóm gọi điện chào mời bán cổ phiếu vô giá trị để bơm giá.'],
    ['Lời khuyên với cuộc gọi chào penny stock?', 'Cúp máy.'],
    ['SEC?', 'Ủy ban Chứng khoán Mỹ lập 1934 để bảo vệ nhà đầu tư và điều tiết thị trường.']
  ],
  quiz: [
    { q: 'Cổ phiếu tăng trưởng thường:', o: ['Trả cổ tức cao', 'Ít hoặc không trả cổ tức, biến động mạnh', 'Rất ổn định', 'Chỉ bán lẻ'], a: 1, e: 'Giữ tiền để tái đầu tư.' },
    { q: 'Ưu điểm của cổ phiếu thu nhập:', o: ['Giá tăng nhanh nhất', 'Biến động thấp hơn, cổ tức bù phần giảm giá', 'Miễn thuế', 'Không rủi ro'], a: 1, e: 'Hợp nhà đầu tư thận trọng.' },
    { q: '5.000 cổ phiếu, cổ tức $0,25/quý ⇒ mỗi năm:', o: ['$1.250', '$2.500', '$5.000', '$20.000'], a: 2, e: '1.250 × 4.' },
    { q: 'Penny stock dễ bị thao túng vì:', o: ['Giá cao', 'Khối lượng giao dịch rất thấp', 'Có SEC', 'Niêm yết NYSE'], a: 1, e: 'Một lệnh lớn đủ đẩy giá.' },
    { q: 'Boiler room là:', o: ['Phòng giao dịch NYSE', 'Nhóm gọi điện ép mua cổ phiếu vô giá trị', 'Quỹ tương hỗ', 'Cơ quan quản lý'], a: 1, e: 'Ví dụ phim Boiler Room.' },
    { q: 'SEC được lập năm:', o: ['1792', '1929', '1934', '1971'], a: 2, e: 'Sau vụ sụp đổ 1929.' },
    { q: 'Cổ phiếu giá trị là:', o: ['Cổ phiếu rẻ nhất', 'Công ty có lãi, giá thấp so với giá trị nội tại', 'Công ty chưa có lãi', 'Công ty công nghệ mới'], a: 1, e: 'Cần tính giá trị nội tại.' },
    { q: 'Cổ phiếu penny giao dịch chủ yếu ở:', o: ['NYSE', 'OTC trên Nasdaq', 'AMEX', 'Dow'], a: 1, e: 'Không đạt chuẩn niêm yết.' },
    { q: 'Công ty bắt buộc phải trả cổ tức?', o: ['Có', 'Không, do hội đồng quản trị quyết định', 'Mỗi quý', 'Khi lãi trên 15%'], a: 1, e: 'Thường trả khi làm ăn tốt.' },
    { q: 'Vì sao khó chọn ngành mạnh thật?', o: ['Dễ nhìn ngược nhưng khó dự đoán', 'Không có dữ liệu', 'Luật cấm', 'Chi phí cao'], a: 0, e: 'Nhìn gương chiếu hậu.' }
  ],
  match: [
    ['Income stock', 'Cổ phiếu trả cổ tức đều'],
    ['Value stock', 'Giá thấp so với giá trị nội tại'],
    ['Growth stock', 'Lợi nhuận tăng nhanh, ít cổ tức'],
    ['Penny stock', 'Giá dưới $1, OTC'],
    ['Boiler room', 'Bơm giá cổ phiếu qua điện thoại'],
    ['SEC', 'Bảo vệ nhà đầu tư, lập 1934'],
    ['Sector', 'Nhóm công ty cùng ngành']
  ]
});
