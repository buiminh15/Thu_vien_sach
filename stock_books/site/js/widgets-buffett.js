// Widget cho sách "Phong cách đầu tư Warren Buffett"
(function () {
  const f0 = x => Math.round(x).toLocaleString('vi-VN');
  const f1 = x => (Math.round(x * 10) / 10).toLocaleString('vi-VN');
  const sl = (id, label, min, max, val, step) =>
    `<label style="display:block;margin:8px 0 2px;font-size:.9rem">${label}: <b id="${id}v">${val}</b></label><input id="${id}" type="range" min="${min}" max="${max}" step="${step || 1}" value="${val}" style="width:100%">`;
  const bind = (host, draw) => { host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw(); };

  // ---- Lãi kép ----
  WIDGETS['compound'] = host => {
    host.innerHTML = `${sl('v0', 'Vốn ban đầu (đô la)', 100, 100000, 100, 100)}${sl('rt', 'Lãi kép hằng năm (%)', 1, 40, 29.5, 0.5)}${sl('yr', 'Số năm', 1, 50, 30)}<div class="calc" id="out"></div><p class="small">Buffett: 100 đô la năm 1956; công ty hợp danh lãi kép 29,5%/năm; Berkshire 22,2%/năm.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const v = +$$('#v0').value, r = +$$('#rt').value, y = +$$('#yr').value;
      $$('#v0v').textContent = f0(v); $$('#rtv').textContent = r; $$('#yrv').textContent = y;
      const end = v * Math.pow(1 + r / 100, y), avg = v * Math.pow(1.104, y);
      $$('#out').innerHTML = `Sau ${y} năm: <b>${f0(end)}</b> đô la (gấp ${f1(end / v)} lần).<br>Cùng vốn nếu chỉ ăn theo S&P 500 (10,4%/năm): <b>${f0(avg)}</b> đô la.<br><span class="small">Chênh lệch nhỏ mỗi năm, nhân lên thành khác biệt rất lớn theo thời gian.</span>`;
    }
    bind(host, draw);
  };

  // ---- Biên độ an toàn ----
  WIDGETS['margin-safety'] = host => {
    host.innerHTML = `${sl('iv', 'Giá trị nội tại ước tính (đô la/cổ phiếu)', 20, 200, 100, 5)}${sl('mp', 'Giá thị trường (đô la/cổ phiếu)', 10, 200, 60, 5)}${sl('er', 'Sai số ước lượng giá trị (%)', 0, 50, 20, 5)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const iv = +$$('#iv').value, mp = +$$('#mp').value, er = +$$('#er').value;
      $$('#ivv').textContent = iv; $$('#mpv').textContent = mp; $$('#erv').textContent = er;
      const ms = (iv - mp) / iv * 100, worst = iv * (1 - er / 100);
      $$('#out').innerHTML = `Biên độ an toàn = (${iv} − ${mp}) / ${iv} = <b style="color:${ms >= 25 ? '#2f9e44' : ms > 0 ? '#f08c00' : '#e03131'}">${f1(ms)}%</b><br>Nếu bạn đánh giá giá trị quá cao tới ${er}%, giá trị thật chỉ ${f0(worst)} đô la → ` +
        (mp <= worst ? '✅ vẫn mua được dưới giá trị thật: đệm đủ bảo vệ.' : '❌ giá mua cao hơn giá trị thật nếu bạn sai: <b>không đủ biên độ an toàn</b>.') +
        `<br><span class="small">Graham/Buffett: mua khi giá thấp hơn giá trị nội tại đáng kể (ví dụ dưới 75%, hoặc 2/3 tài sản ròng).</span>`;
    }
    bind(host, draw);
  };

  // ---- Chiết khấu dòng tiền đơn giản (Gordon) ----
  WIDGETS['dcf'] = host => {
    host.innerHTML = `${sl('e0', 'Lợi nhuận chủ sở hữu năm nay (triệu đô la)', 10, 1000, 30.8, 0.2)}${sl('dr', 'Tỷ lệ chiết khấu (%)', 5, 20, 10, 0.5)}${sl('g', 'Tăng trưởng vĩnh viễn (%)', 0, 8, 3, 0.5)}<div class="calc" id="out"></div><p class="small">Giá trị = E ÷ (r − g). Ví dụ Larson-Juhl: 30,8 ÷ (10% − 3%) = 440 triệu đô la.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const e = +$$('#e0').value, r = +$$('#dr').value, g = +$$('#g').value;
      $$('#e0v').textContent = e; $$('#drv').textContent = r; $$('#gv').textContent = g;
      if (r <= g) { $$('#out').textContent = 'Tỷ lệ chiết khấu phải lớn hơn tăng trưởng.'; return; }
      $$('#out').innerHTML = `Giá trị nội tại ≈ ${e} ÷ (${r}% − ${g}%) = <b>${f0(e / ((r - g) / 100))}</b> triệu đô la.<br><span class="small">Thận trọng: chỉ định giá doanh nghiệp bạn dự đoán được. Cộng biên độ an toàn thay cho phần bù rủi ro.</span>`;
    }
    bind(host, draw);
  };

  // ---- Chiết khấu hai bước (Coca-Cola 1988) ----
  WIDGETS['dcf-two'] = host => {
    host.innerHTML = `${sl('oe', 'Lợi nhuận chủ sở hữu ban đầu (triệu đô la)', 100, 2000, 828, 10)}${sl('g1', 'Tăng trưởng giai đoạn 1 – 10 năm (%)', 0, 25, 15, 1)}${sl('g2', 'Tăng trưởng giai đoạn 2 – mãi mãi (%)', 0, 8, 5, 1)}${sl('rr', 'Tỷ lệ chiết khấu (%)', 6, 15, 9, 0.5)}<div class="calc" id="out"></div><p class="small">Coca-Cola 1988: 828 triệu; chiết khấu 9% (trái phiếu 30 năm); thị giá Buffett mua khoảng 14.800–15.100 triệu.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const oe = +$$('#oe').value, g1 = +$$('#g1').value / 100, g2 = +$$('#g2').value / 100, r = +$$('#rr').value / 100;
      ['oe', 'g1', 'g2', 'rr'].forEach(k => $$('#' + k + 'v').textContent = $$('#' + k).value);
      if (r <= g2) { $$('#out').textContent = 'Tỷ lệ chiết khấu phải lớn hơn tăng trưởng giai đoạn 2.'; return; }
      let pv = 0, cf = oe;
      for (let t = 1; t <= 10; t++) { cf *= (1 + g1); pv += cf / Math.pow(1 + r, t); }
      const tv = cf * (1 + g2) / (r - g2), pvtv = tv / Math.pow(1 + r, 10), total = pv + pvtv;
      const ms = (total - 15000) / total * 100;
      $$('#out').innerHTML = `Lợi nhuận năm 10: <b>${f0(cf)}</b> triệu · Hiện giá 10 năm đầu: ${f0(pv)} · Giá trị còn lại (hiện tại): ${f0(pvtv)}<br>Giá trị nội tại ≈ <b>${f0(total)}</b> triệu đô la (~${f1(total / 1000)} tỷ).<br>So với giá thị trường ~15.000 triệu → biên độ an toàn <b style="color:${ms > 0 ? '#2f9e44' : '#e03131'}">${f1(ms)}%</b>.`;
    }
    bind(host, draw);
  };

  // ---- Float bảo hiểm ----
  WIDGETS['insurance-float'] = host => {
    host.innerHTML = `${sl('pm', 'Phí bảo hiểm thu trong năm (triệu đô la)', 100, 5000, 1000, 50)}${sl('lr', 'Tỷ lệ bồi thường (% phí)', 50, 130, 85, 1)}${sl('er', 'Chi phí hoạt động (% phí)', 5, 30, 15, 1)}${sl('fl', 'Float được đầu tư (triệu đô la)', 100, 20000, 3000, 100)}${sl('rt', 'Lợi suất đầu tư (%/năm)', 0, 15, 6, 0.5)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const p = +$$('#pm').value, l = +$$('#lr').value, e = +$$('#er').value, fl = +$$('#fl').value, r = +$$('#rt').value;
      ['pm', 'lr', 'er', 'fl', 'rt'].forEach(k => $$('#' + k + 'v').textContent = $$('#' + k).value);
      const cr = l + e, uw = p * (1 - cr / 100), inv = fl * r / 100, cost = cr - 100;
      $$('#out').innerHTML = `Tỷ lệ kết hợp = ${l}% + ${e}% = <b>${cr}%</b> → ${uw >= 0 ? `<b style="color:#2f9e44">lợi nhuận bảo hiểm ${f0(uw)} triệu</b> (chi phí float âm ${f1(-cost)}%: được trả tiền để giữ vốn)` : `<b style="color:#e03131">lỗ bảo hiểm ${f0(-uw)} triệu</b> (chi phí float ${f1(cost)}%)`}.<br>Thu nhập đầu tư từ float: ${f0(inv)} triệu.<br>Tổng lợi nhuận: <b>${f0(uw + inv)}</b> triệu đô la.<br><span class="small">Kỷ luật Buffett: chỉ nhận hợp đồng ở mức giá chấp nhận được; General Re định giá thấp → tỷ lệ kết hợp vượt 100%.</span>`;
    }
    bind(host, draw);
  };

  // ---- Bảng kiểm 12 nguyên lý ----
  WIDGETS['buffett-checklist'] = host => {
    const Q = [
      ['Kinh doanh', 'Mô hình kinh doanh đơn giản, dễ hiểu (trong vòng tròn khả năng)?'],
      ['Kinh doanh', 'Lịch sử hoạt động ổn định?'],
      ['Kinh doanh', 'Triển vọng dài hạn / có “quyền kinh doanh”?'],
      ['Quản lý', 'Quản lý hợp lý, phân bổ vốn tốt?'],
      ['Quản lý', 'Ban quản lý trung thực, công bằng với cổ đông?'],
      ['Quản lý', 'Chống được tính cưỡng chế tổ chức?'],
      ['Tài chính', 'ROE cao, ít nợ?'],
      ['Tài chính', 'Lợi nhuận chủ sở hữu tăng ổn định?'],
      ['Tài chính', 'Lợi nhuận biên cao?'],
      ['Tài chính', 'Mỗi đô la giữ lại → ≥ 1 đô la giá trị thị trường?'],
      ['Giá trị', 'Bạn ước tính được giá trị doanh nghiệp (dòng tiền dự đoán được)?'],
      ['Giá trị', 'Giá thấp hơn đáng kể giá trị (biên độ an toàn)?']
    ];
    host.innerHTML = Q.map((q, i) => `<label style="display:block;margin:6px 0"><input type="checkbox" data-i="${i}"> <span class="small"><b>${q[0]}</b> – ${q[1]}</span></label>`).join('') + '<div class="calc" id="out"></div>';
    const $$ = s => host.querySelector(s);
    function draw() {
      const n = host.querySelectorAll('input:checked').length;
      const last2 = host.querySelectorAll('input')[10].checked && host.querySelectorAll('input')[11].checked;
      $$('#out').innerHTML = `Điểm: <b>${n}/12</b> · ` + (n === 12 ? '🏆 Công ty “đẹp như mơ” — vẫn phải kiên nhẫn đợi giá.' : n >= 9 && last2 ? '👍 Ứng viên đáng xem xét kỹ.' : n >= 9 ? '⏳ Công ty tốt nhưng chưa đủ giá trị/chiết khấu: đợi.' : '🚫 Bỏ qua: chưa đạt nhiều nguyên lý, hoặc nằm ngoài vòng tròn khả năng.');
    }
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
  };

  // ---- Giữ lại hay trả lại ----
  WIDGETS['retain-or-return'] = host => {
    host.innerHTML = `${sl('ro', 'Lợi nhuận trên vốn nếu tái đầu tư (%)', 0, 40, 18, 1)}${sl('cc', 'Chi phí vốn / lợi suất cổ đông kiếm được ở nơi khác (%)', 4, 20, 10, 1)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const ro = +$$('#ro').value, cc = +$$('#cc').value;
      $$('#rov').textContent = ro; $$('#ccv').textContent = cc;
      $$('#out').innerHTML = ro > cc
        ? `✅ ${ro}% &gt; ${cc}%: <b>giữ lại và tái đầu tư</b> — mỗi đô la giữ lại tạo hơn 1 đô la giá trị (như Berkshire không trả cổ tức).`
        : ro === cc ? '⚖️ Hòa: giữ lại hay trả đều không tạo khác biệt.'
          : `❌ ${ro}% &lt; ${cc}%: giữ lại <b>hủy giá trị</b>. Chọn: (1) <b>trả cổ tức</b>; (2) <b>mua lại cổ phiếu</b> nếu giá thấp hơn giá trị thực; tránh “mua sự tăng trưởng” ở giá cao.`;
    }
    bind(host, draw);
  };

  // ---- Lợi nhuận chủ sở hữu ----
  WIDGETS['owner-earnings'] = host => {
    host.innerHTML = `${sl('ni', 'Thu nhập ròng (triệu đô la)', 50, 1000, 400, 10)}${sl('dp', 'Khấu hao (triệu đô la)', 0, 500, 150, 10)}${sl('cx', 'Chi phí vốn cần để duy trì (triệu đô la)', 0, 600, 140, 10)}${sl('wc', 'Vốn lưu động bổ sung (triệu đô la)', 0, 200, 20, 5)}<div class="calc" id="out"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const ni = +$$('#ni').value, dp = +$$('#dp').value, cx = +$$('#cx').value, wc = +$$('#wc').value;
      ['ni', 'dp', 'cx', 'wc'].forEach(k => $$('#' + k + 'v').textContent = $$('#' + k).value);
      const cf = ni + dp, oe = cf - cx - wc;
      $$('#out').innerHTML = `“Dòng tiền” thường = ${ni} + ${dp} = <b>${f0(cf)}</b><br>Lợi nhuận chủ sở hữu = ${f0(cf)} − ${cx} − ${wc} = <b style="color:${oe < ni ? '#e03131' : '#2f9e44'}">${f0(oe)}</b> triệu đô la<br><span class="small">Dòng tiền bỏ qua chi phí vốn nên thổi phồng giá trị; Buffett: ~95% doanh nghiệp Mỹ cần chi phí vốn ≈ khấu hao.</span>`;
    }
    bind(host, draw);
  };

  // ---- Hoãn thuế ----
  WIDGETS['tax-deferral'] = host => {
    host.innerHTML = `${sl('ty', 'Số năm', 1, 30, 20)}${sl('tx', 'Thuế lãi vốn (%)', 0, 50, 34)}<div class="calc" id="out"></div><p class="small">1 đô la nhân đôi mỗi năm (lợi suất 100%).</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const n = +$$('#ty').value, t = +$$('#tx').value / 100;
      $$('#tyv').textContent = n; $$('#txv').textContent = Math.round(t * 100);
      const sellEvery = Math.pow(1 + (1 - t), n), hold = Math.pow(2, n), holdNet = hold - (hold - 1) * t;
      $$('#out').innerHTML = `Bán và nộp thuế mỗi năm: <b>${f0(sellEvery)}</b> đô la<br>Giữ ${n} năm rồi bán: <b>${f0(holdNet)}</b> đô la (thuế ${f0((hold - 1) * t)})<br>Hoãn thuế cho bạn nhiều hơn <b>${f1(holdNet / sellEvery)}</b> lần: “khoản vay không lãi từ kho bạc”.`;
    }
    bind(host, draw);
  };

  // ---- Ác cảm thua lỗ ----
  WIDGETS['loss-aversion'] = host => {
    host.innerHTML = `${sl('ls', 'Số tiền có thể mất (đô la)', 10, 1000, 100, 10)}${sl('mu', 'Mức “đau” khi mất so với “vui” khi được (lần)', 1, 3, 2, 0.1)}${sl('wn', 'Số tiền có thể thắng (đô la)', 10, 3000, 150, 10)}<div class="calc" id="out"></div><p class="small">Đặt cược tung đồng xu 50/50. Thaler: người ta cần được ~gấp đôi để chấp nhận rủi ro bằng với khoản mất.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const l = +$$('#ls').value, m = +$$('#mu').value, w = +$$('#wn').value;
      $$('#lsv').textContent = l; $$('#muv').textContent = m; $$('#wnv').textContent = w;
      const ev = 0.5 * w - 0.5 * l, felt = 0.5 * w - 0.5 * l * m;
      $$('#out').innerHTML = `Kỳ vọng tiền: <b>${f0(ev)}</b> đô la (${ev > 0 ? 'có lợi' : 'không lợi'}).<br>Kỳ vọng “cảm giác” (mất đau ×${m}): <b style="color:${felt > 0 ? '#2f9e44' : '#e03131'}">${f0(felt)}</b> → ` + (felt > 0 ? 'bạn sẽ đồng ý cược.' : `bạn từ chối dù cược có lợi về tiền. Cần thắng ≥ ${f0(l * m)} đô la mới thấy đáng.`);
    }
    bind(host, draw);
  };

  // ---- Ngài Thị Trường ----
  WIDGETS['mr-market'] = host => {
    host.innerHTML = `${sl('pv', 'Giá Ngài Thị Trường báo (% so với giá trị nội tại)', 30, 180, 100, 5)}<div class="calc" id="out"></div><p class="small">Giả sử bạn ước tính giá trị nội tại của doanh nghiệp là 100.</p>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const p = +$$('#pv').value; $$('#pvv').textContent = p;
      let mood, act;
      if (p <= 50) { mood = '😱 Ngài đang hoảng loạn'; act = '<b>Mua mạnh</b> nếu chắc về giá trị (đặt cược lớn) — tham lam khi người khác sợ hãi.'; }
      else if (p <= 75) { mood = '😟 Ngài bi quan'; act = '<b>Có biên độ an toàn tốt</b>: cân nhắc mua dần.'; }
      else if (p < 110) { mood = '😐 Ngài bình thường'; act = 'Giá gần giá trị: <b>không cần làm gì</b>, tiếp tục nắm giữ.'; }
      else if (p < 150) { mood = '😄 Ngài lạc quan'; act = 'Giá cao hơn giá trị: <b>không mua thêm</b>; xem xét bán nếu có cơ hội tốt hơn rõ ràng.'; }
      else { mood = '🤩 Ngài cuồng nhiệt'; act = 'Giá quá cao: <b>cân nhắc bán</b> — sợ hãi khi người khác tham lam.'; }
      $$('#out').innerHTML = `${mood} — báo giá ${p} (giá trị 100)<br>${act}<br><span class="small">Bạn không bắt buộc phải giao dịch: thị trường phục vụ bạn, không hướng dẫn bạn.</span>`;
    }
    bind(host, draw);
  };
})();
