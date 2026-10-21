// Widget cho giáo trình Nuxt 4 (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const pre = t => `<pre style="white-space:pre-wrap;word-break:break-word;margin:6px 0;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px">${esc(t)}</pre>`;
  const inp = (id, v, ph) => `<input id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const chk = (id, label, on) => `<label style="display:inline-block;margin:3px 10px 3px 0"><input id="${id}" type="checkbox" ${on ? 'checked' : ''}> ${label}</label>`;
  const sel = (id, opts, val) => `<select id="${id}" style="padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">${opts.map(o => `<option ${o === val ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  const copy = (host, get) => { const b = document.createElement('button'); b.className = 'btn sm'; b.textContent = '📋 Sao chép'; b.style.marginTop = '6px'; b.onclick = () => { try { navigator.clipboard.writeText(get()); b.textContent = '✅ Đã chép'; setTimeout(() => b.textContent = '📋 Sao chép', 1500); } catch (e) { } }; host.appendChild(b); };

  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${q[0]}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };
  function chooser(host, cfg) {
    host.innerHTML = '<div class="small">Tích những điều đúng với bạn:</div>' + cfg.q.map((q, i) => `<label style="display:block;margin:4px 0"><input type="checkbox" data-i="${i}"> ${esc(q[0])}</label>`).join('') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const draw = () => {
      const sc = cfg.opts.map(() => 0); host.querySelectorAll('input:checked').forEach(c => cfg.q[+c.dataset.i][1].forEach(k => sc[k]++));
      const max = Math.max(...sc), best = sc.reduce((a, s, i) => s === max ? a.concat(i) : a, []);
      host.querySelector('#out').innerHTML = max === 0 ? 'Chưa chọn gì.' : cfg.opts.map((o, i) => `<div style="${best.includes(i) ? 'font-weight:700' : ''}">${best.includes(i) ? '👉 ' : ''}${esc(o)}: ${sc[i]} điểm</div>`).join('') + `<span class="small">${esc(cfg.note || '')}</span>`;
    };
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
  }

  // ---- Cấu trúc thư mục ----
  const DIRS = [
    ['app/', 'Code giao diện Vue của ứng dụng (Nuxt 4).', 'Tùy thư mục con', 'Cả server và client'],
    ['app/pages/', 'Mỗi file = một route (định tuyến theo file).', 'Không (Nuxt đọc cấu trúc)', 'Cả server và client'],
    ['app/components/', 'Component UI tái dùng; tên theo đường dẫn.', 'Có (component)', 'Cả hai'],
    ['app/composables/', 'Hàm Vue dùng lại (<code>useXxx</code>).', 'Có (cấp trên cùng)', 'Cả hai'],
    ['app/utils/', 'Hàm tiện ích của phần giao diện.', 'Có', 'Cả hai (chỉ phần Vue)'],
    ['app/layouts/', 'Khung bọc nhiều trang.', 'Qua &lt;NuxtLayout&gt;', 'Cả hai'],
    ['app/middleware/', 'Chạy trước khi vào route.', 'Theo tên', 'Cả hai (phần Vue)'],
    ['app/plugins/', 'Chạy khi tạo app Vue.', 'Tự đăng ký', 'Server/client theo hậu tố'],
    ['app/assets/', 'Tệp do build xử lý (CSS, font, ảnh).', 'Không', 'Build time'],
    ['server/', 'API, middleware, plugin của Nitro.', 'server/utils có', 'Chỉ server'],
    ['shared/', 'Code dùng chung app + server.', 'shared/utils, shared/types', 'Cả hai'],
    ['public/', 'Tệp tĩnh phục vụ nguyên trạng ở URL gốc.', 'Không', 'Không qua build'],
    ['modules/', 'Module cục bộ, tự đăng ký.', 'Tự đăng ký', 'Build time'],
    ['.nuxt/', 'Sinh tự động (kiểu, auto-import). Không commit.', '—', 'Dev'],
    ['.output/', 'Kết quả build để deploy. Không commit.', '—', 'Production']
  ];
  WIDGETS['nx-structure'] = host => {
    host.innerHTML = '<div id="b"></div><div class="calc" id="out" style="margin-top:8px">Bấm một thư mục.</div>';
    host.querySelector('#b').innerHTML = DIRS.map((d, i) => btn(esc(d[0]), `data-i="${i}"`)).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const d = DIRS[+b.dataset.i]; host.querySelector('#out').innerHTML = `<b>${esc(d[0])}</b><br>🎯 ${d[1]}<br>🪄 Auto-import: ${d[2]}<br>📍 Chạy ở: ${d[3]}`; });
  };

  // ---- runtimeConfig ----
  WIDGETS['nx-runtimeconfig'] = host => {
    const K = [['apiSecret', 'private', 'NUXT_API_SECRET'], ['public.apiBase', 'public', 'NUXT_PUBLIC_API_BASE'], ['public.siteName', 'public', 'NUXT_PUBLIC_SITE_NAME'], ['dbPassword', 'private', 'NUXT_DB_PASSWORD']];
    host.innerHTML = '<div>Khóa: ' + sel('k', K.map(k => k[0]), 'apiSecret') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const k = K.find(x => x[0] === $('#k').value); $('#out').innerHTML = `<code>${k[0]}</code><br>👀 Server: ✅ thấy<br>🌐 Trình duyệt: ${k[1] === 'public' ? '✅ thấy (trong payload mọi trang)' : '❌ không thấy'}<br>🔧 Ghi đè lúc chạy: <code>${k[2]}=...</code><br><span class="small">${k[1] === 'private' ? 'Bí mật: giữ ở khóa riêng, chỉ dùng trong server/.' : 'Công khai: đừng đặt bí mật ở đây.'}</span>`; };
    $('#k').onchange = draw; draw();
  };

  // ---- Config builder ----
  WIDGETS['nx-config-builder'] = host => {
    host.innerHTML = '<div>' + chk('ts', 'devtools: true', true) + chk('css', 'Thêm CSS toàn cục', false) + chk('img', 'Module @nuxt/image', false) + chk('pinia', 'Module @pinia/nuxt', false) + chk('rc', 'runtimeConfig (secret + public)', true) + chk('prod', 'Ghi đè $production (ISR)', false) + '</div><div>Chế độ render: ' + sel('ssr', ['SSR (mặc định)', 'Client-side (ssr:false)'], 'SSR (mặc định)') + '</div><div id="out"></div>';
    const $ = $q(host);
    const draw = () => {
      const L = []; if ($('#ts').checked) L.push('  devtools: { enabled: true },');
      const mods = []; if ($('#img').checked) mods.push("'@nuxt/image'"); if ($('#pinia').checked) mods.push("'@pinia/nuxt'"); if (mods.length) L.push(`  modules: [${mods.join(', ')}],`);
      if ($('#css').checked) L.push("  css: ['~/assets/css/main.css'],");
      if ($('#ssr').value.startsWith('Client')) L.push('  ssr: false,');
      if ($('#rc').checked) L.push('  runtimeConfig: {\n    apiSecret: \'\',            // NUXT_API_SECRET\n    public: { apiBase: \'/api\' }  // NUXT_PUBLIC_API_BASE\n  },');
      if ($('#prod').checked) L.push("  $production: { routeRules: { '/**': { isr: true } } },");
      const t = 'export default defineNuxtConfig({\n' + L.join('\n') + '\n})'; $('#out').innerHTML = pre(t); $('#out').dataset.t = t;
    };
    host.querySelectorAll('input,select').forEach(i => { i.onchange = draw; }); draw(); copy(host, () => $('#out').dataset.t);
  };

  // ---- Layout pick ----
  WIDGETS['nx-layout-pick'] = mkQuiz([
    ['Header và footer giống nhau cho nhiều trang', 'layouts', 'Khung bọc nhiều trang.'], ['Trang “Giới thiệu” ở /about', 'pages', 'Một route cụ thể.'],
    ['Nút bấm dùng ở nhiều trang', 'components', 'Mảnh UI tái dùng.'], ['Thành phần gốc cho mọi route, có &lt;NuxtPage/&gt;', 'app.vue', 'Điểm vào.']
  ], ['app.vue', 'layouts', 'pages', 'components']);

  // ---- Component name ----
  WIDGETS['nx-component-name'] = host => {
    host.innerHTML = '<div>Đường dẫn trong <code>app/components/</code>:</div>' + inp('p', 'base/foo/Button.vue') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => {
      const raw = $('#p').value.replace(/\.vue$/, '').split('/').filter(Boolean).filter(s => !/^\(.*\)$/.test(s));
      const pas = raw.map(s => s.replace(/(^|[-_ ])(\w)/g, (m, a, c) => c.toUpperCase()));
      const out = []; pas.forEach((p, i) => { if (i > 0) { const q = pas[i - 1]; if (p === q) return; if (p.startsWith(q)) p = p.slice(q.length); } out.push(p); });
      const name = out.join(''); const kebab = name.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
      $('#out').innerHTML = name ? `Dùng: <code>&lt;${esc(name)} /&gt;</code> hoặc <code>&lt;${esc(kebab)} /&gt;</code><br>Tải lười: <code>&lt;Lazy${esc(name)} /&gt;</code><br><span class="small">Thư mục trong ngoặc <code>(nhóm)</code> không ảnh hưởng tên; đoạn trùng bị lược.</span>` : 'Nhập đường dẫn.';
    };
    $('#p').oninput = draw; draw();
  };

  // ---- File routing ----
  WIDGETS['nx-file-routing'] = host => {
    host.innerHTML = '<div>File trong <code>app/pages/</code>:</div>' + inp('f', 'users/[id].vue') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => {
      let f = $('#f').value.trim().replace(/\.(vue|ts|js|tsx|jsx|mjs)$/, ''); if (!f) { $('#out').textContent = 'Nhập tên file.'; return; }
      const params = []; let path = '/' + f.split('/').map(seg => { if (seg === 'index') return ''; let m = seg.match(/^\[\[(\w+)\]\]$/); if (m) { params.push([m[1], 'tùy chọn']); return ':' + m[1] + '?'; } m = seg.match(/^\[(\w+)\]$/); if (m) { params.push([m[1], 'bắt buộc']); return ':' + m[1]; } return seg; }).filter(s => s !== '').join('/');
      const ex = path.replace(/:(\w+)\??/g, (m, n) => '123');
      $('#out').innerHTML = `Route: <b>${esc(path || '/')}</b>` + (params.length ? `<br>Tham số: ${params.map(p => `<code>${p[0]}</code> (${p[1]})`).join(', ')} → <code>useRoute().params.${params[0][0]}</code><br>Ví dụ URL: <code>${esc(ex)}</code>` : '<br>Route tĩnh.');
    };
    $('#f').oninput = draw; draw();
  };

  // ---- Middleware sim ----
  WIDGETS['nx-middleware-sim'] = host => {
    host.innerHTML = '<div>Đăng nhập: ' + sel('li', ['chưa', 'rồi'], 'chưa') + ' Đi tới: ' + sel('to', ['/', '/login', '/dashboard', '/admin'], '/dashboard') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => {
      const li = $('#li').value === 'rồi', to = $('#to').value; const steps = ['1) Middleware toàn cục <code>log.global.ts</code> → ghi log (không return) → đi tiếp'];
      if (to === '/dashboard' || to === '/admin') { steps.push('2) Middleware có tên <code>auth</code> (khai báo trong definePageMeta)'); if (!li) steps.push('   → <b>return navigateTo("/login")</b> ⛔ chuyển hướng'); else if (to === '/admin') steps.push('   → <b>return abortNavigation()</b> ⛔ bạn không phải admin (ví dụ)'); else steps.push('   → không return → ✅ vào <code>/dashboard</code>'); } else steps.push('2) Trang này không khai báo middleware → ✅ vào <code>' + to + '</code>');
      $('#out').innerHTML = steps.join('<br>') + '<br><span class="small">Nuxt không có next(); kết quả quyết định bằng giá trị trả về.</span>';
    };
    host.querySelectorAll('select').forEach(s => s.onchange = draw); draw();
  };

  // ---- Fetch pick ----
  WIDGETS['nx-fetch-pick'] = mkQuiz([
    ['Tải danh sách sản phẩm để vẽ trang', 'useFetch', 'Một lần, SSR-friendly.'], ['Người dùng bấm “Gửi” để POST biểu mẫu', '$fetch', 'Tương tác phía client.'],
    ['Lấy dữ liệu từ CMS có SDK riêng (không phải URL thuần)', 'useAsyncData', 'Bọc logic tùy ý.'], ['Gọi hai API cùng lúc rồi ghép kết quả để vẽ trang', 'useAsyncData', 'Bọc nhiều $fetch.']
  ], ['useFetch', 'useAsyncData', '$fetch']);

  // ---- Hydration sim ----
  WIDGETS['nx-hydration-sim'] = host => {
    host.innerHTML = '<div>' + btn('Gọi API thường ($fetch trong setup)', 'data-m="a"') + btn('useFetch + payload', 'data-m="b"') + '</div><div class="calc" id="out" style="margin-top:8px">Chọn cách làm.</div>';
    host.querySelectorAll('button').forEach(b => b.onclick = () => { host.querySelector('#out').innerHTML = b.dataset.m === 'a' ? '1) Server gọi <code>/api/data</code> (lần 1) → dựng HTML.<br>2) Trình duyệt hydrate → chạy lại setup → <b>gọi API lần 2</b> ⚠<br>Hệ quả: tốn gấp đôi, dữ liệu có thể lệch (hydration mismatch), không chặn điều hướng.' : '1) Server gọi <code>/api/data</code> → dựng HTML và <b>nhét kết quả vào payload</b>.<br>2) Trình duyệt hydrate → <b>đọc payload</b>, không gọi API ✅<br>Hệ quả: một lần gọi, nhất quán, có thể giữ điều hướng đến khi có dữ liệu.'; });
  };

  // ---- State pick ----
  WIDGETS['nx-state-pick'] = mkQuiz([
    ['Số đếm chỉ dùng trong một component', 'ref', 'State cục bộ.'], ['Người dùng hiện tại dùng khắp app, cần chia sẻ SSR', 'useState', 'Chia sẻ theo key, thân thiện SSR.'],
    ['Giỏ hàng lớn với nhiều action/getter phức tạp', 'Pinia', 'Store có cấu trúc.'], ['Biến <code>export const x = ref()</code> ở cấp module', 'Đừng làm (rò rỉ giữa request)', 'Dùng useState bọc trong hàm.']
  ], ['ref', 'useState', 'Pinia', 'Đừng làm (rò rỉ giữa request)']);

  // ---- Server route ----
  WIDGETS['nx-server-route'] = host => {
    host.innerHTML = '<div>File trong <code>server/</code>:</div>' + inp('f', 'api/users/[id].get.ts') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => {
      let f = $('#f').value.trim(); const m = f.match(/\.(get|post|put|patch|delete)\.(ts|js)$/); const method = m ? m[1].toUpperCase() : 'Mọi method';
      f = f.replace(/\.(get|post|put|patch|delete)?\.?(ts|js)$/, ''); const isApi = f.startsWith('api/'), isRoute = f.startsWith('routes/'), isMw = f.startsWith('middleware/');
      if (isMw) { $('#out').innerHTML = 'Server middleware: chạy trước <b>mọi</b> request. Không trả response.'; return; }
      if (!isApi && !isRoute) { $('#out').innerHTML = 'Đặt trong <code>api/</code> (có /api) hoặc <code>routes/</code> (không tiền tố).'; return; }
      const path = '/' + f.replace(/^(api|routes)\//, (x) => isApi ? 'api/' : '').split('/').map(s => { const mm = s.match(/^\[(\w+)\]$/); return mm ? ':' + mm[1] : s === 'index' ? '' : s; }).filter(Boolean).join('/');
      $('#out').innerHTML = `${method} <b>${esc(path)}</b>`;
    };
    $('#f').oninput = draw; draw();
  };

  // ---- Rendering pick ----
  WIDGETS['nx-rendering-pick'] = h => chooser(h, { opts: ['Universal (SSR)', 'Client-side (ssr:false)', 'Prerender (tĩnh)', 'Hybrid (routeRules)'], q: [['Cần SEO tốt, nội dung thay đổi theo người/yêu cầu', [0, 3]], ['Ứng dụng nội bộ/SaaS, không cần SEO', [1]], ['Nội dung ít đổi, muốn hosting tĩnh rẻ', [2]], ['Site lớn: trang chủ tĩnh, sản phẩm cache, admin chỉ client', [3]], ['Muốn chạy offline/đơn giản, không lo tương thích server', [1]], ['Blog/trang giới thiệu cần tốc độ tối đa', [2, 0]]], note: ' Không có đáp án tuyệt đối: hybrid cho phép trộn các kiểu.' });

  // ---- routeRules builder ----
  WIDGETS['nx-routerules'] = host => {
    host.innerHTML = '<div>Route: ' + inp('r', '/blog/**') + ' Chế độ: ' + sel('m', ['prerender', 'swr (cache)', 'isr', 'ssr: false', 'redirect', 'cors'], 'isr') + btn('➕ Thêm', 'id="add"') + btn('Xóa hết', 'id="clr"') + '</div><div id="out"></div>';
    const $ = $q(host); let rules = [['/', 'prerender'], ['/admin/**', 'ssr: false']];
    const val = m => ({ prerender: '{ prerender: true }', 'swr (cache)': '{ swr: 3600 }', isr: '{ isr: 3600 }', 'ssr: false': '{ ssr: false }', redirect: "{ redirect: '/new-page' }", cors: '{ cors: true }' })[m];
    const draw = () => { const t = 'export default defineNuxtConfig({\n  routeRules: {\n' + rules.map(r => `    '${r[0]}': ${val(r[1])},`).join('\n') + '\n  },\n})'; $('#out').innerHTML = pre(t); $('#out').dataset.t = t; };
    $('#add').onclick = () => { const r = $('#r').value.trim(); if (r) { rules.push([r, $('#m').value]); draw(); } }; $('#clr').onclick = () => { rules = []; draw(); }; draw(); copy(host, () => $('#out').dataset.t);
  };

  // ---- Lifecycle ----
  WIDGETS['nx-lifecycle'] = host => {
    const S = [['🛰 Server', 'Plugin Nitro (một lần khi khởi động)'], ['🛰 Server', 'Middleware server (mỗi request)'], ['🛰 Server', 'Plugin app → hook app:created'], ['🛰 Server', 'Kiểm tra route (validate)'], ['🛰 Server', 'Middleware route'], ['🛰 Server', 'Render trang + lấy dữ liệu (useFetch…)'], ['🛰 Server', 'Sinh HTML + head → app:rendered → render:html'], ['🌐 Client', 'Plugin app → app:created'], ['🌐 Client', 'Kiểm tra route + middleware route'], ['🌐 Client', 'app:beforeMount → mount & hydrate → app:mounted'], ['🌐 Client', 'Hook Vue (onMounted…) — trang tương tác']];
    let k = 0; host.innerHTML = '<div id="out" class="calc"></div><div style="margin-top:6px">' + btn('Bước tiếp ▶', 'id="n"') + btn('Làm lại', 'id="r"') + '</div>';
    const $ = $q(host); const draw = () => { $('#out').innerHTML = S.slice(0, k).map((s, i) => `<div style="padding:3px 0;${i === k - 1 ? 'font-weight:700' : 'opacity:.7'}">${i + 1}. ${s[0]} — ${s[1]}</div>`).join('') || 'Bấm “Bước tiếp”.'; };
    $('#n').onclick = () => { if (k < S.length) k++; draw(); }; $('#r').onclick = () => { k = 0; draw(); }; draw();
  };

  // ---- Auto import ----
  WIDGETS['nx-autoimport'] = mkQuiz([
    ['<code>ref</code>, <code>computed</code> của Vue', 'Có', 'Vue API được auto-import.'], ['<code>useFetch</code>', 'Có', 'Composable của Nuxt.'], ['Component trong <code>app/components/</code>', 'Có', ''],
    ['Hàm trong <code>app/composables/sub/foo.ts</code> (thư mục con)', 'Không (chỉ cấp trên cùng)', 'Cần re-export hoặc cấu hình scan.'], ['Hàm trong <code>server/utils/</code>', 'Có (chỉ trong server/)', ''], ['Hàm trong <code>shared/lib/x.ts</code>', 'Không (dùng alias #shared)', 'Chỉ shared/utils và shared/types được auto-import.']
  ], ['Có', 'Có (chỉ trong server/)', 'Không (chỉ cấp trên cùng)', 'Không (dùng alias #shared)']);

  // ---- Hydration fix ----
  WIDGETS['nx-hydration-fix'] = host => {
    const Q = [
      ['&lt;p&gt;{{ Math.random() }}&lt;/p&gt; trong template', 'Có', 'Server và client ra số khác nhau → dùng useState/useFetch hoặc render sau mounted.'],
      ['&lt;p&gt;{{ window.innerWidth }}&lt;/p&gt;', 'Có', 'window không tồn tại ở server → bọc &lt;ClientOnly&gt; hoặc dùng onMounted.'],
      ['const user = useState("user", () =&gt; ({ name: "Lan" }))', 'Không', 'State chia sẻ qua payload nên nhất quán.'],
      ['&lt;p&gt;&lt;div&gt;Nội dung&lt;/div&gt;&lt;/p&gt;', 'Có', 'HTML không hợp lệ: trình duyệt tự sửa, lệch cây DOM.'],
      ['const { data } = await useFetch("/api/x")', 'Không', 'Dữ liệu forward qua payload.']
    ];
    host.innerHTML = Q.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><code>${q[0]}</code><br><span class="small">Gây hydration mismatch?</span> ${btn('Có', `data-i="${i}" data-a="Có"`)}${btn('Không', `data-i="${i}" data-a="Không"`)} <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const q = Q[+b.dataset.i]; host.querySelector('#r' + b.dataset.i).innerHTML = (b.dataset.a === q[1] ? '✅ ' : '❌ Đáp án: ' + q[1] + ' — ') + q[2]; });
  };

  // ---- Module prefix ----
  WIDGETS['nx-module-prefix'] = mkQuiz([
    ['Component của module “nuxt-foo”', '&lt;FooButton&gt;', 'Tránh trùng &lt;Button&gt;.'], ['Composable của module', 'useFooData()', 'Tránh useData().'], ['Route server của module', '/api/_foo/track', 'Tránh /api/track.']
  ], ['&lt;FooButton&gt;', '&lt;Button&gt;', 'useFooData()', 'useData()', '/api/_foo/track', '/api/track']);
  // mkQuiz escapes values via esc for options but expects raw: re-map to plain text
  const _mp = WIDGETS['nx-module-prefix']; WIDGETS['nx-module-prefix'] = host => { _mp(host); host.querySelectorAll('option').forEach(o => { o.textContent = o.textContent.replace(/&lt;/g, '<').replace(/&gt;/g, '>'); }); host.querySelectorAll('select').forEach(s => { const orig = s.onchange; s.onchange = () => { const i = +s.dataset.i; const ans = [['<FooButton>'], ['useFooData()'], ['/api/_foo/track']][i][0]; host.querySelector('#r' + i).textContent = !s.value ? '' : s.value === ans ? '✅ Đúng quy ước tiền tố' : '❌ Nên là ' + ans; }; }); };

  // ---- Layer vs module ----
  WIDGETS['nx-layer-vs-module'] = h => chooser(h, { opts: ['Module', 'Layer'], q: [['Thêm tích hợp có sẵn (Pinia, ảnh, auth) vào app', [0]], ['Chia sẻ theme + component + trang giữa nhiều dự án', [1]], ['Cần thêm plugin/handler server bằng code lúc build (addPlugin…)', [0]], ['Muốn nhà mẫu để ghi đè từng phần', [1]], ['Đóng gói tính năng để xuất bản lên npm cho cộng đồng', [0]], ['Chia dự án lớn thành các miền (DDD) trong cùng repo', [1]]] });

  // ---- Recipe pick ----
  WIDGETS['nx-recipe-pick'] = mkQuiz([
    ['Gọi API ngoài, luôn kèm token và chuyển /login khi 401', 'useFetch tùy biến (useAPI)', 'Bọc createUseFetch.'], ['Đăng nhập, lưu session không cần database', 'nuxt-auth-utils', 'Cookie niêm phong.'],
    ['Trang marketing gần như không cần JavaScript', 'Mostly-static', 'prerender + noScripts + islands.'], ['Import file .yaml trong code', 'Plugin Vite', 'vite.plugins hoặc addVitePlugin.'], ['Thêm route không có trong pages/', 'Tùy chỉnh route', 'pages:extend / router options.']
  ], ['useFetch tùy biến (useAPI)', 'nuxt-auth-utils', 'Mostly-static', 'Plugin Vite', 'Tùy chỉnh route']);

  // ---- API lookup ----
  const API = [
    ['useFetch', 'Lấy dữ liệu từ URL, SSR-friendly (data/status/error/refresh)'], ['useAsyncData', 'Bọc logic bất đồng bộ bất kỳ với key'], ['useLazyFetch', 'useFetch không chặn điều hướng'], ['useState', 'State chia sẻ thân thiện SSR'],
    ['useCookie', 'Đọc/ghi cookie (maxAge, httpOnly, sameSite…)'], ['useRuntimeConfig', 'Đọc runtime config'], ['useAppConfig', 'Đọc app.config'], ['useRoute', 'Route hiện tại (params, query)'], ['useRouter', 'Điều khiển router'],
    ['useHead', 'Đặt thẻ head (reactive)'], ['useSeoMeta', 'Đặt meta SEO/Open Graph có kiểu'], ['useNuxtApp', 'Ngữ cảnh Nuxt (hook, payload)'], ['useError', 'Lỗi hiện tại'], ['useRequestHeaders', 'Header của request gốc (ở server)'],
    ['navigateTo', 'Chuyển hướng (server + client); await/return'], ['abortNavigation', 'Hủy điều hướng trong middleware'], ['defineNuxtRouteMiddleware', 'Khai báo middleware route'], ['definePageMeta', 'Metadata trang: layout, middleware, name, path…'],
    ['defineNuxtPlugin', 'Khai báo plugin'], ['createError', 'Tạo/ném lỗi có status'], ['showError', 'Hiện trang lỗi'], ['clearError', 'Xóa lỗi (có redirect)'], ['prerenderRoutes', 'Chỉ định route dựng sẵn'], ['refreshNuxtData', 'Làm mới dữ liệu theo key'], ['clearNuxtState', 'Xóa/reset useState'], ['callOnce', 'Chạy khởi tạo một lần'],
    ['nuxt dev', 'Server phát triển'], ['nuxt build', 'Build ra .output'], ['nuxt generate', 'Build + prerender tĩnh'], ['nuxt preview', 'Chạy thử bản build'], ['nuxt prepare', 'Sinh kiểu .nuxt'], ['nuxt typecheck', 'Kiểm kiểu TS'], ['nuxt analyze', 'Phân tích bundle'], ['nuxt module add', 'Cài module'], ['nuxt upgrade', 'Nâng cấp Nuxt'],
    ['NuxtLink', 'Liên kết, prefetch'], ['NuxtPage', 'Nơi hiện trang'], ['NuxtLayout', 'Bật layout'], ['ClientOnly', 'Chỉ render client'], ['NuxtImg', 'Ảnh tối ưu (@nuxt/image)']
  ];
  WIDGETS['nx-api-lookup'] = host => {
    host.innerHTML = inp('q', '', 'cookie, redirect, meta, build, lỗi…') + '<div id="out" style="margin-top:8px;max-height:300px;overflow:auto"></div>';
    const $ = $q(host); const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = API.filter(a => !q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(a => `<div style="padding:4px 0;border-bottom:1px solid var(--line)"><code>${esc(a[0])}</code> — ${esc(a[1])}</div>`).join('') : 'Không tìm thấy.'; };
    $('#q').oninput = draw; draw();
  };
})();
