(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 3,
  title: 'Rule 1: Giảm số HTTP request',
  intro: 'Vì 80–90% thời gian nằm ở việc tải các thành phần, cách đơn giản nhất để nhanh hơn là giảm số thành phần, tức giảm số HTTP request – mà không phá thiết kế. Bốn kỹ thuật: image map, CSS sprite, inline image (data: URL) và gộp script/stylesheet. Có thể giảm tới ~50% thời gian ở các ví dụ trong sách.',
  sections: [
    { icon: '🗺️', title: 'Image map', blocks: [
      { t: 'p', x: 'Nếu có nhiều ảnh làm liên kết (thanh điều hướng, nút…), <b>image map</b> cho phép gắn nhiều URL vào <b>một ảnh</b> – bấm vào vùng nào dẫn tới URL đó. Thanh nav 5 ảnh chỉ còn 1 request.' },
      { t: 'p', x: C(`<img usemap="#map1" border=0 src="/images/imagemap.gif">
<map name="map1">
  <area shape="rect" coords="0,0,31,31"   href="home.html"  title="Home">
  <area shape="rect" coords="36,0,66,31"  href="gifts.html" title="Gifts">
  <area shape="rect" coords="71,0,101,31" href="cart.html"  title="Cart">
</map>`) },
      { t: 'list', items: [
        'Kết quả đo (IE 6, DSL ~900 Kbps): image map <b>nhanh hơn 56%</b> (354 ms so với 799 ms).',
        '<b>Server-side</b> image map: mọi cú nhấp gửi tọa độ x,y tới cùng một URL. <b>Client-side</b> (thẻ MAP) phổ biến hơn.',
        'Nhược điểm: tự tính tọa độ thủ công dễ sai và gần như không làm được với hình khác chữ nhật; tạo bằng DHTML không chạy tốt trên IE; ảnh trong image map phải liền kề nhau.'
      ] }
    ] },
    { icon: '🧩', title: 'CSS sprite', blocks: [
      { t: 'p', x: 'Gộp nhiều ảnh vào một ảnh lớn rồi dùng <code>background-position</code> để “trượt” đến phần cần hiển thị – như chiếc planchette di chuyển trên bàn cầu cơ (Ouija). Phần tử “mặt trượt” là bất kỳ thứ gì có nền ảnh (SPAN, DIV…).' },
      { t: 'p', x: C(`#navbar span { width:31px; height:31px; display:inline-block;
                background-image:url('spritebg.gif'); }
.home  { background-position:0 0; }
.gifts { background-position:-32px 0; }
.cart  { background-position:-64px 0; }`) },
      { t: 'list', items: [
        'Thời gian 342 ms – xấp xỉ image map nhưng nhanh hơn <b>57%</b> so với ảnh rời.',
        'Linh hoạt hơn image map: các ảnh <b>không cần liền kề</b>.',
        'Bất ngờ: ảnh gộp thường <b>nhỏ hơn</b> tổng các ảnh riêng vì bớt được phần overhead (bảng màu, header…).'
      ] },
      { t: 'tip', x: 'Sprite hợp cho nền, nút, thanh nav, icon. Markup sạch, ít ảnh phải quản lý.' }
    ] },
    { icon: '🧬', title: 'Inline image (data: URL)', blocks: [
      { t: 'p', x: 'Lược đồ <code>data:</code> (đề xuất năm 1995, RFC 2397) cho nhúng dữ liệu ngay trong URL, nên không cần request riêng: <code>data:[mediatype][;base64],data</code>.' },
      { t: 'p', x: C(`<img src="data:image/gif;base64,R0lGODlhDAAMALMLAPN8ffBiYvWW...">`) },
      { t: 'table', head: ['Điểm yếu', 'Giải thích'], rows: [
        ['Không có IE', 'IE (đến bản 7) không hỗ trợ data: URL'],
        ['Kích thước', 'Base64 làm dữ liệu to hơn; Firefox 1.5 chấp nhận ảnh inline tới 100K'],
        ['Không cache giữa các trang', 'Dữ liệu nằm trong HTML nên mỗi trang đều tải lại']
      ] },
      { t: 'key', x: '<b>Cách khắc phục:</b> đặt ảnh inline trong <b>stylesheet ngoài</b> (<code>background-image:url(data:…)</code>), khi đó dữ liệu được cache cùng stylesheet. Thời gian ngang image map/sprite (nhanh hơn 50% so với ảnh rời), tuy thêm 1 request cho CSS nhưng được cache lâu dài.' },
      { t: 'p', x: 'Trong PHP, <code>base64_encode(file_get_contents("../images/home.gif"))</code> giúp tự động sinh phần data này.' }
    ] },
    { icon: '📚', title: 'Gộp script và stylesheet', blocks: [
      { t: 'p', x: '10 site hàng đầu trung bình có 6–7 script và 1–2 stylesheet trên trang chủ – mỗi file là một request. Gộp nhiều script thành một, nhiều stylesheet thành một (<b>không</b> gộp script với CSS). Ví dụ trong sách: trang với script đã gộp tải nhanh hơn <b>38%</b>.' },
      { t: 'warn', x: 'Đừng gộp tất cả vào một file ngay trong môi trường phát triển – code sẽ khó bảo trì. Giữ code <b>module hóa</b>, rồi dùng <b>bước build</b> (kiểu biên dịch) để sinh file gộp (và có thể minify luôn, xem Rule 10).' },
      { t: 'p', x: 'Khó khăn thật sự là số tổ hợp tăng nhanh: 10 script có thể cho hơn một nghìn tổ hợp. Đừng ép mọi trang tải mọi module; thực tế site lớn thường chỉ cần cỡ chục tổ hợp module khác nhau.' }
    ] }
  ],
  summary: [
    'Rule 1 là quy tắc quan trọng nhất: hiệu quả cho cả lần vào đầu và các lần sau.',
    'Image map: nhiều liên kết ảnh → 1 ảnh (nhanh hơn 56%); chỉ hợp ảnh liền kề, hình chữ nhật.',
    'CSS sprite: gộp ảnh, dùng background-position; linh hoạt, thường nhỏ hơn tổng ảnh rời.',
    'data: URL không cần request nhưng IE ≤ 7 không hỗ trợ; đặt trong stylesheet ngoài để được cache.',
    'Gộp script/stylesheet bằng bước build, giữ code gốc module hóa.'
  ],
  cards: [
    ['Rule 1 là gì?', 'Giảm số HTTP request.'],
    ['Image map tăng tốc bao nhiêu trong ví dụ?', 'Khoảng 56% (354 ms so với 799 ms).'],
    ['Hai loại image map?', 'Server-side (gửi tọa độ x,y) và client-side (thẻ MAP).'],
    ['CSS sprite dùng thuộc tính nào?', 'background-position.'],
    ['Điểm hơn của CSS sprite so với image map?', 'Các ảnh không cần liền kề, dùng được cho nền/nút.'],
    ['Ảnh gộp (sprite) thường nhỏ hay lớn hơn tổng ảnh rời?', 'Thường nhỏ hơn vì giảm overhead.'],
    ['data: URL viết thế nào?', 'data:[mediatype][;base64],data'],
    ['Điểm yếu lớn của data: URL thời điểm sách viết?', 'IE ≤ 7 không hỗ trợ.'],
    ['Cách làm cho ảnh inline được cache?', 'Đặt vào stylesheet ngoài (background-image: url(data:…)).'],
    ['Gộp script giúp nhanh hơn bao nhiêu trong ví dụ?', 'Khoảng 38%.'],
    ['Có nên gộp script với stylesheet?', 'Không – gộp script với script, CSS với CSS.'],
    ['Làm sao giữ code module mà vẫn ít request?', 'Dùng bước build để gộp file khi triển khai.']
  ],
  quiz: [
    { q: 'Mục tiêu của Rule 1 là:', o: ['Tăng băng thông', 'Giảm số HTTP request', 'Nén ảnh', 'Dùng CDN'], a: 1, e: 'Mỗi thành phần là một request.' },
    { q: 'Image map giảm request bằng cách:', o: ['Nén ảnh', 'Gắn nhiều URL vào một ảnh', 'Xóa ảnh', 'Cache ảnh'], a: 1, e: 'Chọn URL theo vị trí nhấp.' },
    { q: 'Khác với image map, CSS sprite:', o: ['Cần các ảnh liền kề', 'Không cần ảnh liền kề', 'Chỉ chạy trên IE', 'Không giảm request'], a: 1, e: 'Chỉ cần đặt đúng background-position.' },
    { q: 'Điểm yếu của data: URL (thời đó):', o: ['Không có trong HTML', 'IE ≤ 7 không hỗ trợ', 'Chỉ dùng cho PNG', 'Luôn chậm hơn'], a: 1, e: 'Cộng với base64 làm phình dữ liệu.' },
    { q: 'Làm sao để ảnh data: được cache giữa các trang?', o: ['Đặt trong HTML', 'Đặt trong stylesheet ngoài', 'Dùng POST', 'Không thể'], a: 1, e: 'Stylesheet ngoài được cache.' },
    { q: 'Nên gộp file ở giai đoạn nào?', o: ['Khi viết code', 'Ở bước build/triển khai', 'Khi người dùng truy cập', 'Không bao giờ'], a: 1, e: 'Giữ module hóa khi phát triển.' },
    { q: '10 script có thể tạo ra bao nhiêu tổ hợp?', o: ['Dưới 10', 'Hơn một nghìn', 'Đúng 100', 'Không đổi'], a: 1, e: 'Vì vậy chỉ gộp theo nhóm module thực sự dùng.' }
  ],
  match: [
    ['Image map', 'Một ảnh, nhiều URL'],
    ['CSS sprite', 'background-position trượt trên ảnh gộp'],
    ['data: URL', 'Ảnh nhúng trong URL (base64)'],
    ['Bước build', 'Gộp & minify script/CSS khi triển khai'],
    ['Stylesheet ngoài + data:', 'Ảnh inline có cache'],
    ['38%', 'Mức nhanh hơn khi gộp script trong ví dụ']
  ]
});
})();
