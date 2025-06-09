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

let killerRabbit = new Rabbit('killer');
killerRabbit.speak('SKREEEE!'); // The killer rabbit says 'SKREEEE!'
let blackRabbit = new Rabbit('black');
blackRabbit.speak('Hello.'); // The black rabbit says 'Hello.'

// when classes are used in expressions, 
// they behave like other value and can omit the name
let object = new class { getWord() { return 'hello'; } };
console.log(object.getWord()); // hello
