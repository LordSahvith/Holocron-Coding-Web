'use strict';
const { SCRIPTS_DATA, characterScript, countBy } = require('../lib/script-helper.js');

function dominantDirectionOfString(text) {
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : 'none';
  }).filter(({ name }) => name !== 'none');

  let total = scripts.reduce((n, { count }) => n + count, 0);
  if (total === 0) return 'No scripts found';

  return scripts.map(({ name, count }) => `${Math.round((count * 100) / total)}% ${name}`).join(', ');
}

function getDirectionOfScripts() {
  return {
    ltrScripts: SCRIPTS_DATA.filter(script => script.direction === 'ltr'),
    rtlScripts: SCRIPTS_DATA.filter(script => script.direction === 'rtl'),
    ttbScripts: SCRIPTS_DATA.filter(script => script.direction === 'ttb'),
  }
}

function dominantDirection() {
  let { ltrScripts, rtlScripts, ttbScripts } = getDirectionOfScripts();

  let dominantDirection = null;
  if (ltrScripts.length > rtlScripts.length && ltrScripts.length > ttbScripts.length) {
    dominantDirection = {
      direction: 'ltr',
      count: ltrScripts.length,
    };
  } else if (rtlScripts.length > ltrScripts.length && rtlScripts.length > ttbScripts.length) {
    dominantDirection = {
      direction: 'rtl',
      count: rtlScripts.length,
    };
  } else {
    dominantDirection = {
      direction: 'ttb',
      count: ttbScripts.length,
    };
  }

  return `
  Dominant direction: ${dominantDirection.direction}
  Direction Count: ${dominantDirection.count}
  `;
}

// Example usage:
console.log(dominantDirectionOfString('英国的狗说"woof", 俄罗斯的狗说"тяв"'));
console.log(SCRIPTS_DATA.filter(script => script.direction === 'rtl').map(script => script.name));
console.log(dominantDirection());
