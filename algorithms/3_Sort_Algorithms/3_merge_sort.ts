namespace SortingAlgorithms {
    function mergeSort(array: number[]): number[] {
        if (array.length <= 1) {
            return array
        }

        const midIndex = Math.floor(array.length / 2)
        const left = array.slice(0, midIndex)
        const right = array.slice(midIndex)

        // log n complexity while the arrays are halved each time ( more like 2 * log n but the two is not significant)
        return merge(mergeSort(left), mergeSort(right))
    }

    function merge(left: number[], right: number[]): number[] {
        const sortedArray: number[] = []

        // n complexity
        while (left.length > 0 && right.length > 0) {
            if (left[0]! <= right[0]!) {
                sortedArray.push(left.shift()!)
            } else {
                sortedArray.push(right.shift()!)
            }
        }

        return sortedArray.concat(left).concat(right)
    }

    // Big-O Time Complexity (Worst Case): O(n log n) - n is for the for loop and log n is for the recursive calls where the array is "halved" each time

    console.log(mergeSort([10, 5, 3, 8, 2, 6, 4, 7, 9]))
    console.log(mergeSort([-100, -10, -5, 0, 5, 10, 100]))
    console.log(mergeSort([100, 10, 5, 0, -5, -10, -100]))
}