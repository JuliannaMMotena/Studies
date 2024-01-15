const prompt = require("prompt-sync")();

console.log(
  "Requisito para classificação na Copa: ter feito mais de 60 pontos durante o campeonato."
);
let time = prompt("Digite seu time: ");
let pontuação = Number(prompt("Digite sua pontuação: "));
console.log("--------------------------------------");
if (pontuação > 75) {
  console.log(
    "O time",
    time,
    "fez",
    pontuação,
    "de pontuação. Portanto tem excelentes chances de classificação."
  );
} else if (pontuação >= 60 && pontuação <= 75) {
  console.log(
    "O time",
    time,
    "fez",
    pontuação,
    "de pontuação. Portanto tem boas chances de se classificar."
  );
} else {
  console.log(
    "O time",
    time,
    "fez",
    pontuação,
    "de pontuação. Portanto tem chances baixas de se classificar"
  );
}

console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

let nomeJogador = prompt("Digite o nome do jogador: ");
if (nomeJogador == "neymar") {
  console.log("É o melhor jogador");
} else {
  console.log("Bom jogador");
}

console.log("--------------------------------------------------------");
console.log("--------------------------------------------------------");

let nomeJogador2 = prompt("Digite o nome do jogador: ");
nomeJogador2 == "neymar"
  ? console.log("É o melhor jogador")
  : console.log("Bom jogador");
