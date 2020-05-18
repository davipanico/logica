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

function encontraMaior(array) {
    var maior;
    if(array.length < 1) {
       throw new Error('Empty array');
    }

    for (let i = 0; i < array.length; i++) {
        let a, b;
        a = array[i];
        b = array[i+1];

        if (!b) {
            b = 0;
        }

        console.log(`A comparar ${a} com ${b}`);

        if (a.idade > b.idade) {
            maior = a;
        } 
        else if (b.idade > a.idade) {
            maior = b;
        }
        else if(a.idade === b.idade) {
            maior = a;
        } 
        console.log(`O maior é agora ${maior}`);
    }
    return maior;
}
console.log(encontraMaior(alunos));