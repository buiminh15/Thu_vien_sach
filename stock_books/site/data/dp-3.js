window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.dperf = BOOK_DATA.dperf || { chapters: [] };
BOOK_DATA.dperf.chapters.push({
  n: 3,
  title: 'Tối ưu hình ảnh',
  intro: 'Ảnh chiếm phần lớn dung lượng trang nên là "chiến thắng dễ nhất" về tốc độ. Chọn đúng định dạng (JPEG, GIF, PNG), nén thêm, giảm số request bằng sprite, CSS3, data URI, SVG và duy trì quy trình tối ưu lâu dài.',
  sections: [
    { icon: '🧭', title: 'Chọn định dạng ảnh', blocks: [
      { t: 'p', x: 'Số byte ảnh trên trang trung bình tăng hơn 30% trong một năm, trong khi số request gần như không đổi. Mục tiêu: cân bằng dung lượng – chất lượng cho từng ảnh, giảm số request ảnh, và tối ưu quy trình tạo ảnh.' },
      { t: 'p', x: 'Trước khi xuất ảnh hãy hỏi: nén được tới đâu mà chưa thấy giảm chất lượng? Cần bao nhiêu màu? Đơn giản hóa được không? Có cần trong suốt/animation không? Hiển thị tối đa kích thước nào? Tái sử dụng thế nào?' },
      { t: 'table', head: ['Định dạng', 'Phù hợp nhất', 'Cách tối ưu'], rows: [['JPEG', 'Ảnh chụp, nhiều màu', 'Giảm chất lượng, xuất progressive, giảm nhiễu'], ['GIF', 'Animation', 'Giảm dithering, giảm số màu, tăng mẫu ngang, giảm nhiễu dọc'], ['PNG-8', 'Ảnh ít màu', 'Giảm dithering, giảm số màu, tăng mẫu ngang và dọc'], ['PNG-24', 'Trong suốt một phần', 'Giảm nhiễu, giảm số màu']] },
      { t: 'widget', name: 'dp-format', title: 'Chọn định dạng cho ảnh của bạn' }
    ] },
    { icon: '📷', title: 'JPEG', blocks: [
      { t: 'p', x: 'JPEG nén <b>có mất mát</b> (lossy) theo thuật toán dựa trên cách mắt người nhìn: giỏi bỏ thông tin ở vùng chuyển sắc mịn, tương phản thấp. Ở chất lượng thấp sẽ thấy <b>artifact</b> (mờ, vỡ hạt, banding), nhất là quanh cạnh tương phản mạnh — loại ảnh đó hợp PNG hơn.' },
      { t: 'list', items: ['Dùng "Save for Web" của Photoshop (xem trước, chỉnh chất lượng, thêm tối ưu) thay vì Save As; thử nhiều mức chất lượng (ví dụ 25, 50, 75, 100) để tìm điểm cân bằng.', 'Càng nhiều màu riêng biệt và nhiễu/hạt (noise) thì file càng lớn: nhiễu 10% gần gấp đôi file so với nhiễu 5% (ví dụ trong sách). Cẩn trọng số màu khi tạo họa tiết lặp.', 'Sau khi xuất, luôn chạy qua công cụ nén (ImageOptim, Smush.it) để tiết kiệm thêm mà gần như không mất chất lượng.'] },
      { t: 'h3', x: 'Baseline và progressive' },
      { t: 'table', head: ['', 'Baseline', 'Progressive'], rows: [['Cách hiển thị', 'Quét từ trên xuống, hiện dần từng hàng', 'Hiện cả ảnh chất lượng thấp ngay, rồi nâng dần chất lượng'], ['Cảm nhận', 'Chậm hơn', 'Nhanh hơn vì lấp đầy chỗ trống ngay'], ['Lưu ý', 'Chuẩn thông dụng', 'Trình duyệt không hỗ trợ dựng dần chỉ hiện sau khi tải xong; mỗi lượt quét tốn CPU ngang một baseline (Mobile Safari không dựng dần, Chrome Android thì có)']] },
      { t: 'tip', x: 'Tạo progressive trong Save for Web: tích ô Progressive cạnh Quality. Chuyển ảnh có sẵn bằng Smush.it.' },
      { t: 'widget', name: 'dp-jpeg', title: 'Chất lượng, nhiễu và dung lượng JPEG (mô phỏng)' }
    ] },
    { icon: '🎞️', title: 'GIF', blocks: [
      { t: 'p', x: 'GIF ra đời 1987, hỗ trợ trong suốt và animation, tối đa <b>256 màu mỗi khung</b>, nén <b>không mất mát</b>. Chỉ chọn GIF khi: (1) file GIF nhỏ hơn PNG-8 cùng ảnh, hoặc (2) animation không thay được bằng CSS3.' },
      { t: 'list', items: ['<b>Dithering</b> làm chuyển màu mịn hơn nhưng nặng hơn: dither 0 → 4,8 KB, dither 100 → 9,7 KB (cùng 40 màu).', 'GIF nén theo <b>mẫu ngang</b>: thêm chi tiết/nhiễu theo chiều dọc có thể làm file tăng hơn gấp đôi (gradient dọc: 21 KB). Giảm nhiễu dọc.', 'Ảnh ít màu, cạnh sắc: dùng PNG-8 (nén cả mẫu ngang và dọc) — thường nhỏ hơn GIF.', 'Animation đơn giản (spinner, loading) nên thay bằng CSS3 animation vì nhẹ hơn.'] },
      { t: 'widget', name: 'dp-gif', title: 'Dithering, màu và chiều gradient ảnh hưởng dung lượng GIF' }
    ] },
    { icon: '🖼️', title: 'PNG-8 và PNG-24', blocks: [
      { t: 'p', x: 'PNG là định dạng lossless cải tiến từ GIF. Cần trong suốt thì chọn PNG (GIF trong suốt thường nặng hơn). <b>PNG-8</b>: tối đa 256 màu, thường nhỏ, tốt cho ảnh ít màu. <b>PNG-24</b>: không giới hạn màu, trong suốt một phần (alpha) nhưng nặng.' },
      { t: 'list', items: ['PNG-8 trong Photoshop dùng <b>matte</b> (màu nền giả định) để trộn bóng đổ; matte nên trùng màu nền nơi đặt ảnh. Chỉ xuất đúng số màu cần (ví dụ 4 màu thay vì 256).', 'PNG-24 cho ảnh chụp thường lớn <b>5–10 lần</b> JPEG vì lossless; nếu không cần trong suốt mà nhiều màu, chọn JPEG.', 'Tăng số màu từ 5 lên 10 sọc làm PNG-24 tăng 6%: chuẩn hóa màu của site giúp giảm file.', 'Fireworks và pngquant cho trong suốt một phần ở PNG-8; từ Photoshop thì dùng PNG-24.', 'IE6 hỗ trợ PNG hạn chế: kiểm tra nếu còn cần hỗ trợ.'] },
      { t: 'tip', x: 'Định dạng mới (WebP, JPEG XR, JPEG 2000) tối ưu hơn; dùng khi trình duyệt và công cụ hỗ trợ.' }
    ] },
    { icon: '🗜️', title: 'Nén thêm và tự động hóa', blocks: [
      { t: 'steps', items: ['Xuất ảnh đúng kích thước pixel tối đa cần dùng: ảnh lớn rồi thu nhỏ bằng thẻ img là lãng phí byte.', 'Chạy qua <b>ImageOptim</b> (ứng dụng Mac: PNGOUT, Zopfli, Pngcrush, AdvPNG, OptiPNG, JpegOptim, jpegrescan, jpegtran, Gifsicle) hoặc <b>Smush.it</b> (web: ImageMagick, pngcrush, jpegtran, Gifsicle) — nén lossless, bỏ color profile và comment.', 'Tự động hóa cho người đăng nội dung: ImageOptim-CLI, plug-in WordPress như EWWW Image Optimizer, tích hợp vào quy trình build.'] },
      { t: 'widget', name: 'dp-compress', title: 'Ước tính tiết kiệm khi nén thêm' }
    ] },
    { icon: '🧩', title: 'Giảm số request ảnh', blocks: [
      { t: 'key', x: '"Request nhanh nhất là request không được gửi." Hai hướng: gộp ảnh thành <b>sprite</b>, hoặc thay ảnh bằng <b>CSS3, data URI, SVG</b>.' },
      { t: 'h3', x: 'Sprite' },
      { t: 'p', x: 'Ứng viên tốt: icon nhỏ, logo, nền CSS lặp. Dùng chung một ảnh (sprite.png) cho nhiều phần tử và dịch bằng background-position. Ví dụ: h1 dùng góc trái trên (0 0); ngôi sao đầu cần dịch trái 216px lên 15px; ngôi sao đỏ −234px −15px.' },
      { t: 'tip', x: 'h1, .fave:before { background: url(sprite.png) transparent no-repeat; } .fave:before { background-position: -216px -15px; } .winner:before { background-position: -234px -15px; }<br>Ẩn chữ nhưng giữ cho trình đọc màn hình: text-indent: 100%; white-space: nowrap; overflow: hidden. Pseudo-element :before/:after hỗ trợ một phần ở IE8.' },
      { t: 'list', items: ['Trang nặng hơn một chút (file sprite lớn + CSS) nhưng nhanh hơn do ít request (sách đo bằng WebPagetest: ít kết nối hơn, document complete sớm hơn, Speed Index tốt hơn).', 'Nhược điểm: đổi một ảnh phải phá cache cả file; người dùng tải cả icon không dùng.', 'Thí nghiệm của Etsy: gộp 26 thumbnail vào sprite → trang nặng thêm 60 KB, giảm 21% request, giảm 35% thời gian tải.', 'HTTP/2 dùng một kết nối và cho phép server đẩy nội dung nên tương lai có thể không cần sprite.'] },
      { t: 'widget', name: 'dp-sprite', title: 'Sprite hay ảnh rời? So sánh số request và thời gian' },
      { t: 'h3', x: 'CSS3' },
      { t: 'p', x: 'Gradient, hình khối, animation làm bằng CSS: xử lý trong suốt, đặt chồng lên màu nền, bớt một request, rất dễ chỉnh. Đừng ngại phần CSS thêm vì tiền tố trình duyệt — gzip sẽ nén. Ví dụ nút bevel: background-image: linear-gradient(to bottom, #FFF, transparent) cùng background-color #DDD; nút "Buy" đổi sang #C2E1A9, nút "Info" #AFCCD3. Gradient "hard stop": đặt điểm dừng thứ hai là 0 (e4f3d9 50%, 7ac142 0).' },
      { t: 'warn', x: 'Luôn đặt background-color dự phòng cho trình duyệt cũ (chữ vẫn đọc được). Khai báo background (viết tắt) về sau sẽ ghi đè gradient của background-image. IE6–9 cần filter progid:DXImageTransform, chỉ có gradient mượt. CSS3 nhiều có thể gây tốn repaint — kiểm tra bằng công cụ JankFree.org.' },
      { t: 'h3', x: 'Data URI và Base64' },
      { t: 'p', x: 'Chuyển ảnh rất nhỏ thành chuỗi Base64 nhúng trong CSS: url(data:image/png;base64,...). Bớt một HTTP request, ảnh hiện ngay. Nhưng không cache riêng được và CSS to lên: phải đo trước khi dùng.' },
      { t: 'h3', x: 'SVG' },
      { t: 'p', x: 'Hợp icon một màu/gradient, ít chi tiết, trong suốt. Ưu điểm: nét đẹp ở cả màn hình thường lẫn retina, không cần ảnh độ phân giải cao; inline SVG bỏ một request. Không hỗ trợ IE8 trở xuống, Android 2.x — dùng Grunticon (SVG + PNG dự phòng), Modernizr.' },
      { t: 'list', items: ['Xuất từ Illustrator: SVG 1.1, Font Type SVG, Subsetting None, Images Embed, bỏ chọn Preserve Illustrator Editing Capabilities.', 'Xóa phần dư: dòng DOCTYPE, comment Generator, khai báo xml; tự động hóa bằng Scour, SVGO, SVG Optimiser (chạy trên bản xuất, không phải file gốc).', 'Dùng: thẻ img src="star.svg"; nền CSS (background-size); hoặc inline vào HTML. Màu inline SVG đổi bằng thuộc tính fill.', 'Icon font (IcoMoon): dễ đổi màu bằng color nhưng khó dự phòng, vướng line-height/font-size và khả năng truy cập.', 'Giống data URI: inline SVG làm HTML nặng thêm và không cache được — đo hiệu quả.'] },
      { t: 'widget', name: 'dp-replace', title: 'Thay ảnh bằng gì? Gợi ý theo loại ảnh' }
    ] },
    { icon: '🔁', title: 'Lập kế hoạch và duy trì', blocks: [
      { t: 'list', items: ['<b>Kiểm tra định kỳ</b>: sprite còn icon lỗi thời? ảnh nào thay được bằng CSS3/SVG/picturefill? ảnh mới đã đúng định dạng, đơn giản, đã nén? có ảnh hiển thị nhỏ hơn kích thước xuất không? Theo dõi trọng lượng trang và tỉ lệ do ảnh.', '<b>Style guide</b>: lớp CSS cho từng icon, ý nghĩa và cách dùng icon/sprite, ví dụ gradient CSS cần tái dùng, danh sách trình duyệt cần hỗ trợ.', '<b>Hướng dẫn người làm ảnh</b>: quy trình rõ ràng, tự động hóa tối đa để họ không thấy gánh nặng; đừng làm "cảnh sát hiệu năng" một mình.'] },
      { t: 'tip', x: 'Đôi khi xuất ảnh lớn hơn một chút vì đẹp hơn rõ rệt là đúng; đôi khi tái dùng màu/icon thay vì tạo bản gần giống sẽ tiết kiệm lớn. Quan trọng là chọn có chủ đích.' }
    ] }
  ],
  summary: ['Ảnh là phần nặng nhất của trang: tối ưu ảnh là chiến thắng dễ nhất.', 'JPEG cho ảnh chụp; PNG-8 cho ít màu; PNG-24 cho trong suốt một phần; GIF chủ yếu cho animation.', 'Giảm màu, giảm nhiễu, xuất đúng kích thước, chạy qua ImageOptim/Smush.it.', 'GIF/PNG nén theo mẫu ngang: tránh nhiễu dọc.', 'Giảm request: sprite, CSS3, data URI, SVG — đều cần đo hiệu quả.', 'Duy trì bằng kiểm tra định kỳ, style guide và tự động hóa.'],
  cards: [['JPEG hợp loại ảnh nào?', 'Ảnh chụp, nhiều màu (lossy)'], ['Artifact là gì?', 'Vùng mất độ rõ: mờ, vỡ ô, banding'], ['Progressive JPEG khác baseline?', 'Hiện cả ảnh chất lượng thấp rồi nâng dần; baseline quét từ trên xuống'], ['GIF tối đa bao nhiêu màu?', '256 màu mỗi khung'], ['Khi nào chọn GIF?', 'File nhỏ hơn PNG-8, hoặc animation không thay được bằng CSS3'], ['Dithering làm gì?', 'Chuyển màu mịn hơn nhưng file nặng hơn'], ['GIF nén theo mẫu nào?', 'Mẫu ngang: nhiễu dọc làm file phình ra'], ['PNG-24 so với JPEG cho ảnh chụp?', 'Lớn 5–10 lần'], ['Matte trong PNG-8 là gì?', 'Màu nền giả định để trộn bóng đổ'], ['Sprite là gì?', 'Một ảnh gộp nhiều ảnh nhỏ, định vị bằng background-position'], ['Nhược điểm sprite?', 'Đổi một ảnh phải phá cache cả file; tải byte thừa'], ['Data URI nhược điểm?', 'Không cache riêng, CSS nặng hơn'], ['Ưu điểm SVG?', 'Nét ở mọi độ phân giải, nhỏ, bỏ request'], ['Công cụ nén lossless?', 'ImageOptim, Smush.it'], ['Thí nghiệm sprite của Etsy?', '−21% request, −35% thời gian tải, +60 KB']],
  quiz: [
    { q: 'Ảnh chụp phong cảnh nhiều màu nên dùng:', o: ['GIF', 'PNG-8', 'JPEG', 'SVG'], a: 2, e: 'JPEG nén tốt ảnh chụp.' },
    { q: 'Logo 4 màu, cạnh sắc, nền đặc nên dùng:', o: ['JPEG', 'PNG-8', 'PNG-24', 'BMP'], a: 1, e: 'Ít màu → PNG-8.' },
    { q: 'Vì sao gradient dọc làm GIF nặng gấp đôi?', o: ['Nhiều màu hơn', 'GIF nén theo mẫu ngang', 'Do dither tắt', 'Do trong suốt'], a: 1, e: 'Chi tiết dọc phá nén ngang.' },
    { q: 'Tăng nhiễu JPEG từ 5% lên 10% làm file:', o: ['Nhỏ đi', 'Không đổi', 'Gần gấp đôi', 'Giảm một nửa'], a: 2, e: 'Nhiễu làm tăng dung lượng mạnh.' },
    { q: 'Điểm yếu của data URI:', o: ['Thêm request', 'Không cache được riêng', 'Không dùng được trong CSS', 'Không hỗ trợ PNG'], a: 1, e: 'Nhúng vào CSS nên mất cache riêng.' },
    { q: 'Icon một màu cần nét đẹp ở màn hình retina nên dùng:', o: ['JPEG', 'GIF', 'SVG', 'PNG-24'], a: 2, e: 'SVG là vector.' },
    { q: 'Công cụ nào dùng nén lossless ảnh?', o: ['Fireworks', 'ImageOptim', 'Illustrator', 'Modernizr'], a: 1, e: 'ImageOptim/Smush.it.' }
  ],
  match: [['JPEG', 'Lossy, ảnh chụp'], ['GIF', 'Animation, 256 màu'], ['PNG-8', 'Ít màu'], ['PNG-24', 'Alpha, nặng'], ['Sprite', 'Gộp nhiều icon'], ['SVG', 'Vector']]
});
