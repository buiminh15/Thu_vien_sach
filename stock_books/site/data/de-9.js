window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 9,
  title: 'Mạch bảo vệ mất pha và hãm động cơ',
  intro: 'Bài cuối thêm hai kỹ năng: dùng rơ le điện từ (rơ le dòng, rơ le thời gian...) và thiết bị bảo vệ mất pha để cắt động cơ khi nguồn mất pha; cùng mạch hãm động năng — cắt nguồn xoay chiều rồi đưa dòng một chiều vào stator trong một thời gian đặt trước để dừng nhanh.',
  sections: [
    { icon: '🧲', title: 'Rơ le điện từ', blocks: [
      { t: 'p', x: 'Rơ le dòng điện dùng bảo vệ quá tải/ngắn mạch và điều khiển. Cấu tạo gồm nam châm điện (mạch từ, cuộn dây có thể đấu song song hoặc nối tiếp, lá thép động, lò xo phản kháng) và hệ thống tiếp điểm thường đóng, thường mở. Khi dòng qua cuộn dây vượt trị số đặt, lực hút thắng lò xo và đổi trạng thái tiếp điểm.' },
      { t: 'tip', x: 'Cùng nguyên tắc đó có các rơ le khác (điện áp, thời gian...). Rơ le thời gian trong bài dùng tiếp điểm thường đóng mở chậm: sau khi cuộn dây có điện một thời gian đặt trước, tiếp điểm mới đổi trạng thái.' }
    ] },
    { icon: '🔌', title: 'Bảo vệ mất pha', blocks: [
      { t: 'p', x: 'Thiết bị bảo vệ mất pha (RU0) giám sát ba pha nguồn. Khi mất pha, nó <b>mở tiếp điểm RU0 trong mạch điều khiển</b>, các cuộn dây công tắc tơ mất điện, tiếp điểm chính cắt nguồn khỏi động cơ.' },
      { t: 'p', x: 'Mạch là mạch đảo chiều ba pha (bài 6) có thêm RU0 nối tiếp trong mạch điều khiển; đèn xanh/vàng/đỏ báo thuận/ngược/dừng như cũ. Ngoài ra vẫn có ATM1 bảo vệ ngắn mạch động lực, ATM2/ATM3 mạch điều khiển.' },
      { t: 'widget', name: 'de-phase-loss', title: 'Mất một pha: động cơ và thiết bị bảo vệ phản ứng thế nào?' },
      { t: 'warn', x: 'Mất pha khi động cơ đang chạy làm dòng hai pha còn lại tăng mạnh và động cơ nóng rất nhanh; rơ le nhiệt phản ứng chậm nên cần thiết bị bảo vệ mất pha riêng cho động cơ quan trọng.' }
    ] },
    { icon: '🛑', title: 'Hãm động năng', blocks: [
      { t: 'p', x: 'Động cơ tắt điện vẫn quay theo quán tính. Hãm động năng đưa <b>dòng một chiều</b> (ví dụ nguồn DC 50 V) vào cuộn stator để tạo từ trường đứng yên; rôto đang quay cắt từ trường này sinh mômen hãm, động cơ dừng nhanh.' },
      { t: 'steps', items: ['Đóng các ATM; đèn đỏ sáng, động cơ chưa chạy.', 'Ấn M → K1 có điện, tự duy trì; K1 chính cấp xoay chiều cho động cơ chạy, đèn xanh sáng; tiếp điểm K1(9–11) mở, không cho rơ le thời gian RT và K2 có điện.', 'Ấn D → K1 mất điện, cắt xoay chiều; tiếp điểm K1(9–11) đóng lại → RT và K2 có điện; tiếp điểm chính K2 đóng đưa nguồn một chiều vào hãm động cơ.', 'Sau thời gian đặt trước, tiếp điểm thường đóng mở chậm RT(7–9) mở → K2 mất điện → cắt nguồn một chiều.', 'K1 và K2 đều mất điện → đèn đỏ sáng, nguồn một chiều đã cắt khỏi động cơ.'] },
      { t: 'widget', name: 'de-brake', title: 'Mô phỏng hãm động năng với rơ le thời gian' },
      { t: 'key', x: 'Thời gian hãm của rơ le thời gian phải đặt vừa đủ: quá ngắn thì động cơ chưa dừng, quá dài thì stator bị nóng vì dòng một chiều chạy lâu. Hai công tắc tơ K1 và K2 phải liên động để không bao giờ cấp xoay chiều và một chiều cùng lúc.' },
      { t: 'p', x: 'Tính chọn như các bài trước (động cơ 1,1 kW – 380 V: ATM 20 A, rơ le nhiệt 8 A, ATM điều khiển 10 A); thêm rơ le thời gian và nguồn một chiều.' }
    ] }
  ],
  summary: ['Rơ le điện từ dùng nam châm điện đổi trạng thái tiếp điểm.', 'RU0 mở tiếp điểm điều khiển khi mất pha.', 'Hãm động năng đưa DC vào stator trong thời gian đặt trước.', 'Luôn liên động giữa mạch xoay chiều và một chiều.'],
  cards: [['Rơ le dòng điện?', 'Tác động theo dòng qua cuộn dây'], ['RU0 làm gì?', 'Mở tiếp điểm điều khiển khi mất pha'], ['Hãm động năng?', 'Cấp DC vào stator để dừng nhanh'], ['Rơ le thời gian?', 'Đổi tiếp điểm sau thời gian đặt'], ['Nguồn hãm trong bài?', 'DC 50 V (ví dụ)'], ['Hậu quả mất pha khi chạy?', 'Quá dòng, nóng nhanh'], ['Hãm quá lâu gây?', 'Stator nóng'], ['K2 là?', 'Công tắc tơ hãm']],
  quiz: [
    { q: 'Hãm động năng cấp vào stator:', o: ['Xoay chiều ba pha', 'Dòng một chiều', 'Xung cao áp', 'Không cấp gì'], a: 1, e: 'DC.' },
    { q: 'Khi mất pha, RU0:', o: ['Đóng tiếp điểm', 'Mở tiếp điểm mạch điều khiển', 'Tăng dòng', 'Không đổi'], a: 1, e: 'Cắt K.' },
    { q: 'Thời gian hãm đặt quá dài gây:', o: ['Stator nóng', 'Động cơ nhanh hơn', 'Không gì', 'Tụ nổ'], a: 0, e: 'Dòng DC lâu.' },
    { q: 'Rơ le nhiệt phản ứng với mất pha:', o: ['Tức thì', 'Chậm, nên cần RU0', 'Không bao giờ', 'Nhanh hơn ATM'], a: 1, e: 'Quán tính nhiệt.' }
  ],
  match: [['RU0', 'Bảo vệ mất pha'], ['RT', 'Rơ le thời gian'], ['K2', 'Công tắc tơ hãm DC'], ['Hãm động năng', 'DC vào stator'], ['Mất pha', 'Một dây nguồn mất điện']]
});
