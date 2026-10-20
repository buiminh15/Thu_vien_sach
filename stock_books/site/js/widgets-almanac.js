// Widget cho sách "Stock Trader's Almanac"
(function () {
  const f1 = x => (Math.round(x * 10) / 10).toLocaleString('vi-VN');
  const f0 = x => Math.round(x).toLocaleString('vi-VN');
  const btn = (id, label) => `<button class="btn" data-k="${id}" style="margin:3px">${label}</button>`;

  // ---- Phong vũ biểu tháng 1 ----
  WIDGETS['jan-barometer'] = host => {
    host.innerHTML = `<label>5 ngày đầu S&P: <select id="a"><option value="1">Tăng</option><option value="0">Giảm</option></select></label>
      <label style="margin-left:10px">Tháng 1: <select id="b"><option value="1">Tăng</option><option value="0">Giảm</option></select></label>
      <label style="margin-left:10px">Thủng đáy tháng 12 ở Q1? <select id="c"><option value="0">Không</option><option value="1">Có</option></select></label>
      <div class="calc" id="out" style="margin-top:8px"></div>`;
    const $$ = s => host.querySelector(s);
    function draw() {
      const a = +$$('#a').value, b = +$$('#b').value, c = +$$('#c').value;
      let p = 50, note = [];
      if (a) { p = 85; note.push('5 ngày đầu tăng: 85,3% cả năm tăng.'); } else note.push('5 ngày đầu giảm: chỉ 50/50.');
      if (b) { p = Math.max(p, 90.7); note.push('Tháng 1 tăng: Phong vũ biểu ~90,7% chính xác.'); }
      else { p = Math.min(p, 40); note.push('Tháng 1 giảm: bear market thường bắt đầu/tiếp diễn.'); }
      if (c) { p -= 15; note.push('Thủng đáy tháng 12 ở Q1: Dow giảm thêm ~10,7% trung bình.'); }
      p = Math.max(5, Math.min(95, p));
      const col = p >= 70 ? '#2f9e44' : p >= 45 ? '#f08c00' : '#e03131';
      $$('#out').innerHTML = `Xác suất cả năm tăng (minh họa): <b style="color:${col}">≈ ${f0(p)}%</b><ul style="margin:6px 0 0 18px">${note.map(n => `<li>${n}</li>`).join('')}</ul><span class="small">Chỉ là minh họa từ số liệu 1950–2004; sự kiện lớn (chiến tranh…) có thể làm sai tín hiệu.</span>`;
    }
    host.querySelectorAll('select').forEach(s => s.onchange = draw); draw();
  };

  // ---- 6 tháng tốt nhất ----
  WIDGETS['six-months'] = host => {
    const data = [
      ['Giữ cả năm (Dow 1950–2004, không cổ tức)', null, 'chỉ để so sánh – xem các dòng bên dưới'],
      ['Tháng 11→4 (Dow)', 482060, '+$482.060'],
      ['Tháng 5→10 (Dow)', -318, '−$318'],
      ['Tháng 11→4 + MACD', 1411142, '+$1.411.142'],
      ['Tháng 5→10 + MACD', -6598, '−$6.598'],
      ['NASDAQ 11→6 (1971–2004)', 310082, '+$310.082'],
      ['NASDAQ 11→6 + MACD', 632746, '+$632.746'],
      ['NASDAQ 7→10', -4066, '−$4.066'],
      ['NASDAQ 7→10 + MACD', -7198, '−$7.198']
    ].slice(1);
    host.innerHTML = '<div id="g"></div><p class="small">$10.000 ban đầu; kết quả lãi/lỗ cộng dồn. Số liệu từ Stock Trader’s Almanac 2005 (không tính phí giao dịch/thuế/lãi trái phiếu).</p>';
    const max = Math.max(...data.map(d => Math.abs(d[1])));
    host.querySelector('#g').innerHTML = data.map(d => {
      const w = Math.max(2, Math.sqrt(Math.abs(d[1]) / max) * 100);
      const col = d[1] >= 0 ? '#2f9e44' : '#e03131';
      return `<div style="margin:5px 0"><div style="font-size:.88rem">${d[0]}: <b>${d[2]}</b></div><div style="height:12px;background:${col};width:${w}%;border-radius:6px"></div></div>`;
    }).join('');
  };

  // ---- Rally / điều chỉnh theo mùa ----
  WIDGETS['season-chart'] = host => {
    const seasons = [
      ['❄ Đông', 13.5, 'Đáy 11/12 → đỉnh Q1'],
      ['🌱 Xuân', 11.3, 'Đáy 2/3 → đỉnh Q2'],
      ['🍂 Thu', 10.9, 'Đáy 8/9 → đỉnh Q4'],
      ['☀ Hạ', 9.4, 'Đáy 5/6 → đỉnh Q3']
    ];
    host.innerHTML = '<div id="bs"></div><div class="calc" id="out" style="margin-top:8px">Bấm một mùa.</div>';
    const bs = host.querySelector('#bs');
    bs.innerHTML = seasons.map((s, i) => btn(i, s[0])).join('');
    bs.querySelectorAll('button').forEach(b => b.onclick = () => {
      const s = seasons[+b.dataset.k];
      host.querySelector('#out').innerHTML = `<b>${s[0]}</b>: ${s[2]}, rally trung bình <b>+${f1(s[1])}%</b><div style="height:14px;border-radius:7px;background:#4c6ef5;width:${s[1] / 13.5 * 100}%;margin-top:4px"></div><span class="small">Mỗi mùa còn có điều chỉnh, nhưng điều chỉnh trung bình nhỏ hơn rally → thị trường tăng dài hạn.</span>`;
    });
  };

  // ---- Chính trị ----
  WIDGETS['party-compare'] = host => {
    const sc = [
      ['Tổng thống Dân chủ', 9.1], ['Tổng thống Cộng hòa', 6.0], ['Quốc hội Cộng hòa', 10.0], ['Quốc hội Dân chủ', 7.8],
      ['CH nắm tất cả', 9.3], ['DC nắm tất cả', 8.4], ['TT CH + QH DC', 6.8], ['TT DC + QH CH', 11.5], ['TT CH + QH chia đôi', -1.2]
    ];
    host.innerHTML = '<select id="s">' + sc.map((s, i) => `<option value="${i}">${s[0]}</option>`).join('') + '</select><label style="margin-left:10px">Vốn (đô la): <input id="v" type="number" value="10000" style="width:90px"></label><div class="calc" id="out" style="margin-top:8px"></div>';
    const $$ = q => host.querySelector(q);
    function draw() {
      const s = sc[+$$('#s').value], v = +$$('#v').value || 0, g = s[1];
      const n = 10, end = v * Math.pow(1 + g / 100, n);
      $$('#out').innerHTML = `Dow TB năm: <b style="color:${g >= 0 ? '#2f9e44' : '#e03131'}">${g > 0 ? '+' : ''}${f1(g)}%</b>. $${f0(v)} sau 10 năm liên tục ở kịch bản này: <b>$${f0(end)}</b>.<br><span class="small">Minh họa số học; thực tế các kịch bản không kéo dài. Lưu ý gridlock/chia quyền thường “tốt” cho thị trường.</span>`;
    }
    $$('#s').onchange = draw; $$('#v').oninput = draw; draw();
  };

  // ---- Ngày trong tuần / ngày đầu tháng ----
  WIDGETS['dow-days'] = host => {
    const d = [['Thứ Hai (từ 1989)', 6459.87], ['Thứ Ba + Thứ Tư (suy ra)', 1818.12], ['Thứ Năm + Sáu', -748.65]];
    const first = [['Ngày đầu tháng (83 ngày)', 3559.06], ['Các ngày còn lại (1.635)', -847.32]];
    host.innerHTML = '<b>Điểm Dow</b><div id="a"></div><b style="display:block;margin-top:10px">Ngày đầu tháng vs còn lại (9/1997–7/2004)</b><div id="b"></div>';
    const bar = (rows, mx) => rows.map(r => `<div style="margin:5px 0"><div style="font-size:.88rem">${r[0]}: <b>${r[1] > 0 ? '+' : ''}${r[1].toLocaleString('vi-VN')}</b></div><div style="height:12px;border-radius:6px;background:${r[1] >= 0 ? '#2f9e44' : '#e03131'};width:${Math.max(2, Math.abs(r[1]) / mx * 100)}%"></div></div>`).join('');
    host.querySelector('#a').innerHTML = bar(d, 6459.87);
    host.querySelector('#b').innerHTML = bar(first, 3559.06) + '<p class="small">Bốn ngày Hai–Năm cộng lại +1.069,47; Thứ Năm + Thứ Sáu −748,65 → các ngày Hai–Tư gộp ≈ +1.818. Dữ liệu minh họa từ Almanac 2005.</p>';
  };

  // ---- Bảng kiểm ----
  WIDGETS['almanac-check'] = host => {
    const items = [
      'Đang trong 6 tháng 1/11–30/4', '5 ngày đầu năm S&P tăng', 'Tháng 1 S&P tăng', 'Không thủng đáy tháng 12 ở Q1',
      'Không phải năm sau bầu cử (hoặc là năm “5” thập niên)', 'MACD đang ở tín hiệu mua', 'Không có chiến tranh/cú sốc lớn đang diễn ra', 'Hôm nay thuộc 8 ngày siêu'
    ];
    host.innerHTML = items.map((t, i) => `<label style="display:block;margin:4px 0"><input type="checkbox" data-i="${i}"> ${t}</label>`).join('') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    function draw() {
      const n = host.querySelectorAll('input:checked').length;
      const msg = n >= 7 ? ['Rất đồng thuận (xác suất thuận lợi cao)', '#2f9e44'] : n >= 5 ? ['Nghiêng về thuận lợi', '#74b816'] : n >= 3 ? ['Lẫn lộn – cẩn trọng', '#f08c00'] : ['Nghiêng về phòng thủ', '#e03131'];
      host.querySelector('#out').innerHTML = `${n}/${items.length} tín hiệu thuận: <b style="color:${msg[1]}">${msg[0]}</b><br><span class="small">Chỉ là công cụ học tập, không phải khuyến nghị đầu tư.</span>`;
    }
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
  };
})();
