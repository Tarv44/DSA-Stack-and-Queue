const Queue = require('./queue')

function display(q) {
    let current = q.first
    while (current !== null) {
        console.log(current.value)
        current = current.next
    }
}

function peek(q) {
    if (q.first === null) {
        return
    } else {
        return q.first.value
    }
}

function isEmpty(q) {
    if (q.first === null) {
        return true
    } else {
        return false
    }
}

function main() {
    const starTrekQ = new Queue();

    starTrekQ.enqueue('Kirk')
    starTrekQ.enqueue('Spock')
    starTrekQ.enqueue('Uhura')
    starTrekQ.enqueue('Sulu')
    starTrekQ.enqueue('Checkov')
    
    console.log('Display:')
    display(starTrekQ)
    console.log('First item:', peek(starTrekQ))

    console.log('StarTrekQ is empty:', isEmpty(starTrekQ))
}

main()