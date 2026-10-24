window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 25,
  title: 'Phục hồi thực sự',
  intro: 'Hoảng loạn dừng lại nhưng nỗi sợ còn đó. Tại Camp David, họ tìm "tiền mặt ở đâu" trong bảng dữ liệu công ty niêm yết và các công ty bảo hiểm, ngân hàng mạnh. Lãi suất thực cao kỷ lục, chính phủ chỉ còn vai trò trọng tài. Thị trường mở lại, khoảng trống giá xuất hiện, và sau nhiều năm phục hồi diễn ra, với những sai lầm tệ nhất được tránh.',
  sections: [
    { icon: '😶', title: 'Sự yên tĩnh kỳ lạ nhưng nỗi sợ còn nguyên', blocks: [
      { t: 'p', x: 'Bán tháo dừng lại, thế giới yên tĩnh lạ lùng, nhưng lòng người còn sợ: một quan chức tuyệt vọng bật máy in tiền? Khủng bố liều chết? Các nhà sản xuất lo kỳ nghỉ thành vĩnh viễn trong khi đối thủ nước ngoài vẫn bán phá giá vào Mỹ. Nhà phân tích chính trị lo các nền độc tài quân sự, quốc gia lưu manh dùng vũ khí sinh học, chiến tranh sắc tộc, tôn giáo phá hoại phục hồi. May mắn những điều đó không xảy ra ở quy mô đáng kể.' }
    ] },
    { icon: '💼', title: '"Tiền mặt ở đâu?"', blocks: [
      { t: 'p', x: 'Tại Camp David, trợ lý Fed mang bảng dữ liệu các công ty niêm yết thanh khoản nhất: tiền mặt, nợ ngắn hạn và tỷ lệ thanh khoản nhanh (tiền mặt trên mỗi đô la nợ hiện hành). Dulles không hào hứng: "Khi tỷ lệ tốt thì quy mô nhỏ, khi quy mô lớn thì tỷ lệ không tốt. Khác xa thời J.P. Morgan, khi mọi dự trữ cần sau hoảng loạn có thể viết lên một tờ khăn ăn." Nhưng có còn hơn không.' },
      { t: 'widget', name: 'cp-quick-ratio', title: 'Tỷ lệ thanh khoản nhanh: tiền mặt trên mỗi đô la nợ hiện hành' },
      { t: 'key', x: 'Sai sót: bảng chỉ có công ty niêm yết, bỏ quên nhiều công ty bảo hiểm, ngân hàng, môi giới không niêm yết nhưng nhiều vốn và tài sản thanh khoản. Đứng đầu là các hãng bảo hiểm nhân thọ/sức khỏe: Teachers Insurance & Annuity (hơn 132 tỷ USD tài sản), Northwestern Mutual (hơn 105 tỷ), New York Life (79 tỷ), Mass Mutual (71 tỷ), Pacific Life (53 tỷ), State Farm Life (30 tỷ)... đều xếp hạng an toàn A hoặc cao hơn theo Weiss (dữ liệu quý 2/2002).' },
      { t: 'p', x: 'Vấn đề: thuyết phục họ dùng nguồn lực để nâng cổ phiếu hay trái phiếu doanh nghiệp. Hiệp hội Bảo hiểm Nhân thọ Mỹ (ACLI) viết thư cho Tổng thống nêu điều kiện: dọn dẹp xong đã. Cuối thời bùng nổ có khoảng 25 nghìn tỷ USD nợ có lãi ở Mỹ (hơn 50 nghìn tỷ nếu thêm Tây Âu và Nhật; gần 100 nghìn tỷ nếu tính cả phái sinh và cam kết), nhiều khoản đã xấu nhưng mới thanh lý khoảng một phần tư. Cho đến khi thanh lý nợ xấu tiến triển rõ hơn, các hãng bảo hiểm sẽ không tái đầu tư vào tổ chức đang mang nợ xấu, chỉ ở mức tượng trưng.' },
      { t: 'widget', name: 'cp-bad-debt', title: 'Nợ xấu đã thanh lý bao nhiêu? Tính phần còn lại' },
      { t: 'warn', x: 'Danh sách ngân hàng/hãng bảo hiểm "mạnh nhất" và xếp hạng Weiss trong sách là dữ liệu 2002. Nhiều tên đã đổi, sáp nhập hoặc đánh giá đã khác. Chỉ hãy dùng để hiểu cách tiếp cận: nhìn vốn, thu nhập, thanh khoản thay vì tên tuổi.' }
    ] },
    { icon: '🏗️', title: 'Vai trò thực sự của chính phủ', blocks: [
      { t: 'p', x: 'Một quan chức hỏi: lẽ nào Tổng thống nắm quyền độc tài khẩn cấp, tiếp quản doanh nghiệp tư nhân? Tổng thống đáp: "Chính phủ không thể tuyên bố tình trạng khẩn cấp vì đã đang ở trong đó. Việc chính phủ làm được chỉ là bảo đảm pháp luật và trật tự, đặt khung công bằng, cung cấp thông tin để ráp lại các mảnh." Doanh thu thuế sụt mạnh, chương trình chính phủ chỉ còn vỏ; khả năng cắt thuế, chi tiêu, thắt hay nới tiền tệ chỉ còn là cái bóng.' },
      { t: 'h3', x: 'Lãi suất thực cao kỷ lục' },
      { t: 'p', x: 'Giá hàng tiêu dùng giảm (lạm phát âm) trong khi lãi suất danh nghĩa vẫn cao, nên <b>lãi suất thực (lãi suất trừ lạm phát)</b> lên mức cao nhất lịch sử Mỹ. Tổng thống triết lý: lãi suất không chỉ là giá của tiền mà còn là giá trị ta gán cho tín dụng, niềm tin và lòng tin. Thị trường đang đòi thêm niềm tin; giá tiêu dùng giảm cho thấy ta có năng lực sản xuất gần như vô hạn nhưng đã sản xuất sai thứ. Ép lãi suất xuống giả tạo chẳng khác "sủa vào sấm sét".' },
      { t: 'widget', name: 'cp-real-rate', title: 'Lãi suất thực = lãi suất danh nghĩa − lạm phát (có thể là giảm phát)' }
    ] },
    { icon: '🔓', title: 'Mở cửa lại và hồi phục', blocks: [
      { t: 'p', x: 'Thị trường mở cửa lại: không ồn ào, không khối lượng lớn, nhưng giá nhảy một khoảng lớn so với phiên cuối trước kỳ nghỉ — vẫn chưa quá muộn để mua, nhưng quá muộn để mua ở mức thấp nhất thế kỷ. Fed khẳng định mọi cố gắng hạ lãi suất thực giả tạo sẽ như "sủa vào sấm".' },
      { t: 'list', items: ['Đô la hồi phục mạnh dù không có can thiệp; việc thị trường vận hành trơn tru đã được nhà đầu tư nước ngoài hoan nghênh.', 'Dòng tiền tích trữ trong tiền mặt và tín phiếu bắt đầu quay lại cổ phiếu.', 'Nhiều nhà giàu bỏ hơn nửa tài sản để "cứu nước"; một thiểu số nhà đầu tư có lãi từ sụp đổ đổ lợi nhuận trở lại thị trường.', 'Đa số vẫn nghi ngờ: "Phục hồi thật hay lại rơi xuống?" Không ai biết.'] },
      { t: 'p', x: 'Theo thời gian kinh tế Mỹ và thế giới hồi phục; có xung đột, tai nạn và sai lầm, nhưng <b>những sai lầm chí tử nhất đã tránh được</b>. Lãnh đạo CECAR đổi người; những người cũ có sự nghiệp thành công ở chính phủ và tư nhân. Linda và Gabriel rời chính trị, tiếp tục giảng dạy, đầu tư vào danh mục đa dạng trong và ngoài nước kể cả các công ty khởi nghiệp.' },
      { t: 'tip', x: 'Đoạn kết: nhiều năm sau, các cháu xem danh mục của bà Dedini, ngạc nhiên vì sao bà tìm ra những tập đoàn lâm nghiệp tự duy trì ở bang Acre (Brazil), công ty phần mềm Nhật dạy lịch sử bằng công nghệ trò chơi, nhà xuất bản toàn cầu khởi đầu từ trung tâm giáo dục sớm, các công ty công nghệ sinh học biến y học bổ trợ thành ngành nghìn tỷ USD. Không ai biết; họ kết luận bà "chắc chắn là nhà thông thái và thiên tài đầu tư từ nhỏ" — giống huyền thoại về ông của bà mà chính ông từng thú nhận là không có thật.' }
    ] },
    { icon: '🧾', title: 'Bài học tổng kết cho bạn', blocks: [
      { t: 'steps', items: ['<b>Đừng tin tuyệt đối vào môi giới, xếp hạng và dự báo</b>; hãy xem xung đột lợi ích.', '<b>Bán những gì dễ tổn thương; đưa tiền về nơi an toàn</b> (thứ tự: bảo vệ trước, kiếm lời sau).', '<b>Kiểm tra môi giới, công ty môi giới, ngân hàng, bảo hiểm</b> bằng dữ liệu độc lập.', '<b>Giảm nợ, tiết kiệm, bảo vệ việc làm.</b>', '<b>Nếu muốn đầu cơ giảm giá</b>: giới hạn rủi ro (quỹ đảo ngược theo tín hiệu, quyền chọn bán chỉ bằng tiền chấp nhận mất, ≤ 5%).', '<b>Chờ dấu hiệu đáy</b> (cổ tức, giá/doanh thu, tâm lý), mua theo từng đợt, ưu tiên chất lượng.', '<b>Luôn giữ một phần tiền an toàn</b> cho đến khi phục hồi được xác nhận.'] },
      { t: 'widget', name: 'cp-crash-checklist', title: 'Danh sách kiểm tra ba giai đoạn: Phòng thủ – Kiếm lời – Tái đầu tư' },
      { t: 'warn', x: 'Nhắc lại: cuốn sách xuất bản 2003 mang quan điểm bi quan của tác giả. Thực tế 2003–2007 thị trường hồi mạnh trước khi chịu khủng hoảng 2008; kịch bản "Dow 1.000" không xảy ra. Đây là tài liệu để rèn tư duy quản trị rủi ro và hoài nghi lành mạnh, không phải lời khuyên đầu tư.' }
    ] }
  ],
  summary: ['Bán tháo dừng nhưng nỗi sợ còn; những kịch bản tồi tệ (độc tài, khủng bố, chiến tranh) không xảy ra đáng kể.', 'Nguồn tiền mặt thực sự nằm nhiều ở các hãng bảo hiểm và ngân hàng không niêm yết, nhưng họ đòi thanh lý nợ xấu trước.', 'Chính phủ chỉ còn vai trò đặt luật, giữ trật tự và cung cấp thông tin; lãi suất thực kỷ lục là tín hiệu thị trường đòi niềm tin.', 'Thị trường mở lại với khoảng trống giá; mua vẫn được nhưng không còn đáy thấp nhất.', 'Phục hồi cuối cùng đến sau nhiều sai lầm nhỏ, tránh được sai lầm chí tử.'],
  cards: [['Quick ratio?', 'Tiền mặt trên mỗi đô la nợ hiện hành'], ['Vì sao bảng Fed thiếu?', 'Chỉ có công ty niêm yết, bỏ qua bảo hiểm/ngân hàng không niêm yết'], ['Điều kiện của ACLI?', 'Thanh lý nợ xấu trước'], ['Lãi suất thực là gì?', 'Lãi suất danh nghĩa trừ lạm phát'], ['Vì sao lãi suất thực cực cao?', 'Giá giảm (lạm phát âm) mà lãi suất vẫn cao'], ['Vai trò còn lại của chính phủ?', 'Pháp luật, trật tự, khung công bằng, thông tin'], ['Fed nói về hạ lãi suất giả tạo?', '"Sủa vào sấm sét"'], ['Bài học cuối?', 'Giữ một phần tiền an toàn cho đến khi phục hồi được xác nhận']],
  quiz: [
    { q: 'Lạm phát −3%, lãi suất danh nghĩa 4%. Lãi suất thực:', o: ['1%', '4%', '7%', '−3%'], a: 2, e: '4 − (−3).' },
    { q: 'Tiền mặt 30, nợ hiện hành 60. Quick ratio:', o: ['0,3', '0,5', '2', '30'], a: 1, e: '30/60.' },
    { q: 'Nợ xấu đã thanh lý khoảng:', o: ['Gần như hết', 'Một phần tư', 'Một nửa', 'Không có'], a: 1, e: 'Theo thư ACLI.' },
    { q: 'Điều kiện của ACLI để tái đầu tư:', o: ['Thuế giảm', 'Thanh lý nợ xấu tiến triển', 'Lãi suất bằng 0', 'Cấm bán khống'], a: 1, e: 'Housecleaning.' },
    { q: 'Điều KHÔNG xảy ra khi mở cửa lại:', o: ['Khối lượng lớn, náo nhiệt', 'Giá nhảy một khoảng', 'Đô la hồi phục', 'Tiền hoãn cuộc mua quay lại'], a: 0, e: 'Không có fanfare.' }
  ],
  match: [['Quick ratio', 'Thanh khoản nhanh'], ['Real rate', 'Lãi suất danh nghĩa − lạm phát'], ['ACLI', 'Hiệp hội Bảo hiểm Nhân thọ Mỹ'], ['Housecleaning', 'Thanh lý nợ xấu'], ['Acre (Brazil)', 'Nơi công ty lâm nghiệp phát triển trong truyện']]
});
