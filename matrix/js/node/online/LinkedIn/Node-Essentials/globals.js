let hello = 'Hello World from Node.js';
let justNode = hello.slice(17);
console.log(`Who let the ${justNode} out?`);

let directory = __dirname;
console.log(directory);
console.log(__filename);

const path = require('path');
console.log(`The file name is: ${path.basename(__filename)}`);

for (let key in global) {
  console.log(key);
}

// ARGUMENTS

console.log(process.argv);

function grab(flag) {
  let indexAfterFlag = process.argv.indexOf(flag) + 1;
  return process.argv[indexAfterFlag];
}

let greeting = grab('--greeting');
let user = grab('--user');

console.log(greeting);
console.log(user);

// STANDARD OUT

function qAndA() {
  process.stdout.write('Hello');

  const questions = [
    'What is your name?',
    'What would you rather be doing?',
    'What is your preferred programming language?',
  ];

  const answers = [];

  const ask = function (index = 0) {
    process.stdout.write(`\n\n\n ${questions[index]}`);
    process.stdout.write(` > `);
  };

  ask();

  process.stdin.on('data', data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });

  process.on('exit', () => {
    process.stdout.write('\n\n\n\n');
    process.stdout.write(
      `Go be ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later.\n\n`
    );
  });
}

// TIMERS
function incrementTime() {
  currentTime += waitInterval;

  const percentage = Math.floor((currentTime / waitTime) * 100);
  getLoadingPercent(percentage);
}

function getLoadingPercent(percent) {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(`loading...${percent}%`);
}

function timerFinished() {
  getLoadingPercent(100);
  clearInterval(interval);
  console.log('\ndone');
  qAndA();
}

const waitInterval = 500;
let currentTime = 0;
const interval = setInterval(incrementTime, waitInterval);

const waitTime = 3000;
setTimeout(timerFinished, waitTime);
