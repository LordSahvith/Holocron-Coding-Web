function reverseArray(array) {
  let reversed = [];
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let temp = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = temp;
  }
}

console.log(reverseArray(['A', 'B', 'C'])); // ['C', 'B', 'A']
let array = [1, 2, 3, 4, 5];
reverseArrayInPlace(array);
console.log(array); // [5, 4, 3, 2, 1]
