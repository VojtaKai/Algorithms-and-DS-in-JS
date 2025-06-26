// given an array of numbers, sort them in ascending order
namespace SortAlgorithms {
    // nested for loop
    function bubbleSort(array: number[]): number[] {
        let isSorted = true
        let iterations = 0
        for (let j = 0; j < array.length; j++) {
            isSorted = true
            for (let i = 0; i < array.length - 1; i++) {
                iterations++
                const elem = array[i]!
                const nextElem = array[i + 1]!
                if (elem > nextElem) {
                    array[i] = nextElem
                    array[i + 1] = elem
                    isSorted = false
                }
            }
            if (isSorted) {
                break
            }
        }
        console.log(`iterations: ${iterations}`)
        return array
    }

    // do-while loop
    function bubbleSort2(array: number[]): number[] {
        let isSorted = true
        let iterations = 0
        do {
            isSorted = true
            for (let i = 0; i < array.length - 1; i++) {
                iterations++
                const elem = array[i]!
                const nextElem = array[i + 1]!
                if (elem > nextElem) {
                    array[i] = nextElem
                    array[i + 1] = elem
                    isSorted = false
                }
            }
        } while (!isSorted)

        console.log(`iterations: ${iterations}`)

        return array
    }


    // Big-O Time Complexity: O(n^2)

    console.log(bubbleSort([5, -3, 8, -4, 20, 6]))
    console.log(bubbleSort([-6, 20, 8, -2, 4]))
    console.log(bubbleSort([400, 5, -3, 8, -4, 20, 100, 1000, 10000, -100000, 1000000]))
    console.log(bubbleSort([-10, -5, 0, 5, 10])) // already sorted
    console.log(bubbleSort([10, 5, 0, -5, -10])) // sorted in descending order

    console.log('========= bubbleSort2 =========')
    console.log(bubbleSort2([5, -3, 8, -4, 20, 6]))
    console.log(bubbleSort2([-6, 20, 8, -2, 4]))
    console.log(bubbleSort2([400, 5, -3, 8, -4, 20, 100, 1000, 10000, -100000, 1000000]))
    console.log(bubbleSort2([-10, -5, 0, 5, 10])) // already sorted
    console.log(bubbleSort2([10, 5, 0, -5, -10])) // sorted in descending order
}