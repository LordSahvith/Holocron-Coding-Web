const Rabbit = require('./lib/rabbit');

// override Object.prototype.toString
Rabbit.prototype.toString = function () {
  return `a ${this.type} rabbit`;
};

let blackRabbit = new Rabbit('black');

// The String() uses the toString method on that object
// to create a meaningful string other than [object Object]
console.log(String(blackRabbit));
