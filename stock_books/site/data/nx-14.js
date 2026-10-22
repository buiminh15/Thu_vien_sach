// Next.js – Chương 14 (Guides): Checklist đưa lên production.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 14,
  title: 'Guides: Checklist đưa lên production',
  intro: 'Tổng hợp các tối ưu <b>tự động</b> của Next.js, những việc nên làm <b>trong lúc phát triển</b> (routing, dữ liệu, UI, bảo mật, SEO, type safety) và <b>trước khi lên production</b> (build thử, Core Web Vitals, phân tích bundle).',
  sections: [
    { icon: '🤖', title: 'Tối ưu tự động', blocks: [
      { t: 'table', head: ['Tính năng', 'Tác dụng'], rows: [
        ['<b>Server Components</b>', 'Mặc định; chạy trên server, không làm tăng bundle JS client'],
        ['<b>Code-splitting</b>', 'Tự động theo route segment; có thể lazy load thêm Client Component và thư viện bên thứ ba'],
        ['<b>Prefetching</b>', 'Link vào viewport thì prefetch route ở nền; có thể tắt'],
        ['<b>Prerendering</b>', 'Prerender Server/Client Component lúc build và cache kết quả; bật dynamic rendering cho route cụ thể khi cần'],
        ['<b>Caching</b>', 'Cache request dữ liệu, kết quả render, tài nguyên tĩnh… để giảm request tới server/DB; có thể opt-out']
      ] }
    ] },
    { icon: '🛠️', title: 'Trong lúc phát triển', blocks: [
      { t: 'h3', x: 'Routing và render' },
      { t: 'list', items: [
        'Dùng <b>layout</b> để chia sẻ UI và bật partial rendering; dùng <code>&lt;Link&gt;</code> cho điều hướng client và prefetch.',
        'Xử lý lỗi: trang lỗi catch-all và 404 tuỳ chỉnh; theo mẫu ghép Server/Client Component và kiểm tra vị trí <code>"use client"</code>.',
        'Cẩn thận <b>Request-time APIs</b> (cookies, searchParams) vì có thể đưa cả route (hoặc cả app nếu ở root layout) vào dynamic rendering; bọc trong Suspense khi phù hợp.'
      ] },
      { t: 'h3', x: 'Dữ liệu và cache' },
      { t: 'list', items: [
        'Lấy dữ liệu bằng Server Components; dùng Route Handlers để truy cập backend từ Client Component — <b>nhưng đừng gọi Route Handler từ Server Component</b> (thêm một request thừa).',
        'Streaming bằng loading UI và Suspense; lấy dữ liệu song song để tránh waterfall.',
        'Kiểm tra request nào đang được cache và opt-in khi cần; request không dùng fetch cũng cần cache; ảnh tĩnh để trong <code>public</code>.'
      ] },
      { t: 'h3', x: 'UI và khả năng tiếp cận' },
      { t: 'list', items: [
        'Form + validate bằng <b>Server Actions</b>. Thêm <code>app/global-error.tsx</code> và <code>app/global-not-found.tsx</code> cho UI dự phòng nhất quán.',
        'Dùng Font module, <code>&lt;Image&gt;</code>, <code>&lt;Script&gt;</code> (hoãn script bên thứ ba, không chặn main thread) và <code>eslint-plugin-jsx-a11y</code>.'
      ] },
      { t: 'h3', x: 'Bảo mật, SEO, type' },
      { t: 'list', items: [
        '<b>Tainting</b> dữ liệu nhạy cảm; Server Actions kiểm tra auth/authz bên trong (không dựa riêng vào Proxy/layout/page), DB access trong <code>server-only</code> DAL, cân nhắc rate limiting; <code>.env.*</code> trong <code>.gitignore</code>, chỉ biến công khai có <code>NEXT_PUBLIC_</code>; cân nhắc <b>Content Security Policy</b> (XSS, clickjacking, injection).',
        'Metadata API (title, description), OG image, sitemap và robots.',
        'TypeScript + TS plugin để bắt lỗi sớm.'
      ] }
    ] },
    { icon: '🚀', title: 'Trước khi lên production', blocks: [
      { t: 'steps', items: [
        'Chạy <code>next build</code> cục bộ để bắt lỗi build, rồi <code>next start</code> để đo hiệu năng gần với môi trường production.',
        '<b>Lighthouse</b> (ẩn danh) để thấy trải nghiệm thực tế — là test mô phỏng, nên kết hợp với dữ liệu field (Core Web Vitals).',
        'Hook <code>useReportWebVitals</code> gửi Core Web Vitals tới công cụ analytics.',
        'Phân tích bundle bằng <code>@next/bundle-analyzer</code> (Webpack) hoặc Bundle Analyzer cho Turbopack; tham khảo Import Cost, Package Phobia, Bundle Phobia, bundlejs khi thêm phụ thuộc.'
      ] },
      { t: 'widget', name: 'prod-checklist', title: 'Checklist tự đánh giá' }
    ] }
  ],
  summary: [
    'Server Components, code-splitting, prefetching, prerendering, caching là tối ưu mặc định.',
    'Tránh waterfall, đừng gọi Route Handler từ Server Component, cẩn thận request-time APIs.',
    'Bảo mật: tainting, kiểm tra quyền trong Server Action, DAL server-only, CSP, env an toàn.',
    'Trước khi lên prod: next build + start, Lighthouse, Web Vitals, phân tích bundle.'
  ],
  cards: [
    ['Năm tối ưu tự động của Next.js?', 'Server Components, code-splitting, prefetching, prerendering, caching.'],
    ['Có nên gọi Route Handler từ Server Component?', 'Không, tạo request thừa; truy cập dữ liệu trực tiếp.'],
    ['Route Handler dùng khi nào?', 'Để Client Component truy cập tài nguyên backend.'],
    ['Request-time API ở root layout?', 'Có thể đưa cả app vào dynamic rendering.'],
    ['global-error.tsx / global-not-found.tsx?', 'UI dự phòng nhất quán cho lỗi chưa bắt và 404.'],
    ['Script component làm gì?', 'Hoãn script bên thứ ba, không chặn main thread.'],
    ['eslint-plugin-jsx-a11y?', 'Bắt lỗi tiếp cận sớm.'],
    ['Server Actions và Proxy?', 'Phải kiểm tra auth bên trong action, không dựa riêng vào Proxy/layout.'],
    ['CSP bảo vệ khỏi gì?', 'XSS, clickjacking, code injection.'],
    ['Trước deploy chạy gì?', 'next build rồi next start.'],
    ['Lighthouse có hạn chế gì?', 'Là test mô phỏng; cần kết hợp field data.'],
    ['useReportWebVitals?', 'Gửi Core Web Vitals tới analytics.'],
    ['Phân tích bundle?', '@next/bundle-analyzer (Webpack) hoặc Turbopack Bundle Analyzer.']
  ],
  quiz: [
    { q: 'Điều KHÔNG nên làm:', o: ['Fetch trong Server Component', 'Gọi Route Handler từ Server Component', 'Dùng Link', 'Dùng Suspense'], a: 1, e: 'Thêm request thừa.' },
    { q: 'Server Components ảnh hưởng bundle client:', o: ['Tăng', 'Không tăng', 'Gấp đôi', 'Tuỳ trình duyệt'], a: 1, e: 'Không cần JS để render phía client.' },
    { q: 'Cookies ở root layout dẫn tới:', o: ['Cache vĩnh viễn', 'Cả app dynamic rendering', 'Lỗi build', 'Không đổi'], a: 1, e: 'Cẩn thận Request-time APIs.' },
    { q: 'Công cụ phân tích bundle cho Webpack:', o: ['@next/bundle-analyzer', 'eslint', 'jest', 'swc'], a: 0, e: 'Có analyzer riêng cho Turbopack.' },
    { q: 'Lighthouse là:', o: ['Dữ liệu field thật', 'Test mô phỏng', 'Linter', 'CDN'], a: 1, e: 'Cần kết hợp field data.' },
    { q: 'Lệnh đo hiệu năng giống production:', o: ['next dev', 'next build + next start', 'next lint', 'next info'], a: 1, e: 'Build rồi start.' },
    { q: 'Biến env công khai phải có tiền tố:', o: ['PUBLIC_', 'NEXT_PUBLIC_', 'WEB_', 'APP_'], a: 1, e: 'Các biến khác chỉ ở server.' },
    { q: 'Không dựa riêng vào gì để bảo vệ Server Action?', o: ['Kiểm tra trong action', 'Proxy/layout/page', 'DAL', 'Rate limit'], a: 1, e: 'Phải kiểm tra bên trong action.' },
    { q: 'Hook gửi Web Vitals:', o: ['useReportWebVitals', 'useVitals', 'useLCP', 'usePerf'], a: 0, e: 'Dùng với công cụ analytics.' },
    { q: '<Script> giúp:', o: ['Chạy script đồng bộ', 'Hoãn script bên thứ ba, không chặn main thread', 'Xoá script', 'Mã hoá script'], a: 1, e: 'Tối ưu tải script.' }
  ],
  match: [
    ['global-error.tsx', 'UI lỗi chưa bắt'],
    ['<Script>', 'Tối ưu script bên thứ ba'],
    ['useReportWebVitals', 'Gửi Core Web Vitals'],
    ['next build + start', 'Đo gần production'],
    ['CSP', 'Chống XSS/clickjacking'],
    ['Tainting', 'Chặn lộ dữ liệu nhạy cảm'],
    ['bundle-analyzer', 'Phân tích kích thước bundle']
  ]
});
