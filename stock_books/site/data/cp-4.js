window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 4,
  title: 'Bong bóng vỡ',
  intro: 'Khi thị trường quay đầu, những thủ thuật kế toán biến thành sợi thòng lọng. Chương này cho thấy kiểm toán viên không báo động, các quỹ hưu trí doanh nghiệp bỗng thủng lỗ và luật mới vẫn chỉ là "vá víu".',
  sections: [
    { icon: '🕵️', title: 'Kiểm toán viên quay lại', blocks: [
      { t: 'p', x: 'Nhiều tháng sau, các kiểm toán viên của UCBS (cùng hãng với nhóm tư vấn lúc trước) mời CEO họp và chất vấn các thủ thuật. CEO nói quy tắc cho phép nắm dưới 49% là không phải hợp nhất. Kiểm toán viên đáp: quy tắc còn một vế khác — <b>nếu bạn thực sự kiểm soát điều hành thì dù sở hữu 1% cũng phải hợp nhất</b>. Các công ty lớn khác dựng cả "bức tường pháp lý" chứng minh không kiểm soát, còn UCBS thì không có.' },
      { t: 'key', x: 'Vấn đề then chốt: hợp pháp về hình thức không có nghĩa là báo cáo phản ánh trung thực bản chất kinh tế.' }
    ] },
    { icon: '🕳️', title: 'Quỹ hưu trí từ "mỏ vàng" thành "gánh nặng"', blocks: [
      { t: 'p', x: 'Giai đoạn 2000–2001 thị trường giảm, quỹ hưu trí hụt tài sản. Có thể dàn trải khoản hụt, nhưng nếu thị trường giảm tiếp thì không che được nữa. Theo khảo sát Watson Wyatt trích trong sách: năm 2000 có 87% công ty nói quỹ đủ vốn, đến đầu 2002 chỉ còn 37%. Riêng 234 công ty thuộc S&P 500 có kế hoạch phúc lợi xác định thiếu tổng cộng khoảng 78 tỷ USD.' },
      { t: 'table', head: ['Công ty', '1999', '2001'], rows: [['General Motors', 'Thặng dư 4,5 tỷ USD', 'Thâm hụt 12,6 tỷ USD'], ['Ford', 'Thặng dư 8,2 tỷ USD', 'Thâm hụt 2,4 tỷ USD'], ['Delta Airlines', 'Thặng dư 148 triệu USD', 'Thâm hụt 2,3 tỷ USD']] },
      { t: 'list', items: ['Các công ty thường giả định: thị trường hồi phục ngay năm sau, kinh tế tăng trưởng đều, lợi suất đầu tư cao — dù thực tế ngược lại.', 'Hai phần ba công ty S&P 500 có công bố dữ liệu này đang thiếu vốn quỹ hưu trí; 13 công ty thiếu trên 1 tỷ USD mỗi công ty.'] },
      { t: 'widget', name: 'cp-fundratio', title: 'Tỷ lệ đủ vốn của quỹ hưu trí và mức hụt' }
    ] },
    { icon: '🙈', title: 'Kiểm toán viên cùng che đậy', blocks: [
      { t: 'p', x: 'CEO gọi điện dọa hãng kiểm toán: hoặc bảo nhóm kiểm toán lùi lại và duyệt sổ sách như cũ, hoặc mất hợp đồng tư vấn béo bở. Hãng chỉ viết một bản ghi nhớ nội bộ rồi cất kỹ, trong khi gửi cổ đông bản xác nhận "báo cáo tài chính phản ánh trung thực, trọng yếu".' },
      { t: 'table', head: ['Ví dụ trong sách', 'Điểm cần nhớ'], rows: [
        ['Waste Management', 'Giấu khoảng 1,7 tỷ USD chi phí năm 1992–1997; kiểm toán phản đối lặng lẽ rồi vẫn phê duyệt'],
        ['Adelphia', 'Có thêm 2,3 tỷ USD nợ không ghi trên bảng cân đối; chỉ một năm trước vẫn nhận ý kiến sạch; phá sản tháng 6/2002'],
        ['Xerox', 'Phải điều chỉnh 2 tỷ USD lợi nhuận; mức phạt kỷ lục 10 triệu USD thời đó'],
        ['Enron, WorldCom và ít nhất 29 công ty khác', 'Đều nhận ý kiến sạch trước khi vỡ lở; tổng giá trị vốn hóa đỉnh hơn 1,8 nghìn tỷ USD']
      ] },
      { t: 'tip', x: 'Tác giả cho rằng đây không chỉ là chuyện của riêng Arthur Andersen mà là xung đột lợi ích của cả "Big Five": vừa kiểm toán vừa tư vấn cho cùng một khách hàng.' }
    ] },
    { icon: '🩹', title: 'Giải pháp của chính phủ: vá víu', blocks: [
      { t: 'p', x: 'Cựu Chủ tịch SEC Arthur Levitt từng đề nghị tách kiểm toán khỏi tư vấn nhưng Quốc hội bác bỏ. Năm 2002 Quốc hội mới thông qua đạo luật cải cách kế toán công ty đại chúng (Sarbanes-Oxley). Theo tác giả, luật này tiến một bước nhưng chưa giải quyết:' },
      { t: 'list', items: ['Chưa tách hẳn kiểm toán và tư vấn.', 'Chưa loại bỏ động cơ lớn nhất khiến CEO gian lận — quyền chọn cổ phiếu.', 'Chưa xử lý xung đột lợi ích của Phố Wall.', 'Chưa đụng tới việc thao túng quỹ hưu trí.', 'Yêu cầu CEO cam kết báo cáo là đúng chỉ là một cử chỉ, không chặn được các chiêu "hợp pháp".'] },
      { t: 'warn', x: 'Đây là đánh giá của tác giả vào cuối 2002. Về sau Mỹ tiếp tục sửa đổi quy định (ví dụ quyền chọn phải tính chi phí từ 2006), nên đừng coi nhận định này là bức tranh cuối cùng.' }
    ] }
  ],
  summary: ['Kiểm soát thực tế mới quyết định có phải hợp nhất, không chỉ tỷ lệ sở hữu.', 'Khi thị trường giảm, quỹ hưu trí doanh nghiệp từ thặng dư thành thâm hụt, làm lợi nhuận công bố giảm.', 'Kiểm toán viên cũng có xung đột lợi ích vì kiếm tiền tư vấn từ chính khách hàng.', 'Phần lớn công ty có sai phạm đều từng nhận ý kiến kiểm toán "sạch".', 'Luật mới 2002 chỉ giải quyết một phần.'],
  cards: [['Khi nào phải hợp nhất công ty con dù sở hữu ít?', 'Khi thực tế kiểm soát điều hành'], ['Thặng dư quỹ hưu trí có nghĩa là gì?', 'Tài sản quỹ lớn hơn nghĩa vụ trả lương hưu'], ['Vì sao quỹ hưu trí doanh nghiệp hụt sau 2000?', 'Thị trường chứng khoán giảm làm tài sản quỹ giảm'], ['Giả định thường bị thổi phồng trong quỹ hưu trí?', 'Hồi phục ngay, tăng trưởng đều, lợi suất cao'], ['Xung đột lợi ích của Big Five?', 'Vừa kiểm toán vừa tư vấn cho cùng một khách hàng'], ['Waste Management giấu bao nhiêu chi phí?', 'Khoảng 1,7 tỷ USD (1992–1997)'], ['Đạo luật 2002 gọi tắt là gì?', 'Sarbanes-Oxley'], ['Điều luật 2002 chưa làm (theo tác giả)?', 'Tách kiểm toán–tư vấn, bỏ quyền chọn cổ phiếu, xử lý quỹ hưu trí']],
  quiz: [
    { q: 'Công ty chỉ sở hữu 1% nhưng kiểm soát điều hành thì:', o: ['Không cần hợp nhất', 'Phải hợp nhất', 'Chỉ cần ghi chú', 'Được hoãn'], a: 1, e: 'Kiểm soát thực tế quyết định.' },
    { q: 'GM năm 2001 so với 1999 ở quỹ hưu trí:', o: ['Vẫn thặng dư', 'Từ thặng dư sang thâm hụt lớn', 'Không đổi', 'Tăng thặng dư'], a: 1, e: '+4,5 tỷ → −12,6 tỷ USD.' },
    { q: 'Kiểm toán viên của UCBS sau khi phát hiện vấn đề đã:', o: ['Công bố ngay', 'Viết ghi nhớ nội bộ và vẫn xác nhận báo cáo', 'Từ chức', 'Báo cảnh sát'], a: 1, e: 'Cùng che đậy.' },
    { q: 'Vì sao nói nhiều công ty "nhận ý kiến sạch" rồi vỡ lở?', o: ['Kiểm toán luôn đúng', 'Kiểm toán không phát hiện/không báo động', 'Do thiên tai', 'Do thuế'], a: 1, e: 'Enron, WorldCom...' },
    { q: 'Điều Sarbanes-Oxley KHÔNG xử lý (theo tác giả):', o: ['Cam kết của CEO', 'Quyền chọn cổ phiếu là động cơ gian lận', 'Chế tài kế toán', 'Báo cáo'], a: 1, e: 'Quyền chọn vẫn là động cơ.' }
  ],
  match: [['Hợp nhất', 'Gộp báo cáo công ty con'], ['Thâm hụt quỹ hưu trí', 'Tài sản nhỏ hơn nghĩa vụ'], ['Big Five', 'Năm hãng kiểm toán lớn'], ['Ý kiến sạch', 'Xác nhận báo cáo trung thực'], ['SOX', 'Luật cải cách kế toán 2002']]
});
