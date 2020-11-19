//**Exercícios de interpretação de código**
//1) F F T BOOLEAN


// 2)
// undefined
// null
// 11
// 3
// todos os numeros do array apenas o 4 vai ser trocado pelo 19
// 9

//**Exercícios de escrita de código**
//1)
let idade = prompt("Qual sua idade?");
idade = Number(idade);
let idadeAmigx = prompt("Qual a idade da sux melhor amigx?");
idadeAmigx = Number(idadeAmigx);

let maisVelho = prompt("Sua idade é maior do que a do seu melhor amigo?");

let diferencaIdade = idade - idadeAmigx;
console.log(diferencaIdade);

//2)
let numPar = prompt("Olá! Insira aqui um número par:");
console.log(Number(numPar) % 2);
//todos tem resto zero
//todos os números impares tem resto um

//3)
let listaDeTarefas = [];
let perguntaTarefa2 = prompt("Digite a primeira tarefa que você faz no seu dia:");
let perguntaTarefa1 = prompt("Digite a principal tarefa que você faz no seu dia:");
let perguntaTarefa3 = prompt("Digite a última tarefa que você faz no seu dia:");
listaDeTarefas.push(perguntaTarefa1);
listaDeTarefas.push(perguntaTarefa2);
listaDeTarefas.push(perguntaTarefa3);
console.log(listaDeTarefas);

let indice = prompt("Escolha um número de 0 a 2:");
let listaDeTarefas1 = listaDeTarefas.slice(1);
console.log(listaDeTarefas1);

//4)
let nomeDoUsuario = prompt("Olá, qual o seu nome?");
let emailDoUsuario = prompt("Digite seu melhor e-mail aqui, por favor:");
console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso.Seja bem-vinda(o), ${nomeDoUsuario}!`)