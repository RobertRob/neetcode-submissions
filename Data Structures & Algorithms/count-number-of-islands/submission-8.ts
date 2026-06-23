class Solution {
    numIslands(grid: string[][]): number {
        let islandsCount = 0

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                // if it's land visit the whole island and mark as visited
                if (grid[i][j] === '1') {
                    ++islandsCount
                    this.visit(grid, i, j)
                }
            }
        }

        return islandsCount
    }

    // breadth first search to find all connected land cells
    private visit(grid: string[][], i: number, j: number) {
        const queue: Array<Array<number>> = []
        queue.unshift([i, j])

        while (queue.length) {
            const [i, j] = queue.pop()!
            grid[i][j] = '0'

            if (i + 1 < grid.length && +grid[i + 1][j])
                queue.unshift([i + 1, j]) // right one
            if (i - 1 >= 0 && +grid[i - 1][j])
                queue.unshift([i - 1, j]) // left one
            if (j + 1 < grid[i].length && +grid[i][j + 1])
                queue.unshift([i, j + 1]) // one above
            if (j - 1 >= 0 && +grid[i][j - 1])
                queue.unshift([i, j - 1]) // one below
        }

    }
}