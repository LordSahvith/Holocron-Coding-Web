let a = 1 + 2;
let b = a + 3;
let c = {
  apple: a,
  banana: b,
};
let d = c.apple * 4;

function greet(greeting: string): void {
  console.log(greeting);
}

function getGreeting(): string {
  return 'Hello, Lord Savith!';
}

greet(getGreeting());

function getFunction(): Function {
  return () => console.log('Function');
}

const invokeFunction: Function = getFunction();
invokeFunction();

type Age = number;

type Person = {
  name: string;
  age: Age;
};

let age = 34;

let driver: Person = {
  name: 'Lord Savith',
  age: age,
};

type OrderedPair = {
  x: number;
  y: number;
};

type Point2D = OrderedPair;

class Transform {
  location;
  rotation;
  scale;

  constructor(location: Point2D, rotation: number, scale: OrderedPair) {
    this.location = location;
    this.rotation = rotation;
    this.scale = scale;
  }
}

class Player {
  transform: Transform;

  constructor(transform: Transform) {
    this.transform = transform;
  }
}
