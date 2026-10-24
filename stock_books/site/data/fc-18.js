window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 18,
  title: 'Cách công ty phát hành chứng khoán',
  intro: 'Công ty trẻ huy động vốn mạo hiểm, rồi phát hành cổ phiếu lần đầu ra công chúng (IPO), sau đó có thể phát hành thêm hoặc bán riêng lẻ. Chương này đi qua vai trò của nhà bảo lãnh, chi phí phát hành, và vì sao cổ phiếu IPO thường bị định giá thấp.',
  sections: [
    { icon: '🌱', title: 'Vốn mạo hiểm', blocks: [
      { t: 'p', x: 'Công ty mới thường huy động vốn mạo hiểm (venture capital) để đi tới ngày IPO. Hợp đồng được thiết kế để tránh xung đột lợi ích:' },
      { t: 'list', items: ['Nhà sáng lập phải giữ tỷ lệ sở hữu lớn → cùng chiều lợi ích với nhà đầu tư và là tín hiệu tin tưởng.', 'Tài trợ chia <b>giai đoạn</b> ("dây xích ngắn"): công ty phải chứng minh ở các cột mốc để nhận vốn tiếp.', 'Nhà đầu tư mạo hiểm thường có ghế trong hội đồng quản trị.'] }
    ] },
    { icon: '🚀', title: 'Phát hành lần đầu ra công chúng (IPO)', blocks: [
      { t: 'p', x: 'IPO là lần bán cổ phiếu đầu tiên cho công chúng. Một <b>nhà bảo lãnh</b> (underwriter) mua cổ phiếu từ công ty rồi bán lại, giúp lập bản cáo bạch (prospectus) mô tả công ty và triển vọng.' },
      { t: 'table', head: ['Loại chi phí', 'Nội dung'], rows: [['Chi phí trực tiếp', 'Phí pháp lý, hành chính, in ấn, đăng ký'], ['Chênh lệch bảo lãnh (spread)', 'Giá bảo lãnh bán ra công chúng trừ giá mua từ công ty'], ['Định giá thấp (underpricing)', 'Cổ phiếu thường bán dưới giá trị thực; thể hiện qua mức tăng bất thường ngày giao dịch đầu']] },
      { t: 'widget', name: 'fc-ipo', title: 'Chi phí của một đợt IPO: spread, phí và định giá thấp' },
      { t: 'tip', x: 'Underpricing là chi phí ẩn lớn: nếu công ty bán 10 triệu cổ phiếu ở 20 USD nhưng ngày đầu giá lên 26 USD, công ty "để lại trên bàn" 60 triệu USD.' }
    ] },
    { icon: '🏛️', title: 'Phát hành chung và bán riêng lẻ', blocks: [
      { t: 'list', items: ['<b>Phát hành chung (general cash offer):</b> công ty đã niêm yết bán thêm cổ phiếu hoặc trái phiếu ra công chúng. Giá cổ phiếu thường giảm khi thông báo (thị trường hiểu ban quản lý cho rằng cổ phiếu đang đắt).', '<b>Quyền mua ưu tiên (rights issue):</b> cổ đông hiện hữu được quyền mua trước theo tỷ lệ.', '<b>Bán riêng lẻ (private placement):</b> bán trực tiếp cho vài tổ chức lớn; ít thủ tục và chi phí, ít thanh khoản hơn.'] },
      { t: 'widget', name: 'fc-rights', title: 'Phát hành quyền mua: giá trị một quyền' },
      { t: 'warn', x: 'Quy định phát hành, thủ tục SEC và khái niệm cụ thể (shelf registration, Rule 144A...) khác nhau theo quốc gia; hãy tham khảo luật hiện hành nơi bạn hoạt động.' }
    ] }
  ],
  summary: ['Vốn mạo hiểm giữ nhà sáng lập cùng chiều lợi ích và tài trợ theo giai đoạn.', 'IPO có chi phí trực tiếp, spread và underpricing.', 'Phát hành thêm thường làm giá cổ phiếu giảm.', 'Bán riêng lẻ rẻ hơn nhưng kém thanh khoản.'],
  cards: [['Venture capital?', 'Vốn đầu tư vào công ty mới nhiều rủi ro'], ['IPO?', 'Lần phát hành cổ phiếu đầu ra công chúng'], ['Underwriter?', 'Nhà bảo lãnh phát hành'], ['Prospectus?', 'Bản cáo bạch'], ['Underwriting spread?', 'Chênh lệch giá mua–bán của nhà bảo lãnh'], ['Underpricing?', 'Bán dưới giá trị thật, giá tăng ngày đầu'], ['Rights issue?', 'Cổ đông hiện hữu được mua trước'], ['Private placement?', 'Bán trực tiếp cho tổ chức']],
  quiz: [
    { q: 'Công ty bán 5 triệu cp ở 30; ngày đầu đóng cửa 36. Tiền "để trên bàn":', o: ['5 triệu', '15 triệu', '30 triệu', '180 triệu'], a: 2, e: '5tr × 6.' },
    { q: 'Vì sao vốn mạo hiểm giải ngân theo giai đoạn?', o: ['Để dễ tính thuế', 'Để buộc công ty chứng minh trước khi nhận thêm vốn', 'Vì quy định', 'Không có lý do'], a: 1, e: 'Dây xích ngắn.' },
    { q: 'Spread của nhà bảo lãnh là:', o: ['Lãi vay', 'Chênh lệch giá mua của công ty và giá bán ra công chúng', 'Cổ tức', 'Thuế'], a: 1, e: 'Phí bảo lãnh.' },
    { q: 'Bán riêng lẻ khác phát hành chung ở:', o: ['Bán cho vài tổ chức, ít thủ tục', 'Phải niêm yết', 'Chi phí cao hơn', 'Có bản cáo bạch công khai'], a: 0, e: 'Đặc trưng.' }
  ],
  match: [['IPO', 'Phát hành lần đầu'], ['Underwriter', 'Nhà bảo lãnh'], ['Prospectus', 'Bản cáo bạch'], ['Rights', 'Quyền mua ưu tiên'], ['Underpricing', 'Bán thấp giá trị']]
});
