const estudante = {
  nome: 'Ariel Spencer',
  idade: 28,
  cpf: '01234567890',
  turma: 'ADS'
}

// Para acessar o objeto completo, apenas chamamos a variável estudante:
console.log(estudante) // { nome: 'Ariel Spencer', idade: 28, cpf: '01234567890', turma: 'ADS' }

// Para acessar um dado específico, podemos utilizar a "notação de ponto":
console.log(estudante.nome); // Acessa o valor da propriedade Nome;
console.log(estudante.idade); // Idade;
console.log(estudante.cpf); // CPF;
console.log(estudante.turma); // Turma.

// Assim, acessamos o valor da propriedade do objeto que queremos, facilitando a manipulação desses dados.
console.log(`o nome do estudante é ${estudante.nome}.`);
console.log(`os três primeiros números do CPF são ${estudante.cpf.substring(0, 3)}.`); // substring é um método válido apenas para strings que retorna uma parte da string.
