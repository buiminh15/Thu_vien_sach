// Pinia (pinia.vuejs.org) – bản tiếng Việt dễ hiểu – Chương 1–3.
// Khối "📚 Bổ sung ngoài tài liệu" = giải thích thêm để dễ hiểu (không nằm trong trang docs).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.piniaguide = BOOK_DATA.piniaguide || { chapters: [] };
const P1 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.piniaguide.chapters.push(

{
  n: 1,
  title: 'Pinia là gì, vì sao dùng và cài đặt',
  intro: 'Pinia là thư viện quản lý state <b>chính thức</b> của Vue: một “kho dữ liệu” dùng chung cho nhiều component. Nhẹ, gọn, hỗ trợ TypeScript rất tốt, có DevTools, SSR và hot-module-replacement. Chương này: nó giải quyết vấn đề gì, so với Vuex ra sao, cách cài và ví dụ đầu tiên.',
  sections: [
    { icon: '🧭', title: 'Vấn đề: chia sẻ state giữa nhiều component', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> state cục bộ (<code>ref</code> trong component) như <b>đồ cá nhân</b>. Khi nhiều nơi cùng cần một dữ liệu (người dùng đăng nhập, giỏ hàng, theme) thì cần một <b>tủ đồ chung</b>: đó là store. Pinia là loại tủ đồ chung mà Vue khuyên dùng.' },
      { t: 'list', items: [
        'Với app nhỏ, một <code>reactive()</code> export dùng chung là đủ (xem giáo trình Vue 3, chương 9).',
        'Với app lớn/SSR: cần cấu trúc rõ ràng, DevTools, type-safe, HMR, plugin, và <b>tránh rò rỉ state giữa các request SSR</b> → dùng Pinia.',
        'Store tồn tại <b>độc lập với cây component</b>; component nào cũng đọc/ghi được.'
      ] }
    ] },
    { icon: '⭐', title: 'Vì sao Pinia', blocks: [
      { t: 'table', head: ['Điểm mạnh', 'Ý nghĩa'], rows: [
        ['<b>DevTools</b>', 'Dòng thời gian cho action/mutation, xem và sửa state trực tiếp, “time-travel” (quay lại trạng thái cũ)'],
        ['<b>Hot Module Replacement</b>', 'Sửa store mà không tải lại trang, giữ nguyên state'],
        ['<b>TypeScript</b>', 'Suy luận kiểu và gợi ý code (autocomplete) rất tốt, ngay cả trong JS'],
        ['<b>SSR</b>', 'Hỗ trợ render phía server đúng cách'],
        ['<b>Plugins</b>', 'Mở rộng store (ví dụ lưu localStorage)'],
        ['<b>Rất nhẹ</b>', 'Kích thước nhỏ, API gọn, không cần “mutation”']
      ] },
      { t: 'key', x: '<b>Pinia so với Vuex:</b> Pinia <b>bỏ “mutations”</b> (chỉ còn state, getters, actions), <b>không cần namespaced modules</b> (mỗi store tự nhiên là một “module” độc lập), dùng TypeScript mượt hơn và API theo kiểu Composition API. Bạn có thể ghi trực tiếp <code>store.count++</code>.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> Pinia là bản kế nhiệm của Vuex và là đề xuất chính thức của đội Vue. Pinia 3 chỉ hỗ trợ <b>Vue 3</b>. Dự án tạo bằng <code>npm create vue@latest</code> cho phép chọn thêm Pinia sẵn.' }
    ] },
    { icon: '📦', title: 'Cài đặt', blocks: [
      { t: 'steps', items: [
        'Cài: <code>npm install pinia</code> (hoặc yarn/pnpm). Nếu dùng Nuxt: cài module <code>@pinia/nuxt</code> (xem chương 8).',
        'Tạo <b>pinia instance</b> bằng <code>createPinia()</code> và cắm vào app bằng <code>app.use(pinia)</code>.',
        'Định nghĩa store bằng <code>defineStore()</code> và dùng <code>useXxxStore()</code> trong component.'
      ] },
      { t: 'p', x: P1(`// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)
app.use(pinia)            // cắm Pinia vào app
app.mount('#app')`) },
      { t: 'warn', x: '<b>Thứ tự quan trọng:</b> phải <code>app.use(pinia)</code> <b>trước</b> khi gọi <code>useXxxStore()</code>. Gọi quá sớm sẽ báo lỗi “getActivePinia() was called but there was no active Pinia”.' }
    ] },
    { icon: '🚀', title: 'Ví dụ đầu tiên: bộ đếm', blocks: [
      { t: 'p', x: P1(`// stores/counter.js
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: { double: (state) => state.count * 2 },
  actions: { increment() { this.count++ } }
})

// Trong component (<script setup>)
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
// <button @click="counter.increment()">{{ counter.count }} / {{ counter.double }}</button>`) },
      { t: 'widget', name: 'pn-store-sim', title: 'Thử store “counter”: state, getter và action trong DevTools giả lập' },
      { t: 'tip', x: '💡 Cách nhớ: <b>state = dữ liệu</b> (như <code>data</code>), <b>getters = computed</b>, <b>actions = methods</b>. Quen với Vue là dùng được ngay.' }
    ] }
  ],
  summary: [
    'Pinia là store chính thức của Vue: không có mutation, không cần module lồng, TypeScript tốt, có DevTools/HMR/SSR/plugin.',
    'Cài: createPinia() + app.use(pinia); store = defineStore(id, ...); dùng bằng useXxxStore().',
    'state = data, getters = computed, actions = methods.'
  ],
  cards: [
    ['Pinia là gì?', 'Thư viện quản lý state chính thức của Vue.'],
    ['Pinia bỏ gì so với Vuex?', 'Mutations và namespaced modules.'],
    ['Cắm Pinia vào app?', 'app.use(createPinia())'],
    ['state/getters/actions tương đương?', 'data/computed/methods.'],
    ['Lỗi “no active Pinia”?', 'Gọi useStore trước khi app.use(pinia).'],
    ['Pinia 3 hỗ trợ?', 'Chỉ Vue 3.']
  ],
  quiz: [
    { q: 'Khác biệt lớn của Pinia so với Vuex:', o: ['Không còn mutations', 'Chỉ chạy trên Vue 2', 'Không có DevTools', 'Bắt buộc namespaced'], a: 0, e: 'Chỉ còn state/getters/actions.' },
    { q: 'Hàm tạo instance Pinia:', o: ['createPinia()', 'defineStore()', 'storeToRefs()', 'createApp()'], a: 0, e: 'Rồi app.use(pinia).' },
    { q: 'Getters trong Pinia tương đương:', o: ['methods', 'computed', 'watch', 'props'], a: 1, e: 'Có cache theo phụ thuộc.' },
    { q: 'Nên dùng Pinia khi:', o: ['Chỉ 1 component dùng state', 'Nhiều component cần chia sẻ state/SSR/DevTools', 'Không dùng Vue', 'Chỉ có trang tĩnh'], a: 1, e: 'State cục bộ cứ dùng ref.' }
  ],
  match: [
    ['createPinia()', 'Tạo instance Pinia'],
    ['defineStore()', 'Định nghĩa store'],
    ['state', 'Dữ liệu của store'],
    ['getters', 'Giá trị dẫn xuất'],
    ['actions', 'Logic nghiệp vụ']
  ]
},

