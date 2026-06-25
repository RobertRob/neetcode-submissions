class Solution {
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const prereq = new Map<number, number[]>();
        for (const [course, pre] of prerequisites) {
            if (!prereq.has(course)) {
                prereq.set(course, []);
            }
            prereq.get(course)!.push(pre);
        }

        const output: number[] = [];
        const visit = new Set<number>();
        const cycle = new Set<number>();

        for (let c = 0; c < numCourses; c++) {
            if (!this.dfs(c, prereq, visit, cycle, output)) {
                return [];
            }
        }

        return output;
    }

    private dfs(
        course: number,
        prereq: Map<number, number[]>,
        visit: Set<number>,
        cycle: Set<number>,
        output: number[]
    ): boolean {
        if (cycle.has(course)) {
            return false;
        }
        if (visit.has(course)) {
            return true;
        }

        cycle.add(course);
        for (const pre of prereq.get(course) || []) {
            if (!this.dfs(pre, prereq, visit, cycle, output)) {
                return false;
            }
        }
        cycle.delete(course);
        visit.add(course);
        output.push(course);
        return true;
    }
}