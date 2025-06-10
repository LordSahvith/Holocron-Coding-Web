const { roadGraph } = require('./roads');
const { randomPick } = require('./lib/helpers');
const { mailRoute, findRoute } = require('./routes');

/**
 * Simulates the Robots Dilivery Route
 * @param {object} state - The Current Address and list of Parcels to be delivered
 * @param {function} robot - the action that will handle the Robots Route
 * @param {array} memory - list of routes and deliveries
 * @returns {array} list of the routes the Robot took to achieve a successful devlivery
 * @example [ "Moved to Alice's House", "Moved to Bob's House", "Moved to Town Hall", ... ]
 */
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

/**
 * Randomly generates route based of parcels
 * @param {object} state - list of parcels to be delivered
 * @returns {object} next destination to visit
 * @example { direction: "Alice's House" }
 */
function randomRobot(state) {
  return { direction: randomPick(roadGraph[state.place]) };
}

/**
 *
 * @param {null} state - not used but every other route function requires the state
 * @param {array} memory - list of previoulsy visted address
 * @returns {object} next destination to visit and previously visited addresses
 * @example { direction: "Alice's House", memory: ["Cabin", "Post Office"] }
 */
function routeRobot(state, memory) {
  if (!memory || memory.length === 0) {
    memory = mailRoute;
  }

  return { direction: memory[0], memory: memory.slice(1) };
}

/**
 * Builds a route based off the parcels and the places the Robot has visited
 * @param {string} place - Current Address
 * @param {array} parcels - List of Parcels for the current Delivery
 * @param {array} route - List of places already visited (robots memory)
 * @returns {object} next destination to visit and previously visited addresses
 * @example { direction: "Alice's House", memory: ["Cabin", "Post Office"] }
 */
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

/**
 * Builds a more effecient route based off the parcels and the places the Robot has visited
 * @param {string} place - Current Address
 * @param {array} parcels - List of Parcels for the current Delivery
 * @param {array} route - List of places already visited (robots memory)
 * @returns {object} next destination to visit and previously visited addresses
 * @example { direction: "Alice's House", memory: ["Cabin", "Post Office"] }
 */
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
