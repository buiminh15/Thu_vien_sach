// Danh sách sách. Thêm sách mới: thêm 1 object vào đây + 1 file data/<id>.js
window.BOOKS = [
  {
    id: "hotenglish",
    href: "hotenglish.html",
    title: "Hot English Magazine – đọc & nghe",
    subtitle: "Tạp chí tiếng Anh kèm CD: đọc PDF và nghe từng track ngay tại trang",
    author: "Hot English Publishing",
    cat: "Tiếng Anh",
    tags: ["hot english","tạp chí","listening","nghe","tiếng anh","mp3","phrasal verbs","idioms"],
    level: "Trung cấp → Nâng cao",
    emoji: "🎧",
    color: "linear-gradient(135deg,#9f1239,#fb7185)",
    desc: "Trình xem PDF tạp chí Hot English kèm danh sách phát MP3: nút ▶ nằm ngay tại trang có track, tua/lặp đoạn/đổi tốc độ, xem văn bản, dùng được trên điện thoại. Dùng chung cho nhiều số báo (thêm bằng script HE/he_build.py).",
    chapters: [
      { n: 1, title: "Số 108 – đọc kèm nghe", ready: true }
    ]
  },
  {
    id: "reactref", "mindmap": "reactref-mindmap.html",
    title: "React Reference – giáo trình tiếng Việt dễ hiểu",
    subtitle: "Hooks, Components, APIs, Legacy và Rules of React (react.dev/reference/react)",
    author: "Biên soạn tiếng Việt từ tài liệu chính thức react.dev",
    cat: "Lập trình & AI",
    tags: ["react","react 19","hooks","useState","useEffect","suspense","transition","server components","actions","rules of hooks"],
    level: "Cơ bản → Nâng cao",
    emoji: "⚛️",
    color: "linear-gradient(135deg,#0c4a6e,#38bdf8)",
    desc: "13 chương học React qua mục Reference: state, context, ref, Effect, ghi nhớ và React Compiler, Transition/Suspense, Actions và form (useActionState, useOptimistic), hook khác, component có sẵn (StrictMode, Activity, ViewTransition…), Server Components (cache, use client/server), Rules of React, API cũ và bản đồ tra cứu. Giải thích bằng ví dụ đời thường, có mô phỏng tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "State: useState và useReducer", ready: true },
      { n: 2, title: "Context: createContext, useContext và use", ready: true },
      { n: 3, title: "Ref và DOM: useRef, useImperativeHandle", ready: true },
      { n: 4, title: "Effect: useEffect, useEffectEvent, useLayoutEffect", ready: true },
      { n: 5, title: "Ghi nhớ để tối ưu: useMemo, useCallback, memo, Compiler", ready: true },
      { n: 6, title: "Giao diện mượt: Transition, DeferredValue, Suspense, lazy", ready: true },
      { n: 7, title: "Form và dữ liệu: useActionState, useOptimistic, Actions", ready: true },
      { n: 8, title: "Hook khác: useId, useSyncExternalStore, custom Hook", ready: true },
      { n: 9, title: "Component có sẵn: Fragment, StrictMode, Profiler, Activity, ViewTransition", ready: true },
      { n: 10, title: "Server Components: cache, use client, use server", ready: true },
      { n: 11, title: "Quy tắc của React, act và captureOwnerStack", ready: true },
      { n: 12, title: "API cũ (Legacy): class, Children, cloneElement, forwardRef", ready: true },
      { n: 13, title: "Bản đồ tra cứu: chọn đúng API cho đúng việc", ready: true }
    ]
  },
  {
    id: "nuxt4", "mindmap": "nuxt4-mindmap.html",
    title: "Nuxt 4 – giáo trình tiếng Việt dễ hiểu",
    subtitle: "Từ Get Started, Structure, Guide đến tra cứu API (nuxt.com/docs/4.x)",
    author: "Biên soạn tiếng Việt từ tài liệu chính thức Nuxt 4.x",
    cat: "Lập trình & AI",
    tags: ["nuxt","nuxt 4","vue","ssr","nitro","routing","data fetching","routerules","modules","layers","hydration"],
    level: "Cơ bản → Nâng cao",
    emoji: "🟢",
    color: "linear-gradient(135deg,#065f46,#00dc82)",
    desc: "14 chương học Nuxt 4 theo tài liệu chính thức: giới thiệu, cài đặt và cấu hình, cấu trúc thư mục (app/), giao diện, routing và middleware, lấy dữ liệu, state/lỗi/SEO, server Nitro, chế độ render và deploy, vòng đời, chất lượng (hydration, hiệu năng, tiếp cận, test), modules và layers, recipes và tra cứu API. Giải thích bằng ví dụ đời thường, có mô phỏng tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Nuxt là gì và vì sao dùng?", ready: true },
      { n: 2, title: "Cài đặt, nuxt.config và các loại cấu hình", ready: true },
      { n: 3, title: "Cấu trúc thư mục Nuxt 4", ready: true },
      { n: 4, title: "Giao diện: app.vue, components, layouts, assets, styling", ready: true },
      { n: 5, title: "Routing, điều hướng và middleware", ready: true },
      { n: 6, title: "Lấy dữ liệu: $fetch, useFetch, useAsyncData", ready: true },
      { n: 7, title: "State, xử lý lỗi và SEO", ready: true },
      { n: 8, title: "Server của Nuxt: Nitro, API và middleware", ready: true },
      { n: 9, title: "Chế độ render, prerender và deploy", ready: true },
      { n: 10, title: "Vòng đời, auto-imports, plugins và Nuxt context", ready: true },
      { n: 11, title: "Chất lượng: hydration, hiệu năng, tiếp cận, TypeScript, test", ready: true },
      { n: 12, title: "Modules và Layers: mở rộng và chia sẻ", ready: true },
      { n: 13, title: "Recipes và chủ đề nâng cao", ready: true },
      { n: 14, title: "Tra cứu API nhanh: composables, utils, components, CLI", ready: true }
    ]
  },
  {
    id: "vue3guide", "mindmap": "vue3guide-mindmap.html",
    title: "Vue 3 Guide – giáo trình tiếng Việt dễ hiểu",
    subtitle: "Từ Introduction đến Extras: reactivity, component, composable, TypeScript, hiệu năng (vuejs.org/guide)",
    author: "Biên soạn tiếng Việt từ tài liệu chính thức vuejs.org",
    cat: "Lập trình & AI",
    tags: ["vue","vue 3","composition api","script setup","ref","computed","watch","props","slots","composable","pinia","typescript"],
    level: "Cơ bản → Nâng cao",
    emoji: "💚",
    color: "linear-gradient(135deg,#1f6f4a,#42b883)",
    desc: "13 chương theo Guide chính thức của Vue 3 (ưu tiên Composition API + script setup): reactivity, template, component, slots, provide/inject, composable, built-in components, router/Pinia/SSR/test, TypeScript, hiệu năng/a11y/bảo mật và bản đồ chọn đúng tính năng.",
    chapters: [
      { n: 1, title: "Vue là gì? Bắt đầu nhanh, ứng dụng và SFC", ready: true },
      { n: 2, title: "Template, reactivity cơ bản và computed", ready: true },
      { n: 3, title: "Giao diện theo dữ liệu: class/style, v-if, v-for, sự kiện, form", ready: true },
      { n: 4, title: "Watcher, vòng đời và template ref", ready: true },
      { n: 5, title: "Component cơ bản: props, events, đăng ký", ready: true },
      { n: 6, title: "Component nâng cao: attrs, slots, provide/inject, v-model, async", ready: true },
      { n: 7, title: "Tái sử dụng logic: composable, directive tùy biến, plugin", ready: true },
      { n: 8, title: "Component dựng sẵn: Transition, KeepAlive, Teleport, Suspense", ready: true },
      { n: 9, title: "Mở rộng quy mô: SFC, công cụ, router, state, SSR, test", ready: true },
      { n: 10, title: "Vue với TypeScript", ready: true },
      { n: 11, title: "Thực hành tốt: triển khai, hiệu năng, tiếp cận, bảo mật", ready: true },
      { n: 12, title: "Nâng cao: reactivity sâu, cơ chế render, render function, web components", ready: true },
      { n: 13, title: "Bản đồ tra cứu: chọn đúng tính năng cho đúng việc", ready: true }
    ]
  },
  {
    id: "piniaguide", "mindmap": "piniaguide-mindmap.html",
    title: "Pinia – quản lý state cho Vue (tiếng Việt dễ hiểu)",
    subtitle: "Core Concepts, Plugins, SSR/Nuxt, Testing (pinia.vuejs.org)",
    author: "Biên soạn tiếng Việt từ tài liệu chính thức Pinia",
    cat: "Lập trình & AI",
    tags: ["pinia","vue","state management","store","defineStore","getters","actions","storeToRefs","plugins","ssr","nuxt","testing"],
    level: "Cơ bản → Nâng cao",
    emoji: "🍍",
    color: "linear-gradient(135deg,#b45309,#fbbf24)",
    desc: "10 chương theo tài liệu chính thức Pinia: store (Option/Setup), state, getters, actions, dùng store ngoài component và ghép store, plugins, SSR và Nuxt, testing, HMR, chuyển từ Vuex và bản đồ tra cứu.",
    chapters: [
      { n: 1, title: "Pinia là gì, vì sao dùng và cài đặt", ready: true },
      { n: 2, title: "Định nghĩa store: Option store, Setup store, storeToRefs", ready: true },
      { n: 3, title: "State: đọc, ghi, $patch, $reset và $subscribe", ready: true },
      { n: 4, title: "Getters: giá trị dẫn xuất của store", ready: true },
      { n: 5, title: "Actions: logic nghiệp vụ và theo dõi action", ready: true },
      { n: 6, title: "Store ngoài component, ghép store và dùng composable", ready: true },
      { n: 7, title: "Plugins: mở rộng mọi store", ready: true },
      { n: 8, title: "SSR và Nuxt", ready: true },
      { n: 9, title: "Testing, HMR và chuyển từ Vuex", ready: true },
      { n: 10, title: "Bản đồ tra cứu và lời khuyên tổng kết", ready: true }
    ]
  },
  {
    id: "angularguide", "mindmap": "angularguide-mindmap.html",
    title: "Angular 22 – giáo trình tiếng Việt dễ hiểu",
    subtitle: "Components, Signals, Template, DI, Forms, Router, HTTP, SSR, Testing (angular.dev)",
    author: "Biên soạn tiếng Việt từ tài liệu chính thức angular.dev",
    cat: "Lập trình & AI",
    tags: ["angular","angular 22","signals","standalone","zoneless","onpush","signal forms","router","httpresource","ssr","hydration","vitest","dependency injection"],
    level: "Cơ bản → Nâng cao",
    emoji: "🅰️",
    color: "linear-gradient(135deg,#9f1239,#dd0031)",
    desc: "14 chương theo tài liệu chính thức Angular 22: giới thiệu và CLI, component, input/output/model, signals và resource, template (control flow, @defer), directive/pipe, vòng đời và change detection (OnPush, zoneless), dependency injection, Signal Forms, Router, HTTP, SSR/hydration, testing với Vitest và bản đồ tra cứu.",
    chapters: [
      { n: 1, title: "Angular là gì, cài đặt và cấu trúc dự án", ready: true },
      { n: 2, title: "Component: khối xây dựng ứng dụng", ready: true },
      { n: 3, title: "Giao tiếp component: input, output, model, content projection, query", ready: true },
      { n: 4, title: "Signals: signal, computed, effect, linkedSignal, resource", ready: true },
      { n: 5, title: "Template: binding, control flow, @defer, @let và sự kiện", ready: true },
      { n: 6, title: "Directive và Pipe", ready: true },
      { n: 7, title: "Vòng đời component và change detection (OnPush, zoneless)", ready: true },
      { n: 8, title: "Dependency Injection và service", ready: true },
      { n: 9, title: "Forms: Signal Forms (stable v22), Reactive và Template-driven", ready: true },
      { n: 10, title: "Routing: định tuyến, guard, resolver, lazy loading", ready: true },
      { n: 11, title: "HTTP và dữ liệu: HttpClient, interceptor, httpResource, RxJS", ready: true },
      { n: 12, title: "SSR, hydration, hiệu năng, bảo mật và a11y", ready: true },
      { n: 13, title: "Kiểm thử (Vitest) và công cụ: CLI, DevTools, Language Service", ready: true },
      { n: 14, title: "Bản đồ tra cứu: chọn đúng công cụ cho đúng việc", ready: true }
    ]
  },
  {
    id: "aospdata", "mindmap": "aospdata-mindmap.html",
    title: "Android Data Use (AOSP)",
    subtitle: "Data Saver, eBPF traffic monitoring, xt_qtaguid, tethering offload (source.android.com/docs/core/data)",
    author: "source.android.com/docs/core/data",
    cat: "Bảo mật & CNTT",
    tags: ["AOSP","data usage","Data Saver","eBPF","xt_qtaguid","NetworkStatsService","tethering","offload","netd"],
    level: "Nâng cao",
    emoji: "📶",
    color: "#3ddc84",
    desc: "7 chương theo mục Android data use của AOSP: tổng quan theo dõi dữ liệu, Data Saver, xt_qtaguid/quota2 và tag, eBPF traffic monitoring, thống kê interface và driver, chu kỳ/loại mạng/tethering offload, bản đồ tra cứu.",
    chapters: [
      { n: 1, title: "Tổng quan: Android theo dõi và kiểm soát dữ liệu mạng thế nào", ready: true },
      { n: 2, title: "Data Saver: chế độ tiết kiệm dữ liệu", ready: true },
      { n: 3, title: "Kernel cũ: xt_qtaguid, quota2 và “tag” lưu lượng", ready: true },
      { n: 4, title: "eBPF traffic monitoring: cơ chế hiện đại (Android 9+)", ready: true },
      { n: 5, title: "Thống kê theo interface và điều kiện với driver mạng", ready: true },
      { n: 6, title: "Chu kỳ dùng dữ liệu, loại trừ loại mạng và tethering", ready: true },
      { n: 7, title: "Bản đồ tra cứu: vấn đề → cơ chế → cách kiểm tra", ready: true }
    ]
  },
  {
    id: "refrigeration",
    href: "refrigeration.html",
    title: "Kỹ thuật lạnh – Good Practices in Refrigeration (bản dịch)",
    subtitle: "Thao tác thực hành có ảnh: hàn đồng, loe ống, an toàn… (GIZ Proklima, 2010)",
    author: "GIZ Proklima – dịch và chú giải tiếng Việt",
    cat: "Kỹ thuật lạnh",
    tags: ["kỹ thuật lạnh","điều hòa","môi chất","hàn đồng","brazing","loe ống","flaring","an toàn lao động","refrigeration","GIZ"],
    level: "Thực hành",
    emoji: "❄️",
    color: "linear-gradient(135deg,#0e7490,#38bdf8)",
    desc: "Sổ tay thực hành sửa chữa và bảo dưỡng hệ thống lạnh bằng tiếng Việt: mỗi bước thao tác có ảnh cắt từ sách gốc, bản dịch, thuật ngữ Anh–Việt, trắc nghiệm và xem được trang gốc. Đã có chương 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15; các chương còn lại đang soạn.",
    chapters: [
      { n: 1, title: "Dụng cụ cho ống (TT)", ready: true },
      { n: 2, title: "Dụng cụ xử lý và chứa môi chất (RHC)", ready: true },
      { n: 3, title: "Thiết bị thu hồi, tái chế, tái sinh và hút chân không", ready: true },
      { n: 4, title: "Dụng cụ đo", ready: true },
      { n: 5, title: "Lắp ráp hệ thống lạnh", ready: true },
      { n: 6, title: "Uốn ống", ready: true },
      { n: 7, title: "Hàn đồng (Brazing)", ready: true },
      { n: 8, title: "Loe ống (Flaring)", ready: true },
      { n: 9, title: "Tủ lạnh gia dụng", ready: true },
      { n: 10, title: "Tủ lạnh gia dụng dùng HC", ready: true },
      { n: 11, title: "Bấm ép ống (Pressing)", ready: true },
      { n: 12, title: "Thu hồi, tái chế và chứa môi chất tại hiện trường", ready: true },
      { n: 13, title: "Retrofit (chuyển đổi môi chất)", ready: true },
      { n: 14, title: "An toàn lao động", ready: true },
      { n: 15, title: "Phụ lục: Thuật ngữ và viết tắt", ready: true }
    ]
  },
  {
    id: "vuebook", "mindmap": "vuebook-mindmap.html",
    title: "Fullstack Vue (bản tiếng Việt dễ hiểu)",
    subtitle: "Vue.js, Vuex, Router, Form, Unit test – kèm chương bổ sung Vue 3",
    author: "Hassan Djirdeh, Nate Murray, Ari Lerner (Fullstack.io, 2018) – biên soạn tiếng Việt",
    cat: "Lập trình & AI",
    tags: ["vue","vue.js","vuex","vue-router","components","form","unit test","pinia","vue 3","composition api"],
    level: "Cơ bản → Trung cấp",
    emoji: "💚",
    color: "linear-gradient(135deg,#064e3b,#34d399)",
    desc: "9 chương học Vue theo dự án: UpVote!, component một file, sự kiện tùy chỉnh, Vuex, giỏ hàng gọi API, form có kiểm tra hợp lệ, vue-router với đăng nhập, unit test. Sách gốc là Vue 2 (2018) nên có thêm chương bổ sung chuyển sang Vue 3 (Composition API, Pinia, Vite, Vitest). Giải thích bằng ví dụ đời thường, có mô phỏng tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Ứng dụng Vue đầu tiên: UpVote!", ready: true },
      { n: 2, title: "Component một file (.vue) và cách xây app từ đầu", ready: true },
      { n: 3, title: "Sự kiện tùy chỉnh và Event Bus", ready: true },
      { n: 4, title: "Vuex nhập môn: quản lý trạng thái kiểu Flux", ready: true },
      { n: 5, title: "Vuex và máy chủ: giỏ hàng có lưu dữ liệu", ready: true },
      { n: 6, title: "Xử lý form: nhập liệu, kiểm tra, lưu bất đồng bộ", ready: true },
      { n: 7, title: "Routing: nhiều “trang” trong một ứng dụng một trang", ready: true },
      { n: 8, title: "Unit test cho component Vue", ready: true },
      { n: 9, title: "Vue 3 hiện đại: Composition API, Pinia, Vite (bổ sung)", ready: true }
    ]
  },
  {
    id: "sysdesign", "mindmap": "sysdesign-mindmap.html",
    title: "System Design Fundamentals (SDIR) – bản dễ hiểu",
    subtitle: "Lộ trình phỏng vấn & nền tảng thiết kế hệ thống, có giải thích đời thường và bổ sung ngoài sách",
    author: "System Design Interview Roadmap (Substack) – biên soạn tiếng Việt, bổ sung giải thích",
    cat: "Lập trình & AI",
    tags: ["system design","cap theorem","load balancing","caching","cdn","message queue","rate limiting","microservices","consistency","circuit breaker"],
    level: "Cơ bản → Trung cấp",
    emoji: "🏗",
    color: "linear-gradient(135deg,#0f766e,#22d3ee)",
    desc: "12 chương tự học thiết kế hệ thống: khung phỏng vấn, độ trễ/thông lượng, ước lượng nhanh, cân bằng tải, mạng, API, microservices, SQL/NoSQL, CAP và nhất quán, cache/CDN, hàng đợi, rate limiting, timeout/retry/circuit breaker. Mỗi khái niệm khó có ví dụ đời thường; chỗ nào sách chưa rõ có mục “Bổ sung ngoài sách”. Có mô phỏng tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Phỏng vấn thiết kế hệ thống: lộ trình 5 bước", ready: true },
      { n: 2, title: "Hiệu năng: độ trễ, thông lượng, định luật Little", ready: true },
      { n: 3, title: "Năm yêu cầu phi chức năng và “độ chín” sẵn sàng", ready: true },
      { n: 4, title: "Ước lượng nhanh (back-of-the-envelope)", ready: true },
      { n: 5, title: "Mở rộng dọc/ngang và cân bằng tải", ready: true },
      { n: 6, title: "Mạng và giao thức: TCP, UDP, HTTP, thời gian thực", ready: true },
      { n: 7, title: "API và định dạng dữ liệu: REST, GraphQL, gRPC; JSON, Protobuf, Avro", ready: true },
      { n: 8, title: "Kiến trúc: monolith/microservices; proxy/API gateway", ready: true },
      { n: 9, title: "Dữ liệu phân tán: SQL/NoSQL, CAP, nhất quán", ready: true },
      { n: 10, title: "Tăng tốc: Caching và CDN", ready: true },
      { n: 11, title: "Hàng đợi tin nhắn và giới hạn tốc độ", ready: true },
      { n: 12, title: "Thiết kế cho sự cố: timeout, retry, circuit breaker", ready: true }
    ]
  },
  {
    id: "claudehowto",
    title: "Claude Code How-To (bản tiếng Việt)",
    subtitle: "Từ lệnh slash đến hooks, MCP, plugins và tự động hóa CI",
    author: "Cộng đồng claude-howto (bản dịch tiếng Việt, Claude Code 2.1.302)",
    cat: "Lập trình & AI",
    tags: ["claude code","slash commands","claude.md","skills","subagents","mcp","hooks","plugins","checkpoints","cli","plan mode","auto mode"],
    level: "Cơ bản → Nâng cao",
    emoji: "🤖",
    color: "linear-gradient(135deg,#4c1d95,#a78bfa)",
    desc: "Giáo trình 11 chương tự học Claude Code: lệnh slash, bộ nhớ CLAUDE.md, Agent Skills, tác nhân con, MCP, hooks, plugins, checkpoints, plan/thinking/auto mode, quyền, sandbox, worktree và tham chiếu CLI. Có trình tạo cấu hình tương tác, flashcard, trắc nghiệm, ghép đôi.",
    chapters: [
      { n: 1, title: "Lệnh Slash", ready: true },
      { n: 2, title: "Bộ nhớ: CLAUDE.md và Auto Memory", ready: true },
      { n: 3, title: "Agent Skills", ready: true },
      { n: 4, title: "Tác nhân con (Subagents)", ready: true },
      { n: 5, title: "MCP – Model Context Protocol", ready: true },
      { n: 6, title: "Hooks – tự động hóa theo sự kiện", ready: true },
      { n: 7, title: "Plugins – đóng gói và chia sẻ", ready: true },
      { n: 8, title: "Checkpoints và Rewind", ready: true },
      { n: 9, title: "Nâng cao (1): Plan, Thinking, Auto, Quyền, Nền, Print, Phiên", ready: true },
      { n: 10, title: "Nâng cao (2): Phím tắt, Từ xa, Worktree, Sandbox, Quản trị", ready: true },
      { n: 11, title: "Tham chiếu CLI và tự động hóa", ready: true }
    ]
  },
  {
    id: "almanac",
    title: "Stock Trader's Almanac 2005",
    subtitle: "Niên giám nhà giao dịch chứng khoán – mùa vụ và chu kỳ thị trường",
    author: "Yale Hirsch & Jeffrey A. Hirsch",
    cat: "Đầu tư & Tài chính",
    tags: ["mùa vụ","6 tháng tốt nhất","phong vũ biểu tháng 1","chu kỳ tổng thống","triple witching","macd","dow jones","s&p 500","nasdaq"],
    level: "Cơ bản → Trung cấp",
    emoji: "🗓",
    color: "linear-gradient(135deg,#1e3a8a,#38bdf8)",
    desc: "Thống kê tính mùa vụ của thị trường Mỹ (số liệu đến 2004): chỉ báo tháng Giêng, chiến lược 6 tháng tốt nhất + MACD, xếp hạng tháng, chu kỳ tổng thống/thập niên, thứ trong tuần, ngày đầu tháng, nghỉ lễ và triple witching. Có công cụ tương tác, flashcard, trắc nghiệm. Mô hình lịch sử không đảm bảo tương lai.",
    chapters: [
      { n: 1, title: "Đầu tư theo lịch: triết lý Almanac", ready: true },
      { n: 2, title: "Chỉ báo tháng Giêng", ready: true },
      { n: 3, title: "6 tháng tốt nhất (11–4) và MACD", ready: true },
      { n: 4, title: "Mùa vụ trong năm: tháng, quý, rally", ready: true },
      { n: 5, title: "Chính trị và chu kỳ: tổng thống, thập niên", ready: true },
      { n: 6, title: "Ngày và tuần: thứ, đầu tháng, lễ, triple witching", ready: true },
      { n: 7, title: "Dùng Almanac thực tế & tổng kết", ready: true }
    ]
  },
  {
    id: "phantichtc",
    title: "Phân tích tài chính",
    subtitle: "Corporate Finance – Chương trình Giảng dạy Kinh tế Fulbright (FETP)",
    author: "Nguyễn Minh Kiều, Ngô Kim Phượng, Diệp Dũng, Trần Thị Kim Chi và FETP",
    cat: "Đầu tư & Tài chính",
    tags: ["tài chính doanh nghiệp","thời giá tiền tệ","npv","irr","capm","wacc","đòn bẩy","cơ cấu vốn","phái sinh","tỷ giá"],
    level: "Cơ bản → Trung cấp",
    emoji: "📈",
    color: "linear-gradient(135deg,#064e3b,#10b981)",
    desc: "Giáo trình quản trị tài chính 17 bài: thời giá tiền tệ, định giá trái phiếu, rủi ro – lợi nhuận, CAPM, phân tích báo cáo tài chính, vốn lưu động, dự toán vốn đầu tư (NPV/IRR), chi phí vốn, đòn bẩy, cơ cấu vốn, thuê tài sản, phái sinh và rủi ro tỷ giá. Có máy tính tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Vai trò của quản trị tài chính", ready: true },
      { n: 2, title: "Môi trường kinh doanh và tài chính", ready: true },
      { n: 3, title: "Thời giá tiền tệ", ready: true },
      { n: 4, title: "Định giá chứng khoán (trái phiếu)", ready: true },
      { n: 5, title: "Lợi nhuận và rủi ro", ready: true },
      { n: 6, title: "Mô hình định giá tài sản vốn (CAPM)", ready: true },
      { n: 7, title: "Phân tích báo cáo tài chính", ready: true },
      { n: 8, title: "Quản trị tiền mặt và chứng khoán đầu tư", ready: true },
      { n: 9, title: "Quản trị khoản phải thu và hàng tồn kho", ready: true },
      { n: 10, title: "Dự toán vốn đầu tư", ready: true },
      { n: 11, title: "Chi phí sử dụng vốn", ready: true },
      { n: 12, title: "Đòn bẩy hoạt động và đòn bẩy tài chính", ready: true },
      { n: 13, title: "Quyết định cơ cấu vốn của công ty", ready: true },
      { n: 14, title: "Thuê tài sản: thuê hay mua?", ready: true },
      { n: 15, title: "Công cụ tài chính phái sinh", ready: true },
      { n: 16, title: "Phân tích tài chính quốc tế", ready: true },
      { n: 17, title: "Rủi ro tỷ giá và cách tự bảo hiểm", ready: true }
    ]
  },
  {
    id: "buffett",
    title: "Phong cách đầu tư Warren Buffett",
    subtitle: "The Warren Buffett Way",
    author: "Robert G. Hagstrom",
    cat: "Đầu tư & Tài chính",
    tags: ["warren buffett","đầu tư giá trị","berkshire hathaway","graham","biên độ an toàn","định giá","tâm lý đầu tư","cổ phiếu"],
    level: "Cơ bản → Trung cấp",
    emoji: "💰",
    color: "linear-gradient(135deg,#7c2d12,#f59e0b)",
    desc: "12 nguyên lý đầu tư của Warren Buffett: kinh doanh, quản lý, tài chính, giá trị; cùng học vấn từ Graham–Fisher–Williams–Munger, thương vụ Coca-Cola, Gillette, Washington Post, bảo hiểm, danh mục tập trung và tâm lý nhà đầu tư. 12 chương có widget tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Nhà đầu tư vĩ đại nhất thế giới", ready: true },
      { n: 2, title: "Học vấn của Warren Buffett", ready: true },
      { n: 3, title: "“Ngành kinh doanh chính của chúng tôi là bảo hiểm”", ready: true },
      { n: 4, title: "Mua một doanh nghiệp", ready: true },
      { n: 5, title: "Hướng dẫn đầu tư: Nguyên lý kinh doanh", ready: true },
      { n: 6, title: "Hướng dẫn đầu tư: Nguyên lý quản lý", ready: true },
      { n: 7, title: "Hướng dẫn đầu tư: Nguyên lý tài chính", ready: true },
      { n: 8, title: "Hướng dẫn đầu tư: Nguyên lý giá trị", ready: true },
      { n: 9, title: "Đầu tư vào những chứng khoán thu nhập cố định", ready: true },
      { n: 10, title: "Quản lý danh mục đầu tư", ready: true },
      { n: 11, title: "Tâm lý tiền bạc", ready: true },
      { n: 12, title: "Nhân vật “không duy lý”", ready: true }
    ]
  },
  {
    id: "kinhte",
    title: "Các khái niệm cơ bản về kinh tế",
    subtitle: "Basic Economic Concepts – Phần 1–3: Vi mô, vĩ mô, tài chính & thuế",
    author: "Nhiều tác giả – Chương trình Giảng dạy Kinh tế Fulbright (FETP)",
    cat: "Kinh tế",
    tags: ["kinh tế vi mô","cung cầu","ngoại tác","độc quyền","rủi ro","thuế","vĩ mô","tỷ giá","lạm phát","toàn cầu hóa"],
    level: "Cơ bản",
    emoji: "📊",
    color: "linear-gradient(135deg,#1e3a8a,#3b82f6)",
    desc: "Phần 1 vi mô (bài 1–33) và Phần 3 tài chính & thuế (bài 66–98: thuế, hệ thống tài chính, quyền chọn cổ phiếu, tiết kiệm, vốn mạo hiểm, kinh tế lượng…), Phần 2 vĩ mô & quốc tế (bài 34–65: GDP, tài khóa, tiền tệ, lạm phát, tỷ giá, khủng hoảng, bán phá giá, toàn cầu hóa…): chi phí cơ hội, cung cầu, thặng dư, ngoại tác, phân tích cận biên, độc quyền, thông tin bất cân xứng, giá chuyển giao, thuế. Có widget tương tác, flashcard, trắc nghiệm.",
    chapters: [
      { n: 1, title: "Nhập môn: kinh tế học nghiên cứu điều gì?", ready: true },
      { n: 2, title: "Cung, cầu và cân bằng thị trường", ready: true },
      { n: 3, title: "Thị trường phân bổ nguồn lực và phúc lợi", ready: true },
      { n: 4, title: "Ngoại tác và chi phí toàn bộ", ready: true },
      { n: 5, title: "Phân tích cận biên và độc quyền", ready: true },
      { n: 6, title: "Rủi ro, bất định và thông tin bất cân xứng", ready: true },
      { n: 7, title: "Giá chuyển giao nội bộ và gánh nặng thuế", ready: true },
      { n: 8, title: "Kinh tế học trong đời sống và các cú sốc", ready: true },
      { n: 9, title: "Đo lường nền kinh tế và chính sách vĩ mô", ready: true },
      { n: 10, title: "Lạm phát, giảm phát và giá trị thực", ready: true },
      { n: 11, title: "Tỷ giá hối đoái: danh nghĩa, thực và các chế độ", ready: true },
      { n: 12, title: "Tỷ giá, đồng nhân dân tệ và khủng hoảng tài chính", ready: true },
      { n: 13, title: "Công nghiệp hóa, công nghệ và năng lực cạnh tranh", ready: true },
      { n: 14, title: "Viện trợ, FDI và đo lường hiệu quả công", ready: true },
      { n: 15, title: "Bán phá giá và thương mại công bằng", ready: true },
      { n: 16, title: "Toàn cầu hóa, tài nguyên, vàng và quy tắc 72", ready: true },
      { n: 17, title: "Thuế cơ bản: nêm thuế, thuế trực thu – gián thu, thu nhập", ready: true },
      { n: 18, title: "Công bằng và hiệu quả trong hệ thống thuế", ready: true },
      { n: 19, title: "Ưu đãi thuế, DNNN và cạnh tranh thuế", ready: true },
      { n: 20, title: "Hàng hóa công, trách nhiệm người nộp thuế và hệ thống tài chính", ready: true },
      { n: 21, title: "Thông tin, thị trường hiệu quả và cơ cấu vốn", ready: true },
      { n: 22, title: "Chủ sở hữu – nhà quản lý và quyền chọn cổ phiếu", ready: true },
      { n: 23, title: "Tiết kiệm, tín dụng vi mô và vốn mạo hiểm", ready: true },
      { n: 24, title: "Công cụ phân tích và hệ quả của chính sách công", ready: true }
    ]
  },
  {
    id: "android-security",
    href: "android-security/index.html",
    progressKey: "asi:ch",
    title: "Android Security Internals",
    subtitle: "An In-Depth Guide to Android's Security Architecture",
    author: "Nikolay Elenkov",
    cat: "Bảo mật & CNTT",
    tags: ["android", "bảo mật", "selinux", "binder", "permission", "apk", "mật mã", "pki", "tls", "keystore", "nfc", "root", "bootloader", "vpn", "mã hóa"],
    level: "Trung cấp → Nâng cao",
    emoji: "🛡️",
    color: "linear-gradient(135deg,#0b3d2a,#0f9d58)",
    desc: "Kiến trúc bảo mật Android từ gốc: Binder, sandbox, permission, quản lý gói, mật mã, PKI, credential storage, enterprise, SELinux, cập nhật hệ thống và root. 13 chương có bài giảng trực quan, flashcard, trắc nghiệm và luyện tập.",
    chapters: [
      { n: 1, title: "Mô hình bảo mật của Android", ready: true },
      { n: 2, title: "Quyền (Permissions)", ready: true },
      { n: 3, title: "Quản lý gói ứng dụng", ready: true },
      { n: 4, title: "Quản lý người dùng", ready: true },
      { n: 5, title: "Nhà cung cấp mật mã", ready: true },
      { n: 6, title: "Bảo mật mạng và PKI", ready: true },
      { n: 7, title: "Lưu trữ thông tin xác thực", ready: true },
      { n: 8, title: "Quản lý tài khoản online", ready: true },
      { n: 9, title: "Bảo mật doanh nghiệp", ready: true },
      { n: 10, title: "Bảo mật thiết bị", ready: true },
      { n: 11, title: "NFC và Secure Element", ready: true },
      { n: 12, title: "SELinux", ready: true },
      { n: 13, title: "Cập nhật hệ thống và Root", ready: true }
    ]
  },
  {
    id: "ichimoku",
    title: "Giao dịch với Ichimoku",
    subtitle: "Trading with Ichimoku",
    author: "Karen Péloille",
    cat: "Phân tích kỹ thuật",
    tags: ["ichimoku", "kumo", "đám mây", "tenkan", "kijun", "chikou", "forex", "chứng khoán", "xu hướng", "fibonacci", "tâm lý giao dịch"],
    level: "Cơ bản → Nâng cao",
    emoji: "☁️",
    color: "linear-gradient(135deg,#3b5bdb,#7048e8)",
    desc: "Hướng dẫn thực hành hệ thống Ichimoku Kinko Hyo: 5 đường, đám mây, cách đọc biểu đồ, vào/thoát lệnh rủi ro thấp và kỷ luật giao dịch.",
    chapters: [
      { n: 1, title: "Lý thuyết – Cấu tạo Ichimoku", ready: true },
      { n: 2, title: "Đọc biểu đồ Ichimoku", ready: true },
      { n: 3, title: "Phân tích đa khung thời gian", ready: true },
      { n: 4, title: "Giao dịch với Ichimoku", ready: true },
      { n: 5, title: "Kỹ thuật nâng cao: chiếu khung thời gian", ready: true },
      { n: 6, title: "Ichimoku kết hợp Fibonacci", ready: true },
      { n: 7, title: "Nghệ thuật giao dịch kỷ luật", ready: true }
    ]
  },
  {
    id: "mba30",
    title: "Tự học MBA Marketing trong 30 ngày",
    subtitle: "Teach Yourself MBA in Marketing in 30 Days",
    author: "Colin Barrow",
    cat: "Quản trị kinh doanh",
    tags: ["mba", "marketing", "quản trị", "khách hàng", "thương hiệu", "định giá", "phân phối", "quảng cáo", "chiến lược", "kế hoạch marketing", "4P", "kế toán", "tài chính"],
    level: "Cơ bản",
    emoji: "🎓",
    color: "linear-gradient(135deg,#f08c00,#e8590c)",
    desc: "12 chủ đề cốt lõi của chương trình MBA Marketing: hành vi người tiêu dùng, chiến lược, sản phẩm, quảng cáo, phân phối, định giá, toán học marketing, tổ chức, pháp luật, lập kế hoạch và tài chính cơ bản.",
    chapters: [
      { n: 1, title: "Nhập môn Marketing", ready: true },
      { n: 2, title: "Hành vi của người tiêu dùng", ready: true },
      { n: 3, title: "Chiến lược marketing", ready: true },
      { n: 4, title: "Sản phẩm và dịch vụ", ready: true },
      { n: 5, title: "Quảng cáo và xúc tiến sản phẩm", ready: true },
      { n: 6, title: "Điểm bán hàng và phân phối", ready: true },
      { n: 7, title: "Định giá", ready: true },
      { n: 8, title: "Toán học dành cho marketing", ready: true },
      { n: 9, title: "Quản lý hoạt động marketing", ready: true },
      { n: 10, title: "Marketing và pháp luật", ready: true },
      { n: 11, title: "Kế hoạch marketing và ngân sách", ready: true },
      { n: 12, title: "Những vấn đề cốt lõi (kế toán, tài chính, tổ chức, chiến lược)", ready: true }
    ]
  }
