window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.crashp = BOOK_DATA.crashp || { chapters: [] };
BOOK_DATA.crashp.chapters.push({
  n: 1,
  title: 'Chương trình ngầm của người môi giới',
  intro: 'Sách mở đầu bằng câu chuyện hư cấu về Linda, một giáo viên vật lý nghe lời môi giới và lỗ nặng. Qua đó tác giả chỉ ra xung đột lợi ích: người môi giới sống bằng việc giữ khách hàng, nên những lời khuyên "cứ nắm giữ" không phải lúc nào cũng vì lợi ích của bạn.',
  sections: [
    { icon: '👨‍🏫', title: 'Lời mở đầu của tác giả', blocks: [
      { t: 'p', x: 'Martin Weiss kể rằng cha ông là một nhà môi giới trẻ ở phố Wall năm 1929: ông tin thị trường đang quá nóng và nợ vay quá cao, nên khuyên cha mẹ giữ tiền ở nơi an toàn trước cuộc sụp đổ. Sau đó, nhờ một người cố vấn người Nhật, cha ông học cách bán khống để kiếm lời khi giá giảm và rồi mua lại cổ phiếu lớn ở đáy.' },
      { t: 'key', x: 'Thông điệp xuyên suốt: thị trường giảm sâu không phải tận thế. Có hai cơ hội — <b>bảo vệ/kiếm tiền trên đường đi xuống</b> và <b>kiếm thêm trên đường đi lên trở lại</b>.' },
      { t: 'warn', x: 'Sách viết cuối 2002–2003 và dùng hình thức tiểu thuyết (nhân vật và công ty hư cấu như UCBS, Harris & Jones...). Các "kịch bản xấu nhất" là cảnh báo của tác giả, không phải sự thật đã xảy ra; đừng coi là lời khuyên đầu tư cho bạn.' }
    ] },
    { icon: '📉', title: 'Câu chuyện của Linda và cổ phiếu UCBS', blocks: [
      { t: 'p', x: 'Linda có 160.000 USD từ việc bán căn nhà thứ hai. Người môi giới James Dubois giới thiệu cổ phiếu UCBS: giá giảm từ 64 USD xuống 40 USD, lãi dự kiến 2 USD/cổ phiếu nên P/E bằng 20 — "rẻ so với ngành đang ở mức 30–40". Chị mua 2.000 cổ phiếu (80.000 USD).' },
      { t: 'steps', items: ['Tin đồn: lợi nhuận thật chỉ khoảng 1 USD/cổ phiếu → với P/E 20 giá chỉ đáng 20 USD, cổ phiếu rớt gần một nửa.', 'Sau đó lộ ra các xếp hạng "mua mạnh" thực chất bị công ty chi tiền để mua → giá lại giảm một nửa, còn 10 USD.', '80.000 USD ban đầu chỉ còn khoảng 20.000 USD.'] },
      { t: 'widget', name: 'cp-pe', title: 'P/E và giá "đáng giá": nếu lợi nhuận bị thổi phồng thì sao?' }
    ] },
    { icon: '🎭', title: 'Bốn chiêu thức giữ chân khách hàng', blocks: [
      { t: 'p', x: 'Khi Linda muốn bán, ông Dubois dùng lần lượt các lập luận quen thuộc. Mục tiêu thật: giữ khách vì khách bán xong thường rời thị trường hoặc đóng tài khoản.' },
      { t: 'table', head: ['Chiêu', 'Lời nói', 'Sự thật'], rows: [
        ['Bình quân giá (dollar-cost averaging)', '"Mua thêm 2.000 cổ phiếu ở 10 USD, giá vốn trung bình còn 25 USD."', 'Chỉ giảm giá vốn trung bình; bạn dồn thêm tiền vào một cổ phiếu đang có vấn đề.'],
        ['"Lỗ trên giấy"', '"Chưa bán thì chưa lỗ thật; bán là chốt lỗ."', 'Lỗ trên giấy và lỗ đã thực hiện không khác nhau về bản chất; chính các công ty môi giới phải ghi nhận giá thị trường hàng ngày cho tài sản của mình.'],
        ['"Đừng bán đúng đáy"', '"Chúng ta rất gần đáy rồi, bán là dại."', 'Không ai biết đáy ở đâu; cổ phiếu không chạm đáy chỉ vì trông rẻ.'],
        ['"Hồi phục lớn"', '"Thấy chưa, đang bật lên, đừng bỏ cuộc."', 'Một nhịp hồi ngắn không chứng minh xu hướng đã đổi.'],
        ['Yêu nước', '"Nếu ai cũng bán, thị trường sập; hãy tin vào đất nước."', 'Quyết định đầu tư của bạn không phải nghĩa vụ giữ thị trường.']
      ] },
      { t: 'widget', name: 'cp-avgdown', title: 'Bình quân giá và mức tăng cần thiết để hòa vốn' },
      { t: 'p', x: 'Đúng ra Linda chỉ biết ba lựa chọn: mua, bán hoặc giữ. Sau này chị mới biết còn cách kiếm lợi khi thị trường giảm. Chị quyết định giữ — vì còn một lý do riêng mà người môi giới không biết: cha chị chính là CEO của UCBS.' },
      { t: 'tip', x: 'Nghĩ thêm: câu "đầu tư dài hạn luôn thắng" nghe có vẻ được lịch sử ủng hộ, nhưng thực tế có những giai đoạn nhiều năm thị trường giảm sâu (Nhật Bản sau 1989 mất hàng chục năm mới lấy lại đỉnh). Giữ hay bán phải dựa trên lý do cụ thể, không phải khẩu hiệu.' }
    ] },
    { icon: '🔎', title: 'Điều gì đã xảy ra sau đó (ghi chú ngoài sách)', blocks: [
      { t: 'list', items: ['Sách phản ánh bối cảnh bong bóng dot-com và các vụ Enron, WorldCom đầu những năm 2000.', 'Mỹ ban hành đạo luật Sarbanes-Oxley (2002) và các quy định tách bạch lợi ích giữa phân tích viên và ngân hàng đầu tư (thỏa thuận Global Settlement, 2003).', 'Quy tắc "lỗ trên giấy không tính" vẫn là một nhầm lẫn phổ biến của nhà đầu tư cá nhân ngày nay.'] }
    ] }
  ],
  summary: ['Môi giới có xung đột lợi ích: họ muốn giữ bạn trong thị trường.', 'Lỗ trên giấy cũng là lỗ thật về giá trị tài sản.', 'Bình quân giá là công cụ, không phải phép màu: nó có thể kéo bạn dồn thêm vào sai lầm.', 'Không ai biết đáy; lập luận "đừng bán ở đáy" là lời dọa.', 'Tin tức, xếp hạng và con số lợi nhuận đều cần được kiểm chứng.'],
  cards: [['Xung đột lợi ích của người môi giới là gì?', 'Họ hưởng lợi khi bạn mua/giữ và ở lại, không nhất thiết khi bạn có lời'], ['P/E là gì?', 'Giá cổ phiếu chia cho lợi nhuận trên mỗi cổ phiếu'], ['Nếu lợi nhuận thực bị khai gấp đôi thì giá "đáng giá" ở P/E 20?', 'Giảm một nửa (ví dụ từ 40 xuống 20 USD)'], ['Dollar-cost averaging là gì?', 'Mua thêm khi giá giảm để kéo giá vốn trung bình xuống'], ['"Lỗ trên giấy" là gì?', 'Khoản lỗ chưa bán — vẫn là lỗ về giá trị'], ['Vì sao môi giới sợ khách bán?', 'Khách bán xong thường rời thị trường/đóng tài khoản'], ['Cha của Weiss kiếm tiền cách nào trong 1930–32?', 'Bán khống cổ phiếu rồi mua lại blue-chip ở đáy'], ['Đây là sách thể loại nào?', 'Hư cấu pha thực: tiểu thuyết kèm lời khuyên và số liệu thật']],
  quiz: [
    { q: 'Cổ phiếu 40 USD, lãi 2 USD/cổ phiếu, P/E bằng:', o: ['10', '20', '40', '80'], a: 1, e: '40 / 2 = 20.' },
    { q: 'Nếu lãi thực chỉ 1 USD và thị trường vẫn trả P/E 20, giá hợp lý là:', o: ['10', '20', '40', '60'], a: 1, e: '20 × 1.' },
    { q: 'Mua 2.000 cổ ở 40 rồi 2.000 cổ ở 10 thì giá vốn trung bình:', o: ['10', '20', '25', '40'], a: 2, e: '(40 + 10)/2.' },
    { q: 'Chiêu "lỗ trên giấy" sai ở chỗ:', o: ['Lỗ không có thật', 'Lỗ chưa bán vẫn làm tài sản giảm', 'Chỉ áp dụng ở Mỹ', 'Không bao giờ phục hồi'], a: 1, e: 'Giá trị tài sản đã giảm dù chưa bán.' },
    { q: 'Vì sao Linda quyết định giữ cổ phiếu?', o: ['Tin lời môi giới', 'Cha chị là CEO công ty', 'Hết tiền', 'Giá đang tăng'], a: 1, e: 'Lý do riêng.' }
  ],
  match: [['Lỗ trên giấy', 'Vẫn là lỗ về giá trị'], ['Bình quân giá', 'Kéo giá vốn xuống'], ['P/E', 'Giá / lợi nhuận mỗi cổ phiếu'], ['Môi giới', 'Hưởng phí khi khách ở lại'], ['Bán khống', 'Kiếm lời khi giá giảm']]
});
