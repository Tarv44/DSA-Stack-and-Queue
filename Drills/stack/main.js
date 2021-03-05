const Stack = require('./stack')

function main() {
    const starTrek = new Stack();

    starTrek.push('Kirk')
    starTrek.push('Spock')
    starTrek.push('McCoy')
    starTrek.push('Scotty')

    starTrek.display()

    starTrek.remove('McCoy')

    starTrek.display()
}

main()