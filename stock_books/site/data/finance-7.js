// "Phân tích tài chính" – Bài 16–17.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.phantichtc = BOOK_DATA.phantichtc || { chapters: [] };
BOOK_DATA.phantichtc.chapters.push(

/* ======================= BÀI 16 ======================= */
{
  n: 16,
  title: 'Phân tích tài chính quốc tế',
  intro: 'Khi công ty ra nước ngoài, rủi ro, thuế và tỷ giá đều thay đổi. Bài này giới thiệu ba loại rủi ro tỷ giá, cách yết giá và tỷ giá chéo, giao dịch giao ngay, kỳ hạn (tính theo cân bằng lãi suất) và hoán đổi.',
  sections: [
    { icon: '🌍', title: 'Những yếu tố ảnh hưởng khi phân tích tài chính quốc tế', blocks: [
      { t: 'tabs', items: [
        ['Rủi ro (đa dạng hóa)', 'Do <b>chu kỳ kinh tế các nước khác nhau</b>, đa dạng hóa quốc tế có thể giảm cả rủi ro toàn hệ thống. Ví dụ McDonald’s: khi người tiêu dùng nước giàu (Mỹ, Úc) lo béo phì và ăn ít đi, ở nước đang phát triển người dân vẫn thích — doanh thu được bù trừ.'],
        ['Thuế', 'Đa quốc gia gặp chính sách thuế khác nhau. <b>Mỹ</b>: hoạt động ở nước ngoài qua <b>chi nhánh/bộ phận</b> → thu nhập bị đánh thuế như trong nước; qua <b>công ty con</b> → thường không bị đánh thuế đến khi chia <b>cổ tức</b> cho công ty mẹ (hoãn thuế). Nước kém phát triển thường ưu đãi thuế để hút đầu tư.'],
        ['Rủi ro chính trị', 'Mặt trái của đầu tư nước ngoài: phải đối phó thường xuyên hơn với bất ổn và rủi ro chính trị; cần đánh giá kỹ khi ra quyết định dự án ở nước ngoài.']
      ] }
    ] },
    { icon: '💱', title: 'Ba loại rủi ro tỷ giá', blocks: [
      { t: 'table', head: ['Loại', 'Nội dung', 'Ví dụ'], rows: [
        ['<b>Rủi ro chuyển đổi (kế toán)</b>', 'Thay đổi trên báo cáo tài chính của công ty mẹ khi chuyển đổi báo cáo công ty con từ nội tệ sang đồng tiền của mẹ (do chuẩn mực kế toán khác hoặc biến động tỷ giá)', '—'],
        ['<b>Rủi ro giao dịch</b>', 'Lãi/lỗ khi thực hiện giao dịch kinh doanh đối ngoại bằng ngoại tệ (mua bán, vay, cho vay, mua tài sản)', 'Honda Việt Nam nhập linh kiện bằng USD, bán xe thu VND: USD lên giá → chi phí tăng, doanh thu không đổi'],
        ['<b>Rủi ro kinh tế</b>', 'Thay đổi <b>ngân lưu kỳ vọng</b> khi tỷ giá đổi', 'Công ty Mỹ đầu tư nhà máy ở London 1,3 triệu GBP: tỷ giá 1,5812 → 1,5972 USD/GBP; chi phí từ 2.055.560 lên 2.076.360 USD (+20.800)']
      ] },
      { t: 'tip', x: 'Quản trị rủi ro tỷ giá dùng: hợp đồng kỳ hạn, tương lai, quyền chọn, hoán đổi, hoặc kết hợp vay/cho vay ngoại tệ trên thị trường tiền tệ (bài 17).' }
    ] },
    { icon: '🏦', title: 'Thị trường ngoại hối Việt Nam (tư liệu lịch sử)', blocks: [
      { t: 'list', items: [
        '<b>1991</b>: Ngân hàng Nhà nước lập Trung tâm giao dịch ngoại tệ (2 phiên/tuần ở Hà Nội và TP.HCM): thiết lập thị trường chính thức, đo cung cầu, quyết định tỷ giá hợp lý, chuẩn bị cho thị trường tài chính.',
        '<b>1994</b>: thay bằng <b>thị trường ngoại tệ liên ngân hàng</b>; trước 1998 chủ yếu giao dịch <b>giao ngay</b>.',
        '<b>1998</b> (Quyết định 17/1998/QĐ-NHNN7): chính thức có giao dịch <b>kỳ hạn</b> và <b>hoán đổi</b>; lúc đầu chỉ 28 ngân hàng được cấp phép (21 chi nhánh ngân hàng nước ngoài, 7 ngân hàng thương mại Việt Nam).'
      ] }
    ] },
    { icon: '🏷️', title: 'Yết giá và tỷ giá chéo', blocks: [
      { t: 'list', items: [
        '<b>Ký hiệu ISO</b>: 3 ký tự (USD, EUR, GBP, CHF, JPY, AUD, CAD, SGD, THB).',
        '<b>Đồng tiền yết giá</b> (base) và <b>đồng tiền định giá</b> (quote): trong USD/VND = 15.213, USD là yết giá, VND là định giá.',
        '<b>Yết giá trực tiếp</b>: ngoại tệ là yết giá (1 USD = 15.213 VND ở TP.HCM). <b>Yết giá gián tiếp</b>: nội tệ là yết giá (1 GBP = 1,1468 USD ở London); thông lệ GBP, USD, AUD thường yết gián tiếp.',
        '<b>Tỷ giá mua/bán</b>: ngân hàng mua (khách bán) áp dụng tỷ giá mua; ngân hàng bán (khách mua) áp dụng tỷ giá bán. Chênh lệch bù chi phí, rủi ro và lợi nhuận; ngoại tệ giao dịch rộng như USD có chênh lệch rất thấp (0,01%) so với AUD, SGD (1,59%).'
      ] },
      { t: 'table', head: ['Loại tỷ giá chéo', 'Công thức', 'Ví dụ'], rows: [
        ['Hai đồng tiền yết giá trực tiếp', '(USD/VND) ÷ (USD/EUR)', 'EUR/VND = 15.213 / 1,1428 = <b>13.312</b>'],
        ['Hai đồng tiền yết giá gián tiếp', '(GBP/USD) ÷ (AUD/USD)', 'GBP/AUD = 1,4268 / 0,5214 = <b>2,7365</b>'],
        ['Một gián tiếp, một trực tiếp', '(GBP/USD) × (USD/VND)', 'GBP/VND = 1,4268 × 15.213 = <b>21.706</b>']
      ] },
      { t: 'key', x: 'Khi tính tỷ giá chéo có mua/bán, <b>mua ÷ bán</b> hoặc <b>bán ÷ mua</b> để ngân hàng luôn có lợi: ví dụ tỷ giá mua EUR/VND = mua USD/VND ÷ bán USD/EUR = 15.213/1,1488 = 13.243; tỷ giá bán EUR/VND = bán USD/VND ÷ mua USD/EUR = 15.215/1,1448 = 13.291.' }
    ] },
    { icon: '⚡', title: 'Giao dịch giao ngay, kỳ hạn và hoán đổi', blocks: [
      { t: 'p', x: '<b>Giao ngay</b>: chuyển giao chậm nhất <b>T+2</b>; khách mua USD dùng tỷ giá bán, khách bán dùng tỷ giá mua. Ví dụ ngày 11/4/2002 USD 15.213–15.215: công ty A mua 100.000 USD trả 100.000 × 15.215 = 1.521,5 triệu; công ty B bán 100.000 USD nhận 1.521,3 triệu.' },
      { t: 'tabs', items: [
        ['Kỳ hạn (forward)', 'Giao dịch mua/bán ngoại tệ chuyển giao sau một kỳ hạn, giá xác định ngay lúc ký → công cụ <b>tự bảo hiểm</b>. Công ty C nợ 100.000 USD đến hạn sau 3 tháng sợ USD lên → <b>mua kỳ hạn</b>; công ty D sắp thu 150.000 USD sau 6 tháng sợ USD xuống → <b>bán kỳ hạn</b>; ngân hàng là trung gian.'],
        ['Tính tỷ giá kỳ hạn', 'Theo <b>cân bằng lãi suất (IRP)</b>; công thức gần đúng: <b>F = S × (1 + lãi suất VND × n) / (1 + lãi suất USD × n)</b> (mua kỳ hạn: dùng lãi gửi VND và lãi vay USD; bán kỳ hạn: lãi vay VND và lãi gửi USD). Ví dụ: S = 15.213–15.215; VND 0,45–0,55%/tháng; USD 3,2–4,8%/năm. <b>Gidomex</b> (xuất khẩu 132.000 USD sau 6 tháng): F_mua = 15.213 × 1,027/1,024 ≈ <b>15.258</b> → nhận 2.014,056 triệu VND. <b>Sagonimex</b> (nhập khẩu 128.000 USD sau 3 tháng): F_bán = 15.215 × 1,0165/1,008 ≈ <b>15.344</b> → trả 1.964,032 triệu VND.'],
        ['Hoán đổi (swap)', 'Gồm <b>đồng thời</b> mua và bán cùng số lượng ngoại tệ ở hai thời điểm khác nhau (giao ngay + kỳ hạn), tỷ giá xác định lúc ký. Hai trường hợp: ngân hàng <b>mua giao ngay – bán kỳ hạn</b>, hoặc <b>bán giao ngay – mua kỳ hạn</b>. Ví dụ Trilimex mua 50.000 USD ngay (trả 760,75 triệu), bán lại ngân hàng ngày 22/9/2002 (161 ngày) ở F_mua = 15.254 → nhận 762,7 triệu. Cholimex bán ngay 20.000 USD (nhận 304,26 triệu) rồi mua lại ngày 15/10/2002 (184 ngày) ở F_bán = 15.479 → trả 309,58 triệu.']
      ] },
      { t: 'widget', name: 'fwdfx', title: 'Tính tỷ giá kỳ hạn theo cân bằng lãi suất' },
      { t: 'tip', x: '<b>Tự bảo hiểm</b>: có khoản thu ngoại tệ trong tương lai → <b>bán ngoại tệ kỳ hạn</b>; có khoản nợ ngoại tệ phải trả → <b>mua ngoại tệ kỳ hạn</b>. Tỷ giá khóa chặt, bất chấp tỷ giá giao ngay lúc đáo hạn.' }
    ] }
  ],
  summary: [
    'Đa dạng hóa quốc tế giảm cả rủi ro hệ thống; thuế khác nhau; có rủi ro chính trị.',
    'Ba loại rủi ro tỷ giá: chuyển đổi, giao dịch, kinh tế.',
    'Yết giá trực tiếp/gián tiếp; tỷ giá mua/bán; tỷ giá chéo qua USD.',
    'Kỳ hạn tính theo IRP: F = S(1 + i_VND·n)/(1 + i_USD·n); hoán đổi = giao ngay + kỳ hạn; có thu ngoại tệ → bán kỳ hạn, có nợ ngoại tệ → mua kỳ hạn.'
  ],
  cards: [
    ['Vì sao đa dạng hóa quốc tế hiệu quả hơn?', 'Chu kỳ kinh tế các nước khác nhau nên giảm cả rủi ro toàn hệ thống.'],
    ['Thuế của Mỹ với chi nhánh và công ty con?', 'Chi nhánh: thu nhập bị đánh thuế như trong nước; công ty con: hoãn thuế đến khi chia cổ tức cho mẹ.'],
    ['Rủi ro chuyển đổi?', 'Thay đổi báo cáo tài chính công ty mẹ khi quy đổi báo cáo công ty con.'],
    ['Rủi ro giao dịch?', 'Lãi/lỗ khi thực hiện giao dịch bằng ngoại tệ.'],
    ['Rủi ro kinh tế?', 'Thay đổi ngân lưu kỳ vọng khi tỷ giá đổi.'],
    ['Đồng tiền yết giá và định giá?', 'Yết giá là đơn vị 1 (USD trong USD/VND); định giá là đồng tiền đo (VND).'],
    ['Yết giá trực tiếp vs gián tiếp?', 'Trực tiếp: ngoại tệ là yết giá; gián tiếp: nội tệ là yết giá.'],
    ['Tỷ giá mua và bán?', 'Ngân hàng mua (khách bán) tỷ giá mua; ngân hàng bán (khách mua) tỷ giá bán; chênh lệch là phần của ngân hàng.'],
    ['Giao ngay là gì?', 'Chuyển giao chậm nhất T+2.'],
    ['Tỷ giá kỳ hạn tính thế nào?', 'F = S(1 + lãi VND·n)/(1 + lãi USD·n) theo cân bằng lãi suất.'],
    ['Hoán đổi là gì?', 'Đồng thời mua và bán cùng ngoại tệ ở hai thời điểm khác nhau.'],
    ['Có khoản thu USD tương lai: nên làm gì?', 'Bán USD kỳ hạn.']
  ],
  quiz: [
    { q: 'Honda VN nhập linh kiện bằng USD, bán xe thu VND là ví dụ rủi ro:', o: ['Chuyển đổi', 'Giao dịch', 'Chính trị', 'Thuế'], a: 1, e: 'Chi ngoại tệ nhưng thu nội tệ.' },
    { q: 'Công ty con ở nước ngoài của công ty Mỹ thường bị đánh thuế:', o: ['Ngay khi có lãi', 'Khi chia cổ tức cho công ty mẹ', 'Không bao giờ', 'Hằng ngày'], a: 1, e: 'Hoãn thuế.' },
    { q: 'EUR/VND = (USD/VND)/(USD/EUR) = 15.213/1,1428 ≈', o: ['13.312', '17.386', '1,1428', '15.213'], a: 0, e: 'Hai yết giá trực tiếp.' },
    { q: 'Khách hàng muốn mua USD của ngân hàng dùng:', o: ['Tỷ giá mua', 'Tỷ giá bán', 'Tỷ giá chéo', 'Tỷ giá thả nổi'], a: 1, e: 'Ngân hàng bán.' },
    { q: 'Công ty sắp thu 150.000 USD sau 6 tháng nên:', o: ['Mua kỳ hạn', 'Bán kỳ hạn', 'Không làm gì', 'Mua giao ngay'], a: 1, e: 'Khóa tỷ giá bán USD.' },
    { q: 'Công ty có nợ USD phải trả sau 3 tháng nên:', o: ['Bán kỳ hạn', 'Mua kỳ hạn', 'Bán giao ngay', 'Không làm gì'], a: 1, e: 'Khóa chi phí trả nợ.' },
    { q: 'Hoán đổi ngoại tệ gồm:', o: ['Chỉ giao ngay', 'Giao ngay và kỳ hạn ngược chiều', 'Chỉ kỳ hạn', 'Chỉ quyền chọn'], a: 1, e: 'Cùng số lượng, hai thời điểm.' },
    { q: 'Giao dịch kỳ hạn và hoán đổi chính thức có ở VN từ:', o: ['1991', '1994', '1998', '2002'], a: 2, e: 'Quyết định 17/1998/QĐ-NHNN7.' },
    { q: 'USD có chênh lệch giá mua–bán thấp nhất vì:', o: ['Bị cấm', 'Giao dịch rộng, thanh khoản cao', 'Ít biến động', 'Do nhà nước định'], a: 1, e: 'AUD, SGD có phạm vi hẹp nên chênh lệch cao.' }
  ],
  match: [
    ['Rủi ro kinh tế', 'Ngân lưu kỳ vọng thay đổi khi tỷ giá đổi'],
    ['Yết giá trực tiếp', '1 USD = 15.213 VND'],
    ['T+2', 'Thời hạn giao ngay'],
    ['IRP', 'Cơ sở tính tỷ giá kỳ hạn'],
    ['Swap', 'Giao ngay + kỳ hạn ngược chiều'],
    ['Tỷ giá chéo', 'Xác định qua USD']
  ]
},

/* ======================= BÀI 17 ======================= */
{
  n: 17,
  title: 'Rủi ro tỷ giá và cách tự bảo hiểm',
  intro: 'Doanh nghiệp có ngân lưu thu và chi bằng hai đồng tiền khác nhau luôn gặp rủi ro tỷ giá. Bài này phân tích rủi ro trong đầu tư, xuất nhập khẩu, tín dụng và 7 cách tự bảo hiểm: hợp đồng song hành, quỹ dự phòng, kỳ hạn, hoán đổi, tương lai, quyền chọn và thị trường tiền tệ.',
  sections: [
    { icon: '🔥', title: 'Rủi ro tỷ giá phát sinh ở đâu?', blocks: [
      { t: 'key', x: 'Bất cứ hoạt động nào mà <b>ngân lưu thu và ngân lưu chi bằng hai đồng tiền khác nhau</b> đều chứa rủi ro tỷ giá. Mức độ phụ thuộc <b>biến động tỷ giá</b> và <b>trị giá các khoản</b>.' },
      { t: 'tabs', items: [
        ['Đầu tư', '<b>Trực tiếp</b>: Unilever đầu tư ở Việt Nam, chi USD (nhập nguyên liệu 1 triệu USD/năm) nhưng thu VND. Tỷ giá 15.000 → 15.350: chi phí từ 15 tỷ lên 15,35 tỷ VND (+350 triệu). <b>Gián tiếp</b>: nhà đầu tư Hồng Kông mua cổ phiếu SAM bằng 500.000 USD (tỷ giá 15.400, giá 30.000 → mua 256.666 cp). Sau một năm giá lên 31.000 nhưng tỷ giá 16.000: thu về (256.666 × 31.000)/16.000 = <b>496.000 USD</b> — <b>lỗ 4.000 USD</b> dù cổ phiếu tăng giá.'],
        ['Xuất khẩu', 'Hợp đồng xuất khẩu 200.000 USD, thanh toán sau 6 tháng, tỷ giá lúc ký 15.381. Nếu lúc thu USD giảm xuống 15.281: mỗi USD thiệt 100 VND → <b>thiệt 2 triệu VND</b> (nhân với hàng trăm hợp đồng → rất lớn).'],
        ['Nhập khẩu', 'Hợp đồng nhập 200.000 USD sau 6 tháng. Nếu USD lên 15.481: chi phí tăng 100 VND/USD → <b>thiệt 2 triệu VND</b>.'],
        ['Tín dụng', 'Giadimex vay 3 triệu USD, lãi 3%/năm, 6 tháng (khi lãi suất USD thấp: Fed hạ xuống 1,25%). Phải trả 3 × (1 + 0,03×0,5) = 3,045 triệu USD = 46.835,1 triệu VND ở tỷ giá 15.381. Nếu tỷ giá lên 15.481: 47.139,6 triệu VND → <b>tăng 304,5 triệu VND</b>.']
      ] }
    ] },
    { icon: '🛡️', title: 'Có nên tự bảo hiểm không?', blocks: [
      { t: 'p', x: 'Hai quyết định: (1) <b>có ngừa rủi ro tỷ giá hay không</b>? (2) ngừa <b>bằng cách nào</b>? Với Sagonimex (xuất khẩu): không ngừa thì thiệt khi USD xuống; ngừa bằng bán kỳ hạn thì thiệt khi USD lên. Không ai biết trước.' },
      { t: 'steps', items: [
        'Phân tích biến động tỷ giá 6 tháng tới và xác suất tăng/giảm.',
        'Xem xét mức ảnh hưởng và <b>khả năng chịu đựng tài chính</b> nếu không ngừa.',
        'Xem xét <b>thái độ của ban giám đốc đối với rủi ro</b>.'
      ] },
      { t: 'mnemo', x: 'Người ngại rủi ro sẽ ngừa dù có thể thiệt nếu tỷ giá đi theo hướng có lợi — xem khoản thiệt như <b>chi phí bảo hiểm</b> để mua sự yên tâm: lợi nhuận kỳ vọng là từ <b>hoạt động xuất khẩu</b>, không phải từ đầu cơ tỷ giá.' }
    ] },
    { icon: '🧰', title: 'Bảy phương pháp tự bảo hiểm', blocks: [
      { t: 'table', head: ['Phương pháp', 'Cách làm', 'Ưu / nhược'], rows: [
        ['1. <b>Hợp đồng xuất–nhập khẩu song hành</b>', 'Cùng lúc có xuất và nhập khẩu giá trị, thời hạn tương đương → lãi/lỗ tỷ giá bù trừ', 'Đơn giản, rẻ; khó tìm hai hợp đồng khớp nhau'],
        ['2. <b>Quỹ dự phòng rủi ro tỷ giá</b>', 'Khi tỷ giá thuận lợi, trích lợi nhuận dôi lập quỹ; khi bất lợi dùng quỹ bù', 'Đơn giản, rẻ; khó về thủ tục kế toán và quản lý quỹ khỏi bị lạm dụng'],
        ['3. <b>Hợp đồng kỳ hạn</b>', 'Xuất khẩu: bán ngoại tệ kỳ hạn; nhập khẩu: mua ngoại tệ kỳ hạn', 'Tỷ giá cố định biết trước'],
        ['4. <b>Hợp đồng hoán đổi</b>', 'Giao ngay + kỳ hạn; vận dụng như kỳ hạn', '—'],
        ['5. <b>Hợp đồng tương lai</b>', 'Xuất khẩu: bán hợp đồng giao sau; nhập khẩu: mua. Giá giao sau và giao ngay tương quan chặt → lời hợp đồng này bù thiệt hợp đồng kia', 'Chuẩn hóa, qua thanh toán bù trừ'],
        ['6. <b>Quyền chọn</b>', 'Xuất khẩu: mua quyền chọn <b>bán</b> USD (ví dụ giá thực hiện 15.420); nhập khẩu: mua quyền chọn <b>mua</b>', 'Có quyền nhưng không bắt buộc; phải trả phí mua quyền chọn'],
        ['7. <b>Thị trường tiền tệ</b>', 'Kết hợp vay/cho vay với mua bán ngoại tệ để cố định khoản phải thu/trả', 'Xem chi tiết dưới đây']
      ] },
      { t: 'p', x: '<b>Hợp đồng kỳ hạn</b>: Sagonimex (xuất khẩu 200.000 USD sau 6 tháng; tỷ giá 15.381–83; USD 3–3,5%/năm, VND 0,60–0,75%/tháng) bán USD kỳ hạn tại Eximbank với F_mua ≈ <b>15.666</b> → chắc chắn thu <b>3.133,2 triệu VND</b>. Cholonimex (nhập khẩu) mua kỳ hạn F_bán ≈ <b>15.844</b> → chắc chắn chi <b>3.168,8 triệu VND</b>.' }
    ] },
    { icon: '🏦', title: 'Tự bảo hiểm bằng thị trường tiền tệ', blocks: [
      { t: 'tabs', items: [
        ['Sagonimex (xuất khẩu)', '<b>Sợ USD xuống</b> → bán USD ngay: <b>vay USD</b> 6 tháng: PV = 200.000/(1 + 0,035 × 0,5) = <b>196.560 USD</b>; <b>bán ngay</b> ở 15.381 → 3.023.289.360 VND; gửi VND 0,6%/tháng. Đáo hạn: thu 200.000 USD từ khách trả đúng khoản nợ USD (196.560 × 1,0175 = 200.000); VND gửi 3.023.289.360 × 1,036 = <b>3.132.127.777 VND</b> — biết chắc từ hôm nay.'],
        ['Cholonimex (nhập khẩu)', '<b>Sợ USD lên</b> → mua USD ngay: <b>vay VND</b> = [200.000/(1 + 0,03 × 0,5)] × 15.383 = 197.044 × 15.383 = <b>3.031.127.852 VND</b>; mua 197.044 USD và gửi USD (3%/năm) → đáo hạn 197.044 × 1,015 = 200.000 USD trả hợp đồng nhập; trả nợ VND 3.031.127.852 × (1 + 0,0075 × 6) = <b>3.167.528.605 VND</b> — chi phí đã biết trước.']
      ] },
      { t: 'widget', name: 'hedge', title: 'So sánh doanh thu VND nếu không ngừa và nếu ngừa' },
      { t: 'tip', x: 'Cả bảy cách đều nhằm <b>cố định giá trị VND</b> của khoản ngoại tệ tương lai. Chọn cách nào tùy vào chi phí, khả năng tiếp cận thị trường và quy mô hợp đồng.' }
    ] }
  ],
  summary: [
    'Rủi ro tỷ giá phát sinh khi thu chi bằng hai đồng tiền khác nhau: đầu tư, xuất nhập khẩu, tín dụng.',
    'Quyết định ngừa hay không dựa vào dự báo, khả năng chịu đựng và thái độ rủi ro; khoản thiệt là phí bảo hiểm.',
    'Bảy cách: song hành, quỹ dự phòng, kỳ hạn, hoán đổi, tương lai, quyền chọn, thị trường tiền tệ.',
    'Xuất khẩu: bán kỳ hạn/mua put/vay ngoại tệ bán ngay; nhập khẩu: mua kỳ hạn/mua call/vay nội tệ mua ngoại tệ ngay.'
  ],
  cards: [
    ['Khi nào có rủi ro tỷ giá?', 'Khi ngân lưu thu và chi bằng hai đồng tiền khác nhau.'],
    ['Ví dụ rủi ro trong đầu tư gián tiếp (SAM)?', 'Cổ phiếu tăng 1.000 VND nhưng VND mất giá nhiều hơn → thu về 496.000 USD, lỗ 4.000 USD.'],
    ['Hợp đồng xuất khẩu rủi ro khi?', 'USD giảm giá so với VND trước ngày thu tiền.'],
    ['Hợp đồng nhập khẩu rủi ro khi?', 'USD tăng giá so với VND trước ngày trả tiền.'],
    ['Ba căn cứ để quyết định có ngừa không?', 'Dự báo tỷ giá, khả năng chịu đựng tài chính, thái độ rủi ro của ban giám đốc.'],
    ['Hợp đồng xuất nhập khẩu song hành?', 'Làm cùng lúc xuất và nhập khẩu giá trị, thời hạn tương đương để bù trừ.'],
    ['Quỹ dự phòng tỷ giá?', 'Trích lợi nhuận dôi khi tỷ giá thuận lợi để bù khi bất lợi.'],
    ['Xuất khẩu dùng quyền chọn nào?', 'Mua quyền chọn bán USD ở tỷ giá thực hiện cố định.'],
    ['Nhập khẩu dùng quyền chọn nào?', 'Mua quyền chọn mua USD.'],
    ['Bảo hiểm bằng thị trường tiền tệ (xuất khẩu)?', 'Vay USD = PV(khoản thu), bán ngay lấy VND và gửi; đáo hạn dùng USD thu được trả nợ.'],
    ['Bảo hiểm bằng thị trường tiền tệ (nhập khẩu)?', 'Vay VND mua USD ngay, gửi USD; đáo hạn dùng USD trả hợp đồng, trả nợ VND.']
  ],
  quiz: [
    { q: 'Xuất khẩu 200.000 USD, tỷ giá giảm 100 VND/USD → thiệt:', o: ['200.000 VND', '2 triệu VND', '20 triệu VND', '200 triệu VND'], a: 1, e: '100 × 200.000.' },
    { q: 'Nhập khẩu, USD tăng giá: chi phí VND:', o: ['Giảm', 'Tăng', 'Không đổi', 'Bằng 0'], a: 1, e: 'Phải trả nhiều VND hơn.' },
    { q: 'Công ty xuất khẩu ngừa bằng hợp đồng kỳ hạn sẽ:', o: ['Mua USD kỳ hạn', 'Bán USD kỳ hạn', 'Vay VND', 'Mua put'], a: 1, e: 'Khóa tỷ giá bán USD sẽ thu.' },
    { q: 'Công ty nhập khẩu ngừa bằng quyền chọn nào?', o: ['Call USD', 'Put USD', 'Không có', 'Cả hai'], a: 0, e: 'Quyền mua USD ở tỷ giá cố định.' },
    { q: 'Sagonimex vay USD bằng bao nhiêu để sau 6 tháng nợ gốc+lãi = 200.000 USD (lãi 3,5%/năm)?', o: ['200.000', '196.560', '210.000', '150.000'], a: 1, e: '200.000/1,0175.' },
    { q: 'Hợp đồng song hành là:', o: ['Xuất và nhập khẩu tương đương cùng lúc để bù trừ', 'Hai hợp đồng xuất khẩu', 'Hai hợp đồng nhập khẩu', 'Không có'], a: 0, e: 'Lãi/lỗ tỷ giá triệt tiêu.' },
    { q: 'Khoản thiệt do mua bảo hiểm tỷ giá được xem như:', o: ['Phạt', 'Chi phí bảo hiểm (mua sự yên tâm)', 'Lợi nhuận', 'Thuế'], a: 1, e: 'Lợi nhuận kỳ vọng từ hoạt động, không phải đầu cơ.' },
    { q: 'Khó khăn của quỹ dự phòng tỷ giá:', o: ['Quá tốn kém', 'Quản lý quỹ khỏi bị lạm dụng và thủ tục kế toán', 'Không ngừa được', 'Phải ký quỹ'], a: 1, e: 'Về cách làm thì khá đơn giản.' }
  ],
  match: [
    ['Xuất khẩu', 'Sợ USD giảm giá'],
    ['Nhập khẩu', 'Sợ USD tăng giá'],
    ['Put USD', 'Ngừa cho xuất khẩu'],
    ['Call USD', 'Ngừa cho nhập khẩu'],
    ['Song hành', 'Xuất nhập khẩu cùng lúc bù trừ'],
    ['Thị trường tiền tệ', 'Vay + mua bán ngoại tệ để cố định giá trị']
  ]
}

);
