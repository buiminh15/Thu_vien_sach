// "Claude Code How-To" – Chương 6: Hooks.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 6,
  title: 'Hooks – tự động hóa theo sự kiện',
  intro: 'Hook là hành động tự động (lệnh shell, webhook HTTP, công cụ MCP, prompt LLM hoặc subagent) chạy khi có sự kiện trong Claude Code. Chúng nhận JSON qua stdin, trả kết quả bằng exit code và JSON. Dùng để xác thực, chặn thao tác nguy hiểm, format code, ghi log, kiểm tra hoàn thành…',
  sections: [
    { icon: '⚙️', title: 'Cấu hình & năm loại hook', blocks: [
      { t: 'list', items: [
        'Nơi cấu hình: <code>~/.claude/settings.json</code> (cá nhân), <code>.claude/settings.json</code> (dự án, commit), <code>.claude/settings.local.json</code> (không commit), managed policy, <code>hooks/hooks.json</code> của plugin, frontmatter skill/agent.',
        'Cấu trúc: <code>hooks → TênSựKiện → [ { matcher, hooks: [ { type, command, timeout } ] } ]</code>.',
        '<b>matcher</b> phân biệt hoa thường: chuỗi chính xác (<code>"Write"</code>), regex (<code>"Edit|Write"</code>), wildcard (<code>"*"</code> hoặc <code>""</code>), MCP (<code>"mcp__memory__.*"</code>).'
      ] },
      { t: 'tabs', items: [
        ['💻 command', 'Mặc định. Chạy lệnh shell; giao tiếp bằng JSON stdin/stdout + exit code. Timeout mặc định 600s.'],
        ['🌐 http', 'v2.1.63. POST JSON tới URL, nhận JSON. Đi qua sandbox nếu bật. Nội suy biến môi trường trong header cần <code>allowedEnvVars</code> rõ ràng.'],
        ['🔧 mcp_tool', 'v2.1.118. Gọi thẳng công cụ MCP: <code>{"type":"mcp_tool","server":"…","tool":"validate_edit"}</code>.'],
        ['🧠 prompt', 'LLM đánh giá một lượt (hay dùng với Stop/SubagentStop). Timeout 30s. Trả <code>{"ok": false, "reason": "…"}</code> — <code>reason</code> bắt buộc khi ok=false.'],
        ['🤖 agent', 'Subagent có công cụ, suy luận nhiều bước (thử nghiệm). Timeout 60s. Từ v2.1.280 không chạy trên <code>PermissionRequest</code>.']
      ] },
      { t: 'table', head: ['Trường', 'Ý nghĩa'], rows: [
        ['<code>timeout</code>', 'Giây. UserPromptSubmit hạ còn 30s, MessageDisplay 10s; SessionEnd dùng chung ngân sách 1,5s (tối đa 60s nếu khai báo dài hơn)'],
        ['<code>once</code>', 'Chỉ trong frontmatter skill: gỡ hook sau lần chạy thành công đầu'],
        ['<code>async</code> / <code>asyncRewake</code>', 'Chạy nền không chặn / chạy nền và đánh thức Claude khi exit 2'],
        ['<code>shell</code>', '<code>bash</code> (mặc định) hoặc <code>powershell</code>'],
        ['<code>statusMessage</code>', 'Thông điệp spinner tùy chỉnh']
      ] }
    ] },
    { icon: '📅', title: '33 sự kiện hook', blocks: [
      { t: 'widget', name: 'hook-events', title: 'Duyệt sự kiện hook: lọc theo nhóm, xem khi nào kích hoạt và có chặn được không' },
      { t: 'tip', x: '<code>TaskCreated</code>/<code>TaskCompleted</code> cần todo tools (v2.1.233) — chỉ mặc định có trên một số mô hình; nếu không, hook không bao giờ chạy mà không có lỗi. Đặt <code>CLAUDE_CODE_ENABLE_TODO_TOOLS=1</code> để khôi phục.' }
    ] },
    { icon: '🎛', title: 'Đầu vào, exit code & điều khiển', blocks: [
      { t: 'p', x: 'Mọi hook nhận JSON trên stdin với <code>session_id</code>, <code>transcript_path</code>, <code>cwd</code>, <code>permission_mode</code>, <code>hook_event_name</code>, và theo sự kiện: <code>tool_name</code>, <code>tool_input</code>, <code>tool_use_id</code>, <code>agent_id</code>, <code>agent_type</code>, <code>worktree</code>…' },
      { t: 'table', head: ['Exit code', 'Ý nghĩa', 'Hành vi'], rows: [
        ['<b>0</b>', 'Thành công', 'Tiếp tục; phân tích JSON trên stdout'],
        ['<b>2</b>', 'Lỗi chặn', 'Chặn thao tác; stderr hiện như lỗi (cho Claude thấy)'],
        ['Khác', 'Lỗi không chặn', 'Tiếp tục; dòng đầu stderr hiện trong transcript']
      ] },
      { t: 'widget', name: 'hook-sim', title: 'Mô phỏng hook PreToolUse chặn lệnh Bash nguy hiểm' },
      { t: 'key', x: '<b>PreToolUse</b>: <code>permissionDecision</code> = <code>allow</code> | <code>deny</code> | <code>ask</code> | <code>defer</code>; <code>updatedInput</code> thay toàn bộ input (từ v2.1.300 được xác thực như input của Claude). Nhiều hook bất đồng → ưu tiên <b>deny &gt; defer &gt; ask &gt; allow</b>; quy tắc deny/ask trong permissions vẫn được đánh giá. <b>PostToolUse</b>: <code>decision: block</code> + <code>additionalContext</code>. <b>UserPromptSubmit</b>: <code>decision: block</code> + <code>reason</code> (chạy trước khi skill/lệnh được mở rộng, từ v2.1.299).' },
      { t: 'list', items: [
        'JSON chung: <code>continue</code>, <code>stopReason</code>, <code>suppressOutput</code>, <code>systemMessage</code>, <code>hookSpecificOutput</code>. <code>PermissionDenied</code> có <code>retry: true</code>.',
        '<b>PermissionRequest</b>: <code>hookSpecificOutput.decision = { behavior: allow|deny, updatedInput, message, interrupt }</code>.',
        '<b>Stop/SubagentStop</b> nhận thêm <code>last_assistant_message</code>. <b>SessionStart</b> matcher: startup/resume/clear/compact/fork; dùng <code>$CLAUDE_ENV_FILE</code> để lưu biến môi trường (cũng có ở CwdChanged, FileChanged).',
        '<b>Notification</b> matcher: <code>permission_prompt</code>, <code>idle_prompt</code>, <code>auth_success</code>, <code>elicitation_dialog</code>.'
      ] },
      { t: 'table', head: ['Biến môi trường', 'Dùng ở'], rows: [
        ['<code>CLAUDE_PROJECT_DIR</code>', 'Tất cả hook – gốc dự án'],
        ['<code>CLAUDE_ENV_FILE</code>', 'SessionStart, CwdChanged, FileChanged'],
        ['<code>CLAUDE_CODE_REMOTE</code>', '"true" nếu môi trường từ xa'],
        ['<code>${CLAUDE_PLUGIN_ROOT}</code>, <code>${CLAUDE_PLUGIN_DATA}</code>', 'Hook của plugin'],
        ['<code>CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS</code>', 'Timeout SessionEnd']
      ] }
    ] },
    { icon: '🧪', title: 'Ví dụ thực tế', blocks: [
      { t: 'tabs', items: [
        ['🛑 Chặn Bash nguy hiểm', 'PreToolUse/Bash: script Python đọc <code>tool_input.command</code>, khớp regex <code>\\brm\\s+-rf\\s+/</code> hoặc <code>\\bsudo\\s+rm</code> → in lý do ra stderr và <code>exit(2)</code>.'],
        ['🔐 Quét bí mật', 'PostToolUse/<code>Write|Edit</code>: tìm <code>password = "…"</code>, <code>api_key = "…"</code> → xuất JSON <code>additionalContext</code> cảnh báo cho Claude.'],
        ['🎨 Tự format', 'PostToolUse: theo đuôi file chạy prettier (js/ts/json), black (py), gofmt (go).'],
        ['🚫 Kiểm duyệt prompt', 'UserPromptSubmit: chặn “delete database”, “rm -rf /” bằng <code>{"decision":"block","reason":…}</code>.'],
        ['✅ Stop thông minh', 'Hook prompt ở Stop: kiểm tra mọi file đã tạo/sửa chưa, còn lỗi chưa giải quyết không; nếu thiếu, Claude tiếp tục.'],
        ['🔌 Plugin / MCP', 'Plugin: <code>hooks/hooks.json</code> với <code>"${CLAUDE_PLUGIN_ROOT}"/scripts/validate.sh</code>; matcher MCP <code>mcp__memory__.*</code> + <code>systemMessage</code>.']
      ] },
      { t: 'p', x: '<b>Hook trong frontmatter</b> skill/agent: đăng ký khi component hoạt động (skill: tồn tại hết phiên; subagent: chỉ khi agent chạy). Hook <code>Stop</code> trong subagent tự đổi thành <code>SubagentStop</code>.' },
      { t: 'widget', name: 'hook-builder', title: 'Trình tạo cấu hình hook cho settings.json' }
    ] },
    { icon: '🛡', title: 'Bảo mật & gỡ lỗi', blocks: [
      { t: 'warn', x: '<b>Hook chạy lệnh shell tùy ý — bạn chịu trách nhiệm.</b> Test trong môi trường an toàn trước khi dùng thật. Output <code>statusLine</code>/<code>fileSuggestion</code> yêu cầu tin cậy workspace. <code>disableAllHooks</code> tôn trọng phân cấp managed settings.' },
      { t: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Xác thực & vệ sinh mọi đầu vào', 'Tin dữ liệu đầu vào mù quáng'],
        ['Trích dẫn biến shell <code>"$VAR"</code>', 'Dùng <code>$VAR</code> không trích dẫn'],
        ['Chặn path traversal (<code>..</code>), dùng đường dẫn tuyệt đối với <code>$CLAUDE_PROJECT_DIR</code>', 'Hardcode đường dẫn, cho phép đường dẫn tùy ý'],
        ['Bỏ qua file nhạy cảm (<code>.env</code>, <code>.git/</code>, khóa)', 'Xử lý mọi file'],
        ['<code>allowedEnvVars</code> rõ ràng cho HTTP hook', 'Lộ mọi biến môi trường cho webhook']
      ] },
      { t: 'steps', items: [
        '<code>claude --debug</code> xem log hook chi tiết; <code>Ctrl+O</code> bật chế độ verbose.',
        'Test độc lập: <code>echo \'{"tool_name":"Bash","tool_input":{"command":"ls -la"}}\' | python3 .claude/hooks/validate-bash.py; echo $?</code>',
        'Cài đặt: <code>mkdir -p ~/.claude/hooks</code>, copy script, <code>chmod +x</code>, khai báo trong settings.json.'
      ] }
    ] }
  ],
  summary: [
    'Năm loại hook: command, http, mcp_tool, prompt, agent; cấu hình trong settings, plugin, frontmatter.',
    'Exit 0 = ổn; exit 2 = chặn (stderr cho Claude); khác = lỗi không chặn.',
    'PreToolUse điều khiển quyền (allow/deny/ask/defer, deny thắng); PostToolUse thêm ngữ cảnh; Stop kiểm tra hoàn thành.',
    'Hook chạy shell tùy ý: xác thực đầu vào, trích dẫn biến, test cô lập.'
  ],
  cards: [
    ['Hook là gì?', 'Hành động tự động (shell/HTTP/MCP/prompt/agent) chạy khi có sự kiện trong Claude Code.'],
    ['Năm loại hook?', 'command, http, mcp_tool, prompt, agent.'],
    ['Exit code 2?', 'Lỗi chặn: chặn thao tác, stderr hiện như lỗi.'],
    ['Exit code 0?', 'Thành công, phân tích JSON stdout.'],
    ['Sự kiện chặn được lệnh công cụ?', 'PreToolUse (allow/deny/ask/defer).'],
    ['Ưu tiên khi nhiều PreToolUse bất đồng?', 'deny &gt; defer &gt; ask &gt; allow.'],
    ['Kiểm tra Claude đã hoàn thành việc chưa?', 'Hook Stop (thường loại prompt).'],
    ['Lưu biến môi trường từ hook?', 'Ghi vào <code>$CLAUDE_ENV_FILE</code> trong SessionStart.'],
    ['Matcher cho nhiều công cụ?', 'Regex: <code>"Edit|Write"</code>; tất cả: <code>"*"</code>.'],
    ['Matcher MCP?', '<code>"mcp__memory__.*"</code>.'],
    ['Tham số quét prompt-based?', '<code>{"ok": false, "reason": …}</code>.'],
    ['Gỡ lỗi hook?', '<code>claude --debug</code>, <code>Ctrl+O</code>; test bằng echo JSON | script.'],
    ['Hook của plugin cần biến?', '<code>${CLAUDE_PLUGIN_ROOT}</code>.'],
    ['Hook trong frontmatter skill chạy khi nào?', 'Khi skill được gọi và giữ đến hết phiên.']
  ],
  quiz: [
    { q: 'Hook muốn CHẶN thao tác công cụ phải:', o: ['exit 0', 'exit 2 (hoặc permissionDecision deny)', 'exit 1', 'in "stop"'], a: 1, e: 'Exit 2 chặn; exit khác là lỗi không chặn.' },
    { q: 'Sự kiện nào xảy ra TRƯỚC khi công cụ chạy?', o: ['PostToolUse', 'PreToolUse', 'Stop', 'SessionEnd'], a: 1, e: 'Dùng để xác thực/sửa input.' },
    { q: 'Để hook tự format file sau khi Claude ghi, dùng:', o: ['PreToolUse/Read', 'PostToolUse với matcher Write|Edit', 'SessionStart', 'Notification'], a: 1, e: 'Sau khi công cụ xong.' },
    { q: 'HTTP hook muốn nội suy biến môi trường vào header cần:', o: ['Không cần gì', 'allowedEnvVars', 'once: true', 'asyncRewake'], a: 1, e: 'Ngăn lộ biến nhạy cảm.' },
    { q: 'Hook nào kiểm tra Claude hoàn thành đủ việc?', o: ['Stop (prompt hook)', 'CwdChanged', 'PreCompact', 'FileChanged'], a: 0, e: 'Đánh giá last_assistant_message.' },
    { q: 'Hai hook PreToolUse trả allow và deny — kết quả:', o: ['allow', 'deny', 'ask', 'ngẫu nhiên'], a: 1, e: 'deny > defer > ask > allow.' },
    { q: 'Khi exit code khác 0 và khác 2:', o: ['Chặn thao tác', 'Tiếp tục, báo lỗi không chặn', 'Dừng phiên', 'Xóa hook'], a: 1, e: 'Lỗi không chặn.' },
    { q: 'Hook nguy hiểm vì:', o: ['Chạy chậm', 'Thực thi lệnh shell tùy ý', 'Tốn token', 'Chỉ chạy trên Mac'], a: 1, e: 'Bạn chịu trách nhiệm cho lệnh cấu hình.' }
  ],
  match: [
    ['PreToolUse', 'Trước khi chạy công cụ'],
    ['PostToolUse', 'Sau khi công cụ thành công'],
    ['Stop', 'Claude hoàn thành phản hồi'],
    ['SessionStart', 'Bắt đầu/tiếp tục phiên'],
    ['exit 2', 'Chặn thao tác'],
    ['CLAUDE_ENV_FILE', 'Lưu biến môi trường']
  ]
}
);
