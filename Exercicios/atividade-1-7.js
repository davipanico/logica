var user = require('readline-sync')

var pergunta1 = user.question('Quantos lados possui o seu poligono regular? : ')
var pergunta2 = user.question('Quantos cm possui o lado do poligono? : ')

if (pergunta1 <= '2') {
    console.log('Impossível')
}
else if (pergunta1 == '3') {
    console.log('Triangulo', pergunta2 * pergunta1, 'CM')
}
else if (pergunta1 == '4') {
    console.log('Quadrado', pergunta2 * pergunta1, 'CM')
}
else if (pergunta1 == '5') {
    console.log('Pentagono', pergunta2 * pergunta1, 'CM')
}
else {
    console.log('www.pudim.com.br')
}