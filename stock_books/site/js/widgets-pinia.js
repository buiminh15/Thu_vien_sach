// Widget cho giáo trình Pinia (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const inp = (id, v, ph) => `<input id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${q[0]}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };

  // ---- store counter giả lập + DevTools ----
  WIDGETS['pn-store-sim'] = host => {
    host.innerHTML = '<div>state.count = <b id="c">0</b> · getter.double = <b id="d">0</b></div>' + btn('actions.increment()', 'id="inc"') + btn('store.count-- (ghi trực tiếp)', 'id="dec"') + btn('$patch({ count: 10 })', 'id="pt"') + btn('$reset()', 'id="rs"') + '<div class="calc" id="log" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let count = 0; const log = [];
    const add = (t) => { log.unshift(t); draw(); };
    const draw = () => { $('#c').textContent = count; $('#d').textContent = count * 2; $('#log').innerHTML = '<b>DevTools (timeline)</b>:<br>' + (log.slice(0, 6).map(esc).join('<br>') || '—'); };
    $('#inc').onclick = () => { count++; add('🔧 action increment → count = ' + count); };
    $('#dec').onclick = () => { count--; add('✏️ direct mutation → count = ' + count); };
    $('#pt').onclick = () => { count = 10; add('📦 $patch(object) → count = 10'); };
    $('#rs').onclick = () => { count = 0; add('♻️ $reset() → count = 0'); }; draw();
  };

  // ---- cú pháp ghép ----
  WIDGETS['pn-syntax-pick'] = mkQuiz([
    ['Setup store: <code>const count = ref(0)</code>', 'state', 'Trong Option store là state: () => ({ count: 0 }).'],
    ['Setup store: <code>const double = computed(...)</code>', 'getters', 'Tương đương getters.'],
    ['Setup store: <code>function increment() {...}</code>', 'actions', 'Tương đương actions.'],
    ['Option store: <code>state: () => ({ ... })</code>', 'ref()/reactive()', 'Phía Setup store dùng ref.']
  ], ['state', 'getters', 'actions', 'ref()/reactive()']);

  // ---- destructure vs storeToRefs ----
  WIDGETS['pn-destructure'] = host => {
    host.innerHTML = '<div>store.count = <b id="s">0</b></div><div>`const { count } = store` → <b id="d">0</b> <span class="small">(mất phản ứng)</span></div><div>`storeToRefs(store).count.value` → <b id="r">0</b> <span class="small">(giữ phản ứng)</span></div>' + btn('store.count++', 'id="inc"') + btn('Reset', 'id="rs"') + '<div class="small" id="note" style="margin-top:6px"></div>';
    const $ = $q(host); let store = 0, snap = 0;
    const draw = () => { $('#s').textContent = store; $('#d').textContent = snap; $('#r').textContent = store; $('#note').textContent = store !== snap ? 'Biến đã destructure vẫn là ' + snap + ' — chỉ là bản chụp lúc tách ra. storeToRefs thì luôn theo store.' : ''; };
    $('#inc').onclick = () => { store++; draw(); }; $('#rs').onclick = () => { store = 0; snap = 0; draw(); }; draw();
  };

  // ---- $subscribe vs nhiều lần ghi ----
  WIDGETS['pn-subscribe'] = host => {
    host.innerHTML = btn('3 lần ghi trực tiếp', 'id="a"') + btn('1 lần $patch (đổi 3 thuộc tính)', 'id="b"') + btn('Reset', 'id="rs"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let direct = 0, patch = 0;
    const draw = () => { $('#out').innerHTML = `$subscribe đã chạy: <b>${direct + patch}</b> lần<br><span class="small">Ghi trực tiếp: ${direct} · $patch: ${patch}</span><div class="small">Mỗi lần ghi trực tiếp kích hoạt riêng; $patch gom mọi thay đổi thành <b>một</b> lần gọi.</div>`; };
    $('#a').onclick = () => { direct += 3; draw(); }; $('#b').onclick = () => { patch += 1; draw(); }; $('#rs').onclick = () => { direct = patch = 0; draw(); }; draw();
  };

  // ---- getter cache ----
  WIDGETS['pn-getter-cache'] = host => {
    host.innerHTML = '<div>users = [An, Bình, Chi] · version = <b id="v">0</b></div>' + btn('Đổi state (version++)', 'id="chg"') + btn('Đọc mỗi getter 5 lần', 'id="rd"') + btn('Reset', 'id="rs"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let ver = 0, dirty = true, calcs = 0, fnCalls = 0;
    const getter = () => { if (dirty) { calcs++; dirty = false; } };
    const draw = () => { $('#v').textContent = ver; $('#out').innerHTML = `Getter thường (<code>doubleCount</code>): tính <b>${calcs}</b> lần (cache)<br>Getter trả về hàm (<code>getUserById(id)</code>): chạy <b>${fnCalls}</b> lần (không cache)<div class="small">Đọc nhiều lần khi state không đổi: getter thường đứng yên, getter hàm tăng.</div>`; };
    $('#chg').onclick = () => { ver++; dirty = true; draw(); };
    $('#rd').onclick = () => { for (let i = 0; i < 5; i++) { getter(); fnCalls++; } draw(); };
    $('#rs').onclick = () => { ver = 0; dirty = true; calcs = fnCalls = 0; draw(); }; draw();
  };

  // ---- $onAction ----
  WIDGETS['pn-onaction'] = host => {
    host.innerHTML = btn('Gọi action thành công', 'id="ok"') + btn('Gọi action lỗi', 'id="err"') + btn('Xóa log', 'id="cl"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px">Bấm thử.</div>';
    const $ = $q(host); let log = [];
    const draw = () => $('#out').innerHTML = log.length ? log.map(esc).join('<br>') : 'Bấm thử.';
    const run = (fail) => { const t = Date.now(); log = ['▶ $onAction callback (TRƯỚC action): name="fetchUser", args=[7]']; draw();
      setTimeout(() => { if (fail) log.push('✖ action ném lỗi → onError(error): "Network down"'); else log.push('✔ action resolve → after(result): {id:7} sau ' + (Date.now() - t) + ' ms'); draw(); }, 400); };
    $('#ok').onclick = () => run(false); $('#err').onclick = () => run(true); $('#cl').onclick = () => { log = []; draw(); }; draw();
  };

  // ---- chọn công cụ ----
  WIDGETS['pn-pick'] = mkQuiz([
    ['Lấy danh sách sản phẩm từ API và lưu vào store', 'actions', ''],
    ['Tổng tiền giỏ hàng tính từ danh sách', 'getters', ''],
    ['Giữ người dùng đăng nhập, dùng ở nhiều trang', 'state', ''],
    ['Lấy <code>count</code> và <code>double</code> ra biến mà vẫn phản ứng', 'storeToRefs', ''],
    ['Thêm nhiều món vào mảng và đổi cờ trong một mục DevTools', '$patch', ''],
    ['Ghi log mỗi khi action chạy xong', '$onAction', ''],
    ['Lưu state mọi store vào localStorage', 'plugin', ''],
    ['Test component và chặn action thật', 'createTestingPinia', '']
  ], ['actions', 'getters', 'state', 'storeToRefs', '$patch', '$onAction', 'plugin', 'createTestingPinia']);

  // ---- plugin persist mô phỏng ----
  WIDGETS['pn-plugin-sim'] = host => {
    host.innerHTML = '<label><input id="pl" type="checkbox" checked> Đã cài plugin lưu localStorage</label><div>' + inp('t', 'Học Pinia', 'Việc cần làm') + '</div>' + btn('Thêm việc', 'id="add"') + btn('🔄 Tải lại trang', 'id="rl"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let items = [], disk = null;
    const draw = (msg) => { $('#out').innerHTML = `state.items = ${esc(JSON.stringify(items))}<br>localStorage = ${esc(disk === null ? '(trống)' : disk)}${msg ? '<div class="small">' + msg + '</div>' : ''}`; };
    $('#add').onclick = () => { const v = $('#t').value.trim(); if (!v) return; items = [...items, v]; if ($('#pl').checked) disk = JSON.stringify(items); draw('$subscribe chạy → plugin ghi vào localStorage.'); };
    $('#rl').onclick = () => { items = []; if ($('#pl').checked && disk) { items = JSON.parse(disk); draw('Tạo store → plugin $patch dữ liệu đã lưu: state được khôi phục.'); } else draw('Không có plugin: tải lại là mất sạch state.'); }; draw();
  };

  // ---- tra cứu ----
  const API = [
    ['defineStore(id, options|setup)', 'Định nghĩa store với id duy nhất.'],
    ['createPinia()', 'Tạo pinia instance; app.use(pinia).'],
    ['state: () => ({...})', 'Hàm trả về trạng thái ban đầu (Option store).'],
    ['getters', 'Computed của store; this/state; trả hàm để nhận tham số.'],
    ['actions', 'Methods của store, được async, dùng this.'],
    ['storeToRefs(store)', 'Destructure state/getters mà giữ phản ứng.'],
    ['store.$patch(objOrFn)', 'Gom nhiều thay đổi thành một.'],
    ['store.$reset()', 'Về state ban đầu (Option store).'],
    ['store.$subscribe(cb)', 'Theo dõi thay đổi state; chạy một lần sau patch.'],
    ['store.$onAction(cb)', 'Theo dõi action: after, onError.'],
    ['store.$state / $id', 'State gốc và id của store.'],
    ['mapState / mapWritableState', 'Map state/getters sang computed (Options API).'],
    ['mapActions / mapStores', 'Map action sang methods; thêm this.xStore.'],
    ['pinia.use(plugin)', 'Cài plugin mở rộng mọi store.'],
    ['markRaw()', 'Bọc object ngoài (router…) để không bị reactive.'],
    ['useStore(pinia)', 'Chỉ rõ pinia khi dùng ngoài component (SSR).'],
    ['setActivePinia(createPinia())', 'Đặt pinia hoạt động trong unit test.'],
    ['createTestingPinia()', 'Pinia cho test component (@pinia/testing).'],
    ['stubActions / initialState', 'Chặn action thành spy / đặt state ban đầu.'],
    ['acceptHMRUpdate()', 'Hot module replacement cho store.'],
    ['@pinia/nuxt', 'Module Nuxt, auto-import store trong stores/.'],
    ['callOnce()', 'Gọi action một lần trong Nuxt (tránh fetch lại).'],
    ['pinia.state.value', 'Toàn bộ state; serialize/hydrate khi SSR.']
  ];
  WIDGETS['pn-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: patch, ssr, plugin, test, ref…') + '<div id="out" style="margin-top:8px;max-height:300px;overflow:auto"></div>';
    const $ = $q(host);
    const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = API.filter(a => !q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(a => `<div style="padding:5px 0;border-bottom:1px solid var(--line)"><code>${esc(a[0])}</code><div class="small">${esc(a[1])}</div></div>`).join('') : '<i class="small">Không thấy.</i>'; };
    $('#q').oninput = draw; draw();
  };
})();
