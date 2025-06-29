export namespace LinkedList {
    class Node {
        constructor(public value: any, public next: Node | null = null) {}
    }

    export class LinkedList {
        private head: Node | null
        private tail: Node | null
        private size: number

        constructor() {
            this.head = null
            this.tail = null
            this.size = 0
        }

        isEmpty() {
            return this.size === 0
        }

        getSize() {
            return this.size
        }

        getHead() {
            return this.head?.value ?? null
        }

        // O(1)
        prepend(value: any) {
            const node = new Node(value)
            if (this.isEmpty()) {
                this.head = node
                this.tail = node
            } else {
                node.next = this.head
                this.head = node
            }
            this.size++
        }

        // O(1)
        append(value: any) {
            const node = new Node(value)
            if (this.isEmpty()) {
                this.head = node
                this.tail = node
            } else {
                this.tail!.next = node
                this.tail = node
            }

            this.size++
        }

        // O(1)
        removeFromFront() {
            if (this.isEmpty()) {
                return null
            }

            const value = this.head!.value
            this.head = this.head!.next
            this.size--

            if (this.size === 0) {
                this.tail = null
            }

            return value
        }

        // O(n)
        removeFromEnd() {
            if (this.isEmpty()) {
                return null
            }

            const value = this.tail!.value
            if (this.size === 1) {
                this.head = null
                this.tail = null
            } else {
                let prevNode = this.head!
                while (prevNode.next !== this.tail) {
                    prevNode = prevNode.next!
                }

                prevNode.next = null
                this.tail = prevNode
            }
            
            this.size--
            return value
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

            this.tail = this.head
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

    // const linkedList = new LinkedList()
    // linkedList.prepend(1)
    // linkedList.append(2)
    // linkedList.append(3)
    // linkedList.print()
    // linkedList.prepend(100)
    // linkedList.print()

    // linkedList.reverse()
    // linkedList.print()
    
    // linkedList.removeFromEnd()
    // linkedList.print()
    // linkedList.removeFromFront()
    // linkedList.removeFromFront()
    // linkedList.print()
    // linkedList.removeFromEnd()
    // linkedList.removeFromEnd()
    // linkedList.print()
    // linkedList.prepend(1)
    // linkedList.append(100)
    // linkedList.print()

    // console.log(linkedList.search(5))
    // console.log(linkedList.search(2))
    // console.log(linkedList.search(1))
    // console.log(linkedList.search(100))
}