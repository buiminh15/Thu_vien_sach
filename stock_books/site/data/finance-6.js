// "Phân tích tài chính" – Bài 14–15.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 14 ======================= */
{
  n: 14,
  title: 'Thuê tài sản: thuê hay mua?',
  intro: 'Thuê là cách có tài sản mà không cần sở hữu. Phân biệt thuê hoạt động và thuê tài chính, lợi ích của việc thuê, vai trò của thuế, cách so sánh chi phí thuê với chi phí mua bằng hiện giá, và tác động lên báo cáo tài chính.',
  sections: [
    { icon: '🔑', title: 'Hai loại thuê tài sản', blocks: [
      { t: 'p', x: '<b>Thuê</b> là hợp đồng trong đó chủ sở hữu (<b>người cho thuê</b>) cho <b>người thuê</b> quyền sử dụng tài sản trong một khoảng thời gian để đổi lấy chuỗi thanh toán định kỳ. Về pháp lý người cho thuê giữ quyền sở hữu.' },
      { t: 'table', head: ['', 'Thuê hoạt động', 'Thuê tài chính (thuê vốn)'], rows: [
        ['Bản chất', 'Cho thuê theo yêu cầu thời gian của bên thuê; phí thuê bao hàm hao mòn, bảo dưỡng, bảo hiểm và lợi nhuận bên cho thuê', 'Một <b>phương pháp tài trợ</b>: bên cho thuê mua tài sản (theo lựa chọn của người thuê) và chuyển thẳng tới bên thuê; người thuê giống người đi vay, người cho thuê như chủ nợ có bảo đảm'],
        ['Đặc điểm', 'Linh hoạt hơn, nhưng phí thuê cao vì bên cho thuê chịu rủi ro lạc hậu và giảm giá', 'Phải thỏa <b>một</b> trong: chuyển quyền sở hữu khi hết hạn; có quyền chọn mua; thời gian thuê ≥ <b>75%</b> tuổi thọ hữu dụng; hiện giá tiền thuê ≥ giá thị trường tài sản']
      ] }
    ] },
    { icon: '🎁', title: 'Lợi ích của việc thuê', blocks: [
      { t: 'list', items: [
        '<b>Tránh rủi ro sở hữu</b>: lạc hậu, bảo trì, giá trị còn lại — bên cho thuê gánh rủi ro nhưng tính vào phí thuê.',
        '<b>Linh hoạt</b>: hợp đồng có thể hủy ngang → phản ứng nhanh với thay đổi thị trường.',
        '<b>Lợi ích thuế</b>: chi phí thuê trừ trước thuế — nhưng chỉ có lợi khi công ty <b>có lợi nhuận</b> để hưởng lá chắn thuế.',
        '<b>Kịp thời</b>: quyết định thuê thường nhanh hơn quy trình quyết định đầu tư mua.',
        '<b>Giảm hạn chế tín dụng</b>: có tài sản khi hạn hẹp ngân quỹ hoặc thiếu vốn đối ứng; có thể không làm tăng tỷ số nợ; với công ty xếp hạng tín dụng thấp là cách huy động nợ dễ nhất.'
      ] },
      { t: 'key', x: '<b>Thuế</b>: người đi thuê được khấu trừ thuế cả phần “lãi” và phần “gốc” của chi phí thuê, khác với vay mua (chỉ khấu trừ lãi, nhưng được khấu hao tài sản). Do đó cơ quan thuế phải làm rõ hợp đồng thuê là thật hay là mua được ngụy trang; nếu thật sự là mua thì chỉ phần lãi được trừ thuế.' }
    ] },
    { icon: '🧮', title: 'So sánh chi phí thuê và chi phí mua', blocks: [
      { t: 'steps', items: [
        '<b>Chi phí thuê</b> = hiện giá chuỗi tiền thuê <b>sau thuế</b>, chiết khấu theo <b>chi phí nợ sau thuế</b> (vì tiền thuê cố định giống khoản trả nợ → rủi ro tương đương nợ).',
        '<b>Chi phí mua</b> = hiện giá của: giá mua + chi phí bảo trì sau thuế − lá chắn thuế của khấu hao − giá trị thanh lý. Dòng thuộc nợ chiết khấu ở chi phí nợ sau thuế; <b>giá trị thanh lý</b> (rủi ro như hoạt động công ty) chiết khấu theo <b>WACC</b>.',
        '<b>Lợi ích của việc thuê = Chi phí mua − Chi phí thuê</b>. Dương → nên thuê.'
      ] },
      { t: 'p', x: '<b>Ví dụ công ty ZN</b>: thuê hệ thống máy tính $21.000/năm trả đầu kỳ, 7 năm; thuế 35%; vay 12,31% → chi phí nợ sau thuế 8%. Mua: giá $100.000, tuổi thọ kinh tế 7 năm, khấu hao 5 năm × $20.000, thanh lý sau thuế $20.000 cuối năm 7; bảo trì cố định $6.000 cuối mỗi năm trong 6 năm; WACC 12%.' },
      { t: 'table', head: ['', 'Tính toán'], rows: [
        ['Chi phí thuê', '21.000 × (1 − 35%) = 13.650/năm; annuity-due 7 năm @8%: 13.650 × (1 + 4,6229) = <b>$76.753</b>'],
        ['Chi phí mua', '100.000 + bảo trì sau thuế 3.900 × 4,6229 (18.030) − lá chắn khấu hao 7.000 × 3,9927 (27.949) − thanh lý 20.000/1,12⁷ (9.047) = <b>$81.033</b>'],
        ['<b>Lợi ích của thuê</b>', '81.033 − 76.753 = <b>$4.280</b> → nên thuê']
      ] },
      { t: 'widget', name: 'lease', title: 'So sánh hiện giá thuê và mua' },
      { t: 'tip', x: 'Có thể tìm <b>mức tiền thuê hòa vốn</b> làm chi phí thuê bằng chi phí mua — nếu tiền thuê thấp hơn mức đó thì thuê có lợi.' }
    ] },
    { icon: '📒', title: 'Tác động đến báo cáo tài chính', blocks: [
      { t: 'p', x: 'Ngân lưu giống nhau với hai loại thuê, nhưng khác ở bảng cân đối và báo cáo kết quả:' },
      { t: 'table', head: ['', 'Thuê hoạt động', 'Thuê tài chính'], rows: [
        ['Bảng cân đối', 'Tài sản thuê <b>không ghi</b> vào tài sản', '<b>Ghi vào tài sản</b> và tương ứng một <b>nợ dài hạn</b> (theo chuẩn mực quốc tế)'],
        ['Kết quả kinh doanh', 'Chi phí thuê tính trực tiếp vào chi phí hoạt động', 'Tách thành <b>khấu hao</b> và <b>chi phí lãi</b> → EBIT khác'],
        ['Lợi nhuận ròng', 'Như nhau', 'Như nhau']
      ] },
      { t: 'warn', x: 'Ví dụ (tài sản 200.000, khấu hao 10 năm, lãi 10%, tiền thuê 32.550/năm): với thuê hoạt động toàn bộ tiền thuê nằm trong chi phí hoạt động; với thuê tài chính, chi phí được tách thành khấu hao và lãi nên <b>EBIT cao hơn</b> (52.550 so với 40.000 trong bảng minh họa), đồng thời <b>tổng tài sản và nợ cao hơn</b> (bảng cân đối ghi thêm tài sản thuê) — nhưng lợi nhuận sau thuế như nhau. Vì vậy một số <b>tỷ suất sinh lời và tỷ số nợ</b> khác nhau giữa hai loại thuê.' }
    ] }
  ],
  summary: [
    'Thuê hoạt động linh hoạt, phí cao; thuê tài chính là phương pháp tài trợ giống vay nợ.',
    'Lợi ích: tránh rủi ro sở hữu, linh hoạt, thuế, kịp thời, giảm hạn chế tín dụng.',
    'Chi phí thuê chiết khấu theo chi phí nợ sau thuế; chi phí mua trừ lá chắn khấu hao và thanh lý (thanh lý theo WACC).',
    'Thuê tài chính ghi vào tài sản và nợ; thuê hoạt động không.'
  ],
  cards: [
    ['Thuê hoạt động?', 'Thuê linh hoạt theo yêu cầu, phí bao gồm hao mòn, bảo dưỡng, bảo hiểm; bên cho thuê chịu rủi ro lạc hậu.'],
    ['Thuê tài chính?', 'Phương pháp tài trợ: người thuê như người vay, người cho thuê như chủ nợ có bảo đảm.'],
    ['Điều kiện của thuê tài chính (một trong)?', 'Chuyển sở hữu; có quyền chọn mua; thuê ≥ 75% tuổi thọ; hiện giá tiền thuê ≥ giá thị trường.'],
    ['Lợi ích thuế của thuê?', 'Chi phí thuê trừ trước thuế; chỉ có lợi khi công ty có lợi nhuận.'],
    ['Vì sao chiết khấu tiền thuê theo chi phí nợ sau thuế?', 'Tiền thuê cố định có rủi ro như khoản trả nợ.'],
    ['Chi phí mua tài sản gồm?', 'Giá mua + bảo trì sau thuế − lá chắn thuế khấu hao − thanh lý.'],
    ['Giá trị thanh lý chiết khấu theo?', 'WACC vì rủi ro như hoạt động công ty.'],
    ['Lợi ích của việc thuê?', 'Chi phí mua − chi phí thuê.'],
    ['Ví dụ ZN: kết quả?', 'Chi phí mua 81.033 − chi phí thuê 76.753 = 4.280 → nên thuê.'],
    ['Khác biệt kế toán thuê tài chính và hoạt động?', 'Thuê tài chính ghi tài sản và nợ dài hạn, tách khấu hao và lãi; thuê hoạt động ghi thẳng chi phí.']
  ],
  quiz: [
    { q: 'Thuê tài chính phải thỏa một điều kiện, KHÔNG gồm:', o: ['Chuyển quyền sở hữu khi hết hạn', 'Có quyền chọn mua', 'Thời gian thuê ≥ 75% tuổi thọ', 'Thuê dưới 1 tháng'], a: 3, e: 'Đó là nét của thuê hoạt động.' },
    { q: 'Chi phí thuê được chiết khấu theo:', o: ['WACC', 'Chi phí nợ sau thuế', 'Chi phí vốn cổ phần', 'Lạm phát'], a: 1, e: 'Rủi ro như nợ.' },
    { q: 'Giá trị thanh lý của tài sản mua chiết khấu theo:', o: ['Chi phí nợ', 'WACC', '0%', 'Lãi tiết kiệm'], a: 1, e: 'Rủi ro như hoạt động công ty.' },
    { q: 'Lợi ích của thuê =', o: ['Chi phí thuê − chi phí mua', 'Chi phí mua − chi phí thuê', 'Doanh thu − chi phí', 'NPV dự án'], a: 1, e: 'Dương thì nên thuê.' },
    { q: 'Thuê hoạt động làm bảng cân đối:', o: ['Ghi tài sản và nợ', 'Không ghi tài sản thuê', 'Ghi chỉ nợ', 'Ghi hai lần'], a: 1, e: 'Khác thuê tài chính.' },
    { q: 'Lá chắn thuế chỉ có lợi khi:', o: ['Công ty lỗ', 'Công ty có lợi nhuận', 'Công ty không thuê', 'Thuế bằng 0'], a: 1, e: 'Công ty lỗ không dùng được.' },
    { q: 'Khi vay để mua tài sản, phần nào của khoản trả nợ được khấu trừ thuế?', o: ['Cả gốc và lãi', 'Chỉ phần lãi (và khấu hao tài sản)', 'Không phần nào', 'Chỉ phần gốc'], a: 1, e: 'Còn khi thuê, người thuê được trừ cả khoản trả thuê.' }
  ],
  match: [
    ['Thuê hoạt động', 'Linh hoạt, bên cho thuê chịu rủi ro lạc hậu'],
    ['Thuê tài chính', 'Phương pháp tài trợ giống vay nợ'],
    ['Lá chắn thuế', 'Chi phí thuê/khấu hao giảm thuế'],
    ['Chi phí mua − chi phí thuê', 'Lợi ích của việc thuê'],
    ['WACC', 'Chiết khấu giá trị thanh lý'],
    ['75%', 'Ngưỡng thời gian thuê tối thiểu của thuê tài chính']
  ]
},

