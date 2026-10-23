window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 7,
  title: 'Rule 5: Đặt stylesheet ở đầu trang',
  intro: 'Một nhóm Yahoo! từng dời CSS của một tính năng phụ xuống cuối trang để “tải sau” – kết quả trang chậm hơn trên IE. Bài học: quy tắc này ít liên quan tới thời gian tải thật của file, mà liên quan tới cách trình duyệt hiển thị trang theo thứ tự các thành phần – tức <b>hiển thị tiến dần (progressive rendering)</b>.',
  sections: [
    { icon: '🖼️', title: 'Hiển thị tiến dần quan trọng thế nào?', blocks: [
      { t: 'p', x: 'Dân tối ưu muốn trang <b>tải dần dần</b>: có gì hiển thị cái đó càng sớm càng tốt, nhất là khi trang dài hoặc mạng chậm. Jakob Nielsen nhấn mạnh phản hồi trực quan (progress indicator) giúp người dùng yên tâm hệ thống không treo, biết phải đợi bao lâu, và có thứ để nhìn cho đỡ chán. Ở đây, <b>chính trang HTML là progress indicator</b>: header, thanh điều hướng, logo hiện ra trước.' },
      { t: 'key', x: 'Nếu stylesheet nằm gần cuối tài liệu, nhiều trình duyệt <b>chặn hiển thị</b> để khỏi phải vẽ lại phần tử khi style đổi. Trang “có cảm giác chậm” lại chính là trang tải các thành phần nhìn thấy sớm hơn – nhưng trình duyệt giấu chúng đến khi stylesheet cuối trang về.' }
    ] },
    { icon: '⬜', title: 'Màn hình trắng và FOUC', blocks: [
      { t: 'p', x: 'Khi gặp stylesheet đến muộn, trình duyệt có hai lựa chọn xấu:' },
      { t: 'table', head: ['Lựa chọn', 'Hậu quả', 'Ai làm?'], rows: [
        ['Chặn hiển thị cho đến khi có stylesheet', '<b>Màn hình trắng</b> (blank white screen); rồi mọi thứ hiện cùng lúc', 'IE trong các trường hợp: mở cửa sổ mới, nhấn Refresh, đặt làm trang chủ (nhấp link/bookmark/gõ URL thì IE chọn cách 2)'],
        ['Vẽ ngay rồi vẽ lại khi style tới', '<b>FOUC</b> – Flash of Unstyled Content: nội dung hiện “trần” rồi bỗng đổi diện mạo', 'Firefox (luôn chọn cách này)']
      ] },
      { t: 'warn', x: 'Màn hình trắng là lúc người dùng bỏ trang, đi sang đối thủ. Hơn nữa lỗi này khó lần ra vì chỉ xuất hiện ở IE và tuỳ cách trang được tải (thỉnh thoảng mới chậm).' },
      { t: 'p', x: 'Cách xử lý đúng chuẩn: theo <b>đặc tả HTML 4</b>, thẻ <code>LINK</code> chỉ được nằm trong <code>HEAD</code>. Trình duyệt vẫn render nếu bạn vi phạm, nhưng đang “nhích” cộng đồng web theo đúng đặc tả; vi phạm sẽ đối mặt với trải nghiệm kém.' }
    ] },
    { icon: '🔗', title: 'LINK hay @import?', blocks: [
      { t: 'list', items: [
        '<code>&lt;link rel="stylesheet" href="x.css"&gt;</code> hoặc <code>&lt;style&gt;@import url(x.css);&lt;/style&gt;</code> – hai cách nhúng CSS.',
        '<code>@import</code> luôn phải đứng trước các rule khác; hay bị bỏ sót và khó dò lỗi.',
        'Quan trọng nhất: dùng <code>@import</code> gây hiện tượng màn hình trắng <b>ngay cả khi đặt ở HEAD</b>, vì stylesheet bị tải <i>sau cùng</i> (thứ tự tải bất ngờ). Trong thí nghiệm, trang css-top-import.php tải stylesheet cuối và cũng bị trắng giống css-bottom.php.'
      ] },
      { t: 'key', x: '<b>Đặt stylesheet trong HEAD bằng thẻ LINK.</b> Nếu CSS không cần để hiển thị trang ban đầu, hãy nạp động sau khi tài liệu tải xong (post-onload download – Rule 8).' }
    ] },
    { icon: '🧪', title: 'Công cụ thí nghiệm sleep.cgi', blocks: [
      { t: 'p', x: 'Tác giả viết chương trình Perl <code>sleep.cgi</code> để làm chậm có chủ đích từng thành phần, phơi bày tác động của việc chặn. Tham số: số giây trễ (<code>sleep</code>), loại thành phần (gif, js, css, html, swf), <code>expires</code> (−1 quá khứ, 0 không có, 1 tương lai), <code>last</code> (Last-Modified), và <code>redirect</code>.' },
      { t: 'tip', x: 'Phát hiện thú vị: ở ba trang thử (CSS cuối, CSS ở đầu, CSS ở đầu bằng @import) tổng thời gian tải thật như nhau (~7,3 giây), nhưng trang CSS-ở-đầu-bằng-LINK <i>cảm giác</i> nhanh hơn rõ rệt vì hiển thị tiến dần.' }
    ] }
  ],
  summary: [
    'Đặt stylesheet ở HEAD (thẻ LINK) để trang hiển thị tiến dần.',
    'CSS đặt cuối trang → IE hiện màn hình trắng, Firefox bị FOUC.',
    '@import cũng gây màn hình trắng vì CSS bị tải cuối; ưu tiên LINK.',
    'Tổng thời gian tải không đổi, chỉ cảm nhận của người dùng thay đổi.',
    'CSS không cần cho lần render đầu: nạp động sau onload.'
  ],
  cards: [
    ['Rule 5 là gì?', 'Đặt stylesheet ở đầu trang (trong HEAD).'],
    ['Progressive rendering là gì?', 'Trình duyệt hiển thị nội dung dần dần ngay khi có.'],
    ['Vì sao trình duyệt chặn render khi CSS đến muộn?', 'Để tránh phải vẽ lại phần tử khi style thay đổi.'],
    ['FOUC là gì?', 'Flash of Unstyled Content – nội dung hiện chưa có style rồi đổi diện mạo.'],
    ['Trình duyệt nào hay bị màn hình trắng ở thí nghiệm?', 'Internet Explorer (mở cửa sổ mới, Refresh, trang chủ).'],
    ['Firefox xử lý thế nào?', 'Luôn vẽ tiến dần, dẫn tới FOUC khi CSS cần thiết đến muộn.'],
    ['Thẻ LINK theo HTML spec được đặt ở đâu?', 'Chỉ trong HEAD.'],
    ['@import có vấn đề gì?', 'Tải CSS sau cùng → màn hình trắng, kể cả ở HEAD.'],
    ['sleep.cgi là gì?', 'Chương trình Perl CGI làm chậm có chủ đích thành phần để thử nghiệm.'],
    ['Ba trang thử có tổng thời gian tải thế nào?', 'Đều ~7,3 giây, nhưng cảm giác khác nhau.'],
    ['Ai cung cấp lý thuyết về phản hồi trực quan?', 'Jakob Nielsen (progress indicator).'],
    ['Chuyện Yahoo! portal dạy ta điều gì?', 'Dời CSS xuống cuối làm trang chậm hơn; để ở HEAD mới tối ưu.']
  ],
  quiz: [
    { q: 'Stylesheet nên đặt ở:', o: ['Cuối body', 'HEAD bằng LINK', 'Giữa body', 'Trong JavaScript'], a: 1, e: 'Cho phép hiển thị tiến dần.' },
    { q: 'FOUC xảy ra khi:', o: ['Trang hiện trước khi có style rồi đổi diện mạo', 'CSS bị lỗi cú pháp', 'Không có CSS', 'Server chậm'], a: 0, e: 'Flash of Unstyled Content.' },
    { q: 'Màn hình trắng ở IE xảy ra ở trường hợp nào?', o: ['Nhấp link', 'Mở cửa sổ mới / Refresh / đặt làm trang chủ', 'Gõ URL', 'Dùng bookmark'], a: 1, e: 'Các trường hợp còn lại IE chọn FOUC.' },
    { q: 'Vì sao @import ở HEAD vẫn lỗi?', o: ['Cú pháp sai', 'CSS bị tải cuối cùng', 'Không được hỗ trợ', 'Làm HTML nặng'], a: 1, e: 'Thứ tự tải bất ngờ.' },
    { q: 'Trang CSS-ở-cuối so với CSS-ở-đầu về tổng thời gian tải:', o: ['Chậm hơn nhiều', 'Gần như bằng nhau', 'Nhanh hơn nhiều', 'Không đo được'], a: 1, e: 'Chỉ cảm nhận người dùng khác.' },
    { q: 'Tham số sleep.cgi dùng để đặt độ trễ là:', o: ['type', 'expires', 'sleep', 'last'], a: 2, e: 'Đơn vị giây.' }
  ],
  match: [
    ['Màn hình trắng', 'IE chặn render đến khi có CSS'],
    ['FOUC', 'Firefox vẽ trước, đổi style sau'],
    ['LINK trong HEAD', 'Cách nhúng CSS đúng khuyến nghị'],
    ['@import', 'CSS bị tải cuối, gây chặn render'],
    ['sleep.cgi', 'Công cụ làm chậm thành phần để thử'],
    ['Progressive rendering', 'Hiển thị tiến dần cho người dùng']
  ]
});
