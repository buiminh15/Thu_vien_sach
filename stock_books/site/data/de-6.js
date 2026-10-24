window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 6,
  title: 'Mạch đảo chiều quay động cơ ba pha bằng khởi động từ kép',
  intro: 'Muốn đảo chiều động cơ ba pha chỉ cần đổi chỗ hai trong ba pha. Mạch dùng hai công tắc tơ (thuận và ngược) với khóa liên động cơ và điện để không bao giờ đóng cả hai cùng lúc — nếu không sẽ ngắn mạch hai pha.',
  sections: [
    { icon: '🔀', title: 'Ý tưởng: đảo hai pha, liên động hai lớp', blocks: [
      { t: 'p', x: 'Công tắc tơ thuận (KT) nối A–B–C vào động cơ; công tắc tơ ngược (KN) <b>đảo chéo hai trong ba pha</b>. Đóng đồng thời cả hai sẽ nối hai pha với nhau → ngắn mạch. Vì thế có hai lớp liên động:' },
      { t: 'list', items: ['<b>Liên động cơ (nút ấn kép):</b> ấn MT thì DT (tiếp điểm thường đóng của cùng nút) mở, không cho cuộn KN có điện; ấn MN thì DN mở, không cho KT có điện.', '<b>Liên động điện (tiếp điểm phụ thường đóng):</b> khi KT có điện, KT3 mở nên KN không thể có điện; ngược lại KN3 mở khi KN có điện.'] },
      { t: 'key', x: 'Hai lớp bảo vệ độc lập: nếu một lớp hỏng (tiếp điểm hàn dính, nút kẹt), lớp còn lại vẫn ngăn đóng đồng thời hai công tắc tơ.' }
    ] },
    { icon: '⚙️', title: 'Nguyên lý hoạt động', blocks: [
      { t: 'steps', items: ['Đóng các ATM cấp nguồn.', '<b>Quay thuận:</b> ấn MT → KT có điện → KT2 tự duy trì, KT1 đóng động lực → động cơ quay thuận; DT mở và KT3 mở khóa liên động; KT4 đóng, đèn xanh sáng.', '<b>Chuyển sang quay ngược:</b> ấn MN → DN mở cắt cuộn KT, KT1/KT2 mở, KT3 đóng lại → KN có điện, KN2 tự duy trì, KN1 đóng đảo chéo hai pha → quay ngược; KN3 mở khóa liên động; KN4 đóng, đèn vàng sáng.', 'Ấn D để dừng. Khi cả KT và KN không có điện: đèn đỏ sáng.', 'Bảo vệ: ATM1 ngắn mạch động lực; ATM2, ATM3 mạch điều khiển; RN quá tải hoặc mất pha.'] },
      { t: 'widget', name: 'de-fwd-rev', title: 'Mô phỏng đảo chiều có liên động (thử bấm cả hai nút)' },
      { t: 'tip', x: 'Trong bài thực hành thật nên bấm dừng trước khi đổi chiều với động cơ công suất lớn, chờ rôto giảm tốc để tránh dòng đảo chiều lớn.' }
    ] },
    { icon: '🧮', title: 'Tính chọn và dự trù vật tư', blocks: [
      { t: 'p', x: 'Cách tính giống bài 5. Ví dụ động cơ 1,1 kW – 380 V: Iđm ≈ 2,5 A; ATM ba pha 20 A–500 V; đặt rơ le nhiệt 8 A; ATM mạch điều khiển 10 A–500 V (Icd = 0,38 A). Vật tư: khởi động từ kép (2 công tắc tơ + 1 rơ le nhiệt) 60 A–600 V, 3 nút ấn, 3 đèn báo (xanh, vàng, đỏ), dây PVC 1×1,5 và 1×2,5 mm², đầu cốt, dây thít, băng cách điện.' },
      { t: 'widget', name: 'de-select', title: 'Tính chọn thiết bị cho động cơ đảo chiều' },
      { t: 'warn', x: 'Nếu cuộn dây công tắc tơ là 220 V, mạch điều khiển lấy giữa một pha và trung tính; phải chọn đúng điện áp cuộn dây, nếu không cuộn có thể cháy hoặc không hút.' }
    ] }
  ],
  summary: ['Đảo chiều = đổi chỗ hai pha bằng công tắc tơ ngược.', 'Liên động cơ (nút ấn kép) và liên động điện (tiếp điểm thường đóng) ngăn đóng cả hai công tắc tơ.', 'Đèn báo: xanh thuận, vàng ngược, đỏ dừng.'],
  cards: [['Đảo chiều động cơ 3 pha?', 'Đổi hai trong ba pha'], ['Hậu quả đóng cả KT và KN?', 'Ngắn mạch hai pha'], ['Liên động cơ?', 'Nút ấn kép'], ['Liên động điện?', 'Tiếp điểm phụ thường đóng chéo'], ['KT là?', 'Công tắc tơ thuận'], ['KN là?', 'Công tắc tơ ngược'], ['Đèn vàng báo?', 'Quay ngược (theo sơ đồ)'], ['ATM2, ATM3?', 'Bảo vệ mạch điều khiển']],
  quiz: [
    { q: 'Điều gì xảy ra nếu KT và KN cùng đóng?', o: ['Động cơ quay nhanh', 'Ngắn mạch hai pha', 'Rơ le nhiệt tác động', 'Không có gì'], a: 1, e: 'Short circuit.' },
    { q: 'Liên động điện dùng:', o: ['Tiếp điểm phụ thường đóng', 'Tiếp điểm chính', 'Nút ấn kép', 'Rơ le nhiệt'], a: 0, e: 'KT3, KN3.' },
    { q: 'Khi ấn MT, tiếp điểm DT:', o: ['Đóng', 'Mở', 'Không đổi', 'Hỏng'], a: 1, e: 'Liên động cơ.' },
    { q: 'Đèn đỏ sáng khi:', o: ['Quay thuận', 'Quay ngược', 'Cả hai công tắc tơ không có điện', 'Quá tải'], a: 2, e: 'Dừng.' }
  ],
  match: [['KT', 'Thuận'], ['KN', 'Ngược'], ['MT/DT', 'Nút ấn kép thuận'], ['Liên động', 'Chống đóng đồng thời'], ['Đảo pha', 'Đổi chiều quay']]
});
