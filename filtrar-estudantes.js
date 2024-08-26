// Praticando:
// Filtrar estudantes que não possuem endereço, para que enviar a secretaria que solicite os endereços que estiverem faltando.

const estudantes = require('./estudantes.json');

function filtraPorPropriedade(lista, propriedade) {
  return lista.filter((estudante) => {
    return !estudante.endereco.hasOwnProperty(propriedade);
  })
}

const listaEnderecosIncompletos = filtraPorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);

// Nota:
// O método hasOwnProperty() retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida
// no próprio objeto em questão (ao contrário de uma propriedade herdada).
