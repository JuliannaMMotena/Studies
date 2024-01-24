const prompt = require("prompt-sync")();

const familia = [];

for (let i = 0; i < 5; i++) {
  let novoNome = prompt("Digite o nome do familiar: ");
  familia[i] = novoNome;
}

console.log("Lista de familiares: ", familia);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

const itensMercado = ["Arroz", "Feijao", "Carne", "Salada"];
console.log("Listagem inicial: ", itensMercado);
let i = 0;
do {
  let novoItem = prompt("Digite novo item: ");
  itensMercado.push(novoItem);
  i++;
} while (i < 3);

console.log("Listagem nova: ", itensMercado);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

const precos = [12.5, 17.4, 29.9, 34.7];
const precoDesconto = precos.map((item) => item * 0.9);
const precoAbaixo20 = precos.filter((item) => item < 20);
const valorTotal = precos.reduce((total, item) => total + item);
const todosMaioresQue10 = precos.every((item) => item > 10);
const valorMaiorQue50 = precos.some((item) => item > 50);
console.log(precoDesconto);
console.log(precoAbaixo20);
console.log(valorTotal);
console.log(todosMaioresQue10);
console.log(valorMaiorQue50);

console.log("------------------------------------------------");
console.log("------------------------------------------------");

const alunos = [
  { id: 0, nome: "João" },
  { id: 5, nome: "Vivian" },
  { id: 2, nome: "Alex" },
];

// Formas de fazer a função:
//Forma 1:
alunos.sort(function (aluno1, aluno2) {
  return aluno1.id - aluno2.id;
});
console.log(alunos);

// Forma 2: Arrow Function => mais simples e moderna:
alunos.sort((aluno1, aluno2) => aluno1.id - aluno2.id);

const possuiVivian = alunos.find((item) => item.nome == "Vivian");
const index = alunos.findIndex((item) => item.nome === "Alex");

console.log(alunos);
console.log(possuiVivian);
console.log(index);
