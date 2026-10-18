// Widget cho sách "Các khái niệm cơ bản về kinh tế" – Phần 1: Kinh tế vi mô
(function () {
  const f1 = x => (Math.round(x * 10) / 10).toLocaleString('vi-VN');
  const f0 = x => Math.round(x).toLocaleString('vi-VN');
  const sl = (id, label, min, max, val, step) =>
    `<label style="display:block;margin:8px 0 2px;font-size:.9rem">${label}: <b id="${id}v">${val}</b></label><input id="${id}" type="range" min="${min}" max="${max}" step="${step || 1}" value="${val}" style="width:100%">`;

  // ---- Đồ thị cung – cầu ----
  function chart(opt) {
    // đường cầu: P = a - b*Q ; đường cung: P = c + d*Q
    const W = 460, H = 300, L = 44, B = 30, T = 14, R = 12, QM = 140, PM = 140;
    const X = q => L + (W - L - R) * q / QM, Y = p => H - B - (H - B - T) * p / PM;
    const line = (p0, k, col, w, dash) => `<line x1="${X(0)}" y1="${Y(p0)}" x2="${X(QM)}" y2="${Y(p0 + k * QM)}" stroke="${col}" stroke-width="${w}" ${dash ? 'stroke-dasharray="5 4"' : ''}/>`;
    let s = `<svg viewBox="0 0 ${W} ${H}" style="width:100%;max-width:520px;background:var(--card,transparent)">`;
    s += `<line x1="${L}" y1="${T}" x2="${L}" y2="${H - B}" stroke="currentColor"/><line x1="${L}" y1="${H - B}" x2="${W - R}" y2="${H - B}" stroke="currentColor"/>`;
    s += `<text x="${L + 4}" y="${T + 8}" font-size="11" fill="currentColor">Giá (P)</text><text x="${W - R - 4}" y="${H - B + 22}" font-size="11" text-anchor="end" fill="currentColor">Số lượng (Q)</text>`;
    if (opt.base) opt.base.forEach(b => { s += line(b.p0, b.k, b.col, 1.5, true); });
    if (opt.poly) opt.poly.forEach(p => { s += `<polygon points="${p.pts.map(([q, pr]) => X(q) + ',' + Y(pr)).join(' ')}" fill="${p.col}" opacity=".35"/>`; });
    opt.lines.forEach(l => { s += line(l.p0, l.k, l.col, 2.5); s += `<text x="${X(QM) - 4}" y="${Y(l.p0 + l.k * QM) + (l.k < 0 ? 12 : -4)}" font-size="12" text-anchor="end" fill="${l.col}" font-weight="700">${l.name}</text>`; });
    if (opt.eq) {
      const [q, p] = opt.eq;
      s += `<line x1="${L}" y1="${Y(p)}" x2="${X(q)}" y2="${Y(p)}" stroke="currentColor" stroke-dasharray="3 3" opacity=".6"/><line x1="${X(q)}" y1="${Y(p)}" x2="${X(q)}" y2="${H - B}" stroke="currentColor" stroke-dasharray="3 3" opacity=".6"/>`;
      s += `<circle cx="${X(q)}" cy="${Y(p)}" r="5" fill="#e03131"/><text x="${X(q) + 8}" y="${Y(p) - 6}" font-size="12" fill="#e03131" font-weight="700">E (Q=${f1(q)}, P=${f1(p)})</text>`;
    }
    return s + '</svg>';
  }

  // ---- 1. Thị trường cung – cầu: dịch chuyển, thặng dư, lợi ích xã hội ----
  WIDGETS['sd-market'] = host => {
    host.innerHTML = `<div id="ch"></div>${sl('dd', 'Dịch chuyển cầu (thu nhập tăng +, giảm −)', -30, 30, 0)}${sl('ss', 'Dịch chuyển cung (chi phí đầu vào tăng +, công nghệ tốt hơn −)', -20, 20, 0)}
      <label style="display:block;margin:8px 0"><input type="checkbox" id="fx"> Ép sản lượng giao dịch khác mức cân bằng</label><div id="qwrap" style="display:none">${sl('qq', 'Sản lượng giao dịch Q', 5, 130, 60)}</div>
      <div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const dd = +$$('#dd').value, ss = +$$('#ss').value;
      $$('#ddv').textContent = dd; $$('#ssv').textContent = ss;
      const a = 100 + dd, b = 1, c = 10 + ss, d = 0.5;
      const q0 = 60, p0 = 40; // cân bằng gốc
      const qs = (a - c) / (b + d), ps = a - b * qs;
      const fixed = $$('#fx').checked; $$('#qwrap').style.display = fixed ? 'block' : 'none';
      let Q = qs, P = ps;
      if (fixed) { Q = +$$('#qq').value; $$('#qqv').textContent = Q; P = a - b * Q; }
      const CSv = 0.5 * (a - P) * Q;
      const supP = c + d * Q;
      const PSv = 0.5 * (P - c) * Q + (fixed ? 0 : 0);
      const SB = (a - c) * Q - 0.5 * (b + d) * Q * Q, SBmax = 0.5 * (a - c) * qs;
      const polys = [];
      if (!fixed) {
        polys.push({ col: '#4dabf7', pts: [[0, a], [Q, P], [0, P]] });
        polys.push({ col: '#ffa94d', pts: [[0, c], [Q, P], [0, P]] });
      } else {
        const Pf = Q <= qs ? a - b * Q : ps, Qf = Math.min(Q, qs);
        polys.push({ col: '#4dabf7', pts: [[0, a], [Qf, a - b * Qf], [Qf, Pf], [0, Pf]] });
        polys.push({ col: '#ffa94d', pts: [[0, c], [Qf, c + d * Qf], [Qf, Pf], [0, Pf]] });
        polys.push({ col: '#e03131', pts: [[Q, a - b * Q], [Q, c + d * Q], [qs, ps]] });
      }
      $$('#ch').innerHTML = chart({
        base: [{ p0: 100, k: -1, col: '#4dabf7' }, { p0: 10, k: 0.5, col: '#ffa94d' }],
        lines: [{ p0: a, k: -b, col: '#1c7ed6', name: 'Cầu D' }, { p0: c, k: d, col: '#e8590c', name: 'Cung S' }],
        poly: polys, eq: fixed ? null : [qs, ps]
      });
      const dirP = ps > p0 ? '↑ tăng' : ps < p0 ? '↓ giảm' : '= không đổi', dirQ = qs > q0 ? '↑ tăng' : qs < q0 ? '↓ giảm' : '= không đổi';
      let txt = `<b>Cân bằng:</b> giá ${f1(ps)} (${dirP} so với 40) · lượng ${f1(qs)} (${dirQ} so với 60)<br>`;
      txt += fixed ? `<b>Sản lượng ép Q = ${f1(Q)}</b> → thặng dư NTD (xanh) và NSX (cam) nhỏ lại, phần đỏ là <b>tổn thất vô ích</b>. Lợi ích xã hội SB = ${f1(SB)} so với tối đa ${f1(SBmax)} → mất ${f1(SBmax - SB)}.`
        : `Thặng dư người tiêu dùng CS = ${f1(CSv)} · thặng dư nhà sản xuất PS = ${f1(0.5 * (ps - c) * qs)} · <b>Lợi ích xã hội SB = CS + PS = ${f1(SBmax)}</b> (đạt tối đa tại cân bằng).`;
      $$('#out').innerHTML = txt;
    }
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- 2. Ngoại tác & thuế ----
  WIDGETS['sd-tax'] = host => {
    host.innerHTML = `<div id="ch"></div>${sl('tt', 'Mức thuế trên mỗi đơn vị (t)', 0, 40, 0)}<div class="calc" id="out"></div>
      <p class="small">Giả định: chi phí ngoại tác (ô nhiễm, tiếng ồn…) là <b>20</b> trên mỗi đơn vị – cung tư nhân S chưa tính khoản này.</p>`;
    const $$ = s => host.querySelector(s);
    const a = 100, b = 1, c = 10, d = 0.5, ext = 20;
    function draw() {
      const t = +$$('#tt').value; $$('#ttv').textContent = t;
      const q = (a - c - t) / (b + d), p = a - b * q;
      const q0 = (a - c) / (b + d);
      const net = Q => (a - c) * Q - 0.5 * (b + d) * Q * Q - ext * Q;
      const qopt = (a - c - ext) / (b + d);
      $$('#ch').innerHTML = chart({
        base: [{ p0: c + ext, k: d, col: '#7048e8' }],
        lines: [{ p0: a, k: -b, col: '#1c7ed6', name: 'Cầu D' }, { p0: c, k: d, col: '#e8590c', name: 'Cung tư nhân' }, ...(t ? [{ p0: c + t, k: d, col: '#2f9e44', name: 'S + thuế' }] : [])],
        eq: [q, p]
      });
      $$('#out').innerHTML = `Sản lượng: <b>${f1(q)}</b> (không thuế: ${f1(q0)}; mức tối ưu cho xã hội: ${f1(qopt)})<br>Số thuế thu được: <b>${f1(t * q)}</b> · Phúc lợi ròng của xã hội (đã trừ chi phí ngoại tác): <b>${f1(net(q))}</b> (tối đa ${f1(net(qopt))})<br>` +
        (t === ext ? '✅ Thuế đúng bằng chi phí ngoại tác → “nội hóa” hoàn toàn, xã hội đạt phúc lợi cao nhất.' : t < ext ? 'Thuế còn thấp hơn chi phí ngoại tác → vẫn còn dùng quá mức.' : '⚠ Thuế vượt chi phí ngoại tác → giảm tiêu dùng quá mức, mất phúc lợi.');
    }
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- 3. Sản lượng tối đa hóa lợi nhuận: MC = MR ----
  WIDGETS['marginal'] = host => {
    host.innerHTML = `${sl('pr', 'Giá thị trường (nghìn đồng / tạ lúa)', 100, 300, 200, 10)}<div class="calc" id="out"></div>
      <p class="small">Dữ liệu ví dụ của bác nông dân: chi phí biên (MC) của tạ thứ 56 → 60 lần lượt là 140, 200, 220, 260, 320 (nghìn đồng).</p>`;
    const mc = [[56, 140], [57, 200], [58, 220], [59, 260], [60, 320]];
    const $$ = s => host.querySelector(s);
    function draw() {
      const p = +$$('#pr').value; $$('#prv').textContent = p;
      let best = 55, cum = 0, bestCum = 0, rows = '';
      mc.forEach(([n, m]) => {
        const mp = p - m; cum += mp;
        if (mp > 0) { best = n; bestCum = cum; }
        rows += `<tr><td>${n}</td><td>${m}</td><td>${p}</td><td style="color:${mp > 0 ? '#2f9e44' : mp < 0 ? '#e03131' : 'inherit'}"><b>${mp > 0 ? '+' : ''}${mp}</b></td></tr>`;
      });
      $$('#out').innerHTML = `<table class="tb"><thead><tr><th>Tạ thứ</th><th>MC</th><th>MR (= giá)</th><th>Lợi nhuận tăng thêm</th></tr></thead><tbody>${rows}</tbody></table>
        <p>Quy tắc: sản xuất thêm khi <b>MR &gt; MC</b>, dừng khi <b>MR ≤ MC</b>. Với giá ${p}, sản lượng tối ưu trong bảng là <b>${best} tạ</b> (lợi nhuận tăng thêm cộng dồn từ tạ 56: ${bestCum}).</p>`;
    }
    $$('#pr').oninput = draw; draw();
  };

  // ---- 4. Phần bù rủi ro / giá trị mạng sống (phi công) ----
  WIDGETS['risk-premium'] = host => {
    host.innerHTML = `${sl('hh', 'Giờ bay quy đổi mỗi tháng', 50, 300, 227)}${sl('inc', 'Thu nhập của phi công (triệu đồng/tháng)', 20, 80, 40)}${sl('safe', 'Thu nhập nếu làm việc an toàn tương đương (triệu đồng/tháng)', 10, 60, 20)}<div class="calc" id="out"></div>
      <p class="small">Dữ liệu thống kê: trung bình 1 máy bay mất sau mỗi 1.566.000 “giờ quy đổi” (mỗi chuyến cộng thêm 3,7 giờ bay để bù rủi ro cất/hạ cánh).</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const h = +$$('#hh').value, inc = +$$('#inc').value, safe = +$$('#safe').value;
      ['hh', 'inc', 'safe'].forEach(k => $$('#' + k + 'v').textContent = $$('#' + k).value);
      const prob = h / 1566000, prem = inc - safe;
      if (prem <= 0) { $$('#out').textContent = 'Thu nhập phi công phải cao hơn thu nhập công việc an toàn để có phần bù rủi ro.'; return; }
      const v = prem / prob; // triệu đồng
      $$('#out').innerHTML = `Xác suất tử nạn trong tháng = ${h}/1.566.000 = <b>${(prob * 100).toFixed(4)}%</b><br>Phần bù rủi ro = ${inc} − ${safe} = <b>${prem} triệu đồng/tháng</b><br>Giá trị phi công đặt cho mạng sống = ${prem} ÷ ${(prob * 100).toFixed(4)}% ≈ <b>${f0(v)} triệu đồng</b> ≈ <b>${(v / 15700).toFixed(1)} triệu USD</b> (tỷ giá ~15.700 đ/USD)<br><span class="small">So sánh: Hàn Quốc ~0,8 triệu USD · Tây Âu ~4 · Mỹ ~7 · Nhật ~10 triệu USD.</span>`;
    }
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- 5. Xe “lemon”: lựa chọn đối nghịch ----
  WIDGETS['lemons'] = host => {
    host.innerHTML = `${sl('gg', 'Tỷ lệ xe chất lượng tốt trên thị trường (%)', 0, 100, 50, 5)}<div class="calc" id="out"></div>
      <p class="small">Xe tốt: giá vốn 700 USD, người mua sẵn lòng trả 800. Xe kém (“lemon”): giá vốn 300, người mua sẵn lòng trả 400 nếu biết chất lượng.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const g = +$$('#gg').value / 100; $$('#ggv').textContent = Math.round(g * 100);
      const avg = g * 800 + (1 - g) * 400;
      const goodStay = avg >= 700;
      $$('#out').innerHTML = `Người mua không phân biệt được → chỉ chịu trả giá trung bình kỳ vọng = ${(g * 100).toFixed(0)}%·800 + ${((1 - g) * 100).toFixed(0)}%·400 = <b>${f0(avg)} USD</b>.<br>` +
        (goodStay ? '✅ Giá này ≥ giá vốn xe tốt (700) → người bán xe tốt vẫn còn lãi, thị trường tồn tại cả hai loại.'
          : `❌ Giá ${f0(avg)} &lt; giá vốn xe tốt (700) → người bán xe tốt <b>rút khỏi thị trường</b> → tỷ lệ xe tốt giảm → giá lại giảm… cuối cùng chỉ còn xe kém. Đây là <b>lựa chọn đối nghịch</b>. (Cần ít nhất 75% xe tốt để thị trường “tự cứu”.)`);
    }
    $$('#gg').oninput = draw; draw();
  };

  // ---- 6. Gánh nặng thuế (tax incidence) ----
  WIDGETS['tax-incidence'] = host => {
    host.innerHTML = `${sl('tx', 'Số thuế tăng thêm trên mỗi đơn vị hàng (USD)', 1000, 10000, 6000, 500)}${sl('ed', 'Độ nhạy của cầu với giá |Ed| (0 = hoàn toàn không nhạy)', 0, 40, 10)}${sl('es', 'Độ nhạy của cung với giá Es (0 = không nhạy)', 0, 40, 10)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const T = +$$('#tx').value, ed = +$$('#ed').value / 10, es = +$$('#es').value / 10;
      ['tx', 'ed', 'es'].forEach(k => $$('#' + k + 'v').textContent = k === 'tx' ? f0(T) : (+$$('#' + k).value / 10).toFixed(1));
      if (ed + es === 0) { $$('#out').textContent = 'Cần ít nhất một bên nhạy với giá.'; return; }
      const cons = es / (ed + es), prod = ed / (ed + es);
      $$('#out').innerHTML = `Người tiêu dùng chịu <b>${(cons * 100).toFixed(0)}%</b> = ${f0(T * cons)} USD/đơn vị · Nhà sản xuất chịu <b>${(prod * 100).toFixed(0)}%</b> = ${f0(T * prod)} USD/đơn vị.<br>
        <div style="display:flex;height:22px;border-radius:6px;overflow:hidden;margin:8px 0"><div style="width:${cons * 100}%;background:#4dabf7"></div><div style="width:${prod * 100}%;background:#ffa94d"></div></div>
        <span class="small">Cầu càng ít nhạy (như quan tài: |Ed|≈0) thì người mua gánh gần hết. Cầu nhạy hơn cung thì nhà sản xuất gánh nhiều hơn. Trong ví dụ ô tô: người mua trả thêm 3.000, hãng giảm lợi nhuận 3.000, ngân sách thu 6.000.</span>`;
    }
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- 7. Giá chuyển giao nội bộ ----
  WIDGETS['transfer-price'] = host => {
    host.innerHTML = `${sl('ta', 'Thuế thu nhập DN ở nước bán hàng (Đài Loan) %', 0, 50, 20)}${sl('tb', 'Thuế thu nhập DN ở nước mua hàng (Malaysia) %', 0, 50, 40)}${sl('ov', 'Số tiền định giá cao hơn giá thật (USD)', 0, 200000, 100000, 10000)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const ta = +$$('#ta').value, tb = +$$('#tb').value, ov = +$$('#ov').value;
      ['ta', 'tb'].forEach(k => $$('#' + k + 'v').textContent = $$('#' + k).value + '%'); $$('#ovv').textContent = f0(ov);
      const dA = ov * ta / 100, dB = -ov * tb / 100, net = dB + dA;
      $$('#out').innerHTML = `Công ty con ở nước A khai lãi thêm ${f0(ov)} → nộp thêm <b>${f0(dA)}</b> thuế.<br>Công ty con ở nước B khai lãi bớt ${f0(ov)} → nộp bớt <b>${f0(-dB)}</b> thuế.<br>
        Toàn tập đoàn: <b style="color:${net < 0 ? '#2f9e44' : '#e03131'}">${net < 0 ? 'tiết kiệm ' + f0(-net) : 'phải nộp thêm ' + f0(net)} USD</b>. ${tb > ta ? 'Chuyển lợi nhuận về nước thuế thấp hơn là có lợi.' : tb < ta ? 'Đảo chiều: nên định giá thấp (hoặc chuyển lợi nhuận sang nước B).' : 'Thuế hai nước bằng nhau → không có lợi ích thuế.'}`;
    }
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };
  // ---- Phần 2: lãi suất thực ----
  WIDGETS['real-rate'] = host => {
    host.innerHTML = `${sl('ni', 'Lãi suất danh nghĩa i (%/năm)', 0, 30, 10)}${sl('pi', 'Lạm phát p (%/năm)', -5, 30, 0)}<div class="calc" id="out"></div><p class="small">Vay 50.000 đ, 1 chén trà = 1.000 đ ban đầu. Công thức gần đúng: r = i − p.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const i = +$$('#ni').value, p = +$$('#pi').value;
      $$('#niv').textContent = i; $$('#piv').textContent = p;
      const r = i - p, tea = 1000 * (1 + p / 100), back = 50000 * (1 + i / 100);
      $$('#out').innerHTML = `Lãi suất thực r = ${i} − ${p} = <b style="color:${r > 0 ? '#2f9e44' : '#e03131'}">${r}%</b><br>Vay = ${f1(50000 / 1000)} chén trà; sau 1 năm trả ${f0(back)} đ = <b>${f1(back / tea)} chén trà</b> (giá trà mới ${f0(tea)} đ).<br>` + (r > 0 ? 'Người cho vay có lời thực.' : r === 0 ? 'Chi phí vay thực bằng 0.' : 'Lãi thực âm: người vay được lợi, người cho vay thiệt.');
    }
    host.querySelectorAll('input').forEach(x => x.oninput = draw); draw();
  };

  // ---- Tỷ giá thực ----
  WIDGETS['real-fx'] = host => {
    host.innerHTML = `${sl('nx', 'Tỷ giá danh nghĩa (đồng/USD)', 14000, 18000, 15400, 100)}${sl('pv', 'Lạm phát ở Việt Nam (%)', 0, 20, 5)}${sl('pw', 'Lạm phát ở nước đối tác (%)', 0, 20, 2)}<div class="calc" id="out"></div><p class="small">Gốc: tỷ giá 15.400, hai bên cùng mức giá = 100. Tỷ giá thực = tỷ giá danh nghĩa × (giá nước ngoài ÷ giá trong nước).</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const e = +$$('#nx').value, a = +$$('#pv').value, b = +$$('#pw').value;
      $$('#nxv').textContent = f0(e); $$('#pvv').textContent = a; $$('#pwv').textContent = b;
      const q = (e / 15400) * (100 * (1 + b / 100)) / (100 * (1 + a / 100)) * 100;
      $$('#out').innerHTML = `Chỉ số tỷ giá thực = <b>${f1(q)}</b> (gốc = 100)<br>` + (q < 98 ? '📉 Đồng <b>lên giá thực</b>: xuất khẩu Việt Nam kém cạnh tranh, hàng nhập hấp dẫn hơn.' : q > 102 ? '📈 Đồng <b>giảm giá thực</b>: xuất khẩu cạnh tranh hơn, hàng nhập đắt hơn.' : 'Sức cạnh tranh gần như không đổi.');
    }
    host.querySelectorAll('input').forEach(x => x.oninput = draw); draw();
  };

  // ---- Quy tắc 72 ----
  WIDGETS['rule72'] = host => {
    host.innerHTML = `${sl('gr', 'Tốc độ tăng trưởng / lãi suất (%/năm)', 1, 20, 5.5, 0.5)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const g = +$$('#gr').value; $$('#grv').textContent = g;
      const ap = 72 / g, ex = Math.log(2) / Math.log(1 + g / 100);
      $$('#out').innerHTML = `Quy tắc 72: 72 ÷ ${g} = <b>${f1(ap)} năm</b> để gấp đôi.<br>Tính chính xác: <b>${f1(ex)} năm</b>.<br><span class="small">Việt Nam: GDP 7% − dân số 1,5% = 5,5% thu nhập/người → ~13 năm gấp đôi (470 → 940 USD).</span>`;
    }
    $$('#gr').oninput = draw; draw();
  };
})();
