var user = require('readline-sync')

var raio = user.questionInt('Qual o raio da esfera? : ')
var pi = 3.14159

function calcularVolume() {
    var volume = 4 / 3 * pi * raio * raio * raio
    return volume
}
var resultado = calcularVolume()
console.log(resultado)