,
  {
    id: "valuation",
    title: "Định giá đầu tư (Investment Valuation, ấn bản 2)",
    subtitle: "Investment Valuation – Tools and Techniques for Determining the Value of Any Asset",
    author: "Aswath Damodaran",
    cat: "Tài chính đầu tư",
    tags: ["định giá", "valuation", "dcf", "chiết khấu dòng tiền", "wacc", "định giá tương đối", "p/e", "quyền chọn", "cổ phiếu", "doanh nghiệp", "tài chính", "damodaran", "đầu tư"],
    level: "Trung cấp → Nâng cao",
    emoji: "💹",
    color: "linear-gradient(135deg,#0b7285,#1c7ed6)",
    desc: "Giáo trình kinh điển về định giá mọi tài sản: DCF, định giá tương đối, quyền chọn; từ cổ phiếu, doanh nghiệp tư nhân, khởi nghiệp, bất động sản đến trái phiếu và phái sinh. 35 chương – đang soạn dần.",
    chapters: [
      { n: 1, title: "Giới thiệu về định giá", ready: true },
      { n: 2, title: "Các phương pháp định giá", ready: true },
      { n: 3, title: "Hiểu báo cáo tài chính", ready: true },
      { n: 4, title: "Cơ bản về rủi ro", ready: true },
      { n: 5, title: "Lý thuyết và mô hình định giá quyền chọn", ready: false },
      { n: 6, title: "Hiệu quả thị trường: lý thuyết và mô hình", ready: false },
      { n: 7, title: "Lãi suất phi rủi ro và phần bù rủi ro", ready: true },
      { n: 8, title: "Ước tính tham số rủi ro và chi phí tài trợ", ready: true },
      { n: 9, title: "Đo lường lợi nhuận", ready: false },
      { n: 10, title: "Từ lợi nhuận đến dòng tiền", ready: false },
      { n: 11, title: "Ước tính tăng trưởng", ready: false },
      { n: 12, title: "Giá trị cuối kỳ (terminal value)", ready: false },
      { n: 13, title: "Mô hình chiết khấu cổ tức", ready: false },
      { n: 14, title: "Mô hình dòng tiền tự do vốn chủ sở hữu", ready: false },
      { n: 15, title: "Định giá doanh nghiệp: WACC và APV", ready: false },
      { n: 16, title: "Ước tính giá trị vốn chủ sở hữu trên mỗi cổ phiếu", ready: false },
      { n: 17, title: "Nguyên tắc định giá tương đối", ready: false },
      { n: 18, title: "Bội số lợi nhuận", ready: false },
      { n: 19, title: "Bội số giá trị sổ sách", ready: false },
      { n: 20, title: "Bội số doanh thu và theo ngành", ready: false },
      { n: 21, title: "Định giá tổ chức tài chính", ready: false },
      { n: 22, title: "Định giá doanh nghiệp lợi nhuận âm", ready: false },
      { n: 23, title: "Định giá doanh nghiệp trẻ và khởi nghiệp", ready: false },
      { n: 24, title: "Định giá doanh nghiệp tư nhân", ready: false },
      { n: 25, title: "Mua lại và thâu tóm", ready: false },
      { n: 26, title: "Định giá bất động sản", ready: false },
      { n: 27, title: "Định giá các tài sản khác", ready: false },
      { n: 28, title: "Quyền chọn trì hoãn", ready: false },
      { n: 29, title: "Quyền chọn mở rộng và từ bỏ", ready: false },
      { n: 30, title: "Định giá vốn chủ sở hữu doanh nghiệp khó khăn", ready: false },
      { n: 31, title: "Tăng giá trị: khung DCF", ready: false },
      { n: 32, title: "Tăng giá trị: EVA, CFROI", ready: false },
      { n: 33, title: "Định giá trái phiếu", ready: false },
      { n: 34, title: "Định giá hợp đồng kỳ hạn và tương lai", ready: false },
      { n: 35, title: "Tổng quan và kết luận", ready: false }
    ]
  },
{
  "id": "marks",
  "title": "Điều quan trọng nhất được làm sáng tỏ",
  "subtitle": "The Most Important Thing Illuminated – Uncommon Sense for the Thoughtful Investor",
  "author": "Howard Marks (có chú giải của Davis, Greenblatt, Klarman, Johnson)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "howard marks",
    "đầu tư giá trị",
    "rủi ro",
    "chu kỳ",
    "tâm lý thị trường",
    "hiệu quả thị trường",
    "đối kháng",
    "oaktree",
    "tư duy cấp hai"
  ],
  "level": "Trung cấp",
  "emoji": "🧭",
  "color": "linear-gradient(135deg,#7c2d12,#ea580c)",
  "desc": "21 'điều quan trọng nhất' trong đầu tư của Howard Marks: tư duy cấp hai, giá trị và giá cả, rủi ro, chu kỳ, con lắc tâm lý, chủ nghĩa đối kháng, đầu tư phòng thủ, kỳ vọng hợp lý… kèm chú giải của các nhà đầu tư lớn.",
  "chapters": [
    {
      "n": 1, "title": "Suy nghĩ cấp thứ hai", "ready": true
    },
    {
      "n": 2, "title": "Hiểu biên độ thị trường (hiệu quả thị trường) và hạn chế", "ready": true
    },
    {
      "n": 3,
      "title": "Giá trị",
      "ready": true
    },
    {
      "n": 4,
      "title": "Mối quan hệ giữa giá cả và giá trị",
      "ready": true
    },
    {
      "n": 5,
      "title": "Hiểu biết về rủi ro",
      "ready": true
    },
    {
      "n": 6,
      "title": "Nhận diện rủi ro",
      "ready": true
    },
    {
      "n": 7,
      "title": "Kiểm soát rủi ro",
      "ready": true
    },
    {
      "n": 8,
      "title": "Chú ý đến các chu kỳ",
      "ready": true
    },
    {
      "n": 9,
      "title": "Nhận thức về con lắc",
      "ready": true
    },
    {
      "n": 10,
      "title": "Đối phó với ảnh hưởng tiêu cực",
      "ready": true
    },
    {
      "n": 11,
      "title": "Chủ nghĩa đối kháng",
      "ready": true
    },
    {
      "n": 12,
      "title": "Tìm kiếm món hời",
      "ready": true
    },
    {
      "n": 13,
      "title": "Kiên nhẫn chờ cơ hội",
      "ready": true
    },
    {
      "n": 14,
      "title": "Biết những gì bạn không biết",
      "ready": true
    },
    {
      "n": 15,
      "title": "Cảm nhận vị trí của chúng ta",
      "ready": true
    },
    {
      "n": 16,
      "title": "Đánh giá vai trò của may mắn",
      "ready": true
    },
    {
      "n": 17,
      "title": "Đầu tư phòng thủ",
      "ready": true
    },
    {
      "n": 18,
      "title": "Tránh những cạm bẫy",
      "ready": true
    },
    {
      "n": 19,
      "title": "Thêm giá trị",
      "ready": true
    },
    {
      "n": 20,
      "title": "Kỳ vọng hợp lý",
      "ready": true
    },
    {
      "n": 21,
      "title": "Kết nối tất cả lại với nhau",
      "ready": true
    }
  ]
},
{
  "id": "stocks",
  "title": "Hiểu về cổ phiếu (Understanding Stocks)",
  "subtitle": "Understanding Stocks – nhập môn thị trường chứng khoán cho người mới",
  "author": "Michael Sincere (McGraw-Hill)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "cổ phiếu",
    "chứng khoán",
    "người mới",
    "phân tích kỹ thuật",
    "phân tích cơ bản",
    "giao dịch",
    "đầu tư dài hạn",
    "tâm lý thị trường",
    "môi giới"
  ],
  "level": "Cơ bản",
  "emoji": "📈",
  "color": "linear-gradient(135deg,#065f46,#10b981)",
  "desc": "Giáo trình nhập môn cho người mới: cổ phiếu là gì, phân loại, mua ở đâu, chiến lược đầu tư và giao dịch, phân tích cơ bản – kỹ thuật – tâm lý, vì sao giá lên xuống và vì sao nhà đầu tư thua lỗ.",
  "chapters": [
    {
      "n": 1,
      "title": "Chào mừng đến thị trường chứng khoán",
      "ready": true
    },
    {
      "n": 2,
      "title": "Cổ phiếu không phải khoản đầu tư duy nhất",
      "ready": true
    },
    {
      "n": 3,
      "title": "Cách phân loại cổ phiếu",
      "ready": true
    },
    {
      "n": 4,
      "title": "Những điều thú vị bạn có thể làm với cổ phiếu",
      "ready": true
    },
    {
      "n": 5,
      "title": "Hiểu giá cổ phiếu",
      "ready": true
    },
    {
      "n": 6,
      "title": "Mua cổ phiếu ở đâu",
      "ready": true
    },
    {
      "n": 7,
      "title": "Chiến lược đầu tư kiếm tiền chậm",
      "ready": true
    },
    {
      "n": 8,
      "title": "Chiến lược giao dịch kiếm tiền nhanh",
      "ready": true
    },
    {
      "n": 9,
      "title": "Phân tích cơ bản: nhập môn",
      "ready": true
    },
    {
      "n": 10,
      "title": "Phân tích cơ bản: công cụ và chiến thuật",
      "ready": true
    },
    {
      "n": 11,
      "title": "Phân tích kỹ thuật: nhập môn",
      "ready": true
    },
    {
      "n": 12,
      "title": "Phân tích kỹ thuật: công cụ và chiến thuật",
      "ready": true
    },
    {
      "n": 13,
      "title": "Tâm lý cổ phiếu: phân tích tâm lý thị trường",
      "ready": true
    },
    {
      "n": 14,
      "title": "Điều gì khiến cổ phiếu tăng hay giảm",
      "ready": true
    },
    {
      "n": 15,
      "title": "Vì sao nhà đầu tư thua lỗ",
      "ready": true
    },
    {
      "n": 16,
      "title": "Tác giả thực sự nghĩ gì về thị trường chứng khoán",
      "ready": true
    }
  ]
}
,
{
  "id": "streetsmart",
  "title": "Hướng dẫn định giá cổ phiếu (Streetsmart Guide to Valuing a Stock)",
  "subtitle": "The Savvy Investor’s Key to Beating the Market – ấn bản 2",
  "author": "Gary Gray, Patrick J. Cusatis, J. Randall Woolridge (McGraw-Hill)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "định giá cổ phiếu",
    "dcf",
    "fcff",
    "wacc",
    "chi phí vốn",
    "nguyên tắc tài chính",
    "citigroup",
    "berkshire",
    "microsoft"
  ],
  "level": "Trung cấp",
  "emoji": "🧮",
  "color": "linear-gradient(135deg,#1e3a8a,#6366f1)",
  "desc": "Cách định giá cổ phiếu bằng chiết khấu dòng tiền tự do (FCFF): 10 nguyên tắc tài chính, dự báo dòng tiền, ước tính WACC, tìm dữ liệu trên Internet và các ví dụ thực tế (Microsoft, Cisco, ConEd, Citigroup, Merrill Lynch, Berkshire, Washington REIT).",
  "chapters": [
    {
      "n": 1,
      "title": "Giới thiệu và tổng quan",
      "ready": true
    },
    {
      "n": 2,
      "title": "10 nguyên tắc tài chính và cách dùng",
      "ready": true
    },
    {
      "n": 3,
      "title": "Định giá cổ phiếu: những điều sơ bộ",
      "ready": true
    },
    {
      "n": 4,
      "title": "Cách định giá một cổ phiếu (DCF)",
      "ready": true
    },
    {
      "n": 5,
      "title": "Dự báo dòng tiền kỳ vọng",
      "ready": true
    },
    {
      "n": 6,
      "title": "Ước tính chi phí vốn",
      "ready": true
    },
    {
      "n": 7,
      "title": "Tìm thông tin cho việc định giá",
      "ready": true
    },
    {
      "n": 8,
      "title": "Định giá cổ phiếu: ghép tất cả lại (Citigroup, Merrill Lynch, Berkshire, Washington REIT)",
      "ready": true
    }
  ]
}
,
{
  "id": "buffett",
  "title": "Chọn cổ phiếu như Warren Buffett (Pick Stocks Like Warren Buffett)",
  "subtitle": "J.K. Lasser’s – chiến lược của Buffett và các nhà đầu tư giá trị",
  "author": "Warren Boroson (John Wiley & Sons)",
  "cat": "Tài chính đầu tư",
  "tags": [
    "buffett",
    "đầu tư giá trị",
    "graham",
    "fisher",
    "berkshire",
    "biên an toàn",
    "tâm lý đầu tư",
    "sequoia"
  ],
  "level": "Cơ bản",
  "emoji": "🧓",
  "color": "linear-gradient(135deg,#7c2d12,#f59e0b)",
  "desc": "12 nguyên tắc đầu tư của Buffett, ảnh hưởng của Graham và Fisher, các lỗi tâm lý cần tránh, danh mục tập trung hay đa dạng, và chân dung 20+ nhà đầu tư giá trị (Ruane, Hagstrom, Browne, Whitman, Schloss, Torray, Gipson, Price…).",
  "chapters": [
    {
      "n": 1,
      "title": "Đầu tư như Buffett: cách làm, thành tích và cuộc đời",
      "ready": true
    },
    {
      "n": 2,
      "title": "Hai người thầy: Graham, Fisher và giá trị vs tăng trưởng",
      "ready": true
    },
    {
      "n": 3,
      "title": "12 nguyên tắc, không đánh bạc, mua giá “hời”",
      "ready": true
    },
    {
      "n": 4,
      "title": "Mua cái bạn hiểu, làm bài tập, đi ngược đám đông",
      "ready": true
    },
    {
      "n": 5,
      "title": "Công ty tuyệt vời và những người quản lý đáng tin",
      "ready": true
    },
    {
      "n": 6,
      "title": "Nhà đầu tư, không phải tay súng; hãy kinh doanh lạnh lùng",
      "ready": true
    },
    {
      "n": 7,
      "title": "Nhận sai lầm, tránh bẫy tâm lý, tập trung hay đa dạng",
      "ready": true
    },
    {
      "n": 8,
      "title": "Bộ lọc kiểu Buffett và những người đi theo (Ruane, Hagstrom, Simpson, Browne)",
      "ready": true
    },
    {
      "n": 9,
      "title": "Whitman, Schloss, Torray và Walczak: bốn phong cách giá trị",
      "ready": true
    },
    {
      "n": 10,
      "title": "Gipson, Price và các nhà đầu tư giá trị khác",
      "ready": true
    },
    {
      "n": 11,
      "title": "Tổng hợp: phẩm chất, công ty tuyệt vời và danh ngôn Buffett",
      "ready": true
    },
    {
      "n": 12,
      "title": "Phụ lục: Schloss, Whitman, đại hội Berkshire và Phil Carret",
      "ready": true
    }
  ]
},
{
  "id": "ddia",
  "title": "Thiết kế ứng dụng nặng dữ liệu (Designing Data-Intensive Applications)",
  "subtitle": "Nền tảng của hệ thống đáng tin cậy, mở rộng được, dễ bảo trì",
  "author": "Martin Kleppmann (O’Reilly)",
  "cat": "Lập trình & AI",
  "tags": [
    "CSDL",
    "Hệ phân tán",
    "Kafka",
    "Giao dịch",
    "Kiến trúc"
  ],
  "level": "Nâng cao",
  "emoji": "🗄️",
  "color": "#0e7490",
  "desc": "12 chương: mô hình dữ liệu, storage engine, mã hoá, replication, partitioning, giao dịch, hệ phân tán, consensus, batch, stream và tương lai hệ dữ liệu.",
  "chapters": [
    {
      "n": 1,
      "title": "Ứng dụng đáng tin cậy, mở rộng được, dễ bảo trì",
      "ready": true
    },
    {
      "n": 2,
      "title": "Mô hình dữ liệu và ngôn ngữ truy vấn",
      "ready": true
    },
    {
      "n": 3,
      "title": "Lưu trữ và truy xuất (storage engine)",
      "ready": true
    },
    {
      "n": 4,
      "title": "Mã hoá (encoding) và tiến hoá lược đồ",
      "ready": true
    },
    {
      "n": 5,
      "title": "Nhân bản dữ liệu (Replication)",
      "ready": true
    },
    {
      "n": 6,
      "title": "Phân vùng dữ liệu (Partitioning / Sharding)",
      "ready": true
    },
    {
      "n": 7,
      "title": "Giao dịch (Transactions) và mức cô lập",
      "ready": true
    },
    {
      "n": 8,
      "title": "Rắc rối của hệ thống phân tán",
      "ready": true
    },
    {
      "n": 9,
      "title": "Nhất quán (Consistency) và đồng thuận (Consensus)",
      "ready": true
    },
    {
      "n": 10,
      "title": "Xử lý theo lô (Batch Processing)",
      "ready": true
    },
    {
      "n": 11,
      "title": "Xử lý luồng (Stream Processing)",
      "ready": true
    },
    {
      "n": 12,
      "title": "Tương lai của hệ thống dữ liệu",
      "ready": true
    }
  ]
},
{
  "id": "nextjs",
  "title": "Next.js (App Router)",
  "subtitle": "Getting Started, Guides và Architecture",
  "author": "Tài liệu chính thức nextjs.org/docs",
  "cat": "Lập trình & AI",
  "tags": [
    "Next.js",
    "React",
    "Server Components",
    "Caching",
    "Streaming"
  ],
  "level": "Trung cấp",
  "emoji": "▲",
  "color": "#111827",
  "desc": "15 chương từ tài liệu Next.js: cài đặt, routing, Server/Client Components, dữ liệu, Server Actions, Cache Components, auth, bảo mật, production và kiến trúc bên trong.",
  "chapters": [
    {
      "n": 1,
      "title": "Giới thiệu và cài đặt",
      "ready": true
    },
    {
      "n": 2,
      "title": "Cấu trúc dự án và routing theo file",
      "ready": true
    },
    {
      "n": 3,
      "title": "Layouts, Pages và điều hướng",
      "ready": true
    },
    {
      "n": 4,
      "title": "Server Components và Client Components",
      "ready": true
    },
    {
      "n": 5,
      "title": "Lấy dữ liệu và streaming",
      "ready": true
    },
    {
      "n": 6,
      "title": "Thay đổi dữ liệu: Server Functions và Actions",
      "ready": true
    },
    {
      "n": 7,
      "title": "Caching và Revalidating (Cache Components)",
      "ready": true
    },
    {
      "n": 8,
      "title": "Xử lý lỗi và CSS",
      "ready": true
    },
    {
      "n": 9,
      "title": "Tối ưu ảnh, font và metadata",
      "ready": true
    },
    {
      "n": 10,
      "title": "Route Handlers, Proxy và triển khai",
      "ready": true
    },
    {
      "n": 11,
      "title": "Guides: Triết lý render và Streaming chuyên sâu",
      "ready": true
    },
    {
      "n": 12,
      "title": "Guides: Xác thực và bảo mật dữ liệu",
      "ready": true
    },
    {
      "n": 13,
      "title": "Guides: Biến môi trường và Redirect",
      "ready": true
    },
    {
      "n": 14,
      "title": "Guides: Checklist đưa lên production",
      "ready": true
    },
    {
      "n": 15,
      "title": "Architecture: Accessibility, Fast Refresh, Compiler, Browsers",
      "ready": true
    }
  ]
},
{
  "id": "aosparch",
  "title": "Android Architecture (AOSP)",
  "subtitle": "HAL, Kernel/GKI, Treble, AIDL/Binder, Bootloader, Partitions",
  "author": "source.android.com/docs/core/architecture",
  "cat": "Bảo mật & CNTT",
  "tags": [
    "AOSP",
    "HAL",
    "GKI",
    "Binder",
    "Bootloader",
    "Treble"
  ],
  "level": "Nâng cao",
  "emoji": "🤖",
  "color": "#3ddc84",
  "desc": "9 chương theo menu Architecture của AOSP: tổng quan, HAL/HIDL, kernel/GKI, configuration & DTO, VNDK/VINTF, AIDL/Binder, bootloader, partitions và 16 KB page size.",
  "chapters": [
    {
      "n": 1,
      "title": "Tổng quan kiến trúc AOSP",
      "ready": true
    },
    {
      "n": 2,
      "title": "Hardware Abstraction Layer (HAL) và HIDL",
      "ready": true
    },
    {
      "n": 3,
      "title": "Kernel: ACK, GKI và KMI",
      "ready": true
    },
    {
      "n": 4,
      "title": "Configuration và Device Tree Overlays",
      "ready": true
    },
    {
      "n": 5,
      "title": "VNDK, VINTF và Vendor API level",
      "ready": true
    },
    {
      "n": 6,
      "title": "AIDL và Binder (IPC)",
      "ready": true
    },
    {
      "n": 7,
      "title": "Bootloader",
      "ready": true
    },
    {
      "n": 8,
      "title": "Partitions (phân vùng)",
      "ready": true
    },
    {
      "n": 9,
      "title": "16 KB page size",
      "ready": true
    }
  ]
},
{
  "id": "aospconn",
  "title": "Android Connectivity (AOSP)",
  "subtitle": "Bluetooth, NFC, Calling, Carrier, Time, UWB, Wi-Fi",
  "author": "source.android.com/docs/core/connect",
  "cat": "Bảo mật & CNTT",
  "tags": [
    "AOSP",
    "Bluetooth",
    "Wi-Fi",
    "NFC",
    "IMS",
    "eSIM",
    "UWB"
  ],
  "level": "Nâng cao",
  "emoji": "📡",
  "color": "#2563eb",
  "desc": "7 chương theo menu Connectivity của AOSP: Bluetooth, NFC, calling & messaging, carrier/eSIM/vệ tinh, time & UWB, Wi-Fi và các mục kết nối khác.",
  "chapters": [
    {
      "n": 1,
      "title": "Bluetooth: stack, BLE, ASHA và HCI",
      "ready": true
    },
    {
      "n": 2,
      "title": "NFC: FeliCa, Secure NFC, Quick Access Wallet, NCI",
      "ready": true
    },
    {
      "n": 3,
      "title": "Calling and messaging: IMS, khẩn cấp, RTT, app gọi bên thứ ba",
      "ready": true
    },
    {
      "n": 4,
      "title": "Carrier: CarrierConfig, APN, eSIM, vệ tinh, UICC privileges",
      "ready": true
    },
    {
      "n": 5,
      "title": "Time (thời gian, múi giờ) và Ultra-wideband",
      "ready": true
    },
    {
      "n": 6,
      "title": "Wi-Fi: kiến trúc, HAL, MAC randomization, chọn mạng, WPA3",
      "ready": true
    },
    {
      "n": 7,
      "title": "Companion device, Connectivity Diagnostics, signal strength, chọn mạng",
      "ready": true
    }
  ]
},
{
  "id": "aospinput",
  "title": "Android Interaction: Input, Haptics, Sensors (AOSP)",
  "subtitle": "Input, Haptics, NNAPI, Peripherals, Sensors, CHRE",
  "author": "source.android.com/docs/core/interaction",
  "cat": "Bảo mật & CNTT",
  "tags": [
    "AOSP",
    "Input",
    "Haptics",
    "Sensors",
    "NNAPI",
    "CHRE"
  ],
  "level": "Nâng cao",
  "emoji": "🖐️",
  "color": "#7c3aed",
  "desc": "6 chương theo menu Interaction của AOSP: input pipeline và file keymap, haptics/PWLE, Neural Networks HAL, peripherals/AOA/stylus, sensors và CHRE.",
  "chapters": [
    {
      "n": 1,
      "title": "Input: pipeline, key layout, key character map, IDC, touch và bàn phím",
      "ready": true
    },
    {
      "n": 2,
      "title": "Haptics (phản hồi xúc giác)",
      "ready": true
    },
    {
      "n": 3,
      "title": "Neural Networks (NNAPI): driver, burst, cache, QoS",
      "ready": true
    },
    {
      "n": 4,
      "title": "Peripherals: phụ kiện âm thanh, Android Open Accessory, stylus",
      "ready": true
    },
    {
      "n": 5,
      "title": "Sensors: stack, loại cảm biến, batching, reporting mode, HAL AIDL",
      "ready": true
    },
    {
      "n": 6,
      "title": "Context Hub Runtime Environment (CHRE)",
      "ready": true
    }
  ]
},
{
  "id": "aospaudio",
  "title": "Android Audio (AOSP)",
  "subtitle": "Audio HAL, latency, MIDI/USB, spatial audio, sound dose",
  "author": "source.android.com/docs/core/audio",
  "cat": "Bảo mật & CNTT",
  "tags": [
    "AOSP",
    "Audio",
    "HAL",
    "AAudio",
    "MIDI",
    "Spatial audio"
  ],
  "level": "Nâng cao",
  "emoji": "🔊",
  "color": "#db2777",
  "desc": "5 chương theo menu Audio của AOSP: kiến trúc và AIDL Audio HAL, định dạng/attributes/effects, latency và AAudio, MIDI/USB/TV/debug, các tính năng nâng cao.",
  "chapters": [
    {
      "n": 1,
      "title": "Kiến trúc audio, thuật ngữ và Audio HAL (AIDL/HIDL)",
      "ready": true
    },
    {
      "n": 2,
      "title": "Định dạng dữ liệu, audio attributes và effects",
      "ready": true
    },
    {
      "n": 3,
      "title": "Latency: FAST mixer, AAudio/MMAP, priority inversion, resampling",
      "ready": true
    },
    {
      "n": 4,
      "title": "MIDI, USB audio, TV audio, debugging và warmup",
      "ready": true
    },
    {
      "n": 5,
      "title": "Tính năng nâng cao: concurrent capture, Sound Trigger, spatial audio, sound dose, soundbar, SCO",
      "ready": true
    }
  ]
},
{
  "id": "refrig",
  "title": "Sổ tay kỹ thuật viên tủ lạnh nén (WHO/EPI)",
  "subtitle": "Phần A: Kỹ thuật bảo dưỡng và sửa chữa",
  "author": "WHO – Expanded Programme on Immunization (bản sửa 09/1985)",
  "cat": "Kỹ thuật",
  "tags": [
    "Tủ lạnh",
    "Chu trình lạnh",
    "Mạch điện",
    "Chuỗi lạnh vắc-xin",
    "R12"
  ],
  "level": "Trung cấp",
  "emoji": "🧊",
  "color": "#0891b2",
  "desc": "7 chương từ sổ tay WHO/EPI (tài liệu lịch sử, môi chất R12): ống đồng và hàn, đấu nối, chu trình làm lạnh có hoạt hình, đồng hồ phân tích, hút chân không và nạp gas, sơ đồ mạch điện tương tác và đo kiểm điện.",
  "chapters": [
    {
      "n": 1,
      "title": "Ống đồng tủ lạnh: cắt, doa, uốn, loe, nong",
      "ready": true
    },
    {
      "n": 2,
      "title": "Hàn đồng (brazing), hàn thiếc (soldering) và sửa tạm",
      "ready": true
    },
    {
      "n": 3,
      "title": "Đấu nối vào hệ thống và an toàn khi dùng R12",
      "ready": true
    },
    {
      "n": 4,
      "title": "Chu trình làm lạnh và đồng hồ phân tích (system analyser)",
      "ready": true
    },
    {
      "n": 5,
      "title": "Xả môi chất, hút chân không, nạp gas và tìm rò rỉ",
      "ready": true
    },
    {
      "n": 6,
      "title": "An toàn điện và mạch điện của tủ lạnh nén",
      "ready": true
    },
    {
      "n": 7,
      "title": "Đo kiểm điện, ống chữ T và bảng đổi áp suất",
      "ready": true
    }
  ]
},
{
  "id": "dlanh",
  "title": "Dạy nghề sửa chữa tủ lạnh và máy điều hòa dân dụng",
  "subtitle": "Kiến thức cơ sở – cấu tạo – điện tự động – lắp đặt – gia công – sửa chữa",
  "author": "Nguyễn Đức Lợi – NXB Giáo dục, 2007",
  "cat": "Kỹ thuật",
  "tags": [
    "Tủ lạnh",
    "Điều hòa",
    "Chu trình lạnh",
    "Mạch điện",
    "Ga lạnh",
    "Sửa chữa"
  ],
  "level": "Cơ bản → Trung cấp",
  "emoji": "❄️",
  "color": "#2563eb",
  "desc": "15 chương theo giáo trình dạy nghề: nhiệt lạnh cơ sở, ga lạnh và đồ thị Mollier, cấu tạo và mạch điện tủ lạnh, máy điều hòa 1–2 chiều, kỹ thuật ống, thao tác nạp ga – thử kín và sửa chữa. Có chu trình lạnh hoạt hình, sơ đồ điện tương tác và máy tính nhanh.",
  "chapters": [
    {
      "n": 1,
      "title": "Nhập môn kỹ thuật lạnh",
      "ready": true
    },
    {
      "n": 2,
      "title": "Những kiến thức nhiệt lạnh cơ sở",
      "ready": true
    },
    {
      "n": 3,
      "title": "Ga lạnh (môi chất lạnh)",
      "ready": true
    },
    {
      "n": 4,
      "title": "Cấu tạo của tủ lạnh",
      "ready": true
    },
    {
      "n": 5,
      "title": "Động cơ, thiết bị điện và tự động của tủ lạnh",
      "ready": true
    },
    {
      "n": 6,
      "title": "Đặc tính vận hành của tủ lạnh",
      "ready": true
    },
    {
      "n": 7,
      "title": "Sử dụng và bảo quản tủ lạnh",
      "ready": true
    },
    {
      "n": 8,
      "title": "Hư hỏng và sửa chữa tủ lạnh",
      "ready": true
    },
    {
      "n": 9,
      "title": "Cấu tạo máy điều hòa phòng",
      "ready": true
    },
    {
      "n": 10,
      "title": "Động cơ, thiết bị điện và tự động của máy điều hòa",
      "ready": true
    },
    {
      "n": 11,
      "title": "Đặc tính vận hành, tính toán, lựa chọn máy",
      "ready": true
    },
    {
      "n": 12,
      "title": "Lắp đặt, sử dụng, bảo dưỡng và sửa chữa máy điều hòa",
      "ready": true
    },
    {
      "n": 13,
      "title": "Đường ống và kỹ thuật gia công đường ống",
      "ready": true
    },
    {
      "n": 14,
      "title": "Các thao tác cơ bản của thợ lạnh",
      "ready": true
    },
    {
      "n": 15,
      "title": "Một số công việc sửa chữa",
      "ready": true
    }
  ]
},
{
  "id": "dperf",
  "title": "Designing for Performance",
  "subtitle": "Cân bằng thẩm mỹ và tốc độ trang",
  "author": "Lara Callender Hogan (O'Reilly, 2014)",
  "cat": "Thiết kế web",
  "tags": [
    "Hiệu năng web",
    "Tối ưu ảnh",
    "CSS",
    "Responsive",
    "WebPagetest",
    "UX"
  ],
  "level": "Cơ bản → Trung cấp",
  "emoji": "⚡",
  "color": "#f59e0b",
  "desc": "8 chương dành cho designer và developer: tốc độ là trải nghiệm, cách trình duyệt dựng trang, tối ưu ảnh/HTML/CSS/font, responsive hiệu quả, đo lường (WebPagetest, RUM), ngân sách hiệu năng, thí nghiệm A/B và xây văn hóa hiệu năng. Có máy tính và mô phỏng tương tác.",
  "chapters": [
    {
      "n": 1,
      "title": "Hiệu năng chính là trải nghiệm người dùng",
      "ready": true
    },
    {
      "n": 2,
      "title": "Kiến thức cơ bản về tốc độ trang",
      "ready": true
    },
    {
      "n": 3,
      "title": "Tối ưu hình ảnh",
      "ready": true
    },
    {
      "n": 4,
      "title": "Tối ưu markup và style",
      "ready": true
    },
    {
      "n": 5,
      "title": "Responsive web design và hiệu năng",
      "ready": true
    },
    {
      "n": 6,
      "title": "Đo lường và cải tiến hiệu năng",
      "ready": true
    },
    {
      "n": 7,
      "title": "Cân bằng giữa thẩm mỹ và hiệu năng",
      "ready": true
    },
    {
      "n": 8,
      "title": "Thay đổi văn hóa trong tổ chức",
      "ready": true
    }
  ]
},
{
  "id": "hpws",
  "mindmap": "hpws-mindmap.html",
  "title": "High Performance Web Sites",
  "subtitle": "14 quy tắc tăng tốc website cho kỹ sư frontend",
  "author": "Steve Souders – O'Reilly, 2007",
  "cat": "Lập trình & AI",
  "tags": [
    "Hiệu năng web",
    "HTTP",
    "Cache",
    "Frontend",
    "YSlow"
  ],
  "level": "Cơ bản → Trung cấp",
  "emoji": "🚀",
  "color": "#f97316",
  "desc": "17 chương: Quy tắc vàng 80/20, tổng quan HTTP, 14 quy tắc (giảm request, CDN, Expires, gzip, CSS/JS đặt đâu, DNS, minify, redirect, ETag, Ajax) và phân tích 10 website hàng đầu. Có flashcard, trắc nghiệm và bài ghép cặp cho từng chương.",
  "chapters": [
    {
      "n": 1,
      "title": "Tầm quan trọng của hiệu năng frontend",
      "ready": true
    },
    {
      "n": 2,
      "title": "Tổng quan về HTTP",
      "ready": true
    },
    {
      "n": 3,
      "title": "Rule 1: Giảm số HTTP request",
      "ready": true
    },
    {
      "n": 4,
      "title": "Rule 2: Dùng mạng phân phối nội dung (CDN)",
      "ready": true
    },
    {
      "n": 5,
      "title": "Rule 3: Thêm header Expires",
      "ready": true
    },
    {
      "n": 6,
      "title": "Rule 4: Nén thành phần bằng gzip",
      "ready": true
    },
    {
      "n": 7,
      "title": "Rule 5: Đặt stylesheet ở đầu trang",
      "ready": true
    },
    {
      "n": 8,
      "title": "Rule 6: Đặt script ở cuối trang",
      "ready": true
    },
    {
      "n": 9,
      "title": "Rule 7: Tránh CSS expression",
      "ready": true
    },
    {
      "n": 10,
      "title": "Rule 8: Tách JavaScript và CSS ra file ngoài",
      "ready": true
    },
    {
      "n": 11,
      "title": "Rule 9: Giảm số lần tra cứu DNS",
      "ready": true
    },
    {
      "n": 12,
      "title": "Rule 10: Minify JavaScript",
      "ready": true
    },
    {
      "n": 13,
      "title": "Rule 11: Tránh redirect",
      "ready": true
    },
    {
      "n": 14,
      "title": "Rule 12: Loại bỏ script trùng lặp",
      "ready": true
    },
    {
      "n": 15,
      "title": "Rule 13: Cấu hình ETag",
      "ready": true
    },
    {
      "n": 16,
      "title": "Rule 14: Làm cho Ajax cacheable",
      "ready": true
    },
    {
      "n": 17,
      "title": "Phân tích 10 website hàng đầu",
      "ready": true
    }
  ]
},
{
  "id": "fearch",
  "title": "Frontend Architecture for Design Systems",
  "subtitle": "Bốn trụ cột: Code – Process – Testing – Documentation",
  "author": "Micah Godbolt – O'Reilly, 2016 (soạn từ bản tóm tắt)",
  "cat": "Lập trình & AI",
  "tags": [
    "Kiến trúc frontend",
    "Design system",
    "CSS",
    "Testing",
    "Pattern Library"
  ],
  "level": "Trung cấp",
  "emoji": "🧱",
  "color": "#7c3aed",
  "desc": "12 chương theo 4 trụ cột của kiến trúc sư frontend: code (HTML/CSS/JS), quy trình (workflow, task runner), kiểm thử (unit, hiệu năng, visual regression) và tài liệu (style guide, Pattern Lab). Soạn từ bản tóm tắt Bookey nên không đầy đủ như sách gốc.",
  "chapters": [
    {
      "n": 1,
      "title": "Nguồn gốc: vì sao cần kiến trúc frontend",
      "ready": true
    },
    {
      "n": 2,
      "title": "Kỷ luật kiến trúc frontend và dự án Alpha",
      "ready": true
    },
    {
      "n": 3,
      "title": "Trụ cột Code (1): HTML và phương pháp CSS",
      "ready": true
    },
    {
      "n": 4,
      "title": "Trụ cột Code (2): CSS và JavaScript",
      "ready": true
    },
    {
      "n": 5,
      "title": "Red Hat Code: tái cấu trúc thành hệ thống module",
      "ready": true
    },
    {
      "n": 6,
      "title": "Trụ cột Process: quy trình làm việc (workflow)",
      "ready": true
    },
    {
      "n": 7,
      "title": "Task runner: Sass, Compass, Grunt và Gulp",
      "ready": true
    },
    {
      "n": 8,
      "title": "Trụ cột Testing (1): vì sao test và unit testing",
      "ready": true
    },
    {
      "n": 9,
      "title": "Trụ cột Testing (2): kiểm thử hiệu năng",
      "ready": true
    },
    {
      "n": 10,
      "title": "Trụ cột Testing (3): visual regression testing",
      "ready": true
    },
    {
      "n": 11,
      "title": "Trụ cột Documentation: style guide và pattern library",
      "ready": true
    },
    {
      "n": 12,
      "title": "Red Hat Documentation và lời kết",
      "ready": true
    }
  ]
},
{
  "id": "crashp",
  "title": "Crash Profits",
  "subtitle": "Kiếm tiền khi cổ phiếu sụp đổ và hồi phục",
  "author": "Martin D. Weiss (Wiley, 2003)",
  "cat": "Tài chính",
  "tags": [
    "Đầu tư",
    "Thị trường gấu",
    "Quản trị rủi ro",
    "Giảm phát",
    "Nợ",
    "Quyền chọn"
  ],
  "level": "Cơ bản → Trung cấp",
  "emoji": "📉",
  "color": "#dc2626",
  "desc": "25 chương dạng truyện-hướng dẫn về một cuộc sụp đổ giả định của thị trường: cạm bẫy của môi giới, bong bóng cổ phiếu/trái phiếu/bất động sản, giảm phát, cứu trợ và hồi phục. Bản tóm lược tiếng Việt có máy tính, mô phỏng, thẻ ghi nhớ và câu hỏi. Lưu ý: sách xuất bản 2003, mang quan điểm bi quan của tác giả, không phải lời khuyên đầu tư.",
  "chapters": [
    {
      "n": 1,
      "title": "Chương trình ngầm của người môi giới",
      "ready": true
    },
    {
      "n": 2,
      "title": "Bong bóng",
      "ready": true
    },
    {
      "n": 3,
      "title": "Cơn sốt quảng bá của Phố Wall",
      "ready": true
    },
    {
      "n": 4,
      "title": "Bong bóng vỡ",
      "ready": true
    },
    {
      "n": 5,
      "title": "Bộ đồ vệ sinh du lịch 17.000 USD",
      "ready": true
    },
    {
      "n": 6,
      "title": "Bán ngay những cổ phiếu này!",
      "ready": true
    },
    {
      "n": 7,
      "title": "Đưa tiền về nơi an toàn",
      "ready": true
    },
    {
      "n": 8,
      "title": "Thâm hụt ngân sách phình to",
      "ready": true
    },
    {
      "n": 9,
      "title": "Bong bóng thị trường trái phiếu",
      "ready": true
    },
    {
      "n": 10,
      "title": "Bong bóng bất động sản",
      "ready": true
    },
    {
      "n": 11,
      "title": "Thiểu số chiến thắng",
      "ready": true
    },
    {
      "n": 12,
      "title": "Đội bảo vệ thị trường",
      "ready": true
    },
    {
      "n": 13,
      "title": "Những rủi ro ẩn",
      "ready": true
    },
    {
      "n": 14,
      "title": "Giảm phát!",
      "ready": true
    },
    {
      "n": 15,
      "title": "Sự sụp đổ của các blue-chip",
      "ready": true
    },
    {
      "n": 16,
      "title": "Hãy chuyển tài khoản của bạn!",
      "ready": true
    },
    {
      "n": 17,
      "title": "Lời kêu gọi hành động",
      "ready": true
    },
    {
      "n": 18,
      "title": "Chóng mặt trên đỉnh cao",
      "ready": true
    },
    {
      "n": 19,
      "title": "Gói cứu trợ lớn",
      "ready": true
    },
    {
      "n": 20,
      "title": "Đợt hồi phục vĩ đại",
      "ready": true
    },
    {
      "n": 21,
      "title": "Khoảng trống (The Gap)",
      "ready": true
    },
    {
      "n": 22,
      "title": "Trò chơi đổ lỗi",
      "ready": true
    },
    {
      "n": 23,
      "title": "Chạm đáy",
      "ready": true
    },
    {
      "n": 24,
      "title": "Ngày đen tối nhất",
      "ready": true
    },
    {
      "n": 25,
      "title": "Phục hồi thực sự",
      "ready": true
    }
  ]
},
{
  "id": "fcf",
  "title": "Fundamentals of Corporate Finance",
  "subtitle": "Nền tảng tài chính doanh nghiệp",
  "author": "Brealey, Myers, Marcus (McGraw-Hill)",
  "cat": "Tài chính",
  "tags": [
    "Tài chính doanh nghiệp",
    "NPV",
    "Chi phí vốn",
    "Định giá",
    "Cơ cấu vốn",
    "Ngân sách vốn"
  ],
  "level": "Cơ bản → Trung cấp",
  "emoji": "🏦",
  "color": "#0ea5e9",
  "desc": "22 chương tóm lược giáo trình tài chính doanh nghiệp: giá trị thời gian của tiền, báo cáo tài chính, vốn lưu động, định giá trái phiếu và cổ phiếu, rủi ro–lợi suất, NPV/IRR, chi phí vốn, tài trợ, sáp nhập và tài chính quốc tế. Mỗi chương có máy tính tương tác, thẻ ghi nhớ, câu hỏi và trò ghép cặp.",
  "chapters": [
    {
      "n": 1,
      "title": "Doanh nghiệp và nhà quản lý tài chính",
      "ready": true
    },
    {
      "n": 2,
      "title": "Giá trị thời gian của tiền",
      "ready": true
    },
    {
      "n": 3,
      "title": "Hoạch định tài chính",
      "ready": true
    },
    {
      "n": 4,
      "title": "Kế toán và tài chính",
      "ready": true
    },
    {
      "n": 5,
      "title": "Phân tích báo cáo tài chính",
      "ready": true
    },
    {
      "n": 6,
      "title": "Quản lý vốn lưu động và hoạch định ngắn hạn",
      "ready": true
    },
    {
      "n": 7,
      "title": "Quản lý tiền mặt và hàng tồn kho",
      "ready": true
    },
    {
      "n": 8,
      "title": "Quản lý tín dụng và thu nợ",
      "ready": true
    },
    {
      "n": 9,
      "title": "Định giá trái phiếu",
      "ready": true
    },
    {
      "n": 10,
      "title": "Định giá cổ phiếu",
      "ready": true
    },
    {
      "n": 11,
      "title": "Rủi ro, lợi suất và chi phí cơ hội của vốn",
      "ready": true
    },
    {
      "n": 12,
      "title": "Giá trị hiện tại ròng và các tiêu chí đầu tư khác",
      "ready": true
    },
    {
      "n": 13,
      "title": "Phân tích dòng tiền chiết khấu để ra quyết định đầu tư",
      "ready": true
    },
    {
      "n": 14,
      "title": "Rủi ro, lợi suất và ngân sách vốn",
      "ready": true
    },
    {
      "n": 15,
      "title": "Chi phí vốn",
      "ready": true
    },
    {
      "n": 16,
      "title": "Phân tích dự án",
      "ready": true
    },
    {
      "n": 17,
      "title": "Tổng quan về tài trợ doanh nghiệp",
      "ready": true
    },
    {
      "n": 18,
      "title": "Cách công ty phát hành chứng khoán",
      "ready": true
    },
    {
      "n": 19,
      "title": "Thuê tài sản (Phụ lục B)",
      "ready": true
    },
    {
      "n": 20,
      "title": "Đòn bẩy và cơ cấu vốn (Phụ lục B)",
      "ready": true
    },
    {
      "n": 21,
      "title": "Sáp nhập, mua lại và quyền kiểm soát doanh nghiệp",
      "ready": true
    },
    {
      "n": 22,
      "title": "Quản lý tài chính quốc tế",
      "ready": true
    }
  ]
}
];


