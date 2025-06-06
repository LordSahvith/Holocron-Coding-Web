/**
 * Closures:
 * Functions that remember the environment in which they were created.
 * A closure is a function that has access to the outer function's scope
 * even after the outer function has returned
 */

/**
 * This is a closure because it captures the `local` variable (inner scope)
 * which references the `n` variable (outer scope) and the
 * returned function has access to the `local` variable
 * @param {*} n
 * @returns function that returns the value of `local`
 * @example n === 1, local === 1
 */
function wrapValue(n) {
  let local = n;
  return () => local; // closure: captures the `local` variable in a returned function
}

/**
 * The inner function (() => local) has access to the
 * outer function's scope (wrapValue(n)) even after 
 * the outer function has returned because the 
 * outer function's scope is preserved in the closure
 */
const wrap1 = wrapValue(1); // value: () => local; local === 1
const wrap2 = wrapValue(2); // value: () => local; local === 2
console.log(wrap1()); // 1
console.log(wrap2()); // 2

// version 1 - function declaration
function multiply(x, y) {
  return x * y;
}

console.log(multiply(2, 5)); // 10
console.log(multiply(3, 5)); // 15
console.log(multiply(4, 5)); // 15

/**
 * Version 2 - Closure:
 * Version 2 is a closure because it captures the `factor` variable
 * in the returned function, allowing it to be used later
 * @param {number} factor - the factor to multiply by
 * @returns number => number * factor - a function that takes a number
 * and returns the product of the number and the factor
 * @example multiplier(2)(5) === 10
 */
function multiplier(factor) {
  return number => number * factor; // closure: captures the `factor` variable in a returned function
}

let double = multiplier(2); // value: number => number * factor; factor === 2
let triple = multiplier(3); // value: number => number * factor; factor === 3
console.log(double(5)); // double = number(5) => number(5) * factor(2); 10
console.log(triple(5)); // triple = number(5) => number(5) * factor(3); 15

/**
 * Version 3 - Combined (Function Declaration + Closure):
 * This version combines the function declaration with a closure
 * to create a multiplier function that captures the factor
 * @param {*} factor - the factor to multiply by
 * @returns {function} - a function (with a closure 'factor') that takes
 * a number and returns the product of the number and the factor
 * @example multiplier2(4)(5) === 20
 */
function multiplier2(factor) {
  return function (number) {
    return multiply(number, factor); // closure: captures `factor` variable
  };
}

let quadruple = multiplier2(4); // value: number => multiply(number, factor); factor === 4
console.log(quadruple(5)); // quadruple = number(5) => multiply(number(5), factor(4)); 20
