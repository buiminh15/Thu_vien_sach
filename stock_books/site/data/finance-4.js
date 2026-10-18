// "Phân tích tài chính" – Bài 9–11.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 9 ======================= */
{
  n: 9,
  title: 'Quản trị khoản phải thu và hàng tồn kho',
  intro: 'Bán chịu giúp tăng doanh thu nhưng sinh chi phí và nợ khó đòi; tồn kho giúp sản xuất liên tục nhưng tốn vốn. Bài này dạy phân tích đánh đổi bằng số liệu: tiêu chuẩn và điều khoản bán chịu, chiết khấu, rủi ro tín dụng, phân loại ABC, mô hình EOQ và điểm đặt hàng.',
  sections: [
    { icon: '🧾', title: 'Quản trị khoản phải thu: đánh đổi lợi nhuận – rủi ro', blocks: [
      { t: 'p', x: '<b>Khoản phải thu</b> là số tiền khách hàng nợ do mua chịu. Không bán chịu → mất cơ hội bán (mất lợi nhuận); bán chịu quá nhiều → <b>chi phí khoản phải thu tăng</b> và nguy cơ nợ khó đòi. Chính sách bán chịu (ảnh hưởng mạnh nhất, nằm trong tầm kiểm soát của giám đốc tài chính) gồm: <b>tiêu chuẩn</b>, <b>điều khoản</b>, <b>rủi ro</b>, <b>chính sách và quy trình thu nợ</b>.' },
      { t: 'key', x: 'Quy tắc phân tích: so sánh <b>lợi nhuận tăng thêm</b> (lãi gộp × số đơn vị bán thêm) với <b>phí tổn đầu tư khoản phải thu tăng thêm</b> = (khoản phải thu tăng thêm × tỷ lệ chi phí khả biến/giá bán) × chi phí cơ hội. Chính sách được chấp nhận nếu lợi nhuận tăng thêm &gt; phí tổn.' }
    ] },
    { icon: '🧮', title: 'Ví dụ 1: nới lỏng tiêu chuẩn bán chịu', blocks: [
      { t: 'p', x: 'Công ty ABC: giá $10, chi phí khả biến $8 (lãi gộp $2), doanh thu hiện tại $2,4 triệu, còn công suất. Nới tiêu chuẩn → doanh thu +25%; kỳ thu tiền khách mới 2 tháng; chi phí cơ hội 20%.' },
      { t: 'steps', items: [
        'Doanh thu tăng = 2.400.000 × 25% = <b>$600.000</b> → 60.000 đơn vị.',
        'Lợi nhuận tăng thêm = 2 × 60.000 = <b>$120.000</b>.',
        'Vòng quay phải thu = 12/2 = 6 → khoản phải thu tăng = 600.000/6 = $100.000.',
        'Vốn đầu tư thực = (8/10) × 100.000 = $80.000 → phí tổn = 80.000 × 20% = <b>$16.000</b>.',
        '120.000 &gt; 16.000 → <b>nên nới lỏng</b>.'
      ] }
    ] },
    { icon: '📆', title: 'Ví dụ 2–3: thời hạn và chiết khấu', blocks: [
      { t: 'tabs', items: [
        ['Đổi thời hạn: net 30 → net 60', 'Kỳ thu 1 → 2 tháng; doanh thu tăng $360.000 (36.000 đơn vị; lợi nhuận tăng 2 × 36.000 = <b>$72.000</b>). Khoản phải thu từ doanh thu mới: 360.000/6 = 60.000 → vốn 48.000. Khoản phải thu cũ: từ 200.000 (2,4 triệu/12) lên 400.000 (÷6) → tăng 200.000 → vốn 160.000. Tổng vốn 208.000 × 20% = <b>$41.600</b>. 72.000 &gt; 41.600 → <b>nên mở rộng</b>.'],
        ['Chiết khấu 2/10 net 45', 'Doanh thu $3 triệu, kỳ thu 2 tháng (phải thu 500.000); sau khi áp dụng 2/10 net 45: kỳ thu 1 tháng (phải thu 250.000), 60% khách lấy chiết khấu. Tiết kiệm chi phí cơ hội = 250.000 × 20% = <b>$50.000</b>; chi phí chiết khấu = 3.000.000 × 0,6 × 2% = <b>$36.000</b>. 50.000 &gt; 36.000 → <b>nên áp dụng</b>.'],
        ['Rủi ro tín dụng: chính sách A hay B?', 'Hiện tại: doanh thu 2,4 triệu, nợ xấu 2%, kỳ thu 1 tháng. <b>A</b>: +600.000, nợ xấu doanh thu mới 10%, kỳ thu mới 2 tháng. <b>B</b>: +300.000, nợ xấu 18%, kỳ thu 3 tháng. Lãi gộp 20%, chi phí cơ hội 20%. Lợi nhuận tăng: A 120.000; B 60.000. Phải thu tăng: A 100.000; B 75.000 → vốn 80.000/60.000 → chi phí cơ hội 16.000/12.000. Nợ xấu: A 60.000; B 54.000. Thiệt hại A 76.000; B 66.000. <b>Ròng: A +44.000; B −6.000 → chọn A.</b>']
      ] },
      { t: 'tip', x: '<b>Điều khoản “2/10 net 30”</b>: chiết khấu 2% nếu trả trong 10 ngày, nếu không trả đủ trong 30 ngày kể từ ngày hóa đơn. Đánh giá uy tín khách hàng gồm 3 bước: thu thập thông tin → phân tích để phán quyết uy tín → quyết định bán chịu hay không.' }
    ] },
    { icon: '📦', title: 'Quản trị và kiểm soát tồn kho', blocks: [
      { t: 'p', x: 'Tồn kho nối sản xuất với tiêu thụ: nguyên liệu (chủ động sản xuất), sản phẩm dở dang (sản xuất liên tục), thành phẩm (chủ động tiêu thụ). Mặt trái: <b>chi phí kho bãi, bảo quản, chi phí cơ hội</b> của vốn bị kẹt — phải cân nhắc đánh đổi lợi ích và phí tổn.' },
      { t: 'table', head: ['Nhóm ABC', 'Tỷ trọng số lượng', 'Tỷ trọng giá trị', 'Kiểm soát'], rows: [
        ['<b>A</b>', '15%', '70%', 'Thường xuyên, chặt chẽ'], ['B', '30%', '20%', 'Vừa phải'], ['C', '55%', '10%', 'Đơn giản']
      ] },
      { t: 'key', x: '<b>EOQ (lượng đặt hàng kinh tế)</b>: tổng chi phí T = C·(Q/2) + O·(S/Q) (duy trì + đặt hàng). Đạo hàm bằng 0 → <b>Q* = √(2·S·O / C)</b>. Ví dụ: S = 2.000 đơn vị/100 ngày, O = 10 triệu/đơn, C = 1 triệu/đơn vị/kỳ → Q* = √(2·2000·10/1) = <b>200 đơn vị</b> → đặt hàng mỗi 10 ngày.' },
      { t: 'widget', name: 'eoq', title: 'EOQ và điểm đặt hàng' },
      { t: 'tip', x: '<b>Điểm đặt hàng (OP)</b> = thời gian chờ hàng × lượng dùng/ngày (+ <b>dự trữ an toàn</b> nếu nhu cầu không chắc chắn). Ví dụ chờ 5 ngày × 20 đơn vị/ngày = <b>100 đơn vị</b>: đặt hàng khi tồn kho còn 100.' }
    ] }
  ],
  summary: [
    'Bán chịu: so sánh lợi nhuận tăng thêm với phí tổn đầu tư vào khoản phải thu (và nợ xấu).',
    'Phí tổn đầu tư phải thu = phải thu tăng × (chi phí khả biến/giá bán) × chi phí cơ hội.',
    'Chiết khấu: tiết kiệm chi phí cơ hội vs chi phí chiết khấu; chọn chính sách có lợi nhuận ròng cao nhất.',
    'Tồn kho: phân loại ABC; EOQ = √(2SO/C); điểm đặt hàng = thời gian chờ × lượng dùng/ngày (+ dự trữ an toàn).'
  ],
  cards: [
    ['Khoản phải thu là gì?', 'Số tiền khách hàng nợ công ty do mua chịu hàng hóa, dịch vụ.'],
    ['Đánh đổi của bán chịu?', 'Tăng doanh thu/lợi nhuận nhưng tăng chi phí khoản phải thu và rủi ro nợ khó đòi.'],
    ['Bốn bộ phận chính sách bán chịu?', 'Tiêu chuẩn, điều khoản, rủi ro, chính sách thu nợ.'],
    ['Cách tính phí tổn đầu tư khoản phải thu?', '(Khoản phải thu tăng × chi phí khả biến/giá) × chi phí cơ hội.'],
    ['Điều khoản “2/10 net 30”?', 'Chiết khấu 2% nếu trả trong 10 ngày; hạn tối đa 30 ngày.'],
    ['Ví dụ nới lỏng tiêu chuẩn: kết quả?', 'Lợi nhuận tăng 120.000 > phí tổn 16.000 → nên nới.'],
    ['Phân loại tồn kho ABC?', 'A: 15% số lượng, 70% giá trị (kiểm soát chặt); B: 30%, 20%; C: 55%, 10%.'],
    ['Hai mặt của tồn kho?', 'Giúp chủ động sản xuất/tiêu thụ nhưng tốn chi phí kho và chi phí cơ hội vốn.'],
    ['Công thức EOQ?', 'Q* = √(2·S·O/C).'],
    ['Điểm đặt hàng?', 'Thời gian chờ hàng × lượng dùng mỗi ngày (+ dự trữ an toàn).']
  ],
  quiz: [
    { q: 'Điều khoản “2/10 net 30” nghĩa là:', o: ['Trả trong 10 ngày được chiết khấu 2%', 'Chiết khấu 10% nếu trả 2 ngày', 'Trả 30% sau 2 ngày', 'Lãi 2%/tháng'], a: 0, e: 'Hạn tối đa 30 ngày.' },
    { q: 'Nới tiêu chuẩn bán chịu: lợi nhuận tăng 120.000, phí tổn 16.000 → nên:', o: ['Nới lỏng', 'Siết chặt', 'Không đổi', 'Đóng cửa'], a: 0, e: 'Lợi nhuận lớn hơn phí tổn.' },
    { q: 'Vòng quay phải thu 6 vòng/năm tương ứng kỳ thu:', o: ['1 tháng', '2 tháng', '3 tháng', '6 tháng'], a: 1, e: '12/6.' },
    { q: 'Chính sách chiết khấu 2/10 net 45: tiết kiệm chi phí cơ hội 50.000 vs chi phí chiết khấu 36.000 →', o: ['Không nên', 'Nên áp dụng', 'Hòa', 'Không đủ dữ liệu'], a: 1, e: '50.000 > 36.000.' },
    { q: 'Nhóm tồn kho A:', o: ['Ít số lượng nhưng nhiều giá trị', 'Nhiều số lượng, ít giá trị', 'Không quan trọng', 'Luôn bằng 0'], a: 0, e: '15% số lượng, 70% giá trị.' },
    { q: 'EOQ với S = 2.000, O = 10, C = 1 (cùng đơn vị) là:', o: ['100', '200', '400', '2.000'], a: 1, e: '√(2·2000·10/1) = 200.' },
    { q: 'Điểm đặt hàng khi chờ 5 ngày, dùng 20 đơn vị/ngày:', o: ['20', '50', '100', '200'], a: 2, e: '5 × 20.' },
    { q: 'Chi phí duy trì tồn kho KHÔNG gồm:', o: ['Kho bãi', 'Bảo quản', 'Chi phí cơ hội', 'Chi phí đặt hàng'], a: 3, e: 'Chi phí đặt hàng là loại riêng.' }
  ],
  match: [
    ['EOQ', 'Lượng đặt hàng làm tổng chi phí nhỏ nhất'],
    ['ABC', 'Phân loại tồn kho theo giá trị'],
    ['Net 30', 'Hạn thanh toán tối đa 30 ngày'],
    ['Chi phí cơ hội phải thu', 'Lãi mất vì vốn kẹt trong khoản phải thu'],
    ['OP', 'Thời gian chờ × lượng dùng/ngày'],
    ['Dự trữ an toàn', 'Phòng nhu cầu không chắc chắn']
  ]
},

