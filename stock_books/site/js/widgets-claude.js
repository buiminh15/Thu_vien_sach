// Widget cho sách "Claude Code How-To" (bản tiếng Việt)
(function () {
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const copyBtn = (host, getText) => {
    const b = document.createElement('button');
    b.className = 'btn sm'; b.textContent = '📋 Sao chép'; b.style.marginTop = '6px';
    b.onclick = () => { try { navigator.clipboard.writeText(getText()); b.textContent = '✅ Đã chép'; setTimeout(() => b.textContent = '📋 Sao chép', 1500); } catch (e) { b.textContent = 'Không chép được'; } };
    host.appendChild(b);
  };
  const pre = t => `<pre style="white-space:pre-wrap;word-break:break-word;margin:6px 0;padding:10px;border-radius:8px;background:rgba(127,127,127,.12);font-size:13px">${esc(t)}</pre>`;
  const field = (id, label, html) => `<label style="display:block;margin:6px 0 2px;font-size:.9rem">${label}</label>${html}`;
  const inp = (id, val, ph) => `<input id="${id}" type="text" value="${esc(val || '')}" placeholder="${esc(ph || '')}" style="width:100%;padding:6px 8px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">`;
  const chk = (id, label, on) => `<label style="display:inline-block;margin:3px 10px 3px 0"><input id="${id}" type="checkbox" ${on ? 'checked' : ''}> ${label}</label>`;
  const sel = (id, opts, val) => `<select id="${id}" style="padding:6px;border-radius:8px;border:1px solid var(--line);background:var(--card);color:inherit">${opts.map(o => `<option value="${esc(o)}" ${o === val ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
  const bar = (label, v, max, col) => `<div style="margin:4px 0"><div style="font-size:.85rem">${label}</div><div style="height:12px;border-radius:6px;background:${col || '#4c6ef5'};width:${Math.max(2, v / max * 100)}%"></div></div>`;

  // ---- Tra cứu lệnh slash ----
  const CMDS = [
    ['/add-dir <path>', 'Thêm thư mục làm việc'], ['/branch [name]', 'Rẽ nhánh hội thoại, giữ bản gốc'], ['/fork [prompt]', 'Nhân bản thành phiên nền (v2.1.212+)'],
    ['/subtask <task>', 'Subagent fork kế thừa hội thoại'], ['/btw <question>', 'Câu hỏi phụ không vào lịch sử'], ['/clear', 'Xóa hội thoại (/reset, /new)'],
    ['/compact [hướng dẫn]', 'Nén hội thoại'], ['/config', 'Mở Cài đặt (/settings)'], ['/context', 'Trực quan hóa dùng ngữ cảnh'], ['/cost', 'Thống kê token'],
    ['/diff', 'Trình xem diff chưa commit'], ['/doctor', 'Chẩn đoán cài đặt'], ['/effort', 'Đặt mức nỗ lực'], ['/export [file]', 'Xuất hội thoại'], ['/fast [on|off]', 'Chế độ nhanh'],
    ['/help', 'Trợ giúp'], ['/hooks', 'Xem cấu hình hooks'], ['/init', 'Khởi tạo CLAUDE.md'], ['/insights', 'Báo cáo phân tích phiên'], ['/keybindings', 'Mở keybindings'],
    ['/mcp', 'Quản lý MCP server và OAuth'], ['/memory', 'Sửa CLAUDE.md, bật/tắt auto-memory'], ['/model [model]', 'Chọn mô hình'], ['/output-style', 'Đổi output style (thêm lại v2.1.269)'],
    ['/permissions', 'Xem/cập nhật quyền'], ['/plan [mô tả]', 'Vào chế độ lập kế hoạch'], ['/plugin', 'Quản lý plugin'], ['/reload-plugins', 'Tải lại plugin'],
    ['/remote-control', 'Điều khiển từ xa từ claude.ai (/rc)'], ['/rename [name]', 'Đổi tên phiên'], ['/resume [session]', 'Tiếp tục hội thoại'], ['/review', 'Bí danh /code-review'],
    ['/rewind', 'Quay lại hội thoại/code (/checkpoint, /undo)'], ['/sandbox', 'Bật/tắt sandbox'], ['/schedule', 'Tác vụ định kỳ (cloud)'], ['/security-review', 'Rà soát bảo mật nhánh'],
    ['/skills', 'Liệt kê skills'], ['/stats', 'Thống kê sử dụng'], ['/status', 'Phiên bản, mô hình, tài khoản'], ['/statusline', 'Cấu hình dòng trạng thái'], ['/tasks', 'Tác vụ nền'],
    ['/theme', 'Đổi chủ đề màu'], ['/voice', 'Nhập giọng nói'], ['/batch', 'Skill: thay đổi song song bằng worktrees'], ['/simplify', 'Skill: review chất lượng code'], ['/loop', 'Skill: chạy prompt lặp'],
    ['/debug', 'Skill: bật log debug'], ['/claude-api', 'Skill: tài liệu Claude API']
  ];
  WIDGETS['cmd-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: nén, rewind, quyền, hook…') + '<div id="out" style="margin-top:8px;max-height:260px;overflow:auto"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const q = $('#q').value.trim().toLowerCase();
      const r = CMDS.filter(c => !q || (c[0] + ' ' + c[1]).toLowerCase().includes(q));
      $('#out').innerHTML = r.length ? r.map(c => `<div style="padding:4px 0;border-bottom:1px solid var(--line)"><code>${esc(c[0])}</code> — ${esc(c[1])}</div>`).join('') : 'Không tìm thấy.';
    };
    $('#q').oninput = draw; draw();
  };

  // ---- Trình tạo SKILL.md ----
  WIDGETS['skill-builder'] = host => {
    host.innerHTML = field('', 'Tên (chữ thường, gạch ngang)', inp('n', 'fix-issue')) + field('', 'Mô tả (làm gì + khi nào dùng)', inp('d', 'Fix a GitHub issue. Use when the user mentions an issue number')) +
      field('', 'Công cụ được duyệt trước (allowed-tools)', inp('t', 'Bash(git *), Read')) + field('', 'Gợi ý đối số', inp('a', '[issue-number]')) +
      '<div style="margin-top:6px">' + chk('dm', 'Chỉ người dùng gọi (disable-model-invocation)', false) + chk('ui', 'Ẩn khỏi menu / (user-invocable: false)', false) + chk('fk', 'Chạy trong subagent (context: fork)', false) + '</div>' +
      '<div id="out"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const L = ['---', `name: ${$('#n').value || 'my-skill'}`, `description: ${$('#d').value || 'Mô tả'}`];
      if ($('#a').value) L.push(`argument-hint: "${$('#a').value}"`);
      if ($('#t').value) L.push(`allowed-tools: ${$('#t').value}`);
      if ($('#dm').checked) L.push('disable-model-invocation: true');
      if ($('#ui').checked) L.push('user-invocable: false');
      if ($('#fk').checked) { L.push('context: fork'); L.push('agent: Explore'); }
      L.push('---', '', '# ' + ($('#n').value || 'My skill'), '', 'Fix issue $ARGUMENTS following our coding standards.', '1. Read the issue', '2. Implement the fix', '3. Write tests');
      $('#out').innerHTML = pre(L.join('\n')) + `<div class="small">Lưu tại <code>.claude/skills/${esc($('#n').value || 'my-skill')}/SKILL.md</code></div>`;
      $('#out').dataset.t = L.join('\n');
    };
    host.querySelectorAll('input').forEach(i => { i.oninput = draw; i.onchange = draw; });
    draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- Hệ phân cấp bộ nhớ ----
  const MEM = [
    ['1. Managed Policy', 'macOS /Library/Application Support/ClaudeCode/CLAUDE.md · Linux /etc/claude-code/CLAUDE.md · Windows C:\\Program Files\\ClaudeCode\\CLAUDE.md', 'Tổ chức', 'Chính sách/tiêu chuẩn bảo mật toàn công ty'],
    ['2. Managed Drop-ins', 'managed-settings.d/ (v2.1.83+)', 'Tổ chức', 'Policy mô-đun, gộp theo bảng chữ cái'],
    ['3. Project Memory', './CLAUDE.md hoặc ./.claude/CLAUDE.md (hoặc AGENTS.md từ v2.1.277)', 'Đội (git)', 'Tiêu chuẩn đội, kiến trúc'],
    ['4. Project Rules', './.claude/rules/*.md', 'Đội (git)', 'Quy tắc mô-đun, theo đường dẫn (paths:)'],
    ['5. User Memory', '~/.claude/CLAUDE.md', 'Cá nhân', 'Sở thích cá nhân mọi dự án'],
    ['6. User Rules', '~/.claude/rules/*.md', 'Cá nhân', 'Quy tắc cá nhân mọi dự án'],
    ['7. Local Project', './CLAUDE.local.md (có thể là tính năng cũ)', 'Cá nhân (git bỏ qua)', 'Sở thích riêng cho một dự án'],
    ['8. Auto Memory', '~/.claude/projects/<project>/memory/', 'Cá nhân', 'Ghi chú Claude tự học (200 dòng đầu MEMORY.md)']
  ];
  WIDGETS['mem-hierarchy'] = host => {
    host.innerHTML = '<div id="b"></div><div class="calc" id="out" style="margin-top:8px">Bấm một cấp.</div>';
    host.querySelector('#b').innerHTML = MEM.map((m, i) => `<button class="btn sm" data-i="${i}" style="margin:3px">${m[0]}</button>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => {
      const m = MEM[+b.dataset.i];
      host.querySelector('#out').innerHTML = `<b>${m[0]}</b><br>📍 ${esc(m[1])}<br>👥 Chia sẻ: ${m[2]}<br>🎯 Tốt cho: ${m[3]}<br><span class="small">Ưu tiên giảm dần từ 1 → 8; các file được nối lại, không ghi đè.</span>`;
    });
  };

  // ---- Chọn cấp bộ nhớ ----
  const MEMQ = [
    ['Mọi dự án của công ty phải tuân thủ chính sách bảo mật', 0], ['Quy ước đặt tên và Git workflow của đội', 2], ['Tôi thích giải thích kèm sơ đồ và ví dụ trước', 4],
    ['Chuẩn response của module src/api/', 3], ['Phím tắt editor yêu thích của tôi', 4], ['Ghi chú dự án cá nhân, không commit', 6]
  ];
  const MEMOPT = ['Managed policy', 'Project (CLAUDE.md)', 'Project (CLAUDE.md)', 'Rules/thư mục con', 'User (~/.claude)', 'User rules', 'Local (CLAUDE.local.md)'];
  WIDGETS['mem-picker'] = host => {
    let i = Math.floor(Math.random() * MEMQ.length);
    const draw = () => {
      const q = MEMQ[i], ans = q[1] === 0 ? 'Managed policy' : q[1] === 2 ? 'Project (CLAUDE.md)' : q[1] === 3 ? 'Rules/thư mục con' : q[1] === 4 ? 'User (~/.claude)' : 'Local (CLAUDE.local.md)';
      const opts = ['Managed policy', 'Project (CLAUDE.md)', 'Rules/thư mục con', 'User (~/.claude)', 'Local (CLAUDE.local.md)'];
      host.innerHTML = `<p><b>${esc(q[0])}</b></p>` + opts.map(o => `<button class="btn sm" data-o="${esc(o)}" style="margin:3px">${o}</button>`).join('') + '<div class="calc" id="out" style="margin-top:8px">Chọn cấp phù hợp.</div><button class="btn sm" id="nx" style="margin-top:6px">Câu khác ➜</button>';
      host.querySelectorAll('button[data-o]').forEach(b => b.onclick = () => { host.querySelector('#out').innerHTML = b.dataset.o === ans ? '✅ Đúng!' : `❌ Chưa đúng. Phù hợp: <b>${ans}</b>.`; });
      host.querySelector('#nx').onclick = () => { i = (i + 1) % MEMQ.length; draw(); };
    };
    draw();
  };

  // ---- Skill progressive disclosure ----
  WIDGETS['skill-load'] = host => {
    host.innerHTML = `<label>Số skill cài: <b id="nv">20</b></label><input id="n" type="range" min="1" max="100" value="20" style="width:100%"><label style="display:block;margin-top:6px"><input id="act" type="checkbox"> Một skill được kích hoạt (nạp thân SKILL.md ~3k token)</label><label style="display:block"><input id="res" type="checkbox"> Claude còn đọc 1 tài nguyên kèm theo (~2k token)</label><div class="calc" id="out" style="margin-top:8px"></div>`;
    const $ = s => host.querySelector(s);
    const draw = () => {
      const n = +$('#n').value; $('#nv').textContent = n;
      const l1 = n * 100, l2 = $('#act').checked ? 3000 : 0, l3 = $('#act').checked && $('#res').checked ? 2000 : 0;
      const naive = n * 3000;
      $('#out').innerHTML = `Progressive disclosure: <b>${l1 + l2 + l3}</b> token (metadata ${l1} + hướng dẫn ${l2} + tài nguyên ${l3}).<br>Nếu nạp hết mọi skill: <b>${naive}</b> token.` + bar('Progressive', l1 + l2 + l3, naive, '#2f9e44') + bar('Nạp hết', naive, naive, '#e03131');
    };
    host.querySelectorAll('input').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw();
  };

  // ---- Subagent picker ----
  const SA = [
    ['Review nhanh một hàm 10 dòng', false, 'Chi phí và độ trễ thừa; làm trực tiếp.'],
    ['Tính năng nhiều bước trải trên 12 file', true, 'Tách mối quan tâm, tránh ô nhiễm ngữ cảnh.'],
    ['Chạy phân tích hiệu năng 20 phút', true, 'Chạy nền/subagent không làm cạn ngữ cảnh chính.'],
    ['Đổi tên một biến', false, 'Việc đơn một bước.'],
    ['Kiểm toán bảo mật codebase lớn, chỉ đọc', true, 'Agent chỉ có Read/Grep, ngữ cảnh riêng.'],
    ['Ba nhiệm vụ độc lập: test, tài liệu, review', true, 'Chạy song song, mỗi agent ngữ cảnh riêng.']
  ];
  WIDGETS['subagent-picker'] = host => {
    host.innerHTML = SA.map((s, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${esc(s[0])}</div><button class="btn sm" data-i="${i}" data-a="1">Dùng subagent</button> <button class="btn sm" data-i="${i}" data-a="0">Làm trực tiếp</button> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const s = SA[+b.dataset.i]; host.querySelector('#r' + b.dataset.i).innerHTML = (b.dataset.a === '1') === s[1] ? '✅ ' + esc(s[2]) : '❌ Nên ' + (s[1] ? 'dùng subagent: ' : 'làm trực tiếp: ') + esc(s[2]); });
  };

  // ---- Trình tạo agent ----
  WIDGETS['agent-builder'] = host => {
    host.innerHTML = field('', 'Tên', inp('n', 'code-reviewer')) + field('', 'Mô tả (kèm “use PROACTIVELY”)', inp('d', 'Expert code reviewer. Use PROACTIVELY after code changes.')) +
      field('', 'Công cụ (để trống = kế thừa)', inp('t', 'Read, Grep, Glob')) + '<div style="margin-top:6px">Mô hình: ' + sel('m', ['inherit', 'sonnet', 'opus', 'haiku'], 'sonnet') + ' Bộ nhớ: ' + sel('mem', ['(không)', 'user', 'project', 'local'], '(không)') + ' Cô lập: ' + sel('iso', ['(không)', 'worktree'], '(không)') + '</div>' +
      '<div>' + chk('bg', 'background: true', false) + '</div><div id="out"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const L = ['---', `name: ${$('#n').value}`, `description: ${$('#d').value}`];
      if ($('#t').value) L.push(`tools: ${$('#t').value}`);
      L.push(`model: ${$('#m').value}`);
      if ($('#mem').value !== '(không)') L.push(`memory: ${$('#mem').value}`);
      if ($('#iso').value !== '(không)') L.push(`isolation: ${$('#iso').value}`);
      if ($('#bg').checked) L.push('background: true');
      L.push('---', '', 'Bạn là chuyên gia ... Khi được gọi:', '1. Chạy git diff xem thay đổi gần đây', '2. Tập trung vào file đã sửa', '3. Báo cáo theo mức độ ưu tiên');
      $('#out').innerHTML = pre(L.join('\n')); $('#out').dataset.t = L.join('\n');
    };
    host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- MCP hay Memory ----
  const MQ = [
    ['Sở thích: luôn dùng TypeScript strict', 'Memory'], ['Danh sách PR đang mở hiện tại', 'MCP'], ['Quy ước đặt tên file của đội', 'Memory'],
    ['Kết quả truy vấn database sản xuất ngay bây giờ', 'MCP'], ['Lệnh build/test của dự án', 'Memory'], ['Tin nhắn mới nhất trong kênh Slack', 'MCP']
  ];
  WIDGETS['mcp-or-memory'] = host => {
    host.innerHTML = MQ.map((q, i) => `<div style="margin:6px 0;padding:6px 0;border-bottom:1px solid var(--line)"><div>${esc(q[0])}</div><button class="btn sm" data-i="${i}" data-a="Memory">Memory</button> <button class="btn sm" data-i="${i}" data-a="MCP">MCP</button> <span class="small" id="r${i}"></span></div>`).join('');
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const q = MQ[+b.dataset.i]; host.querySelector('#r' + b.dataset.i).textContent = b.dataset.a === q[1] ? '✅ Đúng' : '❌ Nên dùng ' + q[1]; });
  };

  // ---- MCP builder ----
  WIDGETS['mcp-builder'] = host => {
    host.innerHTML = '<div>Transport: ' + sel('tr', ['http', 'stdio'], 'http') + ' Phạm vi: ' + sel('sc', ['local', 'project', 'user'], 'project') + '</div>' + field('', 'Tên server', inp('n', 'github')) + field('', 'URL (http) hoặc lệnh (stdio)', inp('u', 'https://api.githubcopilot.com/mcp/')) + field('', 'Biến token (tên biến môi trường, http)', inp('v', 'GITHUB_PERSONAL_ACCESS_TOKEN')) + '<div id="out"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const tr = $('#tr').value, n = $('#n').value || 'server', u = $('#u').value, v = $('#v').value;
      let cmd;
      if (tr === 'http') cmd = `claude mcp add --scope ${$('#sc').value} --transport http ${n} ${u}` + (v ? ` --header "Authorization: Bearer $${v}"` : '');
      else cmd = `claude mcp add --scope ${$('#sc').value} --transport stdio ${n} -- ${u}`;
      let j = tr === 'http' ? { mcpServers: { [n]: Object.assign({ type: 'http', url: u }, v ? { headers: { Authorization: 'Bearer ${' + v + '}' } } : {}) } } : { mcpServers: { [n]: { command: u.split(' ')[0], args: u.split(' ').slice(1) } } };
      const t = cmd + '\n\n# .mcp.json\n' + JSON.stringify(j, null, 2);
      $('#out').innerHTML = pre(t) + (tr === 'stdio' ? '<div class="small">Windows native: bọc <code>cmd /c npx -y …</code></div>' : '<div class="small">Không hardcode token: dùng <code>${VAR}</code> trong .mcp.json.</div>'); $('#out').dataset.t = t;
    };
    host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- MCP bloat ----
  WIDGETS['mcp-bloat'] = host => {
    host.innerHTML = `<label>Độ dài bản ghi chép: <b id="tv">50000</b> token</label><input id="t" type="range" min="5000" max="100000" step="5000" value="50000" style="width:100%"><label>Số server/công cụ nạp trước: <b id="sv">30</b> server</label><input id="s" type="range" min="1" max="60" value="30" style="width:100%"><div class="calc" id="out" style="margin-top:8px"></div>`;
    const $ = s => host.querySelector(s);
    const draw = () => {
      const t = +$('#t').value, s = +$('#s').value; $('#tv').textContent = t; $('#sv').textContent = s;
      const defs = s * 2500, direct = defs + t * 2, code = 2000;
      $('#out').innerHTML = `Gọi công cụ trực tiếp: định nghĩa ${defs} + bản ghi chép đi qua ngữ cảnh 2 lần (${t * 2}) = <b>${direct}</b> token.<br>Thực thi code (dữ liệu ở lại sandbox): <b>~${code}</b> token → giảm <b>${Math.round((1 - code / direct) * 1000) / 10}%</b>.` + bar('Trực tiếp', direct, direct, '#e03131') + bar('Thực thi code', code, direct, '#2f9e44') + '<span class="small">Con số minh họa; ví dụ gốc: ~150.000 → ~2.000 token (−98,7%).</span>';
    };
    host.querySelectorAll('input').forEach(i => i.oninput = draw); draw();
  };

  // ---- Hook events ----
  const HE = [
    ['SessionStart', 'Phiên', 'Bắt đầu/tiếp tục/clear/compact/fork', 'Không'], ['Setup', 'Phiên', '--init-only, hoặc --init/--maintenance với -p', 'Không'], ['InstructionsLoaded', 'Phiên', 'Sau khi nạp CLAUDE.md/rules', 'Không'],
    ['UserPromptSubmit', 'Prompt', 'Người dùng gửi prompt (trước khi mở rộng skill)', 'Có'], ['UserPromptExpansion', 'Prompt', 'Lệnh slash/MCP prompt được mở rộng', 'Có'], ['MessageDisplay', 'Prompt', 'Hiển thị văn bản phản hồi (v2.1.152)', 'Không'],
    ['PreToolUse', 'Công cụ', 'Trước khi chạy công cụ', 'Có (allow/deny/ask/defer)'], ['PermissionRequest', 'Công cụ', 'Hiện hộp thoại quyền', 'Có'], ['PostToolUse', 'Công cụ', 'Sau khi công cụ thành công', 'Không'], ['PostToolUseFailure', 'Công cụ', 'Công cụ thất bại', 'Không'],
    ['PostToolBatch', 'Công cụ', 'Sau một lô gọi công cụ', 'Có'], ['PermissionDenied', 'Công cụ', 'Auto mode từ chối', 'Không'], ['Notification', 'Phiên', 'Có thông báo', 'Không'],
    ['SubagentStart', 'Agent', 'Subagent được tạo', 'Không'], ['SubagentStop', 'Agent', 'Subagent xong', 'Có'], ['Stop', 'Agent', 'Claude hoàn thành phản hồi', 'Có'], ['StopFailure', 'Agent', 'Lỗi API kết thúc lượt', 'Không'],
    ['TeammateIdle', 'Agent', 'Đồng đội rảnh', 'Có'], ['TaskCompleted', 'Agent', 'Tác vụ hoàn thành', 'Có'], ['TaskCreated', 'Agent', 'Tác vụ được tạo', 'Có'],
    ['ConfigChange', 'Cấu hình', 'File config đổi', 'Có (trừ policy)'], ['CwdChanged', 'Cấu hình', 'Đổi thư mục làm việc', 'Không'], ['DirectoryAdded', 'Cấu hình', 'Thêm thư mục giữa phiên (v2.1.219)', 'Không'], ['FileChanged', 'Cấu hình', 'File được watch đổi', 'Không'],
    ['PreCompact', 'Cấu hình', 'Trước khi nén ngữ cảnh', 'Có'], ['PostCompact', 'Cấu hình', 'Sau khi nén', 'Không'], ['PreModelSwitch', 'Cấu hình', 'Trước khi đổi mô hình', 'Có'], ['PostModelSwitch', 'Cấu hình', 'Sau khi đổi mô hình', 'Không'],
    ['WorktreeCreate', 'Cấu hình', 'Tạo worktree', 'Có (trả path)'], ['WorktreeRemove', 'Cấu hình', 'Xóa worktree', 'Có (exit≠0 làm thất bại)'], ['Elicitation', 'Agent', 'MCP server xin đầu vào', 'Có'], ['ElicitationResult', 'Agent', 'Người dùng trả lời', 'Có'], ['SessionEnd', 'Phiên', 'Phiên kết thúc', 'Không']
  ];
  WIDGETS['hook-events'] = host => {
    const groups = ['Tất cả', ...new Set(HE.map(h => h[1]))];
    host.innerHTML = `<div>${groups.map(g => `<button class="btn sm" data-g="${g}" style="margin:2px">${g}</button>`).join('')}</div><label style="display:block;margin-top:6px"><input id="bl" type="checkbox"> Chỉ sự kiện có thể chặn</label><div id="out" style="margin-top:6px;max-height:300px;overflow:auto"></div>`;
    let g = 'Tất cả';
    const draw = () => {
      const bl = host.querySelector('#bl').checked;
      const r = HE.filter(h => (g === 'Tất cả' || h[1] === g) && (!bl || h[3].startsWith('Có')));
      host.querySelector('#out').innerHTML = `<div class="small">${r.length}/${HE.length} sự kiện</div>` + r.map(h => `<div style="padding:4px 0;border-bottom:1px solid var(--line)"><code>${h[0]}</code> <span class="small">(${h[1]})</span> — ${esc(h[2])} · chặn: <b>${esc(h[3])}</b></div>`).join('');
    };
    host.querySelectorAll('button').forEach(b => b.onclick = () => { g = b.dataset.g; draw(); });
    host.querySelector('#bl').onchange = draw; draw();
  };

  // ---- Hook sim ----
  WIDGETS['hook-sim'] = host => {
    host.innerHTML = '<div>Lệnh Bash Claude định chạy:</div>' + inp('c', 'rm -rf /', '') + '<div style="margin-top:6px">' + ['ls -la', 'sudo rm important.txt', 'rm -rf /', 'npm test'].map(c => `<button class="btn sm" data-c="${esc(c)}" style="margin:2px">${esc(c)}</button>`).join('') + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const c = $('#c').value;
      const rules = [[/\brm\s+-rf\s+\//, 'Blocking dangerous rm -rf / command'], [/\bsudo\s+rm/, 'Blocking sudo rm command']];
      const hit = rules.find(r => r[0].test(c));
      $('#out').innerHTML = hit ? `Hook PreToolUse in ra stderr: <code>${esc(hit[1])}</code> → <b style="color:#e03131">exit 2 → chặn lệnh</b>; Claude nhận lý do và đổi cách làm.` : `Không khớp mẫu nguy hiểm → <b style="color:#2f9e44">exit 0 → lệnh tiếp tục chạy</b>.`;
    };
    $('#c').oninput = draw; host.querySelectorAll('button').forEach(b => b.onclick = () => { $('#c').value = b.dataset.c; draw(); }); draw();
  };

  // ---- Hook builder ----
  WIDGETS['hook-builder'] = host => {
    host.innerHTML = '<div>Sự kiện: ' + sel('ev', ['PreToolUse', 'PostToolUse', 'UserPromptSubmit', 'Stop', 'SessionStart', 'SessionEnd', 'Notification'], 'PostToolUse') + ' Loại: ' + sel('ty', ['command', 'http', 'prompt', 'agent', 'mcp_tool'], 'command') + '</div>' + field('', 'Matcher (công cụ)', inp('m', 'Write|Edit')) + field('', 'Lệnh / URL / prompt', inp('c', '$CLAUDE_PROJECT_DIR/.claude/hooks/format-code.sh')) + field('', 'Timeout (giây)', inp('to', '60')) + '<div id="out"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const ty = $('#ty').value, v = $('#c').value, h = { type: ty };
      if (ty === 'command') h.command = v; else if (ty === 'http') h.url = v; else if (ty === 'prompt' || ty === 'agent') h.prompt = v; else { h.server = 'my-server'; h.tool = v; }
      if ($('#to').value) h.timeout = +$('#to').value;
      const entry = { hooks: [h] }; if ($('#m').value && !['UserPromptSubmit', 'Stop', 'SessionStart', 'SessionEnd'].includes($('#ev').value)) entry.matcher = $('#m').value;
      const out = JSON.stringify({ hooks: { [$('#ev').value]: [entry] } }, null, 2);
      $('#out').innerHTML = pre(out) + '<div class="small">Đặt vào <code>~/.claude/settings.json</code> hoặc <code>.claude/settings.json</code>. Exit 2 = chặn.</div>'; $('#out').dataset.t = out;
    };
    host.querySelectorAll('input,select').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- Plugin builder ----
  WIDGETS['plugin-builder'] = host => {
    host.innerHTML = field('', 'Tên plugin', inp('n', 'pr-review')) + field('', 'Mô tả', inp('d', 'Complete PR review workflow')) + field('', 'Tác giả', inp('a', 'Your Name')) +
      '<div style="margin-top:6px">' + chk('c', 'commands/', true) + chk('ag', 'agents/', true) + chk('sk', 'skills/', false) + chk('hk', 'hooks/hooks.json', true) + chk('mc', '.mcp.json', false) + chk('ls', '.lsp.json', false) + '</div><div id="out"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const m = { name: $('#n').value, description: $('#d').value, version: '1.0.0', author: { name: $('#a').value }, license: 'MIT' };
      const dirs = ['.claude-plugin/plugin.json']; if ($('#c').checked) dirs.push('commands/'); if ($('#ag').checked) dirs.push('agents/'); if ($('#sk').checked) dirs.push('skills/<tên>/SKILL.md'); if ($('#hk').checked) dirs.push('hooks/hooks.json'); if ($('#mc').checked) dirs.push('.mcp.json'); if ($('#ls').checked) dirs.push('.lsp.json');
      const t = JSON.stringify(m, null, 2) + '\n\n' + $('#n').value + '/\n' + dirs.map(d => '  ├── ' + d).join('\n') + `\n\n# Test\nclaude --plugin-dir ./${$('#n').value}`;
      $('#out').innerHTML = pre(t); $('#out').dataset.t = t;
    };
    host.querySelectorAll('input').forEach(i => { i.oninput = draw; i.onchange = draw; }); draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- Plugin decision ----
  WIDGETS['plugin-decision'] = host => {
    const Q = ['Cần gộp nhiều thành phần (lệnh + agent + MCP + hook)?', 'Muốn chia sẻ/cài đặt thống nhất cho cả nhóm?', 'Cần cấu hình tự động, có phiên bản và cập nhật?'];
    host.innerHTML = Q.map((q, i) => `<label style="display:block;margin:4px 0"><input type="checkbox" data-i="${i}"> ${q}</label>`).join('') + '<div class="calc" id="out" style="margin-top:8px"></div>';
    const draw = () => {
      const n = host.querySelectorAll('input:checked').length;
      host.querySelector('#out').innerHTML = n >= 2 ? '✅ <b>Nên tạo plugin.</b> Đóng gói, test bằng <code>--plugin-dir</code>, chia sẻ qua marketplace.' : n === 1 ? '🤔 Cân nhắc: có thể dùng tính năng riêng lẻ (skill/lệnh/agent) và chỉ đóng gói khi cần chia sẻ.' : '❌ Dùng tính năng riêng lẻ: lệnh/skill cho việc nhanh, subagent cho phân tích, MCP cho dữ liệu sống.';
    };
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw();
  };

  // ---- Rewind sim ----
  WIDGETS['rewind-sim'] = host => {
    const cps = ['A: Hỏi thêm caching', 'B: Cài Redis', 'C: Chạy test (fail)', 'D: Refactor auth'];
    host.innerHTML = '<div>Chọn checkpoint: ' + sel('cp', cps, cps[1]) + '</div><div style="margin-top:6px">' + ['Khôi phục code và hội thoại', 'Khôi phục hội thoại', 'Khôi phục code', 'Tóm tắt từ đây', 'Không sao cả'].map((o, i) => `<button class="btn sm" data-i="${i}" style="margin:3px">${o}</button>`).join('') + '</div><div class="calc" id="out" style="margin-top:8px">Hiện tại: đang ở sau bước D.</div>';
    const eff = [
      cp => `Code và hội thoại về <b>${cp}</b>: mọi thay đổi và tin nhắn sau đó bị bỏ.`, cp => `Hội thoại về <b>${cp}</b>, <b>code giữ nguyên</b> như hiện tại.`, cp => `Code về <b>${cp}</b>, <b>lịch sử hội thoại giữ nguyên</b>.`,
      cp => `Hội thoại từ <b>${cp}</b> được nén thành tóm tắt AI (có thể kèm hướng dẫn); tin nhắn gốc vẫn có trong transcript.`, () => 'Hủy, giữ nguyên trạng thái hiện tại.'
    ];
    host.querySelectorAll('button').forEach(b => b.onclick = () => { host.querySelector('#out').innerHTML = eff[+b.dataset.i](host.querySelector('#cp').value) + '<br><span class="small">Lưu ý: thay đổi do Bash (rm, mv, cp) và ngoài Claude Code không được khôi phục.</span>'; });
  };

  // ---- Chế độ quyền ----
  const PM = [
    ['default', 'Đọc file', 'Hỏi cho mọi hành động khác', 'Lập trình cặp, tương tác'], ['acceptEdits', 'Đọc + sửa file', 'Hỏi cho lệnh', 'Tự động hóa sửa hàng loạt'],
    ['plan', 'Chỉ đọc (nghiên cứu)', 'Không sửa', 'Review code, lập kế hoạch'], ['auto', 'Mọi hành động, có bộ phân loại nền', 'Hỏi lại sau 3 chặn liên tiếp / 20 tổng', 'Tự chủ có rào chắn'],
    ['dontAsk', 'Chỉ công cụ đã duyệt trước', 'Mọi thứ khác bị từ chối', 'Khóa chặt, không hỏi'], ['bypassPermissions', 'Mọi hành động, không kiểm tra', 'Nguy hiểm', 'Chỉ sandbox / admin kiểm soát']
  ];
  WIDGETS['perm-modes'] = host => {
    host.innerHTML = PM.map((m, i) => `<button class="btn sm" data-i="${i}" style="margin:3px">${m[0]}</button>`).join('') + '<div class="calc" id="out" style="margin-top:8px">Chọn một chế độ.</div>';
    host.querySelectorAll('button').forEach(b => b.onclick = () => { const m = PM[+b.dataset.i]; host.querySelector('#out').innerHTML = `<b>${m[0]}</b><br>✅ Tự làm: ${m[1]}<br>🛑 Còn lại: ${m[2]}<br>🎯 Phù hợp: ${m[3]}`; });
  };

  // ---- Phím tắt ----
  const SK = [['Esc + Esc', 'Rewind code/hội thoại'], ['Shift+Tab', 'Đổi chế độ quyền'], ['Ctrl+B', 'Đưa tác vụ xuống nền'], ['Ctrl+O', 'Bật verbose xem suy luận'], ['Ctrl+T', 'Bật/tắt danh sách tác vụ'], ['Ctrl+R', 'Tìm ngược lịch sử'], ['Ctrl+G', 'Sửa kế hoạch trong editor ngoài'], ['Alt/Option+T', 'Bật/tắt extended thinking']];
  WIDGETS['shortcut-quiz'] = host => {
    let i = 0, score = 0, n = 0;
    const draw = () => {
      const q = SK[i]; const opts = [q[1]]; while (opts.length < 4) { const o = SK[Math.floor(Math.random() * SK.length)][1]; if (!opts.includes(o)) opts.push(o); }
      opts.sort(() => Math.random() - .5);
      host.innerHTML = `<p>Phím <code>${esc(q[0])}</code> làm gì? <span class="small">(${score}/${n})</span></p>` + opts.map(o => `<button class="btn sm" data-o="${esc(o)}" style="display:block;margin:4px 0">${esc(o)}</button>`).join('') + '<div id="r" class="small"></div>';
      host.querySelectorAll('button').forEach(b => b.onclick = () => { n++; const ok = b.dataset.o === q[1]; if (ok) score++; host.querySelector('#r').textContent = ok ? '✅ Đúng' : '❌ Đáp án: ' + q[1]; host.querySelectorAll('button').forEach(x => x.disabled = true); setTimeout(() => { i = (i + 1) % SK.length; draw(); }, 900); });
    };
    draw();
  };

  // ---- Tra cứu biến môi trường ----
  const ENV = [
    ['ANTHROPIC_API_KEY', 'API key xác thực'], ['ANTHROPIC_MODEL', 'Ghi đè mô hình mặc định'], ['MAX_THINKING_TOKENS', 'Ngân sách token suy luận'], ['CLAUDE_CODE_EFFORT_LEVEL', 'Mức nỗ lực low/medium/high/max'],
    ['CLAUDE_CODE_DISABLE_AUTO_MEMORY', '1 = tắt auto memory'], ['CLAUDE_CODE_DISABLE_BACKGROUND_TASKS', 'Tắt tác vụ nền'], ['CLAUDE_CODE_DISABLE_CRON', 'Tắt tác vụ theo lịch'], ['CLAUDE_CODE_TASK_LIST_ID', 'Danh sách tác vụ dùng chung giữa phiên'],
    ['CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION', 'Bật/tắt gợi ý prompt'], ['CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS', '1 = bật Agent Teams'], ['CLAUDE_CODE_SUBAGENT_MODEL', 'Mô hình cho subagent'], ['CLAUDE_CODE_SIMPLE', 'Chế độ tối thiểu (đặt bởi --bare)'],
    ['CLAUDE_AUTOCOMPACT_PCT_OVERRIDE', 'Ngưỡng tự nén ngữ cảnh'], ['SLASH_COMMAND_TOOL_CHAR_BUDGET', 'Ngân sách ký tự mô tả skill/lệnh'], ['ENABLE_TOOL_SEARCH', 'Hoãn nạp công cụ MCP'], ['MAX_MCP_OUTPUT_TOKENS', 'Giới hạn đầu ra công cụ MCP'],
    ['CLAUDE_CODE_NEW_INIT', '1 = /init tương tác'], ['CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD', '1 = nạp CLAUDE.md của --add-dir'], ['CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS', 'Số subagent đồng thời (mặc định 20)'], ['CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING', 'Tắt chụp file cho rewind'],
    ['ENABLE_CLAUDEAI_MCP_SERVERS', 'false = tắt connector claude.ai'], ['CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH', 'Giới hạn mô tả công cụ MCP'], ['CLAUDE_ENV_FILE', 'File lưu biến môi trường từ hook'], ['CLAUDE_PROJECT_DIR', 'Gốc dự án cho hook']
  ];
  WIDGETS['env-lookup'] = host => {
    host.innerHTML = inp('q', '', 'Gõ: memory, mcp, thinking…') + '<div id="out" style="margin-top:8px;max-height:260px;overflow:auto"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => { const q = $('#q').value.trim().toLowerCase(); const r = ENV.filter(e => !q || (e[0] + ' ' + e[1]).toLowerCase().includes(q)); $('#out').innerHTML = r.length ? r.map(e => `<div style="padding:4px 0;border-bottom:1px solid var(--line)"><code>${e[0]}</code> — ${esc(e[1])}</div>`).join('') : 'Không tìm thấy.'; };
    $('#q').oninput = draw; draw();
  };

  // ---- CLI builder ----
  WIDGETS['cli-builder'] = host => {
    host.innerHTML = '<div>Mục tiêu: ' + sel('g', ['Hỏi nhanh một câu', 'Review code qua pipe', 'CI: JSON có schema', 'Audit bảo mật chỉ đọc', 'Tiếp tục phiên', 'Việc hàng loạt rẻ'], 'CI: JSON có schema') + '</div><div id="out"></div>';
    const $ = s => host.querySelector(s);
    const M = {
      'Hỏi nhanh một câu': 'claude -p "how do I rebase onto main?"', 'Review code qua pipe': 'cat src/auth.ts | claude -p "review this authentication code for security issues"',
      'CI: JSON có schema': 'claude -p --output-format json --max-turns 3 --max-budget-usd 2.00 \\\n  --json-schema \'{"type":"object","properties":{"issues":{"type":"array"}}}\' \\\n  "Review this PR" | jq \'.structured_output.issues[]\'',
      'Audit bảo mật chỉ đọc': 'claude --permission-mode plan --tools "Read,Grep,Glob" "audit this codebase for security vulnerabilities"', 'Tiếp tục phiên': 'claude -r "feature-auth" "continue implementing login"\n# thử hướng khác:\nclaude --resume feature-auth --fork-session "try OAuth instead"',
      'Việc hàng loạt rẻ': 'for f in src/*.ts; do\n  claude -p --model haiku "summarize this file: $(cat $f)" >> summaries.md\ndone'
    };
    const draw = () => { const t = M[$('#g').value]; $('#out').innerHTML = pre(t); $('#out').dataset.t = t; };
    $('#g').onchange = draw; draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- perm-cli ----
  WIDGETS['perm-cli'] = host => {
    host.innerHTML = '<div>' + chk('git', 'Cho phép git status/log/diff', true) + chk('npm', 'Cho phép npm test/run', false) + chk('rd', 'Cho phép Read/Grep/Glob', true) + chk('rm', 'Chặn rm -rf', true) + chk('fp', 'Chặn git push --force', true) + chk('cu', 'Chặn curl/wget', false) + '</div><div id="out"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => {
      const al = [], de = [];
      if ($('#git').checked) al.push('"Bash(git status:*)"', '"Bash(git log:*)"', '"Bash(git diff:*)"'); if ($('#npm').checked) al.push('"Bash(npm test:*)"', '"Bash(npm run:*)"'); if ($('#rd').checked) al.push('"Read"', '"Grep"', '"Glob"');
      if ($('#rm').checked) de.push('"Bash(rm -rf:*)"'); if ($('#fp').checked) de.push('"Bash(git push --force:*)"'); if ($('#cu').checked) de.push('"Bash(curl:*)"', '"Bash(wget:*)"');
      const t = (al.length ? `claude --allowedTools ${al.join(' ')} \\\n` : 'claude \\\n') + (de.length ? `  --disallowedTools ${de.join(' ')}` : '').replace(/\\\n$/, '') + `\n\n# settings.json\n` + JSON.stringify({ permissions: { allow: al.map(x => x.replace(/"/g, '')), deny: de.map(x => x.replace(/"/g, '')) } }, null, 2);
      $('#out').innerHTML = pre(t); $('#out').dataset.t = t;
    };
    host.querySelectorAll('input').forEach(i => i.onchange = draw); draw(); copyBtn(host, () => $('#out').dataset.t);
  };

  // ---- jq lab ----
  WIDGETS['jq-lab'] = host => {
    const sample = { result: 'Phân tích xong 3 vấn đề.', structured_output: { issues: [{ file: 'auth.ts', severity: 'high', title: 'SQL injection' }, { file: 'api.ts', severity: 'low', title: 'Thiếu timeout' }, { file: 'db.ts', severity: 'high', title: 'Hardcode mật khẩu' }], secure: false } };
    const F = [['.result', d => d.result], ['.structured_output.issues | length', d => d.structured_output.issues.length], ['.structured_output.issues[] | select(.severity=="high") | .title', d => d.structured_output.issues.filter(i => i.severity === 'high').map(i => i.title).join('\n')], ['.structured_output.secure', d => d.structured_output.secure], ['.structured_output.issues | map(.file)', d => JSON.stringify(d.structured_output.issues.map(i => i.file))]];
    host.innerHTML = '<div class="small">JSON mẫu từ <code>claude -p --output-format json --json-schema …</code>:</div>' + pre(JSON.stringify(sample, null, 2)) + '<div>Bộ lọc jq: ' + sel('f', F.map(f => f[0]), F[0][0]) + '</div><div class="calc" id="out" style="margin-top:8px"></div>';
    const $ = s => host.querySelector(s);
    const draw = () => { const f = F.find(x => x[0] === $('#f').value); $('#out').innerHTML = `<code>jq '${esc(f[0])}'</code><br>→ <pre style="margin:4px 0;white-space:pre-wrap">${esc(String(f[1](sample)))}</pre>`; };
    $('#f').onchange = draw; draw();
  };
})();
