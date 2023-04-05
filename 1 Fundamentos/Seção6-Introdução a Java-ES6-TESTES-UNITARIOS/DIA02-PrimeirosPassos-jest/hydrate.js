const hydrate = (string) => {
contador = 0 + 'copos de água'
    for (let index = 0; index < string.length; index += 1) {
if(string[index] === contador) {
    contador += 1
}
}
return contador;
}

console.log(hydrate('4 caipirinhas e 2 cervejas'));

