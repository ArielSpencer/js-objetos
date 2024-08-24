// Como Utilizar o Spread Operator para Expandir e Mesclar Objetos e Arrays

const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['5511101010101', '5511202020202', '5511303030303'],
  enderecos: [{
    rua: 'Legends Way',
    numero: '100',
    cep: '02114',
    cidade: 'Boston',
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    cidade: null
  }
  ]
}

// Vamos supor que eu queria apenas os dois primeiros telefones do estudante José, para isso:
function exibirTelefones(telefone1, telefone2) {
  console.log(`ligar para ${telefone1}`);
  console.log(`ligar para ${telefone2}`);
}

// Dessa forma funciona:
exibirTelefones(estudante.telefones[0], estudante.telefones[1]);

// Porém uma maneira mais otimizada para não precisar passar o indice seria utilizando o Spread operator (...)
// Para que o operador espalhe o array, abrindo todos os valores dentro dele.
console.log(...estudante.telefones)
// Retorno: 5511101010101 5511202020202 5511303030303
// Mas utilizando a função que chama apenas os dois primeiros valores:
exibirTelefones(...estudante.telefones);
// Retorna: ligar para 5511101010101 e ligar para 5511202020202

// Outro exemplo de utilização:
// Para preparar os dados necessários de um estudante para enviar uma carta

// Forma não otimizada:
const dadosEnvio = {
  destinatario: estudante.nome,
  endereco: estudante.enderecos[0]
};

console.log(dadosEnvio);

// Forma melhor, mas ainda não otimizada:
const dadosEnvio2 = {
  destinatario: estudante.nome,
  rua: estudante.enderecos[0].rua,
  numero: estudante.enderecos[0].numero,
  cep: estudante.enderecos[0].cep,
  cidade: estudante.enderecos[0].cidade
};

console.log(dadosEnvio2);

// Forma otimizada:
const dadosEnvioOtimizados = {
  destinatario: estudante.nome,
  ...estudante.enderecos[0]
};

console.log(dadosEnvioOtimizados);

// retornando:

// {
//   destinatario: 'José Silva',
//   rua: 'Legends Way',
//   numero: '100',
//   cep: '02114',
//   cidade: 'Boston'
// }
