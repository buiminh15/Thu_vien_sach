window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 2,
  title: 'Bắt đầu học đọc băng',
  intro: 'Học trên giấy dễ vì không có sợ hãi. Chương này khuyên bắt đầu giao dịch thật nhưng với lô rất nhỏ, đặt lệnh theo thị trường, và chọn một hoặc hai cổ phiếu để nghiên cứu sâu thay vì dàn trải.',
  sections: [
    { icon: '🧪', title: 'Học trên giấy và học bằng tiền thật', blocks: [
      { t: 'p', x: 'Giao dịch tưởng tượng ai cũng làm được vì không có nỗi sợ, kiên nhẫn vô hạn. Khi bỏ tiền thật dù nhỏ, phán đoán bị méo: bạn đóng vị thế sớm để thoát khỏi căng thẳng. Đó là triệu chứng của thiếu kinh nghiệm và không thể khắc phục bằng cách tránh né.' },
      { t: 'key', x: 'Sau khi đọc hết tài liệu, hãy bắt đầu giao dịch với <b>lô nhỏ nhất có thể</b> (sách nói 10 cổ phiếu để học; tối thiểu thực tế khoảng 50) để có kinh nghiệm thật. "Con cừu" có 10.000 USD muốn bắt đầu 500–1.000 cổ phiếu sẽ phải xuống 50 cổ phiếu sau khi mất phần lớn vốn." Hãy tăng lô khi đã thành công.' },
      { t: 'widget', name: 'dt-lot-risk', title: 'Quy mô lô và rủi ro: mất bao nhiêu nếu sai 2 điểm?' },
      { t: 'tip', x: 'Hình ảnh của tác giả: đứa trẻ đang tập đi mà bị ghi tên chạy đua với vận động viên nước rút.' }
    ] },
    { icon: '⚡', title: 'Loại lệnh', blocks: [
      { t: 'p', x: 'Người đọc băng phải mở hoặc đóng vị thế đúng lúc, nên lệnh thường là <b>lệnh theo giá thị trường</b>. Cò kè từng phân số làm mất mạch băng, phá thế cân bằng. Lệnh giới hạn chỉ phù hợp khi mua/bán theo từng bậc (scale) hoặc một số tình huống đặc biệt. Với người đi theo xu hướng: "lên tàu hoặc bị bỏ lại."' },
      { t: 'warn', x: 'Ngày nay giao dịch ngoài giờ, khớp lệnh thiếu thanh khoản hoặc cổ phiếu biến động mạnh khiến lệnh thị trường trượt giá nặng; nhiều nhà giao dịch hiện đại ưu tiên lệnh giới hạn. Đừng áp dụng nguyên văn.' }
    ] },
    { icon: '🎯', title: 'Chọn cổ phiếu để giao dịch', blocks: [
      { t: 'list', items: ['Cổ phiếu giá cao dao động nhiều điểm hơn: cổ phiếu ~150 USD trung bình dao động 2,5 điểm/ngày, ~50 USD chỉ 1 điểm. Với lô 100 cổ phiếu, 1 điểm = 100 USD. Hoa hồng và thuế thì bằng nhau; lãi vay (margin) lớn hơn nhưng không đáng kể cho người đóng vị thế mỗi ngày.', 'Không chọn cổ phiếu quá đắt hoặc khoảng cách giá mua–bán quá rộng, vì khó vào–ra nhanh.', 'Chọn <b>cổ phiếu dẫn đầu</b>: nguồn cung nổi lớn, công chúng quan tâm rộng, thị trường rộng, xu hướng xác định rõ.', 'Chỉ giao dịch <b>một hoặc hai</b> cổ phiếu để tập trung; mỗi cổ phiếu có "tính cách" riêng (bướng bỉnh, nhạy cảm, hung hăng, lười biếng...).'] },
      { t: 'widget', name: 'dt-points', title: 'Dao động trung bình ngày và lợi nhuận tiềm năng theo giá cổ phiếu' },
      { t: 'key', x: 'Giao dịch dựa trên điều bạn "nghĩ" hiếm khi hiệu quả. Chọn vài cổ phiếu bằng đoán mò thay vì một cổ phiếu bằng lý lẽ và phân tích là nguyên nhân thua lỗ phổ biến. "Giống đuổi một bầy lợn: bạn mải nhìn con này thì con khác chạy mất."' }
    ] }
  ],
  summary: ['Bắt đầu thật nhưng lô nhỏ để học kiểm soát cảm xúc.', 'Lệnh thị trường phù hợp với đọc băng (bối cảnh 1919).', 'Cổ phiếu giá cao dao động nhiều điểm hơn.', 'Tập trung 1–2 cổ phiếu và nghiên cứu "tính cách" của chúng.'],
  cards: [['Vì sao giao dịch giấy dễ?', 'Không có nỗi sợ và áp lực thật'], ['Lô nhỏ nhất thực tế theo sách?', '~50 cổ phiếu (10 chỉ để học)'], ['Lệnh phù hợp đọc băng?', 'Lệnh thị trường'], ['Cổ phiếu 150 USD dao động?', '~2,5 điểm/ngày'], ['Cổ phiếu 50 USD dao động?', '~1 điểm/ngày'], ['Cổ phiếu dẫn đầu cần?', 'Nguồn cung nổi lớn, quan tâm rộng, xu hướng rõ'], ['Số cổ phiếu nên theo dõi?', '1–2'], ['Giao dịch theo "nghĩ" nghĩa là?', 'Đoán mò, hiếm khi tốt']],
  quiz: [
    { q: '100 cổ phiếu, giá di chuyển 1 điểm có lợi, lãi:', o: ['10 USD', '100 USD', '1.000 USD', '1 USD'], a: 1, e: '1 điểm × 100.' },
    { q: 'Vì sao nên bắt đầu bằng lô nhỏ?', o: ['Học kiểm soát cảm xúc với rủi ro nhỏ', 'Hoa hồng thấp', 'Luật cấm', 'Dễ lãi hơn'], a: 0, e: 'Tránh mất vốn lớn.' },
    { q: 'Lý do chọn ít cổ phiếu:', o: ['Dễ tập trung', 'Giảm thuế', 'Tăng hoa hồng', 'Không lý do'], a: 0, e: 'Concentration.' },
    { q: 'Lệnh thị trường phù hợp vì:', o: ['Đúng lúc, tránh cò kè', 'Luôn rẻ nhất', 'Không có phí', 'Không trượt giá'], a: 0, e: 'Get on or get left.' }
  ],
  match: [['Market order', 'Lệnh theo giá thị trường'], ['Odd lot', 'Lô lẻ dưới 100 cổ phiếu'], ['Leader', 'Cổ phiếu dẫn đầu'], ['Paper trading', 'Giao dịch giấy'], ['Floating supply', 'Cổ phiếu lưu hành tự do']]
});
