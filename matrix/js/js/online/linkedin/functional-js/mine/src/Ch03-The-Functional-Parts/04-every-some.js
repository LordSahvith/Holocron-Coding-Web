const employees = [
  {
    name: 'Lord Savith',
    salary: 1500000,
  },
  {
    name: 'Bobby Singer',
    salary: 90000,
  },
  {
    name: 'Peter Parker',
    salary: 65000,
  },
  {
    name: 'Hera',
    salary: 250000,
  },
];

const makesMoreThanOneMillion = employee => employee.salary > 1000000;
const result = employees.some(makesMoreThanOneMillion);
console.log(result); // -> true

const formValues = ['Lord', 'Savith', 'Dromound Kaas', ''];
const isNotEmpty = string => !!string;
const allFieldsFilled = formValues.every(isNotEmpty);
console.log(allFieldsFilled); // -> false

// not functional, slice() is learned next
formValues[formValues.length - 1] = 'Sith Lord'; // [ 'Lord', 'Savith', 'Dromound Kaas', 'Sith Lord' ]
console.log(formValues.every(isNotEmpty)); // -> true
