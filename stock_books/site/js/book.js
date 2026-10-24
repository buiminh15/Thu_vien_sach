// Trình đọc sách: bài học / flashcard / trắc nghiệm / ghép cặp theo từng chương
const params = new URLSearchParams(location.search);
const book = BOOKS.find(b => b.id === params.get('id'));
const data = book && (BOOK_DATA[book.id] || { chapters: [] });
const main = $('#main');
let cur = 1, mode = 'learn';

const chData = n => data.chapters.find(c => c.n === n);
const doneList = () => Store.get('done:' + book.id, []);

function go() {
  location.hash = cur === 0 ? '#mindmap' : `#ch${cur}/${mode}`;
  renderSide(); renderMain();
  window.scrollTo({ top: 0 });
}

function renderSide() {
  const done = doneList();
  $('#chlist').innerHTML = book.chapters.map(c => `
    <button class="chbtn ${c.n === cur ? 'on' : ''} ${done.includes(c.n) ? 'done' : ''} ${c.ready ? '' : 'lock'}" data-n="${c.n}">
      <span class="n">${done.includes(c.n) ? '✓' : c.n}</span><span class="tt">${esc(c.title)}${c.ready ? '' : '<br><small>Đang soạn…</small>'}</span>
    </button>`).join('') || '<div class="small" style="padding:8px">Sách này đang được soạn.</div>';
  if (book.mindmap) $('#chlist').insertAdjacentHTML('beforeend', `<button class="chbtn ${cur === 0 ? 'on' : ''}" data-n="0"><span class="n">🗺</span><span class="tt">Mindmap toàn sách</span></button>`);
  $('#chlist').querySelectorAll('.chbtn').forEach(b => b.onclick = () => { cur = +b.dataset.n; mode = 'learn'; go(); });
}

function renderMain() {
  if (cur === 0 && book.mindmap) {
    main.innerHTML = `<div class="chhead"><small>${esc(book.title)}</small><h1>🗺 Mindmap toàn sách</h1><p>Bấm vào nút tròn ở mỗi nhánh để mở/gấp, cuộn chuột để phóng to, kéo để di chuyển. <a href="${book.mindmap}" target="_blank" rel="noopener">Mở toàn màn hình ↗</a></p></div>
      <iframe src="${book.mindmap}" title="Mindmap" style="width:100%;height:75vh;border:1px solid var(--line);border-radius:12px;background:#fff"></iframe>`;
    return;
  }
  const meta = book.chapters.find(c => c.n === cur);
  const ch = chData(cur);
  if (!meta || !ch) {
    main.innerHTML = `<div class="sec"><h2>🚧 Chương này đang được soạn</h2><p>Nội dung sẽ được bổ sung ở lượt tiếp theo. Hãy chọn chương khác ở thanh bên.</p></div>`;
    return;
  }
  const dueN = SRS.dueInChapter(book.id, ch).length;
  const tabs = [['learn', '📖 Bài học'], ['cards', dueN ? `🃏 Flashcard (${dueN} đến hạn)` : `🃏 Flashcard (${ch.cards.length})`], ['quiz', '✅ Trắc nghiệm (' + ch.quiz.length + ')'], ['match', '🔗 Ghép cặp']];
  main.innerHTML = `
    <div class="chhead"><small>Chương ${ch.n} · ${esc(book.title)}</small><h1>${esc(ch.title)}</h1><p>${ch.intro}</p></div>
    <div class="tabs">${tabs.map(t => `<button class="tab ${t[0] === mode ? 'on' : ''}" data-m="${t[0]}">${t[1]}</button>`).join('')}</div>
    <div id="pane"></div>`;
  main.querySelectorAll('.tab').forEach(b => b.onclick = () => { mode = b.dataset.m; go(); });
  ({ learn: learn, cards: cards, quiz: quiz, match: match })[mode](ch, $('#pane'));
}

