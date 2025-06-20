// Return the index of the target element in the sorted array, or -1 if not found.
// Note: Works for sorted arrays only

// My solution
function binarySearch(array: number[], target: number): number {
    if (array.length === 2) {
        if (array[0] === target) {
            return 0
        }
        if (array[1] === target) {
            return 1
        }
        return -1
    }

    let leftIdx = 0;
    let rightIdx = array.length - 1;

    const middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    
    const middleElem = array[middleIdx]!
    
    if (middleElem === target) {
        return middleIdx
    }
    
    let subArray = []
    if (middleElem < target) {
        subArray = array.slice(middleIdx)
    } else {
        subArray = array.slice(leftIdx, middleIdx)
    }
    
    const index = binarySearch(subArray, target)
    
    if (index > -1) {
        if (middleElem < target) {
            return middleIdx + index
        } else {
            return index
        }
    }
    
    return -1
}

// Big-O Time Complexity: O(log n)
console.log("My solution:")
console.log(binarySearch([1, 2, 3, 4, 5, 6], 1));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearch([1, 2, 3, 4, 5, 6], 20));
console.log(binarySearch([1, 2, 3, 4, 5, 6], -20));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));


// The solution from the course
function binarySearchRecursive(array: number[], target: number): number {
    return search(array, target, 0, array.length - 1)
}

function search(array: number[], target: number, leftIdx: number, rightIdx: number): number {
    if (leftIdx > rightIdx) {
        return -1
    }

    const middleIdx = Math.floor((leftIdx + rightIdx) / 2)
    const middleElem = array[middleIdx]!

    if (middleElem === target) {
        return middleIdx
    }

    if (middleElem < target) {
        return search(array, target, middleIdx + 1, rightIdx)
    } else {
        return search(array, target, leftIdx, middleIdx - 1)
    }
}

// Big-O Time Complexity: O(log n)
console.log("The solution from the course:")
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 1));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 2));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 3));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 4));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 5));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 6));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], 20));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6], -20));
console.log(binarySearchRecursive([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));