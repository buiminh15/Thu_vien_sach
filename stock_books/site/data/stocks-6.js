// Understanding Stocks – Chương 13–14.
BOOK_DATA.stocks.chapters.push({
  n: 13,
  title: 'Tâm lý cổ phiếu: phân tích tâm lý thị trường',
  intro: 'Phân tích tâm lý (sentiment) nghiên cứu manh mối tâm lý để biết đám đông đang đầu tư vào đâu — rồi thường làm ngược lại. Chương còn nêu hai trò lừa phổ biến: pump and dump và giao dịch nội gián.',
  sections: [
    { icon: '🧠', title: 'Phân tích tâm lý và đám đông', blocks: [
      { t: 'key', x: '<b>Sentiment analysis</b> tìm xem “đám đông” (herd) đang đầu tư vào đâu để quyết định; thường bạn nên <b>làm ngược lại</b> (quan điểm đối kháng). Không rõ ràng bằng phân tích cơ bản/kỹ thuật nhưng quan trọng như nhau. Greenspan nói về “sự hưng phấn phi lý” năm 1996 — bốn năm trước khi thị trường bò kết thúc: tâm lý báo hiệu rồi vẫn mất thời gian mới xảy ra.' }
    ] },
    { icon: '🌡️', title: 'Bốn chỉ báo tâm lý', blocks: [
      { t: 'tabs', items: [
        ['VIX', '<p><b>Chicago Board Options Exchange Volatility Index</b> đo biến động thị trường qua hợp đồng quyền chọn S&amp;P 100. Là chỉ báo đối kháng: <b>VIX càng cao</b> (người mua quyền chọn bi quan) thì thị trường càng dễ đảo chiều tăng; <b>VIX càng thấp</b> (người mua lạc quan) càng dễ đảo chiều giảm. Lý do: ~90% người giao dịch quyền chọn thua tiền. Thường 20–30; &gt; 30 là bi quan, &lt; 20 là lạc quan. Đầu 2000 VIX xuống 18 ngay đỉnh bò; sau 11/9/2001 lên tới 50 — thời điểm mua tốt. Câu cũ: “VIX thấp thì đi (bán); VIX cao thì mua.” Nhưng VIX đôi khi đứng yên nhiều tháng.</p>'],
        ['Truyền thông', '<p>Khi điều gì đã lên báo, hãy làm ngược. Khách mời hào hứng về “nền kinh tế mới”, thị trường không thể dừng, Internet — là dấu hiệu sắp đảo chiều. Cũng xem chỉ số <b>Investor’s Intelligence</b> trên <i>Barron’s</i> (khảo sát tác giả bản tin): &gt; 55–60% lạc quan là dấu hiệu giảm; áp đảo bi quan là dấu hiệu tăng.</p>'],
        ['Rút tiền khỏi quỹ tương hỗ', '<p>Nhà đầu tư cá nhân bán quỹ tăng ⇒ vừa <b>giảm</b> (quỹ buộc bán cổ phiếu) vừa <b>tăng</b> (chuẩn bị giai đoạn capitulation tạo đáy). Theo dõi trên <i>Investor’s Business Daily</i> và báo hằng ngày.</p>'],
        ['Capitulation', '<p>Mọi người hoảng loạn bán sạch ⇒ sụp đổ; sau đó thị trường chạm đáy, tiền mặt vào mua cổ phiếu bị bỏ rơi giá “thanh lý”. Thị trường giảm ≥ 10% một ngày. Hai lần thế kỷ XX: 1929 (giảm 89%, 25 năm mới hồi) và 1987 (giảm > 20% một ngày, chỉ 1,5 năm hồi). Nếu giữ được bình tĩnh, đó là cơ hội mua.</p>']
      ] }
    ] },
    { icon: '🎣', title: 'Hai trò lừa đảo phổ biến', blocks: [
      { t: 'steps', items: [
        '<b>Pump and dump</b>: người trong cuộc dụ người ngoài mua cổ phiếu nhỏ OTC ($1–5) bằng phòng chat Internet, thông cáo báo chí quá lạc quan, điện thoại (“cơ hội một lần trong đời”). Giá tăng vì đầu cơ chứ không vì công ty tốt lên. Họ “dump” (bán hết) khi giá cao, sự thật lộ ra, giá sụp — người cả tin ôm cổ phiếu vô giá trị. Bất hợp pháp nhưng tăng vì Internet.',
        '<b>Giao dịch nội gián</b>: <b>hợp pháp</b> nếu nhân viên nộp hồ sơ SEC trước khi mua/bán cổ phiếu công ty; <b>bất hợp pháp</b> nếu mua/bán dựa trên thông tin chưa công khai (vd biết sản phẩm cách mạng sắp ra mắt) — kể cả bạn nghe từ hàng xóm là insider rồi mua. Tác giả ước tính hàng nghìn insider vẫn làm; SEC thỉnh thoảng bắt người nổi tiếng để răn đe.'
      ] }
    ] }
  ],
  summary: [
    'Phân tích tâm lý tìm xem đám đông làm gì rồi thường làm ngược lại.',
    'VIX là chỉ báo đối kháng: cao ⇒ mua, thấp ⇒ thận trọng.',
    'Truyền thông, khảo sát bản tin, rút tiền khỏi quỹ, capitulation đều là manh mối tâm lý.',
    'Pump and dump và giao dịch nội gián là các trò lừa/bất hợp pháp phổ biến.',
    'Tâm lý có thể báo trước nhưng thời điểm thì khó đoán (Greenspan 1996 → đỉnh 2000).'
  ],
  cards: [
    ['Sentiment analysis?', 'Nghiên cứu tâm lý đám đông để suy ra hướng thị trường.'],
    ['“Irrational exuberance”?', 'Hưng phấn phi lý — Greenspan nói năm 1996, đỉnh bò đến 2000.'],
    ['VIX?', 'Chỉ số biến động Chicago Board Options Exchange (qua quyền chọn S&P 100).'],
    ['VIX cao nghĩa là?', 'Người mua quyền chọn bi quan ⇒ thị trường dễ đảo chiều tăng.'],
    ['Vì sao VIX là chỉ báo đối kháng?', '~90% người giao dịch quyền chọn thua, nên làm ngược họ.'],
    ['VIX thông thường?', 'Khoảng 20–30; > 30 bi quan, < 20 lạc quan.'],
    ['Câu về VIX?', 'VIX thấp thì đi; VIX cao thì mua.'],
    ['Truyền thông là chỉ báo thế nào?', 'Khi mọi người hào hứng trên báo/TV, hãy cẩn thận hoặc làm ngược.'],
    ['Investor’s Intelligence?', 'Khảo sát tác giả bản tin trên Barron’s; > 55–60% lạc quan là dấu hiệu giảm.'],
    ['Rút tiền khỏi quỹ tăng nghĩa là?', 'Vừa bearish (buộc bán) vừa chuẩn bị đáy (capitulation).'],
    ['Capitulation?', 'Hoảng loạn bán tháo cực độ, tạo đáy thị trường.'],
    ['Pump and dump?', 'Thổi giá bằng tin sai rồi bán hết cho người ngoài.'],
    ['Giao dịch nội gián hợp pháp vs bất hợp pháp?', 'Hợp pháp khi khai báo SEC; bất hợp pháp khi dựa trên thông tin chưa công khai.']
  ],
  quiz: [
    { q: 'VIX cực cao thường là tín hiệu:', o: ['Thị trường sắp giảm tiếp', 'Thị trường có thể đảo chiều tăng', 'Không có ý nghĩa', 'Cổ tức tăng'], a: 1, e: 'Nhà đầu tư quá bi quan.' },
    { q: 'VIX sau 11/9/2001 lên tới:', o: ['10', '20', '30', '50'], a: 3, e: 'Thời điểm mua tốt ngắn hạn.' },
    { q: 'Vì sao VIX là chỉ báo đối kháng?', o: ['Quyền chọn đắt', '90% người giao dịch quyền chọn thua', 'Thị trường luôn đi ngược', 'Luật'], a: 1, e: 'Làm ngược đám đông.' },
    { q: 'Khảo sát newsletter > 55–60% lạc quan là:', o: ['Dấu hiệu tăng', 'Dấu hiệu giảm', 'Không có ý nghĩa', 'Dấu hiệu chia tách'], a: 1, e: 'Quá lạc quan.' },
    { q: 'Capitulation là khi:', o: ['Mọi người mua', 'Mọi người hoảng loạn bán sạch', 'Thị trường đi ngang', 'Lãi suất tăng'], a: 1, e: 'Thường tạo đáy.' },
    { q: 'Thị trường hồi phục sau 1987 trong:', o: ['1 tháng', '1,5 năm', '25 năm', '10 năm'], a: 1, e: '1929 mất 25 năm.' },
    { q: 'Pump and dump thường nhắm cổ phiếu giá:', o: ['> $100', '$1–$5', 'Blue-chip', 'ETF'], a: 1, e: 'Dễ thao túng.' },
    { q: 'Giao dịch nội gián bất hợp pháp khi:', o: ['Nộp hồ sơ SEC', 'Dựa trên thông tin chưa công khai', 'Mua cổ phiếu công ty mình', 'Mua dài hạn'], a: 1, e: 'Kể cả người nghe tin từ insider.' },
    { q: 'Greenspan nói “irrational exuberance” năm:', o: ['1987', '1996', '2000', '2002'], a: 1, e: '4 năm trước đỉnh.' },
    { q: 'Rút tiền khỏi quỹ vừa bearish vừa:', o: ['Bullish vì dẫn tới capitulation tạo đáy', 'Không đổi', 'Vô nghĩa', 'Chỉ giảm'], a: 0, e: 'Hai cách nhìn.' }
  ],
  match: [
    ['VIX', 'Chỉ số biến động, đối kháng'],
    ['Capitulation', 'Bán tháo hoảng loạn tạo đáy'],
    ['Pump and dump', 'Thổi giá rồi bán hết'],
    ['Insider trading', 'Giao dịch dựa trên thông tin chưa công khai'],
    ['Herd', 'Đám đông nhà đầu tư'],
    ['Investor’s Intelligence', 'Khảo sát tác giả newsletter'],
    ['1987', 'Giảm hơn 20% một ngày']
  ]
});

