// Pinia – Chương 7–10: plugins, SSR/Nuxt, testing/HMR/chuyển từ Vuex, bản đồ tra cứu.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.piniaguide = BOOK_DATA.piniaguide || { chapters: [] };
const P3 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.piniaguide.chapters.push(

{
  n: 7,
  title: 'Plugins: mở rộng mọi store',
  intro: 'Plugin cho phép bạn <b>thêm thuộc tính/method vào mọi store</b>, thêm option riêng khi định nghĩa store, bọc/chặn action, và làm tác dụng phụ như <b>lưu localStorage</b>. Nó là hàm nhận một “context” và (tùy chọn) trả về thuộc tính cần thêm.',
  sections: [
    { icon: '🔌', title: 'Plugin là gì và cách cài', blocks: [
      { t: 'p', x: P3(`import { createPinia } from 'pinia'

function SecretPiniaPlugin() {
  return { secret: 'the cake is a lie' }     // thêm thuộc tính cho MỌI store
}
const pinia = createPinia()
pinia.use(SecretPiniaPlugin)                 // cài plugin

// Trong store nào cũng có:
const store = useStore()
store.secret   // 'the cake is a lie'`) },
      { t: 'warn', x: '<b>Thứ tự:</b> plugin chỉ áp dụng cho các store được tạo <b>sau</b> khi plugin được cài <b>và sau khi pinia được truyền vào app</b> (<code>app.use(pinia)</code>). Store tạo trước đó sẽ không có plugin.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> plugin như <b>“bộ phụ kiện”</b> bạn gắn vào mọi chiếc xe (store) xuất xưởng sau khi lắp xong dây chuyền: thêm camera (log), thêm khóa (lưu trữ), thêm GPS (router)… mà không phải sửa từng chiếc.' }
    ] },
    { icon: '🧾', title: 'Context của plugin', blocks: [
      { t: 'p', x: P3(`export function myPiniaPlugin(context) {
  context.pinia     // pinia instance (createPinia())
  context.app       // app (createApp()) – Vue 3
  context.store     // store đang được plugin mở rộng
  context.options   // options truyền vào defineStore()
}
// hoặc destructure: ({ store }) => { ... }`) }
    ] },
    { icon: '➕', title: 'Thêm thuộc tính cho store', blocks: [
      { t: 'p', x: P3(`pinia.use(({ store }) => {
  store.hello = 'xin chào'                    // gán trực tiếp
})
pinia.use(() => ({ hello: 'xin chào' }))      // hoặc RETURN (khuyến nghị – DevTools theo dõi được)

// Thêm object bên ngoài (router, toast...) – bọc markRaw để Pinia không biến nó thành reactive
import { markRaw } from 'vue'
pinia.use(({ store }) => { store.router = markRaw(router) })`) },
      { t: 'list', items: [
        'Thuộc tính <b>được return</b> sẽ tự xuất hiện trong DevTools; gán trực tiếp thì dev muốn thấy phải thêm vào <code>store._customProperties</code> (chỉ chế độ dev).',
        'Mọi store được bọc <code>reactive</code> và <b>tự unwrap ref</b>/computed bên trong → vì thế truy cập getter không cần <code>.value</code>.',
        '<b>Thêm state mới</b> phải khai báo ở <b>hai nơi</b>: trên <code>store</code> (để dùng <code>store.myState</code>) <b>và</b> trên <code>store.$state</code> (để DevTools thấy và được <b>serialize</b> khi SSR). Dùng <code>ref()</code> để chia sẻ giá trị giữa các lần truy cập.',
        'Thay đổi state trong plugin (kể cả <code>$patch</code>) xảy ra <b>trước khi store active</b> nên <b>không kích hoạt subscription</b>.'
      ] }
    ] },
    { icon: '💾', title: 'Ví dụ thực tế: lưu state vào localStorage', blocks: [
      { t: 'p', x: P3(`pinia.use(({ store }) => {
  const key = 'pinia:' + store.$id
  const saved = localStorage.getItem(key)
  if (saved) store.$patch(JSON.parse(saved))              // khôi phục khi tạo store
  store.$subscribe((mutation, state) => {
    localStorage.setItem(key, JSON.stringify(state))      // lưu mỗi khi đổi
  })
})`) },
      { t: 'widget', name: 'pn-plugin-sim', title: 'Mô phỏng plugin lưu state: đổi state rồi “tải lại trang”' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> thay vì tự viết, cộng đồng có <b>pinia-plugin-persistedstate</b> (thêm option <code>persist: true</code> vào store). Nhưng nhớ: dữ liệu nhạy cảm (token) trong localStorage có rủi ro XSS; cân nhắc cookie <code>HttpOnly</code>.' }
    ] },
    { icon: '🧩', title: 'Thêm option riêng và bọc action', blocks: [
      { t: 'p', x: P3(`// Store khai báo option riêng (tham số thứ 3 với Setup store)
defineStore('search', { actions: { searchContacts() {} }, debounce: { searchContacts: 300 } })

// Plugin đọc options và BỌC action
import debounce from 'lodash/debounce'
pinia.use(({ options, store }) => {
  if (options.debounce) {
    return Object.keys(options.debounce).reduce((acc, name) => {
      acc[name] = debounce(store[name], options.debounce[name])
      return acc
    }, {})
  }
})`) },
      { t: 'list', items: [
        'Plugin chạy cho <b>mọi store</b>; muốn áp cho store cụ thể, dùng <b>option tùy biến</b> như trên rồi kiểm tra trong plugin.',
        'Với <b>Setup store</b>, truyền option là <b>tham số thứ ba</b> của <code>defineStore(id, setup, options)</code>.',
        'Plugin có thể <code>store.$onAction</code> / <code>store.$subscribe</code> để giám sát.',
        '<b>TypeScript:</b> mở rộng kiểu bằng <code>declare module \'pinia\'</code> với <code>PiniaCustomProperties</code>, <code>PiniaCustomStateProperties</code>, <code>DefineStoreOptionsBase</code>.',
        '<b>Nuxt:</b> cài plugin trong một Nuxt plugin: <code>nuxtApp.$pinia.use(myPlugin)</code> (xem chương 8).'
      ] }
    ] }
  ],
  summary: [
    'Plugin: hàm nhận { pinia, app, store, options } và return thuộc tính để thêm vào mọi store; cài bằng pinia.use().',
    'Chỉ áp cho store tạo sau khi cài plugin và sau app.use(pinia); state thêm mới phải đặt ở store và store.$state.',
    'Dùng cho: localStorage, router/toast toàn cục, debounce action, logging; áp riêng bằng option tùy biến.'
  ],
  cards: [
    ['Cài plugin?', 'pinia.use(plugin)'],
    ['Context gồm?', 'pinia, app, store, options.'],
    ['Thêm thuộc tính nên?', 'Return object (DevTools theo dõi).'],
    ['Thêm state mới ở đâu?', 'store và store.$state.'],
    ['Object ngoài (router)?', 'Bọc markRaw.'],
    ['Plugin chỉ áp cho store nào?', 'Tạo sau khi cài plugin và pinia đã vào app.']
  ],
  quiz: [
    { q: 'Cách cài plugin:', o: ['pinia.use(plugin)', 'app.provide(plugin)', 'defineStore(plugin)', 'storeToRefs(plugin)'], a: 0, e: 'Qua pinia instance.' },
    { q: 'Để đưa router vào store qua plugin nên:', o: ['markRaw(router)', 'reactive(router)', 'ref(router)', 'Không thể'], a: 0, e: 'Tránh biến router thành reactive.' },
    { q: 'State thêm bằng plugin cần khai báo ở:', o: ['Chỉ store', 'Chỉ store.$state', 'Cả store và store.$state', 'Không cần'], a: 2, e: 'Để DevTools và SSR serialize thấy.' },
    { q: 'Plugin áp dụng cho store nào?', o: ['Mọi store, kể cả tạo trước', 'Store tạo sau khi cài plugin và app.use(pinia)', 'Chỉ store có $reset', 'Chỉ store Option'], a: 1, e: 'Cần cài sớm.' }
  ],
  match: [
    ['pinia.use', 'Cài plugin'],
    ['markRaw', 'Không cho Pinia biến thành reactive'],
    ['store.$subscribe', 'Lưu state trong plugin persist'],
    ['DefineStoreOptionsBase', 'Kiểu cho option tùy biến (TS)'],
    ['_customProperties', 'Hiện thuộc tính plugin trong DevTools (dev)']
  ]
},

{
  n: 8,
  title: 'SSR và Nuxt',
  intro: 'Pinia hoạt động với SSR “ngay từ đầu” nếu bạn dùng store đúng chỗ. Phần này giải thích vì sao SSR có nguy cơ “rò rỉ state”, cách truyền pinia, hydrate state, và vì sao <b>Nuxt</b> làm hầu hết việc đó giúp bạn bằng <code>@pinia/nuxt</code>.',
  sections: [
    { icon: '⚠️', title: 'Vì sao SSR cần cẩn thận', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> server phục vụ <b>nhiều người dùng cùng lúc</b>. Nếu state là một biến toàn cục duy nhất, dữ liệu của người A có thể <b>lọt sang</b> người B. Vì vậy mỗi request cần <b>một pinia instance riêng</b> (một “tủ đồ” riêng).' },
      { t: 'list', items: [
        'Đó là lý do <b>state phải là hàm</b> và vì sao Pinia có khái niệm instance.',
        'Quy tắc vàng: gọi <code>useStore()</code> ở <b>đầu</b> <code>setup()</code>, trong <b>getters</b> và <b>actions</b> (nơi Pinia biết instance nào đang dùng).'
      ] }
    ] },
    { icon: '📤', title: 'Dùng store ngoài setup() trong SSR', blocks: [
      { t: 'p', x: P3(`// Truyền pinia instance đã cài vào app
const pinia = createPinia()
app.use(pinia)

// Ngoài setup (ví dụ serverPrefetch / hàm tiện ích):
const store = useStore(pinia)

// Pinia tự gắn vào app dưới tên $pinia:
serverPrefetch() { const store = useStore(this.$pinia) }`) },
      { t: 'list', items: [
        '<code>onServerPrefetch()</code> (Composition API) không cần xử lý gì thêm.',
        'Trong action: <b>mọi <code>useStore()</code> phải đứng trước <code>await</code></b>, nếu không có thể dùng nhầm instance của request khác.'
      ] }
    ] },
    { icon: '💧', title: 'Hydrate state', blocks: [
      { t: 'p', x: 'Sau khi server render, state của pinia phải được <b>chuyển sang client</b> để client tiếp tục từ đúng trạng thái (không fetch lại, không lệch HTML). Quy trình:' },
      { t: 'steps', items: [
        '<b>Server:</b> render xong, <b>serialize</b> <code>pinia.state.value</code> (thường vào biến <code>window.__INITIAL_STATE__</code> trong HTML).',
        '<b>Client:</b> trước khi mount, đọc và gán lại <code>pinia.state.value = JSON.parse(...)</code>.',
        'Nếu <b>không dùng Nuxt</b> bạn tự làm bước này (xem mẫu Vitesse, vite-plugin-ssr).'
      ] },
      { t: 'warn', x: '<b>Serialize an toàn:</b> không đưa dữ liệu nhạy cảm vào state được serialize; và <b>escape</b> chuỗi JSON khi nhúng vào HTML để tránh XSS (thư viện như <code>devalue</code> hay <code>serialize-javascript</code>).' }
    ] },
    { icon: '🟢', title: 'Nuxt: làm hộ gần hết', blocks: [
      { t: 'p', x: P3(`# cài
npx nuxi module add pinia   # hoặc: npm i @pinia/nuxt pinia

// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@pinia/nuxt'],
})`) },
      { t: 'list', items: [
        '<b>Tự lo</b> pinia instance theo request, hydrate state, và <b>auto-import</b>: <code>usePinia()</code>, <code>defineStore()</code>, <code>storeToRefs()</code>, <code>acceptHMRUpdate()</code>, cùng <b>mọi store trong thư mục <code>stores/</code></b> (Nuxt 4: <code>app/stores</code>; không quét thư mục lồng nhau; đổi bằng <code>storesDirs</code>).',
        '<b>Gọi action trong trang:</b> dùng <code>callOnce()</code> để chạy một lần (tránh fetch lại dữ liệu đã có từ server), hoặc chọn chạy mỗi lần điều hướng. Thường dùng <code>useFetch</code>/<code>useAsyncData</code> là đủ nên không cần phức tạp hóa.',
        '<b>Plugin Pinia trong Nuxt:</b> <code>defineNuxtPlugin(({ $pinia }) => { $pinia.use(myPlugin) })</code>.',
        'Lỗi ERESOLVE khi dùng npm: thêm <code>overrides</code> cho <code>vue</code> trong <code>package.json</code> theo hướng dẫn.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> Nuxt cũng có <code>useState()</code> cho state chia sẻ đơn giản. Dùng Pinia khi bạn cần getters/actions, DevTools, plugin hoặc cấu trúc nhiều store (xem giáo trình Nuxt 4 trong thư viện).' }
    ] }
  ],
  summary: [
    'SSR: mỗi request cần pinia riêng; gọi useStore() ở đầu setup/getters/actions; ngoài setup truyền pinia.',
    'Hydrate: serialize pinia.state.value ở server, gán lại ở client (Nuxt làm hộ).',
    '@pinia/nuxt: module + auto-import + store trong stores/; callOnce để gọi action một lần.'
  ],
  cards: [
    ['Rủi ro SSR với state toàn cục?', 'Rò rỉ dữ liệu giữa người dùng/request.'],
    ['Dùng store ngoài setup (SSR)?', 'useStore(pinia)'],
    ['Hydrate là gì?', 'Đưa state từ server sang client khi khởi động.'],
    ['Nuxt cài Pinia?', 'modules: ["@pinia/nuxt"]'],
    ['Store trong Nuxt tự import từ?', 'Thư mục stores/ (app/stores ở Nuxt 4).'],
    ['Gọi action một lần ở trang Nuxt?', 'callOnce()']
  ],
  quiz: [
    { q: 'Vì sao SSR cần mỗi request một pinia instance?', o: ['Để chạy nhanh hơn', 'Để tránh rò rỉ state giữa người dùng', 'Do TypeScript', 'Do DevTools'], a: 1, e: 'Server phục vụ nhiều người cùng lúc.' },
    { q: 'Ngoài setup(), trong SSR bạn phải:', o: ['Gọi useStore() không tham số', 'Truyền pinia: useStore(pinia)', 'Tắt pinia', 'Dùng global'], a: 1, e: 'Để Pinia biết instance.' },
    { q: 'Trong Nuxt, cấu hình tối thiểu là:', o: ['Thêm @pinia/nuxt vào modules', 'Tự viết server', 'Không cần gì và không cài gì', 'Cài vuex'], a: 0, e: 'Module lo phần còn lại.' },
    { q: 'Trong action ở SSR, useStore() nên đặt:', o: ['Sau await', 'Trước mọi await', 'Trong state()', 'Trong getter khác'], a: 1, e: 'Tránh dùng nhầm instance.' }
  ],
  match: [
    ['Hydration', 'Chuyển state server → client'],
    ['@pinia/nuxt', 'Module Pinia cho Nuxt'],
    ['callOnce', 'Chạy action một lần trong Nuxt'],
    ['useStore(pinia)', 'Chỉ rõ instance ngoài setup'],
    ['pinia.state.value', 'Toàn bộ state của app']
  ]
},

{
  n: 9,
  title: 'Testing, HMR và chuyển từ Vuex',
  intro: 'Ba chủ đề thực dụng: <b>kiểm thử</b> store và component dùng store, <b>hot module replacement</b> để sửa store không mất state, và <b>chuyển</b> dự án cũ từ Vuex sang Pinia.',
  sections: [
    { icon: '🧪', title: 'Unit test một store', blocks: [
      { t: 'p', x: P3(`import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from '../stores/counter'

beforeEach(() => { setActivePinia(createPinia()) })   // pinia mới cho MỖI test

test('tăng count', () => {
  const counter = useCounterStore()
  counter.increment()
  expect(counter.count).toBe(1)
})`) },
      { t: 'list', items: [
        'Cần lo <b>ba thứ</b>: <b>pinia instance</b> (store không chạy nếu thiếu), <b>actions</b> (thường chứa logic phức tạp, đôi khi muốn mock) và <b>plugins</b> (phải cài cho test).',
        '<b>Plugin chỉ có tác dụng khi pinia được cài vào một App</b>; trong test hãy tạo App giả: <code>const app = createApp({}); app.use(pinia)</code>.'
      ] }
    ] },
    { icon: '🧱', title: 'Test component dùng store', blocks: [
      { t: 'p', x: P3(`import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { vi } from 'vitest'

const wrapper = mount(Counter, {
  global: {
    plugins: [createTestingPinia({
      createSpy: vi.fn,                      // Jest dùng jest.fn
      initialState: { counter: { n: 20 } },  // key = id của store
    })],
  },
})
const store = useCounterStore()   // store đã được testing pinia chuẩn bị
await wrapper.find('button').trigger('click')
expect(store.increment).toHaveBeenCalledTimes(1)`) },
      { t: 'table', head: ['Tuỳ chọn <code>createTestingPinia</code>', 'Tác dụng'], rows: [
        ['<code>createSpy</code>', 'Hàm tạo spy (<code>vi.fn</code>/<code>jest.fn</code>); bắt buộc nếu không bật globals'],
        ['<code>initialState</code>', 'Đặt state ban đầu theo id store'],
        ['<code>stubActions</code> (mặc định <code>true</code>)', '<b>Chặn mọi action</b> (không chạy thật, thành spy) → test component và store tách biệt. <code>false</code> = chạy thật; <b>mảng tên</b> = chỉ chặn vài action; <b>hàm</b> = quyết định theo action/store'],
        ['<code>stubPatch</code>', 'Chặn <code>$patch</code>'],
        ['<code>fakeApp</code>', 'Tạo app giả để plugin chạy']
      ] },
      { t: 'list', items: [
        'Có thể <b>ghi đè getter</b> bằng cách gán thẳng giá trị trong test (getter trở thành writable): <code>store.double = 3</code>.',
        'Mock thủ công một action: <code>store.fetchItems = vi.fn().mockResolvedValue([])</code>.',
        'Test action thật nhưng stub API bên dưới: <code>stubActions: false</code> + mock <code>fetch</code>.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> chiến lược hợp lý: <b>test store</b> bằng pinia thật (unit) và <b>test component</b> bằng <code>createTestingPinia</code> với action bị chặn – mỗi bên chỉ kiểm phần của mình.' }
    ] },
    { icon: '♨️', title: 'Hot Module Replacement (HMR)', blocks: [
      { t: 'p', x: P3(`import { defineStore, acceptHMRUpdate } from 'pinia'
export const useAuth = defineStore('auth', { /* ... */ })

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuth, import.meta.hot))
}`) },
      { t: 'list', items: [
        'Sửa mã store (state/getters/actions) mà <b>không tải lại trang</b> và <b>giữ state hiện tại</b>.',
        'Thêm đoạn trên vào <b>mỗi</b> file store (Nuxt có auto-import <code>acceptHMRUpdate</code>).'
      ] }
    ] },
    { icon: '🔄', title: 'Chuyển từ Vuex sang Pinia', blocks: [
      { t: 'table', head: ['Vuex', 'Pinia'], rows: [
        ['Một store gốc + <b>modules</b> (namespaced)', '<b>Nhiều store</b>, mỗi file một store với id riêng – không cần namespace'],
        ['<b>mutations</b> (đồng bộ) + actions', 'Chỉ <b>actions</b> (đồng bộ lẫn bất đồng bộ), hoặc sửa state trực tiếp'],
        ['<code>state</code> object', '<code>state</code> là <b>hàm</b> (Option store)'],
        ['<code>getters(state, getters)</code>', '<code>getters(state)</code>, dùng <code>this</code> cho getter khác'],
        ['<code>this.$store</code>, <code>mapState/mapGetters/mapActions/mapMutations</code>', '<code>useStore()</code> hoặc <code>mapState/mapActions/mapWritableState/mapStores</code>'],
        ['<code>commit(\'x\')</code> / <code>dispatch(\'y\')</code>', 'Gọi trực tiếp <code>store.x()</code>']
      ] },
      { t: 'steps', items: [
        'Tạo file store Pinia cho từng <b>module</b> Vuex (id = tên module).',
        'Chuyển <code>state</code> → <code>state: () =&gt; ({})</code>, <code>getters</code> → <code>getters</code>, và <b>gộp mutations + actions → actions</b> (bỏ <code>commit</code>).',
        'Trong component, thay <code>this.$store.state.x</code>/<code>mapState</code> bằng <code>useXStore()</code> (hoặc map helper nếu dùng Options API).',
        'Thay plugin/persist của Vuex bằng plugin Pinia (chương 7).',
        'Chuyển dần từng module; Pinia và Vuex <b>có thể cùng tồn tại</b> trong giai đoạn di chuyển.'
      ] },
      { t: 'tip', x: '💡 Bạn có thể coi mỗi module Vuex trở thành <b>một store độc lập</b>: bớt cấu trúc lồng nhau, nhưng store nào cần dữ liệu của store khác thì gọi <code>useOtherStore()</code> bên trong action/getter (chương 6).' }
    ] }
  ],
  summary: [
    'Test store: setActivePinia(createPinia()) mỗi test; test component: createTestingPinia (stubActions mặc định true, initialState, createSpy).',
    'HMR: acceptHMRUpdate(useStore, import.meta.hot) ở mỗi file store.',
    'Vuex → Pinia: module → store, bỏ mutations (gộp vào actions), state là hàm, dùng useStore() / map helpers.'
  ],
  cards: [
    ['Unit test store cần?', 'setActivePinia(createPinia()) trước mỗi test.'],
    ['Test component + store?', 'createTestingPinia() từ @pinia/testing.'],
    ['stubActions mặc định?', 'true – action bị chặn thành spy.'],
    ['Đặt state ban đầu cho test?', 'initialState: { storeId: {...} }'],
    ['HMR cho store?', 'acceptHMRUpdate(useStore, import.meta.hot)'],
    ['Mutation Vuex thành gì?', 'Actions (hoặc sửa state trực tiếp).']
  ],
  quiz: [
    { q: 'Mỗi test unit store nên:', o: ['Dùng chung một pinia', 'Tạo pinia mới bằng setActivePinia(createPinia())', 'Không cần pinia', 'Mock Vue'], a: 1, e: 'Tránh state rò rỉ giữa các test.' },
    { q: 'createTestingPinia mặc định:', o: ['Chạy mọi action thật', 'Chặn (stub) mọi action', 'Tắt DevTools', 'Xóa state'], a: 1, e: 'Dùng stubActions:false để chạy thật.' },
    { q: 'Vuex mutation được thay bằng:', o: ['Plugin', 'Action hoặc sửa state trực tiếp', 'Getter', 'Không thay'], a: 1, e: 'Pinia không còn mutations.' },
    { q: 'acceptHMRUpdate dùng để:', o: ['Giữ state khi sửa store lúc dev', 'Tăng tốc build', 'Lưu localStorage', 'Gỡ store'], a: 0, e: 'HMR.' }
  ],
  match: [
    ['createTestingPinia', 'Pinia cho test component'],
    ['setActivePinia', 'Đặt pinia đang hoạt động (unit test)'],
    ['stubActions', 'Chặn action thành spy'],
    ['acceptHMRUpdate', 'HMR cho store'],
    ['Vuex module', 'Thành một Pinia store']
  ]
},

{
  n: 10,
  title: 'Bản đồ tra cứu và lời khuyên tổng kết',
  intro: 'Chương cuối gom lại toàn bộ API và tình huống: chọn đúng thứ (state/getter/action, $patch, storeToRefs, plugin…), tra cứu nhanh, cùng những lời khuyên để dùng Pinia hiệu quả.',
  sections: [
    { icon: '🗺️', title: 'Tình huống → công cụ', blocks: [
      { t: 'table', head: ['Tôi cần…', 'Dùng'], rows: [
        ['Giữ dữ liệu dùng chung nhiều component', '<code>state</code> của store'],
        ['Giá trị suy ra từ state (có cache)', '<code>getters</code>'],
        ['Gọi API, logic nghiệp vụ, async', '<code>actions</code>'],
        ['Tách state/getter ra biến mà vẫn phản ứng', '<code>storeToRefs(store)</code>'],
        ['Đổi nhiều giá trị một lúc, một mục DevTools', '<code>store.$patch()</code>'],
        ['Đặt lại về ban đầu', '<code>store.$reset()</code> (Option store) / tự viết'],
        ['Theo dõi thay đổi state', '<code>store.$subscribe()</code>'],
        ['Theo dõi các action (log, lỗi)', '<code>store.$onAction()</code>'],
        ['Dùng store trong store khác', '<code>useOtherStore()</code> trong getter/action (hoặc đầu Setup store)'],
        ['Dùng store ngoài component (SPA)', '<code>useStore()</code> trong hàm chạy muộn'],
        ['Dùng store ngoài component (SSR)', '<code>useStore(pinia)</code>'],
        ['Thêm chức năng cho mọi store', '<code>pinia.use(plugin)</code>'],
        ['Lưu state vào localStorage', 'Plugin + <code>$subscribe</code> (hoặc pinia-plugin-persistedstate)'],
        ['Test component dùng store', '<code>createTestingPinia()</code>'],
        ['Options API', '<code>mapState</code> / <code>mapWritableState</code> / <code>mapActions</code> / <code>mapStores</code>']
      ] },
      { t: 'widget', name: 'pn-pick', title: 'Luyện chọn đúng công cụ Pinia' }
    ] },
    { icon: '🔎', title: 'Tra cứu từ khóa', blocks: [
      { t: 'widget', name: 'pn-lookup', title: 'Gõ từ khóa để tra API (ví dụ: patch, ssr, plugin, test…)' }
    ] },
    { icon: '🧭', title: 'Lời khuyên tổng kết', blocks: [
      { t: 'steps', items: [
        '<b>Không phải mọi thứ đều cần store.</b> State chỉ dùng trong một component thì để <code>ref</code> cục bộ; dùng store cho dữ liệu <b>chia sẻ</b>.',
        '<b>Mỗi miền một store, mỗi store một file</b> (<code>stores/user.js</code>, <code>stores/cart.js</code>); id duy nhất; hàm <code>useXxxStore</code>.',
        '<b>Đặt logic ở actions</b>, giá trị dẫn xuất ở getters; sửa state trực tiếp cho thao tác đơn giản.',
        '<b>Đừng destructure store</b> — dùng <code>storeToRefs</code> (state/getters) và destructure thẳng action.',
        '<b>Ghép store cẩn thận:</b> không vòng lặp, không đọc state lẫn nhau lúc khởi tạo; gọi <code>useStore()</code> trước <code>await</code> (SSR).',
        '<b>Dùng plugin</b> cho nhu cầu chung (lưu trữ, log); <b>test</b> với <code>createTestingPinia</code>; bật <b>HMR</b> khi dev.',
        '<b>Bảo mật:</b> state ở client là công khai; đừng lưu bí mật; quyền thật kiểm tra ở server.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này bám phần <b>Core Concepts</b> của pinia.vuejs.org cùng <b>Getting Started, Plugins, SSR/Nuxt, Cookbook (testing, HMR, composing stores, composables, Vuex)</b>. Phần API reference chi tiết, kiểu TypeScript sâu và các hướng dẫn cộng đồng nằm ở các trang khác của site.' }
    ] }
  ],
  summary: [
    'Chọn công cụ theo vai trò: state (dữ liệu), getters (dẫn xuất), actions (logic/async), $patch/$subscribe/$onAction, plugin, createTestingPinia.',
    'Store cho dữ liệu chia sẻ; mỗi miền một store; không destructure store.',
    'SSR/Nuxt: pinia riêng cho mỗi request; test và HMR giúp phát triển nhanh và an toàn.'
  ],
  cards: [
    ['Dữ liệu dùng chung?', 'state'],
    ['Giá trị suy ra?', 'getters'],
    ['Gọi API?', 'actions'],
    ['Destructure đúng?', 'storeToRefs (state/getters)'],
    ['Nhiều thay đổi một lúc?', '$patch'],
    ['Mở rộng mọi store?', 'pinia.use(plugin)'],
    ['Test component?', 'createTestingPinia'],
    ['SSR ngoài setup?', 'useStore(pinia)']
  ],
  quiz: [
    { q: 'State chỉ dùng trong một component thì:', o: ['Bắt buộc đưa vào Pinia', 'Để ref cục bộ', 'Dùng provide', 'Dùng localStorage'], a: 1, e: 'Đừng lạm dụng store.' },
    { q: 'Cần ghi log mỗi khi một action chạy xong:', o: ['$onAction với after()', 'getter', 'mapState', 'v-model'], a: 0, e: 'Theo dõi action.' },
    { q: 'Muốn lưu state vào localStorage cho mọi store:', o: ['Plugin + $subscribe', 'Getter', 'Option store', 'storeToRefs'], a: 0, e: 'Plugin áp cho mọi store.' },
    { q: 'Điều nào đúng về state phía client?', o: ['An toàn để chứa bí mật', 'Là công khai, đừng lưu bí mật', 'Được mã hóa tự động', 'Chỉ server thấy'], a: 1, e: 'Người dùng xem được trong DevTools.' }
  ],
  match: [
    ['state', 'Dữ liệu'],
    ['getters', 'Computed'],
    ['actions', 'Methods'],
    ['storeToRefs', 'Destructure giữ phản ứng'],
    ['pinia.use', 'Plugin']
  ]
}
);
