// "Phong cách đầu tư Warren Buffett" – Chương 7–8.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.buffett = BOOK_DATA.buffett || { chapters: [] };
BOOK_DATA.buffett.chapters.push(

/* ======================= CHƯƠNG 7 ======================= */
{
  n: 7,
  title: 'Hướng dẫn đầu tư: Nguyên lý tài chính',
  intro: 'Buffett không chạy theo con số một năm hay mưu mẹo kế toán. Bốn nguyên lý tài chính: lợi nhuận trên vốn cổ phần (ROE), “lợi nhuận chủ sở hữu”, lợi nhuận biên và phép thử “một đô la giữ lại → ít nhất một đô la giá trị thị trường”.',
  sections: [
    { icon: '📊', title: 'Tư duy tài chính kiểu Buffett', blocks: [
      { t: 'p', x: 'Buffett không quá coi trọng kết quả một năm; ông xem <b>trung bình 4–5 năm</b>. Ông cũng không kiên nhẫn với mưu mẹo tài chính cho ra tổng kết năm ấn tượng nhưng chẳng chịu được thử thách thời gian. Bốn nguyên lý:' },
      { t: 'list', items: [
        'Tập trung vào <b>ROE</b>, không phải lợi nhuận trên mỗi cổ phiếu (EPS).',
        'Tính <b>“lợi nhuận chủ sở hữu”</b> (owner earnings) để xác định giá trị thực.',
        'Tìm công ty có <b>lợi nhuận biên cao</b>.',
        'Với mỗi đô la giữ lại, công ty có tạo ra <b>ít nhất một đô la giá trị thị trường</b> không?'
      ] }
    ] },
    { icon: '📈', title: 'Nguyên lý 7: Lợi nhuận trên vốn cổ phần (ROE)', blocks: [
      { t: 'p', x: 'Thông thường nhà phân tích xem EPS có tăng không. Buffett coi EPS là <b>“bức màn mờ ảo”</b>: hầu hết công ty giữ lại một phần lợi nhuận năm trước làm tăng vốn cổ phần, nên EPS tăng 10% khi vốn cổ phần cũng tăng 10% thì chẳng có gì đáng mừng — như gửi tiết kiệm và cộng dồn lãi rồi rút ra.' },
      { t: 'key', x: 'Kiểm tra kinh tế rõ nhất: <b>ROE = lợi nhuận hoạt động / vốn cổ phần của cổ đông</b> cao, chứ không phải EPS ổn định tăng đều.' },
      { t: 'h3', x: 'Hai điều chỉnh của Buffett' },
      { t: 'steps', items: [
        '<b>Chứng khoán nắm giữ tính theo giá vốn</b>, không theo giá thị trường: nếu thị trường tăng mạnh làm vốn cổ phần phình ra, kết quả xuất sắc bị pha loãng; ngược lại giảm giá làm kết quả tạm thời đẹp hơn thực tế.',
        '<b>Loại trừ khoản bất thường</b> (lãi/lỗ trên vốn và yếu tố bất thường) để thấy <b>kết quả hoạt động thường niên</b>: ban quản lý tạo lợi nhuận từ hoạt động kinh doanh với nguồn vốn ban đầu tốt thế nào.'
      ] },
      { t: 'warn', x: 'Công ty nên đạt ROE tốt <b>mà không vay nợ hoặc vay ít</b>. Nhiều công ty nâng ROE bằng cách tăng nợ; Buffett: “Các quyết định kinh doanh hay đầu tư tốt cho kết quả kinh tế hài lòng mà không cần hỗ trợ từ tài sản vay nợ.” Hãy cảnh giác công ty chỉ có ROE tốt nhờ vay nợ.' },
      { t: 'tabs', items: [
        ['Coca-Cola', 'ROE ~20% thập niên 1970; Goizueta đòi tỷ lệ cao hơn → <b>31,8% (1998)</b>. “Chiến lược những năm 1980”: không tham gia ngành không có ROE chấp nhận được. Giá trị thị trường từ 4,1 tỷ (1980) lên 14,1 tỷ (1987): tăng trung bình 19,3%/năm.'],
        ['Washington Post', '1973: ROE 15,7% (mức trung bình ngành báo); sau 5 năm tăng gấp đôi, gấp đôi S&P; 1998: <b>36,3%</b>. Vay nợ dài hạn/vốn cổ phần 37,2% (1973), Katherine Graham giảm 70% nợ (1978), còn dưới 2,7% (1983) — 1/10 mức ngành, nên ROE cao hơn đối thủ ~10 điểm.']
      ] }
    ] },
    { icon: '💰', title: 'Nguyên lý 8: “Lợi nhuận chủ sở hữu”', blocks: [
      { t: 'p', x: 'Buffett cảnh báo tính EPS chỉ là <b>điểm bắt đầu</b>, không phải điểm kết thúc để xác định giá trị kinh tế. “Không phải tất cả các khoản lợi nhuận đều được tạo ra giống nhau.” Công ty tài sản cố định lớn bị lạm phát “ăn” nên lợi nhuận báo cáo thường ảo.' },
      { t: 'warn', x: 'Ngay cả <b>dòng tiền mặt</b> cũng không phải công cụ hoàn hảo: nó phổ biến trong thời kỳ mua lại bùng nổ thập niên 1980 vì <b>che giấu chi phí vốn</b>. Dòng tiền thường = thu nhập ròng + khấu hao + chi phí không tiền mặt, <b>bỏ qua chi phí vốn</b> (trang thiết bị mới, nâng cấp nhà máy). Buffett: khoảng <b>95%</b> doanh nghiệp Mỹ cần chi tiêu vốn gần bằng khấu hao; bạn có thể trì hoãn một hai năm nhưng dài hạn doanh nghiệp suy sụp.' },
      { t: 'key', x: '<b>Lợi nhuận chủ sở hữu</b> = thu nhập ròng + khấu hao (các khoản phi tiền mặt) − <b>chi phí vốn</b> (kể cả vốn lưu động bổ sung cần thiết). Không chính xác tuyệt đối vì chi phí vốn tương lai là ước lượng. Theo Keynes: “Tôi thích gần đúng hơn là hoàn toàn sai.”' },
      { t: 'widget', name: 'owner-earnings', title: 'Tính lợi nhuận chủ sở hữu so với “dòng tiền” thường' },
      { t: 'tip', x: 'Coca-Cola: lợi nhuận chủ sở hữu 1973 khoảng 152 triệu đô la; 1980: <b>262 triệu</b> (tăng 8%/năm); 1981–1988: tăng từ 262 lên <b>828 triệu</b> (17,8%/năm). Giá cổ phiếu phản ánh điều đó: 1973–1982 tổng lợi nhuận tăng 6,3%/năm, 1983–1992 tăng 31,1%/năm.' }
    ] },
    { icon: '✂️', title: 'Nguyên lý 9: Lợi nhuận biên', blocks: [
      { t: 'p', x: 'Giống Fisher, Buffett biết doanh nghiệp lớn vẫn là khoản đầu tư tồi nếu quản lý không biến doanh thu thành lợi nhuận. Quản lý <b>hệ thống chi phí cao</b> luôn tìm cách tăng chi phí; quản lý <b>hệ thống chi phí thấp</b> luôn tìm cách cắt giảm. Mỗi lần công ty thông báo “chương trình cắt giảm chi phí”, ông biết nó chưa từng khám phá ra khoản chi dư thừa. “Nhà quản lý thực sự tốt không thức giấc buổi sáng và nói, đây là ngày tôi cắt giảm chi phí, mà anh ta thức dậy và quyết định luyện tập hít thở.”' },
      { t: 'list', items: [
        'Wells Fargo: Carl Reichardt và Paul Hazen “ghê tởm việc tiêu tốn chi phí nhiều hơn cần thiết, và tấn công chi phí ác liệt khi lợi nhuận ở mức kỷ lục cũng như khi dưới mức đặt ra”.',
        '<b>Berkshire</b>: không có phòng pháp chế, quan hệ đầu tư/công chúng, phòng kế hoạch chiến lược với nhân viên MBA; tổng chi phí hoạt động sau thuế của trụ sở thấp hơn <b>1%</b> lợi nhuận hoạt động. Buffett: công ty cùng lợi nhuận mà chi phí 10% thì cổ đông mất 9% giá trị.',
        '<b>Pampered Chef</b>: khách trả tiền trước khi giao hàng nên dòng tiền luôn dương, biên trước thuế trên 25%.'
      ] },
      { t: 'table', head: ['Công ty', 'Biên trước thuế'], rows: [
        ['Coca-Cola', '12,9% (1980) → 13,7% năm đầu Goizueta → <b>19%</b> (kỷ lục) khi Buffett mua cổ phiếu'],
        ['Washington Post', '10,8% (1973, thấp hơn mức lịch sử 15%) → 19,3% (1978, +80% trong 5 năm) → <b>31,8%</b> (1988) so với ngành báo 16,9% và S&P 8,6%']
      ] },
      { t: 'tip', x: 'Washington Post: mỗi lần công đoàn đình công (1949, 1958, 1966, 1968, 1969), ban quản lý chọn đáp ứng thay vì mạo hiểm ngừng hoạt động; thập niên 1970, Katherine Graham kiên quyết đàm phán, năm 1974 thắng vụ đình công của Guild, sau đó biên lợi nhuận bứt phá.' }
    ] },
    { icon: '1️⃣', title: 'Nguyên lý 10: Phép thử “một đô la”', blocks: [
      { t: 'key', x: 'Mục tiêu: chọn công ty mà <b>mỗi đô la lợi nhuận giữ lại được chuyển thành ít nhất một đô la giá trị thị trường</b>. Nếu lợi nhuận giữ lại được tái đầu tư với tỷ lệ trên mức trung bình, bằng chứng sẽ là sự gia tăng tương ứng của giá trị thị trường.' },
      { t: 'p', x: 'Trong một năm giá cổ phiếu có thể lệch giá trị vì nhiều lý do khác, nhưng về dài hạn thị trường sẽ phán xét. Nếu công ty sử dụng lợi nhuận giữ lại kém hiệu quả lâu dài, thị trường sẽ định giá thất vọng; nếu đạt lợi nhuận trên vốn tăng thêm trên trung bình, giá cổ phiếu tăng sẽ cho thấy thành công. Phép thử nhanh: <b>giá trị thị trường tăng ít nhất bằng lợi nhuận giữ lại</b>.' },
      { t: 'table', head: ['Công ty', 'Kết quả “mỗi đô la giữ lại”'], rows: [
        ['<b>Coca-Cola</b> (1989–1999)', 'Lợi nhuận 26,9 tỷ; cổ tức 10,5 tỷ; giữ lại 16,4 tỷ → mỗi đô la giữ lại tạo <b>7,2 đô la</b> giá trị thị trường (giá trị thị trường 25,8 → 143,9 tỷ). 100 đô la đầu tư thành 681 đô la (lãi gộp 21%/năm). Khoản đầu tư của Berkshire 1,023 tỷ → hơn 10 tỷ (2003).'],
        ['<b>Gillette</b> (từ 1989 → 1992)', 'Lợi nhuận 1,6 tỷ; chia 582 triệu; giữ lại 1,011 tỷ → mỗi đô la giữ lại tạo <b>9,21 đô la</b> giá trị thị trường (giá trị thị trường lên 9,3 tỷ).']
      ] },
      { t: 'warn', x: 'Nghiên cứu cơ cấu tài chính kỹ lưỡng không dễ. Các bê bối kế toán làm việc này quan trọng hơn: bạn không chắc khám phá hết sự thật, nhưng có nhiều cơ hội phát hiện số liệu giả mạo hơn nếu cố gắng. Buffett: “Các nhà quản lý luôn mong muốn thu được những con số, thì ở một điểm nào đó sẽ tạo ra những con số.” Mục tiêu của bạn: bắt đầu học cách <b>tìm ra sự chênh lệch</b>.' }
    ] }
  ],
  summary: [
    'Dùng trung bình 4–5 năm; tránh mưu mẹo tài chính.',
    'ROE (không phải EPS), tính theo giá vốn chứng khoán, loại khoản bất thường; ROE tốt phải đến từ ít nợ.',
    'Lợi nhuận chủ sở hữu = thu nhập ròng + khấu hao − chi phí vốn (và vốn lưu động thêm); dòng tiền mặt thường đánh lạc hướng.',
    'Lợi nhuận biên cao do quản lý chi phí tốt (Berkshire chi phí trụ sở <1% lợi nhuận).',
    'Phép thử một đô la: mỗi đô la giữ lại → ≥ 1 đô la giá trị thị trường (Coca-Cola 7,2; Gillette 9,21).'
  ],
  cards: [
    ['Buffett xem số liệu trong bao lâu?', 'Trung bình bốn đến năm năm, không phải một năm.'],
    ['Vì sao EPS là “bức màn mờ ảo”?', 'EPS tăng 10% khi vốn cổ phần cũng tăng 10% không có gì đáng mừng — giống gửi tiết kiệm cộng dồn lãi.'],
    ['Chỉ số ưu tiên của Buffett?', 'ROE (lợi nhuận hoạt động trên vốn cổ phần của cổ đông).'],
    ['Hai điều chỉnh khi tính ROE?', 'Chứng khoán tính theo giá vốn; loại trừ khoản bất thường để thấy kết quả hoạt động thường niên.'],
    ['Cảnh báo về ROE và nợ?', 'Nhiều công ty nâng ROE nhờ vay nợ; ROE tốt phải đạt với nợ ít hoặc không nợ.'],
    ['“Lợi nhuận chủ sở hữu” là gì?', 'Thu nhập ròng + khấu hao − chi phí vốn (kể cả vốn lưu động thêm cần thiết).'],
    ['Vì sao dòng tiền mặt đánh lạc hướng?', 'Bỏ qua chi phí vốn; ~95% doanh nghiệp Mỹ cần chi tiêu vốn gần bằng khấu hao.'],
    ['Keynes được Buffett trích?', '“Tôi thích gần đúng hơn là hoàn toàn sai.”'],
    ['Coca-Cola: lợi nhuận chủ sở hữu 1981→1988?', 'Từ 262 triệu lên 828 triệu đô la, 17,8%/năm.'],
    ['Hai kiểu quản lý chi phí?', 'Chi phí cao: luôn tìm cách tăng; chi phí thấp: luôn tìm cách cắt giảm.'],
    ['Chi phí trụ sở Berkshire?', 'Dưới 1% lợi nhuận hoạt động; không có phòng pháp chế/PR/kế hoạch chiến lược.'],
    ['Phép thử “một đô la” là gì?', 'Mỗi đô la lợi nhuận giữ lại phải tạo ít nhất một đô la giá trị thị trường.'],
    ['Coca-Cola 1989–1999: mỗi đô la giữ lại tạo?', '7,2 đô la giá trị thị trường.'],
    ['Gillette mỗi đô la giữ lại tạo?', '9,21 đô la.']
  ],
  quiz: [
    { q: 'Buffett coi trọng chỉ số nào hơn EPS?', o: ['Doanh thu', 'ROE', 'Giá cổ phiếu', 'Cổ tức'], a: 1, e: 'Vì EPS tăng có thể chỉ do vốn tăng.' },
    { q: 'ROE tốt cần đi kèm với:', o: ['Nhiều nợ', 'Ít hoặc không vay nợ', 'Giá cổ phiếu cao', 'Cổ tức cao'], a: 1, e: 'Công ty tăng ROE chỉ bằng nợ là cờ đỏ.' },
    { q: 'Lợi nhuận chủ sở hữu =', o: ['Thu nhập ròng + khấu hao − chi phí vốn', 'Doanh thu − chi phí', 'Cổ tức', 'Dòng tiền hoạt động'], a: 0, e: 'Gồm cả vốn lưu động thêm cần thiết.' },
    { q: 'Dòng tiền mặt thông thường bỏ qua:', o: ['Khấu hao', 'Chi phí vốn', 'Thuế', 'Doanh thu'], a: 1, e: 'Đó là lý do Buffett không dùng.' },
    { q: 'Tỷ lệ doanh nghiệp Mỹ cần chi phí vốn gần bằng khấu hao theo Buffett:', o: ['5%', '50%', '95%', '100%'], a: 2, e: 'Trì hoãn được một hai năm nhưng dài hạn thì không.' },
    { q: 'Chi phí trụ sở Berkshire so với lợi nhuận hoạt động:', o: ['Dưới 1%', '10%', '25%', '50%'], a: 0, e: 'Không có phòng pháp chế, quan hệ công chúng, kế hoạch chiến lược.' },
    { q: 'Washington Post 1973: biên lợi nhuận trước thuế là:', o: ['10,8%', '31,8%', '50%', '5%'], a: 0, e: 'Sau 15 năm lên 31,8% (1988).' },
    { q: 'Phép thử “một đô la” yêu cầu:', o: ['Cổ tức ≥ 1 đô la', 'Mỗi đô la lợi nhuận giữ lại tạo ≥ 1 đô la giá trị thị trường', 'Giá cổ phiếu ≥ 1 đô la', 'Nợ ≤ 1 đô la'], a: 1, e: 'Chứng tỏ quản lý tái đầu tư hiệu quả.' },
    { q: 'Coca-Cola 1989–1999: mỗi đô la giữ lại tạo bao nhiêu đô la giá trị thị trường?', o: ['1', '3,5', '7,2', '20'], a: 2, e: 'Giữ lại 16,4 tỷ, giá trị tăng ~118 tỷ.' },
    { q: 'Cách tốt nhất để phát hiện số liệu giả mạo:', o: ['Bỏ qua', 'Nghiên cứu kỹ cơ cấu tài chính và luôn cảnh giác', 'Tin ban quản lý', 'Chỉ đọc tóm tắt'], a: 1, e: 'Không đảm bảo, nhưng có nhiều cơ hội hơn.' }
  ],
  match: [
    ['EPS', 'Bức màn mờ ảo'],
    ['ROE', 'Chỉ số ưu tiên của Buffett'],
    ['Lợi nhuận chủ sở hữu', 'Thu nhập ròng + khấu hao − chi phí vốn'],
    ['Dòng tiền mặt', 'Bỏ qua chi phí vốn'],
    ['Lợi nhuận biên', 'Kết quả của quản lý chi phí tốt'],
    ['Phép thử một đô la', 'Giá trị thị trường tăng ≥ lợi nhuận giữ lại']
  ]
},

/* ======================= CHƯƠNG 8 ======================= */
{
  n: 8,
  title: 'Hướng dẫn đầu tư: Nguyên lý giá trị',
  intro: 'Hai nguyên lý cuối cùng: định giá một doanh nghiệp bằng chiết khấu lợi nhuận chủ sở hữu (mô hình hai bước), và chỉ mua khi giá thấp hơn đáng kể so với giá trị — biên độ an toàn. Ví dụ Coca-Cola, Gillette, Washington Post, Wells Fargo, Larson-Juhl.',
  sections: [
    { icon: '⚖️', title: 'Giá cả và giá trị', blocks: [
      { t: 'mnemo', x: '“<b>Giá cả là thứ bạn phải trả. Giá trị là thứ bạn thu được.</b>” — Warren Buffett' },
      { t: 'p', x: 'Thị trường thiết lập giá; nhà đầu tư xác định giá trị sau khi cân nhắc thông tin kinh doanh, quản lý, tài chính. Giá và giá trị không nhất thiết bằng nhau; giá cổ phiếu thường dao động quanh giá trị. “Thật tệ nếu đi ngủ mà vẫn nghĩ về giá cổ phiếu. Hãy nghĩ về giá trị và kết quả công ty. Thị trường chứng khoán phục vụ bạn, chứ không hướng dẫn bạn.” (2003)' },
      { t: 'steps', items: ['<b>Xác định giá trị</b> doanh nghiệp (nguyên lý 11).', 'Chỉ mua khi <b>giá thấp hơn đáng kể giá trị thực</b> (nguyên lý 12).'] }
    ] },
    { icon: '🧮', title: 'Nguyên lý 11: Giá trị của công ty', blocks: [
      { t: 'p', x: 'Nhiều nhà phân tích dùng cách nhanh (P/E thấp, giá/sổ sách thấp, cổ tức cao), nhưng theo Buffett hệ thống chính xác nhất là của <b>John Burr Williams</b> cách đây 60 năm: <b>chiết khấu dòng tiền</b>. Giá trị doanh nghiệp = tổng các luồng tiền (lợi nhuận chủ sở hữu) dự đoán trong suốt vòng đời doanh nghiệp, chiết khấu bằng lãi suất hợp lý. Mọi loại đầu tư — trái phiếu, cổ phiếu, chung cư, giếng dầu, nông trại — “đều ngang hàng về mặt kinh tế”.' },
      { t: 'tabs', items: [
        ['Dự đoán dòng tiền', 'Chỉ nên định giá công ty có <b>lợi nhuận dự đoán tương đối chắc chắn</b> (như “phiếu lãi” trái phiếu): doanh nghiệp đơn giản, dễ hiểu, doanh lợi ổn định. Nếu không đủ tự tin dự đoán thì <b>bỏ qua</b> (Buffett thừa nhận không dự đoán được Microsoft: ngoài vòng tròn khả năng).'],
        ['Tỷ lệ chiết khấu', '<b>Tỷ lệ không rủi ro</b>: lãi suất trái phiếu chính phủ Mỹ dài hạn (30 năm) — gần như chắc chắn thanh toán. Khi lãi suất dưới 7%, Buffett dùng <b>10%</b>; nếu lãi suất tăng, ông tăng thêm biên độ an toàn (cộng 3 điểm). Ông <b>không cộng thêm phần bù rủi ro</b> cổ phiếu (như học giả), mà theo đuổi công ty thu nhập ổn định, dự đoán được và mua ở mức chiết khấu cao: “Nếu bạn cũng làm như vậy, toàn bộ suy nghĩ về tỷ lệ rủi ro chẳng có ý nghĩa gì với tôi nữa.”'],
        ['Mô hình hai bước', 'Công ty tăng trưởng nhanh trong một số năm (g₁), sau đó tăng trưởng chậm bền vững (g₂): giá trị = tổng hiện giá các năm giai đoạn 1 + giá trị còn lại (năm 11 / (r − g₂)) chiết khấu về hiện tại.']
      ] },
      { t: 'widget', name: 'dcf-two', title: 'Mô hình chiết khấu hai bước: thử lại bảng tính Coca-Cola 1988' },
      { t: 'h3', x: 'Bảng tính Coca-Cola (1988)' },
      { t: 'table', head: ['Giả định', 'Giá trị nội tại'], rows: [
        ['Lợi nhuận chủ sở hữu ban đầu 828 triệu; chiết khấu 9% (trái phiếu 30 năm ~9%); tăng 15% trong 10 năm, sau đó 5%', '<b>~48,4 tỷ đô la</b>'],
        ['Tăng 12% trong 10 năm, sau đó 5%', '~38,2 tỷ'],
        ['Tăng 10% trong 10 năm, sau đó 5%', '~32,5 tỷ'],
        ['Chỉ tăng 5% mọi năm', '<b>≥ 20,7 tỷ</b> (828 ÷ (9% − 5%))'],
        ['Không tăng (cực kỳ thận trọng)', '9,2 tỷ (828 ÷ 9%)'],
        ['<b>Giá thị trường Buffett mua</b>', '~14,8 tỷ (trung bình 15,1 tỷ năm 1988–89) → biên độ an toàn từ <b>27% đến 70%</b>']
      ] }
    ] },
    { icon: '🏷️', title: 'Nguyên lý 12: Mua giá hấp dẫn — biên độ an toàn', blocks: [
      { t: 'key', x: 'Dù công ty tốt, quản lý tốt, bản thân chúng không đảm bảo đầu tư thành công. Nếu giá không hợp lý, ông <b>bỏ qua</b>. Mục tiêu: xác định công ty có thu nhập trên mức trung bình, rồi mua với giá <b>thấp hơn giá trị thực</b> — biên độ an toàn của Graham. (Munger đôi lúc khuyến khích ông trả cao hơn cho các công ty nổi tiếng.)' },
      { t: 'list', items: [
        '<b>Bảo vệ khỏi rủi ro sụt giá</b>: nếu giá trị chỉ cao hơn giá một chút thì không mua. Nếu mua ở 75% giá trị (thấp 25%) và giá trị giảm 10%, giá mua vẫn mang lại thu nhập thoả đáng.',
        '<b>Cơ hội thu nhập bất thường</b>: nếu công ty có lợi nhuận kinh tế trên mức trung bình, giá trị cổ phiếu tăng đều theo thời gian; thêm vào đó giá còn tiến tới giá trị khi thị trường điều chỉnh.'
      ] },
      { t: 'mnemo', x: '“Giống như Chúa, thị trường giúp những người biết giúp chính bản thân họ. Song không giống Chúa, thị trường không tha thứ cho những người không biết họ làm gì.” — Buffett' }
    ] },
    { icon: '🧾', title: 'Các ví dụ định giá', blocks: [
      { t: 'tabs', items: [
        ['🥤 Coca-Cola 1988–89', 'Giữa 6/1988–4/1989 Buffett mua <b>93,4 triệu cổ phiếu</b>, giá bình quân <b>10,96 đô la</b> (15 lần lợi nhuận, 12 lần dòng tiền, 5 lần giá trị sổ sách). Giá trị nội tại ước 20–48 tỷ so với thị giá ~15 tỷ. Berkshire mua hơn <b>1 tỷ đô la</b>, chiếm <b>35%</b> danh mục cổ phiếu — “khi khả năng thành công cao, hãy đặt cược lớn”. Lúc đó ông trả cao gấp 5 lần giá trị sổ sách; nguyên nhân: ROE 31%, tài năng Goizueta, thanh lý ngành thua lỗ, mua lại cổ phiếu.'],
        ['🪒 Gillette 1989–91', 'Năm 1990 lợi nhuận chủ sở hữu 275 triệu, tăng ~16%/năm; trái phiếu 30 năm ~8,62%; chiết khấu 9%. Tăng 15% (10 năm) rồi 5% → ~<b>16 tỷ</b>; 12% → 12,6 tỷ; 10% → 10,8 tỷ; 7% → ≥8,5 tỷ. Thị giá lúc chuyển đổi (8,03 tỷ đô la) thấp hơn giá trị 25–50%.'],
        ['📰 Washington Post 1973', 'Giá trị thị trường 80 triệu; đa số nhà phân tích ước 400–500 triệu. Lợi nhuận chủ sở hữu 1973 = 10,4 triệu; chia cho 6,81% → 150 triệu. Vì chi phí vốn xấp xỉ khấu hao, “doanh thu thuần” gần bằng lợi nhuận chủ sở hữu → 196 triệu. Với tăng giá thực 3% → ~350 triệu; nếu biên trước thuế từ 10% lên 15% → +135 triệu = <b>~485 triệu</b>. Buffett mua với giá chưa tới <b>1/4 giá trị</b> (ít nhất bằng một nửa).'],
        ['🏦 Wells Fargo 1990', 'Thu nhập 600 triệu (1989), chiết khấu 9% → giá trị ~6,6 tỷ; Buffett trả ~3 tỷ (58 đô la/cổ phiếu × 52 triệu) = chiết khấu ~<b>55%</b>. Ba rủi ro: động đất; suy thoái kinh doanh có hệ thống; giá bất động sản miền Tây sụt giảm. Ông tính: thu nhập trước thuế hằng năm ~1 tỷ sau bù ~300 triệu thua lỗ; ngay cả khi 10% trong 48 tỷ khoản vay bị lỗ ở mức 30%, ngân hàng vẫn hòa vốn. Cuối 1993 giá 137 đô la, gần gấp ba lần.'],
        ['🖼️ Larson-Juhl 2001', 'Mua 223 triệu đô la tiền mặt (12 ngày từ cuộc gọi đầu đến ký hợp đồng; thỏa thuận 90 phút). Ponzio mua Larson năm 1981 với doanh thu 3 triệu → hơn 300 triệu (2001). Lợi thế cạnh tranh: 23 chi nhánh giao vật liệu khung <b>ngày hôm sau cho 95% đơn hàng</b> → ít cửa hàng muốn đổi nhà cung cấp. Doanh thu giảm 386 → 361 → 314 triệu (suy thoái ngắn hạn). Định giá: 30,8 triệu tiền mặt ÷ (10% − 3%) = <b>440 triệu</b> → giá 223 triệu là rất tốt.'],
        ['👕 Fruit of the Loom 2002', 'Mua phần kinh doanh chủ chốt của công ty phá sản với 835 triệu tiền mặt (đấu giá cạnh tranh), cộng 1,6 tỷ nợ; Berkshire đã mua trước nợ lâu năm với ~50% mệnh giá, trả lãi ~15% → giá thực ~730 triệu. Morningstar: công ty thường bán theo giá sổ sách (1,4 tỷ) nên giá hời.'],
        ['🏠 Clayton Homes 2003', '12,50 đô la/cổ phiếu (dao động 11,49–15,58): cổ đông kiện cho rằng giá quá thấp. Buffett lập luận một công ty nhà di động trong thời kỳ khó cần ít nhất 1 tỷ đô la vốn mỗi năm và sẽ tiếp tục thấy doanh số giảm; ông đề nghị bơm vốn 360 triệu/năm. Cuối cùng cổ đông bỏ phiếu thuận.']
      ] }
    ] },
    { icon: '🏁', title: 'Kết luận: 12 nguyên lý hợp lại', blocks: [
      { t: 'p', x: 'Buffett nói đầu tư chứng khoán thực sự đơn giản: <b>tìm những công ty hoạt động tốt do người chân thật, tài giỏi điều hành và đang bán thấp hơn giá trị nội tại</b>. “Dĩ nhiên, chuyện đó sẽ đơn giản nếu ông là Warren Buffett.” Cả hai đều đúng: tìm công ty tốt tốn thời gian, công sức; nhưng bước tiếp theo — xác định giá trị — là vấn đề đơn giản hơn chứa trong những biến số thích hợp.' },
      { t: 'table', head: ['Nhóm', 'Vai trò'], rows: [
        ['Kinh doanh', 'Tập trung vào công ty tương đối dễ dự đoán; chỉ công ty hiểu biết'],
        ['Quản lý', 'Công ty được điều hành tốt, thành công nổi bật trong tương lai'],
        ['Tài chính', 'Số liệu cần để xác định giá trị thực tế'],
        ['Giá trị', 'Câu trả lời cuối: đây có phải thương vụ tốt không?']
      ] },
      { t: 'tip', x: 'Hai nguyên lý giá trị đóng vai trò quyết định. Nhưng đừng lo lắng nếu chưa thể tập trung vào toàn bộ 10 nguyên lý còn lại. <b>Đừng để bản thân bị tê liệt bởi quá nhiều thông tin.</b> Hãy cố gắng hết sức, khởi đầu, và tiếp tục tiến lên phía trước.' }
    ] }
  ],
  summary: [
    'Giá cả là thứ bạn trả; giá trị là thứ bạn thu được.',
    'Giá trị = hiện giá chiết khấu của lợi nhuận chủ sở hữu tương lai; chỉ định giá doanh nghiệp dự đoán được.',
    'Tỷ lệ chiết khấu: lãi suất trái phiếu chính phủ dài hạn (tối thiểu 10% khi lãi suất thấp); không cộng phần bù rủi ro mà dùng biên độ an toàn.',
    'Mô hình hai bước: tăng trưởng nhanh giai đoạn đầu, sau đó chậm; Coca-Cola 1988: 20,7–48,4 tỷ so với giá ~15 tỷ.',
    'Chỉ mua khi giá thấp hơn đáng kể giá trị; khi khả năng thành công cao, đặt cược lớn.'
  ],
  cards: [
    ['Giá cả và giá trị?', 'Giá cả là thứ bạn phải trả; giá trị là thứ bạn thu được.'],
    ['Hai bước đầu tư hợp lý?', 'Xác định giá trị doanh nghiệp; chỉ mua khi giá thấp hơn đáng kể giá trị thực.'],
    ['Phương pháp định giá Buffett dùng?', 'Chiết khấu lợi nhuận chủ sở hữu (mô hình của Williams).'],
    ['Điều kiện để định giá?', 'Dòng tiền tương lai dự đoán tương đối chắc chắn; nếu không thì bỏ qua (vd Microsoft).'],
    ['Tỷ lệ chiết khấu của Buffett?', 'Lãi suất trái phiếu chính phủ Mỹ dài hạn; dưới 7% thì dùng 10%; không cộng phần bù rủi ro.'],
    ['Buffett xử lý rủi ro thế nào?', 'Bằng biên độ an toàn: mua công ty ổn định, dự đoán được với chiết khấu lớn.'],
    ['Mô hình hai bước?', 'Giai đoạn đầu tăng trưởng nhanh vài năm, sau đó tăng trưởng thấp bền vững; cộng giá trị còn lại.'],
    ['Coca-Cola 1988: nếu tăng 5%/năm vĩnh viễn?', '828 ÷ (9% − 5%) = ≥ 20,7 tỷ đô la.'],
    ['Coca-Cola: biên độ an toàn so với thị giá?', '27% đến 70% (thị giá ~15 tỷ so với 20–48 tỷ).'],
    ['Buffett mua bao nhiêu cổ phiếu Coca-Cola 1988–89?', '93,4 triệu cổ phiếu, giá bình quân 10,96 đô la, hơn 1 tỷ đô la (35% danh mục).'],
    ['Nguyên tắc chủ đạo khi khả năng thành công cao?', 'Đặt cược lớn.'],
    ['Washington Post 1973: giá trị ước tính?', '~485 triệu đô la so với thị giá 80 triệu; Buffett mua với dưới 1/4 giá trị.'],
    ['Wells Fargo 1990: chiết khấu bao nhiêu?', '~55% (trả ~3 tỷ cho công ty trị giá ~6,6 tỷ).'],
    ['Larson-Juhl định giá thế nào?', '30,8 triệu ÷ (10% − 3%) = 440 triệu so với giá mua 223 triệu.']
  ],
  quiz: [
    { q: 'Câu nói “Giá là thứ bạn trả, giá trị là thứ bạn nhận” của:', o: ['Graham', 'Buffett', 'Fisher', 'Munger'], a: 1, e: 'Nhấn mạnh phân biệt giá và giá trị.' },
    { q: 'Bước đầu tiên của đầu tư hợp lý:', o: ['Xem giá hôm nay', 'Xác định giá trị doanh nghiệp', 'Hỏi bạn bè', 'Mua ngay'], a: 1, e: 'Rồi chỉ mua khi giá thấp hơn đáng kể.' },
    { q: 'Buffett định giá bằng:', o: ['P/E thấp', 'Chiết khấu lợi nhuận chủ sở hữu', 'Giá sổ sách', 'Cổ tức'], a: 1, e: 'Mô hình của Williams.' },
    { q: 'Nếu không đủ tự tin dự đoán dòng tiền của một công ty, Buffett sẽ:', o: ['Đoán đại', 'Bỏ qua', 'Mua nhiều', 'Vay thêm'], a: 1, e: 'Ví dụ Microsoft nằm ngoài vòng tròn khả năng.' },
    { q: 'Tỷ lệ chiết khấu Buffett dùng là:', o: ['Lãi suất trái phiếu chính phủ dài hạn', 'Lạm phát', 'ROE', '50%'], a: 0, e: 'Khi thấp hơn 7%, ông dùng 10%.' },
    { q: 'Buffett có cộng thêm “phần bù rủi ro cổ phiếu” không?', o: ['Có', 'Không, ông dùng biên độ an toàn', 'Luôn 5%', 'Luôn 10%'], a: 1, e: 'Ông mua công ty ổn định giá chiết khấu cao.' },
    { q: 'Coca-Cola 1988, nếu tăng 5%/năm vĩnh viễn, giá trị tối thiểu là:', o: ['9,2 tỷ', '20,7 tỷ', '48 tỷ', '100 tỷ'], a: 1, e: '828 triệu ÷ (9% − 5%).' },
    { q: 'Buffett chiếm bao nhiêu % danh mục bằng Coca-Cola ban đầu?', o: ['5%', '15%', '35%', '80%'], a: 2, e: 'Hơn 1 tỷ đô la, “đặt cược lớn”.' },
    { q: 'Larson-Juhl giá trị ước tính theo 30,8 ÷ (10% − 3%):', o: ['44 triệu', '440 triệu', '4,4 tỷ', '223 triệu'], a: 1, e: 'Giá mua 223 triệu là rất tốt.' },
    { q: 'Wells Fargo 1990 Buffett mua với chiết khấu khoảng:', o: ['5%', '25%', '55%', '95%'], a: 2, e: '~3 tỷ so với giá trị ~6,6 tỷ.' },
    { q: 'Lời khuyên cuối cho nhà đầu tư:', o: ['Phải nắm hết mọi nguyên lý mới được bắt đầu', 'Đừng để bị tê liệt bởi quá nhiều thông tin; hãy bắt đầu và tiếp tục tiến lên', 'Chỉ mua cổ phiếu rẻ', 'Không bao giờ bán'], a: 1, e: 'Hai nguyên lý giá trị đóng vai trò quyết định.' }
  ],
  match: [
    ['Giá trị', 'Hiện giá chiết khấu của lợi nhuận chủ sở hữu'],
    ['Tỷ lệ chiết khấu', 'Lãi suất trái phiếu chính phủ dài hạn (≥10% nếu thấp)'],
    ['Biên độ an toàn', 'Thay thế phần bù rủi ro'],
    ['Mô hình hai bước', 'Tăng trưởng nhanh rồi chậm'],
    ['Coca-Cola 1988', 'Giá ~15 tỷ, giá trị 20–48 tỷ'],
    ['Larson-Juhl', '440 triệu giá trị, mua 223 triệu']
  ]
}

);
