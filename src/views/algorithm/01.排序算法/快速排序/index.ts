// 写法1
// function quickSort(array: number[]): any {
//     if (array.length < 2) {
//         return array
//     }
//     let target: number = array[0]
//     let left: number[] = []
//     let right: number[] = []
//     for (let i = 1; i < array.length; i++) {
//         if (array[i] < target) {
//             left.push(array[i])
//         } else {
//             right.push(array[i])
//         }
//     }
//     return quickSort(left).concat([target], quickSort(right))
// }

// const array: number[] = [6, 5, 4, 3, 7, 1, 2]
// console.log(quickSort(array))
// /*
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// */

// 写法2
// function quickSort(array: number[], start: any, end: any): any {
//     if (end - start < 1) {
//         return;
//     }
//     const target = array[start];
//     let l = start;
//     let r = end;
//     while (l < r) {
//         while (l < r && array[r] >= target) {
//             r--;
//         }
//         array[l] = array[r];
//         while (l < r && array[l] < target) {
//             l++;
//         }
//         array[r] = array[l];
//     }
//     array[l] = target;
//     quickSort(array, start, l - 1);
//     quickSort(array, l + 1, end);
//     return array;
// }

// const array: number[] = [6, 5, 4, 3, 7, 1, 2]

// console.log(quickSort(array, 0, array.length))