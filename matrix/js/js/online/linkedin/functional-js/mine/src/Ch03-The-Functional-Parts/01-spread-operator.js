const person = {
  name: 'Savith',
  age: 666,
  hairColor: 'black',
  eyeColor: 'yellow',
};

const careerData = {
  title: 'Sith Lord',
  company: 'Sith Empire',
};

const updates = {
  name: 'Lord Savith',
};

const sithLord = {
  ...person,
  ...careerData,
  ...updates,
};

console.log(sithLord);

const numbers = [1, 2, 3, 4, 5];
// numbers.unshift(0);
// numbers.push(6);
const newNumbers = [0, ...numbers, 6];

console.log(newNumbers); // -> [0, 1, 2, 3, 4, 5, 6]
