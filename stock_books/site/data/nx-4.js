// Next.js – Chương 4: Server Components và Client Components.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 4,
  title: 'Server Components và Client Components',
  intro: 'Mặc định layout và page là <b>Server Component</b>: chạy trên server, giảm JavaScript gửi cho trình duyệt. Khi cần tương tác hoặc API trình duyệt thì dùng <b>Client Component</b> với <code>\'use client\'</code>. Chương này nói về cách chọn, ranh giới server/client, cách ghép và cách tránh “nhiễm” mã chỉ-server.',
  sections: [
    { icon: '🧠', title: 'Khi nào dùng loại nào', blocks: [
      { t: 'table', head: ['Dùng Client Component khi cần', 'Dùng Server Component khi cần'], rows: [
        ['State và event handler (onClick, onChange)', 'Lấy dữ liệu từ DB/API gần nguồn'],
        ['Lifecycle logic (useEffect)', 'Dùng API key, token, bí mật mà không lộ ra client'],
        ['API chỉ có ở trình duyệt (localStorage, window, geolocation)', 'Giảm lượng JavaScript gửi cho trình duyệt'],
        ['Custom hook', 'Cải thiện FCP, stream nội dung dần dần']
      ] },
      { t: 'p', x: 'Ví dụ: <code>Page</code> là Server Component lấy bài viết rồi truyền <code>likes</code> làm prop cho <code>&lt;LikeButton&gt;</code> (Client Component dùng <code>useState</code>).' }
    ] },
    { icon: '⚙️', title: 'Cách hoạt động', blocks: [
      { t: 'p', x: 'Trên server, việc render chia theo từng segment (layout/page, kể cả parallel route slot): Server Component được render thành <b>RSC Payload</b>; Client Component cùng RSC Payload dùng để prerender HTML.' },
      { t: 'key', x: '<b>RSC Payload</b> là biểu diễn gọn của cây Server Component đã render: kết quả render, chỗ giữ chỗ cho Client Component kèm tham chiếu file JS, và các props truyền từ server sang client.' },
      { t: 'steps', items: [
        'Lần tải đầu: <b>HTML</b> hiện bản xem trước không tương tác.',
        '<b>RSC Payload</b> đối chiếu cây Client và Server Component.',
        '<b>JavaScript</b> hydrate Client Component để chúng tương tác được (hydration = gắn event handler vào DOM).',
        'Điều hướng sau đó: RSC Payload được prefetch/cache, Client Component render hoàn toàn ở client.'
      ] }
    ] },
    { icon: '🧱', title: "Ranh giới 'use client' và cách ghép", blocks: [
      { t: 'list', items: [
        "<code>'use client'</code> đặt <b>ở đầu file</b>, trên các import; khai báo ranh giới giữa đồ thị module server và client. Mọi import và component mà file đó render trực tiếp đều vào bundle client — không cần ghi directive ở từng component.",
        'Để giảm bundle: chỉ đánh dấu file thật sự tương tác (ví dụ <code>&lt;Search&gt;</code> trong layout), giữ phần còn lại là Server Component.',
        'Props truyền từ Server sang Client phải <b>serializable</b>. Có thể truyền Promise và đọc bằng <code>use()</code> để stream dữ liệu.',
        '<b>Interleaving</b>: truyền Server Component làm <code>children</code> của Client Component (như <code>&lt;Modal&gt;&lt;Cart/&gt;&lt;/Modal&gt;</code>); Server Component vẫn render trước trên server.',
        '<b>Context provider</b>: context không dùng được trong Server Component → tạo Client Component nhận <code>children</code> (<code>ThemeProvider</code>) rồi bọc ở layout; nên đặt provider <b>sâu nhất có thể</b> (chỉ bọc {children}) để tối ưu phần tĩnh.',
        '<b>Thư viện bên thứ ba</b> dùng tính năng client mà chưa có directive: bọc trong Client Component riêng (<code>\'use client\'; export default Carousel</code>). Tác giả thư viện nên thêm directive vào entry point cần client.'
      ] },
      { t: 'widget', name: 'rsc-picker', title: 'Server hay Client Component?' }
    ] },
    { icon: '🛡️', title: 'Tránh “environment poisoning”', blocks: [
      { t: 'warn', x: 'Module JS có thể được chia sẻ giữa server và client, nên mã chứa <code>process.env.API_KEY</code> có thể vô tình bị import vào client. Next.js chỉ đưa biến có tiền tố <code>NEXT_PUBLIC_</code> vào bundle client; biến khác bị thay bằng chuỗi rỗng — nên hàm sẽ chạy sai thay vì lộ khoá.' },
      { t: 'tip', x: "Thêm <code>import 'server-only'</code> vào file chỉ-server để import nhầm từ Client Component gây <b>lỗi build</b>. <code>client-only</code> đánh dấu mã dùng <code>window</code>. Cài hai gói này là tuỳ chọn (Next.js tự xử lý)." }
    ] }
  ],
  summary: [
    'Server Component là mặc định; Client Component cần \'use client\'.',
    'Server: dữ liệu, bí mật, ít JS. Client: state, effect, API trình duyệt.',
    'RSC Payload + HTML + JS hydrate; điều hướng sau dùng payload cache.',
    'Ghép bằng children, provider đặt sâu, bọc thư viện bên thứ ba; server-only chặn lộ mã.'
  ],
  cards: [
    ['Component mặc định là loại nào?', 'Server Component.'],
    ['Khi nào cần Client Component?', 'State, event handler, effect, API trình duyệt, custom hook.'],
    ["'use client' đặt ở đâu?", 'Đầu file, trên các import; tạo ranh giới server/client.'],
    ['RSC Payload chứa gì?', 'Kết quả render server, chỗ giữ chỗ + tham chiếu JS của Client Component, props truyền sang.'],
    ['Hydration là gì?', 'React gắn event handler vào DOM để HTML tĩnh trở nên tương tác.'],
    ['Props server → client phải?', 'Serializable bởi React.'],
    ['Stream dữ liệu sang client?', 'Truyền Promise làm prop và đọc bằng use() trong <Suspense>.'],
    ['Interleaving?', 'Truyền Server Component làm children của Client Component.'],
    ['Cách dùng context?', 'Client Component provider nhận children, bọc trong layout (đặt sâu nhất có thể).'],
    ['Bọc thư viện bên thứ ba?', "File riêng 'use client' re-export component."],
    ['Biến môi trường vào client khi nào?', 'Chỉ khi có tiền tố NEXT_PUBLIC_.'],
    ["import 'server-only' làm gì?", 'Gây lỗi build nếu module bị import vào Client Component.']
  ],
  quiz: [
    { q: 'Layout và page mặc định là:', o: ['Client Component', 'Server Component', 'Web Worker', 'Static HTML'], a: 1, e: 'Cần directive mới thành Client.' },
    { q: 'useState chỉ dùng được trong:', o: ['Server Component', 'Client Component', 'Route Handler', 'proxy'], a: 1, e: 'Cần tương tác.' },
    { q: 'Mã dùng API key bí mật nên đặt ở:', o: ['Client Component', 'Server Component', 'public/', 'localStorage'], a: 1, e: 'Không lộ ra bundle.' },
    { q: 'Props truyền sang Client Component phải:', o: ['Là function bất kỳ', 'Serializable', 'Là class', 'Là DOM node'], a: 1, e: 'Ràng buộc của RSC.' },
    { q: 'Cách ghép Server Component trong Client Component:', o: ['import trực tiếp vào Client', 'Truyền qua children/props', 'Không thể', 'eval'], a: 1, e: 'Nó được render trước trên server.' },
    { q: 'Context provider cần:', o: ['Server Component', "Client Component ('use client')", 'Route handler', 'Không cần gì'], a: 1, e: 'Context không có trong Server Component.' },
    { q: 'Biến môi trường lộ ra client khi có tiền tố:', o: ['PUBLIC_', 'NEXT_PUBLIC_', 'CLIENT_', 'VITE_'], a: 1, e: 'Biến khác bị thay bằng chuỗi rỗng.' },
    { q: 'Để chặn import mã server vào client:', o: ['Đổi tên file', "import 'server-only'", 'Thêm comment', 'Dùng var'], a: 1, e: 'Lỗi xảy ra lúc build.' },
    { q: 'Để giảm JS bundle, nên:', o: ["Thêm 'use client' cho mọi file", "Chỉ đánh dấu thành phần tương tác", 'Xoá layout', 'Tắt SSR'], a: 1, e: 'Giữ phần tĩnh ở server.' },
    { q: 'Hydration là:', o: ['Nén ảnh', 'Gắn event handler vào HTML tĩnh', 'Gọi API', 'Build'], a: 1, e: 'Làm UI tương tác.' }
  ],
  match: [
    ['Server Component', 'Truy cập DB/bí mật'],
    ['Client Component', 'State và event'],
    ['RSC Payload', 'Cây server đã render dạng serialize'],
    ['use client', 'Ranh giới module'],
    ['server-only', 'Chặn import vào client'],
    ['children slot', 'Ghép Server trong Client'],
    ['NEXT_PUBLIC_', 'Biến lộ ra client']
  ]
});
