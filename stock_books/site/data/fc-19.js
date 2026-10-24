window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 19,
  title: 'Thuê tài sản (Phụ lục B)',
  intro: 'Thuê là một cách tiếp cận tài sản mà không mua đứt. Chương phụ lục này phân biệt thuê hoạt động và thuê tài chính, tác động kế toán và thuế, rồi hướng dẫn quyết định thuê hay mua bằng dòng tiền chiết khấu.',
  sections: [
    { icon: '🔑', title: 'Hai loại hợp đồng thuê', blocks: [
      { t: 'table', head: ['', 'Thuê hoạt động (operating lease)', 'Thuê tài chính (financial lease)'], rows: [
        ['Thời hạn', 'Ngắn so với tuổi thọ tài sản', 'Dài, gần hết tuổi thọ kinh tế'],
        ['Hủy hợp đồng', 'Thường được phép', 'Thường không hủy được'],
        ['Bảo trì, bảo hiểm', 'Bên cho thuê chịu', 'Bên thuê chịu'],
        ['Bản chất', 'Dịch vụ sử dụng tài sản', 'Tương tự khoản vay có tài sản bảo đảm'],
        ['Kế toán', 'Chi phí thuê hằng năm', 'Ghi nhận cả tài sản và nghĩa vụ nợ']
      ] },
      { t: 'tip', x: 'Bên cho thuê (lessor) sở hữu tài sản; bên thuê (lessee) trả tiền thuê định kỳ. Thuê tài chính thực chất là vay mua tài sản: nghĩa vụ trả tiền thuê cố định như nghĩa vụ nợ.' }
    ] },
    { icon: '🧾', title: 'Thuế và kế toán', blocks: [
      { t: 'list', items: ['Tiền thuê thường được trừ thuế cho bên thuê; bên cho thuê được khấu hao thuế tài sản.', 'Lợi ích thuế của thuê đến từ chênh lệch thuế suất giữa bên thuê và bên cho thuê: bên không thể dùng hết khấu hao có thể "bán" lợi ích đó qua hợp đồng thuê.', 'Cơ quan thuế kiểm tra hợp đồng có thực sự là thuê hay là mua trả góp trá hình.', 'Theo chuẩn kế toán, thuê tài chính phải đưa lên bảng cân đối như tài sản và nợ.'] }
    ] },
    { icon: '⚖️', title: 'Thuê hay mua?', blocks: [
      { t: 'key', x: 'So sánh dòng tiền sau thuế: thuê tránh khoản đầu tư ban đầu nhưng phải trả tiền thuê; mua phải bỏ vốn nhưng được khấu hao, giá trị thanh lý, lá chắn thuế. Chiết khấu <b>dòng tiền chênh lệch</b> bằng <b>lãi suất vay sau thuế</b> (vì thuê giống vay). <b>NPV cho thuê (bên thuê) = Tiền mua tránh được − PV(tiền thuê sau thuế) − PV(mất lá chắn thuế khấu hao & thanh lý).</b> Thuê khi NPV > 0.' },
      { t: 'widget', name: 'fc-lease', title: 'Thuê hay mua? NPV của việc thuê' },
      { t: 'warn', x: 'Chiết khấu bằng lãi vay sau thuế vì nghĩa vụ thuê tương đương nợ. Nhiều lỗi phổ biến đến từ việc chiết khấu bằng WACC hoặc quên lá chắn thuế khấu hao.' }
    ] }
  ],
  summary: ['Thuê hoạt động ngắn, hủy được; thuê tài chính dài, như vay.', 'Thuê tài chính được ghi nhận như nợ trên bảng cân đối.', 'Quyết định thuê hay mua dựa vào NPV dòng tiền chênh lệch, chiết khấu bằng lãi vay sau thuế.'],
  cards: [['Lessor?', 'Bên cho thuê'], ['Lessee?', 'Bên thuê'], ['Operating lease?', 'Thuê ngắn hạn, hủy được'], ['Financial lease?', 'Thuê dài hạn, như khoản vay'], ['Chiết khấu khi thuê hay mua?', 'Lãi vay sau thuế'], ['Lá chắn thuế khấu hao?', 'Khấu hao × thuế suất'], ['Bên thuê được gì?', 'Không cần bỏ vốn ban đầu'], ['Rủi ro thuê tài chính?', 'Nghĩa vụ cố định như nợ']],
  quiz: [
    { q: 'Hợp đồng thuê dài, không hủy được, gần hết tuổi thọ tài sản là:', o: ['Thuê hoạt động', 'Thuê tài chính', 'Bán', 'Cho mượn'], a: 1, e: 'Financial lease.' },
    { q: 'Khi so sánh thuê và mua, tỷ lệ chiết khấu thường là:', o: ['WACC', 'Lãi vay sau thuế', 'Lãi tiết kiệm', '0%'], a: 1, e: 'Thuê giống vay.' },
    { q: 'NPV thuê dương nghĩa là:', o: ['Nên mua', 'Nên thuê', 'Không khác biệt', 'Dừng dự án'], a: 1, e: 'Thuê có lợi.' },
    { q: 'Thuê tài chính trên bảng cân đối được ghi nhận như:', o: ['Chỉ chi phí', 'Tài sản và nợ', 'Cổ tức', 'Doanh thu'], a: 1, e: 'Capital lease.' }
  ],
  match: [['Lessor', 'Bên cho thuê'], ['Lessee', 'Bên thuê'], ['Operating lease', 'Thuê hoạt động'], ['Financial lease', 'Thuê tài chính'], ['Tax shield', 'Giảm thuế nhờ khấu hao']]
});
