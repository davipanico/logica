var user = require('readline-sync')

var anos = user.questionInt('Quantos anos você tem? ')
var anosInt = parseInt(anos)

function converterDatasEmDias(anosInt) {
    var anosInt = anosInt * 365
    console.log(anosInt)
    return anosInt
}

var resultado = converterDatasEmDias(anosInt)
console.log(resultado)


