// Widget cho sách "Phân tích tài chính"
(function () {
  const f0 = x => Math.round(x).toLocaleString('vi-VN');
  const f1 = x => (Math.round(x * 10) / 10).toLocaleString('vi-VN');
  const f2 = x => (Math.round(x * 100) / 100).toLocaleString('vi-VN');
  const pct = x => f2(x * 100) + '%';
  const sl = (id, label, min, max, val, step) =>
    `<label style="display:block;margin:8px 0 2px;font-size:.9rem">${label}: <b id="${id}v">${val}</b></label><input id="${id}" type="range" min="${min}" max="${max}" step="${step || 1}" value="${val}" style="width:100%">`;
  const nf = (id, label, val) => `<label style="display:block;margin:6px 0 2px;font-size:.9rem">${label}</label><input id="${id}" type="text" value="${val}" style="width:100%;padding:6px;border-radius:6px;border:1px solid #888">`;
  const bind = (host, draw) => { host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw(); };
  const $q = host => s => host.querySelector(s);
  const val = ($$, id) => { const el = $$('#' + id), v = +el.value; const lab = $$('#' + id + 'v'); if (lab) lab.textContent = el.value; return v; };

  // ---- TVM ----
  WIDGETS['tvm'] = host => {
    host.innerHTML = `${sl('p0', 'Số tiền gốc P₀', 100, 100000, 1000, 100)}${sl('ir', 'Lãi suất (%/năm)', 1, 30, 8, 0.5)}${sl('nn', 'Số năm', 1, 40, 10)}${sl('mm', 'Số lần ghép lãi/năm', 1, 12, 1)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const p = val($$, 'p0'), r = val($$, 'ir') / 100, n = val($$, 'nn'), m = val($$, 'mm');
      const fv = p * Math.pow(1 + r / m, m * n), si = p * (1 + r * n), eff = Math.pow(1 + r / m, m) - 1;
      const t2 = Math.log(2) / (m * Math.log(1 + r / m));
      $$('#out').innerHTML = `FV (lãi kép) = <b>${f2(fv)}</b> · Lãi đơn: ${f2(si)}<br>PV của khoản tương lai bằng FV: <b>${f2(p)}</b> (chiết khấu lại ở cùng lãi suất)<br>Lãi suất hiệu dụng: <b>${pct(eff)}</b> · Thời gian gấp đôi ≈ ${f1(t2)} năm<br><span class="small">Công thức: FV = P₀[1 + i/m]^(mn).</span>`;
    }
    bind(host, draw);
  };

  // ---- Vay trả góp ----
  WIDGETS['loan'] = host => {
    host.innerHTML = `${sl('ln', 'Số tiền vay', 1000, 100000, 22000, 1000)}${sl('lr', 'Lãi suất (%/năm)', 1, 25, 12, 0.5)}${sl('ly', 'Số năm', 1, 20, 6)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const L = val($$, 'ln'), r = val($$, 'lr') / 100, n = val($$, 'ly');
      const R = L * r / (1 - Math.pow(1 + r, -n));
      let bal = L, rows = '';
      for (let t = 1; t <= n; t++) { const i = bal * r, pr = R - i; bal -= pr; rows += `<tr><td>${t}</td><td>${f0(R)}</td><td>${f0(i)}</td><td>${f0(pr)}</td><td>${f0(Math.max(0, bal))}</td></tr>`; }
      $$('#out').innerHTML = `Khoản trả đều mỗi năm R = <b>${f0(R)}</b> · Tổng trả ${f0(R * n)} (lãi ${f0(R * n - L)})<table class="tb" style="margin-top:6px"><thead><tr><th>Năm</th><th>Góp</th><th>Lãi</th><th>Gốc</th><th>Dư nợ</th></tr></thead><tbody>${rows}</tbody></table>`;
    }
    bind(host, draw);
  };

  // ---- Trái phiếu ----
  WIDGETS['bond'] = host => {
    host.innerHTML = `${sl('mv', 'Mệnh giá', 100, 5000, 1000, 100)}${sl('cp', 'Lãi suất danh nghĩa (coupon, %/năm)', 0, 20, 10, 0.5)}${sl('bn', 'Số năm đến đáo hạn', 1, 30, 9)}${sl('kd', 'Lãi suất yêu cầu k_d (%/năm)', 1, 25, 12, 0.5)}${sl('fq', 'Số lần trả lãi/năm', 1, 2, 1)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const mv = val($$, 'mv'), c = val($$, 'cp') / 100, n = val($$, 'bn'), k = val($$, 'kd') / 100, m = val($$, 'fq');
      const i = mv * c / m, r = k / m, N = n * m;
      const price = i * (1 - Math.pow(1 + r, -N)) / r + mv / Math.pow(1 + r, N);
      const zero = mv / Math.pow(1 + k, n);
      $$('#out').innerHTML = `Giá trái phiếu = <b>${f2(price)}</b> (${price < mv ? 'dưới' : price > mv ? 'trên' : 'bằng'} mệnh giá)<br>Nếu là zero-coupon cùng kỳ hạn: <b>${f2(zero)}</b><br><span class="small">Lãi mỗi kỳ ${f2(i)}, số kỳ ${N}, lãi suất kỳ ${pct(r)}. k_d &gt; coupon → giá &lt; mệnh giá.</span>`;
    }
    bind(host, draw);
  };

  // ---- Lợi nhuận kỳ vọng, σ, CV ----
  WIDGETS['riskcalc'] = host => {
    host.innerHTML = `<table class="tb"><thead><tr><th>Lợi nhuận Rᵢ (%)</th><th>Xác suất Pᵢ</th></tr></thead><tbody id="rows"></tbody></table><p class="small">Chỉnh Rᵢ và Pᵢ (tổng Pᵢ nên bằng 1).</p><div class="calc" id="out"></div>`;
    const data = [[-10, .05], [-2, .10], [4, .20], [9, .30], [14, .20], [20, .10], [28, .05]];
    host.querySelector('#rows').innerHTML = data.map((d, i) => `<tr><td><input class="rr" data-i="${i}" type="number" value="${d[0]}" style="width:80px"></td><td><input class="pp" data-i="${i}" type="number" step="0.01" value="${d[1]}" style="width:80px"></td></tr>`).join('');
    const $$ = $q(host);
    function draw() {
      const R = [...host.querySelectorAll('.rr')].map(x => +x.value / 100), P = [...host.querySelectorAll('.pp')].map(x => +x.value);
      const sp = P.reduce((a, b) => a + b, 0), E = R.reduce((a, r, i) => a + r * P[i], 0), V = R.reduce((a, r, i) => a + Math.pow(r - E, 2) * P[i], 0), s = Math.sqrt(V);
      $$('#out').innerHTML = `Tổng xác suất = ${f2(sp)} ${Math.abs(sp - 1) > 0.001 ? '<b style="color:#e03131">(cần bằng 1)</b>' : ''}<br>E(R) = <b>${pct(E)}</b> · σ² = ${V.toFixed(5)} · σ = <b>${pct(s)}</b> · CV = σ/E(R) = <b>${E ? f2(s / E) : '–'}</b>`;
    }
    host.querySelectorAll('input').forEach(i => { i.oninput = draw; }); draw();
  };

  // ---- Danh mục hai cổ phiếu ----
  WIDGETS['portfolio'] = host => {
    host.innerHTML = `${sl('w1', 'Tỷ trọng cổ phiếu 1 (%)', 0, 100, 50, 5)}${sl('rho', 'Hệ số tương quan ρ', -1, 1, 0.4, 0.1)}<div class="calc" id="out"></div><p class="small">Cổ phiếu 1: E = 16%, σ = 15%. Cổ phiếu 2: E = 14%, σ = 12%.</p>`;
    const $$ = $q(host);
    function draw() {
      const w = val($$, 'w1') / 100, rho = val($$, 'rho');
      const E = w * 16 + (1 - w) * 14, s = Math.sqrt(w * w * 225 + (1 - w) * (1 - w) * 144 + 2 * w * (1 - w) * rho * 15 * 12);
      const avg = w * 15 + (1 - w) * 12;
      $$('#out').innerHTML = `E(Rₚ) = <b>${f2(E)}%</b> · σₚ = <b>${f2(s)}%</b><br>Trung bình σ có trọng số (khi ρ = 1): ${f2(avg)}% → đa dạng hóa giảm rủi ro ${f2(avg - s)} điểm.<br><span class="small">ρ càng thấp (hoặc âm), rủi ro danh mục càng giảm.</span>`;
    }
    bind(host, draw);
  };

  // ---- CAPM ----
  WIDGETS['capm'] = host => {
    host.innerHTML = `${sl('rf', 'Lợi nhuận phi rủi ro R_f (%)', 0, 12, 7, 0.5)}${sl('rm', 'Lợi nhuận thị trường R_m (%)', 5, 25, 13.4, 0.2)}${sl('bt', 'Beta β', 0, 3, 1.5, 0.1)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const rf = val($$, 'rf'), rm = val($$, 'rm'), b = val($$, 'bt');
      $$('#out').innerHTML = `E(R) = ${rf} + ${b} × (${rm} − ${rf}) = <b>${f2(rf + b * (rm - rf))}%</b><br>Phần bù rủi ro thị trường = ${f2(rm - rf)}% · ${b > 1 ? 'Beta &gt; 1: biến động mạnh hơn thị trường' : b < 1 ? 'Beta &lt; 1: phòng thủ hơn thị trường' : 'Beta = 1: bằng thị trường'}.`;
    }
    bind(host, draw);
  };

  // ---- DuPont ----
  WIDGETS['dupont'] = host => {
    host.innerHTML = `${sl('nm', 'Lợi nhuận biên ròng (%)', 1, 30, 8)}${sl('at', 'Vòng quay tổng tài sản (lần)', 0.2, 4, 1.2, 0.1)}${sl('lv', 'Đòn bẩy tài chính (tài sản/vốn chủ)', 1, 5, 2, 0.1)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const nm = val($$, 'nm') / 100, at = val($$, 'at'), lv = val($$, 'lv');
      const roa = nm * at, roe = roa * lv;
      $$('#out').innerHTML = `ROA = ${pct(nm)} × ${f2(at)} = <b>${pct(roa)}</b><br>ROE = ROA × ${f2(lv)} = <b>${pct(roe)}</b><br><span class="small">Nợ/tài sản = ${pct(1 - 1 / lv)}. Đòn bẩy khuếch đại ROE khi ROA vượt chi phí nợ.</span>`;
    }
    bind(host, draw);
  };

  // ---- Baumol ----
  WIDGETS['baumol'] = host => {
    host.innerHTML = `${sl('bt', 'Tổng nhu cầu tiền mặt/năm T (triệu đồng)', 1000, 100000, 31200, 100)}${sl('bf', 'Chi phí mỗi lần bán chứng khoán F (triệu đồng)', 0.1, 5, 1, 0.1)}${sl('bk', 'Lãi suất chi phí cơ hội K (%)', 1, 20, 10, 0.5)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const T = val($$, 'bt'), F = val($$, 'bf'), K = val($$, 'bk') / 100;
      const C = Math.sqrt(2 * F * T / K), tc = C / 2 * K + T / C * F;
      $$('#out').innerHTML = `C* = √(2·F·T/K) = <b>${f0(C)}</b> triệu đồng<br>Chi phí cơ hội ${f1(C / 2 * K)} + chi phí giao dịch ${f1(T / C * F)} = <b>tổng ${f1(tc)}</b> triệu đồng/năm<br>Số lần chuyển chứng khoán thành tiền: ${f1(T / C)} lần/năm.`;
    }
    bind(host, draw);
  };

  // ---- EOQ ----
  WIDGETS['eoq'] = host => {
    host.innerHTML = `${sl('es', 'Nhu cầu S (đơn vị/kỳ)', 100, 10000, 2000, 100)}${sl('eo', 'Chi phí mỗi lần đặt hàng O', 1, 50, 10)}${sl('ec', 'Chi phí duy trì mỗi đơn vị C', 0.1, 10, 1, 0.1)}${sl('ed', 'Số ngày của kỳ', 30, 365, 100, 5)}${sl('el', 'Thời gian chờ hàng (ngày)', 0, 30, 5)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const S = val($$, 'es'), O = val($$, 'eo'), C = val($$, 'ec'), D = val($$, 'ed'), L = val($$, 'el');
      const Q = Math.sqrt(2 * S * O / C), TC = C * Q / 2 + O * S / Q, daily = S / D;
      $$('#out').innerHTML = `Q* = √(2SO/C) = <b>${f0(Q)}</b> đơn vị · Số lần đặt hàng ${f1(S / Q)} · Chu kỳ ${f1(D * Q / S)} ngày<br>Tổng chi phí tồn kho T = ${f1(TC)}<br>Điểm đặt hàng = ${L} × ${f1(daily)} = <b>${f0(L * daily)}</b> đơn vị.`;
    }
    bind(host, draw);
  };

  // ---- NPV, IRR, PBP, PI ----
  WIDGETS['npv'] = host => {
    host.innerHTML = `${nf('cfs', 'Dòng tiền NCF từ năm 0 (cách nhau bằng dấu phẩy)', '-500, 200, 200, 200, 250')}${sl('rr', 'Suất chiết khấu (%)', 1, 30, 12, 0.5)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const cf = $$('#cfs').value.split(',').map(x => parseFloat(x.trim())).filter(x => !isNaN(x));
      const r = val($$, 'rr') / 100;
      if (cf.length < 2) { $$('#out').textContent = 'Nhập ít nhất 2 dòng tiền.'; return; }
      const npv = (rate, c = cf) => c.reduce((a, x, t) => a + x / Math.pow(1 + rate, t), 0);
      let lo = -0.9, hi = 5, irr = null;
      if (npv(lo) * npv(hi) < 0) { for (let i = 0; i < 100; i++) { const mid = (lo + hi) / 2; if (npv(lo) * npv(mid) <= 0) hi = mid; else lo = mid; } irr = (lo + hi) / 2; }
      const pbp = (c) => { let cum = 0; for (let t = 0; t < c.length; t++) { const prev = cum; cum += c[t]; if (t > 0 && prev < 0 && cum >= 0) return t - 1 + (-prev) / c[t]; } return null; };
      const dcf = cf.map((x, t) => x / Math.pow(1 + r, t));
      const pv = dcf.slice(1).reduce((a, b) => a + b, 0), ico = -cf[0];
      const p1 = pbp(cf), p2 = pbp(dcf);
      $$('#out').innerHTML = `NPV = <b style="color:${npv(r) > 0 ? '#2f9e44' : '#e03131'}">${f2(npv(r))}</b> → ${npv(r) > 0 ? 'chấp nhận' : 'bác bỏ'}<br>IRR = <b>${irr === null ? 'không xác định' : pct(irr)}</b><br>Hoàn vốn: ${p1 === null ? 'không hoàn vốn' : f2(p1) + ' năm'} · có chiết khấu: ${p2 === null ? 'không hoàn vốn' : f2(p2) + ' năm'}<br>PI = ${ico > 0 ? f2(pv / ico) : '–'}`;
    }
    bind(host, draw);
  };

  // ---- WACC ----
  WIDGETS['wacc'] = host => {
    host.innerHTML = `${sl('ve', 'Giá trị thị trường vốn chủ sở hữu E', 100, 10000, 600, 50)}${sl('vd', 'Giá trị thị trường nợ D', 0, 10000, 400, 50)}${sl('re', 'Chi phí vốn cổ phần R_E (%)', 5, 30, 15.4, 0.2)}${sl('rd', 'Lãi suất nợ R_D (%)', 2, 20, 10, 0.5)}${sl('tc', 'Thuế suất (%)', 0, 50, 30)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const E = val($$, 've'), D = val($$, 'vd'), Re = val($$, 're') / 100, Rd = val($$, 'rd') / 100, T = val($$, 'tc') / 100, V = E + D;
      const w = E / V * Re + D / V * Rd * (1 - T);
      $$('#out').innerHTML = `E/V = ${pct(E / V)} · D/V = ${pct(D / V)} · chi phí nợ sau thuế = ${pct(Rd * (1 - T))}<br>WACC = <b>${pct(w)}</b>`;
    }
    bind(host, draw);
  };

  // ---- Đòn bẩy ----
  WIDGETS['leverage'] = host => {
    host.innerHTML = `${sl('lp', 'Giá bán P', 10, 100, 50)}${sl('lvv', 'Biến phí đơn vị V', 5, 90, 25)}${sl('lf', 'Định phí F', 10000, 500000, 100000, 5000)}${sl('lq', 'Sản lượng Q', 100, 20000, 8000, 100)}${sl('li', 'Lãi vay I', 0, 100000, 16000, 1000)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const P = val($$, 'lp'), V = val($$, 'lvv'), F = val($$, 'lf'), Q = val($$, 'lq'), I = val($$, 'li');
      if (P <= V) { $$('#out').textContent = 'Giá bán phải lớn hơn biến phí.'; return; }
      const qbe = F / (P - V), ebit = Q * (P - V) - F, dol = ebit !== 0 ? Q * (P - V) / ebit : NaN;
      const dfl = ebit - I > 0 ? ebit / (ebit - I) : NaN;
      $$('#out').innerHTML = `Hòa vốn Q_BE = ${f0(qbe)} đơn vị (doanh thu ${f0(qbe * P)})<br>EBIT tại Q = ${f0(Q)}: <b>${f0(ebit)}</b><br>DOL = <b>${isNaN(dol) ? '–' : f2(dol)}</b> · DFL = <b>${isNaN(dfl) ? '–' : f2(dfl)}</b> · DTL = <b>${isNaN(dol * dfl) ? '–' : f2(dol * dfl)}</b>`;
    }
    bind(host, draw);
  };

  // ---- EBIT–EPS ----
  WIDGETS['ebit-eps'] = host => {
    host.innerHTML = `${sl('eb', 'EBIT (triệu USD)', 0.2, 5, 2.7, 0.1)}<div class="calc" id="out"></div><p class="small">CTC: 200.000 cp hiện có; (1) thêm 100.000 cp; (2) nợ 12% × 5 triệu; (3) ưu đãi 11% × 5 triệu; thuế 40%.</p>`;
    const $$ = $q(host);
    function draw() {
      const E = val($$, 'eb') * 1e6, t = 0.4;
      const eps1 = E * (1 - t) / 300000, eps2 = (E - 600000) * (1 - t) / 200000, eps3 = (E * (1 - t) - 550000) / 200000;
      const best = Math.max(eps1, eps2, eps3);
      const mark = x => x === best ? ' ✅' : '';
      $$('#out').innerHTML = `EPS cổ phiếu thường: <b>${f2(eps1)}</b>${mark(eps1)}<br>EPS nợ: <b>${f2(eps2)}</b>${mark(eps2)}<br>EPS cổ phiếu ưu đãi: <b>${f2(eps3)}</b>${mark(eps3)}<br><span class="small">Điểm bàng quan: nợ vs thường = 1,8 triệu; ưu đãi vs thường = 2,75 triệu.</span>`;
    }
    bind(host, draw);
  };

  // ---- M&M / NOI ----
  WIDGETS['mm'] = host => {
    host.innerHTML = `${sl('mb', 'Nợ B (triệu đồng)', 0, 8000, 1000, 100)}<div class="calc" id="out"></div><p class="small">EBIT O = 1.500; k_o = 15%; lãi suất nợ 10% (không thuế, thị trường hoàn hảo).</p>`;
    const $$ = $q(host);
    function draw() {
      const B = val($$, 'mb'), O = 1500, ko = 0.15, V = O / ko, S = V - B, E = O - B * 0.1, ke = S > 0 ? E / S : NaN;
      const sh = 1e6 * S / 9000, price = S * 1e6 / (1e6 - (B - 1000) * 1e6 / 9000);
      $$('#out').innerHTML = `V = O/k_o = <b>${f0(V)}</b> (không đổi) · S = V − B = ${f0(S)}<br>E = ${f0(E)} → k_e = <b>${isNaN(ke) ? '–' : pct(ke)}</b> (tăng khi nợ tăng)<br>Giá cổ phiếu sau khi đổi nợ mua lại cp (từ nợ 1.000): ≈ <b>${f0(price)}</b> đ — không đổi theo NOI/M&M.`;
    }
    bind(host, draw);
  };

  // ---- Thuê hay mua ----
  WIDGETS['lease'] = host => {
    host.innerHTML = `${sl('lL', 'Tiền thuê/năm (đầu kỳ)', 10000, 40000, 21000, 500)}${sl('lt', 'Thuế suất (%)', 10, 50, 35)}${sl('lk', 'Chi phí nợ sau thuế (%)', 3, 15, 8, 0.5)}${sl('lP', 'Giá mua', 50000, 200000, 100000, 5000)}<div class="calc" id="out"></div><p class="small">Mua: khấu hao 5 năm, thanh lý sau thuế 20.000 ở năm 7 (WACC 12%), bảo trì 6.000/năm trong 6 năm; thuê 7 năm.</p>`;
    const $$ = $q(host);
    function draw() {
      const L = val($$, 'lL'), t = val($$, 'lt') / 100, k = val($$, 'lk') / 100, P = val($$, 'lP');
      const a = (r, n) => (1 - Math.pow(1 + r, -n)) / r;
      const lease = L * (1 - t) * (1 + a(k, 6));
      const buy = P + 6000 * (1 - t) * a(k, 6) - (P / 5) * t * a(k, 5) - 20000 / Math.pow(1.12, 7);
      $$('#out').innerHTML = `Chi phí thuê (hiện giá) = <b>${f0(lease)}</b><br>Chi phí mua (hiện giá) = <b>${f0(buy)}</b><br>Lợi ích của thuê = ${f0(buy - lease)} → ${buy > lease ? '✅ <b>nên thuê</b>' : '❌ <b>nên mua</b>'}`;
    }
    bind(host, draw);
  };

  // ---- Quyền chọn ----
  WIDGETS['option'] = host => {
    host.innerHTML = `<label style="display:block;margin:6px 0">Loại: <select id="ot"><option value="call">Call (quyền mua)</option><option value="put">Put (quyền bán)</option></select> · Vị thế: <select id="os"><option value="buy">Mua</option><option value="sell">Bán</option></select></label>${sl('ox', 'Giá thực hiện X', 20, 100, 50)}${sl('op', 'Phí quyền chọn', 0, 15, 4)}${sl('osx', 'Giá tài sản lúc đáo hạn S_T', 10, 100, 60)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const call = $$('#ot').value === 'call', buy = $$('#os').value === 'buy';
      const X = val($$, 'ox'), pr = val($$, 'op'), S = val($$, 'osx');
      const pay = call ? Math.max(S - X, 0) : Math.max(X - S, 0);
      const net = buy ? pay - pr : pr - pay;
      const be = call ? X + pr : X - pr;
      $$('#out').innerHTML = `Giá trị nhận được lúc đáo hạn (không tính phí): <b>${buy ? '' : '−'}${f2(pay)}</b><br>Lãi/lỗ ròng sau phí: <b style="color:${net >= 0 ? '#2f9e44' : '#e03131'}">${f2(net)}</b><br>Điểm hòa vốn: S_T = ${f2(be)} · Lỗ tối đa của ${buy ? 'người mua = phí ' + pr : 'người bán call: không giới hạn; người bán put: tối đa X − phí'}`;
    }
    bind(host, draw);
  };

  // ---- Tỷ giá kỳ hạn ----
  WIDGETS['fwdfx'] = host => {
    host.innerHTML = `${sl('fs', 'Tỷ giá giao ngay USD/VND', 14000, 17000, 15213, 10)}${sl('fv', 'Lãi suất VND (%/tháng)', 0.1, 1.5, 0.45, 0.05)}${sl('fu', 'Lãi suất USD (%/năm)', 0.5, 8, 4.8, 0.1)}${sl('fn', 'Kỳ hạn (tháng)', 1, 12, 6)}<div class="calc" id="out"></div>`;
    const $$ = $q(host);
    function draw() {
      const S = val($$, 'fs'), iv = val($$, 'fv') / 100, iu = val($$, 'fu') / 100, n = val($$, 'fn');
      const F = S * (1 + iv * n) / (1 + iu * n / 12);
      $$('#out').innerHTML = `F = ${S} × (1 + ${f2(iv * 100)}% × ${n}) / (1 + ${f2(iu * 100)}% × ${n}/12) = <b>${f0(F)}</b> VND/USD<br>${F > S ? 'USD kỳ hạn đắt hơn giao ngay (lãi VND cao hơn lãi USD).' : 'USD kỳ hạn rẻ hơn giao ngay.'}`;
    }
    bind(host, draw);
  };

  // ---- Ngừa rủi ro tỷ giá ----
  WIDGETS['hedge'] = host => {
    host.innerHTML = `${sl('hs', 'Tỷ giá lúc đáo hạn USD/VND', 15000, 15800, 15281, 10)}<div class="calc" id="out"></div><p class="small">Sagonimex xuất khẩu 200.000 USD sau 6 tháng; tỷ giá lúc ký 15.381; kỳ hạn Eximbank ≈ 15.666 (đã gồm chênh lệch lãi suất VND cao hơn USD).</p>`;
    const $$ = $q(host);
    function draw() {
      const S = val($$, 'hs'), q = 200000;
      const un = S * q, hed = 15666 * q;
      $$('#out').innerHTML = `Không ngừa: thu <b>${f0(un / 1e6)}</b> triệu VND (${S < 15381 ? 'thiệt' : 'lợi'} ${f0(Math.abs(S - 15381) * q / 1e6)} triệu so với tỷ giá lúc ký)<br>Bán kỳ hạn: thu chắc chắn <b>${f0(hed / 1e6)}</b> triệu VND<br>${hed >= un ? '→ Ngừa tốt hơn ở kịch bản này.' : '→ Không ngừa tốt hơn ở kịch bản này (nhưng đã trả “phí bảo hiểm”).'}`;
    }
    bind(host, draw);
  };
})();
