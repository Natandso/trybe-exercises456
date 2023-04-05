let RecuperaBody = document.querySelector('body')

let adicionaH1 = document.createElement('h1')
adicionaH1.innerHTML = 'TrybeTrip - Agência de Viagens'
adicionaH1.className = 'title'
RecuperaBody.append(adicionaH1)

let main = document.createElement('main')

main.className = 'main-content'

RecuperaBody.append(main)

let RecuperaMain = document.querySelector('main')

let section = document.createElement('section')
section.className = 'center-content'

RecuperaMain.append(section)

let RecuperaSection = document.querySelector('section')

let P = document.createElement('p').innerHTML = 'A melhor agência de viagens do mundo'

RecuperaSection.append(P)

let sectionLeft = document.createElement('section')
sectionLeft.className = 'left-content'
RecuperaMain.append(sectionLeft)

let sectionRight = document.createElement('section')
sectionRight.className = 'right-content'
RecuperaMain.append(sectionRight)


let RecuperaSectionLeft = document.querySelector('.left-content')

let imagem = document.createElement('img')
imagem.className = 'small-image'
imagem.src = 'https://picsum.photos/200'
RecuperaSectionLeft.append(imagem)


let RecuperaSectionRight = document.querySelector('.right-content')

let listaNãoOrdenada = document.createElement('ul')
RecuperaSectionRight.append(listaNãoOrdenada)
const arraynumbers = ['Um', 'Dois', 'Três', 'Quatro', 'Cinco', 'Seis','Sete', 'Oito', 'Nove', 'Dez']
for (let num in arraynumbers){
    let elementLi = document.createElement('li')
    elementLi.innerHTML = arraynumbers[num]
    listaNãoOrdenada.append(elementLi)
}

let RecuperaMainClass = document.querySelector('.main-content')
let h1 = document.createElement('h3')
let h2 = document.createElement('h3')
let h3 = document.createElement('h3')


RecuperaMainClass.append(h1)
RecuperaMainClass.append(h2)
RecuperaMainClass.append(h3)

h1.className = 'description'
h2.className = 'description'
h3.className = 'description'

RecuperaMain.removeChild(sectionLeft)

sectionRight.style.marginRight = 'auto';

section.style.color = 'yellow'

const ul = document.getElementsByTagName('ul')[0];
      ul.lastChild.remove();
      ul.lastChild.remove();




