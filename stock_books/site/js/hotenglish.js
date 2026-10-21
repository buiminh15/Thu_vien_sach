// Trình xem Hot English: ảnh trang PDF + playlist MP3 (dùng chung nhiều số báo)
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const audio = $('#audio');
  const S = { issue: null, id: null, tracks: [], cur: null, zoom: 1, a: null, b: null, pageNow: 1, pgEls: [], lazy: null };
  const ST = (k, d) => Store.get('he:' + k, d), SS = (k, v) => Store.set('he:' + k, v);
  const fmt = t => { if (!isFinite(t)) return '0:00'; t = Math.max(0, t | 0); return (t / 60 | 0) + ':' + String(t % 60).padStart(2, '0'); };
  const isMobile = () => matchMedia('(max-width:900px)').matches;
  const toast = (m) => { const t = $('#toast'); t.textContent = m; t.hidden = false; clearTimeout(toast._t); toast._t = setTimeout(() => t.hidden = true, 2200); };
  const qs = new URLSearchParams(location.search);

  /* ---------- tải số báo ---------- */
  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Không tải được ' + src)); document.head.appendChild(s); }); }
  async function openIssue(id) {
    try {
      if (!(window.HE_ISSUES && HE_ISSUES[id])) await loadScript('he/' + id + '/issue.js');
    } catch (e) { $('#pages').innerHTML = '<p style="padding:20px">' + e.message + '</p>'; return; }
    S.id = id; S.issue = HE_ISSUES[id]; S.tracks = S.issue.tracks; SS('issue', id);
    audio.pause(); S.cur = null; S.a = S.b = null;
    buildPages(); buildPlaylist(); updateNow(); updateHere();
    const track = +qs.get('track') || ST('track:' + id, null);
    const page = +qs.get('page') || ST('page:' + id, 1);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      goPage(page, true); setTimeout(() => goPage(page, true), 350);
      if (track && trackBy(track) && trackBy(track).file) { select(track, false); const t = ST('time:' + id, 0); audio.addEventListener('loadedmetadata', function f() { audio.currentTime = Math.min(t, audio.duration || t); audio.removeEventListener('loadedmetadata', f); }); }
    }));
  }
  const trackBy = n => S.tracks.find(t => t.n === n);

  /* ---------- trang PDF ---------- */
  function pageWidth() { const w = $('#scroller').clientWidth - 16; const base = Math.min(w, 900); return Math.round(base * S.zoom); }
  function buildPages() {
    const box = $('#pages'); box.innerHTML = ''; S.pgEls = [];
    const w = pageWidth(), h = Math.round(w * S.issue.ratio);
    for (let i = 1; i <= S.issue.pageCount; i++) {
      const d = document.createElement('div'); d.className = 'pg'; d.dataset.p = i; d.style.width = w + 'px'; d.style.height = h + 'px';
      d.innerHTML = `<span class="num">${i}</span>`;
      S.tracks.forEach(t => (t.marks || []).filter(m => m.page === i).forEach(m => {
        const b = document.createElement('button'); b.className = 'mk' + (t.file ? '' : ' nofile'); b.dataset.n = t.n;
        b.style.left = (m.x * 100) + '%'; b.style.top = (m.y * 100) + '%'; b.textContent = '▶ ' + t.n; b.title = t.title + (t.file ? '' : ' (chưa có file mp3)');
        b.onclick = e => { e.stopPropagation(); select(t.n, true); }; d.appendChild(b);
      }));
      box.appendChild(d); S.pgEls.push(d);
    }
    if (S.lazy) S.lazy.disconnect();
    S.lazy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { const d = e.target; if (!d.querySelector('img')) { const im = new Image(); im.alt = 'Trang ' + d.dataset.p; im.decoding = 'async'; im.onload = () => im.classList.add('ok'); im.src = S.issue.pageDir + 'p' + String(d.dataset.p).padStart(2, '0') + '.jpg'; d.prepend(im); } } }), { root: $('#scroller'), rootMargin: '1200px 0px' });
    S.pgEls.forEach(d => S.lazy.observe(d));
    $('#pginfo').textContent = 'Trang 1 / ' + S.issue.pageCount; $('#pgjump').max = S.issue.pageCount;
  }
  function goPage(n, instant) {
    n = Math.max(1, Math.min(S.issue.pageCount, n | 0)); const el = S.pgEls[n - 1]; if (!el) return;
    const sc = $('#scroller'); sc.scrollTo({ top: el.offsetTop - 6, behavior: instant ? 'auto' : 'smooth' });
  }
  function currentPage() {
    const sc = $('#scroller'), mid = sc.scrollTop + sc.clientHeight * 0.4; let best = 1;
    for (let i = 0; i < S.pgEls.length; i++) { const el = S.pgEls[i]; if (el.offsetTop <= mid) best = i + 1; else break; }
    return best;
  }
  let ticking = false;
  $('#scroller').addEventListener('scroll', () => { if (ticking) return; ticking = true; requestAnimationFrame(() => { ticking = false; const p = currentPage(); if (p !== S.pageNow) { S.pageNow = p; onPage(); } }); });
  function onPage() { $('#pginfo').textContent = 'Trang ' + S.pageNow + ' / ' + S.issue.pageCount; SS('page:' + S.id, S.pageNow); updateHere(); markPlaylist(); }
  function tracksOnPage(p) { return S.tracks.filter(t => t.pages.includes(p) || (t.scriptPages || []).includes(p) && !t.pages.length); }
  function updateHere() {
    const box = $('#here'); const ts = tracksOnPage(S.pageNow);
    if (!ts.length) { box.hidden = true; return; }
    box.hidden = false; box.innerHTML = '';
    ts.forEach(t => { const b = document.createElement('button'); const playing = S.cur === t.n && !audio.paused; b.className = (t.file ? '' : 'nofile ') + (playing ? 'playing' : ''); b.textContent = (playing ? '⏸ ' : '🎧 ') + t.n + ' · ' + shortTitle(t.title); b.onclick = () => select(t.n, true); box.appendChild(b); });
  }
  const shortTitle = s => { s = s.replace(/^.*?:\s*/, ''); return s.length > 24 ? s.slice(0, 23) + '…' : s; };

  /* ---------- zoom ---------- */
  function setZoom(z) {
    z = Math.max(0.6, Math.min(2.4, z)); const p = S.pageNow, before = $('#scroller'); S.zoom = z; SS('zoom', z);
    const w = pageWidth(), h = Math.round(w * S.issue.ratio);
    S.pgEls.forEach(d => { d.style.width = w + 'px'; d.style.height = h + 'px'; });
    goPage(p, true);
  }
  $('#zin').onclick = () => setZoom(S.zoom * 1.2); $('#zout').onclick = () => setZoom(S.zoom / 1.2); $('#zfit').onclick = () => setZoom(1);
  $('#pgjump').onchange = e => { goPage(+e.target.value); e.target.value = ''; };
  let rz; addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { if (S.issue) setZoom(S.zoom); }, 200); });

  /* ---------- playlist ---------- */
  function buildPlaylist() {
    const box = $('#pl'); box.innerHTML = ''; const only = $('#onlyfile').checked;
    S.tracks.filter(t => !only || t.file).forEach(t => {
      const b = document.createElement('button'); b.className = 'pi' + (t.file ? '' : ' nofile'); b.dataset.n = t.n;
      b.innerHTML = `<span class="n">${t.n}</span><span class="t">${t.title.replace(/</g, '&lt;')}${t.file ? '' : ' <span class="small">· chưa có file</span>'}</span><span class="p">${t.pages.length ? 'tr.' + t.pages.join(',') : ''}</span>`;
      b.onclick = () => select(t.n, true); box.appendChild(b);
    });
    markPlaylist();
  }
  $('#onlyfile').onchange = buildPlaylist;
  function markPlaylist() {
    document.querySelectorAll('.pi').forEach(b => { const n = +b.dataset.n, t = trackBy(n); b.classList.toggle('cur', n === S.cur); b.classList.toggle('onpage', !!t && t.pages.includes(S.pageNow)); });
    document.querySelectorAll('.mk').forEach(b => b.classList.toggle('playing', +b.dataset.n === S.cur && !audio.paused));
  }

  /* ---------- phát ---------- */
  function select(n, autoplay) {
    const t = trackBy(n); if (!t) return;
    if (t.pages.length && autoplay) goPage(t.pages[0]);
    if (!t.file) { toast('Track ' + n + ' chưa có file mp3 – đã mở trang tương ứng'); if (!isMobile()) markPlaylist(); return; }
    if (S.cur !== n) { S.cur = n; S.a = S.b = null; audio.src = t.file; audio.playbackRate = +$('#rate').value; SS('track:' + S.id, n); }
    updateNow(); markPlaylist();
    if (autoplay) audio.play().catch(() => toast('Bấm ▶ để phát (trình duyệt chặn tự phát)'));
    mediaSession(t);
  }
  function neighbor(dir) { const list = S.tracks.filter(t => t.file); const i = list.findIndex(t => t.n === S.cur); const nx = list[(i + dir + list.length) % list.length]; return list.length ? nx : null; }
  function toggle() { if (S.cur == null) { const f = S.tracks.find(t => t.file); if (f) return select(f.n, true); return toast('Chưa có track nào có file mp3'); } audio.paused ? audio.play() : audio.pause(); }
  function updateNow() {
    const t = trackBy(S.cur);
    $('#ntitle').textContent = t ? `${t.n}. ${t.title}` : 'Chưa chọn track'; $('#mtitle').textContent = t ? `${t.n}. ${t.title}` : 'Chưa chọn track';
    $('#nsub').textContent = t ? (t.pages.length ? 'Trang ' + t.pages.join(', ') : '') : 'Bấm ▶ ở trang hoặc chọn track trong danh sách';
    $('#goscript').hidden = !(t && t.scriptPages && t.scriptPages.length); if (t && t.scriptPages && t.scriptPages.length) $('#goscript').textContent = '📄 Tapescript tr.' + t.scriptPages[0];
    renderText();
  }
  function renderText() { const t = trackBy(S.cur), box = $('#ttxt'); if (box.hidden) return; box.innerHTML = t ? (t.text ? '<span class="note">Văn bản tự trích từ PDF – có thể lẫn cột/chú thích; đối chiếu với trang PDF.</span>' + t.text.replace(/</g, '&lt;') : 'Không có văn bản đi kèm. Xem tapescript ở trang PDF.') : 'Chọn một track.'; }
  $('#ttoggle').onclick = () => { const b = $('#ttxt'); b.hidden = !b.hidden; renderText(); };
  $('#gopage').onclick = () => { const t = trackBy(S.cur); if (t && t.pages.length) goPage(t.pages[0]); if (isMobile()) closeSheet(); };
  $('#goscript').onclick = () => { const t = trackBy(S.cur); if (t && t.scriptPages.length) goPage(t.scriptPages[0]); if (isMobile()) closeSheet(); };
  $('#play').onclick = $('#mplay').onclick = toggle;
  $('#prev').onclick = () => { if (audio.currentTime > 3) audio.currentTime = 0; else { const t = neighbor(-1); if (t) select(t.n, true); } };
  $('#next').onclick = () => { const t = neighbor(1); if (t) select(t.n, true); };
  $('#back').onclick = () => audio.currentTime = Math.max(0, audio.currentTime - 10);
  $('#fwd').onclick = () => audio.currentTime = Math.min(audio.duration || 1e9, audio.currentTime + 10);
  $('#rate').onchange = () => { audio.playbackRate = +$('#rate').value; SS('rate', $('#rate').value); };
  $('#seek').oninput = () => { if (audio.duration) audio.currentTime = $('#seek').value / 1000 * audio.duration; };
  $('#seta').onclick = () => { S.a = audio.currentTime; if (S.b != null && S.b <= S.a) S.b = null; abInfo(); };
  $('#setb').onclick = () => { if (S.a == null) S.a = 0; S.b = audio.currentTime; abInfo(); };
  $('#clrab').onclick = () => { S.a = S.b = null; abInfo(); };
  const abInfo = () => $('#abinfo').textContent = S.a != null ? (fmt(S.a) + ' → ' + (S.b != null ? fmt(S.b) : '…')) : '';
  audio.addEventListener('timeupdate', () => {
    if (S.b != null && S.a != null && audio.currentTime >= S.b) audio.currentTime = S.a;
    $('#tcur').textContent = fmt(audio.currentTime); if (audio.duration) { $('#seek').value = audio.currentTime / audio.duration * 1000; $('#tdur').textContent = fmt(audio.duration); }
    if (S.id && S.cur != null && (Math.floor(audio.currentTime) % 3 === 0)) SS('time:' + S.id, audio.currentTime);
  });
  const playState = () => { const pl = !audio.paused; $('#play').textContent = pl ? '⏸' : '▶'; $('#mplay').textContent = pl ? '⏸' : '▶'; markPlaylist(); updateHere(); };
  audio.addEventListener('play', playState); audio.addEventListener('pause', playState);
  audio.addEventListener('loadedmetadata', () => $('#tdur').textContent = fmt(audio.duration));
  audio.addEventListener('ended', () => { if ($('#loop').checked) { audio.currentTime = 0; audio.play(); } else if ($('#auto').checked) { const t = neighbor(1); if (t && t.n !== S.cur) select(t.n, true); } });
  function mediaSession(t) {
    if (!('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.metadata = new MediaMetadata({ title: t.title, artist: 'Hot English ' + S.id, album: 'Hot English' });
      navigator.mediaSession.setActionHandler('play', () => audio.play()); navigator.mediaSession.setActionHandler('pause', () => audio.pause());
      navigator.mediaSession.setActionHandler('previoustrack', () => $('#prev').click()); navigator.mediaSession.setActionHandler('nexttrack', () => $('#next').click());
      navigator.mediaSession.setActionHandler('seekbackward', () => $('#back').click()); navigator.mediaSession.setActionHandler('seekforward', () => $('#fwd').click());
    } catch (e) { }
  }

  /* ---------- ngăn kéo trên điện thoại ---------- */
  const pl = $('#player'); const closeSheet = () => pl.classList.remove('open'); const toggleSheet = () => pl.classList.toggle('open');
  $('#grab').onclick = $('#mexp').onclick = toggleSheet; $('#mtitle').onclick = toggleSheet;
  document.addEventListener('keydown', e => { if (e.target.matches('input,select,textarea')) return; if (e.code === 'Space') { e.preventDefault(); toggle(); } else if (e.key === 'ArrowLeft' && e.altKey) $('#back').click(); else if (e.key === 'ArrowRight' && e.altKey) $('#fwd').click(); });

  /* ---------- khởi động ---------- */
  const list = window.HE_LIST || []; const sel = $('#issue');
  sel.innerHTML = list.map(id => `<option value="${id}">Số ${id}</option>`).join('');
  S.zoom = ST('zoom', 1); $('#rate').value = ST('rate', '1'); audio.playbackRate = +$('#rate').value;
  sel.onchange = () => openIssue(sel.value);
  const first = qs.get('issue') || ST('issue', null) || list[list.length - 1];
  if (first && list.includes(first)) { sel.value = first; openIssue(first); } else $('#pages').innerHTML = '<p style="padding:24px">Chưa có số báo nào. Chạy <code>python HE/he_build.py HE/&lt;số&gt;</code> để tạo dữ liệu.</p>';
})();
