var user = require('readline-sync')

var numero1 = user.question('Qual o número 1?: ' )
var numero2 = user.question('Qual o número 2?: ' )
var numero1Int = parseInt(numero1)
var numero2Int = parseInt(numero2)

if (numero2Int > 0 ) {
    console.log('Numero 1 é divisível pelo número 2')
}
else {
    console.log('Numero 1 não é divisível por numero 2')
}