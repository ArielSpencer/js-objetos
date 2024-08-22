// Quando queremos aninhar mais de um dado do mesmo tipo, podemos alinhar objetos dentro de arrays dentro de um objeto.

const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS',
  bolsista: false,
  telefones: ['11909090909', '11707070707'],
  enderecos: [{
    rua: 'Legends Way',
    numero: '100',
    cep: '02114',
    cidade: 'Boston',
  }]
}

// Podemos acessar e visualizar a lista completa de endereços armazenados no array de objetos 'enderecos'.
// console.log(estudante.enderecos); // [ { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' } ]

// Ou acessar um endereço específico, indicando o indice do array.
// console.log(estudante.enderecos[0]); // { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' }

// Nota:
// Ao trabalhar com arrays de objetos, é importante lembrar que cada objeto ocupa uma posição no array, independentemente do seu tamanho.
// Um par de chaves { } define um único objeto dentro do array.

// Como 'enderecos' é um array de objetos, podemos usar o método 'push' para adicionar novos objetos a esse array.
estudante.enderecos.push({
  rua: 'Rua Dona Clotilde',
  numero: '71',
  cidade: ''
})

// console.log(estudante.enderecos); // [ { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' }, { rua: 'Rua Dona Clotilde', numero: '71', cidade: '' } ]
// console.log(estudante.enderecos[0]); // { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' }
// console.log(estudante.enderecos[1]); // { rua: 'Rua Dona Clotilde', numero: '71', cidade: '' }

// Para fixar:
// Podemos filtrar o array para retornar apenas os endereços que possuem um valor específico, como a cidade preenchida.

const listaEnderecosComComplemento = estudante.enderecos.filter((endereco) => endereco.cidade);

console.log(listaEnderecosComComplemento); // [ { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' } ]

// Notas:
// Strings vazias retornam 'false', o que faz com que o 'filter' ignore esses elementos no resultado.
// Em um objeto, o valor de uma chave pode ser um dado primitivo (string, número, booleano), um array, ou outro objeto.