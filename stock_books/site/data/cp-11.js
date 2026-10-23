window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 11,
  title: 'Thiểu số chiến thắng',
  intro: 'Linda lần đầu nghe cụm "crash profits" trên truyền hình. Cố vấn giải thích khái niệm bán khống, vì sao ông không khuyên đa số nhà đầu tư làm vậy, và cách dùng quỹ chỉ số đảo ngược (reverse index fund) để bảo vệ danh mục khi không bán được cổ phiếu.',
  sections: [
    { icon: '🎯', title: 'Hai mục tiêu: bảo vệ trước, kiếm lời sau', blocks: [
      { t: 'p', x: 'Linda đã bán danh mục của mình và gửi vào quỹ kho bạc, nên đã "cầm máu". Danh mục của ông ngoại 91 tuổi thì chưa bán được: các anh em họ là bác sĩ cho rằng "bán sau khi giảm là đóng cửa chuồng khi ngựa chạy mất"; danh mục toàn cổ phiếu blue-chip lâu năm (Exxon, GM, Philip Morris, IBM...); sắp phải qua thủ tục thừa kế nên chưa có quyền kiểm soát; bán ngay còn phải chịu thuế lãi vốn lớn.' },
      { t: 'key', x: 'Thứ tự ưu tiên của cố vấn: <b>(1) bảo vệ</b> phần cổ phiếu sẽ thừa kế khỏi đợt sụp đổ tiếp theo, <b>(2) gỡ lại</b> khoản lỗ đã mất.' },
      { t: 'widget', name: 'cp-multiple', title: '"Gấp 5 lần" là lãi bao nhiêu phần trăm?' }
    ] },
    { icon: '🩳', title: 'Bán khống (short selling)', blocks: [
      { t: 'steps', items: ['Vay 1.000 cổ phiếu Exxon từ môi giới khi giá là 35 USD và bán ngay → có "khoản có" 35.000 USD trong tài khoản.', 'Giá Exxon giảm còn 15 USD → mua lại 1.000 cổ phiếu hết 15.000 USD để trả cho môi giới.', 'Lợi nhuận ròng 20.000 USD. Nếu giá tăng thì bạn lỗ.'] },
      { t: 'widget', name: 'cp-short', title: 'Lãi/lỗ khi bán khống: giá thay đổi, lỗ có thể vượt vốn?' },
      { t: 'warn', x: 'Rủi ro lớn: giá tăng không có giới hạn trên, nên nếu bạn giữ vị thế mãi, lỗ có thể vượt số tiền ban đầu và bạn có thể bị gọi bổ sung ký quỹ. Cố vấn không khuyên đa số nhà đầu tư bán khống.' },
      { t: 'p', x: 'Linda nói bán khống như "kền kền hưởng lợi trên nỗi đau", phi đạo đức. Cố vấn phản bác: người bán khống tích trữ sức mua, vì sớm muộn họ phải mua lại cổ phiếu. Khi thị trường gấu tới đáy, chính họ là những người đầu tiên mua vào — như "cái khởi động động cơ" cho phục hồi.' }
    ] },
    { icon: '🪞', title: 'Quỹ chỉ số đảo ngược', blocks: [
      { t: 'p', x: 'Giải pháp rủi ro bị giới hạn: quỹ tương hỗ đảo ngược (reverse index fund). Bạn không bao giờ mất quá số tiền đã bỏ ra và không bị gọi ký quỹ. Quỹ chỉ số thường: chỉ số tăng 20%, quỹ tăng 20%. Quỹ đảo ngược: chỉ số giảm 10%, quỹ được thiết kế tăng 10%; chỉ số tăng 20% thì quỹ giảm 20%.' },
      { t: 'list', items: ['Cách hoạt động (trong sách): phần lớn tiền đầu tư vào công cụ an toàn như tín phiếu kho bạc, còn lại vào hợp đồng tương lai/quyền chọn tăng giá khi thị trường giảm, tính toán để luôn đủ tiền mặt bù lỗ.', 'Ví dụ trong sách (năm 2002): Rydex Ursa (đảo ngược S&P 500), Rydex Arktos (đảo ngược Nasdaq 100, biến động mạnh hơn), Profunds (bản sao của Rydex).'] },
      { t: 'table', head: ['Danh mục không bán được là...', 'Cách bù đắp (theo sách)'], rows: [['Chủ yếu blue-chip và cổ phiếu thường', 'Một phần vừa phải vào quỹ đảo ngược S&P 500'], ['Chủ yếu cổ phiếu công nghệ', 'Quỹ đảo ngược Nasdaq 100']] },
      { t: 'warn', x: 'Quỹ đảo ngược theo ngày thường không khớp chính xác 1:1 trong thời gian dài (hiệu ứng phức hợp hằng ngày), phí cao và chỉ phù hợp phòng ngừa ngắn hạn. Tên và điều kiện quỹ trong sách là của 2002; hãy đọc kỹ tài liệu sản phẩm hiện hành.' }
    ] },
    { icon: '🧮', title: 'Năm bước "bảo vệ khỏi sập"', blocks: [
      { t: 'steps', items: ['Tìm hiểu quỹ đảo ngược (tăng khi chỉ số giảm, không thể lỗ quá số tiền đã đầu tư).', 'Xem danh mục còn lại: chủ yếu công nghệ hay blue-chip?', 'Ước lượng rủi ro: danh mục có thể mất khoảng 50%. 100.000 USD → rủi ro 50.000 USD.', 'Quyết định bảo vệ bao nhiêu: bảo vệ toàn bộ rủi ro thì đầu tư xấp xỉ 1:1 vào quỹ; bảo vệ nửa thì 50 xu mỗi 1 USD cổ phiếu.', 'Lấy tiền ở đâu: đừng rút từ phần tiền an toàn; nên bán bớt cổ phiếu — muốn bảo vệ một nửa rủi ro thì bán một phần ba cổ phiếu.'] },
      { t: 'widget', name: 'cp-hedge', title: 'Bảo vệ danh mục bằng quỹ đảo ngược: cần bán bao nhiêu cổ phiếu?' },
      { t: 'tip', x: 'Cùng với phòng thủ này, cố vấn hẹn "tấn công" (kiếm lời từ sụp đổ) sau khi Linda đã yên tâm về phòng thủ — chương sau sẽ nói về công cụ đòn bẩy.' }
    ] }
  ],
  summary: ['Ưu tiên bảo vệ, sau đó mới nghĩ tới gỡ vốn.', 'Bán khống có thể lỗ không giới hạn; quỹ đảo ngược giới hạn rủi ro trong số tiền đầu tư.', 'Người bán khống vẫn có vai trò: mua lại ở đáy.', 'Quỹ đảo ngược giúp bù đắp khi danh mục cổ phiếu giảm.', 'Số tiền bảo vệ nên lấy từ việc bán bớt cổ phiếu, không từ tiền an toàn.'],
  cards: [['Bán khống là gì?', 'Vay cổ phiếu bán trước, mua lại rẻ hơn sau để trả'], ['Rủi ro lớn nhất của bán khống?', 'Lỗ không giới hạn và gọi bổ sung ký quỹ'], ['Quỹ chỉ số đảo ngược khác bán khống ở?', 'Rủi ro chỉ giới hạn trong số tiền đã bỏ ra'], ['"Gấp 5 lần" là lãi bao nhiêu %?', '400%'], ['Vì sao người bán khống hữu ích?', 'Họ phải mua lại cổ phiếu khi thị trường đáy'], ['Mô hình bảo vệ nửa rủi ro cần bán?', 'Một phần ba cổ phiếu để mua quỹ đảo ngược'], ['Danh mục công nghệ nên bảo vệ bằng?', 'Quỹ đảo ngược Nasdaq 100']],
  quiz: [
    { q: 'Giá từ 100 lên 500 là lãi:', o: ['100%', '400%', '500%', '5%'], a: 1, e: '(500−100)/100.' },
    { q: 'Bán khống 1.000 cổ phiếu ở 35 USD, mua lại ở 15 USD, lãi:', o: ['15.000', '20.000', '35.000', '50.000'], a: 1, e: '35.000 − 15.000.' },
    { q: 'Điều đúng về quỹ đảo ngược:', o: ['Rủi ro không giới hạn', 'Không thể lỗ quá số tiền đã đầu tư', 'Chỉ tăng khi thị trường tăng', 'Không có phí'], a: 1, e: 'Giống quỹ tương hỗ thông thường.' },
    { q: 'Theo bước 4 của sách, danh mục 100.000 USD, muốn bảo vệ "một nửa" thì bỏ vào quỹ đảo ngược khoảng:', o: ['10.000', '25.000', '50.000', '100.000'], a: 2, e: 'Rủi ro 50% của 100.000 là 50.000; bảo vệ một nửa theo sách là 50 xu mỗi USD, tức khoảng 50.000.' },
    { q: 'Theo sách, cổ phiếu cần bán để tài trợ bảo vệ nửa rủi ro:', o: ['Một nửa', 'Một phần ba', 'Một phần mười', 'Toàn bộ'], a: 1, e: 'Công thức trong chương.' }
  ],
  match: [['Bán khống', 'Bán trước mua sau'], ['Reverse index fund', 'Tăng khi chỉ số giảm'], ['Rydex Arktos', 'Đảo ngược Nasdaq 100'], ['Ký quỹ', 'Tiền bổ sung khi lỗ'], ['Crash protection', 'Bảo vệ danh mục']]
});
