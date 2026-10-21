// "Claude Code How-To" – Chương 11: Tham chiếu CLI.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 11,
  title: 'Tham chiếu CLI và tự động hóa',
  intro: 'CLI <code>claude</code> là cửa chính: REPL tương tác, chế độ in (<code>-p</code>) cho script/CI, quản lý phiên, chọn mô hình, system prompt, quyền công cụ, định dạng đầu ra và nhiều cờ nâng cao. Chương này là bảng tra cứu và các công thức dùng thực tế.',
  sections: [
    { icon: '🧭', title: 'Lệnh & cờ cốt lõi', blocks: [
      { t: 'table', head: ['Lệnh', 'Mô tả'], rows: [
        ['<code>claude</code> / <code>claude "query"</code>', 'REPL tương tác (có thể kèm prompt đầu)'],
        ['<code>claude -p "query"</code>', 'Chế độ in: hỏi rồi thoát'],
        ['<code>cat file | claude -p "…"</code>', 'Xử lý nội dung qua pipe'],
        ['<code>claude -c</code>, <code>claude -c -p "…"</code>', 'Tiếp tục hội thoại gần nhất (tương tác / in)'],
        ['<code>claude -r "&lt;session&gt;" "query"</code>', 'Resume theo ID hoặc tên'],
        ['<code>claude update</code>', 'Cập nhật'],
        ['<code>claude mcp</code> / <code>claude mcp serve</code>', 'Cấu hình MCP / chạy Claude như MCP server'],
        ['<code>claude agents</code>', 'Mở agent view cho phiên nền (README gốc có ghi “liệt kê subagents” – xem chương 4)'],
        ['<code>claude auto-mode defaults</code>', 'In quy tắc auto mode mặc định (JSON)'],
        ['<code>claude remote-control [--name]</code>', 'Server Remote Control (nhiều phiên, <code>--capacity</code> 32); <code>--rc</code> cho phiên tương tác'],
        ['<code>claude plugin …</code>', 'Quản lý plugin'],
        ['<code>claude auth login|logout|status</code>', 'Đăng nhập (<code>--email</code>, <code>--sso</code>) / xuất / kiểm tra (exit 0 nếu đã đăng nhập)']
      ] },
      { t: 'widget', name: 'cli-builder', title: 'Trình ghép lệnh <code>claude</code>: chọn mục tiêu để sinh lệnh' },
      { t: 'tabs', items: [
        ['🔖 Phiên & worktree', '<code>-p</code>, <code>-c</code>, <code>-r</code>, <code>-n/--name</code>, <code>-w/--worktree</code> (+ <code>--tmux</code>), <code>--from-pr 42</code> (resume phiên gắn với PR), <code>--session-id UUID</code>, <code>--fork-session</code>, <code>--no-session-persistence</code>.'],
        ['☁️ Từ xa', '<code>--cloud [mô tả|id|url]</code> tạo/gắn phiên cloud; <code>--remote</code> là <b>bí danh không dùng nữa</b> của <code>--cloud</code> (chương 10 dùng tên cũ); <code>--teleport</code>, <code>--remote-control/--rc</code>, <code>--teammate-mode</code>, <code>--chrome/--no-chrome</code>, <code>--ide</code>, <code>--channels plugin:&lt;name&gt;@&lt;marketplace&gt;</code> (tên trần bị từ chối).'],
        ['🧪 Tối thiểu & khởi tạo', '<code>--bare</code> (bỏ hooks, skills, plugins, MCP, auto memory, CLAUDE.md; đặt <code>CLAUDE_CODE_SIMPLE</code>), <code>--disable-slash-commands</code>, <code>--init</code>/<code>--init-only</code>/<code>--maintenance</code> (hook Setup, chỉ với <code>-p</code>), <code>--enable-auto-mode</code>.']
      ] }
    ] },
    { icon: '🤖', title: 'Mô hình, system prompt, quyền công cụ', blocks: [
      { t: 'table', head: ['Nhóm', 'Cờ', 'Ghi chú'], rows: [
        ['Mô hình', '<code>--model</code> (sonnet | opus | haiku | tên đầy đủ | opusplan), <code>--fallback-model</code>, <code>--effort</code>', 'Haiku 5.5 trên Anthropic API từ v2.1.293 (Haiku 4.5 trên Bedrock/Vertex/Foundry)'],
        ['System prompt', '<code>--system-prompt</code> (thay thế), <code>--system-prompt-file</code> (thay thế từ file, v2.1.69+), <code>--append-system-prompt</code> (thêm vào)', 'Dùng được cả tương tác và in'],
        ['Công cụ', '<code>--tools "Read,Grep,Glob"</code> (giới hạn), <code>--allowedTools "Bash(git log:*)"</code> (khỏi hỏi), <code>--disallowedTools "Bash(rm:*)"</code> (bỏ khỏi ngữ cảnh)', 'Cú pháp <code>Bash(lệnh:*)</code>'],
        ['Quyền', '<code>--permission-mode</code>, <code>--permission-prompt-tool</code> (công cụ MCP xử lý quyền), <code>--dangerously-skip-permissions</code>', 'Cái cuối chỉ cho tự động hóa, cẩn thận']
      ] },
      { t: 'tip', x: 'Ví dụ an toàn: <code>claude --permission-mode plan --tools "Read,Grep,Glob" "audit this codebase for security vulnerabilities"</code>; chặn nguy hiểm: <code>claude --disallowedTools "Bash(rm -rf:*)" "Bash(git push --force:*)"</code>.' },
      { t: 'key', x: '<b>--agents</b> (JSON): <code>{"tên": {"description", "prompt", "tools"?, "model"?}}</code>. Ưu tiên: CLI &gt; … (README này ghi user &gt; project, còn chương 4 ghi project &gt; user — khi trùng tên hãy kiểm tra thực tế hoặc đổi tên).' },
      { t: 'widget', name: 'perm-cli', title: 'Soạn quy tắc <code>--allowedTools</code> / <code>--disallowedTools</code>' }
    ] },
    { icon: '📤', title: 'Đầu ra, workspace, MCP, debug', blocks: [
      { t: 'table', head: ['Cờ', 'Tác dụng'], rows: [
        ['<code>--output-format</code> text | json | stream-json', 'Định dạng đầu ra (in)'],
        ['<code>--input-format</code> text | stream-json', 'Định dạng đầu vào'],
        ['<code>--include-partial-messages</code>', 'Sự kiện streaming (cần stream-json)'],
        ['<code>--json-schema</code>', 'Xác thực đầu ra theo schema (kết quả ở <code>.structured_output</code>; văn bản ở <code>.result</code>)'],
        ['<code>--max-turns N</code>', 'Giới hạn lượt agentic'],
        ['<code>--max-budget-usd 5.00</code>', 'Trần chi phí; từ v2.1.217 cũng dừng subagent nền và từ chối subagent mới'],
        ['<code>--add-dir</code>, <code>--setting-sources user,project</code>, <code>--settings file|JSON</code>, <code>--plugin-dir</code>', 'Workspace & cấu hình'],
        ['<code>--mcp-config</code>, <code>--strict-mcp-config</code>', 'MCP từ file / chỉ dùng cấu hình chỉ định'],
        ['<code>--verbose</code>, <code>--debug=api,mcp</code>, <code>--enable-lsp-logging</code>, <code>--betas</code>', 'Gỡ lỗi (lọc debug chỉ áp dụng ở dạng <code>=</code>)']
      ] },
      { t: 'widget', name: 'jq-lab', title: 'Phòng thí nghiệm jq: trích dữ liệu từ JSON đầu ra của <code>claude -p</code>' }
    ] },
    { icon: '🏭', title: '7 công thức giá trị cao', blocks: [
      { t: 'tabs', items: [
        ['1️⃣ CI/CD', 'GitHub Actions: <code>claude -p --output-format json --max-turns 1 "Review the changes in this PR for…" &gt; review.json</code>, đăng bình luận qua github-script. Jenkins: <code>sh "claude -p --output-format json --max-turns 3 … &gt; coverage-analysis.json"</code>.'],
        ['2️⃣ Pipe', '<code>tail -1000 error.log | claude -p "summarize these errors"</code>; <code>git log --oneline -50 | claude -p "summarize"</code>; <code>grep -r TODO src/ | claude -p "prioritize"</code>.'],
        ['3️⃣ Đa phiên', '<code>claude -r "feature-auth" "…"</code> rồi tiếp; <code>--resume … --fork-session "try OAuth"</code>; chuyển giữa các phiên theo tính năng.'],
        ['4️⃣ Agent tùy chỉnh', 'Lưu <code>~/.claude/agents.json</code> rồi <code>claude --agents "$(cat ~/.claude/agents.json)" "review the auth module"</code>.'],
        ['5️⃣ Hàng loạt', '<code>for f in src/*.ts; do claude -p --model haiku "summarize $(cat $f)" &gt;&gt; summaries.md; done</code> — dùng Haiku cho việc rẻ.'],
        ['6️⃣ Bảo mật', 'Audit chỉ đọc (<code>--permission-mode plan --tools Read,Grep,Glob</code>); chặn <code>rm/curl/wget</code>; tự động hóa hạn chế <code>--max-turns 2 --allowedTools Read Glob</code>.'],
        ['7️⃣ API JSON', '<code>claude -p --output-format json --json-schema \'{…}\' "…" | jq \'.structured_output.endpoints[]\'</code>; trong script dùng <code>jq -e \'.structured_output.secure == false\'</code>.']
      ] },
      { t: 'table', head: ['Tình huống', 'Lệnh'], rows: [
        ['Review nhanh', '<code>cat file | claude -p "review"</code>'],
        ['Khám phá an toàn', '<code>claude --permission-mode plan</code>'],
        ['Tự chủ có rào chắn', '<code>claude --enable-auto-mode --permission-mode auto</code>'],
        ['CI/CD', '<code>claude -p --max-turns 3 --output-format json</code>'],
        ['Chế độ tối thiểu', '<code>claude --bare "quick query"</code>'],
        ['Giới hạn chi phí', '<code>claude -p --max-budget-usd 2.00 "analyze code"</code>']
      ] }
    ] },
    { icon: '🧮', title: 'Mô hình, biến môi trường, sự cố', blocks: [
      { t: 'table', head: ['Mô hình', 'ID', 'Ghi chú'], rows: [
        ['Opus 4.6', '<code>claude-opus-4-6</code>', 'Mạnh nhất, mức nỗ lực thích ứng, 1M token'],
        ['Sonnet 4.6', '<code>claude-sonnet-4-6</code>', 'Cân bằng, 1M token'],
        ['Haiku 4.5', '<code>claude-haiku-4-5</code>', 'Nhanh nhất cho việc nhỏ']
      ] },
      { t: 'p', x: '<code>/fast</code> bật/tắt chế độ nhanh. Nỗ lực: <code>--effort</code>, <code>/effort</code>, <code>CLAUDE_CODE_EFFORT_LEVEL</code>; từ khóa “ultrathink” kích hoạt suy luận sâu; <code>max</code> chỉ Opus 4.6.' },
      { t: 'widget', name: 'env-lookup', title: 'Tra cứu biến môi trường (dùng chung với chương 10)' },
      { t: 'tabs', items: [
        ['❌ command not found', 'Cài native: <code>curl -fsSL https://claude.ai/install.sh | bash</code> (khuyến nghị) hoặc <code>npm install -g @anthropic-ai/claude-code</code>; PATH có <code>~/.local/bin</code>; chạy <code>claude doctor</code>.'],
        ['🔑 Xác thực lỗi', '<code>export ANTHROPIC_API_KEY=…</code>; kiểm key hợp lệ, còn credit, quyền với mô hình.'],
        ['🕳 Không resume được phiên', 'Liệt kê phiên để lấy đúng tên/ID; phiên có thể hết hạn; dùng <code>-c</code>.'],
        ['🧾 JSON hỏng', 'Dùng <code>--output-format json</code> + <code>--json-schema</code>, đừng chỉ nhờ trong prompt.'],
        ['🚫 Công cụ bị chặn', 'Kiểm <code>--permission-mode</code>, <code>--allowedTools</code>, <code>--disallowedTools</code>; <code>--dangerously-skip-permissions</code> chỉ cho automation, thận trọng.']
      ] }
    ] }
  ],
  summary: [
    'REPL: <code>claude</code>; in: <code>claude -p</code> (pipe được, JSON được); phiên: <code>-c</code>, <code>-r</code>, <code>--fork-session</code>.',
    'Điều khiển: <code>--model</code>, <code>--effort</code>, <code>--system-prompt*</code>, <code>--tools/--allowedTools/--disallowedTools</code>, <code>--permission-mode</code>.',
    'Tự động hóa: <code>--output-format json</code> + <code>--json-schema</code> + <code>jq</code>, <code>--max-turns</code>, <code>--max-budget-usd</code>.',
    '<code>--bare</code> cho chế độ tối thiểu; <code>--remote</code> đã thay bằng <code>--cloud</code>.'
  ],
  cards: [
    ['Chế độ in?', '<code>claude -p "query"</code> – hỏi rồi thoát.'],
    ['Tiếp tục gần nhất?', '<code>claude -c</code>.'],
    ['Resume theo tên?', '<code>claude -r "name" "query"</code>.'],
    ['Fork phiên?', '<code>--resume X --fork-session</code>.'],
    ['Chọn mô hình?', '<code>--model sonnet|opus|haiku|opusplan</code>.'],
    ['Thay system prompt?', '<code>--system-prompt</code> / <code>--system-prompt-file</code>.'],
    ['Thêm vào system prompt?', '<code>--append-system-prompt</code>.'],
    ['Giới hạn công cụ?', '<code>--tools "Read,Grep,Glob"</code>.'],
    ['Cho phép lệnh git cụ thể khỏi hỏi?', '<code>--allowedTools "Bash(git log:*)"</code>.'],
    ['Đầu ra JSON có schema?', '<code>--output-format json --json-schema \'{…}\'</code>; đọc <code>.structured_output</code>.'],
    ['Giới hạn chi phí?', '<code>--max-budget-usd</code>.'],
    ['Giới hạn lượt?', '<code>--max-turns N</code>.'],
    ['Chế độ tối thiểu?', '<code>--bare</code>.'],
    ['Phiên cloud?', '<code>--cloud</code> (<code>--remote</code> là bí danh cũ).'],
    ['Kiểm tra đăng nhập?', '<code>claude auth status</code> (exit 0/1).']
  ],
  quiz: [
    { q: 'Hỏi nhanh một câu và thoát:', o: ['claude', 'claude -p "…"', 'claude -c', 'claude update'], a: 1, e: 'Print mode.' },
    { q: 'Muốn đầu ra JSON hợp lệ theo schema:', o: ['Chỉ ghi trong prompt', '--output-format json + --json-schema', '--verbose', '--bare'], a: 1, e: 'Kết quả ở .structured_output.' },
    { q: 'Audit bảo mật chỉ đọc:', o: ['--permission-mode plan --tools Read,Grep,Glob', '--dangerously-skip-permissions', '--bare', '--worktree'], a: 0, e: 'Hạn chế công cụ và ghi.' },
    { q: 'Đặt trần chi phí cho chạy không tương tác:', o: ['--max-turns', '--max-budget-usd', '--effort', '--fallback-model'], a: 1, e: 'Cũng dừng subagent nền khi chạm trần.' },
    { q: '--bare nghĩa là:', o: ['Bỏ hooks, skills, plugins, MCP, auto memory, CLAUDE.md', 'Không có model', 'Chỉ đọc', 'Chạy trong sandbox'], a: 0, e: 'Chế độ tối thiểu.' },
    { q: 'Cờ nào thay cho --remote?', o: ['--cloud', '--web', '--teleport', '--rc'], a: 0, e: '--remote là bí danh không dùng nữa.' },
    { q: 'Trích văn bản phản hồi từ JSON bằng jq:', o: ['.text', '.result', '.output', '.message'], a: 1, e: 'Với schema dùng .structured_output.' },
    { q: 'Cho việc hàng loạt rẻ nên chọn mô hình:', o: ['Opus', 'Haiku', 'opusplan', 'Không quan trọng'], a: 1, e: 'Nhanh và rẻ.' }
  ],
  match: [
    ['claude -p', 'Chế độ in, không tương tác'],
    ['claude -c', 'Tiếp tục hội thoại gần nhất'],
    ['--fork-session', 'Tạo phiên mới khi resume'],
    ['--json-schema', 'Xác thực JSON đầu ra'],
    ['--strict-mcp-config', 'Chỉ dùng MCP config chỉ định'],
    ['claude doctor', 'Chẩn đoán cài đặt']
  ]
}
);
