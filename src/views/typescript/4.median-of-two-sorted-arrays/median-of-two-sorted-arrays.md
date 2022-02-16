# 寻找两个正序数组的中位数

## 题目描述

给定两个大小分别为`m`和`n`的正序（从小到大）数组`nums1`和`nums2`。请你找出并返回这两个正序数组的`中位数`。

算法的时间复杂度应该为`O(log (m+n))` 。

## 示例

```ts
输入：nums1 = [1,3], nums2 = [2]
输出：2.00000
解释：合并数组 = [1,2,3] ，中位数 2
```

## 代码实现

```ts
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let len1 = nums1.length;
    let len2 = nums2.length;
    let total = len1 + len2;
    let rest = Math.floor(total / 2) - 1;
    let rest1 = len1;
    let rest2 = len2;
    let last1;
    let last2;

    while (rest) {
        if (!rest1) {
            rest2 -= rest;
            rest = 0;
        } else if (!rest2) {
            rest1 -= rest;
            rest = 0;
        } else {
            if (rest === 1) {
                let last1 = nums1[len1 - (rest1 - 1) - 1];
                let last2 = nums2[len2 - (rest2 - 1) - 1];
                if (last2 > last1) {
                    rest1--;
                } else {
                    rest2--;
                }
                rest--;
            } else {
                let half = Math.floor(rest / 2);
                let select1 = half;
                let select2 = rest - select1;
                if (rest1 < rest2 && select1 > rest1) {
                    select1 = rest1;
                    select2 = rest - select1;
                } else if (rest2 < rest1 && select2 > rest2) {
                    select2 = rest2;
                    select1 = rest - select2;
                }
                last1 = nums1[len1 - (rest1 - select1) - 1];
                last2 = nums2[len2 - (rest2 - select2) - 1];
                if (last1 > last2) {
                    rest -= select2;
                    rest2 -= select2;
                } else {
                    rest -= select1;
                    rest1 -= select1;
                }
            }
        }
    }

    let middle;
    if (!rest1) {
        middle = nums2[len2 - (rest2 - 1) - 1];
        rest2--;
    } else if (!rest2) {
        middle = nums1[len1 - (rest1 - 1) - 1];
        rest1--;
    } else {
        let last1 = nums1[len1 - (rest1 - 1) - 1];
        let last2 = nums2[len2 - (rest2 - 1) - 1];
        if (last1 > last2) {
            middle = last2;
            rest2--;
        } else {
            middle = last1;
            rest1--;
        }
    }

    let midNext;
    if (!rest1) {
        midNext = nums2[len2 - (rest2 - 1) - 1];
    } else if (!rest2) {
        midNext = nums1[len1 - (rest1 - 1) - 1];
    } else {
        let last1 = nums1[len1 - (rest1 - 1) - 1];
        let last2 = nums2[len2 - (rest2 - 1) - 1];
        midNext = Math.min(last1, last2);
    }

    let isOdd = total % 2;
    if (isOdd) {
        return midNext;
    } else {
        return (middle + midNext) / 2;
    }
}
let nums1: number[] = [1, 3], nums2: number[] = [2]
console.log(findMedianSortedArrays(nums1, nums2
```