const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// (startIndex, endIndex)
console.log(numbers.slice(3, 8)); // -> [ 3, 4, 5, 6, 7 ]

// slice() copies array, then it's mutated (reverse)
const reversedNumbers = numbers.slice().reverse();
console.log(reversedNumbers); // -> [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]
console.log(numbers); // -> [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
