// Next.js – Chương 10: Route Handlers, Proxy và triển khai.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 10,
  title: 'Route Handlers, Proxy và triển khai',
  intro: '<b>Route Handler</b> (<code>route.ts</code>) là API endpoint dựng trên Web Request/Response; <b>Proxy</b> (<code>proxy.ts</code>, trước đây là middleware) chạy code trước khi request hoàn tất; cuối cùng là các cách <b>triển khai</b>: Node.js server, Docker, static export, adapters.',
  sections: [
    { icon: '🔌', title: 'Route Handlers', blocks: [
      { t: 'list', items: [
        'Định nghĩa trong <code>route.js|ts</code> bên trong <code>app</code>, lồng ở đâu cũng được như page/layout. Là tương đương API Routes của Pages Router (không cần dùng chung).',
        'Hỗ trợ <code>GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS</code>; phương thức khác trả <b>405</b>. Có <code>NextRequest</code> và <code>NextResponse</code> mở rộng Request/Response gốc.',
        '<b>Không có</b> <code>route.js</code> cùng segment với <code>page.js</code> (xung đột); route không tham gia layout hay điều hướng client. <code>app/page.js</code> + <code>app/api/route.js</code> thì hợp lệ.',
        'Kiểu cho context: <code>RouteContext&lt;\'/users/[id]\'&gt;</code> rồi <code>const { id } = await ctx.params</code>.'
      ] },
      { t: 'h3', x: 'Caching của Route Handler' },
      { t: 'table', head: ['Chế độ', 'Hành vi'], rows: [
        ['Mặc định (không Cache Components)', 'Không cache; GET có thể cache bằng <code>export const dynamic = \'force-static\'</code>; các method khác không bao giờ cache'],
        ['Với Cache Components', 'GET theo mô hình như trang: chạy lúc request; prerender được nếu không truy cập dữ liệu chưa cache/runtime'],
        ['Dừng prerender khi', 'network request, DB query, async fs, thuộc tính request (url/headers/cookies/body), cookies()/headers()/connection(), thao tác không xác định'],
        ['Cache dữ liệu', 'Đặt <code>use cache</code> + <code>cacheLife</code> trong hàm helper (không đặt trực tiếp trong thân handler)']
      ] },
      { t: 'tip', x: 'Special Route Handlers như <code>sitemap.ts</code>, <code>opengraph-image.tsx</code>, <code>icon.tsx</code> mặc định tĩnh trừ khi dùng API request-time.' }
    ] },
    { icon: '🛡️', title: 'Proxy (middleware)', blocks: [
      { t: 'p', x: 'Từ Next.js 16, Middleware đổi tên thành <b>Proxy</b>, chức năng giữ nguyên. Cho phép rewrite, redirect, sửa header request/response hoặc trả lời trực tiếp trước khi request hoàn tất.' },
      { t: 'list', items: [
        '<b>Vị trí</b>: <code>proxy.ts</code> ở gốc dự án (hoặc trong <code>src</code>) ngang hàng <code>app</code>/<code>pages</code>. Chỉ <b>một</b> file mỗi dự án; có thể tách module rồi import vào.',
        '<b>Export</b>: hàm <code>proxy(request: NextRequest)</code> (named hoặc default) và <code>config.matcher</code> (ví dụ <code>\'/about/:path*\'</code>) để giới hạn đường dẫn.',
        '<b>Dùng cho</b>: sửa header, A/B test (rewrite), redirect theo thuộc tính request. Redirect đơn giản thì ưu tiên <code>redirects</code> trong <code>next.config.ts</code>.',
        '<b>Không dùng cho</b>: lấy dữ liệu chậm, quản lý session/uỷ quyền đầy đủ (chỉ nên là kiểm tra lạc quan). <code>fetch</code> với <code>cache/next.revalidate/next.tags</code> không có tác dụng trong Proxy.'
      ] },
      { t: 'widget', name: 'proxy-matcher', title: 'Thử matcher của Proxy' }
    ] },
    { icon: '🚀', title: 'Triển khai', blocks: [
      { t: 'table', head: ['Tuỳ chọn', 'Hỗ trợ tính năng'], rows: [
        ['<b>Node.js server</b>', 'Tất cả. Cần script <code>build</code> (<code>next build</code>) và <code>start</code> (<code>next start</code>); có thể dùng custom server'],
        ['<b>Docker container</b>', 'Tất cả. Dùng <code>output: "standalone"</code> để image tối giản; <code>output: "export"</code> cho site tĩnh. Khi dev trên Mac/Windows nên chạy <code>npm run dev</code> trực tiếp thay vì Docker để nhanh hơn'],
        ['<b>Static export</b>', 'Hạn chế (không có tính năng cần server): host trên S3, Nginx, Apache, GitHub Pages'],
        ['<b>Adapters</b>', 'Tuỳ nền tảng; <b>Deployment Adapter API</b> cho phép nền tảng tuỳ biến build/deploy. Adapter đã xác minh: Vercel, Bun; Cloudflare, Netlify đang làm']
      ] },
      { t: 'tip', x: 'Nhiều nền tảng có template: Flightcontrol, Railway, Replit, Hostinger (Node.js); DigitalOcean, Fly.io, Google Cloud Run, Render, SST (Docker). Nền tảng khác (AWS Amplify, Firebase App Hosting, Deno Deploy…) có tích hợp riêng, chưa được đội Next.js xác minh.' }
    ] }
  ],
  summary: [
    'route.ts: GET/POST/...; không đặt cùng segment với page; GET cache bằng force-static hoặc use cache.',
    'proxy.ts: một file, chạy trước request, matcher giới hạn; không dùng cho dữ liệu chậm hay uỷ quyền đầy đủ.',
    'Triển khai: Node.js/Docker hỗ trợ đầy đủ, static export hạn chế, adapters tuỳ nền tảng.'
  ],
  cards: [
    ['route.ts dùng làm gì?', 'API endpoint dựng trên Web Request/Response.'],
    ['Method hỗ trợ?', 'GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS; còn lại 405.'],
    ['route và page cùng segment?', 'Xung đột, không được phép.'],
    ['Cache GET (không Cache Components)?', "export const dynamic = 'force-static'."],
    ['use cache trong route handler?', 'Đặt trong helper, không đặt trực tiếp trong thân handler.'],
    ['RouteContext?', 'Helper kiểu toàn cục cho tham số context.'],
    ['Proxy là gì?', 'Tên mới của middleware (Next.js 16); chạy code trước khi request hoàn tất.'],
    ['proxy.ts đặt ở đâu?', 'Gốc dự án hoặc src, ngang hàng app/pages; chỉ một file.'],
    ['Proxy không nên làm gì?', 'Lấy dữ liệu chậm, quản lý session/uỷ quyền đầy đủ.'],
    ['Redirect đơn giản?', 'Dùng redirects trong next.config trước.'],
    ['Node.js deployment hỗ trợ?', 'Mọi tính năng.'],
    ['Static export?', 'Chỉ phục vụ HTML/CSS/JS tĩnh, hạn chế tính năng cần server.'],
    ['Docker output standalone?', 'Tạo image tối giản chỉ chứa file runtime cần thiết.']
  ],
  quiz: [
    { q: 'Route Handler định nghĩa trong file:', o: ['api.ts', 'route.ts', 'handler.ts', 'server.ts'], a: 1, e: 'Bên trong app.' },
    { q: 'Method không hỗ trợ trả về:', o: ['404', '405', '500', '200'], a: 1, e: 'Method Not Allowed.' },
    { q: 'app/page.js và app/route.js:', o: ['Hợp lệ', 'Xung đột', 'route thắng', 'Tự gộp'], a: 1, e: 'Cùng một segment.' },
    { q: 'Cache GET trong route handler (mô hình cũ):', o: ["dynamic = 'force-static'", 'cache = true', 'static = 1', 'Không thể'], a: 0, e: 'Method khác không cache.' },
    { q: 'Proxy trước đây tên là:', o: ['Gateway', 'Middleware', 'Edge', 'Filter'], a: 1, e: 'Đổi tên ở Next.js 16.' },
    { q: 'Số file proxy cho mỗi dự án:', o: ['1', '2', 'Không giới hạn', '0'], a: 0, e: 'Có thể tách module và import.' },
    { q: 'Proxy phù hợp cho:', o: ['Truy vấn DB nặng', 'Redirect/rewrite/sửa header theo request', 'Quản lý session đầy đủ', 'Render UI'], a: 1, e: 'Chỉ kiểm tra lạc quan cho auth.' },
    { q: 'Cấu hình giới hạn đường dẫn của Proxy:', o: ['config.matcher', 'routes', 'paths', 'include'], a: 0, e: 'Ví dụ /about/:path*.' },
    { q: 'Triển khai nào hỗ trợ đầy đủ tính năng?', o: ['Static export', 'Node.js server', 'Không cái nào', 'Chỉ CDN'], a: 1, e: 'Docker cũng vậy.' },
    { q: 'Static export có thể host trên:', o: ['S3/Nginx/Apache', 'Chỉ Vercel', 'Chỉ Node.js', 'Không đâu'], a: 0, e: 'Chỉ cần phục vụ file tĩnh.' }
  ],
  match: [
    ['route.ts', 'API endpoint'],
    ['proxy.ts', 'Chạy trước request'],
    ['matcher', 'Giới hạn đường dẫn Proxy'],
    ['next start', 'Server production Node.js'],
    ['output: "standalone"', 'Docker image tối giản'],
    ['output: "export"', 'Site tĩnh'],
    ['Adapter API', 'Tuỳ biến deploy theo nền tảng']
  ]
});
