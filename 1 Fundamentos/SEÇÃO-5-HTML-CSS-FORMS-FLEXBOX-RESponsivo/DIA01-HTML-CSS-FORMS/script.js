// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

const addFunction = (event) => {
    event.preventDefault();
    console.log(`HREF_LINK Natanzin o brabo`)
    
}

HREF_LINK.addEventListener('click',addFunction)

const Box = (event) => {
    event.preventDefault();
console.log(INPUT_CHECKBOX)
}
INPUT_CHECKBOX.addEventListener('click', Box)

const keypresio = (event) => {
    const character = event.key;
    if(character !== 'a')
    event.preventDefault();

}

INPUT_TEXT.addEventListener('keypress', keypresio)
