window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 19,
  title: 'Gói cứu trợ lớn',
  intro: 'Cuộc họp kín với Tổng thống, Bộ trưởng Tài chính, Chủ tịch Fed, SEC và hai CEO. MetroBank đề xuất kế hoạch bảy điểm: mua trái phiếu doanh nghiệp để gián tiếp đỡ cổ phiếu. Chủ tịch Fed phản đối, Johnston khuyên "không làm gì" — nhưng Tổng thống nghiêng về hành động.',
  sections: [
    { icon: '🧮', title: 'Bài toán của Tổng thống', blocks: [
      { t: 'p', x: 'Bộ trưởng Tài chính mở đầu: cắt thuế không có tác dụng nhiều, Fed đã hạ lãi suất gần bằng 0, bơm thanh khoản nhiều nhất trong 30 năm, nền tảng kinh tế "chỉ ra phục hồi mạnh" mà thị trường cổ phiếu vẫn yếu. Thị trường cổ phiếu là "gót chân Achilles" vì người tiêu dùng là trụ cột cuối cùng: tài sản ròng hộ gia đình mất 1,4 nghìn tỷ USD chỉ trong quý gần nhất. Mối đe dọa lớn hơn là <b>thị trường trái phiếu và đồng đô la</b>.' },
      { t: 'p', x: 'Câu hỏi đặt ra: có phải khẩn cấp thật? Có nên dùng "vũ khí phi truyền thống" — chính phủ mua chứng khoán trực tiếp để kéo Dow lên?' },
      { t: 'table', head: ['Nhân vật', 'Lập trường', 'Lý lẽ chính'], rows: [
        ['Chủ tịch Fed', 'Không phải khẩn cấp; chỉ dùng kênh ngân hàng truyền thống', 'Bài học Nhật tháng 9/2002: BOJ tuyên bố mua cổ phiếu → Nikkei tăng, nhưng ngày 20/9 phiên đấu giá trái phiếu chính phủ Nhật thiếu người mua (lần đầu), rồi đến 26/9 mất hết mức tăng của cổ phiếu'],
        ['MetroBank', 'Hành động ngay, không mất thời gian tìm nguyên nhân', 'Nhật đã 12 năm suy thoái, ngân hàng nát; Mỹ chưa. Nguyên nhân chính là niềm tin, mất 10,5 nghìn tỷ USD (6 nghìn tỷ Nasdaq + 4,5 nghìn tỷ NYSE). Nếu không làm gì: suy thoái sâu/thậm chí đại suy thoái, thâm hụt ngân sách mất kiểm soát, các thị trường tài chính khác sụp'],
        ['Johnston', 'Sự thật là gốc của niềm tin; bong bóng dựng trên dối trá', 'Số tiền "không đi đâu cả" vì chưa từng tồn tại; cổ phiếu giá gấp 300–400 lần doanh thu, nhiều công ty chưa có lợi nhuận'],
        ['Bộ trưởng Tài chính (về sau)', 'Nghiêng về phía Tổng thống', 'Tin rằng nhà nước cần hành động']
      ] },
      { t: 'widget', name: 'cp-japan-bond', title: 'Bài học Nhật: chính phủ mua cổ phiếu → nhà đầu tư trái phiếu "đình công"' }
    ] },
    { icon: '🍰', title: 'Bốn lớp dối trá và các vết nứt khác', blocks: [
      { t: 'steps', items: ['<b>Lớp 1:</b> CEO phóng đại/giả mạo lợi nhuận, giấu lỗ và nợ — thường dưới "chiếc ô" kế toán GAAP.', '<b>Lớp 2:</b> kiểm toán đóng dấu "sức khỏe tốt".', '<b>Lớp 3:</b> Phố Wall chấp nhận số liệu bóp méo, quảng bá bằng báo cáo xếp hạng.', '<b>Lớp 4:</b> môi giới/nhà hoạch định ăn hoa hồng đưa lời khuyên thực chất là bán hàng.'] },
      { t: 'p', x: 'SEC báo cáo: đến 15/8/2002, CEO của 691 tập đoàn lớn ký Lệnh số 4-460 xác nhận tính chính xác của báo cáo (thêm 237 CEO sau đó). Johnston phản bác: các hoạt động công ty con trong và ngoài nước, thủ thuật quỹ hưu trí, và rủi ro ẩn trong nợ/phái sinh vẫn còn; vụ WorldCom tăng từ 3 tỷ → 4 → 7 → gần 9 tỷ USD khi điều tra mở rộng.' },
      { t: 'h3', x: 'Năm vết nứt Johnston nêu' },
      { t: 'table', head: ['Vết nứt', 'Nội dung (theo nhân vật)'], rows: [
        ['1. Ngân sách', 'Thâm hụt chính thức 150–200 tỷ USD; ngoài bảng cân đối ít nhất 600 tỷ USD (theo Flow of Funds của Fed); OMB ước tính có thể trên 1 nghìn tỷ USD/năm nếu doanh nghiệp và kinh tế tiếp tục suy yếu; thêm hàng trăm tỷ USD sai sót kế toán trong các cơ quan chính phủ'],
        ['2. Thị trường chứng khoán chính phủ', 'Chuỗi: bán cổ phiếu → mua trái phiếu doanh nghiệp → (phá sản) mua trái phiếu chính phủ → (lo ngại chính phủ can thiệp) rời bỏ cả trái phiếu chính phủ; ký ức 1980'],
        ['3. Đồng đô la', 'Nước ngoài giữ gần 1 nghìn tỷ USD Kho bạc và chứng khoán đại lý, 2,9 nghìn tỷ USD cổ phiếu Mỹ, 8 nghìn tỷ USD tài sản Mỹ khác; họ là chủ sở hữu lớn nhất, không thể kiểm soát'],
        ['4. Bất động sản', 'Nợ thế chấp gần 6 nghìn tỷ USD nhưng không còn tăng; nếu yếu thêm thì "tạm biệt phục hồi"'],
        ['5. Phái sinh', 'Giá trị danh nghĩa gần 50 nghìn tỷ ở Mỹ và có thể 60 nghìn tỷ ở nước ngoài; một số ngân hàng lớn mạo hiểm 100% vốn trở lên (theo OCC)']
      ] },
      { t: 'widget', name: 'cp-dollar-exposure', title: 'Ai giữ tài sản Mỹ? Sức ép khi nhà đầu tư nước ngoài bán' },
      { t: 'warn', x: 'Các số liệu trong hội nghị là của nhân vật hư cấu trong bối cảnh 2002, mô phỏng tranh luận chính sách. Bạn hãy dùng chúng để hiểu logic các rủi ro, không phải làm dữ liệu cập nhật.' }
    ] },
    { icon: '🛑', title: 'Các công cụ bị loại và thế lưỡng nan', blocks: [
      { t: 'p', x: 'Tổng thống đề xuất lần lượt và bị bác bỏ: đóng cửa thị trường (SEC: sụp 1987 chỉ kéo dài 1–2 ngày, 11/9 là cú sốc bên ngoài; còn đây là đà giảm nhiều năm nên khó có cơ sở đóng/mở lại); giảm lãi suất (Fed đã đưa lãi suất về sát 0, Nhật cũng vậy mà vô ích); cắt thuế (thâm hụt mất kiểm soát, bang tăng thuế bù); thêm tín dụng và tiền rẻ (đã làm); ưu đãi lãi vốn (cần doanh thu); chuyển quỹ An sinh xã hội sang cổ phiếu (không thể khi cổ phiếu đang giảm).' },
      { t: 'key', x: 'Thế lưỡng nan theo Fed: <b>hoặc cứu thị trường cổ phiếu, hoặc cứu thị trường trái phiếu chính phủ, không thể cả hai</b>. Cứu cổ phiếu → mất niềm tin toàn cầu vào chính phủ Mỹ và làm sập trái phiếu chính phủ; không cứu cổ phiếu → kinh tế sụp. Tóm lại "giết trái phiếu hay giết nền kinh tế".' },
      { t: 'p', x: 'Johnston đề nghị <b>"không làm gì"</b> — chính phủ trung lập với thị trường (market-neutral) chứ không phải "tổng thống bất động". Lý do: lịch sử cho thấy mỗi hành động mạnh đều gây phản ứng ngoài dự kiến với chu kỳ ngày càng ngắn. Ví dụ: Nixon đóng băng giá và lương → lạm phát phi mã và cấm vận dầu; Ford thâm hụt và tiền rẻ → sụp đổ đô la lần đầu; Carter cứu thị trường trái phiếu 1980 → suy thoái đột ngột; bơm tiền 1984–86 → đô la sụp đổ lần nữa và vụ sập 1987; Clinton nới lỏng quản lý → cơn sốt công nghệ lớn nhất lịch sử.' },
      { t: 'warn', x: 'Đây là quan điểm của tác giả/nhân vật. Trong thực tế, các cuộc khủng hoảng 2008–09 và 2020 chứng kiến can thiệp quy mô cực lớn (mua tài sản, cứu trợ), với kết quả bị tranh cãi nhiều, nhưng không dẫn đến sụp đổ trái phiếu chính phủ Mỹ như kịch bản trong sách.' }
    ] },
    { icon: '7️⃣', title: 'Kế hoạch bảy điểm của MetroBank', blocks: [
      { t: 'steps', items: ['<b>Thưởng người mua, phạt người bán khống:</b> Fed hạ yêu cầu ký quỹ khi mua cổ phiếu, tăng yêu cầu ký quỹ với bán khống.', '<b>Fed New York mua trái phiếu doanh nghiệp</b> (không mua cổ phiếu trực tiếp), tương tự Reconstruction Finance Corporation thời Đại suy thoái.', '<b>Lớp vỏ chính trị:</b> chỉ mua trái phiếu của công ty có kế toán "sạch" và/hoặc vai trò an ninh nội địa — tiêu chí co giãn đủ để chọn công ty bất kỳ.', '<b>Điều kiện:</b> ít nhất 75% số tiền phải dùng ngay để mua lại cổ phiếu của chính công ty (giống các thương vụ LBO thập niên 1980, nhưng nguồn tiền là chính phủ).', '<b>Kiểm soát ngoại hối</b> để ngăn dòng vốn ngoại rút.', '<b>Bỏ tạm thời yêu cầu dự trữ bắt buộc của ngân hàng</b> để họ cho vay thêm.', '<b>Ngân hàng cam kết cắt lãi suất cho vay ưu đãi (prime)</b> nếu chính phủ làm theo.'] },
      { t: 'widget', name: 'cp-bailout-plan', title: 'Kế hoạch bảy điểm: điểm nào tác động lên cổ phiếu, điểm nào gây rủi ro?' },
      { t: 'p', x: 'Chủ tịch Fed phản đối: với mỗi đô la chính phủ mua trái phiếu doanh nghiệp, chính phủ phải vay thêm một đô la từ công chúng; nhà đầu tư trái phiếu chính phủ sẽ coi đó là cách mua cổ phiếu gián tiếp; nhà đầu tư ngoại "cười vào mặt" — sẽ phản tác dụng như ở Nhật. MetroBank phản bác: kênh truyền thống "như uống thuốc", quá chậm và đã thất bại.' },
      { t: 'p', x: 'Tổng thống ủng hộ MetroBank; Bộ trưởng Tài chính lùi về trung lập. Chủ tịch Fed bị ép: nếu Fed không làm, Tổng thống được Quốc hội ủng hộ sẽ tự tài trợ ồ ạt cho các công ty mua lại cổ phiếu. Ông miễn cưỡng chọn hợp tác để ít nhất giữ quyền kiểm soát và giữ kín. Tin đồn: Fed New York sẽ mua trái phiếu của 14 trong 30 công ty Dow, cùng danh sách dài hơn, rồi mở rộng sang cả trái phiếu rác và công ty hấp hối.' }
    ] }
  ],
  summary: ['Chính phủ gần hết công cụ truyền thống: lãi suất ~0, thuế, tín dụng đã dùng.', 'Chủ tịch Fed dẫn Nhật 2002 để cảnh báo mua cổ phiếu sẽ làm sập đấu giá trái phiếu chính phủ.', 'Johnston nêu năm vết nứt: ngân sách, trái phiếu chính phủ, đô la, bất động sản, phái sinh.', 'Thế lưỡng nan: cứu cổ phiếu hay trái phiếu chính phủ — không thể cả hai.', 'Kế hoạch bảy điểm: mua trái phiếu doanh nghiệp kèm điều kiện mua lại cổ phiếu 75%.'],
  cards: [['Hai lựa chọn cơ bản theo Fed?', 'Cứu cổ phiếu hay cứu trái phiếu chính phủ'], ['Bài học Nhật tháng 9/2002?', 'BOJ mua cổ phiếu → đấu giá trái phiếu thiếu người mua'], ['"Market-neutral government"?', 'Chính phủ không can thiệp để thị trường tự quyết'], ['Điểm 4 trong kế hoạch MetroBank?', 'Ít nhất 75% tiền phải dùng mua lại cổ phiếu'], ['Điểm 1?', 'Hạ ký quỹ mua, tăng ký quỹ bán khống'], ['Nước ngoài giữ bao nhiêu cổ phiếu Mỹ (theo Johnston)?', '2,9 nghìn tỷ USD'], ['Thâm hụt ngoài bảng ước tính?', 'Ít nhất 600 tỷ USD'], ['Kế toán WorldCom ban đầu?', '3 tỷ USD, sau gần 9 tỷ'], ['Công cụ nào Tổng thống đề xuất trước kế hoạch?', 'Đóng cửa thị trường, giảm lãi suất, cắt thuế, tiền rẻ, ưu đãi lãi vốn, đổi An sinh xã hội']],
  quiz: [
    { q: 'Điểm 4 của MetroBank yêu cầu bao nhiêu % tiền phải mua lại cổ phiếu?', o: ['25%', '50%', '75%', '100%'], a: 2, e: 'Ít nhất 75%.' },
    { q: 'Vì sao đóng cửa thị trường bị SEC bác bỏ?', o: ['Đà giảm kéo dài nhiều năm, khó có lý do đóng/mở lại', 'Quá đắt', 'Luật cấm', 'Không ai muốn'], a: 0, e: 'Khác 1987 và 11/9.' },
    { q: 'Điều xảy ra ở Nhật ngày 20/9/2002:', o: ['Nikkei tăng 10%', 'Đấu giá trái phiếu chính phủ thiếu người mua', 'BOJ bán cổ phiếu', 'Đồng yên mạnh'], a: 1, e: 'Lần đầu tiên.' },
    { q: 'Thế lưỡng nan của Fed là gì?', o: ['Cứu cổ phiếu hay cứu trái phiếu chính phủ', 'Tăng hay giảm thuế', 'Mua vàng hay bạc', 'Đóng hay mở sàn'], a: 0, e: 'Không thể cả hai.' },
    { q: 'Nước ngoài giữ khoảng bao nhiêu cổ phiếu Mỹ (theo Johnston)?', o: ['0,5 nghìn tỷ', '1 nghìn tỷ', '2,9 nghìn tỷ', '8 nghìn tỷ'], a: 2, e: '$2.9T.' }
  ],
  match: [['RFC', 'Cơ quan tài chính thời Đại suy thoái'], ['LBO', 'Mua lại bằng vốn vay'], ['OCC', 'Quản lý ngân hàng quốc gia'], ['OMB', 'Văn phòng Quản lý và Ngân sách'], ['Market-neutral', 'Không can thiệp']]
});
