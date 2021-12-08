window.onload = function() {
    let myBtn = document.getElementById('start-race');
    let car1 = document.querySelector('.car1');
    let car2 = document.querySelector('.car2');


reset()

    myBtn.addEventListener('click', function(event) {
        event.target.innerText = "Acelera!";
        car1.style.marginLeft = parseInt(car1.style.marginLeft) + (Math.random() * 100) + 'px'
        car2.style.marginLeft = parseInt(car2.style.marginLeft) + (Math.random() * 100) + 'px'
        
        if(parseInt(car1.style.marginLeft) > window.innerWidth) {
            alert('Moto VERMELHA ganhou!')
            reset()
            event.target.innerText = "Iniciar corrida!"
        }

        if(parseInt(car2.style.marginLeft) > window.innerWidth) {
            alert('Moto VERDE ganhou!')
            reset()
            event.target.innerText = "Iniciar corrida!"
        }

    })

    function reset() {
        car1.style.marginLeft = 0
        car2.style.marginLeft = 0
    }

}