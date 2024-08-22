const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS'
}

// Sabendo quais as propriedades e nome das chaves podemos acessar utilizando por exemplo:
estudante.nome

// Porém, quando não temos essas informações seguimos a seguinte estrutura:

function exibeInfoEstudante(objetoEstudante, infoEstudante) {
  return objetoEstudante[infoEstudante]; // Dessa forma, através dos colchetes podemos passar dados variáveis/parametro.
}

console.log(exibeInfoEstudante(estudante, 'nome')); // Ariel Spencer
console.log(exibeInfoEstudante(estudante, 'cpf')); // 01234567890

// Por baixo dos panos, isso é o mesmo que passarmos:
console.log(estudante['nome']); // Ariel Spencer
console.log(estudante['cpf']); // 01234567890

// Nota:
// obrigatoriamente temos que passar o valor da chave com aspas, para que o js identifique a variável/parametro
// console.log(estudante[nome]); // ReferenceError

// Ao passar uma propriedade que não existe, o js não retorna um erro e sim undefined:
console.log(estudante['pet']); // undefined