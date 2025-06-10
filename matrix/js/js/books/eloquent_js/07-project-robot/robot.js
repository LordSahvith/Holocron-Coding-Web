const VillageState = require('./village');
const { roadGraph } = require('./roads');
const { randomPick } = require('./lib/helpers');
const { mailRoute, findRoute } = require('./routes');

// let first = new VillageState('Post Office', [{ place: 'Post Office', address: "Alice's House" }]);
// let next = first.move("Alice's House");

// console.log(next.place); // Alice's House
// console.log(next.parcels); // []
// console.log(first.place); // Post Office

function runRobot(state, robot, memory) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
}

function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

function routeRobot(state, memory) {
  if (!memory || memory.length === 0) {
    memory = mailRoute;
  }

  return { direction: memory[0], memory: memory.slice(1) };
}

function goalOrientedRobot({ place, parcels }, route) {
  if (!route || route.length === 0) {
    let parcel = parcels[0];
    if (parcel.place !== place) {
      route = findRoute(roadGraph, place, parcel.place);
    } else {
      route = findRoute(roadGraph, place, parcel.address);
    }
  }

  return { direction: route[0], memory: route.slice(1) };
}

let memory = [];
runRobot(VillageState.random(), goalOrientedRobot, memory);
