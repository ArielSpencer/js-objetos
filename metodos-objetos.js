// Métodos de pesquisa de objetos:

const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS',
  bolsista: false,
  telefones: ['11909090909', '11707070707'],
  // enderecos: [{
  //   rua: 'Legends Way',
  //   numero: '100',
  //   cep: '02114',
  //   cidade: 'Boston',
  // },
  // {
  //   rua: 'Rua Dona Clotilde',
  //   numero: '71',
  //   cidade: null
  // }
  // ]
}

// Utilizar o método Object.keys:

const chavesObjeto = Object.keys(estudante);
console.log(chavesObjeto); // Retorna um array com a lista de chaves e com isso fazer diversas verificações como se há ou não uma propriedade no objeto

// Ex:
if (!chavesObjeto.includes('enderecos')) {
  console.error('É necessário ter um endereço cadastrado.'); // como endereço está comentado retorna o erro.
}

// Métodos:

// Object.keys()
// Quando usar: Use Object.keys() quando você precisa acessar apenas as chaves de um objeto, por exemplo, para verificar se uma determinada propriedade existe ou para iterar sobre as propriedades do objeto.
// Por que usar: Este método é útil quando você quer obter uma lista de todas as chaves de um objeto sem precisar dos valores associados a elas. Como ele retorna um array, você pode usar métodos de array como includes() para verificar a existência de uma chave específica.
// Ex de retorno:
// [ 'nome', 'idade', 'cpf', 'turma', 'bolsista', 'telefones' ]

// Object.values()
// Quando usar: Use Object.values() quando você precisa acessar apenas os valores das propriedades de um objeto, ignorando as chaves.
// Por que usar: Este método é útil quando você está interessado nos dados contidos nas propriedades do objeto, mas não nas chaves que os identificam. Por exemplo, você pode querer somar todos os valores numéricos ou concatenar strings presentes no objeto.
// Ex de retorno:
// [
//   'Ariel Spencer',
//   28,
//   '01234567890',
//   'ADS',
//   false,
//   [ '11909090909', '11707070707' ]
// ]

// Object.entries()
// Quando usar: Use Object.entries() quando você precisa tanto das chaves quanto dos valores, geralmente para iterar sobre ambos ao mesmo tempo.
// Por que usar: Este método é útil para criar pares de chave-valor, especialmente em situações onde você precisa transformar ou reformatar os dados do objeto. Ele retorna um array de arrays, onde cada subarray contém uma chave e seu valor correspondente.
// Ex de retorno:
// [
//   [ 'nome', 'Ariel Spencer' ],
//   [ 'idade', 28 ],
//   [ 'cpf', '01234567890' ],
//   [ 'turma', 'ADS' ],
//   [ 'bolsista', false ],
//   [ 'telefones', [ '11909090909', '11707070707' ] ]
// ]
