// Creates a node containing the data and a reference to the next item
class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        if (this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }

        const node = new _Node(data, this.top)
        this.top = node
    }

    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }

    peek() {
        if (this.top === null) {
            return 'Stack is empty'
        }

        return this.top
    }

    isEmpty() {
        if (this.top === null) {
            return true
        } else {
            return false
        }
    }

    display() {
        console.log('Top -> Bottom')
        let current = this.top
        while (current !== null) {
            console.log(current.data)
            current = current.next
        }
    }

    remove(data) {
        if (this.top === null) {
            return null
        }

        if (this.top.data === data) {
            return this.pop()
        }

        let current = this.top
        let prev = this.top

        while ( current !== null && current.data !== data ) {
            prev = current
            current = current.next
        }

        if ( current === null ) {
            return null
        }

        prev.next = current.next
        return current.data
    }
}

module.exports = Stack;