// Điều quan trọng nhất (Howard Marks) – Chương 6–7.
BOOK_DATA.marks.chapters.push({
  n: 6,
  title: 'Nhận diện rủi ro',
  intro: 'Nhận diện rủi ro là điều kiện tiên quyết để kiểm soát nó. Rủi ro lớn nhất không đến từ chất lượng kém hay biến động cao mà đến từ việc trả giá quá cao — và giá cao đến từ niềm tin rằng rủi ro đã biến mất.',
  sections: [
    { icon: '🔎', title: 'Rủi ro nằm ở đâu?', blocks: [
      { t: 'key', x: 'Rủi ro = sự không chắc chắn về kết quả + khả năng mất mát khi kết quả xấu. Rủi ro cao <b>chủ yếu đi kèm giá cao</b>: tham gia thị trường/tài sản bị đánh giá quá cao khi giá đã đẩy lên bởi lạc quan là nguồn gốc chính của rủi ro. (Crockett: rủi ro <i>tăng</i> trong thời kỳ tăng trưởng khi mất cân bằng tích tụ, và <i>hiện thực hoá</i> trong suy thoái.)' },
      { t: 'list', items: [
        'Với nhà đầu tư giá trị, rủi ro cao và lợi nhuận tiềm năng thấp là <b>hai mặt của một đồng xu</b> — cùng xuất phát từ giá cao.',
        'Trả quá nhiều là cách tuyệt vời để mất tiền bất kể biến động hay mức đa dạng hoá (Greenblatt).',
        'Trong thị trường tăng, người ta nói “rủi ro là bạn của tôi” — nhưng <b>khả năng chấp nhận rủi ro trái ngược với đầu tư thành công</b>: khi không ai sợ rủi ro, chẳng còn bù đắp cho rủi ro.'
      ] }
    ] },
    { icon: '😎', title: 'Rủi ro nhất là tin rằng không có rủi ro', blocks: [
      { t: 'key', x: '“Có rất ít điều rủi ro như niềm tin phổ biến rằng không có rủi ro.” Khi nhà đầu tư thiếu e ngại, họ chấp nhận P/E cao, bội số EBITDA cao, chênh lệch tín dụng hẹp, tỷ lệ vốn hoá BĐS tối thiểu. Phép so sánh của Davis: xe SUV có nhiều tai nạn chết người hơn xe nhỏ vì người lái nghĩ mình an toàn — <b>cảm giác an toàn làm tăng rủi ro</b>.' },
      { t: 'h3', x: 'Câu chuyện cổ tích “rủi ro đã được xoá” (2005–07)' },
      { t: 'list', items: [
        'Ngân hàng trung ương khéo léo giảm rủi ro chu kỳ.',
        'Toàn cầu hoá phân tán rủi ro; chứng khoán hoá chia nhỏ rủi ro cho người chịu đựng tốt nhất.',
        'Đòn bẩy “ít rủi ro” vì lãi suất và điều khoản thân thiện; LBO an toàn hơn.',
        'Phòng hộ dài/ngắn, phái sinh; máy tính và mô hình toán hiểu thị trường tốt hơn.'
      ] },
      { t: 'warn', x: '<b>Rủi ro không thể bị loại bỏ, chỉ chuyển giao và lan rộng.</b> Moral hazard: thiết bị an toàn tốt hơn khiến người leo núi chấp nhận rủi ro nhiều hơn (chuyên gia tuyết lở Jill Fredston). Mức rủi ro của thị trường đến từ <b>hành vi của người tham gia</b>, không từ công cụ hay cấu trúc: rủi ro thấp chỉ khi nhà đầu tư thận trọng.' },
      { t: 'tip', x: 'Khủng hoảng 2008 chủ yếu do nhà đầu tư “tin quá nhiều, lo quá ít”: dùng đòn bẩy quá mức, cam kết vốn vào tài sản kém thanh khoản, thứ mới mẻ-phức tạp. <b>Lo lắng, hoài nghi, né rủi ro</b> là thành phần thiết yếu của hệ thống tài chính an toàn: chặn cho vay rủi ro, giữ danh mục không quá tập trung, ngăn kế hoạch chưa kiểm chứng thành cơn sốt.' }
    ] },
    { icon: '📐', title: 'Đường thị trường vốn dịch xuống và phẳng đi', blocks: [
      { t: 'p', x: 'Chuỗi yêu cầu lợi suất: T-bill 4% → trái phiếu 10 năm 6% → trái phiếu DN hạng A 7% (chênh lệch +100bp) → trái phiếu rác 12% (+600bp) → cổ phiếu S&P 10% → NASDAQ 13% → BĐS 15% → mua lại 25% → vốn mạo hiểm 30%. Điểm xuất phát (lãi suất phi rủi ro) quyết định cả đường.' },
      { t: 'table', head: ['', 'Lãi suất phi rủi ro 4% (cũ)', 'Lãi suất ~1% (2004)'], rows: [
        ['Trái phiếu 10 năm', '6%', '4%'],
        ['Cổ phiếu', '10%', '6–7%'],
        ['Trái phiếu rác', '12%', '&lt; 7%'],
        ['Bất động sản', '15%', '~8%'],
        ['Mua lại', '25%', '~15%']
      ] },
      { t: 'key', x: 'Đường vừa <b>thấp hơn</b> (lãi suất thấp) vừa <b>phẳng hơn</b>: nhà đầu tư né tài sản lợi suất thấp, tài sản rủi ro vừa thưởng lớn trong hơn 20 năm, và họ tin rủi ro hạn chế ⇒ <b>giảm mức e ngại rủi ro</b>, yêu cầu ít phần bù rủi ro. “Tôi sẽ không chạm vào với bất kỳ giá nào” biến thành “có vẻ là khoản đầu tư vững chắc”.' },
      { t: 'tip', x: 'Hệ quả: P/E cao, chênh lệch tín dụng hẹp, hành vi thiếu kỷ luật, đòn bẩy nặng ⇒ giá tăng, lợi suất tiềm năng giảm, <b>môi trường rủi ro cao</b>.' }
    ] },
    { icon: '🧪', title: 'Cách chẩn đoán “tâm trạng rủi ro” (Oaktree, 7/2007)', blocks: [
      { t: 'list', items: [
        'Mức hoài nghi, sợ hãi, né rủi ro: <b>rất thấp</b>; hầu hết sẵn sàng đầu tư rủi ro vì lợi suất truyền thống ít ỏi.',
        'Phần bù rủi ro mỏng nhất từng thấy; ít người từ chối rủi ro tăng thêm.',
        'Thị trường dễ dàng bỏ qua tin xấu; hầu như không có người bán bị ép; tài sản được đấu giá mạnh; không thị trường rộng nào bị định giá thấp.',
        'Câu hỏi then chốt: “Bạn đồng ý hay không đồng ý?” — rồi hệ quả đầu tư rõ ràng.'
      ] },
      { t: 'warn', x: 'Buffett: “Chỉ khi thủy triều rút bạn mới biết ai bơi không mặc quần áo.” Marks <b>không dự đoán</b> tương lai; mọi thứ cần biết có thể nhận thức qua hiện tại. Nhà đầu tư đánh giá quá cao khả năng nhận biết rủi ro nên cần tư duy cấp hai.' },
      { t: 'h3', x: 'Nghịch lý của rủi ro' },
      { t: 'key', x: 'Khi nhà đầu tư cảm thấy rủi ro cao, hành động của họ <b>giảm</b> rủi ro (giá giảm, đòi bù đắp); khi họ tin rủi ro thấp, họ <b>tạo ra</b> điều kiện nguy hiểm (giá tăng, hết bù đắp). Thị trường là động, hành động trái trực giác.' },
      { t: 'tip', x: '“Tôi sẽ không mua bằng mọi giá, ai cũng biết nó quá rủi ro” → thường đưa đến cơ hội tốt nhất. <b>Rủi ro tồn tại nhiều nhất ở nơi ít được nhận thức nhất.</b> Sự đồng thuận rộng rằng thứ gì đó “quá nóng” hầu như luôn sai. Chất lượng không bằng giá: tài sản chất lượng cao có thể rủi ro (Nifty Fifty), tài sản chất lượng thấp có thể an toàn; Davis: tránh dùng từ “chất lượng” (thiên kiến nhìn lại, hiệu ứng hào quang).' }
    ] }
  ],
  summary: [
    'Rủi ro lớn nhất là trả giá quá cao; rủi ro cao và lợi suất thấp là hai mặt của giá cao.',
    'Niềm tin rằng không có rủi ro là điều rủi ro nhất; bong bóng và khủng hoảng đều có “câu chuyện giảm rủi ro”.',
    'Rủi ro không bị loại bỏ, chỉ chuyển giao; thiết bị an toàn làm người ta liều hơn (moral hazard).',
    'Lãi suất thấp và tâm lý lạc quan làm đường thị trường vốn thấp và phẳng: phần bù rủi ro mỏng.',
    'Nghịch lý rủi ro: sợ ⇒ giảm rủi ro; chủ quan ⇒ tạo rủi ro. Rủi ro nằm ở nơi ít được nhận thức nhất.'
  ],
  cards: [
    ['Rủi ro theo Marks (định nghĩa cuối chương)?', 'Sự không chắc chắn về kết quả và khả năng mất mát khi kết quả xấu xảy ra.'],
    ['Nguồn rủi ro lớn nhất?', 'Trả giá quá cao.'],
    ['“Hai mặt của đồng xu” là gì?', 'Rủi ro cao và lợi nhuận tiềm năng thấp cùng xuất phát từ giá cao.'],
    ['Điều rủi ro nhất theo Marks?', 'Niềm tin phổ biến rằng không có rủi ro.'],
    ['Vì sao xe SUV là phép ví dụ?', 'Cảm giác an toàn làm tăng hành vi mạo hiểm, nhận thức rủi ro làm giảm nó.'],
    ['“Rủi ro đã được xoá” gồm những luận điểm nào?', 'Ngân hàng trung ương, toàn cầu hoá, chứng khoán hoá, đòn bẩy thân thiện, phòng hộ/phái sinh, mô hình toán.'],
    ['Rủi ro có thể bị loại bỏ không?', 'Không — chỉ chuyển giao và lan rộng.'],
    ['Moral hazard là gì (ví dụ)?', 'Thiết bị an toàn tốt hơn khiến người leo núi chấp nhận nhiều rủi ro hơn.'],
    ['Vì sao lo lắng cần cho hệ thống tài chính?', 'Ngăn cho vay rủi ro, đòn bẩy quá mức, danh mục quá tập trung, cơn sốt chưa kiểm chứng.'],
    ['Đường thị trường vốn khi lãi suất thấp?', 'Thấp hơn và phẳng hơn: phần bù rủi ro ít.'],
    ['Dấu hiệu môi trường rủi ro cao?', 'Hoài nghi thấp, phần bù mỏng, không có người bán bị ép, đấu giá mạnh, P/E cao.'],
    ['Nghịch lý của rủi ro?', 'Khi cảm thấy rủi ro cao, hành động làm giảm nó; khi cảm thấy thấp, hành động tạo ra nó.'],
    ['Rủi ro tồn tại nhiều nhất ở đâu?', 'Nơi ít được nhận thức nhất.'],
    ['Vì sao Davis tránh từ “chất lượng”?', 'Dễ nhầm với “đầu tư chất lượng”, và mang thiên kiến nhìn lại/hiệu ứng hào quang.']
  ],
  quiz: [
    { q: 'Rủi ro cao chủ yếu đi kèm với:', o: ['Công ty nhỏ', 'Giá cao', 'Biến động cao', 'Tính thanh khoản'], a: 1, e: 'Giá quá cao do lạc quan.' },
    { q: 'Điều rủi ro nhất là:', o: ['Biến động lớn', 'Niềm tin rằng không có rủi ro', 'Lãi suất cao', 'Lạm phát'], a: 1, e: 'Dẫn đến giá cao, phần bù biến mất.' },
    { q: 'Theo Marks, rủi ro có thể bị loại bỏ bằng đa dạng hoá và công cụ mới không?', o: ['Có', 'Không, chỉ chuyển giao và lan rộng', 'Chỉ với đòn bẩy', 'Chỉ với phái sinh'], a: 1, e: 'Câu chuyện giảm rủi ro hiếm khi thành sự thật.' },
    { q: 'Khi lãi suất phi rủi ro giảm mạnh, đường thị trường vốn:', o: ['Dốc hơn', 'Thấp hơn và phẳng hơn', 'Không đổi', 'Biến mất'], a: 1, e: 'Phần bù rủi ro hẹp lại.' },
    { q: 'Moral hazard minh hoạ bằng ví dụ nào?', o: ['Xe SUV/thiết bị an toàn leo núi', 'Giá nhà', 'Trái phiếu rác', 'Hoa tulip'], a: 0, e: 'An toàn nhận thức làm hành vi liều hơn.' },
    { q: '“Nghịch lý của rủi ro” nghĩa là:', o: ['Rủi ro luôn tăng', 'Sợ rủi ro làm giảm rủi ro; thờ ơ tạo ra rủi ro', 'Rủi ro vô nghĩa', 'Rủi ro bằng lợi nhuận'], a: 1, e: 'Thị trường động.' },
    { q: 'Khi mọi người đồng thuận rằng thứ gì đó “quá rủi ro”:', o: ['Nó thực sự rất nguy hiểm', 'Có thể giá đã giảm đủ để ít rủi ro', 'Không bao giờ mua', 'Chắc chắn phá sản'], a: 1, e: 'Sự đồng thuận thường sai về rủi ro.' },
    { q: 'Nhận định đúng về tài sản “chất lượng cao”:', o: ['Luôn an toàn', 'Có thể rủi ro nếu giá cao', 'Luôn rẻ', 'Không bao giờ giảm'], a: 1, e: 'Nifty Fifty.' },
    { q: 'Dấu hiệu của môi trường rủi ro cao:', o: ['Nhiều người bán bị ép', 'Phần bù rủi ro mỏng và đấu giá mạnh', 'Chênh lệch rộng', 'Giá thấp'], a: 1, e: 'Tâm lý lạc quan.' },
    { q: 'Câu của Buffett về thủy triều:', o: ['Ai bơi không quần áo', 'Cá lớn nuốt cá bé', 'Mua khi sợ hãi', 'Đừng bao giờ vay'], a: 0, e: 'Rủi ro lộ ra khi thị trường xấu.' }
  ],
  match: [
    ['Moral hazard', 'An toàn nhận thức làm người ta liều hơn'],
    ['Nghịch lý rủi ro', 'Thờ ơ tạo rủi ro, sợ làm giảm rủi ro'],
    ['Phần bù rủi ro', 'Bồi thường cho rủi ro, mỏng khi lạc quan'],
    ['Đường thị trường vốn phẳng', 'Ít thưởng thêm cho rủi ro tăng'],
    ['Giá cao', 'Nguồn rủi ro lớn nhất'],
    ['Tin không có rủi ro', 'Điều rủi ro nhất'],
    ['Thiên kiến nhìn lại', 'Lý do tránh từ “chất lượng”']
  ]
});

