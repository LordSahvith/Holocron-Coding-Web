const fileStream = require("fs");
const { generatedDirectoryName } = require('./lib/const');

if (fileStream.existsSync(generatedDirectoryName)) {
  console.log("file already exists.");
} else {
  fileStream.mkdir(generatedDirectoryName, function (error) {
    if (error) {
      console.log(`ERROR: ${error}`);
    } else {
      console.log("directory created");
    }
  });
}
