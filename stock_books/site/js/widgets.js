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
