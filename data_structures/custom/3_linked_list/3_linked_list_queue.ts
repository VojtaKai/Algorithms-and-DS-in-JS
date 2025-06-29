import {LinkedList} from './1_linked_list_tail'

const {LinkedList: ll} = LinkedList

namespace LinkedListQueue {
    class Queue {
        private linkedList: LinkedList.LinkedList

        constructor() {
            this.linkedList = new ll()
        }

        enqueue(element: any) {
            // O(1)
            this.linkedList.append(element)
        }

        dequeue() {
            // O(1)
            return this.linkedList.removeFromFront()
        }

        peek() {
            return this.linkedList.getHead()
        }

        isEmpty() {
            return this.linkedList.isEmpty()
        }

        size() {
            return this.linkedList.getSize()
        }

        print() {
            this.linkedList.print()
        }
    }

    const queue = new Queue()
    console.log('isEmpty:', queue.isEmpty())
    queue.enqueue(10)
    queue.enqueue(20)
    queue.enqueue(30)
    console.log('isEmpty:', queue.isEmpty())
    console.log('Size:', queue.size())
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    console.log(queue.dequeue())
    queue.print()
    console.log('Size:', queue.size())
    console.log('isEmpty:', queue.isEmpty())


}