// Next.js – Chương 7: Caching và Revalidating (Cache Components).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 7,
  title: 'Caching và Revalidating (Cache Components)',
  intro: 'Mô hình cache hiện đại của Next.js dựa trên <b>Cache Components</b> (<code>cacheComponents: true</code>): directive <code>use cache</code>, <code>cacheLife</code>, <code>cacheTag</code>, kết hợp <b>Partial Prerendering</b> để một trang có phần tĩnh, phần cache và phần stream lúc request. Chương này cũng nói về revalidate theo thời gian và theo yêu cầu.',
  sections: [
    { icon: '⚙️', title: 'Bật Cache Components', blocks: [
      { t: 'p', x: 'Ứng dụng mới tạo bằng mặc định đã bật <code>cacheComponents</code> và <code>partialPrefetching</code>. Với dự án có sẵn, đặt trong <code>next.config.ts</code>:' },
      { t: 'p', x: '<code>const nextConfig = { cacheComponents: true, partialPrefetching: true }</code>' },
      { t: 'tip', x: 'Hãy đặt <code>partialPrefetching</code> tường minh (để trống sẽ có cảnh báo); đặt <code>false</code> chỉ khi đang di chuyển ứng dụng đã dùng Cache Components từ trước. Cả hai sẽ bật ở mọi nơi trong bản major tiếp theo. Nếu không dùng Cache Components, xem guide “Caching and Revalidating (Previous Model)”.' }
    ] },
    { icon: '🗄️', title: "Directive 'use cache'", blocks: [
      { t: 'list', items: [
        '<b>Cấp dữ liệu</b>: đặt <code>\'use cache\'</code> ở đầu hàm lấy dữ liệu (<code>getUsers()</code>).',
        '<b>Cấp UI</b>: đặt ở đầu component/page/layout; đặt đầu file thì mọi export đều được cache.',
        'Tham số và giá trị bắt từ scope cha tự thành <b>cache key</b>, nên input khác → entry khác.',
        'Nên đi cùng <code>cacheLife</code>; nếu không sẽ dùng profile <code>default</code>.'
      ] },
      { t: 'h3', x: 'Dữ liệu runtime và chưa cache' },
      { t: 'list', items: [
        '<b>Dữ liệu cần tươi mỗi request</b>: không dùng use cache; bọc component trong <code>&lt;Suspense fallback&gt;</code>. Fallback nằm trong static shell, nội dung stream lúc request. Thiếu Suspense, dev overlay báo <b>blocking-route</b>.',
        '<b>Runtime APIs</b>: <code>cookies</code>, <code>headers</code>, <code>searchParams</code>, <code>params</code> (dùng <code>generateStaticParams</code> để prerender sẵn một số giá trị). Component dùng chúng nên được bọc trong Suspense.',
        'Trích giá trị từ runtime API rồi <b>truyền làm tham số</b> cho hàm/component cached: giá trị vào cache key. Mặc định cache trong bộ nhớ (không bền trên serverless); <code>\'use cache: remote\'</code> cho cache bền chia sẻ; <code>\'use cache: private\'</code> cho hàm đọc trực tiếp cookies/headers, kết quả chỉ nằm ở trình duyệt.'
      ] },
      { t: 'key', x: 'Trang mẫu: header tĩnh (prerender tự động) + <code>&lt;BlogPosts&gt;</code> với <code>use cache</code> + <code>cacheLife(\'hours\')</code> + <code>cacheTag(\'posts\')</code> (vào static shell) + <code>&lt;UserPreferences&gt;</code> đọc cookie trong Suspense (stream lúc request). Đọc <code>cookies()</code> không còn biến cả route thành dynamic như mô hình cũ.' }
    ] },
    { icon: '🎲', title: 'Giá trị ngẫu nhiên, thời gian và giá trị dự đoán được', blocks: [
      { t: 'p', x: '<code>Math.random()</code>, <code>Date.now()</code>, <code>crypto.randomUUID()</code> cho giá trị khác nhau mỗi lần nên phải xử lý tường minh (<code>performance.now()</code> thì không bị chặn):' },
      { t: 'list', items: [
        '<b>Mỗi request một giá trị</b>: <code>await connection()</code> (từ <code>next/server</code>) trước thao tác đó + bọc Suspense.',
        '<b>Chia sẻ cho mọi người</b>: cache kết quả bằng <code>use cache</code> cho đến khi revalidate.',
        '<b>Dự đoán được</b> (import module, <code>fs.readFileSync</code>, tính toán thuần): prerender tự động vào static shell. File cấu hình giống nhau mọi request thì đọc một lần ở module scope.'
      ] }
    ] },
    { icon: '🧱', title: 'Prerendering, PPR và prefetching', blocks: [
      { t: 'table', head: ['Thành phần', 'Kết quả lúc build'], rows: [
        ['<code>use cache</code>', 'Cache và vào static shell (nếu thời hạn không quá ngắn)'],
        ['<code>&lt;Suspense&gt;</code>', 'Fallback vào static shell, nội dung stream lúc request'],
        ['Giá trị dự đoán được', 'Hoàn tất lúc prerender'],
        ['Ngẫu nhiên / thời gian', 'connection() + Suspense, hoặc use cache']
      ] },
      { t: 'key', x: '<b>Partial Prerendering (PPR)</b>: tạo <b>static shell</b> (HTML + RSC payload) phục vụ ngay từ CDN → điều hướng trực tiếp tức thì. Khi param chưa biết trước, <b>App Shell</b> là phiên bản dùng lại, còn ISR điền phiên bản cụ thể sau lần truy cập đầu.' },
      { t: 'list', items: [
        '<b>Tối đa hoá static shell</b>: đẩy việc <code>await</code> (params, cookies, fetch) <b>càng sâu trong cây càng tốt</b>, ví dụ truyền promise params xuống và await trong component con trong Suspense.',
        '<b>Prefetching</b> với partial prefetching: router prefetch App Shell của mỗi route (static + session từ cookies/headers); đặt <code>prefetch={true}</code> để prefetch cả nội dung cached phụ thuộc URL (searchParams/params) — tốn một lần gọi server cho mỗi link.',
        'Cache lưu ở: HTML prerender (đĩa/CDN), shared store (mặc định bộ nhớ từng instance; <code>remote</code> là bền), trình duyệt (trong thời hạn <code>stale</code>). Mọi cache gắn với một deployment — deploy mới thì bắt đầu lại (build id nằm trong cache key).',
        '<b>Bots/crawlers</b>: bỏ qua static shell, render động lúc request để metadata nằm trong &lt;head&gt;.'
      ] }
    ] },
    { icon: '♻️', title: 'Revalidating', blocks: [
      { t: 'p', x: '<b>cacheLife</b> điều khiển thời gian sống, nhận tên profile hoặc object:' },
      { t: 'widget', name: 'cachelife-table', title: 'Profile cacheLife: stale / revalidate / expire' },
      { t: 'warn', x: 'Cache bị coi là “ngắn hạn” (profile <code>seconds</code>, <code>revalidate: 0</code>, hoặc <code>expire</code> dưới 5 phút) sẽ bị loại khỏi prerender và trở thành “dynamic hole”.' },
      { t: 'table', head: ['API', 'Hành vi', 'Dùng ở'], rows: [
        ['<code>cacheTag(\'products\')</code>', 'Gắn nhãn dữ liệu cached để vô hiệu theo yêu cầu', 'Trong scope use cache'],
        ['<code>revalidateTag(tag, \'max\')</code>', 'Stale-while-revalidate: phục vụ cũ ngay, tải mới ở nền; tham số 2 là thời gian được phục vụ bản cũ', 'Server Action và Route Handler'],
        ['<code>updateTag(tag)</code>', 'Hết hạn <b>ngay</b> (read-your-own-writes): người dùng thấy thay đổi của mình tức thì', 'Chỉ Server Action'],
        ['<code>revalidatePath(path)</code>', 'Vô hiệu cache cả một đường dẫn khi không biết tag', 'Action / Route Handler']
      ] },
      { t: 'tip', x: 'Ưu tiên revalidate theo <b>tag</b> hơn theo path (chính xác, tránh vô hiệu thừa). Với nội dung CMS: dùng <code>cacheTag</code> + <code>cacheLife(\'max\')</code>, và cho CMS gọi webhook tới <code>revalidateTag</code> khi nội dung đổi.' }
    ] }
  ],
  summary: [
    'cacheComponents + use cache + cacheLife + cacheTag; dữ liệu tươi dùng Suspense, runtime API cần Suspense.',
    'connection() cho giá trị theo request; use cache để chia sẻ giá trị.',
    'PPR: static shell + stream; await càng sâu càng tốt để tăng phần tĩnh.',
    'revalidateTag (SWR), updateTag (tức thì, chỉ Server Action), revalidatePath; ưu tiên tag.'
  ],
  cards: [
    ['Cờ bật Cache Components?', 'cacheComponents: true (kèm partialPrefetching).'],
    ["'use cache' dùng ở mấy cấp?", 'Cấp dữ liệu (hàm) và cấp UI (component/page/layout), hoặc đầu file.'],
    ['Cache key gồm gì?', 'Tham số và giá trị bắt từ scope cha (cộng build id).'],
    ['Dữ liệu tươi mỗi request?', 'Không use cache; bọc Suspense.'],
    ['Runtime APIs?', 'cookies, headers, searchParams, params.'],
    ['connection()?', 'Hoãn sang request time trước thao tác không xác định (random/time).'],
    ['use cache: remote / private?', 'Remote: cache bền chia sẻ; private: đọc cookie/headers, cache ở trình duyệt.'],
    ['Static shell?', 'HTML + RSC payload prerender phục vụ ngay từ CDN.'],
    ['PPR?', 'Partial Prerendering: phần tĩnh/cached + phần stream lúc request.'],
    ['App Shell?', 'Static shell dùng lại khi param cụ thể chưa biết.'],
    ['Profile cacheLife hours?', 'stale 5m, revalidate 1h, expire 1d.'],
    ['Cache “ngắn hạn”?', 'seconds, revalidate 0 hoặc expire < 5 phút → bị loại khỏi prerender.'],
    ['revalidateTag vs updateTag?', 'SWR (Action + Route Handler) vs hết hạn ngay (chỉ Action).'],
    ['revalidatePath khi nào?', 'Muốn vô hiệu cả route mà không biết tag.']
  ],
  quiz: [
    { q: 'Cache một component bằng:', o: ["'use cache'", "'use client'", "'use server'", "'use memo'"], a: 0, e: 'Cũng dùng được ở cấp hàm hoặc file.' },
    { q: 'Dữ liệu cần tươi mỗi request nên:', o: ['Dùng use cache', 'Bọc trong Suspense', 'Đặt trong public', 'Dùng cacheLife max'], a: 1, e: 'Fallback vào static shell.' },
    { q: 'Giá trị Math.random() mỗi request cần:', o: ['connection() + Suspense', 'Không làm gì', 'use client', 'Đưa vào .env'], a: 0, e: 'Hoặc cache để chia sẻ.' },
    { q: 'updateTag chỉ dùng được trong:', o: ['Route Handler', 'Server Action', 'Proxy', 'Client Component'], a: 1, e: 'Read-your-own-writes.' },
    { q: 'Profile “hours” có revalidate:', o: ['1 phút', '1 giờ', '1 ngày', '1 tuần'], a: 1, e: 'stale 5m, expire 1d.' },
    { q: 'PPR cho phép:', o: ['Chỉ SSR', 'Static shell + stream phần động', 'Chỉ CSR', 'Bỏ cache'], a: 1, e: 'Phần tĩnh phục vụ từ CDN.' },
    { q: 'Để tăng phần tĩnh của shell nên:', o: ['Await params ở đầu layout', 'Await càng sâu trong cây càng tốt', 'Tắt Suspense', 'Dùng cookies ở root'], a: 1, e: 'Truyền promise xuống con.' },
    { q: 'Cache ngắn hạn sẽ:', o: ['Vào shell', 'Bị loại khỏi prerender', 'Vĩnh viễn', 'Lỗi build'], a: 1, e: 'Trở thành dynamic hole.' },
    { q: 'Ưu tiên cách revalidate nào?', o: ['Theo path', 'Theo tag', 'Xoá .next', 'Restart'], a: 1, e: 'Chính xác hơn.' },
    { q: 'use cache: private lưu kết quả ở:', o: ['CDN', 'Trình duyệt', 'DB', 'Redis'], a: 1, e: 'Dành cho dữ liệu đọc cookies/headers.' },
    { q: 'Deploy mới thì cache cũ:', o: ['Dùng tiếp', 'Bắt đầu lại (key gồm build id)', 'Chuyển sang remote', 'Xoá user'], a: 1, e: 'Mọi cache gắn deployment.' }
  ],
  match: [
    ['use cache', 'Cache kết quả hàm/component'],
    ['cacheLife', 'Thời gian sống'],
    ['cacheTag', 'Gắn nhãn vô hiệu'],
    ['revalidateTag', 'Stale-while-revalidate'],
    ['updateTag', 'Hết hạn ngay'],
    ['connection()', 'Hoãn đến request time'],
    ['PPR', 'Static shell + stream']
  ]
});
