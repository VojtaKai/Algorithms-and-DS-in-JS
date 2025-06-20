// Search an element t in an array. Return the index of the element if found, otherwise return -1.
// Note: Works for unsorted arrays as well

function linearSearch(array: number[], target: number): number {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i
        }
    }

    return -1
}

// Big-O Time Complexity: O(n)

console.log(linearSearch([5, 2, 10, 4, 6], 10));
console.log(linearSearch([5, 2, 10, 4, 6], 6));
console.log(linearSearch([5, 2, 10, 4, 6], 20));