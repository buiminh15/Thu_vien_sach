window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 22,
  title: 'Quản lý tài chính quốc tế',
  intro: 'Công ty hoạt động xuyên biên giới phải đối mặt với tỷ giá. Chương này giải thích tỷ giá giao ngay và kỳ hạn, bốn quan hệ giữa tỷ giá, lãi suất và lạm phát, phòng ngừa rủi ro tỷ giá và ngân sách vốn quốc tế.',
  sections: [
    { icon: '💱', title: 'Thị trường ngoại hối', blocks: [
      { t: 'p', x: '<b>Tỷ giá</b> là lượng đồng tiền này cần để mua một đơn vị đồng tiền khác. <b>Tỷ giá giao ngay (spot)</b> áp dụng cho giao dịch tức thời; <b>tỷ giá kỳ hạn (forward)</b> cho giao dịch tại ngày tương lai đã định.' },
      { t: 'widget', name: 'fc-fx', title: 'Đổi tiền: tỷ giá giao ngay và kỳ hạn' }
    ] },
    { icon: '🔗', title: 'Bốn quan hệ cơ bản', blocks: [
      { t: 'table', head: ['Lý thuyết', 'Nội dung'], rows: [
        ['Ngang giá sức mua (PPP)', 'Thay đổi tỷ giá bù đắp chênh lệch lạm phát giữa hai nước (đúng trung bình về dài hạn)'],
        ['Hiệu ứng Fisher quốc tế', 'Lãi thực giống nhau → lãi danh nghĩa chênh nhau do lạm phát kỳ vọng. Đừng vay chỗ lãi thấp: đồng tiền ở đó thường mạnh lên'],
        ['Ngang giá lãi suất (IRP)', 'Chênh lệch tỷ giá kỳ hạn/giao ngay = chênh lệch lãi suất (do arbitrage)'],
        ['Tỷ giá kỳ hạn là dự báo?', 'Tỷ giá kỳ hạn là ước tính tương đối không thiên lệch về tỷ giá giao ngay tương lai']
      ] },
      { t: 'key', x: 'IRP: <b>F/S = (1 + r_nội địa) / (1 + r_nước ngoài)</b> (tỷ giá yết theo đơn vị nội tệ cho một ngoại tệ). PPP: <b>S₁/S₀ = (1 + i_nội địa) / (1 + i_nước ngoài)</b>.' },
      { t: 'widget', name: 'fc-irp', title: 'Ngang giá lãi suất: tính tỷ giá kỳ hạn từ lãi suất' }
    ] },
    { icon: '🛡️', title: 'Phòng ngừa và ngân sách vốn quốc tế', blocks: [
      { t: 'list', items: ['<b>Phòng ngừa (hedge):</b> khóa tỷ giá cho khoản phải thu/phải trả ngoại tệ bằng hợp đồng kỳ hạn hoặc vay–gửi ngoại tệ.', 'Ngân sách vốn quốc tế: dự báo dòng tiền theo ngoại tệ và chiết khấu bằng chi phí vốn của đồng tiền đó, rồi chuyển về nội tệ theo tỷ giá kỳ vọng (hoặc ngược lại — kết quả NPV phải nhất quán).', 'Rủi ro thêm: rủi ro chính trị, kiểm soát vốn, thuế khác nhau.'] },
      { t: 'widget', name: 'fc-hedge', title: 'Khóa tỷ giá khoản phải thu ngoại tệ' },
      { t: 'warn', x: 'Công thức tỷ giá, cách yết giá (trực tiếp hay gián tiếp) khác nhau theo thị trường; hãy xác định rõ "đồng nào là đơn vị gốc" trước khi tính.' }
    ] }
  ],
  summary: ['Spot áp dụng ngay, forward cho ngày tương lai.', 'PPP, Fisher quốc tế, IRP, forward là ước tính tỷ giá tương lai.', 'Hedge để khóa tỷ giá.', 'Ngân sách vốn quốc tế cần nhất quán về đồng tiền.'],
  cards: [['Spot rate?', 'Tỷ giá giao ngay'], ['Forward rate?', 'Tỷ giá kỳ hạn'], ['PPP?', 'Ngang giá sức mua'], ['Fisher quốc tế?', 'Lãi danh nghĩa chênh = lạm phát chênh'], ['IRP?', 'Ngang giá lãi suất'], ['Hedge?', 'Phòng ngừa rủi ro tỷ giá'], ['Arbitrage?', 'Kiếm lời phi rủi ro từ chênh lệch giá'], ['Rủi ro chính trị?', 'Rủi ro bị can thiệp, quốc hữu hóa']],
  quiz: [
    { q: 'Spot 1,10; lãi nội địa 5%, ngoại 3%. Forward một năm (IRP):', o: ['1,08', '1,10', '1,12', '1,15'], a: 2, e: '1,10×1,05/1,03.' },
    { q: 'Nước A lạm phát 8%, B 2%. Theo PPP, đồng tiền A sẽ:', o: ['Mạnh lên', 'Yếu đi', 'Không đổi', 'Bằng 0'], a: 1, e: 'Mất giá bù lạm phát.' },
    { q: 'Hợp đồng kỳ hạn dùng để:', o: ['Tăng rủi ro', 'Khóa tỷ giá', 'Trả thuế', 'Chia cổ tức'], a: 1, e: 'Hedge.' },
    { q: 'Vay ở nơi lãi thấp có thật sự rẻ?', o: ['Luôn rẻ', 'Không nhất thiết: đồng tiền đó thường mạnh lên', 'Luôn đắt', 'Không liên quan'], a: 1, e: 'Fisher quốc tế.' }
  ],
  match: [['Spot', 'Tỷ giá ngay'], ['Forward', 'Tỷ giá kỳ hạn'], ['PPP', 'Ngang giá sức mua'], ['IRP', 'Ngang giá lãi suất'], ['Hedge', 'Phòng ngừa']]
});
