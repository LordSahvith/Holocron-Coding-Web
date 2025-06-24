const { Matrix } = require('./lib/matrix');

class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x !== y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3)); // 3.2

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix); // true
console.log(new SymmetricMatrix(2) instanceof Matrix); // true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix); // false
console.log([1] instanceof Array); // true

// Almost every object is an instance of Object
console.log([1] instanceof Object); // true
console.log({ name: 'savith' } instanceof Object); // true
console.log(function () {} instanceof Object); // true

// In order for an object not to be an instance of Object
// you need to EXPLICITLY tell it NOT to be an instance of Object
console.log(Object.create(null) instanceof Object); // false
