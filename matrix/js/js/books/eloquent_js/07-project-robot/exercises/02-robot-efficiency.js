const VillageState = require('../village');
const { runRobot, efficientRobot } = require('../robot');

let efficient = runRobot(VillageState.randomizeTasks(), efficientRobot, []);

console.log(efficient.join('\n'));
