var user = require('readline-sync')

var idade = user.question('Qual sua idade? : ')

if (idade < 16) {
    console.log('Infelizmente você não pode votar!')
}
else {
    console.log('Parabéns você já pode votar')
}