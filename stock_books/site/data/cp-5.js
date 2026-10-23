window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 5,
  title: 'Bộ đồ vệ sinh du lịch 17.000 USD',
  intro: 'Những vụ bê bối năm 2002 đẩy CEO của UCBS vào cơn mất ngủ: bạn bè bị còng tay, ông lo cho con gái và sự nghiệp. Chương này vừa là bức tranh về giới lãnh đạo tham lam, vừa là cuộc giằng co giữa nợ nần và giảm phát.',
  sections: [
    { icon: '📰', title: 'Hàng loạt tin xấu', blocks: [
      { t: 'p', x: 'Johnston mất ngủ vì cuộc gọi của con gái hỏi về tin đồn. Ông xem các tin: WorldCom công bố đã làm tăng dòng tiền hơn 3,8 tỷ USD trong năm quý (SEC gọi là "bất thường chưa từng có"); các lãnh đạo bị bắt; Tyco bị cáo buộc chi tiêu xa xỉ cho giám đốc. Các ví dụ trong sách: bán cổ phiếu của lãnh đạo WorldCom thu hàng chục đến hàng trăm triệu USD khi giá đang rơi.' },
      { t: 'table', head: ['Vụ việc (theo sách)', 'Cáo buộc'], rows: [['Enron', 'Kế toán sai phạm, đối tác "ma", rửa tiền'], ['WorldCom', 'Gian lận kế toán và chứng khoán; thổi phồng chi phí/dòng tiền'], ['Adelphia', 'Sai phạm kế toán, đối tác gian lận'], ['Tyco', 'Trốn thuế, lấy tiền công ty, giả mạo hồ sơ'], ['ImClone, Martha Stewart', 'Giao dịch nội gián, cản trở công lý'], ['Arthur Andersen', 'Cản trở công lý (bị kết án)']] },
      { t: 'p', x: 'Vụ Tyco được tác giả dùng làm biểu tượng: danh sách mua sắm bằng tiền công ty gồm bộ đồ vệ sinh du lịch 17.000 USD, giá để ô cho chó 15.000 USD, rèm tắm 6.000 USD, thùng rác mạ vàng 1.650 USD... Những món lặt vặt đó gây phẫn nộ vì tiền là của cổ đông.' },
      { t: 'warn', x: 'Tên và số liệu ở đây là các cáo buộc/sự kiện được báo chí đưa tin đến cuối 2002; một số đã có phán quyết sau này (ví dụ Tyco, WorldCom, Enron). Hãy tra nguồn đáng tin nếu cần chi tiết pháp lý.' }
    ] },
    { icon: '💔', title: 'Hối hận của CEO', blocks: [
      { t: 'p', x: 'Biết con gái và con rể đã mất khoảng 75% số tiền 80.000 USD đầu tư vào UCBS và mất nặng ở cổ phiếu viễn thông khác, Johnston sụp đổ. Ông đi qua các giai đoạn như người cai rượu: chối bỏ, thừa nhận lỗi, rồi chuyển cảm xúc thành hành động.' },
      { t: 'list', items: ['Ông tham dự một cuộc họp của Ủy ban Niềm tin công chúng và Doanh nghiệp tư nhân, nơi Warren Buffett và Paul Volcker đề xuất cải cách: công bố giao dịch bán cổ phiếu của lãnh đạo, quyền chọn phải tính vào chi phí, cổ đông phải duyệt khi định giá lại quyền chọn, kéo dài thời gian cấm bán cổ phiếu.', 'Quá muộn để cứu UCBS nhưng chưa muộn để cứu danh tiếng cá nhân.'] }
    ] },
    { icon: '🌪️', title: 'Nợ nần gặp giảm phát', blocks: [
      { t: 'key', x: 'UCBS bị kẹp giữa hai lực: <b>nợ đến hạn</b> (gần 1 tỷ USD trong năm) và <b>giảm phát</b> (giá bán sản phẩm giảm, doanh thu biến mất). Riêng nợ hoặc riêng giảm phát thì có thể sống sót; hai thứ cùng lúc thì không.' },
      { t: 'table', head: ['Mảng', 'Tình hình (theo nhân vật trong sách)'], rows: [
        ['PC', 'Khảo sát Goldman Sachs: hơn một nửa giám đốc CNTT dự định chi ít hơn ngân sách đã cắt; chỉ 8% nâng cấp máy; doanh số giảm năm quý liên tiếp'],
        ['Viễn thông', 'Ít nhất 82 công ty viễn thông phá sản trong 2000–2002; chi quá nhiều, vay quá nhiều, có cả gian lận'],
        ['Di động 3G', 'Châu Âu chi 260 tỷ USD, Mỹ khoảng 1.000 tỷ USD cho giấy phép tần số, lợi nhuận bằng 0'],
        ['Di động thường', 'Thừa nhà sản xuất, nhà mạng, mạng chồng chéo; chi đầu tư giảm >20% quý 1/2002']
      ] },
      { t: 'widget', name: 'cp-vise', title: 'Nợ đến hạn + doanh thu giảm: công ty còn trụ được không?' },
      { t: 'p', x: 'Câu hỏi chốt của phó giám đốc kinh doanh: nếu bây giờ, giữa "phục hồi", đã khó thế này, thì chuyện gì xảy ra nếu một cuộc suy thoái trung bình hoặc nặng ập tới?' }
    ] },
    { icon: '🧹', title: 'Dọn nhà và từ chức', blocks: [
      { t: 'steps', items: ['Gọi cả cố vấn lẫn kiểm toán viên vào cùng một cuộc họp (điều chưa từng làm) và yêu cầu rà soát toàn bộ vùng xám: lương thưởng, quyền chọn, công ty con, quỹ hưu trí, phái sinh.', 'Mở họp báo công khai với các phân tích viên, kể thẳng từng sai phạm và cách sửa. Một chuyên gia ví cuộc họp như phòng xưng tội; cổ phiếu lao dốc nhưng thông tin được làm rõ.', 'Lập lộ trình tháo gỡ phái sinh, bán hoặc hợp nhất công ty con.', 'Cuối cùng: từ chức.'] }
    ] }
  ],
  summary: ['Làn sóng bê bối 2002 khiến nhiều lãnh đạo bị truy tố.', 'Chi tiêu xa xỉ bằng tiền công ty (Tyco) trở thành biểu tượng của lạm quyền.', 'Nợ đến hạn kết hợp giảm phát là tổ hợp nguy hiểm nhất cho một công ty.', 'Công bố đầy đủ, dù đau, thường tốt hơn che giấu.', 'Cải cách đề xuất: tính quyền chọn thành chi phí, công bố giao dịch bán cổ phiếu nội bộ.'],
  cards: [['"Giảm phát" là gì (theo ngữ cảnh chương)?', 'Giá bán và doanh thu giảm'], ['Vì sao nợ + giảm phát nguy hiểm?', 'Doanh thu để trả nợ biến mất đúng lúc nợ đến hạn'], ['Giấy phép 3G đắt thế nào?', 'Châu Âu 260 tỷ USD, Mỹ khoảng 1.000 tỷ USD, lợi nhuận bằng 0'], ['Biểu tượng tiêu xài của Tyco?', 'Bộ đồ vệ sinh du lịch 17.000 USD'], ['Buffett đề xuất gì?', 'Tính quyền chọn cổ phiếu thành chi phí; không cấp quyền chọn'], ['Bước đầu tiên của CEO sau khi tỉnh ngộ?', 'Rà soát toàn bộ vùng xám kế toán'], ['Kết cục của CEO UCBS?', 'Từ chức; không cứu được công ty']],
  quiz: [
    { q: 'Hai lực khiến UCBS lâm nguy:', o: ['Thuế và lạm phát', 'Nợ đến hạn và giảm phát', 'Lãi suất và tỷ giá', 'Bán hàng và marketing'], a: 1, e: 'Debts and deflation.' },
    { q: 'Số công ty viễn thông phá sản 2000–2002 (theo sách):', o: ['Ít nhất 8', 'Ít nhất 82', 'Ít nhất 820', 'Không có'], a: 1, e: 'Ít nhất 82.' },
    { q: 'Cuộc họp báo của CEO có đặc điểm:', o: ['Che giấu', 'Công khai thừa nhận từng sai phạm', 'Chỉ cho báo chí địa phương', 'Không có số liệu'], a: 1, e: 'Công khai theo quy định SEC mới.' },
    { q: 'Cải cách mà Buffett và Volcker đề xuất KHÔNG gồm:', o: ['Quyền chọn tính chi phí', 'Cổ đông duyệt khi định giá lại quyền chọn', 'Cấm mọi công ty niêm yết', 'Kéo dài thời gian cấm bán cổ phiếu'], a: 2, e: 'Không có đề xuất đó.' }
  ],
  match: [['3G', 'Giấy phép tần số đắt đỏ'], ['Giảm phát', 'Giá và doanh thu giảm'], ['Nợ đến hạn', 'Phải trả trong năm'], ['Tyco', 'Chi tiêu xa xỉ'], ['Họp báo công khai', 'Cách làm sạch thông tin']]
});
