window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 23,
  title: 'Chạm đáy',
  intro: 'Báo chí khiến cả hệ thống tài chính trông như sắp sụp, nhưng thực tế còn nhiều công ty vững. Cố vấn chỉ cho Linda các dấu hiệu của đáy (cổ tức, doanh thu, tâm lý), nhắc rằng không có "đáy lớn duy nhất". Gabriel hoảng loạn đòi vàng và chạy về núi; Linda khoe bảng tính thu hút và quyết định mua có kỷ luật.',
  sections: [
    { icon: '📰', title: 'Tin xấu nhiều hơn thực tế xấu', blocks: [
      { t: 'p', x: 'Báo chí, trước đây nói giảm tin xấu, giờ đảo ngược: dồn dập chuyện lạm dụng nhà đầu tư và ngân hàng cho vay CEO "bẩn". Nhưng thực tế: nhiều vụ việc xảy ra từ nhiều tháng, nhiều năm trước, và <b>cứ mỗi công ty sụp lại có vài công ty lành mạnh</b> (ngân hàng, bảo hiểm, môi giới cũng vậy).' },
      { t: 'list', items: ['Hầu hết nhà đầu tư và nhà phân tích nghĩ "tất cả" môi giới/ngân hàng sẽ phá sản và "không bao giờ" hồi phục; có người nói chủ nghĩa tư bản "đã chết".', 'Thực tế: Mỹ vẫn là nước mạnh nhất về tri thức, Nhật, Đức, Canada, Nga, Brazil, Anh vẫn có nhiều nhân tài; khủng hoảng dạy bài học làm xã hội công bằng, mạnh hơn.', 'Những ai mua cổ phiếu tài chính có vốn mạnh, danh mục cho vay ít rủi ro nhất đã gấp đôi, gấp ba tiền theo thời gian.', 'Rút tiền khỏi tài khoản môi giới thất bại gặp trục trặc: chậm trễ, mất phần vượt hạn mức bảo hiểm, bảo hiểm không bù lỗ do gian lận hoặc phán quyết trọng tài chưa trả.'] },
      { t: 'key', x: 'Những ngày giao dịch bị tạm dừng hay tắc nghẽn chiếm tít lớn; hàng chục ngày giao dịch bình thường thì bị bỏ qua. Cảm giác hỗn loạn thường lớn hơn thực tế hỗn loạn.' }
    ] },
    { icon: '🧭', title: 'Dấu hiệu của đáy', blocks: [
      { t: 'p', x: 'Trên chuyến taxi về, cố vấn miễn cưỡng nêu một số "điều kiện" khi chạm đáy. Ông nhấn mạnh: chỉ có lịch sử để dựa, và các sự kiện hiện tại đang phá vỡ nhiều kỷ lục.' },
      { t: 'h3', x: '1. Cổ tức' },
      { t: 'p', x: 'Ở đỉnh bong bóng không ai quan tâm tới cổ tức; gần đáy cũng thế vì nhà đầu tư quá sốc. Nhưng giá cổ phiếu rất thấp khiến cả cổ tức nhỏ cũng cho <b>tỷ suất cao</b>: cổ tức 1 USD/năm trên cổ phiếu 100 USD là 1%, nếu cổ phiếu còn 10 USD là 10%. Dù cổ tức bị cắt một nửa vẫn 5% — gấp năm lần trước. Thấy cảnh này khắp nơi thì thường gần đáy thật.' },
      { t: 'widget', name: 'cp-div-yield', title: 'Tỷ suất cổ tức khi giá giảm' },
      { t: 'h3', x: '2. Giá trị trên doanh thu' },
      { t: 'p', x: 'Khi nhiều công ty chỉ đủ sống, lợi nhuận không đáng tin; hãy xem doanh thu. Mùa thu 2002, công ty S&P 500 trung bình giá 1,17 lần doanh thu — vẫn đắt. Ở đáy điển hình, cổ phiếu rẻ khi ≤ 0,7 lần doanh thu; khi hoảng loạn, nên chờ ≤ 0,5 lần hoặc thấp hơn. Ví dụ: cổ phiếu 10 USD nên có ít nhất 20 USD doanh thu trên mỗi cổ phiếu.' },
      { t: 'widget', name: 'cp-price-sales', title: 'Giá/doanh thu: cổ phiếu này rẻ chưa?' },
      { t: 'h3', x: '3. Các dấu hiệu khác' },
      { t: 'list', items: ['Mức tiền mặt cao trong quỹ tương hỗ cổ phiếu (thường ≥ 10% tài sản).', 'Khối lượng giao dịch cực điểm.', 'Tâm lý bi quan quá mức.', 'Điều kiện kinh tế tuyệt vọng.', 'Hành động lớn, ngoạn mục của chính phủ.'] },
      { t: 'warn', x: 'Đây là "kinh nghiệm" lịch sử, không phải công thức chắc chắn. Chính ví dụ trong chương cho thấy quỹ tương hỗ phải tiêu hết tiền mặt chỉ để đáp ứng rút vốn, nên tỷ lệ tiền mặt không tăng ngay ở đáy.' }
    ] },
    { icon: '🚌', title: 'Không có "đáy lớn duy nhất"', blocks: [
      { t: 'p', x: 'Linda tự trách đã bỏ lỡ đáy. Cố vấn: bạn đang tìm "chén thánh". Mỗi nhóm tài sản chạm đáy ở thời điểm khác nhau; cổ phiếu tiện ích trong Đại suy thoái chạm đáy năm <b>1942</b> — gần 10 năm sau cổ phiếu công nghiệp. Trái phiếu chính phủ chạm đáy lâu trước cổ phiếu.' },
      { t: 'steps', items: ['Xếp mọi tài sản theo chất lượng và tính thanh khoản, từ cao xuống thấp.', 'Dự đoán thứ tự bật lên: tín phiếu Kho bạc → trái phiếu/nợ trung hạn Kho bạc → trái phiếu doanh nghiệp chất lượng cao → cổ phiếu ưu đãi của công ty mạnh → cổ phiếu phổ thông của chính các công ty đó → đầu cơ (trái phiếu rác, cổ phiếu penny) cuối cùng.', 'Trái phiếu chuyển đổi: hạng cao thì bật lên cùng nhóm trái phiếu chất lượng; hạng thấp mất nhiều thời gian hơn.'] },
      { t: 'tip', x: 'Ví dụ xe buýt đưa đón ở sân bay: nếu lỡ chuyến đầu tiên, còn chuyến sau; nếu lỡ cả chuyến bay thì bắt chuyến tiếp theo, có thể đắt hơn, nhưng vẫn tới nơi. Nhiều tài sản tốt có nhiều đáy.' },
      { t: 'p', x: 'Diễn biến: giao dịch kỷ lục trong thời gian dài, nhưng chỉ số hầu như không đi đâu — "đầu hàng lớn" mà không giảm thêm; đó là điều làm các guru canh thị trường vấp. Người bán cuối cùng gồm: nhà đầu tư bám đến phút chót, người cần tiền cứu doanh nghiệp, và cả người bán chỉ vì thấy mình là người cuối còn giữ. Bất kể ra sao, khi các chỉ số tiến gần đáy luôn có lực mua tương đương.' },
      { t: 'p', x: 'Chính phủ các nước đua nhau tuyên bố kích thích (Nhật: "nỗi đau chưa hết nhưng đã đến lúc chữa lành"); thị trường phớt lờ, các đợt hồi đều sụp, chỉ số dao động quanh đáy trong nhiều tháng.' }
    ] },
    { icon: '🪙', title: 'Gabriel và đòi hỏi vàng', blocks: [
      { t: 'p', x: 'Gabriel gọi Johnston hoảng loạn: giá nhà, ngân hàng, bảo hiểm, chính phủ đều sắp sụp như Argentina; ông thấy người biểu tình rầm rộ khắp Wall Street, đám đông ở ngân hàng Los Angeles. Kinh nghiệm Argentina: mỗi lần mọi người nói "không thể tệ hơn" thì nó tệ hơn (vỡ nợ lớn nhất lịch sử → phá giá lớn nhất lịch sử → ngân hàng "tạm" đóng cửa nuốt luôn tiền → xã hội sụp đổ, bạo lực, ma túy chiếm thành phố). Ông mất ba phần tư tiền gửi đô la tại ngân hàng Mỹ ở Argentina.' },
      { t: 'list', items: ['Gabriel đòi ủy ban "đừng cứu tiền nữa mà cứu mạng người", đưa gia đình về vùng núi Appalachians.', 'Ông cho rằng Kho bạc, quyền chọn, quỹ tương hỗ đều vô giá trị khi hệ thống ngừng hoạt động; chỉ có <b>vàng thỏi, đồng tiền vàng</b> (không tin tiền cổ) giữ giá trị trao đổi.'] },
      { t: 'key', x: 'Johnston không đồng ý: Mỹ ít phụ thuộc hơn Argentina vào vốn, thương mại và ngân hàng nước ngoài; đợt giảm nhanh, chính phủ đã chuyển trọng tâm sang cải cách thực chất, đô la ổn định; các sự kiện đang khớp với kịch bản ít bi quan hơn của Tamara. Vàng tăng giá nhưng phản ánh <i>niềm tin rằng hỗn loạn xã hội là tất yếu</i>, không phải bản thân sự hỗn loạn. Việc đóng cửa thị trường là tạm thời, không phải vĩnh viễn.' },
      { t: 'p', x: 'Ông thừa nhận Gabriel đúng ở điểm: <b>đã đến lúc không còn mua quyền chọn bán và quỹ đảo ngược, mà là quay lại trái phiếu doanh nghiệp chất lượng cao và cổ phiếu phổ thông — nhưng chờ những cú "dip" lớn</b>. Cơ hội lớn nhất ở những "quả táo tốt" trong các ngành bị đánh nát, bao gồm cả công nghệ: công ty có bằng sáng chế quý, thuộc không gian không dây, công nghệ sinh học, cáp quang nhưng chao đảo vì sai lầm tài chính; hoặc công ty có bảng cân đối hoàn hảo nhưng bị bán vì "hoảng loạn theo liên tưởng" (cùng ngành với công ty đã sụp).' },
      { t: 'warn', x: 'Điều kiện then chốt trong sách: phải luôn giữ một phần tiền an toàn và chỉ mua theo từng giai đoạn cho đến khi có xác nhận chắc chắn về phục hồi kinh tế.' }
    ] },
    { icon: '📈', title: 'Bảng tính của Linda: ba pha lãi suất', blocks: [
      { t: 'p', x: 'Trong bữa tối ngày lễ, Linda hỏi ý kiến cha về việc quay lại cổ phiếu. Cô cho ông xem bảng tính Excel: các khoản đầu tư, ngày đáo hạn, giá mua, giá hiện tại, lãi/lỗ. Johnston ngạc nhiên thấy cô còn giữ trái phiếu Kho bạc dài hạn dù cố vấn và Dulles khuyên tránh — và nay lãi vốn lớn.' },
      { t: 'p', x: 'Lý do: Linda tìm ra biểu đồ lãi suất thập niên 1930 trong cuốn sổ biểu đồ cũ của Fed. Ba pha:' },
      { t: 'steps', items: ['<b>Pha 1:</b> lãi suất tụt mạnh (giảm phát và Fed cố giảm lãi suất để đỡ cú sốc cổ phiếu).', '<b>Pha 2:</b> lãi suất bất ngờ vọt lên — lãi tín phiếu 3 tháng tăng hơn 6 lần (từ ~0,5% lên 3%), lãi trái phiếu Kho bạc 20 năm vượt đỉnh trước Crash, lãi trái phiếu rác chạm 11%; giá trái phiếu sụp.', '<b>Pha 3:</b> lãi suất lại giảm về mức bình thường, đó là điểm kết thúc thực sự của cơn hoảng loạn; thời điểm mua trái phiếu dài hạn tốt nhất là cuối Pha 2 hoặc đầu Pha 3.'] },
      { t: 'widget', name: 'cp-rate-phases', title: 'Ba pha lãi suất thập niên 1930: giá trái phiếu đi đâu?' },
      { t: 'p', x: 'Bảng tính khiến Johnston choáng: tài sản Linda và Gabriel nay lớn hơn của vợ chồng ông. Ông thú nhận mình mất nhiều vì giữ cổ phiếu UCBS đến cùng và vì tự gây quỹ cho ủy ban bằng tiền cá nhân. Linda thừa nhận tỷ lệ thua trên quyền chọn bán gần 70%, nhưng 30% thắng gồm vài "home run" giúp tài trợ lần sau; hơn hết "mình chơi theo hướng thị trường đi xuống và nó đã đi xuống". Nếu làm vậy trong thị trường tăng, cô sẽ chỉ đổ tiền vào cống.' },
      { t: 'tip', x: 'Johnston khuyên: bắt đầu nhỏ (10–20% của khối tài sản), chia đợt vì "bạn không phải mua hết một lần". Linda dự định 10% cổ phiếu phổ thông và 20% trái phiếu chuyển đổi: nếu cổ phiếu giảm vẫn có lãi, nếu cổ phiếu tăng vẫn được dự phần. Một lời nhắc: 80% quyền chọn hết hạn vô giá trị.' },
      { t: 'widget', name: 'cp-stage-buy', title: 'Chia đợt mua: chia vốn thành các lần' }
    ] }
  ],
  summary: ['Tin xấu phóng đại; vẫn nhiều công ty vững, mua cổ phiếu tài chính khỏe ở đáy sinh lời.', 'Dấu hiệu đáy: tỷ suất cổ tức tăng vọt, giá/doanh thu ≤ 0,5–0,7, tâm lý bi quan cực độ, khối lượng đột biến.', 'Không có một đáy duy nhất; mỗi nhóm tài sản chạm đáy một lúc; phục hồi theo thứ tự chất lượng.', 'Gabriel đúng ở chỗ thị trường đã đến lúc chuyển từ vị thế bán sang mua; sai ở dự báo sụp đổ xã hội.', 'Ba pha lãi suất thập niên 1930: mua trái phiếu dài hạn cuối pha 2/đầu pha 3.'],
  cards: [['Tỷ suất cổ tức 1 USD trên 10 USD?', '10%'], ['Dấu hiệu giá/doanh thu rẻ?', '≤ 0,7 (hoảng loạn: ≤ 0,5)'], ['S&P 500 mùa thu 2002 giá/doanh thu?', '1,17'], ['Tiện ích chạm đáy khi nào?', '1942'], ['Thứ tự bật lên?', 'Tín phiếu → Kho bạc → trái phiếu chất lượng → ưu đãi → cổ phiếu → đầu cơ'], ['Pha 2 lãi suất 1930s?', 'Vọt lên, giá trái phiếu sụp'], ['Điểm kết thúc hoảng loạn?', 'Pha 3: lãi suất về bình thường'], ['Vàng theo Johnston phản ánh?', 'Niềm tin hỗn loạn tất yếu'], ['Tỷ lệ quyền chọn hết hạn vô giá trị?', 'Khoảng 80%']],
  quiz: [
    { q: 'Cổ tức 2 USD/năm, giá 40 USD. Tỷ suất:', o: ['2%', '5%', '8%', '20%'], a: 1, e: '2/40.' },
    { q: 'Cổ phiếu 10 USD, doanh thu 12 USD/cp. Giá/doanh thu:', o: ['0,5', '0,83', '1,2', '2'], a: 1, e: '10/12.' },
    { q: 'Theo cố vấn, cổ phiếu tiện ích trong Đại suy thoái chạm đáy:', o: ['1929', '1932', '1942', '1952'], a: 2, e: 'Gần 10 năm sau công nghiệp.' },
    { q: 'Cuối pha 2, bạn nên mua trái phiếu dài hạn vì:', o: ['Giá sắp giảm thêm', 'Lãi suất sắp về bình thường nên giá tăng', 'Lãi suất sắp tăng nữa', 'Không có lý do'], a: 1, e: 'Pha 3.' },
    { q: 'Gabriel đúng về điều nào?', o: ['Xã hội sẽ sụp đổ', 'Đến lúc quay lại trái phiếu chất lượng và cổ phiếu', 'Vàng là nơi duy nhất', 'Chính phủ phá sản'], a: 1, e: 'Johnston ghi nhận.' }
  ],
  match: [['Tỷ suất cổ tức', 'Cổ tức/giá'], ['Giá/doanh thu', 'Giá cổ phiếu/doanh thu mỗi cp'], ['Pha 3', 'Lãi suất về bình thường'], ['Panic by association', 'Bán vì cùng ngành'], ['Convertible bond', 'Trái phiếu chuyển đổi']]
});
