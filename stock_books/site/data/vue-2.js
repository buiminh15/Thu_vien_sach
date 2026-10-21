// Fullstack Vue – Chương 4–6: Vuex, Vuex + server, Form.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.vuebook = BOOK_DATA.vuebook || { chapters: [] };
const C2 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.vuebook.chapters.push(

{
  n: 4,
  title: 'Vuex nhập môn: quản lý trạng thái kiểu Flux',
  intro: 'Khi nhiều component cùng dùng một dữ liệu, cần một “kho” trung tâm với quy tắc rõ ràng ai được sửa và sửa thế nào. Vuex là thư viện làm việc đó cho Vue, dựa trên mô hình Flux của Facebook.',
  sections: [
    { icon: '🔄', title: 'Flux: dòng dữ liệu một chiều', blocks: [
      { t: 'p', x: 'Flux là <b>mẫu thiết kế</b> (không phải một thư viện): view (giao diện) <b>gửi hành động</b> mô tả điều đã xảy ra → store quyết định thay đổi state thế nào → state mới được đẩy về view. Dữ liệu chỉ chảy <b>một chiều</b>.' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu (nhà hàng):</b> khách (component) không vào bếp tự nấu. Khách gọi món với phục vụ (<b>action</b>), phục vụ ghi phiếu cho đầu bếp (<b>mutation</b>) — chỉ đầu bếp được đụng vào nguyên liệu (<b>state</b>) — rồi món lên bàn (view cập nhật). Muốn biết “hôm nay bán bao nhiêu phở” thì hỏi quầy thống kê (<b>getter</b>).' },
      { t: 'list', items: [
        '<b>Tách nhỏ, dễ kiểm thử:</b> quản lý state ở ngoài, component thành “hàm vẽ HTML” đơn giản.',
        '<b>Dữ liệu dẫn xuất (derived)</b> tính ở store: lưu <code>createdAt</code>, hiển thị “23 phút trước”.',
        '<b>Debug dễ:</b> mọi thay đổi đều qua mutation → có thể ghi lại và tua lại.'
      ] },
      { t: 'p', x: 'Cộng đồng có nhiều bản cài đặt (Flux của Facebook, Redux…). Trong Vue thì <b>Vuex</b> là phổ biến nhất vì do chính nhóm Vue làm và chỉ dành cho Vue. Đổi lại có thêm “mã khuôn”; app rất nhỏ có thể chưa cần.' }
    ] },
    { icon: '🏬', title: 'Bốn mảnh của Vuex store', blocks: [
      { t: 'table', head: ['Mảnh', 'Việc của nó', 'Quy tắc', 'Ví dụ'], rows: [
        ['<b>state</b>', 'Dữ liệu dùng chung', 'Không sửa trực tiếp', '<code>{ notes: [], timestamps: [] }</code>'],
        ['<b>mutations</b>', 'Hàm <b>duy nhất</b> được sửa state', 'Đồng bộ; nhận <code>(state, payload)</code>', '<code>ADD_NOTE(state, note) { state.notes.push(note) }</code>'],
        ['<b>actions</b>', 'Gọi mutation; có thể chạy bất đồng bộ (API)', 'Nhận <code>(context, payload)</code>; <code>context.commit(...)</code>', '<code>addNote(ctx, n) { ctx.commit("ADD_NOTE", n) }</code>'],
        ['<b>getters</b>', 'Dữ liệu tính từ state (như computed)', 'Nhận <code>(state)</code>', '<code>getNoteCount: s =&gt; s.notes.length</code>']
      ] },
      { t: 'p', x: C2(`const store = new Vuex.Store({
  state: { notes: [], timestamps: [] },
  mutations: {
    ADD_NOTE(state, note) { state.notes.push(note) },
    ADD_TIMESTAMP(state, ts) { state.timestamps.push(ts) }
  },
  actions: {
    addNote(context, note) { context.commit('ADD_NOTE', note) },
    addTimestamp(context, ts) { context.commit('ADD_TIMESTAMP', ts) }
  },
  getters: {
    getNotes: s => s.notes,
    getNoteCount: s => s.notes.length
  }
})

new Vue({ el: '#app', store, components: {...} })`) },
      { t: 'key', x: '<b>Ghi nhớ luồng:</b> Component <code>this.$store.dispatch("addNote", x)</code> → <b>Action</b> → <code>commit</code> → <b>Mutation</b> → sửa <b>State</b> → <b>Getter</b>/state đổi → Component tự vẽ lại. Component đọc dữ liệu bằng computed: <code>this.$store.getters.getNotes</code>.' },
      { t: 'widget', name: 'vue-vuex', title: 'Mô phỏng Vuex: gửi action, xem mutation log và state (time-travel!)' }
    ] },
    { icon: '⏪', title: 'Công cụ: Vue devtools và “time-travel”', blocks: [
      { t: 'p', x: 'Vue devtools có tab Vuex liệt kê mọi mutation theo thứ tự: payload và state sau mỗi mutation. Bấm “Time Travel” để đưa giao diện quay về thời điểm đó — thấy ngay lỗi xảy ra ở bước nào. (Không thay thế debug thường, chỉ bổ sung.)' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – ngày nay:</b> với Vue 3 chính thức khuyên dùng <b>Pinia</b> (kho nhẹ hơn: không có mutations, chỉ <code>state</code>, <code>getters</code>, <code>actions</code>; hỗ trợ TypeScript tốt). Vuex vẫn chạy được nhưng ở chế độ bảo trì. Tư duy (một nguồn sự thật, dữ liệu một chiều) giống hệt — xem chương 9.' },
      { t: 'tip', x: '💡 <b>Khi nào cần Vuex?</b> Chỉ khi dữ liệu dùng chung bởi nhiều component xa nhau. Trạng thái cục bộ (ví dụ nút đang hover, ô input đang gõ dở) cứ để trong component.' }
    ] }
  ],
  summary: [
    'Flux: một chiều view → action → mutation → state → view.',
    'Vuex store gồm state, mutations (sửa duy nhất), actions (gọi mutation, được bất đồng bộ), getters (computed của store).',
    'Component gọi <code>dispatch</code> và đọc qua getters/computed.',
    'Devtools có time-travel; ngày nay dùng Pinia cho Vue 3.'
  ],
  cards: [
    ['Flux là gì?', 'Mẫu thiết kế dữ liệu một chiều: view → action → store → view.'],
    ['State?', 'Dữ liệu dùng chung của ứng dụng.'],
    ['Mutation?', 'Hàm duy nhất được sửa state; nhận (state, payload); đồng bộ.'],
    ['Action?', 'Hàm gọi mutation, có thể chạy bất đồng bộ; nhận context.'],
    ['Getter?', 'Dữ liệu tính từ state, giống computed.'],
    ['Gửi action từ component?', '<code>this.$store.dispatch("tên", payload)</code>.'],
    ['Gọi mutation từ action?', '<code>context.commit("TÊN", payload)</code>.'],
    ['Đưa store vào app?', 'Truyền <code>store</code> vào <code>new Vue({ store })</code>.'],
    ['Vì sao đặt tên mutation in hoa?', 'Quy ước để phân biệt và hỗ trợ công cụ.'],
    ['Time-travel debugging?', 'Quay giao diện về thời điểm của một mutation trong devtools.'],
    ['Thay thế Vuex hiện nay?', 'Pinia (Vue 3).']
  ],
  quiz: [
    { q: 'Chỉ nơi nào được phép sửa state trong Vuex?', o: ['Component', 'Mutation', 'Getter', 'Template'], a: 1, e: 'Mutation là cổng duy nhất.' },
    { q: 'Action khác mutation ở chỗ:', o: ['Action có thể bất đồng bộ', 'Action sửa state trực tiếp', 'Action chạy trong CSS', 'Không khác'], a: 0, e: 'Gọi API rồi commit.' },
    { q: 'Getter giống khái niệm nào của component?', o: ['methods', 'computed', 'props', 'data'], a: 1, e: 'Tính từ state.' },
    { q: 'Component gửi yêu cầu đến store bằng:', o: ['commit', 'dispatch', 'emit', 'mount'], a: 1, e: 'Dispatch action.' },
    { q: 'Trạng thái “nút đang hover” nên để ở:', o: ['Vuex', 'Component cục bộ', 'Server', 'Event bus'], a: 1, e: 'Không cần chia sẻ.' },
    { q: 'Luồng đúng:', o: ['State→Action→View', 'View→Action→Mutation→State→View', 'Mutation→View→State', 'Getter→Mutation'], a: 1, e: 'Một chiều.' }
  ],
  match: [
    ['state', 'Dữ liệu chung'],
    ['mutation', 'Chỗ duy nhất sửa state'],
    ['action', 'Gọi mutation, có async'],
    ['getter', 'Tính từ state'],
    ['dispatch', 'Component gửi action']
  ]
},

{
  n: 5,
  title: 'Vuex và máy chủ: giỏ hàng có lưu dữ liệu',
  intro: 'Thực tế dữ liệu nằm trên server. Chương này xây giỏ hàng gọi API (lấy danh sách, thêm/xóa), chia store thành module, và giải thích vì sao trình duyệt chặn gọi chéo nguồn (CORS) cùng cách vượt qua khi phát triển.',
  sections: [
    { icon: '🌐', title: 'Giao tiếp với server', blocks: [
      { t: 'table', head: ['Thao tác', 'Phương thức HTTP', 'Ví dụ trong giỏ hàng'], rows: [
        ['Đọc', 'GET', '<code>GET /products</code>, <code>GET /cart</code>'],
        ['Ghi (thêm)', 'POST', '<code>POST /cart</code> (body JSON)'],
        ['Ghi (giảm/xóa)', 'POST', '<code>POST /cart/delete</code>, <code>POST /cart/delete/all</code>']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> server là nhà kho ở xa. <b>GET</b> = xin xem danh sách hàng; <b>POST</b> = gửi phiếu “thêm món này vào giỏ”. Dữ liệu trao đổi dạng <b>JSON</b> — văn bản mô tả object (<code>JSON.parse</code> chuỗi → object; <code>JSON.stringify</code> ngược lại).' },
      { t: 'list', items: [
        'Thử API bằng trình duyệt (GET) hoặc <code>curl</code>: <code>curl -X POST -H "Content-Type: application/json" -d \'{"id":100,...}\' localhost:3000/cart</code>.',
        'Chạy đồng thời server API và dev server bằng <code>concurrently</code> (script <code>npm run start</code>).',
        'Ứng dụng giữ trạng thái ở <b>cả hai nơi</b>: server lưu bền vững, Vuex store giữ bản trong bộ nhớ cho giao diện; mỗi thao tác ghi phải cập nhật cả hai cho khớp.'
      ] },
      { t: 'key', x: '<b>CORS:</b> app chạy ở <code>localhost:8080</code> mà gọi <code>localhost:3000</code> là khác “nguồn” → trình duyệt chặn vì lý do bảo mật. Khi phát triển, dev server làm <b>proxy</b>: mọi yêu cầu bắt đầu bằng <code>/api</code> được chuyển tiếp sang <code>http://localhost:3000</code> (cấu hình trong <code>vue.config.js</code>). Code chỉ gọi <code>/api/products</code>.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – CORS nói đơn giản:</b> trình duyệt hỏi server “trang từ nguồn X có được đọc dữ liệu của bạn không?”. Server thật sự phải trả header <code>Access-Control-Allow-Origin</code> thì mới cho. Proxy khi dev là mẹo để trình duyệt tưởng cùng nguồn. Khi lên production bạn cấu hình CORS ở server hoặc dùng cùng domain.' }
    ] },
    { icon: '🧩', title: 'Chia store thành module', blocks: [
      { t: 'p', x: 'App lớn thì state/mutations/actions/getters phình ra. <b>Module</b> chia store theo mảng chức năng: <code>productModule</code> (danh sách sản phẩm) và <code>cartModule</code> (giỏ hàng), mỗi module có đủ bốn mảnh, rồi gộp lại trong <code>store/index.js</code>:' },
      { t: 'p', x: C2(`// store/index.js
import Vue from 'vue'
import Vuex from 'vuex'
import productModule from './modules/product'
import cartModule from './modules/cart'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: { productModule, cartModule }
})

// store/modules/product/index.js
import axios from 'axios'
const state = { productItems: [] }
const actions = {
  getProductItems({ commit }) {
    axios.get('/api/products').then(res => commit('UPDATE_PRODUCT_ITEMS', res.data))
  }
}
const mutations = { UPDATE_PRODUCT_ITEMS(state, items) { state.productItems = items } }
const getters = { productItems: state => state.productItems }
export default { state, actions, mutations, getters }`) },
      { t: 'tip', x: '💡 <b>Module như phòng ban:</b> phòng Sản phẩm giữ sổ hàng, phòng Giỏ hàng giữ giỏ; cùng thuộc một công ty (store) nhưng việc ai nấy làm, dễ tìm khi cần.' },
      { t: 'list', items: [
        '<code>Vue.use(Vuex)</code>: với app có Webpack, plugin phải được cài rõ ràng.',
        'Tách <b>mutation types</b> ra file riêng (<code>mutation-types.js</code>) để tránh gõ sai chuỗi.',
        'Giỏ hàng: nhiều action (thêm, xóa một, xóa hết) cùng commit vào <b>một</b> mutation <code>UPDATE_CART_ITEMS</code> — server trả giỏ mới, ta thay state bằng bản đó.',
        'Getters của giỏ: danh sách, tổng tiền (<code>cartTotal</code>), tổng số lượng (<code>cartQuantity</code>).'
      ] }
    ] },
    { icon: '🔌', title: 'Nối store vào component', blocks: [
      { t: 'p', x: 'Component lấy dữ liệu khi vừa tạo bằng hook <code>created()</code> (dispatch action tải dữ liệu), và dùng <b>helper</b> của Vuex cho gọn:' },
      { t: 'p', x: C2(`import { mapGetters, mapActions } from 'vuex'

export default {
  computed: { ...mapGetters(['productItems']) },
  methods:  { ...mapActions(['addCartItem']) },
  created() { this.$store.dispatch('getProductItems') }
}`) },
      { t: 'table', head: ['Helper', 'Biến cái gì thành gì'], rows: [
        ['<code>mapGetters</code>', 'Getter của store → computed của component'],
        ['<code>mapActions</code>', 'Action của store → method của component (tự truyền payload)'],
        ['<code>mapState</code>, <code>mapMutations</code>', 'Tương tự cho state / mutation (ngoài sách)']
      ] },
      { t: 'widget', name: 'vue-cart', title: 'Giỏ hàng mô phỏng: thêm/xóa, xem tổng tiền (getter) tự cập nhật' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – <code>created()</code> là gì?</b> Là một <b>lifecycle hook</b> (móc vòng đời): Vue gọi nó đúng lúc component vừa được tạo. Thứ tự chính: <code>beforeCreate → created → beforeMount → mounted → beforeUpdate → updated → beforeDestroy → destroyed</code> (Vue 3: <code>beforeUnmount</code>/<code>unmounted</code>). Tải dữ liệu thường đặt ở <code>created</code> hoặc <code>mounted</code>.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách:</b> <code>axios</code> là thư viện gọi HTTP trả về Promise; trình duyệt hiện đại cũng có <code>fetch</code> sẵn. Pinia/Vue 3 dùng cú pháp tương tự: <code>await fetch("/api/products")</code> trong action.' }
    ] }
  ],
  summary: [
    'GET để đọc, POST để ghi; dữ liệu qua lại dạng JSON.',
    'Server lưu bền vững, store giữ bản cho giao diện; ghi thì cập nhật cả hai.',
    'CORS chặn gọi chéo nguồn; khi dev dùng proxy (<code>/api</code> → server).',
    'Chia store thành module; dùng <code>mapGetters</code>/<code>mapActions</code>; tải dữ liệu ở <code>created()</code>.'
  ],
  cards: [
    ['GET vs POST?', 'GET đọc dữ liệu; POST gửi dữ liệu mới/hành động ghi.'],
    ['JSON là gì?', 'Định dạng văn bản mô tả object; parse/stringify để chuyển qua lại.'],
    ['CORS?', 'Trình duyệt chặn gọi sang nguồn khác nếu server không cho phép.'],
    ['Vì sao dùng proxy khi dev?', 'Để yêu cầu /api đi qua dev server tới API, tránh CORS.'],
    ['Module Vuex?', 'Cách chia store thành các mảng chức năng, mỗi cái có state/mutations/actions/getters.'],
    ['<code>mapGetters</code>?', 'Ánh xạ getter thành computed của component.'],
    ['<code>mapActions</code>?', 'Ánh xạ action thành method của component.'],
    ['Hook <code>created()</code>?', 'Chạy khi component vừa được tạo — hợp để tải dữ liệu.'],
    ['Action bất đồng bộ ví dụ?', 'axios.get(...).then(res => commit(...)).'],
    ['Vì sao action cùng commit một mutation?', 'Mọi thao tác trả giỏ mới, ta chỉ thay state bằng bản mới.']
  ],
  quiz: [
    { q: 'Dev server chạy ở :8080, API ở :3000, trình duyệt chặn vì:', o: ['Lỗi code', 'CORS (khác nguồn)', 'Thiếu CSS', 'Thiếu Vuex'], a: 1, e: 'Cổng khác = nguồn khác.' },
    { q: 'Mapping getter thành computed dùng:', o: ['mapActions', 'mapGetters', 'mapState', 'dispatch'], a: 1, e: 'mapGetters.' },
    { q: 'Tải danh sách sản phẩm khi component vừa tạo, đặt ở:', o: ['created()', 'template', 'style', 'package.json'], a: 0, e: 'Lifecycle hook.' },
    { q: 'Mutation có thể gọi API bất đồng bộ?', o: ['Có', 'Không — việc đó của action', 'Chỉ với async', 'Chỉ với module'], a: 1, e: 'Mutation đồng bộ.' },
    { q: 'Module Vuex giúp:', o: ['Chạy nhanh hơn', 'Chia nhỏ store dễ quản lý', 'Thay Vue', 'Thay server'], a: 1, e: 'Tránh store phình to.' },
    { q: 'Dữ liệu giỏ hàng bền vững được lưu ở:', o: ['Chỉ Vuex', 'Server (Vuex giữ bản sao)', 'CSS', 'Chỉ cookie'], a: 1, e: 'Refresh trang vẫn còn.' }
  ],
  match: [
    ['axios', 'Thư viện gọi HTTP'],
    ['proxy /api', 'Chuyển yêu cầu tới server khi dev'],
    ['mapActions', 'Action → method'],
    ['modules', 'Chia store'],
    ['created()', 'Móc vòng đời khi tạo xong']
  ]
},

{
  n: 6,
  title: 'Xử lý form: nhập liệu, kiểm tra hợp lệ, lưu bất đồng bộ',
  intro: 'Form là nơi người dùng “nói chuyện” với ứng dụng. Nhìn đơn giản nhưng nhanh chóng phức tạp: nhiều ô, kiểm tra hợp lệ, trạng thái đang lưu, lỗi mạng. Vue có công cụ tốt cho tất cả.',
  sections: [
    { icon: '🖱', title: 'Từ nút bấm đến ô nhập', blocks: [
      { t: 'steps', items: [
        '<b>Nút bấm:</b> <code>@click="onButtonClick"</code> — truyền <b>tên hàm</b> (không có ngoặc). Có ngoặc <code>onClick()</code> là truyền <i>kết quả gọi hàm</i>, sai ý.',
        '<b>Đối tượng sự kiện</b> (<code>evt</code>) cho biết phần tử nào bị bấm: <code>evt.target.name</code>, <code>evt.target.value</code> — dùng chung một handler cho cả trăm nút.',
        '<b>Lấy giá trị ô nhập:</b> cách cũ dùng <code>ref</code> (<code>this.$refs.newItem.value</code>) — truy cập thẳng DOM, đi ngược tinh thần Vue.',
        '<b>Cách chuẩn:</b> <code>v-model="fields.newItem"</code> — dữ liệu và ô nhập luôn đồng bộ, đọc dữ liệu thay vì đọc DOM.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> <code>ref</code> như bạn chạy tới tờ phiếu rồi đọc; <code>v-model</code> như thư ký tự chép nội dung vào sổ ngay khi người dùng viết — bạn chỉ cần mở sổ.' },
      { t: 'p', x: 'Nhiều ô: gom vào một object <code>fields</code> thay vì mỗi ô một thuộc tính <code>data</code>:' },
      { t: 'p', x: C2(`data() {
  return {
    fields: { newItem: '', email: '', urgency: '', termsAndConditions: false },
    items: []
  }
}
<input v-model="fields.newItem">
<input v-model="fields.email">
<select v-model="fields.urgency">...</select>
<input type="checkbox" v-model="fields.termsAndConditions">`) },
      { t: 'p', x: '<code>@submit.prevent</code> chặn trình duyệt tải lại trang khi gửi form (Enter hoặc nút Submit cùng chạy handler).' }
    ] },
    { icon: '✅', title: 'Kiểm tra hợp lệ (validation)', blocks: [
      { t: 'table', head: ['Mức', 'Kiểm tra', 'Khi nào'], rows: [
        ['<b>Từng ô</b> (field)', 'Giới hạn ký tự, email đúng dạng, mức khẩn không phải “nonessential”…', 'Ngay khi người dùng gõ'],
        ['<b>Cả form</b>', 'Mọi ô bắt buộc đã đầy đủ chưa', 'Khi bấm Submit']
      ] },
      { t: 'p', x: 'Kiểm tra từng ô rất hợp với <b>computed + v-if</b>: lỗi tự hiện/ẩn khi dữ liệu đổi; nút Submit bị vô hiệu bằng <code>:disabled</code>.' },
      { t: 'p', x: C2(`computed: {
  isNewItemInputLimitExceeded() { return this.fields.newItem.length >= 20 },
  isNotUrgent() { return this.fields.urgency === 'nonessential' }
}
<span v-if="isNewItemInputLimitExceeded">Quá 20 ký tự</span>
<button :disabled="isNewItemInputLimitExceeded || isNotUrgent">Gửi</button>`) },
      { t: 'p', x: 'Kiểm tra cả form nằm trong <code>submitForm()</code>: gom lỗi vào object <code>fieldErrors</code> (vd <code>{ email: "Cần email hợp lệ" }</code>); nếu còn lỗi thì <code>return</code> sớm, ngược lại mới thêm vào danh sách.' },
      { t: 'widget', name: 'vue-validate', title: 'Form có kiểm tra tức thời: gõ thử email, ký tự, mức khẩn' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách:</b> lỗi nên hiện <b>đúng lúc</b> — không bắt người dùng thấy chữ đỏ khi mới chạm vào ô; thường hiện sau khi rời ô (<code>blur</code>) hoặc sau lần gửi đầu. Với form lớn người ta dùng thư viện (VeeValidate, vuelidate, hoặc Zod + FormKit) thay vì viết tay. <b>Luôn kiểm tra lại ở server</b> — kiểm tra ở trình duyệt chỉ để tiện người dùng, không phải bảo mật.' }
    ] },
    { icon: '💾', title: 'Lưu bất đồng bộ: loading, saving, lỗi', blocks: [
      { t: 'p', x: 'Thao tác lưu/tải mất thời gian và có thể thất bại. Theo dõi bằng hai thuộc tính:' },
      { t: 'list', items: [
        '<code>loading</code>: <code>true</code> khi đang tải dữ liệu đã lưu (đặt ở <code>created()</code>).',
        '<code>saveStatus</code>: <code>"READY"</code> → <code>"SAVING"</code> → <code>"SUCCESS"</code> hoặc <code>"ERROR"</code>. Khi <code>SAVING</code> thì khóa nút Submit chống bấm hai lần.',
        'Chỉ cập nhật danh sách trên giao diện <b>sau khi lưu thành công</b> — để trạng thái cục bộ không lệch với nơi lưu.'
      ] },
      { t: 'p', x: C2(`submitForm(evt) {
  evt.preventDefault()
  this.fieldErrors = this.validate(this.fields)
  if (Object.keys(this.fieldErrors).length) return
  const items = [...this.items, this.fields.newItem]
  this.saveStatus = 'SAVING'
  apiClient.saveItems(items)
    .then(() => { this.items = items; this.fields.newItem = ''; this.saveStatus = 'SUCCESS' })
    .catch(() => { this.saveStatus = 'ERROR' })
}`) },
      { t: 'widget', name: 'vue-save-sim', title: 'Mô phỏng lưu bất đồng bộ: thử thành công và thất bại' },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> bấm “gửi thư” → hộp thư báo “Đang gửi…” (nút bị khóa) → báo “Đã gửi” hoặc “Lỗi, thử lại”. Nếu cứ coi “đã gửi” ngay từ đầu mà thư thực ra lỗi, người dùng mất dữ liệu mà không biết.' },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài sách – nâng cấp:</b> đưa logic lưu vào Vuex (action <code>saveItems</code>, state <code>saveStatus</code>), hoặc dùng <b>optimistic update</b> (hiện kết quả ngay rồi hoàn tác nếu lỗi) khi muốn giao diện mượt. Sách dùng <code>localStorage</code> để giả lập server — cách thực tế vẫn y hệt với API thật.' }
    ] }
  ],
  summary: [
    '<code>@click="tênHàm"</code> truyền hàm; event object cho biết phần tử nào bị tác động.',
    'Ưu tiên <code>v-model</code> thay vì <code>ref</code>; gom nhiều ô vào object <code>fields</code>.',
    'Kiểm tra từng ô bằng computed + v-if + :disabled; kiểm tra cả form khi submit.',
    'Lưu bất đồng bộ: <code>loading</code> và <code>saveStatus</code> (READY/SAVING/SUCCESS/ERROR); chỉ cập nhật sau khi lưu thành công; luôn kiểm tra lại ở server.'
  ],
  cards: [
    ['<code>@click="fn"</code> vs <code>@click="fn()"</code>?', 'Không ngoặc: truyền hàm làm handler; có ngoặc: truyền kết quả gọi hàm (thường sai).'],
    ['<code>evt.target</code>?', 'Phần tử DOM phát ra sự kiện; dùng chung handler cho nhiều nút.'],
    ['Vì sao hạn chế <code>ref</code> lấy giá trị input?', 'Thao tác thẳng DOM, đi ngược ưu điểm dữ liệu-điều-khiển của Vue.'],
    ['Gom nhiều ô vào đâu?', 'Một object <code>fields</code> trong data.'],
    ['Chặn tải lại trang khi submit?', '<code>@submit.prevent</code> hoặc <code>evt.preventDefault()</code>.'],
    ['Validation từng ô nên dùng?', 'computed + v-if + :disabled.'],
    ['Validation cả form chạy khi nào?', 'Trong submitForm trước khi lưu.'],
    ['<code>saveStatus</code> có những giá trị?', 'READY, SAVING, SUCCESS, ERROR.'],
    ['Vì sao khóa nút khi SAVING?', 'Chống người dùng gửi nhiều lần.'],
    ['Kiểm tra ở client đủ chưa?', 'Chưa — phải kiểm tra lại ở server.']
  ],
  quiz: [
    { q: 'Cách tốt nhất lấy giá trị ô nhập trong Vue:', o: ['$refs', 'v-model', 'document.getElementById', 'innerHTML'], a: 1, e: 'Hai chiều, dữ liệu là trung tâm.' },
    { q: 'Hiển thị lỗi khi nhập quá 20 ký tự, tự động ẩn khi đủ:', o: ['computed + v-if', 'jQuery', 'alert', 'created'], a: 0, e: 'Phản ứng theo dữ liệu.' },
    { q: 'Khi saveStatus = SAVING nên:', o: ['Vẫn cho bấm Submit', 'Khóa nút Submit', 'Xóa form', 'Reload trang'], a: 1, e: 'Chống gửi trùng.' },
    { q: 'Cập nhật danh sách trên UI nên làm:', o: ['Trước khi gọi API', 'Sau khi lưu thành công', 'Không bao giờ', 'Ngẫu nhiên'], a: 1, e: 'Tránh lệch trạng thái.' },
    { q: 'Validation ở client là để:', o: ['Thay thế validation server', 'Tiện cho người dùng (server vẫn phải kiểm)', 'Tăng tốc server', 'Không cần'], a: 1, e: 'Người dùng có thể bỏ qua client.' },
    { q: '@click="onClick()" thường là lỗi vì:', o: ['Cú pháp sai hoàn toàn', 'Gọi hàm ngay lúc render, truyền kết quả', 'Không chạy được trên Chrome', 'Cần async'], a: 1, e: 'Phải truyền tên hàm (hoặc arrow function).' }
  ],
  match: [
    ['v-model', 'Ràng buộc hai chiều'],
    ['@submit.prevent', 'Chặn tải lại trang'],
    ['saveStatus', 'READY/SAVING/SUCCESS/ERROR'],
    ['computed + v-if', 'Báo lỗi từng ô tức thì'],
    [':disabled', 'Khóa nút khi có lỗi']
  ]
}
);
