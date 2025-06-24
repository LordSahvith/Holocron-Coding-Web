const numbers = [44, 24, 2, 560, 9, 14, 56];

const sumStartValue = 0;
const sum = numbers.reduce((accumulator, number) => {
  console.log(`accumulator is ${accumulator}`);
  console.log(`number is ${number}`);
  return accumulator + number;
}, sumStartValue);

console.log(`sum: ${sum}`);

const productStartValue = 1;
const product = numbers.reduce((accumulator, number) => {
  console.log(`accumulator is ${accumulator}`);
  console.log(`number is ${number}`);
  return accumulator * number;
}, productStartValue);

console.log(`product: ${product}`);
