// Understanding Stocks – Chương 7–8.
BOOK_DATA.stocks.chapters.push({
  n: 7,
  title: 'Chiến lược đầu tư kiếm tiền chậm',
  intro: 'Chiến lược là kế hoạch giúp quyết định mua/bán gì. Chương này nêu các chiến lược cho nhà đầu tư dài hạn: mua và giữ, mua khi giảm, câu đáy, trung bình giá, giá trị, tăng trưởng, đà, đối kháng và CANSLIM.',
  sections: [
    { icon: '🧭', title: 'Ba lưu ý về chiến lược', blocks: [
      { t: 'steps', items: [
        'Chiến lược chỉ tốt bằng người dùng nó — vẫn có thể lỗ.',
        'Không chiến lược nào hiệu quả trong mọi điều kiện thị trường.',
        'Đừng tận tuỵ đến mức mù quáng không thấy mình đang lỗ — <b>tiền là bảng điểm</b>.'
      ] },
      { t: 'p', x: 'Hãy tìm chiến lược hợp tính cách và lối sống; với đa số người, cách duy nhất là thử và sai. Bạn có thể dùng nhiều chiến lược.' }
    ] },
    { icon: '🪨', title: 'Mua và giữ, mua khi giảm, câu đáy, trung bình giá', blocks: [
      { t: 'tabs', items: [
        ['Mua và giữ', '<p>Mua cổ phiếu của công ty cơ bản vững và giữ dài hạn (≥ 1 năm). Ít cần theo dõi, ít hoa hồng, dễ nhất; hiệu quả trong bò thập niên 1990. Chỉ bán khi <b>cơ bản công ty thay đổi</b>, không phải vì thị trường/giá. Buffett mua công ty “nhàm chán” (bảo hiểm, ngân hàng). Nhưng nhiều người mua giữ cổ phiếu công nghệ giá cao nên lỗ nặng.</p>'],
        ['Mua khi giảm (buy on the dip)', '<p>Khi cổ phiếu bạn thích giảm, mua thêm vì thị trường thường tăng theo thời gian. Rủi ro: cổ phiếu có thể “giảm 2–3 nhịp” rồi sụp vĩnh viễn; cuối 1990 triệu người dồn tiền vào cổ phiếu tưởng rẻ nhưng rất đắt; Nasdaq mất hơn 80%.</p>'],
        ['Câu đáy (bottom fishing)', '<p>Tìm cổ phiếu thấp đến mức “chỉ có thể lên”. Nguy hiểm là không biết đáy: Enron từ ~$100 xuống $15, rồi $1, còn giảm gần 94% nữa xuống 6 xu. Cần rất kiên nhẫn (chờ 2–3 năm) và rủi ro công ty biến mất.</p>'],
        ['Trung bình giá', '<p><b>Dollar-cost averaging</b>: đầu tư số tiền cố định định kỳ (vd $100/tháng) — giá giảm thì giá vốn trung bình giảm. Hiệu quả khi thị trường hồi phục; vẫn lỗ nếu cổ phiếu cứ giảm. Khác <b>averaging down</b> (mua thêm tuỳ hứng khi giá giảm, không có kế hoạch).</p>']
      ] },
      { t: 'widget', name: 'dca-avg', title: 'Giá vốn trung bình khi mua thêm lúc giá giảm' }
    ] },
    { icon: '🎯', title: 'Giá trị, tăng trưởng, đà, đối kháng', blocks: [
      { t: 'table', head: ['Chiến lược', 'Ý tưởng', 'Lưu ý'], rows: [
        ['<b>Value investing</b>', 'Dùng phân tích cơ bản mua công ty chất lượng khi giá rẻ hơn giá trị thực (P/E thấp, tăng chậm: bảo hiểm, ngân hàng); đầu tư dài hạn', 'Bị chế giễu thập niên 1990, trở lại sau đó'],
        ['<b>Growth investing</b>', 'Lợi nhuận tăng ≥ 15–20%/năm trong 3–4 năm, nhanh hơn đối thủ; ít cổ tức', 'Lợi nhuận 100%/năm vào thập niên 1990 nhưng rủi ro cao. GARP = tăng trưởng với giá hợp lý'],
        ['<b>Momentum investing</b>', 'Mua giá cao, bán cao hơn; thường dùng phân tích kỹ thuật', 'Hiệu quả trong bò có nhiều thanh khoản; bị gọi là “lý thuyết kẻ ngốc lớn hơn”; có thể nổ cả hai chiều'],
        ['<b>Contrarian</b>', 'Mua công ty chất lượng, P/E thấp bị bỏ rơi (Waste Management, Xerox sau sập công nghệ); càng bị ghét càng thích', 'Cần kỹ năng, kiên nhẫn, dũng khí. “Investolator” dùng biểu đồ để tìm cổ phiếu bị ghét']
      ] }
    ] },
    { icon: '🔠', title: 'CANSLIM (William O’Neil)', blocks: [
      { t: 'key', x: 'Hệ thống dựa trên quy tắc của William O’Neil (nhà sáng lập <i>Investor’s Business Daily</i>), kết hợp phân tích cơ bản và kỹ thuật (nghiêng về kỹ thuật). Mỗi chữ cái là một đặc điểm của cổ phiếu thắng cuộc.' },
      { t: 'table', head: ['Chữ', 'Ý nghĩa', 'Hướng dẫn'], rows: [
        ['<b>C</b>', 'Current quarterly EPS', 'Lợi nhuận quý hiện tại tăng mạnh, tốt nhất ≥ 25%, tăng tốc so với kỳ trước'],
        ['<b>A</b>', 'Annual earnings', 'EPS tăng mỗi năm 3 năm liên tiếp'],
        ['<b>N</b>', 'New', 'Sản phẩm mới, quản lý mới, đỉnh giá mới sau giai đoạn tích luỹ'],
        ['<b>S</b>', 'Supply & demand', 'Giá tăng kèm khối lượng tăng (≥ 50% trên bình thường); mua lại cổ phiếu; lãnh đạo giữ cổ phiếu'],
        ['<b>L</b>', 'Leader or laggard', 'Mua cổ phiếu mạnh nhất ngành mạnh; relative strength ≥ 80'],
        ['<b>I</b>', 'Institutional sponsorship', 'Được quỹ lớn nắm giữ: thanh khoản tốt'],
        ['<b>M</b>', 'Market direction', 'Đọc giá và khối lượng để biết sức mạnh thị trường, dùng kỹ thuật để hiểu hiện tại, không để dự đoán']
      ] }
    ] }
  ],
  summary: [
    'Chiến lược chỉ tốt khi hợp người dùng và điều kiện thị trường; tiền là thước đo.',
    'Mua-giữ dễ nhất nhưng cần chọn đúng công ty và giá; mua khi giảm và câu đáy dễ bẫy.',
    'Trung bình giá có kế hoạch, tốt hơn mua thêm tuỳ hứng.',
    'Value, growth (GARP), momentum, contrarian là các trường phái chính.',
    'CANSLIM là hệ thống quy tắc kết hợp cơ bản và kỹ thuật.'
  ],
  cards: [
    ['Ba lưu ý về chiến lược?', 'Chỉ tốt bằng người dùng; không hợp mọi thị trường; đừng mù quáng khi đang lỗ.'],
    ['Buy and hold?', 'Mua công ty vững và giữ dài hạn; bán chỉ khi cơ bản công ty đổi.'],
    ['Buy on the dip?', 'Mua thêm khi cổ phiếu yêu thích giảm giá.'],
    ['Rủi ro của buy on the dip?', 'Giảm nhiều nhịp rồi sụp vĩnh viễn (Nasdaq −80%).'],
    ['Bottom fishing?', 'Tìm cổ phiếu có vẻ đã chạm đáy; nguy hiểm vì không biết đáy (Enron).'],
    ['Dollar-cost averaging?', 'Đầu tư số tiền cố định theo định kỳ.'],
    ['Averaging down?', 'Mua thêm tuỳ ý khi giá giảm; không có kế hoạch như DCA.'],
    ['Value investing?', 'Mua công ty tốt giá thấp hơn giá trị thực, giữ dài hạn.'],
    ['Growth investing?', 'Mua công ty tăng lợi nhuận ≥ 15–20%/năm.'],
    ['GARP?', 'Growth at a reasonable price: kết hợp tăng trưởng và giá hợp lý.'],
    ['Momentum investing?', 'Mua giá cao hy vọng bán cao hơn; “greater fool theory”.'],
    ['Contrarian?', 'Mua cổ phiếu chất lượng bị mọi người bỏ rơi.'],
    ['CANSLIM gồm?', 'Current EPS, Annual EPS, New, Supply/demand, Leader, Institutional, Market.'],
    ['Ai tạo CANSLIM?', 'William O’Neil.']
  ],
  quiz: [
    { q: '100 cổ phiếu $20 rồi 200 cổ phiếu $10 ⇒ giá vốn trung bình:', o: ['$15', '$13,33', '$10', '$12'], a: 1, e: '4.000/300.' },
    { q: 'Buy-and-hold bán khi:', o: ['Thị trường giảm', 'Giá giảm', 'Cơ bản công ty thay đổi', 'Tin đồn'], a: 2, e: 'Tập trung vào kinh doanh.' },
    { q: 'Bài học Enron về câu đáy:', o: ['Đáy dễ nhận', 'Không biết đáy; giá có thể giảm thêm 94%', 'Luôn hồi phục', 'Mua ở $15 là tốt'], a: 1, e: 'Đóng cửa 6 xu.' },
    { q: 'DCA khác averaging down ở:', o: ['Có kế hoạch số tiền cố định định kỳ', 'Mua nhiều hơn', 'Chỉ trái phiếu', 'Không khác'], a: 0, e: 'Averaging down mua tuỳ hứng.' },
    { q: 'Momentum investing còn gọi là:', o: ['Lý thuyết kẻ ngốc lớn hơn', 'Mua giá trị', 'Câu đáy', 'Phòng thủ'], a: 0, e: 'Mua cao hy vọng bán cao hơn.' },
    { q: 'Contrarian thích cổ phiếu:', o: ['Đang nóng', 'Chất lượng nhưng bị ghét/bỏ rơi', 'Penny', 'IPO'], a: 1, e: 'Ví dụ Xerox, Waste Management.' },
    { q: 'Chữ “S” trong CANSLIM:', o: ['Sales', 'Supply and demand', 'Strategy', 'Stop'], a: 1, e: 'Khối lượng ≥ 50% trên bình thường.' },
    { q: 'CANSLIM đòi EPS quý hiện tại tăng tốt nhất:', o: ['5%', '10%', '≥ 25%', '≥ 100%'], a: 2, e: 'C = Current.' },
    { q: 'GARP kết hợp:', o: ['Giá trị và tăng trưởng', 'Đà và đối kháng', 'Cổ tức và lãi kép', 'Margin và bán khống'], a: 0, e: 'Tăng trưởng với giá hợp lý.' },
    { q: 'Điều nào KHÔNG phải lưu ý chiến lược?', o: ['Chỉ tốt bằng người dùng', 'Không hiệu quả mọi thị trường', 'Luôn chắc chắn lãi', 'Tiền là bảng điểm'], a: 2, e: 'Không có chiến lược nào chắc chắn.' }
  ],
  match: [
    ['Buy and hold', 'Giữ công ty vững dài hạn'],
    ['Buy on the dip', 'Mua thêm khi giá giảm'],
    ['DCA', 'Đầu tư cố định định kỳ'],
    ['Value', 'Giá rẻ hơn giá trị thực'],
    ['Growth', 'Lợi nhuận tăng nhanh'],
    ['Contrarian', 'Mua thứ bị ghét'],
    ['CANSLIM', 'Hệ thống O’Neil']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 8,
  title: 'Chiến lược giao dịch kiếm tiền nhanh',
  intro: 'Các chiến lược cho nhà giao dịch ngắn hạn: day trading, swing/position, market timing, bán khống khi hồi, ETF, giao dịch theo tin, quyền chọn và covered call. Phần lớn rất khó thắng và chủ yếu dùng phân tích kỹ thuật.',
  sections: [
    { icon: '⏱️', title: 'Day trading, market timing, bán khống khi hồi', blocks: [
      { t: 'list', items: [
        '<b>Day trading</b>: mua bán trong giây/phút/giờ, cuối ngày về tiền mặt; làm tại nhà (online trader) hoặc công ty day trading. <b>Swing trading</b>: mua đầu tuần, bán vài ngày sau. <b>Position trading</b>: giữ vài tháng. Chỉ một tỷ lệ nhỏ kiếm tiền ổn định; phải có kỷ luật, vốn và kiến thức; khi Nasdaq chạm 5.000 hàng nghìn người bỏ việc để day trade — dấu hiệu sắp kết thúc xấu.',
        '<b>Market timing</b>: dự đoán trước hướng đi của thị trường để chuyển tiền (cash/trái phiếu ↔ cổ phiếu). Phải biết cả lúc vào lẫn lúc ra nên rất ít người thành công. (Có thể coi buy-and-hold cũng là một dạng timing.)',
        '<b>Short the rallies</b>: ngược buy-on-the-dip — bán khống khi thị trường/cổ phiếu tăng mạnh. Hiệu quả vài năm vì cổ phiếu giảm nhanh hơn tăng, nhưng rất rủi ro; sai thì phải mua lại (cover) khi lỗ nhỏ.'
      ] }
    ] },
    { icon: '🧺', title: 'ETF – quỹ giao dịch trên sàn', blocks: [
      { t: 'key', x: '<b>ETF</b> giống quỹ tương hỗ nhưng <b>giao dịch như cổ phiếu</b> trên sàn lớn, mua từ ~$500; phổ biến là quỹ chỉ số: QQQ (Nasdaq 100), SPY (S&amp;P 500), DIA (Dow). Ưu: rẻ, thanh khoản, thuế thuận lợi, đa dạng hoá tức thì. Nhược: trả hoa hồng khi mua bán; còn mới nên ít lịch sử.' },
      { t: 'tip', x: '<b>Trading the Qs</b>: chỉ một mã nhưng giao dịch cả Nasdaq, thanh khoản cao nên khớp nhanh; <b>không có uptick rule</b> nên bán khống được khi đang giảm. Nhược: biến động ít hơn cổ phiếu riêng lẻ; QQQ rơi từ $100 (1999) xuống $20 (3 năm sau) — người bán khống kiếm bộn. Luôn dùng stop-loss bảo vệ. Có thể thử SPY, DIA.' }
    ] },
    { icon: '📰', title: 'Giao dịch theo tin', blocks: [
      { t: 'p', x: 'Khó như day trade: không thể biết thị trường phản ứng thế nào. Câu cổ: <b>“Mua theo tin đồn, bán theo tin tức”</b> — giá thường đi trước tin (báo cáo lợi nhuận, họp Fed) rồi đảo chiều khi tin ra. Tin đến từ nhiều hướng; phần lớn vô ích; có người cố tình tung tin sai (phòng chat Internet) để đẩy giá. Dù vậy cổ phiếu vẫn lên xuống theo điều người ta <b>cho là</b> thật.' }
    ] },
    { icon: '📜', title: 'Quyền chọn (options)', blocks: [
      { t: 'key', x: '<b>Quyền chọn</b> là hợp đồng cho bạn <b>quyền, không phải nghĩa vụ</b>, mua hoặc bán một tài sản. Là “derivative” (phái sinh) vì giá lấy từ giá cổ phiếu. <b>Call</b>: quyền mua ở giá định sẵn; <b>Put</b>: quyền bán. Mỗi hợp đồng = 100 cổ phiếu. Có <b>strike price</b> và <b>ngày hết hạn</b> (thường 1–3 tháng). Strike càng xa giá hiện tại càng rẻ; hết hạn càng xa càng đắt.' },
      { t: 'widget', name: 'call-option', title: 'Mua quyền chọn mua (call): lãi/lỗ khi đáo hạn' },
      { t: 'p', x: 'Ví dụ: Bright Light $20, mua 5 hợp đồng call strike $25 hết hạn tháng 6 giá $2 ⇒ $1.000 kiểm soát $10.000 cổ phiếu. Nếu giá lên $25+ trước ngày hết hạn (thứ Sáu thứ ba của tháng) thì có lãi (có thể bán quyền chọn trước hạn). Nếu không: mất toàn bộ $1.000.' },
      { t: 'warn', x: '<b>Khoảng 90% quyền chọn hết hạn vô giá trị</b>; sau hoa hồng và thuế đa số cá nhân không kiếm được đồng nào. Phải đúng cả <b>hướng giá</b> lẫn <b>thời điểm</b>. Put dùng khi dự đoán giảm (bò gấu gần đây người bán put kiếm bộn nếu bán trước hạn). Đọc tài liệu <i>Characteristics and Risks of Standardized Options</i>.' }
    ] },
    { icon: '🛡️', title: 'Covered call – bán quyền chọn mua có cổ phiếu', blocks: [
      { t: 'steps', items: [
        'Bạn sở hữu 500 cổ phiếu Bright Light giá $20.',
        'Bán 5 hợp đồng call strike $25, nhận ngay phí (giá $1 ⇒ $500 — gọi là <b>premium</b>).',
        'Nếu giá không lên $25 trước hạn: giữ $500 và có thể bán tiếp. Nếu lên $25: vẫn giữ $500 nhưng cổ phiếu bị bán $25. Nếu giá giảm: vẫn giữ $500 giảm bớt lỗ.',
        'Phù hợp <b>thị trường đi ngang</b>; được coi là chiến lược quyền chọn thận trọng vì hạ giá vốn.'
      ] },
      { t: 'warn', x: 'Nhược: nếu cổ phiếu tăng vọt $30–35 bạn đã bán $25 và bỏ lỡ; nhiều người quá chú ý premium (lãi 10%) mà mất 40% cổ phiếu. Phải hiểu giao dịch cổ phiếu trước khi giao dịch quyền chọn.' }
    ] }
  ],
  summary: [
    'Day trading, timing, bán khống khi hồi rất khó thắng; chỉ ít người kiếm tiền ổn định.',
    'ETF giao dịch như cổ phiếu, rẻ, đa dạng; Qs cho phép bán khống không cần uptick.',
    'Giao dịch theo tin khó: “mua tin đồn, bán tin tức”.',
    'Quyền chọn: call/put, strike, ngày hết hạn; ~90% hết hạn vô giá trị.',
    'Covered call kiếm premium trong thị trường đi ngang nhưng giới hạn lãi.'
  ],
  cards: [
    ['Day trading?', 'Mua bán trong ngày, cuối ngày về tiền mặt.'],
    ['Swing trading?', 'Mua đầu tuần, bán vài ngày sau.'],
    ['Position trading?', 'Giữ vài tháng.'],
    ['Market timing?', 'Dự đoán hướng thị trường để chuyển tiền trước khi nó đi.'],
    ['Short the rallies?', 'Bán khống khi giá tăng mạnh; rủi ro cao.'],
    ['Covering a position?', 'Mua lại cổ phiếu đã bán khống để đóng vị thế.'],
    ['ETF?', 'Quỹ giống tương hỗ nhưng giao dịch như cổ phiếu.'],
    ['Ưu điểm ETF?', 'Rẻ, thanh khoản, thuế thuận lợi, đa dạng hoá.'],
    ['QQQ / SPY / DIA?', 'ETF Nasdaq 100 / S&P 500 / Dow.'],
    ['Câu về tin tức?', 'Mua theo tin đồn, bán theo tin tức.'],
    ['Call option?', 'Quyền mua cổ phiếu ở giá định sẵn.'],
    ['Put option?', 'Quyền bán cổ phiếu ở giá định sẵn.'],
    ['Strike price?', 'Giá thực hiện quyền chọn.'],
    ['Một hợp đồng quyền chọn?', '100 cổ phiếu.'],
    ['Tỷ lệ quyền chọn hết hạn vô giá trị?', 'Khoảng 90%.'],
    ['Covered call?', 'Bán call trên cổ phiếu mình sở hữu để nhận premium.']
  ],
  quiz: [
    { q: '5 hợp đồng call giá $2 ⇒ chi phí:', o: ['$10', '$100', '$1.000', '$10.000'], a: 2, e: '500 cổ phiếu × $2.' },
    { q: 'Tỷ lệ quyền chọn hết hạn vô giá trị:', o: ['10%', '50%', '90%', '1%'], a: 2, e: 'Theo các nghiên cứu.' },
    { q: 'Call option cho bạn quyền:', o: ['Bán', 'Mua', 'Vay', 'Cho vay'], a: 1, e: 'Put là bán.' },
    { q: 'Covered call phù hợp nhất ở thị trường:', o: ['Tăng mạnh', 'Giảm mạnh', 'Đi ngang', 'Hoảng loạn'], a: 2, e: 'Giữ premium.' },
    { q: 'Nhược điểm covered call:', o: ['Phải bán khống', 'Bỏ lỡ nếu cổ phiếu tăng vọt', 'Hết hạn vô giá trị', 'Không có premium'], a: 1, e: 'Đã bán ở strike.' },
    { q: 'ETF khác quỹ tương hỗ ở:', o: ['Giao dịch như cổ phiếu trong ngày', 'Không đa dạng', 'Chỉ trái phiếu', 'Không có phí'], a: 0, e: 'Giá thay đổi liên tục.' },
    { q: 'QQQ đại diện cho:', o: ['Dow', 'S&P 500', 'Nasdaq 100', 'Bất động sản'], a: 2, e: 'Các cổ phiếu lớn của Nasdaq.' },
    { q: 'Trading the Qs không có:', o: ['Thanh khoản', 'Uptick rule', 'Đa dạng', 'Giao dịch trong ngày'], a: 1, e: 'Cho phép bán khống khi giảm.' },
    { q: 'Câu “buy the rumor, sell the news” nghĩa là:', o: ['Tin tức luôn đẩy giá lên', 'Giá hay đi trước tin rồi đảo chiều', 'Luôn bán trước', 'Tin đồn luôn đúng'], a: 1, e: 'Khó giao dịch theo tin.' },
    { q: 'Điều gì dùng để phòng ngừa (hedge) trong quyền chọn?', o: ['Đi cùng chiều vị thế', 'Vị thế ngược lại để giảm rủi ro', 'Tăng đòn bẩy', 'Bán hết'], a: 1, e: 'Ví dụ long cổ phiếu, short bằng quyền chọn.' }
  ],
  match: [
    ['Day trader', 'Giữ vị thế trong ngày'],
    ['Market timing', 'Dự đoán hướng thị trường'],
    ['ETF', 'Quỹ giao dịch như cổ phiếu'],
    ['Call', 'Quyền mua'],
    ['Put', 'Quyền bán'],
    ['Premium', 'Phí người bán call nhận'],
    ['Covered call', 'Bán call trên cổ phiếu đang sở hữu']
  ]
});
