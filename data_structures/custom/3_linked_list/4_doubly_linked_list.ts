namespace DoublyLinkedList {
    class Node {
        constructor(public value: any, public previous: Node | null = null, public next: Node | null = null) {}
    }

    class DoublyLinkedList {
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
                this.head!.previous = node 
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
                node.previous = this.tail
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
            this.head!.previous = null
            this.size--

            if (this.size === 0) {
                this.tail = null
            }

            return value
        }

        // O(1)
        removeFromEnd() {
            if (this.isEmpty()) {
                return null
            }

            const value = this.tail!.value
            if (this.size === 1) {
                this.head = null
                this.tail = null
            } else {
                let prevNode = this.tail!.previous!
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

        printReverse() {
            if (this.isEmpty()) {
                console.log("Linked List is empty")
                return
            }

            let currentNode = this.tail
            let text = "LinkedList: "
            while (currentNode!.previous) {
                text += `${currentNode!.value} -> `
                currentNode = currentNode!.previous
            }

            text += `${currentNode!.value}`

            console.log(text)
        }
    }

    const list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.prepend(0);
    list.print();
    list.printReverse();
    list.removeFromEnd();
    list.print();
    list.removeFromFront();
    list.print();
}