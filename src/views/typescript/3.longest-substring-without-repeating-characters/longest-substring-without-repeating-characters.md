# 无重复字符的最长子串

## 题目描述

给定一个字符串`s`，请你找出其中不含有重复字符的`最长子串`的长度。

## 示例

```ts
输入: s = "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
```

## 代码实现

### 实现思路

#### 解法1

利用`ES6`提供的一种新的数据结构`Map`，将字符串遍历成一个`Map`的哈希结构，而`Map`存在这一的一个特性，就是`key`值不会有相同的，当存在相同的`key`的时候就会覆盖，然后更新`value`值。利用这个特性就很容易实现**无重复字符的最长子串**的算法。

```ts
function lengthOfLongestSubstring(s: string): number {
    let result = 0
    let lastIndex = -1
    const map = new Map<string, number>()
    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            lastIndex = Math.max(lastIndex, map.get(s[i])!)
        }
        map.set(s[i], i)
        result = Math.max(result, i - lastIndex)
    }
    return result
};

let s = "abcabcbb"
console.log(lengthOfLongestSubstring(s)) // 3
```

时间复杂度：`O(n)`。

空间复杂度：`O(min（m，n))`。