// Angular – Chương 10–14: routing, HTTP, SSR/hiệu năng/bảo mật/a11y, testing & công cụ, bản đồ tra cứu.
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.angularguide = BOOK_DATA.angularguide || { chapters: [] };
const A4 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.angularguide.chapters.push(

{
  n: 10,
  title: 'Routing: định tuyến, guard, resolver, lazy loading',
  intro: 'Router của Angular ánh xạ <b>URL ↔ component</b>, hiển thị bằng <code>&lt;router-outlet /&gt;</code>, điều hướng không tải lại trang, và có sẵn <b>guard</b> (chặn/cho vào), <b>resolver</b> (tải dữ liệu trước), <b>lazy loading</b> và liên kết dữ liệu route vào <b>input</b> của component.',
  sections: [
    { icon: '🗺️', title: 'Khai báo route và hiển thị', blocks: [
      { t: 'p', x: A4(`// app.routes.ts
import { Routes } from '@angular/router';
export const routes: Routes = [
  { path: '', component: HomePage },
  { path: 'users/:id', component: UserPage },                 // tham số động :id
  { path: 'admin', loadComponent: () => import('./admin-page'), canActivate: [authGuard] }, // lazy
  { path: 'old', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundPage },                    // 404: đặt CUỐI CÙNG
];

// app.config.ts
providers: [provideRouter(routes, withComponentInputBinding())]

// app.ts
@Component({ selector: 'app-root', imports: [RouterOutlet, RouterLink], template: '<nav><a routerLink="/">Home</a></nav><router-outlet />' })
export class App {}`) },
      { t: 'list', items: [
        '<b>Route</b> = object <code>{ path, component, ... }</code>; danh sách đặt ở file <code>app.routes.ts</code>, cắm vào ứng dụng bằng <code>provideRouter(routes)</code>.',
        '<b>Thứ tự có ý nghĩa:</b> router chọn route khớp <b>đầu tiên</b>; <code>**</code> (wildcard) đặt cuối.',
        '<b><code>&lt;router-outlet /&gt;</code></b> là chỗ router vẽ component của URL hiện tại (nhập <code>RouterOutlet</code> vào <code>imports</code>).',
        '<b>Tham số:</b> <code>:id</code> trong path; query string (<code>?q=abc</code>); fragment (<code>#top</code>).',
        '<b>Route con</b> (<code>children</code>) với outlet lồng nhau; <b>redirect</b> (<code>redirectTo</code>, <code>pathMatch</code>).'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> router như <b>nhân viên chỉ đường</b> ở sảnh: bạn đưa địa chỉ (URL), anh ta đưa bạn tới đúng phòng (component), phòng có thể có phòng con (route lồng). Địa chỉ không có trong danh sách → dẫn đến phòng “không tìm thấy” (<code>**</code>).' },
      { t: 'widget', name: 'ng-route-sim', title: 'Gõ URL và xem route nào khớp, tham số lấy được gì' }
    ] },
    { icon: '🚦', title: 'Điều hướng và đọc state của route', blocks: [
      { t: 'table', head: ['Việc cần làm', 'Cách làm'], rows: [
        ['Liên kết trong template', '<code>&lt;a routerLink="/users" [queryParams]="{page: 2}"&gt;</code>; làm nổi link đang active bằng <code>routerLinkActive="on"</code>'],
        ['Điều hướng bằng code', '<code>inject(Router).navigate([\'/users\', id])</code> hoặc <code>navigateByUrl(\'/home\')</code>'],
        ['Đọc tham số', '<b>Cách hiện đại:</b> <code>withComponentInputBinding()</code> → tham số/ query/ data thành <code>input()</code>: <code>id = input.required&lt;string&gt;()</code>'],
        ['Đọc kiểu cũ', '<code>inject(ActivatedRoute)</code> (có <code>snapshot</code>/<code>paramMap</code>/<code>queryParamMap</code> dạng Observable)'],
        ['Sự kiện điều hướng', '<code>router.events</code> (<code>NavigationStart/End/Error</code>…) để hiện spinner']
      ] },
      { t: 'p', x: A4(`// Với withComponentInputBinding(), tham số :id tự vào input
@Component({ selector: 'user-page', template: '<h1>User {{ id() }}</h1>' })
export class UserPage {
  id = input.required<string>();      // từ path 'users/:id'
  page = input<string>();             // từ query ?page=...
}`) }
    ] },
    { icon: '🛡️', title: 'Guard: chặn hoặc cho vào', blocks: [
      { t: 'p', x: A4(`import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  return auth.isLoggedIn() ? true : router.createUrlTree(['/login']);   // redirect thay vì false
};`) },
      { t: 'table', head: ['Guard', 'Quyết định'], rows: [
        ['<code>canActivate</code>', 'Có được <b>vào</b> route này không (đăng nhập/phân quyền)'],
        ['<code>canActivateChild</code>', 'Có được vào <b>route con</b> không'],
        ['<code>canDeactivate</code>', 'Có được <b>rời</b> route không (form chưa lưu)'],
        ['<code>canMatch</code>', 'Route này có <b>khớp</b> không; trả <code>false</code> thì router thử route khác']
      ] },
      { t: 'warn', x: '<b>Guard phía client chỉ là trải nghiệm (UX), không phải bảo mật.</b> JavaScript trên trình duyệt có thể bị sửa. Mọi quyền truy cập thật phải kiểm tra ở <b>server/API</b>.' },
      { t: 'list', items: [
        'Guard là <b>hàm</b> chạy trong injection context nên dùng <code>inject()</code>; trả <code>boolean</code>, <code>UrlTree</code>/<code>RedirectCommand</code> (<b>chuyển hướng</b>), hoặc <code>Promise/Observable</code> của chúng.',
        'Nên <b>redirect bằng UrlTree</b> thay vì trả <code>false</code> rồi tự <code>navigate</code>.'
      ] }
    ] },
    { icon: '📦', title: 'Resolver và lazy loading', blocks: [
      { t: 'list', items: [
        '<b>Resolver</b> (<code>resolve: { user: userResolver }</code>) tải <b>dữ liệu trước</b> khi vào route; kết quả có trong <code>ActivatedRoute.data</code> hoặc input (với input binding). Hợp khi trang không nên hiển thị nếu thiếu dữ liệu; nhưng làm điều hướng chờ → cho phản hồi (spinner) qua <code>router.events</code>.',
        '<b>Lazy loading:</b> <code>loadComponent: () =&gt; import(\'./x\')</code> (một component) và <code>loadChildren: () =&gt; import(\'./x.routes\')</code> (nhóm route) → mã chỉ tải khi vào route → bundle đầu nhỏ hơn.',
        '<b>Chiến lược tải trước:</b> có thể cấu hình tải trước các route lazy (preloading) để lần vào sau nhanh.',
        '<b>Dữ liệu bằng resource:</b> có thể kết hợp <code>httpResource</code>/<code>resource</code> với input route để tải dữ liệu <i>sau</i> khi vào trang, hiển thị “đang tải” cục bộ (thay thế resolver trong nhiều trường hợp).',
        '<b>Chuyển cảnh route</b> với View Transitions (<code>withViewTransitions()</code>); <b>kiểu URL</b>: <code>PathLocationStrategy</code> (mặc định, cần server trả index.html) hoặc <code>HashLocationStrategy</code>.',
        '<b>Rendering theo route</b> (SSR/SSG/CSR) khai báo ở route server (chương 12).'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> lỗi hay gặp: refresh trang con (<code>/users/5</code>) trả 404 trên server tĩnh vì server không biết đường dẫn đó → cấu hình <b>fallback về index.html</b> (hoặc dùng SSR).' }
    ] }
  ],
  summary: [
    'Route = path ↔ component; provideRouter(routes); hiển thị qua router-outlet; ** (404) đặt cuối.',
    'Điều hướng: routerLink / Router.navigate; đọc tham số bằng input với withComponentInputBinding.',
    'Guard (canActivate…) chỉ là UX, trả UrlTree để redirect; resolver tải dữ liệu trước; loadComponent/loadChildren để lazy load.'
  ],
  cards: [
    ['Khai báo route?', 'Routes: [{ path, component }]; provideRouter(routes).'],
    ['Hiển thị component route?', 'Thẻ router-outlet.'],
    ['Tham số động?', 'path: "users/:id"'],
    ['Tham số thành input?', 'withComponentInputBinding()'],
    ['Guard cho vào?', 'canActivate (CanActivateFn).'],
    ['Lazy load?', 'loadComponent / loadChildren.']
  ],
  quiz: [
    { q: 'Route wildcard "**" nên đặt:', o: ['Đầu danh sách', 'Cuối danh sách', 'Giữa', 'Không cần'], a: 1, e: 'Router lấy khớp đầu tiên.' },
    { q: 'Guard phía client có thay được kiểm tra quyền ở server?', o: ['Có', 'Không – chỉ là UX', 'Chỉ trong SSR', 'Chỉ với resolver'], a: 1, e: 'Phải kiểm tra ở backend.' },
    { q: 'Cách hiện đại đọc tham số :id vào component:', o: ['withComponentInputBinding + input()', 'window.location', 'Subscribe interval', 'Không thể'], a: 0, e: 'Hoặc ActivatedRoute kiểu cũ.' },
    { q: 'Lazy load một component route dùng:', o: ['loadComponent', 'redirectTo', 'canMatch', 'resolve'], a: 0, e: 'Import động.' }
  ],
  match: [
    ['provideRouter', 'Cắm router vào app'],
    ['routerLink', 'Điều hướng trong template'],
    ['canActivate', 'Guard cho vào route'],
    ['resolve', 'Tải dữ liệu trước'],
    ['loadChildren', 'Lazy load nhóm route']
  ]
},

{
  n: 11,
  title: 'HTTP và dữ liệu: HttpClient, interceptor, httpResource, RxJS',
  intro: 'Gọi API trong Angular có hai lối: <b>HttpClient</b> (Observable, mạnh, có interceptor) và <b>httpResource</b> (signal, hợp để <b>đọc dữ liệu</b> trong template). Từ v21 <code>HttpClient</code> có sẵn để inject mà không cần cấu hình thêm.',
  sections: [
    { icon: '🌐', title: 'HttpClient cơ bản', blocks: [
      { t: 'p', x: A4(`// app.config.ts – chỉ cần khi muốn BẬT TÍNH NĂNG (interceptor...)
providers: [provideHttpClient(withInterceptors([authInterceptor]))]

// service
@Service()
export class UserApi {
  private http = inject(HttpClient);
  getUser(id: string) { return this.http.get<User>('/api/users/' + id); }   // Observable<User>
  save(u: User)       { return this.http.post<User>('/api/users', u); }
}`) },
      { t: 'list', items: [
        '<b>Observable là “lười”:</b> request chỉ được gửi khi có <b>subscribe</b> (hoặc <code>async</code> pipe, <code>toSignal</code>). Quên subscribe = không gọi gì.',
        'Phương thức: <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>; tham số <code>params</code>, <code>headers</code>, <code>observe: \'response\'</code>, <code>responseType</code>, <code>reportProgress</code>.',
        '<b>Kiểu trả về</b> là generic (<code>get&lt;User&gt;</code>) — chỉ là chú thích kiểu, <b>không</b> kiểm tra dữ liệu thật lúc chạy → validate khi dữ liệu không đáng tin.',
        '<b>Xử lý lỗi:</b> operator <code>catchError</code>, <code>retry</code> của RxJS; lỗi là <code>HttpErrorResponse</code>.',
        '<b>XSRF/CSRF:</b> hỗ trợ sẵn qua cookie+header; cấu hình <code>withXsrfConfiguration</code> nếu cần.'
      ] }
    ] },
    { icon: '🧱', title: 'Interceptor', blocks: [
      { t: 'p', x: A4(`import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(AuthService).token();
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer ' + token } });  // request bất biến → clone
  return next(authReq);
};`) },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> interceptor như <b>trạm kiểm soát trên đường</b> mọi xe (request) đều đi qua: gắn thẻ (header), ghi sổ (log), xử lý lỗi chung (401 → về trang đăng nhập), không cần sửa từng nơi gọi API.' },
      { t: 'list', items: [
        'Interceptor là <b>hàm</b> (<code>HttpInterceptorFn</code>) chạy trong injection context; đăng ký bằng <code>withInterceptors([...])</code>, <b>thứ tự</b> là thứ tự chạy.',
        'Request là <b>bất biến</b> → dùng <code>req.clone({...})</code>.',
        'Dùng cho: auth header, log, cache, retry, xử lý lỗi chung, hiển thị tiến trình tải; có thể trả <b>phản hồi giả</b> (synthetic response) để mock.',
        '<b>Request context</b> (<code>HttpContextToken</code>) để truyền cờ riêng cho từng request (ví dụ bỏ qua interceptor nào đó).'
      ] }
    ] },
    { icon: '⚡', title: 'httpResource: đọc dữ liệu bằng signal', blocks: [
      { t: 'p', x: A4(`userId = input.required<string>();

user = httpResource(() => '/api/user/' + this.userId());        // reactive: userId đổi → request mới
// Template:
// @if (user.hasValue()) { <h1>{{ user.value().name }}</h1> }
// @else if (user.isLoading()) { <p>Đang tải…</p> }
// @else if (user.error()) { <p>Lỗi</p> }`) },
      { t: 'table', head: ['', 'HttpClient', 'httpResource'], rows: [
        ['Kiểu', 'Observable', 'Signal (value/status/error/isLoading)'],
        ['Khi nào gửi', '<b>Khi subscribe</b> (lười)', '<b>Ngay</b> (eager) và tự gửi lại khi signal phụ thuộc đổi'],
        ['Hủy request cũ', 'Tự lo (switchMap…)', 'Tự hủy request đang chờ khi có request mới'],
        ['Hợp cho', 'Mutation (POST/PUT/DELETE), luồng phức tạp', '<b>Đọc dữ liệu</b> (GET) gắn với UI']
      ] },
      { t: 'warn', x: '<b>Đừng dùng <code>httpResource</code> cho mutation</b> (POST/PUT…); dùng <code>HttpClient</code> trực tiếp. Resource sinh ra để <i>đọc</i> dữ liệu và đồng bộ với signal.' },
      { t: 'list', items: [
        'Có thể truyền object request đầy đủ (<code>url</code>, <code>method</code>, <code>headers</code>, <code>params</code>, <code>reportProgress</code>, <code>transferCache</code>…) — mỗi thuộc tính muốn phản ứng thì bọc bằng signal.',
        'Có biến thể phân tích kiểu (<code>httpResource.text</code>, <code>.blob</code>, <code>.arrayBuffer</code>) và tùy chọn <code>parse</code>/<code>defaultValue</code>.',
        'Kết hợp <code>debounced()</code> (thử nghiệm) cho ô tìm kiếm.'
      ] }
    ] },
    { icon: '🔄', title: 'RxJS và signals cùng sống', blocks: [
      { t: 'table', head: ['Cần…', 'Dùng'], rows: [
        ['Observable → signal để dùng trong template', '<code>toSignal(obs$, { initialValue })</code>'],
        ['Signal → Observable (để debounce/switchMap)', '<code>toObservable(sig)</code>'],
        ['Hủy subscribe khi component hủy', '<code>takeUntilDestroyed()</code>'],
        ['Output ↔ Observable', '<code>outputFromObservable()</code> / <code>outputToObservable()</code>']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> quy tắc dễ nhớ: <b>state/giao diện → signals</b>, <b>sự kiện theo thời gian → RxJS</b>. Ví dụ: ô tìm kiếm có debounce + hủy request cũ rất hợp <code>toObservable + debounceTime + switchMap + toSignal</code>, hoặc đơn giản hơn <code>debounced + resource</code>.' },
      { t: 'widget', name: 'ng-pick', title: 'Luyện chọn đúng công cụ Angular' }
    ] }
  ],
  summary: [
    'HttpClient trả Observable (lười, gửi khi subscribe); từ v21 inject được mà không cần provideHttpClient (chỉ cần để bật tính năng).',
    'Interceptor là hàm HttpInterceptorFn, clone request, đăng ký bằng withInterceptors; httpResource là signal để ĐỌC dữ liệu.',
    'toSignal/toObservable/takeUntilDestroyed nối RxJS với signals.'
  ],
  cards: [
    ['Observable HTTP gửi khi?', 'Khi subscribe.'],
    ['Interceptor dùng làm gì?', 'Header auth, log, lỗi chung…'],
    ['Sửa request trong interceptor?', 'req.clone({...}) (bất biến).'],
    ['httpResource hợp cho?', 'Đọc dữ liệu (GET) với signal.'],
    ['Observable → signal?', 'toSignal'],
    ['Hủy subscribe tự động?', 'takeUntilDestroyed()']
  ],
  quiz: [
    { q: 'Request HttpClient chỉ được gửi khi:', o: ['Gọi get()', 'Có subscribe/async pipe', 'Component tạo', 'Router điều hướng'], a: 1, e: 'Observable lười.' },
    { q: 'Request trong interceptor:', o: ['Sửa trực tiếp', 'Bất biến, phải clone', 'Luôn hỏng', 'Chỉ đọc'], a: 1, e: 'req.clone().' },
    { q: 'httpResource nên dùng cho:', o: ['POST/PUT', 'Đọc dữ liệu gắn với UI', 'Xóa dữ liệu', 'Upload'], a: 1, e: 'Mutation dùng HttpClient.' },
    { q: 'toSignal() dùng để:', o: ['Biến Observable thành signal', 'Gọi API', 'Tạo route', 'Test'], a: 0, e: 'Dùng trong template dễ hơn.' }
  ],
  match: [
    ['HttpClient', 'Observable HTTP'],
    ['withInterceptors', 'Đăng ký interceptor'],
    ['httpResource', 'Signal đọc dữ liệu'],
    ['toSignal', 'Observable → signal'],
    ['HttpErrorResponse', 'Kiểu lỗi HTTP']
  ]
},

{
  n: 12,
  title: 'SSR, hydration, hiệu năng, bảo mật và a11y',
  intro: 'Phần này nói về đưa ứng dụng tới người dùng <b>nhanh, an toàn và dùng được với mọi người</b>: render ở server (SSR/SSG), hydration, tối ưu hiệu năng, bảo mật mặc định của Angular, và tiếp cận (a11y).',
  sections: [
    { icon: '🧩', title: 'Hybrid rendering: CSR, SSG, SSR', blocks: [
      { t: 'table', head: ['Chế độ', 'Ý nghĩa', 'Hợp khi'], rows: [
        ['<b>CSR</b> (client-side)', 'Trình duyệt tải JS rồi tự vẽ (mặc định của Angular)', 'App sau đăng nhập, không cần SEO'],
        ['<b>SSG / Prerender</b>', 'Sinh HTML <b>lúc build</b>', 'Trang tĩnh (giới thiệu, blog)'],
        ['<b>SSR</b>', 'Server sinh HTML <b>mỗi request</b>', 'Nội dung theo người dùng/thời gian thực, cần SEO']
      ] },
      { t: 'p', x: A4(`# Dự án mới có SSR
ng new my-app --ssr
# Thêm SSR cho dự án có sẵn
ng add @angular/ssr

// app.routes.server.ts – chọn chế độ theo từng route
export const serverRoutes: ServerRoute[] = [
  { path: '',        renderMode: RenderMode.Client },     // CSR
  { path: 'about',   renderMode: RenderMode.Prerender },  // SSG
  { path: 'profile', renderMode: RenderMode.Server },     // SSR
  { path: '**',      renderMode: RenderMode.Server },
];`) },
      { t: 'list', items: [
        '<b>Hydration:</b> sau khi trình duyệt nhận HTML từ server, Angular <b>“đánh thức”</b> nó: tái dùng DOM sẵn có và gắn sự kiện thay vì vẽ lại từ đầu → không nháy, tốt cho LCP/CLS. Bật bằng <code>provideClientHydration()</code> (CLI tự thêm).',
        '<b>Event replay:</b> sự kiện người dùng xảy ra <b>trước</b> khi hydrate xong được ghi lại và phát lại.',
        '<b>Incremental hydration:</b> kết hợp <code>@defer</code> với <code>hydrate on viewport|interaction|idle|…</code> để chỉ hydrate phần cần thiết, giảm JS khởi động.',
        '<b>Code chỉ chạy ở trình duyệt:</b> tránh <code>window</code>/<code>document</code> khi render server; đặt vào <code>afterNextRender</code>.',
        '<b>Không dùng <code>id</code> của resource</b> cho dữ liệu riêng của từng người nếu HTML có thể bị cache và chia sẻ.',
        '<b>Hydration mismatch:</b> HTML server và client khác nhau (do thao tác DOM trực tiếp, ngẫu nhiên, thời gian) → cảnh báo; giữ template thuần và tránh sửa DOM ngoài Angular.'
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> SSR giống <b>nhận bánh đã nướng sẵn</b> (HTML có nội dung ngay), hydration là <b>bật điện cho thiết bị trong bánh</b> (gắn sự kiện) – bạn không phải nướng lại.' }
    ] },
    { icon: '🚀', title: 'Hiệu năng', blocks: [
      { t: 'table', head: ['Nhóm', 'Kỹ thuật'], rows: [
        ['<b>Tải trang</b>', '<code>@defer</code>, lazy route (<code>loadComponent</code>), tách bundle; SSR/SSG + hydration; <code>NgOptimizedImage</code> (tối ưu ảnh, ưu tiên LCP); tải trước (prefetch)'],
        ['<b>Chạy (runtime)</b>', '<b>OnPush</b> (mặc định v22) + signals, <code>computed</code> thay tính toán chậm trong template, <code>@for</code> với <code>track</code> tốt'],
        ['<b>Tránh “zone pollution”</b>', 'Với bản có zone: chạy tác vụ lặp ngoài zone; zoneless thì vấn đề này giảm'],
        ['<b>Đo đạc</b>', 'Chrome DevTools Performance, <b>Angular DevTools</b> (profiler), Lighthouse']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> quy tắc: <b>đo trước, tối ưu sau</b>. Hầu hết vấn đề chậm đến từ bundle quá lớn, ảnh chưa tối ưu, danh sách khổng lồ không ảo hóa (CDK virtual scroll), hoặc tính toán nặng trong template.' }
    ] },
    { icon: '🔒', title: 'Bảo mật', blocks: [
      { t: 'list', items: [
        '<b>Angular coi mọi giá trị là không tin cậy</b> theo mặc định: khi bind vào HTML/style/URL, nó <b>tự làm sạch</b> (sanitize) để chống <b>XSS</b>.',
        '<b>Không dùng bừa <code>bypassSecurityTrustHtml/Url…</code>;</b> chỉ dùng với dữ liệu bạn kiểm soát hoàn toàn. Đừng ghép chuỗi HTML từ người dùng và gán <code>innerHTML</code> trực tiếp qua DOM API.',
        '<b>Template:</b> không tạo template từ chuỗi người dùng. <b>Trusted Types</b> (CSP) tăng thêm lớp bảo vệ.',
        '<b>CSRF/XSRF:</b> <code>HttpClient</code> hỗ trợ đọc cookie XSRF và gửi header; server phải kiểm tra.',
        '<b>Quyền truy cập thật ở server</b>; guard client chỉ là UX.',
        'Cập nhật Angular thường xuyên (<code>ng update</code>) để nhận bản vá bảo mật.'
      ] }
    ] },
    { icon: '♿', title: 'Tiếp cận (a11y)', blocks: [
      { t: 'list', items: [
        '<b>Dùng thẻ ngữ nghĩa đúng</b> (<code>button</code>, <code>nav</code>, <code>main</code>, <code>label</code>) và thuộc tính ARIA khi cần (<code>[attr.aria-…]</code>).',
        '<b>Quản lý focus</b> khi chuyển route hoặc mở modal; bàn phím phải dùng được mọi chức năng; tương phản màu đủ.',
        '<b>Angular CDK a11y</b>: <code>FocusTrap</code>, <code>LiveAnnouncer</code>, <code>FocusMonitor</code>… hỗ trợ các mẫu thường gặp.',
        '<b>Angular Aria</b> (stable ở v22): bộ <b>directive “headless”</b> cho các mẫu WAI-ARIA (menu, tabs, listbox, combobox…) — bạn lo giao diện, thư viện lo hành vi bàn phím và ARIA.',
        '<b>Công cụ:</b> axe, Lighthouse; kiểm tra bằng trình đọc màn hình và chỉ bàn phím.'
      ] }
    ] }
  ],
  summary: [
    'CSR mặc định; SSG (prerender) và SSR chọn theo từng route; hydration + event replay + incremental hydration (@defer hydrate on…).',
    'Hiệu năng: defer/lazy, NgOptimizedImage, OnPush + signals, track; đo bằng DevTools/Lighthouse.',
    'Bảo mật: sanitize mặc định, hạn chế bypassSecurityTrust, quyền ở server. a11y: ngữ nghĩa, focus, CDK a11y, Angular Aria.'
  ],
  cards: [
    ['Hydration là gì?', 'Tái dùng DOM từ server và gắn sự kiện.'],
    ['Thêm SSR vào dự án?', 'ng add @angular/ssr'],
    ['Chọn chế độ theo route?', 'ServerRoute.renderMode.'],
    ['Tối ưu ảnh?', 'NgOptimizedImage'],
    ['Chống XSS?', 'Sanitize mặc định, tránh bypassSecurityTrust.'],
    ['Angular Aria?', 'Directive headless cho mẫu WAI-ARIA (stable v22).']
  ],
  quiz: [
    { q: 'Chế độ sinh HTML lúc build:', o: ['CSR', 'SSG/Prerender', 'SSR', 'Hydration'], a: 1, e: 'Static site generation.' },
    { q: 'Điều nào đúng về bypassSecurityTrust*?', o: ['Nên dùng thường xuyên', 'Chỉ dùng khi chắc chắn dữ liệu an toàn', 'Tự làm sạch hộ bạn', 'Dành cho CSS'], a: 1, e: 'Nó tắt cơ chế sanitize.' },
    { q: 'Code dùng window nên đặt trong:', o: ['constructor', 'afterNextRender', 'template', 'resolver'], a: 1, e: 'Không chạy ở server.' },
    { q: 'Hydration giúp:', o: ['Tái dùng DOM server và gắn sự kiện, không vẽ lại từ đầu', 'Tăng dung lượng JS', 'Tắt SSR', 'Mã hóa HTML'], a: 0, e: 'Tốt cho LCP/CLS.' }
  ],
  match: [
    ['RenderMode.Prerender', 'SSG'],
    ['RenderMode.Server', 'SSR'],
    ['provideClientHydration', 'Bật hydration'],
    ['NgOptimizedImage', 'Tối ưu ảnh'],
    ['Angular CDK a11y', 'Tiện ích tiếp cận']
  ]
},

{
  n: 13,
  title: 'Kiểm thử (Vitest) và công cụ: CLI, DevTools, Language Service',
  intro: 'Dự án Angular mới chạy test bằng <b>Vitest</b> qua <code>ng test</code>. Bạn sẽ dùng <b>TestBed</b> để dựng component/service trong môi trường giả, <b>component harness</b> để thao tác ổn định, cùng bộ công cụ: CLI, DevTools, Language Service và <code>ng update</code>.',
  sections: [
    { icon: '🧪', title: 'Unit test với Vitest', blocks: [
      { t: 'p', x: A4(`import { TestBed } from '@angular/core/testing';
import { Counter } from './counter';

describe('Counter', () => {
  it('tăng count khi bấm', async () => {
    await TestBed.configureTestingModule({ imports: [Counter] }).compileComponents();
    const fixture = TestBed.createComponent(Counter);
    const el: HTMLElement = fixture.nativeElement;

    el.querySelector('button')!.click();
    await fixture.whenStable();                     // chờ Angular cập nhật (zoneless)
    expect(el.textContent).toContain('1');
  });
});`) },
      { t: 'list', items: [
        '<code>ng test</code>: build ở chế độ watch và chạy Vitest; môi trường DOM giả là <b>jsdom</b> (Node) nên nhanh. Có hướng dẫn <b>chuyển từ Karma</b> sang Vitest.',
        '<b>TestBed</b> tạo module kiểm thử: <code>imports</code> component standalone, <code>providers</code> để thay dependency bằng bản giả. <b>ComponentFixture</b> cung cấp <code>nativeElement</code>, <code>componentInstance</code>.',
        '<b>Zoneless:</b> dùng <code>await fixture.whenStable()</code> để chờ render thay vì <code>fakeAsync</code>/<code>tick</code> dựa Zone.js.',
        '<b>Test service:</b> <code>TestBed.inject(Service)</code>; mock HTTP bằng <code>provideHttpClientTesting()</code>.',
        '<b>Test component với input:</b> <code>fixture.componentRef.setInput(\'name\', value)</code> để set input (kể cả signal input).',
        '<b>Test pipe/directive</b> như lớp thường; <b>test attribute directive</b> bằng component host nhỏ.',
        '<b>Coverage:</b> bật độ phủ mã (<code>ng test --coverage</code>).'
      ] },
      { t: 'tip', x: '💡 Nguyên tắc: <b>test hành vi người dùng thấy</b> (văn bản, sự kiện, kết quả), không soi chi tiết nội bộ → test ít vỡ khi refactor.' }
    ] },
    { icon: '🧰', title: 'Component harness', blocks: [
      { t: 'list', items: [
        '<b>Harness</b> là lớp “API ổn định” để thao tác component (bấm nút, đọc giá trị) mà không phụ thuộc cấu trúc DOM. Thư viện (Angular Material) cung cấp sẵn harness; bạn có thể tự viết cho component của mình.',
        'Dùng <b><code>TestbedHarnessEnvironment.loader(fixture)</code></b> để lấy harness (<code>await loader.getHarness(MatButtonHarness)</code>).',
        'Harness tự chờ ổn định (<code>whenStable</code>) nên giảm test “chập chờn” (flaky).'
      ] }
    ] },
    { icon: '🛠️', title: 'Bộ công cụ', blocks: [
      { t: 'table', head: ['Công cụ', 'Dùng để'], rows: [
        ['<b>Angular CLI</b>', '<code>ng new/generate/serve/build/test/update/add</code>; build bằng Vite + esbuild'],
        ['<b>Angular DevTools</b>', 'Tiện ích trình duyệt: cây component, cây DI, <b>profiler</b> change detection'],
        ['<b>Language Service</b>', 'Gợi ý code, điều hướng, refactor, báo lỗi <b>trong template</b> ở editor'],
        ['<b>ng update</b>', 'Nâng cấp phiên bản kèm <b>migration tự động</b> (ví dụ control flow, standalone, input/output)'],
        ['<b>Schematics / ng add</b>', 'Sinh code và cài thư viện kèm cấu hình (ví dụ <code>ng add @angular/ssr</code>)'],
        ['<b>AI tooling</b>', 'Prompt rules, MCP server, AI tutor giúp dùng trợ lý AI đúng chuẩn Angular']
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> Angular cập nhật theo lịch cố định (khoảng mỗi 6 tháng một bản lớn). Thói quen tốt: chạy <code>ng update</code> thường xuyên, từng bản một, và đọc “update guide” trên angular.dev để biết thay đổi cần chú ý (như OnPush mặc định, <code>Default</code> → <code>Eager</code>).' },
      { t: 'widget', name: 'ng-pick', title: 'Luyện chọn đúng công cụ Angular' }
    ] }
  ],
  summary: [
    'ng test chạy Vitest + jsdom; TestBed/ComponentFixture; zoneless dùng whenStable; setInput cho input.',
    'Harness cho thao tác ổn định; provideHttpClientTesting để mock HTTP.',
    'Công cụ: CLI (Vite+esbuild), DevTools, Language Service, ng update (migration), ng add.'
  ],
  cards: [
    ['Test mặc định?', 'Vitest qua ng test.'],
    ['Chờ render trong zoneless?', 'await fixture.whenStable()'],
    ['Đặt input trong test?', 'fixture.componentRef.setInput()'],
    ['Mock HTTP?', 'provideHttpClientTesting()'],
    ['Nâng cấp tự động?', 'ng update'],
    ['Debug cây component/DI?', 'Angular DevTools']
  ],
  quiz: [
    { q: 'Chờ Angular cập nhật xong trong test zoneless:', o: ['fixture.whenStable()', 'setTimeout(1000)', 'Không cần', 'tick() luôn'], a: 0, e: 'Hoặc harness tự chờ.' },
    { q: 'Test runner mặc định của dự án mới:', o: ['Karma', 'Vitest', 'Mocha', 'Jasmine thuần'], a: 1, e: 'ng test dùng Vitest.' },
    { q: 'Harness giúp gì?', o: ['Thao tác component qua API ổn định, ít phụ thuộc DOM', 'Tăng bundle', 'Chạy server', 'Tắt signals'], a: 0, e: 'Giảm test chập chờn.' },
    { q: 'ng update làm được gì?', o: ['Nâng cấp kèm migration tự động', 'Xóa dự án', 'Chạy test', 'Tạo route'], a: 0, e: 'Giúp theo kịp phiên bản mới.' }
  ],
  match: [
    ['TestBed', 'Môi trường dựng component để test'],
    ['ComponentFixture', 'Bọc component trong test'],
    ['Harness', 'API thao tác ổn định'],
    ['Angular DevTools', 'Debug trong trình duyệt'],
    ['Language Service', 'Gợi ý code trong template']
  ]
},

{
  n: 14,
  title: 'Bản đồ tra cứu: chọn đúng công cụ cho đúng việc',
  intro: 'Chương cuối giúp bạn <b>chọn đúng công cụ Angular</b> cho từng tình huống, tra nhanh API, và nắm lời khuyên tổng kết để viết Angular hiện đại (v22): standalone, signals, OnPush, zoneless.',
  sections: [
    { icon: '🗺️', title: 'Tình huống → công cụ', blocks: [
      { t: 'table', head: ['Tôi cần…', 'Dùng'], rows: [
        ['State cục bộ của component', '<code>signal()</code>'],
        ['Giá trị suy ra từ state', '<code>computed()</code>'],
        ['Giá trị suy ra nhưng người dùng sửa được', '<code>linkedSignal()</code>'],
        ['Tác dụng phụ (log, localStorage…)', '<code>effect()</code> (ít dùng)'],
        ['Dữ liệu bất đồng bộ', '<code>resource()</code> / <code>httpResource()</code>'],
        ['Nhận dữ liệu từ cha / báo cha', '<code>input()</code> / <code>output()</code>; hai chiều: <code>model()</code>'],
        ['Chèn nội dung vào component', '<code>&lt;ng-content /&gt;</code>'],
        ['Lấy phần tử/component con', '<code>viewChild()</code>, <code>contentChild()</code>'],
        ['Hiện/ẩn, lặp danh sách', '<code>@if</code>, <code>@for (track)</code>, <code>@switch</code>'],
        ['Tải lười phần nặng', '<code>@defer (on viewport)</code>'],
        ['Chia sẻ logic/state toàn app', '<code>@Service()</code> + <code>inject()</code>'],
        ['Cấu hình/giá trị không phải lớp', '<code>InjectionToken</code>'],
        ['Form mới', 'Signal Forms (<code>form()</code>, <code>[formField]</code>)'],
        ['Nhiều trang, URL', 'Router (<code>provideRouter</code>, guard, lazy load)'],
        ['Gọi API / chặn chung', '<code>HttpClient</code> + interceptor'],
        ['SEO, tải nhanh', 'SSR/SSG + hydration'],
        ['Test', 'Vitest + TestBed + harness']
      ] },
      { t: 'widget', name: 'ng-pick', title: 'Luyện chọn đúng công cụ Angular' }
    ] },
    { icon: '🔎', title: 'Tra cứu từ khóa', blocks: [
      { t: 'widget', name: 'ng-lookup', title: 'Gõ từ khóa để tra API (ví dụ: signal, defer, inject, hydration…)' }
    ] },
    { icon: '🧭', title: 'Lời khuyên tổng kết', blocks: [
      { t: 'steps', items: [
        '<b>Viết Angular “hiện đại”:</b> component <b>standalone</b>, state bằng <b>signals</b>, <code>input()/output()/model()</code>, control flow <code>@if/@for</code>, <code>inject()</code>.',
        '<b>OnPush + zoneless</b> là mặc định: đừng sửa object tại chỗ; tạo giá trị mới và giữ state hiển thị trong signal.',
        '<b>Ưu tiên computed/linkedSignal/resource</b> hơn effect; effect chỉ cho tác dụng phụ thật sự.',
        '<b>Logic dùng chung vào service</b>; component mỏng, nhận input và phát output.',
        '<b>Lazy load</b> route và <code>@defer</code> phần nặng; <code>NgOptimizedImage</code> cho ảnh; đo bằng DevTools/Lighthouse.',
        '<b>Form mới:</b> Signal Forms; dự án cũ giữ Reactive forms, đổi dần khi cần.',
        '<b>Bảo mật & a11y:</b> không bypass sanitize bừa; quyền thật ở server; thẻ ngữ nghĩa và quản lý focus.',
        '<b>Cập nhật đều đặn</b> bằng <code>ng update</code>; viết test hành vi với Vitest.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này bám phần <b>Introduction, Essentials và các Guide</b> chính của angular.dev (v22): components, signals, templates, directives/pipes, DI, forms, routing, HTTP, SSR/hydration, testing, tools. Các mục <b>Animations, i18n, Drag&amp;Drop, Elements, Service Workers, Material/CDK, Angular Aria chi tiết, Tutorials</b> nằm ở phần khác của site. Nếu bạn biết Vue, hãy so sánh với giáo trình <b>Vue 3</b> và <b>Pinia</b> trong thư viện (signal ≈ ref, computed ≈ computed, @Service ≈ store).' }
    ] }
  ],
  summary: [
    'Chọn công cụ theo vai trò: signals cho state, input/output/model cho giao tiếp, service+inject cho chia sẻ, router/forms/http cho chức năng, SSR/defer cho hiệu năng.',
    'Angular hiện đại = standalone + signals + OnPush + zoneless + control flow.',
    'Cập nhật đều, test hành vi, bảo mật ở server, a11y ngay từ đầu.'
  ],
  cards: [
    ['State cục bộ?', 'signal()'],
    ['Dẫn xuất?', 'computed()'],
    ['Async data?', 'resource / httpResource'],
    ['Cha ↔ con?', 'input / output / model'],
    ['Chia sẻ logic?', '@Service() + inject()'],
    ['Form mới?', 'Signal Forms'],
    ['Tải lười?', '@defer / loadComponent'],
    ['SEO?', 'SSR/SSG + hydration']
  ],
  quiz: [
    { q: 'Giá trị suy ra từ signal khác dùng:', o: ['computed', 'effect', 'output', 'resolver'], a: 0, e: 'Ưu tiên computed.' },
    { q: 'Chia sẻ state toàn app đơn giản:', o: ['Service giữ signal + inject()', 'Biến toàn cục window', 'localStorage luôn', 'Query'], a: 0, e: 'Giống store nhỏ.' },
    { q: 'Tải phần giao diện nặng khi cần:', o: ['@defer', '@let', 'ng-container', 'host'], a: 0, e: 'Tách bundle.' },
    { q: 'Bảo vệ route thật sự cần:', o: ['Guard ở client là đủ', 'Kiểm tra quyền ở server', 'Ẩn menu', 'Đổi URL'], a: 1, e: 'Client guard chỉ là UX.' }
  ],
  match: [
    ['signal', 'State'],
    ['computed', 'Dẫn xuất'],
    ['@Service()', 'Logic dùng chung'],
    ['Router', 'Định tuyến'],
    ['SSR', 'Render ở server']
  ]
}
);
