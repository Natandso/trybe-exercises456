let recupera = document.getElementById('pai');
let todosFIlhos = recupera.childNodes
//console.log(recupera);
for (let index = todosFIlhos.length -1; index >= 0; index -= 1) {
    let element = todosFIlhos[index];

    if (element.id === 'elementoOndeVoceEsta') {
        element.removeChild(element.firstElementChild);
    }
}
