const VillageState = require('./village');
const { runRobot, goalOrientedRobot } = require('./robot');

let robotRoute = runRobot(VillageState.randomizeTasks(), goalOrientedRobot, []);
console.log(robotRoute.join('\n'));
