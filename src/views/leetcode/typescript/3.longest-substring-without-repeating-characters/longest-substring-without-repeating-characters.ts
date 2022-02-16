// function lengthOfLongestSubstring(s: string): number {
//     let result = 0
//     let lastIndex = -1
//     const map = new Map<string, number>()
//     for (let i = 0; i < s.length; i++) {
//         if (map.has(s[i])) {
//             lastIndex = Math.max(lastIndex, map.get(s[i])!)
//         }
//         map.set(s[i], i)
//         result = Math.max(result, i - lastIndex)
//     }
//     return result
// };

// let s = "abcabcbb"
// console.log(lengthOfLongestSubstring(s)) // 3

// // 解法2 存在错误
// function lengthOfLongestSubstring(s: string): number {
//     const set = new Set<string>()
//     let result = 0, i = 0, j = 0
//     while (i < s.length && j < s.length) {
//         if (!set.has(s.charAt(j))) {
//             set.add(s.charAt(j++))
//             console.log(set)
//             result = Math.max(result, j - 1)
//         } else {
//             set.delete(s.charAt(i++))
//         }
//     }
//     return result
// }

// let s = "abcabcbb"
// console.log(lengthOfLongestSubstring(s)) // 3