BOOK_DATA.stocks.chapters.push({
  n: 14,
  title: 'Điều gì khiến cổ phiếu tăng hay giảm',
  intro: 'Thị trường ghét sự bất định. Chương này xét tác động của Fed, đồng đô la, lạm phát, giảm phát, các chỉ số kinh tế, chính trị — và cuối cùng là cung cầu cùng nhận thức.',
  sections: [
    { icon: '🏦', title: 'Cục Dự trữ Liên bang (Fed)', blocks: [
      { t: 'key', x: 'Fed giám sát nền kinh tế (lạm phát/giảm phát) và kiểm soát cung tiền; công cụ trực tiếp ảnh hưởng thị trường là <b>tăng hoặc giảm lãi suất</b> (bằng cách mua/bán chứng khoán kho bạc). <b>Hạ lãi suất</b> ⇒ vay rẻ hơn ⇒ mua nhà, đồ đạc ⇒ chi tiêu tăng ⇒ thị trường thường lên; <b>tăng lãi suất</b> ⇒ thị trường thường giảm.' },
      { t: 'list', items: [
        'Thập niên 1990 Fed tăng lãi suất từng 1/4–1/2 điểm để “chọc thủng” bò phi lý; thị trường lờ đi cho tới đầu 2000 rồi Nasdaq giảm hàng nghìn điểm; Fed lại hạ lãi suất gấp.',
        'Câu “Đừng chống lại Fed” lần này không hiệu quả như xưa; lãi suất thấp lại làm thị trường bất động sản bùng nổ, nhiều người tái tài trợ nhà.',
        'Thị trường hay đi trước quyết định của Fed. Về nguyên tắc Fed không quan tâm thị trường chứng khoán nhưng thực tế có theo dõi.'
      ] }
    ] },
    { icon: '💵', title: 'Đồng đô la và lạm phát', blocks: [
      { t: 'table', head: ['Yếu tố', 'Tác động'], rows: [
        ['<b>Đô la mạnh</b>', 'Nhà đầu tư nước ngoài mua kho bạc và cổ phiếu Mỹ; nhưng hàng Mỹ đắt với người nước ngoài, du lịch Mỹ đắt'],
        ['<b>Đô la yếu</b>', 'Người nước ngoài rút tiền (bị “đánh hai lần”: cổ phiếu giảm và tiền tệ mất giá) ⇒ thị trường giảm; nhưng nhà sản xuất Mỹ xuất khẩu dễ hơn. 2002 đô la giảm là manh mối họ có thể rút vốn'],
        ['<b>Lạm phát</b>', 'Mức tăng giá hằng năm (hamburger McDonald’s 10 xu 1959 → $1,20; vé xem phim 25 xu 1960 → $10). Lạm phát quá cao không tốt, Fed tăng lãi suất ⇒ bất lợi cổ phiếu. Kinh tế gia hài lòng nếu ≤ 3–4% (năm 1980 từng 18%). Cổ phiếu trả trung bình 11%/năm, thắng lạm phát; lạm phát tăng có thể là lúc chuyển một phần sang tiền gửi thị trường tiền tệ hoặc tín phiếu ngắn hạn']
      ] }
    ] },
    { icon: '📊', title: 'Các chỉ số kinh tế', blocks: [
      { t: 'table', head: ['Chỉ số', 'Đo gì', 'Ghi chú'], rows: [
        ['<b>CPI</b>', 'Giá hàng ngày (thực phẩm, nhà ở, quần áo) — “số lạm phát”/chỉ số giá sinh hoạt', 'CPI tăng ⇒ lạm phát tăng'],
        ['<b>PPI</b>', 'Giá hàng hoá, nguyên liệu (thép, nhôm)', 'Giá nguyên liệu tăng ⇒ người tiêu dùng trả nhiều hơn'],
        ['<b>Báo cáo thất nghiệp</b>', 'Do Bộ Lao động công bố', '< 6% nhiều việc; > 6% khó tìm việc. Thị trường thích CPI–PPI thấp và thất nghiệp giảm'],
        ['<b>GDP</b>', 'Tổng giá trị hàng hoá dịch vụ (hằng quý)', '> 3% là đúng hướng; âm hai quý trở lên = suy thoái']
      ] }
    ] },
    { icon: '📉', title: 'Giảm phát và chính trị', blocks: [
      { t: 'key', x: '<b>Giảm phát (deflation)</b>: cung tiền và tín dụng thu hẹp, giá giảm. Nghe tốt nhưng công ty cắt nhân sự, giá bất động sản giảm (người vay không trả được), thị trường chịu giai đoạn khó; người có tiền chờ giá giảm thêm. Hiếm ở Mỹ (Nhật Bản kéo dài nhiều năm). Phòng ngừa: <b>thoát nợ</b> (thẻ tín dụng, vay xe, thế chấp — hỏi cố vấn thuế) và tiết kiệm nhiều hơn; ai có nhiều tiền mặt sẽ thịnh vượng. (Robert Prechter, <i>Conquer the Crash</i>.)' },
      { t: 'p', x: '<b>Chính trị</b>: bài phát biểu của tổng thống, thuế cao hơn, luật mới đều ảnh hưởng, nhưng phản ứng phụ thuộc cách Phố Wall diễn giải — thị trường dựa vào <b>nhận thức và tâm lý</b> hơn thực tế.' }
    ] },
    { icon: '⚖️', title: 'Cung cầu và nhận thức', blocks: [
      { t: 'list', items: [
        'Lý do hiển nhiên nhất: công ty kiếm tiền (hoặc có thể kiếm) ⇒ nhiều người mua ⇒ giá lên. <b>Nhiều người mua hơn bán ⇒ tăng; nhiều người bán hơn mua ⇒ giảm</b> — “Capitalism 101”. Lời giải thích cuối ngày của chuyên gia thường ít liên quan điều xảy ra thật.',
        'Giá thường đi theo <b>nhận thức</b>: vì vậy công ty chi nhiều cho quảng cáo, cổ đông gửi email hay đăng bài phòng chat.',
        'Tâm trạng đất nước và nền kinh tế: tin tưởng cải thiện ⇒ đầu tư; thị trường gấu kéo dài vì lo khủng bố, chiến tranh, suy thoái.',
        'Thị trường ghét bất định; có chuyên gia cho rằng hiểu môi trường đầu tư quan trọng hơn chọn đúng cổ phiếu.'
      ] }
    ] }
  ],
  summary: [
    'Thị trường ghét bất định: chiến tranh, khủng bố, suy thoái làm nhà đầu tư chạy sang tiền mặt, vàng, BĐS.',
    'Hạ lãi suất của Fed thường đẩy thị trường lên, tăng lãi suất kéo xuống.',
    'Đô la mạnh/yếu, lạm phát, CPI, PPI, thất nghiệp, GDP là các chỉ số cần theo dõi.',
    'Giảm phát hiếm nhưng nguy hiểm; hãy giảm nợ và tăng tiết kiệm.',
    'Cuối cùng giá do cung cầu và nhận thức.'
  ],
  cards: [
    ['Fed làm gì với lãi suất?', 'Mua/bán chứng khoán kho bạc để điều chỉnh lãi suất.'],
    ['Hạ lãi suất tác động?', 'Vay rẻ ⇒ chi tiêu tăng ⇒ thị trường thường lên.'],
    ['“Don’t fight the Fed”?', 'Đừng đi ngược chính sách của Fed (không phải lúc nào cũng đúng).'],
    ['Đô la yếu ảnh hưởng thị trường?', 'Người nước ngoài rút tiền ⇒ thị trường giảm; xuất khẩu Mỹ lợi.'],
    ['Lạm phát?', 'Mức giá hàng hoá dịch vụ tăng hằng năm.'],
    ['Mức lạm phát kinh tế gia chấp nhận?', 'Không quá 3–4%.'],
    ['CPI?', 'Chỉ số giá tiêu dùng, “số lạm phát”.'],
    ['PPI?', 'Chỉ số giá nhà sản xuất (nguyên liệu).'],
    ['Thất nghiệp thấp thế nào?', 'Dưới 6% là nhiều việc làm.'],
    ['GDP?', 'Tổng sản phẩm quốc nội, đo sản lượng hàng hoá dịch vụ; > 3% là tốt.'],
    ['Suy thoái?', 'Hai quý trở lên GDP âm.'],
    ['Giảm phát?', 'Cung tiền và tín dụng thu hẹp, giá giảm; công ty sa thải, thị trường khó khăn.'],
    ['Cách phòng giảm phát?', 'Thoát nợ, tiết kiệm nhiều, giữ tiền mặt.'],
    ['Nguyên nhân cơ bản giá tăng/giảm?', 'Cung cầu: nhiều người mua hơn bán thì giá tăng.']
  ],
  quiz: [
    { q: 'Fed hạ lãi suất thì thị trường thường:', o: ['Giảm', 'Tăng', 'Không đổi', 'Đóng cửa'], a: 1, e: 'Vay rẻ, chi tiêu tăng.' },
    { q: 'Đô la yếu gây ra:', o: ['Người nước ngoài đổ tiền vào', 'Người nước ngoài rút tiền khỏi thị trường', 'Giảm xuất khẩu', 'Giảm lạm phát'], a: 1, e: 'Bị “đánh hai lần”.' },
    { q: 'CPI đo:', o: ['Giá nguyên liệu', 'Giá hàng ngày của người tiêu dùng', 'GDP', 'Thất nghiệp'], a: 1, e: 'PPI là nguyên liệu.' },
    { q: 'Thất nghiệp trên 6% nghĩa là:', o: ['Nhiều việc làm', 'Việc làm khan hiếm', 'Lạm phát cao', 'GDP > 3%'], a: 1, e: 'Thị trường thích thất nghiệp giảm.' },
    { q: 'Suy thoái được định nghĩa là:', o: ['Một quý GDP âm', 'Hai quý trở lên GDP âm', 'Lạm phát > 4%', 'Thất nghiệp > 6%'], a: 1, e: 'Theo sách.' },
    { q: 'Giảm phát có đặc điểm:', o: ['Giá tăng nhanh', 'Cung tiền và tín dụng thu hẹp', 'Việc làm tăng', 'Đô la mạnh'], a: 1, e: 'Công ty sa thải, BĐS giảm.' },
    { q: 'Cách phòng giảm phát:', o: ['Vay thêm', 'Thoát nợ và tiết kiệm', 'Dùng margin', 'Mua penny stock'], a: 1, e: 'Người có tiền mặt thịnh vượng.' },
    { q: 'Điều thị trường ghét nhất:', o: ['Lãi suất thấp', 'Bất định', 'Cổ tức', 'Lợi nhuận tăng'], a: 1, e: 'Chiến tranh, suy thoái…' },
    { q: 'Giá cổ phiếu tăng khi:', o: ['Nhiều người bán hơn mua', 'Nhiều người mua hơn bán', 'Fed im lặng', 'Luôn luôn'], a: 1, e: 'Cung cầu.' },
    { q: 'Vì sao công ty chi nhiều cho quảng cáo?', o: ['Giá phụ thuộc nhận thức', 'Luật yêu cầu', 'Giảm thuế', 'Tăng cổ tức'], a: 0, e: 'Nhận thức quyết định giá.' }
  ],
  match: [
    ['Fed', 'Điều chỉnh lãi suất, cung tiền'],
    ['CPI', 'Giá tiêu dùng'],
    ['PPI', 'Giá nguyên liệu'],
    ['GDP', 'Tổng sản lượng kinh tế'],
    ['Giảm phát', 'Cung tiền và tín dụng thu hẹp'],
    ['Đô la yếu', 'Người nước ngoài rút tiền'],
    ['Cung cầu', 'Nguyên nhân gần nhất của biến động giá']
  ]
});
