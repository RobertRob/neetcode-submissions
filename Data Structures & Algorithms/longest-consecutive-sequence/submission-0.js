class Solution {
    longestConsecutive(nums) {
        let numsMap = {}
        for(let num of nums) {
            numsMap[num] = true
        }

        let longest = 0
        let currentSequence = []
        for(let num of nums) {
            if(numsMap[num - 1])
                continue
            
            let currentNum = num
            while(numsMap[currentNum]) {
                currentSequence.push(num)
                currentNum += 1
            }

            if(longest < currentSequence.length) longest = currentSequence.length
            currentSequence = []
        }

        return longest 
    }
}