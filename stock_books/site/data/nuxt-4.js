// Nuxt 4 – Chương 12–14: modules & layers, recipes & nâng cao, tra cứu API nhanh.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nuxt4 = BOOK_DATA.nuxt4 || { chapters: [] };
const N4 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.nuxt4.chapters.push(

{
  n: 12,
  title: 'Modules và Layers: mở rộng và chia sẻ',
  intro: 'Khi tính năng lõi chưa đủ, Nuxt cho bạn hai công cụ mở rộng: <b>module</b> (thêm tính năng/tích hợp, chạy lúc build) và <b>layer</b> (chia sẻ nguyên một “app một phần” — component, trang, cấu hình).',
  sections: [
    { icon: '🧩', title: 'Dùng module có sẵn', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> module là <b>bộ phụ kiện cắm vào</b> Nuxt: cần Pinia, ảnh tối ưu, SEO, đăng nhập… cài một module là có sẵn cả bộ (component, composable, cấu hình) mà bạn không tự lắp.' },
      { t: 'list', items: [
        'Cài bằng lệnh <code>npx nuxt module add &lt;tên&gt;</code> (tự cài gói và thêm vào <code>modules</code> trong nuxt.config).',
        'Khai báo: <code>modules: ["@nuxt/image", "@pinia/nuxt"]</code>; đặt tùy chọn riêng của module bằng khóa cấu hình của nó.',
        'Module là <b>chỉ-build-time</b> (không phải runtime); <code>buildModules</code> của Nuxt 2 đã bỏ.',
        'Tắt module (kể cả module kế thừa từ layer): đặt khóa cấu hình của nó thành <code>false</code> (từ v4.3).',
        'Tìm module cộng đồng ở trang Modules của Nuxt.'
      ] }
    ] },
    { icon: '🛠', title: 'Viết module của riêng bạn', blocks: [
      { t: 'steps', items: [
        '<b>Tạo từ starter:</b> dùng template chính thức → có <code>src/module.ts</code>, thư mục <code>playground</code> (app thử), test, cấu hình publish.',
        '<b>Chuẩn bị:</b> cài phụ thuộc, <code>npm run dev:prepare</code>, rồi <code>npm run dev</code> để chạy playground.',
        '<b>Định nghĩa module</b> bằng <code>defineNuxtModule</code> (từ <b>@nuxt/kit</b>) với <code>meta</code>, <code>defaults</code>, <code>setup(options, nuxt)</code>.',
        '<b>Kiểm thử và xuất bản</b> lên npm.'
      ] },
      { t: 'p', x: N4(`// modules/hello.ts  (module cục bộ, tự đăng ký)
import { defineNuxtModule, addPlugin, addServerHandler, createResolver } from '@nuxt/kit'

export default defineNuxtModule({
  meta: { name: 'hello', configKey: 'hello' },
  defaults: { greeting: 'Xin chào' },
  setup(options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    addPlugin(resolve('./runtime/plugin'))                 // thêm plugin
    addServerHandler({ route: '/api/hello', handler: resolve('./runtime/hello.get') })
  }
})`) },
      { t: 'table', head: ['Việc module thường làm', 'Hàm của @nuxt/kit'], rows: [
        ['Sửa cấu hình Nuxt', 'Chỉnh trực tiếp <code>nuxt.options</code> (dùng <code>defu</code> để gộp)'],
        ['Mở lộ tùy chọn ra runtime', 'Thêm vào <code>runtimeConfig.public</code> (đừng để bí mật ở public)'],
        ['Thêm plugin / component / composable', '<code>addPlugin</code>, <code>addComponent</code>, <code>addImports</code>'],
        ['Thêm route server', '<code>addServerHandler</code>'],
        ['Thêm trang', '<code>extendPages</code>'],
        ['Thêm plugin Vite', '<code>addVitePlugin</code>']
      ] },
      { t: 'warn', x: '<b>Thực hành tốt khi viết module:</b> (1) setup bất đồng bộ không nên quá <b>1 giây</b> (Nuxt cảnh báo) vì nó chặn module sau; (2) <b>đặt tiền tố</b> cho mọi thứ module xuất ra để khỏi trùng: component <code>&lt;FooButton&gt;</code> (không phải <code>&lt;Button&gt;</code>), composable <code>useFooData()</code>, route <code>/api/_foo/track</code>; (3) bên trong module cục bộ, code kiểu <code>app/</code> phải nằm ở <code>modules/tên/runtime/app/</code>; (4) module không phải runtime — chỉ chạy lúc build.' },
      { t: 'widget', name: 'nx-module-prefix', title: 'Tên nào đúng quy ước tiền tố cho module “nuxt-foo”?' }
    ] },
    { icon: '🧱', title: 'Layers: tái sử dụng cả “app”', blocks: [
      { t: 'p', x: 'Layer là một thư mục có cấu trúc giống app Nuxt (cần ít nhất <code>nuxt.config.ts</code>). App của bạn <b>kế thừa (extends)</b> layer và nhận component, composable, layout, middleware, page, plugin, utils, <code>server/</code>… của nó, cùng cấu hình.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> layer như <b>bản thiết kế nhà mẫu</b>: bạn dùng nguyên bản mẫu (bố cục, nội thất) làm nền, rồi sửa/ghi đè từng phòng theo ý. Công ty có nhiều dự án chung một “nhà mẫu” (theme, thư viện UI, cấu hình chuẩn).' },
      { t: 'list', items: [
        '<b>Dùng:</b> thư mục con trong <code>layers/</code> tự đăng ký (từ 3.12) và có alias <code>#layers/tên</code> (từ 3.16). Hoặc khai báo <code>extends: ["../base", "github:user/repo#main", "npm-package"]</code> trong nuxt.config (hỗ trợ kho git, kể cả riêng tư với token).',
        '<b>Ưu tiên:</b> cấu hình/files của <b>app bạn thắng</b> layer; giữa các layer, layer đứng trước trong <code>extends</code> thắng.',
        '<b>Ví dụ dùng:</b> bộ cấu hình chuẩn dùng chung, thư viện component, thư viện composable/utils, theme, kiến trúc mô-đun lớn (DDD).',
        '<b>Viết layer:</b> chỉ cần <code>nuxt.config.ts</code> + các thư mục được quét (<code>app/components</code>, <code>app/pages</code>, <code>server/</code>…). Đặt <code>$meta</code> để mô tả layer.'
      ] },
      { t: 'widget', name: 'nx-layer-vs-module', title: 'Cần Module hay Layer?' }
    ] }
  ],
  summary: [
    'Module = mở rộng lúc build (<code>nuxt module add</code>); layer = chia sẻ cả cấu trúc app (<code>extends</code>).',
    'Viết module: <code>defineNuxtModule</code> + @nuxt/kit (addPlugin, addComponent, addServerHandler…).',
    'Thực hành: setup nhanh (&lt;1s), đặt tiền tố cho mọi export, không để bí mật ở public runtime config.',
    'Layers kế thừa component/page/plugin/server/config; app của bạn ghi đè layer.'
  ],
  cards: [
    ['Cài module?', '<code>npx nuxt module add &lt;tên&gt;</code>.'],
    ['Module chạy khi nào?', 'Lúc build/khởi động Nuxt (không phải runtime).'],
    ['Helper định nghĩa module?', '<code>defineNuxtModule</code> từ <code>@nuxt/kit</code>.'],
    ['Vì sao đặt tiền tố?', 'Tránh trùng tên với module/app khác.'],
    ['Thời gian setup tối đa nên?', 'Dưới 1 giây (nếu hơn Nuxt cảnh báo).'],
    ['Module cục bộ đặt ở?', '<code>modules/*.ts</code> hoặc <code>modules/*/index.ts</code>.'],
    ['Layer là gì?', 'Thư mục giống app Nuxt để kế thừa và tái sử dụng.'],
    ['Layer tối thiểu cần?', 'Một file <code>nuxt.config.ts</code>.'],
    ['Đăng ký layer?', '<code>extends</code> hoặc thư mục <code>layers/</code> (tự đăng ký).'],
    ['Ai thắng khi trùng?', 'App của bạn ghi đè layer.']
  ],
  quiz: [
    { q: 'Cần thêm tích hợp (đăng nhập, ảnh) có sẵn:', o: ['Layer', 'Module', 'Middleware', 'Plugin Nitro'], a: 1, e: 'Cài module.' },
    { q: 'Chia sẻ theme + component giữa nhiều dự án:', o: ['Layer', 'public/', 'Cookie', 'CSS'], a: 0, e: 'Extends.' },
    { q: 'Module nên đặt tên composable thế nào?', o: ['useData', 'useFooData', 'data', 'getData'], a: 1, e: 'Tiền tố tên module.' },
    { q: 'Module chạy:', o: ['Ở trình duyệt', 'Lúc build/khởi động Nuxt', 'Ở CSS', 'Ở CDN'], a: 1, e: 'Build-time only.' },
    { q: 'Setup bất đồng bộ của module nên:', o: ['Hàng chục giây', 'Dưới 1 giây', 'Vô hạn', 'Không dùng async'], a: 1, e: 'Chặn module sau.' }
  ],
  match: [
    ['@nuxt/kit', 'Bộ công cụ viết module'],
    ['extends', 'Kế thừa layer'],
    ['defineNuxtModule', 'Định nghĩa module'],
    ['addPlugin', 'Thêm plugin từ module'],
    ['layers/', 'Layer tự đăng ký']
  ]
},

