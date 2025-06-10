const VillageState = require('../village');
const { runRobot, goalOrientedRobot } = require('../robot');

function compareRobots(robot1, robot2) {
  console.log(
    `\n${
      robot1.length < robot2.length
        ? 'robot1 had less stops with: ' + robot1.length + ' stops'
        : 'robot2 had less stops with: ' + robot2.length + ' stops'
    }`
  );
  console.log(`\nfirst robot: \n${robot1.join('\n')}`);
  console.log(`\nsecond robot: \n${robot2.join('\n')}`);
}

let redRobot = runRobot(VillageState.randomizeTasks(100), goalOrientedRobot, []);
let blueRobot = runRobot(VillageState.randomizeTasks(100), goalOrientedRobot, []);

compareRobots(redRobot, blueRobot);
