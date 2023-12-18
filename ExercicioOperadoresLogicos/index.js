const prompt = require("prompt-sync")();

console.log("Opções de Bilhetes:");
console.log("1. premium");
console.log("2. outros");
let idade = Number(prompt("Digite sua idade: "));
let tipoBilhete = prompt("Digite o tipo do seu bilhete: ");
let preferencial = idade > 60 || tipoBilhete == "premium";
console.log("----------------------------------------------");
console.log("Embarque preferencial:", preferencial);

console.log("-------------------------------------------------------");
console.log("-------------------------------------------------------");
