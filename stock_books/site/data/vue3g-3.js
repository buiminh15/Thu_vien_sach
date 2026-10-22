// Vue 3 Guide – Chương 7–9: tái sử dụng (composable/directive/plugin), built-in components, mở rộng quy mô.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vue3guide = BOOK_DATA.vue3guide || { chapters: [] };
const V3 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vue3guide.chapters.push(

{
  n: 7,
  title: 'Tái sử dụng logic: composable, directive tùy biến, plugin',
  intro: 'Component tái dùng <b>giao diện</b>. Còn <b>logic có trạng thái</b> (theo dõi chuột, gọi API…) thì tái dùng bằng <b>composable</b>. Ngoài ra có <b>custom directive</b> (thao tác DOM mức thấp) và <b>plugin</b> (cài thêm tính năng cho cả app).',
  sections: [
    { icon: '🧰', title: 'Composable', blocks: [
      { t: 'p', x: V3(`// composables/useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'

export function useMouse() {
  const x = ref(0), y = ref(0)
  function update(e) { x.value = e.pageX; y.value = e.pageY }
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  return { x, y }
}

// Dùng trong component:
const { x, y } = useMouse()`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> composable là <b>“hộp đồ nghề có trạng thái”</b>: một hàm đóng gói state + logic + vòng đời, ai cần cứ gọi, mỗi lần gọi ra bộ state riêng. Ví dụ: <code>useMouse</code>, <code>useFetch</code>, <code>useLocalStorage</code>.' },
      { t: 'p', x: V3(`// useFetch nhận được cả ref/getter → tự gọi lại khi URL đổi
import { ref, watchEffect, toValue } from 'vue'
export function useFetch(url) {
  const data = ref(null), error = ref(null)
  watchEffect(async () => {
    data.value = null; error.value = null
    try { data.value = await (await fetch(toValue(url))).json() }
    catch (e) { error.value = e }
  })
  return { data, error }
}
const { data } = useFetch(() => \`/api/posts/\${id.value}\`)`) },
      { t: 'table', head: ['Quy ước tốt', 'Chi tiết'], rows: [
        ['Đặt tên', 'Bắt đầu bằng <code>use</code> (<code>useMouse</code>)'],
        ['Tham số', 'Chấp nhận <b>ref/getter hoặc giá trị thường</b>; dùng <code>toValue()</code> (3.3+) để “mở hộp” cho cả hai'],
        ['Giá trị trả về', 'Trả <b>object chứa các ref</b> (không phải reactive) để người dùng destructure mà vẫn giữ phản ứng'],
        ['Tác dụng phụ', 'Có thể gắn listener, nhưng phải <b>dọn dẹp</b> trong <code>onUnmounted</code>; không sửa DOM trong phần SSR'],
        ['Nơi gọi', 'Chỉ gọi <b>đồng bộ</b> trong <code>setup()</code>/<code>&lt;script setup&gt;</code> (hoặc trong composable khác) để gắn được vòng đời']
      ] },
      { t: 'key', x: '<b>Composable vs cách cũ:</b> <b>Mixin</b> (Vue 2) dễ trùng tên, nguồn gốc thuộc tính mơ hồ, khó dùng với tham số → composable giải quyết cả ba. <b>Renderless component</b> thêm một lớp instance không cần thiết. <b>React Hooks</b> tương tự về ý tưởng nhưng Vue gọi <b>một lần</b> trong setup và dựa trên phản ứng tự động (không có luật “thứ tự hook”).' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> thư viện <b>VueUse</b> là bộ sưu tập composable viết sẵn (chuột, bàn phím, localStorage, dark mode…). Đừng tự viết lại thứ đã có.' }
    ] },
    { icon: '🎯', title: 'Directive tùy biến', blocks: [
      { t: 'p', x: V3(`// <script setup>: biến bắt đầu bằng chữ "v" tự thành directive
const vFocus = { mounted: (el) => el.focus() }
// <input v-focus />

// Dạng hàm rút gọn (mounted + updated cùng hành vi)
app.directive('color', (el, binding) => { el.style.color = binding.value })`) },
      { t: 'list', items: [
        '<b>Khi nào dùng:</b> chỉ khi cần <b>thao tác DOM mức thấp trên phần tử thường</b> (focus, kéo thả, lazy-load ảnh). Nếu làm được bằng template/component thì ưu tiên cách đó vì khai báo và dễ SSR hơn.',
        '<b>Hook:</b> <code>created</code>, <code>beforeMount</code>, <code>mounted</code>, <code>beforeUpdate</code>, <code>updated</code>, <code>beforeUnmount</code>, <code>unmounted</code>. Tham số: <code>el</code>, <code>binding</code> (<code>value</code>, <code>oldValue</code>, <code>arg</code>, <code>modifiers</code>), <code>vnode</code>.',
        '<b>Dùng trên component:</b> directive áp vào <b>phần tử gốc</b> của component (không khuyến nghị; không hợp với multi-root).',
        'Đăng ký toàn cục: <code>app.directive(\'name\', def)</code>.'
      ] }
    ] },
    { icon: '🔌', title: 'Plugin', blocks: [
      { t: 'p', x: V3(`// plugins/i18n.js
export default {
  install(app, options) {
    app.config.globalProperties.$t = (key) => key.split('.').reduce((o, k) => o?.[k], options)
    app.provide('i18n', options)        // cho phép inject
  }
}
// main.js
app.use(i18nPlugin, { greetings: { hello: 'Xin chào!' } })`) },
      { t: 'list', items: [
        'Plugin là object có <code>install(app, options)</code> hoặc một hàm. Chạy khi gọi <code>app.use()</code>.',
        'Làm được: đăng ký component/directive toàn cục (<code>app.component</code>, <code>app.directive</code>), <code>app.provide</code>, thêm <code>globalProperties</code>, hoặc kết hợp nhiều thứ. Ví dụ thật: <b>Vue Router</b>, <b>Pinia</b>.',
        'Ưu tiên <code>provide/inject</code> hơn <code>globalProperties</code> (kiểu dữ liệu rõ, hợp TypeScript).'
      ] }
    ] },
    { icon: '🧭', title: 'Chọn công cụ tái dùng nào?', blocks: [
      { t: 'widget', name: 'v3-reuse-pick', title: 'Chọn: component, composable, directive hay plugin?' }
    ] }
  ],
  summary: [
    'Composable: hàm “use…” đóng gói state + logic có vòng đời; nhận ref/getter (toValue), trả object các ref.',
    'Directive tùy biến chỉ cho thao tác DOM mức thấp; plugin cài đặt tính năng toàn app qua install().',
    'Component tái dùng giao diện, composable tái dùng logic có trạng thái.'
  ],
  cards: [
    ['Composable là gì?', 'Hàm dùng Composition API để đóng gói logic có trạng thái.'],
    ['Quy ước tên?', 'Bắt đầu bằng use.'],
    ['toValue() để làm gì?', 'Nhận cả ref/getter/giá trị thường.'],
    ['Directive dùng khi?', 'Thao tác DOM mức thấp trên phần tử thường.'],
    ['Plugin cài bằng?', 'app.use(plugin, options)'],
    ['Composable hơn mixin ở đâu?', 'Rõ nguồn, không trùng tên, nhận tham số.']
  ],
  quiz: [
    { q: 'Composable nên trả về:', o: ['Object chứa các ref', 'Một reactive() object duy nhất', 'Chuỗi', 'Không trả gì'], a: 0, e: 'Để destructure mà giữ phản ứng.' },
    { q: 'Gọi composable ở đâu?', o: ['Đồng bộ trong setup / script setup', 'Trong setTimeout', 'Sau await tùy ý', 'Ở file HTML'], a: 0, e: 'Cần ngữ cảnh component để gắn vòng đời.' },
    { q: 'Plugin cung cấp hàm bắt buộc:', o: ['install(app, options)', 'mount()', 'setup()', 'render()'], a: 0, e: 'app.use gọi install.' },
    { q: 'Directive tùy biến nên dùng khi:', o: ['Mọi lúc', 'Khi cần thao tác DOM mức thấp', 'Để thay computed', 'Để thay props'], a: 1, e: 'Ưu tiên khai báo bằng template/component.' }
  ],
  match: [
    ['useMouse()', 'Composable'],
    ['v-focus', 'Directive tùy biến'],
    ['app.use()', 'Cài plugin'],
    ['toValue()', 'Mở ref hoặc getter'],
    ['globalProperties', 'Thuộc tính toàn cục trên instance']
  ]
},

{
  n: 8,
  title: 'Component dựng sẵn: Transition, KeepAlive, Teleport, Suspense',
  intro: 'Vue có sẵn vài component “đặc biệt” không cần import: hiệu ứng vào/ra (<code>Transition</code>, <code>TransitionGroup</code>), giữ state khi ẩn (<code>KeepAlive</code>), dịch chuyển DOM đi nơi khác (<code>Teleport</code>) và quản lý trạng thái chờ (<code>Suspense</code>).',
  sections: [
    { icon: '🎞️', title: 'Transition', blocks: [
      { t: 'p', x: V3(`<button @click="show = !show">Bật/tắt</button>
<Transition name="fade">
  <p v-if="show">Xin chào</p>
</Transition>

<style>
.fade-enter-active, .fade-leave-active { transition: opacity .5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>`) },
      { t: 'p', x: 'Khi phần tử trong <code>&lt;Transition&gt;</code> được chèn/gỡ (qua <code>v-if</code>, <code>v-show</code>, <code>&lt;component :is&gt;</code> hoặc đổi <code>key</code>), Vue tự thêm/bớt các <b>class CSS</b> theo từng giai đoạn:' },
      { t: 'table', head: ['Class', 'Giai đoạn'], rows: [
        ['<code>v-enter-from</code>', 'Trạng thái bắt đầu của “vào”; gỡ sau frame đầu'],
        ['<code>v-enter-active</code>', 'Suốt thời gian “vào” – đặt <code>transition</code>/<code>animation</code>, easing ở đây'],
        ['<code>v-enter-to</code>', 'Trạng thái kết thúc của “vào”'],
        ['<code>v-leave-from</code> / <code>-active</code> / <code>-to</code>', 'Tương tự cho “ra”']
      ] },
      { t: 'widget', name: 'v3-transition', title: 'Xem các class được thêm/bớt theo thời gian khi vào/ra' },
      { t: 'list', items: [
        '<code>name</code> đổi tiền tố class (<code>fade-enter-active</code>). Không có <code>name</code> → tiền tố <code>v-</code>.',
        '<b>Chỉ một phần tử con</b> (hoặc component một gốc). Dùng <code>mode="out-in"</code> để “ra xong mới vào” khi đổi giữa hai phần tử.',
        'Có thể dùng <b>CSS animation</b> (<code>@keyframes</code>) và class tùy biến (<code>enter-active-class</code>, ví dụ với Animate.css).',
        '<b>Hook JS:</b> <code>@before-enter</code>, <code>@enter</code>, <code>@after-enter</code>, <code>@leave</code>…; dùng với thư viện như GSAP, đặt <code>:css="false"</code> để Vue khỏi dò CSS.',
        '<b>appear</b> để chạy hiệu ứng ngay lần render đầu; <code>duration</code> khi cần chỉ rõ thời lượng.',
        'Gợi ý hiệu năng: ưu tiên animate <code>transform</code> và <code>opacity</code> (nhanh, không gây reflow).'
      ] }
    ] },
    { icon: '📚', title: 'TransitionGroup', blocks: [
      { t: 'p', x: V3(`<TransitionGroup name="list" tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.msg }}</li>
</TransitionGroup>
<style>
.list-move, .list-enter-active, .list-leave-active { transition: all .5s ease; }
.list-enter-from, .list-leave-to { opacity: 0; transform: translateX(30px); }
.list-leave-active { position: absolute; }   /* để phần tử còn lại trượt lên mượt */
</style>`) },
      { t: 'list', items: [
        'Hiệu ứng cho <b>danh sách</b> (v-for): thêm, xóa, <b>và di chuyển</b> (class <code>-move</code>).',
        'Mỗi phần tử <b>bắt buộc có <code>key</code></b>; mặc định không render thẻ bao (đặt <code>tag="ul"</code> nếu muốn).',
        'Không hỗ trợ <code>mode</code> như Transition.'
      ] }
    ] },
    { icon: '💾', title: 'KeepAlive', blocks: [
      { t: 'p', x: V3(`<KeepAlive include="TabA,TabB" :max="5">
  <component :is="currentTab" />
</KeepAlive>`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> mặc định đổi tab thì tab cũ bị <b>hủy</b> (mất nội dung ô nhập). <code>KeepAlive</code> như <b>“tạm cất vào tủ”</b>: tab ẩn đi nhưng vẫn giữ nguyên state, quay lại là còn nguyên.' },
      { t: 'list', items: [
        '<code>include</code>/<code>exclude</code>: chỉ cache component theo tên (chuỗi, regex hoặc mảng). <code>max</code>: giới hạn số instance, dùng chiến lược LRU (bỏ cái lâu không dùng nhất).',
        'Hook riêng: <code>onActivated</code>, <code>onDeactivated</code> (khi được đưa vào/ra khỏi cache). Vẫn chạy khi mount/unmount lần đầu.',
        'Cân nhắc: cache tốn bộ nhớ; chỉ dùng cho phần cần giữ state.'
      ] }
    ] },
    { icon: '🚪', title: 'Teleport', blocks: [
      { t: 'p', x: V3(`<button @click="open = true">Mở hộp thoại</button>
<Teleport to="body">
  <div v-if="open" class="modal">Xin chào từ body</div>
</Teleport>`) },
      { t: 'list', items: [
        '<b>Vấn đề giải quyết:</b> modal/tooltip cần hiển thị <b>ở gốc trang</b> để không bị ảnh hưởng bởi <code>overflow</code>, <code>z-index</code>, <code>transform</code> của cha, nhưng về mặt <b>logic</b> vẫn thuộc component hiện tại.',
        '<code>to</code> là selector CSS hoặc phần tử DOM đích (phải tồn tại khi mount). <code>disabled</code> tắt dịch chuyển (đặt tại chỗ). <code>defer</code> (3.5+) đợi đích mount xong.',
        'Dữ liệu/props/events/provide vẫn chảy bình thường (theo cây component, không theo cây DOM).',
        'Nhiều Teleport vào cùng đích thì xếp nối tiếp theo thứ tự mount.'
      ] }
    ] },
    { icon: '⏱️', title: 'Suspense (thử nghiệm)', blocks: [
      { t: 'p', x: V3(`<Suspense>
  <Dashboard />            <!-- có async setup() hoặc là async component -->
  <template #fallback>Đang tải...</template>
</Suspense>`) },
      { t: 'list', items: [
        '<b>Tính năng thử nghiệm</b>, API có thể đổi. Giúp hiện một trạng thái chờ chung cho cây component có <b>dependency bất đồng bộ</b>: component có <code>async setup()</code> / top-level <code>await</code> trong <code>&lt;script setup&gt;</code>, và async component.',
        'Hai slot: <code>#default</code> (nội dung thật), <code>#fallback</code> (đang chờ). Fallback chỉ hiện ở lần chờ đầu; các lần sau mặc định giữ nội dung cũ.',
        'Sự kiện: <code>@pending</code>, <code>@resolve</code>, <code>@fallback</code>; xử lý lỗi bằng <code>onErrorCaptured</code>.',
        'Thường kết hợp <code>&lt;RouterView&gt;</code> + <code>&lt;Transition&gt;</code> + <code>&lt;KeepAlive&gt;</code>.'
      ] }
    ] }
  ],
  summary: [
    'Transition thêm/bớt class enter/leave theo giai đoạn; TransitionGroup cho danh sách (cần key, có -move).',
    'KeepAlive giữ state component bị ẩn; Teleport đưa DOM tới nơi khác nhưng logic ở lại.',
    'Suspense (thử nghiệm) hiện fallback khi chờ dependency bất đồng bộ.'
  ],
  cards: [
    ['Class giai đoạn “vào”?', 'enter-from → enter-active → enter-to.'],
    ['Ra xong mới vào?', 'mode="out-in"'],
    ['Danh sách có hiệu ứng?', 'TransitionGroup (cần key).'],
    ['Giữ state khi đổi tab?', 'KeepAlive'],
    ['Modal ở gốc trang?', 'Teleport to="body"'],
    ['Chờ async setup?', 'Suspense + #fallback']
  ],
  quiz: [
    { q: 'Class nào đặt thuộc tính transition (thời lượng, easing)?', o: ['enter-from', 'enter-active', 'enter-to', 'leave-from'], a: 1, e: '-active áp suốt giai đoạn.' },
    { q: 'TransitionGroup yêu cầu mỗi phần tử có:', o: ['id', 'key', 'ref', 'name'], a: 1, e: 'key duy nhất.' },
    { q: 'Teleport thay đổi điều gì?', o: ['Vị trí trong DOM, không đổi quan hệ cha–con logic', 'Chuyển cả state sang component khác', 'Tắt reactivity', 'Chỉ thay CSS'], a: 0, e: 'Logic vẫn thuộc component cũ.' },
    { q: 'KeepAlive include dùng để:', o: ['Chỉ cache component theo tên', 'Tắt cache', 'Chạy animation', 'Đăng ký toàn cục'], a: 0, e: 'Có thể là chuỗi, regex, mảng.' }
  ],
  match: [
    ['Transition', 'Hiệu ứng vào/ra'],
    ['KeepAlive', 'Cache instance'],
    ['Teleport', 'Dịch chuyển DOM'],
    ['Suspense', 'Trạng thái chờ async'],
    ['-move', 'Class di chuyển trong TransitionGroup']
  ]
},

{
  n: 9,
  title: 'Mở rộng quy mô: SFC, công cụ, router, state, SSR, test',
  intro: 'Khi ứng dụng lớn dần, bạn cần chuẩn hóa: file SFC với <code>&lt;style scoped&gt;</code>, bộ công cụ (Vite, IDE, lint), <b>Vue Router</b> cho nhiều “trang”, <b>Pinia</b> cho state dùng chung, <b>SSR</b> cho SEO/tải nhanh và <b>testing</b>.',
  sections: [
    { icon: '📄', title: 'SFC: vì sao và gồm gì', blocks: [
      { t: 'table', head: ['Khối', 'Ghi chú'], rows: [
        ['<code>&lt;script setup&gt;</code>', 'Logic phía component (biên dịch thành hàm <code>setup</code> gọn). Một file có thể có thêm một <code>&lt;script&gt;</code> thường cho thứ chạy một lần'],
        ['<code>&lt;template&gt;</code>', 'Giao diện; được <b>biên dịch trước</b> thành code render tối ưu'],
        ['<code>&lt;style scoped&gt;</code>', 'CSS chỉ áp cho phần tử của component này (Vue gắn thuộc tính <code>data-v-xxx</code>)'],
        ['<code>&lt;style module&gt;</code>', 'CSS Modules: dùng qua <code>$style</code>']
      ] },
      { t: 'list', items: [
        '<b>Vì sao SFC:</b> tách theo <b>mối quan tâm</b> (một component = một file đủ ba phần) thay vì theo loại file; template được biên dịch trước → nhanh hơn; HMR (thay nóng) giữ state khi sửa code.',
        '<b>Scoped CSS:</b> muốn áp xuống con bằng <code>:deep(.cls)</code>, slot bằng <code>:slotted()</code>, toàn cục <code>:global()</code>.',
        '<b>v-bind trong CSS:</b> <code>color: v-bind(color)</code> gắn style với state phản ứng.'
      ] }
    ] },
    { icon: '🛠️', title: 'Công cụ', blocks: [
      { t: 'list', items: [
        '<b>Vite</b> là build tool mặc định (khởi động tức thì, HMR nhanh). Dự án dựng bằng <code>create-vue</code>.',
        '<b>IDE:</b> VS Code + <b>Vue - Official</b> (Volar): bôi màu, kiểm tra kiểu, gợi ý trong template, hỗ trợ TypeScript.',
        '<b>Vue DevTools:</b> kiểm tra cây component, state, sự kiện, timeline, router, Pinia.',
        '<b>Lint/format:</b> ESLint (<code>eslint-plugin-vue</code>) và Prettier. <b>TypeScript:</b> <code>vue-tsc</code> để kiểm kiểu.',
        'Muốn full-stack: <b>Nuxt</b>; muốn thử nhanh: Playground/StackBlitz.'
      ] }
    ] },
    { icon: '🧭', title: 'Routing', blocks: [
      { t: 'p', x: V3(`// router.js
import { createRouter, createWebHistory } from 'vue-router'
export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/users/:id', component: User, props: true },
    { path: '/admin', component: () => import('./Admin.vue'), meta: { auth: true } }
  ]
})
app.use(router)

<!-- Trong template -->
<RouterLink to="/users/5">Hồ sơ</RouterLink>
<RouterView />`) },
      { t: 'list', items: [
        'Với SPA, dùng <b>Vue Router</b> (thư viện chính thức): map URL ↔ component, tham số động (<code>:id</code>), route lồng nhau, <b>navigation guards</b>, lazy-load route.',
        '<code>&lt;RouterLink&gt;</code> điều hướng không tải lại trang; <code>&lt;RouterView&gt;</code> là nơi hiển thị component của route hiện tại.',
        'Đọc route: <code>useRoute()</code>; điều hướng bằng code: <code>useRouter().push(...)</code>.',
        'Chỉ cần router siêu đơn giản? Có thể tự làm bằng <code>&lt;component :is&gt;</code> + <code>hashchange</code> (xem ví dụ trong giáo trình Fullstack Vue).'
      ] }
    ] },
    { icon: '🗃️', title: 'Quản lý state dùng chung', blocks: [
      { t: 'p', x: V3(`// Cách đơn giản: reactive dùng chung (một store tự chế)
// store.js
import { reactive } from 'vue'
export const store = reactive({ count: 0, increment() { this.count++ } })

// Cách khuyến nghị cho ứng dụng thật: Pinia
import { defineStore } from 'pinia'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  function increment() { count.value++ }
  return { count, double, increment }
})`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> state <b>cục bộ</b> (ref trong component) như đồ cá nhân; state <b>dùng chung</b> như <b>tủ đồ chung của cả nhà</b> – mọi component cùng đọc/ghi một nơi. Ứng dụng nhỏ: một <code>reactive</code> export là đủ; ứng dụng lớn: <b>Pinia</b> (DevTools, SSR, plugin, HMR).' },
      { t: 'warn', x: 'Với <b>SSR</b>, store tự chế dạng singleton dùng chung giữa mọi request → <b>rò rỉ dữ liệu giữa người dùng</b>. Pinia xử lý việc này đúng cách.' }
    ] },
    { icon: '🌐', title: 'SSR / SSG', blocks: [
      { t: 'list', items: [
        '<b>SSR</b> (render phía server): server chạy Vue, trả HTML đầy đủ → người dùng thấy nội dung nhanh hơn, <b>SEO</b> tốt hơn; sau đó client “<b>hydrate</b>” để thêm tương tác.',
        '<b>Đánh đổi:</b> cần server Node, code phải “universal” (đừng dùng <code>window</code>/<code>document</code> ở nơi chạy trên server; dùng <code>onMounted</code> cho code chỉ có ở trình duyệt), độ phức tạp build/deploy cao hơn.',
        '<b>SSG</b> (static site generation): sinh sẵn HTML lúc build nếu dữ liệu ít đổi.',
        '<b>Khuyến nghị:</b> dùng framework (<b>Nuxt</b>, Quasar) hoặc Vite SSR có sẵn thay vì tự dựng; chỉ tự làm khi cần kiểm soát hoàn toàn.',
        '<b>Hydration mismatch:</b> HTML server và client sinh ra không khớp (thời gian, random…) → cảnh báo; tránh bằng cách để phần khác biệt chạy ở <code>onMounted</code>.'
      ] }
    ] },
    { icon: '🧪', title: 'Testing', blocks: [
      { t: 'table', head: ['Loại', 'Công cụ gợi ý', 'Khi dùng'], rows: [
        ['Unit', '<b>Vitest</b> (+ <b>@vue/test-utils</b>)', 'Hàm, composable, component riêng lẻ – nhanh'],
        ['Component', 'Vitest + Test Utils hoặc <b>Cypress/Playwright Component Testing</b>', 'Kiểm tra render, sự kiện, props thật'],
        ['End-to-End', '<b>Playwright</b> / Cypress', 'Luồng người dùng trên trình duyệt thật']
      ] },
      { t: 'p', x: V3(`import { mount } from '@vue/test-utils'
import Counter from './Counter.vue'

test('bấm thì tăng', async () => {
  const wrapper = mount(Counter)
  await wrapper.find('button').trigger('click')   // await để DOM cập nhật
  expect(wrapper.text()).toContain('1')
})`) },
      { t: 'list', items: [
        '<b>Test hành vi (kết quả nhìn thấy), không test chi tiết cài đặt</b> (tên biến, state nội bộ) → test không vỡ khi refactor.',
        'Test composable: nếu không dùng vòng đời thì gọi thẳng; nếu có vòng đời/inject thì bọc trong component giả.',
        'Cấu hình: <code>create-vue</code> có sẵn tùy chọn Vitest và E2E.'
      ] }
    ] }
  ],
  summary: [
    'SFC + Vite + Volar là bộ công cụ chuẩn; scoped CSS, v-bind trong CSS, :deep() khi cần.',
    'Router (Vue Router) cho SPA, Pinia cho state chung, SSR/SSG cho SEO – ưu tiên framework như Nuxt.',
    'Test: Vitest + Test Utils (unit/component), Playwright/Cypress (E2E); test hành vi, không test cài đặt.'
  ],
  cards: [
    ['Scoped CSS làm gì?', 'Chỉ áp CSS cho component hiện tại.'],
    ['Router chính thức?', 'Vue Router'],
    ['State chung cho app lớn?', 'Pinia'],
    ['SSR lợi gì?', 'Hiển thị nhanh và SEO.'],
    ['Hydration?', 'Client gắn tương tác lên HTML server trả.'],
    ['Test E2E?', 'Playwright/Cypress']
  ],
  quiz: [
    { q: 'Điểm nguy hiểm của store singleton tự chế khi SSR:', o: ['Chậm', 'State bị chia sẻ giữa các request/người dùng', 'Không có TypeScript', 'Không dùng được ref'], a: 1, e: 'Cần store tạo theo từng request (Pinia lo).' },
    { q: 'Công cụ build mặc định hiện nay của Vue:', o: ['Webpack bắt buộc', 'Vite', 'Gulp', 'Grunt'], a: 1, e: 'create-vue dùng Vite.' },
    { q: 'Test component nên ưu tiên:', o: ['Kiểm tra tên biến nội bộ', 'Kiểm tra hành vi người dùng thấy', 'Chụp mọi dòng code', 'Không cần test'], a: 1, e: 'Giảm vỡ khi refactor.' },
    { q: 'Điều hướng không tải lại trang trong SPA dùng:', o: ['Thẻ a href thường', 'RouterLink', 'window.reload', 'v-html'], a: 1, e: 'RouterLink + RouterView.' }
  ],
  match: [
    ['Vite', 'Build tool'],
    ['Pinia', 'State dùng chung'],
    ['Vue Router', 'Định tuyến SPA'],
    ['Vitest', 'Unit test'],
    ['SSR', 'Render ở server']
  ]
}
);
