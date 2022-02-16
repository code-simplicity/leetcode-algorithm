function bubbleSort(array: number[]) {
    for (let i = 0; i < array.length; i++) {
        let complete = true;
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]]
                complete = false
            }
        }
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