/* ---------- BÀI HỌC ---------- */
function block(b) {
  switch (b.t) {
    case 'p': return `<p>${b.x}</p>`;
    case 'h3': return `<h3>${b.x}</h3>`;
    case 'key': return `<div class="box key"><b class="t">🔑 Ý chính</b>${b.x}</div>`;
    case 'tip': return `<div class="box tip"><b class="t">💡 Mẹo</b>${b.x}</div>`;
    case 'warn': return `<div class="box warn"><b class="t">⚠️ Lưu ý</b>${b.x}</div>`;
    case 'mnemo': return `<div class="box mnemo"><b class="t">🧠 Mẹo nhớ</b>${b.x}</div>`;
    case 'list': return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
    case 'steps': return `<ol class="steps">${b.items.map(i => `<li>${i}</li>`).join('')}</ol>`;
    case 'table': return `<table class="tb"><thead><tr>${b.head.map(x => `<th>${x}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(x => `<td>${x}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
    case 'timeline': return `<div class="tl">${b.items.map(i => `<div><b>${i[0]}</b> — ${i[1]}</div>`).join('')}</div>`;
    case 'tabs': return `<div class="itabs"><div class="hd">${b.items.map((i, k) => `<button class="${k ? '' : 'on'}" data-k="${k}">${i[0]}</button>`).join('')}</div><div class="bd">${b.items[0][1]}</div><script type="application/json">${JSON.stringify(b.items.map(i => i[1])).replace(/</g, '\\u003c')}<\/script></div>`;
    case 'widget': return `<div class="widget"><div class="wt">🎛️ ${b.title}</div><div data-w="${b.name}"></div></div>`;
  }
  return '';
}

function learn(ch, pane) {
  const done = doneList().includes(ch.n);
  pane.innerHTML = ch.sections.map(s => `<section class="sec"><h2><span class="ic">${s.icon || '📌'}</span>${s.title}</h2>${s.blocks.map(block).join('')}</section>`).join('') +
    `<section class="sec"><h2>🏁 Tóm tắt chương</h2><ul>${ch.summary.map(x => `<li>${x}</li>`).join('')}</ul>
      <div class="donebar"><button class="btn ${done ? '' : 'ok'}" id="dn">${done ? '✓ Đã học xong (bấm để bỏ)' : 'Đánh dấu đã học xong'}</button>
      <span><button class="btn primary" data-go="cards">Ôn flashcard →</button> <button class="btn primary" data-go="quiz">Làm trắc nghiệm →</button></span></div></section>`;
  pane.querySelectorAll('.itabs').forEach(el => {
    const bodies = JSON.parse(el.querySelector('script').textContent);
    el.querySelectorAll('.hd button').forEach(bt => bt.onclick = () => {
      el.querySelectorAll('.hd button').forEach(x => x.classList.toggle('on', x === bt));
      el.querySelector('.bd').innerHTML = bodies[+bt.dataset.k];
    });
  });
  pane.querySelectorAll('[data-w]').forEach(el => WIDGETS[el.dataset.w](el));
  pane.querySelectorAll('[data-go]').forEach(b => b.onclick = () => { mode = b.dataset.go; go(); });
  $('#dn').onclick = () => {
    let d = doneList(); d = d.includes(ch.n) ? d.filter(x => x !== ch.n) : [...d, ch.n];
    Store.set('done:' + book.id, d); renderSide(); learn(ch, pane);
  };
}

/* ---------- FLASHCARD (ôn ngắt khoảng - xem js/srs.js) ---------- */
function cards(ch, pane) {
  let showAll = false, deck = [], i = 0, flip = false;
  function build() {
    deck = showAll ? ch.cards.map((c, k) => k) : SRS.dueInChapter(book.id, ch);
    if (i >= deck.length) i = 0;
  }
  function draw() {
    build();
    const total = ch.cards.length;
    if (!deck.length) {
      pane.innerHTML = `<div class="fc-wrap score"><div class="big">🎉</div><h2>Đã ôn hết thẻ đến hạn của chương này!</h2>
        <p class="small">Thẻ sẽ tự xuất hiện lại đúng ngày cần ôn tiếp theo — hoặc xem tại <a href="review.html">Ôn tập hôm nay</a> (gộp mọi sách).</p>
        <button class="btn" id="all">Xem/ôn lại toàn bộ ${total} thẻ ngay</button></div>`;
      $('#all').onclick = () => { showAll = true; i = 0; draw(); };
      return;
    }
    const idx = deck[i], c = ch.cards[idx], s = SRS.get(book.id, ch.n, idx);
    const dueN = SRS.dueInChapter(book.id, ch).length;
    pane.innerHTML = `<div class="fc-wrap">
      <div class="fc-top"><span class="pill">Thẻ ${i + 1}/${deck.length}</span><span class="small">${showAll ? `Tổng ${total} thẻ` : `Đến hạn hôm nay: ${dueN}/${total}`}</span>
        <label class="small"><input type="checkbox" id="all" ${showAll ? 'checked' : ''}> Xem toàn bộ (bỏ lịch ôn)</label></div>
      <div class="fc ${flip ? 'flip' : ''}" id="card"><div class="in">
        <div class="face">${s.reps > 1 ? `<span class="hint" style="top:10px;bottom:auto">🔥 đã nhớ ${s.reps} lần</span>` : ''}${c[0]}<span class="hint">chạm để lật</span></div>
        <div class="face back">${c[1]}</div></div></div>
      <div class="fc-bar">${flip
        ? `<button class="btn bad" id="g0">😵 Quên</button><button class="btn" id="g1">🙂 Ổn</button><button class="btn ok" id="g2">🤩 Dễ</button>`
        : `<button class="btn" id="sk">Bỏ qua →</button><button class="btn primary" id="fp">Lật thẻ (Space)</button>`}</div>
      <p class="small" style="text-align:center">${flip ? 'Phím tắt: 1 Quên · 2 Ổn · 3 Dễ' : 'Phím tắt: Space = lật'}</p></div>`;
    $('#card').onclick = () => { flip = !flip; draw(); };
    if ($('#fp')) $('#fp').onclick = () => { flip = true; draw(); };
    if ($('#sk')) $('#sk').onclick = () => { i = (i + 1) % deck.length; draw(); };
    $('#all').onchange = e => { showAll = e.target.checked; i = 0; draw(); };
    const grade = g => {
      SRS.grade(book.id, ch.n, idx, g);
      if (g !== 0) i++; // "Quên" (0) để build() tự xếp thẻ xuất hiện lại trong buổi ôn này
      flip = false; draw();
    };
    if ($('#g0')) { $('#g0').onclick = () => grade(0); $('#g1').onclick = () => grade(1); $('#g2').onclick = () => grade(2); }
  }
  window.onkeydown = e => {
    if (mode !== 'cards' || !$('#card')) return;
    if (e.code === 'Space') { e.preventDefault(); $('#card').click(); }
    if (flip) {
      if (e.key === '1' && $('#g0')) $('#g0').click();
      if (e.key === '2' && $('#g1')) $('#g1').click();
      if (e.key === '3' && $('#g2')) $('#g2').click();
    }
  };
  draw();
}

/* ---------- TRẮC NGHIỆM ---------- */
function quiz(ch, pane) {
  const key = `best:${book.id}:${ch.n}`;
  let qs, i, score, wrong;
  function start() { qs = shuffle(ch.quiz); i = 0; score = 0; wrong = []; show(); }
  function show() {
    if (i >= qs.length) return finish();
    const q = qs[i];
    const order = shuffle(q.o.map((t, k) => k));
    pane.innerHTML = `<div class="qz"><div class="fc-top"><span class="pill">Câu ${i + 1}/${qs.length}</span><span class="small">Đúng: ${score}</span></div>
      <div class="qbar"><i style="width:${i / qs.length * 100}%"></i></div>
      <div class="q-t">${q.q}</div>
      <div id="ops">${order.map(k => `<button class="opt" data-k="${k}">${q.o[k]}</button>`).join('')}</div>
      <div id="ex"></div></div>`;
    pane.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const k = +b.dataset.k, ok = k === q.a;
      pane.querySelectorAll('.opt').forEach(x => { x.disabled = true; if (+x.dataset.k === q.a) x.classList.add('ok'); });
      if (!ok) { b.classList.add('no'); wrong.push(q); } else score++;
      $('#ex').innerHTML = `<div class="explain"><b>${ok ? '✅ Chính xác!' : '❌ Chưa đúng.'}</b> ${q.e}</div><button class="btn primary" id="nx">${i + 1 < qs.length ? 'Câu tiếp →' : 'Xem kết quả'}</button>`;
      $('#nx').onclick = () => { i++; show(); };
    });
  }
  function finish() {
    const pct = Math.round(score / qs.length * 100), best = Math.max(Store.get(key, 0), pct);
    Store.set(key, best);
    pane.innerHTML = `<div class="qz score"><div class="big">${score}/${qs.length}</div>
      <h2>${pct >= 80 ? '🏆 Xuất sắc!' : pct >= 50 ? '👍 Khá tốt, ôn thêm chút nữa' : '📚 Cần đọc lại bài học'}</h2>
      <p class="small">Điểm cao nhất: ${best}%</p>
      <button class="btn primary" id="again">Làm lại</button> ${wrong.length ? '<button class="btn" id="rw">Làm lại câu sai (' + wrong.length + ')</button>' : ''} <button class="btn" id="bk">Xem lại bài học</button></div>`;
    $('#again').onclick = start;
    if (wrong.length) $('#rw').onclick = () => { qs = shuffle(wrong); i = 0; score = 0; wrong = []; show(); };
    $('#bk').onclick = () => { mode = 'learn'; go(); };
  }
  start();
}

/* ---------- GHÉP CẶP ---------- */
function match(ch, pane) {
  function start() {
    const pairs = shuffle(ch.match).slice(0, 6);
    const L = shuffle(pairs.map((p, k) => ({ k, t: p[0] }))), R = shuffle(pairs.map((p, k) => ({ k, t: p[1] })));
    let sel = null, left = pairs.length, tries = 0;
    pane.innerHTML = `<p class="small" style="text-align:center">Chọn một ô bên trái, rồi chọn ô bên phải có nghĩa tương ứng. <b id="st"></b></p>
      <div class="mg"><div>${L.map(x => `<button data-s="l" data-k="${x.k}" style="width:100%;margin-bottom:10px">${x.t}</button>`).join('')}</div>
      <div>${R.map(x => `<button data-s="r" data-k="${x.k}" style="width:100%;margin-bottom:10px">${x.t}</button>`).join('')}</div></div><div id="fin"></div>`;
    pane.querySelectorAll('.mg button').forEach(b => b.onclick = () => {
      if (b.classList.contains('done')) return;
      if (!sel || sel.dataset.s === b.dataset.s) {
        if (sel) sel.classList.remove('sel');
        sel = b; b.classList.add('sel'); return;
      }
      tries++;
      if (sel.dataset.k === b.dataset.k) {
        sel.classList.remove('sel'); sel.classList.add('done'); b.classList.add('done'); left--; sel = null;
        if (!left) $('#fin').innerHTML = `<div class="score"><div class="big">🎯</div><p>Hoàn thành sau ${tries} lượt ghép.</p><button class="btn primary" id="rp">Chơi lại (bộ cặp mới)</button></div>`, $('#rp').onclick = start;
      } else {
        const a = sel; sel = null; a.classList.remove('sel'); a.classList.add('wrong'); b.classList.add('wrong');
        setTimeout(() => { a.classList.remove('wrong'); b.classList.remove('wrong'); }, 600);
      }
    });
  }
  start();
}

/* ---------- KHỞI ĐỘNG (đặt cuối file để mọi khai báo đã sẵn sàng) ---------- */
if (!book) {
  main.innerHTML = '<div class="empty">Không tìm thấy sách. <a href="index.html">Về thư viện</a></div>';
} else {
  document.title = book.title;
  $('#bktitle').textContent = book.emoji + ' ' + book.title;
  const h = location.hash.match(/^#ch(\d+)(?:\/(\w+))?/);
  if (location.hash === '#mindmap' && book.mindmap) cur = 0;
  else if (h) { cur = +h[1]; if (h[2]) mode = h[2]; }
  else { const f = book.chapters.find(c => c.ready); cur = f ? f.n : 1; }
  go();
}
