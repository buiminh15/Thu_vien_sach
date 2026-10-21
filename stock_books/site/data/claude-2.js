// "Claude Code How-To" – Chương 2: Bộ nhớ (CLAUDE.md).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 2,
  title: 'Bộ nhớ: CLAUDE.md và Auto Memory',
  intro: 'Bộ nhớ giúp Claude giữ ngữ cảnh qua nhiều phiên: tiêu chuẩn dự án cho cả đội, sở thích cá nhân, quy tắc theo thư mục, tài liệu import và cả ghi chú Claude tự học (auto memory).',
  sections: [
    { icon: '🚀', title: 'Khởi tạo và cập nhật nhanh', blocks: [
      { t: 'table', head: ['Cách', 'Dùng khi'], rows: [
        ['<code>/init</code>', 'Dự án mới: tạo CLAUDE.md mẫu (đặt <code>CLAUDE_CODE_NEW_INIT=1</code> cho quy trình tương tác nhiều bước)'],
        ['<code>/memory</code>', 'Mở file bộ nhớ trong editor để xem/sửa/tái tổ chức; chọn Managed / Project / User / Local'],
        ['<code># quy tắc…</code>', 'Thêm nhanh một dòng; Claude hỏi lưu vào file dự án hay cá nhân'],
        ['<code># new rule into memory</code>, <code># remember this</code>', 'Dạng ngôn ngữ tự nhiên, quy tắc nhiều dòng'],
        ['<code>@đường/dẫn</code>', 'Import nội dung file khác vào CLAUDE.md']
      ] },
      { t: 'key', x: '<code>/init</code> = khởi tạo một lần; <code>/memory</code> = bảo trì liên tục. Yêu cầu Claude “ghi nhớ” điều gì đó chung chung sẽ lưu vào <b>auto memory</b>, không phải CLAUDE.md.' },
      { t: 'p', x: '<b>Import</b>: hỗ trợ đường dẫn tương đối/tuyệt đối (<code>@~/.claude/x.md</code>), đệ quy; lần đầu import ngoài dự án có hộp thoại phê duyệt; không được đánh giá trong code span/khối code. (README ghi “tối đa 5” ở một chỗ và “4 chặng” ở chỗ khác — hãy giữ lồng nông.)' }
    ] },
    { icon: '🏛', title: 'Hệ phân cấp bộ nhớ', blocks: [
      { t: 'p', x: 'Các file được nạp tự động khi khởi động Claude Code; cấp cao hơn ưu tiên hơn. Claude còn duyệt lên các thư mục cha và nạp CLAUDE.md của thư mục con khi cần (theo ngữ cảnh). File bộ nhớ được <b>nối lại</b>, không ghi đè nhau.' },
      { t: 'widget', name: 'mem-hierarchy', title: 'Bấm từng cấp để xem vị trí, phạm vi và nên dùng cho việc gì' },
      { t: 'tip', x: 'Từ v2.1.277 <code>./AGENTS.md</code> được nạp ở tầng Project nếu không có CLAUDE.md/CLAUDE.local.md (điều khiển bằng “Project instructions” trong <code>/config</code>). <code>CLAUDE.local.md</code> có thể là tính năng cũ — dự án mới nên dùng <code>~/.claude/CLAUDE.md</code> hoặc <code>.claude/rules/</code>.' }
    ] },
    { icon: '📐', title: 'Quy tắc mô-đun & cài đặt', blocks: [
      { t: 'list', items: [
        '<code>.claude/rules/*.md</code> (đệ quy, hỗ trợ thư mục con và symlink); <code>~/.claude/rules/</code> là mặc định cá nhân, nạp trước quy tắc dự án.',
        'Quy tắc theo đường dẫn: frontmatter <code>paths: src/api/**/*.ts</code>; glob như <code>**/*.ts</code>, <code>src/**/*.{ts,tsx}</code>.',
        '<code>claudeMdExcludes</code> (trong settings.json): bỏ CLAUDE.md không liên quan trong monorepo, dùng glob tuyệt đối bắt đầu bằng <code>**/</code>.',
        '<code>--add-dir</code> + <code>CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD=1</code>: nạp CLAUDE.md của thư mục khác.'
      ] },
      { t: 'table', head: ['Cấp settings', 'Vị trí'], rows: [
        ['1 (cao nhất)', 'Managed policy (cấp hệ thống)'],
        ['2', '<code>managed-settings.d/</code> (v2.1.83+, gộp theo bảng chữ cái)'],
        ['3', '<code>.claude/settings.local.json</code> (git bỏ qua)'],
        ['4', '<code>.claude/settings.json</code> (commit)'],
        ['5 (thấp nhất)', '<code>~/.claude/settings.json</code>']
      ] }
    ] },
    { icon: '🧠', title: 'Auto Memory', blocks: [
      { t: 'p', x: 'Claude tự ghi ghi chú có phân loại (<code>user</code>, <code>feedback</code>, <code>project</code>, <code>reference</code>) vào <code>~/.claude/projects/&lt;project&gt;/memory/</code>; bỏ qua những gì suy ra được từ code. Cần Claude Code ≥ v2.1.59.' },
      { t: 'list', items: [
        '<code>MEMORY.md</code> là điểm vào: <b>200 dòng đầu</b> nạp vào system prompt khi bắt đầu; file chủ đề (<code>prefers-pnpm.md</code>…) nạp theo yêu cầu.',
        'Đổi thư mục: <code>autoMemoryDirectory</code> (v2.1.74+; đường dẫn tuyệt đối hoặc <code>~/</code>).',
        'Mọi worktree/thư mục con cùng repo dùng chung một thư mục auto memory.',
        'Tắt/bật: <code>CLAUDE_CODE_DISABLE_AUTO_MEMORY=1</code> (tắt) / <code>0</code> (ép bật).',
        'Subagent có bộ nhớ riêng: <code>memory: user | project | local</code> (đọc 200 dòng/25KB đầu MEMORY.md).'
      ] },
      { t: 'table', head: ['', 'Claude web/desktop', 'Claude Code (CLAUDE.md)'], rows: [
        ['Tổng hợp tự động', '✅ mỗi 24 giờ', '❌ thủ công (+ auto memory)'],
        ['Xuyên dự án', '✅ chia sẻ', '❌ theo dự án'],
        ['Chia sẻ đội', '✅ project chung', '✅ qua git']
      ] }
    ] },
    { icon: '✅', title: 'Thực hành tốt', blocks: [
      { t: 'table', head: ['Nên', 'Không nên'], rows: [
        ['Cụ thể: “dùng thụt lề 2 dấu cách cho JS”', 'Mơ hồ: “theo best practices”'],
        ['Chia mục rõ ràng, giữ mỗi file &lt; 500 dòng', 'Nhét quá nhiều / quá nhiều ghi đè thư mục con'],
        ['Dùng <code>@import</code> thay vì sao chép tài liệu', 'Lưu API key, mật khẩu, PII, bí mật'],
        ['Ghi lệnh hay dùng (<code>npm test</code>, <code>npm run lint</code>)', 'Để bộ nhớ lỗi thời không cập nhật'],
        ['Commit CLAUDE.md dự án vào git', 'Lồng import quá sâu']
      ] },
      { t: 'tabs', items: [
        ['📁 Mẫu CLAUDE.md dự án', 'Mục chính: Project Overview (tên, stack, team), Architecture (<code>@docs/architecture.md</code>), Development Standards (style, đặt tên: file kebab-case, class PascalCase, hàm camelCase, hằng UPPER_SNAKE_CASE, bảng snake_case), Git workflow, Testing (≥80% coverage), API standards, Database, Deployment, Common Commands, Known Issues.'],
        ['📂 Mẫu theo thư mục', '<code>src/api/CLAUDE.md</code> bổ sung cho root: validate bằng Zod, JWT 24h + refresh token, định dạng response <code>{success,data,timestamp,version}</code>, phân trang cursor (tối đa 100, mặc định 20), rate limit 1000/giờ (429 + retry-after), cache Redis 5 phút.'],
        ['👤 Mẫu cá nhân', '<code>~/.claude/CLAUDE.md</code>: kinh nghiệm, ngôn ngữ ưa thích, phong cách giao tiếp, xử lý lỗi, comment giải thích WHY, TDD, kiến trúc modular, log <code>[DEBUG]</code>, công cụ (VS Code, Prettier, ESLint, Jest).']
      ] },
      { t: 'widget', name: 'mem-picker', title: 'Quy tắc này nên lưu ở cấp bộ nhớ nào? (tình huống ngẫu nhiên)' }
    ] }
  ],
  summary: [
    '<code>/init</code> khởi tạo, <code>/memory</code> bảo trì, <code>#</code> thêm nhanh, <code>@file</code> import.',
    'Thứ tự ưu tiên: Managed → Project → Rules → User → Local → Auto memory.',
    'Auto memory: 200 dòng đầu MEMORY.md nạp khi khởi động, file chủ đề nạp theo yêu cầu.',
    'Cụ thể, ngắn, không bí mật, dùng import tránh trùng lặp.'
  ],
  cards: [
    ['Lệnh khởi tạo CLAUDE.md?', '<code>/init</code>.'],
    ['Lệnh sửa file bộ nhớ?', '<code>/memory</code> (mở editor).'],
    ['Thêm nhanh một quy tắc?', 'Bắt đầu tin nhắn bằng <code>#</code>.'],
    ['Cú pháp import?', '<code>@path/to/file</code>.'],
    ['CLAUDE.md dự án đặt ở đâu?', '<code>./CLAUDE.md</code> hoặc <code>./.claude/CLAUDE.md</code>.'],
    ['CLAUDE.md cá nhân?', '<code>~/.claude/CLAUDE.md</code>.'],
    ['Quy tắc theo đường dẫn?', '<code>.claude/rules/*.md</code> với frontmatter <code>paths:</code>.'],
    ['Bỏ CLAUDE.md không liên quan?', '<code>claudeMdExcludes</code> (glob, bắt đầu <code>**/</code>).'],
    ['Auto memory nằm đâu?', '<code>~/.claude/projects/&lt;project&gt;/memory/</code>.'],
    ['Bao nhiêu dòng MEMORY.md được nạp?', '200 dòng đầu.'],
    ['Đổi thư mục auto memory?', '<code>autoMemoryDirectory</code> (v2.1.74+).'],
    ['Tắt auto memory?', '<code>CLAUDE_CODE_DISABLE_AUTO_MEMORY=1</code>.'],
    ['Memory của subagent?', '<code>memory: user | project | local</code>.'],
    ['Kích thước khuyến nghị mỗi file?', 'Dưới 500 dòng.']
  ],
  quiz: [
    { q: 'Cấp bộ nhớ ưu tiên cao nhất:', o: ['User', 'Project', 'Managed Policy', 'Auto memory'], a: 2, e: 'Chính sách tổ chức.' },
    { q: 'Quy tắc code style cho cả đội nên đặt ở:', o: ['~/.claude/CLAUDE.md', './CLAUDE.md (commit vào git)', 'Auto memory', 'Không đâu'], a: 1, e: 'Project memory chia sẻ qua git.' },
    { q: 'Sở thích phím tắt cá nhân nên ở:', o: ['Managed', 'Project', 'User (~/.claude/CLAUDE.md)', 'rules/api'], a: 2, e: 'Cá nhân, mọi dự án.' },
    { q: 'Auto memory nạp khi khởi động:', o: ['Tất cả file', '200 dòng đầu MEMORY.md', 'Không gì', 'Chỉ topic files'], a: 1, e: 'Topic file nạp theo yêu cầu.' },
    { q: 'Điều KHÔNG nên đưa vào CLAUDE.md:', o: ['Lệnh test', 'API key', 'Quy ước đặt tên', 'Link tài liệu'], a: 1, e: 'Không lưu bí mật.' },
    { q: 'Quy tắc chỉ áp dụng cho src/api/**/*.ts dùng:', o: ['paths: trong frontmatter của rules', 'description', 'model', 'allowed-tools'], a: 0, e: 'Quy tắc theo đường dẫn.' },
    { q: 'Cách tránh trùng nội dung README trong CLAUDE.md:', o: ['Copy/paste', '@README.md', 'Xóa README', 'Dùng #'], a: 1, e: 'Import thay vì sao chép.' },
    { q: 'File bộ nhớ nhiều cấp được:', o: ['Ghi đè hoàn toàn', 'Nối lại (concatenated)', 'Chỉ file đầu', 'Bỏ qua'], a: 1, e: 'CLAUDE.md thư mục con bổ sung root.' }
  ],
  match: [
    ['/init', 'Tạo CLAUDE.md mẫu'],
    ['/memory', 'Mở editor chỉnh bộ nhớ'],
    ['#', 'Thêm quy tắc nhanh'],
    ['@path', 'Import file'],
    ['MEMORY.md', 'Điểm vào auto memory'],
    ['claudeMdExcludes', 'Bỏ CLAUDE.md không liên quan']
  ]
}
);
