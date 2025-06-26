namespace SortingAlgorithms {
    function quickSort(array: number[]): number[] {
        if (array.length <= 1) return array

        const pivot = array[array.length - 1]!
        const left: number[] = []
        const right: number[] = []

        // array.length - 1 because we are not including the pivot element in the loop
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i]! < pivot) {
                left.push(array[i]!)
            } else {
                right.push(array[i]!)
            }
        }

        return quickSort(left).concat([pivot]).concat(quickSort(right))
    }

    function quickSortInPlace(arr: number[], left = 0, right = arr.length - 1) {
        if (left < right) {
          const pivot = partition(arr, left, right)
          quickSortInPlace(arr, left, pivot - 1)
          quickSortInPlace(arr, pivot + 1, right)
        }
        return arr
    }
      
    function partition(arr: number[], left: number, right: number) {
        const pivot = arr[right]!
        let i = left
        for (let j = left; j < right; j++) {
          if (arr[j]! < pivot) {
            swap(arr, i, j)
            i++
          }
        }
        swap(arr, i, right)
        return i
    }
      
    function swap(arr: number[], i: number, j: number) {
        const temp = arr[i]!
        arr[i] = arr[j]!
        arr[j] = temp
    }

    // Big-O Time Complexity (Worst Case - for already sorted array): O(n^2) - n is for the for loop and n is for the recursive calls (many recursive calls are sum of (n - i) where i the iteration for the pair of recrusive calls - n + (n - 1) + (n - 2) + ... + 1 = n(n + 1) / 2 = n^2 / 2 + n / 2 = O(n^2))
    // Big-O Time Complexity (Average Case - well distributed numbers in the array): O(n log n) - n is for the for loop and log n is for the recursive calls where the array is "halved" each time
      
    console.log(quickSort([5, -3, 8, -4, 20, 6]))
    console.log(quickSort([-1, -8, 100, 19, 21, 7, 1, 2, 1, 1, 3]))
    console.log(quickSort([-6, 20, 8, -2, 4]))
    console.log(quickSort([400, 5, -3, 8, -4, 20, 100, 1000, 10000, -100000, 1000000]))
    console.log(quickSort([-10, -5, 0, 5, 10])) // already sorted
    console.log(quickSort([10, 5, 0, -5, -10])) // sorted in descending order

    console.log('--------------- In Place ---------------')
    console.log(quickSortInPlace([5, -3, 8, -4, 20, 6]))
    console.log(quickSortInPlace([-6, 20, 8, -2, 4]))
    console.log(quickSortInPlace([400, 5, -3, 8, -4, 20, 100, 1000, 10000, -100000, 1000000]))
    console.log(quickSortInPlace([-10, -5, 0, 5, 10])) // already sorted
    console.log(quickSortInPlace([10, 5, 0, -5, -10])) // sorted in descending order

}