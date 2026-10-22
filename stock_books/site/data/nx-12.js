// Next.js – Chương 12 (Guides): Xác thực và bảo mật dữ liệu.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 12,
  title: 'Guides: Xác thực và bảo mật dữ liệu',
  intro: 'Xác thực chia thành ba khái niệm: <b>Authentication</b> (bạn là ai), <b>Session management</b> (theo dõi trạng thái đăng nhập qua các request) và <b>Authorization</b> (được truy cập gì). Guide Data Security bổ sung cách nghĩ về dữ liệu khi dùng Server Components và Server Actions. Khuyến nghị: dùng thư viện auth thay vì tự viết.',
  sections: [
    { icon: '🔐', title: 'Authentication: đăng ký / đăng nhập', blocks: [
      { t: 'steps', items: [
        '<b>Thu thập thông tin</b>: form gọi Server Action (<code>&lt;form action={signup}&gt;</code>).',
        '<b>Validate trên server</b> bằng schema (Zod, Valibot, Yup): <code>safeParse</code> rồi <b>return sớm</b> với <code>errors</code> để không gọi provider/DB vô ích; hiển thị bằng <code>useActionState</code>.',
        '<b>Tạo user / kiểm tra credential</b>: băm mật khẩu (ví dụ bcrypt) trước khi lưu; insert DB hoặc gọi API của thư viện auth.',
        '<b>Tạo session</b> và <b>redirect</b> (ví dụ <code>/profile</code>).'
      ] },
      { t: 'tip', x: 'Có thể debounce kiểm tra trùng email/username ngay khi người dùng gõ để tránh submit vô ích. Ví dụ trong guide cố ý dài dòng để minh hoạ — tự triển khai an toàn rất phức tạp nên nên dùng Auth Library (Auth0, Better Auth, Clerk, NextAuth.js/Auth.js, Supabase, WorkOS…).' }
    ] },
    { icon: '🍪', title: 'Quản lý session', blocks: [
      { t: 'table', head: ['Loại', 'Cách hoạt động', 'Đánh đổi'], rows: [
        ['<b>Stateless</b>', 'Dữ liệu/token session nằm trong cookie, gửi theo mỗi request', 'Đơn giản; kém an toàn nếu cài sai'],
        ['<b>Database</b>', 'Dữ liệu session trong DB; trình duyệt chỉ nhận session ID mã hoá', 'An toàn hơn (đăng xuất mọi thiết bị, theo dõi thiết bị); phức tạp, tốn tài nguyên']
      ] },
      { t: 'list', items: [
        '<b>Stateless</b>: tạo secret (<code>openssl rand -base64 32</code>) lưu vào env <code>SESSION_SECRET</code>; mã hoá/giải mã bằng thư viện như <b>Jose</b> (JWT HS256, hết hạn 7 ngày) hoặc iron-session; quản lý cookie bằng API <code>cookies()</code>; file đặt <code>import \'server-only\'</code>.',
        '<b>Payload tối thiểu</b> (userId, role); không chứa PII hay dữ liệu nhạy cảm như email, số điện thoại, mật khẩu.',
        '<b>Tuỳ chọn cookie khuyến nghị</b>: <code>HttpOnly</code> (JS không đọc được), <code>Secure</code> (chỉ https), <code>SameSite</code> (lax), <code>Max-Age/Expires</code>, <code>Path</code>. <b>Luôn set cookie trên server</b> để chống giả mạo phía client.',
        '<b>Refresh</b> session bằng cách đặt lại cookie với thời hạn mới; <b>xoá</b> bằng <code>cookieStore.delete(\'session\')</code> khi logout rồi redirect <code>/login</code>.',
        '<b>Database session</b>: bảng sessions (userId, expiresAt), mã hoá sessionId, lưu cookie để kiểm tra lạc quan trong Proxy; có thể cache server theo vòng đời session.'
      ] }
    ] },
    { icon: '🛂', title: 'Authorization', blocks: [
      { t: 'table', head: ['Kiểu kiểm tra', 'Dựa trên', 'Dùng cho'], rows: [
        ['<b>Optimistic</b>', 'Dữ liệu session trong cookie', 'Nhanh: ẩn/hiện UI, redirect theo quyền'],
        ['<b>Secure</b>', 'Dữ liệu session trong DB', 'Thao tác với dữ liệu/hành động nhạy cảm']
      ] },
      { t: 'list', items: [
        '<b>Proxy (tuỳ chọn)</b>: kiểm tra lạc quan, tập trung logic redirect (route bảo vệ → <code>/login</code>, user đã đăng nhập mà vào route công khai → <code>/dashboard</code>), bảo vệ route tĩnh dùng chung (paywall). Proxy chạy ở mọi route kể cả prefetch nên <b>chỉ đọc cookie, không truy vấn DB</b>; không phải tuyến phòng thủ duy nhất.',
        '<b>Data Access Layer (DAL)</b>: gom truy vấn dữ liệu và logic quyền vào một nơi; hàm <code>verifySession()</code> (bọc <code>React.cache</code>) đọc cookie, giải mã, <code>redirect(\'/login\')</code> nếu không hợp lệ. Lưu ý <code>cache</code> chỉ dedupe trong một render pass, không có tác dụng ở Server Action/Route Handler.',
        '<b>DTO</b>: chỉ trả về field cần thiết (id, name), chọn cột tường minh; ví dụ <code>canSeePhoneNumber(viewer, team)</code>.',
        '<b>Server Components</b>: kiểm tra vai trò để render có điều kiện (admin vs user). <b>Layouts</b> không re-render khi điều hướng nên <b>không</b> kiểm tra quyền ở layout; kiểm tra gần nguồn dữ liệu hoặc ngay trong component cần hiển thị. Đừng “return null ở layout” (kiểu SPA) vì còn nhiều entry point khác.',
        '<b>Auth và streaming</b>: <code>await cookies()</code> ở layout làm chậm chunk đầu; chuyển await vào component con (UserMenu) bọc Suspense. Client Component không import được DAL: lấy dữ liệu ở Server Component rồi truyền props/context, dùng <code>taintUniqueValue</code> để chặn lộ field nhạy cảm.',
        '<b>Server Actions và Route Handlers</b>: coi như API công khai — kiểm tra session và role bên trong (Route Handler trả <b>401</b> nếu chưa đăng nhập, <b>403</b> nếu thiếu quyền).'
      ] },
      { t: 'widget', name: 'auth-layers', title: 'Lớp nào chặn request này?' }
    ] },
    { icon: '🛡️', title: 'Data Security: nghĩ về dữ liệu với Server Components', blocks: [
      { t: 'table', head: ['Cách lấy dữ liệu', 'Khi nào'], rows: [
        ['<b>HTTP API bên ngoài</b> (Zero Trust)', 'Dự án/tổ chức lớn đã có API REST/GraphQL và thực hành bảo mật; gọi bằng fetch kèm cookie/token'],
        ['<b>Data Access Layer</b>', 'Dự án mới: thư viện nội bộ chỉ chạy trên server, kiểm tra quyền, trả DTO tối thiểu; chỉ DAL đọc <code>process.env</code>'],
        ['<b>Component-level</b>', 'Prototype/học; dễ lộ dữ liệu nhạy cảm khi truyền cả object xuống Client Component']
      ] },
      { t: 'tip', x: 'Chọn <b>một</b> cách và đừng trộn, để lập trình viên và người audit biết cần chờ đợi gì.' },
      { t: 'list', items: [
        '<b>Tainting</b>: bật <code>experimental.taint</code> rồi dùng <code>experimental_taintObjectReference</code>/<code>taintUniqueValue</code> — chỉ là lớp phụ, vẫn phải lọc dữ liệu trong DAL. Function/class đã bị chặn truyền sang Client mặc định. <code>import \'server-only\'</code> gây lỗi build nếu import vào client.',
        '<b>Bảo mật Server Actions tích hợp</b>: action ID mã hoá không xác định (tính lại giữa các build, cache tối đa 14 ngày) và <b>dead code elimination</b> (action không dùng bị loại). Vẫn coi là có thể bị gọi trực tiếp bằng POST.',
        '<b>Validate mọi input từ client</b> (form, URL params, headers, searchParams) — đừng tin <code>?isAdmin=true</code>; xác minh lại bằng cookie/token.',
        '<b>Kiểm tra lại trong action</b>: kiểm tra auth ở trang không bao phủ action định nghĩa trong trang. Ngoài authentication còn phải <b>authorization</b> (người này có quyền với tài nguyên này?) để chống <b>IDOR</b>: so <code>post.authorId</code> với <code>session.user.id</code> trước khi xoá.',
        '<b>Mutation qua DAL</b> (<code>server-only</code>), action <code>"use server"</code> chỉ mỏng; chỉ <b>trả về giá trị cần thiết</b> (<code>{ success: true }</code>) thay vì cả bản ghi DB; cân nhắc <b>rate limiting</b> cho thao tác tốn kém.',
        '<b>Closure và mã hoá</b>: biến bắt trong closure của action được mã hoá khi gửi qua client (khoá riêng mỗi build); đừng chỉ dựa vào mã hoá. Self-host nhiều server: đặt <code>NEXT_SERVER_ACTIONS_ENCRYPTION_KEY</code> (base64, 16/24/32 byte).',
        '<b>Allowed origins / CSRF</b>: chỉ POST được gọi action; Next.js so <code>Origin</code> với <code>Host</code> (hoặc <code>X-Forwarded-Host</code>), khác thì huỷ. Dùng <code>serverActions.allowedOrigins</code> khi có reverse proxy.',
        '<b>Không tạo side effect khi render</b>: không set cookie/revalidate trong lúc render; dùng Server Action (POST) cho mutation, tránh GET gây CSRF.'
      ] },
      { t: 'key', x: '<b>Checklist audit</b>: DAL có tách biệt không? <code>"use client"</code> có nhận props quá rộng? <code>"use server"</code> có validate input, xác thực lại, kiểm tra sở hữu, lọc return? Thư mục <code>[param]</code> là input người dùng — đã validate? <code>proxy.ts</code> và <code>route.ts</code> quyền lực lớn — audit kỹ, pentest định kỳ.' }
    ] }
  ],
  summary: [
    'Auth = authentication + session management + authorization; ưu tiên thư viện auth.',
    'Session stateless (cookie ký, Jose) hay database; cookie HttpOnly, Secure, SameSite, set trên server.',
    'Authorization: optimistic (Proxy, cookie) và secure (DB); DAL + DTO; không kiểm tra ở layout.',
    'Server Action là endpoint công khai: validate input, xác thực/uỷ quyền lại, chống IDOR, lọc return.'
  ],
  cards: [
    ['Ba khái niệm của auth?', 'Authentication, session management, authorization.'],
    ['Validate form ở đâu?', 'Trên server (Zod/Valibot/Yup), return sớm khi sai.'],
    ['Mật khẩu lưu thế nào?', 'Băm (bcrypt) trước khi lưu.'],
    ['Stateless vs database session?', 'Cookie chứa token vs DB giữ dữ liệu, cookie chỉ có session ID mã hoá.'],
    ['Cookie options khuyến nghị?', 'HttpOnly, Secure, SameSite, Max-Age/Expires, Path.'],
    ['Payload session chứa gì?', 'Tối thiểu (userId, role); không PII/mật khẩu.'],
    ['Optimistic vs secure check?', 'Dựa cookie (nhanh) vs dựa DB (nhạy cảm).'],
    ['Proxy dùng để làm gì trong auth?', 'Kiểm tra lạc quan, redirect; chỉ đọc cookie, không gọi DB.'],
    ['DAL là gì?', 'Lớp tập trung truy vấn dữ liệu + kiểm tra quyền, chỉ chạy trên server.'],
    ['DTO là gì?', 'Đối tượng chỉ chứa dữ liệu an toàn/cần thiết trả cho UI.'],
    ['Vì sao không kiểm tra quyền ở layout?', 'Layout không render lại khi điều hướng; nhiều entry point khác.'],
    ['IDOR là gì?', 'Truy cập tài nguyên của người khác qua ID; chống bằng kiểm tra quyền sở hữu.'],
    ['Server Action ID?', 'Mã hoá, không xác định, tính lại giữa build; action không dùng bị loại.'],
    ['Allowed origins?', 'serverActions.allowedOrigins khi có reverse proxy (so Origin với Host).'],
    ['Side effect khi render?', 'Cấm set cookie/revalidate trong render; dùng Server Action.']
  ],
  quiz: [
    { q: 'Cookie session nên đặt cờ nào để JS không đọc được?', o: ['Secure', 'HttpOnly', 'SameSite', 'Path'], a: 1, e: 'Chống XSS đọc cookie.' },
    { q: 'Set cookie session nên làm ở:', o: ['Client', 'Server', 'localStorage', 'CDN'], a: 1, e: 'Tránh bị giả mạo.' },
    { q: 'Proxy khi kiểm tra auth nên:', o: ['Truy vấn DB mỗi request', 'Chỉ đọc cookie (optimistic)', 'Render UI', 'Gọi Server Action'], a: 1, e: 'Chạy cả khi prefetch.' },
    { q: 'Kiểm tra quyền không nên đặt ở:', o: ['DAL', 'Gần nguồn dữ liệu', 'Layout dùng chung', 'Trong action'], a: 2, e: 'Layout không re-render khi điều hướng.' },
    { q: 'Route Handler trả 403 khi:', o: ['Chưa đăng nhập', 'Đăng nhập nhưng thiếu quyền', 'Không tìm thấy', 'Lỗi server'], a: 1, e: '401 là chưa đăng nhập.' },
    { q: 'Chống IDOR bằng cách:', o: ['Ẩn ID', 'Kiểm tra quyền sở hữu tài nguyên', 'Dùng GET', 'Tăng timeout'], a: 1, e: 'So authorId với user id.' },
    { q: 'Return từ Server Action nên:', o: ['Trả cả bản ghi DB', 'Chỉ giá trị cần thiết', 'Trả mật khẩu', 'Không trả gì bao giờ'], a: 1, e: 'Giá trị được serialize sang client.' },
    { q: 'Auth check ở trang bao phủ Server Action trong trang?', o: ['Có', 'Không, phải kiểm tra lại trong action', 'Tuỳ trình duyệt', 'Chỉ dev'], a: 1, e: 'Action là entry point riêng.' },
    { q: 'React.cache trong DAL dedupe được:', o: ['Giữa các request', 'Trong một render pass', 'Vĩnh viễn', 'Giữa user'], a: 1, e: 'Không có tác dụng ở Server Action/Route Handler.' },
    { q: 'Cách lấy dữ liệu khuyến nghị cho dự án mới:', o: ['Component-level', 'Data Access Layer', 'Client-only', 'Trộn nhiều cách'], a: 1, e: 'Nhất quán và dễ audit.' },
    { q: 'NEXT_SERVER_ACTIONS_ENCRYPTION_KEY dùng khi:', o: ['Dev', 'Self-host nhiều server cần cùng khoá', 'Static export', 'Không bao giờ'], a: 1, e: 'Base64 16/24/32 byte.' }
  ],
  match: [
    ['HttpOnly', 'JS không đọc được cookie'],
    ['DAL', 'Tập trung truy vấn + quyền'],
    ['DTO', 'Dữ liệu tối thiểu trả UI'],
    ['IDOR', 'Truy cập tài nguyên người khác'],
    ['Jose', 'Mã hoá/ký JWT session'],
    ['taintUniqueValue', 'Chặn lộ giá trị sang client'],
    ['allowedOrigins', 'Cho phép origin proxy']
  ]
});
