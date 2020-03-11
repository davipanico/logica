var user = require('readline-sync')

var nome = user.question('Qual seu nome? ')
var peso = user.questionInt('Qual seu peso? ')
var altura = user.questionInt('Qual sua altura? ')
var imc = ''



class calculoImc {
    constructor(nome){ 
        this.nome = nome
    }
    getImc(){
        imc = (peso / altura ** 2)
    }     
}
var resultado = new calculoImc()
console.log(resultado.imc)

console.log(resultado)