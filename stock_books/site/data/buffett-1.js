// "Phong cách đầu tư Warren Buffett" – Robert G. Hagstrom. Chương 1–2.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.buffett = BOOK_DATA.buffett || { chapters: [] };
BOOK_DATA.buffett.chapters.push(

/* ======================= CHƯƠNG 1 ======================= */
{
  n: 1,
  title: 'Nhà đầu tư vĩ đại nhất thế giới',
  intro: 'Warren Buffett là ai, đã làm giàu bằng cách nào và vì sao thành tích của ông đáng để học: từ cậu bé mê con số ở Omaha, công ty hợp danh đầu tư, đến Berkshire Hathaway.',
  sections: [
    { icon: '🏆', title: 'Người giàu duy nhất nhờ biết đầu tư', blocks: [
      { t: 'p', x: 'Hằng năm tạp chí <b>Forbes</b> công bố danh sách <b>400 người Mỹ giàu nhất</b>. Hầu hết những tên đứng đầu là siêu tỷ phú nhờ một sản phẩm (phần mềm, phần cứng), một dịch vụ (bán lẻ) hoặc thừa kế may mắn. Trong top 5 chỉ có <b>một người</b> làm giàu nhờ khả năng thấu hiểu đầu tư: <b>Warren Buffett</b>.' },
      { t: 'list', items: [
        'Đầu thập niên 1990 ông đứng số 1, sau đó dao động vị trí 1–2 với <b>Bill Gates</b>.',
        'Giữa cơn sốt dot.com năm 2000 — khi gần hết người giàu nhờ công nghệ vươn lên — Buffett, người tránh xa mọi thứ liên quan công nghệ cao, vẫn vững ở vị trí thứ 4; năm 2004 ông trở lại vị trí thứ 2.',
        '<b>Năm 1956</b>: bắt đầu với <b>100 đô la</b>; sau 30 năm ông có 25 triệu đô la. Giữa năm 2004, tài sản ròng cá nhân <b>42,9 tỷ đô la</b>, mỗi cổ phiếu công ty ông đứng ở mức <b>92.900 đô la</b>.'
      ] },
      { t: 'widget', name: 'compound', title: 'Sức mạnh của lãi kép: thử với tỷ lệ của Buffett' }
    ] },
    { icon: '🧒', title: 'Khởi nghiệp đầu tư', blocks: [
      { t: 'steps', items: [
        '<b>30/8/1930</b>: Warren Edward Buffett sinh ra ở Omaha, Nebraska. Ông nội chủ cửa hàng tạp hóa (từng thuê chàng trai trẻ <b>Charlie Munger</b>), cha là nhà môi giới chứng khoán địa phương.',
        'Ham mê con số từ nhỏ: 8 tuổi đọc sách về thị trường chứng khoán của cha; 11 tuổi chép bảng niêm yết giá cổ phiếu tại nơi cha làm. Ông thành công trong nhiều phi vụ kinh doanh nhỏ, và còn xin cha bỏ qua “khâu học đại học” — cha từ chối.',
        'Học Đại học Nebraska, đọc <b>The Intelligent Investor</b> (<i>Nhà đầu tư thông minh</i>) của <b>Benjamin Graham</b>, rồi đăng ký học trường Columbia của Graham. Sau khi tốt nghiệp thạc sĩ kinh tế, ông làm cho <b>Graham-Newman</b> hai năm.',
        '<b>1956</b>: Graham-Newman giải thể (Graham 61 tuổi nghỉ hưu). Buffett về Omaha, 25 tuổi, mở công ty hợp danh đầu tư.'
      ] }
    ] },
    { icon: '🤝', title: 'Công ty hợp danh đầu tư Buffett (1956–1969)', blocks: [
      { t: 'p', x: 'Khởi đầu với 7 hội viên góp <b>105.000 đô la</b>. Hội viên TNHH nhận <b>6%/năm</b> trên vốn và <b>75%</b> phần lợi nhuận vượt mức; Buffett (hội viên chịu trách nhiệm chung) nhận 25% phần vượt đó.' },
      { t: 'key', x: 'Hơn 13 năm, tỷ lệ lãi kép của công ty hợp danh là <b>29,5%/năm</b>. Mục tiêu ban đầu: vượt chỉ số Dow Jones 10 điểm mỗi năm — ông vượt tới <b>20 điểm/năm</b>, và không giảm ngay cả những năm Dow giảm.' },
      { t: 'h3', x: 'Phi vụ American Express (1963)' },
      { t: 'p', x: 'Vụ bê bối liên quan một khách hàng làm cổ phiếu hãng rớt từ <b>65 xuống 35 đô la</b> chỉ qua một đêm. Áp dụng bài học Graham — <i>khi cổ phiếu công ty lớn bán dưới giá trị thực, hãy hành động quyết đoán</i> — ông dùng <b>40% tài sản</b> công ty hợp danh (13 triệu đô la) để mua. Hơn hai năm sau cổ phiếu tăng <b>gấp ba</b>, mang lợi nhuận ròng 20 triệu đô la.' },
      { t: 'list', items: [
        '1962: bắt đầu mua cổ phiếu công ty dệt may èo uột <b>Berkshire Hathaway</b>; chuyển văn phòng tới Kiewit Plaza, Omaha (trụ sở đến nay).',
        '1965: tài sản hợp danh 26 triệu đô la. Bốn năm sau, thấy thị trường đầu cơ cao và giá trị thực khan hiếm, ông <b>chấm dứt</b> công ty hợp danh.',
        'Hội viên được chia đầy đủ; một số theo lời khuyên Buffett giao tiền cho <b>Bill Ruane</b> (bạn học Columbia) → quỹ <b>Sequoia Fund</b>. Phần còn lại, kể cả Buffett (25 triệu đô la), đầu tư vào <b>Berkshire Hathaway</b>.'
      ] }
    ] },
    { icon: '📈', title: 'Berkshire Hathaway và thành tích', blocks: [
      { t: 'table', head: ['Chỉ tiêu', 'Giá trị'], rows: [
        ['Giá trị ròng khi Buffett nắm quyền', '22 triệu đô la'],
        ['Sau 40 năm', '69 tỷ đô la'],
        ['Giá trị sổ sách/cổ phiếu', 'Từ 19 → 50.498 đô la'],
        ['Tăng trưởng bình quân 1965–2003', '<b>22,2%/năm</b> (S&P 500 gồm cổ tức: 10,4%) → vượt trội 11,8 điểm'],
        ['Mục tiêu Buffett đặt ra', 'Tăng giá trị sổ sách 15%/năm']
      ] },
      { t: 'warn', x: 'Berkshire phải đóng thuế trên lợi nhuận, trong khi số liệu S&P 500 là <b>trước thuế</b> — nên thành tích càng ấn tượng hơn. Kết quả cũng có biến động: <b>1998</b> tăng ~48%, nhưng <b>1999</b> chỉ +0,5% so với S&P +21% (cổ phiếu tiêu dùng bền như Coca-Cola, Gillette giảm; công nghệ mà Berkshire không giữ thì tăng).' },
      { t: 'tip', x: 'Buffett thừa nhận có năm tụt hậu, nhưng đoán rằng theo thời gian thành tích sẽ tốt hơn S&P — và ba năm sau điều đó thành sự thật.' }
    ] },
    { icon: '🧠', title: 'Con người, vòng tròn khả năng và Buffett ngày nay', blocks: [
      { t: 'p', x: 'Buffett giản dị, thẳng thắn, trung thực; kết hợp trí thông minh lạnh lùng với sự hóm hỉnh. Ông tôn sùng logic và ghét hành động khờ dại; theo đuổi sự giản đơn. Báo cáo thường niên của Berkshire (60–70 trang) không hình vẽ, biểu đồ màu; ông nhấn mạnh cả điểm yếu lẫn điểm mạnh và coi cổ đông là <b>những người chủ</b>.' },
      { t: 'h3', x: 'Buffett ngày nay: vì sao ít mua lớn?' },
      { t: 'list', items: [
        'Ông thích “<b>mua sự chắc chắn với giá chiết khấu</b>”. “Chắc chắn” = dự đoán được tình hình kinh tế của công ty.',
        'Nguyên tắc: chỉ kinh doanh trong <b>“vòng tròn khả năng”</b> (circle of competence) — lĩnh vực bạn thực sự am hiểu qua kinh nghiệm tích lũy.',
        'Loại chứng khoán ông thích hiện không còn bán ở giá chiết khấu, còn các doanh nghiệp tăng trưởng nhanh nằm ngoài vòng tròn khả năng và kém chắc chắn → ông ít mua cổ phiếu mới, tích cực ở trái phiếu, và ưu tiên <b>mua lại toàn bộ công ty</b>.'
      ] },
      { t: 'key', x: 'Hai hướng cho nhà đầu tư cá nhân: (1) đầu tư theo Berkshire Hathaway; (2) áp dụng phương pháp của Buffett và <b>mở rộng vòng tròn khả năng</b> bằng cách chăm chỉ nghiên cứu các mô hình kinh doanh — kể cả “Kinh tế Mới”.' }
    ] }
  ],
  summary: [
    'Buffett khởi nghiệp với 100 đô la năm 1956; công ty hợp danh 13 năm đạt lãi kép 29,5%/năm, vượt Dow 20 điểm/năm.',
    'Vụ American Express 1963: dùng 40% tài sản mua khi giá rớt thảm → lãi gấp ba. Đây là Graham “đích thực”.',
    'Berkshire Hathaway: giá trị sổ sách/cổ phiếu tăng 22,2%/năm 1965–2003, vượt S&P 11,8 điểm dù đóng thuế.',
    'Ngày nay ông ít mua cổ phiếu lớn vì giữ kỷ luật “vòng tròn khả năng” và “mua chắc chắn giá chiết khấu”.',
    'Nhà đầu tư cá nhân có thể theo Berkshire hoặc áp dụng phương pháp và mở rộng vòng tròn khả năng.'
  ],
  cards: [
    ['Buffett sinh năm nào, ở đâu?', '30/8/1930 tại Omaha, Nebraska.'],
    ['Cuốn sách nào thay đổi Buffett?', 'The Intelligent Investor (Nhà đầu tư thông minh) của Benjamin Graham.'],
    ['Buffett bắt đầu đầu tư với bao nhiêu và khi nào?', '100 đô la năm 1956 (mở công ty hợp danh lúc 25 tuổi).'],
    ['Cơ cấu chia lời của công ty hợp danh?', 'Hội viên TNHH: 6%/năm và 75% phần vượt; Buffett: 25% phần vượt.'],
    ['Lãi kép công ty hợp danh Buffett trong 13 năm?', '29,5%/năm.'],
    ['Phi vụ American Express 1963?', 'Cổ phiếu rớt 65 → 35 đô la sau vụ bê bối; Buffett dùng 40% tài sản (13 triệu đô la) mua, hơn hai năm sau tăng gấp ba, lãi ròng 20 triệu đô la.'],
    ['Vì sao Buffett giải thể công ty hợp danh năm 1969?', 'Thấy thị trường đầu cơ cao và giá trị thực ngày càng khan hiếm.'],
    ['Sequoia Fund do ai lập?', 'Bill Ruane, bạn học Columbia của Buffett.'],
    ['Thành tích Berkshire 1965–2003?', '22,2%/năm so với S&P 500 (gồm cổ tức) 10,4%/năm.'],
    ['Giá trị sổ sách/cổ phiếu Berkshire?', 'Từ 19 đô la lên 50.498 đô la sau 40 năm.'],
    ['Năm 1999 vì sao Berkshire chỉ +0,5%?', 'Cổ phiếu tiêu dùng bền (Coca-Cola, Gillette) giảm trong khi S&P tăng nhờ công nghệ mà Berkshire không giữ.'],
    ['“Vòng tròn khả năng”?', 'Phạm vi lĩnh vực bạn thực sự am hiểu nhờ kinh nghiệm; chỉ đầu tư trong đó.'],
    ['Buffett “thích” kiểu mua nào?', 'Mua sự chắc chắn với giá chiết khấu.'],
    ['Vì sao Buffett ngày nay ít mua lớn?', 'Loại chứng khoán ông thích đã hết giá chiết khấu; doanh nghiệp tăng trưởng nhanh nằm ngoài vòng tròn khả năng.']
  ],
  quiz: [
    { q: 'Buffett bắt đầu đầu tư (công ty hợp danh) năm 1956 với vốn riêng:', o: ['100 đô la', '100.000 đô la', '1 triệu đô la', '25 triệu đô la'], a: 0, e: 'Cộng thêm 105.000 đô la từ các hội viên.' },
    { q: 'Lãi kép hằng năm của công ty hợp danh trong 13 năm:', o: ['10%', '15%', '29,5%', '50%'], a: 2, e: 'Vượt Dow Jones ~20 điểm/năm.' },
    { q: 'Hội viên TNHH nhận gì?', o: ['6%/năm và 75% phần vượt', 'Toàn bộ lợi nhuận', '25% lợi nhuận', 'Không có'], a: 0, e: 'Buffett nhận 25% phần vượt mức đó.' },
    { q: 'Phi vụ American Express: Buffett dùng bao nhiêu % tài sản công ty hợp danh?', o: ['5%', '10%', '40%', '90%'], a: 2, e: '13 triệu đô la.' },
    { q: 'Bài học Graham áp dụng trong vụ American Express:', o: ['Bán khi giá rớt', 'Khi cổ phiếu công ty lớn bán dưới giá trị thực, hãy hành động quyết đoán', 'Chỉ mua công nghệ', 'Tránh mọi rủi ro'], a: 1, e: 'Cổ phiếu sau đó tăng gấp ba.' },
    { q: 'Công ty hợp danh Buffett chấm dứt năm 1969 vì:', o: ['Thua lỗ', 'Thị trường đầu cơ cao, giá trị thực khan hiếm', 'Buffett nghỉ hưu', 'Luật cấm'], a: 1, e: 'Ông không thấy cơ hội đáng giá.' },
    { q: 'Thành tích bình quân Berkshire 1965–2003 là:', o: ['10,4%', '15%', '22,2%', '50%'], a: 2, e: 'So với S&P 500 10,4%.' },
    { q: 'Vì sao 1999 Berkshire kém S&P?', o: ['Buffett nghỉ', 'Cổ phiếu tiêu dùng bền giảm trong khi công nghệ (không nắm giữ) tăng mạnh', 'Thuế', 'Thiếu vốn'], a: 1, e: 'Ông nói đó chỉ là biến động ngắn hạn.' },
    { q: '“Vòng tròn khả năng” có nghĩa là:', o: ['Đầu tư đa dạng mọi ngành', 'Chỉ đầu tư vào lĩnh vực mình thật sự am hiểu', 'Chỉ mua cổ phiếu rẻ', 'Mua bán thường xuyên'], a: 1, e: 'Năng lực thể hiện qua kinh nghiệm tích lũy.' },
    { q: 'Hai lựa chọn cho nhà đầu tư cá nhân theo tác giả:', o: ['Đầu tư theo Berkshire hoặc áp dụng phương pháp Buffett và mở rộng vòng tròn khả năng', 'Chỉ mua trái phiếu', 'Chỉ chơi lướt sóng', 'Không đầu tư'], a: 0, e: 'Điều này giúp làm tốt hơn đầu tư theo S&P 500.' }
  ],
  match: [
    ['American Express 1963', 'Dùng 40% tài sản, lãi gấp ba'],
    ['Sequoia Fund', 'Bill Ruane, bạn học Columbia'],
    ['29,5%/năm', 'Lãi kép công ty hợp danh Buffett'],
    ['22,2%/năm', 'Tăng trưởng bình quân Berkshire 1965–2003'],
    ['Vòng tròn khả năng', 'Chỉ đầu tư vào lĩnh vực mình am hiểu'],
    ['Mua lại toàn bộ công ty', 'Ưu tiên của Buffett khi cổ phiếu quá đắt']
  ]
},

/* ======================= CHƯƠNG 2 ======================= */
{
  n: 2,
  title: 'Học vấn của Warren Buffett',
  intro: 'Bốn người thầy định hình phương pháp đầu tư của Buffett: Benjamin Graham (biên độ an toàn), Philip Fisher (phân tích định tính, đầu tư tập trung), John Burr Williams (giá trị nội tại) và Charles Munger (chất lượng với giá hợp lý).',
  sections: [
    { icon: '📘', title: 'Benjamin Graham: biên độ an toàn', blocks: [
      { t: 'p', x: 'Graham được coi là cha đẻ của phân tích tài chính chuyên nghiệp. Hai tác phẩm nổi tiếng: <b>Phân tích chứng khoán</b> (cùng David Dodd, 1934) và <b>Nhà đầu tư thông minh</b> (1949), ra đời sau khủng hoảng 1929. Chính Graham cũng thiệt hại nặng trong Đại khủng hoảng — rồi xây dựng lại.' },
      { t: 'key', x: '<b>Định nghĩa đầu tư của Graham</b>: “Đầu tư là hoạt động dựa trên <b>phân tích kỹ lưỡng</b>, hứa hẹn <b>sự an toàn của nguồn vốn</b> và một <b>lợi nhuận thoả đáng</b>. Hoạt động không đáp ứng các yêu cầu này là <b>đầu cơ</b>.”' },
      { t: 'h3', x: 'Biên độ an toàn (margin of safety)' },
      { t: 'p', x: 'Tồn tại khi chứng khoán được <b>bán với mức giá thấp hơn giá trị thực</b>. Với trái phiếu: lợi nhuận bình quân vượt chi phí cố định nhiều lần (ví dụ gấp 5 lần). Với cổ phiếu: chênh lệch lớn giữa giá và giá trị nội tại. Giá trị nội tại là giá trị “được xác định bằng số liệu thực tế” (tài sản, lợi tức, cổ tức, triển vọng); nên dùng <b>khoảng giá trị</b>, không cần chính xác tuyệt đối.' },
      { t: 'mnemo', x: '<b>Hai quy tắc của Graham</b>: (1) Đừng để thua lỗ. (2) Đừng quên quy tắc thứ nhất.' },
      { t: 'table', head: ['Hai cách chọn cổ phiếu của Graham', 'Nội dung'], rows: [
        ['<b>Giá &lt; 2/3 giá trị tài sản ròng</b>', 'Bỏ qua nhà xưởng, trang thiết bị; trừ toàn bộ nợ ngắn và dài hạn; phần còn lại là giá trị tài sản ròng hiện tại. Nếu giá cổ phiếu dưới mức này thì có biên độ an toàn.'],
        ['<b>Tỷ lệ P/E thấp</b>', 'Mua cổ phiếu giảm giá với P/E thấp, công ty phải có giá trị tài sản ròng và nợ ít hơn giá trị công ty.']
      ] },
      { t: 'widget', name: 'margin-safety', title: 'Biên độ an toàn: kéo giá thị trường so với giá trị nội tại' },
      { t: 'tip', x: 'Hai giả thuyết của Graham: (1) thị trường định giá theo <b>nỗi sợ và lòng tham</b> của con người (quá cao khi lạc quan, quá thấp khi sợ hãi); (2) hiện tượng <b>“trở lại giá trị trung bình”</b>. Nhà đầu tư thu lợi bằng cách hành động đúng đắn trong thị trường thiếu hiệu quả. Buffett (1994): ý tưởng cơ bản — xem cổ phiếu là một phần doanh nghiệp, dùng biến động thị trường làm lợi thế, và tìm biên độ an toàn — “một trăm năm sau vẫn là nền tảng của đầu tư”.' }
    ] },
    { icon: '🔎', title: 'Philip Fisher: chất lượng và tin đồn', blocks: [
      { t: 'p', x: 'Trong khi Graham viết <i>Phân tích chứng khoán</i>, Fisher mở công ty tư vấn đầu tư riêng (<b>1/3/1931</b>, Fisher & Company). Từ kinh nghiệm thăm các công ty ở San Francisco cùng thầy giáo tại Stanford, ông tin lợi nhuận tối ưu có được bằng cách: (1) đầu tư vào <b>công ty có tiềm năng trên mức trung bình</b> và (2) kết hợp với <b>khả năng quản lý chuyên nghiệp nhất</b>.' },
      { t: 'tabs', items: [
        ['Tiềm năng trên trung bình', 'Doanh số tăng trưởng qua nhiều năm <b>lớn hơn tỷ lệ trung bình của ngành</b> nhờ đầu tư mạnh vào R&D và kinh doanh hiệu quả. Nhưng doanh số tăng chưa đủ; phải có <b>lợi nhuận biên</b> cao, nỗ lực duy trì biên đó, kiểm soát chi phí và tài chính. Công ty lợi nhuận biên cao tạo quỹ nội bộ tốt hơn nên tăng trưởng mà không phải bán thêm cổ phiếu (<b>pha loãng</b> cổ đông).'],
        ['Chất lượng quản lý', 'Nhà quản lý phải có định hướng phát triển sản phẩm mới để duy trì tăng trưởng dài hạn (10–20 năm), <b>hạ thấp chứ không hy sinh</b> lợi nhuận trước mắt. Công ty phải <b>liêm chính, trung thực</b> với cổ đông; xem cách ban quản lý giao tiếp khi gặp khó khăn. Quan hệ tốt với nhân viên (thăng tiến theo năng lực), và chiều sâu đội ngũ quản lý (CEO có thể ủy quyền).'],
        ['“Tin đồn” (scuttlebutt)', 'Chỉ đọc báo cáo tài chính là chưa đủ. Fisher nói chuyện với khách hàng, nhà cung cấp, nhân viên cũ, nhà tư vấn, nhà nghiên cứu đại học, nhân viên chính phủ, hiệp hội thương mại và <b>cả đối thủ cạnh tranh</b> (họ luôn nói nhiều về nhau). Tốn thời gian nhưng cho đầu mối quan trọng.'],
        ['Đầu tư tập trung', 'Fisher giảm số công ty nắm giữ: thích <b>ít công ty nổi bật</b> hơn nhiều công ty trung bình. Danh mục thường dưới 10 công ty, 3–4 công ty chiếm 75%. Ông cho rằng “đặt trứng vào nhiều giỏ” là sai lầm; mua mà không hiểu công ty còn rủi ro hơn hạn chế đa dạng hóa. Ông cũng đã sai lầm khi đầu tư ngoài vòng tròn khả năng.']
      ] }
    ] },
    { icon: '💵', title: 'John Burr Williams: giá trị nội tại', blocks: [
      { t: 'p', x: 'Williams tốt nghiệp Harvard (1923), làm phân tích chứng khoán ở Phố Wall qua Đại khủng hoảng. Ông tin muốn là nhà đầu tư giỏi phải là nhà kinh tế giỏi, nên học tiếp tiến sĩ (1932). Luận án <b>Lý thuyết đầu tư giá trị</b> hoàn thành 1937 (bị hai nhà xuất bản từ chối vì quá nhiều ký hiệu đại số; đến 1938 Harvard University Press in với việc ông trả một phần chi phí) — trở thành nền tảng cho nhiều nhà kinh tế như Fama, Markowitz, Modigliani. Buffett gọi đó là một trong những cuốn sách đầu tư quan trọng nhất.' },
      { t: 'key', x: '<b>Mô hình chiết khấu cổ tức / dòng tiền chiết khấu</b>: giá trị của bất kỳ khoản đầu tư nào là <b>giá trị hiện tại được chiết khấu của dòng tiền tương lai</b>. Buffett: “Giá trị của một doanh nghiệp được xác định bằng dòng tiền thực có thể rút ra từ doanh nghiệp trong thời gian hoạt động, được chiết khấu với tỷ lệ chiết khấu hợp lý.”' },
      { t: 'steps', items: [
        '<b>Ước tính dòng tiền</b> (ví dụ cổ tức mà cổ đông nhận). Williams: tiền lãi giữ lại cuối cùng sẽ thành cổ tức; “một cổ phiếu chỉ đáng giá bằng số tiền bạn thu được từ nó”.',
        '<b>Chiết khấu</b> các dòng tiền để phòng ngừa bất trắc.',
        '<b>Tỷ lệ chiết khấu của Buffett</b>: lãi suất trái phiếu Mỹ dài hạn (10 năm), hoặc khi lãi suất rất thấp thì dùng tỷ lệ lợi tức trung bình của thị trường. Ông dùng tỷ lệ “rủi ro bằng 0” vì đã giới hạn việc mua ở biên độ an toàn của Graham, nên rủi ro nằm sẵn trong giao dịch.'
      ] },
      { t: 'widget', name: 'dcf', title: 'Định giá bằng chiết khấu dòng tiền: thử đổi dòng tiền và tỷ lệ chiết khấu' },
      { t: 'tip', x: 'Peter Bernstein (<i>Capital Ideas</i>): hệ thống của Graham là <b>tập hợp quy tắc</b>, mô hình của Williams là <b>lý thuyết</b>, nhưng cả hai “đi tới đích là gợi ý những loại chứng khoán giống nhau để mua”. Buffett dùng cả hai.' }
    ] },
    { icon: '🦊', title: 'Charles Munger: “hàng rào mô hình trí tuệ”', blocks: [
      { t: 'p', x: 'Năm 1956 Buffett có hơn 100 nghìn đô la; một người hàng xóm, tiến sĩ Edwin Davis, nói sẽ góp 100 nghìn đô la vì “<b>ông làm tôi nhớ tới Charlie Munger</b>”. Buffett và Munger gặp nhau năm 1959 ở Omaha (Munger từng làm cho cửa hàng của ông nội Buffett).' },
      { t: 'list', items: [
        'Munger là luật sư thành công ở Los Angeles; năm 1962 lập công ty hợp danh đầu tư giống Buffett, ba năm sau bỏ hẳn nghề luật. Cả hai cùng tìm cổ phiếu chiết khấu dưới giá trị thực nên mua giống nhau (cuối thập niên 1960 cùng mua <b>Blue Chip Stamps</b>).',
        'Khi Berkshire sáp nhập Blue Chip Stamps năm 1978, Munger thành <b>Phó Chủ tịch Hội đồng Quản trị</b> Berkshire (và Chủ tịch Wesco Financial). Trong thư Buffett, cụm “<b>Charlie và tôi</b>” xuất hiện như tên một người.',
        'Munger am hiểu luật kinh doanh và quan tâm nhiều lĩnh vực: khoa học, lịch sử, triết học, tâm lý, toán học → “<b>những ý tưởng lớn</b>” và “<b>hàng rào mô hình trí tuệ</b>” (latticework of mental models).',
        '<b>Khác biệt triết lý</b>: Buffett tìm cơ hội với giá hợp lý; Munger tin vào việc trả mức giá tương đối cho <b>công ty chất lượng</b>.'
      ] },
      { t: 'key', x: 'Buffett: “<b>Mua một công ty tuyệt vời với giá tương đối còn tốt hơn mua một công ty tương đối với giá tuyệt vời</b>.” Ảnh hưởng của Munger thể hiện qua vụ mua <b>See’s Candy</b> (trả hơn nhiều so với giá trị sổ sách) — một thương vụ thành công — và <b>Coca-Cola</b>.' }
    ] },
    { icon: '🧬', title: 'Bước ngoặt: tổng hợp bốn người thầy', blocks: [
      { t: 'p', x: 'Sau khi Graham qua đời (1976), Buffett trở thành người nối tiếp phương pháp đầu tư giá trị; tên ông đồng nghĩa với đầu tư giá trị. Nhưng ông không chỉ làm theo Graham.' },
      { t: 'steps', items: [
        'Đầu 1965 ông nhận ra chiến lược “mua cổ phiếu giá rẻ” của Graham (công ty bán thấp hơn vốn lưu động ròng) cho ra những “<b>mẩu thuốc lá</b>” cũ kỹ dù rẻ — các doanh nghiệp khủng hoảng như <b>Dempster Mill</b>, <b>Hochschild-Kohn</b>, và dệt may <b>Berkshire Hathaway</b>.',
        'Ông nhận ra Graham chỉ nhìn số liệu, không xét <b>ban quản lý</b> hay đặc điểm doanh nghiệp. Fisher bổ sung điều đó.',
        'Munger đẩy ông chuyển hướng: thay vì “mua giá rẻ”, hãy mua <b>công ty chất lượng ở giá hợp lý</b>, và chú ý <b>tâm lý học của sự đánh giá nhầm lẫn</b> (Chương 11).',
        'Buffett từng nói mình 85% là Graham, 15% Fisher (1969). Tác giả cho rằng nay gần <b>50/50</b>.'
      ] },
      { t: 'table', head: ['Người thầy', 'Đóng góp cho Buffett'], rows: [
        ['<b>Graham</b>', 'Nền tảng trí tuệ: biên độ an toàn; làm chủ cảm xúc để khai thác sự bất hợp lý của thị trường; “Bạn đúng vì số liệu và lập luận của bạn đúng, không phải vì số đông đồng ý”'],
        ['<b>Fisher</b>', 'Phân tích định tính, “tin đồn”, danh mục tập trung vào ít công ty tốt'],
        ['<b>Williams</b>', 'Mô hình định giá bằng chiết khấu dòng tiền'],
        ['<b>Munger</b>', 'Mua công ty chất lượng với giá hợp lý; tâm lý học; đa mô hình tư duy']
      ] },
      { t: 'mnemo', x: 'Buffett = <b>Graham</b> (giá) + <b>Fisher</b> (chất lượng) + <b>Williams</b> (định giá dòng tiền) + <b>Munger</b> (công ty tuyệt vời, giá hợp lý). Như Descartes nói: “Chỉ thông minh thôi chưa đủ, điều quan trọng là phải vận dụng nó tốt.”' }
    ] }
  ],
  summary: [
    'Graham: đầu tư = phân tích kỹ + an toàn vốn + lợi nhuận thoả đáng; biên độ an toàn khi mua dưới giá trị nội tại; thị trường dao động vì sợ hãi và tham lam.',
    'Fisher: công ty vượt trội + quản lý chất lượng; “tin đồn”; danh mục tập trung; ở trong vòng tròn khả năng.',
    'Williams: giá trị = hiện giá dòng tiền tương lai chiết khấu; Buffett dùng lãi suất trái phiếu Mỹ dài hạn làm tỷ lệ chiết khấu.',
    'Munger: mua công ty tuyệt vời giá hợp lý; hàng rào mô hình trí tuệ; tâm lý học.',
    'Buffett tổng hợp cả bốn thành một phương pháp duy nhất, nay xấp xỉ 50% Graham – 50% Fisher.'
  ],
  cards: [
    ['Định nghĩa đầu tư của Graham?', 'Hoạt động dựa trên phân tích kỹ lưỡng, hứa hẹn an toàn nguồn vốn và lợi nhuận thoả đáng; ngoài ra là đầu cơ.'],
    ['Biên độ an toàn là gì?', 'Mua chứng khoán với giá thấp hơn giá trị thực/nội tại.'],
    ['Hai quy tắc của Graham?', '(1) Đừng để thua lỗ. (2) Đừng quên quy tắc thứ nhất.'],
    ['Hai cách chọn cổ phiếu của Graham?', 'Giá thấp hơn 2/3 giá trị tài sản ròng; hoặc P/E thấp (nợ ít hơn giá trị công ty).'],
    ['Hai giả thuyết của Graham về thị trường?', 'Thị trường định giá theo sợ hãi và tham lam; “trở lại giá trị trung bình”.'],
    ['Hai tiêu chuẩn của Fisher?', 'Công ty tiềm năng trên trung bình + quản lý chuyên nghiệp chất lượng.'],
    ['“Scuttlebutt” (tin đồn) là gì?', 'Thu thập thông tin từ khách hàng, nhà cung cấp, nhân viên cũ, đối thủ… để hiểu công ty.'],
    ['Quan điểm danh mục của Fisher?', 'Ít công ty nổi bật hơn nhiều công ty trung bình; dưới 10 công ty, 3–4 công ty chiếm 75%.'],
    ['Mô hình của Williams?', 'Giá trị = hiện giá chiết khấu của dòng tiền (cổ tức) tương lai.'],
    ['Tỷ lệ chiết khấu của Buffett?', 'Lãi suất trái phiếu Mỹ 10 năm, hoặc tỷ lệ lợi tức trung bình thị trường nếu lãi suất rất thấp; “rủi ro bằng 0” vì đã có biên độ an toàn.'],
    ['Câu nói của Munger/Buffett về chất lượng?', 'Mua một công ty tuyệt vời với giá tương đối còn tốt hơn mua công ty tương đối với giá tuyệt vời.'],
    ['“Hàng rào mô hình trí tuệ”?', 'Dùng những ý tưởng lớn từ nhiều lĩnh vực (khoa học, lịch sử, tâm lý, toán…) để ra quyết định.'],
    ['“Mẩu thuốc lá” trong đầu tư?', 'Công ty rẻ nhưng kém chất lượng, chỉ còn “hơi thở cuối” — Buffett rút ra bài học từ Dempster, Hochschild-Kohn, dệt Berkshire.'],
    ['Tỷ lệ ảnh hưởng Graham–Fisher của Buffett?', '85/15 năm 1969; nay gần 50/50 theo tác giả.']
  ],
  quiz: [
    { q: 'Theo Graham, hoạt động nào KHÔNG đáp ứng yêu cầu phân tích kỹ lưỡng, an toàn vốn và lợi nhuận thoả đáng là:', o: ['Đầu tư', 'Đầu cơ', 'Tiết kiệm', 'Cho vay'], a: 1, e: 'Định nghĩa của Graham.' },
    { q: 'Biên độ an toàn tồn tại khi:', o: ['Giá cao hơn giá trị', 'Giá thấp hơn giá trị thực', 'Giá bằng 0', 'Công ty không nợ'], a: 1, e: 'Đệm bảo vệ trước sai sót.' },
    { q: 'Quy tắc thứ nhất của Graham:', o: ['Đa dạng hóa tối đa', 'Đừng để thua lỗ', 'Mua công nghệ', 'Bán khi tăng'], a: 1, e: 'Quy tắc thứ hai: đừng quên quy tắc thứ nhất.' },
    { q: 'Cách chọn cổ phiếu thứ nhất của Graham là mua khi giá thấp hơn:', o: ['1/3 tài sản ròng', '2/3 giá trị tài sản ròng', '2 lần tài sản ròng', 'Lợi nhuận 1 năm'], a: 1, e: 'Sau khi trừ toàn bộ nợ.' },
    { q: 'Fisher nhấn mạnh yếu tố nào mà Graham ít xét?', o: ['Chỉ P/E', 'Chất lượng quản lý và tiềm năng định tính', 'Giá sổ sách', 'Chỉ cổ tức'], a: 1, e: 'Ông phỏng vấn nhiều nguồn (scuttlebutt).' },
    { q: 'Fisher giảm số công ty nắm giữ vì:', o: ['Thiếu vốn', 'Thà sở hữu ít công ty nổi bật hơn nhiều công ty trung bình', 'Thuế', 'Luật cấm'], a: 1, e: 'Danh mục thường dưới 10 công ty.' },
    { q: 'Nguồn “tin đồn” của Fisher KHÔNG gồm:', o: ['Khách hàng', 'Nhân viên cũ', 'Đối thủ cạnh tranh', 'Chỉ báo cáo tài chính'], a: 3, e: 'Ông cho rằng chỉ đọc báo cáo không đủ.' },
    { q: 'Theo Williams, giá trị cổ phiếu bằng:', o: ['Giá sổ sách', 'Hiện giá chiết khấu của dòng tiền tương lai', 'Giá hôm qua', 'Số cổ phiếu × giá'], a: 1, e: 'Cơ sở định giá của Buffett.' },
    { q: 'Tỷ lệ chiết khấu Buffett thường dùng:', o: ['Tỷ lệ lạm phát', 'Lãi suất trái phiếu Mỹ 10 năm', 'Lãi tiền gửi 1 tháng', '50%'], a: 1, e: 'Vì rủi ro đã nằm trong biên độ an toàn.' },
    { q: 'Câu nào đúng về Munger?', o: ['Luôn mua công ty rẻ nhất', 'Tin vào việc trả giá tương đối cho công ty chất lượng', 'Chỉ đầu tư trái phiếu', 'Không quan tâm lĩnh vực khác'], a: 1, e: 'Ảnh hưởng thể hiện ở See’s Candy.' },
    { q: 'Buffett nhận ra điều gì khi mua các “mẩu thuốc lá”?', o: ['Rẻ luôn có lãi', 'Công ty rẻ nhưng chất lượng kém không lý tưởng', 'Cổ phiếu công nghệ tốt', 'Không nên mua'], a: 1, e: 'Dempster Mill, Hochschild-Kohn, Berkshire dệt may.' }
  ],
  match: [
    ['Graham', 'Biên độ an toàn'],
    ['Fisher', 'Tin đồn và đầu tư tập trung'],
    ['Williams', 'Chiết khấu dòng tiền'],
    ['Munger', 'Hàng rào mô hình trí tuệ'],
    ['See’s Candy', 'Ảnh hưởng của Munger: trả giá cao cho chất lượng'],
    ['Đầu cơ', 'Không phân tích kỹ, không an toàn vốn']
  ]
}

);
