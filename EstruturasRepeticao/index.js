const prompt = require("prompt-sync")();

let maiorNumero = Number.MIN_SAFE_INTEGER;

let numeros = 0;
for (let i = 0; i < 5; i++) {
  let numeroAtual = parseFloat(prompt("Digite o número: "));
  if (numeroAtual > maiorNumero) {
    maiorNumero = numeroAtual;
  }
}

console.log("O maior número digitado é o: ", maiorNumero);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

const carro = new Object();
carro.ano = prompt("Ano: ");
carro.marca = prompt("Marca: ");
carro.modelo = prompt("Modelo: ");
carro.cor = prompt("Cor: ");
carro.valor = prompt("Valor: ");

console.log("Dados do carro: ");
for (let propriedade in carro) {
  console.log(propriedade, ":", carro[propriedade]);
}

console.log("------------------------------------------------");
console.log("------------------------------------------------");

const carro2 = [];

for (let i = 0; i < 1; i++) {
  let dadosCarro = new Object();
  dadosCarro.ano = prompt("Ano: ");
  dadosCarro.marca = prompt("Marca: ");
  dadosCarro.modelo = prompt("Modelo: ");
  dadosCarro.cor = prompt("Cor: ");
  dadosCarro.valor = prompt("Valor: ");
  carro2[i] = dadosCarro;
}

console.log("Dados do carro: ", carro2);
