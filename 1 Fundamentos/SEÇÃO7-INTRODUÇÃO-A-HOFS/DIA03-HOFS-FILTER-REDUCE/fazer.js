const numbers = [50, 85, -30, 3, 15];

let recebeGrande = 0;

numbers.reduce((acc,curr) => {
    if(acc > curr) {
        recebeGrande = acc
        
    }else if (curr > acc) {
        recebeGrande = curr
    }
    
    return recebeGrande
})

const biggest = numbers.reduce((bigger, number) => bigger > number ? bigger : number);

console.log(biggest);
console.log(recebeGrande);