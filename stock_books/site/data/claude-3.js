// "Claude Code How-To" – Chương 3: Agent Skills.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 3,
  title: 'Agent Skills',
  intro: 'Skill là gói kiến thức + quy trình (thư mục có <code>SKILL.md</code>) mà Claude tải khi liên quan. Khác prompt dùng một lần, skill nạp theo nhu cầu (progressive disclosure) nên cài nhiều mà không tốn ngữ cảnh. Theo chuẩn mở Agent Skills, Claude Code mở rộng thêm.',
  sections: [
    { icon: '🪜', title: 'Progressive disclosure: 3 cấp nạp', blocks: [
      { t: 'table', head: ['Cấp', 'Khi nạp', 'Chi phí', 'Nội dung'], rows: [
        ['1. Metadata', 'Luôn, lúc khởi động', '~100 token/skill', '<code>name</code> + <code>description</code>'],
        ['2. Hướng dẫn', 'Khi skill được kích hoạt', '&lt; 5k token', 'Thân SKILL.md'],
        ['3+. Tài nguyên', 'Khi cần', 'Gần như không giới hạn', 'Script, template, tài liệu chạy qua bash, không nạp vào ngữ cảnh']
      ] },
      { t: 'steps', items: [
        'Claude thấy mô tả mọi skill khi khởi động.',
        'Yêu cầu của bạn khớp với một <code>description</code> → Claude đọc <code>SKILL.md</code>.',
        'Nếu cần, đọc thêm template/script đi kèm.',
        'Thực thi hướng dẫn và trả kết quả.'
      ] },
      { t: 'widget', name: 'skill-load', title: 'Mô phỏng 3 cấp nạp: tốn bao nhiêu ngữ cảnh?' }
    ] },
    { icon: '📍', title: 'Vị trí và độ ưu tiên', blocks: [
      { t: 'table', head: ['Loại', 'Vị trí', 'Chia sẻ'], rows: [
        ['Enterprise', 'Managed settings', 'Toàn tổ chức'],
        ['Personal', '<code>~/.claude/skills/&lt;tên&gt;/SKILL.md</code>', 'Không'],
        ['Project', '<code>.claude/skills/&lt;tên&gt;/SKILL.md</code>', 'Có (git)'],
        ['Plugin', '<code>&lt;plugin&gt;/skills/&lt;tên&gt;/SKILL.md</code>', 'Tùy plugin; tên có tiền tố <code>plugin:skill</code> nên không xung đột']
      ] },
      { t: 'key', x: 'Trùng tên: <b>enterprise &gt; personal &gt; project</b>. <code>skillOverrides</code> (v2.1.129+) chỉ đổi mức hiển thị (<code>on</code>, <code>name-only</code>, <code>user-invocable-only</code>, <code>off</code>), không đổi thứ tự.' },
      { t: 'list', items: [
        'Thư mục lồng: sửa file trong <code>packages/frontend/</code> → tự khám phá <code>packages/frontend/.claude/skills/</code> (monorepo).',
        '<code>--add-dir</code>: skill được nạp tự động, có phát hiện thay đổi trực tiếp.',
        '<b>Ngân sách mô tả</b>: giới hạn theo tỷ lệ cửa sổ ngữ cảnh (README ghi cả “1%/8.000 ký tự” và “2%/16.000 ký tự”); chạy <code>/context</code> xem cảnh báo, chỉnh bằng <code>SLASH_COMMAND_TOOL_CHAR_BUDGET</code>.'
      ] }
    ] },
    { icon: '🧾', title: 'Viết SKILL.md', blocks: [
      { t: 'p', x: 'Mọi trường frontmatter đều tùy chọn; <code>description</code> là trường nên có nhất. Mô tả + <code>when_to_use</code> bị cắt ở <b>1.536 ký tự</b> (<code>skillListingMaxDescChars</code>). Giữ <code>SKILL.md</code> dưới <b>500 dòng</b>, đưa tài liệu dài sang file riêng bằng đường dẫn tương đối.' },
      { t: 'table', head: ['Trường', 'Tác dụng'], rows: [
        ['<code>name</code>', 'Chữ thường, số, gạch ngang (≤64 ký tự). <code>anthropic-skills</code>, <code>synced</code> là tên dành riêng. v2.1.299+ bỏ qua tên chứa ký tự ẩn/&lt; &gt;/&gt;256 ký tự'],
        ['<code>description</code>, <code>when_to_use</code>', 'Làm gì + khi nào dùng; Claude dựa vào đây để tự kích hoạt'],
        ['<code>argument-hint</code>', 'Gợi ý tự hoàn thành'],
        ['<code>disable-model-invocation</code>', 'true = chỉ bạn gọi'],
        ['<code>user-invocable</code>', 'false = chỉ Claude gọi (ẩn khỏi menu)'],
        ['<code>allowed-tools</code>', 'Duyệt trước công cụ'],
        ['<code>model</code>, <code>effort</code>', 'Ghi đè mô hình / mức nỗ lực khi skill chạy'],
        ['<code>context: fork</code>, <code>agent</code>', 'Chạy trong subagent (<code>Explore</code>, <code>Plan</code>, <code>general-purpose</code> hoặc tùy chỉnh)'],
        ['<code>shell</code>', '<code>bash</code> (mặc định) hoặc <code>powershell</code>'],
        ['<code>hooks</code>', 'Hook đăng ký khi skill gọi, tồn tại hết phiên']
      ] },
      { t: 'table', head: ['Frontmatter', 'Bạn gọi', 'Claude gọi'], rows: [
        ['(mặc định)', 'Có', 'Có'],
        ['<code>disable-model-invocation: true</code>', 'Có', 'Không'],
        ['<code>user-invocable: false</code>', 'Không', 'Có']
      ] },
      { t: 'tip', x: '<b>Hai loại nội dung:</b> <i>tham khảo</i> (quy ước API, văn phong – chạy nội tuyến) và <i>tác vụ</i> (deploy, commit – từng bước, thường <code>/tên</code>). Việc có tác dụng phụ → <code>disable-model-invocation</code>; kiến thức nền → <code>user-invocable: false</code>.' },
      { t: 'widget', name: 'skill-builder', title: 'Trình tạo SKILL.md' }
    ] },
    { icon: '🔤', title: 'Biến, ngữ cảnh động, subagent', blocks: [
      { t: 'list', items: [
        '<code>$ARGUMENTS</code>, <code>$ARGUMENTS[N]</code> / <code>$N</code> (đánh số từ 0), <code>${CLAUDE_SESSION_ID}</code>, <code>${CLAUDE_SKILL_DIR}</code>.',
        '<code>!`lệnh`</code> chạy trước khi gửi nội dung; Claude chỉ thấy kết quả. Ví dụ <code>pr-summary</code>: <code>!`gh pr diff`</code>, <code>!`gh pr view --comments`</code>.',
        '<code>context: fork</code> + <code>agent: Explore</code>: nội dung skill thành nhiệm vụ cho subagent có cửa sổ riêng, giữ hội thoại chính gọn.'
      ] },
      { t: 'tabs', items: [
        ['🔍 Explore', 'Nghiên cứu chỉ đọc, phân tích codebase.'],
        ['🗺 Plan', 'Lập kế hoạch triển khai.'],
        ['🧰 general-purpose', 'Việc rộng cần mọi công cụ.'],
        ['🤖 Tùy chỉnh', 'Agent chuyên biệt tự định nghĩa.']
      ] }
    ] },
    { icon: '📚', title: 'Ví dụ trong kho', blocks: [
      { t: 'tabs', items: [
        ['🔎 code-review-specialist', 'Review bảo mật (xác thực, rò rỉ dữ liệu, injection, mật mã), hiệu năng (Big-O, truy vấn, cache), chất lượng (SOLID), bảo trì (hàm &lt;50 dòng). Mẫu đầu ra: tóm tắt điểm 1–5, lỗi nghiêm trọng (vị trí, tác động, mức độ, cách sửa).'],
        ['🌳 codebase-visualizer', 'Script Python sinh <code>codebase-map.html</code> cây thư mục có thể gập; <code>allowed-tools: Bash(python *)</code>. Claude điều phối, script làm việc nặng.'],
        ['🚀 deploy', '<code>disable-model-invocation: true</code>; test → build → push → xác minh → báo cáo.'],
        ['🎨 brand-voice', '<code>user-invocable: false</code>: thân thiện nhưng chuyên nghiệp, câu &lt;20 từ, dùng “bạn”, thể chủ động.'],
        ['📄 claude-md', 'Quy tắc vàng: ngắn (&lt;200 dòng), áp dụng mọi phiên, đừng dùng Claude làm linter, đừng tự sinh tự động.'],
        ['♻️ refactor', '6 pha theo Martin Fowler: nghiên cứu → kiểm tra test → nhận diện code smell → lập kế hoạch → thực hiện từng bước nhỏ → xem lại; tham chiếu <code>references/</code>.']
      ] }
    ] },
    { icon: '🛠', title: 'Quản lý, bảo mật, so sánh', blocks: [
      { t: 'list', items: [
        'Xem skill: hỏi “What Skills are available?” hoặc <code>ls ~/.claude/skills/</code>; thử bằng yêu cầu khớp mô tả hoặc <code>/tên</code>.',
        'Sửa SKILL.md xong chạy <code>/reload-skills</code> (v2.1.152+); hook <code>SessionStart</code> trả <code>reloadSkills: true</code> cũng quét lại.',
        'Hạn chế: deny <code>Skill</code> trong <code>/permissions</code>; allow <code>Skill(commit)</code>, <code>Skill(review-pr *)</code>; deny <code>Skill(deploy *)</code>; hoặc <code>disable-model-invocation</code>.',
        'Gói sẵn: <code>/simplify</code> (3 agent review song song), <code>/batch</code> (worktrees), <code>/debug</code>, <code>/loop</code>, <code>/claude-api</code>.',
        'Chia sẻ: commit <code>.claude/skills/</code>; cá nhân copy vào <code>~/.claude/skills/</code> (<code>chmod +x</code> cho script); hoặc đóng gói trong plugin.'
      ] },
      { t: 'warn', x: '<b>Bảo mật:</b> chỉ dùng skill từ nguồn tin cậy — skill độc hại có thể hướng Claude gọi công cụ/chạy code có hại. Đọc mọi file trong thư mục skill; coi như cài phần mềm; cẩn thận skill tải nội dung từ URL ngoài.' },
      { t: 'table', head: ['Tính năng', 'Gọi', 'Phù hợp'], rows: [
        ['Skills', 'Tự động hoặc /tên', 'Chuyên môn, workflow tái sử dụng'],
        ['Subagent', 'Ủy quyền tự động', 'Thực thi cô lập'],
        ['CLAUDE.md', 'Luôn nạp', 'Ngữ cảnh dự án'],
        ['MCP', 'Thời gian thực', 'Dữ liệu/dịch vụ ngoài'],
        ['Hooks', 'Theo sự kiện', 'Tác dụng phụ tự động']
      ] },
      { t: 'tabs', items: [
        ['❓ Không kích hoạt', 'Thêm từ khóa người dùng hay nói vào description; kiểm tra skill có hiện khi hỏi “What skills are available?”; thử <code>/tên</code>.'],
        ['❗ Kích hoạt quá nhiều', 'Mô tả cụ thể hơn hoặc <code>disable-model-invocation: true</code>.'],
        ['🙈 Không thấy hết skill', 'Quá nhiều mô tả → chạm ngân sách; xem <code>/context</code>.'],
        ['🐛 Lỗi YAML / script', 'Kiểm tra dấu <code>---</code>, thụt lề, không dùng tab; <code>chmod +x scripts/*.py</code>.']
      ] }
    ] }
  ],
  summary: [
    'Skill = thư mục + <code>SKILL.md</code>; nạp theo 3 cấp (metadata → hướng dẫn → tài nguyên).',
    'Mô tả phải nói rõ làm gì và khi nào; một skill một khả năng; giữ SKILL.md &lt; 500 dòng.',
    'Kiểm soát gọi: <code>disable-model-invocation</code> (chỉ bạn) vs <code>user-invocable: false</code> (chỉ Claude).',
    '<code>context: fork</code> + <code>agent</code> chạy skill trong subagent.',
    'Chỉ cài skill từ nguồn tin cậy.'
  ],
  cards: [
    ['Progressive disclosure là gì?', 'Nạp thông tin theo cấp khi cần: metadata → thân SKILL.md → tài nguyên.'],
    ['Chi phí cấp 1?', '~100 token mỗi skill (name + description).'],
    ['Thân SKILL.md nên dưới?', '500 dòng (cấp 2 &lt;5k token).'],
    ['Ưu tiên khi trùng tên?', 'enterprise &gt; personal &gt; project.'],
    ['Skill cá nhân nằm đâu?', '<code>~/.claude/skills/&lt;tên&gt;/SKILL.md</code>.'],
    ['Skill của plugin đặt tên thế nào?', '<code>plugin-name:skill-name</code>.'],
    ['Chỉ người dùng gọi được?', '<code>disable-model-invocation: true</code>.'],
    ['Chỉ Claude gọi được?', '<code>user-invocable: false</code>.'],
    ['<code>${CLAUDE_SKILL_DIR}</code>?', 'Thư mục chứa SKILL.md của skill.'],
    ['Chạy trong subagent?', '<code>context: fork</code> + <code>agent: Explore|Plan|…</code>.'],
    ['Nạp lại skill sau khi sửa?', '<code>/reload-skills</code> (v2.1.152+).'],
    ['Giới hạn mô tả + when_to_use?', '1.536 ký tự (<code>skillListingMaxDescChars</code>).'],
    ['Skill gói sẵn?', '/simplify, /batch, /debug, /loop, /claude-api.'],
    ['Rủi ro bảo mật của skill?', 'Skill độc hại có thể hướng Claude chạy lệnh/gọi công cụ có hại.']
  ],
  quiz: [
    { q: 'Cấp nào của skill luôn được nạp lúc khởi động?', o: ['Thân SKILL.md', 'Metadata name + description', 'Script', 'Template'], a: 1, e: '~100 token/skill.' },
    { q: 'Skill “/deploy” nên đặt:', o: ['user-invocable: false', 'disable-model-invocation: true', 'model: haiku', 'effort: low'], a: 1, e: 'Tránh Claude tự deploy.' },
    { q: 'Skill “kiến thức hệ thống cũ” (không phải hành động) nên:', o: ['disable-model-invocation: true', 'user-invocable: false', 'context: fork', 'shell: bash'], a: 1, e: 'Chỉ Claude cần biết.' },
    { q: 'Skill trùng tên ở personal và project, cái nào chạy?', o: ['Project', 'Personal', 'Cả hai', 'Không cái nào'], a: 1, e: 'enterprise &gt; personal &gt; project.' },
    { q: 'Cách mô tả tốt:', o: ['“Helps with documents”', '“Extract text/tables from PDF… Use when user mentions PDFs…”', '“Skill 1”', 'Để trống'], a: 1, e: 'Cụ thể, có từ khóa kích hoạt.' },
    { q: 'Sửa SKILL.md xong cần:', o: ['Cài lại Claude', '/reload-skills', 'Xóa cache', 'Không cần gì và chờ'], a: 1, e: 'Quét lại thư mục skill.' },
    { q: 'Vì sao dùng context: fork?', o: ['Nhanh hơn', 'Cửa sổ ngữ cảnh riêng, giữ hội thoại chính gọn', 'Rẻ hơn', 'Bắt buộc'], a: 1, e: 'Cô lập công việc.' },
    { q: 'Điều nào KHÔNG nên làm?', o: ['Một skill một khả năng', 'Tạo skill cho việc làm một lần', 'Kèm template', 'Kiểm tra bằng tình huống thật'], a: 1, e: 'Việc một lần không đáng.' }
  ],
  match: [
    ['SKILL.md', 'File bắt buộc của skill'],
    ['skillOverrides', 'Đổi mức hiển thị skill'],
    ['agent: Explore', 'Nghiên cứu chỉ đọc'],
    ['/reload-skills', 'Quét lại thư mục skill'],
    ['Skill(deploy *)', 'Quy tắc deny skill cụ thể'],
    ['references/', 'Kiến thức lĩnh vực nạp khi cần']
  ]
}
);
