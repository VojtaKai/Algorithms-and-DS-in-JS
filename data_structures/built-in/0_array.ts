namespace Arrays {
    const arr = [1,2,3, 'Vojtech', true, {name: 'Vojtech'}]
    console.log(arr[0]) // 1

    for (const item of arr) {
        console.log(item)
    }

    arr.push(4) // add the element to the end of the array
    arr.unshift(0) // add the element to the beginning of the array
    arr.pop() // remove the last element and return it
    arr.shift() // "pop" but for the first element

    // map, filter, reduce, concat, slice, splice, find, findIndex, includes, reverse, sort

    const numbers = [1, 2, 3, 4, 5]
    const names = ['Vojtech', 'John', 'Jane', 'Jim', 'Jill', 'Lill']

    numbers.map((item) => item * 2)
    numbers.filter((item) => item > 2)
    numbers.reduce((acc, cur) => acc + cur, 0)
    arr.concat([5, 6, 7]) // return a new array with the elements of the original array and the new elements
    arr.slice(2, 4) // return a new array with the elements from index 2 to 4 (4 not included)
    arr.splice(2, 2) // remove 2 elements starting from index 2
    arr.find((item) => item === 'Vojtech')
    arr.findIndex((item) => item === 'Vojtech')
    arr.reverse()

    arr.forEach((item) => console.log(item))
    arr.includes(2)
    arr.sort()

    numbers.sort((a, b) => a - b)
    numbers.sort((a, b) => b - a)

    names.sort((a, b) => a.localeCompare(b))
    console.log(names)
    names.sort((a, b) => b.localeCompare(a))
    console.log(names)

    // Big O Time Complexity
    // Insert / remove from the end = O(1)
    // Insert / remove from the beginning = O(n) - because the index has to be reset for all the remaining elements
    // Insert / remove from the middle = O(n) - because the index has to be reset for all the remaining elements
    // Access = O(1)
    // Search = O(n)

    // Push / pop - O(1)
    // Shift, unshift, concat, slice, splice, reverse - O(n)
    // forEach, map, filter, reduce, find, findIndex, includes - O(n)
    // Sort = O(n log n)
}