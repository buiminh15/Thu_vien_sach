// Next.js – Chương 1: Giới thiệu và cài đặt.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 1,
  title: 'Giới thiệu và cài đặt',
  intro: 'Next.js là framework React để xây ứng dụng web full-stack: bạn viết giao diện bằng React component, Next.js lo thêm routing, render phía server, tối ưu hoá và tự cấu hình bundler/compiler. Chương này nói về hai router, yêu cầu hệ thống, <code>create-next-app</code>, cài tay, TypeScript, linter và alias import.',
  sections: [
    { icon: '🧭', title: 'Next.js là gì? App Router và Pages Router', blocks: [
      { t: 'p', x: 'Tài liệu chia làm 3 phần: <b>Getting Started</b> (hướng dẫn từng bước), <b>Guides</b> (theo tình huống) và <b>API Reference</b> (tra cứu từng tính năng). Kiến thức nền: HTML, CSS, JavaScript, React.' },
      { t: 'table', head: ['', 'App Router', 'Pages Router'], rows: [
        ['Thư mục', '<code>app/</code>', '<code>pages/</code>'],
        ['Đặc điểm', 'Bản mới, hỗ trợ React Server Components và các tính năng React mới', 'Router gốc, vẫn được hỗ trợ và cải tiến'],
        ['Phiên bản React', 'Dùng sẵn <b>React canary</b> (gồm mọi thay đổi ổn định của React 19) tích hợp trong Next.js', 'Dùng phiên bản React cài trong <code>package.json</code>']
      ] },
      { t: 'tip', x: 'Trên sidebar tài liệu có dropdown để đổi qua lại giữa docs App Router và Pages Router. Sách này tập trung vào <b>App Router</b>.' }
    ] },
    { icon: '⚡', title: 'Tạo dự án nhanh', blocks: [
      { t: 'steps', items: [
        'Chạy <code>npx create-next-app@latest my-app --yes</code> (hoặc pnpm/yarn/bun tương đương).',
        '<code>cd my-app</code> rồi <code>npm run dev</code>.',
        'Mở <code>http://localhost:3000</code>; sửa <code>app/page.tsx</code> và lưu để thấy cập nhật ngay.'
      ] },
      { t: 'p', x: '<code>--yes</code> bỏ qua câu hỏi và dùng cấu hình mặc định: <b>TypeScript, Tailwind CSS, ESLint, App Router, Turbopack</b>, alias import <code>@/*</code>, kèm <code>AGENTS.md</code> để hướng dẫn coding agent viết mã Next.js cập nhật. Khi chạy tương tác, các lựa chọn gồm: TypeScript, linter (ESLint / Biome / None), React Compiler, Tailwind, thư mục <code>src/</code>, App Router, <b>Cache Components</b>, alias và AGENTS.md.' },
      { t: 'table', head: ['Yêu cầu', 'Giá trị'], rows: [
        ['Node.js tối thiểu', '20.9'],
        ['Hệ điều hành', 'macOS, Windows (kể cả WSL), Linux'],
        ['Trình duyệt', 'Chrome 111+, Edge 111+, Firefox 111+, Safari 16.4+'],
        ['TypeScript tối thiểu', 'v5.1.0']
      ] }
    ] },
    { icon: '🛠️', title: 'Cài đặt thủ công', blocks: [
      { t: 'steps', items: [
        'Cài gói: <code>npm i next@latest react@latest react-dom@latest</code>. App Router dùng React canary tích hợp, nhưng vẫn nên khai báo react và react-dom trong package.json cho tooling.',
        'Thêm scripts: <code>dev</code> = <code>next dev</code>, <code>build</code> = <code>next build</code>, <code>start</code> = <code>next start</code>, <code>lint</code> = <code>eslint</code>.',
        'Tạo thư mục <code>app</code> và <b>root layout</b> <code>app/layout.tsx</code> — bắt buộc, phải chứa thẻ <code>&lt;html&gt;</code> và <code>&lt;body&gt;</code>.',
        'Tạo trang chủ <code>app/page.tsx</code> (export default một component).',
        'Tuỳ chọn: thư mục <code>public/</code> chứa file tĩnh, tham chiếu từ gốc <code>/</code> (ví dụ <code>public/profile.png</code> → <code>/profile.png</code>).'
      ] },
      { t: 'key', x: '<b>Turbopack</b> là bundler mặc định cho <code>next dev</code> và <code>next build</code>. Muốn dùng Webpack: <code>next dev --webpack</code> hoặc <code>next build --webpack</code>. Nếu quên tạo root layout, <code>next dev</code> sẽ tự tạo.' },
      { t: 'warn', x: 'Từ Next.js 16, <code>next build</code> <b>không còn tự chạy linter</b>. Hãy chạy linter qua script npm (ESLint với <code>eslint.config.mjs</code>, hoặc Biome với <code>biome check</code>). Dự án cũ dùng <code>next lint</code> có thể chuyển bằng codemod <code>@next/codemod@canary next-lint-to-eslint-cli</code>.' }
    ] },
    { icon: '🔧', title: 'TypeScript, editor và alias import', blocks: [
      { t: 'list', items: [
        '<b>TypeScript</b>: đổi tên file sang <code>.ts/.tsx</code> rồi chạy <code>next dev</code>; Next.js tự cài phụ thuộc và tạo <code>tsconfig.json</code>. Trong VS Code chọn “Use Workspace Version” để bật plugin TypeScript của Next.js.',
        '<b>Editor</b>: vì file đặt tên theo quy ước (<code>page.tsx</code>, <code>layout.tsx</code>…) nên tab dễ trùng; dùng <code>workbench.editor.customLabels.patterns</code> trong VS Code để hiện tên thư mục. JetBrains tự hiển thị thư mục.',
        '<b>Alias</b>: Next.js hỗ trợ sẵn <code>baseUrl</code> và <code>paths</code> trong tsconfig/jsconfig, giúp viết <code>import { Button } from \'@/components/button\'</code> thay cho <code>../../../components/button</code>.',
        '<b>Nâng cấp</b>: <code>npx next upgrade</code> (cập nhật cả tài liệu đi kèm trong <code>node_modules/next/dist/docs/</code>).'
      ] }
    ] }
  ],
  summary: [
    'Next.js = React + routing + render server + tối ưu hoá; có App Router (app/) và Pages Router (pages/).',
    'create-next-app --yes: TypeScript, Tailwind, ESLint, App Router, Turbopack, alias @/*; Node ≥ 20.9.',
    'Root layout bắt buộc có html và body; page.tsx tạo route; public/ chứa file tĩnh.',
    'Từ Next.js 16, next build không chạy lint; Turbopack là bundler mặc định.'
  ],
  cards: [
    ['Next.js là gì?', 'Framework React để xây ứng dụng full-stack, tự cấu hình bundler/compiler.'],
    ['Hai router của Next.js?', 'App Router (app/, hỗ trợ Server Components) và Pages Router (pages/).'],
    ['Lệnh tạo dự án nhanh?', 'npx create-next-app@latest my-app --yes'],
    ['--yes bật những gì?', 'TypeScript, Tailwind, ESLint, App Router, Turbopack, alias @/*, AGENTS.md.'],
    ['Node.js tối thiểu?', '20.9'],
    ['TypeScript tối thiểu?', 'v5.1.0'],
    ['Bundler mặc định?', 'Turbopack; dùng --webpack để chuyển sang Webpack.'],
    ['Root layout cần gì?', 'Bắt buộc, chứa <html> và <body>.'],
    ['Thư mục public để làm gì?', 'Chứa file tĩnh, tham chiếu từ URL gốc “/”.'],
    ['next build có chạy lint không?', 'Không (từ Next.js 16); chạy linter qua script npm.'],
    ['Alias @/* làm gì?', 'Ánh xạ đường dẫn tuyệt đối qua paths/baseUrl trong tsconfig, tránh ../../..']
  ],
  quiz: [
    { q: 'Thư mục chứa App Router là:', o: ['pages', 'app', 'src', 'routes'], a: 1, e: 'App Router dùng thư mục app.' },
    { q: 'Node.js tối thiểu để chạy Next.js là:', o: ['16', '18', '20.9', '22.5'], a: 2, e: 'Theo yêu cầu hệ thống trong tài liệu.' },
    { q: 'Root layout bắt buộc chứa:', o: ['Chỉ <main>', '<html> và <body>', '<head> và <script>', 'Không gì'], a: 1, e: 'Thiếu thì dev server tự tạo.' },
    { q: 'Bundler mặc định hiện nay là:', o: ['Webpack', 'Rollup', 'Turbopack', 'esbuild'], a: 2, e: 'Webpack dùng qua cờ --webpack.' },
    { q: 'Từ Next.js 16, next build:', o: ['Luôn chạy ESLint', 'Không tự chạy linter', 'Chạy Biome', 'Chạy test'], a: 1, e: 'Hãy thêm script lint riêng.' },
    { q: 'App Router dùng phiên bản React nào?', o: ['React 16', 'React canary tích hợp sẵn', 'Luôn bản trong package.json', 'Preact'], a: 1, e: 'Pages Router mới dùng bản trong package.json.' },
    { q: 'public/profile.png được truy cập tại:', o: ['/public/profile.png', '/profile.png', '/app/profile.png', '/static/profile.png'], a: 1, e: 'public được phục vụ từ gốc.' },
    { q: 'Linter được hỗ trợ khi tạo dự án gồm:', o: ['ESLint hoặc Biome', 'Chỉ JSHint', 'Chỉ TSLint', 'Không có'], a: 0, e: 'Hoặc chọn None.' },
    { q: 'Lệnh nâng cấp Next.js:', o: ['npm update next', 'npx next upgrade', 'next --upgrade', 'npm i -g next'], a: 1, e: 'Cũng cập nhật docs đi kèm.' },
    { q: 'Alias “@/components/button” cần cấu hình ở:', o: ['next.config.js bắt buộc', 'tsconfig/jsconfig paths', 'package.json', '.env'], a: 1, e: 'Next.js hỗ trợ sẵn paths/baseUrl.' }
  ],
  match: [
    ['app/', 'App Router'],
    ['pages/', 'Pages Router'],
    ['next dev', 'Chạy server phát triển'],
    ['next build', 'Build cho production'],
    ['next start', 'Chạy server production'],
    ['Turbopack', 'Bundler mặc định'],
    ['public/', 'File tĩnh']
  ]
});
