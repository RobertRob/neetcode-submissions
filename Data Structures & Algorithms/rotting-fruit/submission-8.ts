class Solution {
    fresh: number = 0

    orangesRotting(grid: number[][]): number {
        let minutes: number = 0

        let rottensQueue: Array<Array<number>> = []
        for (let c = 0; c < grid.length; c++) {
            for (let r = 0; r < grid[c].length; r++) {
                if (grid[c][r] === 2) rottensQueue.unshift([c, r])
                if (grid[c][r] === 1) ++this.fresh
            }
        }

        while (rottensQueue.length) {
            rottensQueue = this.rottenNeighbors(rottensQueue, grid)
            if (rottensQueue.length) ++minutes
        }

        return this.fresh === 0 ? minutes : -1
    }

    private rottenNeighbors(queue: Array<Array<number>>, grid: number[][]) {
        let nextRottens: Array<Array<number>> = []
        while (queue.length) {
            let [c, r] = queue.pop()!

            const up = { col: c + 1, row: r }
            if (up.col < grid.length && grid[up.col][up.row] === 1) {
                grid[up.col][up.row] = 2
                --this.fresh
                nextRottens.unshift([up.col, up.row])
            }
            const down = { col: c - 1, row: r }
            if (down.col >= 0 && grid[down.col][down.row] === 1) {
                grid[down.col][down.row] = 2
                --this.fresh
                nextRottens.unshift([down.col, down.row])
            }
            const right = { col: c, row: r + 1 }
            if (right.row < grid[c].length && grid[right.col][right.row] === 1) {
                grid[right.col][right.row] = 2
                --this.fresh
                nextRottens.unshift([right.col, right.row])
            }
            const left = { col: c, row: r - 1 }
            if (left.row >= 0 && grid[left.col][left.row] === 1) {
                grid[left.col][left.row] = 2
                --this.fresh
                nextRottens.unshift([left.col, left.row])
            }
        }

        return nextRottens
    }
}