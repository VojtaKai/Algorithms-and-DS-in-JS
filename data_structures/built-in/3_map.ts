namespace Maps {
    const map = new Map([['a', 1], ['b', 2], ['c', 3]])

    // add a new key-value pair
    map.set('d', 4)

    // delete a key-value pair
    map.delete('d')

    // check if a key exists
    map.has('d')

    // get a value by key
    const valueA = map.get('a')
    console.log('valueA', valueA)

    // get the size of the map
    console.log('size', map.size)

    
    for (const [key, value] of map) {
        console.log(key, value)
    }

    // clear the map
    map.clear()

    // Big O
    // Insert / delete / Access (get) / Search (has) - O(1)
    // Clear - O(n)
    // Iteration - O(n)
    // Size - O(1)
}