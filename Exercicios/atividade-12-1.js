var user = require('readline-sync')

class Carro {
    constructor (nome, modelo, cor) {
        this.nome = nome,
        this.modelo = modelo,
        this.cor = cor

    }
}

function getCar() {
    var nome = user.question('Qual o nome do carro? ')
    var modelo = user.question('Qual o modelo do carro? ')
    var cor = user.question('Qual a cor do carro? ')
    return new Carro(nome, modelo, cor)
}

function getCar2() {
    var nome = user.question('Qual o nome do carro? ')
    var modelo = user.question('Qual o modelo do carro? ')
    var cor = user.question('Qual a cor do carro? ')
    return new Carro(nome, modelo, cor)
}

var carro = getCar()
var carro2 = getCar2()

if (carro.modelo === carro2.modelo) {
    console.log('Os carros são iguais')
}
else {
    console.log('Os carros não são iguais')
}