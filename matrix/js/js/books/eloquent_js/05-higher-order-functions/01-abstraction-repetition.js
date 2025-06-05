// Abstracting Repetition by passing a function as an argument (action)
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(5, console.log);

// create the function on the spot to be passed as an argument
let lables = [];
repeat(5, i => {
  lables.push(`Unit ${i + 1}`);
});
console.log(lables);
