let pattern = /y/g;
pattern.lastIndex = 3;
let match1 = pattern.exec('xyzzy');
console.log(match1.index); // 4
console.log(pattern.lastIndex); // 5

let global = /abc/g;
console.log(global.exec('xyz abc')); // [ 'abc', index: 4, input: 'xyz abc', groups: undefined ]
let sticky = /abc/y;
console.log(sticky.exec('xyz abc')); // null

let digit = /\d/g;
console.log(digit.exec('here it is: 1')); // [ '1', index: 12, input: 'here it is: 1', groups: undefined ]
console.log(digit.exec('and now: 1')); // null

console.log('Banana'.match(/an/g)); // [ 'an', 'an' ]

/**
 * Looping Over Matches
 */
let input = 'A string with 3 numbers in it... 42 and 88.';
let number = /\b\d+\b/g;
let match;
while ((match = number.exec(input))) {
  console.log('Found', match[0], 'at', match.index);
}
/**
 * Found 3 at 14
 * Found 42 at 33
 * Found 88 at 40
 */
