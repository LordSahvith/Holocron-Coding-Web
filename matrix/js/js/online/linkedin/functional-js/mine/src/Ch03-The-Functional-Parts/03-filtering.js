const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNubmers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNubmers.push(numbers[i]);
  }
}

console.log(evenNubmers); // -> [ 2, 4, 6, 8, 10 ]

const isEven = x => x % 2 === 0;
const letEvenNumbersFiltered = numbers.filter(isEven);
// const letEvenNumbersFiltered = numbers.filter(number => number % 2 === 0);
console.log(letEvenNumbersFiltered); // -> [ 2, 4, 6, 8, 10 ]

const words = ['hello', 'goodbye', 'the', 'endless'];
const isLongerThan5 = word => word.length > 5;
const newWords = words.filter(isLongerThan5);
console.log(newWords); // -> [ 'goodbye', 'endless' ]

// higher-order function
const createLengthTest = minLength => word => word.length > minLength;
const newNewWords = words.filter(createLengthTest(3));
console.log(newNewWords); // -> [ 'hello', 'goodbye', 'endless' ]
