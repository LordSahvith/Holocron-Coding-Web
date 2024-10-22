const { generatedDirectoryName } = require('./lib/const');
const fileStream = require("fs");

let md = `
  This is a new file 
  ==================

  ES6 Template Strings honor whitespace.

  * Blah 1
  * Blah 2
  * Blah 3
`;

let js = 'let logs = ["important logs"];';

fileStream.writeFile(`./${generatedDirectoryName}/writeMD.md`, md.trim(), function (error) {
  if (error) {
    throw error;
  }

  fileStream.appendFileSync(`./${generatedDirectoryName}/writeMD.md`, "\n\n### more markdown");
  console.log("file was created.");
});

fileStream.writeFile(`./${generatedDirectoryName}/logs.js`, js.trim(), function (error) {
  if (error) {
    throw error;
  }

  console.log("file was created.");
});
