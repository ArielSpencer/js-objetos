// JSON:
// J ava
// S cript
// O object
// N otation

// Utiliza o JavaScript como base, porém tem algumas diferenças de estruturas, tendo uma estrutura similar ao objeto de JS:

const estudante = {
  nome: 'Mariana',
  idade: 26,
  cpf: '01234567890',
  turma: 'JavaScript',
  telefones: ['11909090909', '11707070707'],
  enderecos: [{
    rua: 'Legends Way',
    numero: '100',
    cep: '02114',
    cidade: 'Boston',
  }]
}

// No formato JSON, o objeto fica assim:

{
  "nome": "Mariana",
    "idade": 26,
      "cpf": "01234567890",
        "turma": "JavaScript",
          "telefones": ["11909090909", "11707070707"],
            "enderecos": [{
              "rua": "Legends Way",
              "numero": "100",
              "cep": "02114",
              "cidade": "Boston"
            }]
}

// Diferenças:
// O JSON não é um tipo de dado do JavaScript, não sendo atribuído a uma variável;
// Utiliza uma notação que pode ser usada em diversas linguagens como Java, C#, Python, etc.
// Os nomes no JSON são sempre entre aspas duplas e não trabalham com aspas simples;
// O JSON não aceita vírgula no final da última propriedade (trailing comma).

// Sintaxe:
// Não são permitidas funções, comentários;
// Suporta apenas tipos primitivos (string, number, boolean, null), arrays e objetos

// Curiosidades:
// O formato JSON oferece uma alternativa mais leve e legível em comparação ao XML, que é mais verboso e baseado em marcação.
