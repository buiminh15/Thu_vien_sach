window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 13,
  title: 'Kết luận: tổng hợp bốn chiến lược chính',
  intro: 'Chương cuối tổng hợp bốn chiến lược chính và bốn chiến lược phụ của cuốn sách, cùng lời nhắn thực tế: bạn có thể tự làm, nhưng phải tính đến phí giao dịch của việc quay vòng danh mục cao. Phần phụ lục chủ yếu là hướng dẫn nguồn dữ liệu và quảng bá dịch vụ của Zacks, nên chỉ tóm lược.',
  sections: [
    { icon: '🎯', title: 'Điều ta biết', blocks: [
      { t: 'p', x: 'Nhà phân tích được trả nhiều nhưng khuyến nghị của họ thiên lệch và dù điều chỉnh vẫn không phải người chọn cổ phiếu xuất sắc. Không bao giờ dựa vào báo cáo của <b>một</b> nhà phân tích. Muốn hưởng lợi phải: (1) lượng hóa thông tin trong báo cáo; (2) xem nó thay đổi thế nào theo thời gian và giữa nhiều nhà phân tích.' }
    ] },
    { icon: '1️⃣', title: 'Bốn chiến lược chính', blocks: [
      { t: 'table', head: ['Chiến lược', 'Cách làm', 'Lý do hiệu quả'], rows: [
        ['1. Điều chỉnh ước tính lợi nhuận', 'Mua khi đồng thuận năm hiện tại tăng >3% trong 30 ngày; chỉ mua công ty dự báo có lãi; nâng phải do doanh thu; bán khi bị hạ', 'Analyst creep; độ trễ giá của tổ chức'],
        ['2. Bất ngờ lợi nhuận', 'Mua công ty vượt đồng thuận và ước tính mới nhất, kiểm tra chất lượng và bất ngờ doanh thu; bán khi kém', 'Post-earnings drift; cockroach effect'],
        ['3. Zacks Rank', 'Mua hạng #1, đủ số vị thế, bán khi hạng xuống, tái cân bằng quý', 'Dự đoán điều chỉnh và bất ngờ'],
        ['4. Piggybacking', 'Mua cổ phiếu có điểm khuyến nghị đồng thuận cải thiện thuộc nhóm 10% hàng đầu; bán sau 1 tháng nếu không tiếp tục được nâng', 'Hoạt động bán hàng của môi giới']
      ] },
      { t: 'widget', name: 'zm-final-checklist', title: 'Danh sách kiểm tra cuối: chiến lược của bạn đã đủ kỷ luật chưa?' },
      { t: 'tip', x: 'Hai chiến lược hiệu quả nhất theo tác giả: điều chỉnh ước tính lợi nhuận và Zacks Rank.' }
    ] },
    { icon: '➕', title: 'Bốn chiến lược phụ', blocks: [
      { t: 'list', items: ['<b>Bị bỏ rơi:</b> ưu tiên cổ phiếu có độ phủ nhà phân tích đang tăng; tránh cổ phiếu độ phủ đang giảm.', '<b>Tăng trưởng dài hạn:</b> mua khi LTG được nâng; tránh LTG >30%/năm.', '<b>Định giá:</b> mua P/E và PEG thấp; tránh forward P/E >65; cần kiên nhẫn.', '<b>Bất định lợi nhuận:</b> ưu tiên công ty có ước tính nhất quán.'] }
    ] },
    { icon: '📌', title: 'Tự làm được không? Lưu ý thực tế', blocks: [
      { t: 'p', x: 'Tác giả khẳng định bạn có thể tự làm nhờ dữ liệu ước tính, bất ngờ và khuyến nghị nay có miễn phí trên nhiều trang web, và phí giao dịch đã giảm. Nhưng phải đủ vốn để chịu chi phí giao dịch cao do vòng quay lớn, kể cả khi mỗi lệnh chưa đến 10 USD.' },
      { t: 'widget', name: 'zm-breakeven-fee', title: 'Chi phí hòa vốn: vốn tối thiểu để phí không ăn mất lợi thế' },
      { t: 'h3', x: 'Phụ lục (tóm lược)' },
      { t: 'list', items: ['<b>Phụ lục I–II:</b> hướng dẫn đăng ký dịch vụ và đọc "Zacks Snapshot" — thông tin dịch vụ của công ty tác giả, đã cũ.', '<b>Phụ lục III:</b> nơi tìm dữ liệu nghiên cứu của nhà phân tích (các trang web thời điểm 2002).', '<b>Phụ lục IV:</b> chiến lược Dow dựa trên bất định lợi nhuận: chọn 10 cổ phiếu Dow có chỉ số bất định thấp nhất, giữ cả năm; back-test cho thấy vượt Dow khoảng 4,5%/năm, thắng trong khoảng 75% số danh mục kiểm thử.'] },
      { t: 'warn', x: 'Đây là sách xuất bản năm 2003 của người điều hành một công ty bán dịch vụ dữ liệu; kết quả là của chính họ và chưa tính phí. Các công cụ, trang web và quy tắc nêu trong phụ lục đã thay đổi. Hãy dùng sách để hiểu <i>logic</i> (điều chỉnh ước tính, bất ngờ, thiên lệch nhà phân tích), và tự kiểm chứng bằng dữ liệu hiện hành trước khi đầu tư. Không phải lời khuyên đầu tư.' },
      { t: 'widget', name: 'zm-dow-strategy', title: 'Chiến lược Dow: lợi nhuận vượt trội gộp 15 năm' }
    ] }
  ],
  summary: ['Không dùng một nhà phân tích; lượng hóa và theo dõi thay đổi.', 'Bốn chiến lược chính: điều chỉnh ước tính, bất ngờ, Zacks Rank, piggybacking.', 'Bốn chiến lược phụ: bị bỏ rơi, LTG, định giá, bất định.', 'Vòng quay cao: phí giao dịch quyết định hiệu quả thực.'],
  cards: [['Hai chiến lược tốt nhất?', 'Điều chỉnh ước tính và Zacks Rank'], ['Ngưỡng mua điều chỉnh ước tính?', 'Tăng >3% trong 30 ngày'], ['Piggybacking mua khi?', 'Thay đổi điểm khuyến nghị thuộc 10% hàng đầu'], ['Bán piggybacking khi?', 'Sau 1 tháng nếu không được nâng thêm'], ['Bốn chiến lược phụ?', 'Bị bỏ rơi, LTG, định giá, bất định'], ['Rào cản thực tế?', 'Phí giao dịch do vòng quay cao'], ['Tránh LTG trên?', '30%/năm'], ['Tránh forward P/E trên?', '~65']],
  quiz: [
    { q: 'Chiến lược nào tác giả cho là hiệu quả nhất?', o: ['Piggybacking và bị bỏ rơi', 'Điều chỉnh ước tính và Zacks Rank', 'Định giá và Fed', 'Chỉ khuyến nghị'], a: 1, e: 'Theo kết luận.' },
    { q: 'Rủi ro thực tế lớn nhất khi áp dụng các chiến lược này:', o: ['Phí giao dịch cao', 'Không có dữ liệu', 'Luật cấm', 'Thuế bằng 0'], a: 0, e: 'High turnover.' },
    { q: 'Nguyên tắc chung của cuốn sách:', o: ['Tin một nhà phân tích', 'Lượng hóa và xem thay đổi nhiều nhà phân tích', 'Chỉ nghe CEO', 'Mua theo tin đồn'], a: 1, e: 'Aggregate and track.' },
    { q: 'Nên đọc cuốn sách này như thế nào?', o: ['Làm theo mọi con số', 'Dùng để hiểu logic, tự kiểm chứng dữ liệu hiện hành', 'Bỏ qua cảnh báo', 'Chỉ đọc phụ lục'], a: 1, e: 'Dated, vendor-authored.' }
  ],
  match: [['Strategy 1', 'Điều chỉnh ước tính'], ['Strategy 3', 'Zacks Rank'], ['Strategy 4', 'Piggybacking'], ['Neglect', 'Độ phủ phân tích'], ['Data mining', 'Rủi ro của back-test']]
});
