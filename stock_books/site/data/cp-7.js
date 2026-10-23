window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 7,
  title: 'Đưa tiền về nơi an toàn',
  intro: 'Sau khi bán cổ phiếu, tiền để ở đâu? Cố vấn giải thích quỹ thị trường tiền tệ, quỹ chỉ đầu tư trái phiếu kho bạc Mỹ, và vì sao trái phiếu công ty hay thậm chí trái phiếu chính phủ dài hạn vẫn có thể lỗ khi lãi suất tăng.',
  sections: [
    { icon: '💧', title: 'Quỹ thị trường tiền tệ là gì?', blocks: [
      { t: 'p', x: 'Quỹ thị trường tiền tệ (money fund) là quỹ tương hỗ không mua cổ phiếu mà cho ngân hàng và doanh nghiệp vay ngắn hạn (30–90 ngày) qua chứng chỉ tiền gửi, giấy nợ thương mại... Tài sản không nằm ở công ty môi giới hay công ty quản lý quỹ mà do một ngân hàng giữ hộ, tách riêng khỏi tài sản của ngân hàng, nên nếu công ty môi giới sụp đổ tiền vẫn an toàn.' },
      { t: 'warn', x: 'Rủi ro nhỏ nhưng có thật: nếu một công ty hoặc ngân hàng mà quỹ cho vay vỡ nợ, bạn có thể mất thu nhập hoặc cả gốc.' }
    ] },
    { icon: '🏛️', title: 'Quỹ chỉ đầu tư trái phiếu kho bạc (Treasury-only)', blocks: [
      { t: 'p', x: 'Cố vấn khuyên chuyển sang loại quỹ chỉ mua chứng khoán kho bạc Mỹ ngắn hạn (hoặc giấy tờ được bảo đảm hơn 100% bằng kho bạc). Theo sách, bảy lợi thế:' },
      { t: 'table', head: ['Lợi thế', 'Ý nghĩa'], rows: [
        ['1. Lợi suất cạnh tranh', 'Cao hơn tài khoản vãng lai bình thường'],
        ['2. Phí thấp', 'Lợi suất quỹ báo cáo là sau khi trừ phí; lợi suất ngân hàng thường chưa trừ phí dịch vụ'],
        ['3. Một tài khoản cho cả thanh toán lẫn tiết kiệm', 'Rút toàn bộ bất cứ lúc nào, tiền sinh lãi đến khi séc được thanh toán'],
        ['4. Không giới hạn số dư', 'Bảo hiểm tiền gửi lúc đó chỉ 100.000 USD/ngân hàng; kho bạc bảo đảm không giới hạn'],
        ['5. Miễn thuế địa phương/bang', 'Thu nhập từ kho bạc không bị đánh thuế bang (vẫn chịu thuế liên bang)'],
        ['6. Séc miễn phí', 'Thường không thu thêm phí viết séc'],
        ['7. Thanh khoản tức thì', 'Viết séc, chuyển khoản điện tín hoặc yêu cầu gửi séc']
      ] },
      { t: 'tip', x: 'Theo sách, từ 1980 đến 2002 có hơn 3.000 ngân hàng và tổ chức tiết kiệm đổ vỡ, trong khi chưa bao giờ có vụ vỡ nợ trái phiếu kho bạc Mỹ.' },
      { t: 'warn', x: 'Nhược điểm duy nhất tác giả thừa nhận: lãi suất lúc ấy rất thấp. Phần danh sách quỹ và số điện thoại trong sách là của năm 2002, nay đã lỗi thời. Hãy kiểm tra quy định bảo hiểm và sản phẩm hiện hành tại nơi bạn sống.' },
      { t: 'widget', name: 'cp-fdic', title: 'Một khoản tiền gửi lớn: phần nào được bảo hiểm?' }
    ] },
    { icon: '🧾', title: 'Trái phiếu công ty không an toàn như tưởng', blocks: [
      { t: 'p', x: 'Cổ phiếu là một phần sở hữu; trái phiếu là khoản cho vay. Công ty hứa trả lãi hằng năm và hoàn gốc khi đáo hạn, bất kể lãi hay lỗ. Ví dụ: trái phiếu GM 6,75% đáo hạn 2028, mệnh giá 10.000 USD: bạn cho GM vay 10.000 USD, mỗi năm nhận 675 USD.' },
      { t: 'p', x: 'Người ta bán trái phiếu vì hai lý do đầu tiên:' },
      { t: 'list', items: ['<b>Cần tiền</b>: tờ giấy "nợ" không mua được gì.', '<b>Sợ hãi</b>: các hãng xếp hạng (Moody\'s, S&P, Fitch) hạ bậc, nguy cơ vỡ nợ tăng → giá giảm, có thể còn 25 xu trên mỗi đô la hoặc 0 nếu vỡ nợ.'] },
      { t: 'tip', x: 'Ví dụ trong sách: trái phiếu 6 năm của Revlon rớt từ 975 xuống 450 USD sau khi bị hạ hạng; trái phiếu 2 năm của American Airlines giảm gần một nửa; nhiều công ty như Kmart, Lucent, Polaroid, Qwest cũng bị thiệt hại nặng.' }
    ] },
    { icon: '🔁', title: 'Trái phiếu chính phủ và "yếu tố ghen tị"', blocks: [
      { t: 'p', x: 'Trái phiếu kho bạc Mỹ an toàn về thanh toán, nhưng <b>giá thị trường</b> của trái phiếu dài hạn vẫn có thể giảm vì lãi suất tăng. Cố vấn gọi là "yếu tố ghen tị" (yield envy): nếu bạn giữ trái phiếu 5% nhưng trái phiếu mới trả 10%, không ai muốn mua trái phiếu cũ của bạn trừ khi giá giảm, ví dụ về 50.000 USD để thu 5.000 USD/năm tương đương lợi suất 10%.' },
      { t: 'key', x: 'Quy tắc: <b>lãi suất tăng → giá trái phiếu đang lưu hành giảm</b>, bất kể ai phát hành. Trái phiếu càng dài hạn càng nhạy.' },
      { t: 'widget', name: 'cp-bond', title: 'Giá trái phiếu khi lãi suất thị trường đổi' },
      { t: 'p', x: 'Theo sách: 1980 trái phiếu kho bạc 30 năm mệnh giá 10.000 USD rớt xuống 5.500; 1981 còn 4.300; 1994 là năm tồi tệ nhất lịch sử đối với trái phiếu. Giữ đến đáo hạn thì nhận lại gốc, nhưng phải chịu lợi suất thấp nhiều năm.' },
      { t: 'table', head: ['Kỳ hạn phát hành (theo cách gọi ở Mỹ)', 'Tên'], rows: [['Dưới 1 năm', 'Bill'], ['1–10 năm', 'Note'], ['10–30 năm', 'Bond']] },
      { t: 'tip', x: 'Cách giảm rủi ro: chỉ cho vay người đáng tin, và chỉ trong thời gian ngắn. Kỳ hạn càng ngắn, giá biến động càng ít — Treasury bill ngắn hạn là loại an toàn nhất, và quỹ Treasury-only chính là sản phẩm làm điều đó. Khi lãi suất tăng, thu nhập của quỹ này cũng tăng gần như ngay.' }
    ] }
  ],
  summary: ['Tiền bán cổ phiếu cần chỗ cất an toàn, thanh khoản.', 'Quỹ tiền tệ cho vay ngắn hạn; quỹ Treasury-only chỉ mua chứng khoán kho bạc ngắn hạn.', 'Trái phiếu doanh nghiệp có thể giảm giá mạnh như cổ phiếu khi bị hạ hạng hoặc vỡ nợ.', 'Lãi suất tăng làm giá trái phiếu đang lưu hành giảm; kỳ hạn dài chịu nhiều nhất.', 'Kỳ hạn ngắn giảm rủi ro biến động giá.'],
  cards: [['Quỹ tiền tệ là gì?', 'Quỹ cho vay ngắn hạn (CD, giấy nợ thương mại) thay vì mua cổ phiếu'], ['Treasury-only fund mua gì?', 'Chứng khoán kho bạc Mỹ ngắn hạn hoặc giấy tờ được bảo đảm >100% bằng chúng'], ['Hai lý do chính khiến người ta bán trái phiếu?', 'Cần tiền và sợ hãi (hạ hạng, nguy cơ vỡ nợ)'], ['"Yếu tố ghen tị" là gì?', 'Trái phiếu cũ lãi thấp mất giá khi trái phiếu mới lãi cao hơn'], ['Lãi suất tăng thì giá trái phiếu cũ?', 'Giảm'], ['Bill, note, bond khác nhau?', 'Dưới 1 năm; 1–10 năm; 10–30 năm'], ['Rủi ro nhỏ của quỹ tiền tệ thường?', 'Bên được quỹ cho vay vỡ nợ'], ['Nhược điểm chính của quỹ kho bạc lúc đó?', 'Lợi suất thấp']],
  quiz: [
    { q: 'Trái phiếu 5% đang lưu hành, lãi suất thị trường tăng lên 10%, giá hợp lý khoảng:', o: ['100%', '75%', '50%', '10%'], a: 2, e: 'Cần mức thu nhập 10% trên giá bỏ ra.' },
    { q: 'Ai giữ tài sản của quỹ tiền tệ?', o: ['Công ty môi giới', 'Công ty quản lý quỹ', 'Một ngân hàng giữ hộ tách biệt', 'Chính phủ'], a: 2, e: 'Ngân hàng làm đại lý giữ tài sản.' },
    { q: 'Vì sao trái phiếu doanh nghiệp có thể giảm mạnh?', o: ['Do hạ hạng/nguy cơ vỡ nợ', 'Do mưa', 'Do lạm phát âm', 'Không thể giảm'], a: 0, e: 'Nhà đầu tư sợ và bán.' },
    { q: 'Cách giảm rủi ro biến động giá trái phiếu:', o: ['Kỳ hạn dài hơn', 'Kỳ hạn ngắn hơn', 'Mua cổ phiếu', 'Vay thêm'], a: 1, e: 'Kỳ hạn càng ngắn càng ít biến động.' },
    { q: 'Bill là trái phiếu kho bạc kỳ hạn:', o: ['Dưới 1 năm', '1–10 năm', '10–30 năm', '50 năm'], a: 0, e: 'Dưới 1 năm.' }
  ],
  match: [['Money fund', 'Cho vay ngắn hạn'], ['Treasury-only', 'Chỉ mua chứng khoán kho bạc'], ['Yield envy', 'Trái phiếu cũ mất giá khi lãi suất tăng'], ['Hạ hạng', 'Nguy cơ vỡ nợ tăng'], ['Bill', 'Dưới 1 năm']]
});
