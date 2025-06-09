const Rabbit = require('./lib/rabbit');

let sym = Symbol('name');
console.log(sym === Symbol('name')); // false

// use Symbol and square bracket notation to create a property
Rabbit.prototype[sym] = 55;

// new rabbit instance
let blackRabbit = new Rabbit('black');
console.log(blackRabbit[sym]); // 55

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function () {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString()); // 1,2
console.log([1, 2][toStringSymbol]()); // 2 cm of blue yarn

let stringObject = {
  [toStringSymbol]() {
    return 'a jute rope';
  },
};
console.log(stringObject[toStringSymbol]()); // a jute rope
