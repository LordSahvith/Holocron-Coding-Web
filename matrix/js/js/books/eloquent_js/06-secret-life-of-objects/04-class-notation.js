/**
 * Class Syntax:
 * This new Class Syntax looks cleaner and more readable and acts
 * exactly as prototypes do because it is Prototypes. It creates
 * protoype objects exaclty as Function Declarations would but with
 * better and nicer code.
 */

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

/**
 * when classes are used in expressions,
 * they don't define a binding because it just produces
 * the constructor as a value and because they
 * behave like any other value, you can omit the name
 */
/*
 * you might see this syntax, just know it's equivalent as line 42 
let object = new (class {
  getWord() {
    return 'hello';
  }
})(); // notice the () after the object
*/
let object = new class { getWord() { return 'hello'; } };
console.log(object.getWord()); // hello
