// const estudante = {
//   nome: 'Ariel Spencer',
//   idade: 28,
//   cpf: '01234567890',
//   turma: 'ADS',
//   bolsista: false,
//   telefone1: '11909090909',
//   telefone2: '11707070707',
// }

// quando o objeto tem mais de uma propriedade similar como 2 números de telefone, podemos refatorar o objeto atribuindo um array dessa forma:

const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS',
  bolsista: false,
  telefones: ['11909090909', '11707070707'], // assim, a propriedade "telefones" passa de uma string para um array
}

// para acessar:
console.log(estudante.telefones); // [ '11909090909', '11707070707' ]
console.log(estudante.telefones[0]); // 11909090909
console.log(estudante.telefones[1]); // 11707070707
