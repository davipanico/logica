var user = require('readline-sync')

var numero = user.questionInt('Insira 0 para finalizar o programa ou qualquer outro número para continuar ')

while (numero > 0) {
    var numero = user.questionInt('Insira 0 para finalizar o programa ou qualquer outro número para continuar ')
}

console.log ('Programa encerrado')