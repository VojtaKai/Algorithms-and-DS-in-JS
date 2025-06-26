// given an array of numbers, sort them in ascending order
namespace SortAlgorithms {
    function insertionSort(array: number[]): number[] {
        let iterations = 0
        for (let i = 1; i < array.length; i++) {
            const numberToInsert = array[i]!


            // You can use while loop or for loop to iterate through the sorted part of the array

            // for (let j = i - 1; j >= 0; j--) {
            //     iterations++
            //     if (nti < array[j]!) {
            //         array[j + 1] = array[j]!
            //         array[j] = nti
            //     } else {
            //         break
            //     }
            // }


            let j = i - 1

            while (j >= 0) {
                iterations++
                const elem = array[j]!
                if (elem > numberToInsert) {
                    array[j + 1] = elem
                    array[j] = numberToInsert
                } else {
                    break
                }
                j--
            }
            iterations++
        }

        console.log(`iterations: ${iterations}`)
        return array
    }


    function insertionSortTutorialSolution(array: number[]): number[] {
        let iterations = 0
        for (let i = 1; i < array.length; i++) {
            const numberToInsert = array[i]!

            let j = i - 1
            while (j >= 0 && array[j]! > numberToInsert) {
                iterations++
                array[j + 1] = array[j]!
                j--
            }
            array[j + 1] = numberToInsert
            iterations++
        }

        console.log(`iterations: ${iterations}`)
        return array
    }

    // Big-O Time Complexity: O(n^2)

    console.log(insertionSort([5, -3, 8, -4, 20, 6]))
    console.log(insertionSort([-6, 20, 8, -2, 4]))
    console.log(insertionSort([400, 5, -3, 8, -4, 20, 100, 1000, 10000, -100000, 1000000]))
    console.log(insertionSort([-10, -5, 0, 5, 10])) // already sorted
    console.log(insertionSort([10, 5, 0, -5, -10])) // sorted in descending order

    console.log('--------------- Tutorial Solution ---------------')
    console.log(insertionSortTutorialSolution([5, -3, 8, -4, 20, 6]))
    console.log(insertionSortTutorialSolution([-6, 20, 8, -2, 4]))
    console.log(insertionSortTutorialSolution([400, 5, -3, 8, -4, 20, 100, 1000, 10000, -100000, 1000000]))
    console.log(insertionSortTutorialSolution([-10, -5, 0, 5, 10])) // already sorted
    console.log(insertionSortTutorialSolution([10, 5, 0, -5, -10])) // sorted in descending order
}