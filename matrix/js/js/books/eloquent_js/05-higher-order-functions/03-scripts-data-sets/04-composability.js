const SCRIPTS_DATA = require('../data/scripts.js');

/**
 * Less Abstract Functions
 * when computation is expensive (e.g. huge data sets),
 * we might want more control over variables and how they are computed
 * since standard Array.prototype methods (e.g. filter, reduce)
 * create new arrays and objects, we can use custom functions like this
 * that are less abstract, to avoid unnecessary memory usage
 */
let total = 0,
  count = 0;
for (let script of SCRIPTS_DATA) {
  if (script.living) {
    total += script.year;
    count++;
  }
}
console.log(Math.round(total / count)); // 1165

/**
 *
 * Abstract Functions
 * Otherwise we can use standard Array.prototype methods to compose more abstract operations
 * Composability: combining functions to create more complex operations
 * but are simpler to read and maintain and can be reused in different contexts
 */
function average(array) {
  return array.reduce((a, b) => a + b, 0) / array.length;
}

// Examples:
// filter living scripts then round the average year
console.log(
  Math.round(
    average(
      SCRIPTS_DATA.filter(script => script.living).map(script => script.year)
    )
  )
); // 1165

// filter dead scripts then round the average year
console.log(
  Math.round(
    average(
      SCRIPTS_DATA.filter(script => !script.living).map(script => script.year)
    )
  )
); // 204
