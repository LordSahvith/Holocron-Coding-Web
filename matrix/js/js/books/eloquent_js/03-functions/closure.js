function multiplier(factor) {
  return number => number * factor;
}

let twice = multiplier(2);
let thrice = multiplier(3);
console.log(twice(4));
console.log(thrice(5));
