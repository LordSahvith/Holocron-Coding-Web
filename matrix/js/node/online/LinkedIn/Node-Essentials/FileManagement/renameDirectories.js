const fileStream = require("fs");

// fileStream.renameSync(`./${generatedDirectoryName}/logs.js`, "./logs/logs.js");

// console.log("logs folder moved");

// fileStream.rmdir("./logs/assets", function (error) {
//   if (error) {
//     throw error;
//   }

//   console.log("./logs/assets directory removed.");
// });

fileStream.readdirSync("./logs/assets").forEach((file) => {
  fileStream.renameSync(`./logs/assets/${file}`, `./logs/test/${file}`);
});

console.log("files removed");
fileStream.rmdirSync("./logs/assets");
console.log("./logs/assets directory removed.");
