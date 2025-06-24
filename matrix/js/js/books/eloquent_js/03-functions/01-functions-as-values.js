let launchMissile = function (x, y) {
  console.log('Launching missile at ' + x + ', ' + y + '!');
};

launchMissile('1', '2'); // Launching missile at 1, 2!

// The function can be redefined later
if (true) {
  launchMissile = function () {
    console.log('Missile launch aborted!');
  };
}

launchMissile(); // Missile launch aborted!
