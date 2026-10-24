window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 7,
  title: 'Mạch điều khiển máy bơm nước một pha tự động',
  intro: 'Bơm nước tự động bật khi bồn cạn và tắt khi bồn đầy nhờ công tắc phao. Bài này cho thấy cách ghép khởi động từ, phao, công tắc tay và đèn báo thành một mạch hoàn chỉnh, cùng cách tính chọn thiết bị.',
  sections: [
    { icon: '💧', title: 'Mạch và nguyên lý', blocks: [
      { t: 'p', x: 'Mạch gồm: 1 áptômát một pha hai cực (động lực), 1 áptômát một pha một cực (điều khiển), công tắc phao, công tắc hai cực (điều khiển tay), khởi động từ (công tắc tơ + rơ le nhiệt), máy bơm một pha và hai đèn báo.' },
      { t: 'steps', items: ['Đóng các ATM cấp nguồn cho mạch động lực và mạch điều khiển.', '<b>Mực nước thấp</b> → phao đóng → cuộn dây K có điện → tiếp điểm chính K1 đóng → bơm tự chạy.', '<b>Mực nước cao</b> → phao mở → K mất điện → K1 mở → bơm tự dừng.', 'Công tắc hai cực dùng để <b>điều khiển bơm bằng tay</b>.', 'Ngắn mạch: ATM1, ATM2 bảo vệ; quá tải hoặc mất pha: rơ le nhiệt RN.', 'Đèn xanh: đang bơm; đèn đỏ: bơm dừng.'] },
      { t: 'widget', name: 'de-pump', title: 'Mô phỏng bơm tự động theo mực nước (có chế độ tay)' }
    ] },
    { icon: '🧮', title: 'Tính chọn', blocks: [
      { t: 'p', x: 'Ví dụ máy bơm 1,1 kW, 220 V, cosφ = 0,87, η = 0,76: Iđm ≈ 7,56 A. ATM1 chọn theo dòng mở máy (3–5 Iđm ≈ 37,8 A) → chọn 50 A–500 V; đặt rơ le nhiệt khoảng 3 Iđm ≈ 23 A; dòng cuộn dây Icd = 220/500 = 0,44 A → ATM2 10 A–250 V.' },
      { t: 'widget', name: 'de-select', title: 'Tính chọn thiết bị cho máy bơm một pha' },
      { t: 'list', items: ['Vật tư: dây PVC 1×1,5 và 1×2,5 mm², đầu cốt, dây thít, băng cách điện.', 'Thiết bị: khởi động từ 60 A–600 V, công tắc hai cực 6 A–250 V, bộ phao, hai ATM, máy bơm, đồng hồ vạn năng, mêgôm mét, 2 đèn báo.'] },
      { t: 'warn', x: 'Bơm nước làm việc với nước: bảo đảm nối đất vỏ bơm, dùng thiết bị chống giật khi có thể, và cách ly hộp điện khỏi nước. Phao phải được chọn và lắp để không kẹt (nếu kẹt, bơm chạy khô hoặc tràn bồn).' }
    ] }
  ],
  summary: ['Phao đóng khi nước thấp → bơm chạy; phao mở khi nước cao → bơm dừng.', 'Công tắc tay cho điều khiển thủ công.', 'ATM bảo vệ ngắn mạch, RN bảo vệ quá tải.'],
  cards: [['Phao đóng khi?', 'Mực nước thấp'], ['Phao mở khi?', 'Mực nước cao'], ['Công tắc hai cực để?', 'Điều khiển tay'], ['Đèn xanh báo?', 'Bơm đang chạy'], ['Đèn đỏ báo?', 'Bơm dừng'], ['Bảo vệ quá tải bởi?', 'Rơ le nhiệt'], ['Bảo vệ ngắn mạch bởi?', 'ATM'], ['Icd tính thế nào?', 'U / Rcd']],
  quiz: [
    { q: 'Nước dâng cao thì phao:', o: ['Đóng', 'Mở', 'Hỏng', 'Không đổi'], a: 1, e: 'Cắt K.' },
    { q: 'Công tắc tay dùng để:', o: ['Bơm bằng tay', 'Đo nước', 'Báo đèn', 'Bảo vệ'], a: 0, e: 'Manual.' },
    { q: 'Icd = U/Rcd với 220 V, 500 Ω:', o: ['0,22 A', '0,44 A', '2,2 A', '4,4 A'], a: 1, e: '220/500.' },
    { q: 'Nếu phao kẹt ở vị trí đóng, hậu quả có thể là:', o: ['Bơm chạy liên tục, tràn bồn', 'Bơm không chạy', 'Đèn đỏ sáng', 'Không sao'], a: 0, e: 'Chạy mãi.' }
  ],
  match: [['Phao', 'Cảm biến mực nước'], ['K1', 'Tiếp điểm chính'], ['RN', 'Bảo vệ quá tải'], ['ATM2', 'Bảo vệ mạch điều khiển'], ['CT', 'Chọn tay/tự động']]
});
