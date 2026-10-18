// Investment Valuation – Chương 3.
BOOK_DATA.valuation.chapters.push({
  n: 3,
  title: 'Hiểu báo cáo tài chính',
  intro: 'Báo cáo tài chính là nguồn dữ liệu nền của định giá. Chương này so sánh cách kế toán đo tài sản, nguồn vốn, lợi nhuận và rủi ro với góc nhìn định giá, kèm các tỷ số ROC, ROE, thanh khoản và đòn bẩy.',
  sections: [
    { icon: '❓', title: 'Bốn câu hỏi và ba báo cáo', blocks: [
      { t: 'list', items: [
        '<b>Tài sản có giá trị bao nhiêu?</b> (dài hạn, ngắn hạn, vô hình)',
        '<b>Tài trợ bằng gì?</b> (vốn chủ sở hữu hay nợ)',
        '<b>Tài sản sinh lời thế nào?</b> (so với tỷ suất yêu cầu)',
        '<b>Rủi ro (bất định) trong tài sản?</b>'
      ] },
      { t: 'table', head: ['Báo cáo', 'Nội dung'], rows: [
        ['<b>Bảng cân đối</b>', 'Tài sản sở hữu, giá trị và cơ cấu tài trợ (nợ/vốn chủ) <i>tại một thời điểm</i>'],
        ['<b>Báo cáo thu nhập</b>', 'Doanh thu – chi phí – lợi nhuận trong một kỳ'],
        ['<b>Báo cáo lưu chuyển tiền tệ</b>', 'Nguồn và sử dụng tiền từ hoạt động kinh doanh, đầu tư, tài chính']
      ] },
      { t: 'key', x: 'Kế toán đo <b>hiện trạng và quá khứ gần</b>; định giá thì <b>hướng về tương lai</b> – nên hai bên trả lời khác nhau.' }
    ] },
    { icon: '🏭', title: 'Đo lường tài sản: ba nguyên tắc kế toán', blocks: [
      { t: 'steps', items: [
        '<b>Tin vào giá trị sổ sách</b> (chi phí lịch sử, điều chỉnh theo cải tiến và hao mòn) là ước tính tốt nhất.',
        '<b>Nghi ngờ giá trị thị trường/ước tính</b> – coi là biến động và dễ bị thao túng.',
        '<b>Ưu tiên ước tính thấp</b> hơn là cao (thận trọng): khi có cả giá sổ và giá thị trường, thường dùng số nhỏ hơn.'
      ] },
      { t: 'tabs', items: [
        ['Tài sản cố định', '<p>Ghi theo chi phí lịch sử trừ khấu hao. <b>Khấu hao đường thẳng</b> vs <b>nhanh</b>. Mỹ thường dùng đường thẳng cho báo cáo (lãi cao hơn lúc đầu) và nhanh cho thuế; Nhật, Đức dùng nhanh cho cả hai nên lợi nhuận báo cáo thấp hơn.</p>'],
        ['Tài sản lưu động', '<ul><li><b>Phải thu</b>: ghi theo số nợ; rủi ro nợ xấu → lập dự phòng.</li><li><b>Tiền</b>: gần như không sai lệch (nhưng đầu tư dài hạn có thể lệch giá thị trường).</li><li><b>Tồn kho</b>: <b>FIFO</b> (giá vốn thấp nhất, lãi cao nhất khi lạm phát), <b>LIFO</b> (giá vốn cao nhất, lãi thấp nhất, tiết kiệm thuế), <b>bình quân gia quyền</b>. Công ty LIFO công bố “<b>LIFO reserve</b>” để quy đổi sang FIFO.</li></ul>'],
        ['Đầu tư tài chính', '<ul><li><b>&lt; 20% (thiểu số, thụ động)</b>: giữ đến đáo hạn → giá gốc; sẵn sàng bán → thị giá, lãi/lỗ chưa thực hiện vào vốn chủ; giao dịch → thị giá, lãi/lỗ vào thu nhập (marking-to-market).</li><li><b>20–50% (thiểu số, chủ động)</b>: <b>phương pháp vốn chủ sở hữu</b> – điều chỉnh theo phần lãi/lỗ và cổ tức.</li><li><b>&gt; 50% (đa số)</b>: <b>hợp nhất báo cáo</b>, phần còn lại là lợi ích cổ đông thiểu số. (Có công ty giữ dưới 50% để tránh hợp nhất.)</li></ul>'],
        ['Tài sản vô hình', '<p><b>Bằng sáng chế, nhãn hiệu</b>: tự tạo (R&D) thì ghi chi phí ngay → không có trên bảng cân đối; mua ngoài thì ghi tài sản và khấu hao (tối đa 40 năm).</p><p><b>Lợi thế thương mại (goodwill)</b>: phần giá mua vượt tài sản xác định được. <i>Purchase accounting</i> ghi goodwill và khấu hao; <i>pooling</i> cộng sổ sách, giá mua không hiện ra.</p>']
      ] },
      { t: 'tip', x: 'Ví dụ Boeing vs Home Depot (1998): Boeing có goodwill 2.312 (mua Rockwell; McDonnell Douglas dùng pooling nên không ghi), tồn kho bình quân gia quyền, chứng khoán ngắn hạn theo thị giá, “chi phí hưu trí trả trước”; Home Depot dùng FIFO. Điểm mù lớn: hiệu quả của R&D quá khứ <b>không có</b> trên bảng cân đối (Chương 9 sẽ vốn hoá R&D).' }
    ] },
    { icon: '🏦', title: 'Đo lường cơ cấu tài trợ', blocks: [
      { t: 'p', x: 'Nghĩa vụ chỉ ghi là <b>nợ phải trả</b> khi: (1) dẫn tới dòng tiền ra tại thời điểm xác định, (2) công ty không thể tránh, (3) giao dịch đã xảy ra. Nợ và vốn chủ đều ghi theo <b>chi phí lịch sử</b>, không theo thị giá.' },
      { t: 'tabs', items: [
        ['Nợ ngắn hạn', '<p>Phải trả người bán, vay ngắn hạn, phần nợ dài hạn đến hạn, các khoản khác. Giá sổ ≈ giá thị trường (khớp nhất).</p>'],
        ['Nợ dài hạn', '<p>Khoản vay ngân hàng hoặc trái phiếu. Ghi theo giá phát hành, phát hành chiết khấu/phụ trội thì phân bổ. <b>Giá sổ không đổi khi lãi suất thị trường đổi</b> (thị giá nợ thay đổi nhưng không hiện ra). Nợ ngoại tệ điều chỉnh theo tỷ giá.</p>'],
        ['Thuê tài sản', '<p><b>Thuê hoạt động</b>: chi phí vận hành, không lên bảng cân đối. <b>Thuê vốn (capital lease)</b>: ghi cả tài sản và nợ. Phải là thuê vốn nếu: (a) thời hạn &gt; 75% đời tài sản, (b) chuyển quyền sở hữu, (c) quyền mua giá ưu đãi, (d) hiện giá tiền thuê &gt; 90% giá trị hợp lý. Công ty muốn giữ ngoài sổ nên thích “hoạt động”. <b>Quan điểm định giá: thuê hoạt động nên được vốn hoá và coi là nợ</b>.</p>'],
        ['Hưu trí & y tế', '<p><b>Đóng góp xác định</b> vs <b>phúc lợi xác định</b> (công ty chịu rủi ro). Quỹ thừa (over-funded) hay thiếu (under-funded; chỉ ghi phần thiếu của nghĩa vụ tích luỹ). Phúc lợi y tế tương tự nhưng chỉ cần chú thích.</p>'],
        ['Thuế hoãn lại & ưu đãi', '<p>Thuế hoãn lại phát sinh khi khấu hao thuế nhanh hơn kế toán; liệu có thực sự là nợ là câu hỏi mở. <b>Cổ phiếu ưu đãi</b> là chứng khoán lai (cổ tức cố định, cộng dồn) – gần nợ không đảm bảo hơn là vốn chủ.</p>'],
        ['Vốn chủ sở hữu', '<p>Vốn góp + lợi nhuận giữ lại − cổ tức. <b>Cổ phiếu quỹ</b> (mua lại) giảm giá trị sổ sách, thậm chí âm; lãi/lỗ chưa thực hiện của chứng khoán sẵn sàng bán vào vốn chủ. Quyền chọn cấp cho quản lý không tác động đến vốn chủ khi cấp. Lưu ý EPS <b>cơ bản</b> vs <b>pha loãng hoàn toàn</b>.</p>']
      ] },
      { t: 'p', x: 'Ví dụ 1998 – giá trị sổ sách vốn chủ sở hữu vs thị giá: Boeing <b>12.316 vs 32.595</b>; Home Depot <b>8.740 vs 85.668</b> (khoảng cách lớn: thương hiệu, tăng trưởng không hiện trên sổ).' }
    ] },
    { icon: '📈', title: 'Đo lường lợi nhuận và khả năng sinh lời', blocks: [
      { t: 'p', x: 'Hai nguyên tắc: <b>kế toán dồn tích</b> (ghi nhận doanh thu khi bán/thực hiện, chi phí khớp với doanh thu) và <b>phân loại chi phí</b>: <b>vận hành</b> (lợi ích trong kỳ), <b>tài chính</b> (lãi vay), <b>vốn</b> (lợi ích nhiều kỳ → khấu hao/phân bổ). Báo cáo chia: hoạt động liên tục · ngừng hoạt động · khoản bất thường · thay đổi nguyên tắc kế toán. Hợp đồng dài hạn: <b>tỷ lệ hoàn thành</b>; chắc chắn thu tiền thấp: <b>trả góp</b>.' },
      { t: 'warn', x: 'Hai khoản bị <b>phân loại sai</b>: <b>R&D</b> (tính là chi phí vận hành dù mang lợi ích nhiều kỳ → phải là chi phí vốn) và <b>thuê hoạt động</b> (thực chất là chi phí tài chính). Dùng lợi nhuận trước bất thường để dự báo.' },
      { t: 'h3', x: 'Các thước đo' },
      { t: 'table', head: ['Thước đo', 'Công thức'], rows: [
        ['<b>ROA</b>', 'EBIT(1−t) ÷ tổng tài sản (hoặc (LN ròng + lãi vay(1−t)) ÷ TS)'],
        ['<b>ROC</b> (sau thuế)', 'EBIT(1−t) ÷ (BV nợ + BV vốn chủ) = <b>biên hoạt động sau thuế × vòng quay vốn</b>'],
        ['<b>ROE</b>', 'Lợi nhuận ròng ÷ BV vốn chủ (loại cổ tức ưu đãi)'],
        ['<b>ROE theo đòn bẩy</b>', 'ROE = ROC + D/E × [ROC − i(1−t)] (vay nợ tăng ROE nếu ROC &gt; lãi vay sau thuế)']
      ] },
      { t: 'widget', name: 'roc-roe', title: 'ROC, ROE và hiệu ứng đòn bẩy' },
      { t: 'tip', x: '1998: ROC của Boeing 5,7% vs Home Depot 18,4%; ROE 8,9% vs 20,2%. Boeing có năm tồi (lợi nhuận hoạt động thấp do khoản ghi giảm & R&D); Home Depot dùng thuê hoạt động nên chi phí thuê nằm trong chi phí hoạt động.' }
    ] },
    { icon: '⚠️', title: 'Đo lường rủi ro theo kế toán', blocks: [
      { t: 'p', x: 'Kế toán chỉ tập trung <b>rủi ro vỡ nợ</b> (không trả được nghĩa vụ cố định) và cái nhìn <b>tĩnh</b> (một kỳ). Công ty chỉ dùng vốn chủ sở hữu với thu nhập dương có thể trông “an toàn” dù thu nhập không dự đoán được. Công cụ: <b>công bố và chú thích</b> (nợ tiềm tàng, phái sinh, hưu trí, y tế) và các <b>tỷ số</b>.' },
      { t: 'tabs', items: [
        ['Thanh khoản ngắn hạn', '<ul><li><b>Tỷ số thanh toán hiện thời</b> = TS lưu động ÷ nợ ngắn hạn (truyền thống ≥ 2; quá cao có thể là dấu hiệu tồn kho ứ đọng).</li><li><b>Tỷ số nhanh</b> = (tiền + chứng khoán) ÷ nợ ngắn hạn.</li><li><b>Vòng quay/ngày</b>: phải thu = DT ÷ phải thu BQ; tồn kho = giá vốn ÷ tồn kho BQ; phải trả = mua hàng ÷ phải trả BQ. 365 ÷ vòng quay = số ngày.</li><li><b>Thời gian cần tài trợ</b> = ngày phải thu + ngày tồn kho − ngày phải trả.</li></ul>'],
        ['Khả năng thanh toán dài hạn', '<ul><li><b>Hệ số thanh toán lãi vay</b> = EBIT ÷ lãi vay; mở rộng thành <b>chi phí cố định</b> (cộng tiền thuê) và dòng tiền (EBITDA ÷ chi phí cố định bằng tiền).</li><li><b>Dòng tiền hoạt động ÷ chi tiêu vốn</b>, với dòng tiền HĐ = EBIT(1−t) − ΔVLĐ.</li><li><b>Nợ/vốn (D/(D+E))</b> và <b>nợ/vốn chủ (D/E)</b>: D/E = [D/(D+E)] ÷ [1 − D/(D+E)]; biến thể nợ dài hạn, và <b>theo giá trị thị trường</b>.</li></ul>']
      ] },
      { t: 'p', x: 'Ví dụ 1998: hệ số thanh toán lãi vay Boeing <b>3,80</b> vs Home Depot <b>71,9</b>; nợ/vốn chủ sổ sách 56,6% vs 18,1%; nhưng xét dòng tiền, Boeing lại tốt hơn khi tính chi tiêu vốn (CFO/CapEx 1,36 vs 0,81).' }
    ] },
    { icon: '🌍', title: 'Khác biệt chuẩn mực kế toán giữa các nước', blocks: [
      { t: 'p', x: 'Khác biệt không lớn như người ta nói, và không giải thích được các sai lệch cơ bản (ví dụ P/E 60 của Nhật thời đỉnh vẫn > 50 sau khi điều chỉnh). Hai nước tương phản nhất với Mỹ là <b>Đức và Nhật</b>:' },
      { t: 'list', items: [
        'Không giữ hai bộ sổ (thuế và tài chính) → khấu hao nhanh cho cả báo cáo → lợi nhuận thấp hơn.',
        'Thuê tài sản ít bị buộc vốn hoá (Nhật xem phần lớn là thuê hoạt động).',
        'Goodwill khấu hao nhanh hơn (so với 40 năm ở Mỹ).',
        'Cho phép <b>dự phòng chung</b> để san phẳng lợi nhuận (thấp lúc tốt, cao lúc xấu).'
      ] },
      { t: 'warn', x: 'Các tỷ số như P/E dựa trên lợi nhuận <b>chưa điều chỉnh</b> dễ gây hiểu sai khi so sánh giữa các thị trường.' }
    ] }
  ],
  summary: [
    'Kế toán ưu tiên giá trị sổ sách, nghi ngờ thị giá và thận trọng (ước tính thấp); định giá cần giá trị hiện tại và tương lai.',
    'Tài sản vô hình tự tạo (R&D, thương hiệu) không có trên bảng cân đối; thuê hoạt động không phải nợ trên sổ — cả hai cần điều chỉnh.',
    'Nợ và vốn chủ ghi theo chi phí lịch sử; giá trị sổ sách vốn chủ có thể chênh rất lớn so với thị giá.',
    'Lợi nhuận: dồn tích + phân loại chi phí; R&D và thuê hoạt động bị phân loại sai.',
    'ROC = biên × vòng quay; ROE = ROC + D/E[ROC − i(1−t)].',
    'Rủi ro kế toán chỉ đo khả năng vỡ nợ, tĩnh; tỷ số thanh khoản, thanh toán lãi, nợ/vốn.'
  ],
  cards: [
    ['Ba báo cáo tài chính cơ bản?', 'Bảng cân đối, báo cáo thu nhập, báo cáo lưu chuyển tiền tệ.'],
    ['Ba nguyên tắc kế toán đo giá trị tài sản?', 'Tin giá trị sổ sách; nghi ngờ giá thị trường/ước tính; ưu tiên ước tính thấp.'],
    ['Khấu hao đường thẳng vs nhanh khác gì?', 'Đường thẳng đều mỗi năm (lãi cao hơn những năm đầu); nhanh khấu hao nhiều lúc đầu.'],
    ['FIFO vs LIFO khi lạm phát?', 'FIFO: giá vốn thấp, lãi cao. LIFO: giá vốn cao, lãi thấp, tiết kiệm thuế.'],
    ['LIFO reserve dùng để làm gì?', 'Quy đổi tồn kho/giá vốn/lợi nhuận sang FIFO để so sánh.'],
    ['Quy tắc kế toán đầu tư tài chính theo tỷ lệ sở hữu?', '<20% thụ động; 20–50% phương pháp vốn chủ sở hữu; >50% hợp nhất báo cáo.'],
    ['Goodwill là gì?', 'Phần giá mua vượt giá trị tài sản xác định được khi mua lại doanh nghiệp.'],
    ['Vì sao R&D tự tạo không hiện trên bảng cân đối?', 'Bị ghi chi phí ngay trong kỳ, dù mang lợi ích nhiều kỳ.'],
    ['Điều kiện để thuê là thuê vốn?', 'Thời hạn >75% đời tài sản; chuyển quyền sở hữu; quyền mua giá ưu đãi; hiện giá >90% giá trị hợp lý.'],
    ['Quan điểm định giá về thuê hoạt động?', 'Nên vốn hoá và coi là nợ (chi phí tài chính).'],
    ['Giá sổ sách của nợ dài hạn có đổi theo lãi suất thị trường không?', 'Không; chỉ thị giá mới đổi nhưng không hiện trên sổ.'],
    ['Cổ phiếu ưu đãi trong kế toán là gì?', 'Chứng khoán lai, gần nợ không đảm bảo hơn là vốn chủ thuần.'],
    ['ROC phân rã thế nào?', 'Biên hoạt động sau thuế × vòng quay vốn (DT ÷ vốn).'],
    ['Khi nào vay nợ làm tăng ROE?', 'Khi ROC lớn hơn lãi vay sau thuế i(1−t).'],
    ['Công thức ROE theo đòn bẩy?', 'ROE = ROC + D/E × [ROC − i(1−t)].'],
    ['Kế toán đo rủi ro nào?', 'Chủ yếu rủi ro vỡ nợ và thanh khoản, cái nhìn tĩnh; ít đo rủi ro biến động thu nhập của vốn chủ.'],
    ['Thời gian cần tài trợ vốn lưu động?', 'Ngày phải thu + ngày tồn kho − ngày phải trả.'],
    ['Khác biệt chính Đức/Nhật so với Mỹ?', 'Không tách sổ thuế; khấu hao nhanh cả báo cáo; thuê ít buộc vốn hoá; goodwill khấu hao nhanh; dự phòng chung san phẳng lợi nhuận.']
  ],
  quiz: [
    { q: 'Nguyên tắc nào KHÔNG thuộc ba nguyên tắc đo tài sản của kế toán?', o: ['Tin vào giá trị sổ sách', 'Nghi ngờ giá thị trường', 'Ưu tiên ước tính thấp', 'Luôn dùng giá thị trường'], a: 3, e: 'Kế toán nghi ngờ thị giá.' },
    { q: 'Khi lạm phát, phương pháp tồn kho cho lợi nhuận cao nhất là:', o: ['LIFO', 'FIFO', 'Bình quân gia quyền', 'Như nhau'], a: 1, e: 'Giá vốn dựa trên hàng mua sớm (rẻ) nên thấp nhất.' },
    { q: 'Đầu tư 30% cổ phần công ty khác được ghi theo:', o: ['Giá thị trường', 'Phương pháp vốn chủ sở hữu', 'Hợp nhất báo cáo', 'Giá gốc cố định'], a: 1, e: '20–50% là thiểu số chủ động.' },
    { q: 'Đầu tư >50% cổ phần dẫn đến:', o: ['Phương pháp vốn chủ sở hữu', 'Hợp nhất báo cáo tài chính', 'Chỉ ghi cổ tức', 'Thanh lý'], a: 1, e: 'Phần còn lại là lợi ích cổ đông thiểu số.' },
    { q: 'Nghiên cứu (R&D) tự tạo ra bằng sáng chế được kế toán ghi:', o: ['Tài sản vô hình', 'Chi phí trong kỳ', 'Nợ', 'Vốn chủ'], a: 1, e: 'Vì vậy bảng cân đối không phản ánh giá trị R&D.' },
    { q: 'Thuê hoạt động theo quan điểm định giá nên được:', o: ['Bỏ qua', 'Vốn hoá và coi như nợ', 'Coi là vốn chủ', 'Coi là doanh thu'], a: 1, e: 'Nghĩa vụ trả tiền giống lãi vay.' },
    { q: 'Điều kiện nào buộc thuê phải được ghi là thuê vốn?', o: ['Hợp đồng dưới 1 năm', 'Hiện giá tiền thuê >90% giá trị hợp lý của tài sản', 'Bên thuê là công ty nhỏ', 'Thuê văn phòng'], a: 1, e: 'Một trong bốn điều kiện FASB.' },
    { q: 'Giá sổ sách của nợ dài hạn khi lãi suất thị trường tăng:', o: ['Giảm', 'Tăng', 'Không đổi', 'Về 0'], a: 2, e: 'Giá trị sổ sách bỏ qua biến động lãi suất.' },
    { q: 'ROC sau thuế bằng:', o: ['Biên hoạt động sau thuế × vòng quay vốn', 'LN ròng ÷ vốn chủ', 'EBIT ÷ lãi vay', 'ROE × D/E'], a: 0, e: 'EBIT(1−t)/Sales × Sales/Capital.' },
    { q: 'Vay nợ làm tăng ROE khi:', o: ['ROC < lãi vay sau thuế', 'ROC > lãi vay sau thuế', 'Luôn luôn', 'Không bao giờ'], a: 1, e: 'ROE = ROC + D/E[ROC − i(1−t)].' },
    { q: 'EBIT 1.000, lãi vay 250. Hệ số thanh toán lãi vay là:', o: ['0,25', '2,5', '4', '1.250'], a: 2, e: '1.000 ÷ 250 = 4.' },
    { q: 'Tỷ số thanh toán hiện thời quá cao có thể cho thấy:', o: ['Công ty rất an toàn tuyệt đối', 'Có thể tồn kho ứ đọng/vốn lưu động bị giữ không hiệu quả', 'Công ty phá sản', 'Lãi suất thấp'], a: 1, e: 'Cân bằng giữa thanh khoản và vốn nằm không.' },
    { q: 'Rủi ro mà kế toán tập trung đo là:', o: ['Rủi ro biến động giá cổ phiếu', 'Rủi ro không trả được nghĩa vụ cố định', 'Rủi ro lạm phát', 'Rủi ro tỷ giá'], a: 1, e: 'Kế toán cũng thường nhìn tĩnh, một kỳ.' },
    { q: 'Khác biệt Đức/Nhật so với Mỹ gồm:', o: ['Khấu hao nhanh cho cả thuế và báo cáo', 'Không có dự phòng', 'Luôn vốn hoá thuê', 'Goodwill khấu hao chậm hơn'], a: 0, e: 'Dẫn đến lợi nhuận báo cáo thấp hơn.' },
    { q: 'Vì sao P/E cần thận trọng khi so sánh quốc tế?', o: ['Do tỷ giá', 'Lợi nhuận kế toán không điều chỉnh có thể khác chuẩn mực', 'Do thuế', 'Do tên mã'], a: 1, e: 'Chuẩn mực khác nhau làm lợi nhuận khác nhau.' }
  ],
  match: [
    ['FIFO', 'Giá vốn thấp nhất khi lạm phát'],
    ['LIFO reserve', 'Chênh lệch tồn kho LIFO – FIFO'],
    ['Phương pháp vốn chủ sở hữu', 'Đầu tư 20–50%'],
    ['Hợp nhất', 'Sở hữu >50%'],
    ['Goodwill', 'Giá mua vượt tài sản xác định'],
    ['Thuê vốn', 'Ghi cả tài sản và nợ'],
    ['ROC', 'Biên × vòng quay vốn'],
    ['ROE', 'Lợi nhuận ròng ÷ vốn chủ sổ sách'],
    ['Interest coverage', 'EBIT ÷ lãi vay'],
    ['Current ratio', 'TS lưu động ÷ nợ ngắn hạn']
  ]
});
