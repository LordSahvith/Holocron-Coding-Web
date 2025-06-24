const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2And3 = func => func(2, 3);
console.log(combine2And3(add)); // -> 5
console.log(combine2And3(subtract)); // -> -1
console.log(combine2And3(Math.max)); // -> 3

// pass anonymous function
console.log(combine2And3((x, y) => x + y)); // -> 5
