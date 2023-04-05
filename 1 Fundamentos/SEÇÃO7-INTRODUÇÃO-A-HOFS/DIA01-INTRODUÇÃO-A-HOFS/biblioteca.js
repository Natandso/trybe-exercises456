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

const expectedResult = 'Stephen King';
const authorBornIn1947 = (ano) => {
  return books.find((anos) => anos.author.birthYear === ano);
};


const expectedResult2 = 'Duna';


const smallerName = (pequeno) => {
  let nameBook;
  books.forEach((livro) => {
    if (!nameBook || livro.name.length < nameBook.length)
      nameBook = livro.name;
  })

  // Variável nameBook que receberá o valor do menor nome;
  return nameBook;
}



const expectedResult3 = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin',
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991,
};

const getNamedBook = (number) => {
  return books.find((pa) => pa.name.length === 26);
} 


console.log(getNamedBook());

const expectedResult5 = false;

function everyoneWasBornOnSecXX() {
  const vejamos = books.every((xis) => xis.author.birthYear < 2000 && xis.author.birthYear > 1900);
  return vejamos
}

const expectedResult8 = true;

const someBookWasReleaseOnThe80s = (decada) => {
  const verdade = books.some((truzin) => truzin.releaseYear >= decada && truzin.releaseYear <= decada + 9);
  return verdade
}




const expectedResult9 = false;

const authorUnique = () => {
return books.every((comparalivro) => books.some((booksome1) => booksome1.author.birthYear === booksome1.author.birthYear && booksome1.author.name !== booksome1.author.name))
}


