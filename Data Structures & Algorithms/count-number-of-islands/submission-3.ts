class Solution {
    numIslands(grid: string[][]): number {
        let islands: number = 0

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (+grid[i][j]) { // if it's land visit the whole island and mark as visited
                    ++islands
                    this.visit(grid, i, j) // dept-first search to find all connected land cells
                }
            }
        }

        return islands;
    }

    private visit(grid: string[][], i: number, j: number) {
        if (i >= grid.length
            || i < 0
            || j >= grid[i].length
            || j < 0) return // if out of boundaries return

        if (grid[i][j] === '0') return // if it's water return

        grid[i][j] = '0' // mark as visited

        this.visit(grid, i, j + 1) // visit right
        this.visit(grid, i, j - 1) // visit left
        this.visit(grid, i + 1, j) // visit down
        this.visit(grid, i - 1, j) // visit up
    }
}