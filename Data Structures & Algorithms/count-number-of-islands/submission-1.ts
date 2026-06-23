class Solution {
    numIslands(grid: string[][]): number {
        let islands: number = 0

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (+grid[i][j]) {
                    ++islands
                    this.visit(grid, i, j)
                }
            }
        }

        return islands;
    }

    private visit(grid: string[][], i: number, j: number) {
        if (i >= grid.length
            || i < 0
            || j >= grid[i].length
            || j < 0) return

        if (grid[i][j] === '0') return
        grid[i][j] = '0'

        this.visit(grid, i, j + 1)
        this.visit(grid, i, j - 1)
        this.visit(grid, i + 1, j)
        this.visit(grid, i - 1, j)
    }
}