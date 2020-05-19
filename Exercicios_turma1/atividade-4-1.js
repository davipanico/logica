// (OBRIGATÓRIO) ​Escreva um programa que pedirá para o usuário dois números entre 1e 100. 
// O programa deve, então, iterar de um em um do menor pro maior, sempre imprimindo o número na tela do usuário. 
//Entretanto, caso o número seja divisível por 7,o programa deve ao invés disso imprimir a palavra “Ping”. 
//Caso o número seja divisívelpor 5, o programa deve imprimir “Pong”. Caso o número seja divisível por 7 e 5, 
//o programa deveria imprimir a mensagem “Ping Pong”. Dica: Neste exercício vocês talvezprecisem fazer uso 
// do recurso “user.questionInt()” que transforma o conteúdo de uminput do usuário de string para inteiro.2.


var user = require('readline-sync')

var n1 = user.questionInt("Escolha o primeiro numero : ")

while (n1 < 1 || n1 > 100) {
    console.log("O numero não está entre 1 e 100")
    var n1 = user.questionInt("Escolha o primeiro numero : ")
}

var n2 = user.questionInt("Escolha o segundo numero : ")

while (n2 < 1 || n2 > 100) {
    console.log("O numero não está entre 1 e 100")
    var n1 = user.questionInt("Escolha o primeiro numero : ")
}

var highNumber = Math.max (n1, n2);
var lowNumber = Math.min (n1, n2)

console.log(highNumber, lowNumber)

while (lowNumber <= highNumber) {
    if (lowNumber % 7 == 0 && lowNumber % 5 == 0 ) {
        console.log("PING PONG")
    }
    else if (lowNumber % 7 == 0) {
        console.log("PING")
    }
    else if (lowNumber % 5 == 0) {
        console.log("PONG")
    }
    else {
        console.log(lowNumber)
    }
    lowNumber++
}


