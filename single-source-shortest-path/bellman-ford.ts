import clc from "cli-color";

type BellmanFordResponse =
    | {
          success: true;
          data: Record<string, number>;
      }
    | {
          success: false;
          error: string;
      };

const bellmanFord = (
    edges: Array<[string, string, number]>,
    origin: string
): BellmanFordResponse => {
    const shortestPathsFromOrigin: Record<string, number> = {};

    for (let edge of edges) {
        if (shortestPathsFromOrigin[edge[0]] === undefined) {
            shortestPathsFromOrigin[edge[0]] =
                edge[0] === origin ? 0 : Infinity;
        }

        if (shortestPathsFromOrigin[edge[1]] === undefined) {
            shortestPathsFromOrigin[edge[1]] =
                edge[1] === origin ? 0 : Infinity;
        }
    }

    for (let _ = 0; _ < Object.keys(shortestPathsFromOrigin).length; _++) {
        let isAnyPathDistanceUpdated = false;

        for (let edge of edges) {
            const currentOrigin = edge[0];
            const currentDest = edge[1];
            const currentCost = edge[2];

            if (
                shortestPathsFromOrigin[currentOrigin] + currentCost <
                shortestPathsFromOrigin[currentDest]
            ) {
                shortestPathsFromOrigin[currentDest] =
                    shortestPathsFromOrigin[currentOrigin] + currentCost;

                if (!isAnyPathDistanceUpdated) isAnyPathDistanceUpdated = true;
            }
        }

        if (!isAnyPathDistanceUpdated) break;
    }

    for (let edge of edges) {
        const currentOrigin = edge[0];
        const currentDest = edge[1];
        const currentCost = edge[2];

        if (
            shortestPathsFromOrigin[currentOrigin] + currentCost <
            shortestPathsFromOrigin[currentDest]
        )
            return {
                success: false,
                error: "There is a negative edge weight cycle...",
            };
    }

    return {
        success: true,
        data: shortestPathsFromOrigin,
    };
};

console.log(clc.redBright("Bellman Ford's Algorithm: \n"));

console.log(
    clc.yellowBright(
        JSON.stringify(
            bellmanFord(
                [
                    ["A", "B", 4],
                    ["A", "C", 5],
                    ["C", "D", 3],
                    ["D", "B", -10],
                ],
                "A"
            )
        )
    )
);

console.log();

console.log(clc.greenBright("# Negative edge weight case"));
console.log(
    clc.yellowBright(
        JSON.stringify(
            bellmanFord(
                [
                    ["A", "B", 4],
                    ["C", "B", -10],
                    ["A", "D", 5],
                    ["B", "D", 5],
                    ["D", "C", 3],
                ],
                "A"
            )
        )
    )
);
