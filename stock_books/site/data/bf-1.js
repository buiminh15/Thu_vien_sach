// Pick Stocks Like Warren Buffett (Boroson) – Chương 1: Chương 1–3 của sách.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.buffett = BOOK_DATA.buffett || { chapters: [] };
BOOK_DATA.buffett.chapters.push({
  n: 1,
  title: 'Đầu tư như Buffett: cách làm, thành tích và cuộc đời',
  intro: 'Cách dễ nhất để “đầu tư như Buffett” là mua cổ phiếu Berkshire Hathaway; ngoài ra có thể mua các cổ phiếu Berkshire đang nắm và các quỹ kiểu Buffett. Chương này cũng tóm tắt thành tích 36 năm, cuộc sống giản dị và hành trình từ Omaha đến Graham–Newman.',
  sections: [
    { icon: '🛒', title: 'Ba cách đi theo Buffett', blocks: [
      { t: 'steps', items: [
        '<b>Mua Berkshire</b>: cổ phiếu A (~$70.000) hoặc B (~$2.300, ≈ 1/30 A). Lời Buffett: nếu B bán chiết khấu &gt; ~2% so với 1/30 giá A thì B hời hơn; nếu bằng nhau mà định mua ≥ 30 B thì nên mua A. Có thể mua dần (DCA), tham khảo Value Line và S&amp;P “The Outlook”, xem giá gần đỉnh hay đáy năm.',
        '<b>Mua cổ phiếu Berkshire đang giữ</b> (Coca-Cola, Gillette, H&amp;R Block, General Dynamics…). Rủi ro: Berkshire có thể đã bán (như Disney 2000) và danh mục của bạn lệch hơn Berkshire. Cân bằng bằng cổ phiếu y tế, cổ phiếu nước ngoài (Buffett ít mua), và danh sách của Robert Hagstrom.',
        '<b>Mua quỹ kiểu Buffett</b>: Sequoia (đóng cửa, ~31% là Berkshire), Tweedy Browne, Legg Mason Focus Trust, Third Avenue, Clipper, Longleaf, Torray, Vontobel U.S. Value.'
      ] },
      { t: 'tip', x: 'Giải pháp hợp lý cho “Warren Wannabe”: một ít Berkshire + một số cổ phiếu kiểu Buffett + một-hai quỹ định hướng Buffett; vẫn giữ thêm cổ phiếu/quỹ tăng trưởng để ổn định danh mục vì quỹ giá trị có thể kém hơn thị trường cả giai đoạn dài.' },
      { t: 'p', x: '<b>R-squared</b> đo mức một quỹ giống một chỉ số (Vanguard 500 = 100). Quỹ kiểu Buffett có R² thấp (Sequoia 37, Vontobel 27, Longleaf 49) vì danh mục tập trung — nên R² không giúp nhận diện quỹ “giống Buffett”.' }
    ] },
    { icon: '🏆', title: 'Thành tích của Buffett', blocks: [
      { t: 'key', x: 'Trong 36 năm làm chủ tịch Berkshire: giá trị sổ sách/cổ phiếu tăng <b>&gt;23%/năm</b>; cổ phiếu từ $12 lên $71.000 (cuối 2000), ≈ <b>27%/năm</b>; thắng S&amp;P 500 trong 32/36 năm.' },
      { t: 'list', items: [
        'John Bogle nêu ba người dường như thật sự thắng thị trường: Buffett, Peter Lynch, John Neff. George Soros có thể kiếm nhiều hơn nhưng chiến lược khó bắt chước.',
        'Buffett làm những điều nhà đầu tư thường cũng làm được (mua GEICO, Coca-Cola, Gillette) và công khai giải thích: <b>mua công ty tuyệt vời khi giá hơi rẻ rồi giữ mãi</b>.',
        'Ông nổi tiếng trung thực và trung thành với cổ đông: đại hội cổ đông ~5 giờ trả lời câu hỏi cùng Charlie Munger; Berkshire đứng thứ 7 trong danh sách công ty được ngưỡng mộ nhất của Fortune.'
      ] },
      { t: 'warn', x: 'Nhà hoài nghi (Larry Swedroe, người ủng hộ quỹ chỉ số) nêu ba lý do: thiên tài, may mắn, hoặc ảnh hưởng quản lý khi vào hội đồng quản trị; hoặc dùng “float” bảo hiểm như đòn bẩy. Ông chỉ ra 1990–2/2000 Berkshire hơn S&amp;P có 0,2%/năm. Phản biện: thập niên 1990 do cổ phiếu công nghệ thống trị mà Buffett né, và cổ phiếu giá trị vốn bị lép vế từng giai đoạn dài.' },
      { t: 'list', items: [
        '<b>Vì sao rất khó đánh bại quỹ chỉ số S&amp;P 500</b>: đa dạng hoá tốt, chi phí thấp, tỷ trọng theo vốn hoá (hiệu ứng động lượng), ban điều hành chọn công ty tốt vào chỉ số, nhà đầu tư ít bỏ quỹ chỉ số (không có người quản lý để đổ lỗi).'
      ] }
    ] },
    { icon: '🧒', title: 'Cuộc đời: từ Omaha đến Berkshire', blocks: [
      { t: 'table', head: ['Mốc', 'Sự kiện'], rows: [
        ['1930', 'Sinh ở Omaha; cha là nhà môi giới rồi nghị sĩ'],
        ['11 tuổi', 'Mua cổ phiếu đầu tiên: 3 cổ Cities Service Preferred giá $38; bán $40, sau đó cổ phiếu lên $200 ⇒ bài học kiên nhẫn'],
        ['14 tuổi', 'Dùng tiền giao báo mua 40 mẫu đất nông nghiệp $1.200'],
        ['Sinh viên', 'Đọc <i>The Intelligent Investor</i> của Graham ⇒ “vảy rơi khỏi mắt”; học Columbia với Graham (điểm A+ duy nhất Graham từng cho)'],
        ['1951–56', 'Làm cho Graham–Newman; ở chung phòng với Walter Schloss'],
        ['1956', 'Về Omaha lập hợp danh với vốn góp; năm 1969 giải thể vì hết cổ phiếu rẻ, lãi gộp 29,5%/năm so với Dow 7,4%'],
        ['1962–64', 'Mua cổ phiếu dệt Berkshire Hathaway (&lt; $8, giá trị sổ sách $19,46) rồi nắm quyền; chuyển sang bảo hiểm khi dệt may suy tàn'],
        ['1973–74', 'Thị trường sụp, ông “mang xe cút kít đi nhặt hời”'],
        ['Thập niên 1990', 'Cứu Salomon Brothers (bài học: có thể đã nên tránh); chia A/B năm 1996 để ngăn người bán lẻ quỹ nhỏ']
      ] },
      { t: 'list', items: [
        'Phong cách sống: vẫn ở căn nhà mua $31.500 cách đây 40 năm, tự lái xe, lương Buffett và Munger chỉ $100.000/năm. Không chia nhỏ cổ phiếu vì giá thấp sinh ngắn hạn và làm giá lệch giá trị nội tại.',
        'Thương vụ tiêu biểu: Washington Post, GEICO, Coca-Cola, Gillette, American Express, General Re. Ông thích mua đứt cả công ty hơn mua một phần.',
        'Buffett chống bỏ thuế thừa kế vì thấy “không công bằng khi đứa trẻ này sinh ra có nhiều hơn đứa kia”.'
      ] },
      { t: 'widget', name: 'compound-simple', title: 'Lãi kép: 27%/năm khác xa lãi 10%/năm thế nào?' }
    ] }
  ],
  summary: [
    'Cách dễ nhất: mua Berkshire (A hoặc B); thêm cổ phiếu Berkshire đang giữ và quỹ kiểu Buffett.',
    'Berkshire: ~27%/năm cổ phiếu, giá trị sổ sách >23%/năm trong 36 năm, thắng S&P 32/36 năm.',
    'Khó đánh bại quỹ chỉ số: chi phí thấp, đa dạng, tự cập nhật; nên giữ một lõi chỉ số.',
    'Buffett sống giản dị, trung thực, trung thành cổ đông; học từ Graham rồi tự lập.',
    'Công thức cốt lõi: mua công ty tuyệt vời khi giá hơi rẻ, rồi giữ.'
  ],
  cards: [
    ['A share và B share Berkshire khác gì?', 'B ≈ 1/30 A, ít quyền biểu quyết hơn; A đổi được sang B, không ngược lại.'],
    ['Khi nào mua B thay vì A?', 'Khi B chiết khấu > ~2% so với 1/30 giá A.'],
    ['Rủi ro khi mua cổ phiếu Berkshire đang giữ?', 'Berkshire có thể đã bán; danh mục lệch hơn Berkshire.'],
    ['Quỹ nào giống Berkshire nhất?', 'Sequoia (bạn của Buffett; ~31% là Berkshire), đã đóng cửa với nhà đầu tư mới.'],
    ['R-squared đo gì?', 'Mức một quỹ bám theo chỉ số (100 = y chang).'],
    ['Thành tích Berkshire trong 36 năm?', '~27%/năm cổ phiếu; thắng S&P 32/36 năm.'],
    ['Ba người Bogle cho là thắng thị trường thật?', 'Buffett, Peter Lynch, John Neff.'],
    ['Vì sao quỹ chỉ số khó bị đánh bại?', 'Đa dạng, chi phí thấp, thay công ty yếu bằng công ty mạnh, cổ đông ít bỏ.'],
    ['Cổ phiếu đầu tiên Buffett mua?', 'Cities Service Preferred, 11 tuổi, giá $38.'],
    ['Cuốn sách thay đổi Buffett?', '<i>The Intelligent Investor</i> của Graham.'],
    ['Lãi kép hợp danh Buffett 1956–69?', '29,5%/năm so với Dow 7,4%.'],
    ['Vì sao Buffett không chia nhỏ cổ phiếu?', 'Giá thấp thu hút ngắn hạn, tăng quay vòng và làm giá lệch giá trị.'],
    ['Berkshire trước đây là gì?', 'Một nhà máy dệt ở New Bedford; Buffett chuyển sang bảo hiểm.']
  ],
  quiz: [
    { q: 'Tỷ lệ B so với A của Berkshire:', o: ['1/10', '1/30', '1/100', '1/2'], a: 1, e: 'Khoảng 1/30.' },
    { q: 'Thành tích cổ phiếu Berkshire/năm (36 năm):', o: ['~10%', '~15%', '~27%', '~50%'], a: 2, e: 'Từ $12 lên $71.000.' },
    { q: 'Sequoia Fund có bao nhiêu % là Berkshire:', o: ['~3%', '~10%', '~31%', '~80%'], a: 2, e: 'Bảng 1.1.' },
    { q: 'R-squared thấp của quỹ Buffett cho thấy:', o: ['Quỹ tệ', 'Danh mục tập trung, ít giống chỉ số', 'Phí cao', 'Quỹ chỉ số'], a: 1, e: 'Không phải thước đo tốt.' },
    { q: 'Lập luận của Swedroe:', o: ['Buffett không giỏi', 'Chọn quản lý chủ động không đảm bảo hơn quỹ chỉ số', 'Mua Berkshire là tốt nhất', 'Quỹ chỉ số kém'], a: 1, e: 'Ông là “agnostic”.' },
    { q: 'Buffett đọc cuốn nào ở Nebraska?', o: ['Security Analysis', 'The Intelligent Investor', 'Wealth of Nations', 'Common Stocks'], a: 1, e: 'Của Ben Graham.' },
    { q: 'Hợp danh của Buffett giải thể năm:', o: ['1956', '1962', '1969', '1973'], a: 2, e: 'Hết cổ phiếu rẻ.' },
    { q: 'Berkshire chuyển sang ngành nào khi dệt suy tàn?', o: ['Ngân hàng', 'Bảo hiểm', 'Dầu khí', 'Công nghệ'], a: 1, e: 'Float bảo hiểm.' },
    { q: 'Công thức Buffett:', o: ['Mua cổ phiếu hot', 'Mua công ty tuyệt vời giá hơi rẻ và giữ', 'Giao dịch trong ngày', 'Bán khống'], a: 1, e: 'Cốt lõi.' },
    { q: 'Lương của Buffett và Munger ở Berkshire:', o: ['$100.000/năm', '$1 triệu', '$10 triệu', '$0'], a: 0, e: 'Khá thấp.' }
  ],
  match: [
    ['Berkshire B', '≈ 1/30 giá A'],
    ['Sequoia', 'Quỹ tập trung vào Berkshire'],
    ['R-squared', 'Mức giống chỉ số'],
    ['Graham–Newman', 'Công ty Buffett từng làm'],
    ['Cities Service', 'Cổ phiếu đầu tiên của Buffett'],
    ['Float', 'Tiền phí bảo hiểm dùng để đầu tư'],
    ['Warren Wannabe', 'Người bắt chước Buffett']
  ]
});
