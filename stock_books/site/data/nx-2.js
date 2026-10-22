// Next.js – Chương 2: Cấu trúc dự án và routing theo file.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 2,
  title: 'Cấu trúc dự án và routing theo file',
  intro: 'Next.js định tuyến theo hệ thống file: <b>thư mục = đoạn URL (segment)</b>, <b>file đặc biệt = giao diện của đoạn đó</b>. Chương này liệt kê quy ước thư mục/file, route động, route group, private folder, parallel/intercepting route và các cách tổ chức dự án.',
  sections: [
    { icon: '📁', title: 'Thư mục và file cấp cao nhất', blocks: [
      { t: 'table', head: ['Mục', 'Vai trò'], rows: [
        ['<code>app</code> / <code>pages</code>', 'App Router / Pages Router'],
        ['<code>public</code>', 'Tài nguyên tĩnh'],
        ['<code>src</code>', 'Thư mục mã nguồn tuỳ chọn, tách code khỏi file cấu hình'],
        ['<code>next.config.js</code>', 'Cấu hình Next.js'],
        ['<code>proxy.ts</code>', 'Proxy (trước đây là middleware)'],
        ['<code>instrumentation.ts</code>', 'OpenTelemetry và instrumentation'],
        ['<code>.env*</code>', 'Biến môi trường (.env, .env.local, .env.production, .env.development) — không đưa lên git'],
        ['<code>eslint.config.mjs</code>, <code>tsconfig.json</code>', 'Cấu hình ESLint / TypeScript']
      ] }
    ] },
    { icon: '📄', title: 'File đặc biệt của routing', blocks: [
      { t: 'table', head: ['File', 'Công dụng'], rows: [
        ['<code>layout</code>', 'UI dùng chung (header, nav, footer)'],
        ['<code>page</code>', 'Trang; làm route công khai'],
        ['<code>loading</code>', 'UI chờ (skeleton), bọc bằng Suspense'],
        ['<code>not-found</code>', 'UI 404'],
        ['<code>error</code>', 'Error boundary của segment'],
        ['<code>global-error</code>', 'UI lỗi toàn cục'],
        ['<code>route</code>', 'API endpoint (Route Handler)'],
        ['<code>template</code>', 'Giống layout nhưng render lại mỗi lần điều hướng'],
        ['<code>default</code>', 'Trang dự phòng cho parallel route']
      ] },
      { t: 'key', x: 'Một route chỉ <b>công khai</b> khi có <code>page</code> hoặc <code>route</code>. Chỉ nội dung do page/route trả về mới gửi cho client, nên có thể <b>đặt chung (colocate)</b> file khác trong thư mục route mà không lo bị truy cập nhầm.' },
      { t: 'h3', x: 'Thứ tự lồng nhau của component' },
      { t: 'steps', items: ['layout.js', 'template.js', 'error.js (React error boundary)', 'loading.js (React Suspense boundary)', 'not-found.js (error boundary cho UI không tìm thấy)', 'page.js hoặc layout con'] }
    ] },
    { icon: '🔀', title: 'Route động, group và private folder', blocks: [
      { t: 'table', head: ['Đường dẫn', 'URL khớp'], rows: [
        ['<code>app/blog/[slug]/page.tsx</code>', '/blog/my-first-post'],
        ['<code>app/shop/[...slug]/page.tsx</code>', '/shop/clothing, /shop/clothing/shirts (catch-all)'],
        ['<code>app/docs/[[...slug]]/page.tsx</code>', '/docs, /docs/a/b (optional catch-all, khớp cả gốc)'],
        ['<code>app/(marketing)/page.tsx</code>', '/ — route group không vào URL'],
        ['<code>app/blog/_components/Post.tsx</code>', 'Không thành route (private folder)']
      ] },
      { t: 'widget', name: 'route-mapper', title: 'Đường dẫn file → URL' },
      { t: 'list', items: [
        '<b>Route group <code>(folder)</code></b>: tổ chức theo khu vực/đội nhóm, không đổi URL; cho phép nhiều layout cùng cấp, thêm layout cho nhóm route, hoặc nhiều <b>root layout</b> (khi đó mỗi root layout phải có html/body).',
        '<b>Private folder <code>_folder</code></b>: loại cả thư mục khỏi routing; dùng tách UI khỏi routing, tránh trùng tên quy ước tương lai. Muốn segment bắt đầu bằng “_” dùng <code>%5F</code>.',
        '<b>Parallel route <code>@slot</code></b>: slot có tên do layout cha render (sidebar + main). <b>Intercepting route</b> <code>(.)</code> <code>(..)</code> <code>(..)(..)</code> <code>(...)</code>: hiển thị route khác trong layout hiện tại, ví dụ modal xem chi tiết.',
        '<b>Loading skeleton chỉ cho một route</b>: đặt loading.tsx trong route group như <code>(overview)</code> để không áp cho các trang cùng cấp.'
      ] }
    ] },
    { icon: '🗂️', title: 'Chiến lược tổ chức dự án', blocks: [
      { t: 'p', x: 'Next.js không áp đặt cách tổ chức; hãy chọn một chiến lược và nhất quán. Tên như <code>components</code>, <code>lib</code> không có ý nghĩa đặc biệt.' },
      { t: 'table', head: ['Chiến lược', 'Ý tưởng'], rows: [
        ['Code ngoài <code>app</code>', 'app chỉ để routing; mã dùng chung ở thư mục gốc'],
        ['Thư mục cấp cao trong <code>app</code>', 'Mã dùng chung nằm ở gốc app'],
        ['Chia theo feature/route', 'Mã dùng chung ở gốc app, mã riêng đặt cạnh route dùng nó']
      ] },
      { t: 'p', x: 'Metadata file: <code>favicon.ico</code>, <code>icon</code>, <code>apple-icon</code>, <code>opengraph-image</code>, <code>twitter-image</code>, <code>sitemap</code>, <code>robots</code> (tĩnh hoặc sinh bằng code .js/.ts/.tsx).' }
    ] }
  ],
  summary: [
    'Thư mục = segment URL; file page/route làm route công khai.',
    'Hierarchy: layout → template → error → loading → not-found → page.',
    '[x] một tham số, [...x] catch-all, [[...x]] optional catch-all.',
    '(group) không vào URL; _private bị loại khỏi routing; @slot và (.) cho parallel/intercepting route.',
    'Colocation an toàn vì chỉ nội dung của page/route được gửi đi.'
  ],
  cards: [
    ['Thư mục trong app đại diện cho gì?', 'Một segment của URL.'],
    ['Điều kiện để route công khai?', 'Có page hoặc route file trong segment.'],
    ['layout vs template?', 'Template tạo instance mới và render lại mỗi lần điều hướng; layout giữ trạng thái.'],
    ['[slug] / [...slug] / [[...slug]]?', 'Một tham số / catch-all / optional catch-all (khớp cả đường dẫn gốc).'],
    ['Route group (folder)?', 'Tổ chức mã, không xuất hiện trong URL.'],
    ['Private folder _folder?', 'Bị loại khỏi routing; nơi đặt UI/utils nội bộ.'],
    ['@folder là gì?', 'Named slot của parallel route do layout cha render.'],
    ['(.)folder, (..)folder, (...)folder?', 'Intercept cùng cấp, cấp cha, từ gốc app.'],
    ['Nhiều root layout?', 'Bỏ layout gốc, thêm layout (có html/body) trong mỗi route group.'],
    ['Thứ tự component: layout, template, ...?', 'layout → template → error → loading → not-found → page.'],
    ['route.ts và page.tsx cùng cấp?', 'Xung đột — không được cùng một segment.']
  ],
  quiz: [
    { q: 'URL của app/(shop)/cart/page.tsx là:', o: ['/(shop)/cart', '/cart', '/shop/cart', '/cart/page'], a: 1, e: 'Route group bị bỏ khỏi URL.' },
    { q: 'app/docs/[[...slug]]/page.tsx khớp:', o: ['Chỉ /docs/a', 'Cả /docs lẫn /docs/a/b', 'Chỉ /docs', 'Không gì'], a: 1, e: 'Optional catch-all.' },
    { q: 'Thư mục _components trong app:', o: ['Là route', 'Bị loại khỏi routing', 'Là slot', 'Lỗi build'], a: 1, e: 'Private folder.' },
    { q: 'File nào tạo API endpoint?', o: ['page', 'route', 'layout', 'template'], a: 1, e: 'route.ts export các hàm GET/POST...' },
    { q: 'File nào được bọc Suspense tự động?', o: ['error', 'loading', 'default', 'layout'], a: 1, e: 'loading.js làm Suspense boundary.' },
    { q: 'Parallel route khai báo bằng:', o: ['(folder)', '_folder', '@folder', '[folder]'], a: 2, e: 'Named slot.' },
    { q: 'Layout nào render lại mỗi lần điều hướng?', o: ['layout', 'template', 'page', 'loading'], a: 1, e: 'Template re-render.' },
    { q: 'Một page.tsx và route.ts cùng thư mục sẽ:', o: ['Chạy song song', 'Xung đột', 'route thắng', 'Tự gộp'], a: 1, e: 'Mỗi route/page chiếm mọi HTTP verb.' },
    { q: 'Mục đích của thư mục src:', o: ['Bắt buộc', 'Tách mã khỏi file cấu hình', 'Chứa ảnh tĩnh', 'Chứa test'], a: 1, e: 'Tuỳ chọn.' },
    { q: 'Muốn loading chỉ áp cho một trang trong dashboard, dùng:', o: ['Đổi tên file', 'Route group như (overview)', 'Hai root layout', 'template'], a: 1, e: 'Nhóm không đổi URL.' }
  ],
  match: [
    ['layout', 'UI dùng chung, giữ trạng thái'],
    ['page', 'Làm route công khai'],
    ['loading', 'Skeleton / Suspense'],
    ['error', 'Error boundary'],
    ['[...slug]', 'Catch-all segment'],
    ['(group)', 'Không vào URL'],
    ['@slot', 'Parallel route']
  ]
});
