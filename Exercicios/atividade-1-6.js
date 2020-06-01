var user = require('readline-sync');

var sexo = user.question('Qual o seu sexo? Masculino ou Feminino? : ')
var altura = user.question('Qual sua altura? : ')

if (sexo == 'Masculino') {
    console.log('IMC: ', (72.7 * altura - 58).toFixed(2))
}
else if (sexo == 'Feminino') {
    console.log('IMC: ', (62.1 * altura - 44.7).toFixed(2))
}
else {
    console.log('Sexo não encontrado')
}


