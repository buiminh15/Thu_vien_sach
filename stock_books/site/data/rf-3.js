// Tủ lạnh nén (EPI) – Chương 3: Đấu nối vào hệ thống và an toàn R12.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.refrig = BOOK_DATA.refrig || { chapters: [] };
BOOK_DATA.refrig.chapters.push({
  n: 3,
  title: 'Đấu nối vào hệ thống và an toàn khi dùng R12',
  intro: 'Để đo áp suất, hút chân không hay nạp gas, kỹ thuật viên phải nối ống vào hệ thống kín. Có <b>van chọc ống (line tap valve)</b> hoặc nối vào <b>ống xử lý (process tube)</b> của máy nén bằng ba cách: mối loe, mối hàn đồng, hoặc khớp nối nhanh. Cuối chương là 15 quy tắc an toàn với môi chất <b>R12</b>.',
  sections: [
    { icon: '📌', title: 'Van chọc ống (line tap valve)', blocks: [
      { t: 'p', x: 'Dùng để nối vào ống hút và ống đẩy của máy nén. Gồm van chọc (piercing valve) gắn lên ống và van điều khiển (control valve) lắp trên đó.' },
      { t: 'steps', items: [
        'Chọn đoạn ống <b>thẳng, tròn, không móp hay xước</b>; loại bẩn/sơn bằng bùi nhùi thép.',
        'Chọn van vừa ống; bôi chút dầu R12 lên ống; <b>vặn van chọc ra hết</b>.',
        'Siết đều các vít kẹp, van phải cố định chắc.',
        'Lắp van điều khiển lên trên van chọc, vặn chặt để khỏi rò.',
        'Ấn tay cầm xuống và xoay cho đầu tua-vít khớp rãnh van chọc.',
        'Nối ống nạp vào cửa ra của van điều khiển. Vặn tay cầm <b>cùng chiều kim đồng hồ</b> để vít chọc tạo lỗ trên ống; vặn <b>ngược chiều</b> để rút vít khỏi lỗ → có kết nối từ ống nạp vào hệ thống.',
        'Xong việc: vặn van điều khiển hết chiều kim đồng hồ để van chọc bịt lỗ; tháo van điều khiển và lắp nắp bịt.'
      ] },
      { t: 'tip', x: 'Van chọc thường phải để lại trên ống để bịt lỗ, và không phải lúc nào cũng có sẵn — nên ưu tiên nối vào ống xử lý nếu được.' }
    ] },
    { icon: '🧵', title: 'Nối vào ống xử lý (process tube) của máy nén', blocks: [
      { t: 'p', x: 'Ống xử lý được nhà sản xuất bịt bằng <b>mối bóp (crimp)</b> hoặc nắp bịt. Mở bằng dao cắt ống (cắt chỗ bóp) hoặc kìm tháo nắp; doa sạch bavia và <b>nghiêng nhẹ máy nén</b> để mạt kim loại không rơi vào ống xử lý.' },
      { t: 'table', head: ['Cách nối', 'Khi nào dùng', 'Các bước chính'], rows: [
        ['<b>Mối loe</b> (flared)', 'Khuyến nghị khi muốn có kết nối tạm đáng tin mà không hàn', 'Lồng đai ốc loe 1/4 inch vào ống xử lý → loe đầu ống (ủ trước nếu cứng) → nối khớp ren 1/4 inch (screwed union) vào đầu loe, một cờ-lê giữ đai ốc loe, một cờ-lê siết khớp → vặn ống nạp vào đầu kia của khớp'],
        ['<b>Mối hàn đồng</b> (brazed)', 'Muốn mối nối chắc, vĩnh viễn', 'Nong một đầu ống 3/8 inch (9 mm) cho đầu trơn (không ren) của khớp lồng vừa (dùng dụng cụ doa nếu chưa vừa; không nong đến đường kính phần ren) → hàn đầu trơn của khớp vào chỗ nong → lồng ống 3/8 inch vào ống xử lý (≈ 1 cm / 1/2 inch) và hàn; nếu lỏng thì bóp nhẹ → vặn ống nạp vào khớp'],
        ['<b>Khớp nối nhanh</b> (quick coupler)', 'Kết nối tạm nhanh', 'Vặn hết vòng khoá ống xử lý ngược chiều kim đồng hồ → <b>làm ướt</b> mặt ngoài ống xử lý bằng chút nước → đẩy khớp nối vào hết cỡ → vặn vòng khoá cho chặt → vặn ống nạp vào cửa ra, vòng khoá ống nạp ngược chiều tới khi giữ chắc → điều khiển dòng bằng van cuối: chiều kim đồng hồ = đóng, ngược = mở. Loại không có van thì nối thêm van ngắt (line valve) vào ống nạp']
      ] },
      { t: 'warn', x: 'Khi hàn lên ống xử lý phải <b>bảo vệ máy nén</b>: dùng tấm chắn nhiệt (heat shield) và đặt vải <b>ướt</b> lên máy nén, giữ cho vải luôn ướt.' },
      { t: 'steps', items: ['Khi xong việc: bóp lại (re-crimp) ống xử lý.', 'Tháo phần kết nối đã làm.', 'Hàn bít đầu ống xử lý để mối bóp kín hơn.'] },
      { t: 'widget', name: 'rf-connect-pick', title: 'Chọn cách nối ống xử lý' }
    ] },
    { icon: '☠️', title: '15 quy tắc an toàn với R12', blocks: [
      { t: 'warn', x: '<b>Ghi chú hiện đại (không có trong sổ tay 1985):</b> R12 là chất CFC làm suy giảm tầng ozone, đã bị cấm sản xuất theo Nghị định thư Montreal. Phần sổ tay hướng dẫn “xả R12 ra ngoài” phản ánh thực hành năm 1985. Ngày nay môi chất phải được <b>thu hồi bằng thiết bị chuyên dụng</b>, không được xả ra khí quyển; hãy tuân quy định địa phương. Tủ lạnh vắc-xin hiện đại dùng môi chất khác (ví dụ R134a, R600a) với quy trình khác.' },
      { t: 'list', items: [
        '1. Không làm việc nơi nồng độ khí R12 cao; khi rò hoặc phải xả, <b>mở cửa/cửa sổ</b> trước.',
        '2. Không để khí R12 tiếp xúc nhiệt rất cao (ngọn lửa đèn hàn, thanh nung điện); không hút thuốc; không dùng đèn hàn khi có R12 trong không khí.',
        '3. Không để R12 lỏng dính da; đặc biệt cẩn thận mắt.',
        '4. Khi chuyển R12 lỏng (bình cung cấp → bình dịch vụ) phải đeo <b>găng và kính</b> phòng rò đột ngột.',
        '5. Kiểm tra các mối nối trên bình cung cấp và bình dịch vụ có chặt không, thử rò.',
        '6. Khi chưa dùng bình, lắp đai ốc loe và bonnet để khỏi rò.',
        '7. R12 trong hệ thống ở <b>áp cao</b>: tháo rời cẩn thận, xả đột ngột rất nguy hiểm.',
        '8. Dầu máy nén có thể chứa <b>axit</b>: không để dầu cũ dính da khi tháo máy nén hỏng; tháo dầu cũ cẩn thận.',
        '9. Khi nạp, dùng đúng loại R12 ghi trên nhãn nhà sản xuất — loại khác có thể áp cao hơn, hệ thống không đủ chắc sẽ phụt lỏng/khí áp cao.',
        '10. <b>Không nạp đầy bình quá 3/4</b> (cần chỗ cho chất lỏng giãn nở, nóng lên có thể nổ). Kiểm mực: dựng bình, xả chút R12, thân bình lạnh tới mực chất lỏng; khi nạp bình phải cân, không vượt khối lượng ghi trên bình.',
        '11. <b>Không xả cạn bình</b>: luôn để lại chút R12 để khí và bụi không vào.',
        '12. Cất bình ở chỗ mát, tránh nắng trực tiếp; giữ bình thẳng đứng để không đổ.',
        '13. Không cắt/khoan hệ thống làm lạnh khi chưa lấy hết R12.',
        '14. Khi hàn hay thử rò, tránh gây cháy: dùng tấm chắn nhiệt và để sẵn xô nước.',
        '15. Nhãn nhà sản xuất cho biết áp suất đã thử của hệ thống — <b>không bao giờ vượt</b>.',
        'Thêm: thông gió tốt khi hàn; đeo kính và găng khi chuyển chất lỏng; tháo dầu máy nén cũ cẩn thận.'
      ] },
      { t: 'widget', name: 'rf-cylinder', title: 'Kiểm tra mức nạp bình R12' }
    ] }
  ],
  summary: [
    'Van chọc ống: chọn ống thẳng, vặn van chọc ra hết, siết đều, vặn cùng chiều kim đồng hồ để chọc, ngược lại để rút; xong thì bịt bằng van chọc và nắp.',
    'Ống xử lý: ba cách nối — loe (tạm, không hàn), hàn (vĩnh viễn), khớp nối nhanh (nhanh, tạm); luôn bảo vệ máy nén khỏi nhiệt.',
    'Xong việc: bóp lại và hàn bít ống xử lý.',
    'An toàn R12: thông gió, tránh nguồn nhiệt, găng/kính, bình không đầy quá 3/4, không xả cạn, không vượt áp thử; hiện nay R12 phải thu hồi chứ không xả.'
  ],
  cards: [
    ['Line tap valve dùng để?', 'Nối vào ống hút/đẩy của máy nén.'],
    ['Chọn ống gắn van chọc?', 'Thẳng, tròn, không móp, không xước, đã làm sạch.'],
    ['Chiều vặn tay cầm để chọc ống?', 'Cùng chiều kim đồng hồ.'],
    ['Chiều vặn để nối với hệ thống sau khi chọc?', 'Ngược chiều kim đồng hồ.'],
    ['Process tube được bịt bằng gì?', 'Mối bóp (crimp) hoặc nắp bịt.'],
    ['Tại sao nghiêng nhẹ máy nén khi mở ống xử lý?', 'Để mạt kim loại không rơi vào trong.'],
    ['Ba cách nối ống xử lý?', 'Loe, hàn đồng, khớp nối nhanh.'],
    ['Khớp nối nhanh: làm gì với ống xử lý trước khi đẩy vào?', 'Làm ướt mặt ngoài bằng chút nước.'],
    ['Van cuối của khớp nối nhanh?', 'Chiều kim đồng hồ đóng, ngược chiều mở.'],
    ['Khi hàn lên ống xử lý cần gì?', 'Tấm chắn nhiệt và vải ướt trên máy nén.'],
    ['Sau khi dùng ống xử lý?', 'Bóp lại, tháo kết nối, hàn bít đầu.'],
    ['Bình R12 nạp tối đa?', '3/4 bình; không vượt khối lượng ghi trên bình.'],
    ['Không xả cạn bình vì?', 'Để khí và bụi không lọt vào.'],
    ['Dầu máy nén cũ nguy hiểm vì?', 'Có thể chứa axit.'],
    ['R12 hiện nay?', 'Chất CFC phá ozone; phải thu hồi chứ không xả.']
  ],
  quiz: [
    { q: 'Trước khi gắn van chọc phải:', o: ['Vặn van chọc ra hết', 'Vặn vào hết', 'Hàn', 'Bôi epoxy'], a: 0, e: 'Tránh chọc sớm.' },
    { q: 'Vặn tay cầm cùng chiều kim đồng hồ sẽ:', o: ['Rút vít', 'Chọc lỗ trên ống', 'Mở nắp', 'Không gì'], a: 1, e: 'Ngược chiều để rút.' },
    { q: 'Cách nối ống xử lý không cần hàn:', o: ['Mối loe', 'Mối hàn đồng', 'Cả hai', 'Không có'], a: 0, e: 'Và khớp nối nhanh.' },
    { q: 'Khi hàn lên ống xử lý cần:', o: ['Vải ướt và tấm chắn nhiệt trên máy nén', 'Tắt đèn', 'Không cần', 'Xả dầu'], a: 0, e: 'Bảo vệ máy nén.' },
    { q: 'Bình R12 không được nạp quá:', o: ['1/2', '3/4', '9/10', 'Đầy'], a: 1, e: 'Cần chỗ cho giãn nở.' },
    { q: 'Mực chất lỏng trong bình kiểm bằng:', o: ['Xả chút R12 và sờ vùng lạnh', 'Nhìn qua', 'Gõ bình', 'Đoán'], a: 0, e: 'Dựng thẳng bình.' },
    { q: 'Không bao giờ vượt:', o: ['Áp suất đã thử ghi trên nhãn', 'Tốc độ', 'Nhiệt độ phòng', 'Thời gian'], a: 0, e: 'Nhãn nhà sản xuất.' },
    { q: 'Dầu máy nén cũ có thể chứa:', o: ['Axit', 'Nước', 'Vàng', 'Không gì'], a: 0, e: 'Đeo găng.' },
    { q: 'Với R12 hiện nay đúng là:', o: ['Xả tự do', 'Thu hồi bằng thiết bị chuyên dụng', 'Đốt', 'Chôn'], a: 1, e: 'CFC phá tầng ozone.' },
    { q: 'Khi hàn hoặc thử rò nên có sẵn:', o: ['Xô nước và tấm chắn nhiệt', 'Quạt', 'Radio', 'Nước nóng'], a: 0, e: 'Phòng cháy.' }
  ],
  match: [
    ['Line tap valve', 'Chọc ống để lấy kết nối'],
    ['Process tube', 'Ống xử lý của máy nén'],
    ['Quick coupler', 'Khớp nối nhanh'],
    ['Screwed union', 'Khớp ren nối ống nạp'],
    ['Heat shield', 'Chắn nhiệt cho máy nén'],
    ['Crimp', 'Mối bóp bịt ống'],
    ['Cylinder 3/4', 'Mức nạp tối đa']
  ]
});
