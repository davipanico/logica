var user = require('readline-sync')

var salario = user.question('Qual o seu salário? ')

if (salario <= 0) {
    console.log('Valor inválido')
}

var valorEmprestimo = user.question('Quanto você quer de empréstimo? ')
var valorEmprestimoInt = parseInt(valorEmprestimo)

if (valorEmprestimoInt <= 0) {
    console.log('Valor inválido')
}

var numeroParcelas = [1, 2, 3, 4, 5, 6, 7, 8]
var parcelas = user.keyInSelect(numeroParcelas, 'Em quantas parcelas? ')

var porcento =( (30 * salario) / 100)
console.log(porcento)

if (valorEmprestimo > porcento) {
    console.log('Não será possível, o valor de empréstimo ultrapassa 30% do seu salário')
}
else {
    console.log('Parabéns, empréstimo aprovado', 'Valor total: R$', valorEmprestimo, 'em', numeroParcelas[parcelas], 'Parcelas de R$', valorEmprestimo / numeroParcelas[parcelas])
}