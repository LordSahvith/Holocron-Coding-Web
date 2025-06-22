// function declaration
function addDeclare(x, y) {
  return x + y;
}
console.log(addDeclare(2, 4));

// function expression
const addExpression = function (x, y) {
  return x + y;
};
console.log(addExpression(2, 4));

// arrow function
const add = (x, y) => x + y;
console.log(add(2, 4));

const double = number => number * 2;
console.log(double(4));

const sayHello = () => console.log('hello');
sayHello();

// without 'return' statement, wrap object in ()
const getPersonData = () => ({
  name: 'Lord Savith',
  age: 666,
  job: 'programmer',
});
console.log(getPersonData());
