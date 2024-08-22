const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS',
  bolsista: false,
  telefones: ['11909090909', '11707070707'],
}

// Quando precisamos aninhar mais camadas, por exemplo, para adicionar um endereço, podemos criar uma nova propriedade que seja um objeto:

estudante.endereco = {
  rua: 'Legends Way',
  numero: '100', // Por alguns endereços possuirem letras, por exemplo 47A, 47B... atribuimos como string
  cep: '02114', // CEPs geralmente começam com zeros e devem ser tratados como strings para preservar o formato.
  cidade: 'Boston',
}

console.log(estudante.endereco); // { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' }

// Para receber o valor de cidade por exemplo seguimos:

console.log(estudante.endereco.cidade); // Boston