// Vue 3 Guide – Chương 10–13: TypeScript, best practices, chủ đề nâng cao, bản đồ tra cứu.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vue3guide = BOOK_DATA.vue3guide || { chapters: [] };
const V4 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vue3guide.chapters.push(

{
  n: 10,
  title: 'Vue với TypeScript',
  intro: 'Vue 3 được viết bằng TypeScript và hỗ trợ kiểu rất tốt. Bạn khai báo kiểu cho props, emits, ref, computed, provide/inject, template ref ngay trong <code>&lt;script setup lang="ts"&gt;</code>; công cụ (Volar + <code>vue-tsc</code>) kiểm lỗi cả trong template.',
  sections: [
    { icon: '🧭', title: 'Bắt đầu', blocks: [
      { t: 'list', items: [
        'Tạo dự án với TypeScript: trả lời <b>Yes</b> ở câu hỏi “Add TypeScript?” của <code>create-vue</code>. Dùng <code>&lt;script setup lang="ts"&gt;</code> trong SFC.',
        '<b>IDE:</b> VS Code + <b>Vue - Official</b> (bật kiểm kiểu cả template).',
        '<b>Kiểm kiểu bằng dòng lệnh:</b> <code>vue-tsc --noEmit</code> (vì <code>tsc</code> thường không hiểu file .vue). Vite chỉ <b>chuyển</b> TS thành JS chứ không kiểm kiểu → nên thêm bước <code>vue-tsc</code> vào CI.',
        'Template có thể <b>kiểm kiểu</b> (prop sai kiểu, event sai tham số, biến không tồn tại bị báo lỗi).'
      ] }
    ] },
    { icon: '🧱', title: 'Kiểu cho props, emits, ref, computed', blocks: [
      { t: 'p', x: V4(`<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import type { Ref } from 'vue'

// Props: khai báo bằng generic (dựa trên kiểu)
interface Props { title: string; likes?: number; tags?: string[] }
const props = withDefaults(defineProps<Props>(), { likes: 0, tags: () => [] })
// 3.5+: const { title, likes = 0 } = defineProps<Props>()

// Emits: kiểu cho từng sự kiện
const emit = defineEmits<{
  change: [id: number]            // cú pháp tuple (3.3+)
  update: [value: string]
}>()

// ref: suy luận kiểu; nếu cần nhiều kiểu thì ghi rõ
const year = ref<string | number>('2020')
const user = ref<{ id: number; name: string } | null>(null)

// computed: kiểu suy luận từ getter (hoặc ghi rõ)
const double = computed<number>(() => (props.likes ?? 0) * 2)
</script>`) },
      { t: 'table', head: ['Chủ đề', 'Cách làm'], rows: [
        ['<b>Props</b>', '<code>defineProps&lt;Props&gt;()</code>; mặc định bằng <code>withDefaults</code> (hoặc destructure + giá trị mặc định ở 3.5+)'],
        ['<b>Emits</b>', '<code>defineEmits&lt;{ change: [id: number] }&gt;()</code>'],
        ['<b>ref</b>', 'Suy luận kiểu; <code>ref&lt;T | null&gt;(null)</code> cho giá trị có thể rỗng'],
        ['<b>reactive</b>', 'Kiểu tự suy luận từ object; ghi bằng <code>interface</code> khi cần'],
        ['<b>Event handler</b>', 'Tham số <code>(e: Event)</code>; ép kiểu <code>(e.target as HTMLInputElement).value</code>'],
        ['<b>provide/inject</b>', '<code>InjectionKey&lt;T&gt;</code> để key mang kiểu: <code>const key = Symbol() as InjectionKey&lt;string&gt;</code>'],
        ['<b>Template ref</b>', '<code>useTemplateRef&lt;HTMLInputElement&gt;(\'el\')</code> (3.5+) hoặc <code>ref&lt;HTMLInputElement | null&gt;(null)</code>'],
        ['<b>Component ref</b>', '<code>ref&lt;InstanceType&lt;typeof MyComp&gt; | null&gt;(null)</code>'],
        ['<b>Generic component</b>', '<code>&lt;script setup lang="ts" generic="T extends string | number"&gt;</code>'],
        ['<b>defineModel</b>', '<code>const model = defineModel&lt;string&gt;()</code>']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> TypeScript chỉ tồn tại lúc <b>viết/kiểm code</b>; trình duyệt chạy JavaScript. Với Vue, giá trị lớn nhất: bắt lỗi sai tên prop/sai kiểu sự kiện trước khi chạy, và gợi ý code chính xác khi bạn gõ.' },
      { t: 'widget', name: 'v3-ts-quiz', title: 'Ghép tình huống với cách khai báo kiểu đúng' }
    ] },
    { icon: '⚙️', title: 'Options API với TypeScript (tham khảo)', blocks: [
      { t: 'list', items: [
        'Bọc component bằng <code>defineComponent()</code> để suy luận kiểu; kiểu cho <code>data()</code> được suy luận từ giá trị trả về; props khai báo bằng <code>PropType</code> cho object/mảng phức tạp (<code>Object as PropType&lt;Book&gt;</code>).',
        'Options API có <b>nhiều giới hạn suy luận kiểu</b> so với Composition API (do dựa vào <code>this</code>). Dự án mới dùng TS nên chọn Composition API.'
      ] }
    ] }
  ],
  summary: [
    'Dùng <code>&lt;script setup lang="ts"&gt;</code>; defineProps/defineEmits nhận kiểu qua generic; vue-tsc để kiểm kiểu (Vite không kiểm).',
    'ref/computed tự suy luận; ghi rõ khi có union/null; InjectionKey cho provide/inject; useTemplateRef cho phần tử DOM.',
    'Composition API hợp TypeScript hơn Options API.'
  ],
  cards: [
    ['Kiểm kiểu file .vue?', 'vue-tsc (Vite không kiểm).'],
    ['Khai báo kiểu props?', 'defineProps&lt;Props&gt;()'],
    ['Giá trị mặc định?', 'withDefaults hoặc destructure (3.5+).'],
    ['Key provide/inject có kiểu?', 'InjectionKey&lt;T&gt;'],
    ['ref có thể null?', 'ref&lt;T | null&gt;(null)'],
    ['Component generic?', 'generic="T" trên script setup.']
  ],
  quiz: [
    { q: 'Công cụ nào kiểm kiểu cho file .vue ở dòng lệnh?', o: ['tsc', 'vue-tsc', 'vite build', 'eslint'], a: 1, e: 'vue-tsc hiểu SFC.' },
    { q: 'Cách gán kiểu cho props:', o: ['defineProps&lt;Props&gt;()', 'props: any', 'ref&lt;Props&gt;()', 'provide(Props)'], a: 0, e: 'Dựa trên kiểu (type-based).' },
    { q: 'Để key provide/inject có kiểu:', o: ['InjectionKey&lt;T&gt;', 'any', 'string', 'PropType'], a: 0, e: 'Symbol as InjectionKey.' },
    { q: 'Vite khi build TypeScript:', o: ['Kiểm kiểu đầy đủ', 'Chỉ chuyển sang JS, không kiểm kiểu', 'Từ chối build nếu sai kiểu', 'Không hỗ trợ TS'], a: 1, e: 'Cần chạy vue-tsc riêng.' }
  ],
  match: [
    ['defineProps&lt;T&gt;()', 'Kiểu cho props'],
    ['defineEmits&lt;...&gt;()', 'Kiểu cho sự kiện'],
    ['InjectionKey', 'Kiểu cho provide/inject'],
    ['withDefaults', 'Mặc định cho props'],
    ['vue-tsc', 'Kiểm kiểu SFC']
  ]
},

{
  n: 11,
  title: 'Thực hành tốt: triển khai, hiệu năng, tiếp cận, bảo mật',
  intro: 'Đưa app lên production và giữ nó nhanh, dùng được với mọi người, và an toàn. Phần này tóm các lời khuyên chính thức về <b>production deployment</b>, <b>performance</b>, <b>accessibility</b> và <b>security</b>.',
  sections: [
    { icon: '🚢', title: 'Triển khai production', blocks: [
      { t: 'list', items: [
        '<b>Build:</b> <code>npm run build</code> → <code>dist/</code>. Mặc định đã bật bản <b>production</b> của Vue (nhỏ, nhanh, bỏ cảnh báo dev). Nếu dùng CDN thì nhớ nạp bản <code>*.prod.js</code>.',
        '<b>Theo dõi lỗi:</b> <code>app.config.errorHandler</code> gửi lỗi tới dịch vụ như Sentry.',
        'Kiểm tra bundle, bật nén (gzip/brotli) và cache lâu cho file có hash.',
        'Nếu dùng router history mode, cấu hình server <b>trả về index.html</b> cho mọi đường dẫn không phải file.'
      ] }
    ] },
    { icon: '⚡', title: 'Hiệu năng', blocks: [
      { t: 'p', x: 'Hai loại: <b>tải trang</b> (LCP, tốc độ có nội dung) và <b>cập nhật</b> (phản hồi khi người dùng thao tác).' },
      { t: 'table', head: ['Nhóm', 'Kỹ thuật'], rows: [
        ['Kiến trúc', 'Chọn đúng: SSR/SSG cho nội dung; SPA cho ứng dụng tương tác; không SPA hóa trang tĩnh'],
        ['Kích thước bundle', 'Dùng build step + tree-shaking; <b>cảnh giác thư viện nặng</b>; trang chỉ cần chút tương tác có thể dùng petite-vue'],
        ['Chia nhỏ mã', '<b>Code splitting</b>: <code>import()</code> cho route và <code>defineAsyncComponent</code>'],
        ['<b>Ổn định props</b>', 'Con chỉ render lại khi <b>prop thật sự đổi</b>. Truyền <code>:active="id === activeId"</code> (boolean) thay vì <code>:active-id="activeId"</code> cho mọi con của v-for'],
        ['<code>v-once</code>', 'Render một lần rồi bỏ qua mọi cập nhật'],
        ['<code>v-memo</code>', 'Bỏ qua cập nhật một phần của cây khi mảng phụ thuộc không đổi (dùng cho danh sách lớn, hiếm khi cần)'],
        ['Computed ổn định (3.4+)', 'Computed chỉ kích hoạt nơi dùng khi <b>giá trị đổi</b>; nên trả boolean thay vì object mới'],
        ['<b>Danh sách rất dài</b>', '<b>Virtualization</b> (chỉ render phần đang thấy): vue-virtual-scroller…'],
        ['Cấu trúc bất biến lớn', '<code>shallowRef</code>/<code>shallowReactive</code> để bỏ phản ứng sâu; <code>markRaw</code> cho object không cần theo dõi'],
        ['Tránh trừu tượng thừa', 'Mỗi component có chi phí; đừng tách component cho mỗi nút nhỏ trong danh sách hàng nghìn dòng']
      ] },
      { t: 'key', x: '<b>Đo trước khi tối ưu.</b> Dùng Chrome DevTools Performance, Vue DevTools (Performance/Timeline), PageSpeed Insights. Hầu hết app Vue đủ nhanh nếu tránh các lỗi lớn (thư viện nặng, danh sách khổng lồ không ảo hóa, state sâu không cần thiết).' }
    ] },
    { icon: '♿', title: 'Tiếp cận (accessibility – a11y)', blocks: [
      { t: 'list', items: [
        '<b>Liên kết “Bỏ qua”</b> (skip link) ở đầu trang để người dùng bàn phím nhảy tới nội dung chính.',
        '<b>Cấu trúc ngữ nghĩa:</b> dùng đúng thẻ <code>&lt;header&gt; &lt;nav&gt; &lt;main&gt; &lt;h1..h6&gt; &lt;button&gt;</code>; không dùng <code>&lt;div&gt;</code> làm nút. Landmark giúp trình đọc màn hình điều hướng.',
        '<b>Form:</b> mỗi ô nhập có <code>&lt;label&gt;</code> (liên kết bằng <code>for</code>/<code>id</code> hoặc <code>aria-label</code>); báo lỗi bằng <code>aria-live</code>/<code>aria-describedby</code>.',
        '<b>Ảnh:</b> <code>alt</code> mô tả nội dung (rỗng <code>alt=""</code> nếu chỉ trang trí).',
        '<b>Bàn phím:</b> mọi chức năng dùng được bằng phím, <b>focus nhìn thấy rõ</b>, thứ tự tab hợp lý; component động (modal) phải <b>quản lý focus</b> (đưa focus vào khi mở, trả lại khi đóng).',
        '<b>Màu & tương phản:</b> đủ độ tương phản; đừng chỉ dựa vào màu để truyền đạt thông tin.',
        'Công cụ: <b>axe</b>, <b>eslint-plugin-vuejs-accessibility</b>, Lighthouse.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> a11y là làm web dùng được cho người <b>không dùng chuột, không nhìn rõ màn hình, hay chỉ nghe</b>. Làm tốt cũng giúp SEO và trải nghiệm chung (ví dụ phím tắt, tương phản dễ đọc ngoài nắng).' }
    ] },
    { icon: '🔒', title: 'Bảo mật', blocks: [
      { t: 'table', head: ['Rủi ro', 'Lời khuyên'], rows: [
        ['<b>Báo cáo lỗ hổng</b>', 'Gửi riêng cho đội Vue, không công khai trước'],
        ['<b>Quy tắc số 1: không bao giờ dùng template không tin cậy</b>', 'Dùng nội dung do người dùng cung cấp làm <b>template</b> Vue = thực thi JS tùy ý (code injection). Chỉ dùng template bạn viết/biên dịch sẵn'],
        ['<b>HTML injection / XSS</b>', 'Nội suy <code>{{ }}</code> tự escape. <b><code>v-html</code>, <code>innerHTML</code> với dữ liệu người dùng là nguy hiểm</b> → làm sạch bằng thư viện (như DOMPurify) hoặc tránh'],
        ['<b>URL injection</b>', 'Với <code>:href="userUrl"</code> có thể là <code>javascript:...</code> → kiểm tra/làm sạch URL (ví dụ chỉ cho <code>http/https</code>)'],
        ['<b>Style injection</b>', 'Đừng gắn trực tiếp chuỗi style từ người dùng vào <code>:style</code> (clickjacking); chỉ cho phép thuộc tính cụ thể'],
        ['<b>Phần tử nguy hiểm</b>', '<code>&lt;script&gt;</code>, <code>&lt;style&gt;</code> trong template; thuộc tính <code>on*</code> từ dữ liệu người dùng'],
        ['<b>Phía backend</b>', 'Vue chỉ lo phía client; CSRF, xác thực, phân quyền, validate phải làm ở server. Dùng HTTPS, cookie <code>HttpOnly</code>/<code>SameSite</code>']
      ] },
      { t: 'warn', x: 'Nhớ: kiểm tra quyền ở <b>client</b> (ví dụ ẩn nút admin, route guard) chỉ là <b>UX</b>, không phải bảo mật. Kẻ xấu gọi API trực tiếp, nên server phải kiểm tra lại mọi thứ.' }
    ] }
  ],
  summary: [
    'Build production, bắt lỗi bằng errorHandler, cấu hình server cho history mode.',
    'Hiệu năng: đo trước; giảm bundle, code splitting, props ổn định, virtualization, shallowRef cho dữ liệu lớn bất biến.',
    'a11y: ngữ nghĩa, label, bàn phím, tương phản. Bảo mật: không template từ người dùng, cẩn thận v-html/URL/style; quyền hạn thật ở server.'
  ],
  cards: [
    ['Quy tắc bảo mật số 1?', 'Không bao giờ dùng template từ người dùng.'],
    ['{{ }} có an toàn?', 'Có (tự escape); v-html thì không.'],
    ['Danh sách quá dài?', 'Virtualization.'],
    ['Dữ liệu lớn bất biến?', 'shallowRef / markRaw'],
    ['Ổn định props là gì?', 'Truyền giá trị ít đổi (boolean) để con không render thừa.'],
    ['Route guard là bảo mật?', 'Không, chỉ UX; server phải kiểm tra.']
  ],
  quiz: [
    { q: 'Điều nào gây nguy cơ XSS?', o: ['{{ userInput }}', 'v-html="userInput"', ':class', 'v-model'], a: 1, e: 'v-html chèn HTML thô.' },
    { q: 'Tối ưu hiệu năng nên bắt đầu bằng:', o: ['v-memo mọi nơi', 'Đo (profile)', 'Chuyển hết sang TS', 'Xóa key'], a: 1, e: 'Đo rồi mới tối ưu.' },
    { q: 'Dùng nội dung người dùng làm template Vue:', o: ['An toàn nếu có key', 'Cho phép thực thi JS tùy ý (không bao giờ làm)', 'Cần thêm scoped', 'Chỉ nguy hiểm khi SSR'], a: 1, e: 'Đó là code injection.' },
    { q: 'Với router history mode cần:', o: ['Server trả index.html cho mọi đường dẫn', 'Tắt SSR', 'Chạy trên hash', 'Không cần gì'], a: 0, e: 'Nếu không, F5 trên /users/5 sẽ 404.' }
  ],
  match: [
    ['v-once', 'Render một lần'],
    ['shallowRef', 'Bỏ phản ứng sâu'],
    ['Code splitting', 'Tải mã theo nhu cầu'],
    ['aria-label', 'Nhãn cho trình đọc màn hình'],
    ['DOMPurify', 'Làm sạch HTML']
  ]
},

{
  n: 12,
  title: 'Nâng cao: reactivity sâu, cơ chế render, render function, web components',
  intro: 'Phần “mở nắp capo”: Vue theo dõi dữ liệu như thế nào, template biến thành DOM ra sao, khi nào dùng render function/JSX, và cách đưa Vue vào Web Components. Đọc để hiểu bản chất, không cần thuộc lòng.',
  sections: [
    { icon: '🔬', title: 'Reactivity hoạt động thế nào', blocks: [
      { t: 'list', items: [
        '<b>Effect & phụ thuộc:</b> một hàm có tác dụng phụ (cập nhật DOM) phụ thuộc vào vài giá trị. Cần cơ chế <b>tự biết</b> khi giá trị đổi để chạy lại hàm. JavaScript thường không làm được → Vue dùng <b>Proxy</b> (reactive) và <b>getter/setter</b> (ref).',
        '<b>Track & trigger:</b> khi effect chạy và <b>đọc</b> thuộc tính → Vue <b>ghi nhận</b> (track: “effect này phụ thuộc thuộc tính kia”). Khi thuộc tính bị <b>ghi</b> → Vue <b>kích hoạt</b> (trigger) mọi effect đã đăng ký.',
        '<b>Mất kết nối:</b> gán thuộc tính ra biến cục bộ (<code>let n = state.count</code>) cắt khỏi cơ chế vì không còn đi qua trap get/set.',
        '<b>Danh tính proxy:</b> <code>reactive(obj) !== obj</code>. Luôn dùng proxy.',
        '<b>Debug:</b> <code>onRenderTracked</code>/<code>onRenderTriggered</code> (component), <code>computed(..., { onTrack, onTrigger })</code> và <code>watch(..., { onTrack, onTrigger })</code> cho thấy chính xác cái gì kích hoạt.',
        '<b>Tích hợp ngoài:</b> dữ liệu bất biến (Immer), máy trạng thái (XState), RxJS – gói vào <code>shallowRef</code> rồi cập nhật bằng cách <b>thay giá trị</b>.',
        '<b>Liên hệ Signals:</b> ref của Vue về ý tưởng tương tự “signal” của Solid/Angular/Preact/Qwik: nguồn dữ liệu phản ứng chi tiết. Khác biệt chủ yếu ở cú pháp (<code>.value</code> vs <code>()</code>) và việc có/không tự unwrap.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> Vue như một <b>thư ký tỉ mỉ</b>: mỗi lần bạn “đọc” một con số để làm việc, thư ký ghi sổ “việc này cần số đó”. Khi số đổi, thư ký mở sổ và gọi đúng những việc liên quan làm lại – không làm lại cả công ty.' }
    ] },
    { icon: '🖼️', title: 'Cơ chế render', blocks: [
      { t: 'steps', items: [
        '<b>Biên dịch (compile):</b> template → <b>render function</b> (thường ở lúc build).',
        '<b>Mount:</b> chạy render function, tạo <b>DOM ảo</b> (cây vnode: object JS mô tả giao diện), rồi tạo DOM thật.',
        '<b>Patch (cập nhật):</b> state đổi → chạy lại render, được cây vnode mới → <b>so sánh</b> với cây cũ và chỉ cập nhật phần DOM khác biệt.'
      ] },
      { t: 'key', x: '<b>Compiler-informed Virtual DOM:</b> vì template là tĩnh theo cấu trúc, trình biên dịch gợi ý cho runtime: <b>Cache static</b> (cây con tĩnh tạo một lần, tái dùng), <b>Patch flags</b> (đánh dấu phần tử chỉ có <code>class</code> đổi, chỉ có text đổi… để so sánh đúng chỗ), <b>Tree flattening</b> (dồn các nút động vào một mảng phẳng, bỏ qua vùng tĩnh). Kết quả: update nhanh hơn VDOM “mù” và hydration có thể “một phần”.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> vì thế Vue khuyên <b>ưu tiên template</b> hơn render function tay: template cho compiler nhiều thông tin để tối ưu mà bạn không phải làm gì.' }
    ] },
    { icon: '🧑‍💻', title: 'Render function và JSX', blocks: [
      { t: 'p', x: V4(`import { h, ref } from 'vue'
export default {
  props: ['message'],
  setup(props) {
    const count = ref(0)
    return () => h('div', { class: 'box' }, [           // h(type, props, children)
      h('p', props.message),
      h('button', { onClick: () => count.value++ }, 'Bấm ' + count.value)
    ])
  }
}
// JSX: return () => <div class="box"><p>{props.message}</p></div>`) },
      { t: 'list', items: [
        '<b><code>h()</code></b> (hyperscript) tạo vnode: <code>h(type, props, children)</code>; có thể trả về mảng, chuỗi.',
        '<b>Khi nào dùng:</b> cần logic động mà template khó diễn đạt (tạo tiêu đề h1–h6 theo cấp, component “khung” rất động). Hầu hết trường hợp dùng template là đủ.',
        '<b>JSX/TSX</b> được hỗ trợ qua plugin Vite (chọn “JSX Support” khi tạo dự án).',
        '<b>Functional component:</b> hàm thuần nhận <code>(props, ctx)</code> trả về vnode, không có state/vòng đời riêng; dùng cho phần trình bày nhỏ.',
        'Slot trong render function: <code>slots.default?.()</code>; vnode không được dùng lại giữa các lần render (phải tạo mới).'
      ] }
    ] },
    { icon: '🧱', title: 'Web Components (Custom Elements)', blocks: [
      { t: 'p', x: V4(`import { defineCustomElement } from 'vue'
const MyVueElement = defineCustomElement({
  props: { name: String },
  emits: {},
  styles: ['/* css nằm trong shadow DOM */'],
  template: '<p>Xin chào {{ name }}</p>'
})
customElements.define('my-vue-element', MyVueElement)
// HTML: <my-vue-element name="An"></my-vue-element>`) },
      { t: 'list', items: [
        '<b>Custom Elements</b> là chuẩn trình duyệt (tự đặt thẻ HTML riêng, có Shadow DOM). Vue có API <code>defineCustomElement</code> để biến component Vue thành custom element dùng được ở <b>mọi framework</b> hoặc trang thường.',
        'Sự kiện Vue <code>emit</code> trở thành <b>CustomEvent</b> của DOM; props là thuộc tính/property của phần tử.',
        'Để Vue không cảnh báo thẻ lạ khi dùng custom element trong template: cấu hình <code>compilerOptions.isCustomElement</code>.',
        '<b>Web Components vs component Vue:</b> chọn Web Components khi cần chia sẻ giữa nhiều framework hoặc nhúng vào trang không phải Vue; còn trong app Vue thuần, component Vue tiện hơn.'
      ] }
    ] },
    { icon: '🎬', title: 'Kỹ thuật animation khác', blocks: [
      { t: 'list', items: [
        '<b>CSS class động:</b> bật/tắt class bằng state (<code>:class</code>) và để CSS transition/animation lo phần còn lại – đủ cho nhiều hiệu ứng nhỏ (nháy, lắc).',
        '<b>Gắn style theo state</b> (<code>:style</code>) hoặc <code>watch</code> + <code>requestAnimationFrame</code>/thư viện (GSAP, Tween.js) để <b>nội suy giá trị số</b>.',
        '<b>Transition/TransitionGroup</b> cho thay đổi DOM (chương 8); với hiệu ứng theo cuộn hoặc phức tạp, dùng thư viện chuyên dụng.'
      ] }
    ] },
    { icon: '❓', title: 'Composition API FAQ: vì sao?', blocks: [
      { t: 'table', head: ['Ưu điểm Composition API', 'Giải thích'], rows: [
        ['Tái sử dụng logic', 'Composable rõ nguồn, nhận tham số, không xung đột tên (hơn mixin)'],
        ['Tổ chức theo <b>mối quan tâm logic</b>', 'Code của một tính năng nằm cạnh nhau, không bị xé ra nhiều option (data/methods/watch…)'],
        ['Hỗ trợ kiểu', 'Hầu hết là biến và hàm thường → suy luận kiểu tự nhiên'],
        ['Bundle nhỏ hơn', '<code>&lt;script setup&gt;</code> biên dịch gọn, tên biến rút gọn được'],
        ['Không phải “thay thế”', 'Options API vẫn được hỗ trợ lâu dài; có thể dùng song song trong cùng dự án']
      ] },
      { t: 'tip', x: '💡 Composition API <b>không phải</b> “functional programming”; nó dựa trên reactivity <b>có trạng thái, có thể thay đổi</b> của Vue. Khác React Hooks: setup chạy <b>một lần</b>, không bị gọi lại mỗi lần render, nên không có “stale closure” và không có luật thứ tự gọi hook.' }
    ] }
  ],
  summary: [
    'Reactivity = track (khi đọc) + trigger (khi ghi) qua Proxy/getter-setter; gán ra biến cục bộ là cắt kết nối.',
    'Template → render function → vnode → patch; compiler tối ưu (cache static, patch flags, tree flattening) nên ưu tiên template.',
    'Render function/JSX cho trường hợp rất động; defineCustomElement để chia sẻ qua mọi framework.'
  ],
  cards: [
    ['Track và trigger?', 'Track: ghi nhận khi đọc; trigger: kích hoạt khi ghi.'],
    ['Vì sao reactive() mất kết nối khi destructure?', 'Biến cục bộ không đi qua proxy.'],
    ['Patch flags?', 'Gợi ý của compiler để so sánh đúng phần động.'],
    ['h() là gì?', 'Hàm tạo vnode.'],
    ['Nhúng Vue vào framework khác?', 'defineCustomElement.'],
    ['Setup khác React Hooks?', 'Chạy một lần, không stale closure.']
  ],
  quiz: [
    { q: 'Khi nào Vue “track” một phụ thuộc?', o: ['Khi ghi thuộc tính', 'Khi effect đọc thuộc tính', 'Khi mount', 'Khi build'], a: 1, e: 'Đọc → track; ghi → trigger.' },
    { q: 'Lý do chính nên ưu tiên template hơn render function tay:', o: ['Ngắn hơn', 'Compiler có thể tối ưu mạnh', 'Không cần JS', 'Chỉ vì thói quen'], a: 1, e: 'Cache static, patch flags…' },
    { q: 'Custom Elements của Vue dùng để:', o: ['Dùng component Vue ở nơi không phải Vue', 'Tăng tốc build', 'Thay Pinia', 'Tắt reactivity'], a: 0, e: 'Dùng được ở mọi framework.' },
    { q: 'Setup() chạy:', o: ['Mỗi lần render', 'Một lần khi tạo component', 'Khi unmount', 'Khi state đổi'], a: 1, e: 'Khác React function component.' }
  ],
  match: [
    ['Proxy', 'Cơ chế bắt đọc/ghi của reactive'],
    ['vnode', 'Object mô tả giao diện'],
    ['Patch flags', 'Gợi ý cập nhật của compiler'],
    ['defineCustomElement', 'Biến component thành Web Component'],
    ['h()', 'Tạo vnode']
  ]
},

{
  n: 13,
  title: 'Bản đồ tra cứu: chọn đúng tính năng cho đúng việc',
  intro: 'Chương cuối giúp bạn <b>chọn đúng công cụ</b> khi gặp một tình huống cụ thể, kèm bảng tra cứu nhanh các API thường dùng và lời khuyên tổng kết.',
  sections: [
    { icon: '🗺️', title: 'Tình huống → công cụ', blocks: [
      { t: 'table', head: ['Tôi cần…', 'Dùng'], rows: [
        ['Giữ một giá trị thay đổi và hiển thị', '<code>ref()</code> (hoặc <code>reactive()</code> cho nhóm state)'],
        ['Giá trị suy ra từ state khác', '<code>computed()</code>'],
        ['Làm việc phụ khi state đổi (gọi API, ghi localStorage)', '<code>watch()</code> / <code>watchEffect()</code>'],
        ['Chạy code khi component hiện/ẩn', '<code>onMounted</code> / <code>onUnmounted</code>'],
        ['Focus ô nhập, đo phần tử', '<code>useTemplateRef()</code>'],
        ['Hiện/ẩn một phần giao diện', '<code>v-if</code> (hiếm đổi) / <code>v-show</code> (đổi thường xuyên)'],
        ['Lặp danh sách', '<code>v-for</code> + <code>:key</code>'],
        ['Cha → con truyền dữ liệu', 'Props (<code>defineProps</code>)'],
        ['Con → cha báo sự kiện', 'Emits (<code>defineEmits</code>) / <code>defineModel</code>'],
        ['Cho người dùng chèn nội dung vào component', 'Slot (scoped slot nếu cần dữ liệu từ con)'],
        ['Truyền dữ liệu qua nhiều tầng', '<code>provide</code> / <code>inject</code>'],
        ['Tái sử dụng logic có trạng thái', 'Composable (<code>useXxx</code>)'],
        ['Chia sẻ state toàn app', 'Pinia'],
        ['Nhiều “trang” trong SPA', 'Vue Router'],
        ['Hiệu ứng vào/ra', '<code>Transition</code> / <code>TransitionGroup</code>'],
        ['Giữ state khi ẩn tab', '<code>KeepAlive</code>'],
        ['Modal hiện ở gốc trang', '<code>Teleport</code>'],
        ['Tải component khi cần', '<code>defineAsyncComponent</code> + <code>import()</code>']
      ] },
      { t: 'widget', name: 'v3-pick', title: 'Luyện chọn đúng công cụ cho tình huống' }
    ] },
    { icon: '🔎', title: 'Tra cứu từ khóa', blocks: [
      { t: 'widget', name: 'v3-lookup', title: 'Gõ từ khóa để tra API (ví dụ: ref, slot, watch, teleport…)' }
    ] },
    { icon: '🧭', title: 'Lời khuyên tổng kết', blocks: [
      { t: 'steps', items: [
        '<b>Bắt đầu đơn giản:</b> state cục bộ (<code>ref</code>) + props/emits; chỉ lên provide/Pinia khi thật sự chia sẻ nhiều nơi.',
        '<b>Computed trước, watch sau:</b> nếu chỉ là giá trị suy ra thì dùng computed; watch dành cho tác dụng phụ.',
        '<b>Luôn kèm <code>key</code> ổn định</b> trong v-for; không trộn v-if và v-for.',
        '<b>Props xuống, events lên:</b> con không sửa prop. Dùng <code>defineModel</code> cho v-model trên component.',
        '<b>Đóng gói logic bằng composable</b> thay vì mixin; dọn dẹp trong <code>onUnmounted</code>.',
        '<b>Ưu tiên template</b> hơn render function; dùng TypeScript + <code>vue-tsc</code> cho dự án lớn.',
        '<b>Đo rồi mới tối ưu;</b> cẩn trọng <code>v-html</code> và dữ liệu người dùng; phân quyền thật ở server.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này bám phần <b>Guide</b> của vuejs.org (Introduction → Extras). Phần <b>API reference</b>, <b>Tutorial</b>, <b>Examples</b> và <b>Style Guide</b> nằm ở các mục khác của site. Muốn làm full-stack và SEO hãy xem giáo trình <b>Nuxt 4</b> trong thư viện này; muốn hiểu sâu từ cuốn sách thực hành xem “Fullstack Vue”.' }
    ] }
  ],
  summary: [
    'Chọn công cụ theo vai trò: ref/computed/watch cho state; props/emits/slot cho component; composable/Pinia cho chia sẻ; built-in cho UX.',
    'Đơn giản trước, tối ưu sau; template + TypeScript; giữ bảo mật ở server.'
  ],
  cards: [
    ['Giá trị suy ra?', 'computed'],
    ['Tác dụng phụ khi đổi?', 'watch'],
    ['Truyền xuyên nhiều tầng?', 'provide/inject'],
    ['Tái dùng logic có state?', 'Composable'],
    ['State toàn app?', 'Pinia'],
    ['Modal ở body?', 'Teleport'],
    ['Giữ state tab ẩn?', 'KeepAlive'],
    ['Tải lười component?', 'defineAsyncComponent']
  ],
  quiz: [
    { q: 'Cần gọi API mỗi khi id đổi:', o: ['computed', 'watch / watchEffect', 'v-once', 'Teleport'], a: 1, e: 'Tác dụng phụ → watch.' },
    { q: 'Cần giữ nội dung form khi đổi tab:', o: ['KeepAlive', 'Teleport', 'v-html', 'defineModel'], a: 0, e: 'Cache instance component.' },
    { q: 'Truyền dữ liệu qua 5 tầng component không muốn chuyền props:', o: ['provide/inject', 'emit', 'v-bind', 'ref'], a: 0, e: 'Chống prop drilling.' },
    { q: 'Tái sử dụng logic có state giữa nhiều component:', o: ['Composable', 'v-html', 'Mixin Vue 2 là lựa chọn tốt nhất', 'Global variable'], a: 0, e: 'Hàm use… trả về ref.' }
  ],
  match: [
    ['computed', 'Giá trị dẫn xuất'],
    ['watch', 'Tác dụng phụ khi state đổi'],
    ['provide/inject', 'Truyền sâu'],
    ['Pinia', 'Store dùng chung'],
    ['Teleport', 'Đưa DOM ra gốc']
  ]
}
);
