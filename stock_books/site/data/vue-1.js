// "Fullstack Vue" (Djirdeh, Murray, Lerner – 2018, Vue 2) – bản tiếng Việt dễ hiểu – Chương 1–3.
// Khối "📚 Bổ sung ngoài sách" = kiến thức chung về Vue 3 / thực hành hiện nay (không có trong PDF).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vuebook = BOOK_DATA.vuebook || { chapters: [] };
const C = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vuebook.chapters.push(

{
  n: 1,
  title: 'Ứng dụng Vue đầu tiên: UpVote!',
  intro: 'Vue là framework JavaScript “tiến dần”: bạn có thể chỉ chèn một thẻ &lt;script&gt; như jQuery, rồi lớn dần thành ứng dụng lớn. Chương này dựng app bình chọn (giống Reddit) để nắm 6 ý tưởng cốt lõi: instance, binding, v-for, computed, sự kiện, component.',
  sections: [
    { icon: '🧱', title: 'Instance, dữ liệu và binding', blocks: [
      { t: 'p', x: '<b>Vue instance</b> là điểm khởi đầu của mọi app Vue. Bạn truyền một đối tượng cấu hình: <code>el</code> (gắn vào phần tử HTML nào), <code>data</code> (dữ liệu), <code>methods</code>, <code>computed</code>, <code>components</code>…' },
      { t: 'p', x: C(`<div id="app">
  <h2>{{ title }}</h2>
  <img v-bind:src="image">
</div>

new Vue({
  el: '#app',
  data: { title: 'Xin chào Vue', image: 'cat.png' }
})`) },
      { t: 'table', head: ['Cú pháp', 'Dùng để', 'Ví dụ'], rows: [
        ['<code>{{ }}</code> (Mustache)', 'Hiển thị chữ từ dữ liệu', '<code>{{ title }}</code>'],
        ['<code>v-bind:thuộc-tính</code> (rút gọn <code>:</code>)', 'Gắn dữ liệu vào <b>thuộc tính HTML</b> (src, href, class…)', '<code>:src="image"</code>'],
        ['<code>v-on:sự-kiện</code> (rút gọn <code>@</code>)', 'Lắng nghe sự kiện (click, keyup…)', '<code>@click="upvote(id)"</code>']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>data</code> là “bảng thông tin” còn HTML là “tấm áp phích”. Mustache điền chữ vào chỗ trống; <code>v-bind</code> điền vào chỗ trống nằm <i>trong thẻ</i> (vì {{ }} không dùng được trong thuộc tính).' },
      { t: 'widget', name: 'vue-binding', title: 'Thử data binding hai chiều: gõ vào ô, xem “data” thay đổi' }
    ] },
    { icon: '🔁', title: 'Danh sách (v-for), key và sắp xếp (computed)', blocks: [
      { t: 'p', x: '<code>v-for="submission in submissions"</code> lặp qua mảng, vẽ một khối HTML cho mỗi phần tử. Mỗi phần tử nên có <code>:key</code> duy nhất (ví dụ <code>id</code>) để Vue <b>di chuyển</b> đúng phần tử khi thứ tự đổi, thay vì ghi đè nội dung lên nhau.' },
      { t: 'key', x: '<b>Computed property</b> = giá trị “tính ra từ dữ liệu khác” và tự cập nhật khi dữ liệu gốc đổi. Ví dụ <code>sortedSubmissions</code> trả về mảng đã sắp theo số phiếu. View chỉ việc lặp qua <code>sortedSubmissions</code>.' },
      { t: 'p', x: C(`computed: {
  sortedSubmissions() {
    return this.submissions.sort((a, b) => b.votes - a.votes)
  }
}`) },
      { t: 'tip', x: '💡 <b>Computed giống công thức Excel:</b> ô tổng tự đổi khi bạn sửa số trong ô khác; bạn không phải bấm “tính lại”. Còn <code>methods</code> giống nút bấm: chỉ chạy khi bạn gọi.' },
      { t: 'widget', name: 'vue-upvote', title: 'Mini UpVote!: bấm 👍, danh sách tự sắp xếp lại (computed + v-for + :class)' }
    ] },
    { icon: '⚡', title: 'Sự kiện và tính phản ứng (reactivity)', blocks: [
      { t: 'p', x: '<code>@click="upvote(submission.id)"</code> gọi method <code>upvote</code>. Trong method bạn tìm submission rồi <code>submission.votes++</code> — <b>chỉ cần sửa dữ liệu</b>, giao diện tự cập nhật.' },
      { t: 'key', x: '<b>Reactive state:</b> khác với React (coi state là bất biến), trong Vue bạn sửa thẳng dữ liệu, Vue theo dõi và vẽ lại phần giao diện liên quan. Đây là điểm làm Vue trực quan.' },
      { t: 'p', x: '<b>Class binding có điều kiện:</b> <code>:class="{ \'blue-border\': submission.votes >= 20 }"</code> — class chỉ có mặt khi biểu thức đúng.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Vue theo dõi dữ liệu thế nào?</b> Vue 2 dùng <code>Object.defineProperty</code> để “bọc” từng thuộc tính của <code>data</code> (nên không phát hiện được thêm thuộc tính mới sau này hay gán <code>arr[0] = x</code> — phải dùng <code>Vue.set</code>). Vue 3 dùng <code>Proxy</code> nên bỏ được các giới hạn đó.' }
    ] },
    { icon: '🧩', title: 'Component và props', blocks: [
      { t: 'p', x: 'Khi app lớn, nhồi mọi thứ vào một instance sẽ rối. <b>Component</b> là mảnh giao diện độc lập (HTML + logic + style). Hầu hết tùy chọn của instance (<code>data</code>, <code>methods</code>…) cũng dùng được trong component — riêng <code>data</code> phải là <b>hàm</b> trả về object để mỗi bản sao có dữ liệu riêng.' },
      { t: 'p', x: C(`const submissionComponent = {
  props: ['submission', 'submissions'],
  template: \`<div>{{ submission.title }} — {{ submission.votes }}</div>\`
}

new Vue({ el: '#app', components: { 'submission-component': submissionComponent } })

<submission-component v-for="s in sortedSubmissions"
  :key="s.id" :submission="s" :submissions="sortedSubmissions" />`) },
      { t: 'key', x: '<b>Props = dữ liệu đi XUỐNG</b> (cha → con) và phải khai báo ở con. Dữ liệu không đi ngược lại bằng props. Muốn con báo cho cha thì dùng <b>sự kiện tùy chỉnh</b> (chương 3).' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> component như khuôn bánh; props là nhân bánh cha đưa cho. Con chỉ “đọc” nhân, không tự sửa phần của cha.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Vue 3:</b> cách viết hiện nay là <code>&lt;script setup&gt;</code> và <code>ref</code>/<code>computed</code> (Composition API) — xem chương 9. Khái niệm (binding, v-for, computed, props) giữ nguyên.' }
    ] }
  ],
  summary: [
    'Instance có <code>el</code>, <code>data</code>, <code>methods</code>, <code>computed</code>, <code>components</code>.',
    '<code>{{ }}</code> cho chữ; <code>:thuộc-tính</code> (v-bind) cho thuộc tính; <code>@sự-kiện</code> (v-on) cho sự kiện.',
    '<code>v-for</code> + <code>:key</code> duy nhất; <code>computed</code> tự cập nhật theo dữ liệu.',
    'Sửa dữ liệu → giao diện tự cập nhật (reactive).',
    'Component chia nhỏ giao diện; props truyền dữ liệu từ cha xuống con.'
  ],
  cards: [
    ['Vue instance là gì?', 'Đối tượng khởi đầu của app Vue, nhận options như el, data, methods, computed.'],
    ['Mustache syntax?', '<code>{{ }}</code> để hiển thị dữ liệu dạng chữ.'],
    ['Dùng gì để gắn dữ liệu vào thuộc tính HTML?', '<code>v-bind</code> (viết tắt <code>:</code>).'],
    ['Dùng gì để lắng nghe sự kiện?', '<code>v-on</code> (viết tắt <code>@</code>).'],
    ['<code>v-for</code> viết thế nào?', '<code>v-for="item in items"</code>, kèm <code>:key</code> duy nhất.'],
    ['Vì sao cần <code>key</code>?', 'Để Vue di chuyển đúng phần tử khi danh sách đổi thứ tự.'],
    ['Computed property?', 'Giá trị tính từ dữ liệu khác, tự cập nhật khi dữ liệu gốc đổi.'],
    ['Methods vs computed?', 'Method chạy khi được gọi; computed tự tính lại khi dữ liệu phụ thuộc đổi.'],
    ['Reactive state?', 'Sửa trực tiếp dữ liệu thì giao diện tự cập nhật.'],
    ['Props?', 'Thuộc tính cha truyền xuống con; phải khai báo ở con; một chiều.'],
    ['Class có điều kiện?', '<code>:class="{ tên: điều_kiện }"</code>.']
  ],
  quiz: [
    { q: 'Hiển thị giá trị của thuộc tính src bằng dữ liệu, dùng:', o: ['{{ image }}', 'v-bind:src="image"', 'v-for', 'v-model'], a: 1, e: 'Mustache không dùng được trong thuộc tính.' },
    { q: '@click là viết tắt của:', o: ['v-bind:click', 'v-on:click', 'v-model:click', 'v-for:click'], a: 1, e: 'Lắng nghe sự kiện.' },
    { q: 'Vì sao nên có :key trong v-for?', o: ['Cho đẹp', 'Để Vue nhận diện và di chuyển phần tử đúng', 'Bắt buộc cú pháp', 'Để tăng kích thước'], a: 1, e: 'Giúp cập nhật DOM đúng.' },
    { q: 'sortedSubmissions nên là:', o: ['method', 'computed', 'prop', 'component'], a: 1, e: 'Tính từ submissions và tự cập nhật.' },
    { q: 'Dữ liệu truyền cha → con bằng:', o: ['props', 'computed', 'v-on', 'ref'], a: 0, e: 'Props một chiều xuống.' },
    { q: 'Trong component, data phải là:', o: ['Object thẳng', 'Hàm trả về object', 'Mảng', 'Chuỗi'], a: 1, e: 'Mỗi bản sao có dữ liệu riêng.' }
  ],
  match: [
    ['v-bind (:)', 'Gắn dữ liệu vào thuộc tính'],
    ['v-on (@)', 'Lắng nghe sự kiện'],
    ['v-for', 'Lặp danh sách'],
    ['computed', 'Giá trị tính ra, tự cập nhật'],
    ['props', 'Dữ liệu cha → con']
  ]
},

{
  n: 2,
  title: 'Component một file (.vue) và cách xây app từ đầu',
  intro: 'Khi app lớn, viết template trong chuỗi JavaScript rất khó chịu. File <code>.vue</code> gom HTML + JS + CSS của một component vào một chỗ. Chương này còn dạy quy trình 4 bước để dựng app từ con số 0 và cách chia sẻ trạng thái bằng “store” đơn giản (ví dụ: lịch tuần).',
  sections: [
    { icon: '📄', title: 'Single-file component (SFC)', blocks: [
      { t: 'p', x: 'Một file <code>.vue</code> có 3 phần:' },
      { t: 'p', x: C(`<template>
  <div class="greet">{{ getGreeting }}</div>
</template>

<script>
export default {
  name: 'MyComponent',
  data() { return { name: 'Vue' } },
  computed: { getGreeting() { return 'Xin chào ' + this.name } }
}
</script>

<style lang="scss" scoped>
.greet { color: teal; }
</style>`) },
      { t: 'list', items: [
        '<code>&lt;template&gt;</code>: HTML (chỉ một phần tử gốc ở Vue 2).',
        '<code>&lt;script&gt;</code>: logic.',
        '<code>&lt;style scoped&gt;</code>: CSS chỉ áp dụng cho component này (không rò rỉ).',
        'Trình duyệt không hiểu <code>.vue</code>: công cụ build (Webpack + <code>vue-loader</code>) biên dịch ra JavaScript thường.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> thay vì ba tờ giấy (HTML, JS, CSS) cho một món đồ, bạn có một “hộp” chứa đủ — mở hộp nào cũng thấy mọi thứ của món đó.' }
    ] },
    { icon: '🛠', title: 'Môi trường phát triển (Vue CLI)', blocks: [
      { t: 'table', head: ['Thành phần', 'Vai trò'], rows: [
        ['Node.js + npm', 'Chạy công cụ, cài thư viện (<code>npm install</code>)'],
        ['Vue CLI (<code>vue-cli-service</code>)', 'Dựng khung dự án; lệnh <code>serve</code> (chạy dev), <code>build</code> (đóng gói ra <code>dist/</code>), <code>lint</code>'],
        ['Webpack', 'Gom nhiều file thành gói mà trình duyệt chạy được'],
        ['Babel', 'Dịch cú pháp ES6+ xuống ES5 cho trình duyệt cũ'],
        ['ESLint', 'Kiểm tra lỗi/kiểu code'],
        ['<code>public/index.html</code>', 'Trang gốc, có <code>&lt;div id="app"&gt;</code> để mount'],
        ['<code>src/main.js</code>', 'Điểm vào: tạo Vue instance, <code>render: h =&gt; h(App)</code>']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách:</b> hiện nay dự án Vue mới thường dùng <b>Vite</b> (<code>npm create vue@latest</code>) thay cho Vue CLI/Webpack — khởi động tức thì, cấu hình gọn. Vue CLI đã ở chế độ bảo trì.' }
    ] },
    { icon: '🧭', title: 'Quy trình 4 bước dựng app (ví dụ lịch tuần)', blocks: [
      { t: 'steps', items: [
        '<b>Bước 1 – Bản tĩnh:</b> dựng HTML/CSS cố định, chưa tương tác, để thấy bố cục.',
        '<b>Bước 2 – Chia component:</b> mỗi “hộp” trên giao diện thành một component: <code>App</code> → <code>CalendarWeek</code> → <code>CalendarDay</code> → <code>CalendarEvent</code>; cạnh đó <code>CalendarEntry</code> (ô nhập).',
        '<b>Bước 3 – Dữ liệu cứng:</b> quyết định state nằm ở đâu, đưa dữ liệu mẫu (<code>seed.js</code>) vào; cho dữ liệu chảy từ cha xuống con bằng props + v-for.',
        '<b>Bước 4 – Đột biến state (mutations):</b> thêm tương tác: chọn ngày, thêm/sửa/xóa sự kiện — mỗi thay đổi nằm trong <b>store</b>, component chỉ gọi store.'
      ] },
      { t: 'mnemo', x: 'Nhớ: <b>Tĩnh → Chia → Dữ liệu cứng → Tương tác</b>. Chưa có dữ liệu thật thì cứ hard-code, tương tác để sau cùng.' },
      { t: 'widget', name: 'vue-steps-order', title: 'Sắp xếp đúng thứ tự 4 bước khi dựng app Vue' }
    ] },
    { icon: '🗃', title: 'Chia sẻ dữ liệu giữa component', blocks: [
      { t: 'table', head: ['Quan hệ', 'Cách truyền', 'Ghi chú'], rows: [
        ['Cha → con', 'Props', 'Một chiều, con không sửa props'],
        ['Con → cha', 'Sự kiện tùy chỉnh (<code>$emit</code>)', 'Chương 3'],
        ['Anh em / bất kỳ', 'Event bus <b>hoặc</b> store dùng chung', 'Event bus dễ rối; store (Vuex) được khuyến nghị']
      ] },
      { t: 'p', x: '<b>Store đơn giản:</b> một object dùng chung chứa <code>state</code> và các hàm sửa nó. Component lấy state để hiển thị, và <b>không sửa trực tiếp</b> mà gọi hàm của store.' },
      { t: 'p', x: C(`// store.js
export const store = {
  state: { numbers: [] },
  pushNewNumber(n) { this.state.numbers.push(n) }
}

// NumberSubmit.vue: gọi store.pushNewNumber(Number(this.newNumber))
// NumberDisplay.vue: hiển thị store.state.numbers`) },
      { t: 'key', x: 'Quy tắc vàng: <b>mọi thay đổi state đi qua store</b>. Nhờ vậy dễ biết “ai đã đổi cái gì”. Đây là tiền thân của mô hình Flux/Vuex (chương 4).' },
      { t: 'tabs', items: [
        ['🖱 v-model', '<code>v-model="inputEntry"</code> tạo <b>hai chiều</b> giữa ô nhập và dữ liệu: gõ → dữ liệu đổi; dữ liệu đổi → ô nhập đổi.'],
        ['❓ v-if', '<code>&lt;p v-if="error"&gt;Không được để trống&lt;/p&gt;</code> chỉ vẽ thẻ khi điều kiện đúng.'],
        ['🔍 Giao tiếp store', 'Getter: <code>getActiveDay()</code> dùng <code>find()</code>; setter: <code>setActiveDay(id)</code> dùng <code>map()</code> để đổi cờ <code>active</code>; <code>submitEvent(details)</code> thêm sự kiện vào ngày đang chọn.']
      ] },
      { t: 'widget', name: 'vue-state-where', title: 'State này nên đặt ở đâu? (component, props, store…)' }
    ] }
  ],
  summary: [
    'File .vue = template + script + style (scoped); cần công cụ build.',
    'Dự án Vue CLI có main.js (điểm vào), public/index.html, package.json; ngày nay dùng Vite.',
    'Quy trình: bản tĩnh → chia component → dữ liệu cứng → tương tác (qua store).',
    'Cha→con: props; con→cha: $emit; chia sẻ rộng: store.',
    'v-model hai chiều; v-if hiển thị có điều kiện.'
  ],
  cards: [
    ['Ba phần của file .vue?', 'template, script, style.'],
    ['<code>scoped</code> trong style?', 'CSS chỉ áp dụng cho component hiện tại.'],
    ['Vì sao cần Webpack/vue-loader?', 'Trình duyệt không hiểu .vue; cần biên dịch thành JS.'],
    ['<code>npm run serve</code>?', 'Chạy server phát triển (hot-reload).'],
    ['<code>npm run build</code>?', 'Đóng gói sản phẩm ra thư mục dist/.'],
    ['4 bước dựng app?', 'Tĩnh → chia component → dữ liệu cứng → mutations/tương tác.'],
    ['Store đơn giản?', 'Object chung giữ state và các hàm sửa state.'],
    ['Component được phép sửa state trực tiếp?', 'Không; phải gọi hành động của store.'],
    ['<code>v-model</code>?', 'Ràng buộc hai chiều giữa input và dữ liệu.'],
    ['<code>v-if</code>?', 'Vẽ phần tử chỉ khi điều kiện đúng.'],
    ['Công cụ hiện đại thay Vue CLI?', 'Vite.']
  ],
  quiz: [
    { q: 'Phần nào trong .vue chứa HTML?', o: ['script', 'template', 'style', 'config'], a: 1, e: 'Khối template.' },
    { q: 'CSS chỉ áp dụng cho component, dùng:', o: ['&lt;style global&gt;', '&lt;style scoped&gt;', '&lt;style only&gt;', '&lt;css&gt;'], a: 1, e: 'scoped.' },
    { q: 'Bước đầu khi dựng app từ đầu:', o: ['Viết store', 'Làm bản tĩnh', 'Viết test', 'Deploy'], a: 1, e: 'Chia rõ bố cục trước.' },
    { q: 'Hai chiều giữa input và dữ liệu:', o: ['v-bind', 'v-model', 'v-on', 'v-if'], a: 1, e: 'v-model.' },
    { q: 'Nơi thích hợp thay đổi state dùng chung:', o: ['Bất kỳ component nào', 'Trong store', 'Trong CSS', 'Trong HTML'], a: 1, e: 'Tập trung để dễ theo dõi.' },
    { q: 'Hai component anh em cần chia sẻ dữ liệu: cách tốt nhất:', o: ['props giữa anh em', 'Store dùng chung', 'Biến toàn cục window', 'Không làm được'], a: 1, e: 'Props chỉ cha → con.' }
  ],
  match: [
    ['Vue CLI / Vite', 'Công cụ dựng dự án'],
    ['scoped', 'CSS chỉ cho component này'],
    ['store', 'Nơi giữ và sửa state chung'],
    ['v-if', 'Hiển thị có điều kiện'],
    ['seed.js', 'Dữ liệu mẫu ban đầu']
  ]
},

{
  n: 3,
  title: 'Sự kiện tùy chỉnh và Event Bus',
  intro: 'Props đi từ cha xuống con. Để con “nhắn ngược” lên cha (ví dụ “người dùng vừa thêm ghi chú”), Vue dùng sự kiện tùy chỉnh. Khi hai component không có quan hệ cha–con, có thể dùng event bus — nhưng sẽ thấy vì sao nó không được khuyến nghị.',
  sections: [
    { icon: '📣', title: 'Con nhắn lên cha: $emit', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> cha đưa nhân bánh xuống con (props). Khi con làm xong việc, con <b>bấm chuông</b> (<code>$emit</code>) báo cha; cha “nghe chuông” (<code>@tên-sự-kiện</code>) rồi tự quyết định làm gì. Con không với tay lên sửa đồ của cha.' },
      { t: 'p', x: 'Ví dụ ghi chú: ô nhập ở <code>input-component</code>, nhưng danh sách ghi chú nằm ở cha. Khi nhấn Enter:' },
      { t: 'p', x: C(`// con (input-component)
template: \`<input v-model="input" @keyup.enter="monitorEnterKey">\`,
methods: {
  monitorEnterKey() {
    this.$emit('add-note', { note: this.input, timestamp: new Date().toLocaleString() })
    this.input = ''
  }
}

// cha (template)
<input-component @add-note="addNote" />

// cha (method)
addNote(event) {
  this.notes.push(event.note)
  this.timestamps.push(event.timestamp)
}`) },
      { t: 'list', items: [
        '<code>@keyup.enter</code>: bí danh phím — chỉ chạy khi nhấn Enter (thay vì kiểm tra mã phím 13).',
        'Cha nhận dữ liệu qua tham số đầu tiên của handler (đối tượng con gửi lên).',
        'Hướng dữ liệu: <b>props xuống, sự kiện lên</b>.'
      ] },
      { t: 'widget', name: 'vue-flow', title: 'Mô phỏng props xuống – $emit lên: gõ ghi chú và nhấn Enter' }
    ] },
    { icon: '🚌', title: 'Event bus: một kênh chung cho mọi component', blocks: [
      { t: 'p', x: 'Giả sử thêm <code>note-count-component</code> đếm số ghi chú. Nó và <code>input-component</code> không phải cha–con nên không nghe được sự kiện của nhau. <b>Event bus</b> = một Vue instance rỗng dùng làm “bảng tin chung”:' },
      { t: 'p', x: C(`export const EventBus = new Vue()

// phát:
EventBus.$emit('add-note', { note, timestamp })

// nghe (ở bất kỳ component nào):
created() {
  EventBus.$on('add-note', event => { this.count++ })
}`) },
      { t: 'tip', x: '💡 <b>Event bus như loa phát thanh toàn trường:</b> ai cũng nghe được, ai cũng phát được — tiện, nhưng sau vài tháng không ai biết “tiếng loa này do ai phát và ai đang nghe”.' },
      { t: 'warn', x: '<b>Vì sao không khuyến nghị cho app lớn?</b> Dễ cài đặt nhưng khó theo dõi: nhiều nơi phát/nghe rải rác; thay đổi dữ liệu gắn chặt với thao tác người dùng. Một thao tác thường ảnh hưởng nhiều phần dữ liệu rời rạc → cần một nơi quản lý tập trung: <b>Vuex</b> (chương 4).' },
      { t: 'table', head: ['', 'Custom event (<code>$emit</code>)', 'Event bus'], rows: [
        ['Phạm vi', 'Con → cha trực tiếp', 'Bất kỳ ↔ bất kỳ'],
        ['Dễ theo dõi', 'Dễ (đi theo cây component)', 'Khó khi lớn'],
        ['Dùng khi', 'Con báo hành động cho cha', 'Ứng dụng rất nhỏ / thử nghiệm']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – Vue 3:</b> <code>$on/$off/$once</code> đã bị <b>gỡ bỏ</b> khỏi Vue 3, nên event bus kiểu này không còn. Nếu cần, dùng thư viện nhỏ (mitt), nhưng với dữ liệu chung nên dùng <b>Pinia</b>. Con → cha vẫn dùng <code>defineEmits</code> / <code>$emit</code>.' },
      { t: 'widget', name: 'vue-comm-pick', title: 'Chọn cách giao tiếp phù hợp cho từng tình huống' }
    ] }
  ],
  summary: [
    'Props xuống, sự kiện lên: con <code>$emit</code>, cha <code>@sự-kiện</code>.',
    '<code>@keyup.enter</code> lắng nghe đúng phím Enter.',
    'Event bus: một Vue instance rỗng để mọi component phát/nghe sự kiện — dễ làm nhưng khó theo dõi.',
    'App có nhiều trạng thái chung nên dùng Vuex/Pinia; Vue 3 đã bỏ <code>$on</code>.'
  ],
  cards: [
    ['Con báo cha bằng cách nào?', '<code>this.$emit("tên-sự-kiện", dữ_liệu)</code>.'],
    ['Cha nghe sự kiện?', '<code>&lt;con @tên-sự-kiện="handler" /&gt;</code>.'],
    ['<code>@keyup.enter</code>?', 'Chỉ chạy khi nhả phím Enter.'],
    ['Event bus là gì?', 'Một Vue instance rỗng dùng làm kênh sự kiện chung.'],
    ['Hai component không quan hệ cha–con cần liên lạc?', 'Event bus hoặc (tốt hơn) store dùng chung.'],
    ['Nhược điểm event bus?', 'Khó theo dõi khi nhiều emitter/listener rải rác.'],
    ['Giải pháp cho dữ liệu chung ở app lớn?', 'Vuex (Vue 2) / Pinia (Vue 3).'],
    ['Vue 3 có $on không?', 'Không, đã bị gỡ.']
  ],
  quiz: [
    { q: 'Con muốn báo cho cha việc vừa xảy ra:', o: ['Sửa props', '$emit', 'v-bind', 'Event của window'], a: 1, e: 'Cha nghe bằng @.' },
    { q: 'Props có thể dùng để con gửi dữ liệu lên cha?', o: ['Có', 'Không, props chỉ xuống', 'Có nếu trùng tên', 'Có với Vuex'], a: 1, e: 'Một chiều.' },
    { q: 'Điểm yếu lớn nhất của event bus:', o: ['Chậm', 'Khó theo dõi khi lớn', 'Không chạy được', 'Tốn RAM'], a: 1, e: 'Phát/nghe rải rác.' },
    { q: '@keyup.enter chạy khi:', o: ['Bất kỳ phím', 'Nhả phím Enter', 'Nhấn Ctrl', 'Rê chuột'], a: 1, e: 'Bí danh phím.' },
    { q: 'Hai component anh em cần dữ liệu chung, tốt nhất:', o: ['Event bus', 'Store (Vuex/Pinia)', 'localStorage', 'Props trực tiếp'], a: 1, e: 'Quản lý tập trung.' }
  ],
  match: [
    ['$emit', 'Con phát sự kiện'],
    ['@tên-sự-kiện', 'Cha lắng nghe'],
    ['EventBus', 'Kênh chung (new Vue())'],
    ['Props', 'Dữ liệu cha → con'],
    ['Vuex', 'Quản lý state tập trung']
  ]
}
);
