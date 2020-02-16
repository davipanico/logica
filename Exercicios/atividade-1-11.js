var user = require('readline-sync')

var nota1 = user.question ('Qual sua nota?')
var nota2 = user.question ('Qual sua nota?')
var nota3 = user.question ('Qual sua nota?')
var notaMedia = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3

if (notaMedia >= 7) {
    console.log('Aprovado')
}
else {
    console.log('Reprovado')
}