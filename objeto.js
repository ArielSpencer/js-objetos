// Para armazenar a descrição de um dado como um CPF
const listaCPFs = ['01234567891', '12345678910']; // Uma opção para armazenar um conjunto de informações do mesmo tipo (seja string, number, etc...)

// Porém, ao guardar mais dados de um cliente, além do CPF, dessa forma ficaria algo similar a:
const infosPessoa = ['nome', 'ariel spencer', 'idade', 28];
console.log(infosPessoa[1]);

// Nesse caso, os dados ficam armazenados em sequência, sem um indicador lógico (uma chave identificadora para cada valor).
// Para solucionar isso, podemos utilizar uma estrutura de objeto:
const objetoPessoa = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ads'
}

// Isso é uma ótima opção para armazenar grupos de dados mais complexos, como no caso de "objetoPessoa",
// onde cada valor está associado a uma chave descritiva.