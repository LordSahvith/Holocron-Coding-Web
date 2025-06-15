const MOUNTAINS = [
  { name: 'Kilimanjaro', height: 5895, place: 'Tanzania' },
  { name: 'Everest', height: 8848, place: 'Nepal' },
  { name: 'Mount Fuji', height: 3776, place: 'Japan' },
  { name: 'Vaalserberg', height: 323, place: 'Netherlands' },
  { name: 'Denali', height: 6168, place: 'United States' },
  { name: 'Popocatepetl', height: 5465, place: 'Mexico' },
  { name: 'Mont Blanc', height: 4808, place: 'Italy/France' },
];

function buildTable(data) {
  let table = document.createElement('table');
  let fields = Object.keys(data[0]);
  let tableHeadRow = document.createElement('tr');

  fields.forEach(field => {
    let tableHeadCell = document.createElement('th');
    tableHeadCell.appendChild(document.createTextNode(field));
    tableHeadRow.appendChild(tableHeadCell);
  });

  table.appendChild(tableHeadRow);

  data.forEach(object => {
    let row = document.createElement('tr');
    fields.forEach(field => {
      let cell = document.createElement('td');
      cell.appendChild(document.createTextNode(object[field]));

      if (Number(object[field])) {
        cell.style.textAlign = 'right';
      }

      row.appendChild(cell);
    });
    table.appendChild(row);
  });

  return table;
}

document.getElementById('mountains').appendChild(buildTable(MOUNTAINS));
