// const path = require("path");
// const util = require("util");
// const v8 = require("v8");

// console.log(path.basename(__filename));

// const directoryUploads = path.join(__dirname, "www", "files", "uploads");
// // console.log(directoryUploads);
// util.log(directoryUploads);

// util.log(path.basename(__filename));

// util.log(v8.getHeapStatistics());

const collectAnswers = require("./lib/collectAnswers");

const questions = [
  "What is your name?",
  "Where do you live?",
  "What are you going to do with Node.js?",
];

const answerEvents = collectAnswers(questions, (answers) => {
  console.log("thank you for your answers!");
  console.log(answers);
  process.exit();
});

answerEvents.on("answer", (answer) => console.log(`The answer is: ${answer}`));
