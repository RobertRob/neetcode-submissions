class Solution {
    numIslands(grid: string[][]): number {
        let landsCount: number = 0

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                if (+grid[i][j]) {
                    ++landsCount
                    this.visit(grid, i, j)
                }
            }
        }

        return landsCount;
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