// Next.js – Chương 6: Thay đổi dữ liệu (Server Functions / Server Actions).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.nextjs = BOOK_DATA.nextjs || { chapters: [] };
BOOK_DATA.nextjs.chapters.push({
  n: 6,
  title: 'Thay đổi dữ liệu: Server Functions và Actions',
  intro: 'Mutation trong Next.js dùng <b>React Server Functions</b>: hàm async chạy trên server nhưng được gọi từ client qua request mạng. Khi dùng cho form/mutation chúng được gọi là <b>Server Actions</b>. Chương này nói về cách tạo, cách gọi, trạng thái pending, refresh/revalidate, redirect và cookies.',
  sections: [
    { icon: '⚡', title: 'Server Function và Server Action', blocks: [
      { t: 'list', items: [
        '<b>Server Function</b>: hàm async chạy trên server, client gọi qua mạng nên bắt buộc là async. Trong ngữ cảnh action/mutation gọi là <b>Server Action</b>.',
        'Theo quy ước, action chạy trong <code>startTransition</code>; tự động khi truyền cho <code>&lt;form action&gt;</code> hoặc <code>&lt;button formAction&gt;</code>.',
        'Khi action được gọi, Next.js có thể trả về cả UI cập nhật lẫn dữ liệu mới trong <b>một vòng server</b>. Chỉ dùng phương thức <b>POST</b>.'
      ] },
      { t: 'warn', x: 'Server Function có thể bị gọi bằng POST trực tiếp, không chỉ qua UI. <b>Luôn kiểm tra xác thực và phân quyền bên trong mỗi Server Function</b> (và kiểm tra quyền sở hữu tài nguyên trước khi sửa/xoá).' }
    ] },
    { icon: '🛠️', title: 'Tạo Server Function', blocks: [
      { t: 'list', items: [
        "Đặt <code>'use server'</code> ở đầu hàm async (hoặc đầu file để đánh dấu mọi export).",
        'Trong <b>Server Component</b> có thể khai báo inline với directive trong thân hàm; form hỗ trợ <b>progressive enhancement</b> (vẫn submit khi JS chưa tải/tắt).',
        'Trong <b>Client Component</b> không định nghĩa được Server Function, nhưng import từ file có <code>\'use server\'</code>; submit trước khi hydrate được xếp hàng và ưu tiên hydrate.',
        'Có thể truyền action làm prop cho Client Component (<code>updateItemAction</code>).'
      ] }
    ] },
    { icon: '📨', title: 'Gọi Server Function', blocks: [
      { t: 'table', head: ['Cách', 'Ghi chú'], rows: [
        ['<b>Form</b> (<code>&lt;form action={createPost}&gt;</code>)', 'Hàm nhận <code>FormData</code>; lấy giá trị bằng <code>formData.get(\'title\')</code>'],
        ['<b>Event handler</b> (onClick)', 'Trong Client Component: <code>const n = await incrementLike()</code> rồi setState'],
        ['<b>useEffect</b>', 'Mutation phụ thuộc sự kiện toàn cục hoặc mount, dùng với <code>useTransition</code> (ví dụ tăng view count)']
      ] },
      { t: 'p', x: 'Client gửi và đợi Server Function <b>từng cái một</b> (sequential dispatch). Cần song song thì lấy dữ liệu ở Server Component hoặc làm trong một Server Function / Route Handler.' },
      { t: 'tip', x: '<b>Pending</b>: <code>const [state, action, pending] = useActionState(createPost, false)</code> rồi <code>onClick={() => startTransition(action)}</code> để hiện spinner.' }
    ] },
    { icon: '🔄', title: 'Sau khi mutate', blocks: [
      { t: 'table', head: ['API (next/cache, next/navigation)', 'Tác dụng'], rows: [
        ['<code>refresh()</code>', 'Làm mới client router để UI phản ánh trạng thái mới; <b>không</b> revalidate dữ liệu có tag'],
        ['<code>revalidatePath(\'/posts\')</code>', 'Vô hiệu cache của một đường dẫn'],
        ['<code>revalidateTag</code> / <code>updateTag</code>', 'Vô hiệu cache theo tag (chương 7)'],
        ['<code>redirect(\'/posts\')</code>', 'Chuyển trang; ném ra ngoại lệ điều khiển luồng nên code sau nó không chạy → revalidate <b>trước</b> khi redirect'],
        ['<code>cookies()</code> get/set/delete', 'Set/delete cookie trong action khiến Next.js render lại trang hiện tại + layout trên server để UI phản ánh cookie mới; state client của component được giữ']
      ] },
      { t: 'widget', name: 'action-flow', title: 'Luồng một Server Action' }
    ] }
  ],
  summary: [
    "Server Function = hàm async 'use server'; dùng với form/mutation gọi là Server Action (POST).",
    'Gọi từ form (nhận FormData), event handler hoặc useEffect; pending qua useActionState/useTransition.',
    'Luôn kiểm tra auth bên trong mỗi action.',
    'Sau mutate: revalidatePath/Tag hoặc refresh, rồi redirect.'
  ],
  cards: [
    ['Server Function là gì?', 'Hàm async chạy trên server, client gọi qua request mạng.'],
    ['Server Action là gì?', 'Server Function dùng cho form/mutation.'],
    ['Action dùng HTTP method nào?', 'Chỉ POST.'],
    ["Directive để khai báo?", "'use server' ở đầu hàm hoặc file."],
    ['Client Component định nghĩa action?', 'Không; import từ file có use server.'],
    ['Action trong form nhận gì?', 'FormData.'],
    ['Progressive enhancement?', 'Form với Server Action vẫn submit khi JS chưa tải/bị tắt.'],
    ['Hiện pending?', 'Giá trị thứ 3 của useActionState (hoặc useTransition).'],
    ['refresh() khác revalidateTag?', 'refresh làm mới router client, không revalidate dữ liệu có tag.'],
    ['redirect() có gì đặc biệt?', 'Ném ngoại lệ điều khiển luồng; revalidate trước khi gọi.'],
    ['Set cookie trong action thì sao?', 'Next.js render lại trang hiện tại và layout trên server.'],
    ['Điều bắt buộc về bảo mật?', 'Kiểm tra xác thực và phân quyền trong mỗi Server Function.']
  ],
  quiz: [
    { q: 'Server Action dùng phương thức HTTP:', o: ['GET', 'POST', 'PUT', 'DELETE'], a: 1, e: 'Chỉ POST.' },
    { q: 'Hàm nhận gì khi gắn vào <form action>?', o: ['Event', 'FormData', 'JSON', 'URL'], a: 1, e: 'Dùng formData.get().' },
    { q: 'Client Component dùng action bằng cách:', o: ['Định nghĩa inline', "Import từ file 'use server'", 'eval', 'Không dùng được'], a: 1, e: 'Không định nghĩa inline được.' },
    { q: 'Trước khi redirect trong action nên:', o: ['Gọi lại redirect', 'revalidate path/tag', 'Xoá cookie', 'Thoát'], a: 1, e: 'redirect ném ngoại lệ, code sau không chạy.' },
    { q: 'Hook cho trạng thái pending:', o: ['useActionState', 'useMemo', 'useRef', 'useId'], a: 0, e: 'Trả [state, action, pending].' },
    { q: 'refresh() sẽ:', o: ['Revalidate tag', 'Làm mới client router', 'Xoá cache server', 'Restart server'], a: 1, e: 'Không đụng dữ liệu có tag.' },
    { q: 'Điều QUAN TRỌNG cần làm trong action:', o: ['Log', 'Kiểm tra auth/authorization', 'Thêm sleep', 'Dùng GET'], a: 1, e: 'Action có thể bị gọi trực tiếp.' },
    { q: 'Các action được client dispatch:', o: ['Song song hết', 'Tuần tự từng cái', 'Ngẫu nhiên', 'Không dispatch'], a: 1, e: 'Sequential dispatch.' },
    { q: 'Set cookie trong action dẫn tới:', o: ['Không gì', 'Render lại trang và layout trên server', 'Reload trình duyệt', 'Lỗi'], a: 1, e: 'UI phản ánh cookie mới.' },
    { q: 'Progressive enhancement nghĩa là:', o: ['Form cần JS mới gửi được', 'Form vẫn submit khi JS chưa tải', 'Tải thêm CSS', 'Nén gzip'], a: 1, e: 'Với Server Components.' }
  ],
  match: [
    ["'use server'", 'Đánh dấu Server Function'],
    ['useActionState', 'pending + state của action'],
    ['revalidatePath', 'Vô hiệu cache theo đường dẫn'],
    ['redirect', 'Chuyển trang sau mutation'],
    ['cookies()', 'Đọc/ghi cookie'],
    ['refresh()', 'Làm mới client router'],
    ['FormData', 'Dữ liệu form']
  ]
});
