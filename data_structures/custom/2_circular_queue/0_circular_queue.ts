namespace CircularQueue {
    class CircularQueue {
        private items: number[]
        private head: number = 0
        private tail: number = 0
        private _size: number = 0
        
        constructor(private maxSize: number = 3) {
            this.items = new Array(this.maxSize).fill(null)
        }

        enqueue(element: any) {
            if (this.isFull()) {
                console.log('Queue is full')
                return false
            }

            this.items[this.tail] = element
            this.tail = (this.tail + 1) % this.maxSize

            this.size++
            console.log('Enqueued', element)
            return true
        }

        dequeue() {
            if (this.isEmpty()) {
                return null
            }
            const item = this.items[this.head]
            delete this.items[this.head]
            this.head = (this.head + 1) % this.maxSize

            this.size--

            // Reset head and tail if queue is empty.
            if (this.isEmpty()) {
                this.head = 0
                this.tail = 0
            }

            return item
        }

        isFull() {
            return this.size === this.maxSize
        }

        peek() {
            if (this.isEmpty()) {
                return null
            }

            return this.items[this.head]
        }

        isEmpty() {
            return this.size === 0
        }

        get size() {
            return this._size
        }

        set size(value: number) {
            this._size = value
        }

        print() {
            if (this.isEmpty()) {
                console.log('Queue is empty')
                return
            }

            if (this.tail > this.head) {
                console.log(this.items.slice(this.head, this.tail).toString())
            } else {
                console.log(this.items.slice(this.head).concat(this.items.slice(0, this.tail)).toString())
            }
        }
    }

    const queue = new CircularQueue()
    queue.print()
    queue.enqueue(1)
    queue.print()
    queue.enqueue(2)
    queue.print()

    console.log(queue.isFull())
    queue.enqueue(3)
    queue.print()
    queue.enqueue(4)
    queue.print()
    console.log(queue.isFull())
    console.log(queue.size)
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    queue.enqueue(5)
    queue.print()
    queue.enqueue(6)
    queue.print()
    queue.enqueue(7)
    queue.enqueue(7)
    queue.print()
    queue.dequeue()
    queue.print()
    
    // console.log(queue.enqueue(10))
    console.log(queue.isEmpty())
    console.log(queue.isFull())
    console.log(queue.size)
    queue.print()
    console.log(queue.peek())
}