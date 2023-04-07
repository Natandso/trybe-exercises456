const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];

  const expectedResult1 = "George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.";

const reduceNames = () => {
  
    return books.reduce((acc, curr) => `${acc + curr.author.name}, `,'')
}
//outra maneira de fazer o reducenames usando concat

/* const reduceNames = () => {
  
    return books.reduce((acc, curr) => {
        return acc.concat(`${curr.author.name}, `);
    },'')
}

console.log(reduceNames());
 */

//outra maneira

const expectedResult2 = 43;

const averageAge = () => {
  const rescueAge =  books.map((item) => item.releaseYear - item.author.birthYear) 
const sumAge = rescueAge.reduce((acc,curr) => acc + curr)
return sumAge / rescueAge.length

}

console.log(averageAge());

//outro jeito de fazer tbm
const averageAge1 = () => { //outro jeito de fazer tbm
  const numberOfBooks = books.length;

  const sumOfAges = books.reduce((sum, book) => {
    return sum + (book.releaseYear - book.author.birthYear);
  }, 0);
return sumOfAges / numberOfBooks;
}
// logo acima 


const expectedResult3 = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  };
  
  const longestNamedBook = () => {
    return books.reduce((acc,curry) => acc.name.length > curry.name.length ? acc : curry)
  }

