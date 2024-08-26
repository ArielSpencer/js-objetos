// Praticando:

const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave] === valor);
}

const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Amye');

console.log(estudanteEncontrado);

// Retorna
// {
//   nome: 'Amye',
//   email: 'aranahan2@yellowbook.com',
//   telefone: [ '1918820860', '19918820860' ],
//   endereco: {
//     logradouro: 'Rua Karstens',
//     numero: '59',
//     cep: '627533',
//     complemento: 'ap 401'
//   }
// }

// Caso não encontrasse, iria retornar 'undefined'.

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '58996279799');

console.log(telefoneEstudante);
// Retorna 'undefined'

// Nesse caso o 'undefined' acontece por estarmos buscando uma string onde é o dado está como array.
// Para refatorar podemos utilizar a syntaxe:

function buscaInformacaoRefatorada(lista, chave, valor) {
  return lista.find((estudante) => estudante[chave].includes(valor)); // Assim, o JavaScript busca dentro dos arrays os dados solicitados, assumindo que a chave existe e é um array.
}

const telefoneEstudante2 = buscaInformacaoRefatorada(estudantes, 'telefone', '58996279799');

console.log(telefoneEstudante2);
// Retorna:
// {
//   nome: 'Oralle',
//   email: 'orajchert1@clickbank.net',
//   telefone: [ '5896279799', '58996279799' ],
//   endereco: { logradouro: 'Rua Kedzie', numero: '89', cep: '613840' }
// }

const emailEstudante = buscaInformacaoRefatorada(estudantes, 'email', 'xandrieuxh@berkeley.edu');

console.log(emailEstudante);
// Retorna:
// {
//   nome: 'Xylia',
//   email: 'xandrieuxh@berkeley.edu',
//   telefone: [ '7593785074', '75993785074' ],
//   endereco: {
//     logradouro: 'Rua Parkside',
//     numero: '065',
//     cep: 'H65',
//     complemento: 'ap 406'
//   }
// }
