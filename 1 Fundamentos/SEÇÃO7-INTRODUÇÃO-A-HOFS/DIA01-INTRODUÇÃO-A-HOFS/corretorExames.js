const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compara = (certo,estudante) => {
    let contador = 0;
    for (let index = 0; index < certo.length; index += 1) {
        for (let index2 = 0; index2 < estudante.length; index2 += 1) {
            let recebe = certo[index]
            let recebe2 = estudante[index]
            if (recebe === recebe2) {
               contador += 1
            }else if (recebe2 === 'N.A'){
                contador += 0
            }else {
                contador -= 0.5
            }
        }
    }
return ` O resultado final dos pontos é ${contador / 10}`
}

console.log(compara(RIGHT_ANSWERS,STUDENT_ANSWERS));