function findItinerary(tickets) {
  const graph = new Map();
  for (const [from, to] of tickets) {
    if (!graph.has(from)) graph.set(from, []);
    graph.get(from).push(to);
  }
  for (const destinations of graph.values()) {
    destinations.sort();
  }
  const result = [];
  dfs("JFK");
  return result.reverse();
  function dfs(from) {
    const destinations = graph.get(from);
    while (destinations && destinations.length) {
      dfs(destinations.shift());
    }
    result.push(from);
  }
}
