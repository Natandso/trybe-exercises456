let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let sumArray = 0;

for (let index = 0; index < numbers.length; index += 1) {
    console.log(numbers[index]);
    sumArray += numbers[index]

}
let SumAritmética = sumArray / numbers.length;
console.log(sumArray);
console.log(SumAritmética);
if (SumAritmética > 20) {
    console.log('Valor maior que 20');
} else {
    console.log('Valor menor ou igual a 20');
}

let maiorNumero = 0;
let numberImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
        maiorNumero = numbers[index]
    }

    if (numbers[index] % 2 === 0) {
        numberImpar = numbers[index]
        console.log(numberImpar);


    } else {
        console.log('Nenhum valor ímpar encontrado');
    }
}

console.log(maiorNumero);

let smallNumber = 2;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < smallNumber) {
        smallNumber = numbers[index]
    }

}
console.log(smallNumber);

let numbersArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

for (let index = 0; index < numbersArrays.length; index += 1) {
    console.log(numbersArrays[index] / 2);

}