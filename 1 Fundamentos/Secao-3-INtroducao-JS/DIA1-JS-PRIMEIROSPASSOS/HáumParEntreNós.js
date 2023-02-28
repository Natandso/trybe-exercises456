let numero1 = 5;
let numero2 = 10;
let numero3 = 50;

if (numero1 % 2 === 0 || numero2 % 2 === 0 || numero3 % 2 === 0) {
    console.log('True');
} else {
    console.log('False');
}


let custoProduto = 50;
let valorVenda = 100;
let lucro = (valorVenda * 1000) - (custoProduto + 10) * 1000;

console.log(lucro);





let salário = 8000;
let impostoInss = ''
let impostoIR = ''

if (salário === 1556.94) {
    impostoInss = salário * 0.08
} else if (salário >= 1556.94 && salário <= 2594.92) {
    impostoInss = salário * 0.09
} else if (salário >= 2594.93 && salário <= 5189.82) {
    impostoInss = salário * 0.11
} else {
    impostoInss = 570.88
}
console.log(impostoInss);


let salárioDescontado = salário - impostoInss;
console.log(salárioDescontado);

if (salárioDescontado <= 1903.98) {
    impostoIR = 0;
} else if (salárioDescontado <= 2826.65) {
    impostoIR = (salárioDescontado * 0.075) - 142.80;
} else if (salárioDescontado <= 3751.05) {
    impostoIR = (salárioDescontado * 0.15) - 354.80;
} else if (salárioDescontado <= 4664.68) {
    impostoIR = (salárioDescontado * 0.225) - 636.13;
} else {
    impostoIR = (salárioDescontado * 0.275) - 869.36;
};

let calculoDoImposto = salárioDescontado - impostoIR;
console.log(calculoDoImposto);







