// Biểu đồ Ichimoku tương tác. Dữ liệu giá là GIẢ LẬP (tạo bằng hạt giống cố định) – chỉ để minh hoạ cách tính.
const Ichi = (() => {
  const N = 200, SHOW_FROM = 92, SH = 26;
  // Giá giả lập: giảm → đi ngang → tăng mạnh → đi ngang → giảm
  const phases = [[0, 70, -0.45], [70, 100, 0], [100, 150, 0.7], [150, 175, 0], [175, 200, -0.55]];
  let seed = 7;
  const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const bars = [];
  let prev = 120;
  for (let i = 0; i < N; i++) {
    const ph = phases.find(p => i >= p[0] && i < p[1]);
    const o = prev;
    const c = o + ph[2] + (rnd() - 0.5) * (ph[2] === 0 ? 2.6 : 3.2);
    const h = Math.max(o, c) + rnd() * 1.6;
    const l = Math.min(o, c) - rnd() * 1.6;
    bars.push({ o, c, h, l }); prev = c;
  }
  const mid = (i, n) => {
    if (i < n - 1) return null;
    let hh = -1e9, ll = 1e9;
    for (let k = i - n + 1; k <= i; k++) { hh = Math.max(hh, bars[k].h); ll = Math.min(ll, bars[k].l); }
    return { hh, ll, m: (hh + ll) / 2 };
  };
  const ten = [], kij = [], ssa = {}, ssb = {}, chi = {};
  for (let i = 0; i < N; i++) {
    const t = mid(i, 9), k = mid(i, 26), b = mid(i, 52);
    ten[i] = t && t.m; kij[i] = k && k.m;
    if (t && k) ssa[i + SH] = (t.m + k.m) / 2;
    if (b) ssb[i + SH] = b.m;
    if (i - SH >= 0) chi[i - SH] = bars[i].c;
  }
  const css = v => `var(${v})`;
  const LINES = {
    ten: { name: 'Tenkan Sen (9)', col: '--c-tenkan', desc: 'Trung điểm 9 phiên gần nhất. Bám sát giá, đo độ dốc xu hướng ngắn hạn – đường yếu nhất.' },
    kij: { name: 'Kijun Sen (26)', col: '--c-kijun', desc: 'Trung điểm 26 phiên. Đường tín hiệu, hỗ trợ/kháng cự mạnh, nam châm kéo giá về cân bằng.' },
    ssa: { name: 'Senkou Span A', col: '--c-ssa', desc: '(Tenkan + Kijun)/2, đẩy tới trước 26 phiên. Cạnh nhanh của mây.' },
    ssb: { name: 'Senkou Span B (52)', col: '--c-ssb', desc: 'Trung điểm 52 phiên, đẩy tới trước 26 phiên. Cạnh chậm, thường đi ngang → cản rất mạnh.' },
    chi: { name: 'Lagging Span', col: '--c-chikou', desc: 'Giá đóng cửa hiện tại vẽ lùi về quá khứ 26 phiên – “bộ nhớ” của thị trường.' }
  };

  function chart(host, opts = {}) {
    const W = 900, H = 400, padL = 8, padR = 52, padT = 14, padB = 14;
    const from = SHOW_FROM, to = N - 1 + SH;
    const cnt = to - from + 1, bw = (W - padL - padR) / cnt;
    const on = Object.assign({ ten: true, kij: true, ssa: true, ssb: true, chi: true, cloud: true }, opts.on || {});
    const toggles = opts.toggles !== false;
    let vals = [];
    for (let i = from; i < N; i++) vals.push(bars[i].h, bars[i].l);
    for (let i = from; i <= to; i++) [ssa[i], ssb[i], chi[i]].forEach(v => v != null && vals.push(v));
    const mn = Math.min(...vals) - 2, mx = Math.max(...vals) + 2;
    const X = i => padL + (i - from + 0.5) * bw;
    const Y = v => padT + (mx - v) / (mx - mn) * (H - padT - padB);
    host.innerHTML = `
      ${toggles ? `<div class="leg">${Object.entries(LINES).map(([k, l]) => `<label><input type="checkbox" data-k="${k}" ${on[k] ? 'checked' : ''}><i style="background:${css(l.col)}"></i>${l.name}</label>`).join('')}</div>` : ''}
      <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Biểu đồ Ichimoku minh hoạ"></svg>
      <div class="info">${opts.hint || 'Rê chuột / chạm vào biểu đồ để xem giá trị. Bật/tắt từng đường để quan sát vai trò của nó.'}</div>`;
    const svg = host.querySelector('svg'), info = host.querySelector('.info');

    function line(map, key, dash) {
      let d = '', pen = false;
      for (let i = from; i <= to; i++) {
        const v = typeof map === 'function' ? map(i) : map[i];
        if (v == null) { pen = false; continue; }
        d += (pen ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(v).toFixed(1); pen = true;
      }
      return `<path d="${d}" fill="none" style="stroke:${css(LINES[key].col)}" stroke-width="${key === 'chi' ? 1.8 : 2}" ${dash ? 'stroke-dasharray="4 3"' : ''} stroke-linejoin="round"/>`;
    }
    function draw() {
      let s = '';
      // lưới ngang
      for (let k = 0; k <= 4; k++) {
        const v = mn + (mx - mn) * k / 4;
        s += `<line x1="${padL}" x2="${W - padR}" y1="${Y(v)}" y2="${Y(v)}" stroke="var(--line)"/><text x="${W - padR + 5}" y="${Y(v) + 4}" font-size="11" fill="var(--muted)">${v.toFixed(0)}</text>`;
      }
      // đường “hiện tại”
      s += `<line x1="${X(N - 1) + bw / 2}" x2="${X(N - 1) + bw / 2}" y1="${padT}" y2="${H - padB}" stroke="var(--muted)" stroke-dasharray="3 4"/>
            <text x="${X(N - 1) + bw / 2 + 4}" y="${padT + 10}" font-size="11" fill="var(--muted)">Hiện tại →  tương lai (mây)</text>`;
      // mây
      if (on.cloud && (on.ssa || on.ssb)) {
        for (let i = from; i <= to; i++) {
          const a = ssa[i], b = ssb[i];
          if (a == null || b == null) continue;
          const up = a >= b;
          s += `<rect x="${X(i) - bw / 2 - .4}" width="${bw + .8}" y="${Y(Math.max(a, b))}" height="${Math.max(0.5, Math.abs(Y(a) - Y(b)))}" style="fill:${css(up ? '--c-ssa' : '--c-ssb')}" opacity=".22"/>`;
        }
      }
      // nến
      for (let i = from; i < N; i++) {
        const b = bars[i], up = b.c >= b.o, col = up ? 'var(--up)' : 'var(--down)';
        s += `<line x1="${X(i)}" x2="${X(i)}" y1="${Y(b.h)}" y2="${Y(b.l)}" stroke="${col}"/>
              <rect x="${X(i) - bw * .32}" width="${bw * .64}" y="${Y(Math.max(b.o, b.c))}" height="${Math.max(1, Math.abs(Y(b.o) - Y(b.c)))}" fill="${col}"/>`;
      }
      if (on.ssb) s += line(ssb, 'ssb');
      if (on.ssa) s += line(ssa, 'ssa');
      if (on.kij) s += line(kij, 'kij');
      if (on.ten) s += line(ten, 'ten');
      if (on.chi) s += line(chi, 'chi');
      s += '<g id="cross"></g>';
      svg.innerHTML = s;
    }
    draw();
    host.querySelectorAll('input[data-k]').forEach(cb => cb.onchange = () => {
      on[cb.dataset.k] = cb.checked; draw();
      const l = LINES[cb.dataset.k]; info.innerHTML = `<b style="color:${css(l.col)}">${l.name}</b>: ${l.desc}`;
    });
    function move(ev) {
      const r = svg.getBoundingClientRect();
      const cx = (ev.touches ? ev.touches[0].clientX : ev.clientX);
      const i = Math.max(from, Math.min(to, Math.round(((cx - r.left) / r.width * W - padL) / bw + from - 0.5)));
      const g = svg.querySelector('#cross');
      g.innerHTML = `<line x1="${X(i)}" x2="${X(i)}" y1="${padT}" y2="${H - padB}" stroke="var(--brand)" opacity=".6"/>`;
      const f = v => v == null ? '–' : v.toFixed(1);
      const b = i < N ? bars[i] : null;
      info.innerHTML = `<b>Cột #${i - from + 1}${i >= N ? ' (tương lai)' : ''}</b>` +
        (b ? ` · Giá đóng ${f(b.c)}` : '') +
        ` · <span style="color:${css('--c-tenkan')}">Tenkan ${f(ten[i])}</span>` +
        ` · <span style="color:${css('--c-kijun')}">Kijun ${f(kij[i])}</span>` +
        ` · <span style="color:${css('--c-ssa')}">SSA ${f(ssa[i])}</span>` +
        ` · <span style="color:${css('--c-ssb')}">SSB ${f(ssb[i])}</span>` +
        ` · <span style="color:${css('--c-chikou')}">Lagging ${f(chi[i])}</span>`;
    }
    svg.addEventListener('mousemove', move);
    svg.addEventListener('touchstart', move, { passive: true });
    svg.addEventListener('touchmove', move, { passive: true });
  }

  // Công cụ tính trung điểm: kéo thanh trượt để xem “cao nhất – thấp nhất của n phiên”
  function midCalc(host) {
    const W = 900, H = 320, padL = 8, padR = 48, padT = 12, padB = 12, VIEW = 70;
    let n = 9, idx = 150;
    host.innerHTML = `
      <div class="row"><label>Chu kỳ: <select id="n"><option value="9">9 (Tenkan Sen)</option><option value="26">26 (Kijun Sen)</option><option value="52">52 (Senkou Span B)</option></select></label>
      <label style="flex:1;display:flex;gap:8px;align-items:center">Vị trí <input id="s" type="range" min="60" max="${N - 1}" value="${idx}" style="flex:1"></label></div>
      <svg viewBox="0 0 ${W} ${H}"></svg><div class="calc"></div>`;
    const svg = host.querySelector('svg'), calc = host.querySelector('.calc');
    function draw() {
      const a = Math.max(0, idx - VIEW + 15), z = Math.min(N - 1, a + VIEW - 1);
      let hi = -1e9, lo = 1e9; for (let i = a; i <= z; i++) { hi = Math.max(hi, bars[i].h); lo = Math.min(lo, bars[i].l); }
      hi += 2; lo -= 2;
      const bw = (W - padL - padR) / (z - a + 1);
      const X = i => padL + (i - a + .5) * bw, Y = v => padT + (hi - v) / (hi - lo) * (H - padT - padB);
      const m = mid(idx, n);
      let s = '';
      if (m) s += `<rect x="${X(idx - n + 1) - bw / 2}" width="${n * bw}" y="${padT}" height="${H - padT - padB}" style="fill:var(--brand)" opacity=".12"/>`;
      for (let i = a; i <= z; i++) {
        const b = bars[i], up = b.c >= b.o, col = up ? 'var(--up)' : 'var(--down)';
        s += `<line x1="${X(i)}" x2="${X(i)}" y1="${Y(b.h)}" y2="${Y(b.l)}" stroke="${col}"/><rect x="${X(i) - bw * .3}" width="${bw * .6}" y="${Y(Math.max(b.o, b.c))}" height="${Math.max(1, Math.abs(Y(b.o) - Y(b.c)))}" fill="${col}"/>`;
      }
      // đường trung điểm đã tính đến vị trí hiện tại
      let d = '', pen = false;
      for (let i = a; i <= idx; i++) { const t = mid(i, n); if (!t) continue; d += (pen ? 'L' : 'M') + X(i).toFixed(1) + ' ' + Y(t.m).toFixed(1); pen = true; }
      s += `<path d="${d}" fill="none" stroke="var(--c-kijun)" stroke-width="2.2"/>`;
      if (m) {
        const x1 = X(idx - n + 1) - bw / 2, x2 = X(idx) + bw / 2;
        s += `<line x1="${x1}" x2="${x2}" y1="${Y(m.hh)}" y2="${Y(m.hh)}" stroke="var(--up)" stroke-dasharray="5 3" stroke-width="1.6"/>
              <line x1="${x1}" x2="${x2}" y1="${Y(m.ll)}" y2="${Y(m.ll)}" stroke="var(--down)" stroke-dasharray="5 3" stroke-width="1.6"/>
              <line x1="${x1}" x2="${x2}" y1="${Y(m.m)}" y2="${Y(m.m)}" stroke="var(--c-tenkan)" stroke-width="2.5"/>`;
      }
      svg.innerHTML = s;
      calc.innerHTML = m ? `Trong <b>${n}</b> nến gần nhất (vùng tô xanh): <b style="color:var(--up)">Cao nhất = ${m.hh.toFixed(1)}</b>, <b style="color:var(--down)">Thấp nhất = ${m.ll.toFixed(1)}</b><br>Trung điểm = (${m.hh.toFixed(1)} + ${m.ll.toFixed(1)}) ÷ 2 = <b style="color:var(--c-tenkan)">${m.m.toFixed(2)}</b>`
        : 'Chưa đủ dữ liệu.';
    }
    host.querySelector('#n').onchange = e => { n = +e.target.value; draw(); };
    host.querySelector('#s').oninput = e => { idx = +e.target.value; draw(); };
    draw();
  }
  return { chart, midCalc };
})();

window.WIDGETS = {
  'ichi-full': h => Ichi.chart(h),
  'ichi-cloud': h => Ichi.chart(h, { on: { ten: false, kij: false, chi: false }, hint: 'Chỉ còn mây (SSA – SSB) cùng giá. Mây xanh = SSA trên SSB (tăng), mây đỏ = SSB trên SSA (giảm). Chỗ hai màu đổi nhau là “twist”.' }),
  'ichi-lag': h => Ichi.chart(h, { on: { ssa: false, ssb: false, ten: false, kij: false }, hint: 'Đường tím là giá đóng cửa dịch lùi 26 phiên. Thử bật thêm mây để xem Lagging Span va chạm vật cản nào.' }),
  'mid-calc': h => Ichi.midCalc(h)
};

// ---- Công cụ tính nhanh: Fibonacci & Rủi ro/Lợi nhuận ----
(function () {
  const num = (el) => parseFloat(el.value);
  WIDGETS['fib-calc'] = host => {
    host.innerHTML = `<div class="row"><label>Đáy <input id="lo" type="number" step="any" value="100" style="width:90px"></label>
      <label>Đỉnh <input id="hi" type="number" step="any" value="200" style="width:90px"></label>
      <label>Nhịp chính <select id="dir"><option value="up">Tăng (đáy → đỉnh)</option><option value="down">Giảm (đỉnh → đáy)</option></select></label></div>
      <div class="calc" id="out"></div>`;
    const lo = host.querySelector('#lo'), hi = host.querySelector('#hi'), dir = host.querySelector('#dir'), out = host.querySelector('#out');
    function draw() {
      const L = num(lo), H = num(hi), r = H - L;
      if (isNaN(L) || isNaN(H) || r <= 0) { out.textContent = 'Nhập đáy nhỏ hơn đỉnh.'; return; }
      const up = dir.value === 'up';
      const ret = [0.236, 0.382, 0.5, 0.618, 0.786].map(x => [x, up ? H - r * x : L + r * x]);
      const ext = [1.272, 1.414, 1.618, 2.0, 2.618].map(x => [x, up ? L + r * x : H - r * x]);
      const row = (a, c) => a.map(([x, p]) => `<div style="display:flex;gap:8px;align-items:center;margin:3px 0"><b style="width:64px">${(x * 100).toFixed(1)}%</b><span style="flex:1;height:8px;border-radius:4px;background:${c};opacity:${x === 0.5 || x === 0.618 || x === 1.618 ? 1 : .45}"></span><span style="width:80px;text-align:right">${p.toFixed(2)}</span></div>`).join('');
      out.innerHTML = `<b>Thoái lui (điểm hồi của nhịp điều chỉnh)</b>${row(ret, 'var(--c-kijun)')}<b>Mở rộng (mục tiêu của nhịp tiếp theo)</b>${row(ext, 'var(--c-ssa)')}<div class="small">50% trùng Kijun (trung điểm). 78,6% là mức điều chỉnh tối đa; đóng cửa vượt qua → điều chỉnh tiếp tục.</div>`;
    }
    [lo, hi, dir].forEach(e => e.oninput = draw); draw();
  };
  WIDGETS['rr-calc'] = host => {
    host.innerHTML = `<div class="row"><label>Vào lệnh <input id="e" type="number" step="any" value="100" style="width:90px"></label>
      <label>Cắt lỗ <input id="s" type="number" step="any" value="98" style="width:90px"></label>
      <label>Mục tiêu <input id="t" type="number" step="any" value="106" style="width:90px"></label></div><div class="calc" id="out"></div>`;
    const e = host.querySelector('#e'), s = host.querySelector('#s'), t = host.querySelector('#t'), out = host.querySelector('#out');
    function draw() {
      const E = num(e), S = num(s), T = num(t), risk = Math.abs(E - S), rew = Math.abs(T - E);
      if ([E, S, T].some(isNaN) || !risk) { out.textContent = 'Nhập đủ 3 mức giá (cắt lỗ khác giá vào).'; return; }
      if ((E - S) * (T - E) <= 0) { out.innerHTML = '⚠️ Cắt lỗ và mục tiêu phải nằm hai phía của giá vào lệnh.'; return; }
      const rr = rew / risk, ok = rr >= 3 ? 'var(--ok)' : rr >= 2 ? 'var(--tip)' : rr >= 1.5 ? 'var(--warn)' : 'var(--bad)';
      const msg = rr >= 3 ? 'Đạt chuẩn của tác giả (1:3)' : rr >= 2 ? 'Tốt (≥ 1:2)' : rr >= 1.5 ? 'Tối thiểu chấp nhận được (≥ 1:1,5)' : 'Quá thấp – bỏ qua lệnh này';
      out.innerHTML = `Rủi ro = ${risk.toFixed(2)} · Lợi nhuận kỳ vọng = ${rew.toFixed(2)}<br>Tỷ lệ R:R = <b style="color:${ok};font-size:20px">1 : ${rr.toFixed(2)}</b> — ${msg}`;
    }
    [e, s, t].forEach(x => x.oninput = draw); draw();
  };
})();

// ---- Tháp nhu cầu Maslow (MBA ch2) ----
WIDGETS['maslow'] = host => {
  const L = [
    ['Tự thể hiện bản thân', 'Tìm kiếm sự thật, khôn ngoan, công lý, mục đích. Không bao giờ thoả mãn hoàn toàn; rất ít người trả nhiều tiền cho nhu cầu này.', 'Ví dụ: Bill Gates, Tom Hunter lập quỹ từ thiện.'],
    ['Được quý trọng', 'Lòng tự trọng, thành tựu, được công nhận, danh tiếng. Phần lớn marketing thương hiệu nhắm vào tầng này.', 'Ví dụ: Responsibletravel.com – du lịch có trách nhiệm để được cộng đồng công nhận.'],
    ['Nhu cầu xã hội', 'Có bạn bè, thuộc về nhóm/câu lạc bộ, cho và nhận tình yêu.', 'Ví dụ: Hotel Chocolat – Câu lạc bộ nếm sôcôla, mời bạn bè cùng chấm điểm.'],
    ['An toàn', 'Cảm thấy an toàn và được bảo vệ. Chưa an toàn thì không quan tâm nhu cầu cao hơn.', 'Ví dụ: World Challenge – dành nhiều phần website giải thích biện pháp an toàn cho phụ huynh.'],
    ['Sinh lý', 'Không khí, nước, ngủ, thức ăn. Chưa thoả mãn thì các nhu cầu khác chưa được nghĩ tới.', 'Ví dụ: thực phẩm, nước uống.']
  ];
  const cols = ['#e03131', '#f08c00', '#2f9e44', '#1c7ed6', '#7048e8'];
  host.innerHTML = '<div id="pyr" style="display:flex;flex-direction:column;align-items:center;gap:4px"></div><div class="info" id="mi">Bấm vào một tầng của kim tự tháp.</div>';
  const p = host.querySelector('#pyr');
  L.forEach((l, i) => {
    const b = document.createElement('button');
    b.textContent = (5 - i) + '. ' + l[0];
    b.style.cssText = `width:${40 + i * 15}%;min-width:170px;border:0;border-radius:8px;padding:10px;color:#fff;font-weight:700;background:${cols[i]}`;
    b.onclick = () => { host.querySelector('#mi').innerHTML = `<b>${l[0]}</b>: ${l[1]}<br><i>${l[2]}</i>`; };
    p.appendChild(b);
  });
};

// ---- Vòng đời sản phẩm & chu kỳ chấp nhận (MBA ch4) ----
WIDGETS['plc'] = host => {
  const P = [
    ['Nghiên cứu & phát triển', 'Chỉ có chi tiền; có thể kéo dài nhiều thập kỷ (thuốc) hoặc vài tuần (hàng tiêu dùng đơn giản).'],
    ['Giới thiệu', 'Ra mắt phân khúc ban đầu, doanh thu rất ít, chi phí quảng cáo và bán hàng cao. Mục tiêu: thông báo và hướng dẫn.'],
    ['Tăng trưởng', 'Bán trên mọi phân khúc, được chấp nhận, bắt đầu có lời. Nhấn mạnh sự khác biệt để chặn đối thủ từ xa.'],
    ['Trưởng thành & bão hoà', 'Doanh số đạt đỉnh; đối thủ/sản phẩm thay thế xuất hiện; giá giảm, chi phí quảng cáo tăng, lợi nhuận bắt đầu giảm. Nhắc khách rằng bạn vẫn ở đây.'],
    ['Sụt giảm', 'Doanh số và lợi nhuận giảm. Cắt quảng cáo, giảm giá; hoặc tái định vị/đổi marketing hỗn hợp để tung lại (vd. thuốc lá sang châu Phi, Trung Quốc).']
  ];
  const W = 600, H = 220, x = i => 30 + i * (W - 60) / 4;
  const sales = [0, 25, 120, 160, 60], prof = [-30, -20, 60, 70, 10];
  host.innerHTML = `<svg viewBox="0 0 ${W} ${H}"><line x1="20" x2="${W - 10}" y1="170" y2="170" stroke="var(--line)"/></svg><div class="leg" id="pb"></div><div class="info" id="pi">Chọn một giai đoạn.</div>`;
  const svg = host.querySelector('svg');
  const pts = a => a.map((v, i) => `${x(i)},${170 - v}`).join(' ');
  svg.innerHTML += `<polyline points="${pts(sales)}" fill="none" stroke="var(--c-kijun)" stroke-width="3"/><polyline points="${pts(prof)}" fill="none" stroke="var(--c-ssa)" stroke-width="3"/>
    <text x="${x(3) - 20}" y="${170 - 170}" font-size="12" fill="var(--c-kijun)">Doanh số</text><text x="${x(3) + 25}" y="${170 - 78}" font-size="12" fill="var(--c-ssa)">Lợi nhuận</text>`;
  P.forEach((p, i) => { svg.innerHTML += `<text x="${x(i)}" y="195" font-size="11" text-anchor="middle" fill="var(--muted)">${i + 1}</text>`; });
  const b = host.querySelector('#pb');
  P.forEach((p, i) => { const l = document.createElement('label'); l.innerHTML = `<b>${i + 1}</b> ${p[0]}`; l.onclick = () => { host.querySelector('#pi').innerHTML = `<b>${p[0]}</b>: ${p[1]}`; }; b.appendChild(l); });
};
WIDGETS['adoption'] = host => {
  const G = [['Người thích đổi mới', 2.5], ['Người chấp nhận trước', 13.5], ['Đa số đi trước', 34], ['Đa số theo sau', 34], ['Người chậm chạp', 16]];
  host.innerHTML = '<div class="row"><label>Thị trường mục tiêu (người): <input id="n" type="number" value="100000" style="width:110px"></label></div><div id="bars"></div>';
  const bars = host.querySelector('#bars'), n = host.querySelector('#n');
  function draw() {
    const N = parseFloat(n.value) || 0;
    bars.innerHTML = G.map((g, i) => `<div style="display:flex;gap:8px;align-items:center;margin:6px 0"><span style="width:150px;font-size:14px">${g[0]}</span><span style="flex:1;background:var(--line);border-radius:6px;height:20px"><i style="display:block;height:100%;width:${g[1] * 2.8}%;max-width:100%;border-radius:6px;background:hsl(${210 + i * 30},70%,55%)"></i></span><b style="width:110px;text-align:right;font-size:14px">${g[1]}% ≈ ${Math.round(N * g[1] / 100).toLocaleString('vi-VN')}</b></div>`).join('');
  }
  n.oninput = draw; draw();
};

// ---- Máy tính hiệu quả quảng cáo (MBA ch5) ----
WIDGETS['ad-roi'] = host => {
  host.innerHTML = `<div class="row"><label>Chi phí QC <input id="a" type="number" value="1000" style="width:90px"></label>
    <label>Số yêu cầu (thư hỏi) <input id="b" type="number" value="100" style="width:80px"></label>
    <label>% thành đơn <input id="c" type="number" value="10" style="width:60px"></label>
    <label>Lợi nhuận cận biên/đơn <input id="d" type="number" value="200" style="width:80px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const cost = g('a'), inq = g('b'), orders = inq * g('c') / 100, profit = orders * g('d');
    o.innerHTML = `Số đơn hàng ≈ <b>${orders.toFixed(1)}</b> · Chi phí/yêu cầu = <b>${inq ? (cost / inq).toFixed(1) : '–'}</b> · Chi phí/đơn = <b>${orders ? (cost / orders).toFixed(1) : '–'}</b><br>Lợi nhuận gộp ≈ <b>${profit.toFixed(0)}</b> − chi phí ${cost} = <b style="color:${profit - cost >= 0 ? 'var(--ok)' : 'var(--bad)'}">${(profit - cost).toFixed(0)}</b> ${profit > cost ? '→ đáng đầu tư' : '→ chưa có lời'}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Lượng đặt hàng kinh tế EOQ (MBA ch6) ----
WIDGETS['eoq'] = host => {
  host.innerHTML = `<div class="row"><label>Nhu cầu/năm R <input id="r" type="number" value="12000" style="width:90px"></label>
    <label>Chi phí 1 đơn hàng O <input id="o" type="number" value="50" style="width:70px"></label>
    <label>Chi phí lưu kho 1 đơn vị/năm C <input id="c" type="number" value="3" style="width:60px"></label></div><div class="calc" id="out"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, out = host.querySelector('#out');
  function draw() {
    const R = g('r'), O = g('o'), C = g('c');
    if (!R || !O || !C) { out.textContent = 'Nhập đủ 3 giá trị > 0.'; return; }
    const q = Math.sqrt(2 * R * O / C), n = R / q, tot = n * O + q / 2 * C;
    out.innerHTML = `<b>EOQ = √(2×R×O ÷ C) = √(2×${R}×${O} ÷ ${C}) ≈ ${q.toFixed(0)} đơn vị/đơn</b><br>Số đơn/năm ≈ ${n.toFixed(1)} · Chi phí đặt hàng ≈ ${(n * O).toFixed(0)} · Chi phí lưu kho ≈ ${(q / 2 * C).toFixed(0)} · Tổng ≈ <b>${tot.toFixed(0)}</b><br><span class="small">Tại điểm EOQ, chi phí đặt hàng và chi phí lưu kho xấp xỉ bằng nhau.</span>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Điểm hoà vốn & độ co giãn của cầu (MBA ch7) ----
WIDGETS['bep'] = host => {
  host.innerHTML = `<div class="row"><label>Chi phí cố định <input id="f" type="number" value="10000" style="width:90px"></label>
    <label>Giá bán/đv <input id="p" type="number" value="5" step="0.01" style="width:70px"></label>
    <label>Biến phí/đv <input id="v" type="number" value="3" step="0.01" style="width:70px"></label>
    <label>Mục tiêu lợi nhuận <input id="t" type="number" value="0" style="width:80px"></label>
    <label>Sản lượng tối đa <input id="m" type="number" value="7000" style="width:80px"></label></div>
    <svg viewBox="0 0 600 260" id="s"></svg><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, svg = host.querySelector('#s'), o = host.querySelector('#o');
  function draw() {
    const F = g('f'), P = g('p'), V = g('v'), T = g('t'), M = g('m'), cm = P - V;
    if (cm <= 0) { svg.innerHTML = ''; o.innerHTML = '⚠️ Giá bán phải lớn hơn biến phí đơn vị (số dư đảm phí &gt; 0).'; return; }
    const bep = F / cm, tgt = (F + T) / cm, xmax = Math.max(M, tgt, bep) * 1.2, ymax = Math.max(P * xmax, F + V * xmax);
    const X = q => 40 + q / xmax * 540, Y = c => 230 - c / ymax * 210;
    svg.innerHTML = `<line x1="40" y1="230" x2="580" y2="230" stroke="var(--line)"/><line x1="40" y1="20" x2="40" y2="230" stroke="var(--line)"/>
      <line x1="${X(0)}" y1="${Y(F)}" x2="${X(xmax)}" y2="${Y(F)}" stroke="var(--muted)" stroke-dasharray="4 3"/>
      <line x1="${X(0)}" y1="${Y(F)}" x2="${X(xmax)}" y2="${Y(F + V * xmax)}" stroke="var(--bad)" stroke-width="2.5"/>
      <line x1="${X(0)}" y1="${Y(0)}" x2="${X(xmax)}" y2="${Y(P * xmax)}" stroke="var(--ok)" stroke-width="2.5"/>
      <circle cx="${X(bep)}" cy="${Y(P * bep)}" r="6" fill="var(--warn)"/><text x="${X(bep) + 8}" y="${Y(P * bep) + 16}" font-size="12" fill="var(--ink)">Hoà vốn ≈ ${bep.toFixed(0)}</text>
      <text x="50" y="${Y(F) - 5}" font-size="11" fill="var(--muted)">Chi phí cố định</text><text x="${X(xmax) - 80}" y="${Y(P * xmax) + 14}" font-size="11" fill="var(--ok)">Doanh thu</text><text x="${X(xmax) - 90}" y="${Y(F + V * xmax) - 6}" font-size="11" fill="var(--bad)">Tổng chi phí</text>`;
    const margin = M > bep ? ((M - bep) / M * 100).toFixed(1) + '%' : '—';
    const need = M ? (V + (F + T) / M).toFixed(2) : '–';
    o.innerHTML = `Số dư đảm phí/đv = ${P} − ${V} = <b>${cm.toFixed(2)}</b> · <b>BEP = F ÷ (P − V) = ${bep.toFixed(0)} đv</b> (doanh thu hoà vốn ${(bep * P).toFixed(0)})<br>Để đạt lợi nhuận ${T}: cần bán <b>${tgt.toFixed(0)}</b> đv; nếu chỉ bán tối đa ${M} đv thì giá bán cần ≥ <b>${need}</b><br>Biên an toàn (tại ${M} đv) = (${M} − BEP) ÷ ${M} = <b>${margin}</b>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['elasticity'] = host => {
  host.innerHTML = `<div class="row"><label>% thay đổi giá <input id="a" type="number" value="-50" style="width:70px"></label><label>% thay đổi lượng cầu <input id="b" type="number" value="100" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() { const a = g('a'), b = g('b'); if (!a) { o.textContent = 'Giá phải thay đổi khác 0.'; return; } const e = Math.abs(b / a); o.innerHTML = `Độ co giãn = |${b} ÷ ${a}| = <b>${e.toFixed(2)}</b> → ${e > 1 ? '<b>co giãn</b> (cầu nhạy với giá: giảm giá làm tăng doanh thu)' : e < 1 ? '<b>không co giãn</b> (cầu ít nhạy với giá)' : 'co giãn đơn vị'}`; }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Thống kê mô tả, giá trị kỳ vọng, NPV (MBA ch8) ----
WIDGETS['stats'] = host => {
  host.innerHTML = `<div class="row"><label style="flex:1">Nhập dãy số (cách nhau bằng dấu phẩy) <input id="d" value="30, 40, 10, 15, 10" style="width:100%;padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink)"></label></div><div class="calc" id="o"></div>`;
  const inp = host.querySelector('#d'), o = host.querySelector('#o');
  function draw() {
    const a = inp.value.split(/[,;\s]+/).map(parseFloat).filter(x => !isNaN(x));
    if (!a.length) { o.textContent = 'Nhập ít nhất một số.'; return; }
    const n = a.length, mean = a.reduce((s, x) => s + x, 0) / n, s = [...a].sort((x, y) => x - y);
    const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
    const cnt = {}; a.forEach(x => cnt[x] = (cnt[x] || 0) + 1); const mx = Math.max(...Object.values(cnt));
    const mode = mx > 1 ? Object.keys(cnt).filter(k => cnt[k] === mx).join(', ') : 'không có';
    const sd = Math.sqrt(a.reduce((t, x) => t + (x - mean) ** 2, 0) / (n > 1 ? n - 1 : 1));
    o.innerHTML = `n = ${n} · <b>Trung bình</b> = ${mean.toFixed(2)} · <b>Trung vị</b> = ${med} · <b>Mode</b> = ${mode}<br><b>Phạm vi</b> = ${s[n - 1]} − ${s[0]} = ${s[n - 1] - s[0]} · <b>Độ lệch chuẩn</b> (mẫu) ≈ ${sd.toFixed(2)}<br><span class="small">Khoảng ±1σ chứa ~68,2% quan sát, ±2σ ~95,5%, ±3σ ~99,7% (phân phối chuẩn).</span>`;
  }
  inp.oninput = draw; draw();
};
WIDGETS['ev'] = host => {
  const rows = (id, name, p) => `<tr><td>${name}</td>${p.map((v, i) => `<td><input data-g="${id}" data-i="${i}" type="number" step="0.05" value="${v}" style="width:60px"></td>`).join('')}<td id="ev${id}"></td></tr>`;
  host.innerHTML = `<p class="small">Số liệu minh hoạ. Lợi nhuận (triệu bảng): thành công = 10, khá = 5, kém = 1 — sửa xác suất để xem giá trị kỳ vọng thay đổi.</p>
    <table class="tb"><thead><tr><th>Phương án</th><th>P(thành công)</th><th>P(khá)</th><th>P(kém)</th><th>Giá trị kỳ vọng</th></tr></thead><tbody>${rows('a', 'Tung sản phẩm mới', [0.1, 0.4, 0.5])}${rows('b', 'Tân trang sản phẩm cũ', [0.3, 0.5, 0.2])}</tbody></table><div class="calc" id="r"></div>`;
  const pay = [10, 5, 1];
  function draw() {
    const v = {};
    ['a', 'b'].forEach(g => { const p = [...host.querySelectorAll(`[data-g="${g}"]`)].map(i => parseFloat(i.value) || 0); v[g] = p.reduce((s, x, i) => s + x * pay[i], 0); host.querySelector('#ev' + g).innerHTML = `<b>${v[g].toFixed(2)}</b> (Σ p = ${p.reduce((s, x) => s + x, 0).toFixed(2)})`; });
    host.querySelector('#r').innerHTML = `Chọn phương án có giá trị kỳ vọng cao hơn: <b>${v.a > v.b ? 'Tung sản phẩm mới' : v.b > v.a ? 'Tân trang sản phẩm cũ' : 'bằng nhau'}</b>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['npv'] = host => {
  host.innerHTML = `<div class="row"><label>Vốn đầu tư <input id="i" type="number" value="20000" style="width:90px"></label><label>Tỷ lệ chiết khấu % <input id="r" type="number" value="15" style="width:60px"></label></div>
    <div class="row"><label style="flex:1">Dòng tiền năm 1…n (phẩy) <input id="c" value="2000, 5000, 6000, 7000, 5000" style="width:100%;padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:var(--ink)"></label></div><div class="calc" id="o"></div><p class="small">Ví dụ minh hoạ (không phải số liệu bảng trong sách).</p>`;
  const g = id => host.querySelector('#' + id).value, o = host.querySelector('#o');
  function draw() {
    const I = parseFloat(g('i')) || 0, r = (parseFloat(g('r')) || 0) / 100, cf = g('c').split(/[,;\s]+/).map(parseFloat).filter(x => !isNaN(x));
    let cum = -I, pb = null, npv = -I, rows = '';
    cf.forEach((c, k) => { const pv = c / Math.pow(1 + r, k + 1); npv += pv; const prev = cum; cum += c; if (pb === null && cum >= 0) pb = k + (c ? -prev / c : 0); rows += `<tr><td>${k + 1}</td><td>${c}</td><td>${(1 / Math.pow(1 + r, k + 1)).toFixed(3)}</td><td>${pv.toFixed(0)}</td></tr>`; });
    o.innerHTML = `<table class="tb"><thead><tr><th>Năm</th><th>Tiền mặt</th><th>Hệ số 1/(1+r)ⁿ</th><th>Giá trị hiện tại</th></tr></thead><tbody>${rows}</tbody></table>
      Thời gian hoàn vốn (không chiết khấu) ≈ <b>${pb === null ? 'chưa hoàn vốn' : pb.toFixed(1) + ' năm'}</b> · Tổng thặng dư = ${(cf.reduce((s, x) => s + x, 0) - I).toFixed(0)}<br><b>NPV</b> = Σ PV − vốn = <b style="color:${npv >= 0 ? 'var(--ok)' : 'var(--bad)'}">${npv.toFixed(0)}</b> → ${npv >= 0 ? 'chấp nhận (đạt yêu cầu lợi suất)' : 'từ chối (không đạt lợi suất yêu cầu)'}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Ma trận Ansoff, BCG, ngân sách mềm (MBA ch11) ----
function gridWidget(host, rows, cols, cells, hint) {
  host.innerHTML = `<div style="display:grid;grid-template-columns:90px 1fr 1fr;gap:6px;align-items:stretch">
    <div></div>${cols.map(c => `<div style="text-align:center;font-weight:700;font-size:14px">${c}</div>`).join('')}
    ${rows.map((r, i) => `<div style="display:flex;align-items:center;font-weight:700;font-size:14px">${r}</div>` + cols.map((c, j) => { const k = i * 2 + j, x = cells[k]; return `<button data-k="${k}" style="border:2px solid ${x.c};background:var(--card);border-radius:12px;padding:14px 8px;font-weight:700;color:${x.c}">${x.t}</button>`; }).join('')).join('')}
  </div><div class="info" id="gi" style="margin-top:8px">${hint}</div>`;
  host.querySelectorAll('button').forEach(b => b.onclick = () => { const x = cells[+b.dataset.k]; host.querySelector('#gi').innerHTML = `<b style="color:${x.c}">${x.t}</b>: ${x.d}`; });
}
WIDGETS['ansoff'] = host => gridWidget(host, ['Thị trường hiện có', 'Thị trường mới'], ['Sản phẩm hiện có', 'Sản phẩm mới'], [
  { t: 'Thâm nhập thị trường', c: '#2f9e44', d: 'Bán nhiều sản phẩm hiện có hơn cho khách hiện tại – rủi ro THẤP.' },
  { t: 'Phát triển sản phẩm', c: '#f08c00', d: 'Thêm/làm mới sản phẩm để bán cho khách hiện tại – rủi ro cao hơn thâm nhập, thấp hơn phát triển thị trường.' },
  { t: 'Phát triển thị trường', c: '#e8590c', d: 'Vào phân khúc/thị trường mới (trong nước hoặc nước ngoài) – gặp đối thủ mới, có thể chưa hiểu khách.' },
  { t: 'Đa dạng hoá', c: '#e03131', d: 'Sản phẩm mới trên thị trường mới – rủi ro CAO NHẤT; chỉ theo đuổi khi các chiến lược khác đã hết tác dụng.' }
], 'Bấm vào một ô của ma trận Ansoff.');
WIDGETS['bcg'] = host => gridWidget(host, ['Thị trường tăng trưởng CAO', 'Thị trường tăng trưởng THẤP'], ['Thị phần TƯƠNG ĐỐI CAO', 'Thị phần TƯƠNG ĐỐI THẤP'], [
  { t: '⭐ Ngôi sao (Stars)', c: '#f08c00', d: 'Phát triển nhanh, thị phần lớn; thường sản phẩm mới hơn – nhận đầu tư từ cash cows.' },
  { t: '❓ Dấu hỏi (Question marks)', c: '#1c7ed6', d: 'Thị trường tăng nhanh nhưng thị phần thấp; hạn chế số lượng, theo dõi kỹ xem thành Star hay Dog.' },
  { t: '🐄 Bò sữa (Cash cows)', c: '#2f9e44', d: 'Sản phẩm trưởng thành, không cần marketing tốn kém – tạo dòng tiền để đầu tư vào Stars.' },
  { t: '🐕 Chó (Dogs)', c: '#868e96', d: 'Thị phần thấp, thị trường chậm – không nên đầu tư.' }
], 'Bấm vào một ô của ma trận Boston (dùng dòng tiền, không phải lợi nhuận, làm thước đo).');
WIDGETS['flexbudget'] = host => {
  host.innerHTML = `<div class="row"><label>Doanh thu theo ngân sách <input id="b" type="number" value="1000" style="width:90px"></label><label>Doanh thu thực tế <input id="a" type="number" value="1300" style="width:90px"></label></div>
    <div class="row"><label>Vật tư theo ngân sách <input id="c" type="number" value="221.1" style="width:90px"></label><label>Vật tư thực tế <input id="d" type="number" value="300" style="width:90px"></label></div><div class="calc" id="o"></div><p class="small">Số liệu minh hoạ (đơn vị tuỳ chọn). Ngân sách mềm = tỷ lệ chi phí/doanh thu trong ngân sách × doanh thu thực tế.</p>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const B = g('b'), A = g('a'), C = g('c'), D = g('d'); if (!B) { o.textContent = 'Doanh thu ngân sách phải > 0'; return; }
    const pct = C / B, soft = pct * A;
    o.innerHTML = `Tỷ lệ vật tư/doanh thu trong ngân sách = <b>${(pct * 100).toFixed(2)}%</b><br>Chênh lệch theo <b>ngân sách cố định</b> = ${D} − ${C} = <b style="color:${D > C ? 'var(--bad)' : 'var(--ok)'}">${(D - C).toFixed(1)}</b><br>Ngân sách mềm tại doanh thu thực tế = ${(pct * 100).toFixed(2)}% × ${A} = <b>${soft.toFixed(1)}</b><br>Chênh lệch theo <b>ngân sách mềm</b> = ${D} − ${soft.toFixed(1)} = <b style="color:${D > soft ? 'var(--bad)' : 'var(--ok)'}">${(D - soft).toFixed(1)}</b> ${D > soft ? '→ chi vượt thật sự' : '→ tiết kiệm'}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Tỷ số tài chính & đòn bẩy (MBA ch12) ----
WIDGETS['ratios'] = host => {
  const f = [['s', 'Doanh thu', 60000], ['cg', 'Giá vốn hàng bán', 30000], ['op', 'Lợi nhuận hoạt động', 8700], ['pbt', 'LN trước thuế', 8100], ['pat', 'LN sau thuế', 6723],
    ['ca', 'Tài sản lưu động', 21108], ['cl', 'Nợ ngắn hạn', 4908], ['st', 'Hàng tồn kho', 9108], ['db', 'Khách nợ', 12000], ['eq', 'Vốn chủ sở hữu', 18800], ['ltd', 'Vay dài hạn', 10000]];
  host.innerHTML = `<p class="small">Mặc định = số liệu công ty High Note (kỳ 6 tháng = 182,5 ngày). Sửa số để thử.</p><div class="row">${f.map(x => `<label>${x[1]} <input id="${x[0]}" type="number" value="${x[2]}" style="width:80px"></label>`).join('')}</div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o'), D = 182.5;
  const p = v => isFinite(v) ? v.toFixed(2) : '–';
  function draw() {
    const s = g('s'), cg = g('cg'), op = g('op'), pbt = g('pbt'), pat = g('pat'), ca = g('ca'), cl = g('cl'), st = g('st'), db = g('db'), eq = g('eq'), ltd = g('ltd');
    const borrow = cl + ltd, wc = ca - cl;
    o.innerHTML = `<table class="tb"><tbody>
      <tr><td colspan="2"><b>Khả năng sinh lời</b></td></tr>
      <tr><td>Biên lợi nhuận gộp = (DT − giá vốn) ÷ DT</td><td><b>${p((s - cg) / s * 100)}%</b></td></tr>
      <tr><td>Biên LN hoạt động = LN hoạt động ÷ DT</td><td><b>${p(op / s * 100)}%</b></td></tr>
      <tr><td>Biên LN trước / sau thuế</td><td><b>${p(pbt / s * 100)}% / ${p(pat / s * 100)}%</b></td></tr>
      <tr><td>ROE = LN sau thuế ÷ vốn chủ sở hữu</td><td><b>${p(pat / eq * 100)}%</b></td></tr>
      <tr><td>ROCE = LN hoạt động ÷ (vốn chủ + vay dài hạn)</td><td><b>${p(op / (eq + ltd) * 100)}%</b></td></tr>
      <tr><td colspan="2"><b>Thanh khoản</b></td></tr>
      <tr><td>Vốn lưu động = TS lưu động − nợ ngắn hạn</td><td><b>${wc.toFixed(0)}</b></td></tr>
      <tr><td>Tỷ số thanh khoản hiện thời (nên 1,5–2 : 1)</td><td><b>${p(ca / cl)} : 1</b></td></tr>
      <tr><td>Hệ số thanh toán nhanh = (TS lưu động − tồn kho) ÷ nợ ngắn hạn (> 1:1)</td><td><b>${p((ca - st) / cl)} : 1</b></td></tr>
      <tr><td>Kỳ thu tiền bình quân = khách nợ ÷ DT × ngày</td><td><b>${p(db / s * D)} ngày</b></td></tr>
      <tr><td>Số ngày lưu kho = tồn kho ÷ giá vốn × ngày</td><td><b>${p(st / cg * D)} ngày</b></td></tr>
      <tr><td>Vòng quay vốn lưu động = DT ÷ vốn lưu động</td><td><b>${p(s / wc)} lần</b></td></tr>
      <tr><td colspan="2"><b>Khả năng thanh toán</b></td></tr>
      <tr><td>Nợ / vốn chủ sở hữu (gearing, nên ≤ 1:1)</td><td><b>${p(borrow / eq)} : 1</b></td></tr></tbody></table>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['gearing'] = host => {
  host.innerHTML = `<div class="row"><label style="flex:1">Tỷ lệ vốn vay: <b id="v">0</b>% <input id="r" type="range" min="0" max="90" step="5" value="0"></label><label>Lãi vay % <input id="i" type="number" value="12" style="width:60px"></label></div>
    <p class="small">Vốn cần 60.000; lợi nhuận hoạt động 10.000 (trước lãi vay). Thử giảm lợi nhuận để thấy rủi ro.</p><div class="row"><label>Lợi nhuận hoạt động <input id="e" type="number" value="10000" style="width:90px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const K = 60000, d = g('r') / 100 * K, eq = K - d, int = d * g('i') / 100, e = g('e'), pr = e - int;
    host.querySelector('#v').textContent = g('r');
    o.innerHTML = `Vốn vay = ${d.toFixed(0)} · Vốn cổ đông = ${eq.toFixed(0)} · Lãi vay = ${int.toFixed(0)}<br>Lợi nhuận sau lãi vay = <b style="color:${pr >= 0 ? 'var(--ok)' : 'var(--bad)'}">${pr.toFixed(0)}</b> · <b>ROSC (lợi nhuận cổ đông) = ${eq > 0 ? (pr / eq * 100).toFixed(1) + '%' : '–'}</b> · Hệ số bảo chứng lãi vay = ${int ? (e / int).toFixed(1) : '∞'}${int && e / int < 2 ? ' ⚠️ thấp (< 2)' : ''}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Định giá: DCF khớp dòng tiền – tỷ suất chiết khấu; so sánh P/E (Valuation ch2) ----
WIDGETS['dcf-match'] = host => {
  const ce = [50, 60, 68, 76.2, 83.49 + 1603.008], cf = [90, 100, 108, 116.2, 123.49 + 2363.008], debt = 800;
  host.innerHTML = `<div class="row"><label>Chi phí vốn chủ sở hữu % <input id="ke" type="number" value="13.625" step="0.025" style="width:80px"></label><label>WACC % <input id="w" type="number" value="9.94" step="0.01" style="width:70px"></label></div>
    <div class="calc" id="o"></div><p class="small">Dữ liệu ví dụ 2.1 trong sách: nợ thị trường 800; lãi vay sau thuế 40/năm; thuế 50%.</p>`;
  const g = id => (parseFloat(host.querySelector('#' + id).value) || 0) / 100, o = host.querySelector('#o');
  const pv = (a, r) => a.reduce((s, x, i) => s + x / Math.pow(1 + r, i + 1), 0);
  function draw() {
    const ke = g('ke'), w = g('w'), f = (x) => x.toFixed(0);
    const ok1 = pv(ce, ke), ok2 = pv(cf, w) - debt, bad1 = pv(ce, w), bad2 = pv(cf, ke) - debt;
    o.innerHTML = `<table class="tb"><tbody>
      <tr><td>✅ CF vốn chủ sở hữu ÷ chi phí vốn chủ sở hữu</td><td><b>${f(ok1)}</b></td></tr>
      <tr><td>✅ CF doanh nghiệp ÷ WACC, trừ nợ ${debt}</td><td><b>${f(ok2)}</b></td></tr>
      <tr><td>❌ CF vốn chủ sở hữu ÷ <i>WACC</i> (định giá quá cao)</td><td style="color:var(--bad)"><b>${f(bad1)}</b> (${bad1 >= ok1 ? '+' : ''}${f(bad1 - ok1)})</td></tr>
      <tr><td>❌ CF doanh nghiệp ÷ <i>chi phí vốn chủ sở hữu</i> (định giá quá thấp)</td><td style="color:var(--bad)"><b>${f(bad2)}</b> (${f(bad2 - ok2)})</td></tr></tbody></table>
      <span class="small">Hai cách đúng cho cùng giá trị vốn chủ sở hữu (≈ 1.073). Khớp đúng loại dòng tiền với đúng tỷ suất chiết khấu.</span>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['pe-comps'] = host => {
  const F = [['Adobe Systems', 23.2], ['Autodesk', 20.4], ['Broderbund', 32.8], ['Computer Associates', 18.0], ['Lotus Development', 24.1], ['Microsoft', 27.4], ['Novell', 30.0], ['Oracle', 37.8], ['Software Publishing', 10.6], ['System Software', 15.7]];
  host.innerHTML = `<p class="small">Bỏ chọn vài công ty để thấy P/E trung bình “thay đổi” – minh hoạ nguy cơ thiên lệch khi chọn công ty so sánh.</p><div class="leg">${F.map((f, i) => `<label><input type="checkbox" data-i="${i}" checked>${f[0]} (${f[1]})</label>`).join('')}</div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const sel = [...host.querySelectorAll('input:checked')].map(c => F[+c.dataset.i][1]);
    o.innerHTML = sel.length ? `Số công ty: ${sel.length} · <b>P/E trung bình = ${(sel.reduce((s, x) => s + x, 0) / sel.length).toFixed(1)}</b>` : 'Chọn ít nhất một công ty.';
  }
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};

// ---- ROC / ROE (Valuation ch3) ----
WIDGETS['roc-roe'] = host => {
  host.innerHTML = `<div class="row"><label>EBIT <input id="e" type="number" value="1720" style="width:80px"></label><label>Thuế % <input id="t" type="number" value="35" style="width:50px"></label><label>Nợ (BV) <input id="d" type="number" value="6972" style="width:80px"></label><label>Vốn chủ (BV) <input id="q" type="number" value="12316" style="width:80px"></label><label>Lãi vay <input id="i" type="number" value="453" style="width:70px"></label><label>Doanh thu <input id="s" type="number" value="56154" style="width:80px"></label></div><div class="calc" id="o"></div><p class="small">Mặc định gần số liệu Boeing 1998 (triệu USD).</p>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const E = g('e'), t = g('t') / 100, D = g('d'), Q = g('q'), I = g('i'), S = g('s'), C = D + Q;
    const roc = E * (1 - t) / C, margin = E * (1 - t) / S, turn = S / C, i = D ? I / D : 0, roe = roc + D / Q * (roc - i * (1 - t));
    o.innerHTML = `ROC sau thuế = EBIT(1−t) ÷ (D+E) = <b>${(roc * 100).toFixed(2)}%</b> = biên hoạt động sau thuế <b>${(margin * 100).toFixed(2)}%</b> × vòng quay vốn <b>${turn.toFixed(2)}</b><br>Lãi vay sổ sách i = ${(i * 100).toFixed(2)}% · D/E = ${(D / Q * 100).toFixed(1)}%<br>ROE = ROC + D/E × [ROC − i(1−t)] = <b>${(roe * 100).toFixed(2)}%</b> ${roc > i * (1 - t) ? '→ vay nợ <b>làm tăng</b> ROE' : '→ vay nợ làm giảm ROE'}`;
  }
  host.querySelectorAll('input').forEach(x => x.oninput = draw); draw();
};

// ---- Danh mục 2 tài sản & CAPM (Valuation ch4) ----
WIDGETS['portfolio2'] = host => {
  host.innerHTML = `<div class="row"><label>TS A: kỳ vọng % <input id="ra" type="number" value="8.4" style="width:60px"></label><label>σ A % <input id="sa" type="number" value="31" style="width:60px"></label><label>TS B: kỳ vọng % <input id="rb" type="number" value="49.8" style="width:60px"></label><label>σ B % <input id="sb" type="number" value="62" style="width:60px"></label></div>
  <div class="row"><label style="flex:1">Tỷ trọng A: <b id="wv">50</b>% <input id="w" type="range" min="0" max="100" value="50"></label><label style="flex:1">Tương quan ρ: <b id="pv">0.20</b> <input id="p" type="range" min="-100" max="100" value="20"></label></div><div class="calc" id="o"></div><p class="small">Mặc định gần Boeing (A) và Home Depot (B) 1991–98. Kéo ρ xuống để thấy lợi ích đa dạng hoá.</p>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const w = g('w') / 100, p = g('p') / 100, sa = g('sa'), sb = g('sb'), ra = g('ra'), rb = g('rb');
    host.querySelector('#wv').textContent = (w * 100).toFixed(0); host.querySelector('#pv').textContent = p.toFixed(2);
    const var_ = w * w * sa * sa + (1 - w) * (1 - w) * sb * sb + 2 * w * (1 - w) * p * sa * sb, sd = Math.sqrt(Math.max(var_, 0));
    const avg = w * sa + (1 - w) * sb;
    o.innerHTML = `Lợi nhuận kỳ vọng danh mục = <b>${(w * ra + (1 - w) * rb).toFixed(2)}%</b><br>Độ lệch chuẩn danh mục = <b>${sd.toFixed(2)}%</b> (trung bình có trọng số của σ: ${avg.toFixed(2)}%) → <b style="color:var(--ok)">giảm rủi ro nhờ đa dạng hoá ${(avg - sd).toFixed(2)} điểm %</b>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['capm'] = host => {
  host.innerHTML = `<div class="row"><label>Lãi suất phi rủi ro % <input id="rf" type="number" value="5" step="0.1" style="width:60px"></label><label>Phần bù rủi ro thị trường % <input id="mp" type="number" value="5.5" step="0.1" style="width:60px"></label><label>Beta β <input id="b" type="number" value="1.2" step="0.05" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() { const rf = g('rf'), mp = g('mp'), b = g('b'); o.innerHTML = `E(R) = R<sub>f</sub> + β × (E(R<sub>m</sub>) − R<sub>f</sub>) = ${rf} + ${b} × ${mp} = <b>${(rf + b * mp).toFixed(2)}%</b> ${b > 1 ? '(rủi ro thị trường cao hơn trung bình)' : b < 1 ? '(thấp hơn trung bình)' : '(bằng thị trường)'}`; }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Phần bù rủi ro hàm ý & phần bù quốc gia (Valuation ch7) ----
WIDGETS['implied-erp'] = host => {
  host.innerHTML = `<div class="row"><label>Chỉ số <input id="p" type="number" value="1469" style="width:80px"></label><label>Tỷ suất cổ tức % <input id="d" type="number" value="1.68" step="0.01" style="width:60px"></label><label>Tăng trưởng 5 năm % <input id="g" type="number" value="10" style="width:55px"></label><label>Tăng trưởng ổn định % <input id="gs" type="number" value="6.5" step="0.1" style="width:55px"></label><label>Lãi suất phi rủi ro % <input id="rf" type="number" value="6.5" step="0.1" style="width:55px"></label></div><div class="calc" id="o"></div><p class="small">Mặc định: S&amp;P 500 ngày 31/12/1999 (mô hình hai giai đoạn). Giải ngược r sao cho hiện giá = mức chỉ số.</p>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function val(r, P, dy, g1, g2) {
    let cf = P * dy, pv = 0;
    for (let t = 1; t <= 5; t++) { cf *= 1 + g1; pv += cf / Math.pow(1 + r, t); }
    const tv = cf * (1 + g2) / (r - g2); return pv + tv / Math.pow(1 + r, 5);
  }
  function draw() {
    const P = g('p'), dy = g('d') / 100, g1 = g('g') / 100, g2 = g('gs') / 100, rf = g('rf') / 100;
    let lo = g2 + 0.0001, hi = 0.5;
    if (val(lo, P, dy, g1, g2) < P) { o.textContent = 'Không có nghiệm (giá trị luôn nhỏ hơn mức chỉ số).'; return; }
    for (let i = 0; i < 80; i++) { const m = (lo + hi) / 2; if (val(m, P, dy, g1, g2) > P) lo = m; else hi = m; }
    const r = (lo + hi) / 2;
    o.innerHTML = `Lợi suất yêu cầu hàm ý <b>r = ${(r * 100).toFixed(2)}%</b> → <b>phần bù rủi ro hàm ý = ${((r - rf) * 100).toFixed(2)}%</b> (sách: 8,56% − 6,5% ≈ 2,06%)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['country-erp'] = host => {
  host.innerHTML = `<div class="row"><label>Phần bù thị trường trưởng thành % <input id="m" type="number" value="5.51" step="0.01" style="width:60px"></label><label>Default spread quốc gia % <input id="s" type="number" value="4.83" step="0.01" style="width:60px"></label><label>σ cổ phiếu quốc gia % <input id="se" type="number" value="30.64" style="width:60px"></label><label>σ trái phiếu quốc gia % <input id="sb" type="number" value="15.28" style="width:60px"></label><label>σ cổ phiếu Mỹ % <input id="su" type="number" value="20" style="width:55px"></label></div>
  <div class="row"><label>Rf % <input id="rf" type="number" value="5" style="width:50px"></label><label>Beta <input id="b" type="number" value="1.2" step="0.05" style="width:50px"></label><label>λ (mức tiếp xúc rủi ro quốc gia) <input id="l" type="number" value="1" step="0.05" style="width:55px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const m = g('m'), s = g('s'), se = g('se'), sb = g('sb'), su = g('su'), rf = g('rf'), b = g('b'), l = g('l');
    const c1 = s, c2 = m * se / su - m, c3 = s * se / sb;
    const ke = c => (rf + b * m + l * c).toFixed(2);
    o.innerHTML = `<table class="tb"><thead><tr><th>Cách ước tính</th><th>Phần bù quốc gia</th><th>Chi phí vốn chủ (Rf + β·ERP + λ·CRP)</th></tr></thead><tbody>
      <tr><td>1. Default spread của trái phiếu quốc gia</td><td><b>${c1.toFixed(2)}%</b></td><td>${ke(c1)}%</td></tr>
      <tr><td>2. Độ lệch chuẩn tương đối (cổ phiếu quốc gia ÷ cổ phiếu Mỹ)</td><td><b>${c2.toFixed(2)}%</b></td><td>${ke(c2)}%</td></tr>
      <tr><td>3. Default spread × (σ cổ phiếu ÷ σ trái phiếu quốc gia)</td><td><b>${c3.toFixed(2)}%</b></td><td>${ke(c3)}%</td></tr></tbody></table><span class="small">Mặc định: Brazil 3/2000 – cách 3 ra 9,69%; chi phí vốn Aracruz (β 0,72, λ 0,25) ≈ 11,4%.</span>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Beta đòn bẩy & chi phí vốn (Valuation ch8) ----
WIDGETS['beta-lever'] = host => {
  host.innerHTML = `<div class="row"><label>Beta hiện tại <input id="b" type="number" value="0.56" step="0.01" style="width:70px"></label><label>D/E hiện tại % <input id="de0" type="number" value="15.56" step="0.5" style="width:70px"></label><label>Thuế % <input id="t" type="number" value="35" step="1" style="width:60px"></label><label>D/E mới % <input id="de1" type="number" value="50" step="1" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const b = g('b'), de0 = g('de0') / 100, t = g('t') / 100, de1 = g('de1') / 100;
    const bu = b / (1 + (1 - t) * de0), bl = bu * (1 + (1 - t) * de1);
    o.innerHTML = `β<sub>không vay</sub> = ${b} ÷ (1 + (1−${t}) × ${de0.toFixed(4)}) = <b>${bu.toFixed(3)}</b><br>β<sub>mới</sub> = ${bu.toFixed(3)} × (1 + (1−${t}) × ${de1.toFixed(4)}) = <b>${bl.toFixed(3)}</b> (sách: Boeing 0,56 → 0,51; D/E 100% → 0,84)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

WIDGETS['wacc-calc'] = host => {
  host.innerHTML = `<div class="row"><label>Rf % <input id="rf" type="number" value="5" step="0.1" style="width:60px"></label><label>β <input id="b" type="number" value="0.9585" step="0.01" style="width:70px"></label><label>ERP % <input id="mp" type="number" value="5.51" step="0.1" style="width:60px"></label><label>Spread nợ % <input id="sp" type="number" value="1" step="0.1" style="width:60px"></label><label>Thuế biên % <input id="t" type="number" value="35" style="width:55px"></label><label>Nợ <input id="d" type="number" value="7847" style="width:75px"></label><label>Vốn CSH <input id="e" type="number" value="55197" style="width:80px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const rf = g('rf'), b = g('b'), mp = g('mp'), sp = g('sp'), t = g('t') / 100, d = g('d'), e = g('e');
    const ke = rf + b * mp, kd = (rf + sp) * (1 - t), w = d + e ? d / (d + e) : 0, wacc = ke * (1 - w) + kd * w;
    o.innerHTML = `k<sub>e</sub> = ${ke.toFixed(2)}% · k<sub>d</sub> sau thuế = ${kd.toFixed(2)}% · D/(D+E) = ${(w * 100).toFixed(2)}%<br>Chi phí vốn (WACC) = <b>${wacc.toFixed(2)}%</b> (sách Boeing: 9,49%)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Biên an toàn: giá vs giá trị (Marks ch3–4) ----
WIDGETS['margin-safety'] = host => {
  host.innerHTML = `<div class="row"><label>Giá trị nội tại ước tính <input id="v" type="number" value="80" style="width:75px"></label><label>Giá thị trường <input id="p" type="number" value="60" style="width:75px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const v = g('v'), p = g('p');
    if (!p || !v) { o.textContent = 'Nhập giá trị và giá.'; return; }
    const disc = (v - p) / v * 100, up = (v / p - 1) * 100;
    o.innerHTML = `Chiết khấu so với giá trị = <b>${disc.toFixed(1)}%</b> (biên an toàn) · lãi tiềm năng khi giá hội tụ = <b>${up.toFixed(1)}%</b><br>${disc > 25 ? '✅ Biên an toàn rộng — nhưng giá có thể còn giảm trước khi hội tụ.' : disc > 0 ? '⚠️ Biên mỏng — sai số ước tính giá trị dễ xoá sạch.' : '❌ Giá ≥ giá trị: trả quá nhiều, phải dựa vào “kẻ ngốc lớn hơn”.'}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Lỗ bao nhiêu thì phải lãi bấy nhiêu để hoà vốn (Marks ch7) ----
WIDGETS['loss-recovery'] = host => {
  host.innerHTML = `<div class="row"><label>Mức lỗ % <input id="l" type="range" min="1" max="95" value="40" style="width:200px"> <b id="lv">40</b>%</label></div><div class="calc" id="o"></div>`;
  const l = host.querySelector('#l'), o = host.querySelector('#o'), lv = host.querySelector('#lv');
  function draw() {
    const x = +l.value; lv.textContent = x;
    const need = x / (100 - x) * 100;
    o.innerHTML = `Lỗ <b>${x}%</b> ⇒ cần lãi <b>${need.toFixed(1)}%</b> để hoà vốn.<br>Ví dụ: 100 → ${100 - x} → cần tăng ${need.toFixed(1)}% để về 100. (sách: lỗ 40% cần lãi 67%)`;
  }
  l.oninput = draw; draw();
};

// ---- Con lắc tâm lý thị trường (Marks ch9) ----
WIDGETS['pendulum'] = host => {
  host.innerHTML = `<div class="calc"><div style="display:flex;justify-content:space-between;font-size:.85em"><span>😱 Sợ hãi / bán tháo</span><span>🤑 Tham lam / hưng phấn</span></div><input id="s" type="range" min="0" max="100" value="50" style="width:100%"><div id="o" style="margin-top:8px"></div></div>`;
  const s = host.querySelector('#s'), o = host.querySelector('#o');
  const st = [
    [10, '🩸 Cực kỳ sợ hãi', 'Giai đoạn 3 thị trường gấu: “mọi thứ chỉ có thể tệ hơn”. Giá rẻ, phần bù rủi ro lớn, người bán bị ép nhiều ⇒ <b>cơ hội của cả đời</b>; cần tính khách quan và quyết tâm để mua.'],
    [30, '😟 Bi quan', 'Hầu hết nhận ra mọi thứ xấu đi. Giá đang giảm; bắt đầu quan sát món hời, chuẩn bị vốn.'],
    [60, '😐 Quanh điểm giữa', 'Hiếm khi con lắc ở lâu đây. Nhà đầu tư thận trọng, định giá hợp lý; chọn lọc theo giá trị.'],
    [85, '😄 Lạc quan', 'Giai đoạn 2 thị trường bò: ai cũng nhận thấy cải thiện; cần ít trí tưởng tượng để mua. Giá phản ánh hơn giá trị hợp lý ⇒ <b>giảm dần rủi ro</b>.'],
    [101, '🤩 Hưng phấn cực độ', 'Giai đoạn 3 thị trường bò: “mọi thứ tốt mãi mãi”. Người khôn làm ở đầu, kẻ dại làm ở cuối; phần bù rủi ro mỏng, ghen tị thúc đẩy ⇒ <b>phòng thủ, bán bớt, tăng tiền mặt</b>.']
  ];
  function draw() { const v = +s.value, r = st.find(x => v < x[0]); o.innerHTML = `<b>${r[1]}</b><br>${r[2]}`; }
  s.oninput = draw; draw();
};

// ---- Danh sách kiểm tra món hời (Marks ch12) ----
WIDGETS['bargain-check'] = host => {
  const items = ['Ít được biết đến và chưa được hiểu đầy đủ', 'Có vấn đề cơ bản trên bề mặt', 'Gây tranh cãi, đáng sợ hoặc cấm kỵ', 'Bị coi là không phù hợp với danh mục “đáng kính”', 'Không được yêu thích, bị báo chí nói xấu', 'Theo sau một kỷ lục lợi suất kém', 'Gần đây bị thoái vốn, không phải tích lũy'];
  host.innerHTML = `<div class="calc">${items.map((t, i) => `<label style="display:block;margin:3px 0"><input type="checkbox" data-i="${i}"> ${t}</label>`).join('')}<div id="o" style="margin-top:8px"></div></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const n = host.querySelectorAll('input:checked').length;
    o.innerHTML = `<b>${n}/7</b> — ` + (n >= 5 ? 'nhận thức có thể tệ hơn thực tế nhiều ⇒ <b>đáng nghiên cứu sâu về giá trị</b> (nhưng vẫn phải kiểm tra giá trị nội tại và rủi ro).' : n >= 3 ? 'có vài dấu hiệu của sự bị bỏ rơi; so sánh giá với giá trị.' : 'khó là món hời nếu ai cũng thích — nhớ: “nếu mọi người đều cảm thấy tốt, thì nó sẽ không có giá hời”.');
  }
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};

// ---- Đo nhiệt độ thị trường (Marks ch15) ----
WIDGETS['market-thermometer'] = host => {
  const q = [['Nhà đầu tư lạc quan', 'Nhà đầu tư bi quan'], ['Truyền thông nói nên đầu tư mạnh', 'Truyền thông nói nên tránh xa'], ['Kế hoạch đầu tư mới được chấp nhận dễ dàng', 'Kế hoạch mới bị bác ngay'], ['Phát hành/mở quỹ được coi là cơ hội làm giàu', 'Phát hành/mở quỹ được coi là cạm bẫy'], ['Vốn dễ có (chu kỳ tín dụng mở)', 'Vốn khó có'], ['P/E cao so với lịch sử', 'P/E thấp so với lịch sử'], ['Chênh lệch lợi suất chặt', 'Chênh lệch lợi suất rộng'], ['Quá nhiều tiền đuổi theo quá ít thương vụ', 'Tiền khan hiếm, người bán bị ép nhiều']];
  host.innerHTML = `<div class="calc">${q.map((r, i) => `<div style="margin:4px 0"><label><input type="radio" name="q${i}" value="0"> ${r[0]}</label><br><label><input type="radio" name="q${i}" value="1"> ${r[1]}</label></div>`).join('')}<div id="o" style="margin-top:8px">Chọn từng cặp theo thị trường hôm nay.</div></div>`;
  const o = host.querySelector('#o');
  function draw() {
    let a = 0, b = 0;
    q.forEach((_, i) => { const c = host.querySelector(`input[name=q${i}]:checked`); if (c) { if (c.value === '0') a++; else b++; } });
    if (a + b === 0) return;
    o.innerHTML = `Cột “nóng”: <b>${a}</b> · cột “lạnh”: <b>${b}</b><br>` + (a > b + 1 ? '🔥 Phần lớn ở cột nóng ⇒ <b>giữ chặt ví</b>: thận trọng, giảm rủi ro.' : b > a + 1 ? '🧊 Phần lớn ở cột lạnh ⇒ <b>cơ hội</b>: cần quyết liệt, mua có chọn lọc.' : '🌡️ Cân bằng ⇒ kiên nhẫn, chọn lọc, không có thái quá rõ ràng.');
  }
  host.querySelectorAll('input').forEach(i => i.onchange = draw);
};

// ---- Máy tính cổ phiếu cơ bản (Understanding Stocks ch1) ----
WIDGETS['stock-calc'] = host => {
  host.innerHTML = `<div class="row"><label>Số cổ phiếu <input id="n" type="number" value="1000" style="width:80px"></label><label>Giá mua $ <input id="b" type="number" value="15" step="0.01" style="width:70px"></label><label>Giá hiện tại/bán $ <input id="s" type="number" value="17" step="0.01" style="width:70px"></label><label>Phí môi giới $ <input id="f" type="number" value="0" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const n = g('n'), b = g('b'), s = g('s'), f = g('f'), cost = n * b, pts = s - b, pl = n * pts - f;
    o.innerHTML = `Chi phí mua = ${n} × $${b} = <b>$${cost.toLocaleString()}</b><br>Lãi/lỗ = <b>${pts >= 0 ? '+' : ''}${pts.toFixed(2)} điểm</b> ⇒ ${n} × ${pts.toFixed(2)} − phí = <b>${pl >= 0 ? '+' : '−'}$${Math.abs(pl).toLocaleString()}</b> (${cost ? (pl / cost * 100).toFixed(1) : 0}%)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Giá trái phiếu và lãi suất (nghịch chiều) ----
WIDGETS['bond-rate'] = host => {
  host.innerHTML = `<div class="row"><label>Coupon % <input id="c" type="number" value="8" step="0.25" style="width:60px"></label><label>Lãi suất thị trường mới % <input id="r" type="number" value="6" step="0.25" style="width:60px"></label><label>Số năm còn lại <input id="y" type="number" value="10" style="width:55px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const c = g('c') / 100 * 1000, r = g('r') / 100, y = Math.max(1, Math.round(g('y')));
    const p = r === 0 ? c * y + 1000 : c * (1 - Math.pow(1 + r, -y)) / r + 1000 / Math.pow(1 + r, y);
    o.innerHTML = `Trái phiếu mệnh giá $1.000, coupon $${c.toFixed(0)}/năm ⇒ giá hợp lý ≈ <b>$${p.toFixed(0)}</b> ${p > 1000 ? '(trên mệnh giá: lãi suất giảm ⇒ giá tăng)' : p < 1000 ? '(dưới mệnh giá: lãi suất tăng ⇒ giá giảm)' : ''}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Lãi kép (Understanding Stocks ch4) ----
WIDGETS['compound-simple'] = host => {
  host.innerHTML = `<div class="row"><label>Vốn ban đầu <input id="p" type="number" value="100" style="width:90px"></label><label>Lãi suất %/năm <input id="r" type="number" value="10" step="0.5" style="width:60px"></label><label>Số năm <input id="y" type="number" value="20" style="width:55px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const p = g('p'), r = g('r') / 100, y = Math.max(0, Math.round(g('y')));
    const comp = p * Math.pow(1 + r, y), simple = p * (1 + r * y);
    o.innerHTML = `Lãi kép: <b>$${comp.toLocaleString(undefined, { maximumFractionDigits: 0 })}</b> · lãi đơn: $${simple.toLocaleString(undefined, { maximumFractionDigits: 0 })} · phần lãi kép “ăn thêm” = <b>$${(comp - simple).toLocaleString(undefined, { maximumFractionDigits: 0 })}</b><br>Ví dụ sách: $100 × 10% ⇒ $110 năm 1, $121 năm 2 (lãi trên lãi).`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Trung bình giá (DCA) ----
WIDGETS['dca-avg'] = host => {
  host.innerHTML = `<div class="row"><label>Lần 1: cổ phiếu <input id="n1" type="number" value="100" style="width:70px"> giá $ <input id="p1" type="number" value="20" style="width:55px"></label><label>Lần 2: cổ phiếu <input id="n2" type="number" value="200" style="width:70px"> giá $ <input id="p2" type="number" value="10" style="width:55px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const n1 = g('n1'), p1 = g('p1'), n2 = g('n2'), p2 = g('p2'), n = n1 + n2, c = n1 * p1 + n2 * p2;
    o.innerHTML = n ? `Tổng ${n} cổ phiếu, tổng vốn $${c.toLocaleString()} ⇒ giá vốn trung bình = <b>$${(c / n).toFixed(2)}</b> (ví dụ sách: 13,33). Chỉ có lãi khi giá vượt mức này.` : '';
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Quyền chọn mua (call) ----
WIDGETS['call-option'] = host => {
  host.innerHTML = `<div class="row"><label>Giá hiện tại $ <input id="s0" type="number" value="20" style="width:60px"></label><label>Strike $ <input id="k" type="number" value="25" style="width:60px"></label><label>Phí/cổ phiếu $ <input id="pr" type="number" value="2" step="0.1" style="width:60px"></label><label>Hợp đồng <input id="c" type="number" value="5" style="width:50px"></label><label>Giá khi đáo hạn $ <input id="st" type="number" value="27" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const s0 = g('s0'), k = g('k'), pr = g('pr'), c = g('c'), st = g('st'), sh = c * 100, cost = sh * pr, value = Math.max(0, st - k) * sh, pl = value - cost;
    o.innerHTML = `Chi phí quyền chọn = ${sh} × $${pr} = <b>$${cost.toLocaleString()}</b> (kiểm soát $${(sh * s0).toLocaleString()} cổ phiếu)<br>Khi đáo hạn ở $${st}: giá trị = $${value.toLocaleString()} ⇒ ${pl >= 0 ? 'lãi' : 'lỗ'} <b>$${Math.abs(pl).toLocaleString()}</b>${st <= k ? ' — hết hạn vô giá trị, mất toàn bộ phí' : ''}. Hoà vốn ở giá ${(k + pr).toFixed(2)}.`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Các hệ số định giá cổ phiếu (Understanding Stocks ch10) ----
WIDGETS['stock-ratios'] = host => {
  host.innerHTML = `<div class="row"><label>Giá cổ phiếu $ <input id="p" type="number" value="20" style="width:70px"></label><label>EPS năm qua $ <input id="e" type="number" value="2" step="0.1" style="width:60px"></label><label>EPS dự báo $ <input id="f" type="number" value="4" step="0.1" style="width:60px"></label><label>Tăng trưởng EPS %/năm <input id="g" type="number" value="10" style="width:60px"></label></div><div class="row"><label>Vốn hoá $ <input id="m" type="number" value="1000" style="width:80px"></label><label>Doanh thu $ <input id="s" type="number" value="500" style="width:80px"></label><label>Lợi nhuận ròng $ <input id="ni" type="number" value="100" style="width:70px"></label><label>Vốn chủ $ <input id="eq" type="number" value="500" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const p = g('p'), e = g('e'), f = g('f'), gr = g('g'), m = g('m'), s = g('s'), ni = g('ni'), eq = g('eq');
    const pe = e ? p / e : NaN, fpe = f ? p / f : NaN, peg = gr ? pe / gr : NaN, ps = s ? m / s : NaN, roe = eq ? ni / eq * 100 : NaN;
    const pegTxt = isNaN(peg) ? '—' : peg < 0.5 ? 'rẻ (< 0,5)' : peg <= 1 ? 'hợp lý (0,5–1)' : peg <= 2 ? 'đắt (> 1)' : 'rất đắt (> 2)';
    o.innerHTML = `P/E trailing = <b>${pe.toFixed(1)}</b> · P/E forward = <b>${fpe.toFixed(1)}</b><br>PEG = P/E ÷ tăng trưởng = <b>${isNaN(peg) ? '—' : peg.toFixed(2)}</b> (${pegTxt})<br>P/S = <b>${isNaN(ps) ? '—' : ps.toFixed(2)}</b> (${ps > 5 ? 'cao > 5' : ps < 1 ? 'thấp < 1: ưa chuộng của nhà đầu tư giá trị' : 'trung bình'}) · ROE = <b>${isNaN(roe) ? '—' : roe.toFixed(1)}%</b> (${roe > 15 ? 'tốt > 15%' : 'thấp hơn 15%'})`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Trung bình động & RSI (Understanding Stocks ch12) ----
WIDGETS['sma-rsi'] = host => {
  host.innerHTML = `<div class="row"><label>Chuỗi giá đóng cửa (cách nhau bằng dấu phẩy)<br><textarea id="d" rows="2" style="width:100%">20,21,22,21,23,24,25,24,26,27,26,25,24,23,24,22,21,20,21,20</textarea></label></div><div class="row"><label>Chu kỳ MA <input id="n" type="number" value="5" style="width:50px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const a = host.querySelector('#d').value.split(/[,\s]+/).map(parseFloat).filter(x => !isNaN(x)), n = Math.max(2, parseInt(host.querySelector('#n').value) || 5);
    if (a.length < n) { o.textContent = 'Cần ít nhất ' + n + ' giá.'; return; }
    const ma = a.slice(-n).reduce((s, x) => s + x, 0) / n, last = a[a.length - 1];
    let up = 0, dn = 0, k = Math.min(14, a.length - 1);
    for (let i = a.length - k; i < a.length; i++) { const d = a[i] - a[i - 1]; if (d > 0) up += d; else dn -= d; }
    const rsi = dn === 0 ? 100 : 100 - 100 / (1 + (up / k) / (dn / k));
    o.innerHTML = `Giá cuối <b>${last}</b> · MA(${n}) = <b>${ma.toFixed(2)}</b> ⇒ giá ${last > ma ? 'trên MA (tín hiệu tăng)' : 'dưới MA (tín hiệu giảm)'}<br>RSI(${k}) ≈ <b>${rsi.toFixed(0)}</b> ${rsi > 70 ? '— mua quá mức (overbought)' : rsi < 30 ? '— bán quá mức (oversold)' : '— vùng trung tính'}`;
  }
  host.querySelectorAll('textarea,input').forEach(i => i.oninput = draw); draw();
};

// ---- Quy tắc bán 10% và kế hoạch 30-30 (Understanding Stocks ch15) ----
WIDGETS['sell-rules'] = host => {
  host.innerHTML = `<div class="row"><label>Giá mua $ <input id="b" type="number" value="20" step="0.01" style="width:70px"></label><label>Giá hiện tại $ <input id="p" type="number" value="26.5" step="0.01" style="width:70px"></label><label>Số cổ phiếu <input id="n" type="number" value="100" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const b = g('b'), p = g('p'), n = g('n'), ch = b ? (p / b - 1) * 100 : 0;
    let msg;
    if (ch <= -10) msg = `🔴 Quy tắc 10%: đã lỗ ${ch.toFixed(1)}% ⇒ <b>bán</b> (O’Neil dùng 8%). Mức dừng lỗ lúc mua: $${(b * 0.9).toFixed(2)}.`;
    else if (ch >= 30) msg = `🟢 Kế hoạch 30-30: đã lãi ${ch.toFixed(1)}% (> 30%) ⇒ bán <b>30%</b> vị thế = ${Math.round(n * 0.3)} cổ phiếu, chốt khoảng $${(Math.round(n * 0.3) * p).toLocaleString()}.`;
    else msg = `Thay đổi ${ch.toFixed(1)}%: chưa chạm quy tắc. Stop-loss nên đặt ở $${(b * 0.9).toFixed(2)} (−10%).`;
    o.innerHTML = msg;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Trung bình đơn vs trung bình kép (Streetsmart ch2) ----
WIDGETS['avg-returns'] = host => {
  host.innerHTML = `<div class="row"><label>Lợi suất các năm %, cách nhau bởi dấu phẩy <input id="r" type="text" value="100,-80" style="width:220px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const a = host.querySelector('#r').value.split(',').map(parseFloat).filter(x => !isNaN(x));
    if (!a.length) { o.textContent = 'Nhập lợi suất.'; return; }
    const simple = a.reduce((s, x) => s + x, 0) / a.length, tot = a.reduce((p, x) => p * (1 + x / 100), 1), comp = (Math.pow(tot, 1 / a.length) - 1) * 100;
    const mean = simple, sd = a.length > 1 ? Math.sqrt(a.reduce((s, x) => s + (x - mean) ** 2, 0) / (a.length - 1)) : 0;
    o.innerHTML = `Trung bình đơn: <b>${simple.toFixed(2)}%</b> · Trung bình kép (hình học): <b>${comp.toFixed(2)}%</b> · tổng lợi suất cả kỳ: <b>${((tot - 1) * 100).toFixed(1)}%</b> · độ lệch chuẩn: ${sd.toFixed(2)}%<br>Ví dụ sách: +100%, −80% ⇒ đơn 10%, kép −36,75%. Để hoà vốn sau khi giảm x%: cần tăng 1/(1−x) − 1.`;
  }
  host.querySelector('#r').oninput = draw; draw();
};

// ---- Giá trị tương lai & hiện tại ----
WIDGETS['fv-pv'] = host => {
  host.innerHTML = `<div class="row"><label>Số tiền $ <input id="a" type="number" value="10" style="width:80px"></label><label>Lãi suất/chiết khấu % <input id="r" type="number" value="8" step="0.5" style="width:60px"></label><label>Số năm <input id="n" type="number" value="5" style="width:50px"></label></div><div class="calc" id="o"></div>`;
  const g = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const a = g('a'), r = g('r') / 100, n = g('n'), fv = a * Math.pow(1 + r, n), pv = a / Math.pow(1 + r, n);
    o.innerHTML = `FV = ${a} × (1+${r})<sup>${n}</sup> = <b>$${fv.toFixed(2)}</b> (sách: $10, 8%, 5 năm ⇒ $14,69)<br>PV = ${a} ÷ (1+${r})<sup>${n}</sup> = <b>$${pv.toFixed(2)}</b> · hệ số chiết khấu = ${(1 / Math.pow(1 + r, n)).toFixed(4)}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Vốn hoá lợi nhuận: giá trị = lợi nhuận ÷ lãi suất yêu cầu (Streetsmart ch3) ----
WIDGETS['capitalize'] = host => {
  host.innerHTML = `<div class="row"><label>Lợi nhuận/dòng tiền hằng năm (triệu $) <input id="e" type="number" value="200" style="width:90px"></label><label>Lợi suất yêu cầu % <input id="r" type="number" value="10" step="0.5" style="width:60px"></label><label>Tăng trưởng g % <input id="g" type="number" value="0" step="0.5" style="width:60px"></label><label>Số cổ phiếu (triệu) <input id="n" type="number" value="200" style="width:80px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const e = q('e'), r = q('r') / 100, g = q('g') / 100, n = q('n');
    if (r <= g) { o.textContent = 'Lợi suất yêu cầu phải lớn hơn tăng trưởng.'; return; }
    const v = e * (1 + (g ? g : 0)) / (r - g), vs = g ? v : e / r;
    o.innerHTML = `Giá trị vốn hoá ≈ <b>$${vs.toLocaleString(undefined, { maximumFractionDigits: 0 })} triệu</b> ⇒ ${n ? '<b>$' + (vs / n).toFixed(2) + '/cổ phiếu</b>' : ''}<br>Ví dụ sách (ABC Utility): $200 triệu ÷ 10% = $2 tỷ; lên 12% ⇒ $1,667 tỷ (−16,7%); xuống 8% ⇒ $2,5 tỷ (+25%).`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Khoản vay thế chấp: giá trị theo lãi suất (Streetsmart ch3) ----
WIDGETS['mortgage-pv'] = host => {
  host.innerHTML = `<div class="row"><label>Khoản thanh toán/tháng $ <input id="p" type="number" value="734" style="width:80px"></label><label>Số tháng <input id="n" type="number" value="360" style="width:60px"></label><label>Lãi suất chiết khấu %/năm <input id="r" type="number" value="9" step="0.25" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const p = q('p'), n = q('n'), r = q('r') / 1200, pv = r ? p * (1 - Math.pow(1 + r, -n)) / r : p * n;
    o.innerHTML = `Hiện giá của ${n} khoản $${p} chiết khấu ở ${(r * 1200).toFixed(2)}% = <b>$${pv.toLocaleString(undefined, { maximumFractionDigits: 0 })}</b><br>Sách: Mary vay $100.000 lãi 8% ⇒ $734/tháng; lãi thị trường lên 9% ⇒ $91.223; xuống 7% ⇒ $110.326.`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- DCF dòng tiền tự do doanh nghiệp (FCFF) rút gọn (Streetsmart ch4–5) ----
WIDGETS['fcff-dcf'] = host => {
  host.innerHTML = `<div class="row"><label>Doanh thu năm gốc (triệu $) <input id="rev" type="number" value="28365" style="width:90px"></label><label>Tăng trưởng DT %/năm <input id="g" type="number" value="11" step="0.5" style="width:55px"></label><label>NOPM % <input id="m" type="number" value="42" step="0.5" style="width:55px"></label><label>Thuế % <input id="t" type="number" value="32" style="width:50px"></label></div><div class="row"><label>Đầu tư vốn cố định ròng % DT <input id="ni" type="number" value="-1.1" step="0.1" style="width:55px"></label><label>Vốn lưu động % DT tăng thêm <input id="wc" type="number" value="9.8" step="0.1" style="width:55px"></label><label>Số năm vượt trội <input id="n" type="number" value="10" style="width:45px"></label><label>WACC % <input id="w" type="number" value="10" step="0.25" style="width:55px"></label></div><div class="row"><label>Tài sản ngắn hạn <input id="sa" type="number" value="47827" style="width:80px"></label><label>Nợ + ưu đãi + nợ ngắn hạn <input id="li" type="number" value="11640" style="width:80px"></label><label>Số cổ phiếu (triệu) <input id="sh" type="number" value="5415" style="width:75px"></label><label>Giá thị trường $ <input id="px" type="number" value="45.15" step="0.01" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const g = q('g') / 100, m = q('m') / 100, t = q('t') / 100, ni = q('ni') / 100, wc = q('wc') / 100, n = Math.max(1, Math.round(q('n'))), w = q('w') / 100;
    let prev = q('rev'), pv = 0, nopat = 0;
    for (let i = 1; i <= n; i++) {
      const rev = prev * (1 + g), nop = rev * m, tax = nop * t;
      const fcff = nop - tax - rev * ni - (rev - prev) * wc;
      pv += fcff / Math.pow(1 + w, i); nopat = nop - tax; prev = rev;
    }
    const resid = nopat / w, pvResid = resid / Math.pow(1 + w, n);
    const ev = pv + pvResid + q('sa'), eq = ev - q('li'), sh = q('sh'), vps = sh ? eq / sh : 0, px = q('px'), ratio = px ? vps / px : 0;
    o.innerHTML = `Σ FCFF chiết khấu = <b>${pv.toFixed(0)}</b> · giá trị cuối kỳ (NOPAT/WACC) chiết khấu = <b>${pvResid.toFixed(0)}</b> (${(pvResid / ev * 100).toFixed(0)}% giá trị DN) · giá trị doanh nghiệp = <b>${ev.toFixed(0)}</b><br>Giá trị vốn chủ = ${eq.toFixed(0)} ⇒ <b>giá trị nội tại ≈ $${vps.toFixed(2)}/cổ phiếu</b> · tỷ lệ giá trị/giá = <b>${ratio.toFixed(2)}</b> ⇒ ${ratio > 1.15 ? 'bị định giá thấp (cân nhắc mua)' : ratio < 0.85 ? 'bị định giá cao (bán/chờ)' : 'gần với giá hợp lý'}<br><i>Mô hình rút gọn minh hoạ (tăng trưởng không đổi, dữ liệu mặc định gần số Microsoft 2002) — không trùng chính xác với bảng tính ValuePro của sách ($38,86).</i>`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Tăng trưởng doanh thu: trung bình đơn vs CAGR (Streetsmart ch5) ----
WIDGETS['cagr'] = host => {
  host.innerHTML = `<div class="row"><label>Doanh thu theo năm (cũ → mới), phân cách bằng dấu phẩy <input id="r" type="text" value="6452,8488,12173,18928,22293,18915" style="width:100%"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const a = host.querySelector('#r').value.split(',').map(parseFloat).filter(x => !isNaN(x) && x > 0);
    if (a.length < 2) { o.textContent = 'Cần ít nhất 2 giá trị.'; return; }
    const gs = a.slice(1).map((x, i) => (x / a[i] - 1) * 100), avg = gs.reduce((s, x) => s + x, 0) / gs.length, cagr = (Math.pow(a[a.length - 1] / a[0], 1 / (a.length - 1)) - 1) * 100;
    o.innerHTML = `Tăng trưởng từng năm: ${gs.map(x => x.toFixed(2) + '%').join(' · ')}<br>Trung bình đơn: <b>${avg.toFixed(2)}%</b> · CAGR: <b>${cagr.toFixed(2)}%</b> (sách Cisco 1997–2002: 26,62% vs 24,00%). Dùng CAGR vì thận trọng hơn.`;
  }
  host.querySelector('#r').oninput = draw; draw();
};

// ---- Bảng kiểm doanh nghiệp tuyệt vời kiểu Buffett (Pick Stocks Like Warren Buffett ch.11) ----
WIDGETS['buffett-checklist'] = host => {
  const items = ['Tôi hiểu rõ cách công ty kiếm tiền (trong vòng tròn năng lực)', 'Sức sinh lợi ổn định, dự đoán được 10 năm tới', 'ROE ≥ 15% nhiều năm, không dùng đòn bẩy/mánh kế toán', 'Nợ thấp (nợ/vốn chủ ≤ 50%)', 'Lợi nhuận bằng tiền mặt, ít cần rót vốn mới', 'Có “hào”: thương hiệu/nhượng quyền, có thể tăng giá', 'Quản lý trung thực, tiết kiệm, nghĩ như chủ và đặt cổ phiếu lên trước', 'Giá thấp hơn giá trị nội tại tôi ước tính (biên an toàn)', 'Tôi sẵn sàng giữ 10 năm nếu thị trường đóng cửa', 'Tôi đã làm bài tập: đọc 5–10 năm báo cáo, hỏi đối thủ/khách hàng'];
  host.innerHTML = '<div style="display:grid;gap:6px">' + items.map((t, i) => `<label style="display:flex;gap:8px;align-items:flex-start"><input type="checkbox" data-i="${i}"> <span>${t}</span></label>`).join('') + '</div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  function draw() {
    const n = host.querySelectorAll('input:checked').length;
    o.innerHTML = `Điểm: <b>${n}/${items.length}</b> — ${n >= 9 ? 'gần như “chắc chắn”: đáng cân nhắc mua một vị thế đáng kể' : n >= 7 ? 'khá tốt nhưng còn điểm chưa rõ — nghiên cứu thêm' : n >= 4 ? 'còn nghi ngờ: Buffett sẽ bỏ qua cú ném này' : 'chưa đạt — chờ “cú ném béo”'}. (Buffett chỉ đánh khi gần như đạt hết.)`;
  }
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};

// ---- Khuếch đại độ trễ đuôi (DDIA ch1) ----
WIDGETS['tail-latency'] = host => {
  host.innerHTML = `<div class="row"><label>Xác suất 1 call backend chậm % <input id="p" type="number" value="1" step="0.1" style="width:60px"></label><label>Số call backend / request người dùng <input id="n" type="number" value="100" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const p = q('p') / 100, n = Math.max(1, Math.round(q('n'))), a = 1 - Math.pow(1 - p, n);
    o.innerHTML = `Xác suất ít nhất một call chậm = 1 − (1 − p)<sup>n</sup> = <b>${(a * 100).toFixed(1)}%</b><br>Nghĩa là dù chỉ ${(p * 100).toFixed(2)}% call backend chậm, <b>${(a * 100).toFixed(1)}%</b> request của người dùng sẽ chậm. (p = 1%, n = 100 ⇒ 63,4%.)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Chọn mô hình dữ liệu (DDIA ch2) ----
WIDGETS['datamodel-picker'] = host => {
  const qs = ['Dữ liệu chủ yếu là các tài liệu tự đủ (cây một-nhiều), thường tải cả tài liệu?', 'Có nhiều quan hệ nhiều-nhiều và JOIN giữa các thực thể?', 'Mọi thứ có thể liên quan tới mọi thứ (mạng xã hội, đường đi, gợi ý)?', 'Cần ràng buộc lược đồ chặt và giao dịch?', 'Cấu trúc dữ liệu thay đổi thường xuyên/không đồng nhất?'];
  host.innerHTML = '<div style="display:grid;gap:6px">' + qs.map((t, i) => `<label style="display:flex;gap:8px"><input type="checkbox" data-i="${i}"> <span>${t}</span></label>`).join('') + '</div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  function draw() {
    const c = [...host.querySelectorAll('input')].map(i => i.checked);
    const s = { 'Document': c[0] * 3 + c[4] * 2 - c[1] * 2 - c[2] * 2, 'Quan hệ': c[1] * 3 + c[3] * 3 - c[2] + (c[0] ? 0 : 1), 'Đồ thị': c[2] * 4 + c[1] * 1 - c[0] };
    const best = Object.entries(s).sort((a, b) => b[1] - a[1])[0][0];
    o.innerHTML = `Gợi ý: <b>${best}</b> (điểm: ${Object.entries(s).map(([k, v]) => k + ' ' + v).join(' · ')}). Thực tế có thể kết hợp (JSON trong PostgreSQL, quan hệ + đồ thị…).`;
  }
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};

// ---- Sức chứa B-tree (DDIA ch3) ----
WIDGETS['btree-capacity'] = host => {
  host.innerHTML = `<div class="row"><label>Kích thước trang (KB) <input id="ps" type="number" value="4" style="width:55px"></label><label>Branching factor <input id="bf" type="number" value="500" style="width:65px"></label><label>Số tầng <input id="d" type="number" value="4" min="1" max="8" style="width:45px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseFloat(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function fmt(b) { const u = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB']; let i = 0; while (b >= 1024 && i < u.length - 1) { b /= 1024; i++; } return b.toFixed(1) + ' ' + u[i]; }
  function draw() {
    const ps = q('ps') * 1024, bf = q('bf'), d = Math.max(1, Math.round(q('d'))), pages = Math.pow(bf, d);
    o.innerHTML = `Số trang lá ≈ ${bf}<sup>${d}</sup> = <b>${pages.toExponential(2)}</b> ⇒ dung lượng tối đa ≈ <b>${fmt(pages * ps)}</b><br>Tra 1 key cần ~<b>${d}</b> lần đọc trang. (Sách: 4 tầng, 4 KB, branching 500 ⇒ ~256 TB.) Gấp đôi branching factor làm tăng sức chứa 2<sup>${d}</sup> = ${Math.pow(2, d)} lần.`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Varint (DDIA ch4) ----
WIDGETS['varint-calc'] = host => {
  host.innerHTML = `<div class="row"><label>Số nguyên có dấu (zigzag) hoặc không dấu <input id="v" type="number" value="1337" style="width:120px"></label><label><input id="z" type="checkbox"> zigzag (có dấu)</label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    let v = Math.round(parseFloat(host.querySelector('#v').value) || 0); const z = host.querySelector('#z').checked;
    let u = z ? (v >= 0 ? v * 2 : -v * 2 - 1) : Math.abs(v);
    let n = 1, x = u; while (x >= 128) { x = Math.floor(x / 128); n++; }
    o.innerHTML = `Giá trị mã hoá = ${u} ⇒ cần <b>${n} byte</b> (mỗi byte dùng 7 bit dữ liệu + 1 bit “còn tiếp”). Số cố định 64-bit luôn cần 8 byte. Sách: 1337 ⇒ 2 byte; −64…63 ⇒ 1 byte (zigzag).`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = i.onchange = draw); draw();
};

// ---- Quorum (DDIA ch5) ----
WIDGETS['quorum-calc'] = host => {
  host.innerHTML = `<div class="row"><label>n (số replica) <input id="n" type="number" value="3" min="1" style="width:55px"></label><label>w (ghi cần xác nhận) <input id="w" type="number" value="2" min="1" style="width:55px"></label><label>r (đọc hỏi) <input id="r" type="number" value="2" min="1" style="width:55px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseInt(host.querySelector('#' + id).value) || 0, o = host.querySelector('#o');
  function draw() {
    const n = q('n'), w = q('w'), r = q('r');
    if (w > n || r > n) { o.textContent = 'w và r không được lớn hơn n.'; return; }
    const strict = w + r > n;
    o.innerHTML = `${strict ? '✅ w + r = ' + (w + r) + ' &gt; n = ' + n + ' ⇒ tập ghi và tập đọc <b>giao nhau</b> ⇒ kỳ vọng đọc được giá trị mới nhất' : '⚠️ w + r = ' + (w + r) + ' ≤ n = ' + n + ' ⇒ có thể đọc phải giá trị cũ (nhưng độ trễ thấp, sẵn sàng cao hơn)'}<br>Chịu được <b>${n - w}</b> nút hỏng khi ghi và <b>${n - r}</b> nút hỏng khi đọc. (Vẫn có ngoại lệ: sloppy quorum, ghi đồng thời, lỗi một phần…)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Rebalance: hash mod N vs partition cố định (DDIA ch6) ----
WIDGETS['rebalance-mod'] = host => {
  host.innerHTML = `<div class="row"><label>Số node ban đầu N <input id="n" type="number" value="10" min="1" style="width:55px"></label><label>Số node mới <input id="m" type="number" value="11" min="1" style="width:55px"></label><label>Số khoá mô phỏng <input id="k" type="number" value="100000" style="width:85px"></label></div><div class="calc" id="o"></div>`;
  const q = id => parseInt(host.querySelector('#' + id).value) || 1, o = host.querySelector('#o');
  function draw() {
    const n = q('n'), m = q('m'), K = Math.min(q('k'), 1000000); let moved = 0;
    for (let i = 0; i < K; i++) { const h = Math.imul(i + 1, 2654435761) >>> 0; if (h % n !== h % m) moved++; }
    const ideal = m > n ? (m - n) / m : (n - m) / n;
    o.innerHTML = `hash mod N: <b>${(moved / K * 100).toFixed(1)}%</b> khoá phải di chuyển khi ${n} → ${m} node<br>Số partition cố định / consistent: chỉ khoảng <b>${(ideal * 100).toFixed(1)}%</b> (phần tối thiểu cần nhường cho node mới) — ví dụ 10 → 11 node: ~9,1% so với ~90% của mod N.`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Mô phỏng write skew (DDIA ch7) ----
WIDGETS['write-skew-sim'] = host => {
  host.innerHTML = `<div class="row"><label>Chế độ <select id="m"><option value="si">Snapshot isolation (đọc snapshot, ghi hàng của mình)</option><option value="ser">Serializable (tuần tự hoá)</option><option value="lock">SELECT … FOR UPDATE</option></select></label><button id="go" type="button">Alice và Bob cùng xin nghỉ</button></div><div class="calc" id="o">Hai bác sĩ Alice, Bob đang trực. Quy tắc: luôn có ≥ 1 bác sĩ trực.</div>`;
  const o = host.querySelector('#o');
  host.querySelector('#go').onclick = () => {
    const mode = host.querySelector('#m').value;
    const A = { alice: true, bob: true };
    if (mode === 'si') {
      const a = Object.values(A).filter(Boolean).length, b = Object.values(A).filter(Boolean).length;
      if (a >= 2) A.alice = false; if (b >= 2) A.bob = false;
      o.innerHTML = `Cả hai giao dịch đọc từ snapshot cũ thấy <b>${a}</b> bác sĩ trực ⇒ cả hai đều đi nghỉ. Kết quả: trực = <b>${Object.values(A).filter(Boolean).length}</b> ⇒ <b style="color:#dc2626">vi phạm bất biến (write skew)</b>.`;
    } else {
      if (Object.values(A).filter(Boolean).length >= 2) A.alice = false;
      const n = Object.values(A).filter(Boolean).length;
      o.innerHTML = `${mode === 'ser' ? 'Giao dịch của Bob thấy xung đột (hoặc chạy sau)' : 'Bob phải chờ khoá hàng; sau khi Alice commit, nó đọc lại'} ⇒ chỉ ${n} người còn trực ⇒ yêu cầu Bob bị <b>từ chối/abort</b>. Kết quả: trực = <b>${n}</b> ⇒ <b style="color:#16a34a">bất biến được giữ</b>.`;
    }
  };
};

// ---- Fencing token (DDIA ch8) ----
WIDGETS['fencing-sim'] = host => {
  host.innerHTML = `<div class="row"><label><input id="f" type="checkbox" checked> Storage kiểm tra fencing token</label><button id="go" type="button">Chạy kịch bản</button></div><div class="calc" id="o">Client 1 lấy lease (token 33) rồi bị GC dừng lâu; lease hết hạn; client 2 lấy token 34 và ghi; client 1 tỉnh lại và ghi.</div>`;
  const o = host.querySelector('#o');
  host.querySelector('#go').onclick = () => {
    const fence = host.querySelector('#f').checked; let maxTok = 0, file = [];
    const write = (c, t) => { if (fence && t < maxTok) return `Client ${c} (token ${t}): <b style="color:#16a34a">bị từ chối</b> (đã thấy token ${maxTok})`; maxTok = Math.max(maxTok, t); file.push(c); return `Client ${c} (token ${t}): ghi thành công`; };
    const l1 = write(2, 34), l2 = write(1, 33);
    o.innerHTML = l1 + '<br>' + l2 + '<br>' + (file.length > 1 ? '⚠️ <b style="color:#dc2626">Hai client cùng ghi ⇒ file bị hỏng</b>' : '✅ Chỉ client 2 ghi ⇒ file an toàn');
  };
};

// ---- Lamport timestamps (DDIA ch9) ----
WIDGETS['lamport-sim'] = host => {
  host.innerHTML = `<div class="row"><button id="la" type="button">Node A có sự kiện</button><button id="lb" type="button">Node B có sự kiện</button><button id="ab" type="button">A gửi cho B</button><button id="ba" type="button">B gửi cho A</button><button id="rs" type="button">Làm lại</button></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o'); let A, B, log;
  function reset() { A = 0; B = 0; log = []; draw(); }
  function ev(x) { return x === 'A' ? ++A : ++B; }
  function draw() { o.innerHTML = `Counter hiện tại: <b>A = ${A}</b>, <b>B = ${B}</b><br>${log.length ? log.slice(-8).join('<br>') : 'Nhấn các nút để tạo sự kiện. Mỗi lần nhận thông điệp, counter nhảy lên max(của mình, của thông điệp) + 1.'}`; }
  host.querySelector('#la').onclick = () => { log.push(`A: sự kiện (${ev('A')}, A)`); draw(); };
  host.querySelector('#lb').onclick = () => { log.push(`B: sự kiện (${ev('B')}, B)`); draw(); };
  host.querySelector('#ab').onclick = () => { const t = ++A; B = Math.max(B, t) + 1; log.push(`A gửi (${t}, A) → B nhận, B = ${B}`); draw(); };
  host.querySelector('#ba').onclick = () => { const t = ++B; A = Math.max(A, t) + 1; log.push(`B gửi (${t}, B) → A nhận, A = ${A}`); draw(); };
  host.querySelector('#rs').onclick = reset; reset();
};

// ---- Mô phỏng MapReduce đếm từ (DDIA ch10) ----
WIDGETS['mapreduce-wc'] = host => {
  host.innerHTML = `<div class="row"><label>Văn bản đầu vào (mỗi dòng một bản ghi)<br><textarea id="t" rows="4" style="width:100%">to be or not to be\nto code or not to code</textarea></label><label>Số reducer <input id="r" type="number" value="2" min="1" max="4" style="width:50px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  const h = s => { let x = 0; for (const c of s) x = (x * 31 + c.charCodeAt(0)) >>> 0; return x; };
  function draw() {
    const lines = host.querySelector('#t').value.split('\n').filter(Boolean), R = Math.max(1, parseInt(host.querySelector('#r').value) || 1);
    const mapped = lines.map(l => l.toLowerCase().split(/\s+/).filter(Boolean).map(w => [w, 1]));
    const parts = Array.from({ length: R }, () => ({}));
    mapped.flat().forEach(([w, c]) => { (parts[h(w) % R][w] = parts[h(w) % R][w] || []).push(c); });
    o.innerHTML = `<b>Map</b> (${lines.length} mapper): ` + mapped.map((m, i) => `m${i + 1}: ${m.map(x => x[0]).join(' ')}`).join(' · ') + '<br><b>Shuffle + sort</b> theo hash(key) mod ' + R + '<br>' + parts.map((p, i) => `<b>Reducer ${i + 1}</b>: ` + Object.keys(p).sort().map(w => `${w}→${p[w].reduce((a, b) => a + b, 0)}`).join(', ')).join('<br>');
  }
  host.querySelectorAll('textarea,input').forEach(i => i.oninput = draw); draw();
};

// ---- Log phân vùng và offset (DDIA ch11) ----
WIDGETS['log-offsets'] = host => {
  host.innerHTML = `<div class="row"><button id="p" type="button">Producer thêm thông điệp</button><button id="a" type="button">Consumer A đọc</button><button id="b" type="button">Consumer B đọc</button><button id="rb" type="button">Đặt lại B về offset 0 (phát lại)</button></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o'); let log = [], A = 0, B = 0;
  function draw() { o.innerHTML = `Log: ${log.map((m, i) => `<span style="display:inline-block;border:1px solid #888;padding:1px 6px;margin:1px;background:${i < A && i < B ? '#dcfce7' : i < Math.max(A, B) ? '#fef9c3' : 'transparent'}">${i}:${m}</span>`).join('') || '(trống)'}<br>Offset consumer A = <b>${A}</b> (độ trễ ${log.length - A}); B = <b>${B}</b> (độ trễ ${log.length - B}). Đọc không xoá thông điệp; mỗi consumer có offset riêng.`; }
  host.querySelector('#p').onclick = () => { log.push('m' + log.length); draw(); };
  host.querySelector('#a').onclick = () => { if (A < log.length) A++; draw(); };
  host.querySelector('#b').onclick = () => { if (B < log.length) B++; draw(); };
  host.querySelector('#rb').onclick = () => { B = 0; draw(); }; draw();
};

// ---- Cửa sổ thời gian (DDIA ch11) ----
WIDGETS['window-sim'] = host => {
  host.innerHTML = `<div class="row"><label>Timestamp sự kiện (giây), phân cách bằng dấu phẩy <input id="e" type="text" value="3,18,25,61,64,125" style="width:100%"></label><label>Độ dài cửa sổ (giây) <input id="w" type="number" value="60" style="width:60px"></label><label>Bước nhảy hopping (giây) <input id="h" type="number" value="30" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const ev = host.querySelector('#e').value.split(',').map(parseFloat).filter(x => !isNaN(x)).sort((a, b) => a - b), w = Math.max(1, parseFloat(host.querySelector('#w').value) || 60), h = Math.max(1, parseFloat(host.querySelector('#h').value) || w);
    const tum = {}; ev.forEach(t => { const k = Math.floor(t / w) * w; (tum[k] = tum[k] || []).push(t); });
    const hop = {}; ev.forEach(t => { for (let s = Math.floor(t / h) * h; s > t - w; s -= h) { if (s < 0) break; (hop[s] = hop[s] || []).push(t); } });
    const fmt = d => Object.keys(d).map(Number).sort((a, b) => a - b).map(k => `[${k},${k + w}): ${d[k].length} sự kiện (${d[k].join(', ')})`).join('<br>');
    o.innerHTML = `<b>Tumbling ${w}s</b> (mỗi sự kiện đúng 1 cửa sổ):<br>${fmt(tum)}<br><br><b>Hopping ${w}s, bước ${h}s</b> (chồng lấn, sự kiện xuất hiện ở nhiều cửa sổ):<br>${fmt(hop)}`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Write path vs read path (DDIA ch12) ----
WIDGETS['write-read-path'] = host => {
  host.innerHTML = `<div class="row"><label>Chiến lược <select id="s"><option value="0">Không index (quét hết)</option><option value="1" selected>Index đảo</option><option value="2">Tính trước mọi truy vấn</option></select></label><label>Số tài liệu <input id="n" type="number" value="1000000" style="width:110px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const s = +host.querySelector('#s').value, n = Math.max(1, +host.querySelector('#n').value || 1);
    const d = [
      ['Ghi: không việc gì (O(1))', `Đọc: quét ${n.toLocaleString('vi-VN')} tài liệu (như grep)`, 'Ghi rẻ, đọc rất đắt.'],
      ['Ghi: cập nhật mục index của mọi từ trong tài liệu', 'Đọc: tra từng từ rồi AND/OR các danh sách', 'Cân bằng — lựa chọn phổ biến.'],
      ['Ghi: cập nhật kết quả cho mọi truy vấn có thể (vô hạn/luỹ thừa)', 'Đọc: tra thẳng một kết quả', 'Đọc rẻ nhất nhưng ghi bất khả thi; thực tế chỉ cache truy vấn phổ biến.']
    ][s];
    o.innerHTML = `<b>${d[0]}</b><br><b>${d[1]}</b><br>${d[2]}<br><i>Index, cache và materialized view chỉ là các điểm khác nhau trên trục dịch chuyển ranh giới write path / read path.</i>`;
  }
  host.querySelectorAll('select,input').forEach(i => i.oninput = draw); draw();
};

// ---- Retry idempotent (DDIA ch12) ----
WIDGETS['idempotent-retry'] = host => {
  host.innerHTML = `<div class="row"><label><input id="id" type="checkbox"> Dùng request ID + UNIQUE</label><label>Số tiền <input id="a" type="number" value="11" style="width:70px"></label><button id="send" type="button">Gửi yêu cầu</button><button id="retry" type="button">Mạng lỗi → người dùng gửi lại</button><button id="rs" type="button">Đặt lại</button></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o'); let bal = 100, seen = new Set(), log = [];
  function apply() {
    const amt = +host.querySelector('#a').value || 0, uid = host.querySelector('#id').checked;
    if (uid && seen.has('REQ-1')) { log.push('INSERT request_id=REQ-1 trùng ⇒ abort, không đổi số dư'); return; }
    if (uid) seen.add('REQ-1'); bal -= amt; log.push(`Trừ ${amt} ⇒ số dư ${bal}`);
  }
  function draw() { o.innerHTML = `Số dư người trả: <b>${bal}</b><br>${log.join('<br>') || '(chưa có yêu cầu)'}`; }
  host.querySelector('#send').onclick = () => { apply(); draw(); };
  host.querySelector('#retry').onclick = () => { log.push('(client không nhận được phản hồi, gửi lại)'); apply(); draw(); };
  host.querySelector('#rs').onclick = () => { bal = 100; seen = new Set(); log = []; draw(); }; draw();
};

// ---- Next.js widgets ----
WIDGETS['route-mapper'] = host => {
  host.innerHTML = `<div class="row"><label>Đường dẫn file <input id="p" type="text" value="app/(shop)/blog/[slug]/page.tsx" style="width:100%"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const p = host.querySelector('#p').value.trim().split(String.fromCharCode(92)).join('/'), parts = p.split('/');
    const file = parts.pop() || '', base = file.replace(/\.[^.]+$/, '');
    if (parts[0] !== 'app') { o.textContent = 'Đường dẫn phải bắt đầu bằng app/'; return; }
    const segs = parts.slice(1).filter(s => !/^\(.*\)$/.test(s) && !s.startsWith('@'));
    const priv = parts.some(s => s.startsWith('_'));
    const url = '/' + segs.join('/');
    let msg;
    if (priv) msg = 'Nằm trong private folder (_...) ⇒ không thành route.';
    else if (base === 'page') msg = `Route công khai: <b>${url}</b>`;
    else if (base === 'route') msg = `API endpoint: <b>${url}</b> (không được cùng cấp với page)`;
    else if (['layout', 'template', 'loading', 'error', 'not-found'].includes(base)) msg = `Giao diện bọc/hỗ trợ cho <b>${url}</b>, chưa tự tạo route công khai.`;
    else msg = 'File thường (colocation): không thành route.';
    const dyn = segs.filter(s => /^\[.*\]$/.test(s)).map(s => s.replace(/[\[\]\.]/g, ''));
    o.innerHTML = msg + (dyn.length && !priv ? `<br>Tham số động: ${dyn.join(', ')}` : '') + (parts.some(s => /^\(.*\)$/.test(s)) ? '<br>Route group bị bỏ khỏi URL.' : '');
  }
  host.querySelector('#p').oninput = draw; draw();
};

WIDGETS['nav-sim'] = host => {
  host.innerHTML = `<div class="row"><label>Loại route <select id="t"><option value="s">Tĩnh</option><option value="d">Động</option></select></label><label><input id="l" type="checkbox"> Có loading.tsx</label><label>Server render (ms) <input id="r" type="number" value="800" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const t = host.querySelector('#t').value, l = host.querySelector('#l').checked, r = +host.querySelector('#r').value || 0;
    let wait, why;
    if (t === 's') { wait = 0; why = 'Route tĩnh được prefetch toàn bộ ⇒ chuyển trang tức thì.'; }
    else if (l) { wait = 0; why = `Prefetch một phần: hiện skeleton ngay, nội dung (${r} ms) stream vào sau.`; }
    else { wait = r; why = `Không có loading.tsx: client phải chờ server ${r} ms rồi mới chuyển.`; }
    o.innerHTML = `Thời gian thấy phản hồi: <b>${wait} ms</b><br>${why}`;
  }
  host.querySelectorAll('select,input').forEach(i => i.oninput = draw); draw();
};

WIDGETS['rsc-picker'] = host => {
  const need = [['Dùng useState / sự kiện onClick', 1], ['Đọc DB hoặc API key bí mật', 0], ['Dùng window / localStorage', 1], ['Giảm JavaScript gửi cho trình duyệt', 0], ['Dùng useEffect', 1], ['Render nội dung tĩnh (bài viết)', 0]];
  host.innerHTML = need.map((n, i) => `<div class="row"><span>${n[0]}</span> <button data-i="${i}" data-v="0" type="button">Server</button> <button data-i="${i}" data-v="1" type="button">Client</button> <span id="r${i}"></span></div>`).join('');
  host.querySelectorAll('button').forEach(b => b.onclick = () => { const i = +b.dataset.i, ok = +b.dataset.v === need[i][1]; host.querySelector('#r' + i).textContent = ok ? '✅ Đúng' : '❌ Sai: nên dùng ' + (need[i][1] ? 'Client' : 'Server'); });
};

WIDGETS['fetch-waterfall'] = host => {
  host.innerHTML = `<div class="row"><label>Request A (ms) <input id="a" type="number" value="300" style="width:70px"></label><label>Request B (ms) <input id="b" type="number" value="500" style="width:70px"></label><label>Request C (ms) <input id="c" type="number" value="200" style="width:70px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const v = ['a', 'b', 'c'].map(k => +host.querySelector('#' + k).value || 0);
    const seq = v.reduce((x, y) => x + y, 0), par = Math.max(...v);
    o.innerHTML = `Tuần tự (await liên tiếp): <b>${seq} ms</b><br>Song song (Promise.all): <b>${par} ms</b><br>Tiết kiệm: <b>${seq - par} ms</b> (${seq ? Math.round((seq - par) / seq * 100) : 0}%)`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

WIDGETS['action-flow'] = host => {
  const steps = ['Người dùng submit form (<form action={createPost}>)', 'Next.js gửi POST tới server', 'Server Function chạy: kiểm tra auth, ghi dữ liệu', 'revalidatePath / revalidateTag (hoặc refresh)', 'redirect() nếu cần', 'Server trả UI mới + dữ liệu trong một vòng'];
  host.innerHTML = `<button id="n" type="button">Bước tiếp</button> <button id="r" type="button">Làm lại</button><ol id="o"></ol>`;
  let k = 0; const o = host.querySelector('#o');
  function draw() { o.innerHTML = steps.slice(0, k).map(s => `<li>${s}</li>`).join(''); }
  host.querySelector('#n').onclick = () => { if (k < steps.length) k++; draw(); };
  host.querySelector('#r').onclick = () => { k = 0; draw(); }; draw();
};

WIDGETS['cachelife-table'] = host => {
  const P = { default: ['5 phút', '15 phút', 'không bao giờ'], seconds: ['30 giây', '1 giây', '60 giây'], minutes: ['5 phút', '1 phút', '1 giờ'], hours: ['5 phút', '1 giờ', '1 ngày'], days: ['5 phút', '1 ngày', '1 tuần'], weeks: ['5 phút', '1 tuần', '30 ngày'], max: ['5 phút', '30 ngày', '1 năm'] };
  host.innerHTML = `<label>Profile <select id="s">${Object.keys(P).map(k => `<option>${k}</option>`).join('')}</select></label><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const k = host.querySelector('#s').value, p = P[k];
    o.innerHTML = `<b>stale</b> (trình duyệt coi là tươi): ${p[0]}<br><b>revalidate</b> (sau đó server làm mới): ${p[1]}<br><b>expire</b> (hết hạn hẳn): ${p[2]}<br>` + (k === 'seconds' ? '⚠️ Ngắn hạn ⇒ bị loại khỏi prerender (dynamic hole).' : 'Có thể vào static shell.');
  }
  host.querySelector('#s').onchange = draw; draw();
};

WIDGETS['proxy-matcher'] = host => {
  host.innerHTML = `<div class="row"><label>matcher <input id="m" type="text" value="/about/:path*" style="width:160px"></label><label>URL <input id="u" type="text" value="/about/team" style="width:160px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const m = host.querySelector('#m').value.trim(), u = host.querySelector('#u').value.trim();
    let re;
    try { re = new RegExp('^' + m.replace(/\/:([a-z]+)\*/gi, '(?:/.*)?').replace(/:([a-z]+)/gi, '[^/]+') + '$'); } catch (e) { o.textContent = 'matcher không hợp lệ'; return; }
    o.innerHTML = re.test(u) ? '✅ Proxy <b>chạy</b> cho URL này.' : '⛔ Proxy <b>không chạy</b> cho URL này.';
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Next.js widgets (Guides / Architecture) ----
WIDGETS['suspense-timeline'] = host => {
  host.innerHTML = `<div class="row"><label>Revenue (ms) <input id="a" type="number" value="200" style="width:70px"></label><label>Orders (ms) <input id="b" type="number" value="1000" style="width:70px"></label><label>Recommendations (ms) <input id="c" type="number" value="3000" style="width:70px"></label><label>Shell (ms) <input id="s" type="number" value="50" style="width:60px"></label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const v = ['a', 'b', 'c'].map(k => +host.querySelector('#' + k).value || 0), s = +host.querySelector('#s').value || 0;
    const names = ['Revenue', 'Orders', 'Recommendations'];
    const blocked = s + Math.max(...v);
    o.innerHTML = `<b>Có Suspense riêng từng phần</b>:<br>• Static shell hiện ở ${s} ms<br>` + v.map((x, i) => `• ${names[i]} hiện ở ${s + x} ms`).join('<br>') + `<br><br><b>Không Suspense (chờ hết)</b>: mọi thứ hiện ở ${blocked} ms.`;
  }
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

WIDGETS['auth-layers'] = host => {
  const cases = [
    ['Ẩn nút “Xoá” cho người không phải admin', 'Optimistic (cookie) — chỉ là UX, chưa bảo vệ dữ liệu'],
    ['Chặn /dashboard khi chưa đăng nhập, không gọi DB', 'Proxy — kiểm tra lạc quan chỉ đọc cookie'],
    ['Xoá bài viết qua Server Action', 'Kiểm tra bên trong action: auth + quyền sở hữu (chống IDOR)'],
    ['Route Handler cho admin khi thiếu quyền', 'Trả 403 (401 nếu chưa đăng nhập) sau verifySession()'],
    ['Trả dữ liệu hồ sơ cho UI', 'DAL + DTO: chỉ trường được phép nhìn thấy']
  ];
  host.innerHTML = `<select id="s">${cases.map((c, i) => `<option value="${i}">${c[0]}</option>`).join('')}</select><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() { o.innerHTML = '<b>Lớp phù hợp:</b> ' + cases[+host.querySelector('#s').value][1]; }
  host.querySelector('#s').onchange = draw; draw();
};

WIDGETS['env-resolver'] = host => {
  host.innerHTML = `<div class="row"><label>NODE_ENV <select id="n"><option>development</option><option>production</option><option>test</option></select></label></div><div class="row"><label><input type="checkbox" id="p"> process.env</label><label><input type="checkbox" id="a" checked> .env.$(NODE_ENV).local</label><label><input type="checkbox" id="l" checked> .env.local</label><label><input type="checkbox" id="e" checked> .env.$(NODE_ENV)</label><label><input type="checkbox" id="d" checked> .env</label></div><div class="calc" id="o"></div>`;
  const o = host.querySelector('#o');
  function draw() {
    const n = host.querySelector('#n').value;
    const order = [['p', 'process.env'], ['a', '.env.' + n + '.local'], ['l', '.env.local'], ['e', '.env.' + n], ['d', '.env']];
    const rows = order.map(([k, label]) => {
      const has = host.querySelector('#' + k).checked;
      const skipped = k === 'l' && n === 'test';
      return `${has && !skipped ? '' : '<s>'}${label}${skipped ? ' (bỏ qua khi test)' : ''}${has && !skipped ? '' : '</s>'}`;
    });
    const win = order.find(([k]) => host.querySelector('#' + k).checked && !(k === 'l' && n === 'test'));
    o.innerHTML = 'Thứ tự tra cứu:<br>' + rows.map((r, i) => (i + 1) + '. ' + r).join('<br>') + `<br><b>Giá trị được lấy từ:</b> ${win ? win[1] : '(không có nguồn nào)'}`;
  }
  host.querySelectorAll('input,select').forEach(i => i.onchange = draw); draw();
};

WIDGETS['prod-checklist'] = host => {
  const items = ['next build chạy sạch lỗi', 'Đã đo bằng next start', 'Có global-error và not-found tuỳ chỉnh', 'Server Action kiểm tra auth bên trong', '.env* nằm trong .gitignore', 'Chỉ biến công khai dùng NEXT_PUBLIC_', 'Có metadata, sitemap, robots', 'Đã chạy Lighthouse và phân tích bundle'];
  host.innerHTML = items.map((t, i) => `<label style="display:block"><input type="checkbox" data-i="${i}"> ${t}</label>`).join('') + '<div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  function draw() { const n = host.querySelectorAll('input:checked').length; o.textContent = `Hoàn thành ${n}/${items.length}` + (n === items.length ? ' — sẵn sàng!' : ''); }
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};

WIDGETS['fast-refresh-quiz'] = host => {
  const cs = [['Function component với useState, chỉ export component', true], ['Class component', false], ['export default () => <div/> (arrow ẩn danh)', false], ['File export thêm một hằng số cùng component', false], ['Sửa nội dung JSX của function component có tên', true]];
  host.innerHTML = cs.map((c, i) => `<div class="row"><span>${c[0].replace(/</g, '&lt;')}</span> <button data-i="${i}" data-v="1" type="button">Giữ state</button> <button data-i="${i}" data-v="0" type="button">Mất state</button> <span id="r${i}"></span></div>`).join('');
  host.querySelectorAll('button').forEach(b => b.onclick = () => { const i = +b.dataset.i, ok = (b.dataset.v === '1') === cs[i][1]; host.querySelector('#r' + i).textContent = ok ? '✅ Đúng' : '❌ Sai'; });
};

// ---- Android architecture widgets ----
function quizBtns(host, cases) {
  host.innerHTML = cases.map((c, i) => `<div class="row"><span>${c[0]}</span> ${c[2].map((o, j) => `<button data-i="${i}" data-j="${j}" type="button">${o}</button>`).join(' ')} <span id="r${i}"></span></div>`).join('');
  host.querySelectorAll('button').forEach(b => b.onclick = () => { const i = +b.dataset.i, j = +b.dataset.j; host.querySelector('#r' + i).textContent = j === cases[i][1] ? '✅ Đúng' : '❌ Sai: ' + cases[i][2][cases[i][1]]; });
}
WIDGETS['aosp-stack'] = host => quizBtns(host, [
  ['Biên dịch bytecode của app thành lệnh CPU', 4, ['Kernel', 'HAL', 'Framework', 'System services', 'ART']],
  ['Giao diện chuẩn do vendor phần cứng cài đặt', 1, ['Kernel', 'HAL', 'Framework', 'System services', 'ART']],
  ['system_server, SurfaceFlinger, MediaService', 3, ['Kernel', 'HAL', 'Framework', 'System services', 'ART']],
  ['Quản lý giao tiếp trực tiếp với phần cứng', 0, ['Kernel', 'HAL', 'Framework', 'System services', 'ART']]
]);
WIDGETS['hal-type-picker'] = host => quizBtns(host, [
  ['Viết HAL mới cho Android hiện đại', 0, ['AIDL', 'HIDL', 'Passthrough']],
  ['Server là thư viện được client dlopen, cùng tiến trình', 2, ['AIDL', 'HIDL binderized', 'Passthrough']],
  ['HAL chạy tiến trình riêng, đăng ký với service manager', 1, ['Same Process HAL', 'Binderized HAL', 'Wrapped HAL']],
  ['Vulkan, OpenGL driver nạp vào tiến trình framework', 0, ['Same Process HAL', 'Binderized HAL', 'Wrapped HAL']]
]);
WIDGETS['gki-split'] = host => quizBtns(host, [
  ['Trình quản lý bộ nhớ, scheduler (độc lập phần cứng)', 0, ['Lõi GKI', 'Vendor module']],
  ['Driver GPU riêng của một SoC', 1, ['Lõi GKI', 'Vendor module']],
  ['Driver màn hình riêng của một board', 1, ['Lõi GKI', 'Vendor module']],
  ['Hệ thống file và networking stack chung', 0, ['Lõi GKI', 'Vendor module']]
]);
WIDGETS['config-picker'] = host => quizBtns(host, [
  ['Giá trị đọc từ phần cứng (ví dụ khả năng của một cảm biến)', 1, ['System property', 'HAL method', 'XML', 'RRO']],
  ['Dữ liệu tĩnh phức tạp với schema ổn định', 2, ['System property', 'HAL method', 'XML + xsd_config', 'RRO']],
  ['Đổi giá trị tài nguyên của app lúc chạy', 3, ['System property', 'HAL method', 'XML', 'RRO']],
  ['Chọn biến thể phần cứng trước khi service khởi động', 0, ['init_dev_config', 'HAL method', 'XML', 'RRO']]
]);
WIDGETS['dto-flow'] = host => {
  const steps = ['Viết DTS (device tree source)', 'Biên dịch bằng dtc → DTB / DTBO', 'Flash vào nơi bootloader truy cập được (nối vào kernel hoặc partition DTB)', 'Bootloader nạp DTB vào bộ nhớ và áp DTBO overlay lên cây chung', 'Bootloader truyền địa chỉ device tree cho kernel và khởi động'];
  host.innerHTML = '<button id="n" type="button">Bước tiếp</button> <button id="r" type="button">Làm lại</button><ol id="o"></ol>';
  let k = 0; const o = host.querySelector('#o');
  const draw = () => { o.innerHTML = steps.slice(0, k).map(s => '<li>' + s + '</li>').join(''); };
  host.querySelector('#n').onclick = () => { if (k < steps.length) k++; draw(); };
  host.querySelector('#r').onclick = () => { k = 0; draw(); };
};
WIDGETS['vndk-classify'] = host => quizBtns(host, [
  ['libc.so, liblog.so, libvulkan.so', 0, ['LL-NDK', 'Eligible VNDK', 'FWK-ONLY']],
  ['Thư viện nội bộ framework, vendor không được dùng', 2, ['LL-NDK', 'Eligible VNDK', 'FWK-ONLY']],
  ['Có thể nạp an toàn hai lần (framework + vendor)', 1, ['LL-NDK', 'Eligible VNDK', 'FWK-ONLY']]
]);
WIDGETS['vintf-match'] = host => {
  host.innerHTML = '<div class="row"><label>Target FCM của device manifest <input id="t" type="number" value="8" style="width:60px"></label><label>FCM tối thiểu framework đòi hỏi <input id="m" type="number" value="7" style="width:60px"></label><label>HAL version device cung cấp <input id="h" type="number" value="2" style="width:60px"></label><label>HAL version framework đòi hỏi tối thiểu <input id="q" type="number" value="1" style="width:60px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const v = id => +host.querySelector('#' + id).value;
  const draw = () => { const ok = v('t') >= v('m') && v('h') >= v('q'); o.innerHTML = ok ? '✅ Manifest <b>khớp</b> matrix: OTA framework được chấp nhận.' : '⛔ <b>Không khớp</b>: ' + (v('t') < v('m') ? 'Target FCM thấp hơn mức framework đòi hỏi. ' : '') + (v('h') < v('q') ? 'HAL version device cung cấp thấp hơn mức đòi hỏi.' : ''); };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['binder-deadlock'] = host => quizBtns(host, [
  ['Giữ mutex rồi gọi binder đồng bộ sang tiến trình khác', 1, ['An toàn', 'Nguy cơ deadlock']],
  ['Copy dữ liệu ra ngoài khoá, thả khoá, rồi mới gọi binder', 0, ['An toàn', 'Nguy cơ deadlock']],
  ['Giữ khoá khi gọi oneway', 1, ['An toàn', 'Nguy cơ deadlock (có thể đổi thành đồng bộ sau)']]
]);
WIDGETS['aidl-compat'] = host => quizBtns(host, [
  ['Thêm method vào cuối interface', 0, ['Tương thích', 'Không tương thích']],
  ['Xoá một method đã freeze', 1, ['Tương thích', 'Không tương thích']],
  ['Thêm trường vào cuối parcelable kèm giá trị mặc định', 0, ['Tương thích', 'Không tương thích']],
  ['Đổi kiểu của một trường parcelable đã freeze', 1, ['Tương thích', 'Không tương thích']],
  ['Thêm enumerator mới (Android 11+)', 0, ['Tương thích', 'Không tương thích']]
]);
WIDGETS['bootimg-version'] = host => {
  host.innerHTML = '<label>Android ra mắt <select id="a"><option value="9">9</option><option value="10">10</option><option value="11">11</option><option value="12">12</option><option value="13">13</option></select></label><div class="calc" id="o"></div>';
  const M = { 9: 'Header ≥ v1 (VTS kiểm tra)', 10: 'Header v2', 11: 'Header v3 cho boot image GKI chính', 12: 'Header v3 hoặc v4 (GKI: v4 là chính)', 13: 'Header v3 hoặc v4 (GKI: v4 chính, os_version phải bằng 0, phiên bản lấy từ AVB properties)' };
  const o = host.querySelector('#o');
  const draw = () => { o.textContent = M[host.querySelector('#a').value]; };
  host.querySelector('#a').onchange = draw; draw();
};
WIDGETS['partition-quiz'] = host => quizBtns(host, [
  ['Generic ramdisk (Android 13+)', 0, ['init_boot', 'vendor_boot', 'system_ext', 'odm']],
  ['Module kernel GKI', 2, ['init_boot', 'vendor_boot', 'system_dlkm', 'odm']],
  ['Dữ liệu Verified Boot cho mọi partition', 1, ['userdata', 'vbmeta', 'metadata', 'misc']],
  ['Khoá mã hoá metadata', 2, ['userdata', 'vbmeta', 'metadata', 'misc']]
]);
WIDGETS['page-waste'] = host => {
  host.innerHTML = '<div class="row"><label>Kích thước yêu cầu (KB) <input id="s" type="number" value="5" style="width:70px"></label><label>Số vùng <input id="n" type="number" value="2" style="width:60px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => {
    const s = +host.querySelector('#s').value || 0, n = +host.querySelector('#n').value || 1;
    const t = p => Math.ceil(s / p) * p * n;
    o.innerHTML = `Trang 4 KB: <b>${t(4)} KB</b><br>Trang 16 KB: <b>${t(16)} KB</b><br>Lãng phí thêm: ${t(16) - t(4)} KB.` + (n > 1 ? `<br>Gộp thành một vùng ${s * n} KB: 4 KB → ${Math.ceil(s * n / 4) * 4} KB, 16 KB → ${Math.ceil(s * n / 16) * 16} KB.` : '');
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Android connectivity widgets ----
WIDGETS['ble-role'] = host => quizBtns(host, [
  ['Thiết bị phát advertisement', 0, ['Peripheral', 'Central']],
  ['Thiết bị quét tìm advertisement', 1, ['Peripheral', 'Central']],
  ['Thiết bị gửi thông tin trong GATT', 0, ['GATT server', 'GATT client']],
  ['Thiết bị Bluetooth 4.1 trở xuống chỉ hỗ trợ', 1, ['Peripheral', 'Central']]
]);
WIDGETS['asha-latency'] = host => {
  host.innerHTML = '<label>Connection interval (ms) <input id="i" type="number" value="20" style="width:70px"></label><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const i = +host.querySelector('#i').value || 0; o.innerHTML = `Bộ đệm 8 frame ⇒ trễ mạng ≈ <b>${8 * i} ms</b>. Frame G.722 16 kHz: ${16 * i} mẫu. Interval ngắn hơn ⇒ trễ thấp hơn.`; };
  host.querySelector('#i').oninput = draw; draw();
};
WIDGETS['secure-nfc'] = host => {
  host.innerHTML = '<div class="row"><label><input type="checkbox" id="e"> Secure NFC bật</label><label><input type="checkbox" id="u"> Màn hình đã mở khoá</label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const e = host.querySelector('#e').checked, u = host.querySelector('#u').checked; o.innerHTML = (!e || u) ? '✅ Off-host card emulation <b>được phép</b>.' : '⛔ Off-host emulation <b>bị chặn</b> (hiện “Unlock to use NFC”).'; };
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};
WIDGETS['ims-binding'] = host => {
  host.innerHTML = '<div class="row"><label><input type="checkbox" id="s" checked> Có SIM</label><label><input type="checkbox" id="c" checked> Có carrier override khớp SIM</label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const s = host.querySelector('#s').checked, c = host.querySelector('#c').checked; o.innerHTML = (s && c) ? 'Bind <b>carrier override ImsService</b> (kiểm tra trước).' : 'Bind <b>device default ImsService</b> (phải hỗ trợ Emergency MMTel).'; };
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};
WIDGETS['emergency-number'] = host => {
  host.innerHTML = '<label>Số <input id="n" type="text" value="112" style="width:90px"></label> <label><input type="checkbox" id="s"> Không có SIM</label><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => {
    const n = host.querySelector('#n').value.trim(), noSim = host.querySelector('#s').checked;
    const always = ['112', '911'], extra = ['000', '08', '110', '999', '118', '119'];
    o.textContent = always.includes(n) ? 'Luôn là số khẩn cấp mặc định (3GPP).' : (noSim && extra.includes(n)) ? 'Là số khẩn cấp mặc định khi không có SIM.' : 'Không nằm trong danh sách mặc định (có thể đến từ SIM/mạng/modem/database).';
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['carrier-config-priority'] = host => {
  host.innerHTML = '<div class="row"><label><input type="checkbox" id="a"> Carrier app có giá trị</label><label><input type="checkbox" id="p" checked> Platform CarrierConfig app có giá trị</label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const a = host.querySelector('#a').checked, p = host.querySelector('#p').checked; o.innerHTML = 'Giá trị được lấy từ: <b>' + (a ? 'carrier app' : p ? 'platform CarrierConfig app' : 'mặc định cứng của framework') + '</b>.'; };
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};
WIDGETS['esim-flow'] = host => quizBtns(host, [
  ['LPA bind ICarrierEuiccProvisioningService để xin activation code', 0, ['Activation code qua AIDL', 'Carrier UI từ LPA']],
  ['LPA mở màn hình kích hoạt của nhà mạng và nhận result code', 1, ['Activation code qua AIDL', 'Carrier UI từ LPA']],
  ['LPA nhận activation code trực tiếp từ result intent', 1, ['Được phép', 'Không bao giờ được phép']]
]);
WIDGETS['time-priority'] = host => {
  host.innerHTML = '<div class="row"><label>Android <select id="v"><option value="11">11 trở xuống</option><option value="12" selected>12+</option></select></label><label><input type="checkbox" id="n" checked> Có NTP hợp lệ</label><label><input type="checkbox" id="t" checked> Có NITZ hợp lệ</label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => {
    const v = +host.querySelector('#v').value, n = host.querySelector('#n').checked, t = host.querySelector('#t').checked;
    const order = v >= 12 ? ['NTP (network)', 'NITZ (telephony)'] : ['NITZ (telephony)', 'NTP (network)'];
    const ok = { 'NTP (network)': n, 'NITZ (telephony)': t };
    const pick = order.find(x => ok[x]);
    o.innerHTML = `Thứ tự: ${order.join(' → ')}<br>Được chọn: <b>${pick || 'không có (uncertain, giữ nguyên đồng hồ)'}</b>`;
  };
  host.querySelectorAll('input,select').forEach(i => i.onchange = draw); draw();
};
WIDGETS['uwb-country'] = host => {
  const srcs = ['Override bằng adb', 'Mã telephony hiện tại', 'Mã Wi-Fi (802.11ad)', 'Mã telephony biết gần nhất', 'Vị trí fused', 'Mặc định OEM'];
  host.innerHTML = srcs.map((s, i) => `<label style="display:block"><input type="checkbox" data-i="${i}"> ${s}</label>`).join('') + '<div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const c = [...host.querySelectorAll('input')].map(x => x.checked), i = c.indexOf(true); o.innerHTML = i < 0 ? 'Không nguồn nào ⇒ gửi mã <b>00</b>, stack <b>DISABLED</b>.' : `Dùng nguồn: <b>${srcs[i]}</b> ⇒ stack READY (nếu quy định cho phép UWB).`; };
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};
WIDGETS['wifi-hal-version'] = host => quizBtns(host, [
  ['Vendor HAL trên Android 14+', 1, ['HIDL', 'AIDL']],
  ['Vendor HAL trên Android 13 trở xuống', 0, ['HIDL', 'AIDL']],
  ['Supplicant HAL từ Android 13', 1, ['HIDL', 'AIDL']],
  ['Vendor HAL cho Wi-Fi Aware / RTT', 0, ['Bắt buộc', 'Tuỳ chọn']]
]);
WIDGETS['wifi-score'] = host => {
  const nets = [['Saved, unmetered', 3], ['Suggested, unmetered', 2], ['Saved, metered', 1], ['Suggested, metered', 0]];
  host.innerHTML = nets.map((n, i) => `<label style="display:block"><input type="checkbox" data-i="${i}" checked> ${n[0]} khả dụng</label>`).join('') + '<div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const av = nets.filter((_, i) => host.querySelector(`input[data-i="${i}"]`).checked).sort((a, b) => b[1] - a[1]); o.innerHTML = av.length ? `Theo thứ tự mặc định, mạng được chọn: <b>${av[0][0]}</b> (nếu tín hiệu tương đương; lựa chọn gần đây của người dùng có thể vượt).` : 'Không có mạng khả dụng.'; };
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};
WIDGETS['companion-profile'] = host => quizBtns(host, [
  ['Cấp phát eSIM', 0, ['Chỉ Watch', 'Chỉ Glasses', 'Cả hai']],
  ['Quyền micro', 1, ['Chỉ Watch', 'Chỉ Glasses', 'Cả hai']],
  ['Lịch (calendar)', 0, ['Chỉ Watch', 'Chỉ Glasses', 'Cả hai']],
  ['Thông báo và danh bạ', 2, ['Chỉ Watch', 'Chỉ Glasses', 'Cả hai']]
]);

// ---- Android input & interaction widgets ----
WIDGETS['input-pipeline'] = host => quizBtns(host, [
  ['Đọc sự kiện thô từ evdev của từng thiết bị', 0, ['EventHub', 'InputReader', 'InputDispatcher']],
  ['Giải mã sự kiện thô theo lớp thiết bị, áp key layout/character map', 1, ['EventHub', 'InputReader', 'InputDispatcher']],
  ['Chuyển sự kiện tới cửa sổ phù hợp', 2, ['EventHub', 'InputReader', 'InputDispatcher']]
]);
WIDGETS['touch-classify'] = host => quizBtns(host, [
  ['Báo trục X/Y multi-touch tuyệt đối, không có nút gamepad', 0, ['Multi-touch', 'Single-touch', 'Touch pad']],
  ['Báo trục X/Y tuyệt đối chuẩn + touch key', 1, ['Multi-touch', 'Single-touch', 'Touch pad']],
  ['Thiết bị cảm ứng có trục X/Y tương đối', 2, ['Multi-touch', 'Single-touch', 'Touch pad']]
]);
WIDGETS['haptic-primitive'] = host => quizBtns(host, [
  ['Cảm giác nhấp ngắn ~12 ms gần tần số cộng hưởng', 0, ['CLICK', 'TICK', 'THUD', 'SPIN']],
  ['Xung rất ngắn ~5 ms, nhẹ hơn click', 1, ['CLICK', 'TICK', 'THUD', 'SPIN']],
  ['Cảm giác trầm nặng ~300 ms, tần số thấp', 2, ['CLICK', 'TICK', 'THUD', 'SPIN']],
  ['Cảm giác xoay không đều, quét tần số rồi quay lại', 3, ['CLICK', 'TICK', 'THUD', 'SPIN']]
]);
WIDGETS['nn-device'] = host => quizBtns(host, [
  ['Bộ xử lý thần kinh chuyên dụng (NPU)', 2, ['CPU', 'GPU', 'ACCELERATOR', 'OTHER']],
  ['Driver dị thể quản lý nhiều thiết bị khác loại', 3, ['CPU', 'GPU', 'ACCELERATOR', 'OTHER']],
  ['Chạy được model NNAPI và tăng tốc OpenGL ES/Vulkan', 1, ['CPU', 'GPU', 'ACCELERATOR', 'OTHER']]
]);
WIDGETS['nn-errors'] = host => quizBtns(host, [
  ['Driver đang bận, thử lại sau có thể được', 0, ['TRANSIENT', 'PERSISTENT']],
  ['Model quá lớn cho tài nguyên driver', 1, ['TRANSIENT', 'PERSISTENT']],
  ['Không thể kịp deadline ngay cả trong điều kiện lý tưởng', 1, ['TRANSIENT', 'PERSISTENT']]
]);
WIDGETS['headset-behavior'] = host => quizBtns(host, [
  ['Người dùng rút tai nghe khi đang phát nhạc', 0, ['App nên pause', 'Tự tăng volume']],
  ['Cắm lại tai nghe sau khi pause', 1, ['Tự phát tiếp', 'Chờ người dùng nhấn play']],
  ['Cuộc gọi đang diễn ra khi cắm headset', 0, ['Chuyển sang headset, micro không tắt', 'Bị ngắt']]
]);
WIDGETS['sensor-units'] = host => quizBtns(host, [
  ['Tốc độ quay (rad/s)', 1, ['Accelerometer', 'Gyroscope', 'Magnetometer', 'Barometer']],
  ['Từ trường (µT)', 2, ['Accelerometer', 'Gyroscope', 'Magnetometer', 'Barometer']],
  ['Áp suất khí quyển (hPa)', 3, ['Accelerometer', 'Gyroscope', 'Magnetometer', 'Barometer']],
  ['Gia tốc có cả trọng lực (m/s²)', 0, ['Accelerometer', 'Gyroscope', 'Magnetometer', 'Barometer']]
]);
WIDGETS['sensor-mode'] = host => quizBtns(host, [
  ['Accelerometer', 0, ['Continuous', 'On-change', 'One-shot']],
  ['Step counter', 1, ['Continuous', 'On-change', 'One-shot']],
  ['Significant motion', 2, ['Continuous', 'On-change', 'One-shot']],
  ['Proximity', 1, ['Continuous', 'On-change', 'One-shot']]
]);
WIDGETS['sensor-batch'] = host => {
  host.innerHTML = '<div class="row"><label>Tần số (Hz) <input id="f" type="number" value="240" style="width:70px"></label><label>Số sự kiện mỗi lô <input id="n" type="number" value="10" style="width:60px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const f = +host.querySelector('#f').value || 0, n = Math.max(1, +host.querySelector('#n').value || 1); o.innerHTML = `Không batching: <b>${f}</b> ngắt/giây. Batching ${n} sự kiện: <b>${(f / n).toFixed(1)}</b> ngắt/giây (giảm ${Math.round((1 - 1 / n) * 100)}%).`; };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['chre-event'] = host => quizBtns(host, [
  ['Được gọi khi nanoapp bắt đầu', 0, ['nanoappStart()', 'nanoappHandleEvent()', 'nanoappEnd()']],
  ['Nhận sự kiện (timer, cảm biến, thông điệp)', 1, ['nanoappStart()', 'nanoappHandleEvent()', 'nanoappEnd()']],
  ['Được gọi khi nanoapp kết thúc', 2, ['nanoappStart()', 'nanoappHandleEvent()', 'nanoappEnd()']]
]);

// ---- Android audio widgets ----
WIDGETS['audio-layers'] = host => quizBtns(host, [
  ['AudioFlinger', 2, ['App framework', 'Native framework', 'Media server', 'Kernel driver']],
  ['Lớp native tương ứng android.media (libmedia)', 1, ['App framework', 'Native framework', 'Media server', 'Kernel driver']],
  ['ALSA', 3, ['App framework', 'Native framework', 'Media server', 'Kernel driver']],
  ['Gói android.media', 0, ['App framework', 'Native framework', 'Media server', 'Kernel driver']]
]);
WIDGETS['audio-hal-map'] = host => quizBtns(host, [
  ['IDevice (HIDL)', 0, ['IModule', 'IConfig', 'IFactory']],
  ['IEffectsFactory (HIDL)', 2, ['IModule', 'IConfig', 'IFactory']],
  ['Cấu hình hệ thống trước nằm trong XML', 1, ['IModule', 'IConfig', 'IFactory']]
]);
WIDGETS['audio-q'] = host => {
  host.innerHTML = '<label>Số bit <input id="b" type="number" value="16" style="width:70px"></label><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const b = +host.querySelector('#b').value || 0; o.innerHTML = `Dải động lý thuyết ≈ <b>${(6.02 * b).toFixed(0)} dB</b> (6,02 dB mỗi bit). Số mức lượng tử: ${Math.pow(2, Math.min(b, 52)).toLocaleString('en-US')}.`; };
  host.querySelector('#b').oninput = draw; draw();
};
WIDGETS['audio-usage'] = host => quizBtns(host, [
  ['Báo thức đồng hồ', 1, ['USAGE_MEDIA', 'USAGE_ALARM', 'USAGE_NOTIFICATION']],
  ['Phát nhạc / video', 0, ['USAGE_MEDIA', 'USAGE_ALARM', 'USAGE_NOTIFICATION']],
  ['Âm thông báo tin nhắn', 2, ['USAGE_MEDIA', 'USAGE_ALARM', 'USAGE_NOTIFICATION']]
]);
WIDGETS['audio-latency-calc'] = host => {
  host.innerHTML = '<div class="row"><label>Kích thước buffer (frame) <input id="f" type="number" value="192" style="width:80px"></label><label>Số buffer <input id="n" type="number" value="2" style="width:60px"></label><label>Sample rate (Hz) <input id="r" type="number" value="48000" style="width:80px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const f = +host.querySelector('#f').value || 0, n = +host.querySelector('#n').value || 0, r = +host.querySelector('#r').value || 1; o.innerHTML = `Mỗi buffer ≈ <b>${(f / r * 1000).toFixed(2)} ms</b>; tổng trễ do buffer ≈ <b>${(f * n / r * 1000).toFixed(2)} ms</b> (chưa tính trễ DSP/ứng dụng).`; };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['mmap-policy'] = host => quizBtns(host, [
  ['Chỉ dùng đường AudioFlinger cũ', 0, ['1 (NEVER)', '2 (AUTO)', '3 (ALWAYS)']],
  ['Thử MMAP rồi fallback đường cũ', 1, ['1 (NEVER)', '2 (AUTO)', '3 (ALWAYS)']],
  ['Chỉ MMAP, không fallback', 2, ['1 (NEVER)', '2 (AUTO)', '3 (ALWAYS)']]
]);
WIDGETS['resampler-pick'] = host => quizBtns(host, [
  ['Phát nhạc chất lượng cao', 1, ['Linear / Cubic', 'Sinc']],
  ['Tiếng bấm phím (ít đòi hỏi)', 0, ['Linear / Cubic', 'Sinc']]
]);
WIDGETS['midi-transport'] = host => quizBtns(host, [
  ['Cần CONFIG_SND_RAWMIDI và CONFIG_SND_USB_MIDI', 0, ['USB host', 'BLE', 'Virtual']],
  ['Luôn bật trên thiết bị hỗ trợ BLE', 1, ['USB host', 'BLE', 'Virtual']],
  ['Giao tiếp liên ứng dụng, luôn bật', 2, ['USB host', 'BLE', 'Virtual']]
]);
WIDGETS['usb-audio-limits'] = host => {
  host.innerHTML = '<div class="row"><label>Bit depth <select id="b"><option>8</option><option selected>16</option><option>24</option><option>32</option></select></label><label>Kênh <select id="c"><option>1</option><option selected>2</option><option>6</option></select></label><label>Sample rate (Hz) <input id="r" type="number" value="48000" style="width:80px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const rates = [48000, 44100, 32000, 24000, 22050, 16000, 12000, 11025, 8000];
  const draw = () => { const b = +host.querySelector('#b').value, c = +host.querySelector('#c').value, r = +host.querySelector('#r').value; const bad = []; if (![16, 24, 32].includes(b)) bad.push('bit depth'); if (c > 2) bad.push('số kênh (chỉ mono/stereo)'); if (!rates.includes(r)) bad.push('sample rate'); o.innerHTML = bad.length ? '⛔ Không nằm trong tập hỗ trợ ở host mode: ' + bad.join(', ') : '✅ Hợp lệ với USB audio host mode (Android 5.0+).'; };
  host.querySelectorAll('input,select').forEach(i => i.oninput = draw); draw();
};
WIDGETS['soundtrigger-flow'] = host => quizBtns(host, [
  ['Trả về handle của model', 0, ['loadSoundModel()', 'startRecognition()', 'unloadModel()']],
  ['Bắt đầu nghe hotword', 1, ['loadSoundModel()', 'startRecognition()', 'unloadModel()']],
  ['Giải phóng model không hoạt động', 2, ['loadSoundModel()', 'startRecognition()', 'unloadModel()']]
]);
WIDGETS['spatial-latency'] = host => {
  host.innerHTML = '<div class="row"><label>Trễ cảm biến (ms) <input id="a" type="number" value="30" style="width:60px"></label><label>Xử lý (ms) <input id="b" type="number" value="40" style="width:60px"></label><label>Truyền tai nghe (ms) <input id="c" type="number" value="60" style="width:60px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const t = ['a', 'b', 'c'].reduce((s, k) => s + (+host.querySelector('#' + k).value || 0), 0); o.innerHTML = `Tổng độ trễ vòng ≈ <b>${t} ms</b> — ${t < 150 ? '✅ dưới' : '⛔ vượt'} khuyến nghị 150 ms.`; };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['sound-dose-calc'] = host => {
  host.innerHTML = '<div class="row"><label>Mức MEL trung bình (dBA) <input id="m" type="number" value="85" style="width:70px"></label><label>Giờ nghe mỗi ngày <input id="h" type="number" value="2" style="width:60px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => {
    const m = +host.querySelector('#m').value || 0, h = +host.querySelector('#h').value || 0;
    const allowed = 40 * Math.pow(2, (80 - m) / 3);
    const weekly = h * 7, pct = weekly / allowed * 100;
    o.innerHTML = `Mô hình đơn giản (ngưỡng 40 giờ/tuần ở 80 dBA, mỗi +3 dB giảm một nửa thời gian cho phép): cho phép ≈ <b>${allowed.toFixed(1)} giờ/tuần</b> ở ${m} dBA; bạn nghe ${weekly} giờ ⇒ CSD ≈ <b>${pct.toFixed(0)}%</b>${pct >= 100 ? ' ⇒ hệ thống cảnh báo ở mốc 100%.' : '.'}<br><i>Chỉ minh hoạ khái niệm; công thức chuẩn theo IEC 62368-1/EN 50332-3.</i>`;
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ---- Tủ lạnh nén (EPI): widget ----
const RF_NS = 'http://www.w3.org/2000/svg';
function rfEl(tag, attrs, parent, text) {
  const e = document.createElementNS(RF_NS, tag);
  for (const k in (attrs || {})) e.setAttribute(k, attrs[k]);
  if (text !== undefined) e.textContent = text;
  if (parent) parent.appendChild(e);
  return e;
}

// ===== Chu trình làm lạnh (chi tiết, hoạt hình) =====
WIDGETS['rf-cycle'] = host => {
  host.innerHTML = '<div class="row"><button id="nx" type="button">Bước tiếp</button> <button id="au" type="button">▶ Chạy tự động</button> <label><input type="checkbox" id="oil"> Làm mát dầu (2 dàn ngưng)</label> <label><input type="checkbox" id="hx"> Mao dẫn tiếp xúc ống hút</label></div><svg viewBox="0 0 740 440" style="width:100%;max-width:760px;height:auto;display:block" id="sv" role="img" aria-label="Sơ đồ chu trình làm lạnh"></svg><div class="calc" id="info"></div>';
  const svg = host.querySelector('#sv'), info = host.querySelector('#info');
  const C = { hot: '#ef4444', warm: '#f97316', cold: '#38bdf8', cool: '#0ea5e9', pipe: 'currentColor' };
  // các đoạn (stage): tên, màu, điểm
  function zig(x1, x2, y, n, amp) { const pts = []; const step = (x2 - x1) / n; for (let i = 0; i <= n; i++) pts.push([x1 + i * step, y + (i % 2 ? amp : -amp)]); return pts; }
  const seg = [
    { n: 'Máy nén', c: C.hot, pts: [[150, 330], [150, 300]], t: '<b>Máy nén (compressor)</b> hút khí môi chất áp thấp từ ống hút và <b>nén lên áp cao</b> — khí nóng lên (như bơm xe đạp nóng ở đầu bơm). Đẩy khí qua ống đẩy.' },
    { n: 'Ống đẩy', c: C.hot, pts: [[150, 300], [150, 70], [200, 70]], t: '<b>Ống đẩy (delivery pipe)</b>: dẫn khí <b>áp cao, nóng</b> lên phía trên tủ tới dàn ngưng. Ống này <b>nóng</b> khi tủ chạy. Đồng hồ <b>đỏ</b> (áp cao) nối ở phía này.' },
    { n: 'Dàn ngưng', c: C.warm, pts: zig(200, 470, 70, 14, 16), t: '<b>Dàn ngưng (condenser)</b> tỏa nhiệt ra không khí. Khí nóng <b>ngưng tụ thành chất lỏng mát</b> ở cuối dàn. Khi tủ chạy đúng, dàn ngưng <b>nóng ở trên, mát hơn ở dưới</b>.' },
    { n: 'Bộ lọc hút ẩm', c: C.warm, pts: [[470, 70], [560, 70], [560, 120], [560, 175]], t: '<b>Bộ lọc hút ẩm (filter drier)</b> lọc chất lỏng (bụi, hơi ẩm) trước khi vào ống mao dẫn. Chất lỏng vẫn <b>áp cao</b>.' },
    { n: 'Ống mao dẫn', c: C.cold, pts: [[560, 175], [560, 200], [640, 200], [640, 215], [630, 225]], t: '<b>Ống mao dẫn (capillary)</b> dài và mảnh nên chất lỏng bị <b>phun</b> vào dàn bay hơi: áp suất <b>giảm đột ngột</b> và nhiệt độ hạ (như xả nhanh khí ở van lốp thấy lạnh).' },
    { n: 'Dàn bay hơi', c: C.cool, pts: [[630, 225], [540, 235], [680, 255], [540, 275], [680, 295], [540, 315], [530, 330]], t: '<b>Dàn bay hơi (evaporator)</b>: chất lỏng áp thấp <b>bay hơi thành khí</b> và <b>hút nhiệt</b> từ bên trong tủ → ngăn lạnh (có thể đóng sương muối). Đây là nơi sinh “lạnh”.' },
    { n: 'Ống hút', c: C.cool, pts: [[530, 330], [530, 345], [150, 345], [150, 330]], t: '<b>Ống hút (suction pipe)</b>: đưa khí <b>áp thấp, lạnh</b> về máy nén. Đồng hồ <b>xanh</b> (áp thấp) nối ở phía này. Chu trình bắt đầu lại.' }
  ];
  // vẽ tĩnh
  rfEl('rect', { x: 500, y: 205, width: 210, height: 140, rx: 8, fill: 'none', stroke: 'currentColor', 'stroke-dasharray': '5 4', opacity: .5 }, svg);
  rfEl('text', { x: 605, y: 198, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 12 }, svg, 'BÊN TRONG TỦ (cần làm lạnh)');
  rfEl('rect', { x: 110, y: 330, width: 90, height: 55, rx: 12, fill: '#64748b', opacity: .85 }, svg);
  rfEl('text', { x: 155, y: 363, 'text-anchor': 'middle', fill: '#fff', 'font-size': 13 }, svg, 'Máy nén');
  rfEl('rect', { x: 205, y: 340, width: 56, height: 22, rx: 4, fill: '#a78bfa' }, svg);
  rfEl('text', { x: 233, y: 355, 'text-anchor': 'middle', fill: '#fff', 'font-size': 10 }, svg, 'Rơ-le KĐ');
  const paths = seg.map((s, i) => {
    const d = 'M' + s.pts.map(p => p.join(' ')).join(' L');
    return rfEl('path', { d, fill: 'none', stroke: s.c, 'stroke-width': i === 4 ? 2.2 : 5, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', opacity: .35 }, svg);
  });
  rfEl('rect', { x: 540, y: 118, width: 40, height: 52, rx: 6, fill: '#f59e0b', opacity: .9 }, svg);
  rfEl('text', { x: 560, y: 148, 'text-anchor': 'middle', fill: '#fff', 'font-size': 10 }, svg, 'Lọc');
  rfEl('text', { x: 335, y: 38, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 13 }, svg, 'Dàn ngưng');
  rfEl('text', { x: 385, y: 372, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 12 }, svg, 'Ống hút →');
  rfEl('text', { x: 98, y: 190, 'text-anchor': 'end', fill: 'currentColor', 'font-size': 12 }, svg, 'Ống đẩy ↑');
  rfEl('text', { x: 585, y: 230, fill: 'currentColor', 'font-size': 11 }, svg, 'Mao dẫn');
  // thermostat
  rfEl('circle', { cx: 700, cy: 225, r: 11, fill: '#14b8a6' }, svg);
  rfEl('text', { x: 700, y: 229, 'text-anchor': 'middle', fill: '#fff', 'font-size': 9 }, svg, 'Th');
  rfEl('text', { x: 700, y: 248, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 10 }, svg, 'Thermostat');
  // đồng hồ
  [['ÁP CAO (đỏ)', 100, 120, '#ef4444'], ['ÁP THẤP (xanh)', 395, 318, '#0ea5e9']].forEach(g => { rfEl('circle', { cx: g[1], cy: g[2], r: 15, fill: 'none', stroke: g[3], 'stroke-width': 3 }, svg); rfEl('text', { x: g[1], y: g[2] + 30, 'text-anchor': 'middle', fill: g[3], 'font-size': 10 }, svg, g[0]); });
  // phần tuỳ chọn
  const oilG = rfEl('g', { style: 'display:none' }, svg);
  rfEl('rect', { x: 205, y: 100, width: 90, height: 22, rx: 4, fill: '#fb923c' }, oilG);
  rfEl('text', { x: 250, y: 115, 'text-anchor': 'middle', fill: '#fff', 'font-size': 10 }, oilG, 'Dàn ngưng 2');
  rfEl('path', { d: 'M110 357 L90 357 L90 250 L110 250', fill: 'none', stroke: '#fb923c', 'stroke-width': 3, 'stroke-dasharray': '6 4' }, oilG);
  rfEl('text', { x: 86, y: 300, 'text-anchor': 'end', fill: '#fb923c', 'font-size': 10 }, oilG, 'làm mát dầu');
  const hxG = rfEl('g', { style: 'display:none' }, svg);
  rfEl('rect', { x: 515, y: 322, width: 80, height: 30, rx: 6, fill: 'none', stroke: '#16a34a', 'stroke-width': 2, 'stroke-dasharray': '4 3' }, hxG);
  rfEl('text', { x: 555, y: 370, 'text-anchor': 'middle', fill: '#16a34a', 'font-size': 10 }, hxG, 'trao đổi nhiệt mao dẫn–ống hút');
  const dots = []; for (let i = 0; i < 26; i++) dots.push(rfEl('circle', { r: 4, fill: '#fff', stroke: '#111', 'stroke-width': .6 }, svg));
  const lens = paths.map(p => p.getTotalLength()), total = lens.reduce((a, b) => a + b, 0);
  let t = 0, stage = 0, auto = false, timer = null;
  function posAt(d) { d = ((d % total) + total) % total; for (let i = 0; i < lens.length; i++) { if (d <= lens[i]) return { i, p: paths[i].getPointAtLength(d) }; d -= lens[i]; } return { i: 0, p: paths[0].getPointAtLength(0) }; }
  function frame() {
    t += 1.6;
    dots.forEach((c, k) => { const r = posAt(t + k * total / dots.length); const s = seg[r.i]; c.setAttribute('cx', r.p.x); c.setAttribute('cy', r.p.y); c.setAttribute('fill', s.c); const gas = r.i === 0 || r.i === 1 || r.i === 6 || (r.i === 2 && (t + k * total / dots.length) % total < lens[0] + lens[1] + lens[2] * 0.5) ; c.setAttribute('r', gas ? 3.2 : 4.6); c.setAttribute('opacity', gas ? 0.75 : 1); });
    raf = requestAnimationFrame(frame);
  }
  let raf = requestAnimationFrame(frame);
  function show() {
    paths.forEach((p, i) => p.setAttribute('opacity', i === stage ? 1 : 0.3));
    paths[stage].setAttribute('stroke-width', stage === 4 ? 3.5 : 8);
    paths.forEach((p, i) => { if (i !== stage) p.setAttribute('stroke-width', i === 4 ? 2.2 : 5); });
    info.innerHTML = `<b>Bước ${stage + 1}/${seg.length}: ${seg[stage].n}</b><br>${seg[stage].t}<br><i>Chấm tròn nhỏ = khí; chấm lớn = chất lỏng; màu đỏ/cam = nóng, xanh = lạnh.</i>`;
  }
  host.querySelector('#nx').onclick = () => { stage = (stage + 1) % seg.length; show(); };
  host.querySelector('#au').onclick = e => { auto = !auto; e.target.textContent = auto ? '⏸ Dừng' : '▶ Chạy tự động'; clearInterval(timer); if (auto) timer = setInterval(() => { stage = (stage + 1) % seg.length; show(); }, 3200); };
  host.querySelector('#oil').onchange = e => { oilG.style.display = e.target.checked ? '' : 'none'; };
  host.querySelector('#hx').onchange = e => { hxG.style.display = e.target.checked ? '' : 'none'; };
  show();
  new MutationObserver(() => { if (!document.body.contains(host)) { cancelAnimationFrame(raf); clearInterval(timer); } }).observe(document.body, { childList: true, subtree: true });
};

WIDGETS['rf-cycle-quiz'] = host => quizBtns(host, [
  ['Sau máy nén, trong ống đẩy', 0, ['Khí áp cao, nóng', 'Lỏng áp cao', 'Khí áp thấp, lạnh', 'Lỏng áp thấp']],
  ['Cuối dàn ngưng', 1, ['Khí áp cao, nóng', 'Lỏng áp cao, mát', 'Khí áp thấp, lạnh', 'Lỏng áp thấp']],
  ['Ngay khi qua ống mao dẫn vào dàn bay hơi', 3, ['Khí áp cao, nóng', 'Lỏng áp cao', 'Khí áp thấp', 'Lỏng áp thấp, lạnh (phun)']],
  ['Trong ống hút về máy nén', 2, ['Khí áp cao, nóng', 'Lỏng áp cao', 'Khí áp thấp, lạnh', 'Lỏng áp thấp']],
  ['Đồng hồ đỏ đo ở', 0, ['Phía áp cao (ống đẩy)', 'Phía áp thấp (ống hút)']]
]);

// ===== Mô phỏng manifold =====
WIDGETS['rf-manifold'] = host => {
  host.innerHTML = '<div class="row"><label>Van xanh (thấp) <select id="b"><option value="0">đóng</option><option value="1">mở</option></select></label><label>Van đỏ (cao) <select id="r"><option value="0">đóng</option><option value="1">mở</option></select></label></div><svg viewBox="0 0 520 250" style="width:100%;max-width:560px;height:auto" id="sv"></svg><div class="calc" id="o"></div>';
  const svg = host.querySelector('#sv'), o = host.querySelector('#o');
  rfEl('rect', { x: 150, y: 120, width: 220, height: 40, rx: 6, fill: '#64748b' }, svg);
  rfEl('circle', { cx: 150, cy: 70, r: 42, fill: 'none', stroke: '#0ea5e9', 'stroke-width': 5 }, svg);
  rfEl('circle', { cx: 370, cy: 70, r: 42, fill: 'none', stroke: '#ef4444', 'stroke-width': 5 }, svg);
  rfEl('text', { x: 150, y: 20, 'text-anchor': 'middle', fill: '#0ea5e9', 'font-size': 12 }, svg, 'Đồng hồ XANH (thấp)');
  rfEl('text', { x: 370, y: 20, 'text-anchor': 'middle', fill: '#ef4444', 'font-size': 12 }, svg, 'Đồng hồ ĐỎ (cao)');
  const nb = rfEl('line', { x1: 150, y1: 70, x2: 150, y2: 40, stroke: '#0ea5e9', 'stroke-width': 3 }, svg);
  const nr = rfEl('line', { x1: 370, y1: 70, x2: 370, y2: 40, stroke: '#ef4444', 'stroke-width': 3 }, svg);
  const vb = rfEl('circle', { cx: 190, cy: 140, r: 14 }, svg), vr = rfEl('circle', { cx: 330, cy: 140, r: 14 }, svg);
  rfEl('text', { x: 190, y: 190, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11 }, svg, 'Van xanh');
  rfEl('text', { x: 330, y: 190, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11 }, svg, 'Van đỏ');
  rfEl('line', { x1: 150, y1: 160, x2: 150, y2: 215, stroke: '#0ea5e9', 'stroke-width': 6 }, svg);
  rfEl('line', { x1: 260, y1: 160, x2: 260, y2: 215, stroke: '#eab308', 'stroke-width': 6 }, svg);
  rfEl('line', { x1: 370, y1: 160, x2: 370, y2: 215, stroke: '#ef4444', 'stroke-width': 6 }, svg);
  rfEl('text', { x: 150, y: 235, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11 }, svg, 'Ống hút/ống xử lý');
  rfEl('text', { x: 260, y: 235, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11 }, svg, 'Giữa: bình/bơm');
  rfEl('text', { x: 370, y: 235, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11 }, svg, 'Ống đẩy');
  const flow = rfEl('text', { x: 260, y: 110, 'text-anchor': 'middle', fill: '#16a34a', 'font-size': 12 }, svg, '');
  function draw() {
    const b = +host.querySelector('#b').value, r = +host.querySelector('#r').value;
    vb.setAttribute('fill', b ? '#22c55e' : '#94a3b8'); vr.setAttribute('fill', r ? '#22c55e' : '#94a3b8');
    let msg, ang;
    if (!b && !r) { msg = '<b>Chế độ ĐO ÁP SUẤT</b>: cả hai van đóng — môi chất chỉ tới đồng hồ, không ra cổng giữa. Xanh = áp ống hút, đỏ = áp ống đẩy.'; flow.textContent = 'chỉ tới đồng hồ'; }
    else if (b && !r) { msg = '<b>Chế độ NẠP GAS</b>: van xanh mở, van đỏ đóng — R12 từ bình (cổng giữa) vào ống hút; vẫn đo được cả áp hút lẫn áp đẩy.'; flow.textContent = 'giữa → xanh (nạp)'; }
    else if (b && r) { msg = '<b>Chế độ HÚT CHÂN KHÔNG</b>: cả hai van mở — cổng giữa nối bơm chân không, hai cổng kia nối hệ thống. Mục tiêu ≥ 28 inch Hg (−0,9 bar).'; flow.textContent = 'hệ thống → bơm (hút)'; }
    else { msg = 'Van đỏ mở, van xanh đóng: không phải vị trí chuẩn trong sổ tay (chỉ nên dùng ba chế độ: đo, nạp, hút chân không).'; flow.textContent = ''; }
    nb.setAttribute('x2', 150 + (b && r ? -25 : b ? 0 : 20)); nb.setAttribute('y2', b && r ? 62 : 40);
    nr.setAttribute('x2', 370 + (b && r ? -25 : 20)); nr.setAttribute('y2', b && r ? 62 : 40);
    o.innerHTML = msg;
  }
  host.querySelectorAll('select').forEach(s => s.onchange = draw); draw();
};

// ===== Mạch điện đầy đủ =====
WIDGETS['rf-circuit'] = host => {
  host.innerHTML = '<div class="row"><label><input type="radio" name="sd" value="rel" checked> Rơ-le từ</label><label><input type="radio" name="sd" value="ptc"> PTC</label><label><input type="checkbox" id="cap"> Tụ khởi động</label><label><input type="checkbox" id="door"> Cửa mở</label><button id="ov" type="button">⚠ Gây quá tải</button><button id="pw" type="button">⏻ Mất điện / có điện</button></div><div class="row"><label>Nhiệt độ trong tủ (°C) <input id="tmp" type="range" min="0" max="14" step="0.1" value="9" style="width:200px"> <b id="tv">9</b></label></div><svg viewBox="0 0 760 450" style="width:100%;max-width:780px;height:auto;display:block" id="sv" role="img" aria-label="Sơ đồ mạch điện tủ lạnh nén"></svg><div class="calc" id="st"></div>';
  const svg = host.querySelector('#sv'), st = host.querySelector('#st');
  const Y = 70, N = 410;
  const W = {}; // dây
  function wire(id, pts, parent) { W[id] = rfEl('polyline', { points: pts.map(p => p.join(',')).join(' '), fill: 'none', 'stroke-width': 4, 'stroke-linejoin': 'round' }, svg); return W[id]; }
  // dây
  wire('Lrail1', [[40, Y], [170, Y]]);
  wire('th_pr', [[250, Y], [290, Y]]);
  wire('pr_co', [[345, Y], [395, Y]]);
  wire('co_B', [[455, Y], [520, Y]]);
  wire('B_run', [[520, Y], [520, 130]]);
  wire('run_C', [[520, 290], [520, 350]]);
  wire('B_st', [[520, Y], [640, Y], [640, 100]]);
  wire('st_cap', [[640, 160], [640, 185]]);
  wire('cap_sw', [[640, 235], [640, 250]]);
  wire('stw_C', [[640, 330], [640, 350]]);
  wire('C_N', [[520, 350], [640, 350]]);
  wire('C_N2', [[580, 350], [580, N]]);
  wire('N_rail', [[40, N], [760 - 40, N]]);
  wire('lamp1', [[110, Y], [110, 130]]);
  wire('lamp2', [[110, 190], [110, 235]]);
  wire('lamp3', [[110, 295], [110, N]]);
  wire('L_to_lamp', [[40, Y], [110, Y]]);
  wire('L_to_th', [[110, Y], [170, Y]]);
  wire('N_plug', [[40, N], [40, 330]]);
  wire('L_plug', [[40, Y], [40, 150]]);
  // phích cắm
  rfEl('rect', { x: 20, y: 150, width: 40, height: 180, rx: 6, fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, svg);
  rfEl('text', { x: 40, y: 245, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11, transform: 'rotate(-90 40 245)' }, svg, 'NGUỒN (phích)');
  rfEl('text', { x: 14, y: Y - 8, fill: 'currentColor', 'font-size': 12 }, svg, 'L');
  rfEl('text', { x: 14, y: N + 16, fill: 'currentColor', 'font-size': 12 }, svg, 'N');
  // linh kiện: hàm hộp
  function box(x, y, w, h, label, fill) { const g = rfEl('g', {}, svg); const r = rfEl('rect', { x, y, width: w, height: h, rx: 6, fill: fill || 'none', stroke: 'currentColor', 'stroke-width': 2 }, g); const t = rfEl('text', { x: x + w / 2, y: y + h / 2 + 4, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 10 }, g, label); return { g, r, t }; }
  // đèn + công tắc cửa
  const doorSw = rfEl('line', { x1: 98, y1: 132, x2: 128, y2: 150, stroke: 'currentColor', 'stroke-width': 4 }, svg);
  rfEl('circle', { cx: 110, cy: 130, r: 3, fill: 'currentColor' }, svg); rfEl('circle', { cx: 110, cy: 190, r: 3, fill: 'currentColor' }, svg);
  rfEl('text', { x: 140, y: 165, fill: 'currentColor', 'font-size': 10 }, svg, 'Công tắc cửa');
  const lamp = rfEl('circle', { cx: 110, cy: 265, r: 26, fill: '#475569', stroke: 'currentColor', 'stroke-width': 2 }, svg);
  rfEl('text', { x: 110, y: 269, 'text-anchor': 'middle', fill: '#fff', 'font-size': 10 }, svg, 'Đèn');
  // thermostat
  const thSw = rfEl('line', { x1: 170, y1: Y, x2: 235, y2: Y - 22, stroke: 'currentColor', 'stroke-width': 4 }, svg);
  rfEl('circle', { cx: 170, cy: Y, r: 3, fill: 'currentColor' }, svg); rfEl('circle', { cx: 250, cy: Y, r: 3, fill: 'currentColor' }, svg);
  const thTxt = rfEl('text', { x: 210, y: Y + 22, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 10 }, svg, 'Thermostat');
  // bảo vệ
  const prBox = box(290, Y - 14, 55, 28, 'Bảo vệ ĐC', 'none');
  // cuộn rơ-le
  const coil = box(395, Y - 14, 60, 28, 'Cuộn rơ-le', 'none');
  // động cơ
  rfEl('rect', { x: 470, y: 108, width: 230, height: 262, rx: 12, fill: 'none', stroke: 'currentColor', 'stroke-dasharray': '6 4', opacity: .6 }, svg);
  rfEl('text', { x: 585, y: 126, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 11 }, svg, 'ĐỘNG CƠ MÁY NÉN');
  const runW = rfEl('rect', { x: 500, y: 130, width: 40, height: 160, rx: 8, fill: 'none', stroke: 'currentColor', 'stroke-width': 3, 'stroke-dasharray': '3 3' }, svg);
  rfEl('text', { x: 520, y: 215, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 10, transform: 'rotate(-90 520 215)' }, svg, 'CUỘN CHẠY (R)');
  const stW = rfEl('rect', { x: 620, y: 250, width: 40, height: 80, rx: 8, fill: 'none', stroke: 'currentColor', 'stroke-width': 3, 'stroke-dasharray': '3 3' }, svg);
  rfEl('text', { x: 640, y: 295, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 9, transform: 'rotate(-90 640 295)' }, svg, 'CUỘN KĐ (S)');
  rfEl('text', { x: 545, y: 358, fill: 'currentColor', 'font-size': 11 }, svg, 'C');
  // thiết bị khởi động (tiếp điểm rơ-le hoặc PTC)
  const relSw = rfEl('line', { x1: 640, y1: 100, x2: 660, y2: 130, stroke: 'currentColor', 'stroke-width': 4 }, svg);
  const relTxt = rfEl('text', { x: 672, y: 120, fill: 'currentColor', 'font-size': 10 }, svg, 'Tiếp điểm rơ-le');
  const ptcBox = box(615, 100, 50, 60, 'PTC', 'none');
  const capBox = box(615, 185, 50, 50, 'Tụ KĐ', 'none');
  rfEl('circle', { cx: 640, cy: 100, r: 3, fill: 'currentColor' }, svg); rfEl('circle', { cx: 640, cy: 160, r: 3, fill: 'currentColor' }, svg);
  // trạng thái
  let thermoClosed = true, temp = 9, door = false, power = true, motor = 'off', startTicks = 0, ptc = 0, protectOpen = false, coolTicks = 0, mode = 'rel';
  const COL = { run: '#f59e0b', start: '#22c55e', lamp: '#eab308', off: 'currentColor' };
  function setW(ids, col) { ids.forEach(id => { W[id].setAttribute('stroke', col); W[id].setAttribute('opacity', col === 'currentColor' ? .4 : 1); }); }
  function render() {
    const powered = power && thermoClosed && !protectOpen;
    const runCur = powered, startCur = powered && motor === 'starting';
    const lampOn = power && door;
    setW(['Lrail1', 'L_plug', 'N_plug', 'N_rail'], power ? COL.run : COL.off);
    W['Lrail1'].setAttribute('stroke', power ? COL.run : COL.off); W['L_to_th'].setAttribute('stroke', power ? COL.run : COL.off); W['L_to_th'].setAttribute('opacity', power ? 1 : .4);
    setW(['th_pr', 'pr_co', 'co_B', 'B_run', 'run_C', 'C_N', 'C_N2'], runCur ? COL.run : COL.off);
    setW(['B_st', 'st_cap', 'cap_sw', 'stw_C'], startCur ? COL.start : COL.off);
    setW(['L_to_lamp', 'lamp1', 'lamp2', 'lamp3'], lampOn ? COL.lamp : COL.off);
    W['C_N'].setAttribute('stroke', runCur || startCur ? COL.run : COL.off);
    // công tắc
    thSw.setAttribute('x2', 235); thSw.setAttribute('y2', thermoClosed ? Y : Y - 22);
    doorSw.setAttribute('x2', 110); doorSw.setAttribute('y2', door ? 190 : 150);
    doorSw.setAttribute('x2', door ? 112 : 128); doorSw.setAttribute('y2', door ? 188 : 150);
    lamp.setAttribute('fill', lampOn ? '#facc15' : '#475569');
    const capOn = host.querySelector('#cap').checked && mode === 'rel';
    capBox.g.style.display = capOn ? '' : 'none';
    W['st_cap'].style.display = capOn ? '' : 'none';
    W['cap_sw'].style.display = capOn ? '' : 'none';
    ptcBox.g.style.display = mode === 'ptc' ? '' : 'none'; relSw.style.display = mode === 'rel' ? '' : 'none'; relTxt.style.display = mode === 'rel' ? '' : 'none';
    coil.g.style.display = mode === 'rel' ? '' : 'none';
    relSw.setAttribute('x2', motor === 'starting' ? 640 : 660); relSw.setAttribute('y2', motor === 'starting' ? 160 : 130);
    prBox.r.setAttribute('fill', protectOpen ? '#fecaca' : 'none'); prBox.t.textContent = protectOpen ? 'BV: MỞ' : 'Bảo vệ ĐC';
    ptcBox.r.setAttribute('fill', ptc > .5 ? '#fecaca' : '#bae6fd'); ptcBox.t.textContent = ptc > .5 ? 'PTC nóng' : 'PTC nguội';
    runW.setAttribute('stroke', runCur ? COL.run : 'currentColor'); stW.setAttribute('stroke', startCur ? COL.start : 'currentColor');
    thTxt.textContent = thermoClosed ? 'Thermostat: ĐÓNG' : 'Thermostat: MỞ';
    let msg;
    if (!power) msg = 'Mất điện: tủ không chạy; đèn tắt dù cửa mở.';
    else if (protectOpen) msg = `Bảo vệ động cơ đã <b>mở</b> (quá dòng/quá nóng): máy nén dừng. Chờ nguội khoảng 5–10 phút thực tế (mô phỏng còn ${(coolTicks / 10).toFixed(0)} s).`;
    else if (!thermoClosed) msg = 'Nhiệt độ đủ thấp: <b>thermostat mở</b> → không có điện tới động cơ, máy nén dừng.';
    else if (motor === 'blocked') msg = '<b>PTC còn nóng</b>: điện trở cao, cuộn khởi động không có dòng → máy nén chưa khởi động được. Cần vài phút cho PTC nguội (đã mô phỏng nhanh).';
    else if (motor === 'starting') msg = 'Máy nén <b>đang khởi động</b>: ' + (mode === 'rel' ? 'dòng lớn qua cuộn rơ-le nâng pit-tông → tiếp điểm đóng → dòng tới cuộn khởi động.' : 'PTC nguội điện trở thấp → dòng qua cuộn khởi động; PTC đang nóng dần.');
    else if (motor === 'running') msg = 'Máy nén <b>chạy</b>: chỉ cuộn chạy có dòng; ' + (mode === 'rel' ? 'tiếp điểm rơ-le đã mở.' : 'PTC nóng, điện trở cao ngắt cuộn khởi động.');
    else msg = 'Chờ.';
    st.innerHTML = `Nhiệt độ trong tủ: <b>${temp.toFixed(1)} °C</b> (thermostat đóng khi ≥ 8 °C, mở khi ≤ 4 °C — dải bảo quản vắc-xin +4 đến +8 °C).<br>${msg}<br>${door && power ? 'Cửa mở → công tắc cửa đóng → <b>đèn sáng</b> (mạch đèn độc lập với máy nén).' : 'Cửa đóng → công tắc cửa mở → đèn tắt.'}<br><span style="color:#f59e0b">■</span> dòng cuộn chạy/chính &nbsp; <span style="color:#22c55e">■</span> dòng cuộn khởi động &nbsp; <span style="color:#eab308">■</span> dòng đèn`;
  }
  function tick() {
    if (temp >= 8) thermoClosed = true; else if (temp <= 4) thermoClosed = false;
    if (protectOpen) { coolTicks--; if (coolTicks <= 0) protectOpen = false; }
    const powered = power && thermoClosed && !protectOpen;
    if (!powered) { motor = 'off'; startTicks = 0; ptc = Math.max(0, ptc - 0.01); }
    else if (motor === 'off') { motor = (mode === 'ptc' && ptc >= .5) ? 'blocked' : 'starting'; startTicks = 0; }
    else if (motor === 'blocked') { ptc = Math.max(0, ptc - .01); if (ptc < .5) { motor = 'starting'; startTicks = 0; } }
    else if (motor === 'starting') { startTicks++; if (mode === 'ptc') ptc = Math.min(1, ptc + .5 / 30); if (startTicks >= 30) motor = 'running'; }
    else if (motor === 'running') { if (mode === 'ptc') ptc = Math.min(1, ptc + .02); }
    if (motor === 'running') temp -= .05; else if (motor === 'starting') temp -= .01; else temp += .03;
    temp = Math.max(0, Math.min(14, temp));
    host.querySelector('#tmp').value = temp; host.querySelector('#tv').textContent = temp.toFixed(1);
    render();
  }
  host.querySelector('#tmp').oninput = e => { temp = +e.target.value; host.querySelector('#tv').textContent = temp.toFixed(1); render(); };
  host.querySelectorAll('input[name=sd]').forEach(r => r.onchange = () => { mode = r.value; if (mode === 'ptc') host.querySelector('#cap').checked = false; motor = 'off'; render(); });
  host.querySelector('#cap').onchange = () => { if (mode === 'ptc') host.querySelector('#cap').checked = false; render(); };
  host.querySelector('#door').onchange = e => { door = e.target.checked; render(); };
  host.querySelector('#ov').onclick = () => { protectOpen = true; coolTicks = 60; render(); };
  host.querySelector('#pw').onclick = () => { power = !power; render(); };
  render();
  const iv = setInterval(() => { if (!document.body.contains(host)) { clearInterval(iv); return; } tick(); }, 100);
};

WIDGETS['rf-start-device'] = host => quizBtns(host, [
  ['Dòng lớn qua cuộn nâng pit-tông, đóng tiếp điểm tới cuộn khởi động', 0, ['Rơ-le từ', 'PTC']],
  ['Nguội: điện trở thấp; nóng: điện trở rất cao', 1, ['Rơ-le từ', 'PTC']],
  ['Sau khi máy dừng cần vài phút mới khởi động lại được', 1, ['Rơ-le từ', 'PTC']],
  ['Lắp được tụ khởi động', 0, ['Rơ-le từ', 'PTC']]
]);
WIDGETS['rf-elec-safety'] = host => quizBtns(host, [
  ['Sửa phần điện khi vẫn cắm phích', 1, ['Được', 'Không — rút phích trước']],
  ['Cầm tụ điện ngay sau khi rút phích', 1, ['An toàn', 'Nguy hiểm — phải xả tụ trước']],
  ['Phải làm khi đang cắm điện: đứng trên nền ẩm', 1, ['Được', 'Không — đứng gỗ/thảm cao su']],
  ['Dây điện cũ giòn', 0, ['Thay sớm', 'Dùng tiếp']],
  ['Nắp hộp đấu dây sau khi sửa', 0, ['Lắp chặt lại', 'Để hở cho mát']]
]);

// ===== Dụng cụ đơn giản =====
WIDGETS['rf-tools'] = host => {
  host.innerHTML = '<svg viewBox="0 0 720 150" style="width:100%;max-width:740px;height:auto" id="sv"></svg><div class="calc" id="o">Bấm vào một dụng cụ.</div>';
  const svg = host.querySelector('#sv'), o = host.querySelector('#o');
  const tools = [
    ['Dao cắt ống', 'Tay vặn + 2 con lăn + bánh cắt. Đặt bánh cắt thẳng vết dũa, vặn dần, xoay quanh ống.', 50],
    ['Dụng cụ doa', 'Một đầu doa mặt trong, đầu kia doa mặt ngoài ống để hết bavia. Giữ đầu ống chúc xuống.', 190],
    ['Khối loe + côn', 'Khối có 5 lỗ theo cỡ ống, 2 đai ốc tay giữ ống, kẹp (yoke) và côn ép tạo mặt loe.', 330],
    ['Khối nong + chày', 'Khối có lỗ cho ống; chày thép + kẹp nong đầu ống để ống kia lồng vào.', 470],
    ['Lò xo uốn ống', 'Lồng ngoài ống để uốn đều, không gập.', 610]
  ];
  tools.forEach((t, i) => {
    const g = rfEl('g', { style: 'cursor:pointer' }, svg);
    rfEl('rect', { x: t[2] - 45, y: 15, width: 100, height: 80, rx: 8, fill: '#e2e8f0', stroke: '#64748b', 'stroke-width': 2 }, g);
    if (i === 0) { rfEl('circle', { cx: t[2], cy: 55, r: 22, fill: 'none', stroke: '#334155', 'stroke-width': 4 }, g); rfEl('circle', { cx: t[2], cy: 55, r: 6, fill: '#334155' }, g); }
    if (i === 1) { rfEl('path', { d: `M${t[2] - 30} 70 L${t[2] + 30} 40`, stroke: '#334155', 'stroke-width': 8, 'stroke-linecap': 'round' }, g); }
    if (i === 2) { rfEl('rect', { x: t[2] - 28, y: 55, width: 56, height: 18, fill: '#334155' }, g); rfEl('path', { d: `M${t[2] - 12} 55 L${t[2]} 30 L${t[2] + 12} 55`, fill: '#94a3b8', stroke: '#334155' }, g); }
    if (i === 3) { rfEl('rect', { x: t[2] - 28, y: 55, width: 56, height: 18, fill: '#334155' }, g); rfEl('rect', { x: t[2] - 5, y: 28, width: 10, height: 27, fill: '#94a3b8', stroke: '#334155' }, g); }
    if (i === 4) { rfEl('path', { d: `M${t[2] - 32} 70 q8 -22 16 0 t16 0 t16 0 t16 0`, fill: 'none', stroke: '#334155', 'stroke-width': 4 }, g); }
    rfEl('text', { x: t[2] + 5, y: 118, 'text-anchor': 'middle', fill: 'currentColor', 'font-size': 12 }, g, t[0]);
    g.onclick = () => { o.innerHTML = `<b>${t[0]}</b>: ${t[1]}`; };
  });
};
WIDGETS['flare-calc'] = host => {
  host.innerHTML = '<div class="row"><label>Đường kính ngoài ống (mm) <input id="d" type="number" value="6" style="width:70px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const d = +host.querySelector('#d').value || 0; o.innerHTML = `Loe: đầu ống nhô <b>${(d / 3).toFixed(1)} mm</b> trên mặt khối (đường kính ÷ 3); nếu loe quá lỏng, làm lại với ~${(d / 3 + 1).toFixed(1)} mm.<br>Nong: đầu ống nhô <b>${(d + 3).toFixed(1)} mm</b> (đường kính + 3 mm, tức + 1/8 inch).`; };
  host.querySelector('#d').oninput = draw; draw();
};
WIDGETS['rf-anneal'] = host => quizBtns(host, [
  ['Đỏ sẫm (dull red)', 0, ['Đúng nhiệt', 'Quá nóng', 'Chưa đủ']],
  ['Đỏ sáng (bright red)', 1, ['Đúng nhiệt', 'Quá nóng', 'Chưa đủ']],
  ['Chưa đổi màu', 2, ['Đúng nhiệt', 'Quá nóng', 'Chưa đủ']]
]);
WIDGETS['rf-torch'] = host => quizBtns(host, [
  ['Axetylen: ngọn lửa đúng', 0, ['Xanh, chóp sáng nhọn', 'Vàng, mờ']],
  ['Propan: lửa vàng', 1, ['Đúng', 'Cần thêm khí']],
  ['Propan so với axetylen cùng cỡ', 0, ['Dùng lửa nhỏ hơn', 'Dùng lửa lớn hơn']],
  ['Kiểm rò khí trước khi châm lửa', 1, ['Ngửi', 'Nước xà phòng']]
]);
WIDGETS['rf-leak-choice'] = host => quizBtns(host, [
  ['Rò áp thấp', 0, ['Epoxy hai thành phần', 'Que hàn nhiệt']],
  ['Rò áp cao (tạm)', 1, ['Epoxy hai thành phần', 'Que hàn nhiệt']],
  ['Sửa bền rò áp cao', 2, ['Epoxy', 'Que hàn nhiệt', 'Hàn đồng']]
]);
WIDGETS['rf-connect-pick'] = host => quizBtns(host, [
  ['Kết nối tạm nhanh', 2, ['Mối loe', 'Mối hàn đồng', 'Khớp nối nhanh']],
  ['Mối chắc, vĩnh viễn', 1, ['Mối loe', 'Mối hàn đồng', 'Khớp nối nhanh']],
  ['Đáng tin mà không muốn hàn', 0, ['Mối loe', 'Mối hàn đồng', 'Khớp nối nhanh']]
]);
WIDGETS['rf-cylinder'] = host => {
  host.innerHTML = '<div class="row"><label>Khối lượng nạp tối đa ghi trên bình (kg) <input id="m" type="number" value="13.6" step="0.1" style="width:80px"></label><label>Đã nạp (kg) <input id="f" type="number" value="9" step="0.1" style="width:80px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const m = +host.querySelector('#m').value || 1, f = +host.querySelector('#f').value || 0; const p = f / m * 100; o.innerHTML = `Mức nạp ≈ <b>${p.toFixed(0)}%</b> khối lượng tối đa. ` + (f > m ? '⛔ Vượt khối lượng ghi trên bình!' : p > 75 ? '⚠ Trên 3/4 — có nguy cơ không đủ chỗ cho chất lỏng giãn nở.' : '✅ Trong giới hạn (≤ 3/4). Đừng xả cạn bình: luôn chừa chút R12.'); };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['rf-vacuum'] = host => {
  host.innerHTML = '<div class="row"><label>Chân không đạt (inch Hg) <input id="v" type="number" value="28.5" step="0.5" style="width:80px"></label><label>Sau khi tắt bơm, kim <select id="k"><option value="s">đứng yên</option><option value="u">nhích dần lên</option></select></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const v = +host.querySelector('#v').value || 0, k = host.querySelector('#k').value; o.innerHTML = (v < 28 ? '⛔ Chưa đạt tối thiểu 28 inch Hg (≈ 710 mm Hg, −0,9 bar): tiếp tục hút. ' : '✅ Đạt chân không tối thiểu. ') + (k === 'u' ? '<br>⛔ Kim nhích lên = <b>rò không khí</b> vào hệ thống → siết mọi mối nối ống rồi làm lại.' : '<br>✅ Chân không được giữ — để hệ thống dưới chân không, sẵn sàng nạp R12.'); };
  host.querySelectorAll('input,select').forEach(i => i.oninput = draw); draw();
};
WIDGETS['rf-charge-seq'] = host => {
  const right = ['Hút chân không hệ thống', 'Chuyển R12 vào bình dịch vụ', 'Nối ống nạp, đuổi không khí khỏi ống', 'Cho chút R12 vào hệ thống (khi còn chân không)', 'Khởi động máy nén để hút R12 vào', 'Dừng khi có sương muối trên ống hút', 'Đóng van, bóp ống xử lý 2 lần, hàn bít, thử rò'];
  const shuffled = right.map((t, i) => [t, i]).sort((a, b) => ((a[1] * 7 + 3) % 5) - ((b[1] * 7 + 3) % 5) || a[1] - b[1]);
  host.innerHTML = '<div>Bấm các bước theo đúng thứ tự khi nạp gas:</div><div id="b"></div><div class="calc" id="o"></div><button id="r" type="button">Làm lại</button>';
  const b = host.querySelector('#b'), o = host.querySelector('#o'); let next = 0;
  function init() { next = 0; b.innerHTML = ''; o.textContent = ''; shuffled.forEach(s => { const x = document.createElement('button'); x.type = 'button'; x.textContent = s[0]; x.style.display = 'block'; x.style.margin = '4px 0'; x.onclick = () => { if (s[1] === next) { x.disabled = true; x.textContent = (next + 1) + '. ' + s[0] + ' ✅'; next++; o.textContent = next === right.length ? '🎉 Đúng toàn bộ thứ tự!' : ''; } else o.textContent = '❌ Chưa đúng — bước kế tiếp là bước khác.'; }; b.appendChild(x); }); }
  host.querySelector('#r').onclick = init; init();
};
WIDGETS['rf-leak-flame'] = host => quizBtns(host, [
  ['Lửa xanh nhạt', 0, ['Bình thường, chưa thấy R12', 'Có R12']],
  ['Lửa chuyển xanh lục khi đưa ống dò dưới mối nối', 1, ['Bình thường', 'Chỗ này đang rò R12']],
  ['Lửa xanh lục ngay cả khi chưa đưa vào mối nối', 1, ['Bình thường', 'Nhiều R12 trong phòng — phải thông gió']]
]);

// ===== Thử linh kiện điện =====
WIDGETS['rf-relay-test'] = host => {
  host.innerHTML = '<div class="row"><label>Rơ-le đang thử <select id="f"><option value="ok">Tốt</option><option value="coil">Cuộn bị đứt</option><option value="stuck">Tiếp điểm dính (luôn đóng)</option><option value="open">Tiếp điểm không đóng được</option></select></label></div><div class="row"><button data-t="coil" type="button">Đèn vào hai đầu cuộn</button><button data-t="up" type="button">Đèn vào tiếp điểm (dựng đứng)</button><button data-t="down" type="button">Đèn vào tiếp điểm (lật ngược, lắc)</button></div><div class="calc" id="o">Chọn phép thử.</div>';
  const o = host.querySelector('#o');
  host.querySelectorAll('button').forEach(b => b.onclick = () => {
    const f = host.querySelector('#f').value, t = b.dataset.t; let lit, want;
    if (t === 'coil') { lit = f !== 'coil'; want = true; } else if (t === 'up') { lit = f === 'stuck'; want = false; } else { lit = f !== 'open'; want = true; }
    o.innerHTML = `Đèn thử: <b>${lit ? '💡 sáng' : '⚫ không sáng'}</b> — ${lit === want ? 'kết quả đúng như kỳ vọng' : '<b>sai kỳ vọng → rơ-le hỏng</b>'} (kỳ vọng: ${want ? 'sáng' : 'không sáng'}).`;
  });
};
WIDGETS['rf-ptc-test'] = host => {
  host.innerHTML = '<div class="row"><label>PTC <select id="f"><option value="ok">Tốt</option><option value="open">Hở mạch</option><option value="short">Chập (không ngắt)</option></select></label><label>Đường thử <select id="p"><option value="run">Tới cuộn chạy</option><option value="start">Tới cuộn khởi động</option></select></label><label>Thời gian (phút) <input id="t" type="range" min="0" max="5" step="0.1" value="0" style="width:160px"> <b id="tv">0</b></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const f = host.querySelector('#f').value, p = host.querySelector('#p').value, t = +host.querySelector('#t').value; host.querySelector('#tv').textContent = t.toFixed(1); let lit; if (f === 'open') lit = false; else if (p === 'run') lit = true; else lit = f === 'short' ? true : t < 3; o.innerHTML = `Đèn thử: <b>${lit ? '💡 sáng' : '⚫ tắt'}</b><br>` + (f === 'ok' ? (p === 'run' ? 'PTC tốt: đường chạy sáng liên tục.' : 'PTC tốt: đường khởi động sáng lúc đầu rồi <b>tắt sau ~3 phút</b> (đèn 100 W, 240 V).') : f === 'open' ? 'Đèn không sáng → PTC hỏng (hở mạch).' : 'Đèn cứ sáng không tắt ở đường khởi động → PTC hỏng (không ngắt).'); };
  host.querySelectorAll('input,select').forEach(i => i.oninput = draw); draw();
};
WIDGETS['rf-capacitor'] = host => {
  host.innerHTML = '<div class="row"><label>Tụ <select id="f"><option value="ok">Tốt</option><option value="short">Chập (kim xuống thấp, ở lại)</option><option value="open">Hở (kim không động)</option></select></label><button id="go" type="button">Đo bằng ohm kế (thang cao nhất)</button></div><svg viewBox="0 0 300 150" style="width:100%;max-width:320px" id="sv"></svg><div class="calc" id="o"></div>';
  const svg = host.querySelector('#sv'), o = host.querySelector('#o');
  rfEl('path', { d: 'M30 130 A120 120 0 0 1 270 130', fill: 'none', stroke: 'currentColor', 'stroke-width': 2 }, svg);
  rfEl('text', { x: 30, y: 148, fill: 'currentColor', 'font-size': 11 }, svg, 'THẤP Ω'); rfEl('text', { x: 270, y: 148, 'text-anchor': 'end', fill: 'currentColor', 'font-size': 11 }, svg, 'CAO Ω');
  const needle = rfEl('line', { x1: 150, y1: 130, x2: 262, y2: 115, stroke: '#ef4444', 'stroke-width': 3 }, svg);
  function setAng(a) { const r = 115, rad = (180 - a) * Math.PI / 180; needle.setAttribute('x2', 150 + r * Math.cos(rad) * -1); needle.setAttribute('y2', 130 - r * Math.sin(rad)); }
  // a: 0 = thấp ở trái ... 180 = cao ở phải? dùng góc từ trái
  function pos(x) { const rad = Math.PI * (1 - x); needle.setAttribute('x2', 150 + 115 * Math.cos(rad)); needle.setAttribute('y2', 130 - 115 * Math.sin(rad)); }
  pos(1);
  host.querySelector('#go').onclick = () => {
    const f = host.querySelector('#f').value; let steps;
    if (f === 'ok') steps = [1, .6, .2, .05, .05, .2, .5, .8, .95, 1]; else if (f === 'short') steps = [1, .6, .2, .05, .05, .05, .05, .05, .05, .05]; else steps = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
    let i = 0; const iv = setInterval(() => { pos(steps[i]); i++; if (i >= steps.length) { clearInterval(iv); o.innerHTML = f === 'ok' ? '✅ Kim xuống thấp rồi <b>trở về</b> điện trở cao: tụ tốt.' : f === 'short' ? '⛔ Kim xuống thấp và <b>ở lại</b>: tụ hỏng (chập).' : '⛔ Kim <b>không nhúc nhích</b>: tụ hỏng (hở). '; } }, 300);
    o.textContent = 'Đang đo…';
  };
};
WIDGETS['rf-terminals'] = host => {
  host.innerHTML = '<div class="row"><label>A–B (Ω) <input id="ab" type="number" value="4" step="0.1" style="width:70px"></label><label>B–C (Ω) <input id="bc" type="number" value="12" step="0.1" style="width:70px"></label><label>A–C (Ω) <input id="ac" type="number" value="8" step="0.1" style="width:70px"></label></div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => {
    const m = { 'A–B': +host.querySelector('#ab').value, 'B–C': +host.querySelector('#bc').value, 'A–C': +host.querySelector('#ac').value };
    const e = Object.entries(m).sort((x, y) => x[1] - y[1]); const [lo, mid, hi] = e;
    const L = n => n.split('–'); const sh = a => a.filter(x => L(mid[0]).includes(x));
    const common = L(lo[0]).filter(x => L(mid[0]).includes(x))[0];
    const run = L(lo[0]).filter(x => x !== common)[0], start = L(mid[0]).filter(x => x !== common)[0];
    const sum = Math.abs(hi[1] - (lo[1] + mid[1])) < Math.max(0.5, hi[1] * .15);
    o.innerHTML = `Thấp nhất ${lo[0]} = ${lo[1]} Ω → Common–Run; trung bình ${mid[0]} = ${mid[1]} Ω → Common–Start; cao nhất ${hi[0]} = ${hi[1]} Ω → Start–Run.<br>⇒ <b>Common (C) = ${common}</b>, <b>Run (R) = ${run}</b>, <b>Start (S) = ${start}</b>.<br>${sum ? '✅ Cao nhất ≈ tổng hai giá trị còn lại — số đo hợp lý.' : '⚠ Cao nhất không xấp xỉ tổng hai giá trị kia — kiểm tra lại phép đo hoặc cuộn dây.'}`;
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['rf-pressure-conv'] = host => {
  host.innerHTML = '<label>Áp suất (bar) <input id="b" type="number" value="1.5" step="0.1" style="width:80px"></label><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const b = +host.querySelector('#b').value || 0; o.innerHTML = `${b} bar ≈ <b>${(b * 14.5).toFixed(1)} PSI</b> ≈ <b>${(b * 1.0197).toFixed(2)} kg/cm²</b>` + (b < 0 ? ` ≈ <b>${(-b * 29.53).toFixed(1)} inch Hg chân không</b>` : '') + (b >= 1.3 && b <= 1.7 ? '<br>≈ vùng “áp thấp bình thường” 1,5 bar trong bảng của sổ tay.' : ''); };
  host.querySelector('#b').oninput = draw; draw();
};

// ===== Dạy nghề sửa chữa tủ lạnh & điều hòa dân dụng (dl-*) =====
// ---- trợ giúp chung ----
function dlSvg(host, vb, label) {
  const s = document.createElementNS(RF_NS, 'svg');
  s.setAttribute('viewBox', '0 0 ' + vb[0] + ' ' + vb[1]);
  s.setAttribute('role', 'img'); s.setAttribute('aria-label', label || 'Sơ đồ');
  s.style.cssText = 'width:100%;max-width:' + (vb[0] + 40) + 'px;height:auto;display:block';
  host.appendChild(s); return s;
}
function dlTxt(p, x, y, t, o) { o = o || {}; return rfEl('text', { x, y, 'text-anchor': o.a || 'middle', fill: o.c || 'currentColor', 'font-size': o.s || 11, 'font-weight': o.w || 400 }, p, t); }
function dlBox(p, x, y, w, h, fill, label, o) {
  o = o || {};
  const g = rfEl('g', {}, p);
  rfEl('rect', { x, y, width: w, height: h, rx: o.r === undefined ? 6 : o.r, fill: fill || 'none', stroke: o.stroke || 'none', 'stroke-width': o.sw || 1.5, opacity: o.op || 1, 'stroke-dasharray': o.dash || '' }, g);
  if (label) dlTxt(g, x + w / 2, y + h / 2 + 4, label, { c: o.tc || '#fff', s: o.s || 11, w: o.w });
  return g;
}
function dlLn(p, pts, c, w, o) { o = o || {}; return rfEl('path', { d: 'M' + pts.map(q => q.join(' ')).join(' L'), fill: 'none', stroke: c || 'currentColor', 'stroke-width': w || 2, 'stroke-linejoin': 'round', 'stroke-linecap': 'round', 'stroke-dasharray': o.dash || '', opacity: o.op || 1 }, p); }
// bảng thông tin "bấm bộ phận để xem"
function dlHot(host, o) {
  host.innerHTML = '<div class="info" id="hi" style="min-height:64px">' + (o.intro || 'Bấm vào một bộ phận để xem nhiệm vụ.') + '</div>';
  const svg = dlSvg(host, o.vb, o.label); host.insertBefore(svg, host.firstChild);
  const hi = host.querySelector('#hi'); const els = {};
  if (o.bg) o.bg(svg);
  o.parts.forEach(pt => {
    const g = rfEl('g', { style: 'cursor:pointer', tabindex: 0, role: 'button', 'aria-label': pt.n }, svg);
    if (pt.draw) pt.draw(g); else { rfEl('rect', { x: pt.x, y: pt.y, width: pt.w, height: pt.h, rx: pt.r === undefined ? 8 : pt.r, fill: pt.c || '#64748b', opacity: .92 }, g); dlTxt(g, pt.x + pt.w / 2, pt.y + pt.h / 2 + 4, pt.n, { c: '#fff', s: pt.s || 11, w: 600 }); }
    const hl = rfEl('rect', { x: pt.x - 3, y: pt.y - 3, width: pt.w + 6, height: pt.h + 6, rx: 10, fill: 'none', stroke: '#facc15', 'stroke-width': 3, style: 'display:none', 'pointer-events': 'none' }, g);
    const act = () => { Object.keys(els).forEach(k => els[k].style.display = 'none'); hl.style.display = ''; els[pt.n] = hl; hi.innerHTML = '<b>' + pt.n + '</b><br>' + pt.t; if (o.onPick) o.onPick(pt); };
    g.onclick = act; g.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } };
    els[pt.n] = hl;
  });
  return { svg, info: hi };
}
// máy tính: fields [{id,label,v,min,max,step,opts:[[val,text]]}]
function dlCalc(host, fields, fn) {
  host.innerHTML = '<div class="row">' + fields.map(f => f.opts
    ? '<label>' + f.label + ' <select id="' + f.id + '">' + f.opts.map(o => '<option value="' + o[0] + '"' + (String(o[0]) === String(f.v) ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select></label>'
    : '<label>' + f.label + ' <input id="' + f.id + '" type="number" value="' + f.v + '"' + (f.min !== undefined ? ' min="' + f.min + '"' : '') + (f.max !== undefined ? ' max="' + f.max + '"' : '') + ' step="' + (f.step || 'any') + '" style="width:90px"></label>').join('') + '</div><div class="calc" id="o"></div>';
  const o = host.querySelector('#o');
  const draw = () => { const v = {}; fields.forEach(f => { const e = host.querySelector('#' + f.id); v[f.id] = f.opts ? e.value : (parseFloat(e.value) || 0); }); o.innerHTML = fn(v); };
  host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw();
}
// chọn triệu chứng -> nguyên nhân / cách xử lý
function dlDiag(host, items, ttl) {
  host.innerHTML = '<div class="row"><label>' + (ttl || 'Triệu chứng') + ' <select id="s">' + items.map((x, i) => '<option value="' + i + '">' + x[0] + '</option>').join('') + '</select></label></div><div class="calc" id="o"></div>';
  const draw = () => { const it = items[+host.querySelector('#s').value]; host.querySelector('#o').innerHTML = '<b>Nguyên nhân thường gặp:</b><ul style="margin:4px 0 8px 18px">' + it[1].map(c => '<li>' + c + '</li>').join('') + '</ul><b>Cách kiểm tra / sửa:</b> ' + it[2]; };
  host.querySelector('#s').onchange = draw; draw();
}
// danh sách bước có đánh dấu tick
function dlCheck(host, steps, doneMsg) {
  host.innerHTML = '<div class="calc" id="l"></div><div class="info" id="m" style="margin-top:8px"></div>';
  const l = host.querySelector('#l'), m = host.querySelector('#m');
  l.innerHTML = steps.map((s, i) => '<label style="display:block;margin:4px 0"><input type="checkbox" data-i="' + i + '"> <b>' + (i + 1) + '.</b> ' + s[0] + '</label>').join('');
  const draw = () => { const cs = [...l.querySelectorAll('input')]; const n = cs.filter(c => c.checked).length; const first = cs.findIndex(c => !c.checked); m.innerHTML = n === cs.length ? (doneMsg || '✅ Hoàn tất!') : ('Đã xong ' + n + '/' + cs.length + '. <b>Việc kế tiếp:</b> ' + steps[first][0] + '<br><i>Lưu ý:</i> ' + (steps[first][1] || '')); };
  l.onchange = draw; draw();
}
function dlSatP(g, t) { // áp suất bão hòa tuyệt đối (bar) – xấp xỉ theo bảng 3.2
  const k = { R12: [1.510, 2445], R22: [2.455, 2410], R134a: [1.327, 2684], R410A: [4.007, 2376], NH3: [1.901, 2769] }[g];
  return k[0] * Math.exp(k[1] * (1 / 253.15 - 1 / (t + 273.15)));
}

// ================= Chương 1 =================
WIDGETS['dl-boil'] = host => {
  dlCalc(host, [{ id: 'p', label: 'Áp suất tuyệt đối (bar)', v: 1.013, min: 0.01, max: 20, step: 0.01 }], v => {
    const p = Math.max(v.p, 0.006), mm = p * 750.06;
    const tw = 1730.63 / (8.07131 - Math.log10(mm)) - 233.426; // Antoine, nước 1–100 °C (ngoại suy gần đúng)
    const twc = p > 1.9 ? 1730.63 / (8.14019 - Math.log10(mm)) - 233.426 : tw; // vùng ~100–200 °C hệ số khác
    const t12 = 1 / (1 / 253.15 - Math.log(p / 1.510) / 2445) - 273.15;
    return 'Nước sôi ở ≈ <b>' + (p > 1.9 ? twc : tw).toFixed(0) + ' °C</b> &nbsp;|&nbsp; R12 sôi ở ≈ <b>' + t12.toFixed(0) + ' °C</b> (theo bảng: 1,013 bar → −29,8 °C; 3,1 bar → 0 °C; 12,2 bar → 50 °C).<br>' +
      (p < 0.9 ? 'Áp suất thấp hơn khí quyển → môi chất sôi ở nhiệt độ thấp hơn: đó là nguyên lý làm lạnh ở dàn bay hơi.' : p > 5 ? 'Áp suất cao → phải làm mát ít cũng ngưng tụ: đó là nguyên lý dàn ngưng.' : 'Điểm sôi tăng khi áp suất tăng, giảm khi áp suất giảm.');
  });
};
WIDGETS['dl-cycle1'] = host => {
  const P = [
    { n: 'Máy nén', x: 40, y: 175, w: 100, h: 50, c: '#64748b', t: 'Hút <b>hơi áp thấp, lạnh</b> từ dàn bay hơi, nén lên <b>áp cao, nóng</b> rồi đẩy ra dàn ngưng. Là "trái tim" của hệ thống.' },
    { n: 'Dàn ngưng', x: 230, y: 30, w: 190, h: 44, c: '#f97316', t: 'Hơi áp cao nóng <b>tỏa nhiệt</b> ra không khí và <b>ngưng tụ thành lỏng</b> áp cao.' },
    { n: 'Ống mao / van tiết lưu', x: 520, y: 100, w: 120, h: 44, c: '#a855f7', t: 'Giảm áp đột ngột cho lỏng: áp suất và nhiệt độ hạ xuống, một phần lỏng hóa hơi; duy trì chênh áp giữa hai dàn.' },
    { n: 'Dàn bay hơi', x: 230, y: 300, w: 190, h: 44, c: '#0ea5e9', t: 'Lỏng áp thấp <b>sôi</b>, thu nhiệt của buồng lạnh (làm lạnh); ra khỏi dàn là hơi áp thấp.' }
  ];
  dlHot(host, {
    vb: [680, 380], label: 'Vòng tuần hoàn kín của ga lạnh', intro: 'Bấm một trong 4 thiết bị chính. Mũi tên/chấm cho biết chiều ga đi.', parts: P,
    bg: svg => {
      dlLn(svg, [[140, 200], [190, 200], [190, 52], [230, 52]], '#ef4444', 4);
      dlLn(svg, [[420, 52], [580, 52], [580, 100]], '#f97316', 4);
      dlLn(svg, [[580, 144], [580, 322], [420, 322]], '#38bdf8', 4);
      dlLn(svg, [[230, 322], [90, 322], [90, 225]], '#0ea5e9', 4);
      dlTxt(svg, 160, 118, 'đẩy: hơi cao áp', { c: '#ef4444', a: 'end' }); dlTxt(svg, 600, 80, 'lỏng cao áp', { c: '#f97316', a: 'start' }); dlTxt(svg, 600, 240, 'hỗn hợp lỏng–hơi thấp áp', { c: '#38bdf8', a: 'start' }); dlTxt(svg, 160, 340, 'hút: hơi thấp áp', { c: '#0ea5e9', a: 'end' });
      dlTxt(svg, 325, 360, 'Buồng lạnh (thu nhiệt Q₀)', { s: 12 }); dlTxt(svg, 325, 18, 'Môi trường (thải nhiệt Q_k = Q₀ + N)', { s: 12 });
    }
  });
};

// ================= Chương 2 =================
WIDGETS['dl-press'] = host => dlCalc(host, [
  { id: 'v', label: 'Giá trị', v: 1, step: 'any' },
  { id: 'u', label: 'Đơn vị', v: 'bar', opts: [['bar', 'bar'], ['at', 'at (kG/cm²)'], ['atm', 'atm'], ['mmHg', 'mmHg'], ['psi', 'psi'], ['kPa', 'kPa'], ['MPa', 'MPa']] },
  { id: 'k', label: 'Là', v: 'abs', opts: [['abs', 'áp suất tuyệt đối'], ['gauge', 'áp suất dư (áp kế)'], ['vac', 'chân không (chân không kế)']] }
], v => {
  const f = { bar: 1, at: 0.980665, atm: 1.01325, mmHg: 0.00133322, psi: 0.0689476, kPa: 0.01, MPa: 10 }[v.u];
  let bar = v.v * f; const pk = 1.01325;
  const pa = v.k === 'abs' ? bar : v.k === 'gauge' ? bar + pk : pk - bar;
  const row = Object.entries({ 'bar': 1, 'at': 0.980665, 'atm': 1.01325, 'mmHg': 0.00133322, 'psi': 0.0689476, 'kPa': 0.01, 'MPa': 10 }).map(([n, c]) => n + ' = <b>' + (pa / c).toFixed(n === 'mmHg' ? 0 : 3) + '</b>').join(' · ');
  return 'Áp suất tuyệt đối: ' + row + (pa < 0 ? '<br>⛔ Âm: giá trị không hợp lệ (chân không không thể vượt khí quyển).' : '') + '<br><i>p = p<sub>k</sub> + p<sub>d</sub> (trên khí quyển); p = p<sub>k</sub> − p<sub>ck</sub> (dưới khí quyển), p<sub>k</sub> = 1,013 bar.</i>';
});
WIDGETS['dl-heat'] = host => {
  dlCalc(host, [{ id: 'm', label: 'Khối lượng (kg)', v: 1, min: 0.1, step: 0.1 }, { id: 't1', label: 'Nhiệt độ đầu (°C)', v: -50, step: 1 }, { id: 't2', label: 'Nhiệt độ cuối (°C)', v: 150, step: 1 }], v => {
    const cd = 2.12, cn = 4.186, ch = 1.86, rt = 333, rh = 2256, m = v.m; let t = v.t1, tot = 0; const parts = [];
    const add = (name, q) => { if (q > 0) { parts.push([name, q]); tot += q; } };
    if (v.t2 < v.t1) return 'Nhiệt độ cuối phải ≥ nhiệt độ đầu.';
    if (t < 0) { const e = Math.min(v.t2, 0); add('Nhiệt hiện đá ' + t + '→' + e + ' °C', m * cd * (e - t)); t = e; }
    if (v.t1 <= 0 && v.t2 > 0) { add('Nhiệt ẩn tan đá (0 °C)', m * rt); t = 0; }
    if (v.t2 > 0 && t < 100) { const s = Math.max(t, 0), e = Math.min(v.t2, 100); add('Nhiệt hiện nước ' + s + '→' + e + ' °C', m * cn * (e - s)); t = e; }
    if (v.t2 > 100 && v.t1 <= 100) { add('Nhiệt ẩn hóa hơi (100 °C)', m * rh); t = 100; }
    if (v.t2 > 100) { const s = Math.max(t, 100); add('Nhiệt hiện hơi ' + s + '→' + v.t2 + ' °C', m * ch * (v.t2 - s)); }
    const bar = parts.map(p => '<div style="display:flex;align-items:center;gap:8px;margin:2px 0"><span style="flex:0 0 250px">' + p[0] + '</span><span style="height:10px;border-radius:5px;background:' + (p[0].indexOf('ẩn') >= 0 ? '#ef4444' : '#38bdf8') + ';width:' + Math.max(2, p[1] / tot * 100) + '%"></span><b>' + p[1].toFixed(0) + ' kJ</b></div>').join('');
    return bar + '<b>Tổng: ' + tot.toFixed(0) + ' kJ</b> (với 1 kg, −50 → 150 °C: 3206 kJ). Đỏ = nhiệt ẩn, xanh = nhiệt hiện.';
  });
};
WIDGETS['dl-capacity'] = host => dlCalc(host, [
  { id: 'q', label: 'Năng suất lạnh', v: 12000, step: 'any' },
  { id: 'u', label: 'Đơn vị', v: 'btu', opts: [['btu', 'Btu/h'], ['kw', 'kW'], ['kcal', 'kcal/h'], ['tr', 'tấn lạnh (TR)'], ['w', 'W']] },
  { id: 'l', label: 'Lưu lượng nước (l/s)', v: 26, step: 'any' }, { id: 'd', label: 'Δt nước (K)', v: 5, step: 'any' }
], v => {
  const kw = v.q * { btu: 0.00029307, kw: 1, kcal: 0.0011628, tr: 3.516, w: 0.001 }[v.u];
  return '= <b>' + kw.toFixed(2) + ' kW</b> = ' + (kw / 0.00029307).toFixed(0) + ' Btu/h = ' + (kw / 0.0011628).toFixed(0) + ' kcal/h = ' + (kw / 3.516).toFixed(2) + ' TR ≈ ' + (kw / 2.64).toFixed(1) + ' HP lạnh<br>Q₀ = m·C·Δt = ' + v.l + ' × 4,186 × ' + v.d + ' = <b>' + (v.l * 4.186 * v.d).toFixed(1) + ' kW</b>';
});

// ================= Chương 3 =================
WIDGETS['dl-sat'] = host => {
  const gs = ['R12', 'R22', 'R134a', 'R410A', 'NH3'];
  dlCalc(host, [{ id: 'g', label: 'Ga', v: 'R22', opts: gs.map(g => [g, g]) }, { id: 't', label: 't (°C)', v: 30, step: 1 }, { id: 'p', label: 'Áp kế (bar dư) – để nhận biết ga', v: 10.9, step: 0.1 }], v => {
    const pa = dlSatP(v.g, v.t), pab = v.p + 1.013;
    const m = gs.map(g => [g, Math.abs(dlSatP(g, v.t) - pab) / pab]).sort((a, b) => a[1] - b[1]);
    return v.g + ' ở ' + v.t + ' °C: p bão hòa ≈ <b>' + pa.toFixed(2) + ' bar tuyệt đối</b> (áp kế ≈ ' + (pa - 1.013).toFixed(2) + ' bar).<br>Nhận biết ga: áp kế ' + v.p + ' bar → p tuyệt đối ' + pab.toFixed(2) + ' bar ở ' + v.t + ' °C ⇒ giống nhất <b>' + m[0][0] + '</b> (lệch ' + (m[0][1] * 100).toFixed(0) + '%)' + (m[0][1] > 0.12 ? ' — khá lệch: có thể có khí lạ hoặc bình chưa đủ cả lỏng và hơi.' : '.') + '<br><i>Chỉ đúng khi trong bình có đủ lỏng + hơi. Giá trị xấp xỉ theo bảng 3.2.</i>';
  });
};
WIDGETS['dl-mollier'] = host => {
  host.innerHTML = '<div class="row"><label>t bay hơi <input id="te" type="range" min="-40" max="10" value="-10"> <b id="tev"></b></label><label>t ngưng <input id="tk" type="range" min="25" max="65" value="40"> <b id="tkv"></b></label><label>quá lạnh <input id="sc" type="range" min="0" max="15" value="3"> <b id="scv"></b></label></div><svg viewBox="0 0 640 380" id="sv" style="width:100%;max-width:680px;height:auto;display:block"></svg><div class="calc" id="o"></div>';
  const svg = host.querySelector('#sv'), o = host.querySelector('#o');
  const P = t => dlSatP('R22', t), hf = t => 200 + 1.17 * t + 0.0027 * t * t, hg = t => 405.4 + 0.28 * t - 0.0013 * t * t;
  const X = h => 60 + (h - 150) / (500 - 150) * 540, Y = p => 330 - (Math.log(p) - Math.log(0.5)) / (Math.log(40) - Math.log(0.5)) * 290;
  rfEl('rect', { x: 60, y: 40, width: 540, height: 290, fill: 'none', stroke: 'currentColor', opacity: .3 }, svg);
  [0.5, 1, 2, 5, 10, 20, 40].forEach(p => { rfEl('line', { x1: 60, x2: 600, y1: Y(p), y2: Y(p), stroke: 'currentColor', opacity: .12 }, svg); dlTxt(svg, 54, Y(p) + 4, p, { a: 'end', s: 10 }); });
  [150, 200, 250, 300, 350, 400, 450, 500].forEach(h => dlTxt(svg, X(h), 346, h, { s: 10 }));
  dlTxt(svg, 330, 366, 'h, kJ/kg (R22 – hình minh họa gần đúng)', { s: 11 }); dlTxt(svg, 14, 185, 'p, bar', { s: 11 });
  let dome = []; for (let t = -50; t <= 90; t += 5) dome.push([X(hf(t)), Y(P(t))]); for (let t = 90; t >= -50; t -= 5) dome.push([X(hg(t)), Y(P(t))]);
  rfEl('path', { d: 'M' + dome.map(q => q.join(' ')).join(' L') + 'Z', fill: '#38bdf8', 'fill-opacity': .12, stroke: '#0ea5e9', 'stroke-width': 1.5 }, svg);
  dlTxt(svg, 250, 300, 'vùng hơi ẩm', { c: '#0ea5e9' }); dlTxt(svg, 100, 120, 'lỏng quá lạnh', { s: 10 }); dlTxt(svg, 540, 100, 'hơi quá nhiệt', { s: 10 });
  const cyc = rfEl('path', { fill: 'rgba(239,68,68,.10)', stroke: '#ef4444', 'stroke-width': 2.5, 'stroke-linejoin': 'round' }, svg);
  const lab = []; ['1', '2', '3', '4'].forEach(n => lab.push(dlTxt(svg, 0, 0, n, { w: 700, s: 14, c: '#ef4444' })));
  const draw = () => {
    const te = +host.querySelector('#te').value, tk = +host.querySelector('#tk').value, sc = +host.querySelector('#sc').value;
    host.querySelector('#tev').textContent = te + ' °C'; host.querySelector('#tkv').textContent = tk + ' °C'; host.querySelector('#scv').textContent = sc + ' K';
    if (tk <= te + 10) { o.innerHTML = 'Nhiệt độ ngưng phải cao hơn nhiệt độ bay hơi ít nhất 10 K.'; return; }
    const pe = P(te), pk = P(tk), h1 = hg(te) + 0.7 * 5, T1 = te + 5 + 273.15, ds = 0.7 * T1 * (Math.pow(pk / pe, 0.1525) - 1), h2 = h1 + ds / 0.8, h3 = hf(tk - sc), h4 = h3;
    const pts = [[X(h1), Y(pe)], [X(h2), Y(pk)], [X(hg(tk)), Y(pk)], [X(hf(tk)), Y(pk)], [X(h3), Y(pk)], [X(h4), Y(pe)]];
    cyc.setAttribute('d', 'M' + pts.map(q => q.join(' ')).join(' L') + 'Z');
    [[pts[0], -10, 14], [pts[1], 8, -8], [pts[4], -10, -8], [pts[5], -10, 16]].forEach((a, i) => { lab[i].setAttribute('x', a[0][0] + a[1]); lab[i].setAttribute('y', a[0][1] + a[2]); });
    const q0 = h1 - h4, l = h2 - h1;
    o.innerHTML = 'p<sub>0</sub> = <b>' + pe.toFixed(2) + '</b> bar, p<sub>k</sub> = <b>' + pk.toFixed(2) + '</b> bar, tỉ số nén π = <b>' + (pk / pe).toFixed(1) + '</b>' + (pk / pe > 13 ? ' ⛔ vượt 13: cần nén hai cấp' : '') + '<br>q₀ = h₁−h₄ = <b>' + q0.toFixed(0) + '</b> kJ/kg · l = h₂−h₁ = <b>' + l.toFixed(0) + '</b> kJ/kg · q<sub>k</sub> = ' + (h2 - h3).toFixed(0) + ' kJ/kg · COP = <b>' + (q0 / l).toFixed(2) + '</b><br><i>1→2 nén (đẳng entropy gần đúng, hiệu suất 80%), 2→3 ngưng, 3→4 tiết lưu (đẳng entanpy), 4→1 bay hơi. Kéo thanh: ngưng càng cao/bay hơi càng thấp thì l càng lớn, COP giảm.</i>';
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};

// ================= Chương 4 =================
function dlPoly(pts) { const seg = []; let L = 0; for (let i = 1; i < pts.length; i++) { const d = Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]); seg.push(d); L += d; } return { len: L, at(d) { d = ((d % L) + L) % L; for (let i = 0; i < seg.length; i++) { if (d <= seg[i]) { const f = seg[i] ? d / seg[i] : 0; return [pts[i][0] + (pts[i + 1][0] - pts[i][0]) * f, pts[i][1] + (pts[i + 1][1] - pts[i][1]) * f, i]; } d -= seg[i]; } return pts[0].concat(0); } }; }
function dlLoop(host, fn, ms) { const id = setInterval(fn, ms || 100); new MutationObserver((m, ob) => { if (!document.body.contains(host)) { clearInterval(id); ob.disconnect(); } }).observe(document.body, { childList: true, subtree: true }); return id; }

WIDGETS['dl-fridge-parts'] = host => dlHot(host, {
  vb: [680, 400], label: 'Hệ thống lạnh của tủ lạnh',
  bg: svg => { dlBox(svg, 20, 10, 640, 380, 'none', null, { stroke: 'currentColor', dash: '6 4', op: .35 }); dlTxt(svg, 340, 28, 'Vỏ tủ cách nhiệt (nhìn từ phía sau)', { s: 12 }); },
  parts: [
    { n: 'Dàn bay hơi + ngăn đông', x: 60, y: 50, w: 190, h: 90, c: '#0ea5e9', t: 'Ga lỏng áp thấp sôi, thu nhiệt buồng lạnh. Dàn tấm nhôm hoặc ống xoắn bám tuyết. Thermostat cảm nhiệt gắn vào dàn này.' },
    { n: 'Bầu tích lỏng', x: 270, y: 70, w: 70, h: 50, c: '#38bdf8', t: 'Cuối dàn bay hơi: giữ lỏng lại, chỉ cho hơi về máy nén để tránh va đập thủy lực (khi xả băng, nhiều thực phẩm nóng).' },
    { n: 'Ống hút', x: 360, y: 90, w: 90, h: 30, c: '#7dd3fc', t: 'Dẫn hơi áp thấp về máy nén; thường ghép với ống mao thành hồi nhiệt (tăng năng suất lạnh).', s: 10 },
    { n: 'Máy nén (blốc)', x: 470, y: 250, w: 150, h: 90, c: '#64748b', t: 'Máy nén pittông kín + động cơ trong vỏ hàn, treo trên 4 lò xo. Hút – nén – đẩy ga, có ống làm mát dầu.' },
    { n: 'Dàn ngưng', x: 70, y: 200, w: 260, h: 110, c: '#f97316', t: 'Ống thép Ø5 hàn cánh tản nhiệt hoặc ống gắn vào vỏ tủ (phía sau, hai bên sườn). Hơi nóng thải nhiệt ra và ngưng thành lỏng.' },
    { n: 'Phin sấy lọc', x: 350, y: 290, w: 85, h: 36, c: '#f59e0b', t: 'Giữ ẩm (silicagel/zeolit 4A) và cặn bẩn trước ống mao. Luôn thay mới khi sửa chữa.' },
    { n: 'Ống mao', x: 350, y: 215, w: 90, h: 28, c: '#a855f7', t: 'Ống Ø0,6–2 mm dài 0,5–5 m: tiết lưu lỏng, giữ chênh áp. Dễ tắc ẩm, tắc bẩn, bẹp.', s: 10 },
    { n: 'Rơle KĐ + bảo vệ', x: 490, y: 190, w: 120, h: 36, c: '#8b5cf6', t: 'Cắm trực tiếp vào 3 cọc C–S–R của blốc: khởi động và bảo vệ quá tải.', s: 10 },
    { n: 'Thermostat', x: 300, y: 150, w: 100, h: 30, c: '#14b8a6', t: 'Đóng ngắt máy nén theo nhiệt độ dàn bay hơi nhờ bầu cảm nhiệt + hộp xếp.', s: 10 }
  ]
});
WIDGETS['dl-fridge-path'] = host => {
  host.innerHTML = '<div class="row"><button id="b" type="button">⏸ Tạm dừng</button> <span id="st"></span></div>';
  const svg = dlSvg(host, [680, 360], 'Đường đi của ga trong tủ lạnh'); const st = host.querySelector('#st');
  const pts = [[470, 290], [470, 250], [380, 250], [60, 250], [60, 330], [380, 330], [380, 290], [380, 200], [200, 200], [200, 70], [60, 70], [60, 40], [400, 40], [400, 90], [470, 90], [470, 290]];
  const stages = ['Máy nén: nén', 'Ống đẩy', 'Dàn ngưng: ngưng tụ', 'Phin sấy lọc', 'Ống mao: tiết lưu', 'Dàn bay hơi: sôi', 'Ống hút'];
  dlLn(svg, [[470, 290], [470, 250], [60, 250], [60, 330], [380, 330]], '#f97316', 5, { op: .55 });
  dlLn(svg, [[380, 330], [380, 200], [200, 200]], '#a855f7', 3, { op: .6 });
  dlLn(svg, [[200, 200], [200, 70], [60, 70], [60, 40], [400, 40], [400, 90], [470, 90], [470, 290]], '#0ea5e9', 5, { op: .55 });
  dlBox(svg, 430, 290, 90, 50, '#64748b', 'Máy nén'); dlBox(svg, 40, 235, 150, 28, '#f97316', 'Dàn ngưng (ngoài)', { s: 10 }); dlBox(svg, 340, 300, 80, 24, '#f59e0b', 'Phin lọc', { s: 10 });
  dlBox(svg, 340, 205, 100, 24, '#a855f7', 'Ống mao', { s: 10 }); dlBox(svg, 40, 30, 380, 22, '#0ea5e9', 'Dàn bay hơi trong ngăn đông', { s: 10 });
  dlTxt(svg, 560, 120, 'Hơi áp thấp ⟶ về máy nén', { c: '#0ea5e9', s: 11, a: 'middle' }); dlTxt(svg, 270, 280, 'Lỏng áp cao', { c: '#f97316' }); dlTxt(svg, 300, 190, 'Lỏng → hơi ẩm thấp áp', { c: '#a855f7', a: 'end', s: 10 });
  const poly = dlPoly(pts), dots = []; for (let i = 0; i < 20; i++) dots.push(rfEl('circle', { r: 4, stroke: '#111', 'stroke-width': .5 }, svg));
  let t = 0, run = true;
  const draw = () => {
    if (run) t += 4;
    dots.forEach((c, k) => { const d = t + k * poly.len / dots.length, p = poly.at(d); c.setAttribute('cx', p[0]); c.setAttribute('cy', p[1]); const hot = p[2] <= 2, cold = p[2] >= 8; const gas = !!(p[2] <= 1 || p[2] >= 9 || (p[2] === 2)); c.setAttribute('fill', hot ? '#fb923c' : cold ? '#7dd3fc' : '#c084fc'); c.setAttribute('r', gas ? 3 : 4.6); });
    const head = poly.at(t); st.textContent = 'Đang xem: ' + (head[2] <= 0 ? stages[0] : head[2] <= 1 ? stages[1] : head[2] <= 4 ? stages[2] : head[2] <= 5 ? stages[3] : head[2] <= 7 ? stages[4] : head[2] <= 11 ? stages[5] : stages[6]);
  };
  host.querySelector('#b').onclick = e => { run = !run; e.target.textContent = run ? '⏸ Tạm dừng' : '▶ Tiếp tục'; };
  dlLoop(host, draw, 60); draw();
};
WIDGETS['dl-compressor'] = host => {
  host.innerHTML = '<div class="row"><label>Tốc độ <input id="sp" type="range" min="1" max="10" value="4"></label><label>t bay hơi <input id="te" type="range" min="-30" max="5" value="-10"> <b id="tev"></b></label><label>t ngưng <input id="tk" type="range" min="30" max="60" value="45"> <b id="tkv"></b></label></div>';
  const svg = dlSvg(host, [520, 300], 'Máy nén pittông'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  dlBox(svg, 170, 30, 180, 150, 'none', null, { stroke: 'currentColor', sw: 3, r: 4 });
  dlBox(svg, 100, 30, 70, 40, '#38bdf8', 'Hút', { s: 11 }); dlBox(svg, 350, 30, 70, 40, '#ef4444', 'Đẩy', { s: 11 });
  const vs = rfEl('rect', { x: 200, y: 22, width: 40, height: 10, fill: '#16a34a' }, svg), vd = rfEl('rect', { x: 282, y: 22, width: 40, height: 10, fill: '#94a3b8' }, svg);
  dlTxt(svg, 220, 15, 'clape hút', { s: 10 }); dlTxt(svg, 302, 15, 'clape đẩy', { s: 10 });
  const pist = rfEl('rect', { x: 176, width: 168, height: 24, rx: 3, fill: '#64748b' }, svg), rod = rfEl('line', { x1: 260, x2: 260, stroke: '#64748b', 'stroke-width': 8 }, svg), crank = rfEl('circle', { cx: 260, cy: 260, r: 22, fill: 'none', stroke: 'currentColor', 'stroke-width': 3 }, svg), pin = rfEl('circle', { r: 5, fill: '#facc15', stroke: '#111' }, svg);
  const gas = rfEl('rect', { x: 174, width: 172, fill: '#7dd3fc', opacity: .55 }, svg); svg.insertBefore(gas, pist);
  const lab = dlTxt(svg, 430, 140, '', { a: 'start', s: 12, w: 700 });
  let a = 0;
  const draw = () => {
    const te = +host.querySelector('#te').value, tk = +host.querySelector('#tk').value; host.querySelector('#tev').textContent = te + ' °C'; host.querySelector('#tkv').textContent = tk + ' °C';
    a += +host.querySelector('#sp').value * 0.03;
    const y = 120 + 60 * Math.cos(a); // 60 (điểm chết trên) – 180 (dưới)
    const down = Math.sin(a) < 0; // cos giảm khi sin>0: tính theo đạo hàm của y
    pist.setAttribute('y', y); gas.setAttribute('y', y + 24); gas.setAttribute('height', Math.max(0, 180 - y - 24));
    const px = 260 + 22 * Math.sin(a), py = 260 - 22 * Math.cos(a) * 0; pin.setAttribute('cx', px); pin.setAttribute('cy', 260 + 22 * Math.cos(a));
    rod.setAttribute('y1', y + 24); rod.setAttribute('y2', 260 + 22 * Math.cos(a)); rod.setAttribute('x2', px);
    const moving = -Math.sin(a) * 60; // dy/da: y tăng = đi xuống
    const suction = Math.sin(a) < 0 ? false : true; // sin>0 => y giảm (đi lên)? y = 120+60cos a ; dy/da = -60 sin a ; sin>0 => y giảm => piston đi lên (nén)
    const comp = Math.sin(a) > 0;
    const pr = (pk, pe) => pk / pe;
    const pe = dlSatP('R22', te), pk = dlSatP('R22', tk), pi = pk / pe, lam = 1 - 0.04 * (Math.pow(pi, 1 / 1.18) - 1);
    const frac = (y - 60) / 120; // 0 = đỉnh, 1 = đáy
    const open_d = comp && frac < 0.12, open_s = !comp;
    vs.setAttribute('fill', open_s ? '#16a34a' : '#94a3b8'); vd.setAttribute('fill', open_d ? '#dc2626' : '#94a3b8');
    lab.textContent = open_s ? 'HÚT' : open_d ? 'ĐẨY' : 'NÉN'; lab.setAttribute('fill', open_s ? '#16a34a' : '#dc2626');
    o.innerHTML = 'Pittông đi ' + (comp ? 'lên (nén; clape đẩy mở khi p trong xilanh > p ngưng)' : 'xuống (hút; clape hút mở)') + '.<br>Tỉ số nén π = p<sub>k</sub>/p<sub>0</sub> = ' + pk.toFixed(1) + '/' + pe.toFixed(1) + ' = <b>' + pi.toFixed(1) + '</b>' + (pi > 13 ? ' ⛔ > 13: cần nén hai cấp' : '') + ' · hiệu suất thể tích λ ≈ <b>' + Math.max(0, lam).toFixed(2) + '</b> (giảm khi π tăng; thể tích chết 4%).';
  };
  dlLoop(host, draw, 50); draw();
};
WIDGETS['dl-compressor-test'] = host => {
  host.innerHTML = '<div class="row"><label>Tình trạng blốc <select id="sc"><option value="0">Rất tốt (A=34 bar, kim đứng im)</option><option value="1">Còn tốt (A=26 bar)</option><option value="2">Quá yếu (A=14 bar)</option><option value="3">Clape đẩy đóng muội (kim tụt từ từ về 0)</option><option value="4">Clape đẩy cong vênh (tụt về B rồi nhanh về 0)</option><option value="5">Clape đẩy vênh, hở (tụt nhanh)</option></select></label><button id="go" type="button">▶ Chạy máy</button> <button id="st" type="button">⏹ Dừng máy</button></div>';
  const svg = dlSvg(host, [320, 200], 'Áp kế thử blốc'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  rfEl('circle', { cx: 160, cy: 110, r: 85, fill: 'none', stroke: 'currentColor', 'stroke-width': 3 }, svg);
  for (let b = 0; b <= 40; b += 5) { const an = Math.PI * (1.15 - b / 40 * 1.3); const x1 = 160 + 85 * Math.cos(an), y1 = 110 - 85 * Math.sin(an), x2 = 160 + 70 * Math.cos(an), y2 = 110 - 70 * Math.sin(an); rfEl('line', { x1, y1, x2, y2, stroke: 'currentColor' }, svg); dlTxt(svg, 160 + 58 * Math.cos(an), 110 - 58 * Math.sin(an) + 3, b, { s: 9 }); }
  dlTxt(svg, 160, 145, 'bar', { s: 11 }); const nd = rfEl('line', { x1: 160, y1: 110, stroke: '#ef4444', 'stroke-width': 3, 'stroke-linecap': 'round' }, svg);
  const A = [34, 26, 14, 30, 30, 30]; let p = 0, mode = 'idle', t = 0;
  const show = () => { const an = Math.PI * (1.15 - Math.min(p, 40) / 40 * 1.3); nd.setAttribute('x2', 160 + 72 * Math.cos(an)); nd.setAttribute('y2', 110 - 72 * Math.sin(an)); };
  const verdict = () => { const k = +host.querySelector('#sc').value, a = A[k]; return a > 32 ? 'A > 32 bar: <b>rất tốt</b>' : a >= 21 ? 'A = 21–32 bar: <b>còn tốt</b>' : 'A < 17 bar: <b>quá yếu</b>'; };
  host.querySelector('#go').onclick = () => { mode = 'run'; t = 0; }; host.querySelector('#st').onclick = () => { if (mode === 'run') { mode = 'stop'; t = 0; } };
  host.querySelector('#sc').onchange = () => { mode = 'idle'; p = 0; show(); };
  dlLoop(host, () => {
    const k = +host.querySelector('#sc').value; t++;
    if (mode === 'run') { p += (A[k] - p) * 0.08; if (Math.abs(A[k] - p) < .05) p = A[k]; o.innerHTML = 'Kim tăng nhanh, chậm dần rồi dừng ở A = <b>' + p.toFixed(0) + ' bar</b> — ' + verdict() + '. Bấm "Dừng máy" để thử clape đẩy.'; }
    else if (mode === 'stop') { const rate = [0, 0, 0, 0.12, 0.25, 1.6][k]; if (k === 4 && p > 18) p -= 0.25; else if (k === 4) p = Math.max(0, p - 2.2); else p = Math.max(0, p - rate); o.innerHTML = [ 'Kim đứng im tại A: <b>clape đẩy kín</b>.', 'Kim đứng im tại A: <b>clape đẩy kín</b>.', 'Kim đứng im nhưng A rất thấp: máy yếu (mòn pittông/xilanh).', 'Kim quay từ từ về 0: <b>clape đẩy đóng muội</b>.', 'Kim tụt chậm về B rồi quay nhanh về 0: <b>clape đẩy cong vênh</b>.', 'Kim quay nhanh về 0: <b>clape đẩy vênh, hở, rò</b>.'][k] + ' (p = ' + p.toFixed(0) + ' bar)'; }
    else o.innerHTML = 'Lắp áp kế 40 bar vào đầu đẩy, bịt xì hở, bấm "Chạy máy".';
    show();
  }, 60); show();
};
WIDGETS['dl-capillary'] = host => dlCalc(host, [
  { id: 'm', label: 'Phương pháp', v: '1', opts: [['1', 'PP1: chỉ ống + phin + blốc đo ở đầu đẩy'], ['2', 'PP2: trên hệ hoàn chỉnh (đo cao nhất)']] },
  { id: 'k', label: 'Loại tủ', v: 'a', opts: [['a', 'Tủ 1 sao (−6 °C)'], ['b', 'Tủ 2 sao (−12 °C)'], ['c', 'Tủ 3 sao / kem / bảo quản đông'], ['d', 'Đối lưu tự nhiên (PP2)'], ['e', 'Dàn ngưng quạt (PP2: tủ kem, tủ đá)']] },
  { id: 'q', label: 'Blốc', v: 'g', opts: [['g', 'khỏe (lấy số cao)'], ['w', 'yếu (lấy số thấp)']] }, { id: 'p', label: 'Đo được (psi)', v: 150, step: 1 }
], v => {
  const R = { a: [130, 150], b: [150, 160], c: [160, 180], d: [150, 210], e: [75, 140] }[v.k]; const tgt = v.q === 'g' ? R[1] : R[0];
  const diff = v.p - tgt; let adv;
  if (Math.abs(diff) <= 8) adv = '✅ Đạt: ống mao phù hợp.'; else if (diff < 0) adv = '↘ Trở lực nhỏ: <b>nối thêm ống mao</b> (cắt thử từng ~5 cm).'; else adv = '↗ Trở lực lớn: <b>cắt bớt ống mao</b>.';
  return 'Khoảng tham khảo: <b>' + R[0] + '–' + R[1] + ' psi</b> (≈ ' + (R[0] * 0.0689).toFixed(1) + '–' + (R[1] * 0.0689).toFixed(1) + ' bar). Mục tiêu theo blốc: ~' + tgt + ' psi. Đo ' + v.p + ' psi → ' + adv + '<br><i>Trở lực càng lớn, độ lạnh càng sâu nhưng năng suất lạnh càng nhỏ: chỉ cân vừa đủ. Nên chọn ống mao Ø lớn + dài để tránh tắc.</i>';
});

// ================= Chương 5 =================
WIDGETS['dl-csr'] = host => {
  host.innerHTML = '<div class="row"><button id="nw" type="button">🔀 Đề mới</button> <button id="ab" type="button">Đo A–B</button> <button id="bc" type="button">Đo B–C</button> <button id="ac" type="button">Đo A–C</button> <span class="calc" id="rd" style="min-width:140px">— Ω —</span></div><div class="row"><label>A là <select id="a"></select></label><label>B là <select id="b"></select></label><label>C là <select id="c"></select></label><button id="ck" type="button">Kiểm tra</button></div><div class="info" id="m"></div>';
  const svg = dlSvg(host, [360, 110], 'Ba cọc blốc'); host.insertBefore(svg, host.querySelector('.info'));
  ['A', 'B', 'C'].forEach((n, i) => { rfEl('circle', { cx: 80 + i * 100, cy: 55, r: 22, fill: '#64748b' }, svg); dlTxt(svg, 80 + i * 100, 60, n, { c: '#fff', s: 16, w: 700 }); });
  ['a', 'b', 'c'].forEach(id => { host.querySelector('#' + id).innerHTML = '<option value="?">?</option><option value="C">C – chung</option><option value="R">R – chạy</option><option value="S">S – khởi động</option>'; });
  let ans, ohm; const rr = () => { const p = ['C', 'R', 'S']; for (let i = 2; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } ans = { A: p[0], B: p[1], C: p[2] }; ohm = { R: 8 + Math.floor(Math.random() * 5), S: 14 + Math.floor(Math.random() * 6) }; host.querySelector('#m').textContent = 'Đo ba cặp, rồi xác định mỗi cọc. S–R lớn nhất; C–R nhỏ nhất.'; host.querySelector('#rd').textContent = '— Ω —'; ['a', 'b', 'c'].forEach(id => host.querySelector('#' + id).value = '?'); };
  const meas = (x, y) => { const s = x + y; let val; const set = [ans[x], ans[y]].sort().join(''); if (set === 'CR') val = ohm.R; else if (set === 'CS') val = ohm.S; else val = ohm.R + ohm.S; host.querySelector('#rd').textContent = x + '–' + y + ': ' + val + ' Ω'; };
  host.querySelector('#ab').onclick = () => meas('A', 'B'); host.querySelector('#bc').onclick = () => meas('B', 'C'); host.querySelector('#ac').onclick = () => meas('A', 'C');
  host.querySelector('#nw').onclick = rr;
  host.querySelector('#ck').onclick = () => { const g = { A: host.querySelector('#a').value, B: host.querySelector('#b').value, C: host.querySelector('#c').value }; const ok = ['A', 'B', 'C'].every(k => g[k] === ans[k]); host.querySelector('#m').innerHTML = ok ? '✅ Đúng! Cọc chung C là cọc không thuộc cặp có điện trở lớn nhất (S–R).' : '❌ Chưa đúng. Cặp lớn nhất = S–R ⇒ cọc còn lại là C; từ C, điện trở nhỏ nhất ⇒ R.'; };
  rr();
};
WIDGETS['dl-relay'] = host => {
  host.innerHTML = '<div class="row"><button id="go" type="button">▶ Bấm khởi động</button><label>Thời gian <input id="t" type="range" min="0" max="100" value="0"></label></div>';
  const svg = dlSvg(host, [520, 260], 'Dòng khởi động'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const X = t => 50 + t * 4.2, Y = i => 220 - i * 18;
  rfEl('line', { x1: 50, y1: 220, x2: 480, y2: 220, stroke: 'currentColor' }, svg); rfEl('line', { x1: 50, y1: 30, x2: 50, y2: 220, stroke: 'currentColor' }, svg);
  dlTxt(svg, 270, 245, 'thời gian (≈ 1 s khởi động)', { s: 10 }); dlTxt(svg, 22, 125, 'I (A)', { s: 10 });
  [[9.2, 'B  LRA 9,2'], [2.5, 'C  2,5'], [1.3, 'D  FLA 1,3']].forEach(a => { rfEl('line', { x1: 48, x2: 480, y1: Y(a[0]), y2: Y(a[0]), stroke: 'currentColor', opacity: .15, 'stroke-dasharray': '3 3' }, svg); dlTxt(svg, 482, Y(a[0]) + 4, a[1], { a: 'start', s: 9 }); });
  const n = t => 1 - Math.exp(-t / 22), tc = -22 * Math.log(1 - 0.75); // t tới 75%
  const I = t => { const nn = n(t); return t < tc ? 1.3 + 7.9 * Math.pow(1 - nn, 1.2) + (t < 2 ? 0 : 0) : 1.3 + 0.2 * Math.exp(-(t - tc) / 8); };
  let d = 'M'; for (let t = 0; t <= 100; t += 1) d += (t ? ' L' : '') + X(t) + ' ' + Y(I(t)); rfEl('path', { d, fill: 'none', stroke: '#16a34a', 'stroke-width': 2.5 }, svg);
  const cur = rfEl('circle', { r: 6, fill: '#ef4444' }, svg); const kx = rfEl('line', { y1: 30, y2: 220, stroke: '#facc15', 'stroke-dasharray': '4 3' }, svg);
  const set = t => { host.querySelector('#t').value = t; const nn = n(t), k = t < tc; cur.setAttribute('cx', X(t)); cur.setAttribute('cy', Y(I(t))); kx.setAttribute('x1', X(tc)); kx.setAttribute('x2', X(tc)); o.innerHTML = 'Tốc độ rôto: <b>' + (nn * 100).toFixed(0) + '%</b> · dòng ≈ <b>' + I(t).toFixed(1) + ' A</b> · tiếp điểm K rơle: <b>' + (k ? 'ĐÓNG (cuộn khởi động S có điện)' : 'MỞ (chỉ cuộn làm việc R chạy)') + '</b><br>Khi bấm: lõi rơle bị hút bởi dòng lớn (A: 5 A) → K đóng → dòng ngắn mạch 9,2 A (B) → rôto quay → dòng giảm → tới ~2,5 A (C, 75% tốc độ) K ngắt → dòng làm việc 1,3 A (D).'; };
  let run = null; host.querySelector('#t').oninput = e => set(+e.target.value);
  host.querySelector('#go').onclick = () => { clearInterval(run); let t = 0; run = setInterval(() => { t += 1.5; if (t >= 100) { t = 100; clearInterval(run); } set(t); }, 40); };
  new MutationObserver((m, ob) => { if (!document.body.contains(host)) { clearInterval(run); ob.disconnect(); } }).observe(document.body, { childList: true, subtree: true });
  set(0);
};
WIDGETS['dl-overload'] = host => {
  host.innerHTML = '<div class="row"><label>Dòng so với định mức <input id="k" type="range" min="1" max="5" step="0.1" value="1"> <b id="kv">1,0×</b></label><button id="rs" type="button">Làm nguội</button></div>';
  const svg = dlSvg(host, [460, 200], 'Rơle bảo vệ'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  dlBox(svg, 30, 40, 70, 20, '#f59e0b', 'Dây điện trở', { s: 9 }); const bi = rfEl('path', { fill: 'none', stroke: '#64748b', 'stroke-width': 8, 'stroke-linecap': 'round' }, svg);
  rfEl('line', { x1: 380, y1: 100, x2: 380, y2: 135, stroke: 'currentColor', 'stroke-width': 3 }, svg); rfEl('circle', { cx: 380, cy: 100, r: 5, fill: '#facc15' }, svg); dlTxt(svg, 380, 150, 'tiếp điểm cố định', { s: 10 }); dlTxt(svg, 120, 100, 'thanh lưỡng kim', { s: 10, a: 'start' });
  const tc = rfEl('circle', { cy: 100, r: 6, fill: '#22c55e' }, svg);
  const bar = rfEl('rect', { x: 40, y: 175, height: 10, rx: 4, fill: '#22c55e' }, svg); rfEl('rect', { x: 40, y: 175, width: 360, height: 10, rx: 4, fill: 'none', stroke: 'currentColor', opacity: .3 }, svg);
  dlTxt(svg, 400, 183, '120 °C', { a: 'start', s: 9 });
  let T = 30, trip = false;
  dlLoop(host, () => { const k = +host.querySelector('#k').value; host.querySelector('#kv').textContent = k.toFixed(1).replace('.', ',') + '×'; T += (0.55 * k * k - 0.0095 * (T - 28)) * 2; if (!trip && T >= 105) trip = true; if (trip && T <= 60) trip = false; T = Math.max(28, T);
    const bend = (T - 28) / 100 * 40; bi.setAttribute('d', 'M100 100 Q' + (240) + ' ' + (100 + bend * 0.1) + ' 380 ' + (trip ? 100 - 25 : 100 - Math.min(bend, 14))); tc.setAttribute('cx', 380); tc.setAttribute('cy', trip ? 75 : 100); tc.setAttribute('fill', trip ? '#ef4444' : '#22c55e');
    bar.setAttribute('width', Math.min(360, (T - 28) / 92 * 360)); bar.setAttribute('fill', T > 95 ? '#ef4444' : T > 70 ? '#f59e0b' : '#22c55e');
    o.innerHTML = 'Nhiệt thanh lưỡng kim ≈ <b>' + T.toFixed(0) + ' °C</b> · tiếp điểm: <b>' + (trip ? 'MỞ – ngắt động cơ (nghe tiếng “tách”), vài phút sau nguội tự đóng lại' : 'ĐÓNG – động cơ đang chạy') + '</b>' + (k >= 1.5 && !trip ? '<br>⚠ Dòng cao hơn định mức: nhiệt đang tích lũy, sắp nhảy.' : ''); }, 100);
  host.querySelector('#rs').onclick = () => { T = 40; host.querySelector('#k').value = 1; };
};
WIDGETS['dl-thermo'] = host => {
  host.innerHTML = '<div class="row"><label>Nhiệt độ đặt <input id="sp" type="range" min="-18" max="8" value="4"> <b id="spv"></b></label><label>Vi sai ± <input id="df" type="range" min="1" max="5" step="0.5" value="3"> <b id="dfv"></b></label><label>Nhiệt độ ngoài <input id="am" type="range" min="15" max="38" value="28"> <b id="amv"></b></label></div>';
  const svg = dlSvg(host, [560, 240], 'Nhiệt độ buồng lạnh theo thời gian'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const draw = () => {
    const sp = +host.querySelector('#sp').value, df = +host.querySelector('#df').value, am = +host.querySelector('#am').value;
    host.querySelector('#spv').textContent = sp + ' °C'; host.querySelector('#dfv').textContent = '±' + df + ' K'; host.querySelector('#amv').textContent = am + ' °C';
    svg.innerHTML = ''; const lo = sp - df, hi = sp + df; const Ymin = lo - 4, Ymax = hi + 4; const Y = T => 200 - (T - Ymin) / (Ymax - Ymin) * 170, X = m => 40 + m * 7;
    rfEl('line', { x1: 40, y1: 200, x2: 540, y2: 200, stroke: 'currentColor', opacity: .4 }, svg);
    [[hi, '#ef4444', 'đóng ' + hi + ' °C'], [lo, '#0ea5e9', 'ngắt ' + lo + ' °C']].forEach(a => { rfEl('line', { x1: 40, x2: 540, y1: Y(a[0]), y2: Y(a[0]), stroke: a[1], 'stroke-dasharray': '5 4' }, svg); dlTxt(svg, 542, Y(a[0]) + 4, a[2], { a: 'start', s: 9, c: a[1] }); });
    let T = hi + 1, on = true, d = 'M', onT = 0, trans = 0, tm = 0; const rateOn = -0.45, rateOff = 0.012 * (am - T + 14) + 0.05; const pts = [];
    for (let k = 0; k <= 700; k++) { const m = k * 0.1; const ro = 0.0045 * (am - T) + 0.03; T += on ? rateOn * 0.1 - 0 : ro * 0.1 * 6; if (on && T <= lo) { on = false; trans++; } else if (!on && T >= hi) { on = true; trans++; } if (on) onT++; pts.push([X(m), Y(T)]); }
    rfEl('path', { d: 'M' + pts.map(p => p.join(' ')).join(' L'), fill: 'none', stroke: '#16a34a', 'stroke-width': 2 }, svg);
    for (let m = 0; m <= 70; m += 10) dlTxt(svg, X(m), 216, m + ' ph', { s: 9 });
    const cyc = trans / 2, b = onT / 701; o.innerHTML = 'Trong 70 phút: ~<b>' + cyc.toFixed(1) + '</b> chu kỳ ⇒ <b>' + (cyc / 70 * 60).toFixed(1) + '</b> lần khởi động/giờ · hệ số thời gian làm việc b ≈ <b>' + (b * 100).toFixed(0) + '%</b>.<br>' + (df <= 1.5 ? '⚠ Vi sai nhỏ: số lần đóng ngắt tăng nhiều, tuổi thọ rơle/động cơ giảm.' : 'Vi sai lớn hơn: ít đóng ngắt nhưng nhiệt độ buồng dao động rộng.') + (am >= 34 ? '<br>⚠ Ngoài trời nóng: máy chạy gần như liên tục.' : '');
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['dl-defrost'] = host => {
  host.innerHTML = '<div class="row"><label>Kiểu xả băng <select id="md"><option value="r">Điện trở (máy nén ngừng)</option><option value="h">Hơi nóng (máy nén vẫn chạy)</option></select></label><button id="go" type="button">❄→💧 Bấm xả băng</button></div>';
  const svg = dlSvg(host, [560, 260], 'Xả băng'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const comp = dlBox(svg, 40, 190, 110, 46, '#64748b', 'Máy nén'), cond = dlBox(svg, 40, 40, 150, 36, '#f97316', 'Dàn ngưng'), ev = dlBox(svg, 360, 100, 160, 70, '#0ea5e9', 'Dàn bay hơi (băng)');
  const frost = rfEl('rect', { x: 360, y: 100, width: 160, height: 70, rx: 8, fill: '#e0f2fe', opacity: .85 }, svg); const heater = dlBox(svg, 380, 180, 120, 14, '#ef4444', 'Điện trở', { s: 9 }); heater.style.display = 'none';
  const normal = dlLn(svg, [[150, 200], [220, 200], [220, 58], [190, 58]], '#f97316', 3, { op: .35 }), n2 = dlLn(svg, [[40, 58], [10, 58], [10, 135], [360, 135]], '#a855f7', 3, { op: .35 }), n3 = dlLn(svg, [[520, 135], [540, 135], [540, 214], [150, 214]], '#0ea5e9', 3, { op: .35 });
  const hot = dlLn(svg, [[150, 190], [250, 190], [250, 115], [360, 115]], '#ef4444', 5, { op: 0 }); dlTxt(svg, 300, 100, 'hơi nóng đi tắt vào dàn', { c: '#ef4444', s: 10 });
  dlBox(svg, 255, 170, 60, 24, '#8b5cf6', 'Van ĐT', { s: 10 });
  let st = 'idle', T = -15, ft = 100, cnt = 0;
  host.querySelector('#go').onclick = () => { if (st === 'idle') { st = 'def'; T = -15; ft = 100; } };
  dlLoop(host, () => {
    const hotMode = host.querySelector('#md').value === 'h';
    if (st === 'def') { T += 0.28; ft = Math.max(0, ft - 1.2); if (T >= 8) { st = 'idle'; } }
    else if (T > -15) T -= 0.1;
    frost.setAttribute('opacity', st === 'def' || ft > 0 ? Math.max(0, ft / 100) * .85 : 0); hot.setAttribute('opacity', st === 'def' && hotMode ? 1 : 0); heater.style.display = st === 'def' && !hotMode ? '' : 'none';
    if (st === 'idle' && ft < 100) ft = Math.min(100, ft + 0.15);
    o.innerHTML = 'Trạng thái: <b>' + (st === 'def' ? 'ĐANG XẢ BĂNG' : 'làm lạnh bình thường') + '</b> · nhiệt độ dàn ≈ <b>' + T.toFixed(0) + ' °C</b> · máy nén: <b>' + (st === 'def' && !hotMode ? 'NGỪNG' : 'chạy') + '</b>' + (st === 'def' ? (hotMode ? ' · van điện từ MỞ: hơi nóng từ đầu đẩy vào thẳng dàn bay hơi' : ' · điện trở xả băng có điện') : '') + '<br>Đạt 7–10 °C: rơle nhiệt độ xả băng kết thúc chu kỳ, tủ làm lạnh lại. Nước băng chảy vào khay trên blốc rồi bay hơi.';
  }, 100);
};
WIDGETS['dl-fla'] = host => dlCalc(host, [
  { id: 'n', label: 'Công suất động cơ (W)', v: 120, step: 1 }, { id: 'u', label: 'Điện áp (V)', v: 220, step: 1 }, { id: 'c', label: 'cosφ', v: 0.75, min: 0.6, max: 0.9, step: 0.01 }, { id: 'tk', label: 't ngưng (°C)', v: 40, step: 1 }, { id: 'te', label: 't bay hơi (°C)', v: -10, step: 1 }
], v => {
  const i0 = v.n / (v.u * v.c), i = i0 * (1 + 0.015 * (v.tk - 40) + 0.015 * (v.te + 10));
  return 'I = N/(U·cosφ) = <b>' + i0.toFixed(2) + ' A</b> (ở t<sub>k</sub> 40 °C, t<sub>0</sub> −10 °C).<br>Hiệu chỉnh theo nhiệt độ làm việc (≈ 1,5%/K): <b>' + i.toFixed(2) + ' A</b>. Ngưng tụ cao/bay hơi cao (bỏ nhiều thực phẩm nóng) làm dòng tăng → rơle bảo vệ có thể nhảy.<br><i>Công suất 120 W, 220 V, cosφ 0,75 ⇒ ≈ 0,73 A (sách tính 0,78 A với cosφ=0,70).</i>';
});

// ================= Mạch điện tủ lạnh =================
WIDGETS['dl-fridge-circuit'] = host => {
  host.innerHTML = '<div class="row"><button id="pw" type="button">⏻ Có điện</button><label><input type="checkbox" id="dr"> Cửa mở</label><label>Kiểu xả băng <select id="md"><option value="0">Không có</option><option value="1">Bán tự động – điện trở</option><option value="2">Bán tự động – hơi nóng</option><option value="3">Tự động – điện trở (đồng hồ)</option><option value="4">Tự động – hơi nóng (đồng hồ)</option></select></label><button id="xb" type="button">❄ Bấm nút xả băng</button><button id="ov" type="button">⚠ Gây quá tải</button></div><div class="row"><label>Nhiệt độ đặt <input id="sp" type="range" min="0" max="8" step="0.5" value="4"> <b id="spv"></b></label><span>Nhiệt độ buồng: <b id="tv"></b></span></div>';
  const svg = dlSvg(host, [760, 470], 'Mạch điện tủ lạnh'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const OFF = '#94a3b8', ON = '#22c55e', HOT = '#f97316';
  const L = 40, N = 430; const wires = {};
  const W = (id, pts) => { wires[id] = dlLn(svg, pts, OFF, 3.5); };
  rfEl('line', { x1: 20, y1: L, x2: 740, y2: L, stroke: '#ef4444', 'stroke-width': 3 }, svg); rfEl('line', { x1: 20, y1: N, x2: 740, y2: N, stroke: '#3b82f6', 'stroke-width': 3 }, svg); dlTxt(svg, 14, L - 6, 'L (nóng) 220 V', { a: 'start', s: 10, c: '#ef4444' }); dlTxt(svg, 14, N + 16, 'N (trung tính)', { a: 'start', s: 10, c: '#3b82f6' });
  // cửa & đèn
  W('d1', [[60, L], [60, 140]]); W('d2', [[60, 180], [60, 250]]); W('d3', [[60, 290], [60, N]]);
  const sw = dlBox(svg, 42, 140, 36, 40, '#64748b', 'cửa', { s: 9 }); const lamp = rfEl('circle', { cx: 60, cy: 270, r: 20, fill: '#334155', stroke: '#facc15', 'stroke-width': 2 }, svg); dlTxt(svg, 60, 274, 'Đèn', { s: 10, c: '#fff' });
  // chuỗi thermostat – bảo vệ – bus
  W('t1', [[170, L], [170, 100]]); W('t2', [[170, 140], [170, 190]]); W('t3', [[170, 230], [170, 270], [300, 270]]);
  dlBox(svg, 148, 100, 44, 40, '#14b8a6', 'Thermo', { s: 9 }); dlBox(svg, 148, 190, 44, 40, '#8b5cf6', 'Bảo vệ', { s: 9 });
  W('c1', [[300, 270], [300, 270]]);
  dlBox(svg, 300, 250, 60, 40, '#a855f7', 'Cuộn rơle', { s: 9 }); W('j', [[360, 270], [420, 270]]);
  W('r1', [[420, 270], [420, 310]]); dlBox(svg, 398, 310, 44, 50, '#f97316', 'R', { s: 13 }); W('r2', [[420, 360], [420, N]]);
  W('s1', [[420, 270], [500, 270]]); const kb = dlBox(svg, 500, 250, 50, 40, '#ec4899', 'K', { s: 13 }); W('s2', [[550, 270], [590, 270], [590, 310]]); dlBox(svg, 568, 310, 44, 50, '#eab308', 'S', { s: 13 }); W('s3', [[590, 360], [590, N]]);
  rfEl('ellipse', { cx: 505, cy: 335, rx: 135, ry: 62, fill: 'none', stroke: 'currentColor', 'stroke-dasharray': '5 4', opacity: .4 }, svg); dlTxt(svg, 505, 410, 'Động cơ máy nén (blốc): R + S', { s: 10 });
  // xả băng
  W('x1', [[660, L], [660, 100]]); dlBox(svg, 640, 100, 40, 40, '#0ea5e9', 'XB', { s: 11 });
  W('x2', [[660, 140], [660, 190]]); dlBox(svg, 638, 190, 44, 60, '#ef4444', 'ĐT xả băng', { s: 9 }); W('x3', [[660, 250], [660, N]]);
  W('v1', [[660, 160], [720, 160], [720, 190]]); dlBox(svg, 700, 190, 40, 60, '#a855f7', 'Van ĐT', { s: 9 }); W('v2', [[720, 250], [720, N]]);
  const c = { th: false, ov: false, ovT: 0, run: false, start: 0, defr: 0, T: 9, pw: true, ev: -14, timer: 0 };
  const set = (k, col) => { wires[k].setAttribute('stroke', col); };
  const draw = () => {
    const door = host.querySelector('#dr').checked, md = +host.querySelector('#md').value, sp = +host.querySelector('#sp').value; host.querySelector('#spv').textContent = sp.toFixed(1).replace('.', ',') + ' °C';
    if (c.pw) {
      if (c.T >= sp + 3) c.th = true; else if (c.T <= sp - 3) c.th = false;
      if (md >= 3) { c.timer++; if (c.timer > 700 && !c.defr) { c.defr = 1; c.timer = 0; } }
      if (c.defr) { c.ev += 0.26; if (c.ev >= 8) { c.defr = 0; c.ev = -14; } }
      const resistor = c.defr && (md === 1 || md === 3), hotg = c.defr && (md === 2 || md === 4);
      if (c.ovT > 0) c.ovT--; c.ov = c.ovT > 0;
      const want = c.th && !c.ov && !resistor; const was = c.run; c.run = want; if (c.run && !was) c.start = 12; if (c.start > 0) c.start--;
      c.T += c.run ? -0.035 : 0.012 + (door ? 0.035 : 0); c.T = Math.max(-6, Math.min(16, c.T));
      c.resistor = resistor; c.hotg = hotg;
    } else { c.run = false; c.start = 0; c.resistor = c.hotg = false; c.T = Math.min(16, c.T + 0.01); }
    const pw = c.pw, ds = pw && door, chain = pw && c.th, prot = chain && !c.ov, mot = prot && !c.resistor;
    const K = mot && c.start > 0;
    set('d1', pw ? (door ? ON : OFF) : OFF); set('d2', ds ? ON : OFF); set('d3', ds ? ON : OFF); lamp.setAttribute('fill', ds ? '#facc15' : '#334155');
    set('t1', chain ? ON : OFF); set('t2', prot ? ON : OFF); set('t3', prot ? ON : OFF); set('j', mot ? ON : OFF); set('r1', mot ? ON : OFF); set('r2', mot ? ON : OFF);
    set('s1', K ? HOT : OFF); set('s2', K ? HOT : OFF); set('s3', K ? HOT : OFF);
    const xbOn = pw && md > 0 && !!c.defr; set('x1', xbOn ? ON : OFF); set('x2', c.resistor ? HOT : OFF); set('x3', c.resistor ? HOT : OFF); set('v1', c.hotg ? HOT : OFF); set('v2', c.hotg ? HOT : OFF);
    kb.setAttribute('opacity', K ? 1 : .45);
    host.querySelector('#tv').textContent = c.T.toFixed(1).replace('.', ',') + ' °C'; host.querySelector('#pw').textContent = c.pw ? '⏻ Có điện (bấm để cắt)' : '⏻ MẤT ĐIỆN (bấm để cấp điện)';
    const phase = !pw ? 'mất điện' : c.ov ? 'rơle bảo vệ đã nhảy – chờ nguội' : c.resistor ? 'đang xả băng bằng điện trở: máy nén ngừng' : c.run ? (c.start > 0 ? 'KHỞI ĐỘNG (rơle đóng K; I ≈ 9,2 A)' : 'ĐANG CHẠY (K mở; I ≈ 1,3 A)') : 'thermostat ngắt – máy nghỉ';
    o.innerHTML = 'Trạng thái: <b>' + phase + '</b>' + (ds ? ' · đèn sáng' : '') + (c.hotg ? ' · van điện từ mở: hơi nóng vào dàn bay hơi (máy nén vẫn chạy)' : '') + (c.defr ? ' · nhiệt độ dàn ≈ ' + c.ev.toFixed(0) + ' °C (kết thúc ở 7–10 °C)' : '') + '<br>Thermostat: đóng khi nhiệt độ ≥ ' + (sp + 3).toFixed(1) + ', ngắt khi ≤ ' + (sp - 3).toFixed(1) + ' (vi sai 6 K). Dây xanh = có điện; cam = dòng lớn/nóng; xám = không có điện.';
  };
  host.querySelector('#pw').onclick = () => { c.pw = !c.pw; };
  host.querySelector('#ov').onclick = () => { c.ovT = 80; };
  host.querySelector('#xb').onclick = () => { const md = +host.querySelector('#md').value; if (md > 0 && !c.defr) { c.defr = 1; c.ev = -14; } };
  host.querySelector('#md').onchange = () => { c.defr = 0; c.ev = -14; c.timer = 0; };
  dlLoop(host, draw, 100); draw();
};

// ================= Chương 6 =================
WIDGETS['dl-onoff'] = host => {
  host.innerHTML = '<div class="row"><label>Thời gian chạy <input id="a" type="range" min="2" max="10" value="4"> <b id="av"></b> ph</label><label>Thời gian nghỉ <input id="b" type="range" min="4" max="30" value="12"> <b id="bv"></b> ph</label></div>';
  const svg = dlSvg(host, [600, 250], 'Áp suất trong chu kỳ'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const draw = () => {
    const a = +host.querySelector('#a').value, b = +host.querySelector('#b').value; host.querySelector('#av').textContent = a; host.querySelector('#bv').textContent = b; svg.innerHTML = '';
    const T = 2 * (a + b), X = m => 40 + m / T * 540, Y = p => 210 - p * 22; rfEl('line', { x1: 40, y1: 210, x2: 580, y2: 210, stroke: 'currentColor' }, svg);
    [0, 2, 4, 6, 8].forEach(p => { dlTxt(svg, 34, Y(p) + 4, p, { a: 'end', s: 9 }); rfEl('line', { x1: 40, x2: 580, y1: Y(p), y2: Y(p), stroke: 'currentColor', opacity: .1 }, svg); });
    dlTxt(svg, 12, 120, 'p (bar tuyệt đối)', { s: 9 }); let pk = 4.9, pe = 4.9, dk = [], de = [], run = true, tm = 0;
    for (let k = 0; k <= 400; k++) { const m = k / 400 * T; const ph = m % (a + b); const on = ph < a; const tgtK = on ? 7.7 : 4.9, tgtE = on ? 1.4 : 4.9; pk += (tgtK - pk) * (on ? 0.12 : 0.15) * (T / 400); pe += (tgtE - pe) * (on ? 0.35 : 0.2) * (T / 400); dk.push([X(m), Y(pk)]); de.push([X(m), Y(pe)]); if (on && (m - ph) < 0.0001) { } }
    rfEl('path', { d: 'M' + dk.map(p => p.join(' ')).join(' L'), fill: 'none', stroke: '#ef4444', 'stroke-width': 2.5 }, svg); rfEl('path', { d: 'M' + de.map(p => p.join(' ')).join(' L'), fill: 'none', stroke: '#0ea5e9', 'stroke-width': 2.5 }, svg);
    for (let c = 0; c < 2; c++) { rfEl('rect', { x: X(c * (a + b)), y: 222, width: X(c * (a + b) + a) - X(c * (a + b)), height: 10, fill: '#22c55e' }, svg); rfEl('rect', { x: X(c * (a + b) + a), y: 222, width: X((c + 1) * (a + b)) - X(c * (a + b) + a), height: 10, fill: '#94a3b8' }, svg); }
    dlTxt(svg, 80, 244, 'chạy (xanh)', { s: 9 }); dlTxt(svg, 240, 244, 'nghỉ (xám) – áp suất cân bằng ≈ 4,9 bar', { s: 9 }); dlTxt(svg, 470, 60, 'p ngưng tụ', { c: '#ef4444', s: 11 }); dlTxt(svg, 470, 185, 'p bay hơi', { c: '#0ea5e9', s: 11 });
    o.innerHTML = 'b = ' + a + '/' + (a + b) + ' = <b>' + (a / (a + b)).toFixed(2) + '</b> · ' + (60 / (a + b)).toFixed(1) + ' lần khởi động/giờ.' + (b < 4 ? '<br>⛔ Nghỉ dưới 3–5 phút: áp suất chưa cân bằng, khởi động lại nặng → dễ cháy blốc.' : '<br>Sau khi dừng cần 3–5 phút để cân bằng áp suất (R12: ~4,9 bar ở 23 °C) rồi mới khởi động lại nhẹ nhàng.');
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['dl-duty'] = host => dlCalc(host, [
  { id: 'a', label: 'Chạy (phút)', v: 4, step: 0.5 }, { id: 'b', label: 'Nghỉ (phút)', v: 8, step: 0.5 }, { id: 'w', label: 'Công suất điện (W)', v: 100, step: 1 }, { id: 'g', label: 'Giá (đ/kWh)', v: 2500, step: 10 }
], v => {
  const b = v.a / (v.a + v.b || 1), kwh = v.w / 1000 * 24 * b;
  return 'b = ' + v.a + '/(' + v.a + '+' + v.b + ') = <b>' + (b * 100).toFixed(0) + '%</b> → mỗi giờ chạy ≈ <b>' + (60 * b).toFixed(0) + ' phút</b>, ' + (60 / (v.a + v.b || 1)).toFixed(1) + ' lần khởi động/giờ.<br>Điện ≈ <b>' + kwh.toFixed(2) + ' kWh/ngày</b> ≈ ' + (kwh * 30).toFixed(0) + ' kWh/tháng ≈ <b>' + (kwh * 30 * v.g).toLocaleString('vi-VN') + ' đ/tháng</b>.<br><i>Mỗi +1 °C ngưng tụ hoặc −1 °C bay hơi, điện tăng thêm ~1,5%.</i>';
});

// ================= Chương 7 =================
WIDGETS['dl-placement'] = host => dlCalc(host, [
  { id: 'a', label: 'Nhiệt độ phòng (°C)', v: 30, step: 1 }, { id: 'g', label: 'Khoảng hở sau/bên dàn ngưng (cm)', v: 10, min: 0, step: 1 },
  { id: 'o', label: 'Vật cản / giấy bao quanh dàn', v: 'n', opts: [['n', 'không'], ['y', 'có']] }, { id: 's', label: 'Nguồn nóng gần tủ (bếp, nắng)', v: 'n', opts: [['n', 'không'], ['y', 'có']] }
], v => {
  const tk = v.a + 15 + Math.max(0, 10 - v.g) * 0.9 + (v.o === 'y' ? 4 : 0) + (v.s === 'y' ? 4 : 0);
  const dp = tk - (v.a + 15), dE = dp * 1.5;
  return 'Nhiệt độ ngưng tụ ước tính ≈ <b>' + tk.toFixed(0) + ' °C</b> (chuẩn: ' + (v.a + 15) + ' °C). Điện năng tăng ≈ <b>' + dE.toFixed(0) + '%</b>.<br>' + (dp <= 0.5 ? '✅ Vị trí tốt: dàn ngưng thoáng, đối lưu theo hiệu ứng ống khói.' : '⚠ Dàn ngưng thoát nhiệt kém: máy nén nặng nề, năng suất lạnh giảm. Chừa ≥ 10 cm quanh tủ, bỏ vật cản, tránh bếp/nắng.');
});

// ================= Chương 8 =================
WIDGETS['dl-fridge-diag'] = host => dlDiag(host, [
  ['Tủ không chạy', ['Nổ cầu chì; điện áp thấp (lệch > 10%)', 'Rơle bảo vệ / nhiệt độ / khởi động hỏng', 'Dây điện đứt; tuột dây vào máy nén; đồng hồ xả băng', 'Máy nén hỏng'], 'Kiểm tra điện áp; thử từng thiết bị bằng đèn thử, thay thiết bị tốt vào thử; thay cầu chì; dùng ổn áp.'],
  ['Buồng lạnh quá nóng, chạy liên tục', ['Mở cửa nhiều; thực phẩm nóng; nhồi bịt kín đối lưu', 'Đệm cửa không kín; đèn sáng khi đóng cửa', 'Thiếu ga; clape hút máy nén hở; dàn ngưng bị cản/bẩn', 'Môi trường ≥ 33 °C; thermostat hỏng'], 'Nhắc người dùng; ke lại tủ bằng nivô; chỉnh/thay đệm cửa; vệ sinh dàn ngưng; hút chân không nạp lại ga; thay blốc / thermostat.'],
  ['Ngăn lạnh quá lạnh', ['Cửa gió ngăn lạnh đặt tối đa', 'Bộ chỉnh cửa gió hỏng', 'Điện trở sưởi cửa gió hỏng'], 'Chỉnh cửa gió về vị trí ít lạnh; loại bỏ trở ngại; thay bộ chỉnh / điện trở.'],
  ['Ngăn đông quá lạnh', ['Núm thermostat đặt quá lạnh', 'Đầu cảm nhiệt gắn sai vị trí / lỏng', 'Thermostat hỏng hoặc gãy ống mao'], 'Xoay núm về ít lạnh; cố định đầu cảm nhiệt chặt và đúng vị trí; thay thermostat.'],
  ['Chạy rất ồn', ['Tủ kê không vững', 'Ống chạm vào tủ gây rung', 'Khay hứng nước ngưng lỏng; cánh quạt chạm vỏ', 'Máy nén không có chống rung tốt'], 'Kê lại bằng nivô; uốn ống / xốp ép sát; bắt lại khay; kiểm tra quạt; kiểm tra bệ đỡ chống rung.'],
  ['Rơle quá tải nhảy liên tục', ['Rơle quá tải yếu hoặc hỏng', 'Điện áp thấp', 'Máy nén hỏng, thiếu dầu, nạp thừa ga'], 'Đo dòng khởi động và dòng làm việc; nếu bình thường thì thay rơle quá tải (cùng đặc tính).'],
  ['Mô tơ máy nén bị kẹt', ['Gãy lá van', 'Thiếu dầu', 'Máy nén quá nóng'], 'Khởi động bằng tụ/áp cao (PP khởi động blốc bó); bổ sung dầu; nếu không chạy phải thay blốc.'],
  ['Băng tuyết dày trên dàn lạnh', ['Đồng hồ xả băng hỏng', 'Điện trở xả băng hỏng', 'Thermostat xả băng hỏng', 'Đệm cửa không kín'], 'Kiểm tra bằng đèn thử; thay đồng hồ / điện trở / thermostat; thay đệm cửa.'],
  ['Ngăn đông lạnh xuống rồi lại ấm lên', ['Ẩm trong hệ thống (tắc ẩm)'], 'Hút chân không, nạp lại ga, lắp phin sấy lọc trên đường lỏng để loại hết ẩm. Không dùng metanol.'],
  ['Năng suất lạnh giảm dần', ['Sáp / cặn bẩn tích tụ trong ống mao'], 'Dùng dụng cụ thông ống mao (R141b) hoặc thay ống mao mới và dầu không sáp.'],
  ['Chạy liên tục, không lạnh, dàn ngưng không nóng', ['Mất ga hoàn toàn', 'Tắc bẩn hoàn toàn phin sấy lọc'], 'Tìm rò rỉ, hút chân không, nạp ga; hơ nóng phin và gõ nhẹ để thông, nếu không được phải thay.'],
  ['Vỏ tủ lạnh, đổ mồ hôi, chạy liên tục', ['Cách nhiệt bị ẩm / đóng băng do vỏ hở hơi'], 'Ngắt điện cho tan đá, sấy khô cách nhiệt, bịt kín chỗ hở bằng silicon rồi lắp lại.']
], 'Triệu chứng của tủ');
WIDGETS['dl-test-wire'] = host => dlCalc(host, [
  { id: 'c', label: 'Động cơ có tụ khởi động?', v: 'n', opts: [['n', 'Không (tủ lạnh dùng rơle dòng)'], ['y', 'Có tụ khởi động']] }, { id: 's', label: 'Đã nối tắt tụ qua 20 kΩ?', v: 'y', opts: [['y', 'rồi'], ['n', 'chưa']] }, { id: 't', label: 'Giữ nút (giây)', v: 1, step: 0.5, min: 0.5, max: 6 }, { id: 'g', label: 'Đã nối đất vỏ blốc?', v: 'y', opts: [['y', 'rồi'], ['n', 'chưa']] }
], v => {
  const bad = []; if (v.t > 2) bad.push('⛔ Giữ nút quá 2 giây: nếu động cơ không khởi động, cả hai cuộn có thể cháy.'); if (v.c === 'y' && v.s === 'n') bad.push('⛔ Chưa phóng điện tụ: có thể bị điện giật. Nối tắt hai đầu tụ qua điện trở 20 kΩ (hoặc bút thử điện).'); if (v.g === 'n') bad.push('⛔ Chưa nối đất cho động cơ khi thử.');
  return 'Dây thử: phích cắm → cầu chì → nút bấm → đồng thời cấp điện cho cuộn R và S (bấm nút 5). ' + (bad.length ? bad.join('<br>') : '✅ An toàn: động cơ thường khởi động trong ≈ 0,5 giây. Nếu không khởi động: kiểm tra cuộn dây / kẹt cơ.') + '<br><i>Tất cả đầu dây thử phải bọc cách điện bằng nhựa hoặc ống cao su.</i>';
});
WIDGETS['dl-manifold'] = host => {
  host.innerHTML = '<div class="row"><label>Van L (hạ áp) <select id="l"><option value="0">đóng</option><option value="1">mở</option></select></label><label>Van H (cao áp) <select id="h"><option value="0">đóng</option><option value="1">mở</option></select></label><label>Đầu C nối với <select id="c"><option value="p">bơm chân không</option><option value="g">chai ga (hơi)</option></select></label></div>';
  const svg = dlSvg(host, [560, 270], 'Bộ nạp 3 dây'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  rfEl('rect', { x: 170, y: 130, width: 220, height: 36, rx: 6, fill: '#64748b' }, svg);
  rfEl('circle', { cx: 170, cy: 75, r: 40, fill: 'none', stroke: '#0ea5e9', 'stroke-width': 5 }, svg); rfEl('circle', { cx: 390, cy: 75, r: 40, fill: 'none', stroke: '#ef4444', 'stroke-width': 5 }, svg);
  dlTxt(svg, 170, 22, 'LO (hạ áp)', { c: '#0ea5e9' }); dlTxt(svg, 390, 22, 'HI (cao áp)', { c: '#ef4444' });
  const vl = rfEl('circle', { cx: 210, cy: 148, r: 13 }, svg), vh = rfEl('circle', { cx: 350, cy: 148, r: 13 }, svg); dlTxt(svg, 210, 190, 'van L', {}); dlTxt(svg, 350, 190, 'van H', {});
  [[170, '#0ea5e9', 'đường hút'], [280, '#eab308', 'C (giữa)'], [390, '#ef4444', 'đường đẩy']].forEach(a => { rfEl('line', { x1: a[0], y1: 166, x2: a[0], y2: 222, stroke: a[1], 'stroke-width': 6 }, svg); dlTxt(svg, a[0], 240, a[2], { s: 11 }); });
  const needle = [rfEl('line', { x1: 170, y1: 75, x2: 170, y2: 45, stroke: '#0ea5e9', 'stroke-width': 3 }, svg), rfEl('line', { x1: 390, y1: 75, x2: 390, y2: 45, stroke: '#ef4444', 'stroke-width': 3 }, svg)];
  const draw = () => {
    const l = +host.querySelector('#l').value, h = +host.querySelector('#h').value, c = host.querySelector('#c').value;
    vl.setAttribute('fill', l ? '#22c55e' : '#94a3b8'); vh.setAttribute('fill', h ? '#22c55e' : '#94a3b8');
    needle[0].setAttribute('x2', 170 + (l ? 22 : 0)); needle[1].setAttribute('x2', 390 + (h ? -22 : 0));
    let m;
    if (!l && !h) m = '<b>Đo áp suất</b>: cả hai van đóng, ga chỉ tới đồng hồ. Mở nhích van dịch vụ 1/8–1/4 vòng để đọc áp hút trên LO và áp đẩy trên HI.';
    else if (l && h && c === 'p') m = '<b>Hút chân không</b>: C nối bơm, mở cả L và H (và các van trên hệ). Hút ≈ 1 giờ, tráng ga 2 lần trước khi nạp.';
    else if (l && !h && c === 'g') m = '<b>Nạp ga/dầu phía hút</b>: mở van L, mở dần van chai ga. Nạp HƠI (không nạp lỏng vào đầu hút tủ lạnh).';
    else if (!l && h && c === 'g') m = '<b>Nạp ga phía đẩy</b>: nạp lỏng (quay ngược chai), hút chân không toàn hệ trước, đóng L; chỉ dùng khi máy NGỪNG.';
    else if (l && h && c === 'g') m = '⚠ Mở cả hai van với C nối chai ga: ga đi thẳng từ đường đẩy sang đường hút → có thể trào lỏng về máy nén. Không nên.';
    else if (l && !h && c === 'p') m = 'Hút chân không chỉ phía hút (nhiều bộ nạp 3 dây chỉ dùng phía hạ áp cho tủ gia đình).';
    else m = 'Chưa phải thao tác chuẩn; hãy chọn một trong 4 dịch vụ cơ bản.';
    o.innerHTML = m;
  };
  host.querySelectorAll('select').forEach(s => s.onchange = draw); draw();
};

// ================= Chương 9 =================
WIDGETS['dl-ac-cycle'] = host => {
  const ret = dlHot(host, {
    vb: [700, 400], label: 'Chu trình lạnh máy điều hòa 2 cụm', intro: 'Bấm một bộ phận để xem chức năng. Vách giữa tách trong nhà và ngoài trời.',
    bg: svg => {
      rfEl('rect', { x: 20, y: 20, width: 300, height: 360, rx: 10, fill: '#38bdf8', 'fill-opacity': .08, stroke: '#38bdf8', 'stroke-dasharray': '5 4' }, svg); rfEl('rect', { x: 380, y: 20, width: 300, height: 360, rx: 10, fill: '#f97316', 'fill-opacity': .08, stroke: '#f97316', 'stroke-dasharray': '5 4' }, svg);
      dlTxt(svg, 170, 40, 'TRONG NHÀ (cụm bay hơi)', { c: '#0ea5e9', s: 12, w: 700 }); dlTxt(svg, 530, 40, 'NGOÀI TRỜI (cụm ngưng tụ)', { c: '#ea580c', s: 12, w: 700 });
      dlLn(svg, [[470, 300], [470, 340], [320, 340], [220, 340], [220, 300]], '#0ea5e9', 5, { op: .5 }); dlLn(svg, [[540, 300], [600, 300], [600, 120], [540, 120]], '#ef4444', 5, { op: .5 });
      dlLn(svg, [[420, 120], [400, 120], [400, 220], [320, 220], [320, 110], [200, 110]], '#f97316', 3, { op: .5 });
    },
    parts: [
      { n: 'Dàn bay hơi', x: 70, y: 190, w: 160, h: 50, c: '#0ea5e9', t: 'Ga sôi ở ~5 °C, thu nhiệt và hơi ẩm của không khí phòng; quạt lồng sóc thổi gió lạnh vào phòng.' },
      { n: 'Quạt lồng sóc', x: 60, y: 90, w: 120, h: 36, c: '#38bdf8', t: 'Quạt ngang dòng hút gió phòng qua phin lọc và dàn lạnh, thổi vào phòng.', s: 10 },
      { n: 'Máy nén', x: 470, y: 270, w: 90, h: 50, c: '#64748b', t: 'Rôto/xoắn ốc: hút hơi, nén lên áp cao, đẩy vào dàn ngưng.' },
      { n: 'Dàn ngưng', x: 420, y: 90, w: 130, h: 60, c: '#f97316', t: 'Hơi nóng thải nhiệt cho không khí ngoài trời và ngưng thành lỏng; quạt dàn ngưng thổi gió.' },
      { n: 'Phin lọc + ống mao', x: 380, y: 190, w: 140, h: 30, c: '#a855f7', t: 'Phin lọc cặn bẩn rồi ống mao giảm áp, phun lỏng vào dàn bay hơi (ống mao thường đặt ở dàn nóng).', s: 10 }
    ]
  });
  const pts = [[470, 300], [470, 340], [220, 340], [220, 300], [220, 215], [230, 215], [320, 215], [320, 110], [420, 110], [550, 120], [600, 120], [600, 300], [560, 300]]; // gần đúng
  const poly = dlPoly([[515, 270], [600, 270], [600, 120], [480, 120], [400, 120], [400, 205], [320, 205], [230, 215], [150, 215], [150, 300], [220, 340], [470, 340], [470, 300], [515, 300], [515, 270]]);
  const dots = []; for (let i = 0; i < 22; i++) dots.push(rfEl('circle', { r: 3.5, stroke: '#111', 'stroke-width': .4, 'pointer-events': 'none' }, ret.svg));
  let t = 0; dlLoop(host, () => { t += 4; dots.forEach((c, k) => { const p = poly.at(t + k * poly.len / dots.length); c.setAttribute('cx', p[0]); c.setAttribute('cy', p[1]); const i = p[2]; c.setAttribute('fill', i <= 1 ? '#ef4444' : i <= 3 ? '#fb923c' : i <= 5 ? '#c084fc' : '#7dd3fc'); c.setAttribute('r', (i <= 2 || i >= 9) ? 3 : 4.4); }); }, 60);
};
WIDGETS['dl-ac-window'] = host => {
  const ret = dlHot(host, {
    vb: [700, 330], label: 'Máy điều hòa cửa sổ (mặt cắt ngang)',
    bg: svg => { rfEl('rect', { x: 20, y: 40, width: 300, height: 220, fill: '#38bdf8', 'fill-opacity': .08 }, svg); rfEl('rect', { x: 340, y: 40, width: 340, height: 220, fill: '#f97316', 'fill-opacity': .08 }, svg); rfEl('rect', { x: 316, y: 20, width: 10, height: 260, fill: '#64748b' }, svg); dlTxt(svg, 170, 30, 'TRONG PHÒNG', { c: '#0ea5e9', w: 700 }); dlTxt(svg, 510, 30, 'NGOÀI TRỜI', { c: '#ea580c', w: 700 }); dlTxt(svg, 321, 295, 'vách cách nhiệt 5 mm', { s: 10 }); dlTxt(svg, 170, 310, '← gió lạnh vào phòng · gió phòng hút vào ←', { s: 10 }); dlTxt(svg, 510, 310, 'gió làm mát vào bên sườn → thổi nóng ra mặt sau', { s: 10 }); },
    parts: [
      { n: 'Phin lọc bụi', x: 30, y: 150, w: 40, h: 90, c: '#94a3b8', t: 'Lọc bụi gió phòng hút vào dàn lạnh. Vệ sinh 2 tuần/lần.', s: 9 },
      { n: 'Dàn bay hơi', x: 80, y: 130, w: 70, h: 110, c: '#0ea5e9', t: 'Làm lạnh và khử ẩm không khí phòng, luôn ướt nước ngưng.', s: 10 },
      { n: 'Quạt ly tâm', x: 170, y: 140, w: 70, h: 90, c: '#38bdf8', t: 'Hút gió qua dàn lạnh rồi thổi ra cửa gió phía trước.', s: 10 },
      { n: 'Cửa gió tươi', x: 250, y: 60, w: 55, h: 30, c: '#22c55e', t: 'Núm điều chỉnh đóng/mở lấy gió tươi (máy 2 cụm không có).', s: 9 },
      { n: 'Máy nén', x: 350, y: 150, w: 90, h: 100, c: '#64748b', t: 'Máy nén rôto đặt ngay trong vỏ nên máy cửa sổ khá ồn.' },
      { n: 'Dàn ngưng', x: 460, y: 80, w: 70, h: 160, c: '#f97316', t: 'Nhả nhiệt cho gió lấy từ chớp gió hai bên sườn và phía trên.', s: 10 },
      { n: 'Quạt hướng trục', x: 550, y: 110, w: 100, h: 90, c: '#fb923c', t: 'Quạt chung trục động cơ, thổi gió nóng ra mặt sau; dùng đồng thời cho quạt ly tâm.', s: 10 },
      { n: 'Bảng điều khiển', x: 80, y: 60, w: 130, h: 36, c: '#a855f7', t: 'Núm chính 7 nấc: 1 quạt yếu, 2 quạt TB, 3 quạt mạnh, 4 lạnh yếu, 5 lạnh TB, 6 lạnh mạnh, 7 tắt. Núm thermostat chỉnh nhiệt độ phòng.', s: 10 }
    ]
  });
};
WIDGETS['dl-reversing-valve'] = host => {
  host.innerHTML = '<div class="row"><label>Chế độ <select id="m"><option value="c">Làm lạnh</option><option value="h">Sưởi ấm</option></select></label><span id="s"></span></div>';
  const svg = dlSvg(host, [560, 330], 'Van đảo chiều'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  dlBox(svg, 170, 100, 220, 90, 'none', null, { stroke: 'currentColor', sw: 3, r: 14 }); const pis = dlBox(svg, 245, 108, 60, 74, '#a855f7', 'pittông', { s: 10 });
  dlBox(svg, 240, 50, 80, 36, '#ef4444', 'Cửa đẩy', { s: 10 }); dlBox(svg, 240, 204, 80, 36, '#0ea5e9', 'Cửa hút', { s: 10 }); dlBox(svg, 30, 120, 130, 50, '#38bdf8', 'Dàn trong nhà', { s: 11 }); dlBox(svg, 400, 120, 130, 50, '#f97316', 'Dàn ngoài trời', { s: 11 }); dlBox(svg, 200, 270, 160, 40, '#64748b', 'Máy nén', { s: 12 });
  const p1 = dlLn(svg, [[280, 270], [280, 240]], '#0ea5e9', 5); const p2 = dlLn(svg, [[280, 270], [280, 255], [425, 255]], 'none', 0);
  const flows = { d: dlLn(svg, [[200, 270], [150, 270], [150, 68], [240, 68]], '#ef4444', 4, { op: .5 }), s: dlLn(svg, [[320, 222], [360, 222], [360, 270]], '#0ea5e9', 4, { op: .5 }) };
  const pathL = dlLn(svg, [[170, 145], [95, 145]], 'none', 1), L1 = dlLn(svg, [[170, 145], [130, 145]], '#94a3b8', 4), R1 = dlLn(svg, [[390, 145], [400, 145]], '#94a3b8', 4);
  const info = dlTxt(svg, 280, 20, '', { s: 12, w: 700 }); const coil = dlBox(svg, 395, 205, 130, 30, '#16a34a', '', { s: 10, r: 6 }); const ct = dlTxt(svg, 460, 224, '', { c: '#fff', s: 10 });
  const flowDots = []; for (let i = 0; i < 16; i++) flowDots.push(rfEl('circle', { r: 3.5, stroke: '#111', 'stroke-width': .4 }, svg));
  let pos = 0, target = 0, t = 0, moveT = 0; // pos 0 = lạnh (pittông sang trái), 1 = sưởi
  const polyC = { d: dlPoly([[200, 270], [150, 270], [150, 68], [240, 68], [280, 68], [330, 100], [440, 100], [440, 120]]), s: dlPoly([[95, 145], [95, 100], [170, 100], [200, 130], [250, 215], [320, 222], [360, 222], [360, 270], [320, 270]]) };
  const polyH = { d: dlPoly([[200, 270], [150, 270], [150, 68], [240, 68], [200, 100], [130, 145], [95, 145]]), s: dlPoly([[440, 120], [440, 100], [380, 100], [340, 130], [320, 222], [360, 222], [360, 270], [320, 270]]) };
  host.querySelector('#m').onchange = e => { target = e.target.value === 'h' ? 1 : 0; moveT = 100; };
  dlLoop(host, () => {
    t += 3; if (moveT > 0) { moveT--; pos += (target - pos) * 0.04; } else pos = target;
    pis.setAttribute('transform', 'translate(' + (pos * 0 + (pos - 0.5) * -110) + ',0)'); // trái ↔ phải
    const heat = target === 1, mv = moveT > 0; host.querySelector('#s').textContent = mv ? '⏳ đang đảo chiều (≈ 10 giây): hơi nóng tràn sang đường hút, áp tạm thời dao động' : '';
    const P = heat ? polyH : polyC; const A = P.d, B = P.s;
    flowDots.forEach((c, k) => { const isD = k < 8; const poly = isD ? A : B; const p = poly.at(t + (k % 8) * poly.len / 8); c.setAttribute('cx', p[0]); c.setAttribute('cy', p[1]); c.setAttribute('fill', isD ? '#ef4444' : '#38bdf8'); c.setAttribute('opacity', mv ? .35 : 1); });
    coil.firstChild.setAttribute('fill', heat ? '#dc2626' : '#16a34a'); ct.textContent = heat ? 'cuộn điện từ CÓ điện' : 'cuộn điện từ không điện';
    o.innerHTML = heat ? '<b>SƯỞI ẤM</b>: cuộn điện từ có điện, kim van đóng sang trái, đầu trái van nối đường hút → pittông dịch sang phải. Hơi nóng đẩy vào <b>dàn trong nhà (thành dàn nóng)</b>, dàn ngoài trời trở thành dàn lạnh.' : '<b>LÀM LẠNH</b>: không có dòng qua cuộn điện từ, kim van đóng sang phải. Hơi nóng đẩy vào <b>dàn ngoài trời (dàn ngưng)</b>, hơi từ dàn trong nhà (dàn bay hơi) về đường hút. Cần hiệu áp tối thiểu 3,5 bar để pittông dịch chuyển.';
    info.textContent = heat ? 'Chế độ sưởi (heat pump)' : 'Chế độ làm lạnh';
  }, 60);
};
WIDGETS['dl-dehumidifier'] = host => {
  host.innerHTML = '<div class="row"><label>Nhiệt độ phòng <input id="t" type="range" min="20" max="34" value="28"> <b id="tv"></b></label><label>Độ ẩm vào <input id="h" type="range" min="50" max="100" value="85"> <b id="hv"></b></label></div>';
  const svg = dlSvg(host, [600, 190], 'Máy hút ẩm'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  dlBox(svg, 30, 50, 540, 90, 'none', null, { stroke: 'currentColor', sw: 2, r: 8 }); dlBox(svg, 170, 62, 70, 66, '#0ea5e9', 'Dàn lạnh 5 °C', { s: 10 }); dlBox(svg, 340, 62, 70, 66, '#f97316', 'Dàn nóng', { s: 10 }); dlBox(svg, 460, 62, 60, 66, '#64748b', 'Quạt', { s: 10 }); dlBox(svg, 170, 150, 70, 22, '#22d3ee', 'nước ngưng', { s: 9 });
  dlLn(svg, [[10, 95], [160, 95]], '#16a34a', 4); dlLn(svg, [[250, 95], [330, 95]], '#0ea5e9', 4); dlLn(svg, [[420, 95], [590, 95]], '#fb923c', 4); const dots = []; for (let i = 0; i < 12; i++) dots.push(rfEl('circle', { r: 4, cy: 95 }, svg));
  const psat = T => 0.6112 * Math.exp(17.62 * T / (243.12 + T)), w = (T, rh) => { const pv = psat(T) * rh / 100; return 0.622 * pv / (101.3 - pv) * 1000; };
  let t = 0; dlLoop(host, () => { t += 4; dots.forEach((c, k) => { const x = (t + k * 50) % 600; c.setAttribute('cx', x); c.setAttribute('fill', x < 170 ? '#4ade80' : x < 330 ? '#38bdf8' : '#fb923c'); }); }, 60);
  const draw = () => { const T = +host.querySelector('#t').value, H = +host.querySelector('#h').value; host.querySelector('#tv').textContent = T + ' °C'; host.querySelector('#hv').textContent = H + '%'; const w1 = w(T, H), w2 = Math.min(w1, w(5, 100)), T2 = T + 4, pv2 = w2 / 1000 * 101.3 / (0.622 + w2 / 1000), rh2 = pv2 / psat(T2) * 100; o.innerHTML = 'Vào: ' + T + ' °C, ' + H + '% (' + w1.toFixed(1) + ' g/kg). Qua dàn lạnh 5 °C: còn ≤ ' + w2.toFixed(1) + ' g/kg ⇒ ngưng ' + Math.max(0, w1 - w2).toFixed(1) + ' g nước/kg không khí. Sưởi lại bởi dàn nóng thành ≈ ' + T2 + ' °C: độ ẩm ra ≈ <b>' + Math.min(100, rh2).toFixed(0) + '%</b>.<br>Nhiệt độ phòng tăng chút ít, độ ẩm tương đối giảm đáng kể (mục tiêu 55–60%).'; };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['dl-scroll'] = host => {
  host.innerHTML = '<div class="row"><label>Tốc độ <input id="sp" type="range" min="1" max="8" value="3"></label></div>';
  const svg = dlSvg(host, [480, 330], 'Máy nén xoắn ốc'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const spiral = (off, rot) => { let d = 'M'; for (let a = 0; a <= 3.2 * Math.PI; a += 0.12) { const r = 10 + a * 12; d += (a ? ' L' : '') + (240 + off[0] + r * Math.cos(a + rot)) + ' ' + (160 + off[1] + r * Math.sin(a + rot)); } return d; };
  const fixed = rfEl('path', { d: spiral([0, 0], 0), fill: 'none', stroke: '#64748b', 'stroke-width': 7, 'stroke-linecap': 'round' }, svg), orb = rfEl('path', { d: spiral([0, 0], Math.PI), fill: 'none', stroke: '#f97316', 'stroke-width': 7, 'stroke-linecap': 'round' }, svg);
  dlTxt(svg, 70, 40, 'Vòng xoắn tĩnh (xám)', { c: '#64748b', a: 'start' }); dlTxt(svg, 70, 58, 'Vòng xoắn động quay lệch tâm (cam)', { c: '#f97316', a: 'start' }); dlTxt(svg, 240, 160, '⟵ cửa đẩy ở tâm', { s: 10, a: 'start' }); dlTxt(svg, 440, 40, 'hút ở thành bên', { s: 10, a: 'end' });
  let a = 0; const dots = []; for (let i = 0; i < 12; i++) dots.push(rfEl('circle', { r: 4, fill: '#38bdf8' }, svg));
  dlLoop(host, () => { a += +host.querySelector('#sp').value * 0.03; orb.setAttribute('transform', 'translate(' + (14 * Math.cos(a)) + ',' + (14 * Math.sin(a)) + ')'); dots.forEach((c, k) => { const th = 3.0 * Math.PI * (1 - ((a / 6 + k / 12) % 1)); const r = 10 + th * 12 + 14; c.setAttribute('cx', 240 + r * Math.cos(th + Math.PI / 2 + 0.6)); c.setAttribute('cy', 160 + r * Math.sin(th + Math.PI / 2 + 0.6)); c.setAttribute('opacity', 0.35 + 0.65 * (1 - th / (3 * Math.PI))); c.setAttribute('r', 5 - 3 * (th / (3 * Math.PI))); }); o.innerHTML = 'Vòng động không quay quanh trục của nó mà <b>quay theo quỹ đạo tròn nhỏ</b>, tạo các khoang hút → nén → đẩy giữa hai vòng; hơi bị dồn dần vào tâm và đẩy ra. Chấm xanh = hơi ga bị nén (nhỏ dần, đậm dần).'; }, 60);
};
WIDGETS['dl-ac-motor'] = host => {
  host.innerHTML = '<div class="row"><button id="go" type="button">▶ Bấm khởi động</button><label><input type="checkbox" id="sc" checked> Tụ khởi động</label><label><input type="checkbox" id="rc" checked> Tụ làm việc</label></div>';
  const svg = dlSvg(host, [560, 320], 'Động cơ máy nén điều hòa'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const w = {}; const W = (id, pts) => { w[id] = dlLn(svg, pts, '#94a3b8', 3.5); };
  rfEl('line', { x1: 20, y1: 40, x2: 540, y2: 40, stroke: '#ef4444', 'stroke-width': 3 }, svg); rfEl('line', { x1: 20, y1: 290, x2: 540, y2: 290, stroke: '#3b82f6', 'stroke-width': 3 }, svg);
  W('a', [[80, 40], [80, 100]]); dlBox(svg, 56, 100, 48, 40, '#8b5cf6', 'Quá tải', { s: 9 }); W('b', [[80, 140], [80, 180], [150, 180]]);
  W('r', [[150, 180], [150, 200], [150, 290]]); dlBox(svg, 128, 200, 44, 50, '#f97316', 'R', { s: 13 });
  W('k', [[150, 180], [260, 180]]); const rel = dlBox(svg, 260, 160, 56, 40, '#ec4899', 'K', { s: 13 }); W('k2', [[316, 180], [350, 180]]); const sc = dlBox(svg, 350, 160, 52, 40, '#14b8a6', 'Tụ KĐ', { s: 9 }); W('k3', [[402, 180], [440, 180], [440, 200]]);
  W('s', [[440, 200], [440, 290]]); dlBox(svg, 418, 200, 44, 50, '#eab308', 'S', { s: 13 });
  W('rc', [[150, 230], [210, 230], [210, 270], [440, 270]]); dlBox(svg, 270, 255, 60, 30, '#22c55e', 'Tụ làm việc', { s: 9 });
  dlBox(svg, 248, 90, 120, 50, '#a855f7', 'Rơle điện áp: cuộn dây nhỏ, mảnh', { s: 9 });
  W('v', [[150, 180], [150, 115], [248, 115]]); W('v2', [[368, 115], [440, 115], [440, 200]]);
  const bar = rfEl('rect', { x: 20, y: 296, height: 12, rx: 4, fill: '#22c55e' }, svg); dlTxt(svg, 528, 306, 'tốc độ rôto', { a: 'end', s: 9 });
  let n = 0, run = false;
  const col = (id, c) => w[id].setAttribute('stroke', c);
  dlLoop(host, () => {
    const sc1 = host.querySelector('#sc').checked, rc1 = host.querySelector('#rc').checked;
    if (run) n = Math.min(1, n + 0.012); const kClosed = run && n < 0.75, volt = 0.2 + 1.1 * n * n; const hot = run ? '#f97316' : '#94a3b8', on = run ? '#22c55e' : '#94a3b8';
    ['a', 'b', 'r', 'k'].forEach(k => col(k, on)); col('k2', kClosed ? '#f97316' : '#94a3b8'); col('k3', kClosed ? '#f97316' : '#94a3b8'); col('s', kClosed || (run && rc1) ? '#f97316' : '#94a3b8'); col('rc', run && rc1 ? '#22c55e' : '#94a3b8'); col('v', run ? '#a855f7' : '#94a3b8'); col('v2', run ? '#a855f7' : '#94a3b8');
    rel.firstChild.setAttribute('fill', kClosed ? '#ec4899' : '#94a3b8'); bar.setAttribute('width', n * 500);
    o.innerHTML = 'Tốc độ ' + (n * 100).toFixed(0) + '% · điện áp cuộn rơle (C–S) ≈ <b>' + (volt * 220).toFixed(0) + ' V</b> · tiếp điểm rơle điện áp (thường đóng): <b>' + (kClosed ? 'ĐÓNG – tụ khởi động ' + (sc1 ? 'đang giúp tăng mômen' : 'không có (mômen khởi động yếu!)') : 'MỞ – ngắt tụ khởi động') + '</b>' + (rc1 ? ' · tụ làm việc luôn ở trong mạch (tăng hiệu suất).' : ' · không có tụ làm việc: hiệu suất giảm.') + (!run ? '<br>Bấm "Bấm khởi động".' : n >= 1 ? '<br>✅ Đã đạt tốc độ định mức, chạy bình thường.' : '');
  }, 80);
  host.querySelector('#go').onclick = () => { n = 0; run = true; };
};
WIDGETS['dl-voltage-relay'] = host => {
  host.innerHTML = '<div class="row"><label>Tốc độ rôto <input id="n" type="range" min="0" max="100" value="0"> <b id="nv"></b></label></div>';
  const svg = dlSvg(host, [520, 240], 'Rơle điện áp'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const X = n => 50 + n * 4.2, Y = v => 200 - v * 1.2;
  rfEl('line', { x1: 50, y1: 200, x2: 480, y2: 200, stroke: 'currentColor' }, svg); rfEl('line', { x1: 50, y1: 30, x2: 50, y2: 200, stroke: 'currentColor' }, svg); dlTxt(svg, 20, 120, 'V cuộn (V)', { s: 9 }); dlTxt(svg, 270, 224, 'tốc độ rôto (%)', { s: 9 });
  const V = n => 44 + 242 * Math.pow(n / 100, 2); let d = 'M'; for (let n = 0; n <= 100; n += 2) d += (n ? ' L' : '') + X(n) + ' ' + Y(V(n) / 2.2 * 0.8 * 1.22); rfEl('path', { d, fill: 'none', stroke: '#a855f7', 'stroke-width': 2.5 }, svg);
  rfEl('line', { x1: X(75), y1: 30, x2: X(75), y2: 200, stroke: '#facc15', 'stroke-dasharray': '4 3' }, svg); dlTxt(svg, X(75), 24, '75%: rơle ngắt', { s: 10 }); const c = rfEl('circle', { r: 6, fill: '#ef4444' }, svg);
  const set = n => { host.querySelector('#nv').textContent = n + '%'; c.setAttribute('cx', X(n)); c.setAttribute('cy', Y(V(n) / 2.2 * 0.8 * 1.22)); o.innerHTML = 'Điện áp cuộn ≈ <b>' + V(n).toFixed(0) + ' V</b> · tiếp điểm K: <b>' + (n < 75 ? 'ĐÓNG (tụ khởi động còn tham gia)' : 'MỞ (đã ngắt tụ khởi động)') + '</b><br>Khác rơle dòng (tủ lạnh): rơle điện áp có tiếp điểm thường đóng, dây cuộn rất mảnh nhiều vòng, dùng cho nhiều blốc công suất khác nhau và không gây tia lửa.'; };
  host.querySelector('#n').oninput = e => set(+e.target.value); set(0);
};

// ================= Chương 10: mạch điện máy điều hòa =================
WIDGETS['dl-ac-circuit'] = host => {
  host.innerHTML = '<div class="row"><label>Núm chọn <select id="md"><option value="0">7 Tắt</option><option value="1">1 Quạt yếu</option><option value="2">3 Quạt mạnh</option><option value="3">4 Lạnh yếu</option><option value="4" selected>6 Lạnh mạnh</option></select></label><label><input type="checkbox" id="hp"> Máy 2 chiều (có van đảo chiều)</label><label><input type="checkbox" id="ht"> Chế độ sưởi</label><button id="ov" type="button">⚠ Gây quá tải</button></div><div class="row"><label>Nhiệt độ đặt <input id="sp" type="range" min="18" max="30" value="25"> <b id="spv"></b></label><span>Phòng: <b id="tv"></b></span></div>';
  const svg = dlSvg(host, [760, 440], 'Mạch điện máy điều hòa'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const OFF = '#94a3b8', ON = '#22c55e', HOT = '#f97316', w = {}; const L = 40, N = 410;
  const W = (id, pts) => { w[id] = dlLn(svg, pts, OFF, 3.5); };
  rfEl('line', { x1: 20, y1: L, x2: 740, y2: L, stroke: '#ef4444', 'stroke-width': 3 }, svg); rfEl('line', { x1: 20, y1: N, x2: 740, y2: N, stroke: '#3b82f6', 'stroke-width': 3 }, svg); dlTxt(svg, 14, L - 6, 'L 220 V', { a: 'start', s: 10, c: '#ef4444' }); dlTxt(svg, 14, N + 16, 'N', { a: 'start', s: 10, c: '#3b82f6' });
  W('i', [[60, L], [60, 80]]); dlBox(svg, 20, 80, 80, 60, '#64748b', 'Núm S', { s: 11 });
  W('fq', [[100, 95], [190, 95], [190, 150]]); W('fn', [[100, 125], [150, 125], [150, 175], [190, 175]]); W('cm', [[100, 110], [240, 110], [240, 40]]);
  dlTxt(svg, 140, 90, 'quạt yếu', { s: 8 }); dlTxt(svg, 140, 140, 'quạt mạnh', { s: 8 });
  // quạt
  W('f1', [[190, 175], [190, 215]]); dlBox(svg, 165, 215, 50, 50, '#0ea5e9', 'Quạt', { s: 11 }); W('f2', [[190, 265], [190, N]]);
  // máy nén
  W('t1', [[300, 95], [300, 130]]); dlBox(svg, 280, 130, 40, 36, '#14b8a6', 'TC', { s: 11 }); W('t2', [[300, 166], [300, 190]]); dlBox(svg, 280, 190, 40, 36, '#8b5cf6', 'F', { s: 11 }); W('t3', [[300, 226], [300, 250], [420, 250]]);
  W('mr', [[420, 250], [420, 280]]); dlBox(svg, 398, 280, 44, 50, '#f97316', 'R', { s: 13 }); W('mr2', [[420, 330], [420, N]]);
  W('ms', [[420, 250], [500, 250]]); const kk = dlBox(svg, 500, 232, 50, 36, '#ec4899', 'K', { s: 12 }); W('ms2', [[550, 250], [600, 250], [600, 280]]); dlBox(svg, 578, 280, 44, 50, '#eab308', 'S', { s: 13 }); W('ms3', [[600, 330], [600, N]]);
  dlTxt(svg, 510, 360, 'Máy nén + tụ + rơle điện áp', { s: 10 }); rfEl('ellipse', { cx: 510, cy: 300, rx: 140, ry: 58, fill: 'none', stroke: 'currentColor', 'stroke-dasharray': '5 4', opacity: .4 }, svg);
  W('y1', [[690, L], [690, 130]]); dlBox(svg, 660, 130, 60, 50, '#a855f7', 'Y1 van đảo chiều', { s: 9 }); W('y2', [[690, 180], [690, N]]);
  W('com', [[240, 40], [240, 70], [300, 70], [300, 95]]);
  const c = { T: 30, th: true, ov: 0 };
  const set = (k, col) => w[k].setAttribute('stroke', col);
  const draw = () => {
    const md = +host.querySelector('#md').value, hp = host.querySelector('#hp').checked, ht = host.querySelector('#ht').checked && hp, sp = +host.querySelector('#sp').value; host.querySelector('#spv').textContent = sp + ' °C';
    const fan = md >= 1, fast = md === 2 || md === 4, cool = md >= 3, comp = cool && c.th && !c.ov;
    if (c.ov > 0) c.ov--;
    if (!ht) { if (c.T >= sp + 1) c.th = true; else if (c.T <= sp - 1) c.th = false; } else { if (c.T <= sp - 1) c.th = true; else if (c.T >= sp + 1) c.th = false; }
    c.T += comp ? (ht ? 0.05 : -0.06) : (fan && !cool ? 0 : (ht ? -0.01 : 0.012)); const start = comp && (c.k = (c.k || 0) + 1) < 14; if (!comp) c.k = 0;
    set('i', md ? ON : OFF); set('cm', md ? ON : OFF); set('fq', fan && !fast ? ON : OFF); set('fn', fan && fast ? ON : OFF); set('f1', fan ? ON : OFF); set('f2', fan ? ON : OFF);
    set('com', cool ? ON : OFF); set('t1', cool ? ON : OFF); set('t2', comp ? ON : OFF); set('t3', comp ? ON : OFF); set('mr', comp ? ON : OFF); set('mr2', comp ? ON : OFF);
    set('ms', comp && start ? HOT : OFF); set('ms2', comp && start ? HOT : OFF); set('ms3', comp && start ? HOT : OFF); kk.setAttribute('opacity', comp && start ? 1 : .45);
    const y = comp && ht; set('y1', y ? ON : OFF); set('y2', y ? ON : OFF);
    host.querySelector('#tv').textContent = c.T.toFixed(1).replace('.', ',') + ' °C';
    o.innerHTML = 'Quạt: <b>' + (fan ? (fast ? 'mạnh' : 'yếu') : 'tắt') + '</b> · Máy nén: <b>' + (comp ? (start ? 'KHỞI ĐỘNG (rơle điện áp đóng tụ KĐ, dòng lớn)' : 'ĐANG CHẠY') : cool ? (c.ov ? 'rơle quá tải đã nhảy' : 'thermostat ngắt') : 'nghỉ') + '</b>' + (y ? ' · Y1 có điện: van đảo chiều ở chế độ <b>sưởi</b>' : '') + '<br>Mạch: núm S → (quạt) và → thermostat TC → rơle quá tải F → cuộn R; cuộn S qua tiếp điểm K của rơle điện áp và tụ khởi động; tụ làm việc luôn trong mạch.';
  };
  host.querySelector('#ov').onclick = () => { c.ov = 60; };
  host.querySelectorAll('select,input').forEach(i => { i.onchange = draw; i.oninput = draw; });
  dlLoop(host, draw, 100); draw();
};

// ================= Chương 11 =================
WIDGETS['dl-ac-size'] = host => dlCalc(host, [
  { id: 'q', label: 'Năng suất lạnh', v: 12000, step: 'any' }, { id: 'u', label: 'Đơn vị', v: 'btu', opts: [['btu', 'Btu/h'], ['kw', 'kW'], ['hp', 'HP (≈ 9000 Btu/h)']] }, { id: 'e', label: 'COP / EER (W/W)', v: 3, step: 0.1 }, { id: 'v', label: 'Điện áp (V)', v: 220, step: 1 }
], v => {
  const kw = v.q * { btu: 0.00029307, kw: 1, hp: 2.64 }[v.u], pw = kw / (v.e || 3), I = pw * 1000 / (v.v * 0.9);
  const std = [6000, 9000, 12000, 15000, 18000, 21000, 24000, 36000, 48000], b = kw / 0.00029307;
  return '<b>' + kw.toFixed(2) + ' kW</b> = ' + b.toFixed(0) + ' Btu/h ≈ ' + (kw / 2.64).toFixed(1) + ' HP.<br>Công suất điện ≈ ' + pw.toFixed(2) + ' kW → dòng làm việc ≈ <b>' + I.toFixed(1) + ' A</b> (cosφ 0,9). Cỡ chuẩn gần nhất: <b>' + std.reduce((a, c) => Math.abs(c - b) < Math.abs(a - b) ? c : a) + ' Btu/h</b>.';
});
WIDGETS['dl-ac-ambient'] = host => dlCalc(host, [{ id: 't', label: 'Nhiệt độ ngoài trời (°C)', v: 35, min: 20, max: 52, step: 1 }], v => {
  const cap = 105 - (v.t - 30) * 1.0, tk = v.t + 17, pk = dlSatP('R22', tk) - 1.013, I = 100 + 1.2 * (v.t - 35);
  return 'Năng suất lạnh ≈ <b>' + cap.toFixed(0) + '%</b> định mức (30 °C: +5%; 50 °C: −15%) · áp suất đẩy R22 ≈ <b>' + pk.toFixed(1) + ' bar dư</b> (t ngưng ≈ ' + tk.toFixed(0) + ' °C) · dòng làm việc ≈ <b>' + I.toFixed(0) + '%</b> FLA.<br><i>Dùng để đánh giá áp đẩy cao do thời tiết hay do có khí không ngưng: tính từ nhiệt độ ngưng rồi so với áp đo.</i>';
});
WIDGETS['dl-ac-factors'] = host => dlCalc(host, [
  { id: 'd', label: 'Nhiệt độ bay hơi so với chuẩn (°C)', v: 0, step: 1 }, { id: 'a', label: 'Lưu lượng gió', v: '1', opts: [['0.92', 'yếu / phin bẩn'], ['1', 'vừa'], ['1.06', 'mạnh']] }, { id: 'l', label: 'Chiều dài ống (m)', v: 5, min: 3, max: 20, step: 1 }, { id: 'h', label: 'Chênh cao hai dàn (m)', v: 3, min: 0, max: 15, step: 1 }
], v => {
  const lf = v.l <= 5 ? 1 : v.l <= 10 ? 1 - (v.l - 5) * 0.01 : 0.95 - (v.l - 10) * 0.02, hf = 1 - Math.max(0, v.h - 3) * 0.01, f = (1 + v.d * 0.03) * v.a * lf * hf;
  return 'Hệ số hiệu chỉnh tổng ≈ <b>' + (f * 100).toFixed(0) + '%</b> (bay hơi +1 °C ⇒ +3%; gió: ' + (+v.a * 100).toFixed(0) + '%; ống ' + v.l + ' m: ' + (lf * 100).toFixed(0) + '%; chênh cao ' + v.h + ' m: ' + (hf * 100).toFixed(0) + '%).<br>' + (f < 0.9 ? '⚠ Năng suất lạnh giảm đáng kể: vệ sinh phin gió, rút ngắn ống, giảm chênh cao.' : '✅ Gần định mức.');
});
WIDGETS['dl-ac-load'] = host => dlCalc(host, [
  { id: 'a', label: 'Diện tích sàn (m²)', v: 20, min: 1, step: 1 }, { id: 'k', label: 'Loại phòng', v: '450', opts: [['450', 'Phòng ở thường (400–500)'], ['550', 'Khách / ăn / làm việc (500–600)'], ['750', 'Văn phòng (700–800)'], ['850', 'Khách sạn (800–900)'], ['650', 'Cửa hàng quần áo (600–700)'], ['700', 'Bách hóa / ngân hàng (600–760)'], ['1100', 'Hội trường (1000–1200)'], ['1650', 'Vũ trường (1500–1800)']] },
  { id: 'g', label: 'Toàn kính / nhiều thiết bị nóng', v: '1', opts: [['1', 'không'], ['1.2', 'có (+20%)']] }
], v => {
  const need = v.a * v.k * v.g, std = [6000, 9000, 12000, 15000, 18000, 21000, 24000, 36000, 48000], pick = std.find(s => s >= need) || 48000;
  return 'Nhu cầu ≈ <b>' + need.toFixed(0) + ' Btu/h</b> ≈ ' + (need * 0.00029307).toFixed(2) + ' kW → chọn máy <b>' + pick + ' Btu/h</b> (' + (pick * 0.00029307).toFixed(2) + ' kW, ≈ ' + (pick / 9000).toFixed(1) + ' HP).<br><i>Ước tính cho Hà Nội: ngoài 33 °C, trong 27 °C, tường gạch 200, cửa sổ 20–25% mặt tiền, che nắng.</i>';
});

// ================= Chương 12 =================
WIDGETS['dl-ac-install-check'] = host => dlCalc(host, [
  { id: 'b', label: 'Cách tường sau (mm)', v: 300 }, { id: 's', label: 'Cách tường bên (mm)', v: 100 }, { id: 'f', label: 'Phía trước (mm)', v: 600 }, { id: 'h', label: 'Chênh cao (m)', v: 3, step: 0.5 }, { id: 'l', label: 'Dài ống (m)', v: 5, step: 0.5 }, { id: 'n', label: 'Nghiêng dàn nóng (°)', v: 0, step: 1 }
], v => {
  const r = []; if (v.b < 300) r.push('⛔ Dàn nóng sát tường sau (< 300 mm): gió quẩn, nóng.'); if (v.s < 100) r.push('⛔ Bên cạnh < 100 mm.'); if (v.f < 600) r.push('⛔ Phía trước < 600 mm: cản gió thổi ra.'); if (v.h > 3) r.push('⚠ Chênh cao > 3 m (máy gia dụng): năng suất giảm, cần bẫy dầu nếu dàn nóng cao hơn dàn lạnh.'); if (v.l > 5) r.push('⚠ Ống ga > 5 m: bổ sung ga theo mét ống, kiểm tra giới hạn của hãng (có hãng tới 15 m / 10 m).'); if (v.n > 5) r.push('⛔ Nghiêng quá 5°.');
  return r.length ? r.join('<br>') : '✅ Các khoảng hở và độ cao đạt khuyến nghị.';
});
WIDGETS['dl-ac-piping'] = host => dlCalc(host, [
  { id: 'l', label: 'Dài ống thực tế (m)', v: 10 }, { id: 'f', label: 'Dài ga nạp sẵn (m)', v: 5 }, { id: 'd', label: 'Ống lỏng', v: '20', opts: [['20', 'Φ 1/4" – 20 g/m'], ['50', 'Φ 3/8" – 50 g/m'], ['90', 'Φ 1/2" – 90 g/m'], ['150', 'Φ 5/8" – 150 g/m'], ['300', 'Φ 7/8" – 300 g/m']] }, { id: 'h', label: 'Chênh cao (m)', v: 3 }
], v => {
  const ex = Math.max(0, v.l - v.f), g = ex * +v.d; return 'Ống dài hơn phần nạp sẵn: <b>' + ex.toFixed(1) + ' m</b> ⇒ bổ sung ga ≈ <b>' + g.toFixed(0) + ' g</b>.' + (v.l > 5 || v.h > 3 ? '<br>⚠ Vượt khuyến nghị gia dụng (5 m / 3 m): năng suất lạnh giảm.' : '') + '<br>Hút chân không dàn lạnh và ống nối trước khi mở van dàn nóng (không xả ga để đuổi khí).';
});
WIDGETS['dl-ac-auto'] = host => dlCalc(host, [{ id: 't', label: 'Nhiệt độ phòng (°C)', v: 26, min: 10, max: 36, step: 0.5 }], v => {
  const t = v.t; const r = t >= 30 ? ['COOL (làm lạnh)', 27] : t >= 27 ? ['COOL (làm lạnh)', 26] : t >= 24 ? ['DRY (hút ẩm)', 24] : t >= 22 ? ['MONITOR (giám sát)', 23] : ['HEAT (sưởi ấm)', null];
  return 'Máy tự chọn: <b>' + r[0] + '</b>' + (r[1] ? ' · cài đặt <b>' + r[1] + ' °C</b>' : ' (máy 2 chiều)') + '. Quạt chạy rất nhẹ ~1 phút đầu để cảm nhận nhiệt độ. Đã chọn thì giữ chế độ; chỉ khi đang lạnh mà phòng < 22 °C thì chuyển sưởi, từ sưởi mà > 24 °C thì chuyển hút ẩm.';
});
WIDGETS['dl-ac-diag'] = host => dlDiag(host, [
  ['Không hoạt động, đèn báo không sáng', ['Chưa bật aptomat / cầu chì nổ / mất điện', 'Pin điều khiển hết hoặc hẹn giờ sai', 'Tiếp điểm công tắc / rơle nhiệt độ hỏng; tụ / rơle khởi động hỏng', 'Dây nối hỏng; cuộn dây động cơ chạm chập'], 'Kiểm tra nguồn → pin → vạn năng kế đo thông mạch từng thiết bị; sửa hoặc thay; quấn lại / thay blốc.'],
  ['Kém lạnh', ['Phin lọc khí bẩn; vật cản đường gió dàn nóng / dàn lạnh', 'Cài nhiệt độ sai; cửa mở', 'Lưu lượng gió / hướng gió sai; quạt không chạy'], 'Vệ sinh phin, loại bỏ trở ngại, cài lại nhiệt độ, kiểm tra quạt.'],
  ['Quạt gió không quay', ['Mất điện, đứt cầu chì, tuột dây', 'Công tắc chính tiếp xúc kém', 'Cuộn dây động cơ quạt hỏng; tụ quạt hỏng; cánh quạt lỏng'], 'Đo bằng vạn năng kế; quấn lại / thay động cơ; thay tụ; siết vít.'],
  ['Máy nén khởi động rồi dừng liên tục', ['Nhiệt độ cài sai', 'Dàn ngưng bẩn, gió quẩn, quạt lắp ngược → rơle quá tải ngắt liên tục'], 'Kiểm tra cài đặt; vệ sinh dàn nóng, bỏ vật cản, tránh gió quẩn, kiểm tra quạt.'],
  ['Máy 2 chiều không đổi được nóng / lạnh', ['Cuộn dây điện từ của van đảo chiều hỏng (đứt / cháy)', 'Van đảo chiều kẹt pittông', 'Rơle nhiệt độ hỏng'], 'Thay cuộn dây; gõ nhẹ búa gỗ lên thân van, không được thì thay; thay / sửa rơle nhiệt độ.'],
  ['Máy rung và ồn', ['Ốc vít, bulông lỏng; đường ống chạm nhau hoặc chạm vỏ', 'Máy nén hỏng; quạt hỏng'], 'Siết lại, lót đệm cao su / bọt xốp cách ly ống; thay máy nén / quạt.'],
  ['Rò nước ra nhà', ['Ống thoát nước ngưng không thông / sai độ dốc', 'Lỗ thoát không dùng chưa bịt nút cứng; chuột bít lỗ thoát'], 'Thử đổ nước vào máng; chỉnh dốc, dọn bẫy nước; bịt nút cứng (không dùng dầu nhớt).'],
  ['Máy dừng đột ngột, đèn vận hành nhấp nháy', ['Vật cản đường gió / phin tắc', 'Bảo vệ điện áp cao hoặc thấp quá', 'Nhiễu từ đèn ống tắc te, radio, tivi'], 'Vệ sinh phin, ngắt aptomat rồi bật lại, thử điều khiển; chờ 3 phút để máy tự chạy lại.']
], 'Triệu chứng của máy');

// ================= Chương 13 =================
WIDGETS['dl-tube-bend'] = host => dlCalc(host, [{ id: 'd', label: 'Đường kính ống (mm)', v: 9.5, step: 0.1 }, { id: 'r', label: 'Bán kính uốn thực tế (mm)', v: 60, step: 1 }], v => {
  const rmin = 5 * v.d, ok = v.r >= rmin; return 'R<sub>min</sub> = 5d = <b>' + rmin.toFixed(0) + ' mm</b>. Bán kính của bạn = ' + v.r + ' mm (' + (v.r / v.d).toFixed(1) + 'd) ⇒ ' + (ok ? '✅ an toàn, tiết diện giữ tròn.' : '⛔ quá gắt: ống bị bẹp / gập. Dùng lò xo uốn ống hoặc dụng cụ uốn cần xoay.');
});
WIDGETS['dl-flare'] = host => {
  host.innerHTML = '<div class="row"><label>Cỡ ống <select id="s"><option value="0">Ø6,35 (1/4")</option><option value="1" selected>Ø9,5 (3/8")</option><option value="2">Ø12,7 (1/2")</option><option value="3">Ø15,9 (5/8")</option><option value="4">Ø19,1 (3/4")</option></select></label><label>Lỗi <select id="e"><option value="0">Đầu loe chuẩn</option><option value="1">Loe quá nhỏ</option><option value="2">Loe quá to</option><option value="3">Miệng loe nứt</option><option value="4">Bavia, trầy xước</option><option value="5">Mặt loe không đồng tâm</option></select></label></div>';
  const svg = dlSvg(host, [420, 150], 'Đầu loe'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const A = ['8,3–8,7', '12,0–12,4', '15,4–15,8', '18,6–19,0', '22,9–23,3'], msg = ['Đạt: loe đủ 90°, miệng loe đồng tâm, nhẵn.', 'Ống nhô lên quá thấp: miệng loe nhỏ, khả năng rò ga lớn → cắt đi loe lại, nhô đúng cỡ (≈ 1 mm).', 'Ống nhô quá cao: miệng loe quá to, không lọt vào mũ ren hoặc bị rách, nhăn → rò. Cắt bỏ loe lại.', 'Ống bị hóa cứng: ram ống (nung đỏ thẫm rồi để nguội) rồi loe lại; nhớ tiến nửa vòng lùi 1/4 vòng.', 'Chưa nạo bavia / dũa vuông góc; mặt loe xây xát → rò ga. Dũa phẳng, doa bavia bên trong.', 'Ống chưa lắp vuông góc hoặc nón loe nghiêng → miệng méo. Kẹp lại, loe từ từ.'];
  const draw = () => { const s = +host.querySelector('#s').value, e = +host.querySelector('#e').value; svg.innerHTML = ''; const w = e === 1 ? 24 : e === 2 ? 56 : 40; rfEl('rect', { x: 60, y: 60, width: 150, height: 30, fill: '#cbd5e1' }, svg); rfEl('path', { d: 'M210 60 L' + (240 + w * 0.4) + ' ' + (75 - w) + ' L' + (240 + w * 0.4) + ' ' + (75 + w) + ' L210 90 Z', fill: '#f59e0b', stroke: e === 3 ? '#ef4444' : '#92400e', 'stroke-width': e === 3 ? 3 : 1.5, 'stroke-dasharray': e === 3 ? '4 3' : '' }, svg); if (e === 4) { rfEl('path', { d: 'M215 70 l8 4 M222 82 l8 -3', stroke: '#111' }, svg); } dlTxt(svg, 210, 130, 'đường kính miệng loe chuẩn: ' + A[s] + ' mm', { s: 12 }); dlTxt(svg, 140, 50, 'ống đồng', { s: 11 }); o.innerHTML = msg[e]; };
  host.querySelectorAll('select').forEach(x => x.onchange = draw); draw();
};
WIDGETS['dl-braze-flux'] = host => dlCalc(host, [{ id: 't', label: 'Nhiệt độ mối hàn (°C)', v: 300, min: 20, max: 650, step: 5 }], v => {
  const t = v.t; const s = t < 100 ? 'Trợ dung khô, chưa có gì.' : t < 316 ? 'Ẩm bốc hơi ở 100 °C; trợ dung chuyển sang màu <b>trắng sữa</b>.' : t < 427 ? 'Từ ~316 °C trợ dung bắt đầu <b>sủi bọt</b>.' : t < 593 ? 'Từ ~427 °C trợ dung nằm trên mối hàn, màu trắng sữa, chưa tới nhiệt độ hàn.' : t < 604 ? 'Trợ dung thành chất lỏng trong <b>(~593 °C)</b>: sát nhiệt độ hàn; ngọn lửa chuyển xanh lục.' : t < 618 ? '<b>604 °C que bạc bắt đầu chảy</b>, 618 °C lưu động hoàn toàn.' : '⚠ Quá nhiệt: có thể cháy ống / làm hỏng mối hàn.';
  return s + (t >= 604 && t <= 640 ? '<br>✅ Quét que hàn vào mép mối hàn (không đốt trực tiếp que bằng ngọn lửa).' : '');
});
WIDGETS['dl-tube-pinch'] = host => dlHot(host, {
  vb: [520, 220], label: 'Thắt ống và kẹp ống',
  bg: svg => { dlTxt(svg, 130, 20, 'Thắt ống', { w: 700 }); dlTxt(svg, 390, 20, 'Kẹp ống công nghệ', { w: 700 }); },
  parts: [
    { n: 'Ống lớn', x: 30, y: 60, w: 130, h: 36, c: '#d97706', t: 'Ống dàn bay hơi / ống từ phin lọc; hàn với ống nhỏ.' },
    { n: 'Ống mao', x: 150, y: 70, w: 100, h: 14, c: '#a855f7', t: 'Ống nhỏ lồng vào ống lớn đã được thắt; nước hàn điền đầy khe, không chảy vào ống mao.', s: 8 },
    { n: 'Bánh thắt', x: 80, y: 120, w: 70, h: 28, c: '#64748b', t: 'Dụng cụ thắt ống giống dao cắt ống nhưng lưỡi dao thay bằng bánh xe bóp thắt dần ống.', s: 10 },
    { n: 'Kìm kẹp ống', x: 320, y: 70, w: 130, h: 40, c: '#16a34a', t: 'Kẹp ống công nghệ (Ø6, kín khó) trước khi cắt đầu và hàn bịt: dụng cụ ROBINAIR cho ống mềm tối đa Ø9,5 mm.' },
    { n: 'Ống công nghệ', x: 340, y: 130, w: 90, h: 14, c: '#0ea5e9', t: 'Ống nạp ga; sau khi nạp đủ: kẹp → tháo van trích → cắt đầu → bóp đầu ống → hàn kín → thử kín mối hàn.', s: 8 }
  ]
});
WIDGETS['dl-torque'] = host => dlCalc(host, [{ id: 'd', label: 'Cỡ ống', v: '12.7', opts: [['9.5', 'Ø9,5 – 33–40 N·m'], ['12.7', 'Ø12,7 – 50–62 N·m'], ['15.9', 'Ø15,9 – 63–77 N·m'], ['19.1', 'Ø19,1 – 100–120 N·m']] }, { id: 'n', label: 'Mômen đã siết (N·m)', v: 55, step: 1 }], v => {
  const R = { '9.5': [33, 40], '12.7': [50, 62], '15.9': [63, 77], '19.1': [100, 120] }[v.d];
  return 'Khoảng chuẩn: <b>' + R[0] + '–' + R[1] + ' N·m</b> (' + R[0] * 10 + '–' + R[1] * 10 + ' kG·cm). Bạn siết ' + v.n + ' N·m ⇒ ' + (v.n < R[0] ? '⚠ quá lỏng: nguy cơ rò ga.' : v.n > R[1] ? '⛔ quá chặt: nguy cơ đứt / vỡ côn loe.' : '✅ đúng mômen.') + '<br>Quy trình: tháo mũ ren → nhỏ dầu nhớt đầu loe → chỉnh thẳng, vặn tay 4–5 vòng → siết cờ lê lực (2 cờ lê: giữ + siết).';
});

// ================= Chương 14 =================
WIDGETS['dl-service-valve'] = host => {
  host.innerHTML = '<div class="row"><label><input type="radio" name="v" value="0" checked> Vặn xuống (đóng đường)</label><label><input type="radio" name="v" value="1"> Lưng chừng (3 ngả)</label><label><input type="radio" name="v" value="2"> Nâng lên hết (vận hành)</label></div>';
  const svg = dlSvg(host, [560, 230], 'Van dịch vụ'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  dlBox(svg, 40, 90, 120, 50, '#f97316', 'Về dàn ngưng / máy nén', { s: 9 }); dlBox(svg, 400, 90, 130, 50, '#0ea5e9', 'Ống nối dàn lạnh', { s: 10 }); dlBox(svg, 230, 150, 100, 40, '#64748b', 'Cửa dịch vụ', { s: 10 });
  rfEl('rect', { x: 160, y: 95, width: 240, height: 40, rx: 6, fill: 'none', stroke: 'currentColor', 'stroke-width': 3 }, svg); const stem = rfEl('rect', { x: 262, width: 36, height: 55, fill: '#a855f7' }, svg); const kn = dlBox(svg, 252, 20, 56, 26, '#7c3aed', 'tay van', { s: 9 });
  const a = dlLn(svg, [[160, 115], [260, 115]], '#94a3b8', 6), b = dlLn(svg, [[300, 115], [400, 115]], '#94a3b8', 6), c = dlLn(svg, [[280, 135], [280, 150]], '#94a3b8', 6);
  const draw = () => { const ck = host.querySelector('input:checked'); const p = ck ? +ck.value : 0; stem.setAttribute('y', p === 0 ? 85 : p === 1 ? 62 : 36); kn.setAttribute('transform', 'translate(0,' + (p === 0 ? 65 : p === 1 ? 42 : 16) + ')'); a.setAttribute('stroke', p === 2 ? '#22c55e' : p === 1 ? '#22c55e' : '#94a3b8'); b.setAttribute('stroke', p === 0 ? '#22c55e' : p === 1 ? '#22c55e' : '#22c55e'); c.setAttribute('stroke', p === 1 ? '#22c55e' : '#94a3b8');
    o.innerHTML = ['<b>Kim van vặn xuống:</b> khóa đường thông với máy nén / dàn ngưng (nhốt ga lúc xuất xưởng); ống nối dàn lạnh thông cửa dịch vụ.', '<b>Kim van ở lưng chừng:</b> thông cả 3 ngả (dàn nóng – dàn lạnh – cửa dịch vụ): dùng khi đo áp suất, hút chân không, nạp ga.', '<b>Kim van nâng lên hết:</b> khóa cửa dịch vụ, dàn nóng và dàn lạnh thông nhau – vị trí vận hành bình thường sau khi lắp xong.'][p]; };
  host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
};
WIDGETS['dl-leak-test'] = host => dlCalc(host, [
  { id: 'p1', label: 'Áp kế hôm trước (bar)', v: 12, step: 0.1 }, { id: 'b1', label: 'Khí quyển hôm trước (bar)', v: 1.013, step: 0.001 }, { id: 't1', label: 'Nhiệt độ hôm trước (°C)', v: 32, step: 1 }, { id: 't2', label: 'Nhiệt độ hôm sau (°C)', v: 26, step: 1 }, { id: 'b2', label: 'Khí quyển hôm sau (bar)', v: 1.013, step: 0.001 }, { id: 'p2', label: 'Áp kế hôm sau (bar)', v: 11.5, step: 0.1 }
], v => {
  const e = (v.t2 + 273) / (v.t1 + 273) * (v.p1 + v.b1) - v.b2, d = v.p2 - e;
  return 'Áp suất dự kiến nếu hệ kín: <b>' + e.toFixed(2) + ' bar</b> (p<sub>d2</sub> = T₂/T₁·(p<sub>d1</sub>+p<sub>b1</sub>) − p<sub>b2</sub>). Đo được ' + v.p2 + ' bar ⇒ ' + (d >= -0.15 ? '✅ khớp: hệ thống <b>kín</b> (tụt do nhiệt độ).' : '⛔ thấp hơn dự kiến ' + (-d).toFixed(2) + ' bar: <b>có rò</b> — tìm bằng nước xà phòng.');
});
WIDGETS['dl-halide'] = host => {
  host.innerHTML = '<div class="row"><label>Mức rò ga <input id="l" type="range" min="0" max="10" value="0"> <b id="lv"></b></label></div>';
  const svg = dlSvg(host, [360, 220], 'Đèn halide'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  dlBox(svg, 140, 140, 80, 60, '#64748b', 'bình propan', { s: 9 }); dlBox(svg, 162, 90, 36, 50, '#94a3b8', null); dlBox(svg, 130, 70, 100, 24, '#a16207', 'tấm đồng', { s: 10 });
  const fl = rfEl('path', { d: 'M180 70 Q165 40 180 10 Q195 40 180 70', fill: '#bfdbfe', opacity: .85 }, svg);
  const draw = () => { const l = +host.querySelector('#l').value; host.querySelector('#lv').textContent = l; const c = l === 0 ? '#e0e7ff' : l < 5 ? '#4ade80' : '#38bdf8'; fl.setAttribute('fill', c); fl.setAttribute('transform', 'translate(0,' + (-l * 1.2) + ') scale(1,' + (1 + l * 0.04) + ')'); o.innerHTML = l === 0 ? 'Ngọn lửa propan/butan gần như không màu (xanh nhạt): <b>không rò</b>.' : l < 5 ? 'Ngọn lửa <b>xanh lục</b>: có halogen (freon) — rò nhẹ.' : 'Ngọn lửa <b>xanh da trời sáng</b>: rò <b>nhiều</b>. Phát hiện nhỏ tới ≈ 5 g/tháng.'; };
  host.querySelector('#l').oninput = draw; draw();
};
WIDGETS['dl-fridge-charge'] = host => {
  host.innerHTML = '<div class="row"><label>Lượng ga nạp <input id="c" type="range" min="50" max="140" value="100"> <b id="cv"></b></label></div>';
  const svg = dlSvg(host, [560, 200], 'Tuyết bám dàn bay hơi'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const segs = []; for (let i = 0; i < 8; i++) segs.push(rfEl('rect', { x: 40 + i * 50, y: 40, width: 40, height: 70, rx: 6, fill: '#0ea5e9' }, svg)); const fr = segs.map(s => rfEl('rect', { x: +s.getAttribute('x'), y: 40, width: 40, height: 70, rx: 6, fill: '#fff', opacity: 0 }, svg));
  dlTxt(svg, 220, 30, 'Dàn bay hơi', { w: 700 }); const hut = rfEl('rect', { x: 40, y: 140, width: 480, height: 18, rx: 6, fill: '#7dd3fc' }, svg); const hf = rfEl('rect', { x: 40, y: 140, width: 480, height: 18, rx: 6, fill: '#fff', opacity: 0 }, svg); dlTxt(svg, 280, 180, 'Ống hút về máy nén', { s: 11 });
  const draw = () => { const c = +host.querySelector('#c').value; host.querySelector('#cv').textContent = c + '%'; const cover = Math.max(0, Math.min(8, (c - 55) / 45 * 8)); fr.forEach((r, i) => r.setAttribute('opacity', i < cover ? Math.min(1, cover - i) * 0.9 : 0)); hf.setAttribute('opacity', c > 108 ? Math.min(1, (c - 108) / 20) * 0.9 : 0);
    o.innerHTML = c < 90 ? '⚠ <b>Thiếu ga</b>: dàn bám tuyết một phần; áp đẩy và áp hút thấp; tủ chạy gần như liên tục. (Cũng phải tìm chỗ rò!)' : c <= 108 ? '✅ <b>Đủ ga</b>: toàn bộ dàn bám tuyết đều, ống hút không bám tuyết / đổ mồ hôi.' : '⚠ <b>Thừa ga</b>: tuyết bám lan sang ống hút; ba áp suất đều cao; ướt cách nhiệt, tủ chạy liên tục — rút bớt ga.'; };
  host.querySelector('#c').oninput = draw; draw();
};
WIDGETS['dl-clamp'] = host => dlCalc(host, [{ id: 'i', label: 'Dòng thực (A)', v: 1.3, step: 0.1 }, { id: 'r', label: 'Nấc thang', v: '15', opts: [['6', '6 A'], ['15', '15 A'], ['60', '60 A'], ['150', '150 A']] }, { id: 'j', label: 'Gọng kìm ngoặm', v: '1', opts: [['1', 'MỘT dây dẫn'], ['2', 'cả hai dây (pha + trung tính)'], ['0', 'không ngoặm']] }], v => {
  if (v.j !== '1') return '⛔ Số chỉ ≈ <b>0 A</b>: từ trường hai dây ngược chiều triệt tiêu / không có dây. Chỉ ngoặm <b>một dây</b>.';
  const r = +v.r; if (v.i > r) return '⛔ Dòng ' + v.i + ' A vượt nấc ' + r + ' A: chuyển lên nấc cao hơn (chưa biết dòng thì để nấc cao nhất).';
  return 'Kim chỉ ≈ <b>' + (v.i / r * 100).toFixed(0) + '%</b> thang đo ⇒ ' + (v.i / r < 0.15 ? 'kim ở vị trí thấp, hạ xuống nấc nhỏ hơn cho dễ đọc.' : '✅ đọc được ' + v.i + ' A.') + '<br><i>Dòng khởi động LRA chỉ xuất hiện ≈ 1 s: đo ngay lúc đóng điện; không đo > 100 A quá lâu; điện áp tối đa 600 V.</i>';
});
WIDGETS['dl-multimeter'] = host => dlDiag(host, [
  ['Điện áp ổ cắm (xoay chiều)', ['ACV'], 'Núm xoay vào nấc ACV phù hợp (cao nhất nếu chưa biết); que đen cắm ổ ⊖, que đỏ ổ ⊕; mắc <b>song song</b> với tải / nguồn.'],
  ['Điện áp pin / mạch một chiều', ['DCV'], 'Núm xoay vào nấc DCV; que đen cực âm, que đỏ cực dương, mắc song song với tải.'],
  ['Dòng điện một chiều nhỏ (mA)', ['DCmA'], 'Ngắt hộ tiêu thụ khỏi mạch và mắc <b>nối tiếp</b> vạn năng kế: que đen cực âm, que đỏ cực dương. Giá trị có thể tới 50 µA ở thang 10 nhân hệ số 5.'],
  ['Điện trở cuộn dây / thông mạch', ['Ω'], 'Núm xoay vào nấc Ω; chập hai que đo và hiệu chỉnh kim về 0 bằng núm OΩ ADJ (không về 0 được ⇒ thay pin). <b>Luôn cắt nguồn điện</b> trước khi đo điện trở.'],
  ['Xác định C – S – R của blốc', ['Ω'], 'Đo ba cặp cọc: C–R nhỏ nhất, C–S trung bình, S–R lớn nhất.'],
  ['Thử pin vạn năng kế', ['Tải 10 Ω'], 'Đo điện áp pin bằng tải 10 Ω; so sánh nấc DC 3 V; thang chia 0,9–1,8 V.']
], 'Cần đo');

// ================= Chương 15 =================
WIDGETS['dl-compressor-diag'] = host => dlCheck(host, [
  ['Vệ sinh sạch bên ngoài blốc', 'Tránh bụi bẩn lọt vào khi mở nắp cọc.'], ['Mở nắp bảo vệ cọc tiếp điện', ''], ['Tháo rơle khởi động, rơle bảo vệ, tụ khởi động', 'Loại trừ hỏng hóc của thiết bị ngoài.'],
  ['Đo thông mạch cuộn dây & điện trở cách điện với vỏ (mêgaôm)', 'Đạt ≥ 5 MΩ.'], ['Đo điện trở các cuộn dây (chập vòng)', 'R<sub>R</sub> < R<sub>S</sub>; so với thông số.'], ['Chọn tụ & rơle phù hợp, đấu mạch khởi động thử bằng phích riêng', 'Dùng dây thử, giữ nút ≤ 2 giây.'],
  ['Blốc khởi động tốt ⇒ hỏng ở mạch ngoài; không khởi động ⇒ quấn lại / thay blốc', ''], ['Thử nén bằng van trích: chạy 5–10 phút, ghi độ chân không rồi dừng máy', 'Chân không giảm nhanh về 680 → 330 mbar: van xả rò.']
], '✅ Đã thực hiện đủ các bước chẩn đoán blốc.');
WIDGETS['dl-pressure-charge'] = host => {
  host.innerHTML = '<div class="row"><label>Tình trạng <select id="s"><option value="0">Đủ ga</option><option value="1">Thừa ga</option><option value="2">Thiếu ga</option><option value="3">Ống mao quá nhỏ / dài</option></select></label><label>Nhiệt độ môi trường <input id="a" type="range" min="15" max="38" value="23"> <b id="av"></b></label></div>';
  const svg = dlSvg(host, [520, 200], 'Áp suất'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const draw = () => { const s = +host.querySelector('#s').value, a = +host.querySelector('#a').value; host.querySelector('#av').textContent = a + ' °C'; svg.innerHTML = '';
    const pb = dlSatP('R12', a), pk0 = dlSatP('R12', a + 17), pe0 = dlSatP('R12', a - 45);
    const f = [[1, 1, 1], [1.2, 1.3, 1.12], [0.85, 0.75, 0.82], [1.35, 0.7, 1]][s]; const pk = pk0 * f[0], pe = Math.max(0.3, pe0 * f[1]), pc = pb * f[2];
    const bars = [['Ngưng tụ', pk, '#ef4444'], ['Bay hơi', pe, '#0ea5e9'], ['Cân bằng (dừng 4 ph)', pc, '#16a34a']]; const Y = p => 170 - p * 11;
    bars.forEach((b, i) => { rfEl('rect', { x: 70 + i * 150, y: Y(b[1]), width: 70, height: 170 - Y(b[1]), fill: b[2], rx: 4 }, svg); dlTxt(svg, 105 + i * 150, Y(b[1]) - 6, b[1].toFixed(1) + ' bar', { s: 11, w: 700 }); dlTxt(svg, 105 + i * 150, 188, b[0], { s: 10 }); });
    o.innerHTML = ['<b>Đủ ga</b>: nhiệt độ ngưng ≈ t<sub>mt</sub> + 17 °C (' + (a + 17) + ' °C); dàn ngưng chỉ có lỏng ở đoạn cuối gần phin; ống hút không đổ mồ hôi.', '<b>Thừa ga</b>: áp ngưng, bay hơi, cân bằng đều cao hơn bình thường; ống hút đổ mồ hôi / bám tuyết.', '<b>Thiếu ga</b>: cả ba áp suất đều nhỏ hơn bình thường; chỉ một phần dàn bám tuyết.', '<b>Ống mao quá nhỏ</b>: áp ngưng quá cao, áp bay hơi quá thấp, dàn ngưng ngập lỏng, dàn bay hơi thiếu lỏng (giống thiếu ga nhưng không phải thiếu ga).'][s]; };
  host.querySelectorAll('select,input').forEach(x => { x.onchange = draw; x.oninput = draw; }); draw();
};
WIDGETS['dl-block-test'] = host => dlDiag(host, [
  ['Cắt ống mao sát phin, mở van trích: CÓ hơi ga xì ra ở phin sấy lọc', ['Phin sấy lọc không tắc'], 'Kiểm tra tiếp ống mao.'],
  ['Cắt ống mao sát phin: KHÔNG thấy ga ra ở phin', ['Phin sấy lọc bị tắc'], 'Thay phin sấy lọc mới.'],
  ['Phía ống mao không thấy hơi ra', ['Ống mao bị tắc (ẩm, sáp, bẹp)'], 'Thông bằng dụng cụ áp cao (R141b); không thông được thì thay mới.'],
  ['Hơ nóng ống trước phin 10 cm, sờ thấy RẤT nóng', ['Thiếu ga (bên trong chỉ có hơi truyền nhiệt kém)'], 'Tìm rò, nạp lại ga.'],
  ['Hơ nóng ống trước phin, ít nóng', ['Đủ ga (có lỏng bay hơi)'], 'Chưa phải thiếu ga: xét ống mao / phin.'],
  ['Mở van trích trước phin: chỉ có hơi xì ra', ['Hệ thống thiếu ga'], 'Hút chân không, nạp lại đúng lượng.'],
  ['Mở van trích trước phin: có ga lỏng xì ra', ['Hệ thống đủ ga'], 'Hệ vẫn ổn về lượng nạp.']
], 'Kết quả quan sát');
WIDGETS['dl-burnout'] = host => dlDiag(host, [
  ['Ẩm lọt vào hệ thống', ['Ẩm + ga freon + dầu ⇒ axit HCl, HF, bùn', 'Ăn mòn, hỏng sơn emay cách điện cuộn dây', 'Chập vòng dây ⇒ cháy động cơ'], 'Hút chân không ≥ 1 giờ + 3 bước, thay phin sấy lọc, súc rửa bằng R141b, thay dầu.'],
  ['Khí không ngưng / dàn ngưng bẩn', ['Áp suất đầu đẩy cao ⇒ nhiệt độ cuối tầm nén cao', 'Dầu biến chất, hóa bùn', 'Khi t đầu đẩy ≥ 170 °C: dầu mất khả năng bôi trơn ⇒ bạc biên, sécmăng cháy ⇒ bó máy nén ⇒ cháy động cơ'], 'Vệ sinh dàn ngưng bằng khí nén / nitơ, xả khí không ngưng, kiểm tra quạt.'],
  ['Thiếu ga lạnh về làm mát môtơ', ['Động cơ quá nhiệt (cuộn dây được làm mát bằng hơi hút về)', 'Rơle bảo vệ nhảy nhiều lần, để lâu hỏng', 'Cháy cuộn dây'], 'Tìm rò rỉ, nạp đúng lượng; thay rơle bảo vệ yếu.'],
  ['Điện áp thấp / cắm nhầm 110 V vào 220 V', ['Không khởi động được nhiều lần (dòng LRA kéo dài)', 'Quá dòng ⇒ nhiệt tăng', 'Cháy cuộn dây'], 'Dùng ổn áp / biến thế đúng điện áp; kiểm tra điện áp lúc khởi động.'],
  ['Máy nén bị kẹt (thiếu dầu, mòn)', ['Rôto không quay, dòng ngắn mạch kéo dài', 'Rơle bảo vệ hỏng không ngắt', 'Cháy cuộn dây'], 'Thay blốc; nạp đủ dầu.']
], 'Nguyên nhân gốc');
WIDGETS['dl-replace-steps'] = host => dlCheck(host, [
  ['Vệ sinh sạch đầu ống nối phía hệ thống và phía máy nén', 'Giảm bụi bẩn lọt vào.'], ['Lắp van trích / đầu ga van dịch vụ / ống công nghệ', ''], ['Đặt blốc mới, thêm ống nối nếu cần; hàn bạc ít thuốc hàn', 'Che chắn vỏ cách nhiệt, quấn giẻ ướt các mối hàn khác.'],
  ['Làm sạch ống nối phin, thay phin sấy lọc mới (cùng cỡ); thêm phin thứ hai ở ống hút', ''], ['Nạp ga ~2 bar thử kín', ''], ['Hút chân không ≥ 1 giờ, khóa van kiểm tra độ kín chân không', 'Kim không tăng ⇒ hệ kín.'], ['Nạp chút ga cho ngang khí quyển; lắp lại thiết bị điện', ''],
  ['Nạp đủ lượng ga (nạp hơi dư rồi xả bớt) và chạy thử qua nhiều chu kỳ', ''], ['Tháo bộ nạp 3 dây, bịt kín cửa dịch vụ; ghi nhiệt độ 24 giờ nếu có thể', ''], ['Kiểm tra nhiệt độ đầu blốc, đầu đẩy, dàn ngưng, ống hút', 'Có phù hợp thông số?']
], '✅ Đã thay blốc đúng quy trình.');
WIDGETS['dl-toolbox'] = host => {
  const T = [['Cờ lê / mỏ lết', '🔧', 'Siết mũ ren, tháo lắp van; dùng hai cờ lê khi siết mối loe.'], ['Tuốc nơ vít', '🪛', 'Tháo lắp vít; không dùng nạy tuyết dàn nhôm.'], ['Kìm cắt / kìm bấm', '✂️', 'Cắt dây, ống; cắt ống mao cần kìm hoặc dũa chứ không dùng cưa.'], ['Dao cắt ống + nạo bavia', '⭕', 'Cắt ống đồng, nạo bavia, tránh mạt đồng rơi vào ống.'], ['Bộ loe ống', '🔔', 'Loe đầu ống 90° với bàn loe đúng cỡ.'], ['Lò xo uốn ống', '🌀', 'Uốn ống không bị bẹp; R ≥ 5d.'], ['Đèn khò / mỏ hàn', '🔥', 'Hàn bạc / hàn đồng các mối nối ga.'], ['Đèn dò ga halide', '🕯️', 'Phát hiện rò ga lạnh qua màu ngọn lửa.'], ['Bộ nạp 3 dây', '🧰', 'Đo áp suất, hút chân không, nạp ga.'], ['Bơm chân không', '💨', 'Hút ẩm và không khí khỏi hệ thống.'], ['Xi lanh nạp ga / cân', '⚖️', 'Nạp đúng lượng ga lạnh.'], ['Ampe kìm / vạn năng kế / mêgaôm', '📟', 'Đo dòng, điện áp, điện trở, cách điện.'], ['Nhiệt kế / phong tốc kế', '🌡️', 'Đo nhiệt độ bề mặt, tốc độ gió.']];
  dlHot(host, { vb: [680, 330], label: 'Hộp dụng cụ', intro: 'Bấm một dụng cụ để xem công dụng.', parts: T.map((t, i) => ({ n: t[0], x: 20 + (i % 5) * 130, y: 10 + Math.floor(i / 5) * 105, w: 120, h: 92, c: '#475569', t: t[2], draw: g => { rfEl('rect', { x: 20 + (i % 5) * 130, y: 10 + Math.floor(i / 5) * 105, width: 120, height: 92, rx: 10, fill: '#475569', opacity: .92 }, g); dlTxt(g, 80 + (i % 5) * 130, 55 + Math.floor(i / 5) * 105, t[1], { s: 30 }); dlTxt(g, 80 + (i % 5) * 130, 90 + Math.floor(i / 5) * 105, t[0].length > 20 ? t[0].slice(0, 19) + '…' : t[0], { c: '#fff', s: 10, w: 600 }); } })) });
};

// ===== Designing for Performance (dp-*) — dùng trợ giúp dl* (dlCalc, dlHot, dlDiag, dlSvg, dlTxt, dlBox, dlLn) =====
WIDGETS['dp-latency'] = host => dlCalc(host, [{ id: 'm', label: 'Độ trễ phản hồi (ms)', v: 250, min: 0, max: 5000, step: 10 }], v => {
  const m = v.m; const s = m < 100 ? ['Tức thì', '#16a34a'] : m <= 300 ? ['Nhận thấy được', '#ca8a04'] : m <= 1000 ? ['Cảm giác "máy đang làm việc"', '#ea580c'] : ['Người dùng bắt đầu chuyển sự chú ý sang việc khác', '#dc2626'];
  return '<b style="color:' + s[1] + '">' + s[0] + '</b><div style="height:10px;border-radius:5px;background:' + s[1] + ';width:' + Math.min(100, m / 20) + '%;margin-top:6px"></div>';
});
WIDGETS['dp-rtt'] = host => dlCalc(host, [
  { id: 'n', label: 'Số request', v: 40, min: 1, step: 1 }, { id: 'net', label: 'Mạng', v: '50|0', opts: [['50|0', 'WiFi máy tính (RTT 50 ms)'], ['300|1500', '3G di động (RTT 300 ms + kênh vô tuyến 1,5 s)'], ['300|0', 'Di động, kênh đã mở']] }, { id: 'p', label: 'Kết nối song song', v: 6, min: 1, max: 8, step: 1 }
], v => {
  const [rtt, radio] = v.net.split('|').map(Number); const waves = Math.ceil(v.n / v.p), t = radio + rtt * (2 + waves) + 0;
  return 'Ước tính chỉ riêng độ trễ: ' + radio + ' ms (kênh) + (2 + ' + waves + ') × ' + rtt + ' ms = <b>' + (t / 1000).toFixed(2) + ' giây</b>' + (t > 3000 ? '<br>⛔ Vượt 3 giây: tới 40% người dùng có thể bỏ đi. Giảm số request!' : t > 2000 ? '<br>⚠ Vượt chuẩn 2 giây.' : '<br>✅ Trong chuẩn 2 giây.') + '<br><i>Mô hình đơn giản (chưa tính băng thông, xử lý): để thấy tác động của số request trên mạng độ trễ cao.</i>';
});
WIDGETS['dp-logo'] = host => {
  const D = [['PNG-24 trong suốt', 7.6], ['PNG-8 nền đặc', 5.0], ['PNG-8 với matte xanh nhạt', 2.7], ['JPEG 75% nền đặc', 20.2]];
  host.innerHTML = '<div class="row"><label>Định dạng <select id="f">' + D.map((d, i) => '<option value="' + i + '">' + d[0] + '</option>').join('') + '</select></label></div><div class="calc" id="o"></div>';
  const draw = () => { const i = +host.querySelector('#f').value; host.querySelector('#o').innerHTML = D.map((d, k) => '<div style="display:flex;gap:8px;align-items:center;margin:3px 0' + (k === i ? ';font-weight:700' : '') + '"><span style="flex:0 0 190px">' + d[0] + '</span><span style="height:10px;border-radius:5px;background:' + (d[1] === 2.7 ? '#16a34a' : '#0ea5e9') + ';width:' + d[1] * 8 + 'px"></span>' + d[1] + ' KB</div>').join('') + (i === 2 ? '✅ Nhỏ nhất: matte trộn bóng với nền xanh nhạt nên không cần trong suốt.' : i === 3 ? '⛔ JPEG nặng nhất vì logo có cạnh sắc và nền đặc.' : ''); };
  host.querySelector('#f').onchange = draw; draw();
};
WIDGETS['dp-pipeline'] = host => dlHot(host, {
  vb: [720, 150], label: 'Chu trình tải trang', intro: 'Bấm một bước.',
  parts: ['DNS lookup|#8b5cf6|Tìm máy chủ ứng với tên miền (trình duyệt nhớ kết quả một thời gian).', 'Kết nối (+SSL)|#f97316|Thiết lập kết nối TCP; HTTPS cần thêm đàm phán SSL.', 'Request|#0ea5e9|Gửi yêu cầu nội dung.', 'TTFB|#16a34a|Byte đầu tiên nhận về: chỉ báo tốc độ backend.', 'Tải xuống|#64748b|Tải nội dung; càng lớn càng lâu.', 'DOM + CSSOM|#a855f7|Phân tích HTML và CSS (JS chặn dựng DOM, CSS chặn render).', 'Render tree + vẽ|#dc2626|Tính kích thước, vị trí rồi vẽ lên màn hình.'].map((s, i) => { const a = s.split('|'); return { n: a[0], x: 8 + i * 102, y: 50, w: 96, h: 50, c: a[1], t: a[2], s: 10 }; })
});
WIDGETS['dp-waterfall'] = host => {
  host.innerHTML = '<div class="row"><label>Số request <input id="n" type="range" min="4" max="40" value="16"> <b id="nv"></b></label><label>RTT (ms) <input id="r" type="range" min="20" max="400" value="100" step="10"> <b id="rv"></b></label><label>Kết nối song song <input id="c" type="range" min="1" max="8" value="6"> <b id="cv"></b></label></div>';
  const svg = dlSvg(host, [620, 260], 'Waterfall'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const draw = () => {
    const n = +host.querySelector('#n').value, r = +host.querySelector('#r').value, c = +host.querySelector('#c').value; host.querySelector('#nv').textContent = n; host.querySelector('#rv').textContent = r; host.querySelector('#cv').textContent = c; svg.innerHTML = '';
    const free = new Array(c).fill(0); let end = 0; const rows = [];
    for (let i = 0; i < n; i++) { const k = free.indexOf(Math.min(...free)); const first = i < c; const st = free[k] + (i === 0 ? 0 : 0); const dur = (first ? 2 * r : r) + 40 + (i === 0 ? 60 : 80); rows.push([st, dur, k, first]); free[k] = st + dur; end = Math.max(end, free[k]); }
    const X = t => 20 + t / end * 560, h = Math.min(8, 220 / n);
    rows.forEach((q, i) => { const y = 14 + i * (h + 1.5); if (q[3]) rfEl('rect', { x: X(q[0]), y, width: X(q[0] + r) - X(q[0]), height: h, fill: '#8b5cf6' }, svg); if (q[3]) rfEl('rect', { x: X(q[0] + r), y, width: X(q[0] + 2 * r) - X(q[0] + r), height: h, fill: '#f97316' }, svg); rfEl('rect', { x: X(q[0] + (q[3] ? 2 * r : 0)), y, width: X(q[0] + q[1]) - X(q[0] + (q[3] ? 2 * r : 0)), height: h, fill: '#0ea5e9' }, svg); });
    dlTxt(svg, 310, 252, 'tím: DNS · cam: kết nối · xanh: request + tải', { s: 10 });
    o.innerHTML = 'Tổng ≈ <b>' + (end / 1000).toFixed(2) + ' giây</b> với ' + n + ' request / ' + c + ' kết nối. Giảm số request (sprite, gộp file) hoặc giảm số miền khiến mỗi kết nối phải DNS + kết nối mới.';
  };
  host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
};
WIDGETS['dp-crp'] = host => dlDiag(host, [
  ['CSS trong head, không có media', ['Chặn render (render-blocking) — bắt buộc'], 'Giữ ở head; giảm kích thước, gộp thành ít file; tránh @import.'],
  ['CSS với media="print"', ['Không chặn render ban đầu'], 'Chỉ áp dụng khi in.'],
  ['CSS với media="(min-width: 61.5em)"', ['Chỉ chặn khi viewport ≥ 61,5em'], 'Trên màn hình nhỏ hơn thì không chặn.'],
  ['Script đồng bộ trong head', ['Chặn dựng DOM cho tới khi tải và chạy xong'], 'Chuyển xuống cuối trang hoặc thêm async.'],
  ['Script có thuộc tính async', ['Không chặn dựng DOM; chạy khi tải xong'], 'Thứ tự không đảm bảo; cẩn thận phụ thuộc và dịch chuyển bố cục.'],
  ['Phần tử display:none', ['Không nằm trong render tree'], 'Nhưng ảnh bên trong vẫn có thể bị tải.']
], 'Tài nguyên');
WIDGETS['dp-env'] = host => dlCalc(host, [{ id: 'd', label: 'Khoảng cách tới máy chủ (km)', v: 12000, step: 100 }, { id: 'n', label: 'Mạng', v: '1', opts: [['1', 'Cáp/WiFi tốt'], ['2.5', 'Mạng trung bình'], ['5', 'Mạng chậm/di động']] }, { id: 'q', label: 'Số request tuần tự', v: 10 }, { id: 'cdn', label: 'Dùng CDN', v: 'n', opts: [['n', 'Không'], ['y', 'Có (máy chủ gần ~300 km)']] }], v => {
  const km = v.cdn === 'y' ? 300 : v.d, rtt = (km / 200000 * 2 * 1000) * 1.8 + 15 * v.n, t = rtt * v.q;
  return 'RTT ước tính ≈ <b>' + rtt.toFixed(0) + ' ms</b> (ánh sáng trong cáp ≈ 200.000 km/s) ⇒ ' + v.q + ' request ≈ <b>' + (t / 1000).toFixed(2) + ' giây</b> chỉ riêng độ trễ.' + (v.cdn === 'n' && v.d > 8000 ? '<br>💡 Người dùng ở xa: CDN giảm độ trễ đáng kể.' : '');
});

// ----- Chương 3
WIDGETS['dp-format'] = host => dlCalc(host, [{ id: 'k', label: 'Loại ảnh', v: 'photo', opts: [['photo', 'Ảnh chụp, nhiều màu'], ['few', 'Ít màu, cạnh sắc (logo, UI)'], ['alpha', 'Cần trong suốt một phần (bóng đổ)'], ['anim', 'Animation đơn giản'], ['icon', 'Icon một màu / vector']] }], v => ({
  photo: '<b>JPEG</b> (xuất progressive, giảm nhiễu, thử nhiều mức chất lượng). Tránh PNG-24 (lớn 5–10 lần).', few: '<b>PNG-8</b> (thường nhỏ hơn GIF); giảm số màu và dither.', alpha: '<b>PNG-24</b> (hoặc PNG-8 + matte nếu nền cố định). Nếu không cần trong suốt mà nhiều màu → JPEG.', anim: 'Thử <b>CSS3 animation</b> trước; nếu cần dùng <b>GIF</b> (giảm màu, giảm nhiễu dọc).', icon: '<b>SVG</b> (retina đẹp, nhỏ) hoặc sprite/CSS3 gradient; dự phòng PNG cho trình duyệt cũ.'
}[v.k]));
WIDGETS['dp-jpeg'] = host => dlCalc(host, [{ id: 'q', label: 'Chất lượng (1–100)', v: 75, min: 1, max: 100, step: 1 }, { id: 'n', label: 'Nhiễu (%)', v: 5, min: 0, max: 20, step: 1 }, { id: 'p', label: 'Progressive', v: 'n', opts: [['n', 'Baseline'], ['y', 'Progressive']] }], v => {
  const size = 10 * (0.25 + 1.5 * Math.pow(v.q / 100, 2)) * (1 + 0.1 * v.n) * (v.p === 'y' ? 0.97 : 1);
  return 'Ước tính (ảnh minh họa): <b>' + size.toFixed(1) + ' KB</b>' + (v.q < 40 ? ' · ⚠ nhiều artifact quanh cạnh tương phản' : '') + (v.n >= 10 ? ' · ⚠ nhiễu 10% làm file gần gấp đôi nhiễu 5%' : '') + '<br>' + (v.p === 'y' ? 'Progressive hiện cả ảnh chất lượng thấp rồi nâng dần (nhưng Mobile Safari không dựng dần; tốn CPU).' : 'Baseline hiện từ trên xuống từng hàng.');
});
WIDGETS['dp-gif'] = host => dlCalc(host, [{ id: 'c', label: 'Số màu', v: 40, min: 2, max: 256, step: 1 }, { id: 'd', label: 'Dithering (0–100)', v: 0, min: 0, max: 100, step: 5 }, { id: 'o', label: 'Hướng gradient', v: 'h', opts: [['h', 'Ngang (mẫu lặp theo hàng)'], ['v', 'Dọc (nhiễu dọc)']] }], v => {
  const s = 4.8 * (0.5 + v.c / 80) * (1 + v.d / 100) * (v.o === 'v' ? 2.2 : 1);
  return 'GIF ước tính ≈ <b>' + s.toFixed(1) + ' KB</b> (gốc: 40 màu, dither 0 = 4,8 KB; dither 100 = 9,7 KB; gradient dọc = 21 KB).<br>' + (v.o === 'v' ? '⚠ GIF nén theo mẫu ngang nên chi tiết dọc làm file phình ra.' : '') + (v.d >= 50 ? ' Dithering làm mịn màu nhưng nặng hơn.' : '') + '<br>💡 Thử PNG-8: nén cả mẫu ngang và dọc, thường nhỏ hơn.';
});
WIDGETS['dp-compress'] = host => dlCalc(host, [{ id: 'n', label: 'Số ảnh', v: 30 }, { id: 'kb', label: 'KB trung bình / ảnh', v: 60 }, { id: 's', label: 'Tiết kiệm khi nén lossless (%)', v: 20 }, { id: 'r', label: 'RTT (ms)', v: 300 }], v => {
  const tot = v.n * v.kb, sv = tot * v.s / 100; return 'Tổng ảnh: <b>' + (tot / 1000).toFixed(2) + ' MB</b> → tiết kiệm <b>' + (sv / 1000).toFixed(2) + ' MB</b> (' + sv.toFixed(0) + ' KB) mà không giảm chất lượng. Với 1 Mbps ≈ <b>' + (sv * 8 / 1000).toFixed(1) + ' giây</b> tải ít hơn.';
});
WIDGETS['dp-sprite'] = host => dlCalc(host, [{ id: 'n', label: 'Số icon', v: 12 }, { id: 'kb', label: 'KB mỗi icon rời', v: 1.5, step: 0.1 }, { id: 'sp', label: 'KB của sprite gộp', v: 9, step: 0.5 }, { id: 'r', label: 'RTT (ms)', v: 200 }, { id: 'c', label: 'Kết nối song song', v: 6 }], v => {
  const t1 = Math.ceil(v.n / v.c) * v.r + v.n * v.kb * 8 / 1000 * 1000 / 8 * 0.1, t2 = v.r + v.sp * 0.8;
  return 'Ảnh rời: ' + v.n + ' request ≈ <b>' + t1.toFixed(0) + ' ms</b> (' + (v.n * v.kb).toFixed(1) + ' KB).<br>Sprite: 1 request ≈ <b>' + t2.toFixed(0) + ' ms</b> (' + v.sp + ' KB + CSS).<br>' + (t2 < t1 ? '✅ Sprite nhanh hơn dù có thể nặng hơn.' : '⚠ Sprite không lợi trong cấu hình này.') + ' Thí nghiệm Etsy: 26 ảnh → −21% request, −35% thời gian, +60 KB.';
});
WIDGETS['dp-replace'] = host => dlDiag(host, [
  ['Nền gradient lặp, bevel nút', ['CSS3 gradient'], 'Bớt một request, dễ đổi màu; nhớ background-color dự phòng và tiền tố trình duyệt.'],
  ['Icon nhỏ dùng khắp site', ['Sprite hoặc SVG'], 'Sprite giảm request (nhưng phá cache khi đổi); SVG nét ở mọi mật độ pixel.'],
  ['Ảnh cực nhỏ (tam giác, chấm)', ['Data URI (Base64) trong CSS'], 'Bỏ request nhưng không cache riêng và CSS to hơn; đo trước.'],
  ['Logo một màu / icon cần retina', ['SVG'], 'Xóa DOCTYPE, comment Generator; nén bằng SVGO/Scour; dự phòng PNG (Grunticon).'],
  ['Spinner / loading indicator', ['CSS3 animation'], 'Nhẹ hơn GIF.'],
  ['Ảnh chụp lớn', ['Vẫn là ảnh (JPEG)'], 'Không thay được; xuất đúng kích thước, nén thêm, dùng picture/srcset.']
], 'Loại ảnh');

// ----- Chương 4
WIDGETS['dp-semantic'] = host => quizBtns(host, [
  ['.right', 1, ['Có ngữ nghĩa', 'Không (mô tả vị trí)']], ['#login', 0, ['Có ngữ nghĩa', 'Không (mô tả vị trí)']], ['.blue', 1, ['Có ngữ nghĩa', 'Không (mô tả màu)']], ['.breadcrumbs', 0, ['Có ngữ nghĩa', 'Không']], ['nav', 0, ['Có ngữ nghĩa (HTML5)', 'Không']], ['.big-left', 1, ['Có ngữ nghĩa', 'Không (mô tả hình thức)']]
]);
WIDGETS['dp-css-merge'] = host => dlCalc(host, [{ id: 'n', label: 'Số phần tử giống nhau', v: 3 }, { id: 'l', label: 'Số dòng khai báo mỗi phần tử', v: 6 }, { id: 'p', label: 'Phần trùng nhau (%)', v: 70, max: 100 }], v => {
  const before = v.n * v.l, shared = Math.round(v.l * v.p / 100), after = shared + v.n * (v.l - shared) + 0; return 'Trước: <b>' + before + '</b> dòng · sau gộp: <b>' + after + '</b> dòng (tiết kiệm <b>' + (100 - after / before * 100).toFixed(0) + '%</b>). Nếu chuẩn hóa hẳn thành một pattern, còn ít hơn nữa.';
});
WIDGETS['dp-font'] = host => dlCalc(host, [{ id: 'w', label: 'Số độ đậm', v: 4, min: 1 }, { id: 'kb', label: 'KB mỗi file', v: 60 }, { id: 'sub', label: 'Subset', v: '1', opts: [['1', 'Toàn bộ'], ['0.4', 'Chỉ Latin'], ['0.05', 'Chỉ vài ký tự']] }, { id: 'rtt', label: 'RTT (ms)', v: 300 }, { id: 'lg', label: 'Chỉ tải trên màn hình lớn', v: 'n', opts: [['n', 'Không'], ['y', 'Có (bỏ trên di động)']] }], v => {
  const kb = v.w * v.kb * +v.sub, t = v.rtt * Math.ceil(v.w / 6) + kb * 8 / 1; return 'Font: <b>' + kb.toFixed(0) + ' KB</b>, ' + v.w + ' request ⇒ khoảng <b>' + (t / 1000).toFixed(1) + ' giây</b> trên 1 Mbps' + (v.lg === 'y' ? '. Trên di động: <b>0 KB</b> (dùng font hệ thống).' : '.') + '<br>Mỗi độ đậm thêm là một request và nhiều KB — hãy đo ảnh hưởng tới chỉ số tương tác.';
});
WIDGETS['dp-load-order'] = host => dlCalc(host, [{ id: 'c', label: 'CSS đặt ở', v: 'h', opts: [['h', 'head'], ['b', 'cuối body']] }, { id: 'j', label: 'JavaScript', v: 'e', opts: [['h', 'head, đồng bộ'], ['e', 'cuối body'], ['a', 'async']] }, { id: 'n', label: 'Số file CSS', v: 3 }], v => {
  const m = []; if (v.c === 'b') m.push('⛔ CSS cuối trang: nội dung hiện muộn hoặc nhảy khi style đến.'); else m.push('✅ CSS trong head: hiển thị dần.'); if (v.j === 'h') m.push('⛔ Script đồng bộ trong head chặn dựng DOM.'); else if (v.j === 'a') m.push('✅ async: không chặn (chú ý thứ tự và dịch chuyển bố cục).'); else m.push('✅ Script cuối trang: nội dung hiển thị trước.'); if (v.n > 1) m.push('⚠ ' + v.n + ' file CSS: gộp thành 1 (mục tiêu ≤ 30 KB), tránh @import.'); return m.join('<br>');
});
WIDGETS['dp-minify'] = host => dlCalc(host, [{ id: 's', label: 'Kích thước gốc (KB)', v: 100 }, { id: 'm', label: 'Minify giảm (%)', v: 15 }, { id: 'g', label: 'gzip giảm thêm (%)', v: 70 }], v => {
  const a = v.s * (1 - v.m / 100), b = a * (1 - v.g / 100); return 'Gốc ' + v.s + ' KB → minify <b>' + a.toFixed(1) + ' KB</b> → minify + gzip <b>' + b.toFixed(1) + ' KB</b> (tiết kiệm ' + (100 - b / v.s * 100).toFixed(0) + '%).';
});

// ----- Chương 5
WIDGETS['dp-bgimg'] = host => dlDiag(host, [
  ['<img> bên trong div display:none (media query)', ['Trình duyệt VẪN tải ảnh'], 'Đừng làm vậy. Dùng picture/srcset hoặc không đưa vào HTML.'],
  ['div background-image + display:none trên chính nó', ['Vẫn tải ảnh'], 'Không hiệu quả.'],
  ['Ẩn phần tử CHA của phần tử có background-image', ['Không tải ảnh'], '#parent { display:none } trong media query.'],
  ['Hai media query loại trừ nhau (min 601 / max 600)', ['Chỉ tải ảnh khớp'], 'Trình duyệt cũ có thể tải cả hai nếu các media query chồng lấn.'],
  ['Mặc định regular.png + media query device-pixel-ratio 1.5 → retina.png', ['Chỉ tải bản retina trên màn retina'], 'Android 2.x ratio ≥ 1.5 tải cả hai (hiếm gặp).']
], 'Kỹ thuật');
WIDGETS['dp-srcset'] = host => dlCalc(host, [{ id: 'w', label: 'Viewport (px)', v: 1200, step: 10 }, { id: 'd', label: 'Mật độ điểm ảnh (DPR)', v: 1, step: 0.5 }], v => {
  const disp = v.w >= 1000 ? v.w * 0.333 : v.w, need = disp * v.d, L = [400, 800, 1600], pick = L.find(x => x >= need) || 1600;
  return 'sizes → ảnh hiển thị ≈ <b>' + disp.toFixed(0) + ' px</b> × DPR ' + v.d + ' = cần ≈ <b>' + need.toFixed(0) + ' px</b> ⇒ chọn <b>' + (pick === 400 ? 'small.jpg 400w' : pick === 800 ? 'medium.jpg 800w' : 'big.jpg 1600w') + '</b>.<br><i>srcset="small.jpg 400w, medium.jpg 800w, big.jpg 1600w" · sizes="(min-width: 1000px) 33.3vw, 100vw"</i>';
});
WIDGETS['dp-budget'] = host => dlCalc(host, [{ id: 'w', label: 'Chiều rộng (px)', v: 600 }, { id: 'kb', label: 'Trọng lượng trang (KB)', v: 420 }, { id: 't', label: 'Thời gian tải (giây)', v: 2.4, step: 0.1 }, { id: 'si', label: 'Speed Index', v: 1200 }], v => {
  const lim = v.w >= 900 ? 500 : v.w <= 640 ? 300 : 400, r = []; r.push(v.kb <= lim ? '✅ Trọng lượng ' + v.kb + ' KB ≤ ' + lim + ' KB' : '⛔ Trọng lượng ' + v.kb + ' KB vượt ngân sách ' + lim + ' KB'); r.push(v.t <= 2 ? '✅ Thời gian tải đạt' : '⛔ Thời gian ' + v.t + ' s vượt 2 s'); r.push(v.si <= 1000 ? '✅ Speed Index đạt' : '⛔ Speed Index ' + v.si + ' vượt 1.000'); return r.join('<br>') + '<br><i>Ngân sách ví dụ: ≥ 900 px: 500 KB; ≤ 640 px: 300 KB (giữa: nội suy 400 KB).</i>';
});

// ----- Chương 6
WIDGETS['dp-tools'] = host => dlDiag(host, [
  ['Kiểm tra nhanh khi đang phát triển trang', ['YSlow, Chrome DevTools (audit, Network)'], 'Chạy khi phát triển và mỗi quý.'],
  ['Tìm vùng gây giật khi cuộn', ['Chrome DevTools: FPS meter, Timeline'], 'Thử ẩn từng phần tử/bóng/animation để tìm thủ phạm.'],
  ['So sánh trước–sau một thay đổi lớn', ['WebPagetest (5 lần chạy, filmstrip)'], 'Xem waterfall và Speed Index.'],
  ['Theo dõi xu hướng hằng tháng', ['Catchpoint, Gomez, wpt-script (kiểm thử tổng hợp)'], 'Dashboard + cảnh báo.'],
  ['Biết người dùng thật đang gặp gì', ['RUM: Google Analytics, mPulse, Glimpse'], 'Phân đoạn theo địa lý, mạng; xem trung vị và p95.'],
  ['Kiểm thử site đang phát triển (chưa public)', ['WebPagetest private instance'], 'Có thể tự động hóa.']
], 'Mục tiêu');
WIDGETS['dp-speedindex'] = host => {
  host.innerHTML = '<div class="row"><label>Trang B: nội dung hiện sớm thế nào <input id="e" type="range" min="1" max="10" value="3"></label></div>';
  const svg = dlSvg(host, [560, 230], 'Visual progress'); const o = document.createElement('div'); o.className = 'calc'; host.appendChild(o);
  const A = t => t < 2 ? 0 : Math.min(1, (t - 2) / 1.2), si = f => { let s = 0; for (let t = 0; t < 6; t += 0.05) s += (1 - f(t)) * 0.05; return s * 1000; };
  const draw = () => { const k = +host.querySelector('#e').value, B = t => Math.min(1, (1 - Math.exp(-t * k / 4))); svg.innerHTML = ''; const X = t => 30 + t * 80, Y = p => 190 - p * 150; rfEl('line', { x1: 30, y1: 190, x2: 520, y2: 190, stroke: 'currentColor' }, svg);
    [[A, '#dc2626'], [t => Math.min(1, B(t) * (t < 5.9 ? 0.9 : 1)), '#16a34a']].forEach((q, i) => { let d = 'M'; for (let t = 0; t <= 6; t += 0.1) d += (t ? ' L' : '') + X(t) + ' ' + Y(i ? Math.min(1, B(t)) : A(t)); rfEl('path', { d, fill: 'none', stroke: q[1], 'stroke-width': 2.5 }, svg); });
    dlTxt(svg, 100, 30, 'A (đỏ): trống 2 s rồi hiện', { c: '#dc2626', a: 'start' }); dlTxt(svg, 100, 48, 'B (xanh): hiện dần sớm', { c: '#16a34a', a: 'start' }); dlTxt(svg, 280, 215, 'thời gian (giây)', { s: 10 });
    o.innerHTML = 'Speed Index A ≈ <b>' + si(A).toFixed(0) + '</b>, B ≈ <b>' + si(t => Math.min(1, B(t))).toFixed(0) + '</b> (nhỏ hơn là tốt). Cả hai "xong" gần cùng lúc nhưng B cảm giác nhanh hơn vì nội dung nhìn thấy hiện sớm.'; };
  host.querySelector('#e').oninput = draw; draw();
};
WIDGETS['dp-percentile'] = host => {
  host.innerHTML = '<div class="row"><label>Thời gian tải (giây), cách nhau bằng dấu phẩy <input id="t" type="text" value="1.2, 1.4, 1.1, 1.8, 2.0, 1.5, 1.3, 9.5, 1.6, 1.7, 1.2, 2.2, 1.4, 1.5, 12.0, 1.3, 1.9, 1.6, 1.4, 1.5" style="width:420px"></label></div><div class="calc" id="o"></div>';
  const draw = () => { const a = host.querySelector('#t').value.split(/[,\s]+/).map(parseFloat).filter(x => !isNaN(x)).sort((x, y) => x - y); const q = p => a.length ? a[Math.min(a.length - 1, Math.ceil(p * a.length) - 1)] : 0; const avg = a.reduce((s, x) => s + x, 0) / (a.length || 1); host.querySelector('#o').innerHTML = a.length + ' mẫu · trung bình <b>' + avg.toFixed(2) + ' s</b> · trung vị <b>' + q(0.5).toFixed(2) + ' s</b> · p95 <b>' + q(0.95).toFixed(2) + ' s</b><br>Trung bình bị kéo bởi vài mẫu rất chậm; p95 cho thấy mức 5% người dùng chậm nhất phải chịu (Google Analytics chỉ cho trung bình).'; };
  host.querySelector('#t').oninput = draw; draw();
};

// ----- Chương 7, 8
WIDGETS['dp-tradeoff'] = host => dlCalc(host, [{ id: 'r', label: 'Request thêm', v: 3, step: 1 }, { id: 'kb', label: 'KB thêm', v: 150, step: 10 }, { id: 'a', label: 'Giá trị thẩm mỹ (0–10)', v: 6, min: 0, max: 10 }, { id: 'c', label: 'Chi phí vận hành (giờ)', v: 8 }, { id: 'rtt', label: 'RTT (ms)', v: 300 }], v => {
  const dt = (v.r * v.rtt / 6 + v.kb * 8 / 1.5) / 1000, risk = dt * 2 + v.c / 20, score = v.a - risk; return 'Chậm thêm khoảng <b>' + dt.toFixed(2) + ' s</b> (mạng di động). Điểm cân bằng = thẩm mỹ ' + v.a + ' − rủi ro ' + risk.toFixed(1) + ' = <b>' + score.toFixed(1) + '</b> ⇒ ' + (score > 3 ? '✅ Có thể đáng — nhưng hãy thử A/B.' : score > 0 ? '⚠ Lưỡng lự: tìm cách bù trong ngân sách.' : '⛔ Chi phí lớn hơn lợi ích: bỏ hoặc đơn giản hóa.');
});
WIDGETS['dp-budget2'] = host => dlCalc(host, [{ id: 'b', label: 'Ngân sách trọng lượng (KB)', v: 800 }, { id: 'cur', label: 'Hiện tại (KB)', v: 720 }, { id: 'add', label: 'Thêm (ảnh hero, KB)', v: 150 }, { id: 'sav', label: 'Tiết kiệm bù (KB)', v: 60 }], v => {
  const after = v.cur + v.add - v.sav; return 'Sau thay đổi: <b>' + after + ' KB</b> / ' + v.b + ' KB ⇒ ' + (after <= v.b ? '✅ trong ngân sách' : '⛔ vượt ' + (after - v.b) + ' KB: cần bù thêm (bớt độ đậm font, bỏ script tracking, nén ảnh...)');
});
WIDGETS['dp-roi'] = host => dlCalc(host, [{ id: 'v', label: 'Lượt truy cập / tháng', v: 500000, step: 1000 }, { id: 'c', label: 'Tỉ lệ chuyển đổi (%)', v: 2, step: 0.1 }, { id: 'o', label: 'Giá trị đơn hàng', v: 40 }, { id: 'u', label: 'Tăng chuyển đổi do nhanh hơn (%)', v: 3 }, { id: 'h', label: 'Giờ công bỏ ra', v: 24 }, { id: 'r', label: 'Chi phí / giờ', v: 40 }], v => {
  const base = v.v * v.c / 100 * v.o, gain = base * v.u / 100, cost = v.h * v.r; return 'Doanh thu cơ sở ≈ ' + base.toLocaleString('vi-VN') + ' / tháng → tăng ≈ <b>' + gain.toLocaleString('vi-VN') + ' / tháng</b>; chi phí công ≈ ' + cost.toLocaleString('vi-VN') + ' ⇒ hoàn vốn sau ≈ <b>' + (cost / (gain || 1)).toFixed(2) + ' tháng</b>.<br><i>Hãy dùng số đo thật từ A/B test thay cho giả định.</i>';
});
WIDGETS['dp-culture'] = host => dlDiag(host, [
  ['Cấp trên chưa quan tâm tới tốc độ', ['Hiệu năng vô hình, khó cảm nhận'], 'Gắn với chỉ số họ quan tâm (doanh thu...), thắng lợi nhanh + A/B test, cho họ xem filmstrip/video so sánh với đối thủ.'],
  ['Chỉ mình bạn lo hiệu năng, bắt đầu kiệt sức', ['Làm cảnh sát/lao công hiệu năng'], 'Giáo dục, đặt chuẩn nền, trao quyền, chia sẻ trách nhiệm; đội chuyên trách chỉ giữ vai trò champion.'],
  ['Đồng nghiệp không biết ảnh hưởng của họ', ['Thiếu giáo dục và dữ liệu trong công việc'], 'Lunch-and-learn, thanh công cụ/hiển thị thời gian trên trang đang làm, email hồi quy tự động.'],
  ['Không ai làm việc nhỏ về hiệu năng', ['Việc quá mơ hồ / quá lớn'], 'Lập danh sách trái chín thấp, ticket nhỏ vài giờ, đủ chi tiết.'],
  ['Cần động lực lâu dài', ['Thiếu ghi nhận'], 'Vinh danh công khai (performance heroes), công bố báo cáo hiệu năng định kỳ.']
], 'Tình huống');
// ===== Crash Profits (cp-*) =====
const cpF = (n, d) => (isFinite(n) ? n.toLocaleString('vi-VN', { maximumFractionDigits: d === undefined ? 2 : d }) : '—');
const cpP = n => cpF(n, 1) + '%';
function cpScore(host, items, bands, ttl) {
  host.innerHTML = '<div class="calc" id="l"></div><div class="info" id="m" style="margin-top:8px"></div>';
  const l = host.querySelector('#l'), m = host.querySelector('#m');
  l.innerHTML = (ttl ? '<div style="margin-bottom:6px"><b>' + ttl + '</b></div>' : '') + items.map((s, i) => '<label style="display:block;margin:4px 0"><input type="checkbox" data-i="' + i + '"> ' + s + '</label>').join('');
  const draw = () => { const n = l.querySelectorAll('input:checked').length; let b = bands[0]; bands.forEach(x => { if (n >= x[0]) b = x; }); m.innerHTML = '<b>' + n + '/' + items.length + ' dấu hiệu.</b> ' + b[1]; };
  l.onchange = draw; draw();
}
const cpBond = (face, cpn, r, yrs) => { let p = 0; for (let t = 1; t <= yrs; t++) p += face * cpn / 100 / Math.pow(1 + r / 100, t); return p + face / Math.pow(1 + r / 100, yrs); };

WIDGETS['cp-pe'] = host => dlCalc(host, [
  { id: 'e', label: 'Lợi nhuận/cp công bố', v: 5, step: 0.1 }, { id: 'x', label: 'Phóng đại (%)', v: 40, min: 0, max: 90 }, { id: 'pe', label: 'P/E hợp lý', v: 16.5, step: 0.5 }
], v => { const real = v.e * (1 - v.x / 100); return 'Lợi nhuận thật: <b>' + cpF(real) + '</b><br>Giá theo số công bố: <b>' + cpF(v.e * v.pe) + '</b><br>Giá theo số thật: <b>' + cpF(real * v.pe) + '</b><br>Giá "đáng giá" thấp hơn <b>' + cpP(v.x) + '</b>.'; });

WIDGETS['cp-avgdown'] = host => dlCalc(host, [
  { id: 'p1', label: 'Giá mua đầu', v: 100 }, { id: 'p2', label: 'Giá mua thêm', v: 50 }, { id: 'n1', label: 'Số cp đầu', v: 100 }, { id: 'n2', label: 'Số cp mua thêm', v: 100 }
], v => { const tot = v.p1 * v.n1 + v.p2 * v.n2, n = v.n1 + v.n2, avg = n ? tot / n : 0; return 'Giá bình quân: <b>' + cpF(avg) + '</b><br>Từ giá mua thêm cần tăng <b>' + cpP((avg / v.p2 - 1) * 100) + '</b> để hòa vốn.'; });

WIDGETS['cp-options'] = host => dlCalc(host, [
  { id: 'k', label: 'Giá thực hiện', v: 5 }, { id: 's', label: 'Giá cổ phiếu lúc bán', v: 10 }, { id: 'n', label: 'Số quyền', v: 10000, step: 100 }
], v => { const g = Math.max(0, v.s - v.k) * v.n; return 'Lãi nếu thực hiện rồi bán: <b>' + cpF(g, 0) + ' USD</b> (chi phí gần như bằng 0 với người được cấp).<br>' + (v.s <= v.k ? 'Ngoài tiền: quyền vô giá trị.' : 'Trong tiền: ' + cpF(v.s - v.k) + '/cp.') + '<br><i>Nhà đầu tư thường phải trả phí để mua quyền chọn tương tự.</i>'; });

WIDGETS['cp-pension'] = host => dlCalc(host, [
  { id: 'l', label: 'Lỗ quỹ hưu trí (tỷ USD)', v: 10 }, { id: 'y', label: 'Dàn trải trong (năm)', v: 5, min: 1, max: 30 }
], v => 'Mỗi năm ghi nhận: <b>' + cpF(v.l / v.y) + ' tỷ USD</b> thay vì <b>' + cpF(v.l) + ' tỷ</b> ngay.<br>Năm đầu "lợi nhuận" cao hơn thực tế tương ứng <b>' + cpF(v.l - v.l / v.y) + ' tỷ</b>.');

WIDGETS['cp-vip'] = host => dlCalc(host, [
  { id: 'ip', label: 'Giá IPO', v: 20 }, { id: 'd1', label: 'Giá ngày đầu', v: 80 }, { id: 'ex', label: 'Giá sau này', v: 2 }, { id: 'n', label: 'Số cp', v: 1000, step: 100 }
], v => 'VIP (mua IPO, bán ngày đầu): <b>' + cpF((v.d1 - v.ip) * v.n, 0) + ' USD</b>.<br>Nhà đầu tư nhỏ (mua ngày đầu, giữ): <b>' + cpF((v.ex - v.d1) * v.n, 0) + ' USD</b> (' + cpP((v.ex / v.d1 - 1) * 100) + ').');

WIDGETS['cp-loss'] = host => dlCalc(host, [{ id: 'l', label: 'Mức lỗ (%)', v: 98, min: 0, max: 99.9, step: 0.5 }],
  v => 'Cần tăng <b>' + cpP((1 / (1 - v.l / 100) - 1) * 100) + '</b> để hòa vốn.<br>Tức gấp <b>' + cpF(1 / (1 - v.l / 100)) + '</b> lần giá hiện tại.');

WIDGETS['cp-conflict'] = host => cpScore(host, [
  'Hãng môi giới từng thu phí bảo lãnh/tư vấn từ công ty này', 'Hãng có cho công ty này vay hoặc muốn lấy việc kinh doanh sắp tới', 'Bonus của nhà phân tích gắn với doanh thu ngân hàng đầu tư', 'Chưa bao giờ có khuyến nghị "bán" trên công ty này', 'Báo cáo không nêu quan hệ kinh doanh của hãng với công ty'
], [[0, '✅ Chưa thấy xung đột rõ.'], [1, '🟡 Có một dấu hiệu: cần thêm nguồn độc lập.'], [3, '🔴 Nhiều dấu hiệu: khuyến nghị có thể thiên lệch, đừng hành động dựa trên nó.']], 'Đánh dấu điều đúng:');

WIDGETS['cp-fundratio'] = host => dlCalc(host, [{ id: 'a', label: 'Tài sản quỹ', v: 80 }, { id: 'l', label: 'Nghĩa vụ phải trả', v: 100 }],
  v => 'Tỷ lệ đủ vốn: <b>' + cpP(v.l ? v.a / v.l * 100 : 0) + '</b><br>' + (v.a >= v.l ? 'Đủ vốn (thặng dư ' + cpF(v.a - v.l) + ').' : 'Thiếu hụt <b>' + cpF(v.l - v.a) + '</b>: công ty phải bù, ảnh hưởng lợi nhuận.'));

WIDGETS['cp-vise'] = host => dlCalc(host, [{ id: 'd', label: 'Nợ đến hạn', v: 100 }, { id: 'c', label: 'Tiền mặt', v: 20 }, { id: 'r', label: 'Doanh thu kỳ này', v: 100 }, { id: 'f', label: 'Doanh thu giảm (%)', v: 30, min: 0, max: 100 }],
  v => { const rev = v.r * (1 - v.f / 100), cov = v.c + rev; return 'Nguồn tiền: <b>' + cpF(cov) + '</b> vs nợ <b>' + cpF(v.d) + '</b><br>' + (cov >= v.d ? '✅ Vẫn trả được (chưa tính chi phí hoạt động).' : '🔴 Thiếu <b>' + cpF(v.d - cov) + '</b>: phải vay thêm hoặc bán tài sản.'); });

WIDGETS['cp-advisor'] = host => cpScore(host, [
  'Hưởng hoa hồng khi bạn mua bán', 'Có chỉ tiêu doanh số hoặc thưởng bán sản phẩm của hãng', 'Gợi ý sản phẩm nội bộ của hãng nhiều hơn sản phẩm khác', 'Không cho bạn biết các khoản phí', 'Tránh trả lời câu hỏi về hồ sơ pháp lý của họ'
], [[0, '✅ Có vẻ nghiêng về vai trò cố vấn.'], [2, '🟡 Lẫn lộn giữa tư vấn và bán hàng.'], [4, '🔴 Giống người bán hàng hơn: dùng họ để thực hiện lệnh, lấy lời khuyên từ nguồn độc lập.']], 'Đánh dấu điều đúng với người tư vấn của bạn:');

WIDGETS['cp-breakeven'] = host => dlCalc(host, [{ id: 'l', label: 'Lỗ (%)', v: 50, min: 1, max: 99 }, { id: 'r', label: 'Sinh lời/năm (%)', v: 8, min: 0.1 }],
  v => 'Cần <b>' + cpF(Math.log(1 / (1 - v.l / 100)) / Math.log(1 + v.r / 100), 1) + ' năm</b> để gỡ lỗ.<br>Mức tăng cần có tổng cộng: <b>' + cpP((1 / (1 - v.l / 100) - 1) * 100) + '</b>.');

WIDGETS['cp-payoff'] = host => dlCalc(host, [{ id: 'b', label: 'Dư nợ', v: 100000, step: 1000 }, { id: 'rd', label: 'Lãi suất nợ (%)', v: 7 }, { id: 'ri', label: 'Lợi suất kỳ vọng (%)', v: 4 }, { id: 't', label: 'Thuế lợi suất (%)', v: 15 }],
  v => { const net = v.ri * (1 - v.t / 100); return 'Lợi suất sau thuế: <b>' + cpP(net) + '</b> so với lãi nợ <b>' + cpP(v.rd) + '</b>.<br>Mỗi năm ' + (v.rd > net ? 'trả nợ tiết kiệm hơn khoảng <b>' + cpF(v.b * (v.rd - net) / 100, 0) + '</b>.' : 'đầu tư có lợi hơn khoảng <b>' + cpF(v.b * (net - v.rd) / 100, 0) + '</b> (chưa tính rủi ro).'); });

WIDGETS['cp-ma'] = host => dlCalc(host, [{ id: 'p', label: 'Giá chỉ số', v: 1000 }, { id: 'a20', label: 'TB 20 ngày', v: 1020 }, { id: 'a50', label: 'TB 50 ngày', v: 1060 }, { id: 'a200', label: 'TB 200 ngày', v: 1150 }],
  v => { const below = [v.a20, v.a50, v.a200].filter(a => v.p < a).length; return 'Giá nằm dưới <b>' + below + '/3</b> đường trung bình.<br>' + ['✅ Xu hướng tăng rõ.', '🟡 Bắt đầu yếu: xem xét giảm bớt.', '🟠 Yếu: bán dần phần dễ tổn thương.', '🔴 Cả ba đường đều bị thủng: xu hướng giảm rõ.'][below]; });

WIDGETS['cp-fdic'] = host => dlCalc(host, [{ id: 'd', label: 'Số tiền gửi (USD)', v: 250000, step: 1000 }, { id: 'lim', label: 'Hạn mức bảo hiểm', v: 100000, step: 1000 }],
  v => { const ins = Math.min(v.d, v.lim); return 'Được bảo hiểm: <b>' + cpF(ins, 0) + '</b><br>Rủi ro: <b>' + cpF(v.d - ins, 0) + '</b> (' + cpP(v.d ? (v.d - ins) / v.d * 100 : 0) + ').<br><i>Hạn mức khác nhau theo nước và thời điểm.</i>'; });

WIDGETS['cp-bond'] = host => dlCalc(host, [{ id: 'c', label: 'Lãi coupon (%)', v: 5 }, { id: 'y', label: 'Kỳ hạn (năm)', v: 10, min: 1, max: 40 }, { id: 'r', label: 'Lãi suất thị trường (%)', v: 7, min: 0.1 }],
  v => { const p = cpBond(100, v.c, v.r, v.y); return 'Giá trái phiếu mệnh giá 100: <b>' + cpF(p) + '</b> (' + cpP(p - 100) + ').<br>' + (v.r > v.c ? 'Lãi thị trường cao hơn coupon → giá dưới mệnh giá.' : 'Lãi thị trường thấp hơn coupon → giá trên mệnh giá.'); });

WIDGETS['cp-deficit'] = host => dlCalc(host, [{ id: 'a', label: 'Thặng dư công bố', v: 120 }, { id: 'ss', label: 'Quỹ an sinh xã hội đã dùng', v: 160 }],
  v => { const real = v.a - v.ss; return 'Thực tế: <b>' + (real >= 0 ? '+' : '') + cpF(real, 0) + '</b>.<br>' + (real < 0 ? 'Bạn đang vay thực tế <b>' + cpF(-real, 0) + '</b> dù báo cáo là thặng dư.' : 'Vẫn thặng dư sau khi trừ.'); });

WIDGETS['cp-cash-squeeze'] = host => dlCalc(host, [{ id: 's', label: 'Tiền tiết kiệm sẵn cho vay', v: 100 }, { id: 'g', label: 'Chính phủ cần vay', v: 60 }, { id: 'c', label: 'Doanh nghiệp cần vay', v: 80 }, { id: 'h', label: 'Hộ gia đình cần vay', v: 40 }],
  v => { const d = v.g + v.c + v.h, gap = d - v.s; return 'Cầu vay <b>' + cpF(d, 0) + '</b> vs cung <b>' + cpF(v.s, 0) + '</b>.<br>' + (gap > 0 ? '🔴 Thiếu <b>' + cpF(gap, 0) + '</b>: lãi suất bị đẩy lên, bên yếu nhất bị loại.' : '✅ Cung đủ.'); });

WIDGETS['cp-bond-crash'] = host => dlCalc(host, [{ id: 'c', label: 'Coupon (%)', v: 5 }, { id: 'r0', label: 'Lãi suất ban đầu (%)', v: 5 }, { id: 'r1', label: 'Lãi suất mới (%)', v: 12 }],
  v => { const p0 = cpBond(100, v.c, v.r0, 30), p1 = cpBond(100, v.c, v.r1, 30); return 'Giá trái phiếu 30 năm: <b>' + cpF(p0) + '</b> → <b>' + cpF(p1) + '</b> (<b>' + cpP((p1 / p0 - 1) * 100) + '</b>).'; });

WIDGETS['cp-equity'] = host => dlCalc(host, [{ id: 'v', label: 'Giá trị nhà', v: 100000, step: 1000 }, { id: 'd', label: 'Dư nợ', v: 70000, step: 1000 }, { id: 'ch', label: 'Giá nhà đổi (%)', v: -20, min: -80, max: 100 }],
  v => { const nv = v.v * (1 + v.ch / 100), eq = nv - v.d; return 'Giá mới <b>' + cpF(nv, 0) + '</b>; vốn chủ sở hữu <b>' + cpF(eq, 0) + '</b> (' + cpP(nv ? eq / nv * 100 : 0) + ').<br>' + (eq < 0 ? '🔴 Nợ lớn hơn giá trị nhà.' : 'Mức giảm làm hết vốn: ' + cpP(v.d / v.v * 100 > 100 ? 0 : 100 - v.d / v.v * 100) + '.'); });

WIDGETS['cp-housing-check'] = host => dlDiag(host, [
  ['Đây là nhà duy nhất tôi muốn ở lâu dài', ['Mục tiêu là ở, không phải đầu cơ giá'], 'Thường không cần bán; giữ khả năng trả nợ và quỹ dự phòng.'],
  ['Tôi sắp chuyển đi trong vài năm', ['Rủi ro giá giảm trước khi bán'], 'Cân nhắc bán khi giá còn gần đỉnh theo quan điểm sách.'],
  ['Tôi sắp/đã nghỉ hưu và trông cậy vào nhà', ['Không có thời gian chờ giá phục hồi'], 'Cân nhắc bán một phần hoặc đảm bảo nguồn thu khác.'],
  ['Tôi có nhà thứ hai hoặc nhà cho thuê', ['Thu nhập thuê có thể mất; nhà thứ hai thường giảm giá sớm'], 'Cân nhắc bán trước khi bị bán tháo.'],
  ['Giá nhà khu vực tăng ≥ 25% trong 5 năm', ['Dấu hiệu "vùng bong bóng"'], 'Rủi ro giảm mạnh cao hơn trung bình: đánh giá lại.']
], 'Tình huống của bạn');

WIDGETS['cp-multiple'] = host => dlCalc(host, [{ id: 'm', label: 'Gấp bao nhiêu lần', v: 5, min: 0, step: 0.1 }],
  v => 'Gấp ' + cpF(v.m) + ' lần = lãi <b>' + cpP((v.m - 1) * 100) + '</b>.<br>Lãi X% = gấp (1 + X/100) lần.');

WIDGETS['cp-short'] = host => dlCalc(host, [{ id: 'n', label: 'Số cp bán khống', v: 1000, step: 100 }, { id: 'p', label: 'Giá bán', v: 35 }, { id: 'c', label: 'Giá mua lại', v: 15 }],
  v => { const pl = (v.p - v.c) * v.n; return 'Lãi/lỗ: <b>' + cpF(pl, 0) + ' USD</b>.<br>' + (v.c > v.p * 2 ? '🔴 Giá tăng hơn gấp đôi: lỗ vượt vốn ban đầu, có thể bị gọi ký quỹ.' : 'Lỗ tối đa lý thuyết không giới hạn vì giá có thể tăng vô hạn.'); });

WIDGETS['cp-hedge'] = host => dlCalc(host, [{ id: 'v', label: 'Danh mục cổ phiếu', v: 100000, step: 1000 }, { id: 'r', label: 'Rủi ro giảm (%)', v: 50 }, { id: 'p', label: 'Mức bảo vệ (%)', v: 50 }],
  v => { const risk = v.v * v.r / 100, fund = risk * v.p / 100; return 'Rủi ro: <b>' + cpF(risk, 0) + '</b><br>Cần quỹ đảo ngược: <b>' + cpF(fund, 0) + '</b> (' + cpP(fund / v.v * 100) + ' danh mục).<br>Bán bớt cổ phiếu để lấy tiền: khoảng <b>' + cpF(fund, 0) + '</b>.'; });

WIDGETS['cp-debt-income'] = host => dlCalc(host, [{ id: 'd', label: 'Tổng nợ', v: 115 }, { id: 'i', label: 'Thu nhập khả dụng/năm', v: 100 }, { id: 's', label: 'Tiết kiệm/năm', v: 2 }],
  v => 'Nợ trên 100 thu nhập: <b>' + cpF(v.i ? v.d / v.i * 100 : 0, 0) + '</b>.<br>Tỷ lệ tiết kiệm: <b>' + cpP(v.i ? v.s / v.i * 100 : 0) + '</b>.<br>Cần khoảng <b>' + cpF(v.s ? (v.d - v.i) / v.s : 0, 1) + ' năm</b> tiết kiệm để hạ nợ về bằng thu nhập (chưa tính lãi).');

WIDGETS['cp-crash87'] = host => dlCalc(host, [{ id: 'e', label: 'Sự kiện', v: '87', opts: [['29', '29/10/1929 (−12,8%)'], ['87', '19/10/1987 (−22,6%)']] }, { id: 'lv', label: 'Mức Dow trước ngày đó', v: 2250 }],
  v => { const pct = v.e === '29' ? 12.8 : 22.6; return 'Giảm <b>' + cpP(pct) + '</b> ≈ <b>' + cpF(v.lv * pct / 100, 0) + ' điểm</b> với mức ' + cpF(v.lv, 0) + '.<br>Một ngày 1987 gần gấp đôi ngày tệ nhất 1929.'; });

WIDGETS['cp-ltcm'] = host => dlCalc(host, [{ id: 'cap', label: 'Vốn', v: 4 }, { id: 'lev', label: 'Đòn bẩy (x vốn)', v: 25, min: 1, max: 100 }, { id: 'w', label: 'Giá trị biến động bất lợi (%)', v: 4, step: 0.5 }],
  v => { const pos = v.cap * v.lev, loss = pos * v.w / 100; return 'Vị thế: <b>' + cpF(pos, 0) + '</b>; lỗ: <b>' + cpF(loss) + '</b> = <b>' + cpP(loss / v.cap * 100) + '</b> vốn.<br>' + (loss >= v.cap ? '🔴 Vốn bị xóa sạch.' : 'Ngưỡng làm mất hết vốn: ' + cpP(100 / v.lev) + '.'); });

WIDGETS['cp-capital-risk'] = host => dlCalc(host, [{ id: 'r', label: 'Rủi ro phái sinh / vốn (%)', v: 589, min: 1 }],
  v => 'Chỉ cần mất <b>' + cpP(10000 / v.r) + '</b> giá trị các vị thế để xóa toàn bộ vốn.<br>Gấp <b>' + cpF(v.r / 100, 1) + '</b> lần vốn.');

WIDGETS['cp-pe-floor'] = host => dlCalc(host, [{ id: 'i', label: 'Chỉ số hiện tại', v: 8000, step: 100 }, { id: 'p0', label: 'P/E hiện tại', v: 20 }, { id: 'p1', label: 'P/E đáy', v: 7 }, { id: 'e', label: 'Lợi nhuận đổi (%)', v: 0, min: -90, max: 100 }],
  v => { const t = v.i * (v.p1 / v.p0) * (1 + v.e / 100); return 'Chỉ số ngụ ý: <b>' + cpF(t, 0) + '</b> (' + cpP((t / v.i - 1) * 100) + ').'; });

WIDGETS['cp-deflation'] = host => dlCalc(host, [{ id: 'u', label: 'Số máy/tháng', v: 1000, step: 50 }, { id: 'p', label: 'Giá bán', v: 4000 }, { id: 'c', label: 'Giá thành', v: 3500 }, { id: 'dp', label: 'Giá bán giảm (%)', v: 50 }, { id: 'dc', label: 'Chi phí giảm (%)', v: 15 }, { id: 'du', label: 'Số máy giảm (%)', v: 30 }],
  v => { const p1 = v.p * (1 - v.dp / 100), c1 = v.c * (1 - v.dc / 100), u1 = v.u * (1 - v.du / 100); return 'Doanh thu: <b>' + cpF(v.u * v.p / 1e6) + ' triệu</b> → <b>' + cpF(u1 * p1 / 1e6) + ' triệu</b><br>Lợi nhuận/máy: <b>' + cpF(v.p - v.c, 0) + '</b> → <b>' + cpF(p1 - c1, 0) + '</b><br>Tổng lợi nhuận: <b>' + cpF((v.p - v.c) * v.u / 1e6) + ' triệu</b> → <b>' + cpF((p1 - c1) * u1 / 1e6) + ' triệu</b>.'; });

WIDGETS['cp-bond-ladder'] = host => dlDiag(host, [
  ['Trái phiếu rác (BB trở xuống)', ['Vỡ nợ đầu tiên khi phá sản lan rộng', 'Niềm tin thị trường rác sụt cả với bên chưa vỡ nợ'], '<b>Bán đầu tiên</b> theo sách (cấp bách nhất).'],
  ['Trái phiếu doanh nghiệp BBB', ['Chỉ cách rác một bậc', 'Hạ hạng nhanh khi khủng hoảng'], 'Bán (cấp bách) nếu muốn có đệm an toàn.'],
  ['Trái phiếu doanh nghiệp A trở lên, kỳ hạn dài', ['Kỳ hạn dài nhạy với lãi suất', 'Bán tháo tổ chức lớn làm giá sụt'], 'Cân nhắc bán phần từ 5 năm trở lên (ít cấp bách hơn).'],
  ['Kho bạc Mỹ ngắn hạn', ['Rủi ro tín dụng thấp nhất', 'Kỳ hạn ngắn ít biến động giá'], 'Nơi trú ẩn theo sách (dù sau này tác giả cảnh báo cả rủi ro với trái phiếu Kho bạc).']
], 'Loại trái phiếu');

WIDGETS['cp-put-payoff'] = host => dlCalc(host, [{ id: 'k', label: 'Giá thực hiện', v: 90 }, { id: 'pr', label: 'Phí (USD/cp)', v: 5 }, { id: 's', label: 'Giá lúc đáo hạn', v: 80 }, { id: 'n', label: 'Số cp/hợp đồng', v: 100, step: 100 }],
  v => { const val = Math.max(0, v.k - v.s) * v.n, cost = v.pr * v.n; return 'Chi phí <b>' + cpF(cost, 0) + '</b>; giá trị <b>' + cpF(val, 0) + '</b>; lãi/lỗ <b>' + cpF(val - cost, 0) + '</b> (' + cpP((val / cost - 1) * 100) + ').<br>Hòa vốn tại giá ' + cpF(v.k - v.pr) + '. Lỗ tối đa = phí.'; });

WIDGETS['cp-pe-gap'] = host => dlCalc(host, [{ id: 'a', label: 'P/E hiện tại', v: 45 }, { id: 'b', label: 'P/E lịch sử', v: 16.5, step: 0.5 }, { id: 'e', label: 'Lợi nhuận tăng (%)', v: 0, min: -50, max: 300 }],
  v => { const t = v.b / v.a / (1 + v.e / 100); return 'Chỉ số về giá trị hợp lý: <b>' + cpP((t - 1) * 100) + '</b> (còn ' + cpP(t * 100) + ').<br>Hoặc lợi nhuận phải tăng <b>' + cpP((v.a / v.b - 1) * 100) + '</b> nếu chỉ số đứng yên.'; });

WIDGETS['cp-rollover'] = host => dlCalc(host, [{ id: 'd', label: 'Vay mỗi ngày (triệu USD)', v: 18 }, { id: 'n', label: 'Số ngày nguồn vốn bị chặn', v: 5, min: 1, max: 60 }],
  v => 'Thiếu hụt: <b>' + cpF(v.d * v.n, 0) + ' triệu USD</b> (~<b>' + cpF(v.d / 24, 2) + ' triệu/giờ</b>).<br>Không đủ tiền → không tái tục → vỡ nợ.');

WIDGETS['cp-inventory'] = host => dlCalc(host, [{ id: 'rv', label: 'Doanh thu (cũ)', v: 100 }, { id: 'f', label: 'Doanh thu giảm (%)', v: 30 }, { id: 'db', label: 'Nợ đến hạn kỳ này', v: 80 }, { id: 'iv', label: 'Tồn kho tăng thêm', v: 20 }],
  v => { const rv = v.rv * (1 - v.f / 100); return 'Doanh thu mới <b>' + cpF(rv) + '</b>, nợ <b>' + cpF(v.db) + '</b>, tồn kho +<b>' + cpF(v.iv) + '</b> (tiền bị đóng băng).<br>Thiếu tiền: <b>' + cpF(Math.max(0, v.db - rv)) + '</b> ' + (v.db > rv ? '→ nhu cầu tiền "phi thanh khoản".' : '(còn dư).'); });

WIDGETS['cp-broker-rate'] = host => dlCalc(host, [{ id: 'c', label: 'Số vụ việc', v: 150 }, { id: 'a', label: 'Số tài khoản (triệu)', v: 2.2, step: 0.1 }],
  v => { const r = v.a ? v.c / v.a : 0; return 'Tỷ lệ: <b>' + cpF(r) + '</b> vụ / triệu tài khoản.<br>So với trung bình 29,28: <b>' + cpP((r / 29.28 - 1) * 100) + '</b>' + (r > 29.28 * 1.5 ? ' 🔴 cao hơn nhiều.' : r < 29.28 * 0.7 ? ' ✅ thấp hơn nhiều.' : ' (gần trung bình).'); });

WIDGETS['cp-weiss-grade'] = host => dlDiag(host, [
  ['A / A− / B+', ['Xếp hạng tốt'], 'Ưu tiên theo sách (ví dụ A.G. Edwards, Edward Jones, Fidelity).'],
  ['B / B−', ['Khá tốt'], 'Theo dõi định kỳ.'],
  ['C+ / C / C−', ['"Cờ vàng": ổn nhưng dễ tổn thương nếu vụ kiện tăng và thị trường giảm mạnh'], 'Theo dõi sát; cân nhắc giữ ít tài sản ở đó.'],
  ['D+ trở xuống', ['Yếu / rất yếu'], '<b>Cân nhắc nghiêm túc chuyển tài khoản</b> sang công ty an toàn hơn.']
], 'Xếp hạng an toàn');

WIDGETS['cp-signal'] = host => dlCalc(host, [
  { id: 'a', label: 'Giá quỹ trên SMA 20?', v: 'y', opts: [['y', 'Có'], ['n', 'Không']] },
  { id: 'b', label: 'MACD trên đường tín hiệu?', v: 'y', opts: [['y', 'Có'], ['n', 'Không']] },
  { id: 'h', label: 'Bạn đang', v: 'out', opts: [['out', 'Đứng ngoài'], ['in', 'Đang giữ quỹ']] }
], v => v.a === 'y' && v.b === 'y' ? (v.h === 'out' ? '🟢 <b>Mua</b> (nếu có tiền chấp nhận rủi ro).' : '🟢 Giữ.') : v.a === 'n' && v.b === 'n' ? (v.h === 'in' ? '🔴 <b>Bán hết.</b>' : '⚪ Đứng ngoài.') : '🟡 Tín hiệu lệch: <b>không làm gì</b> (giữ nguyên trạng thái).');

WIDGETS['cp-arbitration'] = host => dlCalc(host, [{ id: 'a', label: 'Phán quyết (USD)', v: 100000, step: 1000 }, { id: 'p', label: 'Tỷ lệ thực trả (%)', v: 25, min: 0, max: 100 }],
  v => 'Nhận thực tế: <b>' + cpF(v.a * v.p / 100, 0) + '</b>; mất <b>' + cpF(v.a * (1 - v.p / 100), 0) + '</b>.<br>Sách: chưa đến 1/4 phán quyết được trả.');

WIDGETS['cp-japan-bond'] = host => dlDiag(host, [
  ['Giữa tháng 9/2002', ['BOJ công bố sẽ mua cổ phiếu'], 'Nikkei hồi.'],
  ['Thứ Sáu 20/9', ['Phiên đấu giá trái phiếu chính phủ thiếu người mua lần đầu'], 'Nhà đầu tư trái phiếu "đình công".'],
  ['26/9', ['Mất sạch mức tăng của cổ phiếu'], 'Cổ phiếu quay về mức cũ, trái phiếu vẫn bị hoài nghi.']
], 'Mốc thời gian');

WIDGETS['cp-dollar-exposure'] = host => dlCalc(host, [{ id: 'f', label: 'Nước ngoài bán (%) tài sản Mỹ', v: 10, min: 0, max: 100 }],
  v => { const t = 1 + 2.9 + 8; return 'Tài sản Mỹ do nước ngoài giữ: Kho bạc/đại lý ≈ 1, cổ phiếu 2,9, khác 8 → <b>' + cpF(t, 1) + ' nghìn tỷ USD</b>.<br>Bán ' + cpP(v.f) + ' = <b>' + cpF(t * v.f / 100, 2) + ' nghìn tỷ USD</b> áp lực bán/đổi sang tiền khác.'; });

WIDGETS['cp-bailout-plan'] = host => dlDiag(host, [
  ['1. Hạ ký quỹ mua / tăng ký quỹ bán khống', ['Tăng cầu cổ phiếu', 'Phạt người bán khống'], 'Tăng đòn bẩy mua → rủi ro dây chuyền khi giá giảm.'],
  ['2. Fed mua trái phiếu doanh nghiệp', ['Đẩy giá trái phiếu lên', 'Cấp tiền cho doanh nghiệp'], 'Phải vay thêm từ nhà đầu tư trái phiếu chính phủ.'],
  ['3. Lớp vỏ chính trị: kế toán sạch/an ninh', ['Che giấu mục đích hỗ trợ cổ phiếu'], 'Tiêu chí quá co giãn, tiếng xấu chọn lọc.'],
  ['4. 75% tiền dùng mua lại cổ phiếu', ['Tăng cầu cổ phiếu trực tiếp'], 'Giống LBO, nhưng nguồn là chính phủ.'],
  ['5. Kiểm soát ngoại hối', ['Ngăn dòng vốn ngoại rút'], 'Làm nhà đầu tư nước ngoài sợ thêm.'],
  ['6. Bỏ dự trữ bắt buộc', ['Ngân hàng có thêm tiền cho vay'], 'Giảm đệm an toàn.'],
  ['7. Ngân hàng cắt lãi vay ưu đãi', ['Biểu tượng trấn an'], 'Vô tác dụng khi ngân hàng hết tiền cho vay.']
], 'Điểm trong kế hoạch');

WIDGETS['cp-quality-spread'] = host => dlCalc(host, [{ id: 'ph', label: 'Giai đoạn', v: '1', opts: [['0', 'Bình thường'], ['1', '1: Khủng hoảng trái phiếu DN'], ['2', '2: Chính phủ cứu DN']] }, { id: 'g', label: 'Lãi trái phiếu chính phủ (%)', v: 4 }],
  v => { const p = +v.ph, gy = v.g + (p === 2 ? 1.5 : p === 1 ? 0.25 : 0), cy = v.g + (p === 0 ? 1 : p === 1 ? 3.25 : 1.25 + 0.2); return 'Lãi DN <b>' + cpF(cy) + '%</b>; lãi chính phủ <b>' + cpF(gy) + '%</b>; chênh lệch <b>' + cpF(cy - gy) + ' điểm</b>.<br>' + ['Bình thường: ~1 điểm.', 'Chênh lệch nới rộng: mất niềm tin vào doanh nghiệp.', 'Chênh lệch gần như biến mất vì chính phủ bị kéo xuống: dấu hiệu xấu.'][p]; });

WIDGETS['cp-cash-credit'] = host => dlCalc(host, [{ id: 'c', label: 'Tiền bơm (tỷ USD)', v: 100 }, { id: 'k', label: 'Niềm tin (0–100%)', v: 20, min: 0, max: 100 }, { id: 'm', label: 'Hệ số nhân tối đa', v: 5, min: 1 }],
  v => { const mult = 1 + (v.m - 1) * v.k / 100; return 'Tín dụng thực tạo ra: <b>' + cpF(v.c * mult, 0) + ' tỷ</b> (hệ số <b>' + cpF(mult) + '</b>).<br>Niềm tin thấp: tiền bơm vào nhưng không biến thành cho vay.'; });

WIDGETS['cp-put-portfolio'] = host => dlCalc(host, [{ id: 't', label: 'Tổng tài sản', v: 100000, step: 1000 }, { id: 'o', label: 'Quyền chọn (%)', v: 5, max: 20 }, { id: 'r', label: 'Quỹ đảo ngược (%)', v: 10, max: 40 }],
  v => { const o = v.t * v.o / 100, r = v.t * v.r / 100; return 'Quyền chọn: <b>' + cpF(o, 0) + '</b> (có thể mất hết); quỹ đảo ngược: <b>' + cpF(r, 0) + '</b>; an toàn: <b>' + cpF(v.t - o - r, 0) + '</b> (' + cpP(100 - v.o - v.r) + ').<br>' + (v.o > 5 ? '🟠 Vượt giới hạn 5% của sách.' : '✅ Trong giới hạn.'); });

WIDGETS['cp-moratorium'] = host => dlCalc(host, [{ id: 'd', label: 'Tổng nợ phải trả', v: 100 }, { id: 'f', label: 'Hoãn nợ (%)', v: 30, max: 100 }, { id: 'c', label: 'Số mắt xích trong chuỗi', v: 3, min: 1, max: 6 }],
  v => { const hit = v.d * v.f / 100; return 'Mỗi mắt xích không nhận <b>' + cpF(hit) + '</b>; trong chuỗi ' + v.c + ' mắt xích, mỗi bên vừa là con nợ vừa là chủ nợ.<br>Nếu mỗi bên giảm trả theo, tổng trả giảm tới khoảng <b>' + cpF(v.d * (1 - Math.pow(1 - v.f / 100, v.c))) + '</b> (thiếu) cuối chuỗi.'; });

WIDGETS['cp-rational-selling'] = host => dlDiag(host, [
  ['Bán cổ phiếu công ty nợ nhiều, kế toán đáng ngờ', ['Bán hợp lý'], 'Chuyển tiền sang công ty tốt.'],
  ['Bán mọi thứ vì sợ', ['Bán phi lý'], 'Có thể bán cả tài sản tốt giá rẻ.'],
  ['Đóng tài khoản ngân hàng an toàn vì hoảng', ['Phi lý'], 'Kiểm tra xếp hạng an toàn trước.'],
  ['Rút khỏi môi giới có hồ sơ xấu và chuyển sang môi giới tốt', ['Hợp lý'], 'Hành động có lý do.']
], 'Tình huống');

WIDGETS['cp-minimum-pay'] = host => dlCalc(host, [{ id: 'b', label: 'Dư nợ', v: 2000, step: 100 }, { id: 'a', label: 'Lãi suất năm (%)', v: 17 }, { id: 'm', label: 'Mức trả tối thiểu (% dư nợ, tối thiểu 20 USD)', v: 3 }],
  v => { let bal = v.b, n = 0, int = 0; while (bal > 0.5 && n < 600) { const i = bal * v.a / 1200, pay = Math.max(20, bal * v.m / 100); int += i; bal = bal + i - Math.min(pay, bal + i); n++; } return 'Mất <b>' + cpF(n / 12, 1) + ' năm</b> (' + n + ' tháng); tổng lãi <b>' + cpF(int, 0) + ' USD</b> trên gốc ' + cpF(v.b, 0) + '.'; });

WIDGETS['cp-job-matrix'] = host => dlCalc(host, [{ id: 'e', label: 'Kinh tế', v: 's', opts: [['s', 'Mạnh'], ['w', 'Yếu']] }, { id: 'r', label: 'Rủi ro công ty', v: 'l', opts: [['l', 'Thấp'], ['h', 'Cao']] }],
  v => v.e === 's' && v.r === 'l' ? 'Chủ yếu <b>A</b> (nâng giá trị bản thân), vẫn theo dõi thị trường.' : v.e === 'w' && v.r === 'h' ? 'Ưu tiên <b>B</b> (theo dõi và chuẩn bị tìm việc), không bỏ A.' : 'Làm <b>A và B ngang nhau</b>.');

WIDGETS['cp-save-grow'] = host => dlCalc(host, [{ id: 'm', label: 'Tiết kiệm mỗi tháng', v: 200 }, { id: 'y', label: 'Số năm', v: 10, min: 1, max: 50 }, { id: 'r', label: 'Lãi suất năm (%)', v: 3 }],
  v => { const n = v.y * 12, i = v.r / 1200; const fv = i ? v.m * ((Math.pow(1 + i, n) - 1) / i) : v.m * n; return 'Tổng bỏ vào: <b>' + cpF(v.m * n, 0) + '</b>; giá trị cuối: <b>' + cpF(fv, 0) + '</b>; phần lãi: <b>' + cpF(fv - v.m * n, 0) + '</b>.'; });

WIDGETS['cp-div-yield'] = host => dlCalc(host, [{ id: 'd', label: 'Cổ tức/năm', v: 1 }, { id: 'p', label: 'Giá cổ phiếu', v: 10 }, { id: 'c', label: 'Cắt cổ tức (%)', v: 0, max: 100 }],
  v => { const dd = v.d * (1 - v.c / 100); return 'Tỷ suất cổ tức: <b>' + cpP(v.p ? dd / v.p * 100 : 0) + '</b>.<br>Khi giá 100 USD cùng cổ tức ' + cpF(v.d) + ': ' + cpP(v.d / 100 * 100) + '.'; });

WIDGETS['cp-price-sales'] = host => dlCalc(host, [{ id: 'p', label: 'Giá cổ phiếu', v: 10 }, { id: 's', label: 'Doanh thu/cp', v: 20 }],
  v => { const r = v.s ? v.p / v.s : 0; return 'Giá/doanh thu: <b>' + cpF(r) + '</b> ' + (r <= 0.5 ? '✅ rất rẻ theo ngưỡng hoảng loạn (≤ 0,5).' : r <= 0.7 ? '🟡 rẻ theo ngưỡng đáy thông thường (≤ 0,7).' : '🔴 chưa rẻ.'); });

WIDGETS['cp-rate-phases'] = host => dlCalc(host, [{ id: 'c', label: 'Coupon bạn khóa (%)', v: 5 }, { id: 'r', label: 'Lãi suất thị trường hiện tại (%)', v: 3 }],
  v => { const p = cpBond(100, v.c, v.r, 20); return 'Giá trái phiếu 20 năm: <b>' + cpF(p) + '</b> (' + cpP(p - 100) + ' so với mệnh giá).<br>Khóa coupon cao ở cuối pha 2 rồi lãi suất giảm ở pha 3 → giá tăng.'; });

WIDGETS['cp-stage-buy'] = host => dlCalc(host, [{ id: 'c', label: 'Vốn dự định đầu tư', v: 100000, step: 1000 }, { id: 'n', label: 'Số đợt', v: 4, min: 1, max: 12 }],
  v => 'Mỗi đợt <b>' + cpF(v.c / v.n, 0) + '</b>.<br>Ví dụ sách: bắt đầu 10–20% rồi tăng dần khi có xác nhận.');

WIDGETS['cp-creditor-debtor'] = host => dlCalc(host, [{ id: 'dep', label: 'Tiền gửi + quỹ tiền tệ của bạn', v: 50000, step: 1000 }, { id: 'debt', label: 'Nợ của bạn', v: 80000, step: 1000 }, { id: 'f', label: 'Moratorium (%)', v: 30, max: 100 }],
  v => 'Bạn không trả nợ: giữ lại <b>' + cpF(v.debt * v.f / 100, 0) + '</b>.<br>Nhưng khoản gửi của bạn cũng bị chặn: mất <b>' + cpF(v.dep * v.f / 100, 0) + '</b>.<br>Ròng: <b>' + cpF((v.debt - v.dep) * v.f / 100, 0) + '</b>.');

WIDGETS['cp-quick-ratio'] = host => dlCalc(host, [{ id: 'c', label: 'Tiền mặt và tương đương', v: 30 }, { id: 'd', label: 'Nợ hiện hành', v: 60 }],
  v => { const r = v.d ? v.c / v.d : 0; return 'Tỷ lệ thanh khoản nhanh: <b>' + cpF(r) + '</b> ' + (r >= 1 ? '✅ đủ trả nợ ngắn hạn.' : r >= 0.5 ? '🟡 nửa đủ.' : '🔴 yếu.'); });

WIDGETS['cp-bad-debt'] = host => dlCalc(host, [{ id: 't', label: 'Tổng nợ xấu (nghìn tỷ USD)', v: 10 }, { id: 'p', label: 'Đã thanh lý (%)', v: 25, max: 100 }],
  v => 'Còn lại: <b>' + cpF(v.t * (1 - v.p / 100)) + ' nghìn tỷ USD</b> (' + cpP(100 - v.p) + ').');

WIDGETS['cp-real-rate'] = host => dlCalc(host, [{ id: 'n', label: 'Lãi suất danh nghĩa (%)', v: 4 }, { id: 'i', label: 'Lạm phát (−: giảm phát) (%)', v: -3 }],
  v => 'Lãi suất thực xấp xỉ: <b>' + cpP(v.n - v.i) + '</b>.<br>' + (v.i < 0 ? 'Giảm phát: vay nặng hơn, tiền gửi lời hơn.' : 'Lạm phát dương: lãi thực thấp hơn danh nghĩa.'));

WIDGETS['cp-crash-checklist'] = host => dlCheck(host, [
  ['Bán cổ phiếu dễ tổn thương', 'Bán có kế hoạch, không hoảng loạn.'],
  ['Đưa tiền về nơi an toàn', 'Quỹ tiền tệ Kho bạc, ngân hàng được kiểm tra xếp hạng.'],
  ['Kiểm tra môi giới/ngân hàng/bảo hiểm', 'Xem hồ sơ pháp lý và xếp hạng an toàn.'],
  ['Giảm nợ, tăng tiết kiệm, bảo vệ việc làm', 'Nợ lãi cao trả trước.'],
  ['Chỉ dùng ≤ 5% cho quyền chọn/quỹ đảo ngược', 'Có quy tắc vào/ra rõ ràng.'],
  ['Chờ dấu hiệu đáy trước khi mua lại', 'Cổ tức, giá/doanh thu, tâm lý.'],
  ['Mua theo đợt, giữ phần tiền an toàn', 'Không dồn hết khi chưa xác nhận phục hồi.']
], '✅ Bạn đã hoàn thành cả ba giai đoạn: phòng thủ, kiếm lời, tái đầu tư.');
// ===== Fundamentals of Corporate Finance (fc-*) — dùng cpF, cpP, cpBond, cpScore từ w-cp =====
const fcPV = (c, r, n) => r ? c * (1 - Math.pow(1 + r, -n)) / r : c * n;
const fcNPV = (r, cfs) => cfs.reduce((s, c, t) => s + c / Math.pow(1 + r, t), 0);
const fcIRR = cfs => { let lo = -0.99, hi = 10; const f = r => fcNPV(r, cfs); if (f(lo) * f(hi) > 0) return NaN; for (let i = 0; i < 200; i++) { const m = (lo + hi) / 2; if (f(lo) * f(m) <= 0) hi = m; else lo = m; } return (lo + hi) / 2; };
const fcList = s => String(s).split(/[,;\s]+/).filter(x => x !== '').map(Number).filter(x => isFinite(x));

WIDGETS['fc-balance-split'] = host => dlCalc(host, [{ id: 'fa', label: 'Tài sản cố định', v: 600 }, { id: 'ca', label: 'Tài sản lưu động', v: 400 }, { id: 'd', label: 'Nợ (tài trợ vay)', v: 450 }],
  v => { const A = v.fa + v.ca, E = A - v.d; return 'Tổng tài sản (<b>đầu tư</b>): <b>' + cpF(A, 0) + '</b><br>Nợ: ' + cpF(v.d, 0) + ' (' + cpP(A ? v.d / A * 100 : 0) + ') · Vốn chủ (<b>tài trợ</b>): <b>' + cpF(E, 0) + '</b> (' + cpP(A ? E / A * 100 : 0) + ')<br>' + (E < 0 ? '🔴 Nợ vượt tài sản.' : 'Hai phía luôn bằng nhau: quyết định đầu tư và quyết định tài trợ.'); });

WIDGETS['fc-agency'] = host => cpScore(host, [
  'Quyết định làm tăng thù lao của giám đốc nhưng không rõ lợi ích cho cổ đông', 'Mua công ty khác chỉ để mở rộng quy mô, không có NPV dương', 'Tránh dự án có NPV dương vì sợ rủi ro cho vị trí của giám đốc', 'Chi tiêu đặc quyền (máy bay riêng, văn phòng xa hoa) với số tiền lớn', 'Hội đồng quản trị không giám sát hoặc phụ thuộc vào giám đốc'
], [[0, '✅ Không thấy dấu hiệu xung đột lợi ích.'], [1, '🟡 Có dấu hiệu: cần cơ chế giám sát và thù lao gắn với giá trị cổ phiếu.'], [3, '🔴 Nhiều dấu hiệu vấn đề đại diện: tăng giám sát, thay đổi thù lao hoặc đối mặt nguy cơ thâu tóm.']], 'Đánh dấu điều đúng:');

WIDGETS['fc-fvpv'] = host => dlCalc(host, [{ id: 'pv', label: 'Số tiền hiện tại', v: 1000, step: 100 }, { id: 'r', label: 'Lãi suất (%)', v: 8, step: 0.5 }, { id: 't', label: 'Số năm', v: 10, min: 0, max: 60 }],
  v => { const r = v.r / 100, fv = v.pv * Math.pow(1 + r, v.t), simple = v.pv * (1 + r * v.t); return 'Giá trị tương lai (lãi kép): <b>' + cpF(fv, 0) + '</b><br>Lãi đơn: ' + cpF(simple, 0) + ' → lãi trên lãi: <b>' + cpF(fv - simple, 0) + '</b><br>Nếu bạn cần ' + cpF(v.pv, 0) + ' sau ' + v.t + ' năm, hôm nay chỉ cần <b>' + cpF(v.pv / Math.pow(1 + r, v.t), 0) + '</b>.'; });

WIDGETS['fc-annuity'] = host => dlCalc(host, [{ id: 'c', label: 'Khoản mỗi kỳ', v: 1000, step: 100 }, { id: 'r', label: 'Lãi mỗi kỳ (%)', v: 1, step: 0.1 }, { id: 'n', label: 'Số kỳ', v: 36, min: 1, max: 600 }, { id: 'due', label: 'Thời điểm trả', v: '0', opts: [['0', 'Cuối kỳ'], ['1', 'Đầu kỳ']] }],
  v => { const r = v.r / 100, k = v.due === '1' ? 1 + r : 1, pv = fcPV(v.c, r, v.n) * k, fv = (r ? v.c * (Math.pow(1 + r, v.n) - 1) / r : v.c * v.n) * k; return 'PV niên kim: <b>' + cpF(pv, 0) + '</b><br>FV niên kim: <b>' + cpF(fv, 0) + '</b><br>Tổng trả: ' + cpF(v.c * v.n, 0) + '.'; });

WIDGETS['fc-perpetuity'] = host => dlCalc(host, [{ id: 'c', label: 'Dòng tiền kỳ 1', v: 100 }, { id: 'r', label: 'Lãi suất (%)', v: 8, step: 0.5 }, { id: 'g', label: 'Tăng trưởng g (%)', v: 0, step: 0.5 }],
  v => v.r <= v.g ? '⚠️ Cần r > g.' : 'PV = C/(r − g) = <b>' + cpF(v.c / ((v.r - v.g) / 100), 0) + '</b>' + (v.g === 0 ? ' (vĩnh viễn thường).' : '.'));

WIDGETS['fc-real'] = host => dlCalc(host, [{ id: 'n', label: 'Lãi danh nghĩa (%)', v: 8, step: 0.1 }, { id: 'i', label: 'Lạm phát (%)', v: 3, step: 0.1 }],
  v => { const real = ((1 + v.n / 100) / (1 + v.i / 100) - 1) * 100; return 'Lãi thực chính xác: <b>' + cpP(real) + '</b> (xấp xỉ: ' + cpP(v.n - v.i) + ').<br>Nghìn đồng hôm nay sau 1 năm đủ mua <b>' + cpF(1000 / (1 + v.i / 100), 0) + '</b> hàng hóa cũ.'; });

WIDGETS['fc-ear'] = host => dlCalc(host, [{ id: 'a', label: 'APR (%)', v: 12, step: 0.5 }, { id: 'm', label: 'Số lần ghép lãi/năm', v: 12, opts: [[1, 'Năm'], [2, 'Nửa năm'], [4, 'Quý'], [12, 'Tháng'], [365, 'Ngày']] }],
  v => { const m = +v.m, ear = (Math.pow(1 + v.a / 100 / m, m) - 1) * 100; return 'EAR: <b>' + cpP(ear) + '</b> (APR ' + cpP(v.a) + ').<br>Chênh: <b>' + cpF(ear - v.a, 2) + ' điểm</b>.'; });

WIDGETS['fc-efn'] = host => dlCalc(host, [{ id: 's0', label: 'Doanh thu hiện tại', v: 1000 }, { id: 'g', label: 'Tăng doanh thu (%)', v: 20 }, { id: 'ast', label: 'Tài sản/doanh thu (%)', v: 60 }, { id: 'liab', label: 'Nợ phải trả tự phát sinh/doanh thu (%)', v: 15 }, { id: 'm', label: 'Biên lợi nhuận ròng (%)', v: 8 }, { id: 'pay', label: 'Tỷ lệ chia cổ tức (%)', v: 40 }],
  v => { const s1 = v.s0 * (1 + v.g / 100), assets = s1 * v.ast / 100, lia = s1 * v.liab / 100, ni = s1 * v.m / 100, re = ni * (1 - v.pay / 100); const base = v.s0 * (v.ast - v.liab) / 100, newEq = base; const efn = assets - lia - (newEq + re) + 0; return 'Doanh thu mới: <b>' + cpF(s1, 0) + '</b>, tài sản cần: <b>' + cpF(assets, 0) + '</b><br>Nợ tự phát sinh: ' + cpF(lia, 0) + ', lợi nhuận giữ lại: ' + cpF(re, 0) + '<br>EFN (xấp xỉ, giả định vốn hiện tại = tài sản ròng ban đầu): <b>' + cpF(efn, 0) + '</b> ' + (efn > 0 ? '→ cần huy động thêm.' : '→ dư nguồn.'); });

WIDGETS['fc-growth'] = host => dlCalc(host, [{ id: 'roa', label: 'ROA (%)', v: 8 }, { id: 'roe', label: 'ROE (%)', v: 15 }, { id: 'b', label: 'Tỷ lệ giữ lại (%)', v: 60, max: 100 }],
  v => { const b = v.b / 100, ig = v.roa / 100 * b / (1 - v.roa / 100 * b), sg = v.roe / 100 * b / (1 - v.roe / 100 * b); return 'Tăng trưởng nội bộ: <b>' + cpP(ig * 100) + '</b><br>Tăng trưởng bền vững: <b>' + cpP(sg * 100) + '</b>.'; });

WIDGETS['fc-balance'] = host => dlCalc(host, [{ id: 'ca', label: 'Tài sản lưu động', v: 300 }, { id: 'fa', label: 'Tài sản cố định', v: 700 }, { id: 'cl', label: 'Nợ ngắn hạn', v: 200 }, { id: 'ld', label: 'Nợ dài hạn', v: 400 }],
  v => { const eq = v.ca + v.fa - v.cl - v.ld; return 'Vốn chủ sở hữu = <b>' + cpF(eq, 0) + '</b><br>Vốn lưu động ròng = <b>' + cpF(v.ca - v.cl, 0) + '</b><br>Tỷ số hiện hành = <b>' + cpF(v.cl ? v.ca / v.cl : 0) + '</b>.'; });

WIDGETS['fc-cf'] = host => dlCalc(host, [{ id: 'ni', label: 'Lợi nhuận ròng', v: 100 }, { id: 'dep', label: 'Khấu hao', v: 40 }, { id: 'ar', label: 'Tăng phải thu + tồn kho', v: 30 }, { id: 'ap', label: 'Tăng phải trả', v: 10 }],
  v => 'Dòng tiền hoạt động ≈ ' + cpF(v.ni, 0) + ' + ' + cpF(v.dep, 0) + ' − ' + cpF(v.ar, 0) + ' + ' + cpF(v.ap, 0) + ' = <b>' + cpF(v.ni + v.dep - v.ar + v.ap, 0) + '</b><br>Khác lợi nhuận ròng: <b>' + cpF(v.ni + v.dep - v.ar + v.ap - v.ni, 0) + '</b>.');

WIDGETS['fc-tax'] = host => dlCalc(host, [{ id: 'inc', label: 'Thu nhập chịu thuế', v: 500000, step: 10000 }, { id: 't', label: 'Thuế suất biên (%)', v: 35 }, { id: 'extra', label: 'Thu nhập tăng thêm', v: 100000, step: 10000 }],
  v => 'Thuế (đơn giản): <b>' + cpF(v.inc * v.t / 100, 0) + '</b> · Thuế trên khoản thêm: <b>' + cpF(v.extra * v.t / 100, 0) + '</b><br>Thu nhập thêm sau thuế: <b>' + cpF(v.extra * (1 - v.t / 100), 0) + '</b>.');

WIDGETS['fc-ratios'] = host => dlCalc(host, [{ id: 'sales', label: 'Doanh thu', v: 1000 }, { id: 'ni', label: 'Lợi nhuận ròng', v: 60 }, { id: 'ta', label: 'Tổng tài sản', v: 800 }, { id: 'eq', label: 'Vốn chủ', v: 400 }, { id: 'ca', label: 'Tài sản lưu động', v: 300 }, { id: 'cl', label: 'Nợ ngắn hạn', v: 200 }, { id: 'inv', label: 'Tồn kho', v: 100 }],
  v => 'Biên lợi nhuận: <b>' + cpP(v.sales ? v.ni / v.sales * 100 : 0) + '</b> · ROA: <b>' + cpP(v.ta ? v.ni / v.ta * 100 : 0) + '</b> · ROE: <b>' + cpP(v.eq ? v.ni / v.eq * 100 : 0) + '</b><br>Vòng quay tài sản: <b>' + cpF(v.ta ? v.sales / v.ta : 0) + '</b> · Hiện hành: <b>' + cpF(v.cl ? v.ca / v.cl : 0) + '</b> · Nhanh: <b>' + cpF(v.cl ? (v.ca - v.inv) / v.cl : 0) + '</b><br>Nợ/Tài sản: <b>' + cpP(v.ta ? (v.ta - v.eq) / v.ta * 100 : 0) + '</b>.');

WIDGETS['fc-dupont'] = host => dlCalc(host, [{ id: 'm', label: 'Biên lợi nhuận (%)', v: 6, step: 0.5 }, { id: 't', label: 'Vòng quay tài sản', v: 1.5, step: 0.1 }, { id: 'l', label: 'Đòn bẩy (Tài sản/Vốn chủ)', v: 2, step: 0.1 }],
  v => { const roa = v.m * v.t, roe = roa * v.l; return 'ROA = ' + cpF(v.m) + '% × ' + cpF(v.t) + ' = <b>' + cpP(roa) + '</b><br>ROE = ROA × ' + cpF(v.l) + ' = <b>' + cpP(roe) + '</b>.'; });

WIDGETS['fc-benchmark'] = host => dlCalc(host, [{ id: 'x', label: 'Tỷ số của bạn', v: 1.5, step: 0.1 }, { id: 'b', label: 'Trung bình ngành', v: 2, step: 0.1 }, { id: 'k', label: 'Loại tỷ số', v: 'hi', opts: [['hi', 'Cao hơn là tốt (thanh khoản, sinh lời)'], ['lo', 'Thấp hơn là tốt (đòn bẩy, chu kỳ thu tiền)']] }],
  v => { const d = (v.x / v.b - 1) * 100, good = v.k === 'hi' ? d >= 0 : d <= 0; return 'Lệch so với ngành: <b>' + cpP(d) + '</b> → ' + (good ? '✅ tốt hơn' : '🟠 kém hơn') + ' ngành. Hãy xem thêm xu hướng nhiều năm.'; });

WIDGETS['fc-ccc'] = host => dlCalc(host, [{ id: 'inv', label: 'Tồn kho', v: 100 }, { id: 'cogs', label: 'Giá vốn hàng bán/năm', v: 1200 }, { id: 'ar', label: 'Phải thu', v: 150 }, { id: 'sales', label: 'Doanh thu/năm', v: 1800 }, { id: 'ap', label: 'Phải trả', v: 80 }],
  v => { const di = v.cogs ? v.inv / v.cogs * 365 : 0, dr = v.sales ? v.ar / v.sales * 365 : 0, dp = v.cogs ? v.ap / v.cogs * 365 : 0; return 'Kỳ tồn kho: <b>' + cpF(di, 0) + '</b> ngày; kỳ thu: <b>' + cpF(dr, 0) + '</b>; kỳ trả: <b>' + cpF(dp, 0) + '</b><br>CCC = <b>' + cpF(di + dr - dp, 0) + ' ngày</b>.'; });

WIDGETS['fc-cashbudget'] = host => dlCalc(host, [{ id: 'open', label: 'Số dư đầu kỳ', v: 20 }, { id: 'in', label: 'Thu mỗi quý', v: 100 }, { id: 'out1', label: 'Chi quý 1', v: 90 }, { id: 'out2', label: 'Chi quý 2', v: 130 }, { id: 'out3', label: 'Chi quý 3', v: 150 }, { id: 'out4', label: 'Chi quý 4', v: 80 }, { id: 'min', label: 'Số dư tối thiểu', v: 15 }],
  v => { let bal = v.open, borrow = 0, out = ''; [v.out1, v.out2, v.out3, v.out4].forEach((o, i) => { bal += v.in - o; const need = Math.max(0, v.min - bal); out += 'Q' + (i + 1) + ': số dư ' + cpF(bal, 0) + (need ? ', 🔴 cần vay ' + cpF(need, 0) : ', ✅') + '<br>'; borrow += need; bal += need; }); return out + 'Tổng vay thêm (không tính lãi): <b>' + cpF(borrow, 0) + '</b>.'; });

WIDGETS['fc-bankloan'] = host => dlCalc(host, [{ id: 'a', label: 'Khoản vay', v: 100000, step: 1000 }, { id: 'r', label: 'Lãi suất (%)', v: 8 }, { id: 'cb', label: 'Số dư bù đắp (% khoản vay)', v: 10 }, { id: 'pre', label: 'Lãi trả trước?', v: '1', opts: [['0', 'Không'], ['1', 'Có']] }, { id: 'mo', label: 'Kỳ hạn (tháng)', v: 12, min: 1, max: 60 }],
  v => { const int = v.a * v.r / 100 * v.mo / 12, cb = v.a * v.cb / 100, net = v.a - cb - (v.pre === '1' ? int : 0), eff = int / net * 12 / v.mo * 100; return 'Tiền thực dùng: <b>' + cpF(net, 0) + '</b>; lãi: ' + cpF(int, 0) + '<br>Lãi suất hiệu dụng (quy năm, đơn giản): <b>' + cpP(eff) + '</b> so với niêm yết ' + cpP(v.r) + '.'; });

WIDGETS['fc-float'] = host => dlCalc(host, [{ id: 'pay', label: 'Séc chi/ngày', v: 200000, step: 10000 }, { id: 'pd', label: 'Ngày đến khi séc chi bị trừ', v: 5, min: 0 }, { id: 'rec', label: 'Séc thu/ngày', v: 150000, step: 10000 }, { id: 'rd', label: 'Ngày đến khi tiền thu có hiệu lực', v: 3, min: 0 }, { id: 'r', label: 'Lãi suất năm (%)', v: 5 }],
  v => { const net = v.pay * v.pd - v.rec * v.rd; return 'Float ròng: <b>' + cpF(net, 0) + '</b><br>Lãi kiếm được/năm nếu đầu tư: <b>' + cpF(net * v.r / 100, 0) + '</b>.'; });

WIDGETS['fc-eoq'] = host => dlCalc(host, [{ id: 'q', label: 'Nhu cầu năm (đơn vị)', v: 10000, step: 100 }, { id: 'f', label: 'Chi phí mỗi lần đặt', v: 50 }, { id: 'c', label: 'Chi phí giữ 1 đơn vị/năm', v: 2, step: 0.1 }],
  v => { const e = Math.sqrt(2 * v.q * v.f / v.c), orders = v.q / e, cost = orders * v.f + e / 2 * v.c; return 'EOQ: <b>' + cpF(e, 0) + '</b> đơn vị; số lần đặt/năm: <b>' + cpF(orders, 1) + '</b><br>Tổng chi phí: <b>' + cpF(cost, 0) + '</b> (đặt ' + cpF(orders * v.f, 0) + ' + giữ ' + cpF(e / 2 * v.c, 0) + ').'; });

WIDGETS['fc-baumol'] = host => dlCalc(host, [{ id: 'f', label: 'Chi phí mỗi lần bán chứng khoán', v: 30 }, { id: 't', label: 'Nhu cầu tiền mặt/năm', v: 1200000, step: 10000 }, { id: 'r', label: 'Lãi chứng khoán (%)', v: 5 }],
  v => { const c = Math.sqrt(2 * v.f * v.t / (v.r / 100)); return 'Mỗi lần bán: <b>' + cpF(c, 0) + '</b>; số lần/năm: <b>' + cpF(v.t / c, 1) + '</b>; tiền mặt bình quân: ' + cpF(c / 2, 0) + '.'; });

WIDGETS['fc-discount'] = host => dlCalc(host, [{ id: 'd', label: 'Chiết khấu (%)', v: 2 }, { id: 'a', label: 'Số ngày trả sớm', v: 10 }, { id: 'b', label: 'Số ngày trả đủ', v: 30 }],
  v => { const x = v.d / (100 - v.d), ex = v.b - v.a, eff = (Math.pow(1 + x, 365 / ex) - 1) * 100; return 'Lãi mỗi ' + ex + ' ngày: ' + cpP(x * 100) + ' → hiệu dụng năm: <b>' + cpP(eff) + '</b>.<br>' + (eff > 15 ? 'Nên trả sớm để lấy chiết khấu nếu rẻ hơn vay ngân hàng.' : 'Vay ở đây không đắt.'); });

WIDGETS['fc-credit'] = host => dlCalc(host, [{ id: 'p', label: 'Giá bán', v: 100 }, { id: 'c', label: 'Chi phí hàng', v: 60 }, { id: 'pr', label: 'Xác suất khách trả (%)', v: 80, max: 100 }, { id: 'rep', label: 'Giá trị mua lặp lại (nếu trả)', v: 0 }],
  v => { const ev = v.pr / 100 * (v.p + v.rep) - v.c, be = v.c / (v.p + v.rep) * 100; return 'Giá trị kỳ vọng: <b>' + cpF(ev) + '</b>; xác suất hòa vốn: <b>' + cpP(be) + '</b> → ' + (ev > 0 ? '✅ nên cấp tín dụng.' : '🔴 không nên.'); });

WIDGETS['fc-aging'] = host => dlCalc(host, [{ id: 'a', label: '0–30 ngày', v: 500 }, { id: 'b', label: '31–60', v: 200 }, { id: 'c', label: '61–90', v: 100 }, { id: 'd', label: 'Trên 90', v: 60 }],
  v => { const t = v.a + v.b + v.c + v.d, late = v.c + v.d; return 'Tổng phải thu: <b>' + cpF(t, 0) + '</b>; quá 60 ngày: <b>' + cpP(t ? late / t * 100 : 0) + '</b>; quá 90 ngày: ' + cpP(t ? v.d / t * 100 : 0) + '<br>' + ((late / t) > 0.2 ? '🔴 Nợ quá hạn cao.' : '✅ Trong tầm kiểm soát.'); });

WIDGETS['fc-bond-price'] = host => dlCalc(host, [{ id: 'c', label: 'Coupon (%)', v: 8 }, { id: 'y', label: 'Lợi suất thị trường (%)', v: 10, step: 0.25 }, { id: 'n', label: 'Số năm', v: 10, min: 1, max: 40 }],
  v => { const p = cpBond(1000, v.c, v.y, v.n); return 'Giá (mệnh giá 1.000): <b>' + cpF(p, 0) + '</b> (' + (p < 1000 ? 'chiết khấu' : p > 1000 ? 'phụ trội' : 'bằng mệnh giá') + ').<br>Lợi suất hiện hành: <b>' + cpP(80 / p * 100 * v.c / 8) + '</b>.'; });

WIDGETS['fc-ytm'] = host => dlCalc(host, [{ id: 'p', label: 'Giá thị trường', v: 900 }, { id: 'c', label: 'Coupon (%)', v: 8 }, { id: 'n', label: 'Số năm', v: 10 }],
  v => { let lo = 0.0001, hi = 1; for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (cpBond(1000, v.c, m * 100, v.n) > v.p) lo = m; else hi = m; } return 'YTM ≈ <b>' + cpP((lo + hi) / 2 * 100) + '</b><br>Lợi suất hiện hành: ' + cpP(v.c * 10 / v.p * 100) + '.'; });

WIDGETS['fc-bond-risk'] = host => dlCalc(host, [{ id: 'c', label: 'Coupon (%)', v: 6 }, { id: 'y', label: 'Lợi suất ban đầu (%)', v: 6 }, { id: 'dy', label: 'Lãi suất tăng (điểm)', v: 1, step: 0.25 }],
  v => [2, 5, 10, 30].map(n => { const a = cpBond(1000, v.c, v.y, n), b = cpBond(1000, v.c, v.y + v.dy, n); return 'Kỳ hạn ' + n + ' năm: ' + cpF(a, 0) + ' → ' + cpF(b, 0) + ' (<b>' + cpP((b / a - 1) * 100) + '</b>)'; }).join('<br>'));

WIDGETS['fc-gordon'] = host => dlCalc(host, [{ id: 'd', label: 'Cổ tức kỳ 1', v: 2, step: 0.1 }, { id: 'r', label: 'Lợi suất đòi hỏi (%)', v: 10, step: 0.25 }, { id: 'g', label: 'Tăng trưởng g (%)', v: 4, step: 0.25 }, { id: 'p', label: 'Giá thị trường (để tính r ngụ ý)', v: 40 }],
  v => v.r <= v.g ? '⚠️ Cần r > g.' : 'Giá hợp lý: <b>' + cpF(v.d / ((v.r - v.g) / 100)) + '</b><br>Lợi suất ngụ ý từ giá ' + cpF(v.p) + ': <b>' + cpP(v.d / v.p * 100 + v.g) + '</b>.');

WIDGETS['fc-pvgo'] = host => dlCalc(host, [{ id: 'p', label: 'Giá cổ phiếu', v: 50 }, { id: 'e', label: 'EPS kỳ 1', v: 4 }, { id: 'r', label: 'Chi phí vốn (%)', v: 10 }],
  v => { const base = v.e / (v.r / 100), pvgo = v.p - base; return 'Giá trị tài sản hiện có: <b>' + cpF(base) + '</b>; PVGO: <b>' + cpF(pvgo) + '</b> (' + cpP(v.p ? pvgo / v.p * 100 : 0) + ' giá)<br>P/E = <b>' + cpF(v.e ? v.p / v.e : 0, 1) + '</b>.'; });

WIDGETS['fc-capm-simple'] = host => dlCalc(host, [{ id: 'rf', label: 'Lãi phi rủi ro (%)', v: 4, step: 0.25 }, { id: 'p', label: 'Phần bù rủi ro (%)', v: 7, step: 0.25 }],
  v => 'Lợi suất đòi hỏi trung bình: <b>' + cpP(v.rf + v.p) + '</b> = ' + cpP(v.rf) + ' + ' + cpP(v.p) + '.');

WIDGETS['fc-stdev'] = host => { host.innerHTML = '<div class="row"><label>Lợi suất các năm (%) <input id="s" value="10, -5, 20, 8, 15" style="width:240px"></label></div><div class="calc" id="o"></div>'; const draw = () => { const a = fcList(host.querySelector('#s').value); if (a.length < 2) { host.querySelector('#o').innerHTML = 'Nhập ít nhất 2 giá trị.'; return; } const m = a.reduce((s, x) => s + x, 0) / a.length, v = a.reduce((s, x) => s + (x - m) ** 2, 0) / (a.length - 1); host.querySelector('#o').innerHTML = 'Trung bình: <b>' + cpP(m) + '</b><br>Phương sai: <b>' + cpF(v) + '</b> · Độ lệch chuẩn: <b>' + cpP(Math.sqrt(v)) + '</b>'; }; host.querySelector('#s').oninput = draw; draw(); };

WIDGETS['fc-diversify'] = host => dlCalc(host, [{ id: 's', label: 'Độ lệch chuẩn mỗi cổ phiếu (%)', v: 40 }, { id: 'rho', label: 'Tương quan trung bình (0–1)', v: 0.3, min: 0, max: 1, step: 0.05 }, { id: 'n', label: 'Số cổ phiếu', v: 20, min: 1, max: 500 }],
  v => { const sd = Math.sqrt(v.s ** 2 * (1 / v.n + (1 - 1 / v.n) * v.rho)); return 'Độ lệch chuẩn danh mục: <b>' + cpP(sd) + '</b><br>Rủi ro thị trường còn lại (n → ∞): <b>' + cpP(v.s * Math.sqrt(v.rho)) + '</b>.'; });

WIDGETS['fc-npv'] = host => dlCalc(host, [{ id: 'i', label: 'Vốn đầu tư ban đầu', v: 1000 }, { id: 'c', label: 'Dòng tiền mỗi năm', v: 300 }, { id: 'n', label: 'Số năm', v: 5, min: 1, max: 40 }, { id: 'r', label: 'Chi phí vốn (%)', v: 10, step: 0.25 }],
  v => { const npv = fcPV(v.c, v.r / 100, v.n) - v.i; return 'PV dòng tiền: <b>' + cpF(fcPV(v.c, v.r / 100, v.n), 0) + '</b><br>NPV: <b>' + cpF(npv, 0) + '</b> → ' + (npv > 0 ? '✅ nhận dự án.' : '🔴 bỏ dự án.'); });

WIDGETS['fc-irr'] = host => { host.innerHTML = '<div class="row"><label>Dòng tiền (năm 0, 1, 2…) <input id="s" value="-1000, 300, 400, 500, 300" style="width:260px"></label><label>Chi phí vốn (%) <input id="r" type="number" value="10" style="width:70px"></label></div><div class="calc" id="o"></div>'; const draw = () => { const a = fcList(host.querySelector('#s').value), r = parseFloat(host.querySelector('#r').value) || 0; if (a.length < 2) { host.querySelector('#o').innerHTML = 'Nhập ít nhất 2 dòng tiền.'; return; } const irr = fcIRR(a), npv = fcNPV(r / 100, a); host.querySelector('#o').innerHTML = 'NPV tại ' + cpP(r) + ': <b>' + cpF(npv, 1) + '</b><br>IRR: <b>' + (isNaN(irr) ? 'không xác định' : cpP(irr * 100)) + '</b><br>' + (isNaN(irr) ? '' : (irr * 100 > r ? '✅ IRR > chi phí vốn.' : '🔴 IRR < chi phí vốn.')); }; host.querySelectorAll('input').forEach(i => i.oninput = draw); draw(); };

WIDGETS['fc-eac'] = host => dlCalc(host, [{ id: 'c1', label: 'Chi phí máy A (PV)', v: 1000 }, { id: 'n1', label: 'Tuổi thọ A (năm)', v: 3, min: 1 }, { id: 'c2', label: 'Chi phí máy B (PV)', v: 1400 }, { id: 'n2', label: 'Tuổi thọ B (năm)', v: 5, min: 1 }, { id: 'r', label: 'Lãi suất (%)', v: 10 }],
  v => { const f = (c, n) => c / fcPV(1, v.r / 100, n), a = f(v.c1, v.n1), b = f(v.c2, v.n2); return 'EAC A: <b>' + cpF(a) + '</b>/năm · EAC B: <b>' + cpF(b) + '</b>/năm<br>Chọn <b>' + (a < b ? 'A' : 'B') + '</b> (chi phí hằng năm thấp hơn).'; });

WIDGETS['fc-incremental'] = host => cpScore(host, [
  'Chi phí nghiên cứu đã chi, không thể thu hồi', 'Doanh số sản phẩm cũ giảm vì dự án mới', 'Miếng đất công ty có thể bán nếu không dùng', 'Phân bổ chi phí quản lý chung cố định', 'Vốn lưu động phải tăng khi doanh thu tăng'
], [[0, 'Chọn các mục bạn cho là phải tính vào dòng tiền tăng thêm.'], [1, 'Gợi ý: <b>tính</b> doanh số cũ giảm, chi phí cơ hội, vốn lưu động; <b>bỏ</b> chi phí chìm và chi phí chung cố định không đổi.']], 'Đánh dấu mục bạn sẽ TÍNH vào dòng tiền:');

WIDGETS['fc-project-cf'] = host => dlCalc(host, [{ id: 'rev', label: 'Doanh thu', v: 500 }, { id: 'cost', label: 'Chi phí tiền mặt', v: 300 }, { id: 'dep', label: 'Khấu hao', v: 100 }, { id: 't', label: 'Thuế suất (%)', v: 35 }],
  v => { const ebit = v.rev - v.cost - v.dep, tax = Math.max(0, ebit) * v.t / 100, cf = ebit - tax + v.dep; return 'Lợi nhuận hoạt động: ' + cpF(ebit, 0) + ' · Thuế: ' + cpF(tax, 0) + '<br>Dòng tiền hoạt động = <b>' + cpF(cf, 0) + '</b><br>Lá chắn thuế khấu hao: <b>' + cpF(v.dep * v.t / 100, 0) + '</b>.'; });

WIDGETS['fc-project-npv'] = host => dlCalc(host, [{ id: 'i', label: 'Đầu tư thiết bị', v: 1000 }, { id: 'wc', label: 'Vốn lưu động (thu hồi cuối)', v: 100 }, { id: 'cf', label: 'Dòng tiền vận hành/năm', v: 350 }, { id: 'n', label: 'Số năm', v: 5, min: 1, max: 30 }, { id: 'sal', label: 'Giá trị thanh lý sau thuế', v: 100 }, { id: 'r', label: 'Chi phí vốn (%)', v: 12 }],
  v => { const r = v.r / 100, npv = -v.i - v.wc + fcPV(v.cf, r, v.n) + (v.wc + v.sal) / Math.pow(1 + r, v.n); return 'NPV = <b>' + cpF(npv, 0) + '</b> ' + (npv > 0 ? '✅' : '🔴'); });

WIDGETS['fc-beta'] = host => dlCalc(host, [{ id: 'w1', label: 'Tỷ trọng CP 1 (%)', v: 40 }, { id: 'b1', label: 'Beta 1', v: 1.4, step: 0.1 }, { id: 'w2', label: 'Tỷ trọng CP 2 (%)', v: 35 }, { id: 'b2', label: 'Beta 2', v: 0.9, step: 0.1 }, { id: 'b3', label: 'Beta phần còn lại', v: 0.5, step: 0.1 }],
  v => { const w3 = Math.max(0, 100 - v.w1 - v.w2), b = (v.w1 * v.b1 + v.w2 * v.b2 + w3 * v.b3) / 100; return 'Tỷ trọng còn lại: ' + cpF(w3, 0) + '% · Beta danh mục: <b>' + cpF(b) + '</b> ' + (b > 1 ? '(tấn công)' : '(phòng thủ)') + '.'; });

WIDGETS['fc-capm'] = host => dlCalc(host, [{ id: 'rf', label: 'Lãi phi rủi ro (%)', v: 4 }, { id: 'rm', label: 'Lợi suất thị trường (%)', v: 10 }, { id: 'b', label: 'Beta', v: 1.2, step: 0.1 }],
  v => 'Lợi suất đòi hỏi = ' + cpP(v.rf) + ' + ' + cpF(v.b) + ' × ' + cpP(v.rm - v.rf) + ' = <b>' + cpP(v.rf + v.b * (v.rm - v.rf)) + '</b>.');

WIDGETS['fc-project-rate'] = host => dlCalc(host, [{ id: 'rf', label: 'Lãi phi rủi ro (%)', v: 4 }, { id: 'p', label: 'Phần bù thị trường (%)', v: 6 }, { id: 'ba', label: 'Beta tài sản ngành', v: 0.8, step: 0.1 }],
  v => 'Chi phí vốn dự án ngành này: <b>' + cpP(v.rf + v.ba * v.p) + '</b>.<br>(Giả định tài trợ toàn vốn chủ; điều chỉnh khi có nợ.)');

WIDGETS['fc-wacc'] = host => dlCalc(host, [{ id: 'd', label: 'Nợ D', v: 400 }, { id: 'e', label: 'Vốn chủ E (thị trường)', v: 600 }, { id: 'rd', label: 'Lãi suất nợ (%)', v: 7 }, { id: 're', label: 'Chi phí vốn chủ (%)', v: 12 }, { id: 't', label: 'Thuế suất (%)', v: 30 }],
  v => { const V = v.d + v.e, w = V ? v.d / V * v.rd * (1 - v.t / 100) + v.e / V * v.re : 0; return 'D/V = ' + cpP(V ? v.d / V * 100 : 0) + ' · E/V = ' + cpP(V ? v.e / V * 100 : 0) + '<br>WACC = <b>' + cpP(w) + '</b> (chi phí nợ sau thuế: ' + cpP(v.rd * (1 - v.t / 100)) + ').'; });

WIDGETS['fc-equity-cost'] = host => dlCalc(host, [{ id: 'rf', label: 'Lãi phi rủi ro (%)', v: 4 }, { id: 'p', label: 'Phần bù (%)', v: 6 }, { id: 'b', label: 'Beta', v: 1.1, step: 0.1 }, { id: 'd', label: 'Cổ tức kỳ 1', v: 2 }, { id: 'px', label: 'Giá', v: 40 }, { id: 'g', label: 'Tăng trưởng g (%)', v: 5 }],
  v => 'CAPM: <b>' + cpP(v.rf + v.b * v.p) + '</b> · DDM: <b>' + cpP(v.d / v.px * 100 + v.g) + '</b><br>Chênh: ' + cpF(v.rf + v.b * v.p - (v.d / v.px * 100 + v.g), 1) + ' điểm → nên kiểm tra lại giả định.');

WIDGETS['fc-hurdle'] = host => dlCalc(host, [{ id: 'w', label: 'WACC (%)', v: 9 }, { id: 'adj', label: 'Điều chỉnh rủi ro (điểm)', v: 2, step: 0.5 }, { id: 'irr', label: 'IRR dự án (%)', v: 10.5, step: 0.25 }],
  v => { const h = v.w + v.adj; return 'Tỷ lệ chiết khấu dự án: <b>' + cpP(h) + '</b>.<br>IRR ' + cpP(v.irr) + ' ' + (v.irr > h ? '> hàng rào ✅ nhận' : '< hàng rào 🔴 từ chối') + '.'; });

WIDGETS['fc-sensitivity'] = host => dlCalc(host, [{ id: 'p', label: 'Giá bán/đơn vị', v: 100 }, { id: 'q', label: 'Sản lượng/năm', v: 1000 }, { id: 'vc', label: 'Biến phí/đơn vị', v: 60 }, { id: 'fc', label: 'Chi phí cố định/năm', v: 20000 }, { id: 'i', label: 'Vốn đầu tư', v: 100000 }, { id: 'n', label: 'Số năm', v: 5 }, { id: 'r', label: 'Chi phí vốn (%)', v: 10 }, { id: 'sh', label: 'Mức thử (±%)', v: 10 }],
  v => { const f = (p, q, vc) => fcPV((p - vc) * q - v.fc, v.r / 100, v.n) - v.i, base = f(v.p, v.q, v.vc), s = 1 + v.sh / 100; return 'NPV cơ sở: <b>' + cpF(base, 0) + '</b><br>Giá −' + v.sh + '%: ' + cpF(f(v.p / s, v.q, v.vc), 0) + ' · Sản lượng −' + v.sh + '%: ' + cpF(f(v.p, v.q / s, v.vc), 0) + ' · Biến phí +' + v.sh + '%: ' + cpF(f(v.p, v.q, v.vc * s), 0); });

WIDGETS['fc-breakeven'] = host => dlCalc(host, [{ id: 'p', label: 'Giá bán', v: 100 }, { id: 'vc', label: 'Biến phí/đơn vị', v: 60 }, { id: 'fc', label: 'Chi phí cố định/năm', v: 20000 }, { id: 'q', label: 'Sản lượng dự kiến', v: 1000 }],
  v => { const be = v.fc / (v.p - v.vc), ebit = (v.p - v.vc) * v.q - v.fc, dol = ebit ? (v.p - v.vc) * v.q / ebit : NaN; return 'Hòa vốn kế toán: <b>' + cpF(be, 0) + '</b> đơn vị<br>Lợi nhuận ở sản lượng dự kiến: <b>' + cpF(ebit, 0) + '</b>; DOL: <b>' + cpF(dol, 1) + '</b> (doanh số +1% → lợi nhuận +' + cpF(dol, 1) + '%).'; });

WIDGETS['fc-debt-shield'] = host => dlCalc(host, [{ id: 'd', label: 'Nợ', v: 1000000, step: 10000 }, { id: 'r', label: 'Lãi suất (%)', v: 8 }, { id: 't', label: 'Thuế suất (%)', v: 30 }],
  v => { const int = v.d * v.r / 100; return 'Lãi vay/năm: ' + cpF(int, 0) + ' → thuế tiết kiệm: <b>' + cpF(int * v.t / 100, 0) + '</b><br>Chi phí thực sau thuế: <b>' + cpF(int * (1 - v.t / 100), 0) + '</b> (' + cpP(v.r * (1 - v.t / 100)) + ').<br>Với cổ phiếu ưu đãi cùng số tiền, cổ tức không được trừ thuế.'; });

WIDGETS['fc-convertible'] = host => dlCalc(host, [{ id: 'cr', label: 'Tỷ lệ chuyển đổi (cổ phiếu/trái phiếu)', v: 20 }, { id: 'px', label: 'Giá cổ phiếu', v: 60 }, { id: 'bp', label: 'Giá trị trái phiếu thường', v: 900 }],
  v => { const cv = v.cr * v.px; return 'Giá trị chuyển đổi: <b>' + cpF(cv, 0) + '</b> vs giá trị trái phiếu thường: ' + cpF(v.bp, 0) + '<br>Giá trái phiếu ≥ <b>' + cpF(Math.max(cv, v.bp), 0) + '</b>. ' + (cv > v.bp ? 'Đổi sang cổ phiếu có lợi.' : 'Giữ như trái phiếu.') + ' Giá cổ phiếu hòa vốn chuyển đổi: <b>' + cpF(v.bp / v.cr) + '</b>.'; });

WIDGETS['fc-ipo'] = host => dlCalc(host, [{ id: 'n', label: 'Số cổ phiếu (triệu)', v: 10 }, { id: 'p', label: 'Giá chào bán', v: 20 }, { id: 'sp', label: 'Spread bảo lãnh (%)', v: 7 }, { id: 'ex', label: 'Chi phí khác (triệu)', v: 1.5, step: 0.1 }, { id: 'd1', label: 'Giá đóng cửa ngày đầu', v: 26 }],
  v => { const gross = v.n * v.p, fee = gross * v.sp / 100, left = v.n * (v.d1 - v.p); return 'Huy động gộp: <b>' + cpF(gross) + ' triệu</b>; spread: ' + cpF(fee) + '; chi phí khác: ' + cpF(v.ex) + '<br>Thu ròng: <b>' + cpF(gross - fee - v.ex) + '</b><br>Underpricing ("để trên bàn"): <b>' + cpF(left) + ' triệu</b> (' + cpP((v.d1 / v.p - 1) * 100) + ').'; });

WIDGETS['fc-rights'] = host => dlCalc(host, [{ id: 'p', label: 'Giá cổ phiếu hiện tại', v: 50 }, { id: 'k', label: 'Giá quyền mua', v: 40 }, { id: 'n', label: 'Số quyền cần để mua 1 cổ phiếu', v: 4, min: 1 }],
  v => { const ex = (v.n * v.p + v.k) / (v.n + 1), right = v.p - ex; return 'Giá sau phát hành (ex-rights): <b>' + cpF(ex) + '</b><br>Giá trị 1 quyền (cần ' + v.n + ' quyền để mua 1 cp mới): <b>' + cpF((v.p - v.k) / (v.n + 1)) + '</b>; mỗi cổ phiếu cũ mất ' + cpF(right) + '.'; });

WIDGETS['fc-lease'] = host => dlCalc(host, [{ id: 'cost', label: 'Giá mua thiết bị', v: 100000 }, { id: 'lp', label: 'Tiền thuê/năm (cuối năm)', v: 28000 }, { id: 'n', label: 'Số năm', v: 5 }, { id: 't', label: 'Thuế suất (%)', v: 30 }, { id: 'rb', label: 'Lãi vay sau thuế (%)', v: 5 }],
  v => { const t = v.t / 100, r = v.rb / 100, dep = v.cost / v.n; const pvLease = fcPV(v.lp * (1 - t), r, v.n), pvDepShield = fcPV(dep * t, r, v.n); const npv = v.cost - pvLease - pvDepShield; return 'PV tiền thuê sau thuế: ' + cpF(pvLease, 0) + ' · PV lá chắn thuế khấu hao mất: ' + cpF(pvDepShield, 0) + '<br>NPV thuê = <b>' + cpF(npv, 0) + '</b> → ' + (npv > 0 ? '✅ thuê có lợi.' : '🔴 mua có lợi.') + ' (khấu hao đường thẳng, không thanh lý)'; });

WIDGETS['fc-leverage'] = host => dlCalc(host, [{ id: 'a', label: 'Tài sản', v: 1000 }, { id: 'de', label: 'Nợ/Vốn chủ (D/E)', v: 1, step: 0.25, min: 0 }, { id: 'ebit', label: 'EBIT', v: 120 }, { id: 'rd', label: 'Lãi nợ (%)', v: 6 }, { id: 't', label: 'Thuế (%)', v: 30 }],
  v => { const D = v.a * v.de / (1 + v.de), E = v.a - D, ni = (v.ebit - D * v.rd / 100) * (1 - v.t / 100), roe = ni / E * 100, roe0 = v.ebit * (1 - v.t / 100) / v.a * 100; return 'Nợ ' + cpF(D, 0) + ', vốn chủ ' + cpF(E, 0) + '<br>Lợi nhuận ròng: ' + cpF(ni, 1) + ' → ROE <b>' + cpP(roe) + '</b> (không nợ: ' + cpP(roe0) + ').<br>' + (roe > roe0 ? 'Đòn bẩy khuếch đại lợi suất.' : 'Đòn bẩy đang làm giảm ROE vì lãi vay cao hơn lợi suất tài sản.'); });

WIDGETS['fc-indifference'] = host => dlCalc(host, [{ id: 'sh', label: 'Số cổ phiếu hiện có (triệu)', v: 10 }, { id: 'need', label: 'Cần huy động (triệu USD)', v: 20 }, { id: 'px', label: 'Giá cổ phiếu', v: 20 }, { id: 'r', label: 'Lãi nợ (%)', v: 8 }, { id: 'int0', label: 'Lãi nợ hiện có (triệu)', v: 2 }],
  v => { const newSh = v.need / v.px, intNew = v.need * v.r / 100; const indiff = (intNew * (v.sh + newSh) / newSh) + v.int0; return 'Phương án cổ phiếu: thêm ' + cpF(newSh) + ' triệu cp; phương án nợ: thêm lãi ' + cpF(intNew) + ' triệu.<br>EBIT hòa vốn (EPS bằng nhau): <b>' + cpF(indiff) + ' triệu</b>.<br>EBIT lớn hơn mức này → nợ cho EPS cao hơn; thấp hơn → cổ phiếu có lợi.'; });

WIDGETS['fc-merger'] = host => dlCalc(host, [{ id: 'va', label: 'Giá trị A (bên mua)', v: 100 }, { id: 'vb', label: 'Giá trị B (mục tiêu)', v: 50 }, { id: 'vab', label: 'Giá trị sau sáp nhập', v: 165 }, { id: 'pay', label: 'Tiền trả cho B', v: 60 }],
  v => { const gain = v.vab - v.va - v.vb, cost = v.pay - v.vb; return 'Lợi ích: <b>' + cpF(gain) + '</b> · Chi phí (phần bù): <b>' + cpF(cost) + '</b><br>NPV bên mua = <b>' + cpF(gain - cost) + '</b> ' + (gain - cost > 0 ? '✅ nên làm' : '🔴 không nên') + '.<br>Phần của B: ' + cpF(cost) + '; phần của A: ' + cpF(gain - cost) + '.'; });

WIDGETS['fc-fx'] = host => dlCalc(host, [{ id: 'amt', label: 'Số tiền (USD)', v: 1000 }, { id: 'spot', label: 'Spot (đơn vị ngoại tệ/USD)', v: 0.92, step: 0.01 }, { id: 'fwd', label: 'Forward (đơn vị ngoại tệ/USD)', v: 0.90, step: 0.01 }],
  v => 'Đổi ngay: <b>' + cpF(v.amt * v.spot) + '</b> ngoại tệ; theo forward: <b>' + cpF(v.amt * v.fwd) + '</b><br>Chênh forward/spot: ' + cpP((v.fwd / v.spot - 1) * 100) + (v.fwd < v.spot ? ' (USD kỳ hạn rẻ hơn: ngoại tệ có lãi thấp hơn Mỹ).' : '.'));

WIDGETS['fc-irp'] = host => dlCalc(host, [{ id: 's', label: 'Spot (nội tệ/ngoại tệ)', v: 1.10, step: 0.01 }, { id: 'rh', label: 'Lãi nội địa (%)', v: 5 }, { id: 'rf', label: 'Lãi nước ngoài (%)', v: 3 }, { id: 'inf', label: 'Chênh lạm phát (nội − ngoại, %)', v: 2 }],
  v => 'Forward 1 năm theo IRP: <b>' + cpF(v.s * (1 + v.rh / 100) / (1 + v.rf / 100), 4) + '</b><br>Spot kỳ vọng theo PPP: <b>' + cpF(v.s * (1 + v.inf / 100), 4) + '</b> (gần nhau khi lãi chênh = lạm phát chênh).');

WIDGETS['fc-hedge'] = host => dlCalc(host, [{ id: 'amt', label: 'Phải thu (ngoại tệ)', v: 100000 }, { id: 'spot', label: 'Spot hiện tại (USD/ngoại tệ)', v: 1.10, step: 0.01 }, { id: 'fwd', label: 'Forward (USD/ngoại tệ)', v: 1.12, step: 0.01 }, { id: 'fut', label: 'Spot thực tế khi thu tiền', v: 1.05, step: 0.01 }],
  v => 'Không hedge: <b>' + cpF(v.amt * v.fut, 0) + ' USD</b><br>Hedge bằng forward: <b>' + cpF(v.amt * v.fwd, 0) + ' USD</b><br>Hedge ' + (v.fwd >= v.fut ? 'có lợi' : 'bất lợi') + ' hơn: <b>' + cpF(v.amt * (v.fwd - v.fut), 0) + ' USD</b>.');
