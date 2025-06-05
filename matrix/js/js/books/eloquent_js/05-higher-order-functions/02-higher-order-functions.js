function greaterThan(n) {
  return m => m > n;
}

let greaterThan10 = greaterThan(10);
console.log(greaterThan10(11)); // true

function noisy(f) {
  return (...args) => {
    console.log('calling with', args);
    let result = f(...args);
    console.log('called with', args, ', returned', result);
    return result;
  };
}

noisy(Math.min)(3, 2, 1);
// calling with [3, 2, 1]
// called with [3, 2, 1] , returned 1

// Abstracting Repetition by passing a function as an argument (action)
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

function unless(test, then) {
  if (!test) then();
}

repeat(3, i => {
  unless(i % 2, () => {
    console.log(i, 'is even');
  });
});
// 0 is even
// 2 is even

["A", "B", "C"].forEach(l => {
  console.log(l);
});
// A
// B
// C
