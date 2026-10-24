window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 7,
  title: 'Thị trường trầm lắng và cơ hội của nó',
  intro: 'Nhiều người coi thị trường trầm lắng là vấn đề, Wyckoff coi nó là cơ hội. Chương này giải thích vì sao thị trường lặng đi, cách nhận biết hướng nhịp lớn tiếp theo, và cách tận dụng cổ phiếu hoạt động tạm thời trong lúc phần còn lại ngủ.',
  sections: [
    { icon: '🕰️', title: 'Vì sao thị trường trầm lắng?', blocks: [
      { t: 'p', x: 'Người ta nói "tay tôi bị trói": không thoát được, mà có vào lại cũng không kiếm được. Wyckoff gọi họ là "người ngồi" (sitters), không phải người đọc băng. Trầm lắng nghĩa là các lực kéo lên và kéo xuống tạm thời cân bằng, giống đồng hồ sắp hết cót: con lắc dao động ngày càng nhỏ rồi đứng yên.' },
      { t: 'key', x: 'Trạng thái này hay đến sau một mùa bùng nổ: ai cũng đã nạp đầy cổ phiếu ở đỉnh, không còn ai để mua; những người bị "tỉa" mất tiền lẫn can đảm; thị trường bị bỏ rơi. Như một cơn say, nó có khởi đầu, đỉnh điểm và sụp đổ, rồi cần thời gian hồi phục. Khi các yếu tố của nhịp chính đã cạn, giá "vào rãnh" trong vài tuần cho đến khi có lực mới.' },
      { t: 'tip', x: 'Khi thị trường đang di chuyển mạnh không ai biết nó sẽ đi bao xa. Khi giá đứng yên, ta biết chắc <b>sắp có một nhịp rõ rệt</b>, chỉ chưa biết chiều nào.' }
    ] },
    { icon: '🧭', title: 'Đoán hướng nhịp tiếp theo', blocks: [
      { t: 'table', head: ['Dấu hiệu trong thị trường trầm lắng', 'Nghĩa là'], rows: [
        ['Giá hồi nhưng không giữ được; không phản ứng với tin tốt', 'Yếu về kỹ thuật → nhịp kế tiếp nhiều khả năng đi xuống'],
        ['Giá cứng dần; đợt tấn công bán không làm ai bán ra nhiều; không giảm trước tin xấu', 'Mạnh → có thể sắp tăng'],
        ['"Shakeout": nội bộ rũ bỏ người khác (ví dụ Reading quanh 120)', 'Họ muốn cổ phiếu đó cho mình → thời điểm tốt để vào']
      ] },
      { t: 'widget', name: 'dt-dull-signal', title: 'Thị trường trầm lắng: mạnh hay yếu?' },
      { t: 'warn', x: 'Không ai biết khi nào thị trường lặng sẽ chuyển sang sôi động. Người đọc băng cần luôn theo dõi, không được tuyên bố "thị trường chết nên tôi nghỉ".' }
    ] },
    { icon: '📐', title: 'Giao dịch ở vùng kháng cự', blocks: [
      { t: 'p', x: 'Sách mô tả một phương pháp giao dịch dựa trên điểm kháng cự trong thị trường rất lặng: ví dụ cổ phiếu mở 181¼ gặp kháng cự 181½, rồi dip xuống 181⅛ — hai dấu hiệu nhỏ → bán khống theo thị trường với lệnh "dừng đôi" ở 181⅝–¾ (mua 200 để đóng 100 cổ phiếu bán khống và đảo sang mua). Khi giá chạm hỗ trợ mới ở 180⅛, đóng bán khống và chuyển sang mua; đặt lệnh dừng đôi ở 180 hoặc 179⅞.' },
      { t: 'widget', name: 'dt-double-stop', title: 'Lệnh dừng đôi: đóng và đảo chiều trong một lệnh' },
      { t: 'key', x: 'Tác giả <b>không khuyên</b> cách này: hoa hồng, thuế, "một phần tám vô hình" và các lần lỗ thường xuyên là bất lợi quá lớn. Cần các nhịp rộng để lãi vượt lỗ. "Thị trường luôn ở đó"; ta không bị buộc phải giao dịch, kết quả không phụ thuộc số lần giao dịch mà phụ thuộc số tiền kiếm được.' }
    ] },
    { icon: '🎯', title: 'Giao dịch cổ phiếu đang tạm hoạt động', blocks: [
      { t: 'p', x: 'Cách tốt hơn khi thị trường lặng là giao dịch cổ phiếu đang hoạt động tạm thời do thao túng hoặc lý do khác. Với người đọc băng, tên hay ngành nghề không quan trọng — miễn có tín hiệu và thị trường rộng để vào–ra.' },
      { t: 'list', items: ['Beet Sugar ngày 26/3/1909 (khi Union, Reading rất lặng): có thể mua dưới 30 và bán gần đóng cửa, hoặc giữ đến hôm sau khi chạm 33½.', 'Kansas City Southern ngày 5/3/1909: trôi giữa 42¾–43½ cả buổi sáng rồi bùng nổ khối lượng sau trưa. Khả năng cao có lệnh mua có chủ đích → "lên tàu".', 'Khi xu hướng được duy trì, có thể "kim tự tháp hóa" (pyramid): mua thêm ở 44, 45, 46, đặt lệnh dừng sát giá vốn trung bình và nâng dần để bảo vệ lãi. Ví dụ bán ở 46⅝ lãi 406,50 USD với lô 100 cổ phiếu (hoặc 2.032,50 USD với lô 50 theo cách tính của sách).'] },
      { t: 'widget', name: 'dt-pyramid', title: 'Kim tự tháp hóa vị thế: giá vốn trung bình và lãi' },
      { t: 'tip', x: 'Kim tự tháp chỉ hợp lý khi mỗi lần mua thêm nhỏ hơn và có lệnh dừng; mua thêm lớn dần là sai lầm phổ biến.' }
    ] }
  ],
  summary: ['Thị trường trầm lắng báo trước một nhịp mạnh nhưng chưa rõ chiều.', 'Sức mạnh/yếu kỹ thuật gợi ý hướng.', 'Tác giả không khuyên lướt từng phân số trong thị trường lặng.', 'Giao dịch cổ phiếu đang tạm sôi động thay vì cố ép giao dịch.'],
  cards: [['Dull market?', 'Cung cầu cân bằng, giá đi ngang'], ['Sitter?', 'Người ngồi chờ, không đọc băng'], ['Shakeout?', 'Nội bộ rũ người khác để tự mua'], ['Dấu hiệu yếu?', 'Hồi không giữ được, không phản ứng tin tốt'], ['Dấu hiệu mạnh?', 'Không giảm trước tin xấu, bán tấn công thất bại'], ['Pyramid?', 'Mua thêm khi xu hướng đi đúng, dừng lỗ sát'], ['Double stop?', 'Lệnh dừng đóng vị thế và đảo chiều'], ['Tác giả khuyên lướt fraction?', 'Không']],
  quiz: [
    { q: 'Thị trường lặng cho ta biết chắc điều gì?', o: ['Sắp có một nhịp rõ rệt', 'Sẽ tăng', 'Sẽ giảm', 'Không biết gì'], a: 0, e: 'Hướng chưa rõ.' },
    { q: 'Mua 100 ở 44, 100 ở 45, 100 ở 46. Giá vốn trung bình:', o: ['44', '45', '46', '45,5'], a: 1, e: '(44+45+46)/3.' },
    { q: 'Thị trường lặng và không phản ứng tin tốt:', o: ['Mạnh', 'Yếu', 'Không có ý nghĩa', 'Sắp tăng'], a: 1, e: 'Technically weak.' },
    { q: 'Vì sao tác giả không khuyên scalp trong thị trường lặng?', o: ['Chi phí lớn hơn lãi', 'Luật cấm', 'Không có cổ phiếu', 'Quá dễ'], a: 0, e: 'Costs.' }
  ],
  match: [['Dull market', 'Thị trường lặng'], ['Shakeout', 'Rũ người nắm giữ'], ['Pyramid', 'Mua thêm khi thắng'], ['Sitter', 'Người chờ thụ động'], ['Resistance', 'Mức giá cản']]
});
