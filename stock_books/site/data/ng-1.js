// Angular (angular.dev, v22) – bản tiếng Việt dễ hiểu – Chương 1–3.
// Khối "📚 Bổ sung ngoài tài liệu" = giải thích thêm để dễ hiểu (không nằm trong trang docs).
window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.angularguide = BOOK_DATA.angularguide || { chapters: [] };
const A1 = s => '<pre class="code" style="white-space:pre-wrap;overflow:auto;padding:10px;border-radius:8px;background:rgba(127,127,127,.14);font-size:13px"><code>' + s.replace(/&/g, '&amp;').replace(/</g, '&lt;') + '</code></pre>';
BOOK_DATA.angularguide.chapters.push(

{
  n: 1,
  title: 'Angular là gì, cài đặt và cấu trúc dự án',
  intro: 'Angular là framework web do Google duy trì để xây ứng dụng nhanh, đáng tin cậy và mở rộng được theo quy mô đội ngũ lẫn mã nguồn. Khác với thư viện “chỉ vẽ giao diện”, Angular là <b>nền tảng trọn gói</b>: component, signals, template, DI, router, forms, HTTP, SSR, testing và CLI — dùng chung một cách làm.',
  sections: [
    { icon: '🧭', title: 'Angular có gì trong hộp?', blocks: [
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> nếu Vue/React như “bộ đồ nghề tự chọn”, Angular như <b>bộ nhà bếp lắp sẵn</b>: bếp, tủ, bồn rửa đã đồng bộ. Bạn ít phải chọn thư viện này hay kia, đổi lại phải học “cách bố trí” của nhà bếp đó.' },
      { t: 'table', head: ['Thành phần', 'Làm gì'], rows: [
        ['<b>Components</b>', 'Chia giao diện thành các phần đóng gói rõ ràng'],
        ['<b>Signals</b>', 'Mô hình reactivity chi tiết (fine-grained): dữ liệu đổi → chỉ phần cần thiết cập nhật'],
        ['<b>Template</b>', 'HTML mở rộng: binding, <code>@if</code>/<code>@for</code>, <code>@defer</code>, pipes'],
        ['<b>Dependency Injection</b>', 'Chia sẻ code (service) khắp ứng dụng và test'],
        ['<b>Router</b>', 'Điều hướng, guard, resolver, lazy loading'],
        ['<b>Forms</b>', 'Chuẩn hóa nhập liệu và validation (Signal Forms, Reactive, Template-driven)'],
        ['<b>HttpClient / httpResource</b>', 'Gọi API'],
        ['<b>SSR / SSG + Hydration</b>', 'Render ở server, tĩnh hóa, “đánh thức” phía client'],
        ['<b>CLI, DevTools, Language Service, ng update</b>', 'Công cụ: tạo dự án, debug, gợi ý code, nâng cấp tự động']
      ] },
      { t: 'list', items: [
        '<b>Ổn định cho dự án lớn:</b> lịch phát hành theo thời gian, có chính sách hỗ trợ dài hạn (LTS), mỗi thay đổi được kiểm chứng trên kho mã khổng lồ của Google.',
        '<b>Bảo mật mặc định:</b> tự làm sạch HTML, hỗ trợ Trusted Types, chống XSS/CSRF.',
        '<b>Build nhanh:</b> CLI dùng <b>Vite + esbuild</b>. <b>Quốc tế hóa (i18n)</b> có sẵn.'
      ] },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> giáo trình này theo tài liệu <b>angular.dev (Angular 22)</b>. Phiên bản mới có các thay đổi lớn so với “Angular cũ” bạn có thể gặp trong bài viết cũ: component <b>standalone</b> là mặc định (không cần NgModule), <b>zoneless</b> là mặc định từ v21, <b>OnPush</b> là mặc định từ v22, <b>Signal Forms</b> và signals bất đồng bộ (<code>resource</code>) đã <b>stable</b> ở v22, test mặc định là <b>Vitest</b>.' }
    ] },
    { icon: '📦', title: 'Cài đặt và tạo dự án', blocks: [
      { t: 'steps', items: [
        'Cần <b>Node.js</b> (Angular 22: <code>^22.22.3 || ^24.15.0 || ^26.0.0</code>), một editor (khuyên dùng <b>VS Code</b>) và terminal. Cài thêm <b>Angular Language Service</b> để gợi ý code trong template.',
        'Cài CLI: <code>npm install -g @angular/cli</code>.',
        'Tạo dự án: <code>ng new my-first-angular-app</code> (trả lời các lựa chọn; không có ý kiến cứ Enter).',
        'Chạy: <code>cd my-first-angular-app</code> rồi <code>npm start</code> → mở <code>http://localhost:4200</code>.'
      ] },
      { t: 'table', head: ['Lệnh CLI hay dùng', 'Tác dụng'], rows: [
        ['<code>ng new</code>', 'Tạo dự án mới'],
        ['<code>ng serve</code> / <code>npm start</code>', 'Chạy dev server (watch)'],
        ['<code>ng generate component|service|guard|... NAME</code>', 'Sinh file đúng chuẩn'],
        ['<code>ng build</code>', 'Build production'],
        ['<code>ng test</code>', 'Chạy test (mặc định Vitest)'],
        ['<code>ng update</code>', 'Nâng cấp phiên bản tự động (migration code)']
      ] },
      { t: 'tip', x: 'Không muốn cài gì? Dùng <b>Playground online</b> trên angular.dev để thử code ngay trong trình duyệt. Có thể học qua <b>Tutorials</b> (Learn Angular, First app, Signals, Signal Forms…).' }
    ] },
    { icon: '🗂️', title: 'Dự án mới trông thế nào?', blocks: [
      { t: 'table', head: ['Tệp/thư mục', 'Vai trò'], rows: [
        ['<code>src/main.ts</code>', 'Điểm vào: <code>bootstrapApplication(App, appConfig)</code>'],
        ['<code>src/app/app.ts</code>', 'Component gốc (<code>App</code>)'],
        ['<code>src/app/app.config.ts</code>', '<code>ApplicationConfig</code>: danh sách <code>providers</code> (router, http…)'],
        ['<code>src/app/app.routes.ts</code>', 'Khai báo các route'],
        ['<code>angular.json</code>', 'Cấu hình build/serve/test của workspace'],
        ['<code>public/</code>', 'Tài nguyên tĩnh (favicon, ảnh…)']
      ] },
      { t: 'p', x: A1(`// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig).catch(err => console.error(err));

// src/app/app.config.ts
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};`) },
      { t: 'tip', x: '📚 Quy ước đặt tên hiện đại (theo style guide mới): tên file/lớp <b>ngắn gọn theo vai trò</b> như <code>app.ts</code> với lớp <code>App</code>, <code>user-profile.ts</code> với lớp <code>UserProfile</code> (không còn hậu tố <code>Component</code> bắt buộc). Bạn sẽ vẫn gặp <code>app.component.ts</code> trong dự án cũ.' }
    ] }
  ],
  summary: [
    'Angular là nền tảng trọn gói: component, signals, template, DI, router, forms, HTTP, SSR, test, CLI.',
    'Angular 22: standalone mặc định, zoneless mặc định (từ v21), OnPush mặc định (v22), Signal Forms stable, test bằng Vitest.',
    'Tạo dự án: npm i -g @angular/cli → ng new → npm start (localhost:4200); điểm vào main.ts + app.config.ts + app.routes.ts.'
  ],
  cards: [
    ['Angular là gì?', 'Framework web trọn gói do Google duy trì.'],
    ['Tạo dự án?', 'ng new TÊN-DỰ-ÁN (cần @angular/cli).'],
    ['Chạy dev?', 'npm start / ng serve → localhost:4200.'],
    ['Cấu hình providers ở đâu?', 'app.config.ts (ApplicationConfig).'],
    ['Điểm vào?', 'main.ts: bootstrapApplication.'],
    ['Test mặc định?', 'Vitest (ng test).']
  ],
  quiz: [
    { q: 'Điểm khác biệt chính của Angular so với một thư viện UI:', o: ['Là nền tảng trọn gói (router, forms, DI, CLI…)', 'Chỉ có template', 'Không dùng TypeScript', 'Không có CLI'], a: 0, e: 'Angular tích hợp sẵn nhiều thành phần.' },
    { q: 'Lệnh tạo dự án Angular mới:', o: ['ng new', 'npm create vue', 'ng make', 'angular init'], a: 0, e: 'Cần cài @angular/cli.' },
    { q: 'Cấu hình providers của ứng dụng đặt trong:', o: ['app.config.ts', 'angular.json', 'package.json', 'main.css'], a: 0, e: 'ApplicationConfig.providers.' },
    { q: 'Từ Angular 21, chế độ phát hiện thay đổi mặc định là:', o: ['Zone.js bắt buộc', 'Zoneless', 'Không có', 'Chỉ thủ công'], a: 1, e: 'Zoneless là mặc định từ v21.' }
  ],
  match: [
    ['ng new', 'Tạo dự án'],
    ['ng generate', 'Sinh component/service/…'],
    ['app.config.ts', 'ApplicationConfig providers'],
    ['Vite + esbuild', 'Pipeline build của CLI'],
    ['ng update', 'Nâng cấp kèm migration']
  ]
},

{
  n: 2,
  title: 'Component: khối xây dựng ứng dụng',
  intro: 'Mọi ứng dụng Angular là một cây component. Mỗi component có <b>decorator @Component</b>, <b>template HTML</b>, <b>selector</b> để dùng trong HTML và <b>lớp TypeScript</b> chứa hành vi. Chương này: định nghĩa, import và dùng component, style, selector, host element.',
  sections: [
    { icon: '🧩', title: 'Định nghĩa một component', blocks: [
      { t: 'p', x: A1(`import { Component } from '@angular/core';

@Component({
  selector: 'user-profile',
  template: '<h1>User profile</h1><p>Đây là trang hồ sơ</p>',
  styles: 'h1 { font-size: 3em; }',
})
export class UserProfile {
  /* code của component */
}

// Hoặc tách file:
// templateUrl: 'user-profile.html', styleUrl: 'user-profile.css'`) },
      { t: 'table', head: ['Phần', 'Ý nghĩa'], rows: [
        ['<code>@Component</code>', 'Decorator chứa cấu hình cho Angular'],
        ['<code>selector</code>', 'CSS selector: nơi nào trong HTML có thẻ khớp thì Angular dựng component ở đó (<code>&lt;user-profile /&gt;</code>)'],
        ['<code>template</code>/<code>templateUrl</code>', 'HTML quyết định cái gì hiển thị'],
        ['<code>styles</code>/<code>styleUrl</code>', 'CSS riêng của component (được đóng gói – scoped mặc định)'],
        ['Lớp TypeScript', 'Trạng thái (signals), hành vi, gọi service']
      ] },
      { t: 'tip', x: '💡 <b>Nói dễ hiểu:</b> component như <b>một viên gạch LEGO có nhãn</b> (selector). Bạn đặt nhãn <code>&lt;user-profile /&gt;</code> vào HTML, Angular thay nó bằng viên gạch thật gồm HTML + CSS + logic.' }
    ] },
    { icon: '🔗', title: 'Dùng component trong component khác', blocks: [
      { t: 'steps', items: [
        '<b>import</b> lớp component ở đầu file TypeScript.',
        'Thêm nó vào mảng <b><code>imports</code></b> của <code>@Component</code> (component hiện là <b>standalone</b> mặc định, tự khai báo thứ nó dùng).',
        'Viết thẻ khớp <code>selector</code> trong template.'
      ] },
      { t: 'p', x: A1(`import { ProfilePhoto } from './profile-photo';

@Component({
  selector: 'user-profile',
  imports: [ProfilePhoto],
  template: '<h1>User profile</h1><profile-photo />',
})
export class UserProfile {}`) },
      { t: 'list', items: [
        '<b>Standalone mặc định</b> (từ Angular 19): không cần <code>standalone: true</code> hay NgModule. Dự án cũ có thể còn <code>standalone: false</code> + NgModule.',
        'Thẻ tự đóng <code>&lt;profile-photo /&gt;</code> được hỗ trợ trong template Angular.',
        'Quên thêm vào <code>imports</code> sẽ báo lỗi “is not a known element”.'
      ] }
    ] },
    { icon: '🎯', title: 'Selector, style và đóng gói', blocks: [
      { t: 'table', head: ['Loại selector', 'Ví dụ', 'Dùng'], rows: [
        ['Phần tử', '<code>selector: \'user-profile\'</code>', '<code>&lt;user-profile /&gt;</code> (phổ biến nhất)'],
        ['Thuộc tính', '<code>selector: \'button[appFancy]\'</code>', '<code>&lt;button appFancy&gt;</code> – “nâng cấp” phần tử có sẵn'],
        ['Class', '<code>selector: \'.card\'</code>', 'Hiếm dùng'],
        ['<code>:not()</code>', '<code>\'button:not([disabled])\'</code>', 'Loại trừ']
      ] },
      { t: 'list', items: [
        '<b>Style đóng gói (ViewEncapsulation):</b> mặc định <code>Emulated</code> – CSS của component chỉ áp cho phần tử của nó (Angular thêm thuộc tính riêng). Có thể chọn <code>ShadowDom</code> hoặc <code>None</code> (CSS toàn cục).',
        '<b>Tiền tố selector:</b> dùng tiền tố của dự án (vd <code>app-</code>, <code>acme-</code>) để tránh đụng thẻ HTML/thư viện khác.',
        '<b>Host element:</b> phần tử mà component được gắn vào. Gắn thuộc tính/class/sự kiện cho nó bằng thuộc tính <code>host: { ... }</code> trong <code>@Component</code>.'
      ] },
      { t: 'p', x: A1(`@Component({
  selector: 'custom-slider',
  host: {
    'role': 'slider',
    '[class.active]': 'isActive()',      // binding class
    '[attr.aria-valuenow]': 'value()',
    '(keydown)': 'onKey($event)',        // lắng nghe sự kiện trên host
  },
  template: '...',
})
export class CustomSlider { /* ... */ }`) },
      { t: 'tip', x: '📚 <b>Bổ sung ngoài tài liệu:</b> trước đây người ta dùng decorator <code>@HostBinding</code>/<code>@HostListener</code>; tài liệu hiện khuyên dùng thuộc tính <code>host</code> vì gom ở một chỗ, dễ đọc và hợp với signals.' }
    ] },
    { icon: '🏗️', title: 'Chia component thế nào cho tốt?', blocks: [
      { t: 'list', items: [
        '<b>Một component – một nhiệm vụ rõ ràng</b> (ví dụ <code>ProfilePhoto</code>, <code>UserBiography</code>).',
        '<b>Component “thông minh” và “ngu”</b> (smart/presentational): cái ngu chỉ nhận dữ liệu qua input và báo sự kiện qua output; cái thông minh lấy dữ liệu (service) và điều phối.',
        '<b>Đừng nhét logic nặng vào component:</b> đưa vào <b>service</b> (chương 8) để tái dùng và test.',
        '<b>Lập trình lên-xuống:</b> dữ liệu đi xuống bằng input, sự kiện đi lên bằng output (chương 3).'
      ] },
      { t: 'widget', name: 'ng-syntax-quiz', title: 'Ghép cú pháp Angular với ý nghĩa' }
    ] }
  ],
  summary: [
    '@Component gồm selector, template (hoặc templateUrl), styles; lớp TypeScript chứa hành vi.',
    'Dùng component khác: import lớp + thêm vào imports + viết thẻ selector (standalone mặc định).',
    'Host element cấu hình bằng thuộc tính host; style mặc định đóng gói theo component.'
  ],
  cards: [
    ['selector là gì?', 'CSS selector xác định nơi component được dựng.'],
    ['Dùng component con?', 'import + imports[] + thẻ selector.'],
    ['Standalone?', 'Mặc định từ Angular 19 – không cần NgModule.'],
    ['Cấu hình host element?', 'Thuộc tính host: {...}.'],
    ['Style bị rò rỉ ra ngoài?', 'Không (Emulated encapsulation mặc định).'],
    ['Logic dùng chung?', 'Đưa vào service.']
  ],
  quiz: [
    { q: 'Để dùng component Child trong Parent bạn cần:', o: ['Thêm Child vào imports của Parent', 'Đăng ký trong NgModule bắt buộc', 'Gọi new Child()', 'Không cần gì'], a: 0, e: 'Component standalone tự khai báo imports.' },
    { q: 'Thuộc tính cấu hình host element:', o: ['host', 'hostElement', 'bind', 'root'], a: 0, e: 'host: { ... } trong @Component.' },
    { q: 'Mặc định CSS của component:', o: ['Áp toàn cục', 'Được đóng gói cho riêng component', 'Không dùng được', 'Chỉ ở file styles.css'], a: 1, e: 'ViewEncapsulation.Emulated.' },
    { q: 'Selector dạng thuộc tính dùng để:', o: ['Nâng cấp phần tử HTML có sẵn', 'Tạo route', 'Gọi API', 'Khai báo service'], a: 0, e: 'Ví dụ button[appFancy].' }
  ],
  match: [
    ['selector', 'Thẻ/CSS để dựng component'],
    ['imports', 'Khai báo component/directive dùng trong template'],
    ['templateUrl', 'Tách HTML ra file'],
    ['host', 'Cấu hình phần tử chứa component'],
    ['ViewEncapsulation', 'Cách đóng gói CSS']
  ]
},

{
  n: 3,
  title: 'Giao tiếp component: input, output, model, content projection, query',
  intro: 'Component hiếm khi sống một mình. Chương này gồm: <b>input()</b> nhận dữ liệu từ cha, <b>output()</b> báo sự kiện lên cha, <b>model()</b> cho hai chiều, <b>content projection</b> (<code>ng-content</code>) để cha nhét nội dung vào, và <b>query</b> (<code>viewChild</code>/<code>contentChild</code>) để lấy phần tử/component con.',
  sections: [
    { icon: '⬇️', title: 'input(): dữ liệu từ cha xuống con', blocks: [
      { t: 'p', x: A1(`import { Component, input, computed } from '@angular/core';

@Component({ selector: 'custom-slider', template: '<p>{{ label() }}</p>' })
export class CustomSlider {
  value = input(0);                       // InputSignal<number>, mặc định 0
  min = input.required<number>();         // BẮT BUỘC truyền
  label = computed(() => 'Giá trị: ' + this.value());
}

// Cha:
// <custom-slider [value]="50" [min]="0" />`) },
      { t: 'list', items: [
        '<b>input là signal chỉ đọc:</b> đọc bằng <code>value()</code>; dùng được trong <code>computed</code>/<code>effect</code>/template.',
        '<code>input&lt;number&gt;()</code> không có mặc định → kiểu <code>number | undefined</code>. <code>input.required&lt;T&gt;()</code>: nếu cha không truyền sẽ <b>lỗi lúc biên dịch</b>.',
        '<b>Transform:</b> <code>input(false, { transform: booleanAttribute })</code> để chuyển giá trị (ví dụ thuộc tính HTML <code>disabled</code> không giá trị → <code>true</code>).',
        '<b>Alias:</b> <code>input(0, { alias: \'sliderValue\' })</code>.',
        'Input được <b>ghi nhận lúc biên dịch</b>: chỉ khai báo trong initializer của thuộc tính lớp, không thêm/bớt lúc chạy.'
      ] },
      { t: 'tip', x: '💡 Tên input phân biệt hoa thường và không được đụng thuộc tính DOM native có ý nghĩa (như <code>class</code>, <code>id</code> nếu không có chủ ý).' }
    ] },
    { icon: '⬆️', title: 'output(): sự kiện từ con lên cha', blocks: [
      { t: 'p', x: A1(`import { Component, output } from '@angular/core';

@Component({ selector: 'expandable-panel', template: '<button (click)="toggle()">Mở/đóng</button>' })
export class ExpandablePanel {
  panelClosed = output<void>();           // không kèm dữ liệu
  valueChanged = output<number>();        // kèm giá trị

  toggle() { this.panelClosed.emit(); this.valueChanged.emit(42); }
}

// Cha:  <expandable-panel (panelClosed)="onClose()" (valueChanged)="onValue($event)" />`) },
      { t: 'list', items: [
        '<code>output()</code> trả về <code>OutputEmitterRef</code>; gọi <code>.emit(giá trị)</code>. Cha nghe bằng <code>(tên)</code>, giá trị nằm ở <code>$event</code>.',
        'Đặt tên sự kiện là <b>động từ chia ở quá khứ/hiện tại có nghĩa</b> (<code>closed</code>, <code>valueChanged</code>); tránh trùng tên sự kiện DOM native (như <code>click</code>).',
        'Output <b>không nổi bọt</b> (không bubble) như sự kiện DOM.',
        'Có thể đăng ký bằng code qua <code>subscribe</code> khi tạo component động; dùng với RxJS qua <code>outputFromObservable()</code>/<code>outputToObservable()</code>.'
      ] },
      { t: 'tip', x: '📚 Kiểu cũ: decorator <code>@Input()</code>/<code>@Output()</code> + <code>EventEmitter</code> vẫn chạy nhưng <b>input()/output()</b> là cách hiện đại (type-safe, hợp signals).' }
    ] },
    { icon: '↔️', title: 'model(): hai chiều giữa cha và con', blocks: [
      { t: 'p', x: A1(`// Con
import { Component, model } from '@angular/core';
@Component({ selector: 'app-counter',
  template: '<button (click)="count.set(count() - 1)">-</button> {{ count() }} <button (click)="count.set(count() + 1)">+</button>' })
export class Counter { count = model<number>(0); }

// Cha: dùng cú pháp "hộp trong ngoặc" [( )]
// <app-counter [(count)]="initialCount" />   // initialCount là signal hoặc thuộc tính`) },
      { t: 'list', items: [
        '<code>model()</code> = input + output cùng tên (<code>count</code> + <code>countChange</code>) gói gọn: con vừa nhận vừa <b>ghi được</b>.',
        '<code>[(count)]="x"</code> là cú pháp rút gọn của <code>[count]="x" (countChange)="x = $event"</code> (nhớ: “banana in a box” <code>[()]</code>).',
        'Chỉ dùng khi cha–con thực sự chia sẻ <b>một giá trị</b>; với hành động/sự kiện khác hãy dùng output thường.'
      ] },
      { t: 'widget', name: 'ng-io-flow', title: 'Thử: input xuống, output lên, model hai chiều' }
    ] },
    { icon: '🧳', title: 'Content projection: nhét nội dung vào component', blocks: [
      { t: 'p', x: A1(`// card.ts
@Component({
  selector: 'app-card',
  template: '<header><ng-content select="[card-title]" /></header><div><ng-content /></div><footer><ng-content select="footer" /></footer>',
})
export class Card {}

// Dùng:
// <app-card>
//   <h2 card-title>Tiêu đề</h2>
//   <p>Nội dung chính (vào ng-content mặc định)</p>
//   <footer>Chân thẻ</footer>
// </app-card>`) },
      { t: 'list', items: [
        '<b><code>&lt;ng-content /&gt;</code></b> là “ô trống” trong template của component; nội dung đặt giữa thẻ mở/đóng của component ở nơi dùng sẽ được <b>chiếu</b> vào đó.',
        '<b>Nhiều slot:</b> <code>select="CSS selector"</code> để phân loại; phần còn lại vào <code>&lt;ng-content /&gt;</code> mặc định.',
        '<b>Nội dung dự phòng:</b> viết bên trong <code>&lt;ng-content&gt;fallback&lt;/ng-content&gt;</code>.',
        '<b>Bí danh:</b> <code>ngProjectAs</code> để nội dung bọc trong <code>&lt;ng-container&gt;</code> vẫn khớp selector.',
        'Nội dung được chiếu <b>được tạo bởi cha</b> (thuộc phạm vi cha), dù hiển thị bên trong con.'
      ] },
      { t: 'tip', x: '💡 Tương đương “slot” trong Vue. <b>Template động</b> (<code>ng-template</code> + <code>ngTemplateOutlet</code>) là cách truyền “khuôn” có tham số khi cần như scoped slot.' }
    ] },
    { icon: '🔍', title: 'Query: lấy phần tử/component con', blocks: [
      { t: 'p', x: A1(`import { Component, viewChild, viewChildren, contentChild, ElementRef, afterNextRender } from '@angular/core';

@Component({ selector: 'app-form', template: '<input #name /> <app-row /> <app-row />' })
export class Form {
  nameInput = viewChild.required<ElementRef<HTMLInputElement>>('name');   // theo template ref
  rows = viewChildren(Row);                                              // theo lớp, trả Signal<readonly Row[]>

  constructor() {
    afterNextRender(() => this.nameInput().nativeElement.focus());       // sau khi đã render
  }
}`) },
      { t: 'table', head: ['Hàm', 'Tìm ở đâu', 'Kết quả'], rows: [
        ['<code>viewChild()</code> / <code>viewChild.required()</code>', 'Trong template của <b>chính component</b>', 'Một phần tử/component (signal)'],
        ['<code>viewChildren()</code>', 'Như trên', 'Nhiều phần tử (signal mảng)'],
        ['<code>contentChild()</code> / <code>contentChildren()</code>', 'Trong nội dung được <b>chiếu</b> (<code>ng-content</code>)', 'Một/nhiều']
      ] },
      { t: 'list', items: [
        'Locator: <b>lớp component/directive</b>, <b>template ref</b> (<code>#name</code> → chuỗi <code>\'name\'</code>), hoặc token provider.',
        'Kết quả là <b>signal</b>; giá trị có sau khi view được tạo — đọc trong <code>afterNextRender</code>/<code>effect</code> hoặc <code>computed</code>, đừng đọc trong constructor ngay.',
        'Tuỳ chọn <code>read: ElementRef</code>/<code>read: ViewContainerRef</code> để chỉ định kiểu cần lấy; <code>descendants</code> cho <code>contentChildren</code>.',
        '<b>Tránh sửa state trong query</b> gây vòng lặp cập nhật (ExpressionChanged…).',
        'Cách cũ: <code>@ViewChild</code>/<code>@ContentChild</code> + <code>QueryList</code> vẫn tồn tại.'
      ] }
    ] }
  ],
  summary: [
    'input()/input.required() nhận dữ liệu (signal chỉ đọc); output() + emit() báo sự kiện; model() cho [( )] hai chiều.',
    'ng-content (có select) để chiếu nội dung từ cha vào component con.',
    'viewChild/viewChildren/contentChild(ren) lấy phần tử/component con dưới dạng signal; đọc sau khi render.'
  ],
  cards: [
    ['Nhận dữ liệu từ cha?', 'input() / input.required()'],
    ['Báo cha biết?', 'output() + emit()'],
    ['Hai chiều?', 'model() + [(prop)]'],
    ['Nhét nội dung vào component?', 'Thẻ ng-content (select để chia slot).'],
    ['Lấy phần tử trong template?', 'viewChild("ref")'],
    ['Đọc query ở đâu an toàn?', 'afterNextRender / effect / computed.']
  ],
  quiz: [
    { q: 'input.required() khác input() ở chỗ:', o: ['Bắt buộc cha phải truyền (lỗi biên dịch nếu thiếu)', 'Chạy nhanh hơn', 'Cho phép ghi', 'Là output'], a: 0, e: 'Không có undefined trong kiểu.' },
    { q: 'Cú pháp hai chiều cha–con:', o: ['[(count)]="x" với model()', '(count)="x"', '{{ count }}', '@count'], a: 0, e: 'model() = input + output.' },
    { q: 'Query lấy phần tử trong nội dung được chiếu:', o: ['viewChild', 'contentChild', 'output', 'inject'], a: 1, e: 'content* cho nội dung chiếu.' },
    { q: 'Output sự kiện có nổi bọt như sự kiện DOM không?', o: ['Có', 'Không', 'Chỉ khi dùng model', 'Chỉ trong SSR'], a: 1, e: 'Chỉ lên cha trực tiếp.' }
  ],
  match: [
    ['input()', 'Dữ liệu từ cha'],
    ['output()', 'Sự kiện lên cha'],
    ['model()', 'Hai chiều'],
    ['ng-content', 'Content projection'],
    ['viewChild()', 'Query trong view']
  ]
}
);
