const GRID_SIZE = 12;

for (let i = 0; i < GRID_SIZE; i++) {
  let row = '';
  for (let j = 0; j < GRID_SIZE; j++) {
    if (i % 2 === 0) {
      if (j % 2 === 0) {
        row += ' ';
      } else {
        row += '#';
      }
    } else {
      if (j % 2 === 0) {
        row += '#';
      } else {
        row += ' ';
      }
    }
  }
  console.log(row);
}
