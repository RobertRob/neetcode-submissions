class Solution {
    encode(strs: string[]): string {
        let encoded: string = ''
        let lengths: string = ''
        strs.forEach((str, i) => {
            lengths += String(str.length);
            if (i === strs.length - 1) lengths += ':'
            else lengths += ','
            encoded += str
        })

        return lengths + encoded
    } // 5,7,4:blahhfoooooobarr

    decode(str: string): string[] {
        const metadata = this.resolveLengthsArray(str)
        if (!metadata) return []

        let index = metadata.index;
        const decoded = metadata.lengths.map(length => {
            let word = ''
            const stop = index + length
            for (let i = index; i < stop; i++) {
                word += str[i]
            }
            index = stop
            return word
        })
        return decoded
    }

    private resolveLengthsArray(str: string) {
        const lengths: number[] = []
        let currentNumberStr: string = ''
        for(let i = 0; i < str.length; i++){
            if(str[i] === ',') {
               lengths.push(+currentNumberStr)
               currentNumberStr = ''
            } else if(str[i] === ':') {
                lengths.push(+currentNumberStr)
                return {
                    lengths,
                    index: ++i
                }
            } else {
               currentNumberStr += str[i]
            }
        }
    }
}
