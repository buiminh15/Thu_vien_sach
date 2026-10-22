// Pinia – Chương 4–6: getters, actions, store ngoài component / ghép store / composable.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.piniaguide = BOOK_DATA.piniaguide || { chapters: [] };
const P2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.piniaguide.chapters.push(

{
  n: 4,
  title: 'Getters: giá trị dẫn xuất của store',
  intro: 'Getter là <b>computed</b> của store: tính từ state, có cache, tự cập nhật. Chương này: viết getter, dùng getter khác qua <code>this</code>, getter nhận tham số (và cái giá của nó), getter dùng store khác.',
  sections: [
    { icon: '🧮', title: 'Getter cơ bản', blocks: [
      { t: 'p', x: P2(`export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    doubleCount: (state) => state.count * 2,           // nhận state làm tham số đầu
    doublePlusOne() { return this.doubleCount + 1 },    // dùng this để gọi getter khác
  },
})
// Dùng: store.doubleCount (không cần .value, không cần gọi hàm)`) },
      { t: 'tip', x: '💡 Giống ô công thức trong Excel: <b>nhớ kết quả</b>, chỉ tính lại khi state phụ thuộc đổi. Getter là <b>computed</b> “ẩn” bên dưới.' },
      { t: 'list', items: [
        'Nên dùng <b>arrow function với tham số <code>state</code></b> khi chỉ phụ thuộc state (gọn và suy luận kiểu tốt).',
        'Cần getter khác/toàn bộ store → dùng hàm thường và <code>this</code>; với <b>TypeScript phải ghi kiểu trả về</b> cho getter đó (giới hạn suy luận đã biết).',
        'Trong <b>Setup store</b>, getter chính là <code>computed()</code>.',
        'Giống computed: <b>getter nên thuần</b> (không tác dụng phụ, không async).'
      ] }
    ] },
    { icon: '🎯', title: 'Getter nhận tham số', blocks: [
      { t: 'p', x: P2(`getters: {
  getUserById: (state) => {
    return (userId) => state.users.find((user) => user.id === userId)  // trả về HÀM
  },
}
// Dùng: store.getUserById(2)`) },
      { t: 'warn', x: '<b>Cái giá:</b> getter trả về hàm <b>không còn được cache</b> theo tham số; nó chỉ là hàm bạn gọi mỗi lần. Vẫn dùng được (và vẫn phản ứng), nhưng nếu tính toán nặng, tự cache kết quả bên trong hoặc cân nhắc dùng computed ở component.' },
      { t: 'widget', name: 'pn-getter-cache', title: 'Đếm số lần tính: getter thường (có cache) vs getter trả về hàm' }
    ] },
    { icon: '🤝', title: 'Dùng getter của store khác', blocks: [
      { t: 'p', x: P2(`import { useOtherStore } from './other-store'
getters: {
  summary(state) {
    const other = useOtherStore()          // gọi useStore ngay trong getter
    return state.name + ' / ' + other.data
  },
}`) },
      { t: 'list', items: [
        'Cứ <b>gọi <code>useOtherStore()</code> bên trong getter</b>; Pinia lo việc tìm đúng instance.',
        'Truy cập getter như một <b>thuộc tính</b> của store, kể cả trong component với <code>&lt;script setup&gt;</code>.',
        'Options API: <code>mapState(useStore, [\'doubleCount\'])</code> map cả state lẫn getters; hoặc dùng <code>setup()</code> trả về store.'
      ] }
    ] }
  ],
  summary: [
    'Getter = computed của store: nhận state, dùng this để gọi getter khác (TS cần ghi kiểu trả về).',
    'Getter trả về hàm để nhận tham số nhưng mất cache.',
    'Dùng store khác ngay trong getter bằng useOtherStore().'
  ],
  cards: [
    ['Getter là gì?', 'Computed của store.'],
    ['Getter gọi getter khác?', 'Dùng this (TS: ghi kiểu trả về).'],
    ['Getter có tham số?', 'Trả về một hàm – nhưng không cache.'],
    ['Trong Setup store getter là?', 'computed()'],
    ['Dùng store khác trong getter?', 'Gọi useOtherStore() bên trong.'],
    ['Getter nên?', 'Thuần, không async/tác dụng phụ.']
  ],
  quiz: [
    { q: 'Getter trả về hàm có cache không?', o: ['Có, theo tham số', 'Không – là hàm gọi mỗi lần', 'Chỉ khi dùng $patch', 'Chỉ trong SSR'], a: 1, e: 'Vì chỉ computed trả hàm.' },
    { q: 'Để getter A dùng getter B trong Option store:', o: ['Dùng this (hàm thường)', 'Dùng arrow function và this', 'Không thể', 'Chỉ dùng được trong action'], a: 0, e: 'Arrow function không có this của store.' },
    { q: 'Getter trong Setup store là:', o: ['ref()', 'computed()', 'function', 'watch()'], a: 1, e: 'computed → getter.' },
    { q: 'Getter bất đồng bộ (async) có hợp lệ không?', o: ['Có', 'Không – dùng action cho async', 'Chỉ trong Nuxt', 'Chỉ khi có $patch'], a: 1, e: 'Getter phải đồng bộ và thuần.' }
  ],
  match: [
    ['getters', 'computed của store'],
    ['this trong getter', 'Truy cập getter khác/store'],
    ['Getter trả về hàm', 'Nhận tham số (mất cache)'],
    ['mapState', 'Lấy state/getter cho Options API'],
    ['useOtherStore()', 'Dùng store khác trong getter']
  ]
},

{
  n: 5,
  title: 'Actions: logic nghiệp vụ và theo dõi action',
  intro: 'Action là <b>methods</b> của store: nơi đặt logic nghiệp vụ, gọi API (có thể <code>async</code>), và gọi action/store khác. Bạn cũng có thể “nghe lén” mọi action bằng <code>$onAction</code> (ví dụ log, đo thời gian, bắt lỗi).',
  sections: [
    { icon: '⚡', title: 'Định nghĩa và gọi action', blocks: [
      { t: 'p', x: P2(`export const useUsers = defineStore('users', {
  state: () => ({ userData: null }),
  actions: {
    async registerUser(login, password) {
      try {
        this.userData = await api.post({ login, password })   // async + this
      } catch (error) {
        return error                                           // tự xử lý lỗi
      }
    },
  },
})
// Dùng: await store.registerUser('an', '123')`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> state là <b>kho hàng</b>, getter là <b>báo cáo tồn kho</b>, còn action là <b>nhân viên</b> làm việc: đi lấy hàng từ nhà cung cấp (gọi API), cất vào kho (cập nhật state).' },
      { t: 'list', items: [
        'Action nhận <b>tham số tùy ý</b> và trả về bất kỳ giá trị nào; kiểu dữ liệu được suy luận đầy đủ.',
        '<b>Khác getter:</b> action <b>được phép bất đồng bộ</b> và có tác dụng phụ; có thể <code>await</code> API hoặc action khác.',
        '<code>this</code> trỏ tới toàn bộ store (state, getters, action khác). Với Setup store: là hàm thường trong closure (không cần <code>this</code>).',
        'Action được <b>bind sẵn</b> vào store nên destructure ra gọi vẫn đúng: <code>const { increment } = store</code>.'
      ] }
    ] },
    { icon: '🔗', title: 'Gọi action của store khác', blocks: [
      { t: 'p', x: P2(`import { useAuthStore } from './auth-store'
actions: {
  async fetchPreferences() {
    const auth = useAuthStore()               // gọi useStore bên trong action
    if (auth.isAuthenticated) {
      this.preferences = await fetchPreferences()
    } else {
      throw new Error('Cần đăng nhập!')
    }
  },
}`) },
      { t: 'warn', x: '<b>Trong SSR:</b> đặt <b>mọi lời gọi <code>useStore()</code> trước bất kỳ <code>await</code> nào</b> trong action, nếu không có thể dùng nhầm pinia instance của request khác (xem chương 6, 8).' }
    ] },
    { icon: '🧩', title: 'Dùng action với Options API', blocks: [
      { t: 'list', items: [
        '<b>Với <code>setup()</code>:</b> trả về store từ <code>setup()</code> rồi dùng <code>this.counterStore.increment()</code>.',
        '<b>Không dùng <code>setup()</code>:</b> <code>mapActions(useCounterStore, [\'increment\'])</code> để thành methods, hoặc đổi tên bằng object <code>{ myIncrement: \'increment\' }</code>.',
        'Chỉ là bước tạm khi <b>di chuyển</b> sang Composition API; trong dự án mới hãy dùng <code>&lt;script setup&gt;</code>.'
      ] }
    ] },
    { icon: '👂', title: 'Theo dõi action: $onAction', blocks: [
      { t: 'p', x: P2(`const unsubscribe = someStore.$onAction(
  ({ name, store, args, after, onError }) => {
    const start = Date.now()
    console.log('Bắt đầu', name, 'với', args)       // chạy TRƯỚC action

    after((result) => {                              // sau khi action xong (kể cả promise resolve)
      console.log('Xong', name, Date.now() - start, 'ms →', result)
    })
    onError((error) => {                             // khi action ném lỗi / reject
      console.warn('Lỗi trong', name, error)
    })
  }
)
unsubscribe()   // gỡ đăng ký bằng tay`) },
      { t: 'widget', name: 'pn-onaction', title: 'Gọi action thành công/thất bại và xem log before / after / onError' },
      { t: 'list', items: [
        'Callback nhận <code>name</code> (tên action), <code>store</code>, <code>args</code> (mảng đối số), và hai hook <code>after</code>/<code>onError</code>.',
        'Callback chạy <b>trước</b> action; <code>after</code> xử lý cả Promise (chờ resolve). Rất hợp để <b>log, đo hiệu năng, theo dõi lỗi, đồng bộ localStorage</b>.',
        '<b>Tự gỡ</b> khi component (nơi đăng ký trong setup) bị hủy; muốn giữ: truyền <code>true</code> làm tham số thứ hai (<code>detached</code>).'
      ] }
    ] }
  ],
  summary: [
    'Action = methods: async được, có tác dụng phụ, gọi store/action khác; đặt logic nghiệp vụ ở đây.',
    'Trong SSR, gọi useStore() trước mọi await trong action.',
    '$onAction nghe trước/sau/lỗi của mọi action (log, đo, giám sát).'
  ],
  cards: [
    ['Action khác getter?', 'Action được async và có tác dụng phụ.'],
    ['Action destructure được?', 'Được, đã bind sẵn.'],
    ['Gọi store khác trong action?', 'useOtherStore() bên trong action.'],
    ['Nghe mọi action?', 'store.$onAction()'],
    ['Hook sau action?', 'after(result)'],
    ['Bắt lỗi action?', 'onError(error)']
  ],
  quiz: [
    { q: 'Nơi thích hợp để gọi API trong Pinia là:', o: ['Getter', 'Action', 'state()', 'mapState'], a: 1, e: 'Action có thể async và có tác dụng phụ.' },
    { q: 'Callback của $onAction chạy khi nào?', o: ['Sau action', 'Trước khi action thực thi', 'Chỉ khi lỗi', 'Chỉ lần đầu'], a: 1, e: 'Dùng after/onError cho phần sau.' },
    { q: 'Cần chạy mã sau khi action (async) hoàn tất, dùng:', o: ['after()', 'onBeforeMount', 'watch', 'getter'], a: 0, e: 'after xử lý cả promise.' },
    { q: 'Lý do đặt useStore() trước await trong SSR:', o: ['Nhanh hơn', 'Tránh dùng nhầm pinia instance', 'Bắt buộc bởi TypeScript', 'Không có lý do'], a: 1, e: 'Sau await mất ngữ cảnh instance.' }
  ],
  match: [
    ['actions', 'Methods của store'],
    ['$onAction', 'Theo dõi action'],
    ['after()', 'Chạy sau khi action xong'],
    ['onError()', 'Bắt lỗi action'],
    ['mapActions', 'Action cho Options API']
  ]
},

{
  n: 6,
  title: 'Store ngoài component, ghép store và dùng composable',
  intro: 'Store không chỉ dùng trong component: bạn gọi nó trong router guard, interceptor, file tiện ích… Cần hiểu <b>vì sao</b> <code>useStore()</code> cần pinia instance, cách <b>ghép các store</b> mà không tạo vòng lặp, và cách dùng <b>composable</b> trong store.',
  sections: [
    { icon: '🏠', title: 'Dùng store ngoài component', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>useStore()</code> “tiêm” (inject) pinia instance bạn đã cắm vào app. Ngoài component, Pinia không tự biết “pinia nào” → bạn phải chắc rằng gọi <b>sau khi</b> pinia đã sẵn sàng hoặc <b>đưa pinia vào tay</b>.' },
      { t: 'table', head: ['Loại app', 'Cách dùng'], rows: [
        ['<b>SPA</b> (không SSR)', 'Mọi lời gọi <code>useStore()</code> sau <code>app.use(pinia)</code> đều ổn. Cách an toàn: <b>trì hoãn</b> gọi vào bên trong hàm sẽ chạy muộn (như navigation guard)'],
        ['<b>SSR</b>', '<b>Phải truyền pinia</b>: <code>useStore(pinia)</code> để không chia sẻ state giữa các request/app instance']
      ] },
      { t: 'p', x: P2(`// SPA: dùng trong router guard (gọi BÊN TRONG hàm guard, không ở cấp module)
router.beforeEach((to) => {
  const main = useMainStore()
  if (to.meta.requiresAuth && !main.isLoggedIn) return '/login'
})

// ❌ Sai: gọi ở cấp module khi pinia chưa được cài
// const store = useMainStore()   // lỗi: no active Pinia`) },
      { t: 'warn', x: 'Trong <b>SPA</b>, một sai lầm thường gặp là gọi <code>useStore()</code> ngay ở cấp trên cùng của file (chạy lúc import) → lỗi vì chưa <code>app.use(pinia)</code>. Hãy gọi trong hàm chạy muộn.' }
    ] },
    { icon: '🧱', title: 'Ghép store (composing stores)', blocks: [
      { t: 'p', x: P2(`// Setup store: dùng store khác ở ĐẦU hàm
export const useCartStore = defineStore('cart', () => {
  const user = useUserStore()
  const list = ref([])
  const summary = computed(() => \`\${user.name}: \${list.value.length} món\`)
  return { list, summary }
})

// Option store: gọi bên trong getter/action
getters: { summary() { return useUserStore().name + '...' } }`) },
      { t: 'key', x: '<b>Quy tắc duy nhất:</b> hai (hoặc nhiều) store dùng lẫn nhau <b>không được tạo vòng lặp</b> qua getters/actions, và <b>không được cùng đọc trực tiếp state của nhau ngay trong setup</b>. Nếu cần, đọc state của store kia <b>trong getter hoặc action</b> (lúc chạy muộn), không phải lúc khởi tạo.' },
      { t: 'list', items: [
        '<b>Shared getters/actions:</b> gọi <code>useUserStore()</code> bên trong getter/action; tránh lặp code.',
        'Nhớ quy tắc SSR: <b>mọi <code>useStore()</code> phải đứng trước <code>await</code></b> trong action.'
      ] }
    ] },
    { icon: '🧰', title: 'Dùng composable trong store', blocks: [
      { t: 'table', head: ['', 'Option store', 'Setup store'], rows: [
        ['Cách gọi', 'Trong <code>state()</code>: <code>state: () =&gt; ({ n: useLocalStorage(\'n\', 0) })</code>', 'Gọi tự do trong hàm setup'],
        ['Giới hạn', 'Chỉ trả về được <b>state ghi được</b> (ref)', 'Hầu như <b>mọi</b> composable (Pinia tự phân loại state/getter/action)'],
        ['Ví dụ dùng được', 'useLocalStorage, useAsyncState (VueUse)', 'Thêm: useMediaControls, useMemory, useEyeDropper…']
      ] },
      { t: 'warn', x: '<b>SSR + composable:</b> composable dùng API trình duyệt (<code>window</code>, <code>localStorage</code>) cần xử lý riêng cho server; nên đọc kỹ hướng dẫn và thử trước khi đưa vào store có SSR.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> bộ composable <b>VueUse</b> rất hợp với Setup store: ví dụ <code>useLocalStorage</code> giúp lưu state vào trình duyệt gọn hơn tự viết plugin (xem chương 7 cho giải pháp qua plugin).' },
      { t: 'widget', name: 'pn-pick', title: 'Luyện chọn đúng công cụ Pinia cho từng tình huống' }
    ] }
  ],
  summary: [
    'SPA: gọi useStore() sau app.use(pinia) (trong hàm chạy muộn); SSR: truyền pinia vào useStore(pinia).',
    'Ghép store: gọi useOther() ở đầu Setup store hoặc trong getter/action; đừng tạo vòng lặp đọc state lẫn nhau lúc khởi tạo.',
    'Composable: Option store chỉ dùng loại trả state ghi được; Setup store dùng gần như mọi composable.'
  ],
  cards: [
    ['Vì sao useStore() ngoài component dễ lỗi?', 'Cần pinia instance đã cài.'],
    ['SSR ngoài component?', 'useStore(pinia).'],
    ['Store dùng lẫn nhau cấm gì?', 'Vòng lặp và đọc state nhau trong setup.'],
    ['Option store + composable?', 'Chỉ state ghi được, gọi trong state().'],
    ['Setup store + composable?', 'Gần như mọi composable.'],
    ['VueUse dùng làm gì ở đây?', 'Composable sẵn (vd useLocalStorage).']
  ],
  quiz: [
    { q: 'Gọi useStore() ở cấp module (khi file được import, trước app.use(pinia)):', o: ['Luôn ổn', 'Lỗi vì chưa có pinia active', 'Chỉ lỗi ở production', 'Tự tạo pinia'], a: 1, e: 'Gọi trong hàm chạy muộn.' },
    { q: 'Trong SSR, dùng store ngoài component bạn cần:', o: ['Không cần gì', 'Truyền pinia: useStore(pinia)', 'Tắt SSR', 'Dùng mapState'], a: 1, e: 'Tránh chia sẻ global state.' },
    { q: 'Ghép store: điều nên tránh', o: ['Gọi store khác trong getter', 'Hai store đọc trực tiếp state của nhau ngay trong setup', 'Dùng store khác trong action', 'Gọi store ở đầu Setup store'], a: 1, e: 'Gây vòng lặp.' },
    { q: 'Option store dùng composable thế nào?', o: ['Gọi trong state() và trả ref ghi được', 'Gọi trong getters', 'Không dùng được', 'Gọi ngoài file'], a: 0, e: 'Chỉ state ghi được.' }
  ],
  match: [
    ['useStore(pinia)', 'Dùng store ngoài component khi SSR'],
    ['Router guard', 'Gọi useStore() bên trong hàm'],
    ['Ghép store', 'Dùng store trong store'],
    ['useLocalStorage', 'Composable VueUse hợp với store'],
    ['Setup store', 'Dùng được hầu hết composable']
  ]
}
);
