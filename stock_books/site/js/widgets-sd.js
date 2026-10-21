// Widget cho sách "System Design Interview Roadmap" (tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const f0 = x => Math.round(x).toLocaleString('vi-VN');
  const f1 = x => (Math.round(x * 10) / 10).toLocaleString('vi-VN');
  const bar = (label, v, max, col) => `<div style="margin:4px 0"><div style="font-size:.85rem">${label}</div><div style="height:12px;border-radius:6px;background:${col || '#4c6ef5'};width:${Math.max(1.5, Math.min(100, v / max * 100))}%"></div></div>`;
  const sl = (id, label, min, max, val, step) => `<label style="display:block;margin:6px 0 2px;font-size:.9rem">${label}: <b id="${id}v">${val}</b></label><input id="${id}" type="range" min="${min}" max="${max}" step="${step || 1}" value="${val}" style="width:100%">`;
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, extra) => `<button class="btn sm" ${a || ''} style="margin:3px;${extra || ''}">${t}</button>`;
  const human = s => s < 60 ? f1(s) + ' giây' : s < 3600 ? f1(s / 60) + ' phút' : s < 86400 ? f1(s / 3600) + ' giờ' : s < 86400 * 365 ? f1(s / 86400) + ' ngày' : f1(s / 86400 / 365) + ' năm';

  // ---- Base62 ----
  WIDGETS['sd-base62'] = host => {
    host.innerHTML = '<input id="n" type="number" value="125000000" style="width:100%;padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit"><div class="calc" id="out" style="margin-top:8px"></div>';
    const A = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', $ = $q(host);
    const draw = () => {
      let n = Math.max(0, Math.floor(+$('#n').value || 0)), c = n, s = '';
      if (c === 0) s = '0'; while (c > 0) { s = A[c % 62] + s; c = Math.floor(c / 62); }
      $('#out').innerHTML = `ID <b>${f0(n)}</b> → mã ngắn <b style="font-size:1.2rem">${s}</b> (${s.length} ký tự)<br><span class="small">https://sho.rt/${s} · 62⁷ ≈ 3,5 nghìn tỷ mã.</span>`;
    };
    $('#n').oninput = draw; draw();
  };

  // ---- Thang độ trễ ----
  WIDGETS['sd-latency'] = host => {
    const L = [['Truy cập L1 cache', 0.5], ['Truy cập RAM', 100], ['Đọc 1MB tuần tự từ RAM', 3000], ['Đọc ngẫu nhiên SSD', 150000], ['Vòng khứ hồi trong cùng trung tâm dữ liệu', 500000], ['Đọc 1MB tuần tự từ SSD', 1000000], ['Seek ổ cứng HDD', 10000000], ['Gói tin Mỹ → Châu Âu → Mỹ', 150000000]];
    host.innerHTML = '<label>Quy 1 nano-giây = <select id="u"><option value="1">1 giây</option><option value="60">1 phút</option></select></label><div id="out" style="margin-top:8px"></div><p class="small">Con số gần đúng theo bảng “latency numbers” kinh điển (Jeff Dean); phần cứng mới nhanh hơn nhưng tỷ lệ vẫn tương tự.</p>';
    const $ = $q(host);
    const draw = () => { const u = +$('#u').value; const max = L[L.length - 1][1]; $('#out').innerHTML = L.map(l => { const s = l[1] * u; return bar(`${l[0]} — ${l[1] >= 1e6 ? f1(l[1] / 1e6) + ' ms' : l[1] >= 1e3 ? f1(l[1] / 1e3) + ' µs' : l[1] + ' ns'} → như <b>${human(s)}</b>`, Math.log10(l[1] + 1), Math.log10(max + 1), '#4c6ef5'); }).join(''); };
    $('#u').onchange = draw; draw();
  };

  // ---- Little ----
  WIDGETS['sd-littles'] = host => {
    host.innerHTML = sl('th', 'Số luồng/kết nối xử lý đồng thời (L)', 1, 500, 50) + sl('w', 'Thời gian xử lý mỗi yêu cầu (W, ms)', 5, 2000, 100, 5) + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const L = +$('#th').value, W = +$('#w').value; $('#thv').textContent = L; $('#wv').textContent = W; const lam = L / (W / 1000); $('#out').innerHTML = `λ = L ÷ W = ${L} ÷ ${W / 1000}s = <b>${f0(lam)} req/giây</b> tối đa.<br><span class="small">Muốn gấp đôi thông lượng mà không thêm luồng → phải giảm W một nửa (hoặc thêm luồng).</span>`; };
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- Nines ----
  WIDGETS['sd-nines'] = host => {
    const L = [['99%', 0.99], ['99,9%', 0.999], ['99,95%', 0.9995], ['99,99%', 0.9999], ['99,999%', 0.99999]];
    host.innerHTML = '<table class="tbl" style="width:100%"><tr><th>Sẵn sàng</th><th>Ngừng/năm</th><th>Ngừng/tháng</th><th>Ngừng/ngày</th></tr>' + L.map(l => `<tr><td><b>${l[0]}</b></td><td>${human((1 - l[1]) * 365 * 86400)}</td><td>${human((1 - l[1]) * 30 * 86400)}</td><td>${human((1 - l[1]) * 86400)}</td></tr>`).join('') + '</table>';
  };

  // ---- NFR ghép nhóm ----
  WIDGETS['sd-nfr-pick'] = host => {
    const Q = [['Chịu gấp 10 lần lưu lượng ngày Black Friday', 'Mở rộng'], ['API trả lời dưới 200 ms', 'Hiệu năng'], ['Thanh toán đạt 99,99% uptime', 'Tin cậy'], ['Mã hóa dữ liệu thẻ, tuân thủ PCI-DSS', 'Bảo mật'], ['Triển khai tính năng mới trong 2 tuần', 'Bảo trì']];
    const O = ['Mở rộng', 'Hiệu năng', 'Tin cậy', 'Bảo mật', 'Bảo trì'];
    host.innerHTML = Q.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${esc(q[0])}</div><select data-i="${i}"><option value="">— chọn —</option>${O.map(o => `<option>${o}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === Q[+s.dataset.i][1] ? '✅' : '❌ Đáp án: ' + Q[+s.dataset.i][1]; });
  };

  // ---- Lũy thừa ----
  WIDGETS['sd-pow2'] = host => {
    host.innerHTML = '<table class="tbl" style="width:100%"><tr><th>Lũy thừa</th><th>Giá trị gần đúng</th><th>Đơn vị</th></tr>' + [['10³', 'nghìn', 'KB'], ['10⁶', 'triệu', 'MB'], ['10⁹', 'tỷ', 'GB'], ['10¹²', 'nghìn tỷ', 'TB'], ['10¹⁵', 'triệu tỷ', 'PB'], ['10¹⁸', 'tỷ tỷ', 'EB']].map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td><td><b>${r[2]}</b></td></tr>`).join('') + '</table><p class="small">Nhẩm: 1 ngày ≈ 10⁵ giây; 1 triệu request/ngày ≈ 12 QPS.</p>';
  };

  // ---- Estimator ----
  WIDGETS['sd-estimator'] = host => {
    host.innerHTML = sl('m', 'URL mới mỗi tháng (triệu)', 1, 1000, 100) + sl('rw', 'Tỷ lệ đọc : ghi (x : 1)', 1, 100, 10) + sl('b', 'Byte cho mỗi bản ghi', 50, 1000, 157, 1) + sl('pk', 'Hệ số đỉnh', 1, 10, 2) + sl('y', 'Số năm lưu trữ', 1, 10, 5) + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => {
      const m = +$('#m').value * 1e6, rw = +$('#rw').value, b = +$('#b').value, pk = +$('#pk').value, y = +$('#y').value;
      ['m', 'rw', 'b', 'pk', 'y'].forEach(k => $('#' + k + 'v').textContent = $('#' + k).value);
      const w = m / 30 / 86400, r = w * rw, tot = w + r, mon = m * b, yr = mon * 12 * y;
      const gb = x => x >= 1e12 ? f1(x / 1e12) + ' TB' : f1(x / 1e9) + ' GB';
      $('#out').innerHTML = `Ghi: <b>${f0(w)}</b> /s · Đọc: <b>${f0(r)}</b> /s · Tổng: <b>${f0(tot)}</b> QPS · Đỉnh: <b>${f0(tot * pk)}</b> QPS<br>Dung lượng: <b>${gb(mon)}</b>/tháng → <b>${gb(yr)}</b> sau ${y} năm<br><span class="small">${tot * pk < 5000 ? 'Một app server hiện đại gánh được.' : 'Cần nhiều server + load balancer.'} ${yr < 5e12 ? 'Một database chứa được.' : 'Cần cân nhắc sharding.'}</span>`;
    };
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- Bộ chọn tổng quát ----
  function chooser(host, cfg) {
    host.innerHTML = '<div class="small">Tích những điều đúng với bạn:</div>' + cfg.q.map((q, i) => `<label style="display:block;margin:4px 0"><input type="checkbox" data-i="${i}"> ${esc(q[0])}</label>`).join('') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const draw = () => {
      const sc = cfg.opts.map(() => 0); host.querySelectorAll('input:checked').forEach(c => { cfg.q[+c.dataset.i][1].forEach(k => sc[k]++); });
      const max = Math.max(...sc), best = sc.reduce((a, s, i) => s === max ? a.concat(i) : a, []);
      host.querySelector('#out').innerHTML = max === 0 ? 'Chưa chọn gì.' : cfg.opts.map((o, i) => `<div style="${best.includes(i) ? 'font-weight:700' : ''}">${best.includes(i) ? '👉 ' : ''}${esc(o)}: ${sc[i]} điểm</div>`).join('') + `<span class="small">${esc(cfg.note || '')}</span>`;
    };
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
  }
  WIDGETS['sd-scale-pick'] = h => chooser(h, { opts: ['Mở rộng dọc', 'Mở rộng ngang'], q: [['Mới bắt đầu, lưu lượng thấp', [0]], ['Ứng dụng nguyên khối khó chia nhỏ', [0]], ['Tính toán nặng, cần trễ cực thấp', [0]], ['Lưu lượng tăng mạnh, đột biến', [1]], ['Cần sẵn sàng cao, không được ngừng', [1]], ['Dịch vụ stateless, chia việc song song được', [1]], ['Cần phục vụ nhiều khu vực địa lý', [1]]], note: ' Thực tế thường lai: dọc trước, ngang sau.' });
  WIDGETS['sd-realtime'] = h => chooser(h, { opts: ['Long polling', 'SSE', 'WebSocket'], q: [['Cần hai chiều tức thời (chat, game)', [2]], ['Chỉ server đẩy tin xuống (feed, bảng giá)', [1]], ['Cập nhật hiếm, hệ thống cũ/proxy chặn WebSocket', [0]], ['Soạn thảo cộng tác nhiều người', [2]], ['Muốn trình duyệt tự kết nối lại, đơn giản', [1]], ['Thông báo thỉnh thoảng, không cần chiều ngược', [0, 1]]] });
  WIDGETS['sd-api-pick'] = h => chooser(h, { opts: ['REST', 'GraphQL', 'gRPC'], q: [['API công khai, nhiều đối tác, dễ tích hợp', [0]], ['App di động cần dữ liệu lồng nhau trong một lần gọi', [1]], ['Nhiều loại client cần các trường khác nhau', [1]], ['Giao tiếp microservices nội bộ, trễ thấp', [2]], ['Cần streaming hai chiều hiệu năng cao', [2]], ['Cần cache HTTP đơn giản, trình duyệt hỗ trợ trực tiếp', [0]]] });
  WIDGETS['sd-arch-pick'] = h => chooser(h, { opts: ['Monolith', 'Modular monolith', 'Microservices'], q: [['Startup/MVP, phải ra nhanh', [0, 1]], ['Nhóm nhỏ (dưới ~10 người)', [0, 1]], ['Miền nghiệp vụ đơn giản', [0]], ['Muốn chừa đường tách dịch vụ sau này', [1]], ['Nhiều nhóm làm độc lập, cần triển khai riêng', [2]], ['Một số phần cần scale khác hẳn nhau', [2]], ['Miền phức tạp, nhiều ranh giới rõ', [2, 1]], ['Cần giao dịch nhất quán mạnh', [0, 1]]] });
  WIDGETS['sd-db-pick'] = h => chooser(h, { opts: ['SQL (quan hệ)', 'Document', 'Key-value', 'Column-family', 'Graph'], q: [['Giao dịch tiền/tồn kho, cần ACID', [0]], ['JOIN và báo cáo phức tạp', [0]], ['Schema thay đổi nhanh, mỗi mục một kiểu', [1]], ['Tra theo khóa cực nhanh, cache/phiên đăng nhập', [2]], ['Hàng tỷ bản ghi chuỗi thời gian/IoT, ghi nhanh', [3]], ['Quan hệ chằng chịt: bạn bè, gợi ý, gian lận', [4]], ['Chấp nhận nhất quán cuối cùng', [1, 2, 3]]], note: ' Đừng ngại dùng nhiều loại (polyglot persistence).' });

  // ---- Load balancer ----
  WIDGETS['sd-lb'] = host => {
    host.innerHTML = '<div>Thuật toán: <select id="al"><option value="rr">Round Robin</option><option value="lc">Least Connections</option><option value="w">Weighted RR (5:3:2)</option><option value="ip">IP Hash</option><option value="r2">Random 2 choices</option></select> ' + btn('+1 yêu cầu', 'id="one"') + btn('+10', 'id="ten"') + btn('Reset', 'id="rs"') + '</div><div id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let cnt, conn, i, wq;
    const reset = () => { cnt = [0, 0, 0]; conn = [0, 0, 0]; i = 0; wq = [0, 0, 0, 0, 0, 1, 1, 1, 2, 2]; draw(); };
    const pick = () => {
      const a = $('#al').value; let s;
      if (a === 'rr') s = i++ % 3; else if (a === 'lc') s = conn.indexOf(Math.min(...conn)); else if (a === 'w') s = wq[i++ % wq.length];
      else if (a === 'ip') s = Math.floor(Math.random() * 4) % 3 === 0 ? 1 : (Math.floor(Math.random() * 3)); else { const x = Math.floor(Math.random() * 3), y = (x + 1 + Math.floor(Math.random() * 2)) % 3; s = conn[x] <= conn[y] ? x : y; }
      cnt[s]++; conn[s]++; if (Math.random() < .5) { const j = Math.floor(Math.random() * 3); conn[j] = Math.max(0, conn[j] - 1); }
    };
    const draw = () => { const tot = cnt.reduce((a, b) => a + b, 0) || 1; $('#out').innerHTML = cnt.map((c, k) => bar(`Server ${k + 1}: <b>${c}</b> yêu cầu (${f0(c / tot * 100)}%) · kết nối mở: ${conn[k]}`, c, Math.max(...cnt, 1), '#4c6ef5')).join('') + '<span class="small">IP Hash mô phỏng khách đến từ vài IP nên thường lệch (không cân tải, nhưng giữ phiên).</span>'; };
    $('#one').onclick = () => { pick(); draw(); }; $('#ten').onclick = () => { for (let k = 0; k < 10; k++) pick(); draw(); }; $('#rs').onclick = reset; $('#al').onchange = reset; reset();
  };

  // ---- TCP handshake ----
  WIDGETS['sd-handshake'] = host => {
    const S = [['Client → Server', 'SYN (seq = x)', '“Tôi muốn nói chuyện, số thứ tự bắt đầu là x.”'], ['Server → Client', 'SYN-ACK (seq = y, ack = x+1)', '“Tôi nghe rồi, tôi cũng bắt đầu từ y.”'], ['Client → Server', 'ACK (ack = y+1)', '“Tôi đã nghe. Bắt đầu gửi dữ liệu!”']];
    host.innerHTML = '<div id="out" class="calc">Bấm “Bước tiếp” để bắt đầu.</div><div style="margin-top:6px">' + btn('Bước tiếp ▶', 'id="nx"') + btn('Làm lại', 'id="rs"') + '</div>'; let k = 0;
    const $ = $q(host);
    $('#nx').onclick = () => { if (k < 3) { const s = S[k++]; $('#out').innerHTML = (k > 1 ? $('#out').dataset.h : '') + `<div>${k}. <b>${s[0]}</b>: <code>${s[1]}</code><br><span class="small">${s[2]}</span></div>`; $('#out').dataset.h = $('#out').innerHTML; if (k === 3) $('#out').innerHTML += '✅ Kết nối đã thiết lập.'; } };
    $('#rs').onclick = () => { k = 0; $('#out').dataset.h = ''; $('#out').textContent = 'Bấm “Bước tiếp” để bắt đầu.'; };
  };

  // ---- Serialization ----
  WIDGETS['sd-serialize'] = host => {
    host.innerHTML = sl('rps', 'Yêu cầu mỗi giây (nghìn)', 1, 10000, 1000, 1) + sl('jb', 'Kích thước JSON mỗi tin (byte)', 200, 3000, 1500, 50) + sl('ratio', 'Nhị phân nhỏ hơn JSON (lần)', 2, 10, 5) + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const r = +$('#rps').value * 1000, j = +$('#jb').value, k = +$('#ratio').value; ['rps', 'jb', 'ratio'].forEach(x => $('#' + x + 'v').textContent = $('#' + x).value); const gj = r * j / 1e9, gb = gj / k; $('#out').innerHTML = `JSON: <b>${f1(gj)} GB/s</b> · Nhị phân: <b>${f1(gb)} GB/s</b> → tiết kiệm <b>${f1(gj - gb)} GB/s</b> (${f0((1 - 1 / k) * 100)}%)` + bar('JSON', gj, gj, '#e03131') + bar('Nhị phân', gb, gj, '#2f9e44'); };
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- CAP ----
  WIDGETS['sd-cap'] = host => {
    host.innerHTML = '<div>Tình huống: Chi nhánh B bị mất liên lạc với trụ sở. Trụ sở vừa <b>bỏ món “Summer Special”</b> khỏi thực đơn. Khách gọi món đó ở chi nhánh B. Bạn chọn:</div>' + btn('CP: ưu tiên đúng dữ liệu', 'data-m="cp"') + btn('AP: ưu tiên luôn nhận đơn', 'data-m="ap"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    host.querySelectorAll('button').forEach(b => b.onclick = () => { $('#out').innerHTML = b.dataset.m === 'cp' ? '🛑 Chi nhánh B: “Xin lỗi, hệ thống đang cập nhật thực đơn, vui lòng thử lại sau.”<br><b>Nhất quán ✔ · Sẵn sàng ✘</b> — hợp ngân hàng, thanh toán, tồn kho khi chốt đơn.' : '✅ Chi nhánh B: “Dạ nhận đơn Summer Special!” (nhưng món đã bỏ ở nơi khác)<br><b>Sẵn sàng ✔ · Nhất quán ✘ tạm thời</b> — sau khi nối lại sẽ đồng bộ và phải xin lỗi/đổi món. Hợp mạng xã hội, duyệt sản phẩm.'; });
  };

  // ---- Consistency ----
  WIDGETS['sd-consistency'] = host => {
    host.innerHTML = '<div>Chế độ: <select id="m"><option value="s">Nhất quán mạnh</option><option value="e">Cuối cùng (eventual)</option></select> Trễ đồng bộ: <select id="d"><option>1</option><option>3</option><option>5</option></select> giây</div>' + btn('✍️ Ghi X=2 ở bản sao A', 'id="w"') + btn('👀 Đọc ở bản sao B', 'id="r"') + btn('Reset', 'id="rs"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let t0 = null, A = 1;
    const draw = (msg) => { $('#out').innerHTML = `A: X=${A} · B: X=${t0 === null ? A : (($('#m').value === 's') ? A : (Date.now() - t0) / 1000 >= +$('#d').value ? A : 1)}<br>${msg || ''}`; };
    $('#w').onclick = () => { A = 2; t0 = Date.now(); draw($('#m').value === 's' ? 'Ghi xong khi <b>mọi bản sao</b> đã xác nhận (chậm hơn, nhưng đọc đâu cũng mới).' : 'Ghi xong ngay ở A (nhanh); B sẽ cập nhật sau ' + $('#d').value + ' giây.'); };
    $('#r').onclick = () => { const v = ($('#m').value === 's') ? A : (t0 === null || (Date.now() - t0) / 1000 >= +$('#d').value ? A : 1); draw(`Đọc ở B → <b>X = ${v}</b> ${v === 2 ? '✅ mới nhất' : '⚠ dữ liệu cũ (stale read)'}`); };
    $('#rs').onclick = () => { A = 1; t0 = null; draw(); }; $('#m').onchange = $('#rs').onclick; draw();
  };

  // ---- Cache ----
  WIDGETS['sd-cache'] = host => {
    host.innerHTML = '<div>Chuỗi truy cập (cách nhau dấu cách): <input id="seq" value="A B C A D A E B A F" style="width:100%;padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit"></div><div id="out" style="margin-top:8px"></div>';
    const $ = $q(host), CAP = 3;
    const run = (seq, pol) => {
      let c = [], hits = 0, log = []; const used = {}, freq = {}, ins = {};
      seq.forEach((k, t) => { freq[k] = (freq[k] || 0) + 1; if (c.includes(k)) { hits++; used[k] = t; log.push(k + '✔'); } else { if (c.length >= CAP) { let v; if (pol === 'LRU') v = c.reduce((a, b) => used[a] <= used[b] ? a : b); else if (pol === 'LFU') v = c.reduce((a, b) => freq[a] <= freq[b] ? a : b); else v = c.reduce((a, b) => ins[a] <= ins[b] ? a : b); c = c.filter(x => x !== v); } c.push(k); used[k] = t; ins[k] = t; log.push(k + '✘'); } });
      return { hits, log };
    };
    const draw = () => { const seq = $('#seq').value.trim().split(/\s+/).filter(Boolean); $('#out').innerHTML = ['LRU', 'LFU', 'FIFO'].map(p => { const r = run(seq, p); return `<div style="padding:4px 0;border-bottom:1px solid var(--line)"><b>${p}</b>: trúng ${r.hits}/${seq.length} (${f0(r.hits / (seq.length || 1) * 100)}%)<br><span class="small">${r.log.join(' ')}</span></div>`; }).join('') + '<span class="small">✔ = hit, ✘ = miss. Dung lượng cache = 3.</span>'; };
    $('#seq').oninput = draw; draw();
  };

  // ---- Queue ----
  WIDGETS['sd-queue'] = host => {
    host.innerHTML = sl('a', 'Đơn đến mỗi phút', 1, 100, 60) + sl('w', 'Số thợ (mỗi thợ 10 đơn/phút)', 1, 15, 4) + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const a = +$('#a').value, w = +$('#w').value, cap = w * 10; $('#av').textContent = a; $('#wv').textContent = w; const g = a - cap; $('#out').innerHTML = `Đến: <b>${a}</b>/phút · Xử lý: <b>${cap}</b>/phút<br>` + (g > 0 ? `📈 Hàng chờ phình <b>+${g}</b> đơn mỗi phút → sau 1 giờ tồn <b>${g * 60}</b> đơn. Thêm ${Math.ceil(g / 10)} thợ để hết tồn.` : `✅ Hàng chờ tiêu hết; còn dư <b>${-g}</b> đơn/phút công suất.`) + '<br><span class="small">Hàng đợi giúp đỉnh ngắn không làm hỏng hệ thống; nhưng nếu đến &gt; xử lý lâu dài thì chỉ hoãn được sự cố.</span>'; };
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- Rate limit ----
  WIDGETS['sd-ratelimit'] = host => {
    host.innerHTML = sl('cap', 'Sức chứa xô (token)', 1, 20, 5) + sl('rf', 'Nạp mỗi giây', 1, 5, 1) + btn('📨 Gửi 1 request', 'id="go"') + btn('🚀 Gửi 10 liên tiếp', 'id="ten"') + btn('Reset', 'id="rs"') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let tok, last, log = [];
    const refill = () => { const now = Date.now(); tok = Math.min(+$('#cap').value, tok + (now - last) / 1000 * +$('#rf').value); last = now; };
    const req = () => { refill(); if (tok >= 1) { tok--; log.unshift('✅'); } else log.unshift('❌ 429'); log = log.slice(0, 20); };
    const draw = () => { refill(); $('#capv').textContent = $('#cap').value; $('#rfv').textContent = $('#rf').value; $('#out').innerHTML = `Token còn: <b>${f1(tok)}</b> / ${$('#cap').value}` + bar('xô', tok, +$('#cap').value, '#4c6ef5') + `<div class="small">Gần đây: ${log.join(' ') || '—'}</div><div class="small">Header: X-RateLimit-Remaining: ${Math.floor(tok)} · Retry-After: ${tok >= 1 ? 0 : Math.ceil((1 - tok) / +$('#rf').value)}s</div>`; };
    const reset = () => { tok = +$('#cap').value; last = Date.now(); log = []; draw(); };
    $('#go').onclick = () => { req(); draw(); }; $('#ten').onclick = () => { for (let k = 0; k < 10; k++) req(); draw(); }; $('#rs').onclick = reset;
    host.querySelectorAll('input').forEach(i => i.oninput = reset); reset(); const iv = setInterval(() => { if (!document.body.contains(host)) clearInterval(iv); else draw(); }, 500);
  };

  // ---- Backoff ----
  WIDGETS['sd-backoff'] = host => {
    host.innerHTML = sl('base', 'Thời gian chờ cơ sở (ms)', 100, 2000, 500, 100) + sl('n', 'Số lần thử lại', 2, 8, 5) + '<div id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const b = +$('#base').value, n = +$('#n').value; $('#basev').textContent = b; $('#nv').textContent = n; let rows = ''; for (let k = 1; k <= n; k++) { const e = b * Math.pow(2, k - 1), lo = 0, hi = e; rows += `<tr><td>${k}</td><td>${b} ms</td><td>${e} ms</td><td>${lo}–${hi} ms (ngẫu nhiên)</td></tr>`; } $('#out').innerHTML = '<table class="tbl" style="width:100%"><tr><th>Lần</th><th>Cố định</th><th>Backoff ×2</th><th>Backoff + jitter</th></tr>' + rows + '</table><span class="small">Cố định: mọi client đập cùng lúc. Backoff: giãn dần. Jitter: các client không còn đồng bộ → tránh “bão retry”.</span>'; };
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- Circuit breaker ----
  WIDGETS['sd-breaker'] = host => {
    host.innerHTML = '<div>Dịch vụ phụ thuộc: <select id="h"><option value="ok">Khỏe</option><option value="bad">Hỏng</option></select> ' + btn('📨 Gửi yêu cầu', 'id="go"') + btn('⏳ Chờ hết thời gian làm mát', 'id="cool"') + btn('Reset', 'id="rs"') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host); let st, fail, log, cooled;
    const reset = () => { st = 'closed'; fail = 0; log = []; cooled = false; draw(); };
    const draw = () => { const c = { closed: ['🟢 CLOSED', 'chạy bình thường, đếm lỗi'], open: ['🔴 OPEN', 'từ chối ngay, không gọi dịch vụ'], half: ['🟡 HALF-OPEN', 'cho thử một yêu cầu'] }[st]; $('#out').innerHTML = `<b>${c[0]}</b> — ${c[1]} · lỗi liên tiếp: ${fail}/3<div class="small">${log.slice(0, 8).join('<br>') || '—'}</div>`; };
    $('#go').onclick = () => { const bad = $('#h').value === 'bad'; if (st === 'open') { log.unshift('⛔ Bị chặn bởi cầu dao (trả lỗi nhanh / dự phòng)'); } else { if (bad) { fail++; log.unshift('❌ Gọi thất bại'); if (st === 'half' || fail >= 3) { st = 'open'; log.unshift('🔴 Cầu dao MỞ'); } } else { log.unshift('✅ Gọi thành công'); fail = 0; if (st === 'half') { st = 'closed'; log.unshift('🟢 Cầu dao ĐÓNG lại'); } } } draw(); };
    $('#cool').onclick = () => { if (st === 'open') { st = 'half'; log.unshift('🟡 Hết thời gian làm mát → nửa mở'); } draw(); }; $('#rs').onclick = reset; reset();
  };

  // ---- Failure quiz ----
  WIDGETS['sd-failure-quiz'] = host => {
    const Q = [['Một API phụ thuộc đôi khi chậm vô hạn khiến luồng bị kẹt', 'Timeout'], ['Một request thỉnh thoảng fail do mạng nấc, thử lại là được', 'Retry'], ['Dịch vụ thanh toán đã lỗi 80% trong 1 phút, mọi cuộc gọi thêm chỉ làm nó chết hẳn', 'Circuit breaker'], ['Gọi POST /charge bị timeout, không chắc đã trừ tiền chưa', 'Idempotency'], ['1.000 client cùng retry đúng sau 1 giây', 'Jitter']];
    const O = ['Timeout', 'Retry', 'Circuit breaker', 'Idempotency', 'Jitter'];
    host.innerHTML = Q.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${esc(q[0])}</div><select data-i="${i}"><option value="">— chọn —</option>${O.map(o => `<option>${o}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === Q[+s.dataset.i][1] ? '✅' : '❌ Đáp án: ' + Q[+s.dataset.i][1]; });
  };
})();
