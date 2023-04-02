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
    nodes: Array<[number, number]>,
    parentIndex: number,
    maxLength: number
): void => {
    if (parentIndex > maxLength) return;

    const leftChildIndex = 2 * parentIndex + 1;
    const rightChildIndex = 2 * parentIndex + 2;

    let minIndex = parentIndex;

    if (
        leftChildIndex <= maxLength &&
        nodes[leftChildIndex][1] < nodes[minIndex][1]
    )
        minIndex = leftChildIndex;
    if (
        rightChildIndex <= maxLength &&
        nodes[rightChildIndex][1] < nodes[minIndex][1]
    )
        minIndex = rightChildIndex;

    if (minIndex !== parentIndex) {
        [nodes[parentIndex], nodes[minIndex]] = [
            nodes[minIndex],
            nodes[parentIndex],
        ];
        minHeapify(nodes, minIndex, maxLength);
    }
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

const primsAlgorithm = (
    edges: Array<[number, number, number]>,
    source: number
): number => {
    const adjacencyList = convertToAdjacencyList(edges);

    const minHeap: Array<[number, number]> = [];
    const visited: Set<number> = new Set();

    heapPush(minHeap, [source, 0]);

    let minCost = 0;

    while (minHeap.length > 0) {
        const currentNode = heapPop(minHeap);

        let source = currentNode[0];

        if (visited.has(source)) continue;

        visited.add(source);
        minCost += currentNode[1];

        for (let node of adjacencyList[source]) {
            heapPush(minHeap, node);
        }
    }

    return minCost;
};

console.log(clc.redBright("Prim's Algorithm: "));
console.log(
    clc.yellowBright(
        "The minimum cost from the given destination is: " +
            primsAlgorithm(
                [
                    [0, 1, 2],
                    [0, 4, 6],
                    [0, 3, 7],
                    [1, 2, 1],
                    [1, 4, 4],
                    [2, 4, 2],
                    [2, 3, 3],
                    [4, 3, 3],
                ],
                0
            )
    )
);
