// Next.js – Chương 15 (Architecture): Kiến trúc bên trong Next.js.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 15,
  title: 'Architecture: Accessibility, Fast Refresh, Compiler, Browsers',
  intro: 'Phần Architecture giải thích Next.js hoạt động ra sao bên dưới: tính năng <b>tiếp cận</b> tích hợp, trải nghiệm <b>Fast Refresh</b>, <b>Next.js Compiler</b> viết bằng Rust (SWC) và <b>trình duyệt được hỗ trợ</b> cùng polyfill.',
  sections: [
    { icon: '♿', title: 'Accessibility', blocks: [
      { t: 'list', items: [
        '<b>Route announcer</b>: khi điều hướng client bằng <code>next/link</code>, Next.js tự thông báo cho công nghệ hỗ trợ. Tên trang được lấy theo thứ tự: <code>document.title</code> → phần tử <code>&lt;h1&gt;</code> → pathname của URL. Hãy cho mỗi trang <b>một title duy nhất và mô tả rõ</b>.',
        '<b>Linting</b>: ESLint tích hợp sẵn gồm <code>eslint-plugin-jsx-a11y</code>, cảnh báo <code>aria-props</code>, <code>aria-proptypes</code>, <code>aria-unsupported-elements</code>, <code>role-has-required-aria-props</code>, <code>role-supports-aria-props</code> (ví dụ nhắc thêm alt cho img, dùng đúng aria-* và role).',
        '<b>Tài nguyên</b>: WebAIM WCAG checklist, WCAG 2.2, The A11y Project; kiểm tra tỷ lệ tương phản màu; dùng <code>prefers-reduced-motion</code> cho animation.'
      ] }
    ] },
    { icon: '🔥', title: 'Fast Refresh', blocks: [
      { t: 'p', x: 'Tính năng React tích hợp (bật mặc định từ Next.js 9.4) cho phép tải lại trang trực tiếp mà vẫn <b>giữ state client tạm thời</b> khi lưu file; hầu hết thay đổi hiện trong vòng một giây.' },
      { t: 'table', head: ['Trường hợp sửa file', 'Fast Refresh làm gì'], rows: [
        ['Chỉ export React component', 'Cập nhật code của riêng file đó và render lại (sửa gì cũng được: style, logic, handler, effect)'],
        ['Có export không phải component', 'Chạy lại file đó và các file import nó (sửa theme.js cập nhật cả Button và Modal)'],
        ['Được import bởi file ngoài cây React', '<b>Quay về full reload</b>; tách hằng số ra file riêng để bật lại Fast Refresh']
      ] },
      { t: 'list', items: [
        '<b>Khả năng chịu lỗi</b>: lỗi cú pháp — sửa rồi lưu, lỗi tự biến mất và <b>không mất state</b>. Lỗi runtime — hiện overlay, sửa xong tự tắt; state giữ nếu lỗi không xảy ra lúc render, còn lỗi lúc render thì React mount lại app. Error boundary thử render lại ở lần sửa kế tiếp (đừng làm quá chi tiết).',
        '<b>Giới hạn</b> (state bị reset): class component; file có export khác ngoài component; HOC trả về class; <b>arrow function ẩn danh</b> <code>export default () =&gt; &lt;div/&gt;</code> (dùng codemod <code>name-default-component</code>).',
        '<b>Mẹo</b>: <code>// @refresh reset</code> trong file để buộc remount mỗi lần sửa; import phân biệt hoa thường (<code>./header</code> ≠ <code>./Header</code>) sẽ làm cả fast và full refresh hỏng.',
        '<b>Hooks</b>: <code>useState</code>, <code>useRef</code> giữ giá trị nếu không đổi tham số/thứ tự hook; hook có dependency (<code>useEffect/useMemo/useCallback</code>) <b>luôn chạy lại</b> khi Fast Refresh, bỏ qua danh sách phụ thuộc — hãy viết effect chịu được việc chạy lại (React Strict Mode ép điều này).'
      ] },
      { t: 'widget', name: 'fast-refresh-quiz', title: 'Fast Refresh giữ state không?' }
    ] },
    { icon: '⚙️', title: 'Next.js Compiler (SWC)', blocks: [
      { t: 'key', x: 'Compiler viết bằng <b>Rust</b> dựa trên <b>SWC</b>, thay Babel (biên dịch từng file) và Terser (minify bundle). Nhanh hơn Babel ~<b>17 lần</b>, bật mặc định từ Next.js 12. Chuyển sang SWC giúp Fast Refresh nhanh ~3 lần và build nhanh ~5 lần. Minifier SWC mặc định từ v13 (nhanh hơn Terser ~7 lần); từ v15 không tuỳ chỉnh minify qua config.' },
      { t: 'list', items: [
        '<b>Lý do chọn SWC</b>: dễ mở rộng (dùng như Crate), hiệu năng, hỗ trợ WebAssembly, cộng đồng Rust.',
        'Có <code>.babelrc</code> hoặc dùng tính năng chưa hỗ trợ thì ứng dụng <b>quay lại dùng Babel</b>.'
      ] },
      { t: 'table', head: ['Tính năng (next.config <code>compiler</code>)', 'Mô tả'], rows: [
        ['<code>styledComponents</code>, <code>emotion</code>', 'Port của babel plugin tương ứng (ssr, displayName là chính cho styled-components)'],
        ['<code>next/jest</code>', 'Cấu hình Jest tự động: mock CSS/ảnh, transform bằng SWC, nạp .env, bỏ qua node_modules và .next'],
        ['<code>relay</code>', 'Hỗ trợ Relay (artifactDirectory đặt ngoài <code>pages</code>)'],
        ['<code>reactRemoveProperties</code>', 'Xoá thuộc tính JSX (mặc định regex <code>^data-test</code>)'],
        ['<code>removeConsole</code>', 'Xoá mọi <code>console.*</code> (có thể <code>exclude: [\'error\']</code>)'],
        ['<code>transpilePackages</code>', 'Biên dịch gói monorepo hoặc node_modules (thay next-transpile-modules)'],
        ['<code>define</code> / <code>defineServer</code>', 'Thay biến lúc build (mọi môi trường / chỉ server và edge)'],
        ['<code>runAfterProductionCompile</code>', 'Hook sau khi biên dịch production xong, trước type check và tạo trang tĩnh; nhận <code>distDir</code>, <code>projectDir</code>'],
        ['Legacy decorators, <code>jsxImportSource</code>', 'Tự nhận từ tsconfig/jsconfig'],
        ['<code>optimizePackageImports</code>', 'Thay Modularize Imports (từ 13.5)']
      ] },
      { t: 'p', x: 'Tính năng thử nghiệm: <code>swcTraceProfiling</code> (trace cho Chromium/Perfetto), <code>swcPlugins</code> (plugin WASM).' }
    ] },
    { icon: '🌐', title: 'Trình duyệt được hỗ trợ và polyfill', blocks: [
      { t: 'table', head: ['Mục', 'Chi tiết'], rows: [
        ['Mặc định (Browserslist)', 'chrome 111, edge 111, firefox 111, safari 16.4; tuỳ chỉnh qua <code>browserslist</code> trong package.json'],
        ['Polyfill tự chèn', '<code>fetch()</code>, <code>URL</code>, <code>Object.assign()</code>; polyfill trùng trong dependency bị loại; chỉ tải cho trình duyệt cần nên đa số traffic không tải'],
        ['Polyfill riêng (App Router)', 'import vào <code>instrumentation-client.js</code>'],
        ['Polyfill riêng (Pages Router)', 'import ở <code>_app</code> hoặc component'],
        ['Nạp có điều kiện', 'Cô lập tính năng thiếu vào phần UI cụ thể và <code>import()</code> polyfill khi cần (ví dụ <code>structuredClone</code>)']
      ] },
      { t: 'p', x: 'Có thể dùng tính năng JS mới nhất: async/await (ES2017), object rest/spread (ES2018), dynamic <code>import()</code>, optional chaining, nullish coalescing (ES2020), class fields và static properties (ES2022)… TypeScript được hỗ trợ sẵn; cấu hình Babel tuỳ chỉnh là nâng cao.' }
    ] }
  ],
  summary: [
    'Route announcer đọc title → h1 → pathname; ESLint có jsx-a11y mặc định.',
    'Fast Refresh giữ state cho function component; arrow ẩn danh, class, file có export khác component làm reset; effect luôn chạy lại.',
    'Compiler Rust/SWC nhanh hơn Babel ~17x; có .babelrc thì quay lại Babel.',
    'Mặc định hỗ trợ Chrome/Edge/Firefox 111+, Safari 16.4+; polyfill tự động và tuỳ chỉnh qua instrumentation-client.'
  ],
  cards: [
    ['Route announcer đọc tên trang theo thứ tự nào?', 'document.title → <h1> → pathname.'],
    ['Plugin a11y tích hợp sẵn?', 'eslint-plugin-jsx-a11y.'],
    ['Fast Refresh bật từ phiên bản nào?', 'Next.js 9.4.'],
    ['Sửa file chỉ có component thì sao?', 'Chỉ cập nhật file đó, giữ state.'],
    ['Sửa file được import ngoài cây React?', 'Full reload.'],
    ['Điều khiến Fast Refresh mất state?', 'Class component, file export thêm, HOC trả class, arrow function ẩn danh.'],
    ['@refresh reset làm gì?', 'Buộc remount component trong file mỗi lần sửa.'],
    ['Hook có dependency khi Fast Refresh?', 'Luôn chạy lại, bỏ qua dependency.'],
    ['Next.js Compiler dựa trên gì?', 'SWC viết bằng Rust, thay Babel và Terser.'],
    ['SWC nhanh hơn Babel?', '~17 lần (build ~5x, Fast Refresh ~3x).'],
    ['Khi nào quay lại Babel?', 'Có .babelrc hoặc dùng tính năng chưa hỗ trợ.'],
    ['removeConsole?', 'Xoá console.*; có thể exclude error.'],
    ['transpilePackages?', 'Biên dịch gói monorepo/node_modules, thay next-transpile-modules.'],
    ['Trình duyệt hỗ trợ mặc định?', 'Chrome/Edge/Firefox 111+, Safari 16.4+.'],
    ['Thêm polyfill ở App Router?', 'import trong instrumentation-client.js.']
  ],
  quiz: [
    { q: 'Route announcer ưu tiên đọc:', o: ['<h1>', 'document.title', 'URL', 'alt'], a: 1, e: 'Rồi mới tới h1 và pathname.' },
    { q: 'Fast Refresh giữ state của:', o: ['Class component', 'Function component và hooks', 'Mọi thứ', 'Không gì'], a: 1, e: 'Class component bị reset.' },
    { q: 'Sửa file import bởi file ngoài cây React:', o: ['Cập nhật tức thì', 'Full reload', 'Lỗi', 'Không đổi'], a: 1, e: 'Tách hằng ra file riêng.' },
    { q: 'export default () => <div/> khiến:', o: ['Giữ state', 'Không giữ state', 'Lỗi build', 'Tăng tốc'], a: 1, e: 'Dùng codemod name-default-component.' },
    { q: 'Directive buộc remount mỗi lần sửa:', o: ['// @refresh reset', '// @remount', 'use fresh', 'force'], a: 0, e: 'Cục bộ trong file.' },
    { q: 'SWC được viết bằng:', o: ['Go', 'Rust', 'C++', 'Java'], a: 1, e: 'Next.js Compiler.' },
    { q: 'Bật Babel trở lại khi:', o: ['Có .babelrc', 'Dùng TypeScript', 'Dùng Tailwind', 'Dùng app/'], a: 0, e: 'Giữ tương thích ngược.' },
    { q: 'Xoá console.* trừ error:', o: ['removeConsole: { exclude: ["error"] }', 'silent', 'dropLogs', 'noConsole'], a: 0, e: 'Trong next.config compiler.' },
    { q: 'Safari tối thiểu mặc định:', o: ['14', '15', '16.4', '17.2'], a: 2, e: 'Theo Browserslist mặc định.' },
    { q: 'Polyfill riêng ở App Router đặt trong:', o: ['_app.tsx', 'instrumentation-client.js', 'layout.tsx', 'proxy.ts'], a: 1, e: 'Pages Router dùng _app.' },
    { q: 'Effect khi Fast Refresh:', o: ['Không chạy lại', 'Luôn chạy lại dù dependency không đổi', 'Chỉ chạy lần đầu', 'Bị xoá'], a: 1, e: 'Viết effect chịu được chạy lại.' }
  ],
  match: [
    ['Route announcer', 'Thông báo chuyển trang cho screen reader'],
    ['Fast Refresh', 'Hot reload giữ state'],
    ['SWC', 'Compiler Rust của Next.js'],
    ['Browserslist', 'Cấu hình trình duyệt mục tiêu'],
    ['transpilePackages', 'Biên dịch gói ngoài'],
    ['instrumentation-client', 'Nơi nạp polyfill App Router'],
    ['jsx-a11y', 'Lint tiếp cận']
  ]
});
