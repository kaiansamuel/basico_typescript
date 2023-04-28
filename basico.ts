//string
const a: string = 'Hello World!'
console.log(a)

//numbers
let idade: number = 41
idade = 41.5
console.log(`A idade é ${idade}`)

//boolean
let possuiHobbies: boolean = false
console.log(`Tem hobbie? ${possuiHobbies}`)

//tipos explicitos
let minhaIdade: any
minhaIdade = 41
console.log(typeof minhaIdade)
minhaIdade = '27'
console.log(typeof minhaIdade)

// array
let hobies: any[] = ['Cozinhar', 'Praticar Esportes']

hobies = [100, 200, 300]
console.log(hobies)

//tuplas
let endereco: [string, number, string] = ['Avenida Principal', 99, 'Bloco A']

endereco = ['Rua da Direita', 98, 'Bloco B']

enum Cor {
  Cinza,
  Verde = 100,
  Azul = 10,
  Laranja,
  Amarelo,
  Vermelho = 100
}
let minhaCor = Cor.Verde
console.log(minhaCor)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

//Interface

interface Humano {
  nome: string
  idade?: number
}
function saudarComOla(pessoa: Humano){
  console.log(`Olá ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano){
  pessoa.nome = 'Joana'
}

const pessoa = {
  nome: 'João',
  idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
saudarComOla({ nome: 'Jonas', idade: 27 })
