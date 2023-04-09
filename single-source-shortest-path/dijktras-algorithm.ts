import clc from "cli-color";

const heapPush = (
    nodes: Array<[number, number]>,
    node: [number, number]
): void => {
    nodes.push(node);

    const maxLength = nodes.length - 1;
    let parentIndex =
        maxLength % 2 === 0 ? (maxLength - 2) / 2 : (maxLength - 1) / 2;

    while (parentIndex >= 0) {
        minHeapify(nodes, parentIndex, maxLength);
        parentIndex =
            parentIndex % 2 === 0
                ? (parentIndex - 2) / 2
                : (parentIndex - 1) / 2;
    }
};

const heapPop = (nodes: Array<[number, number]>): [number, number] => {
    if (nodes.length < 1) return [-1, -1];

    [nodes[0], nodes[nodes.length - 1]] = [nodes[nodes.length - 1], nodes[0]];
    const currentNode = nodes.pop() ?? [-1, -1];

    minHeapify(nodes, 0, nodes.length - 1);

    return currentNode;
};

const minHeapify = (
    heap: Array<[number, number]>,
    parentIndex: number,
    maxLength: number
): void => {
    if (parentIndex > maxLength) return;

    const leftChildIndex = parentIndex * 2 + 1;
    const rightChildIndex = parentIndex * 2 + 2;

    let minIndex = parentIndex;

    if (
        leftChildIndex <= maxLength &&
        heap[leftChildIndex][1] < heap[minIndex][1]
    )
        minIndex = leftChildIndex;
    if (
        rightChildIndex <= maxLength &&
        heap[rightChildIndex][1] < heap[minIndex][1]
    )
        minIndex = rightChildIndex;
};

const convertToAdjacencyList = (
    edges: Array<[number, number, number]>
): Record<number, Array<[number, number]>> => {
    const adjacencyList: Record<number, Array<[number, number]>> = {};

    for (let edge of edges) {
        if (adjacencyList[edge[0]] === undefined) {
            adjacencyList[edge[0]] = [[edge[1], edge[2]]];
        } else {
            adjacencyList[edge[0]].push([edge[1], edge[2]]);
        }

        if (adjacencyList[edge[1]] === undefined) {
            adjacencyList[edge[1]] = [[edge[0], edge[2]]];
        } else {
            adjacencyList[edge[1]].push([edge[0], edge[2]]);
        }
    }

    return adjacencyList;
};

const dijktrasAlgorithm = (
    edges: Array<[number, number, number]>,
    source: number
): Record<number, number> => {
    const adjacencyList = convertToAdjacencyList(edges);

    const minCosts: Record<number, number> = {};

    Object.keys(adjacencyList).forEach((vertex) => {
        if (Number(vertex) === source) {
            minCosts[Number(vertex)] = 0;
        } else {
            minCosts[Number(vertex)] = Number.POSITIVE_INFINITY;
        }
    });

    const minHeap: Array<[number, number]> = [];
    const visitedSet: Set<number> = new Set();

    heapPush(minHeap, [source, 0]);

    while (minHeap.length > 0) {
        const minNode = heapPop(minHeap);

        if (visitedSet.has(minNode[0])) continue;

        visitedSet.add(minNode[0]);

        const neighbours = adjacencyList[minNode[0]];

        for (let neighbour of neighbours) {
            const currentCost = minCosts[minNode[0]] + neighbour[1];

            if (currentCost < minCosts[neighbour[0]]) {
                minCosts[neighbour[0]] = currentCost;
                heapPush(minHeap, [neighbour[0], currentCost]);
            }
        }
    }

    return minCosts;
};

console.log(clc.redBright("Dijktra's Algorithm: "));
console.log(
    clc.yellowBright(
        "Minimum Costs are as follows from node 0 -> " + JSON.stringify(
            dijktrasAlgorithm(
                [
                    [0, 3, 2],
                    [0, 2, 4],
                    [1, 2, 9],
                    [1, 4, 1],
                    [3, 2, 3],
                    [2, 5, 1],
                    [3, 5, 1],
                    [4, 5, 2],
                ],
                0
            )
        )
    )
);
