function sum (a,b,c) {
    return a+b+c
}

function multiply (a,b) {
    return a * b
}

function three (a,b,c) {
    return (a+b) * c
}

function pow (a,b) {
    return Math.pow(a,b)
}

function min (a,b,c,d,e) {
    return Math.min(a,b,c,d,e)
}

function decimal (a) {
    return Math.round(a)
}

module.exports = {sum , multiply, three, pow, min, decimal}