# 归并排序

## 排序方法

**归并排序**算法是采用分治法的一个非常典型的应用（分治法将问题分解成一些小的问题，然后递归求解，而治的阶段则将分的阶段得到的答案“修补”在一起，即分而治理）。

- 将已有序列的子序列合并，得到完全有序的序列。
- 即先使得每个子序列有序，再使得子序列段有序。
- 若将两个有序表合成一个有序表，成为二路归并。

### 分割

- 将数组从中间进行分割，分为左右两个数组。
- 递归分割左右数组，直到数组长度小于`2`。

### 归并

如果需要合并，那么左右两数组已经有序了。

创建一个临时存储数组`temp`，比较两个数组第一个元素，将小的元素加到临时数组。

若左右数组有一个为空，那么此时另外一个数组一定大于`temp`中的所有元素，直接将其所有元素加入到`temp`。

## 算法实现

### 实现1

分割数组时直接将数组分割为两个数组，合并时直接合并数组。

该算法思路简单，写法容易，缺点就是空间复杂度高，需要复制多个数组。

```ts
// 算法1
function mergeSort(array: number[]): number[] {
    if (array.length < 2) {
        return array
    }
    const mid = Math.floor(array.length / 2)
    const start = array.slice(0, mid)
    const end = array.slice(mid)
    return merge(mergeSort(start), mergeSort(end))
}

function merge(start: number[], end: number[]) {
    let temp: any[] = []
    while (start.length && end.length) {
        // 比较第一个元素
        if (start[0] < end[0]) {
            temp.push(start.shift())
        } else {
            temp.push(end.shift())
        }
    }
    while (start.length) {
        temp.push(start.shift())
    }

    while (end.length) {
        temp.push(end.shift())
    }
    return temp
}

const array2: number[] = [6, 5, 4, 3, 7, 1, 2]

console.log(mergeSort(array2))
/* 
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### 实现截图

![](https://raw.githubusercontent.com/dpy0912/PicGo/main/fix-dir/Roaming/picgo/2022/02/16/16-32-37-152ae6a397fb5eba6f7ce14113be66fc-20220216163236-0ce7f.png)

### 实现2

记录数组的索引，使得`left`和`right`两个索引来限定当前分割的数组。

该算法空间复杂度低，只需要一个`temp`存储空间，不需要拷贝数组，但是写法比较复杂。

```ts
function mergeSort(array: number[], left: number, right: number, temp: number[]) {
    if (left < right) {
        const mid = Math.floor((left + right) / 2);
        mergeSort(array, left, mid, temp)
        mergeSort(array, mid + 1, right, temp)
        merge(array, left, right, temp);
    }
    return array;
}

function merge(array: number[], left: number, right: number, temp: number[]) {
    const mid = Math.floor((left + right) / 2);
    let leftIndex = left;
    let rightIndex = mid + 1;
    let tempIndex = 0;
    while (leftIndex <= mid && rightIndex <= right) {
        if (array[leftIndex] < array[rightIndex]) {
            temp[tempIndex++] = array[leftIndex++]
        } else {
            temp[tempIndex++] = array[rightIndex++]
        }
    }
    while (leftIndex <= mid) {
        temp[tempIndex++] = array[leftIndex++]
    }
    while (rightIndex <= right) {
        temp[tempIndex++] = array[rightIndex++]
    }
    tempIndex = 0;
    for (let i = left; i <= right; i++) {
        array[i] = temp[tempIndex++];
    }
}

const array2: number[] = [6, 5, 4, 3, 7, 1, 2]
const temp: number[] = []
const left = 0
const right = array2.length - 1
console.log(mergeSort(array2, left, right, temp))
/* 
[
  1, 2, 3, 4,
  5, 6, 7
]
*/
```

### 实现截图

![](https://raw.githubusercontent.com/dpy0912/PicGo/main/fix-dir/Roaming/picgo/2022/02/16/19-15-46-7714009179fff5a82378e41cb3b2767d-20220216191546-69e5e.png)

### 复杂度

- 时间复杂度：`O(nlogn)`。
- 空间复杂度：`O(n)`。

### 稳定性

该算法稳定。