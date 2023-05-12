
const fechaHoraActual = document.getElementById('fecha-hora-actual');

const actual = new Date();

fechaHoraActual.innerHTML = `${actual.toLocaleDateString()} ${actual.toLocaleTimeString()}`;



function cambiarAModoOscuro() {
    document.body.classList.toggle("modo-oscuro");
}