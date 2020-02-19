var user = require('readline-sync')

var pergunta = user.question('Qual a letra? (Coloque em CAPSLOCK) ')
soma = Number
var opcoes = ['Sim', 'Não']
var pergunta2 = ''

while (pergunta !== 'B') {
    if (pergunta === 'A') { 
        console.log('Programa encerrado')
        break;
        }
    else if (pergunta !== 'B') {
        console.log('Comando inválido, insira outra letra')
        var pergunta = user.question('Qual a letra? (Coloque em CAPSLOCK ')
        if (pergunta === 'A') {
            console.log('Programa encerrado')
            break;
        }
    }

} 

while (pergunta === 'B') { 
    console.log('Vamos fazer uma soma')
    var num1 = user.questionInt('Qual o primeiro número? ')
    var num2 = user.questionInt('Qual o segundo número ' )
    var soma = num1 + num2
    console.log(soma)
    var pergunta2 = user.question('Deseja fazer outro cálculo? Escreva S para SIM e N para Não ')
    console.log(pergunta2)
    if (pergunta2 === 'S') {
        var pergunta = 'B'
    }
    else if (pergunta2 === 'N') {
        var pergunta = 'A'
        console.log('Programa encerrado, está foi a ultima soma')
    }
    else {
        console.log('Comando inválido, o programa será encerrado')
        break;
    }

    console.log(soma)

}
