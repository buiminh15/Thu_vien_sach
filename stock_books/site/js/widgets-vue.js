// Widget cho sách "Fullstack Vue" (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const f0 = x => Math.round(x).toLocaleString('vi-VN');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const pre = t => `<pre style="white-space:pre-wrap;word-break:break-word;margin:6px 0;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px">${esc(t)}</pre>`;
  const inp = (id, v, ph) => `<input id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;

  // ---- Binding hai chiều ----
  WIDGETS['vue-binding'] = host => {
    host.innerHTML = '<div>Ô nhập (<code>v-model="message"</code>):</div>' + inp('m', 'Xin chào Vue') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const v = $('#m').value; $('#out').innerHTML = `data: <code>{ message: "${esc(v)}" }</code><br>Mustache <code>{{ message }}</code> hiển thị: <b>${esc(v) || '(trống)'}</b><br>Độ dài (computed): <b>${v.length}</b> ký tự · Đảo ngược: <b>${esc([...v].reverse().join(''))}</b>`; };
    $('#m').oninput = draw; draw();
  };

  // ---- Mini UpVote ----
  WIDGETS['vue-upvote'] = host => {
    let subs = [{ id: 1, title: 'Yellow Pail', votes: 16 }, { id: 2, title: 'Supermajority', votes: 11 }, { id: 3, title: 'Tinfoild', votes: 17 }, { id: 4, title: 'Haught or Naught', votes: 9 }];
    host.innerHTML = '<div id="out"></div><div class="small">Danh sách = <code>sortedSubmissions</code> (computed). Từ 20 phiếu có viền xanh (<code>:class</code>).</div>';
    const draw = () => {
      const sorted = [...subs].sort((a, b) => b.votes - a.votes);
      host.querySelector('#out').innerHTML = sorted.map(s => `<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;margin:4px 0;border-radius:8px;border:2px solid ${s.votes >= 20 ? '#4c6ef5' : 'var(--line)'}"><button class="btn sm" data-id="${s.id}">👍</button><b>${s.votes}</b> ${esc(s.title)}${s.votes >= 20 ? ' ⭐' : ''}</div>`).join('');
      host.querySelectorAll('button').forEach(b => b.onclick = () => { subs.find(s => s.id === +b.dataset.id).votes++; draw(); });
    };
    draw();
  };

  // ---- Thứ tự 4 bước ----
  WIDGETS['vue-steps-order'] = host => {
    const correct = ['Làm bản tĩnh (HTML/CSS)', 'Chia thành component', 'Hard-code dữ liệu ban đầu', 'Thêm mutations/tương tác'];
    let order = [...correct].sort(() => Math.random() - .5);
    const draw = () => {
      host.innerHTML = order.map((o, i) => `<div style="display:flex;gap:6px;align-items:center;margin:4px 0"><b>${i + 1}.</b> ${esc(o)} ${btn('▲', `data-u="${i}"`)}${btn('▼', `data-d="${i}"`)}</div>`).join('') + btn('Kiểm tra', 'id="ck"') + '<span id="r" class="small"></span>';
      host.querySelectorAll('[data-u]').forEach(b => b.onclick = () => { const i = +b.dataset.u; if (i > 0) { [order[i - 1], order[i]] = [order[i], order[i - 1]]; draw(); } });
      host.querySelectorAll('[data-d]').forEach(b => b.onclick = () => { const i = +b.dataset.d; if (i < 3) { [order[i + 1], order[i]] = [order[i], order[i + 1]]; draw(); } });
      host.querySelector('#ck').onclick = () => { host.querySelector('#r').textContent = order.every((o, i) => o === correct[i]) ? ' ✅ Đúng thứ tự!' : ' ❌ Chưa đúng, thử lại.'; };
    };
    draw();
  };

  // ---- Chọn nơi đặt state ----
  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${esc(q[0])}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };
  WIDGETS['vue-state-where'] = mkQuiz([
    ['Ô input đang gõ dở trong một form', 'Component cục bộ', 'Chỉ component này cần.'], ['Danh sách sản phẩm dùng ở nhiều trang', 'Store (Vuex/Pinia)', 'Nhiều component xa nhau.'],
    ['Con truyền “người dùng đã bấm” lên cha trực tiếp', 'Sự kiện $emit', 'Con → cha.'], ['Cha đưa tiêu đề cho con hiển thị', 'Props', 'Cha → con.'], ['Token đăng nhập dùng khắp app', 'Store (Vuex/Pinia)', 'Dùng chung và cần theo dõi.']
  ], ['Component cục bộ', 'Props', 'Sự kiện $emit', 'Store (Vuex/Pinia)']);
  WIDGETS['vue-comm-pick'] = mkQuiz([
    ['Nút “Xóa” trong CartItem báo cho CartList xóa mục', 'Sự kiện $emit', 'Con → cha.'], ['Hai component anh em ở hai nhánh khác nhau cần cùng dữ liệu giỏ hàng', 'Store (Vuex/Pinia)', 'Nguồn sự thật chung.'],
    ['Demo siêu nhỏ, hai component chat với nhau (Vue 2)', 'Event bus', 'Chỉ chấp nhận với app rất nhỏ.'], ['Cha truyền danh sách xuống con để hiển thị', 'Props', 'Cha → con.']
  ], ['Props', 'Sự kiện $emit', 'Event bus', 'Store (Vuex/Pinia)']);

  // ---- Props xuống - emit lên ----
  WIDGETS['vue-flow'] = host => {
    host.innerHTML = '<div style="display:flex;gap:10px;flex-wrap:wrap"><div style="flex:1;min-width:220px;padding:8px;border:2px solid #4c6ef5;border-radius:8px"><b>👨 Cha (root)</b><div class="small">data: notes[], timestamps[]</div><div id="list"></div></div><div style="flex:1;min-width:220px;padding:8px;border:2px solid #2f9e44;border-radius:8px"><b>👶 Con (input-component)</b><div class="small">props: placeholder</div>' + inp('i', '', 'Ghi chú… (Enter)') + '</div></div><div class="calc" id="log" style="margin-top:8px">Gõ rồi nhấn Enter.</div>';
    const $ = $q(host); let notes = [];
    const draw = () => { $('#list').innerHTML = notes.map(n => `<div style="padding:2px 0;font-size:.9rem">• ${esc(n[0])} <span class="small">${n[1]}</span></div>`).join('') || '<span class="small">(chưa có)</span>'; };
    $('#i').onkeyup = e => { if (e.key === 'Enter' && $('#i').value.trim()) { const v = $('#i').value.trim(), t = new Date().toLocaleTimeString(); $('#log').innerHTML = `⬆️ Con: <code>this.$emit("add-note", { note: "${esc(v)}", timestamp: "${t}" })</code><br>⬇️ Cha nghe <code>@add-note="addNote"</code> → <code>notes.push(...)</code> → giao diện cập nhật.<br>Props vẫn chảy xuống: <code>placeholder</code>.`; notes.push([v, t]); $('#i').value = ''; draw(); } };
    draw();
  };

  // ---- Vuex sim ----
  WIDGETS['vue-vuex'] = host => {
    host.innerHTML = '<div>' + inp('n', 'Học Vuex', 'Nội dung ghi chú') + btn('dispatch("addNote")', 'id="a"') + btn('dispatch("clear")', 'id="c"') + '</div><div class="calc" id="out" style="margin-top:8px"></div><div style="margin-top:6px"><b>Mutation log (time-travel):</b><div id="log"></div></div>';
    const $ = $q(host); let state = { notes: [] }, log = [], view = null;
    const cur = () => view === null ? state : log[view].after;
    const draw = () => {
      const s = cur();
      $('#out').innerHTML = `<b>state</b>: <code>{ notes: ${esc(JSON.stringify(s.notes))} }</code><br><b>getter</b> <code>getNoteCount</code> = <b>${s.notes.length}</b>${view !== null ? '<br>⏪ <b>Đang xem quá khứ</b> (bấm “Về hiện tại”)' : ''}`;
      $('#log').innerHTML = log.map((l, i) => `<div style="padding:3px 0;font-size:.9rem">${i + 1}. <code>${l.type}</code> ${esc(JSON.stringify(l.payload ?? ''))} ${btn('⏪ Time travel', `data-i="${i}"`, 'font-size:.75rem')}</div>`).join('') + (view !== null ? btn('Về hiện tại', 'id="back"') : '');
      host.querySelectorAll('[data-i]').forEach(b => b.onclick = () => { view = +b.dataset.i; draw(); });
      const bk = host.querySelector('#back'); if (bk) bk.onclick = () => { view = null; draw(); };
    };
    const commit = (type, payload) => { const before = JSON.stringify(state); if (type === 'ADD_NOTE') state = { notes: [...state.notes, payload] }; else if (type === 'CLEAR') state = { notes: [] }; log.push({ type, payload, after: JSON.parse(JSON.stringify(state)) }); view = null; };
    $('#a').onclick = () => { const v = $('#n').value.trim(); if (v) { commit('ADD_NOTE', v); draw(); } };
    $('#c').onclick = () => { commit('CLEAR'); draw(); }; draw();
  };

  // ---- Giỏ hàng ----
  WIDGETS['vue-cart'] = host => {
    const P = [{ id: 1, t: 'Hoodie', p: 19.99 }, { id: 2, t: 'Tee', p: 9.99 }, { id: 3, t: 'Cap', p: 12.5 }]; let cart = {};
    host.innerHTML = '<div style="display:flex;gap:10px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><b>Sản phẩm</b><div id="p"></div></div><div style="flex:1;min-width:200px"><b>Giỏ hàng</b><div id="c"></div></div></div><div class="calc" id="t" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => {
      $('#p').innerHTML = P.map(p => `<div style="margin:4px 0">${p.t} $${p.p} ${btn('Thêm', `data-a="${p.id}"`)}</div>`).join('');
      const items = P.filter(p => cart[p.id]);
      $('#c').innerHTML = items.map(p => `<div style="margin:4px 0">${p.t} × ${cart[p.id]} ${btn('−', `data-r="${p.id}"`)}</div>`).join('') || '<span class="small">(trống)</span>';
      const q = items.reduce((a, p) => a + cart[p.id], 0), tot = items.reduce((a, p) => a + cart[p.id] * p.p, 0);
      $('#t').innerHTML = `Getters: <code>cartQuantity</code> = <b>${q}</b> · <code>cartTotal</code> = <b>$${tot.toFixed(2)}</b>`;
      host.querySelectorAll('[data-a]').forEach(b => b.onclick = () => { cart[b.dataset.a] = (cart[b.dataset.a] || 0) + 1; draw(); });
      host.querySelectorAll('[data-r]').forEach(b => b.onclick = () => { cart[b.dataset.r]--; if (!cart[b.dataset.r]) delete cart[b.dataset.r]; draw(); });
    };
    draw();
  };

  // ---- Validate ----
  WIDGETS['vue-validate'] = host => {
    host.innerHTML = '<div>Món đồ (≤ 20 ký tự):</div>' + inp('it', '') + '<div>Email:</div>' + inp('em', '') + '<div>Mức khẩn: <select id="ug"><option value="">—</option><option>urgent</option><option>moderate</option><option>nonessential</option></select></div><div id="err" style="margin-top:6px"></div><div style="margin-top:6px">' + btn('Gửi', 'id="go"') + '</div><div class="calc" id="out" style="margin-top:6px">Chưa gửi.</div>';
    const $ = $q(host);
    const errs = () => { const e = []; const it = $('#it').value, em = $('#em').value, ug = $('#ug').value; if (it.length > 20) e.push('Quá 20 ký tự (' + it.length + ')'); if (em && !/^\S+@\S+\.\S+$/.test(em)) e.push('Email chưa đúng dạng'); if (ug === 'nonessential') e.push('Mức “nonessential” không được chấp nhận'); return e; };
    const draw = () => { const e = errs(); $('#err').innerHTML = e.map(x => `<div style="color:#e03131">⚠ ${x}</div>`).join(''); $('#go').disabled = e.length > 0; $('#go').style.opacity = e.length ? .5 : 1; };
    $('#go').onclick = () => { const miss = []; if (!$('#it').value) miss.push('món đồ'); if (!$('#em').value) miss.push('email'); if (!$('#ug').value) miss.push('mức khẩn'); $('#out').innerHTML = miss.length ? `❌ Kiểm tra cả form: thiếu ${miss.join(', ')}` : '✅ Hợp lệ — đã thêm vào danh sách (rồi sẽ lưu).'; };
    host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw();
  };

  // ---- Lưu bất đồng bộ ----
  WIDGETS['vue-save-sim'] = host => {
    host.innerHTML = '<div>Mạng: <select id="n"><option value="ok">Ổn</option><option value="bad">Lỗi</option></select> ' + btn('Submit', 'id="s"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let st = 'READY', items = ['Táo'];
    const draw = () => { const c = { READY: '#868e96', SAVING: '#f08c00', SUCCESS: '#2f9e44', ERROR: '#e03131' }[st]; $('#out').innerHTML = `saveStatus: <b style="color:${c}">${st}</b><br>items trên giao diện: <b>${esc(items.join(', '))}</b>`; $('#s').disabled = st === 'SAVING'; };
    $('#s').onclick = () => { st = 'SAVING'; draw(); setTimeout(() => { if ($('#n').value === 'ok') { items = [...items, 'Món ' + (items.length + 1)]; st = 'SUCCESS'; } else st = 'ERROR'; draw(); }, 900); };
    draw();
  };

  // ---- Router sim ----
  WIDGETS['vue-router-sim'] = host => {
    const R = { '/': 'Trang chủ', '/dunkirk': 'Dunkirk (2017) — phim chiến tranh', '/interstellar': 'Interstellar (2014) — phim khoa học viễn tưởng', '/the-dark-knight-rises': 'The Dark Knight Rises (2012)' };
    let hist = ['/'], pos = 0, loads = 1;
    host.innerHTML = '<div id="nav"></div><div style="margin:6px 0;padding:6px 10px;border-radius:8px;border:1px solid var(--line)"><code id="url"></code></div><div class="calc" id="view"></div><div class="small" id="st" style="margin-top:6px"></div>';
    const $ = $q(host);
    const draw = () => {
      const cur = hist[pos];
      $('#nav').innerHTML = btn('◀ Back', 'id="b"') + btn('Forward ▶', 'id="f"') + Object.keys(R).map(p => btn(`<router-link to="${p}">`, `data-p="${p}"`)).join('') + btn('↻ Tải lại trang (full reload)', 'id="rl"');
      $('#url').textContent = 'https://app.com' + cur;
      $('#view').innerHTML = `<b>&lt;router-view&gt;</b> → ${R[cur] || '404 Not Found'}`;
      $('#st').innerHTML = `Số lần trình duyệt tải lại toàn trang: <b>${loads}</b> (router-link không làm tăng). Lịch sử: ${hist.map((h, i) => i === pos ? '<b>[' + h + ']</b>' : h).join(' → ')}`;
      host.querySelectorAll('[data-p]').forEach(b => b.onclick = () => { hist = hist.slice(0, pos + 1); hist.push(b.dataset.p); pos++; draw(); });
      $('#b').onclick = () => { if (pos > 0) { pos--; draw(); } }; $('#f').onclick = () => { if (pos < hist.length - 1) { pos++; draw(); } };
      $('#rl').onclick = () => { loads++; draw(); };
    };
    draw();
  };

  // ---- Guard ----
  WIDGETS['vue-guard'] = host => {
    host.innerHTML = '<div>Token: <b id="tk">chưa đăng nhập</b> ' + btn('Đăng nhập', 'id="li"') + btn('Đăng xuất', 'id="lo"') + '</div><div style="margin-top:6px">Điều hướng tới: ' + btn('/products (công khai)', 'data-to="/products"') + btn('/cart (cần đăng nhập)', 'data-to="/cart"') + '</div><div class="calc" id="out" style="margin-top:8px">Hãy thử.</div>';
    const $ = $q(host); let tok = false;
    const sync = () => { $('#tk').textContent = tok ? 'abc123 ✔' : 'chưa đăng nhập'; };
    $('#li').onclick = () => { tok = true; sync(); $('#out').textContent = 'Watcher thấy token → push("/products").'; }; $('#lo').onclick = () => { tok = false; sync(); $('#out').textContent = 'Token bị xóa → watcher: push("/login").'; };
    host.querySelectorAll('[data-to]').forEach(b => b.onclick = () => { const to = b.dataset.to, need = to === '/cart'; $('#out').innerHTML = `<code>beforeEach(to="${to}", meta.requiresAuth=${need})</code> → ` + (need && !tok ? '<b style="color:#e03131">next("/login")</b>: bị chặn, chuyển sang trang đăng nhập.' : '<b style="color:#2f9e44">next()</b>: cho vào.'); });
    sync();
  };

  // ---- Test sim ----
  WIDGETS['vue-test-sim'] = host => {
    host.innerHTML = '<div style="display:flex;gap:12px;flex-wrap:wrap"><div style="flex:1;min-width:200px"><b>Component đếm</b><div id="cmp" style="padding:8px;border:1px solid var(--line);border-radius:8px;margin-top:4px"></div></div><div style="flex:1;min-width:230px"><b>Test</b>' + pre('const wrapper = shallowMount(Counter)   // Arrange\nwrapper.find("button").trigger("click")   // Act\nexpect(wrapper.vm.count).toBe(1)          // Assert') + btn('▶ Chạy test', 'id="run"') + '<div id="res" class="small"></div></div></div>';
    const $ = $q(host); let count = 0;
    const draw = () => { $('#cmp').innerHTML = `<div>Giá trị: <b>${count}</b></div>` + btn('+1', 'id="b"') + btn('Reset', 'id="r"'); $('#b').onclick = () => { count++; draw(); }; $('#r').onclick = () => { count = 0; draw(); }; };
    $('#run').onclick = () => { count = 0; draw(); $('#res').textContent = 'Arrange: dựng component (count = 0)…'; setTimeout(() => { count++; draw(); $('#res').textContent = 'Act: trigger("click") → count = 1…'; setTimeout(() => { $('#res').innerHTML = count === 1 ? '✅ Assert: expect(count).toBe(1) — <b>PASS</b>' : '❌ FAIL'; }, 600); }, 600); };
    draw();
  };

  // ---- Vue 2 vs 3 ----
  const V2 = `export default {
  props: ['title'],
  data() { return { input: '', notes: [] } },
  computed: { count() { return this.notes.length } },
  methods: {
    addNote() {
      this.notes.push(this.input)
      this.$emit('add-note', this.input)
      this.input = ''
    }
  },
  created() { console.log('tạo xong') }
}`;
  const V3 = `<script setup>
import { ref, computed, onMounted } from 'vue'
defineProps({ title: String })
const emit = defineEmits(['add-note'])
const input = ref('')
const notes = ref([])
const count = computed(() => notes.value.length)
function addNote() {
  notes.value.push(input.value)
  emit('add-note', input.value)
  input.value = ''
}
onMounted(() => console.log('đã gắn'))
</script>`;
  WIDGETS['vue-convert'] = host => {
    host.innerHTML = '<div>' + btn('Vue 2 (Options API)', 'data-v="2"') + btn('Vue 3 (script setup)', 'data-v="3"') + btn('Cạnh nhau', 'data-v="b"') + '</div><div id="out"></div>';
    const draw = v => { host.querySelector('#out').innerHTML = v === '2' ? pre(V2) : v === '3' ? pre(V3) : '<div style="display:flex;gap:8px;flex-wrap:wrap"><div style="flex:1;min-width:240px"><b>Vue 2</b>' + pre(V2) + '</div><div style="flex:1;min-width:240px"><b>Vue 3</b>' + pre(V3) + '</div></div>'; };
    host.querySelectorAll('button').forEach(b => b.onclick = () => draw(b.dataset.v)); draw('b');
  };

  // ---- Vue2 hay Vue3 ----
  WIDGETS['vue-which-version'] = host => {
    const Q = [['new Vue({ el: "#app", data: { n: 0 } })', '2'], ['const n = ref(0); n.value++', '3'], ['<script setup> import { ref } from "vue" </script>', '3'], ['EventBus.$on("add-note", fn)', '2'], ['const store = defineStore("cart", () => {...})', '3'], ['this.$store.dispatch("getProductItems")', '2'], ['createApp(App).use(router).mount("#app")', '3'], ['Vue.component("my-comp", {...})', '2']];
    host.innerHTML = Q.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><code>${esc(q[0])}</code><br>${btn('Vue 2', `data-i="${i}" data-a="2"`)}${btn('Vue 3', `data-i="${i}" data-a="3"`)} <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const q = Q[+b.dataset.i]; host.querySelector('#r' + b.dataset.i).textContent = b.dataset.a === q[1] ? '✅' : '❌ Đây là Vue ' + q[1]; });
  };
})();
