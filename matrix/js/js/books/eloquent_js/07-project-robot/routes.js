const mailRoute = [
  "Alice's House",
  'Cabin',
  "Alice's House",
  "Bob's House",
  'Town Hall',
  "Daria's House",
  "Ernie's House",
  "Grete's House",
  'Shop',
  "Grete's House",
  'Farm',
  'Marketplace',
  'Post Office',
];

/**
 * Builds a route based on the Addresses of Parcels
 * @param {object} graph - contains the Road Map 
 * @param {string} from - Address currently at
 * @param {string} to - Address to go to
 * @returns {array} a list containing the route the robot will take
 * @example [ "Marketplace", "Farm", "Grete's House", "Ernie's House", ]
 */
function findRoute(graph, from, to) {
  let work = [{ at: from, route: [] }];
  for (let i = 0; i < work.length; i++) {
    let { at, route } = work[i];
    for (let place of graph[at]) {
      if (place === to) return route.concat(place);
      if (!work.some(w => w.at === place)) {
        work.push({ at: place, route: route.concat(place) });
      }
    }
  }
}

module.exports = {
  mailRoute,
  findRoute,
};
