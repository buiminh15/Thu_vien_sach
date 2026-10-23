window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.hpws = BOOK_DATA.hpws || { chapters: [] };
BOOK_DATA.hpws.chapters.push({
  n: 4,
  title: 'Rule 2: Dùng mạng phân phối nội dung (CDN)',
  intro: 'Băng thông người dùng tăng mỗi năm, nhưng khoảng cách tới server vẫn ảnh hưởng thời gian tải. Thay vì thiết kế lại cả ứng dụng để chạy phân tán, hãy bắt đầu bằng việc phân tán các thành phần tĩnh ra nhiều địa điểm bằng CDN – lợi nhiều hơn mà làm dễ hơn.',
  sections: [
    { icon: '🌍', title: 'Vì sao bắt đầu từ thành phần tĩnh?', blocks: [
      { t: 'p', x: 'Startup thường đặt toàn bộ server ở một nơi. Khi lớn lên, một nơi không còn đủ. Nhưng đừng vội thiết kế lại ứng dụng thành kiến trúc phân tán (đồng bộ session, nhân bản giao dịch CSDL…) – việc đó dễ bị trì hoãn mãi.' },
      { t: 'key', x: 'Nhớ Quy tắc vàng: 80–90% thời gian là các thành phần. Đưa <b>server thành phần</b> lại gần người dùng cải thiện <i>nhiều</i> request; đưa server ứng dụng lại gần chỉ cải thiện <i>một</i> request (HTML). Và phân tán thành phần tĩnh lại dễ hơn nhiều.' }
    ] },
    { icon: '🛰️', title: 'CDN là gì và ai cung cấp?', blocks: [
      { t: 'p', x: '<b>CDN (Content Delivery Network)</b> là tập hợp các web server đặt ở nhiều vị trí để giao nội dung hiệu quả hơn. Server phục vụ một người dùng được chọn theo “độ gần mạng” – ví dụ ít hop nhất hoặc phản hồi nhanh nhất. CDN còn có thể tiết kiệm chi phí.' },
      { t: 'list', items: [
        'Nhà cung cấp thương mại: <b>Akamai</b> (dẫn đầu; mua Speedera năm 2005), Mirror Image, Limelight, SAVVIS (chuyên thị trường ngách)…',
        'Miễn phí cho site nhỏ/phi thương mại: Globule (module Apache), CoDeeN (Princeton), CoralCDN (NYU). Cẩn thận loại dùng HTTP redirect để trỏ tới server gần – làm trang chậm (xem Rule 11).',
        'Trong 10 site lớn khảo sát: 4 site không dùng CDN hoặc dùng CDN tự xây; eBay và MySpace dùng hai nhà cung cấp để dự phòng.'
      ] },
      { t: 'tip', x: 'CDN dùng cho <b>nội dung tĩnh</b> (ảnh, script, CSS, Flash). HTML động cần CSDL, session, xác thực… nên vượt quá những gì CDN thường làm.' }
    ] },
    { icon: '⚖️', title: 'Lợi – hại và cách đo', blocks: [
      { t: 'table', head: ['Lợi ích', 'Hạn chế'], rows: [
        ['Giảm thời gian phản hồi (ví dụ trong sách nhanh hơn 18%: 1013 ms so với 1232 ms)', 'Phải trả phí cho nhà cung cấp'],
        ['Có thêm sao lưu, mở rộng lưu trữ, caching', 'Hiệu năng bị ảnh hưởng bởi lưu lượng của khách hàng khác (kể cả đối thủ) dùng chung server'],
        ['Hấp thụ đột biến lưu lượng (thời tiết, tin tài chính, sự kiện thể thao)', 'Không tự kiểm soát server; muốn đổi header phải nhờ nhà cung cấp'],
        ['', 'Nếu CDN chậm thì site bạn cũng chậm']
      ] },
      { t: 'warn', x: '<b>Đo ở đâu?</b> Nếu thử CDN từ văn phòng gần data center của chính bạn thì kết quả “không CDN” gần như tốt nhất, chênh lệch nhỏ. Ở Yahoo! Shopping, thử trong phòng lab chỉ giảm <5%, nhưng khi bật cho người dùng thật trên toàn thế giới, thời gian phản hồi giảm <b>20%</b> chỉ nhờ chuyển thành phần tĩnh sang CDN. Dùng dịch vụ đo từ nhiều nơi (Keynote, Gomez).' }
    ] }
  ],
  summary: [
    'Phân tán thành phần tĩnh bằng CDN trước khi nghĩ đến phân tán ứng dụng.',
    'CDN chọn server theo độ gần mạng; dùng cho ảnh, script, CSS, Flash.',
    'Ví dụ: nhanh hơn 18% (1013 ms vs 1232 ms); Yahoo! Shopping giảm 20% khi bật CDN thật.',
    'Đo hiệu quả từ nhiều địa điểm, không chỉ từ gần server của bạn.',
    'Nhược điểm: chi phí, chia sẻ server, ít quyền kiểm soát, phụ thuộc nhà cung cấp.'
  ],
  cards: [
    ['CDN viết tắt của?', 'Content Delivery Network.'],
    ['Vì sao nên phân tán server thành phần trước server ứng dụng?', 'Ảnh hưởng nhiều request và dễ làm hơn.'],
    ['CDN chọn server cho người dùng theo tiêu chí nào?', 'Độ gần mạng (ít hop hoặc phản hồi nhanh nhất).'],
    ['CDN phục vụ loại nội dung nào?', 'Nội dung tĩnh: ảnh, script, CSS, Flash.'],
    ['Nhà cung cấp CDN dẫn đầu?', 'Akamai (mua Speedera năm 2005).'],
    ['Ba CDN miễn phí nêu trong sách?', 'Globule, CoDeeN, CoralCDN.'],
    ['Ví dụ trong sách nhanh hơn bao nhiêu với CDN?', '18% (1013 ms so với 1232 ms).'],
    ['Yahoo! Shopping giảm bao nhiêu khi chuyển sang CDN?', 'Khoảng 20% thời gian phản hồi.'],
    ['Vì sao thử CDN trong lab ở Yahoo! chỉ thấy <5%?', 'Lab ở gần data center của Yahoo!.'],
    ['Vì sao eBay và MySpace dùng hai CDN?', 'Để dự phòng nếu một nhà cung cấp suy giảm.'],
    ['Một nhược điểm của CDN về header?', 'Muốn đổi HTTP header phải thông qua nhà cung cấp.'],
    ['Dịch vụ đo hiệu năng từ nhiều nơi?', 'Keynote Systems, Gomez.']
  ],
  quiz: [
    { q: 'Bước đầu tiên khuyên làm để đưa nội dung gần người dùng là:', o: ['Viết lại ứng dụng phân tán', 'Phân tán server thành phần tĩnh', 'Nén HTML', 'Bỏ ảnh'], a: 1, e: 'Dễ hơn và lợi hơn.' },
    { q: 'CDN thích hợp nhất cho:', o: ['HTML động có session', 'Ảnh, script, CSS', 'Truy vấn CSDL', 'Xác thực'], a: 1, e: 'Nội dung tĩnh dễ host.' },
    { q: 'Vì sao đo CDN từ văn phòng gần server có thể gây hiểu nhầm?', o: ['Vì CDN chậm hơn ở đó', 'Vì khi chưa dùng CDN kết quả đã gần như tốt nhất', 'Vì mạng văn phòng nhanh nhất', 'Không gây hiểu nhầm'], a: 1, e: 'Phải đo từ nhiều vị trí.' },
    { q: 'Điều nào là nhược điểm của CDN?', o: ['Có sao lưu', 'Chia sẻ server với khách khác', 'Hấp thụ đột biến', 'Gần người dùng hơn'], a: 1, e: 'Lưu lượng người khác có thể ảnh hưởng bạn.' },
    { q: 'CDN miễn phí nào là module Apache?', o: ['CoralCDN', 'Globule', 'CoDeeN', 'Akamai'], a: 1, e: 'Phát triển tại Vrije Universiteit.' },
    { q: 'Cẩn trọng với CDN miễn phí nào sau đây?', o: ['Dùng redirect HTTP để chuyển tới server gần', 'Đổi hostname', 'Cache ảnh', 'Dùng gzip'], a: 0, e: 'Redirect làm trang chậm (Rule 11).' }
  ],
  match: [
    ['Akamai', 'Nhà cung cấp CDN dẫn đầu'],
    ['Globule', 'CDN miễn phí dạng module Apache'],
    ['Keynote / Gomez', 'Đo hiệu năng từ nhiều nơi'],
    ['Thành phần tĩnh', 'Phù hợp để đưa lên CDN'],
    ['20%', 'Mức giảm của Yahoo! Shopping nhờ CDN'],
    ['Hai nhà cung cấp CDN', 'Cách eBay/MySpace dự phòng']
  ]
});
