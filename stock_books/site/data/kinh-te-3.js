// Phần 2: Kinh tế vĩ mô & quốc tế – Chương 9–12 (bài 34–47).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.kinhte = BOOK_DATA.kinhte || { chapters: [] };
BOOK_DATA.kinhte.chapters.push(

/* ======================= CHƯƠNG 9 ======================= */
{
  n: 9,
  title: 'Đo lường nền kinh tế và chính sách vĩ mô',
  intro: 'Bài 34–36: GDP nói được gì và không nói được gì; chính sách tài khóa (thu chi ngân sách) và chính sách tiền tệ (lãi suất, cung tiền) tác động ra sao đến tăng trưởng và lạm phát.',
  sections: [
    { icon: '📊', title: 'GDP và những điều nó không cho thấy (bài 34)', blocks: [
      { t: 'key', x: '<b>GDP (tổng sản phẩm quốc nội)</b> = giá trị thị trường hằng năm của <b>mọi hàng hóa và dịch vụ cuối cùng</b> được sản xuất trong nền kinh tế. Tốc độ tăng trưởng (ví dụ 7%) thường là GDP <b>thực</b> (đã loại bỏ lạm phát). GDP bình quân đầu người gắn chặt với thu nhập bình quân năm.' },
      { t: 'h3', x: 'Hai nhóm lưu ý' },
      { t: 'list', items: [
        '<b>GDP tăng không có nghĩa mọi nơi tăng như nhau</b>: có ngành đang suy giảm, vùng tăng nhanh – chậm khác nhau, nhóm thu nhập tăng hơn 7% còn nhóm khác đứng yên.',
        'GDP <b>không trừ các “thứ xấu”</b> đi kèm sản xuất như ô nhiễm, tắc nghẽn giao thông.',
        'GDP <b>không phải chỉ số duy nhất</b>: lạm phát và thất nghiệp cũng là chỉ số lớn, và chúng liên quan chặt chẽ: một chỉ số tốt lên có thể kèm chỉ số khác xấu đi (Trung Quốc thập niên 90: GDP tăng tốc nhưng lạm phát cũng cao hơn).'
      ] },
      { t: 'tip', x: 'Việt Nam thập niên 90 thuộc nhóm tăng trưởng nhanh nhất và lạm phát giảm mạnh. Câu hỏi then chốt: mức thành tích này có <b>bền vững</b> không khi chính sách trong nước và sự kiện thế giới thay đổi?' }
    ] },
    { icon: '🏛️', title: 'Chính sách tài khóa (bài 35)', blocks: [
      { t: 'p', x: '<b>Chính sách tài khóa</b> do chính phủ (không gồm ngân hàng trung ương) thực hiện – bằng chi tiêu và thuế – để tác động đến mức hoạt động kinh tế.' },
      { t: 'table', head: ['', 'Mở rộng', 'Thắt chặt'], rows: [
        ['Khi nào?', 'Kinh tế chậm lại', 'Kinh tế “nóng”, nguy cơ lạm phát tăng tốc'],
        ['Công cụ', 'Tăng chi tiêu hạ tầng (Nhật thập niên 90); giảm thuế thu nhập (Mỹ) làm thu nhập khả dụng tăng → tiêu dùng tăng', 'Giảm chi tiêu, tăng thuế']
      ] },
      { t: 'steps', items: [
        'Chi cho hạ tầng → tăng thu nhập ở ngành trực tiếp hưởng lợi (chủ yếu xây dựng).',
        'Những người mới có việc chi tiêu cho thực phẩm, quần áo… → tăng thu nhập ở các ngành khác.',
        'Hiệu ứng lan tỏa (nhân số) khiến tác động lớn hơn khoản chi ban đầu.'
      ] },
      { t: 'warn', x: 'Vấn đề then chốt: <b>các nguồn lực được dùng hiệu quả đến đâu</b>. Chi nhiều mà dự án kém hiệu quả thì sức lan tỏa và lợi ích dài hạn thấp.' }
    ] },
    { icon: '🏦', title: 'Chính sách tiền tệ (bài 36)', blocks: [
      { t: 'p', x: '<b>Chính sách tiền tệ</b> do <b>ngân hàng trung ương</b> thực hiện để tác động đến hoạt động kinh tế. Mục tiêu chính ở nhiều nước là <b>kiểm soát lạm phát</b> và giám sát hệ thống ngân hàng, nhưng hoạt động của ngân hàng trung ương còn ảnh hưởng GDP thực, thất nghiệp và tỷ giá.' },
      { t: 'tabs', items: [
        ['Mở rộng', 'Khi tổng cầu yếu (GDP tăng chậm): <b>giảm lãi suất cơ bản</b> (tương đương tăng cung tiền) → tín dụng rẻ hơn và dồi dào hơn → kích thích đầu tư tư nhân → GDP tăng nhanh hơn. Ví dụ: ngân hàng trung ương châu Âu và Mỹ cắt lãi suất khi GDP yếu.'],
        ['Giới hạn', 'Quá nhiều tiền lưu thông dẫn tới <b>giá cao hơn</b>. Cần đủ kiềm chế để giữ lạm phát thấp, nhưng đủ nới lỏng để các ngành sản xuất có tín dụng.'],
        ['Việt Nam', 'Ngân hàng Nhà nước theo đuổi chính sách tiền tệ tương đối thận trọng cả thập kỷ, đưa lạm phát ba con số cuối thập niên 80 về mức dễ chịu; từng bước tự do hóa lãi suất và cải cách ngành tài chính.']
      ] },
      { t: 'mnemo', x: '<b>Tài khóa = Chính phủ + thuế/chi.</b> <b>Tiền tệ = Ngân hàng trung ương + lãi suất/cung tiền.</b> Muốn kích thích: cả hai đều “nới”.' }
    ] }
  ],
  summary: [
    'GDP là giá trị thị trường các hàng hóa, dịch vụ cuối cùng; tăng trưởng thực loại bỏ lạm phát. GDP che giấu bất bình đẳng giữa ngành/vùng/nhóm và không trừ ô nhiễm, tắc nghẽn.',
    'Tăng trưởng, lạm phát và thất nghiệp liên quan với nhau; cải thiện chỉ số này có thể làm xấu chỉ số khác.',
    'Tài khóa (chính phủ): mở rộng khi chậm lại, thắt chặt khi nóng; có hiệu ứng lan tỏa.',
    'Tiền tệ (ngân hàng trung ương): giảm lãi suất kích thích đầu tư, nhưng quá nhiều tiền gây lạm phát.'
  ],
  cards: [
    ['GDP là gì?', 'Giá trị thị trường hằng năm của mọi hàng hóa, dịch vụ cuối cùng được sản xuất trong nền kinh tế.'],
    ['GDP thực khác GDP danh nghĩa?', 'GDP thực đã điều chỉnh theo lạm phát.'],
    ['Hai hạn chế chính của GDP?', 'Che giấu khác biệt giữa ngành/vùng/nhóm; không tính các “thứ xấu” như ô nhiễm, tắc nghẽn.'],
    ['Ba chỉ số vĩ mô chính?', 'Tăng trưởng GDP, lạm phát, thất nghiệp.'],
    ['Chính sách tài khóa là gì?', 'Dùng chi tiêu và thuế của chính phủ để tác động mức hoạt động kinh tế.'],
    ['Ví dụ tài khóa mở rộng?', 'Tăng chi hạ tầng (Nhật thập niên 90); giảm thuế thu nhập (Mỹ).'],
    ['Vì sao giảm thuế thu nhập kích thích kinh tế?', 'Thu nhập khả dụng tăng → tiêu dùng tăng.'],
    ['Hiệu ứng lan tỏa là gì?', 'Chi tiêu ban đầu tạo thu nhập ở một ngành, người nhận chi tiếp ở ngành khác, làm tác động lớn hơn khoản chi đầu.'],
    ['Chính sách tiền tệ do ai thực hiện?', 'Ngân hàng trung ương.'],
    ['Giảm lãi suất cơ bản có tác dụng gì?', 'Tín dụng rẻ và dồi dào hơn → kích thích đầu tư tư nhân → GDP tăng nhanh hơn.'],
    ['Rủi ro của nới lỏng tiền tệ quá mức?', 'Quá nhiều tiền lưu thông → giá cao hơn (lạm phát).']
  ],
  quiz: [
    { q: 'GDP đo:', o: ['Tổng tài sản quốc gia', 'Giá trị thị trường hằng năm của hàng hóa, dịch vụ cuối cùng', 'Chỉ xuất khẩu', 'Chỉ công nghiệp'], a: 1, e: 'Hàng hóa và dịch vụ cuối cùng sản xuất trong nước.' },
    { q: 'Tăng trưởng 7% thường là GDP:', o: ['Danh nghĩa', 'Thực (đã loại lạm phát)', 'Bình quân', 'Âm'], a: 1, e: 'Đã điều chỉnh lạm phát.' },
    { q: 'Điều nào GDP KHÔNG phản ánh tốt?', o: ['Quy mô sản xuất', 'Ô nhiễm đi kèm sản xuất', 'Giá thị trường', 'Tổng sản lượng'], a: 1, e: 'GDP không trừ các “thứ xấu”.' },
    { q: 'Trung Quốc thập niên 90 minh họa:', o: ['GDP tăng nhưng lạm phát cũng cao hơn', 'Mọi chỉ số tốt lên', 'Thất nghiệp bằng 0', 'GDP giảm'], a: 0, e: 'Các chỉ số liên quan, cải thiện cái này có thể xấu cái kia.' },
    { q: 'Chính sách tài khóa do ai thực hiện?', o: ['Ngân hàng trung ương', 'Chính phủ (trừ ngân hàng trung ương)', 'Doanh nghiệp', 'Hộ gia đình'], a: 1, e: 'Thông qua chi tiêu và thuế.' },
    { q: 'Khi kinh tế chậm lại, chính phủ nên:', o: ['Thắt chặt tài khóa', 'Dùng tài khóa mở rộng', 'Không làm gì', 'Tăng thuế'], a: 1, e: 'Tăng chi hoặc giảm thuế.' },
    { q: 'Giảm thuế thu nhập làm tăng:', o: ['Thu nhập khả dụng và tiêu dùng', 'Giá', 'Lãi suất', 'Thất nghiệp'], a: 0, e: 'Tiền sau thuế nhiều hơn.' },
    { q: 'Mục tiêu chính của ngân hàng trung ương nhiều nước:', o: ['Xây đường', 'Kiểm soát lạm phát và giám sát ngân hàng', 'Thu thuế', 'Quảng cáo'], a: 1, e: 'Ảnh hưởng thêm GDP, thất nghiệp, tỷ giá.' },
    { q: 'Giảm lãi suất tương đương với:', o: ['Giảm cung tiền', 'Tăng cung tiền', 'Tăng thuế', 'Tăng thất nghiệp'], a: 1, e: 'Tín dụng rẻ và dồi dào.' },
    { q: 'Quá nhiều tiền lưu thông dẫn tới:', o: ['Giá cao hơn', 'Giá thấp hơn', 'GDP âm', 'Thuế thấp'], a: 0, e: 'Lạm phát.' }
  ],
  match: [
    ['GDP', 'Giá trị hàng hóa dịch vụ cuối cùng trong nước'],
    ['Tài khóa', 'Chi tiêu và thuế của chính phủ'],
    ['Tiền tệ', 'Lãi suất và cung tiền do ngân hàng trung ương'],
    ['Hiệu ứng lan tỏa', 'Chi tiêu ban đầu tạo thêm thu nhập ở các ngành khác'],
    ['Giảm lãi suất', 'Kích thích đầu tư tư nhân'],
    ['Thu nhập khả dụng', 'Thu nhập sau thuế']
  ]
},

/* ======================= CHƯƠNG 10 ======================= */
{
  n: 10,
  title: 'Lạm phát, giảm phát và giá trị thực',
  intro: 'Bài 37–40: đo lạm phát bằng CPI và chỉ số giảm phát GDP, giảm phát tốt hay xấu, nên can thiệp hay để thị trường tự điều chỉnh, và vì sao phải phân biệt giá trị danh nghĩa với giá trị thực.',
  sections: [
    { icon: '🍜', title: 'Lạm phát và cách đo (bài 37)', blocks: [
      { t: 'p', x: '<b>Lạm phát</b> là sự tăng giá chung trong nền kinh tế. Để đo, nhà kinh tế dùng các chỉ số cụ thể:' },
      { t: 'table', head: ['Chỉ số', 'Là gì?'], rows: [
        ['<b>CPI</b> (chỉ số giá tiêu dùng)', 'Phần trăm thay đổi giá trung bình của <b>rổ hàng</b> đại diện (trọng số trung bình). Rổ của Việt Nam gồm 130 nhóm hàng. Nước nghèo thường có trọng số lương thực lớn.'],
        ['<b>Chỉ số giảm phát GDP</b>', 'Toàn diện hơn: tính cả <b>hàng tư liệu sản xuất</b> chứ không chỉ hàng tiêu dùng.']
      ] },
      { t: 'warn', x: 'Sáng nay giá phở tăng? <b>Đừng vội kêu “lạm phát”</b>: (1) hãy chờ giá cuối kỳ (ví dụ quý); (2) giá phở tăng có thể đi kèm giảm giá hàng khác có trọng số lớn hơn; (3) phở có thể không nằm trong rổ nên không ảnh hưởng CPI.' },
      { t: 'table', head: ['Loại', 'Đặc điểm'], rows: [
        ['<b>Siêu lạm phát</b> (hyperinflation)', 'CPI tăng vài trăm % một năm'],
        ['<b>Giảm lạm phát</b> (disinflation)', 'CPI vẫn tăng nhưng chậm hơn kỳ trước'],
        ['<b>Giảm phát</b> (deflation)', 'CPI giảm trong một thời kỳ']
      ] }
    ] },
    { icon: '📉', title: 'Giảm phát: tốt hay xấu? (bài 38)', blocks: [
      { t: 'p', x: 'Đến tháng 8/2003, CPI Việt Nam giảm bốn tháng liên tiếp; khái niệm giảm phát lần đầu xuất hiện ở VN năm 2000. Theo trực giác, người tiêu dùng thích giảm phát, nhà sản xuất ghét. Nhìn tổng thể thì sao?' },
      { t: 'tabs', items: [
        ['👍 Giảm phát tốt', 'Môi trường kinh doanh mở hơn, <b>giá cao của độc quyền bị cạnh tranh kéo xuống</b>; hoặc thị trường tự do khiến nhà sản xuất năng suất cao phát triển → chi phí thấp → giá giảm → người mua nhiều hơn → chi phí đơn vị giảm thêm.'],
        ['👎 Giảm phát xấu', 'Giá giảm nhưng <b>doanh số không tăng</b>: doanh nghiệp thu hẹp sản xuất, sa thải; người tiêu dùng lo mất việc nên tiết kiệm nhiều, chi ít → giảm phát nặng thêm.'],
        ['☠️ Tệ nhất', 'Quá nhiều vốn vay lạc quan đổ vào → <b>cung vượt xa cầu</b>; hàng không bán được nhưng nợ vẫn đến hạn → phá sản, kể cả doanh nghiệp tốt.'],
        ['🇻🇳 Việt Nam 2003', 'CPI nghiêng nhiều về lương thực nông sản; giá nông sản thế giới giảm vì cung thừa (gạo, cà phê, tiêu). Nông dân Indonesia, Brazil, Việt Nam chờ nhau chặt cây cà phê và trách chính phủ thiếu thông tin, dự báo.']
      ] }
    ] },
    { icon: '⚖️', title: 'Can thiệp hay không can thiệp? (bài 39)', blocks: [
      { t: 'p', x: 'Nền kinh tế thường gặp cú sốc trong và ngoài nước (ví dụ cầu cà phê xuất khẩu của VN bất ngờ giảm → cắt sản xuất, thất nghiệp tăng, lan sang các ngành khác). Hai câu hỏi: (1) chính phủ có nên đối phó? (2) nếu có thì làm gì?' },
      { t: 'table', head: ['', 'Chủ trương can thiệp tích cực', 'Chủ trương thụ động'], rows: [
        ['Lập luận', 'Cú sốc có thể gây <b>suy thoái lãng phí</b> nguồn lực, thiệt hại người thất nghiệp và người nghèo; chính phủ nên dùng chính sách để bảo vệ nền kinh tế', 'Kinh tế thị trường vốn ổn định; cơ chế <b>tự điều chỉnh</b> (lương và giá linh hoạt) rồi sẽ khôi phục toàn dụng lao động'],
        ['Rủi ro', 'Cần chính sách <b>kịp thời và chính xác</b>', 'Chính sách ổn định có thể thành gây bất ổn: <b>độ trễ</b> khi hoạch định và thực thi khiến khi có hiệu lực thì nền kinh tế không cần nữa']
      ] },
      { t: 'key', x: 'Điểm đồng thuận: chính phủ phải cung cấp cho thị trường <b>thể chế và cơ chế phù hợp</b> để cho phép, điều tiết và giám sát hoạt động thị trường một cách hiệu quả và có thể dự đoán.' }
    ] },
    { icon: '🍵', title: 'Danh nghĩa và thực (bài 40)', blocks: [
      { t: 'p', x: '“Danh nghĩa” là “chỉ có trên tên gọi”: tờ 10.000 đ có giá trị danh nghĩa 10.000 đồng. <b>Giá trị thực</b> (sức mua) chỉ hiểu được khi có chuẩn so sánh: nếu một tách trà giá 1.000 đ thì 10.000 đ thật ra là 10 tách trà.' },
      { t: 'steps', items: [
        'Vay 50.000 đ, lãi danh nghĩa 10%/năm → cuối năm trả 55.000 đ.',
        'Giá trà không đổi (1.000): vay 50 tách, trả 55 tách → <b>lãi suất thực = 5 tách (10%)</b>.',
        'Giá trà tăng lên 1.100 (lạm phát 10%): 55.000 đ = 50 tách → <b>chi phí vay thực bằng 0</b>.',
        'Lạm phát thấp hơn 10% → lãi thực dương nhưng thấp hơn lãi danh nghĩa.'
      ] },
      { t: 'key', x: '<b>r = i − p</b> (lãi suất thực = lãi danh nghĩa − tỷ lệ lạm phát). Biết giá trị thực mới là điều thật sự quan trọng.' },
      { t: 'widget', name: 'real-rate', title: 'Đổi lãi suất và lạm phát, xem lãi thực' }
    ] }
  ],
  summary: [
    'CPI đo giá rổ hàng tiêu dùng đại diện; chỉ số giảm phát GDP bao quát cả hàng tư liệu sản xuất. Một món hàng đắt lên chưa chắc là lạm phát.',
    'Siêu lạm phát, giảm lạm phát, giảm phát là các tình huống khác nhau.',
    'Giảm phát tốt khi do cạnh tranh và năng suất; xấu khi giá giảm mà doanh số không tăng; tệ nhất khi cung vượt cầu cộng nợ vay.',
    'Tranh luận can thiệp vs thụ động; cả hai đồng ý chính phủ phải cung cấp thể chế tốt.',
    'Lãi suất thực = lãi danh nghĩa − lạm phát.'
  ],
  cards: [
    ['Lạm phát là gì?', 'Sự tăng giá chung trong nền kinh tế.'],
    ['CPI được tính thế nào?', 'Theo trung bình có trọng số giá của một rổ hàng đại diện (VN: 130 nhóm hàng).'],
    ['Chỉ số giảm phát GDP khác CPI?', 'Bao gồm cả hàng tư liệu sản xuất, toàn diện hơn.'],
    ['Vì sao giá phở tăng chưa chắc là lạm phát?', 'Cần nhìn cuối kỳ, có thể bù bằng giảm giá khác, phở có thể không nằm trong rổ CPI.'],
    ['Siêu lạm phát?', 'CPI tăng vài trăm phần trăm một năm.'],
    ['Giảm lạm phát (disinflation)?', 'CPI vẫn tăng nhưng chậm hơn kỳ trước.'],
    ['Giảm phát (deflation)?', 'CPI giảm trong một thời kỳ.'],
    ['Giảm phát tốt là gì?', 'Do cạnh tranh làm giảm giá độc quyền hoặc năng suất tăng → chi phí và giá giảm, bán được nhiều hơn.'],
    ['Giảm phát xấu là gì?', 'Giá giảm nhưng doanh số không tăng; thu hẹp sản xuất, sa thải, tiêu dùng giảm → vòng xoáy.'],
    ['Giảm phát tệ nhất?', 'Cung vượt cầu do vốn vay lạc quan ồ ạt, nợ đến hạn nhưng hàng ế → phá sản.'],
    ['Lập luận của phái can thiệp tích cực?', 'Cú sốc có thể gây suy thoái lãng phí nguồn lực và thiệt hại người nghèo.'],
    ['Lập luận của phái thụ động?', 'Thị trường tự điều chỉnh qua lương, giá linh hoạt; chính sách có độ trễ có thể gây bất ổn.'],
    ['Điểm hai phái đồng ý?', 'Chính phủ phải cung cấp thể chế và cơ chế để thị trường vận hành hiệu quả, dự đoán được.'],
    ['Công thức lãi suất thực?', 'r = i − p (danh nghĩa trừ lạm phát).']
  ],
  quiz: [
    { q: 'CPI đo:', o: ['Giá cả của cả tư liệu sản xuất', 'Thay đổi giá trung bình của rổ hàng tiêu dùng', 'Lãi suất', 'GDP'], a: 1, e: 'Dựa trên trọng số giá của rổ hàng đại diện.' },
    { q: 'Chỉ số nào bao quát cả hàng tư liệu sản xuất?', o: ['CPI', 'Chỉ số giảm phát GDP', 'Lãi suất', 'Tỷ giá'], a: 1, e: 'Nó tính cả hàng hóa tiêu dùng và tư liệu sản xuất.' },
    { q: 'Giảm phát nghĩa là:', o: ['Giá tăng chậm lại', 'CPI giảm trong một thời kỳ', 'Giá tăng vài trăm %', 'Lương tăng'], a: 1, e: 'Giá chung giảm.' },
    { q: 'Giảm lạm phát (disinflation) là:', o: ['Giá giảm', 'Giá vẫn tăng nhưng chậm hơn', 'Giá không đổi', 'Giá tăng nhanh hơn'], a: 1, e: 'Khác với giảm phát.' },
    { q: 'Ví dụ giảm phát tốt:', o: ['Cầu sụp đổ', 'Cạnh tranh làm giảm giá độc quyền', 'Sa thải hàng loạt', 'Phá sản'], a: 1, e: 'Giá giảm nhờ cạnh tranh và năng suất.' },
    { q: 'Giảm phát xấu là khi:', o: ['Giá giảm, doanh số tăng', 'Giá giảm nhưng doanh số không tăng, doanh nghiệp sa thải', 'Giá tăng', 'Lương tăng'], a: 1, e: 'Người tiêu dùng lo mất việc nên tiết kiệm.' },
    { q: 'Vì sao CPI Việt Nam từng giảm đầu những năm 2000?', o: ['Giá điện giảm', 'Giá nông sản thế giới giảm do cung thừa, mà rổ CPI nặng về nông sản', 'Lương giảm', 'Thuế giảm'], a: 1, e: 'Gạo, cà phê, tiêu dư cung.' },
    { q: 'Phái thụ động tin rằng:', o: ['Thị trường vốn bất ổn', 'Cơ chế tự điều chỉnh sẽ khôi phục toàn dụng lao động', 'Chính phủ luôn kịp thời', 'Cần tăng thuế'], a: 1, e: 'Lương và giá linh hoạt.' },
    { q: 'Vay 50.000 ở 10%, lạm phát 10%. Lãi suất thực là:', o: ['10%', '5%', '0%', '20%'], a: 2, e: 'r = 10 − 10.' },
    { q: 'Giá trị thực (sức mua) của tờ 10.000 đ khi một tách trà giá 1.000 là:', o: ['1 tách', '10 tách', '100 tách', '0'], a: 1, e: '10.000 ÷ 1.000.' }
  ],
  match: [
    ['CPI', 'Giá trung bình của rổ hàng tiêu dùng'],
    ['Disinflation', 'Giá vẫn tăng nhưng chậm hơn'],
    ['Deflation', 'CPI giảm'],
    ['Giá trị danh nghĩa', 'Chỉ có trên tên gọi'],
    ['Lãi suất thực', 'Lãi danh nghĩa trừ lạm phát'],
    ['Độ trễ chính sách', 'Lý do phái thụ động lo ngại']
  ]
},

/* ======================= CHƯƠNG 11 ======================= */
{
  n: 11,
  title: 'Tỷ giá hối đoái: danh nghĩa, thực và các chế độ',
  intro: 'Bài 41–44: tỷ giá là gì, vì sao phải nhìn tỷ giá thực để đánh giá sức cạnh tranh, và hai chế độ cực đoan: cố định so với thả nổi.',
  sections: [
    { icon: '💱', title: 'Tỷ giá danh nghĩa (bài 41)', blocks: [
      { t: 'key', x: '<b>Tỷ giá hối đoái</b> là giá của một đồng tiền tính bằng đồng tiền khác. Có thể báo giá hai cách: giá ngoại tệ theo nội tệ (1 USD = 15.406 đồng) hoặc giá nội tệ theo ngoại tệ (1 đồng = 0,000065 USD).' },
      { t: 'table', head: ['Thay đổi', 'Gọi là', 'Ý nghĩa'], rows: [
        ['15.406 → 16.000 đ/USD', '<b>Đồng mất giá</b> (depreciate); USD lên giá', 'Cần nhiều đồng hơn để mua 1 USD'],
        ['15.406 → 15.000 đ/USD', '<b>Đồng lên giá</b> (appreciate)', 'Giá trị đồng trên thị trường ngoại hối tăng']
      ] },
      { t: 'warn', x: 'Tỷ giá danh nghĩa <b>dễ gây hiểu lầm</b> vì không tính sức mua của mỗi đồng tiền. Du khách ba lô không chỉ quan tâm 1 USD đổi được bao nhiêu đồng mà còn quan tâm cần bao nhiêu đồng để mua hàng. Được nhiều đồng hơn mà giá hàng cũng tăng cùng tỷ lệ thì chẳng có lợi gì.' }
    ] },
    { icon: '🏁', title: 'Tỷ giá thực và sức cạnh tranh (bài 42)', blocks: [
      { t: 'key', x: '<b>Tỷ giá thực</b> = tỷ giá danh nghĩa đã điều chỉnh theo <b>chênh lệch lạm phát</b>. Nó chỉ rõ hơn thay đổi về sức cạnh tranh.' },
      { t: 'table', head: ['Tình huống (tỷ giá danh nghĩa không đổi)', 'Hệ quả'], rows: [
        ['Giá nước đối tác tăng 10%, VN ổn định', 'Hàng xuất VN cạnh tranh hơn, nhập khẩu đắt hơn → như đồng <b>mất giá thực 10%</b>'],
        ['VN lạm phát 10%, nước ngoài 0%', 'Đồng <b>lên giá thực</b>: xuất khẩu khó hơn, hàng nhập hấp dẫn hơn vì giá ngoại không tăng']
      ] },
      { t: 'tip', x: 'Về dài hạn tỷ giá danh nghĩa thường phản ánh chênh lệch lạm phát nên sức cạnh tranh không đổi nhiều. Nhưng trong ngắn hạn, <b>tỷ giá thực lên giá</b> có thể gây mất sức cạnh tranh.' },
      { t: 'widget', name: 'real-fx', title: 'Tỷ giá thực: thử đổi lạm phát hai nước' }
    ] },
    { icon: '🔒', title: 'Tỷ giá cố định (bài 43)', blocks: [
      { t: 'p', x: 'Giao dịch ngoại hối toàn cầu vượt <b>1,8 nghìn tỷ USD/ngày</b> với nhiều chế độ tỷ giá khác nhau và giới kinh tế không đồng ý chế độ nào tốt nhất.' },
      { t: 'p', x: 'Ở <b>chế độ cố định</b>, ngân hàng trung ương neo nội tệ vào một hay nhiều ngoại tệ (Hồng Kông, Malaysia). Ưu điểm: <b>ổn định và dễ dự đoán</b> — nhà xuất khẩu Malaysia biết chắc số ringgit nhận được từ số USD kiếm được; nhà đầu tư Mỹ biết chắc số USD thu từ khoản đầu tư bằng ringgit.' },
      { t: 'warn', x: 'Nhưng chế độ này <b>rủi ro khi lạm phát cao</b>: tỷ giá thực bị <b>định giá quá cao</b> làm xấu đi cán cân thương mại và sức cạnh tranh.' }
    ] },
    { icon: '🌊', title: 'Tỷ giá thả nổi (bài 44)', blocks: [
      { t: 'p', x: 'Nhiều nước đang phát triển đã chuyển từ cố định sang tỷ giá do thị trường quyết định.' },
      { t: 'list', items: [
        '<b>Tự ổn định:</b> xuất khẩu của Thái Lan giảm, nhập khẩu không đổi → thâm hụt thương mại, thừa cầu ngoại tệ → đồng baht <b>mất giá</b> → xuất khẩu rẻ hơn ở nước ngoài, nhập khẩu đắt hơn trong nước → thâm hụt giảm.',
        '<b>Tự chủ tiền tệ:</b> ngân hàng trung ương có thể nới cung tiền để hỗ trợ cầu nội địa khi thất nghiệp mà không bị ràng buộc pháp lý vì giá trị đồng tiền thay đổi.',
        '<b>Dòng vốn quốc tế tăng</b> củng cố lập luận cho thả nổi.',
        '<b>Cái giá:</b> sự bất định — tỷ giá biến động khiến nhà nhập khẩu, xuất khẩu khó lập kế hoạch.'
      ] }
    ] }
  ],
  summary: [
    'Tỷ giá là giá của một đồng tiền theo đồng tiền khác; “mất giá” khi cần nhiều nội tệ hơn cho một ngoại tệ.',
    'Tỷ giá thực = tỷ giá danh nghĩa điều chỉnh theo chênh lệch lạm phát; cho thấy sức cạnh tranh tốt hơn.',
    'Cố định: ổn định, dễ dự đoán nhưng rủi ro khi lạm phát cao (định giá quá cao).',
    'Thả nổi: tự ổn định, tự chủ tiền tệ nhưng bất định.'
  ],
  cards: [
    ['Tỷ giá hối đoái là gì?', 'Giá của một đồng tiền tính bằng đồng tiền khác.'],
    ['Tỷ giá 15.406 → 16.000 đ/USD là gì?', 'Đồng mất giá (depreciate) so với USD.'],
    ['Tỷ giá 15.406 → 15.000 đ/USD?', 'Đồng lên giá (appreciate).'],
    ['Hạn chế của tỷ giá danh nghĩa?', 'Không tính sức mua của mỗi đồng tiền, dễ gây hiểu lầm.'],
    ['Tỷ giá thực là gì?', 'Tỷ giá danh nghĩa điều chỉnh theo chênh lệch lạm phát.'],
    ['Nước đối tác lạm phát 10%, VN ổn định, tỷ giá danh nghĩa cố định: hệ quả?', 'Giống như đồng mất giá thực 10%: xuất khẩu cạnh tranh hơn, nhập khẩu đắt hơn.'],
    ['VN lạm phát 10%, nước ngoài 0: hệ quả?', 'Đồng lên giá thực: xuất khẩu khó hơn, nhập khẩu hấp dẫn hơn.'],
    ['Tỷ giá cố định nghĩa là gì?', 'Ngân hàng trung ương neo nội tệ vào một hoặc nhiều ngoại tệ (Hồng Kông, Malaysia).'],
    ['Ưu điểm tỷ giá cố định?', 'Ổn định và dễ dự đoán cho xuất khẩu và đầu tư.'],
    ['Rủi ro tỷ giá cố định?', 'Khi lạm phát cao, tỷ giá thực bị định giá quá cao → cán cân thương mại xấu đi.'],
    ['Tỷ giá thả nổi tự ổn định thế nào?', 'Thâm hụt thương mại → thừa cầu ngoại tệ → đồng mất giá → xuất khẩu rẻ, nhập khẩu đắt → thâm hụt giảm.'],
    ['Cái giá của thả nổi?', 'Bất định, biến động tỷ giá khiến nhà xuất nhập khẩu khó lập kế hoạch.']
  ],
  quiz: [
    { q: 'Đồng mất giá khi tỷ giá chuyển 15.406 → 16.000 đ/USD vì:', o: ['Cần ít đồng hơn mua USD', 'Cần nhiều đồng hơn để mua 1 USD', 'USD yếu', 'Lãi suất tăng'], a: 1, e: 'Giá trị đồng giảm.' },
    { q: 'Tỷ giá thực khác danh nghĩa ở chỗ:', o: ['Điều chỉnh theo chênh lệch lạm phát', 'Luôn cố định', 'Do nhà nước ấn định', 'Chỉ tính cho vàng'], a: 0, e: 'Phản ánh sức mua.' },
    { q: 'Nước đối tác lạm phát 10%, VN ổn định, tỷ giá danh nghĩa không đổi, thì xuất khẩu VN:', o: ['Kém cạnh tranh', 'Cạnh tranh hơn', 'Không đổi', 'Bị cấm'], a: 1, e: 'Tương đương đồng mất giá thực 10%.' },
    { q: 'VN lạm phát 10%, nước ngoài 0, tỷ giá danh nghĩa không đổi → đồng:', o: ['Lên giá thực', 'Mất giá thực', 'Không đổi', 'Bị hủy'], a: 0, e: 'Giá VN tăng, hàng nhập thành rẻ tương đối.' },
    { q: 'Hồng Kông và Malaysia (thời điểm viết) dùng chế độ:', o: ['Thả nổi hoàn toàn', 'Tỷ giá cố định (neo)', 'Không có tiền riêng', 'Vàng'], a: 1, e: 'Neo nội tệ vào ngoại tệ.' },
    { q: 'Ưu điểm chính của tỷ giá cố định:', o: ['Tự chủ tiền tệ cao', 'Ổn định, dễ dự đoán', 'Giá thấp', 'Không có rủi ro'], a: 1, e: 'Xuất nhập khẩu và đầu tư biết trước kết quả.' },
    { q: 'Tỷ giá cố định đặc biệt rủi ro khi:', o: ['Lạm phát thấp', 'Lạm phát cao', 'GDP âm', 'Thuế thấp'], a: 1, e: 'Dẫn tới định giá quá cao tỷ giá thực.' },
    { q: 'Với thả nổi, thâm hụt thương mại thường kéo theo:', o: ['Đồng lên giá', 'Đồng mất giá giúp giảm thâm hụt', 'Cố định giá', 'Tăng thuế'], a: 1, e: 'Cơ chế tự ổn định.' },
    { q: 'Nhược điểm của thả nổi:', o: ['Mất tự chủ tiền tệ', 'Bất định về tỷ giá', 'Không tự ổn định', 'Cần nhiều dự trữ để neo'], a: 1, e: 'Biến động khiến khó lập kế hoạch.' }
  ],
  match: [
    ['Depreciation', 'Nội tệ mất giá'],
    ['Appreciation', 'Nội tệ lên giá'],
    ['Tỷ giá thực', 'Tỷ giá danh nghĩa điều chỉnh theo lạm phát'],
    ['Tỷ giá cố định', 'Neo vào ngoại tệ, ổn định'],
    ['Thả nổi', 'Thị trường quyết định, tự ổn định'],
    ['Định giá quá cao', 'Rủi ro của tỷ giá cố định khi lạm phát cao']
  ]
},

/* ======================= CHƯƠNG 12 ======================= */
{
  n: 12,
  title: 'Tỷ giá, đồng nhân dân tệ và khủng hoảng tài chính',
  intro: 'Bài 45–47: vì sao Mỹ gây sức ép lên Trung Quốc về đồng nhân dân tệ, bài học khủng hoảng Thái Lan 1997 và cách Hồng Kông đánh bại màn “đánh đôi” đầu cơ.',
  sections: [
    { icon: '🇨🇳', title: 'Nhân dân tệ bị định giá thấp (bài 45)', blocks: [
      { t: 'p', x: 'Mỹ có thâm hụt thương mại rất lớn với Trung Quốc và lãi suất thấp (1% liên ngân hàng). Lẽ thường, điều này làm đồng USD yếu. Nhưng Nhật, Trung Quốc… mua trái phiếu chính phủ Mỹ để <b>ngăn đồng tiền của họ mạnh lên</b>, bảo vệ xuất khẩu và làm yếu sản xuất Mỹ (mất gần 3 triệu việc làm trong ba năm).' },
      { t: 'steps', items: [
        'Một nhân dân tệ trị giá khoảng 12 cent (8,28 NDT = 1 USD), chính phủ không cho thay đổi.',
        'Nếu NDT lên 14 cent (7,1 NDT = 1 USD), áo sơ mi Trung Quốc 100 NDT sẽ tăng từ <b>12 lên 14 USD</b> → hãng Mỹ cạnh tranh dễ hơn; xuất khẩu Mỹ sang Trung Quốc tăng.',
        'Trung Quốc xuất sang Mỹ gấp 5 lần nhập → Mỹ cho rằng nâng giá là công bằng.'
      ] },
      { t: 'warn', x: 'Nếu Trung Quốc không đổi, Quốc hội Mỹ có thể phát động biện pháp bảo hộ. Thặng dư thương mại cộng dòng vốn vào cũng tạo <b>bong bóng thanh khoản</b>: giá bất động sản tăng nhanh, nợ ngân hàng thế chấp bất động sản có thể xấu nếu bong bóng vỡ → làm chậm kinh tế. Vì vậy Trung Quốc nhiều khả năng sẽ đổi tỷ giá.' }
    ] },
    { icon: '🇹🇭', title: 'Thái Lan 1997: neo có điều chỉnh (bài 46)', blocks: [
      { t: 'p', x: 'Giữa cố định và thả nổi có các chế độ trung gian. Một loại là <b>neo có điều chỉnh</b>: neo vào USD nhưng ngân hàng trung ương thỉnh thoảng điều chỉnh. Thái Lan 1997 cho thấy chế độ này rủi ro với nền kinh tế có điểm yếu tài chính hoặc mất cân đối vĩ mô.' },
      { t: 'steps', items: [
        '<b>Ảo tưởng:</b> neo-có-điều-chỉnh khiến nhà đầu tư, ngân hàng tưởng rủi ro tỷ giá gần như bị loại bỏ.',
        '<b>Bất cân xứng tiền tệ:</b> nhiều công ty Thái vay lượng lớn ngoại tệ đầu tư vào dự án trong nước (chủ yếu bất động sản), nhưng thu nhập bằng baht.',
        'Thâm hụt thương mại lớn, dự trữ ngoại hối không đủ → giới phân tích tin không thể giữ tỷ giá.',
        '<b>Tấn công tiền tệ:</b> mọi người đổ xô đổi baht sang USD; ngân hàng trung ương tiêu gần hết dự trữ bảo vệ tỷ giá rồi buộc phải để baht giảm mạnh <b>tháng 7/1997</b>.'
      ] },
      { t: 'table', head: ['Nước', 'Sau khủng hoảng'], rows: [
        ['Thái Lan', 'Baht mất 50–60%; nay thả nổi có quản lý (can thiệp khi dao động quá mức)'],
        ['Malaysia', 'Ringgit giảm rồi neo lại ở 25% dưới mức trước khủng hoảng'],
        ['Trung Quốc, Hồng Kông', 'Vượt qua khủng hoảng và giữ tỷ giá neo']
      ] }
    ] },
    { icon: '🎭', title: 'Hồng Kông và màn “đánh đôi” đầu cơ (bài 47)', blocks: [
      { t: 'p', x: 'Hồng Kông cố định ở <b>7,8 HKD/USD</b> theo chế độ <b>hội đồng tiền tệ (currency board)</b>: ngân hàng trung ương giữ dự trữ USD <b>ít nhất bằng</b> lượng HKD đang lưu thông.' },
      { t: 'tabs', items: [
        ['Đòn của đầu cơ', 'Vay thật nhiều HKD, rồi đổ xô đổi sang USD để đẩy cầu USD lên. Kỳ vọng: cung HKD thu hẹp tự động → <b>lãi suất tăng</b> → đầu tư giảm → chứng khoán tụt. Đồng thời họ <b>bán khống chứng khoán</b> (vay cổ phiếu rồi bán ngay, mua lại sau với giá thấp). Vì thế dù cuộc tấn công tiền tệ thất bại, họ vẫn kiếm lời nhờ chứng khoán.'],
        ['Cách phòng thủ hai gọng', '(1) <b>Tăng lãi suất cho vay</b> khiến chi phí trả nợ của đầu cơ không chịu nổi; (2) <b>mua vào ồ ạt cổ phiếu</b> để giá tăng thay vì giảm.'],
        ['Kết quả', 'Đầu cơ lỗ nặng vì trả lãi vay cao, đồng thời bán cổ phiếu giá thấp làm danh mục yếu đi nghiêm trọng.']
      ] },
      { t: 'tip', x: 'Hồng Kông chống chọi được nhờ <b>dự trữ ngoại hối lớn</b> và <b>ngân hàng lành mạnh</b>. Thái Lan thiếu cả hai.' }
    ] }
  ],
  summary: [
    'Trung Quốc duy trì NDT thấp để bảo vệ xuất khẩu, gây sức ép từ Mỹ; đồng thời tạo bong bóng thanh khoản trong nước.',
    'Thái Lan 1997: neo có điều chỉnh tạo ảo tưởng an toàn; vay ngoại tệ + thu bằng baht + dự trữ thấp → khủng hoảng.',
    'Sau khủng hoảng: Thái thả nổi có quản lý; Malaysia neo lại; Trung Quốc, Hồng Kông giữ neo.',
    'Hồng Kông (currency board) bẻ gãy cú đánh đôi bằng tăng lãi suất và mua cổ phiếu.'
  ],
  cards: [
    ['Vì sao Trung Quốc, Nhật mua trái phiếu Mỹ?', 'Để ngăn đồng tiền của họ mạnh lên so với USD, bảo vệ xuất khẩu.'],
    ['Nếu NDT từ 8,28 lên 7,1/USD thì sao?', 'Áo sơ mi 100 NDT tăng từ 12 lên 14 USD, hãng Mỹ cạnh tranh dễ hơn.'],
    ['Nguy cơ cho Trung Quốc nếu không đổi tỷ giá?', 'Biện pháp bảo hộ từ Mỹ; bong bóng thanh khoản và bất động sản.'],
    ['Neo có điều chỉnh (adjustable peg)?', 'Neo vào USD nhưng ngân hàng trung ương thỉnh thoảng điều chỉnh.'],
    ['Bất cân xứng tiền tệ là gì?', 'Nợ bằng ngoại tệ nhưng thu nhập bằng nội tệ.'],
    ['Điều gì khiến Thái Lan sụp đổ tỷ giá 1997?', 'Vay ngoại tệ lớn, thâm hụt thương mại, dự trữ thiếu → tấn công tiền tệ.'],
    ['Baht mất bao nhiêu trong khủng hoảng?', 'Khoảng 50–60% giá trị.'],
    ['Thả nổi có quản lý?', 'Tiền tệ thả nổi trong một biên độ; ngân hàng trung ương can thiệp khi dao động quá mức.'],
    ['Ringgit sau khủng hoảng?', 'Giảm rồi neo lại ở mức bằng 25% dưới mức trước khủng hoảng (theo bài).'],
    ['Hội đồng tiền tệ (currency board)?', 'Ngân hàng trung ương giữ dự trữ USD ít nhất bằng lượng nội tệ lưu thông; neo 7,8 HKD/USD.'],
    ['Cú “đánh đôi” đầu cơ là gì?', 'Vay HKD đổ xô đổi USD và đồng thời bán khống cổ phiếu, kiếm lời dù tấn công tiền tệ thất bại.'],
    ['Hồng Kông phản công thế nào?', 'Tăng lãi suất cho vay và mua cổ phiếu ồ ạt.']
  ],
  quiz: [
    { q: 'Nhật và Trung Quốc mua trái phiếu Mỹ chủ yếu để:', o: ['Kiếm lãi', 'Ngăn đồng tiền của mình mạnh lên', 'Giảm thuế', 'Tăng nhập khẩu'], a: 1, e: 'Bảo vệ xuất khẩu.' },
    { q: 'Nếu NDT lên 14 cent, áo 100 NDT có giá:', o: ['12 USD', '14 USD', '7 USD', '28 USD'], a: 1, e: '100 × 0,14.' },
    { q: 'Rủi ro bong bóng ở Trung Quốc liên quan:', o: ['Giá cà phê', 'Bất động sản và nợ ngân hàng thế chấp', 'Lương', 'Giáo dục'], a: 1, e: 'Dòng vốn vào cộng thặng dư tạo bong bóng thanh khoản.' },
    { q: 'Neo có điều chỉnh gây ảo tưởng:', o: ['Rủi ro tỷ giá gần như bị loại bỏ', 'Lạm phát thấp', 'Thất nghiệp thấp', 'Thuế thấp'], a: 0, e: 'Nên vay ngoại tệ ồ ạt.' },
    { q: 'Bất cân xứng tiền tệ ở Thái Lan là:', o: ['Nợ ngoại tệ, thu nhập baht', 'Nợ baht, thu USD', 'Không có nợ', 'Thuế khác nhau'], a: 0, e: 'Đồng baht giảm giá làm nợ nặng thêm.' },
    { q: 'Baht chính thức giảm mạnh vào:', o: ['Tháng 7/1997', 'Tháng 1/1990', '2003', '2010'], a: 0, e: 'Sau khi tiêu hết dự trữ bảo vệ.' },
    { q: 'Chế độ hội đồng tiền tệ yêu cầu:', o: ['Dự trữ USD ít nhất bằng lượng nội tệ lưu thông', 'Tỷ giá thả nổi', 'Không có dự trữ', 'In thêm tiền'], a: 0, e: 'Ví dụ Hồng Kông.' },
    { q: 'Hai gọng phòng thủ của Hồng Kông:', o: ['Giảm lãi suất và bán cổ phiếu', 'Tăng lãi suất cho vay và mua cổ phiếu', 'Thả nổi và in tiền', 'Tăng thuế và cấm nhập khẩu'], a: 1, e: 'Làm đầu cơ lỗ cả hai chân.' },
    { q: 'Vì sao đầu cơ “bán khống” cổ phiếu cùng lúc?', o: ['Để bảo hiểm', 'Để kiếm lời kể cả khi cuộc tấn công tiền tệ thất bại', 'Vì thuế', 'Không có lý do'], a: 1, e: 'Nếu giá chứng khoán tụt họ lời.' }
  ],
  match: [
    ['Neo có điều chỉnh', 'Thái Lan trước 1997'],
    ['Currency board', 'Hồng Kông, 7,8 HKD/USD'],
    ['Bất cân xứng tiền tệ', 'Nợ ngoại tệ, thu nhập nội tệ'],
    ['Tấn công tiền tệ', 'Đổ xô đổi nội tệ lấy USD'],
    ['Bán khống', 'Vay cổ phiếu bán ngay, mua lại giá thấp'],
    ['Thả nổi có quản lý', 'Thái Lan sau khủng hoảng']
  ]
}

);
