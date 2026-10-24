window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 12,
  title: 'Đóng giao dịch (quan trọng như mở giao dịch)',
  intro: 'Biết khi nào vào chỉ là một nửa. Wyckoff nhận ra phần lớn giao dịch thua của ông là do không đóng đúng lúc nhịp ngắn hạn đạt đỉnh. Chương này dạy nhận biết điểm "culmination" và cách chuẩn bị bản thân.',
  sections: [
    { icon: '🚪', title: 'Vào đúng chưa đủ: phải ra đúng', blocks: [
      { t: 'p', x: 'Wyckoff định nghĩa đọc băng là nghệ thuật xác định xu hướng tức thời của giá. Nhưng ông phát hiện một phần lớn giao dịch thua đến từ việc <b>không đóng ở điểm kết thúc của xu hướng tức thời</b>.' },
      { t: 'p', x: 'Ví dụ New York Central: thị trường tăng nhưng có xu hướng điều chỉnh, áp lực dồn lên Reading và Steel. Khi ông thấy việc bán hai cổ phiếu này ngừng lại, ông mua Central ở 137¼; trong 10 phút giá lên 139 với lệnh mua 5.000 cổ phiếu ồn ào — "như mồi nhử" người ngoài. Chỗ đó ông nên bán. Giá quả đã chỉnh, rồi đáy nhịp chỉnh thì bán tháo bùng ở nơi khác kéo cả thị trường xuống. Lãi của ông chỉ bằng một phần nhỏ so với khả năng.' },
      { t: 'key', x: 'Kết luận: kết quả tốt nhất khi đọc băng chủ động là <b>nhận ra nhịp khi nó xảy ra, vào khi nó bắt đầu và ra khi nó đạt đỉnh</b>. Cách này thường khiến bạn không bắt hết một nhịp của cổ phiếu sôi động nhất trong ngày, nhưng tạo ra nhiều khoản lãi nhỏ. Nếu sau khi bán, nhịp chỉnh kết thúc mà dấu hiệu vẫn tăng thì mua lại; nếu không còn tăng thì chuyển sang tìm cơ hội bán khống.' },
      { t: 'widget', name: 'dt-exit-signal', title: 'Dấu hiệu đóng giao dịch: bid ồn ào, khối lượng bùng nổ' }
    ] },
    { icon: '📈', title: 'Chuyển động nở rộng khi đến cuối', blocks: [
      { t: 'p', x: 'Sách minh họa hình ảnh các bước di chuyển nở rộng dần: khối lượng, mức hoạt động và số giao dịch đều tăng, cuối cùng tạo thị trường khá sôi động. Nguyên lý đúng với nhịp lớn, ví dụ đợt tăng ngoạn mục của Union Pacific vài phiên cuối tháng 8/1909.' },
      { t: 'list', items: ['Sau khi đóng giao dịch, băng sẽ cho biết trong nhịp chỉnh tiếp theo bạn có nên mua lại cổ phiếu đó hay có cổ phiếu khác tốt hơn.', 'Đôi khi cổ phiếu chuẩn bị cho một nhịp hai ba chặng trước khi thành cổ phiếu dẫn đầu — một điểm tinh tế đòi hỏi luyện tập.'] }
    ] },
    { icon: '🙋', title: 'Lời nhắn về bạn', blocks: [
      { t: 'p', x: 'Kết quả phụ thuộc hoàn toàn vào chính bạn. Mỗi người phải tự tìm phương pháp: thứ này là thuốc của người này có thể là độc của người khác, và "kiến thức sách vở" vô ích nếu không thử trên thị trường thật. Hãy đọc mọi thứ có thể: dù chỉ một ý tưởng cũng đáng thời gian và tiền bạc.' },
      { t: 'list', items: ['Nhiều người tin vào một điểm duy nhất (như khối lượng lên xuống) và gọi đó là đọc băng; người khác dựa vào biểu đồ rồi nói mình đọc thị trường; người "đọc băng bằng miệng" gọi từng giao dịch — tất cả chỉ ở bề mặt.', 'Phần lớn người giao dịch lười học vì học đòi hỏi nhiều giờ làm việc vất vả.', 'Không có người dạy đọc băng có lãi vì thu nhập từ giao dịch vượt xa học phí.', 'Có thành viên sàn nhiều năm chỉ ngồi ở máy ticker trong văn phòng vì cách đó lãi hơn; họ giao dịch từ 5.000 cổ phiếu trở lên.', 'Trở ngại lớn nhất của người mới: <b>"chân lạnh" (cold feet)</b> — dừng lại đúng lúc cần cố gắng hơn khi gặp chuỗi lỗ. Cần xây dựng một "tính cách giao dịch" không bị đánh bại bởi thất bại, luôn loại bỏ nỗi sợ, tham lam, lo lắng.'] },
      { t: 'widget', name: 'dt-streak', title: 'Chuỗi lỗ liên tiếp: bạn chịu được bao nhiêu lần?' },
      { t: 'tip', x: '"Đọc băng là công việc nặng nhọc" — Wyckoff thừa nhận. Phần thưởng lớn hơn cho người làm chủ được nó.' },
      { t: 'warn', x: 'Đừng coi đây là lời hứa về lợi nhuận: giao dịch trong ngày rủi ro cao, đa số người mới thua lỗ. Nội dung dùng để hiểu tư duy kỷ luật, không phải khuyến nghị.' }
    ] }
  ],
  summary: ['Đóng giao dịch quan trọng như mở giao dịch.', 'Thoát khi nhịp tức thời đạt đỉnh, thường kèm bid ồn ào hoặc khối lượng bùng nổ.', 'Phương pháp phải do chính bạn xây qua thực hành.', '"Chân lạnh" sau chuỗi lỗ là trở ngại lớn nhất.'],
  cards: [['Culmination?', 'Điểm đỉnh của xu hướng tức thời'], ['Nên bán khi?', 'Thấy bid ồn ào như mồi nhử, dấu hiệu đỉnh'], ['Sau khi bán?', 'Xem băng để quyết định mua lại hay đổi cổ phiếu'], ['Cold feet?', 'Bỏ cuộc khi gặp chuỗi lỗ'], ['Vì sao ít người dạy đọc băng?', 'Lãi từ giao dịch lớn hơn học phí'], ['Intuitive tape reading?', 'Đọc băng bằng trực giác, không quy tắc rõ ràng'], ['"Nghề" của đầu cơ?', 'Phải học và luyện'], ['Hạn chế khi áp dụng nguyên văn?', 'Sách của 1919']],
  quiz: [
    { q: 'Phần lớn giao dịch thua của Wyckoff đến từ:', o: ['Vào quá sớm', 'Không đóng ở điểm kết thúc nhịp', 'Quá nhiều cổ phiếu', 'Phí cao'], a: 1, e: 'Failure to close at culmination.' },
    { q: 'Bid ồn ào lớn gần đỉnh có thể là:', o: ['Mồi nhử người ngoài', 'Tín hiệu mua mạnh', 'Cổ tức', 'Không có nghĩa'], a: 0, e: 'Bait for outside buyers.' },
    { q: 'Trở ngại lớn của người mới là:', o: ['Cold feet', 'Vốn quá nhiều', 'Dữ liệu thừa', 'Hoa hồng bằng 0'], a: 0, e: 'Quit after losses.' },
    { q: 'Sau khi bán nhịp tăng, nếu dấu hiệu vẫn tăng thì:', o: ['Mua lại sau nhịp chỉnh', 'Không bao giờ vào lại', 'Chờ cuối năm', 'Bán khống ngay'], a: 0, e: 'Re-enter.' }
  ],
  match: [['Culmination', 'Điểm đỉnh nhịp'], ['Cold feet', 'Chùn bước'], ['Bait bid', 'Bid như mồi nhử'], ['Intuition', 'Trực giác đọc băng'], ['Re-entry', 'Vào lại sau nhịp chỉnh']]
});
