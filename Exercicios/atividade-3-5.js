var user = require('readline-sync');

var numero = user.questionInt("Qual o numero? ")
var potencia = user.questionInt("Qual a potencia? ")
var produto = 1


while (potencia >= 1) {
    produto = produto * numero
    potencia--
}

console.log(produto)