var user = require('readline-sync')
var fs = require('fs')

var carro = new Object()
carro.cor = user.question('Qual a cor do carro? '),
carro.marca = user.question('Qual a marca do carro? '),
carro.modelo = user.question('Qual a modelo do carro? ')

console.log(carro)
