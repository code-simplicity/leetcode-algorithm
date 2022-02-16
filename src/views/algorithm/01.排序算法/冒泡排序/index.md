# 冒泡排序

## 排序方法

循环数组，比较当前元素和下一个元素，如果当前一个元素比下一个元素大，向上冒泡。

一次循环之后最后一个数就是本数组最大的数。

下一次循环继续上面的操作，不循环已经排好的数。

### 优化

当一次循环没有发生冒泡，说明已经排序完，应该停止冒泡。

## 算法实现

```ts
function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        let complete = true
        for (let j = 0; j < array.length - 1 - i; j++) {
            // 比较相邻元素
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                complete = false
            }
        }
        // 没有冒泡结束循环
        if (complete) {
            break
        }
    }
    return array
}

const array1: number[] = [6, 5, 4, 3, 7, 1, 2]

console.log(bubbleSort(array1))
/* 
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### 运行截图

![](https://raw.githubusercontent.com/dpy0912/PicGo/main/fix-dir/Roaming/picgo/2022/02/16/15-12-15-e965f24d7cafd25bddd8e155d695d271-20220216151214-a17b9.png)

### 复杂度

- 时间复杂度：`O(n2)`。
- 空间复杂度：`O(1)`。

### 稳定性

该算法稳定。