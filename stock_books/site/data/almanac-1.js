// "Stock Trader's Almanac 2005" (Yale & Jeffrey Hirsch) – Chương 1–3.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.almanac = BOOK_DATA.almanac || { chapters: [] };
BOOK_DATA.almanac.chapters.push(

{
  n: 1,
  title: 'Đầu tư theo lịch: triết lý Almanac',
  intro: 'Almanac ra đời từ 1968 với một ý tưởng: thị trường có những nhịp lặp lại theo tháng, tuần, ngày và chu kỳ bầu cử. Biết lịch sử không đảm bảo tương lai, nhưng giúp bạn có “cái ô” đúng lúc. Số liệu trong sách là của ấn bản 2005 (đến giữa 2004).',
  sections: [
    { icon: '📅', title: 'Almanac Investing là gì?', blocks: [
      { t: 'mnemo', x: '“Ai không nhớ được quá khứ thì buộc phải lặp lại nó.” — Santayana. Almanac Investing = học thị trường qua <b>lịch sử và tính mùa vụ</b>.' },
      { t: 'p', x: 'Almanac không phải công thức làm giàu. Tác giả ví nó như <b>cuốn niên giám nông dân dự báo thời tiết cho đám cưới ngoài trời</b>: xác suất mưa 5% không có nghĩa là bạn khỏi dựng lều. Dùng nó như <b>một công cụ trong hộp đồ nghề</b>, kết hợp nghiên cứu, kinh nghiệm và quản trị rủi ro.' },
      { t: 'list', items: [
        'Mô hình theo <b>mùa</b>: tháng nào mạnh/yếu, 6 tháng tốt nhất, “mùa” rally.',
        'Mô hình theo <b>ngày</b>: thứ trong tuần, ngày giao dịch đầu tháng, ngày trước/sau nghỉ lễ, “phù thủy ba” (triple witching).',
        'Mô hình theo <b>chính trị</b>: chu kỳ tổng thống 4 năm, năm sau bầu cử, chu kỳ thập niên.',
        'Chỉ báo <b>tháng Giêng</b>: 5 ngày đầu, phong vũ biểu tháng 1, đáy tháng 12.'
      ] },
      { t: 'warn', x: 'Mẫu hình bị lộ thì thị trường <b>dự đoán trước</b> và làm nó lệch đi (anticipators). Ví dụ: tháng 10 từng là “tháng ma” nhưng 15 năm gần đây thành tháng tốt; tháng 1 và 3 thua tháng 5 và 7.' }
    ] },
    { icon: '⚖️', title: 'Vì sao mẫu hình tồn tại?', blocks: [
      { t: 'tabs', items: [
        ['💼 Dòng tiền tổ chức', 'Đầu năm, đầu quý, đầu tháng quỹ có tiền mới (lương hưu, 401(k)) → mua. Cuối quý quỹ “bơm danh mục” (portfolio pumping) và cuối năm bán cắt lỗ thuế.'],
        ['🏛 Chính trị', 'Năm bầu cử chính quyền bơm kinh tế; năm sau bầu cử phải “trả nợ” (tăng thuế, quyết định khó) → thị trường yếu.'],
        ['🧠 Tâm lý', 'Sau kỳ nghỉ hè, quỹ “dọn nhà” vào tháng 9; trước cuối tuần trader không muốn giữ vị thế mua (thứ 6 yếu).'],
        ['📉 Tự thực hiện', 'Khi nhiều người dùng, mẫu hình kéo giá sớm hơn rồi suy yếu — hãy cập nhật dữ liệu mới.']
      ] }
    ] }
  ],
  summary: [
    'Almanac dùng lịch sử/mùa vụ làm công cụ phụ, không phải công thức chắc thắng.',
    'Bốn nhóm mẫu hình: mùa (tháng), ngày/tuần, chính trị (chu kỳ 4 năm), chỉ báo tháng Giêng.',
    'Mẫu hình đổi dần khi bị “dự đoán trước”; luôn kết hợp quản trị rủi ro.'
  ],
  cards: [
    ['Almanac Investing là gì?', 'Phân tích thị trường qua lịch sử và tính mùa vụ để thấy xu hướng hay lặp lại.'],
    ['Ví dụ ẩn dụ của tác giả?', 'Xác suất mưa 5% đám cưới ngoài trời — vẫn cần dựng lều.'],
    ['Ai viết Almanac?', 'Yale Hirsch (từ 1968) và Jeffrey Hirsch.'],
    ['Vì sao mẫu hình dần đổi?', 'Nhà đầu tư dự đoán trước (anticipators) nên thị trường điều chỉnh.'],
    ['Nguồn gốc mùa vụ đầu tháng/quý?', 'Dòng tiền tổ chức mới (lương hưu, 401(k)).'],
    ['“Piper” năm sau bầu cử?', 'Phải trả giá cho các chính sách bị hoãn trong năm bầu cử.']
  ],
  quiz: [
    { q: 'Almanac nên được dùng như:', o: ['Công thức chắc thắng', 'Một công cụ tham khảo trong nhiều công cụ', 'Thay thế nghiên cứu', 'Chỉ dành cho thị trường gấu'], a: 1, e: 'Giống niên giám thời tiết: xác suất, không phải bảo đảm.' },
    { q: 'Vì sao nhiều mẫu hình yếu dần?', o: ['Dữ liệu sai', 'Nhà đầu tư dự đoán trước', 'Thuế', 'Lạm phát'], a: 1, e: 'Anticipators dịch chuyển mẫu hình.' },
    { q: 'Mẫu hình nào KHÔNG thuộc nhóm của Almanac?', o: ['Tháng', 'Thứ trong tuần', 'Chu kỳ tổng thống', 'Hệ số P/E ngành'], a: 3, e: 'P/E không phải mẫu hình lịch.' },
    { q: 'Tháng 10 những năm gần đây:', o: ['Vẫn là tháng tệ nhất', 'Không còn tệ nhất, thành tháng tốt', 'Luôn giảm', 'Không giao dịch'], a: 1, e: 'Do anticipators của “6 tháng tốt nhất”.' },
    { q: 'Triple witching là:', o: ['Ba ngày nghỉ lễ', 'Quyền chọn + hợp đồng tương lai chỉ số hết hạn cùng ngày', 'Ba tháng giảm liên tiếp', 'Chỉ báo tổng thống'], a: 1, e: 'Mỗi quý: tháng 3, 6, 9, 12.' }
  ],
  match: [
    ['Yale Hirsch', 'Tác giả Almanac từ 1968'],
    ['Anticipators', 'Người đón đầu mẫu hình'],
    ['Portfolio pumping', 'Quỹ làm đẹp danh mục cuối quý'],
    ['Niên giám nông dân', 'Ẩn dụ xác suất đám cưới'],
    ['Triple witching', 'Hết hạn ba loại phái sinh cùng lúc']
  ]
},

{
  n: 2,
  title: 'Chỉ báo tháng Giêng',
  intro: 'Tháng 1 được coi là “lá phiếu” của đầu năm. Ba chỉ báo: 5 ngày đầu, Phong vũ biểu tháng 1 (January Barometer) và Đáy tháng 12. Chúng là xác suất, từng sai vì chiến tranh và biến cố.',
  sections: [
    { icon: '5️⃣', title: '5 ngày giao dịch đầu năm', blocks: [
      { t: 'p', x: 'Nếu S&P 500 tăng trong 5 ngày đầu tiên của tháng 1, 34 năm từ 1950: <b>29 năm</b> cả năm tăng (<b>85,3%</b>), trung bình +13,8%. 5 ngoại lệ có 4 năm gắn với chiến tranh (Việt Nam 1966, đàm phán 1973, Saddam 1990, khủng bố/gian lận 2002). 20 lần giảm → 10 năm tăng, 10 năm giảm (<b>50%</b> — như tung đồng xu).' },
      { t: 'tip', x: 'Tín hiệu mạnh khi <b>tăng</b>, yếu khi giảm. Năm sau bầu cử: 5 ngày đầu lỗ → 6 lần cả năm lỗ (trung bình −11,1%).' }
    ] },
    { icon: '🌡', title: 'Phong vũ biểu tháng 1', blocks: [
      { t: 'mnemo', x: '“<b>Tháng 1 thế nào, cả năm thế ấy.</b>” (Yale Hirsch, 1972)' },
      { t: 'p', x: 'Từ 1950 chỉ có <b>5 lần sai lớn</b> → chính xác <b>90,7%</b> (kể cả 6 năm đi ngang: 79,6%). Sai: 1966 & 1968 (Việt Nam), 1982 (bắt đầu bull market tháng 8), 2001 (hạ lãi suất + 11/9), 2003 (chiến tranh Iraq).' },
      { t: 'key', x: '<b>Vì sao hiệu quả?</b> Tu chính án “Lame Duck” 1933: trước 1934 nghị sĩ mới nhậm chức sau 13 tháng; từ đó Quốc hội mới họp ngay tháng 1 nên tháng 1 phản ánh kỳ vọng chính sách cho cả năm.' },
      { t: 'widget', name: 'jan-barometer', title: 'Phong vũ biểu tháng 1: tháng 1 + 5 ngày đầu cho tín hiệu gì?' }
    ] },
    { icon: '📉', title: 'Đáy tháng 12 và “Santa”', blocks: [
      { t: 'p', x: '<b>Chỉ báo đáy tháng 12</b> (Lucien Hooper, Jeffrey Saut): nếu Dow đóng cửa dưới đáy tháng 12 trong <b>quý 1</b> → cảnh báo. 26 lần xảy ra: 12 lần vẫn cả năm tăng, nhưng hầu hết còn giảm thêm, trung bình −10,7%. Nếu không thủng, hãy dùng Phong vũ biểu tháng 1 (gần như đúng 100%).' },
      { t: 'p', x: '<b>Santa Claus rally</b>: 6 ngày quanh Giáng sinh thường tăng; <b>hiệu ứng tháng 1</b>: cổ phiếu nhỏ tăng mạnh đầu năm (3 ngày trước/sau năm mới, ZUPI +2,2%).' }
    ] }
  ],
  summary: [
    '5 ngày đầu tăng → 85,3% cả năm tăng; giảm thì chỉ 50%.',
    'Phong vũ biểu tháng 1: 90,7% chính xác, sai khi có chiến tranh/biến cố.',
    'Lame Duck 1933 giải thích: Quốc hội mới họp từ tháng 1.',
    'Dow thủng đáy tháng 12 trong Q1 → giảm thêm ~10,7% trung bình.'
  ],
  cards: [
    ['Chính xác của 5 ngày đầu khi tăng?', '85,3% (29/34 năm) cả năm tăng.'],
    ['5 ngày đầu giảm thì sao?', '10 năm tăng, 10 năm giảm (50%).'],
    ['Phong vũ biểu tháng 1 chính xác?', '90,7% (5 sai lớn từ 1950); 79,6% nếu tính cả năm đi ngang.'],
    ['Ai nghĩ ra Phong vũ biểu tháng 1?', 'Yale Hirsch, 1972.'],
    ['Lame Duck Amendment (1933)?', 'Quốc hội mới họp ngay tháng 1 thay vì 13 tháng sau → tháng 1 phản ánh chính sách năm.'],
    ['Đáy tháng 12 thủng trong Q1?', 'Cảnh báo; thường giảm thêm ~10,7%.'],
    ['Năm sai lớn do Việt Nam?', '1966 và 1968.'],
    ['Santa Claus rally?', 'Tăng quanh Giáng sinh/đầu tháng 1.']
  ],
  quiz: [
    { q: 'Tháng 1 S&P tăng, theo Phong vũ biểu, cả năm thường:', o: ['Giảm', 'Tăng', 'Đi ngang', 'Không liên quan'], a: 1, e: '“As January goes, so goes the year.”' },
    { q: 'Độ chính xác của Phong vũ biểu (chỉ tính sai lớn):', o: ['50%', '70%', '90,7%', '100%'], a: 2, e: '5 sai lớn trong 54 năm.' },
    { q: 'Khi 5 ngày đầu tăng, xác suất cả năm tăng:', o: ['50%', '60%', '85,3%', '99%'], a: 2, e: '29/34.' },
    { q: 'Tại sao có “Phong vũ biểu”?', o: ['Tu chính án Lame Duck 1933', 'Luật thuế', 'Chiến tranh', 'Phát minh máy tính'], a: 0, e: 'Quốc hội mới họp ngay tháng 1.' },
    { q: 'Dow thủng đáy tháng 12 trong Q1 báo hiệu:', o: ['Tăng mạnh', 'Có thể giảm thêm', 'Không gì', 'Lạm phát'], a: 1, e: 'Trung bình giảm thêm ~10,7%.' },
    { q: 'Năm 2003 Phong vũ biểu sai vì:', o: ['Dot-com', 'Dự đoán chiến tranh Iraq', 'Giá dầu', 'Bầu cử'], a: 1, e: 'Tháng 1/2003 bị kìm bởi lo chiến tranh.' }
  ],
  match: [
    ['1933', 'Tu chính án Lame Duck'],
    ['85,3%', '5 ngày đầu tăng → cả năm tăng'],
    ['90,7%', 'Độ chính xác Phong vũ biểu tháng 1'],
    ['Lucien Hooper', 'Đáy tháng 12'],
    ['Q1', 'Khung thời gian cảnh báo thủng đáy']
  ]
},

{
  n: 3,
  title: '6 tháng tốt nhất (tháng 11–4) và MACD',
  intro: 'Phát hiện năm 1986: gần như toàn bộ lãi của Dow nằm trong 6 tháng tháng 11–tháng 4; 6 tháng còn lại chỉ góp rất ít. Chiến lược chuyển đổi này giảm rủi ro và, khi thêm chỉ báo MACD, kết quả gấp gần 3 lần.',
  sections: [
    { icon: '📆', title: 'Bảng xếp hạng tháng của Dow và S&P (1950–6/2004)', blocks: [
      { t: 'table', head: ['Tháng', 'S&P TB %', 'Dow TB %'], rows: [
        ['Tháng 12', '+1,7', '+1,8'],
        ['Tháng 11', '+1,7', '+1,6'],
        ['Tháng 1', '+1,5', '+1,4'],
        ['Tháng 4', '+1,3', '+1,9'],
        ['Tháng 3', '+1,0', '+1,0'],
        ['Tháng 7', '+0,9', '+1,1'],
        ['Tháng 6 / 8 / 2 / 5', '≈ 0', '≈ 0'],
        ['<b>Tháng 9</b>', '<b>−0,7</b>', '<b>−1,1</b>']
      ] },
      { t: 'tip', x: '1–4–11–12 luôn nằm top 4 cả hai chỉ số; <b>tháng 9 luôn tệ nhất</b>. Chia năm làm đôi: <b>nửa mùa đông</b> (11→4) ăn gần hết lãi.' }
    ] },
    { icon: '🔄', title: 'Chiến lược chuyển đổi 6 tháng', blocks: [
      { t: 'list', items: [
        '<b>Mua Dow 1/11, bán 30/4</b>, gửi tiền vào công cụ thu nhập cố định 6 tháng còn lại.',
        '$10.000 đầu tư 1950: 11→4 thành <b>+$482.060</b>; 5→10 chỉ <b>−$318</b> (S&P: +$349.165 và +$7.102).',
        'Hai thua lỗ lớn 11→4: Cambodia 1970 và cấm vận dầu OPEC 1973.',
        'Sự kiện ngoại sinh như chiến tranh làm lệch mẫu hình (1970, 2003).'
      ] },
      { t: 'key', x: '<b>MACD</b> (Gerald Appel): dùng tín hiệu MACD để vào sớm/ra muộn quanh 1/10 và 1/4 → $10.000 thành <b>+$1.411.142</b>, nửa còn lại <b>−$6.598</b>. Chỉ ở trong thị trường ~6,5 tháng/năm. Sy Harding gọi là “hệ thống cơ học tốt nhất”.' },
      { t: 'widget', name: 'six-months', title: 'So sánh: Tháng 11–4 vs Tháng 5–10 vs MACD (số liệu Dow 1950–2004)' }
    ] },
    { icon: '💻', title: 'NASDAQ: 8 tháng tốt nhất', blocks: [
      { t: 'p', x: 'NASDAQ mạnh 11, 12, 1 (TB +7,9%/3 tháng) và tháng 4, 5, 6 → <b>Best Eight Months: 11→6</b>. $10.000 từ 1971: +$310.082 vs −$4.066 trong 4 tháng yếu (7–10). Với MACD: +$632.746 và −$7.198.' },
      { t: 'p', x: 'Tháng 1 là tháng mạnh nhất NASDAQ: +3,9% TB (24 tăng/10 giảm); Dow +2,0% cùng giai đoạn. NASDAQ TB 0,98%/tháng so Dow 0,73%, nhưng sụt 77,9% 2000–2002 (Dow −37,8%).' }
    ] }
  ],
  summary: [
    'Tháng 12, 11, 1, 4 mạnh nhất; tháng 9 luôn tệ nhất.',
    'Giữ cổ phiếu 1/11–30/4 rồi chuyển sang trái phiếu: lãi áp đảo, rủi ro thấp.',
    'MACD cải thiện thời điểm vào/ra, gần gấp 3 lần kết quả.',
    'NASDAQ mạnh hơn nhưng biến động hơn: 8 tháng tốt nhất 11→6.'
  ],
  cards: [
    ['Chiến lược “6 tháng tốt nhất”?', 'Giữ cổ phiếu 1/11–30/4, 6 tháng còn lại chuyển sang thu nhập cố định.'],
    ['Phát hiện năm nào?', '1986.'],
    ['Tháng tệ nhất?', 'Tháng 9 (S&P TB −0,7%, Dow −1,1%).'],
    ['Top 4 tháng?', 'Tháng 1, 4, 11, 12.'],
    ['MACD là ai phát triển?', 'Gerald Appel.'],
    ['$10.000 giữ 11→4 (1950–2004)?', '+$482.060 (MACD: +$1.411.142).'],
    ['$10.000 giữ 5→10?', '−$318 (MACD: −$6.598).'],
    ['NASDAQ Best Eight Months?', 'Tháng 11 đến tháng 6.']
  ],
  quiz: [
    { q: 'Chiến lược Best Six Months mua vào ngày:', o: ['1/1', '1/5', '1/11', '1/9'], a: 2, e: 'Giữ 11→4.' },
    { q: 'Tháng nào tệ nhất của Dow/S&P?', o: ['Tháng 2', 'Tháng 6', 'Tháng 9', 'Tháng 8'], a: 2, e: 'Biên độ −0,7% (S&P) và −1,1% (Dow).' },
    { q: 'MACD trong chiến lược nhằm:', o: ['Dự báo lãi suất', 'Tối ưu thời điểm vào/ra', 'Tính thuế', 'Lọc cổ phiếu'], a: 1, e: 'Vào sớm khi xu hướng lên, ra sớm khi xu hướng xuống.' },
    { q: '6 tháng 5→10 trong 54 năm (Dow, không MACD):', o: ['+$482k', '≈ hòa vốn (−$318)', '+$1,4 triệu', '−$100k'], a: 1, e: 'Thời gian “phí”.' },
    { q: 'Tháng mạnh nhất NASDAQ:', o: ['Tháng 1', 'Tháng 4', 'Tháng 9', 'Tháng 6'], a: 0, e: '+3,9% TB.' },
    { q: 'Tại sao chiến lược này có thể yếu đi?', o: ['Không đổi', 'Nhiều người đón đầu', 'Thuế', 'Máy tính'], a: 1, e: 'Anticipators đẩy tháng 10 lên.' }
  ],
  match: [
    ['1/11–30/4', '6 tháng tốt nhất'],
    ['Tháng 9', 'Tháng tệ nhất'],
    ['Gerald Appel', 'MACD'],
    ['11→6', 'NASDAQ Best Eight Months'],
    ['1986', 'Năm phát hiện Best Six Months']
  ]
}
);
