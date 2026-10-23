window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 7,
  title: 'Cân bằng giữa thẩm mỹ và hiệu năng',
  intro: 'Hiệu năng chỉ là một phần của trải nghiệm tổng thể và cải thiện nó có chi phí. Chương này cho bạn khung ra quyết định: so sánh chênh lệch hiệu năng, thẩm mỹ, chi phí vận hành; đưa hiệu năng vào quy trình, đặt ngân sách và chạy thí nghiệm A/B.',
  sections: [
    { icon: '⚖️', title: 'Tìm điểm cân bằng', blocks: [
      { t: 'p', x: 'Harry Roberts: "Quan trọng không phải trông đẹp thế nào mà là chạy tốt thế nào, cảm giác ra sao. Một giao diện bóng bẩy mất 20 giây tới thiết bị của người dùng thì họ đã bỏ đi trước khi kịp thấy." Cải thiện tốc độ có chi phí (thời gian phát triển, nhượng bộ thẩm mỹ), nhưng cũng giúp các mặt khác: giảm trọng lượng trang thì dễ tiếp cận hơn với người có băng thông hạn chế; cải thiện hiệu năng cảm nhận thì site cảm giác tốt hơn.' },
      { t: 'table', head: ['Câu hỏi', 'Cân nhắc thẩm mỹ', 'Cân nhắc hiệu năng', 'Quyết định ví dụ'], rows: [['Ảnh hero lớn ở đầu mọi trang?', 'Bắt mắt, thể hiện thương hiệu', 'File có thể rất lớn', 'Có — dùng ít màu và nén đúng'], ['@font-face 3 độ đậm hiển thị + 1 độ đậm văn bản?', 'Linh hoạt về kiểu chữ', 'Giảm request và trọng lượng', '2 độ đậm hiển thị + font hệ thống cho nội dung'], ['Carousel trang chủ?', 'Trưng bày nhiều nội dung', 'Thêm request, trọng lượng (cả nội dung người dùng không thấy)', 'Không — lợi ích tăng thêm không đáng'], ['Minh họa cách sản phẩm hoạt động?', 'Video hoặc GIF động', 'Video/GIF khá nặng', 'Tự host video tải bất đồng bộ']] },
      { t: 'tip', x: 'Ví dụ Fasetto (Harry Roberts và Naomi Atkinson): chọn GIF động để minh họa sự đơn giản dù GIF nặng, vì Atkinson thạo làm GIF; thay bằng CSS animation sẽ làm CSS phình (họ muốn CSS gói trong 1 request); GIF cho phép tải dần ngoài đường tới hạn; hạn chế bảng màu để tận dụng nén. Kết quả GIF chỉ dưới 35 KB (một trường hợp 90 KB).' },
      { t: 'h3', x: 'Ba nhóm cân nhắc' },
      { t: 'table', head: ['Nhóm', 'Câu hỏi'], rows: [['Chênh lệch hiệu năng', 'Thêm/bớt bao nhiêu request? Bao nhiêu trọng lượng? Ảnh hưởng hiệu năng cảm nhận?'], ['Chênh lệch thẩm mỹ', 'Ảnh hưởng thương hiệu? pattern hiện có? trải nghiệm tổng thể?'], ['Chi phí vận hành', 'Dễ bảo trì? Code sạch hơn? Đội có làm được? Mất bao lâu? Có học được kỹ thuật dùng lại cho dự án khác?']] },
      { t: 'widget', name: 'dp-tradeoff', title: 'Máy tính cân nhắc: có nên thêm tài sản này không?' }
    ] },
    { icon: '🔧', title: 'Đưa hiệu năng vào quy trình làm việc', blocks: [
      { t: 'list', items: ['Tự động nén ảnh khi có ảnh mới.', 'Dùng dịch vụ đổi cỡ ảnh + cache theo breakpoint, không tạo tay mỗi kích thước.', 'Pattern copy–paste được trong style guide.', 'Kiểm tra trọng lượng trang và đường tới hạn bằng plug-in.', 'Dài hạn: benchmark liên tục để bảo vệ chi phí làm hiệu năng; tái dùng và tài liệu hóa pattern; dọn hack và stylesheet riêng trình duyệt khi trình duyệt tiến hóa.'] },
      { t: 'p', x: 'Thói quen và sự quen công cụ giúp bạn tối ưu nhanh hơn, có thời gian cho việc mới và dạy người khác.' }
    ] },
    { icon: '💰', title: 'Ngân sách hiệu năng (performance budget)', blocks: [
      { t: 'key', x: 'Ngân sách đặt từ đầu cho bạn "khoảng linh hoạt": hy sinh hiệu năng ở một chỗ và bù ở chỗ khác. Ví dụ thêm vài độ đậm font vì đã bớt được request ảnh tương đương; bỏ script theo dõi marketing để thêm ảnh hero đẹp hơn.' },
      { t: 'table', head: ['Chỉ số', 'Tối đa', 'Công cụ', 'Ghi chú'], rows: [['Tổng thời gian tải', '2 giây', 'WebPagetest, trung vị 5 lần chạy trên 3G', 'Mọi trang'], ['Tổng thời gian tải', '2 giây', 'RUM, trung vị theo địa lý', 'Mọi trang'], ['Tổng trọng lượng', '800 KB', 'WebPagetest', 'Mọi trang'], ['Speed Index', '1.000', 'WebPagetest, Dulles, Chrome, 3G', 'Mọi trang trừ trang chủ'], ['Speed Index', '600', 'WebPagetest, Dulles, Chrome, 3G', 'Trang chủ']] },
      { t: 'list', items: ['Cách đặt mục tiêu: phân tích đối thủ (đặt ngân sách thấp hơn họ) hoặc chuẩn ngành (≤ 2 giây).', 'Cập nhật ngân sách khi bạn giỏi hơn và chuẩn ngành thay đổi; có ngân sách riêng cho từng breakpoint.', 'Mục tiêu phải đo được: số cụ thể phải đạt, công cụ đo, đo cái gì/ai; dễ để cả đội đọc và tự đo.'] },
      { t: 'widget', name: 'dp-budget2', title: 'Ngân sách hiệu năng: kiểm tra đánh đổi của một thay đổi' }
    ] },
    { icon: '🧪', title: 'Thí nghiệm với thiết kế', blocks: [
      { t: 'p', x: '"Siêu năng lực" quan trọng nhất là đo được tác động: tốn bao nhiêu thời gian? tác động tới bounce rate? có đáng với hy sinh thẩm mỹ? Tốt hơn nữa: so sánh hai phương án song song (<b>A/B test</b>) — chạy hai phiên bản cùng lúc cho các nhóm người dùng khác nhau và đo hành vi sau đó. Số người vào thí nghiệm quyết định cần chạy bao lâu.' },
      { t: 'list', items: ['Tác giả luôn bị bất ngờ: có lúc người dùng phản ứng tích cực hơn khi thêm độ đậm font dù trang chậm đi; nhưng nhiều thí nghiệm chứng minh sức mạnh của tốc độ (160 KB ảnh ẩn → bounce rate di động +12%).', 'Đừng để "thẩm mỹ chống hiệu năng" trở thành "designer chống developer". Cả đội cùng mục tiêu trải nghiệm tuyệt vời (Roberts: "một đội cùng muốn làm sản phẩm đẹp, nhanh, giao sớm"). Thay vì "versus", hãy hỏi "điều gì tốt nhất cho người dùng?"', 'Đôi khi nên bỏ qua kết quả thí nghiệm vì không tốt cho người dùng (ví dụ nhanh hơn nhưng kém bảo mật, hay thủ thuật dễ vô tình spam danh bạ để tăng doanh thu): kiểm tra lại bằng trực giác đạo đức.'] },
      { t: 'tip', x: 'Câu chuyện YouTube "Feather" (Chris Zacharias): trang xem video nặng 1,2 MB với hàng chục request; bản prototype nhẹ lại cho thời gian tải đo được <b>tăng</b> — vì những nhóm người trước đó không thể dùng YouTube (mất hơn hai phút tới khung hình đầu) giờ xem được. Bài học: đo lường và nhìn toàn bộ trải nghiệm, kể cả những người bạn chưa phục vụ được.' }
    ] }
  ],
  summary: ['Hiệu năng là một phần của trải nghiệm; mọi quyết định đều có đánh đổi.', 'Cân nhắc: chênh lệch hiệu năng, thẩm mỹ, chi phí vận hành.', 'Đưa hiệu năng vào quy trình hằng ngày để giảm chi phí vận hành.', 'Đặt ngân sách hiệu năng đo được ngay từ đầu để đánh đổi có kiểm soát.', 'Chạy thí nghiệm A/B và đo; luôn hỏi "điều gì tốt nhất cho người dùng?".'],
  cards: [['Ba nhóm cân nhắc khi đánh đổi?', 'Hiệu năng, thẩm mỹ, chi phí vận hành'], ['Performance budget là gì?', 'Mục tiêu hiệu năng đo được, cho phép đánh đổi giữa các thành phần'], ['Ngân sách ví dụ cho tổng thời gian tải?', '2 giây (trung vị 5 lần trên 3G)'], ['Ngân sách ví dụ cho Speed Index trang chủ?', '600 (các trang khác 1.000)'], ['A/B test là gì?', 'Chạy hai phiên bản song song cho các nhóm người dùng khác nhau và đo hành vi'], ['Cách giảm chi phí vận hành của hiệu năng?', 'Tự động hóa và biến thành thói quen hằng ngày'], ['Bài học từ YouTube Feather?', 'Đo toàn bộ trải nghiệm: nhóm người trước đó không dùng được đã dùng được'], ['Hero lớn có được không?', 'Được nếu ít màu và nén đúng'], ['Carousel trang chủ?', 'Thường không đáng vì thêm request và trọng lượng'], ['Nên bỏ qua kết quả A/B khi nào?', 'Khi nó không tốt cho người dùng (bảo mật kém, thủ thuật gây hại)']],
  quiz: [
    { q: 'Mục đích của performance budget:', o: ['Giới hạn chi phí quảng cáo', 'Cho phép đánh đổi có kiểm soát giữa tài sản', 'Cấm mọi ảnh lớn', 'Thay thế A/B test'], a: 1, e: 'Hy sinh ở một chỗ và bù ở chỗ khác.' },
    { q: 'Mục tiêu hiệu năng tốt phải:', o: ['Mơ hồ', 'Đo được kèm công cụ đo', 'Chỉ nói "nhanh hơn"', 'Chỉ cho desktop'], a: 1, e: 'Số cụ thể, công cụ, đối tượng đo.' },
    { q: 'Trong ví dụ YouTube Feather, vì sao thời gian tải đo được tăng?', o: ['Trang nặng hơn', 'Nhiều người từng không dùng được nay dùng được', 'Lỗi đo', 'Server chậm'], a: 1, e: 'Dân số người dùng mới có mạng chậm.' },
    { q: 'Cân nhắc nào KHÔNG thuộc "chi phí vận hành"?', o: ['Đội có làm được không', 'Mất bao lâu', 'Thêm bao nhiêu request', 'Có dễ bảo trì không'], a: 2, e: 'Số request thuộc chênh lệch hiệu năng.' },
    { q: 'Tư duy nên có thay vì "thẩm mỹ versus hiệu năng":', o: ['Developer thắng', 'Designer thắng', '"Điều gì tốt nhất cho người dùng?"', 'Bỏ cả hai'], a: 2, e: 'Cả đội cùng mục tiêu.' }
  ],
  match: [['Performance budget', 'Ngân sách đo được'], ['A/B test', 'Hai phiên bản song song'], ['Chi phí vận hành', 'Thời gian, bảo trì, kỹ năng đội'], ['Feather', 'Prototype nhẹ của YouTube'], ['Hero lớn', 'Ít màu + nén đúng']]
});
