let numbers = [1, 2, 3, 4, 5];

function everyWithLoop(array, predicate) {
  for (let element of array) {
    return !predicate(element)
      ? false // return false if ANY element does NOT satisfy the predicate
      : true; // return true if ALL elements satisfy the predicate
  }
}

function everyWithSome(array, predicate) {
  return !array.some(element => !predicate(element)); // return true if NO ELEMENT FAILS the predicate
}

// Example usage:
// Using the built-in Prototype.array.every method
console.log(numbers.every(n => n < 10)); // true
console.log(numbers.every(n => n > 2)); // false

// Using the custom everyWithLoop and everyWithSome functions
console.log(everyWithLoop(numbers, n => n < 10)); // true
console.log(everyWithLoop(numbers, n => n < 3)); // false
console.log(everyWithSome(numbers, n => n < 10)); // true
console.log(everyWithSome(numbers, n => n < 3)); // false
