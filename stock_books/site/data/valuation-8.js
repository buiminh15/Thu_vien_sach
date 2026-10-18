// Investment Valuation – Chương 8.
BOOK_DATA.valuation.chapters.push({
  n: 8,
  title: 'Ước tính tham số rủi ro và chi phí tài trợ',
  intro: 'Chương này biến lý thuyết rủi ro thành con số: ước tính beta (hồi quy, nền tảng cơ bản/bottom-up, kế toán), chi phí vốn chủ sở hữu, chi phí nợ (xếp hạng thực và xếp hạng tổng hợp), chi phí cổ phiếu ưu đãi/lai và cuối cùng là chi phí vốn bình quân gia quyền theo giá trị thị trường.',
  sections: [
    { icon: '📈', title: 'Beta hồi quy (lịch sử)', blocks: [
      { t: 'key', x: 'Hồi quy lợi nhuận cổ phiếu theo lợi nhuận chỉ số thị trường: <b>R<sub>j</sub> = a + b·R<sub>m</sub></b>. <b>Độ dốc b = beta</b>. Beta là hiệp phương sai (R<sub>j</sub>, R<sub>m</sub>) chia phương sai thị trường.' },
      { t: 'table', head: ['Thống kê', 'Ý nghĩa', 'Boeing 1996–2000'], rows: [
        ['Độ dốc', 'Beta', '0,56'],
        ['Hệ số chặn a', 'So với R<sub>f</sub>(1−β) ⇒ <b>alpha Jensen</b>', '0,54% − 0,4%×0,44 = 0,36%/tháng ≈ <b>4,41%/năm</b>'],
        ['R²', '% rủi ro là rủi ro thị trường; còn lại (1−R²) là rủi ro riêng của công ty', '9,43% (90,57% là riêng)'],
        ['Sai số chuẩn của beta', 'Khoảng tin cậy: ±1 SE ≈ 67%, ±2 SE ≈ 95%', '0,23 ⇒ 0,10 – 1,02 (95%)']
      ] },
      { t: 'tip', x: 'Alpha Jensen: nếu a &gt; R<sub>f</sub>(1−β) thì cổ phiếu làm tốt hơn kỳ vọng CAPM. Boeing hơn ngành (−0,85%) nên phần riêng của công ty là 4,41% + 0,85% = 5,26%. Nhưng quá khứ tốt không đảm bảo tương lai.' },
      { t: 'h3', x: 'Ba lựa chọn khi hồi quy' },
      { t: 'tabs', items: [
        ['Độ dài kỳ', '<p>Thường 5 năm (Value Line, S&P), Bloomberg dùng 2 năm. Dài ⇒ nhiều dữ liệu nhưng công ty có thể đã đổi rủi ro (Boeing mua Rockwell, McDonnell Douglas).</p>'],
        ['Khoảng thời gian lợi nhuận', '<p>Ngày/tuần thêm quan sát nhưng gây <b>thiên kiến không giao dịch</b> (beta bị kéo xuống với cổ phiếu nhỏ). Tuần/tháng giảm thiên kiến: Boeing 2 năm tuần 0,88; tháng 0,96.</p>'],
        ['Chỉ số thị trường', '<p>Mặc định chỉ số nội địa, nhưng nhà đầu tư cận biên đa dạng hoá toàn cầu thì nên dùng chỉ số toàn cầu (Titan Cement: ASE 0,93 → MSCI Euro/Toàn cầu 0,33; sai số chuẩn tăng).</p>']
      ] },
      { t: 'p', x: '<b>Beta điều chỉnh</b> (các dịch vụ như Bloomberg): <b>0,67 × beta thô + 0,33 × 1,0</b> — kéo beta về 1 vì công ty lớn dần, đa dạng hoá hơn.' },
      { t: 'warn', x: '<b>Chỉ số bị một cổ phiếu thống trị</b>: Nokia chiếm 75% chỉ số Helsinki, hồi quy Nokia với HEX có sai số chuẩn 0,03 — “đẹp” nhưng vô nghĩa vì hồi quy cổ phiếu với chính nó. Cổ phiếu Phần Lan khác đều có beta &lt; 1 (vì trung bình có trọng số = 1). Thị trường mới nổi cũng có thanh khoản thấp và thay đổi nhanh ⇒ beta ngày/tuần và 5 năm đều kém tin cậy.' },
      { t: 'p', x: '<b>Kết luận</b>: beta hồi quy gần như luôn quá nhiễu (SE cao) hoặc bị chọn tham số làm lệch; công ty tư nhân/mới niêm yết/vừa tái cơ cấu không có beta hồi quy hợp lệ.' }
    ] },
    { icon: '🏗️', title: 'Beta nền tảng: ba yếu tố quyết định', blocks: [
      { t: 'list', items: [
        '<b>Loại hình kinh doanh</b>: ngành chu kỳ (nhà ở, ô tô) beta cao hơn ngành thiết yếu (thực phẩm, thuốc lá); sản phẩm tuỳ chọn (Gucci) cao hơn sản phẩm tối cần thiết (P&amp;G).',
        '<b>Đòn bẩy hoạt động</b> (chi phí cố định/tổng chi phí): DOL = %ΔLợi nhuận hoạt động ÷ %ΔDoanh thu. Cao ⇒ thu nhập dao động mạnh ⇒ beta cao. Công ty nhỏ/tăng trưởng cao thường có beta cao hơn.',
        '<b>Đòn bẩy tài chính</b>: nợ càng nhiều, beta vốn CSH càng cao.'
      ] },
      { t: 'key', x: '<b>Công thức Hamada</b>: β<sub>L</sub> = β<sub>u</sub> × [1 + (1 − t) × D/E]. β<sub>u</sub> (beta không vay/beta tài sản) phản ánh ngành nghề và đòn bẩy hoạt động; β<sub>L</sub> thêm rủi ro tài chính. Công ty rủi ro kinh doanh cao nên ngại vay; ngành ổn định (điện nước) có thể vay nhiều mà beta vẫn thấp.' },
      { t: 'table', head: ['Nợ/Vốn', 'D/E', 'Beta Boeing (β<sub>u</sub> = 0,51, t = 35%)'], rows: [
        ['0%', '0%', '0,51'], ['20%', '25%', '0,59'], ['40%', '66,7%', '0,73'], ['50%', '100%', '0,84'], ['60%', '150%', '1,00'], ['80%', '400%', '1,83'], ['90%', '900%', '3,48']
      ] },
      { t: 'widget', name: 'beta-lever', title: 'Gỡ và lắp lại đòn bẩy tài chính cho beta' }
    ] },
    { icon: '🧱', title: 'Beta bottom-up (từ dưới lên) — cách được ưa chuộng', blocks: [
      { t: 'key', x: 'Beta của danh mục là bình quân gia quyền theo giá trị thị trường của beta các phần ⇒ beta công ty = bình quân beta các ngành nghề nó hoạt động.' },
      { t: 'steps', items: [
        'Xác định các <b>ngành nghề</b> công ty đang hoạt động.',
        'Tìm các công ty niêm yết cùng ngành, lấy <b>beta hồi quy bình quân</b> và D/E bình quân.',
        '<b>Gỡ đòn bẩy</b> bình quân: β<sub>u</sub> = β bình quân ÷ [1 + (1−t)·D/E bình quân] (bình quân trước rồi gỡ vì gỡ đòn bẩy một beta lỗi thì khuếch đại lỗi).',
        'Công ty nhiều ngành: bình quân β<sub>u</sub> theo <b>tỷ trọng giá trị</b> (nếu không có thì dùng lợi nhuận hoạt động/doanh thu).',
        '<b>Lắp lại đòn bẩy</b> theo D/E thị trường hiện tại của công ty ⇒ beta vốn CSH.'
      ] },
      { t: 'h3', x: 'Vì sao tốt hơn hồi quy' },
      { t: 'list', items: [
        '<b>Sai số chuẩn giảm</b>: SE<sub>bottom-up</sub> = SE bình quân ÷ √n (SE 0,50, 100 công ty ⇒ 0,05).',
        'Phản ánh thay đổi cơ cấu ngành (thâu tóm, thoái vốn) kể cả sắp xảy ra.',
        'Dùng D/E <b>hiện tại</b> (và tương lai), không phải trung bình quá khứ.',
        'Dùng được cho công ty tư nhân, bộ phận, cổ phiếu mới niêm yết.'
      ] },
      { t: 'h3', x: 'Chi tiết tính toán' },
      { t: 'list', items: [
        '<b>Định nghĩa công ty so sánh</b>: càng hẹp càng ít công ty ⇒ mất lợi ích sai số chuẩn. Nhiều công ty (phần mềm) thì chọn lọc; ít thì mở rộng.',
        '<b>Bình quân giản đơn</b> tối đa hoá tiết kiệm sai số (bình quân gia quyền bị công ty lớn chi phối).',
        '<b>Đòn bẩy hoạt động</b>: β<sub>kinh doanh</sub> = β<sub>u</sub> ÷ [1 + CP cố định/CP biến đổi] rồi lắp lại bằng tỷ lệ của công ty (không có thuế vì cả hai đều được khấu trừ).'
      ] },
      { t: 'h3', x: 'Ví dụ: Vans Shoes (21 hãng giày)' },
      { t: 'steps', items: [
        'β bình quân = 0,79; D/E bình quân = 75,04%; thuế = 25,95% ⇒ β<sub>u</sub> = 0,79 ÷ [1 + 0,7405×0,7504] = <b>0,508</b>.',
        'Lắp lại: D/E Vans 9,41%, thuế biên 34,06% ⇒ β = 0,508 × [1 + 0,6594×0,0941] = <b>0,540</b>.',
        'Điều chỉnh đòn bẩy hoạt động: β<sub>kinh doanh</sub> = 0,508 ÷ 1,4208 = 0,3576; CP cố định/biến đổi của Vans 31,16% ⇒ β<sub>u</sub> = 0,469 ⇒ β<sub>vốn CSH</sub> = <b>0,498</b>.'
      ] },
      { t: 'h3', x: 'Ví dụ: Boeing (9/2000)' },
      { t: 'table', head: ['Mảng', 'Doanh thu', 'Giá trị/DT', 'Giá trị', 'β không vay', 'Tỷ trọng', 'β có trọng số'], rows: [
        ['Máy bay thương mại', '26.929', '1,12', '30.160', '0,91', '70,39%', '0,6405'],
        ['Thông tin, không gian & quốc phòng', '18.125', '0,70', '12.688', '0,80', '29,61%', '0,2369'],
        ['<b>Cả công ty</b>', '45.054', '', '42.848', '', '100%', '<b>0,8774</b>']
      ] },
      { t: 'p', x: 'Với E = 55,2 tỷ, D = 7,85 tỷ, t = 35%: β = 0,8774 × [1 + 0,65 × 7,85/55,2] = <b>0,9585</b> — rất khác với beta hồi quy 0,56 nhưng phản ánh đúng rủi ro sau thâu tóm.' },
      { t: 'tip', x: '<b>Beta có “đi” qua thị trường không?</b> Titan Cement: không có công ty Hy Lạp so sánh ⇒ lấy 108 công ty xi măng toàn cầu, β = 0,99, D/E 27,06%, thuế 34,2% ⇒ β<sub>u</sub> 0,84 ⇒ β = 0,86. Beta cùng ngành có thể dùng chung vì rủi ro quốc gia được cộng ở phần bù chứ không ở beta. <b>Ngoại lệ</b>: sản phẩm tuỳ chọn ở nước này nhưng thiết yếu ở nước kia (điện thoại ở thị trường mới nổi).' },
      { t: 'h3', x: 'Sau thâu tóm: Boeing + McDonnell Douglas (1997)' },
      { t: 'steps', items: [
        'β<sub>u</sub> Boeing = 0,95 ÷ [1 + 0,65×3.980/32.438] = 0,88; McDonnell Douglas = 0,81.',
        'β<sub>u</sub> hợp nhất = 0,88×36.418/51.116 + 0,81×14.698/51.116 = <b>0,86</b>.',
        'Nợ = 3.980 + 2.143 = 6.123; Vốn = 32.438 + 12.555 = 44.993 ⇒ D/E = 13,61% ⇒ β = 0,86 × (1 + 0,65×0,1361) = <b>0,94</b>.'
      ] }
    ] },
    { icon: '📒', title: 'Beta kế toán và chọn phương pháp', blocks: [
      { t: 'p', x: '<b>Beta kế toán</b>: hồi quy thay đổi lợi nhuận kế toán của bộ phận/công ty theo thay đổi lợi nhuận kế toán của thị trường. Ví dụ bộ phận quốc phòng Boeing 1980–94: ΔLN = −0,03 + <b>0,65</b>·ΔLN<sub>S&amp;P</sub> ⇒ chi phí vốn CSH = 5% + 0,65×5,5% = 8,58%.' },
      { t: 'warn', x: '<b>Ba điểm yếu</b>: (1) kế toán làm mượt thu nhập ⇒ beta bị kéo về 1; (2) bị ảnh hưởng bởi yếu tố phi hoạt động (khấu hao, hàng tồn kho, phân bổ chi phí); (3) quan sát ít (quý/năm) ⇒ R² thấp, SE cao.' },
      { t: 'table', head: ['Phương pháp', 'Đánh giá của tác giả'], rows: [
        ['Beta kế toán', 'Hầu như không bao giờ dùng'],
        ['Beta hồi quy', 'Ngại dùng: sai số chuẩn, chỉ số cục bộ, không phản ánh thay đổi cơ cấu'],
        ['<b>Beta bottom-up</b>', '<b>Tốt nhất</b>: nhìn trước thay đổi, SE thấp, theo từng mảng kinh doanh']
      ] }
    ] },
    { icon: '💰', title: 'Từ beta đến chi phí vốn chủ sở hữu', blocks: [
      { t: 'key', x: 'CAPM: <b>k<sub>e</sub> = R<sub>f</sub> + β × ERP</b>. Mô hình APM/đa nhân tố: R<sub>f</sub> + Σ β<sub>j</sub> × ERP<sub>j</sub>. Với nhà đầu tư đây là lợi suất yêu cầu; với nhà quản lý đó là tỷ suất phải vượt qua.' },
      { t: 'table', head: ['Công ty', 'Công thức', 'k<sub>e</sub>'], rows: [
        ['Boeing (6/2000)', '5% + 0,9585×5,51%', '<b>10,28%</b> (với ERP hàm ý 2,87%: 7,75%)'],
        ['Embraer, mọi công ty như nhau', '5% + 0,88×(5,51% + 10,24%)', '<b>18,86%</b>'],
        ['Embraer, dùng λ = 9%/60% = 0,15', '5% + 0,88×5,51% + 0,15×10,24%', '<b>11,39%</b>']
      ] },
      { t: 'p', x: 'Chuyển sang nội tệ danh nghĩa: (1 + k<sub>USD</sub>) × (1 + lạm phát Brazil) ÷ (1 + lạm phát Mỹ) − 1 = 1,1139 × 1,10/1,02 − 1 = <b>20,12%</b> (hoặc bắt đầu từ R<sub>f</sub> nội tệ 14% ⇒ 20,39%).' },
      { t: 'warn', x: '<b>Phần bù công ty nhỏ</b>: cổ phiếu nhỏ kiếm hơn ~2%. Có người cộng thêm 2% (5,1% + 1,2×4% + 2% = 11,9%). Hai lưu ý: mở cửa cho vô số điều chỉnh khác (P/E thấp, P/B thấp…) và tự coi thị trường là đúng; tốt hơn là tìm nguyên nhân (đòn bẩy hoạt động cao) rồi điều chỉnh beta trực tiếp.' }
    ] },
    { icon: '🏦', title: 'Chi phí nợ', blocks: [
      { t: 'key', x: 'Chi phí nợ phụ thuộc: (1) R<sub>f</sub>; (2) <b>rủi ro vỡ nợ</b> (default spread); (3) <b>lá chắn thuế</b>. <b>k<sub>d</sub> sau thuế = k<sub>d</sub> trước thuế × (1 − t)</b>, với t là thuế suất <b>biên</b> (không phải thuế suất hiệu dụng) và chỉ khi công ty đủ lợi nhuận để hưởng lợi.' },
      { t: 'steps', items: [
        '<b>Có trái phiếu giao dịch</b>: dùng lợi suất đáo hạn (AT&amp;T).',
        '<b>Có xếp hạng</b>: R<sub>f</sub> + spread theo hạng (Boeing AA: 5% + 1,0% = 6,0%; sau thuế 6,0%×0,65 = 3,90%).',
        '<b>Không xếp hạng</b>: dùng lịch sử vay ngân hàng gần đây, hoặc <b>xếp hạng tổng hợp</b> theo hệ số bảo chi lãi vay.'
      ] },
      { t: 'p', x: '<b>Hệ số bảo chi lãi vay = EBIT ÷ chi phí lãi vay</b>. Boeing 1.720/453 = 3,80 ⇒ A− (công ty vốn hoá lớn) ⇒ spread 2,00% ⇒ k<sub>d</sub> 7,00%.' },
      { t: 'table', head: ['Hệ số (vốn hoá nhỏ)', 'Hạng', 'Spread', 'Hệ số (vốn hoá lớn)'], rows: [
        ['> 12,5', 'AAA', '0,75%', '> 8,5'], ['9,5 – 12,5', 'AA', '1,00%', '6,5 – 8,5'], ['6 – 7,5', 'A', '1,80%', '4,25 – 5,5'], ['3,5 – 4,5', 'BBB', '2,25%', '2,5 – 3'], ['3 – 3,5', 'BB', '3,50%', '2 – 2,5'], ['2 – 2,5', 'B', '6,50%', '1,5 – 1,75'], ['1,25 – 1,5', 'CCC', '10,00%', '0,8 – 1,25'], ['&lt; 0,5', 'D', '14,00%', '&lt; 0,2']
      ] },
      { t: 'tip', x: 'Công ty lớn chịu được hệ số bảo chi thấp hơn cho cùng hạng. Có thể mở rộng sang nhiều chỉ số (điểm Z Altman) nhưng khó giải thích; tác giả ưa hệ số đơn giản. Nếu thuê hoạt động lớn: <b>hệ số điều chỉnh = (EBIT + thuê) ÷ (lãi vay + thuê)</b>.' },
      { t: 'h3', x: 'Công ty ở thị trường mới nổi' },
      { t: 'p', x: 'Vấn đề: ít công ty có xếp hạng; lãi suất cao làm hệ số bảo chi thấp; rủi ro quốc gia. Cách thận trọng: <b>k<sub>d</sub> = R<sub>f</sub> + default spread quốc gia + default spread công ty</b>. Embraer: hệ số bảo chi 810/28 = 28,93 ⇒ AAA 0,75%; Brazil spread 5,37% ⇒ 5% + 5,37% + 0,75% = <b>11,12%</b>; sau thuế (33%) = <b>7,45%</b>. Phản biện: Embraer thu nhập bằng USD nên có thể ít rủi ro hơn chính phủ.' }
    ] },
    { icon: '🧬', title: 'Chứng khoán lai: cổ phiếu ưu đãi, trái phiếu chuyển đổi', blocks: [
      { t: 'key', x: '<b>Chi phí cổ phiếu ưu đãi</b> (vĩnh viễn) = <b>cổ tức ưu đãi ÷ giá thị trường</b>. GM: 2,28/26,38 = <b>8,64%</b> — giữa chi phí nợ sau thuế (5,28%) và chi phí vốn CSH (13%) vì rủi ro cao hơn nợ nhưng thấp hơn vốn CSH (và cổ tức không được khấu trừ thuế).' },
      { t: 'p', x: '<b>Trái phiếu chuyển đổi</b> = trái phiếu thường + quyền chọn chuyển đổi. Tách riêng: phần nợ tính chi phí nợ, phần quyền chọn tính chi phí vốn CSH. Amazon 1999: coupon 4,75%, 10 năm, nếu phát hành thường phải trả 11% ⇒ phần trái phiếu = <b>$636</b>, quyền chọn = 980 − 636 = <b>$344</b>; cả đợt $1,25 tỷ ⇒ nợ $811 triệu, vốn CSH $439 triệu.' }
    ] },
    { icon: '⚖️', title: 'Trọng số: nợ là gì, giá thị trường hay sổ sách?', blocks: [
      { t: 'list', items: [
        '<b>Chỉ tính nợ chịu lãi</b> (ngắn + dài hạn), không tính phải trả người bán.',
        '<b>Vốn hoá thuê hoạt động</b> như nợ: chiết khấu các khoản thuê tương lai theo chi phí vay trước thuế. Ngoài Mỹ (không công bố): giả định niên kim bằng khoản thuê năm nay trong 8–10 năm. Boeing: PV = <b>$556 triệu</b> ở 6%.',
        '<b>Dùng giá trị thị trường</b> vì vốn được huy động ở giá thị trường.'
      ] },
      { t: 'warn', x: '<b>Ba lý lẽ bảo vệ giá trị sổ sách đều yếu</b>: (1) “ổn định hơn” — chỉ vì sổ sách kém phản ánh; (2) “thận trọng hơn” — ví dụ D/V thị trường 10% vs sổ sách 30%, k<sub>e</sub> 15%, k<sub>d</sub> 5%: thị trường 14% &gt; sổ sách 12%, tức sổ sách làm chi phí vốn thấp đi; (3) “người cho vay dùng sổ sách” — thực tế họ vay theo giá trị thị trường (vay thế chấp lần hai).' },
      { t: 'h3', x: 'Giá trị thị trường của nợ' },
      { t: 'p', x: 'Coi toàn bộ nợ là một trái phiếu có coupon = lãi vay, kỳ hạn = kỳ hạn bình quân gia quyền, chiết khấu ở chi phí nợ hiện tại. $1 tỷ nợ, lãi 60 triệu, 6 năm, lãi suất 7,5% ⇒ <b>$930 triệu</b>. Boeing: lãi 453, 13,76 năm, 6% ⇒ $7.291 triệu + thuê $556 = <b>$7.847 triệu</b>.' },
      { t: 'table', head: ['Boeing', 'Thị trường', 'Sổ sách'], rows: [
        ['D/E', '7.847/55.197 = <b>14,22%</b>', '6.972/12.316 = 56,61%'],
        ['D/(D+E)', '<b>12,45%</b>', '36,15%']
      ] },
      { t: 'h3', x: 'Nợ gộp hay nợ ròng?' },
      { t: 'p', x: 'Nợ ròng = nợ − tiền mặt (phổ biến ở Mỹ La-tinh, châu Âu). An toàn hơn: dùng nợ gộp và cộng tiền mặt vào giá trị tài sản hoạt động. Nếu dùng nợ ròng thì phải <b>nhất quán</b>: beta theo D/E ròng, trọng số theo nợ ròng, không cộng lại tiền mặt mà trừ nợ ròng để ra giá trị vốn CSH. Nợ ròng giả định tiền mặt và nợ rủi ro như nhau ⇒ sai với công ty rủi ro (BB) và đánh giá cao giá trị.' }
    ] },
    { icon: '🧮', title: 'Chi phí vốn bình quân gia quyền (WACC)', blocks: [
      { t: 'key', x: '<b>Chi phí vốn = k<sub>e</sub>·E/(D+E+PS) + k<sub>d</sub>(1−t)·D/(D+E+PS) + k<sub>ps</sub>·PS/(D+E+PS)</b>, với E, D, PS là giá trị thị trường.' },
      { t: 'table', head: ['Công ty', 'Phép tính', 'Kết quả'], rows: [
        ['Boeing', '10,28%×0,8755 + 3,90%×0,1245', '<b>9,49%</b>'],
        ['Embraer (USD, nợ ròng 223; E 9.084)', '18,86%×9.084/9.307 + 7,45%×223/9.307', '<b>18,59%</b>'],
        ['Embraer (BR danh nghĩa)', '1,1859×1,10/1,02 − 1', '<b>27,89%</b>']
      ] },
      { t: 'widget', name: 'wacc-calc', title: 'Tính chi phí vốn (thử với số của Boeing)' },
      { t: 'tip', x: '<b>Thực tế doanh nghiệp</b> (khảo sát 27 công ty lớn của Bruner và cộng sự): 81% dùng CAPM, 70% dùng trái phiếu kho bạc 10 năm trở lên làm R<sub>f</sub>. Mô hình chuẩn là CAPM với beta; điều chỉnh bằng bottom-up là cách tốt nhất.' }
    ] }
  ],
  summary: [
    'Beta hồi quy: độ dốc của lợi nhuận cổ phiếu theo thị trường; alpha Jensen, R² và sai số chuẩn kèm theo; nhạy với kỳ, khoảng, chỉ số và dễ nhiễu.',
    'Beta nền tảng phụ thuộc loại hình kinh doanh, đòn bẩy hoạt động và đòn bẩy tài chính: β_L = β_u × [1 + (1 − t) D/E].',
    'Beta bottom-up (bình quân các công ty cùng ngành, gỡ rồi lắp đòn bẩy) vượt trội: SE nhỏ, theo kịp thay đổi cơ cấu, dùng được cho công ty tư nhân.',
    'Chi phí vốn CSH = R_f + β×ERP (+ λ×CRP với thị trường mới nổi).',
    'Chi phí nợ = (R_f + spread) × (1 − thuế biên); không xếp hạng thì dùng xếp hạng tổng hợp theo bảo chi lãi vay.',
    'Vốn hoá thuê hoạt động thành nợ, dùng giá trị thị trường làm trọng số; WACC của Boeing 9,49%.'
  ],
  cards: [
    ['Beta trong hồi quy là gì?', 'Độ dốc của hồi quy lợi nhuận cổ phiếu theo lợi nhuận thị trường = Cov(Rj, Rm)/Var(Rm).'],
    ['Alpha Jensen?', 'Hệ số chặn trừ Rf(1−β): hiệu suất vượt/dưới kỳ vọng CAPM.'],
    ['R² trong hồi quy beta cho biết gì?', 'Tỷ lệ rủi ro là rủi ro thị trường; (1−R²) là rủi ro riêng công ty.'],
    ['Sai số chuẩn beta dùng để làm gì?', 'Dựng khoảng tin cậy: beta ± 1 SE (67%), ± 2 SE (95%).'],
    ['Beta điều chỉnh của Bloomberg?', '0,67 × beta thô + 0,33 × 1.'],
    ['Thiên kiến không giao dịch?', 'Khoảng lợi nhuận ngắn (ngày) làm beta cổ phiếu ít giao dịch bị kéo xuống; dùng tuần/tháng giảm bớt.'],
    ['Vì sao hồi quy Nokia với chỉ số Helsinki là vô nghĩa?', 'Nokia chiếm 75% chỉ số nên là hồi quy với chính nó; SE thấp nhưng không đo rủi ro thật.'],
    ['Ba yếu tố quyết định beta?', 'Loại hình kinh doanh, đòn bẩy hoạt động, đòn bẩy tài chính.'],
    ['Công thức Hamada?', 'β_L = β_u × [1 + (1 − t) × D/E].'],
    ['Đòn bẩy hoạt động đo bằng gì?', 'DOL = %ΔLợi nhuận hoạt động / %ΔDoanh thu hoặc CP cố định/CP biến đổi.'],
    ['Năm bước tính beta bottom-up?', 'Xác định ngành → beta và D/E công ty so sánh → gỡ đòn bẩy bình quân → trọng số theo ngành → lắp D/E hiện tại.'],
    ['Vì sao bình quân beta rồi mới gỡ đòn bẩy?', 'Gỡ đòn bẩy từng beta lỗi sẽ khuếch đại lỗi.'],
    ['Sai số chuẩn của beta bottom-up?', 'SE bình quân ÷ √n.'],
    ['Beta bottom-up hơn hồi quy ở đâu?', 'SE nhỏ, phản ánh cơ cấu ngành và D/E hiện tại, dùng được cho công ty tư nhân/bộ phận.'],
    ['Vì sao tránh beta kế toán?', 'Thu nhập bị làm mượt, nhiễu bởi yếu tố phi hoạt động, ít quan sát (R² thấp).'],
    ['Chi phí vốn chủ sở hữu (CAPM)?', 'Rf + β × phần bù rủi ro thị trường.'],
    ['Thuế suất dùng cho khấu trừ lãi vay?', 'Thuế suất biên (không phải hiệu dụng), và chỉ khi có đủ lợi nhuận.'],
    ['Xếp hạng tổng hợp là gì?', 'Gán hạng tín nhiệm từ chỉ số tài chính (hệ số bảo chi lãi vay) cho công ty không có xếp hạng.'],
    ['Hệ số bảo chi lãi vay?', 'EBIT ÷ chi phí lãi vay; điều chỉnh thuê: (EBIT+thuê)/(lãi+thuê).'],
    ['Chi phí nợ doanh nghiệp thị trường mới nổi?', 'Rf + default spread quốc gia + default spread công ty (cách thận trọng).'],
    ['Chi phí cổ phiếu ưu đãi?', 'Cổ tức ưu đãi / giá thị trường; nằm giữa chi phí nợ và vốn CSH.'],
    ['Xử lý trái phiếu chuyển đổi?', 'Tách thành trái phiếu thường (nợ) và quyền chọn chuyển đổi (vốn CSH).'],
    ['Nợ khi tính chi phí vốn gồm gì?', 'Nợ chịu lãi (ngắn + dài hạn) và thuê hoạt động đã vốn hoá.'],
    ['Cách vốn hoá thuê hoạt động?', 'Chiết khấu các khoản thuê tương lai ở chi phí vay trước thuế (hoặc niên kim 8–10 năm).'],
    ['Vì sao dùng giá trị thị trường làm trọng số?', 'Chứng khoán được phát hành ở giá thị trường; sổ sách có thể làm chi phí vốn thấp giả tạo.'],
    ['Nợ gộp vs nợ ròng?', 'Nợ ròng = nợ − tiền mặt; nếu dùng phải nhất quán xuyên suốt (beta, trọng số, trừ nợ ròng, không cộng tiền mặt).'],
    ['Công thức WACC?', 'k_e×E/V + k_d(1−t)×D/V + k_ps×PS/V với V = D+E+PS theo giá thị trường.'],
    ['WACC Boeing?', '10,28%×87,55% + 3,90%×12,45% = 9,49%.']
  ],
  quiz: [
    { q: 'Độ dốc trong hồi quy R_j = a + b·R_m là:', o: ['Alpha', 'Beta', 'R²', 'Sai số chuẩn'], a: 1, e: 'b = Cov(Rj,Rm)/Var(Rm).' },
    { q: 'R² của Boeing là 9,43% nghĩa là:', o: ['9,43% rủi ro là rủi ro thị trường', '9,43% lợi nhuận bất thường', 'Beta là 0,0943', 'Công ty không có rủi ro'], a: 0, e: 'Còn lại 90,57% là rủi ro riêng.' },
    { q: 'Beta 0,56 với SE 0,23: khoảng tin cậy 95% xấp xỉ:', o: ['0,33–0,79', '0,10–1,02', '0,56–0,79', '0–2'], a: 1, e: '±2 SE.' },
    { q: 'Beta điều chỉnh của beta thô 1,40 theo Bloomberg:', o: ['1,27', '1,13', '1,07', '1,33'], a: 0, e: '0,67×1,4+0,33 = 1,27.' },
    { q: 'Beta ngày của cổ phiếu ít giao dịch thường bị:', o: ['Thổi phồng', 'Kéo xuống', 'Không đổi', 'Âm'], a: 1, e: 'Thiên kiến không giao dịch.' },
    { q: 'Vấn đề của hồi quy Nokia trên chỉ số Helsinki:', o: ['SE cao', 'Hồi quy với chính nó vì Nokia chiếm 75% chỉ số', 'Kỳ ngắn', 'Thiếu dữ liệu'], a: 1, e: 'SE thấp nhưng vô nghĩa.' },
    { q: 'Yếu tố KHÔNG phải là ba yếu tố quyết định beta:', o: ['Loại hình kinh doanh', 'Đòn bẩy hoạt động', 'Đòn bẩy tài chính', 'Màu logo công ty'], a: 3, e: 'Hãy nhớ ba yếu tố.' },
    { q: 'β_u = 0,51, t = 35%, D/E = 100% ⇒ β_L =', o: ['0,51', '0,84', '1,02', '1,28'], a: 1, e: '0,51×(1+0,65) = 0,84.' },
    { q: 'β = 0,56, t = 35%, D/E = 15,56% ⇒ β_u ≈', o: ['0,51', '0,56', '0,62', '0,40'], a: 0, e: '0,56/(1+0,65×0,1556).' },
    { q: 'Vì sao bình quân beta rồi mới gỡ đòn bẩy?', o: ['Dễ hơn', 'Tránh khuếch đại lỗi của beta hồi quy từng công ty', 'Luật yêu cầu', 'Làm beta cao hơn'], a: 1, e: 'Sách ưu tiên cách này.' },
    { q: 'SE bình quân 0,50, 100 công ty cùng ngành ⇒ SE beta bottom-up:', o: ['0,50', '0,25', '0,05', '0,005'], a: 2, e: '0,5/√100.' },
    { q: 'Beta bottom-up có lợi thế nào so với hồi quy?', o: ['Không cần dữ liệu ngành', 'Dùng cho công ty tư nhân và phản ánh thay đổi cơ cấu', 'Luôn cao hơn', 'Không dùng đòn bẩy'], a: 1, e: 'Cùng SE thấp.' },
    { q: 'Beta không vay của Boeing hợp nhất (0,8774) và D/E 7,85/55,2 ⇒ β ≈', o: ['0,56', '0,88', '0,96', '1,2'], a: 2, e: '0,8774×(1+0,65×0,1422).' },
    { q: 'Beta kế toán bị lệch vì:', o: ['Thu nhập kế toán được làm mượt', 'Quá nhiều dữ liệu', 'Dùng giá thị trường', 'Dùng chỉ số toàn cầu'], a: 0, e: 'Và còn ít quan sát.' },
    { q: 'Phương pháp được tác giả ưa dùng nhất:', o: ['Beta kế toán', 'Beta hồi quy', 'Beta bottom-up', 'Beta = 1'], a: 2, e: 'SE nhỏ, nhìn về tương lai.' },
    { q: 'Với Rf 5%, β 0,9585, ERP 5,51% ⇒ k_e Boeing:', o: ['7,75%', '10,28%', '5,28%', '9,49%'], a: 1, e: '5 + 0,9585×5,51.' },
    { q: 'Khi tính λ, Embraer có 9% doanh thu Brazil, công ty điển hình 60% ⇒ λ =', o: ['0,15', '0,60', '0,09', '6,7'], a: 0, e: '9/60.' },
    { q: 'Thuế suất để tính chi phí nợ sau thuế là:', o: ['Hiệu dụng', 'Biên', 'Trung bình 10 năm', 'Bằng 0'], a: 1, e: 'Lãi vay tiết kiệm thuế ở mức biên.' },
    { q: 'EBIT 1.720, lãi vay 453: hệ số bảo chi ≈', o: ['0,26', '3,80', '8,5', '12'], a: 1, e: 'Vốn hoá lớn: A−.' },
    { q: 'Công ty không có xếp hạng nên ước tính chi phí nợ bằng:', o: ['Xếp hạng tổng hợp theo bảo chi lãi vay', 'Dùng chi phí vốn CSH', 'Lãi suất tiết kiệm', 'Dùng coupon trái phiếu cũ'], a: 0, e: 'Hoặc dựa vào lịch sử vay.' },
    { q: 'Cho cùng một hạng, công ty vốn hoá lớn có hệ số bảo chi yêu cầu:', o: ['Cao hơn', 'Thấp hơn', 'Như nhau', 'Không xác định'], a: 1, e: 'Công ty lớn chịu đựng tốt hơn.' },
    { q: 'Chi phí nợ doanh nghiệp Brazil (cách thận trọng):', o: ['Rf + spread công ty', 'Rf + spread quốc gia + spread công ty', 'Chi phí CSH', 'Rf'], a: 1, e: '5% + 5,37% + 0,75% = 11,12%.' },
    { q: 'Cổ tức ưu đãi 2,28, giá 26,38 ⇒ chi phí ưu đãi:', o: ['5,28%', '8,64%', '13%', '2,28%'], a: 1, e: '2,28/26,38.' },
    { q: 'Trái phiếu chuyển đổi nên được xử lý:', o: ['Toàn bộ là nợ', 'Toàn bộ là vốn CSH', 'Tách thành trái phiếu thường và quyền chọn', 'Bỏ qua'], a: 2, e: 'Mỗi phần có chi phí riêng.' },
    { q: 'Thuê hoạt động nên được:', o: ['Bỏ qua', 'Vốn hoá thành nợ khi tính trọng số', 'Tính vào vốn CSH', 'Chỉ tính ở Mỹ'], a: 1, e: 'PV Boeing $556 triệu.' },
    { q: 'Vì sao dùng giá thị trường (không dùng sổ sách) làm trọng số?', o: ['Ổn định hơn', 'Vốn được huy động ở giá thị trường', 'Dễ lấy', 'Luật định'], a: 1, e: 'Sổ sách làm chi phí vốn thấp giả.' },
    { q: 'D/V thị trường 10%, sổ sách 30%; k_e 15%, k_d 5%. WACC thị trường =', o: ['12%', '14%', '10%', '15%'], a: 1, e: '15×0,9+5×0,1.' },
    { q: 'Nếu dùng nợ ròng, điều nào đúng?', o: ['Phải cộng tiền mặt vào giá trị', 'Phải trừ nợ ròng và không cộng lại tiền mặt', 'Không cần nhất quán', 'Dùng nợ ròng chỉ cho trọng số'], a: 1, e: 'Nhất quán xuyên suốt.' },
    { q: 'WACC = 10,28%×0,8755 + 3,90%×0,1245 ≈', o: ['9,49%', '7,75%', '10,28%', '6,0%'], a: 0, e: 'Boeing.' },
    { q: 'Chỉ số D/E thị trường của Boeing là:', o: ['56,6%', '14,22%', '36,15%', '12,45%'], a: 1, e: '7.847/55.197.' }
  ],
  match: [
    ['Alpha Jensen', 'Hệ số chặn − Rf(1−β)'],
    ['R²', 'Tỷ lệ rủi ro thị trường'],
    ['β_L = β_u[1+(1−t)D/E]', 'Công thức Hamada'],
    ['Bottom-up beta', 'Bình quân beta ngành, gỡ rồi lắp đòn bẩy'],
    ['SE ÷ √n', 'Sai số chuẩn của beta bình quân'],
    ['Beta kế toán', 'Hồi quy thay đổi lợi nhuận kế toán'],
    ['Xếp hạng tổng hợp', 'Hạng suy từ hệ số bảo chi lãi vay'],
    ['Thuế suất biên', 'Dùng cho lá chắn thuế lãi vay'],
    ['Cổ phiếu ưu đãi', 'Cổ tức/giá, giữa nợ và CSH'],
    ['Trái phiếu chuyển đổi', 'Nợ thường + quyền chọn chuyển đổi'],
    ['Nợ ròng', 'Nợ trừ tiền mặt'],
    ['WACC', 'Bình quân gia quyền chi phí vốn theo giá thị trường']
  ]
});
