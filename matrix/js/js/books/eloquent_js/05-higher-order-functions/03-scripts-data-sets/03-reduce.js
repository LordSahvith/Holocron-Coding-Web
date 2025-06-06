const SCRIPTS_DATA = require('../data/scripts.js');

// reduce data based on a reducer function and return a single value
function reduce(array, combine, start) {
  let current = start;
  for (let element of array) {
    current = combine(current, element);
  }
  return current;
}

// number of characters in a script
function characterCount(script) {
  // script.ranges is the array of ranges, e.g. [[0, 100], [200, 300]]
  // (count, [from, to]) => {} is the combine function parameter
  // from the customer reduce function above
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from), 0; // closure to count characters in ranges
  });
}

// Examples:
// sum of years of all scripts
console.log(reduce(SCRIPTS_DATA, (a, b) => a + b.year, 0));

// uses standard Array.prototype.reduce method instead of custom reduce function
console.log(SCRIPTS_DATA.reduce((a, b) => a + b.year, 0));

// find script with the most characters
console.log(
  SCRIPTS_DATA.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);
