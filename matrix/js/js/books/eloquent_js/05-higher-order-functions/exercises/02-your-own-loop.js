function normalLoop(array, action) {
  let count = 0;

  for (let element of array) {
    count = action(count, element);
  }

  return count;
}

function aHigherOrderLoop(array, action) {
  return array.reduce((count, value) => action(count, value), 0);
}

function yourOwnLoop(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

// Example usage:
console.log(normalLoop([1, 2, 3], (current, value) => current + value)); // 6
console.log(aHigherOrderLoop([1, 2, 3], (current, value) => current + value)); // 6
yourOwnLoop(
  1,
  n => n <= 6,
  n => n + 1,
  n => n === 6 ? console.log(n) : null // 6
);
