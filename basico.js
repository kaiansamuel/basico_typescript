"use strict";
//string
const a = 'Hello World!';
console.log(a);
//numbers
let idade = 41;
idade = 41.5;
console.log(`A idade é ${idade}`);
//boolean
let possuiHobbies = false;
console.log(`Tem hobbie? ${possuiHobbies}`);
//tipos explicitos
let minhaIdade;
minhaIdade = 41;
console.log(typeof minhaIdade);
minhaIdade = '27';
console.log(typeof minhaIdade);
// array
let hobies = ['Cozinhar', 'Praticar Esportes'];
hobies = [100, 200, 300];
console.log(hobies);
//tuplas
let endereco = ['Avenida Principal', 99, 'Bloco A'];
endereco = ['Rua da Direita', 98, 'Bloco B'];
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
function saudarComOla(pessoa) {
    console.log(`Olá ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
saudarComOla({ nome: 'Jonas', idade: 27 });
