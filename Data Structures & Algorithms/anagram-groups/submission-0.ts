class Solution {
    groupAnagrams(strs: string[]): string[][] {
        let anagramsMap: Map<string, Array<string>> = new Map()

        for (let str of strs) {
            let array: Array<number> = new Array(26).fill(0)
            for (let char of str) {
                array[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }
            let key = array.join(',')
            if (!anagramsMap.get(key)) {
                anagramsMap.set(key, [])
            }
            anagramsMap.get(key)!.push(str)
        }

        return Array.from(anagramsMap.values())
    }
}