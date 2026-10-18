// Investment Valuation – Chương 7.
BOOK_DATA.valuation.chapters.push({
  n: 7,
  title: 'Lãi suất phi rủi ro và phần bù rủi ro',
  intro: 'Mọi mô hình rủi ro–lợi nhuận đều bắt đầu từ lãi suất phi rủi ro và phần bù rủi ro. Chương này dạy chọn lãi suất phi rủi ro đúng, ước tính phần bù vốn chủ sở hữu (lịch sử, quốc gia, hàm ý) và chênh lệch lãi suất vỡ nợ.',
  sections: [
    { icon: '🛡️', title: 'Lãi suất phi rủi ro', blocks: [
      { t: 'key', x: 'Tài sản phi rủi ro khi lợi nhuận thực = kỳ vọng. Cần hai điều kiện: <b>(1) không có rủi ro vỡ nợ</b> (thực tế chỉ chính phủ vì kiểm soát in tiền) và <b>(2) không có rủi ro tái đầu tư</b>. Vì vậy, với dòng tiền 5 năm, lãi suất phi rủi ro đúng là trái phiếu <b>zero-coupon</b> chính phủ 5 năm — kể cả T-bill 6 tháng hay trái phiếu 5 năm có coupon đều không hoàn toàn phi rủi ro.' },
      { t: 'list', items: [
        '<b>Thực dụng</b>: khớp <b>duration</b> của chứng khoán chính phủ với duration của dòng tiền. Khi định giá doanh nghiệp (vô hạn năm) dùng <b>lãi suất trái phiếu chính phủ dài hạn</b>; chỉ dùng năm-riêng khi chênh lệch ngắn–dài rất lớn.',
        '<b>Nhất quán</b> với phần bù: nếu lãi suất phi rủi ro là trái phiếu thì phần bù phải là phần bù của cổ phiếu so với <b>trái phiếu</b> (không phải T-bill).',
        '<b>Nguyên tắc nhất quán tiền tệ</b>: lãi suất phi rủi ro phải cùng đồng tiền với dòng tiền (Nestlé có thể định giá bằng CHF hoặc GBP đều được). Nếu ngang giá sức mua đúng, chênh lệch lãi suất = chênh lệch lạm phát và giá trị không đổi; nếu không, đồng tiền lãi suất thấp cho giá trị cao hơn nhưng sẽ hội tụ.',
        '<b>Thực vs danh nghĩa</b>: định giá theo giá thực (lạm phát cao/bất ổn) thì dùng lãi suất phi rủi ro thực — có thể lấy từ trái phiếu <b>chỉ số hoá lạm phát</b> (TIPS), hoặc cho rằng vốn chảy tự do nên lãi suất thực đồng nhất, hoặc bằng tốc độ tăng trưởng thực dài hạn của nền kinh tế.'
      ] },
      { t: 'h3', x: 'Khi không có thực thể “không vỡ nợ”' },
      { t: 'steps', items: [
        'Dùng lãi suất vay dài hạn nội tệ của <b>công ty lớn và an toàn nhất</b> rồi trừ ~0,5% (≈ default spread AA).',
        '<b>Ngang giá lãi suất</b>: Tỷ giá kỳ hạn = Tỷ giá giao ngay × [(1 + lãi suất nội tệ) ÷ (1 + lãi suất USD)]^t. Ví dụ baht: giao ngay 38,10; kỳ hạn 10 năm 61,36; trái phiếu Mỹ 5% → lãi suất phi rủi ro baht 10 năm ≈ <b>10,12%</b>.',
        '<b>Trừ default spread</b> khỏi lãi suất trái phiếu chính phủ theo xếp hạng quốc gia: Ấn Độ 12% − spread hạng A 2% = <b>10%</b>.'
      ] }
    ] },
    { icon: '📊', title: 'Phần bù rủi ro vốn chủ sở hữu: cách tiếp cận lịch sử', blocks: [
      { t: 'p', x: 'Chuẩn mực: lấy lợi nhuận cổ phiếu trừ lợi nhuận chứng khoán chính phủ trong thời gian dài (dữ liệu Ibbotson từ 1926). Nhưng ước tính của các ngân hàng/công ty chênh từ <b>4% đến 12%</b>. Ba lý do:' },
      { t: 'tabs', items: [
        ['Khoảng thời gian', '<p>Dùng kỳ ngắn để “cập nhật” thì sai số chuẩn rất lớn: σ = 20% ⇒ sai số = 20% ÷ √n. 5 năm: <b>8,94%</b>; 10 năm: 6,32%; 25 năm: 4,00%; 50 năm: <b>2,83%</b>. Ước tính 10–20 năm thường có sai số lớn bằng chính phần bù.</p>'],
        ['Chọn tài sản phi rủi ro', '<p>Đường lợi suất Mỹ thường dốc lên nên phần bù so với T-bill lớn hơn so với trái phiếu. Dùng lãi suất dài hạn ⇒ phần bù phải là cổ phiếu − <b>trái phiếu</b>.</p>'],
        ['Trung bình số học vs hình học', '<p>Số học tốt nếu lợi nhuận hàng năm không tương quan và dự báo 1 năm. Nhưng lợi nhuận cổ phiếu tương quan <b>âm</b> theo thời gian, và mô hình được dùng cho kỳ dài ⇒ nên dùng <b>trung bình hình học</b>.</p>']
      ] },
      { t: 'table', head: ['Giai đoạn', 'CP − T-bill (số học)', 'CP − T-bill (hình học)', 'CP − T-bond (số học)', 'CP − T-bond (hình học)'], rows: [
        ['1928–2000', '8,41%', '7,17%', '6,53%', '<b>5,51%</b>'],
        ['1962–2000', '6,41%', '5,25%', '5,30%', '4,52%'],
        ['1990–2000', '11,42%', '7,64%', '12,67%', '7,09%']
      ] },
      { t: 'warn', x: '<b>Hạn chế</b>: giả định mức ngại rủi ro không đổi; kỳ ngắn thì nhiễu; và <b>thiên kiến người sống sót</b> (thị trường Mỹ là thị trường “thắng”). Thị trường ngoài Mỹ 1970–96 có phần bù âm (Đức −0,80%, Ý −2,35%) hoặc rất cao (Singapore 9,03%) với sai số > 5% — vô dụng. Với thị trường mới nổi không nên dùng phần bù lịch sử.' }
    ] },
    { icon: '🌎', title: 'Phần bù rủi ro quốc gia', blocks: [
      { t: 'key', x: '<b>Phần bù thị trường = Phần bù thị trường trưởng thành (Mỹ 5,51%) + Phần bù quốc gia</b>. Cơ sở: nhà đầu tư cận biên chỉ đa dạng hoá toàn cầu một phần (<i>home bias</i>, thị trường phân đoạn) và tương quan giữa các thị trường đã tăng (khủng hoảng Nga lan sang Brazil) ⇒ một phần rủi ro quốc gia là rủi ro thị trường, không đa dạng hoá được.' },
      { t: 'tabs', items: [
        ['1. Default spread', '<p>Dùng xếp hạng quốc gia (Moody’s xếp Brazil hạng B2 ⇒ spread 4,83% so với trái phiếu Mỹ). Thêm vào chi phí vốn mọi công ty trong nước: Brazil: 5% + 1,2×5,51% + 4,83% = <b>16,34%</b>. Hạn chế: xếp hạng chậm, chỉ đo rủi ro vỡ nợ; spread trái phiếu có thể thấp hơn rủi ro cổ phiếu.</p>'],
        ['2. σ tương đối', '<p>ERP quốc gia = ERP Mỹ × (σ quốc gia ÷ σ Mỹ). Indonesia: 5,51% × 35/20 = 9,64% ⇒ phần bù quốc gia 4,13%. Vấn đề: thị trường kém thanh khoản có σ thấp giả tạo; cần cùng đơn vị tiền tệ.</p>'],
        ['3. Spread × σ cổ phiếu/σ trái phiếu', '<p>Brazil: 4,83% × (30,64% ÷ 15,28%) = <b>9,69%</b>. Thực tế nhất cho ngắn hạn; phần bù sẽ <b>giảm dần</b> (về 4,13–4,83%) khi nhìn dài hạn vì chênh lệch σ thu hẹp.</p>']
      ] },
      { t: 'warn', x: '<b>Cẩn thận đếm trùng rủi ro</b>: nếu đã dùng lãi suất trái phiếu USD của chính quốc gia đó làm lãi suất phi rủi ro (đã gồm default spread) mà còn cộng phần bù quốc gia, tăng beta và “haircut” dòng tiền — là đếm 3–4 lần.' },
      { t: 'h3', x: 'Tiếp xúc rủi ro quốc gia của từng công ty' },
      { t: 'table', head: ['Cách', 'Công thức', 'Aracruz (β 0,72)'], rows: [
        ['Mọi công ty như nhau', 'Rf + β·ERP + CRP', '5% + 0,72×5,51% + 9,69% = <b>18,66%</b>'],
        ['Tỷ lệ với beta', 'Rf + β·(ERP + CRP)', '5% + 0,72×15,2% = <b>15,94%</b>'],
        ['<b>Dùng λ (ưa thích)</b>', 'Rf + β·ERP + <b>λ</b>·CRP', 'λ = 0,25 ⇒ <b>11,39%</b>']
      ] },
      { t: 'tip', x: 'λ ≈ (% doanh thu từ thị trường nội địa của công ty) ÷ (% doanh thu từ thị trường nội địa của công ty trung bình). Aracruz bán 80% doanh thu bằng USD ra thị trường toàn cầu nên λ ≈ 0,25. Chuyển sang nội tệ: (1 + k_USD) × (1 + lạm phát nội) ÷ (1 + lạm phát Mỹ) − 1 (vd. 26,72% bằng BR).' },
      { t: 'widget', name: 'country-erp', title: 'Ba cách ước tính phần bù rủi ro quốc gia' }
    ] },
    { icon: '🔍', title: 'Phần bù rủi ro hàm ý (Implied ERP)', blocks: [
      { t: 'p', x: 'Cách khác: giả sử thị trường định giá đúng, <b>giải ngược</b> tỷ suất sinh lời yêu cầu từ mô hình định giá. Ví dụ đơn giản (Gordon): Chỉ số = Cổ tức kỳ sau ÷ (r − g). S&amp;P 900, cổ tức 2%, g = 7% ⇒ 900 = 18 ÷ (r − 0,07) ⇒ r = 9% ⇒ phần bù = 9% − 6% = <b>3%</b>.' },
      { t: 'p', x: 'Mở rộng hai giai đoạn: S&amp;P 500 ngày 31/12/1999 = 1.469, tỷ suất cổ tức 1,68%, tăng trưởng 10% trong 5 năm rồi 6,5% (bằng trái phiếu kho bạc) ⇒ r = 8,56% ⇒ phần bù hàm ý = 8,56% − 6,5% = <b>2,06%</b>. Argentina 9/1998: r = 10,59%, T-bond 5,14% ⇒ <b>5,45%</b>.' },
      { t: 'widget', name: 'implied-erp', title: 'Giải ngược phần bù rủi ro hàm ý' },
      { t: 'list', items: [
        'Phần bù hàm ý hiếm khi bằng mức lịch sử; trung bình ~4% trong 40 năm (S&amp;P), đỉnh 6,5% năm 1978; thấp kỷ lục cuối 1999 rồi tăng lên 2,87% cuối 2000.',
        'Tăng khi lạm phát và lãi suất tăng (thập niên 1970) → không nên giả định hằng số. Hồi quy: <b>ERP hàm ý = 1,87% + 0,2903 × T-bond − 0,1162 × (T-bond − T-bill)</b>, R² = 49%.',
        'Có xu hướng <b>quay về trung bình</b> → dùng trung bình 10–15 năm hoặc hồi quy.',
        'Ưu điểm: dựa trên thị trường hiện tại, không cần dữ liệu lịch sử, dùng được cho mọi thị trường. Hạn chế: phụ thuộc mô hình và độ tin cậy của dự báo tăng trưởng.'
      ] }
    ] },
    { icon: '💳', title: 'Chênh lệch lãi suất vỡ nợ (Default spread)', blocks: [
      { t: 'steps', items: [
        'Lấy <b>mẫu</b> trái phiếu cùng hạng (không chỉ một trái phiếu), ưu tiên thanh khoản cao, ít tính năng đặc biệt (chuyển đổi, có thể mua lại).',
        'Dùng <b>lợi suất đáo hạn (YTM)</b> (không phải coupon/giá). Bình quân đơn giản hoặc có trọng số khối lượng.',
        'So với lãi suất kho bạc <b>cùng kỳ hạn</b> để ra spread.'
      ] },
      { t: 'table', head: ['Hạng', 'Spread (T-bond 5%)', 'Lãi suất'], rows: [
        ['AAA', '0,75%', '5,75%'], ['AA', '1,00%', '6,00%'], ['A', '1,80%', '6,80%'], ['BBB', '2,25%', '7,25%'], ['BB', '3,50%', '8,50%'], ['B', '6,50%', '11,50%'], ['CCC', '10,00%', '15,00%'], ['D', '14,00%', '19,00%']
      ] },
      { t: 'list', items: [
        'Spread cùng một hạng <b>tăng theo kỳ hạn</b> và tăng nhiều hơn với hạng thấp.',
        'Spread <b>tăng khi suy thoái</b>, giảm khi tăng trưởng cao: Spread Baa − T-bond = 0,47 − 0,04 × (tăng trưởng GNP thực) ⇒ phải ước tính lại định kỳ.'
      ] }
    ] }
  ],
  summary: [
    'Lãi suất phi rủi ro lý tưởng là zero-coupon chính phủ khớp thời điểm dòng tiền; thực tế dùng trái phiếu chính phủ dài hạn khớp duration, cùng đồng tiền và cùng loại (thực/danh nghĩa) với dòng tiền.',
    'Phần bù lịch sử phụ thuộc kỳ, tài sản phi rủi ro, số học/hình học; sai số lớn, chỉ đáng tin ở kỳ rất dài (5,51% hình học 1928–2000 so với trái phiếu).',
    'Thị trường mới nổi: phần bù = phần bù thị trường trưởng thành + phần bù quốc gia (default spread; σ tương đối; spread × σ cổ phiếu/σ trái phiếu) × λ.',
    'Phần bù hàm ý giải ngược từ giá thị trường; biến động theo thời gian, thấp hơn phần bù lịch sử.',
    'Default spread ước tính từ mẫu trái phiếu, tăng theo kỳ hạn và khi suy thoái.'
  ],
  cards: [
    ['Hai điều kiện để một tài sản phi rủi ro?', 'Không có rủi ro vỡ nợ và không có rủi ro tái đầu tư.'],
    ['Vì sao T-bill 6 tháng không phải phi rủi ro cho dòng tiền 5 năm?', 'Có rủi ro tái đầu tư: không biết lãi suất sau 6 tháng.'],
    ['Lãi suất phi rủi ro khi định giá doanh nghiệp?', 'Lãi suất trái phiếu chính phủ dài hạn (khớp duration).'],
    ['Nguyên tắc nhất quán tiền tệ?', 'Lãi suất phi rủi ro phải cùng đồng tiền (và thực/danh nghĩa) với dòng tiền được định giá.'],
    ['Cách lấy lãi suất phi rủi ro thực?', 'Trái phiếu chỉ số hoá lạm phát; hoặc đồng nhất với Mỹ; hoặc bằng tăng trưởng thực dài hạn của nền kinh tế.'],
    ['Công thức ngang giá lãi suất?', 'Tỷ giá kỳ hạn = Tỷ giá giao ngay × [(1+ lãi suất nội tệ)/(1+ lãi suất USD)]^t.'],
    ['Cách khác ước tính lãi suất phi rủi ro nội tệ?', 'Lãi suất trái phiếu chính phủ trừ default spread theo xếp hạng quốc gia.'],
    ['Ba nguyên nhân phần bù lịch sử khác nhau?', 'Khoảng thời gian, chọn T-bill/T-bond, trung bình số học/hình học.'],
    ['Sai số chuẩn của phần bù lịch sử?', 'σ ÷ √n: với σ 20% thì 5 năm 8,94%, 50 năm 2,83%.'],
    ['Vì sao dùng trung bình hình học?', 'Lợi nhuận cổ phiếu tương quan âm theo thời gian; mô hình dùng cho kỳ dài.'],
    ['Thiên kiến người sống sót (survivor bias)?', 'Thị trường Mỹ là thị trường thắng nên phần bù lịch sử cao hơn kỳ vọng.'],
    ['Công thức phần bù thị trường mới nổi?', 'ERP trưởng thành + phần bù rủi ro quốc gia (nhân λ).'],
    ['Ba cách ước tính phần bù quốc gia?', 'Default spread của trái phiếu quốc gia; σ tương đối; spread × (σ cổ phiếu ÷ σ trái phiếu).'],
    ['Đếm trùng rủi ro quốc gia là gì?', 'Vừa dùng lãi suất trái phiếu quốc gia làm Rf, vừa cộng phần bù quốc gia, tăng beta, hạ dòng tiền.'],
    ['λ trong chi phí vốn là gì?', 'Mức tiếp xúc của công ty với rủi ro quốc gia (ví dụ theo tỷ trọng doanh thu nội địa).'],
    ['Phần bù hàm ý là gì?', 'Phần bù suy ra bằng cách giải ngược mô hình định giá với giá thị trường hiện tại.'],
    ['Phần bù hàm ý S&P 31/12/1999?', 'r = 8,56%, Rf = 6,5% ⇒ khoảng 2,06%.'],
    ['Default spread phụ thuộc gì?', 'Hạng tín nhiệm, kỳ hạn (tăng theo kỳ hạn) và chu kỳ kinh tế (tăng khi suy thoái).']
  ],
  quiz: [
    { q: 'Rf nào phù hợp nhất để định giá một doanh nghiệp đang hoạt động?', o: ['T-bill 3 tháng', 'Trái phiếu chính phủ dài hạn', 'Lãi suất tiền gửi', 'Lãi suất vay ngắn hạn'], a: 1, e: 'Duration dòng tiền rất dài.' },
    { q: 'Vì sao trái phiếu 5 năm có coupon không hoàn toàn phi rủi ro?', o: ['Có rủi ro vỡ nợ', 'Coupon phải tái đầu tư với lãi suất chưa biết', 'Có thuế', 'Có lạm phát'], a: 1, e: 'Chỉ zero-coupon mới không có rủi ro tái đầu tư.' },
    { q: 'Định giá bằng EUR thì lãi suất phi rủi ro cần:', o: ['Bằng USD', 'Bằng EUR', 'Bằng đồng tiền công ty đặt trụ sở', 'Bất kỳ'], a: 1, e: 'Phải cùng đồng tiền với dòng tiền.' },
    { q: 'Trái phiếu chính phủ Ấn Độ lãi suất 12%, xếp hạng A với spread điển hình 2%. Lãi suất phi rủi ro rupee:', o: ['14%', '12%', '10%', '2%'], a: 2, e: '12% − 2%.' },
    { q: 'Sai số chuẩn của phần bù ước tính trên 25 năm với σ = 20% là:', o: ['8,94%', '6,32%', '4,00%', '2,83%'], a: 2, e: '20 ÷ √25 = 4.' },
    { q: 'Nên dùng trung bình hình học cho phần bù vì:', o: ['Dễ tính', 'Lợi nhuận cổ phiếu tương quan âm theo thời gian và dùng cho kỳ dài', 'Luôn cao hơn', 'Luật yêu cầu'], a: 1, e: 'Số học sẽ đánh giá quá cao.' },
    { q: 'Nếu Rf là trái phiếu chính phủ dài hạn, phần bù lịch sử nên là:', o: ['CP − T-bill', 'CP − T-bond', 'CP − lạm phát', 'CP − tiền gửi'], a: 1, e: 'Nhất quán.' },
    { q: 'Phần bù lịch sử Mỹ 1928–2000 (hình học, so với T-bond) được sách dùng là:', o: ['8,41%', '7,17%', '5,51%', '4,52%'], a: 2, e: 'Kỳ dài, T-bond, hình học.' },
    { q: 'Cách ước tính phần bù quốc gia: default spread × (σ cổ phiếu ÷ σ trái phiếu). Brazil 4,83% × (30,64/15,28) =', o: ['4,83%', '9,69%', '2,41%', '15,28%'], a: 1, e: 'Phần bù thị trường mới nổi thực tế nhất ngắn hạn.' },
    { q: 'Công ty Aracruz bán 80% ra thị trường toàn cầu; λ thấp vì:', o: ['Beta thấp', 'Ít tiếp xúc rủi ro quốc gia nội địa', 'Có nhiều nợ', 'Nhỏ'], a: 1, e: 'Dòng tiền chủ yếu bằng USD toàn cầu.' },
    { q: 'Đếm trùng rủi ro quốc gia xảy ra khi:', o: ['Dùng Rf thấp', 'Dùng lãi suất trái phiếu nội địa chứa default spread làm Rf và còn cộng thêm phần bù quốc gia', 'Dùng beta thấp', 'Dùng nhiều năm dữ liệu'], a: 1, e: 'Rủi ro được tính nhiều lần.' },
    { q: 'Chỉ số 900, cổ tức kỳ sau 18 (2%), g = 7%. Lợi suất yêu cầu hàm ý:', o: ['2%', '7%', '9%', '14%'], a: 2, e: '18/(r−0,07) = 900 ⇒ r = 9%.' },
    { q: 'Phần bù hàm ý khác phần bù lịch sử ở chỗ:', o: ['Dựa trên giá thị trường hiện tại, thay đổi theo thời gian', 'Luôn cao hơn', 'Không cần mô hình', 'Chỉ dùng cho Mỹ'], a: 0, e: 'Cần mô hình định giá và dự báo tăng trưởng.' },
    { q: 'Default spread cùng hạng tín nhiệm có xu hướng:', o: ['Giảm khi kỳ hạn dài hơn', 'Tăng theo kỳ hạn và tăng khi suy thoái', 'Không đổi', 'Luôn bằng 0'], a: 1, e: 'Phải ước tính lại định kỳ.' }
  ],
  match: [
    ['Zero-coupon chính phủ', 'Tài sản phi rủi ro đúng cho một dòng tiền'],
    ['Duration matching', 'Khớp kỳ hạn Rf với dòng tiền'],
    ['Survivor bias', 'Thị trường Mỹ là thị trường “thắng”'],
    ['σ/√n', 'Sai số chuẩn của phần bù'],
    ['Country risk premium', 'Phần bù thêm cho thị trường mới nổi'],
    ['λ', 'Mức tiếp xúc rủi ro quốc gia của công ty'],
    ['Implied ERP', 'Giải ngược từ giá thị trường'],
    ['YTM', 'Lãi suất dùng để tính default spread'],
    ['Interest rate parity', 'Suy lãi suất nội tệ từ tỷ giá kỳ hạn'],
    ['TIPS', 'Trái phiếu chỉ số hoá lạm phát – Rf thực']
  ]
});