BOOK_DATA.marks.chapters.push({
  n: 7,
  title: 'Kiểm soát rủi ro',
  intro: 'Công việc của nhà đầu tư là khôn ngoan chấp nhận rủi ro để kiếm lợi nhuận. Nhà đầu tư xuất sắc được phân biệt bởi khả năng kiểm soát rủi ro không kém khả năng tạo lợi nhuận — nhưng kiểm soát rủi ro vô hình trong thời kỳ tốt.',
  sections: [
    { icon: '🛡️', title: 'Kiểm soát rủi ro là điều vô hình', blocks: [
      { t: 'key', x: 'Nhà đầu tư vĩ đại chấp nhận <b>ít rủi ro hơn lợi nhuận họ kiếm được</b>: lợi nhuận vừa với rủi ro thấp, hoặc cao với rủi ro vừa. Hồ sơ của Buffett, Lynch, Miller, Robertson ấn tượng vì <b>nhất quán nhiều thập kỷ, không thảm họa</b>.' },
      { t: 'p', x: 'Rủi ro là khả năng mất mát — <b>không quan sát được</b>; chỉ quan sát được mất mát, và nó chỉ xảy ra khi rủi ro gặp sự kiện tiêu cực. Ẩn dụ: vi khuẩn gây bệnh nhưng không phải bệnh; nhà ở California có thể có lỗi xây dựng chỉ lộ ra khi có động đất.' },
      { t: 'warn', x: 'Hệ quả: trong thời kỳ tốt, không biết kiểm soát rủi ro (a) có mặt nhưng không cần hay (b) thiếu hụt. <b>Không có giải thưởng cho kiểm soát rủi ro</b> trong thời tốt; người có ý thức rủi ro giống chủ nhà thận trọng mua bảo hiểm và hài lòng ngay cả khi không có hoả hoạn. Lợi nhuận tuyệt đối cao dễ nhận ra hơn hiệu suất điều chỉnh rủi ro.' }
    ] },
    { icon: '🎯', title: 'Thế nào là làm tốt?', blocks: [
      { t: 'table', head: ['Cách thể hiện kỹ năng', 'Mô tả'], rows: [
        ['Hình 7.1 – alpha thông thường', 'Cùng mức rủi ro với chuẩn nhưng lợi nhuận <b>cao hơn</b>'],
        ['Hình 7.2 – ưa thích của Marks', 'Cùng lợi nhuận với chuẩn nhưng rủi ro <b>thấp hơn</b> (hoặc lợi suất kém chút, rủi ro thấp hơn nhiều)']
      ] },
      { t: 'tip', x: 'Làm sao hưởng đủ lợi nhuận thị trường tăng mà vẫn vượt trội khi thị trường giảm? Bằng cách bắt lợi nhuận tăng trong khi chịu rủi ro dưới mức thị trường — không dễ. Greenblatt: đánh giá tài năng này bằng <b>quy trình đầu tư</b> hơn là so với chỉ số.' },
      { t: 'h3', x: 'Chấp nhận rủi ro một cách khôn ngoan: bài học từ bảo hiểm nhân thọ' },
      { t: 'steps', items: [
        'Rủi ro mà họ <b>nhận thức</b> (mọi người đều chết).',
        'Rủi ro họ có thể <b>phân tích</b> (bác sĩ đánh giá sức khoẻ).',
        'Rủi ro họ có thể <b>đa dạng hoá</b> (tuổi, giới tính, nghề, địa lý).',
        'Rủi ro họ chắc chắn <b>được trả công xứng đáng</b> (phí bảo hiểm theo bảng tính toán).'
      ] },
      { t: 'p', x: 'Oaktree làm tương tự với trái phiếu lợi suất cao: nhận thức rủi ro, dùng chuyên gia phân tích, đa dạng hoá hợp lý, và chỉ đầu tư khi lợi suất vượt xa rủi ro. Tài sản rủi ro có thể là khoản đầu tư tốt nếu đủ rẻ; bài kiểm tra là <b>hồ sơ thành công liên tục nhiều năm</b>.' }
    ] },
    { icon: '🔫', title: 'Cạm bẫy: không biết “tồi tệ đến mức nào là tồi tệ”', blocks: [
      { t: 'warn', x: 'Biến động cực đoan hiếm, nên lâu không xảy ra tạo cảm giác giả định quá bảo thủ ⇒ nới quy tắc, tăng đòn bẩy — thường ngay trước khi rủi ro lộ ra. Taleb: giống <b>trò Nga quay súng</b> nhưng khẩu súng có hàng trăm buồng và không nhìn thấy nòng; người ta chơi mà gọi là “rủi ro thấp”.' },
      { t: 'list', items: [
        'Các tổ chức 2004–07 chơi trò rủi ro cao tưởng thấp vì giả định tổn thất/biến động quá thấp (có thể đã dùng đòn bẩy bằng nửa nếu cho rằng giá nhà có thể giảm).',
        'Johnson: không thể điều hành theo giả định tồi tệ nhất. Chuẩn bị cho mức nào — 2%? 10%? 50%? Nếu mọi danh mục phải chịu giảm như 2008, có thể không ai dùng đòn bẩy (thậm chí không ai đầu tư).',
        'Hình 7.3: chuẩn (A), tốt hơn (B) / tệ hơn (C), ngoại lệ (D), và <b>kết quả một lần mỗi thế kỷ hoặc chưa từng (E)</b> — thường bị quên.',
        'Thực tế: chuẩn bị cho sự kiện <b>một lần trong một thế hệ</b> là đủ, nhưng thế hệ không phải mãi mãi — không có đáp án dễ cho “thảm họa không thể xảy ra”.'
      ] }
    ] },
    { icon: '⚖️', title: 'Kiểm soát rủi ro ≠ tránh rủi ro', blocks: [
      { t: 'key', x: 'Kiểm soát rủi ro là con đường tốt nhất tránh tổn thất; <b>tránh rủi ro</b> thì tránh luôn lợi nhuận. Oaktree chấp nhận rủi ro vào lúc thích hợp, trường hợp đúng, với giá hợp lý — đặc biệt rủi ro mà người khác cực kỳ e ngại. Will Rogers: “Bạn phải đôi khi liều lĩnh vì đó là nơi có trái cây.” Đó là <b>trí tuệ rủi ro</b>, không phải né tránh.' },
      { t: 'p', x: 'Con đường đến thành công dài hạn chủ yếu là <b>kiểm soát rủi ro hơn là quyết đoán</b>: kết quả cả sự nghiệp được quyết định nhiều hơn bởi số lượng và mức độ nghiêm trọng của các khoản lỗ hơn là độ vĩ đại của khoản lãi.' },
      { t: 'widget', name: 'loss-recovery', title: 'Lỗ càng sâu, hoà vốn càng khó' }
    ] }
  ],
  summary: [
    'Nhà đầu tư giỏi chấp nhận rủi ro khôn ngoan và kiểm soát nó; thành tích nhất quán, không thảm họa.',
    'Kiểm soát rủi ro vô hình trong thời kỳ tốt; thành quả là các khoản lỗ không xảy ra.',
    'Giá trị gia tăng có thể là cùng lợi nhuận với rủi ro thấp hơn (hình 7.2), không chỉ alpha cao hơn.',
    'Chấp nhận rủi ro đúng: nhận thức, phân tích, đa dạng hoá, được trả công xứng đáng.',
    'Kiểm soát rủi ro khác tránh rủi ro; lỗ sâu cần lãi lớn hơn rất nhiều để phục hồi.'
  ],
  cards: [
    ['Công việc cốt lõi của nhà đầu tư?', 'Khôn ngoan chấp nhận rủi ro để kiếm lợi nhuận.'],
    ['Điều gì phân biệt nhà đầu tư vĩ đại?', 'Kiểm soát rủi ro tốt như tạo lợi nhuận; thành tích nhất quán nhiều thập kỷ.'],
    ['Vì sao kiểm soát rủi ro không được trao giải?', 'Rủi ro không quan sát được; chỉ thấy mất mát, mà mất mát chỉ xảy ra khi có sự kiện tiêu cực.'],
    ['Ẩn dụ vi khuẩn/nhà California?', 'Rủi ro là vi khuẩn/lỗi xây dựng; mất mát là bệnh/sụp đổ khi động đất.'],
    ['Hình 7.2 của Marks?', 'Cùng lợi nhuận với chuẩn nhưng rủi ro thấp hơn.'],
    ['Bốn điều kiện rủi ro nên chấp nhận (bảo hiểm nhân thọ)?', 'Nhận thức được, phân tích được, đa dạng hoá được, được trả công xứng đáng.'],
    ['Bài kiểm tra chấp nhận rủi ro khôn ngoan?', 'Hồ sơ thành công liên tục trong thời gian dài.'],
    ['Trò Nga quay súng của Taleb?', 'Viên đạn chết người hiếm đến mức ta quên nó, rủi ro bị gọi là “thấp”.'],
    ['Vì sao nhà đầu tư nới lỏng quy tắc trước khủng hoảng?', 'Biến động cực đoan lâu không xảy ra tạo cảm giác giả định quá bảo thủ.'],
    ['Chuẩn bị cho sự kiện nào là đủ?', 'Một lần trong một thế hệ (và vẫn có lúc bị vượt qua).'],
    ['Kiểm soát rủi ro vs tránh rủi ro?', 'Kiểm soát: tránh tổn thất. Tránh: tránh cả lợi nhuận.'],
    ['Câu của Will Rogers?', 'Bạn phải đôi khi liều lĩnh vì đó là nơi có trái cây.'],
    ['Lỗ 40% cần lãi bao nhiêu để hoà vốn?', '67% (lỗ x% cần lãi x/(1−x)).'],
    ['Điều quyết định kết quả sự nghiệp?', 'Số lượng và mức độ nghiêm trọng của khoản lỗ hơn là độ lớn của khoản thắng.']
  ],
  quiz: [
    { q: 'Rủi ro có quan sát được không?', o: ['Có, qua biến động', 'Không, chỉ quan sát được mất mát', 'Có, qua beta', 'Có, qua Sharpe'], a: 1, e: 'Rủi ro là khả năng.' },
    { q: 'Vì sao kiểm soát rủi ro khó được thưởng trong thời kỳ tốt?', o: ['Nó không có tác dụng', 'Không biết nó có hay thiếu vì không bị thử thách', 'Quá đắt', 'Ít người cần'], a: 1, e: 'Giống bảo hiểm không có hoả hoạn.' },
    { q: 'Giá trị gia tăng theo hình 7.2 là:', o: ['Lợi nhuận cao hơn cùng rủi ro', 'Cùng lợi nhuận, rủi ro thấp hơn', 'Rủi ro cao hơn', 'Phí thấp'], a: 1, e: 'Giảm rủi ro ở mức lợi nhuận cho trước.' },
    { q: 'Điều KHÔNG nằm trong bốn tiêu chí bảo hiểm nhân thọ:', o: ['Nhận thức', 'Phân tích', 'Dự đoán chính xác', 'Đa dạng hoá'], a: 2, e: 'Còn “được trả công xứng đáng”.' },
    { q: 'Trò Nga quay súng của Taleb minh hoạ:', o: ['Rủi ro hiếm bị quên vì cảm giác an toàn giả', 'Cờ bạc', 'Đòn bẩy tốt', 'Phái sinh'], a: 0, e: 'Nòng súng thực tế không nhìn thấy.' },
    { q: 'Sự khác biệt kiểm soát vs tránh rủi ro:', o: ['Không có', 'Kiểm soát tránh tổn thất; tránh rủi ro tránh luôn lợi nhuận', 'Tránh rủi ro tốt hơn', 'Kiểm soát giảm lợi nhuận'], a: 1, e: 'Oaktree chấp nhận rủi ro được trả công.' },
    { q: 'Lỗ 50% cần lãi bao nhiêu để hoà vốn?', o: ['50%', '75%', '100%', '150%'], a: 2, e: '50/(100−50) = 100%.' },
    { q: 'Nhà đầu tư vĩ đại thường có hồ sơ:', o: ['Một năm lãi 200%', 'Nhất quán nhiều thập kỷ, không thảm họa', 'Không năm xấu nào', 'Đòn bẩy cao'], a: 1, e: 'Buffett, Lynch…' },
    { q: 'Điều quyết định kết quả cả sự nghiệp theo Marks:', o: ['Số khoản lãi', 'Số lượng và mức độ khoản lỗ', 'Phí', 'Tin tức'], a: 1, e: 'Thua lỗ lớn rất khó bù.' },
    { q: 'Vì sao khó chuẩn bị cho “tồi tệ nhất”?', o: ['Có thể là mất toàn bộ; không thể điều hành theo giả định đó', 'Luôn dễ', 'Không có rủi ro', 'Luật cấm'], a: 0, e: 'Cần cân bằng.' }
  ],
  match: [
    ['Kiểm soát rủi ro', 'Tránh tổn thất mà vẫn nhận lợi nhuận'],
    ['Tránh rủi ro', 'Tránh luôn cả lợi nhuận'],
    ['Trò Nga quay súng', 'Rủi ro hiếm bị quên'],
    ['Hình 7.2', 'Cùng lợi nhuận, rủi ro thấp hơn'],
    ['Bảo hiểm nhân thọ', 'Ví dụ nhận thức–phân tích–đa dạng–được trả công'],
    ['Trí tuệ rủi ro', 'Hiểu, quản lý và minh bạch rủi ro'],
    ['Lỗ 40%', 'Cần lãi 67% để hoà vốn']
  ]
});
