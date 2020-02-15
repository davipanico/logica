var user = require('readline-sync')

var maca = 0.30

var quantidadeMaca = user.question('Quantas maças você quer comprar? : ')

if (quantidadeMaca <= 6) {
    console.log('R$', maca * quantidadeMaca)
}
else {
    var maca = 0.25;
    console.log('R$', maca * quantidadeMaca)
}