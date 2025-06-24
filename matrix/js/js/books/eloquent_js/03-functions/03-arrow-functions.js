/**
 * Arrow functions are a more concise syntax for writing function expressions.
 * They are NOT hoisted, so they must be defined before they are called.
 * They do NOT have their own this, so they CANNOT be used as methods.
 * They CANNOT be used as constructors, so they CANNOT be used with new.
 * Arrow functions are always anonymous.
 */
const power = (base, exponent) => {
  let result = 1;
  for (let i = 0; i < exponent; i++) {
    result *= base;
  }
  return result;
};

console.log(power(2, 3)); // 8

const square1 = x => {
  return x * x;
};
const square2 = x => x * x;

console.log(square1(4)); // 16
console.log(square2(4)); // 16

const horn = () => {
  console.log('Toot');
};

horn(); // Toot
