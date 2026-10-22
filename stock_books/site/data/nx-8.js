// Next.js – Chương 8: Xử lý lỗi và CSS.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 8,
  title: 'Xử lý lỗi và CSS',
  intro: 'Lỗi chia hai loại: <b>lỗi dự kiến</b> (validate form, request thất bại) — trả về như giá trị; và <b>ngoại lệ không bắt được</b> (bug) — ném ra và để <b>error boundary</b> xử lý. Phần sau là các cách đưa CSS vào ứng dụng: Tailwind, CSS Modules, Global CSS, stylesheet ngoài.',
  sections: [
    { icon: '✅', title: 'Lỗi dự kiến', blocks: [
      { t: 'list', items: [
        '<b>Server Function</b>: tránh try/catch và throw; mô hình hoá lỗi như <b>giá trị trả về</b> (<code>return { message: \'Failed to create post\' }</code>) rồi hiển thị bằng <code>useActionState(createPost, initialState)</code>: <code>state?.message</code> trong <code>aria-live="polite"</code>, <code>disabled={pending}</code>. Action nhận <code>(prevState, formData)</code>.',
        '<b>Server Component</b>: dựa vào response (<code>res.ok</code>) để render thông báo lỗi hoặc <code>redirect</code>.',
        '<b>Not found</b>: gọi <code>notFound()</code> (từ <code>next/navigation</code>) trong segment và tạo file <code>not-found.tsx</code> để hiện UI 404.'
      ] }
    ] },
    { icon: '💥', title: 'Ngoại lệ không bắt được', blocks: [
      { t: 'list', items: [
        '<b><code>error.tsx</code></b> trong segment: Client Component (<code>\'use client\'</code>) nhận <code>{ error, retry }</code>; <code>retry()</code> thử render lại segment. Lỗi nổi bọt lên error boundary gần nhất, nên đặt error.tsx ở nhiều cấp.',
        '<b><code>catchError</code></b> (từ <code>next/error</code>): tạo error boundary cho <b>bất kỳ phần nào của cây component</b>; hàm fallback nhận <code>(props, { error, retry })</code>.',
        '<b><code>global-error.tsx</code></b> ở gốc app: xử lý lỗi của root layout; phải tự có <code>&lt;html&gt;</code> và <code>&lt;body&gt;</code> vì thay thế root layout.'
      ] },
      { t: 'warn', x: 'Error boundary chỉ bắt lỗi <b>trong lúc render</b>, không bắt lỗi trong event handler hoặc code async. Với các trường hợp đó, tự <code>try/catch</code> và lưu lỗi bằng <code>useState</code>/<code>useReducer</code> rồi render UI dự phòng. Lỗi không xử lý bên trong <code>startTransition</code> thì nổi bọt lên error boundary gần nhất.' },
      { t: 'table', head: ['Loại lỗi', 'Cách xử lý'], rows: [
        ['Validate form, request thất bại', 'Trả về giá trị + useActionState'],
        ['Không tìm thấy tài nguyên', 'notFound() + not-found.tsx'],
        ['Bug khi render', 'error.tsx / catchError'],
        ['Lỗi root layout', 'global-error.tsx'],
        ['Lỗi trong event handler', 'try/catch + state']
      ] }
    ] },
    { icon: '🎨', title: 'CSS', blocks: [
      { t: 'table', head: ['Cách', 'Cài đặt / dùng'], rows: [
        ['<b>Tailwind CSS</b>', 'Cài <code>tailwindcss @tailwindcss/postcss</code>; plugin <code>@tailwindcss/postcss</code> trong <code>postcss.config.mjs</code>; <code>@import \'tailwindcss\';</code> trong <code>app/globals.css</code>; import file đó ở root layout. (Tailwind v3 có guide riêng cho trình duyệt cũ)'],
        ['<b>CSS Modules</b>', 'File <code>*.module.css</code>, <code>import styles from \'./blog.module.css\'</code> → <code>className={styles.blog}</code>; tên class được tạo duy nhất nên không xung đột'],
        ['<b>Global CSS</b>', 'Import ở root layout để áp cho mọi route; có thể import ở bất kỳ layout/page/component nào trong app'],
        ['<b>Stylesheet ngoài</b>', 'Import từ package (<code>bootstrap/dist/css/bootstrap.css</code>); trong React 19 cũng dùng được <code>&lt;link rel="stylesheet"&gt;</code>'],
        ['<b>Sass, CSS-in-JS</b>', 'Có guide riêng']
      ] },
      { t: 'warn', x: 'Style global không bị gỡ khi điều hướng giữa các route (do tích hợp Suspense của React) nên có thể xung đột. Khuyến nghị: global cho CSS <i>thật sự</i> toàn cục (như base của Tailwind), <b>Tailwind cho style component</b>, CSS Modules cho CSS riêng có phạm vi.' },
      { t: 'list', items: [
        '<b>Thứ tự CSS</b> theo thứ tự import trong code; production tự gộp/chia (chunk) stylesheet. Giữ import CSS ở một entry, import global/Tailwind ở root, đặt tên module nhất quán (<code>name.module.css</code> ↔ <code>name.tsx</code>), tắt linter tự sắp import (sort-imports); dùng option <code>cssChunking</code> để kiểm soát.',
        '<b>Dev và Production</b>: dev dùng Fast Refresh cập nhật CSS tức thì; production gộp thành nhiều file nhỏ minify và code-split. Thứ tự có thể khác dev nên luôn kiểm tra bằng <code>next build</code>.'
      ] }
    ] }
  ],
  summary: [
    'Lỗi dự kiến = giá trị trả về + useActionState; notFound() cho 404.',
    'error.tsx, catchError, global-error.tsx cho ngoại lệ khi render; event handler tự try/catch.',
    'CSS: Tailwind (khuyến nghị), CSS Modules, global ở root, stylesheet ngoài.',
    'Thứ tự CSS theo thứ tự import; luôn kiểm tra bản build.'
  ],
  cards: [
    ['Lỗi dự kiến xử lý ra sao?', 'Trả về như giá trị, hiển thị bằng useActionState.'],
    ['notFound()?', 'Hiển thị not-found.tsx cho segment (404).'],
    ['error.tsx phải là?', "Client Component ('use client'), nhận error và retry."],
    ['Lỗi nổi bọt lên đâu?', 'Error boundary gần nhất phía trên.'],
    ['catchError?', 'Tạo error boundary cho một phần bất kỳ của cây component.'],
    ['global-error.tsx?', 'Bắt lỗi root layout; phải có html và body.'],
    ['Error boundary không bắt?', 'Lỗi trong event handler và code async.'],
    ['Cài Tailwind?', 'tailwindcss + @tailwindcss/postcss, @import "tailwindcss" trong globals.css.'],
    ['CSS Modules?', '*.module.css, class có phạm vi cục bộ.'],
    ['Global CSS import ở đâu?', 'Root layout (hoặc bất cứ file nào trong app).'],
    ['Vì sao nên cẩn thận với global CSS?', 'Không bị gỡ khi điều hướng, dễ xung đột.'],
    ['Thứ tự CSS phụ thuộc gì?', 'Thứ tự import trong mã.']
  ],
  quiz: [
    { q: 'Trong Server Function, lỗi dự kiến nên:', o: ['throw', 'Trả về như giá trị', 'process.exit', 'Bỏ qua'], a: 1, e: 'Dùng với useActionState.' },
    { q: 'File hiển thị UI 404 cho segment:', o: ['error.tsx', 'not-found.tsx', 'loading.tsx', '404.html'], a: 1, e: 'Gọi notFound() để kích hoạt.' },
    { q: 'error.tsx phải là:', o: ['Server Component', 'Client Component', 'Route Handler', 'Layout'], a: 1, e: "Cần 'use client'." },
    { q: 'global-error.tsx phải có:', o: ['Chỉ <div>', '<html> và <body>', 'Không gì', 'Chỉ <head>'], a: 1, e: 'Thay thế root layout khi hoạt động.' },
    { q: 'Error boundary KHÔNG bắt lỗi trong:', o: ['Render', 'Event handler', 'Layout', 'Page'], a: 1, e: 'Tự try/catch và lưu vào state.' },
    { q: 'Hàm tạo boundary cho phần tuỳ ý:', o: ['catchError', 'handleError', 'tryCatch', 'boundary'], a: 0, e: 'Từ next/error.' },
    { q: 'CSS Modules tránh xung đột nhờ:', o: ['Prefix thủ công', 'Tên class sinh duy nhất', 'Shadow DOM', 'iframe'], a: 1, e: 'Phạm vi cục bộ.' },
    { q: 'Plugin PostCSS cho Tailwind v4:', o: ['@tailwindcss/postcss', 'tailwind-postcss', 'postcss-tw', 'sass'], a: 0, e: 'Khai báo trong postcss.config.mjs.' },
    { q: 'Style toàn cục nên import ở:', o: ['Từng component', 'Root layout', 'proxy.ts', 'public'], a: 1, e: 'Áp cho mọi route.' },
    { q: 'Để chắc thứ tự CSS cuối cùng nên:', o: ['Chỉ xem dev', 'Chạy next build kiểm tra', 'Đổi tên file', 'Tắt minify'], a: 1, e: 'Dev có thể khác production.' }
  ],
  match: [
    ['notFound()', '404 cho segment'],
    ['error.tsx', 'Error boundary route'],
    ['global-error.tsx', 'Lỗi root layout'],
    ['catchError', 'Boundary cấp component'],
    ['*.module.css', 'CSS phạm vi cục bộ'],
    ['@import "tailwindcss"', 'Bật Tailwind'],
    ['useActionState', 'Hiển thị lỗi dự kiến']
  ]
});
