// 算法1
// function mergeSort(array: number[]): number[] {
//     if (array.length < 2) {
//         return array
//     }
//     const mid = Math.floor(array.length / 2)
//     const start = array.slice(0, mid)
//     const end = array.slice(mid)
//     return merge(mergeSort(start), mergeSort(end))
// }

// function merge(start: number[], end: number[]) {
//     let temp: any[] = []
//     while (start.length && end.length) {
//         // 比较第一个元素
//         if (start[0] < end[0]) {
//             temp.push(start.shift())
//         } else {
//             temp.push(end.shift())
//         }
//     }
//     while (start.length) {
//         temp.push(start.shift())
//     }

//     while (end.length) {
//         temp.push(end.shift())
//     }
//     return temp
// }

// const array2: number[] = [6, 5, 4, 3, 7, 1, 2]

// console.log(mergeSort(array2))
/* 
[
  1, 2, 3, 4,
  5, 6, 7
]
*/

// 写法2
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