let rabbit = {};
rabbit.speak = function (line) {
  console.log(`The rabbit says '${line}'`);
};
rabbit.speak("I'm alive."); // The rabbit says 'I'm alive.'

function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

// create two different rabbit objects with speak function as a method
// if you put () after function name it will invoke the function immediately
let whiteRabbit = { type: 'white', speak };
let hungryRabbit = { type: 'hungry', speak };

// invoke the speak() method on both objects
whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

hungryRabbit.speak('I could use a carrot right now.');
// The hungry rabbit says 'I could use a carrot right now.'

// functions have a call() method that we can explicitly set
// `this` to by passing the object as first argument
speak.call(hungryRabbit, 'Burp!');
// The hungry rabbit says 'Burp!'

// Arrow functions don't bind their own `this`,
// they capture the `this` value of the enclosing context
function normalizeArrow() {
  console.log(this.coords.map(n => n / this.length));
}

normalizeArrow.call({ coords: [0, 2, 3], length: 5 }); // [0, 0.4, 0.6]

// Regular functions bind their own `this`
function normalizeWrapped() {
  console.log(
    // this.coords is [0, 2, 3]
    this.coords.map(function (n) {
      console.log(n); // 0, 2, 3
      console.log(this.length); // this.length is undefined
      return n / this.length; // which gives NaN | 0 / undefined === NaN
    })
  );
}

normalizeWrapped.call({ coords: [0, 2, 3], length: 5 });
// [NaN, NaN, NaN]
