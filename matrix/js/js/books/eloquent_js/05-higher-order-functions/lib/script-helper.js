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

module.exports = {
  SCRIPTS_DATA,
  characterScript,
  countBy,
};
