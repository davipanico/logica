/** Crie um programa que peça o usuário n números e, 
quando o usuário digitar -1, imprima o maior e o menor, sem levar em consideração o -1 */

var user = require('readline-sync')

var n1 = user.questionInt('Escolha um numero : ')
var n2 = user.questionInt('Escolha um numero : ')
var n3 = user.questionInt('Escolha um numero : ')
var n4 = user.questionInt('Escolha um numero : ')
var n5 = user.questionInt('Escolha um numero : ')
var n6 = user.questionInt('Escolha um numero : ')
var n7 = user.question('Escolha o -1')

while (n7 != -1) {
    var n7 = user.question('Numero errado, escolha o -1')
}

var low = Math.min (n1, n2, n3, n4, n5, n6)
var high = Math.max (n1, n2, n3, n4, n5, n6)

console.log('Maior - ', high, 'Menor - ', low)