/* ======================= BÀI 15 ======================= */
{
  n: 15,
  title: 'Công cụ tài chính phái sinh: hợp đồng tương lai và quyền chọn',
  intro: 'Phái sinh là tài sản có dòng tiền phụ thuộc vào tài sản khác. Bài này dạy hợp đồng kỳ hạn/tương lai (ký quỹ, tính theo giá thị trường hàng ngày, định giá không arbitrage) và quyền chọn mua/bán (giá trị khi đáo hạn, phí, yếu tố tác động giá).',
  sections: [
    { icon: '📜', title: 'Hợp đồng kỳ hạn và hợp đồng tương lai', blocks: [
      { t: 'key', x: '<b>Chứng khoán phái sinh</b> là tài sản tài chính có dòng tiền tương lai phụ thuộc vào giá của một <b>tài sản cơ sở</b> (hàng hóa, ngoại tệ, chứng khoán, chỉ số): forwards, futures, options, swaps.' },
      { t: 'p', x: 'Cả hai là hợp đồng mua/bán <b>một số lượng xác định tài sản cơ sở</b>, <b>tại một thời điểm xác định trong tương lai</b>, <b>với mức giá xác định ngay lúc ký</b> (giá kỳ hạn/giá tương lai). Lúc ký không trao đổi tài sản hay tiền. Ví dụ: 1/9/2002 A ký mua của B 1 tấn gạo giao 1/12/2002 giá 5.000 đ/kg — dù giá thị trường lúc đó thế nào, hai bên vẫn phải thực hiện.' },
      { t: 'table', head: ['', 'Kỳ hạn (forward)', 'Tương lai (futures)'], rows: [
        ['Chuẩn hóa', 'Không; thương lượng riêng', 'Có (tài sản, số lượng, thanh toán, kỳ hạn)'],
        ['Nơi giao dịch', 'Thị trường phi tập trung, trực tiếp hai bên', 'Thị trường tập trung, qua môi giới'],
        ['Thanh toán', 'Vào ngày đáo hạn', '<b>Tính theo giá thị trường hàng ngày</b> (marking to market) qua công ty thanh toán bù trừ']
      ] },
      { t: 'list', items: ['Loại hợp đồng tương lai: chỉ số chứng khoán, lãi suất, ngoại hối, nông sản, kim loại và khoáng sản.'] }
    ] },
    { icon: '🏧', title: 'Ký quỹ và tính theo giá thị trường hàng ngày', blocks: [
      { t: 'p', x: 'Người mua/bán hợp đồng tương lai ký quỹ vào <b>tài khoản bảo chứng (margin)</b> tại công ty thanh toán bù trừ. Mỗi ngày lãi/lỗ cộng/trừ vào tài khoản theo biến động giá tương lai. Nếu giá trị tài khoản xuống dưới <b>mức bảo chứng duy trì</b>, nhà đầu tư phải ký quỹ thêm cho đạt mức ban đầu, nếu không công ty sẽ “đóng” một phần/toàn bộ hợp đồng.' },
      { t: 'table', head: ['Ngày', 'Giá tương lai', 'Lời (lỗ)', 'Tài khoản bảo chứng'], rows: [
        ['28/2', '800.000', '', '40.000'], ['1/3', '794.000', '−6.000', '34.000'], ['2/3', '792.200', '−1.800', '32.200'], ['3/3', '796.000', '+3.800', '36.000'], ['4/3', '794.200', '−1.800', '34.200'],
        ['5/3', '793.400', '−800', '33.400'], ['6/3', '790.800', '−2.600', '30.800'], ['<b>7/3</b>', '786.600', '−4.200', '<b>26.600</b> (&lt; 30.000 → ký quỹ thêm 13.400 để về 40.000)'], ['8/3', '787.200', '+600', '40.600'], ['9/3', '783.600', '−3.600', '37.000'], ['10/3', '785.400', '+1.800', '38.800'], ['Tổng lỗ', '', '−14.600', '']
      ] },
      { t: 'tip', x: 'Mục đích marking to market: <b>loại bớt rủi ro</b> cho công ty thanh toán bù trừ khi một bên không có khả năng thanh toán lúc đáo hạn.' }
    ] },
    { icon: '↕️', title: 'Giá trị hợp đồng khi đáo hạn và định giá tương lai', blocks: [
      { t: 'table', head: ['Bên', 'Giá trị nhận được lúc đáo hạn', 'Có lợi khi'], rows: [
        ['<b>Người mua</b> (long)', 'S_T − F', 'Giá thị trường tăng'], ['<b>Người bán</b> (short)', 'F − S_T', 'Giá thị trường giảm']
      ] },
      { t: 'p', x: 'Ví dụ F = 5.000: nếu S_T = 6.000 → người mua lãi 1.000 (mua 5.000, bán 6.000), người bán lỗ 1.000; nếu S_T = 4.000 → ngược lại. Giá trị hai bên <b>đối xứng</b>.' },
      { t: 'key', x: '<b>Nguyên tắc không arbitrage</b>: vay S₀ lãi r_f; dùng mua tài sản cơ sở; đồng thời bán hợp đồng tương lai giá F₀. Cuối kỳ nhận chắc chắn F₀ − S₀(1 + r_f) + D (D: thu nhập từ tài sản, ví dụ cổ tức); đầu kỳ bỏ ra 0 nên cuối kỳ cũng phải = 0 → <b>F₀ = S₀(1 + r_f) − D = S₀(1 + r_f − d)</b>. Kỳ hạn T: <b>F₀ = S₀(1 + r_f − d)^T</b>; tại t: F_t = S_t(1 + r_f − d)^(T−t); đáo hạn F_T = S_T. Gọi là quan hệ <b>chi phí lưu giữ (cost of carry)</b>.' }
    ] },
    { icon: '🎯', title: 'Quyền chọn (options)', blocks: [
      { t: 'p', x: '<b>Quyền chọn</b> cho người mua <b>quyền nhưng không bắt buộc</b> mua hoặc bán một số lượng xác định tài sản cơ sở, tại hoặc trước một ngày xác định, với <b>giá thực hiện (strike) X</b> xác định lúc ký. Nếu người mua thực hiện quyền, người bán <b>buộc phải</b> thực hiện nghĩa vụ.' },
      { t: 'table', head: ['Loại', 'Nội dung'], rows: [
        ['<b>Quyền chọn mua</b> (call)', 'Quyền mua tài sản cơ sở theo giá X'], ['<b>Quyền chọn bán</b> (put)', 'Quyền bán tài sản cơ sở theo giá X'],
        ['Kiểu châu Âu', 'Chỉ thực hiện vào ngày đáo hạn'], ['Kiểu Mỹ', 'Thực hiện bất cứ lúc nào trước đáo hạn']
      ] },
      { t: 'table', head: ['Vị thế (đáo hạn)', 'Giá trị nhận được', 'Ví dụ IBM X = 50 (S_T = 60; 40)'], rows: [
        ['<b>Mua call</b>', 'max(S_T − X; 0)', '10; 0'], ['<b>Bán call</b>', 'min(X − S_T; 0)', '−10; 0'],
        ['<b>Mua put</b>', 'max(X − S_T; 0)', '0; 10'], ['<b>Bán put</b>', 'min(S_T − X; 0)', '0; −10']
      ] },
      { t: 'widget', name: 'option', title: 'Giá trị quyền chọn lúc đáo hạn (có tính phí)' },
      { t: 'list', items: [
        'Call: S &gt; X → <b>có lời (in-the-money)</b>; S &lt; X → không lời (out-of-the-money); S = X → hòa tiền (at-the-money). Với put thì ngược lại.',
        'Người mua quyền <b>không bao giờ lỗ quá phí</b>; người bán quyền không bao giờ lời quá phí. Vì vậy người mua phải trả <b>phí (giá quyền chọn)</b> ngay khi ký (khác hợp đồng tương lai).'
      ] },
      { t: 'table', head: ['Yếu tố tăng', 'Giá call', 'Giá put'], rows: [
        ['Giá tài sản cơ sở S', '+', '−'], ['Giá thực hiện X', '−', '+'], ['Thời gian còn lại', '+', '+'], ['Độ biến thiên giá σ', '+', '+'], ['Lãi suất phi rủi ro r_f', '+', '−']
      ] },
      { t: 'tip', x: 'Định giá quyền chọn (mô hình nhị phân, Black–Scholes) nằm ngoài phạm vi môn học này.' }
    ] }
  ],
  summary: [
    'Phái sinh: giá trị phụ thuộc tài sản cơ sở; forward thương lượng riêng, futures chuẩn hóa và tính hàng ngày.',
    'Giá tương lai F₀ = S₀(1 + r_f − d)^T theo nguyên tắc không arbitrage.',
    'Ký quỹ, bảo chứng duy trì, marking to market giảm rủi ro thanh toán.',
    'Quyền chọn: call/put; giá trị đáo hạn max(S−X;0), max(X−S;0); người mua trả phí; các yếu tố ảnh hưởng giá.'
  ],
  cards: [
    ['Chứng khoán phái sinh?', 'Tài sản có dòng tiền phụ thuộc vào tài sản cơ sở.'],
    ['Bốn loại phái sinh?', 'Forwards, futures, options, swaps.'],
    ['Khác biệt forward và futures?', 'Futures chuẩn hóa, giao dịch tập trung, tính hàng ngày; forward thương lượng, phi tập trung, thanh toán đáo hạn.'],
    ['Marking to market?', 'Lãi/lỗ hợp đồng tương lai tính hàng ngày vào tài khoản bảo chứng.'],
    ['Bảo chứng duy trì?', 'Mức tối thiểu của tài khoản; xuống dưới phải ký quỹ thêm.'],
    ['Giá trị người mua forward lúc đáo hạn?', 'S_T − F.'],
    ['Giá trị người bán?', 'F − S_T.'],
    ['Công thức giá tương lai?', 'F₀ = S₀(1 + r_f − d)^T.'],
    ['Quyền chọn mua (call)?', 'Quyền mua theo giá thực hiện; giá trị max(S_T − X; 0).'],
    ['Quyền chọn bán (put)?', 'Quyền bán theo giá thực hiện; giá trị max(X − S_T; 0).'],
    ['Châu Âu vs Mỹ?', 'Châu Âu chỉ thực hiện đáo hạn; Mỹ bất cứ lúc nào trước đáo hạn.'],
    ['Vì sao người mua quyền phải trả phí?', 'Quyền không bao giờ có giá trị âm; phí bù cho bên bán.'],
    ['Call có lời (in-the-money) khi?', 'S > X.']
  ],
  quiz: [
    { q: 'Hợp đồng tương lai khác kỳ hạn ở chỗ:', o: ['Chuẩn hóa và tính theo giá thị trường hàng ngày', 'Không ký quỹ', 'Không đáo hạn', 'Chỉ cho hàng hóa'], a: 0, e: 'Qua công ty thanh toán bù trừ.' },
    { q: 'Người mua forward giá 5.000, giá đáo hạn 6.000 → lợi:', o: ['−1.000', '0', '+1.000', '+6.000'], a: 2, e: 'S_T − F.' },
    { q: 'F₀ = S₀(1 + r_f − d)^T gọi là:', o: ['Cost of carry', 'Black–Scholes', 'CAPM', 'Hòa vốn'], a: 0, e: 'Chi phí lưu giữ.' },
    { q: 'Mức bảo chứng ban đầu 40.000; duy trì 30.000; xuống 26.600 → phải:', o: ['Ký quỹ thêm 13.400', 'Không làm gì', 'Rút tiền', 'Ký quỹ thêm 3.400'], a: 0, e: 'Để về 40.000.' },
    { q: 'Giá trị mua call lúc đáo hạn:', o: ['max(S − X; 0)', 'max(X − S; 0)', 'S − X', 'X − S'], a: 0, e: 'Không bao giờ âm.' },
    { q: 'IBM X = 50, S_T = 40: mua put nhận:', o: ['0', '10', '−10', '50'], a: 1, e: '50 − 40.' },
    { q: 'Quyền chọn kiểu Mỹ:', o: ['Chỉ thực hiện đáo hạn', 'Thực hiện bất cứ lúc nào trước đáo hạn', 'Không thực hiện', 'Chỉ bán'], a: 1, e: 'Khác kiểu châu Âu.' },
    { q: 'Yếu tố làm tăng giá cả call và put:', o: ['Thời gian còn lại', 'Giá thực hiện', 'Giá tài sản cơ sở', 'Lãi suất'], a: 0, e: 'Cùng với độ biến thiên σ.' },
    { q: 'Người bán quyền chọn:', o: ['Không bao giờ lỗ', 'Không bao giờ có lợi quá phí nhận được', 'Có quyền không bắt buộc', 'Không có nghĩa vụ'], a: 1, e: 'Nghĩa vụ khi người mua thực hiện.' }
  ],
  match: [
    ['Forward', 'Thương lượng riêng, thanh toán đáo hạn'],
    ['Futures', 'Chuẩn hóa, mark-to-market hàng ngày'],
    ['Call', 'Quyền mua'],
    ['Put', 'Quyền bán'],
    ['Strike X', 'Giá thực hiện'],
    ['Premium', 'Phí quyền chọn']
  ]
}

);
