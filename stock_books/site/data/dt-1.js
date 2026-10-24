window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 1,
  title: 'Giới thiệu: đọc băng giá (tape reading)',
  intro: 'Richard D. Wyckoff viết cuốn sách này năm 1919 về nghệ thuật "đọc băng" — nhìn từng giao dịch hiện ra từng giây để đoán thị trường sắp đi đâu. Chương mở đầu nói về phẩm chất tinh thần của người giao dịch trong ngày: kỷ luật, tự chủ cảm xúc, tự lập và tập trung.',
  sections: [
    { icon: '📜', title: 'Đọc băng là gì?', blocks: [
      { t: 'p', x: '"Tape" (băng giá, máy ticker) ghi lại từng giao dịch cổ phiếu theo thời gian thực. Wyckoff cho rằng thị trường luôn <b>tự cho thấy tương lai gần của nó</b> qua các giao dịch đó; ai diễn giải được chúng từng giây một có lợi thế lớn so với công chúng.' },
      { t: 'tip', x: 'Ngày nay "băng giá" tương ứng với dữ liệu giá và khối lượng thời gian thực (Level 2, time & sales). Nguyên lý — đọc hành vi giá và khối lượng — vẫn được dùng, nhưng thị trường, chi phí và công nghệ đã thay đổi rất nhiều so với 1919.' },
      { t: 'list', items: ['Nhiều nhà giao dịch thành công bắt đầu bằng đọc băng với vài trăm đô la.', 'Ví dụ trong sách: Joe Manning và một người bạn cùng giao dịch lô 10 cổ phiếu; một người thành triệu phú, người kia thì không. Khác biệt là <b>phẩm chất tinh thần</b>, không phải cơ hội hay vốn.', 'Jesse Livermore từng giao dịch theo băng, đóng hết vị thế trước giờ đóng cửa, và có ba trên năm giao dịch có lãi (theo lời kể của tác giả).'] }
    ] },
    { icon: '🧠', title: 'Phẩm chất cần có', blocks: [
      { t: 'steps', items: ['<b>Tự lập, tự quyết:</b> nói được "dữ kiện ở đây, phân tích của tôi là thế này, nên tôi làm thế này". Người phụ thuộc lời khuyên bị hàng nghìn ảnh hưởng bên ngoài kéo đi.', '<b>Hiểu cơ chế thị trường:</b> lịch sử lợi nhuận của công ty, cách tay to tích lũy và phân phối cổ phiếu, các loại thị trường (tăng, giảm, đi ngang), tác động của tin tức, khi nào cắt lỗ không sợ và chốt lời không kiêu.', '<b>Nhận biết các nhịp dao động và điểm đảo chiều;</b> hiểu cái gì đứng sau chuyển động giá.', '<b>Thần kinh thép:</b> chịu được chuỗi lỗ, kiên trì khi bất lợi, tránh giao dịch quá mức, tính khí điềm tĩnh.'] },
      { t: 'widget', name: 'dt-trader-qual', title: 'Tự đánh giá phẩm chất người giao dịch trong ngày' },
      { t: 'key', x: 'Wyckoff so sánh: người "lướt sóng" (scalper) như chiếc xe không giảm xóc, rung lắc theo từng ổ gà; người đọc băng như đoàn tàu êm, nhận hướng và tốc độ từ đầu máy thị trường và không bị gì khác chi phối.' }
    ] },
    { icon: '🔇', title: 'Môi trường làm việc và tin tức', blocks: [
      { t: 'p', x: 'Ông khuyên làm việc ở một căn phòng nhỏ riêng, chỉ cần màn hình giá, bàn và điện thoại tới môi giới, tránh tin đồn và lời mách trong văn phòng môi giới. Chỉ một ý nghĩ "có thể anh ta đúng" cũng làm bạn chần chừ và lỡ cơ hội.' },
      { t: 'tip', x: '"Tin tức là tin tức": nó ghi lại <i>nguyên nhân</i> cho điều đã xảy ra và đã phần nào được định giá. Băng giá cho biết hiện tại và gần như tương lai; tiền được kiếm bằng cách đoán trước, không phải chờ sự việc xảy ra rồi chạy theo đám đông. Có thể dùng tin tức, nhưng chỉ với trọng số xứng đáng — xem cổ phiếu phản ứng thế nào với tin quan trọng để biết sức mạnh kỹ thuật.' },
      { t: 'warn', x: 'Đây là cuốn sách lịch sử (1919, giao dịch trong ngày bằng ticker). Giao dịch trong ngày ngày nay rủi ro cao, nhiều người lỗ; thông tin chỉ có giá trị học thuật và không phải lời khuyên đầu tư.' }
    ] }
  ],
  summary: ['Đọc băng: diễn giải giao dịch từng giây để đoán chiều thị trường.', 'Thành công phụ thuộc phẩm chất tinh thần và kỷ luật nhiều hơn vốn.', 'Tự lập, hiểu thị trường, chịu được thua lỗ, tập trung.', 'Tin tức ghi lại điều đã xảy ra; băng giá cho tín hiệu sớm hơn.'],
  cards: [['Tape reading?', 'Đọc từng giao dịch hiện ra để đoán chiều giá'], ['Phẩm chất đầu tiên?', 'Tự lập, tự quyết'], ['Scalper khác tape reader?', 'Lướt theo mọi dao động vs theo xu hướng'], ['Vì sao tránh tin đồn?', 'Làm lệch phán đoán và gây chần chừ'], ['Tin tức là gì theo Wyckoff?', 'Ghi lại nguyên nhân của điều đã xảy ra'], ['Kỷ luật gồm?', 'Kiểm soát sợ hãi, tham lam, hấp tấp'], ['Môi trường lý tưởng?', 'Phòng riêng, tập trung'], ['Tiền kiếm bằng cách?', 'Đoán trước, không chạy theo đám đông']],
  quiz: [
    { q: 'Theo Wyckoff, khác biệt giữa hai nhà giao dịch cùng vốn là:', o: ['Phẩm chất tinh thần', 'May mắn', 'Văn phòng', 'Môi giới'], a: 0, e: 'Mental qualifications.' },
    { q: 'Tin tức, theo tác giả:', o: ['Dự báo tương lai chính xác', 'Ghi lại điều đã xảy ra', 'Luôn sai', 'Bắt buộc'], a: 1, e: 'Record of what happened.' },
    { q: 'Người đọc băng tốt cần:', o: ['Phụ thuộc lời khuyên', 'Tự lập và tập trung', 'Giao dịch nhiều cổ phiếu cùng lúc', 'Nghe mọi tin đồn'], a: 1, e: 'Self-reliant.' },
    { q: 'Scalper được ví như:', o: ['Đoàn tàu êm', 'Xe không giảm xóc', 'Máy bay', 'Tàu ngầm'], a: 1, e: 'Rickety car.' }
  ],
  match: [['Tape', 'Dòng giao dịch thời gian thực'], ['Scalper', 'Lướt dao động nhỏ'], ['Self-reliance', 'Tự quyết'], ['News', 'Ghi lại điều đã xảy ra'], ['Discipline', 'Kiểm soát cảm xúc']]
});
