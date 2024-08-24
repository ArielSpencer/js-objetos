// Para iterar(percorrer) todas as propriedades de um objeto, utilizamos o loop no array, mas no objeto utilizamos o for in:

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
  },
  {
    rua: 'Rua Dona Clotilde',
    numero: '71',
    cidade: null
  }
  ]
}

// For in:

for (let chave in estudante) {
  console.log(chave);
}

// retorna:

// nome
// idade
// cpf
// turma
// bolsista
// telefones
// enderecos

// Logo, para acessar o valor de uma propriedade:

for (let chave in estudante) {
  console.log(estudante[chave]);
}

// retorna:

// Ariel Spencer
// 28
// 01234567890
// ADS
// false
// [ '11909090909', '11707070707' ]
// [
//   { rua: 'Legends Way', numero: '100', cep: '02114', cidade: 'Boston' },
//   { rua: 'Rua Dona Clotilde', numero: '71', cidade: null }
// ]

// refatoração:

for (let chave in estudante) {
  const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
  console.log(texto);
}

// Dessa forma para string o retorno é como esperado:
// ex: a chave nome tem o valor Ariel Spencer
// Porém a chave endereço retorna:
// a chave enderecos tem o valor [object Object],[object Object]

// Nota: object Object é a resposta do JavaScript tentando converter um objeto para string

// Para contornar isso, criamos uma constante chamada tipo para armazenar o resultado de typeof.

for (let chave in estudante) {
  const tipo = typeof estudante[chave]; // Aqui a const vai consultar e armazenar qual o tipo do dado, o que não for string, number, boolean ou função resulta em objeto
  if (tipo !== 'object' && tipo !== 'function') {
    const texto = `a chave ${chave} tem o valor ${estudante[chave]}`
    console.log(texto);
  }
}

// Nota:
// O código dentro do if só será executado se o tipo do valor não for 'object' ou 'function'.
// Isso significa que apenas os valores de tipo 'string', 'number', 'boolean', ou outros tipos primitivos serão exibidos.

// Para converter objetos em strings JSON utilizamos o JSON.stringify(),
// Isso é feito para garantir que objetos complexos sejam exibidos corretamente no console:

for (let chave in estudante) {
  const tipo = typeof estudante[chave];
  if (tipo !== 'function') {  // Inclui objetos, strings, números, booleans, etc.
    const valor = tipo === 'object' ? JSON.stringify(estudante[chave]) : estudante[chave];
    const texto = `a chave ${chave} tem o valor ${valor}`;
    console.log(texto);
  }
}