{
  n: 2,
  title: 'Định nghĩa store: Option store, Setup store, storeToRefs',
  intro: 'Store được tạo bằng <code>defineStore(id, ...)</code> với id <b>duy nhất</b>. Có hai cách viết (giống Options API và Composition API), và một bẫy quan trọng khi dùng: <b>không destructure store trực tiếp</b> — hãy dùng <code>storeToRefs()</code>.',
  sections: [
    { icon: '🏷️', title: 'defineStore và id', blocks: [
      { t: 'list', items: [
        'Tham số 1: <b>id</b> duy nhất (chuỗi). Pinia dùng id để nối store với DevTools.',
        'Tham số 2: <b>Options object</b> hoặc <b>Setup function</b>.',
        'Quy ước đặt tên hàm trả về: <code>use...Store</code> (<code>useUserStore</code>, <code>useCartStore</code>), đồng bộ với composable.',
        '<b>Mỗi store một file</b> (thư mục <code>stores/</code>) để bundler tách mã (code splitting) và TypeScript suy luận tốt.'
      ] }
    ] },
    { icon: '📋', title: 'Option store', blocks: [
      { t: 'p', x: P1(`export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0, name: 'Eduardo' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() { this.count++ },
  },
})`) },
      { t: 'tip', x: '💡 Giống Options API: <code>state</code> là <code>data</code>, <code>getters</code> là <code>computed</code>, <code>actions</code> là <code>methods</code>. <b>Dễ tiếp cận</b>, hợp người mới.' }
    ] },
    { icon: '⚙️', title: 'Setup store', blocks: [
      { t: 'p', x: P1(`export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)                          // → state
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)   // → getter
  function increment() { count.value++ }                // → action

  return { count, name, doubleCount, increment }   // PHẢI trả về mọi thứ muốn lộ ra
})`) },
      { t: 'table', head: ['Trong Setup store', 'Trở thành'], rows: [
        ['<code>ref()</code> / <code>reactive()</code>', '<b>state</b>'],
        ['<code>computed()</code>', '<b>getters</b>'],
        ['<code>function</code>', '<b>actions</b>']
      ] },
      { t: 'warn', x: '<b>Phải trả về TẤT CẢ state</b> của store, nếu không Pinia không nhận ra nó là state (hỏng DevTools, SSR, plugin). Do đó <b>không có state “private”</b> thực sự và đừng đánh dấu state là <code>readonly</code>. Cũng đừng trả về thứ không thuộc store như <code>route</code> hay giá trị <code>inject</code> (dùng thẳng <code>useRoute()</code> trong component).' },
      { t: 'list', items: [
        '<b>Linh hoạt hơn:</b> tạo <code>watch</code> ngay trong store, dùng bất kỳ composable nào, dùng <code>inject()</code> cho thứ provide ở cấp app (như router).',
        '<b>Đổi lại:</b> phức tạp hơn khi dùng composable cùng SSR; <code>$reset()</code> không tự có (tự viết).'
      ] }
    ] },
    { icon: '⚖️', title: 'Chọn kiểu nào?', blocks: [
      { t: 'table', head: ['', 'Option store', 'Setup store'], rows: [
        ['Dễ học', '✅ Rất dễ', 'Cần quen Composition API'],
        ['Linh hoạt (watch, composable, inject)', 'Hạn chế', '✅ Mạnh'],
        ['<code>$reset()</code>', '✅ Có sẵn', 'Phải tự viết'],
        ['Hợp với', 'Người mới, store đơn giản', 'Logic phức tạp, tái dùng composable']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> không có “đúng/sai”; chọn kiểu bạn thoải mái. Nhiều dự án chọn <b>Setup store</b> vì thống nhất với <code>&lt;script setup&gt;</code>, số khác chọn Option store cho gọn. Có thể trộn trong cùng dự án (mỗi store một kiểu).' },
      { t: 'widget', name: 'pn-syntax-pick', title: 'Ghép phần tử của Setup store với vai trò trong Option store' }
    ] },
    { icon: '🔌', title: 'Dùng store trong component', blocks: [
      { t: 'p', x: P1(`<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const store = useCounterStore()        // store chỉ được tạo khi gọi lần đầu

// ❌ MẤT phản ứng:
// const { count, doubleCount } = store

// ✅ Giữ phản ứng với storeToRefs (cho state & getters):
const { count, doubleCount } = storeToRefs(store)
// ✅ Actions thì destructure thẳng được (chúng là hàm đã bind sẵn):
const { increment } = store
</script>`) },
      { t: 'key', x: '<b><code>store</code> là một object <code>reactive</code>:</b> không cần <code>.value</code> sau getter, nhưng <b>không destructure được</b> (như <code>props</code>). Muốn tách state/getter ra biến mà vẫn phản ứng → <code>storeToRefs(store)</code> (tạo ref cho mọi thuộc tính phản ứng; <b>bỏ qua</b> action và thuộc tính không phản ứng).' },
      { t: 'widget', name: 'pn-destructure', title: 'Thử: destructure thẳng (mất phản ứng) và storeToRefs (giữ phản ứng)' },
      { t: 'list', items: [
        'Store chỉ <b>được tạo</b> khi bạn gọi <code>useStore()</code> lần đầu; sau đó dùng chung một instance (singleton theo pinia).',
        'Gọi <code>useStore()</code> trong <code>setup()</code>/<code>&lt;script setup&gt;</code> như composable. Dùng ngoài component: xem chương 6.',
        'Có thể định nghĩa bao nhiêu store tùy ý; chia theo miền (user, cart, settings).'
      ] }
    ] }
  ],
  summary: [
    'defineStore(id, options | setupFn): id duy nhất; mỗi store một file.',
    'Setup store: ref=state, computed=getter, function=action và phải return tất cả; Option store dễ học, có $reset().',
    'Không destructure store trực tiếp; dùng storeToRefs() cho state/getters, action destructure được.'
  ],
  cards: [
    ['Hai cách viết store?', 'Option store và Setup store.'],
    ['Setup store: ref là gì?', 'State.'],
    ['Phải return gì trong Setup store?', 'Tất cả state (và getters/actions muốn lộ ra).'],
    ['Destructure state giữ phản ứng?', 'storeToRefs(store)'],
    ['Destructure action?', 'Được, trực tiếp từ store.'],
    ['Store được tạo khi nào?', 'Khi gọi useStore() lần đầu.']
  ],
  quiz: [
    { q: 'Trong Setup store, computed() trở thành:', o: ['state', 'getter', 'action', 'plugin'], a: 1, e: 'ref→state, computed→getter, function→action.' },
    { q: 'Cách đúng để lấy count và doubleCount mà vẫn phản ứng:', o: ['const { count } = store', 'storeToRefs(store)', 'toRaw(store)', 'JSON.parse(store)'], a: 1, e: 'storeToRefs tạo ref.' },
    { q: 'Quy ước đặt tên hàm trả về từ defineStore:', o: ['createXxx', 'useXxxStore', 'getXxx', 'xxxStore()'], a: 1, e: 'use... như composable.' },
    { q: 'Setup store không nên:', o: ['Dùng watch', 'Quên return state', 'Dùng composable', 'Dùng computed'], a: 1, e: 'State không return sẽ không được Pinia nhận ra.' }
  ],
  match: [
    ['Option store', 'state/getters/actions dạng object'],
    ['Setup store', 'Hàm với ref/computed/function'],
    ['storeToRefs', 'Destructure giữ phản ứng'],
    ['id của store', 'Tên duy nhất, nối DevTools'],
    ['useCounterStore()', 'Lấy instance store']
  ]
},

{
  n: 3,
  title: 'State: đọc, ghi, $patch, $reset và $subscribe',
  intro: 'State là phần trung tâm của store. Nó là <b>hàm trả về trạng thái ban đầu</b> (để chạy được cả server lẫn client). Bạn đọc/ghi trực tiếp, gom nhiều thay đổi bằng <code>$patch</code>, đặt lại bằng <code>$reset</code> và theo dõi bằng <code>$subscribe</code>.',
  sections: [
    { icon: '🧱', title: 'Khai báo state', blocks: [
      { t: 'p', x: P1(`const useStore = defineStore('storeId', {
  state: () => ({
    count: 0,
    user: null,          // vẫn phải khai báo dù ban đầu là null/undefined
    items: [],
  }),
})`) },
      { t: 'list', items: [
        '<b>State là hàm</b> (<code>state: () =&gt; ({...})</code>) để mỗi pinia instance (mỗi request SSR) có một bản riêng.',
        '<b>Phải khai báo mọi thuộc tính</b> ngay từ đầu (kể cả <code>undefined</code>) để Vue phát hiện phản ứng. Không thể thêm thuộc tính mới sau này bằng <code>store.secondCount = 2</code> nếu chưa có trong <code>state()</code>.',
        '<b>TypeScript:</b> bật <code>strict</code> (hoặc ít nhất <code>noImplicitThis</code>) là Pinia tự suy luận kiểu; khi cần thì ép kiểu từng phần (<code>null as User | null</code>) hoặc khai báo <code>interface State</code>.'
      ] }
    ] },
    { icon: '✍️', title: 'Đọc và ghi', blocks: [
      { t: 'p', x: P1(`const store = useStore()
store.count++                 // ghi trực tiếp – không cần wrapper như Vuex
// <input v-model="store.name">   // gắn v-model thẳng vào state`) },
      { t: 'tip', x: '💡 Không còn “mutation” bắt buộc: <b>sửa trực tiếp state hoàn toàn hợp lệ</b> và DevTools vẫn theo dõi được. Dùng action khi muốn gom <b>logic</b>/dùng lại.' },
      { t: 'p', x: P1(`// $patch: gom nhiều thay đổi thành MỘT mục trong DevTools
store.$patch({ count: store.count + 1, name: 'DIO' })

// Dạng hàm: dành cho thao tác với mảng/tập hợp (push, splice...)
store.$patch((state) => {
  state.items.push({ name: 'shoes', quantity: 1 })
  state.hasChanged = true
})`) },
      { t: 'table', head: ['Cách', 'Dùng khi'], rows: [
        ['<code>store.count++</code>', 'Thay đổi đơn giản, một chỗ'],
        ['<code>store.$patch({...})</code>', 'Đổi <b>nhiều</b> giá trị cùng lúc, muốn một mục trong DevTools'],
        ['<code>store.$patch(fn)</code>', 'Thao tác mảng/object phức tạp (push, splice, xóa) – tránh phải tạo mảng mới'],
        ['Action', 'Logic nghiệp vụ, có thể bất đồng bộ (chương 5)']
      ] },
      { t: 'warn', x: '<b>Không thể thay cả <code>store.$state</code></b> bằng object mới (sẽ phá phản ứng). Hãy <code>$patch</code> hoặc thay từng phần. (Có thể gán <code>pinia.state.value = {...}</code> để đặt state khởi tạo của cả app – dùng trong SSR hydration.)' }
    ] },
    { icon: '♻️', title: 'Đặt lại (reset)', blocks: [
      { t: 'list', items: [
        '<b>Option store:</b> <code>store.$reset()</code> gọi lại hàm <code>state()</code> và thay thế state.',
        '<b>Setup store:</b> không có sẵn → tự viết hàm reset (ví dụ <code>function $reset() { count.value = 0 }</code>) và trả về.'
      ] }
    ] },
    { icon: '📡', title: 'Theo dõi state: $subscribe', blocks: [
      { t: 'p', x: P1(`store.$subscribe((mutation, state) => {
  // mutation.type: 'direct' | 'patch object' | 'patch function'
  // mutation.storeId, mutation.payload (khi là patch object)
  localStorage.setItem('cart', JSON.stringify(state))
})`) },
      { t: 'list', items: [
        '<b>Khác <code>watch()</code> thường:</b> subscription chỉ chạy <b>một lần sau mỗi $patch</b> (dù patch đổi nhiều thuộc tính).',
        '<b>Flush:</b> dùng <code>watch</code> bên dưới nên nhận các tuỳ chọn như <code>{ flush: \'sync\' }</code> để chạy ngay sau từng thay đổi.',
        '<b>Tự gỡ khi component hủy</b> (nếu đăng ký trong setup). Muốn giữ sau đó: <code>{ detached: true }</code>.',
        'Theo dõi toàn bộ state của app: <code>watch(pinia.state, ..., { deep: true })</code>.'
      ] },
      { t: 'widget', name: 'pn-subscribe', title: 'So sánh: nhiều lần ghi trực tiếp vs một $patch và số lần $subscribe chạy' }
    ] },
    { icon: '🧩', title: 'Dùng state với Options API (map helpers)', blocks: [
      { t: 'list', items: [
        '<code>mapState(useStore, [\'count\'])</code> → thuộc tính <b>chỉ đọc</b> (computed) trong component.',
        '<code>mapWritableState(useStore, [\'count\'])</code> → cho phép <b>ghi</b> (như bind với form). Không cần cho mảng nếu chỉ gọi phương thức của mảng.',
        '<code>mapStores(useA, useB)</code> → thêm <code>this.aStore</code>, <code>this.bStore</code> (đặt tên theo id + hậu tố <code>Store</code>).',
        'Chỉ cần khi <b>không</b> dùng <code>&lt;script setup&gt;</code>; với Composition API chỉ cần <code>useStore()</code>.'
      ] }
    ] }
  ],
  summary: [
    'State là hàm trả về giá trị ban đầu; khai báo đủ thuộc tính; đọc/ghi trực tiếp.',
    '$patch gom nhiều thay đổi (object hoặc hàm), $reset (có sẵn ở Option store), $subscribe theo dõi và chạy một lần sau patch.',
    'Không thay cả $state; dùng $patch; Options API có mapState/mapWritableState/mapStores.'
  ],
  cards: [
    ['State khai báo thế nào?', 'state: () => ({ ... }) – hàm trả về object.'],
    ['Thêm thuộc tính mới sau?', 'Không – phải khai báo ban đầu.'],
    ['Gom nhiều thay đổi?', '$patch'],
    ['$patch dạng hàm dùng khi?', 'Thao tác mảng/collection.'],
    ['Reset state?', '$reset() (Option store); tự viết với Setup store.'],
    ['Theo dõi thay đổi?', '$subscribe']
  ],
  quiz: [
    { q: 'Vì sao state là một hàm?', o: ['Để tránh chia sẻ state giữa các request/instance (SSR)', 'Để chạy nhanh hơn', 'Bắt buộc bởi TypeScript', 'Để dùng được watch'], a: 0, e: 'Mỗi pinia có bản state riêng.' },
    { q: '$subscribe khác watch thường ở:', o: ['Chạy một lần sau mỗi $patch', 'Không theo dõi được state', 'Chạy trước khi state đổi', 'Chỉ dùng cho getters'], a: 0, e: 'Gom theo patch.' },
    { q: 'Setup store muốn reset state thì:', o: ['Gọi $reset() có sẵn', 'Tự viết hàm reset và return', 'Không thể', 'Dùng mapState'], a: 1, e: 'Setup store không có $reset tự động.' },
    { q: 'Thay hoàn toàn store.$state = {...}:', o: ['Nên làm', 'Phá phản ứng, nên $patch', 'Chỉ lỗi ở SSR', 'Được khuyến nghị'], a: 1, e: 'Dùng $patch.' }
  ],
  match: [
    ['$patch', 'Gom nhiều thay đổi'],
    ['$reset', 'Về state ban đầu'],
    ['$subscribe', 'Theo dõi state'],
    ['mapState', 'Chỉ đọc cho Options API'],
    ['mapWritableState', 'Cho phép ghi từ Options API']
  ]
}
);
