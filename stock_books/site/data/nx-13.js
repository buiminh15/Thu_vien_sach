// Next.js – Chương 13 (Guides): Biến môi trường và Redirect.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 13,
  title: 'Guides: Biến môi trường và Redirect',
  intro: 'Hai guide thực dụng: cách nạp và đưa <b>biến môi trường</b> vào server/trình duyệt (và thứ tự ưu tiên), cùng <b>các cách redirect</b> với mã trạng thái, phạm vi dùng và cách quản lý số lượng lớn.',
  sections: [
    { icon: '🔑', title: 'Biến môi trường', blocks: [
      { t: 'list', items: [
        'Next.js tự nạp các file <code>.env*</code> vào <code>process.env</code> (hỗ trợ giá trị nhiều dòng). Template mặc định đã đưa mọi <code>.env</code> vào <code>.gitignore</code> — hầu như không bao giờ commit.',
        'Nếu dùng thư mục <code>src/</code>, file <code>.env*</code> vẫn đặt ở <b>thư mục gốc dự án</b>.',
        '<b>Ngoài runtime Next.js</b> (config ORM, test runner): dùng gói <code>@next/env</code> với <code>loadEnvConfig(process.cwd())</code>.',
        '<b>Tham chiếu biến khác</b>: <code>TWITTER_URL=https://x.com/$TWITTER_USER</code>; dấu <code>$</code> thật phải escape <code>\\$</code>.'
      ] },
      { t: 'table', head: ['Loại', 'Hành vi'], rows: [
        ['Biến thường', 'Chỉ có ở môi trường Node.js (server)'],
        ['<code>NEXT_PUBLIC_*</code>', 'Được <b>inline lúc build</b> vào bundle JS gửi trình duyệt (thay <code>process.env.X</code> bằng giá trị cứng). Sau build thay đổi env không ảnh hưởng nữa; một Docker image deploy nhiều môi trường sẽ bị “đóng băng”'],
        ['Tra cứu động', '<code>process.env[varName]</code> hoặc gán <code>const env = process.env</code> thì <b>không</b> được inline'],
        ['Biến runtime', 'Đọc trên server khi dynamic rendering: gọi <code>await connection()</code> (hoặc cookies/headers) trước khi đọc <code>process.env.MY_VALUE</code> để giá trị lấy lúc request; cho phép dùng một image qua nhiều môi trường']
      ] },
      { t: 'h3', x: 'Thứ tự ưu tiên khi tra cứu' },
      { t: 'steps', items: ['<code>process.env</code>', '<code>.env.$(NODE_ENV).local</code>', '<code>.env.local</code> (không kiểm tra khi NODE_ENV là test)', '<code>.env.$(NODE_ENV)</code>', '<code>.env</code>'] },
      { t: 'list', items: [
        '<code>NODE_ENV</code> nhận <code>production</code>, <code>development</code>, <code>test</code>. Nếu chưa gán: <code>next dev</code> → development, các lệnh khác → production.',
        '<b>Môi trường test</b>: dùng <code>.env.test</code> (nên commit) và <code>.env.test.local</code> (không commit); <code>.env.local</code> bị bỏ qua để kết quả test giống nhau mọi máy; <code>.env.development/production</code> không được nạp.'
      ] },
      { t: 'widget', name: 'env-resolver', title: 'Biến sẽ lấy từ file nào?' }
    ] },
    { icon: '↪️', title: 'Redirect', blocks: [
      { t: 'table', head: ['API', 'Dùng khi', 'Nơi dùng', 'Mã'], rows: [
        ['<code>redirect</code>', 'Sau mutation hoặc sự kiện', 'Server Component, Server Function, Route Handler', '307 (303 với Server Action không JS)'],
        ['<code>permanentRedirect</code>', 'URL chuẩn của thực thể đổi (đổi username)', 'Giống trên', '308'],
        ['<code>useRouter().push</code>', 'Điều hướng client trong event handler', 'Client Component', 'N/A'],
        ['<code>redirects</code> trong next.config', 'Chuyển hướng theo đường dẫn biết trước', 'File config', '307 hoặc 308 (<code>permanent</code>)'],
        ['<code>NextResponse.redirect</code>', 'Chuyển hướng theo điều kiện (auth), số lượng lớn', 'Proxy', 'Bất kỳ']
      ] },
      { t: 'warn', x: '<code>redirect()</code> <b>ném lỗi</b> nên phải gọi <b>ngoài</b> khối <code>try</code>. Nó có thể gọi lúc render của Client Component nhưng không trong event handler (dùng <code>useRouter</code>); cũng nhận URL tuyệt đối. Trong Server Action, <code>redirect</code> thực hiện điều hướng client khi có JS.' },
      { t: 'list', items: [
        '<b>Thứ tự</b>: <code>redirects</code> trong config chạy <b>trước</b> Proxy; Proxy chạy trước khi render. Nếu cần redirect trước khi render dùng config hoặc Proxy.',
        '<code>redirects</code> hỗ trợ khớp path (<code>/blog/:slug</code> → <code>/news/:slug</code>), header, cookie, query. Có thể bị giới hạn bởi nền tảng (Vercel: 1.024 redirect).',
        '<b>Quản lý ở quy mô lớn (1000+)</b>: lưu redirect map (key-value/DB hoặc JSON) và đọc trong Proxy mà không cần redeploy; tối ưu tra cứu bằng DB đọc nhanh hoặc <b>Bloom filter</b> kiểm tra trước, nếu “có thể có” thì chuyển sang Route Handler tra file thật (xử lý false positive), rồi trả 307/308. Cần validate request tới Route Handler.'
      ] }
    ] }
  ],
  summary: [
    'Các file .env* được nạp vào process.env; chỉ NEXT_PUBLIC_ lộ ra trình duyệt và bị inline lúc build.',
    'Muốn giá trị runtime: connection() rồi đọc process.env ở server.',
    'Ưu tiên: process.env > .env.$(NODE_ENV).local > .env.local > .env.$(NODE_ENV) > .env.',
    'redirect() ném lỗi, gọi ngoài try; config redirects chạy trước Proxy; Bloom filter cho redirect quy mô lớn.'
  ],
  cards: [
    ['Biến nào lộ ra trình duyệt?', 'Chỉ biến có tiền tố NEXT_PUBLIC_ (inline lúc build).'],
    ['Sau khi build, đổi NEXT_PUBLIC_ có tác dụng?', 'Không; giá trị đã bị đóng băng.'],
    ['Đọc env tại runtime?', 'await connection() (hoặc API request-time) rồi đọc process.env.X ở server.'],
    ['Gói nạp env ngoài Next.js?', '@next/env với loadEnvConfig.'],
    ['Thứ tự ưu tiên env?', 'process.env → .env.$(NODE_ENV).local → .env.local → .env.$(NODE_ENV) → .env'],
    ['.env.local khi test?', 'Không được nạp.'],
    ['Tham chiếu biến khác?', '$VARIABLE; escape $ bằng \\$.'],
    ['redirect vs permanentRedirect?', '307 vs 308.'],
    ['redirect() đặt ở đâu so với try/catch?', 'Ngoài khối try vì nó ném lỗi.'],
    ['Redirect trong event handler client?', 'useRouter().push.'],
    ['Redirect biết trước đường dẫn?', 'redirects trong next.config (307/308).'],
    ['Redirect theo điều kiện?', 'NextResponse.redirect trong Proxy.'],
    ['Thứ tự config redirects và Proxy?', 'redirects chạy trước Proxy.'],
    ['Quản lý 1000+ redirect?', 'Redirect map + Proxy, Bloom filter, Route Handler tra file thật.']
  ],
  quiz: [
    { q: 'Biến môi trường dùng được ở trình duyệt khi có tiền tố:', o: ['PUBLIC_', 'NEXT_PUBLIC_', 'BROWSER_', 'CLIENT_'], a: 1, e: 'Được inline lúc build.' },
    { q: 'process.env[varName] với NEXT_PUBLIC_ có được inline?', o: ['Có', 'Không', 'Chỉ dev', 'Chỉ prod'], a: 1, e: 'Tra cứu động không inline.' },
    { q: 'File .env* đặt ở đâu khi dùng src/?', o: ['Trong src', 'Gốc dự án', 'public', 'app'], a: 1, e: 'Không phải trong src.' },
    { q: 'Ưu tiên cao nhất khi tra cứu:', o: ['.env', '.env.local', 'process.env', '.env.production'], a: 2, e: 'Rồi mới đến .env.$(NODE_ENV).local.' },
    { q: 'Khi NODE_ENV=test, file nào bị bỏ qua?', o: ['.env', '.env.test', '.env.local', '.env.test.local'], a: 2, e: 'Để test lặp lại được.' },
    { q: 'redirect() mặc định trả mã:', o: ['301', '307', '308', '200'], a: 1, e: 'permanentRedirect là 308.' },
    { q: 'redirect() trong try/catch nên đặt:', o: ['Trong try', 'Ngoài try', 'Trong finally', 'Trong catch'], a: 1, e: 'Vì nó ném lỗi.' },
    { q: 'Redirect trong event handler Client Component:', o: ['redirect()', 'useRouter().push', 'permanentRedirect', 'Không thể'], a: 1, e: 'redirect chỉ dùng khi render.' },
    { q: 'Cái nào chạy trước?', o: ['Proxy', 'redirects trong config', 'Render', 'Route Handler'], a: 1, e: 'Config → Proxy → render.' },
    { q: 'Để tránh đọc file redirect lớn trong Proxy dùng:', o: ['Bloom filter', 'Cookie', 'iframe', 'sleep'], a: 0, e: 'Kiểm tra trước, rồi hỏi Route Handler.' }
  ],
  match: [
    ['NEXT_PUBLIC_', 'Inline vào bundle client'],
    ['@next/env', 'Nạp .env ngoài runtime'],
    ['.env.test', 'Biến cho môi trường test'],
    ['permanentRedirect', 'Mã 308'],
    ['useRouter().push', 'Redirect trong event handler'],
    ['Bloom filter', 'Kiểm tra sớm redirect quy mô lớn'],
    ['redirects (config)', 'Chuyển hướng theo path biết trước']
  ]
});
