// careful with this approach as it could result in
// behavior you aren't expecting due to scoping issues
const x = 1;
function evalAndReturn(code) {
  eval(code);
  return x;
}

console.log(evalAndReturn('var x = 2')); // 2
console.log(x); // 1
console.log(evalAndReturn('var y = 2')); // 1

// use Function constructor with list of parameters
// and the function body to create it's own scope
let plusOne = Function('n', 'return n + 1');
console.log(plusOne(4)); // 5
