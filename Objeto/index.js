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

console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

const aluno = new Object();
aluno.nome = prompt("Nome: ");
aluno.matricula = prompt("Matrícula: ");
aluno.media = function (nota1, nota2, nota3) {
  return (nota1 + nota2 + nota3) / 3;
};

let nota1 = Number(prompt("Nota1: "));
let nota2 = Number(prompt("Nota2: "));
let nota3 = Number(prompt("Nota3: "));
console.log("Média do aluno: ", aluno.media(nota1, nota2, nota3));

console.log("-------------------------------------------------");
console.log("-------------------------------------------------");

