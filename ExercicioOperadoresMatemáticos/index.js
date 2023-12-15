const prompt = require("prompt-sync")();

let primeiroNumero = Number(prompt("Digite o primeiro número: "));
let segundoNumero = Number(prompt("Digite o segundo número: "));
let terceiroNumero = Number(prompt("Digite o terceiro número: "));
let soma = primeiroNumero + segundoNumero + terceiroNumero;
let subtração = primeiroNumero - segundoNumero - terceiroNumero;
let multiplicacao = primeiroNumero * segundoNumero * terceiroNumero;
console.log("-------------------------------------------------------");
console.log("A soma é: ", soma);
console.log("A subtração é: ", subtração);
console.log("A multiplicação é: ", multiplicacao);

console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");

let primeiroNum = Number(prompt("Digite o primeiro número: "));
let segundoNum = Number(prompt("Digite o segundo número: "));
let media = (primeiroNum + segundoNum) / 2;
console.log("-------------------------------------------------------");
console.log("A média é: ", media);

console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
