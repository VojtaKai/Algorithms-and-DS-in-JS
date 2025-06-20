// Return the index of the target element in the sorted array, or -1 if not found.
// Note: Works for sorted arrays only
namespace SearchAlgorithms {
    function binarySearch(array: number[], target: number): number {
        let leftIdx = 0;
        let rightIdx = array.length - 1;

        while (leftIdx <= rightIdx) {
            const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

            const middleElem = array[middleIdx]!;

            if (middleElem === target) {
                return middleIdx;
            }
            
            if (middleElem < target) {
                leftIdx = middleIdx + 1;
            } else {
                rightIdx = middleIdx - 1;
            }
        }

        return -1;
    }

    // Big-O Time Complexity: O(log n)

    console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
    console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
    console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
    console.log(binarySearch([1, 2, 3, 4, 5, 6], 20));
}