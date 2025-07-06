namespace GraphAdjacencyMatrix {
    const matrix = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0]
    ]

    console.log(`Connection between node A and B exists: ${matrix![0]![1] ? true : false}`)
    console.log(`Connection between node A and C exists: ${matrix![0]![0] ? true : false}`)
}