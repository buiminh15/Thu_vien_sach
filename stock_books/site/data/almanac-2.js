// "Stock Trader's Almanac 2005" – Chương 4–7.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.almanac = BOOK_DATA.almanac || { chapters: [] };
BOOK_DATA.almanac.chapters.push(

{
  n: 4,
  title: 'Mùa vụ trong năm: tháng, quý và các “mùa” rally',
  intro: 'Mỗi tháng có “tính cách” riêng. Chương này đi qua tháng đầu quý, rally/điều chỉnh theo mùa, mùa hè yếu, tháng 9 đáng sợ và tháng 10 “sát thủ gấu”.',
  sections: [
    { icon: '1️⃣', title: 'Tháng đầu quý mạnh nhất', blocks: [
      { t: 'p', x: 'Lịch của các tổ chức phản ánh hoạt động hàng năm/nửa năm/quý nên <b>tháng 1, 4, 7</b> (tháng đầu của ba quý đầu) cho lãi lớn nhất ở Dow và S&P. Quý 4 khác vì dính bán cắt lỗ thuế và làm đẹp danh mục cuối năm.' },
      { t: 'list', items: [
        '<b>Tháng 7</b>: tháng tốt nhất quý 3; có tiền hưu trí vào nửa năm sau; đầu tháng 7 tăng 12/15 lần giai đoạn 1990–2004.',
        '<b>Tháng 6</b>: yếu ở Dow và S&P (kể cả hiệu ứng “bơm danh mục” ngày cuối tháng). Tuần sau triple witching tháng 6 giảm 13/15 năm.',
        '<b>Tháng 8</b>: xưa là tháng tốt nhất (mùa thu hoạch, 1901–1951); nay tệ nhất S&P 15 năm; 1998 sụt 15,1%, 1990 sụt 10%.'
      ] }
    ] },
    { icon: '🍂', title: 'Rally và điều chỉnh cho mọi mùa', blocks: [
      { t: 'table', head: ['Mùa', 'Rally trung bình (Dow, 41 năm)'], rows: [
        ['Đông (đáy 11/12 → đỉnh Q1)', '<b>13,5%</b>'],
        ['Xuân (đáy 2/3 → đỉnh Q2)', '11,3%'],
        ['Thu (đáy 8/9 → đỉnh Q4)', '10,9%'],
        ['Hạ (đáy 5/6 → đỉnh Q3)', '<b>9,4%</b> (yếu nhất)']
      ] },
      { t: 'tip', x: 'Đừng tin “summer rally” là rally mạnh nhất: thực tế nó <b>yếu nhất</b>. Mỗi mùa luôn có rally; nhưng cũng luôn có điều chỉnh — <b>rally trung bình luôn lớn hơn điều chỉnh</b>, đó là lý do thị trường tăng dài hạn.' },
      { t: 'widget', name: 'season-chart', title: 'Rally theo mùa so với điều chỉnh: bấm từng mùa' }
    ] },
    { icon: '🎃', title: 'Tháng 9 và tháng 10', blocks: [
      { t: 'p', x: '<b>Tháng 9</b>: tệ nhất cả Dow, S&P, NASDAQ; quỹ về sau Lao động ra “dọn nhà”. Tuần triple witching tháng 9 nguy hiểm. Chuỗi 4 tháng 9 tốt (+4,2%) kết thúc bằng 5 năm lỗ liên tiếp (−6,9% TB).' },
      { t: 'p', x: '<b>Tháng 10</b>: “tháng ma” (1929, 1987 −23,2%, 1978–79, 1989) nhưng cũng là <b>sát thủ gấu</b>: đáy bear market năm 1946, 1957, 1960, 1962, 1966, 1974, 1987, 1990, 1998, 2002. 6 năm 1998–2003 tăng TB: Dow +5,9%, S&P +5,0%, NASDAQ +6,4%.' },
      { t: 'key', x: 'Từ 1964, 16 lần giảm mùa thu &gt; 10%, 9 lần gây tổn hại chính trong tháng 10. <b>Mua sau “thác nước” cuối Q3/Q4</b> thường tốt cho rally đến tháng 1.' }
    ] }
  ],
  summary: [
    'Tháng đầu của ba quý đầu (1, 4, 7) là mạnh nhất.',
    'Mùa đông rally lớn nhất (13,5%), mùa hè nhỏ nhất (9,4%).',
    'Tháng 9 tệ nhất; tháng 10 tạo đáy nhiều bear market.'
  ],
  cards: [
    ['Ba tháng đầu quý mạnh?', 'Tháng 1, 4, 7.'],
    ['Rally mùa đông TB?', '13,5% (mạnh nhất).'],
    ['Rally mùa hè TB?', '9,4% (yếu nhất).'],
    ['Điều chỉnh vs rally?', 'Điều chỉnh nhỏ hơn rally → thị trường tăng dài hạn.'],
    ['Tháng 8 từng là gì?', 'Tháng tốt nhất 1901–1951 (mùa thu hoạch).'],
    ['“Bear killer”?', 'Tháng 10: tạo đáy bear 1946…2002.'],
    ['Tháng 10 1987?', 'Dow −23,2%.'],
    ['Thời điểm mua sau điều chỉnh mùa thu?', 'Sau “thác nước” cuối Q3/Q4 → rally đến tháng 1.']
  ],
  quiz: [
    { q: 'Mùa có rally trung bình mạnh nhất:', o: ['Xuân', 'Hạ', 'Thu', 'Đông'], a: 3, e: '13,5%.' },
    { q: '“Summer rally” thực tế:', o: ['Mạnh nhất', 'Yếu nhất', 'Không tồn tại', 'Gấp đôi'], a: 1, e: '9,4%.' },
    { q: 'Tháng 10 vừa là “tháng ma” vừa là:', o: ['Tháng IPO', 'Sát thủ gấu', 'Tháng lương', 'Tháng thuế'], a: 1, e: 'Nhiều đáy bear market.' },
    { q: 'Tháng nào xưa tốt nhất, nay tệ nhất?', o: ['Tháng 8', 'Tháng 12', 'Tháng 1', 'Tháng 4'], a: 0, e: 'Nông nghiệp giảm vai trò.' },
    { q: 'Điều chỉnh mỗi mùa so với rally:', o: ['Lớn hơn', 'Nhỏ hơn', 'Bằng', 'Không có'], a: 1, e: 'Cho xu hướng tăng dài hạn.' }
  ],
  match: [
    ['Tháng 1,4,7', 'Đầu quý mạnh'],
    ['13,5%', 'Rally mùa đông'],
    ['9,4%', 'Rally mùa hè'],
    ['Tháng 9', 'Tệ nhất'],
    ['Tháng 10', 'Bear killer']
  ]
},

{
  n: 5,
  title: 'Chính trị và chu kỳ: tổng thống, thập niên',
  intro: 'Thị trường theo lịch bầu cử Mỹ: năm sau bầu cử thường là năm yếu nhất; năm “5” của mỗi thập niên chưa từng lỗ trong 120 năm; hai đảng cầm quyền cho kết quả bất ngờ.',
  sections: [
    { icon: '🗳', title: 'Năm sau bầu cử: “trả nợ”', blocks: [
      { t: 'p', x: 'Năm bầu cử, chính quyền muốn bầu cử trót lọt nên làm kinh tế đẹp, hoãn các quyết định không được lòng dân. Sau bầu cử: <b>tiệc nhậm chức xong, phải trả nợ</b>. Trong 23 năm sau bầu cử từ 1913: bắt đầu 3 cuộc chiến lớn (WWI 1917, WWII 1941, Việt Nam 1965); 4 thị trường gấu khốc liệt (1929, 1937, 1969, 1973); và 2001 (11/9, suy thoái). Chỉ 1925, 1989, 1993, 1997 là năm “hòa bình và thịnh vượng”.' },
      { t: 'warn', x: 'Khi Dân chủ lật Cộng hòa khỏi Nhà Trắng, năm sau bầu cử thường <b>tốt hơn</b> khi chiều ngược lại (Dow: Roosevelt 1933 +66,7%, Kennedy 1961 +18,7%, Carter 1977 +13,7%, nhưng Wilson 1913 −10,3%, Clinton 1993 −17,3%; phía Cộng hòa: Harding 1921 +12,7%, còn Eisenhower 1953 −3,8%, Nixon 1969 −15,2%, Reagan 1981 −9,2%, Bush 2001 −7,1%). Dân chủ thường lên nắm quyền vì nội trị, Cộng hòa vì ngoại giao/chiến tranh.' }
    ] },
    { icon: '5️⃣', title: 'Năm “5” của thập niên', blocks: [
      { t: 'mnemo', x: '<b>Năm 5 chưa từng thua</b> trong 12 thập niên (1885→2004): 1895, 1905, …, 1995 đều tăng.' },
      { t: 'p', x: 'Nhưng 2005 là năm sau bầu cử, yếu nhất của chu kỳ 4 năm. Tác giả khuyên <b>thận trọng hơn</b> tùy sức mạnh của năm bầu cử trước. Nếu hai chu kỳ mâu thuẫn, nhịp 4 năm có ảnh hưởng lớn hơn.' }
    ] },
    { icon: '🏛', title: 'Đảng nào tốt cho thị trường?', blocks: [
      { t: 'table', head: ['Kịch bản (Dow từ 1901)', 'Lãi TB/năm'], rows: [
        ['Tổng thống Dân chủ', '9,1%'],
        ['Tổng thống Cộng hòa', '6,0%'],
        ['Quốc hội Cộng hòa', '10,0%'],
        ['Quốc hội Dân chủ', '7,8%'],
        ['Cộng hòa nắm tất cả', '9,3%'],
        ['Dân chủ nắm tất cả', '8,4%'],
        ['Tổng thống Cộng hòa + Quốc hội Dân chủ', '6,8%'],
        ['<b>Tổng thống Dân chủ + Quốc hội Cộng hòa</b>', '<b>11,5%</b> (tốt nhất)'],
        ['Tổng thống Cộng hòa + Quốc hội chia đôi', '−1,2%']
      ] },
      { t: 'key', x: '<b>Bế tắc ở Capitol Hill (gridlock) tốt cho thị trường</b>: khi hai bên kiềm chế nhau, ít luật thay đổi gây bất định. Bài học: đừng chọn cổ phiếu theo đảng.' },
      { t: 'widget', name: 'party-compare', title: 'Chọn kịch bản chính trị – xem lãi Dow trung bình' }
    ] }
  ],
  summary: [
    'Năm sau bầu cử thường yếu: “trả nợ” cho năm bầu cử.',
    'Năm “5” thập niên chưa lỗ trong 120 năm.',
    'Tổng thống Dân chủ + Quốc hội Cộng hòa cho Dow tốt nhất (11,5%); bế tắc là tốt.'
  ],
  cards: [
    ['Post-Election Year Syndrome?', 'Năm sau bầu cử phải trả nợ cho các chính sách bị hoãn → thị trường yếu.'],
    ['Ba cuộc chiến lớn bắt đầu năm sau bầu cử?', 'WWI (1917), WWII (1941), Việt Nam (1965).'],
    ['Năm “5” của thập niên?', 'Chưa lỗ trong 120 năm.'],
    ['Dân chủ vs Cộng hòa (tổng thống)?', 'Dow 9,1% vs 6,0%.'],
    ['Quốc hội Cộng hòa?', 'Dow 10,0% so với 7,8% khi Dân chủ.'],
    ['Kịch bản tốt nhất?', 'Tổng thống Dân chủ + Quốc hội Cộng hòa: 11,5%.'],
    ['Kịch bản tệ nhất?', 'Tổng thống Cộng hòa + Quốc hội chia đôi: −1,2%.'],
    ['Gridlock là?', 'Bế tắc chính trị; tốt cho thị trường.']
  ],
  quiz: [
    { q: 'Năm yếu nhất của chu kỳ 4 năm:', o: ['Bầu cử', 'Sau bầu cử', 'Giữa nhiệm kỳ', 'Trước bầu cử'], a: 1, e: 'Paying the piper.' },
    { q: 'Năm “5” của thập niên:', o: ['Luôn lỗ', 'Chưa lỗ trong 120 năm', 'Ngẫu nhiên', 'Đi ngang'], a: 1, e: 'Sự trùng hợp thống kê.' },
    { q: 'Dow tốt nhất dưới:', o: ['Tổng thống CH + QH chia đôi', 'Tổng thống DC + QH CH', 'Tổng thống CH + QH DC', 'Tất cả như nhau'], a: 1, e: '11,5%.' },
    { q: 'Gridlock với thị trường:', o: ['Xấu', 'Tốt', 'Không ảnh hưởng', 'Tạo lạm phát'], a: 1, e: 'Ít thay đổi luật.' },
    { q: 'Cuộc chiến nào KHÔNG bắt đầu năm sau bầu cử?', o: ['WWI', 'WWII', 'Việt Nam', 'Chiến tranh Vùng Vịnh 1990'], a: 3, e: '1990 không phải năm sau bầu cử (1988→1989).' }
  ],
  match: [
    ['1913', 'Điểm bắt đầu phân tích hậu bầu cử'],
    ['11,5%', 'DC tổng thống + CH quốc hội'],
    ['−1,2%', 'CH tổng thống + QH chia đôi'],
    ['Năm 5', 'Chưa lỗ 120 năm'],
    ['Piper', 'Trả giá sau bầu cử']
  ]
},

{
  n: 6,
  title: 'Ngày và tuần: thứ trong tuần, đầu tháng, nghỉ lễ, triple witching',
  intro: 'Ngoài tháng, thị trường còn có nhịp theo ngày: thứ 2 mạnh, thứ 6 yếu, ngày giao dịch đầu tháng nổi bật, ngày trước/sau lễ có hành vi riêng, tuần hết hạn quyền chọn nguy hiểm.',
  sections: [
    { icon: '🗓', title: 'Thứ trong tuần', blocks: [
      { t: 'p', x: 'Trừ 2001–2002, <b>thứ Hai</b> là ngày tăng nhất của Dow, <b>thứ Sáu</b> yếu nhất từ 1990 (trader ngại giữ vị thế mua qua cuối tuần). Từ 1989: thứ Hai +6.459,87 điểm Dow, bốn ngày còn lại cộng +1.069,47; thứ Năm + thứ Sáu cộng <b>−748,65</b>.' },
      { t: 'tip', x: 'Thị trường gấu/đi ngang: thứ Sáu tệ nhất, thứ Hai nhì. Thị trường bò: thứ Hai tốt nhất, thứ Sáu nhì.' }
    ] },
    { icon: '1️⃣', title: 'Ngày giao dịch đầu tháng & 8 ngày “siêu”', blocks: [
      { t: 'p', x: 'Từ 9/1997 đến 7/2004 Dow tăng 2.711,74 điểm, nhưng <b>3.559,06 điểm đến từ ngày đầu tháng</b> (83 ngày, TB +42,88 điểm); 1.635 ngày còn lại <b>−847,32</b> điểm (TB −0,52). Ngày đầu tháng 8 tệ: giảm 5/6 lần.' },
      { t: 'p', x: 'Hiện nay thị trường tăng mạnh vào <b>8 ngày “siêu”</b>: 3 ngày cuối tháng trước + 2 ngày đầu tháng + 3 ngày giữa tháng (ngày 9–11, do dòng 401(k)). Tăng nhiều hơn trong 13 ngày còn lại gộp lại.' },
      { t: 'widget', name: 'dow-days', title: 'Dow theo thứ trong tuần và ngày đầu tháng – bạn nên có mặt ở đâu?' }
    ] },
    { icon: '🎄', title: 'Nghỉ lễ và Triple Witching', blocks: [
      { t: 'list', items: [
        'Ngày trước nghỉ lễ thường tăng, ngày sau thường bán – nhưng hiện thay đổi: một số lễ được bò ưa chuộng, số khác thì không.',
        '<b>Năm mới</b>: 3 ngày trước và sau ≈ +2,2% với cổ phiếu nhỏ (ZUPI); <b>Giáng sinh</b> cũng mạnh nhờ Santa Claus rally.',
        'Ngày sau Phục sinh là ngày sau lễ tệ nhất; Presidents’ Day yếu nhất (S&P và NASDAQ giảm 12/13 ngày trước đó).'
      ] },
      { t: 'key', x: '<b>Triple witching</b> (thứ Sáu thứ ba của tháng 3, 6, 9, 12): quyền chọn cổ phiếu, quyền chọn chỉ số và hợp đồng tương lai chỉ số cùng hết hạn (từ 1982). Tuần hết hạn (TWW) từ 1990 tăng nhiều hơn (trừ Q2) <b>nhưng tuần kế tiếp yếu</b> (trước 12/2003 giảm 7 lần liên tiếp). Giảm TWW thường kéo theo giảm tuần sau.' }
    ] }
  ],
  summary: [
    'Thứ Hai mạnh, thứ Sáu yếu (từ 1990); thứ Hai đóng góp gần 6 lần các ngày còn lại gộp.',
    'Ngày đầu tháng đóng góp lớn hơn tổng điểm tăng của Dow.',
    '8 ngày siêu: 3 ngày cuối + 2 đầu + 3 giữa tháng.',
    'Triple witching: tuần hết hạn thường mạnh, tuần sau yếu.'
  ],
  cards: [
    ['Ngày mạnh nhất tuần?', 'Thứ Hai (trừ 2001–2002).'],
    ['Ngày yếu nhất tuần?', 'Thứ Sáu.'],
    ['Đóng góp ngày đầu tháng?', '+3.559 điểm trong 83 ngày (TB +42,88) vs −847 điểm trong 1.635 ngày còn lại.'],
    ['Ngày đầu tháng nào tệ?', 'Tháng 8 (giảm 5/6).'],
    ['8 ngày siêu?', '3 cuối tháng trước, 2 đầu tháng, 3 giữa tháng.'],
    ['Triple witching?', 'Thứ Sáu thứ ba của tháng 3,6,9,12: quyền chọn + futures hết hạn.'],
    ['Lễ yếu nhất?', 'Presidents’ Day.'],
    ['Ngày sau lễ tệ nhất?', 'Ngày sau Phục sinh.']
  ],
  quiz: [
    { q: 'Ngày tăng nhất tuần với Dow:', o: ['Thứ Hai', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu'], a: 0, e: 'Từ 1989 +6.459,87 điểm.' },
    { q: 'Triple witching xảy ra:', o: ['Mỗi tháng', 'Tháng 3, 6, 9, 12', 'Cuối năm', 'Đầu tháng'], a: 1, e: 'Thứ Sáu thứ ba.' },
    { q: 'Ngày giao dịch đầu tháng (1997–2004) so với ngày còn lại:', o: ['Kém hơn', 'Tăng điểm nhiều, ngày còn lại giảm', 'Bằng nhau', 'Không dữ liệu'], a: 1, e: '+3.559 vs −847.' },
    { q: 'Giữa tháng (ngày 9–11) mạnh vì:', o: ['Thuế', '401(k) đổ tiền', 'Phục sinh', 'Lương hưu Mỹ'], a: 1, e: 'Dòng tiền định kỳ.' },
    { q: 'Tuần sau triple witching tháng 9:', o: ['Rất tốt', 'Đáng thương', 'Bằng', 'Không'], a: 1, e: 'Almanac gọi là tuần đáng thương.' }
  ],
  match: [
    ['Thứ Hai', 'Mạnh nhất tuần'],
    ['Thứ Sáu', 'Yếu nhất tuần'],
    ['3.559', 'Điểm Dow đầu tháng'],
    ['TWW', 'Tuần triple witching'],
    ['ZUPI', 'Chỉ số cổ phiếu nhỏ không trọng số']
  ]
},

{
  n: 7,
  title: 'Dùng Almanac thực tế & tổng kết',
  intro: 'Gom các mẫu hình vào một lịch hành động và đặt giới hạn: Almanac cho xác suất, không cho chắc chắn.',
  sections: [
    { icon: '🧭', title: 'Lịch hành động trong năm', blocks: [
      { t: 'steps', items: [
        '<b>Cuối năm</b>: Santa Claus rally, bán cắt lỗ thuế nhưng tránh bán tháo; ghi đáy tháng 12.',
        '<b>Tháng 1</b>: xem 5 ngày đầu → tháng 1 → Phong vũ biểu; kiểm tra thủng đáy tháng 12.',
        '<b>Tháng 11–4</b>: giữ cổ phiếu (ưu tiên đầu tháng, giữa tháng); thêm MACD để vào/ra.',
        '<b>Tháng 4</b>: chuẩn bị thoát khi MACD yếu; tháng 5–10 chuyển sang tiền mặt/trái phiếu hoặc bán quyền chọn mua.',
        '<b>Tháng 9–10</b>: đợi “thác nước” rồi mua; tháng 10 hay tạo đáy.'
      ] },
      { t: 'tip', x: 'Giữa năm sau bầu cử hoặc năm chiến tranh, hãy <b>giảm kỳ vọng</b>: sự kiện ngoại sinh có thể phá mẫu hình (1970, 2003, 2001).' }
    ] },
    { icon: '🛡', title: 'Giới hạn và đạo đức của dữ liệu', blocks: [
      { t: 'warn', x: 'Số liệu lịch sử đến 2004: không đảm bảo tương lai; mẫu hình thay đổi khi người ta đón đầu. <b>Không đặt cược toàn bộ</b> vào một chỉ báo, hãy kết hợp phân tích cơ bản, đa dạng hóa và đặt cắt lỗ.' },
      { t: 'list', items: [
        'Tác giả nhấn mạnh: <b>không công thức kỳ diệu</b> – cần nghiên cứu, kinh nghiệm và may mắn.',
        'Cập nhật hằng năm: tháng 10 nhảy lên top, tháng 1 và 3 tụt.',
        'Bỏ qua trang cầu nguyện chung chung: giá trị nằm ở <b>xác suất kết hợp nhiều tín hiệu</b>.'
      ] },
      { t: 'widget', name: 'almanac-check', title: 'Bảng kiểm Almanac: bao nhiêu tín hiệu đồng thuận?' }
    ] }
  ],
  summary: [
    'Kết hợp tín hiệu: mùa + ngày + chính trị + tháng Giêng.',
    'MACD giúp vào/ra tốt hơn lịch cứng.',
    'Sự kiện lớn có thể phá mẫu hình; luôn quản trị rủi ro.'
  ],
  cards: [
    ['Thứ tự tín hiệu đầu năm?', '5 ngày đầu → tháng 1 → Phong vũ biểu; đáy tháng 12.'],
    ['6 tháng yếu làm gì?', 'Tiền mặt/trái phiếu hoặc bán quyền chọn mua.'],
    ['Sự kiện nào phá mẫu hình?', 'Chiến tranh, khủng bố, cú sốc dầu (1970, 1973, 2001, 2003).'],
    ['Almanac là công thức?', 'Không – cần nghiên cứu, kinh nghiệm và may mắn.'],
    ['Điều gì thay đổi theo thời gian?', 'Xếp hạng tháng (tháng 10 lên, tháng 1 xuống).']
  ],
  quiz: [
    { q: 'Tín hiệu nên kết hợp:', o: ['Chỉ một', 'Nhiều', 'Không dùng', 'Chỉ thứ Sáu'], a: 1, e: 'Tăng xác suất.' },
    { q: 'Sự kiện nào có thể làm hỏng mẫu hình?', o: ['Chiến tranh', 'Mùa hè', 'Lễ hội', 'Thứ Hai'], a: 0, e: 'Ngoại sinh.' },
    { q: 'Mùa yếu nên:', o: ['Dồn vốn', 'Giảm rủi ro/chuyển thu nhập cố định', 'Vay thêm', 'Bán khống mọi thứ'], a: 1, e: 'Best Six Months.' },
    { q: 'Mục tiêu của Almanac:', o: ['Dự đoán chắc chắn', 'Cung cấp quan điểm lịch sử', 'Giao dịch tần suất cao', 'Chỉ trích Fed'], a: 1, e: 'Perspective.' }
  ],
  match: [
    ['Tiền mặt/trái phiếu', '6 tháng yếu'],
    ['Cổ phiếu', '6 tháng mạnh'],
    ['MACD', 'Tối ưu vào/ra'],
    ['Quản trị rủi ro', 'Luôn cần']
  ]
}
);
