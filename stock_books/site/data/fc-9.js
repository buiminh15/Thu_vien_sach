window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 9,
  title: 'Định giá trái phiếu',
  intro: 'Trái phiếu là khoản nợ dài hạn của chính phủ hoặc doanh nghiệp: trả lãi định kỳ (coupon) và hoàn gốc khi đáo hạn. Chương này dạy tính giá từ lợi suất, tính lợi suất từ giá, và vì sao giá trái phiếu đi ngược lãi suất.',
  sections: [
    { icon: '📜', title: 'Đặc điểm của trái phiếu', blocks: [
      { t: 'list', items: ['<b>Mệnh giá (face value):</b> thường 1.000 USD, được hoàn khi đáo hạn.', '<b>Coupon:</b> khoản lãi cố định hằng năm; <b>lãi suất coupon</b> = coupon ÷ mệnh giá.', '<b>Lợi suất hiện hành (current yield)</b> = coupon ÷ giá thị trường.', '<b>Lợi suất đáo hạn (YTM):</b> tỷ suất sinh lời bình quân nếu mua và giữ đến đáo hạn, tính cả coupon và chênh lệch giá mua–mệnh giá.'] }
    ] },
    { icon: '🧮', title: 'Giá và lợi suất', blocks: [
      { t: 'key', x: '<b>Giá trái phiếu = PV các coupon + PV mệnh giá, chiết khấu theo YTM.</b> Lãi suất thị trường tăng thì giá giảm và ngược lại — giá và lợi suất đi ngược chiều.' },
      { t: 'widget', name: 'fc-bond-price', title: 'Giá trái phiếu theo lợi suất thị trường' },
      { t: 'p', x: 'Đảo ngược bài toán: biết giá thị trường, tìm lãi suất làm PV của dòng tiền bằng giá — đó là YTM, thường giải bằng thử – sai hoặc máy tính tài chính.' },
      { t: 'widget', name: 'fc-ytm', title: 'Tìm lợi suất đáo hạn (YTM) từ giá thị trường' },
      { t: 'tip', x: 'Giá > mệnh giá (premium) khi coupon > lợi suất thị trường; giá < mệnh giá (discount) khi coupon < lợi suất. Càng gần đáo hạn, giá hội tụ về mệnh giá.' }
    ] },
    { icon: '🎢', title: 'Rủi ro lãi suất và rủi ro tín dụng', blocks: [
      { t: 'p', x: 'Trái phiếu dài hạn nhạy cảm với lãi suất hơn trái phiếu ngắn hạn. Ngoài ra nhà phát hành có thể vỡ nợ; nhà đầu tư đòi thêm lợi suất bù cho rủi ro đó — gọi là <b>phần bù vỡ nợ</b>. Xếp hạng tín nhiệm (Moody\'s, S&P) đo rủi ro này: từ Aaa/AAA đến hạng rác.' },
      { t: 'widget', name: 'fc-bond-risk', title: 'Lãi suất tăng 1 điểm thì giá trái phiếu giảm bao nhiêu? (theo kỳ hạn)' },
      { t: 'warn', x: 'Lợi suất công bố (promised yield) là lợi suất nếu nhà phát hành trả đủ; lợi suất kỳ vọng thấp hơn khi có rủi ro vỡ nợ. Trái phiếu rác có lợi suất công bố cao nhưng kỳ vọng thấp hơn nhiều.' }
    ] }
  ],
  summary: ['Giá = PV(coupon) + PV(mệnh giá) tại YTM.', 'Giá và lợi suất ngược chiều.', 'Kỳ hạn càng dài, rủi ro lãi suất càng lớn.', 'Rủi ro tín dụng đòi phần bù vỡ nợ; xếp hạng đo rủi ro đó.'],
  cards: [['Coupon?', 'Lãi định kỳ của trái phiếu'], ['Current yield?', 'Coupon ÷ giá thị trường'], ['YTM?', 'Lợi suất nếu giữ đến đáo hạn'], ['Premium bond?', 'Giá cao hơn mệnh giá'], ['Discount bond?', 'Giá thấp hơn mệnh giá'], ['Default premium?', 'Phần bù rủi ro vỡ nợ'], ['Rủi ro lãi suất lớn hơn ở?', 'Trái phiếu dài hạn'], ['Giá trái phiếu khi lãi suất tăng?', 'Giảm']],
  quiz: [
    { q: 'Trái phiếu 1.000, coupon 8%, giá 950. Lợi suất hiện hành:', o: ['8,0%', '8,4%', '9,5%', '5%'], a: 1, e: '80/950.' },
    { q: 'Lãi thị trường vượt coupon thì giá trái phiếu:', o: ['Trên mệnh giá', 'Bằng mệnh giá', 'Dưới mệnh giá', 'Bằng 0'], a: 2, e: 'Discount.' },
    { q: 'Trái phiếu nào biến động giá nhiều hơn khi lãi suất đổi?', o: ['Kỳ hạn 1 năm', 'Kỳ hạn 30 năm', 'Như nhau', 'Không biết'], a: 1, e: 'Dài hạn nhạy hơn.' },
    { q: 'Phần bù vỡ nợ tăng khi:', o: ['Xếp hạng tăng', 'Xếp hạng giảm', 'Lãi suất bằng 0', 'Không liên quan'], a: 1, e: 'Rủi ro cao đòi bù cao.' }
  ],
  match: [['Coupon', 'Lãi định kỳ'], ['YTM', 'Lợi suất đáo hạn'], ['Face value', 'Mệnh giá'], ['Default premium', 'Bù rủi ro vỡ nợ'], ['Rating', 'Xếp hạng tín nhiệm']]
});
