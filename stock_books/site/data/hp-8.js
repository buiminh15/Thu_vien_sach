window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 8,
  title: 'Rule 6: Đặt script ở cuối trang',
  intro: 'Stylesheet nên lên đầu; script thì ngược lại – nên xuống cuối. Script ở đầu trang chặn cả hiển thị tiến dần lẫn tải song song. Chương này giải thích “tải song song” hoạt động thế nào và vì sao script phá nó.',
  sections: [
    { icon: '🔀', title: 'Tải song song và hostname', blocks: [
      { t: 'p', x: 'Số thành phần trong trang ảnh hưởng thời gian nhiều nhất. Vậy sao trình duyệt tải song song mà số request vẫn quan trọng? Vì HTTP/1.1 khuyến nghị <b>tối đa 2 kết nối song song cho mỗi hostname</b>. Trang tải mọi thứ từ một hostname sẽ có hình “bậc thang”.' },
      { t: 'list', items: [
        'Chia đều thành phần cho <b>2 hostname</b> → 4 tải song song → thời gian gần <b>một nửa</b>.',
        'IE và Firefox theo mặc định giới hạn 2/hostname nhưng người dùng đổi được (Registry với IE; <code>network.http.max-persistent-connections-per-server</code> trong about:config với Firefox). Với HTTP/1.0 Firefox mặc định tải <b>8</b> song song mỗi hostname.',
        'Kỹ sư frontend có thể dùng <b>CNAME</b> (alias DNS) để chia thành phần ra nhiều hostname. Nhưng quá nhiều tải song song có thể làm chậm tuỳ băng thông và CPU: nghiên cứu ở Yahoo! cho thấy chia ra <b>hai</b> hostname tốt hơn một hoặc bốn hoặc nhiều hơn.'
      ] }
    ] },
    { icon: '⛔', title: 'Script chặn mọi thứ', blocks: [
      { t: 'p', x: 'Trong lúc một script đang tải, trình duyệt <b>không bắt đầu tải thêm gì</b> – kể cả trên hostname khác. Hai lý do:' },
      { t: 'steps', items: [
        'Script có thể dùng <code>document.write</code> để thay đổi nội dung trang, nên trình duyệt phải chờ.',
        'Phải đảm bảo <b>thực thi đúng thứ tự</b>: nếu tải song song, script nhỏ sau có thể về trước script lớn trước, gây lỗi khi chúng phụ thuộc nhau.'
      ] },
      { t: 'p', x: 'Thí nghiệm (script cố tình mất 10 giây): sau khi tải ảnh 1 từ host1 và host2, trong lúc script chạy tải thì ảnh thứ 2 của cả hai host bị chặn, chỉ tiếp tục khi script xong.' },
      { t: 'table', head: ['Tác động', 'Giải thích'], rows: [
        ['Thành phần bên dưới script bị chặn tải', 'Dù ở hostname khác'],
        ['Nội dung bên dưới script không hiển thị', 'Nếu script ở đầu, cả trang trắng cho đến khi script xong (giống vấn đề màn hình trắng ở Rule 5)'],
        ['Ảnh hiển thị muộn hơn', 'Do mất song song']
      ] },
      { t: 'key', x: 'Với stylesheet: chặn render phần bên dưới <i>cho đến khi stylesheet về</i> nên đặt CSS lên trước. Với script: chặn <i>cả</i> render <i>lẫn</i> tải bên dưới nên đặt script xuống cuối.' }
    ] },
    { icon: '⬇️', title: 'Giải pháp và ngoại lệ', blocks: [
      { t: 'p', x: 'Đặt script ở <b>cuối trang</b>: nội dung hiển thị không bị chặn và các thành phần nhìn thấy được tải sớm nhất có thể. Nhiều script cộng dồn càng làm hiệu ứng tệ hơn.' },
      { t: 'warn', x: 'Không phải lúc nào cũng dời được: nếu script dùng <code>document.write</code> chèn một phần nội dung thì không dời xuống thấp hơn được; cũng có thể có vấn đề phạm vi (scope). Thường vẫn có cách xoay xở.' },
      { t: 'p', x: '<b>Thuộc tính DEFER</b> báo rằng script không có document.write nên trình duyệt có thể tiếp tục render. Nhưng thực tế ở Firefox script defer vẫn chặn render và tải song song; ở IE, thành phần bên dưới chỉ được tải muộn hơn một chút. Nếu script defer được thì cũng đặt được xuống cuối.' }
    ] }
  ],
  summary: [
    'Trình duyệt chỉ tải ~2 thành phần song song mỗi hostname (HTTP/1.1); chia ra 2 hostname là hợp lý.',
    'Script đang tải chặn mọi tải khác, kể cả hostname khác; cũng chặn render phần bên dưới.',
    'Đặt script ở cuối trang để hiển thị tiến dần và tải song song.',
    'DEFER chưa đáng tin (Firefox vẫn chặn); script không dời được thường do document.write.'
  ],
  cards: [
    ['Rule 6 là gì?', 'Đặt script ở cuối trang.'],
    ['HTTP/1.1 khuyến nghị bao nhiêu kết nối song song mỗi hostname?', '2.'],
    ['Firefox với HTTP/1.0 mặc định tải song song bao nhiêu?', '8 thành phần mỗi hostname.'],
    ['Cách chia thành phần ra nhiều hostname?', 'Dùng CNAME (alias DNS).'],
    ['Theo Yahoo!, nên chia ra mấy hostname?', 'Hai (tốt hơn một hoặc nhiều hơn).'],
    ['Vì sao script chặn tải song song?', 'Script có thể document.write và phải chạy đúng thứ tự.'],
    ['Script ở đầu trang gây hậu quả gì?', 'Cả trang bị chặn render và tải cho đến khi script xong.'],
    ['Thuộc tính DEFER có đáng tin không?', 'Không hoàn toàn – Firefox vẫn chặn.'],
    ['Vì sao một số script không dời xuống cuối được?', 'Dùng document.write chèn nội dung hoặc vướng scope.'],
    ['Stylesheet và script khác nhau thế nào về vị trí?', 'CSS lên đầu; script xuống cuối.'],
    ['Thời gian script thí nghiệm trong sách?', '10 giây, cố tình để thấy rõ chặn.'],
    ['Chia hostname quá nhiều có hại gì?', 'Quá nhiều tải song song có thể làm giảm hiệu năng (CPU, băng thông).']
  ],
  quiz: [
    { q: 'Trong lúc tải script, trình duyệt:', o: ['Tải thêm trên hostname khác', 'Không bắt đầu tải thêm gì', 'Chỉ tải ảnh', 'Chuyển sang HTTP/1.0'], a: 1, e: 'Kể cả hostname khác.' },
    { q: 'Vì sao phải thực thi script đúng thứ tự?', o: ['Để đẹp', 'Vì script có thể phụ thuộc nhau', 'Do CDN', 'Do cache'], a: 1, e: 'Script nhỏ có thể về trước script lớn.' },
    { q: 'Nơi đặt script khuyến nghị:', o: ['Đầu HEAD', 'Cuối trang', 'Giữa body', 'Trong CSS'], a: 1, e: 'Giữ hiển thị tiến dần.' },
    { q: 'Giới hạn mặc định của HTTP/1.1 trên mỗi hostname:', o: ['1', '2', '4', '8'], a: 1, e: 'Theo khuyến nghị đặc tả.' },
    { q: 'Script nào KHÔNG dời xuống cuối được?', o: ['Script không phụ thuộc', 'Script dùng document.write chèn nội dung', 'Script analytics', 'Script defer'], a: 1, e: 'Chèn nội dung ngay tại vị trí.' },
    { q: 'Thuộc tính DEFER ở Firefox thời đó:', o: ['Không chặn gì', 'Vẫn chặn render và tải', 'Làm trang nhanh gấp đôi', 'Bị cấm'], a: 1, e: 'Không đáng tin để thay thế việc dời xuống cuối.' }
  ],
  match: [
    ['2 / hostname', 'Giới hạn tải song song theo HTTP/1.1'],
    ['CNAME', 'Alias DNS để tạo thêm hostname'],
    ['document.write', 'Lý do script chặn render'],
    ['DEFER', 'Gợi ý script không chặn, chưa đáng tin'],
    ['Script cuối trang', 'Cho phép hiển thị tiến dần'],
    ['8 / hostname', 'Mặc định Firefox với HTTP/1.0']
  ]
});
