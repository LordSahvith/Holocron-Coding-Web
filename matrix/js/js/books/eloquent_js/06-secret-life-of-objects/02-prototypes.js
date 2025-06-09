/**
 * Prototypes:
 * JS is a Prototypal Language that has similarities with OOP Classes
 * like inheritance with properties and methods, however they are
 * fundamentally different in a few ways, but the most important is
 * that EVERY object inherits from Object.prototype and gets it's
 * default properties and methods. There are other prototypes, like:
 * Function.prototype & Array.prototype, that also inherit from
 * Object.prototype, and that each Function and Array inherit from respectively.
 */

let empty = {};
console.log(empty.toString); // ƒ toString() { [native code] }
console.log(empty.toString()); // [object Object]

console.log(Object.getPrototypeOf({}) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null

console.log(Object.getPrototypeOf(Math.max) === Function.prototype); // true
console.log(Object.getPrototypeOf([]) === Array.prototype); // true

let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = 'killer'; // assign property to object
killerRabbit.speak('SKREEEE!'); // The killer rabbit says 'SKREEEE!'
console.log(Object.getPrototypeOf(killerRabbit) === protoRabbit); // true
