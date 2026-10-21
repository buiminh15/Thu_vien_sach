// "Claude Code How-To" – Chương 4: Tác nhân con (Subagents).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 4,
  title: 'Tác nhân con (Subagents)',
  intro: 'Tác nhân con là trợ lý AI chuyên biệt có cửa sổ ngữ cảnh riêng, prompt hệ thống riêng và quyền công cụ riêng. Claude ủy quyền việc cho chúng rồi tổng hợp kết quả — giữ hội thoại chính sạch và cho phép chạy song song.',
  sections: [
    { icon: '🧩', title: 'Tại sao dùng & khi nào dùng', blocks: [
      { t: 'table', head: ['Lợi ích', 'Ý nghĩa'], rows: [
        ['Bảo tồn ngữ cảnh', 'Việc nặng diễn ra trong ngữ cảnh riêng, chỉ kết quả cô đọng quay về'],
        ['Chuyên môn hóa', 'Prompt hệ thống riêng cho từng lĩnh vực'],
        ['Tái sử dụng', 'Dùng lại giữa dự án, chia sẻ qua git'],
        ['Quyền linh hoạt', 'Mỗi agent một bộ công cụ'],
        ['Mở rộng', 'Nhiều agent chạy song song']
      ] },
      { t: 'table', head: ['Tình huống', 'Dùng subagent?'], rows: [
        ['Tính năng phức tạp nhiều bước', '✅ Tách mối quan tâm'],
        ['Thực thi song song', '✅ Mỗi agent có ngữ cảnh riêng'],
        ['Phân tích dài', '✅ Không cạn ngữ cảnh chính'],
        ['Review nhanh / tác vụ đơn giản một bước', '❌ Thêm độ trễ và chi phí']
      ] },
      { t: 'widget', name: 'subagent-picker', title: 'Tình huống này có nên dùng subagent không? (bấm để thử)' }
    ] },
    { icon: '📁', title: 'Định nghĩa một tác nhân con', blocks: [
      { t: 'p', x: 'File <code>.claude/agents/&lt;tên&gt;.md</code> gồm YAML frontmatter + prompt hệ thống. Trường bắt buộc: <code>name</code> (chữ thường, gạch ngang) và <code>description</code> (thêm “use PROACTIVELY” / “MUST BE USED” để khuyến khích gọi tự động).' },
      { t: 'table', head: ['Ưu tiên', 'Nguồn', 'Phạm vi'], rows: [
        ['1', 'Managed settings', 'Toàn tổ chức'],
        ['2', 'Cờ <code>--agents</code> (JSON)', 'Chỉ phiên'],
        ['3', '<code>.claude/agents/</code>', 'Dự án'],
        ['4', '<code>~/.claude/agents/</code>', 'Mọi dự án'],
        ['5', '<code>agents/</code> của plugin', 'Qua plugin']
      ] },
      { t: 'table', head: ['Trường', 'Tác dụng'], rows: [
        ['<code>tools</code>', 'Danh sách công cụ; bỏ trống = kế thừa tất cả; hỗ trợ <code>Bash(npm:*)</code>, <code>mcp__server__*</code>, <code>Agent(a, b)</code>'],
        ['<code>disallowedTools</code>', 'Công cụ cấm'],
        ['<code>model</code>', '<code>sonnet</code> | <code>opus</code> | <code>haiku</code> | ID đầy đủ | <code>inherit</code>'],
        ['<code>permissionMode</code>', '<code>default</code>, <code>acceptEdits</code>, <code>dontAsk</code>, <code>bypassPermissions</code>, <code>plan</code>, <code>auto</code> (bị bỏ qua nếu agent cha chạy bypassPermissions/acceptEdits/auto)'],
        ['<code>maxTurns</code>', 'Giới hạn số lượt'],
        ['<code>skills</code>', 'Nhồi toàn bộ nội dung skill vào ngữ cảnh lúc khởi động'],
        ['<code>mcpServers</code>, <code>hooks</code>', 'MCP server / hook chỉ chạy khi agent hoạt động'],
        ['<code>memory</code>', 'Bộ nhớ lâu dài: <code>user</code> | <code>project</code> | <code>local</code>'],
        ['<code>background</code>', 'true = luôn chạy nền'],
        ['<code>effort</code>', 'low / medium / high / max'],
        ['<code>isolation: worktree</code>', 'Git worktree riêng'],
        ['<code>initialPrompt</code>', 'Lượt đầu tự gửi khi agent là luồng chính']
      ] },
      { t: 'tip', x: 'Cách dễ nhất: nói “Tạo một tác nhân con để review bảo mật”. Claude viết file giúp bạn. (Trình hướng dẫn <code>/agents</code> đã bị gỡ ở v2.1.198; <code>claude agents</code> giờ mở agent view cho phiên nền.)' },
      { t: 'widget', name: 'agent-builder', title: 'Trình tạo file tác nhân con' }
    ] },
    { icon: '🧱', title: 'Tác nhân tích hợp sẵn', blocks: [
      { t: 'tabs', items: [
        ['🛠 general-purpose', 'Kế thừa mô hình, mọi công cụ. Việc nghiên cứu phức tạp, đa bước, chỉnh sửa code.'],
        ['🗺 Plan', 'Công cụ Read, Glob, Grep, Bash. Tự dùng trong chế độ lập kế hoạch để nghiên cứu codebase.'],
        ['🔎 Explore', 'Chỉ đọc nghiêm ngặt, nhanh. Mức độ: <b>quick</b>, <b>medium</b> (mặc định), <b>very thorough</b>.'],
        ['🤖 claude', 'Agent dự phòng khi không khớp agent chuyên biệt; mặc định cho phiên nền được điều phối.'],
        ['📊 statusline-setup', 'Sonnet; chạy khi dùng <code>/statusline</code>.'],
        ['📖 claude-code-guide', 'Haiku, chỉ đọc; trả lời câu hỏi về tính năng Claude Code.']
      ] }
    ] },
    { icon: '▶️', title: 'Cách gọi & các chế độ chạy', blocks: [
      { t: 'steps', items: [
        '<b>Tự động</b>: Claude khớp yêu cầu với <code>description</code>.',
        '<b>Rõ ràng</b>: “Use the test-runner subagent to fix failing tests”.',
        '<b>@-mention</b>: <code>@"code-reviewer (agent)" review the auth module</code> — bỏ qua heuristic ủy quyền.',
        '<b>Cả phiên</b>: <code>claude --agent code-reviewer</code> hoặc <code>{"agent": "code-reviewer"}</code> trong settings.json.',
        '<b>Tiếp tục</b>: Resume agent <i>agentId</i> để giữ nguyên ngữ cảnh. <b>Chuỗi</b>: “dùng A tìm vấn đề, rồi dùng B sửa”.'
      ] },
      { t: 'list', items: [
        '<b>Nền</b>: <code>background: true</code>; <code>Ctrl+B</code> đưa tác vụ đang chạy xuống nền; <code>Ctrl+X Ctrl+K</code> dừng tất cả (2 lần trong 3 giây); tắt hẳn bằng <code>CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=1</code>.',
        '<b>Worktree</b>: <code>isolation: worktree</code> — không thay đổi thì tự dọn; có thay đổi thì trả đường dẫn + tên nhánh.',
        '<b>Bộ nhớ</b>: 200 dòng đầu MEMORY.md tự nạp; tự bật Read/Write/Edit.',
        '<b>Hạn chế spawn</b>: <code>tools: Agent(worker, researcher), Read, Bash</code> cho agent chạy bằng <code>--agent</code> (<code>Task</code> nay là <code>Agent</code>, v2.1.63).'
      ] },
      { t: 'warn', x: 'Subagent <b>không thể tạo subagent khác</b>. Subagent của plugin <b>không được</b> dùng <code>hooks</code>, <code>mcpServers</code>, <code>permissionMode</code> (ngăn leo thang đặc quyền). Bản ghi nằm tại <code>~/.claude/projects/{project}/{sessionId}/subagents/agent-{id}.jsonl</code>; tự nén ngữ cảnh ở ~95% (<code>CLAUDE_AUTOCOMPACT_PCT_OVERRIDE</code>).' }
    ] },
    { icon: '👥', title: 'Agent Teams (thử nghiệm)', blocks: [
      { t: 'p', x: 'Điều phối <b>nhiều phiên Claude Code</b> chạy cùng nhau; đồng đội có ngữ cảnh riêng, liên lạc qua <b>mailbox</b> và dùng <b>danh sách việc chung</b> có quản lý phụ thuộc. Bật bằng <code>CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code> (v2.1.32+).' },
      { t: 'table', head: ['', 'Subagents', 'Agent Teams'], rows: [
        ['Mô hình', 'Cha giao việc, chờ kết quả', 'Trưởng nhóm giao, đồng đội làm độc lập'],
        ['Ngữ cảnh', 'Mới mỗi nhiệm vụ', 'Mỗi đồng đội có ngữ cảnh riêng liên tục'],
        ['Giao tiếp', 'Chỉ giá trị trả về', 'Nhắn tin qua mailbox'],
        ['Tốt cho', 'Nhiệm vụ nhỏ rõ ràng', 'Dự án nhiều file làm song song']
      ] },
      { t: 'list', items: [
        'Hiển thị: <code>--teammate-mode auto|in-process|tmux</code> (split-pane cần tmux/iTerm2, không có ở terminal VS Code, Windows Terminal, Ghostty).',
        'Cấu hình: <code>~/.claude/teams/{team}/config.json</code>; hook mới <code>TeammateIdle</code>, <code>TaskCompleted</code>.',
        'Nên: 3–5 đồng đội, mỗi tác vụ 5–15 phút, giao file/thư mục khác nhau để tránh xung đột merge, bắt đầu bằng in-process.',
        'Hạn chế: không resume đồng đội, một đội/phiên, không đội lồng nhau, không đổi trưởng nhóm.'
      ] }
    ] },
    { icon: '✅', title: 'Thực hành tốt & ví dụ', blocks: [
      { t: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Bắt đầu từ agent do Claude tạo rồi tinh chỉnh', 'Hai agent trùng vai trò'],
        ['Mỗi agent một trách nhiệm', 'Trộn nhiều mối quan tâm'],
        ['Chỉ cấp công cụ cần thiết (bắt đầu hạn chế)', 'Cấp quyền thừa'],
        ['Prompt chi tiết: vai trò, ưu tiên, định dạng đầu ra, các bước', 'Dùng cho tác vụ đơn giản một bước'],
        ['Commit agent dự án vào git', 'Quên truyền ngữ cảnh cần thiết']
      ] },
      { t: 'tabs', items: [
        ['🔍 code-reviewer', 'Read, Grep, Glob, Bash — bảo mật, hiệu năng, bảo trì, test coverage.'],
        ['🧪 test-engineer', 'Read, Write, Bash, Grep — unit/integration, ca biên, coverage &gt;80%.'],
        ['📝 documentation-writer', 'Read, Write, Grep — tài liệu API, hướng dẫn, kiến trúc.'],
        ['🔒 secure-reviewer', 'Chỉ Read, Grep — kiểm toán bảo mật, không sửa file.'],
        ['🏗 implementation-agent', 'Read, Write, Edit, Bash, Grep, Glob — làm tính năng đầu-cuối.'],
        ['🐞 debugger', 'Read, Edit, Bash, Grep, Glob — nguyên nhân gốc, sửa tối thiểu.'],
        ['📈 data-scientist', 'Bash, Read, Write — SQL, BigQuery, phân tích dữ liệu.']
      ] },
      { t: 'key', x: 'So sánh nhanh — Tự gọi / ngữ cảnh cô lập: Lệnh slash (Không/Không), <b>Subagent (Có/Có)</b>, Skill (Có/Không), Bộ nhớ (luôn nạp/Không), MCP (Có, truy cập ngoài).' }
    ] }
  ],
  summary: [
    'Subagent = trợ lý chuyên biệt, ngữ cảnh riêng, chỉ trả kết quả cô đọng.',
    'File <code>.claude/agents/*.md</code>: name + description bắt buộc; giới hạn <code>tools</code>.',
    'Gọi: tự động, rõ ràng, @-mention, <code>--agent</code>; chạy nền, worktree, bộ nhớ riêng.',
    'Subagent không spawn subagent; Agent Teams là phiên độc lập liên lạc qua mailbox (thử nghiệm).'
  ],
  cards: [
    ['Subagent là gì?', 'Trợ lý AI chuyên biệt có cửa sổ ngữ cảnh, prompt hệ thống và công cụ riêng.'],
    ['Hai trường bắt buộc?', '<code>name</code> và <code>description</code>.'],
    ['Khuyến khích gọi tự động?', 'Thêm “use PROACTIVELY” / “MUST BE USED” vào description.'],
    ['Ưu tiên nguồn agent?', 'managed &gt; --agents CLI &gt; dự án &gt; người dùng &gt; plugin.'],
    ['Agent chỉ-đọc nhanh?', 'Explore (quick / medium / very thorough).'],
    ['@-mention agent?', '<code>@"code-reviewer (agent)" …</code>.'],
    ['Chạy cả phiên bằng agent?', '<code>claude --agent &lt;tên&gt;</code> hoặc <code>agent</code> trong settings.'],
    ['Đưa agent xuống nền?', '<code>Ctrl+B</code> hoặc <code>background: true</code>.'],
    ['Cô lập thay đổi code?', '<code>isolation: worktree</code>.'],
    ['Memory scope?', '<code>user</code>, <code>project</code>, <code>local</code>.'],
    ['Giới hạn agent có thể spawn?', '<code>tools: Agent(a, b)</code> với <code>claude --agent</code>.'],
    ['Subagent spawn được subagent?', 'Không.'],
    ['Agent Teams bật bằng?', '<code>CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1</code>.'],
    ['Trường cấm với agent của plugin?', 'hooks, mcpServers, permissionMode.']
  ],
  quiz: [
    { q: 'Lợi ích chính của subagent:', o: ['Nhanh hơn luôn luôn', 'Giữ ngữ cảnh chính sạch nhờ ngữ cảnh riêng', 'Miễn phí', 'Không cần prompt'], a: 1, e: 'Ngữ cảnh cô lập, chỉ kết quả trở về.' },
    { q: 'Agent kiểm toán bảo mật không được sửa file nên có công cụ:', o: ['Read, Grep', 'Write, Edit', 'Tất cả', 'Bash chỉ'], a: 0, e: 'Quyền tối thiểu.' },
    { q: 'Subagent có thể tạo subagent khác?', o: ['Có', 'Không', 'Chỉ Opus', 'Chỉ nền'], a: 1, e: 'Không tạo lồng nhau.' },
    { q: 'Việc nào KHÔNG nên dùng subagent?', o: ['Phân tích dài', 'Việc song song', 'Tác vụ đơn giản một bước', 'Tính năng nhiều bước'], a: 2, e: 'Chi phí và độ trễ thừa.' },
    { q: 'Agent Teams khác subagent ở:', o: ['Không khác', 'Phiên độc lập, nhắn tin qua mailbox', 'Chạy chậm hơn', 'Chỉ chạy tuần tự'], a: 1, e: 'Mailbox + danh sách việc chung.' },
    { q: 'Agent của plugin KHÔNG được dùng:', o: ['tools', 'description', 'hooks', 'model'], a: 2, e: 'hooks, mcpServers, permissionMode bị cấm.' },
    { q: 'Cách bảo đảm đúng agent được gọi:', o: ['Hy vọng', '@-mention', 'Đổi tên', 'Restart'], a: 1, e: 'Bỏ qua heuristic ủy quyền.' },
    { q: 'Số đồng đội khuyến nghị:', o: ['1', '3–5', '10–20', 'Không giới hạn'], a: 1, e: 'Điều phối tối ưu.' }
  ],
  match: [
    ['Explore', 'Agent chỉ đọc, tìm kiếm nhanh'],
    ['isolation: worktree', 'Git worktree riêng'],
    ['Ctrl+B', 'Đưa tác vụ xuống nền'],
    ['Mailbox', 'Nhắn tin giữa đồng đội'],
    ['memory: project', '.claude/agent-memory/'],
    ['--agents', 'Định nghĩa agent JSON cho một phiên']
  ]
}
);
