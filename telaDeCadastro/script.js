let myModal = new bootstrap.Modal(document.getElementById('exampleModal'))

let button = document.getElementById('buttonModal');

button.addEventListener('click', function (){
    myModal.show();
})