
let saldo = 1500;

function trybeBank(valor) {
    return 'Seu saldo é de ' + valor + saldo
}
console.log(trybeBank(1500));


function bankSubtraction(sub) {
    return saldo - sub
}
console.log(bankSubtraction(500));

function bankMult(mult) {
    return 'seu salfo doi multiplicado' + saldo * mult 
}
console.log(bankMult(0.11));

function bankDivision(division) {
    return 'seu saldo foi dividido ' + saldo / division
}
console.log(bankDivision(2));
