const map = (array, func) => {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(func(array[i]));
  }
  return newArray;
};

console.log(map([1, 2, 3, 4], x => x * 2));
console.log(map([5, 6, 7, 8, 9, 10], x => -x));
console.log(map(['a', 'b', 'c', 'd', 'e', 'f', 'g'], x => x.toUpperCase()));

const mapReduce = (array, func) =>
  array.reduce((acc, x) => [...acc, func(x)], []);

console.log(mapReduce([1, 2, 3, 4], x => x * 2));
console.log(mapReduce([5, 6, 7, 8, 9, 10], x => -x));
console.log(
  mapReduce(['a', 'b', 'c', 'd', 'e', 'f', 'g'], x => x.toUpperCase())
);
