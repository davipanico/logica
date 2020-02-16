var user = require('readline-sync')

var medida1 = user.question('Qual o valor da medida em cm? :')
var medida2 = user.question('Qual o valor da medida em cm? :')
var medida3 = user.question('Qual o valor da medida em cm? :')

if (medida1 == medida2 && medida2 == medida3) {
    console.log('Triangulo Equilátero')
}
else if (medida1 != medida2 && medida2 != medida3) {
    console.log('Triangulo Escaleno')
}
else if (medida1 != medida2 && medida2 == medida3 || medida1 == medida2 && medida2 != medida3){
    console.log('Triangulo Isóscele')
}