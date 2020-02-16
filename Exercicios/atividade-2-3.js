var user = require('readline-sync')

var ddi = user.question('Qual seu DDI? ')

if (ddi == 1) {
    console.log(ddi, 'Este DDI é dos Estados Unidos')
}
else if (ddi == 49) {
    console.log(ddi, 'Este DDI é da Alemanha')
}
else if (ddi == 54) {
    console.log(ddi, 'Este DDI é da Argentina')
}
else if (ddi == 55) {
    console.log(ddi, 'Este DDI é do Brasil')
}
else if (ddi == 35) {
    console.log(ddi, 'Este DDI é de Portugal')
}
else {
    console.log('DDI não cadastrado!')
}
