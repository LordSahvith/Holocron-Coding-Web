// Closures are functions that remember the environment in which they were created
// A closure is a function that has access to the outer function's scope even after the outer function has returned
function wrapValue(n) {
  let local = n;
  return () => local; // This is a closure
}

/* The inner function has access to the outer function's scope
 * even after the outer function has returned
 * becuase the outer function's scope is preserved in the closure
 */
const wrap1 = wrapValue(1); // value: () => local; local === 1
const wrap2 = wrapValue(2); // value: () => local; local === 2
console.log(wrap1()); // 1
console.log(wrap2()); // 2

// version 1 - function declaration
function multply(x, y) {
  return x * y;
}

console.log(multply(2, 5)); // 10
console.log(multply(3, 5)); // 15
console.log(multply(4, 5)); // 15

// version 2 - closure
function multiplier(factor) {
  return number => number * factor; // This is a closure
}

let double = multiplier(2); // value: number => number * factor; factor === 2
let triple = multiplier(3); // value: number => number * factor; factor === 3
console.log(double(5)); // double = number(5) => number(5) * factor(2); 10
console.log(triple(5)); // triple = number(5) => number(5) * factor(3); 15

// version 3 - combined (closure + function declaration)
function multiplier2(factor) {
  return function (number) {
    return multply(number, factor); // This is a closure
  };
}

let quadruple = multiplier2(4); // value: number => multply(number, factor); factor === 4
console.log(quadruple(5)); // quadruple = number(5) => multply(number(5), factor(4)); 20
