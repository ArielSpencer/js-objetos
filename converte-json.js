// Para trabalhar como o JSON onde solicitamos e enviamos os dados precisamos realizar conversões para conseguir manipular do front-end para o back-end e vice-versa.

const estudante = require('./estudante.json');

// Para converter utilizamos o formato strings:

const stringEstudante = JSON.stringify(estudante);

// console.log(stringEstudante);
// Retorna:
// {"nome":"Ana","idade":32,"cpf":"23423423423","email":"ana@email.com","telefones":["551198745632","551198745633"],"endereco":{"rua":"Rua Joseph Climber","numero":"45","complemento":"apto 43"}}

// console.log(typeof stringEstudante);
// Retorna:
// string

// console.log(stringEstudante.nome);
// Nesse caso, o JavaScript retorna 'undefined' em vez de um erro.
// como convertemos para string todos os dados estão em uma única string, assim não podemos mais manipular nesse formato.

// Para desconverter utilizamos o parse():
const objEstudante = JSON.parse(stringEstudante);

console.log(objEstudante.nome);
// Retorna
// Ana

// Em resumo:
// Utilizamos o stringify() para converter em string e assim transmitir os dados por exemplo para conexão HTTP;
// Utilizamos o parse() para desconverter, e assim conseguir manipular os dados no JavaScript.
