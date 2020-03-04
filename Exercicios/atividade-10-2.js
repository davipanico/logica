var user = require('readline-sync')
var fs = require('fs')

function infoCarro() {
    var carro = new Object() 
    carro.cor = user.question('Qual a cor do carro? '),
    carro.marca = user.question('Qual a marca do carro? '),
    carro.modelo = user.question('Qual a modelo do carro? ')
    return carro
}
var carroResultado = infoCarro()
var listaDeCarros = []
listaDeCarros.push(carroResultado)
var carroSerializado = JSON.stringify(listaDeCarros)
var caminhoDoArquivo = './Exercicios/data/carro.json'
fs.writeFileSync(caminhoDoArquivo, carroSerializado)
