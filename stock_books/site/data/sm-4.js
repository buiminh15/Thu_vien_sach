// Streetsmart Guide to Valuing a Stock – Chương 5.
BOOK_DATA.streetsmart.chapters.push({
  n: 5,
  title: 'Dự báo dòng tiền kỳ vọng',
  intro: '“Năm anh em người Hoa” — năm đại lượng quyết định FCFF: tăng trưởng doanh thu, biên lợi nhuận hoạt động (NOPM), thuế suất, đầu tư ròng và vốn lưu động tăng thêm. Chương này ước tính từng đại lượng bằng ví dụ Cisco và ra giá trị nội tại $10,87.',
  sections: [
    { icon: '🧮', title: 'Năm anh em: các đại lượng dòng tiền', blocks: [
      { t: 'table', head: ['“Anh em”', 'Đo gì', 'Cách ước tính'], rows: [
        ['Tăng trưởng doanh thu', 'Dòng tiền vào tăng', 'Dự báo nhà phân tích + lịch sử, CAGR; kịch bản bảo thủ 3–5%'],
        ['NOPM', 'NOP ÷ doanh thu', 'Gần nhất hoặc trung bình 3 năm nếu thất thường'],
        ['Thuế suất', 'Thuế ÷ lợi nhuận trước thuế', 'Bình quân; có thể what-if 35% (thuế biên tối đa)'],
        ['Đầu tư ròng', 'Đầu tư mới − khấu hao', '% doanh thu lịch sử; sau giai đoạn vượt trội đặt = 0'],
        ['Vốn lưu động tăng thêm', '(Phải thu + tồn kho − phải trả) × Δ doanh thu', 'Tỷ lệ trung bình trên mức tăng doanh thu']
      ] },
      { t: 'tip', x: 'Ước tính dòng tiền đôi khi “tẻ nhạt như cắt móng chân” nhưng là phần quan trọng nhất của định giá — bạn học được rất nhiều về công ty trong quá trình đó.' }
    ] },
    { icon: '📈', title: 'Tăng trưởng và giai đoạn vượt trội', blocks: [
      { t: 'list', items: [
        'Tăng trưởng lợi nhuận đến từ tăng doanh thu (top-line) hoặc giảm chi phí/tăng NOPM (bottom-line). Cho đơn giản, sách áp <b>tốc độ tăng trưởng không đổi lên doanh thu</b> (doanh thu ít bị thao túng hơn lợi nhuận) và các tỷ lệ khác không đổi.',
        'Nguồn dự báo: Yahoo Finance, First Call, Zacks, môi giới; lịch sử gần đây. Không công ty nào tăng trưởng vượt kinh tế mãi (Cisco, Tyco “mua tăng trưởng” bằng thâu tóm ⇒ pha loãng cổ phiếu). Cổ phiếu tăng trưởng rồi cũng thành cổ phiếu bình thường hay cổ phiếu giá trị.',
        'Nhà phân tích lạc quan: nghiên cứu của Fed (1999) 1979–1996: kỳ vọng đồng thuận về tăng trưởng EPS 1 năm của S&amp;P 500 vượt thực tế trong <b>16/18 năm</b>, trung bình 9%. Dùng giá để suy ra kỳ vọng thị trường (Rappaport &amp; Mauboussin, <i>Expectations Investing</i>).'
      ] },
      { t: 'key', x: '<b>Khuyến nghị</b>: định giá với ít nhất hai tốc độ tăng trưởng — (1) đồng thuận nhà phân tích (lạc quan ⇒ giá trị cao), (2) tăng trưởng kinh tế 3–5% (bảo thủ ⇒ giá trị thấp) — và thường thêm tốc độ của ngành. <b>Giá &gt; giá trị cao nhất ⇒ tránh/bán; giữa hai giá trị ⇒ cân nhắc nếu tin lợi nhuận bằng/vượt ước tính; &lt; giá trị thấp nhất ⇒ cơ hội, phân tích thêm.</b> Thử rút ngắn giai đoạn vượt trội 10 → 7 → 5 năm — khi đầu tư mới có lợi suất &lt; WACC thì rút ngắn lại <i>tăng</i> giá trị.' }
    ] },
    { icon: '🌐', title: 'Ví dụ Cisco: tăng trưởng, NOPM, thuế', blocks: [
      { t: 'p', x: 'Cisco (CSCO): router, switch, bảo mật, mạng quang; doanh thu 2002 $18.915 triệu (83% sản phẩm, 17% dịch vụ). Vốn hoá đỉnh 2000 gần $600 tỷ, nay $97,8 tỷ (−83%), P/E 53, P/S > 5. Chương trình mua lại cổ phiếu 8/2002 tăng thêm $5 tỷ (tổng $8 tỷ).' },
      { t: 'table', head: ['Năm', 'Doanh thu ($triệu)', 'Tăng trưởng'], rows: [
        ['1997', '6.452', '—'], ['1998', '8.488', '31,56%'], ['1999', '12.173', '43,41%'], ['2000', '18.928', '55,49%'], ['2001', '22.293', '17,78%'], ['2002', '18.915', '−15,15%'], ['TB đơn 5 năm / CAGR', '', '26,62% / 24,00%']
      ] },
      { t: 'widget', name: 'cagr', title: 'Trung bình đơn vs CAGR' },
      { t: 'p', x: 'Nhà phân tích đồng thuận (40 nhà: 13 strong buy, 17 buy, 10 hold): tăng trưởng 5 năm <b>20%/năm</b> (Yahoo/First Call; Zacks 20,05%) — lạc quan so với 55% → 17% → −15%. Sách dùng 20% (kịch bản cao) và 5% (kịch bản thấp); giai đoạn vượt trội <b>10 năm</b> (thương hiệu, kênh phân phối) dù đối thủ đang lấn sân.' },
      { t: 'table', head: ['Năm', 'Doanh thu', 'CGS', 'SG&A', 'R&D', 'NOP', 'NOPM'], rows: [
        ['2002', '18.915', '6.902', '4.882', '3.448', '3.683', '19,47%'], ['2001', '22.293', '11.221', '6.074', '3.922', '1.076', '4,83%'], ['2000', '18.928', '6.746', '4.579', '2.704', '4.719', '24,93%'], ['TB 3 năm', '', '', '', '', '', '<b>16,41%</b>']
      ] },
      { t: 'list', items: [
        '<b>NOPM</b> thất thường ⇒ dùng trung bình 3 năm 16,41%. Chi phí tái cơ cấu và đặc biệt không tính vào NOP. Nhãn khác nhau giữa công ty (Cisco “net sales”, McDonald’s “total revenues”, Microsoft “revenue”, Intel “net revenue”); với công ty tài chính, thu nhập lãi và chi phí lãi được tính vào NOP. NOPM âm hoặc không đủ trang trải đầu tư ròng ⇒ giá trị nội tại có thể = 0 (cần what-if thay đổi quản lý).',
        '<b>Thuế</b>: Cisco 2000 = 1.675/4.343 = 38,57%, 2002 = 817/2.710 = 30,15% ⇒ <b>34,36%</b> (2001 lỗ nên bỏ). NOPAT = NOP × (1 − thuế). Lá chắn thuế của nợ không đưa vào dòng tiền mà đưa vào WACC (chi phí nợ sau thuế).'
      ] }
    ] },
    { icon: '🏗️', title: 'Đầu tư ròng và vốn lưu động', blocks: [
      { t: 'key', x: '<b>Đầu tư ròng = đầu tư mới − khấu hao</b>. Cách ước tính dễ nhất: trong giai đoạn vượt trội, giữ đầu tư và khấu hao ở % doanh thu lịch sử; sau đó đặt đầu tư mới = khấu hao (đầu tư ròng = 0). Telecom thập niên 1990 đầu tư quá mức nên không thể có FCF dương — trong định giá giả định quay về mức bền vững.' },
      { t: 'table', head: ['Năm', 'Doanh thu', 'Đầu tư', '% DT', 'Khấu hao', '% DT', 'Đầu tư ròng'], rows: [
        ['2002', '18.915', '2.641', '13,96%', '1.957', '10,35%', '684'], ['2001', '22.293', '2.271', '10,19%', '2.236', '10,03%', '35'], ['2000', '18.928', '1.086', '5,74%', '863', '4,56%', '223'], ['TB 3 năm', '', '', '<b>9,96%</b>', '', '<b>8,31%</b>', '']
      ] },
      { t: 'p', x: '<b>Vốn lưu động</b> = (phải thu + tồn kho) − phải trả; nhân với <b>mức tăng doanh thu</b> (không phải mức doanh thu). Intel trung bình 14,8% doanh thu; một số tiện ích có luồng tiền vào (thặng dư vốn lưu động). Cisco: 2002 = 1.105 + 880 − 470 = 1.515 (8,01%); 2001 = 11,24%; trung bình 2 năm <b>9,63%</b>. Dòng tiền ít nhạy với đại lượng này nhất.' }
    ] },
    { icon: '💰', title: 'FCFF, giá trị còn lại và kết quả', blocks: [
      { t: 'key', x: '<b>FCFF = NOPAT − Đầu tư ròng − Thay đổi vốn lưu động</b>. Cisco (tăng trưởng 20%, NOPM 16,41%, thuế 34,36%, đầu tư 9,96%, khấu hao 8,31%, VLĐ 9,63%): FCFF 2003 = $1.706 triệu … 2012 = $8.803 triệu (NOPAT 2012 $12.615 triệu).' },
      { t: 'steps', items: [
        'Doanh thu 2012 = $18.915 × 1,2<sup>10</sup> ≈ $117.117 triệu.',
        'Giá trị còn lại tại 2013 = NOPAT ÷ WACC = 12.615 ÷ 0,1004 = <b>$125.650 triệu</b>; × hệ số chiết khấu năm 10 (0,3841) = <b>$48.268 triệu</b> (~60% giá trị vốn chủ).',
        'Giá trị doanh nghiệp = $89.314 triệu (gồm tài sản ngắn hạn). Cisco không có nợ/ưu đãi; trừ nợ ngắn hạn ⇒ giá trị vốn chủ <b>$80.939 triệu</b> ⇒ chia cổ phiếu pha loãng ⇒ <b>$10,87/cổ phiếu</b> (tăng 20%) so với giá $14,45 ngày 14/8/2002 ⇒ khuyến nghị bán.',
        'Với tăng trưởng 5%: giá trị chỉ <b>$4,64</b> (−57%).'
      ] },
      { t: 'widget', name: 'fcff-dcf', title: 'Thử mô hình DCF: thay số của Cisco (DT 18.915, g 20, NOPM 16,41, thuế 34,36…)' },
      { t: 'warn', x: 'Câu hỏi sách đặt ra: thị trường biết điều chúng ta không biết, hay đang dùng giả định thuận lợi hơn? Bài học: ngay cả tăng trưởng 20% trong 10 năm của Cisco cũng chưa biện minh cho giá $14,45 — giá chứa kỳ vọng rất cao.' }
    ] }
  ],
  summary: [
    'Năm đại lượng: tăng trưởng, NOPM, thuế, đầu tư ròng, vốn lưu động tăng thêm.',
    'Dùng CAGR, định giá với ít nhất hai kịch bản tăng trưởng (nhà phân tích và 3–5%).',
    'NOPM thất thường thì dùng trung bình 3 năm; đầu tư ròng về 0 sau giai đoạn vượt trội.',
    'FCFF = NOPAT − đầu tư ròng − ΔVLĐ; giá trị còn lại = NOPAT ÷ WACC (≈ 60–90% giá trị).',
    'Cisco: $10,87 (g = 20%) và $4,64 (g = 5%) so với giá $14,45 ⇒ bị định giá cao.'
  ],
  cards: [
    ['“Năm anh em người Hoa” là gì?', 'Năm đại lượng dòng tiền: tăng trưởng, NOPM, thuế, đầu tư ròng, vốn lưu động.'],
    ['Vì sao dùng doanh thu để áp tăng trưởng?', 'Doanh thu ít bị thao túng hơn lợi nhuận.'],
    ['Nguồn dự báo tăng trưởng?', 'Yahoo Finance, First Call, Zacks, môi giới; lịch sử công ty.'],
    ['Vì sao cẩn thận với dự báo của nhà phân tích?', 'Kỳ vọng vượt thực tế 16/18 năm, trung bình 9% (Fed).'],
    ['“Mua tăng trưởng” là gì?', 'Thâu tóm công ty nhỏ bằng cổ phiếu mới — pha loãng cổ đông.'],
    ['Cách xử lý hai kịch bản tăng trưởng?', 'Dùng đồng thuận nhà phân tích (cao) và 3–5% kinh tế (thấp) để tạo khoảng giá trị.'],
    ['CAGR?', '(Giá trị cuối ÷ giá trị đầu)^(1/T) − 1.'],
    ['NOPM thất thường dùng gì?', 'Trung bình 3 năm gần nhất.'],
    ['Thuế suất ước tính ra sao?', 'Thuế ÷ lợi nhuận trước thuế; bỏ năm lỗ; có thể what-if 35%.'],
    ['Vì sao lá chắn thuế của nợ không nằm trong FCFF?', 'Được đưa vào WACC qua chi phí nợ sau thuế.'],
    ['Cách ước tính đầu tư ròng?', 'Đầu tư và khấu hao theo % doanh thu lịch sử; sau vượt trội đặt bằng nhau.'],
    ['Vốn lưu động tăng thêm tính thế nào?', 'Tỷ lệ VLĐ × mức tăng doanh thu.'],
    ['Cisco giá trị 20% vs 5% tăng trưởng?', '$10,87 vs $4,64.'],
    ['Giá trị còn lại của Cisco?', '12.615 ÷ 0,1004 = $125.650 triệu năm 2013; hiện giá $48.268 triệu.'],
    ['Quy tắc ra quyết định khi có khoảng giá trị?', 'Giá > cao nhất ⇒ bán; giữa ⇒ cân nhắc; < thấp nhất ⇒ cơ hội.']
  ],
  quiz: [
    { q: 'Doanh thu 18.915 → 22.293: tăng trưởng 2001:', o: ['17,8%', '15,1%', '55,5%', '31,6%'], a: 0, e: '(22.293/18.928)−1.' },
    { q: 'CAGR Cisco 1997–2002 ≈', o: ['26,62%', '24,00%', '20%', '15%'], a: 1, e: 'Thấp hơn trung bình đơn.' },
    { q: 'NOPM Cisco dùng:', o: ['24,93%', '4,83%', '16,41% (TB 3 năm)', '19,47%'], a: 2, e: 'NOPM thất thường.' },
    { q: 'Thuế suất Cisco dùng:', o: ['30,15%', '34,36%', '38,57%', '35%'], a: 1, e: 'TB 2000 và 2002.' },
    { q: 'Vốn lưu động tính trên:', o: ['Mức doanh thu', 'Mức tăng doanh thu', 'Lợi nhuận', 'Tài sản'], a: 1, e: 'Intercept zero khi không tăng.' },
    { q: 'Sau giai đoạn vượt trội đầu tư mới:', o: ['Lớn hơn khấu hao', 'Bằng khấu hao', 'Bằng 0', 'Âm'], a: 1, e: 'Đầu tư ròng = 0.' },
    { q: 'Giá trị còn lại Cisco hiện tại khoảng:', o: ['$125.650 triệu', '$48.268 triệu', '$8.803 triệu', '$89.314 triệu'], a: 1, e: 'Sau chiết khấu 0,3841.' },
    { q: 'Cisco 5% tăng trưởng thì giá trị:', o: ['Tăng', '$4,64', '$20', 'Không đổi'], a: 1, e: 'Giảm 57%.' },
    { q: 'Khi giá < giá trị thấp nhất, sách:', o: ['Bán', 'Xem là cơ hội, phân tích thêm', 'Bỏ qua', 'Bán khống'], a: 1, e: 'Good buying opportunity.' },
    { q: 'Tăng trưởng đồng thuận của nhà phân tích Cisco:', o: ['5%', '10%', '20%', '40%'], a: 2, e: 'Yahoo/First Call.' },
    { q: 'Cổ phiếu tăng trưởng theo thời gian thường:', o: ['Mãi tăng nhanh', 'Hội tụ về tăng trưởng kinh tế', 'Biến mất', 'Chuyển sang vàng'], a: 1, e: 'Hồi quy về trung bình.' }
  ],
  match: [
    ['CAGR', 'Tốc độ tăng kép'],
    ['NOPAT', 'NOP × (1 − thuế)'],
    ['Đầu tư ròng', 'Đầu tư − khấu hao'],
    ['VLĐ tăng thêm', 'Tỷ lệ × Δ doanh thu'],
    ['Giá trị còn lại', 'NOPAT ÷ WACC'],
    ['Mua tăng trưởng', 'Thâu tóm bằng cổ phiếu'],
    ['What-if', 'Thử kịch bản tăng trưởng khác']
  ]
});
