window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 12,
  title: 'Định giá, bất định lợi nhuận và mô hình Fed',
  intro: 'Các chiến lược trước chỉ có tầm nhìn khoảng một quý. Chương này thêm ba công cụ dài hơi: định giá bằng P/E và PEG, đo mức bất định của ước tính lợi nhuận, và mô hình Fed để quyết định tỷ lệ cổ phiếu trong danh mục.',
  sections: [
    { icon: '🏷️', title: 'P/E và PEG', blocks: [
      { t: 'p', x: '<b>P/E</b> = giá cổ phiếu ÷ EPS 12 tháng. Có hai lựa chọn: EPS 12 tháng đã qua (trailing) hoặc đồng thuận ước tính năm tài chính tới (<b>forward P/E</b>). Giới chuyên nghiệp ưa forward P/E vì giá phản ánh lợi nhuận tương lai. P/E cho biết thị trường sẵn sàng trả bao nhiêu cho một đô la lợi nhuận tương lai — tức mức hào hứng về tăng trưởng.' },
      { t: 'key', x: '<b>PEG = forward P/E ÷ ước tính tăng trưởng dài hạn (%).</b> Câu hỏi đúng không phải "P/E cao hay thấp" mà "P/E có xứng với tăng trưởng tương lai không". Nhà đầu tư giá trị tìm cổ phiếu có tăng trưởng thực lớn hơn mức P/E đang phản ánh.' },
      { t: 'widget', name: 'zm-peg', title: 'Tính forward P/E và PEG' },
      { t: 'list', items: ['Cổ phiếu rẻ theo P/E và PEG vượt trội theo thời gian — quan niệm "giá trị thắng tăng trưởng" có cơ sở. Cần kiên nhẫn.', 'Nên tránh cổ phiếu có forward P/E trên khoảng 65.', 'Theo kết quả của tác giả, P/E phân biệt được cổ phiếu vượt trội tốt hơn PEG.'] }
    ] },
    { icon: '🎲', title: 'Bất định lợi nhuận', blocks: [
      { t: 'p', x: 'Nhà phân tích bất đồng càng mạnh về lợi nhuận của một công ty, ước tính càng "bất định". Tác giả đo bằng độ lệch chuẩn của các ước tính so với đồng thuận.' },
      { t: 'key', x: '<b>Chỉ số bất định = σ(ước tính năm này)/Đồng thuận năm này + σ(ước tính năm sau)/Đồng thuận năm sau.</b> Công ty có ước tính "rải khắp nơi" nên tránh; công ty có mức bất định thấp thường vượt trội.' },
      { t: 'widget', name: 'zm-uncertainty', title: 'Đo bất định ước tính: độ lệch chuẩn so với đồng thuận' },
      { t: 'tip', x: 'Phụ lục IV mô tả "chiến lược Dow": mỗi năm chọn 10 trong 30 cổ phiếu Dow có chỉ số bất định thấp nhất, giữ một năm. Theo back-test, vượt Dow khoảng 4,5%/năm, nhưng tác giả nhắc đây chỉ là back-test, có nguy cơ "khai thác dữ liệu" (data mining).' }
    ] },
    { icon: '🏛️', title: 'Mô hình Fed', blocks: [
      { t: 'p', x: 'Mô hình Fed không dùng để chọn cổ phiếu mà để quyết định bạn nên có bao nhiêu phần trăm trong cổ phiếu. Ý tưởng: coi S&P 500 như một "vĩnh viễn" với lợi nhuận kỳ vọng, chiết khấu bằng lợi suất Kho bạc 10 năm.' },
      { t: 'key', x: '<b>Giá trị hợp lý của S&P 500 = EPS đồng thuận dự phóng của chỉ số ÷ lợi suất Kho bạc 10 năm.</b> So với mức chỉ số hiện tại để biết thị trường bị định giá cao hay thấp (%).' },
      { t: 'widget', name: 'zm-fed', title: 'Mô hình Fed: chỉ số được định giá cao hay thấp?' },
      { t: 'table', head: ['Mức định giá của thị trường', 'Gợi ý tỷ lệ cổ phiếu / trái phiếu'], rows: [['Cao hơn hợp lý hơn 30%', '50% / 50%'], ['Cao hơn 20–30%', '60% / 40%'], ['Cao hơn 10–20%', '65% / 35%'], ['Trong ±10%', '70% / 30%'], ['Thấp hơn 10–20%', '75% / 25%'], ['Thấp hơn hơn 20%', '80% / 20%']] },
      { t: 'widget', name: 'zm-alloc', title: 'Gợi ý phân bổ theo định giá' },
      { t: 'warn', x: 'Tác giả viết khi S&P 500 quanh 800 (giảm ~47,6% từ đỉnh 1527 tháng 3/2000) và cho rằng đây là thời điểm hiếm hoi tốt để mua cổ phiếu. Đó là nhận định lịch sử, không phải lời khuyên cho hôm nay; mô hình Fed cũng chỉ là công cụ thô, nhạy với lãi suất.' }
    ] }
  ],
  summary: ['Forward P/E và PEG đo giá có xứng tăng trưởng không; tránh forward P/E trên ~65.', 'Công ty có ước tính ổn định (bất định thấp) thường tốt hơn.', 'Mô hình Fed: giá trị hợp lý = EPS dự phóng ÷ lợi suất Kho bạc 10 năm.', 'Dùng để phân bổ cổ phiếu/trái phiếu, không canh thị trường chính xác.'],
  cards: [['Forward P/E?', 'Giá ÷ đồng thuận EPS năm tới'], ['PEG?', 'Forward P/E ÷ tăng trưởng dài hạn'], ['Tránh forward P/E trên?', 'Khoảng 65'], ['Earnings uncertainty?', 'Mức bất đồng của các ước tính'], ['Mô hình Fed?', 'S&P fair value = EPS dự phóng ÷ lợi suất 10 năm'], ['Phân bổ khi thị trường rẻ >20%?', '80% cổ phiếu / 20% trái phiếu'], ['Data mining?', 'Tìm quan hệ lịch sử không chắc tiếp diễn'], ['Chiến lược Dow phụ lục IV?', '10 cổ phiếu Dow bất định thấp nhất, giữ 1 năm']],
  quiz: [
    { q: 'Giá 40, EPS dự phóng 2, tăng trưởng dài hạn 20%. PEG:', o: ['0,5', '1', '2', '10'], a: 1, e: '(40/2)/20.' },
    { q: 'EPS dự phóng S&P = 40; lợi suất 10 năm 5%. Giá trị hợp lý:', o: ['200', '500', '800', '2.000'], a: 2, e: '40/0,05.' },
    { q: 'Chỉ số 1.000 vs hợp lý 800 nghĩa là:', o: ['Rẻ 20%', 'Đắt 25%', 'Bình thường', 'Không tính được'], a: 1, e: '1000/800 − 1.' },
    { q: 'Công ty ước tính "rải khắp nơi" thường:', o: ['Nên tránh', 'Nên mua nhiều', 'Tốt nhất', 'Không ảnh hưởng'], a: 0, e: 'Bất định cao.' }
  ],
  match: [['PEG', 'P/E chia tăng trưởng'], ['Fed model', 'Giá trị hợp lý từ lợi suất 10 năm'], ['Uncertainty', 'Mức bất đồng ước tính'], ['Forward P/E', 'P/E theo lợi nhuận kỳ vọng'], ['Data mining', 'Quan hệ giả từ dữ liệu quá khứ']]
});
