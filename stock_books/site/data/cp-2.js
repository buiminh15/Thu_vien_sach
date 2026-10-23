window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 2,
  title: 'Bong bóng',
  intro: 'CEO của UCBS cần 4,3 tỷ USD để mua lại các công ty khác. Cách duy nhất là thị trường chứng khoán, và để thuyết phục giới phân tích, ông thuê chuyên gia "làm đẹp" sổ sách: quyền chọn cổ phiếu, công ty con, quỹ hưu trí và phái sinh. Chương này giải thích các chiêu đó hoạt động ra sao.',
  sections: [
    { icon: '💸', title: 'Vì sao phải lên sàn để huy động vốn', blocks: [
      { t: 'p', x: 'Paul Johnston muốn mua nhiều công ty khởi nghiệp công nghệ sợi quang và trả các khoản nợ đến hạn. Không ngân hàng nào cho vay nổi số tiền đó, nên phải phát hành thêm cổ phiếu. Thập niên 1990, Nasdaq cho phép hầu như công ty công nghệ nào có "câu chuyện hay" cũng huy động được hàng tỷ USD: trong 1995–2000 có hơn 2.800 công ty ra đời và huy động 177 tỷ USD, riêng 1999–2000 là 103 tỷ.' },
      { t: 'table', head: ['Chỉ số của UCBS cuối 1999', 'Giá trị'], rows: [['Nợ trên mỗi 1 USD vốn', '5 USD'], ['Tiền mặt trên mỗi 1 USD nợ đến hạn trong 1 năm', '8 xu'], ['Số tiền muốn huy động', '4,3 tỷ USD']] },
      { t: 'tip', x: 'Khán giả thực sự của CEO không phải nhà đầu tư nhỏ mà là các <b>phân tích viên</b> của ngân hàng lớn — họ sẽ "bán câu chuyện" cho truyền thông và quỹ đầu tư.' }
    ] },
    { icon: '🎯', title: 'Quyền chọn cổ phiếu (stock options)', blocks: [
      { t: 'p', x: 'Các cố vấn đề xuất tăng gấp bốn số quyền chọn dành cho ban lãnh đạo (không chia cho nhân viên cấp dưới). Quyền chọn cho phép mua cổ phiếu ở giá cố định thấp; nếu giá cổ phiếu tăng, lợi nhuận khổng lồ; nếu không tăng, người giữ chỉ mất quyền chọn, không mất vốn. Khi đó, lãnh đạo có động cơ cực mạnh để kéo giá cổ phiếu lên, kể cả bằng cách "chỉnh số".' },
      { t: 'key', x: 'Lúc đó (đầu những năm 2000) quyền chọn không phải ghi vào chi phí lợi nhuận. Ban giám đốc thường phê duyệt vì chính họ cũng nhận phiên bản thu nhỏ của gói này.' },
      { t: 'widget', name: 'cp-options', title: 'Lợi nhuận quyền chọn theo giá cổ phiếu' }
    ] },
    { icon: '🏚️', title: 'Chiêu công ty con (subsidiary shell game)', blocks: [
      { t: 'p', x: 'UCBS nắm không quá 49% rất nhiều công ty con, liên doanh, quan hệ đối tác. Quy tắc lúc đó: nếu không nắm đa số thì không phải hợp nhất báo cáo → nợ và lỗ của các đơn vị đó nằm ngoài sổ UCBS. Khi nào đơn vị có lãi thì mua đa số với giá rẻ rồi hợp nhất để khoe lợi nhuận. "Lỗ thì giấu, lãi thì khoe."' },
      { t: 'list', items: ['Enron được nêu làm hình mẫu: hơn 900 công ty con/đối tác, 245 luật sư nội bộ; doanh thu nếu tính đúng chỉ xếp khoảng thứ 69 chứ không phải thứ 7 nước Mỹ.', 'Tên khác bị nhắc: Adelphia, Computer Associates, Global Crossing, Halliburton, Lucent, Qwest, Tyco.', 'Theo cố vấn, riêng cách này có thể đưa giá UCBS từ 11 USD lên gần 18 USD.'] }
    ] },
    { icon: '🧮', title: 'Lợi nhuận "ma" từ quỹ hưu trí', blocks: [
      { t: 'p', x: 'Quỹ hưu trí của nhân viên cần 9,6 tỷ USD để trả nghĩa vụ, nhưng đang có 11,1 tỷ USD vì thị trường tăng — thừa 1,5 tỷ USD. Theo quy tắc kế toán lúc đó, công ty được phép đưa lãi dự kiến của quỹ vào lợi nhuận công bố, dù đó là tiền của nhân viên. Ví dụ thực tế trong sách: Verizon, Kodak, TRW, Honeywell biến lỗ thành lãi hoặc giảm lỗ nhờ lãi dự kiến của quỹ hưu trí.' },
      { t: 'key', x: 'Khi thị trường giảm, khoản lỗ của quỹ được <b>dàn trải</b> nhiều năm (ví dụ 10 năm) trong khi lãi dự kiến cứ tính đầy đủ → lợi nhuận công bố gần như không đổi dù quỹ đang lỗ.' },
      { t: 'widget', name: 'cp-pension', title: 'Lợi nhuận "ma": lỗ quỹ hưu trí được dàn trải' }
    ] },
    { icon: '🎲', title: 'Phái sinh (derivatives)', blocks: [
      { t: 'p', x: 'Phái sinh là các hợp đồng cược trên hầu như mọi thứ: lãi suất, khí đốt, điện, vi mạch... Công ty có thể tự tạo hợp đồng "may đo" với đối tác (ngân hàng, đối thủ). Vì không có giá chuẩn, cách định giá, ghi sổ và công bố gần như do công ty quyết định; nhiều khi chỉ nằm trong chú thích ít ai đọc.' },
      { t: 'warn', x: 'Câu thần chú của các cố vấn: "Tất cả đều hợp pháp." Hợp pháp không đồng nghĩa với trung thực với nhà đầu tư.' }
    ] },
    { icon: '🔎', title: 'Điều gì đã xảy ra sau đó (ghi chú ngoài sách)', blocks: [
      { t: 'list', items: ['Enron (2001) và WorldCom (2002) phá sản vì gian lận kế toán; sau đó Mỹ ban hành Sarbanes-Oxley (2002).', 'Từ 2006 quyền chọn cổ phiếu phải được tính vào chi phí (chuẩn FAS 123R).', 'Quy định về hợp nhất các thực thể "mục đích đặc biệt" được siết chặt sau Enron.'] }
    ] }
  ],
  summary: ['Bong bóng nuôi bằng nhu cầu huy động vốn khổng lồ qua thị trường chứng khoán.', 'Quyền chọn tạo động cơ kéo giá cổ phiếu lên bằng mọi giá.', 'Công ty con dưới 50% giúp giấu nợ/lỗ ngoài báo cáo hợp nhất.', 'Lãi dự kiến của quỹ hưu trí có thể biến lỗ thành lãi trên giấy.', 'Phái sinh tự tạo khó định giá và dễ che giấu rủi ro.', '"Hợp pháp" chưa chắc là an toàn cho nhà đầu tư.'],
  cards: [['Quyền chọn cổ phiếu cho phép gì?', 'Quyền (không phải nghĩa vụ) mua cổ phiếu ở giá cố định'], ['Vì sao quyền chọn khiến CEO thích tăng giá cổ phiếu?', 'Giá tăng thì lợi nhuận quyền chọn có thể gấp nhiều lần lương'], ['Ngưỡng sở hữu để không phải hợp nhất báo cáo (ví dụ sách)?', 'Không quá 49%'], ['Lợi ích của chiêu công ty con?', 'Giấu nợ/lỗ, khi có lãi mới hợp nhất để khoe'], ['Quỹ hưu trí thừa 1,5 tỷ USD nghĩa là gì?', 'Tài sản quỹ lớn hơn nghĩa vụ phải trả'], ['Cách dàn trải lỗ hưu trí giúp gì?', 'Lợi nhuận công bố hầu như không giảm khi thị trường giảm'], ['Phái sinh là gì (theo sách)?', 'Hợp đồng cược trên giá/lãi suất/hàng hóa...'], ['Mục tiêu của phân tích viên với UCBS?', 'Hào hứng để viết báo cáo "mua mạnh" cho công chúng']],
  quiz: [
    { q: 'Nợ của UCBS cuối 1999 trên mỗi 1 USD vốn:', o: ['1 USD', '2 USD', '5 USD', '10 USD'], a: 2, e: 'Nợ gấp 5 lần.' },
    { q: 'Vì sao công ty chỉ nắm 49% công ty con?', o: ['Luật cấm 51%', 'Không phải hợp nhất nợ/lỗ của chúng', 'Thuế thấp hơn', 'Dễ bán'], a: 1, e: 'Không nắm đa số thì không phải hợp nhất.' },
    { q: 'Quỹ lãi dự kiến 10 triệu, lỗ thực 5 triệu dàn trải 10 năm: lợi nhuận công bố (theo ví dụ):', o: ['5 triệu', '9,5 triệu', '0,5 triệu', '15 triệu'], a: 1, e: '10 − 0,5.' },
    { q: 'Quyền chọn mua giá 10, giá thị trường 12, 1 triệu cổ phiếu, lãi:', o: ['1 triệu', '2 triệu', '12 triệu', '10 triệu'], a: 1, e: '(12−10) × 1 triệu.' },
    { q: 'Điều gì đã được siết chặt sau 2002?', o: ['Bỏ Nasdaq', 'Kế toán và quản trị công ty (Sarbanes-Oxley)', 'Cấm phái sinh', 'Cấm huy động vốn'], a: 1, e: 'Sarbanes-Oxley.' }
  ],
  match: [['Quyền chọn', 'Mua giá cố định'], ['Công ty con <50%', 'Ngoài báo cáo hợp nhất'], ['Quỹ hưu trí thừa', 'Lãi trên giấy'], ['Phái sinh tự tạo', 'Khó định giá'], ['Phân tích viên', 'Khán giả của CEO']]
});
