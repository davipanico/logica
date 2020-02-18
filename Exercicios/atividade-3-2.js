var user = require('readline-sync')

var numero = user.questionInt('Qual o número 1? ')

while (numero <= 0) {
    console.log('Número inválido')
    var numero = user.question('Insira novamente o número ')
}

var numero2 = user.questionInt('Qual o número 2? ')

var multiplicador = numero

while (numero2 <= 0) {
    console.log('Número inválido')
    var numero2 = user.question('Insira novamente o número ')
}

var soma = 0
var somaTotal = 0

while (multiplicador > 0) {
    soma = soma + numero2
    var multiplicador = multiplicador - 1
}

console.log(soma)