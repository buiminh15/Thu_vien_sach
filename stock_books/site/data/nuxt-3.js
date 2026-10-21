// Nuxt 4 – Chương 9–11: chế độ render & deploy, vòng đời/auto-import/plugin, chất lượng (hydration, hiệu năng, tiếp cận, TS, test).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nuxt4 = BOOK_DATA.nuxt4 || { chapters: [] };
const N3 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.nuxt4.chapters.push(

{
  n: 9,
  title: 'Chế độ render, prerender và deploy',
  intro: 'Một ứng dụng Nuxt có thể “ra” HTML theo nhiều cách: server dựng mỗi lần, dựng sẵn lúc build, để trình duyệt tự vẽ, hoặc kết hợp tùy từng route. Chọn đúng cách quyết định tốc độ, SEO, chi phí hosting.',
  sections: [
    { icon: '🍽', title: 'Bốn cách render', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (quán ăn):</b> <b>Universal (SSR)</b> = bếp nấu món ngay khi khách gọi, mang ra bàn nóng hổi. <b>Prerender/tĩnh</b> = làm sẵn cả khay từ sáng, ai gọi chỉ việc lấy (nhanh nhất, nhưng món cố định). <b>Client-side (SPA)</b> = phát nguyên liệu và công thức, khách tự nấu. <b>Hybrid</b> = mỗi món một cách: món phổ biến làm sẵn, món đặc biệt nấu theo yêu cầu.' },
      { t: 'table', head: ['Chế độ', 'Cách hoạt động', 'Ưu', 'Nhược', 'Hợp với'], rows: [
        ['<b>Universal (mặc định)</b>', 'Server chạy code Vue, trả HTML đầy đủ; trình duyệt <b>hydrate</b>', 'Hiển thị đầu nhanh, SEO tốt, vẫn tương tác', 'Code phải chạy được ở cả hai nơi; cần server chạy', 'Blog, trang giới thiệu, thương mại điện tử'],
        ['<b>Client-side</b> (<code>ssr: false</code>)', 'Trình duyệt tải JS rồi dựng giao diện', 'Phát triển đơn giản, hosting tĩnh rẻ, chạy offline', 'Hiển thị đầu chậm, SEO yếu', 'SaaS, trang quản trị, game'],
        ['<b>Hybrid</b> (<code>routeRules</code>)', 'Mỗi route một chế độ/caching', 'Linh hoạt', 'Cấu hình phức tạp hơn; không có với <code>nuxt generate</code>', 'Site lớn nhiều loại trang'],
        ['<b>Edge-side</b>', 'Chạy app trên máy chủ biên CDN gần người dùng', 'Giảm độ trễ', 'Là mục tiêu deploy hơn là chế độ', 'Cloudflare Pages, Vercel/Netlify Edge']
      ] },
      { t: 'widget', name: 'nx-rendering-pick', title: 'Chọn chế độ render cho dự án của bạn' }
    ] },
    { icon: '🎛', title: 'routeRules: render lai theo từng route', blocks: [
      { t: 'p', x: N3(`export default defineNuxtConfig({
  routeRules: {
    '/':            { prerender: true },       // dựng sẵn lúc build
    '/products':    { swr: true },             // cache, làm mới ngầm
    '/products/**': { swr: 3600 },             // cache 1 giờ
    '/blog':        { isr: 3600 },             // như swr, lưu ở CDN (Netlify/Vercel)
    '/admin/**':    { ssr: false },            // chỉ client
    '/api/**':      { cors: true },
    '/old-page':    { redirect: '/new-page' },
    '/proxy/**':    { proxy: 'https://api.example.com/**' },
  },
})`) },
      { t: 'table', head: ['Thuộc tính', 'Ý nghĩa'], rows: [
        ['<code>prerender</code>', 'Dựng HTML tĩnh lúc build'],
        ['<code>swr</code>', 'Stale-while-revalidate: trả bản cache, tái tạo ngầm sau TTL'],
        ['<code>isr</code>', 'Như swr nhưng lưu ở CDN (Netlify, Vercel)'],
        ['<code>ssr: false</code>', 'Route chỉ render ở client'],
        ['<code>redirect</code> / <code>proxy</code>', 'Chuyển hướng / chuyển tiếp request'],
        ['<code>cors</code>, <code>headers</code>', 'Thêm CORS / header tùy chỉnh'],
        ['<code>noScripts</code>', 'Bỏ script Nuxt và gợi ý tài nguyên JS'],
        ['<code>appMiddleware</code>', 'Điều khiển middleware app chạy cho các đường dẫn']
      ] },
      { t: 'widget', name: 'nx-routerules', title: 'Trình tạo routeRules: thêm route + chế độ → xem cấu hình' },
      { t: 'tip', x: '💡 <b>swr nói dễ hiểu:</b> báo cáo thời tiết dán ở cửa: ai ghé cũng đọc ngay tờ cũ; sau mỗi giờ nhân viên lặng lẽ thay tờ mới, khách không phải chờ.' }
    ] },
    { icon: '📦', title: 'Prerendering (dựng sẵn)', blocks: [
      { t: 'steps', items: [
        '<code>nuxt generate</code> (hoặc <code>nuxt build --prerender</code>) dựng và “bò” (crawl) trang: bắt đầu từ <code>/</code>, các trang tĩnh trong <code>pages/</code> và <code>prerender.routes</code>.',
        'Lưu HTML và <code>_payload.json</code> vào <code>.output/public/</code>.',
        'Tìm mọi thẻ <code>&lt;a href&gt;</code> trong HTML để đi tiếp tới trang khác; lặp đến khi hết link.'
      ] },
      { t: 'warn', x: 'Trang <b>không được link tới</b> từ trang nào sẽ không được dựng sẵn tự động — khai báo thủ công bằng <code>prerender.routes</code> hoặc <code>prerenderRoutes()</code>. Output tĩnh có thể tải lên bất kỳ hosting tĩnh nào (<code>npx serve .output/public</code> để xem thử).' },
      { t: 'list', items: [
        'Dựng sẵn có chọn lọc: <code>nitro.prerender.routes</code> và <code>ignore</code> trong nuxt.config.',
        'Cả build tĩnh/prerender cũng sinh <code>200.html</code> (dự phòng khi URL không khớp, để router client xử lý) và <code>404.html</code> (giữ mã 404 nhưng vẫn tải app).',
        'Bản dựng sẵn không bao gồm endpoint server.'
      ] }
    ] },
    { icon: '🌍', title: 'Deploy', blocks: [
      { t: 'tabs', items: [
        ['🖥 Node.js server', 'Mặc định. <code>nuxt build</code> tạo <code>.output/</code>; chạy <code>node .output/server/index.mjs</code>. Biến: <code>NITRO_PORT</code>/<code>PORT</code> (mặc định 3000), <code>NITRO_HOST</code>/<code>HOST</code> (0.0.0.0). Đặt <code>NODE_ENV=production</code> khi chạy (nếu không sẽ có nhiều cảnh báo dev, kể cả của Vue Router). PM2: dùng <code>ecosystem.config.cjs</code>.'],
        ['📄 Tĩnh', '<code>nuxt generate</code> rồi tải <code>.output/public</code> lên bất kỳ hosting tĩnh nào.'],
        ['☁️ Serverless / Edge', 'Preset Nitro: Vercel, Netlify, Cloudflare… thường không cần cấu hình; hoặc đặt <code>NITRO_PRESET=...</code> khi build.'],
        ['🔀 Đường dẫn con', 'Đặt <code>app.baseURL</code> hoặc <code>NUXT_APP_BASE_URL</code> khi app nằm ở sub-path.']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> kiểm tra bản build tại máy trước khi deploy bằng <code>nuxt preview</code>. Sau deploy, biến môi trường <b>lúc chạy</b> (<code>NUXT_...</code>) mới là thứ ghi đè <code>runtimeConfig</code> — file <code>.env</code> không tự nạp ở production.' }
    ] }
  ],
  summary: [
    'Bốn cách render: Universal (SSR), client-side (<code>ssr: false</code>), hybrid (<code>routeRules</code>), edge (đích triển khai).',
    '<code>routeRules</code>: prerender, swr, isr, ssr:false, redirect, proxy, cors, headers, noScripts.',
    '<code>nuxt generate</code> bò link để dựng sẵn; trang không được link phải khai báo tay; có <code>200.html</code>/<code>404.html</code>.',
    'Deploy: Node (node .output/server/index.mjs), tĩnh (.output/public), serverless/edge (preset Nitro).'
  ],
  cards: [
    ['Universal rendering?', 'Server render HTML rồi trình duyệt hydrate.'],
    ['Client-side rendering?', '<code>ssr: false</code>: trình duyệt dựng giao diện.'],
    ['Hybrid rendering?', 'Mỗi route một chế độ qua <code>routeRules</code>.'],
    ['<code>swr</code>?', 'Trả cache, tái tạo ngầm sau TTL.'],
    ['<code>isr</code>?', 'Như swr nhưng lưu ở CDN (Netlify/Vercel).'],
    ['<code>prerender: true</code>?', 'Dựng HTML tĩnh lúc build.'],
    ['<code>nuxt generate</code>?', 'Build và prerender toàn site bằng crawler.'],
    ['<code>200.html</code> là gì?', 'Trang dự phòng cho đường dẫn không khớp để router client xử lý.'],
    ['Cổng Node mặc định?', '3000 (<code>NITRO_PORT</code>/<code>PORT</code>).'],
    ['Chạy production cần gì?', '<code>NODE_ENV=production</code>.'],
    ['Hybrid có dùng được với <code>nuxt generate</code>?', 'Không.']
  ],
  quiz: [
    { q: 'Trang quản trị (SaaS) không cần SEO, hợp với:', o: ['Prerender toàn bộ', 'Client-side (ssr: false)', 'ISR', 'Edge'], a: 1, e: 'Đơn giản và hosting rẻ.' },
    { q: 'Trang blog cần SEO, nội dung ít đổi:', o: ['ssr: false', 'prerender hoặc isr/swr', 'Chỉ client', 'Không render'], a: 1, e: 'HTML sẵn nội dung và có cache.' },
    { q: 'Trang không được link tới sẽ:', o: ['Vẫn được dựng sẵn tự động', 'Không được dựng sẵn tự động', 'Báo lỗi build', 'Bị xóa'], a: 1, e: 'Crawler chỉ theo link.' },
    { q: 'isr khác swr ở chỗ:', o: ['Không cache', 'Lưu ở CDN trên nền tảng hỗ trợ', 'Chỉ ở client', 'Chỉ dev'], a: 1, e: 'Netlify/Vercel.' },
    { q: 'Chạy output Node:', o: ['node .output/server/index.mjs', 'npm start luôn', 'serve public', 'nuxt dev'], a: 0, e: 'Entry của Nitro Node preset.' }
  ],
  match: [
    ['ssr: false', 'Client-side rendering'],
    ['routeRules', 'Render lai theo route'],
    ['swr', 'Cache + tái tạo ngầm'],
    ['nuxt generate', 'Dựng tĩnh bằng crawler'],
    ['.output/public', 'Thư mục để đưa lên hosting tĩnh']
  ]
},

{
  n: 10,
  title: 'Vòng đời, auto-imports, plugins và Nuxt context',
  intro: 'Muốn hiểu vì sao có lúc code “chạy ở server mà không chạy ở client” hay lỗi “Nuxt instance is unavailable”, bạn cần biết app Nuxt chạy theo thứ tự nào, composable được tự import ra sao, và plugin dùng để làm gì.',
  sections: [
    { icon: '⏱', title: 'Vòng đời: server rồi client', blocks: [
      { t: 'p', x: 'Với yêu cầu đầu tiên (universal rendering), mọi thứ chạy <b>hai lần</b>: một lần ở server, một lần ở trình duyệt (hydrate).' },
      { t: 'widget', name: 'nx-lifecycle', title: 'Bấm từng bước để xem thứ tự vòng đời (server → client)' },
      { t: 'tabs', items: [
        ['🛰 Server', '1) Plugin Nitro (<code>server/plugins</code>) — chạy <b>một lần</b> khi server khởi động. 2) Middleware server. 3) Plugin app (<code>app/plugins</code>, cả built-in như vue-router/unhead và plugin của bạn, hoặc <code>.server</code>) → hook <code>app:created</code>. 4) Kiểm tra route (<code>validate</code> trong definePageMeta). 5) Middleware route. 6) Render trang + component, lấy dữ liệu (<code>useFetch</code>/<code>useAsyncData</code>). 7) Sinh HTML cùng cấu hình <code>unhead</code> → hook <code>app:rendered</code>, rồi Nitro gọi <code>render:html</code>.'],
        ['🌐 Client', '1) Plugin app (cả <code>.client</code>) → <code>app:created</code>. 2) Kiểm tra route. 3) Middleware route. 4) <b>Mount và hydrate</b> (<code>app.mount("#__nuxt")</code>): trước đó hook <code>app:beforeMount</code>; sau đó <code>app:mounted</code>. 5) Các hook vòng đời Vue (<code>onMounted</code>…).']
      ] },
      { t: 'warn', x: '<b>Không có phản ứng (reactivity) trên server:</b> Vue SSR render một lượt từ trên xuống thành HTML tĩnh nên không quay lại sửa được. Tránh code có tác dụng phụ cần dọn dẹp (như <code>setInterval</code>) ở cấp gốc của <code>&lt;script setup&gt;</code> — hãy đặt vào <code>onMounted</code> (chỉ chạy ở client).' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu – đang chạy ở đâu?</b> <code>import.meta.server</code> / <code>import.meta.client</code> cho biết code đang chạy ở server hay client; <code>onMounted</code> chỉ chạy ở client; <code>&lt;ClientOnly&gt;</code> bọc phần giao diện chỉ để client vẽ.' }
    ] },
    { icon: '🪄', title: 'Auto-imports', blocks: [
      { t: 'p', x: 'Nuxt tự nhập (import) giúp bạn: component, composable, tiện ích, API của Vue (<code>ref</code>, <code>computed</code>, <code>watch</code>, <code>onMounted</code>…) và hàm của Nuxt (<code>useFetch</code>, <code>useRoute</code>, <code>navigateTo</code>…). <b>Chỉ phần bạn dùng mới vào bản production</b>, và IDE vẫn gợi ý đầy đủ (không phải khai báo toàn cục kiểu cũ).' },
      { t: 'widget', name: 'nx-autoimport', title: 'Cái này có được auto-import không?' },
      { t: 'list', items: [
        'Từ <code>app/components/</code>, <code>app/composables/</code>, <code>app/utils/</code>; trong <code>server/</code> thì từ <code>server/utils/</code>.',
        'Thêm thư mục/gói riêng qua mục <code>imports</code> trong nuxt.config.',
        'Vẫn có thể <code>import</code> thủ công khi muốn (từ <code>#imports</code> hoặc đường dẫn).'
      ] },
      { t: 'key', x: '<b>Composable cần “ngữ cảnh”:</b> nhiều hàm Nuxt/Vue chỉ gọi được trong <b>plugin Nuxt, middleware route (bọc bằng <code>defineNuxtRouteMiddleware</code>) hoặc hàm <code>setup</code> của Vue</b>, và phải gọi <b>đồng bộ</b> (không sau <code>await</code> khác). Gọi sai chỗ sẽ gặp lỗi “Nuxt instance is unavailable”. Trong component không phải SFC, dùng <code>defineNuxtComponent</code> thay <code>defineComponent</code>. Tính năng thử nghiệm <code>asyncContext</code> cho phép dùng trong hàm async.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> ngữ cảnh Nuxt giống <b>thẻ nhân viên</b>: có thẻ (trong setup/plugin/middleware) mới mở được cửa phòng nội bộ (<code>useRoute</code>, <code>useFetch</code>…). Ra khỏi khu vực làm việc hay đi vòng sau một <code>await</code> thì “thẻ” bị thu hồi.' }
    ] },
    { icon: '🔌', title: 'Plugins', blocks: [
      { t: 'p', x: 'Plugin là code chạy <b>một lần khi tạo ứng dụng Vue</b> — để đăng ký thư viện Vue, cung cấp hàm dùng chung, móc hook. Mọi file ở <code>app/plugins/</code> được tự đăng ký (chỉ file ở cấp trên cùng hoặc <code>index</code> của thư mục con).' },
      { t: 'p', x: N3(`// app/plugins/hello.ts
export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: { hello: (name: string) => 'Xin chào ' + name }
  }
})
// dùng: const { $hello } = useNuxtApp(); $hello('Lan')`) },
      { t: 'table', head: ['Chủ đề', 'Chi tiết'], rows: [
        ['Hậu tố', '<code>.server.ts</code> chỉ server, <code>.client.ts</code> chỉ client, không hậu tố = cả hai'],
        ['Thứ tự', 'Mặc định tuần tự theo tên file; đánh số <code>01.a.ts</code>, <code>02.b.ts</code> để chủ động (so sánh chuỗi: <code>10.x</code> đứng trước <code>2.x</code>)'],
        ['<code>parallel: true</code>', 'Plugin bất đồng bộ nạp song song, không chặn plugin sau'],
        ['<code>dependsOn</code>', 'Khai báo plugin phụ thuộc plugin khác'],
        ['Cú pháp object', 'Cho nhu cầu nâng cao; thuộc tính được phân tích tĩnh nên đừng gán lúc chạy']
      ] },
      { t: 'warn', x: '<b>Thực hành tốt:</b> tránh plugin tốn công khởi tạo (chúng chạy lúc hydrate, làm trễ hiển thị); ưu tiên <i>composable</i> thay vì plugin khi được; plugin bất đồng bộ nên bật <code>parallel</code>.' }
    ] }
  ],
  summary: [
    'Vòng đời: plugin Nitro → middleware server → plugin app → validate → middleware route → render → HTML; rồi ở client: plugin → middleware → mount/hydrate.',
    'Trên server không có reactivity; tác dụng phụ cần dọn dẹp đặt ở <code>onMounted</code>.',
    'Auto-import từ components/composables/utils (và Vue/Nuxt API); composable cần Nuxt context và gọi đồng bộ.',
    'Plugin: <code>defineNuxtPlugin</code>, hậu tố .client/.server, đánh số thứ tự, <code>parallel</code>.'
  ],
  cards: [
    ['Plugin Nitro chạy khi nào?', 'Một lần khi server khởi động.'],
    ['Hook sau khi chạy plugin app?', '<code>app:created</code>.'],
    ['Reactivity trên server?', 'Không có; SSR render một lượt thành HTML tĩnh.'],
    ['Hook trước khi mount?', '<code>app:beforeMount</code>.'],
    ['Auto-import gồm gì?', 'Component, composable, utils, API của Vue và Nuxt.'],
    ['Lỗi “Nuxt instance is unavailable”?', 'Gọi composable Nuxt sai chỗ/bất đồng bộ ngoài ngữ cảnh.'],
    ['Plugin chỉ chạy ở client?', 'Hậu tố <code>.client.ts</code>.'],
    ['Cung cấp hàm cho toàn app?', '<code>return { provide: { name: fn } }</code>, dùng <code>$name</code>.'],
    ['Plugin bất đồng bộ không chặn?', '<code>parallel: true</code>.'],
    ['Biết đang chạy ở đâu?', '<code>import.meta.server</code>/<code>import.meta.client</code>.']
  ],
  quiz: [
    { q: 'setInterval trong &lt;script setup&gt; cấp gốc là ý tồi vì:', o: ['Không có reactivity trên server nên không dọn dẹp được', 'Quá nhanh', 'Cần TS', 'Không có lý do'], a: 0, e: 'Dùng onMounted.' },
    { q: 'useRoute() gọi trong:', o: ['Bất kỳ file .ts nào', 'setup/plugin/middleware (ngữ cảnh Nuxt)', 'public/', 'package.json'], a: 1, e: 'Cần Nuxt context.' },
    { q: 'Thứ tự đúng ở server:', o: ['Route middleware → plugin app → render', 'Plugin app → validate → route middleware → render', 'Render → plugin', 'Hydrate → plugin'], a: 1, e: 'Theo vòng đời.' },
    { q: 'Auto-import làm production bundle:', o: ['Chứa mọi thứ', 'Chỉ chứa phần dùng', 'Rỗng', 'Lớn hơn gấp đôi'], a: 1, e: 'Giữ tree-shaking.' },
    { q: 'Đảm bảo plugin B chạy sau A:', o: ['Không thể', 'Đánh số tên file/dependsOn', 'Đổi extension', 'Dùng CSS'], a: 1, e: 'Thứ tự tên file.' }
  ],
  match: [
    ['app:created', 'Sau khi plugin app chạy'],
    ['.client.ts', 'Plugin chỉ ở client'],
    ['defineNuxtPlugin', 'Khai báo plugin'],
    ['import.meta.server', 'Đang chạy ở server'],
    ['parallel', 'Nạp plugin song song']
  ]
},

{
  n: 11,
  title: 'Chất lượng: hydration, hiệu năng, tiếp cận, TypeScript, test',
  intro: 'Một app chạy được chưa đủ: nó phải nhanh, nhất quán giữa server và client, dùng được với người khuyết tật, có kiểu rõ ràng và có test. Nuxt hỗ trợ sẵn nhiều thứ cho các mục tiêu này.',
  sections: [
    { icon: '💧', title: 'Hydration mismatch: đừng bỏ qua cảnh báo', blocks: [
      { t: 'p', x: '<b>Hydration mismatch</b> xảy ra khi HTML do server dựng <b>khác</b> với cái client dựng khi hydrate. Không chỉ là cảnh báo: nó có thể làm hỏng app.' },
      { t: 'table', head: ['Hậu quả', 'Ví dụ'], rows: [
        ['Hiệu năng', 'Vue buộc re-render cả cây component → tương tác chậm, giật hình, nhảy bố cục'],
        ['Chức năng', 'Sự kiện không gắn được → nút/form không hoạt động; state lệch'],
        ['SEO', 'Công cụ tìm kiếm thấy nội dung khác người dùng']
      ] },
      { t: 'tabs', items: [
        ['🚫 API trình duyệt ở server', 'Dùng <code>window</code>, <code>localStorage</code> trong lúc render server. Giải pháp: <code>useCookie</code>, hoặc chỉ dùng trong <code>onMounted</code>/<code>&lt;ClientOnly&gt;</code>.'],
        ['🎲 Dữ liệu khác nhau', '<code>Math.random()</code>, <code>Date.now()</code> ở hai nơi cho giá trị khác. Giải pháp: lấy qua <code>useState</code>/<code>useFetch</code> để server và client dùng cùng một giá trị.'],
        ['🔀 Render theo trạng thái client', 'Điều kiện chỉ biết ở trình duyệt (kích thước màn hình…). Giải pháp: render sau khi mounted, hoặc <code>&lt;ClientOnly&gt;</code>.'],
        ['🧱 HTML không hợp lệ', 'Lồng <code>&lt;p&gt;</code> trong <code>&lt;p&gt;</code>, <code>&lt;div&gt;</code> trong <code>&lt;p&gt;</code>… trình duyệt tự “sửa” làm lệch cây DOM.']
      ] },
      { t: 'widget', name: 'nx-hydration-fix', title: 'Đoạn code này gây hydration mismatch không? Sửa thế nào?' }
    ] },
    { icon: '⚡', title: 'Hiệu năng', blocks: [
      { t: 'list', items: [
        '<b><code>&lt;NuxtLink&gt;</code></b>: thay thế thông minh cho <code>&lt;a&gt;</code>/<code>RouterLink</code>; tự <b>prefetch</b> khi link xuất hiện (hoặc khi tương tác nếu bạn chọn).',
        '<b>Hybrid rendering</b> với route rules để cache/dựng sẵn từng nhóm trang.',
        '<b>Lazy loading component</b> (tiền tố <code>Lazy</code>) và <b>lazy hydration</b> (hoãn tương tác đến khi hiện/rảnh/có tương tác).',
        '<b>Tránh lấy dữ liệu hai lần</b> bằng <code>useFetch</code>/<code>useAsyncData</code>.',
        '<b>Trang chủ yếu tĩnh:</b> kết hợp prerender + <code>noScripts</code> + server components + lazy hydration để gửi gần như 0 JavaScript (xem recipe “mostly-static”).',
        'Module hỗ trợ: <code>@nuxt/image</code> (ảnh), <code>@nuxt/fonts</code> (font), <code>@nuxt/scripts</code> (script bên thứ ba), v.v.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> lazy hydration như để nhân viên ở các bàn chưa có khách nghỉ — chỉ “bật đèn” (gắn tương tác) cho bàn có người ngồi. Đỡ tốn điện (CPU) lúc đầu giờ.' }
    ] },
    { icon: '♿', title: 'Tiếp cận (accessibility)', blocks: [
      { t: 'p', x: 'Phần lớn tiếp cận không riêng Nuxt (độ tương phản, ngữ nghĩa form, ARIA). Điều Nuxt đổi là <b>điều hướng</b>: sau hydration app chuyển trang phía client nên trình duyệt không tự thông báo “trang mới” cho trình đọc màn hình.' },
      { t: 'list', items: [
        '<b><code>&lt;NuxtRouteAnnouncer&gt;</code></b> đọc tiêu đề trang mới khi đổi route → <b>mỗi route phải có <code>&lt;title&gt;</code> riêng</b> (quan trọng nhất). Thông báo khác: <code>useRouteAnnouncer</code>; cập nhật trong trang (toast, lỗi form): <code>&lt;NuxtAnnouncer&gt;</code> + <code>useAnnouncer</code>.',
        '<b>Liên kết:</b> dùng <code>&lt;NuxtLink&gt;</code> (thẻ <code>&lt;a href&gt;</code> thật: focus được, chuột giữa mở tab mới); link khớp route hiện tại có <code>aria-current="page"</code>; file trong <code>public/</code> đánh dấu <code>external</code>.',
        '<b>Quản lý focus:</b> sau chuyển trang, focus không tự di chuyển → thêm <b>skip link</b> làm điểm tab đầu và <code>&lt;main tabindex="-1"&gt;</code> để nhận focus.',
        '<b>Kiểm thử:</b> thử duyệt app chỉ bằng bàn phím; module <code>@nuxt/a11y</code> (alpha) cảnh báo khi dev.'
      ] }
    ] },
    { icon: '🔷', title: 'TypeScript, code style, server components', blocks: [
      { t: 'tabs', items: [
        ['🔷 TypeScript', 'Mặc định Nuxt <b>không kiểm kiểu</b> khi <code>dev</code>/<code>build</code> (vì hiệu năng). Muốn kiểm: cài <code>typescript</code> + <code>vue-tsc</code> rồi <code>nuxt typecheck</code>, hoặc <code>typescript.typeCheck: true</code>. Kiểu tự sinh trong <code>.nuxt/</code>; dùng TypeScript <b>project references</b> (tsconfig riêng cho app/server/node/shared). Đừng sửa <code>tsconfig.json</code> gốc, mở rộng qua nuxt.config.'],
        ['🎯 ESLint', 'Dùng module <code>@nuxt/eslint</code> (cấu hình flat config, ESLint 9): chạy <code>npx nuxt module add eslint</code> rồi Nuxt sinh <code>eslint.config.mjs</code>.'],
        ['🏝 Server components', 'Component <code>.server.vue</code> render ở server, <b>không gửi JavaScript</b> của nó về client — hợp component nặng nội dung (markdown, bảng lớn). Kỹ thuật “island”, dùng <code>&lt;NuxtIsland&gt;</code>; còn <b>thử nghiệm</b> (<code>experimental.componentIslands</code>, mặc định <code>auto</code>). Phải có một phần tử gốc; không thể tương tác trực tiếp.']
      ] }
    ] },
    { icon: '🧪', title: 'Testing', blocks: [
      { t: 'p', x: 'Nuxt hỗ trợ test chính thức qua <b>@nuxt/test-utils</b> (gốc của bộ test chính Nuxt), có thể dùng cùng Vitest, Playwright…' },
      { t: 'table', head: ['Môi trường', 'Đặc điểm'], rows: [
        ['<b>Nuxt environment</b> (<code>happy-dom</code> hoặc <code>jsdom</code>)', 'Test chạy <i>bên trong</i> app Nuxt: có auto-imports, plugins, injections; helper <code>@nuxt/test-utils/runtime</code> (vd <code>mountSuspended</code>)'],
        ['<b>Node environment</b>', 'Test e2e (<code>@nuxt/test-utils/e2e</code>) kiểm app từ bên ngoài qua HTTP hoặc trình duyệt'],
        ['Lưu ý', 'Một file test chỉ chạy trong <b>một</b> môi trường; không dùng <code>runtime</code> và <code>e2e</code> chung một file (dùng Vitest <i>projects</i> để tách)']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> unit test chỉ hỗ trợ <code>vitest</code>. Test logic thuần (hàm tiện ích) không cần môi trường Nuxt — để nhanh hơn, đặt ở <code>test/unit/</code>; test component cần auto-import đặt ở <code>test/nuxt/</code>; luồng người dùng đặt ở <code>test/e2e/</code>.' }
    ] }
  ],
  summary: [
    'Hydration mismatch gây chậm, hỏng tương tác, lệch SEO: tránh API trình duyệt ở server, dữ liệu ngẫu nhiên, HTML không hợp lệ.',
    'Hiệu năng: NuxtLink prefetch, route rules, Lazy/lazy hydration, useFetch, noScripts + server components.',
    'Tiếp cận: tiêu đề riêng mỗi route (NuxtRouteAnnouncer), NuxtLink, skip link, focus.',
    'TypeScript tự sinh (kiểm kiểu bằng nuxt typecheck); ESLint qua @nuxt/eslint; test với @nuxt/test-utils + Vitest.'
  ],
  cards: [
    ['Hydration mismatch?', 'HTML server khác HTML client khi hydrate.'],
    ['Nguyên nhân hay gặp?', 'API trình duyệt ở server, dữ liệu ngẫu nhiên khác nhau, HTML không hợp lệ.'],
    ['Cách sửa dữ liệu khác nhau?', 'Dùng useState/useFetch để chia sẻ giá trị.'],
    ['Lazy hydration?', 'Hoãn gắn tương tác cho component đến khi cần.'],
    ['<code>NuxtRouteAnnouncer</code>?', 'Thông báo tiêu đề trang mới cho trình đọc màn hình.'],
    ['Skip link?', 'Liên kết đầu tiên để nhảy tới nội dung chính.'],
    ['Kiểm kiểu?', '<code>nuxt typecheck</code> (cần vue-tsc, typescript).'],
    ['ESLint chính thức?', 'Module <code>@nuxt/eslint</code>.'],
    ['Server component?', '<code>.server.vue</code> — render ở server, không gửi JS về client.'],
    ['Bộ test chính thức?', '<code>@nuxt/test-utils</code> (kèm Vitest).']
  ],
  quiz: [
    { q: 'Dùng window.innerWidth trong render server thường gây:', o: ['Nhanh hơn', 'Hydration mismatch/lỗi', 'Không ảnh hưởng', 'Giảm SEO ít'], a: 1, e: 'window không tồn tại ở server.' },
    { q: 'Mỗi route cần gì để trình đọc màn hình biết đã chuyển trang?', o: ['&lt;title&gt; riêng', 'Chỉ cần ảnh', 'Chỉ cần màu', 'Không cần gì'], a: 0, e: 'Announcer đọc tiêu đề.' },
    { q: 'Gửi gần 0 JS cho trang tĩnh:', o: ['ssr: false', 'prerender + noScripts (+ server components)', 'ISR', 'Pinia'], a: 1, e: 'Công thức mostly-static.' },
    { q: 'Test chạy trong ngữ cảnh Nuxt (auto-imports) dùng môi trường:', o: ['Node thuần', 'Nuxt (happy-dom/jsdom)', 'Browser thật', 'Không có'], a: 1, e: 'Runtime helper.' },
    { q: 'Server components hiện là:', o: ['Ổn định hoàn toàn', 'Thử nghiệm', 'Đã gỡ', 'Chỉ cho Vue 2'], a: 1, e: 'experimental.componentIslands.' }
  ],
  match: [
    ['hydration', 'Gắn tương tác vào HTML'],
    ['useCookie', 'Đọc cookie thân thiện SSR'],
    ['.server.vue', 'Component chỉ render ở server'],
    ['@nuxt/test-utils', 'Bộ test chính thức'],
    ['nuxt typecheck', 'Kiểm kiểu TypeScript']
  ]
}
);
