// Widget cho giáo trình Angular (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const inp = (id, v, ph) => `<input id="${id}" value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${q[0]}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };

  // ---- cú pháp ----
  WIDGETS['ng-syntax-quiz'] = mkQuiz([
    ['<code>[value]="x()"</code>', 'Đẩy dữ liệu vào (property binding)', ''],
    ['<code>(click)="save()"</code>', 'Nhận sự kiện', ''],
    ['<code>[(count)]="n"</code>', 'Hai chiều (chuối trong hộp)', ''],
    ['<code>{{ name() }}</code>', 'Nội suy văn bản', '']
  ], ['Đẩy dữ liệu vào (property binding)', 'Nhận sự kiện', 'Hai chiều (chuối trong hộp)', 'Nội suy văn bản']);

  // ---- input / output / model ----
  WIDGETS['ng-io-flow'] = host => {
    host.innerHTML = '<div style="display:flex;gap:10px;flex-wrap:wrap"><div style="flex:1;min-width:170px;border:1px solid var(--line);border-radius:10px;padding:8px"><b>Cha</b><div>likes = <b id="pl">0</b> · count = <b id="pc">0</b></div></div><div style="flex:1;min-width:170px;border:1px dashed var(--line);border-radius:10px;padding:8px"><b>Con</b><div>likes() = <b id="cl">0</b> (input, chỉ đọc)</div>' + btn('output: liked.emit()', 'id="like"') + '<div>count() = <b id="cc">0</b> (model)</div>' + btn('count.set(+1)', 'id="m"') + '</div></div>' + btn('Cha: likes += 5', 'id="p5"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px">Thử các nút.</div>';
    const $ = $q(host); let likes = 0, count = 0;
    const draw = () => { $('#pl').textContent = likes; $('#cl').textContent = likes; $('#pc').textContent = count; $('#cc').textContent = count; };
    $('#like').onclick = () => { likes++; draw(); $('#out').innerHTML = '⬆️ con <code>emit()</code> → cha cập nhật → ⬇️ input mới xuống con.'; };
    $('#m').onclick = () => { count++; draw(); $('#out').innerHTML = '↔️ <code>model.set()</code> ở con cập nhật luôn <code>count</code> ở cha (hai chiều).'; };
    $('#p5').onclick = () => { likes += 5; draw(); $('#out').innerHTML = '⬇️ cha đổi → input của con tự cập nhật.'; }; draw();
  };

  // ---- signal sim ----
  WIDGETS['ng-signal-sim'] = host => {
    host.innerHTML = '<div>count() = <b id="c">0</b> · double() = <b id="d">0</b></div>' + btn('count.set(count() + 1)', 'id="inc"') + btn('count.update(c => c * 2)', 'id="dbl"') + btn('Reset', 'id="rs"') + '<div class="calc" id="log" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let count = 0; const log = [];
    const draw = () => { $('#c').textContent = count; $('#d').textContent = count * 2; $('#log').innerHTML = '<b>effect log</b>:<br>' + (log.slice(0, 5).map(esc).join('<br>') || '—') + '<div class="small">computed <code>double</code> luôn đúng theo <code>count</code>; effect chỉ để ghi log (tác dụng phụ).</div>'; };
    const set = v => { count = v; log.unshift('effect: count hiện tại = ' + count); draw(); };
    $('#inc').onclick = () => set(count + 1); $('#dbl').onclick = () => set(count * 2); $('#rs').onclick = () => { log.length = 0; count = 0; draw(); }; draw();
  };

  // ---- control flow ----
  WIDGETS['ng-controlflow'] = mkQuiz([
    ['Hiện nội dung theo điều kiện, có nhánh khác', '@if', ''],
    ['Lặp danh sách và cần định danh phần tử', '@for (track)', ''],
    ['Chọn một trong nhiều trạng thái (loading/error/ok)', '@switch', ''],
    ['Danh sách rỗng thì hiện “Không có mục”', '@empty', ''],
    ['Khai báo biến cục bộ trong template', '@let', ''],
    ['Tải lười phần giao diện nặng', '@defer', '']
  ], ['@if', '@for (track)', '@switch', '@empty', '@let', '@defer']);

  // ---- defer ----
  WIDGETS['ng-defer-sim'] = host => {
    host.innerHTML = '<div>Trigger: <select id="t" style="padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit"><option>on idle</option><option>on viewport</option><option>on interaction</option><option>on hover</option><option>on timer(2s)</option><option>when điều kiện</option></select> ' + btn('Chạy', 'id="go"') + btn('Reset', 'id="rs"') + '</div><div id="act" style="margin-top:8px"></div><div class="calc" id="st" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let timer = null;
    const hint = { 'on idle': 'Chờ trình duyệt rảnh – tự động.', 'on viewport': 'Cuộn tới khi placeholder vào khung nhìn.', 'on interaction': 'Click vào placeholder.', 'on hover': 'Di chuột vào placeholder.', 'on timer(2s)': 'Tự tải sau 2 giây.', 'when điều kiện': 'Bật cờ điều kiện = true.' };
    const state = (s) => { $('#st').innerHTML = s; };
    const load = () => { state('⏳ <b>@loading</b>: đang tải gói JS…'); timer = setTimeout(() => state('✅ <b>Nội dung đã tải</b> (component nặng đã hiển thị).'), 700); };
    const arm = () => { clearTimeout(timer); const t = $('#t').value; $('#act').innerHTML = `<div style="padding:10px;border:1px dashed var(--line);border-radius:8px" id="ph">@placeholder (chưa tải)</div><div class="small">${esc(hint[t])}</div>` + (t === 'when điều kiện' ? btn('flag = true', 'id="fl"') : ''); state('💤 Đang ở <b>@placeholder</b>.');
      const ph = $('#ph');
      if (t === 'on idle') timer = setTimeout(load, 600); else if (t === 'on timer(2s)') timer = setTimeout(load, 2000);
      else if (t === 'on interaction') ph.onclick = load; else if (t === 'on hover') ph.onmouseenter = load; else if (t === 'on viewport') { ph.onclick = load; ph.insertAdjacentHTML('beforeend', ' (bấm để mô phỏng cuộn vào khung nhìn)'); }
      else if (t === 'when điều kiện') $('#fl').onclick = load; };
    $('#go').onclick = arm; $('#rs').onclick = () => { clearTimeout(timer); $('#act').innerHTML = ''; state(''); }; state('Chọn trigger rồi bấm “Chạy”.');
  };

  // ---- lifecycle ----
  WIDGETS['ng-lifecycle'] = host => {
    host.innerHTML = btn('Tạo cha + con', 'id="m"') + btn('Cập nhật input', 'id="u"') + btn('Hủy', 'id="x"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let log = [], on = false;
    const draw = () => $('#out').innerHTML = log.length ? log.map((l, i) => `${i + 1}. ${esc(l)}`).join('<br>') : 'Bấm “Tạo”.';
    $('#m').onclick = () => { if (on) return; on = true; log = ['Cha: constructor', 'Cha: ngOnInit', 'Cha: render template → thấy con', 'Con: constructor', 'Con: ngOnInit', 'Con: ngAfterViewInit', 'Cha: ngAfterViewInit', 'afterNextRender (cả hai): DOM đã vẽ xong']; draw(); };
    $('#u').onclick = () => { if (!on) return; log.push('Cha: signal đổi → vẽ lại', 'Con: input mới → kiểm tra (OnPush)', 'Con: ngAfterViewChecked', 'Cha: ngAfterViewChecked'); draw(); };
    $('#x').onclick = () => { if (!on) return; on = false; log.push('Con: ngOnDestroy / DestroyRef  ← dọn dẹp', 'Cha: ngOnDestroy'); draw(); }; draw();
  };

  // ---- change detection ----
  WIDGETS['ng-cd-sim'] = host => {
    host.innerHTML = '<div>Chế độ gốc: <label><input type="radio" name="m" value="OnPush" checked> OnPush</label> <label><input type="radio" name="m" value="Eager"> Eager</label></div><div class="small">Cây: App → Header, Main → (Card A, Card B). Sự kiện xảy ra ở Card A.</div>' + btn('Sự kiện trong Card A (signal đổi)', 'id="ev"') + btn('Sự kiện ở Header', 'id="ev2"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host);
    const mode = () => host.querySelector('input[name=m]:checked').value;
    const run = (where) => {
      const names = ['App', 'Header', 'Main', 'Card A', 'Card B']; let checked;
      if (mode() === 'Eager') checked = names;                            // kiểm tra cả cây
      else checked = where === 'Card A' ? ['App', 'Main', 'Card A'] : ['App', 'Header'];   // chỉ nhánh có sự kiện / signal đổi
      $('#out').innerHTML = names.map(n => `<span style="display:inline-block;margin:3px;padding:3px 8px;border-radius:8px;border:1px solid var(--line);${checked.includes(n) ? 'background:var(--brand-soft);font-weight:700' : 'opacity:.5'}">${n}${checked.includes(n) ? ' ✔' : ' ⏭'}</span>`).join('') + `<div class="small">${mode() === 'OnPush' ? 'OnPush: chỉ kiểm tra nhánh có sự kiện/signal đổi (⏭ = bỏ qua).' : 'Eager: kiểm tra toàn bộ cây.'}</div>`;
    };
    $('#ev').onclick = () => run('Card A'); $('#ev2').onclick = () => run('Header');
  };

  // ---- DI ----
  WIDGETS['ng-di-tree'] = host => {
    host.innerHTML = '<div>' + ['root', 'component'].map(s => `<label style="margin-right:10px"><input type="radio" name="sc" value="${s}" ${s === 'root' ? 'checked' : ''}> Service ở ${s === 'root' ? 'root (@Service)' : 'providers của component'}</label>`).join('') + '</div><div id="boxes" style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px"></div><div class="calc small" id="info" style="margin-top:8px"></div>';
    const $ = $q(host); const counts = { A: 0, B: 0 }; let shared = 0;
    const draw = () => { const root = host.querySelector('input[name=sc]:checked').value === 'root';
      $('#boxes').innerHTML = ['A', 'B'].map(n => `<div style="flex:1;min-width:150px;border:1px solid var(--line);border-radius:10px;padding:8px"><b>Cart ${n}</b><div>count = <b>${root ? shared : counts[n]}</b></div>${btn('inject(Cart).add()', 'data-n="' + n + '"')}</div>`).join('');
      $('#info').textContent = root ? 'Một instance duy nhất (singleton): bấm ở Cart A, Cart B cũng thấy đổi.' : 'Mỗi instance component có service riêng: hai Cart độc lập.';
      host.querySelectorAll('[data-n]').forEach(b => b.onclick = () => { root ? shared++ : counts[b.dataset.n]++; draw(); }); };
    host.querySelectorAll('input[name=sc]').forEach(r => r.onchange = () => { shared = 0; counts.A = counts.B = 0; draw(); }); draw();
  };

  // ---- chọn công cụ ----
  WIDGETS['ng-pick'] = mkQuiz([
    ['State của component, hiển thị trong template', 'signal', ''],
    ['Tổng tiền tính từ danh sách', 'computed', ''],
    ['Giá trị mặc định lấy từ nguồn nhưng người dùng đổi được', 'linkedSignal', ''],
    ['Tải dữ liệu theo id route', 'resource/httpResource', ''],
    ['Nhận dữ liệu từ cha', 'input', ''],
    ['Báo sự kiện lên cha', 'output', ''],
    ['Chia sẻ logic toàn app', 'service + inject', ''],
    ['Chặn vào trang khi chưa đăng nhập (UX)', 'guard', ''],
    ['Gắn token vào mọi request', 'interceptor', ''],
    ['Tải lười component khi vào khung nhìn', '@defer', '']
  ], ['signal', 'computed', 'linkedSignal', 'resource/httpResource', 'input', 'output', 'service + inject', 'guard', 'interceptor', '@defer']);

  // ---- signal form ----
  WIDGETS['ng-form-sim'] = host => {
    host.innerHTML = '<div style="display:flex;gap:8px;flex-wrap:wrap"><div style="flex:1;min-width:160px">' + inp('em', '', 'email') + '</div><div style="flex:1;min-width:160px"><input id="pw" type="password" placeholder="mật khẩu (≥ 6 ký tự)" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit"></div></div>' + btn('Gửi (submit)', 'id="sb"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); const touched = { em: false, pw: false }; let submitting = false, sent = false;
    const errs = () => { const e = $('#em').value.trim(), p = $('#pw').value; const er = { em: [], pw: [] };
      if (!e) er.em.push({ kind: 'required', message: 'Cần nhập email' }); else if (!/^\S+@\S+\.\S+$/.test(e)) er.em.push({ kind: 'email', message: 'Email không hợp lệ' });
      if (!p) er.pw.push({ kind: 'required', message: 'Cần nhập mật khẩu' }); else if (p.length < 6) er.pw.push({ kind: 'minLength', message: 'Tối thiểu 6 ký tự' });
      return er; };
    const draw = () => { const er = errs(); const valid = !er.em.length && !er.pw.length;
      $('#out').innerHTML = `<b>model</b> = ${esc(JSON.stringify({ email: $('#em').value, password: $('#pw').value.replace(/./g, '•') }))}<br>form().valid() = <b>${valid}</b> · email: touched=${touched.em}, dirty=${$('#em').value !== ''} · errors=${esc(JSON.stringify(er.em.map(x => x.kind)))}<br>` + (['em', 'pw'].map(k => touched[k] && er[k].length ? `<span style="color:#e03131">⚠ ${esc(er[k][0].message)}</span>` : '').filter(Boolean).join('<br>')) + (submitting ? '<br>submitting() = true …' : '') + (sent ? '<br>✅ action chạy: dữ liệu hợp lệ đã được gửi.' : ''); };
    ['em', 'pw'].forEach(k => { const el = $('#' + k); el.oninput = () => { sent = false; draw(); }; el.onblur = () => { touched[k] = true; draw(); }; });
    $('#sb').onclick = () => { touched.em = touched.pw = true; sent = false; const er = errs(); if (er.em.length || er.pw.length) { draw(); return; } submitting = true; draw(); setTimeout(() => { submitting = false; sent = true; draw(); }, 600); }; draw();
  };

  // ---- route sim ----
  WIDGETS['ng-route-sim'] = host => {
    const routes = [['', 'HomePage'], ['users/:id', 'UserPage'], ['admin', 'AdminPage (lazy + canActivate)'], ['**', 'NotFoundPage']];
    host.innerHTML = inp('u', '/users/42?page=2', 'Gõ URL') + '<label style="display:block;margin:6px 0"><input id="auth" type="checkbox"> Đã đăng nhập</label><div class="calc" id="out" style="margin-top:6px;font-size:13px"></div>' + '<div class="small">Routes: ' + routes.map(r => `<code>${esc(r[0] || "''")}</code>`).join(' · ') + '</div>';
    const $ = $q(host);
    const draw = () => { const raw = $('#u').value.trim().replace(/^\//, ''); const [path, q] = raw.split('?'); const parts = path.split('/').filter(Boolean); let m = null, params = {};
      for (const [p, c] of routes) { if (p === '**') { m = [p, c]; break; } const pp = p.split('/').filter(Boolean); if (pp.length === parts.length && pp.every((s, i) => s.startsWith(':') || s === parts[i])) { m = [p, c]; pp.forEach((s, i) => s.startsWith(':') && (params[s.slice(1)] = parts[i])); break; } }
      let guard = ''; if (m && m[0] === 'admin' && !$('#auth').checked) { guard = '🛡️ canActivate → false → redirect UrlTree <code>/login</code>'; }
      const query = Object.fromEntries(new URLSearchParams(q || ''));
      $('#out').innerHTML = `Khớp route: <code>${esc(m ? (m[0] || "''") : '(không)')}</code> → <b>${esc(m ? m[1] : '')}</b><br>params = ${esc(JSON.stringify(params))} · query = ${esc(JSON.stringify(query))}${guard ? '<br>' + guard : ''}<div class="small">Với <code>withComponentInputBinding()</code>, params/query này trở thành <code>input()</code> của component.</div>`; };
    $('#u').oninput = draw; $('#auth').onchange = draw; draw();
  };

  // ---- tra cứu ----
  const API = [
    ['signal() / computed() / effect()', 'State ghi được / dẫn xuất có cache / tác dụng phụ.'],
    ['linkedSignal()', 'Dẫn xuất từ nguồn nhưng ghi đè được.'],
    ['resource({ params, loader })', 'Dữ liệu bất đồng bộ với status/value/error (stable v22).'],
    ['httpResource()', 'Resource gắn HttpClient, dùng để đọc dữ liệu.'],
    ['debounced(signal, ms)', 'Giá trị “lắng” sau ms (thử nghiệm).'],
    ['toSignal() / toObservable()', 'Nối RxJS với signals.'],
    ['input() / input.required()', 'Nhận dữ liệu từ cha (signal chỉ đọc).'],
    ['output()', 'Phát sự kiện lên cha (emit).'],
    ['model()', 'Input + output hai chiều: [(prop)].'],
    ['viewChild / contentChild', 'Query trong view / trong nội dung chiếu (signal).'],
    ['ng-content', 'Chiếu nội dung từ cha vào component.'],
    ['@if @for @switch', 'Control flow; @for bắt buộc track.'],
    ['@defer (on viewport)', 'Tải lười khối giao diện theo trigger.'],
    ['@let', 'Biến cục bộ trong template.'],
    ['ng-container / ng-template', 'Nhóm phần tử vô hình / khuôn HTML chưa vẽ.'],
    ['@Directive / hostDirectives', 'Hành vi gắn vào phần tử / ghép directive vào host.'],
    ['@Pipe / async pipe', 'Biến đổi giá trị trong template / subscribe Observable.'],
    ['ngOnInit / afterNextRender / DestroyRef', 'Hook vòng đời quan trọng.'],
    ['ChangeDetectionStrategy.OnPush / Eager', 'OnPush mặc định v22; Eager = tên mới của Default.'],
    ['@Service() / @Injectable()', 'Khai báo service; inject() để lấy.'],
    ['InjectionToken', 'Khóa cho giá trị không phải lớp.'],
    ['form() / [formField] / FormRoot', 'Signal Forms: tạo form, bind input, xử lý submit.'],
    ['required() email() validate()', 'Quy tắc validation của Signal Forms.'],
    ['provideRouter / routerLink / router-outlet', 'Định tuyến, liên kết, vùng hiển thị.'],
    ['canActivate / resolve / loadComponent', 'Guard, tải dữ liệu trước, lazy load.'],
    ['withComponentInputBinding()', 'Route params/query thành input().'],
    ['HttpClient / withInterceptors', 'Gọi API Observable / interceptor.'],
    ['ng add @angular/ssr / RenderMode', 'SSR, SSG, CSR theo route.'],
    ['provideClientHydration()', 'Hydration phía client.'],
    ['NgOptimizedImage', 'Tối ưu ảnh.'],
    ['TestBed / fixture.whenStable()', 'Kiểm thử component/service (Vitest).'],
    ['ng new / generate / test / update', 'Lệnh CLI chính.']
  ];
  WIDGETS['ng-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: signal, defer, inject, ssr, form, route…') + '<div id="out" style="margin-top:8px;max-height:300px;overflow:auto"></div>';
    const $ = $q(host);
    const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = API.filter(a => !q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(a => `<div style="padding:5px 0;border-bottom:1px solid var(--line)"><code>${esc(a[0])}</code><div class="small">${esc(a[1])}</div></div>`).join('') : '<i class="small">Không thấy.</i>'; };
    $('#q').oninput = draw; draw();
  };
})();
