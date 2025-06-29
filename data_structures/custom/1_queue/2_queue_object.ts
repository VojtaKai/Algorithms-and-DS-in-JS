namespace Queue {
    class Queue {
        constructor(private items: {[key: string]: any} = {}, private head = 0, private tail = 0) {}

        enqueue(element: any) {
            this.items[this.tail] = element
            this.tail++
        }

        dequeue() {
            // constant time complexity O(1)
            const item = this.items[this.head]
            delete this.items[this.head]
            this.head++
            return item
        }

        peek() {
            if (this.isEmpty()) {
                return null
            }
            return this.items[this.head]
        }

        isEmpty() {
            return (this.tail - this.head) === 0
        }

        size() {
            return this.tail - this.head
        }

        print() {
            console.log(this.items)
        }
    }

    const queue = new Queue();
    console.log(queue.isEmpty());
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    console.log(queue.size());
    queue.print();
    console.log(queue.dequeue());
    console.log(queue.peek());
    queue.print();
}