// Trình xem "Good Practices in Refrigeration" (bản dịch tiếng Việt): thẻ bước = ảnh cắt từ PDF + bản dịch; xem được trang gốc.
(function () {
  const LIST = window.RF_LIST || [];
  const S = { cur: null, ch: null, modal: [], mi: 0 };
  const qs = new URLSearchParams(location.search);
  const ST = (k, d) => Store.get('rf:' + k, d), SS = (k, v) => Store.set('rf:' + k, v);
  const done = () => ST('done', []);
  const en = s => s ? `<div class="en">${esc(s)}</div>` : '';
  const img = (id) => `rf/${S.ch.dir}/fig_${id}.jpg`;

  function loadScript(src) { return new Promise((res, rej) => { const s = document.createElement('script'); s.src = src; s.onload = res; s.onerror = () => rej(new Error('Không tải được ' + src)); document.head.appendChild(s); }); }

  /* ---------- thanh chương ---------- */
  function renderNav() {
    const d = done(); let html = '', part = '';
    LIST.forEach(c => {
      if (c.part !== part) { part = c.part; html += `<h4>${part === 'I' ? 'Phần I – Dụng cụ và thiết bị' : 'Phần II – Kỹ năng và thao tác'}</h4>`; }
      html += `<button data-n="${c.n}" class="${S.cur === c.n ? 'on' : ''} ${d.includes(c.n) ? 'done' : ''} ${c.ready ? '' : 'lock'}"><span class="n">${d.includes(c.n) ? '✓' : c.n}</span><span>${esc(c.title)}${c.ready ? '' : '<small>Đang soạn…</small>'}<span class="en"><br>${esc(c.en || '')}</span></span></button>`;
    });
    $('#nav').innerHTML = html;
    $('#nav').querySelectorAll('button').forEach(b => b.onclick = () => { const c = LIST.find(x => x.n === +b.dataset.n); if (!c.ready) return; open(c.n); document.body.classList.remove('nav-open'); });
  }

  async function open(n) {
    const meta = LIST.find(c => c.n === n); if (!meta) return;
    if (!(window.RF_CH && RF_CH[n])) { try { await loadScript('rf/ch' + String(n).padStart(2, '0') + '.js'); } catch (e) { $('#main').innerHTML = '<p>' + esc(e.message) + '</p>'; return; } }
    S.cur = n; S.ch = RF_CH[n]; SS('cur', n); history.replaceState(null, '', '#ch' + n);
    renderNav(); renderChapter(); window.scrollTo({ top: 0 });
  }

  /* ---------- nội dung chương ---------- */
  function block(b) {
    switch (b.t) {
      case 'h': return `<h3 style="margin:14px 0 4px">${b.x}${en(b.en)}</h3>`;
      case 'p': return `<p>${b.x}</p>`;
      case 'list': return `<ul>${b.items.map(i => `<li>${i}</li>`).join('')}</ul>`;
      case 'warn': case 'tip': case 'key': return `<div class="rf-box ${b.t}">${b.x}</div>`;
      case 'table': return `<table class="rf-tbl"><thead><tr>${b.head.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${b.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
      case 'step': return `<div class="rf-step"><div class="rf-figs">${b.figs.map((f, i) => `<figure class="rf-fig"><img loading="lazy" data-fig="${f}" src="${img(f)}" alt="${esc(b.cap)}">${i === 0 ? `<figcaption>${esc(b.cap)}</figcaption>` : ''}</figure>`).join('')}</div><div class="rf-stx"><h3>${b.title}</h3>${en(b.en)}${/^</.test(b.x) ? b.x : `<p>${b.x}</p>`}${b.callouts ? `<div class="rf-co">${b.callouts.map(c => `<span>${c}</span>`).join('')}</div>` : ''}${b.ref ? `<span class="rf-ref">↪ Tham chiếu: ${b.ref}</span>` : ''}</div></div>`;
      case 'grid': return `<div class="rf-gcap">${esc(b.cap || '')}</div><div class="rf-grid" style="grid-template-columns:repeat(${b.cols || 2},minmax(0,1fr))">${b.items.map(i => `<figure><img loading="lazy" data-fig="${i.fig}" src="${img(i.fig)}" alt="${esc(i.label)}"><figcaption><b>${i.label}</b>${en(i.en)}</figcaption></figure>`).join('')}</div>`;
      case 'order': return orderBlock(b);
      case 'figquiz': return figQuiz(b);
      case 'quiz': return quiz(b);
      default: return '';
    }
  }

  let uid = 0;
  function orderBlock(b) {
    const id = 'o' + (++uid);
    return `<div class="rf-box tip rf-order" data-order="${id}"><b>${b.title}</b><ol></ol><button class="btn sm" data-chk>Kiểm tra</button> <button class="btn sm" data-shuf>Xáo lại</button> <span class="small" data-msg></span></div>`;
  }
  function wireOrder(el, items) {
    let cur = shuffle(items.map((x, i) => i));
    const ol = el.querySelector('ol'), msg = el.querySelector('[data-msg]');
    const draw = (mark) => { ol.innerHTML = cur.map((k, i) => `<li class="${mark ? (k === i ? 'good' : 'bad') : ''}"><b>${i + 1}.</b><span style="flex:1">${esc(items[k])}</span><button class="btn sm" data-u="${i}" aria-label="Lên">▲</button><button class="btn sm" data-d="${i}" aria-label="Xuống">▼</button></li>`).join(''); };
    draw();
    ol.onclick = e => { const u = e.target.closest('[data-u]'), d = e.target.closest('[data-d]'); const i = u ? +u.dataset.u : d ? +d.dataset.d : -1; if (i < 0) return; const j = u ? i - 1 : i + 1; if (j < 0 || j >= cur.length) return; [cur[i], cur[j]] = [cur[j], cur[i]]; draw(); msg.textContent = ''; };
    el.querySelector('[data-chk]').onclick = () => { draw(true); const ok = cur.every((k, i) => k === i); msg.textContent = ok ? '✅ Đúng thứ tự!' : '❌ Chưa đúng, xem các dòng viền đỏ.'; };
    el.querySelector('[data-shuf]').onclick = () => { cur = shuffle(cur); draw(); msg.textContent = ''; };
  }

  function quiz(b) {
    const id = 'q' + (++uid);
    return `<div data-quiz="${id}">${b.items.map((q, i) => `<div class="rf-q" data-i="${i}"><b>${i + 1}. ${q.q}</b>${q.o.map((o, k) => `<label data-k="${k}"><input type="radio" name="${id}_${i}" style="margin-right:6px">${o}</label>`).join('')}<div class="small" data-e></div></div>`).join('')}</div>`;
  }
  function wireQuiz(el, items) {
    el.querySelectorAll('.rf-q').forEach(box => { const q = items[+box.dataset.i];
      box.querySelectorAll('label').forEach(l => l.onclick = () => { if (box.dataset.done) return; box.dataset.done = 1; const k = +l.dataset.k; box.querySelectorAll('label').forEach(x => { if (+x.dataset.k === q.a) x.classList.add('ok'); }); if (k !== q.a) l.classList.add('no'); box.querySelector('[data-e]').textContent = (k === q.a ? '✅ ' : '❌ ') + (q.e || ''); }); });
  }
  function figQuiz(b) {
    const id = 'f' + (++uid);
    return `<div class="rf-box tip" data-figquiz="${id}"><b>${b.title}</b>${b.items.map((it, i) => `<div class="rf-q"><img data-fig="${it.fig}" src="${img(it.fig)}" alt="" style="max-height:90px;vertical-align:middle;margin-right:10px;border-radius:8px;background:#fff"> <select data-i="${i}"><option value="">— chọn —</option>${shuffle(b.opts).map(o => `<option>${esc(o)}</option>`).join('')}</select> <span class="small" data-r></span></div>`).join('')}</div>`;
  }
  function wireFigQuiz(el, b) {
    el.querySelectorAll('select').forEach(s => s.onchange = () => { const it = b.items[+s.dataset.i]; s.parentElement.querySelector('[data-r]').textContent = !s.value ? '' : s.value === it.a ? '✅ Đúng' : '❌ Đáp án: ' + it.a; });
  }

  function renderChapter() {
    const c = S.ch, d = done().includes(c.n);
    let h = `<section class="rf-hero"><div class="en">${esc(c.en)} · Chương ${c.n}</div><h1>${esc(c.title)}</h1><p>${c.intro}</p></section>`;
    if (c.terms) h += `<section class="rf-sec"><div class="rf-sech"><h2>🔤 Thuật ngữ trong chương</h2></div><div class="rf-terms">${c.terms.map(t => `<div><b>${esc(t[0])}</b>${esc(t[1])}</div>`).join('')}</div></section>`;
    c.sections.forEach((s, si) => {
      h += `<section class="rf-sec" data-s="${si}"><div class="rf-sech"><h2>${esc(s.title)}${en(s.en)}</h2>${s.pg && s.pg.length ? `<button class="btn sm rf-pgbtn" data-pg="${si}">📄 Xem trang gốc (tr. ${s.pg.map(p => p - 8).join(', ')})</button>` : ''}</div>${s.blocks.map(block).join('')}</section>`;
    });
    h += `<div class="rf-done"><span class="small">Nguồn: <i>Good Practices in Refrigeration</i> – GIZ Proklima, 2010. Ảnh cắt từ sách gốc; bản dịch và các ô “Giải thích thêm” do người soạn bổ sung.</span><button class="btn" id="mark">${d ? '↩ Bỏ đánh dấu đã học' : '✓ Đánh dấu đã học chương này'}</button></div>`;
    $('#main').innerHTML = h;
    // gắn tương tác
    const orders = []; c.sections.forEach(s => s.blocks.forEach(b => { if (b.t === 'order') orders.push(b); }));
    document.querySelectorAll('[data-order]').forEach((el, i) => wireOrder(el, orders[i].items));
    const quizzes = []; c.sections.forEach(s => s.blocks.forEach(b => { if (b.t === 'quiz') quizzes.push(b); }));
    document.querySelectorAll('[data-quiz]').forEach((el, i) => wireQuiz(el, quizzes[i].items));
    const fq = []; c.sections.forEach(s => s.blocks.forEach(b => { if (b.t === 'figquiz') fq.push(b); }));
    document.querySelectorAll('[data-figquiz]').forEach((el, i) => wireFigQuiz(el, fq[i]));
    document.querySelectorAll('img[data-fig]').forEach(im => im.onclick = () => openFig(im));
    document.querySelectorAll('[data-pg]').forEach(b => b.onclick = () => openPages(c.sections[+b.dataset.pg].pg, c.sections[+b.dataset.pg].title));
    $('#mark').onclick = () => { let l = done(); l = l.includes(c.n) ? l.filter(x => x !== c.n) : [...l, c.n]; SS('done', l); renderNav(); $('#mark').textContent = l.includes(c.n) ? '↩ Bỏ đánh dấu đã học' : '✓ Đánh dấu đã học chương này'; };
  }

  /* ---------- hộp xem ảnh / trang gốc ---------- */
  function showModal() { const m = S.modal[S.mi]; $('#mtitle').textContent = m.t; $('#mbody').innerHTML = `<img src="${m.src}" alt="${esc(m.t)}">`; $('#modal').hidden = false; $('#mprev').style.visibility = $('#mnext').style.visibility = S.modal.length > 1 ? 'visible' : 'hidden'; }
  function openFig(im) { S.modal = [{ t: im.alt || 'Hình', src: im.src }]; S.mi = 0; showModal(); }
  function openPages(pgs, title) { S.modal = pgs.map(p => ({ t: `${title} – trang gốc ${p - 8} (PDF ${p})`, src: `rf/${S.ch.dir}/page_${p}.jpg` })); S.mi = 0; showModal(); }
  $('#mclose').onclick = () => { $('#modal').hidden = true; };
  $('#mprev').onclick = () => { S.mi = (S.mi + S.modal.length - 1) % S.modal.length; showModal(); };
  $('#mnext').onclick = () => { S.mi = (S.mi + 1) % S.modal.length; showModal(); };
  document.addEventListener('keydown', e => { if (e.key === 'Escape') $('#modal').hidden = true; });
  $('#modal').addEventListener('click', e => { if (e.target.id === 'modal' || e.target.id === 'mbody') $('#modal').hidden = true; });

  $('#tglen').onclick = () => { const on = document.body.classList.toggle('show-en'); $('#tglen').setAttribute('aria-pressed', on); SS('en', on); };
  $('#tglnav').onclick = () => document.body.classList.toggle('nav-open');
  if (ST('en', false)) { document.body.classList.add('show-en'); $('#tglen').setAttribute('aria-pressed', true); }

  const fromHash = +((location.hash.match(/#ch(\d+)/) || [])[1] || 0);
  const first = fromHash || +qs.get('ch') || ST('cur', 0) || (LIST.find(c => c.ready) || {}).n;
  renderNav(); if (first) open(first);
})();
