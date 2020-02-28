var user = require('readline-sync')

var salarioMin = 1.039
var kwValor = salarioMin / 7
var resultado = null
var resultadoComDesconto = null
var resultado2 = null

var usoDeKw = user.questionInt('Quantos Kw foram utilizados?')

if (usoDeKw < 100) {
    console.log('Valor inválido, preencha novamente.')
}
else { 
    var resultado = kwValor * usoDeKw
    console.log('O valor a ser pago é de: ', resultado.toFixed(2))
    var resultadoComDesconto = (resultado * 15) / 100
    var resultado2 = resultado - resultadoComDesconto
    console.log('O valor com desconto é de: ', resultado2.toFixed(2))
}

