const createPrinter = () => () => console.log('Hello');

// const double = x => x * 2;
// const triple = x => x * 3;
// const quadruple = x => x * 4;

const createMultiplier = y => x => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(2)); // -> 4
console.log(triple(2)); // -> 6
console.log(quadruple(2)); // -> 8
