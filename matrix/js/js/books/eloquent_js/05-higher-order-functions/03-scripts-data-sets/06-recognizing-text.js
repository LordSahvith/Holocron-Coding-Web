const SCRIPTS_DATA = require('../data/scripts.js');

/**
 * Get the script for a given character code by looking through the ranges
 * @param {number} code - character code unit
 * @returns {object|null} - script object if found, otherwise null
 * @example { name: 'Latin', ... }
 */
function characterScript(code) {
  for (let script of SCRIPTS_DATA) {
    if (script.ranges.some(([from, to]) => code >= from && code < to)) {
      return script;
    }
  }

  return null; // if no script found for the given code
}

/**
 * Count items in an array based on a grouping function
 * @param {string|array} items - string of characters or array of items
 * @param {function} groupName
 * @returns {array} - array of objects with name and count
 * @example [ { name: false, count: 2 }, { name: true, count: 2 } ]
 */
function countBy(items, groupName) {
  let counts = [];

  // loop item to get the full character (e.g. '英' or 'a')
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(count => count.name === name);
    // if not known, add it, otherwise increment the count
    if (known === -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }

  return counts;
}

/**
 * Get all scripts used in the text and their percentage
 * then filter out 'none' scripts
 * @param {string} text
 * @returns {array} - array of objects with script name and count
 * @example '61% Han, 22% Latin, 17% Cyrillic'
 */
function textScripts(text) {
  // get list of scripts used in the text and filter out 'none' scripts
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.name : 'none';
  }).filter(({ name }) => name !== 'none');

  // get total number of characters in the text
  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) return 'No scripts found';

  // calculate percentage for each script and return formatted string
  return scripts
    .map(({ name, count }) => {
      return `${Math.round((count * 100) / total)}% ${name}`;
    })
    .join(', ');
}

// Example usage:
console.log(countBy([1, 2, 3, 4], number => number > 2)); // [ { name: false, count: 2 }, { name: true, count: 2 } ]

console.log(textScripts('英国的狗说"woof", 俄罗斯的狗说"тяв"')); // 61% Han, 22% Latin, 17% Cyrillic
