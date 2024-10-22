const fileStream = require("fs");

let answerStream;

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred programming language?",
];

const answers = [];

function ask(index = 0) {
  process.stdout.write(`\n\n\n ${questions[index]}`);
  process.stdout.write(` > `);
}

process.stdin.once("data", (data) => {
  let name = data.toString().trim();
  let fileName = `./${name}.md`;

  if (fileStream.existsSync(fileName)) {
    fileStream.unlinkSync(fileName);
  }

  answerStream = fileStream.createWriteStream(fileName);
  answerStream.write(`Question Answers for ${name}\n============\n`);
});

process.stdin.on("data", function (data) {
  let answer = data.toString().trim();

  answerStream.write(`Question: ${questions[answers.length]}\n`);

  answerStream.write(`Answer: ${answer}\n`, function () {
    if (answers.length < questions.length) {
      ask(answers.length);
    } else {
      process.exit();
    }
  });

  answers.push(answer);
});

process.on("exit", function () {
  answerStream.close();
  process.stdout.write("\n\n\n\n");
  process.stdout.write(
    `Go be ${answers[1]} ${answers[0]} you can finish writing ${answers[2]} later.`
  );
});

ask(answers.length);
