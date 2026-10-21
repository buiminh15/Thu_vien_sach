// "Claude Code How-To" – Chương 5: MCP (Model Context Protocol).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 5,
  title: 'MCP – Model Context Protocol',
  intro: 'MCP là cách chuẩn hóa để Claude truy cập công cụ, API và dữ liệu <b>thời gian thực</b> bên ngoài (GitHub, database, Slack…). Khác với bộ nhớ (dữ liệu tĩnh, ít đổi), MCP cho truy cập trực tiếp vào dữ liệu đang thay đổi.',
  sections: [
    { icon: '🔌', title: 'Kiến trúc & khi nào dùng', blocks: [
      { t: 'steps', items: [
        'Claude gửi yêu cầu (ví dụ <code>list_issues</code>) tới <b>MCP server</b>.',
        'Server truy vấn/hành động trên <b>dịch vụ ngoài</b>.',
        'Dịch vụ trả dữ liệu → server → Claude xử lý tiếp.'
      ] },
      { t: 'key', x: '<b>Memory</b> = dữ liệu liên tục ít đổi (sở thích, bối cảnh, lịch sử). <b>MCP</b> = dữ liệu sống/thường đổi (issue GitHub hiện tại, truy vấn DB trực tiếp, API). Có thể kết hợp cả hai.' },
      { t: 'widget', name: 'mcp-or-memory', title: 'Tình huống này nên dùng Memory hay MCP?' }
    ] },
    { icon: '🚚', title: 'Giao thức vận chuyển & cài server', blocks: [
      { t: 'table', head: ['Transport', 'Lệnh / ghi chú'], rows: [
        ['<b>http</b> (khuyến nghị)', '<code>claude mcp add --transport http notion https://mcp.notion.com/mcp</code> (+ <code>--header "Authorization: Bearer …"</code>)'],
        ['<b>stdio</b> (cục bộ)', '<code>claude mcp add --transport stdio myserver --env KEY=value -- npx server</code>'],
        ['sse (lỗi thời)', 'Vẫn hỗ trợ, nên chuyển sang http'],
        ['ws (WebSocket)', 'Cấu hình trong <code>.mcp.json</code> hoặc <code>claude mcp add-json</code> (type <code>ws</code>, không OAuth, chỉ xác thực qua header); <code>claude mcp list</code> liệt kê từ v2.1.285']
      ] },
      { t: 'tip', x: 'Windows native (không phải WSL): bọc npx bằng <code>cmd /c</code>: <code>claude mcp add --transport stdio my-server -- cmd /c npx -y @some/package</code>.' },
      { t: 'list', items: [
        '<b>OAuth 2.0</b>: dùng <code>/mcp</code> để đăng nhập qua trình duyệt; cờ <code>--client-id</code>, <code>--client-secret</code>, <code>--callback-port</code> cho thiết lập không tương tác; token lưu trong keychain; <code>oauth.authServerMetadataUrl</code> (https, v2.1.64+) ghi đè metadata discovery.',
        '<b>Connector claude.ai</b> tự có sẵn trong Claude Code (cả chế độ <code>--print</code> từ v2.1.83); tắt bằng <code>ENABLE_CLAUDEAI_MCP_SERVERS=false</code>.',
        '<b>list_changed</b>: server đổi danh sách công cụ → Claude tự cập nhật, không cần kết nối lại. <b>Elicitation</b> (v2.1.49+): server hỏi người dùng giữa chừng.'
      ] },
      { t: 'widget', name: 'mcp-builder', title: 'Trình tạo lệnh <code>claude mcp add</code> và .mcp.json' }
    ] },
    { icon: '🗂', title: 'Phạm vi, quản lý, biến môi trường', blocks: [
      { t: 'table', head: ['Phạm vi', 'Cờ', 'Nơi lưu', 'Chia sẻ', 'Cần chấp thuận'], rows: [
        ['<b>Local</b> (mặc định)', '<code>--scope local</code>', '<code>~/.claude.json</code> theo dự án', 'Chỉ bạn', 'Không'],
        ['<b>Project</b>', '<code>--scope project</code>', '<code>.mcp.json</code> (commit git)', 'Cả nhóm', 'Có, lần đầu'],
        ['<b>User</b>', '<code>--scope user</code>', '<code>~/.claude.json</code>', 'Chỉ bạn, mọi dự án', 'Không']
      ] },
      { t: 'p', x: 'Trùng server ở nhiều phạm vi → cấu hình <b>local</b> thắng. Lệnh quản lý: <code>claude mcp list | get &lt;tên&gt; | remove &lt;tên&gt; | reset-project-choices | add-from-claude-desktop</code>.' },
      { t: 'key', x: 'Biến môi trường trong cấu hình: <code>${VAR}</code> và <code>${VAR:-mặc định}</code> hoạt động trong <code>command</code>, <code>args</code>, <code>env</code>, <code>url</code>, <code>headers</code>. Giữ <code>.mcp.json</code> trong git nhưng bí mật nằm ở biến môi trường. Biến thiếu → server vẫn nạp với chuỗi nguyên văn và <code>claude mcp list</code>/<code>/mcp</code> cảnh báo.' },
      { t: 'list', items: [
        '<b>Prompt MCP → lệnh slash</b>: <code>/mcp__github__review</code>.',
        '<b>Tài nguyên qua @</b>: <code>@database:postgres://mydb/users</code>.',
        '<b>MCP cho subagent</b>: khóa <code>mcpServers:</code> trong frontmatter agent — chỉ agent đó thấy.',
        '<b>Plugin</b> có thể đóng gói MCP (<code>.mcp.json</code> hoặc trong <code>plugin.json</code>), dùng <code>${CLAUDE_PLUGIN_ROOT}</code>.',
        '<code>claude mcp serve</code>: biến chính Claude Code thành MCP server (đa agent: một Claude điều phối Claude khác).'
      ] }
    ] },
    { icon: '📏', title: 'Giới hạn ngữ cảnh', blocks: [
      { t: 'table', head: ['Cơ chế', 'Giá trị'], rows: [
        ['Tool Search', 'Mặc định bật: công cụ MCP được hoãn, khám phá khi cần. <code>ENABLE_TOOL_SEARCH</code>: không đặt/<code>true</code> (hoãn hết), <code>auto</code> (hoãn khi vượt 10% ngữ cảnh), <code>auto:N</code>, <code>false</code>. Cần mô hình hỗ trợ <code>tool_reference</code>; tắt khi <code>ANTHROPIC_BASE_URL</code> trỏ proxy không phải first-party'],
        ['Mô tả công cụ / hướng dẫn server', '4.096 ký tự (nạp sẵn), 16.384 ký tự (qua tool search); <code>CLAUDE_CODE_MAX_MCP_DESCRIPTION_LENGTH</code> (v2.1.280+) thay cả hai. Đặt chi tiết quan trọng gần đầu'],
        ['Đầu ra công cụ', 'Cảnh báo ở 10.000 token; tối đa mặc định 25.000 (lớn hơn → lưu file, đưa đường dẫn); lưu đĩa khi &gt;50.000 ký tự; chỉnh bằng <code>MAX_MCP_OUTPUT_TOKENS</code>']
      ] },
      { t: 'widget', name: 'mcp-bloat', title: 'Context bloat: gọi công cụ trực tiếp vs thực thi code (ví dụ bản ghi chép 2 giờ)' },
      { t: 'p', x: '<b>Vấn đề</b> khi có hàng chục server: (1) mọi định nghĩa công cụ nạp trước; (2) kết quả trung gian đi qua ngữ cảnh — bản ghi chép từ Drive sang Salesforce đi qua mô hình <b>hai lần</b> (50.000+ token). <b>Giải pháp</b> (Anthropic Engineering): agent <b>viết code</b> gọi công cụ MCP như API được gõ trong sandbox; chỉ kết quả cuối về mô hình → ~150.000 → ~2.000 token (giảm <b>98,7%</b>). Lợi ích: nạp công cụ dần, lọc dữ liệu trong môi trường chạy, vòng lặp/điều kiện không round-trip, bảo vệ PII, lưu trạng thái. Đánh đổi: cần sandbox, giám sát, chi phí hạ tầng — với ít server, gọi trực tiếp đơn giản hơn.' },
      { t: 'tip', x: '<b>MCPorter</b>: runtime TypeScript + CLI (<code>npx mcporter list</code>, <code>mcporter call linear.create_comment …</code>, <code>emit-ts</code>, <code>generate-cli</code>) giúp gọi MCP như API được gõ.' }
    ] },
    { icon: '🧪', title: 'Ví dụ thực tế', blocks: [
      { t: 'tabs', items: [
        ['🐙 GitHub', '<code>.mcp.json</code> type http, url <code>https://api.githubcopilot.com/mcp/</code>, header <code>Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}</code>. Công cụ: PR (<code>list_prs</code>, <code>get_pr</code>, <code>create_pr</code>, <code>merge_pr</code>, <code>review_pr</code>), Issue, thông tin repo (<code>search_code</code>), commit. Ví dụ <code>/mcp__github__get_pr 456</code>.'],
        ['🗄 Database', '<code>npx -y @bytebase/dbhub --dsn "${DATABASE_URL}"</code>. <b>Cảnh báo:</b> mặc định chạy được cả UPDATE/DELETE/DROP — dùng DB cục bộ/thử nghiệm. Khuyến nghị: tạo user chỉ <code>SELECT</code> + <code>dbhub.toml</code> với <code>readonly = true</code> (cờ <code>--readonly</code> cũ không còn). Lớp bảo vệ thật là quyền của user DB (lọc theo nội dung SQL từng bị vượt, sửa ở DBHub 0.22.6).'],
        ['📁 Filesystem', '<code>@modelcontextprotocol/server-filesystem /home/user/projects</code>: list, read, write, edit, search, delete.'],
        ['📊 Báo cáo hằng ngày (đa MCP)', 'GitHub (PR metrics) → Database (doanh số) → tổng hợp HTML → Filesystem (lưu) → Slack (đăng #daily-reports).']
      ] },
      { t: 'table', head: ['Server', 'Mục đích', 'Xác thực'], rows: [
        ['Filesystem', 'File I/O', 'Quyền hệ điều hành'],
        ['GitHub', 'PR, issue, commit', 'OAuth'],
        ['Slack', 'Tin nhắn, kênh', 'Token (gói slack chính thức đã ngừng hỗ trợ)'],
        ['Database', 'SQL', 'Credentials'],
        ['Google Docs', 'Tài liệu', 'OAuth'],
        ['Asana / Stripe', 'Dự án / thanh toán', 'API key'],
        ['Memory', 'Bộ nhớ liên tục', 'Cục bộ (không real-time)']
      ] }
    ] },
    { icon: '🛡', title: 'Doanh nghiệp, bảo mật, xử lý sự cố', blocks: [
      { t: 'list', items: [
        '<b>managed-mcp.json</b> (cùng định dạng .mcp.json) triển khai tập server cố định: macOS <code>/Library/Application Support/ClaudeCode/</code>, Linux/WSL <code>/etc/claude-code/</code>, Windows <code>C:\\Program Files\\ClaudeCode\\</code>. Mọi người đọc được file → đừng để credential trong <code>env</code>.',
        '<b>allowedMcpServers / deniedMcpServers</b> là <i>settings key</i> (không phải trường managed-mcp.json); mỗi mục đúng một khóa: <code>serverUrl</code> (có <code>*</code>), <code>serverCommand</code> (mảng đầy đủ), <code>serverName</code> (khớp chính xác). Đặt <code>allowManagedMcpServersOnly: true</code>. Khi khớp cả hai → <b>deny thắng</b>.'
      ] },
      { t: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Biến môi trường cho credential; xoay token (khuyến nghị hàng tháng)', 'Hardcode/commit token, chia sẻ qua chat'],
        ['Token chỉ đọc, quyền tối thiểu, OAuth khi có', 'Dùng token cá nhân cho dự án nhóm'],
        ['Giám sát log, rate limit, test trước production', 'Chạy MCP server bằng quyền root/admin; lộ endpoint công khai'],
        ['Cập nhật gói MCP server, cô lập tiến trình', 'Bỏ qua lỗi xác thực, cache dữ liệu nhạy cảm trong log']
      ] },
      { t: 'tabs', items: [
        ['❌ Không tìm thấy server', '<code>npm list -g @modelcontextprotocol/server-github</code>; cài lại nếu thiếu.'],
        ['🔑 Xác thực thất bại', 'Kiểm tra biến môi trường, scope của token trên GitHub.'],
        ['⏱ Timeout', 'Kiểm tra mạng, endpoint, rate limit, firewall/proxy; tăng timeout.'],
        ['💥 Server crash', 'Xem <code>~/.claude/logs/</code>, biến môi trường, quyền file, xung đột cổng.']
      ] }
    ] }
  ],
  summary: [
    'MCP = kết nối chuẩn tới công cụ/dữ liệu thời gian thực; Memory = dữ liệu tĩnh.',
    'Transport ưu tiên http; stdio cho server cục bộ; phạm vi local/project/user (local thắng).',
    'Tool Search + giới hạn mô tả/đầu ra giảm phình ngữ cảnh; thực thi code còn giảm hơn nữa (~98,7%).',
    'Credential trong biến môi trường, quyền tối thiểu; doanh nghiệp dùng managed-mcp.json + allow/deny list.'
  ],
  cards: [
    ['MCP là gì?', 'Giao thức chuẩn để Claude truy cập công cụ/API/dữ liệu bên ngoài theo thời gian thực.'],
    ['MCP vs Memory?', 'MCP: dữ liệu sống, thay đổi. Memory: ngữ cảnh/sở thích ít đổi.'],
    ['Transport khuyến nghị?', 'http.'],
    ['Server cục bộ?', 'stdio: <code>claude mcp add --transport stdio name -- cmd</code>.'],
    ['Phạm vi mặc định?', 'local (riêng bạn, dự án hiện tại).'],
    ['File chia sẻ cho nhóm?', '<code>.mcp.json</code> (scope project); cần chấp thuận lần đầu.'],
    ['Khi trùng server ở nhiều scope?', 'Cấu hình local ưu tiên.'],
    ['Cú pháp biến có mặc định?', '<code>${VAR:-default}</code>.'],
    ['Prompt MCP gọi thế nào?', '<code>/mcp__server__prompt</code>.'],
    ['Tham chiếu tài nguyên MCP?', '<code>@server:protocol://path</code>.'],
    ['Biến tắt claude.ai connectors?', '<code>ENABLE_CLAUDEAI_MCP_SERVERS=false</code>.'],
    ['Giới hạn đầu ra mặc định?', '25.000 token (cảnh báo ở 10.000); chỉnh <code>MAX_MCP_OUTPUT_TOKENS</code>.'],
    ['Biến Windows npx?', 'Bọc <code>cmd /c npx -y …</code>.'],
    ['Rule deny/allow khớp cả hai?', 'Deny được ưu tiên.'],
    ['Chạy Claude như MCP server?', '<code>claude mcp serve</code>.']
  ],
  quiz: [
    { q: 'Dữ liệu nào phù hợp MCP hơn Memory?', o: ['Sở thích đặt tên biến', 'Issue GitHub đang mở', 'Quy ước commit', 'Phong cách giao tiếp'], a: 1, e: 'Dữ liệu sống, thay đổi liên tục.' },
    { q: 'Scope nào ghi vào .mcp.json?', o: ['local', 'project', 'user', 'managed'], a: 1, e: 'Chia sẻ qua git.' },
    { q: 'Token API nên để:', o: ['Trong .mcp.json dạng chữ thường', 'Trong biến môi trường, tham chiếu ${VAR}', 'Trong CLAUDE.md', 'Trong commit message'], a: 1, e: 'Không hardcode.' },
    { q: 'Với DBHub, lớp bảo vệ thực sự là:', o: ['Cờ --readonly', 'User database chỉ có quyền SELECT', 'Mô tả công cụ', 'Tên server'], a: 1, e: 'Lọc SQL từng bị vượt qua.' },
    { q: 'Cách giảm context bloat khi có hàng chục server:', o: ['Tắt Claude', 'Tool Search + thực thi code gọi MCP', 'Chỉ dùng 1 server', 'Tăng cửa sổ'], a: 1, e: 'Công cụ nạp khi cần, dữ liệu trung gian ở lại sandbox.' },
    { q: 'allowedMcpServers là:', o: ['Trường của managed-mcp.json', 'Settings key', 'Cờ CLI', 'Biến môi trường'], a: 1, e: 'Đặt trong nguồn settings được quản lý.' },
    { q: 'Transport WebSocket (ws) hỗ trợ:', o: ['OAuth', 'Chỉ xác thực qua header', 'Cờ --transport ws', 'Không gì'], a: 1, e: 'Cấu hình qua .mcp.json/add-json.' },
    { q: 'MCP trong frontmatter agent có phạm vi:', o: ['Toàn dự án', 'Chỉ agent đó', 'Chỉ agent cha', 'Toàn máy'], a: 1, e: 'Không chia sẻ với cha/anh em.' }
  ],
  match: [
    ['.mcp.json', 'Cấu hình MCP cho dự án'],
    ['claude mcp serve', 'Chạy Claude như MCP server'],
    ['ENABLE_TOOL_SEARCH', 'Hoãn nạp công cụ MCP'],
    ['MAX_MCP_OUTPUT_TOKENS', 'Giới hạn đầu ra công cụ'],
    ['serverUrl', 'Khóa allow/deny theo URL'],
    ['MCPorter', 'Runtime gọi MCP như API được gõ']
  ]
}
);
