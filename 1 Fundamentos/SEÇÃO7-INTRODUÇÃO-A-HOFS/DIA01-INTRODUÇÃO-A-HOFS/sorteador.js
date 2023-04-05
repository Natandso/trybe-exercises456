const checado = (number, numero) => number === numero
const geraNUmero = (number,call) => {
    const numero =  Math.floor(Math.random() * 6);
    return call(number, numero) ? 'tu ganho' : 'tu perdeu'
}



console.log(geraNUmero(2,checado));