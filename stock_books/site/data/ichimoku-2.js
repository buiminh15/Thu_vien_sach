// Chương 3–6 của "Giao dịch với Ichimoku" – Karen Péloille (bản tóm lược học tập bằng tiếng Việt).
BOOK_DATA.ichimoku.chapters.push(

/* ======================= CHƯƠNG 3 ======================= */
{
  n: 3,
  title: 'Phân tích đa khung thời gian',
  intro: 'Một khung thời gian không đủ để hiểu thị trường. Chương này dạy quy trình phân tích chỉ với Ichimoku và cách “thu phóng” qua 3 khung thời gian để có kết luận nhất quán.',
  sections: [
    { icon: '🔭', title: 'Vì sao phải nhìn nhiều khung thời gian?', blocks: [
      { t: 'p', x: 'Ichimoku đã cho tầm nhìn dài trên một biểu đồ, nhưng để hiểu thật sự thị trường đang di chuyển ra sao thì <b>cần – thậm chí bắt buộc – xem nhiều khung thời gian</b>. Phương pháp này cũng là cách các trader chuyên nghiệp Nhật Bản đang áp dụng.' },
      { t: 'tip', x: 'Khi chưa quen một thị trường, hãy <b>bắt đầu từ biểu đồ tháng</b> rồi thu nhỏ dần: tháng → tuần → ngày.' }
    ] },
    { icon: '💷', title: 'Ví dụ 1: GBPUSD – tháng, tuần, ngày', blocks: [
      { t: 'tabs', items: [
        ['Tháng', '<ul><li>Giá <b>dưới mây</b> dày và nằm ngang → không có xu hướng rõ.</li><li>Giá đang thử <b>kháng cự kép Tenkan + Kijun</b>; phải vượt hai đường này thì đà tăng mới thành hình.</li><li>Lagging Span đang cố thoát khỏi Kijun, nhưng ngay phía trên còn Kijun và SSA → tiềm năng tăng bị giới hạn.</li><li><b>Kết luận: giảm / thận trọng.</b></li></ul>'],
        ['Tuần', '<ul><li>Giá dưới mây nhưng <b>đang gần twist</b> → có thể đảo chiều nếu xuyên mây.</li><li>Được hỗ trợ bởi Tenkan + Kijun (hỗ trợ kép). Đang thử <b>kháng cự bội ba</b>: đường xu hướng + Kijun trùng SSB.</li><li>Lagging Span đối mặt các nến lớn trong quá khứ → khó vượt.</li><li><b>Kết luận: trung lập</b> (chưa có tín hiệu giảm chừng nào giá còn trên hỗ trợ).</li></ul>'],
        ['Ngày', '<ul><li>Giá <b>trên mây</b>, Lagging Span tự do đi lên, giá vừa xuyên qua twist → <b>xu hướng tăng rõ</b>.</li><li>Vật cản còn lại: đường xu hướng giảm (cũng sẽ được Lagging Span thử sau).</li><li><b>Kết luận: tăng</b> (mục tiêu đầu tiên giới hạn ở đường xu hướng).</li></ul>']
      ] },
      { t: 'key', x: 'Ba kết luận: tháng giảm · tuần trung lập · ngày tăng – <b>không mâu thuẫn</b>! Nến tháng hiện tại đang tăng và Lagging Span tháng đang đi lên; khi phóng to, thực ra ta chỉ đang “mổ xẻ” cây nến tháng đó. Nhịp tăng ở khung ngày có thể ngắn nếu các kháng cự của khung tháng phát huy tác dụng.' },
      { t: 'p', x: 'Bài học: Ichimoku cho thấy hỗ trợ/kháng cự quan trọng của <b>nhiều khung</b>. Hãy chọn <b>3 khung thời gian</b> phù hợp với tầm nhìn đầu tư của mình.' },
      { t: 'mnemo', x: 'Khung <b>cao</b> = bức tranh lớn · khung <b>giữa</b> = tinh chỉnh, tìm điểm nhạy cảm · khung <b>thấp</b> = lập chiến lược.' }
    ] },
    { icon: '🦘', title: 'Ví dụ 2: AUDUSD – khung ngắn (240p → 5p)', blocks: [
      { t: 'p', x: 'Day trader thường bắt đầu từ biểu đồ <b>240 phút (H4)</b> để nắm bức tranh chung.' },
      { t: 'steps', items: [
        '<b>H4</b>: giá trên mây, đang bật khỏi SSB với nến Doji; nhưng <b>Lagging Span lọt lại vào mây mỏng</b> → xu hướng mới còn lưỡng lự.',
        '<b>H1</b>: xu hướng giảm hơn, giá thử hồi; Lagging Span trung lập trong mây (hạn chế rủi ro giảm sâu).',
        '<b>15 phút</b>: giảm rõ, giá hồi về Kijun (ngang với SSB) → kháng cự quan trọng.',
        '<b>5 phút</b>: gần twist, cần Lagging Span vượt giá và Kijun mới xác nhận tăng.'
      ] },
      { t: 'p', x: 'Kết quả: giá xuyên twist và Lagging Span phá Kijun nhưng <b>lực mua không đủ</b> → giá rơi lại vào mây, phá Kijun, vô hiệu hoá tín hiệu mua. Lagging Span thậm chí còn không thử vượt mây – dấu hiệu thiếu lực mua.' },
      { t: 'warn', x: 'Ở khung ngắn phải <b>chờ mọi đường xác nhận</b>. Xu hướng tăng ở H4 chưa được xác nhận vì Lagging Span còn kẹt trong mây.' }
    ] },
    { icon: '💴', title: 'Ví dụ 3: USDJPY – thị trường xu hướng mạnh', blocks: [
      { t: 'list', items: [
        '<b>H1</b>: xu hướng tăng rõ, Tenkan bám sát giá. Nhưng Kijun phẳng ra trong khi Tenkan vẫn dốc → đà đang chững; cần xuống khung nhỏ kiểm tra có nguy cơ phá Tenkan không.',
        '<b>15 phút</b>: giá đang thử hỗ trợ kép Tenkan + Kijun – vùng nguy hiểm. Nếu phá, giá điều chỉnh về mây.',
        '<b>5 phút</b>: Lagging Span phá Kijun nhưng lại <b>bật khỏi đỉnh mây</b> → tiềm năng giảm rất nhỏ. Quả thật xu hướng tăng tiếp tục sau nhịp nghỉ.',
        'Về sau, Kijun giữ vai trò hỗ trợ cuối cùng, Tenkan là đường cảnh báo; khoảng cách Tenkan–Kijun mở rộng khi giá tăng tốc.'
      ] }
    ] },
    { icon: '🧭', title: 'Phương pháp 3 bước', blocks: [
      { t: 'steps', items: [
        '<b>Quy trình cố định</b>: Giá ở đâu so với mây, xu hướng của mây? Tenkan/Kijun cách giá bao xa? Lagging Span ở đâu và gặp vật cản gần nhất nào?',
        '<b>Đánh giá đóng góp từng đường</b>: giá có được Tenkan hỗ trợ hoặc cảnh báo? Kijun là hỗ trợ/kháng cự hay đang bị xuyên? Khoảng cách tới SSA/SSB (<b>SSA dễ phá hơn SSB</b>; twist dễ xuyên hơn mây dày). Lagging Span – “nền tảng của hệ thống” – có xác nhận hành động giá không?',
        '<b>Lặp lại ở các khung khác</b>: khung cao nhất xác định tình trạng chung · một khung thấp hơn tinh chỉnh dự đoán và tìm điểm nhạy cảm · một khung thấp nữa để lập chiến lược.'
      ] },
      { t: 'key', x: 'Phân tích tập trung vào <b>giá hiện tại và quá khứ</b>; kết luận rút ra từ vị trí của giá trong hệ thống các đường Ichimoku.' }
    ] }
  ],
  summary: [
    'Luôn phân tích nhiều khung thời gian; chọn 3 khung phù hợp thời gian đầu tư.',
    'Khung cao = tình trạng chung; khung thấp hơn = tinh chỉnh; khung thấp nhất = chiến lược.',
    'Kết luận khác nhau giữa các khung (giảm/trung lập/tăng) có thể cùng đúng vì chúng mô tả các lớp khác nhau của cùng chuyển động.',
    'Quy trình: giá–mây → Tenkan/Kijun → Lagging Span, rồi lặp lại ở khung khác.',
    'Ở khung ngắn cần xác nhận đầy đủ bởi mọi đường, đặc biệt Lagging Span.',
    'Kijun trùng SSB là vùng hỗ trợ/kháng cự rất mạnh.'
  ],
  cards: [
    ['Khi mới làm quen một thị trường nên bắt đầu từ khung nào?', 'Biểu đồ tháng, rồi thu nhỏ dần (tuần → ngày…).'],
    ['Vai trò của 3 khung thời gian?', 'Cao nhất: tình trạng chung · giữa: tinh chỉnh dự đoán, tìm điểm nhạy cảm · thấp nhất: lập chiến lược.'],
    ['Vì sao kết luận tháng giảm – tuần trung lập – ngày tăng không mâu thuẫn?', 'Vì khung nhỏ chỉ đang “mổ xẻ” cây nến của khung lớn; nhịp tăng ngày có thể ngắn nếu kháng cự khung tháng phát huy.'],
    ['Kháng cự bội ba trong ví dụ GBPUSD tuần gồm gì?', 'Đường xu hướng + Kijun trùng với SSB.'],
    ['Vì sao Kijun trùng SSB rất mạnh?', 'Kijun dựa 26 nến là mức cản tin cậy; SSB dựa 52 nến và là phần bền nhất của Ichimoku → hợp lại thành cản mạnh.'],
    ['SSA và SSB, đường nào dễ bị phá hơn?', 'SSA dễ bị phá hơn SSB. Twist cũng dễ xuyên hơn mây dày.'],
    ['Lagging Span lọt lại vào mây mỏng khi giá đã trên mây cho biết điều gì?', 'Xu hướng mới còn lưỡng lự, chưa được xác nhận đầy đủ.'],
    ['Tenkan dốc nhưng Kijun phẳng báo hiệu gì?', 'Đà tăng đang chững lại; cần theo dõi khả năng phá Tenkan ở khung nhỏ.'],
    ['Lagging Span không dám thử vượt mây báo hiệu gì?', 'Thiếu lực mua/bán đứng sau chuyển động giá.'],
    ['Quy trình phân tích cố định gồm các câu hỏi nào?', '1) Giá so với mây? 2) Tenkan/Kijun cách giá bao xa? 3) Lagging Span ở đâu, vật cản nào gần nhất?']
  ],
  quiz: [
    { q: 'Theo tác giả, để hiểu hướng đi của thị trường cần:', o: ['Chỉ xem khung ngày', 'Xem nhiều khung thời gian', 'Thêm nhiều chỉ báo', 'Chỉ xem khung phút'], a: 1, e: 'Phân tích đa khung là bắt buộc để hiểu đầy đủ chuyển động.' },
    { q: 'Nên bắt đầu phân tích một thị trường lạ từ khung nào?', o: ['1 phút', '15 phút', 'Biểu đồ tháng', 'Không quan trọng'], a: 2, e: 'Bắt đầu từ tháng để có bức tranh lớn rồi mới thu nhỏ.' },
    { q: 'Vai trò của khung thời gian CAO NHẤT trong 3 khung là:', o: ['Vào lệnh chính xác', 'Xác định tình trạng chung của thị trường', 'Đặt cắt lỗ', 'Tính khối lượng'], a: 1, e: 'Khung cao nhất định hình bức tranh chung.' },
    { q: 'GBPUSD: tháng giảm, tuần trung lập, ngày tăng. Cách hiểu đúng?', o: ['Ichimoku không đáng tin', 'Không mâu thuẫn – là các lớp khác nhau của cùng chuyển động', 'Phải đổi thông số', 'Phải bỏ khung tháng'], a: 1, e: 'Nhịp tăng ngày chỉ là “bên trong” nến tháng và có thể ngắn nếu kháng cự tháng giữ.' },
    { q: 'Hỗ trợ/kháng cự mạnh nhất thường nằm ở đâu?', o: ['Chỉ ở Tenkan', 'Kijun trùng với SSB', 'Giữa mây mỏng', 'Chỗ Tenkan cắt Kijun'], a: 1, e: 'Kijun (26) và SSB (52) cùng mức → cản rất mạnh.' },
    { q: 'Đường nào của mây dễ bị giá phá hơn?', o: ['SSB', 'SSA', 'Như nhau', 'Không thể phá'], a: 1, e: 'SSA nhanh và mỏng hơn; SSB bền nhất hệ thống.' },
    { q: 'Ở AUDUSD H4, Lagging Span lọt lại vào mây mỏng. Nghĩa là:', o: ['Xu hướng tăng đã xác nhận', 'Xu hướng mới còn lưỡng lự', 'Sắp có twist', 'Hãy bán ngay'], a: 1, e: 'Lagging Span chưa thoát hẳn mây nên xu hướng chưa được xác nhận.' },
    { q: 'Tại sao nhịp tăng AUDUSD ở khung 5 phút thất bại?', o: ['Do tin tức', 'Lực mua không đủ – Lagging Span không thử vượt mây', 'Do đổi thông số', 'Do Tenkan cắt Kijun'], a: 1, e: 'Giá rơi lại vào mây, phá Kijun; Lagging Span không có nỗ lực vượt.' },
    { q: 'USDJPY H1: Tenkan dốc đứng còn Kijun đi ngang. Bạn hiểu là:', o: ['Xu hướng mạnh lên', 'Đà đang chững, cần kiểm tra khung nhỏ', 'Sắp đảo chiều chắc chắn', 'Không có ý nghĩa'], a: 1, e: 'Kijun phẳng cho thấy chuyển động đã chững; cần xem nguy cơ phá Tenkan.' },
    { q: 'Trong 3 khung thời gian, khung THẤP nhất dùng để:', o: ['Xác định xu hướng dài hạn', 'Lập chiến lược / điểm vào lệnh', 'Tính Fibonacci', 'Tìm tin tức'], a: 1, e: 'Khung thấp nhất để lập chiến lược cụ thể.' }
  ],
  match: [
    ['Khung cao nhất', 'Tình trạng chung của thị trường'],
    ['Khung giữa', 'Tinh chỉnh dự đoán, tìm điểm nhạy cảm'],
    ['Khung thấp nhất', 'Lập chiến lược giao dịch'],
    ['Kijun + SSB trùng mức', 'Hỗ trợ/kháng cự rất mạnh'],
    ['SSA', 'Dễ bị phá hơn SSB'],
    ['Twist', 'Dễ xuyên hơn mây dày'],
    ['Kijun phẳng, Tenkan dốc', 'Đà chững lại'],
    ['Lagging Span kẹt trong mây', 'Xu hướng chưa được xác nhận']
  ]
},

/* ======================= CHƯƠNG 4 ======================= */
{
  n: 4,
  title: 'Giao dịch với Ichimoku',
  intro: 'Từ phân tích sang hành động: khác biệt analyst – trader, đọc nến Nhật theo “quy tắc 3 nến”, lập kế hoạch vào/ra lệnh, đặt cắt lỗ kỹ thuật và giao dịch siêu ngắn hạn.',
  sections: [
    { icon: '⚖️', title: 'Analyst khác Trader thế nào?', blocks: [
      { t: 'table', head: ['', 'Analyst (nhà phân tích)', 'Trader (nhà giao dịch)'], rows: [
        ['Mục tiêu', 'Mô tả tình huống, phát hiện chuyển động chính, đưa ra giả thuyết', 'Tìm cơ hội kiếm lợi nhuận'],
        ['Cảm xúc', 'Trung lập, không dính líu', 'Có vốn trong thị trường → phải kiểm soát sợ hãi'],
        ['Thứ tự đọc', 'Mây → giá so với mây → Lagging Span → cuối cùng mới Tenkan/Kijun', 'Như analyst + biến thành chiến lược: khoảng cách giữa các mức, lãi/lỗ tiềm năng'],
        ['Kết quả', 'Các kịch bản và điều kiện vô hiệu hoá', 'Kế hoạch chính xác: <b>điểm vào, mức vô hiệu (cắt lỗ), điểm ra</b>']
      ] },
      { t: 'key', x: 'Trader phải trước hết là analyst giỏi; analyst thuần tuý hiếm khi là trader. Khi đã có kế hoạch rõ (biết lãi kỳ vọng và lỗ tối đa), rủi ro đã được đánh giá trước nên <b>giao dịch trong tầm kiểm soát và ít căng thẳng</b>.' },
      { t: 'tip', x: 'Ichimoku một mình đủ trong ~95% trường hợp. Trader chỉ thêm <b>đường xu hướng</b> (nhất là giao dịch rất ngắn) để tránh vô hiệu hoá chiến lược quá sớm.' }
    ] },
    { icon: '🕯️', title: 'Đọc thị trường động: nến Nhật', blocks: [
      { t: 'p', x: 'Giá là kết quả cân bằng cung–cầu giữa người mua và người bán. Nến Nhật là cách thể hiện tốt nhất vì phản ánh cảm xúc của người chơi. Khi đọc một nến, xem lần lượt: <b>màu → kích thước thân → bóng (shadow)</b>.' },
      { t: 'table', head: ['Yếu tố', 'Ý nghĩa'], rows: [
        ['Màu thân', 'Xanh = phe mua, đỏ = phe bán (tuỳ cấu hình màu)'],
        ['Thân lớn', 'Một phe đang thống trị, lực mạnh'],
        ['Thân nhỏ / Doji', 'Hai phe đồng thuận giá, cân bằng – không bên nào kiểm soát'],
        ['Bóng nến', 'Giá đã được giao dịch nhưng nằm ngoài vùng đồng thuận. Quan trọng nhất cho phân tích động']
      ] },
      { t: 'list', items: [
        '<b>Marubozu</b> (thân lớn, không bóng): phe thống trị kiểm soát hoàn toàn.',
        '<b>Có bóng</b>: phe đối lập xuất hiện nhưng chưa chiếm quyền; thường là chốt lời của phe thống trị.',
        'Bóng dài hơn thân sau xu hướng dài: cảnh báo thay đổi tâm lý.',
        '<b>Doji</b> – nến đảo chiều đáng kể nhất; ở đỉnh/đáy sau xu hướng dài = đảo chiều, giữa xu hướng = chỉ là tạm nghỉ. <b>Dragonfly</b> (đáy) = phe mua kiểm soát; <b>Tombstone</b> (đỉnh) = phe bán chiếm ưu thế.'
      ] },
      { t: 'warn', x: 'Các mẫu hình tĩnh (nhấn chìm, ba chú quạ…) có tỷ lệ thành công thay đổi theo khung: ở khung dài (tuần/ngày) đáng tin hơn khung 1–5 phút vì nhiễu. Quy tắc chính: <b>chờ nến thứ ba xác nhận</b>.' }
    ] },
    { icon: '3️⃣', title: 'Quy tắc 3 nến', blocks: [
      { t: 'p', x: 'Trong thị trường có xu hướng, một nhịp xung lực thường gồm <b>3 nến cùng màu</b>, rồi tới 3 nến điều chỉnh ngược màu. (Gần với sóng Elliott: 1-3-5 là xung lực, 2-4 là điều chỉnh.)' },
      { t: 'steps', items: [
        'Phá Kijun bằng nến Doji nhỏ → tín hiệu bán. Vào lệnh ở nến đỏ đầu tiên có bóng thử Kijun và được xác nhận.',
        'Giữ vị thế trong 3 nến đỏ; <b>thoát khi nến đỏ thứ ba xuất hiện bóng</b> (yếu đi).',
        'Điều chỉnh bằng 3 nến xanh thường dừng ở Kijun/Tenkan; sau đó nến đỏ thử lại và xác nhận đà giảm tiếp.',
        'Bỏ qua Doji và spinning top khi đếm (nến do dự). Nếu nến đầu tiên phá Kijun, đếm bắt đầu từ nến <b>thứ hai</b> (có thể thành 4 nến).'
      ] },
      { t: 'table', head: ['Tình huống', 'Cách xử lý'], rows: [
        ['<b>Vào lệnh</b>', 'Đừng vào ở nến thứ 3 dù đang tăng tốc – nến sau sẽ ngược màu. Vào ở nến thứ 2 để có vài điểm sớm hơn.'],
        ['<b>Thoát lệnh</b>', 'Khi nến thứ 3 yếu đi (có thể xác nhận ở khung thấp hơn) → thoát, dù có thể vào lại sau điều chỉnh.'],
        ['<b>Chơi nhịp điều chỉnh</b>', 'Mở lệnh ngược xu hướng khi có nến đảo chiều hoặc mức then chốt, mục tiêu rõ, giữ tối đa 3 nến. Nếu nến thứ 4 phá mục tiêu, chờ đóng nến vì có thể thành Doji.'],
        ['<b>Vị thế khó chịu</b>', 'Chờ nến thứ 3 rồi một nến ngược chiều, thoát với lỗ nhỏ hơn (không áp dụng khi giá tăng tốc).'],
        ['<b>Trung bình giá</b>', 'Nếu nhịp 3 nến điều chỉnh đạt mục tiêu, mở thêm vị thế cùng cỡ để giảm lỗ chưa thực hiện.']
      ] },
      { t: 'warn', x: 'Chỉ dành cho <b>thị trường có xu hướng</b>, không dùng khi thị trường đi ngang/chưa quyết định. Phải quan sát nến hình thành (ví dụ nến 5 phút đỏ 4,5 phút rồi mới xanh ở 30 giây cuối vẫn mang bản chất đỏ).' },
      { t: 'mnemo', x: '“<b>Vào nến 2, ra nến 3</b>” – đừng tham ở nến thứ ba.' }
    ] },
    { icon: '📋', title: 'Quy trình giao dịch của tác giả', blocks: [
      { t: 'h3', x: 'Chọn cặp tiền' },
      { t: 'p', x: 'Mỗi phiên mở biểu đồ 8 cặp tiền theo dõi, dùng khung <b>240 phút (H4)</b> (riêng USDCHF dùng khung ngày làm chỉ báo sức mạnh USD). H4 cân bằng giữa intraday và swing, và chia nến ngày thành 6 phần. Mục tiêu: cặp có khả năng <b>phá Kijun</b> trong ngày, ít vật cản phía trước.' },
      { t: 'h3', x: 'Ví dụ AUDNZD – giao dịch swing nhiều tháng' },
      { t: 'steps', items: [
        '<b>Tháng</b>: giá dưới mây (giảm) nhưng đang hồi; mục tiêu đầu tiên là SSB phía trên; Lagging Span là vật cản duy nhất → lợi nhuận tiềm năng lớn.',
        '<b>Tuần</b>: chỉ vào lệnh mua khi giá đóng cửa trên Tenkan. Kháng cự tháng trùng Kijun tuần = mục tiêu đầu.',
        '<b>Ngày</b>: giá đã phá Kijun, được nến tháng tăng xác nhận. Vào 50% vị thế khi giá trên Tenkan; cắt lỗ dưới Kijun (dưới hai đoạn Tenkan phẳng).',
        'Thoát tại SSB nếu không có xác nhận tăng tiếp, hoặc nâng cắt lỗ sát dưới SSB. Nếu giá và Lagging Span xác nhận đảo chiều → thêm 50% vị thế còn lại trên SSB.'
      ] },
      { t: 'key', x: '<b>Giao dịch trend + counter-trend</b>: chơi nhịp ngược xu hướng với cắt lỗ và mục tiêu rõ; khi mục tiêu bị xác nhận bật xuống, <b>đảo vị thế theo xu hướng chính</b>. Nhờ vậy không phải ngồi chờ qua các nhịp điều chỉnh.' },
      { t: 'h3', x: 'Tinh chỉnh vào lệnh bằng khung nhỏ' },
      { t: 'p', x: 'Lệnh được vào khi giá <b>đóng cửa trên Kijun H4</b>. Khung 60 phút giúp xem chi tiết (ví dụ Lagging Span 60p chưa xác nhận đà tăng). Nếu giá rơi dưới Kijun 60p, bỏ chiến lược này; cắt lỗ sát dưới Kijun và nới rộng khi lệnh đi đúng hướng ở khung cao.' }
    ] },
    { icon: '🛑', title: 'Cắt lỗ kỹ thuật & lệnh chốt lời', blocks: [
      { t: 'list', items: [
        '<b>Cắt lỗ phải dựa vào kỹ thuật</b> (mức vô hiệu hoá kịch bản), rồi điều chỉnh khối lượng theo quản lý vốn – chứ không đặt theo số tiền chịu lỗ. “Cắt lỗ không dựa vào kỹ thuật thì chắc chắn thất bại.”',
        'Cắt lỗ <b>chặt lúc đầu</b>, rộng ra khi lệnh tiến triển, và chặt lại khi sắp tới mục tiêu cuối.',
        'Không nên kéo cắt lỗ về giá vào lệnh một cách máy móc: bạn sẽ thoát không lãi không lỗ. Hãy kéo theo <b>mức kỹ thuật mới</b> xuất hiện.',
        '<b>Kijun</b>: dùng đầu lệnh (vào khi phá Kijun, phá ngược lại = vô hiệu). <b>SSB</b> bị vượt giữa chặng: dùng như Kijun. <b>Tenkan</b>: đặc biệt cuối lệnh – giá gần mục tiêu mà phá Tenkan = cuộc chạy đã hết, nên đóng lệnh.',
        'Dùng <b>lệnh giới hạn (limit)</b> chốt lời, và <b>chừa lại vài điểm</b> cho thị trường.'
      ] },
      { t: 'widget', name: 'rr-calc', title: 'Máy tính rủi ro/lợi nhuận (R:R)' },
      { t: 'key', x: 'Chỉ nhận lệnh có R:R ≥ <b>1:1,5</b>, tốt hơn là ≥ <b>1:2</b>. Tác giả cá nhân chỉ vào lệnh có <b>R:R 1:3</b>.' },
      { t: 'warn', x: 'Mục tiêu dựa vào Kijun có thể <b>tự đổi</b>: khi đỉnh 26 nến cũ rơi khỏi cửa sổ tính mà không có đỉnh mới, Kijun hạ xuống (ví dụ NZDUSD khiến mục tiêu bị hạ). Khi lập kế hoạch, hãy đếm xem mục tiêu <b>giữ nguyên bao nhiêu nến</b> (ví dụ có 8 phiên để đạt mục tiêu).' }
    ] },
    { icon: '⚡', title: 'Giao dịch siêu ngắn hạn (VST)', blocks: [
      { t: 'p', x: 'Tác giả gọi là VST (very short-term) thay vì scalping vì kỳ vọng tối thiểu <b>15–20 điểm</b> mỗi lệnh (forex). Luật chặt hơn nhiều: vội vàng = lỗ nhanh. Vì phải xác nhận kỹ nên bạn bỏ lỡ vài điểm đầu.' },
      { t: 'table', head: ['Tầm nhìn', 'Khung 1 (phân tích)', 'Khung 2 (chiến lược)', 'Khung 3 (quản lý vị thế)'], rows: [
        ['Rất ngắn hạn', '15 phút', '5 phút', '1 phút'],
        ['Ngắn hạn', '60 phút', '15 phút', '5 phút'],
        ['Trung hạn', 'Ngày', '240 phút', '60 phút'],
        ['Dài hạn', 'Tuần', 'Ngày', '240 phút']
      ] },
      { t: 'tip', x: 'Hai khung <b>H4 và 15 phút</b> được coi là liên quan nhất của Ichimoku: tín hiệu phá Kijun rõ nhất, mục tiêu hợp lý nhất. Thường thêm 1 khung cao hơn Khung 1 để biết xu hướng chung.' },
      { t: 'h3', x: '3 quy tắc vàng' },
      { t: 'steps', items: [
        '<b>Biết xoay giữa các khung thời gian</b> và chọn đúng 3 khung phù hợp suốt lệnh.',
        '<b>Không được “đón đầu” tín hiệu</b>: chờ xác nhận dù mất vài điểm. Hệ thống xác nhận là gốc của tỷ lệ thắng cao.',
        '<b>Chờ nến hiện tại đóng cửa</b> ở khung đang xét, nhất là khung thấp.'
      ] },
      { t: 'h3', x: 'Bài học từ các ví dụ' },
      { t: 'list', items: [
        '<b>GBPUSD</b>: đợi ~1 giờ để vào, chỉ thu 35 điểm trong 1 nến 15 phút. Tín hiệu bán bị vô hiệu vì nến đóng trên Kijun → “luôn chờ nến đóng”. Lagging Span 1 phút bật khỏi Kijun giải thích vì sao giá ngừng giảm giữa chừng → “luôn theo dõi cả 3 khung”. Thoát lệnh khi gần mục tiêu để không bị giá quay về giá vào.',
        '<b>NZDUSD</b>: Kijun mục tiêu bất ngờ hạ do phép toán trượt cửa sổ 26 nến. Thoát khi phá Tenkan, không đợi đóng nến. Sau đó Kijun bị phá và Lagging Span xác nhận giảm.',
        '<b>Tin kinh tế (GBPUSD)</b>: sau công bố Lagging Span thất bại ở vật cản, giá rơi mạnh. Nên chờ thị trường ổn định rồi mới vào.',
        '<b>AUDUSD</b>: chiến lược lập ở khung &gt;60 phút cho lệnh trong ngày thì không nhìn khung dưới 15 phút (nhiễu khiến đóng sớm). Cắt lỗ ở khung cao phải <b>khớp kỹ thuật</b> ở khung thấp (trên SSB H4 = trên Tenkan 60p = trên Kijun 15p).'
      ] }
    ] }
  ],
  summary: [
    'Analyst mô tả và trung lập; trader chuyển phân tích thành kế hoạch có điểm vào, cắt lỗ, mục tiêu, và phải quản lý cảm xúc.',
    'Đọc nến: màu → thân → bóng. Doji = cân bằng/đảo chiều tuỳ vị trí.',
    'Quy tắc 3 nến: vào nến 2, ra nến 3; bỏ qua Doji khi đếm; chỉ dùng khi có xu hướng.',
    'Cắt lỗ kỹ thuật: Kijun (đầu lệnh), SSB (giữa), Tenkan (cuối lệnh).',
    'Chỉ nhận lệnh R:R tối thiểu 1:1,5; tốt 1:2; tác giả 1:3.',
    '3 quy tắc: xoay khung thời gian, không đón đầu, chờ nến đóng cửa.',
    'Chiến lược lập ở khung nào thì đừng xem khung quá nhỏ gây nhiễu; cắt lỗ phải khớp kỹ thuật ở khung thấp.'
  ],
  cards: [
    ['Điểm khác biệt cốt lõi giữa analyst và trader?', 'Trader có cam kết cảm xúc (tiền trong thị trường) và phải biến phân tích thành kế hoạch: điểm vào, cắt lỗ, điểm ra; analyst thì trung lập.'],
    ['Thứ tự đọc của analyst trên biểu đồ Ichimoku?', 'Mây → giá so với mây → Lagging Span → cuối cùng Tenkan/Kijun.'],
    ['Khi đọc một nến Nhật, xem những gì theo thứ tự?', 'Màu → kích thước thân → bóng nến.'],
    ['Thân nến nhỏ / Doji nói lên điều gì?', 'Hai phe đồng thuận về giá, cân bằng, không bên nào kiểm soát; ở đỉnh/đáy sau xu hướng dài có thể là đảo chiều.'],
    ['Dragonfly và Tombstone khác nhau thế nào?', 'Dragonfly (đáy): phe mua kiểm soát. Tombstone (đỉnh): phe bán chiếm ưu thế.'],
    ['Quy tắc chính khi đọc nến?', 'Chờ nến thứ ba xác nhận thông tin của nến đầu.'],
    ['“Quy tắc 3 nến” là gì?', 'Một nhịp xung lực thường gồm 3 nến cùng màu rồi tới điều chỉnh ngược màu; vào ở nến thứ 2, thoát khi nến thứ 3 yếu.'],
    ['Vì sao không vào lệnh ở nến thứ 3?', 'Nến sau thường ngược màu (điều chỉnh) nên dễ rơi vào lỗ.'],
    ['Có đếm Doji/spinning top vào 3 nến không?', 'Không – là nến do dự, không đại diện cho xung lực.'],
    ['Quy tắc 3 nến dùng được khi nào?', 'Chỉ trong thị trường có xu hướng, không dùng khi đi ngang.'],
    ['Cắt lỗ nên dựa trên điều gì?', 'Mức kỹ thuật vô hiệu hoá kịch bản, rồi điều chỉnh khối lượng theo quản lý vốn.'],
    ['Dùng Kijun, SSB, Tenkan làm cắt lỗ/thoát lệnh khi nào?', 'Kijun: đầu lệnh. SSB (đã vượt giữa chặng): như Kijun. Tenkan: cuối lệnh – phá Tenkan gần mục tiêu là tín hiệu đóng lệnh.'],
    ['Tỷ lệ R:R tối thiểu tác giả chấp nhận?', 'Tối thiểu 1:1,5; tốt hơn 1:2; bản thân tác giả chỉ vào lệnh 1:3.'],
    ['Ba quy tắc vàng khi giao dịch Ichimoku?', 'Biết xoay giữa 3 khung · không đón đầu tín hiệu · chờ nến đóng cửa.'],
    ['Vì sao mục tiêu dựa vào Kijun có thể thay đổi?', 'Khi đỉnh cũ rơi khỏi cửa sổ 26 nến mà không có đỉnh mới, trung điểm Kijun hạ xuống.'],
    ['Hai khung được coi là liên quan nhất của Ichimoku?', 'H4 (240 phút) và 15 phút.'],
    ['Khung của lệnh trung hạn (phân tích/chiến lược/quản lý)?', 'Ngày / 240 phút / 60 phút.'],
    ['VST là gì?', 'Very short-term trading – giao dịch siêu ngắn hạn, kỳ vọng ≥ 15–20 điểm/lệnh, luật xác nhận chặt chẽ.']
  ],
  quiz: [
    { q: 'Điểm khác biệt chính giữa analyst và trader là:', o: ['Dùng chỉ báo khác nhau', 'Trader chịu áp lực cảm xúc vì có vị thế trên thị trường', 'Analyst kiếm tiền nhiều hơn', 'Trader không cần phân tích'], a: 1, e: 'Trader phải quản lý cảm xúc; analyst trung lập.' },
    { q: 'Khi đọc một cây nến, thứ tự quan sát đúng là:', o: ['Bóng → thân → màu', 'Màu → kích thước thân → bóng', 'Thân → khối lượng → màu', 'Chỉ cần xem màu'], a: 1, e: 'Màu cho biết phe nào, thân cho sức mạnh, bóng cho biết giá bị từ chối.' },
    { q: 'Nến Doji nằm ở đỉnh sau một xu hướng tăng dài thường báo hiệu:', o: ['Tăng tiếp mạnh hơn', 'Có thể đảo chiều', 'Không có ý nghĩa', 'Chỉ do dữ liệu lỗi'], a: 1, e: 'Doji ở cực trị sau xu hướng dài là dấu hiệu đảo chiều; giữa xu hướng chỉ là tạm nghỉ.' },
    { q: 'Quy tắc 3 nến: nên vào lệnh ở nến nào?', o: ['Nến thứ nhất', 'Nến thứ hai', 'Nến thứ ba', 'Nến thứ tư'], a: 1, e: 'Nến 1 cho tín hiệu, nến 3 có thể bị từ chối; nến 2 là điểm vào hợp lý.' },
    { q: 'Doji khi đếm 3 nến được xử lý thế nào?', o: ['Tính như một nến', 'Bỏ qua', 'Là nến thứ ba', 'Huỷ cả đếm'], a: 1, e: 'Doji là nến do dự, không đại diện cho xung lực.' },
    { q: 'Quy tắc 3 nến phù hợp nhất với:', o: ['Thị trường đi ngang', 'Thị trường có xu hướng', 'Mọi thị trường', 'Chỉ khung tháng'], a: 1, e: 'Dùng trong xu hướng; không phù hợp khi thị trường chưa quyết định.' },
    { q: 'Cắt lỗ nên được đặt dựa vào:', o: ['Số tiền sẵn sàng mất', 'Mức kỹ thuật vô hiệu hoá kịch bản', 'Ngẫu nhiên', 'Giá vào lệnh'], a: 1, e: 'Cắt lỗ kỹ thuật, rồi chỉnh khối lượng cho phù hợp quản lý vốn.' },
    { q: 'Gần mục tiêu cuối cùng, giá phá Tenkan cho biết:', o: ['Nên tăng vị thế', 'Chuyển động có thể đã kết thúc, nên đóng lệnh', 'Cần đổi khung', 'Chỉ là nhiễu'], a: 1, e: 'Tenkan là đường cảnh báo, đặc biệt cuối lệnh.' },
    { q: 'Tỷ lệ R:R tác giả tự áp dụng khi vào lệnh là:', o: ['1:1', '1:1,5', '1:2', '1:3'], a: 3, e: 'Tối thiểu chấp nhận 1:1,5, tốt 1:2, tác giả chỉ vào lệnh 1:3.' },
    { q: 'Quy tắc nào KHÔNG thuộc 3 quy tắc vàng?', o: ['Xoay giữa 3 khung thời gian', 'Không đón đầu tín hiệu', 'Chờ nến đóng cửa', 'Luôn dùng đòn bẩy cao'], a: 3, e: 'Ba quy tắc là xoay khung, không đón đầu, chờ đóng nến.' },
    { q: 'Vì sao Kijun mục tiêu có thể tự hạ xuống?', o: ['Do lỗi nền tảng', 'Đỉnh cũ rời khỏi cửa sổ 26 nến mà không có đỉnh mới', 'Do tin tức', 'Do Tenkan cắt lên'], a: 1, e: 'Trung điểm đổi khi đỉnh/đáy rơi khỏi cửa sổ tính.' },
    { q: 'Hai khung thời gian quan trọng nhất của Ichimoku theo tác giả:', o: ['1 phút và 5 phút', 'H4 và 15 phút', 'Ngày và tuần', 'Tuần và tháng'], a: 1, e: 'H4 và 15 phút cho tín hiệu phá Kijun và mục tiêu rõ nhất.' },
    { q: 'Lệnh trung hạn dùng bộ khung (phân tích / chiến lược / quản lý) nào?', o: ['15p / 5p / 1p', '60p / 15p / 5p', 'Ngày / 240p / 60p', 'Tuần / ngày / 240p'], a: 2, e: 'Trung hạn: Ngày – 240 phút – 60 phút.' },
    { q: 'Tại sao nên kéo cắt lỗ theo mức kỹ thuật mới thay vì về giá vào lệnh?', o: ['Để chắc chắn lỗ', 'Để không bị thoát vô nghĩa không lãi; stop gắn với vô hiệu hoá kỹ thuật sẽ không bị chạm nếu giá đi đúng hướng', 'Vì sàn yêu cầu', 'Không có lý do'], a: 1, e: 'Đưa stop về giá vào lệnh chỉ làm bạn thoát không lãi; stop nên bám mức kỹ thuật.' },
    { q: 'Với lệnh trong ngày lập chiến lược ở khung 240p, bạn nên:', o: ['Xem khung 1 phút liên tục', 'Tránh xem khung dưới 15 phút vì nhiễu', 'Bỏ khung 60p', 'Luôn đóng khi có Doji 1 phút'], a: 1, e: 'Khung quá nhỏ gây đóng lệnh sớm do nhiễu.' }
  ],
  match: [
    ['Analyst', 'Mô tả tình huống, trung lập'],
    ['Trader', 'Biến phân tích thành kế hoạch có điểm vào, cắt lỗ, mục tiêu'],
    ['Marubozu', 'Thân lớn không bóng – một phe kiểm soát'],
    ['Dragonfly Doji', 'Ở đáy: phe mua kiểm soát'],
    ['Tombstone Doji', 'Ở đỉnh: phe bán chiếm ưu thế'],
    ['Vào nến 2, ra nến 3', 'Tóm tắt quy tắc 3 nến'],
    ['Cắt lỗ cuối lệnh', 'Phá Tenkan khi gần mục tiêu → đóng lệnh'],
    ['R:R 1:3', 'Chuẩn lệnh của tác giả'],
    ['VST', 'Giao dịch siêu ngắn hạn, ≥ 15–20 điểm/lệnh'],
    ['H4 và 15 phút', 'Hai khung liên quan nhất với Ichimoku']
  ]
},

/* ======================= CHƯƠNG 5 ======================= */
{
  n: 5,
  title: 'Kỹ thuật nâng cao: chiếu khung thời gian',
  intro: 'Thay vì mở 3 biểu đồ riêng, ta chiếu Kijun/mây của khung lớn lên biểu đồ khung nhỏ để thấy các vùng hợp lưu (confluence). Đây là đóng góp nền tảng của Ichimoku cho phân tích kỹ thuật.',
  sections: [
    { icon: '🧱', title: 'Ý tưởng: ghép hai khung trên một biểu đồ', blocks: [
      { t: 'p', x: 'Hệ thống trước dùng 3 khung (vd. H4 tổng quan, H1 quản lý lệnh, 15p vào/ra). Giờ ta <b>trộn hai khung trên cùng một biểu đồ</b>: biểu đồ hiển thị là khung giao dịch, còn khung được chiếu (projection) vẽ chồng Kijun và mây (đôi khi cả Lagging Span) của khung lớn hơn.' },
      { t: 'table', head: ['Loại giao dịch', 'Khung nhìn tổng quan', 'Khung theo dõi/quản lý', 'Khung vào/ra'], rows: [
        ['Trong ngày', '240 phút (H4)', '60 phút (H1)', '15 phút'],
        ['Ngắn hạn (&lt; 30 phút)', '15 phút', '5 phút', '1 phút']
      ] },
      { t: 'key', x: 'Chỉ <b>mây và Kijun</b> của khung chiếu được vẽ chồng, và Lagging Span chỉ khi khung chiếu gần khung đang xem. <b>Không nên chiếu cả 3 khung lên 1 biểu đồ</b> – quá rối.' }
    ] },
    { icon: '🎯', title: 'Vùng hợp lưu & cách chọn khung chiếu', blocks: [
      { t: 'list', items: [
        'Kijun khung lớn <b>trùng</b> SSB khung nhỏ (hoặc Kijun + Kijun) → vùng hỗ trợ/kháng cự <b>rất mạnh</b>. Có khi 4 mức dồn lại (“kháng cự bốn lớp”: 2 Kijun + SSB + Tenkan).',
        'Chỉ nhìn H1 có thể thấy mỗi Tenkan làm kháng cự; khi chiếu lên khung nhỏ lại thấy Kijun trùng SSB → cản mạnh hơn nhiều.',
        'Khung chiếu <b>không nhất thiết là khung sát nhất</b>. Chọn khung <b>có mức quan trọng mà giá sắp chạm/đang cố phá</b>. Đôi khi H4 chiếu lên biểu đồ 5 phút.',
        'Hai khung thường được chọn nhất: <b>15 phút và H4</b>.',
        'Với tin kinh tế biến động mạnh, chiếu khung cao (H1/H4) lên màn 1 phút: vừa quản lý lệnh ngắn hạn vừa thấy mục tiêu và vị trí cắt lỗ.'
      ] },
      { t: 'tip', x: 'Khi chỉ xem rất ngắn hạn, chỉ quan tâm thông tin hữu ích trong ~5–15 phút tới. Mây khung chiếu quá xa giá thì <b>vô dụng</b>, bỏ qua; cũng bỏ qua vật cản ở phía bên kia Kijun mà giá chưa vượt được – hãy tìm <b>hỗ trợ</b> làm mục tiêu.' },
      { t: 'p', x: 'Lagging Span của khung lớn có thể nằm rất xa: ví dụ Lagging Span 15p cách 26 × 15 = 390 nến 1 phút → không nhìn thấy trên biểu đồ 1 phút.' }
    ] },
    { icon: '🔬', title: 'Các ví dụ minh hoạ', blocks: [
      { t: 'tabs', items: [
        ['DAX 15p / chiếu H1', '<p>H4 cho thấy nến xanh không đi tiếp vì bị chặn bởi Kijun H1. Chiếu H1 lên 15p: hỗ trợ kép dưới Lagging Span là SSB 15p + Kijun H1. Giá phá Kijun H1, bật lên rồi bị cản lại tại Kijun H1 trùng SSB — kháng cự mạnh. Khuyên: <b>chờ phá đường xu hướng và Lagging Span cắt Kijun H1</b> mới bán.</p><p><b>Bài học:</b> Lagging Span là đường quan trọng nhất để <b>xác nhận</b> hành động giá.</p>'],
        ['GBPUSD 5p / chiếu 15p', '<p>Giá bị chặn ở Kijun 15p trùng SSB 5p. Phía trên còn twist tăng của mây 15p. Khi <b>giá và cả hai Lagging Span cùng vượt</b> mức hợp lưu (phá hai Kijun) → tín hiệu giá tăng mạnh theo sau. Cuối đà tăng, Lagging Span 15p không thể xuyên qua giá → báo hiệu kết thúc, sau đó nến đỏ lớn xuất hiện.</p><p>Vùng nhiều đường chồng chéo = <b>đừng vào lệnh</b>, chờ cả giá và hai Lagging Span thoát mây.</p>'],
        ['DAX 1p', '<p>Kháng cự bốn lớp (Kijun 5p + Kijun 15p + SSB 5p + Tenkan) ở giữa mây 1 phút. Giá không chạm được kháng cự vì Lagging Span 1p kẹt trong mây (cân bằng) → giá tiếp tục giảm. Trên biểu đồ 1 phút chiếu 5 phút: Kijun 5p nằm trên SSB 1p → kháng cự mạnh nếu giá phá được đường xu hướng.</p>'],
        ['GBPUSD nhiều khung', '<p>Sau tín hiệu bán phá Kijun H1, câu hỏi: chỉ là kiểm tra điểm phá hay vô hiệu? Giá thử Kijun H1 chỉ bằng 1 nến 1 phút → là “điểm thừa” của thị trường. Mây 1 phút dày làm hỗ trợ mạnh nên đó là nhịp thử lại, không phải vô hiệu. Cuối cùng giá thất bại dưới Kijun, nhịp tăng chỉ là điều chỉnh 3 nến xanh trên khung 15p.</p>'],
        ['Tin tức Mỹ (M15 / H4)', '<p>Sau công bố số liệu Mỹ, giá bứt phá lên bằng 3 nến xanh tới Kijun H4. Nến xanh hiện tại sẽ đóng đỏ báo hiệu điều chỉnh. Khoảng cách xa giữa khung giao dịch và khung chiếu là cần thiết để tính tới biến động cao.</p>']
      ] }
    ] },
    { icon: '🟣', title: 'Lagging Span giữa các khung', blocks: [
      { t: 'p', x: 'Ví dụ GBPNZD (tuần / H1 / H4) cho thấy khi nhìn qua chiếu khung, bạn thấy cách Lagging Span từ các khung khác nhau tương tác với Kijun và SSB của nhau:' },
      { t: 'list', items: [
        'Tuần: giá dưới mây, Lagging Span phá Kijun và mức then chốt → xu hướng giảm đang được xác nhận, giá đang hồi thử lại điểm phá.',
        'H1 + H4 chiếu: giá bị Kijun H4 chặn; Lagging Span H4 lại kẹt giữa hàng loạt vật cản (giá, SSB H1, SSB H4, hai Kijun, Tenkan H1) → nhịp tăng “đã định sẵn thất bại”.',
        '5p/15p: hai Lagging Span <b>bị Kijun của khung đối diện chặn</b> – Lagging Span 5p tìm hỗ trợ ở Kijun 15p (trùng SSB), trong khi Lagging Span 15p bị Kijun 5p chặn; dù giá giảm mạnh cả hai mức hỗ trợ đều giữ.',
        'Giá và Lagging Span H1 cùng phá kháng cự nhưng bị Lagging Span H4 chặn khi chạm Kijun H1.'
      ] },
      { t: 'key', x: 'Hãy luôn chú ý tới tương tác giữa <b>Lagging Span</b> với <b>Kijun và SSB của các khung khác nhau</b> – điều không thể thấy nếu chỉ xem từng khung riêng lẻ.' },
      { t: 'mnemo', x: 'Kijun + SSB trùng nhau = “<b>tường thép</b>”. Giá và Lagging Span cùng xuyên qua = “<b>cửa mở</b>”.' }
    ] },
    { icon: '📌', title: 'Quy trình áp dụng', blocks: [
      { t: 'steps', items: [
        'Xác định 3 khung theo tầm nhìn; mở biểu đồ khung trung gian/nhỏ.',
        'Chọn khung chiếu có mức quan trọng gần giá nhất (hay dùng H4 hoặc 15p).',
        'Tìm các <b>vùng hợp lưu</b> (Kijun/SSB/Tenkan trùng) phía giá cần vượt.',
        'Kiểm tra Lagging Span (của khung hiển thị, đôi khi cả khung chiếu) có tự do hay bị chặn.',
        'Chỉ hành động khi <b>cả giá và Lagging Span</b> cùng vượt hợp lưu; đặt cắt lỗ ở mức kỹ thuật khớp trên mọi khung; mục tiêu = hợp lưu kế tiếp.'
      ] }
    ] }
  ],
  summary: [
    'Chiếu (projection) Kijun + mây của khung lớn lên biểu đồ khung nhỏ để thấy vùng hợp lưu.',
    'Không chiếu cả 3 khung lên 1 biểu đồ – sẽ rối.',
    'Khung chiếu chọn theo mức quan trọng giá đang gần, thường là H4 hoặc 15 phút.',
    'Hợp lưu (Kijun + SSB, Kijun + Kijun…) tạo cản rất mạnh; giá và Lagging Span cùng vượt → tín hiệu mạnh.',
    'Lagging Span bị Kijun/SSB của khung khác chặn có thể giải thích vì sao giá dừng.',
    'Với tin tức, chiếu khung cao (H1/H4) lên biểu đồ 1–5 phút để tìm mục tiêu và cắt lỗ.'
  ],
  cards: [
    ['“Chiếu khung thời gian” (projection) là gì?', 'Vẽ chồng Kijun và mây của khung lớn lên biểu đồ khung nhỏ (đôi khi cả Lagging Span).'],
    ['Cặp khung cho giao dịch trong ngày?', 'H4 tổng quan, H1 quản lý lệnh, 15 phút vào/ra.'],
    ['Cặp khung cho giao dịch dưới 30 phút?', '15 phút tổng quan, 5 phút chiến lược, 1 phút quản lý lệnh.'],
    ['Có nên chiếu cả 3 khung lên một biểu đồ?', 'Không – khó đọc, khó lọc thông tin quan trọng.'],
    ['Thành phần nào của khung chiếu được vẽ?', 'Mây và Kijun; Lagging Span chỉ khi khung chiếu gần khung đang xem.'],
    ['Khung chiếu nên chọn thế nào?', 'Khung có mức quan trọng mà giá sắp chạm hoặc đang cố phá, không nhất thiết khung sát nhất.'],
    ['Hai khung quan trọng nhất để chiếu?', '15 phút và H4.'],
    ['Vùng hợp lưu (confluence) là gì?', 'Nơi nhiều đường (Kijun, SSB, Tenkan…) của các khung trùng cùng mức giá → hỗ trợ/kháng cự rất mạnh.'],
    ['Khi giá và cả hai Lagging Span cùng vượt một mức thì sao?', 'Là tín hiệu quý giá cho hành động giá mạnh phía sau.'],
    ['Khi nào mây khung chiếu “vô dụng”?', 'Khi quá xa giá hiện tại.'],
    ['Khi giao dịch tin kinh tế nên chiếu khung nào?', 'Khung cao (H1/H4) lên màn 1–5 phút để thấy mục tiêu và cắt lỗ.'],
    ['Vì sao không thấy Lagging Span 15p trên biểu đồ 1p?', 'Nó lùi 26 × 15 = 390 nến 1 phút nên nằm quá xa bên trái.']
  ],
  quiz: [
    { q: 'Chiếu khung thời gian trên Ichimoku nghĩa là:', o: ['Đổi thông số Ichimoku', 'Vẽ chồng Kijun và mây khung lớn lên biểu đồ khung nhỏ', 'Dùng 2 màn hình', 'Cộng giá hai khung'], a: 1, e: 'Chiếu = thể hiện mức quan trọng của khung lớn trên khung nhỏ.' },
    { q: 'Thành phần nào thường được chiếu?', o: ['Chỉ Tenkan', 'Mây và Kijun', 'Chỉ Lagging Span', 'Toàn bộ 5 đường của 3 khung'], a: 1, e: 'Mây và Kijun; Lagging Span khi khung chiếu gần khung đang xem.' },
    { q: 'Vì sao không nên chiếu cả 3 khung lên một biểu đồ?', o: ['Nền tảng không hỗ trợ', 'Quá rối, khó rút thông tin quan trọng', 'Sai về toán học', 'Mất phí'], a: 1, e: 'Tác giả khuyên chỉ chiếu một khung phù hợp.' },
    { q: 'Hai khung thường được chọn làm khung chiếu nhất là:', o: ['1 phút và 5 phút', '15 phút và H4', 'Ngày và tuần', 'Tháng và quý'], a: 1, e: '15 phút và H4 cho tín hiệu mạnh và rõ nhất.' },
    { q: 'Vùng hợp lưu mạnh nhất là khi:', o: ['Tenkan cắt Kijun', 'Kijun khung lớn trùng SSB khung nhỏ', 'Mây rất mỏng', 'Giá trên mây'], a: 1, e: 'Kijun và SSB trùng nhau là kháng cự/hỗ trợ rất mạnh.' },
    { q: 'Giá và Lagging Span cùng phá một mức hợp lưu cho thấy:', o: ['Tín hiệu giả', 'Tín hiệu có giá trị cho một chuyển động mạnh tiếp theo', 'Phải đóng lệnh', 'Mây sắp biến mất'], a: 1, e: 'Sự đồng thuận giữa giá và Lagging Span xác nhận mạnh.' },
    { q: 'Giao dịch số liệu kinh tế nên chiếu:', o: ['Khung sát khung giao dịch', 'Khung cao hơn nhiều như H1/H4', 'Không cần chiếu', 'Khung tháng'], a: 1, e: 'Biến động mạnh nên cần mục tiêu/cắt lỗ từ khung cao.' },
    { q: 'Trên biểu đồ 1 phút, Lagging Span khung 15 phút cách bao nhiêu nến?', o: ['26 nến', '100 nến', '390 nến', '15 nến'], a: 2, e: '26 × 15 = 390 nến 1 phút.' },
    { q: 'Khung chiếu mà mây ở xa giá thì:', o: ['Rất quan trọng', 'Vô dụng, có thể bỏ qua', 'Là mục tiêu bắt buộc', 'Cần dời cắt lỗ'], a: 1, e: 'Chỉ quan tâm thông tin liên quan đến vài chục phút tới.' },
    { q: 'Lagging Span 5p bị chặn bởi Kijun 15p cho thấy:', o: ['Dữ liệu lỗi', 'Tương tác giữa các khung giải thích vì sao giá dừng', 'Mây sắp xoắn', 'Phải đổi thông số'], a: 1, e: 'Chiếu khung giúp thấy các tương tác này.' }
  ],
  match: [
    ['Projection', 'Chiếu Kijun/mây khung lớn lên khung nhỏ'],
    ['Confluence', 'Nhiều mức trùng nhau → cản rất mạnh'],
    ['Khung chiếu phổ biến', 'H4 và 15 phút'],
    ['Tin kinh tế', 'Chiếu khung cao lên biểu đồ 1–5 phút'],
    ['Kijun + SSB trùng', '“Tường thép” hỗ trợ/kháng cự'],
    ['Giá + Lagging Span cùng vượt', 'Tín hiệu mạnh'],
    ['Mây khung chiếu quá xa', 'Bỏ qua'],
    ['Chiếu cả 3 khung', 'Quá rối – không khuyến nghị']
  ]
},

/* ======================= CHƯƠNG 6 ======================= */
{
  n: 6,
  title: 'Ichimoku kết hợp Fibonacci',
  intro: 'Fibonacci cho các mức tỷ lệ, Ichimoku cho biết mức nào thật sự có lực. Hai công cụ bổ sung cho nhau; xu hướng (trend line) là công cụ phụ duy nhất tác giả thêm vào Ichimoku.',
  sections: [
    { icon: '📈', title: 'Đường xu hướng (trend line) – công cụ bổ sung duy nhất', blocks: [
      { t: 'p', x: 'Người phương Tây thiếu kiên nhẫn có thể thêm chỉ báo khác, nhưng tác giả cho rằng Ichimoku đã là hệ thống hoàn chỉnh; thêm chỉ báo chỉ làm rối. Thêm đường trung bình động cũng <b>không mang lại gì</b>, vì Tenkan và Kijun đã có chức năng tương tự với thông số cố định ở mọi thị trường và khung thời gian.' },
      { t: 'key', x: '“Càng nhiều chỉ báo, càng nhiều hỗ trợ/kháng cự cản trở giá, phân tích càng phức tạp và trader càng thiếu tự tin.” Giao dịch: <b>đơn giản là bắt buộc</b>.' },
      { t: 'list', items: [
        'Vẽ đường xu hướng theo <b>bóng nến</b> (giá thực sự được giao dịch). Không vẽ đường xu hướng trên Lagging Span vì nó chỉ dùng giá đóng cửa.',
        'Ngoài việc giá phá đường xu hướng, <b>Lagging Span cũng phải vượt cùng đường đó</b> – bộ lọc cuối cùng chống tín hiệu giả.',
        'Nếu giá phá đường xu hướng và twist nhưng Lagging Span bật lại khỏi đường xu hướng, đà giảm/tăng sẽ không có động lượng.',
        'Giá có thể dừng “giữa chỗ không có gì” vì Lagging Span kẹt dưới các đường xu hướng trung và ngắn hạn.',
        '<b>Hãy giữ đường xu hướng trên biểu đồ</b> ngay cả khi nó đã hết tác dụng với giá, cho đến khi Lagging Span cũng đã vượt qua.',
        'Đường xu hướng trùng SSB/Kijun = tam trùng kháng cự. Andrew’s Pitchfork cũng có thể dùng: đường trung vị làm cản cho giá và Lagging Span.'
      ] }
    ] },
    { icon: '🐇', title: 'Fibonacci: dãy số & tỷ lệ', blocks: [
      { t: 'p', x: 'Leonardo Fibonacci (thế kỷ 13) đặt bài toán đàn thỏ và tìm ra dãy: <b>1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144…</b> (mỗi số bằng tổng hai số trước). Tỷ số hai số liên tiếp dần về <b>1,618</b> (tỷ lệ vàng); nghịch đảo là <b>0,618</b>. Thị trường phản ánh tâm lý nên giá cũng bị chặn ở các tỷ lệ này.' },
      { t: 'table', head: ['Tỷ lệ', 'Cách suy ra'], rows: [
        ['0,382', '1 − 0,618; cũng bằng 0,618 × 0,618'],
        ['0,236', '0,618 − 0,382; cũng bằng 0,618 × 0,382'],
        ['0,786', '√0,618'],
        ['1,272', '√1,618'],
        ['2,618', '1,618 × 1,618'],
        ['4,236', '1,618 × 2,618']
      ] },
      { t: 'mnemo', x: 'Hai tỷ lệ mạnh nhất: <b>0,618</b> và <b>1,618</b>. 0,5 là mức Kijun.' }
    ] },
    { icon: '↩️', title: 'Thoái lui (Retracement) & Mở rộng (Extension)', blocks: [
      { t: 'tabs', items: [
        ['Thoái lui', '<p>Tính từ đáy lên đỉnh trong nhịp tăng (và ngược lại với nhịp giảm). Luôn nhỏ hơn 100%, dùng để xác định <b>mục tiêu của nhịp điều chỉnh</b>.</p><p><b>78,6%</b> là mức điều chỉnh tối đa: đóng cửa vượt qua thì điều chỉnh tiếp tục tới đáy (đỉnh) mới.</p>'],
        ['Mở rộng', '<p>Áp dụng cho các nhịp <b>cùng hướng</b> xu hướng chính (swing) sau điều chỉnh trung gian. Chỉ xét mức &gt; 0,618. Mục tiêu giá của nhịp tiếp theo (vd. 1,272; 1,618; 2,0).</p>'],
        ['Kết hợp', '<p>Thoái lui + mở rộng cho <b>vùng hẹp</b> nơi các tỷ lệ hội tụ (vd. thoái lui 0,618 và mở rộng 1,272). Mở rộng không gần thoái lui chỉ là mức hỗ trợ/kháng cự trung gian. Mở rộng 100% tự nó chưa đủ, cần thoái lui xác nhận.</p>']
      ] },
      { t: 'widget', name: 'fib-calc', title: 'Máy tính mức Fibonacci: nhập đáy và đỉnh' },
      { t: 'tip', x: 'Kijun = trung điểm = mức thoái lui <b>50%</b> của nhịp được điều chỉnh. Bạn có thể kiểm chứng bằng công cụ “Tự tính trung điểm” ở chương 1.' }
    ] },
    { icon: '🤝', title: 'Ichimoku kiểm chứng Fibonacci (ví dụ DAX 5p)', blocks: [
      { t: 'steps', items: [
        'Vùng cản đầu tiên (thoái lui 0,618 / mở rộng 1,272) nằm ngay trên phần kéo dài của một <b>đoạn phẳng Kijun</b> của nhịp giảm trước. <b>Mức Kijun cũ vẫn còn hiệu lực</b> cho các chuyển động sau.',
        'Nhịp hồi dừng trước 1,618 – cũng do một đoạn phẳng Kijun cũ chặn lại.',
        'Giá điều chỉnh về mức cũ trùng Tenkan; phá Tenkan cho thấy đà tăng có thể xong → vẽ lại thoái lui B–C và mở rộng ABC, được ba vùng hội tụ: 1,00/0,382 · 1,272/0,50 · 1,618/0,618.',
        'Vùng 1,618/0,618 là chính, đồng thời trùng hỗ trợ Ichimoku (đỉnh mây SSB). Kijun = 50% thoái lui, và nến Doji hình thành ngay ở đó; bóng nến tới đúng mức SSB.',
        'Hôm sau giá tiếp tục tăng và đạt 1,618. Từ lúc ra khỏi mây, <b>mỗi nến đều đóng đúng một đường Ichimoku</b> – Ichimoku “đánh dấu” giá chính xác hơn Fibonacci.'
      ] },
      { t: 'key', x: 'Ichimoku giúp <b>xác nhận</b> mức Fibonacci nào đáng tin và <b>cảnh báo</b> khi giá gần mục tiêu. Có thể thoát khi giá chạm SSB, cho thấy tỷ lệ 1,618 sẽ không tới.' },
      { t: 'h3', x: 'Ví dụ GBPJPY (ngày): vì sao giá không tới 1,618?' },
      { t: 'p', x: 'Giá dừng ở vùng hỗ trợ gồm thoái lui 0,618 và mở rộng 1,414. Lẽ ra phải tới 1,618, nhưng <b>Lagging Span từ chối thoát mây</b> nên không xác nhận đà giảm. SSB trùng 0,618/1,414 hỗ trợ Lagging Span và cả giá. Thông tin thêm của Ichimoku: vùng hợp lưu kép này mạnh, nên tỷ lệ kế tiếp sẽ không tới.' }
    ] },
    { icon: '⚖️', title: 'Khi nào dùng cái nào?', blocks: [
      { t: 'table', head: ['Trader', 'Lợi ích khi kết hợp'], rows: [
        ['Chủ yếu dùng <b>Fibonacci</b>', 'Chiếu Ichimoku để xác nhận độ phù hợp của mức, xác định mục tiêu và cắt lỗ'],
        ['Chủ yếu dùng <b>Ichimoku</b>', 'Dùng thoái lui/mở rộng khi ít điểm tham chiếu, nhất là trong xu hướng dài']
      ] },
      { t: 'h3', x: 'Giới hạn của Ichimoku: khung rất dài' },
      { t: 'p', x: 'Ở biểu đồ <b>năm, quý, thậm chí tháng</b> (ví dụ DAX, thang log) khi giá cách Tenkan/Kijun rất xa, mây ở xa và Lagging Span không có vật cản gần, Ichimoku chỉ cho biết hỗ trợ (nên mua), <b>không cho mục tiêu</b>. Khi đó dùng mở rộng Fibonacci tìm vùng hội tụ (vd. 1,618/0,618/1,272, rồi 0,618/2,000/0,886).' },
      { t: 'warn', x: 'Ichimoku là chỉ báo xu hướng nên hết khả năng đưa mục tiêu giá trong tình huống này. Nó chỉ cảnh báo xu hướng yếu đi (phá Tenkan) hoặc đảo chiều (phá Kijun) – nhưng vẫn hữu ích để đọc mức trong nhịp điều chỉnh và xác nhận lệnh ngược xu hướng khi giá phá Tenkan.' }
    ] }
  ],
  summary: [
    'Trend line (vẽ theo bóng nến) là công cụ bổ sung duy nhất tác giả dùng; Lagging Span cũng phải vượt đường đó để xác nhận.',
    'Fibonacci: dãy 1,1,2,3,5,8…; tỷ lệ chính 0,618 và 1,618; các tỷ lệ khác suy ra từ chúng.',
    'Thoái lui <100% (mục tiêu điều chỉnh, 78,6% tối đa); mở rộng >0,618 (mục tiêu nhịp tiếp). Hợp lưu của hai loại cho vùng mục tiêu hẹp.',
    'Kijun = thoái lui 50%. Các đoạn phẳng Kijun/SSB cũ vẫn còn hiệu lực với nhịp sau.',
    'Ichimoku giúp xác nhận mức Fibonacci có lực hay không và cảnh báo khi giá gần mục tiêu.',
    'Ở khung rất dài, Ichimoku không cho mục tiêu → dùng Fibonacci mở rộng.'
  ],
  cards: [
    ['Công cụ bổ sung duy nhất tác giả dùng cùng Ichimoku?', 'Đường xu hướng (trend line), vẽ theo bóng nến.'],
    ['Vì sao không vẽ đường xu hướng trên Lagging Span?', 'Vì Lagging Span chỉ dựa giá đóng cửa, bỏ qua bóng nến.'],
    ['Lagging Span và đường xu hướng: quy tắc xác nhận?', 'Ngoài giá, Lagging Span cũng phải vượt cùng đường xu hướng; chưa vượt thì chưa vào lệnh.'],
    ['Vì sao thêm đường trung bình động vào Ichimoku là thừa?', 'Tenkan và Kijun đã gần giống MA nhưng thông số cố định mọi thị trường/khung.'],
    ['Dãy Fibonacci?', '1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144… (mỗi số bằng tổng hai số trước).'],
    ['Hai tỷ lệ Fibonacci chính?', '1,618 (tỷ lệ vàng) và nghịch đảo 0,618.'],
    ['Cách suy ra 0,382 và 0,236?', '0,382 = 1 − 0,618 = 0,618²; 0,236 = 0,618 − 0,382 = 0,618 × 0,382.'],
    ['Thoái lui (retracement) dùng để làm gì?', 'Xác định mục tiêu của nhịp điều chỉnh; luôn < 100%.'],
    ['Mức thoái lui tối đa của điều chỉnh?', '78,6%; đóng cửa vượt qua thì điều chỉnh tiếp tục tới đáy/đỉnh mới.'],
    ['Mở rộng (extension) dùng để làm gì?', 'Xác định mục tiêu giá của nhịp cùng hướng sau điều chỉnh; chỉ xét các mức > 0,618.'],
    ['Kijun tương ứng mức Fibonacci nào?', '50% thoái lui.'],
    ['Đoạn phẳng Kijun cũ còn tác dụng không?', 'Có – các mức Kijun cũ vẫn còn hiệu lực với chuyển động sau.'],
    ['Ichimoku bổ sung gì cho Fibonacci?', 'Xác nhận mức nào có lực, cảnh báo khi giá gần mục tiêu, xác định cắt lỗ.'],
    ['Giới hạn của Ichimoku trên khung năm/quý/tháng?', 'Không cho mục tiêu giá, chỉ cho hỗ trợ; dùng mở rộng Fibonacci tìm mục tiêu.']
  ],
  quiz: [
    { q: 'Công cụ bổ sung duy nhất tác giả khuyên dùng cùng Ichimoku?', o: ['RSI', 'MACD', 'Đường xu hướng', 'Bollinger Bands'], a: 2, e: 'Chỉ trend line mang lại thông tin hữu ích mà Ichimoku chưa có.' },
    { q: 'Vì sao thêm MA vào biểu đồ Ichimoku là không cần thiết?', o: ['MA luôn sai', 'Tenkan và Kijun đã đóng vai trò tương tự, với thông số cố định', 'MA khó vẽ', 'MA không dùng cho forex'], a: 1, e: 'Thêm MA chỉ làm biểu đồ rối.' },
    { q: 'Đường xu hướng nên vẽ theo:', o: ['Giá đóng cửa', 'Bóng nến', 'Lagging Span', 'Tenkan'], a: 1, e: 'Bóng nến thể hiện giá đã được giao dịch; Lagging Span bỏ qua bóng.' },
    { q: 'Giá phá đường xu hướng nhưng Lagging Span bị chặn bởi chính đường đó. Nên:', o: ['Vào lệnh ngay', 'Chờ Lagging Span vượt đường xu hướng', 'Bỏ đường xu hướng', 'Đóng mọi lệnh'], a: 1, e: 'Lagging Span là bộ lọc cuối cùng chống tín hiệu giả.' },
    { q: 'Hai tỷ lệ Fibonacci quan trọng nhất là:', o: ['0,236 và 4,236', '0,618 và 1,618', '0,5 và 2,0', '0,786 và 1,272'], a: 1, e: 'Mọi tỷ lệ khác được suy ra từ 1,618 và 0,618.' },
    { q: '0,382 được suy ra như thế nào?', o: ['1 − 0,618', '√0,618', '1,618 × 2', '0,618 + 0,5'], a: 0, e: '1 − 0,618 = 0,382 (cũng bằng 0,618²).' },
    { q: 'Mức thoái lui nào là điều chỉnh tối đa trước khi xu hướng điều chỉnh tiếp tục?', o: ['38,2%', '50%', '61,8%', '78,6%'], a: 3, e: 'Đóng cửa vượt 78,6% thì điều chỉnh tiếp diễn tới đáy/đỉnh mới.' },
    { q: 'Mức Fibonacci nào trùng với Kijun?', o: ['23,6%', '38,2%', '50%', '61,8%'], a: 2, e: 'Kijun là trung điểm → 50%.' },
    { q: 'Mở rộng Fibonacci dùng để:', o: ['Tìm hỗ trợ của điều chỉnh', 'Tìm mục tiêu của nhịp cùng hướng xu hướng', 'Tính khối lượng', 'Tìm twist'], a: 1, e: 'Extension cho mục tiêu giá của nhịp tiếp theo.' },
    { q: 'Trong ví dụ GBPJPY, vì sao giá không chạm mở rộng 1,618?', o: ['Do tin tức', 'Lagging Span không thoát mây và SSB trùng vùng hỗ trợ kép', 'Do Kijun quá xa', 'Do hết thanh khoản'], a: 1, e: 'Ichimoku cho biết vùng hợp lưu kép đủ mạnh.' },
    { q: 'Khi nào Ichimoku không cho được mục tiêu giá?', o: ['Khi giá trong mây', 'Khi giá xa Tenkan/Kijun, mây ở xa, trên khung rất dài', 'Khi có twist', 'Khi Doji xuất hiện'], a: 1, e: 'Ichimoku là chỉ báo xu hướng; lúc đó dùng Fibonacci mở rộng tìm mục tiêu.' },
    { q: 'Đoạn phẳng Kijun từ nhịp giảm trước có còn ý nghĩa với nhịp sau?', o: ['Không', 'Có – các mức Kijun cũ vẫn có hiệu lực', 'Chỉ trong 1 ngày', 'Chỉ trên khung tuần'], a: 1, e: 'Kijun cũ vẫn là vùng cản/hỗ trợ cho chuyển động sau.' }
  ],
  match: [
    ['0,618', 'Nghịch đảo của tỷ lệ vàng 1,618'],
    ['0,382', '1 − 0,618'],
    ['0,786', 'Căn bậc hai của 0,618'],
    ['1,272', 'Căn bậc hai của 1,618'],
    ['Retracement', 'Mục tiêu của nhịp điều chỉnh (< 100%)'],
    ['Extension', 'Mục tiêu của nhịp cùng hướng xu hướng'],
    ['Kijun', 'Thoái lui 50%'],
    ['Trend line', 'Công cụ bổ sung duy nhất, vẽ theo bóng nến'],
    ['78,6%', 'Mức điều chỉnh tối đa'],
    ['Ichimoku ở khung rất dài', 'Chỉ cho hỗ trợ, không cho mục tiêu']
  ]
}

);
