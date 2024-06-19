import promptSync from "prompt-sync";
const prompt = promptSync();

const mes = parseInt(prompt("Digite o mês de seu nascimento numericamente: "));

switch (mes) {
  case 1:
    console.log("Nascido em Janeiro");
    break;
  case 6:
    console.log("Nascido em Junho");
    break;
  case 12:
    console.log("Nascido em Dezembro");
    break;
  default:
    console.log("Não nasceu rs");
    break;
}
