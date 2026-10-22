// Vue 3 Guide (vuejs.org/guide) – bản tiếng Việt dễ hiểu – Chương 1–3 (Composition API + <script setup> là chính).
// Khối "📚 Bổ sung ngoài tài liệu" = giải thích thêm để dễ hiểu (không nằm trong trang docs).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vue3guide = BOOK_DATA.vue3guide || { chapters: [] };
const V1 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vue3guide.chapters.push(

{
  n: 1,
  title: 'Vue là gì? Bắt đầu nhanh, ứng dụng và SFC',
  intro: 'Vue là framework JavaScript để dựng giao diện, xây trên HTML/CSS/JS chuẩn. Hai ý cốt lõi: <b>render khai báo</b> (bạn mô tả giao diện theo dữ liệu) và <b>reactivity</b> (dữ liệu đổi thì giao diện tự cập nhật). Chương này: Vue có thể dùng theo những cách nào, tạo dự án đầu tiên, file .vue (SFC), hai kiểu API.',
  sections: [
    { icon: '🧭', title: 'Hai ý cốt lõi của Vue', blocks: [
      { t: 'p', x: V1(`<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button @click="count++">Đã bấm: {{ count }}</button>
</template>`) },
      { t: 'list', items: [
        '<b>Render khai báo (declarative rendering):</b> template mở rộng HTML; bạn <i>mô tả</i> “giao diện trông thế nào khi dữ liệu là X”, không tự tay sửa DOM từng bước.',
        '<b>Reactivity (phản ứng):</b> Vue theo dõi state JavaScript; khi state đổi, nó cập nhật DOM một cách hiệu quả.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> giống bảng tính Excel. Ô <code>C1 = A1 + B1</code>: bạn đổi A1 thì C1 tự đổi, không cần bấm “tính lại”. Vue làm điều đó cho giao diện web: bạn đổi biến, màn hình tự đổi theo.' }
    ] },
    { icon: '🧰', title: 'Framework “tiến dần” (progressive)', blocks: [
      { t: 'p', x: 'Vue được thiết kế linh hoạt và <b>áp dụng dần dần</b>. Cùng một kiến thức lõi dùng được cho nhiều cách:' },
      { t: 'table', head: ['Cách dùng', 'Khi nào hợp'], rows: [
        ['Thêm vào HTML tĩnh, <b>không cần bước build</b>', 'Trang có sẵn, chỉ cần vài chỗ tương tác (nạp Vue từ CDN)'],
        ['Nhúng thành <b>Web Components</b>', 'Chèn vào bất kỳ trang/framework nào'],
        ['<b>SPA</b> (Single-Page Application)', 'Ứng dụng web thuần phía client, đổi “trang” không tải lại'],
        ['<b>Full-stack / SSR</b>', 'Server render HTML trước (SEO, tải nhanh) – ví dụ dùng Nuxt'],
        ['<b>SSG / Jamstack</b>', 'Sinh sẵn trang tĩnh lúc build'],
        ['Desktop, mobile, WebGL, terminal', 'Vue có thể nhắm tới nhiều nền tảng']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> <b>SPA</b> = “một trang HTML duy nhất, JavaScript vẽ và thay nội dung” (giống app điện thoại). <b>SSR</b> = server gửi về HTML đã có nội dung. <b>SSG</b> = như SSR nhưng làm sẵn một lần lúc build. Tài liệu Nuxt trong thư viện này đi sâu vào hướng full-stack.' }
    ] },
    { icon: '📄', title: 'Single-File Component (SFC – file .vue)', blocks: [
      { t: 'p', x: 'Khi có công cụ build, ta viết component trong file <code>.vue</code>: gói <b>logic (JS)</b>, <b>template (HTML)</b> và <b>style (CSS)</b> vào một file. Đây là cách khuyến nghị nếu bạn có bước build.' },
      { t: 'p', x: V1(`<script setup>   // logic
  ...
</script>
<template>       // giao diện
  ...
</template>
<style scoped>   // CSS chỉ áp cho component này
  ...
</style>`) },
      { t: 'tip', x: '💡 Nói dễ hiểu: một “viên gạch LEGO” gồm đủ ruột, vỏ và màu sơn – lấy ra là dùng được, không phải tìm ba file rời.' }
    ] },
    { icon: '🔀', title: 'Hai kiểu API: Options và Composition', blocks: [
      { t: 'table', head: ['', 'Options API', 'Composition API'], rows: [
        ['Cách viết', 'Object các “option”: <code>data</code>, <code>methods</code>, <code>mounted</code>… truy cập qua <code>this</code>', 'Hàm API import từ <code>vue</code> (<code>ref</code>, <code>computed</code>, <code>watch</code>…); thường dùng <code>&lt;script setup&gt;</code>'],
        ['Tư duy', 'Hướng “instance component” (quen với OOP)', 'State khai báo ngay trong phạm vi hàm, ghép nhiều hàm lại với nhau'],
        ['Ưu', 'Dễ cho người mới, tổ chức code theo nhóm option', 'Linh hoạt, tái dùng logic mạnh (composable), TypeScript tốt'],
        ['Cần hiểu', 'Ít chi tiết reactivity', 'Phải hiểu cách reactivity hoạt động']
      ] },
      { t: 'key', x: 'Hai kiểu chạy trên <b>cùng một hệ thống bên dưới</b> (Options API được cài đặt trên Composition API). Khái niệm cốt lõi dùng chung. Khuyến nghị: học kiểu nào bạn thấy dễ; làm ứng dụng đầy đủ thì dùng <b>Composition API + SFC</b>; không có build tool/ chỉ cải tiến trang tĩnh thì Options API cũng hợp.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này viết ví dụ theo <code>&lt;script setup&gt;</code> (Composition API) vì đó là hướng dự án mới. Nếu bạn đang đọc code cũ dùng <code>this.count</code> và <code>data()</code> thì đó là Options API – cùng khái niệm, khác cách viết.' }
    ] },
    { icon: '🚀', title: 'Tạo dự án đầu tiên', blocks: [
      { t: 'steps', items: [
        'Cài <b>Node.js</b> bản mới (tài liệu hiện yêu cầu <code>^22.18.0 || &gt;=24.12.0</code>).',
        'Chạy công cụ dựng khung chính thức: <code>npm create vue@latest</code> (chính là <b>create-vue</b>, dựa trên <b>Vite</b>).',
        'Trả lời các câu hỏi tùy chọn: TypeScript? JSX? <b>Vue Router</b>? <b>Pinia</b>? Vitest? E2E? ESLint? Prettier? Nếu chưa chắc cứ chọn <b>No</b> (Enter).',
        'Vào thư mục dự án, <code>npm install</code> rồi <code>npm run dev</code> để chạy dev server.',
        'Khi muốn đưa lên mạng: <code>npm run build</code> → thư mục <code>./dist</code> sẵn sàng deploy.'
      ] },
      { t: 'list', items: [
        'Editor khuyên dùng: <b>VS Code + extension “Vue - Official”</b>.',
        'Dự án mẫu viết bằng Composition API + <code>&lt;script setup&gt;</code>.',
        'Chỉ thử nhanh? Dùng <b>Playground</b> (play.vuejs.org) hoặc StackBlitz, không cần cài gì.',
        '<b>Dùng từ CDN</b> (không build): nạp <code>vue.global.js</code> bằng thẻ script, dùng đối tượng toàn cục <code>Vue</code> (<code>const { createApp, ref } = Vue</code>); không dùng được cú pháp SFC.'
      ] }
    ] },
    { icon: '🏗️', title: 'Ứng dụng (application instance) và component gốc', blocks: [
      { t: 'p', x: V1(`import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)   // App là component gốc (root component)
app.mount('#app')            // gắn vào <div id="app"></div>`) },
      { t: 'list', items: [
        '<b><code>createApp</code></b> tạo ứng dụng; mọi ứng dụng cần một <b>component gốc</b>, các component khác là con của nó (cây component).',
        '<b><code>app.mount()</code></b> phải gọi <b>sau cùng</b> sau khi cấu hình xong; trả về instance của component gốc, <b>không</b> trả về app.',
        '<b>Cấu hình toàn app</b> qua <code>app.config</code>, ví dụ <code>app.config.errorHandler</code> (bắt lỗi từ mọi component).',
        'Đăng ký thứ dùng chung: <code>app.component(...)</code> (component toàn cục), <code>app.use(plugin)</code>, <code>app.provide(key, value)</code> (xem chương 7).',
        'Có thể có <b>nhiều app</b> trên cùng một trang, mỗi app có phạm vi riêng (hữu ích khi nhúng Vue vào trang server-render sẵn).',
        'Trong HTML có sẵn (không build), root component có thể dùng template ngay trong DOM; khi đó nhớ các giới hạn của trình duyệt khi parse (xem chương 5).'
      ] }
    ] }
  ],
  summary: [
    'Vue = render khai báo + reactivity; framework “tiến dần”, từ vài dòng trên trang tĩnh đến ứng dụng full-stack.',
    'File .vue (SFC) gói script + template + style; hai kiểu API (Options/Composition) cùng nền, chọn theo nhu cầu.',
    'Dự án mới: <code>npm create vue@latest</code> → dev → build ra <code>dist</code>; <code>createApp(App).mount(...)</code> là cửa vào.'
  ],
  cards: [
    ['Vue giải quyết việc gì?', 'Giao diện tự cập nhật khi dữ liệu đổi (khai báo + reactivity).'],
    ['SFC là gì?', 'File .vue chứa script, template, style của một component.'],
    ['Options vs Composition?', 'Cùng nền; Composition linh hoạt, tái dùng logic tốt hơn.'],
    ['Lệnh tạo dự án?', 'npm create vue@latest (create-vue + Vite).'],
    ['Gắn app vào trang?', 'createApp(App).mount("#app") – gọi mount sau cùng.']
  ],
  quiz: [
    { q: 'Hai tính năng cốt lõi của Vue là:', o: ['Render khai báo và reactivity', 'Chỉ có routing và state', 'Chỉ có SSR và SSG', 'Chỉ có animation'], a: 0, e: 'Template khai báo + tự cập nhật khi state đổi.' },
    { q: 'Quan hệ giữa Options API và Composition API:', o: ['Hai hệ thống hoàn toàn khác nhau', 'Options API được xây trên Composition API', 'Composition API bị khai tử', 'Options API chỉ dùng cho Vue 2'], a: 1, e: 'Cùng hệ thống bên dưới.' },
    { q: 'Khi nào gọi app.mount()?', o: ['Ngay đầu, trước khi cấu hình', 'Sau khi đã cấu hình xong (plugin, config…)', 'Không cần gọi', 'Trước createApp'], a: 1, e: 'mount nên là bước cuối.' },
    { q: 'Dùng Vue từ CDN thì không dùng được:', o: ['ref', 'Cú pháp SFC (.vue)', 'Template', 'Component'], a: 1, e: 'SFC cần công cụ build.' }
  ],
  match: [
    ['create-vue', 'Công cụ dựng dự án chính thức'],
    ['Vite', 'Build tool nền của dự án mới'],
    ['SFC', 'File .vue'],
    ['app.config', 'Cấu hình toàn ứng dụng'],
    ['Component gốc', 'Gốc của cây component']
  ]
},

{
  n: 2,
  title: 'Template, reactivity cơ bản và computed',
  intro: 'Đây là “trái tim” của Vue: cú pháp template (nội suy, directive), khai báo state phản ứng bằng <code>ref</code>/<code>reactive</code>, và <code>computed</code> để tính giá trị dẫn xuất có cache.',
  sections: [
    { icon: '📝', title: 'Cú pháp template', blocks: [
      { t: 'p', x: 'Template Vue là HTML hợp lệ, được biên dịch thành code JavaScript tạo DOM ảo. Mọi template có thể dùng <b>biểu thức JavaScript</b> trong ngoặc kép hoặc <code>{{ }}</code>.' },
      { t: 'table', head: ['Cú pháp', 'Công dụng', 'Ghi chú'], rows: [
        ['<code>{{ msg }}</code>', 'Nội suy văn bản', 'Tự escape HTML (an toàn)'],
        ['<code>v-html="raw"</code>', 'Chèn <b>HTML thô</b>', '⚠ Dễ gây XSS nếu nội dung từ người dùng – chỉ dùng với nội dung tin cậy'],
        ['<code>:id="dynamicId"</code> (viết tắt của <code>v-bind:id</code>)', 'Gắn thuộc tính theo dữ liệu', 'Viết tắt cùng tên: <code>:id</code> = <code>:id="id"</code> (Vue 3.4+)'],
        ['<code>:disabled="isBusy"</code>', 'Thuộc tính boolean', 'Giá trị falsy thì bỏ thuộc tính'],
        ['<code>v-bind="objectOfAttrs"</code>', 'Gắn nhiều thuộc tính từ một object', ''],
        ['<code>@click="fn"</code> (= <code>v-on:click</code>)', 'Lắng nghe sự kiện', 'Xem chương 3'],
        ['<code>:[attrName]="v"</code>', 'Tham số động', 'Biểu thức phải gọn, tên chữ thường']
      ] },
      { t: 'list', items: [
        '<b>Chỉ biểu thức, không phải câu lệnh:</b> <code>{{ ok ? "Có" : "Không" }}</code> được; <code>{{ var a = 1 }}</code>, <code>if</code> thì không (dùng toán tử 3 ngôi).',
        'Có thể gọi hàm trong template, nhưng hàm đó <b>không nên có tác dụng phụ</b> (đổi dữ liệu, gọi API) vì chạy mỗi lần render lại.',
        '<b>Truy cập toàn cục bị hạn chế:</b> template chỉ thấy một danh sách an toàn (như <code>Math</code>, <code>Date</code>). Muốn dùng thứ khác, đưa vào state hoặc <code>app.config.globalProperties</code>.',
        '<b>Directive</b> là thuộc tính đặc biệt bắt đầu bằng <code>v-</code> (<code>v-if</code>, <code>v-for</code>, <code>v-model</code>…), giá trị là biểu thức. Cú pháp tổng quát: <code>v-tên:tham-số.modifier="giá trị"</code>, ví dụ <code>@submit.prevent="onSubmit"</code>.'
      ] }
    ] },
    { icon: '🔄', title: 'State phản ứng: ref()', blocks: [
      { t: 'p', x: V1(`<script setup>
import { ref } from 'vue'
const count = ref(0)

function increment() {
  count.value++        // trong JS: dùng .value
}
</script>

<template>
  <button @click="increment">{{ count }}</button>   <!-- trong template: KHÔNG cần .value -->
</template>`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>ref(0)</code> là cái <b>hộp trong suốt</b> chứa số 0, có dán nhãn “.value”. Vue canh chừng cái hộp: ai mở/sửa <code>.value</code> thì Vue biết, từ đó cập nhật giao diện. Trong template Vue tự mở hộp giúp bạn nên không cần viết <code>.value</code>.' },
      { t: 'list', items: [
        '<b>Vì sao cần ref?</b> JavaScript không thể “nghe” một biến số thường. Ref bọc giá trị trong object để Vue chặn được thao tác đọc (<b>track</b>) và ghi (<b>trigger</b>).',
        '<b><code>&lt;script setup&gt;</code>:</b> biến/hàm khai báo ở cấp cao nhất được dùng thẳng trong template, không cần <code>return</code>.',
        '<b>Phản ứng sâu (deep):</b> ref chứa object/mảng thì mọi thuộc tính lồng bên trong cũng phản ứng; đổi sâu vẫn kích hoạt cập nhật.',
        '<b>Cập nhật DOM không đồng bộ:</b> đổi state không sửa DOM ngay; Vue gom lại và áp ở “tick” kế tiếp. Muốn chờ DOM cập nhật xong dùng <code>await nextTick()</code>.'
      ] }
    ] },
    { icon: '🧱', title: 'reactive() và những điều cần cẩn thận', blocks: [
      { t: 'p', x: V1(`import { reactive } from 'vue'
const state = reactive({ count: 0, user: { name: 'An' } })
state.count++          // không cần .value`) },
      { t: 'table', head: ['', 'ref()', 'reactive()'], rows: [
        ['Nhận', 'Mọi kiểu (số, chuỗi, object…)', '<b>Chỉ object</b> (kể cả mảng, Map, Set)'],
        ['Truy cập trong JS', '<code>x.value</code>', 'Truy cập thuộc tính trực tiếp'],
        ['Gán lại cả biến', 'Được (<code>x.value = {...}</code>)', '<b>Không được</b> thay cả object (mất liên kết phản ứng)'],
        ['Destructure', 'Giữ phản ứng nếu dùng <code>toRefs</code>/ref riêng', '<b>Mất phản ứng</b> khi tách thuộc tính ra biến'],
        ['Khuyến nghị', '<b>Dùng ref() làm mặc định</b>', 'Chỉ khi thật tiện (nhóm state cố định)']
      ] },
      { t: 'warn', x: '<b>Giới hạn của reactive():</b> (1) chỉ cho kiểu object; (2) không thể thay thế toàn bộ object (<code>state = reactive({...})</code> làm mất kết nối với chỗ khác đang giữ proxy cũ); (3) không an toàn khi destructure (<code>let { count } = state</code> → <code>count</code> chỉ là số thường, mất phản ứng); (4) truyền thuộc tính vào hàm cũng như vậy.' },
      { t: 'list', items: [
        '<b>Proxy:</b> <code>reactive()</code> trả về một <b>Proxy</b> của object gốc. Luôn dùng proxy; sửa object gốc sẽ <b>không</b> kích hoạt cập nhật. <code>reactive(proxy)</code> trả về chính proxy (idempotent).',
        '<b>Tự unwrap ref:</b> ref là thuộc tính của reactive object thì đọc/ghi không cần <code>.value</code>. Nhưng trong <b>mảng/Map</b> reactive thì <b>không</b> tự unwrap: <code>list[0].value</code>.',
        '<b>Trong template</b> chỉ các ref ở cấp cao nhất mới được unwrap. <code>const o = { n: ref(1) }</code> rồi <code>{{ o.n + 1 }}</code> sẽ ra <code>[object Object]1</code>; dùng <code>{{ o.n }}</code> (nội suy) thì được, hoặc destructure <code>n</code> ra cấp cao nhất.'
      ] },
      { t: 'widget', name: 'v3-reactive-sim', title: 'Thử: ref, computed và watch cùng chạy khi bạn đổi giá trị' }
    ] },
    { icon: '🧮', title: 'computed: giá trị dẫn xuất có cache', blocks: [
      { t: 'p', x: V1(`import { ref, computed } from 'vue'
const author = ref({ books: ['Vue 2', 'Vue 3'] })

const hasBooks = computed(() =>
  author.value.books.length > 0 ? 'Có' : 'Chưa'
)`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> computed như ô <code>C1 = A1 + B1</code> trong Excel: nó <b>nhớ kết quả</b> và chỉ tính lại khi A1 hoặc B1 đổi. Hàm (method) thì như bấm máy tính mỗi lần cần – lần nào cũng tính lại từ đầu.' },
      { t: 'table', head: ['', 'computed', 'method (hàm)'], rows: [
        ['Cache', '✅ Cache theo phụ thuộc; chỉ tính lại khi phụ thuộc đổi', '❌ Chạy lại mỗi lần render'],
        ['Dùng khi', 'Giá trị suy ra từ state, tốn kém', 'Cần tham số, hoặc hành động'],
        ['Phụ thuộc không phản ứng (vd <code>Date.now()</code>)', 'Không cập nhật (cache mãi)', 'Chạy lại theo render']
      ] },
      { t: 'widget', name: 'v3-computed-cache', title: 'Đếm số lần tính: computed (cache) vs method' },
      { t: 'list', items: [
        '<b>Getter phải thuần (không tác dụng phụ):</b> không gọi API, không sửa state khác, không chạm DOM trong computed. Việc đó để cho <code>watch</code>.',
        '<b>Không sửa giá trị computed</b> (mặc định chỉ đọc). Cần ghi: dùng <b>writable computed</b> với <code>get</code> và <code>set</code>.',
        '<b>Giá trị trước đó (3.4+):</b> getter nhận tham số thứ nhất là giá trị cũ: <code>computed((prev) => ...)</code>.',
        'Trả về object/mảng mới mỗi lần: coi là “giá trị chụp nhanh”, đừng sửa trực tiếp; sửa state nguồn.'
      ] },
      { t: 'p', x: V1(`const first = ref('Nguyễn'), last = ref('An')
const full = computed({
  get: () => first.value + ' ' + last.value,
  set: (v) => { [first.value, last.value] = v.split(' ') }
})
full.value = 'Trần Bình'   // cập nhật first, last`) }
    ] }
  ],
  summary: [
    'Template: <code>{{ }}</code>, <code>v-bind</code> (:), <code>v-on</code> (@), directive; chỉ dùng biểu thức, tránh tác dụng phụ.',
    'Ref là mặc định cho state; trong JS dùng <code>.value</code>, trong template tự bỏ. reactive() chỉ cho object và có giới hạn (destructure, gán lại).',
    'computed = giá trị dẫn xuất có cache, getter thuần; method chạy lại mỗi lần.'
  ],
  cards: [
    ['Ref trong JS vs template?', 'JS: .value; template: không cần.'],
    ['Vì sao ref?', 'Để Vue bắt được thao tác đọc/ghi giá trị.'],
    ['reactive() không làm được?', 'Nhận primitive, thay cả object, destructure an toàn.'],
    ['computed khác method?', 'Cache theo phụ thuộc.'],
    ['Chờ DOM cập nhật?', 'await nextTick()'],
    ['v-html nguy hiểm vì?', 'XSS nếu nội dung không tin cậy.']
  ],
  quiz: [
    { q: 'Destructure một reactive object thì:', o: ['Vẫn phản ứng', 'Mất phản ứng ở biến tách ra', 'Báo lỗi', 'Tự động thành ref'], a: 1, e: 'Giá trị thường không còn liên kết với proxy.' },
    { q: 'Computed khác method ở chỗ:', o: ['Cache theo phụ thuộc', 'Chạy chậm hơn', 'Không dùng được trong template', 'Phải có tham số'], a: 0, e: 'Chỉ tính lại khi phụ thuộc phản ứng đổi.' },
    { q: 'Cách đúng để lấy giá trị ref trong code JS:', o: ['count', 'count.value', 'count()', '$count'], a: 1, e: 'Trong script cần .value.' },
    { q: 'Việc nào KHÔNG nên làm trong getter của computed?', o: ['Tính toán từ state', 'Gọi API / sửa state khác', 'Lọc mảng', 'Nối chuỗi'], a: 1, e: 'Getter phải thuần, không tác dụng phụ.' }
  ],
  match: [
    ['ref()', 'Hộp chứa giá trị, dùng .value'],
    ['reactive()', 'Proxy cho object'],
    ['computed()', 'Giá trị dẫn xuất có cache'],
    ['nextTick()', 'Chờ DOM cập nhật'],
    ['v-bind (:)', 'Gắn thuộc tính theo dữ liệu']
  ]
},

{
  n: 3,
  title: 'Giao diện theo dữ liệu: class/style, v-if, v-for, sự kiện, form',
  intro: 'Các công cụ hằng ngày để biến state thành giao diện và nhận tương tác: gắn class/style động, hiện/ẩn có điều kiện, lặp danh sách, xử lý sự kiện và liên kết hai chiều với ô nhập (<code>v-model</code>).',
  sections: [
    { icon: '🎨', title: 'Class và style động', blocks: [
      { t: 'p', x: V1(`<div :class="{ active: isActive, 'text-danger': hasError }"></div>
<div :class="[activeClass, errorClass]"></div>
<div :class="[isActive ? 'active' : '', errorClass]"></div>
<div :style="{ color: activeColor, fontSize: size + 'px' }"></div>`) },
      { t: 'list', items: [
        '<b>Object:</b> khóa là tên class, giá trị truthy thì class được thêm. Có thể sống chung với <code>class="static"</code> thường.',
        '<b>Mảng:</b> danh sách class; có thể lồng object trong mảng.',
        '<b>Với component:</b> class/style truyền vào component sẽ được <b>gộp</b> vào phần tử gốc của component con (xem “attribute kế thừa” ở chương 6).',
        '<b>Style:</b> dùng camelCase (<code>fontSize</code>) hoặc kebab-case trong ngoặc (<code>\'font-size\'</code>); Vue tự thêm tiền tố trình duyệt. Mảng object style được gộp.'
      ] }
    ] },
    { icon: '🔀', title: 'Hiển thị có điều kiện', blocks: [
      { t: 'p', x: V1(`<h1 v-if="awesome">Vue thật tuyệt!</h1>
<h1 v-else-if="meh">Cũng được</h1>
<h1 v-else>Ồ không</h1>

<template v-if="ok">   <!-- nhóm nhiều phần tử mà không thêm thẻ bao -->
  <h1>Tiêu đề</h1><p>Đoạn 1</p>
</template>

<h1 v-show="ok">Xin chào</h1>`) },
      { t: 'table', head: ['', 'v-if', 'v-show'], rows: [
        ['Cách hoạt động', '<b>Tạo/hủy</b> phần tử (và component bên trong) thật sự', 'Luôn render, chỉ đổi CSS <code>display: none</code>'],
        ['Chi phí', 'Chuyển đổi tốn hơn', 'Render ban đầu tốn hơn'],
        ['Hợp khi', 'Điều kiện ít khi đổi, hoặc nội dung nặng/nhạy cảm', 'Bật/tắt thường xuyên'],
        ['Dùng trên <code>&lt;template&gt;</code>', '✅', '❌ Không hỗ trợ'],
        ['Kết hợp <code>v-else</code>', '✅', '❌']
      ] },
      { t: 'widget', name: 'v3-vif-vshow', title: 'Thử: v-if hủy phần tử, v-show chỉ ẩn bằng CSS (state trong ô nhập)' },
      { t: 'warn', x: '<b>Đừng dùng v-if và v-for trên cùng một phần tử.</b> Trong Vue 3, <code>v-if</code> có độ ưu tiên <b>cao hơn</b> v-for nên nó không đọc được biến lặp. Lọc danh sách bằng <code>computed</code>, hoặc bọc bằng <code>&lt;template v-for&gt;</code> rồi đặt v-if bên trong.' }
    ] },
    { icon: '🔁', title: 'Danh sách với v-for và key', blocks: [
      { t: 'p', x: V1(`<li v-for="(item, index) in items" :key="item.id">{{ index }} – {{ item.name }}</li>
<li v-for="(value, key) in object">{{ key }}: {{ value }}</li>
<span v-for="n in 10">{{ n }}</span>    <!-- đếm từ 1 đến 10 -->

<template v-for="item in items" :key="item.id">   <!-- key đặt trên <template> -->
  <li>{{ item.msg }}</li><li class="divider"></li>
</template>`) },
      { t: 'key', x: '<b>Luôn đặt <code>:key</code> duy nhất và ổn định</b> (id), không dùng index khi danh sách có thể đổi thứ tự. Key giúp Vue biết phần tử nào là phần tử nào để <b>tái sử dụng/sắp xếp lại</b> DOM đúng thay vì “vá” nội dung, nên state nội bộ (ô nhập, component con) không bị lẫn.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> key như <b>số báo danh</b> của thí sinh. Nếu chỉ xếp theo thứ tự ngồi (index), khi có người chen vào/đổi chỗ, tờ bài (state) sẽ gán nhầm người. Có số báo danh thì ai về chỗ nấy.' },
      { t: 'list', items: [
        '<b>Phát hiện thay đổi mảng:</b> các phương thức đột biến (<code>push</code>, <code>pop</code>, <code>splice</code>, <code>sort</code>, <code>reverse</code>…) kích hoạt cập nhật. Phương thức trả mảng mới (<code>filter</code>, <code>map</code>, <code>concat</code>): gán lại <code>items.value = items.value.filter(...)</code>; Vue tái dùng DOM rất hiệu quả.',
        '<b>Hiển thị đã lọc/sắp xếp:</b> dùng <code>computed</code>; nếu cần trong v-for lồng thì dùng method. Cẩn thận: <code>reverse()</code>/<code>sort()</code> <b>sửa mảng gốc</b> → sao chép trước (<code>[...arr].sort()</code>; hoặc <code>toSorted()</code>).',
        '<b>v-for với component:</b> luôn kèm <code>key</code>; dữ liệu truyền bằng props (<code>:item="item"</code>), vì component có phạm vi riêng và không tự thấy biến lặp.'
      ] }
    ] },
    { icon: '🖱️', title: 'Xử lý sự kiện', blocks: [
      { t: 'p', x: V1(`<button @click="count++">Inline</button>
<button @click="greet">Method handler</button>
<button @click="say('hi', $event)">Truyền tham số + event gốc</button>

<form @submit.prevent="onSubmit"> ... </form>
<input @keyup.enter="submit" />
<input @keyup.ctrl.enter="send" />
<div @click.self="close">Chỉ khi bấm đúng thẻ này</div>
<a @click.once="doThis">`) },
      { t: 'table', head: ['Modifier', 'Tác dụng'], rows: [
        ['<code>.stop</code>', 'Gọi <code>event.stopPropagation()</code>'],
        ['<code>.prevent</code>', 'Gọi <code>event.preventDefault()</code>'],
        ['<code>.self</code>', 'Chỉ chạy khi event bắt nguồn từ chính phần tử này'],
        ['<code>.capture</code>', 'Dùng chế độ capture'],
        ['<code>.once</code>', 'Chạy tối đa một lần'],
        ['<code>.passive</code>', 'Báo trình duyệt không gọi preventDefault (cuộn mượt hơn)'],
        ['<code>.enter .tab .esc .space .up/.down…</code>', 'Chỉ khi nhấn phím tương ứng'],
        ['<code>.ctrl .alt .shift .meta</code>', 'Kèm phím hệ thống; <code>.exact</code> = đúng tổ hợp đó thôi'],
        ['<code>.left .right .middle</code>', 'Theo nút chuột']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> modifier xếp chuỗi có thứ tự: <code>@click.prevent.self</code> chặn mặc định trên mọi click, còn <code>@click.self.prevent</code> chỉ chặn khi bấm đúng phần tử đó. Hãy nhớ: viết <b>từ trái sang phải</b>.' }
    ] },
    { icon: '⌨️', title: 'Form và v-model', blocks: [
      { t: 'p', x: V1(`<input v-model="text" />                       <!-- văn bản -->
<textarea v-model="msg"></textarea>
<input type="checkbox" v-model="checked" />     <!-- boolean -->
<input type="checkbox" value="A" v-model="names" />   <!-- mảng -->
<input type="radio" value="One" v-model="picked" />
<select v-model="selected"><option value="a">A</option></select>

<input v-model.lazy="msg" />      <!-- đồng bộ khi 'change' thay vì 'input' -->
<input v-model.number="age" />    <!-- ép thành số -->
<input v-model.trim="msg" />      <!-- bỏ khoảng trắng hai đầu -->`) },
      { t: 'list', items: [
        '<b><code>v-model</code> là đường tắt</b>: gắn <code>:value</code> + lắng nghe sự kiện nhập, tự chọn đúng thuộc tính/sự kiện theo loại input.',
        '<b>Ô IME (gõ tiếng Việt, Trung…):</b> khi đang soạn dấu, <code>v-model</code> chưa cập nhật tới khi chọn xong; nếu cần cập nhật tức thì hãy dùng <code>:value</code> + <code>@input</code> thủ công.',
        '<b>Giá trị gắn:</b> với checkbox/radio/select có thể gắn giá trị động bằng <code>:value</code>, <code>true-value</code>/<code>false-value</code>.',
        '<b>Trên component:</b> <code>v-model</code> hoạt động qua prop + event (xem chương 6, <code>defineModel</code>).'
      ] },
      { t: 'widget', name: 'v3-vmodel-mod', title: 'Thử modifier của v-model: .lazy, .number, .trim' }
    ] }
  ],
  summary: [
    'Class/style động: object/mảng; v-if hủy–tạo, v-show chỉ ẩn; không trộn v-if và v-for.',
    'v-for luôn kèm key ổn định; sắp xếp/lọc bằng computed, tránh sửa mảng gốc ngoài ý muốn.',
    'Sự kiện: modifier (.prevent, .stop, .once, phím…); v-model là đường tắt hai chiều cho form, có .lazy/.number/.trim.'
  ],
  cards: [
    ['v-if vs v-show?', 'if: tạo/hủy; show: chỉ CSS display.'],
    ['Vì sao cần key?', 'Định danh phần tử để tái dùng DOM đúng, không lẫn state.'],
    ['Lọc danh sách trong template?', 'Dùng computed, không v-if cùng v-for.'],
    ['Chặn submit tải lại trang?', '@submit.prevent'],
    ['Chỉ chạy sự kiện 1 lần?', '.once'],
    ['v-model.number làm gì?', 'Ép giá trị nhập thành số.']
  ],
  quiz: [
    { q: 'Trong Vue 3, khi v-if và v-for trên cùng phần tử:', o: ['v-for ưu tiên cao hơn', 'v-if ưu tiên cao hơn (không thấy biến lặp)', 'Luôn báo lỗi biên dịch', 'Chạy song song'], a: 1, e: 'Nên lọc bằng computed.' },
    { q: 'key nên là:', o: ['Index mảng luôn', 'Giá trị duy nhất, ổn định (id)', 'Math.random()', 'Không cần'], a: 1, e: 'Random key làm Vue tạo lại DOM mỗi lần.' },
    { q: 'v-show:', o: ['Hủy phần tử khỏi DOM', 'Đổi CSS display', 'Chỉ chạy trên template', 'Dùng với v-else'], a: 1, e: 'Phần tử vẫn ở trong DOM.' },
    { q: 'Cách chặn hành vi mặc định của form submit:', o: ['@submit.stop', '@submit.prevent', '@submit.once', '@submit.self'], a: 1, e: '.prevent = preventDefault().' }
  ],
  match: [
    ['.prevent', 'preventDefault()'],
    ['.stop', 'stopPropagation()'],
    ['v-model.trim', 'Bỏ khoảng trắng hai đầu'],
    ['v-show', 'Ẩn bằng CSS'],
    [':key', 'Định danh phần tử trong danh sách']
  ]
}
);
