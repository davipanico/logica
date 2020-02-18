var user = require('readline-sync')


var numero = 0
var contador = user.question('Digite um número ')

while (numero <= contador) {
    if (numero % 2 == 0) {
        console.log(numero)
    }
    numero = numero + 1
}