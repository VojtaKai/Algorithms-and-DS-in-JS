namespace LinkedList {
    class Node {
        constructor(public value: any, public next: Node | null = null) {}
    }

    class LinkedList {
        private head: Node | null
        private size: number

        constructor() {
            this.head = null
            this.size = 0
        }

        // O(1)
        prepend(value: any) {
            const node = new Node(value)
            if (!this.isEmpty()) {
                node.next = this.head
            }
            this.head = node
            this.size++
        }

        // O(n)
        append(value: any) {
            const node = new Node(value)
            if (this.isEmpty()) {
                this.head = node
            } else {
                let prevNode = this.head
                while (prevNode!.next) {
                    prevNode = prevNode!.next
                }
                prevNode!.next = node
            }

            this.size++
        }

        isEmpty() {
            return this.size === 0
        }

        getSize() {
            return this.size
        }

        insert(value: any, index: number) {
            if (index < 0 || index > this.size) {
                console.log("Index out of bounds")
                return 
            }

            if (index === 0) {
                this.prepend(value)
            } else {
                let beforeNode = this.head!
                let i = 0
                while (i != index - 1) {
                    beforeNode = beforeNode.next!
                    i++
                }

                const afterNode = beforeNode.next

                beforeNode.next = new Node(value, afterNode)

                this.size++
            }
        }

        removeByIndex(index: number) {
            if (index < 0 || index >= this.size) {
                console.log("Index out of bounds")
                return
            }

            if (index === 0) {
                this.head = this.head!.next
            } else {
                // find the node before the node to remove
                let nodeBeforeNodeToRemove = this.head!
                let i = 0
                while (i < index - 1) {
                    nodeBeforeNodeToRemove = nodeBeforeNodeToRemove.next!
                    i++
                }

                const nodeToRemove = nodeBeforeNodeToRemove.next
                nodeBeforeNodeToRemove.next = nodeToRemove!.next
            }

            this.size--
        }

        removeByValue(value: any) {
            let currentNode = this.head
            let i = 0         

            while (currentNode) {
                if (currentNode!.value === value) {
                    // removes all elements with the same value
                    this.removeByIndex(i)

                    // if you want to remove only the first element
                    // return
                }
                currentNode = currentNode!.next
                i++
            }
        }

        search(value: any) {
            if (this.isEmpty()) {
                return -1
            }

            let currentNode = this.head
            let i = 0
            while (currentNode) {
                if (currentNode!.value === value) {
                    return i
                }
                currentNode = currentNode!.next
                i++
            }

            return -1
        }

        reverse() {
            if (this.isEmpty()) {
                return
            }

            let previousNode = null
            let currentNode = this.head

            while (currentNode) {
                const nextNode = currentNode!.next
                currentNode!.next = previousNode

                previousNode = currentNode
                currentNode = nextNode
            }

            this.head = previousNode
        }

        print() {
            if (this.isEmpty()) {
                console.log("Linked List is empty")
                return
            }

            let currentNode = this.head
            let text = "LinkedList: "
            while (currentNode!.next) {
                text += `${currentNode!.value} -> `
                currentNode = currentNode!.next
            }

            text += `${currentNode!.value}`

            console.log(text)
        }
    }

    const linkedList = new LinkedList()
    linkedList.prepend(1)
    linkedList.append(2)
    linkedList.append(3)
    linkedList.append(4)
    linkedList.append(5)
    linkedList.print()
    linkedList.insert(10, 0)
    linkedList.insert(20, 6)
    linkedList.insert(30, 4)
    linkedList.insert(100, 9) // out of bounds
    linkedList.prepend(100)
    linkedList.print()

    linkedList.reverse()
    linkedList.print()
    
    linkedList.removeByIndex(0)
    linkedList.print()
    linkedList.removeByIndex(linkedList.getSize()) // out of bounds
    linkedList.print()
    linkedList.removeByIndex(linkedList.getSize() - 1)
    linkedList.print()
    linkedList.removeByIndex(2)
    linkedList.print()

    linkedList.removeByValue(30) // no element with value 30
    linkedList.print()

    linkedList.removeByValue(3) // will remove the element with value 3
    linkedList.print()

    console.log(linkedList.search(5))
    console.log(linkedList.search(2))
    console.log(linkedList.search(1))
    console.log(linkedList.search(100))
}