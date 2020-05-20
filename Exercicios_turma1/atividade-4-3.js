// (OBRIGATÓRIO) ​Escreva um programa javascript para escrever o seguinte padrão na tela, 
// com N linhas:
// *
// **  
// *** 
// **** 
// *****

var user = require('readline-sync');

var start = 1
var count = user.questionInt('Escolha um numero entre 1 e 50: ');
var list = []

while (count < 1 || count > 50) {
    console.log("O numero não está entre 1 e 50")
    var start = user.questionInt('Escolha um numero entre 1 e 50: ')
}

while (start <= count) { 
    list.push('*')
    console.log(list)
    start++
}

