class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n: number, edges: number[][]): boolean {
        if (edges.length > n - 1) {
            return false;
        }

        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = new Set<number>();

        // Use a standard Array typed to hold our tuples
        const queue: [number, number][] = [[0, -1]];
        visit.add(0);

        // Check the length of the array instead of isEmpty()
        while (queue.length > 0) {
            // .shift() removes and returns the first element of the array
            const [node, parent] = queue.shift()!;

            for (const nei of adj[node]) {
                if (nei === parent) continue;
                if (visit.has(nei)) return false;

                visit.add(nei);
                queue.push([nei, node]);
            }
        }

        return visit.size === n;
    }
}