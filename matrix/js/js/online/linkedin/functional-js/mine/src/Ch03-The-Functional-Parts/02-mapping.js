const numbers = [1, 2, 3, 4, 5];

const doubleNumbers = [];
console.log('before:', doubleNumbers); // -> before: []

for (let i = 0; i < numbers.length; i++) {
  doubleNumbers.push(numbers[i] * 2);
}

console.log('after:', doubleNumbers); // -> after: [ 2, 4, 6, 8, 10 ]

const double = x => x * 2;
const doubleNumbersMapped = numbers.map(double);
// const doubleNumbersMapped = numbers.map(number => number * 2);
console.log('mapped:', doubleNumbersMapped); // -> mapped: [ 2, 4, 6, 8 10 ]
