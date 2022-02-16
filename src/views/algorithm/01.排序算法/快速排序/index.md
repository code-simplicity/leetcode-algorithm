# 快速排序

## 排序方法

**快速排序**是通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另外一部分的所有数据都要小，再按照这个方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使得整个数据变成有序序列。

## 实现步骤

- 选择一个基准元素`target`（一般选择第一个数）。
- 将比`target`小的元素移动到数组左边，比`target`大的元素移动到数组右边。
- 分别对`target`左侧和右侧的元素进行快速排序。

排序也是利用分治的思想将一些问题递归求解。

## 实现算法

### 算法1

单独开辟两个数组`left`和`right`，`left`用来存储比`target`目标值小的元素，`right`用来存储比`target`大的元素，每次递归之后直接返回`left`，`target`，`right`拼接成的数组。

这个写法不好的地方就是需要开辟大量的存储空间，优点就是实现简单。

```ts
function quickSort(array: number[]): any {
    if (array.length < 2) {
        return array
    }
    let target: number = array[0]
    let left: number[] = []
    let right: number[] = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] < target) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }
    return quickSort(left).concat([target], quickSort(right))
}

const array: number[] = [6, 5, 4, 3, 7, 1, 2]
console.log(quickSort(array))
/* 
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### 编译结果

![](https://raw.githubusercontent.com/dpy0912/PicGo/main/fix-dir/Roaming/picgo/2022/02/16/12-47-53-d2862632bf1d783cbaa28c95990553f2-20220216124753-71707.png)

### 复杂度

- 时间复杂度：平均`O(nlogn)`。
- 空间复杂度：`O(logn)`。

### 稳定性

不稳定的排序。