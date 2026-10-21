// Fullstack Vue – Chương 7–9: Routing, Unit test, và Vue 3 hiện đại (ngoài sách).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vuebook = BOOK_DATA.vuebook || { chapters: [] };
const C3 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vuebook.chapters.push(

{
  n: 7,
  title: 'Routing: nhiều “trang” trong một ứng dụng một trang',
  intro: 'Router quyết định phần giao diện nào hiện ra theo địa chỉ (URL). Trong ứng dụng một trang (SPA), trình duyệt chỉ tải app một lần; đổi “trang” là JavaScript thay component, không tải lại gì — mượt và nhanh.',
  sections: [
    { icon: '🧭', title: 'Routing là gì, SPA là gì', blocks: [
      { t: 'p', x: 'URL gồm: <b>giao thức</b> (https) + <b>tên miền</b> (website.com) + <b>đường dẫn</b> (/products/shoes/02). Đường dẫn trỏ đến “tài nguyên”. Có URL tốt, người dùng có thể <b>tải lại trang mà vẫn ở đúng chỗ</b>, đánh dấu trang, chia sẻ liên kết.' },
      { t: 'table', head: ['', 'Routing phía server', 'Routing phía client (SPA)'], rows: [
        ['Cách làm', 'Mỗi URL → một yêu cầu tới server → server trả trang', 'Trình duyệt giữ cả app; URL đổi → JavaScript vẽ component phù hợp'],
        ['Tải lại trang', 'Có (trang chớp)', 'Không (mượt)'],
        ['Công cụ', 'Express, Rails…', 'vue-router']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> server-side giống đi mỗi phòng phải ra cổng, hỏi lễ tân dẫn đường. SPA giống bạn đã vào tòa nhà rồi — đổi phòng chỉ cần mở cửa nội bộ. Nhưng bạn vẫn muốn bảng chỉ đường (URL) trên tường để quay lại đúng phòng.' }
    ] },
    { icon: '🔧', title: 'Tự xây router để hiểu bản chất', blocks: [
      { t: 'steps', items: [
        '<b>router-view</b> là component dùng <code>&lt;component :is="..."&gt;</code> (component động) để hiện component khớp với <code>window.location.pathname</code> tìm trong mảng <code>routes</code>; không khớp thì hiện “Not Found”.',
        '<b>router-link</b> là thẻ <code>&lt;a&gt;</code> có <code>@click</code> chặn hành vi mặc định (<code>evt.preventDefault()</code>) và gọi <code>window.history.pushState(null, null, to)</code> để đổi URL <b>không</b> tải lại.',
        'Khi URL đổi nhưng app chưa biết → dùng một <b>event bus</b> báo cho router-view vẽ lại.',
        'Nút Back/Forward của trình duyệt kích hoạt sự kiện <code>onpopstate</code> → cũng phát sự kiện để vẽ lại.'
      ] },
      { t: 'widget', name: 'vue-router-sim', title: 'Mô phỏng router: thanh địa chỉ, link không tải lại, nút Back/Forward' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – History API:</b> <code>history.pushState</code> thêm một mục vào “ngăn xếp lịch sử” và đổi URL mà không gọi server; <code>history.back()/forward()</code> di chuyển trong ngăn xếp. Đó là nền tảng của mọi router SPA.' }
    ] },
    { icon: '🛣', title: 'vue-router thật', blocks: [
      { t: 'p', x: C3(`import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',            // URL sạch, không có #
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductList },
    { path: '/products/:id', component: ProductItem, props: true },
    { path: '/cart', component: CartList },
    { path: '*', component: NotFound }
  ]
})
new Vue({ router, render: h => h(App) }).$mount('#app')

<router-link to="/cart">Giỏ hàng</router-link>
<router-view />`) },
      { t: 'table', head: ['Khái niệm', 'Ý nghĩa'], rows: [
        ['<code>mode: "history"</code>', 'Bỏ dấu <code>#</code> trong URL (mặc định là <i>hash mode</i>). Server phải trả <code>index.html</code> cho mọi đường dẫn.'],
        ['<code>redirect</code>', 'Vào <code>/</code> thì chuyển sang <code>/products</code>'],
        ['<b>Dynamic route</b> <code>/products/:id</code>', 'Một route khớp nhiều URL; <code>id</code> lấy từ <code>$route.params.id</code>'],
        ['<code>props: true</code>', 'Truyền tham số URL vào <b>props</b> của component (dễ test, đỡ phụ thuộc router)'],
        ['<code>$router.push("/cart")</code>', 'Điều hướng bằng code (như bấm router-link)'],
        ['<code>path: "*"</code>', 'Bắt mọi URL không khớp: trang 404']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Vue 3:</b> dùng <b>Vue Router 4</b>: <code>createRouter({ history: createWebHistory(), routes })</code>; route 404 viết <code>/:pathMatch(.*)*</code>; trong <code>&lt;script setup&gt;</code> dùng <code>useRoute()</code>, <code>useRouter()</code>.' }
    ] },
    { icon: '🔐', title: 'Đăng nhập, watcher và navigation guards', blocks: [
      { t: 'p', x: 'Ví dụ: server giờ yêu cầu <b>token</b>. Đăng nhập gọi <code>/login</code> nhận token, lưu vào <code>localStorage</code> và state Vuex (<code>SET_TOKEN</code>); các lần gọi API sau đều gửi token này.' },
      { t: 'tabs', items: [
        ['👀 Watcher', '<code>watch</code> theo dõi một dữ liệu và chạy hàm khi nó đổi. Ví dụ theo dõi token trong store: khi token bị xóa (đăng xuất) thì <code>this.$router.push("/login")</code>; khi có token thì vào <code>/products</code>.'],
        ['🛂 Navigation guard', 'Hàm chạy <b>trước</b> khi vào route. <code>router.beforeEach((to, from, next) =&gt; ...)</code>: nếu route cần đăng nhập (<code>meta: { requiresAuth: true }</code>) mà chưa có token thì <code>next("/login")</code>, ngược lại <code>next()</code>.'],
        ['🏷 meta', 'Gắn dữ liệu tùy ý cho route (vd <code>requiresAuth</code>) để guard đọc.']
      ] },
      { t: 'p', x: C3(`router.beforeEach((to, from, next) => {
  const needsAuth = to.matched.some(r => r.meta.requiresAuth)
  if (needsAuth && !localStorage.getItem('token')) next('/login')
  else next()
})`) },
      { t: 'widget', name: 'vue-guard', title: 'Thử guard: đăng nhập/đăng xuất rồi vào trang cần quyền' },
      { t: 'warn', x: '📚 <b>Bổ sung ngoài sách:</b> guard ở client chỉ <b>ẩn giao diện</b>. Người dùng vẫn có thể gọi thẳng API — dữ liệu thật phải được bảo vệ ở <b>server</b> (kiểm tra token mỗi yêu cầu). Ở Vue Router 4, hàm guard có thể <b>return</b> thay cho <code>next</code> (<code>return "/login"</code> / <code>return true</code>).' }
    ] }
  ],
  summary: [
    'SPA: tải app một lần, router đổi component theo URL, không tải lại trang.',
    'Router tự xây gồm router-view (component động + pathname) và router-link (pushState + chặn mặc định) + popstate cho Back/Forward.',
    'vue-router: routes, history mode, redirect, <code>/:id</code>, <code>props: true</code>, <code>$router.push</code>, route 404.',
    'Watcher theo dõi dữ liệu; guard <code>beforeEach</code> + <code>meta.requiresAuth</code> chặn trang cần đăng nhập — nhưng bảo mật thật ở server.'
  ],
  cards: [
    ['SPA?', 'Ứng dụng web tải một lần; JavaScript vẽ các “trang” khác nhau.'],
    ['<code>router-view</code>?', 'Nơi hiển thị component khớp với route hiện tại.'],
    ['<code>router-link</code>?', 'Liên kết đổi route không tải lại trang.'],
    ['<code>history.pushState</code>?', 'Đổi URL và thêm vào lịch sử mà không gọi server.'],
    ['Sự kiện khi bấm Back/Forward?', '<code>popstate</code>.'],
    ['History mode vs hash mode?', 'History: URL sạch (cần server hỗ trợ); hash: có <code>#</code>.'],
    ['Dynamic route?', '<code>/products/:id</code>; tham số ở <code>$route.params</code>.'],
    ['<code>props: true</code> làm gì?', 'Truyền tham số URL thành props của component.'],
    ['Điều hướng bằng code?', '<code>$router.push(path)</code>.'],
    ['Navigation guard?', 'Hàm chạy trước khi vào route (vd <code>beforeEach</code>) để cho phép/chặn/chuyển hướng.'],
    ['Watcher?', 'Theo dõi dữ liệu và chạy hàm khi dữ liệu đổi.'],
    ['Guard ở client có đủ bảo mật?', 'Không; server phải kiểm tra token.']
  ],
  quiz: [
    { q: 'Đổi route trong SPA mà không tải lại trang nhờ:', o: ['Gửi form', 'history.pushState + router', 'iframe', 'Cookie'], a: 1, e: 'Chỉ đổi URL và vẽ lại component.' },
    { q: 'Route /products/:id lấy id ở:', o: ['$route.params.id', '$store.id', 'window.id', 'props.global'], a: 0, e: 'Hoặc props nếu props: true.' },
    { q: 'Bắt URL không tồn tại để hiện 404:', o: ['redirect', 'path: "*" (Vue Router 3)', 'meta', 'created'], a: 1, e: 'Route cuối cùng bắt mọi thứ.' },
    { q: 'Chặn trang cần đăng nhập khi chưa có token:', o: ['Watcher CSS', 'router.beforeEach', 'v-for', 'mapGetters'], a: 1, e: 'Navigation guard.' },
    { q: 'Guard chỉ ở client:', o: ['Đủ bảo mật', 'Chỉ che giao diện; server vẫn phải kiểm', 'Thay thế HTTPS', 'Mã hóa dữ liệu'], a: 1, e: 'Có thể gọi thẳng API.' },
    { q: 'History mode cần server:', o: ['Không gì', 'Trả index.html cho mọi đường dẫn', 'Tắt cache', 'Dùng hash'], a: 1, e: 'Để tải lại /cart không bị 404.' }
  ],
  match: [
    ['router-view', 'Nơi hiện component của route'],
    ['pushState', 'Đổi URL không tải lại'],
    ['beforeEach', 'Guard toàn cục'],
    ['meta', 'Dữ liệu tùy ý gắn vào route'],
    ['popstate', 'Back/Forward của trình duyệt']
  ]
},

{
  n: 8,
  title: 'Unit test cho component Vue',
  intro: 'Test tự động giúp bạn sửa code mà không sợ làm hỏng thứ khác. Chương này nói về unit test: kiểm tra từng component riêng lẻ, với bộ công cụ chính thức vue-test-utils.',
  sections: [
    { icon: '🧪', title: 'Hai loại test và bộ công cụ', blocks: [
      { t: 'table', head: ['', 'End-to-end (E2E)', 'Unit test'], rows: [
        ['Cách làm', 'Từ trên xuống: giả lập người dùng thật dùng cả app (bấm, gõ) — vd Nightwatch', 'Từ dưới lên: test từng khối nhỏ (một component) cô lập'],
        ['Tốc độ', 'Chậm, nặng', 'Nhanh, nhẹ'],
        ['Phát hiện', 'App chạy đúng từ đầu đến cuối?', 'Khối này đúng chưa, hỏng ở đâu?']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (xe hơi):</b> unit test như thử riêng từng bộ phận (phanh, đèn) trên bàn. E2E như lái cả xe chạy thử một vòng. Cần cả hai, nhưng unit test rẻ hơn và chỉ chính xác chỗ hỏng.' },
      { t: 'list', items: [
        '<b>Bộ chạy test:</b> Mocha (do vue-cli cung cấp, kèm thư viện khẳng định Chai) hoặc Jest. Lệnh <code>npm run test:unit</code>.',
        '<b>Cấu trúc:</b> <code>describe("tên nhóm", () =&gt; { it("làm gì", () =&gt; { expect(...).to... }) })</code>. <code>describe</code> gom nhóm, <code>it</code> là một kiểm tra (spec), <code>expect</code> là khẳng định.',
        '<b>Linter</b>: bật env <code>mocha: true</code> để ESLint hiểu các hàm test.'
      ] }
    ] },
    { icon: '🔬', title: 'vue-test-utils: mount, shallowMount, wrapper', blocks: [
      { t: 'p', x: 'Cách thô: <code>Vue.extend(App)</code> rồi <code>new Constructor().$mount()</code> và đọc <code>vm.$el.querySelector(...)</code>. Thư viện <b>vue-test-utils</b> bọc việc này gọn hơn:' },
      { t: 'table', head: ['API', 'Ý nghĩa'], rows: [
        ['<code>mount(Comp)</code>', 'Dựng component <b>cùng toàn bộ con</b>'],
        ['<code>shallowMount(Comp)</code>', 'Dựng component nhưng <b>thay con bằng bản giả</b> (stub) → test <b>cô lập</b>'],
        ['<code>wrapper</code>', 'Đối tượng bọc component đã dựng: <code>wrapper.html()</code>, <code>wrapper.vm</code> (instance), <code>wrapper.find(selector)</code>'],
        ['<code>find()</code>', 'Trả wrapper của phần tử DOM; <code>.element</code> là phần tử thật, <code>.trigger("click")</code> giả lập sự kiện, <code>.setValue(...)</code> gõ vào input'],
        ['<code>wrapper.setData({...})</code>', 'Đổi dữ liệu trực tiếp để chuẩn bị tình huống']
      ] },
      { t: 'key', x: '<b>Vì sao shallow?</b> Khi test cha, đừng để lỗi của con làm test cha đỏ: đổi con chỉ làm hỏng test của con. Test cô lập → biết chính xác chỗ lỗi. Tạo <code>wrapper</code> mới trong <code>beforeEach</code> để mỗi test bắt đầu từ trạng thái sạch (khai báo <code>let wrapper</code> ở ngoài).' },
      { t: 'p', x: C3(`import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App', () => {
  let wrapper
  beforeEach(() => { wrapper = shallowMount(App) })

  it('hiển thị tiêu đề Items', () => {
    expect(wrapper.html()).toContain('<th>Items</th>')
  })
  it('nút Add bị khóa khi mới mở', () => {
    expect(wrapper.find('button').element.disabled).toBe(true)
  })
  it('thêm item khi nhập rồi bấm Add', () => {
    wrapper.find('input').setValue('Táo')
    wrapper.find('button').trigger('click')
    expect(wrapper.vm.items).toContain('Táo')
  })
})`) },
      { t: 'widget', name: 'vue-test-sim', title: 'Mô phỏng test: Arrange – Act – Assert với component đếm' }
    ] },
    { icon: '🧭', title: 'Test gì, theo thứ tự nào', blocks: [
      { t: 'steps', items: [
        '<b>Trạng thái ban đầu:</b> có tiêu đề/ô nhập/nút? dữ liệu mặc định đúng? nút Add bị khóa? (Đây là “người dùng thấy gì khi mở trang”.)',
        '<b>Hành vi người dùng (BDD):</b> “Khi người dùng nhập chữ… thì nút Add được mở”; “Khi bấm Add… item vào danh sách và ô nhập trống”.',
        '<b>Store:</b> test getters/mutations/actions như hàm thuần: cho state vào, kiểm kết quả; mock API để khỏi gọi mạng thật.',
        '<b>Ứng dụng thời tiết (ví dụ cuối chương):</b> mock HTTP, kiểm tra lỗi, loading, render danh sách.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Arrange–Act–Assert:</b> mỗi test có 3 phần: <b>Chuẩn bị</b> (dựng component, đặt dữ liệu), <b>Hành động</b> (gõ/bấm), <b>Kiểm tra</b> (expect). Test tốt kiểm hành vi người dùng thấy được, không soi chi tiết nội bộ (đổi cách cài đặt mà hành vi giữ nguyên thì test vẫn xanh).' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – ngày nay:</b> Vue 3 dùng <b>@vue/test-utils v2</b> với <b>Vitest</b> (nhanh, tích hợp Vite, cú pháp giống Jest). Với Vue 3 các thao tác như <code>trigger</code>/<code>setValue</code> trả Promise → viết <code>await wrapper.find("button").trigger("click")</code>. Test hành vi giống testing-library cũng rất phổ biến.' }
    ] }
  ],
  summary: [
    'E2E kiểm cả app như người dùng; unit test kiểm từng khối cô lập, nhanh và chính xác.',
    '<code>describe/it/expect</code>; <code>mount</code> (đủ con) vs <code>shallowMount</code> (con giả, cô lập).',
    '<code>wrapper.find().trigger/setValue</code>, <code>wrapper.vm</code>, <code>setData</code>; dựng wrapper mới trong <code>beforeEach</code>.',
    'Test trạng thái ban đầu → hành vi người dùng → store (mock API). Vue 3: Vitest + test-utils v2, nhớ <code>await</code>.'
  ],
  cards: [
    ['E2E test?', 'Giả lập người dùng dùng cả app từ đầu đến cuối.'],
    ['Unit test?', 'Kiểm từng khối nhỏ (một component/hàm) cô lập.'],
    ['<code>describe</code>?', 'Gom nhóm các test.'],
    ['<code>it</code>?', 'Một kiểm tra (spec).'],
    ['<code>expect</code>?', 'Khẳng định về kết quả.'],
    ['<code>mount</code> vs <code>shallowMount</code>?', 'mount dựng cả con; shallowMount thay con bằng stub.'],
    ['Vì sao test cô lập?', 'Lỗi con không làm đỏ test cha; biết chính xác chỗ hỏng.'],
    ['<code>wrapper</code>?', 'Đối tượng bọc component đã dựng với các API tiện ích.'],
    ['<code>beforeEach</code>?', 'Chạy trước mỗi test để dựng trạng thái sạch.'],
    ['Giả lập bấm nút?', '<code>wrapper.find("button").trigger("click")</code>.'],
    ['Công cụ chạy test ở Vue 3?', 'Vitest (hoặc Jest) + @vue/test-utils v2.']
  ],
  quiz: [
    { q: 'Test cô lập một component cha nên dùng:', o: ['mount', 'shallowMount', 'E2E', 'curl'], a: 1, e: 'Thay con bằng stub.' },
    { q: 'Tạo wrapper mới trước mỗi test bằng:', o: ['after', 'beforeEach', 'it.only', 'created'], a: 1, e: 'Trạng thái sạch.' },
    { q: 'Test nào kiểm cả app như người dùng?', o: ['Unit', 'E2E', 'Lint', 'Snapshot nhỏ'], a: 1, e: 'Nightwatch…' },
    { q: 'wrapper.find("input").setValue("x") làm gì?', o: ['Đổi tên file', 'Gõ vào ô nhập', 'Reload', 'Xóa component'], a: 1, e: 'Giả lập nhập liệu.' },
    { q: 'Test tốt nên kiểm:', o: ['Chi tiết nội bộ', 'Hành vi người dùng thấy', 'Chỉ CSS', 'Kích thước file'], a: 1, e: 'Đổi cách cài đặt vẫn xanh.' },
    { q: 'Test store nên:', o: ['Gọi API thật', 'Mock API, kiểm kết quả', 'Bỏ qua', 'Chạy trong trình duyệt thật'], a: 1, e: 'Nhanh, ổn định.' }
  ],
  match: [
    ['describe / it', 'Nhóm / một kiểm tra'],
    ['shallowMount', 'Dựng cô lập, con bị stub'],
    ['wrapper.vm', 'Instance Vue của component'],
    ['Vitest', 'Bộ test hiện đại cho Vite'],
    ['E2E', 'Mô phỏng người dùng cả app']
  ]
},

{
  n: 9,
  title: 'Vue 3 hiện đại: Composition API, Pinia, Vite (bổ sung ngoài sách)',
  intro: 'Sách viết năm 2018 cho Vue 2 (Options API, Vuex, Vue CLI). Khái niệm vẫn đúng, nhưng cách viết ngày nay đã đổi. Chương này (không có trong PDF) giúp bạn “dịch” những gì đã học sang Vue 3 — để đọc code mới mà không bị ngợp.',
  sections: [
    { icon: '🗺', title: 'Bản đồ chuyển đổi Vue 2 → Vue 3', blocks: [
      { t: 'table', head: ['Trong sách (Vue 2)', 'Vue 3 hiện nay', 'Ghi chú'], rows: [
        ['<code>new Vue({ el, data, methods })</code>', '<code>createApp(App).mount("#app")</code>', 'Không còn global <code>Vue</code>'],
        ['Options API (<code>data</code>, <code>computed</code>, <code>methods</code>)', 'Composition API với <code>&lt;script setup&gt;</code>', 'Options API vẫn dùng được'],
        ['<code>data()</code>', '<code>ref()</code> / <code>reactive()</code>', 'Đọc/ghi ref bằng <code>.value</code> trong script'],
        ['<code>computed: {}</code>', '<code>computed(() =&gt; ...)</code>', ''],
        ['<code>watch: {}</code>', '<code>watch()</code> / <code>watchEffect()</code>', ''],
        ['<code>created()</code>, <code>mounted()</code>', '<code>onMounted()</code>… (chạy thẳng trong setup thay cho created)', ''],
        ['<code>props: []</code>, <code>$emit</code>', '<code>defineProps()</code>, <code>defineEmits()</code>', 'Có thể kèm kiểu TypeScript'],
        ['Vuex', 'Pinia', 'Bỏ mutations'],
        ['vue-router 3', 'vue-router 4', '<code>createRouter</code>, <code>useRoute()</code>'],
        ['Vue CLI / Webpack', 'Vite', '<code>npm create vue@latest</code>'],
        ['Event bus <code>$on</code>', 'Pinia / mitt / props+emit', '<code>$on</code> bị gỡ'],
        ['Một phần tử gốc trong template', 'Nhiều phần tử gốc (fragments)', '']
      ] },
      { t: 'widget', name: 'vue-convert', title: 'Xem cùng một component viết kiểu Vue 2 (Options) và Vue 3 (script setup)' }
    ] },
    { icon: '🧩', title: 'Composition API trong 5 phút', blocks: [
      { t: 'p', x: C3(`<script setup>
import { ref, computed, watch, onMounted } from 'vue'

const props = defineProps({ title: String })
const emit = defineEmits(['add-note'])

const input = ref('')                       // dữ liệu phản ứng
const notes = ref([])
const count = computed(() => notes.value.length)

watch(input, (v) => console.log('đang gõ', v))
onMounted(() => console.log('đã gắn vào trang'))

function addNote() {
  notes.value.push(input.value)             // trong script cần .value
  emit('add-note', input.value)
  input.value = ''
}
</script>

<template>
  <input v-model="input" @keyup.enter="addNote">
  <p>{{ count }} ghi chú</p>                <!-- trong template tự bỏ .value -->
</template>`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>ref(0)</code> là cái hộp có nhãn <code>.value</code> chứa số 0; Vue canh chừng hộp đó. Khi bạn thay nội dung hộp, mọi nơi dùng nó được vẽ lại. <code>reactive({...})</code> canh chừng cả một đối tượng, không cần <code>.value</code>.' },
      { t: 'key', x: '<b>Vì sao có Composition API?</b> Với Options API, logic một tính năng bị chia nhỏ sang data/computed/methods/watch ở nhiều chỗ. Composition API cho gom logic của một tính năng lại một nơi và tái sử dụng bằng hàm gọi là <b>composable</b> (vd <code>useCart()</code>, <code>useMouse()</code>).' }
    ] },
    { icon: '🍍', title: 'Pinia thay cho Vuex', blocks: [
      { t: 'p', x: C3(`// stores/notes.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])
  const count = computed(() => notes.value.length)   // = getter
  function addNote(n) { notes.value.push(n) }        // = action (sửa state trực tiếp)
  return { notes, count, addNote }
})

// trong component
const store = useNotesStore()
store.addNote('Học Pinia')`) },
      { t: 'table', head: ['Vuex (sách)', 'Pinia'], rows: [
        ['state / getters / actions / <b>mutations</b>', 'state / getters / actions (không mutations)'],
        ['<code>this.$store.dispatch(...)</code>', 'Gọi thẳng <code>store.addNote()</code>'],
        ['Module lồng nhau + namespaced', 'Mỗi store là một module độc lập'],
        ['Ít thân thiện TypeScript', 'Hỗ trợ TypeScript tốt, devtools vẫn có time-travel']
      ] },
      { t: 'tip', x: '💡 Tư duy không đổi: <b>một nguồn sự thật</b>, dữ liệu chảy một chiều, thay đổi đi qua kho trung tâm. Pinia chỉ bỏ bớt nghi thức (mutation).' }
    ] },
    { icon: '🧰', title: 'Hệ sinh thái hôm nay', blocks: [
      { t: 'list', items: [
        '<b>Dựng dự án:</b> <code>npm create vue@latest</code> (Vite) → chọn Router, Pinia, Vitest, ESLint ngay lúc tạo.',
        '<b>Framework đầy đủ:</b> <b>Nuxt</b> (SSR, định tuyến theo file, SEO) khi cần render phía server.',
        '<b>TypeScript:</b> <code>&lt;script setup lang="ts"&gt;</code>, <code>defineProps&lt;{...}&gt;()</code>.',
        '<b>UI:</b> Vuetify, Element Plus, PrimeVue, Naive UI, Tailwind.',
        '<b>Test:</b> Vitest + @vue/test-utils; E2E bằng Playwright/Cypress.',
        '<b>Devtools:</b> Vue DevTools (tiện ích trình duyệt) xem component, Pinia, router.'
      ] },
      { t: 'warn', x: 'Khi tìm tài liệu, kiểm tra phiên bản: “Vue 2” (Options API, <code>new Vue</code>, Vuex, <code>$on</code>) và “Vue 3” (<code>createApp</code>, Composition API, Pinia) khác nhau. Vue 2 đã hết vòng đời hỗ trợ (EOL cuối 2023). Đọc sách này để hiểu <b>khái niệm</b>, viết mới bằng Vue 3.' },
      { t: 'widget', name: 'vue-which-version', title: 'Đoạn code này là Vue 2 hay Vue 3?' }
    ] }
  ],
  summary: [
    'Khái niệm cốt lõi (binding, v-for, computed, props/emit, store, router, test) giữ nguyên từ Vue 2 sang Vue 3.',
    'Vue 3: <code>createApp</code>, <code>&lt;script setup&gt;</code>, <code>ref/reactive/computed/watch</code>, <code>defineProps/defineEmits</code>.',
    'Pinia thay Vuex; Vue Router 4; Vite thay Vue CLI; Vitest cho test.',
    'Viết mới bằng Vue 3; dùng sách để hiểu tư duy.'
  ],
  cards: [
    ['Tạo app Vue 3?', '<code>createApp(App).mount("#app")</code>.'],
    ['<code>ref</code>?', 'Hộp dữ liệu phản ứng; đọc/ghi qua <code>.value</code> trong script.'],
    ['<code>reactive</code>?', 'Biến object thành phản ứng, không cần <code>.value</code>.'],
    ['<code>&lt;script setup&gt;</code>?', 'Cách viết gọn của Composition API trong file .vue.'],
    ['<code>defineProps</code> / <code>defineEmits</code>?', 'Khai báo props và sự kiện trong script setup.'],
    ['Composable?', 'Hàm tái dùng logic có trạng thái, thường đặt tên <code>useXxx</code>.'],
    ['Pinia?', 'Thư viện store chính thức cho Vue 3, bỏ mutations.'],
    ['Vue Router 4 tạo router?', '<code>createRouter({ history: createWebHistory(), routes })</code>.'],
    ['Công cụ build hiện nay?', 'Vite.'],
    ['Vue 2 còn hỗ trợ?', 'Đã hết vòng đời (EOL cuối 2023).']
  ],
  quiz: [
    { q: 'Trong &lt;script setup&gt;, đọc giá trị của ref count:', o: ['count', 'count.value', 'count()', '$count'], a: 1, e: 'Trong template mới tự bỏ .value.' },
    { q: 'Thay thế Vuex cho Vue 3:', o: ['Pinia', 'Redux', 'jQuery', 'Express'], a: 0, e: 'Chính thức khuyến nghị.' },
    { q: 'Khai báo sự kiện con phát ra:', o: ['defineEmits', 'defineProps', 'ref', 'watch'], a: 0, e: 'Cho emit.' },
    { q: 'Dựng dự án Vue 3 mới thường dùng:', o: ['Vue CLI', 'Vite (npm create vue@latest)', 'jQuery', 'Gulp'], a: 1, e: 'Nhanh, gọn.' },
    { q: 'Điều nào Vue 3 đã gỡ?', o: ['$emit', '$on / $off (event bus)', 'v-model', 'computed'], a: 1, e: 'Dùng mitt/Pinia.' },
    { q: 'Composable là:', o: ['Component con', 'Hàm tái dùng logic có trạng thái', 'Plugin CSS', 'Một loại route'], a: 1, e: 'Ví dụ useCart().' }
  ],
  match: [
    ['ref()', 'Dữ liệu phản ứng dùng .value'],
    ['Pinia', 'Store của Vue 3'],
    ['Vite', 'Công cụ build/dev nhanh'],
    ['createApp', 'Khởi tạo app Vue 3'],
    ['Composable', 'Tái sử dụng logic bằng hàm']
  ]
}
);