{
  n: 13,
  title: 'Recipes và chủ đề nâng cao',
  intro: 'Các “công thức” làm việc thật (gọi API ngoài kèm đăng nhập, đăng nhập bằng cookie mã hóa, site gần như tĩnh, tùy chỉnh route, thêm plugin Vite) và các cơ chế sâu hơn (hooks, sự kiện, runtime config, debug, thử nghiệm, tích hợp AI).',
  sections: [
    { icon: '🍳', title: 'Công thức thường gặp', blocks: [
      { t: 'tabs', items: [
        ['🌐 useFetch tùy biến (useAPI)', '<code>$fetch</code> cố ý không cấu hình toàn cục để hành vi nhất quán. Muốn mặc định riêng (baseURL, header <code>Authorization</code>, chuyển <code>/login</code> khi 401): tạo <b>composable bọc</b> (ví dụ <code>useAPI</code>) dùng <code>createUseFetch</code>, hoặc tạo <code>$fetch</code> riêng trong plugin rồi bọc bằng <code>useAsyncData</code> (để khỏi gọi hai lần khi SSR).'],
        ['🔐 Đăng nhập: nuxt-auth-utils', 'Module dùng <b>cookie được niêm phong (sealed) và mã hóa</b> để giữ session — không cần database cho session. Cài bằng <code>npx nuxt module add auth-utils</code>; cần biến <code>NUXT_SESSION_PASSWORD</code> (dev tự thêm vào <code>.env</code>, production phải tự đặt). API login: <code>server/api/login.post.ts</code> đọc body, kiểm tra, rồi <code>setUserSession(event, { user })</code>; phía app dùng <code>useUserSession()</code> (<code>loggedIn</code>, <code>user</code>, <code>clear</code>) và middleware chặn trang.'],
        ['🍃 Site gần như tĩnh', 'Giảm JS cho trang nội dung: 1) <b>prerender</b> trang; 2) <code>noScripts</code> bỏ script Nuxt; 3) <b>server components</b> cho phần cần server render mà không tương tác; 4) <b>lazy hydration</b> ở trang vẫn giữ script. Trang <code>noScripts</code> không hydrate → mọi chuyển trang đến/đi từ nó là <b>tải trang đầy đủ</b>.'],
        ['🛣 Tùy chỉnh route', 'Ngoài thư mục pages: (1) <code>router.options</code> với hàm <code>routes</code> nhận route quét được và trả danh sách mới; (2) hook <code>pages:extend</code> để thêm/sửa/xóa; (3) trong module: <code>extendPages</code>.'],
        ['⚡ Plugin Vite', 'Cần tính năng như import file YAML? Cài plugin Vite (vd <code>@rollup/plugin-yaml</code>) và thêm vào <code>vite.plugins</code> trong nuxt.config. Trong module dùng <code>addVitePlugin</code>.']
      ] },
      { t: 'widget', name: 'nx-recipe-pick', title: 'Chọn công thức phù hợp với yêu cầu' }
    ] },
    { icon: '🪝', title: 'Hooks và sự kiện tùy chỉnh', blocks: [
      { t: 'table', head: ['Loại hook', 'Dùng ở', 'Ví dụ'], rows: [
        ['<b>Nuxt hooks (lúc build)</b>', 'nuxt.config (<code>hooks: {}</code>) hoặc module (<code>nuxt.hook(...)</code>)', '<code>pages:extend</code>, <code>prerender:routes</code>'],
        ['<b>App hooks (lúc chạy)</b>', 'Plugin (<code>nuxtApp.hook(...)</code>) hoặc composable', '<code>app:created</code>, <code>vue:error</code>, <code>page:finish</code>'],
        ['<b>Hook Nitro</b>', '<code>server/plugins</code>', '<code>render:html</code>, <code>request</code>, <code>close</code>']
      ] },
      { t: 'p', x: 'Cơ chế hook dựa trên thư viện <b>hookable</b> (UnJS). Bạn cũng có thể <b>tự tạo sự kiện</b> để tách rời các phần của app:' },
      { t: 'p', x: N4(`const nuxtApp = useNuxtApp()
nuxtApp.hook('my:event', (payload) => { /* nghe */ })
await nuxtApp.callHook('my:event', { value: 1 })   // phát`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> hook là “chuông cửa” tại các thời điểm quan trọng. Bạn không sửa lõi Nuxt mà “đăng ký” một hàm để được gọi khi chuông reo (khi trang vừa tạo, khi HTML vừa dựng…). Sự kiện tùy chỉnh là bạn tự lắp chuông mới.' },
      { t: 'tip', x: 'Xem toàn bộ hook và sự kiện đang chạy trong panel <b>Hooks</b> của Nuxt DevTools.' }
    ] },
    { icon: '⚙️', title: 'Runtime config, NuxtApp, tính năng thử nghiệm, debug', blocks: [
      { t: 'list', items: [
        '<b>Runtime config:</b> <code>public</code> vào payload mọi trang; trong template dùng <code>$config.public</code>. Biến môi trường ghi đè theo mẫu <code>NUXT_&lt;KEY_HOA&gt;</code> (<code>NUXT_PUBLIC_API_BASE</code>). <code>runtimeConfig.appSecret</code> là bí mật gốc: tạo ≥ 32 byte ngẫu nhiên, mỗi môi trường một giá trị nhưng ổn định giữa các lần deploy và giữa các instance.',
        '<b>NuxtApp:</b> ngữ cảnh chạy (như “Nuxt context” ở Nuxt 2). Lấy bằng <code>useNuxtApp()</code> trong plugin, hook, middleware, setup. Có <code>nuxtApp.payload</code>, <code>nuxtApp.provide</code>, <code>nuxtApp.hook</code>, <code>nuxtApp.runWithContext</code>.',
        '<b>features:</b> bật/tắt tính năng tùy chọn (<code>devLogs</code>, <code>inlineStyles</code>, <code>noScripts</code>…).',
        '<b>experimental:</b> tính năng thử nghiệm bật qua <code>experimental.*</code> (<code>appManifest</code>, <code>asyncContext</code>, <code>componentIslands</code>…) — có thể bị đổi/gỡ.',
        '<b>Debug:</b> sourcemap, Node inspector, cấu hình debug trong VS Code; Nuxt DevTools để xem payload, hooks, components.',
        '<b>Nightly:</b> kênh phát hành đêm để thử trước (<code>nuxt upgrade --channel=nightly</code>).'
      ] },
      { t: 'warn', x: 'Đừng tự tin vào tính năng <code>experimental</code> cho dự án sống còn: chúng có thể thay đổi bất kỳ lúc nào.' }
    ] },
    { icon: '🤖', title: 'Dùng Nuxt với trợ lý AI', blocks: [
      { t: 'tabs', items: [
        ['📄 llms.txt', 'Nuxt phát hành <code>/llms.txt</code> (tổng quan có cấu trúc, ~5K token — nên bắt đầu từ đây) và <code>/llms-full.txt</code> (đầy đủ, hơn 1M token — chỉ dùng khi công cụ hỗ trợ ngữ cảnh rất lớn). Tham chiếu URL này trong Cursor/Windsurf/Copilot/Claude để AI hiểu Nuxt đúng phiên bản.'],
        ['🔌 MCP server', 'MCP (Model Context Protocol) cho trợ lý AI truy cập có cấu trúc vào tài liệu Nuxt: tài nguyên (<code>documentation-pages</code>, <code>blog-posts</code>, <code>deploy-providers</code>) và công cụ (<code>list-documentation-pages</code>, <code>get-documentation-page</code>, <code>get-getting-started-guide</code>, blog, deploy providers). Có thể lọc theo phiên bản (3.x, 4.x, 5.x).']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> khi hỏi AI về Nuxt, hãy nói rõ “Nuxt 4, thư mục app/” — rất nhiều ví dụ cũ trên mạng là Nuxt 2/3 (không có <code>app/</code>, khác cách đặt file).' }
    ] }
  ],
  summary: [
    'useAPI/createUseFetch cho mặc định riêng; nuxt-auth-utils cho session bằng cookie niêm phong; mostly-static = prerender + noScripts + islands.',
    'Hooks (hookable): build-time, app runtime, Nitro; có thể tự tạo sự kiện bằng <code>hook</code>/<code>callHook</code>.',
    'Runtime config + biến môi trường NUXT_...; <code>useNuxtApp()</code> cho ngữ cảnh; experimental có thể đổi bất kỳ lúc nào.',
    'llms.txt và MCP giúp trợ lý AI hiểu Nuxt đúng.'
  ],
  cards: [
    ['Vì sao $fetch không cấu hình toàn cục?', 'Để hành vi nhất quán trong toàn app; muốn mặc định thì tạo composable riêng.'],
    ['<code>createUseFetch</code>?', 'Tạo useFetch tùy biến có mặc định.'],
    ['nuxt-auth-utils lưu session ở đâu?', 'Cookie niêm phong và mã hóa (cần NUXT_SESSION_PASSWORD).'],
    ['Site gần như tĩnh gồm gì?', 'Prerender + noScripts + server components + lazy hydration.'],
    ['<code>pages:extend</code>?', 'Hook để thêm/sửa/xóa route đã quét.'],
    ['Nuxt hooks khác app hooks?', 'Nuxt hooks lúc build; app hooks lúc chạy.'],
    ['Phát sự kiện tùy chỉnh?', '<code>nuxtApp.callHook("tên", payload)</code>.'],
    ['Biến môi trường cho <code>public.apiBase</code>?', '<code>NUXT_PUBLIC_API_BASE</code>.'],
    ['<code>/llms.txt</code>?', 'Tổng quan tài liệu cho AI (~5K token).'],
    ['MCP là gì?', 'Giao thức cho AI truy cập dữ liệu/công cụ ngoài (ở đây là tài liệu Nuxt).']
  ],
  quiz: [
    { q: 'Cần header Authorization mặc định cho mọi lần gọi API:', o: ['Cấu hình $fetch toàn cục', 'Composable bọc/createUseFetch', 'Sửa node_modules', 'Không thể'], a: 1, e: 'Cố ý không toàn cục.' },
    { q: 'Hook chạy lúc runtime của app:', o: ['pages:extend', 'app:created', 'modules:done', 'nitro:build'], a: 1, e: 'App hook.' },
    { q: 'Trang noScripts khi điều hướng đến:', o: ['Chuyển trang client mượt', 'Tải trang đầy đủ', 'Lỗi', 'Không điều hướng được'], a: 1, e: 'Không có router client trên trang đó.' },
    { q: 'Nên bắt đầu cho AI đọc tài liệu Nuxt bằng:', o: ['/llms-full.txt luôn', '/llms.txt', 'HTML', 'PDF'], a: 1, e: 'Nhỏ, đủ ý chính.' },
    { q: 'Tính năng experimental:', o: ['Ổn định mãi mãi', 'Có thể đổi hoặc bị gỡ', 'Chỉ cho Nuxt 2', 'Bắt buộc bật'], a: 1, e: 'Dùng thận trọng.' }
  ],
  match: [
    ['hookable', 'Thư viện hook của UnJS'],
    ['useNuxtApp', 'Lấy ngữ cảnh Nuxt'],
    ['llms.txt', 'Tài liệu cho AI'],
    ['nuxt-auth-utils', 'Session bằng cookie niêm phong'],
    ['createUseFetch', 'useFetch tùy biến']
  ]
},

{
  n: 14,
  title: 'Tra cứu API nhanh: composables, utils, components, CLI',
  intro: 'Bảng tra cứu những API dùng nhiều nhất (chọn lọc từ 124 trang tab API). Dùng chương này như “cheat sheet”; khi cần chi tiết, xem trang tương ứng trên nuxt.com/docs/4.x/api.',
  sections: [
    { icon: '🔎', title: 'Tìm nhanh', blocks: [
      { t: 'widget', name: 'nx-api-lookup', title: 'Gõ từ khóa (ví dụ: cookie, redirect, meta, build) để tra API' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> tab API còn nhiều thứ khác — Components (<code>NuxtPage</code>, <code>NuxtLayout</code>, <code>NuxtLink</code>, <code>ClientOnly</code>, <code>NuxtImg</code>, <code>NuxtIsland</code>…), Composables (33), Utils (31), Commands (21), Kit (20). Bảng dưới là phần nên thuộc trước.' }
    ] },
    { icon: '🧪', title: 'Composables chính', blocks: [
      { t: 'table', head: ['Composable', 'Việc', 'Ghi nhớ'], rows: [
        ['<code>useFetch(url, opts)</code>', 'Lấy dữ liệu SSR-friendly', 'Trả <code>data, status, error, refresh, clear</code>; opts: <code>query, pick, key, lazy, watch, server, default</code>, interceptors'],
        ['<code>useAsyncData(key, fn)</code>', 'Bọc logic bất đồng bộ', 'Có <code>watch</code>, key phản ứng, handler hủy được bằng <code>signal</code>'],
        ['<code>useLazyFetch</code>/<code>useLazyAsyncData</code>', 'Bản không chặn điều hướng', '= <code>lazy: true</code>'],
        ['<code>useState(key, init)</code>', 'State SSR-friendly', 'Giá trị serialize được'],
        ['<code>useCookie(name, opts)</code>', 'Đọc/ghi cookie', 'opts: <code>maxAge, expires, httpOnly, secure, sameSite, path, domain, default, watch, readonly</code>'],
        ['<code>useRuntimeConfig()</code>', 'Đọc runtime config', 'Client chỉ thấy <code>public</code>'],
        ['<code>useAppConfig()</code>', 'Đọc app.config', 'Công khai'],
        ['<code>useRoute()</code> / <code>useRouter()</code>', 'Thông tin route / điều khiển router', '<code>route.params</code>, <code>route.query</code>'],
        ['<code>useHead</code> / <code>useSeoMeta</code>', 'Đặt thẻ head / meta SEO', 'Reactive'],
        ['<code>useNuxtApp()</code>', 'Ngữ cảnh Nuxt', 'Plugin, hook, payload'],
        ['<code>useError()</code>', 'Lỗi hiện tại', 'Kèm <code>clearError</code>'],
        ['<code>useRequestHeaders</code>/<code>useRequestFetch</code>', 'Chuyển header/cookie client khi gọi ở server', 'Cẩn thận với header gửi API ngoài']
      ] }
    ] },
    { icon: '🧰', title: 'Utils và components hay dùng', blocks: [
      { t: 'table', head: ['Tên', 'Việc'], rows: [
        ['<code>navigateTo(to, opts)</code>', 'Chuyển hướng (server + client); <code>external</code>, <code>redirectCode</code>, <code>open</code>; phải <code>await</code>/<code>return</code>'],
        ['<code>abortNavigation(err?)</code>', 'Hủy điều hướng trong middleware'],
        ['<code>defineNuxtRouteMiddleware</code>', 'Định nghĩa middleware route'],
        ['<code>definePageMeta</code>', 'Metadata trang: layout, middleware, name, path, props, alias, keepalive, key, pageTransition, validate'],
        ['<code>defineNuxtPlugin</code>', 'Định nghĩa plugin'],
        ['<code>createError</code> / <code>showError</code> / <code>clearError</code>', 'Tạo/hiện/xóa lỗi'],
        ['<code>defineRouteRules</code>', 'Đặt route rules ngay trong trang (thử nghiệm)'],
        ['<code>prerenderRoutes</code>', 'Chỉ định route cần dựng sẵn'],
        ['<code>&lt;NuxtLink&gt;</code>', 'Liên kết (prefetch, <code>external</code>, <code>prefetchOn</code>)'],
        ['<code>&lt;NuxtPage&gt;</code> / <code>&lt;NuxtLayout&gt;</code>', 'Hiện trang / bật layout'],
        ['<code>&lt;ClientOnly&gt;</code>', 'Chỉ render ở client (có slot fallback)'],
        ['<code>&lt;NuxtImg&gt;</code>', 'Ảnh tối ưu (module @nuxt/image)']
      ] }
    ] },
    { icon: '⌨️', title: 'Lệnh CLI', blocks: [
      { t: 'table', head: ['Lệnh', 'Tác dụng'], rows: [
        ['<code>nuxt dev</code>', 'Server phát triển (HMR, cổng 3000)'],
        ['<code>nuxt build</code>', 'Build ra <code>.output/</code>'],
        ['<code>nuxt generate</code>', 'Build + prerender (site tĩnh)'],
        ['<code>nuxt preview</code>', 'Chạy thử bản build ở máy'],
        ['<code>nuxt prepare</code>', 'Sinh kiểu/tệp trong <code>.nuxt/</code> (không chạy server)'],
        ['<code>nuxt typecheck</code>', 'Kiểm kiểu TypeScript'],
        ['<code>nuxt analyze</code>', 'Phân tích dung lượng bundle'],
        ['<code>nuxt add &lt;loại&gt; &lt;tên&gt;</code>', 'Sinh nhanh trang/component/composable/api…'],
        ['<code>nuxt module add &lt;tên&gt;</code>', 'Cài module'],
        ['<code>nuxt init</code>', 'Tạo dự án (cũng <code>npm create nuxt</code>)'],
        ['<code>nuxt upgrade</code>', 'Nâng cấp Nuxt'],
        ['<code>nuxt cleanup</code>', 'Xóa tệp Nuxt sinh ra'],
        ['<code>nuxt info</code>', 'Thông tin môi trường (dán khi báo lỗi)'],
        ['<code>nuxt devtools</code>', 'Bật/tắt Nuxt DevTools']
      ] },
      { t: 'tip', x: 'Cờ hay dùng: <code>--dotenv</code> (chọn file env), <code>--envName</code> (môi trường cấu hình), <code>nuxt dev -o</code> (mở trình duyệt), <code>--port</code>.' }
    ] }
  ],
  summary: [
    'Nhớ nhóm: dữ liệu (useFetch/useAsyncData/useState/useCookie), cấu hình (useRuntimeConfig/useAppConfig), điều hướng (navigateTo/definePageMeta/middleware), lỗi (createError…).',
    'Lệnh chính: dev, build, generate, preview, prepare, typecheck, add, module add, upgrade.',
    'Chi tiết đầy đủ ở nuxt.com/docs/4.x/api (124 trang).'
  ],
  cards: [
    ['Cookie SSR-friendly?', '<code>useCookie(name, opts)</code>.'],
    ['Chuyển hướng ở middleware?', '<code>return navigateTo("/login")</code>.'],
    ['Hủy điều hướng?', '<code>return abortNavigation()</code>.'],
    ['Đặt layout cho trang?', '<code>definePageMeta({ layout })</code>.'],
    ['Lấy dữ liệu không chặn điều hướng?', '<code>useLazyFetch</code> / <code>lazy: true</code>.'],
    ['Build site tĩnh?', '<code>nuxt generate</code>.'],
    ['Chạy thử bản build?', '<code>nuxt preview</code>.'],
    ['Sinh kiểu mà không chạy server?', '<code>nuxt prepare</code>.'],
    ['Phân tích bundle?', '<code>nuxt analyze</code>.'],
    ['Thông tin môi trường khi báo lỗi?', '<code>nuxt info</code>.']
  ],
  quiz: [
    { q: 'Lệnh sinh site tĩnh:', o: ['nuxt dev', 'nuxt generate', 'nuxt preview', 'nuxt prepare'], a: 1, e: 'Build + prerender.' },
    { q: 'Đọc bí mật ở server:', o: ['useAppConfig', 'useRuntimeConfig', 'useState', 'useCookie'], a: 1, e: 'Khóa riêng của runtimeConfig.' },
    { q: 'Hủy điều hướng:', o: ['abortNavigation', 'clearError', 'showError', 'refresh'], a: 0, e: 'Dùng trong middleware.' },
    { q: 'Cài nhanh module:', o: ['nuxt add module', 'nuxt module add', 'npm module', 'nuxt install'], a: 1, e: 'Thêm vào nuxt.config.' },
    { q: 'Sinh lại kiểu:', o: ['nuxt prepare', 'nuxt cleanup', 'nuxt info', 'nuxt init'], a: 0, e: 'Cập nhật .nuxt/.' }
  ],
  match: [
    ['useCookie', 'Cookie SSR-friendly'],
    ['nuxt preview', 'Chạy thử bản build'],
    ['definePageMeta', 'Metadata trang'],
    ['nuxt analyze', 'Phân tích bundle'],
    ['createError', 'Tạo lỗi có status']
  ]
}
);
