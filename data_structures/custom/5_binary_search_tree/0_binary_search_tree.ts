import { Console } from "console"

namespace BinarySearchTree {
    class Node {
        constructor(
            public value: any, 
            // public parent: Node | null = null, 
            public left: Node | null = null, 
            public right: Node | null = null
        ) {}


        // Returns a string representation of the node when console.logged
        // Shows the current node's value and its left/right child values
        toString(): string {
            return `Node(value: ${this.value}, left: ${this.left?.value}, right: ${this.right?.value})`
        }
    }

    class BinarySearchTree {
        public root: Node | null

        constructor(root: Node | null = null) {
            this.root = root
        }

        isEmpty() {
            return this.root === null
        }

        insert(value: any) {
            const node = new Node(value)

            if (this.isEmpty()) {
                this.root = node
            } else {
                this.insertNode(this.root!, node)
            }

        }

        private insertNode(root: Node, newNode: Node) {
            if (newNode.value < root.value) {
                if (root.left === null) {
                    root.left = newNode
                } else {
                    this.insertNode(root.left, newNode)
                }
            } else {
                if (root.right === null) {
                    root.right = newNode
                } else {
                    this.insertNode(root.right, newNode)
                }
            }
        }

        search(value: any) {
            if (this.isEmpty()) {
                return null
            } else {
                return this.searchNode(this.root!, value)
            }
        }

        private searchNode(root: Node | null, value: any): Node | null {
            if (!root) {
                return null
            } else if (root.value === value) {
                return root
            } else if (value < root.value) {
                return this.searchNode(root.left, value)
            } else {
                return this.searchNode(root.right, value)
            }
        }


        preOrder() {
            const container: Set<Node> = new Set()
            if (this.isEmpty()) {
                return container
            } else {
                return this.preOrderTraversal(this.root, container)
            }
        }

        private preOrderTraversal(root: Node | null, container: Set<Node>) {
            if (root) {
                container.add(root)
                this.preOrderTraversal(root.left, container)
                this.preOrderTraversal(root.right, container)
            }

            return container
        }

        inOrder() {
            const container: Set<Node> = new Set()
            if (this.isEmpty()) {
                return container
            } else {
                return this.inOrderTraversal(this.root, container)
            }
        }

        private inOrderTraversal(root: Node | null, container: Set<Node>) {           
            if (root) {
                this.inOrderTraversal(root.left, container)
                container.add(root)
                this.inOrderTraversal(root.right, container)
            }

            return container
        }

        postOrder() {
            const container: Set<Node> = new Set()
            if (this.isEmpty()) {
                return container
            } else {
                return this.postOrderTraversal(this.root, container)
            }
        }

        private postOrderTraversal(root: Node | null, container: Set<Node>) {           
            if (root) {
                this.postOrderTraversal(root.left, container)
                this.postOrderTraversal(root.right, container)
                container.add(root)
            }           

            return container
        }

        bfsTraversal(root: Node | null) {
            // Here I use an array queue which is not as performant as the implementations with pointers
            const queue: Node[] = []
            const container: Set<Node> = new Set()

            if (root) {
                queue.push(root)
            }

            while (queue.length > 0) {
                const currentNode = queue.shift()!

                container.add(currentNode)
                if (currentNode.left) {
                    queue.push(currentNode.left)
                }
                if (currentNode.right) {
                    queue.push(currentNode.right)
                }
            }

            return container
        }

        min(root: Node | null): Node | null {
            if (!root) {
                return null
            }
            
            if (!root.left) {
                return root
            }

            return this.min(root.left)
        }

        max(root: Node | null): Node | null {
            if (!root) {
                return null
            }

            if (!root.right) {
                return root
            }

            return this.max(root.right)
        }

        delete(value: number) {
            this.root = this.deleteNode(this.root, value)
        }

        deleteNode(root: Node | null, value: any) {
            if (!root) {
                return root
            }

            if (value < root.value) {
                root.left = this.deleteNode(root.left, value)
            } else if (value > root.value) {
                root.right = this.deleteNode(root.right, value)
            } else {
                const leftNode = root.left
                const rightNode = root.right

                if (!leftNode && !rightNode) {
                    return null
                }

                if (!leftNode) {
                    return rightNode
                } else if (!rightNode) {
                    return leftNode
                }
                root.value = this.min(rightNode)!.value
                root.right = this.deleteNode(rightNode, root.value)
            }

            return root
        }

        height(node: Node | null): number {
            if (!node) {
                return 0
            } else {
                const leftHeight = this.height(node.left)
                const rightHeight = this.height(node.right)
                return Math.max(leftHeight, rightHeight) + 1
            }
        }

        printLevel(node: Node | null, level: number) {
            if (!node) {
                return
            }

            if (level === 1) {
                console.log(node.toString())
            } else if (level > 1) {
                this.printLevel(node.left, level - 1)
                this.printLevel(node.right, level - 1)
            }
        }

        // Check whether the tree is a Binary Search Tree
        isBST(node: Node | null, min: number, max: number): boolean {
            if (!node) {
              return true;
            }
            if (node.value < min || node.value > max) {
              return false;
            }
            return (
              this.isBST(node.left, min, node.value) &&
              this.isBST(node.right, node.value, max)
            );
          }
    }

    const bst = new BinarySearchTree()
    console.log(bst.isEmpty())
    bst.insert(10)
    bst.insert(5)
    bst.insert(15)
    bst.insert(3)
    bst.insert(7)
    bst.insert(6)
    bst.insert(13)
    bst.insert(18)

    // console.log(bst.search(7))
    // console.log(bst.search(8))
    console.log(bst.bfsTraversal(bst.root))
    // console.log(bst.bfsTraversal(bst.root))
    // console.log(bst.min(bst.root))
    // console.log(bst.max(bst.root))
    
    // bst.delete(10)
    console.log(bst.bfsTraversal(bst.root))
    console.log(bst.height(bst.root))

    bst.printLevel(bst.root, 4)
}