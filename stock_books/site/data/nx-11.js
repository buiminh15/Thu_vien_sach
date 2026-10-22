// Next.js – Chương 11 (Guides): Triết lý render và Streaming chuyên sâu.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 11,
  title: 'Guides: Triết lý render và Streaming chuyên sâu',
  intro: 'Hai guide nền tảng: <b>Rendering Philosophy</b> (tĩnh và động là một phổ ở cấp component, kéo theo yêu cầu hạ tầng) và <b>Streaming</b> (cách App Router gửi trang, HTTP contract, Web Vitals, và những lớp có thể làm hỏng streaming).',
  sections: [
    { icon: '🎚️', title: 'Tĩnh và động là một phổ', blocks: [
      { t: 'key', x: 'Nhiều framework vạch ranh giới tĩnh/động ở <b>cấp route</b>. Next.js vạch ở <b>cấp component</b>: một trang có thể có <b>static shell</b> hiện tức thì, phần dynamic stream vào khi sẵn sàng, hàm cached nằm trong route động, và trang tĩnh cập nhật không cần redeploy. Đó là ý nghĩa của Partial Prerendering, Cache Components (<code>use cache</code>) và revalidate theo yêu cầu.' },
      { t: 'table', head: ['Mô hình', 'Ưu', 'Nhược'], rows: [
        ['Prerender toàn bộ lúc build', 'Triển khai đơn giản (CDN/file server)', 'Đổi nội dung phải rebuild; động thì fetch phía client'],
        ['Ranh giới cấp route', 'Dễ hiểu, hạ tầng tách rõ (tĩnh→CDN, động→server)', 'Trang gần như tĩnh chỉ có một phần động vẫn phải thành động hoàn toàn'],
        ['<b>Ranh giới cấp component</b> (Next.js)', 'Tĩnh + cached + streaming trong một response; cache theo hàm, revalidate theo tag', 'Chuyển độ phức tạp từ mã ứng dụng sang nền tảng hosting']
      ] },
      { t: 'list', items: [
        '<b>Streaming</b> là bắt buộc vì nội dung tĩnh và động nằm trong một response.',
        '<b>Phối hợp cache</b> khi chạy nhiều instance vì mọi nội dung cache có thể bị vô hiệu bằng <code>revalidateTag/Path</code>.',
        '<b>Nhất quán cache</b>: revalidate tạo lại cả HTML lẫn RSC payload; lệch nhau thì người dùng thấy dữ liệu không đồng nhất khi điều hướng.',
        '<b>PPR ở CDN</b> có thể cần tích hợp nền tảng thêm (lưu static shell riêng, resume phần động).',
        '<b>Functional fidelity</b> (mọi tính năng chạy đúng — qua bộ test adapter, nhị phân) khác <b>performance fidelity</b> (đạt hiệu năng tối ưu, như shell phục vụ ở độ trễ CDN — là một phổ). Một process Node.js đơn lẻ xử lý đúng mọi tính năng.'
      ] }
    ] },
    { icon: '🌊', title: 'Streaming: App Router giao trang thế nào', blocks: [
      { t: 'p', x: 'SSR truyền thống phải tạo xong cả HTML trước khi gửi. Streaming dùng <b>chunked transfer encoding</b> để gửi từng phần khi sẵn sàng; renderer của React tạo HTML theo từng <code>&lt;Suspense&gt;</code> boundary.' },
      { t: 'table', head: ['Thành phần', 'Vai trò'], rows: [
        ['<b>HTML stream</b>', 'Phần tĩnh (layout, nav, fallback) gửi trước; khi boundary xong, React gửi HTML cùng script nhỏ hoán đổi fallback — không cần chờ bundle JS hay hydrate'],
        ['<b>Component payload</b>', 'Biểu diễn serialize cây component để hydrate và cập nhật client. Lần tải đầu nhúng trong HTML; khi điều hướng client chỉ fetch payload (header <code>rsc: 1</code>), không có HTML'],
        ['<b>Static shell</b>', 'Mọi thứ render trước khi có việc async: layout, nav, fallback. Với Cache Components được prerender lúc build và phục vụ từ edge']
      ] },
      { t: 'list', items: [
        '<b>loading.js</b> (cả page, được prefetch làm fallback tức thì) vs <b>Suspense</b> (bất kỳ component, không prefetch mặc định). Ưu tiên Suspense gần chỗ truy cập dữ liệu; nếu không tìm thấy boundary nào, build báo lỗi <i>blocking route</i>. loading.js cao trong cây là boundary hợp lệ nhưng khiến cả trang thành skeleton.',
        '<b>Boundary anh em</b> stream song song độc lập (Revenue 200ms, Orders 1s, Recommendations 3s: mỗi phần hiện khi xong). <b>Boundary lồng nhau</b> tạo hiệu ứng lộ dần chi tiết (header → chi tiết sản phẩm → review).',
        '<b>Đẩy truy cập động xuống</b>: đừng <code>await cookies()/params/searchParams</code> ở đầu layout/page; truyền promise xuống con và await trong Suspense (hoặc <code>params.then(...)</code> inline), để Nav và children vẫn nằm trong shell.',
        '<b>Stream xuống client</b>: bắt đầu fetch ở Server Component, truyền Promise cho Client Component dùng <code>use()</code>; chia sẻ cho nhiều component qua context provider.',
        '<b>Route Handler</b> stream thô bằng Web Streams (<code>ReadableStream</code>): SSE, file lớn (<code>FileHandle.readableWebStream()</code>).',
        '<b>Lỗi giữa chừng</b>: <code>error.js</code> gần nhất thay đúng phần lỗi, phần còn lại giữ nguyên.'
      ] },
      { t: 'widget', name: 'suspense-timeline', title: 'Các Suspense boundary xuất hiện lúc nào?' }
    ] },
    { icon: '📈', title: 'Streaming và Web Vitals', blocks: [
      { t: 'table', head: ['Chỉ số', 'Ảnh hưởng và cách làm'], rows: [
        ['<b>TTFB / FCP</b>', 'TTFB giảm xuống thời gian render layout và fallback; FCP không còn phụ thuộc tốc độ fetch dữ liệu'],
        ['<b>LCP</b>', 'Phần tử LCP trong Suspense không paint được trước khi boundary được hoán đổi. Giữ LCP <b>ngoài/trên</b> boundary; dùng prop <code>preload</code> của next/image cho ảnh LCP (điều khiển thời điểm fetch, không phải thời điểm paint)'],
        ['<b>CLS</b>', 'Skeleton phải <b>khớp kích thước</b> nội dung thật; dùng container fixed/min-height'],
        ['<b>INP</b>', 'Mỗi boundary là một đơn vị hydrate (selective hydration) → chia nhỏ tác vụ, ưu tiên phần người dùng đang tương tác'],
        ['<b>Tài nguyên sớm</b>', 'Shell chứa <code>&lt;link&gt;/&lt;script&gt;</code> ở chunk đầu → CSS/JS/font được tải trong lúc server còn nghĩ']
      ] },
      { t: 'tip', x: 'Quy tắc: nếu có Suspense boundary thì React <i>có thể</i> dùng nó (kể cả khi mạng chậm hoặc CPU bận), nên đừng thêm boundary không cần thiết.' }
    ] },
    { icon: '📬', title: 'HTTP contract và những gì làm hỏng streaming', blocks: [
      { t: 'warn', x: 'Khi streaming bắt đầu, header và <b>status code đã gửi</b> (200 OK) và không đổi được. Nếu <code>notFound()</code> chạy giữa chừng, Next.js chèn <code>&lt;meta name="robots" content="noindex"&gt;</code>; <code>redirect()</code> giữa chừng thành redirect phía client. Muốn status thật thì gọi <code>notFound()</code> <b>trước</b> mọi <code>await</code>/Suspense, hoặc chặn sớm bằng <code>proxy</code> / <code>redirects</code> trong config.' },
      { t: 'list', items: [
        '<b>Bots/crawlers</b>: bot chỉ đọc HTML nhận metadata blocking (chờ <code>generateMetadata</code>); trình duyệt và crawler có DOM nhận metadata stream. Với Cache Components, bot HTML-limited bỏ qua shell prerender và render động — dữ liệu mà shell cần phải có sẵn cả lúc request, nếu không bot có thể nhận 500.',
        '<b>Reverse proxy</b> (Nginx) buffer mặc định → đặt header <code>X-Accel-Buffering: no</code>.',
        '<b>CDN</b> có thể buffer toàn response; <b>serverless</b> như AWS Lambda cần bật response streaming; <b>nén</b> gzip/brotli có thể giữ chunk; <b>Safari</b> buffer đến 1024 byte; <code>curl</code> cần <code>-N</code> và xuống dòng.',
        '<b>Kiểm chứng</b>: tab Network (TTFB sớm + Content Download dài), script đọc <code>res.body.getReader()</code> với <code>Accept-Encoding: identity</code>; so sánh với User-Agent của bot (nhận một cục).',
        '<b>Hỗ trợ</b>: Node.js server và Docker có; static export <b>không</b>; adapters tuỳ nền tảng.'
      ] }
    ] }
  ],
  summary: [
    'Next.js coi tĩnh/động là phổ ở cấp component; hệ quả: streaming, phối hợp cache, nhất quán HTML/RSC, PPR ở CDN.',
    'HTML stream + component payload + static shell; loading.js cho cả page, Suspense cho granular.',
    'Đẩy truy cập động xuống sâu, giữ LCP ngoài Suspense, skeleton khớp kích thước.',
    'Status code cố định sau khi stream; proxy/buffer/CDN/nén/Safari có thể làm mất lợi ích streaming.'
  ],
  cards: [
    ['Ranh giới tĩnh/động của Next.js ở đâu?', 'Cấp component, không phải cấp route.'],
    ['Functional vs performance fidelity?', 'Mọi tính năng chạy đúng (nhị phân) vs đạt hiệu năng tối ưu (một phổ).'],
    ['Vì sao cần phối hợp cache nhiều instance?', 'Cache có thể bị vô hiệu theo tag/path bất kỳ lúc nào.'],
    ['Streaming dùng cơ chế HTTP nào?', 'Chunked transfer encoding.'],
    ['Component payload để làm gì?', 'Hydrate và cập nhật client; điều hướng client chỉ fetch payload (rsc: 1).'],
    ['Static shell gồm gì?', 'Layout, nav và fallback của Suspense — mọi thứ render trước việc async.'],
    ['loading.js vs Suspense?', 'Cả page + prefetch được vs granular, không prefetch mặc định.'],
    ['Không có boundary nào cho nội dung động?', 'Build báo lỗi blocking route.'],
    ['Cách mở rộng static shell?', 'Truyền promise xuống, await trong Suspense ở component con.'],
    ['Giữ LCP nhanh?', 'Đặt LCP ngoài/trên Suspense; ảnh LCP dùng preload.'],
    ['Skeleton giúp CLS thế nào?', 'Kích thước khớp nội dung thật nên không dịch bố cục.'],
    ['Vì sao status code không đổi được?', 'Header đã gửi với chunk đầu tiên (200).'],
    ['Làm sao có 404 thật?', 'Gọi notFound() trước await/Suspense, hoặc dùng proxy/redirects.'],
    ['Nginx làm hỏng streaming?', 'Buffer mặc định; đặt X-Accel-Buffering: no.'],
    ['Static export có streaming không?', 'Không.']
  ],
  quiz: [
    { q: 'Next.js đặt ranh giới tĩnh/động ở:', o: ['Cấp route', 'Cấp component', 'Cấp file', 'Cấp server'], a: 1, e: 'Cho phép static shell + phần stream.' },
    { q: 'Điều hướng client chỉ tải:', o: ['HTML đầy đủ', 'Component payload', 'CSS', 'Không gì'], a: 1, e: 'Header rsc: 1.' },
    { q: 'Boundary sibling trong Suspense:', o: ['Chặn nhau', 'Stream độc lập', 'Chạy tuần tự', 'Bị gộp'], a: 1, e: 'Mỗi phần hiện khi xong.' },
    { q: 'Để Nav và children vẫn vào static shell, nên:', o: ['await cookies() ở đầu layout', 'Truyền promise xuống và await trong Suspense', 'Tắt cache', 'Dùng use client'], a: 1, e: 'Đẩy truy cập động xuống.' },
    { q: 'LCP nên đặt:', o: ['Trong Suspense sâu', 'Ngoài/trên Suspense', 'Trong useEffect', 'Trong proxy'], a: 1, e: 'Để paint cùng shell.' },
    { q: 'Skeleton nên:', o: ['Khác kích thước', 'Khớp kích thước nội dung thật', 'Ẩn', 'Rất nhỏ'], a: 1, e: 'Giảm CLS.' },
    { q: 'notFound() sau khi stream đã bắt đầu:', o: ['Đổi status 404', 'Chèn meta noindex, status vẫn 200', 'Lỗi build', 'Bị bỏ qua'], a: 1, e: 'Header đã gửi.' },
    { q: 'Header tắt buffer của Nginx:', o: ['X-Accel-Buffering: no', 'Cache-Control', 'X-Stream', 'Connection: close'], a: 0, e: 'Reverse proxy buffer mặc định.' },
    { q: 'Safari buffer streaming đến:', o: ['100 byte', '1024 byte', '1 MB', 'Không buffer'], a: 1, e: 'Chỉ ảnh hưởng demo nhỏ.' },
    { q: 'Static export hỗ trợ streaming?', o: ['Có', 'Không', 'Một phần', 'Chỉ dev'], a: 1, e: 'Cần server.' },
    { q: 'Mỗi Suspense boundary là một:', o: ['Route', 'Đơn vị hydrate', 'Cache key', 'Layout'], a: 1, e: 'Selective hydration giúp INP.' }
  ],
  match: [
    ['Static shell', 'Layout + fallback gửi ngay'],
    ['rsc: 1', 'Yêu cầu component payload'],
    ['loading.js', 'Suspense cho cả page'],
    ['X-Accel-Buffering', 'Tắt buffer Nginx'],
    ['preload (next/image)', 'Fetch sớm ảnh LCP'],
    ['Functional fidelity', 'Mọi tính năng chạy đúng'],
    ['Selective hydration', 'Hydrate theo boundary']
  ]
});
