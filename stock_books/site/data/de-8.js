window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 8,
  title: 'Mạch điều khiển động cơ đóng, mở cửa rào, cửa cuốn',
  intro: 'Cửa cuốn là mạch đảo chiều (bài 6) cộng thêm hai công tắc hành trình: khi cửa tới cuối hành trình, công tắc tự cắt động cơ. Bài này cho thấy vai trò của công tắc hành trình và cách dùng nút ấn kép.',
  sections: [
    { icon: '🚪', title: 'Mạch và công tắc hành trình', blocks: [
      { t: 'p', x: 'Mạch dùng khởi động từ kép, động cơ ba pha, nút ấn dừng D, nút kép MT/DT (mở cửa), nút kép MN/DN (đóng cửa), hai công tắc hành trình (HTT: hết hành trình mở; HTN: hết hành trình đóng) và ba đèn báo.' },
      { t: 'key', x: 'Công tắc hành trình HTT/HTN <b>mắc nối tiếp với cuộn dây tương ứng</b>. Khi cửa chạm cần gạt, tiếp điểm mở và cắt cuộn dây → động cơ tự dừng đúng vị trí đầu cuối.' },
      { t: 'steps', items: ['<b>Mở cửa:</b> ấn MT → KT có điện (tự duy trì), KT1 đóng động lực → động cơ kéo cửa mở.', 'Cửa chuyển động tới khi tác động vào cần gạt của HTT → HTT mở → KT mất điện → động cơ dừng.', '<b>Đóng cửa:</b> ấn MN → KN có điện (tự duy trì), KN1 đảo hai pha → động cơ kéo cửa đóng, tới HTN thì tự dừng.', 'Ấn D để dừng bất cứ lúc nào; ATM bảo vệ ngắn mạch; RN bảo vệ quá tải hoặc mất pha.', 'Đèn xanh: đang mở; đèn vàng: đang đóng; đèn đỏ: không làm việc.'] },
      { t: 'widget', name: 'de-door', title: 'Mô phỏng cửa cuốn với công tắc hành trình' }
    ] },
    { icon: '🧮', title: 'Tính chọn', blocks: [
      { t: 'p', x: 'Cách tính như bài 5, 6: động cơ 1,1 kW – 380 V → Iđm ≈ 2,5 A, ATM ba pha 20 A, rơ le nhiệt 8 A, ATM mạch điều khiển 10 A. Cần thêm 2 công tắc hành trình.' },
      { t: 'widget', name: 'de-select', title: 'Tính chọn thiết bị cho động cơ cửa cuốn' },
      { t: 'warn', x: 'Cửa cuốn có thể gây kẹt người và tài sản: nên có cảm biến an toàn, nút dừng khẩn cấp và kiểm tra công tắc hành trình định kỳ; công tắc hành trình hỏng làm động cơ quá hành trình, kẹt cơ khí và cháy cuộn dây.' },
      { t: 'tip', x: 'Nếu cuộn dây công tắc tơ là 220 V, mạch điều khiển như hình gốc nhưng bỏ ATM3 và nối phía sau tiếp điểm thường đóng của RN về trung tính.' }
    ] }
  ],
  summary: ['Cửa cuốn = đảo chiều + hai công tắc hành trình.', 'Hành trình cắt cuộn dây ở cuối đường.', 'Nút kép + tiếp điểm liên động vẫn bắt buộc.'],
  cards: [['HTT?', 'Công tắc hành trình mở cửa'], ['HTN?', 'Công tắc hành trình đóng cửa'], ['Hành trình mắc với?', 'Cuộn dây tương ứng, nối tiếp'], ['Đèn xanh báo?', 'Đang mở cửa'], ['Đèn vàng báo?', 'Đang đóng cửa'], ['Dừng khẩn cấp?', 'Nút D'], ['Hỏng hành trình gây?', 'Quá hành trình, kẹt, cháy'], ['Rơ le nhiệt?', 'Quá tải, mất pha']],
  quiz: [
    { q: 'Cửa tới cuối hành trình mở thì:', o: ['HTT mở cắt KT', 'KN có điện', 'Đèn đỏ tắt', 'Phải ấn D'], a: 0, e: 'Tự dừng.' },
    { q: 'MN dùng để:', o: ['Mở cửa', 'Đóng cửa', 'Dừng', 'Bảo vệ'], a: 1, e: 'Đóng cửa.' },
    { q: 'Công tắc hành trình hỏng có thể gây:', o: ['Cửa chạy quá hành trình', 'Cửa chạy chậm', 'Đèn sáng', 'Không sao'], a: 0, e: 'Overtravel.' },
    { q: 'Liên động vẫn cần để:', o: ['Tránh đóng cả KT và KN', 'Giảm điện', 'Đo cách điện', 'Tăng tốc'], a: 0, e: 'Như bài 6.' }
  ],
  match: [['HTT', 'Hết hành trình mở'], ['HTN', 'Hết hành trình đóng'], ['MT', 'Mở cửa'], ['MN', 'Đóng cửa'], ['D', 'Dừng']]
});
