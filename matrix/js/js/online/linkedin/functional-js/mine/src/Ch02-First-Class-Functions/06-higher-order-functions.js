const divide = (x, y) => x / y;

const checkIfZero =
  func =>
  (...args) => {
    if (args[1] === 0) {
      console.log('Error: dividing by zero');
      return null;
    }

    return func(...args);
  };

const divideSafe = checkIfZero(divide);

console.log(divideSafe(0, 7)); // -> 0
console.log(divideSafe(7, 0)); // -> Error: dividing by zero -> null
console.log(divideSafe(7, 1)); // -> 7
console.log(divideSafe(1, 7)); // -> 0.14285714285714285
