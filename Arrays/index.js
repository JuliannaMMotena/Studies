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
