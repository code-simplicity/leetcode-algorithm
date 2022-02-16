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