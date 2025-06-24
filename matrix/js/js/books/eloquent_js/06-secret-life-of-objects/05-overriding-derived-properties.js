class Rabbit {
  constructor(type) {
    this.type = type;
  }

  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

// classes don't allow properties other than methods
// so you need to create them on the Function.prototype
Rabbit.prototype.teeth = 'small';

// create instances of Rabbit
let killerRabbit = new Rabbit('killer');
let blackRabbit = new Rabbit('black');

// derived properties can be overridden like any other property
console.log(killerRabbit.teeth); // small
killerRabbit.teeth = 'long, sharp, and bloody';
console.log(killerRabbit.teeth); // long, sharp, and bloody
console.log(blackRabbit.teeth); // small
console.log(Rabbit.prototype.teeth); // small

// Object.prototype.toString doesn't know about arrays
// so it simply puts out [object type], in this case [object Array]
console.log(Array.prototype.toString === Object.prototype.toString); // false
console.log([1, 2].toString()); // 1,2
console.log(Object.prototype.toString.call([1, 2])); // [object Array]
console.log(Array.prototype.toString.call([1, 2])); // 1,2
