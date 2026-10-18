// Investment Valuation – Chương 4.
BOOK_DATA.valuation.chapters.push({
  n: 4,
  title: 'Cơ bản về rủi ro',
  intro: 'Tỷ suất chiết khấu phải phản ánh rủi ro. Chương này định nghĩa rủi ro trong tài chính, phân biệt rủi ro đa dạng hoá được và không đa dạng hoá được, so sánh CAPM với APM, mô hình đa nhân tố, mô hình proxy và rủi ro vỡ nợ qua xếp hạng tín nhiệm.',
  sections: [
    { icon: '☯️', title: 'Rủi ro là gì?', blocks: [
      { t: 'p', x: 'Trong tài chính, rủi ro là khả năng <b>lợi nhuận thực tế khác lợi nhuận kỳ vọng</b> – gồm cả kết quả xấu (<i>downside risk</i>) và tốt (<i>upside risk</i>). Chữ Hán “rủi ro” gồm “nguy hiểm” + “cơ hội”. Rủi ro cần được nhìn từ góc độ của <b>nhà đầu tư cận biên</b> (marginal investor: người đang giao dịch và định giá cổ phiếu), không phải của người quản lý.' },
      { t: 'tabs', items: [
        ['Phân phối lợi nhuận', '<ul><li>Tài sản phi rủi ro (T-bill): thực tế = kỳ vọng, phân phối chỉ một điểm.</li><li>Tài sản rủi ro: độ phân tán đo bằng <b>phương sai/độ lệch chuẩn</b>; <b>độ lệch (skewness)</b> – thiên về lợi nhuận dương hay âm; <b>độ nhọn (kurtosis)</b> – đuôi dày = khả năng “nhảy” giá.</li><li>Nếu phân phối <b>chuẩn</b> thì chỉ cần hai số: lợi nhuận kỳ vọng (cơ hội) và độ lệch chuẩn (nguy hiểm).</li></ul>'],
        ['Tính độ lệch chuẩn từ lịch sử', '<p>Trung bình → bình phương độ lệch so với trung bình → chia (n−1) → căn bậc hai. Ví dụ 1991–98: Boeing trung bình 8,4%, σ = 31,1%; Home Depot trung bình 49,8%, σ = 61,9% (rủi ro gấp đôi trong quá khứ). Giả định ngầm: <b>quá khứ phản ánh tương lai</b>.</p>']
      ] }
    ] },
    { icon: '🧺', title: 'Rủi ro đa dạng hoá được và không đa dạng hoá được', blocks: [
      { t: 'table', head: ['Loại', 'Nguồn', 'Đa dạng hoá?'], rows: [
        ['<b>Rủi ro đặc thù công ty</b>', 'Rủi ro dự án, rủi ro cạnh tranh, rủi ro ngành (ảnh hưởng ít công ty)', '<b>Có</b>: tỷ trọng mỗi tài sản nhỏ + tác động dương/âm triệt tiêu'],
        ['<b>Rủi ro thị trường</b>', 'Lãi suất, lạm phát, tăng trưởng kinh tế (ảnh hưởng hầu hết tài sản)', '<b>Không</b>'],
        ['Vùng xám', 'Tỷ giá, rủi ro chính trị', 'Tuỳ số công ty bị ảnh hưởng']
      ] },
      { t: 'key', x: 'Danh mục 2 tài sản: <b>σ²<sub>p</sub> = w²<sub>A</sub>σ²<sub>A</sub> + (1−w<sub>A</sub>)²σ²<sub>B</sub> + 2w<sub>A</sub>(1−w<sub>A</sub>)ρ<sub>AB</sub>σ<sub>A</sub>σ<sub>B</sub></b>. Lợi ích đa dạng hoá phụ thuộc vào <b>tương quan ρ</b>: ρ càng thấp, rủi ro danh mục càng giảm.' },
      { t: 'widget', name: 'portfolio2', title: 'Đa dạng hoá: danh mục hai tài sản' },
      { t: 'p', x: '<b>Vì sao nhà đầu tư cận biên được giả định là đa dạng hoá?</b> Nhà đầu tư đa dạng hoá nhìn tài sản ít rủi ro hơn nên sẵn sàng trả giá cao hơn → tài sản dần nằm trong tay họ → <b>chỉ rủi ro thị trường được định giá/thưởng</b>. Lập luận yếu hơn khi tài sản khó giao dịch (bất động sản, doanh nghiệp tư nhân).' }
    ] },
    { icon: '📐', title: 'Mô hình đo rủi ro thị trường', blocks: [
      { t: 'tabs', items: [
        ['CAPM', '<p><b>Giả định</b>: không chi phí giao dịch, mọi tài sản giao dịch được và chia nhỏ vô hạn, mọi người có cùng thông tin → ai cũng giữ <b>danh mục thị trường</b> + tài sản phi rủi ro (vay/cho vay cùng lãi suất). Khẩu vị rủi ro thể hiện qua tỷ lệ phân bổ giữa hai thứ này.</p><p><b>Rủi ro của tài sản</b> = rủi ro nó thêm vào danh mục thị trường = <b>hiệp phương sai</b> với thị trường → chuẩn hoá thành <b>beta</b>: β = Cov(i, m) ÷ σ²<sub>m</sub>. β thị trường = 1; tài sản phi rủi ro = 0.</p><p><b>E(R<sub>i</sub>) = R<sub>f</sub> + β<sub>i</sub> [E(R<sub>m</sub>) − R<sub>f</sub>]</b> – ba đầu vào: lãi suất phi rủi ro, phần bù rủi ro thị trường, beta.</p>'],
        ['APM (Arbitrage Pricing)', '<p>Ross (1976). Dựa trên <b>không có cơ hội kinh doanh chênh lệch giá</b>. Lợi nhuận thực = kỳ vọng + rủi ro thị trường (nhiều nhân tố) + rủi ro đặc thù. <b>R = E(R) + β₁F₁ + β₂F₂ + … + ε</b>. Kỳ vọng tuyến tính theo beta từng nhân tố: E(R) = R<sub>f</sub> + β₁[E(R₁)−R<sub>f</sub>] + …. Ví dụ danh mục A (β 2,0; 20%), B (β 1,0; 12%), C (β 1,5; 14%): kết hợp ½A + ½B được β 1,5 và 16% → C bị bán đến khi lợi suất 16%. CAPM là trường hợp riêng của APM (một nhân tố = danh mục thị trường). Phân tích nhân tố cho số nhân tố và beta nhưng <b>không gọi tên</b> nhân tố.</p>'],
        ['Đa nhân tố', '<p>Thay nhân tố thống kê bằng <b>biến kinh tế vĩ mô</b> cụ thể (Chen–Roll–Ross 1986: sản xuất công nghiệp, thay đổi phần bù vỡ nợ, cấu trúc kỳ hạn, lạm phát bất ngờ, lãi suất thực). Rủi ro: nhân tố và phần bù thay đổi theo thời kỳ (giá dầu quan trọng thập niên 1970).</p>'],
        ['Mô hình proxy (hồi quy)', '<p>Đi từ lợi nhuận quan sát: Fama–French (1963–90) thấy lợi nhuận tương quan với <b>quy mô</b> (vốn hoá nhỏ) và <b>BV/MV cao</b> → dùng làm đại diện cho rủi ro: R = 1,77% − 0,11 ln(MV) + 0,35 ln(BV/MV). Nhược điểm: biến tốt ở kỳ này có thể không tốt kỳ sau.</p>']
      ] },
      { t: 'widget', name: 'capm', title: 'Máy tính CAPM' },
      { t: 'h3', x: 'Mô hình nào tốt nhất?' },
      { t: 'list', items: [
        '<b>Roll (1977)</b>: danh mục thị trường không quan sát được nên CAPM không thể kiểm định — mọi kiểm định là kiểm định chung cho mô hình + proxy thị trường.',
        '<b>Fama–French (1992)</b>: không thấy quan hệ beta–lợi nhuận (1963–90); bị phản bác (Amihud…, Kothari–Shanken dùng dữ liệu năm, Chan–Lakonishok dữ liệu 1926–91: beta hữu ích trong thị trường xấu).',
        'Mô hình phức tạp giải thích quá khứ tốt hơn nhưng khi dự báo, <b>sai số ước tính</b> beta/phần bù nhân tố có thể xoá lợi ích. Ví dụ dầu khí: CAPM 14,4% vs APM 19,1% (Weston & Copeland 1989).',
        'Tác giả: CAPM vẫn là <b>mặc định</b> trong thực tế nhờ sự trực quan; dùng thận trọng, không lệ thuộc quá nhiều vào dữ liệu lịch sử.'
      ] }
    ] },
    { icon: '💳', title: 'Rủi ro vỡ nợ và xếp hạng tín nhiệm', blocks: [
      { t: 'p', x: 'Với khoản vay/trái phiếu, dòng tiền được <b>hứa</b>: kịch bản tốt nhất chỉ là nhận đủ, còn lại toàn xấu → rủi ro <b>đặc thù công ty</b> được định giá vào lãi suất (khác với cổ phiếu). Rủi ro vỡ nợ phụ thuộc: <b>khả năng tạo dòng tiền</b> so với <b>nghĩa vụ tài chính</b> (lãi, gốc) và <b>độ biến động</b> của dòng tiền.' },
      { t: 'key', x: '<b>Xếp hạng trái phiếu</b> (S&amp;P, Moody’s): AAA/Aaa tốt nhất → D (vỡ nợ). <b>Từ BBB trở lên = investment grade</b>. Quy trình: công ty yêu cầu → phân tích (thông tin công khai + riêng) → hội đồng xếp hạng bỏ phiếu → thông báo, có thể kháng nghị.' },
      { t: 'table', head: ['Tỷ số trung vị 1998–2000', 'AAA', 'A', 'BBB', 'BB', 'B', 'CCC'], rows: [
        ['EBIT / lãi vay (lần)', '17,5', '6,8', '3,9', '2,3', '1,0', '0,2'],
        ['Dòng tiền HĐ / tổng nợ %', '105,8', '46,1', '30,5', '19,2', '9,4', '5,8'],
        ['ROC %', '28,2', '19,9', '14,0', '11,7', '7,2', '0,5'],
        ['Nợ dài hạn / vốn %', '15,2', '32,5', '41,0', '55,8', '70,7', '80,3']
      ] },
      { t: 'p', x: 'Chênh lệch giữa lãi suất trái phiếu công ty và trái phiếu chính phủ không rủi ro là <b>chênh lệch rủi ro vỡ nợ (default spread)</b>; thay đổi theo kỳ hạn và theo điều kiện kinh tế (Chương 7).' }
    ] }
  ],
  summary: [
    'Rủi ro = độ lệch giữa lợi nhuận thực và kỳ vọng (cả tốt và xấu), đo từ góc nhìn nhà đầu tư cận biên đa dạng hoá.',
    'Rủi ro đặc thù công ty có thể đa dạng hoá; chỉ rủi ro thị trường được định giá.',
    'CAPM: E(R) = R_f + β[E(R_m) − R_f]; APM/đa nhân tố dùng nhiều beta; mô hình proxy dùng đặc điểm như quy mô, BV/MV.',
    'CAPM vẫn là mặc định trong thực tế dù bị chỉ trích; mô hình phức tạp hơn gặp sai số ước tính.',
    'Rủi ro vỡ nợ đo qua xếp hạng; BBB trở lên là investment grade; tỷ số tài chính giải thích xếp hạng.'
  ],
  cards: [
    ['Định nghĩa rủi ro trong tài chính?', 'Khả năng lợi nhuận thực tế khác kỳ vọng – gồm cả kết quả xấu và tốt.'],
    ['Nhà đầu tư cận biên là ai?', 'Nhà đầu tư đang giao dịch nhiều khả năng nhất và quyết định giá cổ phiếu.'],
    ['Skewness và kurtosis đo gì?', 'Skewness: thiên lệch dương/âm. Kurtosis: độ dày đuôi, khả năng nhảy giá.'],
    ['Nếu phân phối chuẩn, cần hai số nào?', 'Lợi nhuận kỳ vọng và độ lệch chuẩn.'],
    ['Rủi ro đặc thù công ty gồm gì?', 'Rủi ro dự án, cạnh tranh, ngành.'],
    ['Rủi ro thị trường gồm gì?', 'Lãi suất, lạm phát, tăng trưởng kinh tế – ảnh hưởng hầu hết tài sản.'],
    ['Vì sao đa dạng hoá giảm rủi ro đặc thù?', 'Mỗi tài sản chiếm tỷ trọng nhỏ; tác động dương/âm triệt tiêu nhau.'],
    ['Lợi ích đa dạng hoá phụ thuộc vào gì?', 'Tương quan giữa các tài sản (ρ càng thấp càng lợi).'],
    ['Vì sao chỉ rủi ro thị trường được thưởng?', 'Nhà đầu tư cận biên đa dạng hoá không chịu rủi ro đặc thù nên không đòi bù.'],
    ['Giả định của CAPM?', 'Không chi phí giao dịch, mọi tài sản giao dịch và chia nhỏ được, cùng thông tin, vay/cho vay cùng lãi suất phi rủi ro.'],
    ['Công thức beta?', 'β = Cov(tài sản, thị trường) ÷ Var(thị trường).'],
    ['Công thức CAPM?', 'E(R) = R_f + β × [E(R_m) − R_f].'],
    ['Beta của thị trường và tài sản phi rủi ro?', 'Thị trường = 1; phi rủi ro = 0.'],
    ['APM khác CAPM thế nào?', 'APM dùng nhiều nhân tố (beta cho từng nhân tố) dựa trên không có chênh lệch giá; CAPM là trường hợp một nhân tố.'],
    ['Mô hình proxy (Fama–French) dùng biến nào?', 'Quy mô vốn hoá và tỷ lệ BV/MV.'],
    ['Phê phán của Roll (1977)?', 'Danh mục thị trường không quan sát được nên CAPM không thể kiểm định.'],
    ['Vì sao rủi ro vỡ nợ của trái phiếu gắn với rủi ro đặc thù?', 'Lợi nhuận bị chặn trên (chỉ nhận lãi hứa), còn lại chỉ có tin xấu.'],
    ['Investment grade là gì?', 'Xếp hạng BBB (S&P) trở lên.']
  ],
  quiz: [
    { q: 'Rủi ro trong tài chính bao gồm:', o: ['Chỉ kết quả xấu', 'Cả kết quả tốt và xấu so với kỳ vọng', 'Chỉ thua lỗ', 'Chỉ lạm phát'], a: 1, e: 'Downside và upside risk.' },
    { q: 'Rủi ro nào KHÔNG thể đa dạng hoá?', o: ['Rủi ro dự án', 'Rủi ro cạnh tranh', 'Rủi ro lãi suất toàn thị trường', 'Rủi ro ngành'], a: 2, e: 'Rủi ro thị trường ảnh hưởng hầu hết tài sản.' },
    { q: 'Hai tài sản có tương quan bằng +1 thì:', o: ['Đa dạng hoá giảm tối đa rủi ro', 'Không có lợi ích đa dạng hoá', 'Rủi ro bằng 0', 'Rủi ro tăng gấp đôi'], a: 1, e: 'ρ càng thấp càng lợi.' },
    { q: 'Nhà đầu tư cận biên được giả định:', o: ['Không đa dạng hoá', 'Đa dạng hoá tốt', 'Là quản lý công ty', 'Là người mua đầu tiên'], a: 1, e: 'Chỉ rủi ro thị trường được định giá.' },
    { q: 'Beta của một tài sản bằng:', o: ['Var(i) ÷ Var(m)', 'Cov(i, m) ÷ Var(m)', 'Cov(i, m) ÷ Var(i)', 'E(R_i) ÷ E(R_m)'], a: 1, e: 'Chuẩn hoá hiệp phương sai.' },
    { q: 'R_f = 4%, phần bù thị trường = 5%, β = 1,4. Chi phí vốn chủ theo CAPM:', o: ['9%', '10%', '11%', '14%'], a: 2, e: '4 + 1,4×5 = 11.' },
    { q: 'CAPM là trường hợp riêng của APM khi:', o: ['Có nhiều nhân tố', 'Chỉ có một nhân tố là danh mục thị trường', 'Không có rủi ro', 'β = 0'], a: 1, e: 'APM tổng quát hơn.' },
    { q: 'Điểm yếu của APM thuần tuý là:', o: ['Không dùng beta', 'Không gọi tên được các nhân tố', 'Không có lý thuyết', 'Luôn sai'], a: 1, e: 'Mô hình đa nhân tố khắc phục bằng biến vĩ mô cụ thể.' },
    { q: 'Fama–French dùng biến nào làm đại diện rủi ro?', o: ['Giá dầu', 'Quy mô và BV/MV', 'Lạm phát', 'Thuế'], a: 1, e: 'Vốn hoá nhỏ và BV/MV cao cho lợi nhuận cao hơn.' },
    { q: 'Tại sao CAPM vẫn được dùng phổ biến?', o: ['Chính xác nhất', 'Đơn giản, trực quan và các mô hình phức tạp không cải thiện rõ rệt', 'Do luật bắt buộc', 'Do không có lựa chọn khác'], a: 1, e: 'Sai số ước tính của mô hình phức tạp có thể xoá lợi ích.' },
    { q: 'Rủi ro vỡ nợ khác rủi ro cổ phiếu ở chỗ:', o: ['Rủi ro đặc thù công ty được định giá vào lãi suất', 'Không có rủi ro', 'Có thể đa dạng hoá hoàn toàn', 'Không phụ thuộc dòng tiền'], a: 0, e: 'Lợi nhuận trái phiếu bị chặn trên.' },
    { q: 'Xếp hạng nào là investment grade (S&P)?', o: ['BB', 'BBB', 'B', 'CCC'], a: 1, e: 'BBB trở lên.' },
    { q: 'Bảng tỷ số theo xếp hạng cho thấy công ty xếp hạng cao có:', o: ['Nợ/vốn cao hơn', 'Hệ số thanh toán lãi vay cao hơn', 'ROC thấp hơn', 'Dòng tiền thấp hơn'], a: 1, e: 'AAA: EBIT/lãi vay 17,5 lần so CCC 0,2.' },
    { q: 'Default spread là:', o: ['Phần bù thị trường', 'Chênh lệch lãi suất trái phiếu công ty và trái phiếu chính phủ không rủi ro', 'Lạm phát', 'Lãi suất tiền gửi'], a: 1, e: 'Thay đổi theo kỳ hạn và chu kỳ kinh tế.' }
  ],
  match: [
    ['β = 1', 'Rủi ro bằng thị trường'],
    ['β = 0', 'Tài sản phi rủi ro'],
    ['CAPM', 'Một nhân tố: danh mục thị trường'],
    ['APM', 'Nhiều nhân tố, không có chênh lệch giá'],
    ['Fama–French', 'Quy mô và BV/MV'],
    ['Roll', 'CAPM không thể kiểm định'],
    ['Investment grade', 'BBB trở lên'],
    ['Skewness', 'Thiên lệch của phân phối'],
    ['Kurtosis', 'Độ dày đuôi'],
    ['Default spread', 'Phần bù vỡ nợ trong lãi suất']
  ]
});
