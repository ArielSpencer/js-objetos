// Praticando:
// Ordenar uma lista de objetos com base em uma propriedade específica.

const estudantes = require('./estudantes.json');

function ordena(lista, propriedade) {
  return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1; // Se a propriedade de 'a' for menor, coloca 'a' antes de 'b'
    if (a[propriedade] > b[propriedade]) return 1; // Se a propriedade de 'a' for maior, coloca 'a' depois de 'b'
    return 0; // Se as propriedades forem iguais, mantém a ordem original
  })
}

const listaOrdenada = ordena(estudantes, 'nome');
console.log(listaOrdenada);
