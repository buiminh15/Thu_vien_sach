window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 13,
  title: 'Những rủi ro ẩn',
  intro: 'Tamara dành 60 ngày thu thập thông tin và tập trung vào phái sinh. Chương này giải thích rủi ro của chúng qua vụ LTCM, các con số của các ngân hàng lớn và hai kịch bản xấu nhất do cô đề ra: "Ngắn nhưng xấu" và "Dài và chập chờn".',
  sections: [
    { icon: '🔍', title: 'Cách Tamara làm nghiên cứu', blocks: [
      { t: 'p', x: 'Cô giao ba trợ lý đi tìm hiểu các cuộc khủng hoảng đầu thế kỷ 20, gặp nhân viên các ủy ban ngân hàng của Quốc hội và phỏng vấn kín chuyên gia thị trường, luôn hỏi cùng một câu: <b>điều tồi tệ nhất có thể xảy ra là gì?</b> Bản thân cô nghiên cứu phái sinh, bắt đầu từ báo cáo năm 1994 của GAO (Văn phòng Kế toán Chính phủ Mỹ) cảnh báo về rủi ro hệ thống của phái sinh tài chính.' },
      { t: 'tip', x: 'Một chuyên gia GAO nhắc: phân tích rủi ro không phải dự đoán, mà là trả lời các câu hỏi "nếu... thì sao?" mà hầu hết mọi người ngại hỏi — nền tảng của kế hoạch dự phòng hợp lý.' }
    ] },
    { icon: '🎰', title: 'Long Term Capital Management (1998)', blocks: [
      { t: 'p', x: 'LTCM là quỹ phòng hộ lớn, nằm ở nước ngoài, không được bảo hiểm, phục vụ nhà đầu tư giàu có. Chiến lược đơn giản hóa trong sách:' },
      { t: 'steps', items: ['Mua trái phiếu rủi ro (như trái phiếu Nga).', 'Đồng thời bán khống trái phiếu chính phủ Mỹ (vay của các ngân hàng như Morgan, rồi bán) để "cân bằng" rủi ro.', 'Đặt cược chênh lệch lợi suất giữa hai loại sẽ không vượt mức lịch sử.', 'Nga vỡ nợ → trái phiếu Nga rơi như thiên thạch, trái phiếu Mỹ không giảm đủ để bù → LTCM không còn tiền mua trái phiếu Mỹ trả lại ngân hàng.', 'Mất mát lan sang hàng chục đối tác khác, và đến lượt họ cũng không trả được đối tác của mình: phản ứng dây chuyền như hạt nhân, không chỉ như domino.'] },
      { t: 'widget', name: 'cp-ltcm', title: 'Mô phỏng LTCM: chênh lệch lợi suất nới rộng gây lỗ bao nhiêu?' },
      { t: 'p', x: 'Theo sách, Cục Dự trữ Liên bang New York đã dàn xếp cứu trợ vì các nhân vật chủ chốt của LTCM có quan hệ rộng (trong đó có một cựu quan chức Fed), dù chính thức không thừa nhận dùng tiền thuế. Vấn đề: còn hàng nghìn tổ chức có thể cần cứu trợ nhưng không có quan hệ tương tự; còn nhà chức trách thì không biết ai nắm phái sinh ở đâu.' }
    ] },
    { icon: '⚠️', title: 'Chuỗi sự kiện bất ngờ sau năm 1994', blocks: [
      { t: 'list', items: ['1997: Thái Lan; 1998: Nga vỡ nợ, LTCM sụp đổ; cuối 2001: Argentina vỡ nợ lớn nhất lịch sử rồi phá giá tiền tệ; 9/2001: vụ tấn công 11/9.', 'Bài học: cần tập "chờ đợi điều bất ngờ".', 'Enron: theo chuyên gia GAO, nguyên nhân gốc của sụp đổ không chỉ là gian lận kế toán mà còn là các vị thế phái sinh năng lượng (dầu, khí, điện) thua lỗ.'] },
      { t: 'key', x: 'Về bản chất, <b>phái sinh là nghĩa vụ — một dạng nợ</b>. Mà thể chế quá nhiều nợ thì dễ rơi vào chu kỳ: bong bóng (tăng quá nhanh, vay nhiều, tiêu hết) → cây kim chọc thủng (lộ gian lận, kiện tụng, doanh số giảm).' },
      { t: 'table', head: ['Dữ liệu từ OCC (quý 2/2002, theo sách)', 'Giá trị'], rows: [['Tổng phái sinh trong danh mục các ngân hàng thương mại Mỹ', '50,1 nghìn tỷ USD'], ['Phần tập trung ở 7 ngân hàng lớn nhất', '96%'], ['Phần không nằm trên sàn được quản lý', '90,1%'], ['Mức rủi ro phái sinh so với vốn: J.P. Morgan Chase', '589%'], ['Citibank', '199%'], ['Bank of America', '169%']] },
      { t: 'widget', name: 'cp-capital-risk', title: 'Rủi ro phái sinh gấp bao nhiêu lần vốn? Cần lỗ bao nhiêu % để xóa vốn?' },
      { t: 'warn', x: 'Con số 50 nghìn tỷ USD là <b>giá trị danh nghĩa</b>, không phải số tiền có thể mất; chính Tamara cũng thừa nhận nó phóng đại rủi ro. Mức rủi ro thực nằm ở chỉ số "rủi ro tín dụng trên vốn" (ví dụ 589%). Tình hình hiện nay (quy định bù trừ trung tâm, vốn ngân hàng...) đã khác nhiều so với 2002.' },
      { t: 'p', x: 'Bản ghi nhớ cuối chương nêu: từ 23/5/2002 đến 9/10/2002, cổ phiếu J.P. Morgan Chase giảm từ 38,66 xuống 15,26 USD (mất 60,5% giá trị, 46 tỷ USD) trong 139 ngày; Deutsche Bank cũng giảm sâu; Mizuho (ngân hàng lớn nhất Nhật) bị nhiều nhà phân tích coi là đã mất khả năng thanh toán. Tamara kết luận: bong bóng lớn nhất là cả nền kinh tế toàn cầu, chiếc kim là cuộc suy thoái chưa kết thúc.' }
    ] },
    { icon: '🧭', title: 'Hai kịch bản xấu nhất', blocks: [
      { t: 'table', head: ['', 'Kịch bản A: Ngắn nhưng xấu', 'Kịch bản B: Dài và chập chờn'], rows: [
        ['Chính sách', 'Không can thiệp nhiều: không cứu trợ, không mua cổ phiếu, không bơm tiền ồ ạt; tập trung cải cách cấu trúc; công khai và trung thực', 'Can thiệp mạnh và liên tục: cứu ngân hàng, mua cổ phiếu/trái phiếu, bơm tiền, giảm thuế bừa bãi, kiểm soát hối đoái; trì hoãn cải cách; che giấu thông tin'],
        ['Hậu quả', 'Phá sản lan rộng, kinh tế đình trệ tạm thời; chứng khoán Mỹ giảm tương đương 1929–32; suy thoái 3–5 năm, thất nghiệp >10%; có thể cần kỳ nghỉ ngân hàng 1–2 tuần', 'Giảm kéo dài nhiều năm, nhiều đợt hồi giả tạo, tiền tiết kiệm bị bào mòn; kết thúc chứng khoán ở mức tương tự A; nhưng GDP và năng suất tổn thương sâu hơn'],
        ['Cảm nhận', 'Đau nhưng ngắn, rồi hồi phục lành mạnh', 'Đau ít hơn lúc đầu nhưng kéo dài, hậu quả xã hội và chính trị rộng; có thể hàng thập kỷ chậm trễ']
      ] },
      { t: 'p', x: 'Oliver Dulles giật mình: ở cả hai kịch bản chứng khoán đều giảm gần 90%, Dow xuống quanh 1.000, và có thể phải đóng cửa ngân hàng/thị trường. Ông yêu cầu một kịch bản <i>hợp lý</i> chứ không phải thảm họa tối đa — phần tiếp theo của sách sẽ xoay quanh việc đó.' },
      { t: 'warn', x: 'Đây là kịch bản giả định do nhân vật hư cấu soạn, mang tính cảnh báo. Ba thập kỷ qua cho thấy các kịch bản thực tế (2008–09, 2020) diễn ra khác: chính phủ can thiệp rất mạnh và chứng khoán phục hồi nhanh hơn kịch bản "Dow 1.000".' }
    ] }
  ],
  summary: ['Phái sinh là nghĩa vụ, một dạng nợ; tập trung và ngoài sàn khiến rủi ro hệ thống.', 'LTCM cho thấy vỡ nợ của một tổ chức có thể lan dây chuyền; Fed phải can thiệp.', 'Giá trị danh nghĩa phái sinh rất lớn nhưng rủi ro thực đo bằng tỷ lệ so với vốn.', 'Bong bóng là cả nền kinh tế toàn cầu; cây kim là suy thoái chưa kết thúc.', 'Hai kịch bản xấu nhất: ngắn nhưng xấu (ít can thiệp) và dài chập chờn (can thiệp liên tục).'],
  cards: [['Phái sinh là gì (theo Tamara)?', 'Nghĩa vụ, một dạng nợ'], ['LTCM đặt cược gì?', 'Chênh lệch lợi suất giữa trái phiếu rủi ro (Nga) và trái phiếu Mỹ sẽ không nới rộng'], ['Điều gì khiến LTCM thất bại?', 'Nga vỡ nợ làm chênh lệch nới rộng mạnh'], ['Phản ứng dây chuyền hạt nhân nghĩa là?', 'Vỡ nợ của một bên kéo theo vỡ nợ hàng loạt đối tác'], ['Tổng phái sinh trong ngân hàng Mỹ (OCC 2002)?', '50,1 nghìn tỷ USD'], ['Tỷ lệ phái sinh tập trung ở 7 ngân hàng lớn?', '96%'], ['Rủi ro phái sinh J.P. Morgan so với vốn?', '589%'], ['Kịch bản A khác kịch bản B ở?', 'Mức can thiệp của chính phủ'], ['Cổ phiếu J.P. Morgan giảm bao nhiêu trong 139 ngày 2002?', '60,5% (46 tỷ USD)']],
  quiz: [
    { q: 'Rủi ro phái sinh bằng 589% vốn: cần mất bao nhiêu để xóa vốn?', o: ['5,89%', 'Khoảng 17%', '58,9%', '100%'], a: 1, e: '100/5,89 ≈ 17%.' },
    { q: 'Vì sao LTCM bị lỗ nặng?', o: ['Nga vỡ nợ làm chênh lệch lợi suất nới rộng', 'Thuế tăng', 'Lãi suất bằng 0', 'Giá vàng giảm'], a: 0, e: 'Cược chênh lệch thu hẹp bị sai.' },
    { q: 'Kịch bản "Ngắn nhưng xấu" ứng với chính sách:', o: ['Can thiệp liên tục', 'Ít can thiệp, cải cách cấu trúc, công khai', 'Che giấu thông tin', 'In tiền vô hạn'], a: 1, e: 'Scenario A.' },
    { q: 'Nhận xét đúng về con số 50 nghìn tỷ USD:', o: ['Là số tiền sẽ mất', 'Là giá trị danh nghĩa, phóng đại rủi ro', 'Là GDP thế giới', 'Là nợ chính phủ'], a: 1, e: 'Rủi ro thực nhỏ hơn.' },
    { q: 'Cả hai kịch bản đều có điểm chung:', o: ['Chứng khoán giảm gần 90%', 'Chứng khoán tăng', 'Không có thất nghiệp', 'Không có đóng cửa ngân hàng'], a: 0, e: 'Tương đương 1929–32.' }
  ],
  match: [['GAO', 'Văn phòng Kế toán Chính phủ Mỹ'], ['OCC', 'Cơ quan quản lý ngân hàng quốc gia Mỹ'], ['Kịch bản A', 'Ngắn nhưng xấu'], ['Kịch bản B', 'Dài và chập chờn'], ['Danh nghĩa', 'Giá trị hợp đồng, không phải tiền mất']]
});
