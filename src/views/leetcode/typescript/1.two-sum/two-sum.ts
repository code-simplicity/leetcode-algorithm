// 解法1，两层循环
// function twoSum(nums: number[], target: number): number[] {
//     let ans: number[] = new Array(2)
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = (i + 1); j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 ans[0] = i
//                 ans[1] = j
//             }
//         }
//     }
//     return ans
// }
// let nums: number[] = [2, 7, 11, 15], target: number = 9
// console.log(twoSum(nums, target)) // [ 0, 1 ]

// 解法2，差值查找
// function twoSum(nums: number[], target: number): number[] {
//     let ans: number[] = new Array(2)
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = (i + 1); j < nums.length; j++) {
//             let sub: number = target - nums[i]
//             if (nums[j] === sub) {
//                 ans[0] = i
//                 ans[1] = j
//             }
//         }
//     }
//     return ans
// }
// let nums: number[] = [2, 7, 11, 15], target: number = 9
// console.log(twoSum(nums, target)) // [ 0, 1 ]

// 改进
function twoSum(nums: number[], target: number): number[] {
    let map = new Map()
    let ans: number[] = new Array(2)
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i)
    }
    for (let i = 0; i < nums.length; i++) {
        let sub: number = target - nums[i]
        if (map.has(sub) && map.get(sub) !== i) {
            ans = [i, map.get(sub)]
            return ans
        }
    }
    throw new Error("No two sum solution")
}
let nums: number[] = [2, 7, 11, 15], target: number = 9
console.log(twoSum(nums, target)) // [ 0, 1 ]