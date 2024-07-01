import promptSync from "prompt-sync";
const prompt = promptSync();

let nome = prompt("Digite seu nome: ");
let pontuacao = parseInt(prompt("Digite sua pontuação: "));
let carreira = parseInt(prompt("Digite seu tempo de carreira: "));
let assistencias = parseInt(prompt("Digite seu número de assistências: "));

let resultado = pontuacao >= 50 && carreira > 3 && assistencias >= 30;

console.log(nome + " é candidato a melhor jogador do mundo: " + resultado);
