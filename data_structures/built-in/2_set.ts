namespace Sets {
    const set = new Set([1, 2, 3, 4, 5, 'beer'])

    // add a new element
    set.add(6)

    // delete an element
    set.delete(6)

    // check if an element exists
    set.has(6) 

    // get the size of the set
    console.log('size', set.size)

    // clear the set
    set.clear()

    // iterate over the set
    for (const item of set) {
        console.log(item)
    }

    // Big O
    // Insert / delete / search (has) - O(1)
    // Clear - O(n)
    // Iteration - O(n)
    // Size - O(1)
}