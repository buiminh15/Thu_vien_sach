// Nuxt 4 – Chương 5–8: routing, data fetching, state/error/SEO, server.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nuxt4 = BOOK_DATA.nuxt4 || { chapters: [] };
const N2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.nuxt4.chapters.push(

{
  n: 5,
  title: 'Routing, điều hướng và middleware',
  intro: 'Nuxt dựng sẵn bản đồ trang từ thư mục <code>app/pages/</code> (dựa trên vue-router). Bạn học cách đặt tên file để có route tĩnh, động, tùy chọn; cách chuyển trang bằng <code>&lt;NuxtLink&gt;</code>; và cách chặn/chuyển hướng bằng middleware.',
  sections: [
    { icon: '🗺', title: 'Từ file thành route', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> tên file = địa chỉ nhà. Bạn dựng căn nhà đặt tên <code>about.vue</code> thì khách tìm thấy ở <code>/about</code>. Tên trong ngoặc vuông <code>[id]</code> là “biển số nhà để trống”: bất cứ số nào (/users/5, /users/9) đều vào cùng căn đó.' },
      { t: 'table', head: ['File trong <code>app/pages/</code>', 'Route', 'Loại'], rows: [
        ['<code>index.vue</code>', '<code>/</code>', 'Tĩnh'],
        ['<code>about.vue</code>', '<code>/about</code>', 'Tĩnh'],
        ['<code>users/[id].vue</code>', '<code>/users/123</code>', 'Động (bắt buộc)'],
        ['<code>posts/[[slug]].vue</code>', '<code>/posts</code> và <code>/posts/abc</code>', 'Động tùy chọn (ngoặc đôi)'],
        ['<code>users/index.vue</code> + <code>users.vue</code>', '<code>/users</code> + lồng nhau', 'Route lồng (cần &lt;NuxtPage/&gt; trong users.vue)']
      ] },
      { t: 'widget', name: 'nx-file-routing', title: 'Gõ đường dẫn file → xem route sinh ra (thử users/[id].vue)' },
      { t: 'list', items: [
        'Thư mục <code>pages/</code> là <b>tùy chọn</b>: không có thì vue-router không được cài → bundle nhỏ hơn (hợp trang đích đơn giản).',
        'Lấy tham số: <code>const route = useRoute(); route.params.id</code>.',
        'Đuôi hợp lệ: <code>.vue .js .jsx .mjs .ts .tsx</code>.',
        'Code splitting theo trang mặc định bật; tắt chỉ khi có lý do rất cụ thể (thường làm tải đầu nặng hơn).'
      ] }
    ] },
    { icon: '🔗', title: 'Điều hướng: NuxtLink, navigateTo, definePageMeta', blocks: [
      { t: 'p', x: '<code>&lt;NuxtLink to="/about"&gt;</code> hiển thị thẻ <code>&lt;a&gt;</code> thật (tốt cho SEO/tiếp cận), nhưng sau hydration chuyển trang <b>không tải lại</b>. Khi link vào khung nhìn, Nuxt tự <b>prefetch</b> mã và dữ liệu của trang đích → bấm là có ngay.' },
      { t: 'table', head: ['Cách', 'Dùng khi'], rows: [
        ['<code>&lt;NuxtLink to="/x"&gt;</code>', 'Liên kết trong giao diện (thay cho thẻ <code>&lt;a&gt;</code>)'],
        ['<code>await navigateTo("/x")</code>', 'Chuyển trang bằng code; <b>luôn <code>await</code>/<code>return</code> kết quả</b>; chạy được cả server và client'],
        ['<code>navigateTo(url, { external: true })</code>', 'Đi tới URL ngoài hoặc tải lại toàn trang'],
        ['<code>navigateTo(url, { redirectCode: 301 })</code>', 'Đổi mã chuyển hướng phía server'],
        ['<code>sendRedirect</code>', 'Chuyển hướng trong route Nitro (<code>navigateTo</code> không dùng được ở đó)']
      ] },
      { t: 'p', x: '<code>definePageMeta</code> (macro biên dịch) gắn metadata vào trang: <code>layout</code>, <code>middleware</code>, <code>name</code>, <code>path</code> (đổi URL), <code>props</code>, <code>alias</code>, <code>keepalive</code>, <code>key</code>, <code>pageTransition</code>, <code>validate</code>…' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> <code>definePageMeta</code> được Nuxt đọc lúc <i>biên dịch</i>, nên không dùng biến định nghĩa trong <code>&lt;script setup&gt;</code> bên trong nó (chỉ giá trị tĩnh hoặc import). Khác với <code>useRoute()</code> chạy lúc chạy.' }
    ] },
    { icon: '🛂', title: 'Middleware route', blocks: [
      { t: 'p', x: 'Middleware route là hàm chạy <b>trước khi</b> vào một route — hợp để kiểm tra đăng nhập, chuyển hướng, ghi log.' },
      { t: 'table', head: ['Loại', 'Vị trí', 'Phạm vi'], rows: [
        ['<b>Ẩn danh (inline)</b>', 'Ngay trong trang, qua <code>definePageMeta</code>', 'Chỉ trang đó'],
        ['<b>Có tên</b>', '<code>app/middleware/auth.ts</code> (tự import bất đồng bộ)', 'Trang nào khai báo <code>middleware: "auth"</code>'],
        ['<b>Toàn cục</b>', '<code>app/middleware/xxx.global.ts</code>', 'Mọi lần đổi route']
      ] },
      { t: 'p', x: N2(`// app/middleware/auth.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const loggedIn = useCookie('token').value
  if (!loggedIn && to.path !== '/login') {
    return navigateTo('/login')     // chuyển hướng (302 nếu ở server)
  }
  // không return gì = cho đi tiếp
})

// app/pages/dashboard.vue
definePageMeta({ middleware: 'auth' })`) },
      { t: 'key', x: 'Khác navigation guard của vue-router: <b>không có tham số <code>next()</code></b>. Kết quả được xác định bằng giá trị trả về: không trả gì = tiếp tục; <code>navigateTo(...)</code> = chuyển hướng; <code>abortNavigation()</code> (có thể kèm lỗi) = hủy. Middleware route chạy phía Vue, <b>khác</b> middleware server (<code>server/middleware</code>) chạy phía Nitro.' },
      { t: 'widget', name: 'nx-middleware-sim', title: 'Mô phỏng middleware: chọn trạng thái đăng nhập và trang cần vào' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu – thứ tự chạy:</b> middleware toàn cục chạy trước (theo thứ tự chữ cái tên file, có thể đánh số 01.xxx), rồi middleware khai báo trong trang theo thứ tự mảng. Trên trang tải đầu, middleware chạy ở <b>cả server và client</b>; bạn có thể rẽ nhánh bằng <code>import.meta.server</code> / <code>import.meta.client</code>.' }
    ] },
    { icon: '✨', title: 'Transitions (hiệu ứng chuyển trang)', blocks: [
      { t: 'list', items: [
        'Nuxt dùng <code>&lt;Transition&gt;</code> của Vue → trang/layout phải có <b>một phần tử gốc</b>.',
        'Bật toàn cục: <code>app: { pageTransition: { name: "page", mode: "out-in" } }</code> rồi viết CSS <code>.page-enter-active</code>, <code>.page-leave-active</code>…',
        'Riêng một trang: <code>definePageMeta({ pageTransition: { name: "rotate" } })</code>; tắt bằng <code>false</code>.',
        'Đổi cả layout thì hiệu ứng trang không chạy — dùng <code>layoutTransition</code>.',
        'Có thể dùng <b>View Transitions</b> gốc của trình duyệt (thử nghiệm).'
      ] }
    ] }
  ],
  summary: [
    'Tên file trong <code>pages/</code> sinh route: <code>[id]</code> động, <code>[[slug]]</code> tùy chọn, lồng nhau cần <code>&lt;NuxtPage/&gt;</code>.',
    '<code>&lt;NuxtLink&gt;</code> chuyển trang không tải lại và prefetch; <code>await navigateTo()</code> chuyển bằng code.',
    'Middleware: ẩn danh, có tên, toàn cục (<code>.global</code>); trả về <code>navigateTo</code>/<code>abortNavigation</code>, không có <code>next()</code>.',
    'Transitions cần một phần tử gốc; cấu hình qua <code>app.pageTransition</code> hoặc <code>definePageMeta</code>.'
  ],
  cards: [
    ['Route cho <code>pages/users/[id].vue</code>?', '<code>/users/&lt;bất kỳ&gt;</code>, lấy bằng <code>useRoute().params.id</code>.'],
    ['Tham số tùy chọn?', 'Ngoặc đôi: <code>[[slug]].vue</code>.'],
    ['Vì sao <code>NuxtLink</code> tốt?', 'Thẻ <code>&lt;a&gt;</code> thật + chuyển trang không tải lại + prefetch.'],
    ['<code>navigateTo</code> cần gì?', '<code>await</code> hoặc <code>return</code> kết quả.'],
    ['Chuyển hướng trong route Nitro?', '<code>sendRedirect</code>.'],
    ['Ba loại middleware?', 'Ẩn danh, có tên, toàn cục.'],
    ['Middleware toàn cục đặt tên?', 'Hậu tố <code>.global</code>.'],
    ['Middleware hủy điều hướng?', '<code>return abortNavigation()</code>.'],
    ['Khác guard vue-router?', 'Không có <code>next()</code>, dùng giá trị trả về.'],
    ['Hiệu ứng chuyển trang cần gì?', 'Một phần tử gốc trong page/layout.']
  ],
  quiz: [
    { q: 'File nào khớp /posts/hello và cả /posts?', o: ['posts/[id].vue', 'posts/[[slug]].vue', 'posts.vue', 'posts/index.vue'], a: 1, e: 'Tham số tùy chọn.' },
    { q: 'Middleware muốn chuyển đến /login thì:', o: ['next("/login")', 'return navigateTo("/login")', 'window.location', 'throw'], a: 1, e: 'Nuxt không có next().' },
    { q: 'Gọi navigateTo trong middleware phải:', o: ['Không return', 'return kết quả', 'Dùng setTimeout', 'Dùng ref'], a: 1, e: 'Nếu không sẽ không đúng ý.' },
    { q: '&lt;NuxtLink&gt; sau hydration:', o: ['Tải lại cả trang', 'Chuyển trang phía client', 'Gọi API', 'Mở tab mới'], a: 1, e: 'Không reload.' },
    { q: 'Middleware route khác server middleware ở chỗ:', o: ['Chạy phía Vue, không phải Nitro', 'Giống hệt', 'Chỉ chạy ở build', 'Chạy ở CSS'], a: 0, e: 'Hai thứ khác hẳn.' },
    { q: 'Thư mục pages/ bắt buộc?', o: ['Có', 'Không (không có thì không cài vue-router)', 'Chỉ với TS', 'Chỉ ở production'], a: 1, e: 'Tùy chọn.' }
  ],
  match: [
    ['[id].vue', 'Route động'],
    ['.global.ts', 'Middleware toàn cục'],
    ['navigateTo', 'Chuyển hướng bằng code'],
    ['definePageMeta', 'Metadata của trang'],
    ['abortNavigation', 'Hủy điều hướng']
  ]
},

{
  n: 6,
  title: 'Lấy dữ liệu: $fetch, useFetch, useAsyncData',
  intro: 'Nuxt chạy code trên cả server lẫn trình duyệt, nên “lấy dữ liệu” có bẫy riêng: nếu gọi API hai lần (server rồi lại client) thì phí và có thể lệch dữ liệu. Nuxt cung cấp hai composable giải quyết bài toán này.',
  sections: [
    { icon: '🧰', title: 'Ba công cụ, ba mục đích', blocks: [
      { t: 'table', head: ['Công cụ', 'Bản chất', 'Dùng khi'], rows: [
        ['<code>$fetch</code>', 'Gọi mạng đơn giản (thư viện ofetch), có sẵn toàn cục', 'Tương tác phía client (bấm nút, gửi form) hoặc kết hợp trong <code>useAsyncData</code>'],
        ['<code>useFetch(url)</code>', 'Bọc <code>useAsyncData</code> + <code>$fetch</code>; lấy dữ liệu <b>một lần</b> ở render phổ quát', 'Lấy dữ liệu ban đầu cho trang/component từ một URL'],
        ['<code>useAsyncData(key, fn)</code>', 'Bọc bất kỳ logic bất đồng bộ nào, kiểm soát chi tiết', 'CMS/SDK tự có lớp truy vấn, gọi nhiều API cùng lúc']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> không có Nuxt, trang SSR gọi API lúc server dựng HTML, rồi trình duyệt <b>lại gọi API lần nữa</b> khi hydrate (như bạn hỏi giá hai lần cho cùng món). <code>useFetch</code>/<code>useAsyncData</code> như ghi lại câu trả lời vào <b>tờ phiếu (payload)</b> kẹp theo HTML để trình duyệt chỉ cần đọc phiếu, khỏi hỏi lại.' },
      { t: 'p', x: N2(`<script setup lang="ts">
const { data, status, error, refresh } = await useFetch('/api/modules', {
  query: { page: 1 },
  pick: ['title']          // chỉ giữ trường cần → payload nhỏ
})
</script>`) },
      { t: 'widget', name: 'nx-fetch-pick', title: 'Chọn $fetch, useFetch hay useAsyncData cho từng tình huống' }
    ] },
    { icon: '🔑', title: 'Key, await, lazy và reactive', blocks: [
      { t: 'list', items: [
        '<b>Key:</b> đối số đầu của <code>useAsyncData</code> — khóa cache và chia sẻ dữ liệu giữa component (<code>useNuxtData(key)</code>), làm mới có chủ đích (<code>refreshNuxtData</code>). Nên <b>tự đặt key</b> thay vì dùng key sinh tự động (dựa vị trí gọi). <code>useFetch</code> sinh key từ URL + options.',
        '<b>Trả về:</b> <code>data</code>, <code>status</code> (idle/pending/success/error), <code>pending</code>, <code>error</code> (đều là ref → <code>.value</code> trong script), <code>refresh()/execute()</code>, <code>clear()</code>.',
        '<b>Reactive:</b> URL, key hoặc <code>query</code> có thể là ref/computed → tự lấy lại khi đổi; hoặc dùng option <code>watch</code>.',
        '<b>Dùng chung:</b> hai nơi gọi cùng key chỉ tạo một request.',
        '<b>Hủy request:</b> dùng <code>signal</code> được truyền vào hàm handler.',
        '<b>Đừng</b> dùng <code>useAsyncData</code> để gây tác dụng phụ (vd gọi action Pinia) — dễ chạy lặp ngoài ý muốn.'
      ] },
      { t: 'key', x: '<b>Về <code>await</code>:</b> <code>await</code> <b>không</b> đổi HTML do server render (server luôn đợi dữ liệu xong). Nó chỉ đổi điều xảy ra tiếp theo trong script và khi chuyển trang phía client: có <code>await</code> thì chặn điều hướng đến khi có dữ liệu; không <code>await</code> thì trang hiện ngay với <code>data</code> mặc định rồi tự điền. Tương tự option <code>lazy</code> (không chặn), nhưng <b>hai cái độc lập</b>; đừng <code>await</code> một lệnh lazy.' },
      { t: 'widget', name: 'nx-hydration-sim', title: 'Thử mô phỏng: gọi API hai lần (thường) vs một lần (useFetch + payload)' },
      { t: 'p', x: N2(`// Chuyển header/cookie của client lên API khi gọi ở server:
const { data } = await useFetch('/api/me')       // useFetch đã dùng useRequestFetch
// Với $fetch thuần ở server, cần: const headers = useRequestHeaders(['cookie'])`) },
      { t: 'warn', x: 'Khi chuyển tiếp header tới API <b>ngoài</b>, chỉ chuyển đúng thứ cần. Không chuyển <code>host</code>, <code>accept</code>, <code>content-length</code>, <code>content-type</code>, <code>x-forwarded-*</code>, <code>cf-*</code>… vì có thể gây hành vi lạ.' }
    ] },
    { icon: '🔧', title: 'Suspense, loading, và useFetch tùy biến', blocks: [
      { t: 'list', items: [
        'Nuxt dùng <code>&lt;Suspense&gt;</code> của Vue để <b>giữ điều hướng</b> đến khi dữ liệu có sẵn; thêm <code>&lt;NuxtLoadingIndicator/&gt;</code> để có thanh tiến trình giữa các trang.',
        '<code>$fetch</code> trong <code>setup</code> mà không bọc bằng composable sẽ gọi lại ở client (không dedup, không chặn điều hướng) → tốt cho sự kiện phía client.',
        '<b>useFetch tùy biến:</b> <code>$fetch</code> cố ý <b>không cấu hình toàn cục</b>. Muốn mặc định (baseURL, header auth, chuyển <code>/login</code> khi 401) dùng <code>createUseFetch</code> hoặc tự bọc composable <code>useAPI</code> (xem chương 13).'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu – quy tắc nhanh:</b> “Cần dữ liệu để vẽ trang → <code>useFetch</code> (hoặc <code>useAsyncData</code>). Cần gửi dữ liệu khi người dùng bấm → <code>$fetch</code>.” Nếu bạn dùng <code>$fetch</code> trong <code>setup</code> để lấy dữ liệu ban đầu, nên thử <code>useFetch</code> trước.' }
    ] }
  ],
  summary: [
    'Server gọi API rồi trình duyệt lại gọi → phí. <code>useFetch</code>/<code>useAsyncData</code> gửi kèm payload để khỏi gọi lại.',
    '<code>$fetch</code> cho tương tác phía client; <code>useFetch</code> cho lấy dữ liệu từ URL; <code>useAsyncData</code> cho logic tùy ý.',
    'Tự đặt <code>key</code>; <code>await</code> không đổi HTML server mà đổi cách điều hướng client; <code>lazy</code> không chặn.',
    'Chuyển cookie/header cẩn thận; muốn mặc định riêng thì tạo composable tùy biến.'
  ],
  cards: [
    ['<code>$fetch</code> là gì?', 'Hàm gọi mạng đơn giản (ofetch), toàn cục.'],
    ['Vì sao cần <code>useFetch</code>?', 'Tránh gọi API hai lần (server + client khi hydrate).'],
    ['Payload là gì?', 'Đối tượng dữ liệu kèm theo HTML để client dùng lại khi hydrate.'],
    ['<code>useFetch</code> vs <code>useAsyncData</code>?', 'useFetch là đường tắt cho URL; useAsyncData linh hoạt cho logic bất kỳ.'],
    ['Đối số đầu của <code>useAsyncData</code>?', 'Key duy nhất để cache/chia sẻ.'],
    ['<code>data</code>, <code>status</code>, <code>error</code>?', 'Các ref trả về của composable.'],
    ['<code>refresh()</code>?', 'Lấy lại dữ liệu.'],
    ['Option <code>pick</code>?', 'Chỉ giữ một số trường → payload nhỏ hơn.'],
    ['<code>lazy: true</code>?', 'Không chặn điều hướng, tự quản lý trạng thái loading.'],
    ['<code>$fetch</code> có cấu hình toàn cục?', 'Không — hãy tạo useFetch tùy biến.']
  ],
  quiz: [
    { q: 'Lấy danh sách bài viết để vẽ trang:', o: ['$fetch trong setup', 'useFetch', 'localStorage', 'setInterval'], a: 1, e: 'SSR-friendly, một lần.' },
    { q: 'Người dùng bấm nút “Gửi”, nên gọi API bằng:', o: ['useFetch', '$fetch', 'useState', 'definePageMeta'], a: 1, e: 'Tương tác client.' },
    { q: 'Hai component gọi useFetch cùng key sẽ:', o: ['Hai request', 'Một request (chia sẻ)', 'Lỗi', 'Không gọi'], a: 1, e: 'Dùng chung dữ liệu.' },
    { q: 'await useFetch có đổi HTML server không?', o: ['Có', 'Không (chỉ đổi luồng script/điều hướng client)', 'Chỉ khi lazy', 'Chỉ khi pick'], a: 1, e: 'Server luôn đợi.' },
    { q: 'Muốn baseURL + header auth mặc định:', o: ['Cấu hình $fetch toàn cục', 'createUseFetch hoặc composable bọc', 'Sửa node_modules', 'Không thể'], a: 1, e: 'Cố ý không toàn cục.' }
  ],
  match: [
    ['useFetch', 'Lấy dữ liệu từ URL, SSR-friendly'],
    ['useAsyncData', 'Bọc logic bất đồng bộ bất kỳ'],
    ['$fetch', 'Gọi mạng đơn giản'],
    ['payload', 'Dữ liệu kèm HTML'],
    ['lazy', 'Không chặn điều hướng']
  ]
},

{
  n: 7,
  title: 'State, xử lý lỗi và SEO',
  intro: 'Ba thứ mọi app thật đều cần: chia sẻ trạng thái giữa các component (mà không rò rỉ giữa các người dùng trên server), xử lý lỗi gọn gàng, và đặt thẻ <code>head</code>/meta cho SEO.',
  sections: [
    { icon: '🧠', title: 'State: useState và Pinia', blocks: [
      { t: 'p', x: '<code>useState(key, init)</code> tạo trạng thái phản ứng <b>thân thiện SSR</b>: giá trị được giữ qua bước hydration và dùng chung cho mọi component dùng cùng key.' },
      { t: 'p', x: N2(`// composables/useCounter.ts
export const useCounter = () => useState('counter', () => 0)

// dùng ở bất kỳ component nào
const counter = useCounter()
counter.value++`) },
      { t: 'warn', x: '<b>Đừng bao giờ</b> khai báo <code>const state = ref()</code> ở <b>ngoài</b> <code>setup()</code> (cấp module). Trên server, module chỉ nạp một lần nên biến đó bị <b>dùng chung giữa mọi request/người dùng</b> → rò rỉ dữ liệu và bộ nhớ. Hãy bọc: <code>const useX = () => useState("x")</code>.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>ref</code> ở cấp module như một <b>cuốn sổ chung đặt ngoài quầy</b> — ai ghé quán cũng viết vào và đọc được của người trước! <code>useState</code> mỗi khách (request) có cuốn sổ riêng và nhân viên chép lại để mang sang bàn (client).' },
      { t: 'list', items: [
        'Giá trị phải <b>serialize được JSON</b> (không class, hàm, symbol). Muốn lưu thứ đặc biệt → <code>definePayloadPlugin</code>.',
        'Khởi tạo bất đồng bộ: dùng <code>callOnce</code> trong <code>app.vue</code> (giống <code>nuxtServerInit</code> ở Nuxt 2).',
        'Reset: <code>clearNuxtState(key)</code>.',
        'Dùng <b>Pinia</b> khi cần store lớn: <code>npx nuxt module add pinia</code> rồi viết store như Vue.'
      ] },
      { t: 'widget', name: 'nx-state-pick', title: 'Nên dùng ref, useState, hay Pinia?' }
    ] },
    { icon: '🚨', title: 'Xử lý lỗi', blocks: [
      { t: 'p', x: 'Nuxt là full-stack nên lỗi đến từ nhiều nguồn: lúc render Vue (SSR/CSR), lúc khởi động app, lúc chạy server Nitro, và lúc tải chunk JS.' },
      { t: 'table', head: ['Nguồn lỗi', 'Cách bắt'], rows: [
        ['Lỗi Vue', '<code>onErrorCaptured</code> (từng component); hook <code>vue:error</code>; <code>vueApp.config.errorHandler</code> (toàn cục, dùng cho báo cáo lỗi)'],
        ['Khởi động app (plugin, <code>app:created</code>, mount…)', 'Hook <code>app:error</code>'],
        ['Server Nitro', 'Chưa có handler riêng; dùng trang lỗi (<code>error.vue</code>)'],
        ['Tải chunk JS thất bại (mất mạng / deploy mới làm hash cũ hết hiệu lực)', 'Nuxt tự reload trang; tùy chỉnh bằng <code>experimental.emitRouteChunkError</code>']
      ] },
      { t: 'list', items: [
        '<b>Trang lỗi:</b> <code>app/error.vue</code> — không phải route; nhận prop <code>error</code> (<code>status</code>, <code>message</code>…). Dùng <code>clearError({ redirect: "/" })</code> để thoát lỗi.',
        '<b>Ném lỗi:</b> <code>throw createError({ status: 404, statusMessage: "Không tìm thấy" })</code> (cả server và client); <code>showError()</code> hiện trang lỗi toàn màn hình.',
        '<b>Lỗi cục bộ:</b> <code>&lt;NuxtErrorBoundary&gt;</code> bao quanh một phần giao diện, hiển thị dự phòng mà không làm sập cả trang.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> <code>useFetch</code> không ném lỗi mà trả về <code>error</code>; hãy kiểm tra <code>error.value</code> và hiện giao diện lỗi, hoặc <code>throw createError({ status: 404, fatal: true })</code> để chuyển sang <code>error.vue</code> khi trang không thể hiển thị.' }
    ] },
    { icon: '🔍', title: 'SEO và thẻ head', blocks: [
      { t: 'p', x: 'Nuxt quản lý thẻ <code>&lt;head&gt;</code> bằng <b>Unhead</b>: có mặc định hợp lý (<code>viewport</code>, <code>charset: utf-8</code>), nhiều composable và component.' },
      { t: 'table', head: ['Cách', 'Dùng khi'], rows: [
        ['<code>app.head</code> trong nuxt.config', 'Giá trị tĩnh, đổi không thường xuyên: tiêu đề mặc định, ngôn ngữ, favicon (không phản ứng)'],
        ['<code>useHead({...})</code>', 'Có dữ liệu phản ứng, đặt trong <code>app.vue</code>/trang'],
        ['<code>useSeoMeta({...})</code>', 'Đặt meta SEO/Open Graph có kiểu, dễ viết (title, description, ogTitle, ogImage…)'],
        ['<code>&lt;Head&gt;</code>, <code>&lt;Title&gt;</code>, <code>&lt;Meta&gt;</code>…', 'Khai báo trong template']
      ] },
      { t: 'p', x: N2(`useSeoMeta({
  title: 'Cửa hàng giày',
  description: 'Giày chính hãng, giao nhanh',
  ogTitle: 'Cửa hàng giày',
  ogImage: 'https://example.com/share.png',
})`) },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> mỗi trang nên có <code>title</code> và <code>description</code> riêng — điều này cũng giúp trình đọc màn hình (xem chương 11). Khi có <code>app.cdnURL</code>, tài nguyên ở <code>public/</code> (kể cả favicon) được phục vụ qua CDN.' }
    ] }
  ],
  summary: [
    '<code>useState</code> tạo state thân thiện SSR (key + hàm init, giá trị serialize được); không đặt <code>ref</code> ở cấp module.',
    'Lỗi: bắt bằng <code>onErrorCaptured</code>/<code>vue:error</code>/<code>app:error</code>; trang lỗi <code>error.vue</code>; <code>createError</code>, <code>showError</code>, <code>clearError</code>.',
    'SEO: <code>app.head</code> tĩnh, <code>useHead</code> động, <code>useSeoMeta</code> có kiểu cho meta chia sẻ.'
  ],
  cards: [
    ['<code>useState</code>?', 'State phản ứng thân thiện SSR, chia sẻ theo key.'],
    ['Vì sao cấm <code>ref</code> ở cấp module?', 'Trên server bị dùng chung giữa mọi request → rò rỉ dữ liệu.'],
    ['<code>callOnce</code>?', 'Chạy khởi tạo một lần (server) thay <code>nuxtServerInit</code>.'],
    ['Thêm Pinia?', '<code>npx nuxt module add pinia</code>.'],
    ['Trang lỗi toàn cục?', '<code>app/error.vue</code> (prop <code>error</code>).'],
    ['Ném lỗi HTTP?', '<code>throw createError({ status: 404 })</code>.'],
    ['Thoát trang lỗi?', '<code>clearError({ redirect: "/" })</code>.'],
    ['Lỗi cục bộ một vùng?', '<code>&lt;NuxtErrorBoundary&gt;</code>.'],
    ['Đặt meta SEO có kiểu?', '<code>useSeoMeta</code>.'],
    ['Head động?', '<code>useHead</code> (reactive).']
  ],
  quiz: [
    { q: 'Chia sẻ giỏ hàng giữa component, thân thiện SSR:', o: ['ref ở cấp module', 'useState', 'localStorage trong setup', 'var toàn cục'], a: 1, e: 'Tránh rò rỉ giữa request.' },
    { q: 'useState lưu được:', o: ['Instance của class', 'Dữ liệu JSON serialize được', 'Hàm', 'Symbol'], a: 1, e: 'Cần serialize.' },
    { q: 'Trang lỗi toàn cục đặt tại:', o: ['pages/error.vue', 'app/error.vue', 'server/error.ts', 'public/error.html'], a: 1, e: 'Không phải route.' },
    { q: 'Meta Open Graph có kiểu, dễ viết:', o: ['useSeoMeta', 'useState', 'useRoute', 'defineNuxtPlugin'], a: 0, e: 'Dành cho SEO/OG.' },
    { q: 'Lỗi chỉ trong một vùng giao diện nên dùng:', o: ['error.vue', '&lt;NuxtErrorBoundary&gt;', 'app:error', 'process.exit'], a: 1, e: 'Không làm sập cả trang.' }
  ],
  match: [
    ['useState', 'State chia sẻ thân thiện SSR'],
    ['error.vue', 'Trang lỗi toàn cục'],
    ['createError', 'Tạo/ném lỗi có status'],
    ['useSeoMeta', 'Meta SEO có kiểu'],
    ['Unhead', 'Thư viện quản lý head']
  ]
},

{
  n: 8,
  title: 'Server của Nuxt: Nitro, API và middleware',
  intro: 'Nuxt đi kèm một server thật (Nitro). Bạn có thể viết API, middleware, plugin ngay trong dự án — không cần dựng backend riêng cho những việc vừa phải. Cùng cơ chế auto-import và HMR như phần giao diện.',
  sections: [
    { icon: '🛰', title: 'Nitro cho bạn điều gì', blocks: [
      { t: 'list', items: [
        'Kiểm soát đầy đủ phần server của app.',
        'Deploy mọi nơi: hơn 15 preset (Cloudflare Workers, Netlify, Vercel, Deno, Node…) với khởi động chỉ vài mili-giây.',
        'Hybrid rendering (chương 9).',
        'Bên trong dùng <b>h3</b> — framework HTTP nhỏ, nhanh, di động.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> thư mục <code>server/</code> là “nhà bếp sau quầy” của app: khách (trình duyệt) không vào, nhưng gọi món qua cửa sổ <code>/api/...</code>. Bạn có thể trả JSON, văn bản, HTML hoặc cả luồng dữ liệu.' }
    ] },
    { icon: '🔌', title: 'API route', blocks: [
      { t: 'p', x: 'Mỗi file trong <code>server/api/</code> export một handler <code>defineEventHandler</code>. Tên file = đường dẫn; hậu tố phương thức (<code>.get.ts</code>, <code>.post.ts</code>) giới hạn HTTP method; <code>[id]</code> cho tham số.' },
      { t: 'p', x: N2(`// server/api/hello.get.ts   →  GET /api/hello
export default defineEventHandler((event) => {
  return { hello: 'world' }          // tự thành JSON
})

// server/api/users/[id].get.ts  →  GET /api/users/42
export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')
  return { id }
})

// server/api/login.post.ts  →  POST /api/login
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  if (!body.email) throw createError({ status: 400, statusMessage: 'Thiếu email' })
  return { ok: true }
})`) },
      { t: 'table', head: ['Thư mục', 'Tác dụng'], rows: [
        ['<code>server/api/</code>', 'Route API (tiền tố <code>/api</code>)'],
        ['<code>server/routes/</code>', 'Route không tiền tố (vd <code>/sitemap.xml</code>)'],
        ['<code>server/middleware/</code>', 'Chạy <b>trước mọi route</b> mỗi request: kiểm tra header, log, bổ sung ngữ cảnh. Không được trả về hay kết thúc response (chỉ kiểm/bổ sung hoặc ném lỗi)'],
        ['<code>server/plugins/</code>', 'Plugin Nitro: mở rộng hành vi runtime, móc vào sự kiện vòng đời'],
        ['<code>server/utils/</code>', 'Hàm dùng chung, tự import trong server (chỉ ở server)']
      ] },
      { t: 'widget', name: 'nx-server-route', title: 'Tên file trong server/ → URL và method nào?' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> từ phía giao diện, <code>useFetch("/api/hello")</code> trong lúc SSR gọi <b>trực tiếp hàm</b> (không qua HTTP) nên rất nhanh; ở client gọi HTTP bình thường. Kiểu trả về của API còn được suy ra để gợi ý kiểu cho <code>useFetch</code>.' }
    ] },
    { icon: '🧱', title: 'Quy tắc và an toàn', blocks: [
      { t: 'warn', x: 'Không import code Vue (component, composable app) vào <code>server/</code> và ngược lại. Code dùng chung đặt trong <code>shared/</code>. Server route hiện chưa hỗ trợ đầy đủ route động như <code>pages/</code>.' },
      { t: 'list', items: [
        'Dùng <code>runtimeConfig</code> để đọc bí mật trong server: <code>useRuntimeConfig(event)</code>.',
        'Kiểm tra dữ liệu đầu vào (body, query) trước khi dùng; không tin dữ liệu từ client.',
        'Các helper h3 hay dùng: <code>readBody</code>, <code>getQuery</code>, <code>getRouterParam</code>, <code>getCookie/setCookie</code>, <code>setResponseStatus</code>, <code>sendRedirect</code>.',
        'Nuxt 4.6+ có <code>nuxt/server</code> để viết code server không gắn với runtime cụ thể (đi qua được Nitro 2/3 hoặc Vite).'
      ] }
    ] }
  ],
  summary: [
    'Nitro = server engine của Nuxt: API, middleware, plugin ngay trong dự án, deploy mọi nơi.',
    'server/api có tiền tố /api; hậu tố .get/.post giới hạn method; [id] là tham số.',
    'Server middleware chạy trước mọi route, không trả response.',
    'Không trộn code Vue và code server; dùng shared/ để chia sẻ.'
  ],
  cards: [
    ['Nitro?', 'Server engine của Nuxt (dựa trên h3).'],
    ['File API?', '<code>server/api/hello.get.ts</code> → <code>GET /api/hello</code>.'],
    ['Route không tiền tố /api?', 'Đặt trong <code>server/routes/</code>.'],
    ['Handler viết thế nào?', '<code>export default defineEventHandler(event =&gt; ...)</code>.'],
    ['Đọc body?', '<code>await readBody(event)</code>.'],
    ['Tham số URL?', '<code>getRouterParam(event, "id")</code>.'],
    ['Server middleware làm gì?', 'Chạy mỗi request trước route; kiểm/bổ sung, không trả response.'],
    ['Plugin Nitro đặt ở?', '<code>server/plugins/</code>.'],
    ['Tiện ích dùng chung trong server?', '<code>server/utils/</code>.'],
    ['Đọc bí mật ở server?', '<code>useRuntimeConfig(event)</code>.']
  ],
  quiz: [
    { q: 'server/api/users.post.ts xử lý:', o: ['GET /users', 'POST /api/users', 'POST /users', 'Mọi method'], a: 1, e: 'Tiền tố /api + method POST.' },
    { q: 'Server middleware nên:', o: ['Trả response thay route', 'Chỉ kiểm/bổ sung hoặc ném lỗi', 'Vẽ HTML', 'Đổi CSS'], a: 1, e: 'Không kết thúc response.' },
    { q: 'Handler trả về object thì Nitro:', o: ['Báo lỗi', 'Tự trả JSON', 'Tạo file', 'Bỏ qua'], a: 1, e: 'Xử lý tự động.' },
    { q: 'Chia sẻ hàm giữa app và server:', o: ['server/utils', 'shared/utils', 'public/', 'app/plugins'], a: 1, e: 'Hai bên cùng dùng.' },
    { q: 'Route /sitemap.xml tạo bằng file ở:', o: ['server/routes/', 'server/api/', 'public/', 'app/pages/'], a: 0, e: 'Không có tiền tố /api.' }
  ],
  match: [
    ['defineEventHandler', 'Khai báo handler'],
    ['server/api', 'Route có tiền tố /api'],
    ['readBody', 'Đọc nội dung request'],
    ['server/plugins', 'Plugin Nitro'],
    ['h3', 'Framework HTTP bên trong Nitro']
  ]
}
);
