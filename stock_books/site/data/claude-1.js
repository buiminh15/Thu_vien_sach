// "Claude Code How-To" (bản tiếng Việt) – Chương 1: Lệnh Slash.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 1,
  title: 'Lệnh Slash',
  intro: 'Lệnh slash là lối tắt để điều khiển Claude trong một phiên. Có 4 loại: lệnh tích hợp, skills, lệnh plugin và MCP prompts. Lệnh tùy chỉnh nay đã hợp nhất vào skills (<code>SKILL.md</code>). Phiên bản tham chiếu: Claude Code 2.1.302.',
  sections: [
    { icon: '⌨️', title: 'Bốn loại lệnh slash', blocks: [
      { t: 'table', head: ['Loại', 'Ví dụ', 'Nguồn'], rows: [
        ['Tích hợp sẵn', '/help, /clear, /model', 'Claude Code (60+ lệnh)'],
        ['Skills', '/optimize, /pr', 'File <code>SKILL.md</code> do bạn tạo (+ ~20 skill đóng gói sẵn)'],
        ['Lệnh plugin', '/frontend-design:frontend-design', 'Plugin đã cài'],
        ['MCP prompts', '/mcp__github__list_prs', 'MCP server']
      ] },
      { t: 'tip', x: 'Gõ <code>/</code> để xem toàn bộ danh sách, gõ <code>/</code> + chữ cái để lọc.' },
      { t: 'widget', name: 'cmd-lookup', title: 'Tra cứu lệnh tích hợp: gõ từ khóa (mô tả hoặc tên lệnh)' }
    ] },
    { icon: '🧰', title: 'Lệnh tích hợp hay dùng', blocks: [
      { t: 'tabs', items: [
        ['💬 Hội thoại', '<code>/clear</code> (xóa; bí danh /reset, /new), <code>/compact [hướng dẫn]</code> nén ngữ cảnh, <code>/resume</code> tiếp tục, <code>/rewind</code> quay lại hội thoại/code, <code>/branch</code> rẽ nhánh, <code>/fork</code> nhân bản thành phiên nền, <code>/subtask</code> subagent fork, <code>/btw</code> câu hỏi phụ.'],
        ['⚙️ Cấu hình', '<code>/config</code>, <code>/model</code>, <code>/effort [low…max]</code>, <code>/permissions</code>, <code>/memory</code>, <code>/hooks</code>, <code>/mcp</code>, <code>/plugin</code>, <code>/statusline</code>, <code>/theme</code>.'],
        ['📊 Theo dõi', '<code>/context</code> (lưới màu), <code>/cost</code> (token), <code>/stats</code>, <code>/status</code>, <code>/doctor</code>, <code>/insights</code>, <code>/diff</code>.'],
        ['🛠 Quy trình', '<code>/init</code> tạo CLAUDE.md, <code>/plan</code>, <code>/review</code> (= /code-review), <code>/security-review</code>, <code>/schedule</code>, <code>/loop</code>, <code>/batch</code>, <code>/simplify</code>, <code>/debug</code>.']
      ] },
      { t: 'warn', x: 'Đã lỗi thời/bị gỡ: <code>/pr-comments</code> (v2.1.91), <code>/vim</code> (v2.1.92 → dùng /config → Editor mode), <code>/ultraplan</code> (v2.1.222 → dùng plan mode). Từ v2.1.212: <code>/fork</code> tạo phiên nền, còn <code>/subtask</code> mới là subagent fork.' }
    ] },
    { icon: '✍️', title: 'Tạo lệnh tùy chỉnh dưới dạng Skill', blocks: [
      { t: 'p', x: 'Tạo <code>.claude/skills/&lt;tên&gt;/SKILL.md</code>. File <code>.claude/commands/&lt;tên&gt;.md</code> kiểu cũ vẫn chạy; nếu trùng tên thì <b>skill được ưu tiên</b>. Skills có thêm: thư mục kèm scripts/template, tự động gọi, kiểm soát ai được gọi, <code>context: fork</code>, tải từng bước.' },
      { t: 'table', head: ['Frontmatter', 'Ý nghĩa'], rows: [
        ['<code>name</code>', 'Tên lệnh (mặc định = tên thư mục)'],
        ['<code>description</code>', 'Mô tả + điều kiện kích hoạt (giúp Claude biết khi nào dùng)'],
        ['<code>argument-hint</code>', 'Gợi ý đối số khi tự hoàn thành'],
        ['<code>allowed-tools</code>', 'Công cụ được dùng không cần hỏi quyền'],
        ['<code>model</code>', 'Mô hình riêng'],
        ['<code>disable-model-invocation</code>', 'true = chỉ người dùng gọi (cho việc có tác dụng phụ như deploy)'],
        ['<code>user-invocable</code>', 'false = ẩn khỏi menu /'],
        ['<code>context: fork</code> + <code>agent</code>', 'Chạy trong subagent cô lập'],
        ['<code>hooks</code>', 'Hook đăng ký khi skill chạy']
      ] },
      { t: 'widget', name: 'skill-builder', title: 'Trình tạo SKILL.md: điền thông tin và xem file sinh ra' }
    ] },
    { icon: '🔡', title: 'Đối số, bối cảnh động, tham chiếu file', blocks: [
      { t: 'steps', items: [
        '<code>$ARGUMENTS</code> = toàn bộ đối số: <code>/fix-issue 123</code> → “Fix issue #123”.',
        '<code>$0</code>, <code>$1</code>… = từng đối số: <code>/review-pr 456 high</code> → $0=456, $1=high.',
        '<code>!`lệnh`</code> chạy shell <b>trước</b> khi gửi prompt, nhúng kết quả (vd <code>!`git status`</code>). Hook <code>UserPromptSubmit</code> (v2.1.299) chạy trước khi mở rộng nên chặn được.',
        '<code>@đường/dẫn</code> nhúng nội dung file vào prompt.'
      ] },
      { t: 'key', x: 'MCP prompt: <code>/mcp__&lt;server&gt;__&lt;prompt&gt; [đối số]</code>. Quyền: <code>mcp__github</code> (cả server), <code>mcp__github__*</code> (mọi tool), <code>mcp__github__get_issue</code> (một tool). Từ v2.1.299 quy tắc chỉ khớp đúng server được nêu tên.' }
    ] },
    { icon: '📦', title: 'Lệnh ví dụ trong kho & thực hành tốt', blocks: [
      { t: 'list', items: [
        '<code>/optimize</code>: tìm vấn đề hiệu năng, rò rỉ bộ nhớ.',
        '<code>/pr</code>: checklist chuẩn bị PR (lint, test, định dạng commit).',
        '<code>/generate-api-docs</code>: sinh tài liệu API từ mã nguồn.',
        '<code>/commit</code>: commit với ngữ cảnh động (status, diff, branch, log).',
        '<code>/push-all</code>: stage + commit + push; kiểm tra an toàn: bí mật (<code>.env*</code>, <code>*.pem</code>), API key thật, file &gt;10MB không LFS, build artifacts.',
        '<code>/doc-refactor</code>, <code>/setup-ci-cd</code>, <code>/unit-test-expand</code>.'
      ] },
      { t: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Tên rõ ràng, hướng hành động', 'Tạo lệnh cho việc làm một lần'],
        ['<code>description</code> kèm điều kiện kích hoạt', 'Nhồi logic phức tạp vào một lệnh'],
        ['Một lệnh = một nhiệm vụ', 'Hardcode thông tin nhạy cảm'],
        ['<code>disable-model-invocation</code> cho việc có tác dụng phụ', 'Bỏ trống description'],
        ['<code>!</code> để lấy ngữ cảnh động', 'Giả định Claude biết sẵn trạng thái hiện tại']
      ] },
      { t: 'warn', x: 'Sự cố thường gặp: lệnh không thấy → kiểm tra đường dẫn <code>.claude/skills/&lt;name&gt;/SKILL.md</code>, <code>name</code> trong frontmatter, khởi động lại phiên, chạy <code>/help</code>. Lệnh chạy sai → thêm ví dụ/hướng dẫn cụ thể, kiểm tra <code>allowed-tools</code>.' }
    ] }
  ],
  summary: [
    'Bốn loại lệnh slash: tích hợp, skills, plugin, MCP prompts.',
    'Lệnh tùy chỉnh = skills (<code>SKILL.md</code>); skill thắng lệnh cũ khi trùng tên.',
    'Biến: <code>$ARGUMENTS</code>, <code>$0</code>, <code>$1</code>; <code>!`cmd`</code> cho ngữ cảnh động; <code>@file</code> nhúng file.',
    '<code>disable-model-invocation: true</code> cho lệnh có tác dụng phụ (deploy).',
    'Mỗi lệnh một nhiệm vụ, description có điều kiện kích hoạt.'
  ],
  cards: [
    ['Bốn loại lệnh slash?', 'Tích hợp sẵn, Skills, lệnh Plugin, MCP prompts.'],
    ['Lệnh tùy chỉnh hiện nằm ở đâu?', 'Đã hợp nhất vào skills: <code>.claude/skills/&lt;tên&gt;/SKILL.md</code>.'],
    ['Skill và command cùng tên?', 'Skill được ưu tiên.'],
    ['<code>$ARGUMENTS</code> là gì?', 'Toàn bộ đối số người dùng gõ sau tên lệnh.'],
    ['<code>$0</code>, <code>$1</code>?', 'Từng đối số theo thứ tự.'],
    ['Cú pháp bối cảnh động?', '<code>!`git status`</code> – chạy lệnh shell trước prompt.'],
    ['Nhúng nội dung file?', 'Tiền tố <code>@</code>: <code>@src/app.js</code>.'],
    ['Chỉ người dùng mới gọi được?', '<code>disable-model-invocation: true</code>.'],
    ['Ẩn khỏi menu /?', '<code>user-invocable: false</code>.'],
    ['Chạy skill trong subagent cô lập?', '<code>context: fork</code> (+ <code>agent</code>).'],
    ['Cú pháp MCP prompt?', '<code>/mcp__server__prompt [args]</code>.'],
    ['Lệnh nén ngữ cảnh?', '<code>/compact [hướng dẫn tập trung]</code>.'],
    ['Lệnh xem dùng bao nhiêu ngữ cảnh?', '<code>/context</code> (lưới màu); <code>/cost</code> cho token.'],
    ['Quay lại cuộc hội thoại/code?', '<code>/rewind</code> (bí danh /checkpoint).']
  ],
  quiz: [
    { q: 'Lệnh tùy chỉnh hiện nay được khuyến nghị tạo bằng:', o: ['.claude/commands/x.md', '.claude/skills/x/SKILL.md', 'settings.json', 'CLAUDE.md'], a: 1, e: 'Command cũ vẫn chạy nhưng skills là chuẩn hiện tại.' },
    { q: 'Trường frontmatter giúp Claude biết khi nào dùng skill:', o: ['name', 'description', 'model', 'hooks'], a: 1, e: 'Mô tả + điều kiện kích hoạt.' },
    { q: 'Cú pháp chạy shell trước khi gửi prompt:', o: ['$(cmd)', '!`cmd`', '@cmd', '#cmd'], a: 1, e: 'Dùng <code>!`git status`</code>.' },
    { q: 'Cho lệnh deploy, nên đặt:', o: ['user-invocable: false', 'disable-model-invocation: true', 'model: haiku', 'context: fork'], a: 1, e: 'Tránh Claude tự deploy.' },
    { q: '/review-pr 456 high: $1 là:', o: ['456', 'high', '/review-pr', 'rỗng'], a: 1, e: '$0 = 456, $1 = high.' },
    { q: '/subtask khác /fork (từ v2.1.212) ở chỗ:', o: ['Giống nhau', '/subtask là subagent fork kế thừa hội thoại, /fork là phiên nền độc lập', 'Ngược lại', 'Cả hai đã bị xóa'], a: 1, e: 'Hai lệnh hoán đổi vai trò ở v2.1.212.' },
    { q: 'Lệnh nào KHÔNG còn dùng?', o: ['/compact', '/pr-comments', '/rewind', '/context'], a: 1, e: 'Xóa ở v2.1.91.' },
    { q: 'Quyền cho tất cả công cụ của server github:', o: ['mcp__github', 'mcp__github__*', 'github:*', 'all'], a: 1, e: 'Wildcard cho mọi tool.' }
  ],
  match: [
    ['/clear', 'Xóa cuộc hội thoại'],
    ['/compact', 'Nén ngữ cảnh'],
    ['/rewind', 'Quay lại code/hội thoại'],
    ['/init', 'Tạo CLAUDE.md'],
    ['allowed-tools', 'Công cụ được dùng không cần hỏi'],
    ['context: fork', 'Chạy trong subagent cô lập']
  ]
}
);
