let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: { golden: 2, silver: 3 },

}

console.log('A jogadora ' + player.name + ' ' + player.lastName + ' ' + 'tem ' + player.age + ' ' + 'anos de idade.');

player.BestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]

console.log(player);

console.log('A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes'+ ' ' + player['BestInTheWorld'])

console.log('A jogadora possui ' + player.medals.golden + ' ' + 'medalhas de ouro ' + 'e possui '+ player.medals.silver + ' ' + 'medalhas de prata');