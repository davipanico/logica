/** (OBRIGATÓRIO) ​Escreva um programa que calcule a soma de todos os múltiplos de 3e de 5 entre 1 e 1000 */

var end = 1000
var start = 1
var total = 0

var listOfNumbers = []

while (start < end) {
    if (start % 3 == 0 && start %5 == 0) {
        listOfNumbers.push(start)
    }
    start++
}

for (var i = 0; i < listOfNumbers.length; i++) {
    total = total + listOfNumbers[i];
}

console.log(total)
