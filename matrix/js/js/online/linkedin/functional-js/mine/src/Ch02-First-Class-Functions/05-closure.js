const createPrinter = () => {
  const myFavoriteNumber = 44;

  // closure - myFavoriteNumber is remembered (in scope) on line:10
  return () => console.log(`My favorite number: ${myFavoriteNumber}`);
};

// use () to run function and get returned function
const printer = createPrinter();
printer(); // -> My favorite number: 44

// implement private variables in closures
const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  // closure on above variables
  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,
    setJob: newJob => (_job = newJob),
  };
};

const savith = Person({ name: 'Lord Savith', age: 666, job: 'Sith Lord' });
console.log(savith._name); // -> undefined
console.log(savith.getName()); // -> Lord Savith
console.log(savith.getAge()); // -> 666
console.log(savith.getJob()); // -> Sith Lord
savith.setJob('Lord of the Sith'); // sets new name on _job variable in closure
console.log(savith.getJob()); // -> Lord of the Sith
