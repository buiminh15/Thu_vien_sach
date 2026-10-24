window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 2,
  title: 'Lắp đặt, thay thế, sửa chữa thiết bị điện gia đình',
  intro: 'Bài dài nhất giáo trình: cầu chì, cầu dao, áptômát, công tắc, ổ cắm, đèn huỳnh quang và đèn thủy ngân cao áp. Với mỗi thiết bị bạn sẽ học công dụng, cấu tạo, cách chọn, cách thay thế và những lỗi thường gặp.',
  sections: [
    { icon: '🧯', title: 'Cầu chì', blocks: [
      { t: 'p', x: 'Cầu chì bảo vệ thiết bị và lưới điện khi quá tải và ngắn mạch. Dây chảy (chì, đồng, nhôm, kẽm...) mắc nối tiếp với mạch cần bảo vệ trong vỏ kín để dập hồ quang. Nhiệt tỏa ra theo định luật Jun–Lenxơ: <b>Q = I²·R·t</b>. Khi dòng vượt dòng dây chảy Idc, dây nóng chảy và cắt mạch.' },
      { t: 'table', head: ['Loại', 'Đặc điểm'], rows: [['Cầu chì nắp xoáy', 'Tháo nắp ra là cách ly hoàn toàn với nguồn khi thay dây chảy'], ['Cầu chì ống (HP)', 'Dây chảy bằng kẽm dẹt có chỗ thu nhỏ, đặt trong ống phibơ sinh khí dập hồ quang']] },
      { t: 'h3', x: 'Nguyên tắc chọn' },
      { t: 'list', items: ['Dây chảy không đứt ở chế độ làm việc bình thường: <b>Idc ≥ Itt</b>.', 'Phải bảo vệ được dây dẫn: <b>Idc ≤ 0,8 × Icp</b> (Icp là dòng cho phép của dây).', 'Chọn lọc: dòng dây chảy cầu chì phía nguồn lớn hơn phía sau ít nhất một cấp.', 'Động cơ: <b>Itt = Imm / α</b> với Imm = Kmm × Iđm, Kmm = 5–7; α = 2,5 (mở máy nhẹ/không tải) hoặc 1,6 (mở máy có tải).', 'Chiếu sáng: Itt = Kc × n × Iđm; Kc = 1 với diện tích đến 100 m² hoặc ngoài trời, 0,8 khi lớn hơn 100 m².'] },
      { t: 'widget', name: 'de-fuse-motor', title: 'Chọn dây chảy cầu chì cho động cơ' },
      { t: 'p', x: 'Ba thông số kiểm tra: điện áp định mức cầu chì ≥ điện áp mạng; dòng định mức ≥ dòng làm việc lớn nhất; công suất cắt định mức ≥ công suất phụ tải.' }
    ] },
    { icon: '🔪', title: 'Cầu dao', blocks: [
      { t: 'p', x: 'Cầu dao đóng cắt mạch bằng tay, điện áp tới 500 V, dòng định mức có thể tới 2 kA. Phần chính gồm lưỡi dao (tiếp điểm động) và má kẹp (tiếp điểm tĩnh) bằng hợp kim đồng. Loại dòng lớn có <b>lưỡi dao phụ với lò xo bật nhanh</b> để kéo dài và dập tắt hồ quang nhanh.' },
      { t: 'tip', x: 'Thao tác đóng cắt cầu dao phải <b>dứt khoát</b>: tốc độ lưỡi dao càng nhanh, hồ quang tắt càng nhanh. Khi thay: hướng bật (ON) về phía đầu ra thiết bị, hướng tắt về phía nguồn; quấn băng dính cách điện vào đầu dây nguồn khi tháo.' },
      { t: 'list', items: ['Kiểm tra hành trình đóng cắt trơn chu, tay nắm chắc chắn, vỏ cách điện tốt.', 'Kiểm tra má dao không cong vênh, cháy rỗ; lò xo còn căng; dùng dũa/giấy ráp mịn làm sạch tiếp điểm và chỗ bắt dây.'] }
    ] },
    { icon: '🛡️', title: 'Áptômát (CB)', blocks: [
      { t: 'p', x: 'Áptômát vừa đóng cắt mạch vừa bảo vệ quá tải và ngắn mạch, điện áp tới 500 V. Có hai loại: quá dòng và kém áp. Ở loại quá dòng, cuộn dây mắc nối tiếp với mạch; khi dòng vượt giá trị cho phép, lực hút thắng lò xo, nhả chốt hãm và tiếp điểm động bật ra cắt mạch. Việc đóng/cắt bằng tay giống cầu dao.' },
      { t: 'widget', name: 'de-breaker', title: 'Chọn áptômát theo công suất phụ tải' },
      { t: 'h3', x: 'Áptômát hay nhảy: tìm nguyên nhân' },
      { t: 'steps', items: ['Thay áptômát mới để loại trừ lỗi bản thân (áptômát cũng chỉ chịu số lần đóng cắt nhất định, chân tiếp điểm mòn có thể gây chập chờn).', 'Tháo hết thiết bị đang cắm (tivi, quạt, đèn...) rồi bật lại: nếu hết nhảy, có thiết bị bị chập.', 'Tháo ổ cắm, công tắc, bịt đầu dây bằng băng dính cách điện: nếu vẫn nhảy thì lỗi ở dây âm tường.', 'Đo thông mạch loại trừ từng nhánh, hoặc nối từng nhánh qua một áptômát chống giật để khoanh vùng rò điện.'] },
      { t: 'widget', name: 'de-cb-trip', title: 'Áptômát nhảy: bước kiểm tra nào tiếp theo?' },
      { t: 'warn', x: 'Khi thay áptômát: cắt nguồn tổng, quấn kín đầu dây nguồn cấp, lắp đúng chiều (thường nguồn vào ở phía trên), chọn thông số phù hợp phụ tải rồi mới đóng điện thử.' }
    ] },
    { icon: '💡', title: 'Công tắc, ổ cắm và đèn', blocks: [
      { t: 'p', x: '<b>Công tắc</b>: hai cực (điều khiển đèn một vị trí), ba cực (điều khiển một đèn từ hai vị trí), bốn cực. Khi thay: cắt cầu dao, tháo nắp, thử bằng bút thử điện để chắc chắn đã mất điện, kiểm tra thông mạch công tắc, thay nếu hỏng, đấu <b>dây pha đi qua công tắc</b>, siết vít vừa phải, lắp lại rồi mới đóng điện.' },
      { t: 'p', x: '<b>Ổ cắm</b> hư do chấu dẫn điện kém, dùng quá tải làm chấu nóng giãn, hoặc dùng sai phích (bẻ chân thứ ba). Tiếp xúc kém sinh tia lửa, nóng chảy nhựa. Thay ổ cắm theo cách tương tự công tắc: ngắt điện, thử bút thử, tháo mặt nạ, kiểm tra vít và lò xo tiếp xúc, thay hạt ổ cắm.' },
      { t: 'p', x: '<b>Đèn huỳnh quang</b> cần chấn lưu và tắc te (stắc te) để mồi; <b>đèn thủy ngân cao áp</b> cần chấn lưu hạn dòng và tụ bù nâng hệ số công suất cosφ. Đèn thủy ngân tắt rồi bật lại phải chờ 5–10 phút cho đèn nguội, áp suất hơi giảm mới sáng lại. Loại tự chấn lưu dùng dây tóc làm vai trò hạn dòng.' },
      { t: 'widget', name: 'de-lighting', title: 'Dòng điện và áptômát cho mạch chiếu sáng + ổ cắm' },
      { t: 'tip', x: 'Bài thực hành mẫu: 1 áptômát 10 A–250 V, 1 ổ cắm 6 A, 1 công tắc hai cực 6 A, 1 đèn compact 20 W, dây PVC 1×1,5 mm². Yêu cầu: sơ đồ chính xác, đi dây hợp lý, an toàn, vệ sinh 5S.' }
    ] }
  ],
  summary: ['Cầu chì: Idc ≥ Itt và Idc ≤ 0,8 Icp; chọn lọc theo cấp.', 'Cầu dao đóng cắt dứt khoát; lưỡi dao phụ giúp dập hồ quang.', 'Áptômát bảo vệ quá tải/ngắn mạch; nhảy liên tục cần khoanh vùng nguyên nhân.', 'Luôn cắt điện và thử bút thử điện trước khi thay công tắc, ổ cắm.'],
  cards: [['Cầu chì bảo vệ?', 'Quá tải và ngắn mạch'], ['Điều kiện Idc?', 'Idc ≥ Itt và Idc ≤ 0,8 Icp'], ['Hệ số khi mở máy có tải?', '1,6'], ['Hệ số khi mở máy không tải?', '2,5'], ['Kmm động cơ?', '5–7'], ['Cầu dao có điện áp tới?', '500 V'], ['Lưỡi dao phụ để làm gì?', 'Dập hồ quang nhanh'], ['Áptômát cắt tự động nhờ?', 'Cuộn quá dòng hút nhả chốt'], ['Công tắc đấu dây nào qua?', 'Dây pha'], ['Đèn thủy ngân tắt chờ bao lâu?', '5–10 phút']],
  quiz: [
    { q: 'Động cơ Iđm = 10 A, Kmm = 6, mở máy có tải (α = 1,6). Itt:', o: ['24 A', '37,5 A', '60 A', '96 A'], a: 1, e: '60/1,6.' },
    { q: 'Dây dẫn Icp = 40 A. Dòng dây chảy tối đa theo 0,8 Icp:', o: ['20 A', '32 A', '40 A', '50 A'], a: 1, e: '0,8×40.' },
    { q: 'Bước ĐẦU TIÊN khi thay công tắc:', o: ['Tháo dây', 'Cắt cầu dao/áptômát và thử bút thử điện', 'Siết vít', 'Đóng điện'], a: 1, e: 'An toàn trước.' },
    { q: 'Áptômát nhảy khi đã tháo hết thiết bị và vẫn nhảy sau tháo ổ cắm, công tắc, nghi ngờ:', o: ['Tivi', 'Dây điện âm tường', 'Quạt', 'Đèn'], a: 1, e: 'Dây âm tường.' }
  ],
  match: [['Cầu chì', 'Dây chảy nóng chảy khi quá dòng'], ['Cầu dao', 'Đóng cắt bằng tay'], ['Áptômát', 'Đóng cắt + bảo vệ'], ['Công tắc ba cực', 'Điều khiển đèn từ hai nơi'], ['Chấn lưu', 'Hạn dòng cho đèn']]
});
