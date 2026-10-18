// Understanding Stocks – Chương 11–12.
BOOK_DATA.stocks.chapters.push({
  n: 11,
  title: 'Phân tích kỹ thuật: nhập môn',
  intro: 'Phân tích kỹ thuật nghiên cứu giá cổ phiếu qua biểu đồ: loại biểu đồ, xu hướng, hỗ trợ–kháng cự, các mẫu hình và khoảng trống giá. Nó giúp loại cảm xúc ra khỏi quyết định, nhưng không bảo đảm lợi nhuận.',
  sections: [
    { icon: '📈', title: 'Biểu đồ giá và ba loại biểu đồ', blocks: [
      { t: 'key', x: 'Phân tích kỹ thuật nghiên cứu <b>giá</b> (cơ bản nghiên cứu doanh nghiệp). Nhà phân tích xem biểu đồ như bác sĩ phẫu thuật xem X-quang: gợi ý khi nào người ta mua/bán, nâng xác suất giao dịch đúng. Lợi ích lớn: <b>loại cảm xúc</b> — bạn có thể yêu công ty và CEO nhưng nếu biểu đồ yếu, bạn sẽ tránh mua. Churchill: “Nhìn càng xa về sau, thấy càng xa về trước.” Khung thời gian ngắn thì dự đoán chính xác hơn.' },
      { t: 'tabs', items: [
        ['Biểu đồ đường', '<p>Nối các <b>giá đóng cửa</b>. Dễ đọc, hay xuất hiện trên TV/báo vì đẹp, nhưng ít thông tin nên ít được nhà giao dịch ngắn hạn ưa, hữu ích khi kết hợp với chỉ báo khác. Có kèm khối lượng ở dưới.</p>'],
        ['Biểu đồ thanh (bar)', '<p>Mỗi thanh cho một kỳ (vd một ngày): <b>đỉnh thanh = giá cao nhất, đáy = giá thấp nhất</b>; vạch trái = giá mở cửa, vạch phải = giá đóng cửa. Biết ngay đóng cửa trên hay dưới mở cửa; tốt nếu đóng cửa cao hơn mở cửa kèm khối lượng mạnh.</p>'],
        ['Biểu đồ nến (candlestick)', '<p>Do một thương nhân gạo Nhật thế kỷ XVII sáng tạo. <b>Thân nến</b> = khoảng mở–đóng: trắng/rỗng nếu đóng cao hơn mở; đen/đặc nếu đóng thấp hơn. <b>Bấc/bóng (wicks, shadows)</b> = đỉnh và đáy. Cho thấy cả tâm lý thị trường.</p>']
      ] }
    ] },
    { icon: '↗️', title: 'Xu hướng', blocks: [
      { t: 'key', x: '<b>Xu hướng (trend)</b> là hướng đi của giá trong một kỳ; có ba loại: tăng, giảm, đi ngang. Mục tiêu: tham gia xu hướng tăng, tránh xu hướng giảm. “The trend is your friend (until it ends).”' },
      { t: 'table', head: ['Loại', 'Cách vẽ / đặc điểm', 'Hành động'], rows: [
        ['<b>Downtrend</b>', 'Vẽ đường nối ít nhất hai đỉnh; khối lượng cao ⇒ cổ phiếu gặp rắc rối', 'Cần rất dũng cảm mới mua; “mua khi giảm” từng hiệu quả đến khi gấu 2000 quét sạch tài khoản'],
        ['<b>Uptrend</b>', 'Vẽ đường nối ít nhất hai đáy; kèm khối lượng tăng', 'Nhiều nhà giao dịch mua giá cao, bán cao hơn; vấn đề là biết bao giờ hết đà'],
        ['<b>Sideways</b>', 'Lên xuống nhưng kết thúc chỗ cũ, khối lượng thấp', 'Thường tránh; nhưng khi tích luỹ rồi bứt phá lên/xuống mạnh có thể rất có lãi — khó biết bao giờ']
      ] },
      { t: 'p', x: '<b>Đảo chiều xu hướng</b>: khi đường xu hướng bị “phá vỡ”. Ví dụ QQQ giảm đầu tháng 9 rồi đảo chiều cuối tháng và tăng tiếp. Phải dùng thêm chỉ báo để xác nhận không phải đảo chiều tạm thời; xu hướng dài là bình thường, dài không có nghĩa sắp đảo.' }
    ] },
    { icon: '🧱', title: 'Hỗ trợ và kháng cự', blocks: [
      { t: 'tabs', items: [
        ['Hỗ trợ (support)', '<p>Mức giá mà ở đó cổ phiếu ngừng giảm (đi ngang hoặc đảo chiều): <b>người mua thắng</b>. Thường ở số tròn. Ví dụ JNJ chạm $56,50 ba lần rồi đảo chiều; sau đó thủng cả $56,50 và $56 ⇒ “broke through support” là dấu hiệu rất xấu, tạo chuỗi đáy thấp hơn (lower lows). Cisco: hỗ trợ $50 suốt thập niên 1990; đầu 2000 thủng, nhà kỹ thuật bán, giá xuống $10 năm 2002. Thủng hỗ trợ kèm khối lượng tăng ⇒ bán, dù cơ bản tốt.</p>'],
        ['Kháng cự (resistance)', '<p>Mức giá cổ phiếu ngừng tăng: <b>người bán thắng</b>. Boeing thử vượt $37 suốt tháng 9, rồi $36, thất bại và lùi về hỗ trợ $29. Nếu vượt kháng cự (“broke through resistance”) là dấu hiệu mạnh có thể mua; thường xảy ra trong bò. Nhiều chuyên gia chờ phá hỗ trợ/kháng cự mới giao dịch.</p>']
      ] },
      { t: 'warn', x: 'Thực tế khó hơn lý thuyết: vừa đặt lệnh mua sau khi vượt kháng cự, giá có thể quay đầu giảm 5 điểm.' }
    ] },
    { icon: '🔷', title: 'Mẫu hình giá và khoảng trống', blocks: [
      { t: 'table', head: ['Mẫu hình', 'Hình dạng', 'Ý nghĩa'], rows: [
        ['<b>Head and shoulders</b>', 'Vai trái – đầu cao hơn – vai phải; “neckline” nối hai đáy', '<b>Giảm</b> (đảo chiều đỉnh): thủng neckline xác nhận xu hướng tăng kết thúc'],
        ['<b>Reverse head and shoulders</b>', 'Gương của trên', '<b>Tăng</b>: vượt neckline trên khối lượng tăng là lúc mua'],
        ['<b>Double top</b> (chữ M)', 'Hai đỉnh cùng mức, hai lần không phá kháng cự', '<b>Giảm</b>: chuyển từ mua sang bán; triple top càng xấu'],
        ['<b>Double bottom</b> (chữ W)', 'Hai đáy cùng mức hỗ trợ', '<b>Tăng</b>; triple bottom cực kỳ tăng']
      ] },
      { t: 'tip', x: '<b>Nasdaq 2000</b>: đỉnh 3/2000 tạo head and shoulders (và double top) rồi thủng hỗ trợ ~4.500 xuống 3.500; sau đó double top ở 4.200 là cơ hội thoát thứ hai; chuỗi “head fake” (hồi giả) đánh lừa cả chuyên gia. Khi ở giữa trận chiến thì không rõ ràng như khi nhìn lại.' },
      { t: 'h3', x: 'Khoảng trống giá (gap)' },
      { t: 'list', items: [
        'Gap là khoảng trống không có giao dịch (thường do tin qua đêm) cho thấy mất cân bằng cung cầu mạnh; ví dụ IBM “gap up” từ $85 lên $86.',
        '<b>Breakaway gap</b>: gap lên mạnh trên khối lượng lớn đầu xu hướng, tạo chuỗi đỉnh mới. <b>Continuation gap</b>: giữa xu hướng. <b>Exhaustion gap</b>: gap nhưng không tạo đỉnh/đáy mới ⇒ sắp thất bại, giá quay lại lấp gap — thoát nhanh.',
        '“Mua gap up” với stop chặt hoặc “fade the gap” (giao dịch ngược hướng); người mới nên tránh giao dịch giờ mở cửa khi chuyên gia chi phối.'
      ] }
    ] },
    { icon: '🎭', title: 'Hạn chế & chân dung Jesse Livermore', blocks: [
      { t: 'warn', x: 'Người chỉ trích: đọc biểu đồ như xem bói bằng lá trà; quá khứ không dự đoán tương lai; chưa có bằng chứng chứng minh. Tác giả: giống phân tích cơ bản, đó là nghệ thuật nhiều hơn khoa học.' },
      { t: 'p', x: '<b>Jesse Livermore</b>: bỏ học làm “board boy”, giao dịch ở “bucket shop” (môi giới không phép, như sòng bạc) đến mức bị cấm; tác giả cuốn <i>Reminiscences of a Stock Operator</i> (1923, qua Edwin Lefevre). Kiếm tiền phần lớn nhờ bán khống; nhiều chiêu nay đã bất hợp pháp (thao túng, thông tin nội bộ, tung tin sai qua nhà báo). Sau khi mất khối tài sản triệu đô thứ tư, ông tự sát ở tuổi 63 với tài sản dưới $10.000.' }
    ] }
  ],
  summary: [
    'Phân tích kỹ thuật dùng biểu đồ giá để loại cảm xúc và tìm thời điểm mua/bán.',
    'Ba loại biểu đồ: đường, thanh, nến; ba loại xu hướng: tăng, giảm, đi ngang.',
    'Hỗ trợ là nơi người mua thắng, kháng cự là nơi người bán thắng; phá vỡ là tín hiệu quan trọng.',
    'Mẫu hình: head and shoulders, double top/bottom; khoảng trống: breakaway, continuation, exhaustion.',
    'Không bảo đảm lãi; dễ có tín hiệu giả; nên kết hợp chỉ báo.'
  ],
  cards: [
    ['Điểm khác biệt chính của phân tích kỹ thuật?', 'Nghiên cứu giá cổ phiếu, không nghiên cứu doanh nghiệp.'],
    ['Lợi ích lớn của biểu đồ?', 'Loại cảm xúc ra khỏi quyết định.'],
    ['Biểu đồ đường vẽ gì?', 'Nối giá đóng cửa theo thời gian.'],
    ['Biểu đồ thanh cho biết gì?', 'Cao nhất, thấp nhất, mở cửa (vạch trái), đóng cửa (vạch phải).'],
    ['Biểu đồ nến: thân và bấc?', 'Thân = khoảng mở–đóng; bấc = cao nhất/thấp nhất.'],
    ['Nến trắng và nến đen?', 'Trắng: đóng cao hơn mở; đen: đóng thấp hơn mở.'],
    ['Xu hướng là gì?', 'Hướng đi của giá trong một kỳ: tăng, giảm hoặc đi ngang.'],
    ['Cách vẽ đường xu hướng giảm/tăng?', 'Nối ít nhất hai đỉnh (giảm) / hai đáy (tăng).'],
    ['Hỗ trợ?', 'Mức giá mà người mua chặn đà giảm.'],
    ['Kháng cự?', 'Mức giá mà người bán chặn đà tăng.'],
    ['Thủng hỗ trợ nghĩa là?', 'Không đủ người mua giữ giá — dấu hiệu rất xấu, đặc biệt kèm khối lượng.'],
    ['Head and shoulders?', 'Mẫu đảo chiều giảm: vai trái, đầu, vai phải; thủng neckline là xác nhận.'],
    ['Double top / double bottom?', 'Hai đỉnh (M, giảm) / hai đáy (W, tăng).'],
    ['Gap là gì?', 'Khoảng trống giá do mất cân bằng cung cầu.'],
    ['Ba loại gap?', 'Breakaway, continuation, exhaustion.'],
    ['Livermore là ai?', 'Nhà giao dịch huyền thoại, tác giả (qua Lefevre) Reminiscences of a Stock Operator.']
  ],
  quiz: [
    { q: 'Biểu đồ thanh: vạch trái là:', o: ['Giá đóng cửa', 'Giá mở cửa', 'Giá cao nhất', 'Khối lượng'], a: 1, e: 'Vạch phải là đóng cửa.' },
    { q: 'Nến trắng nghĩa là:', o: ['Đóng thấp hơn mở', 'Đóng cao hơn mở', 'Không giao dịch', 'Khối lượng thấp'], a: 1, e: 'Thân rỗng.' },
    { q: 'Hỗ trợ là nơi:', o: ['Người bán thắng', 'Người mua thắng', 'Không ai', 'Giá chạm đỉnh'], a: 1, e: 'Cầu đủ mạnh chặn giảm.' },
    { q: 'Cisco thủng $50 đầu 2000 dẫn đến:', o: ['Phục hồi', 'Rơi xuống ~$10 năm 2002', 'Tăng gấp đôi', 'Chia tách'], a: 1, e: 'Nhà kỹ thuật bán.' },
    { q: 'Head and shoulders (thường) là:', o: ['Tăng', 'Giảm đảo chiều', 'Đi ngang', 'Gap'], a: 1, e: 'Thủng neckline xác nhận.' },
    { q: 'Double bottom giống chữ:', o: ['M', 'W', 'V', 'L'], a: 1, e: 'Bullish.' },
    { q: 'Exhaustion gap cho thấy:', o: ['Xu hướng mạnh', 'Có thể sắp thất bại và lấp gap', 'Breakout', 'Cổ tức'], a: 1, e: 'Thoát nhanh.' },
    { q: 'Xu hướng đi ngang thường làm nhà giao dịch:', o: ['Rất thích', 'Tránh', 'Vay thêm', 'Bán khống'], a: 1, e: 'Khó biết hướng.' },
    { q: '“Head fake” là:', o: ['Hồi giả đánh lừa nhà đầu tư', 'Mẫu tăng', 'Gap', 'Chỉ số'], a: 0, e: 'Như Nasdaq 2000–02.' },
    { q: 'Livermore bị cấm ở nhiều bucket shop vì:', o: ['Gian lận', 'Quá thành công', 'Không có vốn', 'Luật'], a: 1, e: 'Phải dùng tên giả.' }
  ],
  match: [
    ['Hỗ trợ', 'Người mua chặn đà giảm'],
    ['Kháng cự', 'Người bán chặn đà tăng'],
    ['Neckline', 'Đường cổ của head and shoulders'],
    ['Candlestick', 'Biểu đồ nến Nhật'],
    ['Breakaway gap', 'Gap mạnh đầu xu hướng'],
    ['Double top', 'Chữ M, giảm'],
    ['Trend', 'Hướng đi của giá']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 12,
  title: 'Phân tích kỹ thuật: công cụ và chiến thuật',
  intro: 'Khối lượng, trung bình động, OBV, RSI, Bollinger bands — những chỉ báo giúp nhà giao dịch xác nhận tín hiệu. Cùng một phần nhỏ về hàng hoá và hợp đồng tương lai.',
  sections: [
    { icon: '📦', title: 'Khối lượng (volume)', blocks: [
      { t: 'key', x: '<b>Khối lượng</b> là số cổ phiếu đổi chủ trong một kỳ — “nhiên liệu” đẩy giá lên xuống. Cho biết giá di chuyển do quan tâm mua/bán thật hay nhân tố khác. Ngày nay hàng tỷ cổ phiếu giao dịch mỗi ngày; dưới một tỷ là ngày nhẹ. 1929 chỉ 8% dân Mỹ đầu tư, nay > 60%. “Thị trường thanh khoản” = nhiều khối lượng — dễ vào và ra; Phố Wall muốn nhiều người mua vào.' }
    ] },
    { icon: '📏', title: 'Trung bình động và OBV', blocks: [
      { t: 'key', x: '<b>Moving average (MA)</b> = giá trung bình trong N kỳ, vẽ thành đường dịch chuyển theo ngày. Giá lên trên MA ⇒ tăng; xuống dưới ⇒ giảm/bán. Tổ chức hay dùng <b>MA 200 ngày</b> làm hỗ trợ/kháng cự; nhà giao dịch ngắn hạn dùng <b>MA 40–50 ngày</b>. Ví dụ Caterpillar: cuối tháng 10 vượt MA50 trên khối lượng tăng (rất tích cực), cuối tháng 11 vượt cả MA200 ⇒ giữ đến khi hết đà. Không quyết định chỉ dựa vào MA.' },
      { t: 'widget', name: 'sma-rsi', title: 'Thử tính MA và RSI với chuỗi giá của bạn' },
      { t: 'p', x: '<b>On-balance volume (OBV)</b>: đo tiền vào/ra một chứng khoán. OBV tăng ⇒ người mua; OBV giảm ⇒ người bán. Dùng xác nhận: giá tăng 3 điểm nhưng OBV giảm ⇒ tăng không bền (có thể tổ chức đang bán) ⇒ bán. Ngược lại giá giảm nhưng OBV tăng ⇒ có thể sắp đảo chiều lên.' }
    ] },
    { icon: '🔄', title: 'RSI và Bollinger bands', blocks: [
      { t: 'tabs', items: [
        ['Relative Strength Indicator (RSI)', '<p>Dao động (oscillator) 0–100 đo sức mạnh/yếu của cổ phiếu so với chính nó trong một kỳ (thường 14). <b>Trên 70: mua quá mức (overbought)</b>; <b>dưới 30: bán quá mức (oversold)</b>. Giá giảm mà RSI vượt 70 rồi cắt xuống, hay giá tăng mà RSI xuống dưới 30 rồi cắt lên ⇒ khả năng đảo chiều (phân kỳ — divergence). Caterpillar: RSI xuống 20 tháng 8 và tháng 10 rồi cắt lên, giá đảo chiều tăng một tháng.</p><p>Relative strength (so với cổ phiếu/chỉ số khác): Nasdaq giảm mà Bright Light tăng ⇒ mạnh tương đối (mua tốt); ngược lại yếu tương đối.</p>'],
        ['Bollinger bands', '<p>Hai dải trên và dưới quanh đường giá, khoảng cách co giãn theo biến động. <b>Dải thu hẹp</b> ⇒ sắp có biến động mạnh. <b>Giá vượt xa dải</b> ⇒ mua/bán mạnh; giá chạm dải này thường chuyển sang dải kia ⇒ đảo chiều trong vài phút/giờ. Chỉ báo đổi rất nhanh nên hữu ích chủ yếu cho nhà giao dịch ngắn hạn.</p>']
      ] },
      { t: 'warn', x: 'Kết luận: khó đọc đúng tín hiệu; nếu chỉ cần chỉ báo tinh vi là thành công thì ai cũng chỉ dùng kỹ thuật. Chỉ báo hữu ích nhất cho quyết định ngắn hạn, ít giúp cho đầu tư dài hạn. <b>Giữ đơn giản</b>: càng nhiều chỉ báo càng rối — “analysis paralysis” (liệt vì phân tích).' }
    ] },
    { icon: '🌽', title: 'Hàng hoá và hợp đồng tương lai (hộp tham khảo)', blocks: [
      { t: 'list', items: [
        'Sàn tương lai tạo thị trường cho thịt lợn, gia súc, ngô… Hợp đồng tương lai là thoả thuận mua/bán hàng hoá ở giá định trước trong thời hạn quy định.',
        'Chỉ cần đặt cọc ~10% để đầu cơ; có người kiếm $100.000 một ngày khi rủi ro $10.000 — nhưng <b>hơn 95% người giao dịch tương lai thua tiền</b>, và có thể lỗ hơn vốn.',
        'Chicago Mercantile Exchange: giao dịch bằng tiếng hét và ký hiệu tay. Tốt hơn để chuyên gia; có quỹ tương hỗ chuyên tương lai; hoặc học giao dịch <b>E-mini</b> (tương lai S&amp;P 500, Nasdaq 100) — không lỗ quá vốn.',
        'Xem tương lai chỉ số trước giờ mở cửa để đoán thị trường mở mạnh hay yếu (CNBC, Bloomberg hiển thị).'
      ] }
    ] }
  ],
  summary: [
    'Khối lượng là nhiên liệu của giá; thanh khoản cao giúp vào ra dễ.',
    'MA (50/200 ngày) làm hỗ trợ–kháng cự; OBV xác nhận dòng tiền.',
    'RSI > 70 mua quá mức, < 30 bán quá mức; Bollinger bands báo biến động và đảo chiều.',
    'Giữ đơn giản, kết hợp chỉ báo, tránh “analysis paralysis”.',
    'Tương lai/hàng hoá cực rủi ro: > 95% người giao dịch thua.'
  ],
  cards: [
    ['Khối lượng là gì?', 'Số cổ phiếu đổi chủ trong một kỳ.'],
    ['Thị trường thanh khoản?', 'Nhiều khối lượng, dễ vào ra.'],
    ['Moving average?', 'Giá trung bình trong N kỳ, vẽ thành đường.'],
    ['MA nào tổ chức dùng?', 'MA 200 ngày; ngắn hạn dùng MA 40–50 ngày.'],
    ['Tín hiệu giá trên MA?', 'Bullish; dưới MA là bearish/bán.'],
    ['OBV?', 'On-balance volume: đo dòng tiền vào/ra.'],
    ['Giá tăng nhưng OBV giảm?', 'Tăng không bền; có thể tổ chức đang bán.'],
    ['RSI?', 'Dao động 0–100 đo mức mua/bán quá mức.'],
    ['RSI > 70 nghĩa là?', 'Mua quá mức (overbought).'],
    ['RSI < 30 nghĩa là?', 'Bán quá mức (oversold).'],
    ['Divergence?', 'Giá và chỉ báo đi ngược nhau, báo hiệu đảo chiều.'],
    ['Bollinger bands?', 'Hai dải quanh giá, co giãn theo biến động.'],
    ['Dải Bollinger thu hẹp báo gì?', 'Sắp có biến động mạnh lên hoặc xuống.'],
    ['Analysis paralysis?', 'Dùng quá nhiều chỉ báo nên không dám giao dịch.'],
    ['Hợp đồng tương lai?', 'Thoả thuận mua/bán hàng hoá ở giá định trước trong thời hạn quy định.'],
    ['Tỷ lệ người thua trong tương lai?', 'Hơn 95%.']
  ],
  quiz: [
    { q: 'MA 200 ngày thường được ai dùng?', o: ['Day trader', 'Tổ chức', 'Chỉ cá nhân', 'Không ai'], a: 1, e: 'Làm hỗ trợ/kháng cự.' },
    { q: 'Giá dưới MA 200 ngày thường là tín hiệu:', o: ['Mua', 'Bán', 'Giữ', 'Chia tách'], a: 1, e: 'Bearish.' },
    { q: 'OBV tăng cho thấy:', o: ['Người bán chiếm ưu thế', 'Người mua', 'Khối lượng bằng 0', 'Giá cố định'], a: 1, e: 'Tiền đang vào.' },
    { q: 'RSI = 25 gợi ý:', o: ['Mua quá mức', 'Bán quá mức, có thể đảo chiều tăng', 'Trung tính', 'Phá sản'], a: 1, e: 'Dưới 30.' },
    { q: 'Bollinger bands thu hẹp:', o: ['Giá sẽ đứng yên', 'Sắp có biến động mạnh', 'Giảm chắc chắn', 'Tăng chắc chắn'], a: 1, e: 'Chưa biết hướng.' },
    { q: 'Điều tác giả khuyên về chỉ báo:', o: ['Dùng thật nhiều', 'Giữ đơn giản', 'Chỉ dùng một', 'Bỏ hoàn toàn'], a: 1, e: 'Analysis paralysis.' },
    { q: 'Phần trăm người thua trong giao dịch tương lai:', o: ['10%', '50%', 'Hơn 95%', '1%'], a: 2, e: 'Rất rủi ro.' },
    { q: 'E-mini là:', o: ['Quỹ tương hỗ', 'Hợp đồng tương lai nhỏ trên S&P 500 và Nasdaq 100', 'Cổ phiếu penny', 'Trái phiếu'], a: 1, e: 'Không lỗ quá vốn.' },
    { q: 'Giá giảm nhưng OBV tăng gợi ý:', o: ['Bán thêm', 'Có thể sắp đảo chiều tăng', 'Phá sản', 'Chia cổ tức'], a: 1, e: 'Có người đang tích luỹ.' },
    { q: 'Technical analysis hữu ích nhất cho:', o: ['Đầu tư dài hạn', 'Quyết định ngắn hạn', 'Chọn trái phiếu', 'Kế toán'], a: 1, e: 'Chỉ báo đổi nhanh.' }
  ],
  match: [
    ['MA', 'Giá trung bình N kỳ'],
    ['OBV', 'Dòng tiền theo khối lượng'],
    ['RSI', 'Mua/bán quá mức'],
    ['Bollinger bands', 'Dải co giãn quanh giá'],
    ['Analysis paralysis', 'Quá nhiều chỉ báo'],
    ['E-mini', 'Tương lai chỉ số nhỏ'],
    ['Thanh khoản', 'Dễ vào ra do nhiều khối lượng']
  ]
});
