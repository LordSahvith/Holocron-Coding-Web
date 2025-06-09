let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  },
};

function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

let blackRabbit = makeRabbit('black');
console.log(blackRabbit.type); // 'black'

function Rabbit(type) {
  this.type = type;
}

Rabbit.prototype.speak = function (line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
};

let weirdRabbit = new Rabbit('weird');
weirdRabbit.speak('Hello!'); // The weird rabbit says 'Hello!'

console.log(Object.getPrototypeOf(Rabbit) === Function.prototype); // true
console.log(Object.getPrototypeOf(weirdRabbit) === Rabbit.prototype); // true
