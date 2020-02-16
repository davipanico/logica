var user = require('readline-sync')

var angulo1 = user.question('Qual o valor do angulo 1? : ')
var angulo2 = user.question('Qual o valor do angulo 2? : ')
var angulo3 = user.question('Qual o valor do angulo 3? : ')
var resultado = parseInt(angulo1) + parseInt(angulo2) + parseInt(angulo3)

if (resultado === 90) {
    console.log('Triangulo Retângulo')
}
else if (resultado > 90) {
    console.log('Triângulo Obtusângulo')
}
else if (resultado < 90) {
    console.log('Triângulo Acutângulo')
}