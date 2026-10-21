// "Claude Code How-To" – Chương 9: Chế độ làm việc nâng cao (plan, thinking, auto, quyền, nền, lịch, print, phiên).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.claudehowto = BOOK_DATA.claudehowto || { chapters: [] };
BOOK_DATA.claudehowto.chapters.push(

{
  n: 9,
  title: 'Nâng cao (1): Plan, Thinking, Auto, Quyền, Tác vụ nền, Print, Phiên',
  intro: 'Các cơ chế điều khiển <i>cách Claude làm việc</i>: lập kế hoạch trước khi code, suy luận sâu, tự chủ có bộ phân loại an toàn, sáu chế độ quyền, chạy nền và theo lịch, chế độ không tương tác cho CI, và quản lý nhiều phiên. (Nguồn tiếng Anh, được Việt hóa ở đây.)',
  sections: [
    { icon: '🗺', title: 'Chế độ lập kế hoạch (Plan Mode)', blocks: [
      { t: 'p', x: 'Hai pha: <b>Lập kế hoạch</b> (Claude phân tích, đề xuất kế hoạch chi tiết) rồi <b>Triển khai</b> (sau khi bạn duyệt). Dùng cho: refactor nhiều file, tính năng mới, thay đổi kiến trúc, migration DB, thiết kế lại API. Đừng dùng cho: sửa lỗi nhỏ, format, sửa một file, truy vấn nhanh.' },
      { t: 'table', head: ['Cách bật', 'Cú pháp'], rows: [
        ['Lệnh slash', '<code>/plan Implement user authentication system</code>'],
        ['Cờ CLI', '<code>claude --permission-mode plan</code>'],
        ['Mặc định', '<code>{"permissions": {"defaultMode": "plan"}}</code>'],
        ['Phím tắt', '<code>Shift+Tab</code> (đổi chế độ quyền); <code>Alt+M</code> trên Windows khi runtime không bật VT input']
      ] },
      { t: 'list', items: [
        'Chỉnh kế hoạch: nói “bỏ hàng đợi, thêm sau”; hoặc <code>Ctrl+G</code> mở kế hoạch trong editor ngoài.',
        'Bí danh mô hình <code>opusplan</code>: Opus để lập kế hoạch, Sonnet để thực thi (<code>claude --model opusplan "…"</code>).',
        'Lợi ích: cấu trúc rõ ràng, duyệt trước khi chạy, nhận diện rủi ro sớm, chia pha/mốc.'
      ] }
    ] },
    { icon: '💭', title: 'Extended Thinking (suy luận mở rộng)', blocks: [
      { t: 'p', x: 'Claude dành nhiều thời gian suy luận từng bước: chia nhỏ bài toán, xét nhiều hướng, cân nhắc đánh đổi, ca biên. Ví dụ “monolith hay microservices?”: đội 5 người, ít DevOps, MVP 6 tháng → khuyến nghị <b>modular monolith</b>, tách microservice sau khi cần (≈50k người dùng hoặc module cần scale riêng).' },
      { t: 'table', head: ['Cách', 'Chi tiết'], rows: [
        ['Bật/tắt', '<code>Option+T</code> (macOS) / <code>Alt+T</code> (Win/Linux), hoặc <code>/config</code>'],
        ['Xem suy luận', '<code>Ctrl+O</code> (verbose)'],
        ['Mức nỗ lực', '<code>/effort low|medium|high|max</code>, <code>--effort high</code>, <code>CLAUDE_CODE_EFFORT_LEVEL</code> (<code>max</code> chỉ Opus 4.6)'],
        ['Ngân sách token', '<code>MAX_THINKING_TOKENS</code> (mô hình khác có ngân sách cố định tới 31.999)'],
        ['Từ khóa', '“ultrathink” trong prompt kích hoạt suy luận sâu']
      ] },
      { t: 'tip', x: 'Dùng cho quyết định kiến trúc, bài toán phức tạp; <b>đừng dùng</b> cho truy vấn đơn giản.' }
    ] },
    { icon: '🤖', title: 'Auto Mode & sáu chế độ quyền', blocks: [
      { t: 'widget', name: 'perm-modes', title: 'So sánh 6 chế độ quyền: chọn chế độ, xem Claude được làm gì mà không hỏi' },
      { t: 'p', x: '<code>Shift+Tab</code> luân phiên default → acceptEdits → plan, rồi bypassPermissions/auto nếu có (<code>dontAsk</code> không bao giờ nằm trong vòng xoay). Đặt mặc định: <code>--permission-mode</code> hoặc <code>permissions.defaultMode</code>. Từ v2.1.284 phiên tương tác bắt đầu ở <b>auto</b> nếu chưa cấu hình; từ v2.1.302 <code>claude -p</code> và SDK không đặt chế độ sẽ bắt đầu ở <code>default</code> trên nhà cung cấp bên thứ ba / tắt telemetry / cài mới (thêm <code>--permission-mode auto</code> để giữ auto).' },
      { t: 'key', x: '<b>Auto mode</b>: bộ phân loại nền duyệt từng hành động. Thứ tự quyết định: ① quy tắc allow/deny → ② đọc & sửa file tự duyệt → ③ bộ phân loại → ④ quay lại hỏi sau <b>3 lần chặn liên tiếp hoặc 20 lần tổng</b>. Yêu cầu mô hình Sonnet 4.6/Opus 4.6; tốn thêm token (trừ Enterprise/API từ v2.1.278+ kiểm tra phía máy chủ không tính phí).' },
      { t: 'table', head: ['Auto chặn mặc định', 'Auto cho phép mặc định'], rows: [
        ['<code>curl | bash</code> (cài qua pipe)', 'Đọc/ghi/sửa file dự án'],
        ['Gửi dữ liệu nhạy cảm ra ngoài', 'Cài dependency đã khai báo (<code>npm install</code>)'],
        ['Deploy production', 'HTTP chỉ-đọc (<code>curl</code> lấy tài liệu)'],
        ['Xóa hàng loạt (<code>rm -rf</code>)', 'Push lên nhánh hiện tại'],
        ['Đổi IAM', ''],
        ['Force push lên main', '']
      ] },
      { t: 'list', items: [
        '<code>claude auto-mode defaults</code> in quy tắc mặc định dạng JSON; quản trị đặt hạ tầng tin cậy bằng <code>autoMode.environment</code>.',
        'Không muốn bộ phân loại? Dùng <code>setup-auto-mode-permissions.py</code> (<code>--dry-run</code>, <code>--include-edits</code>, <code>--include-tests</code>, <code>--include-git-write</code>, <code>--include-packages</code>) để gieo allowlist an toàn; loại các lệnh nguy hiểm (<code>rm -rf</code>, <code>sudo</code>, force push, <code>DROP TABLE</code>, <code>terraform destroy</code>); chạy hai lần không trùng lặp.'
      ] },
      { t: 'table', head: ['Mục đích', 'Chế độ khuyến nghị'], rows: [
        ['Review code, chỉ đọc', '<code>plan</code>'],
        ['Lập trình cặp, hỏi từng thay đổi', '<code>default</code>'],
        ['Tự động hóa sửa lint hàng loạt', '<code>acceptEdits</code>'],
        ['Làm việc tự chủ có rào chắn', '<code>auto</code>'],
        ['Tránh trừ khi thật sự cần', '<code>bypassPermissions</code>']
      ] }
    ] },
    { icon: '⏱', title: 'Tác vụ nền & theo lịch', blocks: [
      { t: 'tabs', items: [
        ['🧵 Nền', 'Bảo Claude “chạy test ở nền” hoặc <code>Ctrl+B</code> đưa shell/agent đang chạy xuống nền. <code>/tasks</code> (bí danh <code>/bashes</code>) xem/dừng. Tắt: <code>CLAUDE_CODE_DISABLE_BACKGROUND_TASKS=true</code>. Số agent đồng thời: <code>CLAUDE_CODE_MAX_CONCURRENT_SUBAGENTS</code> (mặc định 20). Không có khối settings.json riêng.'],
        ['🔁 /loop (v2.1.72+)', '<code>/loop 5m check if the deployment finished</code> hoặc ngôn ngữ tự nhiên “every 30 minutes”; cron 5 trường; nhắc một lần (“remind me at 3pm…”). Công cụ <code>CronCreate</code>, <code>CronList</code>, <code>CronDelete</code>.'],
        ['📋 Giới hạn lịch', 'Tối đa 50 tác vụ/phiên; theo phiên (mất khi kết thúc); lặp tự hết hạn sau 3 ngày; chỉ chạy khi Claude Code đang chạy, không bù lần lỡ; jitter ≤10% khoảng lặp (tối đa 15 phút), một lần ≤90s ở :00/:30. Tắt: <code>CLAUDE_CODE_DISABLE_CRON=1</code>.'],
        ['☁️ /schedule', 'Tác vụ lịch trên hạ tầng Anthropic: “daily at 9am run the test suite…” — bền qua khởi động lại, không cần Claude Code chạy cục bộ. Muốn bền khác: CI/CD, GitHub Actions, scheduled tasks của Desktop.']
      ] }
    ] },
    { icon: '🧾', title: 'Print mode (<code>claude -p</code>) cho script & CI', blocks: [
      { t: 'p', x: 'Chạy không tương tác (thay <code>--headless</code> cũ): tự động hóa, CI/CD, xử lý hàng loạt.' },
      { t: 'table', head: ['Mục đích', 'Lệnh'], rows: [
        ['Một tác vụ', '<code>claude -p "Run all tests"</code>'],
        ['Từ pipe', '<code>cat error.log | claude -p "Analyze these errors"</code>'],
        ['JSON', '<code>claude -p --output-format json "…"</code>'],
        ['Giới hạn lượt', '<code>--max-turns 5</code>'],
        ['Kiểm schema', '<code>--json-schema \'{"type":"object",…}\'</code>'],
        ['Không lưu phiên', '<code>--no-session-persistence</code>']
      ] },
      { t: 'tip', x: 'GitHub Actions: checkout → <code>npm install -g @anthropic-ai/claude-code</code> → <code>ANTHROPIC_API_KEY</code> từ secrets → <code>claude -p --output-format json --max-turns 3 "Review this PR…" &gt; review.json</code> → đăng bình luận bằng <code>actions/github-script</code>.' }
    ] },
    { icon: '🗂', title: 'Quản lý phiên', blocks: [
      { t: 'table', head: ['Lệnh', 'Mô tả'], rows: [
        ['<code>claude -c</code>', 'Tiếp tục hội thoại gần nhất'],
        ['<code>claude -r "session"</code>', 'Tiếp tục theo tên hoặc ID'],
        ['<code>/resume</code>, <code>/rename</code>', 'Tiếp tục theo ID/tên, đặt tên phiên hiện tại'],
        ['<code>/fork</code>', 'Phân nhánh phiên (xem chương 1 về thay đổi v2.1.212)'],
        ['<code>claude --resume auth-refactor --fork-session "thử OAuth"</code>', 'Resume + fork để thử hướng khác']
      ] },
      { t: 'list', items: [
        'Phiên được lưu tự động và có thể resume.',
        'Thực hành tốt: tách phiên cho từng nhiệm vụ, lưu trạng thái quan trọng, dọn phiên cũ, đừng trộn việc không liên quan.',
        'Plan: dùng cho tác vụ nhiều bước; Thinking: cho quyết định kiến trúc; Nền: đừng khởi động quá nhiều tác vụ đồng thời.'
      ] }
    ] }
  ],
  summary: [
    'Plan mode: lập kế hoạch → duyệt → triển khai; <code>/plan</code>, <code>--permission-mode plan</code>, Shift+Tab; <code>opusplan</code> = Opus lập kế hoạch + Sonnet làm.',
    'Extended thinking: <code>Alt/Option+T</code>, <code>/effort</code>; dùng cho quyết định phức tạp.',
    'Sáu chế độ quyền: default, acceptEdits, plan, auto, dontAsk, bypassPermissions; auto có bộ phân loại (3 chặn liên tiếp/20 tổng → hỏi lại).',
    '<code>Ctrl+B</code> + <code>/tasks</code> cho nền; <code>/loop</code> và <code>/schedule</code> cho lịch; <code>claude -p</code> cho CI; <code>-c</code>/<code>-r</code>/<code>--fork-session</code> cho phiên.'
  ],
  cards: [
    ['Plan mode làm gì?', 'Phân tích và đề xuất kế hoạch để bạn duyệt trước khi thực thi.'],
    ['Bật plan mode?', '<code>/plan</code>, <code>--permission-mode plan</code>, hoặc Shift+Tab.'],
    ['<code>opusplan</code>?', 'Opus lập kế hoạch, Sonnet thực thi.'],
    ['Sửa kế hoạch bằng editor?', '<code>Ctrl+G</code>.'],
    ['Bật/tắt extended thinking?', '<code>Alt+T</code> / <code>Option+T</code>.'],
    ['Đặt mức nỗ lực?', '<code>/effort</code> hoặc <code>--effort</code>; <code>max</code> chỉ Opus 4.6.'],
    ['Sáu chế độ quyền?', 'default, acceptEdits, plan, auto, dontAsk, bypassPermissions.'],
    ['Auto mode fallback?', 'Hỏi lại sau 3 lần chặn liên tiếp hoặc 20 lần tổng.'],
    ['Auto chặn mặc định?', 'curl|bash, gửi dữ liệu nhạy cảm, deploy prod, rm -rf hàng loạt, đổi IAM, force push main.'],
    ['Đưa tác vụ xuống nền?', '<code>Ctrl+B</code>; quản lý bằng <code>/tasks</code>.'],
    ['Lặp lại theo lịch?', '<code>/loop 5m …</code>; tối đa 50 tác vụ/phiên, hết hạn sau 3 ngày.'],
    ['Lịch bền vững?', '<code>/schedule</code> (cloud).'],
    ['Chạy không tương tác?', '<code>claude -p "…"</code>.'],
    ['Tiếp tục phiên gần nhất?', '<code>claude -c</code>.']
  ],
  quiz: [
    { q: 'Mode nào đọc được file nhưng không sửa (nghiên cứu)?', o: ['auto', 'plan', 'dontAsk', 'acceptEdits'], a: 1, e: 'Plan = chỉ đọc.' },
    { q: 'Auto mode quay lại hỏi người dùng sau:', o: ['1 lần chặn', '3 lần chặn liên tiếp hoặc 20 lần tổng', '100 lần', 'Không bao giờ'], a: 1, e: 'Bảo đảm người dùng giữ quyền kiểm soát.' },
    { q: 'Auto mode chặn mặc định hành động nào?', o: ['Đọc file', 'curl | bash', 'npm install từ manifest', 'Push nhánh hiện tại'], a: 1, e: 'Cài đặt qua pipe-to-shell bị chặn.' },
    { q: 'Chế độ phù hợp tự động sửa lint hàng loạt:', o: ['plan', 'acceptEdits', 'default', 'dontAsk'], a: 1, e: 'Tự chấp nhận sửa file.' },
    { q: 'Công cụ nào để lặp tác vụ?', o: ['/loop', '/rewind', '/init', '/diff'], a: 0, e: 'Hoặc CronCreate.' },
    { q: 'Tác vụ lặp theo phiên tự hết hạn sau:', o: ['1 giờ', '3 ngày', '30 ngày', 'Không hết hạn'], a: 1, e: 'Cũng mất khi phiên kết thúc.' },
    { q: 'Cờ không tương tác cho CI:', o: ['--headless', '-p', '--ci', '--batch'], a: 1, e: 'Print mode thay --headless.' },
    { q: 'Resume rồi thử hướng khác mà giữ bản gốc:', o: ['claude -c', 'claude --resume X --fork-session', '/clear', '/compact'], a: 1, e: 'Fork phiên.' }
  ],
  match: [
    ['Shift+Tab', 'Luân phiên chế độ quyền'],
    ['Ctrl+G', 'Mở kế hoạch trong editor ngoài'],
    ['opusplan', 'Opus lập kế hoạch + Sonnet thực thi'],
    ['--max-turns', 'Giới hạn lượt của claude -p'],
    ['/tasks', 'Xem/dừng tác vụ nền'],
    ['dontAsk', 'Chỉ công cụ đã duyệt trước']
  ]
}
);
