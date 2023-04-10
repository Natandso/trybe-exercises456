let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

/* let coisas = [comida,animal,bebida]
const [pet,bebidaa,food] = coisas */

[comida,animal,bebida] = [bebida,animal,comida]

console.log(comida,animal,bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo