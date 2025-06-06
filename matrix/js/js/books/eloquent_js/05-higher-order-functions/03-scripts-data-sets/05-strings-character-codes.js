const SCRIPTS_DATA = require('../data/scripts.js');

/**
 * Prototype.array.some()
 * Returns true if at least one element in the array
 * passes the test implemented by the provided function.
 */
function characterScript(code) {
  for (let script of SCRIPTS_DATA) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }
  return null; // if no script found for the given code
}

console.log(characterScript(121)); // { name: 'Latin', ... }

// Emojis and some characters are represented as surrogate pairs in UTF-16
// and have some odd behavior when dealing with their lengths and character codes.
let horseShoe = '🐴👢';
console.log(horseShoe.length); // 4
console.log(horseShoe[0]); // Invalid half-character
console.log(horseShoe.charCodeAt(0)); // 55357, Code of the half-character
console.log(horseShoe.codePointAt(0)); // 128052, first emoji character code point

// the for/of loop iterates over each character in the string and handles
// surrogate pairs correctly by returning the full character, node code unit
for (let char of horseShoe) {
  console.log(char);
}
// 🐴
// 👢
