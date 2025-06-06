const SCRIPTS_DATA = require('../data/scripts.js');

// map data based on a test function and return new array
function map(array, transform) {
  let result = [];
  for (let element of array) {
    result.push(transform(element));
  }
  return result;
}

// Examples:
// filter data
let rtlScripts = SCRIPTS_DATA.filter(script => script.direction === 'rtl');
// map data
console.log(map(rtlScripts, script => script.name));

// uses standard Array.prototype.map method instead of custom map function
console.log(rtlScripts.map(script => script.name));

// filter and map in one go by chaining methods
console.log(SCRIPTS_DATA.filter(script => script.direction === 'rtl').map(script => script.name));
