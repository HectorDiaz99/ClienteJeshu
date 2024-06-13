const ham = document.querySelector('.ham');
const bar = document.querySelector('#bar');
const barras = document.querySelectorAll('.ham span');

ham.addEventListener('click', () => {
    bar.classList.toggle('activado');
    barras.forEach(child => { child.classList.toggle('animado') })
})