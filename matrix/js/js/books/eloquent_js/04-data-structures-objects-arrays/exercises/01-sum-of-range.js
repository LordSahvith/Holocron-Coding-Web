function range(start, end, step = 1) {
  let result = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}

console.log(range(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10))); // 55
console.log(range(5, 2, -1)); // [5, 4, 3, 2]
console.log(sum(range(5, 2, -1))); // 14
