// Importando a biblioteca
const leia = require('readline-sync');

// variaveis
let celsius, fahrenheit

// Entrada de dados
celsius = leia.questionFloat("Insira a temperatura em Celsius: ")

// Processamento
fahrenheit = celsius * 1.8 + 32

// Saida de dados - duas formas diferente de saida com o mesmo resultado
console.log("A temperatura em fahrenheit é: " + fahrenheit)
console.log("A temperatura em fahrenheit é: %f" , fahrenheit)