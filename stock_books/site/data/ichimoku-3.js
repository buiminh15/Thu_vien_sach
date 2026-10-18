// Chương 7 – Phần 4 "Nghệ thuật giao dịch kỷ luật" + Kết luận (Karen Péloille).
BOOK_DATA.ichimoku.chapters.push({
  n: 7,
  title: 'Nghệ thuật giao dịch kỷ luật',
  intro: 'Tác giả cho rằng tâm lý chiếm ~80% thành công. Chương này giúp bạn hiểu cảm xúc của mình, xây quy trình ra quyết định, lập kế hoạch giao dịch và quản lý vốn.',
  sections: [
    { icon: '🧠', title: 'Nghịch lý: tiền là hệ quả, không phải động cơ', blocks: [
      { t: 'p', x: 'Giao dịch hiệu quả, rủi ro thấp dựa trên một nghịch lý: <b>lợi nhuận không thể là động lực của giao dịch mà chỉ là hệ quả của nó</b>. Khi bỏ mục tiêu “kiếm tiền” ra khỏi đầu, bạn nhìn thị trường như một bài tập logic; nếu đúng thì tiền tự đến.' },
      { t: 'list', items: [
        'Hãy nghĩ bằng <b>điểm (points)</b> chứ không bằng tiền; tách phân tích khỏi bảng lãi/lỗ.',
        'Ham lợi nhuận khiến ta thấy cơ hội ở nơi không có – nguồn gây lỗi cho cả người mới lẫn người có kinh nghiệm.',
        'Cuộc chiến trading diễn ra <b>trong đầu</b> nhiều hơn trên màn hình (khoa học thần kinh kinh tế học – neuroeconomics).'
      ] },
      { t: 'key', x: 'Phần cảm xúc của trí tuệ không chỉ chi phối mà còn <b>phản ứng nhanh hơn</b> phần phân tích. Không kiểm soát được trạng thái cảm xúc thì không thể thắng dù phân tích tốt đến đâu.' }
    ] },
    { icon: '🎭', title: 'I. Nhận diện 6 cảm xúc', blocks: [
      { t: 'tabs', items: [
        ['😨 Sợ hãi', '<p>Cảm xúc quan trọng nhất: sợ mất tiền (vùng não kích hoạt giống khi gặp hiểm nguy chết người).</p><ul><li><b>Trước khi vào lệnh</b>: thêm quá nhiều chỉ báo cho có cảm giác hiểu hơn, hoặc vào lệnh bốc đồng vì sợ lỡ cơ hội dù tín hiệu chưa đủ.</li><li><b>Khi đang giữ lệnh</b>: sợ mất lãi nên đóng sớm, rồi bực bội khi thị trường đạt mục tiêu ban đầu. Lỗi không phải do thiếu kỹ năng mà thiếu <b>tự tin</b>.</li></ul>'],
        ['🤞 Hy vọng', '<p>Khi lệnh sai, hy vọng thị trường quay lại và thậm chí tăng khối lượng; cảm giác mất mát che đi tín hiệu đã vô hiệu hoá phân tích. “Chứng minh mình đúng” là cái bẫy lớn. Hy vọng cũng xuất hiện khi chờ cơ hội: không chịu nổi việc không làm gì nên hành động theo tín hiệu mờ.</p>'],
        ['🤩 Hưng phấn', '<p>Sau chuỗi thắng sinh cảm giác bất khả chiến bại → phán đoán kém, mất nhanh số đã lãi, dẫn tới giận dữ và vòng xoáy thua lỗ.</p>'],
        ['😡 Giận dữ', '<p>Sau nhiều thất vọng, muốn “gỡ lại” bằng cách vào lệnh theo tín hiệu mờ nhạt, tin đây là nhịp sẽ gỡ hết lỗ → thường thảm hại, có khi dẫn tới hoảng loạn.</p>'],
        ['😱 Hoảng loạn', '<p>Cảm giác không còn hiểu thị trường; chỉ có hai đường: hành động bằng mọi giá (phi lý) hoặc không làm gì rồi bỏ chạy. Nỗi đau tâm lý của thua lỗ (xấu hổ, tổn thương cái tôi) có thể kéo dài hơn đau thể xác và gây nghi ngờ bản thân.</p>'],
        ['🤔 Nghi ngờ', '<p>Chướng ngại chính của ra quyết định, có hai dạng: (1) nghi ngờ hệ thống – mất độ tin cậy; (2) do dự – không hành động đúng lúc. Vào lệnh cần một dạng <b>can đảm</b>: giữ nghiêm hệ thống thì thành công, cảm xúc mất kiểm soát thì thất bại.</p>']
      ] },
      { t: 'mnemo', x: '<b>S-H-H-G-H-N</b>: Sợ – Hy vọng – Hưng phấn – Giận – Hoảng – Nghi ngờ. Không thể loại bỏ cảm xúc, chỉ có thể <b>nhận ra và để chúng đi</b>, giữ trạng thái bình tĩnh và quyết đoán.' },
      { t: 'p', x: 'Giao dịch dùng hai phần của não: <b>lý trí</b> xây chiến lược vào lệnh, <b>cảm xúc</b> kích hoạt việc thực hiện chiến lược.' }
    ] },
    { icon: '🛠️', title: 'II. Xây dựng quy trình ra quyết định', blocks: [
      { t: 'steps', items: [
        '<b>Dành thời gian</b>: không cần dậy sớm; biến động lúc mở cửa chưa chắc dẫn đường cho cả ngày. Thành công nằm ở <b>thời điểm</b> và kiên nhẫn – chưa có tín hiệu đúng hệ thống thì đứng ngoài.',
        '<b>Định hướng</b>: cảm nhận tâm trạng chung của thị trường – quan sát mà chưa vội diễn giải. Mục tiêu: hành động dựa trên kỷ luật vững chắc, giữ bình tĩnh như người quan sát bên ngoài (“Zen”), không phải trở thành robot.',
        '<b>Rèn trí óc như vận động viên</b>: (a) tự soi mình – khả năng chịu stress, phản ứng với bất ngờ, mức tập trung; vì sao bạn ở thị trường, kỳ vọng gì; (b) xây mô hình lý thuyết phát huy điểm mạnh, hạn chế điểm yếu, đặt mục tiêu thực tế (không tính bằng tiền); (c) chuẩn hoá thành <b>khung kỹ năng chặt chẽ, bất biến</b> + quản lý rủi ro tối ưu.'
      ] },
      { t: 'h3', x: 'Khi thị trường “gõ cửa” bạn (III. Trong hành động)' },
      { t: 'p', x: 'Một thông tin bên ngoài phá cân bằng, bạn trải qua: <b>(1) phản ứng cảm xúc</b> (“chiến lược có nguy hiểm không? mình đang sợ/giận/lo? có cần phản ứng nhanh không?”) → <b>(2) phân tích</b> (đưa ra vài phương án) → <b>(3) thực hiện</b> quyết định. Thị trường cũng vận hành y như vậy: cân bằng → xáo trộn → phản ứng lan truyền → điều chỉnh → thường quay lại xu hướng cũ.' }
    ] },
    { icon: '🏹', title: 'Quy trình thực chiến', blocks: [
      { t: 'steps', items: [
        '<b>Phân tích</b>: trader giỏi dùng “biểu đồ trần” (không chỉ báo). Khi chưa đạt tới đó, chọn ít công cụ nhất, phù hợp cách phân tích của bạn; quá nhiều công cụ gây rối và có thể mâu thuẫn nhau. Ichimoku tự đủ và cho cái nhìn toàn diện tức thì.',
        '<b>Đánh giá</b>: tổng hợp quan sát → kế hoạch: điểm vào, mục tiêu giá, mức cắt lỗ. Khối lượng xác định theo R:R. Việc còn lại là chờ thời điểm kích hoạt kịch bản.',
        '<b>Quản lý lệnh</b>: tập trung và tự tin, như cung thủ: căng cung (chiến lược), đường bay mũi tên (thị trường), đích (mục tiêu). Đã bắn thì không còn nghi ngờ. Bạn đã có sẵn phản ứng cho biến động, phương án thay thế khi lệch giả thuyết.',
        '<b>Thắng nhưng cũng biết thua</b>: ai cũng thua đôi lần. Hãy học từ lỗi thay vì đổ cho thị trường. “Học để sống sót.”'
      ] },
      { t: 'key', x: 'Vòng tròn trưởng thành: <b>Học không ngừng → kiến thức → trực giác → hiểu thị trường → tự tin</b>, được bảo vệ bằng một <b>hệ thống</b> tự động đáp ứng cơ hội, đơn giản, chính xác và hợp tính cách bạn.' }
    ] },
    { icon: '👤', title: 'Hồ sơ & hành vi của trader lý tưởng', blocks: [
      { t: 'list', items: [
        'Xây chiến lược từ cảm nhận thị trường; <b>tập trung vào quy trình áp dụng phương pháp, không vào kết quả</b>.',
        'Luôn ở <b>hiện tại</b>: không bị quá khứ chi phối, không suy diễn tương lai; để lỗi lại sau khi rút bài học.',
        'Học liên tục, rèn sự tập trung và nhạy bén.'
      ] },
      { t: 'h3', x: 'Những nguyên tắc hành vi quan trọng' },
      { t: 'table', head: ['Nhóm', 'Nguyên tắc'], rows: [
        ['Động cơ & niềm tin', 'Biết vì sao giao dịch · tự chịu trách nhiệm phán đoán, không bị người khác ảnh hưởng · có hệ thống · <b>không giao dịch bằng hy vọng</b>'],
        ['Khi nghi ngờ', '<b>Nghi ngờ thì đứng ngoài.</b> Phân tích sai thì thoát. Có nhiều phương án thay thế như người chơi cờ tính trước nhiều nước.'],
        ['Hành động', 'Đừng đuổi theo thị trường – để thị trường tìm bạn · đừng giao dịch quá mức · đừng đoán đỉnh đáy, hãy chờ xác nhận đảo chiều để lấy phần giữa mạnh nhất · hỏi “xu hướng đã được xác nhận chưa?” chứ không phải “xu hướng sắp đảo chiều?”'],
        ['Xu hướng', 'Không chống xu hướng, nhưng có thể chơi các nhịp điều chỉnh (biết mình đang đi ngược hướng chính).'],
        ['Rủi ro', 'Luôn tính R:R để định khối lượng · cắt lỗ kỹ thuật · cắt lỗ kỷ luật, không ở lại trong “chế độ hy vọng” · đừng luôn cố chứng minh mình đúng, <b>thị trường là bậc thầy của cuộc chơi</b>.'],
        ['Lợi nhuận', 'Để lãi chạy khi chưa có tín hiệu thoát · ưu tiên nhiều lệnh nhỏ rủi ro thấp · ưu tiên thị trường thanh khoản.'],
        ['Tự đánh giá', 'Định kỳ kiểm kê tiến bộ · phân tích cả lệnh thua (rút bài học) và lệnh thắng (tạo tự tin) · <b>dừng sau chuỗi thua</b> (không mất tự tin) · <b>dừng sau chuỗi thắng</b> (tránh quá tự tin).']
      ] },
      { t: 'mnemo', x: 'Giao dịch = <b>Kiên nhẫn + Kỷ luật + Hệ thống hợp tâm lý</b>. “Có những giai đoạn trader không cần giao dịch.”' }
    ] },
    { icon: '📋', title: 'Kế hoạch giao dịch mẫu & Quản lý vốn', blocks: [
      { t: 'h3', x: '7 bước của một kế hoạch giao dịch' },
      { t: 'steps', items: [
        'Chọn loại thị trường, tài sản và đơn vị thời gian.',
        'Đánh giá lợi nhuận tiềm năng và rủi ro thua lỗ đi kèm.',
        'Xác định khối lượng vị thế theo quản lý vốn và độ nhạy của thị trường.',
        'Xác định điểm vào theo các tín hiệu kỹ thuật đã được kiểm chứng.',
        'Lên kế hoạch thoát tại điểm kỹ thuật (hỗ trợ, kháng cự, thoái lui hoặc mở rộng Fibonacci…).',
        'Tính cắt lỗ – vừa kỹ thuật vừa tài chính.',
        'Xác định điều kiện vào lệnh (biến động, kiểm tra điểm phá vỡ…).'
      ] },
      { t: 'widget', name: 'rr-calc', title: 'Kiểm tra nhanh tỷ lệ R:R trước khi vào lệnh' },
      { t: 'h3', x: 'Nguyên tắc quản lý vốn' },
      { t: 'list', items: [
        '<b>Chia vốn thành n phần bằng nhau</b> và chỉ dùng 1/n vốn mỗi lệnh.',
        'Không thực hiện quá nhiều giao dịch trong cùng thời gian (bảo toàn vốn); đa dạng hoá rủi ro; giao dịch ở thị trường sôi động, thanh khoản.',
        '<b>Không bao giờ huỷ cắt lỗ</b>; đừng để lãi biến thành lỗ — nhưng cũng đừng dời stop máy móc.',
        'Không đóng lệnh vội vàng hoặc vào lệnh chỉ vì chán; xử lý từng lệnh riêng biệt.',
        'Không đổi ý khi không có lý do tốt; không nghe lời khuyên của người khác; nghi ngờ thì thoát.',
        'Chú ý tầm quan trọng của thời điểm khi xu hướng đổi.'
      ] }
    ] },
    { icon: '🏁', title: 'Kết luận của cuốn sách', blocks: [
      { t: 'key', x: '“Quá nhiều thông tin giết chết thông tin.” Màn hình càng sạch thì chuyển động thị trường càng rõ; <b>trong giao dịch, sự đơn giản là tối quan trọng.</b> Ichimoku là một hệ thống phân tích hoàn chỉnh, không nên chồng thêm chỉ báo.' },
      { t: 'tabs', items: [
        ['Đã có phương pháp riêng', '<p>Hãy xem thêm biểu đồ Ichimoku của cùng thị trường để <b>kiểm chứng các mức then chốt và chiến lược</b>.</p>'],
        ['Chưa hài lòng', '<p>Cân nhắc thay đổi triệt để: học lại cách đọc biểu đồ chỉ bằng Ichimoku. Cần chút nỗ lực và sẵn sàng quên thói quen cũ, nhưng đáng giá. (Đây là trường hợp của tác giả.)</p>'],
        ['Người mới', '<p>Dễ nhất: chỉ cần đặt Ichimoku lên màn hình và học đọc biểu đồ một cách “thuần” từ đầu.</p>']
      ] },
      { t: 'mnemo', x: 'Chìa khoá thành công: <b>Đơn giản – Nghiêm ngặt (rigour) – Kiên nhẫn</b>.' }
    ] }
  ],
  summary: [
    'Tiền là hệ quả của việc áp dụng đúng chiến lược, không phải động cơ; hãy nghĩ bằng điểm.',
    'Sáu cảm xúc cần nhận diện: sợ hãi, hy vọng, hưng phấn, giận dữ, hoảng loạn, nghi ngờ.',
    'Xây quy trình: dành thời gian, định hướng, rèn trí óc, phân tích – đánh giá – quản lý lệnh.',
    'Nghi ngờ thì đứng ngoài; dừng giao dịch sau chuỗi thua và cả chuỗi thắng.',
    'Kế hoạch giao dịch 7 bước và quản lý vốn 1/n, không bao giờ huỷ cắt lỗ.',
    'Chìa khoá: đơn giản, nghiêm ngặt, kiên nhẫn.'
  ],
  cards: [
    ['Nghịch lý của giao dịch hiệu quả?', 'Lợi nhuận không thể là động cơ của giao dịch mà chỉ là hệ quả của việc áp dụng đúng chiến lược.'],
    ['Vì sao nên nghĩ bằng “điểm” thay vì tiền?', 'Tách phân tích khỏi bảng lãi/lỗ để nhìn thị trường khách quan, thấy tín hiệu thật chứ không phải tín hiệu mình muốn thấy.'],
    ['Tâm lý chiếm bao nhiêu % thành công theo tác giả?', 'Khoảng 80%.'],
    ['Hai dạng của sợ hãi trong giao dịch?', 'Sợ trước khi vào lệnh (vào bốc đồng/thêm chỉ báo) và sợ khi đang giữ lệnh (đóng sớm vì sợ mất lãi).'],
    ['Hy vọng gây hại thế nào?', 'Che mờ tín hiệu vô hiệu hoá phân tích; khiến giữ/tăng lệnh sai và hành động theo tín hiệu mờ.'],
    ['Hưng phấn dẫn tới đâu?', 'Quá tự tin, phán đoán kém, mất nhanh khoản lãi, rồi giận dữ và vòng xoáy thua lỗ.'],
    ['Giận dữ thúc đẩy hành vi gì?', 'Vào lệnh theo tín hiệu mờ để “gỡ lại” lỗ – thường dẫn đến thảm hại hoặc hoảng loạn.'],
    ['Hai dạng nghi ngờ?', 'Nghi ngờ hệ thống (mất độ tin cậy) và do dự (không hành động đúng lúc).'],
    ['Lý trí và cảm xúc đóng vai trò gì khi giao dịch?', 'Lý trí xây chiến lược; cảm xúc kích hoạt việc thực hiện.'],
    ['“Biểu đồ trần” (naked chart) là gì?', 'Biểu đồ chỉ có giá, không chỉ báo – cách các trader giỏi nhất dùng; đạt được sau nhiều năm kinh nghiệm.'],
    ['Ba phản ứng khi thị trường làm xáo trộn bạn?', '1) Cảm xúc (chiến lược có bị đe doạ?) 2) Phân tích, đưa phương án 3) Thực hiện quyết định.'],
    ['Hình ảnh người cung thủ nói lên điều gì?', 'Căng cung = chiến lược, đường bay mũi tên = thị trường, đích = mục tiêu; đã bắn thì không còn nghi ngờ.'],
    ['Nguyên tắc khi nghi ngờ?', 'Đứng ngoài thị trường. Phân tích sai thì thoát.'],
    ['Nên làm gì sau chuỗi thua và chuỗi thắng?', 'Dừng giao dịch: sau chuỗi thua để không mất tự tin, sau chuỗi thắng để tránh quá tự tin.'],
    ['Câu hỏi đúng cần đặt ra về xu hướng?', '“Xu hướng đã được xác nhận chưa?” chứ không phải “xu hướng sắp đảo chiều?”.'],
    ['Nguyên tắc chia vốn?', 'Chia vốn thành n phần bằng nhau, chỉ dùng 1/n vốn cho mỗi lệnh.'],
    ['Với cắt lỗ, điều tuyệt đối không được làm?', 'Không bao giờ huỷ cắt lỗ.'],
    ['Ba chìa khoá thành công trong lời kết?', 'Đơn giản, nghiêm ngặt (rigour), kiên nhẫn.']
  ],
  quiz: [
    { q: 'Nghịch lý trung tâm của giao dịch hiệu quả là:', o: ['Càng nhiều chỉ báo càng tốt', 'Lợi nhuận là hệ quả, không phải động cơ', 'Phải giao dịch thật nhiều', 'Phải bỏ phân tích kỹ thuật'], a: 1, e: 'Tách mục tiêu tiền khỏi quyết định giúp thấy tín hiệu thật.' },
    { q: 'Theo tác giả, tâm lý chiếm bao nhiêu phần công việc?', o: ['20%', '50%', '80%', '100%'], a: 2, e: 'Quản lý tâm lý ~80% công việc.' },
    { q: 'Khi lệnh sai mà vẫn giữ và tăng khối lượng với hy vọng thị trường quay lại là biểu hiện của:', o: ['Sợ hãi', 'Hy vọng', 'Hoảng loạn', 'Hưng phấn'], a: 1, e: 'Hy vọng che mờ tín hiệu vô hiệu hoá phân tích.' },
    { q: 'Sau chuỗi thắng cảm thấy bất khả chiến bại. Rủi ro là:', o: ['Nghi ngờ hệ thống', 'Quá tự tin, mất nhanh số đã lãi', 'Sợ hãi', 'Không có rủi ro'], a: 1, e: 'Hưng phấn làm giảm phán đoán, dễ dẫn đến giận dữ và thua lỗ.' },
    { q: 'Vào lệnh “gỡ lại” sau thua với tín hiệu mờ nhạt là do:', o: ['Giận dữ', 'Tự tin', 'Kiên nhẫn', 'Phân tích tốt'], a: 0, e: 'Giận dữ thúc đẩy hoạt động quá mức để bù lỗ.' },
    { q: 'Hai dạng nghi ngờ là:', o: ['Sợ và giận', 'Nghi ngờ hệ thống và do dự', 'Hy vọng và hoảng loạn', 'Hưng phấn và buồn chán'], a: 1, e: 'Một làm mất độ tin cậy hệ thống, một ngăn ta hành động đúng lúc.' },
    { q: 'Trader lý tưởng nên tập trung vào:', o: ['Kết quả mỗi lệnh', 'Quy trình áp dụng phương pháp', 'Lời khuyên của người khác', 'Dự đoán đỉnh đáy'], a: 1, e: 'Tập trung quy trình, không vào kết quả; tiền là hệ quả.' },
    { q: 'Khi nghi ngờ về lệnh, nguyên tắc là:', o: ['Tăng khối lượng', 'Đứng ngoài thị trường', 'Hỏi ý kiến người khác', 'Huỷ cắt lỗ'], a: 1, e: 'Nghi ngờ thì đứng ngoài thị trường.' },
    { q: 'Nên làm gì sau một chuỗi thua LIÊN TIẾP?', o: ['Tăng khối lượng để gỡ', 'Dừng giao dịch để không mất tự tin', 'Đổi hệ thống ngay', 'Giao dịch nhiều hơn'], a: 1, e: 'Dừng sau chuỗi thua (và cả chuỗi thắng) để giữ cân bằng cảm xúc.' },
    { q: 'Câu hỏi đúng khi đánh giá xu hướng là:', o: ['Xu hướng sắp đảo chiều?', 'Xu hướng đã được xác nhận chưa?', 'Đỉnh ở đâu?', 'Người khác nghĩ gì?'], a: 1, e: 'Đừng đoán đỉnh đáy; chờ xác nhận để lấy phần giữa mạnh nhất.' },
    { q: 'Nguyên tắc quản lý vốn “1/n” là:', o: ['Dùng toàn bộ vốn mỗi lệnh', 'Chia vốn thành n phần bằng nhau, mỗi lệnh dùng 1/n', 'Chỉ giao dịch n lệnh/ngày', 'n là số chỉ báo'], a: 1, e: 'Giúp bảo toàn vốn và chia nhỏ rủi ro.' },
    { q: 'Điều nào KHÔNG nằm trong nguyên tắc quản lý vốn?', o: ['Không bao giờ huỷ cắt lỗ', 'Đa dạng hoá rủi ro', 'Làm theo lời khuyên của người khác', 'Giao dịch ở thị trường thanh khoản'], a: 2, e: 'Tác giả khuyên không làm theo lời khuyên của người khác.' },
    { q: 'Ba chìa khoá thành công trong lời kết là:', o: ['Nhanh, nhiều, mạo hiểm', 'Đơn giản, nghiêm ngặt, kiên nhẫn', 'Tin tức, đòn bẩy, tốc độ', 'Chỉ báo, tín hiệu, lợi nhuận'], a: 1, e: 'Simplicity, rigour and patience.' }
  ],
  match: [
    ['Sợ hãi', 'Vào bốc đồng hoặc đóng lệnh sớm vì sợ mất lãi'],
    ['Hy vọng', 'Giữ/tăng lệnh sai mong thị trường quay lại'],
    ['Hưng phấn', 'Sau chuỗi thắng, quá tự tin'],
    ['Giận dữ', 'Vào lệnh để gỡ lại lỗ'],
    ['Hoảng loạn', 'Không còn hiểu thị trường, hành động phi lý hoặc bỏ chạy'],
    ['Nghi ngờ', 'Mất tin hệ thống hoặc do dự'],
    ['Biểu đồ trần', 'Chỉ có giá, không chỉ báo'],
    ['Quản lý vốn 1/n', 'Mỗi lệnh chỉ dùng một phần vốn'],
    ['Nghi ngờ thì…', 'Đứng ngoài thị trường'],
    ['Chìa khoá thành công', 'Đơn giản, nghiêm ngặt, kiên nhẫn']
  ]
});
