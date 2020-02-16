var user = require('readline-sync')

var numero = user.question ('Qual seu número?')
var numeroInteiro = parseInt(numero)

if (numeroInteiro >= 100 && numeroInteiro <= 200) {
    console.log('Você digitou um numero entre 100 e 200.')
}
else {
    console.log('Você digitou um numero fora da faixa entre 100 e 200.')
}