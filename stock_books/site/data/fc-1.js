window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 1,
  title: 'Doanh nghiệp và nhà quản lý tài chính',
  intro: 'Chương mở đầu trả lời ba câu hỏi: doanh nghiệp được tổ chức dưới hình thức nào, nhà quản lý tài chính phải quyết định những gì, và mục tiêu cuối cùng của công ty là gì. Mọi chương sau đều xoay quanh hai quyết định lớn: đầu tư vào đâu và huy động tiền từ đâu.',
  sections: [
    { icon: '🏢', title: 'Các hình thức tổ chức kinh doanh', blocks: [
      { t: 'table', head: ['Hình thức', 'Ưu điểm', 'Nhược điểm'], rows: [
        ['Doanh nghiệp tư nhân (sole proprietorship)', 'Lập dễ, ít thủ tục, một chủ', 'Chủ chịu trách nhiệm vô hạn; khó huy động vốn; đời doanh nghiệp gắn với chủ'],
        ['Công ty hợp danh (partnership)', 'Nhiều người góp vốn và kỹ năng', 'Thành viên liên đới vô hạn; rủi ro bất đồng; khó chuyển nhượng phần vốn'],
        ['Công ty cổ phần (corporation)', 'Trách nhiệm hữu hạn; tách quyền sở hữu và quản lý; cổ phiếu chuyển nhượng được; sống độc lập với cổ đông', 'Bị đánh thuế hai lần (lợi nhuận công ty, rồi cổ tức cá nhân); thủ tục phức tạp']
      ] },
      { t: 'key', x: 'Công ty cổ phần là một <b>pháp nhân riêng biệt</b>. Cổ đông chỉ mất tối đa số tiền đã bỏ ra (trách nhiệm hữu hạn) và cổ đông có thể thay đổi mà công ty vẫn hoạt động. Vì vậy các công ty lớn gần như đều chọn hình thức này.' },
      { t: 'p', x: 'Hiện còn có các hình thức lai như công ty trách nhiệm hữu hạn (LLC) hay hợp danh hữu hạn, kết hợp trách nhiệm hữu hạn với cách tính thuế "chuyển tiếp" của hợp danh.' }
    ] },
    { icon: '🧭', title: 'Hai quyết định lớn của nhà quản lý tài chính', blocks: [
      { t: 'steps', items: ['<b>Quyết định đầu tư (lập ngân sách vốn – capital budgeting):</b> đầu tư bao nhiêu và vào tài sản nào (nhà máy, máy móc, công nghệ, hàng tồn kho...).', '<b>Quyết định tài trợ (financing):</b> huy động tiền bằng cách nào — giữ lại lợi nhuận, vay nợ hay phát hành cổ phiếu, và cơ cấu nào là hợp lý.', 'Nhà quản lý tài chính đứng giữa doanh nghiệp và <b>thị trường tài chính</b>: phát hành chứng khoán, trả lãi và cổ tức cho nhà đầu tư.'] },
      { t: 'widget', name: 'fc-balance-split', title: 'Hai phía của bảng cân đối: đầu tư (tài sản) và tài trợ (nguồn vốn)' },
      { t: 'p', x: 'Tổ chức tài chính (ngân hàng, công ty bảo hiểm, quỹ) gom tiền nhỏ lẻ của hộ gia đình rồi cho doanh nghiệp vay. Thị trường tài chính gồm thị trường sơ cấp (bán chứng khoán mới) và thứ cấp (mua bán lại giữa nhà đầu tư). Thị trường còn cung cấp thanh khoản, thông tin và khả năng chia sẻ rủi ro.' },
      { t: 'table', head: ['Chức danh', 'Nhiệm vụ'], rows: [['Giám đốc tài chính (CFO)', 'Điều hành toàn bộ chức năng tài chính, báo cáo cho CEO'], ['Thủ quỹ (treasurer)', 'Huy động và quản lý nguồn vốn, tiền mặt, quan hệ ngân hàng/nhà đầu tư'], ['Kế toán trưởng (controller)', 'Lập báo cáo tài chính, kiểm soát, thuế, bảo đảm tiền được dùng đúng']] }
    ] },
    { icon: '🎯', title: 'Mục tiêu của công ty và vấn đề đại diện', blocks: [
      { t: 'key', x: '<b>Mục tiêu:</b> tối đa hóa giá trị thị trường của cổ phần hiện tại. Cổ đông có nhiều mục tiêu cá nhân khác nhau (tiêu dùng sớm hay muộn, mức chịu rủi ro...), nhưng ai cũng muốn <i>giàu hơn</i>; giá trị lớn hơn cho phép họ tự chọn cách tiêu dùng. Tối đa hóa giá trị không có nghĩa là bất chấp đạo đức: danh tiếng là tài sản quý.' },
      { t: 'p', x: 'Khi người quản lý không phải là chủ, nảy sinh <b>vấn đề đại diện (agency problem)</b>: lợi ích của giám đốc có thể lệch với cổ đông (hưởng đặc quyền, tránh rủi ro, xây "đế chế"). Cách kiềm chế:' },
      { t: 'list', items: ['Thù lao gắn với kết quả công ty (cổ phiếu, quyền chọn cổ phiếu).', 'Giám sát của hội đồng quản trị, chủ nợ, nhà phân tích và cổ đông lớn.', 'Nguy cơ bị thâu tóm: công ty quản lý kém có giá cổ phiếu thấp nên dễ bị mua lại và thay ban điều hành.'] },
      { t: 'widget', name: 'fc-agency', title: 'Quyết định này có phục vụ cổ đông không? Kiểm tra vấn đề đại diện' },
      { t: 'tip', x: 'Hãy nhớ: mục tiêu là <b>giá trị thị trường</b>, không phải lợi nhuận kế toán ngắn hạn. Một quyết định làm tăng lợi nhuận quý này nhưng giảm giá trị dài hạn vẫn là quyết định sai.' }
    ] }
  ],
  summary: ['Công ty cổ phần có trách nhiệm hữu hạn và tách sở hữu khỏi quản lý, đổi lại bị đánh thuế hai lần.', 'Hai quyết định cốt lõi: đầu tư và tài trợ.', 'Nhà quản lý tài chính là cầu nối giữa công ty và thị trường tài chính.', 'Mục tiêu: tối đa hóa giá trị thị trường cổ phần, trong khuôn khổ đạo đức.', 'Vấn đề đại diện được kiềm chế bằng thù lao, giám sát và nguy cơ bị thâu tóm.'],
  cards: [['Capital budgeting là gì?', 'Quyết định đầu tư vào tài sản dài hạn'], ['Financing decision là gì?', 'Quyết định huy động vốn: nợ, cổ phiếu, lợi nhuận giữ lại'], ['Ưu điểm lớn nhất của công ty cổ phần?', 'Trách nhiệm hữu hạn'], ['Nhược điểm thuế?', 'Đánh thuế hai lần'], ['Treasurer khác controller?', 'Treasurer huy động vốn; controller kiểm soát, kế toán'], ['Agency problem?', 'Lợi ích người quản lý lệch với cổ đông'], ['Mục tiêu của công ty?', 'Tối đa hóa giá trị thị trường cổ phần'], ['Thị trường sơ cấp?', 'Nơi bán chứng khoán mới phát hành'], ['Thị trường thứ cấp?', 'Nơi mua bán lại chứng khoán đã phát hành']],
  quiz: [
    { q: 'Hình thức nào cho trách nhiệm hữu hạn và tách quản lý khỏi sở hữu?', o: ['Doanh nghiệp tư nhân', 'Hợp danh thông thường', 'Công ty cổ phần', 'Không hình thức nào'], a: 2, e: 'Corporation.' },
    { q: 'Quyết định "nên xây nhà máy mới hay không" thuộc loại:', o: ['Tài trợ', 'Đầu tư (ngân sách vốn)', 'Cổ tức', 'Thuế'], a: 1, e: 'Chọn tài sản đầu tư.' },
    { q: 'Cách nào KHÔNG giúp kiềm chế vấn đề đại diện?', o: ['Thù lao gắn với cổ phiếu', 'Giám sát của hội đồng quản trị', 'Nguy cơ bị thâu tóm', 'Cho giám đốc toàn quyền không báo cáo'], a: 3, e: 'Thiếu giám sát làm nặng thêm vấn đề.' },
    { q: 'Mục tiêu đúng của công ty theo sách:', o: ['Tối đa lợi nhuận quý này', 'Tối đa doanh thu', 'Tối đa giá trị thị trường cổ phần', 'Tối thiểu thuế'], a: 2, e: 'Giá trị cho cổ đông.' },
    { q: 'Ai chủ yếu lo huy động vốn?', o: ['Controller', 'Treasurer', 'Kiểm toán', 'Thanh tra thuế'], a: 1, e: 'Thủ quỹ.' }
  ],
  match: [['Sole proprietorship', 'Một chủ, trách nhiệm vô hạn'], ['Corporation', 'Pháp nhân riêng, trách nhiệm hữu hạn'], ['Treasurer', 'Huy động vốn'], ['Controller', 'Kiểm soát và kế toán'], ['Agency problem', 'Xung đột quản lý – cổ đông']]
});
