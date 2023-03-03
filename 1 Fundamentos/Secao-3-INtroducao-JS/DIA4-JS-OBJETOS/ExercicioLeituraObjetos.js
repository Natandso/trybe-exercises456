let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
        {
            titulo: 'O Pior Dia de Todos',
            autor: 'Daniela Kopsch',
            editora: 'Tordesilhas',
        },
    ],
};
console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' ' + 'se chama' + ' ' + leitor.livrosFavoritos[0].titulo);

let livroNovo = {
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
}

leitor.livrosFavoritos.push(livroNovo)

console.log(leitor.livrosFavoritos[1].titulo);
//Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, em que “<quantidade>” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.
console.log(leitor.nome +' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');
