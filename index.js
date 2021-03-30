function range(a, b) {
    let num = a
    let result = []
    for (let i = a; i < b + 1; i++) {
        result.push(i) 
    }
    return result
}

function sum(array) {
    return array.reduce((a, b) => a + b)
}