// Tủ lạnh nén (EPI) – Chương 2: Hàn đồng, hàn thiếc và sửa tạm.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.refrig = BOOK_DATA.refrig || { chapters: [] };
BOOK_DATA.refrig.chapters.push({
  n: 2,
  title: 'Hàn đồng (brazing), hàn thiếc (soldering) và sửa tạm',
  intro: 'Mối nối ống đồng trong hệ thống làm lạnh được <b>hàn đồng (brazing)</b> ở nhiệt độ cao để chịu áp suất; mối nối điện chỉ cần <b>hàn thiếc mềm</b> ở nhiệt độ thấp. Chương này cũng nói về <b>ủ mềm ống</b>, đèn hàn, mối hàn nong, và hai kiểu <b>sửa tạm</b> rò rỉ (epoxy và que hàn nhiệt).',
  sections: [
    { icon: '🔥', title: 'Chuẩn bị: ủ mềm và làm sạch', blocks: [
      { t: 'list', items: [
        'Muốn hàn hai ống, một ống phải được <b>nong (swage)</b> đầu. <b>Ống cũ cứng</b>, nong sẽ nứt/rách → phải <b>ủ (anneal)</b> trước.',
        '<b>Ủ ống</b>: nung đến màu <b>đỏ sẫm (dull red)</b>, không quá nóng — đỏ sáng là quá nhiệt. Để nguội chậm tới nhiệt độ phòng, ống sẽ mềm. Nếu chưa dùng đèn hàn bao giờ, hãy tập bằng cách ủ ống.',
        '<b>Làm sạch</b> mặt ống sẽ nối bằng <b>bùi nhùi thép (steel wool)</b>; <b>không dùng vải nhám/emery</b> hay vật liệu mài khác; không để sót sợi thép trong ống.'
      ] },
      { t: 'widget', name: 'rf-anneal', title: 'Màu kim loại khi ủ' }
    ] },
    { icon: '🔩', title: 'Hàn đồng mối nong', blocks: [
      { t: 'steps', items: [
        'Ống phải lồng vào chỗ nong <b>dễ dàng (easy fit)</b>. Quá chặt: không đủ khe cho vật liệu hàn; quá lỏng: mối yếu.',
        'Trộn một ít bột <b>flux</b> với cồn (hoặc nước) thành hồ đặc. (Nếu dùng que hàn tự có flux thì bỏ bước này.)',
        'Bôi <b>một lượng nhỏ</b> flux lên các mặt cần nối — nhiều quá sẽ làm bẩn hệ thống.',
        'Đẩy ống vào chỗ nong hết cỡ, xoay ống để rải đều flux.',
        'Nung mối nối bằng đèn hàn với <b>cỡ ngọn lửa đúng</b>.',
        'Chờ mối nối đỏ sẫm. Thỉnh thoảng chạm que hàn vào mối nối để thử nhiệt độ: que bắt đầu chảy là đủ nhiệt. <b>Không để que hàn trong ngọn lửa</b> — que phải chảy nhờ nhiệt của mối nối chứ không phải của ngọn lửa; không nung quá nhiệt.',
        'Chạm que vào nhiều điểm quanh mối; vật liệu hàn chảy lỏng bị hút vào khe giữa mặt ngoài một ống và đầu nong của ống kia.',
        'Khi thấy một vòng vật liệu hàn trọn vẹn ở miệng chỗ nong thì bỏ đèn.',
        'Để nguội; <b>không xê dịch</b> ống cho tới khi vật liệu hàn cứng lại.'
      ] },
      { t: 'warn', x: 'Luôn thử rò rỉ mối hàn khi hệ thống đã có lại môi chất R12. Mối hàn yếu dễ rò — đây là sự cố thường gặp.' }
    ] },
    { icon: '🔥', title: 'Đèn hàn', blocks: [
      { t: 'table', head: ['Loại đèn', 'Đặc điểm và lưu ý'], rows: [
        ['<b>Axetylen</b>', 'Rất dễ cháy — cấm hút thuốc. Nối đèn với van điều áp bình bằng ống mềm; kiểm tra mọi mối nối rò khí bằng <b>nước xà phòng</b> trước khi châm lửa. Mở van bình <b>đúng một vòng</b>, mở hết van điều áp, mở van đèn vừa đủ có khí, châm lửa ở đầu mỏ. Ngọn lửa phải <b>xanh</b>, có chóp sáng nhọn ở giữa (phần nóng nhất — làm việc bằng đầu chóp); lửa nhỏ cho hàn ống mao dẫn, cỡ lớn hơn cho hàn ống'],
        ['<b>Propan (turbo)</b>', 'Rất dễ cháy. Ngọn lửa ngoài nhỏ hơn nhưng đầu chóp trong <b>nóng hơn</b> axetylen cùng cỡ → luôn dùng ngọn lửa <b>nhỏ hơn</b>. Lửa vàng nghĩa là cần thêm khí. Làm theo hướng dẫn nhà sản xuất'],
        ['<b>Đèn khò dầu hoả</b>', 'Ngọn lửa lớn hơn propan và axetylen; khi châm lửa làm đúng hướng dẫn của đèn']
      ] },
      { t: 'widget', name: 'rf-torch', title: 'Chọn đèn hàn và đọc ngọn lửa' }
    ] },
    { icon: '💡', title: 'Hàn thiếc điện và đèn thử', blocks: [
      { t: 'p', x: 'Mối nối điện không cần độ bền của mối hàn đồng, và nhiệt độ cao còn gây hỏng — nên hàn <b>thiếc mềm</b> ở nhiệt độ thấp bằng mỏ hàn điện. Dùng <b>thiếc có lõi flux (cored solder)</b>; không có thì phải dùng flux riêng.' },
      { t: 'steps', items: [
        '<b>Chuẩn bị mỏ hàn</b>: cắm điện cho nóng; chải sạch bẩn và thiếc cũ bằng bàn chải sắt; <b>“tráng thiếc” (tin)</b> đầu mỏ: cho chảy một ít thiếc rồi nhanh tay quét bằng vải ẩm (không ướt).',
        '<b>Chuẩn bị bề mặt</b>: loại bẩn, rỉ, sơn bằng bùi nhùi thép; loại dầu mỡ bằng cồn; <b>không chạm tay</b> vào bề mặt đã làm sạch.',
        'Tráng thiếc từng bề mặt cho có một lớp thiếc mỏng.',
        'Ghép đúng vị trí và giữ cố định (không được nhúc nhích khi hàn); nung cả hai mặt bằng mỏ hàn, thỉnh thoảng chạm thiếc vào bề mặt nóng; khi thiếc chảy thì cho chảy tràn đủ quanh mối.',
        'Để nguội, không xê dịch cho tới khi thiếc cứng.'
      ] },
      { t: 'p', x: '<b>Đèn thử (test lamp)</b>: làm từ bóng đèn, dây điện hai ruột (khoảng 1 m) và phích cắm; đầu dây tuốt vỏ cách điện (~2,5 cm). Đèn thử đơn giản (không nguồn) thì bỏ phích cắm; “powered test lamp” có phích cắm. Dùng để thử thông mạch (xem chương đo kiểm điện).' }
    ] },
    { icon: '🩹', title: 'Sửa tạm rò rỉ', blocks: [
      { t: 'table', head: ['Loại rò', 'Cách sửa tạm'], rows: [
        ['<b>Áp thấp</b> (phía hút)', '1) Xả hết khí R12 — không bịt được khi còn áp. 2) Làm sạch bề mặt quanh chỗ rò (như hàn thiếc: bùi nhùi thép, cồn). 3) Trộn <b>lượng bằng nhau</b> từ hai ống epoxy trên nắp hộp thiếc bằng tuốc-nơ-vít cũ cho tới khi đồng màu. 4) Bôi ngay lên lỗ, để chảy vào kín lỗ (đông cứng bắt đầu ngay). 5) Đợi epoxy cứng trước khi nạp lại gas; chờ vài giờ để có mối sửa bền'],
        ['<b>Áp cao</b> (phía đẩy)', '1) Xả khí rồi chuẩn bị bề mặt. 2) Nung chỗ rò bằng đèn khò; chạm que <b>hàn nhiệt (heat seal stick)</b> vào bề mặt nóng — đúng nhiệt khi đầu que chảy chảy vào trong ống. 3) Bỏ đèn, chà đầu que lên chỗ nóng để que chảy bịt lỗ. 4) Đợi ít nhất <b>10 phút</b> cho mối cứng']
      ] },
      { t: 'warn', x: 'Que hàn nhiệt <b>không</b> sửa vĩnh viễn được rò áp cao. Muốn sửa bền phải <b>hàn đồng</b>.' },
      { t: 'widget', name: 'rf-leak-choice', title: 'Chọn cách sửa tạm' }
    ] }
  ],
  summary: [
    'Ủ ống tới đỏ sẫm, để nguội chậm; làm sạch bằng bùi nhùi thép, không dùng giấy nhám.',
    'Hàn đồng mối nong: khe vừa khít, ít flux, chạm que thử nhiệt, vòng hàn trọn, không xê dịch.',
    'Đèn hàn: axetylen xanh có chóp nhọn; propan nóng hơn nên lửa nhỏ hơn; kiểm rò khí bằng nước xà phòng.',
    'Hàn thiếc cho điện (thiếc có lõi flux); sửa tạm: epoxy cho áp thấp, que hàn nhiệt cho áp cao — chỉ tạm.'
  ],
  cards: [
    ['Vì sao phải ủ ống cũ?', 'Ống cũ cứng, nong sẽ nứt hoặc rách.'],
    ['Ủ tới màu gì?', 'Đỏ sẫm; đỏ sáng là quá nóng.'],
    ['Làm sạch ống bằng gì?', 'Bùi nhùi thép; không dùng vải nhám; không để sợi thép trong ống.'],
    ['Khe nong quá chặt hay lỏng thì?', 'Chặt: thiếu chỗ cho vật liệu hàn; lỏng: mối yếu.'],
    ['Quá nhiều flux gây gì?', 'Làm bẩn hệ thống.'],
    ['Biết đủ nhiệt khi nào?', 'Que hàn chạm vào mối bắt đầu chảy.'],
    ['Que hàn nên chảy nhờ gì?', 'Nhiệt của mối nối, không phải ngọn lửa.'],
    ['Khi nào bỏ đèn?', 'Thấy một vòng vật liệu hàn trọn vẹn ở miệng chỗ nong.'],
    ['Ngọn lửa axetylen đúng?', 'Xanh, có chóp sáng nhọn ở giữa.'],
    ['Propan so với axetylen?', 'Chóp nóng hơn → dùng ngọn lửa nhỏ hơn; lửa vàng = thiếu khí.'],
    ['Kiểm rò khí đèn hàn?', 'Nước xà phòng, trước khi châm lửa.'],
    ['Thiếc cho điện?', 'Thiếc có lõi flux (cored solder).'],
    ['Tin đầu mỏ hàn?', 'Cho chảy thiếc rồi quét bằng vải ẩm.'],
    ['Sửa tạm áp thấp?', 'Xả hết gas, làm sạch, trộn epoxy hai thành phần bằng nhau, bôi ngay.'],
    ['Que hàn nhiệt có vĩnh viễn?', 'Không với rò áp cao; phải hàn đồng.']
  ],
  quiz: [
    { q: 'Làm sạch mặt ống trước khi hàn đồng dùng:', o: ['Giấy nhám emery', 'Bùi nhùi thép', 'Giũa thô', 'Xăng'], a: 1, e: 'Không để sợi thép trong ống.' },
    { q: 'Ống ủ đúng có màu:', o: ['Xám', 'Đỏ sẫm', 'Đỏ sáng', 'Trắng'], a: 1, e: 'Đỏ sáng là quá nóng.' },
    { q: 'Que hàn nên được làm chảy bởi:', o: ['Ngọn lửa trực tiếp', 'Nhiệt của mối nối', 'Điện', 'Ma sát'], a: 1, e: 'Không để que trong ngọn lửa.' },
    { q: 'Mối hàn đồng cần được thử rò khi:', o: ['Trước khi hàn', 'Khi hệ thống đã có lại môi chất', 'Không cần', 'Chỉ khi nghi ngờ'], a: 1, e: 'Mối yếu dễ rò.' },
    { q: 'Ngọn lửa propan so với axetylen cùng cỡ:', o: ['Nguội hơn', 'Chóp nóng hơn → dùng lửa nhỏ hơn', 'Như nhau', 'Không dùng được'], a: 1, e: 'Theo sổ tay.' },
    { q: 'Mở van bình axetylen:', o: ['Hết cỡ', 'Đúng một vòng', 'Nửa vòng', 'Ba vòng'], a: 1, e: 'Mở van điều áp hết, van đèn vừa đủ.' },
    { q: 'Mối nối điện nên:', o: ['Hàn đồng', 'Hàn thiếc mềm', 'Epoxy', 'Quấn dây'], a: 1, e: 'Nhiệt độ cao còn làm hỏng.' },
    { q: 'Sửa tạm rò áp thấp, bước đầu:', o: ['Bôi epoxy', 'Xả hết khí R12', 'Nung đèn', 'Nạp thêm gas'], a: 1, e: 'Không bịt được khi còn áp.' },
    { q: 'Thời gian chờ que hàn nhiệt cứng:', o: ['1 phút', '10 phút', '1 giờ', '1 ngày'], a: 1, e: 'Ít nhất 10 phút.' },
    { q: 'Sửa vĩnh viễn rò áp cao:', o: ['Que hàn nhiệt', 'Epoxy', 'Hàn đồng', 'Băng keo'], a: 2, e: 'Que hàn nhiệt chỉ tạm.' }
  ],
  match: [
    ['Anneal', 'Ủ mềm ống'],
    ['Flux', 'Giúp vật liệu hàn bám'],
    ['Cored solder', 'Thiếc có lõi flux'],
    ['Heat seal stick', 'Sửa tạm áp cao'],
    ['Epoxy hai thành phần', 'Sửa tạm áp thấp'],
    ['Chóp sáng', 'Phần nóng nhất của ngọn lửa'],
    ['Nước xà phòng', 'Kiểm rò khí đèn hàn']
  ]
});
