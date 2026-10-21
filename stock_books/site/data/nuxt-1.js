// Nuxt 4 (nuxt.com/docs/4.x) – bản tiếng Việt dễ hiểu – Chương 1–4.
// Khối "📚 Bổ sung ngoài tài liệu" = kiến thức chung để dễ hiểu hơn (không nằm trong trang docs).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nuxt4 = BOOK_DATA.nuxt4 || { chapters: [] };
const N1 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.nuxt4.chapters.push(

{
  n: 1,
  title: 'Nuxt là gì và vì sao dùng?',
  intro: 'Nuxt là framework mã nguồn mở dựng trên Vue.js để làm ứng dụng web full-stack: có sẵn định tuyến theo thư mục, render phía server (SSR), tự động import, TypeScript, và cả “backend” nhỏ. Bạn viết file .vue, còn phần cấu hình nặng nề Nuxt làm giúp.',
  sections: [
    { icon: '🧭', title: 'Nuxt khác Vue thường ở đâu?', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> Vue là <b>động cơ</b> (vẽ giao diện). Nuxt là <b>cả chiếc xe</b> đã lắp sẵn khung, bánh, vô-lăng: quy ước thư mục, định tuyến, lấy dữ liệu, server, build, deploy. Bạn lái luôn thay vì tự lắp ráp.' },
      { t: 'table', head: ['Việc cần làm', 'Với Vue “trần”', 'Với Nuxt'], rows: [
        ['Tạo trang mới', 'Tự cài vue-router, khai báo routes', 'Tạo file <code>app/pages/about.vue</code> → có route <code>/about</code>'],
        ['Dùng component', 'Phải <code>import</code> + đăng ký', 'Đặt trong <code>app/components/</code> → dùng luôn (auto-import)'],
        ['SEO / HTML sẵn nội dung', 'Cần tự cấu hình SSR', 'SSR có sẵn mặc định'],
        ['API backend nhỏ', 'Cần server riêng', 'Tạo file trong <code>server/api/</code>'],
        ['TypeScript', 'Tự cấu hình', 'Có sẵn, tự sinh kiểu']
      ] },
      { t: 'key', x: 'Nuxt không có vendor lock-in: có thể deploy gần như <b>ở mọi nơi</b> (server Node, tĩnh, serverless, edge).' }
    ] },
    { icon: '⚙️', title: 'Tự động hóa và quy ước', blocks: [
      { t: 'list', items: [
        '<b>File-based routing:</b> cấu trúc thư mục <code>app/pages/</code> chính là bản đồ trang.',
        '<b>Code splitting:</b> tự tách mã thành nhiều gói nhỏ → tải ban đầu nhẹ.',
        '<b>SSR có sẵn:</b> không phải dựng server riêng.',
        '<b>Auto-imports:</b> viết composable/component ở đúng thư mục là dùng được, vẫn giữ tree-shaking.',
        '<b>Data-fetching composables:</b> lấy dữ liệu tương thích SSR.',
        '<b>TypeScript không cần cấu hình</b> (kiểu và tsconfig tự sinh).',
        '<b>Vite</b> là công cụ build mặc định (HMR khi phát triển, tối ưu khi build).'
      ] },
      { t: 'widget', name: 'nx-structure', title: 'Bấm một thư mục để xem Nuxt tự làm gì với nó' }
    ] },
    { icon: '🖥', title: 'Server-side rendering (SSR) nói đơn giản', blocks: [
      { t: 'p', x: 'Với SSR, server gửi về <b>HTML đã có sẵn nội dung</b> thay vì một trang trống rồi chờ JavaScript vẽ.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (quán ăn):</b> không SSR giống bạn nhận <i>nguyên liệu + công thức</i> rồi tự nấu tại bàn (phải chờ). SSR là bạn nhận <i>món đã nấu xong</i>, ăn ngay; sau đó nhân viên mới mang thêm bộ đồ ăn (JavaScript) để bạn tự điều chỉnh. Phần “mang đồ ăn để món trở nên tương tác được” gọi là <b>hydration</b>.' },
      { t: 'table', head: ['Lợi ích SSR', 'Giải thích'], rows: [
        ['Tải trang đầu nhanh hơn', 'HTML hiển thị ngay'],
        ['SEO tốt hơn', 'Công cụ tìm kiếm thấy nội dung trong HTML'],
        ['Máy yếu chạy ổn hơn', 'Ít JavaScript phải chạy'],
        ['Dễ truy cập hơn', 'Trình đọc màn hình thấy nội dung ngay'],
        ['Dễ cache hơn', 'Có thể cache trang ở server/CDN']
      ] },
      { t: 'p', x: 'Nuxt linh hoạt: <code>nuxt generate</code> để dựng toàn bộ thành trang tĩnh; <code>ssr: false</code> để tắt SSR toàn cục; hoặc <b>hybrid rendering</b> bằng <code>routeRules</code> (mỗi route một kiểu) — chương 9.' }
    ] },
    { icon: '🧩', title: 'Các “bộ phận” của Nuxt', blocks: [
      { t: 'table', head: ['Thành phần', 'Vai trò'], rows: [
        ['<b>nuxt</b> (core)', 'Lõi framework'],
        ['<b>Vite / Rspack / webpack</b>', 'Công cụ đóng gói (Vite mặc định)'],
        ['<b>@nuxt/cli</b>', 'Các lệnh <code>nuxt dev</code>, <code>nuxt build</code>…'],
        ['<b>Nitro</b>', 'Server engine: tạo API, middleware; xuất thư mục <code>.output</code> chạy khắp nơi'],
        ['<b>@nuxt/kit</b>', 'Bộ công cụ để viết module']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> Nuxt hợp với trang cần SEO (blog, bán hàng, trang giới thiệu) và cả app nội bộ. Nếu chỉ làm một công cụ nội bộ nhỏ không cần SEO, Vue + Vite thuần cũng đủ — nhưng Nuxt vẫn tiết kiệm công cấu hình khi app lớn dần.' }
    ] }
  ],
  summary: [
    'Nuxt = Vue + quy ước thư mục + SSR + server (Nitro) + build (Vite) + TypeScript, cấu hình tối thiểu.',
    'SSR gửi HTML có sẵn nội dung → nhanh hơn, SEO tốt; rồi hydration làm trang tương tác.',
    'Có thể chạy SSR, tĩnh, SPA hoặc lai (routeRules); deploy gần như mọi nơi.'
  ],
  cards: [
    ['Nuxt là gì?', 'Framework dựng trên Vue.js để làm ứng dụng/website full-stack, tối ưu hiệu năng và SSR.'],
    ['File-based routing?', 'Mỗi file trong <code>app/pages/</code> tự tạo một route.'],
    ['Auto-imports?', 'Đặt component/composable đúng thư mục, dùng không cần <code>import</code>.'],
    ['SSR?', 'Server render HTML sẵn nội dung gửi về trình duyệt.'],
    ['Hydration?', 'Bước trình duyệt chạy lại code để gắn sự kiện, làm trang tương tác được.'],
    ['Nitro?', 'Server engine của Nuxt; tạo API, xuất <code>.output</code> chạy mọi nơi.'],
    ['Công cụ build mặc định?', 'Vite.'],
    ['Dựng toàn bộ thành tĩnh?', '<code>nuxt generate</code>.'],
    ['Tắt SSR toàn cục?', '<code>ssr: false</code> trong nuxt.config.'],
    ['Render lai từng route?', 'Cấu hình <code>routeRules</code>.']
  ],
  quiz: [
    { q: 'Tạo trang /about trong Nuxt bằng cách:', o: ['Khai báo route thủ công', 'Tạo app/pages/about.vue', 'Sửa package.json', 'Chạy lệnh deploy'], a: 1, e: 'Định tuyến theo file.' },
    { q: 'SSR cải thiện nhất:', o: ['Dung lượng ổ đĩa', 'Tốc độ hiển thị đầu và SEO', 'Màu sắc', 'Số dòng code'], a: 1, e: 'HTML có sẵn nội dung.' },
    { q: 'Nitro là:', o: ['Công cụ CSS', 'Server engine của Nuxt', 'Trình soạn thảo', 'Thư viện icon'], a: 1, e: 'Tạo API & output.' },
    { q: 'Hydration là:', o: ['Tải ảnh', 'Gắn tương tác vào HTML do server render', 'Nén JS', 'Cache CDN'], a: 1, e: 'Trình duyệt chạy lại code.' },
    { q: 'Build tool mặc định của Nuxt:', o: ['webpack', 'Vite', 'Gulp', 'Parcel'], a: 1, e: 'Vite (webpack, Rspack là tùy chọn).' }
  ],
  match: [
    ['app/pages/', 'Định tuyến theo file'],
    ['server/api/', 'API backend'],
    ['Nitro', 'Server engine'],
    ['Hydration', 'Làm HTML thành tương tác'],
    ['Vite', 'Build mặc định']
  ]
},

{
  n: 2,
  title: 'Cài đặt, nuxt.config và các loại cấu hình',
  intro: 'Bắt đầu một dự án Nuxt rất nhanh, và tất cả cấu hình xoay quanh một file: <code>nuxt.config.ts</code>. Nhưng có nhiều “loại cấu hình” dễ nhầm — đặc biệt <code>runtimeConfig</code> (có bí mật) và <code>app.config</code> (công khai). Chương này làm rõ.',
  sections: [
    { icon: '🚀', title: 'Tạo dự án mới', blocks: [
      { t: 'list', items: [
        '<b>Yêu cầu:</b> Node.js <code>22.x</code> trở lên (nên dùng bản LTS đang hoạt động, số chẵn: 22, 24…); trình soạn thảo (khuyên VS Code + tiện ích Vue chính thức); terminal.',
        '<b>Thử không cần cài:</b> sandbox trực tuyến (StackBlitz) trên trang cài đặt.'
      ] },
      { t: 'p', x: N1(`npm create nuxt@latest <ten-du-an>
cd <ten-du-an>
npm run dev -- -o      # chạy server dev, -o = tự mở trình duyệt`) },
      { t: 'tip', x: 'Ghi chú tối ưu từ tài liệu: dùng <b>WSL</b> nếu HMR chậm trên Windows; trên Windows dùng <code>127.0.0.1</code> thay <code>localhost</code> nếu mở chậm (vấn đề DNS). Cổng dev mặc định <code>3000</code>.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> bạn có thể dùng npm, yarn, pnpm, bun hoặc deno. Lệnh <code>npm create nuxt@latest</code> sẽ hỏi vài câu (module muốn cài, trình quản lý gói) rồi tạo khung; thư mục <code>app/</code> chứa code giao diện (xem chương 3).' }
    ] },
    { icon: '📝', title: 'nuxt.config.ts', blocks: [
      { t: 'p', x: 'File ở gốc dự án, dùng hàm <code>defineNuxtConfig</code> (có sẵn toàn cục, không cần import). Dùng để thêm module, đổi chế độ render, thêm CSS, đặt route rules…' },
      { t: 'p', x: N1(`export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    apiSecret: '123',                // chỉ server thấy
    public: { apiBase: '/api' }      // cả client thấy
  },
  $production: { routeRules: { '/**': { isr: true } } }  // chỉ khi production
})`) },
      { t: 'list', items: [
        'Khuyên dùng đuôi <code>.ts</code> để có gợi ý kiểu trong IDE.',
        '<b>Ghi đè theo môi trường:</b> <code>$production</code>, <code>$development</code>, hoặc tên tùy ý chọn bằng <code>nuxt build --envName staging</code>.',
        'Nuxt <b>tự khởi động lại</b> khi nhận thấy thay đổi ở nuxt.config, <code>.env</code>, <code>.nuxtignore</code>, <code>.nuxtrc</code>.',
        '<code>.nuxtrc</code>: cấu hình cú pháp phẳng (dựa trên rc9); nuxt.config sẽ ghi đè khi trùng.'
      ] }
    ] },
    { icon: '🔐', title: 'runtimeConfig và app.config: khác nhau thế nào?', blocks: [
      { t: 'table', head: ['', '<code>runtimeConfig</code>', '<code>app.config.ts</code>'], rows: [
        ['Nơi khai báo', 'nuxt.config', '<code>app/app.config.ts</code>'],
        ['Có thể chứa bí mật?', '<b>Có</b> (khóa riêng chỉ server; <code>public</code> thì client cũng thấy)', '<b>Không bao giờ</b> — luôn lộ cho client'],
        ['Ghi đè bằng biến môi trường?', 'Có: <code>NUXT_API_SECRET</code>, <code>NUXT_PUBLIC_API_BASE</code>', 'Không (xác định lúc build)'],
        ['Đọc bằng', '<code>useRuntimeConfig()</code>', '<code>useAppConfig()</code>'],
        ['Dùng cho', 'API key, URL môi trường', 'Giao diện/giá trị công khai (theme, tiêu đề)']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>runtimeConfig</code> như két sắt: ngăn riêng chỉ nhân viên (server) mở được, ngăn <code>public</code> để cả khách xem. <code>app.config</code> như bảng thông báo treo ngoài tường — ai cũng đọc được, nên đừng viết mật khẩu lên đó.' },
      { t: 'widget', name: 'nx-runtimeconfig', title: 'Khóa này ai nhìn thấy? (server / trình duyệt) và đặt biến môi trường thế nào' },
      { t: 'warn', x: 'Khóa bắt đầu bằng <code>app</code> trong runtimeConfig bị Nuxt giữ chỗ (<code>runtimeConfig.app</code>, <code>runtimeConfig.appSecret</code>) — đừng dùng cho giá trị của bạn. File <code>.env</code> chỉ nạp khi dev/build/generate; thêm nó vào <code>.gitignore</code>. Muốn dùng file khác (<code>.env.production</code>…) thêm <code>--dotenv</code>.' }
    ] },
    { icon: '⬆️', title: 'Nâng cấp', blocks: [
      { t: 'list', items: [
        '<code>npx nuxt upgrade</code> nâng lên bản mới nhất; có kênh <b>nightly</b> để thử trước.',
        'Nuxt 5 đang phát triển: từ Nuxt 4.2 có thể thử trước bằng <code>future.compatibilityVersion: 5</code> (Vite Environment API, định tuyến phân biệt hoa thường, v.v.).',
        'Chỉ cần quan tâm phiên bản <b>4.x</b> khi học theo giáo trình này.'
      ] },
      { t: 'widget', name: 'nx-config-builder', title: 'Trình tạo nuxt.config.ts: chọn tùy chọn, xem file sinh ra' }
    ] }
  ],
  summary: [
    'Tạo dự án: <code>npm create nuxt@latest</code>; cần Node 22+; dev ở cổng 3000.',
    'Cấu hình trung tâm: <code>nuxt.config.ts</code> (defineNuxtConfig); có ghi đè theo môi trường.',
    '<code>runtimeConfig</code> chứa bí mật (server) + <code>public</code>; <code>app.config</code> chỉ dành cho giá trị công khai.',
    'Biến môi trường ghi đè runtimeConfig theo quy ước <code>NUXT_...</code>.'
  ],
  cards: [
    ['Lệnh tạo dự án?', '<code>npm create nuxt@latest &lt;tên&gt;</code>.'],
    ['Node tối thiểu cho Nuxt 4?', '22.x trở lên.'],
    ['<code>defineNuxtConfig</code>?', 'Hàm khai báo cấu hình, có sẵn toàn cục.'],
    ['Ghi đè cấu hình theo môi trường?', '<code>$production</code>/<code>$development</code> hoặc <code>--envName</code>.'],
    ['Nơi đặt bí mật?', '<code>runtimeConfig</code> (khóa không nằm trong <code>public</code>).'],
    ['Biến môi trường ghi đè apiSecret?', '<code>NUXT_API_SECRET</code>.'],
    ['<code>app.config</code> có chứa bí mật được không?', 'Không — lộ cho client.'],
    ['Đọc runtimeConfig?', '<code>useRuntimeConfig()</code>.'],
    ['Đọc app.config?', '<code>useAppConfig()</code>.'],
    ['Nâng cấp Nuxt?', '<code>npx nuxt upgrade</code>.'],
    ['<code>.env</code> nạp khi nào?', 'Lúc dev, build, generate (không phải lúc chạy production).']
  ],
  quiz: [
    { q: 'Lưu API secret nên dùng:', o: ['app.config.ts', 'runtimeConfig (khóa riêng)', 'public/', 'components/'], a: 1, e: 'Chỉ server thấy.' },
    { q: 'Khóa trong runtimeConfig.public:', o: ['Chỉ server thấy', 'Cả client và server thấy', 'Không ai thấy', 'Chỉ build thấy'], a: 1, e: 'Phải coi là công khai.' },
    { q: 'Ghi đè giá trị lúc chạy bằng:', o: ['Biến môi trường NUXT_...', 'Sửa node_modules', 'Đổi tên file', 'CSS'], a: 0, e: 'Theo quy ước.' },
    { q: 'File .env được Nuxt nạp:', o: ['Cả lúc production đang chạy', 'Lúc dev/build/generate', 'Không bao giờ', 'Chỉ trên trình duyệt'], a: 1, e: 'Production dùng biến môi trường thật.' },
    { q: 'Chọn môi trường khi build:', o: ['--env prod', '--envName staging', '--mode', '--target'], a: 1, e: 'Tên khớp key ghi đè.' }
  ],
  match: [
    ['runtimeConfig', 'Cấu hình có bí mật (server)'],
    ['app.config.ts', 'Giá trị công khai build-time'],
    ['.nuxtrc', 'Cấu hình cú pháp phẳng'],
    ['nuxt upgrade', 'Nâng cấp Nuxt'],
    ['$production', 'Ghi đè cho production']
  ]
},

{
  n: 3,
  title: 'Cấu trúc thư mục Nuxt 4',
  intro: 'Nuxt dựa vào quy ước thư mục: đặt file đúng chỗ, Nuxt tự hiểu. Điểm mới của bản 4: code giao diện nằm trong <code>app/</code>, còn <code>server/</code>, <code>shared/</code>, <code>public/</code> nằm ở gốc.',
  sections: [
    { icon: '🗂', title: 'Bản đồ thư mục', blocks: [
      { t: 'p', x: N1(`my-app/
├─ app/                 ← code giao diện (Vue)
│  ├─ app.vue           ← điểm vào
│  ├─ app.config.ts
│  ├─ error.vue
│  ├─ pages/  components/  composables/  utils/
│  ├─ layouts/  middleware/  plugins/  assets/
│  └─ spa-loading-template.html
├─ server/              ← API, middleware server, plugins (Nitro)
├─ shared/              ← code dùng chung cho app + server
├─ public/              ← file tĩnh phục vụ nguyên trạng
├─ modules/             ← module cục bộ
├─ layers/              ← layer (nối thêm app)
├─ content/             ← (tuỳ chọn) Nuxt Content
├─ test/                ← bài test
├─ nuxt.config.ts  .env  .nuxtrc  .nuxtignore  tsconfig.json
├─ .nuxt/  .output/     ← sinh tự động, KHÔNG sửa/commit
└─ package.json`) },
      { t: 'widget', name: 'nx-structure', title: 'Bấm một thư mục để xem vai trò, có auto-import không, chạy ở đâu' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> như văn phòng có nhiều ngăn tủ dán nhãn. Nuxt biết bạn bỏ hồ sơ vào tủ nào là giấy tờ gì. Bạn không phải viết bảng chỉ dẫn “tủ nào chứa gì”.' }
    ] },
    { icon: '📁', title: 'Vai trò từng thư mục', blocks: [
      { t: 'tabs', items: [
        ['🖼 app/', '<code>app.vue</code> là thành phần gốc (nếu có <code>pages/</code> thì tùy chọn). <code>pages/</code> (route), <code>components/</code> (UI tái dùng, auto-import), <code>composables/</code> (hàm Vue dùng lại, auto-import ở <i>cấp trên cùng</i>), <code>utils/</code> (hàm tiện ích, quét giống composables), <code>layouts/</code> (khung bọc trang), <code>middleware/</code> (chạy trước khi vào route), <code>plugins/</code> (chạy khi tạo app), <code>assets/</code> (file được build xử lý). Các file <code>error.vue</code>, <code>app.config.ts</code>, <code>spa-loading-template.html</code> cũng ở đây.'],
        ['🛰 server/', '<code>server/api/*</code> (tự có tiền tố <code>/api</code>), <code>server/routes/*</code> (không tiền tố), <code>server/middleware/*</code> (chạy mỗi request), <code>server/plugins/*</code> (plugin Nitro), <code>server/utils/*</code> (auto-import cho server). Mỗi file export <code>defineEventHandler()</code>.'],
        ['🤝 shared/', 'Code dùng chung cho Vue app và Nitro (từ Nuxt 3.14+). Chỉ <code>shared/utils/</code> và <code>shared/types/</code> được auto-import; file khác import qua alias <code>#shared</code>. Không được import code Vue/Nitro.'],
        ['🌐 public/', 'Phục vụ ở URL gốc, build không đụng tới (<code>public/img/a.png</code> → <code>/img/a.png</code>). (Tên cũ ở Nuxt 2: <code>static/</code>.)'],
        ['🧩 modules/', 'Module cục bộ tự đăng ký: <code>modules/*/index.ts</code> hoặc <code>modules/*.ts</code>.'],
        ['🧱 layers/', 'Mỗi thư mục con trong <code>layers/</code> tự đăng ký như một layer (chương 12).'],
        ['⚙️ Tệp gốc', '<code>nuxt.config.ts</code>, <code>.env</code>, <code>.nuxtrc</code>, <code>.nuxtignore</code> (bỏ qua file khi build, cú pháp như .gitignore), <code>tsconfig.json</code> (đừng sửa trực tiếp, mở rộng qua nuxt.config), <code>package.json</code>.'],
        ['🤖 Tự sinh', '<code>.nuxt/</code> (kiểu, auto-import, tsconfig… dùng khi dev) và <code>.output/</code> (kết quả build để deploy). Thêm cả hai và <code>node_modules</code> vào <code>.gitignore</code>.']
      ] },
      { t: 'warn', x: '<b>Đừng nhầm hai nơi chạy:</b> không import code Vue (component, composable) vào <code>server/</code> và ngược lại không import code chỉ-server vào app. Nuxt build thành <b>hai gói riêng</b> (Vue app và Nitro server). Muốn chia sẻ thì để trong <code>shared/</code>, hoặc chỉ <code>import type</code>.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu – alias:</b> <code>~</code> trỏ vào thư mục <code>app/</code> (srcDir), <code>~~</code> trỏ vào gốc dự án, <code>#shared</code> vào <code>shared/</code>. Ví dụ <code>~/assets/css/main.css</code>, <code>~~/server/utils</code>.' }
    ] },
    { icon: '🧪', title: 'Kiểu và test', blocks: [
      { t: 'list', items: [
        'Nuxt tự sinh nhiều tsconfig (<code>.nuxt/tsconfig.app.json</code>, <code>.server.json</code>, <code>.node.json</code>, <code>.shared.json</code>) bằng <b>TypeScript project references</b> → mỗi phần có kiểu đúng ngữ cảnh.',
        'Kiểu chỉ cho app đặt ở <code>app/types/</code>, chỉ cho server ở <code>server/types/</code>, dùng chung ở <code>shared/types/</code>.',
        '<code>test/</code>: không được quét tự động; gợi ý tách <code>test/unit/</code> (nhanh, không cần runtime Nuxt), <code>test/nuxt/</code> (cần môi trường Nuxt), <code>test/e2e/</code> (kiểm cả app).'
      ] },
      { t: 'tip', x: 'Nếu IDE báo <code>Cannot find name \'useFoo\'</code> cho composable vừa tạo: chạy <code>nuxt dev</code>/<code>nuxt prepare</code> để sinh lại kiểu.' }
    ] }
  ],
  summary: [
    'Nuxt 4: giao diện ở <code>app/</code>; <code>server/</code>, <code>shared/</code>, <code>public/</code>, <code>modules/</code>, <code>layers/</code> ở gốc.',
    'pages/ = route; components/composables/utils = auto-import; layouts/middleware/plugins có quy tắc riêng.',
    'server/api có tiền tố /api; shared/ chia sẻ giữa app và server (không chứa code Vue/Nitro).',
    '<code>.nuxt/</code> và <code>.output/</code> sinh tự động, không commit.'
  ],
  cards: [
    ['Giao diện Nuxt 4 nằm ở đâu?', 'Thư mục <code>app/</code>.'],
    ['<code>server/api/</code> khác <code>server/routes/</code>?', 'api có tiền tố <code>/api</code>; routes không có.'],
    ['<code>public/</code>?', 'Tệp tĩnh phục vụ ở URL gốc, không qua build.'],
    ['<code>app/assets/</code> vs <code>public/</code>?', 'assets được build xử lý (Vite); public phục vụ nguyên trạng.'],
    ['<code>shared/</code>?', 'Code dùng chung cho Vue app và Nitro; không import Vue/Nitro vào đó.'],
    ['Alias <code>~</code> và <code>~~</code>?', '<code>~</code> = thư mục app; <code>~~</code> = gốc dự án.'],
    ['<code>.nuxt/</code>?', 'Thư mục sinh tự động (kiểu, auto-import…).'],
    ['<code>.output/</code>?', 'Kết quả build để deploy.'],
    ['<code>.nuxtignore</code>?', 'Bỏ qua file lúc build, cú pháp như .gitignore.'],
    ['Sinh lại kiểu?', 'Chạy <code>nuxt prepare</code> hoặc <code>nuxt dev</code>.']
  ],
  quiz: [
    { q: 'API đặt ở server/api/hello.ts sẽ có URL:', o: ['/hello', '/api/hello', '/server/hello', '/api/hello.ts'], a: 1, e: 'Tự thêm tiền tố /api.' },
    { q: 'Tệp tĩnh giữ nguyên tên (robots.txt) nên đặt:', o: ['app/assets', 'public/', 'server/', 'shared/'], a: 1, e: 'Phục vụ ở URL gốc.' },
    { q: 'Hàm dùng ở cả app và server nên đặt:', o: ['app/utils', 'server/utils', 'shared/utils', 'public'], a: 2, e: 'Auto-import ở cả hai.' },
    { q: 'Không nên commit:', o: ['app/', '.nuxt/ và .output/', 'nuxt.config.ts', 'package.json'], a: 1, e: 'Sinh tự động.' },
    { q: 'Composables chỉ được quét tự động ở:', o: ['Mọi cấp thư mục con', 'Cấp trên cùng (và index.ts của thư mục con)', 'Không quét', 'Chỉ trong server'], a: 1, e: 'Có thể re-export hoặc cấu hình scan nested.' }
  ],
  match: [
    ['app/pages', 'Route'],
    ['server/middleware', 'Chạy mỗi request ở server'],
    ['shared/utils', 'Hàm dùng chung app + server'],
    ['.output', 'Kết quả build'],
    ['modules/', 'Module cục bộ']
  ]
},

{
  n: 4,
  title: 'Giao diện: app.vue, components, layouts, assets, styling',
  intro: 'Nuxt chia giao diện thành các tầng: <code>app.vue</code> (gốc), <code>pages</code> (mỗi route), <code>layouts</code> (khung bọc), <code>components</code> (mảnh UI dùng lại). Cộng với cách xử lý hình ảnh, font, CSS.',
  sections: [
    { icon: '🏗', title: 'Bốn tầng giao diện', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (tòa nhà):</b> <b>app.vue</b> là mặt bằng cả tòa; <b>layout</b> là hành lang + cầu thang chung của một tầng; <b>page</b> là căn phòng cụ thể bạn đến; <b>component</b> là đồ nội thất dùng ở nhiều phòng (ghế, công tắc).' },
      { t: 'table', head: ['Tầng', 'Vai trò', 'Ghi chú'], rows: [
        ['<code>app/app.vue</code>', 'Điểm vào, hiển thị cho mọi route (Nuxt lo phần <code>main.js</code>)', 'Có <code>pages/</code> thì phải dùng <code>&lt;NuxtPage/&gt;</code>; không có <code>pages/</code> thì không cài vue-router'],
        ['<code>app/pages/*.vue</code>', 'Mỗi file = một route', '<b>Một phần tử gốc</b> (để có chuyển trang)'],
        ['<code>app/layouts/*.vue</code>', 'Khung chung (header/footer), dùng <code>&lt;slot/&gt;</code>', 'Bật bằng <code>&lt;NuxtLayout&gt;</code>; mặc định <code>default.vue</code>'],
        ['<code>app/components/*.vue</code>', 'Mảnh UI tái dùng', 'Tự import']
      ] },
      { t: 'p', x: N1(`<!-- app/app.vue -->
<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>`) },
      { t: 'widget', name: 'nx-layout-pick', title: 'Chọn tầng giao diện đúng cho từng thứ' }
    ] },
    { icon: '🧱', title: 'Components: tên tự động và tải lười', blocks: [
      { t: 'list', items: [
        '<b>Tên theo đường dẫn:</b> <code>components/base/foo/Button.vue</code> → <code>&lt;BaseFooButton /&gt;</code> (đoạn trùng bị lược). Nên đặt tên file khớp tên component.',
        '<b>Nhóm không đổi tên:</b> thư mục đặt trong ngoặc <code>(group)</code> không ảnh hưởng tên.',
        '<b>Component động:</b> dùng <code>resolveComponent("Tên")</code> với chuỗi cố định, hoặc import trực tiếp.',
        '<b>Tải lười:</b> thêm tiền tố <code>Lazy</code> (<code>&lt;LazyMountainsList /&gt;</code>) → mã chỉ tải khi cần.',
        '<b>Hydration lười:</b> hoãn việc “làm tương tác” đến khi component hiện ra trên màn hình (visible), lúc rảnh (idle), khi tương tác (interaction)…',
        '<b>Chỉ client / chỉ server:</b> hậu tố <code>.client.vue</code> / <code>.server.vue</code> hoặc bọc <code>&lt;ClientOnly&gt;</code>.',
        '<b>Toàn cục:</b> thư mục <code>components/global/</code> hoặc hậu tố <code>.global.vue</code> (không khuyến khích).'
      ] },
      { t: 'widget', name: 'nx-component-name', title: 'Gõ đường dẫn file → xem tên component dùng trong template' }
    ] },
    { icon: '🎨', title: 'Layouts', blocks: [
      { t: 'steps', items: [
        'Đặt <code>&lt;NuxtLayout&gt;</code> trong <code>app.vue</code> để bật layout.',
        'File <code>layouts/default.vue</code> dùng cho mọi trang chưa chỉ định; nội dung trang hiện ở <code>&lt;slot /&gt;</code>.',
        'Layout đặt tên: <code>layouts/custom.vue</code>, rồi trong trang <code>definePageMeta({ layout: "custom" })</code>; hoặc prop <code>name</code> của <code>&lt;NuxtLayout&gt;</code>; hoặc <code>appLayout</code> trong route rules.',
        'Tên chuẩn hóa kebab-case; thư mục lồng: <code>layouts/desktop/default.vue</code> → <code>desktop-default</code>.'
      ] },
      { t: 'warn', x: 'Layout phải có <b>một phần tử gốc</b> (không phải <code>&lt;slot/&gt;</code>) để có hiệu ứng chuyển layout. Nếu cả app chỉ có một layout, dùng thẳng <code>app.vue</code> + <code>&lt;NuxtPage/&gt;</code> cho gọn.' }
    ] },
    { icon: '🖼', title: 'Assets và styling', blocks: [
      { t: 'table', head: ['', '<code>public/</code>', '<code>app/assets/</code>'], rows: [
        ['Xử lý bởi build?', 'Không, giữ nguyên', 'Có (Vite: băm tên, tối ưu)'],
        ['URL?', 'Cố định: <code>/img/a.png</code>', 'Không có URL tĩnh; tham chiếu <code>~/assets/img/a.png</code>'],
        ['Hợp với', 'robots.txt, favicon, ảnh cần URL ổn định', 'CSS, font, ảnh muốn được tối ưu']
      ] },
      { t: 'list', items: [
        '<b>CSS cục bộ:</b> import trong component (<code>import "~/assets/css/first.css"</code>) hoặc <code>css: ["~/assets/css/main.css"]</code> trong nuxt.config để áp dụng toàn cục.',
        '<b>Font:</b> đặt ở <code>public/fonts</code> rồi <code>@font-face { src: url("/fonts/X.woff") }</code>.',
        '<b>Style khác:</b> SCSS/Sass, thư viện CSS (Tailwind, UI library) qua module hoặc npm.',
        '<code>src</code> tĩnh trong template được build viết lại (áp <code>app.baseURL</code>, băm file); <code>:src</code> ghép động thì dùng nguyên văn.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> với ảnh, module <code>@nuxt/image</code> cho thẻ <code>&lt;NuxtImg&gt;</code> tự đổi cỡ/định dạng (WebP/AVIF) và tải lười — đáng dùng khi site nhiều ảnh.' }
    ] }
  ],
  summary: [
    'app.vue (gốc) → layouts (khung) → pages (route) → components (mảnh).',
    'Component tên theo đường dẫn, <code>Lazy</code> để tải lười, <code>.client</code>/<code>.server</code> để chọn nơi render.',
    'Page và layout cần một phần tử gốc; layout dùng <code>&lt;slot/&gt;</code>.',
    'public/ giữ nguyên URL; assets/ được build tối ưu; CSS dùng import hoặc <code>css: []</code>.'
  ],
  cards: [
    ['<code>app.vue</code>?', 'Thành phần gốc hiển thị cho mọi route.'],
    ['Khi nào phải dùng <code>&lt;NuxtPage/&gt;</code>?', 'Khi có thư mục <code>app/pages/</code>.'],
    ['Layout mặc định?', '<code>app/layouts/default.vue</code>.'],
    ['Layout cần gì?', 'Một phần tử gốc, nội dung trang vào <code>&lt;slot/&gt;</code>.'],
    ['Đổi layout cho một trang?', '<code>definePageMeta({ layout: "tên" })</code>.'],
    ['<code>components/base/foo/Button.vue</code>?', '<code>&lt;BaseFooButton /&gt;</code>.'],
    ['Tải component lười?', 'Tiền tố <code>Lazy</code>.'],
    ['Chỉ render ở client?', 'Hậu tố <code>.client.vue</code> hoặc <code>&lt;ClientOnly&gt;</code>.'],
    ['Thêm CSS toàn cục?', '<code>css: ["~/assets/css/main.css"]</code>.'],
    ['Font cục bộ đặt ở?', '<code>public/fonts</code>.']
  ],
  quiz: [
    { q: 'Page phải có:', o: ['Nhiều phần tử gốc', 'Một phần tử gốc', 'Không có template', 'Một thẻ &lt;slot&gt; gốc'], a: 1, e: 'Để chuyển trang hoạt động.' },
    { q: 'Component tải lười dùng tiền tố:', o: ['Async', 'Lazy', 'Defer', 'Late'], a: 1, e: 'LazyXxx.' },
    { q: 'Ảnh cần URL cố định /logo.png đặt:', o: ['app/assets', 'public/', 'server/', 'layouts/'], a: 1, e: 'Phục vụ nguyên trạng.' },
    { q: 'Header + footer chung cho nhiều trang đặt ở:', o: ['pages', 'layouts', 'server', 'public'], a: 1, e: 'Layout.' },
    { q: 'Thêm CSS cho mọi trang:', o: ['css: [...] trong nuxt.config', 'Sửa package.json', 'Đổi tên file', 'Không thể'], a: 0, e: 'Hoặc import trong app.vue.' }
  ],
  match: [
    ['&lt;NuxtLayout&gt;', 'Bật layout'],
    ['&lt;NuxtPage&gt;', 'Nơi hiện trang của route'],
    ['LazyFoo', 'Component tải lười'],
    ['public/', 'URL tĩnh giữ nguyên'],
    ['app/assets/', 'Tệp do build xử lý']
  ]
}
);
