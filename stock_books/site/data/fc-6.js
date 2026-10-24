window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 6,
  title: 'Quản lý vốn lưu động và hoạch định ngắn hạn',
  intro: 'Công ty có thể có dự án tốt mà vẫn hết tiền tuần sau. Chương này nói về vốn lưu động ròng, chu kỳ chuyển đổi tiền mặt, mối liên hệ giữa tài trợ dài hạn và ngắn hạn, ngân sách tiền mặt và các nguồn vay ngắn hạn.',
  sections: [
    { icon: '🔄', title: 'Vốn lưu động và chu kỳ tiền mặt', blocks: [
      { t: 'key', x: '<b>Vốn lưu động ròng = Tài sản lưu động − Nợ ngắn hạn.</b> Nó tồn tại vì có độ trễ giữa lúc mua nguyên liệu và lúc thu tiền từ khách. <b>Chu kỳ chuyển đổi tiền mặt (CCC) = Kỳ tồn kho + Kỳ thu tiền − Kỳ trả tiền nhà cung cấp.</b>' },
      { t: 'widget', name: 'fc-ccc', title: 'Chu kỳ chuyển đổi tiền mặt' },
      { t: 'p', x: 'Giữ nhiều tài sản lưu động có chi phí nắm giữ (vốn chôn, hao hụt, lỗi thời) nhưng giảm chi phí thiếu hụt (mất đơn hàng, đứt chuỗi sản xuất). Nhà quản lý phải cân bằng hai chi phí này.' }
    ] },
    { icon: '🔗', title: 'Liên hệ giữa tài trợ dài hạn và ngắn hạn', blocks: [
      { t: 'p', x: 'Công ty phát hành nhiều vốn dài hạn (nợ dài hạn, cổ phiếu, giữ lại lợi nhuận) có thể dư tiền thường trực; công ty vay dài hạn ít thì luôn là con nợ ngắn hạn. Đa số chọn "điểm giữa": tài trợ tài sản cố định và một phần tài sản lưu động bằng vốn dài hạn; mùa cao điểm vay thêm, mùa thấp điểm đầu tư tiền dư.' },
      { t: 'tip', x: 'Nguyên tắc: tài sản dài hạn nên được tài trợ bằng nguồn dài hạn; vay ngắn hạn để tài trợ nhu cầu tạm thời. Vay ngắn tài trợ dài có nguy cơ không tái tục được khi cần.' }
    ] },
    { icon: '🗓️', title: 'Ngân sách tiền mặt và kế hoạch tài trợ ngắn hạn', blocks: [
      { t: 'steps', items: ['Dự báo thu tiền từ khoản phải thu (độ trễ theo chính sách bán chịu).', 'Cộng các dòng tiền vào khác; trừ mọi khoản chi dự kiến (mua hàng, lương, thuế, lãi, cổ tức).', 'Cộng số dư đầu kỳ để ra số dư cuối kỳ trước khi tài trợ.', 'Nếu thấp hơn mức tối thiểu cần giữ, tìm nguồn vay; nếu thừa, đầu tư ngắn hạn.', 'Lặp lại với các giả định khác nhau (thử – sai).'] },
      { t: 'widget', name: 'fc-cashbudget', title: 'Ngân sách tiền mặt 4 quý: thiếu hụt và nhu cầu vay' },
      { t: 'p', x: 'Nguồn tài trợ ngắn hạn gồm: hạn mức tín dụng không bảo đảm của ngân hàng, vay có thế chấp bằng khoản phải thu hoặc hàng tồn kho, và phát hành thương phiếu (commercial paper) với công ty lớn, uy tín cao.' }
    ] },
    { icon: '🏦', title: 'Chi phí thực của khoản vay ngân hàng', blocks: [
      { t: 'key', x: 'Lãi suất thực tế có thể cao hơn lãi niêm yết vì phí cam kết, yêu cầu số dư bù đắp (compensating balance) hoặc lãi trả trước. <b>Lãi hiệu dụng = Lãi trả / Tiền thực nhận</b>, rồi quy về năm.' },
      { t: 'widget', name: 'fc-bankloan', title: 'Chi phí thực của vay ngắn hạn: lãi trả trước và số dư bù đắp' }
    ] }
  ],
  summary: ['Vốn lưu động ròng nảy sinh từ độ trễ thu–chi.', 'CCC = kỳ tồn kho + kỳ thu tiền − kỳ trả tiền.', 'Chính sách tài trợ dài hạn quyết định mô hình vay/dư tiền ngắn hạn.', 'Ngân sách tiền mặt phát hiện thiếu hụt trước khi nó xảy ra.', 'Chi phí vay thực khác lãi niêm yết.'],
  cards: [['Net working capital?', 'TSLĐ − Nợ ngắn hạn'], ['CCC?', 'Kỳ tồn kho + Kỳ thu − Kỳ trả'], ['Commercial paper?', 'Thương phiếu ngắn hạn công ty lớn phát hành'], ['Compensating balance?', 'Số dư tối thiểu bắt buộc ở ngân hàng'], ['Carrying cost?', 'Chi phí giữ tài sản lưu động'], ['Shortage cost?', 'Chi phí do thiếu hàng/tiền'], ['Cash budget dùng để?', 'Dự báo thiếu/dư tiền'], ['Line of credit?', 'Hạn mức tín dụng']],
  quiz: [
    { q: 'Kỳ tồn kho 60, kỳ thu 40, kỳ trả 30. CCC:', o: ['30', '70', '100', '130'], a: 1, e: '60+40−30.' },
    { q: 'Tăng kỳ trả tiền nhà cung cấp (giữ nguyên các kỳ khác) thì CCC:', o: ['Tăng', 'Giảm', 'Không đổi', 'Bằng 0'], a: 1, e: 'Trừ đi.' },
    { q: 'Vay 100, lãi 8% trả trước. Tiền nhận thực:', o: ['100', '92', '108', '8'], a: 1, e: '100 − 8.' },
    { q: 'Ngân sách tiền mặt dùng để:', o: ['Tính thuế', 'Phát hiện thiếu hụt tiền sớm', 'Định giá cổ phiếu', 'Tính ROE'], a: 1, e: 'Kế hoạch ngắn hạn.' }
  ],
  match: [['CCC', 'Thời gian tiền bị "chôn"'], ['Commercial paper', 'Vay ngắn hạn công ty lớn'], ['Compensating balance', 'Số dư giữ ở ngân hàng'], ['Cash budget', 'Dự báo thu chi tiền'], ['Carrying cost', 'Giữ tồn kho tốn kém']]
});
