import {LinkedList} from './1_linked_list_tail'

const {LinkedList: ll} = LinkedList

namespace LinkedListStack {
    export class LinkedListStack {
        private linkedList: LinkedList.LinkedList

        constructor() {
            this.linkedList = new ll()
        }

        push(element: any) {
            // O(1)
            this.linkedList.prepend(element)
        }

        pop() {
            // O(1)
            return this.linkedList.removeFromFront()
        }

        peek() {
            return this.linkedList.getHead()
        }

        isEmpty() {
            return this.linkedList.isEmpty()
        }

        getSize() {
            return this.linkedList.getSize()
        }

        print() {
            this.linkedList.print()
        }
    }

    const stack = new LinkedListStack()
    console.log(stack.isEmpty())
    stack.push(10)
    stack.print()
    stack.push(20)
    stack.print()
    console.log(stack.isEmpty())
    console.log(stack.peek())
    console.log(stack.getSize())
    stack.pop()
    console.log(stack.peek())
    stack.pop()
    console.log(stack.peek())
    console.log(stack.isEmpty())
}