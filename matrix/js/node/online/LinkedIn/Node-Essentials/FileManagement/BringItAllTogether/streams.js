const fileStream = require("fs");

let stream = fileStream.createReadStream("./chatLogs/chatLog.log", "utf-8");

let data;

stream.once("data", (chunk) => {
  console.log("read stream started...");
  console.log("===========");
  console.log(chunk);
});

stream.on("data", (chunk) => {
  console.log(`chunk: ${chunk.length}`);
  data += chunk;
});

stream.on("end", () => {
  console.log(`finished ${data.length}`);
});

console.log("Reading File...");
