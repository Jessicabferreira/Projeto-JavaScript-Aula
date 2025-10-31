const leia = require("readline-sync");

let nome, contador

for (contador = 1; contador < 4; contador++) { // operador de incremento adiciona 1 | contador = contador + 1
    
  nome = leia.question("Digite um nome: ");
  console.log("O " + contador + "º nome digitado foi: " + nome);

}
