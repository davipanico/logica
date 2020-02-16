var user = require('readline-sync')

var numero = user.question('Qual seu número?: ')

if (numero >= 0) {
    console.log('Seu número dobrado é: ', numero * 2 )
}
else {
    console.log('Seu numero triplicado é: ', numero * 3)
}