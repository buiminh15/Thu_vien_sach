window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 9,
  title: 'Áp dụng Zacks Rank hiệu quả',
  intro: 'Zacks Rank được cho là hữu ích với nhiều trường phái đầu tư (giá trị, dài hạn...), nhưng có hạn chế, đặc biệt là vòng quay danh mục rất cao. Chương này đưa ra sáu bước để cá nhân áp dụng mà không bị phí giao dịch ăn mất lợi nhuận.',
  sections: [
    { icon: '🧑‍🤝‍🧑', title: 'Mỗi trường phái dùng thế nào?', blocks: [
      { t: 'p', x: '<b>Nhà đầu tư giá trị</b> khó nhất ở hai việc: ước lượng giá trị hợp lý và chờ "chất xúc tác" để thị trường nhận ra. Zacks Rank đóng vai trò chỉ báo <i>thời điểm</i>: trong các cổ phiếu bị định giá thấp, cái nào có hạng #1 hoặc #2 sẽ sớm được nhà đầu tư tổ chức mua (bất ngờ lợi nhuận là chất xúc tác). Kết hợp hạng #1 với P/E hoặc PEG thấp.' },
      { t: 'p', x: '<b>Nhà đầu tư dài hạn</b> mua rồi giữ cổ phiếu của công ty tốt; có thể dùng hạng để chọn thời điểm vào hoặc cảnh báo khi hạng xấu đi quá lâu.' },
      { t: 'key', x: 'Kết hợp tốt nhất theo tác giả: Zacks #1 + bộ lọc định giá hợp lý (P/E hoặc PEG không cao).' }
    ] },
    { icon: '⚠️', title: 'Hạn chế', blocks: [
      { t: 'list', items: ['Khoảng một nửa số cổ phiếu hạng #1 đầu tháng sẽ không còn hạng #1 cuối tháng → vòng quay cao.', 'Phí giao dịch và chênh lệch giá mua–bán có thể ăn mất lợi thế nếu bạn giao dịch quá nhiều.', 'Hạng #3 chỉ báo cổ phiếu "ngang thị trường" trong 1–3 tháng.', 'Không phải mô hình chọn cổ phiếu dài hạn.'] },
      { t: 'widget', name: 'zm-turnover', title: 'Chi phí giao dịch khi danh mục quay vòng nhiều lần mỗi năm' }
    ] },
    { icon: '6️⃣', title: 'Sáu bước áp dụng', blocks: [
      { t: 'steps', items: ['<b>Giữ đủ số vị thế</b> để chi phí hoa hồng dưới 2%/năm.', '<b>Cân đối ngành:</b> bám theo tỷ trọng ngành của danh sách hạng #1.', '<b>Chọn cổ phiếu #1 hợp lý:</b> mới được thêm vào danh sách #1, lợi nhuận tăng hữu cơ, vừa được nâng khuyến nghị, vừa báo lợi nhuận tốt hoặc nâng dự báo, vừa tăng cổ tức, có giám đốc mua cổ phiếu hoặc công ty mua lại cổ phiếu, định giá không quá đắt.', '<b>Không canh thời điểm thị trường:</b> quyết định mức tiền muốn đầu tư rồi mua dần theo từng đợt (dollar-cost averaging).', '<b>Quy tắc bán:</b> bán nếu sau 3 tháng hạng ≤ #3; bán trước 3 tháng nếu hạng xuống #4–#5, báo bất ngờ âm hoặc hạ dự báo; bán nếu ước tính nhà phân tích sắp bị hạ do tin tức; bán nếu cổ phiếu kém S&P 500 hơn 35%.', '<b>Bán một phần và tái cân bằng:</b> bán tối đa 25% khi có nhiều nội gián bán hoặc bị hạ khuyến nghị; đừng "bình quân giá xuống"; chỉ chốt lời và tái cân bằng đều tỷ trọng mỗi quý.'] },
      { t: 'widget', name: 'zm-sell-rules', title: 'Có nên bán không? Đối chiếu các quy tắc bán' },
      { t: 'warn', x: 'Quy tắc stop-loss 35% tương đối thể hiện rõ hơn khi bạn có ít hơn 50 cổ phiếu; danh mục đa dạng giảm tầm quan trọng của từng khoản.' },
      { t: 'tip', x: 'Zacks #1 dự kiến vượt thị trường <i>ngắn hạn</i>. Nếu giá giảm sau khi mua, cổ phiếu không hấp dẫn hơn mà kém hấp dẫn đi vì thị trường đang phớt lờ điều chỉnh ước tính.' }
    ] }
  ],
  summary: ['Hạng #1 + định giá hợp lý là tổ hợp tốt.', 'Một nửa hạng #1 đổi sau một tháng → vòng quay cao.', 'Sáu bước: số vị thế, ngành, chọn, thời điểm, bán, tái cân bằng.', 'Đừng bình quân giá xuống với hạng #1.'],
  cards: [['Zacks Rank vai trò với nhà đầu tư giá trị?', 'Chỉ báo thời điểm/chất xúc tác'], ['Một nửa hạng #1 thay đổi trong?', 'Một tháng'], ['Quy tắc phí?', 'Hoa hồng dưới 2%/năm'], ['Bán nếu hạng sau 3 tháng?', '≤ #3'], ['Bán nếu kém S&P bao nhiêu?', '> 35%'], ['Bán một phần tối đa?', '25%'], ['Tái cân bằng?', 'Hằng quý, đều tỷ trọng'], ['Có nên bình quân giá xuống?', 'Không']],
  quiz: [
    { q: 'Mục tiêu của bước 1 là:', o: ['Giữ chi phí hoa hồng dưới 2%/năm', 'Tăng giao dịch', 'Chọn ngành', 'Dự đoán thị trường'], a: 0, e: 'Kiểm soát phí.' },
    { q: 'Cổ phiếu hạng #4 trước 3 tháng thì:', o: ['Giữ', 'Mua thêm', 'Bán', 'Bán khống ngay'], a: 2, e: 'Quy tắc bán.' },
    { q: 'Bình quân giá xuống với hạng #1 đang lỗ:', o: ['Nên làm', 'Không nên', 'Bắt buộc', 'Giảm thuế'], a: 1, e: 'Thị trường đang phớt lờ.' },
    { q: 'Kết hợp tốt nhất với hạng #1:', o: ['P/E hoặc PEG hợp lý', 'Tin đồn', 'Giá mục tiêu', 'Quảng cáo'], a: 0, e: 'Value screen.' }
  ],
  match: [['Dollar-cost averaging', 'Mua dần theo đợt'], ['Turnover', 'Vòng quay danh mục'], ['35% rule', 'Quy tắc cắt lỗ tương đối'], ['Rebalance', 'Đều lại tỷ trọng'], ['PEG', 'P/E chia tăng trưởng']]
});
