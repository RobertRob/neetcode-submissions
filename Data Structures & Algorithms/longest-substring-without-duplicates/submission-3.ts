class Solution {
    lengthOfLongestSubstring(s: string): number {
        let characterSet: Map<string, number> = new Map()
        let longest = 0

        let i = 0
        let streak = 0
        while (i < s.length) {
            let continueFromIndex = characterSet.get(s[i])
            if (continueFromIndex) {
                if (longest < streak) longest = streak
                streak = 0
                characterSet.clear()
                i = continueFromIndex
                continue
            }

            ++streak
            characterSet.set(s[i], ++i)
        }

        if (longest < streak) longest = streak

        return longest
    }
}