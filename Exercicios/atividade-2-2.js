var user = require('readline-sync')

tipos = ['Converter Celsius em Fahrenheit', 'Converter Fahrenheit em Celsius']

var pergunta = user.keyInSelect(tipos, 'O que você deseja fazer? ')

if (tipos[pergunta] == 'Converter Celsius em Fahrenheit') { 
    var celsius = user.question('Quantos Celsius? ')
    var resultado = (celsius * 9 / 5) + 32
    console.log(resultado)
}
else if (tipos[pergunta] == 'Converter Fahrenheit em Celsius') { 
    var fahrenheit = user.question('Quantos Fahrenheit? ')
    var resultado = (fahrenheit - 32) * 5 / 9
    console.log(resultado)
}