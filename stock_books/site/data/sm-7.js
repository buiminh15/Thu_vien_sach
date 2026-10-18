// Streetsmart Guide to Valuing a Stock – Chương 8.
BOOK_DATA.streetsmart.chapters.push({
  n: 8,
  title: 'Định giá cổ phiếu: ghép tất cả lại',
  intro: 'Bốn ví dụ cuối: Citigroup, Merrill Lynch, Berkshire Hathaway (công ty tài chính/danh mục) và Washington REIT. Mỗi công ty được định giá theo kịch bản cơ sở (tăng trưởng đồng thuận), rồi giảm tăng trưởng, đổi NOPM, đổi lãi suất để ra một khoảng giá trị và khuyến nghị mua/giữ/bán (giả định, chỉ để học).',
  sections: [
    { icon: '🏦', title: 'Điều chỉnh khi định giá công ty tài chính', blocks: [
      { t: 'p', x: 'Với công ty công nghiệp, lãi vay và thu nhập đầu tư nằm ngoài NOP. Với <b>công ty tài chính</b> (ngân hàng, bảo hiểm…), thu nhập lãi/cổ tức là doanh thu chính và chi phí lãi là chi phí lớn nhất nên phải chỉnh phương pháp:' },
      { t: 'steps', items: [
        '<b>Thu nhập hoạt động</b>: doanh thu gồm cả thu nhập lãi, cổ tức, đầu tư; chi phí gồm cả chi phí lãi.',
        '<b>Tỷ lệ chiết khấu</b>: vì chi phí lãi đã trừ trong NOP, dòng tiền sau thuế thuộc về cổ đông ưu đãi và thường ⇒ WACC = chi phí vốn cổ phần. Cách làm: đưa nợ dài hạn vào “nợ ngắn hạn” và nhập nợ = 0.',
        '<b>Đầu tư và khấu hao</b>: PP&amp;E nhỏ, nhưng nếu tăng trưởng bằng mua lại doanh nghiệp thì tính chi phí mua vào tỷ lệ đầu tư.',
        '<b>Bảng cân đối</b>: không chia ngắn/dài hạn ⇒ tài sản ngắn hạn = tổng tài sản − lợi thế thương mại − tài sản vô hình − tài sản đáng ngờ − PP&amp;E.',
        '<b>Vốn lưu động tăng thêm = 0</b>: vốn lưu động chính là hoạt động kinh doanh của công ty tài chính.'
      ] },
      { t: 'tip', x: 'Mua bán tiền là kinh doanh cực kỳ cạnh tranh ⇒ giả định tăng trưởng quá cao cần nghi ngờ.' }
    ] },
    { icon: '🏢', title: 'Citigroup (17/12/2002): giá $37,13', blocks: [
      { t: 'table', head: ['Đầu vào', 'Giá trị'], rows: [
        ['Doanh thu 2001', '$112,022 tỷ (CAGR 1997–2001: 8,6%)'],
        ['Tăng trưởng đồng thuận (Zacks, 19 nhà phân tích)', '14,5%/năm (8 strong buy, 10 buy, 1 strong sell)'],
        ['NOPM (TB 3 năm)', '19,23% (9 tháng 2002: 24,19%)'],
        ['Thuế', '35,3%'],
        ['Đầu tư (mua doanh nghiệp)', '6,76% doanh thu; khấu hao 2,26%'],
        ['VLĐ tăng thêm', '0'],
        ['Tài sản/nợ ngắn hạn', '$1.000,6 tỷ / $950,8 tỷ (đã gồm nợ dài hạn $109 tỷ)'],
        ['Cổ phiếu pha loãng', '5,168 tỷ; ưu đãi $1,4 tỷ, lợi suất 6,5%'],
        ['Rf / β / ERP', '4,11% / 1,48 / 3% ⇒ chi phí vốn cổ phần 8,54%']
      ] },
      { t: 'table', head: ['Kịch bản', 'Giá trị nội tại', 'So với giá $37,13'], rows: [
        ['Cơ sở: tăng trưởng 14,5%', '$88,03', 'Hơn gấp đôi'],
        ['Giảm dần 14,5% → 5% (−1 điểm/năm)', '$66,13', '−25% so với cơ sở'],
        ['Thấp: 5% không đổi', '$47,13', 'Tỷ lệ giá trị/giá = 1,27']
      ] },
      { t: 'key', x: 'Dù giả định bảo thủ (5%), giá trị vẫn cao hơn giá ⇒ <b>strong buy</b> (giả định). Giá thấp do lo ngại Enron, kiện tụng và phạt về nghiệp vụ bảo lãnh viễn thông của Salomon — sách cho là tạm thời.' }
    ] },
    { icon: '💼', title: 'Merrill Lynch (18/12/2002): giá $40,13', blocks: [
      { t: 'list', items: [
        'Doanh thu 2001 $38,757 tỷ; doanh thu quý 3/2002 giảm gần 30% (lãi suất giảm, vụ 11/9; trụ sở cách tòa Tháp Đôi 200 yard). Đồng thuận tăng trưởng 13%.',
        'NOPM 3,55% / 12,75% / 11,9% ⇒ TB 9,4% (9 tháng 2002: 12,96%). Thuế 35,33%; đầu tư 4,4%, khấu hao 2,08%; VLĐ = 0.',
        'Tài sản ngắn hạn $409,997 tỷ; nợ ngắn hạn $396,7 tỷ (gồm nợ dài hạn $76,575 tỷ); 942 triệu cổ phiếu pha loãng; ưu đãi $1,4 tỷ @7,6%; Rf 4,06%; β 1,52 ⇒ chi phí vốn cổ phần 8,53%.'
      ] },
      { t: 'table', head: ['Kịch bản', 'Giá trị', 'Tỷ lệ giá trị/giá'], rows: [
        ['Cơ sở: tăng trưởng 13%', '$72,50', '1,81'],
        ['Thấp: 5%', '$43,83', '1,09'],
        ['Thấp + NOPM 12%', '$55,19', '1,375']
      ] },
      { t: 'p', x: 'Kết luận <b>buy</b>: mua Merrill là cược vào <b>sự phục hồi hoạt động</b> (NOPM trở lại &gt; 12%). Ở giá ≤ $40 sách coi là mua.' }
    ] },
    { icon: '🧓', title: 'Berkshire Hathaway (18/12/2002): giá $72.000', blocks: [
      { t: 'p', x: 'Công ty cổ phần nắm bảo hiểm (GEICO, General Re), Shaw, v.v.; cũng là “công ty danh mục” giữ cổ phiếu Coca-Cola ($9,6 tỷ), American Express ($4,7 tỷ), Gillette, Wells Fargo — không chia cổ tức, không mua lại cổ phiếu. Vốn hoá $108,7 tỷ; P/E 34; 1,74 lần giá trị sổ sách.' },
      { t: 'list', items: [
        'Doanh thu 2001 $37,668 tỷ; đồng thuận tăng trưởng 11%; NOPM 10,2% / 16,4% / 3,9% ⇒ TB 10,2% (9 tháng 2002: 14,41%); thuế 37,7%; đầu tư (mua doanh nghiệp) 8,09%, khấu hao 2,88%; VLĐ = 0.',
        'Tài sản ngắn hạn $133,682 tỷ; nợ ngắn hạn $105,132 tỷ; 1.527.234 cổ phiếu; Rf 4,06%; <b>β = 0,54</b> ⇒ chi phí vốn cổ phần 5,68%.'
      ] },
      { t: 'table', head: ['Kịch bản', 'Giá trị'], rows: [
        ['Cơ sở: g 11%, NOPM 10,2%', '$70.330 (−2% so với giá)'],
        ['g 11%, NOPM 14%, Rf 5,06%', '$80.627'],
        ['g 7%, NOPM 14%, Rf 5,06%', '$63.028 (−10% so với giá)']
      ] },
      { t: 'key', x: 'Giá $72.000 nằm giữa $63.028 và $80.627 ⇒ <b>hold</b>: công ty tuyệt vời, quản lý tuyệt vời, nhưng giá không phải món hời.' }
    ] },
    { icon: '🏘️', title: 'Định giá REIT: Washington REIT (20/12/2002)', blocks: [
      { t: 'p', x: 'REIT như quỹ tương hỗ bất động sản; giá liên hệ thuận với giá bất động sản và nghịch với lãi suất; nếu đạt điều kiện thì không đóng thuế doanh nghiệp (cổ đông chịu thuế cổ tức; thường giữ trong tài khoản ưu đãi thuế). Bốn điều chỉnh:' },
      { t: 'steps', items: [
        '<b>NOP</b> = thu nhập từ bất động sản (đã trừ khấu hao) − chi phí quản lý; bỏ thu nhập khác, lãi bán bất động sản, chi phí lãi.',
        '<b>Thuế = 0</b> (nếu đạt điều kiện REIT).',
        '<b>Khấu hao và đầu tư cao</b> hơn các ngành khác (mua và cải tạo tài sản).',
        '<b>Điều chỉnh beta</b>: Yahoo cho β = 0,01 do hồi quy với S&amp;P 500 ⇒ thấp giả tạo. Dùng <b>β = 0,80</b> (Damodaran: hồi quy văn phòng với danh mục thị trường có bất động sản).'
      ] },
      { t: 'table', head: ['Đầu vào WRE', 'Giá trị'], rows: [
        ['Doanh thu 2001 / tăng trưởng', '$148,4 triệu / 5,5% (Multex 5,5%, Yahoo 8%)'],
        ['NOPM (TB 3 năm)', '49,09%'],
        ['Đầu tư / khấu hao', '47,11% / 17,11%'],
        ['VLĐ tăng thêm', '−8,05% (tiền đặt cọc, thuê trả trước)'],
        ['Nợ / spread / Rf', '$405,9 triệu / 2,5% / 3,96% ⇒ WACC 6,39%'],
        ['Cổ phiếu / giá', '39,358 triệu / $25,55']
      ] },
      { t: 'table', head: ['Kịch bản', 'Giá trị', 'Ghi chú'], rows: [
        ['Cơ sở', '$24,04', 'Tỷ lệ 0,94 ⇒ hơi định giá cao'],
        ['WACC +0,25%/năm trong 5 năm (6,39% → 7,64%)', '$16,85', '−30% (−$7,43)']
      ] },
      { t: 'warn', x: 'Chỉ nhích lãi suất 1,25 điểm đã cắt 30% giá trị ⇒ nhạy cảm cực mạnh với lãi suất (nhớ chương 6). Kết luận: <b>weak sell</b> — rủi ro giảm lớn hơn tiềm năng tăng.' }
    ] },
    { icon: '🎯', title: 'Bài học rút ra', blocks: [
      { t: 'table', head: ['Cổ phiếu', 'Giá', 'Khoảng giá trị', 'Khuyến nghị (giả định)'], rows: [
        ['Citigroup', '$37,13', '$47,13–$88,03', 'Strong buy'],
        ['Merrill Lynch', '$40,13', '$43,83–$72,50', 'Buy (cược phục hồi)'],
        ['Berkshire', '$72.000', '$63.028–$80.627', 'Hold'],
        ['Washington REIT', '$25,55', '$16,85–$24,04', 'Weak sell']
      ] },
      { t: 'list', items: [
        'Định giá cho <b>khoảng</b> giá trị, không phải một con số; xem đầu vào nào quan trọng nhất cho từng công ty (tăng trưởng với Citigroup, NOPM với Merrill, lãi suất với REIT).',
        'Nhà phân tích thường quá lạc quan ⇒ luôn có kịch bản tăng trưởng thấp (5%).',
        'Tỷ lệ giá trị/giá &gt; 1 là mua; &lt; 1 là bị định giá cao.',
        'Đây là <b>xếp hạng giả định</b>, dùng thông tin lỗi thời — đừng mua bán theo định giá của ai ngoài chính bạn.'
      ] },
      { t: 'widget', name: 'fcff-dcf', title: 'Tự định giá: thử đổi tăng trưởng, NOPM, WACC để xem khoảng giá trị' }
    ] }
  ],
  summary: [
    'Công ty tài chính: gộp lãi vào NOP, nợ vào nợ ngắn hạn, VLĐ = 0, WACC ≈ chi phí vốn cổ phần.',
    'REIT: thuế 0, đầu tư/khấu hao cao, beta chỉnh (0,8), rất nhạy với lãi suất.',
    'Citigroup $47–$88 vs $37,13 ⇒ strong buy; Merrill $44–$73 vs $40,13 ⇒ buy; Berkshire $63k–$81k vs $72k ⇒ hold; WRE $16,85–$24,04 vs $25,55 ⇒ weak sell.',
    'Luôn định giá theo khoảng bằng cách đổi tăng trưởng, NOPM và WACC.',
    'Xếp hạng chỉ mang tính minh họa — hãy tự làm phân tích của mình.'
  ],
  cards: [
    ['Công ty tài chính tính NOP khác gì?', 'Doanh thu gồm thu nhập lãi/cổ tức/đầu tư; chi phí gồm chi phí lãi.'],
    ['Vì sao nợ của công ty tài chính nhập vào nợ ngắn hạn?', 'Chi phí lãi đã trừ trong NOP ⇒ WACC = chi phí vốn cổ phần.'],
    ['VLĐ tăng thêm của công ty tài chính?', '0.'],
    ['Tài sản ngắn hạn của công ty tài chính?', 'Tổng tài sản − lợi thế thương mại − vô hình − PP&E − tài sản đáng ngờ.'],
    ['Citigroup: ba kịch bản?', '$88,03 (14,5%), $66,13 (giảm dần), $47,13 (5%) so với $37,13.'],
    ['Merrill: giá trị khi NOPM 12%?', '$55,19 (tỷ lệ 1,375).'],
    ['Berkshire: khoảng giá trị?', '$63.028–$80.627, giá $72.000 ⇒ hold.'],
    ['Beta của Berkshire?', '0,54 ⇒ chi phí vốn cổ phần 5,68%.'],
    ['Điều chỉnh của REIT?', 'Thuế 0; đầu tư/khấu hao cao; chỉnh beta; NOP từ thu nhập bất động sản.'],
    ['Beta REIT dùng bao nhiêu?', '0,80 (Yahoo cho 0,01 giả tạo).'],
    ['WRE khi lãi suất +1,25 điểm?', 'Giá trị còn $16,85 (−30%).'],
    ['Tỷ lệ giá trị/giá dùng thế nào?', '> 1 mua, < 1 định giá cao.'],
    ['Vì sao luôn dùng kịch bản 5%?', 'Nhà phân tích lạc quan; công ty lớn khó tăng trưởng cao mãi.'],
    ['Các xếp hạng trong sách là gì?', 'Giả định, lỗi thời; đừng dựa vào định giá của người khác.'],
    ['Merrill là cược vào điều gì?', 'Sự phục hồi hoạt động (NOPM > 12%).']
  ],
  quiz: [
    { q: 'WACC công ty tài chính xấp xỉ:', o: ['Chi phí nợ sau thuế', 'Chi phí vốn cổ phần', 'Rf', 'Không xác định'], a: 1, e: 'Nợ đã nằm trong NOP.' },
    { q: 'VLĐ tăng thêm của công ty tài chính:', o: ['10%', '0', '−8%', 'Bằng doanh thu'], a: 1, e: 'Vốn lưu động là hoạt động kinh doanh.' },
    { q: 'Citigroup giá trị cơ sở (g 14,5%):', o: ['$47,13', '$66,13', '$88,03', '$37,13'], a: 2, e: 'Hơn gấp đôi giá.' },
    { q: 'Citigroup với 5%: tỷ lệ giá trị/giá:', o: ['0,94', '1,27', '1,81', '2,0'], a: 1, e: '47,13/37,13.' },
    { q: 'Merrill kịch bản thấp + NOPM 12%:', o: ['$43,83', '$55,19', '$72,50', '$40,13'], a: 1, e: 'Tỷ lệ 1,375.' },
    { q: 'Berkshire hold vì:', o: ['Giá thấp hơn mọi kịch bản', 'Giá nằm giữa khoảng giá trị', 'Giá cao hơn mọi kịch bản', 'Có cổ tức'], a: 1, e: '$63k–$81k so với $72k.' },
    { q: 'Beta WRE sách dùng:', o: ['0,01', '0,80', '1,48', '1,0'], a: 1, e: 'Beta REIT thường thấp giả tạo.' },
    { q: 'Thuế suất REIT:', o: ['35%', '0', '15%', '30%'], a: 1, e: 'Nếu đạt điều kiện.' },
    { q: 'WACC WRE tăng 0,25%/năm trong 5 năm thì giá trị:', o: ['$24,04', '$16,85', '$30', '$25,55'], a: 1, e: '−30%.' },
    { q: 'Tỷ lệ giá trị/giá của WRE cơ sở:', o: ['0,94', '1,27', '1,375', '2'], a: 0, e: '24,04/25,55.' },
    { q: 'Lý do thận trọng với tăng trưởng đồng thuận:', o: ['Nhà phân tích thường lạc quan', 'Luôn thấp', 'Không liên quan', 'Cố định'], a: 0, e: 'Kỳ vọng thường vượt thực tế.' },
    { q: 'Xếp hạng trong sách:', o: ['Lời khuyên mua bán', 'Giả định để học', 'Tư vấn pháp lý', 'Chính thức'], a: 1, e: 'Dùng phân tích của chính bạn.' }
  ],
  match: [
    ['Citigroup', 'Strong buy (giả định)'],
    ['Merrill Lynch', 'Buy – cược phục hồi NOPM'],
    ['Berkshire', 'Hold – giá giữa khoảng giá trị'],
    ['Washington REIT', 'Weak sell – nhạy lãi suất'],
    ['Công ty tài chính', 'WACC = chi phí vốn cổ phần'],
    ['REIT', 'Thuế 0, beta chỉnh 0,8'],
    ['Tỷ lệ giá trị/giá', '> 1 là mua']
  ]
});
