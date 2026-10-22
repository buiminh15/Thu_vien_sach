// Widget cho giáo trình Vue 3 Guide (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const inp = (id, v, ph) => `<input id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${q[0]}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };

  // ---- ref + computed + watch ----
  WIDGETS['v3-reactive-sim'] = host => {
    host.innerHTML = '<div>count = <b id="c">0</b> · double (computed) = <b id="d">0</b></div>' + btn('count++', 'id="inc"') + btn('count--', 'id="dec"') + btn('Reset', 'id="rs"') + '<div class="calc" id="log" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let count = 0; const log = [];
    const watchCb = (n, o) => { log.unshift(`watch: ${o} → ${n}  (tác dụng phụ, ví dụ ghi localStorage)`); };
    const set = v => { const o = count; count = v; watchCb(count, o); draw(); };
    const draw = () => { $('#c').textContent = count; $('#d').textContent = count * 2; $('#log').innerHTML = '<b>Nhật ký watch</b>:<br>' + (log.slice(0, 5).map(esc).join('<br>') || '—') + '<div class="small">computed <code>double</code> không cần nhật ký: nó chỉ là công thức, luôn đúng theo count.</div>'; };
    $('#inc').onclick = () => set(count + 1); $('#dec').onclick = () => set(count - 1); $('#rs').onclick = () => { log.length = 0; count = 0; draw(); }; draw();
  };

  // ---- computed cache ----
  WIDGETS['v3-computed-cache'] = host => {
    host.innerHTML = '<div>n = <b id="n">3</b> ' + btn('Đổi n', 'id="chg"') + btn('Render lại (đọc 5 lần)', 'id="rd"') + btn('Reset', 'id="rs"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let n = 3, cc = 0, mc = 0, cache = null, dirty = true;
    const expensive = () => n * n;
    const computedGet = () => { if (dirty) { cc++; cache = expensive(); dirty = false; } return cache; };
    const method = () => { mc++; return expensive(); };
    const draw = () => { $('#n').textContent = n; $('#out').innerHTML = `computed đã tính <b>${cc}</b> lần · method đã chạy <b>${mc}</b> lần<div class="small">Bấm “Render lại” nhiều lần mà n không đổi: computed vẫn đứng yên, method tăng.</div>`; };
    $('#chg').onclick = () => { n++; dirty = true; draw(); };
    $('#rd').onclick = () => { for (let i = 0; i < 5; i++) { computedGet(); method(); } draw(); };
    $('#rs').onclick = () => { n = 3; cc = mc = 0; dirty = true; draw(); }; draw();
  };

  // ---- v-if vs v-show ----
  WIDGETS['v3-vif-vshow'] = host => {
    host.innerHTML = '<label><input id="t" type="checkbox" checked> show = true</label><div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px"><div style="flex:1;min-width:180px"><b>v-if</b><div id="a"></div></div><div style="flex:1;min-width:180px"><b>v-show</b><div id="b"></div></div></div><div class="small" id="info" style="margin-top:6px"></div>';
    const $ = $q(host); let show = true;
    const a = $('#a'), b = $('#b');
    b.innerHTML = '<input placeholder="Gõ gì đó rồi tắt/bật">';
    const draw = () => { a.innerHTML = show ? '<input placeholder="Gõ gì đó rồi tắt/bật">' : '<i class="small">(phần tử không còn trong DOM)</i>'; b.firstChild.style.display = show ? '' : 'none'; $('#info').innerHTML = show ? '' : 'v-if đã <b>hủy</b> ô nhập (mất chữ đã gõ). v-show chỉ <code>display:none</code> nên chữ vẫn còn khi bật lại.'; };
    $('#t').onchange = e => { show = e.target.checked; draw(); }; draw();
  };

  // ---- v-model modifiers ----
  WIDGETS['v3-vmodel-mod'] = host => {
    host.innerHTML = inp('v', '  42  ', 'Gõ giá trị') + '<div>' + ['.lazy', '.number', '.trim'].map(m => `<label style="margin-right:10px"><input type="checkbox" data-m="${m}"> ${m}</label>`).join('') + '</div><div class="calc" id="out" style="margin-top:6px"></div>';
    const $ = $q(host);
    const draw = () => { let v = $('#v').value; const on = [...host.querySelectorAll('[data-m]')].filter(c => c.checked).map(c => c.dataset.m);
      if (on.includes('.trim')) v = v.trim(); if (on.includes('.number')) { const f = parseFloat(v); if (!isNaN(f)) v = f; }
      $('#out').innerHTML = `model = <code>${esc(JSON.stringify(v))}</code> (${typeof v})${on.includes('.lazy') ? '<br><span class="small">.lazy: model chỉ cập nhật khi rời ô (change), không theo từng phím.</span>' : ''}`; };
    host.querySelectorAll('input').forEach(i => i.oninput = i.onchange = draw); draw();
  };

  // ---- lifecycle order ----
  WIDGETS['v3-lifecycle'] = host => {
    host.innerHTML = btn('Mount cha + con', 'id="m"') + btn('Cập nhật state', 'id="u"') + btn('Unmount', 'id="x"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let log = [], mounted = false;
    const draw = () => $('#out').innerHTML = log.length ? log.map((l, i) => `${i + 1}. ${esc(l)}`).join('<br>') : 'Bấm “Mount”.';
    $('#m').onclick = () => { if (mounted) return; mounted = true; log = ['Cha: setup()', 'Cha: onBeforeMount', 'Con: setup()', 'Con: onBeforeMount', 'Con: onMounted  ← con xong TRƯỚC', 'Cha: onMounted  ← cha xong SAU cùng']; draw(); };
    $('#u').onclick = () => { if (!mounted) return; log.push('Cha: onBeforeUpdate', 'Con: onBeforeUpdate', 'Con: onUpdated', 'Cha: onUpdated'); draw(); };
    $('#x').onclick = () => { if (!mounted) return; mounted = false; log.push('Cha: onBeforeUnmount', 'Con: onBeforeUnmount', 'Con: onUnmounted  ← dọn dẹp ở đây', 'Cha: onUnmounted'); draw(); }; draw();
  };

  // ---- props xuống, events lên ----
  WIDGETS['v3-props-flow'] = host => {
    host.innerHTML = '<div style="display:flex;gap:10px;flex-wrap:wrap"><div style="flex:1;min-width:170px;border:1px solid var(--line);border-radius:10px;padding:8px"><b>Cha</b> (giữ state)<div>likes = <b id="pl">0</b></div></div><div style="flex:1;min-width:170px;border:1px dashed var(--line);border-radius:10px;padding:8px"><b>Con</b> (chỉ nhận props)<div>props.likes = <b id="cl">0</b></div>' + btn('👍 emit("like")', 'id="like"') + btn('Thử props.likes++', 'id="bad"') + '</div></div><div class="calc" id="out" style="margin-top:8px;font-size:13px">Con báo lên bằng emit; cha cập nhật rồi truyền props xuống.</div>';
    const $ = $q(host); let likes = 0;
    const draw = () => { $('#pl').textContent = likes; $('#cl').textContent = likes; };
    $('#like').onclick = () => { likes++; draw(); $('#out').innerHTML = '⬆️ con <code>emit(\'like\')</code> → cha <code>likes++</code> → ⬇️ props mới xuống con.'; };
    $('#bad').onclick = () => { $('#out').innerHTML = '⚠ Vue cảnh báo: <i>Attempting to mutate prop "likes". Props are readonly.</i> Giá trị không đổi.'; };
    draw();
  };

  // ---- transition classes ----
  WIDGETS['v3-transition'] = host => {
    host.innerHTML = btn('Vào (enter)', 'id="en"') + btn('Ra (leave)', 'id="lv"') + '<div style="height:60px;display:flex;align-items:center"><div id="box" style="padding:10px 14px;border-radius:10px;background:var(--brand);color:#fff;transition:opacity .6s,transform .6s">Xin chào</div></div><div class="calc" id="cls" style="font-size:13px"></div>';
    const $ = $q(host), box = $('#box'); let busy = false, shown = true;
    const show = (c) => { $('#cls').innerHTML = 'class hiện tại: ' + (c ? c.map(x => `<code>${x}</code>`).join(' ') : '—'); };
    const run = (kind) => {
      if (busy || (kind === 'enter') === shown) return; busy = true;
      const from = kind === 'enter' ? { o: 0, t: 'translateY(12px)' } : { o: 1, t: 'none' }, to = kind === 'enter' ? { o: 1, t: 'none' } : { o: 0, t: 'translateY(12px)' };
      box.style.transition = 'none'; box.style.opacity = from.o; box.style.transform = from.t; show([`v-${kind}-from`, `v-${kind}-active`]);
      requestAnimationFrame(() => requestAnimationFrame(() => { box.style.transition = 'opacity .6s,transform .6s'; box.style.opacity = to.o; box.style.transform = to.t; show([`v-${kind}-active`, `v-${kind}-to`]); }));
      setTimeout(() => { show(null); busy = false; shown = kind === 'enter'; }, 750);
    };
    $('#en').onclick = () => run('enter'); $('#lv').onclick = () => run('leave'); show(null);
  };

  // ---- chọn công cụ tái dùng ----
  WIDGETS['v3-reuse-pick'] = mkQuiz([
    ['Một nút bấm có style riêng dùng ở nhiều trang', 'Component', 'Tái dùng giao diện.'],
    ['Logic theo dõi kích thước cửa sổ (có listener, cần dọn dẹp)', 'Composable', 'Logic có trạng thái + vòng đời.'],
    ['Tự động focus phần tử input khi mount', 'Directive', 'Thao tác DOM mức thấp.'],
    ['Cài vue-router/pinia cho cả app bằng app.use()', 'Plugin', 'Cài tính năng toàn app.'],
    ['Khung card cho phép người dùng chèn tiêu đề/nội dung tùy ý', 'Component', 'Dùng slot.']
  ], ['Component', 'Composable', 'Directive', 'Plugin']);

  // ---- TypeScript ----
  WIDGETS['v3-ts-quiz'] = mkQuiz([
    ['Khai báo kiểu cho props của component', 'defineProps<T>()', 'Dựa trên kiểu.'],
    ['Khai báo kiểu cho sự kiện gửi lên cha', 'defineEmits<T>()', ''],
    ['Ref chứa user hoặc null lúc đầu', 'ref<User | null>(null)', ''],
    ['Key cho provide/inject có kiểu', 'InjectionKey<T>', ''],
    ['Kiểm kiểu SFC ở dòng lệnh/CI', 'vue-tsc', 'Vite không kiểm kiểu.']
  ], ['defineProps<T>()', 'defineEmits<T>()', 'ref<User | null>(null)', 'InjectionKey<T>', 'vue-tsc']);

  // ---- chọn API ----
  WIDGETS['v3-pick'] = mkQuiz([
    ['Tổng tiền = giá × số lượng, tự cập nhật', 'computed', ''],
    ['Gọi API mỗi khi id route đổi', 'watch', ''],
    ['Hủy timer khi component bị gỡ', 'onUnmounted', ''],
    ['Focus ô nhập sau khi mount', 'useTemplateRef', ''],
    ['Con báo cho cha biết vừa bấm “Lưu”', 'emit', ''],
    ['Truyền theme qua 5 tầng component', 'provide/inject', ''],
    ['Giữ nội dung form khi chuyển tab', 'KeepAlive', ''],
    ['Modal nằm ở body dù viết trong component', 'Teleport', ''],
    ['Tải trang quản trị lười', 'defineAsyncComponent', ''],
    ['State dùng chung toàn app', 'Pinia', '']
  ], ['computed', 'watch', 'onUnmounted', 'useTemplateRef', 'emit', 'provide/inject', 'KeepAlive', 'Teleport', 'defineAsyncComponent', 'Pinia']);

  // ---- tra cứu ----
  const API = [
    ['ref()', 'Tạo state phản ứng; JS dùng .value, template tự unwrap.'],
    ['reactive()', 'Proxy phản ứng cho object; không destructure, không gán lại cả object.'],
    ['computed()', 'Giá trị dẫn xuất có cache, getter thuần; có thể writable.'],
    ['watch()', 'Làm tác dụng phụ khi nguồn đổi; immediate/deep/once/flush.'],
    ['watchEffect()', 'Tự theo dõi phụ thuộc đọc đồng bộ và chạy ngay.'],
    ['onWatcherCleanup()', 'Dọn việc cũ khi watcher chạy lại/hủy (3.5+).'],
    ['onMounted / onUnmounted', 'Hook vòng đời: truy cập DOM / dọn dẹp.'],
    ['nextTick()', 'Chờ DOM được cập nhật sau khi đổi state.'],
    ['useTemplateRef()', 'Lấy phần tử/component theo ref (3.5+).'],
    ['defineProps / defineEmits', 'Khai báo props và sự kiện trong script setup.'],
    ['defineModel()', 'v-model hai chiều trên component (3.4+).'],
    ['defineExpose()', 'Lộ API của component script setup cho ref của cha.'],
    ['provide / inject', 'Truyền dữ liệu từ tổ tiên xuống hậu duệ nhiều tầng.'],
    ['slot', 'Chèn nội dung từ cha; có tên, fallback, scoped.'],
    ['$attrs / inheritAttrs', 'Thuộc tính rơi xuyên; tắt bằng inheritAttrs: false.'],
    ['defineAsyncComponent()', 'Component tải lười, hỗ trợ loading/error.'],
    ['Transition / TransitionGroup', 'Hiệu ứng vào/ra cho phần tử/danh sách.'],
    ['KeepAlive', 'Cache instance component bị ẩn.'],
    ['Teleport', 'Dịch chuyển phần DOM tới nơi khác.'],
    ['Suspense', 'Fallback khi chờ dependency bất đồng bộ (thử nghiệm).'],
    ['v-if / v-show', 'Hiện có điều kiện: tạo/hủy vs ẩn CSS.'],
    ['v-for + key', 'Lặp danh sách, key ổn định và duy nhất.'],
    ['v-model', 'Liên kết hai chiều: .lazy .number .trim.'],
    ['v-bind (:) / v-on (@)', 'Gắn thuộc tính / lắng nghe sự kiện.'],
    ['v-html', 'Chèn HTML thô (cẩn thận XSS).'],
    ['v-memo / v-once', 'Bỏ qua cập nhật để tối ưu.'],
    ['shallowRef / markRaw', 'Bỏ phản ứng sâu để tăng hiệu năng.'],
    ['toValue()', 'Đọc giá trị từ ref/getter/giá trị thường (3.3+).'],
    ['Composable', 'Hàm use… đóng gói logic có trạng thái.'],
    ['app.use / app.component / app.directive', 'Cài plugin, đăng ký component/directive toàn cục.'],
    ['Pinia', 'Store chính thức cho state dùng chung.'],
    ['Vue Router', 'Định tuyến SPA: RouterLink, RouterView, guards.'],
    ['vue-tsc', 'Kiểm kiểu cho SFC.'],
    ['h()', 'Tạo vnode trong render function.'],
    ['defineCustomElement()', 'Biến component Vue thành Web Component.']
  ];
  WIDGETS['v3-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: ref, slot, watch, teleport, bảo mật…') + '<div id="out" style="margin-top:8px;max-height:300px;overflow:auto"></div>';
    const $ = $q(host);
    const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = API.filter(a => !q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(a => `<div style="padding:5px 0;border-bottom:1px solid var(--line)"><code>${esc(a[0])}</code><div class="small">${esc(a[1])}</div></div>`).join('') : '<i class="small">Không thấy.</i>'; };
    $('#q').oninput = draw; draw();
  };
})();
