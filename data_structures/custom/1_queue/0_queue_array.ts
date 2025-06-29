namespace Queue {
    class Queue {
        constructor(private items: any[] = []) {}

        enqueue(element: any) {
            this.items.push(element)
        }

        dequeue() {
            // linear time complexity O(n)
            return this.items.shift()
        }

        peek() {
            if (this.isEmpty()) {
                return null
            }
            return this.items[0]
        }

        isEmpty() {
            return this.items.length === 0
        }

        size() {
            return this.items.length
        }

        print() {
            console.log(this.items.toString())
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