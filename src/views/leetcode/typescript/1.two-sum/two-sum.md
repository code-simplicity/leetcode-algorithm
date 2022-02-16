# 两数之和

## 题目描述

给定一个整数数组`nums`和一个整数目标值`target`，请你在该数组中找出 和为目标值`target`的那两个整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

你可以按任意顺序返回答案。

## 示例

```ts
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```

## 代码实现

### 解法1，两层循环

利用循环机制，两层循环，遍历出所有情况，然后进行相加查看是否等于目标值，如果符合直接输出下标。

```ts
function twoSum(nums: number[], target: number): number[] {
    let ans: number[] = new Array(2)
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                ans[0] = i
                ans[1] = j
            }
        }
    }
    return ans
}
let nums: number[] = [2, 7, 11, 15], target: number = 9
console.log(twoSum(nums, target)) // [ 0, 1 ]
```

时间复杂度为`O(n²)`。

空间复杂度`O(1)`。

### 解法2，差值查找

改变上面第二个`for`循环代码块的逻辑，利用目标值`target`与第一层`for`循环所得的值进行差值运算，得到一个`sub`的差值，再从数组`nums[j]`中找出与`sub`相等的值，如果存在就输出。

```ts
function twoSum(nums: number[], target: number): number[] {
    let ans: number[] = new Array(2)
    for (let i = 0; i < nums.length; i++) {
        for (let j = (i + 1); j < nums.length; j++) {
            let sub: number = target - nums[i]
            if (nums[j] === sub) {
                ans[0] = i
                ans[1] = j
            }
        }
    }
    return ans
}
let nums: number[] = [2, 7, 11, 15], target: number = 9
console.log(twoSum(nums, target)) // [ 0, 1 ]
```

上面的代码可以做一个改进，不管是解法一还是解法二，都是在第二层`for`循环上遍历所有元素，看看哪一个值是否满足条件等式，解法二的时间复杂度为`O(n)`。

空间复杂度`O(1)`。

#### 使用Map表进行改进

`Map`是`ES6`新引入的一种数据结构，类似于数组的对象，叫做`哈希表`。这块知识可以去`ES6`手册查看，这里不再赘述。

我们可以将数组的每个元素保存为`hash`的`key`，下标保存为`hash`的`value`，这样只需判断`sub`是否存在`hash`的`key`中就可以，目前时间复杂度为`O(1)`。

```ts
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
```

时间复杂度：`O(n)`。

空间复杂度：`O(n)`，因为新开辟了一个*哈希表*。

## 总结

这是一道非常简单的算法题，考察的就是对数组这种数据结构的一些应用，当然我们也使用了`ES6`语法的`Map`这种数据结构，使得时间复杂度从`O(n²)`变为`O(n)`。也算是复习了一下`Map`数据结构的使用场景以及一些内置方法。