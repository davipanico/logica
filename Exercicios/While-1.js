var user = require('readline-sync')

var numeroCerto = 13

var resposta = user.questionInt('Insira um número de 1 a 50: ')

while (resposta < 1 || resposta > 50) {
    console.log('Seu número não está entre 1 e 50')
    var resposta = user.question('Insira novamente o número ')
}

while (resposta != numeroCerto) {
    console.log("Errrrrrroooouuuuu, tenta de novo")
    var resposta = user.question('Insira novamente um número ')

        while (resposta < 1 || resposta > 50) {
            console.log('Seu número não está entre 1 e 50')
            var resposta = user.question('Insira novamente o número ')
        }
        
};




console.log('Parabéns você acertou!')
console.log('Era uma vez um mexilhiãozinho feio, ele era tão feio, mas tão feio que todo mundo morreu')