var user = require('readline-sync')

var numero1 = 50
var numero2 = 15
var numero3 = 10

if (numero1 < numero2 && numero2 < numero3 ) {
    console.log(numero1, numero2, numero3)
}
else if (numero1 < numero3 && numero3 < numero2) {
    console.log(numero1, numero3, numero2) 
}
else if (numero2 < numero1 && numero1 < numero3 ) {
    console.log(numero1, numero2, numero3)
}
else if (numero2 < numero3 && numero3 < numero1) {
    console.log(numero2, numero3, numero1)
}
else if (numero3 < numero1 && numero1 < numero2) {
    console.log(numero3, numero1, numero2)
}
else if (numero3 < numero2 && numero2 < numero1) {
    console.log(numero3, numero1, numero2)
}


/*chances 1: numero1 < numero2 && numero2 < numero3 => numero1, numero2, numero3

chances 2: numero1 < numero3 && numero3 < numero2 => numero1, numero3, numero2

chances 3: numero2 < numero1 && numero1 < numero3 => numero2, numero1, numero2

chances 4: numero2 < numero3 && numero3 < numero1 => numero2, numero3, numero2

chances 5: numero3 < numero1 && numero1 < numero2 => numero3, numero1, numero2

chances 6: numero3 < numero2 && numero2 < numero1 => numero3, numero2, numero1 */