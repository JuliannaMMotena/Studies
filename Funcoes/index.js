const prompt = require("prompt-sync")();

const calculaMedia = (n1, n2, n3, n4) => (n1 + n2 + n3 + n4) / 4;

let primeiroNumero = Number(prompt("Digite o 1 número: "));
let segundoNumero = Number(prompt("Digite o 2 número: "));
let terceiroNumero = Number(prompt("Digite o 3 número: "));
let quartoNumero = Number(prompt("Digite o 4 número: "));
let resultadoMedia = calculaMedia(
  primeiroNumero,
  segundoNumero,
  terceiroNumero,
  quartoNumero
);
console.log("---------------------------------------------------");
console.log("A média é: ", resultadoMedia);

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");

function converte(n1) {
  let resultado = n1 * 60;
  return resultado;
}

let horas = Number(prompt("Digite a quantidade de horas: "));
let resultadoConversao = converte(horas);
console.log(horas, "hora(s) equivale(m) a", resultadoConversao, "minutos");

console.log("---------------------------------------------------");
console.log("---------------------------------------------------");