/* ======================= BÀI 10 ======================= */
{
  n: 10,
  title: 'Dự toán vốn đầu tư',
  intro: 'Khi nào nên chi một khoản tiền lớn cho dự án sinh lời nhiều năm? Ước lượng ngân lưu tăng thêm và bốn tiêu chuẩn: NPV, IRR, thời gian hoàn vốn, suất sinh lợi sổ sách và PI; cách chọn dự án khi giới hạn ngân sách.',
  sections: [
    { icon: '🏗️', title: 'Bài toán dự toán vốn đầu tư', blocks: [
      { t: 'p', x: '<b>Dự toán vốn đầu tư (capital budgeting)</b> là quá trình lập kế hoạch cho một khoản chi đầu tư có sinh lời kỳ vọng liên tục nhiều năm: mở rộng sản phẩm hoặc ngành mới, thay thế tài sản, chiến dịch quảng cáo, thuê hay mua, sáp nhập mua lại… Cơ sở đánh giá là <b>ngân lưu tăng thêm</b> của công ty <b>khi có dự án so với khi không có dự án</b>.' },
      { t: 'table', head: ['Quan hệ giữa dự án', 'Nghĩa'], rows: [
        ['<b>Độc lập</b>', 'Chấp nhận/bác bỏ không ảnh hưởng dự án khác'],
        ['<b>Loại trừ nhau</b>', 'Không thể chấp nhận đồng thời; chỉ chọn một'],
        ['<b>Phụ thuộc</b>', 'Chấp nhận hay không phụ thuộc vào dự án khác']
      ] },
      { t: 'key', x: 'Quyết định dựa vào hai yếu tố: <b>ngân lưu</b> dự án và <b>suất chiết khấu</b> (bài 11). Ghi nhận dòng tiền vào/ra đều ở <b>cuối năm</b>.' }
    ] },
    { icon: '💵', title: 'Vì sao dùng ngân lưu, không dùng lợi nhuận?', blocks: [
      { t: 'p', x: 'Lợi nhuận không phản ánh đúng <b>thời điểm</b> thu chi tiền, nên không phản ánh lợi ích theo thời giá tiền tệ. Ví dụ đầu tư $900 triệu, doanh thu 1.000/năm trong 3 năm, chi phí tiền mặt 500/năm, khấu hao đều 300/năm, thuế 30%, suất chiết khấu 8%:' },
      { t: 'table', head: ['', 'Năm 0', 'Năm 1–3 (mỗi năm)'], rows: [
        ['Lợi nhuận trước thuế = 1.000 − 500 − 300', '', '200'], ['Thuế 30%', '', '60'], ['Lợi nhuận sau thuế', '', '140'],
        ['<b>Ngân lưu sau thuế</b> = 1.000 − 500 − 60', '−900 (mua tài sản)', '<b>440</b>']
      ] },
      { t: 'p', x: 'NPV tính trên <b>lợi nhuận</b>: 140 × 2,5771 = <b>360,79</b> (sai: bỏ qua việc 900 chi ra ngay, lại chỉ chiết khấu lợi nhuận kế toán). NPV tính trên <b>ngân lưu</b>: 440 × 2,5771 − 900 = <b>233,92</b> (đúng). Lưu ý <b>khấu hao không phải dòng tiền</b> nhưng làm giảm thuế (lá chắn thuế: 300 × 30% = 90/năm).' }
    ] },
    { icon: '🧭', title: 'Các tiêu chuẩn đánh giá dự án', blocks: [
      { t: 'tabs', items: [
        ['NPV – giá trị hiện tại ròng', '<b>NPV = Σ NCFₜ/(1+r)ᵗ − vốn đầu tư ban đầu</b>. Chấp nhận nếu <b>NPV &gt; 0</b>: dự án tăng giá trị cho cổ đông. Là số đo tuyệt đối, tính thời giá tiền, dùng cả dòng tiền, cộng được (additivity). Là tiêu chuẩn tốt nhất.'],
        ['IRR – suất sinh lợi nội bộ', 'Suất chiết khấu làm <b>NPV = 0</b>. Chấp nhận nếu IRR &gt; chi phí vốn. Hạn chế: dòng tiền đổi dấu nhiều lần có thể có nhiều IRR (ví dụ −300, 200, 200, 200, −200: có hai IRR là −39,07% và 27,73%); xếp hạng sai khi loại trừ nhau về quy mô hoặc thời gian.'],
        ['PBP – thời gian hoàn vốn', 'Thời gian để ngân lưu tích lũy bù chi phí ban đầu. Ví dụ NCF: −500, 200, 200, 200, 250 → PBP = 2 + 100/200 = <b>2,5 năm</b> (≤ ngưỡng 3 năm → chấp nhận). Ưu: đơn giản, cho biết thanh khoản/rủi ro. Nhược: <b>bỏ qua dòng tiền sau hoàn vốn</b>, không tính thời giá, ngưỡng chủ quan. <b>PBP có chiết khấu</b> (12%): PV các năm 178,57; 159,44; 142,36; 158,88 → hoàn vốn ở 3 + 19,63/158,88 = <b>3,12 năm</b> &gt; 3 → bác bỏ.'],
        ['ARR – suất sinh lợi sổ sách', 'Lợi nhuận ròng bình quân ÷ giá trị sổ sách ròng bình quân. Ví dụ vốn 1.200, khấu hao 4 năm, lợi nhuận sau thuế 70, 105, 140, 140 → bình quân 113,75; sổ sách ròng bình quân (900+600+300+0)/4 = 450 → ARR = <b>25,28%</b>. Nhược điểm: dựa vào lợi nhuận kế toán, <b>không tính thời giá tiền tệ</b>, phụ thuộc phương pháp khấu hao; so với suất sinh lời hiện tại của công ty dễ gây quyết định cục bộ.'],
        ['PI – chỉ số lợi nhuận', '<b>PI = hiện giá ngân lưu vào / vốn đầu tư = NPV/ICO + 1</b>. Chấp nhận nếu PI ≥ 1. Ví dụ NPV 139,25 trên vốn 500: PI = 639,25/500 = <b>1,28</b>. Là số đo tương đối (của cải tạo ra trên mỗi đồng vốn).']
      ] },
      { t: 'widget', name: 'npv', title: 'Nhập dòng tiền và chiết khấu: tính NPV, IRR, hoàn vốn, PI' }
    ] },
    { icon: '💰', title: 'Chọn dự án khi giới hạn ngân sách', blocks: [
      { t: 'p', x: 'Khi ngân sách bị giới hạn: tính PI của mọi dự án → xếp từ cao xuống thấp → chọn lần lượt tới hết ngân sách. Nếu dự án cuối quá lớn so với phần còn lại: tìm tổ hợp mới có NPV cao nhất; nới ngân sách; hoặc đầu tư tiền thừa vào chứng khoán ngắn hạn/trả nợ/mua lại cổ phiếu.' },
      { t: 'table', head: ['Dự án', 'Vốn ICO', 'IRR', 'NPV', 'PI'], rows: [
        ['A', '500', '18%', '50', '1,10'], ['B', '5.000', '25%', '6.500', '2,30'], ['C', '5.000', '37%', '5.500', '2,10'], ['D', '7.500', '20%', '5.000', '1,67'],
        ['E', '12.500', '26%', '500', '1,04'], ['F', '15.000', '28%', '21.000', '2,40'], ['G', '17.500', '19%', '7.500', '1,43'], ['H', '25.000', '15%', '6.000', '1,24']
      ] },
      { t: 'table', head: ['Cách xếp hạng (ngân sách $32.500)', 'Dự án chọn', 'Tổng NPV'], rows: [
        ['<b>PI</b>', 'F, B, C, D (15.000 + 5.000 + 5.000 + 7.500)', '<b>$38.000</b>'], ['NPV', 'F, G', '$28.500'], ['IRR', 'C, F, E', '$27.000']
      ] },
      { t: 'warn', x: 'Nếu ngân sách giới hạn <b>theo từng năm</b> thì phải kết hợp ngân lưu năm sau: Ví dụ A (−10, 30, 5), B (−5, 5, 20), C (−5, +5, +15), D (0, −40, 60). Ngân sách 10 triệu: PI chọn B và C → NPV 28. Nhưng nếu huy động được 10 triệu mỗi năm 0 và 1, chọn A và D: NPV 34 (A thu 30 ở năm 1 giúp có tiền đầu tư D).' }
    ] }
  ],
  summary: [
    'Dự án đánh giá bằng ngân lưu tăng thêm sau thuế, chiết khấu về hiện tại; khấu hao tạo lá chắn thuế.',
    'NPV > 0 → chấp nhận; IRR là suất làm NPV = 0 (có thể nhiều nghiệm).',
    'Hoàn vốn và ARR đơn giản nhưng bỏ qua thời giá tiền hoặc dòng tiền sau hoàn vốn.',
    'PI = NPV/ICO + 1; khi giới hạn ngân sách, xếp hạng theo PI.'
  ],
  cards: [
    ['Dự toán vốn đầu tư?', 'Lập kế hoạch cho khoản chi đầu tư có sinh lời kỳ vọng nhiều năm.'],
    ['Cơ sở đánh giá dự án?', 'Ngân lưu tăng thêm khi có dự án so với không có dự án.'],
    ['Dự án độc lập / loại trừ / phụ thuộc?', 'Không ảnh hưởng nhau / chỉ chọn một / phụ thuộc dự án khác.'],
    ['Vì sao dùng ngân lưu thay lợi nhuận?', 'Lợi nhuận không phản ánh đúng thời điểm thu chi tiền, không đúng theo thời giá tiền tệ.'],
    ['NPV là gì?', 'Tổng hiện giá ngân lưu trừ vốn đầu tư; NPV > 0 → chấp nhận.'],
    ['IRR là gì?', 'Suất chiết khấu làm NPV = 0.'],
    ['Hạn chế của IRR?', 'Có thể nhiều IRR khi dòng tiền đổi dấu nhiều lần; xếp hạng sai với dự án loại trừ khác quy mô/thời gian.'],
    ['Thời gian hoàn vốn?', 'Thời gian để ngân lưu tích lũy bù vốn đầu tư ban đầu.'],
    ['Nhược điểm của PBP?', 'Bỏ qua dòng tiền sau hoàn vốn; (không chiết khấu) bỏ qua thời giá tiền; ngưỡng chủ quan.'],
    ['ARR là gì?', 'Lợi nhuận ròng bình quân ÷ giá trị sổ sách ròng bình quân; không tính thời giá tiền.'],
    ['PI là gì?', 'Hiện giá ngân lưu vào ÷ vốn đầu tư = NPV/ICO + 1; chấp nhận khi ≥ 1.'],
    ['Khi giới hạn ngân sách nên xếp hạng theo?', 'PI (cho tổng NPV cao nhất).']
  ],
  quiz: [
    { q: 'Cơ sở đánh giá dự án là:', o: ['Lợi nhuận kế toán', 'Ngân lưu tăng thêm', 'Doanh thu', 'Giá trị sổ sách'], a: 1, e: 'Phản ánh thời điểm thu chi tiền.' },
    { q: 'NPV > 0 nghĩa là:', o: ['Bác bỏ', 'Chấp nhận dự án', 'Hòa vốn', 'Không đủ thông tin'], a: 1, e: 'Dự án tăng giá trị cổ đông.' },
    { q: 'IRR là suất chiết khấu làm:', o: ['NPV = 0', 'PI = 0', 'NPV lớn nhất', 'Doanh thu = chi phí'], a: 0, e: 'Định nghĩa IRR.' },
    { q: 'Dự án −500, 200, 200, 200, 250: PBP không chiết khấu:', o: ['2 năm', '2,5 năm', '3 năm', '4 năm'], a: 1, e: '2 + 100/200.' },
    { q: 'Cùng dự án với suất chiết khấu 12%, PBP có chiết khấu khoảng:', o: ['2,5', '3,12', '4', '5'], a: 1, e: '3 + 19,63/158,88.' },
    { q: 'PI của dự án NPV 139,25, vốn 500:', o: ['0,28', '1,28', '2,78', '0,72'], a: 1, e: '139,25/500 + 1.' },
    { q: 'Hạn chế chung của PBP và ARR:', o: ['Đều quá phức tạp', 'Không đầy đủ về thời giá tiền hoặc dòng tiền', 'Đều dùng chiết khấu', 'Đều dùng NPV'], a: 1, e: 'PBP bỏ qua dòng tiền sau; ARR bỏ qua thời giá.' },
    { q: 'Khi ngân sách giới hạn, xếp hạng theo:', o: ['IRR', 'PI', 'PBP', 'ARR'], a: 1, e: 'Cho tổng NPV cao nhất (ví dụ 38.000).' },
    { q: 'Ngân lưu sau thuế của ví dụ 900 triệu mỗi năm là:', o: ['140', '440', '500', '200'], a: 1, e: '1.000 − 500 − 60.' },
    { q: 'Khấu hao ảnh hưởng ngân lưu thế nào?', o: ['Là dòng tiền ra', 'Không phải dòng tiền nhưng giảm thuế', 'Không ảnh hưởng', 'Tăng doanh thu'], a: 1, e: 'Lá chắn thuế.' }
  ],
  match: [
    ['NPV', 'Tổng hiện giá ngân lưu − vốn'],
    ['IRR', 'Suất chiết khấu làm NPV = 0'],
    ['PBP', 'Thời gian bù vốn'],
    ['ARR', 'Lợi nhuận bình quân / sổ sách bình quân'],
    ['PI', 'NPV/ICO + 1'],
    ['Dự án loại trừ', 'Chỉ chọn một']
  ]
},

