const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];
const expectedResult4 = 20;
let split = names.toString();
let splitos = split.split('')


const countA = () => {
  let contador = 0;
  let mapa = splitos.map((item) => item === 'a' || item === 'A' ? contador += 1 : contador += 0, {
  })
  return contador
}

console.log(countA());