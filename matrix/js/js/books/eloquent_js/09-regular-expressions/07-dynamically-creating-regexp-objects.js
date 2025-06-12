let name = 'harry';
let text = 'Harry is a suspicious character.';
let regexp = new RegExp('\\b(' + name + ')\\b', 'gi');
console.log(text.replace(regexp, '_$1_')); // _Harry_ is a suspicious character.

let name1 = 'dea+hl[]rd';
let text1 = 'This dea+hl[]rd guy is super annoying.';
let escaped = name1.replace(/[\\[.+*?(){|^$]/g, '\\$&');
let regexp1 = new RegExp('\\b' + escaped + '\\b', 'gi');
console.log(text1.replace(regexp1, '_$&_')); // This _dea+hl[]rd_ guy is super annoying.
