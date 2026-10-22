// Chương 6 – Uốn ống (Bending). Dịch từ "Good Practices in Refrigeration" (GIZ Proklima, 2010), tr. 77–80 (PDF 85–88).
window.RF_CH = window.RF_CH || {};
RF_CH[6] = { n: 6, title: 'Uốn ống (Bending)', en: 'Bending, the Process', part: 'II', dir: 'ch06', pdf: [85, 88],
  intro: 'Ống đồng uốn đúng cách sẽ không bẹp ở mặt ngoài và không gấp nếp ở mặt trong. Chương này nói về dụng cụ uốn, quy trình uốn bằng dụng cụ cầm tay (đặt ống – bắt đầu uốn – uốn – tháo ống) và nguyên tắc bố trí đường ống để giảm tổn thất áp suất.',
  terms: [['Bending', 'Uốn ống'], ['Annealed tube', 'Ống đồng mềm (đã ủ)'], ['Hard drawn tube', 'Ống đồng cứng (kéo nguội)'], ['Mandrel', 'Lõi dẫn (trục chèn bên trong)'], ['Former / forming wheel', 'Bánh tạo hình (đĩa uốn)'], ['Forming shoe', 'Má tạo hình'], ['Tube-holding clip', 'Kẹp giữ ống'], ['Back guide', 'Thanh đỡ phía sau'], ['Kink', 'Gập gãy (ống bị gấp nếp)'], ['Pressure drop', 'Tổn thất áp suất'], ['Suction line', 'Đường hút'], ['OD (outside diameter)', 'Đường kính ngoài'], ['Expansion loop', 'Vòng bù giãn nở']],
  sections: [
    { title: 'Lời mở đầu: dụng cụ và nguyên tắc uốn', en: 'Preface', pg: [85], blocks: [
      { t: 'p', x: 'Nhờ <b>khả năng tạo hình tuyệt vời</b>, đồng có thể được tạo hình tùy ý ngay tại công trường.' },
      { t: 'key', x: 'Ống đồng được uốn đúng cách thì <b>không bị bẹp ở mặt ngoài của chỗ uốn</b> và <b>không bị gấp nếp ở mặt trong</b>.' },
      { t: 'p', x: 'Vì đồng dễ tạo hình, các <b>vòng bù giãn nở</b> và những chỗ uốn cần thiết khác trong cụm ống có thể làm nhanh và đơn giản nếu dùng đúng phương pháp và dụng cụ.' },
      { t: 'p', x: 'Có thể dùng <b>dụng cụ cầm tay</b> với lõi dẫn, khuôn, bánh tạo hình và vật chèn, hoặc <b>máy uốn chạy điện</b>.' },
      { t: 'p', x: 'Cả ống đồng <b>mềm (ủ)</b> lẫn ống đồng <b>cứng (kéo nguội)</b> đều uốn được bằng dụng cụ phù hợp. <b>Phải dùng đúng cỡ dụng cụ uốn cho từng cỡ ống.</b>' },
      { t: 'warn', x: 'Luôn tuân thủ các quy định an toàn riêng! (xem thêm chương An toàn)' },
      { t: 'table', head: ['Loại máy uốn', 'Phạm vi'], rows: [
        ['Máy uốn xách tay', 'Uốn ống đến và gồm <b>54 mm</b> đường kính ngoài (OD)'],
        ['Máy uốn nhỏ để trong hộp đồ nghề', 'Đến <b>22 mm</b>'],
        ['Máy uốn chạy điện cố định', '<b>Trên 54 mm</b> – chỉ có cách này là thỏa đáng']
      ] },
      { t: 'p', x: 'Mọi máy uốn đều hoạt động theo nguyên tắc: ống được uốn <b>giữa các bánh tạo hình (former) và thanh đỡ phía sau (back guide)</b> khớp nhau. Chúng đỡ mặt ngoài của ống nên <b>loại trừ nguy cơ thành ống bị bẹp</b>.' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> hãy nghĩ tới việc uốn ống hút nước bằng nhựa: nếu không đỡ, chỗ uốn bị bẹp và gập. Dụng cụ uốn “ôm” sát ống ở bên ngoài nên ống giữ được tiết diện tròn — dòng môi chất mới chảy thông suốt.' }
    ] },
    { title: 'Chuẩn bị và đặt ống', en: 'Bending Process Steps', pg: [86], blocks: [
      { t: 'order', title: '🎯 Sắp xếp đúng thứ tự thao tác uốn', items: ['Chọn dụng cụ đúng cỡ ống', 'Đặt ống vào rãnh bánh tạo hình', 'Đặt kẹp giữ ống và đưa má tạo hình vào vị trí', 'Căn vạch 0 của bánh với mép má tạo hình', 'Kéo hai tay cầm lại gần nhau để uốn', 'Xoay tay cầm vuông góc để nhả má', 'Mở kẹp giữ ống và lấy ống ra'] },
      { t: 'step', figs: ['86_1'], cap: 'Hình 1: Ống đồng bị xử lý/bảo quản sai cách', title: 'Chỉ dùng ống sạch, khô và còn bịt kín', en: 'Appropriately treated copper tube', x: '<p>Chỉ được dùng ống đồng <b>còn bịt kín, bên trong sạch và khô</b>.</p><p>Ví dụ xấu trên hình: ống đồng bị xử lý và cất giữ không đúng cách.</p>', callouts: ['Ống bị bẹp', 'Không có nút bịt đầu ống bảo vệ bên trong'] },
      { t: 'step', figs: ['86_2'], cap: 'Hình 2: Giữ ống', title: 'Định vị', en: 'Positioning', x: '<p>Đường kính dụng cụ uốn phải <b>khớp với đường kính ống đồng</b>.</p><p>Để hai tay cầm ở <b>180°</b>, nâng kẹp giữ ống ra khỏi đường đi, rồi <b>đặt ống vào rãnh bánh tạo hình</b>.</p>', ref: 'Dụng cụ ống (TT), tr. 11, hình 12' },
      { t: 'step', figs: ['86_3'], cap: 'Hình 3: Vị trí giữ ống', title: 'Vị trí bắt đầu uốn', en: 'Bending start position', x: '<p>Đặt <b>kẹp giữ ống</b> lên ống, đưa tay cầm về vị trí <b>gần vuông góc</b>, ăn khớp má tạo hình lên ống.</p><p><b>Vạch “0”</b> trên bánh tạo hình phải <b>ngang với mép trước của má tạo hình</b>.</p>', ref: 'TT, tr. 11, hình 12' }
    ] },
    { title: 'Uốn và tháo ống', en: 'Bending the tube', pg: [87, 88], blocks: [
      { t: 'step', figs: ['87_1'], cap: 'Hình 4: Uốn ống', title: 'Uốn ống', en: 'Bending the tube', x: '<p>Uốn bằng cách <b>kéo hai tay cầm lại gần nhau</b> theo một chuyển động <b>êm và liên tục</b>.</p><p>Góc uốn mong muốn được chỉ bằng <b>các vạch chia trên bánh tạo hình</b>.</p>', ref: 'TT, tr. 11, hình 12' },
      { t: 'step', figs: ['87_2'], cap: 'Hình 5: Tháo ống đã uốn', title: 'Tháo dụng cụ', en: 'Tool removal', x: '<p>Lấy ống đã uốn ra bằng cách <b>xoay tay cầm vuông góc với ống</b>, nhả má tạo hình.</p><p>Sau đó <b>mở kẹp giữ ống</b>.</p>', ref: 'TT, tr. 11, hình 12' },
      { t: 'step', figs: ['87_3'], cap: 'Hình 6: Quá trình uốn', title: 'Ví dụ uốn ống đồng và dụng cụ', en: 'Bending copper and tool example', x: 'Ví dụ về ống đồng đang được uốn bằng dụng cụ cầm tay.', ref: 'TT, tr. 11, hình 12 (1)' },
      { t: 'step', figs: ['88_1'], cap: 'Hình 7: Ví dụ ống đồng đã uốn', title: 'Ví dụ ống đồng đã uốn', en: 'Bending copper and tool example', x: 'Chỗ uốn đạt yêu cầu: tròn đều, <b>không bẹp, không gấp nếp</b>.', ref: 'TT, tr. 11, hình 12 (3)' },
      { t: 'step', figs: ['88_2'], cap: 'Hình 8: Dụng cụ uốn ống đồng', title: 'Dụng cụ uốn', en: 'Bending copper tool', x: 'Dụng cụ uốn cầm tay dùng trong ví dụ.', ref: 'TT, tr. 11, hình 12 (2)' }
    ] },
    { title: 'Lời khuyên khi thiết kế đường ống', en: 'Design advice', pg: [88], blocks: [
      { t: 'key', x: '<b>Thiết kế đường ống sao cho dùng ít chỗ uốn và phụ kiện nhất.</b> Điều quan trọng nhất là <b>giảm tổn thất áp suất trên đường hút</b>, vì vậy hãy lên bố trí đường ống quanh <b>lộ trình tối ưu cho đường hút</b>.' },
      { t: 'warn', x: 'Nếu bạn uốn tay ống đồng mềm mà <b>lỡ làm gập gãy ống (kink)</b>, hãy <b>cắt bỏ đoạn gập gãy và làm lại</b>. Sửa ngay bây giờ dễ hơn nhiều so với sau khi hệ thống đã vận hành. Không có lý do gì để chấp nhận tổn thất áp suất không cần thiết ảnh hưởng đến hệ thống suốt đời vận hành.' },
      { t: 'tip', x: '💡 <b>Giải thích thêm (ngoài sách):</b> đường hút có hơi môi chất áp suất thấp, tiết diện lớn, rất “nhạy” với cản trở: mỗi khúc cong hay chỗ bẹp làm máy nén phải hút mạnh hơn → hao điện và giảm công suất lạnh. Vì thế: ít khúc cong, bán kính uốn lớn, đường đi ngắn.' }
    ] },
    { title: 'Kiểm tra nhanh', pg: [], blocks: [
      { t: 'quiz', items: [
        { q: 'Nguyên tắc chung của mọi máy uốn ống là gì?', o: ['Ống được nung nóng rồi uốn', 'Ống được uốn giữa bánh tạo hình và thanh đỡ khớp nhau để không bị bẹp', 'Ống được cắt rồi hàn góc', 'Ống được nhồi cát'], a: 1, e: 'Dụng cụ đỡ mặt ngoài ống nên thành ống không bị bẹp.' },
        { q: 'Máy uốn xách tay dùng cho ống có OD đến bao nhiêu?', o: ['22 mm', '54 mm', '100 mm', '12 mm'], a: 1, e: 'Trên 54 mm chỉ có máy uốn điện cố định.' },
        { q: 'Vạch “0” của bánh tạo hình phải ở đâu khi bắt đầu uốn?', o: ['Ngang mép trước của má tạo hình', 'Sau tay cầm', 'Trên kẹp giữ', 'Không cần căn'], a: 0, e: 'Để đọc đúng góc uốn trên vạch chia.' },
        { q: 'Lỡ làm gập gãy ống đồng mềm khi uốn thì phải làm gì?', o: ['Vẫn dùng', 'Cắt bỏ đoạn gập và làm lại', 'Bôi keo', 'Hàn lên'], a: 1, e: 'Sửa lúc này dễ hơn sau khi hệ thống đã chạy.' },
        { q: 'Vì sao nên giảm số chỗ uốn ở đường hút?', o: ['Cho đẹp', 'Để giảm tổn thất áp suất', 'Để tiết kiệm đồng', 'Để dễ tháo'], a: 1, e: 'Tổn thất áp suất ở đường hút làm giảm hiệu suất suốt đời hệ thống.' }
      ] }
    ] }
  ] };
