const accounts = {
  a: 100,
  b: 0,
  c: 20,
};

function getAccount() {
  let accountName = prompt('Enter an account name');

  if (!accounts.hasOwnProperty(accountName)) {
    throw new Error(`No such account: ${accountName}`);
  }

  return accountName;
}

function transfer(from, amount) {
  if (accounts[from] < amount) return;

  let progress = 0;
  try {
    accounts[from] -= amount;
    progress = 1;
    accounts[getAccount()] += amount;
    progress = 2;
  } finally {
    if (progress === 1) {
      accounts[from] += amount;
    }
  }
}

class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() === 'left') return 'L';
  if (result.toLowerCase() === 'right') return 'R';
  throw new InputError('Invalid direction: ' + result);
}

for (;;) {
  try {
    let dir = promptDirection('Where?');
    console.log('You chose ', dir);
    break;
  } catch (e) {
    if (e instanceof InputError) {
      console.log('Not a valid direction. Try again.');
    } else {
      throw e;
    }
  }
}
