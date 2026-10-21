// "Claude Code How-To" – Chương 7: Plugins.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 7,
  title: 'Plugins – đóng gói và chia sẻ',
  intro: 'Plugin là gói tùy chỉnh (lệnh/skill, subagent, MCP server, hook, LSP, cài đặt) cài bằng một lệnh. Đây là cơ chế mở rộng cấp cao nhất: thay vì 2+ giờ cấu hình thủ công từng thứ, nhóm cài plugin trong ~2 phút.',
  sections: [
    { icon: '📦', title: 'Plugin chứa gì', blocks: [
      { t: 'table', head: ['Loại', 'Phạm vi', 'Ví dụ'], rows: [
        ['Chính thức', 'Toàn cầu (Anthropic)', 'PR Review, Security Guidance'],
        ['Cộng đồng', 'Công khai', 'DevOps, Data Science'],
        ['Tổ chức', 'Nội bộ công ty', 'Tiêu chuẩn nội bộ'],
        ['Cá nhân', 'Một người', 'Workflow riêng']
      ] },
      { t: 'p', x: 'Cấu trúc điển hình:' },
      { t: 'table', head: ['Đường dẫn', 'Nội dung'], rows: [
        ['<code>.claude-plugin/plugin.json</code>', 'Manifest: name, description, version, author, homepage, repository, license'],
        ['<code>commands/</code>', 'Lệnh dạng Markdown'],
        ['<code>agents/</code>', 'Định nghĩa subagent'],
        ['<code>skills/&lt;tên&gt;/SKILL.md</code>', 'Agent Skills'],
        ['<code>hooks/hooks.json</code>', 'Trình xử lý sự kiện'],
        ['<code>.mcp.json</code>, <code>.lsp.json</code>', 'MCP server / LSP server'],
        ['<code>settings.json</code>', 'Mặc định (chỉ khóa <code>agent</code> và <code>subagentStatusLine</code> có hiệu lực)'],
        ['<code>scripts/</code>, <code>templates/</code>, <code>docs/</code>, <code>tests/</code>', 'Hỗ trợ']
      ] },
      { t: 'key', x: 'Tên lệnh của plugin có tiền tố: <code>/plugin-name:hello</code> (standalone chỉ là <code>/hello</code>). Dùng lệnh standalone cho việc cá nhân nhanh; dùng plugin khi cần đóng gói nhiều thành phần, chia sẻ nhóm hoặc xuất bản.' },
      { t: 'widget', name: 'plugin-builder', title: 'Trình tạo plugin.json và khung thư mục' }
    ] },
    { icon: '🧠', title: 'LSP, tùy chọn, dữ liệu', blocks: [
      { t: 'tabs', items: [
        ['🔤 LSP', 'Thông minh code thời gian thực: chẩn đoán ngay sau khi sửa, đi tới định nghĩa/tham chiếu, hover, liệt kê ký hiệu. Cấu hình <code>.lsp.json</code> hoặc khóa <code>lsp</code> trong plugin.json. Bắt buộc: <code>command</code> (trong PATH), <code>extensionToLanguage</code>; tùy chọn: <code>args</code>, <code>transport</code> (stdio|socket), <code>env</code>, <code>initializationOptions</code>, <code>settings</code>, <code>workspaceFolder</code>, <code>startupTimeout</code>, <code>shutdownTimeout</code>, <code>restartOnCrash</code>, <code>maxRestarts</code>. Có sẵn: pyright-lsp, typescript-lsp, rust-analyzer-lsp.'],
        ['⚙️ userConfig (v2.1.83+)', 'Khai báo tùy chọn người dùng trong manifest; giá trị <code>sensitive: true</code> lưu trong keychain hệ thống, không nằm trong settings dạng văn bản.'],
        ['💾 CLAUDE_PLUGIN_DATA (v2.1.78+)', 'Thư mục trạng thái bền cho mỗi plugin (<code>~/.claude/plugins/data/&lt;id&gt;/</code>), sống sót qua cập nhật; xóa khi gỡ cài đặt lần cuối (trừ <code>--keep-data</code>). Dùng cho cache/DB.'],
        ['📝 Plugin inline (v2.1.80+)', '<code>extraKnownMarketplaces.&lt;tên&gt;.source = {"source":"settings", "name", "plugins":[…]}</code>; plugin phải tham chiếu nguồn ngoài (GitHub/npm), đường dẫn tương đối bị từ chối.']
      ] }
    ] },
    { icon: '🏬', title: 'Marketplace & nguồn plugin', blocks: [
      { t: 'p', x: 'Marketplace chính thức: <code>anthropics/claude-plugins-official</code>; doanh nghiệp có thể tạo marketplace riêng. Định nghĩa trong <code>.claude-plugin/marketplace.json</code> với <code>name</code> (kebab-case), <code>owner</code> ({name}), <code>plugins[]</code> (name, source bắt buộc; description, version, author tùy chọn).' },
      { t: 'table', head: ['Nguồn', 'Cú pháp'], rows: [
        ['Đường dẫn tương đối', '<code>"./plugins/my-plugin"</code>'],
        ['GitHub', '<code>{"source":"github","repo":"owner/repo","ref":"v1.0"}</code>'],
        ['Git URL', '<code>{"source":"url","url":"…"}</code>'],
        ['Thư mục con git', '<code>{"source":"git-subdir","url":"…","path":"…"}</code>'],
        ['npm', '<code>{"source":"npm","package":"@acme/claude-plugin","version":"^2.0"}</code>']
      ] },
      { t: 'list', items: [
        'GitHub/git hỗ trợ <code>ref</code> (nhánh/tag) và <code>sha</code> để khóa phiên bản; git timeout mặc định 120s; hỗ trợ npm registry tùy chỉnh.',
        '<code>strict: true</code> (mặc định): <code>plugin.json</code> cục bộ có thẩm quyền, mục marketplace chỉ bổ sung; <code>strict: false</code>: mục marketplace là định nghĩa đầy đủ.',
        'Phân phối: <code>/plugin marketplace add owner/repo</code> (GitHub, khuyến nghị) hoặc URL git đầy đủ; repo riêng tư qua credential helper/token; nộp vào directory của Anthropic qua claude.ai/directory/manage.'
      ] },
      { t: 'widget', name: 'plugin-decision', title: 'Có nên tạo plugin không? Trả lời vài câu hỏi' }
    ] },
    { icon: '🧰', title: 'Lệnh CLI & vòng đời', blocks: [
      { t: 'table', head: ['Lệnh', 'Tác dụng'], rows: [
        ['<code>claude plugin install &lt;name&gt;@&lt;marketplace&gt;</code>', 'Cài đặt (hoặc <code>/plugin install</code>; <code>--marketplace owner/repo</code> làm hai bước một lần, v2.1.275+)'],
        ['<code>claude plugin uninstall | list | enable | disable</code>', 'Gỡ / liệt kê (<code>--enabled</code>, <code>--disabled</code>) / bật / tắt'],
        ['<code>claude plugin update &lt;name&gt;</code>', 'Cập nhật'],
        ['<code>claude plugin validate &lt;path&gt;</code>', 'Xác thực cấu trúc'],
        ['<code>claude --plugin-dir ./path</code>', 'Test cục bộ (lặp lại cho nhiều plugin)'],
        ['<code>/reload-plugins</code>', 'Đọc lại manifest, lệnh, agent, skill, hook, MCP/LSP (hot-reload)']
      ] },
      { t: 'steps', items: [
        'Khám phá: <code>/plugin</code> → tab <b>Discover</b> (khác <code>/plugin list</code> chỉ liệt kê đã cài).',
        'Chọn plugin xem thành phần → <code>/plugin install</code>.',
        'Đọc dòng cuối tóm tắt cài đặt (từ v2.1.221): “Plugin is now active.” = xong; “Run /reload-plugins to activate.” = chạy lệnh đó, không cần khởi động lại.',
        'Dùng, cập nhật khi có bản mới, tắt/bật khi cần.'
      ] },
      { t: 'tip', x: '<code>/plugin install</code> cần dạng <code>name@marketplace</code>; truyền đường dẫn sẽ báo “marketplace not found” — để test đường dẫn cục bộ hãy dùng <code>--plugin-dir</code>.' }
    ] },
    { icon: '🏢', title: 'Quản trị & bảo mật', blocks: [
      { t: 'table', head: ['Cài đặt managed', 'Tác dụng'], rows: [
        ['<code>enabledPlugins</code>', 'Allowlist plugin bật mặc định; đặt <code>"&lt;plugin&gt;@&lt;marketplace&gt;": false</code> để chặn cài ở mọi phạm vi và ẩn khỏi marketplace'],
        ['<code>extraKnownMarketplaces</code> (bí danh <code>additionalMarketplaces</code>, v2.1.232)', 'Thêm nguồn marketplace'],
        ['<code>strictKnownMarketplaces</code> (bí danh <code>allowedMarketplaces</code>)', 'Không đặt = không hạn chế; <code>[]</code> = khóa hết; mảng nguồn = allowlist'],
        ['<code>blockedMarketplaces</code>', 'Chặn nguồn'],
        ['<code>allowedChannelPlugins</code>', 'Plugin channel được đẩy tin nhắn vào phiên']
      ] },
      { t: 'key', x: 'Ký tự đại diện <code>"owner/*"</code> (v2.1.223+) cho phép/chặn mọi repo của một owner — <b>chỉ</b> hợp lệ trong <code>strictKnownMarketplaces</code> và <code>blockedMarketplaces</code>.' },
      { t: 'warn', x: 'Subagent trong plugin <b>bỏ qua</b> các khóa <code>hooks</code>, <code>mcpServers</code>, <code>permissionMode</code>, <code>initialPrompt</code>. Muốn hook/MCP, khai báo ở cấp plugin.' }
    ] },
    { icon: '🚀', title: 'Ví dụ, xuất bản, thực hành tốt', blocks: [
      { t: 'tabs', items: [
        ['🔍 pr-review', 'Lệnh: review-pr, check-security, check-tests. Agent: security-reviewer, test-checker, performance-analyzer. Quy trình: hook kiểm tra repo → MCP GitHub lấy PR → ba agent phân tích → tổng hợp (bảo mật, độ phủ test, hiệu năng, khuyến nghị).'],
        ['🛠 devops-automation', 'Lệnh deploy, rollback, status, incident; agent deployment-specialist, incident-commander, alert-analyzer; MCP Kubernetes; hook pre/post-deploy; scripts health-check.'],
        ['📚 documentation', 'Lệnh generate-api-docs, generate-readme, sync-docs, validate-docs; agent api-documenter, code-commentator, example-generator; templates ADR, API endpoint, function docs.']
      ] },
      { t: 'steps', items: [
        'Tạo cấu trúc plugin đầy đủ và viết <code>.claude-plugin/plugin.json</code>.',
        'Viết README (mô tả, thành phần, cài đặt, sử dụng, yêu cầu).',
        'Test cục bộ: <code>claude --plugin-dir ./my-plugin</code> (lệnh, agent, MCP, hook, LSP).',
        'Gửi marketplace → review → xuất bản → người dùng cài bằng một lệnh.'
      ] },
      { t: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Tên rõ ràng, semver, README đầy đủ', 'Gói các tính năng không liên quan'],
        ['Test mọi thành phần cùng nhau, xử lý lỗi graceful', 'Hardcode credential'],
        ['Tài liệu hóa dependency/yêu cầu, thẻ để dễ tìm', 'Bỏ qua versioning/test/tài liệu'],
        ['Giữ plugin tập trung, tương thích ngược', 'Tạo plugin dư thừa, phức tạp hóa dependency']
      ] },
      { t: 'tabs', items: [
        ['🚫 Không cài được', 'Kiểm tra <code>claude --version</code>, cú pháp JSON plugin.json, mạng, quyền.'],
        ['📂 Thành phần không nạp', 'Đường dẫn trong plugin.json khớp thư mục; <code>chmod +x scripts/</code>; <code>claude plugin details &lt;name&gt;</code> (chỉ khi đã tải).'],
        ['🔌 MCP lỗi', 'Biến môi trường, sức khỏe server, <code>/mcp</code>.'],
        ['❓ Lệnh không xuất hiện', '<code>/plugin list --enabled</code>; kiểm tra tóm tắt cài đặt; <code>/reload-plugins</code>; xung đột tên.'],
        ['🪝 Hook lỗi', 'Quyền file, tên sự kiện, log hook.']
      ] }
    ] }
  ],
  summary: [
    'Plugin = gói lệnh + skill + agent + hook + MCP + LSP + cài đặt, cài một lệnh, có tiền tố <code>/plugin:lệnh</code>.',
    'Manifest <code>.claude-plugin/plugin.json</code>; marketplace.json định nghĩa kho; nguồn: path, GitHub, git, git-subdir, npm.',
    'Test bằng <code>--plugin-dir</code>, nạp lại bằng <code>/reload-plugins</code>.',
    'Tổ chức kiểm soát qua <code>enabledPlugins</code>, <code>strictKnownMarketplaces</code>; agent trong plugin bị hạn chế hooks/mcpServers/permissionMode.'
  ],
  cards: [
    ['Plugin là gì?', 'Gói đóng gói lệnh, agent, skill, hook, MCP, LSP, cài đặt, cài bằng một lệnh.'],
    ['Manifest ở đâu?', '<code>.claude-plugin/plugin.json</code>.'],
    ['Tên lệnh của plugin?', '<code>/plugin-name:command</code>.'],
    ['Test plugin cục bộ?', '<code>claude --plugin-dir ./my-plugin</code>.'],
    ['Nạp lại plugin không cần restart?', '<code>/reload-plugins</code>.'],
    ['Cài từ marketplace?', '<code>claude plugin install name@marketplace</code>.'],
    ['Thêm marketplace GitHub?', '<code>/plugin marketplace add owner/repo</code>.'],
    ['Thư mục dữ liệu bền của plugin?', '<code>${CLAUDE_PLUGIN_DATA}</code>.'],
    ['Lưu secret của plugin?', '<code>userConfig</code> với <code>sensitive: true</code> → keychain.'],
    ['Khóa phiên bản nguồn?', '<code>ref</code> và <code>sha</code>.'],
    ['Chỉ cho phép marketplace chọn lọc?', '<code>strictKnownMarketplaces</code> (mảng allowlist).'],
    ['Chặn plugin cụ thể ở doanh nghiệp?', '<code>enabledPlugins: {"p@m": false}</code>.'],
    ['Khóa frontmatter agent plugin bỏ qua?', 'hooks, mcpServers, permissionMode, initialPrompt.'],
    ['LSP plugin cho Python?', 'pyright-lsp.']
  ],
  quiz: [
    { q: 'Lệnh `hello` trong plugin `greet` được gọi là:', o: ['/hello', '/greet:hello', '/greet/hello', '/plugin hello'], a: 1, e: 'Có tiền tố tên plugin.' },
    { q: 'Cách test plugin cục bộ:', o: ['/plugin install ./path', 'claude --plugin-dir ./path', 'npm install', 'git clone'], a: 1, e: 'install cần name@marketplace.' },
    { q: 'Nên tạo plugin khi:', o: ['Việc một lần nhanh', 'Cần đóng gói nhiều thành phần và chia sẻ nhóm', 'Chỉ cần một skill', 'Chỉ cần truy cập dữ liệu MCP'], a: 1, e: 'Các trường hợp còn lại dùng tính năng riêng lẻ.' },
    { q: 'Lưu API key của plugin an toàn bằng:', o: ['plugin.json plain text', 'userConfig sensitive: true (keychain)', 'README', 'hook'], a: 1, e: 'Không để trong file settings văn bản.' },
    { q: 'strictKnownMarketplaces là mảng rỗng [] nghĩa là:', o: ['Không hạn chế', 'Khóa — không cho thêm marketplace', 'Cho phép mọi thứ', 'Lỗi'], a: 1, e: 'Không đặt = không hạn chế.' },
    { q: 'Subagent trong plugin KHÔNG dùng được:', o: ['tools', 'hooks, mcpServers, permissionMode', 'description', 'model'], a: 1, e: 'Hạn chế bảo mật.' },
    { q: 'Sau cài đặt thấy “Run /reload-plugins to activate.” thì:', o: ['Khởi động lại máy', 'Chạy /reload-plugins', 'Xóa plugin', 'Không làm gì'], a: 1, e: 'Không cần restart.' },
    { q: 'Khóa phiên bản plugin từ GitHub dùng:', o: ['ref / sha', 'color', 'timeout', 'alwaysLoad'], a: 0, e: 'Nhánh/tag hoặc hash commit.' }
  ],
  match: [
    ['plugin.json', 'Manifest của plugin'],
    ['marketplace.json', 'Định nghĩa kho plugin'],
    ['--plugin-dir', 'Test plugin cục bộ'],
    ['${CLAUDE_PLUGIN_DATA}', 'Dữ liệu bền của plugin'],
    ['.lsp.json', 'Cấu hình Language Server'],
    ['strictKnownMarketplaces', 'Allowlist marketplace']
  ]
}
);
