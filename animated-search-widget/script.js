const button = document.querySelector('.button');
const input = document.querySelector('.input');
const search = document.querySelector('.search');

button.addEventListener('click', () => {
    if (search.classList.toggle('active')){
        button.style.backgroundColor = 'grey'
    }else {
        button.style.backgroundColor = 'white'
    }
    input.focus()
});