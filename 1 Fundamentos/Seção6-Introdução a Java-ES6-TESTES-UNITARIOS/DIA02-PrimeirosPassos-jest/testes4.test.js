const techlist = (array,nome) => {
let arrey =  [
{tech: '', 
name: ''

}


]

for (let index = 0; index < array.lenght; index += 1) {
if ( array[index] ===  'string') {
    arrey +=  'tech' + array
    arrey +=  'name' + nome
}
}
return arrey.sort();
};

console.log(techlist(['React', 'Jest', 'HTML', 'CSS', 'JavaScript']));