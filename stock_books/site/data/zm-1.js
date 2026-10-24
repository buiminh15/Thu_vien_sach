window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.zam = BOOK_DATA.zam || { chapters: [] };
BOOK_DATA.zam.chapters.push({
  n: 1,
  title: 'Những chủ đề chính',
  intro: 'Mitch Zacks mở đầu bằng một nghịch lý: lời khuyên mua/bán của các nhà phân tích Phố Wall gần như vô dụng, nhưng dữ liệu họ tạo ra lại rất có giá trị nếu biết đọc. Điểm mấu chốt của cả cuốn sách là theo dõi sự thay đổi của ước tính lợi nhuận đồng thuận theo thời gian.',
  sections: [
    { icon: '⚠️', title: 'Khủng hoảng niềm tin và nghịch lý của nhà phân tích', blocks: [
      { t: 'p', x: 'Tác giả viết sau các bê bối đầu những năm 2000: nhà đầu tư không còn tin môi giới, CEO hay nhà phân tích. Theo dữ liệu ông dẫn, nếu mua các cổ phiếu được nhà phân tích khuyến nghị nhiều nhất thì sau 2,5 năm lỗ khoảng 47%, còn nhóm ít được khuyến nghị nhất chỉ lỗ khoảng 11%.' },
      { t: 'key', x: 'Nhưng điều đó không có nghĩa nghiên cứu của nhà phân tích vô dụng. Phần có giá trị là <b>dữ liệu họ tạo ra</b> (nhất là ước tính lợi nhuận); phần gây hại là <b>khuyến nghị mua/giữ/bán</b> thiên lệch. Cuốn sách dạy lọc nhiễu và tập trung vào phần có ích.' },
      { t: 'warn', x: 'Các con số hiệu suất trong sách (ví dụ Zacks Rank hạng #1 sinh lời trung bình 31,8%/năm giai đoạn 1980–2002 so với S&P 500 12,6%) là kết quả do chính công ty của tác giả công bố, chưa tính phí giao dịch và chỉ phản ánh quá khứ. Hãy xem đó là tuyên bố của tác giả, không phải bảo đảm.' }
    ] },
    { icon: '🧭', title: 'Hai nguyên tắc nền tảng', blocks: [
      { t: 'list', items: ['Ước tính hay khuyến nghị của <b>một</b> nhà phân tích gần như vô nghĩa. Cái cần xem là <b>tất cả nhà phân tích nói gì</b> (đồng thuận) và <b>quan điểm đó thay đổi thế nào theo thời gian</b>.', 'Điều đáng theo dõi nhất là <b>điều chỉnh (revision) ước tính lợi nhuận</b>, không phải lời khuyên mua/bán.'] },
      { t: 'p', x: 'Ví dụ trên báo cáo Zacks cho cổ phiếu Sears: 8 nhà phân tích có ước tính cho quý tới, dao động từ 1,97 USD đến 2,12 USD, đồng thuận 2,06 USD. Mục "xu hướng ước tính" cho thấy đồng thuận cả năm nay và năm sau đều <b>giảm</b> trong 30 ngày qua — dấu hiệu tiêu cực vì các nhà phân tích khác nhiều khả năng sẽ hạ tiếp, và thị trường cần thời gian phản ứng.' },
      { t: 'widget', name: 'zm-consensus', title: 'Đồng thuận ước tính lợi nhuận và xu hướng điều chỉnh' }
    ] },
    { icon: '📊', title: 'Bằng chứng: năm danh mục theo mức điều chỉnh', blocks: [
      { t: 'p', x: 'Mỗi tháng chia khoảng 3.300 cổ phiếu lớn (vốn hóa trên 100 triệu USD, có ít nhất một nhà phân tích) thành 5 nhóm bằng nhau theo mức thay đổi của đồng thuận trong tháng qua. Nhóm "ước tính bị cắt mạnh" (giảm hơn ~3%) và nhóm "được nâng mạnh" (tăng hơn ~1%) chênh lệch lớn:' },
      { t: 'table', head: ['Nhóm (Oct 1987 – Sep 2002)', 'Lợi suất bình quân năm (chưa trừ phí)'], rows: [['1. Ước tính bị cắt mạnh', '−4,2%'], ['2', '4,7%'], ['3', '9,0%'], ['4', '14,0%'], ['5. Ước tính được nâng mạnh', '20,1%'], ['S&P 500', '9,0%']] },
      { t: 'widget', name: 'zm-quintile', title: 'Quy đổi: 10.000 USD đầu tư vào từng nhóm sau N năm' },
      { t: 'tip', x: 'Cơ sở dữ liệu đã loại bỏ thiên lệch người sống sót và thiên lệch nhìn trước: cổ phiếu sau này phá sản hay bị mua lại vẫn nằm trong mẫu. Nhưng vòng quay danh mục rất cao nên phí giao dịch có thể "ăn" hết lợi nhuận.' },
      { t: 'key', x: 'Hành động rút ra: mua cổ phiếu có ước tính đang được nâng và điểm khuyến nghị đồng thuận cải thiện; bán cổ phiếu có ước tính bị hạ và điểm khuyến nghị xấu đi.' }
    ] }
  ],
  summary: ['Khuyến nghị của nhà phân tích thiên lệch, nên bỏ qua phần lớn.', 'Phải gộp nhiều nhà phân tích và xem thay đổi theo thời gian.', 'Điều chỉnh ước tính lợi nhuận là tín hiệu mạnh nhất.', 'Dữ liệu của tác giả cho thấy chênh lệch lớn giữa nhóm bị hạ và nhóm được nâng ước tính, chưa tính phí giao dịch.'],
  cards: [['Consensus estimate?', 'Ước tính lợi nhuận trung bình của các nhà phân tích'], ['Estimate revision?', 'Điều chỉnh ước tính lợi nhuận'], ['Tín hiệu mạnh nhất theo tác giả?', 'Thay đổi đồng thuận ước tính lợi nhuận'], ['Vì sao một nhà phân tích đơn lẻ kém giá trị?', 'Thiên lệch và không phản ánh toàn cảnh'], ['Nên làm gì với ước tính được nâng?', 'Mua (theo logic của sách)'], ['Nhóm ước tính bị cắt mạnh lợi suất?', '−4,2%/năm (trong mẫu)'], ['Nhóm được nâng mạnh?', '+20,1%/năm (trong mẫu)'], ['Survivorship bias?', 'Chỉ nhìn công ty sống sót'], ['Look-ahead bias?', 'Dùng thông tin chưa có lúc ra quyết định']],
  quiz: [
    { q: 'Điều quan trọng nhất cần theo dõi theo sách:', o: ['Khuyến nghị mua/bán', 'Giá mục tiêu', 'Điều chỉnh ước tính lợi nhuận', 'Tin đồn'], a: 2, e: 'Revision.' },
    { q: 'Đồng thuận của 3 ước tính 1,90; 2,00; 2,20 là:', o: ['1,95', '2,03', '2,10', '2,20'], a: 1, e: '(1,90+2,00+2,20)/3 ≈ 2,03.' },
    { q: 'Đồng thuận giảm trong 30 ngày thường cho thấy:', o: ['Cổ phiếu nên mua', 'Tín hiệu tiêu cực', 'Không có ý nghĩa', 'Sắp chia cổ tức'], a: 1, e: 'Các nhà phân tích khác có thể hạ tiếp.' },
    { q: 'Rủi ro thực hành chiến lược này:', o: ['Phí giao dịch do vòng quay cao', 'Không có dữ liệu', 'Không có cổ phiếu', 'Thuế bằng 0'], a: 0, e: 'Tác giả cảnh báo phí.' }
  ],
  match: [['Consensus', 'Trung bình các ước tính'], ['Revision', 'Điều chỉnh ước tính'], ['Survivorship bias', 'Thiên lệch người sống sót'], ['Quintile', 'Chia thành 5 nhóm'], ['Reg FD', 'Quy tắc công bố công bằng']]
});
