// Chương 8 – Loe ống (Flaring). Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 90–94 (PDF 98–102).
window.RF_CH = window.RF_CH || {};
RF_CH[8] = { n: 8, title: 'Loe ống (Flaring)', en: 'Flaring, the Process', part: 'II', dir: 'ch08', pdf: [98, 102],
  intro: 'Loe ống là cách nối ống bằng cơ khí, không dùng lửa. Chương này dạy khi nào nên dùng, các bước cắt – cạo – làm sạch – loe – kiểm tra – siết, và lỗi hay gặp là siết quá chặt.',
  terms: [['Flaring', 'Loe ống (nong loe miệng ống)'], ['Flare nut', 'Đai ốc loe (rắc co)'], ['Flare union', 'Đầu nối loe (măng sông loe)'], ['Flaring bar', 'Thanh giữ ống của bộ loe'], ['Clamp tool', 'Cơ cấu kẹp'], ['Flaring cone', 'Mũi loe hình nón'], ['Holding bores', 'Lỗ kẹp các cỡ ống'], ['Wheel cutter', 'Dao cắt ống (cutter)'], ['Deburrer / reamer', 'Dụng cụ cạo ba via / doa ống'], ['Swarf', 'Phoi, mạt kim loại'], ['Expansion valve', 'Van tiết lưu (van giãn nở)'], ['Wrench', 'Cờ lê'], ['Gas-tight', 'Kín khí']],
  sections: [
    { title: 'Lời mở đầu: khi nào nên loe ống', en: 'Preface', pg: [98], blocks: [
      { t: 'p', x: 'Nhờ <b>khả năng tạo hình tuyệt vời</b>, đồng có thể được tạo hình tùy ý ngay tại công trường.' },
      { t: 'p', x: '<b>Loe ống (flaring)</b> là cách nối đường ống bằng <b>cơ khí</b>.' },
      { t: 'p', x: 'Ống đồng thường được nối bằng hàn thiếc hoặc hàn đồng, nhưng đôi khi cần hoặc nên dùng mối nối cơ khí. Mối nối loe là giải pháp thay thế khi <b>không muốn hoặc không thể dùng lửa trần</b>.' },
      { t: 'warn', x: 'Nên <b>giữ số mối nối loe (và mối nối ren) ở mức tối thiểu</b>. Muốn ngăn rò rỉ thì cần thiết kế một “hệ thống kín” tối đa có thể. Hãy kiểm tra xem có sẵn linh kiện <b>hàn liền</b> (brazed-in) hay không và dùng chúng bất cứ khi nào có thể!' },
      { t: 'warn', x: '<b>Đặc biệt: không được dùng mối nối loe để nối van tiết lưu (expansion valve).</b>' },
      { t: 'warn', x: 'Luôn tuân thủ các quy định an toàn riêng! (xem thêm chương An toàn)' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> mối loe làm kín nhờ <b>hai mặt côn ép sát nhau</b> (miệng ống loe đè lên đầu nối), không phải nhờ chất làm kín. Mỗi mối loe là một chỗ có thể rò môi chất sau nhiều năm rung động — vì thế sách khuyên hạn chế tối đa.' }
    ] },
    { title: 'Các bước chuẩn bị ống', en: 'Flaring Process Steps', pg: [99], blocks: [
      { t: 'order', title: '🎯 Sắp xếp đúng thứ tự các bước loe ống', items: ['Cắt ống', 'Cạo ba via bên trong', 'Làm sạch bề mặt', 'Lắp đai ốc loe và kẹp ống vào bộ loe', 'Tạo miệng loe', 'Kiểm tra miệng loe', 'Lắp vào đầu nối và siết'] },
      { t: 'step', figs: ['99_1'], cap: 'Hình 1: Cắt ống', title: 'Cắt ống', en: 'Cut the tube', x: 'Dùng <b>dao cắt ống</b> thay vì cưa sắt để phoi không lọt vào trong ống.', ref: 'Dụng cụ ống (TT), tr. 5, hình 1' },
      { t: 'step', figs: ['99_2'], cap: 'Hình 2: Cạo ba via', title: 'Cạo ba via bên trong', en: 'Remove internal burrs', x: 'Có thể dùng <b>dụng cụ cạo ba via hoặc dao doa</b> để loại bỏ ba via bên trong ống.', ref: 'TT, tr. 6, hình 3' },
      { t: 'step', figs: ['99_3'], cap: 'Hình 3: Làm sạch bề mặt', title: 'Làm sạch bề mặt', en: 'Clean the surfaces', x: 'Bụi bẩn, mảnh vụn và tạp chất phải được <b>làm sạch cơ học</b> khỏi đầu ống.', ref: 'TT, tr. 6, hình 4' }
    ] },
    { title: 'Bộ loe, lắp ống và tạo miệng loe', en: 'The flaring tool', pg: [100], blocks: [
      { t: 'step', figs: ['100_1'], cap: 'Hình 4: Dụng cụ loe', title: 'Bộ dụng cụ loe (ví dụ)', en: 'The flaring tool (example)', x: '<p>Bộ dụng cụ loe gồm:</p><ul><li><b>Thanh giữ ống</b> (dụng cụ giữ)</li><li><b>Cơ cấu kẹp</b></li><li><b>Mũi loe hình nón</b></li><li><b>Các lỗ kẹp</b> với nhiều đường kính khác nhau</li></ul>', ref: 'TT, tr. 11, hình 11' },
      { t: 'step', figs: ['100_2'], cap: 'Hình 5: Bố trí để loe', title: 'Lắp bộ loe với ống và đai ốc loe', en: 'Assemble the flaring tool with tube and flare-nut', x: '<p>Đặt <b>đai ốc loe</b> lên đầu ống, phần ren hướng về <b>đầu sắp loe</b>. Đặt ống vào giữa các thanh của bộ loe.</p><p>Lỗ kẹp của thanh phải <b>khớp với đường kính ống</b> cần loe.</p>', ref: 'TT, tr. 11, hình 11' },
      { t: 'step', figs: ['100_3'], cap: 'Hình 6: Tạo miệng loe', title: 'Tạo miệng loe', en: 'Fabricate the flare', x: 'Căn <b>mũi loe hình nón</b> vào đầu ống rồi vặn chặt vít. Khi bạn quay tay quay, mũi nón sẽ <b>nong loe đầu ống</b>.' },
      { t: 'warn', x: 'Nhớ <b>xỏ đai ốc loe vào ống trước</b> khi loe (ren hướng về đầu ống). Loe xong mới phát hiện quên đai ốc thì phải cắt bỏ và làm lại.' }
    ] },
    { title: 'Kiểm tra, lắp và siết', en: 'Inspect, assemble, tighten', pg: [101, 102], blocks: [
      { t: 'step', figs: ['101_1'], cap: 'Hình 7: Kiểm tra miệng loe', title: 'Kiểm tra sản phẩm', en: 'Inspect your work', x: '<p>Sau khi tháo ống khỏi bộ loe, hãy kiểm tra. Nếu đầu ống có <b>vết nứt</b>, cắt bỏ phần đã loe và <b>làm lại</b>.</p><p>Cần kiểm tra kỹ vị trí khít của:</p><ul><li>đầu nối loe (đực)</li><li>đai ốc loe (cái)</li><li>ống đồng đã loe</li></ul><p>Yêu cầu mối nối <b>khít và sạch</b>.</p>' },
      { t: 'step', figs: ['101_2'], cap: 'Hình 8: Đặt mối nối loe vào vị trí', title: 'Lắp ráp', en: 'Assembling', x: 'Đặt đầu nối loe vào sát đầu ống đã loe và <b>vặn đai ốc xuống</b>. Nếu làm đúng, mối nối phải <b>siết được bằng tay dễ dàng</b>. <b>Không cần</b> thêm chất bít kín hay dầu bôi trơn cho mối nối.' },
      { t: 'step', figs: ['102_1'], cap: 'Hình 9: Siết mối nối loe', title: 'Siết chặt', en: 'Tightening', x: '<p>Giờ là lúc siết chặt: dùng <b>một cờ lê giữ đầu nối</b> và <b>một cờ lê vặn đai ốc</b>. <b>Đừng siết quá chặt</b> mối nối loe!</p><p>Khi các phần đã khít bằng tay, chỉ cần <b>thêm nửa vòng</b> ở mỗi đai ốc/cờ lê là tạo được mối nối kín khí.</p>' },
      { t: 'step', figs: ['102_2'], cap: 'Hình 10: Ống đồng đã loe, đai ốc loe và đầu nối', title: 'Kết quả cuối cùng', en: 'Final result', x: 'Mối nối hoàn chỉnh gồm <b>ống đồng đã loe</b>, <b>đai ốc loe</b> và <b>đầu nối</b>.' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> siết quá tay làm <b>mỏng và nứt miệng loe</b>, rò gas ngay hoặc vài ngày sau. Quy tắc: <b>vặn tay cho khít → thêm đúng nửa vòng bằng cờ lê</b> (một cờ lê giữ, một cờ lê vặn, để không xoắn ống).' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Mối nối loe không được dùng để nối bộ phận nào?', o: ['Ống đồng với ống đồng', 'Van tiết lưu (expansion valve)', 'Đầu nối loe', 'Đai ốc loe'], a: 1, e: 'Sách nêu rõ: không dùng mối loe cho van tiết lưu.' },
        { q: 'Vì sao nên dùng dao cắt ống thay cho cưa sắt?', o: ['Cắt nhanh hơn', 'Tránh phoi lọt vào trong ống', 'Đỡ tốn sức', 'Rẻ hơn'], a: 1, e: 'Phoi trong ống gây hỏng hệ thống.' },
        { q: 'Khi miệng loe bị nứt thì làm gì?', o: ['Siết mạnh hơn', 'Bôi dầu kín', 'Cắt bỏ phần loe và làm lại', 'Vẫn dùng'], a: 2, e: 'Miệng nứt không thể kín.' },
        { q: 'Sau khi khít bằng tay, cần siết thêm bao nhiêu để kín khí?', o: ['Nửa vòng', '3 vòng', 'Không cần', 'Đến hết lực'], a: 0, e: 'Dùng hai cờ lê và không siết quá chặt.' }
      ] }
    ] }
  ] };
