// Vue 3 Guide – Chương 4–6: watchers/lifecycle/refs, component cơ bản/props/events, attrs/slots/provide-inject/async/v-model.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vue3guide = BOOK_DATA.vue3guide || { chapters: [] };
const V2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vue3guide.chapters.push(

{
  n: 4,
  title: 'Watcher, vòng đời và template ref',
  intro: 'Khi cần <b>làm việc gì đó</b> mỗi khi state đổi (gọi API, ghi localStorage…) ta dùng <code>watch</code>/<code>watchEffect</code>. Khi cần chạy code vào đúng thời điểm của component ta dùng <b>hook vòng đời</b>. Khi cần chạm trực tiếp phần tử DOM hay component con ta dùng <b>template ref</b>.',
  sections: [
    { icon: '👀', title: 'watch: phản ứng với thay đổi', blocks: [
      { t: 'p', x: V2(`import { ref, watch } from 'vue'
const question = ref('')
const answer = ref('Hãy hỏi gì đó')

watch(question, async (newQ, oldQ) => {
  if (newQ.includes('?')) {
    answer.value = 'Đang nghĩ...'
    answer.value = await (await fetch('/api/answer?q=' + newQ)).text()
  }
})`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> computed là <b>công thức</b> (tính ra giá trị mới). Watch là <b>chuông báo</b>: “khi X đổi thì làm việc Y” – Y thường là <b>tác dụng phụ</b> (gọi mạng, ghi đĩa, đổi thứ khác).' },
      { t: 'table', head: ['Nguồn watch được', 'Ví dụ'], rows: [
        ['Một ref / computed', '<code>watch(x, cb)</code>'],
        ['Getter (hàm trả giá trị)', '<code>watch(() =&gt; x.value + y.value, cb)</code>'],
        ['Mảng nhiều nguồn', '<code>watch([x, () =&gt; y.value], ([nx, ny]) =&gt; ...)</code>'],
        ['Thuộc tính của reactive', '<b>Phải</b> dùng getter: <code>watch(() =&gt; obj.count, cb)</code> (không truyền <code>obj.count</code> trực tiếp)']
      ] },
      { t: 'list', items: [
        '<b>Deep:</b> watch một reactive object là <b>deep</b> ngầm định. Với getter trả object, chỉ chạy khi <i>thay cả object</i>; thêm <code>{ deep: true }</code> để theo dõi mọi thay đổi sâu (tốn kém với dữ liệu lớn; có thể truyền số = độ sâu, 3.5+).',
        '<b>Eager:</b> <code>{ immediate: true }</code> chạy callback ngay lần đầu.',
        '<b>Once (3.5+):</b> <code>{ once: true }</code> chỉ chạy một lần rồi tự dừng.',
        '<b>Flush timing:</b> mặc định callback chạy <b>trước</b> khi Vue cập nhật DOM. Cần đọc DOM đã cập nhật: <code>{ flush: \'post\' }</code> (hoặc <code>watchPostEffect</code>). <code>flush: \'sync\'</code> chạy ngay lập tức (dùng cẩn thận).',
        '<b>Dừng watcher:</b> tạo đồng bộ trong <code>setup</code> thì tự dừng khi component hủy. Tạo bất đồng bộ (sau <code>await</code>/<code>setTimeout</code>) phải tự gọi hàm <code>stop()</code> được trả về. (3.5+: có <code>pause()</code>/<code>resume()</code>.)'
      ] }
    ] },
    { icon: '⚡', title: 'watchEffect và dọn dẹp', blocks: [
      { t: 'p', x: V2(`watchEffect(async () => {
  const res = await fetch('/api/todos/' + id.value)  // phụ thuộc id.value
  data.value = await res.json()
})`) },
      { t: 'table', head: ['', 'watch', 'watchEffect'], rows: [
        ['Phụ thuộc', 'Khai báo rõ nguồn', 'Tự theo dõi mọi thứ <b>đọc đồng bộ</b> trong hàm'],
        ['Chạy lần đầu', 'Không (trừ khi immediate)', 'Luôn chạy ngay'],
        ['Giá trị cũ', 'Có (<code>oldValue</code>)', 'Không'],
        ['Hợp khi', 'Cần kiểm soát chính xác khi nào chạy', 'Nhiều phụ thuộc, gọn code']
      ] },
      { t: 'warn', x: '<b>watchEffect chỉ theo dõi phần đọc ĐỒNG BỘ.</b> Giá trị đọc sau <code>await</code> không được theo dõi (như <code>id.value</code> ở trên được đọc trước await thì OK).' },
      { t: 'list', items: [
        '<b>Dọn dẹp (cleanup):</b> khi watcher chạy lại hoặc bị hủy, cần hủy việc cũ (ví dụ <code>AbortController</code>, hủy timer). Dùng <code>onWatcherCleanup(fn)</code> (3.5+, gọi đồng bộ trong watcher) hoặc tham số <code>onCleanup</code>.',
        'Không nên watch thứ có thể thay bằng <b>computed</b>: nếu chỉ tính ra giá trị mới, hãy dùng computed.'
      ] }
    ] },
    { icon: '🔄', title: 'Vòng đời (lifecycle)', blocks: [
      { t: 'p', x: V2(`import { onMounted, onUpdated, onUnmounted } from 'vue'
onMounted(() => console.log('Component đã gắn vào DOM'))
onUnmounted(() => console.log('Dọn dẹp: hủy timer, listener'))`) },
      { t: 'table', head: ['Hook', 'Thời điểm', 'Dùng để'], rows: [
        ['<code>setup</code> / <code>&lt;script setup&gt;</code>', 'Tạo component', 'Khai báo state, đăng ký hook'],
        ['<code>onBeforeMount</code>', 'Trước khi render lần đầu', '—'],
        ['<code>onMounted</code>', 'Đã gắn vào DOM (các con cũng đã mounted)', 'Truy cập DOM, gọi API ban đầu, khởi tạo thư viện ngoài'],
        ['<code>onBeforeUpdate</code> / <code>onUpdated</code>', 'Trước / sau khi DOM cập nhật vì state đổi', 'Đọc DOM trước/sau (đừng đổi state tại đây)'],
        ['<code>onBeforeUnmount</code> / <code>onUnmounted</code>', 'Trước / sau khi gỡ', '<b>Dọn dẹp</b>: timer, event listener, kết nối'],
        ['<code>onErrorCaptured</code>', 'Bắt lỗi từ component con', 'Xử lý lỗi'],
        ['<code>onActivated</code> / <code>onDeactivated</code>', 'Với <code>&lt;KeepAlive&gt;</code>', 'Component được kích hoạt/ẩn']
      ] },
      { t: 'widget', name: 'v3-lifecycle', title: 'Thử: thứ tự hook khi gắn/gỡ cây component cha–con' },
      { t: 'key', x: '<b>Hook phải được gọi đồng bộ</b> trong <code>setup()</code>/<code>&lt;script setup&gt;</code> (Vue cần biết “component nào đang chạy”). Đăng ký sau <code>await</code> thì sai (riêng <code>&lt;script setup&gt;</code> có hỗ trợ thêm cho await ở cấp cao).' }
    ] },
    { icon: '📍', title: 'Template ref: chạm vào DOM/component', blocks: [
      { t: 'p', x: V2(`<script setup>
import { useTemplateRef, onMounted } from 'vue'
const input = useTemplateRef('my-input')   // 3.5+; khớp với ref="my-input"
onMounted(() => input.value.focus())
</script>
<template><input ref="my-input" /></template>`) },
      { t: 'list', items: [
        'Trước 3.5: khai báo <code>const input = ref(null)</code> cùng tên với thuộc tính <code>ref="input"</code>. Từ 3.5 khuyến nghị <code>useTemplateRef()</code> (tên ref có thể khác tên biến, IDE/TS hỗ trợ tốt hơn).',
        '<b>Chỉ truy cập được sau khi mount</b>; trước đó là <code>null</code>. Cũng <code>null</code> khi phần tử bị <code>v-if</code> ẩn. Dùng <code>input.value?.focus()</code>.',
        '<b>Ref trên component:</b> nhận về instance của component con. Với <code>&lt;script setup&gt;</code> component con mặc định <b>đóng</b>; muốn lộ ra thì dùng <code>defineExpose({ method })</code>.',
        '<b>Ref trong v-for:</b> cho ra <b>mảng</b> các phần tử; thứ tự mảng <b>không đảm bảo</b> khớp thứ tự nguồn.',
        '<b>Function ref:</b> <code>:ref="el =&gt; ..."</code> nhận phần tử (hoặc null khi gỡ), linh hoạt hơn.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> template ref là “lối thoát hiểm”. Nếu bạn làm được bằng state + props thì đừng dùng ref. Dùng hợp lý: focus ô nhập, đo kích thước, gọi API của thư viện ngoài (bản đồ, biểu đồ).' }
    ] }
  ],
  summary: [
    'watch = tác dụng phụ khi state đổi (nguồn rõ ràng, có giá trị cũ); watchEffect = tự theo dõi phần đọc đồng bộ; cần dọn thì dùng onWatcherCleanup.',
    'Hook chính: onMounted (truy cập DOM/gọi API) và onUnmounted (dọn dẹp); phải đăng ký đồng bộ trong setup.',
    'useTemplateRef(\'name\') lấy phần tử/component sau khi mount; component con cần defineExpose để lộ API.'
  ],
  cards: [
    ['watch vs computed?', 'Computed tính giá trị; watch làm tác dụng phụ.'],
    ['Watch thuộc tính reactive?', 'Dùng getter: () => obj.prop.'],
    ['Callback chạy sau DOM cập nhật?', 'flush: "post" hoặc watchPostEffect.'],
    ['Chạy watch ngay lần đầu?', 'immediate: true'],
    ['Dọn dẹp timer/listener?', 'onUnmounted / onWatcherCleanup'],
    ['Focus ô nhập khi mount?', 'useTemplateRef + onMounted']
  ],
  quiz: [
    { q: 'Để watch một thuộc tính của reactive object, bạn viết:', o: ['watch(obj.count, cb)', 'watch(() => obj.count, cb)', 'watch(obj.count.value, cb)', 'watch(count, cb) luôn'], a: 1, e: 'Truyền getter.' },
    { q: 'Hook thích hợp để dọn dẹp timer:', o: ['onMounted', 'onUnmounted', 'onUpdated', 'onBeforeMount'], a: 1, e: 'Dọn khi component bị gỡ.' },
    { q: 'watchEffect theo dõi phụ thuộc nào?', o: ['Mọi thứ trong file', 'Những giá trị phản ứng được đọc đồng bộ trong hàm', 'Chỉ giá trị trước await', 'Không theo dõi gì'], a: 1, e: 'Phần sau await không được theo dõi.' },
    { q: 'Template ref có giá trị khi nào?', o: ['Ngay trong setup', 'Sau khi component mounted', 'Chỉ trong onUnmounted', 'Luôn null'], a: 1, e: 'Trước khi mount là null.' }
  ],
  match: [
    ['immediate', 'Chạy callback ngay lần đầu'],
    ['once (3.5+)', 'Chạy một lần rồi dừng'],
    ['flush: post', 'Chạy sau khi DOM cập nhật'],
    ['defineExpose', 'Lộ API của component script setup'],
    ['onMounted', 'Truy cập DOM lần đầu']
  ]
},

{
  n: 5,
  title: 'Component cơ bản: props, events, đăng ký',
  intro: 'Component cho phép chia giao diện thành các mảnh dùng lại. Luật vàng của luồng dữ liệu: <b>props chảy xuống, events đi lên</b>. Chương này nói về định nghĩa/sử dụng component, khai báo props và events, đăng ký, và các lưu ý khi viết template trong DOM.',
  sections: [
    { icon: '🧩', title: 'Định nghĩa và dùng component', blocks: [
      { t: 'p', x: V2(`<!-- ButtonCounter.vue -->
<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>
<template>
  <button @click="count++">Bạn đã bấm {{ count }} lần.</button>
</template>

<!-- Cha dùng: -->
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>
<template>
  <ButtonCounter />
  <ButtonCounter />   <!-- mỗi cái có state riêng -->
</template>`) },
      { t: 'list', items: [
        'Trong <code>&lt;script setup&gt;</code>, component import vào được <b>dùng thẳng</b> trong template (không cần đăng ký).',
        'Mỗi lần dùng tạo <b>một instance riêng</b>, state không chia sẻ giữa các instance.',
        'Tên: file PascalCase (<code>ButtonCounter.vue</code>); trong template viết <code>&lt;ButtonCounter /&gt;</code> hoặc kebab-case <code>&lt;button-counter&gt;</code>.',
        '<b>Component động:</b> <code>&lt;component :is="tabComponent" /&gt;</code> chọn component theo biến (như tab).'
      ] }
    ] },
    { icon: '⬇️', title: 'Props: dữ liệu từ cha xuống con', blocks: [
      { t: 'p', x: V2(`<script setup>
const props = defineProps({
  title: String,
  likes: { type: Number, default: 0 },
  tags: { type: Array, required: true },
  status: { validator: v => ['ok', 'err'].includes(v) }
})
// TypeScript: defineProps<{ title: string; likes?: number }>()
</script>
<template><h4>{{ title }}</h4></template>

<!-- Cha: -->
<BlogPost title="Vue 3" :likes="42" :tags="['vue','js']" />`) },
      { t: 'table', head: ['Chủ đề', 'Cần nhớ'], rows: [
        ['Tên prop', 'Khai báo camelCase (<code>greetingMessage</code>); truyền kebab-case <code>greeting-message</code> hoặc camelCase đều được'],
        ['Tĩnh vs động', '<code>title="Vue"</code> (chuỗi) khác <code>:likes="42"</code> (số/biểu thức)'],
        ['Truyền nhiều prop', '<code>v-bind="post"</code> (object) trải thành nhiều prop'],
        ['<b>Một chiều</b> (one-way data flow)', 'Con <b>không được sửa</b> prop. Cần giá trị cục bộ → copy vào <code>ref</code> hoặc dùng <code>computed</code>'],
        ['Object/mảng prop', 'Sửa nội dung bên trong về kỹ thuật được nhưng là <b>thiết kế xấu</b> (gây khó theo dõi); thay vào đó emit sự kiện để cha sửa'],
        ['Validation', 'Kiểm tra lúc <b>dev</b> (cảnh báo console): <code>type</code>, <code>required</code>, <code>default</code>, <code>validator</code>'],
        ['<b>Boolean casting</b>', 'Prop kiểu Boolean: có mặt không giá trị (<code>&lt;Comp disabled /&gt;</code>) = <code>true</code>; vắng mặt = <code>false</code>'],
        ['<b>Reactive props destructure (3.5+)</b>', '<code>const { title, likes = 0 } = defineProps([...])</code> vẫn giữ phản ứng; compiler chuyển thành <code>props.title</code>']
      ] },
      { t: 'widget', name: 'v3-props-flow', title: 'Props xuống – events lên: cha giữ state, con báo cáo' },
      { t: 'warn', x: '<b>Đừng sửa prop trực tiếp</b> (<code>props.likes++</code> sẽ cảnh báo). Hai mẫu hợp lệ: (1) prop chỉ là giá trị khởi đầu → <code>const local = ref(props.initial)</code>; (2) cần biến đổi → <code>computed(() =&gt; props.size.trim())</code>.' }
    ] },
    { icon: '⬆️', title: 'Events: con báo lên cha', blocks: [
      { t: 'p', x: V2(`<!-- Con -->
<script setup>
const emit = defineEmits(['enlarge-text', 'submit'])
// có validate: defineEmits({ submit: (p) => p.email && p.password })
</script>
<template>
  <button @click="emit('enlarge-text', 0.1)">Phóng to</button>
</template>

<!-- Cha -->
<BlogPost @enlarge-text="(n) => (fontSize += n)" />`) },
      { t: 'list', items: [
        '<code>emit(tên, ...tham số)</code> gửi sự kiện; cha nghe bằng <code>@tên</code>. Dùng được modifier như <code>.once</code>.',
        '<b>Luôn khai báo</b> <code>defineEmits</code> để rõ API và để event không bị coi là “attribute thường” (nếu không khai báo, listener rơi vào <code>$attrs</code>).',
        'Sự kiện component <b>không nổi bọt</b> (bubble) như DOM event; nó chỉ lên cha trực tiếp.',
        'Đặt tên event kebab-case (<code>update-count</code>) hoặc camelCase đều được; kebab-case là quy ước ở template.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> con như nhân viên: <b>sếp (cha) đưa tài liệu xuống</b> (props, đọc không sửa), còn việc cần sếp quyết thì <b>gửi báo cáo lên</b> (emit). Nhân viên không tự sửa tài liệu của sếp.' }
    ] },
    { icon: '📛', title: 'Đăng ký component và lưu ý template trong DOM', blocks: [
      { t: 'table', head: ['Kiểu', 'Cách', 'Ghi chú'], rows: [
        ['Cục bộ', '<code>&lt;script setup&gt;</code>: import là dùng được; hoặc option <code>components</code>', '<b>Khuyến nghị</b>: tree-shaking, dễ truy vết'],
        ['Toàn cục', '<code>app.component(\'MyComp\', MyComp)</code>', 'Có ở mọi nơi; <b>không</b> tree-shake, phụ thuộc ngầm → hạn chế']
      ] },
      { t: 'list', items: [
        '<b>Viết template ngay trong HTML trang</b> chịu giới hạn parse của trình duyệt: <b>không phân biệt hoa thường</b> (dùng kebab-case: <code>:post-title</code>), <b>không tự đóng thẻ</b> (<code>&lt;my-comp&gt;&lt;/my-comp&gt;</code>), và một số phần tử chỉ cho phép thẻ con nhất định (<code>&lt;table&gt;</code> chỉ nhận <code>&lt;tr&gt;</code>; dùng <code>is="vue:my-row"</code> để vượt).',
        'Các giới hạn đó <b>không áp dụng</b> khi dùng SFC, chuỗi template, hay <code>&lt;script type="text/x-template"&gt;</code>.'
      ] }
    ] }
  ],
  summary: [
    'Component = đơn vị dùng lại; mỗi instance có state riêng; script setup cho phép dùng import trực tiếp.',
    'Props chảy xuống (con không sửa), events đi lên; luôn khai báo defineProps/defineEmits.',
    'Đăng ký cục bộ là mặc định tốt; template trong DOM có hạn chế về hoa thường, thẻ tự đóng, vị trí phần tử.'
  ],
  cards: [
    ['Luồng dữ liệu chuẩn?', 'Props xuống, events lên.'],
    ['Con có sửa được prop?', 'Không (one-way). Copy vào ref hoặc computed.'],
    ['Khai báo props/emits?', 'defineProps / defineEmits'],
    ['Boolean prop có mặt không giá trị?', 'true.'],
    ['Component chọn theo biến?', '&lt;component :is&gt;'],
    ['Đăng ký nên dùng?', 'Cục bộ (import).']
  ],
  quiz: [
    { q: 'Muốn con báo cho cha biết có việc xảy ra, dùng:', o: ['Sửa prop', 'emit', 'v-html', 'provide'], a: 1, e: 'emit gửi sự kiện lên.' },
    { q: 'Thuộc tính nào đúng với “one-way data flow”?', o: ['Con sửa prop thoải mái', 'Cập nhật prop của cha chảy xuống con, con không ghi ngược', 'Chỉ dùng được với số', 'Chỉ dùng trong Options API'], a: 1, e: 'Cha→con, con không sửa trực tiếp.' },
    { q: 'Đăng ký toàn cục bằng:', o: ['app.component()', 'defineProps', 'ref()', 'emit'], a: 0, e: 'Nhưng hạn chế dùng.' },
    { q: 'Từ 3.5, destructure defineProps():', o: ['Mất phản ứng', 'Vẫn giữ phản ứng nhờ compiler', 'Báo lỗi', 'Chỉ cho TypeScript'], a: 1, e: 'Compiler chuyển thành props.x.' }
  ],
  match: [
    ['defineProps', 'Nhận dữ liệu từ cha'],
    ['defineEmits', 'Khai báo sự kiện gửi lên'],
    ['&lt;component :is&gt;', 'Component động'],
    ['validator', 'Kiểm tra giá trị prop khi dev'],
    ['app.component', 'Đăng ký toàn cục']
  ]
},

{
  n: 6,
  title: 'Component nâng cao: attrs, slots, provide/inject, v-model, async',
  intro: 'Sau props/events, bạn cần: cách thuộc tính “rơi xuyên” component (<code>$attrs</code>), <b>slot</b> để chèn nội dung từ ngoài vào, <b>provide/inject</b> để truyền sâu nhiều tầng, <b>v-model</b> cho component và component <b>tải bất đồng bộ</b>.',
  sections: [
    { icon: '💧', title: 'Attribute kế thừa (fallthrough attrs)', blocks: [
      { t: 'p', x: V2(`<!-- MyButton.vue chỉ có 1 phần tử gốc -->
<template><button>Bấm</button></template>

<!-- Dùng: class và @click "rơi xuyên" xuống <button> -->
<MyButton class="large" @click="doIt" />
<!-- kết quả: <button class="large">Bấm</button> + listener click -->`) },
      { t: 'list', items: [
        'Thuộc tính/listener truyền vào component mà <b>không</b> được khai báo là prop/emit sẽ <b>tự gắn vào phần tử gốc</b>. <code>class</code>, <code>style</code> được <b>gộp</b>; <code>v-on</code> cũng được nối thêm.',
        '<b>Component lồng nhau:</b> nếu gốc của con lại là component khác thì attrs tiếp tục rơi xuống.',
        '<b>Tắt kế thừa:</b> <code>defineOptions({ inheritAttrs: false })</code>; dùng <code>$attrs</code> (hoặc <code>useAttrs()</code>) gắn vào phần tử mong muốn: <code>&lt;input v-bind="$attrs" /&gt;</code>.',
        '<b>Nhiều phần tử gốc (multi-root):</b> không tự rơi xuyên → phải gắn <code>v-bind="$attrs"</code> thủ công, nếu không Vue cảnh báo.',
        'Truy cập attrs trong JS: <code>const attrs = useAttrs()</code> (không phản ứng; cần phản ứng thì dùng prop).'
      ] }
    ] },
    { icon: '🔌', title: 'Slots: chèn nội dung từ ngoài', blocks: [
      { t: 'p', x: V2(`<!-- FancyButton.vue -->
<button class="fancy"><slot>Nội dung mặc định</slot></button>

<!-- Dùng -->
<FancyButton>Bấm tôi!</FancyButton>

<!-- Slot có tên -->
<BaseLayout>
  <template #header><h1>Tiêu đề</h1></template>   <!-- # = v-slot: -->
  <template #default><p>Nội dung chính</p></template>
  <template #footer>Chân trang</template>
</BaseLayout>`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> slot như <b>ô trống trên khuôn bánh</b>: component định hình cái khuôn, người dùng quyết định nhét nhân gì vào ô. Slot có tên = khuôn có nhiều ô đánh dấu.' },
      { t: 'list', items: [
        '<b>Phạm vi biên dịch (render scope):</b> nội dung slot được viết ở cha nên chỉ thấy dữ liệu của <b>cha</b>, không thấy dữ liệu của con.',
        '<b>Nội dung dự phòng (fallback):</b> văn bản giữa <code>&lt;slot&gt;...&lt;/slot&gt;</code> hiện khi cha không cung cấp.',
        '<b>Slot có điều kiện:</b> <code>$slots.footer</code> để chỉ render khung khi cha có truyền.',
        '<b>Tên slot động:</b> <code>&lt;template #[dynamicName]&gt;</code>.',
        '<b>Scoped slot:</b> con <b>đưa dữ liệu ra</b> cho cha dùng: con viết <code>&lt;slot :item="item" :index="i" /&gt;</code>, cha nhận <code>&lt;template #default="{ item, index }"&gt;</code>. Đây là cách làm component “danh sách cho phép tùy biến cách hiển thị từng dòng”.',
        '<b>Renderless component:</b> chỉ đóng gói logic và đưa mọi thứ qua scoped slot; ngày nay thường thay bằng <b>composable</b> (chương 7).'
      ] }
    ] },
    { icon: '🛰️', title: 'Provide / Inject: truyền sâu', blocks: [
      { t: 'p', x: V2(`// Cha (hoặc tổ tiên bất kỳ)
import { provide, ref } from 'vue'
const message = ref('xin chào')
provide('message', message)          // key, value (nên là ref để giữ phản ứng)

// Hậu duệ bất kỳ, nhiều tầng bên dưới
import { inject } from 'vue'
const message = inject('message', 'mặc định')   // tham số 2: giá trị dự phòng`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> thay vì chuyền tờ giấy (prop) qua từng tầng lớp (<b>prop drilling</b>), cha dán thông báo lên <b>bảng tin chung</b> (provide); bất kỳ ai ở bên dưới muốn đọc thì tự đến đọc (inject).' },
      { t: 'list', items: [
        '<b>App-level provide:</b> <code>app.provide(key, value)</code> cho mọi component trong app (thường dùng khi viết plugin).',
        '<b>Phản ứng:</b> provide <b>ref/reactive</b> để con thấy thay đổi. Nên đặt logic sửa đổi cùng chỗ với state được provide (provide cả hàm <code>updateMessage</code>), và bọc <code>readonly()</code> nếu muốn con không sửa trực tiếp.',
        '<b>Symbol key:</b> dùng <code>Symbol()</code> (export từ một file riêng) để tránh trùng khóa trong dự án lớn/thư viện.',
        'Provide/inject chỉ chạy <b>từ tổ tiên xuống hậu duệ</b>, không phải ngang hàng; khi cần chia sẻ rộng hơn hãy dùng store (Pinia – chương 9).'
      ] }
    ] },
    { icon: '🔁', title: 'v-model trên component và defineModel', blocks: [
      { t: 'p', x: V2(`<!-- Con -->
<script setup>
const model = defineModel()            // 3.4+: ref hai chiều với cha
</script>
<template><input v-model="model" /></template>

<!-- Cha -->
<CustomInput v-model="searchText" />

<!-- Tên khác, nhiều v-model, modifier -->
<UserName v-model:first-name="first" v-model:last-name="last" />
// con: const first = defineModel('firstName'); const [text, mods] = defineModel({ set(v){ return mods.capitalize ? v.toUpperCase() : v } })`) },
      { t: 'list', items: [
        '<b>Bên dưới:</b> <code>defineModel()</code> tạo một prop <code>modelValue</code> + sự kiện <code>update:modelValue</code>. Cha viết <code>v-model="x"</code> = <code>:modelValue="x" @update:modelValue="x = $event"</code>.',
        '<b>Đối số:</b> <code>v-model:title</code> ↔ prop <code>title</code> + event <code>update:title</code>.',
        '<b>Nhiều v-model</b> trên cùng một component, mỗi cái một đối số.',
        '<b>Modifier tự định nghĩa:</b> <code>v-model.capitalize</code> → con đọc modifier qua giá trị trả về thứ hai của <code>defineModel</code>.',
        'Trước 3.4 phải tự khai báo prop <code>modelValue</code> + emit <code>update:modelValue</code> (vẫn dùng được).'
      ] }
    ] },
    { icon: '⏳', title: 'Component bất đồng bộ', blocks: [
      { t: 'p', x: V2(`import { defineAsyncComponent } from 'vue'
const AdminPage = defineAsyncComponent(() => import('./AdminPage.vue'))

const Lazy = defineAsyncComponent({
  loader: () => import('./Heavy.vue'),
  loadingComponent: Spinner, delay: 200,     // chờ 200ms mới hiện loading
  errorComponent: ErrorBox, timeout: 3000
})`) },
      { t: 'list', items: [
        '<b>Mục đích:</b> chia nhỏ bundle (<b>code splitting</b>), chỉ tải component khi cần – ví dụ trang quản trị.',
        '<b>Lazy hydration (3.5+, SSR):</b> trì hoãn “kích hoạt” component phía client: <code>hydrateOnIdle</code>, <code>hydrateOnVisible</code>, <code>hydrateOnMediaQuery</code>, <code>hydrateOnInteraction</code>.',
        'Dùng cùng <code>&lt;Suspense&gt;</code> để quản lý trạng thái chờ (chương 8).'
      ] }
    ] }
  ],
  summary: [
    'Attrs không khai báo rơi xuyên vào phần tử gốc (class/style gộp); tắt bằng inheritAttrs:false + v-bind="$attrs".',
    'Slot cho phép tùy biến nội dung (tên, fallback, scoped); provide/inject chuyển dữ liệu qua nhiều tầng (nên provide ref).',
    'defineModel() đơn giản hóa v-model trên component; defineAsyncComponent để chia bundle.'
  ],
  cards: [
    ['Attribute rơi xuyên?', 'Gắn lên phần tử gốc của con.'],
    ['Slot scoped?', 'Con truyền dữ liệu ra cho cha dùng trong slot.'],
    ['Prop drilling giải bằng?', 'provide/inject (hoặc store).'],
    ['v-model trên component?', 'defineModel() (3.4+).'],
    ['Tắt kế thừa attrs?', 'defineOptions({ inheritAttrs: false }).'],
    ['Tải component khi cần?', 'defineAsyncComponent + import().']
  ],
  quiz: [
    { q: 'Nội dung trong slot được biên dịch với phạm vi của:', o: ['Component con', 'Component cha (nơi viết nội dung)', 'App', 'Toàn cục'], a: 1, e: 'Slot truy cập dữ liệu của cha.' },
    { q: 'Muốn con đưa dữ liệu cho nội dung slot, dùng:', o: ['Scoped slot', 'Fallback', 'v-html', 'emit'], a: 0, e: '&lt;slot :item="item" /&gt;.' },
    { q: 'Multi-root component và attrs:', o: ['Tự rơi vào phần tử đầu', 'Không tự rơi; cần v-bind="$attrs"', 'Báo lỗi biên dịch', 'Rơi vào tất cả'], a: 1, e: 'Phải chỉ rõ.' },
    { q: 'defineModel() dựng trên:', o: ['prop modelValue + update:modelValue', 'Pinia', 'provide/inject', 'watch'], a: 0, e: 'Đường tắt của prop + event.' }
  ],
  match: [
    ['$attrs', 'Thuộc tính rơi xuyên'],
    ['#header', 'Slot có tên'],
    ['provide/inject', 'Truyền dữ liệu qua nhiều tầng'],
    ['defineModel', 'v-model cho component'],
    ['defineAsyncComponent', 'Tải component lười']
  ]
}
);
