const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
  const verifyAges = (array,idade) => {
const verifica = Object.values(people).every((array) => idade > 14)
return verifica  
};
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));