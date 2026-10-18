// Investment Valuation (Damodaran, ấn bản 2) – Chương 1–2 (bản tóm lược học tập bằng tiếng Việt).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.valuation = BOOK_DATA.valuation || { chapters: [] };
BOOK_DATA.valuation.chapters.push(

/* ===================== CHƯƠNG 1 ===================== */
{
  n: 1,
  title: 'Giới thiệu về định giá',
  intro: 'Mọi tài sản đều có giá trị. Chương này đặt nền tảng triết lý: giá ≠ giá trị, 6 “huyền thoại” về định giá, và vai trò của định giá trong quản lý danh mục, mua lại – sáp nhập và tài chính doanh nghiệp.',
  sections: [
    { icon: '🧭', title: 'Nền tảng triết lý của định giá', blocks: [
      { t: 'p', x: 'Oscar Wilde: kẻ hoài nghi là người “biết giá của mọi thứ nhưng không biết giá trị của thứ nào”. Nhiều nhà phân tích và nhà đầu tư theo thuyết <b>“kẻ ngốc lớn hơn” (bigger fool)</b>: giá trị không quan trọng miễn có người ngốc hơn chịu mua lại — một trò chơi nguy hiểm vì không đảm bảo người đó còn đó khi bạn cần bán.' },
      { t: 'key', x: '<b>Định đề đầu tư lành mạnh</b>: không trả cho tài sản nhiều hơn giá trị của nó. Tài sản tài chính được mua vì <b>dòng tiền kỳ vọng</b>, nên giá phải phản ánh mức độ và tăng trưởng kỳ vọng của dòng tiền — không thể biện minh giá chỉ bằng lập luận “sau này sẽ có người trả cao hơn”.' },
      { t: 'p', x: 'Nhận thức có thể là tất cả với tranh hay tượng, nhưng với tài sản tài chính “giá trị trong mắt người nhìn” và “mọi mức giá đều có thể biện minh” là <b>hoàn toàn vô lý</b>: nhận thức phải được chống đỡ bằng thực tế.' }
    ] },
    { icon: '🧱', title: 'Sáu huyền thoại về định giá', blocks: [
      { t: 'tabs', items: [
        ['1. Định lượng = khách quan', '<p>Mô hình có thể định lượng nhưng <b>đầu vào chứa phán đoán chủ quan</b>; kết quả bị tô màu bởi thiên kiến. Nhiều khi giá được chốt trước rồi mới “định giá” cho khớp.</p><ul><li>Tránh tuyên bố lập trường công khai trước khi định giá xong; giảm lợi ích cá nhân vào việc cổ phiếu bị định giá cao/thấp.</li><li>Nhà phân tích sell-side nghiêng về khuyến nghị <b>mua</b> (tỷ lệ mua : bán thường ~10 : 1) do áp lực tiếp cận thông tin, áp lực từ quản lý quỹ và hoạt động ngân hàng đầu tư.</li><li>Cuối thập niên 1990, nhiều nhà phân tích thành “cổ động viên” cho cổ phiếu kinh tế mới; sau sụp đổ 2001 Merrill Lynch, CSFB cấm nhân viên nắm cổ phiếu công ty họ phân tích — nhưng nguồn thiên kiến gốc (lẫn lộn ngân hàng đầu tư và tư vấn đầu tư) vẫn còn. Cách xử lý tốt nhất: nhà đầu tư <b>chiết khấu/bỏ qua</b> nghiên cứu của tổ chức có xung đột.</li><li>Định giá tự thân của công ty mục tiêu trong thâu tóm thường thiên lạc quan.</li></ul>'],
        ['2. Định giá tốt là bất biến', '<p>Giá trị chịu ảnh hưởng của thông tin riêng công ty, ngành và toàn thị trường (lãi suất, kinh tế) → <b>định giá cũ rất nhanh</b>, phải cập nhật. Ví dụ: ngành dược 1992 bị định giá thấp đi vào 1993 khi triển vọng cải cách y tế và kiểm soát giá xuất hiện. Keynes: “Khi sự kiện thay đổi, tôi đổi ý. Còn ông thì sao?”</p>'],
        ['3. Định giá tốt cho con số chính xác', '<p>Luôn còn bất định vì dòng tiền và tỷ suất chiết khấu được ước tính có sai số → cần <b>biên an toàn</b> khi khuyến nghị. Độ chính xác khác nhau theo vòng đời: công ty lớn trưởng thành dễ hơn công ty tăng trưởng; công ty khởi nghiệp, thị trường mới nổi khó nhất. Bất định <b>không</b> phải lý do bỏ định giá — thù lao lớn nhất lại ở những công ty này.</p>'],
        ['4. Mô hình càng định lượng càng tốt', '<p>Phức tạp → nhiều đầu vào → nhiều lỗi, và dễ thành “hộp đen” (“lỗi do mô hình”). Ba điểm của sách: <b>nguyên tắc tiết kiệm (parsimony)</b> – không dùng nhiều đầu vào hơn mức cần; <b>đánh đổi</b> giữa lợi ích chi tiết và chi phí/sai số ước tính; và “<b>mô hình không định giá công ty: bạn định giá</b>”.</p>'],
        ['5. Muốn kiếm lời phải tin thị trường kém hiệu quả', '<p>Nghịch lý hai phía: người tin thị trường hiệu quả vẫn dùng định giá (hiểu vì sao giá như vậy, định giá tác động của thay đổi quản trị) và thị trường chỉ hiệu quả <b>nhờ</b> hàng triệu người tin nó chưa hiệu quả; người tin thị trường mắc sai lầm lại tin nó sẽ sửa (tức hiệu quả) để có lãi. Lập trường tác giả: <b>hoài nghi thận trọng</b> — thị trường có sai lầm nhưng tìm ra nó cần cả kỹ năng lẫn may mắn.</p><ul><li>Cái gì “quá tốt để là thật” thì có lẽ không thật.</li><li>Khi giá trị chênh lớn so với giá thị trường, mặc định <b>thị trường đúng</b> cho tới khi tự thuyết phục được ngược lại.</li></ul>'],
        ['6. Chỉ kết quả mới quan trọng', '<p><b>Quá trình định giá</b> cho nhiều hiểu biết: trả giá hợp lý cho tăng trưởng là bao nhiêu? thương hiệu đáng giá bao nhiêu? cải thiện lợi suất dự án quan trọng thế nào? biên lợi nhuận ảnh hưởng giá trị ra sao? Vì vậy ngay cả người tin thị trường hiệu quả vẫn có ích khi dùng mô hình định giá.</p>']
      ] },
      { t: 'mnemo', x: '<b>Định giá = quy trình + phán đoán + khiêm tốn.</b> Không khách quan tuyệt đối · không bất biến · không chính xác tuyệt đối · không càng phức tạp càng tốt.' }
    ] },
    { icon: '🎯', title: 'Vai trò của định giá', blocks: [
      { t: 'h3', x: '1. Trong quản lý danh mục – theo triết lý đầu tư' },
      { t: 'table', head: ['Triết lý', 'Quan niệm', 'Vai trò của định giá'], rows: [
        ['<b>Phân tích cơ bản</b> (Fundamental)', 'Giá trị thật gắn với tăng trưởng, rủi ro, dòng tiền; lệch khỏi giá trị thật là cơ hội. Giả định: quan hệ đo được, ổn định, được điều chỉnh trong thời gian hợp lý', '<b>Trung tâm</b> (DCF hoặc bội số P/E, P/B)'],
        ['<b>Mua đặc quyền</b> (Franchise buyer – Buffett)', 'Chỉ mua doanh nghiệp đơn giản, ổn định mình hiểu; thường tác động quản trị công ty', 'Then chốt: mua khi bị định giá thấp và ước tính giá trị tăng thêm nếu tái cấu trúc'],
        ['<b>Chartist</b> (phân tích kỹ thuật)', 'Giá do tâm lý đầu tư; giá, khối lượng, bán khống… chỉ báo tương lai', 'Mờ nhạt (có thể dùng giá trị để xác định hỗ trợ/kháng cự)'],
        ['<b>Giao dịch theo thông tin</b>', 'Giá chạy theo thông tin; giao dịch trước/ngay sau công bố', 'Quan tâm quan hệ giữa thông tin và thay đổi giá hơn là giá trị'],
        ['<b>Market timer</b>', 'Lợi nhuận từ dự đoán chu kỳ thị trường lớn hơn chọn cổ phiếu', 'Định giá cả thị trường, hoặc định giá mọi cổ phiếu rồi tổng hợp (số bị định giá cao/thấp)'],
        ['<b>Thị trường hiệu quả</b>', 'Giá thị trường là ước tính tốt nhất của giá trị thật; cố khai thác sai lệch tốn hơn lợi', 'Tìm hiểu <b>giả định tăng trưởng và rủi ro hàm ý trong giá</b>, không đi tìm cổ phiếu định giá sai']
      ] },
      { t: 'h3', x: '2. Trong mua lại – sáp nhập (M&A)' },
      { t: 'list', items: [
        'Bên mua phải xác định giá trị hợp lý của mục tiêu trước khi chào giá; bên bán phải biết giá trị hợp lý trước khi chấp nhận/từ chối.',
        'Phải tính <b>hiệp lực (synergy)</b> — nói “không thể định lượng” là sai — và tác động của <b>thay đổi quản lý, tái cấu trúc</b> (nhất là thâu tóm thù địch).',
        'Thiên kiến lớn: bên bán lạc quan để thuyết phục cổ đông giá chào quá thấp; bên mua đã quyết mua vì chiến lược sẽ chịu áp lực đưa ra giá trị biện minh cho thương vụ.'
      ] },
      { t: 'h3', x: '3. Trong tài chính doanh nghiệp' },
      { t: 'p', x: 'Nếu mục tiêu là tối đa hoá giá trị công ty thì phải hiểu mối liên hệ giữa quyết định tài chính, chiến lược và giá trị — dự án nào được chọn, tài trợ thế nào, chính sách cổ tức. Các công ty tư vấn quản lý bán “tư vấn tăng giá trị” (động cơ: sợ bị thâu tóm thù địch).' }
    ] }
  ],
  summary: [
    'Giá ≠ giá trị: đầu tư lành mạnh không trả cao hơn giá trị; giá trị dựa trên dòng tiền kỳ vọng, không dựa vào “kẻ ngốc lớn hơn”.',
    'Định giá không khách quan, không bất biến, không chính xác tuyệt đối; phức tạp hơn không có nghĩa tốt hơn.',
    'Nguyên tắc tiết kiệm (parsimony): không dùng nhiều đầu vào hơn mức cần; mô hình không định giá công ty, người dùng mô hình mới định giá.',
    'Tin thị trường “hoài nghi thận trọng”: thị trường có thể sai nhưng tìm ra sai lầm khó; mặc định thị trường đúng khi chênh lớn.',
    'Quá trình định giá quan trọng ngang kết quả.',
    'Vai trò: quản lý danh mục (tuỳ triết lý), M&A (hiệp lực, thay đổi quản lý, thiên kiến), tài chính doanh nghiệp (quyết định → giá trị).'
  ],
  cards: [
    ['Thuyết “bigger fool” là gì và vì sao nguy hiểm?', 'Giá trị không quan trọng miễn có người ngốc hơn mua lại. Nguy hiểm vì không đảm bảo người đó còn đó khi cần bán.'],
    ['Định đề cơ bản của đầu tư lành mạnh?', 'Không trả cho tài sản nhiều hơn giá trị của nó (dòng tiền kỳ vọng).'],
    ['Vì sao tài sản tài chính khác tranh nghệ thuật?', 'Tài sản tài chính được mua vì dòng tiền kỳ vọng, không vì cảm xúc/thẩm mỹ.'],
    ['Huyền thoại 1 là gì và vì sao sai?', '“Định lượng nên khách quan” – sai vì đầu vào chứa phán đoán chủ quan; nhiều khi giá được chốt trước.'],
    ['Cách giảm thiên kiến khi định giá?', 'Không tuyên bố lập trường công khai trước khi xong; giảm lợi ích cá nhân vào kết quả.'],
    ['Tỷ lệ khuyến nghị mua so với bán của nhà phân tích?', 'Khoảng 10 : 1 – thiên về mua.'],
    ['Vì sao định giá nhanh “cũ”?', 'Thông tin công ty, ngành, thị trường (lãi suất, kinh tế) liên tục đổi.'],
    ['Độ chính xác của định giá phụ thuộc gì?', 'Vòng đời công ty: mature dễ hơn growth, khởi nghiệp và thị trường mới nổi khó nhất.'],
    ['Nguyên tắc tiết kiệm (parsimony)?', 'Không dùng nhiều đầu vào hơn mức thực sự cần để định giá tài sản.'],
    ['“Mô hình không định giá công ty: bạn định giá” nghĩa là gì?', 'Trách nhiệm và phán đoán thuộc về người dùng mô hình, không đổ lỗi cho “hộp đen”.'],
    ['Lập trường của tác giả về hiệu quả thị trường?', 'Hoài nghi thận trọng: thị trường có sai lầm nhưng tìm ra cần kỹ năng + may mắn; chênh lớn thì mặc định thị trường đúng.'],
    ['Vì sao quá trình định giá quan trọng?', 'Cho thấy các yếu tố quyết định giá trị: trả bao nhiêu cho tăng trưởng, thương hiệu, biên lợi nhuận, lợi suất dự án.'],
    ['Ba giả định của phân tích cơ bản?', 'Quan hệ giá trị – yếu tố tài chính đo được; ổn định theo thời gian; sai lệch được điều chỉnh trong thời gian hợp lý.'],
    ['Franchise buyer là ai (ví dụ)?', 'Nhà đầu tư như Buffett: chỉ mua doanh nghiệp đơn giản, ổn định, hiểu rõ.'],
    ['Với người tin thị trường hiệu quả, định giá để làm gì?', 'Hiểu giả định tăng trưởng và rủi ro hàm ý trong giá thị trường.'],
    ['Hai thiên kiến điển hình trong M&A?', 'Bên bán quá lạc quan; bên mua đã quyết định mua nên định giá để biện minh.'],
    ['Trong thâu tóm cần tính thêm gì?', 'Hiệp lực (synergy) và tác động của thay đổi quản lý/tái cấu trúc.']
  ],
  quiz: [
    { q: 'Theo định đề của đầu tư lành mạnh, nhà đầu tư không nên:', o: ['Mua cổ phiếu', 'Trả cho tài sản nhiều hơn giá trị của nó', 'Bán khi giá cao', 'Đa dạng hoá'], a: 1, e: 'Giá phải phản ánh dòng tiền kỳ vọng.' },
    { q: 'Thuyết “bigger fool” cho rằng:', o: ['Giá trị quan trọng nhất', 'Giá trị không quan trọng nếu có người sẽ mua lại với giá cao hơn', 'Thị trường luôn hiệu quả', 'Nên mua trái phiếu'], a: 1, e: 'Rất nguy hiểm vì không đảm bảo có người mua tiếp.' },
    { q: 'Vì sao định giá định lượng vẫn không hoàn toàn khách quan?', o: ['Do máy tính sai', 'Các đầu vào chứa phán đoán chủ quan', 'Do thuế', 'Do luật'], a: 1, e: 'Thiên kiến nằm ở đầu vào.' },
    { q: 'Nhà phân tích sell-side có xu hướng:', o: ['Khuyến nghị bán nhiều hơn mua', 'Khuyến nghị mua nhiều hơn bán', 'Không khuyến nghị', 'Luôn trung lập'], a: 1, e: 'Khoảng 10 mua : 1 bán.' },
    { q: 'Câu nói “Khi sự kiện thay đổi, tôi đổi ý” của Keynes liên quan huyền thoại nào?', o: ['Định giá là bất biến', 'Định giá chính xác tuyệt đối', 'Càng định lượng càng tốt', 'Thị trường luôn đúng'], a: 0, e: 'Định giá phải cập nhật theo thông tin mới.' },
    { q: 'Nơi nào định giá khó chính xác nhất?', o: ['Công ty lớn trưởng thành', 'Công ty khởi nghiệp ở thị trường mới nổi', 'Ngân hàng lâu đời', 'Công ty tiện ích'], a: 1, e: 'Bất định về tương lai bị khuếch đại.' },
    { q: 'Nguyên tắc parsimony yêu cầu:', o: ['Dùng nhiều đầu vào nhất có thể', 'Không dùng nhiều đầu vào hơn mức cần thiết', 'Bỏ qua dữ liệu', 'Chỉ dùng P/E'], a: 1, e: 'Đánh đổi giữa chi tiết và sai số ước tính.' },
    { q: 'Nhà đầu tư “hoài nghi thận trọng” khi định giá lệch lớn so với giá thị trường sẽ:', o: ['Mua ngay', 'Mặc định thị trường đúng và tự thuyết phục mình trước khi kết luận sai', 'Bán khống ngay', 'Bỏ qua mô hình'], a: 1, e: 'Chuẩn cao hơn giúp thận trọng hơn.' },
    { q: 'Với “nhà đầu tư thị trường hiệu quả”, định giá chủ yếu giúp:', o: ['Tìm cổ phiếu bị định giá sai', 'Xác định giả định tăng trưởng và rủi ro hàm ý trong giá', 'Dự đoán biểu đồ', 'Tăng giao dịch'], a: 1, e: 'Giá thị trường được coi là ước tính tốt nhất.' },
    { q: 'Triết lý nào đặt định giá ở trung tâm?', o: ['Chartist', 'Phân tích cơ bản', 'Giao dịch theo thông tin', 'Market timer'], a: 1, e: 'Dùng DCF hoặc bội số.' },
    { q: 'Franchise buyer điển hình là:', o: ['Nhà đầu tư thụ động', 'Warren Buffett', 'Chartist', 'Nhà đầu cơ ngắn hạn'], a: 1, e: 'Mua doanh nghiệp đơn giản, ổn định mà mình hiểu.' },
    { q: 'Khi định giá mục tiêu thâu tóm, điều BẮT BUỘC cân nhắc là:', o: ['Màu logo', 'Hiệp lực và tác động thay đổi quản lý', 'Số nhân viên', 'Tên miền'], a: 1, e: 'Không thể nói hiệp lực là “không định lượng được”.' },
    { q: 'Thiên kiến thường gặp của bên mua đã quyết định mua vì chiến lược là:', o: ['Định giá thấp để rẻ', 'Áp lực đưa ra giá trị biện minh cho thương vụ', 'Từ chối', 'Không định giá'], a: 1, e: 'Phân tích thường ủng hộ quyết định đã có.' },
    { q: 'Câu trả lời đúng cho câu hỏi trắc nghiệm “giá trị của một khoản đầu tư là…” (chương 1) là:', o: ['Chỉ nhận thức nhà đầu tư', 'Chỉ cung cầu', 'Tất cả các phương án trên (hiện giá dòng tiền, nhận thức, cung cầu, ước tính chủ quan)', 'Không xác định'], a: 2, e: 'Đáp án sách: E – all of the above, nhưng nền tảng vẫn là dòng tiền.' }
  ],
  match: [
    ['Bigger fool', 'Giá trị không quan trọng nếu có người mua lại giá cao hơn'],
    ['Parsimony', 'Không dùng nhiều đầu vào hơn mức cần'],
    ['Fundamental analyst', 'Giá trị thật gắn với tăng trưởng, rủi ro, dòng tiền'],
    ['Franchise buyer', 'Mua doanh nghiệp đơn giản mình hiểu (Buffett)'],
    ['Chartist', 'Giá chịu ảnh hưởng tâm lý nhà đầu tư'],
    ['Market timer', 'Dự đoán chu kỳ cả thị trường'],
    ['Efficient marketer', 'Giá thị trường là ước tính tốt nhất của giá trị'],
    ['Synergy', 'Giá trị tăng thêm khi hợp nhất hai công ty'],
    ['Keynes', '“Khi sự kiện thay đổi, tôi đổi ý”'],
    ['Oscar Wilde', 'Biết giá của mọi thứ nhưng không biết giá trị của thứ nào']
  ]
},

/* ===================== CHƯƠNG 2 ===================== */
{
  n: 2,
  title: 'Các phương pháp định giá',
  intro: 'Ba cách tiếp cận: chiết khấu dòng tiền (DCF), định giá tương đối và định giá theo quyền chọn (contingent claim). Hiểu cách phân loại giúp biết mô hình nào dùng khi nào, và vì sao kết quả khác nhau.',
  sections: [
    { icon: '🧭', title: 'Ba cách tiếp cận', blocks: [
      { t: 'table', head: ['Cách tiếp cận', 'Ý tưởng', 'Ví dụ'], rows: [
        ['<b>Chiết khấu dòng tiền (DCF)</b>', 'Giá trị = hiện giá dòng tiền kỳ vọng', 'Cổ phiếu, trái phiếu, dự án'],
        ['<b>Định giá tương đối</b>', 'Giá trị suy ra từ giá của tài sản “tương đương”, chuẩn hoá bằng lợi nhuận, dòng tiền, giá trị sổ sách hoặc doanh thu', 'P/E ngành, P/B, P/S'],
        ['<b>Quyền chọn (contingent claim)</b>', 'Dùng mô hình quyền chọn cho tài sản có tính chất quyền chọn', 'Warrant, bằng sáng chế, trữ lượng dầu chưa khai thác (quyền chọn thực)']
      ] },
      { t: 'key', x: 'Phần lớn định giá ngoài thực tế là <b>định giá tương đối</b>, nhưng <b>DCF là nền tảng</b>: muốn dùng bội số đúng phải hiểu DCF, và muốn định giá quyền chọn thường phải bắt đầu từ DCF.' }
    ] },
    { icon: '💰', title: 'Định giá chiết khấu dòng tiền (DCF)', blocks: [
      { t: 'key', x: '<b>Value = Σ CF<sub>t</sub> ÷ (1 + r)<sup>t</sup></b>, t = 1…n · n: đời sống tài sản · CF<sub>t</sub>: dòng tiền kỳ t · r: tỷ suất chiết khấu phản ánh rủi ro của dòng tiền.' },
      { t: 'p', x: 'Dòng tiền tuỳ tài sản: cổ tức (cổ phiếu), coupon + mệnh giá (trái phiếu), dòng tiền sau thuế (dự án). Rủi ro càng cao → r càng cao. Có thể xem DCF như một <b>phổ</b>: trái phiếu zero-coupon không rủi ro (chiết khấu bằng lãi suất phi rủi ro) → trái phiếu công ty (rủi ro vỡ nợ) → cổ phiếu (bất định lớn).' },
      { t: 'p', x: '<b>Giá trị nội tại</b> (intrinsic value): giá trị mà một nhà phân tích “biết hết” sẽ gán, với dòng tiền và tỷ suất chiết khấu đúng. Giá thị trường có thể lệch giá trị nội tại nhưng được giả định <b>hội tụ</b> sớm hay muộn.' },
      { t: 'h3', x: 'Phân loại mô hình DCF (I): ba lối đi' },
      { t: 'tabs', items: [
        ['Vốn chủ sở hữu', '<p>Chiết khấu <b>dòng tiền cho vốn chủ sở hữu</b> (sau chi phí, tái đầu tư, thuế và thanh toán nợ ròng) bằng <b>chi phí vốn chủ sở hữu (k<sub>e</sub>)</b>. Mô hình chiết khấu cổ tức là trường hợp đặc biệt.</p>'],
        ['Doanh nghiệp', '<p>Chiết khấu <b>dòng tiền cho doanh nghiệp</b> (trước trả nợ và chủ sở hữu) bằng <b>chi phí vốn bình quân gia quyền (WACC)</b>. Giá trị vốn chủ sở hữu = giá trị doanh nghiệp − nợ.</p>'],
        ['APV', '<p><b>Giá trị hiện tại điều chỉnh</b>: giá trị doanh nghiệp không vay nợ + hiện giá lợi ích thuế của nợ − chi phí phá sản kỳ vọng.</p>']
      ] },
      { t: 'mnemo', x: '<b>Phép thử đơn giản</b>: dòng tiền được chiết khấu là <b>sau</b> lãi vay (và gốc) → dòng tiền vốn chủ sở hữu → dùng chi phí vốn chủ sở hữu. Là <b>trước</b> lãi vay và gốc → dòng tiền doanh nghiệp → dùng WACC.' },
      { t: 'widget', name: 'dcf-match', title: 'Ví dụ 2.1 – khớp dòng tiền với tỷ suất chiết khấu' },
      { t: 'warn', x: 'Sai lầm kinh điển: chiết khấu dòng tiền vốn chủ sở hữu bằng WACC → <b>định giá quá cao</b> (1.248 so 1.073 đúng); chiết khấu dòng tiền doanh nghiệp bằng chi phí vốn chủ sở hữu → <b>định giá quá thấp</b>.' },
      { t: 'h3', x: 'Phân loại (II): dòng tiền toàn phần vs dòng tiền vượt trội' },
      { t: 'p', x: 'Mô hình <b>lợi nhuận vượt trội (excess return)</b> chỉ coi phần vượt yêu cầu là tạo giá trị: Giá trị = vốn đầu tư + hiện giá lợi nhuận vượt trội. Ví dụ đầu tư 100 triệu, dòng tiền 12 triệu/năm vĩnh viễn, chi phí vốn 10%: toàn phần = 12 ÷ 0,10 = <b>120</b>; vượt trội = (12 − 0,10×100) = 2 → 2 ÷ 0,10 + 100 = <b>120</b>. Hai cách tương đương nhưng cách sau nhấn mạnh: <b>không phải lợi nhuận tạo giá trị mà là lợi nhuận vượt yêu cầu</b> (nền của EVA).' },
      { t: 'h3', x: 'Khi nào DCF gặp khó?' },
      { t: 'table', head: ['Loại công ty', 'Vấn đề'], rows: [
        ['<b>Gặp khó khăn</b>', 'Dòng tiền âm, khả năng phá sản; hiện giá dòng tiền âm có thể cho giá trị âm (nhưng vốn chủ sở hữu không thể âm)'],
        ['<b>Chu kỳ</b>', 'Dòng tiền theo kinh tế; thường làm mượt; ở đáy suy thoái trông như công ty khó khăn → thiên kiến của người dự báo'],
        ['<b>Tài sản chưa dùng</b>', 'Không sinh dòng tiền nên không vào DCF → định giá riêng rồi cộng thêm'],
        ['<b>Bằng sáng chế/giấy phép</b>', 'Chưa có dòng tiền nhưng có giá trị → định giá thị trường hoặc quyền chọn rồi cộng thêm'],
        ['<b>Đang tái cấu trúc</b>', 'Dữ liệu lịch sử gây hiểu sai; phải đưa tác động thay đổi vào dòng tiền và tỷ suất chiết khấu'],
        ['<b>Mua lại</b>', 'Hiệp lực và thay đổi quản lý — vẫn đưa được vào dòng tiền và r'],
        ['<b>Doanh nghiệp tư nhân</b>', 'Khó đo rủi ro (không có giá giao dịch) → dùng công ty cùng ngành niêm yết hoặc biến kế toán']
      ] },
      { t: 'tip', x: 'Định giá đơn giản với công ty có tài sản rõ ràng và dòng tiền dự báo được; thử thách thật sự là mở rộng khung cho các công ty khác thế.' }
    ] },
    { icon: '⚖️', title: 'Định giá tương đối', blocks: [
      { t: 'p', x: 'Giá trị suy ra từ giá của tài sản “tương đương”, chuẩn hoá bằng biến chung (lợi nhuận, dòng tiền, giá trị sổ sách, doanh thu). Phổ biến: <b>P/E</b>, <b>P/B</b>, <b>P/S</b>; còn có giá/dòng tiền, giá/cổ tức, giá thị trường/chi phí thay thế (<b>Tobin’s Q</b>).' },
      { t: 'key', x: 'Giả định nền: <b>thị trường định giá đúng trên trung bình</b> nhưng mắc lỗi ở từng cổ phiếu; so sánh bội số cho thấy lỗi và lỗi sẽ được sửa. (Người ủng hộ DCF phản bác: vô ích nếu cả ngành bị định giá cao 50%.)' },
      { t: 'tabs', items: [
        ['Nền tảng vs so sánh', '<p><b>Dựa trên nền tảng (fundamentals)</b>: rút bội số từ mô hình DCF (tăng trưởng, tỷ lệ chi trả, rủi ro) → thấy bội số thay đổi thế nào theo biên lợi nhuận, tăng trưởng, ROE.</p><p><b>Dựa trên so sánh (comparables)</b>: phổ biến hơn; khó tìm công ty thật sự giống nên phải kiểm soát khác biệt về tăng trưởng, rủi ro, dòng tiền — từ ngây thơ (trung bình ngành) đến tinh vi (hồi quy đa biến).</p>'],
        ['Cắt ngang vs chuỗi thời gian', '<p><b>Cắt ngang</b>: so với công ty cùng ngành; không thể so sánh mà không đặt giả định về nền tảng (công ty rủi ro cao hơn nên có bội số thấp hơn).</p><p><b>Chuỗi thời gian</b>: so với bội số lịch sử của chính nó (cho công ty trưởng thành); giả định nền tảng không đổi — nhưng lãi suất và thị trường chung thay đổi (lãi suất giảm → bội số cao hơn lịch sử).</p>']
      ] },
      { t: 'widget', name: 'pe-comps', title: 'Ví dụ 2.2 – thiên kiến khi chọn công ty so sánh (P/E ngành phần mềm cuối 1992)' },
      { t: 'warn', x: 'Điểm mạnh: đơn giản, nhanh, hữu ích khi có nhiều công ty so sánh. Điểm yếu: <b>dễ bị lạm dụng</b> (định nghĩa “tương đương” chủ quan: bỏ 2 P/E thấp nhất → trung bình 27; bỏ 2 cao nhất → 21; thay vì 24), và thừa hưởng sai lầm của thị trường (nếu cả ngành bị định giá cao). DCF buộc người dùng nói rõ giả định; bội số để chúng ngầm.' }
    ] },
    { icon: '🧱', title: 'Định giá dựa trên tài sản', blocks: [
      { t: 'p', x: 'Một số người thêm cách thứ tư: cộng giá trị từng tài sản. Có <b>giá trị thanh lý</b> (tổng tiền bán tài sản) và <b>chi phí thay thế</b>. Tác giả không coi là cách riêng vì cả hai vẫn phải dùng DCF, tương đối hay quyền chọn để định giá từng tài sản; chỉ xét “tài sản hiện có”, bỏ qua tiềm năng tăng trưởng. Hai cách chỉ cho cùng kết quả khi công ty không có tài sản tăng trưởng.' }
    ] },
    { icon: '🎲', title: 'Định giá theo quyền chọn (Contingent claim)', blocks: [
      { t: 'p', x: 'Một phát triển cách mạng: giá trị tài sản có thể <b>lớn hơn hiện giá dòng tiền kỳ vọng</b> nếu dòng tiền phụ thuộc vào việc một sự kiện có xảy ra hay không. <b>Quyền chọn mua (call)</b> sinh lời khi giá tài sản cơ sở vượt giá thực hiện; <b>quyền chọn bán (put)</b> khi dưới giá thực hiện.' },
      { t: 'list', items: [
        'Năm biến định giá quyền chọn (Black–Scholes 1972): <b>giá trị hiện tại</b> của tài sản cơ sở, <b>phương sai</b> của giá trị đó, <b>giá thực hiện</b>, <b>thời gian đáo hạn</b>, <b>lãi suất phi rủi ro</b>. Có mô hình nhị phân (binomial) rời rạc.',
        'Ví dụ trữ lượng dầu chưa khai thác của Exxon: sẽ khai thác nếu giá dầu tăng hoặc chi phí giảm, không khai thác nếu ngược lại → DCF bỏ sót quyền này.',
        'Phân loại: quyền chọn trên tài sản <b>tài chính</b> vs <b>thực</b> (real options); tài sản <b>giao dịch</b> vs <b>không giao dịch</b> (khó hơn vì không có đầu vào từ thị trường).',
        'Ứng dụng trực tiếp: LEAPs, CVR (quyền giá trị bảo vệ), warrant. Gián tiếp: <b>vốn chủ sở hữu</b> như call option trên giá trị công ty (giá thực hiện = mệnh giá nợ); <b>bằng sáng chế</b> như call option trên sản phẩm.'
      ] },
      { t: 'warn', x: 'Giới hạn: giả định phương sai và tỷ suất cổ tức không đổi khó bảo vệ với quyền chọn dài hạn; với tài sản không giao dịch, giá trị và phương sai phải ước tính → sai số lớn hơn.' }
    ] }
  ],
  summary: [
    'Ba cách tiếp cận: DCF, định giá tương đối, quyền chọn; DCF là nền tảng cho hai cách còn lại.',
    'DCF: Value = Σ CF/(1+r)^t; ba lối: vốn chủ sở hữu (chiết khấu bằng k_e), doanh nghiệp (WACC), APV.',
    'Luôn khớp dòng tiền với tỷ suất chiết khấu: CF sau lãi vay ↔ k_e; CF trước lãi vay ↔ WACC.',
    'Mô hình lợi nhuận vượt trội cho cùng giá trị nhưng nhấn mạnh chỉ phần vượt yêu cầu tạo giá trị.',
    'DCF khó với công ty khó khăn, chu kỳ, tài sản chưa dùng, bằng sáng chế, tái cấu trúc, mua lại, công ty tư nhân – cần điều chỉnh.',
    'Định giá tương đối đơn giản nhưng dễ thiên kiến; định giá quyền chọn dùng cho tài sản có tính “có điều kiện” (5 biến Black–Scholes).'
  ],
  cards: [
    ['Ba cách tiếp cận định giá?', 'DCF, định giá tương đối, định giá theo quyền chọn (contingent claim).'],
    ['Công thức DCF?', 'Value = Σ CF_t ÷ (1 + r)^t (t = 1…n).'],
    ['Giá trị nội tại là gì?', 'Giá trị do một nhà phân tích “biết tất cả” gán, với dòng tiền và tỷ suất chiết khấu đúng.'],
    ['Ba lối đi của DCF?', 'Định giá vốn chủ sở hữu, định giá doanh nghiệp, APV.'],
    ['Dòng tiền vốn chủ sở hữu chiết khấu bằng gì?', 'Chi phí vốn chủ sở hữu (k_e).'],
    ['Dòng tiền doanh nghiệp chiết khấu bằng gì?', 'WACC – chi phí vốn bình quân gia quyền.'],
    ['APV là gì?', 'Giá trị doanh nghiệp không vay nợ + hiện giá lợi ích thuế của nợ − chi phí phá sản kỳ vọng.'],
    ['Phép thử phân biệt CF vốn chủ sở hữu và CF doanh nghiệp?', 'Sau lãi vay (và gốc) → CF vốn chủ sở hữu; trước lãi vay và gốc → CF doanh nghiệp.'],
    ['Chiết khấu CF vốn chủ sở hữu bằng WACC gây ra gì?', 'Định giá vốn chủ sở hữu quá cao.'],
    ['Chiết khấu CF doanh nghiệp bằng k_e gây ra gì?', 'Định giá doanh nghiệp quá thấp.'],
    ['Mô hình lợi nhuận vượt trội?', 'Giá trị = vốn đầu tư + hiện giá lợi nhuận vượt yêu cầu; cho cùng kết quả với DCF toàn phần.'],
    ['Vì sao DCF khó với công ty gặp khó khăn?', 'Dòng tiền âm, rủi ro phá sản; hiện giá dòng tiền âm có thể cho giá trị âm.'],
    ['Cách xử lý tài sản chưa dùng trong DCF?', 'Định giá riêng (thị trường) rồi cộng thêm vào giá trị DCF.'],
    ['Định giá tương đối dựa trên giả định gì?', 'Thị trường định giá đúng trung bình nhưng sai ở từng cổ phiếu, và sai lầm sẽ được sửa.'],
    ['Nguy cơ chính của định giá tương đối?', 'Chọn công ty so sánh thiên kiến; thừa hưởng sai lầm của thị trường; giả định ngầm.'],
    ['Tobin’s Q là gì?', 'Giá trị thị trường ÷ chi phí thay thế.'],
    ['Năm biến định giá quyền chọn?', 'Giá trị tài sản cơ sở, phương sai, giá thực hiện, thời gian đáo hạn, lãi suất phi rủi ro.'],
    ['Ví dụ coi vốn chủ sở hữu như quyền chọn?', 'Call option trên giá trị công ty; giá thực hiện là mệnh giá nợ.']
  ],
  quiz: [
    { q: 'Công thức giá trị DCF đúng là:', o: ['Σ CF_t × (1 + r)^t', 'Σ CF_t ÷ (1 + r)^t', 'CF_1 ÷ r', 'Σ CF_t ÷ t'], a: 1, e: 'Chiết khấu từng dòng tiền về hiện tại.' },
    { q: 'Dòng tiền SAU lãi vay và trả nợ gốc nên chiết khấu bằng:', o: ['WACC', 'Chi phí vốn chủ sở hữu', 'Lãi suất phi rủi ro', 'Lãi suất vay'], a: 1, e: 'Đó là dòng tiền vốn chủ sở hữu.' },
    { q: 'Dòng tiền TRƯỚC lãi vay (cho doanh nghiệp) nên chiết khấu bằng:', o: ['k_e', 'WACC', 'Lãi suất phi rủi ro', 'Lãi suất tiền gửi'], a: 1, e: 'WACC phản ánh mọi nguồn vốn.' },
    { q: 'Chiết khấu dòng tiền vốn chủ sở hữu bằng WACC sẽ:', o: ['Định giá quá thấp', 'Định giá quá cao', 'Đúng', 'Không ảnh hưởng'], a: 1, e: 'WACC thấp hơn k_e nên hiện giá lớn hơn.' },
    { q: 'Giá trị doanh nghiệp theo APV bằng:', o: ['Giá trị không vay nợ + hiện giá lợi ích thuế của nợ − chi phí phá sản kỳ vọng', 'Chỉ giá trị vốn chủ sở hữu', 'Giá sổ sách', 'Doanh thu × P/S'], a: 0, e: 'Tách tác động của nợ ra.' },
    { q: 'Tài sản 100 triệu, dòng tiền 12 triệu/năm vĩnh viễn, chi phí vốn 10%. Giá trị là:', o: ['100', '120', '12', '220'], a: 1, e: '12 ÷ 0,10 = 120 (tương đương 100 + 2/0,10).' },
    { q: 'Vì sao mô hình lợi nhuận vượt trội hữu ích?', o: ['Nhanh hơn', 'Nhấn mạnh chỉ phần lợi nhuận vượt yêu cầu mới tạo giá trị', 'Bỏ chi phí vốn', 'Không cần dòng tiền'], a: 1, e: 'Là nền tảng của EVA.' },
    { q: 'Tài sản chưa sử dụng của công ty khi dùng DCF nên:', o: ['Bỏ qua', 'Định giá riêng rồi cộng thêm', 'Trừ đi', 'Tính vào WACC'], a: 1, e: 'Vì chúng không sinh dòng tiền trong DCF.' },
    { q: 'Công ty chu kỳ khó định giá DCF vì:', o: ['Không có tài sản', 'Dòng tiền biến động theo kinh tế và phụ thuộc dự báo thời điểm chu kỳ', 'Không có nợ', 'Không có cổ đông'], a: 1, e: 'Thiên kiến kinh tế của người dự báo ảnh hưởng giá trị.' },
    { q: 'Nền tảng của định giá tương đối là giả định:', o: ['Thị trường luôn sai', 'Thị trường định giá đúng trung bình, sai ở từng cổ phiếu', 'Không cần so sánh', 'Giá trị sổ sách luôn đúng'], a: 1, e: 'So sánh bội số giúp phát hiện lỗi.' },
    { q: 'Ví dụ phần mềm: bỏ hai P/E thấp nhất khỏi mẫu thì P/E trung bình:', o: ['Giảm', 'Tăng (khoảng 27)', 'Không đổi', 'Về 0'], a: 1, e: 'Minh hoạ thiên kiến khi chọn công ty so sánh.' },
    { q: 'Điểm yếu lớn của định giá tương đối so với DCF là:', o: ['Phức tạp hơn', 'Giả định ngầm, dễ thiên kiến và thừa hưởng sai lầm của thị trường', 'Cần nhiều dữ liệu hơn', 'Không dùng được'], a: 1, e: 'DCF buộc giả định phải nói rõ.' },
    { q: 'Định giá theo quyền chọn phù hợp nhất với:', o: ['Trái phiếu kho bạc', 'Bằng sáng chế hay trữ lượng dầu chưa khai thác', 'Tiền mặt', 'Hàng tồn kho'], a: 1, e: 'Dòng tiền có điều kiện vào sự kiện.' },
    { q: 'Biến nào KHÔNG phải đầu vào mô hình Black–Scholes?', o: ['Giá thực hiện', 'Thời gian đáo hạn', 'Phương sai', 'Số nhân viên'], a: 3, e: 'Năm biến: giá trị cơ sở, phương sai, giá thực hiện, thời gian, lãi suất phi rủi ro.' },
    { q: 'Vốn chủ sở hữu có thể xem là:', o: ['Put option trên nợ', 'Call option trên giá trị công ty với giá thực hiện là mệnh giá nợ', 'Trái phiếu', 'Tiền mặt'], a: 1, e: 'Cổ đông giữ quyền còn lại sau khi trả nợ.' }
  ],
  match: [
    ['DCF', 'Hiện giá dòng tiền kỳ vọng'],
    ['WACC', 'Chiết khấu dòng tiền doanh nghiệp'],
    ['k_e', 'Chiết khấu dòng tiền vốn chủ sở hữu'],
    ['APV', 'Giá trị không vay nợ + tác động của nợ'],
    ['Excess return', 'Chỉ phần vượt yêu cầu tạo giá trị'],
    ['Tobin’s Q', 'Giá thị trường ÷ chi phí thay thế'],
    ['P/E, P/B, P/S', 'Các bội số định giá tương đối'],
    ['Real option', 'Quyền chọn trên tài sản thực'],
    ['Black–Scholes', 'Mô hình định giá quyền chọn'],
    ['Giá trị thanh lý', 'Tổng tiền bán các tài sản']
  ]
}

);
