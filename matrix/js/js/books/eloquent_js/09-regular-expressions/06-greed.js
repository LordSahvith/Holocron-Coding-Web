function stripComments1(code) {
  return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
}

console.log(stripComments1('1 + /* 2 */3')); // 1 + 3
console.log(stripComments1('x = 10; // ten!')); // x = 10;
console.log(stripComments1('1 /* a */+/* b */ 1')); // 1 1

function stripComments2(code) {
  return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}

console.log(stripComments2('1 /* a */+/* b */ 1')); // 1 + 1
