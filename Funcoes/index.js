const prompt = require("prompt-sync")();

function calculaMedia(n1, n2, n3, n4) {
  let resultado = (n1 + n2 + n3 + n4) / 4;
  return resultado;
}

let primeiroNumero = Number(prompt("Digite o 1 número: "));
let segundoNumero = Number(prompt("Digite o 2 número: "));
let terceiroNumero = Number(prompt("Digite o 3 número: "));
let quartoNumero = Number(prompt("Digite o 4 número: "));
let resultado = calculaMedia(
  primeiroNumero,
  segundoNumero,
  terceiroNumero,
  quartoNumero
);
console.log("---------------------------------------------------");
console.log("A média é: ", resultado);

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

function converte(n1) {
  let resultado = n1 * 60;
  return resultado;
}

let horas = Number(prompt("Digite a quantidade de horas: "));
let resultadoConversao = converte(horas);
console.log(horas, "hora(s) equivale(m) a", resultadoConversao, "minutos");
