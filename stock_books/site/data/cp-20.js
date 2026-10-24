window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 20,
  title: 'Đợt hồi phục vĩ đại',
  intro: 'Tin đồn Fed mua trái phiếu doanh nghiệp tạo ra đợt hồi mạnh nhất lịch sử trái phiếu doanh nghiệp, kéo Dow tăng hơn 1.400 điểm. Nhưng chỉ vài ngày sau trái phiếu chính phủ bị bán tháo, "chênh lệch chất lượng" thu hẹp theo hướng sai, và Tổng thống phải rút lại kế hoạch. Linda từ chối quay lại thị trường và xây một danh mục quyền chọn bán nhỏ.',
  sections: [
    { icon: '🚀', title: 'Đợt hồi phục mạnh nhất lịch sử', blocks: [
      { t: 'p', x: 'Việc cắt lãi suất cho vay ưu đãi chỉ là trò đùa (ngân hàng hết tiền cho vay), kiểm soát ngoại hối bị bỏ ngỏ. Nhưng tin đồn Fed New York mua trái phiếu của công ty có "kế toán sạch" và sẽ mở rộng sang trái phiếu rác đã gây ra đợt hồi mạnh nhất lịch sử trái phiếu doanh nghiệp.' },
      { t: 'list', items: ['Dow tăng hơn 500 điểm trong một ngày và hơn 1.400 điểm trong 5 phiên.', 'Nhiều cổ phiếu tăng gần 50% trong vài phiên.', 'Một trái phiếu rác từ 62 lên 79 trong vài giờ; trái phiếu tiện ích, trái phiếu đô thị, thậm chí trái phiếu nước đang phát triển đều bay lên.'] },
      { t: 'warn', x: 'Chỉ vài ngày sau, giao dịch trái phiếu doanh nghiệp ngừng: môi giới đưa "giá chỉ dẫn" rất cao nhưng thực tế không có người mua. Đây là dấu hiệu đầu tiên của rắc rối: một mức giá không có giao dịch chỉ là hư danh.' }
    ] },
    { icon: '💣', title: 'Cú sốc ở thị trường trái phiếu chính phủ', blocks: [
      { t: 'p', x: 'Ban đầu giá trái phiếu chính phủ đứng yên khi nhà đầu tư giải mã tin đồn. Khi họ hiểu chính phủ đang dùng tiền của chính họ để mua trái phiếu doanh nghiệp, họ bán tháo: công ty bảo hiểm nhân thọ rút ngắn kỳ hạn, phòng ủy thác ngân hàng bán, đại lý bán hàng tồn hoặc phòng ngừa bằng hợp đồng tương lai, quỹ tương hỗ, quỹ phòng hộ, quỹ hưu trí, và nhà đầu tư nước ngoài bán mạnh nhất. Như đầu năm 1980, "không có người mua", đại lý không bán nổi vài lô nhỏ.' },
      { t: 'tip', x: 'Một bản tin tài chính rối rắm ("run-on sentence") hiển thị hôm đó khiến nhà đầu tư thường chẳng hiểu gì và bỏ qua — mô tả cách thông tin quan trọng đôi khi bị chôn trong ngôn ngữ chuyên môn.' }
    ] },
    { icon: '📉', title: 'Chênh lệch chất lượng (quality spread)', blocks: [
      { t: 'p', x: 'Bộ trưởng Tài chính giải thích cho Tổng thống: <b>chênh lệch chất lượng</b> là chênh lệch lợi suất giữa trái phiếu doanh nghiệp và trái phiếu Kho bạc. Thường doanh nghiệp lớn trả cao hơn khoảng 1 điểm phần trăm. Vài tháng trước, khi lo phá sản bùng lên, lợi suất trái phiếu doanh nghiệp hạng trung tăng 2,25 điểm, trái phiếu chính phủ chỉ tăng 0,25, nên chênh lệch nới thêm 2 điểm — đèn đỏ về niềm tin.' },
      { t: 'key', x: 'Sau gói cứu trợ: lợi suất trái phiếu doanh nghiệp giảm mạnh còn lợi suất trái phiếu chính phủ lại tăng mạnh. Chênh lệch gần như biến mất — <b>không phải vì doanh nghiệp được kéo lên mà vì chính phủ bị kéo xuống</b>. Giá lên thì lợi suất xuống (và ngược lại), nhưng chênh lệch di chuyển cùng hướng có thể mang nhiều ý nghĩa khác nhau.' },
      { t: 'widget', name: 'cp-quality-spread', title: 'Chênh lệch lợi suất doanh nghiệp – Kho bạc: ba giai đoạn' },
      { t: 'steps', items: ['<b>Giai đoạn 1 – Khủng hoảng trái phiếu doanh nghiệp:</b> nhà đầu tư mất niềm tin vào khả năng trả nợ, giá trái phiếu doanh nghiệp giảm (lợi suất tăng), chênh lệch mở rộng; trái phiếu chính phủ ít bị ảnh hưởng.', '<b>Giai đoạn 2 – Chính phủ cứu trái phiếu doanh nghiệp:</b> dùng tiền vay từ nhà đầu tư trái phiếu chính phủ để mua; giá trái phiếu doanh nghiệp tăng nhưng giá trái phiếu chính phủ giảm; chênh lệch thu hẹp.', '<b>Giai đoạn 3 – Từ bỏ cứu trợ:</b> để tránh sụp trái phiếu chính phủ, chính phủ rút lui và chấp nhận trái phiếu doanh nghiệp sập; nếu thay trái phiếu bằng cổ phiếu thì diễn biến tương tự.'] }
    ] },
    { icon: '🖨️', title: 'Tạo tiền được, tạo tín dụng thì không', blocks: [
      { t: 'p', x: 'Tổng thống hỏi vì sao thị trường vẫn không tin. Bộ trưởng trả lời: <b>chính phủ có thể tạo ra tiền mặt, nhưng không thể tạo ra tín dụng/niềm tin.</b> Tạo tiền chỉ cần in hoặc bơm điện tử, ai cũng nhận; còn tín dụng đòi hỏi nhà đầu tư và ngân hàng chịu cho vay — điều rất khó khi niềm tin giảm. Nếu dễ thế đã cứu được Bethlehem Steel, Enron, Kmart, Global Crossing, WorldCom.' },
      { t: 'p', x: 'Từ góc nhìn nhà đầu tư nước ngoài giữ trái phiếu Mỹ: "Tôi cho bạn vay để vận hành chính phủ; nay bạn đem tiền đó cho một công ty tư nhân. Nếu tôi muốn cho công ty vay thì tôi đã làm từ đầu. Tôi tin bạn, không tin công ty; giờ bạn cũng là một trong số họ." Họ ngừng mua hoặc bán, chính phủ không bán được trái phiếu mới để trả trái phiếu cũ đến hạn và vỡ nợ.' },
      { t: 'key', x: 'Luật cho Fed <i>quyền trên giấy</i> mua chứng khoán tư nhân, nhưng không cho họ <i>năng lực thực</i> tạo ra của cải kinh tế.' },
      { t: 'p', x: 'Nửa đêm Tổng thống ra lệnh cho Fed: xả hết số trái phiếu doanh nghiệp đã mua, cam kết chính phủ sẽ không mua chứng khoán tư nhân, và luôn phân biệt rõ trái phiếu doanh nghiệp với trái phiếu chính phủ. Bộ trưởng nhắc: thực tế Fed chưa mua; mới chỉ rò rỉ ý định.' },
      { t: 'widget', name: 'cp-cash-credit', title: 'Tạo tiền vs tạo tín dụng: bơm 100 tỷ USD vào hệ thống thì lan ra thế nào?' }
    ] },
    { icon: '🧯', title: '"Rủi ro, rủi ro và rủi ro chết tiệt"', blocks: [
      { t: 'p', x: 'Các anh trai của Linda, bị "thổi sáo" bởi Phố Wall ("đây là đáy thật, đại hạ giá thế kỷ"), đòi bỏ tín phiếu và quỹ đảo ngược để nhảy vào cổ phiếu y tế, công nghệ sinh học có hàng chục khuyến nghị mua. Linda kiên quyết: vẫn còn rủi ro công ty và kiểm toán nói dối, rủi ro Phố Wall thổi phồng, rủi ro nợ và phái sinh, cùng suy thoái, lợi nhuận giảm và hoảng loạn.' },
      { t: 'list', items: ['Những nhà phân tích này từng trao khuyến nghị mua cho Priceline.com, Global Crossing, WorldCom, Lucent cho tới khi phá sản; "không có gì thay đổi".', 'Cơ hội họ nói thật về triển vọng kinh tế là "một phần nghìn, một phần triệu", vì dự báo trung thực vẫn có hại cho kinh doanh.', 'Khi nào chạm đáy? "Khi họ cuối cùng ném khăn và ngừng đi tìm đáy."'] },
      { t: 'h3', x: 'Linda xây danh mục quyền chọn bán' },
      { t: 'steps', items: ['Nhờ quy trình thoát, cô đã thoát quỹ đảo ngược trước khi đợt hồi xóa lãi.', 'Sau đợt hồi, quyền chọn bán rẻ hơn nhiều: cô mua 4 hợp đồng put IBM còn hai tháng với giá 1,25 USD/cp, vài put dài hạn (LEAPS) trên chỉ số lớn.', 'Danh mục đa dạng: put dài hạn và ngắn hạn, trên cổ phiếu và trên chỉ số, vài put rất rẻ ngoài tiền và vài put gần tiền.', 'Chỉ dùng số tiền chấp nhận mất; phần lớn tài sản nằm ở quỹ tiền tệ chỉ đầu tư Kho bạc và vài trái phiếu Kho bạc dài hạn (trái với khuyên của Dulles) vì cô thấy giảm phát đang xấu đi, lạm phát cao có vẻ khó xảy ra.'] },
      { t: 'widget', name: 'cp-put-portfolio', title: 'Danh mục 95/5: bao nhiêu an toàn, bao nhiêu quyền chọn, bao nhiêu quỹ đảo ngược?' },
      { t: 'tip', x: 'Lời ông ngoại: "Đầu tư như ra trận — tiền quý giá như viên đạn thật cuối cùng, đừng bắn cho tới khi thấy tròng trắng mắt kẻ thù." Trước lúc mất ông thì thầm: huyền thoại gia đình là sai — ông chưa từng là thiên tài mà từng mất rất nhiều tiền vào những khoản đầu tư dại dột.' },
      { t: 'warn', x: 'Việc Linda giữ trái phiếu Kho bạc dài hạn đi ngược cảnh báo trước đó của tác giả về rủi ro kỳ hạn; hãy xem đó như một lựa chọn cá nhân trong truyện, không phải lời khuyên.' }
    ] }
  ],
  summary: ['Tin đồn mua trái phiếu doanh nghiệp tạo đợt hồi lịch sử, nhưng giá "chỉ dẫn" chỉ là hư danh khi không có giao dịch.', 'Nhà đầu tư trái phiếu chính phủ bán tháo vì thấy tiền của mình bị dùng cứu doanh nghiệp.', 'Chênh lệch chất lượng thu hẹp theo hướng sai: chính phủ bị kéo xuống ngang doanh nghiệp.', 'Chính phủ tạo được tiền, không tạo được tín dụng hay niềm tin.', 'Linda không quay lại cổ phiếu; cô xây danh mục quyền chọn bán nhỏ và giữ phần lớn tiền an toàn.'],
  cards: [['Chênh lệch chất lượng là gì?', 'Chênh lệch lợi suất doanh nghiệp so với Kho bạc'], ['Chênh lệch bình thường?', 'Khoảng 1 điểm phần trăm'], ['Chênh lệch tăng 2 điểm báo hiệu?', 'Mất niềm tin vào mọi công ty'], ['Chính phủ tạo được gì, không tạo được gì?', 'Tiền mặt; không phải tín dụng/niềm tin'], ['Vì sao nhà đầu tư ngoại bán trái phiếu Mỹ?', 'Tiền của họ bị dùng cứu doanh nghiệp tư'], ['Dow tăng sau tin đồn?', 'Hơn 1.400 điểm trong 5 phiên'], ['LEAPS là gì?', 'Quyền chọn dài hạn'], ['Cảnh báo của ông ngoại?', 'Đừng bắn cho đến khi thấy tròng trắng mắt'], ['Quy tắc 95/5?', 'Tối đa 5% vào quyền chọn']],
  quiz: [
    { q: 'Trái phiếu doanh nghiệp +, trái phiếu chính phủ −, chênh lệch sẽ:', o: ['Nới rộng', 'Thu hẹp', 'Không đổi', 'Âm vô hạn'], a: 1, e: 'Chính phủ bị kéo xuống.' },
    { q: 'Chính phủ KHÔNG thể:', o: ['In tiền', 'Bơm tiền điện tử', 'Tạo ra tín dụng/niềm tin một cách cưỡng ép', 'Mua trái phiếu'], a: 2, e: 'Cần nhà đầu tư tự nguyện.' },
    { q: 'Lợi suất doanh nghiệp tăng 2,25, chính phủ tăng 0,25. Chênh lệch tăng:', o: ['0,25', '1', '2', '2,5'], a: 2, e: '2,25 − 0,25.' },
    { q: 'Dấu hiệu rắc rối đầu tiên sau đợt hồi:', o: ['Dow giảm', 'Không có người mua ở "giá chỉ dẫn"', 'Lãi suất tăng', 'Thất nghiệp giảm'], a: 1, e: 'Giá hư danh.' },
    { q: 'Linda đã làm gì đúng quy trình trước đợt hồi?', o: ['Mua thêm cổ phiếu', 'Thoát quỹ đảo ngược theo tín hiệu', 'Bán tín phiếu', 'Vay tiền'], a: 1, e: 'Theo quy trình thoát.' }
  ],
  match: [['Quality spread', 'Chênh lệch doanh nghiệp – Kho bạc'], ['LEAPS', 'Quyền chọn dài hạn'], ['Giá chỉ dẫn', 'Giá không có giao dịch'], ['Tạo tiền', 'Chính phủ làm được'], ['Tạo tín dụng', 'Cần niềm tin thị trường']]
});
