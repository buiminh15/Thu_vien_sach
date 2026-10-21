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
