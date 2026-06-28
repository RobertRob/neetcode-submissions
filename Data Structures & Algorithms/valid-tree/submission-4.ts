class Solution {
    validTree(n: number, edges: number[][]): boolean {
        // A valid tree must have exactly n - 1 edges
        if (edges.length > n - 1) {
            return false;
        }

        const adj: number[][] = Array.from({ length: n }, () => []);
        for (const [u, v] of edges) {
            adj[u].push(v);
            adj[v].push(u);
        }

        const visit = new Set<number>();

        const dfs = (node: number, parent: number): boolean => {
            if (visit.has(node)) {
                return false;
            }

            visit.add(node);
            for (const nei of adj[node]) {
                if (nei === parent) {
                    continue;
                }
                if (!dfs(nei, node)) {
                    return false;
                }
            }
            return true;
        };

        return dfs(0, -1) && visit.size === n;
    }
}