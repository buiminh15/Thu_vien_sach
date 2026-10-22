// Next.js – Chương 5: Lấy dữ liệu và streaming.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 5,
  title: 'Lấy dữ liệu và streaming',
  intro: 'Trong Server Component bạn có thể <code>await</code> trực tiếp <code>fetch</code> hoặc truy vấn DB/ORM. Chương này nói về <b>streaming</b> bằng <code>loading.js</code> và <code>&lt;Suspense&gt;</code>, lấy dữ liệu ở Client Component, và các mẫu: tuần tự, song song, <code>React.cache</code>, preload.',
  sections: [
    { icon: '🖥️', title: 'Lấy dữ liệu ở Server Component', blocks: [
      { t: 'list', items: [
        '<b>fetch API</b>: biến component thành <code>async</code> và <code>await fetch(...)</code>. Các <code>fetch</code> giống hệt trong một cây component được <b>memoize</b>, nên có thể gọi ngay trong component cần dữ liệu thay vì truyền props.',
        '<b>ORM/DB</b>: truy vấn trực tiếp (ví dụ <code>db.select().from(posts)</code>); thông tin đăng nhập và logic truy vấn không vào bundle client. Vẫn phải xác thực/uỷ quyền đúng cách.',
        '<code>fetch</code> <b>không được cache mặc định</b> và chặn việc render trang đến khi xong. Dùng <code>use cache</code> để cache hoặc bọc trong <code>&lt;Suspense&gt;</code> để stream dữ liệu mới.'
      ] }
    ] },
    { icon: '🌊', title: 'Streaming', blocks: [
      { t: 'p', x: 'Nếu có request chậm, cả route bị chặn. <b>Streaming</b> chia trang thành các khúc gửi dần từ server. Hai cách:' },
      { t: 'table', head: ['Cách', 'Phạm vi', 'Ghi chú'], rows: [
        ['<code>loading.js</code>', 'Cả page', 'Lồng trong layout, tự bọc page.js và con bên dưới bằng Suspense boundary'],
        ['<code>&lt;Suspense fallback&gt;</code>', 'Từng phần', 'Nội dung ngoài boundary gửi ngay; phần trong boundary stream sau']
      ] },
      { t: 'warn', x: 'Layout truy cập dữ liệu runtime/chưa cache (<code>cookies()</code>, <code>headers()</code>, fetch không cache) <b>không</b> rơi về <code>loading.js</code> cùng segment mà chặn điều hướng. Hãy bọc phần đó trong <code>&lt;Suspense&gt;</code> riêng hoặc chuyển việc lấy dữ liệu xuống <code>page.js</code>. Nên đặt Suspense gần nơi truy cập dữ liệu.' },
      { t: 'tip', x: 'Bot/crawler được phục vụ khác trình duyệt: Next.js chờ dữ liệu xong và gửi trang render đầy đủ thay vì stream. Loading state có ý nghĩa: skeleton, spinner hoặc một phần nhỏ màn hình tương lai (ảnh bìa, tiêu đề).' }
    ] },
    { icon: '🧩', title: 'Lấy dữ liệu ở Client Component', blocks: [
      { t: 'list', items: [
        '<b>API <code>use</code> của React</b>: lấy dữ liệu (không <code>await</code>) ở Server Component, truyền Promise làm prop, bọc client component trong <code>&lt;Suspense&gt;</code> và gọi <code>use(posts)</code>.',
        '<b>Thư viện cộng đồng</b>: SWR, React Query (<code>useSWR(url, fetcher)</code> trả data/error/isLoading) với ngữ nghĩa cache riêng.'
      ] }
    ] },
    { icon: '⏱️', title: 'Mẫu nâng cao', blocks: [
      { t: 'table', head: ['Mẫu', 'Mô tả'], rows: [
        ['<b>Tuần tự</b>', 'Request sau cần dữ liệu request trước (artist → playlists). Suspense cho phép stream phần sau nhưng trang vẫn chờ request đầu; nên đảm bảo request đầu nhanh hoặc cache'],
        ['<b>Song song</b>', 'Layout/page mặc định render song song, nhưng nhiều <code>await</code> liên tiếp trong cùng component thì tuần tự. Khởi tạo các <code>fetch</code> trước rồi <code>Promise.all</code> (hoặc <code>allSettled</code> nếu muốn chịu lỗi từng phần)'],
        ['<b>React.cache</b>', 'Bọc hàm không dùng fetch (ORM) để nhiều component dùng chung một kết quả trong <b>cùng một request</b>; không chia sẻ giữa các request'],
        ['<b>Preload</b>', 'Gọi hàm lấy dữ liệu (không await) trước công việc chặn, rồi gọi lại trong component; cần khử trùng lặp (fetch tự memoize, hoặc React.cache, hoặc <code>use cache</code>/<code>use cache: private</code>)']
      ] },
      { t: 'widget', name: 'fetch-waterfall', title: 'Tuần tự hay song song: tổng thời gian' }
    ] }
  ],
  summary: [
    'Server Component có thể await fetch hoặc truy vấn DB trực tiếp; fetch không cache mặc định.',
    'Streaming: loading.js cho cả page, Suspense cho từng phần; đặt Suspense gần chỗ truy cập dữ liệu.',
    'Client: use(Promise) hoặc SWR/React Query.',
    'Tránh waterfall bằng Promise.all; React.cache dùng chung dữ liệu trong một request; preload để bắt đầu sớm.'
  ],
  cards: [
    ['fetch trong Server Component?', 'Dùng async/await trực tiếp; các fetch giống hệt được memoize.'],
    ['fetch có cache mặc định không?', 'Không; dùng use cache hoặc Suspense để stream dữ liệu mới.'],
    ['Streaming là gì?', 'Gửi dần từng khúc UI từ server khi sẵn sàng.'],
    ['loading.js vs Suspense?', 'loading.js stream cả page; Suspense chi tiết từng thành phần.'],
    ['Vì sao layout dùng cookies() không rơi về loading.js?', 'Layout chặn điều hướng; hãy dùng Suspense riêng hoặc dời xuống page.'],
    ['Stream dữ liệu sang Client Component?', 'Truyền Promise làm prop, đọc bằng use() trong Suspense.'],
    ['Lấy dữ liệu tuần tự khi nào?', 'Request sau phụ thuộc kết quả request trước.'],
    ['Cách lấy dữ liệu song song?', 'Khởi tạo các fetch trước rồi Promise.all.'],
    ['Promise.all vs allSettled?', 'all: một lỗi thì cả hỏng; allSettled: chịu lỗi từng phần.'],
    ['React.cache?', 'Memoize hàm trong phạm vi một request.'],
    ['Preload là gì?', 'Bắt đầu request sớm (không await) để chạy song song với công việc chặn.'],
    ['Bot/crawler nhận gì?', 'Trang render đầy đủ, không stream.']
  ],
  quiz: [
    { q: 'Cách lấy dữ liệu trong Server Component:', o: ['useEffect', 'async/await trực tiếp', 'componentDidMount', 'XMLHttpRequest bắt buộc'], a: 1, e: 'Component có thể là async.' },
    { q: 'fetch mặc định:', o: ['Cache vĩnh viễn', 'Không cache', 'Cache 1 giờ', 'Cache ở CDN'], a: 1, e: 'Dùng use cache để cache.' },
    { q: 'loading.js bọc page trong:', o: ['ErrorBoundary', 'Suspense', 'Portal', 'Fragment'], a: 1, e: 'Tự động.' },
    { q: 'Streaming chi tiết từng phần dùng:', o: ['loading.js', '<Suspense>', 'error.js', 'template'], a: 1, e: 'Đặt gần nơi truy cập dữ liệu.' },
    { q: 'Hai await liên tiếp trong cùng component:', o: ['Song song', 'Tuần tự', 'Lỗi', 'Tự gộp'], a: 1, e: 'Dùng Promise.all để song song.' },
    { q: 'React.cache có phạm vi:', o: ['Toàn app', 'Một request', 'Vĩnh viễn', 'Một user'], a: 1, e: 'Không chia sẻ giữa các request.' },
    { q: 'Truyền Promise cho Client Component rồi đọc bằng:', o: ['await', 'use()', 'then', 'fetch'], a: 1, e: 'Cần Suspense.' },
    { q: 'Promise.allSettled khác Promise.all ở:', o: ['Nhanh hơn', 'Không hỏng toàn bộ khi một promise lỗi', 'Chạy tuần tự', 'Cache'], a: 1, e: 'Trả về trạng thái từng promise.' },
    { q: 'Preload cần gì để không gọi hai lần?', o: ['Khử trùng lặp (fetch/React.cache/use cache)', 'Gọi thủ công hai lần', 'setTimeout', 'Không cần'], a: 0, e: 'Hàm phải dedupe cuộc gọi trùng.' },
    { q: 'Thư viện lấy dữ liệu phổ biến ở client:', o: ['SWR, React Query', 'Express', 'Prisma', 'Webpack'], a: 0, e: 'Có cache riêng.' }
  ],
  match: [
    ['loading.js', 'Stream cả page'],
    ['Suspense', 'Stream từng phần'],
    ['use()', 'Đọc Promise ở client'],
    ['Promise.all', 'Lấy dữ liệu song song'],
    ['React.cache', 'Memoize trong một request'],
    ['SWR', 'Fetch phía client'],
    ['Preload', 'Bắt đầu request sớm']
  ]
});
