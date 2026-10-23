(function () {
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + '</code></pre>';
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 14,
  title: 'Rule 12: Loại bỏ script trùng lặp',
  intro: 'Nạp cùng một file JavaScript hai lần trong một trang làm trang chậm hơn — và lỗi này phổ biến hơn bạn nghĩ: trong 10 site lớn, CNN và YouTube đều có script trùng. Chương này giải thích tác hại và cách phòng tránh bằng một module quản lý script.',
  sections: [
    { icon: '🔁', title: 'Vì sao script bị trùng?', blocks: [
      { t: 'p', x: 'Hai yếu tố làm tăng nguy cơ: <b>nhiều nhóm</b> cùng đóng góp HTML vào trang và <b>nhiều script</b> trong trang.' },
      { t: 'list', items: [
        'Site lớn có nhiều đội: đội chính, đội quảng cáo, thương hiệu (logo, header, footer), nguồn dữ liệu (tin, tỷ số, lịch TV…). Hai lập trình viên cùng cần thao tác cookie và mỗi người đều chèn <code>cookies.js</code> mà không biết người kia đã chèn.',
        'Số script trung bình của 10 site lớn trên 6; hai site trùng đều có số script cao hơn trung bình (CNN 11, YouTube 7). Càng nhiều script càng dễ trùng.'
      ] }
    ] },
    { icon: '🐢', title: 'Tác hại', blocks: [
      { t: 'table', head: ['Tác hại', 'Khi nào', 'Chi tiết'], rows: [
        ['<b>Request HTTP thừa</b>', 'Chỉ ở IE', 'Nếu script không cache được, IE gửi 2 request cho cùng file. Rule 3 (Expires xa) tránh được; nhưng khi script <i>có</i> cache mà người dùng bấm <b>Refresh</b> thì vẫn có 2 conditional GET.'],
        ['<b>Thực thi lại nhiều lần</b>', 'Cả Firefox lẫn IE, dù có cache hay không', 'Script được đánh giá (evaluate) hai lần — ví dụ biến đếm tăng 2; chèn 10 lần thì thực thi 10 lần, và nạp lại trang gây 10 request.']
      ] },
      { t: 'warn', x: 'Nhớ lại Rule 6: tải script đã đặc biệt tốn kém vì chặn tải song song. Một request script thừa làm tác hại tăng gấp đôi.' }
    ] },
    { icon: '🧰', title: 'Module quản lý script', blocks: [
      { t: 'p', x: 'Cách phòng tránh: dùng <b>module quản lý script</b> trong hệ thống template thay vì tự viết thẻ <code>&lt;script&gt;</code>. Trong PHP, ví dụ hàm <code>insertScript($jsfile)</code> làm ba việc:' },
      { t: 'steps', items: [
        '<b>Chống trùng:</b> lần đầu chèn thì ghi vào danh sách <code>alreadyInserted</code> của trang; lần sau thấy đã có thì không in lại.',
        '<b>Xử lý phụ thuộc:</b> nếu <code>menu.js</code> cần <code>events.js</code> và <code>utils.js</code> thì chèn các script tiên quyết trước (lưu quan hệ bằng hash hoặc CSDL; site lớn có thể tự động quét tìm định nghĩa symbol).',
        '<b>Quản lý phiên bản:</b> <code>getVersion($jsfile)</code> trả tên file kèm version (ví dụ <code>menu_1.0.17.js</code>) — đúng điều Rule 3 yêu cầu khi dùng Expires xa. Chỉ cần cập nhật getVersion là mọi trang dùng tên mới ngay.'
      ] },
      { t: 'p', x: C(`function insertScript($jsfile) {
  if (alreadyInserted($jsfile)) return;
  pushInserted($jsfile);
  foreach (dependencies($jsfile) as $dep) insertScript($dep);
  echo '<script type="text/javascript" src="' . getVersion($jsfile) . '"></script>';
}`) },
      { t: 'tip', x: 'Đoạn trên là bản rút gọn theo ý tưởng của sách (chống trùng + phụ thuộc + version).' }
    ] }
  ],
  summary: [
    'Script trùng làm chậm: IE tạo request thừa nếu không cache (hoặc khi Refresh); cả hai trình duyệt chạy lại script.',
    'Nguyên nhân: nhiều nhóm cùng chèn HTML và nhiều script trên trang.',
    'Dùng module quản lý script: chống trùng, xử lý phụ thuộc, quản lý phiên bản tên file.'
  ],
  cards: [
    ['Rule 12 nói gì?', 'Không nạp cùng một script hai lần trong trang.'],
    ['Site lớn nào có script trùng trong khảo sát?', 'CNN và YouTube.'],
    ['Hai yếu tố làm tăng nguy cơ trùng?', 'Nhiều nhóm đóng góp HTML; nhiều script trong trang.'],
    ['Script trùng gây request thừa ở trình duyệt nào?', 'Chỉ Internet Explorer (khi script không cache).'],
    ['Khi script có cache mà bấm Refresh?', 'Vẫn có 2 conditional GET cho script trùng.'],
    ['Script trùng còn gây gì ở cả Firefox lẫn IE?', 'Script bị thực thi nhiều lần.'],
    ['Giải pháp phòng tránh?', 'Module quản lý script trong hệ thống template.'],
    ['insertScript xử lý những gì?', 'Chống trùng, phụ thuộc, phiên bản.'],
    ['getVersion làm gì?', 'Trả tên file kèm số phiên bản (vd menu_1.0.17.js).'],
    ['Vì sao quan trọng liên quan Rule 3?', 'Expires xa yêu cầu đổi tên file khi nội dung đổi.']
  ],
  quiz: [
    { q: 'Script trùng gây request thừa ở:', o: ['Firefox', 'IE', 'Cả hai', 'Không'], a: 1, e: 'Khi không cacheable.' },
    { q: 'Tác hại xảy ra ở cả hai trình duyệt:', o: ['Request thừa', 'Thực thi nhiều lần', 'Mất cache', 'Sai gzip'], a: 1, e: 'Dù có cache.' },
    { q: 'Vì sao hay bị trùng ở site lớn?', o: ['Server lỗi', 'Nhiều đội cùng chèn script', 'CDN', 'DNS'], a: 1, e: 'Cookies.js ví dụ.' },
    { q: 'insertScript KHÔNG làm gì?', o: ['Chống trùng', 'Xử lý phụ thuộc', 'Quản lý version', 'Nén ảnh'], a: 3, e: 'Chỉ quản lý chèn script.' },
    { q: 'Bấm Refresh với script trùng đã cache sẽ tạo:', o: ['0 request', '1 request', '2 conditional GET', '10 request'], a: 2, e: 'Cho ví dụ có 2 lần chèn.' },
    { q: 'Số script của CNN trong sách:', o: ['3', '7', '11', '20'], a: 2, e: 'YouTube là 7.' }
  ],
  match: [
    ['CNN, YouTube', 'Hai site có script trùng'],
    ['alreadyInserted', 'Danh sách script đã chèn trong trang'],
    ['getVersion', 'Gắn version vào tên file'],
    ['Refresh', 'Gây 2 conditional GET với script trùng'],
    ['Dependencies', 'Script tiên quyết phải chèn trước'],
    ['menu_1.0.17.js', 'Ví dụ tên file có phiên bản']
  ]
});
})();
