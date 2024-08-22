// Para atribuir funções/comportamentos a um objeto

const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['5511909090909', '5511707070707'],
  media: 8.2,
  estaAprovado: function (mediaBase) { // Nome da função = estaAprovado // parâmetro = mediaBase.
    return this.media >= mediaBase ? true : false // comportamento da função, nesse caso, retorna true ou false com base na comparação da média.
  }, // Além de strings e números, podemos adicionar comportamentos (funções) a objetos, como estudantes, pets, escolas...
  bonusBolsa: (mediaBase) => this.media >= mediaBase ? true : false, // Forma refatorada de declarar uma função usando arrow function
}

// Nota:
// this = contexto de execução atual (normalmente o objeto ao qual a função pertence). No caso de funções normais, o this se refere ao objeto estudante.


// Porém, em arrow functions, o this não se refere ao objeto que define a função, mas sim ao contexto de onde a função foi criada.
// Por isso, no exemplo acima, utilizamos `estudante.media` diretamente na arrow function para evitar problemas com o contexto de this.


console.log(estudante.estaAprovado(7)) // Chamando a função com mediaBase = 7 o resultado é true.
console.log(estudante.bonusBolsa(8)) // Declarando "bonusBolsa: (mediaBase) => this.media >= mediaBase ? true : false," o resultado sempre será false pois arrow function não lida bem com contexto
// Para funcionar a declaração teria que seguir o padrão: "bonusBolsa: (mediaBase) => estudante.media >= mediaBase";

// Curiosidade:
// Analisando a estrutura de console.log("Hello World!"), podemos observar que log é um método que pertence a um objeto global chamado console.
// Uma função que é executada dentro do contexto de um objeto é chamada de método.
// É por isso que arrays possuem métodos de array, funções possuem métodos associados a funções, e strings possuem métodos de string.
// Quando criamos objetos personalizados, também podemos definir nossos próprios métodos para esses objetos.