const Stack = require('./stack')

function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    const halfLength = Math.ceil(s.length/2)

    const stackA = new Stack(), stackB = new Stack()
    
    for (let i = 0; i < halfLength; i++) {
        stackA.push(s[i])
    }

    if (s.length % 2 > 0) {
        for (let i = (s.length - 1); i >= halfLength - 1; i--) {
            stackB.push(s[i])
        }
    } else {
        for (let i = (s.length - 1); i > halfLength - 1; i--) {
            stackB.push(s[i])
        }
    }
    
    let currA = stackA.top, currB = stackB.top

    while (currA !== null && currA.data === currB.data) {
        currA = currA.next
        currB = currB.next
    }

    if (currA === null) {
        return true
    } else {
        return false
    }
}

// True, true, true, false
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
console.log(is_palindrome("Tauhida"));