function canYouSpotTheProblem() {
  'use strict';
  for (counter = 0; counter < 10; counter++) {
    console.log('happy happy');
  }
}

// canYouSpotTheProblem(); // ReferenceError: counter is not defined

function Person(firstName) {
  this.firstName = firstName;
}
// without `new` no constructor is called creating a
// global binding called `firstName`
let savith = Person('Savith');
console.log(firstName); // Savith

function StrictPerson(firstname) {
  'use strict';
  this.firstName = firstname;
}
let strictSavith = StrictPerson('Savith'); // TypeError: Cannot set properties of undefined (setting 'firstName')
