// Widget cho giáo trình Android data use (AOSP) – tiếng Việt
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const $q = host => s => host.querySelector(s);
  const btn = (t, a, x) => `<button class="btn sm" ${a || ''} style="margin:3px;${x || ''}">${t}</button>`;
  const inp = (id, v, ph, type) => `<input id="${id}" ${type ? 'type="' + type + '"' : ''} value="${esc(v || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const mkQuiz = (items, opts) => host => {
    host.innerHTML = items.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${q[0]}</div><select data-i="${i}"><option value="">— chọn —</option>${opts.map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('select').forEach(s => s.onchange = () => { const q = items[+s.dataset.i]; host.querySelector('#r' + s.dataset.i).textContent = !s.value ? '' : s.value === q[1] ? '✅ ' + (q[2] || '') : '❌ Đáp án: ' + q[1] + (q[2] ? ' — ' + q[2] : ''); });
  };

  // ---- Data Saver ----
  WIDGETS['ad-datasaver-sim'] = host => {
    host.innerHTML = '<label><input id="ds" type="checkbox" checked> Data Saver bật</label> · <label><input id="wl" type="checkbox"> App được người dùng cho phép dùng dữ liệu nền (whitelist)</label><div style="margin-top:6px">Trạng thái app: <label><input type="radio" name="st" value="fg" checked> Foreground</label> <label><input type="radio" name="st" value="bg"> Background</label></div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = $q(host);
    const draw = () => { const ds = $('#ds').checked, wl = $('#wl').checked, fg = host.querySelector('input[name=st]:checked').value === 'fg';
      let allowed, why;
      if (!ds) { allowed = true; why = 'Data Saver tắt → không hạn chế (app vẫn nên tôn trọng mạng metered).'; }
      else if (fg) { allowed = true; why = 'Data Saver bật nhưng app đang <b>foreground</b> → được dùng dữ liệu.'; }
      else if (wl) { allowed = true; why = 'App ở <b>nền</b> nhưng người dùng đã cho phép (whitelist) → được dùng.'; }
      else { allowed = false; why = 'App ở <b>nền</b>, chưa được cho phép → <b>bị chặn dữ liệu</b>.'; }
      $('#out').innerHTML = (allowed ? '✅ <b>Có thể dùng mạng</b>' : '⛔ <b>Bị chặn mạng</b>') + '<div class="small">' + why + '</div>'; };
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
  };

  // ---- tag sim ----
  WIDGETS['ad-tag-sim'] = host => {
    host.innerHTML = '<div class="small">App có UID 10003. Mỗi lần “gửi” là một socket truyền 1 MB.</div>' + ['ảnh', 'video', 'quảng cáo', '(không gắn nhãn)'].map(t => btn('Gửi 1 MB — ' + t, 'data-t="' + t + '"')).join('') + btn('Reset', 'id="rs"') + '<div class="calc" id="out" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); let tags = {};
    const draw = () => { const total = Object.values(tags).reduce((a, b) => a + b, 0); const rows = Object.entries(tags).map(([k, v]) => `<tr><td>${esc(k)}</td><td>${v} MB</td></tr>`).join('') || '<tr><td colspan="2">—</td></tr>';
      $('#out').innerHTML = `<b>Thống kê theo acct_tag</b><table style="width:100%"><tbody>${rows}</tbody></table><b>default_tag (tổng UID 10003, dùng để áp hạn mức)</b> = <b>${total} MB</b><div class="small">Hạn mức tính theo <code>uid_tag</code> (tổng), báo cáo chi tiết theo <code>acct_tag</code>. Lưu lượng không gắn nhãn thuộc <code>acct_tag = 0</code>.</div>`; };
    host.querySelectorAll('[data-t]').forEach(b => b.onclick = () => { const k = b.dataset.t === '(không gắn nhãn)' ? 'acct_tag=0 (không nhãn)' : b.dataset.t; tags[k] = (tags[k] || 0) + 1; draw(); });
    $('#rs').onclick = () => { tags = {}; draw(); }; draw();
  };

  // ---- eBPF flow ----
  WIDGETS['ad-ebpf-flow'] = host => {
    const steps = [
      ['Boot: trafficController tạo eBPF maps', 'Tạo <code>traffic_cookie_tag_map</code>, <code>traffic_uid_stats_map</code>…, <b>ghim</b> thành file ảo ở <code>/sys/fs/bpf</code>.'],
      ['bpfloader nạp chương trình', 'Tiến trình đặc quyền nạp chương trình eBPF biên dịch sẵn vào kernel, gắn vào <b>cgroup gốc</b> (mọi tiến trình mặc định nằm trong đó).'],
      ['Gói tin đi qua bộ lọc', 'cgroup eBPF filter ở tầng transport <b>đếm byte cho UID</b> của socket; xt_bpf (bw_raw_PREROUTING / bw_mangle_POSTROUTING) đếm theo <b>interface</b>.'],
      ['Tag/untag socket lúc chạy', 'trafficController ghi vào <code>traffic_cookie_tag_map</code> và <code>traffic_uid_counterSet_map</code> (chọn bộ đếm foreground/background).'],
      ['NetworkStatsService đọc số liệu', 'Đọc <code>traffic_tag_stats_map</code>, <code>traffic_uid_stats_map</code>, <code>traffic_iface_stats_map</code> → thống kê bền vững kể từ lần boot gần nhất.'],
      ['Chặn theo trạng thái nguồn', 'Ghi UID vào <code>traffic_powersave_uid_map</code> / <code>standby</code> / <code>dozable</code> → bộ lọc cgroup <b>chặn</b> gói của UID đó (thay xt_owner).']
    ];
    host.innerHTML = '<div id="st"></div><div>' + btn('◀ Trước', 'id="pv"') + btn('Tiếp ▶', 'id="nx"') + '</div>';
    const $ = $q(host); let i = 0;
    const draw = () => { $('#st').innerHTML = steps.map((s, k) => `<div style="margin:5px 0;padding:6px 8px;border-radius:8px;border:1px solid var(--line);${k === i ? 'background:var(--brand-soft);font-weight:600' : 'opacity:.55'}">${k + 1}. ${s[0]}${k === i ? '<div style="font-weight:400;margin-top:4px">' + s[1] + '</div>' : ''}</div>`).join(''); };
    $('#pv').onclick = () => { i = Math.max(0, i - 1); draw(); }; $('#nx').onclick = () => { i = Math.min(steps.length - 1, i + 1); draw(); }; draw();
  };

  // ---- monotonic ----
  WIDGETS['ad-monotonic'] = host => {
    host.innerHTML = '<div>Lần đọc 1 (byte): ' + inp('a', '1000000', '', 'number') + '</div><div style="margin-top:4px">Lần đọc 2 (byte): ' + inp('b', '1500000', '', 'number') + '</div><div class="calc" id="out" style="margin-top:8px"></div>' + '<div class="small">Thử nhập lần 2 nhỏ hơn lần 1 để mô phỏng driver reset sớm.</div>';
    const $ = $q(host);
    const draw = () => { const a = +$('#a').value, b = +$('#b').value, d = b - a; $('#out').innerHTML = d >= 0 ? `✅ Lượng dùng = <b>${d.toLocaleString('vi-VN')}</b> byte (số liệu đơn điệu tăng).` : `❌ Hiệu số = <b>${d.toLocaleString('vi-VN')}</b> byte: bộ đếm <b>tụt xuống</b> → hệ thống không biết đã dùng bao nhiêu (có thể bỏ sót hoặc tính sai).`; };
    $('#a').oninput = $('#b').oninput = draw; draw();
  };

  // ---- cycle ----
  WIDGETS['ad-cycle'] = host => {
    host.innerHTML = '<div>Ngày reset (1–31): ' + inp('d', '30', '', 'number') + '</div><div class="calc" id="out" style="margin-top:8px;font-size:13px"></div>';
    const $ = $q(host); const names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    const dim = (y, m) => new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
    const draw = () => { const d = Math.max(1, Math.min(31, +$('#d').value || 1)); const y = 2025;
      $('#out').innerHTML = names.map((n, m) => { const short = d > dim(y, m); const date = short ? [(m + 1) % 12, m === 11 ? y + 1 : y, 1] : [m, y, d];
        return `<div>Tháng ${n}: reset <b>${date[2]}/${date[0] + 1}${date[1] !== y ? '/' + date[1] : ''}</b> 00:00 UTC${short ? ' <span class="small">(tháng chỉ có ' + dim(y, m) + ' ngày → sang ngày 1 tháng sau)</span>' : ''}</div>`; }).join(''); };
    $('#d').oninput = draw; draw();
  };

  // ---- offload quiz ----
  WIDGETS['ad-offload-pick'] = mkQuiz([
    ['Gói SYN thiết lập kết nối IPv4 qua hotspot', 'Phần mềm', 'Kernel cần xây trạng thái flow/NAT.'],
    ['Gói dữ liệu TCP của flow IPv4 đã có entry NAT', 'Phần cứng', 'HAL xử lý flow đã thiết lập.'],
    ['Gói FIN kết thúc phiên IPv4', 'Phần mềm', 'Kernel cần cập nhật trạng thái.'],
    ['Gói IPv6 tới đích không nằm trong danh sách prefix cấm offload', 'Phần cứng', 'Mọi gói còn lại có thể offload.'],
    ['Gói IPv6 tới prefix đích framework đã đánh dấu không offload', 'Phần mềm', 'Framework lập trình danh sách này.']
  ], ['Phần cứng', 'Phần mềm']);

  // ---- chọn cơ chế ----
  WIDGETS['ad-pick'] = mkQuiz([
    ['Đếm lưu lượng theo socket/UID (thế hệ cũ, ngoài mainline)', 'xt_qtaguid', ''],
    ['Đặt hạn mức đặt tên và báo userspace khi chạm ngưỡng (cũ)', 'xt_quota2', ''],
    ['Cơ chế đếm hiện đại trong kernel (Android 9+)', 'eBPF', ''],
    ['Tổng hợp thống kê, trả cho Settings/API', 'NetworkStatsService', ''],
    ['Chế độ chặn dữ liệu nền theo người dùng', 'Data Saver', ''],
    ['Chuyển tiếp tethering xuống phần cứng', 'Tethering offload', '']
  ], ['xt_qtaguid', 'xt_quota2', 'eBPF', 'NetworkStatsService', 'Data Saver', 'Tethering offload']);

  // ---- tra cứu ----
  const API = [
    ['UID', 'Định danh Linux của app; nền để tính lưu lượng và hạn mức.'],
    ['uid_tag / acct_tag / default_tag', 'Thành phần tag: UID (bắt buộc), nhãn kế toán (tùy app), tổng của UID.'],
    ['TrafficStats.setThreadStatsTag()', 'App đặt acct_tag cho lưu lượng của luồng.'],
    ['TrafficStats.setThreadStatsUid()', 'Gán lưu lượng cho UID khác; cần MODIFY_NETWORK_ACCOUNTING.'],
    ['xt_qtaguid', 'Module kernel cũ đếm theo socket/UID (giảm dần từ Android 9).'],
    ['xt_quota2', 'Module hạn mức; hết quota thì drop; báo qua NFLOG.'],
    ['eBPF', 'Chương trình an toàn chạy trong kernel; thay xt_qtaguid từ Android 9.'],
    ['eBPF map', 'Bảng khóa–giá trị trong kernel lưu thống kê.'],
    ['trafficController', 'Tiến trình userspace (system/netd) tạo map, tag socket.'],
    ['bpfloader', 'Nạp chương trình eBPF và gắn vào cgroup.'],
    ['/sys/fs/bpf', 'Nơi ghim eBPF maps.'],
    ['traffic_uid_stats_map', 'Thống kê theo UID.'],
    ['traffic_iface_stats_map', 'Thống kê theo interface.'],
    ['traffic_dozable_uid_map', 'UID bị/được chặn trong chế độ doze (cùng powersave, standby).'],
    ['NetworkStatsService', 'Dịch vụ tổng hợp thống kê dùng mạng.'],
    ['NetworkPolicyManager', 'Chính sách cảnh báo/giới hạn/chặn nền.'],
    ['Data Saver', 'Chế độ tiết kiệm dữ liệu (Android 7.0).'],
    ['whitelist (Data Saver)', 'App được dùng dữ liệu nền khi Data Saver bật; OEM không nên tự whitelist.'],
    ['dev_get_stats()', 'Hàm kernel trả thống kê interface; phải đơn điệu tăng.'],
    ['NetworkStateTracker', 'Đại diện interface + loại mạng + thuê bao trong ConnectivityService.'],
    ['config_data_usage_network_types', 'Tài nguyên build chọn loại mạng tính vào tổng dữ liệu.'],
    ['Zero-rating', 'Không tính cước một loại lưu lượng (ví dụ MMS).'],
    ['Chu kỳ dùng dữ liệu', 'Reset 00:00 UTC; tháng ngắn → ngày 1 tháng sau.'],
    ['getTetheredIfacePairs()', 'Cặp interface để ghi thống kê tethering.'],
    ['IOffloadConfig / IOffloadControl', 'Hai HAL của tethering hardware offload.'],
    ['ITetheringOffloadCallback', 'HAL gọi ngược: sự kiện và NAT timeout.'],
    ['dumpsys netd trafficcontroller', 'Xem nội dung các eBPF map để gỡ lỗi.'],
    ['VTS / CTS', 'Bộ kiểm tra vendor / tương thích (TrafficStatsTest, NetworkUsageStatsTest…).']
  ];
  WIDGETS['ad-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: ebpf, tag, offload, cycle, saver…') + '<div id="out" style="margin-top:8px;max-height:300px;overflow:auto"></div>';
    const $ = $q(host);
    const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = API.filter(a => !q || (a[0] + ' ' + a[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(a => `<div style="padding:5px 0;border-bottom:1px solid var(--line)"><code>${esc(a[0])}</code><div class="small">${esc(a[1])}</div></div>`).join('') : '<i class="small">Không thấy.</i>'; };
    $('#q').oninput = draw; draw();
  };
})();
