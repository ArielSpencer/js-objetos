// Para importar um json para o projeto:

const estudante = require('./estudante.json')

// `require` é uma função nativa do Node.js.

// console.log(estudante);
// Retorna:
// {
//   nome: 'Ana',
//   idade: 32,
//   cpf: '23423423423',
//   email: 'ana@email.com',
//   telefones: [ '551198745632', '551198745633' ],
//   endereco: { rua: 'Rua Joseph Climber', numero: '45', complemento: 'apto 43' }
// }

// Assim conseguimos manipular o arquivo:

// console.log(typeof estudante);
// Retorna:
// object

// Quando importamos os dados que vem como objeto podemos utilizar as propriedades como:

const chaves = Object.keys(estudante);
console.log(chaves);

// Nota: Como JSON não é exatamente um objeto JavaScript, para utilizar, precisamos converter os dados para objeto.
// Isso permite usar métodos, percorrer suas propriedades, etc.


// Outra forma, mais comum, de importar JSON é:
// import estudante from './estudante.json';
// O formato `import` requer algumas configurações adicionais para funcionar, enquanto `require` é nativo do Node.js.