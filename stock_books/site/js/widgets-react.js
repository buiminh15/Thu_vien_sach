// Widget cho giáo trình React Reference (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const inp = (id, v, ph) => `<input id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const sel = (id, opts, val) => `<select id="${id}" style="padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">${opts.map(o => `<option ${o === val ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${q[0]}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };

  // ---- setState ----
  WIDGETS['rx-state-sim'] = host => {
    host.innerHTML = '<div>Count: <b id="c">0</b></div>' + btn('3 × setCount(count + 1)', 'id="a"') + btn('3 × setCount(c => c + 1)', 'id="b"') + btn('Reset', 'id="r"') + '<div class="calc" id="out" style="margin-top:8px">Bấm thử.</div>';
    const $ = $q(host); let count = 0;
    const show = (m) => { $('#c').textContent = count; $('#out').innerHTML = m; };
    $('#a').onclick = () => { const snap = count; let pending = snap; for (let i = 0; i < 3; i++) pending = snap + 1; count = pending; show(`Cả 3 lần đọc cùng <code>count = ${snap}</code> của “bức ảnh” hiện tại → kết quả <b>${count}</b> (chỉ +1).`); };
    $('#b').onclick = () => { let pending = count; for (let i = 0; i < 3; i++) pending = pending + 1; count = pending; show(`Updater nối tiếp: ${count - 3} → +1 → +1 → +1 = <b>${count}</b> (+3).`); };
    $('#r').onclick = () => { count = 0; show('Reset.'); };
  };

  // ---- Reducer ----
  WIDGETS['rx-reducer'] = host => {
    host.innerHTML = '<div>' + inp('t', 'Học React', 'Việc cần làm') + '</div>' + btn('dispatch added', 'id="add"') + btn('dispatch toggled (việc đầu)', 'id="tg"') + btn('dispatch removed (việc cuối)', 'id="rm"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let tasks = [], log = [], id = 1;
    const reducer = (s, a) => { switch (a.type) { case 'added': return [...s, { id: a.id, text: a.text, done: false }]; case 'toggled': return s.map(t => t.id === a.id ? { ...t, done: !t.done } : t); case 'removed': return s.filter(t => t.id !== a.id); default: throw Error('Hành động lạ: ' + a.type); } };
    const dispatch = a => { tasks = reducer(tasks, a); log.unshift(JSON.stringify(a)); draw(); };
    const draw = () => { $('#out').innerHTML = `<b>state</b>: ${tasks.map(t => (t.done ? '✔ ' : '☐ ') + esc(t.text)).join(' · ') || '(trống)'}<br><b>action log</b>:<div class="small">${log.slice(0, 5).map(esc).join('<br>') || '—'}</div>`; };
    $('#add').onclick = () => { const v = $('#t').value.trim(); if (v) dispatch({ type: 'added', id: id++, text: v }); }; $('#tg').onclick = () => { if (tasks.length) dispatch({ type: 'toggled', id: tasks[0].id }); }; $('#rm').onclick = () => { if (tasks.length) dispatch({ type: 'removed', id: tasks[tasks.length - 1].id }); }; draw();
  };

  // ---- Context ----
  WIDGETS['rx-context'] = host => {
    host.innerHTML = '<div style="padding:8px;border:2px dashed #4c6ef5;border-radius:8px"><b>&lt;ThemeContext value="dark"&gt;</b> (App)<div style="margin:6px 0 0 14px;padding:8px;border:2px dashed #f08c00;border-radius:8px"><b>&lt;ThemeContext value="light"&gt;</b> (Panel)' + '<div style="margin:6px 0 0 14px">' + btn('Button A (trong Panel)', 'data-a="light"') + '</div></div><div style="margin:6px 0 0 14px">' + btn('Button B (ngoài Panel)', 'data-a="dark"') + '</div></div><div style="margin-top:6px">' + btn('Button C (không có provider)', 'data-a="default"') + '</div><div class="calc" id="out" style="margin-top:8px">Bấm một nút.</div>';
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const v = b.dataset.a; host.querySelector('#out').innerHTML = v === 'default' ? 'Không có provider phía trên → dùng <b>giá trị mặc định</b> của <code>createContext("light")</code>: <b>light</b>.' : `<code>useContext(ThemeContext)</code> tìm provider <b>gần nhất phía trên</b> → <b>${v}</b>.`; });
  };

  // ---- Ref vs state ----
  WIDGETS['rx-ref-vs-state'] = host => {
    host.innerHTML = '<div>' + btn('state + 1', 'id="s"') + btn('ref + 1', 'id="r"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let state = 0, ref = 0, renders = 1;
    const render = () => { renders++; draw(); };
    const draw = () => { $('#out').innerHTML = `Số lần component render: <b>${renders}</b><br>state = <b>${state}</b> (hiển thị)<br>ref.current = <b>${ref}</b> ${'<span class="small">(giá trị hiện trên màn hình chỉ cập nhật khi component render vì lý do khác)</span>'}`; };
    $('#s').onclick = () => { state++; render(); }; $('#r').onclick = () => { ref++; /* không render */ $('#out').innerHTML = $('#out').innerHTML.replace(/ref\.current = <b>\d+<\/b>/, 'ref.current = <b>' + (ref - 1) + '</b>') + '<div class="small">ref đã đổi thành ' + ref + ' nhưng <b>không</b> có render lại. Bấm “state + 1” để thấy giá trị mới.</div>'; }; draw();
  };

  // ---- Effect lifecycle ----
  WIDGETS['rx-effect-lifecycle'] = host => {
    host.innerHTML = '<div>roomId: ' + sel('room', ['general', 'travel', 'music'], 'general') + ' <label><input id="strict" type="checkbox"> Strict Mode (dev)</label> ' + btn('Gỡ component (unmount)', 'id="un"') + btn('Gắn lại', 'id="mt"') + '</div><div class="calc" id="out" style="margin-top:8px;max-height:240px;overflow:auto"></div>';
    const $ = $q(host); let log = [], cur = null, mounted = false;
    const setup = r => { log.push(`✅ setup: kết nối “${r}”`); cur = r; }; const cleanup = () => { if (cur !== null) { log.push(`❌ cleanup: ngắt “${cur}”`); cur = null; } };
    const draw = () => { $('#out').innerHTML = log.map((l, i) => `<div style="padding:2px 0">${i + 1}. ${l}</div>`).join('') || 'Chưa mount.'; };
    const mount = () => { mounted = true; const r = $('#room').value; setup(r); if ($('#strict').checked) { cleanup(); log.push('🧪 (Strict Mode chạy thêm một vòng cleanup + setup)'); setup(r); } draw(); };
    $('#room').onchange = () => { if (!mounted) return; cleanup(); setup($('#room').value); draw(); }; $('#un').onclick = () => { if (mounted) { cleanup(); mounted = false; draw(); } }; $('#mt').onclick = () => { if (!mounted) { log = []; mount(); } };
    log = []; mount();
  };

  // ---- Deps ----
  WIDGETS['rx-deps'] = mkQuiz([
    ['<code>useEffect(fn, [])</code>', 'Chỉ lúc mount', 'Cleanup khi unmount.'], ['<code>useEffect(fn)</code> (không có mảng)', 'Sau mọi render', ''],
    ['<code>useEffect(fn, [roomId])</code>', 'Khi roomId đổi (và lúc mount)', ''], ['<code>useEffect(fn, [a, b])</code> khi chỉ b đổi', 'Khi a hoặc b đổi', 'Chỉ cần một trong hai đổi.']
  ], ['Chỉ lúc mount', 'Sau mọi render', 'Khi roomId đổi (và lúc mount)', 'Khi a hoặc b đổi']);

  // ---- Memo ----
  WIDGETS['rx-memo'] = host => {
    host.innerHTML = '<label><input id="mm" type="checkbox" checked> Con bọc <code>memo</code> + props ổn định</label><div>' + btn('Cha: đổi state không liên quan', 'id="p"') + btn('Cha: đổi props của con', 'id="c"') + btn('Reset', 'id="r"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let parent = 0, child = 0, prop = 0;
    const draw = () => { $('#out').innerHTML = `Cha render: <b>${parent}</b> lần · Con render: <b>${child}</b> lần`; };
    $('#p').onclick = () => { parent++; if (!$('#mm').checked) child++; draw(); }; $('#c').onclick = () => { parent++; child++; prop++; draw(); }; $('#r').onclick = () => { parent = child = 0; draw(); }; draw();
  };

  // ---- Transition ----
  WIDGETS['rx-transition'] = host => {
    host.innerHTML = '<label><input id="tr" type="checkbox" checked> Dùng useDeferredValue/Transition cho danh sách</label>' + inp('q', '', 'Gõ để lọc 2000 mục…') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let timer = null; const items = Array.from({ length: 2000 }, (_, i) => 'Mục ' + (i + 1));
    const render = q => { const r = items.filter(x => x.includes(q)).slice(0, 5); return r.join(', ') + ` … (${items.filter(x => x.includes(q)).length} kết quả)`; };
    $('#q').oninput = () => { const q = $('#q').value; const t0 = performance.now(); if ($('#tr').checked) { $('#out').innerHTML = `Ô nhập: <b>cập nhật ngay</b><br>Danh sách (cũ, mờ): <span style="opacity:.5">${esc($('#out').dataset.last || '')}</span>`; clearTimeout(timer); timer = setTimeout(() => { const r = render(q); $('#out').dataset.last = r; $('#out').innerHTML = `Ô nhập: <b>mượt</b><br>Danh sách (đã đuổi kịp): ${esc(r)}`; }, 150); } else { const r = render(q); const busy = Date.now() + 250; while (Date.now() < busy) { } $('#out').dataset.last = r; $('#out').innerHTML = `Không có Transition: mỗi phím phải <b>chờ vẽ xong danh sách</b> (mô phỏng ~250ms) → ô nhập bị khựng.<br>${esc(r)}`; } };
    $('#out').textContent = 'Hãy gõ vào ô. Thử bỏ tích để thấy ô nhập bị khựng khi danh sách “nặng”.';
  };

  // ---- Suspense ----
  WIDGETS['rx-suspense'] = host => {
    host.innerHTML = '<div>' + btn('Tải dữ liệu (Suspense, không Transition)', 'id="a"') + btn('Tải dữ liệu (trong Transition)', 'id="b"') + '</div><div class="calc" id="out" style="margin-top:8px">Nội dung hiện tại: <b>Trang A</b></div>';
    const $ = $q(host); let busy = false;
    const go = (trans) => { if (busy) return; busy = true; $('#out').innerHTML = trans ? 'Nội dung hiện tại: <b>Trang A</b> (giữ nguyên) · <span class="small">isPending = true</span>' : '⏳ <b>fallback</b>: Đang tải…'; setTimeout(() => { busy = false; $('#out').innerHTML = 'Nội dung hiện tại: <b>Trang B</b> ✅'; }, 1200); };
    $('#a').onclick = () => go(false); $('#b').onclick = () => go(true);
  };

  // ---- ActionState ----
  WIDGETS['rx-actionstate'] = host => {
    host.innerHTML = '<div>Máy chủ: ' + sel('net', ['ổn', 'lỗi'], 'ổn') + ' ' + btn('Gửi (form action)', 'id="go"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let st = { ok: false }, pending = false;
    const draw = () => { $('#out').innerHTML = `isPending: <b>${pending}</b> · state: <code>${esc(JSON.stringify(st))}</code>${pending ? '<br>🔒 nút bị khóa' : ''}`; $('#go').disabled = pending; };
    $('#go').onclick = () => { pending = true; draw(); setTimeout(() => { st = $('#net').value === 'ổn' ? { ok: true } : { error: 'Không gửi được' }; pending = false; draw(); }, 900); }; draw();
  };

  // ---- Optimistic ----
  WIDGETS['rx-optimistic'] = host => {
    host.innerHTML = '<div>Máy chủ: ' + sel('net', ['ổn', 'lỗi'], 'ổn') + ' ' + btn('🤍 Thích', 'id="go"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let liked = false, opt = null, log = '';
    const draw = () => { const shown = opt !== null ? opt : liked; $('#out').innerHTML = `Hiển thị: <b style="font-size:1.4rem">${shown ? '❤️' : '🤍'}</b> ${opt !== null ? '<span class="small">(tạm thời — Action đang chạy)</span>' : ''}<br>Giá trị thật: ${liked ? 'đã thích' : 'chưa'}<div class="small">${log}</div>`; };
    $('#go').onclick = () => { if (opt !== null) return; opt = !liked; log = 'setOptimistic → hiện ngay…'; draw(); setTimeout(() => { if ($('#net').value === 'ổn') { liked = !liked; log = '✅ server xác nhận → giá trị thật = optimistic.'; } else log = '❌ server lỗi → giao diện tự quay về giá trị thật.'; opt = null; draw(); }, 1000); }; draw();
  };

  // ---- Hook pick ----
  WIDGETS['rx-hook-pick'] = mkQuiz([
    ['Đếm số lần bấm và hiển thị', 'useState', ''], ['Lưu id của setInterval để clear', 'useRef', ''], ['Kết nối WebSocket khi vào phòng, ngắt khi rời', 'useEffect', ''], ['Giữ tham chiếu ổn định cho hàm truyền xuống con memo', 'useCallback', ''],
    ['Tính danh sách lọc đắt, chỉ lại khi dữ liệu đổi', 'useMemo', ''], ['Ô tìm kiếm mượt, danh sách đuổi theo', 'useDeferredValue', ''], ['ID duy nhất cho thẻ label', 'useId', ''], ['Hiện ❤ ngay khi bấm, chờ server', 'useOptimistic', ''], ['Theo dõi navigator.onLine', 'useSyncExternalStore', '']
  ], ['useState', 'useRef', 'useEffect', 'useCallback', 'useMemo', 'useDeferredValue', 'useId', 'useOptimistic', 'useSyncExternalStore']);

  // ---- Activity ----
  WIDGETS['rx-activity'] = host => {
    host.innerHTML = '<label><input id="act" type="checkbox"> Dùng <code>&lt;Activity&gt;</code> (giữ state khi ẩn)</label><div>' + btn('Ẩn/Hiện Sidebar', 'id="tg"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let show = true, open = false;
    const draw = () => { const use = $('#act').checked; const body = show || use ? `<div style="padding:6px;border:1px solid var(--line);border-radius:8px;${show ? '' : 'display:none'}">${btn('Overview ' + (open ? '▾' : '▸'), 'id="ov"')}${open ? '<div class="small">• Mục con 1 • Mục con 2 • Mục con 3</div>' : ''}</div>` : '<i>(Sidebar đã bị gỡ khỏi cây)</i>'; $('#out').innerHTML = body; const ov = host.querySelector('#ov'); if (ov) ov.onclick = () => { open = !open; draw(); }; };
    $('#tg').onclick = () => { show = !show; if (!show && !$('#act').checked) open = false; draw(); }; $('#act').onchange = () => { open = false; draw(); }; draw();
  };

  // ---- Server / Client ----
  WIDGETS['rx-server-client'] = mkQuiz([
    ['Component có <code>onClick</code> và <code>useState</code>', 'Client', 'Cần tương tác/state.'], ['Component <code>async</code> truy vấn database rồi render danh sách', 'Server', 'Không cần JS ở client.'],
    ['Component dùng <code>useEffect</code> + <code>window.addEventListener</code>', 'Client', 'API trình duyệt.'], ['Component chỉ hiển thị dữ liệu đã tải, không tương tác', 'Server', 'Mặc định nên là Server.'], ['Hàm async <code>\'use server\'</code> lưu ghi chú', 'Server Function', 'Chạy server, gọi từ client.']
  ], ['Server', 'Client', 'Server Function']);

  // ---- Rules of Hooks ----
  WIDGETS['rx-hooks-rules'] = host => {
    const Q = [['if (loggedIn) { const [n, setN] = useState(0) }', 'Vi phạm', 'Hook trong điều kiện.'], ['function Form() { const [a, setA] = useState(""); ... }', 'Hợp lệ', 'Cấp trên cùng của component.'], ['function onClick() { const t = useContext(Theme) }', 'Vi phạm', 'Hook trong event handler.'], ['if (!user) return null; const [x] = useState(0)', 'Vi phạm', 'Hook sau return sớm.'], ['function useOnline() { return useSyncExternalStore(sub, get) }', 'Hợp lệ', 'Custom Hook tên use…'], ['for (const i of list) { useEffect(...) }', 'Vi phạm', 'Hook trong vòng lặp.']];
    host.innerHTML = Q.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><code>${esc(q[0])}</code><br>${btn('Hợp lệ', `data-i="${i}" data-a="Hợp lệ"`)}${btn('Vi phạm', `data-i="${i}" data-a="Vi phạm"`)} <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const q = Q[+b.dataset.i]; host.querySelector('#r' + b.dataset.i).textContent = (b.dataset.a === q[1] ? '✅ ' : '❌ Đáp án: ' + q[1] + ' — ') + q[2]; });
  };

  // ---- Purity ----
  WIDGETS['rx-purity'] = host => {
    const Q = [['let n = 0; function C() { n++; return <p>{n}</p> }', 'Không thuần', 'Sửa biến ngoài khi render.'], ['function C({ a, b }) { return <p>{a + b}</p> }', 'Thuần', 'Chỉ dùng props.'], ['function C() { return <p>{Math.random()}</p> }', 'Không thuần', 'Mỗi lần render khác nhau.'], ['function C({ items }) { items.push(1); return <p>{items.length}</p> }', 'Không thuần', 'Sửa props.'], ['function C({ items }) { const next = [...items, 1]; return <p>{next.length}</p> }', 'Thuần', 'Tạo bản sao.'], ['function C() { useEffect(() => { fetch("/x") }, []); return <p/> }', 'Thuần', 'Tác dụng phụ nằm trong Effect.']];
    host.innerHTML = Q.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><code>${esc(q[0])}</code><br>${btn('Thuần', `data-i="${i}" data-a="Thuần"`)}${btn('Không thuần', `data-i="${i}" data-a="Không thuần"`)} <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const q = Q[+b.dataset.i]; host.querySelector('#r' + b.dataset.i).textContent = (b.dataset.a === q[1] ? '✅ ' : '❌ Đáp án: ' + q[1] + ' — ') + q[2]; });
  };

  // ---- Legacy ----
  WIDGETS['rx-legacy'] = mkQuiz([
    ['<code>class A extends PureComponent</code>', 'memo(Component)', ''], ['<code>createRef()</code> trong class', 'useRef', ''], ['<code>forwardRef((props, ref) =&gt; ...)</code> (React 19)', 'ref là prop thường', ''], ['<code>componentDidMount() { ... }</code> + <code>componentWillUnmount()</code>', 'useEffect(..., [])', ''], ['<code>React.createElement("h1", null, "Hi")</code>', 'JSX', '']
  ], ['memo(Component)', 'useRef', 'ref là prop thường', 'useEffect(..., [])', 'JSX']);

  // ---- API lookup ----
  const API = [['useState', 'State đơn giản'], ['useReducer', 'State phức tạp qua reducer'], ['useContext', 'Đọc context'], ['createContext', 'Tạo context'], ['useRef', 'Giá trị nhớ không render / DOM ref'], ['useImperativeHandle', 'Tùy chỉnh handle ref cho cha'],
    ['useEffect', 'Đồng bộ với hệ thống ngoài'], ['useEffectEvent', 'Logic như sự kiện trong Effect'], ['useLayoutEffect', 'Effect chạy trước khi vẽ'], ['useInsertionEffect', 'Chèn style (CSS-in-JS)'], ['useMemo', 'Nhớ kết quả tính toán'], ['useCallback', 'Nhớ hàm'], ['memo', 'Bỏ render lại khi props không đổi'],
    ['useTransition', 'Cập nhật làm nền + isPending'], ['startTransition', 'Đánh dấu cập nhật Transition'], ['useDeferredValue', 'Giá trị trễ để UI mượt'], ['Suspense', 'Hiện fallback khi chờ'], ['lazy', 'Tải code khi cần'], ['use', 'Đọc Promise/context lúc render'],
    ['useActionState', 'State kết quả của Action (form)'], ['useOptimistic', 'Cập nhật lạc quan'], ['useId', 'ID duy nhất cho tiếp cận'], ['useSyncExternalStore', 'Đọc kho ngoài React'], ['useDebugValue', 'Nhãn custom Hook trong DevTools'],
    ['Fragment', 'Nhóm phần tử không thêm DOM'], ['StrictMode', 'Kiểm tra lúc development'], ['Profiler', 'Đo thời gian render'], ['Activity', 'Ẩn/hiện giữ state'], ['ViewTransition', 'Hiệu ứng chuyển cảnh'], ['addTransitionType', 'Ghi nguyên nhân transition'],
    ['cache', 'Nhớ kết quả trong một request (RSC)'], ['cacheSignal', 'AbortSignal hết vòng đời cache'], ['act', 'Helper kiểm thử'], ['captureOwnerStack', 'Owner Stack để gỡ lỗi (dev)'], ["'use client'", 'Ranh giới code client'], ["'use server'", 'Server Function'],
    ['forwardRef', 'Legacy: chuyển ref (React 19 bỏ)'], ['Component / PureComponent', 'Legacy: class component'], ['Children / cloneElement', 'Legacy: thao tác children/phần tử'], ['createElement / isValidElement / createRef', 'Legacy/tiện ích']];
  WIDGETS['rx-api-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: ref, form, cache, ẩn, tối ưu…') + '<div id="out" style="margin-top:8px;max-height:300px;overflow:auto"></div>';
    const $ = $q(host); const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = API.filter(a => !q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(a => `<div style="padding:4px 0;border-bottom:1px solid var(--line)"><code>${esc(a[0])}</code> — ${esc(a[1])}</div>`).join('') : 'Không tìm thấy.'; };
    $('#q').oninput = draw; draw();
  };
})();
