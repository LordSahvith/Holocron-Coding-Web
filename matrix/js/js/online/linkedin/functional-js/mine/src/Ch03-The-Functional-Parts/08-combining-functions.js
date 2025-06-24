const employees = [
  {
    name: 'Lord Savith',
    age: 666,
    jobTitle: 'Sith Lord',
    salary: 1500000,
  },
  {
    name: 'Bobby Singer',
    age: 56,
    jobTitle: 'Hunter',
    salary: 90000,
  },
  {
    name: 'Peter Parker',
    age: 18,
    jobTitle: 'developer',
    salary: 65000,
  },
  {
    name: 'Tech Guy',
    age: 18,
    jobTitle: 'developer',
    salary: 250000,
  },
];

const developers = employees.filter(
  employee => employee.jobTitle === 'developer'
);
console.log(developers);

const developerSalaries = developers.map(developer => developer.salary);
console.log(developerSalaries);

const developerSalarySum = developerSalaries.reduce(
  (acc, salary) => acc + salary,
  0
);
console.log(developerSalarySum);

const averageDeveloperSalary = developerSalarySum / developers.length;
console.log(averageDeveloperSalary);

const nonDevelopers = employees.filter(
  employee => employee.jobTitle !== 'developer'
);

const nonDeveloperSalaries = nonDevelopers.map(employee => employee.salary);
const nonDeveloperSalarySum = nonDeveloperSalaries.reduce(
  (acc, salary) => acc + salary,
  0
);
const averageNonDeveloperSalaies = nonDeveloperSalarySum / nonDevelopers.length;
console.log(`non developer average: ${averageNonDeveloperSalaies}`);
