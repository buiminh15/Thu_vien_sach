// Ôn tập ngắt khoảng (Spaced Repetition) dùng chung cho mọi sách: mỗi thẻ có 1 trạng thái lưu
// trong localStorage (dùng chung Store của common.js). Thuật toán rút gọn theo kiểu SM-2: sau khi
// lật thẻ, người học chấm 1 trong 3 mức — 0 Quên / 1 Ổn / 2 Dễ — để quyết định bao lâu nữa ôn lại.
const SRS = (() => {
  const LKEY = 'srs', DAY = 86400000;
  const all = () => Store.get(LKEY, {});
  const keyOf = (bid, n, i) => `${bid}::${n}::${i}`;

  function get(bid, n, i) {
    return all()[keyOf(bid, n, i)] || { ease: 2.5, interval: 0, reps: 0, due: 0, lapses: 0 };
  }
  function isNew(s) { return !s.reps && !s.due; }
  function isDue(s) { return (s.due || 0) <= Date.now(); }

  // Chấm điểm 1 thẻ và lưu lại lịch ôn tiếp theo.
  function grade(bid, n, i, g) {
    const m = all(), k = keyOf(bid, n, i);
    const s = m[k] || { ease: 2.5, interval: 0, reps: 0, due: 0, lapses: 0 };
    let next;
    if (g === 0) {
      // Quên: coi như học lại, hạ độ dễ, cho xuất hiện lại ngay trong buổi ôn này.
      next = { ease: Math.max(1.3, s.ease - 0.2), interval: 0, reps: 0, due: Date.now(), lapses: (s.lapses || 0) + 1 };
    } else {
      const reps = s.reps + 1;
      const interval = reps === 1 ? (g === 2 ? 3 : 1) : Math.max(1, Math.round(s.interval * s.ease * (g === 2 ? 1.3 : 1)));
      const ease = Math.min(2.8, s.ease + (g === 2 ? 0.1 : 0.02));
      next = { ease, interval, reps, due: Date.now() + interval * DAY, lapses: s.lapses || 0 };
    }
    m[k] = next; Store.set(LKEY, m);
    return next;
  }

  // Các thẻ đến hạn (hoặc chưa ôn lần nào) trong 1 chương.
  function dueInChapter(bid, ch) {
    return (ch.cards || []).map((c, i) => i).filter(i => isDue(get(bid, ch.n, i)));
  }

  // Trộn xen các thẻ đến hạn của mọi sách đã nạp (BOOK_DATA), thẻ trễ hẹn lâu nhất lên trước
  // trong mỗi sách, rồi đi vòng qua từng sách một để không bị dồn hết thẻ của 1 sách liên tiếp.
  function dueAcrossBooks(limit) {
    const groups = {};
    (window.BOOKS || []).forEach(b => {
      const d = window.BOOK_DATA && BOOK_DATA[b.id];
      if (!d) return;
      d.chapters.forEach(ch => (ch.cards || []).forEach((card, i) => {
        const s = get(b.id, ch.n, i);
        if (!isDue(s)) return;
        (groups[b.id] = groups[b.id] || []).push({ book: b, ch, idx: i, card, isNew: isNew(s), due: s.due || 0 });
      }));
    });
    Object.values(groups).forEach(g => g.sort((a, b) => a.due - b.due));
    const ids = shuffle(Object.keys(groups));
    const out = []; let more = true;
    while (more && (!limit || out.length < limit)) {
      more = false;
      for (const id of ids) { const g = groups[id]; if (g.length) { out.push(g.shift()); more = true; } }
    }
    return out;
  }

  // Thống kê tổng số thẻ mới / đến hạn / tổng trên toàn bộ thư viện (để hiện dashboard).
  function stats() {
    let due = 0, fresh = 0, total = 0;
    (window.BOOKS || []).forEach(b => {
      const d = window.BOOK_DATA && BOOK_DATA[b.id];
      if (!d) return;
      d.chapters.forEach(ch => (ch.cards || []).forEach((card, i) => {
        total++;
        const s = get(b.id, ch.n, i);
        if (isNew(s)) fresh++; else if (isDue(s)) due++;
      }));
    });
    return { due, fresh, total, todo: due + fresh };
  }

  return { get, grade, isDue, isNew, dueInChapter, dueAcrossBooks, stats };
})();

// Sổ tay câu trắc nghiệm đang sai: đánh dấu khi trả lời sai, xoá dấu khi trả lời đúng lại —
// nên đây luôn là "những câu đang yếu", không phải lịch sử toàn bộ các lần sai.
const Mistakes = (() => {
  const LKEY = 'mistakes';
  const all = () => Store.get(LKEY, {});
  const keyOf = (bid, n, i) => `${bid}::${n}::${i}`;

  function markWrong(bid, n, i) { const m = all(); m[keyOf(bid, n, i)] = Date.now(); Store.set(LKEY, m); }
  function markRight(bid, n, i) { const m = all(); delete m[keyOf(bid, n, i)]; Store.set(LKEY, m); }
  function listInChapter(bid, ch) {
    const m = all();
    return (ch.quiz || []).map((q, i) => i).filter(i => m[keyOf(bid, ch.n, i)] !== undefined);
  }
  function countInChapter(bid, ch) { return listInChapter(bid, ch).length; }
  function byBook() {
    const out = {};
    (window.BOOKS || []).forEach(b => {
      const d = window.BOOK_DATA && BOOK_DATA[b.id];
      if (!d) return;
      let n = 0;
      d.chapters.forEach(ch => n += countInChapter(b.id, ch));
      if (n) out[b.id] = { book: b, n };
    });
    return out;
  }
  function countAll() { return Object.values(byBook()).reduce((s, x) => s + x.n, 0); }

  return { markWrong, markRight, listInChapter, countInChapter, byBook, countAll };
})();
