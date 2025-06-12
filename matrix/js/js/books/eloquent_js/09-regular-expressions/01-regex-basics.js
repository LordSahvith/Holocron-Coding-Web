/**
 * Creating a Regular Expression
 */
let re1 = new RegExp('abc');
let re2 = /abc/;
let eighteenPlus = /eighteen\+/;

/**
 * Testing for Matches
 */
console.log(/abc/.test('abcde')); // true
console.log(/abc/.test('abxde')); // false

/**
 * Set of Characters
 */
console.log(/[0123456789]/.test('in 1992')); // true
console.log(/[0-9]/.test('in 1992')); // true

let dateTime1 = /\d\d-\d\d-\d\d\d\d \d\d:\d\d/;
console.log(dateTime1.test('01-30-2003 15:20')); // true
console.log(dateTime1.test('30-jan-2003 15:20')); // false

let notBinary = /[^01]/;
console.log(notBinary.test('1100100010100110')); // false
console.log(notBinary.test('1100100010200110')); // true
console.log(/'\d+'/.test("'123'")); // true
console.log(/'d+'/.test('ll')); // fasle
console.log(/'\d*'/.test("'123'")); // true
console.log(/'\d*'/.test("''")); // true

let neighbor = /neighbou?r/;
console.log(neighbor.test('neighbour')); // true
console.log(neighbor.test('neighbor')); // true

let dateTime2 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2}/;
console.log(dateTime2.test('1-20-2003 8:45')); // true

/**
 * Grouping Subexpressions
 */
let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test('Boohoooooohoohoohoo')); // true

/**
 * Matches and Groups
 */
let match = /\d+/.exec('one two 100');
console.log(match); // [ '100', index: 8, input: 'one two 100', groups: undefined ]
console.log(match.index); // 8
console.log('one two 100'.match(/\d+/)); // [ '100', index: 8, input: 'one two 100', groups: undefined ]

let quotedText = /'([^']*)'/;
console.log(quotedText.exec("she said 'hello'")); // [ "'hello'", 'hello', index: 9, input: "she said 'hello'", groups: undefined ]

console.log(/bad(ly)?/.exec('bad')); // [ 'bad', undefined, index: 0, input: 'bad', groups: undefined ]
console.log(/(\d)+/.exec('123')); // [ '123', '3', index: 0, input: '123', groups: undefined ]
