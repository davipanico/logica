var user = require('readline-sync')
var fs = require('fs')

var listaDeCarros = []

function infoCarro() {
    var carro = new Object() 
    carro.cor = user.question('Qual a cor do carro? '),
    carro.marca = user.question('Qual a marca do carro? '),
    carro.modelo = user.question('Qual a modelo do carro? ')
    return carro
}
var carroResultado = infoCarro()
var carroSerializado = JSON.stringify(carroResultado)
var caminhoDoArquivo = './Exercicios/data/carro.json'
fs.writeFileSync(caminhoDoArquivo, carroSerializado)

var carroDaLista = fs.readFileSync('./exercicios/data/carro.json')
var carroObjeto = JSON.parse(carroDaLista)
listaDeCarros.push(carroObjeto)
var listaSerializada = JSON.stringify(listaDeCarros)
var caminhoDoArquivo = './Exercicios/data/carros.json'
fs.writeFileSync(caminhoDoArquivo, listaSerializada)

