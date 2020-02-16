var user = require('readline-sync')

var nome = user.question('Qual seu nome?: ')
var sexo = user.question('Qual seu Sexo? Masculino ou Feminino?: ')
var estadoCivil = user.question('Qual seu estado civil?: ')

if (sexo == 'Feminino' && estadoCivil == 'Casada') {
    var tempoDeCasado = user.question('Quanto tempo de casada?: ')
    console.log(nome, sexo, estadoCivil, tempoDeCasado)
}
else {
    console.log(nome, sexo, estadoCivil)
}