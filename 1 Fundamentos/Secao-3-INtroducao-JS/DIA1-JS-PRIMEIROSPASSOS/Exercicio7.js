let a = 10;
let b = 20;
let c = 30;


Adição = (a + b)
Subtração = (a - b)
Multiplicação = (a * b)
Divisão = (a / b)
Módulo = (a % b)

console.log(Adição);
console.log(Subtração);
console.log(Multiplicação);
console.log(Divisão);
console.log(Módulo);

if (a > b) {
    console.log('A é o Maior Número');
} else if (b > a) {
    console.log('B é o Maior Número');
}

if (a > b && a > c) {
    console.log('A é o Maior Número');
} else if (b > a && b > c) {
    console.log('B é o Maior Número');
} else if (c > a && c > b) {
    console.log('C é o Maior Número');
}

let bolean = false;


if (bolean === true) {
    console.log('Positive');
} else if (bolean === false) {
    console.log('Negative');
} else if (bolean === zero) {
    console.log('zero');
}

let anguloA = 60;
let anguloB = 40;
let anguloC = 80;

if (anguloA + anguloB + anguloC === 180) {
    console.log('true');
} else if (anguloA + anguloB + anguloC < 180) {
    console.log('false');
} else {
    console.log('Erro');
}

let peçaXadrez = 'CAVALO'
let transformaMinicusla = peçaXadrez.toLowerCase();
console.log(transformaMinicusla);

switch (transformaMinicusla) {
    case 'cavalo':
        console.log('Andar em L');


        break;
    case 'rei':
        console.log('anda uma casa em todas as direções');
    default:
        console.log('Erro peça inválida');

        break;
}

let porcetagem = 50;

if (porcetagem >= 90) {
    console.log('A');
} else if (porcetagem >= 80) {
    console.log('B');
} else if (porcetagem >= 70) {
    console.log('C');
} else if (porcetagem >= 60) {
    console.log('D');
} else if (porcetagem >= 50) {
    console.log('E');
} else if (porcetagem < 50) {
    console.log('F');
} else {
    console.log('Erro');
}