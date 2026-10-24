window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dien = BOOK_DATA.dien || { chapters: [] };
BOOK_DATA.dien.chapters.push({
  n: 5,
  title: 'Mạch điều khiển động cơ một pha, ba pha bằng khởi động từ đơn',
  intro: 'Công tắc tơ, rơ le nhiệt và khởi động từ là bộ ba cơ bản của điều khiển động cơ. Bài này giải thích từng thiết bị, rồi lắp mạch "bấm M chạy – bấm D dừng" có tự duy trì, có bảo vệ ngắn mạch và quá tải, kèm cách tính chọn thiết bị.',
  sections: [
    { icon: '🧲', title: 'Công tắc tơ', blocks: [
      { t: 'p', x: 'Công tắc tơ đóng cắt từ xa mạch điện một chiều và xoay chiều điện áp tới 500 V, dòng tới 600 A. Cấu tạo: mạch từ, cuộn dây, nắp phần động, cần động, lò xo, tiếp điểm chính (cho mạch động lực), tiếp điểm phụ thường đóng và thường mở (cho mạch điều khiển).' },
      { t: 'key', x: 'Cuộn dây có điện → mạch từ hút nắp động → tiếp điểm chính đóng, tiếp điểm phụ <b>thường đóng mở ra</b>, tiếp điểm phụ <b>thường mở đóng lại</b>. Cuộn dây mất điện (hoặc điện áp quá thấp) → lò xo trả mọi tiếp điểm về trạng thái ban đầu.' },
      { t: 'widget', name: 'de-contactor', title: 'Công tắc tơ: cấp điện cuộn dây thì các tiếp điểm đổi trạng thái thế nào?' }
    ] },
    { icon: '🌡️', title: 'Rơ le nhiệt và khởi động từ', blocks: [
      { t: 'p', x: 'Rơ le nhiệt bảo vệ <b>quá tải</b>. Phần tử chính là phiến kim loại kép (bimêtan): một tấm giãn nở ít (invar: 36% Ni, 64% Fe) ghép với tấm giãn nở nhiều (đồng thau, gấp ~20 lần). Cuộn dây đốt nóng mắc nối tiếp mạch cần bảo vệ; quá dòng thì phiến cong, giải phóng cần quay và mở tiếp điểm thường đóng của rơ le; muốn chạy lại phải ấn nút phục hồi.' },
      { t: 'warn', x: 'Rơ le nhiệt có quán tính nhiệt lớn nên tác động sau vài giây đến vài phút: <b>không dùng để bảo vệ ngắn mạch</b> (việc đó là của áptômát/cầu chì).' },
      { t: 'p', x: '<b>Khởi động từ = công tắc tơ + rơ le nhiệt.</b> Khởi động từ đơn (một công tắc tơ) điều khiển động cơ quay một chiều; khởi động từ kép (hai công tắc tơ) dùng để khởi động và đảo chiều.' }
    ] },
    { icon: '🔁', title: 'Mạch mở máy – dừng có tự duy trì', blocks: [
      { t: 'steps', items: ['Đóng các áptômát cấp nguồn cho mạch động lực và mạch điều khiển.', 'Ấn nút <b>M</b> → cuộn dây K có điện → tiếp điểm phụ thường mở K2 đóng để <b>tự duy trì</b> (giữ K có điện khi buông tay), đồng thời tiếp điểm chính K1 đóng cấp điện cho động cơ.', 'Ấn nút <b>D</b> (thường đóng) → K mất điện → K1 mở → động cơ dừng.', 'Ngắn mạch mạch động lực: ATM1 bảo vệ; ngắn mạch mạch điều khiển: ATM2/ATM3 bảo vệ; quá tải hoặc mất pha: tiếp điểm thường đóng của rơ le nhiệt RN mở.', 'Đèn xanh báo đang chạy, đèn đỏ báo đang dừng.'] },
      { t: 'widget', name: 'de-start-stop', title: 'Mô phỏng mạch M/D tự duy trì (bấm M, D, giả lập quá tải)' },
      { t: 'tip', x: 'Nếu cuộn dây công tắc tơ là 220 V (thay vì 380 V) thì mạch điều khiển chỉ cần lấy một pha và trung tính, có thể bỏ ATM3 và nối phía sau tiếp điểm RN về trung tính.' }
    ] },
    { icon: '🧮', title: 'Tính chọn thiết bị', blocks: [
      { t: 'key', x: 'Điều kiện chọn: <b>U_tb ≥ U_nguồn</b> và <b>I_tb ≥ I_phụ tải</b>. Dòng định mức: ba pha <b>Iđm = P / (√3·U·cosφ·η)</b>; một pha <b>Iđm = P / (U·cosφ·η)</b>. Áptômát mạch động lực chọn theo dòng mở máy (Imm ≈ 3–7 Iđm theo giáo trình); dòng đặt trên rơ le nhiệt Iqt ≈ 2,5–3 Iđm (theo ví dụ trong giáo trình); áptômát mạch điều khiển theo dòng cuộn dây Icd = U/Rcd.' },
      { t: 'widget', name: 'de-select', title: 'Tính chọn áptômát, rơ le nhiệt cho động cơ ba pha/một pha' },
      { t: 'p', x: 'Ví dụ: động cơ 1,1 kW, cosφ = 0,87, η = 0,76, 380 V ba pha → Iđm ≈ 2,5 A; ATM ba pha 20 A–500 V; đặt rơ le nhiệt 8 A; Icd = 380/1000 = 0,38 A → ATM mạch điều khiển 10 A. Với động cơ một pha 220 V cùng công suất → Iđm ≈ 7,56 A; ATM 50 A; đặt rơ le nhiệt 23 A; Icd = 220/500 = 0,44 A.' },
      { t: 'warn', x: 'Con số trên là ví dụ trong giáo trình để luyện kỹ năng; khi làm thật phải theo dòng định mức trên nhãn động cơ, điều kiện mở máy và tiêu chuẩn thiết bị tại nơi bạn làm việc.' }
    ] }
  ],
  summary: ['Công tắc tơ: cuộn dây có điện → tiếp điểm chính đóng.', 'Rơ le nhiệt bảo vệ quá tải, không bảo vệ ngắn mạch.', 'Khởi động từ = công tắc tơ + rơ le nhiệt.', 'Tự duy trì bằng tiếp điểm phụ thường mở song song nút M.', 'Chọn thiết bị theo U và I của phụ tải.'],
  cards: [['Công tắc tơ gồm tiếp điểm?', 'Chính (động lực), phụ thường mở/đóng'], ['Rơ le nhiệt bảo vệ?', 'Quá tải'], ['Bimêtan?', 'Phiến hai kim loại giãn nở khác nhau'], ['Khởi động từ?', 'Công tắc tơ + rơ le nhiệt'], ['Khởi động từ kép?', 'Hai công tắc tơ để đảo chiều'], ['Tự duy trì?', 'Tiếp điểm phụ giữ cuộn dây có điện'], ['Ngắn mạch bảo vệ bởi?', 'Áptômát/cầu chì'], ['Iqt rơ le nhiệt?', '≈ 2,5–3 Iđm (giáo trình)']],
  quiz: [
    { q: 'Rơ le nhiệt KHÔNG dùng để bảo vệ:', o: ['Quá tải', 'Ngắn mạch', 'Mất pha (gián tiếp)', 'Quá nhiệt động cơ'], a: 1, e: 'Quán tính nhiệt.' },
    { q: 'Động cơ 1 pha 220 V, 1,1 kW, cosφ 0,87, η 0,76. Iđm ≈', o: ['2,5 A', '5 A', '7,6 A', '15 A'], a: 2, e: '1100/(220×0,87×0,76).' },
    { q: 'Buông tay khỏi nút M mà động cơ vẫn chạy là nhờ:', o: ['Rơ le nhiệt', 'Tiếp điểm tự duy trì K2', 'Áptômát', 'Đèn báo'], a: 1, e: 'Self-hold.' },
    { q: 'Nút D thường là loại:', o: ['Thường mở', 'Thường đóng', 'Cảm ứng', 'Xoay'], a: 1, e: 'Normally closed.' }
  ],
  match: [['Công tắc tơ', 'Đóng cắt từ xa'], ['Rơ le nhiệt', 'Bảo vệ quá tải'], ['Tự duy trì', 'Giữ K có điện'], ['ATM', 'Bảo vệ ngắn mạch'], ['Nút D', 'Dừng (thường đóng)']]
});
