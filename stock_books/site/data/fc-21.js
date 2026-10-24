window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 21,
  title: 'Sáp nhập, mua lại và quyền kiểm soát doanh nghiệp',
  intro: 'Khi ban điều hành kém hiệu quả mà hội đồng quản trị không thay, thị trường có thể thay thế họ qua sáp nhập, mua lại, mua lại bằng vốn vay (LBO) hay giành quyền ủy nhiệm. Chương này hỏi: khi nào sáp nhập hợp lý, và lợi ích hay chi phí được đo thế nào?',
  sections: [
    { icon: '🏰', title: 'Thị trường quyền kiểm soát', blocks: [
      { t: 'list', items: ['<b>Cuộc chiến ủy quyền (proxy contest):</b> cổ đông bất mãn vận động phiếu để thay hội đồng quản trị.', '<b>Mua lại/sáp nhập:</b> công ty khác mua công ty mục tiêu.', '<b>LBO (mua lại bằng vốn vay):</b> nhóm nhà đầu tư tư nhân mua công ty, thường dùng nhiều nợ.', '<b>Bán bớt hoạt động:</b> bán một phần cho công ty khác.'] },
      { t: 'p', x: 'Ba cách mua: sáp nhập toàn bộ tài sản–nợ vào công ty mua; mua cổ phiếu mục tiêu (tender offer); mua từng tài sản.' }
    ] },
    { icon: '✅', title: 'Động cơ hợp lý và đáng ngờ', blocks: [
      { t: 'table', head: ['Hợp lý', 'Đáng ngờ'], rows: [['Lợi thế quy mô', 'Đa dạng hóa rủi ro (cổ đông tự đa dạng hóa rẻ hơn)'], ['Tích hợp dọc', 'Tăng EPS giả tạo (tăng trưởng EPS nhờ chênh lệch P/E)'], ['Kết hợp nguồn lực bổ sung', 'Lý do "kinh doanh" mơ hồ'], ['Thay quản lý yếu', ''], ['Dùng tiền dư', '']] },
      { t: 'key', x: 'Sáp nhập tạo giá trị khi hai công ty gộp lại đáng giá hơn tổng hai công ty riêng rẽ. <b>Lợi ích = V(A+B) − (V_A + V_B). Chi phí = Tiền trả − V_B (phần bù trả cho mục tiêu). NPV sáp nhập = Lợi ích − Chi phí (phần bù).</b> Chỉ nên làm nếu NPV dương.' },
      { t: 'widget', name: 'fc-merger', title: 'Giá trị sáp nhập: lợi ích, phần bù và NPV cho bên mua' },
      { t: 'warn', x: 'Khi trả bằng cổ phiếu, chi phí phụ thuộc vào giá trị cổ phiếu <i>sau</i> sáp nhập, vì bên bán chia sẻ cả lợi ích lẫn rủi ro.' }
    ] },
    { icon: '⚔️', title: 'Chiến thuật và LBO', blocks: [
      { t: 'list', items: ['Bên mua thiện chí đàm phán với ban điều hành; bên mua thù địch chào mua thẳng với cổ đông.', 'Phòng thủ: "thuốc độc" (poison pill), ban quản trị phân kỳ, "hiệp sĩ trắng" (white knight), "dù vàng" (golden parachute).', 'LBO dùng nợ lớn, trả bằng dòng tiền và bán tài sản; giảm chi phí đại diện nhưng tăng rủi ro vỡ nợ.'] },
      { t: 'tip', x: 'Sáp nhập thường có lợi cho cổ đông bên bị mua (nhận phần bù) nhiều hơn bên mua. Bằng chứng cho thấy bên mua thường chỉ hòa vốn.' }
    ] }
  ],
  summary: ['Bốn cách thay đổi quyền kiểm soát: proxy, mua lại, LBO, bán bớt hoạt động.', 'Sáp nhập hợp lý khi V(AB) > V_A + V_B.', 'NPV bên mua = lợi ích − phần bù.', 'Động cơ đa dạng hóa và tăng EPS giả tạo đáng ngờ.'],
  cards: [['Proxy contest?', 'Giành phiếu ủy quyền thay hội đồng quản trị'], ['Tender offer?', 'Chào mua cổ phiếu trực tiếp'], ['LBO?', 'Mua lại bằng vốn vay'], ['Poison pill?', 'Biện pháp chống thâu tóm'], ['White knight?', 'Bên mua thân thiện được mời'], ['Golden parachute?', 'Gói bồi thường cho giám đốc bị mất việc'], ['Lợi ích sáp nhập?', 'V(AB) − (V_A + V_B)'], ['Chi phí sáp nhập?', 'Tiền trả − V_B']],
  quiz: [
    { q: 'V_A = 100, V_B = 50, V_AB = 165, trả cho B 60 tiền mặt. NPV bên mua:', o: ['5', '10', '15', '55'], a: 0, e: 'Lợi ích 15 − phần bù 10 = 5.' },
    { q: 'Động cơ nào đáng ngờ?', o: ['Quy mô', 'Tích hợp dọc', 'Đa dạng hóa để giảm rủi ro cho cổ đông', 'Thay quản lý yếu'], a: 2, e: 'Cổ đông tự đa dạng hóa.' },
    { q: 'LBO nghĩa là:', o: ['Mua bằng nhiều nợ', 'Mua bằng tiền mặt thuần', 'Bán công ty', 'Sáp nhập hai công ty'], a: 0, e: 'Leveraged buyout.' },
    { q: 'Poison pill dùng để:', o: ['Hoan nghênh thâu tóm', 'Chống thâu tóm', 'Tăng cổ tức', 'Giảm thuế'], a: 1, e: 'Phòng thủ.' }
  ],
  match: [['Proxy contest', 'Cuộc chiến ủy quyền'], ['LBO', 'Mua lại bằng vốn vay'], ['Tender offer', 'Chào mua trực tiếp'], ['Synergy', 'Giá trị cộng hưởng'], ['White knight', 'Hiệp sĩ trắng']]
});
