const fileStream = require("fs");

// fileStream.readdir("./", function (error, files) {
//   if (error) {
//     throw error;
//   }

//   console.log(files);
// });

// console.log("reading files...");

// let ipsum = fileStream.readFileSync("./ipsum.txt", "utf-8");

fileStream.readFile("./ipsum.txt", "utf-8", (error, ipsum) => {
  if (error) {
    throw error;
  }

  console.log(ipsum);
});

console.log('Reading file...');
