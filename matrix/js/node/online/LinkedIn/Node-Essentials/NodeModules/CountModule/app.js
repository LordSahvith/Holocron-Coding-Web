const count = require('./count');
const {increment, decrement, getCount} = require('./count');

console.log(count.anything);

count.increment();

console.log(count.getCount());
console.log(getCount());

increment();
increment();

console.log(getCount());

decrement();

console.log(`The final count is: ${getCount()}`);
