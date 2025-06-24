const SCRIPTS_DATA = require('../data/scripts.js');

// filter data based on a test function and return new array
function filter(array, test) {
  let result = [];
  for (let element of array) {
    if (test(element)) {
      result.push(element);
    }
  }
  return result;
}

// Examples:
// pass in function to filter living scripts
console.log(filter(SCRIPTS_DATA, script => script.living));

// uses standard Array.prototype.filter method instad of custom filter function
console.log(SCRIPTS_DATA.filter(script => script.living));
console.log(SCRIPTS_DATA.filter(script => script.direction === 'ttb'));
