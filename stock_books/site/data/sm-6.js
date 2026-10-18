// Streetsmart Guide to Valuing a Stock – Chương 7.
BOOK_DATA.streetsmart.chapters.push({
  n: 7,
  title: 'Tìm thông tin cho việc định giá',
  intro: 'Trước Internet, lấy báo cáo thường niên mất cả tuần. Chương này chỉ ra nên tìm từng đầu vào định giá ở đâu (website công ty, SEC/EDGAR, Yahoo Finance, MSN Investor, Fed H15…), cách chia đầu vào thành “dễ tìm”, “cần ước tính”, “chi phí vốn”, và hoàn tất ví dụ Cisco ($10,87).',
  sections: [
    { icon: '🌐', title: 'Nguồn thông tin chính', blocks: [
      { t: 'p', x: 'Ngoài báo cáo tài chính, bạn còn cần: <b>beta, rủi ro vỡ nợ, lãi suất phi rủi ro, tăng trưởng kỳ vọng</b> — những thứ không nằm trong báo cáo thường niên. Thời Internet, tất cả đều miễn phí và gần như tức thời; vấn đề là biết tìm ở đâu và tránh “lạc” trong các liên kết.' },
      { t: 'table', head: ['Nguồn', 'Dùng để'], rows: [
        ['Website công ty (mục Investor Relations, Financials/SEC Filings)', 'Nguồn chính: báo cáo thường niên, quý, báo cáo kết quả'],
        ['SEC – EDGAR (www.sec.gov)', 'Hồ sơ 10-K, 10-Q, 8-K, công khai trong 24 giờ; dài và nhiều thuật ngữ pháp lý'],
        ['Yahoo Finance', 'Giá, hồ sơ công ty, beta, ước tính lợi nhuận, liên kết tới trang chủ/IR'],
        ['MSN Investor', 'Báo cáo, ước tính, bộ lọc cổ phiếu; dữ liệu từ S&amp;P ComStock, Zacks, Hoover’s…'],
        ['Zacks, First Call (Thomson)', 'Ước tính doanh thu/lợi nhuận của nhà phân tích'],
        ['Fed H15, Bonds-Online, Bloomberg', 'Lợi suất Kho bạc, lợi suất trái phiếu Aaa/Baa, spread theo xếp hạng']
      ] },
      { t: 'warn', x: 'Website thay đổi nhanh — trang miễn phí có thể thành trả phí, danh sách địa chỉ luôn lỗi thời. Bài học là <i>loại thông tin cần tìm</i>, không phải URL cụ thể.' }
    ] },
    { icon: '🧰', title: 'Trang web định giá DCF', blocks: [
      { t: 'table', head: ['Trang', 'Cisco 9/1/2003 (giá $14,95)', 'Ưu / nhược'], rows: [
        ['ValuePro.net', 'Giá trị nội tại $4,55', 'Minh bạch, tương tác (sửa mọi đầu vào trừ WACC), không quảng cáo; nhưng sơ sài, dữ liệu cập nhật hàng tuần, kém với REIT/tài chính/công ty danh mục'],
        ['Quicken.com', '$12,67 (định giá cao)', 'Nhiều thông tin phụ; tương tác ít (chỉ chỉnh tăng trưởng và chiết khấu); thuật toán “hộp đen”'],
        ['VectorVest', '$15,57 ⇒ khuyến nghị mua', 'Miễn phí 3 lần/ngày, không tương tác, hộp đen']
      ] },
      { t: 'key', x: 'Ba dịch vụ cho kết luận khác nhau ($4,55 / $12,67 / $15,57) với cùng một cổ phiếu — vì tăng trưởng, NOPM và chiết khấu khác nhau. Đó là lý do cần hiểu từng đầu vào chứ không tin một con số.' }
    ] },
    { icon: '🟢', title: 'Đầu vào dễ tìm (từ báo cáo)', blocks: [
      { t: 'p', x: 'Từ website Cisco, vào Investor Relations ⇒ Financials/SEC Filings ⇒ báo cáo tài chính 2002. Dùng <b>3 năm</b> (bảng kết quả, dòng tiền) hoặc 2 năm (bảng cân đối) để thấy xu hướng.' },
      { t: 'table', head: ['Chỉ tiêu', '2002', '2001', '2000'], rows: [
        ['Doanh thu ($tr)', '18.915', '22.293', '18.928'],
        ['Thu nhập hoạt động', '3.683', '1.076', '4.719'],
        ['NOPM', '19,47%', '4,83%', '24,93%'],
        ['Thuế suất hiệu dụng', '30,15%', 'n/a (lỗ)', '38,57%'],
        ['Khấu hao/DT', '10,35%', '10,03%', '4,56%'],
        ['Đầu tư/DT', '13,96%', '10,19%', '5,74%']
      ] },
      { t: 'list', items: [
        'Trung bình: NOPM <b>16,41%</b>, thuế <b>34,36%</b>, khấu hao <b>8,31%</b>, đầu tư <b>9,96%</b>.',
        'Vốn lưu động (phải thu + tồn kho − phải trả): 2002 = $1.515 triệu = 8,01% DT; 2001 = $2.506 triệu = 11,24%; TB 2 năm <b>9,63%</b>.',
        'Tài sản ngắn hạn $17.433 triệu; nợ ngắn hạn $8.375 triệu; nợ và ưu đãi sổ sách = 0.'
      ] }
    ] },
    { icon: '🟡', title: 'Đầu vào cần ước tính', blocks: [
      { t: 'p', x: 'Tăng trưởng và NOPM là hai đầu vào quyết định giá trị nội tại — khả năng ước tính chúng “phân biệt nhà phân tích All-American với phần còn lại”. Ba cách: (1) dựa vào lịch sử; (2) dựa vào kỳ vọng nhà phân tích/thị trường; (3) pha trộn với lý trí của bạn.' },
      { t: 'list', items: [
        'Tăng trưởng CAGR 5 năm 8% mà giả định 25% là hơi hung hăng — trừ khi có sản phẩm đột phá. Công ty lớn dần và ngành cạnh tranh hơn thì tăng trưởng tiến về tăng trưởng kinh tế.',
        'Xu hướng cảnh báo: NOPM của Cisco dao động 24,93% → 4,83% → 19,47% (có thể mất sức mạnh định giá); doanh thu tăng rồi giảm 17,8%.',
        'Dùng Zacks và First Call để xem ước tính; <b>đừng quá lạc quan</b> — hãy hạ đồng thuận xuống mức bạn thấy khả thi.'
      ] }
    ] },
    { icon: '🔵', title: 'Đầu vào chi phí vốn', blocks: [
      { t: 'table', head: ['Đầu vào', 'Lấy ở đâu / cách làm'], rows: [
        ['Giá cổ phiếu', 'MSN, Yahoo (trễ ~20 phút). Giá cổ phiếu tăng ⇒ tỷ trọng vốn cổ phần tăng ⇒ WACC tăng (vốn cổ phần đắt nhất)'],
        ['Số cổ phiếu', 'Trang hồ sơ Yahoo/MSN (thường là số thực, không phải pha loãng)'],
        ['Lợi suất Kho bạc 10 năm', 'Báo tài chính, Yahoo, MSN, Bloomberg, Fed H15 (chính thức)'],
        ['Spread trái phiếu', 'H15 (Aaa 6,13%, Baa 7,38% ngày 18/9/2002); Bonds-Online theo xếp hạng và ngành'],
        ['Lợi suất ưu đãi', 'Cổ tức ÷ giá: ConEd $5 ÷ $77,08 = 6,49%'],
        ['ERP', 'Không tự tìm thấy; Damodaran: ERP ngụ ý 2001 là 1,73% (DDM) và 3,62% (FCFE). Sách dùng 3%'],
        ['Beta', 'Yahoo 1,93 vs MSN 1,90 (khác nhau do hồi quy với khoảng thời gian/phương pháp khác). Sách dùng <b>beta cao hơn</b> (thận trọng); hoặc trung bình'],
        ['Nợ và ưu đãi', 'Sổ sách (nhanh); định giá từng đợt phát hành chỉ khi cần chi tiết (ConEd có 38 đợt nợ)']
      ] },
      { t: 'tip', x: 'Định giá “nhanh và sơ bộ” ⇒ dùng sổ sách cho nợ/ưu đãi. Trừ khi công ty vay nặng (nợ và ưu đãi chiếm tỷ trọng vốn hoá lớn) thì cách này mới làm lệch đáng kể giá trị cổ phiếu.' }
    ] },
    { icon: '🧮', title: 'Ráp lại: Cisco $10,87', blocks: [
      { t: 'p', x: 'Đưa toàn bộ đầu vào vào ValuePro 2002: WACC <b>10,04%</b> (= chi phí vốn cổ phần), giá trị doanh nghiệp $89.314 triệu, giá trị vốn chủ $80.939 triệu, giá trị nội tại <b>$10,87</b>/cổ phiếu. Chương 8 sẽ tinh chỉnh bằng các kịch bản tăng trưởng, NOPM và WACC thay đổi.' },
      { t: 'widget', name: 'fcff-dcf', title: 'Thử DCF với đầu vào chương 7' }
    ] }
  ],
  summary: [
    'Trang web công ty và SEC/EDGAR là nguồn chính; Yahoo và MSN là hai trang miễn phí tốt nhất.',
    'Chia đầu vào: dễ tìm (báo cáo), cần ước tính (tăng trưởng, NOPM), chi phí vốn (Rf, β, ERP…).',
    'Dùng 3 năm dữ liệu để thấy xu hướng; hạ đồng thuận nhà phân tích xuống mức khả thi.',
    'Beta khác nhau giữa các nguồn: dùng cao hơn hoặc trung bình.',
    'Cisco: tất cả hợp lại ra $10,87; các trang định giá khác ra $4,55–$15,57.'
  ],
  cards: [
    ['Thông tin nào không có trong báo cáo thường niên?', 'Beta, rủi ro vỡ nợ, lãi suất phi rủi ro, tăng trưởng kỳ vọng.'],
    ['Nguồn chính để lấy số liệu công ty?', 'Website công ty (mục IR) rồi SEC/EDGAR.'],
    ['EDGAR là gì?', 'Hệ thống thu thập, phân tích, truy xuất dữ liệu điện tử của SEC; hồ sơ trong 24 giờ.'],
    ['Hai trang miễn phí tác giả thích nhất?', 'MSN Investor và Yahoo Finance.'],
    ['Điểm mạnh/yếu của ValuePro.net?', 'Minh bạch, tương tác; nhưng sơ sài, kém cho REIT/tài chính.'],
    ['Quicken và VectorVest khác gì?', 'Là “hộp đen”, ít hoặc không tương tác.'],
    ['Vì sao dùng 3 năm dữ liệu?', 'Thấy xu hướng và độ ổn định.'],
    ['Hai đầu vào quan trọng nhất?', 'Tăng trưởng và NOPM.'],
    ['Ba cách ước tính đầu vào?', 'Lịch sử, kỳ vọng nhà phân tích, hoặc pha trộn với lý trí.'],
    ['Nguồn lợi suất Kho bạc chính thức?', 'Mẫu H15 của Fed.'],
    ['Cách tính lợi suất cổ phiếu ưu đãi?', 'Cổ tức ÷ giá.'],
    ['Khi beta khác nhau giữa nguồn?', 'Dùng beta cao hơn hoặc trung bình.'],
    ['Vì sao giá cổ phiếu tăng làm WACC tăng?', 'Tỷ trọng vốn cổ phần (đắt nhất) tăng.'],
    ['Khi nào dùng sổ sách cho nợ/ưu đãi?', 'Định giá nhanh; ít lệch trừ công ty vay nặng.']
  ],
  quiz: [
    { q: 'Nguồn chính nên dùng cho báo cáo tài chính:', o: ['Diễn đàn', 'Website công ty', 'Báo giấy', 'Tin đồn'], a: 1, e: 'Mục Investor Relations.' },
    { q: 'EDGAR công bố hồ sơ trong vòng:', o: ['1 tuần', '24 giờ', '1 tháng', '1 năm'], a: 1, e: 'Không muộn hơn 24 giờ.' },
    { q: 'Beta của Cisco: Yahoo vs MSN:', o: ['1,93 vs 1,90', '1,00 vs 1,50', '0,5 vs 2', 'Giống hệt'], a: 0, e: 'Chọn cao hơn hoặc trung bình.' },
    { q: 'ValuePro cho Cisco (9/1/2003):', o: ['$4,55', '$12,67', '$15,57', '$10,87'], a: 0, e: 'Quicken $12,67; VectorVest $15,57.' },
    { q: 'NOPM trung bình 3 năm của Cisco:', o: ['16,41%', '19,47%', '24,93%', '4,83%'], a: 0, e: 'TB của ba năm.' },
    { q: 'Vốn lưu động trung bình 2 năm:', o: ['8,01%', '9,63%', '11,24%', '5%'], a: 1, e: '(8,01+11,24)/2.' },
    { q: 'Lợi suất ưu đãi ConEd (18/9/2002):', o: ['6,49%', '5%', '7,38%', '10%'], a: 0, e: '$5 ÷ $77,08.' },
    { q: 'ERP ngụ ý của Damodaran 2001 (DDM):', o: ['1,73%', '3,62%', '5,5%', '8%'], a: 0, e: 'FCFE: 3,62%.' },
    { q: 'Giá cổ phiếu tăng ⇒ WACC:', o: ['Giảm', 'Tăng', 'Không đổi', 'Bằng 0'], a: 1, e: 'Tỷ trọng vốn cổ phần tăng.' },
    { q: 'Dịch vụ nào là hộp đen, miễn phí 3 lần/ngày?', o: ['ValuePro', 'VectorVest', 'Yahoo', 'EDGAR'], a: 1, e: 'Không tương tác.' }
  ],
  match: [
    ['EDGAR', 'Kho hồ sơ điện tử của SEC'],
    ['H15', 'Báo cáo lãi suất của Fed'],
    ['ValuePro.net', 'Định giá DCF tương tác miễn phí'],
    ['Zacks / First Call', 'Ước tính của nhà phân tích'],
    ['Beta cao hơn', 'Thận trọng ⇒ WACC cao ⇒ giá trị thấp'],
    ['Sổ sách của nợ', 'Chấp nhận khi không có rủi ro vỡ nợ'],
    ['All-American', 'Nhà phân tích xếp hạng hàng đầu']
  ]
});
