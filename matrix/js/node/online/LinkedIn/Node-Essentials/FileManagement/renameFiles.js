const { generatedDirectoryName } = require("./lib/const");
const fileStream = require("fs");

// fileStream.renameSync(
//   `./${generatedDirectoryName}/writeMD.md`,
//   `./${generatedDirectoryName}/newMD.md`
// );

// console.log("File renamed");

// fileStream.rename("./lib/ipsum.txt", "./ipsum.txt", function (error) {
//   if (error) {
//     throw error;
//   }

//   console.log("ipsum.txt moved.");
// });

// fileStream.unlinkSync("./lib/testFile.js");

fileStream.unlink("./lib/testFile.js", function (error) {
  if (error) {
    throw error;
  }

  console.log("Test file removed");
});
