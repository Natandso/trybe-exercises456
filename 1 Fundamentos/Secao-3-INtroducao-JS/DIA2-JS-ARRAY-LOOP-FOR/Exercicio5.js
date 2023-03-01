let factorial = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = 1;

for (let index = 1; index <= factorial.length; index += 1) {
    result *= index;
    console.log(result);

}

let word = 'tryber';
let changedWord = ''

for (let index = word.length - 1; index >= 0; index -= 1) {
    changedWord += word[index]

}

console.log(changedWord);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let receiveBig = ''
let receiveSmall = array[0]

for (let indexBig = 0; indexBig < array.length; indexBig += 1) {
    if (indexBig > receiveBig) {
        receiveBig = array[indexBig]

    }
}
console.log(receiveBig);


for (let indexSmall = 0; indexSmall < array.length; indexSmall += 1) {
    if (array[indexSmall].length < receiveSmall.length) { 
        receiveSmall = array[indexSmall];
}
}
console.log(receiveSmall);


