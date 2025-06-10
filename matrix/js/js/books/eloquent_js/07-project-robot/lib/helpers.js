// random number between 0 - array.length for a random index of array
function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

module.exports = {
  randomPick,
};
