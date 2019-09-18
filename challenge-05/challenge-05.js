/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 'lucas', 22, null, true];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(arr) {
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function arrayIndex(arr,idx) {
    return arr[idx];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arr = [1, 'lucas', { ninja: true }, ['ctrl', 'alt', 'del'], true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(arrayIndex(arr, 0));
console.log(arrayIndex(arr, 1));
console.log(arrayIndex(arr, 2));
console.log(arrayIndex(arr, 3));
console.log(arrayIndex(arr, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName) {
    var bookshelf = {
        'O Mundo de Sofia': {
            quantidadePaginas: 568,
            autor: 'Jostein Gaarder',
            editora: 'Seguinte'
        },
        'O Poder do Habito': {
            quantidadePaginas: 408,
            autor: 'Charles Duhigg',
            editora: 'Objetiva'
        },
        'Mindset': {
            quantidadePaginas: 312,
            autor: 'Carol S. Dweck',
            editora: 'Objetiva'
        }
    }

    return !bookName ? bookshelf : bookshelf[bookName]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
var bookName = 'O Mundo de Sofia';
console.log('O livro ' + bookName +  ' tem ' + book(bookName).quantidadePaginas + ' páginas!');

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
var bookName = 'O Poder do Habito';
console.log('O autor do livro ' + bookName + ' é ' + book(bookName).autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
var bookName = 'Mindset';
console.log('O livro ' + bookName + ' foi publicado pela editora ' + book(bookName).editora)
