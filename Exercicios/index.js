const prompt = require("prompt-sync")();

let primeiroJogador = prompt("Digite seu nome: ");
let clubePrimeiroJogador = prompt("Digite seu clube: ");
let segundoJogador = prompt("Digite seu nome: ");
let clubeSegundoJogador = prompt("Digite seu clube: ");
console.log("--------------------------------------------------");
console.log("Meu nome é: ", primeiroJogador);
console.log("O clube de", primeiroJogador, "é o", clubePrimeiroJogador);
console.log("--------------------------------------------------");
console.log("Meu nome é: ", segundoJogador);
console.log("O clube de", segundoJogador, "é o", clubeSegundoJogador);

console.log("--------------------------------------------------");
console.log("--------------------------------------------------");

let nome = prompt("Digite seu nome completo: ");
let idade = prompt("Digite sua idade: ");
let matricula = prompt("Digite sua matrícula: ");
console.log("--------------------------------------------------");
console.log("Meu nome é: ", nome);
console.log("Minha idade é: ", idade, "anos");
console.log("Minha matrícula é: ", matricula);
