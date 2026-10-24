window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dtb = BOOK_DATA.dtb || { chapters: [] };
BOOK_DATA.dtb.chapters.push({
  n: 4,
  title: 'Quy tắc giao dịch',
  intro: 'Giao dịch trong ngày có chi phí cố định cho mỗi lệnh, dù lãi hay lỗ. Chương này tính các chi phí (hoa hồng, "một phần tám vô hình", thuế, lãi vay), quy tắc đặt lệnh dừng (stop), và một ví dụ minh họa tâm trí của người đọc băng trong một buổi giao dịch.',
  sections: [
    { icon: '💸', title: 'Chi phí cố định của mỗi giao dịch', blocks: [
      { t: 'list', items: ['Hoa hồng.', '<b>"Một phần tám vô hình" (invisible eighth):</b> chênh lệch giữa giá mua (ask) và giá bán (bid) — ngay khi vào lệnh bạn đã "lỗ" nó.', 'Thuế khi bán.', 'Phí sàn; thêm lãi vay nếu giữ qua đêm.'] },
      { t: 'key', x: 'Lời cảnh báo: "Tôi hòa vốn, chỉ mất hoa hồng" là tự lừa mình. Lỗ hoa hồng ở giao dịch đầu nghĩa là giao dịch sau phải kiếm <b>gấp đôi</b> số đó mới có lãi. Bài toán không chỉ là hạn chế lỗ mà là <b>bù chi phí càng sớm càng tốt</b>.' },
      { t: 'widget', name: 'dt-cost', title: 'Chi phí một vòng mua–bán: bao nhiêu điểm cần để hòa vốn?' },
      { t: 'tip', x: 'Ngày nay chênh lệch giá mua–bán và phí đã khác rất nhiều (thập phân hóa, phí gần bằng 0 ở nhiều sàn), nhưng nguyên tắc <b>phải tính chi phí vào từng giao dịch</b> thì vẫn đúng.' }
    ] },
    { icon: '🛑', title: 'Lệnh dừng (stop order)', blocks: [
      { t: 'steps', items: ['Khi đã có lãi vài điểm, đặt lệnh dừng ở giá vốn thực để dù chuyện gì xảy ra cũng không phải trả thêm tiền — nhưng đừng đặt quá sát vì cần chừa chỗ cho nhịp điều chỉnh nhỏ.', 'Người đọc băng có kinh nghiệm phân biệt được đảo chiều xu hướng và nhịp chỉnh nhỏ; khi nhận thấy đảo chiều thì thoát hoặc đảo vị thế ngay, không chờ bị quét lệnh dừng.', 'Bắt buộc đặt lệnh dừng nếu phải rời màn hình giá dù chốc lát, hoặc khi dữ liệu bị gián đoạn: "hành xử như người bị mù tạm thời".', 'Giữ qua đêm cần lệnh dừng vì có thể có sự kiện bất ngờ trước giờ mở cửa.', 'Mức dừng: giới giao dịch lão luyện thường đồng thuận <b>mức lỗ gộp tối đa khoảng 2 điểm</b> mỗi giao dịch (tùy ý); chặt hơn nếu xác định được "điểm kháng cự" — mức giá thị trường từng quay đầu sau nhịp điều chỉnh.'] },
      { t: 'p', x: 'Ví dụ trong sách: một nhà giao dịch mua 500 cổ phiếu Sugar rồi đi ăn trưa không đặt lệnh dừng. Bữa trưa tốn 25 xu... và 5.000 USD khi giá giảm 10 điểm và môi giới gọi bù ký quỹ.' },
      { t: 'widget', name: 'dt-stop', title: 'Đặt lệnh dừng: rủi ro tối đa và tỷ lệ lãi/lỗ' },
      { t: 'warn', x: 'Lệnh dừng không bảo đảm khớp ở giá mong muốn khi giá nhảy (gap) hoặc thị trường mất thanh khoản.' }
    ] },
    { icon: '🎼', title: 'Ví dụ: một buổi trưa của người đọc băng', blocks: [
      { t: 'p', x: 'Tác giả mô tả: đầu giờ trưa thị trường đứng yên, giao dịch lô nhỏ. Reading cho dấu hiệu bị bán ra (500 @ 143¾, 500 @ 143⅝...) sau khi vừa phân phối ở 144; người đọc băng chọn Reading để bán khống, lệnh dừng ngay trên đỉnh cũ (144½–⅝). Trong khi đó anh thoát khỏi vị thế mua Union Pacific vì thấy cả thị trường yếu dần.' },
      { t: 'steps', items: ['Cả thị trường thiếu sinh lực: giảm kỳ vọng ở vị thế mua.', 'Consolidated Gas bất ngờ xuất hiện giao dịch dồn dập đi xuống (163¾ → 161½ → 160): "chiếc kéo cắt sợi chỉ" của thị trường.', 'Gas vừa giảm thì toàn bộ danh sách trượt theo → bán khống Reading theo giá thị trường.', 'Tin phán quyết của Tòa án Tối cao về Gas tới ở 1:10 PM nhưng băng giá "nói" trước nhiều phút: người đọc băng vào lệnh trước khi tin tới.'] },
      { t: 'key', x: 'Bài học: tín hiệu để vào hoặc thoát vị thế của cổ phiếu này có thể đến từ một cổ phiếu khác; dấu hiệu rõ nhất là sức mạnh hay yếu của thị trường khi hồi và khi điều chỉnh, và khi mọi cổ phiếu cùng "hòa nhịp".' },
      { t: 'widget', name: 'dt-shorting', title: 'Kế hoạch bán khống: điểm vào, dừng, mục tiêu' }
    ] }
  ],
  summary: ['Mỗi giao dịch có chi phí cố định; phải tính vào giá vốn.', 'Lệnh dừng là hàng rào bảo vệ khi bạn rời băng hoặc giữ qua đêm.', 'Mức lỗ tối đa quen dùng khoảng 2 điểm (tùy ý).', 'Tín hiệu có thể đến từ cổ phiếu khác ngoài cổ phiếu bạn giao dịch.'],
  cards: [['Invisible eighth?', 'Chênh lệch mua–bán là chi phí ẩn'], ['Hòa vốn trừ hoa hồng nghĩa là?', 'Thực tế đã lỗ'], ['Lệnh dừng khi nào bắt buộc?', 'Khi rời màn hình hoặc giữ qua đêm'], ['Mức lỗ tối đa quen dùng?', '~2 điểm mỗi giao dịch'], ['Điểm kháng cự?', 'Mức giá nơi thị trường từng quay đầu'], ['Chi phí 1 vòng gồm?', 'Hoa hồng, chênh lệch giá, thuế, phí, lãi vay'], ['Ví dụ Sugar?', 'Không có lệnh dừng khi đi ăn trưa'], ['Tin tức trước hay băng trước?', 'Băng thường báo trước vài phút']],
  quiz: [
    { q: 'Hoa hồng 1 chiều là 10 USD, 100 cổ phiếu. Chi phí hoa hồng 2 chiều tương đương bao nhiêu điểm?', o: ['0,1', '0,2', '1', '2'], a: 1, e: '20/100.' },
    { q: 'Khi rời màn hình giá nên:', o: ['Đặt lệnh dừng', 'Mua thêm', 'Bỏ qua', 'Đóng cửa sổ'], a: 0, e: 'Protect yourself.' },
    { q: 'Lệnh dừng đặt quá sát giá vốn:', o: ['Dễ bị quét bởi nhịp chỉnh nhỏ', 'Luôn an toàn', 'Không ảnh hưởng', 'Giảm phí'], a: 0, e: 'Allow for small reaction.' },
    { q: 'Tín hiệu bán khống Reading trong ví dụ đến từ:', o: ['Gas giảm dồn dập kèm thị trường yếu', 'Tin đồn', 'Cổ tức', 'Lãi suất'], a: 0, e: 'Foreign stock clue.' }
  ],
  match: [['Invisible eighth', 'Chi phí chênh lệch mua–bán'], ['Stop order', 'Lệnh dừng'], ['Margin call', 'Yêu cầu bổ sung ký quỹ'], ['Resistance', 'Mức giá quay đầu'], ['Fixed charges', 'Chi phí cố định mỗi lệnh']]
});
