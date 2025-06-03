function arrayToList(array) {
  let list = null; // Initialize the list as null for the end of the list

  // Iterate through the array in reverse order to build the list
  for (let i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

function prepend(value, list) {
  return { value: value, rest: list };
}

function nth(list, index) {
  if (index < 0) return undefined; // Handle negative index
  let current = list;
  for (let i = 0; i < index; i++) {
    if (!current) return undefined; // If we reach the end of the list before the index
    current = current.rest;
  }
  return current ? current.value : undefined; // Return the value at the index or undefined if not found
}

function nthRecursive(list, index) {
  if (index < 0) return undefined; // Handle negative index
  if (!list) return undefined; // If the list is empty, return undefined
  if (index === 0) return list.value; // Base case: if index is 0, return the current value
  return nthRecursive(list.rest, index - 1); // Recursive case: move to the next node and decrement index
}

// Example usage:
let list = [1, 2, 3];
console.log(arrayToList(list)); // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }
console.log(listToArray(arrayToList(list))); // [1, 2, 3]
console.log(prepend(0, arrayToList(list))); // { value: 0, rest: { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } } }
console.log(nth(arrayToList(list), 1)); // 2
console.log(nth(arrayToList(list), 3)); // undefined
console.log(nthRecursive(arrayToList(list), 1)); // 2
console.log(nthRecursive(arrayToList(list), 3)); // undefined
