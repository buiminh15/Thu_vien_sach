// Trang "Ôn tập hôm nay": gom thẻ đến hạn (SRS) từ MỌI sách, trộn xen thay vì ôn khối theo sách.
const main = $('#main');
let session = null; // {queue, i, flip, guess, counts}

function dashboard() {
  const st = SRS.stats(), missAll = Mistakes.countAll();
  const byBook = {};
  SRS.dueAcrossBooks().forEach(x => { (byBook[x.book.id] = byBook[x.book.id] || { book: x.book, due: 0, miss: 0 }).due++; });
  Object.values(Mistakes.byBook()).forEach(x => { (byBook[x.book.id] = byBook[x.book.id] || { book: x.book, due: 0, miss: 0 }).miss = x.n; });
  const rows = Object.values(byBook).sort((a, b) => (b.due + b.miss) - (a.due + a.miss)).slice(0, 8);
  main.innerHTML = `
    <div class="chhead"><small>Ôn ngắt khoảng (Spaced Repetition)</small><h1>🔁 Ôn tập hôm nay</h1>
      <p>Thẻ từ mọi sách đến hạn ôn lại được trộn xen vào đây — ôn kiểu này nhớ lâu hơn ôn dồn từng sách một. Chấm "Quên/Ổn/Dễ" sau khi lật thẻ, hệ thống tự hẹn ngày ôn tiếp theo.</p></div>
    <div class="sec">
      <div class="statgrid">
        <div class="stat"><b>${st.due}</b><span>thẻ đến hạn</span></div>
        <div class="stat"><b>${st.fresh}</b><span>thẻ mới (chưa ôn)</span></div>
        <div class="stat"><b>${missAll}</b><span>câu trắc nghiệm đang sai</span></div>
        <div class="stat"><b>${st.total}</b><span>tổng số thẻ</span></div>
      </div>
      ${st.todo === 0
        ? `<p class="small" style="text-align:center;margin-top:14px">🎉 Không có thẻ nào đến hạn lúc này. Mở một sách và học chương mới để có thêm thẻ nhé — <a href="index.html">về thư viện</a>.</p>`
        : `<div class="donebar" style="margin-top:14px">
            <label class="small">Số thẻ mỗi buổi: <select id="lim">
              ${[10, 20, 30, 50].map(n => `<option value="${n}" ${n === 20 ? 'selected' : ''}>${n} thẻ</option>`).join('')}
              <option value="0">Tất cả (${st.todo})</option>
            </select></label>
            <button class="btn primary" id="go">Bắt đầu ôn tập →</button>
          </div>`}
    </div>
    ${rows.length ? `<div class="sec"><h3 style="margin-top:0">Theo sách</h3>
      <p class="small">Thẻ đến hạn ôn ở đây theo lịch SRS; câu trắc nghiệm đang sai thì mở lại chương đó và bấm "📝 Ôn sổ tay câu đang sai" ở cuối bài trắc nghiệm.</p>
      <table class="tb"><thead><tr><th>Sách</th><th>Thẻ đến hạn</th><th>Câu đang sai</th></tr></thead>
      <tbody>${rows.map(r => `<tr><td>${r.book.emoji} <a href="book.html?id=${r.book.id}">${esc(r.book.title)}</a></td><td>${r.due || '–'}</td><td>${r.miss || '–'}</td></tr>`).join('')}</tbody></table>
    </div>` : ''}`;
  if ($('#go')) $('#go').onclick = () => startSession(+$('#lim').value || 0);
}

function startSession(limit) {
  const queue = SRS.dueAcrossBooks(limit || undefined);
  session = { queue, i: 0, flip: false, guess: '', counts: { 0: 0, 1: 0, 2: 0 } };
  draw();
}

function draw() {
  const s = session;
  if (!s || s.i >= s.queue.length) return finish();
  const item = s.queue[s.i], c = item.card;
  const left = s.queue.length - s.i;
  main.innerHTML = `<div class="fc-wrap">
    <div class="fc-top"><span class="pill">Còn ${left} thẻ</span>
      <span class="small">${item.book.emoji} ${esc(item.book.title)} · Chương ${item.ch.n}${item.isNew ? ' · <b>mới</b>' : ''}</span></div>
    <div class="fc ${s.flip ? 'flip' : ''}" id="card"><div class="in">
      <div class="face">${c[0]}<span class="hint">chạm để lật</span></div>
      <div class="face back">${c[1]}</div></div></div>
    ${!s.flip
      ? `<textarea class="guess" id="gs" placeholder="✍️ Gõ câu trả lời của bạn trước (không bắt buộc), rồi lật thẻ để tự so sánh…">${esc(s.guess)}</textarea>`
      : s.guess ? `<div class="box tip"><b class="t">✍️ Bạn đã trả lời</b>${esc(s.guess)}</div>` : ''}
    <div class="fc-bar">${s.flip
      ? `<button class="btn bad" id="g0">😵 Quên</button><button class="btn" id="g1">🙂 Ổn</button><button class="btn ok" id="g2">🤩 Dễ</button>`
      : `<button class="btn" id="sk">Bỏ qua →</button><button class="btn primary" id="fp">Lật thẻ (Space)</button>`}</div>
    <p class="small" style="text-align:center">${s.flip ? 'Phím tắt: 1 Quên · 2 Ổn · 3 Dễ' : 'Phím tắt: Space = lật'} · <a href="book.html?id=${item.book.id}#ch${item.ch.n}/learn">mở chương này</a></p>
  </div>`;
  $('#card').onclick = () => { s.flip = !s.flip; draw(); };
  if ($('#gs')) $('#gs').oninput = e => { s.guess = e.target.value; };
  if ($('#fp')) $('#fp').onclick = () => { s.flip = true; draw(); };
  if ($('#sk')) $('#sk').onclick = () => { s.queue.push(s.queue[s.i]); s.i++; s.guess = ''; draw(); };
  const grade = g => {
    SRS.grade(item.book.id, item.ch.n, item.idx, g);
    s.counts[g]++;
    if (g === 0) s.queue.push(item); // Quên: cho xuất hiện lại cuối buổi ôn này
    s.i++; s.flip = false; s.guess = ''; draw();
  };
  if ($('#g0')) { $('#g0').onclick = () => grade(0); $('#g1').onclick = () => grade(1); $('#g2').onclick = () => grade(2); }
}

function finish() {
  const left = SRS.stats().todo;
  main.innerHTML = `<div class="fc-wrap score"><div class="big">🏁</div><h2>Xong buổi ôn!</h2>
    <p class="small">😵 Quên: ${session.counts[0]} · 🙂 Ổn: ${session.counts[1]} · 🤩 Dễ: ${session.counts[2]}</p>
    <p class="small">${left > 0 ? `Còn ${left} thẻ khác đang đến hạn.` : 'Đã ôn hết thẻ đến hạn hôm nay 🎉'}</p>
    ${left > 0 ? '<button class="btn primary" id="more">Ôn thêm →</button> ' : ''}<button class="btn" id="home">Về trang chủ</button></div>`;
  session = null;
  if ($('#more')) $('#more').onclick = () => startSession(20);
  $('#home').onclick = () => { location.href = 'index.html'; };
}

window.onkeydown = e => {
  if (!session || !$('#card')) return;
  if (e.code === 'Space' && document.activeElement.id !== 'gs') { e.preventDefault(); $('#card').click(); }
  if (session.flip) {
    if (e.key === '1' && $('#g0')) $('#g0').click();
    if (e.key === '2' && $('#g1')) $('#g1').click();
    if (e.key === '3' && $('#g2')) $('#g2').click();
  }
};

dashboard();
