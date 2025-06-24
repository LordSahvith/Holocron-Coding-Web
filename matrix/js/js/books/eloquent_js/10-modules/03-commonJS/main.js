import { formDate as formattedDate } from './format-date';
console.log(formattedDate(new Date(2019, 8, 13), 'dddd the Do'));

// ini example (requires NPM package)
const { parse } = require('ini');
console.log(parse('x = 10\ny = 20')); // { x: '10', y: '20' }
