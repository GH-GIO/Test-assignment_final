
import DOM from '@rackai/domql';
// var { performance } = window

// var start = performance.now()
// var dom = DOM.create({
//   style: {
//     fontFamily: '"Helvetica", "Arial", --system-default'
//   },
//   icon: '✅',
//   strong: 'domql',
//   text: ` render in `,
//   time: '',
//   milliseconds: ' milliseconds'
// })

// dom.update({ time: `${performance.now()}` })

var aba = {
  text: "Grid Selection"

}

var tb = {

  class: " table uk-padding-small"
}

var result = {
  class: ' result uk-flex uk-flex-between uk-margin-small-top uk-text-meta',
  discription1: {
    text: 'Selection coordiantes: ',
    span: {
      class: 'coordinates',
    }
  },
  discription2: {
    text: 'Total cells selected: ',
    span: {
      class: 'total_cells',

    }
  }
}





var tbContainer = DOM.create({
  class: 'tb-container',
  h3: aba,
  table: tb,
  result: result
})



function checkBox() {
  const tbContainer = document.querySelector('.tb-container');
  let table = tbContainer.querySelector('.table')
  let colCount = 0;
  let rowCount = 0;
  const coordinates = tbContainer.querySelector('.coordinates');
  const totalCells = tbContainer.querySelector('.total_cells');
  table.innerHTML = `${`<tr>${`<td><\/td>`.repeat(16)}<\/tr>`.repeat(8)}`;



  tbContainer.addEventListener('click', (e) => {
    if (e.target.tagName !== "TD") return;
    let td = e.target;
    let tr = td.parentNode;
    let table = tr.parentNode;
    colCount = td.cellIndex + 1;
    rowCount = tr.rowIndex + 1;

    for (let row of table.rows) {
      let inside = row.rowIndex < rowCount;
      for (let cell of row.cells) {
        cell.classList.toggle("tb_active", inside && cell.cellIndex < colCount);
      }
    }

    coordinates.textContent = ` ${colCount} , ${rowCount}`;
    totalCells.textContent = ` ${colCount * rowCount}`;

  })

}

checkBox()