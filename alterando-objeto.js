const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS'
}

console.log(estudante['pet']); // undefined

// Para criar uma propriedade, a estrutura é:
estudante.pet = 'Mari';

console.log(estudante['pet']); // Mari

// Nota:
// Objetos não são ordenados, ao contrário de arrays. A diferença é que em arrays acessamos os elementos pelo índice, enquanto em objetos, acessamos pelos nomes das propriedades.

// Se a propriedade já existir, o JavaScript altera seu valor, em vez de criar uma nova.
estudante.cpf = '09876543210';
console.log(estudante.cpf) // 09876543210

// Assim como arrays, objetos podem ser criados com const e alterados depois, mas não podemos reatribuir o objeto completamente.

// É possível criar novos objetos:
const estudante2 = {};
estudante2.nome = 'Ana Maria'
estudante2.idade = '27'

console.log(estudante2); // { nome: 'Ana Maria', idade: '27' }

// Mas não é possível reatribuir o objeto:
// estudante2 = { nome: 'Ariel' } // TypeError: Assignment to constant variable.