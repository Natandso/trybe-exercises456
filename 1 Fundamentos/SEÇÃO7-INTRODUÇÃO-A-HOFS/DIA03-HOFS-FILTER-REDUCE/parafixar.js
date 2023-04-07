const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];
//fazendo com filter e reduce
const pegaPares = numbers.filter((item) => item % 2 === 0)
console.log(pegaPares.reduce((acc, curr) => acc + curr));
//fazendo com filter e reduce 

//fazendo só com reduce//
const pega = numbers.reduce((bigger, number) => bigger % 2 === 0 && number % 2 ===0  ? bigger +  number : bigger);
//fazendo só com reduce
console.log(pega);


