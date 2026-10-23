window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 8,
  title: 'Thâm hụt ngân sách phình to',
  intro: 'Johnston lập một ủy ban vận động cải cách kế toán doanh nghiệp. Kế toán viên Oliver Dulles chỉ ra: thủ thuật của chính phủ liên bang còn lớn hơn thủ thuật của UCBS. Chương này nói về cách "thặng dư" ngân sách chính thức khác xa số tiền chính phủ thực sự phải đi vay.',
  sections: [
    { icon: '🏛️', title: 'Ủy ban cải cách kế toán', blocks: [
      { t: 'p', x: 'Johnston thành lập một nhóm phi lợi nhuận ở Washington, thuê chuyên gia kế toán pháp y và phát ngôn viên; Dulles — người từng cố vấn thủ thuật — xin gia nhập, và mang theo một nghiên cứu về kế toán ngân sách liên bang.' }
    ] },
    { icon: '🧾', title: 'Thặng dư giả, thâm hụt thật', blocks: [
      { t: 'p', x: 'Theo Bộ Tài chính (số liệu tác giả trích), năm 2000 có thặng dư 236 tỷ USD, năm 2001 thặng dư 127 tỷ USD. Nhưng theo thống kê vay nợ của Cục Dự trữ Liên bang (Flow of Funds), chính phủ và các cơ quan liên bang thực tế vay thêm 137,6 tỷ USD năm 2000, 623,8 tỷ USD năm 2001, và với tốc độ quy năm là 731,8 tỷ USD (quý 1/2002) và 948,4 tỷ USD (quý 2/2002).' },
      { t: 'table', head: ['Năm', '"Thặng dư" chính thức (tỷ USD)', 'Vay thực tế (tỷ USD)'], rows: [['2000', '+236', '137,6 (thâm hụt)'], ['2001', '+127', '623,8 (thâm hụt)'], ['Quý 1/2002 (quy năm)', '—', '731,8'], ['Quý 2/2002 (quy năm)', '—', '948,4']] },
      { t: 'widget', name: 'cp-deficit', title: 'Thặng dư công bố và vay thực tế: chênh lệch bao nhiêu?' },
      { t: 'h3', x: 'Hai thủ thuật chính (theo sách)' },
      { t: 'list', items: ['<b>Cơ quan liên bang không hợp nhất</b> (Federal Home Loan Bank, Freddie Mac, Sallie Mae...): do Quốc hội kiểm soát, có bảo lãnh/tài trợ của chính phủ, nợ vẫn được phân loại là chứng khoán chính phủ, nhưng sổ sách không hợp nhất vào ngân sách → giống "công ty con ngoài sổ" của UCBS.', '<b>Quỹ An sinh xã hội</b>: thặng dư của quỹ (dùng để chi cho lương hưu tương lai của hàng chục triệu người) được cộng vào ngân sách chung để che thâm hụt → giống thủ thuật quỹ hưu trí.'] },
      { t: 'warn', x: 'Đây là cách đọc của tác giả năm 2002. Cách tính "ngân sách hợp nhất" và "thâm hụt thực tế" có nhiều quan điểm khác nhau; đây không phải kết luận học thuật thống nhất. Số liệu hiện nay khác nhiều so với thời điểm đó.' }
    ] },
    { icon: '4️⃣', title: 'Vì sao thủ thuật của chính phủ nguy hiểm hơn?', blocks: [
      { t: 'steps', items: ['<b>Quy mô lớn hơn nhiều:</b> thủ thuật với cơ quan liên bang và quỹ An sinh lên tới khoảng 2.000 tỷ USD kể từ 2000, ảnh hưởng 45 triệu người; so với thủ thuật của UCBS cỡ 1–1,5 tỷ USD và 40.000 nhân viên.', '<b>Là tiền thật:</b> quỹ hưu trí doanh nghiệp chỉ bị "dịch số liệu", còn chính phủ thực sự dùng tiền An sinh xã hội để chi tiêu.', '<b>Chính phủ cũng hưởng lợi từ bong bóng:</b> thuế thu nhập doanh nghiệp tăng (204 tỷ 1998, 213 tỷ 1999, 224 tỷ 2000), nên không muốn làm vỡ tiệc; kinh tế gia chính phủ tin cuộc chơi sẽ không dừng.', '<b>Thế giới làm ngơ:</b> khi UCBS thú nhận, nhà đầu tư phản ứng ngay và vấn đề đã được định giá; còn với thâm hụt liên bang, thị trường gần như không phản ứng ("chuyện cũ, chẳng ảnh hưởng thị trường trái phiếu"). Đó là tâm lý bong bóng kiểu mới — bong bóng trái phiếu.'] },
      { t: 'key', x: 'Khi chính phủ vay quá nhiều, trái phiếu phải trả lãi cao hơn để có người mua. Lãi suất tăng làm giá trái phiếu cũ giảm và kéo lãi suất thế chấp lên — đúng lúc nhiều gia đình đang nợ nặng.' },
      { t: 'tip', x: 'Câu hỏi nên đặt ra khi đọc "thặng dư/thâm hụt": con số này gồm những ai? Có quỹ nào của người khác được cộng vào? Tiền thực tế phải đi vay trong năm là bao nhiêu?' }
    ] }
  ],
  summary: ['Số "thặng dư" của Bộ Tài chính khác xa số tiền chính phủ thực tế vay.', 'Cơ quan liên bang ngoài ngân sách và quỹ An sinh xã hội bị tác giả ví như công ty con ngoài sổ và quỹ hưu trí của UCBS.', 'Chính phủ hưởng lợi từ bong bóng nên không muốn cảnh báo.', 'Thị trường làm ngơ → nguy cơ bong bóng trái phiếu.', 'Thâm hụt lớn đẩy lãi suất lên, trái phiếu giảm giá, gia đình nợ nhiều bị ảnh hưởng.'],
  cards: [['Số liệu nào cho thấy vay thực tế của chính phủ?', 'Bảng vay nợ tín dụng (Flow of Funds) của Cục Dự trữ Liên bang'], ['Vì sao thủ thuật cơ quan liên bang giống công ty con của UCBS?', 'Nợ được tách khỏi sổ chính nhưng vẫn do chính phủ bảo lãnh'], ['Thủ thuật quỹ An sinh xã hội?', 'Thặng dư của quỹ cộng vào ngân sách chung che thâm hụt'], ['Vay quy năm quý 2/2002 theo sách?', '948,4 tỷ USD'], ['Vì sao chính phủ không cảnh báo bong bóng?', 'Thuế thu từ lợi nhuận phình to'], ['Tác giả gọi bong bóng nào là nguy hiểm hơn?', 'Bong bóng trái phiếu']],
  quiz: [
    { q: 'Năm 2001 thặng dư chính thức 127 tỷ USD nhưng vay thực tế:', o: ['0', '127 tỷ', '623,8 tỷ', '1.000 tỷ'], a: 2, e: 'Theo số liệu Cục Dự trữ Liên bang.' },
    { q: 'Quỹ An sinh xã hội trong thủ thuật được dùng để:', o: ['Trả nợ nước ngoài', 'Che thâm hụt ngân sách chung', 'Đầu tư vàng', 'Giảm thuế'], a: 1, e: 'Cộng thặng dư quỹ vào ngân sách chung.' },
    { q: 'Điểm khác của thủ thuật chính phủ so với quỹ hưu trí UCBS:', o: ['Nhỏ hơn', 'Chính phủ thực sự dùng tiền', 'Hợp pháp hơn', 'Không có người bị ảnh hưởng'], a: 1, e: 'Là tiền thật.' },
    { q: 'Thị trường phản ứng thế nào với số liệu thâm hụt thật (theo sách)?', o: ['Hoảng loạn', 'Gần như làm ngơ', 'Mua mạnh', 'Cấm giao dịch'], a: 1, e: 'Tâm lý bong bóng.' }
  ],
  match: [['Cơ quan liên bang', 'Ngoài ngân sách hợp nhất'], ['Flow of Funds', 'Số liệu vay thực tế'], ['An sinh xã hội', 'Quỹ lương hưu'], ['Bong bóng trái phiếu', 'Rủi ro lãi suất tăng'], ['Thuế doanh nghiệp', 'Tăng mạnh thập niên 1990']]
});
