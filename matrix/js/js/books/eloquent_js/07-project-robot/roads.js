const roads = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

/**
 * Build the the Graph or Road Map of each Address and the Addresses they are connected to
 * @param {array} edges - list of Addresses Connected by a '-'
 * @returns {object}  list of each Address with an Array of connecting addresses
 * @example 'Post Office': [ "Alice's House", "Marketplace", ]
 */
function buildGraph(edges) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (from in graph) {
      graph[from].push(to);
    } else {
      graph[from] = [to];
    }
  }

  for (let [from, to] of edges.map(road => road.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

module.exports = {
  roads,
  roadGraph: buildGraph(roads),
};
