var user = require('readline-sync')

moedas = ['1 Real', '50 Centavos' , '25 Centavos', '10 Centavos', '5 Centavos', '1 Centavo']

var produto = user.question('Qual o preço do Produto? ')
var quantidadeMoedas = user.question('Quantas moedas você possui? ')
var tipoDeMoeda = user.keyInSelect(moedas, 'Qual seu tipo de moeda?')
console.log(moedas[tipoDeMoeda])

if (moedas[tipoDeMoeda] == '1 Real') {
    var total = quantidadeMoedas * 1
}
else if (moedas[tipoDeMoeda] == '50 Centavos') {
    var total = quantidadeMoedas * 0.50
}
else if (moedas[tipoDeMoeda] == '25 Centavos') {
    var total = quantidadeMoedas * 0.25
}
else if (moedas[tipoDeMoeda] == '10 Centavos') {
    var total = quantidadeMoedas * 0.10
}
else if (moedas[tipoDeMoeda] == '5 Centavos') {
    var total = quantidadeMoedas * 0.05
}
else if (moedas[tipoDeMoeda] == '1 Centavos') {
    var total = quantidadeMoedas * 0.01
};


if (total >= produto) {
    console.log('Você pode comprar o produto')
}
else {
    console.log('Saldo insuficiente')
}
