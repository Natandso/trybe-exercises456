let recupera  = document.getElementById('pai')

let criaIrmão = document.createElement('section')
criaIrmão.id = 'irmãoDoElementoOndeVoceEsta'

recupera.appendChild(criaIrmão)


let recupera2 = document.getElementById('elementoOndeVoceEsta')

let makeSon = document.createElement('section')
makeSon.id = 'filhoDoElementoOndeVoceEsta'

recupera2.appendChild(makeSon)

let recupera3 = document.getElementById('primeiroFilhoDoFilho')

let makeSon2 = document.createElement('section')
makeSon2.id = 'filhoDoPrimeiroFilhoDoFilho'

recupera3.appendChild(makeSon2)

document.getElementById('filhoDoPrimeiroFilhoDoFilho').nextElementSibling.previousElementSibling


const terceiroFilho = filhoDoPrimeiroFilhoDoFilho.parentElement.parentElement.nextElementSibling
