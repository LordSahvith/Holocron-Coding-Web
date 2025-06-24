let map = {
  one: 'one',
  two: 'two',
  hasOwnProperty: 'maybe?',
};

console.log(Object.prototype.hasOwnProperty.call(map, 'hasOwnProperty')); // true
