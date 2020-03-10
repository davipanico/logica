var x = require('notas-universitarias-util')

console.log(x.default(4))

var user = require('readline-sync')

var g1 = user.questionInt('Qual sua nota 1? ')
var g2 = user.questionInt('Qual sua nota 2? ')
var g3 = user.questionInt('Qual sua nota 3? ')

const notas = {
    g1,
    g2,
    g3
}

console.log(x.default(4).media(notas))


