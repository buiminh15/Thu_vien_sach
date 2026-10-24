window.BOOK_DATA = window.BOOK_DATA || {};
BOOK_DATA.fcf = BOOK_DATA.fcf || { chapters: [] };
BOOK_DATA.fcf.chapters.push({
  n: 4,
  title: 'Kế toán và tài chính',
  intro: 'Muốn làm tài chính phải đọc được ba báo cáo cơ bản: bảng cân đối kế toán, báo cáo kết quả kinh doanh và báo cáo lưu chuyển tiền tệ. Chương này cũng giải thích vì sao lợi nhuận kế toán không bằng dòng tiền, giá trị sổ sách khác giá trị thị trường, và thuế ảnh hưởng thế nào.',
  sections: [
    { icon: '📋', title: 'Ba báo cáo tài chính', blocks: [
      { t: 'table', head: ['Báo cáo', 'Cho biết gì', 'Công thức/nhận xét'], rows: [
        ['Bảng cân đối kế toán', '"Bức ảnh" tại một thời điểm về tài sản, nợ phải trả và vốn chủ sở hữu', 'Tài sản = Nợ phải trả + Vốn chủ sở hữu'],
        ['Báo cáo kết quả kinh doanh', 'Hiệu quả trong một kỳ: doanh thu trừ chi phí', 'Lợi nhuận ròng = Doanh thu − Chi phí − Khấu hao − Lãi vay − Thuế'],
        ['Báo cáo lưu chuyển tiền tệ', 'Nguồn và sử dụng tiền trong kỳ', 'Thay đổi tiền = Nguồn tiền − Sử dụng tiền']
      ] },
      { t: 'p', x: 'Tài sản chia thành tài sản lưu động (tiền, khoản phải thu, hàng tồn kho — chuyển thành tiền nhanh) và tài sản cố định (nhà xưởng, máy móc). Nợ chia thành nợ ngắn hạn và nợ dài hạn. Phần còn lại là vốn chủ sở hữu.' },
      { t: 'widget', name: 'fc-balance', title: 'Bảng cân đối: thử thay đổi tài sản, nợ và xem vốn chủ' }
    ] },
    { icon: '⚖️', title: 'Giá trị sổ sách và giá trị thị trường', blocks: [
      { t: 'key', x: 'Giá trị sổ sách là chi phí lịch sử trừ khấu hao; giá trị thị trường là mức nhà đầu tư thực sự trả. Vốn chủ sở hữu trên sổ chỉ ghi lại tiền cổ đông đã góp hoặc lợi nhuận được giữ lại, không phản ánh kỳ vọng tương lai. Tài sản vô hình (thương hiệu, bằng sáng chế, nhân lực) thường không có trên sổ.' },
      { t: 'tip', x: 'Một công ty công nghệ có thể có vốn sổ sách vài trăm triệu nhưng vốn hóa thị trường hàng chục tỷ. Ngược lại, công ty thua lỗ lâu năm có giá trị thị trường thấp hơn sổ sách.' }
    ] },
    { icon: '💵', title: 'Lợi nhuận khác dòng tiền', blocks: [
      { t: 'p', x: 'Hai lý do chính:' },
      { t: 'list', items: ['Chi đầu tư tài sản cố định không trừ ngay mà được phân bổ qua khấu hao.', 'Kế toán ghi nhận doanh thu khi bán hàng chứ không phải khi thu tiền; chi phí sản xuất có thể phát sinh trước đó.'] },
      { t: 'key', x: 'Dòng tiền hoạt động ≈ Lợi nhuận ròng + Khấu hao − Tăng vốn lưu động. Khấu hao là chi phí "không bằng tiền" nên được cộng lại.' },
      { t: 'widget', name: 'fc-cf', title: 'Từ lợi nhuận ròng sang dòng tiền hoạt động' }
    ] },
    { icon: '🧾', title: 'Thuế', blocks: [
      { t: 'p', x: 'Công ty lớn chịu thuế suất biên khoảng 35% (ở Mỹ thời điểm sách viết). Khi tính thu nhập chịu thuế, công ty trừ khấu hao và <b>lãi vay</b> nhưng <b>không trừ cổ tức</b>. Điều đó làm nợ có "lá chắn thuế". Cá nhân chịu thuế trên lãi và cổ tức, còn lãi vốn chỉ bị đánh thuế khi bán và thực hiện.' },
      { t: 'widget', name: 'fc-tax', title: 'Thuế biên và thuế trung bình' },
      { t: 'warn', x: 'Thuế suất 35% là số liệu Mỹ thời đó. Hãy thay bằng thuế suất hiện hành của nước bạn khi áp dụng.' }
    ] }
  ],
  summary: ['Ba báo cáo: cân đối (thời điểm), kết quả (kỳ), lưu chuyển tiền tệ.', 'Sổ sách dựa trên chi phí lịch sử, không phải giá trị thị trường.', 'Lợi nhuận khác dòng tiền vì khấu hao và chênh lệch thời điểm ghi nhận.', 'Lãi vay được trừ thuế còn cổ tức thì không.'],
  cards: [['Phương trình kế toán?', 'Tài sản = Nợ + Vốn chủ sở hữu'], ['Tài sản lưu động ví dụ?', 'Tiền, phải thu, hàng tồn kho'], ['Khấu hao có phải tiền chi ra?', 'Không (chi phí phi tiền mặt)'], ['Book value khác market value?', 'Chi phí lịch sử so với giá nhà đầu tư trả'], ['Marginal tax rate?', 'Thuế suất trên đồng thu nhập thêm'], ['Cổ tức có trừ thuế công ty không?', 'Không'], ['Lãi vay có trừ thuế không?', 'Có'], ['Lợi nhuận ròng + khấu hao?', 'Xấp xỉ dòng tiền hoạt động']],
  quiz: [
    { q: 'Tài sản 500, nợ 300. Vốn chủ sở hữu:', o: ['200', '300', '500', '800'], a: 0, e: '500 − 300.' },
    { q: 'Lợi nhuận ròng 100, khấu hao 40, vốn lưu động tăng 30. Dòng tiền hoạt động:', o: ['70', '110', '130', '170'], a: 1, e: '100+40−30.' },
    { q: 'Điều nào được trừ khi tính thuế công ty?', o: ['Cổ tức', 'Lãi vay', 'Cả hai', 'Không cái nào'], a: 1, e: 'Chỉ lãi vay.' },
    { q: 'Vì sao lợi nhuận ≠ dòng tiền?', o: ['Do khấu hao và thời điểm ghi nhận doanh thu/chi phí', 'Do lạm phát', 'Do thuế VAT', 'Không khác'], a: 0, e: 'Hai lý do trong chương.' }
  ],
  match: [['Balance sheet', 'Bức ảnh tài sản/nợ'], ['Income statement', 'Hiệu quả trong kỳ'], ['Cash flow statement', 'Nguồn và sử dụng tiền'], ['Book value', 'Giá trị theo sổ'], ['Marginal tax rate', 'Thuế trên đồng thêm']]
});
