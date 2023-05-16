const convertToAdjacencyList = (edges: Array<[string, string]>): Record<string, Array<string>> => {
    const adjacencyList: Record<string, Array<string>> = {};

    for(const edge of edges) {
        if(adjacencyList[edge[0]] === undefined) {
            adjacencyList[edge[0]] = [edge[1]];
        } else {
            adjacencyList[edge[0]].push(edge[1])
        }
    }

    return adjacencyList;
}

const bfs = (edges: Array<[string, string]>, startingNode: string): Array<string> => {
    const adjacencyList = convertToAdjacencyList(edges);

    const allNodes: Array<string> = [];
    const queue: Array<string> = [];
    const visitedSet: Set<string> = new Set();

    queue.push(startingNode);
    visitedSet.add(startingNode);

    while(queue.length > 0){
        const currentNode = queue.shift();
        if(!currentNode) continue;

        allNodes.push(currentNode);

        const currentNeighbours = adjacencyList[currentNode];

        for(const node of currentNeighbours) {
            if(!visitedSet.has(node)) {
                queue.push(node);
                visitedSet.add(node)
            }
        }
    }

    return allNodes;
}

console.log(bfs([
    ["A", "B"],
    ["A", "C"],
    ["B", "C"],
    ["C", "A"],
    ["C", "D"],
    ["D", "D"],
], "C"));
