const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');

const addRemove = (event) => {
    const recuperaAclass = document.querySelector('.tech')
    recuperaAclass.classList.remove('tech');
    event.target.classList.add('tech');
    input.value = '';
}

firstLi.addEventListener('click', addRemove);
secondLi.addEventListener('click', addRemove);
thirdLi.addEventListener('click', addRemove);

input.addEventListener('input', (event) => {
     const recuperaAclass = document.querySelector('.tech')
    recuperaAclass.inneText = event.target.value

});

myWebpage.addEventListener('dblclick', () => {
    window.location.replace('https://youtu.be/dQw4w9WgXcQ');
  });

  myWebpage.addEventListener('mouseover',  (event) => {
myWebpage.style.color = 'red'

  })


  myWebpage.addEventListener('mouseout', (event) => {
    event.target.style.color = 'unset';
  });