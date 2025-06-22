const sayHello = name => console.log(`Hello ${name}`);

const sayHello2 = sayHello;
sayHello2('Lord Savith');

// this assigns a function based on 'isTruthy'
// same as 'sayHello2' but as ternary
const isTruthy = false;
const myFunction = isTruthy
  ? () => console.log('First Option')
  : () => console.log('Second Option');
myFunction();

// mimic a possible app environment
// that fetches data
const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here
  return 'time-intensive';
};

const fetchDataFake = () => ({
  name: 'Lord Savith',
  age: 666,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;
console.log(fetchData());

// more functions as data
const double = x => x * 2;
const subtractOne = x => --x;
const triple = x => x * 3;
const addFive = x => x + 5;

const myNumber = 44;

const doubled = double(myNumber);
const minusOne = subtractOne(doubled);
// ...

// array of functions
const functionsArray = [double, subtractOne, triple, addFive, Math.sqrt];

let number = 44;
console.log('before:', number);

functionsArray.forEach(func => (number = func(number)));

console.log('after:', number);
