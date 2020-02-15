var user = require('readline-sync')

var numero = user.question('Qual seu número? : ')

if (numero %2 ) {
    console.log('Seu número é impar')
} 
else {
    console.log('Seu numero é par')
}