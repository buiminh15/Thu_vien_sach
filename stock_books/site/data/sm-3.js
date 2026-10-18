// Streetsmart Guide to Valuing a Stock – Chương 4.
BOOK_DATA.streetsmart.chapters.push({
  n: 4,
  title: 'Cách định giá một cổ phiếu (DCF)',
  intro: 'Chương trung tâm: dùng dòng tiền tự do của doanh nghiệp (FCFF) chiết khấu bằng WACC để tính giá trị nội tại. Ví dụ đơn giản với Microsoft cho thấy bốn bước và vì sao dùng DCF thay vì EPS.',
  sections: [
    { icon: '🧾', title: 'Các khái niệm dòng tiền', blocks: [
      { t: 'list', items: [
        '<b>Chi phí hoạt động</b> = giá vốn (CGS, gồm khấu hao) + SG&amp;A + R&amp;D. <b>Lợi nhuận hoạt động ròng NOP</b> = doanh thu − chi phí hoạt động (chưa tính thuế, lãi vay, cổ tức ưu đãi; loại trừ thu nhập đầu tư, khoản bất thường, hoạt động đã chấm dứt).',
        '<b>NOPM</b> = NOP ÷ doanh thu. Microsoft: 47,9% (2000), 46,3% (2001), 42,0% (2002); doanh thu $22.956 → $25.296 → $28.365 triệu (+10,2%, +12,1%). Tăng trưởng và NOPM giảm dần khi công ty lớn và cạnh tranh ăn vào lợi nhuận — xấu cho giá trị.',
        '<b>Đầu tư ròng</b> = đầu tư mới − khấu hao (khấu hao là chi phí phi tiền mặt). <b>Vốn lưu động</b> = (phải thu + tồn kho) − phải trả; thay đổi ròng hằng năm là nhu cầu để hỗ trợ tăng trưởng. <b>Thuế</b>: Microsoft 2002 thuế $3.684 triệu / lợi nhuận trước thuế $11.513 triệu = 32,0%.'
      ] },
      { t: 'key', x: '<b>FCFF = NOP − Thuế − Đầu tư ròng − Thay đổi vốn lưu động</b> (hay Dòng tiền vào − Dòng tiền ra). Đây là tiền mặt thực sự còn lại để trả cho mọi bên có yêu sách, nhất là cổ đông. Công ty tạo thêm giá trị cho cổ đông <b>chỉ khi</b> tỷ suất sinh lợi của đầu tư (sau mọi điều chỉnh) lớn hơn WACC. Giá trị công ty do niềm tin về hiệu suất <b>tương lai</b>, không phải lịch sử.' }
    ] },
    { icon: '🔁', title: 'Cách tiếp cận FCFF và chính sách cổ tức', blocks: [
      { t: 'p', x: 'Hai giả định của FCFF: cấu trúc vốn tương đối ổn định (tỷ lệ nợ/ưu đãi/vốn cổ phần không đổi) và ban quản lý hành động vì chủ sở hữu (tái đầu tư vào dự án tỷ suất > WACC, nếu không thì trả dòng tiền cho cổ đông). Microsoft WACC 10% không nên đầu tư dự án &lt; 10%. Dễ tìm dự án tốt ở ngành tăng trưởng (máy tính, dược, CNTT), khó ở ngành trưởng thành (ngân hàng, sản xuất, điện).' },
      { t: 'tabs', items: [
        ['Cổ tức vs mua lại cổ phiếu', '<p>Dòng tiền thừa có thể trả bằng cổ tức (chịu thuế) hoặc mua lại cổ phiếu (Microsoft mua > $6 tỷ trong năm tài chính 2002). Nhà đầu tư thuế cao ưa mua lại; người hưu trí cần thu nhập ưa cổ tức — <b>hiệu ứng khách hàng (clientele)</b>.</p>'],
        ['Modigliani–Miller', '<p>Chính sách cổ tức <b>không ảnh hưởng giá trị hiện tại</b>. XYZ Dividend: lợi nhuận $100 triệu, chi hết cổ tức, vốn hoá $100 triệu ÷ 10% = $1 tỷ = $10/cổ phiếu; giá giữ $10. UVW Growth: tái đầu tư 10%: lợi nhuận $100 → 110 → 121 triệu, vốn hoá $1 → 1,1 → 1,21 tỷ, giá $10 → $11 → $12,10. Cả hai hôm nay $10; chỉ khác đường đi tương lai.</p>'],
        ['Mua lại khi giá quá cao', '<p>Công ty không nên mua lại cổ phiếu bị định giá quá cao: chuyển giá trị từ cổ đông ở lại sang người bán. Nên đầu tư tạm vào tài sản an toàn. Hiếm khi CEO nói cổ phiếu mình quá đắt: Steve Ballmer 23/9/1999 (“sự định giá quá cao của cổ phiếu công nghệ thật phi lý, và cổ phiếu chúng tôi cũng vậy”, MSFT $96, vốn hoá $500 tỷ) làm NASDAQ giảm 3,79%; MSFT kết thúc 2002 ở $51,70.</p>']
      ] },
      { t: 'tip', x: 'Quy tắc đầu tư: <b>chỉ đầu tư khi dự án tạo thêm FCFF</b>; nếu không, trả tiền cho cổ đông.' }
    ] },
    { icon: '🛠️', title: 'Phạm vi áp dụng và vì sao DCF thay vì EPS', blocks: [
      { t: 'list', items: [
        'FCFF xử lý tốt ~<b>95%</b> cổ phiếu niêm yết. Cần điều chỉnh với công ty đòn bẩy cao (REIT, ngân hàng: nợ ~90% theo giá sổ sách, đầu tư vào nợ tài chính giống vốn lưu động nên bảng cân đối quan trọng), công ty chưa có dòng tiền tự do (EntreMed — có thể dùng định giá quyền chọn), công ty danh mục đầu tư (Berkshire Hathaway, ICGE).',
        '<b>EPS thiếu</b>: bỏ qua cổ tức, giá trị thời gian, rủi ro, chiết khấu, kỳ vọng tương lai; có thể bị thao túng bằng kế toán (tồn kho, khấu hao, ghi nhận doanh thu); và bỏ qua nhu cầu đầu tư tài sản cố định và vốn lưu động — tăng EPS có thể làm giảm FCF và giá trị.',
        'Trò kế toán “thời thượng”: hoán đổi cáp quang ghi doanh thu; Fastow đưa lỗ và nợ ra ngoài bảng; WorldCom ghi > $9 tỷ chi phí thường là chi đầu tư. Không có số liệu kế toán đáng tin thì định giá vô nghĩa.'
      ] }
    ] },
    { icon: '4️⃣', title: 'Bốn bước DCF', blocks: [
      { t: 'steps', items: [
        '<b>Dự báo dòng tiền kỳ vọng</b>: tăng trưởng, NOPM, thuế, đầu tư cố định, vốn lưu động, chia hai giai đoạn: <b>giai đoạn vượt trội (excess return period)</b> và <b>giai đoạn giá trị còn lại (residual)</b>.',
        '<b>Ước tính WACC</b> (tỷ lệ chiết khấu).',
        '<b>Giá trị doanh nghiệp</b> = FCFF chiết khấu trong giai đoạn vượt trội + giá trị còn lại chiết khấu + tài sản ngắn hạn. Giá trị còn lại = NOPAT năm cuối ÷ WACC rồi chiết khấu bằng WACC (thường chiếm <b>60–90%</b> tổng giá trị).',
        '<b>Giá trị cổ phiếu</b> = (Giá trị DN − nợ − ưu đãi − nợ ngắn hạn) ÷ số cổ phiếu.'
      ] },
      { t: 'key', x: 'Chỉ tính tài sản ngắn hạn <b>thật sự</b> bán được gần giá trị sổ (chứng khoán đầu tư, tồn kho, phải thu…); không tính lợi thế thương mại (goodwill) hay tài sản dài hạn (nhà xưởng cần để tạo dòng tiền). Microsoft 30/6/2002 có $38,6 tỷ tiền và chứng khoán không rủi ro hoạt động.' },
      { t: 'h3', x: 'Giai đoạn vượt trội và lợi thế cạnh tranh' },
      { t: 'p', x: 'Nhờ lợi thế cạnh tranh, công ty đạt tỷ suất đầu tư mới &gt; WACC (IBM thập niên 1950–60, Apple 1980s, Microsoft–Intel–Cisco 1990s). Thành công thu hút đối thủ, kéo NOPM xuống; khi lợi nhuận đầu tư bằng WACC thì NPV = 0 (công ty tệ hơn thì huỷ giá trị: IBM 1980s, Apple 1990s, viễn thông 2000s). Công ty $10–100 triệu doanh thu ít bị chú ý; vượt $100 triệu thì đối thủ vào. Rào cản (bằng sáng chế, thương hiệu, kênh phân phối) kéo dài giai đoạn: 10–15 năm; thông thường 5–7 năm hoặc ngắn hơn. Sau đó giá trị vẫn tăng nhưng chỉ bằng tỷ suất yêu cầu (RST $10 × 1,12 = $11,20…).' },
      { t: 'table', head: ['Loại công ty (Quy tắc 1-5-7-10)', 'Giai đoạn vượt trội'], rows: [
        ['Nhàm chán, cạnh tranh gay gắt, biên thấp', '1 năm'], ['Tạm được: tên tuổi, quy định (ConEd)', '5 năm'], ['Tốt: thương hiệu, quy mô, kênh (McDonald’s)', '7 năm'], ['Tuyệt vời, tăng trưởng lớn (Intel, Microsoft, Coca-Cola, Disney)', '10 năm']
      ] },
      { t: 'tip', x: 'Tính giá trị tối đa với 10 năm và giá trị hợp lý/tối thiểu với 1, 5 hoặc 7 năm. Không đi quá 10 năm để bảo thủ — thà sai ở phía thận trọng hơn là trả quá nhiều.' }
    ] },
    { icon: '💻', title: 'Ví dụ Microsoft', blocks: [
      { t: 'table', head: ['Đầu vào', 'Giá trị'], rows: [
        ['Tăng trưởng doanh thu', '11%'], ['NOPM', '42%'], ['Thuế', '32%'], ['Tỷ lệ khấu hao / đầu tư (so với doanh thu)', '3,8% / 2,7%'], ['Vốn lưu động tăng thêm', '9,8%'], ['WACC (hoàn toàn vốn cổ phần, không nợ)', '10%'], ['Vốn hoá 12/8/2002', '5.415 triệu × $45,15 = $244,5 tỷ']
      ] },
      { t: 'list', items: [
        'NOP tăng từ $13.224 triệu (2003) lên $33.827 triệu (2012). FCFF: $9.032; $10.026; $11.128; $12.363; … $23.104 triệu (2012).',
        'Tổng FCFF chiết khấu 10 năm = <b>$85.552 triệu</b>. Giá trị còn lại = $23.002 ÷ 0,10 = $230.023 triệu × hệ số 0,3855 = <b>$88.684 triệu</b>. Cộng tài sản ngắn hạn $47.827 triệu ⇒ giá trị DN <b>$222.062 triệu</b>.',
        'Trừ nợ ngắn hạn $11.640 triệu ⇒ giá trị vốn chủ <b>$210.422 triệu</b>; chia 5.415 triệu cổ phiếu ⇒ <b>$38,86</b>, thấp hơn giá $45,15 khoảng 16% ⇒ bán hoặc chưa mua (chưa trừ pha loãng do quyền chọn nhân viên).'
      ] },
      { t: 'widget', name: 'fcff-dcf', title: 'DCF FCFF rút gọn: thử với dữ liệu Microsoft' }
    ] },
    { icon: '⚖️', title: 'Tăng trưởng vs giá trị, vốn hoá lớn vs nhỏ', blocks: [
      { t: 'table', head: ['Loại', 'Đặc điểm'], rows: [
        ['Growth', 'Tăng trưởng doanh thu/lợi nhuận ≥ 15%; P/E cao; BE/ME thấp; ngành “nóng” (viễn thông, máy tính, dược, CNTT)'],
        ['Value', 'Tăng trưởng thấp; ngành trưởng thành (điện, ngân hàng, sản xuất, ô tô); P/E thấp, BE/ME cao; ngành bị bỏ rơi'],
        ['Large / Mid / Small cap', '> $5 tỷ / $1–5 tỷ / < $1 tỷ']
      ] },
      { t: 'key', x: 'Dù growth hay value, large hay small, <b>quy trình định giá giống nhau</b>: chỉ quan tâm dòng tiền kỳ vọng và rủi ro. Growth có tăng trưởng kỳ vọng cao và thường phi thực tế; small cap có beta và WACC cao hơn. Phong cách đầu tư lên xuống theo thời kỳ: small cap trung bình 35,3%/năm giai đoạn 1975–83 (Siegel). Fama–French: BE/ME cao (value) vượt trội.' }
    ] }
  ],
  summary: [
    'FCFF = NOP − Thuế − Đầu tư ròng − ΔVốn lưu động; giá trị DN = Σ FCFF chiết khấu + giá trị còn lại + tài sản ngắn hạn.',
    'Giá trị còn lại = NOPAT ÷ WACC, chiếm 60–90% giá trị; giai đoạn vượt trội theo quy tắc 1-5-7-10.',
    'Dùng DCF thay vì EPS vì EPS bỏ qua thời gian, rủi ro, đầu tư cần thiết và dễ bị thao túng.',
    'Chính sách cổ tức không đổi giá trị hiện tại (Modigliani–Miller).',
    'Microsoft ví dụ: giá trị $38,86 so với giá $45,15 ⇒ định giá cao 16%.'
  ],
  cards: [
    ['NOP là gì?', 'Doanh thu trừ chi phí hoạt động; lợi nhuận từ hoạt động liên tục, chưa tính thuế và lãi vay.'],
    ['NOPM?', 'NOP ÷ doanh thu.'],
    ['Đầu tư ròng?', 'Đầu tư mới trừ khấu hao.'],
    ['Vốn lưu động?', '(Phải thu + tồn kho) − phải trả.'],
    ['FCFF?', 'NOP − thuế − đầu tư ròng − thay đổi vốn lưu động: tiền mặt thật sự còn lại cho các bên có yêu sách.'],
    ['Điều kiện tạo giá trị cho cổ đông?', 'Tỷ suất đầu tư sau điều chỉnh lớn hơn WACC.'],
    ['Hai giả định của FCFF?', 'Cấu trúc vốn ổn định và ban quản lý hành động vì chủ sở hữu.'],
    ['Modigliani–Miller về cổ tức?', 'Chính sách cổ tức không ảnh hưởng giá trị hiện tại của cổ phiếu.'],
    ['Hiệu ứng khách hàng (clientele)?', 'Nhà đầu tư thuế cao ưa mua lại; người cần thu nhập ưa cổ tức.'],
    ['Khi nào công ty không nên mua lại cổ phiếu?', 'Khi cổ phiếu bị định giá quá cao.'],
    ['Vì sao DCF hơn EPS?', 'EPS bỏ qua thời gian, rủi ro, đầu tư cần thiết, và dễ bị thao túng.'],
    ['Bốn bước DCF?', 'Dự báo FCF → WACC → giá trị DN → giá trị cổ phiếu.'],
    ['Giá trị còn lại?', 'NOPAT cuối kỳ ÷ WACC rồi chiết khấu; 60–90% tổng giá trị.'],
    ['Giai đoạn vượt trội?', 'Thời gian công ty đạt lợi suất đầu tư mới > WACC nhờ lợi thế cạnh tranh.'],
    ['Quy tắc 1-5-7-10?', 'Giai đoạn vượt trội 1/5/7/10 năm tuỳ chất lượng công ty.'],
    ['Tài sản ngắn hạn nào được tính?', 'Tài sản thật bán được gần giá sổ; không tính goodwill hay tài sản dài hạn hoạt động.']
  ],
  quiz: [
    { q: 'FCFF bằng:', o: ['NOP − thuế − đầu tư ròng − ΔVLĐ', 'EPS × cổ phiếu', 'Doanh thu − thuế', 'NOP + khấu hao'], a: 0, e: 'Dòng tiền thực.' },
    { q: 'Đầu tư ròng =', o: ['Đầu tư mới + khấu hao', 'Đầu tư mới − khấu hao', 'Khấu hao', 'Doanh thu − chi phí'], a: 1, e: 'Khấu hao là phi tiền mặt.' },
    { q: 'Giá trị còn lại thường chiếm:', o: ['5–10%', '20–30%', '60–90%', '100%'], a: 2, e: 'Rất nhạy với NOPAT và WACC.' },
    { q: 'Giá trị còn lại = ?', o: ['NOPAT ÷ WACC', 'FCFF × WACC', 'EPS ÷ P/E', 'Doanh thu ÷ WACC'], a: 0, e: 'Rồi chiết khấu về hiện tại.' },
    { q: 'Quy tắc 1-5-7-10: ConEd (tiện ích) thuộc:', o: ['1 năm', '5 năm', '7 năm', '10 năm'], a: 1, e: 'Decent company.' },
    { q: 'Modigliani–Miller cho rằng:', o: ['Cổ tức tăng thì giá tăng', 'Chính sách cổ tức không đổi giá trị hiện tại', 'Mua lại luôn tốt', 'Nợ vô hại'], a: 1, e: 'XYZ vs UVW.' },
    { q: 'Microsoft: giá trị $38,86 so với giá $45,15 nghĩa là:', o: ['Bị định giá thấp', 'Bị định giá cao khoảng 16%', 'Hợp lý', 'Không đo được'], a: 1, e: 'Bán hoặc chưa mua.' },
    { q: 'Điều KHÔNG gồm trong tài sản ngắn hạn cộng vào giá trị DN:', o: ['Chứng khoán đầu tư', 'Tồn kho', 'Goodwill', 'Phải thu'], a: 2, e: 'Khó bán, khó định giá.' },
    { q: 'EPS thiếu sót vì:', o: ['Quá chính xác', 'Bỏ qua thời gian, rủi ro, đầu tư cần thiết', 'Quá đắt', 'Không có trong báo cáo'], a: 1, e: 'Và dễ bị thao túng.' },
    { q: 'Giai đoạn vượt trội dài hơn khi:', o: ['Rào cản gia nhập cao (bằng sáng chế, thương hiệu)', 'Công ty nhỏ', 'Ngành nhàm chán', 'Không có lợi nhuận'], a: 0, e: 'Có thể 10–15 năm.' },
    { q: 'Sách khuyên không đi quá bao nhiêu năm vượt trội?', o: ['3', '5', '10', '30'], a: 2, e: 'Bảo thủ.' },
    { q: 'FCFF cần điều chỉnh với:', o: ['Microsoft', 'REIT và ngân hàng', 'Cisco', 'Disney'], a: 1, e: 'Đòn bẩy cao.' }
  ],
  match: [
    ['NOPM', 'NOP ÷ doanh thu'],
    ['FCFF', 'Dòng tiền tự do doanh nghiệp'],
    ['Giá trị còn lại', 'NOPAT ÷ WACC'],
    ['Giai đoạn vượt trội', 'Lợi suất đầu tư > WACC'],
    ['Modigliani–Miller', 'Cổ tức không đổi giá trị'],
    ['Clientele', 'Nhóm nhà đầu tư ưa cổ tức hay mua lại'],
    ['1-5-7-10', 'Quy tắc giai đoạn vượt trội']
  ]
});
