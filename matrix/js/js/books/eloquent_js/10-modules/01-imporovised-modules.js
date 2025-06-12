const weekDay = function () {
  const names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  return {
    name(number) {
      return names[number];
    },
    number(name) {
      return names.indexOf(name);
    },
  };
};

console.log(weekDay().name(0)); // Sunday
console.log(weekDay().number('Sunday')); // 0
console.log(weekDay().name(weekDay().number('Sunday'))); // Sunday

/**
 * needs to be invoked to get the return object as a value
 * otherwise, it'll become the function and then it'll need
 * to be invoked when used, like lines 14-16
 */
let day = weekDay();
console.log(day.name(2)); // Tuesday
console.log(day.number('Tuesday')); // 2
console.log(day.name(day.number('Tuesday'))); // Tuesday
