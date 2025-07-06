namespace GraphAdjacencyList {
    const adjacencyList = {
        "A": ["B"],
        "B": ["A", "C"],
        "C": ["B"],
    }

    console.log(`Connection between node A and B exists: ${adjacencyList["A"].includes("B")}`)
    console.log(`Connection between node A and C exists: ${adjacencyList["A"].includes("C")}`)

    class Graph {
        private adjacencyList: Map<string, Set<string>> = new Map()

        addVertex(vertex: string) {            
            if (!this.adjacencyList.has(vertex)) {
                this.adjacencyList.set(vertex, new Set())
            }
        }

        addEdge(vertex: string, adjacentVertex: string) {
            this.addVertex(vertex)
            this.addVertex(adjacentVertex)
            this.adjacencyList.get(vertex)!.add(adjacentVertex)
            // because undirected graphs
            this.adjacencyList.get(adjacentVertex)!.add(vertex)
        }

        display() {
            for (let [vertex, adjacentVerteces] of this.adjacencyList) {
                console.log(`${vertex} -> ${Array.from(adjacentVerteces)}`)
            }
        }

        hasEdge(vertex: string, adjacentVertex: string) {
            const hasEdge = this.adjacencyList.get(vertex)?.has(adjacentVertex) && this.adjacencyList.get(adjacentVertex)?.has(vertex)
            console.log(`Edge between ${vertex} and ${adjacentVertex} ${hasEdge ? "exists" : "doesn't exist"}.`)
            return hasEdge
        }

        removeEdge(vertex: string, adjacentVertex: string) {
            this.adjacencyList.get(vertex)?.delete(adjacentVertex)
            this.adjacencyList.get(adjacentVertex)?.delete(vertex)
        }

        removeVertex(vertex: string) {
            const adjacentVerteces = this.adjacencyList.get(vertex)

            if (adjacentVerteces) {
                for (let adjVertex of adjacentVerteces) {
                    this.removeEdge(vertex, adjVertex)
                }
            }

            this.adjacencyList.delete(vertex)
        }
    }

    const graph = new Graph()
    graph.addVertex("A")
    graph.addVertex("B")
    graph.addVertex("C")
    graph.addEdge("A", "B")
    graph.addEdge("C", "B")
    graph.addEdge("C", "D")
    graph.display()
    graph.hasEdge("A", "B")
    graph.hasEdge("A", "E")
    graph.removeEdge("A", "B")
    graph.display()
    console.log('====')
    graph.removeVertex("C")
    graph.display()
}