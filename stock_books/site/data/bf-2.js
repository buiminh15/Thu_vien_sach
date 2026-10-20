// Pick Stocks Like Warren Buffett – Chương 2 (sách ch.4–6): Graham, Fisher, giá trị vs tăng trưởng.
BOOK_DATA.buffett.chapters.push({
  n: 2,
  title: 'Hai người thầy: Graham, Fisher và giá trị vs tăng trưởng',
  intro: 'Buffett “85% Graham, 15% Fisher” (tác giả cho rằng gần 50–50). Graham dạy biên an toàn và ông Thị Trường; Fisher dạy mua công ty “bonanza” với 15 câu hỏi, rồi giữ mãi. Chương này cũng phân biệt cổ phiếu giá trị và tăng trưởng, cùng GARP.',
  sections: [
    { icon: '📉', title: 'Benjamin Graham: bài học từ cơn sụp 1929–32', blocks: [
      { t: 'table', head: ['Cổ phiếu', '3/9/1929', '8/7/1932'], rows: [
        ['U.S. Steel', '$262', '$22'], ['General Motors', '$73', '$8'], ['Montgomery Ward', '$138', '$4'], ['AT&T', '$304', '$72'], ['United Founders (quỹ đóng)', '$70', '$0,50']
      ] },
      { t: 'p', x: 'Thị trường giảm ~80% từ 1929–1932 (so với −45% trong 1973–74). Graham, từng “mua khi giảm”, bị xoá sổ; quỹ của ông mất 70% và nhờ Jerome Newman góp $75.000 mới sống. Từ đó ông luôn tìm “<b>biên an toàn</b>” — Buffett gọi là “ba từ quan trọng nhất của đầu tư”. Quy tắc 1: không để mất tiền; quy tắc 2: đừng quên quy tắc 1.' },
      { t: 'key', x: '<b>Ba nguyên tắc Graham (theo Buffett)</b>: (1) xem cổ phiếu là một phần doanh nghiệp thật, không phải chip cờ bạc; (2) mua rẻ, có biên an toàn; (3) hành xử như một nhà đầu tư thực thụ — đã hơn 99% người chơi.' },
      { t: 'p', x: 'Sách <i>Security Analysis</i> (1934, Graham &amp; Dodd) khuyên mua khi giá &lt; 2/3 giá trị tài sản ròng và P/E thấp. <i>The Intelligent Investor</i> dễ đọc hơn.' }
    ] },
    { icon: '🎭', title: 'Ông Thị Trường và điếu xì gà', blocks: [
      { t: 'p', x: '<b>Mr. Market</b>: người bạn kinh doanh hiền nhưng bất ổn tâm lý, mỗi ngày đưa ra giá mua/bán. Bạn có thể bỏ qua; bán khi ông quá hưng phấn trả giá cao; mua khi ông quá chán nản bán rẻ. Khi ông có nhiều cổ phiếu rẻ để bán là lúc nên tích trữ; khi ông có ít, nên bán. “Ngắn hạn thị trường là máy bỏ phiếu, dài hạn là cái cân.”' },
      { t: 'list', items: [
        '<b>Cigar butt</b> (tàn xì gà): cổ phiếu bị bỏ rơi còn vài hơi hút — mua cực rẻ, hưởng một chút rồi bỏ.',
        'Khác biệt: nhà đầu tư mua và giữ chứng khoán “phù hợp ở giá phù hợp”, nhà đầu cơ cố đoán dao động. Đầu tư thật dựa trên phân tích kỹ, an toàn vốn gốc và lợi nhuận thỏa đáng.',
        'Graham khuyên đa dạng hoá (10–30 cổ phiếu cho nhà đầu tư phòng thủ; Buffett ít hơn). “Đừng mua sau khi tăng mạnh, đừng bán sau khi giảm mạnh.” Nguy cơ lớn nhất là mua chứng khoán kém chất lượng khi thị trường tốt.',
        'Ông quá sợ rủi ro: bỏ lỡ Haloid (thành Xerox) vì “chưa đủ rẻ”; David Dreman cho rằng cách tiếp cận này giữ nhà đầu tư ngoài thị trường tăng 1947 và 1982.'
      ] },
      { t: 'table', head: ['10 dấu hiệu cổ phiếu rẻ của Graham (cần ≥7)'], rows: [
        ['1. Lợi suất thu nhập (E/P) ≥ 2 × lợi suất trái phiếu AAA'],
        ['2. P/E ≤ 2/5 P/E trung bình 5 năm'],
        ['3. Cổ tức ≥ 2/3 lợi suất trái phiếu AAA'],
        ['4. Giá ≤ 2/3 giá trị sổ sách hữu hình/cổ phiếu'],
        ['5. Giá ≤ 2/3 tài sản lưu động ròng'],
        ['6. Tổng nợ < giá trị sổ sách hữu hình'],
        ['7. Hệ số thanh toán hiện hành ≥ 2'],
        ['8. Tổng nợ ≤ giá trị thanh lý nhanh ròng'],
        ['9. Lợi nhuận đã tăng gấp đôi trong 10 năm'],
        ['10. Lợi nhuận không giảm quá 5% trong hơn 2 năm của 10 năm']
      ] },
      { t: 'tip', x: 'Tuỳ mục tiêu: cần thu nhập ⇒ chú trọng 1–7 (nhất là cổ tức); an toàn + tăng trưởng ⇒ 1–5, 9, 10; tăng trưởng ⇒ chú trọng 9–10, bỏ qua cổ tức.' },
      { t: 'p', x: 'Ví dụ GEICO: 1948 Graham–Newman bỏ $720.000 (25% tài sản) mua nửa GEICO; thành $500 triệu; đến 1977 GEICO mất 95% giá trị — sau này là mấu chốt trong sự nghiệp Buffett. Graham mất 1976; Buffett đặt tên con trai Howard Graham, gọi ông là “người trồng cây cho người khác ngồi dưới bóng”.' }
    ] },
    { icon: '🔍', title: 'Philip Fisher: công ty “bonanza” và 15 câu hỏi', blocks: [
      { t: 'p', x: 'Graham thiên về <b>định lượng</b>, mua rẻ rồi bán khi đủ giá. Fisher thiên về <b>định tính</b>: mua công ty xuất sắc (“bonanza”) rồi giữ — “thời điểm bán là… hầu như không bao giờ”. Sách <i>Common Stocks and Uncommon Profits</i> (1958). Buffett nói mình 85% Graham, 15% Fisher; tác giả cho là gần 50–50.' },
      { t: 'key', x: '<b>Scuttlebutt</b>: hỏi đối thủ, nhà cung cấp, khách hàng, cựu nhân viên, hiệp hội ngành. Đến 5 công ty trong ngành, hỏi về điểm mạnh yếu của 4 công ty kia, 9/10 lần sẽ ra bức tranh chính xác. Thông tin trái chiều ⇒ không phải công ty xuất sắc thật.' },
      { t: 'table', head: ['Nhóm', 'Câu hỏi (rút gọn)'], rows: [
        ['Sản phẩm/thị trường', '1 Doanh thu có tăng lớn nhiều năm? · 2 Quản lý có quyết tâm tìm sản phẩm mới? · 3 R&D tốt so với quy mô? · 4 Tổ chức bán hàng tốt?'],
        ['Lợi nhuận', '5 Biên lợi nhuận ấn tượng? · 6 Có hành động duy trì/nâng biên?'],
        ['Nhân sự', '7 Quan hệ lao động tốt? · 8 Môi trường lãnh đạo tốt? · 9 Quản lý có chiều sâu, đón ý kiến từ dưới lên?'],
        ['Quản trị', '10 Phân tích chi phí/kế toán tốt? · 11 Có dấu hiệu tinh tế khác (hợp đồng thuê, xếp hạng tín dụng)?'],
        ['Chiến lược', '12 Có kế hoạch lợi nhuận ngắn và dài hạn? · 13 Tăng trưởng có buộc phát hành thêm cổ phiếu pha loãng?'],
        ['Trung thực', '14 Quản lý có thừa nhận sai lầm, không giấu tin xấu? · 15 Có liêm chính, không tư lợi (thưởng quyền chọn, thuê người nhà…)?']
      ] },
      { t: 'list', items: [
        '<b>Mua gì, khi nào</b>: phần lớn (60–100%) vào cổ phiếu tăng trưởng lớn; đừng chờ; bỏ qua dự báo kinh tế; mua khi quản lý nhầm hoặc đình công ngắn khiến giá rơi; mua dần (DCA) vài năm.',
        '<b>Chỉ bán</b> khi: (1) mua nhầm — đừng chờ “hoà vốn”; (2) công ty đã đổi (quản lý tự mãn, hết tăng trưởng); (3) có cơ hội tốt hơn rõ ràng (hiếm). Không bán chỉ vì thuế lãi vốn hay vì “quá đắt”.',
        '<b>Không nên</b>: mua IPO, bỏ qua cổ phiếu ngoài NYSE, mua vì báo cáo thường niên đẹp, nghĩ P/E cao không thể cao hơn, “nickel and dime” (tranh $25,40 thay vì $25,50), chú ý quá mức quá khứ, chạy theo đám đông, đa dạng hoá thừa.',
        '<b>Nhà đầu tư nhỏ</b>: ~5 blue-chip (20% mỗi cái, không trùng lĩnh vực, không rebalance nếu vẫn tin); hoặc 10 công ty vừa 10% mỗi cái; công ty đầu cơ ≤ 5% danh mục.'
      ] },
      { t: 'p', x: 'Cách tìm cổ phiếu: (1) tên từ nhà đầu tư chuyên nghiệp uy tín (80% ý tưởng tốt) và giám đốc/nhà khoa học; (2) nghiên cứu tài chính và scuttlebutt; (3) chỉ gặp ban quản lý khi đã có ≥50% hiểu biết. Tỷ lệ: ông đến thăm khoảng 2–2,5 công ty cho mỗi cổ phiếu mua.' }
    ] },
    { icon: '⚔️', title: 'Giá trị vs tăng trưởng', blocks: [
      { t: 'table', head: ['', 'Cổ phiếu giá trị', 'Cổ phiếu tăng trưởng'], rows: [
        ['P/E, P/B', 'Thấp (rẻ hoặc có vẻ rẻ)', 'Cao'],
        ['Tâm lý', 'Bị ghét bỏ, lao đao', 'Được yêu thích, vừa lập đỉnh'],
        ['Quỹ điển hình', 'Nợ cao hơn, quay vòng thấp (71%), cổ tức cao, beta 0,8', 'Nợ thấp hơn, quay vòng 120%, ít cổ tức, beta 1,14'],
        ['Sai lầm thường gặp', 'Mua quá sớm (“tầng hầm dưới tầng hầm”); bán quá sớm (Whitman: “bỏ lại nhiều tiền”)', 'Mua quá muộn; bán quá muộn (lỡ vài xu so với dự báo là bị đốt)']
      ] },
      { t: 'list', items: [
        'Cổ phiếu giá trị không phải cổ phiếu đắt giảm nhẹ: giá $120, lãi $3 (P/E 40) phải giảm tới 50% mới P/E 20. Tăng trưởng phải “rơi xuống thang máy” mới thành giá trị.',
        'Ẩn dụ bóng chày: tăng trưởng là cầu thủ đánh .300 đắt giá; giá trị là cầu thủ từng .300, nay .212 vì chấn thương ⇒ nếu hồi phục thì lãi “ten-bagger” (Peter Lynch).',
        '<b>GARP</b> (tăng trưởng với giá hợp lý): như mua bất động sản Park Avenue rẻ — Chris Browne: giá trị và tăng trưởng “gắn liền ở hông” (Buffett). Khi vốn lớn quá, Buffett chuyển từ giá trị cực đoan sang GARP; không bao giờ mua tăng trưởng cực đoan.',
        'Quỹ tăng trưởng hợp Buffett (hiếm vì quay vòng thấp): White Oak Growth (23 cổ phiếu, quay vòng 6–8%; 2001 sụt mạnh), SteinRoe Young Investor. Có thể dùng để đa dạng hoá nếu đã có quỹ kiểu Buffett.'
      ] },
      { t: 'tip', x: 'So sánh Vanguard Value Index với Vanguard Growth Index để biết phong cách nào đang dẫn. Lý thuyết: lạc quan thì mua tăng trưởng, lo lắng thì mua giá trị — hoặc không ai biết khi nào đổi chiều.' }
    ] }
  ],
  summary: [
    'Graham: biên an toàn, Mr. Market, không đầu cơ; Fisher: 15 câu hỏi, scuttlebutt, giữ mãi.',
    'Graham định lượng; Fisher định tính; Buffett kết hợp cả hai.',
    'Giá trị và tăng trưởng có chung gốc: mua doanh nghiệp tốt dưới giá trị — GARP là cầu nối.',
    'Sai lầm điển hình: giá trị mua/bán sớm; tăng trưởng mua/bán muộn.',
    'Chỉ bán khi mua nhầm, công ty đã thay đổi hoặc có cơ hội tốt hơn rõ ràng.'
  ],
  cards: [
    ['Biên an toàn là gì?', 'Mua với giá thấp hơn giá trị để có đệm phòng sai sót — “ba từ quan trọng nhất của đầu tư”.'],
    ['Hai quy tắc của Graham?', 'Đừng để mất tiền; đừng quên quy tắc 1.'],
    ['Mr. Market?', 'Đối tác hiền nhưng thất thường, hằng ngày chào mua/bán — dùng khi có lợi, bỏ qua khi không.'],
    ['“Cigar butt”?', 'Cổ phiếu bị bỏ rơi còn vài hơi hút, mua cực rẻ.'],
    ['Thị trường ngắn hạn vs dài hạn?', 'Ngắn hạn là máy bỏ phiếu; dài hạn là cái cân.'],
    ['Bao nhiêu trong 10 dấu hiệu rẻ của Graham là đủ?', '≥ 7.'],
    ['Fisher vs Graham?', 'Fisher định tính, mua xuất sắc và giữ; Graham định lượng, mua rẻ.'],
    ['Scuttlebutt?', 'Thu thập thông tin qua hỏi đối thủ, khách hàng, nhà cung cấp, cựu nhân viên.'],
    ['Khi nào Fisher bán?', 'Mua nhầm, công ty thay đổi, hoặc có cơ hội tốt hơn rõ ràng.'],
    ['Fisher không khuyên làm gì?', 'IPO, chạy theo đám đông, đa dạng hoá thừa, bám giá khớp vài xu.'],
    ['Cổ phiếu giá trị vs tăng trưởng thường mắc sai lầm gì?', 'Giá trị: mua/bán sớm; tăng trưởng: mua/bán muộn.'],
    ['GARP?', 'Tăng trưởng với giá hợp lý — cầu nối giữa giá trị và tăng trưởng.'],
    ['Vì sao Buffett chuyển sang GARP?', 'Vốn lớn hơn lượng cổ phiếu giá trị cực đoan sẵn có.'],
    ['Vì sao Fisher chỉ đến thăm ban quản lý muộn?', 'Chỉ gặp khi đã hiểu ≥50% để họ hợp tác hơn.']
  ],
  quiz: [
    { q: 'Thị trường 1929–32 giảm khoảng:', o: ['17%', '45%', '80%', '30%'], a: 2, e: '1929 một mình chỉ −17%.' },
    { q: '“Ba từ quan trọng nhất của đầu tư” theo Buffett:', o: ['Buy and hold', 'Margin of safety', 'Value over price', 'Cash is king'], a: 1, e: 'Biên an toàn.' },
    { q: 'Mr. Market là ẩn dụ cho:', o: ['Người bán khống', 'Thị trường dao động cảm xúc', 'Ngân hàng', 'Nhà cung cấp'], a: 1, e: 'Dùng giá khi lợi.' },
    { q: 'Khi nào Graham coi là rẻ?', o: ['Đạt ≥ 7/10 tiêu chí', 'P/E > 30', 'Cổ tức 0', 'Giá cao'], a: 0, e: '10 dấu hiệu.' },
    { q: 'Tiêu chí 1: E/P phải bằng bao nhiêu lợi suất AAA?', o: ['1/2', '1 lần', '2 lần', '5 lần'], a: 2, e: 'Rủi ro cổ phiếu cần gấp đôi.' },
    { q: 'Scuttlebutt là:', o: ['Phân tích kỹ thuật', 'Thu thập thông tin từ mạng lưới liên quan', 'Quỹ chỉ số', 'Báo cáo thường niên'], a: 1, e: 'Fisher.' },
    { q: 'Fisher: thời điểm bán lý tưởng:', o: ['Khi giá tăng 20%', 'Hầu như không bao giờ', 'Hàng quý', 'Khi có tin xấu'], a: 1, e: 'Nếu mua đúng.' },
    { q: 'Cổ phiếu P/E 40, giá $120, lãi $3; muốn P/E 20 cần giảm:', o: ['10%', '20%', '50%', '80%'], a: 2, e: '$60.' },
    { q: 'Sai lầm điển hình của nhà đầu tư giá trị:', o: ['Mua quá muộn', 'Mua và bán quá sớm', 'Không bao giờ bán', 'Dùng đòn bẩy'], a: 1, e: 'Whitman bỏ lại nhiều tiền.' },
    { q: 'Buffett tự nhận Graham/Fisher:', o: ['50/50', '85/15', '15/85', '100/0'], a: 1, e: 'Tác giả cho gần 50–50.' },
    { q: 'Hiện tượng khiến Fisher khuyên không bán dù “quá đắt”:', o: ['Công ty xuất sắc thường tiếp tục tăng', 'Thuế bằng 0', 'Phí cao', 'Lạm phát'], a: 0, e: 'Dự đoán giá hợp lý khó.' }
  ],
  match: [
    ['Graham', 'Biên an toàn, Mr. Market'],
    ['Fisher', '15 câu hỏi, scuttlebutt'],
    ['GARP', 'Tăng trưởng với giá hợp lý'],
    ['Cigar butt', 'Cổ phiếu rẻ bị bỏ rơi'],
    ['Security Analysis', 'Sách Graham &amp; Dodd 1934'],
    ['Bonanza', 'Công ty xuất sắc dài hạn'],
    ['Ten-bagger', 'Cổ phiếu tăng 10 lần']
  ]
});
