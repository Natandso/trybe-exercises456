const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [index1,index2,index3] = primeNumbers

sum(primeNumbers[0], primeNumbers[2]) // 54
sum(index1, index1);
