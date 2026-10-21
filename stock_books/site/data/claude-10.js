// "Claude Code How-To" – Chương 10: Nâng cao (2): giao diện, từ xa, worktree, sandbox, quản trị, cấu hình.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 10,
  title: 'Nâng cao (2): Phím tắt, Từ xa, Worktree, Sandbox, Quản trị, Cấu hình',
  intro: 'Tính năng tương tác (phím tắt, keybindings, vim, chế độ bash, giọng nói), mở rộng môi trường (Channels, Chrome, Remote Control, Web, Desktop), cô lập (worktree, sandbox) và quản trị (managed settings, biến môi trường).',
  sections: [
    { icon: '⌨️', title: 'Phím tắt & tương tác', blocks: [
      { t: 'widget', name: 'shortcut-quiz', title: 'Luyện phím tắt: ghép tổ hợp phím với chức năng' },
      { t: 'table', head: ['Phím', 'Chức năng'], rows: [
        ['<code>Ctrl+C</code> / <code>Ctrl+D</code>', 'Hủy nhập/sinh / Thoát (không đổi được)'],
        ['<code>Ctrl+G</code>', 'Sửa kế hoạch trong editor ngoài'],
        ['<code>Ctrl+L</code>', 'Vẽ lại màn hình (chỉ repaint; nhấn đúp để /clear đã gỡ ở v2.1.238)'],
        ['<code>Ctrl+O</code>', 'Bật verbose (xem suy luận)'],
        ['<code>Ctrl+R</code>', 'Tìm ngược lịch sử'],
        ['<code>Ctrl+T</code>', 'Bật/tắt danh sách tác vụ'],
        ['<code>Ctrl+B</code>', 'Đưa tác vụ xuống nền'],
        ['<code>Esc+Esc</code>', 'Rewind code/hội thoại'],
        ['<code>Shift+Tab</code> / <code>Alt+M</code>', 'Đổi chế độ quyền'],
        ['<code>Option/Alt+P</code>, <code>Option/Alt+T</code>', 'Đổi mô hình / bật suy luận mở rộng']
      ] },
      { t: 'list', items: [
        'Soạn dòng kiểu readline: <code>Ctrl+A/E</code> đầu/cuối dòng, <code>Ctrl+K/U</code> cắt, <code>Ctrl+W</code> xóa từ, <code>Ctrl+Y</code> dán, <code>Tab</code> hoàn thành, mũi tên lên/xuống lịch sử.',
        'Nhập nhiều dòng: <code>\\</code> + Enter, Option+Enter (macOS), Shift+Enter, hoặc Ctrl+J. Không có terminator — Enter để gửi.',
        '<b>Bash mode</b>: tiền tố <code>!</code> chạy shell trực tiếp (<code>! npm test</code>). <b>Vim mode</b>: bật bằng <code>/config</code> (lệnh <code>/vim</code> đã gỡ); NORMAL/INSERT, h j k l w b e 0 $ gg G, text object iw aw i" a" i( a(.',
        '<b>Prompt suggestions</b>: gợi ý mờ dựa trên git và hội thoại; Tab chấp nhận, Enter chấp nhận + gửi; tắt <code>CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION=false</code>.',
        '<b>Task list</b> bền qua nén ngữ cảnh (<code>Ctrl+T</code>); dùng chung nhiều phiên qua <code>CLAUDE_CODE_TASK_LIST_ID</code>.',
        '<b>Giọng nói</b> <code>/voice</code>: push-to-talk, 20 ngôn ngữ, cần tài khoản Claude.ai, đổi phím trong <code>/keybindings</code>.'
      ] },
      { t: 'key', x: '<b>Keybindings tùy chỉnh</b> (v2.1.18+): <code>/keybindings</code> mở <code>~/.claude/keybindings.json</code>. Cấu trúc <code>bindings: [{ context, bindings: { "ctrl+e": "chat:externalEditor", "ctrl+u": null } }]</code> — <code>null</code> để bỏ phím mặc định; hỗ trợ chord <code>"ctrl+k ctrl+s"</code>. Bối cảnh: Chat, Confirmation, Global, Autocomplete, HistorySearch, Settings, Tabs, Help… (tổng 18). Không rebind được Ctrl+C, Ctrl+D; xung đột terminal: Ctrl+B (tmux), Ctrl+A (screen), Ctrl+Z (suspend). Uppercase = Shift; <code>cmd</code> khác <code>meta</code>.' }
    ] },
    { icon: '🌐', title: 'Channels, Chrome, từ xa, web, desktop', blocks: [
      { t: 'tabs', items: [
        ['📡 Channels (Research Preview)', 'MCP server đẩy tin nhắn vào phiên đang chạy: <code>claude --channels plugin:discord@claude-plugins-official plugin:telegram@…</code>. Doanh nghiệp: <code>channelsEnabled: true</code> + <code>allowedChannelPlugins</code>.'],
        ['🧭 Chrome (beta, v2.0.73+)', '<code>claude --chrome</code> / <code>--no-chrome</code> / <code>/chrome</code>. Gỡ lỗi trực tiếp (console, DOM), kiểm thiết kế, form, app đã đăng nhập, trích dữ liệu, ghi GIF. Quyền theo từng site qua extension; dừng chờ khi gặp login/CAPTCHA. Hạn chế: không có trên WSL, không hỗ trợ Bedrock/Vertex/Foundry.'],
        ['📱 Remote Control (v2.1.51+)', 'Tiếp tục phiên cục bộ từ điện thoại/trình duyệt; vẫn chạy trên máy bạn. <code>claude remote-control --name "…"</code> hoặc <code>/remote-control</code>. Kết nối: URL, mã QR (phím cách), tìm tên trên claude.ai/code/ứng dụng di động. Không mở cổng vào, chỉ HTTPS ra, token ngắn hạn. v2.1.300: không còn <code>--sandbox</code>/<code>--no-sandbox</code>; dùng <code>sandbox.enabled</code> trong settings. Phải mở terminal; chế độ server <code>--capacity</code> mặc định 32.'],
        ['☁️ Web sessions', '<code>claude --cloud "…"</code> (bí danh cũ <code>--remote</code>) tạo phiên trên claude.ai; <code>claude --teleport</code> hoặc <code>/teleport</code> kéo về terminal.'],
        ['🖥 Desktop', 'macOS/Windows: xem diff từng file kèm bình luận, preview app (<code>.claude/launch.json</code>), giám sát PR + tự sửa CI, phiên song song (worktree), tác vụ lịch, connectors (GitHub, Slack, Linear, Notion, Asana, Calendar; không cho phiên cloud). <code>/desktop</code> chuyển phiên CLI sang. Phiên SSH cần Claude Code trên máy từ xa.']
      ] },
      { t: 'table', head: ['', 'Remote Control', 'Claude Code on Web'], rows: [
        ['Chạy ở', 'Máy của bạn', 'Cloud Anthropic'],
        ['Công cụ cục bộ', 'Đủ MCP/file/CLI', 'Không phụ thuộc cục bộ'],
        ['Dùng khi', 'Tiếp tục việc cục bộ từ thiết bị khác', 'Bắt đầu mới từ bất kỳ trình duyệt']
      ] }
    ] },
    { icon: '🧱', title: 'Worktree & Sandbox', blocks: [
      { t: 'p', x: '<b>Git worktree</b>: <code>claude --worktree</code> (<code>-w</code>) chạy trong worktree riêng tại <code>&lt;repo&gt;/.claude/worktrees/&lt;name&gt;</code>; làm song song không cần stash/đổi nhánh. Monorepo: <code>worktree.sparsePaths</code> (sparse checkout). Công cụ <code>ExitWorktree</code>; hook <code>WorktreeCreate</code>/<code>WorktreeRemove</code>; không thay đổi → tự dọn khi kết thúc phiên.' },
      { t: 'p', x: '<b>Sandbox</b>: cô lập filesystem và mạng ở mức hệ điều hành cho lệnh Bash — lớp bổ sung cho quy tắc quyền (phòng thủ nhiều lớp). Bật: <code>/sandbox</code> (lưu vào settings.local.json), <code>"sandbox": {"enabled": true}</code> trong settings, hoặc theo phiên <code>claude --settings \'{"sandbox":{"enabled":true}}\'</code>. Không có cờ <code>--sandbox</code>.' },
      { t: 'table', head: ['Setting sandbox', 'Tác dụng'], rows: [
        ['<code>sandbox.enabled</code>', 'Bật/tắt'],
        ['<code>sandbox.failIfUnavailable</code>', 'Lỗi nếu không bật được'],
        ['<code>sandbox.filesystem.allowWrite / allowRead / denyRead</code>', 'Đường dẫn được ghi / đọc / cấm đọc (vd cấm <code>~/.ssh</code>, <code>~/.aws</code>)'],
        ['<code>sandbox.enableWeakerNetworkIsolation</code>', 'macOS: <b>làm yếu</b> cách ly mạng, chỉ cho công cụ như Go CLI sau proxy MITM']
      ] },
      { t: 'tip', x: 'Dùng sandbox cho: chạy code lạ/sinh ra an toàn, ngăn sửa nhầm ngoài dự án, hạn chế mạng khi tự động hóa.' }
    ] },
    { icon: '🏢', title: 'Managed settings (doanh nghiệp)', blocks: [
      { t: 'table', head: ['Nền tảng', 'Cách triển khai', 'Từ'], rows: [
        ['macOS', 'Managed plist (MDM)', 'v2.1.51'],
        ['Windows', 'Registry', 'v2.1.51'],
        ['Đa nền tảng', 'File managed-settings.json', 'v2.1.51'],
        ['Đa nền tảng', 'Drop-in <code>managed-settings.d/</code> (gộp theo bảng chữ cái: <code>00-org-defaults.json</code>, <code>10-team-policies.json</code>…)', 'v2.1.83']
      ] },
      { t: 'list', items: [
        'Thư mục hệ thống: macOS <code>/Library/Application Support/ClaudeCode/</code>, Linux <code>/etc/claude-code/</code>, Windows <code>C:\\Program Files\\ClaudeCode\\</code>.',
        'Khóa phổ biến: <code>permissions.disableBypassPermissionsMode: "disable"</code>, <code>availableModels</code>, <code>allowedChannelPlugins</code>, <code>autoMode.environment</code>.'
      ] }
    ] },
    { icon: '⚙️', title: 'Cấu hình & biến môi trường', blocks: [
      { t: 'p', x: 'Thứ tự file: người dùng <code>~/.claude/settings.json</code>, dự án <code>.claude/settings.json</code>, cục bộ <code>.claude/settings.local.json</code>, managed. MCP server <b>không</b> phải khóa settings — đặt trong <code>.mcp.json</code>. Hook nhận input JSON qua stdin (không có <code>${file_path}</code>). <code>/config</code> mở menu tương tác (thinking, verbose, chế độ quyền, mô hình).' },
      { t: 'widget', name: 'env-lookup', title: 'Tra cứu biến môi trường quan trọng (gõ từ khóa)' },
      { t: 'table', head: ['Thực hành tốt', ''], rows: [
        ['Plan: nhiệm vụ nhiều bước, duyệt trước', 'Đừng dùng cho việc đơn giản'],
        ['Thinking: quyết định kiến trúc, xem lại suy luận', 'Đừng dùng cho truy vấn đơn giản'],
        ['Nền: xử lý lỗi, theo dõi tiến trình', 'Đừng chạy quá nhiều đồng thời'],
        ['Quyền: <code>plan</code> để review, <code>default</code> để tương tác, <code>acceptEdits</code> để tự động, <code>auto</code> khi cần tự chủ có rào', 'Đừng dùng <code>bypassPermissions</code> trừ khi bắt buộc']
      ] }
    ] }
  ],
  summary: [
    'Phím tắt: Esc+Esc rewind, Shift+Tab đổi quyền, Ctrl+B nền, Ctrl+T tác vụ, Ctrl+O verbose; keybindings.json cho tùy biến.',
    'Mở rộng: Channels, Chrome, Remote Control (chạy trên máy bạn), Web (cloud), Desktop.',
    'Cô lập: worktree (--worktree) và sandbox (OS-level) bổ sung cho quy tắc quyền.',
    'Quản trị: managed settings (plist/Registry/files/drop-ins); MCP đặt trong .mcp.json.'
  ],
  cards: [
    ['Sửa kế hoạch trong editor?', '<code>Ctrl+G</code>.'],
    ['Bật verbose?', '<code>Ctrl+O</code>.'],
    ['Tìm lịch sử ngược?', '<code>Ctrl+R</code>.'],
    ['Chạy shell trực tiếp?', 'Tiền tố <code>!</code>.'],
    ['Mở keybindings?', '<code>/keybindings</code> (v2.1.18+).'],
    ['Phím không rebind được?', 'Ctrl+C, Ctrl+D.'],
    ['Remote Control chạy ở đâu?', 'Trên máy của bạn (không lên cloud).'],
    ['Phiên web → terminal?', '<code>claude --teleport</code> / <code>/teleport</code>.'],
    ['Tạo phiên web từ CLI?', '<code>claude --cloud "…"</code> (--remote là bí danh cũ).'],
    ['Worktree?', '<code>claude -w</code> → <code>.claude/worktrees/&lt;name&gt;</code>.'],
    ['Bật sandbox?', '<code>/sandbox</code> hoặc <code>sandbox.enabled</code>.'],
    ['Cấm đọc khóa SSH trong sandbox?', '<code>sandbox.filesystem.denyRead</code>.'],
    ['Drop-in managed settings?', '<code>managed-settings.d/</code> (v2.1.83+), gộp theo bảng chữ cái.'],
    ['Chặn bypassPermissions?', '<code>permissions.disableBypassPermissionsMode: "disable"</code>.'],
    ['Task list dùng chung giữa phiên?', '<code>CLAUDE_CODE_TASK_LIST_ID</code>.']
  ],
  quiz: [
    { q: 'Phím mở giao diện rewind:', o: ['Ctrl+Z', 'Esc+Esc', 'Ctrl+L', 'Ctrl+T'], a: 1, e: 'Hoặc /rewind.' },
    { q: 'Remote Control khác Claude Code on Web ở chỗ:', o: ['Chạy trên máy bạn', 'Chạy trên cloud', 'Không có QR', 'Không bảo mật'], a: 0, e: 'Web chạy trên cloud Anthropic.' },
    { q: 'Cờ bật worktree:', o: ['--branch', '--worktree', '--isolate', '--tree'], a: 1, e: 'Hoặc -w.' },
    { q: 'MCP server cấu hình ở đâu?', o: ['settings.json khóa mcp', '.mcp.json', 'CLAUDE.md', 'keybindings.json'], a: 1, e: 'Không phải khóa settings.' },
    { q: 'Sandbox bổ sung cho:', o: ['Quy tắc quyền (phòng thủ nhiều lớp)', 'Thay thế quy tắc quyền', 'Không gì', 'Hook'], a: 0, e: 'Cách ly mức OS cho Bash.' },
    { q: 'Cách đặt nhiều policy managed theo module:', o: ['Một file duy nhất', 'managed-settings.d/ (alphabetical)', 'CLAUDE.md', 'plugin'], a: 1, e: 'Drop-in từ v2.1.83.' },
    { q: 'Ctrl+B có thể xung đột với:', o: ['Vim', 'Tmux prefix', 'Git', 'npm'], a: 1, e: 'Ctrl+A xung đột GNU Screen.' },
    { q: 'Dùng ! ở đầu prompt để:', o: ['Phủ định', 'Chạy lệnh bash', 'Ghi nhớ', 'Gọi skill'], a: 1, e: 'Bash mode.' }
  ],
  match: [
    ['/keybindings', 'Mở keybindings.json'],
    ['claude --cloud', 'Tạo phiên web (bí danh cũ --remote)'],
    ['claude --teleport', 'Kéo phiên web về terminal'],
    ['sparsePaths', 'Sparse checkout monorepo trong worktree'],
    ['denyRead', 'Cấm đọc đường dẫn trong sandbox'],
    ['availableModels', 'Giới hạn mô hình người dùng chọn']
  ]
}
);