/* ======================= BÀI 11 ======================= */
{
  n: 11,
  title: 'Chi phí sử dụng vốn',
  intro: 'Suất chiết khấu của dự án chính là chi phí vốn: cái giá công ty phải trả để có tiền. Chi phí nợ (sau thuế), cổ phiếu ưu đãi, vốn cổ phần (DCF và CAPM), WACC và điều chỉnh theo rủi ro dự án.',
  sections: [
    { icon: '🎚️', title: 'Chi phí vốn là gì?', blocks: [
      { t: 'p', x: 'Dự án có NPV dương khi suất sinh lợi vượt <b>suất sinh lời yêu cầu</b> — bằng suất sinh lời của tài sản rủi ro tương đương trên thị trường tài chính. <b>Suất chiết khấu = chi phí cơ hội của vốn</b>. Dự án rủi ro hơn công ty thì suất sinh lời yêu cầu phải cao hơn.' }
    ] },
    { icon: '🏦', title: 'Chi phí nợ và cổ phiếu ưu đãi', blocks: [
      { t: 'key', x: '<b>Chi phí nợ sau thuế = R_D·(1 − T_C)</b> vì lãi vay được trừ khỏi thu nhập chịu thuế. Ví dụ vay $100, lãi 10%: trả $10, tiết kiệm thuế $3 (30%) → chi phí thực $7 = 7%.' },
      { t: 'list', items: [
        'Nếu huy động bằng trái phiếu: R_D là <b>lãi suất đáo hạn</b> (YTM) tính từ Pnet = giá bán − chi phí phát hành. Ví dụ trái phiếu mệnh giá $100, coupon 9%, kỳ hạn 3 năm, giá $96, chi phí phát hành $1 → Pnet = $95; YTM ≈ <b>11%</b> → sau thuế ≈ 7,7%.',
        'Nếu không phát hành mới: dùng YTM trái phiếu đang lưu hành, hoặc chi phí nợ của công ty rủi ro tương tự.',
        '<b>Cổ phiếu ưu đãi</b>: cổ tức cố định vĩnh viễn → P_net = D_p/R_p → <b>R_p = D_p / P_net</b>. Cổ tức ưu đãi <b>không được khấu trừ thuế</b> → chi phí cao hơn nợ → công ty thích đòn bẩy bằng nợ.'
      ] }
    ] },
    { icon: '📊', title: 'Chi phí vốn cổ phần thường', blocks: [
      { t: 'tabs', items: [
        ['Mô hình tăng trưởng cổ tức (DCF)', '<b>R_E = D₁/P₀ + g = D₀(1+g)/P₀ + g</b>. Quan sát D₀, P₀; ước lượng g từ tăng trưởng quá khứ hoặc dự báo của nhà phân tích. Ưu: đơn giản. Nhược: <b>không dùng cho công ty không trả cổ tức</b>, giả định g cố định, không thể hiện rõ quan hệ rủi ro – lợi nhuận.'],
        ['CAPM', '<b>R_E = R_f + β·(R_M − R_f)</b>. Điều chỉnh trực tiếp lợi nhuận–rủi ro; dùng rộng rãi hơn; nhưng beta ước lượng từ dữ liệu quá khứ.'],
        ['Kết hợp', 'Hai cách thường cho kết quả khác nhau → lấy <b>trung bình</b>. Ví dụ β = 1,2; R_f = 6%; phần bù thị trường 8%; D₀ = $2; g = 8%; P₀ = $30: CAPM = 6 + 1,2·8 = <b>15,6%</b>; DCF = 2(1,08)/30 + 8% = <b>15,2%</b> → trung bình <b>15,4%</b>.']
      ] }
    ] },
    { icon: '🧮', title: 'WACC — chi phí vốn bình quân trọng số', blocks: [
      { t: 'key', x: '<b>WACC = (E/V)·R_E + (D/V)·R_D·(1 − T_C)</b>, với E = giá trị thị trường vốn chủ sở hữu (thị giá × số cổ phiếu), D = giá trị thị trường nợ, V = E + D. WACC là suất sinh lời công ty cần đạt để duy trì giá cổ phiếu, và là suất chiết khấu cho dự án có rủi ro <b>tương đương</b> rủi ro hoạt động hiện tại.' },
      { t: 'widget', name: 'wacc', title: 'Tính WACC' },
      { t: 'warn', x: '<b>Đừng dùng một WACC cho mọi dự án</b>. Ví dụ R_f = 7%, phần bù thị trường 8%, công ty không nợ, β = 1 → WACC = 15%. Dự án A (β = 0,5; sinh lời 14%) và B (β = 1,5; sinh lời 17%): dùng WACC 15% thì loại A, nhận B — <b>sai</b>. Suất yêu cầu đúng: A = 7 + 0,5·8 = <b>11%</b> &lt; 14% → <b>nên nhận</b>; B = 7 + 1,5·8 = <b>19%</b> &gt; 17% → <b>nên loại</b>.' },
      { t: 'table', head: ['Phân loại rủi ro', 'Ví dụ', 'Điều chỉnh', 'Suất chiết khấu'], rows: [
        ['Cao', 'Sản phẩm mới', '+4%', '19%'], ['Trung bình (như công ty)', 'Tiết kiệm chi phí, mở rộng sản xuất', '0%', '15%'], ['Thấp', 'Thay thế thiết bị', '−4%', '11%']
      ] }
    ] }
  ],
  summary: [
    'Chi phí vốn = suất sinh lời yêu cầu = suất chiết khấu của dự án.',
    'Chi phí nợ sau thuế = R_D(1 − T); cổ phiếu ưu đãi R_p = D_p/P_net, không được giảm thuế.',
    'Chi phí vốn cổ phần: DCF (D₁/P₀ + g) và CAPM; thường lấy trung bình.',
    'WACC dùng cho dự án rủi ro như công ty; dự án rủi ro khác phải điều chỉnh (+/−).'
  ],
  cards: [
    ['Chi phí vốn là gì?', 'Suất sinh lời yêu cầu tối thiểu: chi phí cơ hội của vốn đầu tư.'],
    ['Chi phí nợ sau thuế?', 'R_D(1 − T_C): lãi vay được khấu trừ thuế.'],
    ['Chi phí cổ phiếu ưu đãi?', 'R_p = D_p/P_net; không điều chỉnh thuế.'],
    ['Vì sao công ty thích nợ hơn cổ phiếu ưu đãi?', 'Nợ có lá chắn thuế; chi phí thấp hơn.'],
    ['Mô hình DCF cho vốn cổ phần?', 'R_E = D₁/P₀ + g.'],
    ['Hạn chế của DCF?', 'Không áp dụng công ty không chia cổ tức, giả định g cố định.'],
    ['CAPM cho vốn cổ phần?', 'R_E = R_f + β(R_M − R_f).'],
    ['WACC?', '(E/V)R_E + (D/V)R_D(1 − T).'],
    ['E và V trong WACC tính theo?', 'Giá trị thị trường.'],
    ['Khi nào WACC dùng được cho dự án?', 'Khi rủi ro dự án tương đương rủi ro hiện tại của công ty.'],
    ['Hệ quả dùng một WACC cho mọi dự án?', 'Loại bỏ dự án tốt rủi ro thấp, nhận dự án kém rủi ro cao.']
  ],
  quiz: [
    { q: 'Vay 10% với thuế 30%: chi phí nợ sau thuế:', o: ['10%', '7%', '3%', '13%'], a: 1, e: '10%·(1−0,3).' },
    { q: 'Chi phí cổ phiếu ưu đãi D_p = 8, P_net = 80:', o: ['8%', '10%', '12%', '1%'], a: 1, e: '8/80.' },
    { q: 'CAPM: β = 1,2; R_f = 6%; phần bù 8% →', o: ['12%', '15,6%', '9,6%', '14%'], a: 1, e: '6 + 1,2·8.' },
    { q: 'DCF: D₀ = 2, g = 8%, P₀ = 30 → R_E:', o: ['7,2%', '15,2%', '8%', '23%'], a: 1, e: '2·1,08/30 + 8%.' },
    { q: 'WACC dùng trọng số theo:', o: ['Giá sổ sách', 'Giá trị thị trường', 'Số lượng', 'Lãi suất'], a: 1, e: 'E và D tính theo thị trường.' },
    { q: 'Dự án A β = 0,5, R_f = 7%, phần bù 8%: suất yêu cầu:', o: ['7%', '11%', '15%', '19%'], a: 1, e: '7 + 0,5·8.' },
    { q: 'Dùng WACC 15% cho cả A (14%) và B (17%) dẫn tới:', o: ['Quyết định đúng', 'Loại A tốt, nhận B kém (sai)', 'Nhận cả hai', 'Loại cả hai'], a: 1, e: 'B yêu cầu 19% > 17%.' },
    { q: 'Cổ tức ưu đãi so với lãi vay về thuế:', o: ['Đều được khấu trừ', 'Cổ tức ưu đãi không được khấu trừ', 'Lãi vay không được khấu trừ', 'Đều không'], a: 1, e: 'Nên chi phí ưu đãi cao hơn nợ.' }
  ],
  match: [
    ['R_D(1−T)', 'Chi phí nợ sau thuế'],
    ['D_p/P_net', 'Chi phí cổ phiếu ưu đãi'],
    ['D₁/P₀ + g', 'Mô hình tăng trưởng cổ tức'],
    ['CAPM', 'R_f + β(R_M − R_f)'],
    ['WACC', 'Chi phí vốn bình quân trọng số'],
    ['Điều chỉnh rủi ro', '+4% / −4% cho dự án rủi ro khác']
  ]
}

);
