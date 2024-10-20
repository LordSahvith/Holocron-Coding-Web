const events = require("events");

let emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
  console.log(`${user}: ${message}`);
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "is it cool?", "Savith");
emitter.emit("customEvent", "yeah it's pretty cool!", "Savith");

process.stdin.on("data", (data) => {
  const input = data.toString().trim();
  if (input === "exit") {
    emitter.emit("customEvent", "Goodbye!", "process");
    process.exit();
  }

  emitter.emit("customEvent", data.toString().trim(), "Terminal");
});
