class Solution {
    longestConsecutive(nums) {
        let numsMap = {}
        for(let num of nums) {
            numsMap[num] = true
        }

        let longest = 0
        for(let num of nums) {
            if(numsMap[num - 1]) continue
            
            let currentNum = num
            let length = 0
            while(numsMap[currentNum]) {
                length++
                currentNum += 1
            }

            if(longest < length) longest = length
        }

        return longest 
    }
}