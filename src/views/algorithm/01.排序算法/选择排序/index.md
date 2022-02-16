# 选择排序

## 排序方法

每次循环选取一个最小的数字放到前面的有序序列中。

## 实现算法

```ts
function selectionSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j
            }
        }
        [array[minIndex], array[i]] = [array[i], array[minIndex]]
    }
    return array
}

const array: number[] = [6, 5, 4, 3, 7, 1, 2]

console.log(selectionSort(array))
/* 
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### 运行截图

![](https://raw.githubusercontent.com/dpy0912/PicGo/main/fix-dir/Roaming/picgo/2022/02/16/14-00-55-4bb4faea88b1b76873f2ec3256815b92-20220216140054-a4e86.png)

### 复杂度

- 时间复杂度：`O(n2)`。
- 空间复杂度：`O(1)`。

### 稳定性

该算法不稳定。