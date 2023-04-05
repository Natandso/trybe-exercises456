const names = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => names.some((arr) => name === arr);


console.log(hasName(names, 'Ana'));
console.log(hasName(names, 'Pedro'));