const { number } = require("yup");

const prompt = require("prompt-sync")();

const carro = new Object();
carro.modelo = prompt("Modelo: ");
carro.marca = prompt("Marca: ");
carro.ano = prompt("ano: ");
carro.cor = prompt("cor: ");
carro.valor = Number(prompt("valor: "));
carro.financiamento = function (numeroParcelas) {
  return this.valor / numeroParcelas;
};

console.log("Financiamento do carro: ");
let numeroParcelas = Number(prompt("Número de parcelas: "));
console.log("Valor das parcelas: ", carro.financiamento(numeroParcelas));

console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

const veiculo = new Object();
(veiculo.modelo = "uno"),
  (veiculo.marca = "fiat"),
  (veiculo.ano = "2012"),
  (veiculo.cor = "branco"),
  (veiculo.valor = "25000"),
  (veiculo.calcularFinanciamento = function (parcelas) {
    const financiamento = this.valor / parcelas;
    return financiamento;
  });

let parcelas = Number(prompt("Digite o número de parcelas: "));
console.log("Financiamento do carro: ");
console.log("Modelo: ", veiculo.modelo);
console.log("Marca: ", veiculo.marca);
console.log("Ano: ", veiculo.ano);
console.log("Cor: ", veiculo.cor);
console.log("Valor: ", veiculo.valor);
console.log("Valor das parcelas: ", veiculo.calcularFinanciamento(parcelas));
