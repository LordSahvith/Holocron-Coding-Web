function countBs(string) {
  return countCharacters(string, 'B');
}

function countCharacters(string, character) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) {
      count++;
    }
  }
  return count;
}

console.log(countBs('B')); // → 1
console.log(countBs('BbbB')); // → 2
console.log(countBs('BbbBbbB')); // → 3
console.log(countCharacters('CCcCccC', 'c')); // → 3
console.log(countCharacters('CCcCccC', 'C')); // → 4
