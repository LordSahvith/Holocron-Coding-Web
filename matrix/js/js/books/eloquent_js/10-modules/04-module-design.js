const { find_path } = require('dijkstrasjs'); // NPM Package required
const { roadGraph } = require('../07-project-robot/roads');

let graph = {};

for (let node in Object.keys(roadGraph)) {
  let edges = (graph[node] = {});

  for (let destination of roadGraph[node]) {
    edges[destination] = 1;
  }
}

console.log(find_path(graph, 'Post Office', 'Cabin')); // [ "Post Office", "Alice's House", "Cabin" ]
