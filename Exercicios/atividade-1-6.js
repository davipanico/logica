var user = require('readline-sync');

var valor1 = user.question('Qual o seu sexo? Masculino ou Feminino? : ')
var valor2 = user.question('Qual sua altura? : ')

if (valor1 == 'Masculino') {
    console.log('IMC: ', (72.7 * valor2 - 58).toFixed(2))
}
else if (valor1 == 'Feminino') {
    console.log('IMC: ', (62.1 * valor2 - 44.7).toFixed(2))
}
else {
    console.log('Sexo não encontrado')
}


