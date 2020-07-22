var rs = require('readline-sync');

var frase = rs.question("Por favor informe uma frase a ser convertida! \n");

palavraChave = "bosta";
palavraCensurada = "estrume";

while(frase.length <= 0){
    console.log("Por favor, insira um texto!");
    frase = rs.question("Por favor informe uma frase a ser convertida! \n"); // como chamar a variavel sem ter que escrever tudo de novo?
}

resultado = frase.replace(palavraChave, palavraCensurada);

console.log(resultado)