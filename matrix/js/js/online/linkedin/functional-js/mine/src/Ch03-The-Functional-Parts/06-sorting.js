const mixedNumbers = [10, 1, 9, 3, 4, 5, 7, 2, 8, 6];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const ascSortedNumbers = mixedNumbers.slice().sort(ascending);
const descSortedNumbers = mixedNumbers.slice().sort(descending);

console.log('original:', mixedNumbers); // -> [ 10, 1, 9, 3, 4, 5, 7, 2, 8, 6 ]
console.log('functional ascending sort:', ascSortedNumbers); // -> [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log('functional descending sort:', ascSortedNumbers); // -> [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

const mixedStrings = ['descending', 'ascending', 'mixed', 'savith', 'lord'];
const ascSortedStrings = mixedStrings.slice().sort(ascending);
const descSortedStrings = mixedStrings.slice().sort(descending);

console.log('original:', mixedStrings); // -> [ 'descending', 'ascending', 'mixed', 'savith', 'lord' ]
console.log('ascending:', ascSortedStrings); // -> [ 'ascending', 'descending',  'lord', 'mixed', 'savith'  ]
console.log('descending:', descSortedStrings); // -> [ 'savith', 'mixed', 'lord', 'descending', 'ascending' ]
