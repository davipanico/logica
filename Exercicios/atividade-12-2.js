var user = require('readline-sync')

var alunos = []
var quantidade = user.questionInt('Quantos alunos você quer cadastrar? ')

class Aluno {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }
}

function getAluno(){
    var nome = user.question('Qual o seu nome? ')
    var idade = user.questionInt('Qual a sua idade? ' )
    return new Aluno(nome, idade)
}

while(quantidade > 0){
   var aluno = getAluno()
   alunos.push(aluno)
   quantidade--
}

console.log(maior)
console.log(alunos)