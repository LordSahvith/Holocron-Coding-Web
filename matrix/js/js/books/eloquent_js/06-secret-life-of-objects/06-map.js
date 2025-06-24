/**
 * Map:
 * a data structure that associates values (the keys)
 * with other values (the values)
 * key/value pairs
 */

let agesObj = {
  Boris: 39,
  Liang: 22,
  Julia: 62,
};

console.log(`Julia is ${agesObj['Julia']}`); // Julia is 62
console.log("Is Jack's age known?", 'Jack' in agesObj); // Is Jack's age known? false
console.log("Is toString's age known?", 'toString' in agesObj); // Is toString's age known? true
console.log('toString' in Object.create(null)); // false

// create instance of Map
let agesMap = new Map();

// set key/value pairs
agesMap.set('Boris', 39);
agesMap.set('Liang', 22);
agesMap.set('Julia', 62);

console.log(`Julia is ${agesMap.get('Julia')}`); // Julia is 62
console.log("Is Jack's name known?", agesMap.has('Jack')); // Is Jack's age known? false
console.log(agesMap.has('toString')); // false

// alternative method to `in`
console.log({ x: 1 }.hasOwnProperty('x')); // true
console.log({ x: 1 }.hasOwnProperty('toString')); // false
