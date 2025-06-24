/**
 * picks a random number between 0 - array.length for a random index of array
 * @param {array} array - array that needs a random index for a random choice
 * @returns {*} the value from the random index
 */
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

module.exports = {
  randomPick,
};
