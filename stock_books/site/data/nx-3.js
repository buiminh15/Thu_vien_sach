// Next.js – Chương 3: Layouts, Pages và điều hướng.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 3,
  title: 'Layouts, Pages và điều hướng',
  intro: 'Cách tạo page, layout, route lồng nhau, segment động, đọc <code>searchParams</code>, liên kết bằng <code>&lt;Link&gt;</code>, và cách Next.js làm điều hướng nhanh nhờ <b>prefetching</b>, <b>streaming</b> và <b>client-side transition</b>.',
  sections: [
    { icon: '📄', title: 'Page, layout và route lồng nhau', blocks: [
      { t: 'list', items: [
        '<b>Page</b>: export default một React component trong file <code>page</code>.',
        '<b>Layout</b>: UI dùng chung giữa nhiều trang; khi điều hướng, layout <b>giữ trạng thái, vẫn tương tác được và không render lại</b>. Component nhận prop <code>children</code> (page hoặc layout lồng).',
        '<b>Route lồng</b>: lồng thư mục, ví dụ <code>/blog/[slug]</code> gồm 3 segment: root, <code>blog</code>, <code>[slug]</code> (leaf). Layout cũng lồng theo cây thư mục: root layout bọc blog layout bọc trang.',
        '<b>Segment động</b>: <code>[slug]</code> sinh nhiều trang từ dữ liệu.'
      ] },
      { t: 'p', x: '<code>params</code> và <code>searchParams</code> là <b>Promise</b>, phải <code>await</code>:' },
      { t: 'p', x: '<code>const { slug } = await params</code> · <code>const filters = (await searchParams).filters</code>' },
      { t: 'warn', x: 'Dùng <code>searchParams</code> sẽ đưa trang vào <b>dynamic rendering</b> vì cần request đến. Client Component đọc bằng hook <code>useSearchParams</code>.' },
      { t: 'table', head: ['Tình huống', 'Dùng'], rows: [
        ['Cần search param để tải dữ liệu (phân trang, lọc từ DB)', 'prop <code>searchParams</code>'],
        ['Chỉ dùng phía client (lọc danh sách đã có)', 'hook <code>useSearchParams</code>'],
        ['Đọc trong callback/event handler, tránh re-render', '<code>new URLSearchParams(window.location.search)</code>']
      ] },
      { t: 'tip', x: '<b>Route props helpers</b> (global, sinh khi chạy dev/build/<code>next typegen</code>): <code>PageProps&lt;\'/blog/[slug]\'&gt;</code>, <code>LayoutProps&lt;\'/dashboard\'&gt;</code> (có cả slot được đặt tên). Route tĩnh có params là <code>{}</code>.' }
    ] },
    { icon: '🔗', title: 'Link và điều hướng', blocks: [
      { t: 'p', x: '<code>&lt;Link&gt;</code> (từ <code>next/link</code>) mở rộng thẻ <code>&lt;a&gt;</code> với <b>prefetching</b> và <b>client-side navigation</b>. Dùng hook <code>useRouter</code> cho điều hướng nâng cao. Thẻ <code>&lt;a&gt;</code> thường không được prefetch.' },
      { t: 'table', head: ['Khái niệm', 'Ý nghĩa'], rows: [
        ['<b>Server rendering</b>', 'Prerendering (lúc build/revalidate, được cache) hoặc dynamic rendering (lúc có request)'],
        ['<b>Prefetching</b>', 'Tải route ở nền khi link vào viewport (hoặc hover). Route tĩnh: prefetch cả route. Route động: bỏ qua, hoặc prefetch một phần nếu có <code>loading.tsx</code>'],
        ['<b>Streaming</b>', 'Server gửi từng phần ngay khi sẵn sàng; <code>loading.tsx</code> bọc page trong Suspense, cho phép prefetch layout và skeleton'],
        ['<b>Client-side transition</b>', 'Giữ layout dùng chung, thay page bằng trạng thái loading hoặc trang mới, không tải lại toàn trang (giữ state và scroll hợp lý)']
      ] },
      { t: 'key', x: 'Cho route động, thêm <code>loading.tsx</code> để điều hướng <b>tức thì</b>, layout vẫn tương tác được và cải thiện TTFB/FCP/TTI. Thêm <code>generateStaticParams</code> để route động được prerender lúc build thay vì rơi về dynamic rendering.' },
      { t: 'h3', x: 'Khi điều hướng vẫn chậm' },
      { t: 'list', items: [
        'Route động không có <code>loading.tsx</code> → client chờ server rồi mới chuyển.',
        'Segment động thiếu <code>generateStaticParams</code> → bị dynamic rendering.',
        'Mạng chậm → prefetch chưa kịp: dùng <code>useLinkStatus</code> (trả về <code>pending</code>) để hiện phản hồi, nên debounce bằng animation delay ~100ms.',
        'Chưa hydrate xong (Link là Client Component) → giảm bundle, chuyển logic về server.',
        'Tắt prefetch: <code>&lt;Link prefetch={false}&gt;</code>; hoặc chỉ prefetch khi hover bằng state và <code>prefetch={active ? null : false}</code>.'
      ] },
      { t: 'p', x: 'Next.js tích hợp <code>window.history.pushState</code>/<code>replaceState</code> với router, đồng bộ với <code>usePathname</code> và <code>useSearchParams</code> (ví dụ sắp xếp danh sách qua <code>?sort=asc</code>, hoặc đổi locale).' },
      { t: 'widget', name: 'nav-sim', title: 'Mô phỏng thời gian chờ khi điều hướng' }
    ] }
  ],
  summary: [
    'Page = default export trong page; layout nhận children và không render lại khi điều hướng.',
    'params, searchParams là Promise; searchParams làm trang dynamic.',
    'Link = prefetch + client-side transition; route động cần loading.tsx và generateStaticParams.',
    'useLinkStatus cho phản hồi trên mạng chậm; prefetch={false} để tiết kiệm tài nguyên.'
  ],
  cards: [
    ['Layout khác gì khi điều hướng?', 'Giữ trạng thái, vẫn tương tác, không render lại.'],
    ['Cách đọc params động?', 'const { slug } = await params (params là Promise).'],
    ['searchParams ảnh hưởng gì?', 'Đưa trang vào dynamic rendering.'],
    ['useSearchParams dùng khi nào?', 'Khi search params chỉ dùng phía client.'],
    ['PageProps / LayoutProps?', 'Helper kiểu toàn cục suy ra params và slot từ cấu trúc route.'],
    ['<Link> mang lại gì?', 'Prefetching và client-side navigation.'],
    ['Route tĩnh vs động khi prefetch?', 'Tĩnh: prefetch toàn bộ; động: bỏ qua hoặc một phần nếu có loading.tsx.'],
    ['loading.tsx làm gì?', 'Bọc page trong Suspense, cho UI chờ tức thì và prefetch một phần.'],
    ['generateStaticParams?', 'Prerender các giá trị segment động lúc build.'],
    ['useLinkStatus?', 'Hook trả về pending để hiện chỉ báo khi chuyển trang trên mạng chậm.'],
    ['Tắt prefetch?', '<Link prefetch={false}>']
  ],
  quiz: [
    { q: 'Layout khi điều hướng giữa các page con:', o: ['Mount lại', 'Giữ trạng thái và không render lại', 'Bị huỷ', 'Reload trang'], a: 1, e: 'Đó là lợi ích chính của layout.' },
    { q: 'params trong page là:', o: ['Object thường', 'Promise', 'Function', 'Array'], a: 1, e: 'Cần await.' },
    { q: 'Dùng prop searchParams thì trang:', o: ['Tĩnh hoàn toàn', 'Dynamic rendering', 'Bị lỗi', 'Không đổi'], a: 1, e: 'Cần request đến.' },
    { q: 'Thẻ <a> thường so với <Link>:', o: ['Cũng prefetch', 'Không prefetch', 'Nhanh hơn', 'Giống hệt'], a: 1, e: 'Link mới có prefetch.' },
    { q: 'Để cải thiện điều hướng đến route động:', o: ['Thêm loading.tsx', 'Tắt JS', 'Xoá layout', 'Dùng <a>'], a: 0, e: 'Cho partial prefetch và phản hồi tức thì.' },
    { q: 'Hook hiện phản hồi khi chuyển trang:', o: ['useRouter', 'useLinkStatus', 'usePathname', 'useParams'], a: 1, e: 'pending = true khi đang chuyển.' },
    { q: 'Segment động thiếu generateStaticParams thường bị:', o: ['Lỗi build', 'Dynamic rendering lúc request', 'Bỏ qua', 'Cache vĩnh viễn'], a: 1, e: 'Thêm để prerender lúc build.' },
    { q: 'Prefetch chỉ khi hover thực hiện bằng:', o: ['prefetch={active ? null : false}', 'prefetch="hover"', 'rel', 'Không thể'], a: 0, e: 'Kết hợp onMouseEnter + state.' },
    { q: 'Hàm hỗ trợ đồng bộ history với router:', o: ['window.location.assign', 'history.pushState/replaceState', 'document.cookie', 'fetch'], a: 1, e: 'Tích hợp với usePathname/useSearchParams.' },
    { q: 'Link là loại component nào?', o: ['Server Component', 'Client Component (cần hydrate để prefetch)', 'Web Component', 'Không phải React'], a: 1, e: 'Bundle lớn làm chậm hydrate.' }
  ],
  match: [
    ['Link', 'Prefetch + client navigation'],
    ['loading.tsx', 'Streaming/Suspense cho page'],
    ['generateStaticParams', 'Prerender route động'],
    ['useLinkStatus', 'Chỉ báo pending'],
    ['useSearchParams', 'Đọc query ở client'],
    ['params', 'Promise tham số động'],
    ['PageProps', 'Kiểu suy ra từ route']
  ]
});
