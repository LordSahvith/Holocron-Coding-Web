const { roadGraph } = require('./roads');
const { randomPick } = require('./lib/helpers');
const { mailRoute, findRoute } = require('./routes');

function runRobot(state, robot, memory) {
  let robotMemory = [];
  for (let turn = 0; ; turn++) {
    if (state.parcels.length === 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }

    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    let doneTask = `Moved to ${action.direction}`;
    robotMemory.push(doneTask);
  }

  return robotMemory;
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

function efficientRobot({ place, parcels }, route) {
  if (!route || route.length === 0) {
    let routes = parcels.map(parcel => {
      if (parcel.place !== place) {
        return { route: findRoute(roadGraph, place, parcel.place), pickup: true };
      } else {
        return { route: findRoute(roadGraph, place, parcel.address), pickup: false };
      }
    });

    function scoreRoute({ route, pickup }) {
      return (pickup ? 0.5 : 0) - route.length;
    }
    route = routes.reduce((a, b) => (scoreRoute(a) < scoreRoute(b) ? a : b)).route;
  }

  return { direction: route[0], memory: route.slice(1) };
}

module.exports = {
  runRobot,
  randomRobot,
  routeRobot,
  goalOrientedRobot,
  efficientRobot,
};
